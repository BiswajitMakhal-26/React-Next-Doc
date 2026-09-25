import React from 'react';
import { Menu, Search, BookOpen, Sparkles, CheckCircle2, RotateCcw, Languages, Rocket } from 'lucide-react';

export default function Navbar({
  onToggleSidebar,
  onOpenSearch,
  onOpenCheatSheet,
  onOpenMiniProject,
  completedCount,
  totalCount,
  onResetProgress,
  language = 'bn',
  onToggleLanguage
}) {
  const percent = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#0c1017]/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-3 sm:px-6">
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 md:hidden transition"
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white font-bold text-lg">
              ⚛
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent font-sans">
                React & Next.js Mastery
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold">
                {language === 'bn' ? 'Bilingual (বাংলা + English Terms)' : 'English Edition'}
              </span>
            </div>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Industry Mini Project trigger button */}
          <button
            onClick={onOpenMiniProject}
            className="flex items-center gap-1.5 bg-gradient-to-r from-purple-950/80 to-indigo-950/80 hover:from-purple-900 hover:to-indigo-900 text-purple-300 border border-purple-700/80 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition shadow-md shadow-purple-950/40"
            title="লাইভ ইন্ডাস্ট্রি মিনি-প্রজেক্ট দেখুন"
          >
            <Rocket className="w-3.5 h-3.5 text-purple-400 animate-bounce" />
            <span className="hidden sm:inline">🚀 Mini-Project</span>
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition shadow-sm"
            title="ভাষা পরিবর্তন করুন / Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono">{language === 'bn' ? 'বাংলা' : 'EN'}</span>
            <span className="text-[10px] text-slate-400 hidden sm:inline">
              ({language === 'bn' ? 'কলকাতা' : 'English'})
            </span>
          </button>

          {/* Quick Search trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs transition"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline font-sans">
              {language === 'bn' ? 'Topic খুঁজুন...' : 'Search topics...'}
            </span>
            <kbd className="hidden sm:inline-block font-mono text-[10px] bg-slate-950 px-1.5 py-0.5 rounded border border-slate-700 text-slate-400">
              Ctrl K
            </kbd>
          </button>

          {/* Quick CheatSheet */}
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1.5 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/80 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">
              {language === 'bn' ? 'CheatSheet' : 'CheatSheet'}
            </span>
          </button>

          {/* Progress pill */}
          <div className="hidden lg:flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-slate-200 font-bold">{percent}%</span>
          </div>

          {/* Reset progress */}
          <button
            onClick={onResetProgress}
            title={language === 'bn' ? 'অগ্রগতি রিসেট করুন' : 'Reset progress'}
            className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
