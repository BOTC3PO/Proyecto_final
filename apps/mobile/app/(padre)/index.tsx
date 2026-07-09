/**
 * PLAN-R Parte 4 — "Hijos: progreso resumido por hijo". Espejo
 * achicado de `apps/web/src/pages/HijosProgreso.tsx`: sólo el resumen
 * (progreso general + lista de módulos con estado) — sin actividades/
 * boletín/límites de permisos/revocar vínculo, que son gestión, no
 * "resumido" (el plan es explícito con esa palabra).
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { apiGet } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";
import type { ChildProgress } from "../../src/types/padre";

const ESTADO_COLOR: Record<string, string> = {
  Completado: colors.success,
  "En curso": colors.accent,
  Bloqueado: colors.muted,
};

function HijoCard({ hijo }: { hijo: ChildProgress }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded((v) => !v)}
      className="bg-vb-surface border border-vb-border rounded-xl p-4"
    >
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 rounded-full bg-vb-bg items-center justify-center">
          <Text className="text-sm font-bold text-vb-text">{hijo.nombre.charAt(0).toUpperCase()}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-base font-semibold text-vb-text">{hijo.nombre}</Text>
          <Text className="text-xs text-vb-muted">{hijo.grado}</Text>
        </View>
        <Text className="text-sm font-semibold text-vb-primary">{hijo.progresoGeneral}%</Text>
      </View>

      {expanded && (
        <View className="mt-3 pt-3 border-t border-vb-border gap-2">
          {hijo.modulos.length === 0 ? (
            <Text className="text-xs text-vb-muted">Sin módulos todavía.</Text>
          ) : (
            hijo.modulos.map((m) => (
              <View key={m.id} className="flex-row items-center justify-between gap-2">
                <Text className="text-xs text-vb-text flex-1" numberOfLines={1}>{m.titulo}</Text>
                <View className="flex-row items-center gap-2">
                  <Text className="text-xs" style={{ color: ESTADO_COLOR[m.estado] ?? colors.muted }}>
                    {m.estado}
                  </Text>
                  <Text className="text-xs text-vb-muted">{m.progreso}%</Text>
                </View>
              </View>
            ))
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function PadreHijos() {
  const [hijos, setHijos] = useState<ChildProgress[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<ChildProgress[]>("/api/progreso/hijos")
      .then((res) => {
        if (!active) return;
        // ponytail: GET /api/progreso/hijos puede devolver un item por
        // cada fila de vínculo padre-hijo en vez de por hijo único (visto
        // en vivo: 15 entradas idénticas para 1 solo hijo, hallazgo de
        // PLAN-R Parte 4) — dedup defensivo acá, el fix real es del lado
        // API/datos, fuera del alcance de este plan.
        const porId = new Map(res.map((h) => [h.id, h]));
        setHijos(Array.from(porId.values()));
      })
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudo cargar el progreso."));
    return () => {
      active = false;
    };
  }, []);

  return (
    <View className="flex-1 bg-vb-bg">
      <Text className="text-2xl font-bold text-vb-text px-4 pt-4 pb-2">Hijos</Text>
      {error ? (
        <Text className="text-sm text-vb-danger px-4">{error}</Text>
      ) : !hijos ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <FlatList
          data={hijos}
          keyExtractor={(h) => h.id}
          contentContainerStyle={{ padding: 16, paddingTop: 4, gap: 8 }}
          ListEmptyComponent={
            <Text className="text-sm text-vb-muted text-center mt-8">
              Todavía no tenés hijos vinculados.
            </Text>
          }
          renderItem={({ item }) => <HijoCard hijo={item} />}
        />
      )}
    </View>
  );
}
