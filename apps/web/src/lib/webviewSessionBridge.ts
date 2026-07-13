/**
 * PLAN-R (app móvil, `apps/mobile`) — cuando esta web se carga dentro del
 * WebView nativo (`WebContent`), la app ya está logueada y le pasa la
 * sesión por query param (nunca por cookies de terceros). Este bootstrap
 * la escribe en los mismos localStorage keys que `lib/api.ts` y
 * `auth-provider.tsx` ya usan, ANTES de montar React — así `AuthProvider`
 * la levanta en su primer render, como si el usuario hubiese hecho login
 * acá mismo. Debe importarse y llamarse antes de `ReactDOM.createRoot`.
 *
 * No toca nada si el param no está: en la web normal (sin WebView) esto
 * es un no-op.
 */
const PARAM_NAME = "vbSession";

type BridgedSession = {
  accessToken: string;
  refreshToken?: string | null;
  user: {
    id: string;
    name: string;
    role: string;
    roles?: string[];
    schoolId?: string | null;
  };
};

export function hydrateSessionFromWebViewParam(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const raw = params.get(PARAM_NAME);
  if (!raw) return;

  try {
    const session = JSON.parse(raw) as BridgedSession;
    if (!session.accessToken || !session.user?.id) return;

    window.localStorage.setItem("auth.token", session.accessToken);
    if (session.refreshToken) {
      window.localStorage.setItem("auth.refreshToken", session.refreshToken);
    }
    window.localStorage.setItem("auth.user", JSON.stringify(session.user));
  } catch {
    // Param inválido/corrupto: seguimos sin sesión, no rompemos el boot.
  } finally {
    // Nunca dejar el JWT en la URL (historial, logs de red, etc.).
    params.delete(PARAM_NAME);
    const next = params.toString();
    const url = `${window.location.pathname}${next ? `?${next}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", url);
  }
}
