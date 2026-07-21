import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// PLAN-R — hidrata la sesión ANTES de montar si venimos del WebView de
// la app móvil (no-op en la web normal). Debe correr antes que
// AuthProvider lea localStorage por primera vez.
import { hydrateSessionFromWebViewParam } from "./lib/webviewSessionBridge";
hydrateSessionFromWebViewParam();
// Fuentes del rediseño (self-hosted vía @fontsource — andan offline en la demo).
import "@fontsource-variable/manrope/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
// Fuentes de la colección "Papel a través de la historia" (6 temas nuevos,
// una por era) — mismo criterio self-hosted que las de arriba.
import "@fontsource/cinzel/400.css";
import "@fontsource/cinzel/700.css";
import "@fontsource/uncial-antiqua/400.css";
import "@fontsource/nanum-brush-script/400.css";
import "@fontsource/eb-garamond/400.css";
import "@fontsource/eb-garamond/600.css";
import "@fontsource/eb-garamond/700.css";
import "@fontsource/unifrakturmaguntia/400.css";
import "@fontsource/old-standard-tt/400.css";
import "@fontsource/old-standard-tt/700.css";
import "./index.css";
// Fundación de tokens del rediseño (División 0): escalas aditivas de
// espaciado, tipografía y elevación. Convive con los --c-* existentes.
import "./ui/tokens.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={router}/></React.StrictMode>
);