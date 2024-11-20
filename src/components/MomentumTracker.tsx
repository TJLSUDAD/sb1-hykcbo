import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const MomentumTracker = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-4">Momentum Tracker</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">BTC/USDT</span>
            <div className="flex items-center text-green-400">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+5.67%</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Volume</span>
              <span>$2.1B</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>RSI</span>
              <span>65</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">ETH/USDT</span>
            <div className="flex items-center text-red-400">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              <span>-2.34%</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Volume</span>
              <span>$1.5B</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>RSI</span>
              <span>45</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};