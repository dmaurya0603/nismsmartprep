import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Brain, Crown, Calendar, TrendingUp, Target, User as UserIcon, Mail, Shield } from 'lucide-react';
import { RandomFact } from './RandomFact';

export function DashboardHome() {
    const { user, subscription, hasActiveSubscription, loading } = useAuth();
    const navigate = useNavigate();

    // Show loading while checking subscription
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    const features = [
        {
            icon: BookOpen,
            title: 'Formula Tutor',
            description: 'Master all NISM formulas with interactive learning',
            color: 'from-blue-500 to-cyan-500',
            path: '/formulas',
            stats: '50+ Formulas',
            locked: !hasActiveSubscription
        },
        {
            icon: Brain,
            title: 'Quiz Practice',
            description: 'Test your knowledge with practice quizzes',
            color: 'from-purple-500 to-pink-500',
            path: '/quiz',
            stats: 'Unlimited Practice',
            locked: !hasActiveSubscription
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Welcome back, {user?.user_metadata?.full_name || user?.email?.split('@')[0]}! 👋
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {hasActiveSubscription
                            ? "Ready to ace your NISM certification? Let's get started!"
                            : "Subscribe to unlock all features and start your NISM preparation journey!"}
                    </p>
                </div>

                {/* User Profile Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <UserIcon className="w-6 h-6" />
                        Your Profile
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                <UserIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    {user?.user_metadata?.full_name || 'Not provided'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subscription Status Card */}
                {hasActiveSubscription && subscription ? (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 mb-8 text-white shadow-xl">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <Crown className="w-8 h-8" />
                                <div>
                                    <h3 className="text-xl font-bold">Active Subscription</h3>
                                    <p className="text-green-100">
                                        {subscription.plan_name || 'Premium Plan'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
                                <Calendar className="w-5 h-5" />
                                <div>
                                    <p className="text-sm text-green-100">Valid until</p>
                                    <p className="font-semibold">
                                        {new Date(subscription.current_end).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 mb-8 text-white shadow-xl">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <Shield className="w-8 h-8" />
                                <div>
                                    <h3 className="text-xl font-bold">No Active Subscription</h3>
                                    <p className="text-orange-100">
                                        Subscribe now to access all features
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/subscribe')}
                                className="px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all font-semibold"
                            >
                                View Plans
                            </button>
                        </div>
                    </div>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Your Goal</h3>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">Clear NISM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">First Attempt Success</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Formulas</h3>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">50+</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Available to Learn</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Status</h3>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {hasActiveSubscription ? 'Active' : 'Inactive'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {hasActiveSubscription ? 'Keep Learning!' : 'Subscribe to Start'}
                        </p>
                    </div>
                </div>

                {/* Main Features */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        {hasActiveSubscription ? 'Choose Your Learning Path' : 'Available Features'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <button
                                    key={feature.path}
                                    onClick={() => feature.locked ? navigate('/subscribe') : navigate(feature.path)}
                                    className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 text-left"
                                    disabled={feature.locked}
                                >
                                    {/* Lock Overlay */}
                                    {feature.locked && (
                                        <div className="absolute inset-0 bg-gray-900/50 dark:bg-gray-900/70 rounded-xl flex items-center justify-center z-10">
                                            <div className="text-center">
                                                <Shield className="w-12 h-12 text-white mx-auto mb-2" />
                                                <p className="text-white font-semibold">Subscribe to Unlock</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>

                                    {/* Content */}
                                    <div className="relative">
                                        <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {feature.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                                {feature.stats}
                                            </span>
                                            <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                                                {feature.locked ? 'Subscribe →' : 'Start Learning →'}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Dynamic Fact Section */}
                <div className="mt-8">
                    <RandomFact />
                </div>
            </div>
        </div>
    );
}
