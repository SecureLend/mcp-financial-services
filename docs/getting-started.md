# Getting Started with SecureLend MCP

This guide explains how to connect your AI assistant to the SecureLend MCP server.

## Connecting to the MCP Server

You can connect to the production MCP server for financial services comparison.

### Claude Desktop
Add to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "securelend": {
      "url": "https://mcp.dev.securelend.ai/mcp"
    }
  }
}
```

### ChatGPT
Search "SecureLend Financial Services" in the GPT store.

## Programmatic Access

For direct API access and building client applications, please refer to our official SDKs.
- **[SecureLend SDK Repository](https://github.com/SecureLend/sdk)**

The SDKs provide type-safe clients to interact with all the available tools programmatically.

## Next Steps

- Explore the [Tool Reference](./api-reference.md) to see all available financial tools.
- Review the [JSON Schemas](../schemas/README.md) that define the data structures for our financial products.
- See the main [README.md](../README.md) for more details on architecture and examples.
