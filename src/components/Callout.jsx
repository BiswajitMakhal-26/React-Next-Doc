import React from 'react';
import { Lightbulb, AlertTriangle, HelpCircle, Compass, CheckCircle2 } from 'lucide-react';

export default function Callout({ type = 'tip', title, children }) {
  const configs = {
    tip: {
      border: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-200',
      iconBg: 'bg-cyan-500/20 text-cyan-400',
      icon: Lightbulb,
      defaultTitle: 'মেন্টর টিপ (Mentor Tip)'
    },
    warning: {
      border: 'border-amber-500/40 bg-amber-950/20 text-amber-200',
      iconBg: 'bg-amber-500/20 text-amber-400',
      icon: AlertTriangle,
      defaultTitle: 'কমন প্রোডাকশন বাগ ও পিটফল (Production Pitfall)'
    },
    interview: {
      border: 'border-purple-500/40 bg-purple-950/20 text-purple-200',
      iconBg: 'bg-purple-500/20 text-purple-400',
      icon: HelpCircle,
      defaultTitle: 'ইন্টারভিউ হট কোশ্চেন (Top Interview Question)'
    },
    deepdive: {
      border: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      icon: Compass,
      defaultTitle: 'বিহাইন্ড দ্য সিন্স ডিপ ডাইভ (Under The Hood)'
    }
  };

  const config = configs[type] || configs.tip;
  const Icon = config.icon;

  return (
    <div className={`my-4 rounded-xl border p-4 shadow-sm ${config.border} font-bengali leading-relaxed`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-lg ${config.iconBg}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h5 className="font-bold text-sm tracking-wide text-white">
          {title || config.defaultTitle}
        </h5>
      </div>
      <div className="text-xs text-slate-300 space-y-2 pl-7">
        {children}
      </div>
    </div>
  );
}
