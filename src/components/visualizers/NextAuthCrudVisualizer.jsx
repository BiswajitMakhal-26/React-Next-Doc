import React, { useState } from 'react';
import { Lock, Shield, Server, RefreshCw, Database, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NextAuthCrudVisualizer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('user'); // 'user' | 'admin'
  const [dataList, setDataList] = useState([
    { id: 101, title: 'প্রোডাক্ট ডাটাবেস এন্ট্রি #১', public: true },
    { id: 102, title: 'প্রোডাক্ট ডাটাবেস এন্ট্রি #২', public: true },
    { id: 103, title: '🔒 কনফিডেনশিয়াল অ্যাডমিন মেট্রিক', public: false }
  ]);
  const [activeStep, setActiveStep] = useState(null);
  const [log, setLog] = useState('সিস্টেম প্রস্তুত। নিচের বাটন দিয়ে ফ্লো টেস্ট করুন।');

  const simulateAccess = (targetRoute) => {
    setActiveStep(1);
    setLog(`[১. রিকোয়েস্ট পাঠানো হলো]: Browser থেকে ${targetRoute} এ রিকোয়েস্ট পাঠানো হলো...`);

    setTimeout(() => {
      setActiveStep(2);
      if (targetRoute === '/admin' && (!isAuthenticated || role !== 'admin')) {
        setLog(`[২. Next.js Middleware সিকিউরিটি চেক]: অ্যাক্সেস ডিনাইড! ইউজার অ্যাডমিন নয়। Redirecting to /login... ⚠️`);
        setActiveStep('blocked');
        return;
      }
      setLog(`[২. Next.js Middleware ভ্যালিডেশন]: JWT কুকি যাচাই সম্পন্ন! অনুমতি দেওয়া হলো। ✅`);

      setTimeout(() => {
        setActiveStep(3);
        setLog(`[৩. React Server Component]: Server সাইডে সরাসরি ডাটাবেজ কুয়েরি সম্পন্ন হলো (No client waterfall)।`);

        setTimeout(() => {
          setActiveStep(4);
          setLog(`[৪. HTML ও RSC Payload প্রস্তুত]: Client এ নিরাপদ ও অপ্টিমাইজড UI Render হলো! 🎉`);
        }, 800);
      }, 800);
    }, 800);
  };

  const simulateServerAction = () => {
    setActiveStep('action');
    setLog(`[Server অ্যাকশন ('use server') ট্রিগার হলো]: Client থেকে কোনো পাবলিক API এন্ডপয়েন্ট ছাড়াই সরাসরি Server Function কল হলো...`);

    setTimeout(() => {
      const newEntry = {
        id: Date.now() % 1000,
        title: `নতুন আইটেম (Server Action #${Math.floor(Math.random() * 90 + 10)})`,
        public: true
      };
      setDataList(prev => [newEntry, ...prev]);
      setLog(`[revalidatePath('/dashboard') সম্পন্ন]: ডাটাবেজ আপডেট হলো এবং Next.js ক্যাশ রিভ্যালিডেট হয়ে ইনস্ট্যান্ট UI আপডেট হলো!`);
      setActiveStep(null);
    }, 1200);
  };

  return (
    <div className="bg-slate-900 border border-sky-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-sky-500/20 text-sky-400 rounded-lg">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              Next.js Middleware, Auth & Server Actions Architecture
              <span className="text-xs bg-sky-950 text-sky-400 border border-sky-800 px-2 py-0.5 rounded-full font-mono">Next.js 15 Flow</span>
            </h4>
            <p className="text-xs text-slate-400">দেখুন কিভাবে এজ মিডলওয়্যার রাউট প্রটেক্ট করে এবং Server অ্যাকশন ক্যাশ রিভ্যালিডেট করে</p>
          </div>
        </div>

        {/* User Session Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              isAuthenticated
                ? 'bg-emerald-600 text-white shadow'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {isAuthenticated ? 'লগইন আছেন (Session Active)' : 'লগআউট (Guest)'}
          </button>
          {isAuthenticated && (
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-xs text-sky-300 rounded-lg px-2 py-1.5 focus:outline-none"
            >
              <option value="user">Role: Regular User</option>
              <option value="admin">Role: Super Admin</option>
            </select>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
        <button
          onClick={() => simulateAccess('/dashboard')}
          className="bg-slate-800 hover:bg-slate-700 text-sky-300 font-mono text-xs px-3 py-2 rounded-lg border border-slate-700 transition"
        >
          GET /dashboard (User Route)
        </button>
        <button
          onClick={() => simulateAccess('/admin')}
          className="bg-slate-800 hover:bg-slate-700 text-rose-300 font-mono text-xs px-3 py-2 rounded-lg border border-slate-700 transition"
        >
          GET /admin (Protected Admin Route)
        </button>
        <button
          onClick={simulateServerAction}
          className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition shadow flex items-center justify-center gap-1.5"
        >
          <Database className="w-3.5 h-3.5" /> Run Server Action ('use server')
        </button>
      </div>

      {/* Pipeline Visualizer */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4">
        {[
          { id: 1, title: '1. Request', sub: 'Browser Navigation' },
          { id: 2, title: '2. Middleware', sub: 'Edge JWT Auth Guard' },
          { id: 3, title: '3. Server Component', sub: 'Direct DB / Prisma Fetch' },
          { id: 4, title: '4. RSC Stream', sub: 'Zero JS Bundle Stream' }
        ].map(item => (
          <div
            key={item.id}
            className={`p-3 rounded-lg border text-xs transition ${
              activeStep === item.id
                ? 'bg-sky-950 border-sky-400 text-sky-200 shadow-md'
                : activeStep === 'blocked' && item.id === 2
                ? 'bg-rose-950 border-rose-500 text-rose-200'
                : 'bg-slate-950/70 border-slate-800 text-slate-400'
            }`}
          >
            <div className="font-bold">{item.title}</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Log Console */}
      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs text-sky-400">
        <span className="text-slate-500 block text-[10px] mb-1">Execution Status:</span>
        <span className="font-bengali text-slate-200">{log}</span>
      </div>
    </div>
  );
}
