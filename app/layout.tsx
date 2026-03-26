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
  title: 'SystemBook Medical | 医療DX自動化ソリューション',
  description: 'システムに運用を合わせる時代は終わりました。貴院の「やり方」をそのままに、AIとn8nで業務を最適化する。医療情報ガイドライン完全準拠のセキュアな医院業務自動化。',
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
