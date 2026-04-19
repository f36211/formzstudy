import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopicCard({ title, description, icon: Icon, color, path, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={path} style={{ display: 'block' }}>
        <div 
          className="glass-panel hover-scale" 
          style={{ 
            padding: '1.5rem', 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background glow effect */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: color,
            filter: 'blur(50px)',
            opacity: 0.2
          }} />

          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: `${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <Icon size={20} color={color} />
          </div>

          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>{title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {description}
          </p>

          <div style={{ 
            marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)'
          }}>
            <span style={{ fontSize: '0.85rem', color: color, fontWeight: 500 }}>Start Learning</span>
            <ArrowRight size={16} color={color} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
