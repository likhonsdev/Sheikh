import { Button } from "@/components/ui/button";
import { Rocket, Book, Code, GraduationCap } from "lucide-react";

export default function DocumentationSection() {
  return (
    <section id="docs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Documentation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Everything you need to get started and scale with Sheikh AI Suite</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            data-testid="card-quick-start"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="text-white h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Start</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get up and running in minutes with our step-by-step guide</p>
          </div>

          <div 
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            data-testid="card-api-reference"
          >
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Book className="text-white h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">API Reference</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Complete reference for all endpoints and SDK methods</p>
          </div>

          <div 
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            data-testid="card-code-examples"
          >
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-white h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Code Examples</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Real-world examples and implementation patterns</p>
          </div>

          <div 
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            data-testid="card-tutorials"
          >
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-white h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tutorials</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">In-depth tutorials for advanced use cases</p>
          </div>
        </div>

        {/* Getting Started Card */}
        <div className="mt-12 bg-gradient-to-r from-sheikh-blue to-sheikh-purple rounded-xl p-8 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Ready to build the future?</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of developers using Sheikh AI Suite to create intelligent applications that adapt, learn, and scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-sheikh-blue hover:bg-gray-100 px-6 py-3 font-medium"
                data-testid="button-get-started-free"
              >
                Get Started for Free
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-3 font-medium"
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
