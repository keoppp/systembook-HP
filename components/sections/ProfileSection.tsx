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
              代表プロフィール
            </h2>
            
            <div className="space-y-6 text-platinum/90 text-lg leading-relaxed font-light">
              <p>
                子どものころ、身体が強い方ではなくて、病院に行く機会が人より多かったと思います。
              </p>
              
              <p>
                待合室で待ちながら、診察室から出てくる先生や看護師さんをよく見ていました。患者さんに向き合いながら、合間にパタパタと書き物をして、電話が鳴ればすぐに対応して——それでも誰も文句ひとつ言わない。あの姿が、ずっと頭に残っています。
              </p>
              
              <p>
                医学部に入って、現場をより近くで見るようになって、忙しさの中身が少しわかってきました。診察そのものより、まわりの事務作業に追われている時間が思った以上に多いということも。
              </p>
              
              <div className="pl-6 border-l-2 border-gold py-2 my-8 space-y-4">
                <p className="text-white font-medium">
                  自分にできることは何か、考えたときに出てきたのがこのサービスです。<br />
                  医療の知識と、ITの仕組みと、現場への敬意を持って、<br />
                  先生やスタッフの方の時間を、少しでも取り戻す手伝いができればと思っています。
                </p>
              </div>
              
              <p className="text-platinum/70 text-base">
                代表　田崎 健斗（神戸大学医学部4年）
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
