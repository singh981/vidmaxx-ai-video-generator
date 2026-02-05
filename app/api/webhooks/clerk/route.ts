import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
    // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = await headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret.
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    // Get the ID and type
    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === 'user.created') {
        const { id, email_addresses, first_name, last_name } = evt.data;

        console.log('Received Clerk user.created event:', { id, email_addresses });

        const email = email_addresses[0]?.email_address;
        const name = `${first_name ?? ''} ${last_name ?? ''}`.trim();

        // Sync to Supabase
        // Note: We use the `service_role` key approach ideally, or RLS that allows public inserts (risky).
        // For now, assuming the client in lib/supabase.ts relies on ANON key, RLS must allow it.
        // Ideally, creating a separate admin client with SERVICE_ROLE key is best for webhooks.

        // Using simple insert for now, assuming RLS allows it (or disabled for this table temporarily)
        const { error } = await supabase.from('users').insert({
            id: id,
            email: email,
            full_name: name
        });

        if (error) {
            console.error('Error syncing user to Supabase:', error);
            return new Response('Error syncing user', { status: 500 });
        }
    }

    return new Response('', { status: 200 })
}
