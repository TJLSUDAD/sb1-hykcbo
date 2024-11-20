import React from 'react';
import { TrendingUp, Activity, Bell, Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-8 w-8 text-emerald-400" />
          <h1 className="text-2xl font-bold">CryptoMomentum</h1>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
            <Activity className="h-5 w-5" />
            <span>Live</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
            <Bell className="h-5 w-5" />
            <span>Alerts</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-emerald-400 transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </header>
  );
};