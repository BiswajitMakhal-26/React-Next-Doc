import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TopicContent from './components/TopicContent';
import SearchModal from './components/SearchModal';
import QuickCheatSheetModal from './components/QuickCheatSheetModal';
import ProgressBar from './components/ProgressBar';
import ErrorBoundary from './components/ErrorBoundary';
import { allModules, allTopics } from './data/modulesData';

export default function App() {
  const [activeTopicId, setActiveTopicId] = useState(() => {
    return localStorage.getItem('active_react_topic') || 'intro-course';
  });

  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem('completed_react_topics');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('app_language') || 'bn';
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // Sync active topic to localStorage
  useEffect(() => {
    localStorage.setItem('active_react_topic', activeTopicId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTopicId]);

  // Sync completion progress to localStorage
  useEffect(() => {
    localStorage.setItem('completed_react_topics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  // Sync language to localStorage
  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'bn' ? 'en' : 'bn'));
  };

  const toggleComplete = (topicId) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  const resetProgress = () => {
    const confirmMsg = language === 'bn'
      ? 'আপনি কি সত্যিই আপনার সমস্ত অগ্রগতি (Progress) রিসেট করতে চান?'
      : 'Are you sure you want to reset all your learning progress?';
    if (window.confirm(confirmMsg)) {
      setCompletedTopics({});
      localStorage.removeItem('completed_react_topics');
    }
  };

  const currentTopicIndex = allTopics.findIndex(t => t.id === activeTopicId);
  const currentTopic = allTopics[currentTopicIndex] || allTopics[0];

  const handleNext = () => {
    if (currentTopicIndex < allTopics.length - 1) {
      setActiveTopicId(allTopics[currentTopicIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentTopicIndex > 0) {
      setActiveTopicId(allTopics[currentTopicIndex - 1].id);
    }
  };

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const totalCount = allTopics.length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenMiniProject={() => setActiveTopicId('mod10-capstone-project')}
        completedCount={completedCount}
        totalCount={totalCount}
        onResetProgress={resetProgress}
        language={language}
        onToggleLanguage={toggleLanguage}
      />

      {/* Main Body Split */}
      <div className="flex-1 flex w-full">
        {/* Sidebar */}
        <Sidebar
          modules={allModules}
          activeTopicId={activeTopicId}
          onSelectTopic={(id) => setActiveTopicId(id)}
          completedTopics={completedTopics}
          onToggleComplete={toggleComplete}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          language={language}
        />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          {/* Top Progress bar preview on mobile/tablet */}
          <div className="max-w-4xl mx-auto pt-4 px-4 sm:px-8">
            <ProgressBar completedCount={completedCount} totalCount={totalCount} language={language} />
          </div>

          <ErrorBoundary key={activeTopicId}>
            <TopicContent
              topic={currentTopic}
              isCompleted={!!completedTopics[currentTopic?.id]}
              onToggleComplete={toggleComplete}
              onPrev={handlePrev}
              onNext={handleNext}
              hasPrev={currentTopicIndex > 0}
              hasNext={currentTopicIndex < allTopics.length - 1}
              language={language}
            />
          </ErrorBoundary>

          {/* Footer note */}
          <footer className="max-w-4xl mx-auto py-8 px-4 text-center border-t border-slate-800/80 text-xs text-slate-500 font-bengali space-y-1">
            <p>
              {language === 'bn'
                ? 'React & Next.js Industry Mastery Guide • তৈরি করা হয়েছে কলকাতায় বাংলা ভাষায় মনন ও যত্নের সাথে।'
                : 'React & Next.js Industry Mastery Guide • Crafted with love in Kolkata (Bilingual Edition).'}
            </p>
            <p className="font-mono text-[11px] text-slate-600">Zero AI Needed • Full Industry Experienced Curriculum</p>
          </footer>
        </main>
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        topics={allTopics}
        onSelectTopic={(id) => setActiveTopicId(id)}
        language={language}
      />

      {/* Quick CheatSheet Modal */}
      <QuickCheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
        language={language}
      />
    </div>
  );
}
