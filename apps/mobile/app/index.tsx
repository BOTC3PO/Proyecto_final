import { ActivityIndicator, View } from "react-native";
import { Redirect } from "expo-router";
import { useAuth } from "../src/auth/AuthContext";
import { colors } from "../src/theme/tokens";

export default function Index() {
  const { status } = useAuth();

  if (status === "loading") {
    return (
      <View className="flex-1 items-center justify-center bg-vb-bg">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  // ponytail: PLAN-R Parte 1 sólo construye el shell de alumno — todo
  // signedIn va ahí sin mirar el rol. Cuando la Parte 4 (padre) o la
  // Parte 5 (docente-consulta) agreguen sus shells, esto se vuelve un
  // switch por `user.role`.
  if (status === "signedIn") return <Redirect href="/(alumno)" />;
  return <Redirect href="/login" />;
}
