import { useMemo, useState } from 'react';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/**
 * Simple vernier caliper (jangka sorong) visualization.
 * - Main scale in cm with 1 mm ticks (0.1 cm)
 * - Vernier has 10 divisions => 0.01 cm resolution (matches your quiz explanations)
 */
export default function VernierCaliper() {
  // target reading: mainScale + (vernierIndex * 0.01 cm)
  const [mainScale, setMainScale] = useState(1.2); // cm
  const [vernierIndex, setVernierIndex] = useState(4); // 0..9

  const reading = useMemo(() => {
    const value = mainScale + vernierIndex * 0.01;
    return Math.round(value * 100) / 100;
  }, [mainScale, vernierIndex]);

  const vernierShiftPx = useMemo(() => {
    // 0.01 cm => 1 px in this toy model (visual only)
    return vernierIndex * 10;
  }, [vernierIndex]);

  return (
    <div className="rounded-2xl border border-[var(--border-card)] bg-[var(--bg-alternate)] p-5">
      <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between mb-4">
        <div>
          <p className="m-0 text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">
            Visualisasi Jangka Sorong
          </p>
          <h4 className="m-0 mt-1 text-lg font-black tracking-tight text-[var(--text-main)]">
            Pembacaan: {reading.toFixed(2)} cm
          </h4>
          <p className="m-0 mt-1 text-xs font-medium text-[var(--text-secondary)]">
            Rumus: skala utama + (skala nonius × 0,01 cm)
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
          <label className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
              Skala utama (cm)
            </span>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={mainScale}
              onChange={(e) => setMainScale(clamp(Number(e.target.value || 0), 0, 5))}
              className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-main)] outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
              Nonius (garis ke-?)
            </span>
            <input
              type="number"
              step="1"
              min="0"
              max="9"
              value={vernierIndex}
              onChange={(e) => setVernierIndex(clamp(Math.round(Number(e.target.value || 0)), 0, 9))}
              className="w-full rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] px-3 py-2 text-sm text-[var(--text-main)] outline-none focus:ring-2 focus:ring-[var(--accent-blue)]"
            />
          </label>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg width="820" height="170" viewBox="0 0 820 170" className="block">
          {/* Main scale */}
          <rect x="20" y="40" width="780" height="48" rx="14" fill="var(--bg-card)" stroke="var(--border-card)" />
          <text x="30" y="30" fontSize="11" fill="var(--text-muted)" fontWeight="700">
            Skala Utama (cm)
          </text>

          {/* ticks: 0..50 (0.1 cm each) */}
          {Array.from({ length: 51 }).map((_, i) => {
            const x = 40 + i * 15; // visual scale
            const isCm = i % 10 === 0;
            const h = isCm ? 22 : 12;
            return (
              <g key={i}>
                <line x1={x} y1={78 - h} x2={x} y2={78} stroke="var(--text-muted)" strokeOpacity={isCm ? 0.8 : 0.35} strokeWidth={isCm ? 2 : 1} />
                {isCm && (
                  <text x={x - 4} y={110} fontSize="10" fill="var(--text-muted)" fontWeight="700">
                    {i / 10}
                  </text>
                )}
              </g>
            );
          })}

          {/* Vernier */}
          <text x="30" y="132" fontSize="11" fill="var(--text-muted)" fontWeight="700">
            Skala Nonius (10 div = 0,01 cm)
          </text>
          <g transform={`translate(${80 + mainScale * 150 + vernierShiftPx}, 0)`}>
            <rect x="0" y="105" width="220" height="40" rx="12" fill="var(--bg-main)" stroke="var(--border-card)" />
            {/* vernier ticks 0..10 */}
            {Array.from({ length: 11 }).map((_, i) => {
              const x = 16 + i * 18;
              const isEdge = i === 0 || i === 10;
              return (
                <g key={i}>
                  <line x1={x} y1={135 - (isEdge ? 18 : 10)} x2={x} y2={135} stroke="var(--text-muted)" strokeOpacity={isEdge ? 0.8 : 0.45} />
                  {(i === 0 || i === 5 || i === 10) && (
                    <text x={x - 3} y={156} fontSize="9" fill="var(--text-muted)" fontWeight="700">
                      {i}
                    </text>
                  )}
                </g>
              );
            })}

            {/* alignment indicator */}
            <line x1="16" y1="98" x2="16" y2="148" stroke="var(--accent-blue)" strokeWidth="3" />
          </g>

          {/* Readout */}
          <g>
            <rect x="560" y="12" width="240" height="22" rx="10" fill="var(--accent-blue-soft)" />
            <text x="574" y="28" fontSize="11" fill="var(--accent-blue)" fontWeight="800">
              {`Hasil = ${mainScale.toFixed(1)} + (${vernierIndex} × 0,01) = ${reading.toFixed(2)} cm`}
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

