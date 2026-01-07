import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PageLoader } from './PageLoader';
import { useEffect, useState } from 'react';

interface ProtectedRouteProps {
    children: React.ReactNode;
    requireSubscription?: boolean;
}

export function ProtectedRoute({ children, requireSubscription = true }: ProtectedRouteProps) {
    const { user, hasActiveSubscription, loading } = useAuth();
    const [showTimeout, setShowTimeout] = useState(false);

    // Add timeout for loading state
    useEffect(() => {
        const timer = setTimeout(() => {
            if (loading) {
                setShowTimeout(true);
            }
        }, 5000); // 5 second timeout

        return () => clearTimeout(timer);
    }, [loading]);

    // Show loading spinner while checking authentication
    if (loading && !showTimeout) {
        return <PageLoader />;
    }

    // If loading timed out, redirect to home
    if (showTimeout) {
        console.error('Auth loading timeout - redirecting to home');
        return <Navigate to="/" replace />;
    }

    // Redirect to homepage if not authenticated
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // If subscription is required but user doesn't have one, redirect to dashboard
    // The dashboard will show subscription plans
    if (requireSubscription && !hasActiveSubscription) {
        return <Navigate to="/dashboard" replace />;
    }

    // User is authenticated and meets subscription requirements
    return <>{children}</>;
}
