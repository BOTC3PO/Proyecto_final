import type { RequestHandler } from "express";
import { getDb } from "./db";
import { toObjectId } from "./ids";
import { normalizeSchoolId } from "./user-auth";

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

export const DEFAULT_ENTERPRISE_PLAN: EnterprisePlan = "ENTERPRISE_PLUS";
export const DEFAULT_SUBSCRIPTION_STATUS: SubscriptionStatus = "ACTIVE";

type AccessLevel = "active" | "read_only" | "disabled";

export type EnterpriseEntitlementSnapshot = {
  plan: EnterprisePlan;
  subscriptionStatus: SubscriptionStatus;
  accessLevel: AccessLevel;
  features: EnterpriseFeature[];
};

const normalizePlan = (value: unknown): EnterprisePlan => {
  if (typeof value !== "string") return DEFAULT_ENTERPRISE_PLAN;
  return ENTERPRISE_PLANS.includes(value as EnterprisePlan) ? (value as EnterprisePlan) : DEFAULT_ENTERPRISE_PLAN;
};

const normalizeStatus = (value: unknown): SubscriptionStatus => {
  if (typeof value !== "string") return DEFAULT_SUBSCRIPTION_STATUS;
  return SUBSCRIPTION_STATUSES.includes(value as SubscriptionStatus)
    ? (value as SubscriptionStatus)
    : DEFAULT_SUBSCRIPTION_STATUS;
};

const resolveAccessLevel = (status: SubscriptionStatus): AccessLevel => {
  switch (status) {
    case "PAST_DUE":
      return "read_only";
    case "SUSPENDED":
    case "INACTIVE":
      return "disabled";
    case "ACTIVE":
    default:
      return "active";
  }
};

const isReadOnlyMethod = (method: string) => method === "GET" || method === "HEAD";

export const isFeatureInPlan = (plan: EnterprisePlan, feature: EnterpriseFeature) =>
  ENTERPRISE_PLAN_FEATURES[plan].includes(feature);

export const buildEntitlementSnapshot = (
  plan: EnterprisePlan,
  subscriptionStatus: SubscriptionStatus
): EnterpriseEntitlementSnapshot => {
  const accessLevel = resolveAccessLevel(subscriptionStatus);
  return {
    plan,
    subscriptionStatus,
    accessLevel,
    features: [...ENTERPRISE_PLAN_FEATURES[plan]]
  };
};

export const getSchoolEntitlements = async (schoolId: string): Promise<EnterpriseEntitlementSnapshot> => {
  const db = await getDb();
  const escuelaObjectId = toObjectId(schoolId);
  const school = await db
    .collection("escuelas")
    .findOne(escuelaObjectId ? { _id: escuelaObjectId } : { _id: schoolId });
  const plan = normalizePlan(school?.plan);
  const subscriptionStatus = normalizeStatus(school?.subscriptionStatus);
  return buildEntitlementSnapshot(plan, subscriptionStatus);
};

const resolveSchoolIdFromRequest = (req: { user?: { schoolId?: string | null; escuelaId?: unknown } }) => {
  if (typeof req.user?.schoolId === "string") return req.user.schoolId;
  return normalizeSchoolId(req.user?.escuelaId);
};

export const requireEnterpriseFeature = (
  feature: EnterpriseFeature
): RequestHandler => async (req, res, next) => {
  try {
    const schoolId = resolveSchoolIdFromRequest(req as { user?: { schoolId?: string | null; escuelaId?: unknown } });
    if (!schoolId) return next();
    const entitlements = await getSchoolEntitlements(schoolId);
    if (!isFeatureInPlan(entitlements.plan, feature)) {
      return res.status(403).json({ error: "feature not enabled for current plan" });
    }
    if (entitlements.accessLevel === "disabled") {
      return res.status(403).json({ error: "subscription inactive" });
    }
    if (entitlements.accessLevel === "read_only" && !isReadOnlyMethod(req.method)) {
      return res.status(403).json({ error: "subscription past due: read-only access" });
    }
    res.locals.entitlements = entitlements;
    return next();
  } catch (error) {
    return next(error);
  }
};
