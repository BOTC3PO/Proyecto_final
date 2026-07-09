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

  // PLAN-R Parte 4 — switch real por rol (Partes 1-3 mandaban todo
  // signedIn a (alumno) sin mirar el rol; ese comentario decía "esto se
  // vuelve un switch cuando la Parte 4 agregue su shell" — es ahora).
  // ponytail: docente-consulta (Parte 5) todavía no tiene shell propio,
  // así que TEACHER/DIRECTIVO/ADMIN caen a (alumno) por ahora (mismo
  // fallback que ya existía, sólo ya no aplica a PARENT).
  const roles = user?.roles?.length ? user.roles : user?.role ? [user.role] : [];
  if (roles.includes("PARENT")) return <Redirect href="/(padre)" />;
  return <Redirect href="/(alumno)" />;
}
