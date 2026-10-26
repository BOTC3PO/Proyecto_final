/**
 * PLAN-R Parte 5 — pide permiso de notificaciones, obtiene el push
 * token de Expo y lo registra en `POST /api/push-tokens`. Sólo el
 * lado "recibir" (permiso + token); el envío real (mensaje nuevo,
 * tarea por vencer, cuota emitida) es trabajo de servidor aparte —
 * ver apps/mobile/README.md.
 *
 * `getExpoPushTokenAsync` necesita un `projectId` de EAS
 * (`app.json` → `extra.eas.projectId`), que todavía no existe (Parte
 * 5 §3 lo crea junto con la publicación). Sin ese id, esto es un no-op
 * silencioso — no falla, sólo no hay token que registrar todavía.
 */
import { useEffect } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { apiPost } from "../api/client";
import { useAuth } from "../auth/AuthContext";

export function usePushRegistration() {
  const { status } = useAuth();

  useEffect(() => {
    if (status !== "signedIn") return;
    let cancelled = false;

    (async () => {
      const projectId = Constants.expoConfig?.extra?.eas?.projectId;
      if (!projectId) return; // sin proyecto EAS todavía — ver Parte 5 §3.

      const { status: current } = await Notifications.getPermissionsAsync();
      let granted = current === "granted";
      if (!granted) {
        const { status: requested } = await Notifications.requestPermissionsAsync();
        granted = requested === "granted";
      }
      if (!granted || cancelled) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync({ projectId });
      if (cancelled) return;
      await apiPost("/api/push-tokens", { token, platform: Platform.OS }).catch(() => {
        // best-effort — no bloquea el uso de la app si falla el registro.
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [status]);
}
