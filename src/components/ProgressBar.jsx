import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

export default function ProgressBar({ completedCount, totalCount, language = 'bn' }) {
  const percentage = Math.round((completedCount / totalCount) * 100) || 0;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 shadow-md">
      <div className="flex items-center justify-between text-xs mb-1.5 font-sans">
        <span className="flex items-center gap-1.5 text-slate-300 font-medium">
          <Award className="w-4 h-4 text-amber-400" />
          {language === 'bn' ? 'শেখার অগ্রগতি (Learning Progress)' : 'Learning Progress'}
        </span>
        <span className="font-mono text-cyan-400 font-bold">
          {completedCount}/{totalCount} {language === 'bn' ? 'সম্পন্ন' : 'Completed'} ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
        <div
          className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 h-full transition-all duration-500 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
