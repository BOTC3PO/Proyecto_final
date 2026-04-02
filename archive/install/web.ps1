<# install\web.ps1
   Configura el entorno web (React/Vite/Tailwind, etc.).
#>
[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Rutas base
$Root    = Split-Path -Parent $PSScriptRoot      # raíz del repo
$AppsDir = Join-Path $Root 'apps'
$WebDir  = Join-Path $AppsDir 'web'

Write-Host "==> [web] Preparando entorno en: $WebDir" -ForegroundColor Cyan

# Asegurar apps\
if (-not (Test-Path $AppsDir)) { New-Item -ItemType Directory -Path $AppsDir -Force | Out-Null }

# Si NO existe un proyecto Vite previo (detectamos package.json), scaffold
if (-not (Test-Path (Join-Path $WebDir 'package.json'))) {
  Push-Location $AppsDir
  try {
    # Muy importante: pasar SOLO el nombre 'web' (no ruta absoluta)
    & npx --yes create-vite@latest web -- --template react-ts | Out-Null
  } finally {
    Pop-Location
  }
} else {
  Write-Host "==> [web] Proyecto existente detectado (package.json). No se re-crea." -ForegroundColor Yellow
}

# Asegurar que la carpeta web existe (create-vite debió crearla)
if (-not (Test-Path $WebDir)) { throw "Vite no generó la carpeta 'web' dentro de apps\. Revisa el log de create-vite." }

# Helper para escribir sin BOM (útil para archivos de código)
function NoBOM($path, $content) {
  $dir = Split-Path -Parent $path
  if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  $enc = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($path, $content, $enc)
}

# Instalar dependencias dentro de apps\web
Push-Location $WebDir
try {
  if (Test-Path (Join-Path $WebDir 'package-lock.json')) { npm ci | Out-Null } else { npm i | Out-Null }

  # Tailwind v4 + plugin de Vite y React Router
  npm i tailwindcss @tailwindcss/vite | Out-Null
  npm i -D @vitejs/plugin-react | Out-Null
  npm i react-router-dom | Out-Null

  # vite.config.ts (Tailwind v4)
  NoBOM (Join-Path $WebDir "vite.config.ts") @"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({ plugins: [react(), tailwindcss()] });
"@

  # CSS de entrada (Tailwind v4)
  $webSrc     = Join-Path $WebDir "src"
  $webPages   = Join-Path $webSrc "pages"
  $webLayouts = Join-Path $webSrc "layouts"

  if (-not (Test-Path $webSrc)) { New-Item -ItemType Directory -Path $webSrc -Force | Out-Null }
  if (-not (Test-Path $webPages)) { New-Item -ItemType Directory -Path $webPages -Force | Out-Null }
  if (-not (Test-Path $webLayouts)) { New-Item -ItemType Directory -Path $webLayouts -Force | Out-Null }

  NoBOM (Join-Path $webSrc "index.css") '@import "tailwindcss";'

  # Páginas y layout mínimos
  NoBOM (Join-Path $webPages "Landing.tsx") 'export default function Landing(){return <h1 className="text-2xl font-bold">Landing pública</h1>;}'
  NoBOM (Join-Path $webPages "About.tsx")   'export default function About(){return <h1 className="text-xl">Acerca</h1>;}'
  NoBOM (Join-Path $webPages "Pricing.tsx") 'export default function Pricing(){return <h1 className="text-xl">Precios</h1>;}'
  NoBOM (Join-Path $webPages "Contact.tsx") 'export default function Contact(){return <h1 className="text-xl">Contacto</h1>;}'
  NoBOM (Join-Path $webPages "NotFound.tsx") 'export default function NotFound(){return <h1 className="text-xl text-red-600">404</h1>;}'

  NoBOM (Join-Path $webLayouts "GuestLayout.tsx") @"
import { Link, Outlet } from "react-router-dom";
export default function GuestLayout(){
  return (
    <div className="min-h-dvh">
      <nav className="border-b p-4 flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
        <Link to="/pricing">Precios</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
      <main className="max-w-4xl mx-auto p-4"><Outlet/></main>
    </div>
  );
}
"@

  # router y main
  NoBOM (Join-Path $webSrc "router.tsx") @"
import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
export const router = createBrowserRouter([
  { element: <GuestLayout/>, children: [
    { path: "/", element: <Landing/> },
    { path: "/about", element: <About/> },
    { path: "/pricing", element: <Pricing/> },
    { path: "/contact", element: <Contact/> },
    { path: "/404", element: <NotFound/> },
  ]},
  { path: "*", element: <Navigate to="/404" replace /> }
]);
"@

  NoBOM (Join-Path $webSrc "main.tsx") @"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={router}/></React.StrictMode>
);
"@
}
finally {
  Pop-Location
}

Write-Host "==> [web] OK" -ForegroundColor Green
