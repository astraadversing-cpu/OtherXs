import React, { useMemo, useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  currentBalance: number;
}

export const GrowthChart: React.FC<ChartProps> = ({ currentBalance }) => {
  const [tick, setTick] = useState(0);

  // Continuous animation loop for the wave effect
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setTick(t => t + 0.05); // Adjust speed of wave
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const data = useMemo(() => {
    const points = [];
    const baseValue = currentBalance > 0 ? currentBalance * 0.98 : 1000; 
    
    for (let i = 0; i <= 24; i++) {
      // Linear growth trend
      const growthFactor = 1 + (i / 24) * 0.02; 
      
      // Continuous wave animation (baixa e alta)
      // Combines a slow moving wave and a faster ripple
      const wave1 = Math.sin((i * 0.5) + tick) * (baseValue * 0.0015);
      const wave2 = Math.cos((i * 0.8) - tick * 0.7) * (baseValue * 0.0005);
      
      const val = baseValue * growthFactor + wave1 + wave2;
      
      points.push({
        hour: `${i.toString().padStart(2, '0')}:00`,
        value: Number(val.toFixed(2))
      });
    }
    return points;
  }, [currentBalance, tick]);

  return (
    <div className="h-64 w-full bg-white dark:bg-otherx-card rounded-xl p-4 shadow-lg border border-gray-100 dark:border-otherx-gray">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Rendimento Real-Time (CDI Synthetic)</h3>
        <span className="text-otherx-green text-xs font-bold px-2 py-1 bg-otherx-green/10 rounded">+0.55% (24h)</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="hour" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 10 }} 
            interval={3}
          />
          <YAxis 
            hide={true} 
            domain={['dataMin', 'dataMax']} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#00ff88' }}
            formatter={(value: number) => [`R$ ${value.toFixed(2)}`, 'Saldo']}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#00ff88" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            isAnimationActive={false} // Disable internal animation to allow smooth React state updates
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};