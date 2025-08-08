import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ResponseProps {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
}

export function Response({ children, className, isLoading }: ResponseProps) {
  if (isLoading) {
    return (
      <div 
        className={cn("flex items-center gap-2", className)}
        data-testid="response-loading"
      >
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-sheikh-blue rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-sheikh-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-sheikh-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">Sheikh AI is thinking...</span>
      </div>
    );
  }

  return (
    <div 
      className={cn("prose prose-sm dark:prose-invert max-w-none", className)}
      data-testid="response-content"
    >
      {typeof children === 'string' ? (
        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
          {children}
        </pre>
      ) : (
        children
      )}
    </div>
  );
}