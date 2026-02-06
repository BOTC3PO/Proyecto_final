# Roles y membresías

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
