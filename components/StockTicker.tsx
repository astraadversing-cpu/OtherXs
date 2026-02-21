import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const STOCKS = [
  { symbol: 'IBOV', price: '128.450', variation: 0.45 },
  { symbol: 'PETR4', price: '38.42', variation: -1.2 },
  { symbol: 'VALE3', price: '68.10', variation: 0.8 },
  { symbol: 'ITUB4', price: '32.15', variation: 0.15 },
  { symbol: 'BTC', price: '64.200', variation: 2.4 },
  { symbol: 'USD', price: '5.14', variation: -0.05 },
  { symbol: 'ETH', price: '3.450', variation: 1.1 },
  { symbol: 'BBDC4', price: '14.20', variation: -0.3 },
  { symbol: 'WEGE3', price: '38.90', variation: 1.5 },
  { symbol: 'MGLU3', price: '2.15', variation: -2.1 },
  { symbol: 'RENT3', price: '45.30', variation: 0.6 },
  { symbol: 'PRIO3', price: '48.90', variation: 1.8 },
];

export const StockTicker: React.FC = () => {
  // We duplicate the list to create a seamless infinite scroll effect
  const displayStocks = [...STOCKS, ...STOCKS, ...STOCKS, ...STOCKS];

  return (
    <div className="w-full bg-otherx-dark border-b border-gray-800 overflow-hidden py-2 relative z-50">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {displayStocks.map((stock, i) => (
          <div key={`${stock.symbol}-${i}`} className="flex items-center gap-2 px-6 border-r border-gray-800/50 min-w-[140px] justify-between">
            <div className="flex flex-col">
                <span className="font-bold text-[10px] text-gray-400 tracking-wider">{stock.symbol}</span>
                <span className="font-mono text-xs text-white font-medium">{stock.price}</span>
            </div>
            <span className={`text-xs font-bold flex items-center gap-0.5 ${stock.variation >= 0 ? 'text-otherx-green' : 'text-red-500'}`}>
              {stock.variation >= 0 ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
              {Math.abs(stock.variation)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};