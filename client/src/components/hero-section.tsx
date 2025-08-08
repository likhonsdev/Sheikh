import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI-Native Development<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sheikh-blue to-sheikh-purple">
              Engineered for Production
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            The complete AI development ecosystem. From powerful language models to automated code generation, 
            Sheikh AI Suite transforms how you build with artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-sheikh-blue hover:bg-blue-600 text-white px-8 py-3 text-lg"
              data-testid="button-start-building"
            >
              Start Building
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 text-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              data-testid="button-view-docs"
            >
              View Documentation
            </Button>
          </div>
        </div>
        
        {/* Code Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-900 dark:bg-black rounded-xl p-6 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">Quick Start Example</span>
            </div>
            <pre className="text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>
{`import { sheikh } from '@ai-sdk-likhon/sheikh';
import { streamText } from 'ai';

const result = await streamText({
  model: sheikh('sheikh-1.5-lg'),
  prompt: 'Generate a TypeScript component for user authentication'
});

// AI-powered code generation in production ✨`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
