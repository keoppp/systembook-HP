import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { wpName, wpClinicName, wpEmail } = body;

    if (!wpName || !wpClinicName || !wpEmail) {
      return NextResponse.json({ error: '必須項目を入力してください。' }, { status: 400 });
    }

    console.log(`[Whitepaper] Download request from: ${wpClinicName} (${wpName}, ${wpEmail})`);

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

      // Send download link to requester
      await transporter.sendMail({
        from: `"SystemBook Medical" <${process.env.SMTP_USER}>`,
        to: wpEmail,
        subject: '【SystemBook Medical】ホワイトペーパーのご案内',
        text: `
${wpName}様

SystemBook Medical ホワイトペーパーをご請求いただきありがとうございます。

以下のURLよりダウンロードいただけます：
https://systembook-medical.com/whitepaper.pdf

ご不明な点がございましたら、お気軽にお問い合わせください。

---
SystemBook Medical
tasaki@systembook-medical.com
        `,
        html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0A1628; padding: 20px; color: white;">
    <h2 style="margin: 0; font-size: 18px; color: #B8A47E;">ホワイトペーパーのご案内</h2>
  </div>
  <div style="padding: 24px;">
    <p>${wpName}様</p>
    <p>SystemBook Medical ホワイトペーパーをご請求いただきありがとうございます。</p>
    <p style="margin: 24px 0;">
      <a href="https://systembook-medical.com/whitepaper.pdf" style="background-color: #0A1628; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">📄 ホワイトペーパーをダウンロード</a>
    </p>
    <p style="color: #64748b; font-size: 14px;">ご不明な点がございましたら、お気軽にお問い合わせください。</p>
  </div>
</div>
        `
      });

      // Notify admin
      await transporter.sendMail({
        from: `"SystemBook HP" <${process.env.SMTP_USER}>`,
        to: 'tasaki@systembook-medical.com',
        subject: `[WP申込] ${wpClinicName} ${wpName}様`,
        text: `ホワイトペーパー申込み:\n氏名: ${wpName}\nクリニック名: ${wpClinicName}\nEmail: ${wpEmail}\n日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
      });

      console.log('[Whitepaper] Emails dispatched.');
    } else {
      console.log('[Whitepaper] DEV MODE - would send to:', wpEmail);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('[Whitepaper] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
