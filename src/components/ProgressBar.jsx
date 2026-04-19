import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const subjectNames = ['B. Indo', 'PAI', 'IPA', 'B. Arab', 'MTK', 'PP', 'B. Ing', 'IPS'];

export default function ProgressBar({ completed = 0, total = 8 }) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200/50 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <CheckCircle size={20} className="text-[#1A7D42]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Study Progress</h3>
            <p className="text-sm text-slate-500">
              {completed} dari {total} mata pelajaran selesai
            </p>
          </div>
        </div>
        <span className="text-2xl font-extrabold text-[#1A7D42]">{percentage}%</span>
      </div>

      {/* Track */}
      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(to right, #1A7D42, #22A55A)' }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>

      {/* Subject pills */}
      <div className="flex flex-wrap gap-2 mt-4">
        {subjectNames.map((name, i) => (
          <span
            key={i}
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              i < completed
                ? 'bg-emerald-50 text-[#0D5C2E]'
                : 'bg-slate-100 text-slate-400'
            }`}
          >
            {i < completed ? '✓' : '○'} {name}
          </span>
        ))}
      </div>
    </div>
  );
}
