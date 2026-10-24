# Roles y membresías

> **Nota de reconciliación.** La documentación técnica completa de autenticación y autorización
> (flujo JWT, middlewares, políticas, gating enterprise y acceso por suscripción) vive ahora en
> [`docs/backend/auth-y-roles.md`](./backend/auth-y-roles.md). Este archivo se mantiene como
> referencia conceptual de roles y membresías.

> Referencias de términos clave en el [glosario](glosario.md).

## Roles globales

Estos roles aplican a todo el sistema:

- **ADMIN**: administrador global con acceso completo a la plataforma.
- **DIRECTIVO**: rol para cuentas institucionales con acceso a funcionalidades corporativas. En
  términos de negocio, puede vincularse con la etiqueta **Directivo** (ver glosario), pero no es
  una suscripción ni un nombre de plan.
- **TEACHER**: rol global para docentes que pueden operar en el sistema.
- **USER**: rol base para usuarios sin privilegios administrativos.
- **GUEST**: rol temporal para visitantes. Su acceso está controlado por un estado de onboarding
  almacenado en `usuarios.guestOnboardingStatus`.

### Onboarding para GUEST

El onboarding de GUEST vive en el documento del usuario (`usuarios.guestOnboardingStatus`) y usa
los estados:

- `pendiente`: alta iniciada, sin aprobación.
- `aceptado`: habilita el acceso a rutas protegidas con `GUEST`.
- `rechazado`: acceso denegado; debe completar el alta formal.

Mientras el estado sea distinto de `aceptado`, las rutas protegidas y los endpoints que requieren
autenticación bloquean operaciones para GUEST.

El alta/sesión inicial de GUEST se crea con `POST /api/auth/guest`, que devuelve tokens y deja el
estado en `pendiente`.

### Transición GUEST → USER/PARENT/TEACHER/DIRECTIVO

1. Completar el alta formal (registro o proceso de validación).
2. Actualizar el rol global del usuario a `USER`, `PARENT`, `TEACHER` o `DIRECTIVO`.
3. Marcar el onboarding como `aceptado` o limpiar `guestOnboardingStatus` si ya no aplica.
4. (Si corresponde) crear la membresía en `membresias_escuela` con el rol escolar adecuado.

## Roles por escuela (membresías)

Cada usuario puede tener membresías por escuela. En la membresía se define el rol en esa escuela
(por ejemplo, **DIRECTIVO**, **TEACHER**, **STUDENT** o **PARENT**), independiente del rol global.
Esto permite que un usuario sea docente en una escuela y directivo en otra.

## Registro de profesores y admins de escuela

- **Profesores**: se registran creando un usuario y asignándolo como **TEACHER** en la membresía de
  la escuela correspondiente.
- **Directivos**: se registran creando un usuario y asignándolo como **DIRECTIVO** en la membresía
  de la escuela correspondiente.

## Restricción de admin global

El rol **ADMIN** es estrictamente global: solo puede asignarse a nivel de sistema y no debe usarse
como rol de membresía por escuela.

## Matriz de permisos — modelo intranet (PLAN-C §1)

> **Contexto de negocio**: el sistema deja de ser SaaS multi-tenant abierto y pasa a funcionar
> como **intranet por escuela**. El admin gana capacidades de gestor de escuela sin ser
> superusuario total: hay que separar "capacidades de escuela" (que un DIRECTIVO también puede
> tener sobre la suya) de "capacidades de plataforma" (exclusivas del admin global).

| Capacidad | ADMIN | DIRECTIVO | TEACHER | PADRE | ALUMNO |
|---|---|---|---|---|---|
| Gestionar usuarios de su escuela | ✔ | ✔ | – | – | – |
| Moderar (aulas, publicaciones, mensajes) | ✔ | ✔ | su aula | – | – |
| Configurar cobros/pasarelas ([PLAN-B](../tareas_pendientes/PLAN-B-negocio-comisiones-pasarelas.md)) | ✔ | ✔ | – | – | – |
| Personalización (logo, ícono, páginas) | ✔ | propuesta: ✔ | – | – | – |
| Config global del sistema (feature flags, generadores admin) | ✔ (global) | – | – | – | – |

### Admin de plataforma vs. admin de escuela

Hoy `requireAdmin`/`hasRole(user, "ADMIN")` no distinguen entre ambos casos — el mismo chequeo
protege tanto "borrar el feature flag global de generadores" como "editar el % de comisión de MI
escuela". El inventario completo (83 puntos de control auditados en `api/src/routes/` el
2026-07-03) vive en [`admin-inventario-capacidades.md`](admin-inventario-capacidades.md).
Resumen:

- **~45 endpoints son genuinamente de plataforma** (usuarios/roles globales, config de sistema,
  generadores, moderación global, seed, tienda, tarjeta de comisiones agregada): quedan
  exclusivos de ADMIN, sin abrir a DIRECTIVO.
- **~10 endpoints ya están correctamente scopeados por escuela** (cobros, pasarelas, modo de
  comisión, umbral/riesgo pedagógico): usan `hasRole(user, "ADMIN") || (DIRECTIVO de esa
  escuela)` — este es el patrón a replicar en el resto del plan (§3/§4).
- **~15 endpoints son mixtos** (plantillas, libros, módulos, datasets VBLang, calendario,
  mensajería): tienen visibilidad global con un bypass de ADMIN superpuesto, sin separación
  clara de scope. Quedan marcados para revisión endpoint por endpoint a medida que cada uno se
  toque (no se tocan todos de una — el riesgo de abrir/cerrar accesos por error es real).

Regla de oro para código nuevo: si la capacidad tiene sentido decir "de MI escuela", usar el
patrón `hasRole(user, "ADMIN") || (hasRole(user, "DIRECTIVO") && user.escuelaId === recurso.escuelaId)`
en vez de `requireAdmin` puro (ver `api/src/routes/cobros.ts` y `escuela-pasarelas.ts` como
referencia ya implementada).
