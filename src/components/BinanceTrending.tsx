import React, { useState, useEffect } from 'react';
import { TrendingUp, RefreshCcw } from 'lucide-react';
import axios from 'axios';

interface PriceChange {
  symbol: string;
  priceChangePercent: string;
  volume: string;
  lastPrice: string;
}

export const BinanceTrending = () => {
  const [trendingPairs, setTrendingPairs] = useState<PriceChange[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTrendingPairs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
      const data = response.data as PriceChange[];
      
      // Filter for USDT pairs and sort by price change percentage
      const usdtPairs = data
        .filter(pair => pair.symbol.endsWith('USDT'))
        .sort((a, b) => parseFloat(b.priceChangePercent) - parseFloat(a.priceChangePercent))
        .slice(0, 5);

      setTrendingPairs(usdtPairs);
      setError(null);
    } catch (err) {
      setError('Failed to fetch trending pairs');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingPairs();
    const interval = setInterval(fetchTrendingPairs, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const formatVolume = (volume: string) => {
    const vol = parseFloat(volume);
    if (vol >= 1e9) return `$${(vol / 1e9).toFixed(2)}B`;
    if (vol >= 1e6) return `$${(vol / 1e6).toFixed(2)}M`;
    if (vol >= 1e3) return `$${(vol / 1e3).toFixed(2)}K`;
    return `$${vol.toFixed(2)}`;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
          Binance Trending
        </h2>
        <button 
          onClick={fetchTrendingPairs}
          className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
          disabled={isLoading}
        >
          <RefreshCcw className={`h-4 w-4 text-gray-400 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {error ? (
        <div className="text-red-400 text-center p-4 bg-gray-700/50 rounded-lg">
          {error}
        </div>
      ) : (
        <div className="space-y-3">
          {trendingPairs.map((pair) => (
            <div 
              key={pair.symbol}
              className="bg-gray-700/50 rounded-lg p-4 border border-gray-600/50 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">
                  {pair.symbol.replace('USDT', '')}
                  <span className="text-gray-400">/USDT</span>
                </span>
                <span className={`font-semibold ${
                  parseFloat(pair.priceChangePercent) >= 0 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {parseFloat(pair.priceChangePercent) > 0 ? '+' : ''}
                  {parseFloat(pair.priceChangePercent).toFixed(2)}%
                </span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-gray-400">
                <span>Price: ${parseFloat(pair.lastPrice).toFixed(4)}</span>
                <span>Vol: {formatVolume(pair.volume)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};