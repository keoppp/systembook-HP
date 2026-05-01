'use client';

import { useState } from 'react';
import { ArrowRight, Check, Sparkles, Calculator } from 'lucide-react';

export default function EstimatorSection() {
  const [hasHp, setHasHp] = useState(false);
  const [hasReservation, setHasReservation] = useState(false);
  const [automationValue, setAutomationValue] = useState(0); // 0, or 20-100

  const basePrice = (hasHp ? 20 : 0) + (hasReservation ? 10 : 0);
  const totalPrice = basePrice + automationValue;

  return (
    <section id="estimate" className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0C8D4 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 heading-serif">
            お見積もりシミュレーター
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-platinum/80 leading-relaxed max-w-2xl mx-auto">
            クリニックの課題に合わせて必要なモジュールを選択してください。<br/>
            リアルタイムで概算のお見積もりが確認できます。
          </p>
        </div>

        {/* Simulator Widget */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Left: Controls */}
            <div className="md:col-span-3 p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <h3 className="text-lg font-bold text-midnight mb-6 flex items-center gap-2">
                1. 導入モジュールの選択
              </h3>
              
              <div className="space-y-4">
                {/* HP Button */}
                <div className="flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer select-none hover:shadow-sm"
                     onClick={() => setHasHp(!hasHp)}
                     style={{ borderColor: hasHp ? '#C1A476' : '#e5e7eb', backgroundColor: hasHp ? '#fefafa' : '#ffffff' }}>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border shrink-0 transition-colors ${hasHp ? 'bg-[#C1A476] border-[#C1A476]' : 'border-gray-300'}`}>
                      {hasHp && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm md:text-base">HP作成</div>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-0.5">オリジナルデザイン・スマホ対応</div>
                    </div>
                  </div>
                  <div className="font-bold text-midnight whitespace-nowrap">20万円</div>
                </div>

                {/* Reservation Button */}
                <div className="flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer select-none hover:shadow-sm"
                     onClick={() => setHasReservation(!hasReservation)}
                     style={{ borderColor: hasReservation ? '#C1A476' : '#e5e7eb', backgroundColor: hasReservation ? '#fefafa' : '#ffffff' }}>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border shrink-0 transition-colors ${hasReservation ? 'bg-[#C1A476] border-[#C1A476]' : 'border-gray-300'}`}>
                      {hasReservation && <Check className="w-4 h-4 text-white" />}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm md:text-base">Web予約システム</div>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-0.5">24時間受付・Web問診連携など</div>
                    </div>
                  </div>
                  <div className="font-bold text-midnight whitespace-nowrap">+10万円</div>
                </div>

                {/* Automation Slider */}
                <div className="p-5 md:p-6 rounded-xl border-2 border-gray-100 bg-gray-50 mt-6 shadow-inner">
                  <div className="flex items-start md:items-center justify-between mb-6 flex-col md:flex-row gap-2">
                    <div>
                      <div className="font-bold text-gray-800 flex items-center gap-2 text-sm md:text-base">
                        <Sparkles className="w-4 h-4 text-[#C1A476]" />
                        業務自動化モジュール
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-500 mt-1">
                        ※解決したい課題の数と複雑さに応じて変動します
                      </div>
                    </div>
                    <div className="text-xl font-bold text-midnight bg-white px-3 py-1 rounded border border-gray-200">
                      {automationValue === 0 ? '0万円' : `+${automationValue}万円`}
                    </div>
                  </div>

                  <div className="px-1 md:px-3 pb-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      step="10" 
                      value={automationValue}
                      onChange={(e) => {
                        let val = parseInt(e.target.value);
                        // Jump from 0 to 20 since minimum automation is 20
                        if (val > 0 && val < 20) val = 20;
                        setAutomationValue(val);
                      }}
                      className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C1A476]"
                    />
                    <div className="flex justify-between text-[10px] md:text-xs text-gray-400 font-bold mt-4">
                      <span className={automationValue === 0 ? "text-midnight" : ""}>不要 (0)</span>
                      <span className={automationValue === 20 ? "text-[#C1A476]" : ""}>20万</span>
                      <span className={automationValue === 50 ? "text-[#C1A476]" : ""}>50万</span>
                      <span className={automationValue === 100 ? "text-[#C1A476]" : ""}>100万</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Result */}
            <div className="md:col-span-2 bg-midnight-light p-6 md:p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <h3 className="text-sm font-bold tracking-widest uppercase text-gold mb-6 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Estimated Total
              </h3>
              
              <div className="mb-2 text-platinum/80 text-sm">概算のお見積もり（初期費用）</div>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                  {totalPrice}
                </span>
                <span className="text-xl text-platinum/60 font-bold mb-1">万円</span>
              </div>

              <div className="space-y-4 mb-8 flex-1 bg-midnight p-5 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between text-sm border-b border-gray-700/50 pb-3">
                  <span className="text-platinum/70 flex items-center gap-1.5"><Check className="w-3 h-3 text-gold opacity-50"/> HP作成</span>
                  <span className="text-white font-bold">{hasHp ? '20万円' : '0万円'}</span>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-gray-700/50 pb-3">
                  <span className="text-platinum/70 flex items-center gap-1.5"><Check className="w-3 h-3 text-gold opacity-50"/> 予約システム</span>
                  <span className="text-white font-bold">{hasReservation ? '10万円' : '0万円'}</span>
                </div>
                <div className="flex items-center justify-between text-sm pb-1">
                  <span className="text-platinum/70 flex items-center gap-1.5"><Check className="w-3 h-3 text-gold opacity-50"/> 業務自動化</span>
                  <span className="text-white font-bold">{automationValue}万円</span>
                </div>
              </div>

              <a href="#contact" className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-midnight font-bold py-4 rounded-xl transition-all group shadow-lg">
                この内容で相談する
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
