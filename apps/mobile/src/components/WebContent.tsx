/**
 * PLAN-R Parte 1 — puente único hacia contenido rico de la web
 * (presentaciones, bloques, mapas, libros, renderers complejos: NO se
 * portan a nativo, son miles de líneas ya probadas — Partes 2/3 los
 * usan pesado). Nace acá mínimo viable: carga una ruta autenticada de
 * la web y se ve limpio.
 *
 * Auth: nunca cookies de terceros. La sesión (accessToken +
 * refreshToken + user) va en un query param (`vbSession`, JSON) que
 * `apps/web/src/lib/webviewSessionBridge.ts` lee ANTES de montar React
 * y escribe en los mismos localStorage keys que el login web usa — la
 * SPA cargada adentro queda "logueada" sin tocar cookies. El bridge
 * borra el param de la URL apenas lo lee (nunca queda en el historial).
 */
import { useMemo } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { API_BASE_URL, getAuthToken, getRefreshToken } from "../api/client";
import { colors } from "../theme/tokens";
import { useAuth } from "../auth/AuthContext";

// La web corre en :5173 en dev; comparte host con la API (mismo LAN IP
// resuelto en client.ts), sólo cambia el puerto.
const WEB_BASE_URL = API_BASE_URL.replace(/:5050$/, ":5173");

type Props = {
  /** Ruta de la web app, ej. "/modulos/abc123". */
  path: string;
};

export function WebContent({ path }: Props) {
  const { user } = useAuth();

  const uri = useMemo(() => {
    const token = getAuthToken();
    const url = new URL(path.startsWith("http") ? path : `${WEB_BASE_URL}${path}`);
    if (token && user) {
      const session = {
        accessToken: token,
        refreshToken: getRefreshToken() ?? undefined,
        user: { id: user.id, name: user.name, role: user.role, roles: user.roles, schoolId: user.schoolId },
      };
      url.searchParams.set("vbSession", JSON.stringify(session));
    }
    return url.toString();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, user]);

  return (
    <WebView
      source={{ uri }}
      style={styles.webview}
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  webview: { flex: 1, backgroundColor: colors.bg },
  loading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
  },
});
