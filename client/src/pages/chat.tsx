import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, Send } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'sheikh-1.5-lg',
          messages: [...messages, userMessage],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant' as const,
        content: data.choices[0].message.content,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        role: 'assistant' as const,
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-sheikh-blue to-sheikh-purple rounded-xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Sheikh AI Chat
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the power of Sheikh AI with our intelligent conversation interface. 
              Ask questions, generate code, or explore AI capabilities.
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="h-[600px] flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sheikh-blue to-sheikh-purple rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Sheikh AI Assistant</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Powered by sheikh-1.5-lg</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Start a conversation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Try asking about code generation, best practices, or any technical questions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-md mx-auto">
                    <Button
                      variant="outline"
                      className="h-auto p-4 text-left"
                      onClick={() => setInput("Generate a TypeScript interface for user authentication")}
                      data-testid="button-example-interface"
                    >
                      <div>
                        <div className="font-medium">Code Generation</div>
                        <div className="text-sm text-gray-500">Generate TypeScript interfaces</div>
                      </div>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto p-4 text-left"
                      onClick={() => setInput("Explain React best practices for state management")}
                      data-testid="button-example-react"
                    >
                      <div>
                        <div className="font-medium">Best Practices</div>
                        <div className="text-sm text-gray-500">Learn React patterns</div>
                      </div>
                    </Button>
                  </div>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    data-testid={`message-${message.role}-${index}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-sheikh-blue to-sheikh-purple text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <pre className="whitespace-pre-wrap font-sans">{message.content}</pre>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Sheikh AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-3">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Sheikh AI anything about development, coding, or technical questions..."
                  className="flex-1 resize-none min-h-[44px] max-h-32 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-sheikh-blue focus:border-transparent"
                  rows={1}
                  data-testid="input-chat-message"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3 bg-gradient-to-r from-sheikh-blue to-sheikh-purple hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                  data-testid="button-send-message"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Intelligent Conversations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engage in natural conversations with advanced context understanding and memory.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Code Generation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Generate, review, and optimize code across multiple programming languages.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-xl flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Responses</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant, accurate responses powered by Sheikh's advanced language models.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}