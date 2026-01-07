-- NISM Formula Tutor Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Formulas table
CREATE TABLE IF NOT EXISTS formulas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  expression TEXT NOT NULL,
  variables JSONB NOT NULL,
  difficulty INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 3),
  tolerance_type TEXT NOT NULL CHECK (tolerance_type IN ('absolute', 'relative')),
  tolerance_value DECIMAL NOT NULL,
  description TEXT,
  hints JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Attempts table
CREATE TABLE IF NOT EXISTS attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  formula_id UUID NOT NULL REFERENCES formulas(id) ON DELETE CASCADE,
  problem_id TEXT,
  inputs JSONB NOT NULL,
  user_answer DECIMAL NOT NULL,
  correct_answer DECIMAL NOT NULL,
  is_correct BOOLEAN NOT NULL,
  percentage_error DECIMAL NOT NULL,
  hints_used INTEGER NOT NULL DEFAULT 0,
  time_spent_ms INTEGER NOT NULL,
  base_score DECIMAL NOT NULL,
  hint_penalty DECIMAL NOT NULL,
  final_score DECIMAL NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id TEXT NOT NULL,
  total_attempts INTEGER NOT NULL,
  correct_attempts INTEGER NOT NULL,
  aggregated_score DECIMAL NOT NULL,
  confidence_level DECIMAL NOT NULL,
  recommendation TEXT NOT NULL CHECK (recommendation IN ('book_exam', 'borderline', 'not_ready')),
  rationale TEXT NOT NULL,
  improvements JSONB NOT NULL,
  category_performance JSONB NOT NULL,
  avg_hints_used DECIMAL NOT NULL,
  avg_time_spent DECIMAL NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_formulas_category ON formulas(category);
CREATE INDEX IF NOT EXISTS idx_attempts_user_id ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_formula_id ON attempts(formula_id);
CREATE INDEX IF NOT EXISTS idx_attempts_created_at ON attempts(created_at);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_created_at ON sessions(created_at);

-- Enable Row Level Security (optional - disable for MVP)
-- ALTER TABLE formulas ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE attempts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for MVP without auth)
-- CREATE POLICY "Allow all for formulas" ON formulas FOR ALL USING (true);
-- CREATE POLICY "Allow all for attempts" ON attempts FOR ALL USING (true);
-- CREATE POLICY "Allow all for sessions" ON sessions FOR ALL USING (true);
