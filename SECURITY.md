# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Authentication

The majority of the comparison tools provided by this MCP server are read-only and do not require authentication.

Tools that involve submitting applications or user data (`get_offer`, `submit_documents`, etc.) may require OAuth 2.0 or an API key in a production environment, which would be configured at the client level. For the public server (`mcp.securelend.ai/mcp`), these tools operate in a sandboxed, read-only mode.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to security@securelend.ai.

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the issue
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue

## Disclosure Policy

We follow coordinated disclosure:

1. Report received and acknowledged
2. Issue confirmed and assessed
3. Fix developed and tested
4. Security advisory published
5. Fix released

## Comments

If you have suggestions on how this process could be improved, please submit a pull request.
