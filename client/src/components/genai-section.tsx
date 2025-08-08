import { FileCode, ChartScatter, Settings, Zap } from "lucide-react";

export default function GenaiSection() {
  return (
    <section id="genai" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">GenAI Script Automation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Workspace-aware AI automation that transforms how you build software</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Advanced Automation Capabilities</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-sheikh-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCode className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Code Generation & Refactoring</h4>
                  <p className="text-gray-600 dark:text-gray-300">Generate entire components, refactor existing code, and maintain consistency across your codebase.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-sheikh-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <ChartScatter className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Repository Analysis</h4>
                  <p className="text-gray-600 dark:text-gray-300">Deep understanding of your project structure, dependencies, and coding patterns for context-aware assistance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">XML MDX Framework</h4>
                  <p className="text-gray-600 dark:text-gray-300">Structured prompt engineering with composable, reusable system prompt components.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Workflow Orchestration</h4>
                  <p className="text-gray-600 dark:text-gray-300">Chain multiple AI operations together for complex development workflows and automation pipelines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-gray-900 dark:bg-black rounded-xl p-6 shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">scaffold.genai.mjs</span>
            </div>
            <pre className="text-green-400 font-mono text-sm leading-relaxed overflow-x-auto">
              <code>
{`import { sheikh } from '@ai-sdk-likhon/sheikh';
import { system } from './system/system.json_schema_support.ts';

// AI-powered component scaffolding
export async function scaffoldComponent(prompt, options = {}) {
  const result = await streamText({
    model: sheikh('sheikh-1.5-lg'),
    system: system({
      role: 'senior_react_developer',
      outputFormat: 'typescript_component',
      includeTests: true
    }),
    prompt: \`Create a \${prompt} component with:
    - TypeScript interface definitions
    - Tailwind CSS styling
    - Jest test suite
    - Storybook documentation
    
    Project context: \${await analyzeWorkspace()}\`
  });
  
  return generateFiles(result);
}

// Usage: genai run scaffold "user profile card"`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
