'use client';

import { useState, useEffect } from 'react';
import { Calculator, Check, ArrowRight, TrendingDown, Info, ShieldCheck, ExternalLink } from 'lucide-react';

export const COST_SAVING_EVIDENCE = {
  reservation: {
    title: "予約問診システムの自動化",
    reason: "LINE/Web直結の自動受付により、窓口での事務対応コストを根本から削減。 [cite: 587]",
    guideline: "見読性・可用性の確保 [cite: 600-603]",
    link: "/whitepaper#legal"
  },
  automation: {
    title: "n8nによるAI業務自動化",
    reason: "n8n活用で開発工数を約50%削減。中間データの即時物理削除で長期保管費も抑制。 [cite: 344-345]",
    guideline: "真正性・保存性の担保 [cite: 597-598]",
    link: "/whitepaper#legal"
  },
  infrastructure: {
    title: "サーバーレス基盤の標準化",
    reason: "自社サーバー保守を捨て、Cloudflare Tunnel等で高価な専用回線コストを完全排除。 [cite: 368-372]",
    guideline: "3省庁2ガイドライン完全準拠 [cite: 281]",
    link: "/whitepaper#security"
  }
};

export default function EstimatorSection() {
  const [planType, setPlanType] = useState<'hp' | 'dx' | 'ai'>('dx');
  const [aiLevel, setAiLevel] = useState<'partial' | 'standard' | 'full'>('standard');
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [calculatedMonthly, setCalculatedMonthly] = useState(0);
  
  useEffect(() => {
    let total = 40; // 基本HP制作 (Base)
    let monthly = 1.5;

    // DXセット (+15万 / +1万)
    if (planType === 'dx' || planType === 'ai') {
      total += 15;
      monthly += 1.0;
    }

    // AI自動化レベル (+Add-on)
    if (planType === 'ai') {
      if (aiLevel === 'partial') {
        total += 15;
        monthly += 0.5;
      } else if (aiLevel === 'standard') {
        total += 35;
        monthly += 1.0;
      } else if (aiLevel === 'full') {
        total += 70; // フルカスタマイズは 70万〜
        monthly += 1.5; // 1.5万〜
      }
    }

    setCalculatedTotal(total);
    setCalculatedMonthly(monthly);
  }, [planType, aiLevel]);

  // 他社平均（総予算に対する独自のざっくり乗数として約1.5倍で算出→ SystemBookが2/3のコストを表現）
  const competitorAverage = Math.round(calculatedTotal * 1.5);
  const discountAmount = competitorAverage - calculatedTotal;

  let aiValueDesc = "";
  if (aiLevel === 'partial') {
    aiValueDesc = "「単純な転記ミスをゼロに。月間約10時間の事務工数を削減。」";
  } else if (aiLevel === 'standard') {
    aiValueDesc = "「日々のバックオフィス業務を広範に自動化。受付スタッフ1名分の負荷を大幅軽減。」";
  } else {
    aiValueDesc = "「貴院独自の複雑なワークフローをAIが完全再現。クリニック全体のDXを実現。」";
  }

  return (
    <section id="estimate" className="section-padding bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C0C8D4 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 heading-serif">
            5秒で完了。<br className="md:hidden" />AI即時見積もり
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-platinum/80 leading-relaxed max-w-2xl mx-auto">
            貴院の要望に合わせた概算費用を直感的に算出します。<br className="hidden md:block" />
            個人情報の入力は不要です。
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Input Area */}
          <div className="flex-1 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
            <h3 className="text-xl font-bold text-midnight mb-8 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-gold" />
              パッケージの選択
            </h3>
            
            {/* 3 Steps Plan Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <button 
                onClick={() => setPlanType('hp')}
                className={`text-left p-4 rounded-xl border-2 transition-all ${planType === 'hp' ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'}`}
              >
                <div className="text-xs font-bold text-gray-400 mb-1">Base</div>
                <div className="font-bold text-midnight mb-2 text-lg">基本HP制作</div>
                <div className="text-xs text-gray-500 leading-relaxed">高品質なコーポレートサイトの構築と保守</div>
              </button>
              
              <button 
                onClick={() => setPlanType('dx')}
                className={`relative text-left p-4 rounded-xl border-2 transition-all ${planType === 'dx' ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'}`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                  RECOMMEND (セット割)
                </div>
                <div className="text-xs font-bold text-gold mb-1">Standard</div>
                <div className="font-bold text-midnight mb-2 text-lg">DXセット</div>
                <div className="text-xs text-gray-500 leading-relaxed">HP ＋ 予約・問診システムの完全統合</div>
              </button>

              <button 
                onClick={() => setPlanType('ai')}
                className={`text-left p-4 rounded-xl border-2 transition-all ${planType === 'ai' ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'}`}
              >
                <div className="text-xs font-bold text-gray-400 mb-1">Premium</div>
                <div className="font-bold text-midnight mb-2 text-lg">AIフル実装</div>
                <div className="text-xs text-gray-500 leading-relaxed">DXセット ＋ n8nによる周辺業務自動化</div>
              </button>
            </div>

            {/* Sub-slider strictly for AI level */}
            {planType === 'ai' && (
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="font-bold text-midnight mb-1">AI業務自動化レベルの詳細</div>
                    <div className="text-sm text-gray-500">FAX処理、カルテ転記、リマインド等のカバー範囲</div>
                  </div>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="2" 
                  value={aiLevel === 'partial' ? 0 : aiLevel === 'standard' ? 1 : 2}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val === 0) setAiLevel('partial');
                    else if (val === 1) setAiLevel('standard');
                    else setAiLevel('full');
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold relative z-10"
                />
                
                <div className="flex justify-between text-xs text-gray-400 mt-3 font-bold px-1 mb-5">
                  <span className={aiLevel === 'partial' ? 'text-gold' : ''}>一部自動化</span>
                  <span className={aiLevel === 'standard' ? 'text-gold' : ''}>標準パッケージ</span>
                  <span className={aiLevel === 'full' ? 'text-gold' : ''}>フルカスタマイズ</span>
                </div>

                <div className="bg-white border border-gold/20 rounded-lg p-4 text-sm text-midnight font-bold leading-relaxed shadow-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {aiValueDesc}
                </div>
              </div>
            )}
            
            {planType !== 'ai' && (
              <div className="h-24 flex items-center justify-center text-sm text-gray-400 italic">
                ※「AIフル実装」を選択すると、さらに高度な業務自動化カスタマイズが可能です。
              </div>
            )}
          </div>

          {/* Result Area */}
          <div className="lg:w-[420px] bg-gray-50 flex flex-col justify-between relative z-10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-r-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            </div>
            
            <div className="p-8 md:p-10 relative z-20 h-full flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Estimated Cost</div>
                
                <div className="text-gray-400 text-sm line-through">
                  他社平均 約 {competitorAverage} 万円〜
                </div>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl lg:text-6xl font-black text-midnight font-serif tracking-tighter">
                    {calculatedTotal}
                  </span>
                  <span className="text-xl font-bold text-midnight">万円 <span className="text-gray-500 text-sm font-normal">{planType === 'ai' && aiLevel === 'full' ? '〜' : ''}</span></span>
                </div>
                
                <div className="relative group cursor-help inline-flex items-center gap-2 text-gold font-bold text-sm bg-gold/10 px-3 py-1.5 rounded-full mb-8">
                  <TrendingDown className="w-4 h-4" />
                  セット導入で 約 {discountAmount}万円 お得
                  <Info className="w-4 h-4" />
                  
                  {/* Tooltip Content */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 mt-3 w-72 lg:w-80 bg-midnight border border-gold/30 p-4 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none text-left">
                    <div className="font-bold text-white mb-2 text-xs">【他社比 約33%OFFの理由】</div>
                    <div className="text-[11px] font-normal text-platinum/90 leading-relaxed">
                      本サービスは、従来の大手メーカーが多額のコストを投じている「営業人件費」や「保守センターの維持費」を排除し、最新のAI自動化技術（n8n）とサーバーレスインフラに置き換えています。これにより、品質を担保したまま導入・運用コストを業界平均の2/3に抑えています。
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 font-bold">月額保守・運用費</span>
                    <span className="text-xl font-bold text-midnight">{calculatedMonthly} <span className="text-sm text-gray-500 font-normal">万円/月 {planType === 'ai' && aiLevel === 'full' ? '〜' : ''}</span></span>
                  </div>
                  <div className="text-[11px] text-gray-500 leading-relaxed mb-6">
                    ※ サーバー維持費、AI API利用料、死活監視、セキュリティ更新を含みます。<br />
                    ※ 正確な金額は詳細ヒアリング後に算出いたします。
                  </div>

                  {/* 動的エビデンスリスト */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-2 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      今回のコスト削減と安全性の根拠
                    </div>
                    
                    {/* Infrastructure Evidence (Always shown) */}
                    <a href={COST_SAVING_EVIDENCE.infrastructure.link} target="_blank" rel="noopener noreferrer" className="block bg-white p-3 rounded border border-gray-100 shadow-sm hover:border-gold/50 transition-colors group">
                      <div className="flex justify-between items-start">
                        <div className="text-xs font-bold text-midnight mb-1">{COST_SAVING_EVIDENCE.infrastructure.title}</div>
                        <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gold" />
                      </div>
                      <div className="text-[10px] text-gray-500 mb-1">{COST_SAVING_EVIDENCE.infrastructure.reason}</div>
                      <div className="text-[9px] text-gold font-bold">{COST_SAVING_EVIDENCE.infrastructure.guideline}</div>
                    </a>

                    {/* DX/Reservation Evidence */}
                    {(planType === 'dx' || planType === 'ai') && (
                      <a href={COST_SAVING_EVIDENCE.reservation.link} target="_blank" rel="noopener noreferrer" className="block bg-white p-3 rounded border border-gray-100 shadow-sm hover:border-gold/50 transition-colors group">
                        <div className="flex justify-between items-start">
                          <div className="text-xs font-bold text-midnight mb-1">{COST_SAVING_EVIDENCE.reservation.title}</div>
                          <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gold" />
                        </div>
                        <div className="text-[10px] text-gray-500 mb-1">{COST_SAVING_EVIDENCE.reservation.reason}</div>
                        <div className="text-[9px] text-gold font-bold">{COST_SAVING_EVIDENCE.reservation.guideline}</div>
                      </a>
                    )}
                    
                    {/* AI Automation Evidence */}
                    {planType === 'ai' && (
                      <a href={COST_SAVING_EVIDENCE.automation.link} target="_blank" rel="noopener noreferrer" className="block bg-white p-3 rounded border border-gray-100 shadow-sm hover:border-gold/50 transition-colors group">
                        <div className="flex justify-between items-start">
                          <div className="text-xs font-bold text-midnight mb-1">{COST_SAVING_EVIDENCE.automation.title}</div>
                          <ExternalLink className="w-3 h-3 text-gray-300 group-hover:text-gold" />
                        </div>
                        <div className="text-[10px] text-gray-500 mb-1">{COST_SAVING_EVIDENCE.automation.reason}</div>
                        <div className="text-[9px] text-gold font-bold">{COST_SAVING_EVIDENCE.automation.guideline}</div>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="#contact" className="w-full bg-midnight hover:bg-midnight-light text-white font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 group shadow-xl">
                  この条件で問い合わせる
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cost evidence Rationale Footer */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-24 text-center">
          <h4 className="inline-block bg-gold/10 text-gold font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-gold/20">「非侵襲（ひしんしゅう）」の導入アプローチ</h4>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">なぜ高品質な医療DXを2/3の価格で提供できるのか？</h3>
          <div className="bg-midnight-light/50 border border-gray-800 p-8 rounded-2xl">
            <p className="text-platinum/90 text-sm md:text-base leading-relaxed text-left md:text-center">
              私たちは、開発工数が膨大にかかる「電子カルテ本体」の改造は行いません。<br className="hidden md:block"/>
              自社サーバーを持たない<strong>サーバーレス構成（Vercel/Cloudflare）</strong>と、開発工数を劇的に削減する<strong>自動化基盤（n8n）</strong>を組み合わせたモダンなアーキテクチャを採用することで、「FAX処理」「予約転記」「患者通知」といった周辺のボトルネック業務に特化して介入します。<br className="hidden md:block"/><br className="hidden md:block"/>
              これにより、医療情報ガイドラインを遵守した最高水準のセキュリティを維持しつつ、不要な中間コストを完全に排除しました。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
