/**
 * PLAN-R Parte 5 — lista de aulas del docente. Tap → asistencia de
 * hoy (app/aulas/[aulaId].tsx, fuera de este grupo de tabs — mismo
 * patrón que quiz/[attemptId].tsx: pantalla completa, no un tab más).
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { apiGet } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";
import type { Aula } from "../../src/types/docente";

export default function DocenteAulas() {
  const [aulas, setAulas] = useState<Aula[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<{ items: Aula[] }>("/api/aulas")
      .then((res) => active && setAulas(res.items))
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudieron cargar las aulas."));
    return () => {
      active = false;
    };
  }, []);

  return (
    <View className="flex-1 bg-vb-bg">
      <Text className="text-2xl font-bold text-vb-text px-4 pt-4 pb-2">Aulas</Text>
      <Text className="text-xs text-vb-muted px-4 pb-2">Tocá un aula para tomar asistencia.</Text>
      {error ? (
        <Text className="text-sm text-vb-danger px-4">{error}</Text>
      ) : !aulas ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <FlatList
          data={aulas}
          keyExtractor={(a) => a.id}
          contentContainerStyle={{ padding: 16, paddingTop: 4, gap: 8 }}
          ListEmptyComponent={<Text className="text-sm text-vb-muted text-center mt-8">Sin aulas asignadas.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/aulas/${item.id}`)}
              className="bg-vb-surface border border-vb-border rounded-xl p-3.5 flex-row items-center gap-2"
            >
              <Feather name="grid" size={16} color={colors.muted} />
              <Text className="text-sm font-medium text-vb-text flex-1">{item.name}</Text>
              <Feather name="chevron-right" size={16} color={colors.muted} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
