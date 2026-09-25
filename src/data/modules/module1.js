export const module1 = {
  id: 'mod1',
  title: 'Module 1: React Fundamentals & Core Architecture',
  nameBangla: 'মডিউল ১: React কোর আর্কিটেকচার ও ফান্ডামেন্টালস',
  badge: 'Module 1',
  topics: [
    {
      id: 'mod1-intro-ecosystem',
      title: 'Introduction, Setup & The React Ecosystem',
      moduleTitle: 'Module 1: Fundamentals',
      keywords: 'ecosystem setup tooling libraries react router redux tanstack query vite vitest',
      content: {
        easyBreakdown: {
          oneLiner: 'React Ecosystem হলো React-কে ঘিরে গড়ে ওঠা আধুনিক Libraryগুলোর একটি শক্তিশালী পরিবার।',
          analogy: 'একটি স্মার্টফোন—React হলো অপারেটিং সিস্টেম, আর Router, Tailwind, Zustand হলো দরকারি অ্যাপস।',
          whyNeed: 'প্রোডাকশন-গ্রেড ফুলস্ট্যাক অ্যাপ্লিকেশন তৈরিতে কোন Library কীভাবে একসাথে জোড়া লাগে তা জানতে।'
        },
        mentorNote: 'React কিন্তু একা কাজ করে না দাদা! একটা সম্পূর্ণ প্রোডাকশন অ্যাপ বানাতে গেলে পুরো React Ecosystem এর কোন কোন Library কীভাবে একসাথে জোড়া লাগে তা জানা খুব দরকার। চলো মানচিত্রটা পরিষ্কার করে নিই।',
        target: 'React এর সাথে প্রয়োজনীয় Routing, State ম্যানেজমেন্ট, ডেটা ফেচিং এবং টেস্টিং ইকোসিস্টেমের মানচিত্র বোঝা।',
        problemVsSolution: {
          problem: 'শুধু React জানলে তুমি শুধুই বাটন আর কার্ড বানাতে পারবে। কিন্তু ইউজার যখন লগইন করবে, পেজ বদলাবে, ব্যাকএন্ড থেকে ডাটা আনবে—তখন কী করবে?',
          solution: 'React ইকোসিস্টেমের স্পেশালাইজড টুলস (React Router, Zustand, TanStack Query, Tailwind) মিলে পুরো সিস্টেম তৈরি করে।'
        },
        sections: [
          {
            heading: 'আধুনিক React ইকোসিস্টেমের ৪টি স্তম্ভ',
            body: '১. Routing: সিঙ্গেল পেজ অ্যাপ্লিকেশনের পেজ নেভিগেশনের জন্য `react-router-dom` (বা Next.js এর ফাইল-বেসড Router)।\n২. Global State: Client State এর জন্য `Zustand` বা `Redux Toolkit`।\n৩. Server State: Server থেকে API ফেচিং, ক্যাশিং ও ডেটা সিঙ্কের জন্য `TanStack Query (React Query)`।\n৪. Styling: দ্রুত ও কনসিস্টেন্ট UI এর জন্য `Tailwind CSS` বা হেডলেস Component Library যেমন `Radix UI` / `shadcn/ui`।'
          }
        ],
        codeSnippet: `// এন্টারপ্রাইজ স্ট্যাক এক নজরে:
// Framework/Runtime: Vite + React 18/19
// Routing: react-router-dom v6/v7
// State Management: Zustand (Client) + TanStack Query v5 (Server)
// Styling: Tailwind CSS
// Form Management: React Hook Form + Yup/Zod
// Icons: Lucide React
// HTTP Client: Axios with Interceptors`,
        pitfall: 'নতুনরা অনেক সময় অ্যাপের সব ডেটা (যেমন: API থেকে আসা ইউজারের লিস্ট) Redux বা Zustand এ জোর করে ঢুকিয়ে রাখে। মনে রাখবেন: Server ডেটা হ্যান্ডেল করার জন্য TanStack Query ব্যবহার করা বেস্ট প্র্যাকটিস!',
        interviewQ: 'প্রশ্ন: Client State এবং Server State এর মধ্যে পার্থক্য কি?\nউত্তর: Client State হলো ইউজার ইন্টারফেসের স্থানীয় তথ্য (যেমন: মোডাল ওপেন আছে কি না, ডার্ক মোড অন কি না)। আর Server State হলো ডাটাবেসে থাকা তথ্য যা ব্যাকএন্ড Server এ থাকে, নেটওয়ার্কের মাধ্যমে আসে এবং যেকোনো সময় অন্য ইউজারের কারণে বা ব্যাকএন্ডে পরিবর্তিত (Stale) হতে পারে।'
      }
    },
    {
      id: 'mod1-css-tailwind',
      title: 'Concept of CSS & Tailwind CSS',
      moduleTitle: 'Module 1: Fundamentals',
      keywords: 'css tailwind utility classes responsive flexbox grid dark mode style',
      content: {
        easyBreakdown: {
          oneLiner: 'Tailwind CSS হলো একটি Utility-First Framework যা JSX ফাইলে সরাসরি প্রি-ডিফাইন্ড ক্লাস লিখে দ্রুত ডিজাইন করতে দেয়।',
          analogy: 'রেডিমেড স্টিকার প্যাক—আলাদা রং-তুলি না খুঁজে সরাসরি সুন্দর ডিজাইন ক্লাসের স্টিকার লাগিয়ে দেওয়া।',
          whyNeed: 'হাজার লাইনের বড় CSS ফাইল আর ক্লাসনেম নিয়ে মাথায় হাত দেওয়ার হাত থেকে মুক্তি পেতে।'
        },
        mentorNote: 'আগে আলাদা `.css` ফাইলে হাজার হাজার লাইন ক্লাস লিখতে গিয়ে মাথা খারাপ হয়ে যেত। Tailwind CSS এনেছে Utility-first বিপ্লব! চলো দেখি কেন বিশ্বের বড় বড় কোম্পানি Tailwind পছন্দ করে।',
        target: 'Tailwind CSS এর utility classes, responsive breakpoints, flex/grid এবং dark mode আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'চিরাচরিত CSS ফাইলে ক্লাস নেম নিয়ে ক্যাশ ক্ল্যাশ (CSS specificity war) হতো এবং প্রজেক্ট বড় হওয়ার সাথে সাথে সিএসএস ফাইলের সাইজ মেগাবাইটে পৌঁছে যেত।',
          solution: 'Tailwind CSS এ সরাসরি ক্লাসে `flex p-4 bg-slate-900` লিখে স্টাইল করা যায়। প্রোডাকশন বিল্ডে শুধুমাত্র ব্যবহৃত ক্লাসগুলো স্ক্যান করে মাত্র ১০-২০KB ফাইল তৈরি হয়।'
        },
        sections: [
          {
            heading: 'Tailwind CSS কেন এত জনপ্রিয়?',
            body: 'Tailwind হলো একটি Utility-first CSS ফ্রেমওয়ার্ক। এখানে আলাদা CSS ফাইল না খুলে সরাসরি JSX এর ক্লাসে ক্লাস লিখে স্টাইল করা যায়। বিল্ড টাইমে Tailwind শুধুমাত্র ব্যবহৃত ক্লাসগুলো স্ক্যান করে একটি মাইক্রোস্কোপিক সাইজের অপ্টিমাইজড CSS ফাইল তৈরি করে (PurgeCSS)।'
          },
          {
            heading: 'রেসপনসিভ ডিজাইন ও ডার্ক মোড',
            body: 'Tailwind এ মোবাইল-ফার্স্ট অ্যাপ্রোচ ফলো করা হয়। যেমন `text-sm md:text-base lg:text-xl` লিখলে ডিফল্ট মোবাইলের জন্য `text-sm`, মিডিয়াম স্ক্রিনে `text-base` এবং লার্জ স্ক্রিনে `text-xl` অ্যাপ্লাই হবে।'
          }
        ],
        codeSnippet: `// Tailwind CSS রেসপনসিভ ও ইন্টারেক্টিভ Component
export function ProductCard({ title, price, inStock }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
          ইলেকট্রনিক্স
        </span>
        <span className={\`text-[11px] font-mono px-2 py-0.5 rounded-full border \${
          inStock 
            ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
            : 'bg-rose-950/60 text-rose-400 border-rose-800'
        }\`}>
          {inStock ? 'ইন স্টক' : 'স্টক শেষ'}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-white group-hover:text-cyan-300 transition">
        {title}
      </h3>
      
      <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800">
        <span className="text-lg font-mono font-bold text-slate-100">
          ৳{price.toLocaleString('bn-BD')}
        </span>
        <button className="rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold px-3 py-1.5 transition">
          কার্টে নিন
        </button>
      </div>
    </div>
  );
}`,
        pitfall: 'ডায়নামিক স্টাইলিং করার সময় স্ট্রিং কনক্যাটিনেশন যেমন `className={\`bg-\${color}-500\`}` করবেন না! Tailwind এর কম্পাইলার কোড রান না করে রেজেক্স দিয়ে স্ট্যাটিক ক্লাস খোঁজে, ফলে এমন ডায়নামিক ক্লাস মিস হয়ে যেতে পারে। সবসময় সম্পূর্ণ ক্লাসের নাম লিখবেন।',
        interviewQ: 'প্রশ্ন: CSS Modules এবং Tailwind CSS এর প্রধান পার্থক্য কি?\nউত্তর: CSS Modules এ প্রতিটি Component এর জন্য আলাদা `.module.css` ফাইল থাকে এবং ক্লাস নেম লোকালি স্কোপড হয় (হ্যাস দিয়ে ইউনিক করা হয়)। কিন্তু ফাইল সাইজ প্রজেক্টের সাথে সাথে বাড়ে। আর Tailwind এ কোনো নতুন CSS ফাইল লিখতে হয় না, পুরো প্রজেক্টে ক্লাস শেয়ার হয় এবং প্রোডাকশন বান্ডিল সাধারণত ২০KB-র নিচেই সীমাবদ্ধ থাকে।'
      }
    },
    {
      id: 'mod1-jsx-fragment-arrays',
      title: 'JSX, React Fragment & Essential Array Methods',
      moduleTitle: 'Module 1: Fundamentals',
      playgroundType: 'arrays',
      keywords: 'jsx react fragment array methods map filter reduce immutability spread key prop interactive',
      content: {
        easyBreakdown: {
          oneLiner: 'JSX হলো JavaScript এর ভেতর HTML লেখার রূপকথা, আর Fragment অপ্রয়োজনীয় DOM নোড বাদ দেয়।',
          analogy: 'চকলেটের মোড়ক—ভেতরের মিষ্টিগুলো পরিবেশন করার পর অপ্রয়োজনীয় প্লাস্টিকের খোসা ফেলে দেওয়া।',
          whyNeed: 'HTML এবং JS লজিক এক জায়গায় লিখতে এবং লুপ চালিয়ে ডায়নামিক ডেটা গ্রিড Render করতে।'
        },
        mentorNote: 'JSX দেখতে HTML এর মতো হলেও এটা খাঁটি JavaScript! আর React এ ডেটা Render করতে হলে ৩টি মেথড: map, filter, আর reduce তোমার হাতের তালুর মতো চেনা চাই। নিচে লাইভ ফিল্টার ও রিডিউস প্লে-গ্রাউন্ডে ক্লিক করে টেস্ট করে নাও!',
        target: 'JSX ট্রান্সপাইলেশন, Fragment এর প্রয়োজনীয়তা এবং map(), filter(), reduce() এর মাস্টার হওয়া।',
        problemVsSolution: {
          problem: 'JavaScript এ ডেটা প্রসেস করতে গিয়ে for লুপ চালালে কোড বড় হয় এবং অরিজিনাল ডেটা Mutate হয়ে বাগ তৈরি করে।',
          solution: '`map` এবং `filter` হলো Pure Functions—এরা অরিজিনাল Array কে অক্ষত রেখে সম্পূর্ণ নতুন Array রিটার্ন করে, যা React এর Immutability রুলের সাথে পারফেক্ট মিলে যায়!'
        },
        sections: [
          {
            heading: 'JSX আসলে কী?',
            body: 'JSX এর পূর্ণরূপ JavaScript XML। এটি একটি সিনট্যাক্স এক্সটেনশন। Vite এর SWC কম্পাইলার JSX কে ব্যাকগ্রাউন্ডে `React.createElement()` Function কলে রূপান্তর করে। JSX এ `class` এর বদলে `className` এবং `for` এর বদলে `htmlFor` লিখতে হয়, কারণ এগুলো JavaScript এর রিজার্ভড কীওয়ার্ড।'
          },
          {
            heading: 'React Fragment (<> ... </>) কেন লাগে?',
            body: 'JSX এ যেকোনো Component কে অবশ্যই একটি মাত্র Parent এলিমেন্ট রিটার্ন করতে হয়। অপ্রয়োজনীয় `<div>` দিয়ে DOM অতিরিক্ত ভারী না করে আমরা `<React.Fragment>` বা শর্টহ্যান্ড `<></>` ব্যবহার করি, যা কোনো অতিরিক্ত Browser DOM নোড তৈরি করে না।'
          }
        ],
        codeSnippet: `// JSX ও অপরিহার্য Array Methods এর বাস্তব উদাহরণ
export function CourseOverview({ modules }) {
  // 1. filter() দিয়ে শুধুমাত্র একটিভ মডিউল বাছাই
  const activeModules = modules.filter(m => m.isActive);

  // 2. reduce() দিয়ে মোট ক্লাসের সংখ্যা বের করা
  const totalClasses = activeModules.reduce((acc, curr) => acc + curr.classCount, 0);

  return (
    // React Fragment: কোনো অতিরিক্ত DOM র‍্যাপার তৈরি করে না
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-white">কোর্স কারিকুলাম</h2>
        <span className="text-xs bg-cyan-950 text-cyan-400 px-2 py-1 rounded font-mono">
          মোট ক্লাস: {totalClasses} টি
        </span>
      </div>

      <div className="space-y-2">
        {/* 3. map() দিয়ে লিস্ট Rendering (ইউনিক key সহ) */}
        {activeModules.map((item) => (
          <div 
            key={item.id} // ⚠️ ইউনিক কি দেওয়া বাধ্যতামূলক!
            className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center"
          >
            <span className="text-sm text-slate-200">{item.title}</span>
            <span className="text-xs font-mono text-cyan-400">{item.duration}</span>
          </div>
        ))}
      </div>
    </>
  );
}`,
        pitfall: 'React এ State আপডেট করার সময় কখনোই অরিজিনাল Array কে Mutate করবেন না (যেমন `todos.push(newTodo)` ❌)। সবসময় নতুন Array তৈরি করবেন (যেমন `setTodos([...todos, newTodo])` ✅)।',
        interviewQ: 'প্রশ্ন: React Fragment এ কখন শর্টহ্যান্ড `<></>` এর বদলে সম্পূর্ণ `<React.Fragment>` লিখতে হয়?\nউত্তর: যখন আপনাকে কোনো ফ্র্যাগমেন্টে `key` Prop পাস করতে হয় (যেমন লুপের ভেতরে কোনো ফ্র্যাগমেন্ট রিটার্ন করার সময় `map((item) => <React.Fragment key={item.id}>...</React.Fragment>)`), তখন শর্টহ্যান্ড `<></>` এ কি লেখা যায় না, তাই সম্পূর্ণ নাম ব্যবহার করতে হয়।'
      }
    },
    {
      id: 'mod1-props-state',
      title: 'Props, State & useState() Master Deep Dive',
      moduleTitle: 'Module 1: Fundamentals',
      playgroundType: 'props',
      keywords: 'props state usestate hook updater function batching closure trap rerender fiber linked list interactive',
      content: {
        easyBreakdown: {
          oneLiner: 'Props হলো Parent থেকে আসা Read-Only উপহার, আর State হলো Component এর নিজস্ব পরিবর্তনশীল অভ্যন্তরীণ মেমরি।',
          analogy: 'Props হলো জন্মসূত্রে পাওয়া জিন (DNA), আর State হলো পকেটের টাকা যা খরচ করলে জীবনযাত্রা (UI) বদলে যায়।',
          whyNeed: 'ইউজার ইন্টারঅ্যাকশনের সাথে সাথে UI যাতে অটোমেটিক Re-render হয়ে সর্বদা আপ-টু-ডেট থাকে।'
        },
        mentorNote: 'দাদা, একদম মন দিয়ে শোনো। এই টপিকটা React এর মেরুদণ্ড! তুমি যদি Props আর State-এর ভেতরকার মেমরি মডেল এবং useState-এর বিহাইন্ড দ্য সিন্স মেকানিজম নিখুঁতভাবে বুঝে যাও—তাহলে React এর ৫০% জটিলতা তোমার কাছে পানির মতো সহজ হয়ে যাবে। চলো বাস্তব জীবনের উদাহরণ আর ফাইবার মেমরি লিঙ্কড-লিস্ট দিয়ে জিরো থেকে সিনিয়র লেভেলে পুরোটা ময়নাতদন্ত করি!',
        target: 'Props vs State এর আসল পার্থক্য, Fiber Hook Linked List, Stale Closure ট্র্যাপ, Updater Function, Lazy Initialization, এবং Lifting State Up আর্কিটেকচার আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'Vanilla JS এ সাধারণ ভেরিয়েবল (let count = 0) বদলালে DOM নিজে বদলাত না। ইউজারকে স্ক্রিনে নতুন মান দেখাতে হলে document.getElementById দিয়ে ৫-১০ জায়গায় আলাদা করে DOM ম্যানিপুলেট করতে হতো, যা বড় সিস্টেমে State ডিসিঙ্ক তৈরি করত।',
          solution: 'React এ State হলো একটি Reactিভ ডেটা সোর্স (Single Source of Truth)। State পরিবর্তিত হওয়া মাত্রই React স্বয়ংক্রিয়ভাবে Component টিকে Re-render করে স্ক্রিনে নিখুঁত ফ্রেশ UI তুলে ধরে।'
        },
        sections: [
          {
            heading: '১. সহজ উপমা: Props vs State এর রিয়েল-লাইফ এনালজি',
            body: '• Props (Properties): ধরো তোমার জন্মসূত্রে পাওয়া জিন (DNA) বা বাবা-মায়ের দেওয়া উপহার। এটা বাইরে থেকে তোমার কাছে এসেছে, তুমি নিজে তোমার জিন পরিবর্তন করতে পারবে না (Props are Pure and Read-only)।\n• State: তোমার মনের বর্তমান অনুভূতি বা তোমার পকেটের টাকা। এটা তোমার নিজস্ব অভ্যন্তরীণ বিষয় (Internal Memory)। তুমি চাইলে খরচ করতে পারো, আবার জমাতেও পারো (Mutable via setter function)। যখনই তোমার পকেটের টাকা বাড়ে বা কমে, তোমার চালচলন বা লাইফস্টাইল (UI) বদলে যায়!'
          },
          {
            heading: '২. Under The Hood: Function শেষ হলে তো ভ্যারিয়েবল মুছে যায়, তাহলে useState মান মনে রাখে কীভাবে?',
            body: 'খুব গভীর টেকনিক্যাল ইন্টারভিউ প্রশ্ন! সাধারণ JavaScript Function যখন রান করা শেষ করে, তখন তার কল-স্ট্যাক ফ্রেম মুছে যায় এবং ভেতরের লোকাল ভেরিয়েবলগুলো মেমরি থেকে হারিয়ে যায়। তাহলে Component প্রতিবার Re-render হলে count = 0 তে রিসেট হয়ে যায় না কেন?\n\nরহস্যটা লুকিয়ে আছে React Fiber Architecture এ!\nReact প্রতিটি Component এর জন্য ব্যাকগ্রাউন্ডে একটি Fiber Node Object বজায় রাখে। প্রতিটি Fiber Node এর ভেতরে একটি প্রোপার্টি থাকে যার নাম `memoizedState`। এটি মূলত একটি Hook Linked List!\n\nতুমি যখন প্রথমবার Component মাউন্ট করো:\n১. `useState(0)` কল হলে React একটি নতুন Hook Object তৈরি করে: `{ memoizedState: 0, queue: [...], next: null }`।\n২. পরবর্তী Render এ যখন আবার `useState(0)` কল হয়, React দেখে এটি কোনো ফার্স্ট Render নয়; React তখন লিঙ্কড লিস্টের সেই নির্দিষ্ট নোড থেকে পূর্বের সেভ করা `memoizedState` রিটার্ন করে দেয়!\n\n⚠️ সিনিয়র রুল: এই কারণেই React Hooks কখনো if-condition বা for-loop এর ভেতরে লেখা যায় না! কারণ লুপ বা শর্তের ভেতরে লিখলে লিঙ্কড লিস্টের পয়েন্টার উল্টাপাল্টা হয়ে অন্য Hook এর ডেটা আরেক Hook এ চলে যাবে!'
          },
          {
            heading: '৩. Closure Snapshot ও Stale Closure ট্র্যাপ',
            body: 'অনেকে অবাক হয়ে বলে: "দাদা, আমি setCount(5) করলাম, কিন্তু ঠিক পরের লাইনে console.log(count) লিখলে পুরনো মান দেখাচ্ছে কেন?"\n\nকারণ React Rendering একটি Closure Snapshot হিসেবে কাজ করে! প্রতিটি Render এ Component Functionটি নতুন করে চলে এবং সেই নির্দিষ্ট Render এর State এর একটি "স্ন্যাপশট" বা স্থিরচিত্র তৈরি হয়। `setCount()` সিঙ্ক্রোনাসলি লোকাল ভ্যারিয়েবল বদলায় না; এটি React কে একটি Re-render শিডিউল করার নির্দেশ পাঠায়। পরবর্তী Render না হওয়া পর্যন্ত বর্তমান Function স্কোপে `count` এর মান আগেরটাই থাকে।'
          },
          {
            heading: '৪. Direct Value বনাম Functional Updater (prev => prev + 1)',
            body: 'যখন নতুন State পূর্ববর্তী State এর মানের ওপর নির্ভর করে, তখন কখনোই `setCount(count + 1)` লিখবেন না! কারণ পর পর তিনবার এটি লিখলে তিনবারই বর্তমান ক্লোজারের একই স্টেল ভ্যালু পাবে, ফলে ৩ বার কল করলেও মান মাত্র ১ বাড়বে।\n\nকিন্তু যখন তুমি লিখবে `setCount(prev => prev + 1)`:\nReact একটি আপডেট কিউ (Update Queue) তৈরি করে। প্রথম আপডেটের আউটপুট স্বয়ংক্রিয়ভাবে দ্বিতীয় আপডেটের `prev` হিসেবে পাস হয়। ফলে গ্যারান্টেড ৩ বাড়বে!'
          },
          {
            heading: '৫. Lazy Initial State (সিপিইউ পারফরম্যান্স সেভার হ্যাক)',
            body: 'যদি কোনো State এর ডিফল্ট মান আনতে লোকাল স্টোরেজ পড়তে হয় বা জটিল কোনো ম্যাথমেটিক্যাল ক্যালকুলেশন করতে হয়:\n❌ ভুল: `useState(heavyCalculation())` — এতে প্রতি Render এই heavyCalculation() Functionটি চলবে, যদিও React মানটি শুধু প্রথম Render এই ব্যবহার করবে!\n✅ সঠিক: `useState(() => heavyCalculation())` — একটি Callback Function পাস করলে React শুধুমাত্র ইনিশিয়াল মাউন্টেই Functionটি রান করাবে, বাকি Render এ সিপিইউ পুরোপুরি বেঁচে যাবে!'
          },
          {
            heading: '৬. Lifting State Up ও Child-টু-Parent কমিউনিকেশন',
            body: 'যেহেতু React এ ডেটা শুধু উপর থেকে নিচে যায় (Unidirectional), দুটি সিবলিং Component যদি একই ডেটা শেয়ার করতে চায়, তবে তাদের সাধারণ অভিভাবক (Common Parent)-এর কাছে State তুলে নিয়ে যেতে হয় (Lifting State Up)। আর Child থেকে Parent এ ডেটা পাঠাতে হলে Parent থেকে একটি Callback Function Props আকারে Child এ পাস করতে হয়।'
          }
        ],
        codeSnippet: `import { useState } from 'react';

// ১. Lazy Initialization & Complex State
export function AdvancedUserManager() {
  // ✅ Lazy State: শুধু প্রথম মাউন্টে চলবে
  const [users, setUsers] = useState(() => {
    console.log('শুধুমাত্র ইনিশিয়াল মাউন্টে এক্সিকিউট হলো');
    return [{ id: 1, name: 'অর্ক', role: 'Frontend Lead', active: true }];
  });

  // Child থেকে ডেটা রিসিভ করার Callback Function
  const handleToggleActive = (userId) => {
    // Immutable Object State আপডেট (Immutability Pattern)
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
      <h3 className="text-white font-bold text-base flex items-center justify-between">
        টিম মেম্বার লিস্ট 
        <span className="text-xs font-mono text-cyan-400">সদস্য: {users.length} জন</span>
      </h3>

      {/* ২. Child Component এ Props ও Callback পাস করা */}
      <div className="space-y-2">
        {users.map(u => (
          <UserRowCard 
            key={u.id}
            user={u} 
            onToggle={() => handleToggleActive(u.id)} 
          />
        ))}
      </div>
    </div>
  );
}

// ৩. Child Component: Destructured Props রিসিভ করছে
function UserRowCard({ user, onToggle }) {
  return (
    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
      <div>
        <h5 className="text-xs font-bold text-slate-100">{user.name}</h5>
        <span className="text-[10px] text-slate-400 font-mono">{user.role}</span>
      </div>

      <button
        onClick={onToggle}
        className={\`text-xs px-2.5 py-1 rounded-lg font-mono font-semibold transition \${
          user.active ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'
        }\`}
      >
        {user.active ? 'Active 🟢' : 'Inactive ⚪'}
      </button>
    </div>
  );
}`,
        pitfall: 'State এর ভেতর Object বা Array থাকলে কখনোই সরাসরি Mutate করবেন না (যেমন `user.active = false; setUser(user);` ❌)। কারণ Object এর মেমরি রেফারেন্স একই থাকে (`prev === next`), তাই React ভাববে কিছুই বদলায়নি এবং কোনো Re-render করবে না! সবসময় স্প্রেড অপারেটর (`{ ...user, active: false }`) দিয়ে নতুন রেফারেন্স রিটার্ন করবেন।',
        interviewQ: 'প্রশ্ন: React Hooks কেন কখনো if-condition বা লুপের ভেতরে ব্যবহার করা যায় না?\nউত্তর: কারণ React ইন্টারনালি Fiber Node এ Hooksকে একটি Linked List অর্ডারে সংরক্ষণ করে। যদি কোনো Render এ if-condition এর কারণে একটি Hook স্কিপ হয়, পুরো লিঙ্কড লিস্টের ইন্ডেক্স পয়েন্টার সরে যাবে এবং React ভুল Hook এর State অন্য Hook এ ইনজেক্ট করে অ্যাপ্লিকেশন ক্র্যাশ করাবে।'
      }
    },
    {
      id: 'mod1-events-dynamic',
      title: 'Event Handling & State Batching Mechanics',
      moduleTitle: 'Module 1: Fundamentals',
      playgroundType: 'batching',
      keywords: 'events syntheticevent onclick batching updater function closure trap interactive',
      content: {
        easyBreakdown: {
          oneLiner: 'Synthetic Event দিয়ে ইউজারের ক্লিক/টাইপিং ধরা এবং টারনারি অপারেটর দিয়ে ডায়নামিক UI Render করা।',
          analogy: 'দরজার কলিং বেল—টিপলেই ঘরে আলো জ্বলে উঠবে কিংবা গান বেজে উঠবে।',
          whyNeed: 'বাটন ক্লিক, মাউস হোভার এবং ইউজার অথেন্টিকেশনের ওপর ভিত্তি করে স্ক্রিনের উপাদান অদলবদল করতে।'
        },
        mentorNote: 'সবচেয়ে ট্রিকি ইন্টারভিউ প্রশ্ন: "একই Function এ ৩ বার setCount(count + 1) লিখলে কত বাড়বে?" উত্তর হলো মাত্র ১ বাড়বে! কেন? নিচে লাইভ প্লে-গ্রাউন্ডে নিজে বাটন টিপে দেখে নাও আপডেটার Function এর (`prev => prev + 1`) ক্ষমতা!',
        target: 'SyntheticEvent, Event Delegation এবং Updater Function দিয়ে নির্ভুল State ব্যাচিং নিশ্চিত করা।',
        problemVsSolution: {
          problem: 'যদি এক ক্লিকে ৩ বার State আপডেট করা হয় এবং ৩ বারই পুরো পেজ Re-render হয়, তবে মোবাইল ডিভাইসে Browser ফ্রেম ড্রপ করবে।',
          solution: 'React 18 সমস্ত State আপডেটকে এক ঝুড়িতে নিয়ে ১ বার Re-render করে (Batching)। আর সঠিক মান পেতে আমরা Functionাল আপডেটার ব্যবহার করি।'
        },
        sections: [
          {
            heading: 'Updater Function কেন ব্যবহার করবেন?',
            body: 'যখন নতুন State আগের State এর ওপর নির্ভরশীল হয়, তখন সরাসরি `setCount(count + 1)` না লিখে সর্বদা `setCount(prev => prev + 1)` লিখবেন। এর ফলে React ইন্টারনাল কিউ থেকে সর্বশেষ পেন্ডিং State বের করে হিসাব করে।'
          }
        ],
        codeSnippet: `// ❌ ভুল পদ্ধতি: একই Event এ স্টেল ভ্যালু পায়
const handleWrong = () => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1); // মাত্র ১ বাড়বে!
};

// ✅ সঠিক ইন্ডাস্ট্রি পদ্ধতি (Updater Function):
const handleCorrect = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1); // গ্যারান্টেড ৩ বাড়বে!
};`,
        pitfall: 'ইনলাইন Function এ ব্র্যাকেট দিয়ে কল করে ফেলা (যেমন `onClick={handleClick()}` ❌) মারাত্মক ভুল! ব্র্যাকেট দিলে Component Render হওয়ার সাথে সাথেই Functionটি এক্সিকিউট হয়ে যাবে। সবসময় রেফারেন্স `onClick={handleClick}` দিন।',
        interviewQ: 'প্রশ্ন: React এর SyntheticEvent এবং নেটিভ Browser Event এর পার্থক্য কি?\nউত্তর: SyntheticEvent হলো W3C স্পেসিফিকেশন অনুযায়ী তৈরি একটি ক্রস-Browser র‍্যাপার যা সমস্ত Browser এ Eventগুলোর অবিকল একই আচরণ নিশ্চিত করে। এটি পারফরম্যান্স বাড়াতে Event ডেলিগেশন ফলো করে।'
      }
    },
    {
      id: 'mod1-pure-component',
      title: 'Concept of Pure Component & shouldComponentUpdate',
      moduleTitle: 'Module 1: Fundamentals',
      keywords: 'pure component shouldcomponentupdate shallow compare react memo class components',
      content: {
        easyBreakdown: {
          oneLiner: 'Pure Component একই Props পেলে সর্বদা একই JSX আউটপুট দেয় এবং কোনো গোপন Side Effect তৈরি করে না।',
          analogy: 'ম্যাথমেটিক্যাল Function—f(2) সবসময় ৪ দেবে, কখনো মেজাজ খারাপ করে ৫ দেবে না।',
          whyNeed: 'অ্যাপ্লিকেশনকে সম্পূর্ণ বাগ-ফ্রি, টেস্টেবল এবং প্রিডিক্টেবল রাখতে।'
        },
        mentorNote: 'পুরনো ক্লাস Component এ পারফরম্যান্স অপ্টিমাইজ করতে PureComponent ব্যবহার করা হতো। আধুনিক Functionাল Component এ আমরা এর জন্য React.memo ব্যবহার করি। চলো এদের পেছনের শ্যালো কম্প্যারিজনের রহস্য বুঝে নিই।',
        target: 'Shallow Comparison এর মেকানিজম এবং অপ্রয়োজনীয় Re-render প্রতিরোধের কৌশল বোঝা।',
        problemVsSolution: {
          problem: 'Parent Component Re-render হলে ডিফল্টভাবে তার নিচের সমস্ত Child Component অপ্রয়োজনে Re-render হয়, যদিও তাদের Props একটুও বদলায়নি!',
          solution: '`React.memo` Child কে মেমোইজ করে রাখে এবং Props না বদলালে Child এর Re-render পুরোপুরি স্কিপ করে দেয়।'
        },
        sections: [
          {
            heading: 'Shallow Comparison আসলে কি?',
            body: 'Shallow Comparison প্রিমিটিভ টাইপের (Number, String, Boolean) মান তুলনা করে (`a === b`)। কিন্তু Object বা Array এর ক্ষেত্রে এটি ভেতরে না তাকিয়ে শুধুমাত্র তাদের মেমরি রেফারেন্স (Memory Reference) একই কি না তা চেক করে। তাই Object এর কনটেন্ট একই হলেও নতুন রেফারেন্স থাকলে এটি Re-render ট্রিগার করে দেয়।'
          }
        ],
        codeSnippet: `import React from 'react';

// আধুনিক Functionাল Component এ React.memo
export const ModernPureCard = React.memo(function ModernPureCard({ title, price }) {
  console.log('ModernPureCard Render হলো!');
  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
      <h4 className="text-white text-sm font-semibold">{title}</h4>
      <p className="text-xs text-cyan-400 font-mono">৳{price}</p>
    </div>
  );
});`,
        pitfall: 'খুব ছোট ও সরল Component এ অযথা React.memo বসাবেন না। শ্যালো কম্প্যারিজন করতেও প্রসেসরের কিছু ক্যালকুলেশন খরচ হয়।',
        interviewQ: 'প্রশ্ন: shouldComponentUpdate এর রিটার্ন টাইপ কি এবং এটি কি করে?\nউত্তর: এটি একটি বুলিয়ান (`true` অথবা `false`) রিটার্ন করে। ডেভেলপার যদি `false` রিটার্ন করে, তবে React সংশ্লিষ্ট Render এবং সাবট্রি ডিফারেন্সিয়াল আপডেট সম্পূর্ণ স্কিপ করে দেয়।'
      }
    },
    {
      id: 'mod1-lifecycle-simulator',
      title: 'React Lifecycle & Functional Hooks Mapping',
      moduleTitle: 'Module 1: Fundamentals',
      hasVisualizer: 'lifecycle',
      keywords: 'lifecycle mounting updating unmounting componentdidmount componentwillunmount useeffect hooks',
      content: {
        easyBreakdown: {
          oneLiner: 'Mounting (জন্ম), Updating (জীবনকাল) এবং Unmounting (বিদায়)—একটি Component এর ৩টি প্রধান জীবনচক্র।',
          analogy: 'মানুষের জীবনচক্র—জন্ম নেওয়া, প্রয়োজনমতো নিজেকে বদলানো এবং অবশেষে প্রস্থান করা।',
          whyNeed: 'কখন API কল করতে হবে এবং কখন মেমোরি লিক আটকাতে টাইমার পরিষ্কার করতে হবে তা জানতে।'
        },
        mentorNote: 'একটি React Component এর পুরো জীবনকাল ৩টি পর্বে বিভক্ত: জন্ম (Mounting), বৃদ্ধি ও পরিবর্তন (Updating), এবং বিদায় (Unmounting)। নিচে ইন্টারেক্টিভ সিমুলেটরে স্টেপ-বাই-স্টেপ ক্লিক করে স্ক্রিন পেইন্টের আগে ও পরে Hook এক্সিকিউশন দেখে নাও!',
        target: 'ক্লাস Component এর লাইফসাইকেল মেথডগুলোর সাথে আধুনিক Functionাল useEffect এর নির্ভুল ম্যাপিং শেখা।',
        problemVsSolution: {
          problem: 'ক্লাস Component এ একই লজিক (যেমন Event লিসেনার সেট ও রিমুভ) componentDidMount ও componentWillUnmount এ দুই জায়গায় ভাগ করে লিখতে হতো।',
          solution: 'Functionাল React এ মাত্র একটি `useEffect` এর ভেতরেই সেটআপ এবং রিটার্ন Function এ ক্লিনআপ সুন্দরভাবে সম্পন্ন করা যায়!'
        },
        sections: [
          {
            heading: 'Class Lifecycle থেকে Hooks এ নিখুঁত রূপান্তর চার্ট',
            body: '• `componentDidMount`  ➔  `useEffect(() => { ... }, [])` (ফাঁকা ডিপেন্ডেন্সি Array)\n• `componentDidUpdate`  ➔  `useEffect(() => { ... }, [count])` (নির্দিষ্ট ভেরিয়েবল ডিপেন্ডেন্সি)\n• `componentWillUnmount` ➔  `useEffect(() => { return () => { /* cleanup */ }; }, [])` (ক্লিনআপ রিটার্ন Function)'
          }
        ],
        codeSnippet: `import { useEffect, useState } from 'react';

export function UserStatusMonitor({ userId }) {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    // [১. Mounting পর্ব]: সকেট কানেকশন চালু
    console.log(\`সকেটে কানেক্ট হচ্ছে: \${userId}\`);
    const timer = setInterval(() => setOnline(prev => !prev), 3000);

    // [৩. Unmounting পর্ব]: মেমরি লিক বন্ধ করতে ক্লিনআপ
    return () => {
      console.log(\`সকেট ও টাইমার বন্ধ হলো: \${userId}\`);
      clearInterval(timer);
    };
  }, [userId]); // [২. Updating পর্ব]: userId বদলালে চলবে

  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs">
      ইউজার: <span className="font-mono text-cyan-400">{userId}</span> | স্ট্যাটাস:{' '}
      <span className={online ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
        {online ? 'অনলাইন 🟢' : 'অফলাইন ⚪'}
      </span>
    </div>
  );
}`,
        pitfall: 'useEffect এ টাইমার বা সকেট চালালে অবশ্যই রিটার্ন Function এ clearInterval বা disconnect করবেন, নাহলে মেমরি লিক হয়ে Browser ক্র্যাশ করবে।',
        interviewQ: 'প্রশ্ন: useLayoutEffect এবং useEffect এর মধ্যে আসল পার্থক্য কি?\nউত্তর: useLayoutEffect Browser স্ক্রিনে পিক্সেল আঁকার (Paint) ঠিক পূর্বে সিঙ্ক্রোনাসভাবে চলে (ডমের সাইজ মাপার জন্য)। অন্যদিকে useEffect স্ক্রিন ড্র হওয়ার পর সম্পূর্ণ অ্যাসিনক্রোনাসভাবে ব্যাকগ্রাউন্ডে চলে।'
      }
    }
  ]
};
