import { type ReactNode } from 'react';
import {
    Globe,
    Monitor,
    Package,
    FileX,
    Zap,
    ArrowLeft,
    Truck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PolicyItem {
    icon: ReactNode;
    title: string;
    description: string;
}

export function ShippingPolicy() {
    const navigate = useNavigate();

    const policyItems: PolicyItem[] = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Digital Delivery",
            description: "All NISM Series quiz practices, formulas, and study materials are hosted digitally on our platform."
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "No Physical Goods",
            description: "There is no physical study material, and no physical shipment is required."
        },
        {
            icon: <FileX className="w-6 h-6" />,
            title: "No Downloadable Content",
            description: "To protect intellectual property, we do not provide any downloadable PDF or offline materials. All practice must be conducted through the web interface."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Access",
            description: "Access to the platform is granted immediately upon successful payment confirmation."
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-cyan-500/25">
                        <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Shipping & Delivery Policy
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Prof. Sheetal Kunder Academy provides educational services exclusively online.
                    </p>
                </div>

                {/* Digital Badge */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 rounded-full shadow-lg">
                        <Monitor className="w-5 h-5 text-white" />
                        <span className="text-white font-semibold">100% Digital Platform</span>
                    </div>
                </div>

                {/* Policy Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {policyItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-black rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Box */}
                <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-white/10 rounded-xl p-4">
                            <div className="text-3xl font-bold mb-1">0</div>
                            <div className="text-cyan-100 text-sm">Physical Items</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                            <div className="text-3xl font-bold mb-1">Instant</div>
                            <div className="text-cyan-100 text-sm">Access After Payment</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4">
                            <div className="text-3xl font-bold mb-1">24/7</div>
                            <div className="text-cyan-100 text-sm">Online Availability</div>
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
