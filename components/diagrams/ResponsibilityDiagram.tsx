import { Server, Grid, MonitorSmartphone, Shield, AlertTriangle } from 'lucide-react';

export default function ResponsibilityDiagram() {
  return (
    <div className="w-full max-w-3xl mx-auto my-12 bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm relative overflow-hidden">
      
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-platinum) 1px, transparent 1px), linear-gradient(90deg, var(--color-platinum) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="relative z-10 flex flex-col gap-6">
        
        {/* Layer 3: Clinic (Top) */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm relative">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
            <MonitorSmartphone className="w-8 h-8 text-gray-500" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Layer 3 / 医療機関</div>
            <h4 className="text-lg font-bold text-midnight mb-2">端末・ID管理層</h4>
            <p className="text-sm text-gray-500">
              各クライアントPCのウイルス対策、スタッフID・パスワードの適切管理、職員教育、および患者情報の入力・取り扱いにおける一次責任。
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center w-24 border-l border-gray-100 pl-4 shrink-0">
            <Shield className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-xs font-bold text-gray-500 text-center">院内<br/>管理責任</span>
          </div>
        </div>
        
        {/* Connector Line */}
        <div className="flex justify-center -my-3 relative z-20">
          <div className="w-1 h-8 bg-gradient-to-b from-gray-200 to-gold"></div>
        </div>

        {/* Layer 2: SystemBook Medical (Middle) */}
        <div className="bg-gradient-to-r from-midnight to-midnight-light border-2 border-gold/50 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-gold/10 relative transform scale-[1.02]">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center shrink-0 border border-gold/50">
            <Grid className="w-8 h-8 text-gold" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-bold text-gold tracking-widest uppercase mb-1">Layer 2 / SystemBook Medical</div>
            <h4 className="text-lg font-bold text-white mb-2">アプリ・プラットフォーム層</h4>
            <p className="text-sm text-platinum/80">
              n8nによる自動化ロジックの設計・保守、通信のトンネル制御（Cloudflare）、AI・APIデータ保護アルゴリズム、インシデント時の事象切り分けと報告。
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center w-24 border-l border-gray-700 pl-4 shrink-0">
            <AlertTriangle className="w-5 h-5 text-gold mb-1" />
            <span className="text-xs font-bold text-gold text-center">当方<br/>管轄範囲</span>
            <span className="text-[10px] text-platinum/50 mt-1">CISO: 田崎</span>
          </div>
        </div>

        {/* Connector Line */}
        <div className="flex justify-center -my-3 relative z-20">
          <div className="w-1 h-8 bg-gradient-to-b from-gold to-gray-300"></div>
        </div>

        {/* Layer 1: AWS (Bottom) */}
        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm relative">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shrink-0 border border-gray-200">
            <Server className="w-8 h-8 text-gray-500" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-1">Layer 1 / AWS (Amazon Web Services)</div>
            <h4 className="text-lg font-bold text-midnight mb-2">インフラ・物理層</h4>
            <p className="text-sm text-gray-500">
              東京リージョン（ap-northeast-1）データセンターの物理的セキュリティ確保、ハードウェアの冗長化・維持管理、障害復旧基盤の提供。
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center w-24 border-l border-gray-100 pl-4 shrink-0">
            <Server className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-xs font-bold text-gray-500 text-center">クラウド<br/>基盤要件</span>
          </div>
        </div>

      </div>
    </div>
  );
}
