/**
 * PLAN-R Parte 2 — mensajes: espejo simplificado de
 * `apps/web/src/pages/Mensajeria.tsx` (tabs Mensajes/Avisos). Crear
 * hilo nuevo (buscar destinatario) queda afuera — sólo responder
 * hilos existentes, que es lo que pide el plan ("lista + detalle +
 * responder").
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { apiGet, apiPost } from "../../../src/api/client";
import { colors } from "../../../src/theme/tokens";
import type { Aviso, Hilo } from "../../../src/types/mensajeria";

type Tab = "mensajes" | "avisos";

export default function MensajesIndex() {
  const [tab, setTab] = useState<Tab>("mensajes");
  const [hilos, setHilos] = useState<Hilo[] | null>(null);
  const [avisos, setAvisos] = useState<Aviso[] | null>(null);

  useEffect(() => {
    let active = true;
    apiGet<{ items: Hilo[] }>("/api/mensajeria/hilos")
      .then((res) => active && setHilos(res.items ?? []))
      .catch(() => active && setHilos([]));
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (tab !== "avisos" || avisos !== null) return;
    let active = true;
    apiGet<{ items: Aviso[] }>("/api/mensajeria/avisos")
      .then((res) => active && setAvisos(res.items ?? []))
      .catch(() => active && setAvisos([]));
    return () => {
      active = false;
    };
  }, [tab, avisos]);

  const marcarLeido = async (aviso: Aviso) => {
    if (aviso.leido) return;
    setAvisos((prev) => prev?.map((a) => (a.id === aviso.id ? { ...a, leido: 1 } : a)) ?? null);
    try {
      await apiPost(`/api/mensajeria/avisos/${aviso.id}/leer`, {});
    } catch {
      // best-effort; el badge de no-leídos se recalcula en el próximo fetch igual.
    }
  };

  return (
    <View className="flex-1 bg-vb-bg">
      <Text className="text-2xl font-bold text-vb-text px-4 pt-4 pb-2">Mensajes</Text>
      <View className="flex-row gap-2 px-4 pb-2">
        {(["mensajes", "avisos"] as const).map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setTab(t)}
            className="px-3 py-1.5 rounded-full border"
            style={{
              backgroundColor: tab === t ? colors.primary : colors.surface,
              borderColor: tab === t ? colors.primary : colors.border,
            }}
          >
            <Text style={{ color: tab === t ? "#fff" : colors.text }} className="text-sm font-medium capitalize">
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {tab === "mensajes" ? (
        !hilos ? (
          <ActivityIndicator className="mt-8" color={colors.primary} />
        ) : (
          <FlatList
            data={hilos}
            keyExtractor={(h) => h.id}
            contentContainerStyle={{ padding: 16, paddingTop: 4, gap: 8 }}
            ListEmptyComponent={<Text className="text-sm text-vb-muted text-center mt-8">Sin conversaciones.</Text>}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/(alumno)/mensajes/[hiloId]",
                    params: { hiloId: item.id, otroId: item.otroId, otroNombre: item.otroNombre },
                  })
                }
                className="bg-vb-surface border border-vb-border rounded-xl p-3.5"
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm font-semibold text-vb-text flex-1" numberOfLines={1}>
                    {item.otroNombre}
                  </Text>
                  {item.noLeidos > 0 && (
                    <View className="bg-vb-primary rounded-full min-w-[20px] h-5 items-center justify-center px-1">
                      <Text className="text-[11px] text-white font-semibold">{item.noLeidos}</Text>
                    </View>
                  )}
                </View>
                {item.ultimoMsg ? (
                  <Text className="text-xs text-vb-muted mt-1" numberOfLines={1}>
                    {item.ultimoMsg}
                  </Text>
                ) : null}
              </TouchableOpacity>
            )}
          />
        )
      ) : !avisos ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <FlatList
          data={avisos}
          keyExtractor={(a) => a.id}
          contentContainerStyle={{ padding: 16, paddingTop: 4, gap: 8 }}
          ListEmptyComponent={<Text className="text-sm text-vb-muted text-center mt-8">Sin avisos.</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => marcarLeido(item)}
              className="bg-vb-surface border border-vb-border rounded-xl p-3.5"
              style={{ opacity: item.leido ? 0.6 : 1 }}
            >
              <Text className="text-sm font-semibold text-vb-text">{item.titulo}</Text>
              <Text className="text-xs text-vb-muted mt-1">{item.cuerpo}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
