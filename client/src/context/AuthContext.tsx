import { createContext, useContext, useEffect, useState, useRef, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { User, Session } from '@supabase/supabase-js';

interface Subscription {
  id: string;
  status: string;
  current_end: string;
  plan_name: string;
  amount: number;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  subscription: Subscription | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  hasActiveSubscription: boolean;
  refreshSubscription: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const lastUserIdRef = useRef<string | null>(null);

  // Initialize subscription from localStorage (prevents flash of "Inactive")
  const [subscription, setSubscription] = useState<Subscription | null>(() => {
    try {
      const cached = localStorage.getItem('subscription_status');
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  const fetchSubscription = async (userId: string) => {
    lastUserIdRef.current = userId;
    try {
      // Create a timeout promise to prevent hanging (10s to handle cold starts)
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), 10000)
      );

      // First, try to get an active subscription
      const activeQuery = supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .order('current_end', { ascending: false })
        .limit(1)
        .maybeSingle();

      const { data: activeData, error: activeError } = await Promise.race([activeQuery, timeoutPromise]);

      if (activeError) {
        if (import.meta.env.DEV) {
          console.warn('Subscription fetch error (keeping cached state):', activeError.message);
        }
        return;
      }

      // If we found an active subscription, use it
      if (activeData) {
        setSubscription(activeData);
        localStorage.setItem('subscription_status', JSON.stringify(activeData));
        return;
      }

      // Fallback: get the most recent subscription (for showing history/expired status)
      const dbQuery = supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      const { data, error } = await Promise.race([dbQuery, timeoutPromise]);

      if (error) {
        // For any error, keep the stale state to prevent UI flicker
        if (import.meta.env.DEV) {
          console.warn('Subscription fetch error (keeping cached state):', error.message);
        }
        return;
      }

      // data will be null if no subscription exists (this is expected, not an error)
      if (data) {
        setSubscription(data);
        localStorage.setItem('subscription_status', JSON.stringify(data));
      } else {
        setSubscription(null);
        localStorage.removeItem('subscription_status');
      }
    } catch {
      // Keep stale state on timeout or network errors
      if (import.meta.env.DEV) {
        console.warn('Subscription fetch timeout (keeping cached state)');
      }
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set a timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      if (mounted && loading) {
        setLoading(false);
      }
    }, 3000);

    // Get initial session
    supabase.auth.getSession()
      .then(({ data: { session }, error }) => {
        if (!mounted) return;

        if (error) console.error('Error getting session:', error);

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          fetchSubscription(session.user.id).finally(() => {
            if (mounted) setLoading(false);
          });
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('Session fetch error:', error);
        if (mounted) setLoading(false);
      });

    // Listen for auth changes (including OAuth callback)
    const { data: { subscription: authListener } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return;

        // Debug log for OAuth flow troubleshooting
        if (import.meta.env.DEV) {
          console.log('[Auth] State changed:', event, session?.user?.email || 'no user');
        }

        // Ignore token refresh events to prevent duplicate fetches
        if (event === 'TOKEN_REFRESHED') {
          return;
        }

        setSession(session);
        setUser(session?.user ?? null);

        if (session?.user) {
          // Only fetch if user changed or completely new session
          // This prevents duplicate fetches on INITIAL_SESSION if getSession already ran
          if (session.user.id !== lastUserIdRef.current) {
            lastUserIdRef.current = session.user.id;
            // Fetch in background (don't set loading=true to prevent flicker)
            await fetchSubscription(session.user.id);
          }
        } else {
          lastUserIdRef.current = null;
          setSubscription(null);
          localStorage.removeItem('subscription_status');
        }

        // Only set loading false if it was true (initial load)
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      clearTimeout(loadingTimeout);
      authListener.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    /**
     * OAUTH REDIRECT FIX
     * 
     * Problem: Supabase was redirecting to production (Site URL) even when 
     * login was initiated from localhost.
     * 
     * Root Cause: When `redirectTo` is not provided or not recognized,
     * Supabase falls back to the Site URL configured in the dashboard.
     * 
     * Solution: Explicitly pass `redirectTo` with the current browser origin.
     * This tells Supabase exactly where to redirect after the OAuth callback.
     * 
     * Requirements:
     * 1. The redirectTo URL MUST be in Supabase Dashboard > Authentication > 
     *    URL Configuration > Redirect URLs (add these):
     *    - http://localhost:5173
     *    - http://localhost:5173/**  (wildcard for all paths)
     *    - https://nismsmartprep.in
     *    - https://nismsmartprep.in/**
     * 
     * 2. Site URL should remain as production URL:
     *    - https://nismsmartprep.in
     */

    // Dynamically capture the current origin - works for both localhost and production
    const currentOrigin = window.location.origin;
    const redirectUrl = `${currentOrigin}/dashboard`;

    // Debug logging in development
    if (import.meta.env.DEV) {
      console.log('[OAuth] Current origin:', currentOrigin);
      console.log('[OAuth] Redirect URL:', redirectUrl);
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // CRITICAL: This redirectTo parameter is what fixes the issue.
        // It tells Supabase to redirect here AFTER the Google OAuth callback.
        redirectTo: redirectUrl,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      }
    });

    if (error) {
      console.error('[OAuth] Error initiating Google sign-in:', error);
      throw error;
    }

    // Log the full OAuth URL for debugging
    if (import.meta.env.DEV && data?.url) {
      console.log('[OAuth] Full OAuth URL:', data.url);
      // Verify that redirectTo is encoded in the URL
      const url = new URL(data.url);
      console.log('[OAuth] redirect_to param:', url.searchParams.get('redirect_to'));
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
      throw error;
    }
    lastUserIdRef.current = null;
    setSubscription(null);
    localStorage.removeItem('subscription_status');
  };

  const refreshSubscription = async () => {
    if (user) {
      await fetchSubscription(user.id);
    }
  };

  const hasActiveSubscription = subscription !== null &&
    subscription.status === 'active' &&
    new Date(subscription.current_end) > new Date();

  return (
    <AuthContext.Provider value={{
      user,
      session,
      subscription,
      loading,
      signInWithGoogle,
      signOut,
      hasActiveSubscription,
      refreshSubscription
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

