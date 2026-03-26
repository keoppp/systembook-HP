import { NextResponse } from 'next/server';
import { triageMessage } from '@/lib/ai-agent';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. AI Triage using Gemini
    const priority = await triageMessage(message);
    console.log(`[Contact Triage] Priority: ${priority} | From: ${name}`);

    // 2. Pushover Notification for Emergencies
    if (priority === '緊急' && process.env.PUSHOVER_API_KEY && process.env.PUSHOVER_USER_KEY) {
      try {
        await fetch('https://api.pushover.net/1/messages.json', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token: process.env.PUSHOVER_API_KEY,
            user: process.env.PUSHOVER_USER_KEY,
            title: `【緊急】システムの問い合わせ (${name}様)`,
            message: `緊急性の高い問い合わせを受信しました。\n\n差出人: ${name}\nEmail: ${email}\n\n内容:\n${message}`,
            priority: 1, // High priority
          })
        });
        console.log('[Contact Triage] Sent emergency push notification.');
      } catch (e) {
        console.error('Failed to send Pushover notification:', e);
      }
    }

    // 3. Send Email to Representative (tasaki@systembook-medical.com)
    // NOTE: In a real production deployment, you would implement Nodemailer or Resend here.
    // For this implementation, we log the action. The framework is ready to swap in real email logic.
    console.log('[Contact Backend] Sending email to tasaki@systembook-medical.com');
    // Example:
    // await sendEmail({ to: 'tasaki@systembook-medical.com', subject: `[${priority}] 問い合わせ: ${name}様`, body: message });

    // 4. Send Auto-reply to User
    if (priority === '一般') {
      console.log(`[Contact Backend] Sending auto-reply to ${email}: 24時間以内に回答します`);
    } else {
      console.log(`[Contact Backend] Sending auto-reply to ${email}: 緊急対応中です`);
    }

    // Since this is a demonstration/baseline for the backend logic, we just return success
    // after the "processing" is complete.
    return NextResponse.json({ 
      success: true, 
      priority,
      message: '問い合わせを受付完了しました。' 
    });

  } catch (error) {
    console.error('[Contact Backend] Error processing request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
