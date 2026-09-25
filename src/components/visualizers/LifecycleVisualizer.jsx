import React, { useState } from 'react';
import { Clock, ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function LifecycleVisualizer() {
  const [phase, setPhase] = useState('mount'); // 'mount' | 'update' | 'unmount'
  const [currentStep, setCurrentStep] = useState(0);

  const mountSteps = [
    { title: '1. Initial Render (JSX Execution)', desc: 'Component Functionটি কল হয়, JSX থেকে React Elements তৈরি হয়। (DOM এখনও তৈরি হয়নি)', time: 'Render Phase' },
    { title: '2. DOM & Ref Updates', desc: 'React মেমরির Virtual DOM অনুযায়ী আসল Browser এর Real DOM নোড তৈরি করে এবং ref গুলোকে বাইন্ড করে।', time: 'Commit Phase' },
    { title: '3. useLayoutEffect Executes', desc: 'Browser স্ক্রিনে পিক্সেল আঁকার (Paint) ঠিক পূর্বে সিঙ্ক্রোনাসভাবে useLayoutEffect চলে (Layout মাপামাপির জন্য)।', time: 'Pre-Paint' },
    { title: '4. Browser Paint (Screen Painted)', desc: 'Browser স্ক্রিনে UI ড্র করে। ইউজার চোখের সামনে পেজ দেখতে পায়।', time: 'Paint' },
    { title: '5. useEffect Runs (Asynchronous)', desc: 'স্ক্রিন পেইন্ট হওয়ার পর ব্যাকগ্রাউন্ডে useEffect এর Callback চলে (API ফেচ, Event লিসেনার অ্যাড)।', time: 'Post-Paint' }
  ];

  const updateSteps = [
    { title: '1. State বা Props Change Trigger', desc: 'setState() কল বা Parent থেকে নতুন Props পাস হলে Component Re-render ট্রিগার হয়।', time: 'Trigger' },
    { title: '2. Re-rendering JSX', desc: 'Functionটি পুনরায় চলে, নতুন Virtual DOM তৈরি হয় এবং Diffing অ্যালগরিদম পার্থক্য চিহ্নিত করে।', time: 'Render Phase' },
    { title: '3. Real DOM Patching', desc: 'শুধু পরিবর্তিত অংশগুলো Browser ডমে Mutate হয়।', time: 'Commit Phase' },
    { title: '4. Previous useEffect Cleanup', desc: 'নতুন এফেক্ট চলার আগে আগের এফেক্টের রিটার্ন করা cleanup Function চলে (পুরনো সাবস্ক্রিপশন বাতিল করে)।', time: 'Pre-Effect' },
    { title: '5. New useEffect Runs', desc: 'নতুন ডিপেন্ডেন্সি ভ্যালু দিয়ে useEffect পুনরায় চলে।', time: 'Post-Paint' }
  ];

  const unmountSteps = [
    { title: '1. Component Removal Trigger', desc: 'কন্ডিশনাল Rendering বা Router পরিবর্তনের কারণে Component UI থেকে সরিয়ে নেওয়ার সিদ্ধান্ত হয়।', time: 'Unmount' },
    { title: '2. useEffect Cleanup Runs', desc: 'সবগুলি useEffect এর রিটার্ন করা cleanup Function চলে (clearInterval, abortController, removeEventListener)।', time: 'Cleanup' },
    { title: '3. Real DOM Detached', desc: 'Browser ডম থেকে সংশ্লিষ্ট নোডগুলো চিরতরে সরিয়ে ফেলা হয় এবং মেমরি খালি হয়।', time: 'Destroy' }
  ];

  const getSteps = () => {
    if (phase === 'mount') return mountSteps;
    if (phase === 'update') return updateSteps;
    return unmountSteps;
  };

  const steps = getSteps();

  const handleNext = () => {
    setCurrentStep(prev => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="bg-slate-900 border border-teal-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-teal-500/20 text-teal-400 rounded-lg">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              React Functional Lifecycle & Hook Execution Simulator
              <span className="text-xs bg-teal-950 text-teal-400 border border-teal-800 px-2 py-0.5 rounded-full font-mono">Hooks Life Cycle</span>
            </h4>
            <p className="text-xs text-slate-400">স্ক্রিন পেইন্টের আগে ও পরে কোন Hook ঠিক কোন অর্ডারে চলে দেখুন</p>
          </div>
        </div>

        {/* Phase selector buttons */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          {['mount', 'update', 'unmount'].map(p => (
            <button
              key={p}
              onClick={() => {
                setPhase(p);
                setCurrentStep(0);
              }}
              className={`px-3 py-1 rounded text-xs font-medium capitalize transition ${
                phase === p
                  ? 'bg-teal-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {p} Phase
            </button>
          ))}
        </div>
      </div>

      {/* Step by step interactive list */}
      <div className="space-y-3 mb-4">
        {steps.map((st, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentStep(idx)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              currentStep === idx
                ? 'bg-teal-950/60 border-teal-500 text-white shadow-lg'
                : idx < currentStep
                ? 'bg-slate-950/60 border-slate-800 text-slate-400'
                : 'bg-slate-950/30 border-slate-800/60 text-slate-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                    currentStep === idx
                      ? 'bg-teal-500 text-slate-950'
                      : idx < currentStep
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {idx < currentStep ? '✓' : idx + 1}
                </span>
                <span className="font-semibold text-sm font-bengali">{st.title}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-teal-300">
                {st.time}
              </span>
            </div>
            {currentStep === idx && (
              <p className="mt-2 text-xs text-slate-300 pl-8 font-bengali leading-relaxed border-t border-teal-900/50 pt-2">
                {st.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="text-xs text-slate-400 font-bengali">
          ধাপ <span className="text-teal-400 font-bold">{currentStep + 1}</span> / {steps.length}
        </div>
        <button
          onClick={handleNext}
          className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition"
        >
          পরের ধাপ <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
