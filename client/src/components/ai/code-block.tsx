import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
  showCopy?: boolean;
}

export function CodeBlock({ children, language, className, showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={cn(
        "relative bg-gray-900 dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden",
        className
      )}
      data-testid="code-block"
    >
      {language && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
          <span className="text-xs font-medium text-gray-300">{language}</span>
          {showCopy && (
            <Button
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
              onClick={handleCopy}
              data-testid="button-copy-code"
            >
              {copied ? (
                <Check className="w-3 h-3" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          )}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm text-gray-100 font-mono">
        <code>{children}</code>
      </pre>
    </div>
  );
}