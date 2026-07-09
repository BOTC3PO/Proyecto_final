import "react-native-gesture-handler";
import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../src/auth/AuthContext";
import { usePushRegistration } from "../src/hooks/usePushRegistration";
import { colors } from "../src/theme/tokens";

function AppShell() {
  // PLAN-R Parte 5 — registra el push token una vez logueado, sea cual
  // sea el shell (alumno/padre/docente); vive acá porque necesita
  // useAuth(), que sólo existe dentro de <AuthProvider>.
  usePushRegistration();
  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.surface} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppShell />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
