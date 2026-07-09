/**
 * PLAN-R Parte 5 — shell "docente-consulta": TEACHER/DIRECTIVO/ADMIN
 * en el teléfono. Consulta, no gestión — mismo criterio que decisión
 * #3 del plan ("editores NUNCA"): nada de crear/editar aulas, módulos,
 * cuestionarios. Asistencia es la única excepción de escritura (un
 * caso de uso diario contenido y de bajo riesgo, no toca contenido).
 */
import { ActivityIndicator, View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../src/auth/AuthContext";
import { colors } from "../../src/theme/tokens";

const STAFF_ROLES = new Set(["TEACHER", "DIRECTIVO", "ADMIN"]);

export default function DocenteLayout() {
  const { status, user } = useAuth();

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-vb-bg">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  if (status === "signedOut") return <Redirect href="/login" />;
  const roles = user?.roles?.length ? user.roles : user?.role ? [user.role] : [];
  if (!roles.some((r) => STAFF_ROLES.has(r))) return <Redirect href="/(alumno)" />;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Aulas", tabBarIcon: ({ color, size }) => <Feather name="grid" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="entregas"
        options={{ title: "Entregas", tabBarIcon: ({ color, size }) => <Feather name="inbox" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: "Perfil", tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} /> }}
      />
    </Tabs>
  );
}
