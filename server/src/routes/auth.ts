import express from 'express';
import { supabase } from '../index.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/auth/me
 * Get current user profile with subscription details
 */
router.get('/me', authenticateUser, async (req, res) => {
    try {
        const userId = req.user.id;

        // Get user profile with subscription
        const { data: profile, error } = await supabase
            .from('users')
            .select(`
        *,
        subscriptions (
          id,
          plan_id,
          plan_name,
          status,
          current_start,
          current_end,
          amount,
          currency
        )
      `)
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Error fetching user profile:', error);
            return res.status(500).json({ error: 'Failed to fetch user profile' });
        }

        res.json({ user: profile });
    } catch (error) {
        console.error('Error in /auth/me:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * POST /api/auth/logout
 * Logout user (client-side should clear token)
 */
router.post('/logout', authenticateUser, async (req, res) => {
    try {
        // Supabase handles logout on client side
        // This endpoint is mainly for logging/tracking purposes
        res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error in /auth/logout:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

/**
 * GET /api/auth/session
 * Check if user has valid session
 */
router.get('/session', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader?.startsWith('Bearer ')) {
            return res.json({ authenticated: false });
        }

        const token = authHeader.substring(7);
        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error || !user) {
            return res.json({ authenticated: false });
        }

        res.json({ authenticated: true, user });
    } catch (error) {
        res.json({ authenticated: false });
    }
});

export default router;
