import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Trash2, 
  LogOut, 
  Type, 
  Globe, 
  CheckCircle2,
  Database,
  CloudLightning
} from 'lucide-react';
import useAppStore from '../store/useAppStore';

export default function Settings() {
  const { 
    fontSize, 
    setFontSize, 
    resetAllData, 
    resetProgress,
    darkModeEnabled,
    toggleDarkMode
  } = useAppStore();

  const handleResetProgress = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus semua progres belajar dan skor kuis? Tindakan ini tidak dapat dibatalkan.')) {
      resetProgress();
      alert('Progres berhasil direset.');
    }
  };

  const handleResetAll = () => {
    if (window.confirm('PERINGATAN: Ini akan menghapus SEMUA data termasuk catatan, tugas planner, dan pengaturan. Anda yakin?')) {
      resetAllData();
      alert('Semua data telah dihapus.');
      window.location.reload();
    }
  };

  return (
    <div className="w-full animation-fade-in pb-20">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-[var(--text-main)] leading-tight m-0 mb-3">
          Pengaturan
        </h1>
        <p className="text-lg font-bold text-[var(--text-muted)] m-0">
          Kelola preferensi akun dan personalisasi aplikasi.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <SettingSection title="Profil Belajar" icon={User} description="Informasi identitas dan akun Anda.">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-indigo)] flex items-center justify-center text-white text-3xl font-black shadow-lg">
                  SP
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[var(--bg-card)] border border-[var(--border-card)] p-1.5 rounded-lg shadow-sm">
                  <Palette size={14} className="text-[var(--accent-blue)]" />
                </div>
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest">Nama Tampilan</label>
                  <input 
                    type="text" 
                    defaultValue="Student Pro"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-main)] text-[var(--text-main)] font-bold outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 focus:border-[var(--accent-blue)] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    defaultValue="student.pro@formz.edu"
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-alternate)] text-[var(--text-muted)] font-medium outline-none cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </SettingSection>

          {/* Appearance Section */}
          <SettingSection title="Tampilan & Tema" icon={Palette} description="Sesuaikan bagaimana Formz Study terlihat.">
            <div className="space-y-8">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-[var(--text-main)] m-0">Mode Gelap</h4>
                  <p className="text-xs font-bold text-[var(--text-muted)] m-0 mt-1">Gunakan tema gelap untuk kenyamanan mata.</p>
                </div>
                <button 
                  onClick={toggleDarkMode}
                  className={`w-14 h-8 rounded-full relative transition-colors duration-300 border-0 cursor-pointer ${darkModeEnabled ? 'bg-[var(--accent-blue)]' : 'bg-slate-200'}`}
                >
                  <motion.div 
                    animate={{ x: darkModeEnabled ? 28 : 4 }}
                    className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-md" 
                  />
                </button>
              </div>

              {/* Font Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Type size={16} className="text-[var(--accent-blue)]" />
                  <h4 className="text-sm font-black text-[var(--text-main)] m-0">Ukuran Teks</h4>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'small', label: 'Kecil' },
                    { id: 'base', label: 'Standar' },
                    { id: 'large', label: 'Besar' }
                  ].map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setFontSize(size.id)}
                      className={`py-3 rounded-xl border-2 font-bold text-sm transition-all cursor-pointer ${fontSize === size.id ? 'border-[var(--accent-blue)] bg-[var(--accent-blue-soft)] text-[var(--accent-blue)]' : 'border-[var(--border-card)] bg-[var(--bg-main)] text-[var(--text-muted)] hover:border-slate-300'}`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </SettingSection>

          {/* Danger Zone */}
          <SettingSection title="Zona Bahaya" icon={Shield} description="Hapus data atau reset progres aplikasi.">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <div>
                  <h4 className="text-sm font-black text-amber-600 dark:text-amber-500 m-0">Reset Progres Belajar</h4>
                  <p className="text-xs font-bold text-amber-600/70 m-0 mt-1">Hapus semua tanda selesai pada materi dan skor kuis.</p>
                </div>
                <button 
                  onClick={handleResetProgress}
                  className="px-4 py-2 bg-amber-500 text-white font-bold rounded-xl text-xs border-0 cursor-pointer hover:bg-amber-600 transition-colors shadow-sm"
                >
                  Reset Progres
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                <div>
                  <h4 className="text-sm font-black text-rose-600 dark:text-rose-500 m-0">Hapus Semua Data</h4>
                  <p className="text-xs font-bold text-rose-600/70 m-0 mt-1">Menghapus semua progres, catatan, dan tugas secara permanen.</p>
                </div>
                <button 
                  onClick={handleResetAll}
                  className="px-4 py-2 bg-rose-500 text-white font-bold rounded-xl text-xs border-0 cursor-pointer hover:bg-rose-600 transition-colors shadow-sm"
                >
                  Hapus Permanen
                </button>
              </div>
            </div>
          </SettingSection>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 shadow-[var(--shadow-soft)] sticky top-24">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-emerald-soft)] text-[var(--accent-emerald)] flex items-center justify-center mb-5">
              <CloudLightning size={24} />
            </div>
            <h3 className="text-lg font-black text-[var(--text-main)] m-0 mb-2 uppercase tracking-tight">Formz Cloud Sync</h3>
            <p className="text-sm font-medium text-[var(--text-secondary)] m-0 mb-6 leading-relaxed">
              Catatan, progres, dan skor kuis Anda secara otomatis disinkronkan ke perangkat lain melalui akun Formz Anda.
            </p>
            <div className="flex items-center gap-2 mb-6 text-xs font-bold text-[var(--accent-emerald)] bg-[var(--accent-emerald-soft)] px-3 py-2 rounded-lg w-fit">
              <CheckCircle2 size={14} />
              SINKRONISASI AKTIF
            </div>
            
            <div className="pt-6 border-t border-[var(--border-card)]">
              <div className="flex items-center justify-between text-xs font-bold text-[var(--text-muted)] mb-4 uppercase tracking-widest">
                <span>Informasi App</span>
                <span>v2.4.0</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[var(--bg-alternate)] text-[var(--text-main)] font-black text-sm border-0 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                <LogOut size={16} />
                Keluar Akun
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-lg overflow-hidden relative">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <Globe size={24} className="mb-4 opacity-80" />
            <h4 className="text-base font-black m-0 mb-2">Pilih Bahasa</h4>
            <p className="text-xs font-medium text-blue-100 m-0 mb-4 leading-relaxed">
              Bahasa aplikasi saat ini diatur ke Bahasa Indonesia.
            </p>
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl text-xs border-0 transition-colors">
              Ubah Bahasa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingSection({ title, icon: Icon, description, children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 lg:p-8 shadow-[var(--shadow-soft)]"
    >
      <div className="flex items-start gap-4 mb-8">
        <div className="w-10 h-10 rounded-xl bg-[var(--bg-alternate)] flex items-center justify-center text-[var(--accent-blue)] shrink-0">
          <Icon size={20} />
        </div>
        <div>
          <h2 className="text-xl font-black text-[var(--text-main)] m-0 tracking-tight uppercase">{title}</h2>
          {description && <p className="text-sm font-bold text-[var(--text-muted)] m-0 mt-1">{description}</p>}
        </div>
      </div>
      {children}
    </motion.div>
  );
}
