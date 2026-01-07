import { GradeResponse } from '../types';
import { CheckCircle, XCircle, TrendingUp, FileText } from 'lucide-react';

interface ResultsPanelProps {
  gradeResult: GradeResponse | null;
  sessionAttempts: string[];
  onGenerateReport: () => void;
}

export function ResultsPanel({
  gradeResult,
  sessionAttempts,
  onGenerateReport,
}: ResultsPanelProps) {
  if (!gradeResult) {
    return (
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-blue-100 dark:border-gray-700 p-6 fade-in slide-in-right">
        <h3 className="text-lg font-bold text-gradient mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Session Progress
        </h3>
        <div className="text-center py-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-blue-100 dark:border-gray-600">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-gradient-pska rounded-full blur-lg opacity-20 animate-pulse"></div>
            <TrendingUp className="w-16 h-16 text-blue-400 dark:text-cyan-400 mx-auto bounce-soft relative z-10" />
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium px-4">
            Submit answers to see results and step-by-step solutions
          </p>
        </div>

        {sessionAttempts.length > 0 && (
          <div className="mt-6 pt-6 border-t-2 border-blue-100 dark:border-gray-700">
            <div className="text-center">
              <div className="bg-gradient-pska text-white rounded-xl p-4 mb-4 shadow-lg glow-effect">
                <p className="text-3xl font-bold mb-1">{sessionAttempts.length}</p>
                <p className="text-sm opacity-90">
                  Attempt{sessionAttempts.length !== 1 ? 's' : ''} Completed
                </p>
              </div>
              <button
                onClick={onGenerateReport}
                disabled={sessionAttempts.length < 3}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-pska text-white rounded-xl hover:shadow-lg glow-effect transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale text-sm font-bold transform hover:scale-105 button-press"
              >
                <FileText className="w-5 h-5" />
                Generate Readiness Report
              </button>
              {sessionAttempts.length < 3 && (
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-3 bg-yellow-50 dark:bg-yellow-900/30 border-2 border-yellow-200 dark:border-yellow-700 rounded-lg p-3 font-medium slide-up">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-yellow-600 dark:text-yellow-400">⚠️</span>
                    <span>Complete at least {3 - sessionAttempts.length} more attempt{3 - sessionAttempts.length !== 1 ? 's' : ''} to generate report</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  const { isCorrect, userAnswer, correctAnswer, percentageError, finalScore, stepByStep, hintsUsed } = gradeResult;

  return (
    <div className="space-y-4 fade-in slide-in-right">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 p-6 scale-in">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            Result
            {isCorrect && <span className="text-sm">🎉</span>}
          </h3>
          {isCorrect ? (
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 success-bounce" />
          ) : (
            <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 shake" />
          )}
        </div>

        <div className={`p-4 rounded-lg mb-4 ${isCorrect
          ? 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500'
          : 'bg-red-50 dark:bg-red-900/30 border-2 border-red-500'
          }`}>
          <p className={`font-semibold text-lg ${isCorrect
            ? 'text-green-900 dark:text-green-300'
            : 'text-red-900 dark:text-red-300'
            }`}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          {userAnswer !== undefined && (
            <p className={`text-sm mt-1 ${isCorrect
              ? 'text-green-700 dark:text-green-400'
              : 'text-red-700 dark:text-red-400'
              }`}>
              Your answer: {userAnswer.toFixed(4)}
            </p>
          )}
          {!isCorrect && correctAnswer !== undefined && (
            <p className="text-sm text-red-700 dark:text-red-400 mt-1">
              Correct answer: {correctAnswer.toFixed(4)}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Score</span>
            <span className="text-2xl font-bold text-gradient">
              {finalScore !== undefined ? finalScore.toFixed(1) : '0.0'}/100
            </span>
          </div>

          {hintsUsed > 0 && (
            <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Hints Used</span>
              <span className="text-sm text-yellow-700 dark:text-yellow-400 font-bold">
                {hintsUsed} (-{hintsUsed * 10}% penalty)
              </span>
            </div>
          )}

          {percentageError !== undefined && (
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Error</span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {percentageError.toFixed(2)}%
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-700 p-6 slide-up">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <span className="bg-gradient-pska text-white p-1.5 rounded-lg">📝</span>
          Step-by-Step Solution
        </h3>
        <div className="space-y-4">
          {stepByStep && stepByStep.length > 0 ? (
            stepByStep.map((step, index) => (
              <div key={step.step} className="flex gap-3 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-7 h-7 bg-gradient-pska text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                  {step.step}
                </div>
                <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{step.description}</p>
                  {step.value !== undefined && (
                    <p className="text-sm font-mono text-blue-600 dark:text-cyan-400 mt-2 font-bold bg-white dark:bg-gray-800 px-2 py-1 rounded inline-block">
                      = {step.value.toFixed(4)}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400 py-4">No detailed steps available.</p>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Session: {sessionAttempts.length} attempt{sessionAttempts.length !== 1 ? 's' : ''}
          </p>
          <button
            onClick={onGenerateReport}
            disabled={sessionAttempts.length < 3}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            Generate Readiness Report
          </button>
          {sessionAttempts.length < 3 && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Complete at least 3 attempts
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
