# Sheikh-1.5: XML MDX System Prompt Framework

*The Complete AI Development Ecosystem Documentation*

---

## 🎯 Executive Summary

Sheikh AI Suite represents the next evolution in AI-native development, providing a comprehensive ecosystem that treats artificial intelligence as a first-class engineering discipline. This document outlines the complete technical blueprint, implementation strategy, and architectural vision for the most advanced AI development platform ever created.

### Core Philosophy: Prompts are code. Engineer them accordingly.

This principle transforms prompt engineering from an art to a structured engineering discipline with:
- **Modularity**: Reusable prompt components
- **Type Safety**: Full TypeScript integration
- **Composability**: Complex systems from simple parts
- **Testability**: Predictable, measurable AI behavior

---

## 🏗️ Three Pillars Architecture

The Sheikh AI Suite is built on three foundational pillars designed to provide a seamless, end-to-end development experience.

### 1. The Core: Sheikh API
**High-performance language models with framework-aware intelligence**

- **Production-Ready Performance**: Sub-second response times with 99.9% uptime SLA
- **Framework-Aware Intelligence**: Deep understanding of React, TypeScript, Node.js, and modern web architectures
- **Advanced Reasoning**: Multi-step problem solving with contextual memory
- **Scalable Infrastructure**: Auto-scaling API infrastructure handling millions of requests

**Available Models:**
- `sheikh-1.5-lg`: 128k context, 8k max output - Advanced reasoning and code generation
- `sheikh-1.5-md`: 64k context, 4k max output - Balanced performance for production workloads
- `sheikh-embed-v1`: 1536-dimension embeddings for semantic search

### 2. The Bridge: @ai-sdk-likhon/sheikh
**TypeScript-first SDK for seamless integration**

```typescript
import { sheikh } from '@ai-sdk-likhon/sheikh';
import { streamText } from 'ai';

// One-line integration with full type safety
const result = await streamText({
  model: sheikh('sheikh-1.5-lg', {
    apiKey: process.env.SHEIKH_API_KEY,
    maxTokens: 2048,
    temperature: 0.7
  }),
  prompt: 'Generate a TypeScript interface for user authentication'
});
```

### 3. The Accelerator: GenAIScript Automation
**Workspace-aware code generation and refactoring**

The Accelerator layer brings repository-aware automation and self-refactoring capabilities, allowing the AI to perform complex tasks directly within your codebase.

---

## 🚀 The XML MDX System Prompt Framework

At the heart of the Sheikh AI Suite is a powerful framework for defining and composing AI instructions.

### 1. XML-Like Semantic Structure
- Clear semantic tags (`<instructions>`, `<context>`, `<examples>`) for machine-readable hierarchy.
- Composable and nestable components for building complex prompts.

### 2. MDX/TSX Dynamic Composition
- Define prompts as TypeScript-native (TSX) components.
- Create reusable, parameterized system prompts that can be generated programmatically.

### 3. The `system()` API
- A dedicated API for creating self-contained, modular prompt scripts.
- Supports parameter injection, validation, and modular composition patterns.

---

## ✨ Advanced Capabilities

- **Sheikh API Integration**: Full compatibility with `sheikh-1.5-md/lg` models.
- **Production Deployment**: Complete Next.js integration with robust error handling.
- **Performance Optimization**: Advanced caching strategies and token efficiency.
- **Composable Architecture**: Orchestrate multiple system prompts to handle complex workflows.

---

## 💡 What Makes This Powerful

- **Beyond Chat Interfaces**: A focus on repository-aware automation and self-refactoring systems.
- **Developer-First Design**: One-line integration with full TypeScript support.
- **Production Ready**: Built-in error handling, rate limiting, and monitoring.
- **Extensible Framework**: An open architecture designed for community contributions.

---

## 🗺️ Project Blueprint

### Project Structure
A detailed monorepo organization with a clear separation of concerns between the Core API, Bridge SDK, and Accelerator.

### Implementation Roadmap
A 5-phase development plan, from foundational API development to a full community launch.

### Technical Excellence
A commitment to production-ready standards, including comprehensive testing, documentation, and CI/CD.
