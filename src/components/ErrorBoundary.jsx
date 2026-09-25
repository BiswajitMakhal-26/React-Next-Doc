import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-2xl mx-auto my-12 p-6 rounded-2xl bg-rose-950/40 border border-rose-800 text-rose-200 text-center space-y-4 shadow-xl">
          <div className="w-12 h-12 mx-auto rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-sans">
              এই Topic টি Render করার সময় একটি ত্রুটি হয়েছে
            </h3>
            <p className="text-xs text-rose-300/80 mt-1 font-mono">
              {this.state.error?.message || 'Unknown render error'}
            </p>
          </div>
          <button
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition"
          >
            <RefreshCcw className="w-4 h-4" /> পুনরায় চেষ্টা করুন (Retry)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
