# Índice de documentación

Qué doc es fuente de verdad de qué, y qué está desactualizado. Barrido hecho para
PLAN-P (`tareas_pendientes/PLAN-P-documentacion.md`), origen: `ALCANCE_VBLang_2.0.md`
§14.2 — la documentación es el entregable principal restante hacia la defensa
(dic. 2026), no el código.

## Manuales vivos (fuente de verdad — mantenerlos al día)

| Doc | Cubre | Audiencia |
|---|---|---|
| [`VBLang.md`](./VBLang.md) | Lenguaje de plantillas de ejercicios (variables, DSL, generadores asistidos). | Docentes + devs. |
| [`modulos.md`](./modulos.md) | Modelo `Modulo`, ciclo de vida, `applyModuleUpdate`, intentos, rutas. | Devs. |
| [`frontend/modulos-guia-docente.md`](./frontend/modulos-guia-docente.md) | Crear/publicar un módulo, teoría, cuestionarios, dependencias. | Docentes. |
| [`book-editor.md`](./book-editor.md) | Modelo `Book`, editor de libros, lector. | Devs + docentes. |
| [`frontend/editor-bloques.md`](./frontend/editor-bloques.md) | Editor de bloques v2 (13 tipos), destinos de render, frontera con `VisualizerRenderer`. | Devs + contenido. |
| [`backend/modelo-de-datos.md`](./backend/modelo-de-datos.md) | Los modelos de `schema.prisma` agrupados por dominio, con ER. | Devs. |
| [`backend/api-reference.md`](./backend/api-reference.md) | Catálogo de routers: método, path, auth, params, respuesta. | Devs. |
| [`backend/auth-y-roles.md`](./backend/auth-y-roles.md) | Flujo JWT, roles globales/membresía, gating enterprise. | Devs. |
| [`backend/migraciones.md`](./backend/migraciones.md) | Flujo `prisma migrate` + seed. | Devs. |
| [`backend/diagramas-comportamiento.md`](./backend/diagramas-comportamiento.md) | Diagramas de flujo de negocio. | Devs. |
| [`frontend/overview.md`](./frontend/overview.md) | App shell, routing, `services`, `domain`, auth. | Devs. |
| [`frontend/generadores.md`](./frontend/generadores.md) | Arquitectura `generadoresV2` + adapters VBLang web. **LEGACY** (2026-07-26): describe lo que existe, no se agregan generadores nuevos; la ruta de autoría es Tiza. | Devs. |
| [`frontend/calculador.md`](./frontend/calculador.md) | Subsistema calculador + calculadora de física. | Devs. |
| [`editor-shell.md`](./editor-shell.md) | Patrón de layout de 3 columnas reusable entre editores. | Devs. |
| [`glosario.md`](./glosario.md) | Términos ambiguos (ENTERPRISE suscripción vs rol, etc.). | Todos. |
| [`bootstrap-admin.md`](./bootstrap-admin.md) | Alta del primer ADMIN. | Devs/ops. |
| [`sqlite-dictionary-api.md`](./sqlite-dictionary-api.md) | Integración de diccionario sobre SQLite (`/api/dictionary`). | Devs. |
| [`pagos/comision-roadmap-v2.md`](./pagos/comision-roadmap-v2.md) | Modelo de comisión (roadmap del pivot a comisiones, PLAN-B). | Devs + negocio. |
| [`pagos/reembolsos.md`](./pagos/reembolsos.md), [`pagos/enterprise.md`](./pagos/enterprise.md) | Flujos de pago actuales (pre-pivot; código ENTERPRISE confirmado vigente). | Devs + negocio. |
| [`politica-mora.md`](./politica-mora.md) | Política de mora y acceso ENTERPRISE. | Devs + negocio. |

**Regla de mantenimiento** (los 3 subsistemas de PLAN-P: módulos, documentos/libros,
herramienta gráfica — y sus manuales de arriba): **cambio de comportamiento ⇒ el
mismo PR toca el manual correspondiente.** Si el PR no lo permite razonar en el
momento, dejar una nota `TODO(doc)` en el propio manual, no en el código.

## Documentos de diseño / análisis puntual (vigentes como registro, no como manual vivo)

No se actualizan con cada cambio de código — documentan una decisión o un análisis
tomado en una fecha, no un comportamiento a mantener sincronizado:

`gobernanza-diseno.md`, `admin-inventario-capacidades.md`,
`inventario-recursos-globales-vs-escuela.md`, `api-readonly-catalogo.md` (delega el
detalle a `backend/api-reference.md`), `roles.md` (delega a `backend/auth-y-roles.md`),
`accesibilidad/*.md` (auditorías de una fase cerrada), `AUDITORIA_GENERADORES.md`,
`vblang-sugerencias-ia.md` (documenta una feature desactivada).

## Histórico point-in-time (sin veredicto individual, por convención de carpeta)

`qa/*.md` (diagnósticos de bugs fechados), `feature/*.md` (specs de features ya
implementadas, numeradas fN-NN), `vblang/*.md` (specs/roadmaps de VBLang numerados
fN-NN o woNN), `audits/*.md`, `wo-14-adaptativa-fundacion.md`. Son registro de
proceso (como un commit), no manuales — no se les asigna VIGENTE/DESACTUALIZADO
individual porque no pretenden serlo. Si algo de acá contradice un manual vivo,
gana el manual vivo.

## Desactualizado / a reconciliar

- **`API_REFERENCIA.md`** / **`API_REVISION.md`** — DESACTUALIZADO frente a
  `backend/api-reference.md` (la fuente de verdad que este plan mantiene, §5). Son
  una segunda pasada auto-generada (231 endpoints, 2026-06-16) que nunca se
  reconcilió con la de `backend/`: dos catálogos en paralelo. No se fusionaron acá
  (auditar 231 endpoints uno por uno excede el alcance de PLAN-P) — queda pendiente
  como tarea aparte; mientras tanto, `backend/api-reference.md` manda en caso de
  conflicto.

## Era MongoDB/SQLite (ya archivada)

`archive/README-temporal.md`, `archive/db-inventory.md`, `archive/db-inventory.json`,
`archive/sqlite-modeling-decisions.md`, `archive/estado-actual-vs-roadmap.md`
(movido en PLAN-P §1) — conservados solo como referencia histórica, ya marcados
como tal en su propio encabezado.
