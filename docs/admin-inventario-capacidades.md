# Inventario de control de acceso ADMIN (PLAN-C §1)

**Fecha**: 2026-07-03 · **Origen**: auditoría de todos los usos de `requireAdmin` (middleware,
`api/src/lib/admin-auth.ts`) y de `hasRole(user, "ADMIN")` inline en `api/src/routes/`, hecha para
separar "capacidad de plataforma" (exclusiva del admin global) de "capacidad de escuela" (debería
también permitir al DIRECTIVO de esa escuela, scopeada por `escuelaId`). Referenciado desde
[`roles.md`](roles.md#matriz-de-permisos--modelo-intranet-plan-c-1).

No es una lista de bugs — es la foto de partida para migrar endpoint por endpoint sin abrir o
cerrar accesos por error (cada cambio real necesita su propio test de permisos).

## Middleware `requireAdmin` (rutas completas, ~45 puntos)

| Archivo | Endpoint(s) | Clasificación |
|---|---|---|
| `admin.ts` | `GET /api/admin/usuarios`, `.../modulos-completados`, `PATCH .../rol` | Plataforma — gestión global de usuarios y roles |
| `admin.ts` | `GET /api/admin/stats`, `/api/admin/reportes-global` | Plataforma — reportes globales |
| `admin.ts` | `GET/POST/PATCH /api/admin/cursos`, `/api/admin/materias` | Plataforma — config global de catálogo |
| `configuracion.ts` | `PATCH /api/config/materias`, `/api/config/categorias` | Plataforma — config global |
| `auth.ts` | `POST /api/admins` | Plataforma — alta de admins |
| `escuelas.ts` | `POST /api/escuelas` | Plataforma — alta de escuelas (ver [PLAN-C §2](../tareas_pendientes/PLAN-C-roles-intranet-personalizacion.md)) |
| `comisiones.ts` | `GET /api/comisiones/admin`, `.../liquidar`, `.../export.csv` | Plataforma — panel agregado multi-escuela |
| `suscripciones.ts` | `GET /api/admin/suscripciones*` | Plataforma — legado, en retiro (PLAN-B Fase 1) |
| `economia.ts` | `PATCH /api/economia/config`, eventos/recompensas admin | Plataforma — economía global del juego |
| `generadores-admin.ts`, `admin-generators.ts` | CRUD de generadores/changelog | Plataforma — contenido pedagógico global |
| `aulas.ts` | `GET/DELETE /api/admin/aulas*` | Plataforma — listado/borrado global de aulas |
| `suggestions.ts` | `GET/PATCH /api/suggestions*` | Plataforma — sugerencias de producto |
| `tienda.ts` | `POST/PATCH /api/tienda/items*` | Plataforma — catálogo global de tienda |
| `seed.ts` | `POST /api/seed/*` | Plataforma — bootstrap/seed |
| `moderacion.ts` | `ALL /api/moderacion/*` | Plataforma — moderación global (ban, advertencias, eventos) |

**Ruta de refactor**: ninguno de estos necesita abrirse a DIRECTIVO. Quedan tal cual.

## Chequeos inline `hasRole(user, "ADMIN")` ya scopeados por escuela (~10 puntos)

| Archivo | Función/endpoint | Patrón actual |
|---|---|---|
| `cobros.ts` | `puedeGestionarEscuela()`, `POST/GET /api/cobros` | `ADMIN \|\| (DIRECTIVO && user.escuelaId === escuelaId)` |
| `escuela-pasarelas.ts` | `GET/POST/PATCH /api/escuelas/:escuelaId/pasarelas` | mismo patrón |
| `comisiones.ts` | `GET .../resumen`, `POST .../modo` | mismo patrón |
| `pedagogico.ts` | umbral / riesgo / desbloqueo de módulo | `ADMIN \|\| DIRECTIVO \|\| TEACHER` de la escuela/aula |

**Ruta de refactor**: ninguna — este es el patrón de referencia a copiar en el resto del plan.

## Chequeos inline mixtos — visibilidad global + bypass ADMIN sin scope claro (~15 puntos, requieren revisión)

| Archivo | Área | Nota |
|---|---|---|
| `plantillas.ts` | `canRead()`, listado, crear, editar, copiar | Global (`visibility`) + bypass ADMIN; candidato a §3 (schoolId en plantillas) |
| `libros.ts` | `canEditLibro()`, `canReadLibro()` | Igual — libros/teoría compartida es uno de los recursos del inventario de §3 |
| `modulos.ts` | `canEditModuloDirect()` | Igual |
| `vblang-datasets.ts` | `canReadDataset()`, listado/detalle | Igual — datasets VBLang están en el inventario de §3 |
| `calendario.ts` | eventos unificados, editar/borrar evento | ADMIN bypassa el scope de escuela/aula del evento |
| `mensajeria.ts` | avisos globales | ADMIN puede publicar aviso fuera de su escuela — evaluar si es intencional (comunicado de plataforma) o hay que scopearlo |
| `reportes-v2.ts` | reportes v2 | Mezcla vista global (plataforma) y vista por escuela |

**Ruta de refactor**: no se tocan todos de una. Cada uno se aborda cuando el plan llega a ese
recurso (§3 cubre plantillas/libros/módulos/datasets vía el patrón `schoolId` nullable; calendario
y mensajería quedan fuera del alcance actual de PLAN-C, se anotan para un plan futuro si hace
falta).

## Regla para código nuevo

```ts
const puedeGestionar = (user, escuelaId) =>
  hasRole(user, "ADMIN") || (hasRole(user, "DIRECTIVO") && user?.escuelaId === escuelaId);
```

Nunca `requireAdmin` puro para algo que un DIRECTIVO debería poder hacer sobre su propia escuela.
