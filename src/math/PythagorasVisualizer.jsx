import { useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function PythagorasVisualizer() {
  const [sideA, setSideA] = useState(3);
  const [sideB, setSideB] = useState(4);
  
  // Constrain inputs
  const a = Math.max(1, Math.min(20, sideA));
  const b = Math.max(1, Math.min(20, sideB));
  const c = Math.sqrt(a * a + b * b).toFixed(2);

  // Scaled dimensions for UI visualization
  const scale = 150 / Math.max(a, b);
  const visualA = a * scale;
  const visualB = b * scale;

  return (
    <MathJaxContext>
      <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-[#1f1f1f] p-6 rounded-xl border border-[var(--border-card)] shadow-sm">
        
        {/* Controls */}
        <div className="flex-1 w-full space-y-6">
          <h4 className="text-lg font-bold m-0 text-[var(--text-main)]">Pengaturan Sisi</h4>
          
          <div className="space-y-4">
            <div>
              <label className="flex justify-between text-sm font-semibold mb-1 text-[var(--text-secondary)]">
                <span>Sisi Tegak (a)</span>
                <span>{a}</span>
              </label>
              <input 
                type="range" 
                min="1" max="20" 
                value={a} 
                onChange={(e) => setSideA(Number(e.target.value))}
                className="w-full accent-[var(--accent-blue)] cursor-pointer"
              />
            </div>
            
            <div>
              <label className="flex justify-between text-sm font-semibold mb-1 text-[var(--text-secondary)]">
                <span>Sisi Mendatar (b)</span>
                <span>{b}</span>
              </label>
              <input 
                type="range" 
                min="1" max="20" 
                value={b} 
                onChange={(e) => setSideB(Number(e.target.value))}
                className="w-full accent-[var(--accent-blue)] cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-[#f6f5f4] dark:bg-black/20 p-4 rounded-lg border border-[var(--border-card)]">
            <h4 className="text-sm font-bold m-0 mb-2">Perumusan</h4>
            <div className="text-lg text-[var(--text-main)] font-semibold text-center overflow-x-auto">
              <MathJax>{`\\[ a^2 + b^2 = c^2 \\]`}</MathJax>
              <MathJax>{`\\[ ${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${a*a + b*b} \\]`}</MathJax>
              <MathJax>{`\\[ c = \\sqrt{${a*a + b*b}} \\approx ${c} \\]`}</MathJax>
            </div>
          </div>
        </div>

        {/* Dynamic Visualization */}
        <div className="flex-1 w-full flex justify-center items-center h-64 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-[#1a1a1a]">
          <svg width="250" height="250" viewBox="0 0 250 250" className="drop-shadow-md">
            <g transform={`translate(${125 - visualB/2}, ${125 + visualA/2})`}>
              {/* Triangle path */}
              <path 
                d={`M 0 0 L ${visualB} 0 L 0 ${-visualA} Z`} 
                fill="var(--accent-blue)" 
                fillOpacity="0.2"
                stroke="var(--accent-blue)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              {/* Right angle indicator */}
              <path 
                d="M 15 0 L 15 -15 L 0 -15" 
                fill="none" 
                stroke="var(--accent-blue)" 
                strokeWidth="2"
              />
              {/* Labels */}
              <text x={visualB/2} y="20" textAnchor="middle" fill="var(--text-main)" fontSize="14" fontWeight="bold">b = {b}</text>
              <text x="-20" y={-visualA/2} textAnchor="middle" fill="var(--text-main)" fontSize="14" fontWeight="bold">a = {a}</text>
              <text x={visualB/2 + 15} y={-visualA/2 - 10} textAnchor="middle" fill="var(--accent-blue)" fontSize="14" fontWeight="bold">c ≈ {c}</text>
            </g>
          </svg>
        </div>
      </div>
    </MathJaxContext>
  );
}
