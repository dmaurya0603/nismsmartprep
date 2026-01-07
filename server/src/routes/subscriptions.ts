import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { supabase } from '../index.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

// Helper function to get current time in IST
function getISTDate(date?: Date): Date {
    const d = date || new Date();
    // Add 5 hours 30 minutes for IST
    return new Date(d.getTime() + (5.5 * 60 * 60 * 1000));
}

// Helper function to convert Unix timestamp to IST
function unixToIST(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    const istDate = new Date(date.getTime() + (5.5 * 60 * 60 * 1000));
    return istDate.toISOString();
}

// Initialize Razorpay with credentials from environment variables
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.warn('WARNING: Razorpay credentials missing in environment variables. Subscription features will fail.');
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder_key_id',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'placeholder_secret_key_minimum_length'
});

// Subscription plans configuration
const PLANS = {
    weekly: {
        id: 'weekly',
        name: '1 Week Plan',
        amount: 100,
        currency: 'INR',
        interval: 'weekly',
        period: 1,
        days: 7
    },
    monthly: {
        id: 'monthly',
        name: '1 Month Plan',
        amount: 300,
        currency: 'INR',
        interval: 'monthly',
        period: 1,
        days: 30
    },
    quarterly: {
        id: 'quarterly',
        name: 'Quarterly Plan',
        amount: 500,
        currency: 'INR',
        interval: 'quarterly',
        period: 3,
        days: 90
    },
    semiannual: {
        id: 'semiannual',
        name: 'Semi-Annual Plan',
        amount: 900,
        currency: 'INR',
        interval: 'semiannual',
        period: 6,
        days: 180
    }
};

/**
 * GET /api/subscriptions/health
 * Check if Razorpay is configured correctly
 */
router.get('/health', (req, res) => {
    const hasKeyId = !!process.env.RAZORPAY_KEY_ID;
    const hasKeySecret = !!process.env.RAZORPAY_KEY_SECRET;
    const hasWebhookSecret = !!process.env.RAZORPAY_WEBHOOK_SECRET;
    
    const status = hasKeyId && hasKeySecret ? 'ok' : 'error';
    
    res.json({
        status,
        razorpay: {
            keyId: hasKeyId ? 'configured' : 'missing',
            keySecret: hasKeySecret ? 'configured' : 'missing',
            webhookSecret: hasWebhookSecret ? 'configured' : 'missing'
        },
        timestamp: getISTDate().toISOString()
    });
});

/**
 * GET /api/subscriptions/plans
 * Get available subscription plans
 */
router.get('/plans', (req, res) => {
    const plans = Object.values(PLANS);
    res.json({ plans });
});

/**
 * POST /api/subscriptions/create
 * Create a new subscription
 */
// Cache for Plan IDs to avoid repeated API calls
const planCache: Record<string, string> = {};

// Helper to get or create a Razorpay plan
async function getOrCreatePlan(planId: string, planDetails: any) {
    // Return in-memory cached ID if available
    if (planCache[planId]) {
        return planCache[planId];
    }

    // Check local cached property (legacy check)
    if ((planDetails as any).razorpayId) {
        planCache[planId] = (planDetails as any).razorpayId;
        return (planDetails as any).razorpayId;
    }

    try {
        // Fetch all plans to check if it already exists
        // Note: Razorpay returns paginated results. For robust production use, 
        // you should store the Razorpay Plan ID in your database or env config.
        const allPlans = await razorpay.plans.all({ count: 100 });
        const amountInPaise = planDetails.amount * 100;

        const existingPlan = allPlans.items.find((p: any) =>
            p.item.name === planDetails.name &&
            p.item.amount === amountInPaise &&
            p.item.currency === planDetails.currency &&
            p.interval === (planId === 'quarterly' ? 3 : planId === 'semiannual' ? 6 : 1)
        );

        if (existingPlan) {
            console.log(`Found existing plan for ${planId}: ${existingPlan.id}`);
            (planDetails as any).razorpayId = existingPlan.id;
            planCache[planId] = existingPlan.id;
            return existingPlan.id;
        }

        // Determine period and interval for Razorpay
        let period: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';
        let interval = 1;

        switch (planId) {
            case 'weekly':
                period = 'weekly';
                interval = 1;
                break;
            case 'monthly':
                period = 'monthly';
                interval = 1;
                break;
            case 'quarterly':
                period = 'monthly';
                interval = 3;
                break;
            case 'semiannual':
                period = 'monthly';
                interval = 6;
                break;
        }

        console.log(`Creating new Razorpay plan for ${planId}...`);

        // Create new plan
        const newPlan = await razorpay.plans.create({
            period,
            interval,
            item: {
                name: planDetails.name,
                amount: amountInPaise,
                currency: planDetails.currency,
                description: `${planDetails.name} - ${planDetails.amount} ${planDetails.currency}`
            }
        });

        console.log(`Created new plan: ${newPlan.id}`);
        (planDetails as any).razorpayId = newPlan.id;
        planCache[planId] = newPlan.id;
        return newPlan.id;
    } catch (error) {
        console.error('Error in getOrCreatePlan:', error);
        throw error;
    }
}

/**
 * POST /api/subscriptions/create
 * Create a new subscription
 */
router.post('/create', authenticateUser, async (req, res) => {
    try {
        const { planId, isUpgrade } = req.body;
        const userId = req.user.id;

        console.log('Subscription creation started:', { userId, planId, isUpgrade });

        if (!planId || !PLANS[planId as keyof typeof PLANS]) {
            console.error('Invalid plan ID:', planId);
            return res.status(400).json({ error: 'Invalid plan ID' });
        }

        const plan = PLANS[planId as keyof typeof PLANS];
        console.log('Plan selected:', plan);

        // Verify Razorpay credentials
        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            console.error('Razorpay credentials missing!');
            return res.status(500).json({ error: 'Payment gateway not configured. Please contact support.' });
        }

        // Check if user already has an active subscription
        const { data: existingSubscription } = await supabase
            .from('subscriptions')
            .select('*')
            .eq('user_id', userId)
            .eq('status', 'active')
            .order('current_end', { ascending: false })
            .limit(1)
            .single();

        // Handle existing subscription conflict
        if (existingSubscription && !isUpgrade) {
            // Check if it's actually valid (future date)
            if (new Date(existingSubscription.current_end) > getISTDate()) {
                return res.status(409).json({
                    error: 'ACTIVE_SUBSCRIPTION_EXISTS',
                    message: `You already have an active subscription ending on ${new Date(existingSubscription.current_end).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
                    subscription: existingSubscription
                });
            }
        }

        // Handle Upgrade/Extension Logic
        let previousEndDate = getISTDate();
        if (existingSubscription && isUpgrade) {
            // 1. Cancel the old subscription in Razorpay to prevent double billing
            try {
                if (existingSubscription.razorpay_subscription_id) {
                    await razorpay.subscriptions.cancel(existingSubscription.razorpay_subscription_id);
                    // Update old record to cancelled locally
                    await supabase
                        .from('subscriptions')
                        .update({ status: 'cancelled' })
                        .eq('id', existingSubscription.id);
                }
            } catch (err) {
                console.warn('Failed to cancel old subscription:', err);
                // Continue anyway to allow user to subscribe
            }

            // 2. Determine base date for "appending" duration
            const oldEnd = new Date(existingSubscription.current_end);
            if (oldEnd > getISTDate()) {
                previousEndDate = oldEnd;
            }
        }

        // Get verifiable Razorpay Plan ID
        console.log('Getting or creating Razorpay plan...');
        const razorpayPlanId = await getOrCreatePlan(planId, plan);
        console.log('Razorpay plan ID:', razorpayPlanId);

        // Create Razorpay subscription
        console.log('Creating Razorpay subscription...');
        const razorpaySubscription = await razorpay.subscriptions.create({
            plan_id: razorpayPlanId,
            total_count: planId === 'weekly' ? 520 : (planId === 'quarterly' ? 40 : (planId === 'semiannual' ? 20 : 120)), // Cap at ~10 years
            quantity: 1,
            customer_notify: 1,
            notes: {
                user_id: userId,
                plan_name: plan.name,
                type: isUpgrade ? 'upgrade' : 'new'
            }
        });
        console.log('Razorpay subscription created:', razorpaySubscription.id);

        // Calculate new end date (Appending duration)
        // previousEndDate is already in IST (from DB), so don't convert again
        const currentStart = getISTDate(); // Billing starts now in IST
        const currentEnd = new Date(previousEndDate); // Use date as-is from DB
        currentEnd.setDate(currentEnd.getDate() + plan.days);

        // Store in database
        const { data: subscription, error } = await supabase
            .from('subscriptions')
            .insert({
                user_id: userId,
                razorpay_subscription_id: razorpaySubscription.id,
                plan_id: planId,
                plan_name: plan.name,
                status: 'created',
                current_start: currentStart.toISOString(),
                current_end: currentEnd.toISOString(),
                amount: plan.amount,
                currency: plan.currency
            })
            .select()
            .single();

        if (error) {
            console.error('Error creating subscription in DB:', error);
            return res.status(500).json({ error: 'Failed to create subscription' });
        }

        res.json({
            subscription: razorpaySubscription,
            dbSubscription: subscription
        });
    } catch (error: any) {
        console.error('Error creating subscription:', error);
        console.error('Error details:', {
            message: error?.message,
            description: error?.error?.description,
            code: error?.error?.code,
            stack: error?.stack
        });
        // Return explicit error message for debugging
        const errorMessage = error?.error?.description || error?.message || 'Failed to create subscription';
        res.status(500).json({
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? error : undefined
        });
    }
});

/**
 * POST /api/subscriptions/verify-payment
 * Verify Razorpay payment signature
 */
router.post('/verify-payment', authenticateUser, async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = req.body;
        const userId = req.user.id;

        console.log('Payment verification started:', {
            payment_id: razorpay_payment_id,
            subscription_id: razorpay_subscription_id,
            user_id: userId
        });

        // Verify signature
        const generatedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
            .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
            .digest('hex');

        if (generatedSignature !== razorpay_signature) {
            console.error('Invalid payment signature');
            return res.status(400).json({ error: 'Invalid payment signature' });
        }

        console.log('Payment signature verified successfully');

        // Fetch subscription from Razorpay to get current dates
        const razorpaySubscription = await razorpay.subscriptions.fetch(razorpay_subscription_id);
        console.log('Razorpay subscription fetched:', razorpaySubscription);

        // Fetch subscription record from database
        const { data: subData, error: subError } = await supabase
            .from('subscriptions')
            .select('*')
            .eq('razorpay_subscription_id', razorpay_subscription_id)
            .single();

        if (subError || !subData) {
            console.error('Subscription not found in database:', subError);
            return res.status(404).json({ error: 'Subscription not found' });
        }

        console.log('Database subscription found:', subData);

        // ACTIVATE SUBSCRIPTION IMMEDIATELY
        // Update subscription status to active (using IST)
        const { error: updateError } = await supabase
            .from('subscriptions')
            .update({
                status: 'active',
                current_start: razorpaySubscription.current_start 
                    ? unixToIST(razorpaySubscription.current_start)
                    : subData.current_start,
                current_end: razorpaySubscription.current_end
                    ? unixToIST(razorpaySubscription.current_end)
                    : subData.current_end
            })
            .eq('id', subData.id);

        if (updateError) {
            console.error('Failed to update subscription status:', updateError);
            return res.status(500).json({ error: 'Failed to activate subscription' });
        }

        console.log('Subscription activated in database');

        // Update users table to reflect active subscription
        // customer_id might be at root level or nested
        const customerId = razorpaySubscription.customer_id || (razorpaySubscription as any).customer?.id || null;
        
        const { error: userUpdateError } = await supabase
            .from('users')
            .update({
                subscription_status: 'active',
                subscription_id: razorpay_subscription_id,
                razorpay_customer_id: customerId
            })
            .eq('id', userId);

        if (userUpdateError) {
            console.error('Failed to update user subscription status:', userUpdateError);
        } else {
            console.log('User subscription status updated to active, customer_id:', customerId);
        }

        // Fetch payment details from Razorpay
        let paymentAmount = 0;
        let razorpayOrderId = null;
        try {
            const payment = await razorpay.payments.fetch(razorpay_payment_id);
            paymentAmount = Number(payment.amount) / 100; // Convert paise to rupees
            razorpayOrderId = payment.order_id || null;
            console.log('Payment details fetched:', { amount: paymentAmount, currency: payment.currency, order_id: razorpayOrderId });
        } catch (paymentError) {
            console.error('Failed to fetch payment details:', paymentError);
            paymentAmount = subData.amount; // Fallback to plan amount
        }

        // Record payment transaction
        await supabase
            .from('payment_transactions')
            .upsert({
                user_id: userId,
                subscription_id: subData.id,
                razorpay_payment_id,
                razorpay_order_id: razorpayOrderId,
                amount: paymentAmount,
                currency: 'INR',
                status: 'captured'
            }, { onConflict: 'razorpay_payment_id' });

        console.log('Payment transaction recorded');

        res.json({ 
            success: true, 
            message: 'Payment verified and subscription activated',
            subscription: {
                status: 'active',
                current_end: razorpaySubscription.current_end
                    ? unixToIST(razorpaySubscription.current_end)
                    : subData.current_end
            }
        });
    } catch (error: any) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ 
            error: 'Failed to verify payment',
            details: error.message
        });
    }
});

/**
 * GET /api/subscriptions/status
 * Get user's subscription status
 */
router.get('/status', authenticateUser, async (req, res) => {
    try {
        const userId = req.user.id;

        const { data: subscription, error } = await supabase
            .from('subscriptions')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

        if (error || !subscription) {
            return res.json({
                hasSubscription: false,
                status: 'none'
            });
        }

        const isActive = subscription.status === 'active' &&
            new Date(subscription.current_end) > getISTDate();

        res.json({
            hasSubscription: true,
            isActive,
            subscription
        });
    } catch (error) {
        console.error('Error fetching subscription status:', error);
        res.status(500).json({ error: 'Failed to fetch subscription status' });
    }
});

/**
 * POST /api/subscriptions/webhook
 * Razorpay webhook handler
 */
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    try {
        const signature = req.headers['x-razorpay-signature'] as string;
        const body = req.body.toString();

        // Verify webhook signature
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET || '')
            .update(body)
            .digest('hex');

        if (signature !== expectedSignature) {
            console.error('Invalid webhook signature');
            return res.status(400).json({ error: 'Invalid signature' });
        }

        const event = JSON.parse(body);
        const eventType = event.event;
        const payload = event.payload.subscription?.entity || event.payload.payment?.entity;

        console.log('Webhook event:', eventType, payload);

        // Get user_id from notes (embedded in subscription entity)
        const userId = payload.notes?.user_id;

        // If userId is missing in notes, fallback to finding it via subscription ID in DB
        let targetUserId = userId;
        if (!targetUserId) {
            const { data: sub } = await supabase
                .from('subscriptions')
                .select('user_id')
                .eq('razorpay_subscription_id', payload.id)
                .single();
            if (sub) targetUserId = sub.user_id;
        }

        if (!targetUserId) {
            console.error('Could not find user_id for subscription:', payload.id);
            return res.json({ received: true, warning: 'User not found' });
        }

        // Handle different webhook events
        switch (eventType) {
            case 'subscription.activated':
            case 'subscription.charged':
                // 1. Update Subscription Table (using IST)
                await supabase
                    .from('subscriptions')
                    .update({
                        status: 'active',
                        current_start: unixToIST(payload.current_start),
                        current_end: unixToIST(payload.current_end)
                    })
                    .eq('razorpay_subscription_id', payload.id);

                // 2. Sync Users Table (Enable Access)
                // Enforce only one active subscription ref per user ideally, 
                // but here we just ensure this user is active.
                await supabase
                    .from('users')
                    .update({
                        subscription_status: 'active',
                        subscription_id: payload.id,
                        razorpay_customer_id: payload.customer_id
                    })
                    .eq('id', targetUserId);

                // 3. Log Payment Transaction (Crucial for History)
                if (event.payload.payment) {
                    const payment = event.payload.payment.entity;

                    // Resolve internal Subscription UUID
                    // We need the UUID, not the razorpay string 'sub_...'
                    const { data: subUUID } = await supabase
                        .from('subscriptions')
                        .select('id')
                        .eq('razorpay_subscription_id', payload.id)
                        .single();

                    if (subUUID) {
                        // UPSERT: If record exists (from verify-payment), update it. If not, create it.
                        await supabase.from('payment_transactions').upsert({
                            user_id: targetUserId,
                            subscription_id: subUUID.id, // Correct UUID
                            razorpay_payment_id: payment.id,
                            razorpay_order_id: payment.order_id || null, // Map Order ID
                            amount: Number(payment.amount) / 100, // Correct Amount
                            currency: payment.currency,
                            status: payment.status
                        }, { onConflict: 'razorpay_payment_id' });
                    } else {
                        console.warn('Could not link payment to subscription UUID:', payload.id);
                    }
                }
                break;

            case 'subscription.cancelled':
            case 'subscription.completed':
            case 'subscription.halted':
            case 'subscription.paused': // pause usually means inactive access? User said "cancelled/expired -> inactive"
                const newStatus = payload.status; // cancelled, completed, halted, paused

                // 1. Update Subscription Table
                await supabase
                    .from('subscriptions')
                    .update({ status: newStatus })
                    .eq('razorpay_subscription_id', payload.id);

                // 2. Sync Users Table (Revoke Access)
                // Only revoke if the main subscription_id matches this one (avoid edge case of multiple subs)
                // But simplified logic: If this sub is cancelling, set user to inactive.
                // Robustness: Check if user has ANOTHER active sub? 
                // For simplicity/performance and "One active sub per user" rule:
                await supabase
                    .from('users')
                    .update({
                        subscription_status: 'inactive',
                        // We can keep the ID for record or clear it. 
                        // Usually keeping the last ID is fine, but status determines access.
                        // Let's NOT clear subscription_id to track last sub? 
                        // Request: "update users table to inactive"
                    })
                    .eq('id', targetUserId)
                    // only update if this was the active subscription
                    .eq('subscription_id', payload.id);
                break;
        }

        res.json({ received: true });
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Webhook processing failed' });
    }
});

export default router;
