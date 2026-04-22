import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown, ArrowRight, User } from 'lucide-react';

export default function SocialMobilityVisualizer() {
  const [activeAnim, setActiveAnim] = useState(null);

  const animations = {
    up: { y: -100, scale: 1.2, backgroundColor: '#10B981', color: '#fff' },
    down: { y: 100, scale: 0.8, backgroundColor: '#EF4444', color: '#fff' },
    horizontal: { x: 100, backgroundColor: '#F59E0B', color: '#fff' },
    none: { y: 0, x: 0, scale: 1, backgroundColor: '#F8FAFC', color: '#1E293B' },
  };

  const currentDesc = {
    up: "Vertikal Naik: Bapak Budi dipromosikan dari karyawan biasa menjadi manajer.",
    down: "Vertikal Turun: Seorang pengusaha yang mengalami kebangkrutan.",
    horizontal: "Horizontal: Ibu Ani, guru Sosiologi di SMA X, pindah mengajar ke SMA Y.",
    none: "Pilih tombol untuk melihat animasi mobilitas.",
  };

  return (
    <div className="w-full flex justify-center flex-col items-center py-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-10 w-full max-w-lg">
        <button 
          onClick={() => setActiveAnim('up')}
          className="flex-1 min-w-[120px] bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-emerald-300"
        >
          <ArrowUp size={18} /> Vertikal Naik
        </button>
        <button 
          onClick={() => setActiveAnim('horizontal')}
          className="flex-1 min-w-[120px] bg-amber-100 hover:bg-amber-200 text-amber-700 px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-amber-300"
        >
          <ArrowRight size={18} /> Horizontal
        </button>
        <button 
          onClick={() => setActiveAnim('down')}
          className="flex-1 min-w-[120px] bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-red-300"
        >
          <ArrowDown size={18} /> Vertikal Turun
        </button>
      </div>

      {/* Animation Canvas */}
      <div className="relative w-full max-w-[300px] h-[300px] bg-slate-100 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center mb-8">
        {/* Helper Lines */}
        <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] w-[2px] bg-slate-200 dark:bg-slate-700" />
        <div className="absolute left-0 right-0 top-1/2 -mt-[1px] h-[2px] bg-slate-200 dark:bg-slate-700" />
        
        {/* Animated Avatar */}
        <motion.div
          animate={activeAnim ? animations[activeAnim] : animations.none}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 border-slate-200 dark:border-slate-600 bg-white"
        >
          <User size={32} />
        </motion.div>

        {/* Start button to reset */}
        {activeAnim && (
          <button 
            onClick={() => setActiveAnim(null)}
            className="absolute top-3 right-3 text-xs font-bold text-slate-500 hover:text-slate-700 bg-white dark:bg-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-600 cursor-pointer shadow-sm z-20"
          >
            Reset
          </button>
        )}
      </div>

      {/* Description */}
      <div className="min-h-[60px] text-center w-full max-w-sm px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeAnim}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[var(--text-main)] font-medium m-0 leading-relaxed"
          >
            {activeAnim ? currentDesc[activeAnim] : currentDesc.none}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
