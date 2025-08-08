import { Button } from "@/components/ui/button";
import { Github, ExternalLink, MessageSquare, BarChart3, Wand2 } from "lucide-react";

export default function ExamplesSection() {
  return (
    <section id="examples" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Example Applications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">See Sheikh AI Suite in action with real-world examples</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Next.js Chat App */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 flex items-center justify-center relative">
              <div className="w-full max-w-xs">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-3 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-20"></div>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="h-2 bg-gray-100 dark:bg-gray-600 rounded w-full"></div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-600 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="bg-sheikh-blue rounded-lg p-3 ml-8">
                  <div className="space-y-1">
                    <div className="h-2 bg-blue-400 rounded w-full"></div>
                    <div className="h-2 bg-blue-400 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Next.js Chat Interface</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete chat application with streaming responses, message history, and real-time AI interactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Next.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Tailwind</span>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  data-testid="button-view-chat-code"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  data-testid="button-chat-demo"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Code Analysis Tool */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 flex items-center justify-center">
              <div className="w-full max-w-xs bg-gray-900 dark:bg-black rounded-lg p-3 text-green-400 font-mono text-xs">
                <div className="mb-2 text-gray-400"># Code Analysis Report</div>
                <div className="space-y-1">
                  <div>✓ Components: 12 analyzed</div>
                  <div>⚠ Issues found: 3</div>
                  <div>💡 Suggestions: 8</div>
                  <div className="text-green-300">⚡ Performance: 94/100</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <BarChart3 className="h-5 w-5 text-purple-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Code Analysis Dashboard</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI-powered code review and analysis tool that provides insights, suggestions, and performance metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Node.js</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">AST Parser</span>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  data-testid="button-view-analysis-code"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  data-testid="button-analysis-demo"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Component Generator */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 flex items-center justify-center">
              <div className="w-full max-w-xs">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-3 border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <div className="text-center">
                    <Wand2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 dark:text-gray-400">Component Generator</div>
                    <div className="text-xs text-gray-400 mt-1">Prompt → Code</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <Wand2 className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Component Generator</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transform natural language descriptions into production-ready React components with styling and tests.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">GenAI Script</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Testing</span>
              </div>
              <div className="flex space-x-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  data-testid="button-view-generator-code"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  data-testid="button-generator-demo"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
