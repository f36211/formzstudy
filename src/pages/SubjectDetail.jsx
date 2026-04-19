import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  BookOpen,
  X,
  PlayCircle,
  Clock,
  CheckCircle2,
  FileText
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { subjectsData } from "../data/mockData";
import useAppStore from "../store/useAppStore";

export default function SubjectDetail() {
  const { name } = useParams();
  const { completedTopics, toggleTopicComplete, notes } = useAppStore();
  const [showNotesModal, setShowNotesModal] = useState(false);

  const subject = subjectsData.find((s) => s.slug === name);

  if (!subject) {
    return (
      <div className="p-10 text-[var(--text-secondary)]">
        Mata pelajaran tidak ditemukan.
      </div>
    );
  }

  const topics = subject.topics || [];
  const completedTopicIds = completedTopics[subject.slug] || [];
  const progressPercent =
    topics.length > 0 ? (completedTopicIds.length / topics.length) * 100 : 0;

  return (
    <div className="w-full animation-fade-in pb-20">
      {/* Back Navigation */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-8 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors"
      >
        <ArrowLeft size={16} />
        Kembali ke Dashboard
      </Link>

      {/* Subject Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-8 lg:p-12 mb-10 shadow-sm"
      >
        {/* Background Accent */}
        <div 
          className="absolute top-0 right-0 w-80 h-80 blur-3xl opacity-20 rounded-full -mr-20 -mt-20"
          style={{ backgroundColor: subject.color }}
        />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-alternate)] text-[var(--text-muted)] text-xs font-bold uppercase tracking-wider mb-4">
              Modul Pembelajaran
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-[var(--text-main)] mb-4 leading-tight m-0">
              {subject.title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-0 leading-relaxed font-medium">
              {subject.description || `Pelajari konsep-konsep penting dalam ${subject.title} dengan materi yang terstruktur dan mudah dipahami.`}
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-72">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider">
                Progres Belajar
              </span>
              <span className="text-sm font-black text-[var(--accent-blue)] bg-[var(--accent-blue-soft)] px-2 py-0.5 rounded">
                {Math.round(progressPercent)}%
              </span>
            </div>
            <div className="w-full h-3 bg-[var(--bg-alternate)] rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, ease: "circOut" }}
                className="h-full bg-[var(--accent-blue)] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.3)]"
              />
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-3 font-medium text-right">
              {completedTopicIds.length} dari {topics.length} materi selesai
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Layout: Cards & Sidebar */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Topic Card List */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--text-main)] m-0">Kurikulum Materi</h2>
            <div className="text-sm text-[var(--text-secondary)] font-medium">
              {topics.length} Topik Tersedia
            </div>
          </div>

          <div className="space-y-4">
            {topics.length > 0 ? (
              topics.map((topic, index) => (
                <TopicEnhancedCard
                  key={topic.id}
                  topic={topic}
                  subjectSlug={subject.slug}
                  isCompleted={completedTopicIds.includes(topic.id)}
                  toggleComplete={() =>
                    toggleTopicComplete(subject.slug, topic.id)
                  }
                  index={index}
                />
              ))
            ) : (
              <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-12 text-center shadow-sm">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText size={24} className="text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)] mb-2">Materi Belum Tersedia</h3>
                <p className="text-[var(--text-secondary)] m-0 max-w-xs mx-auto">
                  Kami sedang menyusun materi terbaik untuk subjek ini. Silakan kembali lagi nanti!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Study Actions Sidebar Panel */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[var(--text-main)] mb-5 m-0 flex items-center gap-2">
                <PlayCircle size={20} className="text-[var(--accent-blue)]" />
                Aktivitas Belajar
              </h3>

              <div className="flex flex-col gap-3">
                <Link to={`/quiz/${subject.slug}`} className="block no-underline">
                  <button className="w-full flex items-center justify-center gap-3 bg-[var(--accent-blue)] hover:shadow-lg hover:shadow-blue-500/20 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 cursor-pointer border-0">
                    Mulai Kuis Subjek
                  </button>
                </Link>
                <button
                  onClick={() => setShowNotesModal(true)}
                  className="w-full flex items-center justify-center gap-3 bg-[var(--bg-main)] text-[var(--text-main)] font-bold py-3.5 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 cursor-pointer border border-[var(--border-card)]"
                >
                  <FileText size={18} />
                  Lihat Semua Catatan
                </button>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full -mr-16 -mt-16" />
              <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2 m-0">Tips Belajar</h4>
              <p className="text-sm text-slate-300 m-0 leading-relaxed">
                Gunakan fitur "Catatan Pribadi" di setiap topik untuk merangkum poin penting dengan bahasamu sendiri agar lebih mudah diingat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Modal */}
      <AnimatePresence>
        {showNotesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNotesModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-[var(--accent-blue)]">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white m-0">
                    Catatan Belajar Global
                  </h2>
                </div>
                <button
                  onClick={() => setShowNotesModal(false)}
                  className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 cursor-pointer border-0 bg-transparent"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto flex-1 bg-slate-50/50 dark:bg-black/20">
                {notes ? (
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <ReactMarkdown>{notes}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText size={32} className="text-slate-300" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-400 mb-2">Belum ada catatan</h3>
                    <p className="text-slate-400 text-sm max-w-[240px] mx-auto">
                      Buka materi topik untuk mulai menulis catatan pribadimu.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Enhanced Topic Card Component
function TopicEnhancedCard({
  topic,
  subjectSlug,
  isCompleted,
  toggleComplete,
  index,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative bg-[var(--bg-card)] border rounded-2xl transition-all duration-300 ${isExpanded ? 'border-[var(--accent-blue)] shadow-[var(--shadow-md)]' : 'border-[var(--border-card)] hover:border-slate-300 dark:hover:border-slate-700 shadow-[var(--shadow-soft)]'}`}
    >
      <div 
        className="p-5 cursor-pointer flex items-center gap-5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Number/Icon Indicator */}
        <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-colors ${isCompleted ? 'bg-[var(--accent-emerald-soft)] text-[var(--accent-emerald)]' : 'bg-[var(--bg-alternate)] text-[var(--text-muted)] group-hover:bg-[var(--bg-main)]'}`}>
          {isCompleted ? <CheckCircle2 size={24} /> : index + 1}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className={`text-lg font-black m-0 truncate transition-colors ${isCompleted ? 'text-[var(--text-muted)] line-through opacity-60' : 'text-[var(--text-main)]'}`}>
              {topic.title}
            </h3>
            {topic.icon && <span className="text-base grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{topic.icon}</span>}
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.1em]">
            <span className="flex items-center gap-1">
              <Clock size={12} strokeWidth={2.5} />
              15-20 menit
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-card)]" />
            <span>{topic.sections?.length || 0} Sub-materi</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <button
            onClick={(e) => {
              e.stopPropagation();
              toggleComplete();
            }}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer border-0 ${isCompleted ? 'bg-[var(--accent-emerald)] text-white shadow-[0_0_12px_rgba(16,185,129,0.3)]' : 'bg-[var(--bg-alternate)] text-slate-400 hover:text-[var(--accent-blue)]'}`}
            title={isCompleted ? "Tandai belum selesai" : "Tandai selesai"}
          >
            <Check size={18} strokeWidth={4} />
          </button>
          <div className={`p-2 rounded-lg text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 ml-[68px] border-t border-slate-50 dark:border-slate-800/50 mt-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-3">Ringkasan Materi</h4>
                  <p className="text-sm text-[var(--text-main)] m-0 leading-relaxed opacity-80">
                    Pelajari konsep fundamental dan aplikasinya dalam kehidupan sehari-hari. 
                    Dilengkapi dengan contoh soal dan penjelasan mendalam.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-3">Daftar Sub-materi</h4>
                  <ul className="space-y-2 m-0 p-0 list-none">
                    {topic.sections?.slice(0, 3).map((sec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[var(--text-main)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] opacity-40" />
                        <span className="line-clamp-1">{sec.subtitle}</span>
                      </li>
                    ))}
                    {(topic.sections?.length > 3) && (
                      <li className="text-xs text-[var(--text-secondary)] italic pl-3">
                        + {topic.sections.length - 3} sub-materi lainnya
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex">
                <Link to={`/subject/${subjectSlug}/topic/${topic.id}`} className="no-underline">
                  <button className="flex items-center gap-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-95 cursor-pointer border-0 shadow-sm">
                    <BookOpen size={18} />
                    Buka Materi Lengkap
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
