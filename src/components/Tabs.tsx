import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-gray-700/50 text-white border border-gray-600/50'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};