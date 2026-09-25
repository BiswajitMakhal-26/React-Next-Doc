export const module7 = {
  id: 'mod7',
  title: 'Module 7: Server State & TanStack Query (React Query)',
  nameBangla: 'মডিউল ৭: Server State ও ট্যানস্ট্যাক কুয়েরি (TanStack Query v5)',
  badge: 'Module 7',
  topics: [
    {
      id: 'mod7-tanstack-intro-fetch',
      title: 'Introduction to TanStack Query & Modern Data Fetching',
      moduleTitle: 'Module 7: TanStack Query',
      keywords: 'tanstack query react query v5 usequery server state caching querykey staletime gctime window focus',
      content: {
        easyBreakdown: {
          oneLiner: 'TanStack Query Server থেকে আসা ডেটাকে ক্যাশে জমা রাখে এবং ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে রিফেচ করে।',
          analogy: 'স্মার্ট ফ্রিজ—প্রয়োজনীয় খাবার সবসময় প্রস্তুত রাখে এবং শেষ হওয়ার আগেই বাজার থেকে নিয়ে আসে।',
          whyNeed: 'ম্যানুয়াল useEffect + useState এর জটিলতা বাদ দিয়ে অটো-রিট্রাই, উইন্ডো ফোকাস রিফেচ এবং ক্যাশিং পেতে।'
        },
        mentorNote: 'আগে আমরা useEffect দিয়ে ডেটা ফেচ করে useState এ রাখতাম। কিন্তু নেটওয়ার্ক ড্রপ করলে রিট্রাই নেই, ক্যাশ নেই, অন্য ট্যাবে গিয়ে ফিরে এলে অটো-রিফ্রেশ নেই! TanStack Query হলো Server ডেটা ম্যানেজমেন্টের অবিসংবাদিত সম্রাট।',
        target: 'Server State ম্যানেজমেন্ট, QueryClient, QueryKey Array কনসেপ্ট, `staleTime` বনাম `gcTime` এর পার্থক্য বোঝা।',
        problemVsSolution: {
          problem: 'প্রতিবার পেজে ঢুকলে লোডিং স্পিনার দেখতে দেখতে ইউজার বিরক্ত হয়, এবং ব্যাকগ্রাউন্ডে ডেটা আপডেট হলেও Browser এ পুরনো ডেটা আটকে থাকে।',
          solution: 'TanStack Query স্বয়ংক্রিয়ভাবে মেমরি ক্যাশ থেকে তাৎক্ষণিক ডেটা দেখায় এবং ব্যাকগ্রাউন্ডে নেটওয়ার্ক ফেচ চালিয়ে স্ক্রিন নিঃশব্দে আপডেট করে দেয়!'
        },
        sections: [
          {
            heading: 'staleTime বনাম gcTime (Garbage Collection Time)',
            body: '• `staleTime`: ডেটা কতক্ষণ পর্যন্ত "টাটকা" (Fresh) থাকবে। এই সময়ের মধ্যে একই কুয়েরি আবার কল হলে কোনো নেটওয়ার্ক রিকোয়েস্ট যাবে না, সরাসরি ক্যাশ থেকে আসবে।\n• `gcTime`: কোনো Component আনমাউন্ট হয়ে যাওয়ার পর সেই অব্যবহৃত ডেটা মেমরি ক্যাশে কতক্ষণ সংরক্ষিত থাকবে (ডিফল্ট ৫ মিনিট), তারপর মেমরি খালি করতে ডিলিট হয়ে যাবে।'
          }
        ],
        codeSnippet: `import { useQuery, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const queryClient = new QueryClient();

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

export function ProductCatalog() {
  const {
    data: products,
    isPending,
    isError,
    error,
    isFetching
  } = useQuery({
    queryKey: ['products', 'list'],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // ৫ মিনিট ফ্রেশ
    gcTime: 1000 * 60 * 10,    // ১০ মিনিট মেমরি ক্যাশে
    refetchOnWindowFocus: true
  });

  if (isPending) return <div className="text-cyan-400 font-mono text-xs">লোড হচ্ছে... ⏳</div>;
  if (isError) return <div className="text-rose-400 text-xs">এরর: {error.message}</div>;

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="text-white font-bold text-sm">প্রোডাক্ট লিস্ট ({products?.length} টি)</h4>
        {isFetching && <span className="text-[10px] text-amber-400 font-mono animate-pulse">ব্যাকগ্রাউন্ড সিঙ্ক...</span>}
      </div>
      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
        {products?.slice(0, 4).map(p => (
          <div key={p.id} className="p-2 bg-slate-950 rounded border border-slate-800 text-xs text-slate-300">
            {p.title.slice(0, 25)}...
          </div>
        ))}
      </div>
    </div>
  );
}`,
        pitfall: 'React Query v5 এ পুরনো `isLoading` আর নতুন `isPending` এর পার্থক্য মনে রাখবেন: ক্যাশে কোনো ডেটা না থাকা অবস্থায় প্রথম ফেচকে `isPending` বলে। আর `isFetching` হলো যখনই কোনো ব্যাকগ্রাউন্ড নেটওয়ার্ক কল চলছে।',
        interviewQ: 'প্রশ্ন: Query Key Array তে ভেরিয়েবল রাখা কেন জরুরি?\nউত্তর: কারণ TanStack Query এই কি-এর ভিত্তিতে ক্যাশ শনাক্ত করে। যেমন: `queryKey: ["product", productId]` দিলে `productId` বদলানোর সাথে সাথে React Query স্বয়ংক্রিয়ভাবে নতুন প্যারামিটারের জন্য ফেচ চালাবে, আলাদা করে useEffect ও dependency array লেখার দরকারই পড়ে না!'
      }
    },
    {
      id: 'mod7-usemutation-caching',
      title: 'Concept of useMutation, Optimistic Updates & Cache Invalidation',
      moduleTitle: 'Module 7: TanStack Query',
      keywords: 'usemutation optimistic updates invalidatequeries mutateasync cache performance rollback',
      content: {
        easyBreakdown: {
          oneLiner: 'useMutation দিয়ে ডাটাবেসে ডেটা পুশ/আপডেট করা এবং Optimistic UI দিয়ে তাৎক্ষণিক স্ক্রিন আপডেট করা।',
          analogy: 'সোশ্যাল মিডিয়ায় লাভ রিয়্যাক্ট দেওয়া—Server এর উত্তরের অপেক্ষা না করেই চোখের পলকে হার্ট আইকন লাল হয়ে যাওয়া।',
          whyNeed: 'ইউজারকে ইনস্ট্যান্ট রেসপন্সিভ অভিজ্ঞতা দিতে যেন কোনো ল্যাগ বা বাফারিং অনুভূত না হয়।'
        },
        mentorNote: 'ডেটা রিড করার জন্য useQuery, কিন্তু ডাটাবেসে নতুন কিছু পোস্ট করা, আপডেট করা বা ডিলিট করার জন্য দরকার `useMutation`। আর ফেসবুকের মতো বাটনে ক্লিক করার সাথে সাথে ইনস্ট্যান্ট লাইক দেখানোর ম্যাজিক হলো Optimistic Updates!',
        target: 'useMutation Hook, invalidateQueries দিয়ে ক্যাশ রিফ্রেশ এবং onMutate দিয়ে অপ্টিমিস্টিক UI আপডেট ও ফেইলিওর রোলব্যাক।',
        problemVsSolution: {
          problem: 'ফেসবুকে লাইক দেওয়ার পর যদি নেটওয়ার্ক কলের জন্য ১ সেকেন্ড অপেক্ষা করতে হতো, অ্যাপ স্লো লাগত।',
          solution: 'Optimistic Update Server রেসপন্সের আগেই স্ক্রিনে লাইক কাউন্ট বাড়িয়ে দেয়। Server কোনো কারণে এরর দিলে স্বয়ংক্রিয়ভাবে আগের অবস্থায় রোলব্যাক করে!'
        },
        sections: [
          {
            heading: 'Cache Invalidation ও Optimistic Updates',
            body: '১. `onMutate`: নেটওয়ার্ক কলের আগেই সরাসরি ক্যাশ State আপডেট করে ইনস্ট্যান্ট ফিডব্যাক দেয়।\n২. `onError`: কোনো কারণে ফেইল করলে আগের স্ন্যাপশটে ব্যাক করে।\n৩. `onSettled`: সফল বা ব্যর্থ যাই হোক, `invalidateQueries` দিয়ে Server এর সাথে নিখুঁত সিঙ্ক নিশ্চিত করে।'
          }
        ],
        codeSnippet: `import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function CreatePostForm() {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: (newPost) => axios.post('https://jsonplaceholder.typicode.com/posts', newPost),

    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts'] });
      const previousPosts = queryClient.getQueryData(['posts']);

      queryClient.setQueryData(['posts'], (old = []) => [
        { id: Date.now(), ...newPost, isOptimistic: true },
        ...old
      ]);

      return { previousPosts };
    },

    onError: (err, newPost, context) => {
      queryClient.setQueryData(['posts'], context.previousPosts);
      alert('পোস্ট তৈরিতে সমস্যা হয়েছে! পূর্বাবস্থায় ফেরত যাওয়া হলো।');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    }
  });

  return (
    <button
      onClick={() => createPostMutation.mutate({ title: 'নতুন অপ্টিমিস্টিক পোস্ট' })}
      disabled={createPostMutation.isPending}
      className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold rounded"
    >
      {createPostMutation.isPending ? 'যোগ হচ্ছে...' : '+ অপ্টিমিস্টিক পোস্ট যোগ করুন'}
    </button>
  );
}`,
        pitfall: 'Mutation সফল হওয়ার পর `invalidateQueries` কল করতে ভুলে গেলে ইউজার ডাটাবেসে নতুন ডেটা যোগ করার পরও স্ক্রিনে পুরনো ডেটা দেখতে পাবে যতক্ষণ না সে Browser রিফ্রেশ করে।',
        interviewQ: 'প্রশ্ন: `mutate` এবং `mutateAsync` এর মধ্যে তফাত কি?\nউত্তর: `mutate` কোনো প্রমিজ রিটার্ন করে না, এটি সাধারণ Callback এর মাধ্যমে (onSuccess, onError) কাজ করে। অন্যদিকে `mutateAsync` একটি প্রমিজ রিটার্ন করে, যা `try...catch` বা `await` দিয়ে সিকোয়েন্সিয়াল অপারেশনের জন্য ব্যবহার করা যায়।'
      }
    }
  ]
};
