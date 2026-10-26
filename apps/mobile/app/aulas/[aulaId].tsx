/**
 * PLAN-R Parte 5 — asistencia táctil (el caso "aula" del ledger:
 * el docente está parado en el salón, quiere marcar presente/ausente/
 * tarde/justificado rápido desde el teléfono). Única excepción de
 * escritura del shell docente-consulta — no toca contenido/curricula,
 * sólo el registro diario de asistencia de HOY (sin navegar a otras
 * fechas, per "táctil" y "uso diario": no es un editor de historial).
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { apiGet, apiPut } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";
import type { EstadoAsistencia, PlanillaAsistencia } from "../../src/types/docente";

const ESTADOS: { value: EstadoAsistencia; label: string; color: string }[] = [
  { value: "presente", label: "Presente", color: colors.success },
  { value: "ausente", label: "Ausente", color: colors.danger },
  { value: "tarde", label: "Tarde", color: colors.warning },
  { value: "justificado", label: "Justificado", color: colors.accent },
];

function hoyISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export default function AsistenciaAula() {
  const { aulaId } = useLocalSearchParams<{ aulaId: string }>();
  const [planilla, setPlanilla] = useState<PlanillaAsistencia | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const fecha = hoyISO();

  useEffect(() => {
    if (!aulaId) return;
    let active = true;
    apiGet<PlanillaAsistencia>(`/api/aulas/${aulaId}/asistencia?fecha=${fecha}`)
      .then((res) => active && setPlanilla(res))
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudo cargar la asistencia."));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aulaId]);

  const setEstado = (alumnoId: string, estado: EstadoAsistencia) => {
    setSaved(false);
    setPlanilla((prev) =>
      prev
        ? { ...prev, alumnos: prev.alumnos.map((a) => (a.alumnoId === alumnoId ? { ...a, estado } : a)) }
        : prev,
    );
  };

  const onGuardar = async () => {
    if (!aulaId || !planilla) return;
    setSaving(true);
    setError(null);
    try {
      await apiPut(`/api/aulas/${aulaId}/asistencia/${fecha}`, {
        registros: planilla.alumnos
          .filter((a): a is typeof a & { estado: EstadoAsistencia } => a.estado !== null)
          .map((a) => ({ alumnoId: a.alumnoId, estado: a.estado, notas: a.notas })),
      });
      setSaved(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo guardar la asistencia.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <View className="flex-1 bg-vb-bg">
      <View className="flex-row items-center gap-2 px-3 py-2 border-b border-vb-border bg-vb-surface">
        <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2" hitSlop={8}>
          <Feather name="arrow-left" size={20} color={colors.text} />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-sm font-semibold text-vb-text">Asistencia</Text>
          <Text className="text-xs text-vb-muted">{fecha}</Text>
        </View>
      </View>

      {error ? <Text className="text-sm text-vb-danger px-4 pt-3">{error}</Text> : null}

      {!planilla ? (
        <ActivityIndicator className="mt-8" color={colors.primary} />
      ) : (
        <ScrollView contentContainerStyle={{ padding: 16, gap: 8 }}>
          {planilla.alumnos.length === 0 ? (
            <Text className="text-sm text-vb-muted text-center mt-8">Sin alumnos en esta aula.</Text>
          ) : (
            planilla.alumnos.map((alumno) => (
              <View key={alumno.alumnoId} className="bg-vb-surface border border-vb-border rounded-xl p-3 gap-2">
                <Text className="text-sm font-medium text-vb-text">{alumno.nombre}</Text>
                <View className="flex-row flex-wrap gap-1.5">
                  {ESTADOS.map((e) => {
                    const active = alumno.estado === e.value;
                    return (
                      <TouchableOpacity
                        key={e.value}
                        onPress={() => setEstado(alumno.alumnoId, e.value)}
                        className="px-3 py-1.5 rounded-full border"
                        style={{ backgroundColor: active ? e.color : colors.bg, borderColor: active ? e.color : colors.border, minHeight: 44, justifyContent: "center" }}
                      >
                        <Text className="text-xs font-medium" style={{ color: active ? "#fff" : colors.text }}>
                          {e.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ))
          )}
        </ScrollView>
      )}

      <View className="p-3 border-t border-vb-border bg-vb-surface">
        <TouchableOpacity
          onPress={onGuardar}
          disabled={saving || !planilla}
          className="bg-vb-primary rounded-lg py-3 items-center"
          style={{ opacity: saving ? 0.6 : 1 }}
        >
          <Text className="text-white font-semibold">
            {saving ? "Guardando..." : saved ? "Guardado ✓" : "Guardar asistencia"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
