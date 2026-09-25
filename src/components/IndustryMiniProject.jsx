import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, Circle, Clock, Plus, Trash2, Search, Filter, 
  Layers, Code, Sparkles, Cpu, RefreshCw, BarChart2, ShieldCheck, X
} from 'lucide-react';
import CodeBlock from './CodeBlock';

const initialTasks = [
  { id: 1, title: 'Next.js 15 App Router Migration', priority: 'High', status: 'Completed', owner: 'Arka Dev', points: 8 },
  { id: 2, title: 'Zustand Global State Store Refactor', priority: 'High', status: 'In Progress', owner: 'Priya Sen', points: 5 },
  { id: 3, title: 'TanStack Query Server Hydration Setup', priority: 'Medium', status: 'Pending', owner: 'Rahul Roy', points: 3 },
  { id: 4, title: 'JWT Axios Interceptor Refresh Token Flow', priority: 'High', status: 'Completed', owner: 'Arka Dev', points: 5 },
  { id: 5, title: 'Vercel Edge Streaming Chatbot Integration', priority: 'Medium', status: 'In Progress', owner: 'Suman Das', points: 8 }
];

export default function IndustryMiniProject({ language = 'bn' }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInspector, setShowInspector] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');

  // Simulated API Refresh with useEffect
  const handleRefreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTasks(initialTasks);
      setIsLoading(false);
    }, 600);
  };

  // Performance Optimization: useMemo for filtering tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesFilter = filterStatus === 'All' || task.status === filterStatus;
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            task.owner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [tasks, filterStatus, searchQuery]);

  // Metrics calculated via Array reduce
  const metrics = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const inProgress = tasks.filter(t => t.status === 'In Progress').length;
    const totalPoints = tasks.reduce((acc, curr) => acc + curr.points, 0);
    return { total, completed, inProgress, totalPoints };
  }, [tasks]);

  // State Handler: Toggle task status
  const handleToggleStatus = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          const nextStatus = task.status === 'Completed' ? 'Pending' : 'Completed';
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  // State Handler: Delete task
  const handleDeleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
  };

  // State Handler: Add new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      priority: newTaskPriority,
      status: 'Pending',
      owner: 'Current User',
      points: newTaskPriority === 'High' ? 5 : 3
    };
    setTasks(prev => [newTask, ...prev]);
    setNewTaskTitle('');
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-slate-800 bg-[#0e121a] shadow-2xl shadow-black/80">
      {/* Project Header Bar */}
      <div className="px-6 py-4 bg-gradient-to-r from-[#131826] via-[#10141f] to-[#131826] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded-full">
              Full Industry Mini-Project
            </span>
            <span className="text-xs text-slate-500 font-mono">• React 18 + Tailwind CSS</span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
            🚀 DevPulse Pro: Production Sprint & Task Operations Hub
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            React এর সমস্ত কোর কনসেপ্ট (Component, Props, State, Hooks, useMemo, Filter) কীভাবে একটি রিয়েল-লাইফ প্রজেক্টে যুক্ত থাকে তা দেখুন।
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowInspector(prev => !prev)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition ${
              showInspector
                ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-900/40 ring-2 ring-purple-500/30'
                : 'bg-slate-900 text-purple-300 border-purple-700/60 hover:bg-purple-950/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{showInspector ? 'ইনস্পেক্টর চালু আছে' : '🔍 আর্কিটেকচার ইনস্পেক্টর'}</span>
          </button>

          <button
            onClick={handleRefreshData}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-900 border border-slate-700 hover:text-white hover:border-slate-600 transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-cyan-400' : ''}`} />
            <span>রিসেট ডাটা</span>
          </button>
        </div>
      </div>

      {/* Inspector Notification Banner */}
      {showInspector && (
        <div className="p-3 bg-purple-950/70 border-b border-purple-800 text-purple-200 text-xs flex items-center justify-between animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>
              💡 <strong>Architecture Inspector Active:</strong> প্রতিটি কার্ডের উপর রঙিন ব্যাজগুলো নির্দেশ করছে সেই সেকশনটিতে React এর কোন কনসেপ্ট কাজ করছে।
            </span>
          </div>
          <button onClick={() => setShowInspector(false)} className="text-purple-300 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Interactive App Body */}
      <div className="p-6 space-y-6">
        {/* 1. Metrics Bar */}
        <div className="relative">
          {showInspector && (
            <div className="absolute -top-3 left-4 z-10 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-500">
              Module 1 & 3: Array.reduce() + useMemo() Performance
            </div>
          )}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3.5 ${showInspector ? 'ring-2 ring-amber-500/50 p-2 rounded-2xl bg-amber-950/10' : ''}`}>
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span className="text-[11px] text-slate-400 font-mono">মোট টাস্ক (Total Tasks)</span>
              <div className="text-2xl font-extrabold text-white mt-1">{metrics.total}</div>
            </div>
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span className="text-[11px] text-emerald-400 font-mono">সম্পন্ন (Completed)</span>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">{metrics.completed}</div>
            </div>
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span className="text-[11px] text-cyan-400 font-mono">চলমান (In Progress)</span>
              <div className="text-2xl font-extrabold text-cyan-400 mt-1">{metrics.inProgress}</div>
            </div>
            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
              <span className="text-[11px] text-purple-400 font-mono">স্প্রিন্ট পয়েন্ট (Story Points)</span>
              <div className="text-2xl font-extrabold text-purple-400 mt-1">{metrics.totalPoints} pts</div>
            </div>
          </div>
        </div>

        {/* 2. Add New Task Input Bar */}
        <div className="relative">
          {showInspector && (
            <div className="absolute -top-3 left-4 z-10 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500">
              Module 1: Controlled Form Input & State Immutability
            </div>
          )}
          <form
            onSubmit={handleAddTask}
            className={`flex flex-wrap items-center gap-3 p-4 bg-slate-900/60 border border-slate-800 rounded-2xl ${
              showInspector ? 'ring-2 ring-cyan-500/50' : ''
            }`}
          >
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="নতুন ফিচার বা টাস্ক যোগ করুন (যেমন: JWT Authentication)..."
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value)}
              className="px-3 py-2 bg-slate-950 border border-slate-700/80 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-cyan-500 font-mono"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>

            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-cyan-950/40 transition active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>টাস্ক যোগ করুন</span>
            </button>
          </form>
        </div>

        {/* 3. Search & Filter Toolbar */}
        <div className="relative">
          {showInspector && (
            <div className="absolute -top-3 left-4 z-10 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500">
              Module 1 & 2: Controlled Search + Single Source of Truth
            </div>
          )}
          <div className={`flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl ${
            showInspector ? 'ring-2 ring-emerald-500/50' : ''
          }`}>
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 flex-1 max-w-xs">
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="নাম বা ডেভেলপার দিয়ে ফিল্টার করুন..."
                className="w-full bg-transparent text-xs text-white placeholder-slate-500 outline-none"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-slate-500 mr-1" />
              {['All', 'In Progress', 'Completed', 'Pending'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-mono transition ${
                    filterStatus === st
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Task List Cards (Component Composition & Props Mapping) */}
        <div className="relative space-y-2.5">
          {showInspector && (
            <div className="absolute -top-3 left-4 z-10 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-500">
              Module 1: Component &lt;TaskRow key={'{task.id}'} {...props} /&gt;
            </div>
          )}
          <div className={`${showInspector ? 'ring-2 ring-rose-500/50 p-2 rounded-2xl bg-rose-950/10' : ''} space-y-2.5`}>
            {filteredTasks.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-xs font-mono">
                কোনো টাস্ক খুঁজে পাওয়া যায়নি।
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl hover:border-slate-700 transition group"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleStatus(task.id)}
                      className="text-slate-500 hover:text-emerald-400 transition"
                      title="Status পরিবর্তন করুন"
                    >
                      {task.status === 'Completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-500 hover:text-cyan-400" />
                      )}
                    </button>

                    <div>
                      <h4 className={`text-xs font-bold font-sans ${task.status === 'Completed' ? 'line-through text-slate-500' : 'text-slate-100'}`}>
                        {task.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] font-mono text-slate-400">
                        <span>👤 {task.owner}</span>
                        <span>•</span>
                        <span className={`px-1.5 py-0.2 rounded font-bold ${
                          task.priority === 'High' ? 'text-rose-400 bg-rose-950/60' : 'text-amber-400 bg-amber-950/60'
                        }`}>
                          {task.priority} Priority
                        </span>
                        <span>•</span>
                        <span className="text-slate-500">{task.points} SP</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                      task.status === 'Completed' ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60' :
                      task.status === 'In Progress' ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60' :
                      'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      {task.status}
                    </span>

                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg transition opacity-0 group-hover:opacity-100"
                      title="টাস্ক মুছুন"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 5. Production Code Pattern Peek (Educational View) */}
        <div className="border-t border-slate-800/80 pt-5">
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wide">
              Production Code Pattern (How this is structured in Real World)
            </h4>
          </div>
          <CodeBlock
            language="jsx"
            filename="DevPulseSprintHub.jsx"
            code={`import React, { useState, useMemo } from 'react';

// ১. Parent State: Single Source of Truth
export default function DevPulseDashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('All');

  // ২. Performance Optimization via useMemo
  const visibleTasks = useMemo(() => {
    return tasks.filter(t => filter === 'All' || t.status === filter);
  }, [tasks, filter]);

  // ৩. Immutable State Updates (No Mutation)
  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, status: t.status === 'Done' ? 'Pending' : 'Done' } : t
    ));
  };

  return (
    <div>
      <MetricsSummary tasks={tasks} />
      <TaskFilter active={filter} onSelect={setFilter} />
      <TaskList items={visibleTasks} onToggle={toggleTask} />
    </div>
  );
}`}
          />
        </div>
      </div>
    </div>
  );
}
