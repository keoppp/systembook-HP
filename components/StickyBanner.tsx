'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function StickyBanner() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Check sessionStorage on mount
    if (typeof window !== 'undefined' && sessionStorage.getItem('bannerClosed') === 'true') {
      setClosed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setClosed(true);
    sessionStorage.setItem('bannerClosed', 'true');
  };

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    handleClose();
  };

  if (closed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-midnight/95 backdrop-blur-md border-t border-gold/20 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <p className="text-white text-sm font-bold tracking-wide hidden sm:block">
            30分の無料Zoomデモ、受付中
          </p>
          <p className="text-white text-xs font-bold sm:hidden">
            無料Zoomデモ受付中
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleClick}
              className="bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white font-bold text-sm px-5 py-2.5 rounded-sm transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
            >
              今すぐ予約する
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleClose}
              className="text-platinum/50 hover:text-white transition-colors p-1"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
