/**
 * SecureLend MCP Financial Services
 * TypeScript type definitions
 *
 * @packageDocumentation
 */

// ============================================================================
// Core Types
// ============================================================================

export interface Money {
  amount: number;
  currency?: string; // ISO 4217 (default: 'USD')
}

export type Percentage = number; // 0-100
export type BasisPoints = number;
export type DateString = string; // ISO 8601 (YYYY-MM-DD)

export interface CreditScore {
  score: number; // 300-850
  bureau?: "Experian" | "Equifax" | "TransUnion" | "VantageScore";
  date?: DateString;
}

export interface Geography {
  country: string; // ISO 3166-1 alpha-2
  state?: string;
  city?: string;
  postalCode?: string;
}

export interface FinancialInstitution {
  id: string;
  name: string;
  type:
    | "bank"
    | "credit_union"
    | "online_lender"
    | "fintech"
    | "traditional_lender";
  regulatory?: {
    fdic?: boolean;
    fdic_cert?: string;
    ncua?: boolean;
    licenses?: string[];
  };
  contact?: {
    website?: string;
    phone?: string;
    email?: string;
  };
}

// ============================================================================
// Business Profile
// ============================================================================

export interface BusinessProfile {
  basic: {
    legal_name: string;
    dba?: string;
    ein?: string; // XX-XXXXXXX
    entity_type:
      | "sole_proprietorship"
      | "partnership"
      | "llc"
      | "s_corp"
      | "c_corp"
      | "non_profit";
    incorporation_date?: DateString;
    industry?: {
      naics_code?: string;
      description?: string;
    };
  };

  location?: {
    headquarters?: Geography;
    operating_states?: string[];
    num_locations?: number;
  };

  financials?: {
    revenue?: {
      annual?: Money;
      monthly_average?: Money;
      trailing_12_months?: Money;
      growth_rate?: Percentage;
    };
    profitability?: {
      net_income?: Money;
      ebitda?: Money;
      profit_margin?: Percentage;
    };
    cash_flow?: {
      monthly_average?: Money;
      runway_months?: number;
    };
    existing_debt?: {
      total_debt?: Money;
      monthly_debt_service?: Money;
    };
  };

  credit?: {
    business_credit_score?: {
      duns_score?: number; // 0-100
      experian_intelliscore?: number; // 1-100
      equifax_business_score?: number; // 101-992
    };
    owner_credit_score?: CreditScore;
    bankruptcy_history?: boolean;
    tax_liens?: boolean;
  };

  operations?: {
    employee_count?: number;
    full_time_employees?: number;
  };
}

// ============================================================================
// Loan Products
// ============================================================================

export type LoanPurpose =
  | "working_capital"
  | "equipment_purchase"
  | "real_estate"
  | "business_acquisition"
  | "inventory"
  | "expansion"
  | "debt_consolidation"
  | "payroll"
  | "other";

export type LoanType =
  | "term_loan"
  | "line_of_credit"
  | "sba_7a"
  | "sba_504"
  | "equipment_financing"
  | "invoice_factoring"
  | "merchant_cash_advance"
  | "revenue_based_financing";

export interface LoanRequest {
  amount: Money;
  purpose: LoanPurpose;
  purpose_details?: string;
  term_preference?: {
    min_months?: number;
    max_months?: number;
    preferred_months?: number;
  };
  collateral_available?: {
    has_collateral: boolean;
    type?: "real_estate" | "equipment" | "inventory" | "accounts_receivable";
    estimated_value?: Money;
  };
  urgency?: "immediate" | "within_week" | "within_month" | "exploring";
  business_profile: BusinessProfile;
}

export interface LoanOffer {
  offer_id: string;
  lender: FinancialInstitution;

  product: {
    name: string;
    type: LoanType;
    description?: string;
  };

  terms: {
    amount: Money;
    interest_rate: {
      type: "fixed" | "variable";
      rate: Percentage;
      apr: Percentage;
      index?: string; // For variable rates
      margin?: BasisPoints;
    };
    term_months: number;
    payment?: {
      frequency: "daily" | "weekly" | "biweekly" | "monthly" | "quarterly";
      amount: Money;
      first_payment_date?: DateString;
    };
    total_cost: Money;
  };

  fees?: {
    origination?: {
      amount?: Money;
      percentage?: Percentage;
    };
    processing?: Money;
    prepayment_penalty?: {
      has_penalty: boolean;
      terms?: string;
    };
  };

  requirements?: {
    min_credit_score?: number;
    min_time_in_business_months?: number;
    min_annual_revenue?: Money;
    collateral_required?: boolean;
    personal_guarantee_required?: boolean;
  };

  matching: {
    approval_probability: number; // 0.0 - 1.0
    match_score: number; // 0-100
    match_reasons?: string[];
    concerns?: string[];
  };

  process?: {
    application_method?: "online" | "phone" | "in_person";
    application_url?: string;
    funding_speed?: {
      min_days?: number;
      max_days?: number;
      description: string;
    };
  };
}

// ============================================================================
// Banking Products
// ============================================================================

export interface BankingRequest {
  account_type: "checking" | "savings" | "money_market" | "combined";

  usage_profile?: {
    monthly_revenue?: Money;
    monthly_transactions?: number;
    transaction_types?: {
      ach_transfers?: number;
      wire_transfers?: number;
      check_deposits?: number;
      cash_deposits?: number;
    };
    average_balance?: Money;
    international_transactions?: boolean;
  };

  features_needed?: {
    online_banking?: boolean;
    mobile_app?: boolean;
    api_access?: boolean;
    multi_user_access?: boolean;
    accounting_integration?: ("quickbooks" | "xero" | "freshbooks" | "sage")[];
    debit_cards?: number;
    sub_accounts?: number;
  };

  business_profile?: BusinessProfile;
}

export interface BankingOffer {
  offer_id: string;
  bank: FinancialInstitution;

  account: {
    name: string;
    type: "checking" | "savings" | "money_market";
    description?: string;
  };

  rates_and_fees: {
    interest_rate?: {
      apy?: Percentage;
      tiered_rates?: Array<{
        balance_min?: Money;
        balance_max?: Money;
        apy: Percentage;
      }>;
    };
    monthly_fee?: Money;
    fee_waiver_conditions?: string[];
    minimum_balance?: Money;
    opening_deposit?: Money;
    transaction_fees?: {
      included_transactions?: number;
      excess_transaction_fee?: Money;
      wire_transfer_incoming?: Money;
      wire_transfer_outgoing?: Money;
      ach_transfer?: Money;
    };
  };

  features?: {
    online_banking?: boolean;
    mobile_app?: {
      available: boolean;
      ios?: boolean;
      android?: boolean;
      rating?: number;
    };
    api_access?: boolean;
    accounting_integrations?: string[];
    debit_cards?: {
      included?: number;
      virtual_cards?: boolean;
      cashback?: Percentage;
    };
  };

  promotions?: {
    signup_bonus?: Money;
    bonus_requirements?: string;
    promotional_apy?: Percentage;
    promotional_period_months?: number;
  };

  matching?: {
    match_score?: number;
    estimated_monthly_cost?: Money;
    estimated_annual_interest?: Money;
    pros?: string[];
    cons?: string[];
  };
}

// ============================================================================
// Credit Card Products
// ============================================================================

export interface CreditCardRequest {
  credit_score: number;
  monthly_spend: number;
  spend_categories?: Array<{
    category:
      | "advertising"
      | "gas"
      | "travel"
      | "dining"
      | "office_supplies"
      | "general";
    monthly_amount: number;
  }>;
  preferences?: {
    rewards_type?: "cashback" | "points" | "miles" | "no_preference";
    annual_fee_max?: number;
    intro_apr?: boolean;
  };
  business?: Partial<BusinessProfile>;
}

export interface CreditCardOffer {
  card_name: string;
  issuer: string;

  rewards: {
    type: "cashback" | "points" | "miles";
    base_rate: number;
    bonus_categories?: Array<{
      category: string;
      rate: number;
    }>;
    signup_bonus?: {
      amount: number;
      spend_requirement: Money;
      months_to_earn: number;
    };
  };

  fees: {
    annual_fee: Money;
    foreign_transaction_fee?: Percentage;
  };

  apr: {
    purchase_apr: Percentage;
    intro_apr?: Percentage;
    intro_period_months?: number;
  };

  estimated_annual_rewards?: Money;
  approval_probability?: number;
  apply_url: string;
}

// ============================================================================
// MCP Tool Input/Output Types
// ============================================================================

export interface CompareBusinessLoansInput {
  amount: number;
  purpose: LoanPurpose;
  business: {
    revenue_annual: number;
    time_in_business_months: number;
    credit_score: number;
    industry?: string;
    entity_type?: string;
    location?: {
      state?: string;
      country?: string;
    };
  };
  term_preference_months?: number;
  collateral_available?: boolean;
  max_results?: number;
}

export interface CompareBusinessLoansOutput {
  offers: LoanOffer[];
  summary: {
    total_offers: number;
    best_rate: number;
    best_approval_probability: number;
    fastest_funding: string;
  };
  metadata: {
    query_id: string;
    timestamp: string;
  };
}

export interface CompareBusinessBankingInput {
  account_type?: "checking" | "savings" | "both";
  monthly_revenue?: number;
  monthly_transactions?: number;
  average_balance?: number;
  features_needed?: string[];
  accounting_software?: "quickbooks" | "xero" | "freshbooks" | "none";
  max_results?: number;
}

export interface CompareBusinessBankingOutput {
  accounts: BankingOffer[];
  summary: {
    lowest_monthly_cost: number;
    highest_apy: number;
    best_for_high_transactions?: string;
    best_for_interest?: string;
  };
}

export interface CalculateLoanPaymentInput {
  amount: number;
  interest_rate: number;
  term_months: number;
  fees?: {
    origination_fee?: number;
    processing_fee?: number;
  };
}

export interface CalculateLoanPaymentOutput {
  monthly_payment: number;
  total_interest: number;
  total_cost: number;
  apr: number;
  amortization_schedule?: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}
