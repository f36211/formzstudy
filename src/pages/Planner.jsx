import { motion } from 'framer-motion';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { examSchedule } from '../data/mockData';

export default function Planner() {
  return (
    <div className="w-full animation-fade-in pb-20">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-[40px] font-bold tracking-[-0.25px] text-[var(--text-main)] leading-tight m-0 mb-2">
          Jadwal Ujian
        </h1>
        <p className="text-[18px] font-medium text-[var(--text-secondary)] m-0 flex items-center gap-2">
          <AlertCircle size={18} /> Fokus utama minggu ini. Jangan sampai terlewat.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {examSchedule.map((day, idx) => (
          <motion.div
            key={day.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl p-6 shadow-sm flex flex-col h-full"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--border-card)]">
              <Calendar size={20} className="text-[var(--accent-blue)]" />
              <h2 className="text-lg font-bold text-[var(--text-main)] m-0">{day.date}</h2>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {day.exams.map((exam, i) => (
                <div 
                  key={exam.id} 
                  className="bg-[var(--bg-main)] rounded-r-lg rounded-l-sm p-4 border border-[var(--border-card)] border-l-4 border-l-[var(--accent-blue)] hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex items-center gap-1.5 text-[var(--accent-blue)] font-bold text-xs mb-2 bg-blue-50 dark:bg-blue-500/10 w-fit px-2 py-1 rounded-md">
                    <Clock size={12} />
                    <span>{exam.time}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-main)] m-0 tracking-tight leading-snug">
                    {exam.subject}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
