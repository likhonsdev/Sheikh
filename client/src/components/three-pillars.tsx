import { Server, Plug, Rocket, Check } from "lucide-react";

export default function ThreePillars() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Three Pillars of AI Development</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A complete ecosystem designed to treat AI development as a first-class engineering discipline
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Core API */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800/30">
            <div className="w-12 h-12 bg-sheikh-blue rounded-lg flex items-center justify-center mb-6">
              <Server className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Core</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Sheikh API delivers high-performance language models with framework-aware intelligence, 
              serving as the foundation for all AI-powered development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Production-ready performance
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Framework-aware responses
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Advanced reasoning capabilities
              </div>
            </div>
          </div>

          {/* Bridge SDK */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800/30">
            <div className="w-12 h-12 bg-sheikh-purple rounded-lg flex items-center justify-center mb-6">
              <Plug className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Bridge</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              @ai-sdk-likhon/sheikh provides ergonomic SDK integration, making AI power accessible 
              with clean, TypeScript-first developer experience.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                One-line integration
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Full TypeScript support
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Stream & batch processing
              </div>
            </div>
          </div>

          {/* Accelerator */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-xl border border-green-200 dark:border-green-800/30">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">The Accelerator</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              GenAIScript automation layer transforms conversational prompts into executable, 
              repository-aware actions for advanced workflow orchestration.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Workspace-aware automation
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                Self-refactoring systems
              </div>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <Check className="h-4 w-4 text-green-500 mr-2" />
                XML MDX prompt framework
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
