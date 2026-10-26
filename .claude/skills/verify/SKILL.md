---
name: verify
description: Cómo levantar y manejar Virtual Book para verificar cambios en vivo (web + API + DB).
---

# Verificar Virtual Book en vivo

## Levantar el stack

```bash
pnpm dev          # api (nodemon, :5050) + web (vite, :5173) en paralelo
```

- **Ojo**: Javier suele tener SU stack ya corriendo. Si Vite dice
  "Port 5173 is in use" y arranca en 5174, el 5173 existente sirve
  igual (mismo working tree, HMR aplica los cambios en vivo). No hace
  falta matar nada.
- API responde en `http://localhost:5050` (`/api/health` da 401 sin
  auth — eso ya significa que está viva).

## Login (usuarios del seed, password `Password123!`)

- Docente: `garcia@epnorte.edu.ar` (Prof. García)
- Directivo: `directivo@epnorte.edu.ar` · Alumno: `perez.alumno@epnorte.edu.ar`
- Admin: `admin@plataforma.com` · Padre: `perez.padre@gmail.com`
- El form de `/login` viene pre-cargado con el docente en dev: basta
  click en "Iniciar Sesión".

## Inspeccionar persistencia (Postgres)

```bash
PGPASSWORD=root psql -h localhost -U opencode_user -d virtualbook
```

- Tablas en snake_case: `quizzes`, `quiz_versions` (settings JSON con
  el cuestionario), `plantillas_ejercicio`, `modulos`…
- Borrados suelen ser soft: `quizzes.is_active = false`.

## Flujos útiles

- Editor Tiza standalone: `/plantillas/nueva` (wizard al entrar; ×
  para cerrarlo). Con cuestionario: `/plantillas/nueva?quizId=<id>`.
- Crear un quiz de prueba rápido: en `/plantillas/nueva` nombrar la
  pregunta (panel DETALLES derecho), "+ Nueva pregunta", nombrar la
  segunda, Guardar → crea quiz suelto y la URL pasa a `?quizId=`.

## Gotchas Chrome MCP

- Los `confirm()` nativos (p. ej. "Eliminar cuestionario") BLOQUEAN
  CDP: los clicks/screenshots dan timeout hasta mandar
  `key: Return` (acepta) o `Escape` (cancela).
- Los selects nativos se manejan mejor con `find` + `form_input` que
  con clicks de coordenadas.
- Si la ventana está zoomeada, los clicks por coordenadas de la
  captura caen mal (viewport 1920 vs captura 1568): clickear por `ref`
  de `find`/`read_page`; `zoom` usa coordenadas del viewport real.
