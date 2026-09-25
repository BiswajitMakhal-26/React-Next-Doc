import React, { useState } from 'react';
import { Database, Box, Layers, Code, Zap } from 'lucide-react';

export default function StateManagementVisualizer() {
  const [selectedLib, setSelectedLib] = useState('zustand');

  const libs = {
    context: {
      name: 'React Context API',
      role: 'Low-frequency State (Theme, Auth, Locale)',
      bundle: '0 KB (Built into React)',
      setup: 'মাঝারি (Provider, createContext, useContext wrapper)',
      reRender: 'ঝুঁকিপূর্ণ! Context ভ্যালুর যেকোনো একটি প্রোপার্টি বদলালে সব Consumer Child Re-render হয়',
      codeSnippet: `// 1. Create Context
const AuthContext = createContext(null);

// 2. Wrap Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Consume in component
const { user } = useContext(AuthContext);`,
      pros: ['কোনো এক্সটার্নাল Package দরকার নেই', 'থিম ও অথেনটিকেশন State শেয়ারের জন্য সহজ'],
      cons: ['High-frequency State এ পারফরম্যান্স খারাপ', 'Provider Hell তৈরি হতে পারে']
    },
    redux: {
      name: 'Redux Toolkit (RTK)',
      role: 'Complex Enterprise Architecture with Strict Predictability',
      bundle: '~11.5 KB (gzipped)',
      setup: 'বেশি (Store, Slice, Reducer, Typed Hooks, Provider)',
      reRender: 'চমৎকার! useSelector দিয়ে শুধুমাত্র যেটুকু State প্রয়োজন সেটুকু সিলেক্ট করা যায়',
      codeSnippet: `// 1. Create Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }, // Immer handles immutability
  },
});

// 2. Configure Store
export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// 3. Consume in component
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
dispatch(counterSlice.actions.increment());`,
      pros: ['Redux DevTools এর মাধ্যমে টাইম ট্রাভেল ডিবাগিং', 'কঠোর আর্কিটেকচার যা বড় এন্টারপ্রাইজ টিমে শৃঙ্খলা বজায় রাখে'],
      cons: ['অতিরিক্ত বয়লারপ্লেট কোড', 'ছোট প্রজেক্টের জন্য ওভারকিল']
    },
    zustand: {
      name: 'Zustand (The Modern Choice)',
      role: 'Modern Standard for Global State (Hooks-based & Lightweight)',
      bundle: '~1.1 KB (Microscopic!)',
      setup: 'একদম সহজ (No Provider wrapping required, 1 function call)',
      reRender: 'সর্বোচ্চ অপ্টিমাইজড! সিলেক্টরের মাধ্যমে ফাইন-গ্রেইন্ড Re-render সাবস্ক্রিপশন',
      codeSnippet: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Create store with actions together
export const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// 2. Consume anywhere directly without Provider!
function CounterButton() {
  const count = useStore((state) => state.count);
  const inc = useStore((state) => state.inc);
  return <button onClick={inc}>Count: {count}</button>;
}`,
      pros: ['Provider দিয়ে Component ট্রির wrapping এর ঝামেলা নেই', 'অত্যন্ত ছোট সাইজ (~১ কিলোবাইট)', 'অটোমেটিক লোকাল স্টোরেজ পারসিস্টেন্স মিডলওয়্যার'],
      cons: ['খুব বড় এন্টারপ্রাইজে রেডুক্স এর মতো Framework-লেভেল গাইডলাইন নিজে তৈরি করতে হয়']
    }
  };

  const curr = libs[selectedLib];

  return (
    <div className="bg-slate-900 border border-emerald-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              State Management Triad: Context vs Redux Toolkit vs Zustand
              <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-mono">Industry Faceoff</span>
            </h4>
            <p className="text-xs text-slate-400">কখন কোনটি বেছে নেবেন এবং ইন্ডাস্ট্রিতে কোনটি সবচেয়ে বেশি ব্যবহৃত হচ্ছে</p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          {Object.keys(libs).map(k => (
            <button
              key={k}
              onClick={() => setSelectedLib(k)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono capitalize transition ${
                selectedLib === k
                  ? 'bg-emerald-600 text-white font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 lg:col-span-1 space-y-3">
          <div>
            <span className="text-[11px] text-slate-400 block">Library নাম:</span>
            <span className="text-sm font-bold text-emerald-400 font-mono">{curr.name}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">বান্ডিল সাইজ:</span>
            <span className="text-xs font-semibold text-cyan-300 font-mono">{curr.bundle}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">সেটআপ জটিলতা:</span>
            <span className="text-xs text-slate-200 font-bengali">{curr.setup}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">Re-render আচরণ:</span>
            <span className="text-xs text-slate-300 font-bengali leading-relaxed">{curr.reRender}</span>
          </div>
          <div className="pt-2 border-t border-slate-800">
            <span className="text-[11px] text-emerald-400 font-bold block mb-1">সুবিধা:</span>
            <ul className="text-xs text-slate-300 space-y-1 font-bengali list-disc list-inside">
              {curr.pros.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-emerald-400" /> সিনট্যাক্স ও কোড প্যাটার্ন
              </span>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">JavaScript / React</span>
            </div>
            <pre className="p-3 bg-slate-900 rounded-lg text-emerald-300 text-xs font-mono overflow-x-auto leading-relaxed border border-slate-800">
              {curr.codeSnippet}
            </pre>
          </div>

          <div className="mt-3 p-2.5 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-300 font-bengali">
            <strong className="text-emerald-400">মেন্টরের পরামর্শ:</strong> ২০২৬ এ আধুনিক React অ্যাপ্লিকেশন এবং Next.js এর জন্য <span className="text-cyan-300 font-mono">Zustand</span> অধিকাংশ সিনিয়র ইঞ্জিনিয়ারদের প্রথম পছন্দ, কারণ এতে কোনো Provider wrapping লাগে না এবং কোড পরিষ্কার থাকে!
          </div>
        </div>
      </div>
    </div>
  );
}
