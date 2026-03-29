import { Mic, FileSignature, ArrowRight } from 'lucide-react';

const roadmapItems = [
  {
    phase: 'Phase 1',
    status: '現在提供中',
    title: '予約・問診・転記の自動化',
    description: 'n8nを使って予約システムと電子カルテをつなぎ、手入力の部分を自動化します。今すぐ対応できるメニューです。',
    active: true
  },
  {
    phase: 'Phase 2',
    status: '開発中・2026年Q3β公開',
    title: '音声からカルテの下書きをつくる機能',
    description: '診察中の会話からSOAP形式の下書きをAIが生成します。あくまで下書きなので、最終確認は先生が行います。',
    icon: <Mic className="w-5 h-5 text-gold" />,
    active: false
  },
  {
    phase: 'Phase 3',
    status: 'リサーチ段階',
    title: 'AI紹介状の草案作成（データ学習なし）',
    description: 'カルテのデータから紹介状の草案をAIがつくります。院内データがAIの学習に使われない構成で設計する予定です。',
    icon: <FileSignature className="w-5 h-5 text-gray-500" />,
    active: false
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section-padding bg-gray-50 border-t border-gray-100">
      <div className="container-narrow">
        
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest text-sm mb-4 inline-block uppercase">Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            これから取り組む<br />こと
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            予約や転記の自動化は、最初のステップです。<br className="hidden md:block" />
            ゆくゆくは、先生方がカルテ入力に費やす時間も減らせるような<br className="hidden md:block" />
            機能を開発していきたいと考えています。
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 
                  bg-white border-4 border-gray-200"
                  style={{ borderColor: item.active ? 'var(--color-gold)' : '' }}>
                </div>

                <div className="flex-1 ml-12 md:ml-0 md:w-1/2">
                  <div className={`bg-white p-6 md:p-8 rounded-xl border transition-all hover:shadow-lg
                    ${item.active ? 'border-gold/30 shadow-md' : 'border-gray-100 opacity-90'}`}>
                    
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-bold tracking-widest px-2 py-1 rounded 
                        ${item.active ? 'bg-midnight text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {item.phase}
                      </span>
                      <span className={`text-sm font-bold ${item.active ? 'text-gold' : 'text-gray-400'}`}>
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-midnight mb-3 heading-serif flex items-center gap-2">
                      {item.title}
                      {item.icon && <span>{item.icon}</span>}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                    
                  </div>
                </div>
                
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
          
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6 border-l-2 border-gold pl-4 inline-block text-left">
            機能の追加やアップデートは、保守契約中のクリニック様には<br />
            優先的かつ特別価格（または無償）で提供される予定です。
          </p>
        </div>
        
      </div>
    </section>
  );
}
