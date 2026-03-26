'use client';

import { 
  FileText, ShieldCheck, Database, CheckSquare, 
  Map, Server, Lock, AlertTriangle, ArrowRight 
} from 'lucide-react';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'introduction', title: '1. はじめに（基本姿勢）', icon: <FileText className="w-4 h-4" /> },
  { id: 'responsibility', title: '2. 責任分界点', icon: <Map className="w-4 h-4" /> },
  { id: 'requirements', title: '3. 医療選定時の確認事項', icon: <CheckSquare className="w-4 h-4" /> },
  { id: 'risk-management', title: '4. リスク対応・技術的安全管理', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'compliance', title: '5. 制度上の要求事項（e-文書法）', icon: <Database className="w-4 h-4" /> },
  { id: 'bcp-exit', title: '6. BCPとエグジット戦略', icon: <AlertTriangle className="w-4 h-4" /> },
  { id: 'roadmap', title: '7. 今後追加予定の機能と方針', icon: <ArrowRight className="w-4 h-4" /> },
];

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* Header Area */}
      <div className="bg-midnight py-16 border-b border-gray-800">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-gold/30 bg-gold/10 mb-6">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold text-gold tracking-widest uppercase">機密情報（取扱注意）</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 heading-serif leading-tight">
              医療情報サービス安全管理<br />ホワイトペーパー
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-platinum/80 border-t border-gray-800 pt-6 mt-6">
              <div>
                <span className="block text-xs text-gray-500 mb-1">事業者名</span>
                <span className="font-bold text-white">SystemBook Medical</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 mb-1">代表者 (CISO)</span>
                <span className="font-bold text-white">田崎 健斗</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 mb-1">準拠ガイドライン</span>
                <span className="font-bold text-white">経産・総務・厚労 3省庁2GL</span>
              </div>
              <div>
                <span className="block text-xs text-gray-500 mb-1">バージョン</span>
                <span className="font-bold text-white">1.0 (2025年版)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-32 bg-white rounded-xl shadow-sm border border-gray-200 p-6 hidden md:block">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">目次 (Table of Contents)</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm flex items-center gap-3 transition-colors ${
                    activeSection === section.id 
                      ? 'bg-midnight text-white font-bold' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-midnight'
                  }`}
                >
                  <span className={activeSection === section.id ? 'text-gold' : 'text-gray-400'}>
                    {section.icon}
                  </span>
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-16 space-y-24">
            
            {/* 1. はじめに */}
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-midnight mb-8 pb-4 border-b border-gray-100 heading-serif flex items-center gap-2">
                <span className="text-gold">1.</span> はじめに（事業者の基本姿勢）
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
                <h3 className="font-bold text-midnight text-lg">■ 準拠宣言</h3>
                <p>
                  当事業者は、以下のガイドライン・法令を遵守し、医療データの機密性・完全性・可用性を担保することを宣言します。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 space-y-4">
                  <div>
                    <strong className="text-midnight block mb-1">経済産業省・総務省:</strong>
                    「医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン（第1版）」
                  </div>
                  <div>
                    <strong className="text-midnight block mb-1">厚生労働省:</strong>
                    「医療情報システムの安全管理に関するガイドライン（第6.0版）」
                  </div>
                  <div>
                    <strong className="text-midnight block mb-1">個人情報保護法:</strong>
                    および関連政令・規則
                  </div>
                  <div>
                    <strong className="text-midnight block mb-1">総務省:</strong>
                    「電気通信事業における個人情報等の保護に関するガイドライン」（LINE連携等に適用）
                  </div>
                </div>
              </div>
            </section>

            {/* 2. 責任分界点 */}
            <section id="responsibility" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-midnight mb-8 pb-4 border-b border-gray-100 heading-serif flex items-center gap-2">
                <span className="text-gold">2.</span> 責任分界点
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                本サービスの責任範囲を以下の三層に分界します。代表者（田崎 健斗）は当事業者アプリ・プラットフォーム層について責任を負います。
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-left text-gray-700 border-collapse">
                  <thead>
                    <tr className="bg-midnight text-white">
                      <th className="px-6 py-4 font-bold border-b border-gray-800 rounded-tl-lg w-1/3">主体</th>
                      <th className="px-6 py-4 font-bold border-b border-gray-800 rounded-tr-lg">責任領域と具体的内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-6 py-5 bg-gray-50 font-bold border-r border-gray-100">AWS (Amazon Web Services)</td>
                      <td className="px-6 py-5">インフラ層：物理的保護、基盤維持、サーバーハードウェアの廃棄管理</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-6 py-5 bg-gold/5 font-bold border-r border-gray-100 text-midnight">
                        当事業者 (SystemBook Medical)<br/>
                        <span className="text-xs font-normal text-gray-500">インシデント責任：田崎 健斗</span>
                      </td>
                      <td className="px-6 py-5 bg-gold/5">アプリ・プラットフォーム層：n8n環境維持、Cloudflare設定、データ管理アルゴリズム設計、情報漏えい時の事故対応と報告</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 bg-gray-50 font-bold border-r border-gray-100 rounded-bl-lg">医療機関 (導入クリニック)</td>
                      <td className="px-6 py-5">端末・ID管理層：院内PCのウイルス対策、スタッフのID/PW管理、職員教育、患者への個人情報取扱同意の取得</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Diagram Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center text-gray-500 my-8 Aspect-video min-h-[300px]">
                <Map className="w-12 h-12 mb-4 text-gray-400 opacity-50" />
                <span className="font-bold mb-2">【図解プレースホルダー】</span>
                <span className="text-sm">責任分界点モデル図（3層構造の視覚化）をここに挿入します。</span>
              </div>
            </section>

            {/* 3. 確認事項 */}
            <section id="requirements" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-midnight mb-8 pb-4 border-b border-gray-100 heading-serif flex items-center gap-2">
                <span className="text-gold">3.</span> 医療機関が選定時に確認すべき事項
              </h2>
              
              <div className="space-y-8 text-gray-700 text-sm md:text-base">
                <div>
                  <h3 className="font-bold text-midnight text-lg flex items-center gap-2 mb-3">
                    <Server className="w-5 h-5 text-gold" />
                    (1) 設置場所と適用法
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-midnight">データ保存場所:</strong> 主たる保存先は AWS 東京リージョン (ap-northeast-1) に限定します。</li>
                    <li><strong className="text-midnight">中継:</strong> Cloudflare Tunnelは通信中継のみを行い、米国等の海外サーバーへの永続的なデータ保存は行いません。</li>
                    <li><strong className="text-midnight">国内法:</strong> 日本国内法を遵守し、日本の裁判所を管轄裁判所とします。</li>
                    <li><strong className="text-midnight">国外法対応:</strong> 暗号化 (AES-256) 等により、米国 Cloud Act 等の治外法権的影響を最小化しています。</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-midnight text-lg flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    (2) 安全管理基本方針
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-midnight">目的:</strong> 患者のプライバシー保護と情報の機密性・完全性・可用性の確保。</li>
                    <li><strong className="text-midnight">情報の限定:</strong> オンライン予約・問診・自動化処理に必要な最小限のデータ取得・保持に限定します。</li>
                    <li><strong className="text-midnight">技術的防御:</strong> Cloudflare Tunnel等により、Webサーバーとしてのインバウンドポートを開放せず、外部からの不正アクセスを構造的に遮断します（ゼロトラストアーキテクチャ）。</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-midnight text-lg flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-gold" />
                    (3) 医療情報取扱規程（実務ルール）
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong className="text-midnight">組織:</strong> 代表者（田崎）がCISO（情報セキュリティ責任者）を兼務し、インシデント発生時の指揮を含む一切の責任を負います。</li>
                    <li><strong className="text-midnight">認証:</strong> 当方の全管理画面に対し、ハードウェアトークン等による多要素認証 (MFA) を必須とします。</li>
                    <li><strong className="text-midnight">揮発性:</strong> n8nワークフロー上の中間データ（問診内容等）は、EHRへの転記実行完了後にメモリ・ストレージから即時消去する設定を徹底します。</li>
                    <li><strong className="text-midnight">不変バックアップ:</strong> 監査ログなどの保存必須データは、AWS Backup Vault Lockにより、管理者である当方でさえも法定期間中は削除不能な不変ストレージに保存します。</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. リスク対応 */}
            <section id="risk-management" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-midnight mb-8 pb-4 border-b border-gray-100 heading-serif flex items-center gap-2">
                <span className="text-gold">4.</span> リスク対応および技術的安全管理
              </h2>

              <h3 className="font-bold text-midnight text-lg mb-4">■ サイバー攻撃対策</h3>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                インバウンドポートを完全に遮断する Cloudflare Tunnel による Origin Cloaking を採用し、外部からの侵入を構造的に不可能としています。特定のトンネル経由の認証済み通信のみを許可するゼロトラストネットワークを構築。
              </p>

              <h3 className="font-bold text-midnight text-lg mb-4">■ 主要なリスク対応表（3省庁2GL自己点検準拠）</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm text-left text-gray-700 border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 font-bold border border-gray-200">リスク事象</th>
                      <th className="px-4 py-3 font-bold border border-gray-200 w-24 text-center">対応方針</th>
                      <th className="px-4 py-3 font-bold border border-gray-200">具体的な低減策・技術</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200 font-bold">外部からの不正アクセス</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-blue-600 font-bold">低減</td>
                      <td className="px-4 py-3 border border-gray-200">Cloudflare Tunnel (Origin Cloaking)、強制的な多要素認証 (MFA) の導入</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200 font-bold">ランサムウェアによるデータ暗号化・破壊</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-blue-600 font-bold">低減</td>
                      <td className="px-4 py-3 border border-gray-200">AWS Backup Vault Lock による WORM (Write Once Read Many) 型の不変バックアップ</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200 font-bold">内部犯行によるデータ持ち出し・改ざん</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-blue-600 font-bold">低減</td>
                      <td className="px-4 py-3 border border-gray-200">全DB/ストレージ操作の個人ID紐付け、CloudTrailによる不変監査ログの自動記録システム</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200 font-bold">事業者の不在（1人体制リスク）</td>
                      <td className="px-4 py-3 border border-gray-200 text-center text-orange-500 font-bold">保有/移転</td>
                      <td className="px-4 py-3 border border-gray-200">CISO（田崎）の不測の事態に備えた非常時マニュアルの策定、弁護士・外部提携法人での暗号化された認証情報の所定保管</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Diagram Placeholder */}
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center text-gray-500 min-h-[300px]">
                <ShieldCheck className="w-12 h-12 mb-4 text-gray-400 opacity-50" />
                <span className="font-bold mb-2">【図解プレースホルダー】</span>
                <span className="text-sm">ゼロトラスト・ネットワークアーキテクチャ図（Cloudflare→AWS→オンプレEHR）</span>
              </div>
            </section>

            {/* 5. e文書法 */}
            <section id="compliance" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-midnight mb-8 pb-4 border-b border-gray-100 heading-serif flex items-center gap-2">
                <span className="text-gold">5.</span> 制度上の要求事項への対応（e-文書法準拠）
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-midnight font-bold">真</div>
                  <h3 className="font-bold text-midnight mb-2">真正性 (Authenticity)</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    システム操作、APIコール、バッチ処理のすべてにおいて AWS CloudWatch Logs 等に「誰が・いつ・何をしたか」を自動記録し、不変状態で保存・監視します。
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-midnight font-bold">見</div>
                  <h3 className="font-bold text-midnight mb-2">見読性 (Readability)</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    監査・証跡が必要な際、標準ブラウザを通じて即座に検索・閲覧できるUIボードを提供します。サーバーはマルチAZ構成により高い可用性を確保します。
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-midnight font-bold">保</div>
                  <h3 className="font-bold text-midnight mb-2">保存性 (Preservation)</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    法律に基づく診療録等の保存期間（原則5年以上）に対応するため、自動アーカイブおよびランサムウェアに耐性のある不変バックアップを標準運用します。
                  </p>
                </div>
              </div>
            </section>

            {/* 6. BCP・エグジット */}
            <section id="bcp-exit" className="scroll-mt-32 text-gray-700 text-sm md:text-base">
              <h2 className="text-2xl font-bold text-midnight mb-8 pb-4 border-b border-gray-100 heading-serif flex items-center gap-2">
                <span className="text-gold">6.</span> BCP（事業継続計画）とエグジット戦略
              </h2>
              <p className="mb-4">
                一人体制でありながら、極めて可用性の高いシステムを提供するための事業継続・終了に関する方針です。
              </p>
              <div className="space-y-6">
                <div className="bg-white border-l-4 border-midnight pl-4 py-2 shadow-sm">
                  <h3 className="font-bold text-midnight mb-2">事業継続計画 (BCP)</h3>
                  <p className="text-sm text-gray-600">
                    SaaS型クラウドインフラを活用し、ハードウェア障害によるシステム停止を自動復旧させるInfrastructure as Code (IaC) を採用しています。<br/>
                    代表者の不測の事態においては、事前に取り決めた外部提携先のIT法人が一時的にシステム管理権限（非常時用AWS IAM）を引き継ぎ、診療業務のインフラを維持する仕組みを構築しています。
                  </p>
                </div>
                <div className="bg-white border-l-4 border-gold pl-4 py-2 shadow-sm">
                  <h3 className="font-bold text-midnight mb-2">エグジット（移行・終了）戦略</h3>
                  <p className="text-sm text-gray-600">
                    万が一当方のサービス提供を終了する場合、または貴院が他社システムへ乗換える場合、以下の措置を講じます：<br/>
                    1. 最低6ヶ月前の事前通知と現状維持の確約。<br/>
                    2. システム内の設定データ（n8nワークフローJSON等）および蓄積ログデータのCSV/JSON形式での無償提供（ベンダーロックインの排除）。<br/>
                    3. 乗換え後の残存データ・バックアップリソースの完全かつ不可逆的な消去（消去証明書の発行）。
                  </p>
                </div>
              </div>
            </section>

            {/* 7. ロードマップ */}
            <section id="roadmap" className="scroll-mt-32 border-t border-gray-100 pt-16 mt-16">
              <h2 className="text-2xl font-bold text-midnight mb-8 heading-serif flex items-center gap-2">
                <span className="text-gold">7.</span> 今後追加予定の機能と方針
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-midnight text-lg mb-3">
                    (1) 診察室音声AI・紹介状作成支援
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    <strong className="text-midnight">準拠方針:</strong> AIはあくまで「草稿」を生成する支援ツールにとどまり、医学的判断や最終診断は一切行いません。<br /><br />
                    <strong className="text-midnight">データ保護:</strong> 音声データはテキスト化処理完了後に即時削除し、物理ディスクに残しません。LLM連携には、学習利用オプトアウト（Data Privacy Addendum定義）が明記されたセキュアな法人向けAPIエンドポイントのみを使用します。
                  </p>
                </div>
                <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-midnight text-lg mb-3">
                    (2) クラウド電子カルテ（EHR）連携
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    現在のアーキテクチャはRPAライクに外部から限定的に接続・稼働しており、電子カルテDBへの直接の双方向データ同期（フル接続）はありません。<br /><br />
                    将来的なAPI経由での完全同期の実装時は、各EHRベンダーのセキュリティ仕様に準拠するため、貴院との個別の合意を交わし、本ホワイトペーパーの改訂・再承認を実施します。
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
