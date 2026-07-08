# Documentación del backend

Documentación técnica de la API (Express + TypeScript, Prisma + PostgreSQL), derivada del código
real en `api/`. Última actualización: 2026-07-08 (`modelo-de-datos.md` y `api-reference.md`
actualizados de forma acotada en PLAN-P §5; `auth-y-roles.md`/`migraciones.md` siguen fechados
2026-05-30).

| Documento | Contenido |
|---|---|
| [`modelo-de-datos.md`](./modelo-de-datos.md) | Los 91 modelos de `schema.prisma` agrupados por dominio, con diagramas ER (mermaid) por dominio. |
| [`api-reference.md`](./api-reference.md) | Catálogo de los 56 routers: método, path, roles/guardas, params/body, respuesta y errores. |
| [`auth-y-roles.md`](./auth-y-roles.md) | Flujo JWT, middlewares, roles globales y de membresía, políticas, gating enterprise, bootstrap-admin. |
| [`migraciones.md`](./migraciones.md) | Flujo `prisma migrate` + seed y narración de las 5 migraciones. |

> Documentación previa de la era MongoDB/SQLite archivada en [`../archive/`](../archive/).
