/**
 * L2 — tareas pendientes del alumno. Tocar una tarea la abre: muestra la consigna y permite entregar
 * (texto y un enlace opcional). Mismos endpoints que la web: GET /api/tareas, GET /api/tareas/:id y
 * POST /api/tareas/:id/entregas.
 */
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { apiGet, apiPost } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";

type TareaResumen = { id: string; titulo: string; curso: string; vence: string };
type Detalle = { tarea: { id: string; titulo: string; consigna: string; estado: string }; miEntrega: { texto: string; enlace: string | null; corregidaAt: string | null; nota: number | null; devolucion: string | null } | null };

function TareaAbierta({ id, onEntregada }: { id: string; onEntregada: () => void }) {
  const [detalle, setDetalle] = useState<Detalle | null>(null);
  const [texto, setTexto] = useState("");
  const [enlace, setEnlace] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    apiGet<Detalle>(`/api/tareas/${id}`).then((d) => {
      setDetalle(d);
      setTexto(d.miEntrega?.texto ?? "");
      setEnlace(d.miEntrega?.enlace ?? "");
    }).catch(() => setMsg("No se pudo abrir la tarea."));
  }, [id]);

  const entregar = async () => {
    setEnviando(true);
    setMsg(null);
    try {
      await apiPost(`/api/tareas/${id}/entregas`, { texto, enlace: enlace.trim() || null });
      setMsg("Entrega guardada.");
      onEntregada();
    } catch (e) {
      setMsg(e instanceof Error ? e.message : "No se pudo entregar.");
    } finally {
      setEnviando(false);
    }
  };

  if (!detalle) return <ActivityIndicator color={colors.primary} />;
  const corregida = Boolean(detalle.miEntrega?.corregidaAt);
  return (
    <View className="gap-2 pt-2">
      <Text className="text-sm text-vb-text">{detalle.tarea.consigna}</Text>
      {corregida ? (
        <Text className="text-sm text-vb-text">
          Nota: {detalle.miEntrega?.nota ?? "—"}{detalle.miEntrega?.devolucion ? ` — ${detalle.miEntrega.devolucion}` : ""}
        </Text>
      ) : detalle.tarea.estado === "cerrada" ? (
        <Text className="text-xs text-vb-muted">La tarea está cerrada: ya no recibe entregas.</Text>
      ) : (
        <>
          <TextInput value={texto} onChangeText={setTexto} multiline placeholder="Tu respuesta"
            className="min-h-[96px] rounded-lg border border-vb-border bg-vb-bg p-2 text-sm text-vb-text" />
          <TextInput value={enlace} onChangeText={setEnlace} placeholder="Enlace (opcional)" autoCapitalize="none"
            className="rounded-lg border border-vb-border bg-vb-bg p-2 text-sm text-vb-text" />
          <TouchableOpacity onPress={entregar} disabled={enviando || !texto.trim()}
            className="self-start rounded-lg bg-vb-primary px-4 py-2" style={{ opacity: enviando || !texto.trim() ? 0.6 : 1 }}>
            <Text className="text-xs font-semibold text-white">{detalle.miEntrega ? "Volver a entregar" : "Entregar"}</Text>
          </TouchableOpacity>
        </>
      )}
      {msg ? <Text className="text-xs text-vb-muted">{msg}</Text> : null}
    </View>
  );
}

export default function AlumnoTareas() {
  const [tareas, setTareas] = useState<TareaResumen[] | null>(null);
  const [abierta, setAbierta] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const cargar = useCallback(async () => {
    setCargando(true);
    try {
      setTareas(await apiGet<TareaResumen[]>("/api/tareas"));
    } catch {
      setTareas([]);
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
      <Text className="text-lg font-semibold text-vb-text">Tareas pendientes</Text>
      {tareas === null ? (
        <ActivityIndicator color={colors.primary} />
      ) : tareas.length === 0 ? (
        <Text className="text-sm text-vb-muted">No tenés tareas pendientes.</Text>
      ) : (
        tareas.map((t) => (
          <View key={t.id} className="rounded-xl border border-vb-border bg-vb-surface p-3.5">
            <TouchableOpacity onPress={() => setAbierta(abierta === t.id ? null : t.id)}>
              <Text className="text-sm font-medium text-vb-text">{t.titulo}</Text>
              <Text className="text-xs text-vb-muted">{t.curso} · vence {t.vence}</Text>
            </TouchableOpacity>
            {abierta === t.id ? <TareaAbierta id={t.id} onEntregada={() => void cargar()} /> : null}
          </View>
        ))
      )}
    </ScrollView>
  );
}
