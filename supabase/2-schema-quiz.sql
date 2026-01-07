-- =====================================================
-- QUIZ QUESTIONS TABLE SCHEMA
-- =====================================================

-- Create quiz_questions table for fill-in-the-blank questions
CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic VARCHAR(255) NOT NULL,
  question_text TEXT NOT NULL,
  answer TEXT NOT NULL,
  difficulty VARCHAR(50) DEFAULT 'medium',
  hints TEXT[],
  explanation TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster topic filtering
CREATE INDEX IF NOT EXISTS idx_quiz_questions_topic ON quiz_questions(topic);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_difficulty ON quiz_questions(difficulty);

-- Create quiz_attempts table to track user progress
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT,
  question_id UUID REFERENCES quiz_questions(id) ON DELETE CASCADE,
  user_answer TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  time_spent_ms INTEGER DEFAULT 0,
  hints_used INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for quiz attempts
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_question ON quiz_attempts(question_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_created ON quiz_attempts(created_at DESC);

-- Add RLS policies
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view quiz questions
CREATE POLICY "Allow public read access to quiz questions"
  ON quiz_questions FOR SELECT
  USING (true);

-- Policy: Anyone can view quiz attempts (for stats)
CREATE POLICY "Allow public read access to quiz attempts"
  ON quiz_attempts FOR SELECT
  USING (true);

-- Policy: Anyone can insert quiz attempts (anonymous users allowed)
CREATE POLICY "Allow public insert access to quiz attempts"
  ON quiz_attempts FOR INSERT
  WITH CHECK (true);

COMMENT ON TABLE quiz_questions IS 'Fill-in-the-blank quiz questions from Excel file';
COMMENT ON TABLE quiz_attempts IS 'User attempts at quiz questions';
