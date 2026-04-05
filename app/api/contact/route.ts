import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { clinicType, painPoints, clinicName, email, preferredDate1, preferredDate2 } = body;

    // Server-side validation
    if (!clinicType || !clinicName || !email || !preferredDate1) {
      return NextResponse.json({ error: '必須項目を入力してください。' }, { status: 400 });
    }

    const painPointsText = Array.isArray(painPoints) && painPoints.length > 0
      ? painPoints.join(' / ')
      : '未選択';

    const dateText = preferredDate2
      ? `第1希望: ${preferredDate1}\n  第2希望: ${preferredDate2}`
      : `第1希望: ${preferredDate1}`;

    console.log(`[Zoom Demo] New booking request from: ${clinicName} (${clinicType})`);

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

      await transporter.sendMail({
        from: `"SystemBook HP" <${process.env.SMTP_USER}>`,
        to: 'tasaki@systembook-medical.com',
        replyTo: email,
        subject: `[Zoomデモ予約] ${clinicName}様 (${clinicType})`,
        text: `
【Zoomデモ予約申込み】

■ クリニック情報
  診療科: ${clinicType}
  クリニック名: ${clinicName}
  メールアドレス: ${email}

■ 課題（選択された業務）
  ${painPointsText}

■ Zoom希望日時
  ${dateText}

■ 送信日時
  ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
        `,
        html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0A1628; padding: 20px; color: white;">
    <h2 style="margin: 0; font-size: 18px; color: #4A9EFF;">🎥 Zoomデモ予約申込み</h2>
  </div>
  <div style="padding: 24px;">
    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0A1628;">■ クリニック情報</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li><strong>診療科:</strong> ${clinicType}</li>
      <li><strong>クリニック名:</strong> ${clinicName}</li>
      <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
    </ul>
    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0A1628; margin-top: 24px;">■ 課題</h3>
    <p style="background-color: #f8fafc; padding: 12px; border-radius: 4px; color: #334155;">${painPointsText}</p>
    <h3 style="border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; color: #0A1628; margin-top: 24px;">■ Zoom希望日時</h3>
    <p style="background-color: #f0f9ff; padding: 12px; border-radius: 4px; color: #0369a1; font-weight: bold;">
      第1希望: ${preferredDate1}<br/>
      ${preferredDate2 ? `第2希望: ${preferredDate2}` : ''}
    </p>
  </div>
</div>
        `
      });
      console.log('[Zoom Demo] Email dispatched.');
    } else {
      console.log('[Zoom Demo] DEV MODE - Email content:', { clinicType, clinicName, email, painPointsText, dateText });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('[Zoom Demo] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
