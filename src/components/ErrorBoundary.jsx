import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-white bg-red-950/90 rounded-2xl border border-red-500 m-4 font-mono text-xs text-left">
          <h3 className="text-base font-bold text-red-300 mb-2">Component Error:</h3>
          <p className="text-yellow-200 mb-2">{String(this.state.error?.message || this.state.error)}</p>
          <pre className="text-gray-300 whitespace-pre-wrap text-[11px] max-h-60 overflow-auto">{this.state.error?.stack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
