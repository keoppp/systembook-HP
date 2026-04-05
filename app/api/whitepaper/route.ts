import { NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://n8n.my-clinic-de.com/webhook/systembook-whiteGL';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { wpName, wpClinicName, wpEmail } = body;

    if (!wpName || !wpClinicName || !wpEmail) {
      return NextResponse.json({ status: 'error', message: '必須項目を入力してください。' }, { status: 400 });
    }

    console.log(`[Whitepaper] Sending to n8n: ${wpClinicName} (${wpName}, ${wpEmail})`);

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: wpName,
        clinicName: wpClinicName,
        email: wpEmail,
        timestamp: new Date().toISOString(),
      }),
    });

    // n8n のレスポンスをそのまま中継
    const rawText = await n8nResponse.text();
    console.log('[Whitepaper] n8n response:', rawText);

    return new Response(rawText, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('[Whitepaper] Error:', error?.message || error);
    return NextResponse.json(
      { status: 'error', message: '通信エラー: ' + (error?.message || '不明なエラー') },
      { status: 200 }
    );
  }
}
