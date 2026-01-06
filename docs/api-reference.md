
# MCP Tool API Reference

This document provides a detailed reference for the financial comparison tools available through the SecureLend Model Context Protocol (MCP) server.

**MCP Endpoint:** `https://mcp.securelend.ai/mcp`

All tools are designed to be called by AI assistants and language models. The inputs and outputs adhere to the JSON schemas defined in the `/schemas` directory.

---

## Tools

### `compare_business_loans`

Compare business loan options based on a business profile and financing needs. Returns a ranked list of loan offers from multiple lenders with approval probabilities and detailed terms.

-   **Input Schema:** [`LoanRequest`](../schemas/products/loans/business-loans.json)
-   **Output Schema:** `LoanComparisonResponse` containing an array of [`LoanOffer`](../schemas/products/loans/business-loans.json) objects.

#### Example MCP Request

```json
{
  "tool_name": "compare_business_loans",
  "parameters": {
    "amount": 200000,
    "purpose": "equipment_purchase",
    "business": {
      "revenue_annual": 1200000,
      "time_in_business_months": 36,
      "credit_score": 720,
      "industry": "Manufacturing"
    }
  }
}
```

---

### `compare_business_banking`

Compare business checking and savings account options. Returns ranked accounts with fees, features, and estimated costs based on usage patterns.

-   **Input Schema:** [`BankingRequest`](../schemas/products/banking/business-banking.json)
-   **Output Schema:** `BankingComparisonResponse` containing an array of [`BankingOffer`](../schemas/products/banking/business-banking.json) objects.

#### Example MCP Request

```json
{
  "tool_name": "compare_business_banking",
  "parameters": {
    "account_type": "checking",
    "monthly_revenue": 100000,
    "monthly_transactions": 500,
    "average_balance": 25000,
    "features_needed": ["mobile_app", "accounting_integration", "api_access"]
  }
}
```

---

### `compare_business_credit_cards`

Compare business credit card offers based on spending patterns and credit profile. Returns cards with rewards, fees, and approval estimates.

-   **Input Schema:** [`CreditCardRequest`](../schemas/credit-cards.json)
-   **Output Schema:** `CreditCardComparisonResponse` containing an array of [`CreditCardOffer`](../schemas/credit-cards.json) objects.

#### Example MCP Request

```json
{
  "tool_name": "compare_business_credit_cards",
  "parameters": {
    "credit_score": 750,
    "monthly_spend": 15000,
    "spend_categories": [
      { "category": "advertising", "monthly_amount": 5000 },
      { "category": "travel", "monthly_amount": 3000 }
    ],
    "preferences": {
      "rewards_type": "cashback",
      "annual_fee_max": 500
    }
  }
}
```

---

### `calculate_loan_payment`

Calculate the monthly payment, total cost, and amortization schedule for a loan with given terms.

-   **Input Schema:** See below.
-   **Output Schema:** See below.

#### Input Schema

```json
{
  "amount": 100000,
  "interest_rate": 8.5,
  "term_months": 60
}
```

#### Output Schema

```json
{
  "monthly_payment": 2051.65,
  "total_interest": 23099.03,
  "total_cost": 123099.03,
  "apr": 8.5
}
```

#### Example MCP Request

```json
{
  "tool_name": "calculate_loan_payment",
  "parameters": {
    "amount": 25000,
    "interest_rate": 9.25,
    "term_months": 36
  }
}
```
