/**
 * PLAN-R Parte 4 — cuotas pendientes + historial. Espejo de
 * `apps/web/src/pages/Pagos.tsx` (mismo endpoint `/api/cuotas/mias` —
 * "el back ya resuelve tanto las cuotas propias del alumno como las de
 * sus hijos vinculados si es PARENT, el front no necesita distinguir
 * el rol", literal del comentario original).
 *
 * Pagar: NUNCA reimplementar el checkout en nativo (per el plan) — se
 * abre la `url` que devuelve `/api/cuotas/:id/checkout` en el
 * navegador del SISTEMA (`Linking.openURL`), no en el WebView propio:
 * un checkout de pasarela de pago suele tener 3D-secure/redirects que
 * algunas pasarelas bloquean directamente dentro de un WebView
 * embebido por seguridad — el navegador del sistema es el camino
 * confiable, y el plan permite "WebContent/browser" indistintamente.
 * Al volver a la app (AppState → "active"), se recarga la lista para
 * reflejar el estado nuevo (el job de reconciliación de PLAN-B ya
 * cubre los pagos que quedan a medias).
 */
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, AppState, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { apiGet, apiPost } from "../../src/api/client";
import { colors } from "../../src/theme/tokens";
import type { CuotaAlumno } from "../../src/types/padre";

const money = (n: number, moneda = "ARS") =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: moneda }).format(n ?? 0);

const ESTADO_LABEL: Record<string, string> = {
  pendiente: "Pendiente",
  en_proceso: "En proceso",
  pagada: "Pagada",
  vencida: "Vencida",
  anulada: "Anulada",
};
const ESTADO_COLOR: Record<string, string> = {
  pendiente: colors.warning,
  en_proceso: colors.accent,
  pagada: colors.success,
  vencida: colors.danger,
  anulada: colors.muted,
};

export default function PadrePagos() {
  const [items, setItems] = useState<CuotaAlumno[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [pagando, setPagando] = useState<string | null>(null);
  const esperandoRegreso = useRef(false);

  const load = () => {
    apiGet<{ items: CuotaAlumno[] }>("/api/cuotas/mias")
      .then((res) => setItems(res.items))
      .catch((e) => setError(e instanceof Error ? e.message : "No pudimos cargar tus cuotas."));
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active" && esperandoRegreso.current) {
        esperandoRegreso.current = false;
        load();
      }
    });
    return () => sub.remove();
  }, []);

  const pagar = async (cuota: CuotaAlumno) => {
    setPagando(cuota.id);
    setMensaje(null);
    try {
      const resp = await apiPost<{ url: string | null }>(`/api/cuotas/${cuota.id}/checkout`, {});
      if (resp.url) {
        esperandoRegreso.current = true;
        await Linking.openURL(resp.url);
      } else {
        setMensaje("Tu escuela todavía no conectó un medio de pago online. Coordiná el pago con la administración.");
        load();
      }
    } catch {
      setMensaje("No se pudo iniciar el pago.");
    } finally {
      setPagando(null);
    }
  };

  if (error) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center px-6">
        <Text className="text-sm text-vb-danger text-center">{error}</Text>
      </View>
    );
  }
  if (!items) {
    return (
      <View className="flex-1 bg-vb-bg items-center justify-center">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  const pendientes = items.filter((c) => c.estado === "pendiente" || c.estado === "en_proceso");
  const historial = items.filter((c) => c.estado === "pagada" || c.estado === "vencida" || c.estado === "anulada");

  return (
    <ScrollView className="flex-1 bg-vb-bg" contentContainerStyle={{ padding: 16, gap: 20 }}>
      <Text className="text-2xl font-bold text-vb-text">Pagos</Text>
      {mensaje ? <Text className="text-sm text-vb-primary">{mensaje}</Text> : null}

      <View className="gap-2">
        <Text className="text-base font-semibold text-vb-text">Pendientes</Text>
        {pendientes.length === 0 ? (
          <Text className="text-sm text-vb-muted">No tenés cuotas pendientes.</Text>
        ) : (
          pendientes.map((c) => (
            <View key={c.id} className="bg-vb-surface border border-vb-border rounded-xl p-3.5 gap-2">
              <View className="flex-row items-center justify-between gap-2">
                <Text className="text-sm font-medium text-vb-text flex-1">{c.cobro?.concepto ?? "Cuota"}</Text>
                <Text className="text-xs" style={{ color: ESTADO_COLOR[c.estado] }}>
                  {ESTADO_LABEL[c.estado] ?? c.estado}
                </Text>
              </View>
              {c.alumnoNombre ? <Text className="text-xs text-vb-muted">{c.alumnoNombre}</Text> : null}
              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-vb-muted">{money(c.montoFinal, c.cobro?.moneda)}</Text>
                <TouchableOpacity
                  onPress={() => pagar(c)}
                  disabled={pagando === c.id}
                  className="bg-vb-primary rounded-lg px-4 py-2"
                  style={{ opacity: pagando === c.id ? 0.6 : 1 }}
                >
                  <Text className="text-white text-xs font-semibold">
                    {pagando === c.id ? "Iniciando..." : "Pagar"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>

      <View className="gap-2">
        <Text className="text-base font-semibold text-vb-text">Historial</Text>
        {historial.length === 0 ? (
          <Text className="text-sm text-vb-muted">Sin pagos registrados todavía.</Text>
        ) : (
          historial.map((c) => (
            <View key={c.id} className="bg-vb-surface border border-vb-border rounded-xl p-3.5 flex-row items-center justify-between gap-2">
              <View className="flex-1">
                <Text className="text-sm text-vb-text">{c.cobro?.concepto ?? "Cuota"}</Text>
                {c.alumnoNombre ? <Text className="text-xs text-vb-muted">{c.alumnoNombre}</Text> : null}
              </View>
              <Text className="text-xs text-vb-muted">{money(c.montoFinal, c.cobro?.moneda)}</Text>
              <Text className="text-xs" style={{ color: ESTADO_COLOR[c.estado] }}>
                {ESTADO_LABEL[c.estado] ?? c.estado}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}
