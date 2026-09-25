export const module2 = {
  id: 'mod2',
  title: 'Module 2: Advanced React, Hooks, Routing & Forms',
  nameBangla: 'মডিউল ২: Hook্স, Client Routing ও ফর্ম ভ্যালিডেশন',
  badge: 'Module 2',
  topics: [
    {
      id: 'mod2-useeffect-data',
      title: 'useEffect Hook & Robust Data Fetching',
      moduleTitle: 'Module 2: Hooks & Forms',
      keywords: 'useeffect data fetching cleanup abortcontroller race conditions dependency array infinite loop',
      content: {
        easyBreakdown: {
          oneLiner: 'useEffect হলো এমন একটি Hook যা Component মাউন্ট হওয়া বা State বদলানোর পর সাইড-অপারেশন (যেমন API Fetch) রান করে।',
          analogy: 'দোকানে নতুন খদ্দের ঢোকার পর স্বয়ংক্রিয়ভাবে ওয়েলকাম বেল বাজার মতো।',
          whyNeed: 'Browser টাইটেল চেঞ্জ, টাইমার সেট, লোকাল স্টোরেজ সিঙ্ক এবং ব্যাকএন্ড থেকে ডেটা টেনে আনতে।'
        },
        mentorNote: 'দাদা শোনো, useEffect React এর এমন এক Hook যা বিগিনারদের সবচেয়ে বেশি ভোগায়! একটু অসাবধান হলেই ইনফাইনাইট লুপ বা রেস কন্ডিশন তৈরি হয়। চলো একদম সহজ উপমা দিয়ে বুঝি useEffect আসলে কী এবং AbortController দিয়ে কীভাবে সুরক্ষিত ডেটা ফেচিং করতে হয়।',
        target: 'Dependency Array এর নিয়ম, Cleanup Function, AbortController দিয়ে আনমাউন্টেড রিকোয়েস্ট ক্যানসেল করা এবং রেস কন্ডিশন এড়ানো।',
        problemVsSolution: {
          problem: 'ইউজার হয়তো দ্রুত আইডি ১ এ ক্লিক করার পর আইডি ২ এ ক্লিক করল। যদি ইন্টারনেটের কারণে আইডি ১ এর ডেটা পরে এসে পৌঁছায়, তবে স্ক্রিনে ভুল তথ্য ভেসে উঠবে (Race Condition)!',
          solution: 'AbortController ব্যবহার করলে নতুন আইডি আসা মাত্রই পুরনো নেটওয়ার্ক রিকোয়েস্টটি Browser এই বাতিল (Abort) হয়ে যায়, ফলে কোনো ভুল ডেটা আসার সুযোগ থাকে না।'
        },
        sections: [
          {
            heading: 'useEffect এ সরাসরি async Function লেখা নিষেধ কেন?',
            body: '`useEffect(async () => { ... })` লিখলে JavaScript স্বয়ংক্রিয়ভাবে একটি Promise রিটার্ন করে। কিন্তু React আশা করে useEffect থেকে হয় `undefined` অথবা একটি সিনক্রোনাস Cleanup Function রিটার্ন আসবে। তাই সর্বদা এফেক্টের ভেতরে একটি অভ্যন্তরীণ async Function ঘোষণা করে তাকে কল করতে হয়।'
          },
          {
            heading: 'Race Condition এবং AbortController এর জাদু',
            body: 'নিচের কোডে লক্ষ্য করো কিভাবে `const controller = new AbortController()` দিয়ে Browser এর সিগন্যালে যুক্ত করা হয়েছে এবং cleanup Function এ `controller.abort()` কল করা হয়েছে।'
          }
        ],
        codeSnippet: `import { useState, useEffect } from 'react';

export function UserProfileViewer({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. নতুন AbortController তৈরি
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    async function fetchUser() {
      try {
        const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, {
          signal: controller.signal // Browser এর সিগন্যালে যুক্ত হলো
        });
        if (!res.ok) throw new Error('ইউজার তথ্য আনতে ব্যর্থ হয়েছে!');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        // যদি ইচ্ছাকৃতভাবে বাতিল করা হয় তবে এরর দেখাব না
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUser();

    // 2. ক্লিনআপ Function: আইডি বদলালে বা পেজ ছেড়ে গেলে পূর্ববর্তী কল ক্যান্সেল হবে
    return () => {
      controller.abort();
    };
  }, [userId]); // userId পরিবর্তিত হলেই চলবে

  if (loading) return <div className="text-cyan-400 font-mono text-xs">লোড হচ্ছে...</div>;
  if (error) return <div className="text-rose-400 font-mono text-xs">ত্রুটি: {error}</div>;

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <h3 className="text-white font-bold">{user?.name}</h3>
      <p className="text-xs text-slate-400 font-mono">{user?.email}</p>
    </div>
  );
}`,
        pitfall: 'কখনোই ডিপেন্ডেন্সি Array তে Object বা Array সরাসরি Object লিটারেল হিসেবে পাঠাবেন না (যেমন `useEffect(..., [{ id: 1 }])`)। প্রতি Render এ নতুন রেফারেন্স তৈরি হয়ে এফেক্ট ইনফাইনাইট বার চলবে!',
        interviewQ: 'প্রশ্ন: useEffect এ কেন কখনো setState সরাসরি ফাঁকা ডিপেন্ডেন্সি ছাড়া চালানো যাবে না?\nউত্তর: কারণ ডিপেন্ডেন্সি ছাড়া useEffect প্রতি Render এই চলে। আর setState Component কে Re-render করায়। ফলস্বরূপ: Render -> এফেক্ট -> State পরিবর্তন -> Re-render -> ইনফাইনাইট লুপ যা Browser এর ট্যাব হ্যাং করে দেয়।'
      }
    },
    {
      id: 'mod2-routing-concept',
      title: 'Routing Concept & react-router-dom Architecture',
      moduleTitle: 'Module 2: Hooks & Forms',
      keywords: 'routing react-router-dom spa browserrouter routes route link navlink single page application',
      content: {
        easyBreakdown: {
          oneLiner: 'React Router DOM Browser রিলোড না করে এক পেজ থেকে অন্য পেজে নিমেষে সুইচ করতে দেয় (SPA)।',
          analogy: 'বইয়ের পাতায় ফিতে রাখা—বই না ফেলে শুধু পৃষ্ঠা উল্টে কাঙ্ক্ষিত চ্যাপ্টারে চলে যাওয়া।',
          whyNeed: 'অ্যাপকে রিয়াল-টাইম সুপারফাস্ট এবং মসৃণ মোবাইল অ্যাপের অনুভূতি দিতে।'
        },
        mentorNote: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে (SPA) পুরো পেজ রিফ্রেশ না করে নিমেষে অন্য পেজে নিয়ে যাওয়ার ম্যাজিক হলো Client-side Routing। চলো আধুনিক react-router-dom v6/v7 এর নিখুঁত স্ট্রাকচার শিখে নিই।',
        target: 'SPA Routing নীতি, History API, BrowserRouter, Routes, Route, Link এবং NavLink এর একটিভ স্টাইলিং আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'ঐতিহ্যবাহী ওয়েবসাইটে কোনো লিংকে ক্লিক করলে পুরো পেজ সাদা হয়ে হার্ড রিলোড হতো, ফলে সাইটের মেমরি এবং ফর্মের সমস্ত State মুছে যেত।',
          solution: 'React Router Browser এর HTML5 History API ব্যবহার করে পেজ রিফ্রেশ ছাড়াই শুধুমাত্র নির্দিষ্ট Component টি স্ক্রিনে সোয়াপ করে দেয়!'
        },
        sections: [
          {
            heading: 'Link vs সাধারণ <a href="..."> ট্যাগ',
            body: 'React অ্যাপ্লিকেশনে কখনোই সাধারণ `<a href="/about">` ব্যবহার করবেন না! কারণ `<a>` পুরো পেজ হার্ড রিফ্রেশ করে। সর্বদা `<Link to="/about">` অথবা অ্যাক্টিভ ট্যাবের জন্য `<NavLink>` ব্যবহার করবেন।'
          }
        ],
        codeSnippet: `import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// লেআউট ও ন্যাভিগেশন বার
function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-900 border-b border-slate-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          \`text-xs font-semibold px-3 py-1.5 rounded-lg transition \${
            isActive ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
          }\`
        }
      >
        হোম পেজ
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          \`text-xs font-semibold px-3 py-1.5 rounded-lg transition \${
            isActive ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
          }\`
        }
      >
        ড্যাশবোর্ড
      </NavLink>
    </nav>
  );
}

// রুট Router সেটআপ
export function AppRouter() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="*" element={<div className="p-8 text-rose-400 text-center">৪৪৪ পেজটি খুঁজে পাওয়া যায়নি!</div>} />
      </Routes>
    </BrowserRouter>
  );
}`,
        pitfall: 'Routerে ক্যাচ-অল নট ফাউন্ড রাউট (`path="*"`) সবসময় সবার নিচে রাখবেন। শুরুতে রাখলে যেকোনো রিকোয়েস্টই ৪MD পেজে চলে যাবে।',
        interviewQ: 'প্রশ্ন: BrowserRouter এবং HashRouter এর মধ্যে পার্থক্য কি?\nউত্তর: BrowserRouter আধুনিক HTML5 History API ব্যবহার করে পরিষ্কার ও স্ট্যান্ডার্ড URL তৈরি করে (যেমন: `site.com/profile`) যা প্রোডাকশনে Server কনফিগারেশন দাবি করে। অন্যদিকে HashRouter URL এ হ্যাশ চিহ্ন ব্যবহার করে (যেমন: `site.com/#/profile`), যা কোনো Server কনফিগ ছাড়াই কাজ করে তবে এসইও-বান্ধব নয়।'
      }
    },
    {
      id: 'mod2-dynamic-lazy',
      title: 'Dynamic Routing (useParams) & Lazy Loading',
      moduleTitle: 'Module 2: Hooks & Forms',
      keywords: 'dynamic routing useparams usesearchparams usenavigate lazy loading react.lazy suspense code splitting',
      content: {
        easyBreakdown: {
          oneLiner: 'Lazy Loading কোডকে ছোট ছোট চাঙ্কে ভাগ করে এবং পেজ যখন দরকার হয় তখনই শুধু ফাইল ডাউনলোড করে।',
          analogy: 'ইউটিউব ভিডিও—পুরো ২ ঘণ্টার সিনেমা একসাথে না নামিয়ে দেখার সাথে সাথে স্ট্রিমিং হওয়া।',
          whyNeed: 'ইন্টারনেট স্পিড কম হলেও প্রথম পেজ ১ সেকেন্ডের ভেতর লোড করার জন্য।'
        },
        mentorNote: 'একটি বিশাল ই-কমার্স সাইটে লাখ লাখ প্রোডাক্ট থাকে। সবার জন্য আলাদা পেজ বানানো অসম্ভব! ডায়নামিক Routing দিয়ে মাত্র ১টি সিঙ্গেল টেমপ্লেট দিয়ে সব প্রোডাক্ট হ্যান্ডেল করা হয়। আর সাইটের স্পিড বাড়াতে ব্যবহার করা হয় Lazy Loading।',
        target: 'useParams, useNavigate, React.lazy, Suspense এবং বান্ডিল অপ্টিমাইজেশন আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'অ্যাপের সব পেজের কোড যদি ইউজারকে হোম পেজেই একবারে ডাউনলোড করতে হয়, তবে সাইট লোড হতে প্রচুর সময় নেবে এবং ইউজার বাউন্স করবে।',
          solution: 'React.lazy ও Suspense দিয়ে পেজগুলোকে ছোট ছোট চাঙ্কে ভাগ করা হয়। ইউজার যখন যে পেজে ঢুকবে কেবল তখনই সেই কোডটুকু ডাউনলোড হবে (Code Splitting)!'
        },
        sections: [
          {
            heading: 'Dynamic Parameters ও useParams Hook',
            body: 'রাউটে কোলন দিয়ে ডায়নামিক সেগমেন্ট ডিফাইন করা হয়, যেমন `<Route path="/product/:id" element={<ProductDetails />} />`। এরপর Component এর ভেতর `const { id } = useParams()` কল করে URL এর আইডিটি ধরা যায়।'
          }
        ],
        codeSnippet: `import React, { Suspense, lazy } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';

// ✅ Code Splitting: শুধুমাত্র পেজ ওপেন করলেই বান্ডিল ডাউনলোড হবে
const HeavyAnalyticsDashboard = lazy(() => import('./HeavyAnalyticsDashboard.jsx'));

function ProductDetails() {
  const { id } = useParams(); // URL প্যারামিটার ক্যাচ করা হলো
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <h3 className="text-white font-bold">প্রোডাক্ট আইডি: <span className="font-mono text-cyan-400">#{id}</span></h3>
      <button
        onClick={() => navigate('/products')} // প্রোগ্রামাটিক নেভিগেশন
        className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded"
      >
        ← সব প্রোডাক্টে ফিরুন
      </button>
    </div>
  );
}

export function OptimizedRoutes() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-cyan-400 font-mono">চাঙ্ক ডাউনলোড হচ্ছে... ⏳</div>}>
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/analytics" element={<HeavyAnalyticsDashboard />} />
      </Routes>
    </Suspense>
  );
}`,
        pitfall: '`React.lazy()` দিয়ে লোড করা Component কে অবশ্যই একটি `<Suspense fallback={...}>` এর ভেতরে রাখতে হবে। নাহলে চাঙ্ক ডাউনলোডের সময় পুরো অ্যাপ্লিকেশন ক্র্যাশ করবে।',
        interviewQ: 'প্রশ্ন: Code Splitting এর ফলে কোর ওয়েব ভাইটালস (Core Web Vitals) এ কি ধরণের উন্নতি ঘটে?\nউত্তর: এটি ইনিশিয়াল JavaScript বান্ডিল সাইজকে নাটকীয়ভাবে কমিয়ে দেয়, যার ফলে Browser কে শুরুতে কম কোড পার্স ও কম্পাইল করতে হয়। এর ফলে FCP (First Contentful Paint) এবং TTI (Time to Interactive) অপ্টিমাইজড থাকে।'
      }
    },
    {
      id: 'mod2-custom-form-validation',
      title: 'Custom Form Validation & Submission',
      moduleTitle: 'Module 2: Hooks & Forms',
      keywords: 'form validation controlled inputs regex errors touched dirty state custom hooks',
      content: {
        easyBreakdown: {
          oneLiner: 'Controlled Inputs দিয়ে ফর্মের প্রতিটি ইনপুটকে React State এর সাথে নিখুঁতভাবে সিঙ্ক রাখা।',
          analogy: 'পাসপোর্ট কন্ট্রোল কাউন্টার—ভ্যালিড কাগজপত্র না দেখালে গেট পার হতে দেওয়া হবে না।',
          whyNeed: 'ভুল ইমেইল বা খালি পাসওয়ার্ড সাবমিট হওয়া আগেই আটকে দিয়ে ইউজারকে ইনস্ট্যান্ট লাল সতর্কবার্তা দেখাতে।'
        },
        mentorNote: 'একটি ভালো ফর্মে ৩টি বিষয় জরুরি: ইনস্ট্যান্ট ইউজার ফিডব্যাক, সুন্দর এরর মেসেজ এবং সাবমিশনের আগে সমস্ত ডেটা স্যানিটাইজেশন। চলো কোনো Library ছাড়া খাঁটি React দিয়ে কাস্টম ফর্ম ভ্যালিডেশন State মেশিন বানাই।',
        target: 'Controlled Forms, Regular Expressions (RegEx), Touched/Dirty State Tracking এবং সাবমিশন হ্যান্ডলিং বোঝা।',
        problemVsSolution: {
          problem: 'ইউজার ইনপুট বক্সে হাত দেওয়ার আগেই যদি লাল রঙের "ভুল হয়েছে" এরর মেসেজ ভেসে ওঠে, ইউজার বিরক্ত হয়।',
          solution: 'আমরা একটি `touched` State বজায় রাখি, এবং ইউজার ইনপুট থেকে বাইরে আসার পর (`onBlur`) কেবল এরর মেসেজ দেখাই।'
        },
        sections: [
          {
            heading: 'Controlled Component এর কার্যপদ্ধতি',
            body: 'Controlled Input এ ইনপুটের ভ্যালু React State দ্বারা চালিত হয় (`value={formData.email}`) এবং পরিবর্তনের সময় `onChange` Event দিয়ে State আপডেট করা হয়। এর ফলে রিয়েল-টাইমে ইনপুটের প্রতিটি ক্যারেক্টার যাচাই করা সম্ভব হয়।'
          }
        ],
        codeSnippet: `import { useState } from 'react';

export function CustomValidatedForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (name, value) => {
    let err = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) err = 'ইমেইল দেওয়া বাধ্যতামূলক!';
      else if (!emailRegex.test(value)) err = 'সঠিক ইমেইল ফরম্যাট দিন (যেমন user@domain.com)';
    }
    if (name === 'password') {
      if (!value) err = 'পাসওয়ার্ড দেওয়া বাধ্যতামূলক!';
      else if (value.length < 6) err = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে!';
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const errorMsg = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.email || errors.password || !formData.email) {
      alert('অনুগ্রহ করে সঠিক তথ্য দিন!');
      return;
    }
    alert(\`সফলভাবে ফর্ম জমা হয়েছে! ইমেইল: \${formData.email}\`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-sm">
      <div>
        <label className="text-xs text-slate-300 block mb-1">ইমেইল ঠিকানা</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-xs text-white focus:border-cyan-500 outline-none"
        />
        {touched.email && errors.email && (
          <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-slate-300 block mb-1">পাসওয়ার্ড</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-xs text-white focus:border-cyan-500 outline-none"
        />
        {touched.password && errors.password && (
          <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.password}</p>
        )}
      </div>

      <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold py-2 rounded">
        সাবমিট করুন
      </button>
    </form>
  );
}`,
        pitfall: 'ফর্ম সাবমিট হ্যান্ডলারে `e.preventDefault()` কল করতে ভুলে গেলে Browser পুরো পেজ রিফ্রেশ করে ফেলবে এবং সমস্ত ইনপুট ডাটা হারিয়ে যাবে!',
        interviewQ: 'প্রশ্ন: Controlled Component বনাম Uncontrolled Component এর মূল পার্থক্য কি?\nউত্তর: Controlled Component এর মান React State দ্বারা ড্রাইভেন হয় (Single Source of Truth), ফলে প্রতিটি কি-স্ট্রোকে রিয়েলটাইম ভ্যালিডেশন সম্ভব। অন্যদিকে Uncontrolled Component এ ইনপুটের ভ্যালু Browser DOM নিজেই নিজের কাছে রাখে এবং প্রয়োজন হলে `useRef` দিয়ে সরাসরি DOM থেকে মান টেনে নেওয়া হয়।'
      }
    },
    {
      id: 'mod2-rhf-yup',
      title: 'React Hook Form & Yup Schema Validation',
      moduleTitle: 'Module 2: Hooks & Forms',
      keywords: 'react hook form yup useform register handlesubmit formstate errors schema validation performance',
      content: {
        easyBreakdown: {
          oneLiner: 'React Hook Form ও Yup স্কিমা দিয়ে জিরো Re-render এ সুপারফাস্ট এন্টারপ্রাইজ ফর্ম ম্যানেজমেন্ট।',
          analogy: 'হাই-স্পিড কারগো স্ক্যানার—প্রতিটি পার্সেল না খুলেই এক্স-রে দিয়ে নিমেষে ভ্যালিডেশন সম্পন্ন করা।',
          whyNeed: 'বড় ফর্মে ৫০টি ফিল্ড থাকলে প্রতি অক্ষরে টাইপিংয়ের সময় পেজ যেন ল্যাগ না করে।'
        },
        mentorNote: 'একটি বড় ফর্মে ৫০টি ইনপুট ফিল্ড থাকলে কাস্টম State এর কারণে প্রতিটা কি-প্রেসে ৫০ বার পুরো ফর্ম Re-render হয়, যা মোবাইল ডিভাইসে মারাত্মক ল্যাগ করে। React Hook Form এনেছে জিরো Re-render সাবস্ক্রিপশন ম্যাজিক! চলো Yup স্কিমার সাথে এর ব্যবহার দেখি।',
        target: 'React Hook Form (RHF), useForm(), register, handleSubmit, এবং Yup স্কিমা দিয়ে ইন্ডাস্ট্রি-গ্রেড টাইপ-সেফ ফর্ম বানানো।',
        problemVsSolution: {
          problem: 'Formik বা সাধারণ useState দিয়ে বড় ফর্ম বানালে প্রতিটি কি-স্ট্রোকে পুরো পেজ বারবার Re-render হয়।',
          solution: 'React Hook Form নেটিভ `ref` দিয়ে আনকন্ট্রোল্ড ইনপুট হ্যান্ডেল করে, ফলে কোনো অপ্রয়োজনীয় Re-render ছাড়াই ফর্ম টাইপিং মাখনের মতো স্মুথ থাকে!'
        },
        sections: [
          {
            heading: 'Yup Schema Validation এর সুবিধা',
            body: 'Yup এর মাধ্যমে আমরা ফর্মের ভ্যালিডেশন লজিককে UI থেকে আলাদা করে একটি পরিষ্কার ডিক্লেয়ারেটিভ স্কিমা হিসেবে লিখে ফেলতে পারি। ফলে কোড পরিষ্কার থাকে এবং ব্যাকএন্ডের সাথে স্কিমা শেয়ার করা যায়।'
          }
        ],
        codeSnippet: `import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 1. Yup স্কিমা ডিক্লারেশন
const registerSchema = yup.object().shape({
  fullName: yup.string().required('পূর্ণ নাম দেওয়া বাধ্যতামূলক!').min(3, 'কমপক্ষে ৩ অক্ষর হতে হবে'),
  email: yup.string().email('সঠিক ইমেইল ফরম্যাট দিন').required('ইমেইল আবশ্যক!'),
  age: yup.number().typeError('বয়স সংখ্যায় লিখুন').positive().integer().min(18, 'বয়স কমপক্ষে ১৮ বছর হতে হবে!')
});

export function EnterpriseRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onTouched'
  });

  const onSubmit = async (data) => {
    console.log('ভ্যালিডেটেড ডেটা:', data);
    alert('রেজিস্ট্রেশন সফল হয়েছে!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3 max-w-md">
      <div>
        <label className="text-xs text-slate-300 block mb-1">পূর্ণ নাম</label>
        <input
          {...register('fullName')}
          placeholder="যেমন: অনির্বাণ চক্রবর্তী"
          className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-xs text-white focus:border-cyan-500 outline-none"
        />
        {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="text-xs text-slate-300 block mb-1">ইমেইল</label>
        <input
          {...register('email')}
          type="email"
          placeholder="anirban@example.com"
          className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-xs text-white focus:border-cyan-500 outline-none"
        />
        {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold py-2 rounded transition"
      >
        {isSubmitting ? 'প্রসেসিং হচ্ছে...' : 'অ্যাকাউন্ট তৈরি করুন'}
      </button>
    </form>
  );
}`,
        pitfall: 'Formik বনাম React Hook Form এর পার্থক্য মনে রাখবেন: Formik প্রতি কি-স্ট্রোকে Component Re-render করায় যা বড় ফর্মে পারফরম্যান্স ইস্যু তৈরি করে। আধুনিক এন্টারপ্রাইজ প্রজেক্টে RHF হলো এক নম্বর পছন্দ।',
        interviewQ: 'প্রশ্ন: React Hook Form কিভাবে কোনো Re-render ছাড়াই ফর্ম ভ্যালিডেশন চালায়?\nউত্তর: RHF ইনপুট এলিমেন্টগুলোর সাথে নেটিভ `ref` বাইন্ড করে (Uncontrolled Input)। এটি শুধুমাত্র তখনই সংশ্লিষ্ট এরর ফিল্ডের জন্য Re-render ট্রিগার করে যখন কোনো সুনির্দিষ্ট ফিল্ডের ভ্যালিডেশন স্ট্যাটাস পরিবর্তিত হয়, বাকি পুরো ফর্ম আনটাচড থাকে।'
      }
    },
    {
      id: 'mod2-material-ui',
      title: 'Material UI (MUI) Concept & Theming',
      moduleTitle: 'Module 2: Hooks & Forms',
      keywords: 'material ui mui component library themeprovider createtheme sx prop grid buttons',
      content: {
        easyBreakdown: {
          oneLiner: 'MUI ও আধুনিক Component Library দিয়ে গুগল ম্যাটেরিয়াল ডিজাইন স্ট্যান্ডার্ড প্রফেশনাল UI তৈরি।',
          analogy: 'রেডিমেড ইন্টেরিয়র কিট—সব আসবাবপত্র প্রি-ডিজাইন করা, শুধু সাজিয়ে নেওয়া।',
          whyNeed: 'স্ক্র্যাচ থেকে সিএসএস না লিখে মাত্র কয়েক ঘণ্টায় ব্যাংক ও এন্টারপ্রাইজ গ্রেডের ড্যাশবোর্ড তৈরি করতে।'
        },
        mentorNote: 'সবসময় শূন্য থেকে প্রতিটি বাটন বা মোডাল বানানোর সময় থাকে না। Google এর Material Design স্পেসিফিকেশন দিয়ে তৈরি বিশ্বের সবচেয়ে জনপ্রিয় React UI Library হলো Material UI (MUI)। চলো কাস্টম থিমিং ও `sx` Prop দিয়ে এর বাস্তব ব্যবহার দেখি।',
        target: 'MUI সেটআপ, থিম কাস্টমাইজেশন (`createTheme`, `ThemeProvider`), কোর Componentস এবং `sx` Prop আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'স্ক্র্যাচ থেকে এক্সেসিবল (WAI-ARIA compliant) ড্রপডাউন, ডেটপিকার বা জটিল ডেটা গ্রিড টেবিল বানানো সময়সাপেক্ষ।',
          solution: 'MUI প্রি-বিল্ট এক্সেসিবল উইজেট এবং ফুল থিম ইঞ্জিন দেয়, যার ফলে দ্রুত এন্টারপ্রাইজ ড্যাশবোর্ড বানিয়ে ফেলা যায়।'
        },
        sections: [
          {
            heading: '`sx` Prop এর ক্ষমতা',
            body: 'MUI এর বিশেষ বৈশিষ্ট্য হলো `sx` Prop। এটি থিম-অ্যাওয়ার (Theme-aware)। অর্থাৎ সরাসরি থিমের স্পেসিং, কালার এবং ব্রেকপয়েন্ট শর্টহ্যান্ড হিসেবে ব্যবহার করা যায়, যেমন: `sx={{ p: 2, bgcolor: "primary.main" }}`।'
          }
        ],
        codeSnippet: `import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00d8ff' }
  }
});

export function MuiDashboardWidget() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 400, borderRadius: 3, border: '1px solid #1e293b' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
          MUI সিকিউরিটি হাব
        </Typography>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="API কি" variant="outlined" size="small" fullWidth type="password" />
          <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
            কানেক্ট করুন
          </Button>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}`,
        pitfall: 'MUI এর বান্ডিল সাইজ তুলনামূলকভাবে বড়। ট্রি-শেকিং (Tree-shaking) ঠিক রাখতে কখনোই পুরো Library একসাথে ইমপোর্ট করবেন না (যেমন `import * from "@mui/material"` ❌)। সর্বদা স্পেসিফিক Component ইমপোর্ট করবেন (যেমন `import Button from "@mui/material/Button"` ✅)।',
        interviewQ: 'প্রশ্ন: Tailwind CSS এবং Material UI (MUI) এর মধ্যে কোনটা কখন বেছে নেওয়া উচিত?\nউত্তর: যদি আপনার প্রজেক্টের জন্য সম্পূর্ণ কাস্টম, ইউনিক এবং ব্র্যান্ডেড UI ডিজাইন দরকার হয় এবং বান্ডিল সাইজ সর্বোচ্চ হালকা রাখতে চান, তবে Tailwind CSS সেরা। আর যদি দ্রুত ইন্টারনাল অ্যাডমিন ড্যাশবোর্ড, এন্টারপ্রাইজ সফটওয়্যার বা প্রি-মেড এক্সেসিবল উইজেট (যেমন ডাটা টেবিল, ডেটপিকার) দরকার হয়, তবে MUI সময় বাঁচায়।'
      }
    }
  ]
};
