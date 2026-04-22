import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const isEq = label === 30000;
    return (
      <div className="bg-white dark:bg-slate-800 border border-[var(--border-card)] p-3 rounded-xl shadow-lg">
        <p className="font-bold text-[var(--text-main)] mb-2">Harga: Rp {label.toLocaleString()}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm font-medium m-0">
            {entry.name}: {entry.value} Unit
          </p>
        ))}
        {isEq && (
          <div className="mt-2 pt-2 border-t border-[var(--border-card)]">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Titik Keseimbangan</span>
          </div>
        )}
      </div>
    );
  }
  return null;
};

// Perekonomian - Hukum Permintaan & Penawaran
export default function SupplyDemandChart() {
  // Fake equilibrium data
  const data = [
    { price: 10000, demand: 100, supply: 20 },
    { price: 20000, demand: 80, supply: 40 },
    { price: 30000, demand: 60, supply: 60 }, // Equilibrium
    { price: 40000, demand: 40, supply: 80 },
    { price: 50000, demand: 20, supply: 100 },
  ];

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis 
              dataKey="price" 
              tickFormatter={(val) => `${val / 1000}k`}
              tick={{ fill: 'var(--text-secondary)' }}
              axisLine={{ stroke: 'var(--border-card)' }}
              tickLine={false}
              dy={10}
            />
            <YAxis 
              tick={{ fill: 'var(--text-secondary)' }}
              axisLine={{ stroke: 'var(--border-card)' }}
              tickLine={false}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            
            {/* Permintaan (Demand) - Downward slope */}
            <Line 
              type="monotone" 
              dataKey="demand" 
              name="Permintaan (D)" 
              stroke="#EC4899" 
              strokeWidth={3}
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
            
            {/* Penawaran (Supply) - Upward slope */}
            <Line 
              type="monotone" 
              dataKey="supply" 
              name="Penawaran (S)" 
              stroke="#0EA5E9" 
              strokeWidth={3}
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
            <ReferenceDot x={30000} y={60} r={8} fill="#F59E0B" stroke="#fff" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center max-w-md">
        <p className="text-sm text-[var(--text-secondary)]">Titik kuning mempresentasikan <strong className="text-amber-500">Equilibrium</strong> (Keseimbangan Pasar) dimana Permintaan = Penawaran.</p>
      </div>
    </div>
  );
}
