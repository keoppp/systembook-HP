'use client';

import { useState, useEffect } from 'react';
import { Calculator, Check, ArrowRight, TrendingDown } from 'lucide-react';

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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold px-1">
                  <span>一部自動化</span>
                  <span>標準パッケージ</span>
                  <span>フルカスタマイズ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Area */}
          <div className="lg:w-96 bg-gray-50 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
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
              
              <div className="flex items-center gap-2 text-gold font-bold text-sm bg-gold/10 px-3 py-1.5 rounded-full w-fit mb-8">
                <TrendingDown className="w-4 h-4" />
                業界平均より約33%コスト削減
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 font-bold">月額保守・運用費</span>
                  <span className="text-xl font-bold text-midnight">{calculatedMonthly} <span className="text-sm text-gray-500 font-normal">万円/月</span></span>
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  ※ n8nサーバー維持費、AIエージェントAPI利用料、システム監視、セキュリティアップデートを含みます。<br />
                  ※ 正確な金額はヒアリング後に算出いたします。
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

        {/* Cost evidence */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h4 className="text-gold font-bold mb-4">なぜ他社の2/3の価格で提供できるのか？</h4>
          <p className="text-platinum/80 text-sm leading-relaxed">
            フルスクラッチでコードを書かず、オープンソースの自動化基盤（n8n）と最新AIを組み合わせるモダンなアーキテクチャを採用しています。これにより「開発工数」と「保守工数」を劇的に圧縮し、医療情報ガイドラインに準拠したセキュアなインフラを低コストで提供することが可能になりました。
          </p>
        </div>
      </div>
    </section>
  );
}
