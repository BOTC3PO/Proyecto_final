export const ENTERPRISE_PLANS = [
  "ENTERPRISE_BASIC",
  "ENTERPRISE_STD",
  "ENTERPRISE_PLUS"
] as const;

export type EnterprisePlan = (typeof ENTERPRISE_PLANS)[number];

export const SUBSCRIPTION_STATUSES = ["ACTIVE", "PAST_DUE", "SUSPENDED", "INACTIVE"] as const;

export type SubscriptionStatus = (typeof SUBSCRIPTION_STATUSES)[number];

export const ENTERPRISE_FEATURES = {
  DASHBOARD: "enterprise_dashboard",
  CLASSROOMS: "enterprise_classrooms",
  MEMBERS: "enterprise_members",
  MODULES: "enterprise_modules",
  MESSAGES: "enterprise_messages",
  CONTRACTS: "enterprise_contracts",
  REPORTS: "enterprise_reports",
  ECONOMY: "economy",
  QUIZZES: "quizzes"
} as const;

export type EnterpriseFeature = (typeof ENTERPRISE_FEATURES)[keyof typeof ENTERPRISE_FEATURES];

export type EnterpriseEntitlements = {
  plan: EnterprisePlan;
  subscriptionStatus: SubscriptionStatus;
  accessLevel: "active" | "read_only" | "disabled";
  features: EnterpriseFeature[];
};

export const ENTERPRISE_PLAN_FEATURES: Record<EnterprisePlan, EnterpriseFeature[]> = {
  ENTERPRISE_BASIC: [
    ENTERPRISE_FEATURES.DASHBOARD,
    ENTERPRISE_FEATURES.CLASSROOMS,
    ENTERPRISE_FEATURES.MEMBERS,
    ENTERPRISE_FEATURES.MODULES
  ],
  ENTERPRISE_STD: [
    ENTERPRISE_FEATURES.DASHBOARD,
    ENTERPRISE_FEATURES.CLASSROOMS,
    ENTERPRISE_FEATURES.MEMBERS,
    ENTERPRISE_FEATURES.MODULES,
    ENTERPRISE_FEATURES.MESSAGES,
    ENTERPRISE_FEATURES.CONTRACTS
  ],
  ENTERPRISE_PLUS: [
    ENTERPRISE_FEATURES.DASHBOARD,
    ENTERPRISE_FEATURES.CLASSROOMS,
    ENTERPRISE_FEATURES.MEMBERS,
    ENTERPRISE_FEATURES.MODULES,
    ENTERPRISE_FEATURES.MESSAGES,
    ENTERPRISE_FEATURES.CONTRACTS,
    ENTERPRISE_FEATURES.REPORTS,
    ENTERPRISE_FEATURES.ECONOMY,
    ENTERPRISE_FEATURES.QUIZZES
  ]
};

export const isFeatureEnabled = (entitlements: EnterpriseEntitlements, feature: EnterpriseFeature) =>
  entitlements.features.includes(feature);

export const canAccessFeature = (entitlements: EnterpriseEntitlements, feature: EnterpriseFeature) =>
  entitlements.accessLevel !== "disabled" && isFeatureEnabled(entitlements, feature);

export const canWriteFeature = (entitlements: EnterpriseEntitlements, feature: EnterpriseFeature) =>
  entitlements.accessLevel === "active" && isFeatureEnabled(entitlements, feature);
