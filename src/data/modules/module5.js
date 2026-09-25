export const module5 = {
  id: 'mod5',
  title: 'Module 5: Global State Management with Redux Toolkit',
  nameBangla: 'মডিউল ৫: রেডুক্স ও রেডুক্স টুলকিট (RTK) মাস্টারক্লাস',
  badge: 'Module 5',
  topics: [
    {
      id: 'mod5-redux-concept',
      title: 'Concept of Redux & The Flux Architecture',
      moduleTitle: 'Module 5: Redux Toolkit',
      keywords: 'redux flux architecture single source of truth immutability store action reducer dispatch',
      content: {
        easyBreakdown: {
          oneLiner: 'Redux হলো একটি ইউনিফাইড সিঙ্গেল স্টোর যেখানে সম্পূর্ণ অ্যাপের গ্লোবাল State একটি সেন্ট্রাল Object এ জমা থাকে।',
          analogy: 'কেন্দ্রীয় রিজার্ভ ব্যাংক—সারা দেশের সমস্ত অর্থনৈতিক লেনদেন ও হিসাব যেখানে এক ছাদের নিচে সংরক্ষিত।',
          whyNeed: 'বড় মাপের জটিল এন্টারপ্রাইজ সিস্টেমে State ডিবাগিং, টাইম ট্রাভেল এবং প্রেডিক্টেবল ডেটা ফ্লোর জন্য।'
        },
        mentorNote: 'Redux হলো ফ্রন্টএন্ডের সেন্ট্রাল ব্যাংক ভল্ট! যেখানে সমস্ত টাকা (State) এক জায়গায় নিরাপদে জমা থাকে। আপনি নিজে ভল্টে ঢুকে টাকা টানতে পারবেন না; নির্দিষ্ট স্লিপ (Action) জমা দিতে হবে এবং ক্যাশিয়ার (Reducer) নিয়মানুযায়ী ভল্ট আপডেট করবে।',
        target: 'Redux এর Flux আর্কিটেকচার, ৩টি কোর প্রিন্সিপাল এবং ইউনিডিরেকশনাল State ফ্লো বোঝা।',
        problemVsSolution: {
          problem: 'বড় টিমে শত শত ডেভেলপার কাজ করলে কে কখন কোন State বদলাচ্ছে তা ট্র্যাক করা অসম্ভব হয়ে যায়।',
          solution: 'Redux এর কড়া ডিসিপ্লিন (Action -> Dispatch -> Reducer -> Store) পুরো টিমকে একটি কঠোর শৃঙ্খলাবদ্ধ কাঠামোর মধ্যে রাখে।'
        },
        sections: [
          {
            heading: 'Redux এর ৩টি গোল্ডেন প্রিন্সিপাল',
            body: '১. Single Source of Truth: পুরো অ্যাপ্লিকেশনের সমস্ত State একটি সিঙ্গেল সেন্ট্রাল Object এ (Store) আবদ্ধ থাকে।\n২. State is Read-only: State সরাসরি কখনো Mutate করা যায় না; পরিবর্তন করতে হলে Action Object ডিসপ্যাচ করতে হয়।\n৩. Changes are made with Pure Reducers: পুরনো State এবং অ্যাকশন গ্রহণ করে নতুন State তৈরি করতে হবে পিওর Function দিয়ে।'
          }
        ],
        codeSnippet: `// Flux আর্কিটেকচার ফ্লো:
// [User Interaction / View] 
//           │
//           ▼ (Dispatch)
// [Action: { type: 'cart/addItem', payload: {...} }]
//           │
//           ▼
// [Reducer Function (Pure Calculation)]
//           │
//           ▼
// [Central Redux Store Updated]
//           │
//           ▼ (Subscribed View Re-renders!)`,
        pitfall: 'পুরনো React টিউটোরিয়াল দেখে ভ্যাঙ্কুভার-স্টাইলের লিগ্যাসি Redux (Action Types, Action Creators, Switch-Case Reducers) লিখে খাতা ভারী করবেন না। Redux টিম এখন শুধু Redux Toolkit (RTK) ব্যবহার করার নির্দেশ দিয়েছে!',
        interviewQ: 'প্রশ্ন: Redux এ State সরাসরি Mutate (`state.count++`) করা নিষিদ্ধ কেন?\nউত্তর: কারণ Redux শ্যালো রেফারেন্স কম্প্যারিজন (`oldState === newState`) করে দেখে State বদলেছে কি না। আপনি যদি সরাসরি Object Mutate করেন, মেমরি রেফারেন্স একই থেকে যাবে, ফলে Redux সাবস্ক্রাইবার Component কে জানাবেই না যে State বদলেছে, এবং UI Render হবে না!'
      }
    },
    {
      id: 'mod5-rtk-core-setup',
      title: 'Redux Toolkit (RTK) Core Usage & createSlice',
      moduleTitle: 'Module 5: Redux Toolkit',
      keywords: 'redux toolkit rtk createslice configurestore provider usesyntax immer react-redux',
      content: {
        easyBreakdown: {
          oneLiner: 'Redux Toolkit (RTK) বয়লারপ্লেট কোড ৮০% কমিয়ে দেয় এবং Immer এর সাহায্যে সহজে Immutable আপডেট করতে দেয়।',
          analogy: 'আধুনিক অটোমেটিক গিয়ার ওয়ালা গাড়ি—ক্লাচ বা জটিল গিয়ারবক্সের প্যাঁচ ছাড়াই মসৃণ ড্রাইভিং।',
          whyNeed: 'পুরনো রেডাক্সের ক্লান্তিকর Action Types, Creators আর রিডিউসার ফাইলের জঙ্গল সাফ করতে।'
        },
        mentorNote: 'Redux Toolkit (RTK) এসে পুরনো রেডুক্সের শত শত লাইনের বয়লারপ্লেট কোড ধুয়ে মুছে দিয়েছে! এখানে `createSlice()` স্বয়ংক্রিয়ভাবে অ্যাকশন ও রিডিউসার বানিয়ে দেয়, আর Immer এর কারণে সরাসরি `state.count++` লিখলেও ব্যাকগ্রাউন্ডে Immutable কপি তৈরি হয়!',
        target: 'RTK সেটআপ, `createSlice`, `configureStore`, এবং `useSelector` / `useDispatch` আয়ত্ত করা।',
        problemVsSolution: {
          problem: 'পুরনো রেডুক্সে একটা ছোট কাউন্টার বানাতেও ৪টি আলাদা ফাইল এবং ৫০ লাইন বয়লারপ্লেট লিখতে হতো।',
          solution: 'RTK এর `createSlice()` মাত্র ১০ লাইনে State, অ্যাকশন এবং রিডিউসার এক সাথে সাজিয়ে দেয়।'
        },
        sections: [
          {
            heading: 'createSlice এর জাদু',
            body: '`createSlice()` Function একই সাথে অ্যাকশন টাইপ, অ্যাকশন ক্রিয়েটর এবং রিডিউসার তৈরি করে ফেলে। এর ভেতরে `immer` Library ইন্টিগ্রেটেড থাকায় Mutateিং সিন্ট্যাক্স লিখলেও কোনো সমস্যা নেই।'
          }
        ],
        codeSnippet: `import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

// 1. স্লাইস তৈরি
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; }, // Immer handles safety!
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 2. সেন্ট্রাল স্টোর
export const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

// 3. Component এ ব্যবহার
export function RtkCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center">
      <span className="font-mono text-cyan-400 font-bold">{count}</span>
      <button onClick={() => dispatch(increment())} className="px-3 py-1 bg-cyan-600 text-white rounded text-xs">
        +১ বাড়ান
      </button>
    </div>
  );
}`,
        pitfall: 'useSelector এ সম্পূর্ণ Object সিলেক্ট করলে (যেমন `const state = useSelector(state => state)`) স্টোরের যেকোনো প্রান্তে পরিবর্তন হলে ওই Component Re-render হবে! সর্বদা প্রিসাইজ ভ্যালু সিলেক্ট করবেন।',
        interviewQ: 'প্রশ্ন: Immer Library Redux Toolkit এর ভেতরে কিভাবে কাজ করে?\nউত্তর: Immer একটি JavaScript Proxy ব্যবহার করে আপনি যে ড্রাফট Stateটি পরিবর্তন করছেন তা রেকর্ড করে। এরপর পরিবর্তন শেষে এটি স্বয়ংক্রিয়ভাবে অরিজিনাল State কে অক্ষত রেখে একটি সম্পূর্ণ নতুন ফ্রিজড Immutable কপি রিটার্ন করে দেয়।'
      }
    },
    {
      id: 'mod5-advanced-state-thunk',
      title: 'Advanced State Handling & createAsyncThunk',
      moduleTitle: 'Module 5: Redux Toolkit',
      keywords: 'createasyncthunk thunk pending fulfilled rejected async extrareducers redux devtools',
      content: {
        easyBreakdown: {
          oneLiner: 'createAsyncThunk দিয়ে অ্যাসিনক্রোনাস API কল হ্যান্ডেল করা এবং Loading, Success, Error State ট্র্যাক করা।',
          analogy: 'অনলাইন ফুড ডেলিভারি ট্র্যাকার—অর্ডার নেওয়া হলো (Pending), রান্না হচ্ছে (Loading), খাবার ডেলিভার হলো (Fulfilled)।',
          whyNeed: 'Server থেকে ডেটা আনার পুরো জীবনচক্রকে নিখুঁতভাবে UI State ও স্পিনারের সাথে সিঙ্ক রাখতে।'
        },
        mentorNote: 'বাস্তব জীবনের প্রজেক্টে ডেটা আসে ব্যাকএন্ড থেকে নেটওয়ার্ক কলের মাধ্যমে। Redux এ অ্যাসিঙ্ক কল হ্যান্ডেল করার আদর্শ উপায় হলো `createAsyncThunk`। এটি স্বয়ংক্রিয়ভাবে ৩টি লাইফসাইকেল Event হ্যান্ডেল করে: pending, fulfilled এবং rejected!',
        target: 'অ্যাসিঙ্ক থাঙ্ক আর্কিটেকচার, extraReducers বিল্ডার এবং Redux DevTools দিয়ে টাইম ট্রাভেল ডিবাগিং।',
        problemVsSolution: {
          problem: 'অ্যাসিঙ্ক্রোনাস API কলে লোডার দেখানো, এরর ধরা এবং সাকসেসে ডেটা রাখার জন্য ৩টি আলাদা State হ্যান্ডেল করতে কোড জটিল হয়ে যেত।',
          solution: 'createAsyncThunk স্বয়ংক্রিয়ভাবে pending, fulfilled এবং rejected তিনটি অ্যাকশন জেনারেট করে লাইফসাইকেল ম্যানেজ করে দেয়।'
        },
        sections: [
          {
            heading: 'createAsyncThunk এর ৩টি লাইফসাইকেল স্ট্যাটাস',
            body: '• `pending`: রিকোয়েস্ট শুরু হয়েছে, লোডার দেখান।\n• `fulfilled`: Server থেকে ডেটা এসে গেছে, State এ রাখুন।\n• `rejected`: Server এরর দিয়েছে, এরর মেসেজ দেখান।'
          }
        ],
        codeSnippet: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsersList = createAsyncThunk('users/fetchList', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersList.pending, (state) => { state.loading = true; })
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = 'এরর হয়েছে!';
      });
  }
});`,
        pitfall: 'প্রতিটি নতুন প্রজেক্টে চোখ বন্ধ করে RTK এর ভেতরে Async Thunk লিখে ডেটা ফেচ করবেন না। ২০২৬ এ Server ডেটা ফেচিং ও ক্যাশিং এর জন্য TanStack Query অনেক বেশি অপ্টিমাইজড ও প্রিফার্ড!',
        interviewQ: 'প্রশ্ন: Redux DevTools এর Time-Travel Debugging কি?\nউত্তর: এটি এমন একটি Browser এক্সটেনশন যা অ্যাপ্লিকেশনে ঘটা প্রতিটি অ্যাকশন ও State চেঞ্জের হিস্ট্রি রেকর্ড করে রাখে। ডেভেলপাররা স্লাইডার টেনে আগের যে কোনো সময়ে অ্যাপ্লিকেশনের State এ ফেরত যেতে পারে (Time travel) এবং ঠিক কোন অ্যাকশনে বাগ হয়েছে তা দেখতে পারে।'
      }
    }
  ]
};
