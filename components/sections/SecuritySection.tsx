import { Shield, FileWarning, Vault, Server } from 'lucide-react';
import TrustViewer from '../TrustViewer';

export default function SecuritySection() {
  return (
    <section id="security" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -mr-[400px] -mt-[400px] opacity-70 pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-midnight-light font-bold tracking-widest text-sm mb-4 inline-block uppercase bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              Security & Trust Center
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif leading-tight">
              医療情報を守る<br />堅牢なアーキテクチャ
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              個人情報保護管理者（CISO）の監督のもと、医療機関に求められる最高水準のセキュリティ要件に準拠。3省庁2ガイドラインを満たすシステム基盤を標準提供しています。
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center shrink-0">
                  <FileWarning className="w-6 h-6 text-midnight-light" />
                </div>
                <div>
                  <h4 className="font-bold text-midnight mb-1">3省庁2ガイドライン完全準拠</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">厚労省、経産省、総務省が定める医療情報システムの安全管理に関するガイドラインをクリアした設計。</p>
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
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gold blur-3xl opacity-10 rounded-full"></div>
            {/* Interactive Trust Viewer Component */}
            <TrustViewer />
          </div>

        </div>
      </div>
    </section>
  );
}
