import React from 'react';

export class ErrorBoundary extends React.Component {
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

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="p-8 text-center text-white bg-black/50 rounded-2xl border border-red-500/30 m-4">
          <h3 className="text-xl font-bold text-red-400 mb-2">Section temporarily unavailable</h3>
          <p className="text-sm text-gray-400">Please refresh or explore the other sections.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
