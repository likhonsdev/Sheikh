import { Button } from "@/components/ui/button";
import { Code, Github, User, LogOut } from "lucide-react";
import { Link } from "wouter";
import { useUser, useClerk, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Navigation() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
              <div className="w-8 h-8 bg-gradient-to-r from-sheikh-blue to-sheikh-purple rounded-lg flex items-center justify-center">
                <img 
                  src="@assets/IMG_4164_1754657267050.png" 
                  alt="Sheikh AI"
                  className="w-6 h-6 rounded" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Code className="text-white h-4 w-4 hidden" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Sheikh AI Suite</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/docs" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                data-testid="link-docs"
              >
                Documentation
              </Link>
              <Link 
                href="/api" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                data-testid="link-api"
              >
                API Reference
              </Link>
              <Link 
                href="/chat" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                data-testid="link-chat"
              >
                Chat
              </Link>
              <a 
                href="#examples" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                data-testid="link-examples"
              >
                Examples
              </a>
              <a 
                href="#genai" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                data-testid="link-genai"
              >
                GenAI Scripts
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/sheikh-ai/suite" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              data-testid="link-github"
            >
              <Github className="h-5 w-5" />
            </a>
            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Welcome, {user?.firstName || user?.username}!
                </span>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            ) : (
              <SignInButton mode="modal">
                <Button 
                  className="bg-sheikh-blue hover:bg-blue-600 text-white"
                  data-testid="button-sign-in"
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
