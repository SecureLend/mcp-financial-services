# SecureLend Financial Services - MCP Server

> **Production MCP server and standardized schemas for financial services comparison**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP Server](https://img.shields.io/badge/MCP-Server-blue.svg)](https://modelcontextprotocol.io)

This repository provides:

- 📋 **Standardized JSON schemas** for loans, banking, credit cards
- 🔌 **MCP server** at `https://mcp.securelend.ai/mcp` for Claude and ChatGPT
- 📚 **Integration documentation** and examples
- 🛠️ **20+ tools** for financial product comparison

**Looking for client libraries?** See [`@securelend/sdk`](https://github.com/SecureLend/sdk)

---

## 📹 Demo Videos

### Quick Start (2 min)

See SecureLend in action with ChatGPT:
https://github.com/user-attachments/assets/340b4ed8-0d47-41a0-aecd-599b887f3be7



## 🔌 Quick Connect

### Claude Desktop

1.  Go to [https://extensions.securelend.ai/](https://extensions.securelend.ai/)
2.  Download the `securelend.mcpb` file.
3.  In Claude Desktop, click "Install Extension" and select the downloaded file.

### ChatGPT

Search "SecureLend Financial Services" in the GPT store

### Programmatic Access

For direct API access, use our SDK:

```bash
pnpm install @securelend/sdk
```

See [SDK documentation](https://github.com/SecureLend/sdk) for usage.

---

## 🛠️ Available Tools (20)

### Loan Comparison

- **compare_personal_loans** - Compare personal loan offers
- **compare_business_loans** - Compare business loan offers
- **compare_car_loans** - Compare auto loan rates
- **compare_student_loans** - Compare student loan options
- **compare_personal_mortgages** - Compare mortgage rates
- **compare_business_mortgages** - Compare commercial mortgages

### Banking Products

- **compare_personal_banking** - Compare checking/savings accounts
- **compare_business_banking** - Compare business banking products
- **compare_savings_accounts** - Compare high-yield savings rates

### Credit Cards

- **compare_personal_credit_cards** - Compare personal credit cards
- **compare_business_credit_cards** - Compare business credit cards

### Calculators

- **calculate_loan_payment** - Calculate monthly loan payments
- **calculate_mortgage_payment** - Calculate PITI mortgage payments
- **compare_lease_vs_purchase** - Compare leasing vs buying vehicles

### Application Management

- **get_offer** - Submit application to selected lender
- **get_multiple_offers** - Submit to multiple lenders
- **track_offer_status** - Check application status
- **display_offer_form** - Generate pre-filled forms
- **display_upload_documents_form** - Upload required documents
- **submit_documents** - Submit application documents

---

## 📋 JSON Schemas

This repository contains standardized schemas for financial products:

- **[Personal Loans](./schemas/personal-loans.json)** - Debt consolidation, home improvement
- **[Business Loans](./schemas/business-loans.json)** - Term loans, lines of credit, SBA
- **[Mortgages](./schemas/mortgages.json)** - Conventional, FHA, VA, jumbo
- **[Auto Loans](./schemas/auto-loans.json)** - New and used vehicle financing
- **[Student Loans](./schemas/student-loans.json)** - Undergraduate, graduate, refinancing
- **[Credit Cards](./schemas/credit-cards.json)** - Personal and business cards
- **[Banking Products](./schemas/banking.json)** - Checking, savings accounts

See [schemas/README.md](./schemas/README.md) for detailed documentation.

---

## 🎯 Example Usage

### In Claude

User: "Compare business loans for $200k. My business has $1.2M revenue,
720 credit score, been in business 3 years. Need it for equipment."
Claude: [Uses compare_business_loans tool]
"Found 5 competitive offers for your $200k equipment loan: 1. ABC Business Capital - 7.5% APR, $3,200/month 2. SmallBiz Lending - 8.2% APR, $3,350/month
..."

### In ChatGPT

User: "What's my monthly payment on a $35k car loan at 6.5% for 60 months?"
ChatGPT: [Uses calculate_loan_payment tool]
"Monthly payment: $683.52
Total interest: $6,011.20"

### Programmatic Usage

```typescript
import { SecureLend } from "@securelend/sdk";

const client = new SecureLend();
const loans = await client.compareBusinessLoans({
  loanAmount: 200000,
  purpose: "equipment",
  annualRevenue: 1200000,
});
```

See [SDK documentation](https://github.com/SecureLend/sdk) for full API reference.

---

## 📖 Documentation

- **[Complete MCP Documentation](https://docs.securelend.ai/mcp/overview)**
- **[Tool Reference](https://docs.securelend.ai/mcp/tools)**
- **[SDK Documentation](https://github.com/SecureLend/sdk)** - For programmatic access
- **[Example Conversations](./examples/)** - Sample MCP interactions
- **[Integration Guides](./docs/)** - Claude Desktop, ChatGPT setup

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    AI Assistant                          │
│              (Claude, ChatGPT, Cursor)                   │
└────────────────────┬────────────────────────────────────┘
                     │ MCP Protocol
                     ▼
┌─────────────────────────────────────────────────────────┐
│              SecureLend MCP Server                       │
│         https://mcp.securelend.ai/mcp                    │
├─────────────────────────────────────────────────────────┤
│  • 20 Tools    • 10 Prompts    • 32 Resources           │
│  • Skybridge Framework   • Widget Support               │
└────────────────────┬────────────────────────────────────┘
                     │ REST API
                     ▼
┌─────────────────────────────────────────────────────────┐
│           SecureLend Platform (AWS)                      │
├─────────────────────────────────────────────────────────┤
│  • DynamoDB  • Lambda  • API Gateway  • S3              │
│  • 200+ Lender Integrations                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🔒 Security & Compliance

- **[SOC 2 Type 2 Certified](https://securelend.trustshare.com/home)** - Audit observation started Q4 2025
- **No authentication required** - Comparison tools are read-only
- **HTTPS encryption** - All data transmitted securely
- **Privacy-first** - No storage of comparison data

---

## 🤝 Contributing

We welcome contributions to:

- Improve JSON schemas
- Add new financial product types
- Enhance documentation
- Report issues

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

**For SDK contributions**, see the [SDK repository](https://github.com/SecureLend/sdk).

---

## 📧 Support

- **MCP Documentation:** https://docs.securelend.ai/mcp
- **SDK Documentation:** https://github.com/SecureLend/sdk
- **Email:** developers@securelend.ai
- **Issues:** GitHub Issues (this repo for MCP, SDK repo for client libraries)

---

## 📜 Legal

- **[Terms of Service](https://securelend.ai/legal/terms)**
- **[Privacy Policy](https://securelend.ai/legal/privacy)**

---

## 🗺️ Roadmap

### Q1 2026 ✅

- ✅ 20 financial comparison tools
- ✅ Claude Desktop integration
- ✅ ChatGPT integration
- ✅ TypeScript SDK (beta)
- ✅ SOC 2 Type 2 certification

### Q2 2026

- 🔄 Python SDK (GA)
- 🔄 Canadian market launch
- 🔄 Insurance products
- 🔄 React SDK components

### Q3 2026

- 🔄 UK/Australia launch
- 🔄 Ruby/Go SDKs
- 🔄 Investment products

---

## 🔗 Related Projects

- **[SecureLend SDK](https://github.com/SecureLend/sdk)** - Client libraries for programmatic access
- **[MCP Protocol](https://modelcontextprotocol.io)** - Model Context Protocol specification

---

## License

MIT © 2026 SecureLend, Inc.

---

**Built by [SecureLend](https://securelend.ai)** | [MCP Docs](https://docs.securelend.ai/mcp) | [SDK Docs](https://github.com/SecureLend/sdk) | [Privacy](https://securelend.ai/legal/privacy)
