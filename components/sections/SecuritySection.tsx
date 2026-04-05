'use client';

import { useState } from 'react';
import { Shield, FileWarning, Vault, Server, Download, X, Loader2, CheckCircle2 } from 'lucide-react';

export default function SecuritySection() {
  const [showModal, setShowModal] = useState(false);
  const [wpForm, setWpForm] = useState({ wpName: '', wpClinicName: '', wpEmail: '' });
  const [wpStatus, setWpStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wpForm.wpName || !wpForm.wpClinicName || !wpForm.wpEmail) return;
    setWpStatus('loading');
    try {
      const res = await fetch('/api/whitepaper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(wpForm),
      });
      if (res.ok) {
        setWpStatus('success');
        setTimeout(() => { setShowModal(false); setWpStatus('idle'); }, 3000);
      } else {
        setWpStatus('error');
      }
    } catch {
      setWpStatus('error');
    }
  };

  return (
    <>
      <section id="security" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -mr-[400px] -mt-[400px] opacity-70 pointer-events-none"></div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div>
              <span className="text-midnight-light font-bold tracking-widest text-sm mb-4 inline-block uppercase bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                Security & Trust Center
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif leading-tight">
                セキュリティは<br />仕組みで守ります
              </h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                医療データを扱う以上、セキュリティは最も大切にしている部分です。厚労省・経産省・総務省の3省庁が定めるガイドラインに沿った設計を、すべてのプランに標準で組み込んでいます。
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <FileWarning className="w-6 h-6 text-midnight-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight mb-1">3省庁2ガイドライン完全準拠</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">厚生労働省・経済産業省・総務省が定める医療情報システムの安全管理に関するガイドライン 第6.0版 対応。</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <Server className="w-6 h-6 text-midnight-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight mb-1">AWS 東京リージョン局在化</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">医療データはすべて日本国内のサーバーで物理的に保管・処理され、海外への情報流出を防ぎます。</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <Vault className="w-6 h-6 text-midnight-light" />
                  </div>
                  <div>
                    <h4 className="font-bold text-midnight mb-1">AES-256暗号化と不変バックアップ</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">通信経路および保存データの強力な暗号化に加え、削除不可能なVault Lockによるランサムウェア対策を実施。</p>
                  </div>
                </div>
              </div>

              {/* Whitepaper Download CTA */}
              <button
                onClick={() => setShowModal(true)}
                className="mt-10 inline-flex items-center gap-3 bg-midnight hover:bg-midnight-light text-white font-bold px-6 py-4 rounded-sm transition-all group shadow-md"
              >
                <Download className="w-5 h-5 text-gold" />
                医療情報安全管理 ホワイトペーパー（無料）をダウンロード
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold blur-3xl opacity-10 rounded-full"></div>
              <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-gold" />
                  <h3 className="text-xl font-bold text-midnight heading-serif">準拠ガイドライン</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-midnight mb-1">厚生労働省</p>
                    <p className="text-gray-500">医療情報システムの安全管理に関するガイドライン 第6.0版</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-midnight mb-1">経済産業省・総務省</p>
                    <p className="text-gray-500">医療情報を取り扱う情報システム・サービスの提供事業者における安全管理ガイドライン</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100">
                    <p className="font-bold text-midnight mb-1">インフラ</p>
                    <p className="text-gray-500">AWS東京リージョン / Cloudflare Tunnel / AES-256 / WORM Storage</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Whitepaper Download Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-midnight transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {wpStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-midnight mb-2">ありがとうございます</h3>
                <p className="text-gray-600 text-sm">ご登録のメールアドレスにDLリンクをお送りしました。</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-midnight mb-2 heading-serif">ホワイトペーパーのダウンロード</h3>
                <p className="text-sm text-gray-500 mb-6">以下を入力いただくと、メールでダウンロードリンクをお送りします。</p>
                <form onSubmit={handleWpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-midnight mb-1">氏名 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={wpForm.wpName}
                      onChange={e => setWpForm({ ...wpForm, wpName: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      placeholder="例: 田崎 健斗"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-midnight mb-1">クリニック名 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={wpForm.wpClinicName}
                      onChange={e => setWpForm({ ...wpForm, wpClinicName: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      placeholder="例: 〇〇クリニック"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-midnight mb-1">メールアドレス <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      value={wpForm.wpEmail}
                      onChange={e => setWpForm({ ...wpForm, wpEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none"
                      placeholder="例: info@clinic.com"
                    />
                  </div>
                  {wpStatus === 'error' && (
                    <p className="text-red-500 text-sm">送信に失敗しました。再度お試しください。</p>
                  )}
                  <button
                    type="submit"
                    disabled={wpStatus === 'loading'}
                    className="w-full bg-midnight hover:bg-midnight-light text-white font-bold py-3 rounded-sm transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {wpStatus === 'loading' ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> 送信中...</>
                    ) : 'ダウンロードリンクを受け取る'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
