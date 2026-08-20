### 1 — Diagnóstico de SQL Injection en logs
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["sql-injection", "logs", "diagnostico"]
enunciado: "En los logs de acceso de un servidor web, se observa la siguiente URI solicitada repetidamente: `/api/users?id=1' OR '1'='1`. ¿Qué tipo de ataque se está intentando ejecutar?"
tipo: "vf"
respuesta: verdadero
pasos:
  - "Identificar la sintaxis `' OR '1'='1'` en el parámetro `id`."
  - "Reconocer que esta estructura intenta cerrar la consulta SQL original y añadir una condición siempre verdadera."
  - "Concluir que es una técnica clásica de inyección SQL booleana."
explicacion: "La secuencia `' OR '1'='1'` es una firma distintiva de SQL Injection (SQLi) booleana, utilizada para bypass de autenticación o extracción de datos manipulando la lógica de la consulta."
```

### 2 — Completar flag de protección contra X-Frame-Options
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["clickjacking", "http-headers", "mitigacion"]
enunciado: "Para mitigar ataques de Clickjacking, el servidor debe enviar el encabezado HTTP `X-Frame-Options`. ¿Cuál es el valor correcto que impide que la página sea mostrada en cualquier iframe?"
tipo: "completar"
respuesta: "DENY"
respuestas_validas:
  - "DENY"
  - "deny"
pasos:
  - "Recordar los valores permitidos para X-Frame-Options: SAMEORIGIN y DENY."
  - "Identificar que DENY prohíbe el embebeimiento en cualquier contexto."
  - "Seleccionar el valor estricto."
explicacion: "El valor `DENY` instruye al navegador para que nunca renderice la página dentro de un frame, protegiendo completamente contra clickjacking, a diferencia de `SAMEORIGIN` que solo permite orígenes iguales."
```

### 3 — Identificación de vulnerabilidad en código PHP
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["xss", "php", "codigo-vulnerable"]
enunciado: "Analiza el siguiente fragmento de código PHP: `echo \"<div>\" . $_GET['user'] . \"</div>\";`. ¿Qué vulnerabilidad presenta directamente?"
tipo: "mc"
opciones_explicitas:
  - "SQL Injection"
  - "Cross-Site Scripting (XSS)"
  - "Path Traversal"
  - "Remote Code Execution"
respuesta: "Cross-Site Scripting (XSS)"
pasos:
  - "Observar que la entrada `$_GET['user']` se imprime directamente en el HTML."
  - "Notar que no hay sanitización ni escapado de caracteres HTML."
  - "Concluir que un atacante puede inyectar scripts maliciosos que se ejecutarán en el navegador de la víctima."
explicacion: "La salida directa de datos no sanitizados del usuario en el contexto HTML constituye una vulnerabilidad de Cross-Site Scripting (XSS) reflejada."
```

### 4 — Completar comando para verificar integridad de archivo
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["hash", "integridad", "bash"]
enunciado: "Un administrador necesita verificar que un archivo descargado no ha sido alterado. Utiliza el comando `sha256sum` y lo compara con un hash publicado. Si los hashes coinciden, la propiedad de seguridad garantizada es la:"
tipo: "completar"
respuesta: "integridad"
respuestas_validas:
  - "integridad"
  - "Integridad"
  - "INTEGRIDAD"
pasos:
  - "Entender que los hashes criptográficos detectan cambios mínimos en los datos."
  - "Relacionar la verificación de hash con la propiedad de que los datos no han sido modificados."
  - "Identificar ese concepto como 'integridad'."
explicacion: "La integridad asegura que la información no ha sido alterada de manera no autorizada. Los hashes como SHA-256 son la herramienta estándar para verificar esta propiedad."
```

### 5 — Verdadero/Falso sobre Buffer Overflow
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["buffer-overflow", "memoria", "teoria"]
enunciado: "Un desbordamiento de búfer (Buffer Overflow) ocurre cuando un programa escribe datos más allá del límite del búfer asignado, potencialmente sobrescribiendo memoria adyacente crítica como la dirección de retorno."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Definir Buffer Overflow: escritura de datos excediendo la capacidad del buffer."
  - "Identificar las consecuencias: corrupción de memoria y posible ejecución de código arbitrario."
  - "Confirmar que la descripción técnica es precisa."
explicacion: "El Buffer Overflow es una vulnerabilidad de memoria donde la escritura excede el límite, permitiendo alterar datos críticos como el puntero de instrucción (EIP/RIP), lo que lleva a ejecución remota de código."
```

### 6 — Completar tipo de ataque de red
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["arp-spoofing", "redes", "mitm"]
enunciado: "En un ataque de 'Man-in-the-Middle' (MitM) en una red LAN local, el atacante a menudo utiliza ARP Spoofing para asociar su dirección MAC con la dirección IP del:"
tipo: "completar"
respuesta: "gateway"
respuestas_validas:
  - "gateway"
  - "Gateway"
  - "ROUTER"
  - "router"
  - "puerta de enlace"
pasos:
  - "Entender que ARP Spoofing engaña a los hosts sobre la ubicación del gateway."
  - "Identificar que el objetivo principal es redirigir el tráfico a través del atacante."
  - "Nombrar al dispositivo que conecta la LAN con el exterior."
explicacion: "Al envenenar la caché ARP del host víctima con la MAC del atacante para la IP del gateway, el tráfico fluye primero por el atacante, permitiendo su interceptación o modificación."
```

### 7 — Identificar vulnerabilidad en API REST
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["api", "burl", "json"]
enunciado: "Una API REST permite a un usuario obtener su perfil con `GET /api/profile?user_id=100`. Un atacante prueba `GET /api/profile?user_id=101`, `102`, etc., y accede a datos de otros usuarios sin autenticación adicional. Esto es un ejemplo de:"
tipo: "mc"
opciones_explicitas:
  - "Insecure Direct Object Reference (IDOR)"
  - "Broken Access Control"
  - "Server-Side Request Forgery"
  - "XML External Entity"
respuesta: "Insecure Direct Object Reference (IDOR)"
pasos:
  - "Observar que el identificador del objeto (user_id) es directamente expuesto y predecible."
  - "Notar que la falta de verificación de permisos permite acceder a objetos de otros usuarios."
  - "Clasificar esto como IDOR, una subclase de Broken Access Control."
explicacion: "IDOR ocurre cuando una aplicación expone referencias directas a objetos internos (como IDs de base de datos) sin una verificación adecuada de que el usuario tiene permiso para acceder a ese objeto específico."
```

### 8 — Completar técnica de ofuscación de malware
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["malware", "ofuscacion", "packer"]
enunciado: "Los creadores de malware utilizan herramientas llamadas 'Packer' para comprimir y ofuscar el binario. El objetivo principal es evitar la detección por:"
tipo: "completar"
respuesta: "antivirus"
respuestas_validas:
  - "antivirus"
  - "Antivirus"
  - "AV"
  - "software antivirus"
  - "scanners"
pasos:
  - "Entender que los 'Packer' modifican la firma del ejecutable."
  - "Identificar que las firmas estáticas de los antivirus no coinciden con el código ofuscado."
  - "Concluir que el objetivo es evadir la detección básica."
explicacion: "Los Packers ofuscan el código y comprimen la imagen del ejecutable, cambiando su hash y estructura para que las firmas estáticas de los antivirus tradicionales no lo reconozcan como malicioso."
```

### 9 — Verdadero/Falso sobre Ransomware
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["ransomware", "criptografia", "ataques"]
enunciado: "El ransomware moderno utiliza cifrado asimétrico (público/privado) para asegurar que solo el atacante pueda descifrar los archivos de la víctima, haciendo la recuperación sin backup prácticamente imposible."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Revisar la arquitectura de cifrado del ransomware típico (ej. WannaCry, LockBit)."
  - "Confirmar que se genera una clave simétrica para los archivos y se cifra con una clave pública RSA/ECC."
  - "Validar que sin la clave privada del atacante, el descifrado es computacionalmente inviable."
explicacion: "El uso de criptografía asimétrica protege la clave de descifrado del atacante, evitando que la víctima pueda revertir el cifrado por sí misma, lo cual es la base de la coerción del ransomware."
```

### 10 — Completar comando de análisis de red
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["wireshark", "análisis", "tcp"]
enunciado: "Para analizar el tráfico de red y detectar posibles exfiltraciones de datos, un analista utiliza `tcpdump`. ¿Qué bandera se usa para escribir la captura en un archivo en formato pcap?"
tipo: "completar"
respuesta: "-w"
respuestas_validas:
  - "-w"
  - "-W"
  - "w"
pasos:
  - "Recordar la sintaxis básica de tcpdump: `tcpdump [opciones] [expresión]`."
  - "Identificar la opción para escribir en un archivo de salida."
  - "Seleccionar la bandera `-w` seguida del nombre de archivo."
explicacion: "La bandera `-w` en tcpdump permite guardar el tráfico capturado en un archivo (usualmente .pcap) para su posterior análisis con herramientas como Wireshark."
```

### 11 — Identificar vulnerabilidad de configuración
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["default-credentials", "hardening"]
enunciado: "Un servidor web expuesto en Internet tiene la interfaz de administración accesible públicamente y mantiene las credenciales de fábrica `admin/admin`. ¿Qué categoría de vulnerabilidad OWASP Top 10 representa esto?"
tipo: "mc"
opciones_explicitas:
  - "Broken Access Control"
  - "Cryptographic Failures"
  - "Security Misconfiguration"
  - "Vulnerable and Outdated Components"
respuesta: "Security Misconfiguration"
pasos:
  - "Analizar que el problema no es un fallo de código, sino de configuración."
  - "Identificar que dejar credenciales por defecto es una mala práctica de configuración."
  - "Clasificar esto bajo 'Security Misconfiguration' en OWASP."
explicacion: "La 'Security Misconfiguration' incluye el uso de credenciales por defecto, servicios innecesarios activos y configuraciones de seguridad débiles en servidores y aplicaciones."
```

### 12 — Completar técnica de evasión de WAF
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["waf", "evasion", "encoding"]
enunciado: "Para evadir un Web Application Firewall (WAF) que filtra caracteres especiales como `<` y `>` en ataques XSS, un atacante puede utilizar:"
tipo: "completar"
respuesta: "encoding"
respuestas_validas:
  - "encoding"
  - "Encoding"
  - "codificación"
  - "Codificación"
  - "unicode encoding"
  - "hex encoding"
pasos:
  - "Entender que los WAFs suelen buscar patrones específicos de caracteres."
  - "Identificar que transformar los caracteres a su representación codificada (hex, unicode, base64) puede ocultar el patrón."
  - "Nombrar la técnica general de transformación."
explicacion: "El encoding (codificación) de payloads permite alterar la representación de los caracteres maliciosos sin cambiar su funcionalidad, confundiendo los filtros basados en firma del WAF."
```

### 13 — Verdadero/Falso sobre Phishing
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["phishing", "ingenieria-social", "dominio"]
enunciado: "El 'Typosquatting' es una técnica de phishing donde se registran dominios con errores ortográficos comunes de un sitio legítimo (ej. `g0ogle.com`) para engañar a los usuarios."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Definir Typosquatting: registro de dominios similares visualmente a dominios legítimos."
  - "Confirmar que el objetivo es confundir al usuario y dirigirlo a un sitio falso."
  - "Validar la descripción como correcta."
explicacion: "El Typosquatting explota errores de dedo o confusión visual del usuario para dirigirlo a un dominio controlado por el atacante, facilitando el robo de credenciales o la distribución de malware."
```

### 14 — Completar comando de auditoría de permisos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["linux", "permisos", "suid"]
enunciado: "En sistemas Linux, los archivos con el bit SUID (Set User ID) activo permiten a un usuario ejecutarlos con los privilegios del propietario del archivo (usualmente root). ¿Qué comando se usa comúnmente para encontrar estos archivos?"
tipo: "completar"
respuesta: "find"
respuestas_validas:
  - "find"
  - "Find"
  - "locate"
  - "grep"
pasos:
  - "Identificar que se necesita buscar archivos con un atributo específico."
  - "Recordar que `find` es la herramienta estándar para búsquedas recursivas con filtros."
  - "Saber que la bandera `-perm -4000` busca archivos SUID."
explicacion: "El comando `find / -perm -4000 -type f` es la forma estándar de identificar archivos con el bit SUID establecido, lo cual es crítico para detectar posibles vectores de escalada de privilegios."
```

### 15 — Identificar vulnerabilidad de cadena de suministro
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["supply-chain", "npm", "dependencias"]
enunciado: "El ataque a SolarWinds involucró la inserción de código malicioso en una actualización de software legítima. ¿Cómo se denomina este tipo de ataque?"
tipo: "mc"
opciones_explicitas:
  - "Supply Chain Attack"
  - "Drive-by Download"
  - "Zero-Day Exploit"
  - "Man-in-the-Browser"
respuesta: "Supply Chain Attack"
pasos:
  - "Analizar el vector: compromiso de un proveedor de software para atacar a sus clientes."
  - "Clasificar esto como un ataque a la cadena de suministro."
  - "Diferenciar de ataques directos al endpoint."
explicacion: "Un Supply Chain Attack explota la confianza en la relación entre proveedor y cliente, comprometiendo un eslabón débil (como un repositorio de paquetes o un sistema de build) para distribuir malware a múltiples víctimas."
```

### 16 — Completar concepto de seguridad
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["zero-trust", "modelo"]
enunciado: "El modelo de seguridad que asume que ninguna entidad (usuario, dispositivo, aplicación) es confiable por defecto, ni siquiera si está dentro de la red perimetral, se llama:"
tipo: "completar"
respuesta: "zero trust"
respuestas_validas:
  - "zero trust"
  - "Zero Trust"
  - "confianza cero"
  - "Confianza Cero"
  - "zero-trust"
pasos:
  - "Revisar los modelos de seguridad modernos."
  - "Identificar el modelo que rechaza la confianza implícita basada en la ubicación de red."
  - "Nombrar el modelo 'Zero Trust'."
explicacion: "Zero Trust ('Confianza Cero') elimina el concepto de 'red interna segura' y requiere verificación estricta de identidad y contexto para cada solicitud de acceso, independientemente de su origen."
```

### 17 — Verdadero/Falso sobre CSRF
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["csrf", "solicitud", "autenticacion"]
enunciado: "Un ataque CSRF (Cross-Site Request Forgery) explota la confianza que un sitio web tiene en el navegador del usuario, obligándolo a enviar una solicitud no deseada mientras está autenticado."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Definir CSRF: fuerza al navegador de una víctima autenticada a realizar acciones."
  - "Confirmar que explota la confianza del servidor en la sesión del usuario."
  - "Validar la descripción técnica."
explicacion: "CSRF no roba datos directamente, sino que ejecuta acciones en nombre del usuario (ej. transferir dinero) aprovechando que el navegador envía automáticamente las cookies de sesión."
```

### 18 — Completar técnica de mitigación de CSRF
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["csrf", "mitigacion", "token"]
enunciado: "La mitigación más efectiva contra CSRF es incluir un token único y secreto en cada formulario o solicitud AJAX, conocido como:"
tipo: "completar"
respuesta: "anti-csrf token"
respuestas_validas:
  - "anti-csrf token"
  - "Anti-CSRF Token"
  - "CSRF token"
  - "csrf token"
  - "sincronizer token"
  - "Synchronizer Token"
pasos:
  - "Identificar la técnica estándar para validar la procedencia de la solicitud."
  - "Nombrar el mecanismo que vincula la solicitud con la sesión del usuario."
  - "Escribir el nombre técnico del token."
explicacion: "El 'Synchronizer Token Pattern' (o Anti-CSRF Token) asegura que la solicitud provenga del propio sitio web, ya que el atacante no puede predecir o obtener el token válido de la sesión de la víctima."
```

### 19 — Identificar vulnerabilidad de deserialización
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["deserializacion", "java", "rce"]
enunciado: "Si una aplicación Java deserializa objetos de fuentes no confiables sin validación, puede resultar en una vulnerabilidad que permite:"
tipo: "mc"
opciones_explicitas:
  - "Remote Code Execution (RCE)"
  - "SQL Injection"
  - "Cross-Site Scripting"
  - "Denial of Service local"
respuesta: "Remote Code Execution (RCE)"
pasos:
  - "Analizar el proceso de deserialización: convertir datos binarios/JSON/XML en objetos de memoria."
  - "Identificar que si se deserializan clases maliciosas, se pueden ejecutar métodos peligrosos (gadgets)."
  - "Concluir que esto lleva a RCE."
explicacion: "La deserialización insegura permite a un atacante inyectar objetos serializados maliciosos que, al ser deserializados, ejecutan código arbitrario en el servidor, conocido como Gadget Chain."
```

### 20 — Completar comando de escaneo de puertos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["nmap", "escaneo", "tcp"]
enunciado: "Para realizar un escaneo de puertos TCP rápido pero silencioso (sin hacer ARP request) en una red remota, se usa `nmap` con la bandera:"
tipo: "completar"
respuesta: "-sT"
respuestas_validas:
  - "-sT"
  - "-sT"
  - "sT"
pasos:
  - "Recordar que `-sT` realiza un TCP Connect Scan (completa el handshake)."
  - "Notar que es útil cuando el usuario no tiene permisos de root para raw sockets (`-sS`)."
  - "Seleccionar la bandera correspondiente."
explicacion: "La bandera `-sT` en Nmap realiza un TCP Connect Scan estándar, completando el handshake de tres vías. Es más lento que SYN scan pero no requiere privilegios de root."
```

### 21 — Verdadero/Falso sobre DNS Tunneling
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["dns", "tunneling", "exfiltracion"]
enunciado: "El DNS Tunneling se utiliza para evadir firewalls que bloquean otros protocolos, aprovechando que el tráfico DNS casi siempre está permitido."
tipo: "vf"
respuesta: verdadero
pasos:
  - "Entender que DNS es un protocolo fundamental y casi nunca bloqueado en firewalls corporativos."
  - "Identificar que se pueden encapsular otros datos (HTTP, FTP) dentro de consultas DNS."
  - "Confirmar que esta es una técnica de evasión de contención."
explicacion: "Los atacantes usan DNS Tunneling para exfiltrar datos o establecer canales de comando y control, ya que los firewalls suelen permitir el tráfico DNS por defecto para que Internet funcione."
```

### 22 — Completar concepto de seguridad de contraseñas
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["hashing", "sal", "criptografia"]
enunciado: "Para proteger las contraseñas almacenadas en la base de datos contra ataques de diccionario y rainbow tables, se debe usar un algoritmo de hashing lento acompañado de un:"
tipo: "completar"
respuesta: "salt"
respuestas_validas:
  - "salt"
  - "Salt"
  - "sal"
  - "Sal"
  - "sal aleatoria"
pasos:
  - "Identificar la técnica para añadir entropía única a cada contraseña antes del hash."
  - "Nombrar el valor aleatorio añadido."
  - "Escribir 'salt'."
explicacion: "El 'salt' es un valor aleatorio único que se concatena a la contraseña antes de aplicar el hash, evitando que contraseñas iguales tengan el mismo hash y dificultando los ataques de tabla arcoíris."
```

### 23 — Identificar vulnerabilidad de servidor web
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["path-traversal", "apache", "nginx"]
enunciado: "Una solicitud HTTP `GET /files?path=../../../etc/passwd` intenta acceder a archivos fuera del directorio raíz web. ¿Qué vulnerabilidad se explota?"
tipo: "mc"
opciones_explicitas:
  - "Path Traversal (Directory Traversal)"
  - "Remote File Inclusion"
  - "Local File Inclusion"
  - "Command Injection"
respuesta: "Path Traversal (Directory Traversal)"
pasos:
  - "Analizar la secuencia `../` que sube de nivel en el sistema de archivos."
  - "Identificar el objetivo: acceder a archivos del sistema (`/etc/passwd`)."
  - "Clasificar esto como Path Traversal."
explicacion: "Path Traversal explota la falta de validación de rutas para navegar fuera del directorio permitido, accediendo a archivos sensibles del sistema operativo."
```

### 24 — Completar técnica de seguridad de API
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["rate-limiting", "ddos", "api"]
enunciado: "Para proteger una API pública contra ataques de fuerza bruta y abuso automatizado, se debe implementar:"
tipo: "completar"
respuesta: "rate limiting"
respuestas_validas:
  - "rate limiting"
  - "Rate Limiting"
  - "limitación de tasa"
  - "Rate Limit"
  - "throttling"
pasos:
  - "Identificar la necesidad de restringir el número de solicitudes por unidad de tiempo."
  - "Nombrar el mecanismo de control de tráfico."
  - "Escribir 'rate limiting'."
explicacion: "El 'Rate Limiting' restringe cuántas veces un cliente puede hacer solicitudes a un recurso en un período de tiempo, protegiendo contra fuerza bruta, DoS y abuso de la API."
```

### 25 — Verdadero/Falso sobre Zero-Day
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-vulnerabilidades-comunes"
  nivel: "avanzado"
  tags: ["zero-day", "parche", "vulnerabilidad"]
enunciado: "Una vulnerabilidad 'Zero-Day' es aquella para la cual el fabricante ya ha publicado un parche oficial, pero los usuarios no lo han instalado."
tipo: "vf"
respuesta: falso
pasos:
  - "Definir Zero-Day: vulnerabilidad desconocida para el fabricante o sin parche disponible."
  - "Contrastar con la afirmación que dice que 'ya ha publicado un parche'."
  - "Determinar que la afirmación es falsa porque si hay parche, no es zero-day (es N-day)."
explicacion: "Una vulnerabilidad Zero-Day es 'desconocida' para el desarrollador o no tiene parche disponible. Una vez que el parche se publica y se conoce, deja de ser Zero-Day y se convierte en una vulnerabilidad de día conocido (N-Day)."
```