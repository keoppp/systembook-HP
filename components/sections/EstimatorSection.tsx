'use client';

import { ArrowRight, Check, Sparkles } from 'lucide-react';

const PLAN_A = {
  name: 'スタンダード',
  price: '20〜50',
  monthly: '2〜3',
  features: ['予約自動化', 'Web問診', 'リマインド連絡', '受付フロー構築'],
};

const PLAN_B = {
  name: 'プレミアム',
  price: '50〜80',
  monthly: '3〜5',
  features: ['スタンダードの全内容', '事務ワークフロー高度化', '優先サポート', 'カスタムAPI連携'],
};

export default function EstimatorSection() {
  return (
    <section id="estimate" className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0C8D4 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 heading-serif">
            料金プラン
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-platinum/80 leading-relaxed max-w-2xl mx-auto">
            クリニックの規模と必要な機能に合わせて、2つのプランをご用意しています。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Plan A */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">Plan A</div>
              <h3 className="text-2xl font-bold text-midnight mb-4 heading-serif">{PLAN_A.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-midnight">{PLAN_A.price}</span>
                <span className="text-lg text-gray-600">万円</span>
                <span className="text-sm text-gray-400 ml-1">（初期）</span>
              </div>
              <div className="text-sm text-gray-500 mb-8">
                ＋ 月額 {PLAN_A.monthly}万円
              </div>
              <div className="space-y-3">
                {PLAN_A.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-midnight font-bold py-4 rounded-sm transition-all group">
                Zoomデモで詳しく聞く
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Plan B */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gold relative">
            <div className="absolute top-0 left-0 right-0 bg-gold text-white text-center py-1.5 text-xs font-bold tracking-widest">
              RECOMMEND
            </div>
            <div className="p-8 md:p-10 pt-12">
              <div className="text-sm font-bold text-gold tracking-widest uppercase mb-2">Plan B</div>
              <h3 className="text-2xl font-bold text-midnight mb-4 heading-serif">{PLAN_B.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-midnight">{PLAN_B.price}</span>
                <span className="text-lg text-gray-600">万円</span>
                <span className="text-sm text-gray-400 ml-1">（初期）</span>
              </div>
              <div className="text-sm text-gray-500 mb-8">
                ＋ 月額 {PLAN_B.monthly}万円
              </div>
              <div className="space-y-3">
                {PLAN_B.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-8 pb-8">
              <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-midnight hover:bg-midnight-light text-white font-bold py-4 rounded-sm transition-all group shadow-lg">
                Zoomデモで詳しく聞く
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Early Adopter Benefit */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#4A9EFF]/10 to-gold/10 border border-[#4A9EFF]/30 rounded-2xl p-8 md:p-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#4A9EFF]" />
            <span className="text-[#4A9EFF] font-bold tracking-widest text-sm">先行導入特典</span>
          </div>
          <p className="text-white leading-relaxed md:text-lg">
            現在ご契約のクリニックは、2026年度リリース予定の<br className="hidden md:block" />
            <strong className="text-gold">音声→紹介状AI自動生成・電子カルテAPI連携機能</strong>を<br className="hidden md:block" />
            通常価格より<strong className="text-[#4A9EFF]">30%引き</strong>でご利用いただけます。
          </p>
        </div>

        {/* Why cheaper */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-24 text-center">
          <h4 className="inline-block bg-gold/10 text-gold font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-gold/20">電子カルテには触りません</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">なぜ相場より安くできるのか</h3>
          <div className="bg-midnight-light/50 border border-gray-800 p-8 rounded-2xl">
            <p className="text-platinum/90 text-sm md:text-base leading-relaxed text-left md:text-center">
              電子カルテ本体の改造には数千万円かかることもありますが、僕たちはそこには手を出しません。<br className="hidden md:block"/>
              自社サーバーを持たない<strong>クラウド構成（Vercel/Cloudflare）</strong>と、開発の手間を大幅に減らせる<strong>自動化ツール（n8n）</strong>を使って、<br className="hidden md:block"/>
              FAXの処理や予約の転記、患者さんへの通知といった「周りの手作業」だけを自動化します。<br className="hidden md:block"/><br className="hidden md:block"/>
              このやり方なら、医療情報のセキュリティガイドラインもきちんと守りながら、余計なコストを省くことができます。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
