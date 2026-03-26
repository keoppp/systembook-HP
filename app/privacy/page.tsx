import { CheckCircle2 } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 pt-20 pb-32 min-h-screen">
      <div className="bg-midnight py-16 mb-12">
        <div className="container-narrow">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 heading-serif">リーガルセンター</h1>
          <p className="text-platinum/80 text-lg">プライバシーポリシー・利用規約・特定商取引法に基づく表記</p>
        </div>
      </div>
      
      <div className="container-narrow">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-20">
          
          {/* Privacy Policy */}
          <section id="policy" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-midnight mb-6 border-b border-gray-100 pb-4 heading-serif flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-gold" />
              プライバシーポリシー
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
              <p>
                SystemBook Medical（以下、「当方」）は、医療機関向けITサービスを提供する事業者として、個人情報および医療情報の保護を最重要課題と位置づけ、以下の通りプライバシーポリシーを定めます。
              </p>
              
              <h3 className="font-bold text-midnight text-base mt-8 mb-2">1. 個人情報の定義</h3>
              <p>
                本ポリシーにおいて、個人情報とは、個人情報の保護に関する法律（以下「個人情報保護法」）第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるものを意味します。
              </p>
              
              <h3 className="font-bold text-midnight text-base mt-8 mb-2">2. 医療情報の取り扱いに関する特則</h3>
              <p>
                当方は、医療機関のシステム委託先として、厚生労働省「医療情報システムの安全管理に関するガイドライン」、経済産業省・総務省「医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン」（いわゆる3省庁2ガイドライン）を遵守し、患者の機微な医療情報を高いセキュリティ水準で管理します。
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>当方が提供するシステム（n8n等）を通過するデータは、処理後に速やかに破棄し、当方環境内での長期保存は原則行いません。</li>
                <li>すべての通信経路および保存データは、AES-256等の強固な方式で暗号化されます。</li>
                <li>AIモデル（Gemini API等）へ送信されるデータは、明示的なオプトアウト契約を結んだAPIエンドポイントのみを使用し、AIの学習データとして利用されることはありません。</li>
              </ul>
            </div>
          </section>

          {/* Terms */}
          <section id="terms" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-midnight mb-6 border-b border-gray-100 pb-4 heading-serif flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-gold" />
              利用規約
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm">
              <p>
                この利用規約（以下、「本規約」）は、SystemBook Medical（以下、「当方」）が提供するサービス（以下、「本サービス」）の利用条件を定めるものです。
              </p>
              
              <h3 className="font-bold text-midnight text-base mt-8 mb-2">第1条（適用）</h3>
              <p>
                本規約は、ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              </p>
              
              <h3 className="font-bold text-midnight text-base mt-8 mb-2">第2条（サービス内容と責任分界点）</h3>
              <p>
                1. 本サービスは、既存電子カルテや予約システム間のAPI連携（n8n等）およびAI自動化機能等を提供・保守するものです。<br />
                2. 当方の責任範囲は、当方が構築・管理する連携サーバー（n8n）および付随するプログラムの正常稼働までとします。連携先の外部クラウドサービスや電子カルテ本体の仕様変更・障害による不具合については、当方は直接の修正責任を負いません（ベストエフォートでの対応となります）。<br />
                3. 本サービスに含まれるAI（生成AI）が生成した下書きや提案は、あくまで医師の判断を補助するものであり、最終的な医学的判断およびカルテ記載内容の責任は利用する医師に帰属します。
              </p>
            </div>
          </section>

          {/* Legal (Tokushoho) */}
          <section id="law" className="scroll-mt-32">
            <h2 className="text-2xl font-bold text-midnight mb-6 border-b border-gray-100 pb-4 heading-serif flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-gold" />
              特定商取引法に基づく表記
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 pr-6 w-48 font-bold text-midnight bg-gray-50 px-4 rounded-tl-lg">屋号</th>
                    <td className="py-4">SystemBook Medical</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 pr-6 font-bold text-midnight bg-gray-50 px-4">代表者</th>
                    <td className="py-4">田崎 健斗</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 pr-6 font-bold text-midnight bg-gray-50 px-4">事業内容</th>
                    <td className="py-4">医療機関向けITコンサルティング、システム開発・保守、業務自動化支援</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 pr-6 font-bold text-midnight bg-gray-50 px-4">お問い合わせ窓口</th>
                    <td className="py-4">tasaki@systembook-medical.com<br /><span className="text-xs text-gray-500">※お取引先様には別途直通の連絡先（電話番号含む）をご案内しております。</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 pr-6 font-bold text-midnight bg-gray-50 px-4">サービス対価</th>
                    <td className="py-4">提供サービスごとに事前見積書にて提示</td>
                  </tr>
                  <tr>
                    <th className="py-4 pr-6 font-bold text-midnight bg-gray-50 px-4 rounded-bl-lg">対価以外に必要な費用</th>
                    <td className="py-4">サーバー維持費、API利用料等（見積書に明記します）、インターネット接続にかかる通信回線等の諸費用</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
