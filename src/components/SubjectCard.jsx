import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SubjectCard({ title, description, icon: Icon, color, slug, index = 0, progress = 0, topics = [] }) {
  const hasMateri = topics && topics.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link to={`/subject/${slug}`} className="block h-full no-underline">
        <div className="h-full bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl shadow-[var(--shadow-soft)] p-6 flex flex-col transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:border-[var(--accent-blue)] group">
          {/* Icon Header */}
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300"
              style={{ background: `${color}25`, color: color }}
            >
              <Icon size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold text-[var(--text-main)] m-0 leading-tight">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] flex-1 mb-8 leading-relaxed font-medium">
            {description}
          </p>

          {/* Progress / Status Indicator */}
          <div className="mt-auto mb-6">
            {!hasMateri ? (
              // Replace generic progress bar with availability badge if empty
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-alternate)] w-fit">
                <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></span>
                <span className="text-xs font-bold text-[var(--text-muted)]">Segera Hadir</span>
              </div>
            ) : (
              // Show actual progress if there is content or progress
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Progres</span>
                  <span className="text-xs font-black text-[var(--text-main)] bg-[var(--bg-alternate)] px-2 py-0.5 rounded">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-[var(--bg-alternate)] rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ backgroundColor: color }}
                  />
                </div>
              </>
            )}
          </div>

          {/* Action */}
          <div className="flex items-center justify-between pt-4 border-t border-[var(--border-card)] group-hover:border-transparent transition-colors">
            <span className="text-sm font-black uppercase tracking-widest transition-colors" style={{ color }}>
              Pelajari
            </span>
            <div className="w-8 h-8 rounded-full bg-[var(--bg-alternate)] flex items-center justify-center text-[var(--text-muted)] group-hover:bg-[var(--accent-blue)] group-hover:text-white transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
