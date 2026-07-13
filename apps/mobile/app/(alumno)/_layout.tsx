import { ActivityIndicator, View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../src/auth/AuthContext";
import { colors } from "../../src/theme/tokens";

export default function AlumnoLayout() {
  const { status, user } = useAuth();

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-vb-bg">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  if (status === "signedOut") return <Redirect href="/login" />;
  // PLAN-R Partes 4-5 — quien cae acá por deep link viejo pero rankea
  // más arriba en la jerarquía de rol principal (ADMIN > DIRECTIVO >
  // TEACHER > PARENT > USER > GUEST, mismo criterio que
  // `resolvePrimaryRole` de apps/web/src/auth/roleHelpers.ts) va a su
  // propio shell — un TEACHER+USER o PARENT+USER aterriza ahí igual
  // que el rol puro, no es sólo el caso "sin ningún otro rol".
  const roles = user?.roles?.length ? user.roles : user?.role ? [user.role] : [];
  if (roles.some((r) => r === "ADMIN" || r === "DIRECTIVO" || r === "TEACHER")) {
    return <Redirect href="/(docente)" />;
  }
  if (roles.includes("PARENT")) return <Redirect href="/(padre)" />;

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
        options={{ title: "Inicio", tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="modulos"
        options={{ title: "Módulos", tabBarIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="tareas"
        options={{ title: "Tareas", tabBarIcon: ({ color, size }) => <Feather name="clipboard" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="calendario"
        options={{ title: "Calendario", tabBarIcon: ({ color, size }) => <Feather name="calendar" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="mensajes"
        options={{ title: "Mensajes", tabBarIcon: ({ color, size }) => <Feather name="message-circle" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: "Perfil", tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} /> }}
      />
    </Tabs>
  );
}
