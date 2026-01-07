import { useState } from 'react';
import { CategoryList } from './CategoryList';
import { ProblemSolver } from './ProblemSolver';
import { ResultsPanel } from './ResultsPanel';
import { SessionManager } from './SessionManager';
import { Formula, GradeResponse } from '../types';
import { BookOpen, AlertCircle } from 'lucide-react';

export function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null);
  const [gradeResult, setGradeResult] = useState<GradeResponse | null>(null);
  const [sessionAttempts, setSessionAttempts] = useState<string[]>([]);
  const [showSessionReport, setShowSessionReport] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleFormulaSelect = (formula: Formula) => {
    setSelectedFormula(formula);
    setGradeResult(null);
  };

  const handleGradeComplete = (result: GradeResponse) => {
    setGradeResult(result);
    setSessionAttempts((prev) => [...prev, result.attemptId]);
  };

  const handleNewProblem = () => {
    setGradeResult(null);
  };

  const handleGenerateReport = () => {
    if (sessionAttempts.length < 3) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 5000);
    } else {
      setShowSessionReport(true);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Warning Banner */}
      {showWarning && (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 mx-6 mt-4 rounded-r-lg shadow-md slide-up">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 animate-pulse" />
            <div className="flex-1">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                ⚠️ Insufficient Attempts
              </p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                You need at least 3 attempts to generate a readiness report. Current attempts: {sessionAttempts.length}
              </p>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              className="ml-3 text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-200 transition-colors"
              aria-label="Close warning"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Title Section */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
        <div className="max-w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:block h-1 w-8 sm:w-12 bg-gradient-pska rounded-full"></div>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gradient text-center">
                NISM Research Analyst (XV) Formula Tutor
              </h1>
              <div className="hidden sm:block h-1 w-8 sm:w-12 bg-gradient-pska rounded-full"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Session: <span className="font-bold text-blue-600 dark:text-cyan-400">{sessionAttempts.length}</span> attempts
                </p>
              </div>
              <button
                onClick={handleGenerateReport}
                disabled={sessionAttempts.length < 3}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-pska text-white rounded-lg text-xs sm:text-sm font-medium shadow-md hover:shadow-xl glow-effect transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale button-press"
                aria-label="Generate readiness report"
              >
                <span className="hidden sm:inline">Generate Report</span>
                <span className="sm:hidden">Report</span>
              </button>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg text-center px-4 transition-colors duration-300">
            Practice, Learn, and Assess Your Readiness | Powered by Prof. Sheetal Kunder Academy
          </p>
        </div>
      </div>

      <div className="max-w-full mx-auto p-3 sm:p-4 md:p-6">
        {showSessionReport ? (
          <SessionManager
            userId="anonymous"
            attemptIds={sessionAttempts}
            onClose={() => setShowSessionReport(false)}
            onReset={() => {
              setSessionAttempts([]);
              setShowSessionReport(false);
              setGradeResult(null);
              setSelectedFormula(null); // Optional: Reset formula selection to start fresh
              setSelectedCategory(null); // Optional: Reset category selection
            }}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            <div className="lg:col-span-3 order-1">
              <CategoryList
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
                onFormulaSelect={handleFormulaSelect}
              />
            </div>

            <div className="lg:col-span-6 order-2">
              {selectedFormula ? (
                <ProblemSolver
                  formula={selectedFormula}
                  userId="anonymous"
                  onGradeComplete={handleGradeComplete}
                  onNewProblem={handleNewProblem}
                />
              ) : (
                <div className="bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-gray-700/30 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-gray-600 p-8 sm:p-12 text-center card-hover fade-in scale-in">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-pska rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 text-blue-400 dark:text-cyan-400 mx-auto mb-4 sm:mb-6 bounce-soft relative z-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-2 sm:mb-3">
                    Ready to Master NISM Formulas? 🚀
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-3 sm:mb-4 px-2">
                    Choose a category and formula from the left panel to start your journey!
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-6">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-semibold">50+ Formulas</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full font-semibold">Smart Hints</span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full font-semibold">Progress Tracking</span>
                  </div>
                  <div className="text-left bg-white dark:bg-gray-700 rounded-xl p-4 text-sm text-gray-600 dark:text-gray-300 shadow-inner">
                    <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">💡 How it works:</p>
                    <ol className="space-y-1 list-decimal list-inside">
                      <li>Select a formula category</li>
                      <li>Choose a formula to practice</li>
                      <li>Enter values and solve</li>
                      <li>Get instant feedback with solutions</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-3 order-3">
              <ResultsPanel
                gradeResult={gradeResult}
                sessionAttempts={sessionAttempts}
                onGenerateReport={handleGenerateReport}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
