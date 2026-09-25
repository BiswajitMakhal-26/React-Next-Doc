import React, { useState } from 'react';
import { BookOpen, Bookmark, Trash2, PlusCircle, Search, Filter, Terminal, Check } from 'lucide-react';

export default function ZustandBlogSimulator() {
  // In-memory simulation of Zustand Store
  const [store, setStore] = useState({
    posts: [
      {
        id: 1,
        title: 'Virtual DOM কিভাবে কাজ করে এবং কেন Browser ডম থেকে ফাস্ট?',
        category: 'React Core',
        readTime: '৫ মিনিট',
        bookmarked: true,
        author: 'Senior React Dev'
      },
      {
        id: 2,
        title: 'Zustand বনাম Redux Toolkit: আধুনিক React অ্যাপে কোনটা সেরা?',
        category: 'State Management',
        readTime: '৭ মিনিট',
        bookmarked: false,
        author: 'Tech Lead'
      },
      {
        id: 3,
        title: 'Next.js 15 App Router: Server Components এর জাদুকরী পারফরম্যান্স',
        category: 'Next.js',
        readTime: '১০ মিনিট',
        bookmarked: true,
        author: 'Fullstack Architect'
      }
    ],
    selectedCategory: 'All',
    searchQuery: '',
    showInspector: false
  });

  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('React Core');

  const addPost = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newEntry = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      readTime: '৩ মিনিট',
      bookmarked: false,
      author: 'You (Student)'
    };
    setStore(prev => ({
      ...prev,
      posts: [newEntry, ...prev.posts]
    }));
    setNewTitle('');
  };

  const deletePost = (id) => {
    setStore(prev => ({
      ...prev,
      posts: prev.posts.filter(p => p.id !== id)
    }));
  };

  const toggleBookmark = (id) => {
    setStore(prev => ({
      ...prev,
      posts: prev.posts.map(p => (p.id === id ? { ...p, bookmarked: !p.bookmarked } : p))
    }));
  };

  const filteredPosts = store.posts.filter(p => {
    const matchesCat = store.selectedCategory === 'All' || p.category === store.selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(store.searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-900 border border-amber-900/40 rounded-xl p-5 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-white flex items-center gap-2">
              লাইভ প্রজেক্ট: Zustand দিয়ে তৈরি Blog Application
              <span className="text-xs bg-amber-950 text-amber-400 border border-amber-800 px-2 py-0.5 rounded-full font-mono">Live Interactive App</span>
            </h4>
            <p className="text-xs text-slate-400">State ম্যানেজমেন্ট, অ্যাকশন ডিসপ্যাচ ও ফিল্টারিং এর সম্পূর্ণ রিয়েল-ওয়ার্ল্ড ইমপ্লিমেন্টেশন</p>
          </div>
        </div>

        <button
          onClick={() => setStore(prev => ({ ...prev, showInspector: !prev.showInspector }))}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition font-mono ${
            store.showInspector
              ? 'bg-amber-600 text-white border-amber-500'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" /> Zustand Store Inspector
        </button>
      </div>

      {/* Real-time Zustand Store Inspector */}
      {store.showInspector && (
        <div className="bg-slate-950 border border-amber-500/40 rounded-xl p-3.5 mb-4 text-xs font-mono">
          <div className="flex items-center justify-between text-amber-400 mb-2 font-bold">
            <span>⚡ Zustand useBlogStore() Real-time State:</span>
            <span className="text-[10px] text-slate-500">Auto-synced with store actions</span>
          </div>
          <pre className="text-slate-300 text-[11px] bg-slate-900 p-2.5 rounded border border-slate-800 overflow-x-auto max-h-48">
            {JSON.stringify(
              {
                postsCount: store.posts.length,
                bookmarksCount: store.posts.filter(p => p.bookmarked).length,
                selectedCategory: store.selectedCategory,
                searchQuery: store.searchQuery,
                posts: store.posts.map(p => ({ id: p.id, title: p.title.slice(0, 30) + '...', category: p.category, bookmarked: p.bookmarked }))
              },
              null,
              2
            )}
          </pre>
        </div>
      )}

      {/* Add New Post Form */}
      <form onSubmit={addPost} className="bg-slate-950 p-3 rounded-xl border border-slate-800 mb-4 flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="নতুন ব্লগের শিরোনাম লিখুন..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 min-w-[200px] bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
        />
        <select
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
        >
          <option value="React Core">React Core</option>
          <option value="State Management">State Management</option>
          <option value="Next.js">Next.js</option>
        </select>
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 shadow"
        >
          <PlusCircle className="w-3.5 h-3.5" /> পোস্ট যোগ করুন
        </button>
      </form>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5">
          {['All', 'React Core', 'State Management', 'Next.js'].map(cat => (
            <button
              key={cat}
              onClick={() => setStore(prev => ({ ...prev, selectedCategory: cat }))}
              className={`px-2.5 py-1 rounded text-xs font-medium transition ${
                store.selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="ব্লগ খুঁজুন..."
            value={store.searchQuery}
            onChange={(e) => setStore(prev => ({ ...prev, searchQuery: e.target.value }))}
            className="bg-slate-950 border border-slate-800 rounded-lg pl-7 pr-3 py-1 text-xs text-slate-200 focus:outline-none focus:border-amber-500 w-44"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2 top-2" />
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-6 text-xs text-slate-500 font-bengali">
            কোনো পোস্ট পাওয়া যায়নি। নতুন একটি যোগ করতে পারেন!
          </div>
        ) : (
          filteredPosts.map(post => (
            <div
              key={post.id}
              className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded font-mono">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">{post.readTime}</span>
                </div>
                <h5 className="font-semibold text-xs text-slate-100 font-bengali">{post.title}</h5>
                <span className="text-[10px] text-slate-500">লেখক: {post.author}</span>
              </div>

              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={() => toggleBookmark(post.id)}
                  title={post.bookmarked ? 'বুকমার্ক সরানো' : 'বুকমার্ক যোগ'}
                  className={`p-1.5 rounded transition ${
                    post.bookmarked
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Bookmark className="w-4 h-4" fill={post.bookmarked ? 'currentColor' : 'none'} />
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  title="ডিলিট করুন"
                  className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
