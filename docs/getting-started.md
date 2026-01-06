# Getting Started with SecureLend

Welcome to the SecureLend developer platform! This guide will walk you through installing the SDK, authenticating your requests, and making your first API call to compare financial products.

## 1. Installation

First, install the SecureLend SDK using your preferred package manager.

```bash
# npm
npm install @securelend/sdk

# yarn
yarn add @securelend/sdk

# pnpm
pnpm add @securelend/sdk
```

## 2. Get Your API Key

To use the SecureLend API, you need an API key.

1.  **Sign up:** Create an account at [securelend.ai](https://developers.securelend.ai).
2.  **Dashboard:** Navigate to the "API Keys" section in your developer dashboard.
3.  **Create key:** Generate a new secret key. You will have separate keys for test and live environments.

Your API key is a secret! Do not expose it in frontend code or commit it to version control. Store it securely in an environment variable.

```bash
export SECURELEND_API_KEY="sk_test_..."
```

## 3. Your First Request

Now you're ready to make your first API call. Let's find the best business loan options for a sample company.

Create a new file (e.g., `find-loans.ts`) and add the following code:

```typescript
import { SecureLend } from "@securelend/sdk";

// Initialize the client with your API key from an environment variable
const securelend = new SecureLend(process.env.SECURELEND_API_KEY!);

async function findBestLoan() {
  console.log("Searching for business loans...");

  try {
    const loanRequest = {
      amount: 200000,
      purpose: "equipment_purchase",
      business: {
        revenue: 1200000,
        creditScore: 720,
        timeInBusiness: 36, // in months
        industry: "Manufacturing",
      },
    };

    const response = await securelend.loans.compare(loanRequest);

    console.log(`Found ${response.summary.totalOffers} potential loan offers.`);

    if (response.offers.length > 0) {
      const bestOffer = response.offers[0];
      console.log("\n--- Top Recommended Offer ---");
      console.log(`Lender: ${bestOffer.lender.name}`);
      console.log(`Product: ${bestOffer.product.name}`);
      console.log(`Amount: $${bestOffer.terms.amount.amount.toLocaleString()}`);
      console.log(`Interest Rate: ${bestOffer.terms.interest_rate.rate}%`);
      console.log(`Term: ${bestOffer.terms.term_months} months`);
      console.log(
        `Approval Probability: ${(
          bestOffer.matching.approvalProbability * 100
        ).toFixed(0)}%`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

findBestLoan();
```

### Run the script

Execute the script from your terminal:

```bash
npx ts-node find-loans.ts
```

You should see a ranked list of loan offers tailored to the business profile you provided.

## Next Steps

You've successfully integrated with the SecureLend API! Here's what you can do next:

- **Explore more products:** Try comparing `banking` or `creditCards`.
- **Dive deeper:** Read the full [API Reference](./api-reference.md).
- **See real-world examples:** Check out the [`/examples`](../examples) directory in this repository.
- **Learn about schemas:** Understand the data structures in our [Schema Reference](./schemas/README.md).
