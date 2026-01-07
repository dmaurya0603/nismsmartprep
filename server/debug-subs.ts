
/// <reference types="node" />

import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSubscriptions() {
    console.log('--- Checking Subscriptions ---');

    // Get all subscriptions for the test user (you can filter by email if needed, ensuring we get the right user)
    // For now, let's just dump the last 5 subscriptions created
    const { data, error } = await supabase
        .from('subscriptions')
        .select('id, user_id, plan_name, status, created_at, current_start, current_end')
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error('Error fetching subscriptions:', error);
        return;
    }

    console.table(data);
}

checkSubscriptions();
