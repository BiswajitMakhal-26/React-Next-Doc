export const module4 = {
  id: 'mod4',
  title: 'Module 4: Context API & Advanced Reducer State',
  nameBangla: 'মডিউল ৪: কনটেক্সট এপিআই ও রিডিউসার State আর্কিটেকচার',
  badge: 'Module 4',
  topics: [
    {
      id: 'mod4-context-api',
      title: 'Context API & useContext Hook',
      moduleTitle: 'Module 4: Context & Reducer',
      keywords: 'context api usecontext provider consumer prop drilling global state custom hook',
      content: {
        easyBreakdown: {
          oneLiner: 'Context API Prop ড্রিলিং ছাড়া পুরো Component ট্রিতে গ্লোবাল ডেটা (Theme, Auth, Language) ছড়িয়ে দেয়।',
          analogy: 'এফএম রেডিও ব্রডকাস্ট—একটি টাওয়ার থেকে গান বাজছে, যার যার টিউন করা আছে সবাই শুনছে।',
          whyNeed: '৫ তলা নিচের কোনো Child এ ডেটা পাঠাতে মাঝের ৩টি Component কে অযথা Props টানাটানি থেকে বাঁচাতে।'
        },
        mentorNote: 'ভাবো তোমার ঠাকুরদার হাতঘড়ি তোমার নাতির কাছে পৌঁছাতে হবে। মাঝে বাবা, কাকা, ভাইকে দিয়ে পাস করাতে হলে তাকে বলে Prop Drilling! Context API হলো সরাসরি কুরিয়ার সার্ভিস—যেকোনো ডিপ Child সরাসরি মাঝের কাউকে বিরক্ত না করে ডেটা পেয়ে যায়।',
        target: 'createContext, Provider প্যাটার্ন, Prop Drilling নিরসন এবং কাস্টম কনটেক্সট Hook (যেমন useAuth) তৈরি করা।',
        problemVsSolution: {
          problem: 'কোনো গ্লোবাল ডেটা (যেমন থিম কালার বা লগইন ইউজার) ১০ লেয়ার ডিপ Child এ পাঠাতে গেলে মাঝের সব নিরীহ Component কে সেই Prop বয়ে নিয়ে যেতে হতো (Prop Drilling)।',
          solution: 'Context API একটি সেন্ট্রাল ডাটা চ্যানেল বানায়, যার ফলে গভীরের যে কোনো Child সরাসরি `useContext()` দিয়ে ডাটা টেনে নিতে পারে।'
        },
        sections: [
          {
            heading: 'কাস্টম কনটেক্সট Hook এর সেরা প্র্যাকটিস',
            body: 'সরাসরি Component এ `useContext(MyContext)` না লিখে একটি কাস্টম Hook (যেমন `useTheme()`) তৈরি করে এক্সপোর্ট করা উচিত। এর ভেতরে কনটেক্সট প্রোভাইডারের বাইরে কল হলে একটি সুন্দর এরর থ্রো করে ডিবাগিং অনেক সহজ করে দেওয়া যায়।'
          }
        ],
        codeSnippet: `import { createContext, useContext, useState } from 'react';

// 1. কনটেক্সট তৈরি
const ThemeContext = createContext(null);

// 2. প্রোভাইডার Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. কাস্টম Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme অবশ্যই ThemeProvider এর সীমানার ভেতরে ব্যবহার করতে হবে!');
  }
  return context;
}

// 4. Child Component এ ব্যবহার
export function DeepChildSettings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between">
      <span className="text-xs text-slate-300">বর্তমান থিম: <strong className="text-cyan-400 font-mono">{theme}</strong></span>
      <button onClick={toggleTheme} className="text-xs bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded">
        থিম পরিবর্তন
      </button>
    </div>
  );
}`,
        pitfall: 'Context এ ঘন ঘন পরিবর্তনশীল State (High-frequency state যেমন মাউস পজিশন বা সেকেন্ডের টাইমার) রাখবেন না! কারণ কনটেক্সটের যেকোনো একটি ভ্যালু বদলালে সেই কনটেক্সটের সাথে যুক্ত সমস্ত কনজিউমার Child Re-render হয়ে যায়।',
        interviewQ: 'প্রশ্ন: Context API এর Re-render সমস্যা কীভাবে এড়ানো যায়?\nউত্তর: ১. কনটেক্সটকে ভাগ (Split Context) করে ফেলা: State এর জন্য একটি কনটেক্সট (`StateContext`) এবং ডিসপ্যাচ বা অ্যাকশন Function এর জন্য আলাদা কনটেক্সট (`DispatchContext`) রাখা। ২. ভ্যালু Objectটিকে `useMemo` দিয়ে মেমোইজ করা।'
      }
    },
    {
      id: 'mod4-usereducer-hook',
      title: 'Concept of useReducer Hook',
      moduleTitle: 'Module 4: Context & Reducer',
      keywords: 'usereducer reducer action dispatch state machine predictable state flux pattern',
      content: {
        easyBreakdown: {
          oneLiner: 'useReducer হলো জটিল State পরিবর্তনের জন্য একটি সেন্ট্রালাইজড ডিসপ্যাচ ও অ্যাকশন কন্ট্রোলার।',
          analogy: 'ব্যাংকের ক্যাশ কাউন্টার—সরাসরি ভল্টে হাত না দিয়ে রসিদ (Action) জমা দিলে ক্যাশিয়ার নিয়ম মেনে ব্যালেন্স আপডেট করে।',
          whyNeed: 'State এর ভেতর যখন একাধিক ইন্টার-ডিপেন্ডেন্ট লজিক থাকে এবং কোডকে প্রিডিক্টেবিলিটি দিতে হয়।'
        },
        mentorNote: 'যখন কোনো Component এ ৫-৬টা useState হয়ে যায় এবং একটা State এর পরিবর্তন অন্য আরেকটা State এর ওপর নির্ভর করে, কোড জটলা পাকিয়ে যায়। useReducer হলো একটি State মেশিন—যেখানে সমস্ত রূপান্তর একটি পিওর রিডিউসার Function এর ভেতর নিয়মতান্ত্রিকভাবে ঘটে।',
        target: 'useReducer, Actions ({ type, payload }), Dispatcher, এবং পিওর রিডিউসার Function আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'শপিং কার্টের মতো জটিল State এ (আইটেম যোগ, আইটেম মোছা, ডিসকাউন্ট, ট্যাক্স) useState ব্যবহার করলে প্রতিটা Function এ কোড ছড়িয়ে ছিটিয়ে থাকে এবং ভুল হওয়ার সম্ভাবনা থাকে।',
          solution: 'useReducer সমস্ত State ট্রানজিশনকে সেন্ট্রাল রিডিউসার Function এর ভেতর একটি প্রিডিক্টেবল State মেশিনের মতো নিয়ন্ত্রণ করে।'
        },
        sections: [
          {
            heading: 'useState vs useReducer',
            body: 'সহজ State এর জন্য `useState` চমৎকার। কিন্তু যখন State এর স্ট্রাকচার জটিল Object বা Array হয় এবং একই অ্যাকশনে একাধিক State ফিল্ড একসাথে আপডেট করতে হয়, তখন `useReducer` সবচেয়ে নির্ভরযোগ্য ও টেস্টেবল আর্কিটেকচার দেয়।'
          }
        ],
        codeSnippet: `import { useReducer } from 'react';

const initialCartState = { items: [], totalAmount: 0 };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = [...state.items, action.payload];
      const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price, 0);
      return { ...state, items: updatedItems, totalAmount: updatedTotal };
    }
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      const updatedTotal = updatedItems.reduce((sum, item) => sum + item.price, 0);
      return { ...state, items: updatedItems, totalAmount: updatedTotal };
    }
    case 'CLEAR_CART':
      return initialCartState;
    default:
      return state;
  }
}

export function ShoppingCartManager() {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <div className="flex justify-between items-center">
        <h4 className="text-white font-bold text-sm">শপিং কার্ট</h4>
        <span className="text-xs font-mono text-emerald-400 font-bold">মোট: ৳{state.totalAmount}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: Date.now(), title: 'React Mastery', price: 1500 } })}
          className="px-3 py-1 bg-cyan-600 text-white text-xs rounded"
        >
          + কোর্স যোগ করুন
        </button>
        <button
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
          className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded"
        >
          কার্ট খালি করুন
        </button>
      </div>
    </div>
  );
}`,
        pitfall: 'রিডিউসার Function এর ভেতর কখনোই কোনো অ্যাসিঙ্ক্রোনাস কাজ (যেমন `fetch` কল) বা র‍্যান্ডম সংখ্যা জেনারেট করবেন না। রিডিউসার সবসময় Pure Function হতে হবে।',
        interviewQ: 'প্রশ্ন: Reducer Function Pure হতে হয় কেন?\nউত্তর: কারণ Pure Function এ কোনো অপ্রত্যাশিত Side Effect থাকে না। এতে ইউনিট টেস্টিং করা পানির মতো সহজ হয় এবং পূর্ববর্তী State ও নতুন State এর মধ্যে Time-Travel Debugging বা আনডু/রিডু ফিচার তৈরি করা সম্ভব হয়।'
      }
    },
    {
      id: 'mod4-context-reducer-combo',
      title: 'Concept of useContext and useReducer Together (DIY Redux)',
      moduleTitle: 'Module 4: Context & Reducer',
      keywords: 'usecontext and usereducer together mini redux global state management split context provider',
      content: {
        easyBreakdown: {
          oneLiner: 'Context এবং useReducer একসাথে ব্যবহার করে কোনো এক্সটার্নাল Library ছাড়াই মিনি-রেডাক্স State ইঞ্জিন তৈরি।',
          analogy: 'একটি সুসংগঠিত সরকার—পলিসি এক জায়গায় ঠিক হয় এবং সব মন্ত্রক সেই অনুযায়ী কাজ করে।',
          whyNeed: 'মাঝারি আকারের অ্যাপ্লিকেশনে অতিরিক্ত বড় থার্ড-পার্টি Package ইনস্টল না করেই গ্লোবাল State ম্যানেজ করতে।'
        },
        mentorNote: 'অনেকেই জানে না যে কোনো এক্সটার্নাল Library (যেমন Redux) ইনস্টল না করেই শুধু React এর নিজস্ব useContext এবং useReducer একসাথে জুড়ে দিয়ে একটি সম্পূর্ণ লাইটওয়েট গ্লোবাল State ম্যানেজমেন্ট ফ্রেমওয়ার্ক বানিয়ে ফেলা যায়!',
        target: 'useContext ও useReducer এর মেলবন্ধনে নিজস্ব মিনি গ্লোবাল স্টোর তৈরি করা।',
        problemVsSolution: {
          problem: 'বড় বড় Library ইনস্টল করলে অ্যাপ্লিকেশনের বান্ডিল সাইজ বেড়ে যায়।',
          solution: 'React এর নিজস্ব Hook্স দিয়ে জিরো কেবি এক্সটার্নাল ডিপেন্ডেন্সিতে রিডাক্সের মতো গ্লোবাল State আর্কিটেকচার তৈরি করা যায়।'
        },
        sections: [
          {
            heading: 'স্প্লিট কনটেক্সট আর্কিটেকচার',
            body: 'State কে `StateContext` এ এবং ডিসপ্যাচকে `DispatchContext` এ পাস করা হয়। ফলে কোনো Component যদি শুধুমাত্র অ্যাকশন পাঠাতে চায় (Dispatch), তবে State পরিবর্তন হলেও সেই Component অপ্রয়োজনে Re-render হবে না!'
          }
        ],
        codeSnippet: `import React, { createContext, useContext, useReducer } from 'react';

const AppStateContext = createContext(null);
const AppDispatchContext = createContext(null);

const initialState = { user: null };

function appReducer(state, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload };
    case 'LOGOUT': return { ...state, user: null };
    default: return state;
  }
}

export function GlobalStoreProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export const useAppState = () => useContext(AppStateContext);
export const useAppDispatch = () => useContext(AppDispatchContext);`,
        pitfall: 'অ্যাপ্লিকেশন যদি বিশাল এন্টারপ্রাইজ লেভেলের হয়, তবে কাস্টম কনটেক্সটের চেয়ে Zustand ব্যবহার করাই সেরা চয়েস।',
        interviewQ: 'প্রশ্ন: কখন Redux না নিয়ে useContext + useReducer নেওয়া উচিত?\nউত্তর: ছোট থেকে মাঝারি আকারের অ্যাপ্লিকেশনে যেখানে থার্ড পার্টি Library এর বান্ডিল সাইজ যুক্ত না করে একটি প্রিডিক্টেবল State ফ্লো তৈরি করতে চান, সেখানে এটি নিখুঁত সমাধান।'
      }
    }
  ]
};
