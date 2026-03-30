import { ShieldCheck, ArrowRight } from 'lucide-react';

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
            今のやり方は<br />
            変えなくて<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-platinum">大丈夫です。</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-platinum/90 leading-relaxed font-light mb-12 max-w-2xl border-l-2 border-gold pl-6">
            電子カルテはそのまま使えます。<br className="hidden md:block" />
            まわりの事務作業だけ、静かに片付けます。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#estimate" 
              className="bg-gold hover:bg-gold-hover text-white text-lg font-bold px-8 py-5 rounded-sm transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/20 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              5秒で完了。AI即時見積もり
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="text-sm text-platinum/60 flex items-center justify-center sm:justify-start">
              ✓ 登録不要 <span className="mx-3 opacity-30">|</span> ✓ 匿名で算出可能
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
