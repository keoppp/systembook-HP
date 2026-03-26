import { NextResponse } from 'next/server';
import { triageMessage } from '@/lib/ai-agent';
import nodemailer from 'nodemailer';

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
    console.log('[Contact Backend] Sending email to tasaki@systembook-medical.com');
    
    // Check if SMTP credentials exist, otherwise skip actual sending to avoid crash in local dev without env
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"SystemBook HP 自動送信" <${process.env.SMTP_USER}>`,
        to: 'tasaki@systembook-medical.com',
        replyTo: email,
        subject: `[SystemBook-HP] 新規問い合わせ: ${name}様 (判定: ${priority})`,
        text: `
【SystemBook Medical 公式HPからの問い合わせ】

AIトリアージ判定: ${priority}

■ お客様情報
お名前: ${name}
Email: ${email}
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}

■ メッセージ内容
${message}
        `,
        html: `
<div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0A1628; padding: 20px; color: white;">
    <h2 style="margin: 0; font-size: 18px; color: #B8A47E;">【SystemBook Medical 公式HPからの問い合わせ】</h2>
  </div>
  <div style="padding: 24px;">
    <p style="margin-top: 0;"><strong>AIトリアージ判定:</strong> <span style="background-color: ${priority === '緊急' ? '#fee2e2' : '#f1f5f9'}; color: ${priority === '緊急' ? '#dc2626' : '#475569'}; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${priority}</span></p>
    
    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0A1628;">■ お客様情報</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li><strong>お名前:</strong> ${name} 様</li>
      <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
      <li><strong>送信日時:</strong> ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</li>
    </ul>

    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0A1628; margin-top: 24px;">■ メッセージ内容</h3>
    <div style="background-color: #f8fafc; padding: 16px; border-radius: 4px; white-space: pre-wrap; color: #334155;">${message}</div>
  </div>
</div>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('[Contact Backend] Email successfully dispatched to representative.');
    } else {
      console.warn('[Contact Backend] WARNING: SMTP credentials not provided. Email not sent.');
    }

    // 4. Send Auto-reply to User (Optional, logging for now)
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
