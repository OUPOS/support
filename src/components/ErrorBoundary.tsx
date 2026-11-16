import React, { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  /** When this value changes (e.g. article id after client-side navigation), the boundary resets. */
  resetKey?: unknown;
  /** How many times to silently remount children before showing the fallback. */
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retries: number;
  attempt: number;
}

const isHarmlessDomCleanupError = (error: Error | null | undefined) =>
  !!error?.message &&
  (error.message.includes('removeChild') ||
    error.message.includes('The node to be removed is not a child') ||
    error.message.includes('insertBefore'));

export class ErrorBoundary extends Component<Props, State> {
  private retryTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, retries: 0, attempt: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const maxRetries = this.props.maxRetries ?? 1;
    // BlockNote/TipTap can throw during DOM swaps (view transitions, fast navigation).
    // These are usually transient: remount the children instead of leaving the
    // user stuck on an error screen.
    if (isHarmlessDomCleanupError(error) || this.state.retries < maxRetries) {
      if (!isHarmlessDomCleanupError(error)) {
        console.warn('[ErrorBoundary] retrying after error:', error);
      }
      this.retryTimer = setTimeout(() => {
        this.setState((s) => ({
          hasError: false,
          error: null,
          retries: isHarmlessDomCleanupError(error) ? s.retries : s.retries + 1,
          attempt: s.attempt + 1,
        }));
      }, 50);
      return;
    }
    console.error('Error caught by boundary:', error, errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    // The article island is persisted across Astro client-side navigations,
    // so without this an error on one article would stick to every later one.
    if (prevProps.resetKey !== this.props.resetKey && (this.state.hasError || this.state.retries > 0)) {
      if (this.retryTimer) clearTimeout(this.retryTimer);
      this.setState((s) => ({ hasError: false, error: null, retries: 0, attempt: s.attempt + 1 }));
    }
  }

  componentWillUnmount() {
    if (this.retryTimer) clearTimeout(this.retryTimer);
  }

  render() {
    if (this.state.hasError) {
      const exhausted = this.state.retries >= (this.props.maxRetries ?? 1) && !isHarmlessDomCleanupError(this.state.error);
      // While a retry is pending, render nothing to avoid flashing the fallback
      if (!exhausted) return null;
      return this.props.fallback ?? <div>Something went wrong.</div>;
    }

    return <React.Fragment key={this.state.attempt}>{this.props.children}</React.Fragment>;
  }
}
