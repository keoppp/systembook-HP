import { Stethoscope } from 'lucide-react';

export default function WhySection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <span className="text-midnight-light font-bold tracking-widest text-sm mb-4 inline-block uppercase bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              Why Us
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-midnight mb-6 heading-serif leading-tight">
              なぜ医学生が<br />このサービスを作ったのか
            </h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                代表は現役医学科4回生です。
              </p>
              <p>
                臨床実習で見た「事務作業に追われる先生と看護師」を減らしたくて、このサービスを作りました。
              </p>
              <p className="font-bold text-midnight">
                医療現場を知っているから、電子カルテの邪魔をしない設計ができます。
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent blur-3xl rounded-full"></div>
            <div className="relative w-full max-w-sm aspect-[4/5] bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden flex flex-col items-center justify-end p-8 text-center">
              {/* Placeholder for representative photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent z-10 flex flex-col justify-end p-8 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Stethoscope className="w-4 h-4 text-gold" />
                  <span className="text-gold font-bold tracking-widest text-xs uppercase">Founder</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">田崎 健斗</h3>
                <p className="text-sm text-platinum/80">神戸大学医学部4年</p>
              </div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 font-serif text-6xl">T</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
