'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Lock, Server, FileCheck, Info } from 'lucide-react';

const slides = [
  {
    title: '医療情報サービス安全管理',
    subtitle: '3省庁2ガイドライン準拠の証明',
    icon: <FileCheck className="w-12 h-12 text-gold mb-4" />,
    content: (
      <div className="space-y-4 text-sm text-gray-600">
        <p>SystemBook Medicalは、以下の公的ガイドラインに完全準拠したアーキテクチャを採用しています。</p>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>厚生労働省「医療情報システムの安全管理に関するガイドライン」</li>
          <li>経済産業省・総務省「医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン」</li>
        </ul>
      </div>
    )
  },
  {
    title: 'データの物理的局在化',
    subtitle: 'AWS 東京リージョン限定運用',
    icon: <Server className="w-12 h-12 text-gold mb-4" />,
    content: (
      <div className="space-y-4 text-sm text-gray-600">
        <p>海外サーバーを利用することによる情報流出リスクを根本から排除します。</p>
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg flex items-center gap-4">
          <Server className="w-8 h-8 text-midnight-light" />
          <div>
            <div className="font-bold text-midnight">ap-northeast-1</div>
            <div className="text-xs text-gray-500">すべてのデータ処理・保管を日本国内に限定</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'ランサムウェア対策',
    subtitle: '不変バックアップと堅牢な暗号化',
    icon: <Lock className="w-12 h-12 text-gold mb-4" />,
    content: (
      <div className="space-y-4 text-sm text-gray-600">
        <p>最高水準の暗号化技術と、管理者でさえ削除できない不変ストレージを組み合わせています。</p>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-gray-50 p-3 border border-gray-200 rounded text-center">
            <div className="font-bold text-midnight text-xs mb-1">AES-256</div>
            <div className="text-[10px] text-gray-500">保存データの完全暗号化</div>
          </div>
          <div className="bg-gray-50 p-3 border border-gray-200 rounded text-center">
            <div className="font-bold text-midnight text-xs mb-1">Vault Lock</div>
            <div className="text-[10px] text-gray-500">WORM型不変ストレージ</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function TrustViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[420px] relative z-20">
      
      {/* Header */}
      <div className="bg-midnight px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-gold" />
          <span className="font-bold text-sm tracking-widest">TRUST CENTER</span>
        </div>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-gold' : 'w-2 bg-gray-600'}`} />
          ))}
        </div>
      </div>

      {/* Slide Content */}
      <div className="flex-1 p-8 md:p-10 flex flex-col relative overflow-hidden">
        
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={`absolute inset-0 p-8 md:p-10 flex flex-col transition-all duration-500 ${
              i === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : i < currentSlide || (currentSlide === 0 && i === slides.length - 1)
                  ? 'opacity-0 -translate-x-12 pointer-events-none'
                  : 'opacity-0 translate-x-12 pointer-events-none'
            }`}
          >
            {slide.icon}
            <h3 className="text-xl font-bold text-midnight mb-1 heading-serif">{slide.title}</h3>
            <p className="text-sm font-bold text-gold mb-6">{slide.subtitle}</p>
            {slide.content}
          </div>
        ))}

      </div>

      {/* Controls */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <Info className="w-3 h-3" />
          <span>システムブック・メディカル ホワイトペーパー要約</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-gold hover:text-gold transition-colors text-gray-400"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-midnight text-white flex items-center justify-center hover:bg-midnight-light transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
