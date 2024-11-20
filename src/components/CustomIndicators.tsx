import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Gauge, Zap } from 'lucide-react';

const mockData = [
  { time: '1D', value: 65 },
  { time: '1W', value: 75 },
  { time: '1M', value: 55 },
  { time: '3M', value: 85 },
  { time: '6M', value: 45 },
  { time: '1Y', value: 95 },
];

export const CustomIndicators = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <Gauge className="h-5 w-5 mr-2 text-purple-400" />
        Custom Indicators
      </h2>
      <div className="space-y-4">
        <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">RSI Divergence</span>
            <div className="flex items-center text-yellow-400">
              <Zap className="h-4 w-4 mr-1" />
              Alert
            </div>
          </div>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <XAxis dataKey="time" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  dot={{ fill: '#8B5CF6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['MACD Cross', 'Volume Alert'].map((indicator) => (
            <div key={indicator} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50">
              <div className="text-sm text-gray-400">{indicator}</div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-400 mr-2"></div>
                  <span className="text-white">Active</span>
                </div>
                <button className="text-xs bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded transition-colors">
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};