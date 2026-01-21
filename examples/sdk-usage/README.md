# Programmatic SDK Usage

For programmatic access to the SecureLend MCP server, we provide official client libraries (SDKs) in a separate repository.

**SDK Repository:** [`github.com/SecureLend/sdk`](https://github.com/SecureLend/sdk)

The SDK repository contains libraries for:
- TypeScript/JavaScript
- React
- Python (coming soon)

Please refer to the SDK repository for installation instructions, documentation, and usage examples.

### Example (TypeScript)

```typescript
import { SecureLendMCP } from '@securelend/sdk';

const client = new SecureLendMCP();
const loans = await client.compareBusinessLoans({
  loanAmount: 200000,
  purpose: 'equipment',
  annualRevenue: 1200000
});
```
