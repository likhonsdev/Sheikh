import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Code, Server, Zap } from "lucide-react";

export default function ApiDocs() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Sheikh AI API Reference
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Complete REST API documentation for Sheikh AI Suite. 
              Build powerful AI applications with our production-ready endpoints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-sheikh-blue hover:bg-blue-600 text-white px-6 py-3"
                data-testid="button-try-api"
              >
                Try the API
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3"
                data-testid="button-download-openapi"
              >
                Download OpenAPI Spec
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* API Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">API Reference</h3>
                <nav className="space-y-2">
                  <a href="#authentication" className="block text-sm text-sheikh-blue hover:text-blue-600 py-1" data-testid="nav-authentication">Authentication</a>
                  <a href="#models" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-1" data-testid="nav-models">Models</a>
                  <a href="#chat-completions" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-1" data-testid="nav-chat-completions">Chat Completions</a>
                  <a href="#embeddings" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-1" data-testid="nav-embeddings">Embeddings</a>
                  <a href="#code-analysis" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-1" data-testid="nav-code-analysis">Code Analysis</a>
                  <a href="#rate-limits" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-1" data-testid="nav-rate-limits">Rate Limits</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {/* Authentication */}
                <div id="authentication" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Authentication</h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    All API requests must include your API key in the Authorization header using Bearer authentication.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">API Key</h3>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                        Authorization: Bearer sk-sheikh_your_api_key_here
                      </code>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      You can find your API key in your Sheikh AI dashboard.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">Security Note</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Keep your API key secure and never expose it in client-side code. Use environment variables 
                      or secure key management systems in production.
                    </p>
                  </div>
                </div>

                {/* Models */}
                <div id="models" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Available Models</h2>
                  
                  <div className="grid gap-4 mb-6">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">sheikh-1.5-lg</CardTitle>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Recommended</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Our largest and most capable model, optimized for complex reasoning, code generation, and advanced problem-solving.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">Context Window:</span>
                            <p className="text-gray-600 dark:text-gray-400">128k tokens</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">Max Output:</span>
                            <p className="text-gray-600 dark:text-gray-400">8k tokens</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">sheikh-1.5-md</CardTitle>
                          <Badge variant="outline">Balanced</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Excellent performance-to-cost ratio, suitable for most applications requiring intelligent text generation.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">Context Window:</span>
                            <p className="text-gray-600 dark:text-gray-400">64k tokens</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">Max Output:</span>
                            <p className="text-gray-600 dark:text-gray-400">4k tokens</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">List Models</h3>
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">GET</Badge>
                      <code className="text-sm font-mono">/v1/models</code>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Retrieve a list of available models.</p>
                  </div>
                </div>

                {/* Chat Completions */}
                <div id="chat-completions" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Chat Completions</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">POST</Badge>
                      <code className="text-lg font-mono">/v1/chat/completions</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Create a chat completion, with optional streaming support for real-time responses.
                    </p>
                  </div>

                  <Tabs defaultValue="request" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="request" data-testid="tab-request">Request</TabsTrigger>
                      <TabsTrigger value="response" data-testid="tab-response">Response</TabsTrigger>
                      <TabsTrigger value="streaming" data-testid="tab-streaming">Streaming</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="request">
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`POST /v1/chat/completions
Content-Type: application/json
Authorization: Bearer sk-sheikh_your_api_key_here

{
  "model": "sheikh-1.5-lg",
  "messages": [
    {
      "role": "system", 
      "content": "You are a helpful AI assistant."
    },
    {
      "role": "user",
      "content": "Explain quantum computing in simple terms."
    }
  ],
  "max_tokens": 1000,
  "temperature": 0.7,
  "top_p": 0.9,
  "stream": false
}`}
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="response">
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`{
  "id": "chatcmpl-sheikh-123",
  "object": "chat.completion",
  "created": 1699000000,
  "model": "sheikh-1.5-lg",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Quantum computing is a revolutionary approach..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 25,
    "completion_tokens": 150,
    "total_tokens": 175
  }
}`}
                        </pre>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="streaming">
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                        <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Set stream: true in request body
# Server-Sent Events response:

data: {"id":"chatcmpl-sheikh-123","object":"chat.completion.chunk","choices":[{"delta":{"content":"Quantum"},"index":0}]}

data: {"id":"chatcmpl-sheikh-123","object":"chat.completion.chunk","choices":[{"delta":{"content":" computing"},"index":0}]}

data: {"id":"chatcmpl-sheikh-123","object":"chat.completion.chunk","choices":[{"delta":{"content":" is"},"index":0}]}

data: [DONE]`}
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Embeddings */}
                <div id="embeddings" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Embeddings</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">POST</Badge>
                      <code className="text-lg font-mono">/v1/embeddings</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Generate high-dimensional vector embeddings for text, suitable for semantic search and similarity comparisons.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`POST /v1/embeddings
Content-Type: application/json
Authorization: Bearer sk-sheikh_your_api_key_here

{
  "model": "sheikh-embed-v1",
  "input": "The quick brown fox jumps over the lazy dog"
}`}
                    </pre>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "embedding": [0.002, -0.009, 0.018, ...],
      "index": 0
    }
  ],
  "model": "sheikh-embed-v1",
  "usage": {
    "prompt_tokens": 10,
    "total_tokens": 10
  }
}`}
                    </pre>
                  </div>
                </div>

                {/* Code Analysis */}
                <div id="code-analysis" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Code Analysis</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">POST</Badge>
                      <code className="text-lg font-mono">/v1/code/analyze</code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Analyze code structure, identify issues, and generate optimization suggestions using AI-powered static analysis.
                    </p>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`POST /v1/code/analyze
Content-Type: application/json
Authorization: Bearer sk-sheikh_your_api_key_here

{
  "language": "typescript",
  "code": "function fibonacci(n: number): number {\\n  if (n <= 1) return n;\\n  return fibonacci(n-1) + fibonacci(n-2);\\n}",
  "analysis_type": ["performance", "security", "best_practices"]
}`}
                    </pre>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
{`{
  "analysis_id": "analysis-sheikh-456",
  "language": "typescript",
  "issues": [
    {
      "type": "performance",
      "severity": "high",
      "line": 3,
      "message": "Inefficient recursive implementation",
      "suggestion": "Consider using memoization or iterative approach"
    }
  ],
  "metrics": {
    "complexity": 8,
    "maintainability": 65,
    "performance_score": 45
  },
  "suggestions": [
    {
      "type": "optimization",
      "description": "Implement memoization to cache results",
      "impact": "Reduces time complexity from O(2^n) to O(n)"
    }
  ]
}`}
                    </pre>
                  </div>
                </div>

                {/* Rate Limits */}
                <div id="rate-limits" className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Rate Limits</h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    API requests are subject to rate limiting to ensure fair usage and maintain service quality.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Server className="h-5 w-5 mr-2 text-blue-500" />
                          Chat Completions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Free Tier:</span>
                            <span className="font-medium">3 RPM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Pro Tier:</span>
                            <span className="font-medium">60 RPM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Enterprise:</span>
                            <span className="font-medium">Custom</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Zap className="h-5 w-5 mr-2 text-purple-500" />
                          Embeddings
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Free Tier:</span>
                            <span className="font-medium">100 RPM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Pro Tier:</span>
                            <span className="font-medium">1,000 RPM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Enterprise:</span>
                            <span className="font-medium">Custom</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 dark:text-yellow-200 mb-2">Rate Limit Headers</h4>
                    <div className="text-sm text-yellow-800 dark:text-yellow-300 space-y-1">
                      <div><code>X-RateLimit-Limit</code>: Maximum requests per minute</div>
                      <div><code>X-RateLimit-Remaining</code>: Remaining requests in current window</div>
                      <div><code>X-RateLimit-Reset</code>: Time when rate limit resets (Unix timestamp)</div>
                    </div>
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
