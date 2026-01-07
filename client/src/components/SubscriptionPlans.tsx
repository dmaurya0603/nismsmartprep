import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_URL } from '../lib/api';
import { Check, Crown, Shield, Zap, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface Plan {
    id: string;
    name: string;
    amount: number;
    currency: string;
    interval: string;
}

export function SubscriptionPlans() {
    const { user, session, refreshSubscription } = useAuth();
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(false);
    const [plansLoading, setPlansLoading] = useState(true);
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        // Fetch plans
        setPlansLoading(true);
        fetch(`${API_URL}/subscriptions/plans`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch plans');
                return res.json();
            })
            .then(data => {
                setPlans(data.plans);
                setPlansLoading(false);
            })
            .catch(error => {
                console.error('Error fetching plans:', error);
                setPlansLoading(false);
            });

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const getPlanIcon = (planId: string) => {
        switch (planId) {
            case 'weekly': return <Calendar className="w-5 h-5" />;
            case 'monthly': return <Zap className="w-5 h-5" />;
            case 'quarterly': return <Crown className="w-5 h-5" />;
            case 'semiannual': return <Shield className="w-5 h-5" />;
            default: return <Check className="w-5 h-5" />;
        }
    };

    const handleSubscribe = async (planId: string, isUpgrade = false) => {
        if (!user || !session) {
            navigate('/login');
            return;
        }

        setLoading(true);
        setSelectedPlan(planId);

        try {
            const response = await fetch(`${API_URL}/subscriptions/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.access_token}`
                },
                body: JSON.stringify({ planId, isUpgrade })
            });

            const data = await response.json();

            // Handle Existing Active Subscription (Conflict)
            if (response.status === 409) {
                const confirmUpgrade = window.confirm(
                    `${data.message}\n\nDo you want to add this new plan to your account? The duration will be appended to your current plan.`
                );

                if (confirmUpgrade) {
                    // Retry with upgrade flag
                    await handleSubscribe(planId, true);
                    return; // Exit current execution
                } else {
                    setLoading(false);
                    setSelectedPlan(null);
                    return;
                }
            }

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create subscription');
            }

            const { subscription } = data;

            const options = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                subscription_id: subscription.id,
                name: 'NISM XV Formula Tutor',
                handler: async function (response: any) {
                    try {
                        console.log('Razorpay Payment Success Response:', response);

                        const verifyResponse = await fetch(`${API_URL}/subscriptions/verify-payment`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${session.access_token}`
                            },
                            body: JSON.stringify(response)
                        });

                        if (verifyResponse.ok) {
                            await refreshSubscription();
                            alert('Subscription activated successfully!');
                            navigate('/formulas');
                        } else {
                            throw new Error('Payment verification failed');
                        }
                    } catch (error) {
                        console.error('Verification error:', error);
                        alert('Payment successful but verification failed. Please contact support.');
                    }
                },
                prefill: {
                    email: user.email,
                    name: user.user_metadata?.full_name || ''
                },
                theme: {
                    color: '#2563eb'
                },
                modal: {
                    ondismiss: function () {
                        setLoading(false);
                        setSelectedPlan(null);
                    }
                }
            };

            if (!options.key) {
                throw new Error('Razorpay Key ID is missing in environment variables');
            }

            if (!window.Razorpay) {
                throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
            }

            const razorpay = new window.Razorpay(options);
            razorpay.open();

            razorpay.on('payment.failed', function (response: any) {
                console.error('Payment failed:', response.error);
                alert(`Payment failed: ${response.error.description || 'Unknown error'}`);
                setLoading(false);
                setSelectedPlan(null);
            });
        } catch (error: any) {
            console.error('Subscription error:', error);
            alert(error.message || 'Failed to create subscription. Please try again.');
        } finally {
            setLoading(false);
            setSelectedPlan(null);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    {/* Study Pro Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-blue-500/25">
                        <Zap className="w-4 h-4 text-yellow-300" />
                        <span className="text-white text-sm font-semibold tracking-wide">STUDY PRO</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Get unlimited access to all the formulas & one-liners of various NISM Series at one place.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {plansLoading ? (
                        <div className="col-span-full text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                            <p className="text-gray-600 dark:text-gray-400">Loading plans...</p>
                        </div>
                    ) : plans.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-600 dark:text-gray-400 mb-2">No plans available</p>
                            <p className="text-sm text-gray-500">Please check your server connection</p>
                        </div>
                    ) : (
                        plans.map((plan) => {
                            const isPopular = plan.id === 'quarterly';

                            return (
                                <div
                                    key={plan.id}
                                    className={`relative bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl p-6 border transition-all duration-300 hover:scale-105 ${isPopular
                                        ? 'border-blue-500 ring-2 ring-blue-500/50'
                                        : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                                        }`}
                                >
                                    {/* Popular Badge */}
                                    {isPopular && (
                                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                Best Value
                                            </span>
                                        </div>
                                    )}

                                    {/* Plan Header */}
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-3">
                                            <div className="text-blue-600 dark:text-blue-400">
                                                {getPlanIcon(plan.id)}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {plan.name}
                                        </h3>

                                        <div className="mb-2">
                                            <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                                ₹{plan.amount}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-500 capitalize">
                                            {plan.interval}
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6 text-sm">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-400">
                                                50+ formulas
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-400">
                                                Unlimited practice
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-400">
                                                3-level hints
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-400">
                                                Step-by-step solutions
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-400">
                                                Readiness assessment
                                            </span>
                                        </li>
                                    </ul>

                                    {/* Subscribe Button */}
                                    <button
                                        onClick={() => handleSubscribe(plan.id)}
                                        disabled={loading}
                                        className={`w-full py-3 rounded-lg font-semibold text-base transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${isPopular
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                            : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black'
                                            }`}
                                    >
                                        {loading && selectedPlan === plan.id ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                                                Processing...
                                            </span>
                                        ) : (
                                            'Subscribe Now'
                                        )}
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Trust Indicators */}
                <div className="text-center bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Secure payment powered by Razorpay • Cancel anytime
                    </p>
                    <div className="flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-600">
                        <span className="flex items-center gap-1">
                            <Shield className="w-4 h-4" />
                            SSL Encrypted
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4" />
                            Money Back Guarantee
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
