import { useState, useEffect } from 'react';
import { SessionReport } from '../types';
import { API_URL } from '../lib/api';
import {
  X,
  CheckCircle,
  AlertTriangle,
  XCircle,
  TrendingUp,
  Target,
  Award,
  BookOpen,
  RefreshCw,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SessionManagerProps {
  userId: string;
  attemptIds: string[];
  onClose: () => void;
  onReset?: () => void;
}

export function SessionManager({
  userId,
  attemptIds,
  onClose,
  onReset,
}: SessionManagerProps) {
  const { session } = useAuth();
  const [report, setReport] = useState<SessionReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateReport();
  }, []);

  const generateReport = async () => {
    try {
      const response = await fetch(`${API_URL}/session-report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': session ? `Bearer ${session.access_token}` : '',
        },
        body: JSON.stringify({
          userId,
          attemptIds,
        }),
      });

      const data: SessionReport = await response.json();
      setReport(data);
    } catch (error) {
      console.error('Error generating report:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'book_exam':
        return <CheckCircle className="w-8 h-8 text-green-600" />;
      case 'borderline':
        return <AlertTriangle className="w-8 h-8 text-yellow-600" />;
      case 'not_ready':
        return <XCircle className="w-8 h-8 text-red-600" />;
      default:
        return <BookOpen className="w-8 h-8 text-gray-600" />;
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'book_exam':
        return 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-900 dark:text-green-300';
      case 'borderline':
        return 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700 text-yellow-900 dark:text-yellow-300';
      case 'not_ready':
        return 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-900 dark:text-red-300';
      default:
        return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-300';
    }
  };

  const getRecommendationTitle = (recommendation: string) => {
    switch (recommendation) {
      case 'book_exam':
        return 'Ready to Book Exam';
      case 'borderline':
        return 'Borderline - More Practice Recommended';
      case 'not_ready':
        return 'Not Ready - Focus on Weak Areas';
      default:
        return 'Assessment Complete';
    }
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 transition-colors duration-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Generating your readiness report...</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 transition-colors duration-300">
        <p className="text-red-600 dark:text-red-400 text-center">Failed to generate report</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            NISM Readiness Assessment Report
          </h2>
          <div className="flex items-center gap-2">
            {onReset && (
              <button
                onClick={onReset}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-pska text-white rounded-lg hover:shadow-md transition-all text-sm font-bold glow-effect"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className={`border rounded-xl p-6 mb-8 ${getRecommendationColor(report.recommendation)}`}>
            <div className="flex items-start gap-4">
              {getRecommendationIcon(report.recommendation)}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  {getRecommendationTitle(report.recommendation)}
                </h3>
                <p className="text-sm opacity-90">{report.rationale}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 border border-blue-200 dark:border-blue-700 transition-colors duration-300">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                <Target className="w-5 h-5" />
                <span className="text-xs font-medium">Attempts</span>
              </div>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-300">
                {report.totalAttempts}
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/30 rounded-xl p-4 border border-green-200 dark:border-green-700 transition-colors duration-300">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-xs font-medium">Correct</span>
              </div>
              <p className="text-2xl font-bold text-green-900 dark:text-green-300">
                {report.correctAttempts}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 border border-purple-200 dark:border-purple-700 transition-colors duration-300">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                <Award className="w-5 h-5" />
                <span className="text-xs font-medium">Score</span>
              </div>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-300">
                {report.aggregatedScore.toFixed(1)}
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4 border border-orange-200 dark:border-orange-700 transition-colors duration-300">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs font-medium">Confidence</span>
              </div>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-300">
                {report.confidenceLevel.toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Top 3 Improvements
            </h3>
            <div className="space-y-3">
              {report.improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm text-blue-900 dark:text-blue-300">{improvement}</p>
                </div>
              ))}
            </div>
          </div>

          {report.categoryPerformance.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Performance by Category
              </h3>
              <div className="space-y-3">
                {report.categoryPerformance.map((cat) => (
                  <div
                    key={cat.category}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {cat.category}
                      </h4>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {cat.attempts} attempt{cat.attempts !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Accuracy:</span>
                        <span className={`ml-2 font-semibold ${cat.accuracy >= 70
                          ? 'text-green-600 dark:text-green-400'
                          : cat.accuracy >= 50
                            ? 'text-yellow-600 dark:text-yellow-400'
                            : 'text-red-600 dark:text-red-400'
                          }`}>
                          {cat.accuracy.toFixed(1)}%
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Avg Score:</span>
                        <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
                          {cat.avgScore.toFixed(1)}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Avg Time:</span>
                        <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
                          {(cat.avgTime / 1000).toFixed(1)}s
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
