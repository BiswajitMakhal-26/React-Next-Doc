import React, { useState } from 'react';
import { Layers, RefreshCw, Cpu, CheckCircle2, Play, Sparkles } from 'lucide-react';

export default function VirtualDomVisualizer() {
  const [items, setItems] = useState([
    { id: 1, text: 'Component লোড হলো', status: 'idle' },
    { id: 2, text: 'ইউজার ডেটা ফেচ হলো', status: 'idle' },
    { id: 3, text: 'ফুটার Render হলো', status: 'idle' }
  ]);
  const [log, setLog] = useState([
    'সিস্টেম রেডি। "State আপডেট করুন" বাটনে ক্লিক করে Virtual DOM এর ডিফারেন্সিয়াল আপডেট দেখুন।'
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const [isDiffing, setIsDiffing] = useState(false);

  const simulateUpdate = () => {
    setIsDiffing(true);
    setActiveStep(1);
    setLog(prev => ['[ধাপ ১] ইউজার অ্যাকশনে State পরিবর্তিত হলো...', ...prev]);

    setTimeout(() => {
      setActiveStep(2);
      setLog(prev => ['[ধাপ ২] React মেমরিতে সম্পূর্ণ নতুন একটি Virtual DOM Tree তৈরি করলো।', ...prev]);
    }, 900);

    setTimeout(() => {
      setActiveStep(3);
      setItems(prev => [
        prev[0],
        { id: 2, text: `ইউজার ডেটা আপডেট (${new Date().toLocaleTimeString('bn-BD')})`, status: 'changed' },
        prev[2]
      ]);
      setLog(prev => ['[ধাপ ৩] Diffing Algorithm (Reconciliation): পুরনো ও নতুন VDOM এর তুলনা করে দেখলো মাত্র ২য় আইটেমটি পরিবর্তিত হয়েছে!', ...prev]);
    }, 1800);

    setTimeout(() => {
      setActiveStep(4);
      setLog(prev => ['[ধাপ ৪] Batch Patching: সম্পূর্ণ পেজ Re-render না করে শুধুমাত্র পরিবর্তিত Real DOM নোডটি আপডেট করা হলো! 🔥', ...prev]);
      setIsDiffing(false);
    }, 2700);
  };

  const resetAll = () => {
    setItems([
      { id: 1, text: 'Component লোড হলো', status: 'idle' },
      { id: 2, text: 'ইউজার ডেটা ফেচ হলো', status: 'idle' },
      { id: 3, text: 'ফুটার Render হলো', status: 'idle' }
    ]);
    setActiveStep(0);
    setLog(['State রিসেট করা হয়েছে। আবার শুরু করতে পারেন।']);
  };

  return (
    <div className="bg-slate-900 border border-cyan-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              Virtual DOM ও Diffing Algorithm সিমুলেটর
              <span className="text-xs bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded-full font-mono">Interactive</span>
            </h4>
            <p className="text-xs text-slate-400">দেখুন কিভাবে React মেমরিতে diffিং করে শুধু প্রয়োজনীয় নোড Browser এ আপডেট করে</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={simulateUpdate}
            disabled={isDiffing}
            className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white text-xs font-semibold px-3 py-2 rounded-lg transition shadow-md shadow-cyan-900/30"
          >
            <Play className="w-3.5 h-3.5" /> State আপডেট করুন
          </button>
          <button
            onClick={resetAll}
            disabled={isDiffing}
            className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2.5 py-2 rounded-lg transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> রিসেট
          </button>
        </div>
      </div>

      {/* Progress pipeline */}
      <div className="grid grid-cols-4 gap-2 mb-4 text-center">
        {[
          { num: 1, title: 'State Change' },
          { num: 2, title: 'New VDOM Tree' },
          { num: 3, title: 'Diffing (Reconcile)' },
          { num: 4, title: 'Real DOM Patch' }
        ].map(step => (
          <div
            key={step.num}
            className={`p-2 rounded-lg text-xs font-medium border transition-all ${
              activeStep === step.num
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950'
                : activeStep > step.num
                ? 'bg-slate-800/80 border-emerald-600/50 text-emerald-400'
                : 'bg-slate-900/60 border-slate-800 text-slate-500'
            }`}
          >
            <span className="font-mono mr-1">#{step.num}</span> {step.title}
          </div>
        ))}
      </div>

      {/* Dual Tree Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {/* Virtual DOM Tree */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> 1. Virtual DOM (JS Memory)
            </span>
            <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-900">লাইটওয়েট JavaScript Object</span>
          </div>

          <div className="space-y-2">
            {items.map(item => (
              <div
                key={item.id}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all duration-300 ${
                  item.status === 'changed'
                    ? 'bg-amber-950/40 border-amber-500 text-amber-200 animate-pulse'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <code>&lt;div id="{item.id}"&gt;</code>
                  <span className="font-bengali">{item.text}</span>
                </div>
                {item.status === 'changed' && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40">
                    Diff Found
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-slate-500 text-center font-mono">
            React.createElement() Tree (Super Fast In-Memory)
          </div>
        </div>

        {/* Real DOM Tree */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 relative">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 2. Real Browser DOM
            </span>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-900">Browser Render ট্রি</span>
          </div>

          <div className="space-y-2">
            {items.map(item => (
              <div
                key={item.id}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all duration-500 ${
                  activeStep === 4 && item.status === 'changed'
                    ? 'bg-emerald-950/50 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${activeStep === 4 && item.status === 'changed' ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`}></span>
                  <code>&lt;p&gt;</code>
                  <span className="font-bengali">{item.text}</span>
                </div>
                {activeStep === 4 && item.status === 'changed' ? (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40">
                    Only This Patched!
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-600">No Touch</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-slate-500 text-center font-mono">
            Direct Browser DOM Nodes (Costly Paint/Reflow)
          </div>
        </div>
      </div>

      {/* Live Mentor Log Console */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-3 font-mono text-xs">
        <div className="text-[11px] text-cyan-400 font-semibold mb-1 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> মেন্টর লাইভ কনসোল (Under The Hood Execution):
        </div>
        <div className="space-y-1 max-h-24 overflow-y-auto font-bengali text-slate-300">
          {log.map((entry, index) => (
            <div key={index} className="text-xs text-slate-300 border-l-2 border-cyan-500/50 pl-2">
              {entry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
