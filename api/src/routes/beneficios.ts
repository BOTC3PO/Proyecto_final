import { Router } from "express";
import { getActiveInstitutionBenefitStatus } from "../lib/entitlements";
import { requireUser } from "../lib/user-auth";

export const beneficios = Router();

beneficios.get("/api/beneficios/estado", requireUser, async (req, res) => {
  const status = await getActiveInstitutionBenefitStatus(req as { user?: { schoolId?: string | null } });
  res.json(status);
});
