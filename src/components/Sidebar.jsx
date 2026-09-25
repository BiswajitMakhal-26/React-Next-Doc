import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, Search, BookOpen, Layers } from 'lucide-react';

export default function Sidebar({
  modules,
  activeTopicId,
  onSelectTopic,
  completedTopics,
  onToggleComplete,
  isOpen,
  onClose,
  language = 'bn'
}) {
  const [expandedModules, setExpandedModules] = useState({
    'intro': true,
    'mod1': true,
    'mod2': true,
    'mod3': true,
    'mod4': true,
    'mod5': true,
    'mod6': true,
    'mod7': true,
    'mod8': true,
    'mod9': true,
    'mod10': true
  });
  const [filterText, setFilterText] = useState('');

  const toggleExpand = (modId) => {
    setExpandedModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed md:sticky top-16 z-40 h-[calc(100vh-4rem)] w-72 lg:w-80 shrink-0 border-r border-slate-800 bg-slate-950/95 transition-transform duration-200 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Quick filter in sidebar */}
        <div className="p-3 border-b border-slate-800">
          <div className="relative">
            <input
              type="text"
              placeholder={language === 'bn' ? 'সিলেবাস ফিল্টার করুন...' : 'Filter topics...'}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Modules navigation tree */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {modules.map(mod => {
            const visibleTopics = mod.topics.filter(t =>
              t.title.toLowerCase().includes(filterText.toLowerCase())
            );

            if (filterText && visibleTopics.length === 0) return null;

            const isExpanded = expandedModules[mod.id] || !!filterText;

            return (
              <div key={mod.id} className="rounded-xl border border-slate-800/60 bg-slate-900/30 overflow-hidden">
                {/* Module Header Accordion */}
                <button
                  onClick={() => toggleExpand(mod.id)}
                  className="w-full flex items-center justify-between p-2.5 text-left bg-slate-900/60 hover:bg-slate-800/60 transition group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 text-xs font-mono font-bold">
                      {mod.badge || mod.title.split(':')[0]}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white font-sans">
                      {language === 'bn' ? (mod.nameBangla || mod.title) : mod.title}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {/* Module Topics */}
                {isExpanded && (
                  <div className="p-1 space-y-0.5">
                    {visibleTopics.map(topic => {
                      const isCompleted = !!completedTopics[topic.id];
                      const isActive = activeTopicId === topic.id;

                      return (
                        <div
                          key={topic.id}
                          className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 transition text-xs group cursor-pointer ${
                            isActive
                              ? 'bg-cyan-950/80 text-cyan-300 font-medium border border-cyan-800/80'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                          }`}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            if (window.innerWidth < 768) onClose();
                          }}
                        >
                          <span className="truncate pr-2 font-sans">{topic.title}</span>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleComplete(topic.id);
                            }}
                            className="shrink-0 p-1 text-slate-500 hover:text-emerald-400 transition"
                            title={isCompleted ? 'Marked as completed' : 'Mark as completed'}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-400" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
