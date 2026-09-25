export const module3 = {
  id: 'mod3',
  title: 'Module 3: Optimization, Deep Hooks & Network Layer',
  nameBangla: 'মডিউল ৩: পারফরম্যান্স অপ্টিমাইজেশন, ডিপ Hook্স ও নেটওয়ার্ক লেয়ার',
  badge: 'Module 3',
  topics: [
    {
      id: 'mod3-http-requests',
      title: 'Handling HTTP Requests: Fetch API vs Axios',
      moduleTitle: 'Module 3: Optimization & Network',
      keywords: 'http requests fetch axios async await try catch error handling json status codes',
      content: {
        easyBreakdown: {
          oneLiner: 'Fetch API দিয়ে রিমোট ব্যাকএন্ড Server এ GET, POST, PUT, DELETE রিকোয়েস্ট পাঠানো।',
          analogy: 'চিঠিপত্র বা কুরিয়ার সার্ভিস—বার্তা পাঠানো এবং প্রতিউত্তরে পার্সেল গ্রহণ করা।',
          whyNeed: 'ডাটাবেসের রিয়েল ডেটা ফ্রন্টএন্ড স্ক্রিনে ইউজারের সামনে তুলে ধরার জন্য।'
        },
        mentorNote: 'ফ্রন্টএন্ড ডেভেলপারের কাজের ৫০% জুড়েই থাকে ব্যাকএন্ড API এর সাথে কথা বলা। Browser এর নেটিভ fetch API বনাম ইন্ডাস্ট্রি স্ট্যান্ডার্ড Axios এর রিয়েল-ওয়ার্ল্ড সুবিধাগুলো সহজ বাংলায় বুঝে নিই।',
        target: 'অ্যাসিঙ্ক্রোনাস নেটওয়ার্কিং, স্ট্যাটাস কোড হ্যান্ডলিং, JSON ট্রান্সফরমেশন এবং এরর ক্যাচিং আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'Fetch এ ৪MD বা ৫MD Server এরর আসলেও Promise রিজেক্ট হয় না। ফলে ম্যানুয়ালি `if (!res.ok)` চেক না করলে এরর ধরা পড়ে না এবং প্রতিবার `await res.json()` করতে হয়।',
          solution: 'Axios যেকোনো 2xx এর বাইরের স্ট্যাটাস কোড সরাসরি `catch` ব্লকে পাঠায় এবং ডেটা স্বয়ংক্রিয়ভাবে পার্স করে `response.data` তে প্রস্তুত করে দেয়।'
        },
        sections: [
          {
            heading: 'Fetch vs Axios সহজ তুলনা',
            body: '১. JSON Parsing: Fetch এ দুটি স্টেপ লাগে (`await res.json()`), কিন্তু Axios স্বয়ংক্রিয়ভাবে JSON ডেটা পার্স করে `response.data` তে দিয়ে দেয়।\n২. Error Handling: Fetch এ ৪MD Server এরর আসলেও Promise রিজেক্ট হয় না (যদি না নেটওয়ার্ক সম্পূর্ণ ফেইল করে)। Axios এ যেকোনো ফেইলিওরে সরাসরি `catch` ব্লকে এরর চলে আসে।'
          }
        ],
        codeSnippet: `// 1. Fetch API পদ্ধতি (ম্যানুয়াল চেকিং)
async function fetchWithNative() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(\`HTTP Error! Status: \${res.status}\`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Fetch ফেইল করেছে:', err.message);
  }
}

// 2. Axios পদ্ধতি (অটো পার্সিং ও ক্লিন এরর)
import axios from 'axios';

async function fetchWithAxios() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data; // সরাসরি পার্সড Object!
  } catch (err) {
    console.error('Axios এরর:', err.response?.data?.message || err.message);
  }
}`,
        pitfall: 'নতুনরা প্রায়ই মনে করে `try { await fetch(...) } catch` দিলেই ৪MD এরর ধরা পড়বে। ভুল! নেটিভ ফেচে ৪MD আসলেও `res.ok` চেক না করলে তা সাকসেস ব্লকেই ঢুকে যায়।',
        interviewQ: 'প্রশ্ন: Fetch API এর চেয়ে Axios কেন এন্টারপ্রাইজ প্রজেক্টে বেশি পছন্দ করা হয়?\nউত্তর: Axios এ রয়েছে রিকোয়েস্ট ও রেসপন্স ইন্টারসেপ্টর, অটোমেটিক JSON সিরিয়ালাইজেশন, টাইমআউট কনফিগারেশন (`timeout: 5000`), এবং সিএসআরএফ (CSRF) প্রোটেকশন সাপোর্ট—যা বড় বড় সিস্টেমে সেন্ট্রাল নেটওয়ার্ক কোড ম্যানেজ করতে সাহায্য করে।'
      }
    },
    {
      id: 'mod3-axios-interceptors',
      title: 'Concept of Axios Interceptors (JWT Auth & Refresh Flow)',
      moduleTitle: 'Module 3: Optimization & Network',
      keywords: 'axios interceptor jwt authorization bearer token refresh token 401 retry security',
      content: {
        easyBreakdown: {
          oneLiner: 'Axios Interceptors প্রতিটি নেটওয়ার্ক রিকোয়েস্ট যাওয়ার আগে এবং রেসপন্স আসার পথে অটোমেটিক টোকেন যুক্ত করে।',
          analogy: 'এয়ারপোর্টের সিকিউরিটি চেকপোস্ট—বোর্ডিং পাস চেক করে স্বয়ংক্রিয়ভাবে সিল মেরে প্লেনে যেতে দেওয়া।',
          whyNeed: 'প্রতিটি API কলে বারবার ম্যানুয়ালি Bearer Token লেখার হাত থেকে বাঁচতে এবং 401 এররে অটো রিফ্রেশ করতে।'
        },
        mentorNote: 'প্রতিটি API কলে ম্যানুয়ালি Bearer Token পাঠানো অত্যন্ত বাজে কোডিং। Axios Interceptor হলো একজন বিশ্বস্ত দারোয়ানের মতো—যাওয়ার সময় প্রতিটি রিকোয়েস্টে টোকেন সেঁটে দেয়, আর ফেরার সময় টোকেন এক্সপায়ার্ড হলে (401) নতুন রিফ্রেশ টোকেন এনে আবার রিকোয়েস্ট পাঠায়!',
        target: 'Request Interceptor দিয়ে JWT ইনজেকশন এবং Response Interceptor দিয়ে সাইলেন্ট টোকেন রিফ্রেশ রোটেশন তৈরি করা।',
        problemVsSolution: {
          problem: 'অ্যাপের ৫০টি আলাদা পেজে আলাদাভাবে `headers: { Authorization: "Bearer ..." }` লিখতে গেলে কোড ডুপ্লিকেট হয় এবং টোকেন এক্সপায়ার হলে ইউজার হুট করে অ্যাপ থেকে ছিটকে পড়ে।',
          solution: 'Axios Interceptor ব্যাকগ্রাউন্ডে নিঃশব্দে রিফ্রেশ টোকেন এনে মূল রিকোয়েস্টটি পুনরায় চালিয়ে দেয় (Silent Refresh), ফলে ইউজারের কাজের কোনো ব্যাঘাত ঘটে না!'
        },
        sections: [
          {
            heading: 'Request Interceptor vs Response Interceptor',
            body: '• Request Interceptor: Server এ রিকোয়েস্ট যাওয়ার আগে টোকেন যুক্ত করে।\n• Response Interceptor: Server থেকে রেসপন্স ফেরার সময় 401 Unauthorized হলে নতুন টোকেন সংগ্রহ করে ব্যর্থ কলটি আবার চালায়।'
          }
        ],
        codeSnippet: `import axios from 'axios';

// 1. সেন্ট্রাল Axios ইনস্ট্যান্স তৈরি
const apiClient = axios.create({
  baseURL: 'https://api.myproduction.com/v1',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

// 2. Request Interceptor: প্রতিটি কলে টোকেন যুক্ত করা
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 3. Response Interceptor: 401 হ্যান্ডলিং ও সাইলেন্ট রিফ্রেশ
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // যদি 401 হয় এবং এখনও রিট্রাই না করা হয়ে থাকে
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const { data } = await axios.post('https://api.myproduction.com/v1/auth/refresh', {
          refreshToken
        });

        localStorage.setItem('access_token', data.accessToken);
        originalRequest.headers.Authorization = \`Bearer \${data.accessToken}\`;

        // ব্যর্থ হওয়া মূল রিকোয়েস্টটি পুনরায় চালানো হলো!
        return apiClient(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;`,
        pitfall: 'ইন্টারসেপ্টরে `originalRequest._retry = true` ফ্ল্যাগ না দিলে যদি রিফ্রেশ API নিজেও 401 দেয়, তবে এটি অনন্তকাল (Infinite Loop) ধরে নিজেকে কল করে Server ডাউন করে দেবে!',
        interviewQ: 'প্রশ্ন: Axios Interceptors দিয়ে কীভাবে সেন্ট্রালাইজড এরর লগিং করা যায়?\nউত্তর: Response Interceptor এর error হ্যান্ডলারে আপনি Sentry বা DataDog এর মতো এরর ট্র্যাকিং সার্ভিসে লগ পাঠাতে পারেন, এবং ইউজারের জন্য সেন্ট্রাল Toast নোটিফিকেশন (যেমন: "Server এ সমস্যা হয়েছে, কিছুক্ষণ পর চেষ্টা করুন") দেখাতে পারেন।'
      }
    },
    {
      id: 'mod3-controlled-uncontrolled-useref',
      title: 'Controlled vs Uncontrolled & useRef Deep Dive',
      moduleTitle: 'Module 3: Optimization & Network',
      keywords: 'controlled uncontrolled useref dom access mutable value without rerender interval id',
      content: {
        easyBreakdown: {
          oneLiner: 'useRef কোনো Re-render ছাড়াই সরাসরি মেমরিতে মান ধরে রাখে বা সরাসরি DOM এলিমেন্টকে টার্গেট করে।',
          analogy: 'লেজার পয়েন্টার—দূর থেকে স্ক্রিনের নির্দিষ্ট অংশে আলো ফেলে সরাসরি নির্দেশ করা।',
          whyNeed: 'ইনপুট ফিল্ডে অটো-ফোকাস করা, ভিডিও প্লে/পজ করা এবং Re-render ছাড়া পূর্বের মান ট্র্যাকিংয়ে।'
        },
        mentorNote: 'অনেকে ভাবে useRef শুধুই ইনপুট বক্সে ফোকাস করার জন্য। কিন্তু সিনিয়র ডেভেলপারদের কাছে useRef হলো এমন এক গুপ্তচর ভেরিয়েবল যা Component এর Re-render ট্রিগার না করেই মান মনে রাখতে পারে! চলো এর গভীর ব্যবহার শিখি।',
        target: 'useRef এর দুটি কোর রূপ: ১. DOM এলিমেন্ট অ্যাক্সেস, ২. মিউটেবল ইন্সট্যান্স ভ্যারিয়েবল যা Re-render ট্রিগার করে না।',
        problemVsSolution: {
          problem: 'useState এর মান বদলালে React তৎক্ষণাৎ পুরো Component Re-render করে। কিন্তু টাইমার আইডি বা স্ক্রল পজিশন সেভ করার জন্য তো Re-render দরকার নেই!',
          solution: '`useRef` এর `.current` প্রোপার্টি পরিবর্তন করলে মেমরিতে মান সেভ থাকে কিন্তু React কোনো Re-render ট্রিগার করে না।'
        },
        sections: [
          {
            heading: 'useRef এর দুটি ব্যবহার ক্ষেত্র',
            body: '১. DOM নোড সরাসরি অ্যাক্সেস (যেমন: `inputRef.current.focus()`, ভিডিও প্লে/পজ)।\n২. Re-render ছাড়া মিউটেবল ভ্যালু স্টোরেজ (যেমন: `setInterval` এর টাইমার আইডি রাখা)।'
          }
        ],
        codeSnippet: `import { useState, useRef } from 'react';

export function StopWatchWithRef() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 1. ডম রেফারেন্স
  const inputRef = useRef(null);

  // 2. মিউটেবল ভ্যালু রেফারেন্স (টাইমার আইডি)
  const timerRef = useRef(null);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <div className="text-xl font-mono text-cyan-400 font-bold">
        টাইমার: {seconds} সেকেন্ড
      </div>

      <div className="flex gap-2">
        <button onClick={startTimer} className="px-3 py-1 bg-emerald-600 text-white rounded text-xs">
          শুরু করুন
        </button>
        <button onClick={stopTimer} className="px-3 py-1 bg-rose-600 text-white rounded text-xs">
          থামান
        </button>
        <button onClick={() => inputRef.current?.focus()} className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs">
          ইনপুট ফোকাস
        </button>
      </div>

      <input
        ref={inputRef}
        placeholder="ক্লিক করলে ফোকাস হবে..."
        className="w-full bg-slate-950 border border-slate-700 rounded p-1.5 text-xs text-white outline-none"
      />
    </div>
  );
}`,
        pitfall: 'কখনোই JSX Rendering এর ভেতর সরাসরি `ref.current` পরিবর্তন করবেন না (যেমন `<div>{ref.current = 10}</div>`)! এটি React এর পিওর Rendering নিয়ম ভঙ্গ করে।',
        interviewQ: 'প্রশ্ন: React এ useRef দিয়ে কীভাবে পূর্ববর্তী State (Previous State) ট্র্যাক করা যায়?\nউত্তর: একটি কাস্টম Hook `usePrevious(value)` বানিয়ে, সেখানে `useEffect` এর ভেতরে `ref.current = value` লিখে রাখা যায়। যেহেতু useEffect স্ক্রিন পেইন্ট হওয়ার পর চলে, তাই Render চলাকালীন `ref.current` এ পূর্ববর্তী Render এর মানটি অক্ষত অবস্থায় পাওয়া যায়।'
      }
    },
    {
      id: 'mod3-memoization-trio',
      title: 'Performance Triad: useMemo, useCallback & React.memo',
      moduleTitle: 'Module 3: Optimization & Network',
      hasVisualizer: 'rerender',
      keywords: 'usememo usecallback react.memo optimization rerender memoization referential equality profiler',
      content: {
        easyBreakdown: {
          oneLiner: 'React.memo, useMemo এবং useCallback অপ্রয়োজনীয় ভারী গণনা ও Re-rendering আটকে পারফরম্যান্স বাড়ায়।',
          analogy: 'স্মার্ট ক্যালকুলেটরের হিস্ট্রি মেমরি—একই জটিল অঙ্ক দ্বিতীয়বার না কষে মেমরি থেকে সরাসরি উত্তর বলা।',
          whyNeed: 'হাজার হাজার ডেটা রো বা চার্ট Render করার সময় স্ক্রিন যেন আটকে না যায়।'
        },
        mentorNote: 'এটি সিনিয়র React ইন্টারভিউয়ের ফেভারিট টপিক! অনেকেই না বুঝে সব জায়গায় useMemo ও useCallback বসিয়ে কোড জটিল করে তোলে। নিচে লাইভ ভিজ্যুয়ালাইজারে নিজে বাটন ক্লিক করে দেখো কিভাবে মেমোইজেশন অপ্রয়োজনীয় Re-render আটকায়।',
        target: 'useMemo (ক্যালকুলেশন মেমোইজ), useCallback (Function রেফারেন্স অক্ষুণ্ণ রাখা), এবং React.memo (Component মেমোইজ) এর ত্রিভুজ সম্পর্ক আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'JavaScriptে `{} === {}` কিন্তু `false`! Parent Component Re-render হলে ভেতরে থাকা প্রতিটি Function নতুন মেমরি অ্যাড্রেসে নতুন করে তৈরি হয়। ফলে Child Component ভাবে নতুন Prop এসেছে এবং অপ্রয়োজনে Re-render হয়ে যায়!',
          solution: '`useCallback` Function এর মেমরি রেফারেন্স ক্যাশ করে রাখে এবং `React.memo` ওয়ালা Child কে অপ্রয়োজনীয় Re-render থেকে বাঁচায়।'
        },
        sections: [
          {
            heading: 'তিনটির স্পষ্ট পার্থক্য এক নজরে',
            body: '• `React.memo`: একটি HOC যা পুরো Child Component কে র‍্যাপ করে Props না বদলালে Re-render স্কিপ করে।\n• `useMemo`: ভারী কোনো গাণিতিক হিসাবের ফলাফল (Value) ক্যাশ করে রাখে।\n• `useCallback`: একটি Function এর মেমরি রেফারেন্স (Function Instance) ক্যাশ করে রাখে।'
          }
        ],
        codeSnippet: `import React, { useState, useMemo, useCallback } from 'react';

// 1. React.memo ওয়ালা পিওর Child Component
const HeavyChartChild = React.memo(function HeavyChartChild({ onItemSelect, data }) {
  console.log('HeavyChartChild Render হলো!');
  return (
    <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
      <button onClick={() => onItemSelect('Item Selected')} className="text-xs text-cyan-400">
        Child অ্যাকশন
      </button>
    </div>
  );
});

export function ParentDashboard() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');

  // 2. useMemo: ভারী ক্যালকুলেশন ক্যাশ করা
  const expensiveCalculatedData = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 1000000; i++) total += i;
    return total;
  }, [filter]);

  // 3. useCallback: Function এর রেফারেন্স অপরিবর্তিত রাখা
  const handleItemSelect = useCallback((msg) => {
    console.log('অ্যাকশন লগ:', msg);
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <button onClick={() => setCount(c => c + 1)} className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs">
        Parent State +1 (Count: {count})
      </button>

      <HeavyChartChild onItemSelect={handleItemSelect} data={expensiveCalculatedData} />
    </div>
  );
}`,
        pitfall: 'সব Function এই চোখ বন্ধ করে `useCallback` বা `useMemo` বসাবেন না! মেমোইজেশন ইঞ্জিনের নিজস্ব মেমরি ও ডিপেন্ডেন্সি তুলনা করার ওভারহেড থাকে। সাধারণ হালকা যোগ-বিয়োগে এটি ব্যবহারের কোনো যুক্তি নেই।',
        interviewQ: 'প্রশ্ন: কখন `useCallback` ব্যবহার করা সম্পূর্ণ বাধ্যতামূলক?\nউত্তর: যখন কোনো Callback Function একটি `React.memo` দ্বারা অপ্টিমাইজড Child Component এ Prop হিসেবে পাঠানো হয়, অথবা যখন সেই Functionটি অন্য কোনো কাস্টম Hook বা `useEffect` এর ডিপেন্ডেন্সি Array এর অংশ হিসেবে ব্যবহৃত হয়।'
      }
    }
  ]
};
