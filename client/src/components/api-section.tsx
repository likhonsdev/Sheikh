import { Button } from "@/components/ui/button";

export default function ApiSection() {
  return (
    <section id="api" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Complete documentation for Sheikh AI Suite APIs</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* SDK Reference */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-900 dark:bg-black px-6 py-4 flex items-center justify-between">
              <h3 className="text-white font-medium">Sheikh SDK Reference</h3>
              <div className="flex space-x-2">
                <button 
                  className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded hover:bg-gray-600 transition-colors"
                  data-testid="button-typescript"
                >
                  TypeScript
                </button>
                <button 
                  className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded"
                  data-testid="button-javascript"
                >
                  JavaScript
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Installation</h4>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">npm install @ai-sdk-likhon/sheikh</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Basic Usage</h4>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      <code>
{`import { sheikh } from '@ai-sdk-likhon/sheikh';

const model = sheikh('sheikh-1.5-lg', {
  apiKey: process.env.SHEIKH_API_KEY,
  maxTokens: 2048
});`}
                      </code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Stream Text</h4>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      <code>
{`const result = await streamText({
  model: sheikh('sheikh-1.5-lg'),
  prompt: 'Write a React component'
});`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-900 dark:bg-black px-6 py-4">
              <h3 className="text-white font-medium">REST API Endpoints</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">POST</span>
                    <code className="text-sm font-mono">/v1/chat/completions</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Create a chat completion with streaming support</p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">GET</span>
                    <code className="text-sm font-mono">/v1/models</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">List available Sheikh AI models</p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">POST</span>
                    <code className="text-sm font-mono">/v1/embeddings</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generate text embeddings for semantic search</p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">POST</span>
                    <code className="text-sm font-mono">/v1/code/analyze</code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analyze code structure and generate suggestions</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button 
                  className="w-full bg-sheikh-blue hover:bg-blue-600 text-white py-2"
                  data-testid="button-full-api-docs"
                >
                  View Full API Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
