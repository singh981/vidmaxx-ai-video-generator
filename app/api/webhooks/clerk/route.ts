import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

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
    const body = await req.text()

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

    if (eventType === 'user.created' || eventType === 'user.updated') {
        const { id, email_addresses, first_name, last_name } = evt.data;

        // Log event safely (PII redacted)
        console.log(`Received Clerk ${eventType} event:`, {
            id,
            email_count: email_addresses?.length ?? 0
        });

        const email = email_addresses[0]?.email_address;
        const name = `${first_name ?? ''} ${last_name ?? ''}`.trim();

        // Validate email presence
        if (!email || !email_addresses?.length) {
            console.error('Error: No email address found for user', id);
            return new Response('Error: No email address found', { status: 400 });
        }

        // Sync to Supabase using Admin Client (Bypasses RLS)
        const { error } = await supabaseAdmin.from('users').upsert({
            id: id,
            email: email,
            full_name: name
        }, {
            onConflict: 'id'
        });

        if (error) {
            console.error('Error syncing user to Supabase:', error);
            return new Response('Error syncing user', { status: 500 });
        }
    } else if (eventType === 'user.deleted') {
        const { id } = evt.data;

        console.log('Received Clerk user.deleted event:', { id });

        if (!id) {
            return new Response('Error: No user ID found', { status: 400 });
        }

        const { error } = await supabaseAdmin.from('users').delete().eq('id', id);

        if (error) {
            console.error('Error deleting user from Supabase:', error);
            return new Response('Error deleting user', { status: 500 });
        }
    }

    return new Response('', { status: 200 })
}
