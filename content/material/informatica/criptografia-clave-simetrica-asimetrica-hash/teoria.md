# Informática — Criptografía clave simétrica asimétrica hash  

> Tema del MAPA: `informatica/criptografia-clave-simetrica-asimetrica-hash`. Dependencias: ver `../dependencias.md`.  

## Tipo de teoría (si esto se carga al sistema)  

**Presentación** — Introducción a los tres tipos fundamentales de criptografía usados para proteger información digital.  

---

## 1. Criptografía simétrica: la clave compartida  

La criptografía simétrica funciona con un único parámetro secreto: una **clave que se usa tanto para cifrar como para descifrar**. Este sistema es rápido y eficiente, ideal para transmitir grandes volúmenes de datos en redes privadas o entre dispositivos confiables. Por ejemplo, los algoritmos AES (Advanced Encryption Standard) o DES (Data Encryption Standard) son comunes en este contexto.  

El principal desafío es **distribuir la clave sin que sea interceptada**. Si un atacante logra acceder a esa clave, puede leer o modificar el mensaje sin dejar rastro. Por eso, se suele combinar con otros métodos (como criptografía asimétrica) para proteger su transmisión.  

![Diagrama mostrando un proceso de cifrado y descifrado con una misma clave](https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Simple_symmetric_encryption-en.svg/960px-Simple_symmetric_encryption-en.svg.png)

*Imagen: «Simple symmetric encryption-en», Michel Bakni, CC BY-SA 4.0. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Simple_symmetric_encryption-en.svg).*

---

## 2. Criptografía asimétrica: claves públicas y privadas  

A diferencia de la simétrica, la **criptografía asimétrica** usa dos claves distintas: una **pública**, que se puede compartir abiertamente, y otra **privada**, que solo el destinatario debe conocer.  

El proceso funciona así:  
- El remitente cifra un mensaje con la **clave pública del receptor**.  
- Solo el receptor podrá descifrarlo usando su **clave privada**, que nadie más posee.  

Este método elimina la necesidad de compartir una clave secreta por canales inseguros, lo que la hace ideal para comunicaciones en internet. Algoritmos como RSA o ECC (Elliptic Curve Cryptography) son ejemplos clave.  

![Esquema de intercambio de claves pública y privada](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Orange_blue_public_key_cryptography_uk.svg/960px-Orange_blue_public_key_cryptography_uk.svg.png)

*Imagen: «Orange blue public key cryptography uk», Orange_blue_public_key_cryptography_en.svg: Banane, CC0. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Orange_blue_public_key_cryptography_uk.svg).*

---

## 3. Funciones hash: huellas digitales para verificar integridad  

Las **funciones hash** no cifran datos, pero transforman cualquier mensaje en una cadena fija de caracteres (llamada *hash* o *resumen*) que actúa como su firma única. Si el mensaje cambia, incluso un solo bit, el hash resultante será completamente distinto.  

Estas funciones son esenciales para:  
- **Verificar integridad**: asegurar que un archivo no haya sido modificado.  
- **Autenticar usuarios**: comparar hashes de contraseñas almacenadas con los ingresados por usuarios.  
- **Firmar digitalmente**: asociar un hash a una clave privada para probar autenticidad.  

Un ejemplo común es SHA-256, usado en blockchain y protocolos seguros. Una característica clave es que **no se puede revertir** el proceso: de un hash no se obtiene el mensaje original.  

![Representación gráfica del proceso de generación de un hash](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cryptographic_Hash_Function.svg/960px-Cryptographic_Hash_Function.svg.png)

*Imagen: «Cryptographic Hash Function», User:Jorge Stolfi based on Image:Hash_function.svg, Public domain. [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cryptographic_Hash_Function.svg).*

---

## 4. Comparativa y uso conjunto  

Cada tipo de criptografía tiene fortalezas específicas. La **simétrica** es más rápida, pero la distribución de claves es riesgosa. La **asimétrica** resuelve ese problema, aunque es más lenta. Las **funciones hash**, por su parte, no protegen confidencialidad, sino integridad y autenticación.  

En la práctica, se combinan:  
- Se usa criptografía asimétrica para intercambiar una clave simétrica (protocolo Diffie-Hellman).  
- Las funciones hash validan que los datos transmitidos no hayan sido alterados durante el proceso.  

---

## N. Conexión con lo que sigue  

Este tema es base para entender protocolos de seguridad como HTTPS (https) o firmas digitales (firmas digitales).