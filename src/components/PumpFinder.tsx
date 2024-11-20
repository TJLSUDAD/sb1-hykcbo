import React from 'react';
import { Rocket, TrendingUp } from 'lucide-react';

export const PumpFinder = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Rocket className="h-5 w-5 mr-2 text-purple-400" />
          Pump Finder
        </h2>
        <select className="bg-gray-700 text-white rounded-lg px-3 py-1 text-sm">
          <option>15m</option>
          <option>1h</option>
          <option>4h</option>
          <option>24h</option>
        </select>
      </div>
      <div className="space-y-4">
        {[
          { symbol: 'PEPE/USDT', change: '+45.2%', volume: '$12.5M' },
          { symbol: 'DOGE/USDT', change: '+15.7%', volume: '$8.2M' },
          { symbol: 'SHIB/USDT', change: '+12.3%', volume: '$5.1M' },
        ].map((coin) => (
          <div key={coin.symbol} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-white">{coin.symbol}</span>
              </div>
              <div className="text-green-400 font-semibold">{coin.change}</div>
            </div>
            <div className="mt-2 text-sm text-gray-400">
              Volume: {coin.volume}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};