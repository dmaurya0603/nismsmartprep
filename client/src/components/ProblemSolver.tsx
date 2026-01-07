import { useState, useEffect } from 'react';
import { Formula, GradeResponse } from '../types';
import { API_URL } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import { Shuffle, Calculator, Lightbulb } from 'lucide-react';

interface ProblemSolverProps {
  formula: Formula;
  userId: string;
  onGradeComplete: (result: GradeResponse) => void;
  onNewProblem: () => void;
}

const HINTS: Record<number, { title: string; description: string }> = {
  1: {
    title: 'Conceptual Hint',
    description: 'Think about what this formula measures and the relationship between the variables.',
  },
  2: {
    title: 'Step Suggestion',
    description: 'Break down the formula into smaller parts and evaluate each component separately.',
  },
  3: {
    title: 'Numeric Substitution',
    description: 'Substitute each variable with its given value in the formula expression.',
  },
};

export function ProblemSolver({
  formula,
  userId,
  onGradeComplete,
  onNewProblem,
}: ProblemSolverProps) {
  const { session } = useAuth();
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [userAnswer, setUserAnswer] = useState('');
  const [hintsUsed, setHintsUsed] = useState(0);
  const [visibleHints, setVisibleHints] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcDisplay, setCalcDisplay] = useState('0');

  useEffect(() => {
    initializeInputs();
    setUserAnswer('');
    setHintsUsed(0);
    setVisibleHints([]);
    setStartTime(Date.now());
    setShowCalculator(false);
    setCalcDisplay('0');
  }, [formula]);

  const initializeInputs = () => {
    const initialInputs: Record<string, number> = {};
    Object.keys(formula.variables).forEach((varName) => {
      initialInputs[varName] = 0;
    });
    setInputs(initialInputs);
  };

  const autoGenerateValues = () => {
    const generatedInputs: Record<string, number> = {};
    Object.entries(formula.variables).forEach(([varName, varDef]) => {
      const randomValue =
        Math.random() * (varDef.max - varDef.min) + varDef.min;
      generatedInputs[varName] = parseFloat(randomValue.toFixed(2));
    });
    setInputs(generatedInputs);
  };

  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const requestHint = () => {
    if (hintsUsed < 3) {
      const nextHint = hintsUsed + 1;
      setHintsUsed(nextHint);
      setVisibleHints((prev) => [...prev, nextHint]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswer) return;

    setLoading(true);
    const timeSpentMs = Date.now() - startTime;

    try {
      const response = await fetch(`${API_URL}/grade-attempt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': session ? `Bearer ${session.access_token}` : '',
        },
        body: JSON.stringify({
          userId,
          formulaId: formula.id,
          inputs,
          userAnswer: parseFloat(userAnswer),
          hintsUsed,
          timeSpentMs,
        }),
      });

      const result: GradeResponse = await response.json();
      onGradeComplete(result);
    } catch (error) {
      console.error('Error submitting attempt:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewProblem = () => {
    initializeInputs();
    setUserAnswer('');
    setHintsUsed(0);
    setVisibleHints([]);
    setStartTime(Date.now());
    setShowCalculator(false);
    setCalcDisplay('0');
    onNewProblem();
  };

  const handleCalcButton = (value: string) => {
    if (value === 'C') {
      setCalcDisplay('0');
    } else if (value === '=') {
      try {
        const result = new Function('return ' + calcDisplay.replace(/×/g, '*').replace(/÷/g, '/'))();
        setCalcDisplay(String(result));
      } catch {
        setCalcDisplay('Error');
      }
    } else if (value === '←') {
      setCalcDisplay(calcDisplay.length > 1 ? calcDisplay.slice(0, -1) : '0');
    } else if (value === 'Use') {
      setUserAnswer(calcDisplay);
      setShowCalculator(false);
    } else {
      setCalcDisplay(calcDisplay === '0' && value !== '.' ? value : calcDisplay + value);
    }
  };

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-blue-100 dark:border-gray-700 overflow-hidden fade-in scale-in transition-colors duration-300">
      <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 border-b-2 border-blue-200 dark:border-gray-600 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gradient mb-2">{formula.title}</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{formula.description}</p>
          </div>
          <div className="flex items-center gap-2">
            {formula.difficulty === 1 && (
              <span className="text-xs bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold border-2 border-green-200">
                Easy
              </span>
            )}
            {formula.difficulty === 2 && (
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold border-2 border-yellow-200">
                Medium
              </span>
            )}
            {formula.difficulty === 3 && (
              <span className="text-xs bg-red-100 text-red-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold border-2 border-red-200">
                Hard
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 p-4 sm:p-5 bg-white dark:bg-gray-700 rounded-xl border-2 border-blue-200 dark:border-gray-600 shadow-md transition-colors duration-300">
          <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 mb-2">Formula:</p>
          <code className="text-blue-700 dark:text-cyan-300 font-mono text-sm sm:text-base font-bold bg-blue-50 dark:bg-gray-800 px-2 sm:px-3 py-1 sm:py-2 rounded-lg block overflow-x-auto">
            {formula.expression}
          </code>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200">Input Values</h3>
            <button
              type="button"
              onClick={autoGenerateValues}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-pska text-white rounded-xl hover:shadow-lg glow-effect transition-all text-xs sm:text-sm font-bold transform hover:scale-105"
            >
              <Shuffle className="w-3 h-3 sm:w-4 sm:h-4" />
              Auto-Generate
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {Object.entries(formula.variables).map(([varName, varDef], index) => (
              <div key={varName} className="group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                  {varDef.label}
                  <span className="text-gray-500 dark:text-gray-400 text-xs font-normal bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full ml-2">({varDef.unit})</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={inputs[varName] || ''}
                    onChange={(e) => handleInputChange(varName, e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200 group-hover:border-blue-300 group-hover:shadow-md"
                    required
                  />
                  {inputs[varName] > 0 && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 success-bounce">
                      ✓
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
            Your Answer
            {userAnswer && (
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">Ready to submit</span>
            )}
          </label>
          <div className="relative">
            <input
              type="number"
              step="any"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && e.preventDefault()}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg transition-all font-semibold"
              placeholder="Enter your calculated result"
              required
            />
            <button
              type="button"
              onClick={() => setShowCalculator(!showCalculator)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded"
              title="Toggle Calculator"
            >
              <Calculator className="w-5 h-5" />
            </button>
          </div>

          {showCalculator && (
            <div className="mt-4 p-4 bg-white dark:bg-gray-700 border-2 border-blue-200 dark:border-gray-600 rounded-xl shadow-lg slide-up">
              <div className="mb-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-right font-mono text-xl dark:text-white border-2 border-gray-200 dark:border-gray-600">
                {calcDisplay}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    onClick={() => handleCalcButton(btn)}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-blue-500 rounded-lg font-semibold text-gray-700 dark:text-gray-200 transition-all button-press hover:shadow-md"
                  >
                    {btn}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => handleCalcButton('C')}
                  className="col-span-2 px-4 py-3 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-800/40 rounded-lg font-semibold text-red-700 dark:text-red-400 transition-all button-press"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcButton('←')}
                  className="px-4 py-3 bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-800/40 rounded-lg font-semibold text-yellow-700 dark:text-yellow-400 transition-all button-press"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcButton('Use')}
                  className="px-4 py-3 bg-gradient-pska text-white hover:shadow-lg rounded-lg font-semibold transition-all button-press glow-effect"
                >
                  Use
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={requestHint}
              disabled={hintsUsed >= 3}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-xl hover:bg-yellow-100 dark:hover:bg-yellow-800/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium border-2 border-yellow-200 dark:border-yellow-700 hover:shadow-md button-press"
              aria-label={`Request hint. ${3 - hintsUsed} hints remaining`}
            >
              <Lightbulb className="w-4 h-4" />
              <span className="hidden sm:inline">Request Hint ({3 - hintsUsed} left)</span>
              <span className="sm:hidden">Hint ({3 - hintsUsed})</span>
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">
              -10% per hint
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={handleNewProblem}
              className="w-full sm:w-auto px-6 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium button-press"
            >
              New Problem
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-2.5 bg-gradient-pska text-white rounded-lg hover:shadow-lg glow-effect transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-md transform hover:scale-105 button-press"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Grading...
                </span>
              ) : (
                'Submit Answer'
              )}
            </button>
          </div>
        </div>
      </form>

      {visibleHints.length > 0 && (
        <div className="px-6 pb-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-4 space-y-3 slide-up shadow-lg">
            <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-400 font-semibold">
              <Lightbulb className="w-5 h-5" />
              💡 Hints
            </div>
            {visibleHints.map((hintNum, index) => (
              <div key={hintNum} className="pl-7 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-sm font-bold text-yellow-900 dark:text-yellow-300">
                  {HINTS[hintNum].title}
                </p>
                <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1 bg-white dark:bg-gray-800 p-2 rounded-lg">
                  {HINTS[hintNum].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
