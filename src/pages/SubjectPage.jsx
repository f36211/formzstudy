import { motion } from 'framer-motion';
import { MathJax } from 'better-react-mathjax';
import PythagorasVisualizer from '../math/PythagorasVisualizer';
import Kubus3D from '../math/Kubus3D';

export default function SubjectPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <header>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <span style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Mathematics
          </span>
          <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>Geometry & Algebra</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px' }}>
            Interactive visualizations for SMP level mathematics. Explore 3D structures and formulas dynamically.
          </p>
        </motion.div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Pythagoras Section */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Pythagoras Theorem</h2>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', textAlign: 'center', marginBottom: '2rem' }}>
            <MathJax style={{ fontSize: '1.5rem' }}>
              {"\\[ a^2 + b^2 = c^2 \\]"}
            </MathJax>
          </div>
          <div style={{ flex: 1, minHeight: '300px', position: 'relative' }}>
            <PythagorasVisualizer />
          </div>
        </div>

        {/* 3D Geometry Section */}
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bangun Ruang (3D)</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Interact with the Kubus below. Drag to rotate, scroll to zoom.
          </p>
          <div style={{ flex: 1, minHeight: '300px', borderRadius: '12px', overflow: 'hidden', background: '#0f172a' }}>
            <Kubus3D />
          </div>
          <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Volume</span>
              <MathJax>{"\\[ V = s^3 \\]"}</MathJax>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Surface Area</span>
              <MathJax>{"\\[ L = 6s^2 \\]"}</MathJax>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
