import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book, Code, FileText, Zap, ArrowRight } from "lucide-react";

export default function Docs() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sheikh AI Suite Documentation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Everything you need to build AI-native applications with Sheikh AI Suite. 
              From quick start guides to advanced automation patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-sheikh-blue hover:bg-blue-600 text-white px-6 py-3"
                data-testid="button-quick-start-guide"
              >
                Quick Start Guide
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3"
                data-testid="button-api-reference"
              >
                API Reference
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Main Documentation Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Documentation</h3>
                <nav className="space-y-2">
                  <a href="#getting-started" className="flex items-center text-sm text-sheikh-blue hover:text-blue-600 py-2" data-testid="nav-getting-started">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Getting Started
                  </a>
                  <a href="#installation" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2" data-testid="nav-installation">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Installation
                  </a>
                  <a href="#sheikh-api" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2" data-testid="nav-sheikh-api">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Sheikh API
                  </a>
                  <a href="#sdk-usage" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2" data-testid="nav-sdk-usage">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    SDK Usage
                  </a>
                  <a href="#genai-scripts" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2" data-testid="nav-genai-scripts">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    GenAI Scripts
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {/* Getting Started */}
                <div id="getting-started" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Getting Started with Sheikh AI Suite</h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Sheikh AI Suite is a comprehensive AI development ecosystem that provides three core pillars: 
                    the Sheikh API for high-performance language models, the SDK for seamless integration, 
                    and GenAI Scripts for advanced automation.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="w-8 h-8 bg-sheikh-blue rounded-lg flex items-center justify-center mb-2">
                          <Code className="h-4 w-4 text-white" />
                        </div>
                        <CardTitle className="text-sm">The Core</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Sheikh API with production-ready performance
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="w-8 h-8 bg-sheikh-purple rounded-lg flex items-center justify-center mb-2">
                          <Book className="h-4 w-4 text-white" />
                        </div>
                        <CardTitle className="text-sm">The Bridge</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          TypeScript SDK for seamless integration
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                          <Zap className="h-4 w-4 text-white" />
                        </div>
                        <CardTitle className="text-sm">The Accelerator</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          GenAI Scripts for workflow automation
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" id="installation">Installation</h3>
                  
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      npm install @ai-sdk-likhon/sheikh
                    </code>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    For more advanced features and automation capabilities:
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      npm install -g genaiscript
                    </code>
                  </div>
                </div>

                {/* Sheikh API Section */}
                <div id="sheikh-api" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sheikh API</h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The Sheikh API is the foundation of the AI Suite, providing high-performance language models 
                    with framework-aware intelligence designed for production environments.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available Models</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <code className="text-sm font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">sheikh-1.5-lg</code>
                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Recommended</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Large language model optimized for code generation and complex reasoning tasks.
                      </p>
                    </div>

                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <code className="text-sm font-mono bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">sheikh-1.5-md</code>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Balanced</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Medium model with excellent performance-to-cost ratio for most applications.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Authentication</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    All API requests require authentication using your Sheikh API key:
                  </p>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`export SHEIKH_API_KEY=your_api_key_here
# or set in your .env file
SHEIKH_API_KEY=your_api_key_here`}
                    </pre>
                  </div>
                </div>

                {/* SDK Usage Section */}
                <div id="sdk-usage" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">SDK Usage</h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The Sheikh SDK provides a clean, TypeScript-first interface for interacting with Sheikh AI models. 
                    It's built on top of the AI SDK framework for maximum compatibility.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Usage</h3>
                  
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`import { sheikh } from '@ai-sdk-likhon/sheikh';
import { streamText } from 'ai';

const result = await streamText({
  model: sheikh('sheikh-1.5-lg'),
  prompt: 'Explain the concept of recursion in programming',
  maxTokens: 1000,
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}`}
                    </pre>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Configuration Options</h3>
                  
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`const model = sheikh('sheikh-1.5-lg', {
  apiKey: process.env.SHEIKH_API_KEY, // Optional if set in env
  maxTokens: 2048,                    // Maximum tokens to generate
  temperature: 0.7,                   // Creativity level (0-1)
  topP: 0.9,                         // Nucleus sampling
});`}
                    </pre>
                  </div>
                </div>

                {/* GenAI Scripts Section */}
                <div id="genai-scripts" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">GenAI Scripts</h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    GenAI Scripts provide workspace-aware AI automation that can understand your project structure, 
                    generate code, refactor existing files, and orchestrate complex development workflows.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Getting Started with Scripts</h3>
                  
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-6">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`# Create a new GenAI script project
mkdir my-ai-project && cd my-ai-project
genai init

# Configure Sheikh provider
echo "model: sheikh-1.5-lg" > genaiscript.config.yaml

# Run your first script
genai run summarize README.md`}
                    </pre>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Example: Component Generator</h3>
                  
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200">
{`// genaisrc/component-generator.genai.mjs
import { sheikh } from '@ai-sdk-likhon/sheikh';

export default async function generateComponent(prompt) {
  const result = await streamText({
    model: sheikh('sheikh-1.5-lg'),
    system: "You are a senior React developer. Generate production-ready components with TypeScript, proper styling, and tests.",
    prompt: \`Generate a \${prompt} component with:
    - TypeScript interfaces
    - Tailwind CSS styling  
    - Jest test suite
    - Storybook stories
    
    Project context: \${await def("FILES", "**/*.tsx", { maxTokens: 1000 })}\`,
  });
  
  return result;
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
