/**
 * Quiz Routes - Handle fill-in-the-blank questions
 */

import { Router } from 'express';
import { supabase } from '../index.js';

const router = Router();

/**
 * GET /api/quiz/topics
 * Get all available quiz topics
 */
router.get('/topics', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('topic')
      .order('topic');

    if (error) throw error;

    // Get unique topics
    const topics = [...new Set(data.map((q: any) => q.topic))];

    res.json({ topics });
  } catch (error: any) {
    console.error('Error fetching quiz topics:', error);
    res.status(500).json({ error: 'Failed to fetch quiz topics' });
  }
});

/**
 * GET /api/quiz/questions
 * Get random quiz questions (optional: filter by topic)
 */
router.get('/questions', async (req, res) => {
  try {
    const { topic, limit = 10, difficulty } = req.query;

    let query = supabase
      .from('quiz_questions')
      .select('*');

    if (topic) {
      query = query.eq('topic', topic);
    }

    if (difficulty) {
      query = query.eq('difficulty', difficulty);
    }

    const { data, error } = await query;

    if (error) throw error;

    // Shuffle and limit
    const shuffled = data.sort(() => Math.random() - 0.5);
    const questions = shuffled.slice(0, Number(limit));

    res.json({ questions });
  } catch (error: any) {
    console.error('Error fetching quiz questions:', error);
    res.status(500).json({ error: 'Failed to fetch quiz questions' });
  }
});

/**
 * POST /api/quiz/check-answer
 * Check user's answer for a fill-in-the-blank question
 */
router.post('/check-answer', async (req, res) => {
  try {
    const { questionId, userAnswer, userId, timeSpentMs, hintsUsed } = req.body;

    if (!questionId || !userAnswer) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Fetch the question
    const { data: question, error: questionError } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('id', questionId)
      .single();

    if (questionError || !question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    // Normalize answers for comparison
    const normalizeAnswer = (answer: string) => {
      return answer
        .toLowerCase()
        .trim()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, ' ');
    };

    const normalizedUserAnswer = normalizeAnswer(userAnswer);
    const normalizedCorrectAnswer = normalizeAnswer(question.answer);

    // Check if answer is correct (with some flexibility)
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer ||
      normalizedCorrectAnswer.includes(normalizedUserAnswer) ||
      normalizedUserAnswer.includes(normalizedCorrectAnswer);

    // Calculate score (0-100)
    let score = 0;
    if (isCorrect) {
      score = 100;
      // Deduct points for hints used
      score -= hintsUsed * 10;
      score = Math.max(0, score);
    }

    // Save attempt if user is logged in
    if (userId && userId !== 'anonymous') {
      const { error: attemptError } = await supabase
        .from('quiz_attempts')
        .insert({
          user_id: userId,
          question_id: questionId,
          user_answer: userAnswer,
          is_correct: isCorrect,
          time_spent_ms: timeSpentMs || 0,
          hints_used: hintsUsed || 0
        });

      if (attemptError) {
        console.error('Error saving quiz attempt:', attemptError);
      }
    }

    res.json({
      isCorrect,
      correctAnswer: question.answer,
      explanation: question.explanation,
      score,
      userAnswer
    });

  } catch (error: any) {
    console.error('Error checking answer:', error);
    res.status(500).json({ error: 'Failed to check answer' });
  }
});

/**
 * GET /api/quiz/stats
 * Get user's quiz statistics
 */
router.get('/stats/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const { data, error } = await supabase
      .from('quiz_attempts')
      .select('is_correct, time_spent_ms')
      .eq('user_id', userId);

    if (error) throw error;

    const totalAttempts = data.length;
    const correctAttempts = data.filter((a: any) => a.is_correct).length;
    const accuracy = totalAttempts > 0 ? (correctAttempts / totalAttempts) * 100 : 0;
    const avgTimeSpent = totalAttempts > 0
      ? data.reduce((sum: number, a: any) => sum + a.time_spent_ms, 0) / totalAttempts
      : 0;

    res.json({
      totalAttempts,
      correctAttempts,
      accuracy,
      avgTimeSpent
    });

  } catch (error: any) {
    console.error('Error fetching quiz stats:', error);
    res.status(500).json({ error: 'Failed to fetch quiz statistics' });
  }
});

export default router;
