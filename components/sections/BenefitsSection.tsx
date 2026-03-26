import { Clock, ShieldAlert, HeartPulse, PiggyBank } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: '残業代削減',
    description: 'カルテ転記、FAX処理、予約管理などの単純な事務作業をAIが完全に肩代わり。スタッフの残業を本質的に削減します。'
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-gold" />,
    title: 'ヒューマンエラーゼロ',
    description: 'n8nによるAPI連携でシステム間のデータ転記ミスを構造的に排除。医療安全の向上に直結します。'
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-gold" />,
    title: '24時間365日受付',
    description: '休診日や夜間でも、AIエージェントが予約受付や一次問診を自動対応。患者満足度と機会損失の防止を両立。'
  },
  {
    icon: <PiggyBank className="w-8 h-8 text-gold" />,
    title: '圧倒的な低コスト',
    description: '最新のAIツールを活用して開発・運用を効率化。大手メーカー製品と比較して約2/3の導入・維持費用を実現。'
  }
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            人に依存しない、<br className="md:hidden" />確実なクリニック運営へ
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            人手不足が深刻化する医療業界において、事務作業を「人に頼る」時代は終焉を迎えています。SystemBook Medicalの自動化ソリューションがもたらす4つの変革。
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
