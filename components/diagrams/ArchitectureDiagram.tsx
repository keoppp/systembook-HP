import { Globe, Building2, Server, Lock, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function ArchitectureDiagram() {
  return (
    <div className="w-full mx-auto my-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-8 overflow-hidden">
      
      <div className="text-center mb-8">
        <h4 className="font-bold text-midnight text-lg heading-serif mb-2">ゼロトラスト・ネットワークアーキテクチャ</h4>
        <p className="text-sm text-gray-500">外部からの不正侵入を構造的に遮断するインフラ設計（Origin Cloaking）</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-2 relative">
        
        {/* Background Connection Path (Desktop) */}
        <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-1 bg-gray-200 z-0"></div>

        {/* 1. External World (Patients / Third Party APIs) */}
        <div className="w-full lg:w-48 flex flex-col items-center relative z-10 group">
          <div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
            <Globe className="w-8 h-8 text-gray-500" />
          </div>
          <span className="font-bold text-midnight text-sm">インターネット</span>
          <span className="text-xs text-gray-500 text-center mt-1">患者（Web予約・問診）<br/>各種外部API</span>
        </div>

        {/* Arrow Mobile / Line Desktop */}
        <div className="lg:hidden w-1 h-8 bg-gray-200"></div>
        <div className="hidden lg:flex w-16 items-center justify-center relative z-10">
          <div className="w-full h-1 bg-gold/30 relative overflow-hidden">
            <div className="w-1/2 h-full bg-gold animate-[slideRight_1.5s_linear_infinite]"></div>
          </div>
        </div>

        {/* 2. Cloudflare Tunnel (Origin Cloaking) */}
        <div className="w-full lg:w-64 flex flex-col items-center relative z-10">
          <div className="absolute -top-3 px-3 py-1 bg-midnight text-white text-[10px] font-bold rounded-full z-20 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-gold" />
            インバウンド遮断
          </div>
          <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-300 rounded-2xl p-4 flex flex-col items-center shadow-lg relative h-36 justify-center">
            <Lock className="w-8 h-8 text-gray-600 mb-2" />
            <span className="font-bold text-midnight text-sm">Cloudflare Tunnel</span>
            <span className="text-xs text-gray-500 text-center mt-1">すべての外部リクエストを<br/>認証付きトンネルで検査</span>
          </div>
        </div>

        {/* Arrow Mobile / Line Desktop */}
        <div className="lg:hidden w-1 h-8 bg-gray-200"></div>
        <div className="hidden lg:flex w-16 items-center justify-center relative z-10">
          <div className="w-full h-1 bg-gold relative overflow-hidden">
            <div className="w-1/2 h-full bg-white opacity-50 animate-[slideRight_1s_linear_infinite]"></div>
          </div>
        </div>

        {/* 3. AWS Engine (SystemBook) */}
        <div className="w-full lg:w-64 flex flex-col items-center relative z-10 group">
          <div className="absolute -inset-2 bg-gold/20 rounded-3xl blur-md group-hover:bg-gold/30 transition-colors z-0"></div>
          <div className="w-full bg-midnight border-2 border-gold rounded-2xl p-4 flex flex-col items-center shadow-xl relative z-10 h-36 justify-center">
            <Cpu className="w-8 h-8 text-gold mb-2" />
            <span className="font-bold text-white text-sm">AWS 東京リージョン</span>
            <span className="text-[10px] text-platinum/80 text-center mt-1 leading-tight">
              n8n自動化サーバー<br/>
              揮発性メモリ処理<br/>
              WORM領域バックアップ
            </span>
          </div>
        </div>

        {/* Arrow Mobile / Line Desktop */}
        <div className="lg:hidden w-1 h-8 bg-gray-200"></div>
        <div className="hidden lg:flex w-16 items-center justify-center relative z-10">
          <div className="w-full h-1 bg-gold/30 relative overflow-hidden">
            <div className="w-1/2 h-full bg-gold animate-[slideRight_1.5s_linear_infinite]"></div>
          </div>
        </div>

        {/* 4. Clinic On-Premise EHR */}
        <div className="w-full lg:w-48 flex flex-col items-center relative z-10 group">
          <div className="w-20 h-20 bg-gray-50 border-2 border-midnight-light rounded-2xl flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-midnight" />
          </div>
          <span className="font-bold text-midnight text-sm">医療機関ネットワーク</span>
          <span className="text-xs text-gray-500 text-center mt-1">院内電子カルテ<br/>(閉域網 / クラウド)</span>
        </div>

      </div>

      {/* Security Note */}
      <div className="mt-8 bg-gold/5 border border-gold/20 p-4 rounded-lg flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <p className="text-xs text-gray-600 leading-relaxed">
          <strong>ゼロトラスト・アーキテクチャの要点：</strong> AWS上のサーバーはパブリックIPからのアクセス（インバウンド通信）をすべて拒否（Drop）するように設定されており、Cloudflare Tunnelとの内部接続セッションからのみデータを受け取ります。これにより、未知のポートスキャンや直接的なサイバー攻撃を根本から無効化しています。
        </p>
      </div>

    </div>
  );
}
