import { ActivityIndicator, View } from "react-native";
import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../src/auth/AuthContext";
import { colors } from "../../src/theme/tokens";

export default function PadreLayout() {
  const { status, user } = useAuth();

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-vb-bg">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  if (status === "signedOut") return <Redirect href="/login" />;
  // Mismo criterio que ProtectedRoute allow={['PARENT']} en /hijos de
  // la web: sin el rol PARENT no entra a este shell.
  const roles = user?.roles?.length ? user.roles : user?.role ? [user.role] : [];
  if (!roles.includes("PARENT")) return <Redirect href="/(alumno)" />;

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
        options={{ title: "Hijos", tabBarIcon: ({ color, size }) => <Feather name="users" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="pagos"
        options={{ title: "Pagos", tabBarIcon: ({ color, size }) => <Feather name="credit-card" color={color} size={size} /> }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: "Perfil", tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} /> }}
      />
    </Tabs>
  );
}
