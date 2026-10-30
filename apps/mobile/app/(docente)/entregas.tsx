/**
 * L2 — entregas por tarea para el docente: por cada aula, sus tareas con cuántos alumnos entregaron y
 * cuántas entregas faltan corregir. La corrección (nota y devolución) se hace desde la web.
 */
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView, Text, View } from "react-native";
import { apiGet, apiGetAllItems } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";

type Aula = { id: string; name: string };
type Fila = { entrega: { corregidaAt: string | null } | null };
type Resumen = { aula: string; tareas: Array<{ id: string; titulo: string; entregadas: number; total: number; sinCorregir: number }> };

export default function DocenteEntregas() {
  const [datos, setDatos] = useState<Resumen[] | null>(null);
  const [cargando, setCargando] = useState(false);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      const aulas = await apiGetAllItems<Aula>("/api/aulas", 200);
      const resumenes = await Promise.all(
        aulas.map(async (a) => {
          const { items } = await apiGet<{ items: Array<{ id: string; titulo: string }> }>(`/api/aulas/${a.id}/tareas`);
          const tareas = await Promise.all(
            items.map(async (t) => {
              const { entregas } = await apiGet<{ entregas: Fila[] }>(`/api/tareas/${t.id}/entregas`);
              const hechas = entregas.filter((f) => f.entrega);
              return {
                id: t.id,
                titulo: t.titulo,
                entregadas: hechas.length,
                total: entregas.length,
                sinCorregir: hechas.filter((f) => !f.entrega?.corregidaAt).length
              };
            })
          );
          return { aula: a.name, tareas };
        })
      );
      setDatos(resumenes.filter((r) => r.tareas.length > 0));
    } catch {
      setDatos([]);
    } finally {
      setCargando(false);
    }
  }, []);
  useEffect(() => {
    void cargar();
  }, [cargar]);

  return (
    <ScrollView className="flex-1 bg-vb-bg" contentContainerStyle={{ padding: 16, gap: 12 }}
      refreshControl={<RefreshControl refreshing={cargando} onRefresh={cargar} />}>
      <Text className="text-lg font-semibold text-vb-text">Entregas</Text>
      {datos === null ? (
        <ActivityIndicator color={colors.primary} />
      ) : datos.length === 0 ? (
        <Text className="text-sm text-vb-muted">Todavía no hay tareas en tus aulas. Se crean desde la web.</Text>
      ) : (
        datos.map((r) => (
          <View key={r.aula} className="gap-2 rounded-xl border border-vb-border bg-vb-surface p-3.5">
            <Text className="text-sm font-semibold text-vb-text">{r.aula}</Text>
            {r.tareas.map((t) => (
              <View key={t.id} className="flex-row items-center justify-between gap-2">
                <Text className="flex-1 text-sm text-vb-text">{t.titulo}</Text>
                <Text className="text-xs text-vb-muted">
                  {t.entregadas}/{t.total} entregaron{t.sinCorregir ? ` · ${t.sinCorregir} sin corregir` : ""}
                </Text>
              </View>
            ))}
          </View>
        ))
      )}
    </ScrollView>
  );
}
