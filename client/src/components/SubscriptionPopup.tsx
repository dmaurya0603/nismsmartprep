import { X, Crown, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SubscriptionPopup({ isOpen, onClose }: SubscriptionPopupProps) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden border border-blue-200 dark:border-blue-700/50 transform transition-all scale-100">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-20"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-colors z-50"
                >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>

                <div className="p-6 sm:p-8 text-center relative z-10 overflow-y-auto max-h-[90vh]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-lg shadow-blue-500/30 transform rotate-3">
                        <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        Premium Feature
                    </h2>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                        Unlock unlimited access to all formulas, quizzes, and detailed solutions with our premium subscription.
                    </p>

                    <div className="space-y-3 mb-6 sm:mb-8 text-left bg-blue-50 dark:bg-blue-900/10 p-4 sm:p-5 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                            <span>Full Question Bank Access</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                            <span>Step-by-Step Problem Solving</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                            <span>Exam Readiness Reports</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => {
                                onClose();
                                navigate('/subscribe');
                            }}
                            className="w-full py-3 sm:py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
                        >
                            Upgrade Now
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full py-2.5 sm:py-3 px-6 text-gray-500 dark:text-gray-400 font-medium hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-sm sm:text-base"
                        >
                            Maybe Later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
