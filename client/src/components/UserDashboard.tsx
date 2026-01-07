import { useAuth } from '../context/AuthContext';
import { SubscriptionPlans } from './SubscriptionPlans';
import { Dashboard as FormulaDashboard } from './Dashboard';

export function UserDashboard() {
    const { user, hasActiveSubscription, loading, subscription } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    // Show subscription plans if no active subscription
    if (!hasActiveSubscription) {
        return (
            <div className="min-h-screen bg-white dark:bg-black">
                <div className="container mx-auto px-4 py-8">
                    {/* Welcome Message */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            Welcome, {user?.user_metadata?.full_name || user?.email}! 👋
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Choose a subscription plan to access all formulas and practice tools
                        </p>
                    </div>

                    {/* Subscription Plans */}
                    <SubscriptionPlans />
                </div>
            </div>
        );
    }

    // Show formula dashboard if has active subscription
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="container mx-auto px-4 py-8">
                {/* Welcome Message with Subscription Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                Welcome back, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}! 👋
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Your subscription is active
                            </p>
                        </div>
                        {subscription && (
                            <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 rounded-lg border border-green-300 dark:border-green-700">
                                <p className="text-sm text-green-800 dark:text-green-300 font-medium">
                                    Active until: {new Date(subscription.current_end).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Formula Dashboard */}
                <FormulaDashboard />
            </div>
        </div>
    );
}
