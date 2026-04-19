import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Brain, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MainLayout() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Subjects', path: '/subject/math', icon: BookOpen },
    { name: 'Practice', path: '/practice', icon: Brain },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      {/* Sidebar Navigation */}
      <aside className="glass-panel" style={{
        width: '260px',
        margin: '1.5rem',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: '1.5rem',
        height: 'calc(100vh - 3rem)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }} className="heading-gradient">
            Formz Study
          </h1>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.path} 
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  borderRadius: '12px',
                  color: isActive ? '#f8fafc' : 'var(--text-muted)',
                  background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  position: 'relative',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.2s ease'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: 'absolute',
                      left: 0, top: 0, bottom: 0, right: 0,
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderLeft: '3px solid #6366f1',
                      borderRadius: '12px',
                      zIndex: -1
                    }}
                  />
                )}
                <Icon size={20} color={isActive ? '#818cf8' : 'currentColor'} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div style={{
          marginTop: 'auto',
          padding: '1rem',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#334155' }} />
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>Student Pro</p>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>Class 9 SMP</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem 2rem 2rem 0' }}>
        <Outlet />
      </main>
    </div>
  );
}
