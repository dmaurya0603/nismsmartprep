import { type ReactNode } from 'react';
import {
    XCircle,
    AlertTriangle,
    Clock,
    CreditCard,
    Mail,
    ArrowLeft,
    RotateCcw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PolicyItem {
    icon: ReactNode;
    title: string;
    description: string;
    highlight?: boolean;
}

export function RefundPolicy() {
    const navigate = useNavigate();

    const policyItems: PolicyItem[] = [
        {
            icon: <XCircle className="w-6 h-6" />,
            title: "Non-Refundable Policy",
            description: "Generally, all subscriptions purchased on NISMSmartPrep are non-refundable as they provide immediate access to digital content.",
            highlight: true
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "Technical Issues",
            description: "Refunds will be issued only when a technical glitch prevents access to the content or when a payment is charged or deducted without a subscription being activated."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Accidental Purchase",
            description: "If you have purchased a subscription by mistake, you must inform the Prof. Sheetal Kunder Academy Team within 24 hours of the purchase. Requests received after 24 hours will not be eligible for a refund."
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "Refund Process",
            description: "Once approved, the refund will be processed to the original payment method within 5-7 working days."
        }
    ];

    return (
        <div className="min-h-screen bg-transparent">

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 shadow-lg shadow-orange-500/25">
                        <RotateCcw className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Refund & Cancellation Policy
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Thank you for choosing Prof. Sheetal Kunder Academy for your NISM preparation. Please read our policy regarding refunds and cancellations carefully.
                    </p>
                </div>

                {/* Important Notice */}
                <div className="bg-amber-50 dark:bg-black border border-amber-200 dark:border-amber-900 rounded-xl p-4 mb-10 flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-1">Important Notice</h3>
                        <p className="text-amber-700 dark:text-amber-400 text-sm">
                            All refund requests must be submitted within 24 hours of purchase. Digital subscriptions provide immediate access, making refunds generally non-applicable.
                        </p>
                    </div>
                </div>

                {/* Policy Cards */}
                <div className="space-y-6 mb-12">
                    {policyItems.map((item, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 dark:bg-black rounded-xl p-6 border transition-all duration-300 hover:shadow-lg group ${item.highlight
                                ? 'border-red-300 dark:border-red-700 bg-red-50 dark:bg-black'
                                : 'border-gray-200 dark:border-gray-700 hover:border-orange-500/50 dark:hover:border-orange-500/50'
                                }`}
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform ${item.highlight
                                        ? 'bg-gradient-to-br from-red-500 to-red-600'
                                        : 'bg-gradient-to-br from-orange-500 to-red-500'
                                        }`}>
                                        {item.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Request a Refund</h2>
                    <p className="text-orange-100 mb-6">
                        To request a refund, please email us with your transaction details:
                    </p>

                    <a
                        href="mailto:sheetal@profsheetalkunderacademy.com?subject=Refund Request"
                        className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-4 rounded-xl transition-colors group"
                    >
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="text-sm text-orange-100">Email us at</div>
                            <div className="text-sm sm:text-base md:text-lg font-semibold break-all">sheetal@profsheetalkunderacademy.com</div>
                        </div>
                    </a>

                    {/* Timeline */}
                    <div className="mt-8 grid sm:grid-cols-3 gap-4">
                        <div className="bg-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold mb-1">24h</div>
                            <div className="text-orange-100 text-sm">Request Window</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold mb-1">5-7</div>
                            <div className="text-orange-100 text-sm">Working Days</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold mb-1">100%</div>
                            <div className="text-orange-100 text-sm">Original Payment Method</div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
                    Last updated: January 2026
                </p>
            </div>
        </div>
    );
}
