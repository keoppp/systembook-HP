'use client';

import { ArrowRight, Check, Sparkles } from 'lucide-react';

const PLANS = [
  {
    name: 'HP作成',
    price: '20',
    suffix: '万円',
    subtext: '（初期費用のみ）',
    features: ['オリジナルデザイン', 'スマホ最適化対応', 'お知らせ更新機能', '基本的なSEO対策'],
    recommend: false
  },
  {
    name: 'HP＋予約システム',
    price: '30',
    suffix: '万円',
    subtext: '（初期費用のみ）',
    features: ['HP作成プランの全内容', '24時間Web予約機能', 'Web問診システム', 'リマインド連絡'],
    recommend: true
  },
  {
    name: '業務自動化',
    price: '20〜100',
    suffix: '万円',
    subtext: '※ご要望・内容に応じて変動',
    features: ['HP・予約プランの機能', 'FAXや紙のデータ化', '事務ワークフロー構築', 'その他の課題解決'],
    recommend: false
  }
];

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
            クリニックの課題や必要な機能に合わせて、3つのプランをご用意しています。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PLANS.map((plan, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-xl overflow-hidden relative flex flex-col ${plan.recommend ? 'border-2 border-gold scale-105 z-10' : 'border border-gray-100'}`}>
              {plan.recommend && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-white text-center py-1.5 text-xs font-bold tracking-widest">
                  RECOMMEND
                </div>
              )}
              <div className={`p-6 lg:p-8 flex-1 ${plan.recommend ? 'pt-12' : ''}`}>
                <div className={`text-sm font-bold tracking-widest uppercase mb-2 ${plan.recommend ? 'text-gold' : 'text-gray-400'}`}>Plan {['A', 'B', 'C'][idx]}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-midnight mb-4 heading-serif whitespace-nowrap">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl lg:text-4xl font-black text-midnight tracking-tight">{plan.price}</span>
                  <span className="text-base lg:text-lg text-gray-600">{plan.suffix}</span>
                </div>
                <div className="text-xs lg:text-sm text-gray-500 mb-8">
                  {plan.subtext}
                </div>
                <div className="space-y-3">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 lg:gap-3">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-sm lg:text-base text-gray-700 leading-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 lg:px-8 pb-8">
                <a href="#contact" className={`w-full flex items-center justify-center gap-2 font-bold py-4 rounded-sm transition-all group ${
                  plan.recommend 
                    ? 'bg-midnight hover:bg-midnight-light text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-midnight'
                }`}>
                  <span className="text-sm lg:text-base">デモで詳しく聞く</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
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
