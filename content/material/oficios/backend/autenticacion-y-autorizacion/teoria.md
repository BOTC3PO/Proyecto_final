# Backend — Autenticación y autorización (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../arquitectura-de-servidores/`, `../../informatica/permisos-y-usuarios/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/backend/autenticacion-y-autorizacion/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Dos preguntas distintas

- **Autenticación:** **¿quién sos?** Verificar la **identidad** (usuario y contraseña, código, huella).
- **Autorización:** **¿qué podés hacer?** Verificar los **permisos** de alguien ya identificado.

Primero se autentica; después se autoriza **en cada petición**. **401** = no autenticado; **403** = autenticado pero sin permiso.

---

## 2. Contraseñas

**Nunca** se guardan en texto plano ni cifradas de forma reversible. Se guarda un **hash** con un algoritmo **lento y con sal** (*salt*), pensado para contraseñas: **Argon2**, **bcrypt** o **scrypt**. No se usan **MD5** ni **SHA-1** ni **SHA-256 a secas**.

- La **sal** es un valor **aleatorio distinto** por usuario: dos usuarios con la misma contraseña tienen **hashes diferentes**.
- Para **verificar**, se calcula el hash de lo ingresado y se **compara**.
- Se piden **requisitos razonables** (longitud antes que complicación) y se **verifica contra listas de claves filtradas**.
- **Recuperación:** un **enlace de un solo uso, con vencimiento**; nunca se envía la contraseña.
- **Limitar intentos** para frenar la adivinanza.
- **Mensajes de error genéricos** ("usuario o contraseña incorrectos").

---

## 3. Sesiones y tokens

Después de iniciar sesión, el servidor entrega algo que **prueba la identidad** en las siguientes peticiones:

- **Sesión con cookie:** el servidor guarda la sesión y entrega un **identificador** en una **cookie**. Cookie con **`HttpOnly`** (no la lee el JavaScript), **`Secure`** (solo HTTPS) y **`SameSite`** (reduce ataques CSRF).
- **Token firmado (JWT)**: un texto con **datos** (quién es, cuándo vence) **firmado** por el servidor. **No cifra** su contenido: **cualquiera lo puede leer**, no se guardan datos sensibles. Se **verifica la firma y el vencimiento** en cada petición.
- **Vencimiento corto** y **renovación** con un **token de refresco**; una forma de **revocar** (cerrar sesión) si es necesario.
- Los tokens **no van en la URL**; viajan en **cabeceras** (`Authorization: Bearer ...`) o cookies.

---

## 4. Autenticación de varios factores (MFA)

Combina **algo que sabés** (contraseña), **algo que tenés** (celular, llave física) y **algo que sos** (huella). Con **MFA**, una contraseña robada **no alcanza**.

Formas: **código temporal** (TOTP, de una app), **llaves físicas** (FIDO2/WebAuthn, más resistentes al *phishing*), mensajes SMS (**más débil**).

---

## 5. Autorización

- **Roles (RBAC):** un usuario tiene un **rol** (administrador, docente, alumno) y cada rol tiene permisos.
- **Permisos por recurso:** ¿**este** usuario puede ver/editar **este** objeto? (por ejemplo, **solo sus propios pedidos**).
- **Mínimo privilegio:** dar **solo** lo necesario.
- **Autorizar siempre en el servidor:** ocultar un botón en la interfaz **no protege**; el servidor **debe volver a comprobar**.
- Error clásico: **acceso a objetos de otros** cambiando un número en la URL (`/pedidos/124`): el servidor debe verificar que el pedido **pertenece** al usuario.

---

## 6. OAuth y "iniciar sesión con..."

**OAuth 2.0** es un **protocolo de autorización delegada**: una aplicación obtiene **acceso limitado** a datos de otro servicio **sin conocer la contraseña**. **OpenID Connect** agrega la **identidad** ("iniciar sesión con Google"). Usar proveedores reconocidos **evita** guardar contraseñas propias, pero hay que **configurarlo bien** (redirecciones permitidas, estado, PKCE).

---

## 7. Errores frecuentes

- Contraseñas con **hash rápido** o **sin sal**.
- **Secretos** (claves de firma) **en el código**.
- Tokens que **nunca vencen**.
- **No comprobar la autorización** en el servidor.
- **Mensajes** que revelan si un usuario existe.
- Registrar contraseñas o tokens en **logs**.
- **Inventar** un esquema propio de cifrado en lugar de usar **bibliotecas probadas**.
