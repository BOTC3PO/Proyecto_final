### 1 — Validación de estructura JWT
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["jwt", "estructura", "validacion"]
tipo: completar
enunciado:
  uno_de([
    "Para verificar la integridad de un token JWT en una API REST, debes dividir el token por el caracter `.` y validar que la parte final corresponda a la firma. Si la firma es HMAC SHA-256, la estructura del payload es JSON base64url. ¿Cuántas partes separadas por puntos contiene un JWT válido?",
    "Un JSON Web Token (JWT) estándar se compone de tres segmentos codificados en Base64Url. Al inspeccionar un token recibido en el encabezado `Authorization: Bearer <token>`, ¿cuántos segmentos distintos están presentes?",
    "La especificación RFC 7519 define que un JWT debe tener una estructura fija para ser considerado válido antes de verificar la firma. ¿Cuál es el número exacto de partes que componen este token?"
  ])
respuesta: "3"
respuestas_validas:
  - "3"
  - "tres"
  - "3 partes"
pasos:
  - "Identificar que un JWT tiene la estructura header.payload.signature"
  - "Contar los segmentos separados por el punto `.`"
explicacion:
  Un JWT válido siempre contiene exactamente 3 partes: Header, Payload y Signature, separadas por puntos.
```

### 2 — Algoritmo de firma RSA
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["jwt", "rsa", "firma"]
tipo: mc
enunciado:
  uno_de([
    "Estás configurando un servidor de autenticación que necesita intercambiar tokens sin compartir una clave secreta simétrica entre cliente y servidor. ¿Qué algoritmo de firma asymmetric es el estándar para JWT en este caso?",
    "Para implementar autenticación JWT donde el emisor y el verificador no comparten una clave secreta, ¿cuál de los siguientes algoritmos de firma asimétrica es soportado nativamente por la especificación JWT?",
    "Si tu backend utiliza claves públicas y privadas para firmar y verificar tokens JWT, ¿cuál es el algoritmo RSA más comúnmente utilizado en este contexto?"
  ])
opciones_explicitas:
  - "RS256"
  - "HS256"
  - "ES256"
  - "none"
respuesta: "RS256"
pasos:
  - "Distinguir entre firma simétrica (HMAC) y asimétrica (RSA/ECDSA)"
  - "Seleccionar el algoritmo RSA específico soportado por JWT"
explicacion:
  RS256 (RSA Signature with SHA-256) es el algoritmo de firma asimétrica estándar para JWT cuando se usan pares de claves pública/privada. HS256 usa HMAC (simétrico).
```

### 3 — Verificación de expiración (exp)
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["jwt", "exp", "validacion"]
tipo: vf
enunciado:
  uno_de([
    "Al verificar un JWT, si el campo `exp` (expiration) contiene un timestamp de Unix mayor que la fecha/hora actual del servidor, el token se considera expirado.",
    "La verificación del campo `exp` en un JWT implica comparar el timestamp de expiración con el tiempo actual; si `exp` es menor que el tiempo actual, el token está expirado.",
    "Si el campo `exp` en el payload de un JWT es mayor que el tiempo actual del servidor de validación, el token es técnicamente válido en cuanto a fecha."
  ])
respuesta: falso
pasos:
  - "Entender que `exp` es un timestamp de Unix"
  - "Comparar `exp` con `now`"
  - "Si `exp > now`, el token NO ha expirado"
explicacion:
  Si el timestamp de expiración (`exp`) es MAYOR que el tiempo actual, el token aún es válido. Solo es inválido si `exp` es MENOR que el tiempo actual.
```

### 4 — Rotación de claves JWK
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["jwks", "rotacion", "rsa"]
tipo: completar
enunciado:
  uno_de([
    "Para permitir la rotación de claves públicas sin reiniciar el servicio de validación de JWT, el servidor debe exponer su clave pública en un endpoint específico. ¿Qué formato es el estándar para este endpoint?",
    "Cuando implementas la rotación de claves para JWT, debes publicar tus claves públicas en un endpoint que siga el estándar JSON Web Key Set. ¿Cuál es el nombre del formato de este endpoint?",
    "El servidor de identidad expone sus claves públicas para la verificación de firmas JWT en un endpoint URI. ¿Qué formato de respuesta JSON se utiliza estandarmente para listar múltiples claves?"
  ])
respuesta: "JWKS"
respuestas_validas:
  - "JWKS"
  - "jwks"
  - "JSON Web Key Set"
  - "JSON Web Key Set"
pasos:
  - "Identificar la necesidad de rotación de claves"
  - "Reconocer el estándar JWKS para listar claves públicas"
explicacion:
  JWKS (JSON Web Key Set) es el estándar RFC 7517 para publicar múltiples claves públicas que pueden firmar tokens JWT, facilitando la rotación sin cambiar configuraciones en los consumidores.
```

### 5 — Algoritmo 'none'
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["jwt", "seguridad", "none"]
tipo: vf
enunciado:
  uno_de([
    "En un entorno de producción seguro, se permite el uso del algoritmo `none` en JWT para mejorar el rendimiento al omitir la firma.",
    "El algoritmo `none` en JWT indica que el token no está firmado ni encriptado, y su uso en producción es una vulnerabilidad crítica si no se controla estrictamente.",
    "Configurar el algoritmo de firma de un JWT como `none` es una práctica recomendada para reducir la carga computacional en APIs de alto tráfico en entornos de confianza."
  ])
respuesta: falso
pasos:
  - "Entender que `none` omite la firma"
  - "Reconocer el riesgo de falsificación si se acepta `none`"
explicacion:
  El algoritmo `none` permite que cualquier persona falsifique tokens sin firma. Debe ser explícitamente rechazado o deshabilitado en la mayoría de los contextos de seguridad de producción.
```

### 6 — Refresh Tokens vs Access Tokens
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oauth2", "refresh", "access"]
tipo: mc
enunciado:
  uno_de([
    "En OAuth 2.0, ¿qué tipo de token se utiliza específicamente para obtener un nuevo `access_token` sin requerir que el usuario inicie sesión nuevamente?",
    "Para renovar la sesión de un usuario en un sistema OAuth 2.0 sin fricción para el usuario final, ¿qué credencial se intercambia con el servidor de autorización?",
    "Si un `access_token` ha expirado pero el usuario sigue activo, ¿qué token de larga duración se usa para solicitar uno nuevo en el endpoint `/token`?"
  ])
opciones_explicitas:
  - "Refresh Token"
  - "ID Token"
  - "Access Token"
  - "Authorization Code"
respuesta: "Refresh Token"
pasos:
  - "Distinguir entre tokens de acceso (corta vida) y renovación (larga vida)"
  - "Identificar el Refresh Token como el mecanismo de renovación"
explicacion:
  El Refresh Token es una credencial de larga duración que se intercambia por un nuevo Access Token cuando este expira, evitando que el usuario tenga que volver a autenticarse.
```

### 7 — Estado de Refresh Token
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oauth2", "state", "revocacion"]
tipo: completar
enunciado:
  uno_de([
    "Para prevenir el reuso de un Refresh Token robado (replay attack), el servidor de autorización debe invalidar el token inmediatamente después de usarlo para emitir uno nuevo. ¿Qué propiedad del Refresh Token se debe cambiar o qué acción se debe tomar?",
    "Al implementar la seguridad de Refresh Tokens, se recomienda que cada vez que se use uno para obtener un nuevo Access Token, el anterior ya no sea válido. ¿Qué característica de diseño de token se denomina a menudo 'Refresh Token Rotation'?",
    "En la estrategia de seguridad de tokens, si un Refresh Token es comprometido, debe ser revocado. ¿Qué patrón implica invalidar el Refresh Token usado y emitir uno nuevo en su lugar?"
  ])
respuesta: "rotacion"
respuestas_validas:
  - "rotacion"
  - "rotación"
  - "rotation"
  - "refresh token rotation"
pasos:
  - "Identificar el riesgo de reutilización de Refresh Tokens"
  - "Reconocer la estrategia de rotación como mitigación"
explicacion:
  La rotación de Refresh Tokens implica que cada uso invalida el anterior y emite uno nuevo, reduciendo la ventana de oportunidad para un atacante que robe el token.
```

### 8 — Scopes en OAuth 2.0
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oauth2", "scopes", "autorizacion"]
tipo: mc
enunciado:
  uno_de([
    "En OAuth 2.0, ¿qué parámetro se utiliza en la solicitud de autorización para indicar al servidor qué permisos específicos se están solicitando?",
    "Para solicitar acceso limitado a recursos específicos (ej. solo lectura de perfil) en un flujo OAuth 2.0, ¿qué campo se incluye en la URL de autorización?",
    "Si una aplicación solo necesita leer el perfil del usuario pero no modificarlo, ¿qué mecanismo estándar de OAuth 2.0 define estos límites de permiso?"
  ])
opciones_explicitas:
  - "scope"
  - "grant_type"
  - "redirect_uri"
  - "client_id"
respuesta: "scope"
pasos:
  - "Identificar los parámetros de la solicitud de autorización OAuth"
  - "Seleccionar `scope` como el definidor de permisos"
explicacion:
  El parámetro `scope` define el conjunto de permisos o derechos de acceso que el cliente solicita obtener del usuario.
```

### 9 — PKCE Flow
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oauth2", "pkce", "mobile"]
tipo: completar
enunciado:
  uno_de([
    "Para proteger a las aplicaciones móviles o de un solo paso (SPA) contra ataques de interceptación de código de autorización, se utiliza una extensión de OAuth 2.0. ¿Qué acrónimo de 4 letras representa este mecanismo?",
    "Las aplicaciones de cliente público deben implementar una extensión de seguridad para prevenir ataques de CSRF e interceptación de códigos. ¿Cuál es el nombre de esta extensión estandarizada por OAuth 2.0?",
    "¿Qué mecanismo de seguridad, basado en un código de desafío y un secreto, se recomienda para clientes públicos en OAuth 2.0 para mitigar ataques de redirección?"
  ])
respuesta: "PKCE"
respuestas_validas:
  - "PKCE"
  - "pkce"
  - "RFC 7636"
  - "RFC7636"
pasos:
  - "Reconocer la vulnerabilidad de clientes públicos a la interceptación de códigos"
  - "Identificar PKCE (Proof Key for Code Exchange) como la solución"
explicacion:
  PKCE (Proof Key for Code Exchange) genera un código de desafío (code_verifier) y un hash (code_challenge) para asegurar que quien intercambia el código sea el mismo cliente que lo solicitó.
```

### 10 — CSRF en SPA
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["csrf", "spa", "xsrf"]
tipo: vf
enunciado:
  uno_de([
    "Las Single Page Applications (SPA) que utilizan tokens JWT almacenados en `localStorage` están completamente protegidas contra ataques CSRF por defecto.",
    "El almacenamiento de JWT en `localStorage` dentro de una SPA NO protege contra CSRF, ya que los cookies (o tokens) se envían automáticamente en peticiones del mismo origen si están configuradas así, pero los ataques CSRF típicos requieren cookies; sin embargo, si se usa `localStorage`, el ataque CSRF tradicional no aplica directamente, pero se requieren otras medidas para ataques XSS.",
    "Si una SPA almacena el token de acceso en `localStorage`, el navegador no lo envía automáticamente en peticiones AJAX, por lo que el riesgo de CSRF clásico se elimina en comparación con cookies."
  ])
respuesta: verdadero
pasos:
  - "Entender que CSRF explota el envío automático de cookies"
  - "Reconocer que `localStorage` no se envía automáticamente"
  - "Concluir que el riesgo de CSRF clásico se mitiga, aunque XSS sigue siendo un riesgo"
explicacion:
  Almacenar tokens en `localStorage` evita que se envíen automáticamente con las peticiones HTTP, mitigando el ataque CSRF clásico. Sin embargo, expone al riesgo de XSS si se inyecta script malicioso.
```

### 11 — SameSite Cookies
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["csrf", "cookies", "samesite"]
tipo: mc
enunciado:
  uno_de([
    "Para proteger cookies de sesión de ataques CSRF, ¿qué valor del atributo `SameSite` debe establecerse para que la cookie nunca se envíe en contextos cruzados?",
    "Si configuras una cookie de sesión con `SameSite=Lax`, ¿qué comportamiento tiene respecto a las peticiones de origen cruzado iniciadas por un formulario GET?",
    "¿Cuál es el valor de `SameSite` que ofrece la máxima protección contra CSRF, impidiendo el envío de la cookie en cualquier contexto de origen cruzado?"
  ])
opciones_explicitas:
  - "Strict"
  - "Lax"
  - "None"
  - "Secure"
respuesta: "Strict"
pasos:
  - "Analizar los valores de `SameSite`"
  - "Identificar `Strict` como el que bloquea todo envío cruzado"
explicacion:
  `SameSite=Strict` impide que el navegador envíe la cookie en cualquier solicitud de origen cruzado, ofreciendo la máxima protección contra CSRF, aunque puede afectar la experiencia de usuario en enlaces externos.
```

### 12 — Hashing de contraseñas
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["hashing", "bcrypt", "salting"]
tipo: completar
enunciado:
  uno_de([
    "Para almacenar contraseñas de forma segura en una base de datos, no se debe usar MD5 ni SHA-256 sin sal. ¿Qué algoritmo de hashing adaptativo es el estándar actual recomendado para contraseñas?",
    "Al implementar la seguridad de contraseñas, se requiere un algoritmo lento y resistente a ataques de fuerza bruta. ¿Cuál es el nombre del algoritmo de hashing de contraseñas más comúnmente utilizado en entornos modernos?",
    "¿Qué función de hashing de contraseñas, que incluye un mecanismo de salt integrado y es configurable en costo computacional, es considerada la mejor práctica para el almacenamiento seguro de contraseñas?"
  ])
respuesta: "bcrypt"
respuestas_validas:
  - "bcrypt"
  - "BCrypt"
  - "Bcrypt"
pasos:
  - "Descartar hashes rápidos y sin sal (MD5/SHA)"
  - "Seleccionar bcrypt por su diseño lento y sal integrada"
explicacion:
  bcrypt es un algoritmo de hashing de contraseñas diseñado específicamente para ser lento y adaptable (costo), lo que dificulta los ataques de fuerza bruta.
```

### 13 — Argon2
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["hashing", "argon2", "winner"]
tipo: mc
enunciado:
  uno_de([
    "¿Qué algoritmo de hashing de contraseñas ganó la Password Hashing Competition (PHC) y es considerado superior a bcrypt en resistencia contra ataques GPU/ASIC?",
    "Si buscas el estado del arte en hashing de contraseñas según la competencia PHC, ¿cuál es el algoritmo ganador que utiliza memoria y CPU de manera eficiente?",
    "Entre bcrypt, scrypt y Argon2, ¿cuál es el ganador de la competencia de hashing de contraseñas y el recomendado por OWASP actualmente?"
  ])
opciones_explicitas:
  - "Argon2"
  - "bcrypt"
  - "scrypt"
  - "PBKDF2"
respuesta: "Argon2"
pasos:
  - "Conocer la historia de la competencia PHC"
  - "Identificar Argon2 como el ganador"
explicacion:
  Argon2 ganó la Password Hashing Competition en 2015 y es recomendado por OWASP debido a su resistencia a ataques de memoria y hardware especializado.
```

### 14 — Rate Limiting
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["rate-limiting", "seguridad", "brute-force"]
tipo: completar
enunciado:
  uno_de([
    "Para proteger el endpoint de login contra ataques de fuerza bruta, se debe implementar un mecanismo que limite las solicitudes por IP. ¿Qué técnica es comúnmente aplicada en este contexto?",
    "¿Qué medida de seguridad se aplica en el nivel de infraestructura o aplicación para restringir el número de intentos de autenticación desde una misma dirección IP en un periodo de tiempo?",
    "Para mitigar el riesgo de brute force en la autenticación, ¿qué patrón de control de acceso se debe implementar en el gateway o API?"
  ])
respuesta: "rate limiting"
respuestas_validas:
  - "rate limiting"
  - "limitado de tasa"
  - "throttling"
  - "limitacion de tasa"
pasos:
  - "Identificar la amenaza de fuerza bruta"
  - "Seleccionar el rate limiting como la mitigación estándar"
explicacion:
  El rate limiting (limitación de tasa) restringe el número de peticiones que un cliente puede hacer, protegiendo contra ataques de fuerza bruta y abuso de la API.
```

### 15 — MFA TOTP
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["mfa", "totp", "2fa"]
tipo: mc
enunciado:
  uno_de([
    "En un sistema de autenticación multifactor (MFA), ¿qué protocolo estándar se utiliza para generar códigos de un solo uso temporizados (TOTP) en aplicaciones como Google Authenticator?",
    "Si tu backend valida códigos de 6 dígitos generados cada 30 segundos por una aplicación del usuario, ¿qué RFC define el algoritmo para esta sincronización?",
    "¿Cuál es el estándar utilizado para la generación de contraseñas temporales de un solo uso (TOTP) en dispositivos móviles para MFA?"
  ])
opciones_explicitas:
  - "RFC 6238"
  - "RFC 4226"
  - "RFC 7519"
  - "RFC 6749"
respuesta: "RFC 6238"
pasos:
  - "Identificar TOTP como el método de generación de códigos"
  - "Reconocer RFC 6238 como la especificación de TOTP"
explicacion:
  RFC 6238 define el algoritmo TOTP (Time-Based One-Time Password), que es la base para la mayoría de las aplicaciones de autenticación multifactor móviles.
```

### 16 — Bloqueo de cuenta
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["seguridad", "account-lockout", "denegacion"]
tipo: vf
enunciado:
  uno_de([
    "Implementar un bloqueo permanente de cuenta tras 5 intentos fallidos de contraseña es una práctica de seguridad recomendada sin desventajas operativas.",
    "El bloqueo permanente de cuentas tras múltiples intentos fallidos puede ser utilizado como un vector de ataque de Denegación de Servicio (DoS) contra usuarios legítimos.",
    "Una política de bloqueo de cuenta indefinido es la mejor manera de prevenir ataques de fuerza bruta, ya que elimina el riesgo de acceso no autorizado."
  ])
respuesta: verdadero
pasos:
  - "Analizar el impacto del bloqueo permanente"
  - "Identificar el riesgo de DoS contra usuarios legítimos"
explicacion:
  El bloqueo permanente puede ser usado maliciosamente para bloquear cuentas de usuarios legítimos (DoS). Se recomienda el bloqueo temporal con verificación de identidad para reactivar.
```

### 17 — Session Fixation
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["session", "fixation", "seguridad"]
tipo: completar
enunciado:
  uno_de([
    "Para prevenir el ataque de fijación de sesión, donde un atacante establece una ID de sesión conocida antes de que el usuario se autentique, ¿qué acción debe realizar el servidor tras la autenticación exitosa?",
    "¿Qué operación de seguridad se debe ejecutar inmediatamente después de que un usuario se autentica correctamente para evitar que un atacante use una Session ID preestablecida?",
    "Para mitigar Session Fixation, el servidor debe generar una nueva ID de sesión tras la autenticación. ¿Cómo se denomina este proceso de regeneración?"
  ])
respuesta: "regeneracion"
respuestas_validas:
  - "regeneracion"
  - "regeneración"
  - "regenerate"
  - "regenerar"
pasos:
  - "Entender el ataque de fijación de sesión"
  - "Identificar la regeneración de la Session ID como la mitigación"
explicacion:
  Regenerar la Session ID tras la autenticación asegura que el atacante no pueda usar la ID de sesión que proporcionó antes de que el usuario se identificara.
```

### 18 — HTTPS / HSTS
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["https", "hsts", "transporte"]
tipo: mc
enunciado:
  uno_de([
    "Para evitar que un atacante fuerce la conexión a HTTP en lugar de HTTPS y capture las credenciales, ¿qué encabezado HTTP se debe configurar en el servidor?",
    "¿Qué mecanismo de seguridad del navegador, activado por un encabezado del servidor, obliga a que todas las peticiones se realicen exclusivamente sobre HTTPS?",
    "Si un usuario intenta acceder a `http://api.ejemplo.com`, ¿qué encabezado HTTP debe devolver el servidor para indicar al navegador que siempre use HTTPS en el futuro?"
  ])
opciones_explicitas:
  - "Strict-Transport-Security"
  - "X-Frame-Options"
  - "Content-Security-Policy"
  - "Access-Control-Allow-Origin"
respuesta: "Strict-Transport-Security"
pasos:
  - "Identificar el riesgo de downgrade a HTTP"
  - "Seleccionar HSTS como la solución"
explicacion:
  HSTS (Strict-Transport-Security) indica al navegador que solo debe comunicarse con el servidor mediante HTTPS, previniendo ataques de downgrade y sniffing.
```

### 19 — OIDC vs OAuth 2.0
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oidc", "oauth2", "diferencias"]
tipo: mc
enunciado:
  uno_de([
    "OAuth 2.0 es un protocolo de autorización, mientras que OIDC es una capa de identidad sobre él. ¿Qué componente adicional introduce OIDC para proporcionar información sobre el usuario?",
    "¿Qué extensión de OAuth 2.0 agrega una capa de identidad y proporciona un `id_token` para verificar la identidad del usuario final?",
    "Si necesitas autenticar al usuario (saber quién es) y no solo autorizar a la aplicación, ¿qué protocolo basado en OAuth 2.0 debes implementar?"
  ])
opciones_explicitas:
  - "OpenID Connect"
  - "SAML"
  - "LDAP"
  - "Kerberos"
respuesta: "OpenID Connect"
pasos:
  - "Distinguir entre autorización (OAuth) e identidad (OIDC)"
  - "Identificar OIDC como la extensión de identidad"
explicacion:
  OpenID Connect (OIDC) añade una capa de identidad a OAuth 2.0, permitiendo a los clientes verificar la identidad del usuario final mediante un `id_token`.
```

### 20 — SAML Assertion
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["saml", "enterprise", "assertion"]
tipo: completar
enunciado:
  uno_de([
    "En el protocolo SAML, ¿qué estructura XML firmada contiene la información de autenticación y atributos del usuario para transferirla entre el Identity Provider y el Service Provider?",
    "¿Cómo se llama el elemento principal en un mensaje SAML que contiene las afirmaciones de identidad del usuario?",
    "En SAML, el componente que envía la información de autenticación desde el IDP al SP se denomina ¿qué?"
  ])
respuesta: "assertion"
respuestas_validas:
  - "assertion"
  - "afirmacion"
  - "SAML Assertion"
  - "SAMLAssertion"
pasos:
  - "Reconocer la estructura de mensajes SAML"
  - "Identificar la Assertion como el contenedor de datos de identidad"
explicacion:
  Una SAML Assertion es el mensaje XML firmado que contiene las declaraciones de identidad (atributos) y el estado de autenticación del usuario.
```

### 21 — OAuth 2.0 Grant Type
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oauth2", "grant", "client-credentials"]
tipo: mc
enunciado:
  uno_de([
    "Para una comunicación máquina a máquina (M2M) donde no hay un usuario final interactuando, ¿qué flujo de OAuth 2.0 es el más apropiado?",
    "Si una aplicación de servidor backend necesita acceder a sus propios recursos protegidos en otro servidor, ¿qué `grant_type` de OAuth 2.0 debe usar?",
    "¿Cuál es el flujo de OAuth 2.0 diseñado específicamente para clientes confidenciales que actúan en su propio nombre y no en nombre de un usuario?"
  ])
opciones_explicitas:
  - "client_credentials"
  - "authorization_code"
  - "implicit"
  - "password"
respuesta: "client_credentials"
pasos:
  - "Identificar el escenario M2M sin usuario"
  - "Seleccionar el flujo `client_credentials`"
explicacion:
  El flujo `client_credentials` es para aplicaciones que necesitan acceder a sus propios recursos o recursos del sistema, sin intervención de un usuario final.
```

### 22 — Token Binding
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["token-binding", "seguridad", "mTLS"]
tipo: completar
enunciado:
  uno_de([
    "Para vincular un token de acceso a la conexión TLS subyacente y prevenir su robo y reutilización en otro dispositivo, se utiliza una extensión conocida como ¿qué?",
    "¿Qué mecanismo de seguridad vincula la identidad del cliente (certificado TLS) al token de acceso para asegurar que solo el dispositivo original pueda usarlo?",
    "La extensión que permite a un token de acceso ser válido solo para un par específico de claves TLS se llama ¿qué?"
  ])
respuesta: "token binding"
respuestas_validas:
  - "token binding"
  - "vinculacion de tokens"
  - "tokenbinding"
pasos:
  - "Identificar el riesgo de robo de tokens"
  - "Reconocer Token Binding como la mitigación basada en TLS"
explicacion:
  Token Binding vincula el token a la conexión TLS, asegurando que el token solo pueda ser usado por el cliente que posee la clave privada correspondiente al certificado TLS.
```

### 23 — JSON Web Key (JWK)
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["jwk", "formato", "clave"]
tipo: mc
enunciado:
  uno_de([
    "¿Qué formato JSON estandarizado se utiliza para representar claves criptográficas (públicas o privadas) que pueden firmar o verificar JWT?",
    "Si necesitas intercambiar claves RSA o ECDSA entre servidores de forma programática, ¿qué formato de representación de claves es el estándar?",
    "¿Qué especificación define el formato JSON para representar claves criptográficas, utilizado frecuentemente en JWKS?"
  ])
opciones_explicitas:
  - "JWK"
  - "PEM"
  - "DER"
  - "ASN.1"
respuesta: "JWK"
pasos:
  - "Identificar la necesidad de un formato JSON para claves"
  - "Seleccionar JWK (JSON Web Key)"
explicacion:
  JWK (JSON Web Key) es el formato estándar para representar claves criptográficas en JSON, facilitando su intercambio y uso en sistemas web.
```

### 24 — Revocación de Tokens
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["revocacion", "blacklist", "jti"]
tipo: completar
enunciado:
  uno_de([
    "Dado que los JWT son stateless, si necesitas revocar un token antes de su expiración, ¿qué campo del payload se suele usar como identificador único para añadirlo a una lista negra?",
    "Para implementar la revocación de JWTs, se debe generar un identificador único para cada token. ¿Qué campo estandarizado en el payload de JWT se utiliza comúnmente para este propósito?",
    "Al revocar un JWT, el backend lo añade a una blacklist. ¿Qué campo del JWT sirve como clave única para consultar en esta lista?"
  ])
respuesta: "jti"
respuestas_validas:
  - "jti"
  - "JTI"
  - "JWT ID"
  - "jwt-id"
pasos:
  - "Entender la necesidad de identificar tokens únicos para revocación"
  - "Seleccionar `jti` (JWT ID) como el identificador estándar"
explicacion:
  El campo `jti` (JWT ID) proporciona un identificador único para el token, permitiendo su revocación mediante el bloqueo de este ID específico en una lista negra.
```

### 25 — Authorization Code Flow
```
metadata:
  materia: "informatica-ramas"
  tema: "backend-autenticacion-y-autorizacion"
  nivel: "avanzado"
  tags: ["oauth2", "flow", "server-side"]
tipo: mc
enunciado:
  uno_de([
    "Para una aplicación backend tradicional (server-side) que necesita acceder a recursos de usuario en nombre de este, ¿cuál es el flujo OAuth 2.0 más seguro y recomendado?",
    "Si tu aplicación tiene un servidor backend que maneja la sesión del usuario y necesita obtener un token de acceso, ¿qué flujo de OAuth 2.0 utiliza un código de autorización intercambiado por el servidor?",
    "¿Cuál es el flujo OAuth 2.0 estándar para aplicaciones web con backend que involucra redirigir al usuario al proveedor de identidad y luego intercambiar el código por tokens en el servidor?"
  ])
opciones_explicitas:
  - "Authorization Code"
  - "Implicit"
  - "Client Credentials"
  - "Password"
respuesta: "Authorization Code"
pasos:
  - "Identificar el escenario de aplicación web con backend"
  - "Seleccionar el flujo Authorization Code por su seguridad (tokens solo en backend)"
explicacion:
  El flujo Authorization Code es el más seguro para aplicaciones con backend porque el token de acceso nunca se expone al navegador del cliente, sino que se intercambia directamente entre el servidor del cliente y el proveedor de identidad.
```