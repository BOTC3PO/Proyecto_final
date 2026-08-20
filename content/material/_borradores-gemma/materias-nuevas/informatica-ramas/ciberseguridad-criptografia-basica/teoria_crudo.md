# Criptografía Básica: Fundamentos para la Seguridad Informática

En el ecosistema de la ciberseguridad, la criptografía no es un "extra" sino la columna vertebral de la confianza digital. Más allá de la simple ofuscación de datos, su propósito fundamental es garantizar los pilares CIA (Confidencialidad, Integridad y Disponibilidad) mediante algoritmos matemáticos robustos. Para un profesional avanzado, comprender cómo se implementan estos principios es crucial para diseñar sistemas seguros y auditar vulnerabilidades.

## Conceptos Centrales y Sintaxis Práctica

La criptografía moderna se divide principalmente en dos enfoques: simétrica y asimétrica.

### 1. Criptografía Simétrica
Utiliza la misma clave para cifrar y descifrar. Es eficiente para grandes volúmenes de datos. El estándar actual es **AES** (Advanced Encryption Standard).

En entornos de línea de comandos (Linux/Unix), podemos observar su operación básica con `openssl`. Es vital notar que la seguridad no reside en el algoritmo, sino en la entropía de la clave.

```bash
# Cifrar un archivo con AES-256 en modo CBC
# -k: contraseña derivada a clave (no recomendado para producción sin salt)
# -salt: añade aleatoriedad para prevenir ataques de diccionario
openssl enc -aes-256-cbc -salt -in archivo_origen.txt -out archivo_cifrado.bin -k "mi_clave_secreta"

# Descifrar
openssl enc -aes-256-cbc -d -salt -in archivo_cifrado.bin -out archivo_descifrado.txt -k "mi_clave_secreta"
```

### 2. Criptografía Asimétrica (de Clave Pública)
Utiliza un par de claves: una pública para cifrar y una privada para descifrar. Resuelve el problema de la distribución de claves. El algoritmo más común es **RSA** o **ECDSA**.

```bash
# Generar un par de claves RSA de 4096 bits
openssl genpkey -algorithm RSA -out clave_privada.pem -pkeyopt rsa_keygen_bits:4096

# Extraer la clave pública
openssl pkey -in clave_privada.pem -pubout -out clave_publica.pem

# Cifrar un mensaje usando la clave pública (ejemplo conceptual con CMS o S/MIME)
# Nota: openssl enc no soporta cifrado directo con clave pública fácilmente;
# se suele usar para firmar o intercambiar claves simétricas.
openssl smime -encrypt -in mensaje.txt -out mensaje.cifrado.pem -aes256 certificado_destinatario.crt
```

### 3. Funciones Hash y Firmas Digitales
Los hashes no son cifrados; son unidireccionales. Sirven para verificar integridad.

```bash
# Generar hash SHA-256
openssl dgst -sha256 archivo.txt

# Verificar firma digital
openssl dgst -sha256 -verify clave_publica.pem -signature firma.sig archivo.txt
```

## Errores Comunes en la Implementación

1.  **Uso de algoritmos obsoletos:** Emplear MD5 o SHA1 para integridad o firmas. Estos algoritmos son vulnerables a colisiones. Siempre usar SHA-256 o superior.
2.  **Gestión de claves insegura:** Hardcodear claves en el código fuente o usar contraseñas con baja entropía. Las claves deben generarse criptográficamente seguras y almacenarse en *Key Vaults* o *HSMs*.
3.  **Modos de operación incorrectos en AES:** Usar modo ECB (Electronic Codebook) es crítico, ya que revela patrones en los datos plaintext. Siempre usar CBC, CTR o GCM.
4.  **Confundir cifrado con hashing:** Intentar "descifrar" un hash es imposible por definición. El hashing se usa para verificar datos; el cifrado para proteger su confidencialidad.

## Cuándo Usar y Cuándo No Usar

*   **Usar criptografía simétrica** cuando se necesita cifrar grandes cantidades de datos (archivos, bases de datos) debido a su alto rendimiento.
*   **Usar criptografía asimétrica** exclusivamente para el intercambio seguro de claves simétricas o para firmas digitales, ya que es computacionalmente costosa.
*   **No usar criptografía casera:** Nunca inventes tu propio algoritmo o modifiques uno estándar. La criptografía es un campo donde la seguridad por oscuridad es un mito. Siempre usa bibliotecas validadas (OpenSSL, libsodium, Bouncy Castle).

## Ejemplo Extendido: Flujo Seguro de Transferencia de Datos

Imagina un escenario donde un cliente envía un reporte financiero confidencial a un servidor.

1.  **Generación de clave efímera:** El cliente genera una clave simétrica aleatoria (AES-GCM) en memoria.
2.  **Cifrado de datos:** El reporte se cifra con esa clave efímera.
3.  **Cifrado de la clave (Envelope Encryption):** El cliente obtiene la clave pública del servidor y cifra *solo la clave AES* con ella.
4.  **Transmisión:** Se envía el paquete [Datos Cifrados + Clave AES Cifrada].
5.  **Descifrado:** El servidor usa su clave privada para recuperar la clave AES y luego descifra los datos.

Este enfoque combina lo mejor de ambos mundos: la velocidad de la simetría para los datos y la seguridad de la asimetría para la gestión de claves, mitigando riesgos de interceptación y fuerza bruta.