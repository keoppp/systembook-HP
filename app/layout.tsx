import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Typography Configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSans = Noto_Sans_JP({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans' 
});
const notoSerif = Noto_Serif_JP({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-noto-serif' 
});

export const metadata: Metadata = {
  title: '【既存電子カルテ対応】クリニックの業務自動化・医療DXシステム | SystemBook Medical',
  description: '神戸大学医学部生が開発する医療DXソリューション。今の電子カルテはそのままに、予約・問診・FAXなどの事務作業をAIとn8nで自動化します。3省庁2ガイドライン完全準拠。サーバーレス構成により導入費用は他社平均の2/3。AI即時見積もりをご用意しています。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSans.variable} ${notoSerif.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
