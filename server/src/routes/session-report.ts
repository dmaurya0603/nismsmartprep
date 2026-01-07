import { Router } from 'express';
import { supabase } from '../index.js';

const router = Router();

interface CategoryPerformance {
  category: string;
  accuracy: number;
  avgScore: number;
  avgTime: number;
  attempts: number;
}

function generateRecommendation(
  score: number,
  confidence: number
): { recommendation: string; rationale: string } {
  if (score >= 75 && confidence >= 70) {
    return {
      recommendation: 'book_exam',
      rationale: 'Your performance indicates strong readiness for the NISM Research Analyst (XV) exam. You demonstrate solid understanding across multiple formula categories with consistent accuracy.',
    };
  } else if ((score >= 50 && score < 75) || (confidence >= 50 && confidence < 70)) {
    return {
      recommendation: 'borderline',
      rationale: 'You show good foundational knowledge, but there are areas that need improvement. Consider additional practice on weak topics before booking your exam.',
    };
  } else {
    return {
      recommendation: 'not_ready',
      rationale: 'Your current performance suggests you need more preparation before attempting the exam. Focus on understanding core concepts and practicing weak areas systematically.',
    };
  }
}

function generateImprovements(
  categoryPerformance: CategoryPerformance[],
  avgHintsUsed: number,
  avgTime: number
): string[] {
  const improvements: string[] = [];
  
  const weakCategories = categoryPerformance
    .filter(c => c.accuracy < 60)
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, 3);
  
  if (weakCategories.length > 0) {
    improvements.push(
      `Focus on these weak categories: ${weakCategories.map(c => c.category).join(', ')}. Review the formulas and practice more problems in these areas.`
    );
  }
  
  if (avgHintsUsed > 1.5) {
    improvements.push(
      'Try to solve problems independently without hints. Overreliance on hints reduces your score and indicates gaps in understanding.'
    );
  }
  
  if (avgTime > 180000) {
    improvements.push(
      'Work on improving your speed. The exam is time-bound, so practice solving problems more quickly while maintaining accuracy.'
    );
  }
  
  const slowCategories = categoryPerformance
    .filter(c => c.avgTime > 200000)
    .sort((a, b) => b.avgTime - a.avgTime)
    .slice(0, 2);
  
  if (slowCategories.length > 0) {
    improvements.push(
      `You're taking more time on ${slowCategories.map(c => c.category).join(' and ')}. Practice these formulas to build fluency.`
    );
  }
  
  if (improvements.length === 0) {
    improvements.push(
      'Maintain consistent practice across all categories.',
      'Review complex formulas like CAPM, WACC, and DCF models regularly.',
      'Take timed practice sessions to simulate exam conditions.'
    );
  }
  
  return improvements.slice(0, 3);
}

router.post('/', async (req, res) => {
  try {
    const { userId, attemptIds } = req.body;
    
    if (!userId || !attemptIds || attemptIds.length === 0) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const { data: attempts, error: attemptsError } = await supabase
      .from('attempts')
      .select('*, formulas(*)')
      .in('id', attemptIds)
      .eq('user_id', userId);
    
    if (attemptsError) throw attemptsError;
    
    const totalAttempts = attempts.length;
    const correctAttempts = attempts.filter((a: any) => a.is_correct).length;
    const aggregatedScore = attempts.reduce((sum: number, a: any) => sum + a.final_score, 0) / totalAttempts;
    
    const categoryMap = new Map<string, any[]>();
    attempts.forEach((attempt: any) => {
      const category = attempt.formulas.category;
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(attempt);
    });
    
    const categoryPerformance: CategoryPerformance[] = Array.from(categoryMap.entries()).map(
      ([category, catAttempts]) => ({
        category,
        accuracy: (catAttempts.filter((a: any) => a.is_correct).length / catAttempts.length) * 100,
        avgScore: catAttempts.reduce((sum: number, a: any) => sum + a.final_score, 0) / catAttempts.length,
        avgTime: catAttempts.reduce((sum: number, a: any) => sum + a.time_spent_ms, 0) / catAttempts.length,
        attempts: catAttempts.length,
      })
    );
    
    const avgHintsUsed = attempts.reduce((sum: number, a: any) => sum + a.hints_used, 0) / totalAttempts;
    const avgTime = attempts.reduce((sum: number, a: any) => sum + a.time_spent_ms, 0) / totalAttempts;
    
    const confidence = (correctAttempts / totalAttempts) * 100;
    const { recommendation, rationale } = generateRecommendation(aggregatedScore, confidence);
    const improvements = generateImprovements(categoryPerformance, avgHintsUsed, avgTime);
    
    const { data: session, error: sessionError } = await supabase
      .from('sessions')
      .insert({
        user_id: userId,
        total_attempts: totalAttempts,
        correct_attempts: correctAttempts,
        aggregated_score: aggregatedScore,
        confidence_level: confidence,
        recommendation,
        rationale,
        improvements,
        category_performance: categoryPerformance,
        avg_hints_used: avgHintsUsed,
        avg_time_spent: avgTime,
      })
      .select()
      .single();
    
    if (sessionError) throw sessionError;
    
    res.json({
      sessionId: session.id,
      totalAttempts,
      correctAttempts,
      aggregatedScore,
      confidenceLevel: confidence,
      recommendation,
      rationale,
      improvements,
      categoryPerformance,
      avgHintsUsed,
      avgTimeSpent: avgTime,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const { userId, sessionId } = req.query;
    
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }
    
    if (sessionId) {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .eq('user_id', userId)
        .eq('id', sessionId)
        .single();
      
      if (error) throw error;
      res.json(data);
    } else {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      res.json(data);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
