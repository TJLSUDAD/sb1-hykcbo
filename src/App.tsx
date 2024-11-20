import React, { useState } from 'react';
import { Header } from './components/Header';
import { MomentumTracker } from './components/MomentumTracker';
import { PumpFinder } from './components/PumpFinder';
import { TradingViewWidget } from './components/TradingViewWidget';
import { MarketOverview } from './components/MarketOverview';
import { CustomIndicators } from './components/CustomIndicators';
import { BinanceTrending } from './components/BinanceTrending';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Tabs } from './components/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('momentum');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main className="max-w-[1920px] mx-auto p-6 space-y-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            <MarketOverview />
            <BinanceTrending />
            <PumpFinder />
          </div>

          {/* Main Content */}
          <div className="col-span-6 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
              <Tabs
                tabs={[
                  { id: 'momentum', label: 'Momentum' },
                  { id: 'breakout', label: 'Breakout' },
                  { id: 'custom', label: 'Custom' }
                ]}
                activeTab={activeTab}
                onChange={setActiveTab}
              />
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl h-[600px] shadow-xl overflow-hidden border border-gray-700/50">
              <ErrorBoundary>
                <TradingViewWidget 
                  symbol={activeTab === 'momentum' ? "BINANCE:BTCUSDT" : 
                         activeTab === 'breakout' ? "BINANCE:ETHUSDT" : "BINANCE:SOLUSDT"} 
                />
              </ErrorBoundary>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-6">
            <MomentumTracker />
            <CustomIndicators />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;