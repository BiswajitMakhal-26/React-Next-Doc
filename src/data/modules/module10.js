export const module10 = {
  id: 'mod10',
  title: 'Module 10: Grand Capstone Project & Senior Interview Bank',
  nameBangla: 'মডিউল ১০: ফুলস্ট্যাক এন্টারপ্রাইজ প্রজেক্ট ও সিনিয়র ইন্টারভিউ ব্যাংক',
  badge: 'Module 10',
  topics: [
    {
      id: 'mod10-capstone-project',
      title: 'Enterprise Capstone Project: DevFlow AI-Powered SaaS',
      moduleTitle: 'Module 10: Final Project',
      keywords: 'capstone project devflow enterprise saas architecture nextjs zustand tanstack query prisma postgres deployment',
      content: {
        easyBreakdown: {
          oneLiner: 'সম্পূর্ণ কোর্সে যা শিখেছি সব একসাথে জোড়া লাগিয়ে একটি পূর্ণাঙ্গ প্রোডাকশন SaaS ড্যাশবোর্ড তৈরি।',
          analogy: 'পুরো ক্রিকেট ট্রেনিংয়ের পর বিশ্বকাপের ফাইনাল ম্যাচে সেঞ্চুরি হাঁকানো!',
          whyNeed: 'রেজিউমেতে দেখানোর মতো বাস্তবসম্মত ইন্ডাস্ট্রি-লেভেল প্রজেক্ট আর্কিটেকচার আয়ত্ত করতে।'
        },
        mentorNote: 'সবগুলো মডিউলের জ্ঞান একসূত্রে গেঁথে আমরা তৈরি করব একটি সম্পূর্ণ প্রোডাকশন-রেডি এন্টারপ্রাইজ প্ল্যাটফর্ম: "DevFlow SaaS"! এটি কেবল কোনো ডেমো প্রজেক্ট নয়; এতে আছে Auth.js v5 সেশন গার্ড, Next.js 15 Server Actions, PostgreSQL + Prisma ডাটাবেস, Zustand গ্লোবাল Client State, TanStack Query v5 ক্যাশিং, এবং ইন-অ্যাপ Gemini AI অ্যাসিস্ট্যান্ট!',
        target: 'একটি রিয়েল-ওয়ার্ল্ড ইন্ডাস্ট্রিয়াল ফুলস্ট্যাক আর্কিটেকচার দাঁড় করানো, ডেপ্লয়মেন্ট এবং স্কেলেবিলিটি নিশ্চিত করা।',
        problemVsSolution: {
          problem: 'আলাদা আলাদা ছোট টিউটোরিয়াল দেখলে বোঝা যায় না বাস্তব প্রোডাকশনে কীভাবে সব প্রযুক্তি একসাথে সমন্বিত হয়ে একটি মিলিয়ন-ডলার SaaS প্ল্যাটফর্ম চালায়।',
          solution: 'DevFlow SaaS প্রজেক্টে ফ্রন্টএন্ড, ব্যাকএন্ড, ডাটাবেস, অথেনটিকেশন ও এআই ইন্টিগ্রেশন একটি নিটোল এন্টারপ্রাইজ আর্কিটেকচারে গেঁথে দেওয়া হয়েছে।'
        },
        sections: [
          {
            heading: 'প্রজেক্ট আর্কিটেকচার ও টেক-স্ট্যাক',
            body: '• Framework: Next.js 15 (App Router, React Server Components)\n• ডাটাবেস ও ওআরএম: PostgreSQL + Prisma ORM\n• Client State: Zustand (উইথ LocalStorage Persist)\n• Server State: TanStack Query v5 (Optimistic Updates)\n• অথেনটিকেশন: Auth.js v5 / JWT HttpOnly Cookie Session\n• স্টাইলিং ও UI: Tailwind CSS + Lucide Icons\n• এআই ইঞ্জিন: Google Gemini API Streaming'
          },
          {
            heading: 'সম্পূর্ণ প্রজেক্ট ফোল্ডার কাঠামো (Enterprise Folder Structure)',
            body: 'স্কেলেবল এন্টারপ্রাইজ অ্যাপ্লিকেশনের প্রতিটি ফাইল কোথায় থাকবে তা নিচের ডিরেক্টরি ট্রিতে স্পষ্ট দেওয়া হলো।'
          }
        ],
        codeSnippet: `devflow-enterprise-saas/
├── prisma/
│   └── schema.prisma         # PostgreSQL ডাটাবেস মডেল (User, Project, Task, AIHistory)
├── public/                   # স্ট্যাটিক ফেভিকন ও মেটা ইমেজ
├── src/
│   ├── app/                  # Next.js 15 App Router
│   │   ├── (auth)/           # Route Group: লগইন ও রেজিস্ট্রেশন
│   │   │   ├── login/page.jsx
│   │   │   └── register/page.jsx
│   │   ├── (dashboard)/      # Protected Route Group: মূল ড্যাশবোর্ড
│   │   │   ├── layout.jsx    # অথেনটিকেটেড সাইডবার ও ন্যাভ লেআউট
│   │   │   ├── page.jsx      # ড্যাশবোর্ড অ্যানালিটিক্স (RSC)
│   │   │   ├── projects/     # প্রজেক্ট ও টাস্ক ম্যানেজমেন্ট
│   │   │   │   ├── [id]/page.jsx
│   │   │   │   └── page.jsx
│   │   │   └── ai-assistant/ # এআই চ্যাট হাব
│   │   ├── api/              # ব্যাকএন্ড রুট হ্যান্ডলার
│   │   │   └── chat/route.js # Gemini Streaming API
│   │   ├── layout.jsx        # গ্লোবাল রুট লেআউট
│   │   ├── loading.jsx       # গ্লোবাল Suspense স্কেলিটন
│   │   └── not-found.jsx     # কাস্টম ৪MD পেজ
│   ├── actions/              # Server Actions ('use server')
│   │   ├── projectActions.js # ডাটাবেস Mutation ও revalidatePath
│   │   └── authActions.js
│   ├── components/           # রিইউজেবল Client ও Server Componentস
│   │   ├── ui/               # বাটন, ইনপুট, মোডাল
│   │   └── ai/               # ChatBox, TokenStreamer
│   ├── lib/                  # ইউটিলিটি ও Client ইনস্ট্যান্স
│   │   ├── prisma.js         # Singleton Prisma Client
│   │   └── queryClient.js    # TanStack Query Client
│   ├── store/                # Zustand গ্লোবাল Client স্টোর
│   │   └── useUiStore.js
│   └── middleware.ts         # Edge JWT Auth Guard
├── .env                      # সুরক্ষিত সিক্রেট কী ও DATABASE_URL
├── next.config.mjs
└── package.json`,
        pitfall: 'প্রোডাকশনে ডেপ্লয় করার আগে ডাটাবেস কানেকশন পুলিং (যেমন Prisma Accelerate বা PgBouncer) নিশ্চিত না করলে Serverলেস Function এ হঠাৎ হাজার ইউজার এলে ডাটাবেস কানেকশন লিমিট এক্সিড করে ক্র্যাশ করতে পারে।',
        interviewQ: 'প্রশ্ন: এন্টারপ্রাইজ অ্যাপ্লিকেশনে সিকিউরিটি নিশ্চিত করতে ফ্রন্টএন্ডে কি কি প্র্যাকটিস মানা উচিত?\nউত্তর: ১. এক্সএসএস (XSS) প্রতিরোধ করতে ইনপুট স্যানিটাইজেশন এবং dangerouslySetInnerHTML পরিহার। ২. সিএসআরএফ (CSRF) প্রতিরোধ করতে SameSite=Strict এবং HttpOnly কুকি ব্যবহার। ৩. রেট লিমিটিং (Rate Limiting) দিয়ে ব্রুট ফোর্স এবং ডিডস অ্যাটাক ঠেকানো।'
      }
    },
    {
      id: 'mod10-interview-bank',
      title: 'Top 25 Senior React & Next.js Interview Master Bank',
      moduleTitle: 'Module 10: Final Project',
      keywords: 'interview questions answers senior staff engineer tricky concepts react nextjs preparation bangla',
      content: {
        easyBreakdown: {
          oneLiner: 'টপ ২৫টি সিনিয়র ও স্টাফ ইঞ্জিনিয়ার লেভেলের ইন্টারভিউ প্রশ্নের গভীরে গিয়ে টেকনিক্যাল উত্তর প্রস্তুতি।',
          analogy: 'ইন্টারভিউ হ্যাক শিট—যেখানে প্রতিটি বাউন্সার প্রশ্ন কীভাবে ছক্কা হাঁকাতে হবে তা আগে থেকেই জানা থাকে।',
          whyNeed: 'যেকোনো হাই-পেইং মাল্টিন্যাশনাল কোম্পানি বা প্রোডাক্ট স্টার্টআপের ইন্টারভিউতে কনফিডেন্টলি ক্র্যাক করতে।'
        },
        mentorNote: 'ইন্টারভিউ বোর্ডে জুনিয়র এবং সিনিয়রদের উত্তরের ধরন সম্পূর্ণ আলাদা হয়। জুনিয়ররা শুধু মুখস্থ ডেফিনিশন শোনায়, আর সিনিয়ররা বলে আর্কিটেকচারাল ট্রেড-অফ (Trade-offs) এবং Browser মেমরি মডেল। নিচে সেরা ১০টি ইন্টারভিউ প্রশ্নের সিনিয়র-লেভেল মডেল উত্তর দেওয়া হলো!',
        target: 'ইন্টারভিউ বোর্ডে আত্মবিশ্বাসের সাথে টেকনিক্যাল কারণ ও মেমরি মডেল ব্যাখ্যা করতে পারা।',
        problemVsSolution: {
          problem: 'ইন্টারভিউয়ার যখন কোনো ট্রিকি প্রশ্ন করে (যেমন: React 18 এর Concurrent Rendering বা Fiber linked list), তখন জুনিয়র ডেভেলপাররা থতমত খেয়ে যায়।',
          solution: 'এই মাস্টার ব্যাংকের উত্তরগুলো মুখস্থ না করে মেমরি ও আর্কিটেকচারাল কারণ বুঝে উত্তর দিলে ইন্টারভিউয়ার ইমপ্রেসড হতে বাধ্য!'
        },
        sections: [
          {
            heading: 'প্রশ্ন ১: React 18 এর Concurrent Features কিভাবে কাজ করে?',
            body: 'উত্তর: আগে React Rendering ছিল "Blocking" বা সিঙ্ক্রোনাস। একবার Render শুরু হলে শেষ না হওয়া পর্যন্ত Browser এর মেইন থ্রেড ব্লক থাকত। React 18 এর Concurrent Rendering একে "Interruptible" করেছে। `useTransition` বা `useDeferredValue` দিয়ে আমরা কম গুরুত্বপূর্ণ Renderকে বিরতি দিয়ে ইউজারের টাইপিং বা ক্লিকের মতো জরুরি Event কে আগে প্রাধান্য দিতে পারি।'
          },
          {
            heading: 'প্রশ্ন ২: React Fiber Architecture আসলে কি?',
            body: 'উত্তর: Fiber হলো React এর রিকনসিলিয়েশন ইঞ্জিনের সম্পূর্ণ পুনর্লিখন। এটি কল স্ট্যাকের পরিবর্তে প্রতিটি Component কে একটি ভার্চুয়াল স্ট্যাক ফ্রেম বা "Fiber Node" (একটি লিংকড লিস্ট নোড) হিসেবে রিপ্রেজেন্ট করে। এর ফলে React Renderingয়ের কাজকে ছোট ছোট ইউনিটে ভাগ করতে পারে, কাজ পজ করতে পারে বা প্রায়োরিটি দিতে পারে।'
          },
          {
            heading: 'প্রশ্ন ৩: Hydration Error কেন হয় এবং সমাধান কি?',
            body: 'উত্তর: Server থেকে জেনারেট হওয়া প্রাথমিক HTML এর সাথে Client Browser এ প্রথম Render হওয়া Virtual DOM এর কোনো অমিল (Mismatch) থাকলে Hydration Error ঘটে। সাধারণত `window`, `localStorage`, বা `Date.now()` Server এ এক মান এবং Client এ অন্য মান দিলে এটি হয়। সমাধান: এই কোডগুলো `useEffect` এর ভেতর চালানো অথবা `suppressHydrationWarning` ব্যবহার করা।'
          },
          {
            heading: 'প্রশ্ন ৪: Prop Drilling vs Context API vs Zustand কখন কোনটা বেছে নেবেন?',
            body: 'উত্তর: ২-৩ লেভেলের সাধারণ ডেটা পাসে সাধারণ Props Passing সেরা। থিম, ডার্ক মোড বা ইউজারের ভাষার মতো লো-ফ্রিকোয়েন্সি State যেখানে ঘন ঘন পরিবর্তন হয় না সেখানে Context API। আর জটিল, দ্রুত পরিবর্তনশীল গ্লোবাল State এবং চমৎকার পারফরম্যান্সের জন্য Zustand সেরা।'
          }
        ],
        codeSnippet: `// ইন্টারভিউ ট্রিক প্রশ্ন: এই কোডের আউটপুট কনসোলে কি আসবে?
function TrickyCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  return <button onClick={handleClick}>ক্লিক করুন</button>;
}
// ব্যাখ্যা:
// ১. console.log(count) এ প্রিন্ট হবে 0 (কারণ setState অ্যাসিনক্রোনাস ও ব্যাচড)।
// ২. বাটনে এক ক্লিকে কাউন্ট ১ বাড়বে, ২ বাড়বে না (কারণ দুটি setCount কলই স্টেল মান 0 পেয়েছে)।
// সমাধান: setCount(prev => prev + 1) ব্যবহার করতে হবে!`,
        pitfall: 'ইন্টারভিউতে কোনো প্রশ্ন না জানলে আন্দাজে উত্তর বানিয়ে না বলে বিনীতভাবে বলুন: "এই নির্দিষ্ট দিকটিতে আমার সরাসরি অভিজ্ঞতা নেই, তবে আমার আর্কিটেকচারাল বোঝাপড়া অনুযায়ী এটি এভাবে কাজ করতে পারে..." এটি সিনিয়র মানসিকতা প্রকাশ করে।',
        interviewQ: 'প্রশ্ন: Next.js 15 এ Turbopack কেন ডিফল্ট হয়েছে?\nউত্তর: Turbopack হলো Webpack এর উত্তরসূরি, যা সম্পূর্ণ Rust ল্যাঙ্গুয়েজে লেখা। এটি Webpack এর চেয়ে ৭০০ গুণ পর্যন্ত দ্রুত HMR (Hot Module Replacement) এবং ১০ গুণ দ্রুত ইনিশিয়াল কোড বুটস্ট্র্যাপ করতে সক্ষম।'
      }
    }
  ]
};
