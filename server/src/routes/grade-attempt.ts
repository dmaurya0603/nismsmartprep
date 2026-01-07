import { Router } from 'express';
import { supabase } from '../index.js';

const router = Router();

interface GradeRequest {
  userId: string;
  formulaId: string;
  problemId?: string;
  inputs: Record<string, number>;
  userAnswer: number;
  hintsUsed: number;
  timeSpentMs: number;
}

function evaluateFormula(expression: string, inputs: Record<string, number>): number {
  let expr = expression;
  
  for (const [key, value] of Object.entries(inputs)) {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    expr = expr.replace(regex, String(value));
  }
  
  try {
    return eval(expr);
  } catch (error: any) {
    throw new Error(`Failed to evaluate formula: ${error.message}`);
  }
}

function generateStepByStep(
  formula: any,
  inputs: Record<string, number>,
  correctAnswer: number
): Array<{ step: number; description: string; value?: number }> {
  const steps = [];
  
  steps.push({
    step: 1,
    description: `Formula: ${formula.title}`,
  });
  
  steps.push({
    step: 2,
    description: `Expression: ${formula.expression}`,
  });
  
  let substituted = formula.expression;
  for (const [key, value] of Object.entries(inputs)) {
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    substituted = substituted.replace(regex, String(value));
  }
  
  steps.push({
    step: 3,
    description: `Substituting values: ${substituted}`,
  });
  
  steps.push({
    step: 4,
    description: 'Calculating result',
    value: correctAnswer,
  });
  
  steps.push({
    step: 5,
    description: `Final Answer: ${correctAnswer.toFixed(4)}`,
    value: correctAnswer,
  });
  
  return steps;
}

function checkTolerance(
  userAnswer: number,
  correctAnswer: number,
  toleranceType: string,
  toleranceValue: number
): { isCorrect: boolean; percentageError: number } {
  const diff = Math.abs(userAnswer - correctAnswer);
  const percentageError = correctAnswer !== 0 
    ? (diff / Math.abs(correctAnswer)) * 100 
    : 0;
  
  let isCorrect = false;
  
  if (toleranceType === 'absolute') {
    isCorrect = diff <= toleranceValue;
  } else {
    isCorrect = percentageError <= (toleranceValue * 100);
  }
  
  return { isCorrect, percentageError };
}

function calculateScore(
  isCorrect: boolean,
  hintsUsed: number,
  difficulty: number
): { baseScore: number; hintPenalty: number; finalScore: number } {
  const maxScore = 100;
  const baseScore = isCorrect ? maxScore : 0;
  
  const hintPenalties = [0, 0.10, 0.20, 0.30];
  const hintPenalty = hintsUsed >= 0 && hintsUsed <= 3 ? hintPenalties[hintsUsed] : 0;
  
  const difficultyMultiplier = difficulty / 3;
  const finalScore = baseScore * (1 - hintPenalty) * difficultyMultiplier;
  
  return {
    baseScore,
    hintPenalty,
    finalScore,
  };
}

router.post('/', async (req, res) => {
  try {
    const body: GradeRequest = req.body;
    const { userId, formulaId, problemId, inputs, userAnswer, hintsUsed, timeSpentMs } = body;

    if (!userId || !formulaId || !inputs || userAnswer === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Fetch formula
    const { data: formula, error: formulaError } = await supabase
      .from('formulas')
      .select('*')
      .eq('id', formulaId)
      .single();

    if (formulaError) throw formulaError;

    // Calculate correct answer
    const correctAnswer = evaluateFormula(formula.expression, inputs);

    // Check tolerance
    const { isCorrect, percentageError } = checkTolerance(
      userAnswer,
      correctAnswer,
      formula.tolerance_type,
      formula.tolerance_value
    );

    // Calculate score
    const { baseScore, hintPenalty, finalScore } = calculateScore(
      isCorrect,
      hintsUsed,
      formula.difficulty
    );

    // Generate step-by-step solution
    const stepByStep = generateStepByStep(formula, inputs, correctAnswer);

    // Save attempt to database
    const { data: attempt, error: attemptError } = await supabase
      .from('attempts')
      .insert({
        user_id: userId,
        formula_id: formulaId,
        problem_id: problemId,
        inputs,
        user_answer: userAnswer,
        correct_answer: correctAnswer,
        is_correct: isCorrect,
        percentage_error: percentageError,
        hints_used: hintsUsed,
        time_spent_ms: timeSpentMs,
        base_score: baseScore,
        hint_penalty: hintPenalty,
        final_score: finalScore,
      })
      .select()
      .single();

    if (attemptError) throw attemptError;

    res.json({
      attemptId: attempt.id,
      isCorrect,
      correctAnswer,
      percentageError,
      baseScore,
      hintPenalty,
      finalScore,
      stepByStep,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
