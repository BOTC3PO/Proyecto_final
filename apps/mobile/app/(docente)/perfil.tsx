import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useAuth } from "../../src/auth/AuthContext";

export default function DocentePerfil() {
  const { user, logout } = useAuth();

  const onLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View className="flex-1 bg-vb-bg px-6 py-8 gap-6">
      <View className="items-center gap-1">
        <Text className="text-xl font-bold text-vb-text">{user?.name}</Text>
        <Text className="text-sm text-vb-muted">{user?.role}</Text>
      </View>

      <TouchableOpacity
        onPress={onLogout}
        className="bg-vb-danger rounded-lg py-3 items-center"
      >
        <Text className="text-white font-semibold text-base">Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
