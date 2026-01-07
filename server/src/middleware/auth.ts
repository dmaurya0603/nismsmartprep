import { Request, Response, NextFunction } from 'express';
import { supabase } from '../index.js';

// Helper function to get current time in IST
function getISTDate(): Date {
  const d = new Date();
  return new Date(d.getTime() + (5.5 * 60 * 60 * 1000));
}

// Extend Express Request type to include user and subscription
declare global {
  namespace Express {
    interface Request {
      user?: any;
      subscription?: any;
    }
  }
}

/**
 * Middleware to authenticate user via Supabase JWT token
 */
export async function authenticateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.substring(7);

    // Verify token with Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
}

/**
 * Middleware to check if user has an active subscription
 * Automatically expires subscriptions that have passed their end date
 */
export async function requireSubscription(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    // Check for active subscription
    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();

    if (error || !subscription) {
      return res.status(403).json({
        error: 'Active subscription required',
        code: 'SUBSCRIPTION_REQUIRED'
      });
    }

    // Check if subscription has expired and auto-expire it
    if (subscription.current_end && new Date(subscription.current_end) < getISTDate()) {
      // Update subscription status to expired
      await supabase
        .from('subscriptions')
        .update({ status: 'expired' })
        .eq('id', subscription.id);

      // Update user subscription status
      await supabase
        .from('users')
        .update({ subscription_status: 'expired' })
        .eq('id', userId);

      console.log(`Auto-expired subscription ${subscription.id} for user ${userId}`);

      return res.status(403).json({
        error: 'Subscription has expired',
        code: 'SUBSCRIPTION_EXPIRED',
        expiredOn: subscription.current_end
      });
    }

    // Attach subscription to request
    req.subscription = subscription;
    next();
  } catch (error) {
    console.error('Subscription check error:', error);
    res.status(500).json({ error: 'Failed to verify subscription' });
  }
}

/**
 * Optional middleware - allows access but adds subscription info if available
 */
export async function optionalSubscription(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.id;

    if (userId) {
      const { data: subscription } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .single();

      if (subscription && new Date(subscription.current_end) > getISTDate()) {
        req.subscription = subscription;
      }
    }

    next();
  } catch (error) {
    // Don't fail the request, just continue without subscription
    next();
  }
}
