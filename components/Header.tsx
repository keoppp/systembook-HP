'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-midnight/95 backdrop-blur-md shadow-lg py-3' : 'bg-midnight py-5'}`}>
      <div className="container-wide flex justify-between items-center">
        {/* Logo area */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-lg font-serif">S</span>
          </div>
          <span className="text-white text-xl font-bold tracking-wider">SystemBook <span className="text-platinum font-light">Medical</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#benefits" className="text-platinum hover:text-white transition-colors text-sm font-medium tracking-wide">導入のメリット</Link>
          <Link href="/#security" className="text-platinum hover:text-white transition-colors text-sm font-medium tracking-wide">セキュリティ</Link>
          <Link href="/whitepaper" className="text-platinum hover:text-white transition-colors text-sm font-medium tracking-wide">ホワイトペーパー</Link>
          <Link href="/#profile" className="text-platinum hover:text-white transition-colors text-sm font-medium tracking-wide">代表挨拶</Link>
          
          <Link href="/#estimate" className="bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded-sm font-bold text-sm transition-colors flex items-center gap-2">
            AI即時見積もり <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-platinum hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-midnight-light border-t border-gray-800 shadow-xl py-4 flex flex-col">
          <Link href="/#benefits" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-platinum hover:bg-midnight hover:text-white transition-colors border-b border-gray-800">導入のメリット</Link>
          <Link href="/#security" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-platinum hover:bg-midnight hover:text-white transition-colors border-b border-gray-800">セキュリティ・トラスト</Link>
          <Link href="/whitepaper" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-gold font-bold hover:bg-midnight hover:text-white transition-colors border-b border-gray-800">安全管理ホワイトペーパー</Link>
          <Link href="/#profile" onClick={() => setMobileMenuOpen(false)} className="px-6 py-4 text-platinum hover:bg-midnight hover:text-white transition-colors border-b border-gray-800">代表プロフィール</Link>
          <div className="p-6">
            <Link href="#estimate" onClick={() => setMobileMenuOpen(false)} className="w-full bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded-sm font-bold transition-colors flex items-center justify-center gap-2">
              AI即時見積もり
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
