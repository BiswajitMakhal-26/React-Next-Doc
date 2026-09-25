import React, { useState } from 'react';
import { Play, RotateCcw, Eye, Code, Cpu, Sparkles, Check, AlertCircle } from 'lucide-react';
import CodeBlock from './CodeBlock';

export default function InteractivePlayground({ playgroundType = 'declarative' }) {
  const [activeTab, setActiveTab] = useState('live'); // 'live' | 'code'

  // State for Declarative vs Imperative
  const [isReactHappy, setIsReactHappy] = useState(true);
  const [vanillaCount, setVanillaCount] = useState(0);
  const [vanillaLogs, setVanillaLogs] = useState([]);

  // State for Props Pipeline
  const [userName, setUserName] = useState('Arka Dev');
  const [userRole, setUserRole] = useState('Frontend Engineer');
  const [badgeColor, setBadgeColor] = useState('cyan');

  // State for State Counter with Batching Demo
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(1);
  const [batchLog, setBatchLog] = useState([]);

  // State for Array Methods (map, filter, reduce)
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Core Foundation', price: 1200, category: 'Core', enrolled: true },
    { id: 2, title: 'Tailwind CSS Mastery', price: 800, category: 'CSS', enrolled: false },
    { id: 3, title: 'Next.js 15 Fullstack', price: 2500, category: 'Next', enrolled: true },
    { id: 4, title: 'Zustand & TanStack Query', price: 1500, category: 'State', enrolled: true }
  ]);
  const [activeFilter, setActiveFilter] = useState('All');

  // Handlers for Declarative vs Imperative
  const simulateVanillaStep = () => {
    const nextVal = vanillaCount + 1;
    setVanillaCount(nextVal);
    setVanillaLogs(prev => [
      `[DOM Step 1]: document.getElementById('count-text').innerText = ${nextVal}`,
      `[DOM Step 2]: document.getElementById('box').style.borderColor = '${nextVal % 2 === 0 ? '#22c55e' : '#38bdf8'}'`,
      `[DOM Step 3]: Browser Reflow & Repaint Triggered! (Manual DOM sync)`,
      ...prev.slice(0, 3)
    ]);
  };

  // Handlers for State Batching
  const handleDirectThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setRenderCount(r => r + 1);
    setBatchLog(prev => [
      `[সতর্কবার্তা]: ৩ বার setCount(count + 1) কল করা সত্ত্বেও মাত্র ১ বৃদ্ধি পেয়েছে! কারণ ৩টি Call-ই একই Stale Snapshot Value (${count}) পেয়েছিল।`,
      ...prev.slice(0, 2)
    ]);
  };

  const handleFunctionalThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setRenderCount(r => r + 1);
    setBatchLog(prev => [
      `[সফল আপডেট]: setCount(prev => prev + 1) Functional Updater ব্যবহার করায় React Queue থেকে Latest State নিয়ে নিখুঁতভাবে ৩ বৃদ্ধি করেছে!`,
      ...prev.slice(0, 2)
    ]);
  };

  const resetBatch = () => {
    setCount(0);
    setBatchLog(['State রিসেট করা হয়েছে।']);
  };

  return (
    <div className="bg-[#0e121a] border-2 border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl my-6">
      {/* Playground Header */}
      <div className="bg-[#121622] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
          <span className="font-bold text-xs sm:text-sm text-cyan-300 font-sans flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Interactive Browser Playground (VS Code ছাড়াই সরাসরি রান করুন)
          </span>
          <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded font-mono font-bold">
            Live
          </span>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-3 py-1 rounded-lg font-medium transition flex items-center gap-1.5 ${
              activeTab === 'live' ? 'bg-cyan-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" /> Live Output
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 rounded-lg font-medium transition flex items-center gap-1.5 ${
              activeTab === 'code' ? 'bg-cyan-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" /> Code & Logic
          </button>
        </div>
      </div>

      {/* Playground Content Area */}
      <div className="p-5">
        {/* 1. Declarative vs Imperative Playground */}
        {playgroundType === 'declarative' && (
          <div>
            {activeTab === 'live' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* React Declarative */}
                <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">
                      ⚛️ React Declarative Way (State চালিত)
                    </span>
                    <p className="text-[11px] text-slate-400 mb-3">
                      আমরা React-কে শুধু বলি State কী হবে, DOM নিজে আপডেট হয়।
                    </p>
                    <div
                      className={`p-4 rounded-xl text-center font-bold text-sm transition-all duration-300 ${
                        isReactHappy
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                          : 'bg-rose-950/80 text-rose-300 border border-rose-500/50'
                      }`}
                    >
                      {isReactHappy ? '😊 UI Is In Sync (Happy)' : '😴 State Changed (Cool)'}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsReactHappy(!isReactHappy)}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold py-2 rounded-lg transition"
                  >
                    State টগল করুন (setIsReactHappy)
                  </button>
                </div>

                {/* Vanilla Imperative */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 block mb-1">
                      📜 Vanilla JS Imperative Way (ম্যানুয়াল DOM পরিবর্তন)
                    </span>
                    <p className="text-[11px] text-slate-400 mb-3">
                      প্রতিটি ধাপে ব্রাউজার DOM ম্যানুয়ালি ধরে ধরে বদলাতে হয়।
                    </p>
                    <div className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 space-y-1 max-h-24 overflow-y-auto">
                      {vanillaLogs.length === 0 ? (
                        <span className="text-slate-500">নিচের বাটনে ক্লিক করে DOM লগ দেখুন...</span>
                      ) : (
                        vanillaLogs.map((log, i) => <div key={i}>{log}</div>)
                      )}
                    </div>
                  </div>
                  <button
                    onClick={simulateVanillaStep}
                    className="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold py-2 rounded-lg transition"
                  >
                    ম্যানুয়াল DOM স্টেপ রান করুন ({vanillaCount})
                  </button>
                </div>
              </div>
            ) : (
              <CodeBlock
                language="jsx"
                filename="DeclarativeVsImperative.jsx"
                code={`// 1. Declarative Way (React)
function StatusCard() {
  const [isActive, setIsActive] = useState(false);
  return (
    <button onClick={() => setIsActive(!isActive)}>
      {isActive ? 'Active 🟢' : 'Inactive ⚪'}
    </button>
  );
}

// 2. Imperative Way (Vanilla JS)
const btn = document.getElementById('my-btn');
btn.addEventListener('click', () => {
  if (btn.innerText === 'Active 🟢') {
    btn.innerText = 'Inactive ⚪';
  } else {
    btn.innerText = 'Active 🟢';
  }
});`}
              />
            )}
          </div>
        )}

        {/* 2. Props Pipeline Playground */}
        {playgroundType === 'props' && (
          <div>
            {activeTab === 'live' ? (
              <div className="space-y-4">
                <p className="text-xs text-slate-300 font-sans">
                  নিচের Control রুম দিয়ে Parent Component এর State মান পরিবর্তন করুন। সাথে সাথে দেখুন কীভাবে Props এর মাধ্যমে Child Component এ Data প্রবাহিত হয়ে UI বদলে দিচ্ছে:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Parent Controller */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 block">
                      &lt;ParentComponent /&gt; (Control Room)
                    </span>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">User Name (State)</label>
                      <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">User Role (State)</label>
                      <input
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-xs text-white outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>

                    <div className="flex gap-2 pt-1">
                      {['cyan', 'emerald', 'purple'].map(color => (
                        <button
                          key={color}
                          onClick={() => setBadgeColor(color)}
                          className={`text-xs px-2.5 py-1 rounded capitalize font-mono ${
                            badgeColor === color ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {color} Theme
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Child Receiver */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/40 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          &lt;ChildProfileCard {'{...props}'} /&gt;
                        </span>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                          Read-Only Props
                        </span>
                      </div>

                      <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                            badgeColor === 'emerald' ? 'bg-emerald-500 text-slate-950' :
                            badgeColor === 'purple' ? 'bg-purple-500 text-white' :
                            'bg-cyan-500 text-slate-950'
                          }`}>
                            {userName.charAt(0) || 'U'}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white font-sans">{userName || 'No Name'}</h4>
                            <p className="text-[11px] text-slate-400 font-mono">{userRole || 'No Role'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-400 font-mono bg-slate-900/80 p-2 rounded mt-3 border border-slate-800">
                      Passed Props: {JSON.stringify({ name: userName, role: userRole, theme: badgeColor })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <CodeBlock
                language="jsx"
                filename="PropsPipelineExample.jsx"
                code={`// 1. Parent Component: State ধারণ করে এবং Props আকারে পাঠায়
function Parent() {
  const [user, setUser] = useState({ name: 'Arka Dev', role: 'Frontend Engineer' });

  return <ChildProfileCard name={user.name} role={user.role} />;
}

// 2. Child Component: Props রিসিভ করে (Destructuring)
function ChildProfileCard({ name, role }) {
  // ⚠️ মনে রাখবেন: Child সরাসরি props.name = 'New' মিউটেট করতে পারে না!
  // Props হলো Pure এবং Read-Only।
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}`}
              />
            )}
          </div>
        )}

        {/* 3. State Batching & Updater Playground */}
        {playgroundType === 'batching' && (
          <div>
            {activeTab === 'live' ? (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-slate-400 font-sans">Current Counter Value:</span>
                    <div className="text-3xl font-mono font-bold text-cyan-400">{count}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-mono">Render Count:</span>
                    <div className="text-xl font-mono text-amber-400 font-bold">{renderCount} বার</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-950 rounded-xl border border-rose-500/40 space-y-2">
                    <span className="text-xs font-mono text-rose-300 font-bold block">
                      ❌ সরাসরি ৩ বার: setCount(count + 1)
                    </span>
                    <p className="text-[11px] text-slate-400 font-sans">
                      একই ইভেন্টে ৩ বার কল করলেও মান মাত্র ১ বাড়বে! কারণ ৩টি কল-ই একই Stale মান দেখে।
                    </p>
                    <button
                      onClick={handleDirectThree}
                      className="w-full bg-rose-600/80 hover:bg-rose-500 text-white text-xs font-mono py-2 rounded-lg transition"
                    >
                      setCount(count + 1) x 3
                    </button>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/40 space-y-2">
                    <span className="text-xs font-mono text-emerald-300 font-bold block">
                      ✅ Functional Updater: {'setCount(prev => prev + 1)'}
                    </span>
                    <p className="text-[11px] text-slate-400 font-sans">
                      React ইন্টারনাল Update Queue বজায় রেখে গ্যারান্টেড ৩ বাড়াবে!
                    </p>
                    <button
                      onClick={handleFunctionalThree}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono py-2 rounded-lg transition"
                    >
                      setCount(prev =&gt; prev + 1) x 3
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div className="text-xs text-slate-400 font-mono">
                    {batchLog[0] || 'বাটনে ক্লিক করে টেস্ট করুন...'}
                  </div>
                  <button onClick={resetBatch} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded hover:bg-slate-700">
                    রিসেট
                  </button>
                </div>
              </div>
            ) : (
              <CodeBlock
                language="jsx"
                filename="StateBatching.jsx"
                code={`// ❌ ভুল পদ্ধতি: একই ইভেন্টে Stale Value পায়
const handleWrong = () => {
  setCount(count + 1); // count = 0 -> next 1
  setCount(count + 1); // count এখনো 0 -> next 1
  setCount(count + 1); // count এখনো 0 -> next 1
  // ফলাফল: মাত্র ১ বাড়বে!
};

// ✅ সঠিক ইন্ডাস্ট্রি পদ্ধতি (Updater Function):
const handleCorrect = () => {
  setCount(prev => prev + 1); // 0 + 1 = 1
  setCount(prev => prev + 1); // 1 + 1 = 2
  setCount(prev => prev + 1); // 2 + 1 = 3
  // ফলাফল: নিশ্চিতভাবে ৩ বাড়বে!
};`}
              />
            )}
          </div>
        )}

        {/* 4. Array Methods Playground (map, filter, reduce) */}
        {playgroundType === 'arrays' && (
          <div>
            {activeTab === 'live' ? (
              <div className="space-y-4">
                {/* Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {['All', 'Core', 'CSS', 'Next', 'State'].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`text-xs px-2.5 py-1 rounded-lg transition font-mono ${
                          activeFilter === cat ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        filter: {cat}
                      </button>
                    ))}
                  </div>

                  {/* Reduce calculation */}
                  <div className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-emerald-400 font-bold">
                    reduce(total): ₹
                    {courses
                      .filter(c => activeFilter === 'All' || c.category === activeFilter)
                      .reduce((sum, c) => sum + c.price, 0)}
                  </div>
                </div>

                {/* Rendered Map list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {courses
                    .filter(c => activeFilter === 'All' || c.category === activeFilter)
                    .map(course => (
                      <div key={course.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div>
                          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{course.category}</span>
                          <h5 className="text-xs font-bold text-white font-sans">{course.title}</h5>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-200">₹{course.price}</span>
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <CodeBlock
                language="jsx"
                filename="ArrayMethodsReact.jsx"
                code={`// 1. filter() দিয়ে ক্যাটাগরি অনুযায়ী ফিল্টার করা
const filteredCourses = courses.filter(course => 
  selectedCategory === 'All' || course.category === selectedCategory
);

// 2. reduce() দিয়ে মোট মূল্যের সাম বের করা
const totalPrice = filteredCourses.reduce((accumulator, current) => 
  accumulator + current.price, 0
);

// 3. map() দিয়ে JSX Element Render করা
return (
  <div>
    {filteredCourses.map(course => (
      <div key={course.id}> {/* ⚠️ ইউনিক key মাস্ট! */}
        <h4>{course.title}</h4>
        <span>₹{course.price}</span>
      </div>
    ))}
  </div>
);`}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
