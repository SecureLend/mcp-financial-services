# MCP Financial Services

> **Open-source schemas, SDK, and MCP server for financial services comparison in AI assistants**

[![npm version](https://badge.fury.io/js/%40securelend%2Fsdk.svg)](https://www.npmjs.com/package/@securelend/sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)

The definitive infrastructure for financial services in AI assistants. This repository contains:

- 📋 **Standardized Schemas** - JSON schemas for loans, banking, credit cards, insurance
- 🛠️ **TypeScript SDK** - Production-ready client library
- ⚛️ **React Hooks** - Drop-in components for React applications
- 🔌 **MCP Server** - Reference implementation for Model Context Protocol
- 🐍 **Python SDK** - Coming soon
- 📚 **Integration Guides** - LangChain, LlamaIndex, Vercel AI SDK

## Quick Start

### Install SDK
```bash
npm install @securelend/sdk
```

### Compare Business Loans
```typescript
import { SecureLend } from '@securelend/sdk';

const securelend = new SecureLend('sk_test_...');

const loans = await securelend.loans.compare({
  amount: 200000,
  purpose: 'equipment',
  business: {
    revenue: 1200000,
    creditScore: 720,
    timeInBusiness: 36
  }
});

console.log(`Best rate: ${loans.offers[0].terms.interestRate.rate}%`);
```

## Features

### 🏦 **Financial Products**
- ✅ Business Loans (Term loans, SBA, LOC)
- ✅ Business Banking (Checking, Savings)
- ✅ Business Credit Cards
- 🔄 Insurance (Coming soon)
- 🔄 Merchant Services (Coming soon)

### 🎯 **Developer Experience**
- Full TypeScript support with detailed type definitions
- Automatic retries with exponential backoff
- Comprehensive error handling
- React hooks for easy integration
- Webhook support for real-time updates

### 🔌 **Integrations**
- LangChain tool integration
- LlamaIndex integration
- Vercel AI SDK compatibility
- Claude Desktop MCP server
- REST API for any language

## Repository Structure
```
mcp-financial-services/
├── schemas/              # JSON schemas for all financial products
├── packages/
│   ├── core/            # @securelend/sdk - Main SDK
│   ├── react/           # @securelend/react - React hooks
│   └── python/          # securelend-python - Python SDK
├── integrations/
│   ├── langchain/       # LangChain tools
│   ├── llamaindex/      # LlamaIndex integration
│   └── vercel-ai/       # Vercel AI SDK integration
├── examples/
│   ├── basic/           # Simple usage examples
│   ├── nextjs-app/      # Full Next.js application
│   └── express-api/     # Express.js API example
└── docs/                # Documentation site
```

## Documentation

- 📖 [Full Documentation](https://docs.securelend.ai)
- 🚀 [Quick Start Guide](./docs/getting-started.md)
- 📚 [API Reference](./docs/api-reference/)
- 💡 [Examples](./examples)
- 🏗️ [Schema Reference](./schemas/README.md)

## Why MCP Financial Services?

### For Developers
- **10 minutes to integrate** - Not 10 weeks building partnerships
- **One API** - Access multiple lenders, banks, card issuers
- **Type-safe** - Full TypeScript support
- **Production-ready** - Used by real applications

### For AI Applications
- **Native MCP support** - Works with Claude, ChatGPT
- **Conversational** - Designed for natural language queries
- **Real-time matching** - Instant comparison results
- **Smart ranking** - ML-powered approval predictions

### For the Ecosystem
- **Open schemas** - Help us build the standard
- **Extensible** - Add your own financial products
- **Well-tested** - Comprehensive test coverage
- **Community-driven** - We accept contributions

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Development Setup
```bash
# Clone the repository
git clone https://github.com/securelend/mcp-financial-services.git
cd mcp-financial-services

# Install dependencies
npm install

# Build all packages
npm run build

# Run tests
npm test

# Start development mode
npm run dev
```

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [@securelend/sdk](./packages/core) | ![npm](https://img.shields.io/npm/v/@securelend/sdk) | Core SDK for JavaScript/TypeScript |
| [@securelend/react](./packages/react) | ![npm](https://img.shields.io/npm/v/@securelend/react) | React hooks and components |
| [securelend-python](./packages/python) | ![PyPI](https://img.shields.io/pypi/v/securelend) | Python SDK (coming soon) |

## Roadmap

### Q1 2025
- [x] Core SDK (TypeScript)
- [x] Business Loans comparison
- [x] Business Banking comparison
- [x] Business Credit Cards comparison
- [x] React hooks
- [ ] LangChain integration
- [ ] Documentation site

### Q2 2025
- [ ] Python SDK
- [ ] Insurance comparison
- [ ] Merchant services comparison
- [ ] White-label MCP server
- [ ] GraphQL API

### Q3 2025
- [ ] Ruby SDK
- [ ] Go SDK
- [ ] Personal loan products
- [ ] Mortgage comparison
- [ ] Mobile SDKs (iOS/Android)

## Real-World Usage
```typescript
// Embedded in AI chatbot
const agent = await initializeAgent(tools, llm);
const response = await agent.call({
  input: "I need a $200k equipment loan for my restaurant"
});

// Next.js application
function LoanFinder() {
  const { offers, loading } = useLoans({
    client: securelend,
    autoFetch: true,
    request: { amount: 200000, purpose: 'equipment' }
  });
  
  return <div>{offers.map(offer => <LoanCard offer={offer} />)}</div>;
}

// Express.js API
app.post('/api/loans/search', async (req, res) => {
  const offers = await securelend.loans.compare(req.body);
  res.json(offers);
});
```

## Community

- 💬 [Discord Server](https://discord.gg/securelend)
- 🐦 [Twitter](https://twitter.com/securelend)
- 📧 [Email](mailto:developers@securelend.ai)
- 📝 [Blog](https://securelend.ai/blog)

## License

MIT © [SecureLend](https://securelend.ai)

---

**Built with ❤️ by the SecureLend team**

[Get API Key](https://securelend.ai/signup) • [Documentation](https://docs.securelend.ai) • [Examples](./examples) • [Contributing](./CONTRIBUTING.md)
