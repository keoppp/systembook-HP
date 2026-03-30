import { Clock, ShieldAlert, HeartPulse, PiggyBank } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: '繰り返しの作業から、手を解放する',
    description: 'カルテの転記、FAXの仕分け、予約の確認——毎日こなしているけれど、本当はもっと大事なことに使いたい時間があるはずです。そういう作業を、ひとつずつ自動化していきます。'
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-gold" />,
    title: 'ヒヤリとする瞬間を、仕組みでなくす',
    description: '手で書き写すかぎり、ミスはゼロにはなりません。システム同士を直接つなぐことで、人の手を介さずにデータが動く仕組みをつくります。「入力したはずが反映されていない」が起きない環境へ。'
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-gold" />,
    title: '「電話できなかった」で、患者を逃さない',
    description: '仕事帰りに予約したくても、診療時間が終わっていて電話できない——患者さん側にも、そういうもどかしさがあります。夜間や休日でもAIが窓口になるので、機会を逃しません。'
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-gold" />,
    title: '大手と同じことを、大手の値段でやらない',
    description: '大きなシステム会社に頼むと、使わない機能までセットで買わされることがよくあります。必要なものだけを、クリニックの規模に合わせて構築するので、導入・維持費は大手製品の約2/3。それでも、やれることは変わりません。'
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            「もう一人いたら」を、<br className="md:hidden" />仕組みで解決する
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            診察の合間に書類を片付けて、電話が鳴るたびに手を止めて——そんな毎日が続いているクリニックは、少なくないと思います。<br className="hidden md:block" />
            自動化できる仕事はシステムに任せて、スタッフが患者さんと向き合う時間を取り戻す。そのお手伝いをしたいと思っています。
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
