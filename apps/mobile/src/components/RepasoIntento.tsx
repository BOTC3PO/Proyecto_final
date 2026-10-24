/**
 * Repaso de un intento entregado: en qué temas falló el alumno y cuáles repasar. Espejo nativo de
 * `apps/web/src/components/quizzes/RepasoIntento.tsx`. No muestra nada si el intento no trae detalle por tema.
 */
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { apiGet } from "../api/client";
import { colors } from "../theme/tokens";
import type { GrupoRepaso, Repaso } from "../types/quiz";

const SECCIONES: Record<string, string> = {
  gramatica: "Gramática",
  reading: "Lectura",
  listening: "Comprensión auditiva",
  speaking: "Expresión oral",
  writing: "Escritura",
};
export const etiquetaDeGrupo = (g: Pick<GrupoRepaso, "tipo" | "titulo">) => (g.tipo === "seccion" ? SECCIONES[g.titulo] ?? g.titulo : g.titulo);
/** Rojo bajo el umbral, ámbar hasta el 80 %, verde desde ahí (el corte de la recomendación). */
export const colorDe = (porcentaje: number, umbral: number) => (porcentaje < umbral ? colors.danger : porcentaje < 80 ? colors.warning : colors.success);

function mensaje(r: Repaso, esSeccion: boolean): string {
  if (r.aprobado === false) {
    return esSeccion
      ? `Todavía no llegás al ${r.umbral} %. Estas son las partes donde más fallaste: practicalas y volvé a intentar.`
      : `Todavía no llegás al ${r.umbral} %. No es un final: mirá en qué temas fallaste, repasalos y volvé a intentar.`;
  }
  if (r.recomendados.length > 0) return "Aprobaste. Estos temas todavía se pueden afianzar:";
  return "Aprobaste y no quedó ningún tema flojo. Bien hecho.";
}

export function RepasoIntento({ attemptId, ocultarPuntos = false }: { attemptId: string; ocultarPuntos?: boolean }) {
  const [repaso, setRepaso] = useState<Repaso | null>(null);
  const [verPreguntas, setVerPreguntas] = useState(false);

  useEffect(() => {
    let activo = true;
    apiGet<Repaso>(`/api/quiz-attempts/${attemptId}/repaso`)
      .then((r) => activo && setRepaso(r))
      .catch(() => activo && setRepaso(null));
    return () => { activo = false; };
  }, [attemptId]);

  if (!repaso || !repaso.disponible || repaso.porGrupo.length === 0) return null;
  const esSeccion = repaso.porGrupo.every((g) => g.tipo === "seccion");
  const falladas = repaso.preguntas.filter((p) => !p.correcta && !p.pendiente);

  return (
    <View className="gap-4 mt-4 w-full">
      <Text className="text-lg font-bold text-vb-text">{esSeccion ? "En qué parte fallaste" : "En qué temas fallaste"}</Text>
      <View className="rounded-xl border border-vb-border bg-vb-surface p-3">
        <Text className="text-sm text-vb-text">{mensaje(repaso, esSeccion)}</Text>
      </View>

      {!ocultarPuntos && (
        <View className="gap-3">
          {repaso.porGrupo.map((g) => (
            <View key={`${g.tipo}:${g.id}`} className="gap-1">
              <View className="flex-row justify-between gap-2">
                <Text className="text-sm text-vb-text flex-1">{etiquetaDeGrupo(g)}</Text>
                <Text className="text-xs font-semibold" style={{ color: colorDe(g.porcentaje, repaso.umbral) }}>
                  {g.correctas} de {g.total} · {g.porcentaje} %
                </Text>
              </View>
              <View style={{ height: 8, borderRadius: 4, backgroundColor: colors.border, overflow: "hidden" }}>
                <View style={{ width: `${g.porcentaje}%`, height: "100%", backgroundColor: colorDe(g.porcentaje, repaso.umbral) }} />
              </View>
            </View>
          ))}
        </View>
      )}

      {repaso.recomendados.length > 0 && (
        <View className="gap-2">
          <Text className="text-base font-semibold text-vb-text">Para repasar primero</Text>
          {repaso.recomendados.map((g) => (
            <View key={g.id} className="flex-row items-center justify-between gap-2">
              <Text className="text-sm text-vb-text flex-1">{g.titulo}</Text>
              {g.moduloId ? (
                <TouchableOpacity onPress={() => router.push(`/(alumno)/modulos/${g.moduloId}`)} className="border border-vb-border rounded-lg px-3 py-2">
                  <Text className="text-sm text-vb-primary">Abrir el tema</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          ))}
        </View>
      )}

      {falladas.length > 0 && (
        <View className="gap-2">
          <TouchableOpacity onPress={() => setVerPreguntas((v) => !v)}>
            <Text className="text-base font-semibold text-vb-text">
              {verPreguntas ? "▾" : "▸"} Preguntas para revisar ({falladas.length})
            </Text>
          </TouchableOpacity>
          {verPreguntas &&
            falladas.map((p) => (
              <View key={p.id} className="rounded-lg border border-vb-border bg-vb-surface p-3 gap-1">
                <Text className="text-sm text-vb-text">{p.prompt}</Text>
                {p.explicacion ? <Text className="text-xs text-vb-muted">{p.explicacion}</Text> : null}
              </View>
            ))}
        </View>
      )}
    </View>
  );
}
