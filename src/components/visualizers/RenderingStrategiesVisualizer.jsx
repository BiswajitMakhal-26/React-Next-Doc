import React, { useState } from 'react';
import { Server, Globe, Zap, Database, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function RenderingStrategiesVisualizer() {
  const [selectedStrategy, setSelectedStrategy] = useState('ssr');

  const strategies = {
    csr: {
      name: 'CSR (Client-Side Rendering)',
      tagline: 'Browser এ JavaScript ডাউনলোড হয়ে সব Render হয়',
      serverWork: 'মিনিমাল (শুধুমাত্র ফাঁকা HTML ও JS বান্ডিল পাঠানো)',
      buildTime: 'তাত্ক্ষণিক (Static hosting)',
      ttfb: 'খুব দ্রুত (Fastest TTFB)',
      fcp: 'ধীরগতি (Large JS ডাউনলোড ও রান হওয়া পর্যন্ত ইউজার সাদা স্ক্রিন দেখে)',
      seo: 'দুর্বল (Crawlers JS না চালালে কনটেন্ট পায় না)',
      bestFor: 'লগইন-প্রোটেক্টেড ড্যাশবোর্ড, ইন্টারনাল অ্যাডমিন প্যানেল, ক্যানভাস গেম',
      timeline: [
        { label: '১. রিকোয়েস্ট পাঠানো', by: 'Browser', color: 'bg-blue-500' },
        { label: '২. খালি <div id="root"> HTML ও JS ফাইল রিটার্ন', by: 'Server', color: 'bg-emerald-500' },
        { label: '৩. Browser এ মেগা JS বান্ডিল ডাউনলোড ও পার্সিং', by: 'Browser', color: 'bg-amber-500' },
        { label: '৪. React চলে Client-side API কল করে ডেটা এনে DOM সাজায়', by: 'Browser', color: 'bg-cyan-500' }
      ]
    },
    ssr: {
      name: 'SSR (Server-Side Rendering)',
      tagline: 'প্রতিটি রিকোয়েস্টে Server লাইভ HTML জেনারেট করে পাঠায়',
      serverWork: 'বেশি (প্রতিটি রিকোয়েস্টে DB কুয়েরি ও Component এক্সিকিউট হয়)',
      buildTime: 'তাত্ক্ষণিক (Build time এ পেজ তৈরি হয় না)',
      ttfb: 'মাঝারি (Server এর ডেটা ফেচিং শেষ হওয়ার পর প্রথম বাইট পাঠানো হয়)',
      fcp: 'খুব দ্রুত (ইউজার তাৎক্ষণিকভাবে সম্পূর্ণ ডেটাপূর্ণ HTML দেখতে পায়)',
      seo: 'চমৎকার (১০/১০ - সার্চ ইঞ্জিন বট সরাসরি পুরো কনটেন্ট পায়)',
      bestFor: 'ব্যক্তিগতকৃত ফিড (Facebook/Twitter), লাইভ স্টক মার্কেট, ডায়নামিক ই-কমার্স প্রাইসিং',
      timeline: [
        { label: '১. রিকোয়েস্ট Server এ পৌঁছালো', by: 'Browser', color: 'bg-blue-500' },
        { label: '২. Server ডাটাবেস থেকে ডেটা এনে HTML তৈরি করলো', by: 'Server (Node.js)', color: 'bg-purple-500' },
        { label: '৩. Client এ রেডিমেড HTML পৌঁছালো (ইউজার UI দেখলো)', by: 'Browser (FCP)', color: 'bg-emerald-500' },
        { label: '৪. Hydration: JS ডাউনলোড হয়ে বাটনে Event লিসেনার সক্রিয় হলো', by: 'Hydration (TTI)', color: 'bg-cyan-500' }
      ]
    },
    ssg: {
      name: 'SSG (Static Site Generation)',
      tagline: 'বিল্ড টাইমে (npm run build) একবারেই সব HTML তৈরি হয়ে CDN এ ক্যাশ থাকে',
      serverWork: 'শূন্য (রানিং Server এ কোনো ক্যালকুলেশন নেই, CDN থেকে সার্ভ হয়)',
      buildTime: 'বেশি (হাজার হাজার পেজ থাকলে বিল্ড টাইম বাড়ে)',
      ttfb: 'বিশ্বের দ্রুততম (CDN Edge Cache থেকে মিলি-সেকেন্ডে রেসপন্স)',
      fcp: 'অতি দ্রুত (Instant First Contentful Paint)',
      seo: 'নিখুঁত (১০/১০)',
      bestFor: 'ব্লগ সাইট, ডকুমেন্টেশন পোর্টাল, ল্যান্ডিং পেজ, পোর্টফোলিও',
      timeline: [
        { label: '১. বিল্ড টাইমে (CI/CD) পুরো সাইটের সব HTML তৈরি হলো', by: 'Build Time', color: 'bg-slate-600' },
        { label: '২. ফাইলগুলো বিশ্বজুড়ে CDN এজ Server এ আপলোড হলো', by: 'CDN Edge', color: 'bg-purple-500' },
        { label: '৩. ইউজার রিকোয়েস্ট করলেই নিকটস্থ এজ Server থেকে ক্যাশড HTML সার্ভ হলো', by: 'Edge CDN', color: 'bg-emerald-500' },
        { label: '৪. Client Hydrate হয়ে Interactive হলো', by: 'Browser', color: 'bg-cyan-500' }
      ]
    },
    isr: {
      name: 'ISR (Incremental Static Regeneration)',
      tagline: 'SSG এর সুপারপাওয়ার: পুরো সাইট রি-বিল্ড না করে ব্যাকগ্রাউন্ডে নির্দিষ্ট পেজ আপডেট!',
      serverWork: 'খুব কম (revalidate ইন্টারভ্যালের পর প্রথম ভিজিটেই কেবল ব্যাকগ্রাউন্ডে বিল্ড হয়)',
      buildTime: 'কম (শুধুমাত্র টপ পেজগুলো বিল্ড টাইমে তৈরি করলেই চলে)',
      ttfb: 'অতি দ্রুত (CDN ক্যাশ থেকে সার্ভ হয়)',
      fcp: 'অতি দ্রুত',
      seo: 'নিখুঁত (১০/১০)',
      bestFor: 'লাখ লাখ প্রোডাক্টের ই-কমার্স ক্যাটালগ, নিউজ পেপার, রিভিউ ওয়েবসাইট',
      timeline: [
        { label: '১. পূর্বে জেনারেট হওয়া ক্যাশড HTML ইউজারকে সাথে সাথে পাঠানো হলো', by: 'Edge CDN', color: 'bg-emerald-500' },
        { label: '২. revalidate সময় (ধরি ৬০ সেকেন্ড) পার হলে রিকোয়েস্ট এলো', by: 'Stale Check', color: 'bg-amber-500' },
        { label: '৩. ব্যাকগ্রাউন্ড Server এ নিঃশব্দে নতুন ডেটা দিয়ে পেজটি রি-জেনারেট হলো', by: 'Server Worker', color: 'bg-purple-500' },
        { label: '৪. পরবর্তী সকল ইউজার স্বয়ংক্রিয়ভাবে নতুন আপডেট দেখতে পাবে!', by: 'CDN Cache Updated', color: 'bg-cyan-500' }
      ]
    }
  };

  const curr = strategies[selectedStrategy];

  return (
    <div className="bg-slate-900 border border-purple-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              Next.js Rendering Matrix: CSR vs SSR vs SSG vs ISR
              <span className="text-xs bg-purple-950 text-purple-400 border border-purple-800 px-2 py-0.5 rounded-full font-mono">Interactive Matrix</span>
            </h4>
            <p className="text-xs text-slate-400">Server ও Browser এর কাজের ভাগাভাগি এবং পারফরম্যান্স তুলনা</p>
          </div>
        </div>

        {/* Strategy Switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          {Object.keys(strategies).map(key => (
            <button
              key={key}
              onClick={() => setSelectedStrategy(key)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono uppercase font-bold transition ${
                selectedStrategy === key
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h5 className="text-base font-bold text-purple-300 font-bengali">{curr.name}</h5>
        <p className="text-xs text-slate-400 font-bengali mt-0.5">{curr.tagline}</p>
      </div>

      {/* Visual Timeline of Request to Render */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
        <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-1.5 font-bengali">
          <Zap className="w-4 h-4 text-amber-400" /> রিকোয়েস্ট থেকে স্ক্রিন পেইন্ট পর্যন্ত লাইভ ফ্লো:
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {curr.timeline.map((item, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400">Step {i + 1}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-purple-300">
                    {item.by}
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-bengali">{item.label}</p>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full mt-3 overflow-hidden">
                <div className={`h-full ${item.color} w-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric Comparison Table */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 text-xs">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[11px] block mb-1">Server ওয়ার্কলোড</span>
          <span className="text-purple-300 font-semibold font-bengali">{curr.serverWork}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[11px] block mb-1">Time to First Byte (TTFB)</span>
          <span className="text-cyan-300 font-semibold font-bengali">{curr.ttfb}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[11px] block mb-1">First Contentful Paint</span>
          <span className="text-emerald-300 font-semibold font-bengali">{curr.fcp}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <span className="text-slate-400 text-[11px] block mb-1">SEO রেটিং</span>
          <span className="text-amber-300 font-semibold font-bengali">{curr.seo}</span>
        </div>
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
          <span className="text-slate-400 text-[11px] block mb-1">কোথায় সেরা?</span>
          <span className="text-slate-200 font-medium font-bengali text-[11px]">{curr.bestFor}</span>
        </div>
      </div>
    </div>
  );
}
