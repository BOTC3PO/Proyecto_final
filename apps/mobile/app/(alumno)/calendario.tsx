/**
 * PLAN-R Parte 2 — calendario de alumno: lista de eventos, sin
 * edición (a diferencia de `ProfesorCalendario.tsx` en la web, que sí
 * crea/edita — ese es un componente docente, no lo reusamos). Mismo
 * endpoint (`fetchCalendarioUnificado` en
 * `apps/web/src/services/calendarioUnificado.ts`), mes actual fijo
 * (sin navegación mes a mes — "lista", no "grilla", per el plan).
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, SectionList, Text, View } from "react-native";
import { apiGet } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";
import type { EventoCalendario } from "../../src/types/calendario";

const TIPO_LABEL: Record<string, string> = {
  feriado: "Feriado",
  vacaciones: "Vacaciones",
  acto_escolar: "Acto escolar",
  evento_institucional: "Evento institucional",
  sin_clases: "Sin clases",
  clase: "Clase",
  evaluacion: "Evaluación",
  evento: "Evento",
};

function rangoMesActual(): { desde: string; hasta: string } {
  const now = new Date();
  const desde = new Date(now.getFullYear(), now.getMonth(), 1);
  const hasta = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { desde: fmt(desde), hasta: fmt(hasta) };
}

export default function AlumnoCalendario() {
  const [eventos, setEventos] = useState<EventoCalendario[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const { desde, hasta } = rangoMesActual();
    apiGet<{ eventos: EventoCalendario[] }>(`/api/calendario/unificado?desde=${desde}&hasta=${hasta}`)
      .then((res) => active && setEventos(res.eventos ?? []))
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudo cargar el calendario."));
    return () => {
      active = false;
    };
  }, []);

  const sections = (eventos ?? [])
    .slice()
    .sort((a, b) => a.fechaInicio.localeCompare(b.fechaInicio))
    .reduce<{ title: string; data: EventoCalendario[] }[]>((acc, ev) => {
      const dia = ev.fechaInicio.slice(0, 10);
      const last = acc[acc.length - 1];
      if (last?.title === dia) last.data.push(ev);
      else acc.push({ title: dia, data: [ev] });
      return acc;
    }, []);

  return (
    <View className="flex-1 bg-vb-bg">
      <Text className="text-2xl font-bold text-vb-text px-4 pt-4 pb-2">Calendario</Text>
      {error ? (
        <Text className="text-sm text-vb-danger px-4">{error}</Text>
      ) : !eventos ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(ev) => ev.id}
          contentContainerStyle={{ padding: 16, paddingTop: 4, gap: 4 }}
          ListEmptyComponent={
            <Text className="text-sm text-vb-muted text-center mt-8">Sin eventos este mes.</Text>
          }
          renderSectionHeader={({ section }) => (
            <Text className="text-xs font-semibold uppercase text-vb-muted mt-3 mb-1">
              {new Date(`${section.title}T00:00:00`).toLocaleDateString("es-AR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </Text>
          )}
          renderItem={({ item }) => (
            <View className="bg-vb-surface border border-vb-border rounded-xl p-3.5 mb-2">
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-medium text-vb-text flex-1">{item.titulo}</Text>
                <View className="bg-vb-bg rounded-full px-2 py-0.5">
                  <Text className="text-[10px] text-vb-muted">{TIPO_LABEL[item.tipo] ?? item.tipo}</Text>
                </View>
              </View>
              {item.aulaNombre ? <Text className="text-xs text-vb-muted mt-1">{item.aulaNombre}</Text> : null}
              {item.descripcion ? <Text className="text-xs text-vb-muted mt-1">{item.descripcion}</Text> : null}
            </View>
          )}
        />
      )}
    </View>
  );
}
