export const module9 = {
  id: 'mod9',
  title: 'Module 9: AI Integration (Generative AI & Chatbots)',
  nameBangla: 'মডিউল ৯: এআই ইন্টিগ্রেশন (টেক্সট জেনারেশন ও চ্যাটবট)',
  badge: 'Module 9',
  topics: [
    {
      id: 'mod9-text-generation',
      title: 'Text Generation & Streaming LLM Integration',
      moduleTitle: 'Module 9: AI & Chatbots',
      keywords: 'text generation ai llm gemini openai vercel ai sdk streaming readablestream tokens',
      content: {
        easyBreakdown: {
          oneLiner: 'Vercel AI SDK দিয়ে ChatGPT / Gemini এর মতো রিয়েল-টাইম টোকেন স্ট্রিমিং ফ্রন্টএন্ডে আনা।',
          analogy: 'টেলিপ্রম্পটার—পুরো প্যারাগ্রাফ একসাথে না এসে কথা বলার মতো একটা একটা শব্দ স্ক্রিনে ভেসে ওঠা।',
          whyNeed: 'ইউজার যাতে এআই রেসপন্সের জন্য ৩০ সেকেন্ড অপেক্ষা না করে প্রথম শব্দ থেকেই পড়তে পারে।'
        },
        mentorNote: 'আজকের আধুনিক ফ্রন্টএন্ড ডেভেলপারদের সবচেয়ে আকর্ষণীয় স্কিল হলো ওয়েব অ্যাপ্লিকেশনে কৃত্রিম বুদ্ধিমত্তা (AI) যুক্ত করা! পুরো টেক্সট তৈরি হওয়া পর্যন্ত ইউজারকে ২০ সেকেন্ড অপেক্ষা না করিয়ে, ChatGPT বা Gemini এর মতো টোকেন-বাই-টোকেন স্ট্রিমিং কিভাবে করতে হয় চলো দেখি।',
        target: 'Large Language Model (LLM) API কল, Vercel AI SDK, ReadableStream, এবং Server সাইড সিক্রেট কি ম্যানেজমেন্ট।',
        problemVsSolution: {
          problem: 'এআই মডেল পুরো বড় প্যারাগ্রাফ তৈরি করতে ১৫-২০ সেকেন্ড সময় নিতে পারে। সাধারণ JSON রেসপন্স পাঠালে ইউজার ফাঁকা স্ক্রিন দেখে অ্যাপ হ্যাং হয়েছে ভেবে বন্ধ করে দেবে।',
          solution: '`ReadableStream` দিয়ে Server প্রতিটা শব্দ জেনারেট হওয়ার সাথে সাথে মিলি-সেকেন্ডে Client এ পাঠিয়ে ChatGPT এর মতো জীবন্ত লাইভ টাইপিং ফ্লো দেয়।'
        },
        sections: [
          {
            heading: 'AI Integration এর মূল স্থাপত্য',
            body: 'কখনোই Client সাইড থেকে সরাসরি OpenAI বা Gemini এর API Key কল করবেন না! এটি Browser এর নেটওয়ার্ক ট্যাবে ফাঁস হয়ে যাবে। সর্বদা Next.js এর সুরক্ষিত Route Handler (`app/api/chat/route.ts`) থেকে এআই মডেল কল করতে হবে।'
          }
        ],
        codeSnippet: `// app/api/chat/route.js - [Next.js Route Handler]
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const { prompt } = await req.json();

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContentStream(prompt);

  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of result.stream) {
        const text = chunk.text();
        controller.enqueue(encoder.encode(text));
      }
      controller.close();
    }
  });

  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked'
    }
  });
}`,
        pitfall: 'এআই এপিআই কি কখনোই `.env` ফাইলে `NEXT_PUBLIC_` প্রিফিক্স দিয়ে লিখবেন না! `NEXT_PUBLIC_` দিলে Next.js সেই ভ্যারিয়েবল Browser এর পাবলিক বান্ডিলে এক্সপোজ করে দেয়।',
        interviewQ: 'প্রশ্ন: Vercel AI SDK এর `useChat` এবং `useCompletion` এর মধ্যে পার্থক্য কি?\nউত্তর: `useCompletion` শুধুমাত্র একটি সিঙ্গেল প্রম্পট পাঠিয়ে টেক্সট জেনারেট করে। অন্যদিকে `useChat` স্বয়ংক্রিয়ভাবে পুরো চ্যাট হিস্ট্রি (`messages` Array: user, assistant, system) ম্যানেজ করে এবং মাল্টি-টার্ন কনভারসেশনাল চ্যাটবট তৈরির সমস্ত হ্যান্ডশেক নিজে পরিচালনা করে।'
      }
    },
    {
      id: 'mod9-chatbots',
      title: 'Building Interactive AI Chatbots with Streaming UI',
      moduleTitle: 'Module 9: AI & Chatbots',
      hasVisualizer: 'ai-chatbot',
      keywords: 'chatbot ai assistant streaming markdown code syntax highlight conversational history interactive simulator',
      content: {
        easyBreakdown: {
          oneLiner: 'useChat Hook দিয়ে মাল্টি-টার্ন এআই চ্যাটবট, হিস্ট্রি পারসিস্টেন্স এবং মেমরি বাফার তৈরি করা।',
          analogy: 'বুদ্ধিমান ভার্চুয়াল পার্সোনাল অ্যাসিস্ট্যান্ট—যে আগের কথোপকথন মনে রেখে প্রতিটি প্রশ্নের বুদ্ধিদীপ্ত উত্তর দেয়।',
          whyNeed: 'গ্রাহক সেবা স্বয়ংক্রিয় করতে এবং যেকোনো অ্যাপ্লিকেশনে আধুনিক এআই কো-পাইলট অভিজ্ঞতা এনে দিতে।'
        },
        mentorNote: 'একটি নিখুঁত চ্যাটবট বানাতে হলে ইউজার মেসেজ হিস্ট্রি, অটো-স্ক্রলিং, কোড সিনট্যাক্স হাইলাইটিং এবং সুন্দর টাইপিং ইন্ডিকেটর থাকতে হয়। নিচে আমি একটি সম্পূর্ণ লাইভ AI চ্যাটবট সিমুলেটর বানিয়ে রেখেছি—সরাসরি বাংলায় প্রশ্ন পাঠিয়ে টেস্ট করে দেখো!',
        target: 'AI Chatbot UI আর্কিটেকচার, অটোমেটিক স্ক্রলিং (`useRef`), স্ট্রিমিং State হ্যান্ডলিং এবং মার্কডাউন Rendering শেখা।',
        problemVsSolution: {
          problem: 'এআই যখন লম্বা উত্তর দেয়, স্ক্রিন যদি নিচে নিজে স্ক্রল না করে তবে ইউজারকে বারবার হাত দিয়ে মাউস হুইল ঘুরিয়ে নিচে নামতে হয়।',
          solution: '`useRef` ও `useEffect` দিয়ে প্রতিটি নতুন মেসেজ বা টোকেন আসার সাথে সাথে স্বয়ংক্রিয় স্মুথ স্ক্রলিং বজায় রাখা হয়।'
        },
        sections: [
          {
            heading: 'চ্যাটবটের ৩টি মূল ইউএক্স (UX) স্তম্ভ',
            body: '১. Auto-scroll to Bottom: এআই এর নতুন টোকেন টাইপ হওয়ার সাথে সাথে চ্যাট উইন্ডো যেন নিজে নিচে স্ক্রল করে।\n২. Optimistic User Message: ইউজার সেন্ড বাটনে ক্লিক করা মাত্রই ইনপুট খালি করে ইউজারের মেসেজ স্ক্রিনে ঝুলিয়ে দিতে হবে।\n৩. Markdown ও কোড হাইলাইটিং: এআই এর দেওয়া কোড ব্লকগুলো সুন্দর ফরম্যাটে কপি বাটনের সাথে Render করা।'
          }
        ],
        codeSnippet: `import React, { useState, useRef, useEffect } from 'react';

export function ModernAiChatbot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'নমস্কার! আমি আপনার এআই React মেন্টর। কি সাহায্য করতে পারি?' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[400px] bg-slate-900 border border-slate-800 rounded-xl p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m, idx) => (
          <div key={idx} className={\`p-2.5 rounded-lg text-xs \${m.role === 'user' ? 'bg-cyan-600 text-white ml-auto' : 'bg-slate-950 text-slate-200'}\`}>
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 pt-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="প্রশ্ন লিখুন..." className="flex-1 bg-slate-950 p-2 text-xs rounded border border-slate-700 text-white" />
        <button type="submit" className="bg-cyan-600 px-3 py-1 text-xs text-white rounded font-bold">পাঠান</button>
      </form>
    </div>
  );
}`,
        pitfall: 'চ্যাটবটের মেসেজ হিস্ট্রি আনলিমিটেড পাঠালে টোকেন লিমিট শেষ হয়ে এআই API এর খরচ আকাশচুম্বী হবে। প্রডাকশনে সর্বদা শেষ ৫-১০টি প্রাসঙ্গিক মেসেজ হিস্ট্রি পাঠাতে হয় (Sliding Window Context Memory)।',
        interviewQ: 'প্রশ্ন: এআই রেসপন্স স্ট্রিমিং করার সময় Server-Sent Events (SSE) বনাম WebSockets এর মধ্যে কোনটি বেছে নেবেন?\nউত্তর: এআই চ্যাটবটের জন্য Server-Sent Events (SSE) বা HTTP Streaming সেরা, কারণ যোগাযোগটি একমুখী (Server থেকে Client এ টোকেন আসা)। WebSockets শুধুমাত্র তখন দরকার যখন ইউজার এবং Server উভয় দিক থেকেই হাইপার-ফাস্ট দ্বিমুখী রিয়েলটাইম মেসেজিং প্রয়োজন।'
      }
    }
  ]
};
