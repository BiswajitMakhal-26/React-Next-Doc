export const module6 = {
  id: 'mod6',
  title: 'Module 6: Modern State Management with Zustand',
  nameBangla: 'মডিউল ৬: আধুনিক গ্লোবাল State ও জুস্ট্যান্ড (Zustand)',
  badge: 'Module 6',
  topics: [
    {
      id: 'mod6-zustand-concept',
      title: 'Concept of Zustand & Why It Is Winning',
      moduleTitle: 'Module 6: Zustand',
      hasVisualizer: 'state-mgmt',
      keywords: 'zustand modern state management minimal boilerplate hook based selector transient updates',
      content: {
        easyBreakdown: {
          oneLiner: 'Zustand হলো কোনো Provider ছাড়া Hook-ভিত্তিক পৃথিবীর সবচেয়ে হালকা এবং দ্রুতগতির গ্লোবাল State ম্যানেজার।',
          analogy: 'পকেট সাইজ সুইস আর্মি ছুরি—ভারী টুলবক্স না বয়েও নিমেষে সব কাজ করে ফেলা যায়।',
          whyNeed: 'Context API এর অতিরিক্ত অপ্রয়োজনীয় Re-rendering এবং Redux এর ভারী বয়লারপ্লেট উভয় থেকেই মুক্তি পেতে।'
        },
        mentorNote: 'জার্মান শব্দ "Zustand" (উচ্চারণ জু-স্ট্যান্ড) এর অর্থ State। এটি আধুনিক React কমিউনিটির ভালোবাসার নাম! কোনো রিডিউসার নেই, কোনো প্রোভাইডার দিয়ে অ্যাপ র‍্যাপ করার ঝামেলা নেই, মাত্র ১KB সাইজ এবং সরাসরি Hook আকারে যেকোনো ফাইল থেকে কল করা যায়। নিচে লাইভ State কম্প্যারিজন চার্ট দেখে নাও!',
        target: 'Zustand এর আর্কিটেকচার, create() মেথড, `set` ও `get` Function, এবং সিলেক্টর সাবস্ক্রিপশন আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'Redux এ অতিরিক্ত ফাইল ও বয়লারপ্লেট, আর Context API এ হাই-ফ্রিকোয়েন্সি State এ অপ্রয়োজনীয় Re-render এর ঝুঁকি।',
          solution: 'Zustand কোনো প্রোভাইডার ছাড়াই সরাসরি Hook আকারে কাজ করে এবং ফাইন-গ্রেইন্ড সিলেক্টর দিয়ে Re-render সর্বোচ্চ অপ্টিমাইজড রাখে!'
        },
        sections: [
          {
            heading: 'Zustand কেন Redux ও Context এর চেয়ে এগিয়ে?',
            body: '১. No Context Provider: Context API এর মতো পুরো রুট Component কে `<Provider>` দিয়ে ঘিরতে হয় না।\n২. Fine-grained Selector: আপনি স্টোরের যেটুকু সিলেক্ট করবেন (যেমন `state => state.user`), শুধু সেটুকুর পরিবর্তন হলেই Component Re-render হবে।\n৩. মাত্র ১.১ কিলোবাইট বান্ডিল সাইজ!'
          }
        ],
        codeSnippet: `import { create } from 'zustand';

// 1. এক ফাইলে স্টোর তৈরি (State এবং অ্যাকশন একসাথে!)
export const useAuthStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,

  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false })
}));

// 2. যেকোনো Component এ ব্যবহার (কোনো প্রোভাইডার ছাড়া!)
export function UserProfileBar() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (!user) return <span className="text-xs text-slate-500">লগইন করুন</span>;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-emerald-400 font-mono">স্বাগতম, {user.name}</span>
      <button onClick={logout} className="text-xs bg-rose-600/30 text-rose-300 px-2 py-0.5 rounded">
        লগআউট
      </button>
    </div>
  );
}`,
        pitfall: 'State সিলেক্ট করার সময় পুরো স্টোরটি Object হিসেবে বের করলে (যেমন `const { user, login } = useAuthStore()`), স্টোরের অন্য যেকোনো কিছু বদলালেও Re-render ট্রিগার হতে পারে। সবসময় স্পেসিফিক সিলেক্টর Function ব্যবহার করবেন।',
        interviewQ: 'প্রশ্ন: Zustand এ কীভাবে স্টোরের বাইরে (React Component এর বাইরে যেমন সাধারণ .js ফাইলে বা Axios ইন্টারসেপ্টরে) State রিড বা আপডেট করা যায়?\nউত্তর: Zustand স্টোরে নেটিভ মেথড থাকে: `useStore.getState()` দিয়ে যেকোনো ভ্যানিলা জেএস ফাইলে সরাসরি কারেন্ট State পাওয়া যায়, এবং `useStore.setState({ count: 10 })` দিয়ে React Component এর বাইরে থেকেও State আপডেট করা যায়!'
      }
    },
    {
      id: 'mod6-blog-project',
      title: 'Full Blog Project using Zustand (with Local Persistence)',
      moduleTitle: 'Module 6: Zustand',
      hasVisualizer: 'zustand-blog',
      keywords: 'blog project zustand persist middleware crud search filter category interactive live app',
      content: {
        easyBreakdown: {
          oneLiner: 'Zustand দিয়ে সম্পূর্ণ ব্লগে ক্রাড অপারেশন, লোকালস্টোরেজ পারসিস্টেন্স এবং সিলেক্টিভ Re-rendering আর্কিটেকচার।',
          analogy: 'স্মার্ট ডায়রি—যা লিখবেন স্বয়ংক্রিয়ভাবে সেভ হয়ে থাকবে, পাতা ওল্টালেও কোনো লেখা মুছবে না।',
          whyNeed: 'প্রোডাকশন-লেভেলের প্রজেক্টে কীভাবে State স্টোর ডিজাইন এবং অপ্টিমাইজ করতে হয় তা হাতে-কলমে শিখতে।'
        },
        mentorNote: 'চলো Zustand দিয়ে একটি সম্পূর্ণ ফুল-ফিচার্ড Blog Application বানাই! এতে থাকবে পোস্ট তৈরি, ডিলিট, বুকমার্ক টগল, ক্যাটাগরি ফিল্টারিং, সার্চ এবং `persist` মিডলওয়্যার দিয়ে Browser এর LocalStorage এ ডেটা অটো-সেভ। নিচে লাইভ ইন্টারেক্টিভ অ্যাপটি চালিয়ে পরীক্ষা করো!',
        target: 'CRUD অপারেশন, zustand/middleware এর `persist` দিয়ে অটো লোকাল স্টোরেজ সিঙ্ক এবং সার্চ/ফিল্টার লজিক শেখা।',
        problemVsSolution: {
          problem: 'ইউজার পেজ রিফ্রেশ করলে Browser মেমরি থেকে সাধারণ State মুছে যায়।',
          solution: 'Zustand এর `persist` মিডলওয়্যার স্বয়ংক্রিয়ভাবে Browser এর LocalStorage এ State সিঙ্ক রাখে, ফলে রিফ্রেশ দিলেও ডেটা অক্ষত থাকে।'
        },
        sections: [
          {
            heading: 'Zustand Persist Middleware',
            body: 'ওয়েবপেজ রিলোড দিলে যেন ইউজারের ডেটা হারিয়ে না যায়, তার জন্য Zustand এর নিজস্ব `persist` মিডলওয়্যার রয়েছে। মাত্র ৩ লাইনের কনফিগ দিয়ে সমস্ত State Browser এর LocalStorage এ সিঙ্ক হয়ে যায়।'
          }
        ],
        codeSnippet: `import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useBlogStore = create(
  persist(
    (set, get) => ({
      posts: [
        { id: 1, title: 'Virtual DOM এর পেছনের গোপন রহস্য', category: 'React', bookmarked: true },
        { id: 2, title: 'Zustand কেন রেডুক্সের চেয়ে জনপ্রিয়?', category: 'State', bookmarked: false }
      ],
      searchQuery: '',
      activeCategory: 'All',

      addPost: (newPost) => set((state) => ({
        posts: [{ id: Date.now(), ...newPost, bookmarked: false }, ...state.posts]
      })),

      deletePost: (id) => set((state) => ({
        posts: state.posts.filter(p => p.id !== id)
      })),

      toggleBookmark: (id) => set((state) => ({
        posts: state.posts.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p)
      }))
    }),
    {
      name: 'tech-blog-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);`,
        pitfall: 'Next.js এর মতো SSR Frameworkে `persist` ব্যবহার করার সময় Hydration Mismatch হতে পারে, কারণ Server এর কাছে লোকাল স্টোরেজের ডেটা থাকে না। এর সমাধানের জন্য Client মাউন্ট হওয়ার পর State রিড করতে হয়।',
        interviewQ: 'প্রশ্ন: Zustand এ কীভাবে অ্যাসিঙ্ক্রোনাস অ্যাকশন হ্যান্ডেল করা হয়?\nউত্তর: Redux এর মতো কোনো এক্সটার্নাল Thunk মিডলওয়্যার লাগে না! Zustand এ অ্যাকশন Functionটি সরাসরি `async` ঘোষণা করে ভেতরে `await fetch(...)` লিখে প্রাপ্ত ডেটা `set({ data })` করে দিলেই যথেষ্ট।'
      }
    }
  ]
};
