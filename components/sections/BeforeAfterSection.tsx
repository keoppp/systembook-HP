'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, FileText, Smartphone, Database, CheckCircle2, XCircle } from 'lucide-react';

export default function BeforeAfterSection() {
  const [isAfter, setIsAfter] = useState(false);

  // Auto-toggle every 4 seconds for demonstration, but allow manual override
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAfter(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-midnight text-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-bold tracking-widest text-sm mb-4 inline-block">非侵襲的な導入手法</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 heading-serif">
            既存の電子カルテは<br className="md:hidden" />そのままに。
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-platinum/90 leading-relaxed">
            システム移行の巨大なリスクとコストは不要です。私たちは既存の電子カルテシステムには一切触れず、その周辺の「アナログな隙間」をAIとn8nでスマートに結合します。
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="bg-midnight-light p-1.5 rounded-full inline-flex border border-gray-800">
            <button
              onClick={() => setIsAfter(false)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                !isAfter ? 'bg-gray-700 text-white shadow-lg' : 'text-platinum/50 hover:text-platinum'
              }`}
            >
              導入前（手作業）
            </button>
            <button
              onClick={() => setIsAfter(true)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                isAfter ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'text-platinum/50 hover:text-platinum'
              }`}
            >
              導入後（AI連携）
            </button>
          </div>
        </div>

        {/* Animation Canvas */}
        <div className="relative max-w-5xl mx-auto bg-midnight-light rounded-2xl border border-gray-800 p-8 md:p-16 h-[500px] flex items-center justify-center">
          
          {/* BEFORE STATE */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${!isAfter ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-8 gap-8">
              
              <div className="flex flex-col items-center gap-4 text-center w-48">
                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-600">
                  <Smartphone className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <div className="font-bold text-platinum">Web予約・問診</div>
                  <div className="text-xs text-gray-500 mt-1">システムA</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center relative">
                <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-red-500/50 -translate-y-1/2 z-0"></div>
                <div className="relative z-10 bg-midnight-light border border-red-500/30 px-6 py-4 rounded-xl flex flex-col items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500 mx-auto" />
                  <span className="text-sm font-bold text-red-400">スタッフの手入力</span>
                  <span className="text-xs text-gray-500">転記ミス・残業の原因</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center w-48">
                <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-600">
                  <Database className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <div className="font-bold text-platinum">既存電子カルテ</div>
                  <div className="text-xs text-gray-500 mt-1">オンプレミス/クラウド</div>
                </div>
              </div>
              
            </div>
          </div>

          {/* AFTER STATE */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${isAfter ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-8 gap-8">
              
              <div className="flex flex-col items-center gap-4 text-center w-48 relative">
                <div className="w-24 h-24 rounded-full bg-midnight shadow-[0_0_30px_rgba(184,164,126,0.3)] flex items-center justify-center border-2 border-gold/50 z-10">
                  <Smartphone className="w-10 h-10 text-gold" />
                </div>
                <div>
                  <div className="font-bold text-white">Web予約・問診</div>
                  <div className="text-xs text-platinum/70 mt-1">各種クラウドサービス</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center relative w-full h-full justify-center">
                {/* Flow lines */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent -translate-y-1/2 z-0 overflow-hidden">
                  <div className="w-full h-full bg-gold animate-[slideRight_2s_linear_infinite] shadow-[0_0_15px_rgba(184,164,126,0.8)]"></div>
                </div>
                
                <div className="relative z-10 bg-gradient-to-br from-gold/20 to-midnight border border-gold/50 px-8 py-6 rounded-xl flex flex-col items-center gap-3 shadow-xl backdrop-blur-md transform scale-110">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse delay-150"></div>
                  </div>
                  <span className="text-base font-bold text-gold tracking-widest heading-serif">n8n × AI連携層</span>
                  <span className="text-xs text-platinum">24時間365日 自動処理</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 text-center w-48 relative">
                <div className="w-24 h-24 rounded-full bg-midnight/80 flex items-center justify-center border-2 border-platinum/30 z-10">
                  <Database className="w-10 h-10 text-platinum" />
                </div>
                <div>
                  <div className="font-bold text-white">既存電子カルテ</div>
                  <div className="text-xs text-platinum/70 mt-1">そのまま利用可能</div>
                </div>
              </div>

            </div>
          </div>

        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideRight {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
        `}} />
      </div>
    </section>
  );
}
