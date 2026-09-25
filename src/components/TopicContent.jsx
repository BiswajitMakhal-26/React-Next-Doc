import React, { useState } from 'react';
import { 
  CheckCircle2, Circle, ArrowLeft, ArrowRight, Sparkles, Target, 
  Coffee, Zap, HelpCircle, Layers, PlayCircle, Code
} from 'lucide-react';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import InteractivePlayground from './InteractivePlayground';
import ConceptVideoPlayer from './ConceptVideoPlayer';
import IndustryMiniProject from './IndustryMiniProject';

// Import visualizers
import VirtualDomVisualizer from './visualizers/VirtualDomVisualizer';
import ReRenderVisualizer from './visualizers/ReRenderVisualizer';
import LifecycleVisualizer from './visualizers/LifecycleVisualizer';
import RenderingStrategiesVisualizer from './visualizers/RenderingStrategiesVisualizer';
import StateManagementVisualizer from './visualizers/StateManagementVisualizer';
import ZustandBlogSimulator from './visualizers/ZustandBlogSimulator';
import NextAuthCrudVisualizer from './visualizers/NextAuthCrudVisualizer';
import AiChatbotSimulator from './visualizers/AiChatbotSimulator';

export default function TopicContent({
  topic,
  isCompleted,
  onToggleComplete,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  language = 'bn'
}) {
  const [showVideoSim, setShowVideoSim] = useState(false);

  if (!topic) {
    return (
      <div className="flex items-center justify-center h-96 text-slate-500 font-sans text-sm">
        {language === 'bn' ? 'বামদিকের Sidebar থেকে যেকোনো Topic নির্বাচন করুন।' : 'Select any topic from the left sidebar to start learning.'}
      </div>
    );
  }

  const { title, moduleTitle, content, hasVisualizer, playgroundType, showMiniProject } = topic;

  // Render respective interactive visualizer if attached
  const renderVisualizer = () => {
    switch (hasVisualizer) {
      case 'virtual-dom':
        return <VirtualDomVisualizer />;
      case 'rerender':
        return <ReRenderVisualizer />;
      case 'lifecycle':
        return <LifecycleVisualizer />;
      case 'rendering-matrix':
        return <RenderingStrategiesVisualizer />;
      case 'state-mgmt':
        return <StateManagementVisualizer />;
      case 'zustand-blog':
        return <ZustandBlogSimulator />;
      case 'next-auth-crud':
        return <NextAuthCrudVisualizer />;
      case 'ai-chatbot':
        return <AiChatbotSimulator />;
      default:
        return null;
    }
  };

  return (
    <article className="max-w-4xl mx-auto py-6 px-4 sm:px-8 space-y-8 animate-in fade-in duration-300">
      {/* Header and Breadcrumb */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 px-2.5 py-1 rounded-lg">
            {moduleTitle}
          </span>

          <div className="flex items-center gap-2">
            {/* Toggle Video Player Simulator */}
            <button
              onClick={() => setShowVideoSim(prev => !prev)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border font-mono transition ${
                showVideoSim
                  ? 'bg-rose-950/80 text-rose-300 border-rose-600 shadow-md'
                  : 'bg-slate-900 text-cyan-300 border-cyan-800/80 hover:bg-cyan-950/50'
              }`}
            >
              <PlayCircle className="w-4 h-4 text-cyan-400" />
              <span>{showVideoSim ? 'ভিডিও সিমুলেটর লুকান' : '📹 ভিডিও অ্যানিমেশন সিমুলেটর'}</span>
            </button>

            <button
              onClick={() => onToggleComplete(topic.id)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border font-medium transition ${
                isCompleted
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80 shadow-sm'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'bn' ? 'Topic সম্পন্ন হয়েছে ✓' : 'Topic Completed ✓'}</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 text-slate-500" />
                  <span>{language === 'bn' ? 'সম্পন্ন হিসেবে চিহ্নিত করুন' : 'Mark as Completed'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
          {title}
        </h1>
      </div>

      {/* Embedded Video Concept Player if toggled */}
      {showVideoSim && (
        <ConceptVideoPlayer language={language} />
      )}

      {/* Mentor Note Greeting Card */}
      {content.mentorNote && (
        <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-800/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="p-2 bg-cyan-500/20 text-cyan-300 rounded-xl shrink-0 mt-0.5">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-cyan-300 font-sans flex items-center gap-2">
                {language === 'bn' ? '☕ মেন্টর নোট (Senior Developer Style)' : '☕ Mentor Note (Senior Engineer Guide)'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {content.mentorNote}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ⚡ 60-Second Super Easy Breakdown (Beginner Friendly AI-style Explainer) */}
      {content.easyBreakdown && (
        <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/40 rounded-2xl p-5 space-y-3.5 shadow-xl">
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
            <span>⚡ React in 60 Seconds: অতি সহজে বুঝুন (Beginner Breakdown)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-indigo-900/50 space-y-1">
              <span className="text-[11px] font-mono font-bold text-cyan-400 block">
                🤖 ১ লাইনে সারসংক্ষেপ (One-Liner):
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {content.easyBreakdown.oneLiner}
              </p>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-indigo-900/50 space-y-1">
              <span className="text-[11px] font-mono font-bold text-amber-400 block">
                🏡 বাস্তব জীবনের উদাহরণ (Real Analogy):
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {content.easyBreakdown.analogy}
              </p>
            </div>

            <div className="p-3 bg-slate-950/80 rounded-xl border border-indigo-900/50 space-y-1">
              <span className="text-[11px] font-mono font-bold text-emerald-400 block">
                🎯 কেন ব্যবহার করবেন (Why We Need It):
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {content.easyBreakdown.whyNeed}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Target Box */}
      {content.target && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center gap-3">
          <div className="p-1.5 bg-amber-500/20 text-amber-400 rounded-lg shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase text-amber-400 font-bold block">
              {language === 'bn' ? '🎯 আজকের মূল লক্ষ্য (Learning Objective):' : '🎯 Learning Objective:'}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {content.target}
            </p>
          </div>
        </div>
      )}

      {/* Beginner Step-by-Step Problem vs Solution Guide */}
      {content.problemVsSolution && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-slate-950 border border-rose-500/30 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-rose-400 block uppercase">
              ❌ The Problem (Vanilla JS / Before)
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {content.problemVsSolution.problem}
            </p>
          </div>

          <div className="bg-slate-950 border border-emerald-500/30 rounded-xl p-4 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 block uppercase">
              ✅ The React Solution (Why We Use It)
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {content.problemVsSolution.solution}
            </p>
          </div>
        </div>
      )}

      {/* Body Explanations */}
      {content.sections && (
        <div className="space-y-6">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2.5 bg-slate-900/40 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 font-sans flex items-center gap-2">
                <span className="w-1.5 h-4 bg-cyan-400 rounded-full inline-block"></span>
                {sec.heading}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line pl-3.5">
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Interactive In-Browser Playground (Clickable without opening VS Code) */}
      {playgroundType && (
        <InteractivePlayground playgroundType={playgroundType} />
      )}

      {/* Interactive Visualizer Integration */}
      {renderVisualizer()}

      {/* Embedded Industry Capstone Mini-Project if flagged */}
      {(showMiniProject || topic.id === 'mod10-capstone' || topic.id === 'mod1-props-state') && (
        <div className="my-6">
          <IndustryMiniProject language={language} />
        </div>
      )}

      {/* Code Snippet Box (Real VS Code Dark+ Highlighting) */}
      {content.codeSnippet && (
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-200 font-sans flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            {language === 'bn' ? 'VS Code প্র্যাকটিস কোড (Syntax Highlighted):' : 'Production Code Example (VS Code Dark+):'}
          </h4>
          <CodeBlock code={content.codeSnippet} language="jsx" filename={`${topic.id}.jsx`} />
        </div>
      )}

      {/* Pitfall Box */}
      {content.pitfall && (
        <Callout type="warning" title={language === 'bn' ? '⚠️ বিগিনারদের কমন ভুল ও প্রোডাকশন পিটফল' : '⚠️ Common Beginner Mistakes & Production Gotchas'}>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{content.pitfall}</p>
        </Callout>
      )}

      {/* Interview Question Box */}
      {content.interviewQ && (
        <Callout type="interview" title={language === 'bn' ? '🏢 সিনিয়র ইন্টারভিউ মাস্টার প্রশ্নোত্তর' : '🏢 Senior & Staff Engineer Interview Q&A'}>
          <div className="whitespace-pre-line text-xs sm:text-sm text-slate-300 leading-relaxed">
            {content.interviewQ}
          </div>
        </Callout>
      )}

      {/* Bottom Linear Navigation Controls */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-800">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-40 disabled:pointer-events-none transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'bn' ? 'পূর্ববর্তী Topic' : 'Previous Topic'}</span>
        </button>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 disabled:opacity-40 disabled:pointer-events-none transition shadow-md shadow-cyan-900/20"
        >
          <span>{language === 'bn' ? 'পরবর্তী Topic' : 'Next Topic'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
