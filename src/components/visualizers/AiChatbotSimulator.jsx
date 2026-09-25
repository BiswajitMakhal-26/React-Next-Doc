import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Sparkles, RefreshCcw, Code2 } from 'lucide-react';

export default function AiChatbotSimulator() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'হ্যালো! আমি তোমার পার্সোনাল React ও নেক্সটজেএস এআই মেন্টর। React এর যেকোনো ডাউট বা কনসেপ্ট আমাকে বাংলায় জিজ্ঞেস করতে পারো! নিচে কিছু কমন প্রশ্নের বাটন আছে অথবা নিজে টাইপ করো।'
    }
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isStreaming]);

  const presetResponses = {
    'Virtual DOM কেন fast?': 
      'Virtual DOM সরাসরি Browser এর DOM এ হাত দেয় না। Browser এর Real DOM পরিবর্তন করলে পুরো লেআউট রি-ক্যালকুলেট (Reflow) ও রিপেইন্ট (Repaint) করতে হয়, যা প্রসেসরে প্রচুর লোড ফেলে।\n\nReact মেমরিতে হালকা JavaScript Object হিসেবে একটি ট্রি রাখে। State পরিবর্তন হলে নতুন ও পুরনো ট্রির মধ্যে "Diffing Algorithm" চালিয়ে শুধুমাত্র সুনির্দিষ্ট পরিবর্তনটি Browser ডমে "Batch Update" করে। ফলে ফ্রেম রেট ৬০ FPS এ স্মুথ থাকে!',
    'useEffect এ dependency array না দিলে কি হয়?': 
      'খুব গুরুত্বপূর্ণ ইন্টারভিউ প্রশ্ন! 🚨\n\nযদি useEffect এ দ্বিতীয় আর্গুমেন্ট (dependency array) একদম না দাও, তবে Component যতবার Render বা Re-render হবে, ততবার সেই এফেক্ট চলবে!\n\nযদি সেই এফেক্টের ভেতরে কোনো setState() কল থাকে, তবে:\nsetState() -> Re-render -> আবার useEffect চলবে -> আবার setState() -> ইনফাইনাইট লুপ (Infinite Loop Crash)! 💥',
    'SSR vs SSG পার্থক্য কি?': 
      'সহজ উপমা দিয়ে মনে রাখো:\n\n🍔 **SSG (Static Site Generation):** যেমন আগে থেকেই তৈরি করে রাখা প্যাকেটজাত বিস্কুট। বিল্ড টাইমে একবারই তৈরি হয়ে CDN এ থাকে, রিকোয়েস্ট করলেই চোখের পলকে ডেলিভারি!\n\n🍲 **SSR (Server-Side Rendering):** রেস্তোরাঁয় অর্ডার করার পর লাইভ রান্না হওয়া খাবার। প্রতিবার ইউজার রিকোয়েস্ট করলে Server ডাটাবেজ থেকে লাইভ ডেটা টেনে নতুন HTML বানিয়ে Client এ পাঠায়!',
    'Next.js এ Server Actions কি?': 
      'Server Actions হলো Next.js 14/15 এর এক যুগান্তকারী ফিচার! `"use server"` ডিরেক্টিভ লিখে তুমি Client ফর্ম থেকে সরাসরি Server-সাইড Function কল করতে পারো। কোনো আলাদা API Route (`/api/items`) তৈরি করার ঝামেলা নেই, এবং টাইপ-সেফ ডাটাবেস Mutation করা যায়!'
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim() || isStreaming) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsStreaming(true);

    // Prepare AI answer
    const answer = presetResponses[query] || 
      `তুমি জানতে চেয়েছো: "${query}"। \n\nইন্ডাস্ট্রি কনসেপ্ট অনুযায়ী এটি অত্যন্ত গুরুত্বপূর্ণ একটি বিষয়। React ও নেক্সটজেএস ইকোসিস্টেমে পারফরম্যান্স, ক্লিন কোড এবং স্কেলেবিলিটি বজায় রাখতে এই প্যাটার্নটি ব্যবহার করা হয়। তোমার কোডবেসে এটি প্রয়োগ করার সময় মেমরি লিক এবং অপ্রয়োজনীয় Re-render থেকে সতর্ক থাকবে!`;

    // Stream token by token
    let currentIdx = 0;
    const aiMsgId = Date.now() + 1;
    
    setMessages(prev => [...prev, { id: aiMsgId, sender: 'ai', text: '' }]);

    const interval = setInterval(() => {
      currentIdx += 3; // stream 3 chars at a time
      if (currentIdx <= answer.length) {
        setMessages(prev => 
          prev.map(m => m.id === aiMsgId ? { ...m, text: answer.slice(0, currentIdx) } : m)
        );
      } else {
        setMessages(prev => 
          prev.map(m => m.id === aiMsgId ? { ...m, text: answer } : m)
        );
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 25);
  };

  return (
    <div className="bg-slate-900 border border-fuchsia-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-fuchsia-500/20 text-fuchsia-400 rounded-lg">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              লাইভ AI অ্যাসিস্ট্যান্ট ও স্ট্রিমিং সিমুলেটর (Module 9)
              <span className="text-xs bg-fuchsia-950 text-fuchsia-400 border border-fuchsia-800 px-2 py-0.5 rounded-full font-mono">Stream Response</span>
            </h4>
            <p className="text-xs text-slate-400">Next.js ও Vercel AI SDK এর মতো টোকেন-বাই-টোকেন স্ট্রিমিং এর লাইভ ডেমো</p>
          </div>
        </div>

        <button
          onClick={() => setMessages([{ id: 1, sender: 'ai', text: 'হ্যালো! চ্যাট হিস্ট্রি রিসেট করা হয়েছে। নতুন প্রশ্ন করতে পারো!' }])}
          className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2.5 py-1.5 rounded-lg transition"
        >
          <RefreshCcw className="w-3.5 h-3.5" /> ক্লিয়ার
        </button>
      </div>

      {/* Preset quick questions */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {Object.keys(presetResponses).map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            disabled={isStreaming}
            className="text-[11px] bg-slate-950 hover:bg-slate-800 text-fuchsia-300 border border-fuchsia-900/50 px-2.5 py-1 rounded-full transition disabled:opacity-50"
          >
            💬 {q}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 h-64 overflow-y-auto space-y-3 mb-3">
        {messages.map(m => (
          <div
            key={m.id}
            className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-full bg-fuchsia-600/30 text-fuchsia-300 flex items-center justify-center shrink-0 border border-fuchsia-500/40">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-xl p-3 text-xs leading-relaxed font-bengali ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white rounded-br-none shadow-md'
                  : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none whitespace-pre-line'
              }`}
            >
              {m.text}
              {isStreaming && m.sender === 'ai' && m.id === messages[messages.length - 1].id && (
                <span className="inline-block w-1.5 h-3 bg-fuchsia-400 ml-1 animate-pulse"></span>
              )}
            </div>
            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          placeholder="React বা নেক্সটজেএস নিয়ে যেকোনো প্রশ্ন লিখুন..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isStreaming}
          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-fuchsia-500"
        />
        <button
          type="submit"
          disabled={isStreaming || !input.trim()}
          className="bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition shadow"
        >
          <Send className="w-3.5 h-3.5" /> পাঠান
        </button>
      </form>
    </div>
  );
}
