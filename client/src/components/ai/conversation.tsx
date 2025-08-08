import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ConversationProps {
  children: ReactNode;
  className?: string;
}

export function Conversation({ children, className }: ConversationProps) {
  return (
    <div 
      className={cn(
        "flex flex-col space-y-4 max-w-full",
        className
      )}
      data-testid="conversation-container"
    >
      {children}
    </div>
  );
}

interface ConversationContentProps {
  children: ReactNode;
  className?: string;
}

export function ConversationContent({ children, className }: ConversationContentProps) {
  return (
    <div 
      className={cn(
        "flex-1 overflow-y-auto space-y-4 px-4 py-2",
        className
      )}
      data-testid="conversation-content"
    >
      {children}
    </div>
  );
}