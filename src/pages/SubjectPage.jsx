import { motion } from 'framer-motion';
import { MathJax } from 'better-react-mathjax';
import PythagorasVisualizer from '../math/PythagorasVisualizer';
import Kubus3D from '../math/Kubus3D';

export default function SubjectPage() {
  return (
    <div className="w-full animation-fade-in pb-20">
      <header className="mb-8 sm:mb-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Mathematics
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-[var(--text-main)] m-0 mt-3">
            Geometry & Algebra
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] m-0 mt-3 max-w-2xl leading-relaxed font-medium">
            Interactive visualizations for SMP level mathematics. Explore 3D structures and formulas dynamically.
          </p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Pythagoras Section */}
        <div className="glass-panel p-5 sm:p-8 flex flex-col">
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-[var(--text-main)] m-0 mb-4">
            Pythagoras Theorem
          </h2>
          <div className="p-4 rounded-2xl text-center mb-6 bg-black/5 dark:bg-white/5 border border-[var(--border-card)]">
            <MathJax className="text-xl sm:text-2xl">
              {"\\[ a^2 + b^2 = c^2 \\]"}
            </MathJax>
          </div>
          <div className="flex-1 min-h-[260px] sm:min-h-[320px] relative">
            <PythagorasVisualizer />
          </div>
        </div>

        {/* 3D Geometry Section */}
        <div className="glass-panel p-5 sm:p-8 flex flex-col">
          <h2 className="text-lg sm:text-xl font-black tracking-tight text-[var(--text-main)] m-0 mb-3">
            Bangun Ruang (3D)
          </h2>
          <p className="text-sm text-[var(--text-secondary)] m-0 mb-6 font-medium leading-relaxed">
            Interact with the Kubus below. Drag to rotate, scroll to zoom.
          </p>
          <div className="flex-1 min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-slate-900 border border-[var(--border-card)] shadow-inner">
            <Kubus3D />
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl border border-[var(--border-card)] bg-white/5 dark:bg-black/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Volume</span>
              <div className="mt-2">
                <MathJax>{"\\[ V = s^3 \\]"}</MathJax>
              </div>
            </div>
            <div className="p-4 rounded-2xl border border-[var(--border-card)] bg-white/5 dark:bg-black/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Surface Area</span>
              <div className="mt-2">
                <MathJax>{"\\[ L = 6s^2 \\]"}</MathJax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
