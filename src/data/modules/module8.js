export const module8 = {
  id: 'mod8',
  title: 'Module 8: Fullstack Next.js (App Router Mastery)',
  nameBangla: 'মডিউল ৮: ফুলস্ট্যাক নেক্সটজেএস (Next.js 15 App Router)',
  badge: 'Module 8',
  topics: [
    {
      id: 'mod8-intro-routing',
      title: 'Introduction to Next.js & Modern App Router Architecture',
      moduleTitle: 'Module 8: Next.js',
      keywords: 'nextjs app router pages router server components client components rsc use client',
      content: {
        easyBreakdown: {
          oneLiner: 'Next.js 15 App Router হলো ফাইল-সিস্টেম ভিত্তিক Routing এবং ফুলস্ট্যাক Server Component এর ভবিষ্যৎ।',
          analogy: 'কম্পিউটারের ফোল্ডার ডিরেক্টরি—ফোল্ডার বানালেই অটোমেটিক ওয়েবসাইটের নতুন পেজ তৈরি হয়ে যাওয়া।',
          whyNeed: 'চমৎকার SEO, ব্লিসফুল পারফরম্যান্স এবং জিরো-Client JavaScript বান্ডেল সাইজ নিশ্চিত করতে।'
        },
        mentorNote: 'React হলো ইঞ্জিনের মতো, আর Next.js হলো সম্পূর্ণ বিলাসবহুল গাড়ি! এতে Routing, Server-সাইড Rendering, ইমেজ অপ্টিমাইজেশন, এপিআই রুট এবং এসইও সবকিছু এক Package এ সাজানো থাকে। আর নেক্সটজেএস এর আধুনিক App Router ফ্রন্টএন্ডের ভবিষ্যৎ!',
        target: 'React Server Components (RSC) বনাম Client Components (`"use client"`), App Router ফোল্ডার স্ট্রাকচার বোঝা।',
        problemVsSolution: {
          problem: 'সাধারণ React এ সমস্ত JavaScript Client Browser এ ডাউনলোড হতো, ফলে ডাটাবেস সিক্রেট ফ্রন্টএন্ডে রাখা যেত না এবং বান্ডিল সাইজ অনেক ভারী হতো।',
          solution: 'React Server Components (RSC) Server এ এক্সিকিউট হয়ে Browser এ জিরো JavaScript পাঠায় এবং ডাটাবেস সিক্রেট সরাসরি Server এ সুরক্ষিত রাখে!'
        },
        sections: [
          {
            heading: 'React Server Components (RSC) এর বৈপ্লবিক সুবিধা',
            body: 'Next.js App Router এ সমস্ত Component ডিফল্টভাবে Server Components! অর্থাৎ এই Components Browser এ কখনো ডাউনলোড হয় না; এগুলো Server এ এক্সিকিউট হয়ে সরাসরি খাঁটি HTML এবং লাইটওয়েট স্ট্রিম হিসেবে Client এ আসে।'
          },
          {
            heading: 'কখন `"use client"` ব্যবহার করবেন?',
            body: 'শুধুমাত্র যখন আপনাকে Browser-নির্ভর কোনো কাজ করতে হবে—যেমন: `useState`, `useEffect`, `onClick` Event লিসেনার, বা Browser API (`window`, `localStorage`) ব্যবহার করতে হবে, ফাইলের ঠিক প্রথম লাইনে `"use client"` ডিরেক্টিভ লিখে তাকে Client Component ঘোষণা করতে হয়।'
          }
        ],
        codeSnippet: `// app/page.jsx - [Server Component] ডিফল্ট Server Component!
import prisma from '@/lib/prisma';
import ClientLikeButton from './ClientLikeButton';

export default async function HomePage() {
  // সরাসরি Server সাইডে সুরক্ষিত ডাটাবেস কুয়েরি! (কোনো API রুট লাগবে না)
  const users = await prisma.user.findMany();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-4">ইউজার ডিরেক্টরি (RSC Powered)</h1>
      <div className="space-y-2">
        {users.map(u => (
          <div key={u.id} className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex justify-between">
            <span className="text-slate-200">{u.name}</span>
            <ClientLikeButton initialLikes={u.likes} userId={u.id} />
          </div>
        ))}
      </div>
    </main>
  );
}`,
        pitfall: 'নতুনরা প্রায়ই পুরো পেজের শীর্ষে `"use client"` লিখে দেয়। এর ফলে Server Component এর সব সুবিধা নষ্ট হয়ে যায়। নিয়ম হলো: ট্রি-এর সর্বোচ্চ লেভেল পর্যন্ত Server Component রাখুন, এবং পাতার শেষ প্রান্তে (Leaves) যেখানে বাটন ক্লিক দরকার, শুধু সেই ছোট অংশে `"use client"` Component বসান।',
        interviewQ: 'প্রশ্ন: Server Component এবং Client Component এর মধ্যে ডেটা কীভাবে পাস হয়?\nউত্তর: Server Component থেকে Client Component এ Props আকারে ডেটা পাস করা যায়, তবে সেই Props অবশ্যই Serializable হতে হবে (JSON এ রূপান্তরযোগ্য হতে হবে—যেমন String, Number, Array, Object)। কোনো Function পাস করা যায় না।'
      }
    },
    {
      id: 'mod8-routing-navigation',
      title: 'Routing, Nested Layouts & Special Files',
      moduleTitle: 'Module 8: Next.js',
      keywords: 'routing nested layouts loading error not found route groups dynamic routes slug',
      content: {
        easyBreakdown: {
          oneLiner: 'ডায়নামিক রুট [id], নেস্টেড লেআউট এবং প্যারালাল স্লট দিয়ে এন্টারপ্রাইজ নেভিগেশন বিল্ড করা।',
          analogy: 'বড় মল—যেখানে মূল গেট, এসকেলেটর এবং ফ্লোর লেআউট একই থাকে, শুধু একেকটা দোকান বদলে যায়।',
          whyNeed: 'প্রতি পেজে পুরো লেআউট Re-render না করে শুধু কন্টেন্ট অংশটুকু বিদ্যুৎ গতিতে অদলবদল করতে।'
        },
        mentorNote: 'Next.js এ আলাদা কোনো react-router ফাইল লিখতে হয় না! আপনার ফোল্ডারের নামই হয়ে যায় ওয়েবসাইটের URL। আর স্পেশাল ফাইলগুলো (যেমন loading.tsx, error.tsx) স্বয়ংক্রিয়ভাবে লোডার ও এরর বাউন্ডারি তৈরি করে দেয়।',
        target: 'ফাইল-বেসড Routing, নেস্টেড লেআউট (`layout.tsx`), লোডিং স্পিনার (`loading.tsx`), এবং ৪MD (`not-found.tsx`) শেখা।',
        problemVsSolution: {
          problem: 'বড় অ্যাপ্লিকেশনে সাইডবার বা ন্যাভবার প্রতি পেজ ট্রানজিশনে Re-render হলে স্ক্রিনে অপ্রীতিকর ফ্লিকার (Flicker) দেখা যেত।',
          solution: 'Next.js এর `layout.tsx` কমন শেল বজায় রাখে এবং পেজ নেভিগেট করলেও State ও স্ক্রল পজিশন নিখুঁতভাবে ধরে রাখে।'
        },
        sections: [
          {
            heading: 'Next.js App Router এর বিশেষ ফাইলসমূহ',
            body: '• `layout.tsx`: কমন শেল (Navbar/Sidebar) যা সাব-পেজে নেভিগেট করলেও Re-render হয় না।\n• `page.tsx`: সংশ্লিষ্ট রুটের মূল ইউনিক UI।\n• `loading.tsx`: React Suspense এর ওপর ভিত্তি করে তৈরি ইনস্ট্যান্ট স্ট্রিমিং লোডার স্কেলিটন।\n• `error.tsx`: কোনো Server বা Client এরর হলে গোটা সাইট ক্র্যাশ না করে সুন্দর এরর পেজ দেখায়।'
          }
        ],
        codeSnippet: `// app/dashboard/layout.jsx - নেস্টেড ড্যাশবোর্ড লেআউট
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <aside className="w-64 border-r border-slate-800 p-4">
        <h3 className="font-bold text-cyan-400 mb-4">অ্যাডমিন ড্যাশবোর্ড</h3>
        <nav className="space-y-1 text-xs">
          <a href="/dashboard" className="block p-2 rounded hover:bg-slate-800">ওভারভিউ</a>
        </nav>
      </aside>
      
      <section className="flex-1 p-6">
        {children}
      </section>
    </div>
  );
}`,
        pitfall: '`error.tsx` ফাইলটিতে অবশ্যই ফাইলের একদম প্রথম লাইনে `"use client"` লিখতে হবে! কারণ Next.js এরর বাউন্ডারি Client সাইডে এক্সিকিউট হয় যাতে ইউজার "Try Again" বাটনে ক্লিক করতে পারে।',
        interviewQ: 'প্রশ্ন: Next.js এ Route Groups `(folder)` এবং Dynamic Routes `[id]` এর মধ্যে পার্থক্য কি?\nউত্তর: ফোল্ডারের নামের পাশে ফার্স্ট ব্র্যাকেট থাকলে `(marketing)` বা `(dashboard)`, সেটি URL এ কোনো প্রভাব ফেলে না; এটি শুধুমাত্র ফোল্ডার গোছানো এবং আলাদা আলাদা লেআউট শেয়ার করার জন্য ব্যবহৃত হয়। আর থার্ড ব্র্যাকেট `[id]` থাকলে সেটি ডায়নামিক URL সেগমেন্ট নির্দেশ করে।'
      }
    },
    {
      id: 'mod8-rendering-strategies',
      title: 'Rendering Strategies Matrix: SSG, SSR, ISR & CSR',
      moduleTitle: 'Module 8: Next.js',
      hasVisualizer: 'rendering-matrix',
      keywords: 'ssg ssr isr csr static generation server rendering dynamic revalidate incremental visualizer',
      content: {
        easyBreakdown: {
          oneLiner: 'SSR, SSG, ISR এবং Client-Side Rendering এর পার্থক্য জেনে সঠিক পেজের জন্য সঠিক স্ট্র্যাটেজি নেওয়া।',
          analogy: 'খাবারের প্রস্তুতি—আগে থেকে প্যাকেটজাত (SSG), অর্ডার পেলে তাজা রান্না (SSR), নাকি টেবিলে নিয়ে কাঁচা কাটা (CSR)।',
          whyNeed: 'গুগল সার্চে ১ নম্বর র‍্যাঙ্কিং পেতে এবং মিলিয়ন ট্রাফিক হ্যান্ডেল করার সময় Server এর বিল বাঁচাতে।'
        },
        mentorNote: 'নেক্সটজেএস এর সবচেয়ে রোমাঞ্চকর ক্ষমতা হলো Rendering স্ট্র্যাটেজি! নিচে ইন্টারেক্টিভ টাইমলাইনে নিজে দেখে নাও SSG, SSR, ISR এবং CSR এর ভেতর Server ও Browser এর কাজের ভাগাভাগি কিভাবে হয়।',
        target: 'Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), এবং Client-Side Rendering (CSR) এর গভীর পার্থক্য বোঝা।',
        problemVsSolution: {
          problem: '১০ লাখ প্রোডাক্টের ই-কমার্স সাইট বিল্ড করতে ঘণ্টার পর ঘণ্টা সময় লাগলে CI/CD পাইপলাইন জ্যাম হয়ে যায়।',
          solution: 'ISR (Incremental Static Regeneration) পুরো সাইট রি-বিল্ড না করে মাত্র নির্দিষ্ট পেজগুলো ব্যাকগ্রাউন্ডে অন-ডিমান্ড রি-জেনারেট করে ক্যাশ আপডেট করে দেয়!'
        },
        sections: [
          {
            heading: 'চারটি স্ট্র্যাটেজির বাস্তব ইন্ডাস্ট্রি উদাহরণ',
            body: '১. SSG: বিল্ড টাইমে প্Re-render (ব্লগ, পোর্টফোলিও)।\n২. SSR: প্রতি রিকোয়েস্টে লাইভ Server Render (লাইভ স্টক এক্সচেঞ্জ, সোশ্যাল মিডিয়া ফিড)।\n৩. ISR: বিল্ড টাইমে স্ট্যাটিক কিন্তু ব্যাকগ্রাউন্ডে নির্দিষ্ট সময় পর অটো-আপডেট (১০ লাখ প্রোডাক্টের দারাজ বা অ্যামাজন)।\n৪. CSR: Client Browser এ Render (লগইন প্রোটেক্টেড সেটিংস পেজ)।'
          }
        ],
        codeSnippet: `// 1. ISR ডেটা ফেচিং (Next.js 15)
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 } // ৬০ সেকেন্ড পর অটো-রিভ্যালিডেট
  });
  return res.json();
}

// 2. SSR ডেটা ফেচিং (কোনো ক্যাশ নয়, প্রতি ক্লিকে লাইভ ডেটা)
async function getLiveStockPrice() {
  const res = await fetch('https://api.example.com/stocks', {
    cache: 'no-store' // ডায়নামিক SSR!
  });
  return res.json();
}`,
        pitfall: 'যদি কোনো Server Component এ `cookies()` বা `headers()` কল করা হয়, Next.js স্বয়ংক্রিয়ভাবে সেই পেজটিকে SSG থেকে ডায়নামিক SSR এ রূপান্তর করে।',
        interviewQ: 'প্রশ্ন: Incremental Static Regeneration (ISR) এর সবচেয়ে বড় সুবিধা কি?\nউত্তর: এটি পুরো ওয়েবসাইট বিল্ড করার দীর্ঘ সময় ও বিল্ড ফেইলিওর থেকে মুক্তি দেয়। মিলিয়ন প্রোডাক্টের সাইটে মাত্র ১০০০টি পপুলার পেজ বিল্ড টাইমে তৈরি করে বাকি পেজগুলো প্রথম ইউজারের রিকোয়েস্টে অন-ডিমান্ড ব্যাকগ্রাউন্ডে জেনারেট ও CDN এ ক্যাশ করা সম্ভব হয়।'
      }
    },
    {
      id: 'mod8-middleware-proxy',
      title: 'Middleware, Edge Computing & Reverse Proxy',
      moduleTitle: 'Module 8: Next.js',
      keywords: 'middleware edge runtime proxy rewrite redirect auth guard matcher security',
      content: {
        easyBreakdown: {
          oneLiner: 'Edge Middleware রিকোয়েস্ট Server এ পৌঁছানোর আগেই এজ নেটওয়ার্কে অথেন্টিকেশন এবং রিডাইরেক্ট সম্পন্ন করে।',
          analogy: 'আন্তর্জাতিক বিমানবন্দরের ইমিগ্রেশন ডেস্কে পাসপোর্ট না থাকলে দেশে ঢুকতেই না দিয়ে ফিরিয়ে দেওয়া।',
          whyNeed: 'অননুমোদিত ইউজারকে সুরক্ষিত ড্যাশবোর্ডে ঢুকতে বাধা দিতে এবং চোখের পলকে কান্ট্রি-বেসড রিডাইরেক্ট করতে।'
        },
        mentorNote: 'একটি রিকোয়েস্ট Server এ পৌঁছানোর আগেই তাকে মাঝপথে ধরে ফেলার ক্ষমতা হলো Next.js Middleware। এটি Vercel এর Edge Network এ চলে, ফলে মাত্র ৫ মিলি-সেকেন্ডের মধ্যে অনুমোদনবিহীন ইউজারকে লগইন পেজে রিডাইরেক্ট করে দেওয়া যায়!',
        target: 'middleware.ts, NextRequest, NextResponse, URL Rewrites vs Redirects, এবং সিকিউরিটি হেডার ইনজেকশন।',
        problemVsSolution: {
          problem: 'প্রতিটি পেজে আলাদাভাবে লগইন চেক করলে ইউজার সাময়িক সুরক্ষিত পেজের ফ্রেম দেখে ফেলে (Layout Flash)।',
          solution: 'Edge Middleware কোনো পেজ Render হওয়ার আগেই Server এর মুখে রিকোয়েস্ট আটকে সুরক্ষিত রিডাইরেক্ট করে দেয়।'
        },
        sections: [
          {
            heading: 'Next.js Middleware কিভাবে কাজ করে?',
            body: 'প্রজেক্টের রুট ডিরেক্টরিতে `middleware.ts` ফাইল থাকে। প্রতিটি আগত HTTP রিকোয়েস্টের জন্য এটি ক্লাউড এজ নেটওয়ার্কে চলে। এখানে ইউজারের JWT কুকি চেক করে পেজ এক্সেস ব্লক করা, জিওগ্রাফিক লোকেশন অনুযায়ী ভাষা পরিবর্তন করা বা ব্যাকএন্ডে রিভার্স প্রক্সি চালানো যায়।'
          }
        ],
        codeSnippet: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session_token')?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isDashboardRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
};`,
        pitfall: 'Next.js Middleware চলে Edge Runtime এ, Node.js ফুল রানটাইমে নয়! তাই এখানে ভারী Node.js Library ইমপোর্ট করা যাবে না। কুকি বা JWT ভেরিফিকেশন হালকা Library (যেমন `jose`) দিয়ে করতে হবে।',
        interviewQ: 'প্রশ্ন: NextResponse.rewrite এবং NextResponse.redirect এর মধ্যে পার্থক্য কি?\nউত্তর: `redirect` Browser এর অ্যাড্রেস বারের URL পরিবর্তন করে। আর `rewrite` Browser এর URL একদম অক্ষত রেখে Server সাইডে সম্পূর্ণ ভিন্ন ইন্টারনাল পেজ বা অন্য ব্যাকএন্ড Server এর ডেটা প্রক্সি করে প্রদর্শন করে।'
      }
    },
    {
      id: 'mod8-auth-crud-project',
      title: 'Full Authentication & CRUD Project with Server Actions',
      moduleTitle: 'Module 8: Next.js',
      hasVisualizer: 'next-auth-crud',
      keywords: 'authentication crud project server actions use server prisma revalidatepath interactive flow',
      content: {
        easyBreakdown: {
          oneLiner: 'NextAuth v5 এবং Server Actions দিয়ে সম্পূর্ণ সিকিউর কুকি-বেসড অথেন্টিকেশন ও ডাটাবেস Mutation।',
          analogy: 'ফাইভ স্টার হোটেলের কী-কার্ড—রুমে ঢুকলে তবেই বিদ্যুৎ চালু হবে এবং সেফ লকার খোলা যাবে।',
          whyNeed: 'Client সাইডে কোনো সিক্রেট API কী ফাঁস না করে ব্যাকএন্ড লেভেলের সর্বোচ্চ নিরাপত্তা দিতে।'
        },
        mentorNote: 'Next.js 14 ও 15 এ কোনো পাবলিক REST API এন্ডপয়েন্ট না বানিয়েই সরাসরি `"use server"` ডিরেক্টিভ লিখে ডাটাবেস ক্রুড (CRUD) অপারেশন সম্পন্ন করা যায়। নিচে লাইভ সিমুলেটরে Middleware সিকিউরিটি ও Server Actions এর ক্যাশ রিভ্যালিডেশন ফ্লো টেস্ট করো!',
        target: 'Next.js Server Actions, Prisma ORM দিয়ে ডাটাবেস Mutation, এবং `revalidatePath()` এর মাধ্যমে ইনস্ট্যান্ট ক্যাশ রিফ্রেশ।',
        problemVsSolution: {
          problem: 'আগে ফর্ম সাবমিট করার জন্য আলাদা API Route (`/api/products`), আলাদা fetch হ্যান্ডলার, এবং আলাদা State লিখতে হতো।',
          solution: 'Server Actions দিয়ে ফর্ম অ্যাকশনে সরাসরি Server Function বসিয়ে দেওয়া যায় এবং ডাটাবেস আপডেট শেষে ১ লাইনে `revalidatePath()` দিয়ে ক্যাশ ফ্রেশ হয়ে যায়!'
        },
        sections: [
          {
            heading: 'Server Actions এর সহজ কর্মপদ্ধতি',
            body: 'একটি Function এর ভেতরে `"use server"` লিখলে Next.js ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে একটি সুরক্ষিত RPC এন্ডপয়েন্ট তৈরি করে নেয়। ফর্ম সাবমিট হলে Browser সরাসরি সেই Server Functionটি কল করে, ডাটাবেস আপডেট করে এবং `revalidatePath("/dashboard")` কল করে Client এর ক্যাশ স্বয়ংক্রিয়ভাবে ফ্রেশ করে দেয়।'
          }
        ],
        codeSnippet: `// app/actions/productActions.js - ['use server' ডিরেক্টিভ]
'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createProductAction(formData) {
  const title = formData.get('title');
  const price = parseFloat(formData.get('price'));

  if (!title || price <= 0) {
    return { success: false, error: 'সঠিক শিরোনাম ও মূল্য দিন' };
  }

  // সরাসরি ডাটাবেস ইনসার্ট!
  await prisma.product.create({
    data: { title, price }
  });

  // ক্যাশ রিভ্যালিডেশন
  revalidatePath('/products');
  return { success: true };
}

// app/products/NewProductForm.jsx - [Client Component]
'use client';
import { createProductAction } from '@/app/actions/productActions';

export function NewProductForm() {
  return (
    <form action={createProductAction} className="p-4 bg-slate-900 rounded-xl space-y-3 max-w-sm">
      <input name="title" placeholder="প্রোডাক্ট নাম" required className="w-full bg-slate-950 p-2 text-xs rounded border border-slate-700 text-white" />
      <input name="price" type="number" placeholder="মূল্য" required className="w-full bg-slate-950 p-2 text-xs rounded border border-slate-700 text-white" />
      <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold py-2 rounded">
        Server অ্যাকশন রান করুন
      </button>
    </form>
  );
}`,
        pitfall: 'Server অ্যাকশন Client থেকে কল হলেও মনে রাখবেন এটি একটি পাবলিকলি অ্যাক্সেসিবল এন্ডপয়েন্ট। তাই Function এর ভেতরে সর্বদা ইউজার সেশন ও পারমিশন ভ্যালিডেট করতে হবে।',
        interviewQ: 'প্রশ্ন: Next.js এ `revalidatePath` এবং `revalidateTag` এর মধ্যে পার্থক্য কি?\nউত্তর: `revalidatePath` একটি নির্দিষ্ট URL পাথের (যেমন `/products`) সমস্ত ক্যাশড ডেটা বাতিল করে। আর `revalidateTag` একটি কাস্টম ট্যাগ (যেমন `tag: "collection-items"`) যুক্ত সব কুয়েরির ক্যাশ একসাথে ইনভ্যালিডেট করে।'
      }
    },
    {
      id: 'mod8-seo-optimization',
      title: 'SEO Concept, Metadata API & Core Web Vitals',
      moduleTitle: 'Module 8: Next.js',
      keywords: 'seo metadata api opengraph dynamic sitemap robots schema markup core web vitals lcp cls',
      content: {
        easyBreakdown: {
          oneLiner: 'ডায়নামিক মেটাডাটা, OpenGraph সোশ্যাল ইমেজ এবং সাইটম্যাপ জেনারেশন দিয়ে ১০০/১০০ SEO স্কোর।',
          analogy: 'দোকানের আকর্ষণীয় নিয়ন সাইনবোর্ড—যা দেখে দূর থেকেও মানুষ ও সার্চ ইঞ্জিন বট দোকানে ছুটে আসে।',
          whyNeed: 'ফেসবুক/টুইটারে লিংক শেয়ার করলে সুন্দর কার্ড দেখানো এবং অর্গানিক গুগল ট্রাফিক বাড়াতে।'
        },
        mentorNote: 'গুগল সার্চে যদি আপনার ওয়েবসাইট ১ নম্বরে র‍্যাঙ্ক না করে, তবে কোটি টাকার ওয়েবসাইট বানিয়েও লাভ নেই। Next.js বিশ্বের এক নম্বর এসইও ফ্রেন্ডলি ফ্রেমওয়ার্ক। চলো ডায়নামিক মেটাডাটা, ওপেন গ্রাফ (OG) ইমেজ এবং সাইটম্যাপ জেনারেশন শিখে নিই।',
        target: 'generateMetadata API, Open Graph সোশ্যাল কার্ড, dynamic sitemap.xml, robots.txt এবং Core Web Vitals অপ্টিমাইজেশন।',
        problemVsSolution: {
          problem: 'চিরাচরিত SPA তে গুগল বট কেবল ফাঁকা `<div id="root">` পেত, ফলে এসইও ইনডেক্সিংয়ে সাইট পিছিয়ে পড়ত।',
          solution: 'Next.js Server এ ফুল মেটা ট্যাগ ও ওজি ইমেজ রেডি করে সার্চ ইঞ্জিনের হাতে তুলে দেয়, ফলে নিখুঁত ১০/১০ এসইও স্কোর অর্জিত হয়।'
        },
        sections: [
          {
            heading: 'Next.js Metadata API',
            body: 'পেজের শিরোনাম, বিবরণ, এবং ফেসবুক/টুইটারে লিংক শেয়ার করার চমৎকার প্রিভিউ কার্ড (Open Graph) তৈরি করতে Next.js এর বিল্ট-ইন Metadata API ব্যবহার করা হয়। ডায়নামিক আর্টিকেলের জন্য `generateMetadata()` Function দিয়ে ব্যাকএন্ড থেকে ডেটা এনে স্বয়ংক্রিয়ভাবে মেটা ট্যাগ বসানো যায়।'
          }
        ],
        codeSnippet: `// app/blog/[slug]/page.jsx
import prisma from '@/lib/prisma';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return { title: 'পোস্ট খুঁজে পাওয়া যায়নি' };
  }

  return {
    title: \`\${post.title} | টেক ডিরেক্টরি\`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: \`https://mytechsite.com/blog/\${slug}\`,
      images: [{ url: post.coverImage || '/default-og.jpg' }]
    }
  };
}`,
        pitfall: 'কখনোই Client Component এ (`"use client"`) `generateMetadata` লিখবেন না! মেটাডাটা শুধুমাত্র Server Component এই এক্সপোর্ট করা যায় কারণ Browser বট আসার আগেই Server হেডার প্রস্তুত থাকতে হয়।',
        interviewQ: 'প্রশ্ন: Google Core Web Vitals এর ৩টি প্রধান মেট্রিক কি কি?\nউত্তর: ১. LCP (Largest Contentful Paint): সবচেয়ে বড় এলিমেন্ট লোড হওয়ার স্পিড। ২. CLS (Cumulative Layout Shift): পেজ লোডের সময় লেআউট জাম্পিং। ৩. INP (Interaction to Next Paint): ইউজার ক্লিক করার পর Browser এর রেসপন্সিভনেস।'
      }
    }
  ]
};
