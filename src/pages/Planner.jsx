import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, AlertCircle, Plus, Trash2, Check } from 'lucide-react';
import { examSchedule } from '../data/mockData';
import useAppStore from '../store/useAppStore';

export default function Planner() {
  const { plannerTasks, addPlannerTask, togglePlannerTask, deletePlannerTask } = useAppStore();
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    addPlannerTask(trimmed);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  const pending = plannerTasks.filter((t) => !t.completed);
  const done = plannerTasks.filter((t) => t.completed);

  return (
    <div className="w-full animation-fade-in pb-20">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-[40px] font-bold tracking-tight text-[var(--text-main)] leading-tight m-0 mb-2">
          Jadwal & Tugas
        </h1>
        <p className="text-base font-medium text-[var(--text-secondary)] m-0 flex items-center gap-2">
          <AlertCircle size={16} /> Fokus utama minggu ini. Jangan sampai terlewat.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Exam Schedule */}
        <div className="xl:col-span-2">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] text-[var(--text-muted)] mb-5 flex items-center gap-2">
            <Calendar size={16} className="text-[var(--accent-blue)]" /> Jadwal Ujian
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {examSchedule.map((day, idx) => (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 * idx }}
                className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-5 shadow-[var(--shadow-soft)] flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-card)]">
                  <Calendar size={16} className="text-[var(--accent-blue)]" />
                  <h3 className="text-sm font-bold text-[var(--text-main)] m-0">{day.date}</h3>
                </div>

                <div className="flex flex-col gap-3 flex-1">
                  {day.exams.map((exam) => (
                    <div
                      key={exam.id}
                      className="bg-[var(--bg-alternate)] rounded-xl p-3.5 border border-[var(--border-card)] border-l-4 border-l-[var(--accent-blue)] hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-1.5 text-[var(--accent-blue)] font-bold text-[10px] mb-1.5 bg-blue-50 dark:bg-blue-500/10 w-fit px-2 py-0.5 rounded-md">
                        <Clock size={10} />
                        <span>{exam.time}</span>
                      </div>
                      <h4 className="text-sm font-bold text-[var(--text-main)] m-0">{exam.subject}</h4>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Task Checklist */}
        <div className="xl:col-span-1">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] text-[var(--text-muted)] mb-5 flex items-center gap-2">
            <Check size={16} className="text-[var(--accent-emerald)]" /> Daftar Tugas
            {pending.length > 0 && (
              <span className="ml-auto text-[10px] font-black bg-[var(--accent-blue-soft)] text-[var(--accent-blue)] px-2 py-0.5 rounded-full">
                {pending.length} tersisa
              </span>
            )}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-5 shadow-[var(--shadow-soft)] flex flex-col gap-4"
          >
            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Tambah tugas baru..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-alternate)] text-[var(--text-main)] text-sm font-medium placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/30 focus:border-[var(--accent-blue)] transition-all"
              />
              <button
                onClick={handleAdd}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-[var(--accent-blue)] text-white flex items-center justify-center border-0 cursor-pointer hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Plus size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Pending Tasks */}
            <div className="space-y-2">
              <AnimatePresence>
                {pending.map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-alternate)] group"
                  >
                    <button
                      onClick={() => togglePlannerTask(task.id)}
                      className="w-5 h-5 rounded-full border-2 border-[var(--border-card)] flex items-center justify-center shrink-0 cursor-pointer bg-transparent hover:border-[var(--accent-emerald)] transition-colors"
                    />
                    <span className="flex-1 text-sm text-[var(--text-main)] font-medium leading-snug">
                      {task.text}
                    </span>
                    <button
                      onClick={() => deletePlannerTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-[var(--text-muted)] hover:text-rose-500 transition-all bg-transparent border-0 cursor-pointer p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              {pending.length === 0 && done.length === 0 && (
                <p className="text-center text-sm text-[var(--text-muted)] py-6 font-medium">
                  Belum ada tugas. Tambahkan di atas!
                </p>
              )}
            </div>

            {/* Completed Tasks */}
            {done.length > 0 && (
              <div className="pt-3 border-t border-[var(--border-card)]">
                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  Selesai ({done.length})
                </p>
                <div className="space-y-1.5">
                  <AnimatePresence>
                    {done.map((task) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-2.5 rounded-xl group"
                      >
                        <button
                          onClick={() => togglePlannerTask(task.id)}
                          className="w-5 h-5 rounded-full bg-[var(--accent-emerald)] flex items-center justify-center shrink-0 cursor-pointer border-0"
                        >
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </button>
                        <span className="flex-1 text-sm text-[var(--text-muted)] line-through font-medium">
                          {task.text}
                        </span>
                        <button
                          onClick={() => deletePlannerTask(task.id)}
                          className="opacity-0 group-hover:opacity-100 text-[var(--text-muted)] hover:text-rose-500 transition-all bg-transparent border-0 cursor-pointer p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
