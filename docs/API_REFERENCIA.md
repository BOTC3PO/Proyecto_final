# Referencia de la API — auto-generada

Total: **231 endpoints** en 46 routers. Extraído del código (método, path, auth, validación). 
La columna Auth muestra los middlewares detectados; `(router)` = aplicado a nivel router. 
**Vacío en Auth = sin protección detectada → revisar en el informe de seguridad.**


## admin-generators

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/admin/generators` | requireAdmin |  |
| PATCH | `/api/admin/generators/:id` | requireAdmin |  |
| GET | `/api/admin/generators/:id/changelog` | requireAdmin |  |
| POST | `/api/admin/generators/:id/changelog` | requireAdmin |  |

## admin

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/admin/cursos` | requireAdmin |  |
| GET | `/api/admin/materias` | requireAdmin |  |
| POST | `/api/admin/materias` | requireAdmin |  |
| PATCH | `/api/admin/materias/:id` | requireAdmin |  |
| GET | `/api/admin/reportes-global` | requireAdmin |  |
| GET | `/api/admin/stats` | requireAdmin |  |
| GET | `/api/admin/usuarios` | requireAdmin |  |
| GET | `/api/admin/usuarios/:id/modulos-completados` | requireAdmin |  |
| PATCH | `/api/admin/usuarios/:id/rol` | requireAdmin |  |
| GET | `/api/materias` | requireUser |  |

## aula-feed

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/aula/actividades` | requirePolicy, requireUser | aula-feed/read |
| POST | `/api/aula/actividades` | requirePolicy, requireUser | aula-feed/write |
| DELETE | `/api/aula/actividades/:id` | requirePolicy, requireUser | aula-feed/write |
| GET | `/api/aula/leaderboard` | requirePolicy, requireUser | aula-feed/read |
| GET | `/api/aula/publicaciones` | requirePolicy, requireUser | aula-feed/read |

## aulas

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/admin/aulas` | requireAdminAuth |  |
| DELETE | `/api/admin/aulas/:id` | requireAdminAuth |  |
| GET | `/api/aulas` | requirePolicy, requireUser | aulas/list |
| POST | `/api/aulas` | requirePolicy, requireUser | aulas/create |
| GET | `/api/aulas/:id/modulos` | requireUser |  |
| POST | `/api/aulas/:id/modulos` | requireUser |  |
| DELETE | `/api/aulas/:id/modulos/:moduloId` | requireUser |  |
| POST | `/api/aulas/unirse` | requireUser |  |

## auth

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/admins` | requireAdmin |  |
| POST | `/api/auth/bootstrap-admin` | ⚠️ — |  |
| POST | `/api/auth/forgot-password` | ⚠️ — |  |
| POST | `/api/auth/guest` | ⚠️ — |  |
| POST | `/api/auth/login` | ⚠️ — |  |
| GET | `/api/auth/me` | requireUser |  |
| POST | `/api/auth/refresh` | ⚠️ — |  |
| POST | `/api/auth/register` | ⚠️ — |  |
| GET | `/api/me` | requireUser |  |
| GET | `/api/perfil/:username` | ⚠️ — |  |

## beneficios

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/beneficios/estado` | requireUser |  |

## block-documents

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/block-documents` | ⚠️ — |  |
| GET | `/api/block-documents/:id` | ⚠️ — |  |
| PATCH | `/api/block-documents/:id` | ⚠️ — |  |

## calendario

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/calendario/aula` | requireUser |  |
| DELETE | `/api/calendario/aula/:id` | requireUser |  |
| GET | `/api/calendario/escuela` | requireUser |  |
| POST | `/api/calendario/escuela` | requireUser |  |
| DELETE | `/api/calendario/escuela/:id` | requireUser |  |
| GET | `/api/calendario/unificado` | requireUser |  |

## comisiones

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/comisiones/admin` | requireAdmin |  |
| GET | `/api/comisiones/admin/export.csv` | requireAdmin |  |
| POST | `/api/comisiones/admin/liquidar` | requireAdmin |  |

## configuracion

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/config/categorias` | ⚠️ — |  |
| PATCH | `/api/config/categorias` | ⚠️ — |  |
| GET | `/api/config/materias` | ⚠️ — |  |
| PATCH | `/api/config/materias` | ⚠️ — |  |

## consignas

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/consignas/${subject}` | ⚠️ — |  |
| GET | `/api/consignas/${subject}/:tema` | ⚠️ — |  |
| GET | `/api/consignas/${subject}/:tema/v2` | ⚠️ — |  |

## diccionarios

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/diccionarios` | ⚠️ — |  |
| GET | `/api/diccionarios/:lang/lookup` | ⚠️ — |  |

## dictionary

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/dictionary/health` | ⚠️ — |  |
| GET | `/api/dictionary/lookup` | ⚠️ — |  |
| GET | `/api/dictionary/prefix` | ⚠️ — |  |

## economia

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/admin/economia/eventos` | requireAdminAuth |  |
| DELETE | `/api/admin/economia/eventos/:id` | requireAdminAuth |  |
| GET | `/api/admin/economia/recompensas` | requireAdminAuth |  |
| DELETE | `/api/admin/economia/recompensas/:id` | requireAdminAuth |  |
| GET | `/api/admin/economia/validacion` | requireAdminAuth |  |
| GET | `/api/economia/ciclo-activo` | ⚠️ — |  |
| GET | `/api/economia/config` | requireUser |  |
| PATCH | `/api/economia/config` | requireAdminAuth |  |
| GET | `/api/economia/eventos` | requireUser |  |
| POST | `/api/economia/eventos` | ⚠️ — |  |
| DELETE | `/api/economia/eventos/:id` | requireAdminAuth |  |
| PATCH | `/api/economia/eventos/:id` | ⚠️ — |  |
| GET | `/api/economia/examenes` | ⚠️ — |  |
| POST | `/api/economia/examenes` | ⚠️ — |  |
| PATCH | `/api/economia/examenes/:id` | ⚠️ — |  |
| POST | `/api/economia/examenes/:id/cerrar` | requirePolicy | economia/mint |
| GET | `/api/economia/examenes/:id/pujas` | ⚠️ — |  |
| POST | `/api/economia/examenes/:id/pujas` | ⚠️ — |  |
| GET | `/api/economia/examenes/puntos` | ⚠️ — |  |
| POST | `/api/economia/intercambios` | ⚠️ — |  |
| POST | `/api/economia/intercambios/:id/aceptar` | requirePolicy | economia/mint |
| POST | `/api/economia/intercambios/:id/cancelar` | ⚠️ — |  |
| GET | `/api/economia/metricas` | ⚠️ — |  |
| GET | `/api/economia/modulos` | ⚠️ — |  |
| PUT | `/api/economia/modulos/:moduloId` | ⚠️ — |  |
| GET | `/api/economia/proximos-ciclos` | ⚠️ — |  |
| GET | `/api/economia/recompensas` | ⚠️ — |  |
| GET | `/api/economia/riesgo` | ⚠️ — |  |
| PUT | `/api/economia/riesgo/:aulaId` | ⚠️ — |  |
| GET | `/api/economia/saldos` | ⚠️ — |  |
| GET | `/api/economia/transacciones` | ⚠️ — |  |

## encuestas

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/encuestas` | requireAulaId |  |
| POST | `/api/encuestas` | ⚠️ — |  |
| DELETE | `/api/encuestas/:id` | ⚠️ — |  |
| GET | `/api/encuestas/:id` | requireAulaId |  |
| PATCH | `/api/encuestas/:id` | ⚠️ — |  |
| PUT | `/api/encuestas/:id` | ⚠️ — |  |
| GET | `/api/encuestas/:id/resultados` | requireAulaId |  |
| POST | `/api/encuestas/:id/votos` | ⚠️ — |  |

## enterprise

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/enterprise/entitlements` | requireUser |  |

## escuelas

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/escuelas` | requireUser |  |
| POST | `/api/escuelas` | requireAdmin |  |
| GET | `/api/escuelas/:id` | ⚠️ — |  |
| PATCH | `/api/escuelas/:id` | requireUser |  |
| GET | `/api/escuelas/code/:code` | ⚠️ — |  |

## generadores-admin

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/admin/generadores` | requireAdmin |  |
| GET | `/api/admin/generadores/:subject` | requireAdmin |  |
| DELETE | `/api/admin/generadores/:subject/:tema` | requireAdmin |  |
| GET | `/api/admin/generadores/:subject/:tema` | requireAdmin |  |
| PUT | `/api/admin/generadores/:subject/:tema` | requireAdmin |  |
| PATCH | `/api/admin/generadores/:subject/:tema/status` | requireAdmin |  |

## generators

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/generators` | ⚠️ — |  |
| GET | `/api/generators/:category/:name` | ⚠️ — |  |
| GET | `/api/generators/:category/:name/docs` | ⚠️ — |  |

## governance

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/prompts` | ⚠️ — |  |
| GET | `/api/proposals` | ⚠️ — |  |
| POST | `/api/proposals` | ⚠️ — |  |
| GET | `/api/proposals/:id` | ⚠️ — |  |
| GET | `/api/proposals/:id/apoyos` | ⚠️ — |  |
| POST | `/api/proposals/:id/close` | ⚠️ — |  |
| POST | `/api/proposals/:id/vote` | ⚠️ — |  |

## instrumentos

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/instrumentos/fci` | requireUser |  |
| POST | `/api/instrumentos/fci` | requireUser |  |
| POST | `/api/instrumentos/fci/:id/rescatar` | requireUser |  |
| GET | `/api/instrumentos/plazo-fijo` | requireUser |  |
| POST | `/api/instrumentos/plazo-fijo` | requireUser |  |
| POST | `/api/instrumentos/plazo-fijo/:id/rescatar` | requireUser |  |

## libros

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/libros` | ⚠️ — |  |
| POST | `/api/libros` | ⚠️ — |  |
| GET | `/api/libros/:id` | ⚠️ — |  |

## materiales

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/materiales` | requireUser |  |
| POST | `/api/materiales/:id/compartir` | requireUser |  |
| GET | `/api/materiales/:id/download` | requireUser |  |

## membresias

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/membresias/mis-escuelas` | requireUser |  |

## mensajeria

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/mensajeria/avisos` | requireUser |  |
| POST | `/api/mensajeria/avisos` | requireUser |  |
| POST | `/api/mensajeria/avisos/:id/leer` | requireUser |  |
| GET | `/api/mensajeria/hilos` | requireUser |  |
| POST | `/api/mensajeria/hilos` | requireUser |  |
| GET | `/api/mensajeria/hilos/:hiloId` | requireUser |  |
| GET | `/api/mensajeria/no-leidos` | requireUser |  |
| GET | `/api/mensajeria/usuarios` | requireUser |  |

## moderacion

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/moderacion/clases-publicas` | requireAdmin ᴿ |  |
| GET | `/api/moderacion/mensajes-reportados` | requireAdmin ᴿ |  |
| POST | `/api/moderacion/usuarios/:id/advertencias` | requireAdmin ᴿ |  |
| POST | `/api/moderacion/usuarios/:id/ban` | requireAdmin ᴿ |  |

## modulos

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/modulos` | ⚠️ — |  |
| POST | `/api/modulos` | requireUser |  |
| DELETE | `/api/modulos/:id` | requireUser |  |
| GET | `/api/modulos/:id` | requireUser |  |
| PATCH | `/api/modulos/:id` | requireUser |  |
| PUT | `/api/modulos/:id` | requireUser |  |
| GET | `/api/modulos/buscar` | ⚠️ — |  |

## padres

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/hijos` | requireUser |  |
| GET | `/api/padres/hijos/:id/actividades` | requireUser |  |
| GET | `/api/padres/hijos/:id/boletin` | requireUser |  |
| GET | `/api/padres/hijos/:id/limites` | requireUser |  |
| PATCH | `/api/padres/hijos/:id/limites` | requireUser |  |

## pages

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/pages` | ⚠️ — |  |
| POST | `/api/pages` | ⚠️ — |  |
| GET | `/api/pages/:id` | ⚠️ — |  |

## payments

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/payments/webhook` | ⚠️ — |  |

## pedagogico

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/pedagogico/desbloquear` | requireUser |  |
| POST | `/api/pedagogico/modo-aula` | requireUser |  |
| GET | `/api/pedagogico/modo-aula/:aulaId` | requireUser |  |
| GET | `/api/pedagogico/riesgo/:aulaId` | requireUser |  |
| POST | `/api/pedagogico/umbral` | requireUser |  |
| GET | `/api/pedagogico/umbral/:quizId` | requireUser |  |

## plantillas

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/plantillas` | requireUser |  |
| POST | `/api/plantillas` | requireUser |  |
| DELETE | `/api/plantillas/:id` | requireUser |  |
| GET | `/api/plantillas/:id` | requireUser |  |
| PUT | `/api/plantillas/:id` | requireUser |  |
| POST | `/api/plantillas/:id/clonar` | requireUser |  |
| POST | `/api/plantillas/:id/fork` | requireUser |  |
| GET | `/api/plantillas/:id/versions` | requireUser |  |
| POST | `/api/plantillas/batch` | requireUser |  |

## profesor

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/profesor/asistencia` | requireUser ᴿ |  |
| GET | `/api/profesor/calificaciones` | requireUser ᴿ |  |
| GET | `/api/profesor/cursos` | requireUser ᴿ |  |
| GET | `/api/profesor/menu` | requireUser ᴿ |  |

## progreso

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/progreso` | requirePolicy, requireUser | progreso/read |
| GET | `/api/progreso/aula-matriz` | requireUser |  |
| GET | `/api/progreso/estudiante` | requireUser |  |
| GET | `/api/progreso/hijos` | requireUser |  |
| GET | `/api/progreso/hijos/:id` | requireUser |  |

## quiz-banco

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/quizzes/banco` | requireUser |  |
| GET | `/api/quizzes/banco/:quizId/questions` | requireUser |  |

## readonly

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/readonly/catalogo` | ⚠️ — |  |

## registro

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/registro/opciones` | ⚠️ — |  |

## reportes

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/estadisticas/hijos/:hijoId` | requireUser |  |
| GET | `/api/informes/hijos/:hijoId` | requireUser |  |
| POST | `/api/vinculos/aprobar` | requireUser |  |
| POST | `/api/vinculos/solicitar` | requireUser |  |
| GET | `/api/vinculos/validar` | requireUser |  |

## seed

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| POST | `/api/seed/modulos` | requireAdmin |  |
| POST | `/api/seed/prompts-generadores` | requireAdmin |  |

## suggestions

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/suggestions` | requireAdmin |  |
| POST | `/api/suggestions` | requireUser |  |
| PATCH | `/api/suggestions/:id` | requireAdmin |  |

## suscripciones

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/admin/suscripciones` | requireAdmin |  |
| POST | `/api/admin/suscripciones/activar` | requireAdmin |  |
| GET | `/api/admin/suscripciones/reembolsos` | requireAdmin |  |
| POST | `/api/suscripciones/cancelar` | requireUser |  |
| GET | `/api/suscripciones/estado` | requireUser |  |
| GET | `/api/suscripciones/historial` | requireUser |  |
| POST | `/api/suscripciones/iniciar` | requireUser |  |
| GET | `/api/suscripciones/limites` | requireUser |  |
| POST | `/api/suscripciones/reembolso` | requireUser |  |
| POST | `/api/suscripciones/webhook` | ⚠️ — |  |

## sync

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/sync/conflictos` | requireUser |  |
| GET | `/api/sync/estado` | requireUser |  |
| GET | `/api/sync/pull/:aulaId` | requireUser |  |
| POST | `/api/sync/push` | requireUser |  |

## tareas

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/tareas` | requireUser |  |

## tienda

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/tienda` | requireUser |  |
| POST | `/api/tienda/comprar` | requireUser |  |
| POST | `/api/tienda/items` | requireAdmin |  |
| PATCH | `/api/tienda/items/:id` | requireAdmin |  |
| GET | `/api/tienda/mis-items` | requireUser |  |

## usuarios

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/perfil` | requireUser |  |
| GET | `/api/usuarios` | requirePolicy, requireUser | usuarios/list |
| POST | `/api/usuarios` | requirePolicy, requireUser | usuarios/create |
| GET | `/api/usuarios/:id` | requirePolicy, requireUser | usuarios/read |

## vblang-datasets

| Método | Path | Auth | Policy |
|--------|------|------|--------|
| GET | `/api/vblang/datasets` | requireUser |  |
| POST | `/api/vblang/datasets` | requireUser |  |
| DELETE | `/api/vblang/datasets/:id` | requireUser |  |
| GET | `/api/vblang/datasets/:id` | requireUser |  |
| PUT | `/api/vblang/datasets/:id` | requireUser |  |