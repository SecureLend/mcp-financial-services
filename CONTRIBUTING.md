# Contributing to MCP Financial Services

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

Be respectful, inclusive, and professional. We're building infrastructure for the financial services industry. For SDK contributions, please see the [SDK repository](https://github.com/SecureLend/sdk).

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

## Project Structure

- `schemas/` - JSON schemas for all financial products. Changes here are considered breaking.
- `examples/` - Example client configurations and conversations.
- `docs/` - Integration guides and tool reference.

## Documentation

- Update `README.md` for user-facing changes.
- Add or update examples for new features.

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
