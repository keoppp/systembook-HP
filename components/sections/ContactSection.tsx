'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Video } from 'lucide-react';

const CLINIC_TYPES = ['精神科', '内科', '整形外科', '日帰り外科', 'その他'];
const PAIN_POINTS = [
  '電話予約・折り返し',
  '問診票の入力',
  'リマインド連絡',
  'キャンセル管理',
  'その他事務作業',
];

interface FormData {
  clinicType: string;
  painPoints: string[];
  clinicName: string;
  email: string;
  preferredDate1: string;
  preferredDate2: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    clinicType: '',
    painPoints: [],
    clinicName: '',
    email: '',
    preferredDate1: '',
    preferredDate2: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.clinicType) newErrors.clinicType = '診療科を選択してください';
    if (!formData.clinicName.trim()) newErrors.clinicName = 'クリニック名を入力してください';
    if (!formData.email.trim()) newErrors.email = 'メールアドレスを入力してください';
    if (!formData.preferredDate1.trim()) newErrors.preferredDate1 = '第1希望の日時を入力してください';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const togglePainPoint = (point: string) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A9EFF]/10 border border-[#4A9EFF]/20 mb-6">
            <Video className="w-4 h-4 text-[#4A9EFF]" />
            <span className="text-xs font-bold text-[#4A9EFF] tracking-widest uppercase">Zoom Demo</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-midnight mb-6 heading-serif">
            30分 無料Zoomデモを<br className="md:hidden" />予約する
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            貴院の業務フローをお聞きし、どの作業をどれだけ削減できるか具体的にお伝えします。
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-3xl mx-auto">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-slide-up">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-midnight mb-4 heading-serif">ご予約ありがとうございます</h3>
              <p className="text-gray-600 mb-8">
                24時間以内にメールにてご連絡いたします。<br />
                Zoom日時の最終確認をお送りしますので、ご確認ください。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 診療科 */}
              <div>
                <label htmlFor="clinicType" className="block text-sm font-bold text-midnight mb-2">
                  診療科 <span className="text-red-500">*</span>
                </label>
                <select
                  id="clinicType"
                  value={formData.clinicType}
                  onChange={e => setFormData({ ...formData, clinicType: e.target.value })}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                >
                  <option value="">選択してください</option>
                  {CLINIC_TYPES.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.clinicType && <p className="text-red-500 text-xs mt-1">{errors.clinicType}</p>}
              </div>

              {/* 業務の課題 */}
              <div>
                <label className="block text-sm font-bold text-midnight mb-3">
                  現在、最も時間がかかっている業務は？（複数選択可）
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PAIN_POINTS.map(point => (
                    <label
                      key={point}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        formData.painPoints.includes(point)
                          ? 'border-[#4A9EFF] bg-[#4A9EFF]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.painPoints.includes(point)}
                        onChange={() => togglePainPoint(point)}
                        className="w-4 h-4 accent-[#4A9EFF] rounded"
                      />
                      <span className="text-sm text-midnight">{point}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* クリニック名 & メール */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="clinicName" className="block text-sm font-bold text-midnight mb-2">
                    クリニック名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    value={formData.clinicName}
                    onChange={e => setFormData({ ...formData, clinicName: e.target.value })}
                    placeholder="例: 〇〇クリニック"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  />
                  {errors.clinicName && <p className="text-red-500 text-xs mt-1">{errors.clinicName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-midnight mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="例: info@clinic.com"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Zoom希望日時 */}
              <div className="space-y-6">
                {/* 第1希望 */}
                <div>
                  <label className="block text-sm font-bold text-midnight mb-3">
                    Zoom希望日時（第1希望） <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">日付</label>
                      <input
                        type="date"
                        value={formData.preferredDate1.split(' ')[0] || ''}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={e => {
                          const time = formData.preferredDate1.split(' ')[1] || '';
                          setFormData({ ...formData, preferredDate1: `${e.target.value} ${time}`.trim() });
                        }}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">時間帯</label>
                      <select
                        value={formData.preferredDate1.split(' ')[1] || ''}
                        onChange={e => {
                          const date = formData.preferredDate1.split(' ')[0] || '';
                          setFormData({ ...formData, preferredDate1: `${date} ${e.target.value}`.trim() });
                        }}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                      >
                        <option value="">選択</option>
                        <option value="09:00〜">09:00〜</option>
                        <option value="09:30〜">09:30〜</option>
                        <option value="10:00〜">10:00〜</option>
                        <option value="10:30〜">10:30〜</option>
                        <option value="11:00〜">11:00〜</option>
                        <option value="11:30〜">11:30〜</option>
                        <option value="12:00〜">12:00〜</option>
                        <option value="13:00〜">13:00〜</option>
                        <option value="13:30〜">13:30〜</option>
                        <option value="14:00〜">14:00〜</option>
                        <option value="14:30〜">14:30〜</option>
                        <option value="15:00〜">15:00〜</option>
                        <option value="15:30〜">15:30〜</option>
                        <option value="16:00〜">16:00〜</option>
                        <option value="16:30〜">16:30〜</option>
                        <option value="17:00〜">17:00〜</option>
                        <option value="17:30〜">17:30〜</option>
                        <option value="18:00〜">18:00〜</option>
                      </select>
                    </div>
                  </div>
                  {errors.preferredDate1 && <p className="text-red-500 text-xs mt-1">{errors.preferredDate1}</p>}
                </div>

                {/* 第2希望 */}
                <div>
                  <label className="block text-sm font-bold text-midnight mb-3">
                    Zoom希望日時（第2希望）
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">日付</label>
                      <input
                        type="date"
                        value={formData.preferredDate2.split(' ')[0] || ''}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={e => {
                          const time = formData.preferredDate2.split(' ')[1] || '';
                          setFormData({ ...formData, preferredDate2: `${e.target.value} ${time}`.trim() });
                        }}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">時間帯</label>
                      <select
                        value={formData.preferredDate2.split(' ')[1] || ''}
                        onChange={e => {
                          const date = formData.preferredDate2.split(' ')[0] || '';
                          setFormData({ ...formData, preferredDate2: `${date} ${e.target.value}`.trim() });
                        }}
                        className="w-full px-4 py-3 rounded border border-gray-300 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                      >
                        <option value="">選択</option>
                        <option value="09:00〜">09:00〜</option>
                        <option value="09:30〜">09:30〜</option>
                        <option value="10:00〜">10:00〜</option>
                        <option value="10:30〜">10:30〜</option>
                        <option value="11:00〜">11:00〜</option>
                        <option value="11:30〜">11:30〜</option>
                        <option value="12:00〜">12:00〜</option>
                        <option value="13:00〜">13:00〜</option>
                        <option value="13:30〜">13:30〜</option>
                        <option value="14:00〜">14:00〜</option>
                        <option value="14:30〜">14:30〜</option>
                        <option value="15:00〜">15:00〜</option>
                        <option value="15:30〜">15:30〜</option>
                        <option value="16:00〜">16:00〜</option>
                        <option value="16:30〜">16:30〜</option>
                        <option value="17:00〜">17:00〜</option>
                        <option value="17:30〜">17:30〜</option>
                        <option value="18:00〜">18:00〜</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#4A9EFF] hover:bg-[#3A8EEF] text-white font-bold py-4 rounded-sm transition-all flex items-center justify-center gap-2 group disabled:opacity-70 shadow-lg shadow-[#4A9EFF]/20"
              >
                {status === 'loading' ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> 送信中...</>
                ) : (
                  <>Zoomデモを申し込む（無料・30分） <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed">
                デモ後の営業電話は一切ありません。<br />
                当日は院長先生のクリニックの業務フローをヒアリングし、<br />
                削減できる時間を具体的にお伝えします。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
