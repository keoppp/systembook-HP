import { ShieldCheck, ArrowRight, Server, Stethoscope, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-midnight overflow-hidden min-h-[90vh] flex items-center pt-20">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-gold to-transparent mix-blend-overlay"></div>
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C20,60 50,40 100,0 L100,100 Z" fill="currentColor" className="text-platinum"></path>
        </svg>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold text-gold tracking-widest uppercase">医療情報ガイドライン完全準拠</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 heading-serif">
            受付・事務の時間を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-platinum">診療に返す。</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-platinum/90 leading-relaxed font-light mb-12 max-w-2xl border-l-2 border-gold pl-6">
            電話対応・問診・予約管理を自動化。<br className="hidden md:block" />
            電子カルテはそのままで導入できます。
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white text-lg font-bold px-8 py-5 rounded-sm transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4A9EFF]/20 flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg"
            >
              30分 無料Zoomデモを予約する
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="#security"
              className="text-platinum/80 hover:text-white text-sm font-bold flex items-center justify-center sm:justify-start gap-2 transition-colors px-4 py-3"
            >
              <FileText className="w-4 h-4" />
              セキュリティホワイトペーパーを無料ダウンロード
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-platinum/10 bg-white/5">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-platinum/90 font-bold">3省庁2ガイドライン準拠</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-platinum/10 bg-white/5">
              <Server className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-platinum/90 font-bold">AWS東京リージョン<br className="sm:hidden" /> セルフホスト</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-platinum/10 bg-white/5">
              <Stethoscope className="w-5 h-5 text-gold shrink-0" />
              <span className="text-xs text-platinum/90 font-bold">医学科在学中の代表が設計</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
