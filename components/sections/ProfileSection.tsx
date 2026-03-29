import { Stethoscope, Award, ChevronRight } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section id="profile" className="section-padding bg-midnight text-white border-t border-gray-800">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent blur-2xl rounded-full"></div>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-midnight-light border border-gray-800 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 flex flex-col items-center justify-end p-8 text-center group">
              {/* Fallback image style since actual photo is missing temporarily */}
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent z-10 flex flex-col justify-end p-8 text-left">
                <span className="text-gold font-bold tracking-widest text-xs mb-2">CEO & FOUNDER</span>
                <h3 className="text-3xl font-bold font-serif mb-1">田崎 健斗</h3>
                <p className="text-sm text-platinum/80 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> 神戸大学医学部
                </p>
              </div>
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center opacity-50 group-hover:opacity-10 transition-opacity">
                <span className="text-gray-500 font-serif text-6xl">T</span>
              </div>
            </div>
            
            {/* Trust badge */}
            <div className="absolute -bottom-6 -right-6 md:auto md:bottom-12 md:-right-12 bg-white text-midnight p-6 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-bold text-sm">CISO 兼<br/>個人情報保護管理者</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12">
            <span className="text-gold font-bold tracking-widest text-sm mb-4 inline-block uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              Story & Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 heading-serif leading-tight">
              医学部生が<br />
              つくっています。
            </h2>
            
            <div className="space-y-6 text-platinum/90 text-lg leading-relaxed font-light">
              <p>
                正直に言うと、僕はまだ医師免許を持っていません。神戸大学の医学部に通いながら、学生時代からプログラミングにのめり込んで、この事業を始めました。
              </p>
              
              <p>
                実習で病院を回る中で「先生、まだFAXなんですか」「この転記作業、毎日やってるんですか」と驚くことが何度もありました。臨床のことはまだまだ勉強中ですが、「この手作業、自動化できるのに」と気づけるのは、プログラミングをやってきたからこそだと思っています。
              </p>
              
              <div className="pl-6 border-l-2 border-gold py-2 my-8 space-y-4">
                <p className="text-white font-medium">
                  電子カルテ本体の改造はしません。<br />
                  その周りの「手作業」だけを、外側から自動化する。<br />
                  それが僕たちのアプローチです。
                </p>
              </div>
              
              <p>
                一人でやっているからこそ、セキュリティは仕組みで担保しています。3省庁2ガイドラインに準拠した設計、改ざんできないバックアップ（WORMストレージ）、操作ログの自動記録。「人の目」に頼らない監視体制を最初から組み込んでいます。
              </p>
            </div>
            
            <div className="mt-12 flex gap-4 border-t border-gray-800 pt-8">
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">Expertise</div>
                <div className="font-bold">医療ドメイン知識 × AI自動化技術</div>
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">Architecture</div>
                <div className="font-bold">AntiGravity / Next.js / AWS</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
