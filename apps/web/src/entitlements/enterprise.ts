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
  PARENTS: "enterprise_parents",
  INSTITUTIONAL_BENEFITS: "enterprise_institutional_benefits",
  AUDIT: "enterprise_audit",
  ADVANCED_MODERATION: "enterprise_advanced_moderation",
  ADMIN_TOOLS: "enterprise_admin_tools",
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
    ENTERPRISE_FEATURES.MODULES,
    ENTERPRISE_FEATURES.REPORTS
  ],
  ENTERPRISE_STD: [
    ENTERPRISE_FEATURES.DASHBOARD,
    ENTERPRISE_FEATURES.CLASSROOMS,
    ENTERPRISE_FEATURES.MEMBERS,
    ENTERPRISE_FEATURES.MODULES,
    ENTERPRISE_FEATURES.MESSAGES,
    ENTERPRISE_FEATURES.CONTRACTS,
    ENTERPRISE_FEATURES.REPORTS,
    ENTERPRISE_FEATURES.PARENTS,
    ENTERPRISE_FEATURES.INSTITUTIONAL_BENEFITS
  ],
  ENTERPRISE_PLUS: [
    ENTERPRISE_FEATURES.DASHBOARD,
    ENTERPRISE_FEATURES.CLASSROOMS,
    ENTERPRISE_FEATURES.MEMBERS,
    ENTERPRISE_FEATURES.MODULES,
    ENTERPRISE_FEATURES.MESSAGES,
    ENTERPRISE_FEATURES.CONTRACTS,
    ENTERPRISE_FEATURES.REPORTS,
    ENTERPRISE_FEATURES.PARENTS,
    ENTERPRISE_FEATURES.INSTITUTIONAL_BENEFITS,
    ENTERPRISE_FEATURES.AUDIT,
    ENTERPRISE_FEATURES.ADVANCED_MODERATION,
    ENTERPRISE_FEATURES.ADMIN_TOOLS,
    ENTERPRISE_FEATURES.ECONOMY,
    ENTERPRISE_FEATURES.QUIZZES
  ]
};

export const BILLING_DELINQUENCY_POLICY = {
  pastDueDays: 7,
  suspendDays: 30
};

export const isFeatureEnabled = (entitlements: EnterpriseEntitlements, feature: EnterpriseFeature) =>
  entitlements.features.includes(feature);

export const canAccessFeature = (entitlements: EnterpriseEntitlements, feature: EnterpriseFeature) =>
  entitlements.accessLevel !== "disabled" && isFeatureEnabled(entitlements, feature);

export const canWriteFeature = (entitlements: EnterpriseEntitlements, feature: EnterpriseFeature) =>
  entitlements.accessLevel === "active" && isFeatureEnabled(entitlements, feature);
