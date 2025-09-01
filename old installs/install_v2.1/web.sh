#!/bin/bash

set -e

root=$(dirname "$(dirname "$(readlink -f "$0")")")
app_dir="$root/apps/web"

echo "==> [web] Preparando entorno en: $app_dir"
if [ ! -d "$app_dir" ]; then
  npx --yes create-vite@latest "$app_dir" -- --template react-ts
else
  echo "==> [web] La carpeta ya existe, omitiendo 'create-vite'."
fi

cd "$app_dir"

# Instalar dependencias
npm install
npm i tailwindcss @tailwindcss/vite
npm i -D @vitejs/plugin-react
npm i react-router-dom

# vite.config.ts (Tailwind v4)
mkdir -p "$(dirname "$app_dir/vite.config.ts")"
cat > "$app_dir/vite.config.ts" << EOF
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({ plugins: [react(), tailwindcss()] });
EOF

# CSS de entrada (Tailwind v4)
web_src="$app_dir/src"
web_pages="$web_src/pages"
web_layouts="$web_src/layouts"

mkdir -p "$web_src"
echo '@import "tailwindcss";' > "$web_src/index.css"

# Páginas y layout mínimos
mkdir -p "$web_pages" "$web_layouts"

echo 'export default function Landing(){return <h1 className="text-2xl font-bold">Landing pública</h1>;}' > "$web_pages/Landing.tsx"
echo 'export default function About(){return <h1 className="text-xl">Acerca</h1>;}' > "$web_pages/About.tsx"
echo 'export default function Pricing(){return <h1 className="text-xl">Precios</h1>;}' > "$web_pages/Pricing.tsx"
echo 'export default function Contact(){return <h1 className="text-xl">Contacto</h1>;}' > "$web_pages/Contact.tsx"
echo 'export default function NotFound(){return <h1 className="text-xl text-red-600">404</h1>;}' > "$web_pages/NotFound.tsx"

# layout
cat > "$web_layouts/GuestLayout.tsx" << EOF
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
EOF

# router y main
cat > "$web_src/router.tsx" << EOF
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
EOF

cat > "$web_src/main.tsx" << EOF
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><RouterProvider router={router}/></React.StrictMode>
);
EOF

echo "==> [web] OK"