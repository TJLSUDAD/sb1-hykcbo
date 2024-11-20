import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

export const MarketOverview = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
        Market Overview
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
            <div className="text-sm text-gray-400">Market Cap</div>
            <div className="text-xl font-bold text-white">$2.1T</div>
            <div className="flex items-center text-green-400 text-sm mt-1">
              <TrendingUp className="h-4 w-4 mr-1" />
              +2.4%
            </div>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
            <div className="text-sm text-gray-400">24h Volume</div>
            <div className="text-xl font-bold text-white">$84.5B</div>
            <div className="flex items-center text-red-400 text-sm mt-1">
              <TrendingDown className="h-4 w-4 mr-1" />
              -1.2%
            </div>
          </div>
        </div>
        <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">BTC Dominance</span>
            <span className="text-sm text-white">48.2%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '48.2%' }}></div>
          </div>
        </div>
        <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Fear & Greed</span>
            <span className="text-sm text-green-400">75 - Greed</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};