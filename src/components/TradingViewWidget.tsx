import React, { useEffect, useRef, useState } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
  theme?: 'dark' | 'light';
}

export const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol, theme = 'dark' }) => {
  const container = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const containerId = `tradingview_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`;
    let script: HTMLScriptElement | null = null;
    let widget: any = null;

    const createWidget = () => {
      try {
        if (typeof window.TradingView !== 'undefined' && container.current) {
          widget = new window.TradingView.widget({
            width: "100%",
            height: "100%",
            symbol: symbol,
            interval: "D",
            timezone: "Etc/UTC",
            theme: theme,
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            container_id: containerId
          });
          setIsLoading(false);
        }
      } catch (err) {
        setError('Failed to initialize TradingView widget');
        setIsLoading(false);
      }
    };

    const loadScript = () => {
      script = document.createElement('script');
      script.id = 'tradingview-widget-script';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = createWidget;
      script.onerror = () => {
        setError('Failed to load TradingView script');
        setIsLoading(false);
      };
      document.head.appendChild(script);
    };

    // Check if script is already loaded
    const existingScript = document.getElementById('tradingview-widget-script');
    if (!existingScript) {
      loadScript();
    } else {
      createWidget();
    }

    return () => {
      if (widget && widget.remove) {
        widget.remove();
      }
    };
  }, [symbol, theme]);

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-800 rounded-xl">
        <div className="text-red-400 text-center p-4">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-800 rounded-xl">
        <div className="animate-pulse text-gray-400">Loading chart...</div>
      </div>
    );
  }

  return (
    <div ref={container} className="tradingview-widget-container h-full">
      <div id={`tradingview_${symbol.replace(/[^a-zA-Z0-9]/g, '')}`} className="h-full" />
    </div>
  );
};