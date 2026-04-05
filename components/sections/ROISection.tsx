import { TrendingDown, ArrowRight, Clock } from 'lucide-react';

const ROI_DATA = [
  { task: '電話予約・折り返し', hours: '約15〜30時間', cost: '約3〜6万円相当' },
  { task: '問診票手入力', hours: '約10〜20時間', cost: '約2〜4万円相当' },
  { task: 'リマインド連絡', hours: '約8〜15時間', cost: '約1.5〜3万円相当' },
];

export default function ROISection() {
  return (
    <section id="roi" className="section-padding bg-gray-50 relative">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9EFF]/10 border border-[#4A9EFF]/20 mb-6">
            <TrendingDown className="w-4 h-4 text-[#4A9EFF]" />
            <span className="text-xs font-bold text-[#4A9EFF] tracking-widest uppercase">Cost Reduction</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            導入で削減できる<br className="md:hidden" />時間と費用の試算
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-midnight text-white text-sm font-bold">
              <div className="px-6 py-4">業務</div>
              <div className="px-6 py-4 text-center">削減時間/月</div>
              <div className="px-6 py-4 text-right">人件費換算</div>
            </div>

            {/* Rows */}
            {ROI_DATA.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                <div className="px-6 py-5 font-bold text-midnight flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold shrink-0 hidden sm:block" />
                  {row.task}
                </div>
                <div className="px-6 py-5 text-center text-gray-700">{row.hours}</div>
                <div className="px-6 py-5 text-right font-bold text-[#4A9EFF]">{row.cost}</div>
              </div>
            ))}

            {/* Total */}
            <div className="grid grid-cols-3 bg-midnight text-white font-bold text-sm border-t-2 border-gold">
              <div className="px-6 py-5">合計</div>
              <div className="px-6 py-5 text-center">約33〜65時間</div>
              <div className="px-6 py-5 text-right text-gold text-base">約6.5〜13万円/月</div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-6 leading-relaxed">
            ※ 人件費は医療事務スタッフ時給2,000円換算。<br />
            個別クリニックの削減時間はZoomデモ時に詳しくお伝えします。
          </p>

          {/* CTA */}
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white font-bold px-8 py-4 rounded-sm transition-all shadow-lg shadow-[#4A9EFF]/20 group"
            >
              30分 無料Zoomデモを予約する
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
