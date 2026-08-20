### 1 — Identificación de Hash SHA-256
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["hashing", "sha256", "integridad"]
enunciado: "Se desea verificar la integridad de un archivo descargado. ¿Cuál es la longitud en bits del valor hash generado por el algoritmo SHA-256?"
tipo: mc
opciones_explicitas:
  - "128 bits"
  - "160 bits"
  - "256 bits"
  - "512 bits"
respuesta: "256 bits"
pasos:
  - "Analizar las propiedades del algoritmo SHA-256."
  - "Recordar que SHA-256 produce una digest de 256 bits (32 bytes)."
  - "Seleccionar la opción que coincide con esa longitud."
explicacion: "SHA-256 (Secure Hash Algorithm 256-bit) produce siempre una salida de 256 bits, independientemente del tamaño del mensaje de entrada. MD5 produce 128 bits y SHA-1 produce 160 bits."
```

### 2 — Estructura de Certificado X.509
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["x509", "pkcs10", "certificados"]
enunciado: "Al generar una solicitud de firma de certificado (CSR) para un servidor web, ¿qué estándar define la estructura de los datos que se envían a la Autoridad de Certificación?"
tipo: mc
opciones_explicitas:
  - "PKCS#1"
  - "PKCS#7"
  - "PKCS#10"
  - "PKCS#12"
respuesta: "PKCS#10"
pasos:
  - "Identificar el propósito: generación de CSR."
  - "Relacionar los estándares PKCS con sus funciones específicas."
  - "PKCS#10 define el formato de la solicitud de certificado."
explicacion: "PKCS#10 es el estándar que define la sintaxis para las solicitudes de firma de certificado. PKCS#1 es para claves RSA, PKCS#7 para mensajes encriptados/firmados, y PKCS#12 para intercambio de información personal."
```

### 3 — Vulnerabilidad Padding Oracle
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["aes", "cbc", "padding-oracle"]
enunciado: "En un ataque de Padding Oracle contra un cifrado AES en modo CBC, el atacante no necesita conocer la clave. ¿Qué información explota el atacante mediante los mensajes de error de descifrado?"
tipo: mc
opciones_explicitas:
  - "El vector de inicialización (IV) original"
  - "La validez del padding del bloque anterior"
  - "La longitud original del mensaje en texto plano"
  - "El algoritmo de hash usado en el HMAC"
respuesta: "La validez del padding del bloque anterior"
pasos:
  - "Comprender el mecanismo de descifrado CBC."
  - "Entender que el servidor valida el padding antes de procesar el contenido."
  - "El atacante modifica el IV para forzar paddings válidos o inválidos y observar la respuesta."
explicacion: "El ataque Padding Oracle explota la diferencia en las respuestas del servidor cuando el padding es válido versus cuando no lo es, permitiendo descifrar bloques anteriores sin la clave."
```

### 4 — Función de Derivación de Clave PBKDF2
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["kdf", "pbkdf2", "salting"]
enunciado: "Al almacenar contraseñas, se utiliza PBKDF2 con una sal (salt) y un contador de iteraciones alto. ¿Cuál es el objetivo principal de aumentar el número de iteraciones?"
tipo: mc
opciones_explicitas:
  - "Aumentar la longitud de la clave resultante"
  - "Mitigar ataques de fuerza bruta mediante costo computacional"
  - "Garantizar que la sal sea única globalmente"
  - "Evitar colisiones en la función hash subyacente"
respuesta: "Mitigar ataques de fuerza bruta mediante costo computacional"
pasos:
  - "Analizar la función PBKDF2 (Password-Based Key Derivation Function 2)."
  - "Entender que las iteraciones ralentizan el cálculo de la clave."
  - "Concluir que esto hace inviable la prueba masiva de contraseñas."
explicacion: "PBKDF2 aplica la función pseudorandoma (como HMAC-SHA256) repetidamente. Más iteraciones aumentan el tiempo necesario para probar cada contraseña candidata, dificultando los ataques de fuerza bruta."
```

### 5 — Firma Digital RSA
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["rsa", "firma-digital", "privado"]
enunciado: "En el esquema de firma digital RSA, ¿quién genera la firma y quién la verifica?"
tipo: mc
opciones_explicitas:
  - "El receptor genera la firma con su clave privada; el emisor verifica con su clave pública."
  - "El emisor genera la firma con su clave privada; el receptor verifica con la clave pública del emisor."
  - "Ambas partes usan su propia clave pública para firmar y verificar."
  - "Una autoridad central genera la firma para ambas partes."
respuesta: "El emisor genera la firma con su clave privada; el receptor verifica con la clave pública del emisor."
pasos:
  - "Recordar el principio de no repudio en criptografía asimétrica."
  - "La firma debe ser generable solo por el poseedor de la clave privada."
  - "La verificación debe ser posible para cualquiera que tenga la clave pública correspondiente."
explicacion: "La firma digital se crea cifrando el hash del mensaje con la clave PRIVADA del remitente. Cualquiera puede verificarlo descifrando con la clave PÚBLICA del remitente y comparando con el hash calculado."
```

### 6 — Protocolo TLS Handshake
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["tls", "handshake", "diffie-hellman"]
enunciado: "Durante el handshake de TLS 1.3, ¿qué mecanismo se utiliza comúnmente para establecer la clave de sesión sin transmitir información secreta por la red?"
tipo: mc
opciones_explicitas:
  - "RSA Key Exchange"
  - "Diffie-Hellman Ephemeral (DHE) o (ECDHE)"
  - "RC4 Stream Cipher"
  - "DES Triple Encryption"
respuesta: "Diffie-Hellman Ephemeral (DHE) o (ECDHE)"
pasos:
  - "Analizar los métodos de intercambio de claves en TLS 1.3."
  - "TLS 1.3 elimina RSA key exchange por falta de forward secrecy."
  - "DHE/ECDHE permite a ambas partes calcular una clave compartida de forma segura."
explicacion: "TLS 1.3 requiere forward secrecy. Diffie-Hellman Ephemeral (DHE) o Elliptic Curve Diffie-Hellman Ephemeral (ECDHE) permiten generar una clave de sesión única que no puede ser descifrada incluso si la clave privada del servidor se compromete después."
```

### 7 — Ataque Birthday Paradox
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["collision", "birthday-attack", "hash"]
enunciado: "Un ataque de colisión de cumpleaños (Birthday Attack) contra una función hash de 128 bits requiere aproximadamente cuántas operaciones para encontrar dos entradas con el mismo hash?"
tipo: mc
opciones_explicitas:
  - "2^128"
  - "2^64"
  - "2^32"
  - "128^2"
respuesta: "2^64"
pasos:
  - "Aplicar la aproximación de la paradoja del cumpleaños."
  - "La seguridad contra colisiones es aproximadamente la raíz cuadrada de la salida."
  - "Raíz cuadrada de 2^128 es 2^(128/2) = 2^64."
explicacion: "Por la paradoja del cumpleaños, se necesitan aproximadamente 1.17 * sqrt(N) intentos para encontrar una colisión en un espacio de tamaño N. Para SHA-128 (hipotético), esto es 2^64. Por eso se usan hashes de 256 bits o más para seguridad contra colisiones."
```

### 8 — Estándar de Cifrado Simétrico AES
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["aes", "rijndael", "estandar"]
enunciado: "¿Cuál es la longitud de bloque fija y las longitudes de clave soportadas por el estándar AES (Advanced Encryption Standard)?"
tipo: mc
opciones_explicitas:
  - "Bloque 64 bits; Claves 128, 192, 256 bits"
  - "Bloque 128 bits; Claves 128, 192, 256 bits"
  - "Bloque 128 bits; Claves 64, 128, 256 bits"
  - "Bloque 256 bits; Claves 128, 192, 256 bits"
respuesta: "Bloque 128 bits; Claves 128, 192, 256 bits"
pasos:
  - "Identificar AES como el sucesor de DES."
  - "Recordar que AES fija el bloque en 128 bits (a diferencia de DES que usa 64)."
  - "Listar las variantes AES-128, AES-192, AES-256."
explicacion: "AES utiliza un bloque de 128 bits fijo. Las longitudes de clave pueden ser de 128, 192 o 256 bits, determinando el número de rondas de cifrado (10, 12 o 14 respectivamente)."
```

### 9 — Prueba de Trabajo en Blockchain
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["blockchain", "pow", "nonce"]
enunciado: "En el protocolo Bitcoin (Proof of Work), los mineros modifican qué campo del bloque de cabecera para encontrar un hash que cumpla con la dificultad actual?"
tipo: mc
opciones_explicitas:
  - "El timestamp"
  - "El nonce"
  - "El hash del bloque anterior"
  - "La lista de transacciones"
respuesta: "El nonce"
pasos:
  - "Analizar la estructura de la cabecera del bloque Bitcoin."
  - "Identificar qué campo es variable y controlado por el minero."
  - "El nonce se incrementa para generar hashes diferentes hasta encontrar uno válido."
explicacion: "El nonce (number used once) es un campo de 32 bits en la cabecera del bloque que los mineros iteran para encontrar un hash que tenga suficientes ceros al inicio, cumpliendo la dificultad de la red."
```

### 10 — Cifrado Homomórfico
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["homomorphic", "privacidad", "computacion-segura"]
enunciado: "¿Qué propiedad distingue al cifrado homomórfico de los esquemas de cifrado tradicionales?"
tipo: mc
opciones_explicitas:
  - "Permite realizar cálculos sobre datos cifrados que producen un resultado que, al descifrarlo, coincide con el resultado de realizar los cálculos sobre los datos en claro."
  - "No requiere clave pública para el cifrado."
  - "Es inherentemente irreversible."
  - "Utiliza solo operaciones de XOR."
respuesta: "Permite realizar cálculos sobre datos cifrados que producen un resultado que, al descifrarlo, coincide con el resultado de realizar los cálculos sobre los datos en claro."
pasos:
  - "Definir cifrado homomórfico."
  - "Comparar con cifrado tradicional (donde se debe descifrar primero)."
  - "Identificar la capacidad de computación sobre el texto cifrado."
explicacion: "El cifrado homomórfico permite evaluar funciones matemáticas sobre los datos mientras permanecen cifrados. E(f(x)) = f(E(x)). Esto es crucial para la privacidad en la nube."
```

### 11 — Algoritmo de Intercambio de Claves Diffie-Hellman
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["diffie-hellman", "logaritmo-discreto"]
enunciado: "La seguridad del algoritmo Diffie-Hellman se basa en la dificultad computacional de resolver qué problema matemático?"
tipo: mc
opciones_explicitas:
  - "La factorización de números enteros grandes"
  - "El problema del logaritmo discreto"
  - "El problema del knapsack"
  - "La factorización de polinomios"
respuesta: "El problema del logaritmo discreto"
pasos:
  - "Identificar la base matemática de DH."
  - "DH calcula g^ab y g^ba sin compartir 'a' o 'b'."
  - "Recuperar 'a' o 'b' dado g, g^a, g^b requiere resolver el logaritmo discreto."
explicacion: "DH se basa en la dificultad de calcular el logaritmo discreto en un grupo cíclico finito. Aunque es seguro, no autentica a las partes, por lo que es vulnerable a ataques Man-in-the-Middle sin autenticación adicional."
```

### 12 — Ataque Man-in-the-Middle (MitM)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["mitm", "pkcs7", "sustitucion"]
enunciado: "En un ataque MitM contra una comunicación HTTPS si el atacante intercepta el certificado del servidor y lo sustituye por uno falso firmado por su propia CA, ¿qué debe haber sucedido previamente para que el cliente acepte esa CA?"
tipo: mc
opciones_explicitas:
  - "El atacante ha robado la clave privada del cliente"
  - "La CA del atacante ha sido añadida a las CA de confianza del sistema operativo o navegador del cliente"
  - "El certificado original ha expirado"
  - "El cliente no verifica la revocación de certificados"
respuesta: "La CA del atacante ha sido añadida a las CA de confianza del sistema operativo o navegador del cliente"
pasos:
  - "Analizar la cadena de confianza en PKI."
  - "Para que un certificado falso sea aceptado, su CA emisora debe ser de confianza."
  - "Esto puede ocurrir por malware o configuración errónea."
explicacion: "La confianza en TLS se basa en una lista de Autoridades de Certificación (CA) raíz de confianza. Si una CA maliciosa está en esa lista, el navegador aceptará cualquier certificado firmado por ella como válido."
```

### 13 — Cifrado de Flujo vs Bloque
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["stream-cipher", "block-cipher", "chacha20"]
enunciado: "¿Cuál es una ventaja clave de los cifrados de flujo (stream ciphers) como ChaCha20 sobre los cifrados de bloque (block ciphers) como AES enCBC en aplicaciones de streaming de baja latencia?"
tipo: mc
opciones_explicitas:
  - "Mayor longitud de clave"
  - "Paralelización inherente del cifrado"
  - "No requieren IV (Vector de Inicialización)"
  - "Menor complejidad de implementación de padding"
respuesta: "Paralelización inherente del cifrado"
pasos:
  - "Comparar la naturaleza de stream vs block."
  - "Los cifrados de bloque en CBC requieren el bloque anterior para cifrar el siguiente (secuencial)."
  - "Los stream ciphers generan una secuencia de clave (keystream) que se XOR con el mensaje, permitiendo procesamiento paralelo y sin padding."
explicacion: "ChaCha20 es un cifrado de flujo que genera una secuencia pseudoaleatoria. No tiene la dependencia secuencial de CBC y no requiere padding, lo que reduce la latencia y la complejidad en streaming."
```

### 14 — Estándar de Intercambio PKCS#12
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["pkcs12", "pfx", "keystore"]
enunciado: "El formato de archivo .pfx o .p12 (PKCS#12) se utiliza principalmente para:"
tipo: mc
opciones_explicitas:
  - "Almacenar certificados públicos en servidores web"
  - "Intercambiar información personal, incluyendo claves privadas y certificados, protegida por contraseña"
  - "Firmar documentos PDF de forma legal"
  - "Generar hashes de contraseñas de base de datos"
respuesta: "Intercambiar información personal, incluyendo claves privadas y certificados, protegida por contraseña"
pasos:
  - "Identificar la extensión .pfx/.p12."
  - "Recordar que PKCS#12 define un formato binario para contener claves criptográficas y certificados."
  - "Se usa comúnmente para exportar/importar certificados en Windows y Java KeyStores."
explicacion: "PKCS#12 es un formato estándar para almacenar certificados de servidor, certificados intermedios y claves privadas en un solo archivo encriptado, protegido por una contraseña de usuario."
```

### 15 — Ataque de Fuerza Bruta vs Diccionario
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["ataques", "diccionario", "reglas"]
enunciado: "En el contexto de cracking de contraseñas, ¿qué distingue a un ataque de diccionario con 'reglas' (rules) de un ataque de diccionario simple?"
tipo: mc
opciones_explicitas:
  - "El ataque de diccionario simple usa hashes MD5, el de reglas usa SHA256"
  - "El ataque con reglas aplica transformaciones (mayúsculas, leetspeak, concatenación) a las palabras del diccionario"
  - "El ataque de reglas es más lento que la fuerza bruta"
  - "El ataque de reglas no requiere acceso al hash"
respuesta: "El ataque con reglas aplica transformaciones (mayúsculas, leetspeak, concatenación) a las palabras del diccionario"
pasos:
  - "Definir ataque de diccionario."
  - "Explicar que las reglas (como en John the Ripper o Hashcat) mutan las palabras base."
  - "Ejemplos: 'password' -> 'Password', 'password1', 'p@ssw0rd'."
explicacion: "Las reglas permiten generar variantes de las palabras del diccionario para cubrir patrones comunes que los usuarios usan al crear contraseñas, aumentando la tasa de éxito sin probar todas las combinaciones posibles."
```

### 16 — Zero-Knowledge Proof (ZKP)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["zkp", "zero-knowledge", "privacidad"]
enunciado: "En un protocolo de prueba de conocimiento cero (Zero-Knowledge Proof), ¿qué garantiza el verificador al finalizar el protocolo?"
tipo: mc
opciones_explicitas:
  - "Que conoce la clave secreta del probador"
  - "Que el probador conoce la información secreta sin revelar ningún dato sobre ella"
  - "Que la información secreta es pública"
  - "Que el canal de comunicación es seguro"
respuesta: "Que el probador conoce la información secreta sin revelar ningún dato sobre ella"
pasos:
  - "Definir ZKP."
  - "Identificar los tres pilares: completitud, validez y cero conocimiento."
  - "El objetivo es verificar la afirmación sin filtrar información."
explicacion: "Un ZKP permite a una parte (probador) demostrar a otra (verificador) que una declaración es verdadera, sin revelar ninguna información adicional más allá de la veracidad de la declaración."
```

### 17 — Cifrado de Extremo a Extremo (E2EE)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["e2ee", "whatsapp", "signal"]
enunciado: "En un sistema de mensajería con cifrado de extremo a extremo (E2EE) como Signal, ¿quién puede leer los mensajes en texto claro?"
tipo: mc
opciones_explicitas:
  - "El emisor, el receptor y el proveedor del servicio"
  - "Solo el emisor y el receptor"
  - "Solo el receptor, si tiene la clave pública del emisor"
  - "Cualquier administrador del servidor si se solicita"
respuesta: "Solo el emisor y el receptor"
pasos:
  - "Definir E2EE."
  - "Analizar la arquitectura de Signal."
  - "Las claves de sesión se generan y almacenan solo en los dispositivos de los usuarios."
explicacion: "En E2EE, los datos se cifran en el dispositivo del emisor y solo se descifran en el dispositivo del receptor. El proveedor del servicio solo maneja texto cifrado y no puede acceder al contenido."
```

### 18 — Algoritmo de Hash SHA-3
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["sha3", "keccak", "sponge"]
enunciado: "¿Qué estructura interna utiliza el algoritmo SHA-3 (estándar FIPS 202) que lo diferencia fundamentalmente de SHA-2?"
tipo: mc
opciones_explicitas:
  - "La estructura de Merkle-Damgård"
  - "La función de compresión basada en cifrado simétrico"
  - "La esponja (sponge construction)"
  - "El árbol de hash (hash tree)"
respuesta: "La esponja (sponge construction)"
pasos:
  - "Comparar SHA-2 y SHA-3."
  - "SHA-2 usa Merkle-Damgård."
  - "SHA-3 ganó el concurso NIST y usa la construcción Sponge (Keccak)."
explicacion: "SHA-3 se basa en la construcción Sponge, que absorbe la entrada y luego exprime la salida. Esto lo hace estructuralmente diferente de SHA-2 (Merkle-Damgård) y más resistente a ciertas clases de ataques de extensión de longitud."
```

### 19 — Revocación de Certificados CRL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["crl", "ocsp", "revocacion"]
enunciado: "¿Cuál es la principal desventaja de usar Listas de Revocación de Certificados (CRL) en comparación con el protocolo OCSP (Online Certificate Status Protocol)?"
tipo: mc
opciones_explicitas:
  - "CRL requiere más ancho de banda porque descarga toda la lista"
  - "OCSP no puede verificar la revocación en tiempo real"
  - "CRL es más seguro que OCSP"
  - "OCSP no soporta certificados X.509"
respuesta: "CRL requiere más ancho de banda porque descarga toda la lista"
pasos:
  - "Analizar el funcionamiento de CRL."
  - "CRL es una lista completa de certificados revocados firmada por la CA."
  - "Esta lista puede ser enorme y debe descargarse periódicamente."
explicacion: "Las CRLs pueden volverse muy grandes, causando latencia y uso de ancho de banda. OCSP consulta el estado de un certificado específico en tiempo real, siendo más eficiente en ancho de banda pero introduciendo problemas de privacidad y disponibilidad."
```

### 20 — Cifrado de Disco Completo (FDE)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["fde", "luks", "bitlocker"]
enunciado: "En el cifrado de disco completo (Full Disk Encryption) como LUKS o BitLocker, ¿qué componente es crítico para proteger la clave de cifrado del disco si el equipo es robado?"
tipo: mc
opciones_explicitas:
  - "El algoritmo de hash SHA-1"
  - "La contraseña del usuario o la clave de recuperación almacenada de forma segura (TPM)"
  - "La dirección MAC de la tarjeta de red"
  - "El sistema de archivos usado (NTFS o ext4)"
respuesta: "La contraseña del usuario o la clave de recuperación almacenada de forma segura (TPM)"
pasos:
  - "Identificar cómo se protege la clave maestra del disco."
  - "La clave del disco se encripta con una clave derivada de la contraseña del usuario."
  - "El TPM (Trusted Platform Module) puede almacenar esta clave de forma segura contra extracción física."
explicacion: "Sin la contraseña o la clave almacenada en el TPM, la clave maestra del disco permanece cifrada y los datos son inaccesibles, protegiendo la confidencialidad contra el acceso físico no autorizado."
```

### 21 — Ataque de Canal Lateral (Timing Attack)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["timing-attack", "side-channel", "comparacion"]
enunciado: "Un Timing Attack explota diferencias en el tiempo de respuesta del sistema. ¿Qué práctica de programación evita este ataque al comparar strings sensibles como hashes de contraseñas?"
tipo: mc
opciones_explicitas:
  - "Usar `strcmp()` estándar"
  - "Usar funciones de comparación de tiempo constante (constant-time comparison)"
  - "Comparar solo los primeros 8 caracteres"
  - "Encriptar la contraseña antes de comparar"
respuesta: "Usar funciones de comparación de tiempo constante (constant-time comparison)"
pasos:
  - "Entender que `strcmp()` devuelve el resultado tan pronto como encuentra una diferencia."
  - "Esto revela información sobre la posición de los caracteres correctos."
  - "Las funciones constant-time iteran sobre toda la cadena sin importar si hay diferencia."
explicacion: "Las funciones de comparación de tiempo constante (`crypto_verify_16`, `memcmp` seguro, etc.) tardan el mismo tiempo independientemente de dónde ocurra la primera diferencia, eliminando la fuga de información temporal."
```

### 22 — Algoritmo de Firma EdDSA
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["eddsa", "ed25519", "curvas-elipticas"]
enunciado: "¿Por qué se prefiere el algoritmo de firma EdDSA (específicamente Ed25519) sobre RSA en muchas aplicaciones modernas de alta seguridad?"
tipo: mc
opciones_explicitas:
  - "Porque RSA es más rápido en hardware antiguo"
  - "Porque ofrece mayor seguridad por bit de clave y es más eficiente computacionalmente"
  - "Porque no requiere claves privadas"
  - "Porque es un algoritmo de cifrado simétrico"
respuesta: "Porque ofrece mayor seguridad por bit de clave y es más eficiente computacionalmente"
pasos:
  - "Comparar Ed25519 con RSA."
  - "Ed25519 usa curvas elípticas (ECC) con parámetros fijos."
  - "Permite firmas rápidas y verificación rápida con claves públicas pequeñas (256 bits)."
explicacion: "EdDSA (Edwards-curve Digital Signature Algorithm) es más rápido y seguro que RSA de longitud de clave equivalente. Es ampliamente usado en SSH, TLS y criptomonedas por su eficiencia y resistencia a implementaciones defectuosas."
```

### 23 — Cifrado Homomórfico Parcial vs Total
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["homomorphic", "paillier", "rsa"]
enunciado: "El cifrado de Paillier es un ejemplo de cifrado homomórfico parcial. ¿Qué operación permite realizar sobre los textos cifrados sin descifrar?"
tipo: mc
opciones_explicitas:
  - "Multiplicación de dos textos cifrados para obtener el producto de los textos planos"
  - "Suma de dos textos cifrados para obtener el cifrado de la suma de los textos planos"
  - "Cualquier operación aritmética"
  - "Comparación de magnitud"
respuesta: "Suma de dos textos cifrados para obtener el cifrado de la suma de los textos planos"
pasos:
  - "Identificar las propiedades de Paillier."
  - "Paillier es aditivamente homomórfico."
  - "E(m1) * E(m2) mod n^2 = E(m1 + m2)."
explicacion: "Paillier permite sumar valores cifrados. Si se multiplica el resultado, se suma el mismo valor varias veces. No permite multiplicación arbitraria de dos mensajes diferentes (eso requeriría homomorfismo total)."
```

### 24 — Ataque de Replay en Protocolos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["replay-attack", "nonce", "timestamp"]
enunciado: "¿Cuál es el mecanismo criptográfico estándar para prevenir un ataque de Replay (reenvío de mensajes válidos) en un protocolo de autenticación?"
tipo: mc
opciones_explicitas:
  - "Usar un hash de la contraseña"
  - "Incluir un Nonce o Timestamp único y válido en cada mensaje"
  - "Comprimir el mensaje antes de enviarlo"
  - "Usar cifrado simétrico en lugar de asimétrico"
respuesta: "Incluir un Nonce o Timestamp único y válido en cada mensaje"
pasos:
  - "Definir ataque de Replay."
  - "El atacante reenvía un mensaje auténtico válido."
  - "Para evitarlo, el receptor debe verificar que el mensaje no sea viejo (Timestamp) o ya usado (Nonce)."
explicacion: "Los Nonces (números usados una vez) o Timestamps con ventana de tiempo permiten al receptor descartar mensajes duplicados o expirados, asegurando la frescura de la comunicación."
```

### 25 — Cifrado de Cifrado en Capa (SSL/TLS)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "ciberseguridad-criptografia-basica"
  nivel: "avanzado"
  tags: ["tls", "ssl", "proteccion-de-datos"]
enunciado: "En la capa de transporte (TLS), ¿qué garantiza el uso de un MAC (Message Authentication Code) o AEAD (Authenticated Encryption with Associated Data) en cada registro?"
tipo: mc
opciones_explicitas:
  - "Que el mensaje no sea leído por terceros"
  - "Que el mensaje no haya sido alterado y provenga de la fuente esperada"
  - "Que el mensaje se envíe más rápido"
  - "Que el certificado del servidor sea válido"
respuesta: "Que el mensaje no haya sido alterado y provenga de la fuente esperada"
pasos:
  - "Diferenciar confidencialidad (cifrado) de integridad (MAC/AEAD)."
  - "El cifrado protege la privacidad."
  - "El MAC o la parte de autenticación de AEAD protege la integridad y autenticidad."
explicacion: "El MAC (o la autenticación en AEAD como en ChaCha20-Poly1305) asegura que el mensaje recibido es idéntico al enviado y que proviene de la entidad que comparte la clave, previniendo manipulaciones en tránsito."
```