import { Clock, ShieldAlert, HeartPulse, PiggyBank } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: '事務作業の時間を減らす',
    description: 'カルテの転記やFAXの処理、予約の管理など、毎日繰り返す作業をAIに任せることで、スタッフの方の負担を軽くします。'
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-gold" />,
    title: '転記ミスをなくす',
    description: 'システム同士をAPIでつないで、データを自動で受け渡し。手入力によるミスが起きにくい仕組みをつくります。'
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-gold" />,
    title: '夜間・休日も予約を受付',
    description: '診療時間外でもAIが予約の受付や簡単な問い合わせに対応。「電話がつながらない」を減らせます。'
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-gold" />,
    title: 'コストを抑えた導入',
    description: '自社サーバーを持たない設計と、開発を効率化するツール（n8n）のおかげで、大手製品の約2/3の費用で提供できます。'
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            スタッフの手が足りない、<br className="md:hidden" />を減らすために
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            「人が足りない」「事務作業が多すぎる」。そんな声にお応えするために、<br className="hidden md:block" />
            自動化できるところは自動化して、スタッフの方が本来の仕事に集中できるようにします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gray-50 to-transparent -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-midnight flex items-center justify-center rounded-sm mb-6 group-hover:bg-midnight-light transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-midnight mb-4 heading-serif">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed opacity-90">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
