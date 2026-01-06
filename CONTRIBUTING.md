# Contributing to MCP Financial Services

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

Be respectful, inclusive, and professional. We're building infrastructure for the financial services industry.

## How to Contribute

### Reporting Bugs

1. Check existing issues first
2. Use the bug report template
3. Include reproduction steps
4. Provide error messages and logs

### Suggesting Features

1. Check existing feature requests
2. Explain the use case
3. Describe expected behavior
4. Consider backward compatibility

### Submitting Code

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for your changes
4. Ensure all tests pass (`npm test`)
5. Update documentation
6. Commit with clear messages (`git commit -m 'Add amazing feature'`)
7. Push to your fork (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/mcp-financial-services.git
cd mcp-financial-services

# Add upstream remote
git remote add upstream https://github.com/securelend/mcp-financial-services.git

# Install dependencies
npm install

# Build packages
npm run build

# Run tests
npm test

# Start development mode
npm run dev
```

## Project Structure

- `schemas/` - JSON schemas (modify carefully, breaking changes affect everyone)
- `packages/core/` - Main SDK
- `packages/react/` - React hooks
- `integrations/` - Third-party integrations
- `examples/` - Example applications
- `docs/` - Documentation

## Testing
```bash
# Run all tests
npm test

# Run specific package tests
npm test -w @securelend/sdk

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch
```

## Documentation

- Update README.md for user-facing changes
- Add JSDoc comments to public APIs
- Update TypeScript types
- Add examples for new features

## Schema Changes

Schema changes are **breaking changes** and require:

1. Discussion in an issue first
2. Backward compatibility plan
3. Migration guide
4. Version bump (major version)

## Pull Request Process

1. Update CHANGELOG.md
2. Ensure CI passes
3. Get approval from maintainer
4. Squash commits before merge

## Questions?

Open a [GitHub Discussion](https://github.com/securelend/mcp-financial-services/discussions) or join our [Discord](https://discord.gg/securelend).
