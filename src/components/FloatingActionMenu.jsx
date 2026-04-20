import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, BrainCircuit, BookOpen, List } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAppStore from '../store/useAppStore';

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setIsTopicSidebarOpen } = useAppStore();

  // Extract subject slug from the current path
  const pathParts = location.pathname.split('/');
  const isSubjectPage = pathParts[1] === 'subject' && pathParts[2];
  const isTopicPage = isSubjectPage && pathParts[3] === 'topic';
  const subjectSlug = isSubjectPage ? pathParts[2] : null;

  // Only render on subject or topic detail pages
  if (!isSubjectPage) return null;

  const actions = [];

  if (isTopicPage) {
    // On a topic detail page — offer to toggle sidebar on mobile
    actions.push({
      name: 'Daftar Isi',
      icon: List,
      onClick: () => {
        setIsTopicSidebarOpen(true);
        setIsOpen(false);
      },
    });

    // Offer to go back to subject overview
    actions.push({
      name: 'Kembali ke Subjek',
      icon: BookOpen,
      onClick: () => navigate(`/subject/${subjectSlug}`),
    });
  }

  // Always offer quiz on subject pages
  actions.push({
    name: 'Mulai Kuis',
    icon: BrainCircuit,
    onClick: () => navigate(`/quiz/${subjectSlug}`),
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={[
        "fixed bottom-24 md:bottom-8 z-50 flex flex-col items-end",
        // On topic pages, put the FAB on the left on mobile so it doesn't cover table right columns.
        isTopicPage ? "left-6 right-auto md:left-auto md:right-8" : "right-6 md:right-8",
      ].join(" ")}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`flex flex-col gap-3 mb-5 ${isTopicPage ? 'items-start md:items-end' : 'items-end'}`}
          >
            {actions.map((action, i) => (
              <motion.button
                key={action.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                onClick={() => { action.onClick(); setIsOpen(false); }}
                className="flex items-center gap-4 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl px-5 py-3 hover:bg-[var(--bg-alternate)] transition-all cursor-pointer shadow-[var(--shadow-lg)] group"
              >
                <span className="text-sm font-black text-[var(--text-main)] uppercase tracking-wider group-hover:text-[var(--accent-blue)]">
                  {action.name}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-blue-soft)] text-[var(--accent-blue)] flex items-center justify-center group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-colors">
                  <action.icon size={18} strokeWidth={2.5} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-[var(--accent-blue)] text-white rounded-2xl flex items-center justify-center cursor-pointer border-0 shadow-[var(--shadow-lg)] relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative z-10"
        >
          <Plus size={32} strokeWidth={3} />
        </motion.div>
      </motion.button>
    </div>
  );
}
