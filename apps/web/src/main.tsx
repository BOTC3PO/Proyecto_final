import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// Fuentes del rediseño (self-hosted vía @fontsource — andan offline en la demo).
import "@fontsource-variable/manrope/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={router}/></React.StrictMode>
);