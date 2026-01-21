
# MCP Tool API Reference

This document provides a detailed reference for the 20+ financial comparison tools available through the SecureLend Model Context Protocol (MCP) server.

**MCP Endpoint:** `https://mcp.dev.securelend.ai/mcp`

All tools are designed to be called by AI assistants and language models like Claude. The inputs and outputs adhere to the JSON schemas defined in the `/schemas` directory.

---

## Loan Comparison Tools

- **`compare_personal_loans`**: Compare personal loan offers.
- **`compare_business_loans`**: Compare business loan offers.
- **`compare_car_loans`**: Compare auto loan rates.
- **`compare_student_loans`**: Compare student loan options.
- **`compare_personal_mortgages`**: Compare mortgage rates.
- **`compare_business_mortgages`**: Compare commercial mortgages.

---

## Banking Product Tools

- **`compare_personal_banking`**: Compare checking/savings accounts.
- **`compare_business_banking`**: Compare business banking products.
- **`compare_savings_accounts`**: Compare high-yield savings rates.

---

## Credit Card Tools

- **`compare_personal_credit_cards`**: Compare personal credit cards.
- **`compare_business_credit_cards`**: Compare business credit cards.

---

## Calculator Tools

- **`calculate_loan_payment`**: Calculate monthly loan payments.
- **`calculate_mortgage_payment`**: Calculate PITI mortgage payments.
- **`compare_lease_vs_purchase`**: Compare leasing vs buying vehicles.

---

## Application Management Tools

- **`get_offer`**: Submit application to selected lender.
- **`get_multiple_offers`**: Submit to multiple lenders.
- **`track_offer_status`**: Check application status.
- **`display_offer_form`**: Generate pre-filled forms.
- **`display_upload_documents_form`**: Upload required documents.
- **`submit_documents`**: Submit application documents.
