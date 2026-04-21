import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BrainCircuit, Calendar, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingActionMenu from '../components/FloatingActionMenu';
import useAppStore from '../store/useAppStore';

export default function SidebarLayout() {
  const location = useLocation();
  const { darkModeEnabled, fontSize, displayName } = useAppStore();

  // Apply / remove the .dark class on <html> whenever the store value changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkModeEnabled) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkModeEnabled]);

  // Apply font-size class on <html> whenever the store value changes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-size-small', 'font-size-base', 'font-size-large');
    root.classList.add(`font-size-${fontSize}`);
  }, [fontSize]);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Mata Pelajaran', path: '/#subjects', icon: BookOpen },
    { name: 'Quiz Latihan', path: '/quiz', icon: BrainCircuit },
    { name: 'Jadwal Ujian', path: '/planner', icon: Calendar },
    { name: 'Pengaturan', path: '/settings', icon: Settings },
  ];

  // Initials from display name
  const initials = (displayName || 'SP')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] w-full antialiased font-sans">
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[var(--bg-card)] border-t border-[var(--border-card)] z-50 px-6 py-3 flex justify-between items-center md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {[
          { path: '/', icon: LayoutDashboard, name: 'Home' },
          { path: '/quiz', icon: BrainCircuit, name: 'Quiz' },
          { path: '/planner', icon: Calendar, name: 'Jadwal' },
          { path: '/settings', icon: Settings, name: 'Setelan' },
        ].map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 no-underline transition-colors ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)]'}`}
            >
              <div className={`p-2 rounded-xl ${isActive ? 'bg-[var(--accent-blue-soft)]' : ''}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Navigation */}
      <aside className="w-[260px] flex-shrink-0 bg-[var(--bg-card)] border-r border-[var(--border-card)] h-screen sticky top-0 flex flex-col pt-10 pb-8 px-4 hidden md:flex shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-indigo)] flex items-center justify-center text-white shadow-lg shrink-0">
            <BookOpen size={18} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-[var(--text-main)] uppercase leading-none">
            Formz Study
          </h1>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path.split('#')[0]) &&
                  item.path.split('#')[0] !== '/';
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 relative no-underline group ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alternate)]'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarTab"
                    className="absolute inset-0 bg-[var(--accent-blue-soft)] rounded-xl z-0 border border-[var(--accent-blue)]/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className={`relative z-10 transition-colors ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]'}`}
                />
                <span className="relative z-10 uppercase tracking-wide text-xs">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Footer */}
        <div className="mt-auto px-1 pt-5 border-t border-[var(--border-card)]">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--bg-alternate)] border border-[var(--border-card)]">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-black text-xs shadow-inner shrink-0">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="m-0 text-sm font-black text-[var(--text-main)] truncate tracking-tight">
                {displayName}
              </p>
              <p className="m-0 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                Mode Belajar
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col pt-6 md:pt-10 pb-24 md:pb-12">
        <div className="w-full min-w-0 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <Outlet />
        </div>
      </main>

      {/* Floating Action Menu */}
      <FloatingActionMenu />
    </div>
  );
}
