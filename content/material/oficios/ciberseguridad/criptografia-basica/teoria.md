# Ciberseguridad — Criptografía básica (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../vulnerabilidades-comunes/`, `../../informatica/criptografia-clave-simetrica-asimetrica-hash/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciberseguridad/criptografia-basica/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Para qué sirve

La **criptografía** protege la **información** para que:

- **Solo quien debe** pueda leerla (**confidencialidad**).
- **No se altere** sin que se note (**integridad**).
- **Se sepa quién** la envió (**autenticidad**) y **no pueda negarlo** (**no repudio**).

**Cifrar** convierte un **texto claro** en un **texto cifrado** con un **algoritmo** y una **clave**; **descifrar** hace lo inverso. **La seguridad debe estar en la clave**, no en que el algoritmo sea secreto (**principio de Kerckhoffs**): se usan **algoritmos públicos y muy estudiados**.

> **Regla de oro:** **no inventes tu propia criptografía.** Se usan **bibliotecas** y **protocolos** probados.

---

## 2. Cifrado simétrico

Se usa **la misma clave** para cifrar y descifrar.

- **Rápido** y adecuado para **grandes cantidades** de datos.
- **Problema:** ¿cómo **compartir** la clave de forma segura?
- Algoritmo actual: **AES** (con claves de **128 o 256 bits**) en un **modo seguro** (como **GCM**, que además da **integridad**).
- **Inseguros u obsoletos:** **DES**, **RC4**, **ECB** (modo que **deja patrones**).

Clásicos históricos (**César**: desplazar letras; **Vigenère**) sirven para **aprender**, **no** para proteger: se **rompen** con **análisis de frecuencias**.

---

## 3. Cifrado asimétrico

Cada persona tiene **un par de claves**: una **pública** (se comparte) y una **privada** (se guarda en secreto).

- Lo **cifrado con la pública** solo se **descifra con la privada** → **enviar un mensaje confidencial**.
- Lo **firmado con la privada** se **verifica con la pública** → **firma digital**.
- **Más lento**, así que se usa para **intercambiar una clave simétrica** y **firmar**.
- Algoritmos: **RSA** (claves de **2048 bits o más**), **curvas elípticas** (ECDSA, Ed25519, X25519).

**HTTPS** combina ambos: **asimétrica** para **acordar una clave** y **autenticar al servidor**, **simétrica** para **cifrar** la conversación.

---

## 4. Hash (resumen criptográfico)

Una **función hash** convierte **cualquier dato** en un **resumen de tamaño fijo** (**huella**).

- **Determinista:** mismo dato, mismo hash.
- **Unidireccional:** **no se puede recuperar** el dato original.
- **Efecto avalancha:** un **cambio mínimo** produce un hash **totalmente distinto**.
- **Resistente a colisiones:** es **inviable** encontrar **dos datos** con el mismo hash.
- Usos: **verificar la integridad** de un archivo (descarga), **guardar contraseñas** (con **sal** y algoritmos **lentos**), **firmas digitales**, **identificar** datos.
- **Actuales:** **SHA-256**, **SHA-3**. **Rotos o débiles:** **MD5** y **SHA-1** (se encuentran colisiones).
- **El hash no es cifrado:** no se "descifra".

```
sha256sum archivo.iso      # calcular el hash de un archivo
```

---

## 5. Firmas y certificados

- **Firma digital:** el hash del mensaje **cifrado con la clave privada**. Prueba **integridad** y **autoría**.
- **Certificado digital:** vincula una **clave pública** con una **identidad** (un sitio web), **firmado** por una **autoridad de certificación** (AC) de confianza.
- El **candado** del navegador indica **conexión cifrada** y que el certificado es **válido** para ese dominio; **no garantiza** que el sitio sea **honesto** (un sitio de phishing también puede tener HTTPS).
- **Cadena de confianza:** certificado del sitio → AC intermedia → AC raíz (instalada en el sistema).

---

## 6. Gestión de claves

**La criptografía es tan fuerte como el manejo de las claves.**

- **Generar** claves con **fuentes aleatorias seguras**.
- **Proteger** la clave privada (**nunca** compartirla ni subirla a un repositorio).
- **Rotar** claves periódicamente y **revocar** las comprometidas.
- **Guardar** en un **gestor de secretos** o **módulo de hardware**.
- **Respaldar** las claves (si se pierde la clave de un archivo cifrado, **no hay forma de recuperarlo**).
- **Contraseñas como claves:** pasar por una **función de derivación** (**Argon2**, **PBKDF2**, **scrypt**).

---

## 7. Dónde se usa

- **HTTPS/TLS:** la web.
- **Mensajería** con **cifrado de extremo a extremo** (solo los participantes pueden leer).
- **Cifrado de disco** (BitLocker, LUKS, FileVault) y **de archivos**.
- **VPN**, **SSH**, **Wi-Fi (WPA2/WPA3)**.
- **Firma de software** y **actualizaciones**.
- **Billeteras** y **criptomonedas**.
- **Correo** (PGP, S/MIME).

---

## 8. Errores comunes

- **Inventar** un algoritmo propio.
- **Usar** algoritmos **obsoletos** (MD5, SHA-1, DES, RC4).
- **Guardar contraseñas** con **hash rápido** o **sin sal**.
- **Claves en el código.**
- **Reutilizar** claves o **números de un solo uso** (nonce/IV).
- **Confundir** **codificar** (Base64: **no** protege) con **cifrar**.
- **Creer** que **HTTPS** garantiza que el **sitio es confiable**.
- **No verificar** certificados.
