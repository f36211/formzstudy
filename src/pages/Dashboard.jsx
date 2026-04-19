import { useMemo } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SubjectCard from '../components/SubjectCard';
import { subjectsData } from '../data/mockData';
import useAppStore from '../store/useAppStore';

const DAY_LABELS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export default function Dashboard() {
  const { plannerTasks, completedTopics, quizScores, studyLog } = useAppStore();

  // Build real weekly chart data from studyLog
  const chartData = useMemo(() => {
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = (studyLog || []).filter(entry => entry.date === dateStr).length;
      days.push({ name: DAY_LABELS[d.getDay()], progress: count });
    }
    return days;
  }, [studyLog]);

  // Provide mock tasks if store is empty for visual representation
  const displayTasks = plannerTasks.length > 0 ? plannerTasks : [
    { id: '1', text: 'Review PAI', completed: true },
    { id: '2', text: 'Latihan Matematika', completed: false },
    { id: '3', text: 'Baca IPS Bab 2', completed: false },
    { id: '4', text: 'Kerjakan Kuis Bahasa Inggris', completed: false }
  ];

  // Calculate Real Statistics
  const totalSubjects = subjectsData.filter(s => s.topics && s.topics.length > 0).length;
  let fullyCompletedSubjects = 0;
  let totalTopicsCompleted = 0;

  subjectsData.forEach(subject => {
    if (subject.topics && subject.topics.length > 0) {
      const completedCount = completedTopics[subject.slug]?.length || 0;
      totalTopicsCompleted += completedCount;
      if (completedCount === subject.topics.length) {
        fullyCompletedSubjects++;
      }
    }
  });

  const quizScoresArray = Object.values(quizScores);
  const avgQuizScore = quizScoresArray.length > 0 
    ? Math.round(quizScoresArray.reduce((a, b) => a + b, 0) / quizScoresArray.length)
    : 0;

  return (
    <div className="w-full">
      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight md:tracking-[-1.5px] text-[var(--text-main)] leading-tight mb-3 m-0">
          Formz Study Dashboard
        </h1>
        <p className="text-base md:text-lg lg:text-[20px] font-medium text-[var(--text-secondary)] m-0 leading-relaxed max-w-2xl">
          Prepare smarter. Review faster. Track everything.
        </p>
      </motion.section>

      {/* Quick Progress Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-12">
        {[
          { label: 'Subjek Selesai', value: fullyCompletedSubjects.toString(), unit: `/ ${totalSubjects}`, accent: 'var(--accent-emerald)' },
          { label: 'Total Topik Selesai', value: totalTopicsCompleted.toString(), unit: 'topik', accent: 'var(--accent-blue)' },
          { label: 'Rata-rata Kuis', value: avgQuizScore.toString(), unit: 'nilai', accent: 'var(--accent-indigo)' },
          { label: 'Kuis Dikerjakan', value: quizScoresArray.length.toString(), unit: 'kuis', accent: 'var(--accent-blue)' }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] transition-all group"
          >
            <div className="flex items-baseline gap-1">
              <h2 className="text-4xl font-extrabold m-0 leading-none tracking-tighter" style={{ color: stat.accent }}>
                {stat.value}
              </h2>
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider">{stat.unit}</span>
            </div>
            <p className="text-[11px] text-[var(--text-muted)] font-semibold uppercase tracking-[0.1em] mt-3 m-0 group-hover:text-[var(--text-main)] transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Main Content Grid: Checklist & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Exam Schedule */}
        <motion.section
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-soft)] flex flex-col h-[400px]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-blue-soft)] text-[var(--accent-blue)] flex items-center justify-center shadow-sm">
              <LucideIcons.CalendarClock size={20} />
            </div>
            <h3 className="text-xl font-extrabold text-[var(--text-main)] m-0 uppercase tracking-tighter">Jadwal Ujian</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-5">
            {/* Hard-coded to show closest exams from examSchedule */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] m-0">Senin, 20 April</h4>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="group flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-alternate)] hover:border-[var(--accent-blue)]/30 transition-all cursor-pointer gap-3 sm:gap-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-[var(--text-main)] uppercase tracking-tight">Bahasa Indonesia</span>
                    <span className="text-[10px] font-medium text-[var(--text-muted)]">Ruang ? • Sesi 1</span>
                  </div>
                  <span className="w-fit text-[10px] font-bold text-[var(--accent-blue)] bg-white dark:bg-white/5 px-2.5 py-1.5 rounded-lg shadow-sm border border-[var(--border-card)]">07.30 - 09.30</span>
                </div>
                <div className="group flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-alternate)] hover:border-[var(--accent-blue)]/30 transition-all cursor-pointer gap-3 sm:gap-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-[var(--text-main)] uppercase tracking-tight">PAI</span>
                    <span className="text-[10px] font-medium text-[var(--text-muted)]">Ruang ? • Sesi 2</span>
                  </div>
                  <span className="w-fit text-[10px] font-bold text-[var(--accent-blue)] bg-white dark:bg-white/5 px-2.5 py-1.5 rounded-lg shadow-sm border border-[var(--border-card)]">10.00 - 12.00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Study Progress Chart */}
        <motion.section
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-soft)] h-[400px] flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-indigo-soft)] text-[var(--accent-indigo)] flex items-center justify-center shadow-sm">
              <LucideIcons.TrendingUp size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-black text-[var(--text-main)] m-0 uppercase tracking-tighter">Progres Mingguan</h3>
              <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest m-0 mt-0.5">Statistik Belajar Anda</p>
            </div>
          </div>
          
          <div className="flex-1 w-full h-full min-h-0 pl-0">
            <ResponsiveContainer width="99%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-card)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: 'var(--text-secondary)' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: 'var(--text-secondary)' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--bg-card)', 
                    borderColor: 'var(--border-card)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                  itemStyle={{ color: 'var(--text-main)', fontWeight: 600 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="var(--accent-blue)" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorProgress)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.section>
      </div>

      {/* Subject Grid */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <LucideIcons.BookMarked size={20} className="text-[var(--text-main)]" />
          <h3 className="text-xl font-bold text-[var(--text-main)] m-0 tracking-tight">Mata Pelajaran</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {subjectsData.slice(0, 6).map((subject, i) => {
            const IconComponent = LucideIcons[subject.icon] || LucideIcons.BookOpen;
            const completedCount = completedTopics[subject.slug]?.length || 0;
            const totalCount = subject.topics ? subject.topics.length : 0;
            const realProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            
            return (
              <SubjectCard 
                key={subject.slug} 
                {...subject} 
                icon={IconComponent}
                index={i} 
                progress={realProgress}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
