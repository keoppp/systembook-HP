'use client';

import { useState } from 'react';
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

const specialtyTabs = [
  {
    label: '精神科',
    text: '初診問診票の記入に15〜30分。スタッフが手入力、院長が紙を確認。\nこの時間、毎日発生していませんか？'
  },
  {
    label: '内科・一般診療',
    text: '電話予約の折り返し、リマインド電話、キャンセル管理。\nこの3つだけで、受付スタッフの午前中が終わります。'
  },
  {
    label: '整形外科',
    text: 'リハビリの定期予約管理、次回案内の電話。\n繰り返し業務こそ自動化で消えます。'
  },
  {
    label: '日帰り外科',
    text: '術前問診・同意書の回収、術後フォロー連絡。\n件数が増えるほど、事務の負荷が比例します。'
  }
];

export default function BenefitsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            「もう一人いたら」を、<br className="md:hidden" />仕組みで解決する
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            診察の合間に書類を片付けて、電話が鳴るたびに手を止めて——そんな毎日が続いているクリニックは、少なくないと思います。<br className="hidden md:block" />
            自動化できる仕事はシステムに任せて、スタッフが患者さんと向き合う時間を取り戻す。そのお手伝いをしたいと思っています。
          </p>
        </div>

        {/* Specialty Tabs */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {specialtyTabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === i
                    ? 'bg-midnight text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-midnight/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm text-center">
            <p className="text-lg md:text-xl text-midnight font-bold leading-relaxed whitespace-pre-line">
              {specialtyTabs[activeTab].text}
            </p>
          </div>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-midnight mb-3 heading-serif">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
