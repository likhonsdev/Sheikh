import { Code } from "lucide-react";
import { SiX, SiGithub, SiDiscord, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-sheikh-blue to-sheikh-purple rounded-lg flex items-center justify-center">
                <Code className="text-white h-4 w-4" />
              </div>
              <span className="text-xl font-bold">Sheikh AI Suite</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The complete AI development ecosystem for building intelligent, production-ready applications.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-sheikh-api">Sheikh API</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-sdk">SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-genai-scripts">GenAI Scripts</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-documentation">Documentation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/docs" className="hover:text-white transition-colors" data-testid="link-docs">Documentation</a></li>
              <li><a href="#examples" className="hover:text-white transition-colors" data-testid="link-examples">Examples</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-tutorials">Tutorials</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-community">Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-help-center">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-status">Status</a></li>
              <li><a href="https://github.com/sheikh-ai/suite" className="hover:text-white transition-colors" data-testid="link-github">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Sheikh AI Suite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
              <SiX className="h-5 w-5" />
            </a>
            <a href="https://github.com/sheikh-ai/suite" className="text-gray-400 hover:text-white transition-colors" data-testid="link-github-footer">
              <SiGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-discord">
              <SiDiscord className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-linkedin">
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
