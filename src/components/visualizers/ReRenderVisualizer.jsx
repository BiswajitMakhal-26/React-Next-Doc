import React, { useState } from 'react';
import { GitBranch, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export default function ReRenderVisualizer() {
  const [parentCount, setParentCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const [isMemoized, setIsMemoized] = useState(true);
  const [useCb, setUseCb] = useState(true);
  const [renderCountParent, setRenderCountParent] = useState(1);
  const [renderCountChildA, setRenderCountChildA] = useState(1);
  const [renderCountChildB, setRenderCountChildB] = useState(1);

  const incrementParent = () => {
    setParentCount(p => p + 1);
    setRenderCountParent(p => p + 1);
    // Child B is unmemoized, so it ALWAYS re-renders when parent renders
    setRenderCountChildB(p => p + 1);

    // Child A re-renders only if memo is OFF or callback reference changed (useCb is false)
    if (!isMemoized || !useCb) {
      setRenderCountChildA(p => p + 1);
    }
  };

  const incrementOther = () => {
    setOtherCount(o => o + 1);
    setRenderCountParent(p => p + 1);
    setRenderCountChildB(p => p + 1);
    if (!isMemoized || !useCb) {
      setRenderCountChildA(p => p + 1);
    }
  };

  const resetAll = () => {
    setParentCount(0);
    setOtherCount(0);
    setRenderCountParent(1);
    setRenderCountChildA(1);
    setRenderCountChildB(1);
  };

  return (
    <div className="bg-slate-900 border border-indigo-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-500/20 text-indigo-400 rounded-lg">
            <GitBranch className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              Re-render Cascade & Performance Visualizer
              <span className="text-xs bg-indigo-950 text-indigo-400 border border-indigo-800 px-2 py-0.5 rounded-full font-mono">React.memo + useCallback</span>
            </h4>
            <p className="text-xs text-slate-400">Parent State বদলালে কোন Child অযথা Re-render হয় আর কিভাবে তা বন্ধ করবেন</p>
          </div>
        </div>

        <button
          onClick={resetAll}
          className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2.5 py-1.5 rounded-lg transition"
        >
          <RefreshCw className="w-3.5 h-3.5" /> রিসেট
        </button>
      </div>

      {/* Control Panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <button
          onClick={incrementParent}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs px-3 py-2.5 rounded-lg transition shadow-md flex items-center justify-center gap-1.5"
        >
          <Zap className="w-3.5 h-3.5" /> Parent State +1 ({parentCount})
        </button>
        <button
          onClick={incrementOther}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs px-3 py-2.5 rounded-lg transition border border-slate-700 flex items-center justify-center gap-1.5"
        >
          Other State +1 ({otherCount})
        </button>
        <label className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800 cursor-pointer text-xs">
          <input
            type="checkbox"
            checked={isMemoized}
            onChange={(e) => setIsMemoized(e.target.checked)}
            className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-slate-300 font-mono">React.memo(ChildA)</span>
        </label>
        <label className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-800 cursor-pointer text-xs">
          <input
            type="checkbox"
            checked={useCb}
            onChange={(e) => setUseCb(e.target.checked)}
            className="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-slate-300 font-mono">useCallback(handler)</span>
        </label>
      </div>

      {/* Tree Diagram */}
      <div className="space-y-4">
        {/* Parent Box */}
        <div className="bg-slate-950 border-2 border-indigo-500/60 rounded-xl p-3.5 text-center relative max-w-md mx-auto shadow-lg shadow-indigo-950/40">
          <div className="text-xs font-mono uppercase text-indigo-400 font-bold mb-1">
            &lt;ParentComponent /&gt;
          </div>
          <div className="text-xs text-slate-300 font-bengali">
            Parent State: <span className="font-mono text-indigo-300 font-bold">{parentCount}</span> | Render সংখ্যা:{' '}
            <span className="font-mono text-amber-400 font-bold">{renderCountParent}</span>
          </div>
        </div>

        {/* Connector Lines */}
        <div className="flex justify-center items-center">
          <div className="w-1/2 h-4 border-t-2 border-x-2 border-slate-700 rounded-t-lg"></div>
        </div>

        {/* Children Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Child A (Optimized) */}
          <div
            className={`p-3.5 rounded-xl border-2 transition-all duration-300 ${
              isMemoized && useCb
                ? 'bg-emerald-950/20 border-emerald-500/60'
                : 'bg-rose-950/20 border-rose-500/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                &lt;ChildA_Optimized /&gt;
                {isMemoized && useCb && (
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                )}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                  isMemoized && useCb
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                    : 'bg-rose-950 text-rose-300 border border-rose-800'
                }`}
              >
                {isMemoized && useCb ? 'Memoized' : 'Wasting Renders!'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2 font-bengali">
              React.memo: <span className="font-mono text-slate-200">{isMemoized ? 'Active' : 'Disabled'}</span> |{' '}
              useCallback: <span className="font-mono text-slate-200">{useCb ? 'Active' : 'Disabled'}</span>
            </p>
            <div className="text-xs bg-slate-950/80 p-2 rounded border border-slate-800 flex justify-between items-center font-mono">
              <span className="text-slate-400">Total Renders:</span>
              <span className={`font-bold ${isMemoized && useCb ? 'text-emerald-400' : 'text-rose-400'}`}>
                {renderCountChildA} বার
              </span>
            </div>
          </div>

          {/* Child B (Unoptimized) */}
          <div className="p-3.5 rounded-xl border-2 border-rose-500/50 bg-rose-950/20 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold text-white">
                &lt;ChildB_Normal /&gt;
              </span>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800 font-mono">
                No Memoization
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2 font-bengali">
              কখনো memo করা হয়নি। Parent render হলেই এটি অপ্রয়োজনে Re-render হবে।
            </p>
            <div className="text-xs bg-slate-950/80 p-2 rounded border border-slate-800 flex justify-between items-center font-mono">
              <span className="text-slate-400">Total Renders:</span>
              <span className="font-bold text-rose-400">{renderCountChildB} বার</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 font-bengali leading-relaxed">
        <strong className="text-amber-400">💡 মেন্টর টেকঅ্যাওয়ে (Senior Tip):</strong> লক্ষ্য করুন, যদি <code className="text-cyan-300 font-mono">useCallback</code> বন্ধ করে দেন, তবে <code className="text-cyan-300 font-mono">React.memo</code> থাকা সত্ত্বেও ChildA Re-render হবে! কারণ প্রতিটি Render এ নতুন Function রেফারেন্স তৈরি হয় (Referential Inequality) যা shallow comparison কে ব্যর্থ করে দেয়।
      </div>
    </div>
  );
}
