import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Edit3,
  BookOpen,
  Presentation,
  CheckCircle2,
  Save,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  CheckCircle,
  Lightbulb
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { subjectsData } from '../data/mockData';
import useAppStore from '../store/useAppStore';

import PythagorasVisualizer from '../math/PythagorasVisualizer';
import Kubus3D from '../math/Kubus3D';
import VernierCaliper from '../subjects/ipa/visuals/VernierCaliper';

const SectionWrapper = ({ title, icon: Icon, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm"
  >
    <div className="flex items-center gap-3 mb-4 sm:mb-5 pb-3 sm:pb-4 border-b border-[var(--border-card)]">
      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 shrink-0">
        <Icon size={18} className="text-[var(--accent-blue)]" />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] m-0 leading-snug">{title}</h3>
    </div>
    <div className="prose-custom">
      {children}
    </div>
  </motion.div>
);

/* ─── Content Renderers ─── */
function HighlightBlock({ children }) {
  return (
    <div className="my-4 sm:my-5 md:my-6 p-4 sm:p-5 rounded-2xl border-l-4 border-l-[var(--accent-blue)] bg-blue-50/30 dark:bg-blue-500/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-10">
        <Lightbulb size={40} className="text-[var(--accent-blue)]" />
      </div>
      <div className="flex gap-3">
        <div className="shrink-0 mt-0.5">
          <Lightbulb size={18} className="text-[var(--accent-blue)]" />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-[var(--accent-blue)] uppercase tracking-wider mb-1 m-0">Poin Penting</h4>
          <p className="text-[var(--text-main)] text-sm sm:text-[15px] font-medium leading-relaxed m-0">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function ArabicBlock({ arabic, transliteration, translation }) {
  return (
    <div className="my-4 sm:my-5 p-4 sm:p-6 bg-[#f6f5f4] dark:bg-black/20 rounded-xl border border-[var(--border-card)]">
      <p className="text-right text-xl sm:text-2xl md:text-3xl font-arabic text-[var(--text-main)] leading-[2.3] sm:leading-[2.5] mb-3 sm:mb-4" dir="rtl">{arabic}</p>
      <div className="space-y-1.5 sm:space-y-2 border-t border-[var(--border-card)] pt-3 sm:pt-4">
        {transliteration && <p className="text-xs sm:text-sm font-medium text-[var(--accent-blue)] m-0">"{transliteration}"</p>}
        {translation && <p className="text-xs sm:text-sm italic text-[var(--text-secondary)] m-0">{translation}</p>}
      </div>
    </div>
  );
}

function TableBlock({ content, headers, rows }) {
  // Format 1: Old format with explicit headers[] and rows[][]
  if (headers && rows) {
    return (
      <div className="my-4 -mx-2 sm:mx-0">
        <div
          className="w-full max-w-full overflow-x-auto touch-pan-x rounded-xl border border-[var(--border-card)] text-xs sm:text-sm"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <table className="min-w-max w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-main)]">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className="p-2.5 sm:p-3 font-semibold text-[var(--text-main)] border-b border-[var(--border-card)] whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-card)]">
              {rows.map((row, i) => (
                <tr key={i} className="bg-[var(--bg-card)] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="p-2.5 sm:p-3 text-[var(--text-secondary)] align-top whitespace-normal break-words">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Format 2: Markdown table string (e.g. "| Header | ... |\n|------|...|\n| cell |...")
  if (typeof content === 'string' && content.includes('|')) {
    const lines = content.trim().split('\n').filter(l => l.trim());
    const parseRow = (line) => line.split('|').map(c => c.trim()).filter(Boolean);
    const headerCells = parseRow(lines[0] || '');
    // Skip separator row (line with dashes)
    const dataRows = lines.slice(2).map(parseRow);

    return (
      <div className="my-4 -mx-2 sm:mx-0">
        <div
          className="w-full max-w-full overflow-x-auto touch-pan-x rounded-xl border border-[var(--border-card)] text-xs sm:text-sm"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <table className="min-w-max w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-main)]">
                {headerCells.map((h, i) => (
                  <th
                    key={i}
                    className="p-2.5 sm:p-3 font-semibold text-[var(--text-main)] border-b border-[var(--border-card)] whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-card)]">
              {dataRows.map((row, i) => (
                <tr key={i} className="bg-[var(--bg-card)] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="p-2.5 sm:p-3 text-[var(--text-secondary)] align-top whitespace-normal break-words">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Format 3: Array of objects (e.g. [{Kitab: "Taurat", Nabi: "Musa"}])
  if (Array.isArray(content) && content.length > 0) {
    const keys = Object.keys(content[0]);
    return (
      <div className="my-4 -mx-2 sm:mx-0">
        <div
          className="w-full max-w-full overflow-x-auto touch-pan-x rounded-xl border border-[var(--border-card)] text-xs sm:text-sm"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <table className="min-w-max w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--bg-main)]">
                {keys.map((k, i) => (
                  <th
                    key={i}
                    className="p-2.5 sm:p-3 font-semibold text-[var(--text-main)] border-b border-[var(--border-card)] whitespace-nowrap"
                  >
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-card)]">
              {content.map((row, i) => (
                <tr key={i} className="bg-[var(--bg-card)] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  {keys.map((k, j) => (
                    <td key={j} className="p-2.5 sm:p-3 text-[var(--text-secondary)] align-top whitespace-normal break-words">
                      {row[k]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
}

function ContentBlock({ item }) {
  if (item.type === 'text') {
    return <p className="text-[var(--text-main)] leading-relaxed text-sm sm:text-[15px] my-2.5 sm:my-3">{item.content || item.value}</p>;
  }
  if (item.type === 'highlight') {
    return <HighlightBlock>{item.content || item.value}</HighlightBlock>;
  }
  if (item.type === 'arabic') {
    // Support both { arabic, transliteration } and { content } formats
    const text = item.arabic || item.content || item.value;
    return <ArabicBlock arabic={text} transliteration={item.transliteration} translation={item.translation} />;
  }
  if (item.type === 'table') {
    return <TableBlock content={item.content} headers={item.headers} rows={item.rows} />;
  }
  if (item.type === 'list') {
    const Tag = item.ordered ? 'ol' : 'ul';
    return (
      <Tag className={`my-2 space-y-1.5 pl-4 sm:pl-5 ${item.ordered ? 'list-decimal' : 'list-disc'} text-[var(--text-secondary)]`}>
        {item.items.map((li, i) => {
          const parts = li.split(/\*\*(.*?)\*\*/g);
          return (
            <li key={i} className="text-xs sm:text-sm leading-relaxed">
              {parts.map((part, j) =>
                j % 2 === 1 ? <strong key={j} className="font-semibold text-[var(--text-main)]">{part}</strong> : part
              )}
            </li>
          );
        })}
      </Tag>
    );
  }
  return null;
}

export default function TopicDetail() {
  const { name, topicId } = useParams();
  const navigate = useNavigate();
  const {
    notes,
    setNotes,
    completedTopics,
    toggleTopicComplete,
    isTopicSidebarOpen,
    setIsTopicSidebarOpen
  } = useAppStore();

  const [localNote, setLocalNote] = useState('');
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const subject = useMemo(() => subjectsData.find((s) => s.slug === name), [name]);
  const topicIndex = useMemo(() => subject?.topics?.findIndex((t) => t.id === topicId), [subject, topicId]);
  const topic = subject?.topics?.[topicIndex];

  const prevTopic = topicIndex > 0 ? subject?.topics?.[topicIndex - 1] : null;
  const nextTopic = topicIndex < (subject?.topics?.length - 1) ? subject?.topics?.[topicIndex + 1] : null;

  const completedTopicIds = completedTopics[subject?.slug] || [];
  const isCompleted = completedTopicIds.includes(topicId);

  useEffect(() => {
    setLocalNote(notes || "- Tulis catatan pribadimu di sini\n- Bisa menggunakan *markdown*");
    window.scrollTo(0, 0);
  }, [notes, topicId]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  const saveNotes = () => {
    setNotes(localNote);
    setIsEditingNote(false);
  };

  if (!subject || !topic) {
    return <div className="p-6 sm:p-10 font-medium text-[var(--text-secondary)]">Topik tidak ditemukan.</div>;
  }

  const progressPercent = subject.topics?.length > 0
    ? (completedTopicIds.length / subject.topics.length) * 100
    : 0;

  return (
    <div className="w-full animation-fade-in pb-16 sm:pb-20 flex flex-col lg:flex-row gap-6 sm:gap-8 relative">
      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(isTopicSidebarOpen || isDesktop) && (
          <>
            {isTopicSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsTopicSidebarOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              />
            )}
            <motion.aside
              initial={isTopicSidebarOpen ? { x: -300 } : false}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className={`fixed inset-y-0 left-0 w-[280px] sm:w-80 bg-[var(--bg-card)] border-r border-[var(--border-card)] z-50 lg:z-0 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] overflow-y-auto p-4 sm:p-6 transition-transform lg:translate-x-0 ${isTopicSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8 lg:hidden">
                <h3 className="font-black text-base sm:text-lg text-[var(--text-main)] uppercase tracking-tighter">Daftar Isi</h3>
                <button onClick={() => setIsTopicSidebarOpen(false)} className="p-2 bg-transparent border-0 cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <X size={20} />
                </button>
              </div>

              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-inner shrink-0" style={{ background: `${subject.color}25`, color: subject.color }}>
                    <BookOpen size={20} strokeWidth={2.5} className="sm:hidden" />
                    <BookOpen size={24} strokeWidth={2.5} className="hidden sm:block" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-black text-xs sm:text-sm text-[var(--text-main)] m-0 leading-tight truncate uppercase tracking-tight">{subject.title}</h4>
                    <p className="text-[9px] sm:text-[10px] font-black text-[var(--text-muted)] m-0 mt-1 uppercase tracking-widest">{completedTopicIds.length} / {subject.topics.length} SELESAI</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-[var(--bg-alternate)] rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    className="h-full bg-[var(--accent-blue)] shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                  />
                </div>
              </div>

              <nav className="space-y-1">
                {subject.topics.map((t) => {
                  const isActive = t.id === topicId;
                  const isDone = completedTopicIds.includes(t.id);
                  return (
                    <Link
                      key={t.id}
                      to={`/subject/${subject.slug}/topic/${t.id}`}
                      onClick={() => setIsTopicSidebarOpen(false)}
                      className={`group flex items-center gap-3 p-2.5 sm:p-3 rounded-xl transition-all duration-300 no-underline min-h-[44px] ${isActive ? 'bg-[var(--accent-blue)] text-white shadow-lg shadow-blue-500/20' : 'text-[var(--text-secondary)] hover:bg-[var(--bg-alternate)] hover:text-[var(--text-main)]'}`}
                    >
                      <div className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center border-2 transition-colors ${isActive ? 'border-white/40' : (isDone ? 'border-[var(--accent-emerald)] bg-[var(--accent-emerald)]' : 'border-[var(--border-card)]')}`}>
                        {isDone ? <CheckCircle size={12} className="text-white sm:hidden" /> : <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-current opacity-20'}`} />}
                        {isDone ? <CheckCircle size={14} className="text-white hidden sm:block" /> : null}
                      </div>
                      <span className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-white' : ''}`}>{t.title}</span>
                      {isActive && <motion.div layoutId="active-indicator" className="ml-auto w-1 h-5 bg-white rounded-full" />}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex-1 min-w-0 max-w-[800px] mx-auto w-full">
        {/* Top Navigation Bar */}
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTopicSidebarOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alternate)] transition-all cursor-pointer shrink-0"
              aria-label="Buka daftar isi"
              type="button"
            >
              <Menu size={18} />
            </button>

            <Link
              to={`/subject/${subject.slug}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-colors no-underline min-h-[44px]"
            >
              <ArrowLeft size={15} />
              <span>Kembali ke Modul</span>
            </Link>
          </div>

          <button
            onClick={() => toggleTopicComplete(subject.slug, topicId)}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer border min-h-[44px] shrink-0 ${isCompleted ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-card)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]'}`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 size={15} />
                <span>Selesai Dipelajari</span>
              </>
            ) : (
              <>
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-current opacity-40" />
                <span>Tandai Selesai</span>
              </>
            )}
          </button>
        </div>

        {/* Topic Header */}
        <div className="mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl mb-4 sm:mb-6 shadow-[var(--shadow-md)]"
            style={{ background: `${subject.color}25`, color: subject.color }}
          >
            {topic.icon ? <span className="text-2xl sm:text-4xl">{topic.icon}</span> : <BookOpen size={24} strokeWidth={2.5} className="sm:hidden" />}
            {topic.icon ? null : <BookOpen size={32} strokeWidth={2.5} className="hidden sm:block" />}
          </motion.div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight m-0 mb-3 sm:mb-4">
            {topic.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[var(--bg-alternate)] text-[var(--text-main)] border border-[var(--border-card)]">
              Materi Wajib
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-card)]" />
            <span className="text-xs sm:text-sm text-[var(--text-muted)] font-bold uppercase tracking-tight">
              Bagian dari {subject.title}
            </span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4 sm:space-y-6">
          {topic.sections && topic.sections.length > 0 ? (
            topic.sections.map((section, idx) => (
              <SectionWrapper key={idx} title={section.subtitle} icon={BookOpen}>
                <div className="space-y-3 sm:space-y-4">
                  {section.content.map((item, i) => (
                    <ContentBlock key={i} item={item} />
                  ))}
                </div>
              </SectionWrapper>
            ))
          ) : (
            <SectionWrapper title="Ringkasan Utama" icon={BookOpen}>
              <div className="py-8 sm:py-10 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen size={22} className="text-slate-400 sm:hidden" />
                  <BookOpen size={24} className="text-slate-400 hidden sm:block" />
                </div>
                <p className="text-[var(--text-main)] font-medium m-0 text-base sm:text-lg">
                  Materi ini sedang disiapkan.
                </p>
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm mt-2">
                  Cek kembali beberapa saat lagi untuk konten lengkap.
                </p>
              </div>
            </SectionWrapper>
          )}

          {/* Visualization Specifics for Math Subjects */}
          {topic.id === 'teorema-pythagoras' && (
            <SectionWrapper title="Visualisasi Interaktif" icon={Presentation}>
              <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl overflow-hidden">
                <PythagorasVisualizer />
              </div>
            </SectionWrapper>
          )}

          {(topic.id === 'bangun-ruang-kubus' || topic.id === 'bangun-ruang-balok') && (
            <SectionWrapper title="Visualisasi 3D" icon={Presentation}>
              <div className="h-[280px] sm:h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-[var(--border-card)] bg-slate-900 shadow-inner">
                <Kubus3D />
              </div>
              <p className="text-xs sm:text-sm text-center text-[var(--text-secondary)] mt-3 sm:mt-4 font-medium italic">
                Gunakan mouse/touch untuk memutar bangun ruang diatas.
              </p>
            </SectionWrapper>
          )}

          {topic.id === 'alat-ukur-panjang' && (
            <SectionWrapper title="Visualisasi Interaktif" icon={Presentation}>
              <div className="overflow-x-auto">
                <VernierCaliper />
              </div>
            </SectionWrapper>
          )}

          {/* Private Notes block */}
          <SectionWrapper title="Catatan Belajar Saya" icon={Edit3}>
            {isEditingNote ? (
              <div className="flex flex-col gap-3 sm:gap-4">
                <textarea
                  value={localNote}
                  onChange={(e) => setLocalNote(e.target.value)}
                  className="w-full min-h-[200px] sm:min-h-[250px] p-4 sm:p-5 bg-[#f6f5f4] dark:bg-black/20 border border-[var(--border-card)] rounded-xl text-sm sm:text-[15px] text-[var(--text-main)] font-mono focus:ring-2 focus:ring-[var(--accent-blue)] focus:outline-none transition-shadow"
                  placeholder="Tulis apa yang kamu pelajari di sini... (Mendukung format Markdown)"
                />
                <div className="flex flex-col xs:flex-row justify-end gap-2 sm:gap-3">
                  <button
                    onClick={() => setIsEditingNote(false)}
                    className="px-5 sm:px-6 py-2.5 bg-transparent text-[var(--text-secondary)] font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border-0 min-h-[44px]"
                  >
                    Batal
                  </button>
                  <button
                    onClick={saveNotes}
                    className="px-6 sm:px-8 py-2.5 bg-[var(--accent-blue)] text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all border-0 min-h-[44px]"
                  >
                    <Save size={17} /> Simpan Catatan
                  </button>
                </div>
              </div>
            ) : (
              <div className="group relative">
                <div className="prose prose-sm dark:prose-invert max-w-none mb-4 sm:mb-6 p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/30 rounded-2xl min-h-[100px] sm:min-h-[120px] border border-transparent group-hover:border-[var(--border-card)] transition-colors">
                  <ReactMarkdown>{localNote}</ReactMarkdown>
                </div>
                <button
                  onClick={() => setIsEditingNote(true)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--bg-card)] hover:bg-slate-50 dark:hover:bg-slate-800 text-[var(--text-main)] text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer border border-[var(--border-card)] shadow-sm flex items-center gap-2 min-h-[44px]"
                >
                  <Edit3 size={15} /> Edit Catatan
                </button>
              </div>
            )}
          </SectionWrapper>
        </div>

        {/* Bottom Navigation: Prev/Next Topic */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[var(--border-card)] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {prevTopic ? (
            <Link
              to={`/subject/${subject.slug}/topic/${prevTopic.id}`}
              className="w-full sm:flex-1 p-4 sm:p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--accent-blue)] transition-all group no-underline"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors shrink-0">
                  <ChevronLeft size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest m-0 mb-0.5 sm:mb-1">Sebelumnya</p>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)] m-0 line-clamp-1">{prevTopic.title}</h4>
                </div>
              </div>
            </Link>
          ) : <div className="hidden sm:block flex-1" />}

          {nextTopic ? (
            <Link
              to={`/subject/${subject.slug}/topic/${nextTopic.id}`}
              className="w-full sm:flex-1 p-4 sm:p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)] hover:border-[var(--accent-blue)] transition-all group no-underline sm:text-right"
            >
              <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest m-0 mb-0.5 sm:mb-1">Berikutnya</p>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)] m-0 line-clamp-1">{nextTopic.title}</h4>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-blue)] transition-colors shrink-0">
                  <ChevronRight size={18} />
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to={`/subject/${subject.slug}`}
              className="w-full sm:flex-1 p-4 sm:p-5 rounded-2xl border border-[var(--border-card)] bg-[var(--accent-blue)] text-white hover:opacity-90 transition-all group no-underline text-center"
            >
              <h4 className="text-sm sm:text-base font-bold m-0">Selesai Modul</h4>
              <p className="text-[10px] sm:text-xs font-medium opacity-80 m-0 mt-1">Kembali ke daftar topik</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}