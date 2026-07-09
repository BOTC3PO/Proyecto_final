/**
 * PLAN-R Parte 2 — lista de módulos, espejo simplificado de
 * `apps/web/src/pages/modulos/ModulosList.tsx`: mismo GET /api/modulos
 * + búsqueda por título + filtro por materia. Sin los tabs "Mis
 * módulos/Escuela/Públicos" del original (son un concepto docente —
 * quién CREÓ el módulo; un alumno navega el catálogo entero).
 */
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { apiGet } from "../../../src/api/client";
import { colors } from "../../../src/theme/tokens";
import type { Modulo } from "../../../src/types/modulo";

export default function ModulosIndex() {
  const [modulos, setModulos] = useState<Modulo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [materia, setMateria] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<{ items: Modulo[] }>("/api/modulos")
      .then((res) => active && setModulos(res.items))
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudieron cargar los módulos."));
    return () => {
      active = false;
    };
  }, []);

  const materias = useMemo(() => {
    const set = new Set<string>();
    for (const m of modulos ?? []) if (m.subject) set.add(m.subject);
    return Array.from(set).sort();
  }, [modulos]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return (modulos ?? []).filter((m) => {
      if (materia && m.subject !== materia) return false;
      if (q && !m.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [modulos, search, materia]);

  return (
    <View className="flex-1 bg-vb-bg">
      <View className="px-4 pt-4 pb-2 gap-3">
        <Text className="text-2xl font-bold text-vb-text">Módulos</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar módulo..."
          placeholderTextColor={colors.muted}
          className="border border-vb-border rounded-lg px-3 py-2 text-base text-vb-text bg-vb-surface"
        />
        {materias.length > 0 && (
          <FlatList
            data={["Todas", ...materias]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(m) => m}
            contentContainerStyle={{ gap: 8 }}
            renderItem={({ item }) => {
              const active = item === "Todas" ? materia === null : materia === item;
              return (
                <TouchableOpacity
                  onPress={() => setMateria(item === "Todas" ? null : item)}
                  className="px-3 py-1.5 rounded-full border"
                  style={{
                    backgroundColor: active ? colors.primary : colors.surface,
                    borderColor: active ? colors.primary : colors.border,
                  }}
                >
                  <Text style={{ color: active ? "#fff" : colors.text }} className="text-sm font-medium">
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>

      {error ? (
        <Text className="text-sm text-vb-danger px-4">{error}</Text>
      ) : !modulos ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(m) => m.id}
          contentContainerStyle={{ padding: 16, paddingTop: 4, gap: 8 }}
          ListEmptyComponent={<Text className="text-sm text-vb-muted text-center mt-8">Sin resultados.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/(alumno)/modulos/${item.id}`)}
              className="bg-vb-surface border border-vb-border rounded-xl p-4"
            >
              <Text className="text-base font-semibold text-vb-text">{item.title}</Text>
              {item.subject ? <Text className="text-xs text-vb-muted mt-1">{item.subject}</Text> : null}
              {item.description ? (
                <Text className="text-sm text-vb-muted mt-1.5" numberOfLines={2}>
                  {item.description}
                </Text>
              ) : null}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
