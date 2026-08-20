### 1 — Seguridad de Hashes de Contraseñas
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["hashing", "bcrypt", "seguridad"]
tipo: completar
enunciado:
  uno_de([
    "Para almacenar contraseñas de forma segura en una base de datos moderna, se debe utilizar el algoritmo de hashing {algo} con un costo de trabajo adecuado.",
    "Al implementar la autenticación, el estándar de facto para el hashing de contraseñas es {algo}, evitando algoritmos rápidos como SHA-256 para este propósito específico."
  ])
respuestas_validas:
  - bcrypt
  - Bcrypt
  - bcrypt
explicacion:
  bcrypt es un algoritmo de hashing de contraseñas diseñado específicamente para ser lento y resistente a ataques de fuerza bruta mediante la incorporación de un salt y un parámetro de costo (work factor). SHA-256 es demasiado rápido para este uso directo sin mecanismos adicionales complejos como HKDF o PBKDF2, por lo que bcrypt (o Argon2) son las recomendaciones estándar.
```

### 2 — Gestión de Secretos en Entornos Cloud
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["aws", "secrets-manager", "cloud"]
tipo: completar
enunciado:
  "En AWS, el servicio gestionado diseñado específicamente para rotar, gestionar y recuperar secretos de bases de datos y credenciales de API es {servicio}."
respuestas_validas:
  - secrets-manager
  - Secrets Manager
  - AWS Secrets Manager
explicacion:
  AWS Secrets Manager es el servicio nativo para esto. Aunque AWS KMS cifra los datos, no gestiona el ciclo de vida de las credencias en sí mismo. Vault es una solución de terceros (HashiCorp) que también se usa, pero la pregunta especifica el servicio de AWS.
```

### 3 — Rotación Automática de Credenciales
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["rotacion", "automatizacion", "seguridad"]
tipo: vf
enunciado:
  "La rotación automática de contraseñas de servicios de backend debe realizarse sin notificar a las aplicaciones consumidoras, ya que estas deben manejar la transición silenciosamente mediante caché de credenciales."
respuesta:
  falso
explicacion:
  Falso. Las aplicaciones consumidoras deben ser notificadas o configuradas para leer las nuevas credenciales desde el gestor de secretos en tiempo real o con una ventana de caché muy corta. Si las apps mantienen la credencial vieja en caché o memoria, dejarán de funcionar o se romperá la seguridad. La transición debe ser coordinada, no silenciosa para la infraestructura.
```

### 4 — Algoritmo Argon2 en Gestión de Contraseñas
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["argon2", "hashing", "pwning"]
tipo: mc
enunciado:
  "¿Cuál es la principal ventaja de Argon2 (específicamente Argon2id) sobre bcrypt en el contexto de la gestión moderna de contraseñas?"
opciones_explicitas:
  - "Argon2 es más rápido en hardware convencional."
  - "Argon2 es resistente a ataques de tiempo y hace uso eficiente de la memoria y el ancho de banda."
  - "Argon2 no requiere salt y es más simple de implementar."
  - "Argon2 es compatible con todos los sistemas legacy de Windows."
respuesta:
  Argon2 es resistente a ataques de tiempo y hace uso eficiente de la memoria y el ancho de banda.
explicacion:
  Argon2 ganó la Password Hashing Competition. Su versión Argon2id combina los beneficios de Argon2i (resistencia a side-channel attacks) y Argon2d (resistencia a GPU attacks) y es configurable en tiempo de memoria, lo que lo hace más robusto contra ataques especializados que bcrypt.
```

### 5 — Principio de Menor Privilegio en Secretos
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["rbac", "principio-menor-privilegio", "acceso"]
tipo: completar
enunciado:
  "Al configurar políticas de acceso en HashiCorp Vault o AWS Secrets Manager, se debe aplicar el principio de {principio} para garantizar que solo los servicios necesarios puedan leer sus credencias específicas."
respuestas_validas:
  - menor-privilegio
  - menor privilegio
  - least-privilege
  - Least Privilege
explicacion:
  El principio de menor privilegio (Least Privilege) dicta que un componente (usuario, proceso, sistema) debe tener solo los permisos estrictamente necesarios para realizar su función, minimizando el daño potencial en caso de compromiso.
```

### 6 — Inyección de Secretos en Contenedores
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["kubernetes", "secrets", "injection"]
tipo: completar
enunciado:
  "En Kubernetes, para evitar que las credencias queden expuestas en el sistema de archivos del nodo o en logs, se deben montar los secretos como {tipo} en lugar de volumes normales."
respuestas_validas:
  - tmpfs
  - Tmpfs
  - tmpfs
  - memory
  - memory volume
explicacion:
  Montar secrets como volúmenes tmpfs asegura que los datos solo existan en la memoria RAM del nodo y nunca se escriban en el disco persistente, reduciendo el riesgo de recuperación de credenciales tras el borrado del pod o reinicio del nodo.
```

### 7 — Auditoría de Acceso a Credenciales
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["auditoria", "logging", "compliance"]
tipo: vf
enunciado:
  "Es aceptable no auditar las lecturas de credenciales por parte de aplicaciones internas de confianza para reducir la carga de I/O en el gestor de secretos, siempre que estén en la misma red VPC."
respuesta:
  falso
explicacion:
  Falso. Toda lectura de secretos debe ser auditada para detectar accesos anómalos, intentos de exfiltración o configuraciones incorrectas. La confianza en la red no elimina el riesgo de compromiso interno o configuraciones erróneas de IAM/ACLs.
```

### 8 — Formato de Archivos de Entorno Seguro
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["dotenv", "secrets", "formato"]
tipo: completar
enunciado:
  "Nunca se deben commitear archivos {archivo} que contengan credencias en texto plano al repositorio de código fuente. Se debe usar la extensión .env.example para plantillas."
respuestas_validas:
  - .env
  - .env.local
  - .env.production
  - .env.development
  - .env
explicacion:
  Los archivos .env (y sus variantes) son el estándar local para variables de entorno. Commitarlos expone credenciales. Se usa .env.example para mostrar la estructura sin valores reales.
```

### 9 — Criptografía Híbrida para Secretos en Tránsito
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["tls", "transito", "cifrado"]
tipo: mc
enunciado:
  "Cuando una aplicación cliente recupera un secreto de un servicio remoto (ej. AWS Secrets Manager), ¿qué protocolo garantiza la confidencialidad y autenticación del canal?"
opciones_explicitas:
  - HTTP con autenticación básica en URL.
  - TLS 1.2 o superior con validación estricta de certificados.
  - WebSocket sin cifrado para mayor velocidad.
  - SSH tunneling solo para usuarios humanos.
respuesta:
  TLS 1.2 o superior con validación estricta de certificados.
explicacion:
  Todas las comunicaciones con gestores de secretos deben usar TLS para evitar ataques man-in-the-middle. La validación estricta de certificados es crucial para asegurar que se habla con el servicio legítimo y no un impostor.
```

### 10 — Rotación de Claves de Cifrado (KEK)
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["kms", "rotacion", "cifrado"]
tipo: completar
enunciado:
  "En un esquema de cifrado de secretos en reposo, la clave que cifra los datos se llama clave de datos (DEK), y la clave que cifra la DEK se llama {tipo_clave}."
respuestas_validas:
  - key-encryption-key
  - KEK
  - Key Encryption Key
  - kek
explicacion:
  El modelo de doble capa usa una Key Encryption Key (KEK) para proteger la Data Encryption Key (DEK). Esto permite rotar las DEKs sin re-cifrar todos los datos, y proteger la KEK con HSM o servicios de clave gestionados.
```

### 11 — Detección de Credenciales Hardcodeadas
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["git-secrets", "pre-commit", "deteccion"]
tipo: completar
enunciado:
  "Para prevenir el commit accidental de credenciales, se utiliza un hook de git como {herramienta} que escanea el contenido staged contra patrones conocidos de secretos."
respuestas_validas:
  - git-secrets
  - GitSecrets
  - trufflehog
  - truffleHog
  - gitleaks
  - Gitleaks
  - pre-commit hook
  - pre-commit
explicacion:
  Herramientas como git-secrets, TruffleHog o Gitleaks son estándares de la industria para ejecutar en el hook pre-commit y evitar que secretos (API keys, passwords, tokens) lleguen al repositorio.
```

### 12 — Almacenamiento de Secretos en Memoria
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["memoria", "seguridad", "runtime"]
tipo: vf
enunciado:
  "Una vez que una aplicación ha leído una credencia sensible de un gestor de secretos, es seguro dejarla almacenada en una variable de entorno persistente en el sistema operativo host para mejorar el rendimiento."
respuesta:
  falso
explicacion:
  Falso. Las variables de entorno del sistema operativo a menudo son legibles por otros procesos del mismo usuario y pueden quedar en logs de auditoría del sistema o en dumps de memoria. Las credencias deben vivir en memoria segura (ej. buffers encriptados o compartimentos seguros) y borrarse de la memoria virtual cuando ya no se necesiten.
```

### 13 — Gestión de Secretos para Bases de Datos Relacionales
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["database", "conexiones", "pool"]
tipo: completar
enunciado:
  "Al usar {tecnologia} para gestionar credenciales de bases de datos, se pueden generar credenciales efímeras de corta duración que se rotan automáticamente, eliminando la necesidad de almacenar passwords estáticas."
respuestas_validas:
  - aws-secrets-manager
  - AWS Secrets Manager
  - hashicorp-vault
  - HashiCorp Vault
  - vault
  - Vault
explicacion:
  Tanto AWS Secrets Manager como HashiCorp Vault ofrecen capacidades de rotación de credenciales dinámicas para RDS, PostgreSQL, etc., generando usuarios temporales que expiran rápidamente, reduciendo la ventana de explotación.
```

### 14 — Seguridad de Archivos de Configuración de Servicios
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["permisos", "archivo", "linux"]
tipo: completar
enunciado:
  "Los archivos de configuración que contienen claves privadas o credencias deben tener permisos de archivo estrictos, típicamente {permiso_octal}, para que solo el propietario pueda leerlos."
respuestas_validas:
  - 600
  - 640
  - 644
  - 600
explicacion:
  El permiso 600 (rw-------) asegura que solo el usuario dueño del archivo pueda leerlo y escribirlo. 640 es aceptable si el grupo necesita acceso, pero 600 es el estándar más seguro para credencias individuales. Nunca 644 (lectura pública).
```

### 15 — Ataque de Fuerza Bruta Contra Gestores de Secretos
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["rate-limiting", "ataque", "api"]
tipo: mc
enunciado:
  "Para proteger un endpoint de API de un gestor de secretos contra ataques de fuerza bruta o enumeración de claves, ¿qué mecanismo es ESPECÍFICO y más efectivo?"
opciones_explicitas:
  - Aumentar el ancho de banda del servidor.
  - Implementar rate limiting y throttling basado en identidad y IP.
  - Deshabilitar el cifrado TLS.
  - Usar contraseñas más cortas para facilitar la carga.
respuesta:
  Implementar rate limiting y throttling basado en identidad y IP.
explicacion:
  El rate limiting (límite de tasa) y el throttling (restricción) son esenciales para mitigar ataques de fuerza bruta contra las credenciales de acceso al propio gestor de secretos o contra las claves de cifrado de los secretos almacenados.
```

### 16 — Cifrado de Secretos en Repositorios (Sealed Secrets)
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["kubernetes", "sealed-secrets", "cifrado"]
tipo: completar
enunciado:
  "En Kubernetes, la solución que permite commitear secretos cifrados en Git, donde solo el controlador en el cluster puede descifrarlos usando su clave maestra, se llama {solucion}."
respuestas_validas:
  - sealed-secrets
  - Sealed Secrets
  - sealed-secrets-controller
  - sealed secrets
explicacion:
  Sealed Secrets (de Bitnami) permite a los usuarios cifrar secretos con la clave pública del cluster. El cifrado es irreversible sin la clave privada del controlador en el cluster, permitiendo un flujo de trabajo GitOps seguro sin un gestor de secretos externo dedicado.
```

### 17 — Gestión de Secretos para Despliegues Locales (Docker)
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["docker", "compose", "secrets"]
tipo: completar
enunciado:
  "En Docker Compose, para pasar secretos a los servicios sin exponerlos en el historial de comandos o en variables de entorno del shell, se debe usar la sección {seccion} del archivo docker-compose.yml."
respuestas_validas:
  - secrets
  - Secrets
  - secrets
  - docker secrets
  - Docker secrets
explicacion:
  La sección `secrets` en Docker Compose permite montar archivos o objetos de secreto gestionados por Docker Engine directamente en los contenedores de forma segura, diferenciándolos de las variables de entorno normales.
```

### 18 — Verificación de Integridad de Credenciales
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["validacion", "health-check", "credenciales"]
tipo: vf
enunciado:
  "Las credencias almacenadas en un gestor de secretos no requieren validación periódica de su validez (ej. verificar que el token no haya expirado) si el gestor asegura que siempre son válidas."
respuesta:
  falso
explicacion:
  Falso. Las credenciales pueden expirar, ser revocadas por el proveedor de identidad (ej. Okta, Azure AD) o cambiar por rotación manual. La aplicación debe manejar errores de autenticación y reintentar obtener una nueva credencia fresca del gestor.
```

### 19 — Uso de MFA para Acceso a Gestores de Secretos
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["mfa", "acceso-humano", "administracion"]
tipo: mc
enunciado:
  "Para administradores humanos que acceden a paneles de gestión de secretos (ej. AWS Console o Vault UI), ¿qué medida de seguridad es CRÍTICA?"
opciones_explicitas:
  - Usar la misma contraseña en todos los sistemas.
  - Habilitar Multi-Factor Authentication (MFA) obligatorio.
  - Compartir las credencias de administrador por email.
  - Desactivar los logs de auditoría.
respuesta:
  Habilitar Multi-Factor Authentication (MFA) obligatorio.
explicacion:
  El acceso humano a los gestores de secretos es un punto crítico. MFA es indispensable para proteger las cuentas de administrador contra el robo de credenciales (phishing, keyloggers).
```

### 20 — Rotación de Claves API de Terceros
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["api-keys", "terceros", "rotacion"]
tipo: completar
enunciado:
  "Las API keys de servicios de terceros (ej. Stripe, Twilio) deben almacenarse en el gestor de secretos y rotarse periódicamente mediante {mecanismo} para limitar el daño si se filtran."
respuestas_validas:
  - automatizacion
  - automatización
  - automation
  - automatizacion
  - scheduled rotation
  - rotacion automatica
  - rotación automática
explicacion:
  La rotación automatizada (scheduled rotation) de API keys es esencial. Si una key se filtra, la ventana de tiempo en que es útil para un atacante se reduce drásticamente si se rota automáticamente.
```

### 21 — Seguridad de Secretos en CI/CD Pipelines
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["ci-cd", "jenkins", "github-actions"]
tipo: completar
enunciado:
  "En pipelines de CI/CD (ej. GitHub Actions, Jenkins), las credencias deben inyectarse como {tipo_variable} de solo lectura durante la ejecución del job, nunca como archivos en el workspace."
respuestas_validas:
  - environment-variables
  - environment variables
  - environment variable
  - secret
  - secrets
  - secret variable
  - secret variable
explicacion:
  Las credencias en CI/CD deben pasarse como variables de entorno protegidas (secrets) que el pipeline inyecta en tiempo de ejecución. Escribirlas a disco en el workspace aumenta el riesgo de logs accidentales o extracción por vulnerabilidades del runner.
```

### 22 — Algoritmo de Derivación de Clave para Cifrado de Archivos
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["kdf", "aes", "cifrado"]
tipo: completar
enunciado:
  "Para derivar una clave de cifrado AES a partir de una contraseña maestra del usuario, se debe usar un algoritmo de derivación de clave como {algoritmo} con un salt aleatorio y alto costo iterativo."
respuestas_validas:
  - pbkdf2
  - PBKDF2
  - pbkdf2
  - argon2
  - Argon2
  - argon2
  - scrypt
  - scrypt
explicacion:
  PBKDF2, Argon2 o scrypt son KDFs (Key Derivation Functions) diseñados para ser lentos y resistentes a GPU. AES no deriva claves de contraseñas; requiere una clave binaria previa, que se obtiene mediante KDF.
```

### 23 — Gestión de Secretos para Microservicios
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["microservicios", "sidecar", "injection"]
tipo: mc
enunciado:
  "En una arquitectura de microservicios, ¿cuál es la práctica recomendada para la inyección de secretos?"
opciones_explicitas:
  - Hardcodear las credencias en el código binario de cada microservicio.
  - Usar un sidecar proxy o inyección de secretos en tiempo de ejecución desde un agente local seguro.
  - Enviar las credencias por correo electrónico a los desarrolladores.
  - Guardar las credencias en un archivo de texto compartido en la red.
respuesta:
  Usar un sidecar proxy o inyección de secretos en tiempo de ejecución desde un agente local seguro.
explicacion:
  La inyección en tiempo de ejecución (ej. mediante agentes de Vault o CSI drivers en K8s) asegura que los secretos no estén en el artefacto desplegado y se actualicen dinámicamente sin reinicios.
```

### 24 — Prevención de Exfiltración de Secretos en Logs
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["logging", "redaccion", "seguridad"]
tipo: completar
enunciado:
  "Los frameworks de logging deben configurarse para {accion} automáticamente cualquier string que coincida con patrones de credenciales antes de escribir en los archivos de log."
respuestas_validas:
  - redactar
  - redactar
  - masking
  - enmascarar
  - enmascarar
  - sanitizar
  - sanitizar
  - scrub
  - scrub
explicacion:
  La redacción (redaction/masking) de logs es crítica. Patrones como `password=`, `key=`, `token=` deben ser ofuscados (ej. `***`) para evitar que los logs se conviertan en una fuente de filtración de secretos.
```

### 25 — Recuperación ante Pérdida de Clave Maestra
```
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-gestion-de-contrasenas"
  nivel: "avanzado"
  tags: ["backup", "recuperacion", "kms"]
tipo: vf
enunciado:
  "Si se pierde la clave maestra del gestor de secretos (ej. AWS KMS key), es posible recuperar los secretos cifrados almacenados simplemente contactando al soporte técnico de la nube."
respuesta:
  falso
explicacion:
  Falso. En criptografía moderna, si se pierde la clave de cifrado (KEK) y no hay una copia de seguridad segura de esa clave, los datos cifrados son irrecuperables. El soporte técnico no tiene la clave privada. La gestión de backups de claves es parte crítica de la estrategia de recuperación.
```