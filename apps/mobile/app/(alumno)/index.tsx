/**
 * PLAN-R Parte 1 — dashboard del alumno. Espejo de datos de
 * `apps/web/src/pages/menu-alumno.tsx` (mismos 3 endpoints), UI nativa
 * propia (no reusa JSX web). Sólo las 4 stat cards + lista de tareas;
 * "Mis módulos" con navegación real es Parte 2.
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { apiGet } from "../../src/api/client";
import { useAuth } from "../../src/auth/AuthContext";
import type { ModuloResumen, ProgressResponse, TareaResumen } from "../../src/types/dashboard";

type Stats = { completedModules: number; modulesCount: number; progressPercent: number };

export default function AlumnoInicio() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [statsError, setStatsError] = useState<string | null>(null);
  const [tareas, setTareas] = useState<TareaResumen[]>([]);
  const [coins, setCoins] = useState<number | null>(null);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    Promise.all([
      apiGet<{ items: ModuloResumen[] }>("/api/modulos"),
      apiGet<ProgressResponse>(`/api/progreso?usuarioId=${user.id}`),
    ])
      .then(([modulesRes, progressRes]) => {
        if (!active) return;
        const completedSet = new Set(
          progressRes.items.filter((i) => i.status === "completado").map((i) => i.moduloId),
        );
        const total = modulesRes.items.length;
        const completed = modulesRes.items.filter((m) => completedSet.has(m.id)).length;
        setStats({
          completedModules: completed,
          modulesCount: total,
          progressPercent: total === 0 ? 0 : Math.round((completed / total) * 100),
        });
      })
      .catch((e) => active && setStatsError(e instanceof Error ? e.message : "No se pudo cargar el progreso."));
    return () => {
      active = false;
    };
  }, [user?.id]);

  useEffect(() => {
    let active = true;
    apiGet<TareaResumen[]>("/api/tareas")
      .then((data) => active && setTareas(data))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!user?.id) return;
    let active = true;
    apiGet<{ saldo: number }>(`/api/economia/saldos?usuarioId=${user.id}`)
      .then((res) => active && setCoins(res.saldo))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [user?.id]);

  return (
    <ScrollView className="flex-1 bg-vb-bg" contentContainerStyle={{ padding: 16, gap: 16 }}>
      <View>
        <Text className="text-2xl font-bold text-vb-text">Bienvenido, {user?.name}</Text>
        <Text className="text-sm text-vb-muted mt-1">Alumno</Text>
      </View>

      {statsError ? (
        <Text className="text-sm text-vb-danger">{statsError}</Text>
      ) : !stats ? (
        <ActivityIndicator />
      ) : (
        <View className="flex-row flex-wrap gap-3">
          <StatCard value={stats.completedModules} label="Módulos completados" />
          <StatCard value={`${stats.progressPercent}%`} label="Progreso general" />
          <StatCard value={tareas.length} label="Tareas pendientes" />
          <StatCard value={coins ?? "…"} label="Monedas" />
        </View>
      )}

      <View>
        <Text className="text-base font-semibold text-vb-text mb-2">Tareas pendientes</Text>
        {tareas.length === 0 ? (
          <Text className="text-sm text-vb-muted">No hay tareas pendientes.</Text>
        ) : (
          <View className="gap-2">
            {tareas.map((t) => (
              <View key={t.id} className="bg-vb-surface border border-vb-border rounded-xl px-3.5 py-2.5">
                <Text className="text-sm font-medium text-vb-text">{t.titulo}</Text>
                <Text className="text-xs text-vb-muted">
                  {t.curso} · Vence {t.vence}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <View className="bg-vb-surface border border-vb-border rounded-xl p-4 grow basis-[45%]">
      <Text className="text-2xl font-semibold text-vb-text">{value}</Text>
      <Text className="text-xs text-vb-muted mt-1">{label}</Text>
    </View>
  );
}
