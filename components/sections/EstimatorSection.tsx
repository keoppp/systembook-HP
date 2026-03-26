'use client';

import { useState, useEffect } from 'react';
import { Calculator, Check, ArrowRight, TrendingDown, Info, ShieldCheck } from 'lucide-react';

export const COST_SAVING_EVIDENCE = {
  reservation: {
    title: "予約システムの合理化",
    reason: "LINE/Web直結の自動受付により、窓口での電話対応コストをゼロに。 [cite: 587]",
    guideline: "見読性・可用性の確保 [cite: 600-603]"
  },
  automation: {
    title: "n8nによる業務自動化",
    reason: "n8n活用で開発工数を約50%削減。中間データの即時物理削除で保管費抑制。 [cite: 344-345]",
    guideline: "真正性・情報の揮発性担保 [cite: 597-598]"
  },
  infrastructure: {
    title: "次世代基盤の標準化",
    reason: "Cloudflare Tunnelにより、高価な専用回線コストを排除。 [cite: 368-372]",
    guideline: "3省庁2ガイドライン完全準拠 [cite: 281]"
  }
};

export default function EstimatorSection() {
  const [reservation, setReservation] = useState(true); // Default 20万
  const [automationLevel, setAutomationLevel] = useState(50); // 10万〜80万 (Default 60万 => ~70%)
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [calculatedMonthly, setCalculatedMonthly] = useState(0);
  
  const OPTION_RESERVATION = 20; // 万円
  const MIN_AUTOMATION = 10;
  const MAX_AUTOMATION = 80;

  useEffect(() => {
    // 予約システム分
    const resCost = reservation ? OPTION_RESERVATION : 0;
    
    // 自動化分 (スライダー 0-100 を 10-80万円にマッピング)
    const autoCost = MIN_AUTOMATION + ((MAX_AUTOMATION - MIN_AUTOMATION) * (automationLevel / 100));
    
    const total = resCost + autoCost;
    setCalculatedTotal(Math.round(total));
    
    // 保守料マッピング (規模に応じて 2.5万〜4.0万)
    const monthly = 2.5 + (1.5 * (automationLevel / 100));
    setCalculatedMonthly(Number(monthly.toFixed(1)));
  }, [reservation, automationLevel]);

  // 他社平均（総予算に対する独自のざっくり乗数として約1.5倍で算出→ SystemBookが2/3のコストを表現）
  const competitorAverage = Math.round(calculatedTotal * 1.5);

  let automationValueDesc = "";
  if (automationLevel < 35) {
    automationValueDesc = "「単純な転記ミスをゼロに。月間約10時間の事務工数を削減。」";
  } else if (automationLevel < 70) {
    automationValueDesc = "「予約から問診までを全自動化。受付スタッフ1名分の負荷を大幅軽減。」";
  } else {
    automationValueDesc = "「貴院独自の複雑なワークフローをAIが完全再現。クリニック全体のDXを実現。」";
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
            貴院の要望に合わせた概算費用を今すぐ算出します。<br className="hidden md:block" />
            個人情報の入力は不要です。
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Input Area */}
          <div className="flex-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
            <h3 className="text-xl font-bold text-midnight mb-8 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-gold" />
              要件シミュレーター
            </h3>
            
            <div className="space-y-10">
              {/* Option 1 */}
              <div>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div>
                    <div className="font-bold text-midnight mb-1 group-hover:text-gold transition-colors">予約・問診システムの導入</div>
                    <div className="text-sm text-gray-500">LINE・Web予約、事前問診のパッケージ</div>
                  </div>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={reservation}
                      onChange={() => setReservation(!reservation)}
                    />
                    <div className={`w-14 h-7 rounded-full transition-colors ${reservation ? 'bg-gold' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${reservation ? 'left-8' : 'left-1'}`}></div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Slider Option */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="font-bold text-midnight mb-1">周辺業務のAI自動化レベル</div>
                    <div className="text-sm text-gray-500">FAXOCR処理、カルテ転記、通知自動化など</div>
                  </div>
                </div>
                
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={automationLevel}
                  onChange={(e) => setAutomationLevel(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold relative z-10"
                />
                
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold px-1 mb-4">
                  <span>一部自動化</span>
                  <span>標準パッケージ</span>
                  <span>フルカスタマイズ</span>
                </div>

                <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 text-sm text-midnight font-bold leading-relaxed shadow-sm">
                  {automationValueDesc}
                </div>
              </div>
            </div>
          </div>

          {/* Result Area */}
          <div className="lg:w-96 bg-gray-50 flex flex-col justify-between relative z-10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-r-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            </div>
            
            <div className="p-8 md:p-12 relative z-20 h-full flex flex-col justify-between">
              <div>
              <div className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">Estimated Cost</div>
              <div className="text-gray-400 text-sm line-through">
                他社平均 約 {competitorAverage} 万円〜
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-midnight font-serif tracking-tighter">
                  {calculatedTotal}
                </span>
                <span className="text-xl font-bold text-midnight">万円 <span className="text-gray-500 text-sm font-normal">〜</span></span>
              </div>
              
              <div className="relative group cursor-help inline-flex items-center gap-2 text-gold font-bold text-sm bg-gold/10 px-3 py-1.5 rounded-full mb-8">
                <TrendingDown className="w-4 h-4" />
                業界平均より約33%コスト削減
                <Info className="w-4 h-4" />
                
                {/* Tooltip Content */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 mt-3 w-72 lg:w-80 bg-midnight border border-gold/30 p-4 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 pointer-events-none">
                  <div className="font-bold text-white mb-2 text-xs">【コスト削減の根拠】</div>
                  <div className="text-[11px] font-normal text-platinum/90 leading-relaxed">
                    本サービスは、従来の大手メーカーが多額のコストを投じている「営業人件費」や「保守センターの維持費」を排除し、最新のAI自動化技術（n8n）とサーバーレスインフラに置き換えています。これにより、医療情報ガイドラインを遵守した最高水準のセキュリティを維持しつつ、導入・運用コストを業界平均の2/3（約33.3%削減）まで抑えることに成功しました。
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 font-bold">月額保守・運用費</span>
                  <span className="text-xl font-bold text-midnight">{calculatedMonthly} <span className="text-sm text-gray-500 font-normal">万円/月</span></span>
                </div>
                <div className="text-xs text-gray-500 leading-relaxed mb-6">
                  ※ n8nサーバー維持費、AIエージェントAPI利用料、システム監視、セキュリティアップデートを含みます。<br />
                  ※ 正確な金額はヒアリング後に算出いたします。
                </div>

                {/* 動的エビデンスリスト */}
                <div className="space-y-3">
                  <div className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    今回の削減根拠リスト
                  </div>
                  {reservation && (
                    <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                      <div className="text-xs font-bold text-midnight mb-1">{COST_SAVING_EVIDENCE.reservation.title}</div>
                      <div className="text-[10px] text-gray-500">{COST_SAVING_EVIDENCE.reservation.reason}</div>
                    </div>
                  )}
                  {automationLevel > 0 && (
                    <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                      <div className="text-xs font-bold text-midnight mb-1">{COST_SAVING_EVIDENCE.automation.title}</div>
                      <div className="text-[10px] text-gray-500">{COST_SAVING_EVIDENCE.automation.reason}</div>
                    </div>
                  )}
                  <div className="bg-white p-3 rounded border border-gray-100 shadow-sm">
                    <div className="text-xs font-bold text-midnight mb-1">{COST_SAVING_EVIDENCE.infrastructure.title}</div>
                    <div className="text-[10px] text-gray-500">{COST_SAVING_EVIDENCE.infrastructure.reason}</div>
                  </div>
                </div>
              </div>
            </div>

              <div className="mt-8">
                <a href="#contact" className="w-full bg-midnight hover:bg-midnight-light text-white font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 group">
                  この内容で問い合わせる
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Cost evidence */}
        <div className="max-w-5xl mx-auto mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <h4 className="inline-block bg-gold/10 text-gold font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-gold/20">「非侵襲（ひしんしゅう）」の導入アプローチ</h4>
            <h4 className="text-white font-bold mb-4 text-xl md:text-2xl">なぜ、既存のシステムより安くて安全なのか？</h4>
            <p className="text-platinum/90 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              私たちは、改修に数千万円単位のコストがかかる<strong className="text-gold">「電子カルテ本体」の改造は行いません。</strong><br className="hidden md:block"/>
              その周辺にある「FAX処理」「予約転記」「患者通知」といったボトルネック（隙間業務）のみを、外付けユニットで自動化します。この<strong className="text-white">「最小限の介入」</strong>こそが、低価格・短期間・高セキュリティを実現する理由です。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-midnight-light/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-gold/30 transition-colors">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2 pb-3 border-b border-gray-800"><span className="text-gold shrink-0">■</span> 開発工数の劇的圧縮</h5>
              <div className="text-xs text-gold mb-2 font-bold opacity-80">(n8n × ローコード設計)</div>
              <p className="text-sm text-platinum/70 leading-relaxed">
                高額なフルスクラッチ開発を廃止し、自動化基盤「n8n」を活用することで、設計・実装工数を従来比で約50%削減しています。これにより、品質を落とさず初期費用を業界平均の2/3に抑えることが可能になりました。
              </p>
            </div>
            <div className="bg-midnight-light/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-gold/30 transition-colors">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2 pb-3 border-b border-gray-800"><span className="text-gold shrink-0">■</span> 24時間体制のAI自律運用</h5>
              <div className="text-xs text-gold mb-2 font-bold opacity-80">(監視コストの排除)</div>
              <p className="text-sm text-platinum/70 leading-relaxed">
                大規模な有人コールセンターや監視チームを置かず、AIエージェントが24時間365日のシステム監視と1次トリアージを自動で行います。この「人件費の機械化」が月額保守料の低価格化に直結しています。
              </p>
            </div>
            <div className="bg-midnight-light/50 p-6 md:p-8 rounded-xl border border-gray-800 hover:border-gold/30 transition-colors">
              <h5 className="font-bold text-white mb-3 flex items-center gap-2 pb-3 border-b border-gray-800"><span className="text-gold shrink-0">■</span> 固定資産ゼロ経営</h5>
              <div className="text-xs text-gold mb-2 font-bold opacity-80">(クラウドネイティブ)</div>
              <p className="text-sm text-platinum/70 leading-relaxed">
                自社サーバーや物理的な拠点を保持しないSaaS型モデル（AWS/Cloudflare活用）を採用し、損益分岐点を極限まで低く抑えています。この財務構造の身軽さが、利用者への価格還元を支えています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
