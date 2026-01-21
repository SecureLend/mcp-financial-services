# Claude Desktop Setup

To connect Claude Desktop to the SecureLend MCP server, add the following configuration to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "securelend": {
      "url": "https://mcp.dev.securelend.ai/mcp"
    }
  }
}
```

Once configured, you can start using the SecureLend tools in your conversations with Claude.
