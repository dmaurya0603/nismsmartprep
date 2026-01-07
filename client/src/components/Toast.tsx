import { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/30 border-green-500 dark:border-green-600';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/30 border-red-500 dark:border-red-600';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-500 dark:border-yellow-600';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-600';
    }
  };

  return (
    <div className={`fixed top-24 right-6 z-50 max-w-sm w-full slide-in-right`}>
      <div className={`${getStyles()} border-l-4 rounded-lg shadow-xl p-4 flex items-start gap-3`}>
        <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close notification"
        >
          <span className="text-lg">×</span>
        </button>
      </div>
    </div>
  );
}
