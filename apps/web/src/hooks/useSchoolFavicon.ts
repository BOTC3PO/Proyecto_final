import { useEffect } from "react";
import { useSchoolBranding } from "./useSchoolBranding";

const DEFAULT_FAVICON = "/favicon.svg";

/**
 * PLAN-C §4 (ítem 29) — favicon dinámico según la escuela del usuario
 * logueado. Sin escuela o sin `iconoUrl` configurado, vuelve al favicon
 * default de la plataforma.
 */
export function useSchoolFavicon(): void {
  const branding = useSchoolBranding();

  useEffect(() => {
    const href = branding?.iconoUrl || DEFAULT_FAVICON;
    let link = document.head.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [branding?.iconoUrl]);
}
