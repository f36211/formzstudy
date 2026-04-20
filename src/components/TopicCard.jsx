import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopicCard({ title, description, icon: Icon, color, path, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Link to={path} className="block h-full no-underline">
        <div className="glass-panel hover-scale h-full p-4 sm:p-6 flex flex-col relative overflow-hidden">
          {/* Background glow effect */}
          <div
            className="absolute -top-14 -right-14 w-28 h-28 rounded-full opacity-20 pointer-events-none"
            style={{ background: color, filter: 'blur(50px)' }}
          />

          <div
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shrink-0"
            style={{ background: `${color}22` }}
          >
            <Icon size={20} color={color} className="sm:hidden" />
            <Icon size={22} color={color} className="hidden sm:block" />
          </div>

          <h3 className="text-base sm:text-xl font-black tracking-tight text-[var(--text-main)] m-0 mb-2 min-w-0 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] flex-1 mb-5 sm:mb-6 leading-relaxed min-w-0 line-clamp-3">
            {description}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-[11px] sm:text-sm font-black uppercase tracking-widest" style={{ color }}>
              Start Learning
            </span>
            <ArrowRight size={16} color={color} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
