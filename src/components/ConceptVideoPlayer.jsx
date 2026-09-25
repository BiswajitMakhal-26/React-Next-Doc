import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Volume2, Sparkles, Activity, Cpu, Layers, Monitor } from 'lucide-react';

const videoSteps = [
  {
    id: 1,
    title: '১ম ধাপ: Browser Event Trigger (User Click)',
    duration: '0:03',
    phase: 'User Interaction',
    stageName: 'Browser DOM Window',
    icon: Monitor,
    badgeColor: 'border-cyan-500/50 text-cyan-400 bg-cyan-950/60',
    mentorVoice: 'User যখন ব্রাউজারে একটি Button এ ক্লিক করে, তখন JavaScript এর Native Event Listener ফায়ার হয় এবং React এর Synthetic Event সিস্টেমে সিগন্যাল পাঠায়।',
    actionDesc: 'User clicked: <button onClick={() => setCount(prev => prev + 1)}> কাউন্টার বাড়ান </button>',
    metrics: { event: 'SyntheticMouseEvent', target: 'button#counter-btn', currentCount: 0, nextCount: 1 }
  },
  {
    id: 2,
    title: '২য় ধাপ: Fiber Hook Queue & State Update',
    duration: '0:06',
    phase: 'React Core Engine',
    stageName: 'React Fiber Linked List',
    icon: Cpu,
    badgeColor: 'border-amber-500/50 text-amber-400 bg-amber-950/60',
    mentorVoice: 'React এর Fiber Node এর ভেতরে memoizedState লিঙ্কড-লিস্টে এই আপডেট কিউ (Update Queue) তৈরি হয়। Setter Function কল হলে React সঙ্গে সঙ্গে Re-render শিডিউল করে।',
    actionDesc: 'Fiber Node: Hook.queue.push(action) -> Scheduled Concurrent Re-render Task',
    metrics: { hookType: 'useState', previousState: 0, queuedUpdate: 'prev => prev + 1', scheduledPriority: 'NormalPriority' }
  },
  {
    id: 3,
    title: '৩য় ধাপ: Virtual DOM Diffing & Reconciliation',
    duration: '0:09',
    phase: 'Reconciliation Phase',
    stageName: 'Dual Virtual DOM Comparison',
    icon: Layers,
    badgeColor: 'border-purple-500/50 text-purple-400 bg-purple-950/60',
    mentorVoice: 'React নতুন Render এর Virtual DOM Tree তৈরি করে এবং পূর্ববর্তী স্ন্যাপশটের সাথে হিউরিস্টিক Diffing অ্যালগরিদম দিয়ে তুলনা করে। শুধুমাত্র যেখানে পরিবর্তন হয়েছে (Change detected), কেবল সেই নোডটি চিহ্নিত হয়।',
    actionDesc: 'Diffing Tree: <h1> ও <p> অপরিবর্তিত। শুধুমাত্র <span class="count">0 -> 1</span> নোডে Mutation প্রয়োজন!',
    metrics: { totalVNodes: 42, changedNodes: 1, diffDurationMs: '0.12ms', garbageSaved: '99.8%' }
  },
  {
    id: 4,
    title: '৪র্থ ধাপ: Real DOM Commit & Browser Repaint',
    duration: '0:12',
    phase: 'Commit & Paint Phase',
    stageName: 'Browser Render Tree',
    icon: Activity,
    badgeColor: 'border-emerald-500/50 text-emerald-400 bg-emerald-950/60',
    mentorVoice: 'Commit Phase এ React সরাসরি Real DOM এর নির্দিষ্ট টেক্সট নোডটি আপডেট করে। কোনো পুরো পেজ রিলোড বা ফ্লিকার ছাড়া 60 FPS এ ইউজার ফ্রেশ UI দেখতে পায়!',
    actionDesc: 'DOM Commit: textNode.nodeValue = "1" -> Browser Paint (Zero layout shift, 60fps silky smooth)',
    metrics: { domMutations: 1, layoutShift: '0.00', renderFPS: '60 FPS', status: 'Completed ✅' }
  }
];

export default function ConceptVideoPlayer({ language = 'bn' }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const timerRef = useRef(null);

  const step = videoSteps[currentStepIndex];

  // Auto-play timeline loop
  useEffect(() => {
    if (isPlaying) {
      const intervalMs = 4000 / playbackSpeed;
      timerRef.current = setTimeout(() => {
        setCurrentStepIndex(prev => (prev + 1) % videoSteps.length);
      }, intervalMs);
    }
    return () => clearTimeout(timerRef.current);
  }, [isPlaying, currentStepIndex, playbackSpeed]);

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const handleNext = () => {
    setCurrentStepIndex(prev => (prev + 1) % videoSteps.length);
  };

  const handlePrev = () => {
    setCurrentStepIndex(prev => (prev - 1 + videoSteps.length) % videoSteps.length);
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0c1017] shadow-2xl shadow-cyan-950/40">
      {/* Player Top Bar */}
      <div className="px-4 py-3 bg-[#111622] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>📹 Animated Concept Video Simulator</span>
              <span className="text-[10px] bg-red-600 text-white font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                Interactive Live
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              React কীভাবে পর্দার পেছনে কাজ করে, ধাপে ধাপে ভিডিও অ্যানিমেশনের মাধ্যমে লাইভ দেখুন
            </p>
          </div>
        </div>

        {/* Speed Controls */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
          <span className="text-[10px] text-slate-400 px-1 font-mono">Speed:</span>
          {[1, 1.5, 2].map(speed => (
            <button
              key={speed}
              onClick={() => setPlaybackSpeed(speed)}
              className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                playbackSpeed === speed ? 'bg-cyan-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      {/* Visual Animation Stage (Screen Simulation) */}
      <div className="relative p-6 bg-gradient-to-b from-[#0c1017] via-[#10141f] to-[#0c1017] min-h-[300px] flex flex-col justify-between">
        {/* Stage Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <step.icon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wide">
              Stage: {step.stageName}
            </span>
          </div>

          <div className={`px-2.5 py-1 rounded-full border text-xs font-mono font-semibold ${step.badgeColor}`}>
            Phase: {step.phase}
          </div>
        </div>

        {/* Interactive Visual Canvas Area */}
        <div className="my-auto py-4">
          {currentStepIndex === 0 && (
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-xl text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="text-xs text-slate-400 font-mono">Mock Browser Screen</div>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">কাউন্টার মান:</span>
                  <div className="text-2xl font-bold font-mono text-cyan-400">0</div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-xs rounded-xl shadow-lg ring-4 ring-cyan-500/30 animate-pulse">
                  কাউন্টার বাড়ান (Click!) 👆
                </button>
              </div>
              <div className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 p-2 rounded-lg border border-cyan-800/40">
                ⚡ Event Listener Dispatched: SyntheticMouseEvent (Bubble phase)
              </div>
            </div>
          )}

          {currentStepIndex === 1 && (
            <div className="max-w-lg mx-auto p-5 rounded-2xl bg-slate-900/90 border border-amber-500/40 shadow-xl space-y-3 animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                <span>Fiber Node Memory Inspector</span>
                <span className="bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-700/50">
                  Update Queued
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-slate-500 text-[10px]">Current memoizedState</div>
                  <div className="text-lg font-bold text-slate-300">0</div>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/50 bg-amber-950/20">
                  <div className="text-amber-400 text-[10px]">Next Queued Action</div>
                  <div className="text-lg font-bold text-amber-300">prev =&gt; 0 + 1 (1)</div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-amber-200 bg-amber-950/40 p-2 rounded-lg border border-amber-800/30">
                🔄 React Scheduler: High Priority task added to Concurrent Fiber WorkLoop
              </div>
            </div>
          )}

          {currentStepIndex === 2 && (
            <div className="max-w-lg mx-auto p-5 rounded-2xl bg-slate-900/90 border border-purple-500/40 shadow-xl space-y-3 animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between text-xs font-mono text-purple-400">
                <span>Virtual DOM Tree Reconciliation</span>
                <span className="bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-700/50">
                  Diffing 0.12ms
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-500 block">Old Virtual DOM</span>
                  <div className="text-slate-400 text-[11px]">&lt;div&gt;&lt;span&gt;0&lt;/span&gt;&lt;/div&gt;</div>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-purple-500/60 bg-purple-950/30 space-y-1">
                  <span className="text-[10px] text-purple-300 block">New Virtual DOM (Mutation)</span>
                  <div className="text-purple-300 text-[11px] font-bold">&lt;div&gt;&lt;span className="text-emerald-400"&gt;1&lt;/span&gt;&lt;/div&gt;</div>
                </div>
              </div>
              <div className="text-[11px] font-mono text-purple-200 bg-purple-950/40 p-2 rounded-lg border border-purple-800/30 text-center">
                🎯 Result: 99.8% DOM Tree untouched. Only 1 TextNode marked for Commit!
              </div>
            </div>
          )}

          {currentStepIndex === 3 && (
            <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 shadow-xl text-center space-y-3 animate-in zoom-in-95 duration-300">
              <div className="text-xs text-emerald-400 font-mono">Real DOM Screen Repainted</div>
              <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/60 shadow-lg shadow-emerald-950/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">আপডেটেড মান:</span>
                  <div className="text-3xl font-extrabold font-mono text-emerald-400 animate-bounce">1 ✅</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded font-mono block">
                    Zero Reload
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Repaint: 1.1ms</span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 p-2 rounded-lg border border-emerald-800/40">
                🎉 Render Pipeline Complete! 60FPS UI updated seamlessly.
              </div>
            </div>
          )}
        </div>

        {/* Mentor Voice Subtitle Box */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 flex items-start gap-3 shadow-inner">
          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
            <Volume2 className="w-4 h-4 animate-pulse" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">মেন্টর ব্যাখ্যা (Step {currentStepIndex + 1}/4):</span>
              <span className="text-[11px] font-mono text-cyan-400">{step.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {step.mentorVoice}
            </p>
          </div>
        </div>
      </div>

      {/* Video Player Timeline & Controls */}
      <div className="px-4 py-3 bg-[#111622] border-t border-slate-800 space-y-2.5">
        {/* Timeline Progress Bar with Step Checkpoints */}
        <div className="grid grid-cols-4 gap-2">
          {videoSteps.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`text-left p-1.5 rounded-lg border transition ${
                currentStepIndex === idx
                  ? 'bg-cyan-950 border-cyan-500 text-cyan-300 shadow-sm'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span>Step {st.id}</span>
                <span>{st.duration}</span>
              </div>
              <div className="text-[11px] font-semibold truncate mt-0.5">{st.phase}</div>
            </button>
          ))}
        </div>

        {/* Playback Button Bar */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Previous Step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handlePlayPause}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition shadow-md shadow-cyan-900/30 active:scale-95"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause ⏸</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play ▶</span>
                </>
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Next Step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleRestart}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              title="Restart from beginning"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            Current: Step {currentStepIndex + 1} of 4 • {videoSteps[currentStepIndex].duration}
          </div>
        </div>
      </div>
    </div>
  );
}
