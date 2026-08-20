# Autenticación y Autorización en Backend: Más allá del Login

En el desarrollo backend avanzado, la distinción entre **autenticación** (¿quién eres?) y **autorización** (¿qué puedes hacer?) es crítica. Mientras que el nivel básico se centra en verificar credenciales con sesiones o tokens simples, los sistemas modernos requieren mecanismos robustos contra ataques de replay, gestión de privilegios granular y escalabilidad en arquitecturas distribuidas.

## Fundamentos Técnicos y Ejemplos de Implementación

### 1. Autenticación con JWT (JSON Web Tokens)
Los JWTs permiten la autenticación sin estado (stateless), ideal para microservicios. Un token consta de tres partes: `header.payload.signature`.

**Estructura real de un payload JWT:**
```json
{
  "sub": "1234567890",
  "name": "Juan Pérez",
  "iat": 1516239022,
  "exp": 1516242622,
  "roles": ["admin", "editor"]
}
```

*   **Clave:** Nunca almacenes información sensible en el payload sin cifrar, ya que es solo codificado en Base64.
*   **Validación:** El backend debe verificar la firma (HMAC SHA256 o RSA) en cada solicitud.

### 2. Autorización Basada en Roles (RBAC) y Recursos (ABAC)
*   **RBAC (Role-Based Access Control):** Asigna permisos a roles (ej. `admin`, `user`). Simple pero rígido.
*   **ABAC (Attribute-Based Access Control):** Evalúa atributos del usuario, recurso y contexto (ej. `usuario.tenant_id == recurso.tenant_id`). Esencial en SaaS multiinquilino.

**Ejemplo de lógica de autorización en código (pseudo-código):**
```python
def check_permission(user, resource, action):
    # ABAC: Verificar pertenencia al inquilino
    if user.tenant_id != resource.tenant_id:
        raise PermissionDenied("Acceso cruzado no permitido")
    
    # RBAC: Verificar rol sobre la acción
    if action == 'delete' and 'admin' not in user.roles:
        raise PermissionDenied("Solo administradores pueden borrar")
    
    return True
```

### 3. Seguridad de Sesiones y Tokens
*   **Refresh Tokens:** Úsalos para renovar access tokens sin pedir credenciales. Deben almacenarse en `HttpOnly`, `Secure`, `SameSite=Strict` cookies.
*   **Short-Lived Access Tokens:** Los tokens de acceso deben expirar rápido (ej. 15 minutos) para minimizar el daño si son robados.

## Errores Comunes en Nivel Avanzado

1.  **Falta de Validación de Firmas:** Aceptar tokens sin verificar la firma o usar algoritmos débiles (como `none` o `HS256` con claves débiles).
2.  **Lógica de Autorización en el Frontend:** El frontend puede ocultar botones, pero el backend debe validar cada solicitud. Nunca confíes en la UI para la seguridad.
3.  **Almacenamiento Inseguro de Tokens:** Guardar JWTs en `localStorage` es vulnerable a XSS. Prefiere `HttpOnly` cookies o almacenamiento en memoria con rotación.
4.  **No Revocar Tokens:** En casos de fuga de credenciales, no hay forma de revocar un JWT sin una lista negra (blacklist) o token de actualización rotativo, lo que aumenta la complejidad.

## Cuándo Usar / Cuándo No Usar

| Escenario | Recomendación | Razón |
|-----------|---------------|-------|
| **APIs Públicas / Microservicios** | JWT + Stateless | Escalabilidad horizontal sin depender de sesión compartida. |
| **Aplicaciones Web Tradicionales** | Sesiones con Cookies | Mejor control de revocación, menor riesgo de XSS si se configuran bien. |
| **Sistemas Críticos (Banca)** | OAuth 2.0 + MFA | Cumplimiento normativo, auditoría y seguridad reforzada. |
| **Servicios Internos (Service-to-Service)** | mTLS o JWT con firma RSA | Evita credenciales compartidas, asegura identidad de máquina. |

**Trade-off:** JWTs son escalables pero difíciles de revocar. Sesiones son fáciles de revocar pero requieren almacenamiento persistente (Redis, DB). Elige según tu necesidad de consistencia vs. disponibilidad.

## Ejemplo Extendido: Flujo de Renovación de Token con Refresh Token

**Contexto:** Una aplicación SPA (React/Vue) que llama a una API REST. El access token expira en 15 min.

1.  **Login Inicial:**
    *   Cliente envía `POST /login` con `email` y `password`.
    *   Servidor valida credenciales, genera `access_token` (15 min) y `refresh_token` (7 días).
    *   Servidor guarda `refresh_token` en base de datos con `user_id` y `expires_at`.
    *   Servidor devuelve `access_token` en JSON y `refresh_token` en cookie `HttpOnly`.

2.  **Solicitud Protegida:**
    *   Cliente envía `GET /api/data` con `Authorization: Bearer <access_token>`.
    *   Servidor valida firma y expiración del JWT. Si es válido, procesa.

3.  **Expiración y Renovación:**
    *   Si el access token expira, el servidor responde `401 Unauthorized`.
    *   El cliente detecta 401 y llama a `POST /refresh` con el `refresh_token` de la cookie.
    *   Servidor valida el `refresh_token` en DB:
        *   Si existe y no expiró: genera nuevo `access_token`, actualiza `refresh_token` (rotación), borra el viejo de DB.
        *   Si no existe o expiró: responde `401`, fuerza re-login.

4.  **Seguridad Adicional:**
    *   Implementar **token binding**: asociar el token al dispositivo o IP para prevenir robo.
    *   Usar **CSRF tokens** si se usan cookies para proteger contra ataques de cross-site request forgery.

Este enfoque balancea seguridad y usabilidad, minimizando la fricción para el usuario mientras mantiene el control sobre la sesión.