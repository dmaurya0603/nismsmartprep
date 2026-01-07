import { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, XCircle, Lightbulb, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import { API_URL } from '../lib/api';
import { useAuth } from '../context/AuthContext';

interface QuizQuestion {
  id: string;
  topic: string;
  question_text: string;
  answer: string;
  difficulty: string;
  hints: string[];
  explanation: string;
}

interface QuizResult {
  isCorrect: boolean;
  correctAnswer: string;
  explanation: string;
  score: number;
  userAnswer: string;
}

export function Quiz() {
  const { user, session } = useAuth();
  const [topics, setTopics] = useState<string[]>([]);
  // ... (state variables remain same)
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    if (session) {
      fetchTopics();
    }
  }, [session]);

  const fetchTopics = async () => {
    if (!session?.access_token) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/quiz/topics`, {
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });
      const data = await response.json();
      setTopics(data.topics || []);
    } catch (error) {
      console.error('Error fetching topics:', error);
    } finally {
      setLoading(false);
      setHasFetched(true);
    }
  };

  const startQuiz = async (topic: string) => {
    if (!session?.access_token) return;
    setLoading(true);
    setSelectedTopic(topic);
    try {
      const response = await fetch(`${API_URL}/quiz/questions?topic=${encodeURIComponent(topic)}&limit=25`, {
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });
      const data = await response.json();
      setQuestions(data.questions || []);
      setCurrentQuestionIndex(0);
      setUserAnswer('');
      setResult(null);
      setScore(0);
      setCorrectCount(0);
      setHintsUsed(0);
      setShowHint(false);
      setStartTime(Date.now());
    } catch (error) {
      console.error('Error starting quiz:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = async () => {
    if (!userAnswer.trim() || !session?.access_token) return;

    setLoading(true);
    const timeSpentMs = Date.now() - startTime;

    try {
      const response = await fetch(`${API_URL}/quiz/check-answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({
          questionId: questions[currentQuestionIndex].id,
          userAnswer: userAnswer.trim(),
          userId: user?.id || 'anonymous',
          timeSpentMs,
          hintsUsed
        })
      });

      const data: QuizResult = await response.json();
      setResult(data);
      setScore(score + data.score);
      if (data.isCorrect) {
        setCorrectCount(correctCount + 1);
      }
    } catch (error) {
      console.error('Error checking answer:', error);
    } finally {
      setLoading(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setResult(null);
      setHintsUsed(0);
      setShowHint(false);
      setStartTime(Date.now());
    }
  };

  const useHint = () => {
    setShowHint(true);
    setHintsUsed(hintsUsed + 1);
  };

  const restartQuiz = () => {
    setQuestions([]);
    setSelectedTopic('');
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setResult(null);
    setScore(0);
    setCorrectCount(0);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const quizCompleted = result && isLastQuestion;



  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        {/* Title Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
          <div className="max-w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3 sm:gap-4 w-full justify-center">
                <div className="hidden sm:block h-1 w-8 sm:w-12 bg-gradient-pska rounded-full"></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient text-center">
                  NISM Research Analyst (XV) Quiz Practice
                </h1>
                <div className="hidden sm:block h-1 w-8 sm:w-12 bg-gradient-pska rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg text-center px-4 transition-colors duration-300">
              Test your knowledge with interactive fill-in-the-blank questions
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => startQuiz(topic)}
                disabled={loading}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-transparent hover:border-blue-500 card-hover group disabled:opacity-50 disabled:cursor-not-allowed fade-in button-press"
              >
                <div className="text-left">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {topic}
                    </h3>
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                      <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    25 questions • Fill in the blank
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-blue-600 dark:text-cyan-400 font-semibold group-hover:underline">
                      Start Quiz
                    </span>
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {topics.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              {hasFetched ? (
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    No quiz topics available. Please run schema-quiz.sql and seed the database.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-cyan-400 mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg animate-pulse">
                    Loading quiz topics...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-cyan-400"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-cyan-400 bounce-soft" />
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Loading questions...</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Preparing your quiz experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Title Section */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 sm:gap-4 w-full justify-center">
              <div className="hidden sm:block h-1 w-8 sm:w-12 bg-gradient-pska rounded-full"></div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gradient text-center">
                NISM Research Analyst (XV) Quiz Practice
              </h1>
              <div className="hidden sm:block h-1 w-8 sm:w-12 bg-gradient-pska rounded-full"></div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg text-center px-4 transition-colors duration-300">
            Practice Mode • {selectedTopic}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-3 sm:p-4 md:p-6">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedTopic}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>
            <button
              onClick={restartQuiz}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              title="Exit Quiz"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Score Display */}
          <div className="flex items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Score: <strong>{score}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Correct: <strong>{correctCount}/{currentQuestionIndex + (result ? 1 : 0)}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 slide-up">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {currentQuestion.difficulty}
              </div>
              <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                {currentQuestion.topic}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white leading-relaxed">
              {currentQuestion.question_text}
            </h3>
          </div>

          {!result ? (
            <div>
              <div className="relative mb-4">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !loading && userAnswer.trim() && checkAnswer()}
                  placeholder="Type your answer here..."
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                  disabled={loading}
                  autoFocus
                />
                {userAnswer && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    Press Enter
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim() || loading}
                  className="flex-1 px-6 py-3 bg-gradient-pska text-white rounded-lg hover:shadow-lg glow-effect disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all font-medium button-press"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Checking...
                    </span>
                  ) : (
                    'Submit Answer'
                  )}
                </button>

                {currentQuestion.hints && currentQuestion.hints.length > 0 && !showHint && (
                  <button
                    onClick={useHint}
                    className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center gap-2"
                  >
                    <Lightbulb className="w-5 h-5" />
                    Hint (-10 pts)
                  </button>
                )}
              </div>

              {showHint && currentQuestion.hints && (
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-800 dark:text-yellow-300">Hint:</p>
                      <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                        {currentQuestion.hints[hintsUsed - 1]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {/* Result Display */}
              <div className={`p-6 rounded-lg mb-6 ${result.isCorrect
                ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500 success-bounce'
                : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500 shake'
                }`}>
                <div className="flex items-center gap-3 mb-3">
                  {result.isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 success-bounce" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                  )}
                  <div>
                    <h4 className={`text-xl font-bold ${result.isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
                      }`}>
                      {result.isCorrect ? '🎉 Correct!' : 'Not Quite'}
                    </h4>
                    <p className={`text-sm ${result.isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                      }`}>
                      Score: +{result.score} points
                    </p>
                  </div>
                </div>

                {!result.isCorrect && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Your answer:</p>
                    <p className="font-medium text-red-800 dark:text-red-300">{result.userAnswer}</p>
                  </div>
                )}

                <div className="mb-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Correct answer:</p>
                  <p className="font-medium text-green-800 dark:text-green-300">{result.correctAnswer}</p>
                </div>

                {result.explanation && (
                  <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">Explanation:</p>
                    <p className="text-gray-800 dark:text-gray-200">{result.explanation}</p>
                  </div>
                )}
              </div>

              {/* Quiz Completion or Next Button */}
              {quizCompleted ? (
                <div className="text-center">
                  <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      Quiz Completed!
                    </h3>
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                      Final Score: <strong>{score}</strong> points
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      You got <strong>{correctCount}</strong> out of <strong>{questions.length}</strong> correct
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                      Accuracy: {((correctCount / questions.length) * 100).toFixed(1)}%
                    </p>
                  </div>
                  <button
                    onClick={restartQuiz}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-medium shadow-lg"
                  >
                    Try Another Topic
                  </button>
                </div>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  Next Question
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
