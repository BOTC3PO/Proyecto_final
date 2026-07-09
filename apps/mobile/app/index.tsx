import { ActivityIndicator, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "../src/auth/AuthContext";
import { colors } from "../src/theme/tokens";

export default function Index() {
  const { status, user } = useAuth();

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-vb-bg">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  if (status === "signedOut") return <Redirect href="/login" />;

  // PLAN-R Parte 5 — switch completo por rol, mismo criterio (y misma
  // jerarquía) que `resolvePrimaryRole` en apps/web/src/auth/roleHelpers.ts:
  // ADMIN > DIRECTIVO > TEACHER > PARENT > USER > GUEST. Un STAFF+PARENT
  // aterriza en docente-consulta (rankea más arriba), no en /padre.
  const roles = user?.roles?.length ? user.roles : user?.role ? [user.role] : [];
  if (roles.some((r) => r === "ADMIN" || r === "DIRECTIVO" || r === "TEACHER")) {
    return <Redirect href="/(docente)" />;
  }
  if (roles.includes("PARENT")) return <Redirect href="/(padre)" />;
  return <Redirect href="/(alumno)" />;
}
