import { type ReactNode } from 'react';
import {
    BookOpen,
    MessageSquare,
    VideoOff,
    Users,
    Shield,
    RefreshCw,
    Mail,
    Phone,
    ArrowLeft,
    ScrollText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TermItem {
    icon: ReactNode;
    title: string;
    description: string;
}

export function Terms() {
    const navigate = useNavigate();

    const termsItems: TermItem[] = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Curriculum Updates",
            description: "All NISM programs, formulas, and questions have been updated to reflect the January 2026 NISM curriculum. While we strive for 100% accuracy, we encourage users to verify their results against the official NISM workbooks."
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "User Feedback",
            description: "We welcome constructive feedback. If you find a discrepancy in a question or explanation, please suggest changes to help us improve."
        },
        {
            icon: <VideoOff className="w-6 h-6" />,
            title: "No Video Support",
            description: "Please note that this platform is a practice tool. We do not provide video explanations for any questions or formulas."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "No 1-on-1 Interaction",
            description: "The subscription does not include 1-on-1 sessions or direct doubt-solving with Prof. Sheetal Kunder. The platform is designed for self-paced practice."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Intellectual Property",
            description: "All content on this site is the property of Prof. Sheetal Kunder Academy. Unauthorised reproduction or distribution is strictly prohibited."
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Continuous Improvement",
            description: "We continually incorporate feedback to implement new features and enhance the learning experience."
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/25">
                        <ScrollText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Welcome to Prof. Sheetal Kunder Academy. By accessing this website, you agree to comply with the following terms:
                    </p>
                </div>

                {/* Terms Grid */}
                <div className="space-y-6 mb-12">
                    {termsItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
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
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="text-blue-100 mb-6">
                        For any queries regarding these terms, please contact us at:
                    </p>

                    <div className="space-y-4">
                        <a
                            href="mailto:sheetal@profsheetalkunderacademy.com"
                            className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-sm sm:text-base md:text-lg break-all">sheetal@profsheetalkunderacademy.com</span>
                        </a>

                        <a
                            href="tel:+917400121111"
                            className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors group"
                        >
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="text-lg">+91 7400121111</span>
                        </a>
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
