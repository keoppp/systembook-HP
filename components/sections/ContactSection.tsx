'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <span className="text-midnight-light font-bold tracking-widest text-sm mb-4 inline-block bg-gray-100 px-3 py-1 rounded-full">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            システムのご相談
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            導入に関するご相談や、概算見積もりの詳細な計算など、お気軽にお問い合わせください。<br />
            AIが内容をトリアージし、緊急性の高いものは即座に対応いたします。
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-3xl mx-auto">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-slide-up">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-4 heading-serif">送信完了しました</h3>
              <p className="text-gray-600 mb-8">
                お問い合わせありがとうございます。AIによる一次受付が完了しました。<br />
                内容を確認の上、通常24時間以内に代表の田崎よりご連絡いたします。
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-midnight-light font-bold hover:text-gold transition-colors text-sm border-b border-transparent hover:border-gold"
              >
                別のお問い合わせを送信する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-midnight mb-2">クリニック名 / 担当者名 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="例: システムブック病院 田崎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-midnight mb-2">メールアドレス <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    placeholder="例: info@clinic.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-midnight mb-2">ご相談内容 <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                  placeholder="現在の課題や導入を検討している機能についてご記入ください。「システム障害」に関する内容はAIが検知し、即座に担当者へプッシュ通知されます。"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-midnight hover:bg-midnight-light text-white font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> 送信中...</>
                ) : (
                  <>送信する <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                送信することで<a href="/privacy" className="text-midnight-light hover:underline font-bold">プライバシーポリシー</a>に同意したものとみなされます。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
