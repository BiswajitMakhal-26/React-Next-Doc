export const introModule = {
  id: 'intro',
  title: 'Introduction to React',
  nameBangla: 'React পরিচিতি ও ফাউন্ডেশন',
  badge: 'Intro',
  topics: [
    {
      id: 'intro-course',
      title: 'Course Introduction & Why React in 2026?',
      moduleTitle: 'Introduction to React',
      keywords: 'course intro roadmap career modern react why react frontend beginners',
      content: {
        easyBreakdown: {
          oneLiner: 'React হলো একটি Declarative JavaScript Library যা ছোট ছোট Reusable Component দিয়ে চোখের পলকে আধুনিক Web App বানাতে সাহায্য করে।',
          analogy: 'লেগো ব্লক (Lego Blocks)—যেমন আলাদা আলাদা প্লাস্টিকের ব্লক জোড়া লাগিয়ে পুরো বাড়ি বানিয়ে ফেলা যায়।',
          whyNeed: 'পুরনো Vanilla JS এ কোড জগাখিচুড়ি (Spaghetti) হয়ে যেত; React কোডকে সুন্দর, গোছানো এবং দ্রুতগতির করে তোলে।'
        },
        mentorNote: 'শোনো ভাই, একদম শুরু থেকে শুরু করি। তুমি হয়তো ভাবছো—"বাজারে তো এত Framework আছে, আমি React কেন শিখব? আর কেনই বা বড় বড় কোম্পানি লাখ লাখ টাকা Package এ React ডেভেলপারদের হায়ার করছে?" তুমি যাতে অফিস টাইমে বা ফাঁকা সময়ে ফোনে/ল্যাপটপে বসেই কোনো VS Code না খুলেও একদম কনসেপ্ট ক্লিয়ার করে নিতে পারো, সেইভাবেই এই পুরো ডকুমেন্টেশন সাজানো হয়েছে। এই জার্নিতে আমরা কোনো মুখস্থ করব না; একদম Browser এর ভেতরটা বুঝে জিরো থেকে সিনিয়র ইঞ্জিনিয়ার লেভেলে যাব!',
        target: 'কোর্সের রোডম্যাপ, বর্তমান টেক ইন্ডাস্ট্রিতে React এর অবস্থান এবং চিরাচরিত ফ্রন্টএন্ড কোডিংয়ের চেয়ে React কেন ১০০ গুণ এগিয়ে তা বোঝা।',
        problemVsSolution: {
          problem: 'ঐতিহ্যবাহী ওয়েব ডেভেলপমেন্টে (HTML + CSS + Vanilla JS) যখন একটি বড় প্রজেক্ট তৈরি হতো, তখন JavaScript দিয়ে DOM ম্যানিপুলেশন করতে গিয়ে কোড Spaghetti (জটলা) হয়ে যেত। একটা পেজে শত শত ডেটা আপডেট হ্যান্ডেল করতে গিয়ে ডেভেলপাররা হারিয়ে যেত কোন বাটন কোন ডেটা চেঞ্জ করছে।',
          solution: 'React পুরো চিন্তাধারা বদলে দেয়। এখানে আমরা লেগো ব্লকের (Lego Blocks) মতো ছোট ছোট রিইউজেবল Component তৈরি করি এবং Declarative প্রোগ্রামিং ফলো করি। ডেটা বদলালে স্ক্রিনের কোন অংশটুকু আপডেট হবে তা React নিজে বুঝে নেয়!'
        },
        sections: [
          {
            heading: '১. রিয়েল-ওয়ার্ল্ড এনালজি: রেস্তোরাঁ ও কিচেন মডেল',
            body: 'ধরো তুমি একটা রেস্তোরাঁয় গিয়েছো। Vanilla JavaScript হলো এমন—যেখানে তোমাকে রান্নাঘরে ঢুকে শেফকে একটা একটা করে নির্দেশ দিতে হয়: "কড়াই নামাও, তেল গরম করো, মশলা দাও, মাংস নাড়ো" (একে বলে Imperative Programming)। কোথাও এক ফোঁটা ভুল হলেই পুরো রান্না বরবাদ!\n\nআর React হলো স্মার্ট মেনু কার্ডের মতো—তুমি শুধু বলবে "আমার একটা বিরিয়ানি চাই" (Declarative Programming)। বিরিয়ানিটা কিচেনে কীভাবে রান্না হবে, কোন মশলা আগে যাবে—তা React ইঞ্জিন নিজে নিখুঁতভাবে ম্যানেজ করে তোমার টেবিলে পরিবেশন করবে!'
          },
          {
            heading: '২. React আসলে কি? Library নাকি Framework?',
            body: 'React হলো Meta (Facebook) দ্বারা তৈরি একটি ওপেন-সোর্স JavaScript Library, যা ইউজার ইন্টারফেস (UI) তৈরির কাজে ব্যবহৃত হয়। মনে রাখবে, React কিন্তু কোনো Framework নয়! Angular বা NestJS হলো Framework—যা ডেভেলপারদের নির্দিষ্ট নিয়ম ও ফাইল স্ট্রাকচার মানতে বাধ্য করে। অন্যদিকে React হলো একটি Library—এটি শুধুমাত্র View Layer (UI) কন্ট্রোল করে, আর বাকি Routing বা State ম্যানেজমেন্টে ডেভেলপারদের সম্পূর্ণ স্বাধীনতা দেয়।'
          },
          {
            heading: '৩. ২০২৬ এ সিনিয়র ফ্রন্টএন্ড রোডম্যাপ',
            body: 'শুধুমাত্র বাটন ক্লিক করা বা টুডু অ্যাপ বানানো দিয়ে এখন আর চাকরি হয় না। আজকের দিনে সিনিয়র ডেভেলপার হতে গেলে তোমার প্রয়োজন:\n• React 18/19 এর কনকারেন্ট ফিচার ও মেমরি মডেল\n• State ম্যানেজমেন্ট (Zustand & Redux Toolkit)\n• Server State ক্যাশিং (TanStack Query v5)\n• ফুলস্ট্যাক Framework (Next.js 15 App Router)\n• আধুনিক এআই ইন্টিগ্রেশন (LLM Text Streaming)'
          }
        ],
        codeSnippet: `// Declarative UI: আমরা React-কে বলছি ডেটা থাকলে UI কেমন দেখাবে
function WelcomeBanner({ userName, isProMember }) {
  // কোনো document.getElementById নেই, কোনো innerHTML নেই!
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-900 to-blue-900 text-white shadow-xl">
      <h1 className="text-2xl font-bold">স্বাগতম, {userName}!</h1>
      {isProMember ? (
        <span className="text-emerald-400 font-mono text-xs">⭐ Pro Developer Member</span>
      ) : (
        <span className="text-slate-300 text-xs">ফ্রি লার্নিং মোডে আছেন</span>
      )}
    </div>
  );
}`,
        pitfall: 'অনেক বিগিনার শুরুতেই কোড মুখস্থ করার চেষ্টা করে। এটা সবথেকে বড় ভুল! প্রোগ্রামিং কোনো কবিতার বই নয়। প্রতিটি Hook বা Library "কেন তৈরি হলো এবং এর বিকল্পে কী সমস্যা ছিল"—এই পেছনের কারণটা ধরতে পারলে মুখস্থ করার কোনো দরকারই পড়বে না।',
        interviewQ: 'প্রশ্ন: React কে Library বলা হয় কেন, Framework নয় কেন?\nউত্তর: Framework হলো এমন একটি সফটওয়্যার যা পুরো অ্যাপ্লিকেশনের আর্কিটেকচার, Routing, ডাটাবেস হ্যান্ডলিং সব কিছু আগে থেকেই ফিক্স করে দেয় (Inversion of Control)। কিন্তু React শুধুমাত্র UI (View Layer) Render করার কাজ করে। বাকি Routing বা State ম্যানেজমেন্টের Library ডেভেলপার নিজের ইচ্ছামতো বাছাই করতে পারে।'
      }
    },
    {
      id: 'intro-features',
      title: 'What is React and Core Features',
      moduleTitle: 'Introduction to React',
      playgroundType: 'declarative',
      keywords: 'features declarative component virtual dom jsx unidirectional binding interactive',
      content: {
        easyBreakdown: {
          oneLiner: 'Component-based আর্কিটেকচার, Declarative UI এবং Virtual DOM হলো React এর ৩টি মূল সুপারপাওয়ার।',
          analogy: 'স্মার্ট রেস্তোরাঁ—শেফকে রান্নার খুঁটিনাটি না বলে শুধু অর্ডার প্লেস করলেই খাবার টেবিলে চলে আসে।',
          whyNeed: 'UI এর ছোট একটি পরিবর্তন করার জন্য যেন পুরো পেজ রিলোড না করতে হয়।'
        },
        mentorNote: 'চলো React এর ৪টি সুপারপাওয়ার সহজ বাংলায় বুঝে নিই। নিচে একটা লাইভ Interactive প্লে-গ্রাউন্ড দিয়েছি—কোনো VS Code না খুলেই বাটনে ক্লিক করে নিজের চোখে দেখে নাও কিভাবে Vanilla JS এর চেয়ে React কোড আলাদা!',
        target: 'Component Architecture, Declarative UI, Virtual DOM এবং Unidirectional Data Flow এর কনসেপ্ট রক্তে মিশিয়ে নেওয়া।',
        problemVsSolution: {
          problem: 'Vanilla JS এ একই পেজে একই রকম ১০টা কার্ড বানাতে গেলে বারবার HTML কপি-পেস্ট করতে হতো, অথবা বড় লুপ চালিয়ে জঘন্য স্ট্রিং কনক্যাটিনেশন করতে হতো।',
          solution: 'React এ আমরা একবার মাত্র Component বানাই। তারপর সাধারণ HTML ট্যাগের মতো `<Card title="..." />` লিখে যত খুশি রিইউজ করি!'
        },
        sections: [
          {
            heading: '১. Component-Based Architecture (লেগো ব্লক মডেল)',
            body: 'React এ পুরো ওয়েবপেজকে ছোট ছোট স্বাধীন টুকরো বা Component এ ভাগ করা হয় (যেমন: Navbar, SearchBar, ProductCard, Footer)। সুবিধা? একটা বড় পেজে কোথাও বাগ হলে পুরো পেজ ভেঙে পড়ে না, শুধু সেই স্পেসিফিক Component এ হাত দিলেই হয়।'
          },
          {
            heading: '২. Declarative vs Imperative Programming',
            body: '• Imperative (Vanilla JS): "কীভাবে করতে হবে" তার প্রতিটা স্টেপ Browser কে ম্যানুয়ালি বলা।\n• Declarative (React): "আমি কী দেখতে চাই" শুধু সেই ফাইনাল State ডিফাইন করে দেওয়া। Browser নিজে আপডেট বুঝে নেয়।'
          },
          {
            heading: '৩. Unidirectional Data Flow (একমুখী ডেটা প্রবাহ)',
            body: 'React এ ডেটা সবসময় Parent Component থেকে Child Component এ Props আকারে নিচে প্রবাহিত হয়। কোনো Child সরাসরি Parent এর ডেটা উল্টো দিকে টানতে পারে না। এর ফলে কোড ডিবাগ করা অত্যন্ত সহজ ও প্রিডিক্টেবল থাকে।'
          }
        ],
        codeSnippet: `// লেগো ব্লকের মতো রিইউজেবল Component
function MetricCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl shadow">
      <p className="text-xs text-slate-400 font-mono">{title}</p>
      <div className="flex items-baseline justify-between mt-2">
        <span className="text-xl font-bold text-white">{value}</span>
        <span className={\`text-xs font-mono font-semibold \${isPositive ? 'text-emerald-400' : 'text-rose-400'}\`}>
          {isPositive ? '▲' : '▼'} {change}
        </span>
      </div>
    </div>
  );
}

// এই Component টি এখন যতবার খুশি রিইউজ করা যাবে:
// <MetricCard title="মোট ইউজার" value="1,240" change="+12%" isPositive={true} />
// <MetricCard title="বাউন্স রেট" value="24%" change="-4%" isPositive={false} />`,
        pitfall: 'নতুনরা প্রায়ই ভুল করে Child Component এর ভেতর Parent থেকে আসা Props সরাসরি বদলানোর চেষ্টা করে (`props.title = "নতুন"` ❌)। মনে রাখবে, Props হলো সম্পূর্ণ Read-Only!',
        interviewQ: 'প্রশ্ন: Unidirectional Data Flow এর সবচেয়ে বড় লাভ কী?\nউত্তর: ডেটার Single Source of Truth নিশ্চিত হয়। ডেটা কোন Component থেকে আসছে এবং কোথায় পরিবর্তিত হচ্ছে তা এক নজরে ট্র্যাক করা যায়, ফলে অ্যাপ্লিকেশনে কোনো অপ্রত্যাশিত Side Effect বা Data Corruption হয় না।'
      }
    },
    {
      id: 'intro-install',
      title: 'Installation & Modern Tooling (Vite vs CRA)',
      moduleTitle: 'Introduction to React',
      keywords: 'installation vite node npm bun pnpm cra deprecated build tool',
      content: {
        easyBreakdown: {
          oneLiner: 'Vite + Node.js ব্যবহার করে মাত্র ৩০ সেকেন্ডে লাইটনিং-ফাস্ট React ডেভেলপমেন্ট এনভায়রনমেন্ট তৈরি করা।',
          analogy: 'তৈরি করা রেসিং কার ট্র‍্যাক—সব পার্টস আগে থেকেই ফিট করা, শুধু গ্যাস প্যাডেল চাপলেই চলতে শুরু করে।',
          whyNeed: 'পুরনো Webpack এর স্লো বিল্ড টাইম আর মেমরি ক্র্যাশ থেকে বাঁচতে আধুনিক Vite অপরিহার্য।'
        },
        mentorNote: 'অনেক পুরনো ইউটিউব ভিডিওতে দেখবে লোকে `npx create-react-app` চালাচ্ছে। খবরদার! এটা ২০২৬ সালে সম্পূর্ণ ডেপ্রিকেটেড ও বন্ধ। আজকের টেক ইন্ডাস্ট্রির গোল্ড স্ট্যান্ডার্ড হলো Vite (উচ্চারণ "ভিট")। চলো দেখি কেন এটা এত ফাস্ট।',
        target: 'Node.js এনভায়রনমেন্ট, আধুনিক Package ম্যানেজার এবং Vite দিয়ে সুপারফাস্ট প্রজেক্ট রান করার নিয়ম জানা।',
        problemVsSolution: {
          problem: 'Create React App (Webpack) পুরো প্রোজেক্টের সমস্ত ফাইল বান্ডিল করে মেমরিতে তুলে তারপর Server রান করত। ফলে প্রজেক্ট একটু বড় হলেই `npm start` মারার পর কফি খাওয়ার সময় হয়ে যেত!',
          solution: 'Vite ডেভেলপমেন্ট মোডে Browser এর নেটিভ ES Modules (ESM) ব্যবহার করে। ফলে কোনো ইনিশিয়াল বান্ডিলিং ছাড়াই ১ সেকেন্ডের মধ্যে লোকালহোস্ট চালু হয়ে যায়!'
        },
        sections: [
          {
            heading: '১. রিকোয়ারমেন্টস চেক',
            body: 'তোমার মেশিনে Node.js LTS (v18 বা তদূর্ধ্ব, যেমন v20 বা v22) থাকতে হবে। টার্মিনালে `node -v` এবং `npm -v` দিয়ে ভার্সন চেক করে নাও।'
          },
          {
            heading: '২. টার্মিনালে মাত্র ১ লাইনের কমান্ড',
            body: 'টার্মিনালে গিয়ে নিচের কমান্ডটি দিলেই Vite তোমার জন্য ফ্রেশ React সেটআপ রেডি করে দেবে:'
          }
        ],
        codeSnippet: `# টার্মিনাল কমান্ড: নতুন React প্রজেক্ট তৈরি
npm create vite@latest my-react-app -- --template react

# ফোল্ডারে প্রবেশ
cd my-react-app

# Package ইনস্টলেশন
npm install

# ডেভেলপমেন্ট Server চালু
npm run dev

# প্রোডাকশন বিল্ড তৈরির জন্য
npm run build`,
        pitfall: 'Node.js এর ওল্ড ভার্সন (v14 বা v16) থাকলে আধুনিক Vite 5/6 Packageগুলো ক্র্যাশ করবে। সর্বদা Node LTS ভার্সন ব্যবহার করবে।',
        interviewQ: 'প্রশ্ন: Webpack ভিত্তিক CRA থেকে Vite কেন শতগুণ দ্রুত?\nউত্তর: Webpack পুরো অ্যাপ্লিকেশনের সব ফাইল বান্ডিল করে মেমরিতে রাখে তারপর সার্ভ করে। কিন্তু Vite ডেভেলপমেন্ট মোডে কোনো বান্ডিলিং করে না; এটি Browser এর নেটিভ ES Modules (ESM) ব্যবহার করে শুধু রিকোয়েস্টেড ফাইল তাৎক্ষণিকভাবে трансপাইল করে দেয়।'
      }
    },
    {
      id: 'intro-angular-vs-react',
      title: 'Difference between Angular and React',
      moduleTitle: 'Introduction to React',
      keywords: 'angular vs react framework library two way binding typescript rxjs comparison',
      content: {
        easyBreakdown: {
          oneLiner: 'Angular হলো একটি অল-ইন-ওয়ান Heavy Framework, আর React হলো একটি Flexible Lightweight Library।',
          analogy: 'Angular হলো অল-ইনক্লুসিভ রিসোর্ট, আর React হলো লা কার্তে মেনু যেখানে আপনি নিজের পছন্দের পদ বেছে নিতে পারেন।',
          whyNeed: 'প্রজেক্টের প্রয়োজন অনুযায়ী পছন্দমতো টুলস (Router, Zustand, Tailwind) বেছে নেওয়ার পূর্ণ স্বাধীনতা পেতে।'
        },
        mentorNote: 'ইন্টারভিউ বোর্ডে এই প্রশ্নটা ফ্রন্টএন্ড ডেভেলপারদের খুব বেশি করা হয়। অনেকে মুখস্থ ডেফিনিশন বলতে গিয়ে আটকে যায়। চলো প্র্যাকটিক্যাল দৃষ্টিকোণ থেকে Angular vs React এর পার্থক্যগুলো দেখে নিই।',
        target: 'Angular (Full Framework) বনাম React (UI Library) এর স্ট্রাকচারাল পার্থক্য এবং বাস্তব ব্যবহারের ক্ষেত্র চিহ্নিত করা।',
        problemVsSolution: {
          problem: 'Angular এ কাজ করতে হলে শুরুতেই TypeScript, Decorators, RxJS Observables, Dependency Injection শিখতে হয়—যা বিগিনারদের জন্য এক বিশাল পাহাড়!',
          solution: 'React এ শুধুমাত্র সাধারণ JavaScript জানা থাকলেই কাজ শুরু করা যায়। এটি লাইটওয়েট এবং প্রয়োজন অনুযায়ী ইকোসিস্টেম বেছে নেওয়ার স্বাধীনতা দেয়।'
        },
        sections: [
          {
            heading: 'আর্কিটেকচারাল তুলনা ছক',
            body: '• Library vs Framework: Angular হলো ফুল-স্ট্যাক ফ্রন্টএন্ড Framework (সবকিছু তাদের বাক্সের ভেতরেই থাকে)। React হলো UI Library (Routing বা State এর জন্য বাইরে থেকে টুল নিতে হয়)।\n• Data Binding: Angular ডিফল্টভাবে Two-way Data Binding সমর্থন করে (NgModel)। React এ Unidirectional (One-way) Data Flow ফলো করা হয়।\n• DOM: Angular Browser এর Real DOM এবং নিজস্ব চেঞ্জ ডিটেকশন দিয়ে কাজ করে। React মেমরিতে Virtual DOM ও Fiber Diffing দিয়ে কাজ করে।'
          }
        ],
        codeSnippet: `// React: একমুখী ডেটা প্রবাহ (Explicit & Predictable)
function ReactInputExample() {
  const [text, setText] = useState('');
  return (
    <input 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      placeholder="Type here..."
    />
  );
}

// অন্যদিকে Angular এ Two-way binding:
// <input [(ngModel)]="text" placeholder="Type here...">
// Angular অটোমেটিকালি মডেল ও ভিউ দুই দিকেই সিংক্রোনাইজ করে দেয়।`,
        pitfall: 'React কে ফ্রেমওয়ার্ক বলা ভুল। তবে হ্যাঁ, যখন আপনি Next.js বা Remix ব্যবহার করছেন, তখন সেটি একটি ফুলস্ট্যাক React ফ্রেমওয়ার্কে রূপান্তরিত হয়।',
        interviewQ: 'প্রশ্ন: কখন এন্টারপ্রাইজ প্রজেক্টে Angular এর চেয়ে React বেছে নেওয়া বুদ্ধিমানের কাজ?\nউত্তর: যখন টিমে ফ্লেক্সিবিলিটি দরকার, দ্রুত UI Rendering প্রয়োজন, মাইক্রো-ফ্রন্টএন্ড বা মোবাইল প্ল্যাটফর্মে (React Native দিয়ে) কোড শেয়ার করার পরিকল্পনা থাকে, এবং বিশাল কমিউনিটি ইকোসিস্টেমের সুবিধা নিতে চান, তখন React বেস্ট চয়েস।'
      }
    },
    {
      id: 'intro-js-dom',
      title: 'JavaScript DOM & Browser Rendering Pipeline',
      moduleTitle: 'Introduction to React',
      keywords: 'javascript dom tree reflow repaint render tree browser engine layout',
      content: {
        easyBreakdown: {
          oneLiner: 'Browser DOM হলো HTML ডকুমেন্টের একটি ট্রি রিপ্রেজেন্টেশন, যা JavaScript দিয়ে লাইভ পরিবর্তন করা যায়।',
          analogy: 'গাছের ডালপালা—প্রতিটি HTML ট্যাগ হলো একটি ডাল বা পাতা, যা নাড়ালে পুরো গাছ কেঁপে ওঠে।',
          whyNeed: 'কেন সরাসরি Browser DOM ম্যানিপুলেট করা স্লো এবং কেন React মাঝে এসে অপ্টিমাইজ করে তা বোঝার জন্য।'
        },
        mentorNote: 'React বোঝার আগে তোমাকে Browser এর ভেতরটা বুঝতে হবে। Browser কিভাবে HTML টেক্সটকে স্ক্রিনে জীবন্ত পিক্সেল বানিয়ে দেখায়? এটা জানা থাকলে তুমি বুঝবে React এর Virtual DOM কেন এত বড় আবিষ্কার!',
        target: 'Browser Rendering Engine, DOM Tree, CSSOM, Render Tree, Reflow (Layout) এবং Repaint এর স্টেপগুলো বোঝা।',
        problemVsSolution: {
          problem: 'Vanilla JS এ বারবার ডম এলিমেন্ট পরিবর্তন করলে Browser কে বারবার পুরো লেআউট নতুন করে হিসাব (Reflow) করতে হয় এবং স্ক্রিন রিপেইন্ট করতে হয়, ফলে সাইট ল্যাগ করে ও ফ্রেম ড্রপ হয়।',
          solution: 'React সরাসরি Browser ডমে হাত দেয় না; এটি মেমরিতে হিসাব করে একসাথে ব্যাচ আপডেট করে Browser এর রিফ্লো কমিয়ে দেয়।'
        },
        sections: [
          {
            heading: 'Browser কিভাবে ওয়েবপেজ Render করে?',
            body: '১. HTML পার্স করে DOM (Document Object Model) Tree তৈরি হয়।\n২. সমান্তরালে CSS পার্স করে CSSOM (CSS Object Model) Tree তৈরি হয়।\n৩. এই দুটি মিলে Render Tree তৈরি হয়।\n৪. Layout (Reflow): প্রতিটি এলিমেন্টের সঠিক জ্যামিতিক সাইজ ও পজিশন হিসাব করা হয়।\n৫. Paint: Browser স্ক্রিনে আসল পিক্সেল আঁকে।'
          }
        ],
        codeSnippet: `// ❌ Costly Vanilla JS DOM Manipulation (বারবার Browser রিফ্লো ট্রিগার করে)
const list = document.getElementById('my-list');
for (let i = 0; i < 1000; i++) {
  // প্রতিটি লুপে Browser ডম রিফ্লো হচ্ছে!
  list.innerHTML += \`<li>আইটেম \${i}</li>\`;
}

// ✅ অপ্টিমাইজড ভ্যানিলা পদ্ধতি (DocumentFragment দিয়ে ১ বার ইনসার্ট)
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = \`আইটেম \${i}\`;
  fragment.appendChild(li);
}
list.appendChild(fragment); // মাত্র একবার রিফ্লো হলো!

// React এর Virtual DOM ইন্টারনালি এই ধরণের ব্যাচিং আরও বুদ্ধিমান উপায়ে অটোমেটিক করে!`,
        pitfall: 'JavaScript ইঞ্জিন (যেমন V8) নিজে স্লো নয়, এটি সুপারফাস্ট। আসল ধীরগতির অপারেশন হলো Browser এর DOM API কল করে লেআউট রি-ক্যালকুলেট করা।',
        interviewQ: 'প্রশ্ন: Reflow এবং Repaint এর মধ্যে পার্থক্য কি?\nউত্তর: Reflow হলো যখন কোনো পরিবর্তনের ফলে ডকুমেন্টের লেআউট বা সাইজ বা পজিশন পুনরায় গণনা করতে হয় (যেমন: width, height বদলালে)। আর Repaint হলো যখন শুধুমাত্র কালার বা ভিসিবিলিটি বদলায় কিন্তু জ্যামিতিক পজিশন অপরিবর্তিত থাকে (যেমন: background-color বদলালে)। Reflow সবসময় Repaint ট্রিগার করে এবং এটি অত্যন্ত ভারী কাজ।'
      }
    },
    {
      id: 'intro-real-vs-virtual-dom',
      title: 'Difference between Real DOM and Virtual DOM',
      moduleTitle: 'Introduction to React',
      hasVisualizer: 'virtual-dom',
      keywords: 'real dom virtual dom diffing reconciliation fiber batching vdom visualizer',
      content: {
        easyBreakdown: {
          oneLiner: 'Virtual DOM হলো Real DOM এর একটি হালকা মেমোরি কপি; React এতে পরিবর্তন টেস্ট করে শুধু প্রয়োজনীয় অংশটুকু Real DOM এ পাঠায়।',
          analogy: 'আসল বাড়ি বানানোর আগে ব্লুপ্রিন্টে স্কেচ আঁকা—কাগজে কাটাকুটি করলে খরচ নেই, কিন্তু সরাসরি দেওয়ালে হাতুড়ি মারলে বিশাল খরচ!',
          whyNeed: 'Browser এর ভারী Layout ও Repaint কমিয়ে ৬০ FPS এ মাখনের মতো মসৃণ পারফরম্যান্স দিতে।'
        },
        mentorNote: 'এটি ইন্টারভিউয়ের সবচেয়ে ফেভারিট টপিক! নিচে আমি একটি লাইভ ইন্টারেক্টিভ সিমুলেটর বানিয়ে রেখেছি। বাটনে ক্লিক করে নিজের চোখে দেখে নাও কিভাবে React মেমরিতে diffিং করে শুধু নির্দিষ্ট নোড Browser ডমে পাঠায়!',
        target: 'Virtual DOM, Fiber Reconciliation Engine, Heuristic Diffing Algorithm এবং Batch Updating এর বাস্তব কাজ বোঝা।',
        problemVsSolution: {
          problem: 'রিয়েল ডমে কোনো ছোট অংশ বদলাতে গেলেও Browser কে পুরো সাবট্রি রি-পেইন্ট করতে হয়, যা ১০০০০ নোডের পেজে প্রচণ্ড পারফরম্যান্স ড্রপ তৈরি করে।',
          solution: 'Virtual DOM হলো Browser ডমের একটি হালকা ইন-মেমরি JavaScript Object। React নতুন ও পুরনো VDOM এর তুলনা করে (Diffing) শুধুমাত্র পরিবর্তিত অংশটুকু রিয়েল ডমে প্যাচ করে দেয়!'
        },
        sections: [
          {
            heading: 'Reconciliation এবং Diffing Algorithm এর ৩টি নিয়ম',
            body: 'React এর Reconciliation ইঞ্জিন O(n³) অ্যালগরিদমকে মাত্র O(n) এ নামিয়ে এনেছে ৩টি নিয়মের মাধ্যমে:\n১. বিভিন্ন টাইপের দুটি এলিমেন্ট সম্পূর্ণ আলাদা ট্রি তৈরি করবে (<div> বদলে <span> হলে সাবট্রি নতুন বানানো হয়)।\n২. ডেভেলপাররা `key` Prop দিয়ে বিভিন্ন Render এর মধ্যে Child এলিমেন্টগুলোকে স্থায়ীভাবে চিহ্নিত করতে পারে।\n৩. একই টাইপের এলিমেন্টের শুধুমাত্র পরিবর্তিত অ্যাট্রিবিউটগুলো আপডেট করা হয়।'
          }
        ],
        codeSnippet: `// Virtual DOM নোড আসলে এরকম একটি সাধারণ JavaScript Object:
const vdomNode = {
  type: 'div',
  props: {
    className: 'card',
    children: [
      {
        type: 'h2',
        props: { children: 'প্রোডাক্ট টাইটেল' }
      },
      {
        type: 'button',
        props: { onClick: () => alert('Clicked!'), children: 'কিনুন' }
      }
    ]
  }
};
// React.createElement('div', { className: 'card' }, ...) কল করলে এরকম Object রিটার্ন হয়!`,
        pitfall: 'লিস্ট Render করার সময় `key={index}` ব্যবহার করা মারাত্মক ক্ষতিকর। আইটেম ডিলিট বা সর্ট করলে ইনডেক্স উল্টাপাল্টা হয়ে ভুল State অন্য এলিমেন্টে লেগে যেতে পারে। সবসময় ইউনিক ID (যেমন item.id) ব্যবহার করবেন।',
        interviewQ: 'প্রশ্ন: Virtual DOM কি Real DOM এর চেয়ে সবসময় দ্রুত?\nউত্তর: একদমই নয়! সরাসরি অত্যন্ত দক্ষ হ্যান্ড-ক্রাফটেড ভ্যানিলা ডম অপারেশনের চেয়ে VDOM কখনোই দ্রুত হতে পারে না। VDOM এর আসল মাহাত্ম্য হলো এটি ডেভেলপারদের নো-টেনশন ডিক্লেয়ারিটিভ কোড লেখার স্বাধীনতা দেয় এবং "যেকোনো সাধারণ কোডের জন্যও গ্যারান্টেড যথেষ্ট ভালো পারফরম্যান্স (Good-enough performance by default)" নিশ্চিত করে।'
      }
    },
    {
      id: 'intro-folder-structure',
      title: 'File and Folder Structure of React',
      moduleTitle: 'Introduction to React',
      keywords: 'folder structure architecture components hooks pages services utils clean code',
      content: {
        easyBreakdown: {
          oneLiner: 'ফিচার-ভিত্তিক (Feature-based) মডুলার ফোল্ডার সাজিয়ে প্রজেক্টকে এন্টারপ্রাইজ স্কেলে মেইনটেনেবল রাখা।',
          analogy: 'বড় ডিপার্টমেন্টাল স্টোর—যেখানে ওষুধ, মুদি, পোশাক প্রতিটি বিভাগের আলাদা গোছানো শেলফ থাকে।',
          whyNeed: 'প্রজেক্ট বড় হলে যাতে কোনো কোড জগাখিচুড়ি না হয় এবং নতুন ডেভেলপার নিমেষেই ফাইল খুঁজে পায়।'
        },
        mentorNote: 'একটি সফল প্রজেক্টের প্রাণ হলো তার আর্কিটেকচার। নতুনদের কোডবেস অগোছালো থাকে, ফলে ৩ মাস পর কেউ কোডে হাত দিতে ভয় পায়। চলো ইন্ডাস্ট্রি-গ্রেড ফিচার-বেসড ফোল্ডার স্ট্রাকচার শিখে নিই।',
        target: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড স্কেলেবল ফোল্ডার আর্কিটেকচার রপ্ত করা।',
        problemVsSolution: {
          problem: 'সব কোড `components/` বা `App.jsx` ফাইলে ঢেলে দিলে প্রজেক্ট বড় হওয়ার সাথে সাথে ফাইল খোঁজা এবং কোড মেইনটেইন করা দুঃস্বপ্ন হয়ে দাঁড়ায়।',
          solution: 'Feature-based architecture এ প্রতিটি ফিচারের নিজস্ব Component, Hook এবং API ফাইল এক ছাতার নিচে সুন্দরভাবে গোছানো থাকে।'
        },
        sections: [
          {
            heading: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড ডিরেক্টরি ট্রি',
            body: 'বড় এন্টারপ্রাইজ প্রজেক্টে আমরা কীভাবে ফাইল সাজাই তা নিচে লক্ষ্য করো:'
          }
        ],
        codeSnippet: `my-production-app/
├── public/                 # স্ট্যাটিক অ্যাসেটস (রোবটস, ফন্ট, ফেভিকন)
├── src/
│   ├── assets/             # ছবি, লোগো, গ্লোবাল স্টাইলশিট
│   ├── components/         # সাধারণ রিইউজেবল UI (Button, Modal, Input)
│   │   ├── ui/
│   │   └── layout/         # Header, Footer, Sidebar
│   ├── features/           # ফিচার-ভিত্তিক মডিউল
│   │   ├── auth/           # Login, Register, useAuth hook, authApi
│   │   ├── products/       # ProductCard, ProductList, useProducts
│   │   └── checkout/
│   ├── hooks/              # গ্লোবাল কাস্টম Hook্স (useWindowSize, useDebounce)
│   ├── services/           # Axios Client ও API এন্ডপয়েন্টস
│   ├── store/              # Zustand বা Redux Toolkit স্টোর
│   ├── utils/              # হেল্পার Function (ফরম্যাট কারেন্সি, ডেট পার্সিং)
│   ├── App.jsx             # রুট Component ও Router সেটআপ
│   ├── main.jsx            # React 18 createRoot এন্ট্রি পয়েন্ট
│   └── index.css           # Tailwind ডিরেক্টিভ ও গ্লোবাল CSS
├── package.json
├── tailwind.config.js
└── vite.config.js`,
        pitfall: 'কখনোই সব State বা Component App.jsx এর ভেতরে ঠুসে ফেলবেন না। App.jsx হওয়া উচিত কেবল অ্যাপ্লিকেশনের হাই-লেভেল Router এবং গ্লোবাল প্রোভাইডারের প্রবেশদ্বার।',
        interviewQ: 'প্রশ্ন: Feature-based folder structure এর সবচেয়ে বড় সুবিধা কি?\nউত্তর: এটি হাইলি স্কেলেবল এবং মোডুলার (High Cohesion, Low Coupling)। কোনো ফিচার সরিয়ে দিতে হলে বা নতুন টিম মেম্বার কোনো স্পেসিফিক ফিচারে কাজ করতে চাইলে তাকে পুরো কোডবেস ঘাঁটতে হয় না, শুধু সংশ্লিষ্ট ফিচার ফোল্ডারে কাজ করলেই চলে।'
      }
    },
    {
      id: 'intro-setup-first-app',
      title: 'Project Setup, First Application & Editing',
      moduleTitle: 'Introduction to React',
      keywords: 'setup first app main jsx createroot app jsx hot reload fast refresh editing',
      content: {
        easyBreakdown: {
          oneLiner: 'React 18 এর createRoot দিয়ে অ্যাপ মাউন্ট করা এবং Fast Refresh (HMR) এর ম্যাজিক বোঝা।',
          analogy: 'স্মার্ট টিভির প্লাগ অন করা—টিভি অন হতেই রিমোটের বোতাম চেপে যেকোনো চ্যানেল দেখা শুরু করা।',
          whyNeed: 'Browser পেজ রিলোড না করে ফর্মের ইনপুট ঠিক রেখেই সেকেন্ডের ভগ্নাংশে লাইভ কোড আপডেট দেখতে।'
        },
        mentorNote: 'চলো তোমার প্রথম React অ্যাপ্লিকেশনটি তৈরি এবং এডিট করে ফেলি। React 18 এর নতুন `createRoot` API কিভাবে কাজ করে এবং ফাইল সেভ করার সাথে সাথে Browser রিফ্রেশ না হয়েও কিভাবে কোড লাইভ আপডেট (Hot Module Replacement) হয় তা দেখো।',
        target: 'React 18 এর এন্ট্রি পয়েন্ট `createRoot`, ReactDOM এর বুটস্ট্র্যাপ প্রসেস এবং HMR বোঝা।',
        problemVsSolution: {
          problem: 'পুরনো React ১৭ এ `ReactDOM.render` ছিল সিঙ্ক্রোনাস। বড় পেজ Render হওয়ার সময় Browser সাময়িক জমে যেত (Unresponsive)।',
          solution: 'React 18 এর `createRoot` কনকারেন্ট মোড চালু করে Renderingকে বিরতিযোগ্য ও রেসপনসিভ করেছে।'
        },
        sections: [
          {
            heading: 'main.jsx: অ্যাপ্লিকেশনের হার্টবিট',
            body: 'HTML ফাইলের `<div id="root"></div>` এলিমেন্টটিকে ধরে React 18 এর `ReactDOM.createRoot()` দিয়ে একটি কনকারেন্ট রুট তৈরি করা হয়। এরপর `root.render(<App />)` কল করে Browser স্ক্রিনে প্রথম Component মাউন্ট করা হয়।'
          },
          {
            heading: 'Hot Module Replacement (HMR) ও Fast Refresh',
            body: 'Vite এ যখন আপনি কোনো ফাইলে কোড পরিবর্তন করে `Ctrl + S` চাপেন, পুরো ওয়েবপেজ রিলোড হয় না! React Fast Refresh শুধুমাত্র সংশ্লিষ্ট Component এর State অক্ষুণ্ণ রেখে কেবল সেই Functionটির আপডেট Browser এ ইনজেক্ট করে দেয়। ফলে ফর্মের ইনপুট না মুছেই ইনস্ট্যান্ট UI আপডেট দেখা যায়!'
          }
        ],
        codeSnippet: `// src/main.jsx - React 18 এন্ট্রি পয়েন্ট
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Browser এর আসল ডম থেকে 'root' আইডি ওয়ালা div ধরা হলো
const rootElement = document.getElementById('root');

// React 18 কনকারেন্ট রুট তৈরি এবং মাউন্টিং
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.jsx - তোমার প্রথম Component
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-cyan-400">হ্যালো বাংলাদেশ ও বিশ্ব! 🚀</h1>
        <p className="mt-2 text-slate-400">আমার প্রথম সুপারফাস্ট React অ্যাপ্লিকেশন সফলভাবে চালু হয়েছে!</p>
      </div>
    </div>
  );
}`,
        pitfall: '`React.StrictMode` ডেভেলপমেন্ট মোডে Component কে ইচ্ছাকৃতভাবে দুইবার মাউন্ট ও Render করায়। এর উদ্দেশ্য হলো মেমরি লিক এবং অশুদ্ধ Side Effect ধরা। এটি প্রোডাকশন বিল্ডে একবারই চলে, তাই কনসোলে ডাবল লগ দেখে ঘাবড়াবেন না!',
        interviewQ: 'প্রশ্ন: React 18 এ `ReactDOM.render` এর বদলে `createRoot` কেন আনা হলো?\nউত্তর: পুরনো `ReactDOM.render` সিঙ্ক্রোনাসভাবে চলতো, ফলে বড় পেজে Rendering চলাকালীন Browser জমে যেত (Unresponsive)। নতুন `createRoot` React এর কনকারেন্ট ফিচারগুলো (যেমন: Transitions, Suspense, Automatic Batching) সক্রিয় করে Rendering-কে বিরতিযোগ্য ও প্রায়োরিটাইজড করে তুলেছে।'
      }
    }
  ]
};
