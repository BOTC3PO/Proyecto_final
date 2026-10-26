# Ciberseguridad — Criptografía básica (cuestionario, 27 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Cifrar

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Convertir un texto claro en un texto cifrado con un algoritmo y una clave", "Borrar un texto", "Comprimir", "Copiar"]
respuesta: "Convertir un texto claro en un texto cifrado con un algoritmo y una clave"

enunciado: "¿Qué es cifrar?"

explicacion: |
  Descifrar hace lo inverso.
```

### 2 — Kerckhoffs

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["kerckhoffs"]

tipo: mc
opciones_explicitas: ["En la clave, no en que el algoritmo sea secreto", "En el algoritmo secreto", "En el nombre", "En el color"]
respuesta: "En la clave, no en que el algoritmo sea secreto"

enunciado: "¿Dónde debe estar la seguridad de un sistema criptográfico?"

explicacion: |
  Se usan algoritmos públicos y estudiados.
```

### 3 — No inventar

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["regla"]

tipo: mc
opciones_explicitas: ["Inventar un algoritmo propio", "Usar bibliotecas probadas", "Usar AES", "Usar HTTPS"]
respuesta: "Inventar un algoritmo propio"

enunciado: "¿Qué no se debe hacer en criptografía?"

explicacion: |
  Los algoritmos propios suelen romperse.
```

### 4 — Simétrico

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["simetrico"]

tipo: mc
opciones_explicitas: ["Usa la misma clave para cifrar y descifrar", "Usa dos claves", "No usa clave", "Es siempre lento"]
respuesta: "Usa la misma clave para cifrar y descifrar"

enunciado: "¿Qué caracteriza al cifrado simétrico?"

explicacion: |
  Es rápido.
```

### 5 — Problema

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["simetrico"]

tipo: mc
opciones_explicitas: ["Compartir la clave de forma segura", "Es muy lento", "No cifra bien", "No existe"]
respuesta: "Compartir la clave de forma segura"

enunciado: "¿Cuál es el problema principal del cifrado simétrico?"

explicacion: |
  La solución es usar cifrado asimétrico para intercambiarla.
```

### 6 — AES

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["aes"]

tipo: mc
opciones_explicitas: ["Un algoritmo de cifrado simétrico actual", "Un hash roto", "Un virus", "Un protocolo de red"]
respuesta: "Un algoritmo de cifrado simétrico actual"

enunciado: "¿Qué es AES?"

explicacion: |
  Con claves de 128 o 256 bits.
```

### 7 — Obsoletos

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["obsoletos"]

tipo: mc
opciones_explicitas: ["DES", "AES", "SHA-256", "Ed25519"]
respuesta: "DES"

enunciado: "¿Cuál es un algoritmo obsoleto?"

explicacion: |
  También RC4, MD5 y SHA-1.
```

### 8 — ECB

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "avanzado"
  tags: ["ecb"]

tipo: mc
opciones_explicitas: ["Porque deja patrones visibles en los datos cifrados", "Porque es lento", "Porque es largo", "Por moda"]
respuesta: "Porque deja patrones visibles en los datos cifrados"

enunciado: "¿Por qué se evita el modo ECB?"

explicacion: |
  Se usan modos como GCM.
```

### 9 — César

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["cesar"]

tipo: mc
opciones_explicitas: ["Porque se rompe fácilmente, por ejemplo, con análisis de frecuencias", "Porque es muy largo", "Porque es nuevo", "Porque usa claves largas"]
respuesta: "Porque se rompe fácilmente, por ejemplo, con análisis de frecuencias"

enunciado: "¿Por qué el cifrado César no protege?"

explicacion: |
  Sirve para aprender.
```

### 10 — Asimétrico

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["asimetrico"]

tipo: mc
opciones_explicitas: ["Un par: una pública y una privada", "Una", "Tres", "Ninguna"]
respuesta: "Un par: una pública y una privada"

enunciado: "¿Cuántas claves tiene cada persona en el cifrado asimétrico?"

explicacion: |
  La pública se comparte.
```

### 11 — Enviar

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["asimetrico"]

tipo: mc
opciones_explicitas: ["Con la clave pública de Ana", "Con la clave privada de Ana", "Con tu clave privada", "Con ninguna"]
respuesta: "Con la clave pública de Ana"

enunciado: "Para enviar un mensaje confidencial a Ana, ¿con qué se cifra?"

explicacion: |
  Solo ella lo descifra con su privada.
```

### 12 — Firma

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["firma"]

tipo: mc
opciones_explicitas: ["Con la clave privada", "Con la pública", "Con ninguna", "Con la de otra persona"]
respuesta: "Con la clave privada"

enunciado: "¿Con qué clave se firma digitalmente?"

explicacion: |
  Se verifica con la pública.
```

### 13 — RSA

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["rsa"]

tipo: mc
opciones_explicitas: ["Un algoritmo asimétrico", "Un hash", "Un virus", "Un modo de cifrado simétrico"]
respuesta: "Un algoritmo asimétrico"

enunciado: "¿Qué es RSA?"

explicacion: |
  Se recomiendan claves de 2048 bits o más.
```

### 14 — HTTPS

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["https"]

tipo: mc
opciones_explicitas: ["Asimétrico para acordar la clave y autenticar; simétrico para cifrar la conversación", "Solo asimétrico", "Solo simétrico", "No usa cifrado"]
respuesta: "Asimétrico para acordar la clave y autenticar; simétrico para cifrar la conversación"

enunciado: "¿Cómo combina HTTPS los dos tipos de cifrado?"

explicacion: |
  Cada tipo hace lo que mejor sabe.
```

### 15 — Hash

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["hash"]

tipo: mc
opciones_explicitas: ["Una función que convierte datos en un resumen de tamaño fijo", "Un cifrado reversible", "Una clave", "Una copia"]
respuesta: "Una función que convierte datos en un resumen de tamaño fijo"

enunciado: "¿Qué es una función hash?"

explicacion: |
  No se puede revertir.
```

### 16 — Avalancha

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["hash"]

tipo: mc
opciones_explicitas: ["Que un cambio mínimo produce un hash totalmente distinto", "Que el hash crece", "Que el hash se repite", "Que el hash se cifra"]
respuesta: "Que un cambio mínimo produce un hash totalmente distinto"

enunciado: "¿Qué es el efecto avalancha?"

explicacion: |
  Es deseable en un hash.
```

### 17 — Integridad

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["integridad"]

tipo: mc
opciones_explicitas: ["Comparando el hash calculado con el publicado", "Abriendo el archivo", "Cifrándolo", "Borrándolo"]
respuesta: "Comparando el hash calculado con el publicado"

enunciado: "¿Cómo se usa un hash para verificar una descarga?"

explicacion: |
  Si coincide, no se alteró.
```

### 18 — MD5

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["md5"]

tipo: mc
opciones_explicitas: ["Porque se pueden encontrar colisiones", "Porque es lento", "Porque es largo", "Porque es nuevo"]
respuesta: "Porque se pueden encontrar colisiones"

enunciado: "¿Por qué no se usa MD5 para seguridad?"

explicacion: |
  Tampoco SHA-1.
```

### 19 — Hash no cifra

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["hash"]

tipo: mc
opciones_explicitas: ["No: no es un cifrado", "Sí con la clave", "Sí con AES", "Sí con la sal"]
respuesta: "No: no es un cifrado"

enunciado: "¿Se puede \"descifrar\" un hash?"

explicacion: |
  Es unidireccional.
```

### 20 — Certificado

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["certificados"]

tipo: mc
opciones_explicitas: ["Una clave pública con una identidad", "Dos claves privadas", "Un hash con un archivo", "Un usuario con una contraseña"]
respuesta: "Una clave pública con una identidad"

enunciado: "¿Qué vincula un certificado digital?"

explicacion: |
  Lo firma una autoridad de certificación.
```

### 21 — Candado

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["candado"]

tipo: mc
opciones_explicitas: ["Que la conexión está cifrada y el certificado es válido para ese dominio", "Que el sitio es honesto", "Que no hay virus", "Que es del gobierno"]
respuesta: "Que la conexión está cifrada y el certificado es válido para ese dominio"

enunciado: "¿Qué indica el candado del navegador?"

explicacion: |
  Un sitio de phishing también puede tener HTTPS.
```

### 22 — Claves

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["claves"]

tipo: mc
opciones_explicitas: ["Protegerla y no compartirla ni subirla a un repositorio", "Publicarla", "Enviarla por correo", "Pegarla en el código"]
respuesta: "Protegerla y no compartirla ni subirla a un repositorio"

enunciado: "¿Qué se hace con la clave privada?"

explicacion: |
  Quien la tenga puede suplantar.
```

### 23 — Pérdida

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["claves"]

tipo: mc
opciones_explicitas: ["No, si no hay copia de la clave", "Sí siempre", "Con el hash", "Con el antivirus"]
respuesta: "No, si no hay copia de la clave"

enunciado: "Si se pierde la clave de un archivo cifrado, ¿se puede recuperar el archivo?"

explicacion: |
  Por eso se respaldan las claves.
```

### 24 — Base64

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["base64"]

tipo: mc
opciones_explicitas: ["No: es una codificación reversible, no un cifrado", "Sí", "Con claves largas", "Solo en HTTPS"]
respuesta: "No: es una codificación reversible, no un cifrado"

enunciado: "¿Protege Base64 los datos?"

explicacion: |
  Cualquiera lo decodifica.
```

### 25 — Extremo a extremo

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["e2e"]

tipo: mc
opciones_explicitas: ["Que solo los participantes de la conversación pueden leer los mensajes", "Que el servidor lee todo", "Que no hay cifrado", "Que se usa solo en correo"]
respuesta: "Que solo los participantes de la conversación pueden leer los mensajes"

enunciado: "¿Qué significa cifrado de extremo a extremo?"

explicacion: |
  Ni siquiera el proveedor puede leerlos.
```

### 26 — Contraseñas

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "basico"
  tags: ["contrasenas"]

tipo: mc
opciones_explicitas: ["Con un hash lento y con sal", "En texto plano", "Con MD5 sin sal", "Con Base64"]
respuesta: "Con un hash lento y con sal"

enunciado: "¿Cómo se guardan las contraseñas?"

explicacion: |
  Argon2, bcrypt o scrypt.
```

### 27 — Aleatorios

```
metadata:
  materia: "ciberseguridad"
  tema: "criptografia_basica"
  nivel: "intermedio"
  tags: ["aleatoriedad"]

tipo: mc
opciones_explicitas: ["De fuentes aleatorias seguras", "De un texto sencillo", "De la fecha", "De la contraseña del Wi-Fi"]
respuesta: "De fuentes aleatorias seguras"

enunciado: "¿De dónde deben venir las claves?"

explicacion: |
  La aleatoriedad es clave.
```

