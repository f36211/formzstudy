import React from 'react';
import { motion } from 'framer-motion';

const eras = [
  { era: "Masa Praaksara", desc: "Berburu, bercocok tanam, perundagian. Manusia nomaden hingga menetap.", color: "#8B5CF6", icon: "🌋" },
  { era: "Masa Hindu-Buddha", desc: "Kerajaan Sriwijaya & Majapahit. Akulturasi budaya, pembangunan candi.", color: "#EC4899", icon: "🛕" },
  { era: "Masa Islam", desc: "Masuknya pedagang Arab, Persia, Gujarat. Wali Songo & Kerajaan Demak.", color: "#10B981", icon: "🕌" },
  { era: "Kolonialisme", desc: "Monopoli VOC, Politik Etis Belanda & penjajahan Jepang.", color: "#F59E0B", icon: "⛵" },
  { era: "Kemerdekaan", desc: "Proklamasi 1945, perjuangan diplomasi (Linggajati, Renville, KMB).", color: "#EF4444", icon: "🇮🇩" },
];

export default function SejarahTimeline() {
  return (
    <div className="py-8 relative pl-4 sm:pl-8">
      {/* Vertical Line */}
      <div className="absolute left-[31px] sm:left-[47px] top-6 bottom-6 w-1 bg-slate-200 dark:bg-slate-700/50 rounded-full" />
      
      {eras.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative flex items-start gap-4 sm:gap-6 mb-8 group"
        >
          <div 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[var(--bg-card)] flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-110 shadow-md"
            style={{ backgroundColor: item.color }}
          >
            <span className="text-base sm:text-xl">{item.icon}</span>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/40 p-4 sm:p-5 rounded-2xl flex-1 border border-[var(--border-card)] shadow-sm hover:shadow-md transition-shadow group-hover:border-[var(--accent-blue)]">
            <h4 className="text-base sm:text-lg font-bold text-[var(--text-main)] m-0 mb-1 leading-snug">{item.era}</h4>
            <p className="text-sm font-medium text-[var(--text-secondary)] m-0 leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
