/**
 * PLAN-R Parte 2 — detalle de módulo. Espejo de
 * `apps/web/src/pages/modulos/ModuloDetail.tsx`, achicado a lo que un
 * alumno necesita (sin edición).
 *
 * Teoría — dispatch por tipo, mismo criterio que
 * `apps/web/src/components/modulos/TheoryItemCard.tsx`:
 *   - Texto/Nota/Artículo/Documento/Video (y sus alias en inglés) son
 *     TODOS texto plano en el modelo actual (incl. "Documento" — no
 *     referencia un Page, es el mismo `detail` como string; hallazgo
 *     al releer TheoryItemCard.tsx para esta parte del plan).
 *   - Enlace abre por Linking (nativo, no hace falta WebView para una URL).
 *   - Todo lo demás (Presentación, Herramienta, HerramientaStandalone,
 *     Libro, TuesdayJS) abre el módulo completo en WebContent — reusa
 *     el mismo TheoryItemCard de la web (BookReaderOverlay,
 *     SlidePresenter, BlockRenderer, herramientas standalone) en vez
 *     de reconstruir un router por-item; el alumno toca la misma
 *     tarjeta ahí adentro. Evita inventar rutas web nuevas para esto.
 *
 * Quizzes: sólo lista (jugar nativo es Parte 3) — tap abre el módulo
 * en WebContent, mismo fallback.
 */
import { useEffect, useState } from "react";
import { ActivityIndicator, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { apiGet } from "../../../src/api/client";
import { colors } from "../../../src/theme/tokens";
import type { ModuloDetalle, TheoryItem } from "../../../src/types/modulo";

const TEXT_TYPES = new Set([
  "Texto", "Nota", "Artículo", "Documento", "Video",
  "note", "article",
]);
const LINK_TYPES = new Set(["Enlace", "link"]);

function isExternalUrl(v: string) {
  return v.startsWith("http://") || v.startsWith("https://");
}

function TheoryRow({ item, onOpenWeb }: { item: TheoryItem; onOpenWeb: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (TEXT_TYPES.has(item.type)) {
    return (
      <TouchableOpacity
        onPress={() => setExpanded((v) => !v)}
        className="bg-vb-surface border border-vb-border rounded-xl p-3.5"
      >
        <View className="flex-row items-center gap-2">
          <Feather name="file-text" size={16} color={colors.muted} />
          <Text className="text-sm font-medium text-vb-text flex-1">{item.title}</Text>
          <Feather name={expanded ? "chevron-up" : "chevron-down"} size={16} color={colors.muted} />
        </View>
        {expanded && item.detail ? (
          <Text className="text-sm text-vb-muted mt-2">{item.detail}</Text>
        ) : null}
      </TouchableOpacity>
    );
  }

  if (LINK_TYPES.has(item.type)) {
    return (
      <TouchableOpacity
        onPress={() => {
          if (isExternalUrl(item.detail)) Linking.openURL(item.detail);
          else onOpenWeb();
        }}
        className="bg-vb-surface border border-vb-border rounded-xl p-3.5 flex-row items-center gap-2"
      >
        <Feather name="external-link" size={16} color={colors.muted} />
        <Text className="text-sm font-medium text-vb-text flex-1">{item.title}</Text>
      </TouchableOpacity>
    );
  }

  // Presentación, Herramienta, HerramientaStandalone, Libro, TuesdayJS.
  return (
    <TouchableOpacity
      onPress={onOpenWeb}
      className="bg-vb-surface border border-vb-border rounded-xl p-3.5 flex-row items-center gap-2"
    >
      <Feather name="layout" size={16} color={colors.muted} />
      <Text className="text-sm font-medium text-vb-text flex-1">{item.title}</Text>
      <Text className="text-xs text-vb-muted">{item.type}</Text>
    </TouchableOpacity>
  );
}

export default function ModuloDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [modulo, setModulo] = useState<ModuloDetalle | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let active = true;
    apiGet<ModuloDetalle>(`/api/modulos/${id}`)
      .then((res) => active && setModulo(res))
      .catch((e) => active && setError(e instanceof Error ? e.message : "No se pudo cargar el módulo."));
    return () => {
      active = false;
    };
  }, [id]);

  const openInWeb = () => {
    if (!modulo) return;
    router.push({ pathname: "/webview", params: { path: `/modulos/${modulo.id}`, title: modulo.title } });
  };

  if (error) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center px-6">
        <Text className="text-sm text-vb-danger text-center">{error}</Text>
      </View>
    );
  }
  if (!modulo) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-vb-bg" contentContainerStyle={{ padding: 16, gap: 20 }}>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity onPress={() => router.back()} className="p-1 -ml-1" hitSlop={8}>
          <Feather name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-vb-text flex-1" numberOfLines={2}>
          {modulo.title}
        </Text>
      </View>

      {(modulo.subject || modulo.durationMinutes) && (
        <View className="flex-row flex-wrap gap-2">
          {modulo.subject ? (
            <View className="bg-vb-surface border border-vb-border rounded-full px-3 py-1">
              <Text className="text-xs text-vb-muted">{modulo.subject}</Text>
            </View>
          ) : null}
          {modulo.durationMinutes ? (
            <View className="bg-vb-surface border border-vb-border rounded-full px-3 py-1">
              <Text className="text-xs text-vb-muted">{modulo.durationMinutes} min</Text>
            </View>
          ) : null}
        </View>
      )}

      {modulo.description ? <Text className="text-sm text-vb-muted">{modulo.description}</Text> : null}

      <View className="gap-2">
        <Text className="text-base font-semibold text-vb-text">Teoría</Text>
        {!modulo.theoryItems || modulo.theoryItems.length === 0 ? (
          <Text className="text-sm text-vb-muted">Este módulo todavía no tiene teoría.</Text>
        ) : (
          modulo.theoryItems.map((item) => (
            <TheoryRow key={item.id} item={item} onOpenWeb={openInWeb} />
          ))
        )}
      </View>

      <View className="gap-2">
        <Text className="text-base font-semibold text-vb-text">Cuestionarios</Text>
        {!modulo.quizzes || modulo.quizzes.length === 0 ? (
          <Text className="text-sm text-vb-muted">Este módulo todavía no tiene cuestionarios.</Text>
        ) : (
          modulo.quizzes.map((quiz) => (
            <TouchableOpacity
              key={quiz.id}
              onPress={openInWeb}
              className="bg-vb-surface border border-vb-border rounded-xl p-3.5 flex-row items-center gap-2"
            >
              <Feather name="help-circle" size={16} color={colors.muted} />
              <Text className="text-sm font-medium text-vb-text flex-1">{quiz.title}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}
