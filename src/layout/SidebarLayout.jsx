import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BrainCircuit, Calendar, Settings, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingActionMenu from '../components/FloatingActionMenu';

export default function SidebarLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Bahasa Indonesia', path: '/subject/bahasa-indonesia', icon: BookOpen },
    { name: 'Matematika', path: '/subject/matematika', icon: BookOpen },
    { name: 'PAI', path: '/subject/pai', icon: BookOpen },
    { name: 'Quiz Latihan', path: '/quiz', icon: BrainCircuit },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] w-full antialiased font-sans">
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[var(--bg-card)] border-t border-[var(--border-card)] z-50 px-6 py-3 flex justify-between items-center md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {[
          { path: '/', icon: LayoutDashboard, name: 'Home' },
          { path: '/quiz', icon: BrainCircuit, name: 'Quiz' },
          { path: '/settings', icon: Settings, name: 'Settings' }
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
      <aside className="w-[280px] flex-shrink-0 bg-[var(--bg-card)] border-r border-[var(--border-card)] h-screen sticky top-0 flex flex-col pt-10 pb-8 px-5 hidden md:flex shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3 px-2 mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-indigo)] flex items-center justify-center text-white shadow-lg">
            <BookOpen size={22} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-[var(--text-main)] uppercase">
            Formz Study
          </h1>
        </div>
        
        <nav className="flex flex-col gap-1.5 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 relative no-underline group ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alternate)]'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarTab"
                    className="absolute inset-0 bg-[var(--accent-blue-soft)] rounded-xl z-0 border border-[var(--accent-blue)]/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={20} className={`relative z-10 transition-colors ${isActive ? 'text-[var(--accent-blue)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]'}`} />
                <span className="relative z-10 uppercase tracking-wide text-xs">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto px-2 pt-6 border-t border-[var(--border-card)]">
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-[var(--bg-alternate)] border border-[var(--border-card)]">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-black shadow-inner">
              SP
            </div>
            <div className="min-w-0">
              <p className="m-0 text-sm font-black text-[var(--text-main)] truncate tracking-tight">Student Pro</p>
              <p className="m-0 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">Premium Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-x-hidden pt-6 md:pt-10 pb-24 md:pb-12">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12">
          <Outlet />
        </div>
      </main>
      
      {/* Floating Action Menu */}
      <FloatingActionMenu />
    </div>
  );
}
