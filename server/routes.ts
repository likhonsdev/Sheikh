import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Sheikh AI Suite API Routes
  
  // OpenAPI specification endpoint
  app.get("/api/openapi.json", (req, res) => {
    const openApiSpec = {
      openapi: "3.0.0",
      info: {
        title: "Sheikh AI Suite API",
        description: "Complete REST API for Sheikh AI Suite - AI-native development platform",
        version: "1.5.0",
        contact: {
          name: "Sheikh AI Support",
          url: "https://sheikh.ai/support",
          email: "support@sheikh.ai"
        }
      },
      servers: [
        {
          url: "https://api.sheikh.ai/v1",
          description: "Production server"
        },
        {
          url: "http://localhost:5000/api/v1",
          description: "Development server"
        }
      ],
      security: [
        {
          BearerAuth: []
        }
      ],
      paths: {
        "/models": {
          get: {
            summary: "List available models",
            description: "Retrieve a list of all available Sheikh AI models",
            responses: {
              "200": {
                description: "List of models",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        object: { type: "string", example: "list" },
                        data: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              id: { type: "string", example: "sheikh-1.5-lg" },
                              object: { type: "string", example: "model" },
                              created: { type: "integer", example: 1699000000 },
                              owned_by: { type: "string", example: "sheikh-ai" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/chat/completions": {
          post: {
            summary: "Create chat completion",
            description: "Generate AI responses for chat conversations with optional streaming",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    required: ["model", "messages"],
                    properties: {
                      model: { 
                        type: "string", 
                        enum: ["sheikh-1.5-lg", "sheikh-1.5-md"],
                        example: "sheikh-1.5-lg" 
                      },
                      messages: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            role: { type: "string", enum: ["system", "user", "assistant"] },
                            content: { type: "string" }
                          }
                        }
                      },
                      max_tokens: { type: "integer", maximum: 8192, example: 1000 },
                      temperature: { type: "number", minimum: 0, maximum: 2, example: 0.7 },
                      top_p: { type: "number", minimum: 0, maximum: 1, example: 0.9 },
                      stream: { type: "boolean", example: false }
                    }
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Chat completion response",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        object: { type: "string", example: "chat.completion" },
                        created: { type: "integer" },
                        model: { type: "string" },
                        choices: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              index: { type: "integer" },
                              message: {
                                type: "object",
                                properties: {
                                  role: { type: "string" },
                                  content: { type: "string" }
                                }
                              },
                              finish_reason: { type: "string" }
                            }
                          }
                        },
                        usage: {
                          type: "object",
                          properties: {
                            prompt_tokens: { type: "integer" },
                            completion_tokens: { type: "integer" },
                            total_tokens: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/embeddings": {
          post: {
            summary: "Create embeddings",
            description: "Generate vector embeddings for text input",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    required: ["model", "input"],
                    properties: {
                      model: { type: "string", example: "sheikh-embed-v1" },
                      input: { 
                        oneOf: [
                          { type: "string" },
                          { type: "array", items: { type: "string" } }
                        ]
                      }
                    }
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Embeddings response",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        object: { type: "string", example: "list" },
                        data: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              object: { type: "string", example: "embedding" },
                              embedding: { 
                                type: "array", 
                                items: { type: "number" },
                                example: [0.002, -0.009, 0.018]
                              },
                              index: { type: "integer" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/code/analyze": {
          post: {
            summary: "Analyze code",
            description: "Perform AI-powered static analysis on code",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    required: ["language", "code"],
                    properties: {
                      language: { 
                        type: "string", 
                        enum: ["javascript", "typescript", "python", "java", "go", "rust"],
                        example: "typescript" 
                      },
                      code: { type: "string" },
                      analysis_type: {
                        type: "array",
                        items: { 
                          type: "string",
                          enum: ["performance", "security", "best_practices", "complexity"]
                        }
                      }
                    }
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Code analysis results",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        analysis_id: { type: "string" },
                        language: { type: "string" },
                        issues: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              type: { type: "string" },
                              severity: { type: "string", enum: ["low", "medium", "high", "critical"] },
                              line: { type: "integer" },
                              message: { type: "string" },
                              suggestion: { type: "string" }
                            }
                          }
                        },
                        metrics: {
                          type: "object",
                          properties: {
                            complexity: { type: "integer" },
                            maintainability: { type: "integer" },
                            performance_score: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            description: "Enter your Sheikh API key (sk-sheikh_...)"
          }
        }
      }
    };
    
    res.json(openApiSpec);
  });

  // Mock API endpoints for demonstration
  app.get("/api/v1/models", (req, res) => {
    res.json({
      object: "list",
      data: [
        {
          id: "sheikh-1.5-lg",
          object: "model",
          created: 1699000000,
          owned_by: "sheikh-ai",
          capabilities: ["chat", "completion", "code"],
          context_window: 128000,
          max_output: 8192
        },
        {
          id: "sheikh-1.5-md", 
          object: "model",
          created: 1699000000,
          owned_by: "sheikh-ai",
          capabilities: ["chat", "completion"],
          context_window: 64000,
          max_output: 4096
        },
        {
          id: "sheikh-embed-v1",
          object: "model", 
          created: 1699000000,
          owned_by: "sheikh-ai",
          capabilities: ["embeddings"],
          dimensions: 1536
        }
      ]
    });
  });

  app.post("/api/v1/chat/completions", (req, res) => {
    const { model, messages, stream = false } = req.body;
    
    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      
      const chunks = [
        "Hello! I'm", " Sheikh AI", ", your", " intelligent", " assistant.", " How can", " I help", " you today?"
      ];
      
      chunks.forEach((chunk, index) => {
        setTimeout(() => {
          const data = {
            id: "chatcmpl-sheikh-123",
            object: "chat.completion.chunk",
            created: Date.now(),
            model,
            choices: [{
              index: 0,
              delta: { content: chunk },
              finish_reason: index === chunks.length - 1 ? "stop" : null
            }]
          };
          res.write(`data: ${JSON.stringify(data)}\n\n`);
          
          if (index === chunks.length - 1) {
            res.write('data: [DONE]\n\n');
            res.end();
          }
        }, index * 100);
      });
    } else {
      res.json({
        id: "chatcmpl-sheikh-123",
        object: "chat.completion",
        created: Date.now(),
        model,
        choices: [{
          index: 0,
          message: {
            role: "assistant",
            content: "Hello! I'm Sheikh AI, your intelligent assistant. How can I help you today?"
          },
          finish_reason: "stop"
        }],
        usage: {
          prompt_tokens: 25,
          completion_tokens: 15,
          total_tokens: 40
        }
      });
    }
  });

  app.post("/api/v1/embeddings", (req, res) => {
    const { model, input } = req.body;
    const inputs = Array.isArray(input) ? input : [input];
    
    const data = inputs.map((text, index) => ({
      object: "embedding",
      embedding: Array.from({ length: 1536 }, () => Math.random() * 2 - 1),
      index
    }));
    
    res.json({
      object: "list",
      data,
      model,
      usage: {
        prompt_tokens: inputs.join(' ').split(' ').length,
        total_tokens: inputs.join(' ').split(' ').length
      }
    });
  });

  app.post("/api/v1/code/analyze", (req, res) => {
    const { language, code, analysis_type = ["performance", "security", "best_practices"] } = req.body;
    
    res.json({
      analysis_id: "analysis-sheikh-" + Math.random().toString(36).substr(2, 9),
      language,
      issues: [
        {
          type: "performance",
          severity: "medium",
          line: 1,
          message: "Consider optimizing this function for better performance",
          suggestion: "Use memoization or caching for repeated calculations"
        },
        {
          type: "security",
          severity: "low", 
          line: 5,
          message: "Potential security vulnerability detected",
          suggestion: "Validate input parameters before processing"
        }
      ],
      metrics: {
        complexity: Math.floor(Math.random() * 20) + 1,
        maintainability: Math.floor(Math.random() * 40) + 60,
        performance_score: Math.floor(Math.random() * 30) + 70
      },
      suggestions: [
        {
          type: "optimization",
          description: "Consider using async/await pattern for better readability",
          impact: "Improves code maintainability and error handling"
        }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
