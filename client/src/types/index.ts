export interface Formula {
  id: string;
  title: string;
  category: string;
  expression: string;
  variables: Record<string, VariableDefinition>;
  tolerance_type: 'absolute' | 'relative';
  tolerance_value: number;
  difficulty: number;
  description: string;
  hints: string[];
  created_at: string;
}

export interface VariableDefinition {
  label: string;
  min: number;
  max: number;
  unit: string;
}

export interface FormulaInput {
  name: string;
  label: string;
  unit: string;
  min: number;
  max: number;
}

export interface Problem {
  id: string;
  formula_id: string;
  seed_values: Record<string, number>;
  difficulty: number;
  created_at: string;
}

export interface Attempt {
  id: string;
  user_id: string;
  problem_id?: string;
  formula_id: string;
  inputs: Record<string, number>;
  user_answer: number;
  correct_answer: number;
  is_correct: boolean;
  percentage_error: number;
  hints_used: number;
  hint_penalty: number;
  base_score: number;
  final_score: number;
  time_spent_ms: number;
  step_by_step: StepByStep[];
  created_at: string;
}

export interface StepByStep {
  step: number;
  description: string;
  value?: number;
}

export interface Session {
  id: string;
  user_id: string;
  attempt_ids: string[];
  total_attempts: number;
  correct_attempts: number;
  aggregated_score: number;
  confidence_level: number;
  weak_categories: string[];
  recommendation: 'book_exam' | 'borderline' | 'not_ready';
  recommendation_rationale: string;
  top_improvements: string[];
  created_at: string;
  updated_at: string;
}

export interface CategoryInfo {
  category: string;
  count: number;
}

export interface GradeResponse {
  attemptId: string;
  isCorrect: boolean;
  userAnswer: number;
  correctAnswer: number;
  percentageError: number;
  baseScore: number;
  hintPenalty: number;
  finalScore: number;
  stepByStep: StepByStep[];
  hintsUsed: number;
}

export interface SessionReport {
  sessionId: string;
  totalAttempts: number;
  correctAttempts: number;
  aggregatedScore: number;
  confidenceLevel: number;
  recommendation: string;
  rationale: string;
  improvements: string[];
  categoryPerformance: CategoryPerformance[];
  avgHintsUsed: number;
  avgTimeSpent: number;
}

export interface CategoryPerformance {
  category: string;
  accuracy: number;
  avgScore: number;
  avgTime: number;
  attempts: number;
}
