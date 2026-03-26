import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API client
// Note: In production, ensure GEMINI_API_KEY is set in your environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key_for_build');

export async function triageMessage(message: string): Promise<'緊急' | '一般'> {
  if (!process.env.GEMINI_API_KEY) {
    console.warn('GEMINI_API_KEY is not set. Defaulting to 一般 triage.');
    return '一般';
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    // System instruction implicitly passed via prompt structure for simplicity
    const prompt = `
あなたは医療機関向けITシステムのトリアージAIです。
以下の顧客からの問い合わせ内容を読み、「緊急」か「一般」かを判定してください。

【緊急の判断基準】
- 「システムが止まった」「ログインできない」「エラーが出続ける」など、業務に重大な支障が出ている障害報告。
- 「患者情報が漏れたかもしれない」等のセキュリティインシデントの疑い。
- その他、今すぐ代表者が対応しなければならない切迫した状況。

【一般の判断基準】
- 導入に関する相談、相見積もりの依頼。
- システムの仕様や機能に関する質問。
- 「いつか導入したい」といった将来的な相談。
- その他、24時間以内の返信で問題ない内容。

出力は必ず「緊急」または「一般」のどちらか2文字のみを出力してください。理由やその他の文章は一切含めないでください。

問い合わせ内容:
"""
${message}
"""
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    return responseText.includes('緊急') ? '緊急' : '一般';
  } catch (error) {
    console.error('Gemini API Triage Error:', error);
    // Fallback securely to normal priority
    return '一般';
  }
}
