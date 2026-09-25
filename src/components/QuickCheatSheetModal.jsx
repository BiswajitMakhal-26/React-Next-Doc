import React, { useState } from 'react';
import { X, Bookmark, Sparkles, Copy, Check } from 'lucide-react';
import CodeBlock from './CodeBlock';

export default function QuickCheatSheetModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('hooks');

  if (!isOpen) return null;

  const sheets = {
    hooks: [
      { name: 'useState', syntax: 'const [state, setState] = useState(initialVal);', note: 'Functional State। Previous State এর ওপর নির্ভর করলে setState(prev => prev + 1) Functional Updater ব্যবহার করবেন।' },
      { name: 'useEffect', syntax: 'useEffect(() => {\n  // effect code\n  return () => { /* cleanup */ };\n}, [deps]);', note: 'Dependency Array ফাঁকা [] দিলে শুধু Mount এ একবার চলবে। Variable দিলে সেই ভ্যালু পরিবর্তন হলেই চলবে।' },
      { name: 'useRef', syntax: 'const ref = useRef(initialVal);\n<input ref={ref} /> // ref.current', note: 'Re-render ট্রিগার না করেই Mutable Value বা সরাসরি Browser DOM নোড অ্যাক্সেস করতে ব্যবহৃত হয়।' },
      { name: 'useMemo', syntax: 'const memoizedVal = useMemo(() => computeHeavy(a, b), [a, b]);', note: 'ভারী গাণিতিক ক্যালকুলেশনের রেজাল্ট Memoize করে, যাতে অপ্রয়োজনীয় Re-render এ CPU বেঁচে যায়।' },
      { name: 'useCallback', syntax: 'const memoizedFn = useCallback((val) => doSomething(val), [deps]);', note: 'Function এর রেফারেন্স ধরে রাখে, যাতে React.memo যুক্ত Child Component অপ্রয়োজনে Re-render না হয়।' },
      { name: 'useContext', syntax: 'const value = useContext(MyContext);', note: 'Prop Drilling ছাড়া Global Context Data কনজিউম করার Hook।' },
      { name: 'useReducer', syntax: 'const [state, dispatch] = useReducer(reducerFn, initialVal);', note: 'জটিল ও নেস্টেড State Transitions এর জন্য Predictable Alternative।' }
    ],
    nextjs: [
      { name: 'App Router Layout', syntax: 'export default function Layout({ children }) {\n  return <main>{children}</main>;\n}', note: 'Root ও Sub-route এর কমন শেলের জন্য layout.tsx ব্যবহৃত হয়।' },
      { name: 'Server Actions', syntax: `'use server';\nexport async function createItem(formData) {\n  await db.item.create(...);\n  revalidatePath('/dashboard');\n}`, note: 'কোনো API Route ছাড়াই Client Form থেকে সরাসরি নিরাপদ Backend Mutation।' },
      { name: 'Dynamic Params', syntax: 'export default async function Page({ params }) {\n  const { id } = await params;\n  return <div>Post #{id}</div>;\n}', note: 'Next.js 15 এ Dynamic Folder যেমন [id] এর Params পাওয়ার উপায়।' },
      { name: 'generateMetadata', syntax: 'export async function generateMetadata({ params }) {\n  return { title: `Blog ${params.id}`, description: "SEO Optimized" };\n}', note: 'Dynamic OpenGraph ও SEO Metadata তৈরির স্ট্যান্ডার্ড পদ্ধতি।' }
    ],
    state: [
      { name: 'Zustand Store', syntax: 'export const useStore = create((set) => ({\n  bears: 0,\n  increase: () => set((state) => ({ bears: state.bears + 1 })),\n}));', note: 'Zero Boilerplate, কোনো Provider লাগে না, যেকোনো ফাইলে কল করলেই চলে!' },
      { name: 'TanStack Query (v5)', syntax: 'const { data, isPending, error } = useQuery({\n  queryKey: [\'todos\'],\n  queryFn: fetchTodos,\n  staleTime: 1000 * 60 * 5,\n});', note: 'Server State Caching, Background Refetch এবং Automatic Retry এর অবিসংবাদিত রাজা।' },
      { name: 'RTK createSlice', syntax: 'const slice = createSlice({\n  name: "auth",\n  initialState,\n  reducers: {\n    login: (state, action) => { state.user = action.payload; },\n  },\n});', note: 'Immer Integration এর কারণে সরাসরি Mutating Syntax লিখলেও Immutable থাকে।' }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#0e121a] border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#121622]">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-sans">
                React & Next.js কুইক CheatSheet (Pocket Reference)
              </h3>
              <p className="text-xs text-slate-400 font-sans">ইন্টারভিউ ও দৈনন্দিন কোডিংয়ের ইনস্ট্যান্ট Syntax গাইড</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 pt-2 gap-4">
          {[
            { id: 'hooks', label: 'React Hooks Cheatsheet' },
            { id: 'nextjs', label: 'Next.js 15 App Router' },
            { id: 'state', label: 'State & Data Fetching' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2.5 text-xs font-mono font-semibold transition border-b-2 ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {sheets[activeTab].map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Industry Standard</span>
              </div>

              <CodeBlock code={item.syntax} language="jsx" filename={`${item.name}.js`} />

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                💡 <strong>নোট:</strong> {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
