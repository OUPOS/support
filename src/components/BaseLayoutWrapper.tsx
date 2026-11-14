import { type ReactNode } from 'react';

interface BaseLayoutWrapperProps {
  children: ReactNode;
  config?: any;
  projectId?: string;
  isDark?: boolean;
  aiChatOpen?: boolean;
  onAiChatToggle?: () => void;
}

export function BaseLayoutWrapper({ children }: BaseLayoutWrapperProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
