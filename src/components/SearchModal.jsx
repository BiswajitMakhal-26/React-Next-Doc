import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, topics, onSelectTopic, language = 'bn' }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTopics = topics.filter(t => 
    t.title.toLowerCase().includes(query.toLowerCase()) ||
    t.moduleTitle.toLowerCase().includes(query.toLowerCase()) ||
    (t.keywords && t.keywords.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0e121a] border border-slate-700 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-[#121622]">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder={
              language === 'bn'
                ? 'যেকোনো Topic বা Keyword সার্চ করুন (যেমন: useEffect, Zustand, SSR, Yup)...'
                : 'Search any topic or keyword (e.g. useEffect, Zustand, SSR, Yup)...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto p-3 space-y-1.5 flex-1">
          {filteredTopics.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500 font-sans">
              {language === 'bn'
                ? `দুঃখিত! "${query}" দিয়ে কোনো Topic মেলেনি। অন্য শব্দ দিয়ে চেষ্টা করুন।`
                : `No topics found matching "${query}". Try searching for another term.`}
            </div>
          ) : (
            filteredTopics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => {
                  onSelectTopic(topic.id);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer border border-transparent hover:border-slate-700/80 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-950/60 transition">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 font-sans">
                      {topic.title}
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {topic.moduleTitle}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-slate-500 group-hover:text-slate-300 font-mono">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Shortcut Indicator */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center justify-between font-mono">
          <div className="flex items-center gap-2">
            <span>ESC to close</span>
            <span>•</span>
            <span>Enter to select</span>
          </div>
          <span className="text-cyan-400 font-semibold">{filteredTopics.length} Topics found</span>
        </div>
      </div>
    </div>
  );
}
