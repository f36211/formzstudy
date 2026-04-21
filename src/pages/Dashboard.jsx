import { useMemo } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SubjectCard from '../components/SubjectCard';
import { subjectsData, examSchedule } from '../data/mockData';
import useAppStore from '../store/useAppStore';

const DAY_LABELS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

export default function Dashboard() {
  const { completedTopics, quizScores, studyLog } = useAppStore();

  // Build real weekly chart data from studyLog
  const chartData = useMemo(() => {
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = (studyLog || []).filter((entry) => entry.date === dateStr).length;
      days.push({ name: DAY_LABELS[d.getDay()], progress: count });
    }
    return days;
  }, [studyLog]);

  // Calculate Real Statistics
  const totalSubjects = subjectsData.filter((s) => s.topics && s.topics.length > 0).length;
  let fullyCompletedSubjects = 0;
  let totalTopicsCompleted = 0;

  subjectsData.forEach((subject) => {
    if (subject.topics && subject.topics.length > 0) {
      const completedCount = completedTopics[subject.slug]?.length || 0;
      totalTopicsCompleted += completedCount;
      if (completedCount === subject.topics.length) {
        fullyCompletedSubjects++;
      }
    }
  });

  const quizScoresArray = Object.values(quizScores);
  const avgQuizScore =
    quizScoresArray.length > 0
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
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 md:mb-12">
        {[
          { label: 'Subjek Selesai', value: fullyCompletedSubjects.toString(), unit: `/ ${totalSubjects}`, accent: 'var(--accent-emerald)' },
          { label: 'Total Topik Selesai', value: totalTopicsCompleted.toString(), unit: 'topik', accent: 'var(--accent-blue)' },
          { label: 'Rata-rata Kuis', value: avgQuizScore.toString(), unit: 'nilai', accent: 'var(--accent-indigo)' },
          { label: 'Kuis Dikerjakan', value: quizScoresArray.length.toString(), unit: 'kuis', accent: 'var(--accent-blue)' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-5 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] transition-all group"
          >
            <div className="flex items-baseline gap-1">
              <h2 className="text-3xl md:text-4xl font-extrabold m-0 leading-none tracking-tighter" style={{ color: stat.accent }}>
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

      {/* Main Content Grid: Schedule & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        {/* Exam Schedule — driven by examSchedule data */}
        <motion.section
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-soft)] flex flex-col"
          style={{ minHeight: 360 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-blue-soft)] text-[var(--accent-blue)] flex items-center justify-center shadow-sm">
              <LucideIcons.CalendarClock size={20} />
            </div>
            <h3 className="text-lg font-extrabold text-[var(--text-main)] m-0 uppercase tracking-tighter">
              Jadwal Ujian
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-1">
            {examSchedule.map((day) => (
              <div key={day.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] m-0">
                    {day.date}
                  </h4>
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                </div>
                {day.exams.map((exam) => (
                  <div
                    key={exam.id}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3.5 rounded-xl border border-[var(--border-card)] bg-[var(--bg-alternate)] hover:border-[var(--accent-blue)]/30 transition-all gap-2 sm:gap-0"
                  >
                    <span className="text-sm font-bold text-[var(--text-main)] uppercase tracking-tight">
                      {exam.subject}
                    </span>
                    <span className="w-fit text-[10px] font-bold text-[var(--accent-blue)] bg-[var(--bg-card)] px-2.5 py-1 rounded-lg shadow-sm border border-[var(--border-card)]">
                      {exam.time}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Study Progress Chart */}
        <motion.section
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-soft)] flex flex-col"
          style={{ minHeight: 360 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-indigo-soft)] text-[var(--accent-indigo)] flex items-center justify-center shadow-sm">
              <LucideIcons.TrendingUp size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-black text-[var(--text-main)] m-0 uppercase tracking-tighter">
                Progres Mingguan
              </h3>
              <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest m-0 mt-0.5">
                Statistik Belajar Anda
              </p>
            </div>
          </div>

          <div className="flex-1 w-full min-h-0" style={{ minHeight: 200 }}>
            <ResponsiveContainer width="99%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0} />
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
                  allowDecimals={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-card)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                  itemStyle={{ color: 'var(--text-main)', fontWeight: 600 }}
                  labelStyle={{ color: 'var(--text-muted)', fontSize: 11 }}
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

      {/* Subject Grid — show all 8 subjects */}
      <section className="mb-12" id="subjects">
        <div className="flex items-center gap-3 mb-6">
          <LucideIcons.BookMarked size={20} className="text-[var(--text-main)]" />
          <h3 className="text-xl font-bold text-[var(--text-main)] m-0 tracking-tight">
            Mata Pelajaran
          </h3>
          <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] bg-[var(--bg-alternate)] px-2.5 py-1 rounded-full border border-[var(--border-card)]">
            {subjectsData.length} Subjek
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {subjectsData.map((subject, i) => {
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
