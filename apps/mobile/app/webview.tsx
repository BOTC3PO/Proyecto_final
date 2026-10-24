/**
 * PLAN-R Parte 2 — pantalla compartida para abrir cualquier ruta web
 * rica (presentación, bloques, mapa, libro) dentro del WebView de
 * Parte 1. Fuera del grupo (alumno) a propósito: al no estar anidada
 * en los tabs, cubre la tab bar (pantalla completa), como una
 * diapositiva o un libro deberían verse.
 */
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { WebContent } from "../src/components/WebContent";
import { colors } from "../src/theme/tokens";

export default function WebviewScreen() {
  const { path, title } = useLocalSearchParams<{ path: string; title?: string }>();

  return (
    <SafeAreaView className="flex-1 bg-vb-surface" edges={["top"]}>
      <View className="flex-row items-center gap-2 px-3 py-2 border-b border-vb-border">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2" hitSlop={8}>
          <Feather name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text className="text-base font-medium text-vb-text flex-1" numberOfLines={1}>
          {title ?? "Virtual Book"}
        </Text>
      </View>
      <WebContent path={path ?? "/"} />
    </SafeAreaView>
  );
}
