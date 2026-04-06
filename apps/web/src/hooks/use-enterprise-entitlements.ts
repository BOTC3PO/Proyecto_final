import { useState } from "react";
import type { EnterpriseEntitlements } from "../entitlements/enterprise";

// Hook mantenido por compatibilidad — sin uso activo
export const useEnterpriseEntitlements = () => {
  const [entitlements] =
    useState<EnterpriseEntitlements | null>(null);
  return { entitlements, loading: false, error: null };
};
