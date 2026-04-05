import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-midnight pt-20 pb-10 border-t border-gray-800 text-platinum">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 cursor-pointer">
              <div className="w-8 h-8 bg-gold rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">S</span>
              </div>
              <span className="text-white text-2xl font-bold tracking-wider">SystemBook <span className="font-light">Medical</span></span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6 opacity-80">
              医療現場を知る開発者が、現場に寄り添うシステムを作ります。<br />
              電子カルテはそのまま。周りの事務作業をAIとn8nで自動化する、ガイドライン準拠のソリューション。
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 tracking-widest text-sm">サービス</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="#benefits" className="hover:text-white transition-colors">導入のメリット</Link></li>
              <li><Link href="#security" className="hover:text-white transition-colors">セキュリティ・トラスト</Link></li>
              <li><Link href="#roadmap" className="hover:text-white transition-colors">開発ロードマップ</Link></li>
              <li><Link href="#estimate" className="hover:text-white transition-colors">料金プラン</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 tracking-widest text-sm">リーガル</h3>
            <ul className="space-y-4 text-sm opacity-80">
              <li><Link href="/privacy#policy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/privacy#terms" className="hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/privacy#law" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
              <li><Link href="/whitepaper" className="hover:text-white transition-colors text-gold">安全管理ホワイトペーパー</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">
            &copy; {currentYear} SystemBook Medical. All rights reserved.
          </p>
          <div className="text-xs opacity-60 flex gap-4">
            <span>Powered by AntiGravity</span>
            <span>AWS Tokyo Region</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
