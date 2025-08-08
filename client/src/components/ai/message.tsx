import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, Bot, Sparkles } from 'lucide-react';

interface MessageProps {
  from: 'user' | 'assistant' | 'system';
  children: ReactNode;
  className?: string;
  avatar?: string;
  name?: string;
}

export function Message({ from, children, className, avatar, name }: MessageProps) {
  const isUser = from === 'user';
  const isAssistant = from === 'assistant';
  
  return (
    <div 
      className={cn(
        "flex gap-3 max-w-full",
        isUser ? "justify-end" : "justify-start",
        className
      )}
      data-testid={`message-${from}`}
    >
      {!isUser && (
        <div className="flex-shrink-0">
          <Avatar className="w-8 h-8">
            {avatar && <AvatarImage src={avatar} />}
            <AvatarFallback className={cn(
              "text-white",
              isAssistant 
                ? "bg-gradient-to-br from-sheikh-blue to-sheikh-purple" 
                : "bg-gray-500"
            )}>
              {isAssistant ? (
                <Sparkles className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </AvatarFallback>
          </Avatar>
        </div>
      )}
      
      <div className={cn(
        "flex flex-col gap-1 max-w-[80%]",
        isUser && "items-end"
      )}>
        {name && (
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 px-1">
            {name}
          </span>
        )}
        <div className={cn(
          "rounded-lg px-4 py-3",
          isUser 
            ? "bg-gradient-to-br from-sheikh-blue to-sheikh-purple text-white" 
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
        )}>
          {children}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0">
          <Avatar className="w-8 h-8">
            {avatar && <AvatarImage src={avatar} />}
            <AvatarFallback className="bg-gray-600">
              <User className="w-4 h-4 text-white" />
            </AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
}

interface MessageContentProps {
  children: ReactNode;
  className?: string;
}

export function MessageContent({ children, className }: MessageContentProps) {
  return (
    <div 
      className={cn("break-words", className)}
      data-testid="message-content"
    >
      {children}
    </div>
  );
}