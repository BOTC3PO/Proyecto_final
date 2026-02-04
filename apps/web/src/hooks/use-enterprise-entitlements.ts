import { useEffect, useState } from "react";
import { useAuth } from "../auth/use-auth";
import type { EnterpriseEntitlements } from "../entitlements/enterprise";
import { fetchEnterpriseEntitlements } from "../services/enterprise";

export const useEnterpriseEntitlements = () => {
  const { user } = useAuth();
  const [entitlements, setEntitlements] = useState<EnterpriseEntitlements | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchEnterpriseEntitlements()
      .then((data) => {
        if (!active) return;
        setEntitlements(data);
        setError(null);
      })
      .catch((err: Error) => {
        if (!active) return;
        setError(err.message);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [user?.id]);

  return { entitlements, loading, error };
};
