
/// <reference types="node" />

import Razorpay from 'razorpay';
import 'dotenv/config';

async function checkRazorpay() {
    console.log('--- Checking Razorpay Configuration ---');

    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
        console.error('❌ ERROR: Razorpay credentials missing in .env');
        console.log('RAZORPAY_KEY_ID:', key_id ? 'Set' : 'Missing');
        console.log('RAZORPAY_KEY_SECRET:', key_secret ? 'Set' : 'Missing');
        return;
    }

    if (key_id.startsWith('rzp_test_placeholder')) {
        console.error('❌ ERROR: Razorpay credentials are still placeholders!');
        return;
    }

    console.log('✅ Credentials found in environment variables.');
    console.log(`Key ID: ${key_id.substring(0, 8)}...`);

    try {
        const razorpay = new Razorpay({
            key_id,
            key_secret
        });

        console.log('Testing connection to Razorpay API...');
        // Try to fetch plans to verify credentials
        const plans = await razorpay.plans.all({ count: 1 });
        console.log('✅ Connection successful! Fetched plans:', plans.items.length);

    } catch (error: any) {
        console.error('❌ Connection Failed:', error.message);
        if (error.statusCode === 401) {
            console.error('Reason: Authentication failed. Check your Key ID and Secret.');
        }
    }
}

checkRazorpay();
