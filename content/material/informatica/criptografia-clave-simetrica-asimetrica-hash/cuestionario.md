# Informatica — Criptografia clave simetrica asimetrica hash (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Criptografía Simétrica

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

respuesta: "misma_clave"
tipo: completar
respuestas_validas:
  - "misma_clave"

enunciado: "En la criptografía simétrica, se utiliza la ___ para cifrar y descifrar el mensaje."

explicacion: |
  En la criptografía simétrica, tanto el emisor como el receptor utilizan la misma clave secreta para realizar las operaciones de cifrado y descifrado.
```

### 2 — Criptografía Asimétrica

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "clave_publica"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La clave privada debe compartirse con cualquier persona para que el sistema funcione.", "falso"], ["La clave pública se puede distribuir libremente para que cualquiera pueda cifrar un mensaje para el dueño.", "verdadero"]]

respuesta: escenario[idx][1]
tipo: completar
opciones_explicitas: ["verdadero", "falso"]

enunciado: "En un sistema de clave pública (asimétrica), {escenario[idx][0]}"

explicacion: |
  El enunciado seleccionado es {escenario[idx][1]}. En la criptografía asimétrica, la clave pública se distribuye para cifrar, mientras que la privada se mantiene en secreto para descifrar.
```

### 3 — Propiedades de una Función Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

respuesta: "integridad"
tipo: mc
opciones_explicitas: ["confidencialidad", "integridad", "autenticidad", "disponibilidad"]

enunciado: "Las funciones hash se utilizan principalmente para garantizar la ___ de los datos, asegurando que el mensaje no haya sido alterado."

explicacion: |
  Un hash es una huella digital única. Si el mensaje cambia, el hash cambia, permitiendo verificar la integridad del archivo.
```

### 4 — Componentes de la Criptografía Asimétrica

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["clave_privada", "clave_publica"]

respuesta_orden: ["Clave Pública", "Clave Privada"]
tipo: ordenar
opciones_explicitas: ["Clave Pública", "Clave Privada"]

enunciado: "Ordena el proceso de cifrado asimétrico para enviar un mensaje privado a alguien: el emisor usa la ___ del destinatario para cifrar, y el destinatario usa su ___ para descifrar."

explicacion: |
  En la criptografía asimétrica, el emisor utiliza la clave pública del receptor para que solo el receptor, con su clave privada correspondiente, pueda leer el mensaje.
```

### 5 — Características de la Función Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "unidireccional"]

respuesta: "unidireccional"
tipo: completar
respuestas_validas:
  - "unidireccional"

enunciado: "Una de las propiedades fundamentales de una función hash es que es ___; es decir, es computacionalmente imposible reconstruir el mensaje original a partir del hash obtenido."

explicacion: |
  La propiedad de unidireccionalidad (o resistencia a la preimagen) es lo que impide que un atacante pueda revertir el proceso de hashing para obtener el dato original.
```

### 6 — Cifrado simétrico vs asimétrico

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Alice envía un mensaje a Bob usando la misma clave que ambos conocen para cifrar y descifrar.", "Alice envía un mensaje a Bob usando su clave privada para cifrar y Bob usa la clave pública de Alice para descifrar."], ["Un sistema de comunicación donde la clave de cifrado es idéntica a la de descifrado.", "Un sistema de firma digital donde la clave de cifrado es distinta a la de descifrado."]]

enunciado: "Si estamos ante el escenario de: {datos[escenario_idx][0]}, ¿qué tipo de criptografía se está utilizando?"

opciones_explicitas: ["Simétrica", "Asimétrica"]
respuesta: uno_de(["Simétrica", "Asimétrica"])
tipo: mc

explicacion: |
  En la criptografía simétrica, se utiliza una única clave compartida para ambas operaciones. En la asimétrica, se utiliza un par de claves (pública y privada) relacionadas matemáticamente.
```

### 7 — Propiedad de las funciones Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

enunciado: "Se aplica una función hash a un archivo de 1 GB. Si se cambia un solo bit del archivo original, el valor del hash resultante será ___."

respuestas_validas:
  - "completamente diferente"
  - "el mismo"
  - "casi igual"
respuesta: "completamente diferente"
tipo: completar

explicacion: |
  Una de las propiedades fundamentales de las funciones hash criptográficas es el "efecto avalancha": un cambio mínimo en la entrada produce un cambio drástico e impredecible en la salida.
```

### 8 — El proceso de firma digital

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["firma_digital", "asimetrica"]

enunciado: "Ordena los pasos para que Alice firme digitalmente un documento para asegurar su autenticidad:"

opciones_explicitas: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
respuesta_orden: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
tipo: ordenar

explicacion: |
  La firma digital no cifra el documento completo (que sería lento), sino el hash del documento usando la clave privada del emisor. El receptor descifra el hash con la clave pública del emisor para verificar la integridad y autoría.
```

### 9 — Veracidad de conceptos

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "teoria"]

enunciado: "¿Es posible recuperar el mensaje original a partir de su valor hash?"

respuesta: falso
tipo: vf

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way functions). Están diseñadas para ser computacionalmente imposibles de invertir.
```

### 10 — Cálculo de integridad (Simulación)

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "verificacion"]

variables:
  hash_original: "a1b2c3d4"
  hash_recibido: uno_de(["a1b2c3d4", "f9e8d7c6"])
  es_integro: hash_original == hash_recibido
  respuesta_correcta: uno_de(["No, el archivo es íntegro", "Sí, el archivo fue alterado"])

enunciado: "El emisor envía un archivo con el hash '{hash_original}'. El receptor, tras descargar el archivo, calcula el hash y obtiene '{hash_recibido}'. ¿El archivo ha sido alterado?"

opciones_explicitas: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
respuesta: respuesta_correcta
tipo: mc

explicacion: |
  Si el hash calculado por el receptor coincide exactamente con el hash enviado por el emisor, se garantiza que el contenido no ha sido modificado durante la transmisión.
```

### 11 — Confusión de uso: Simétrica vs Asimétrica

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

tipo: mc
opciones_explicitas: ["Cifrado simétrico", "Cifrado asimétrico", "Función Hash", "No es una técnica de cifrado"]
respuesta: "Cifrado asimétrico"

enunciado: "En un escenario donde dos personas necesitan comunicarse de forma segura pero nunca se han encontrado previamente para intercambiar una clave secreta, ¿qué tipo de criptografía es la más adecuada para establecer la comunicación inicial?"

explicacion: |
  El cifrado asimétrico utiliza un par de claves (pública y privada), lo que permite que dos entidades se comuniquen sin haber compartido previamente una clave secreta. El cifrado simétrico requiere que la clave ya sea conocida por ambas partes.
```

### 12 — El mito de la reversibilidad del Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

respuesta: falso
tipo: vf

enunciado: "Una función hash criptográfica es un proceso reversible; es decir, es posible reconstruir el mensaje original a partir de su valor hash."

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way). Su propósito es generar una huella digital única de un mensaje, pero no permiten recuperar el mensaje original a partir del hash.
```

### 13 — Integridad vs Confidencialidad

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

tipo: completar
respuesta: "integridad"
respuestas_validas:
  - "integridad"

enunciado: "Si un software utiliza una función hash para verificar que un archivo descargado no ha sido modificado por un tercero durante la transmisión, está garantizando la _________ del archivo."

explicacion: |
  El hash permite verificar que el contenido no ha cambiado (integridad). No garantiza la confidencialidad, ya que el archivo original sigue siendo legible si no está cifrado.
```

### 14 — Orden de operaciones en firmas digitales

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "proceso"]

respuesta_orden: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]
tipo: ordenar

opciones_explicitas: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]

enunciado: "Para realizar una firma digital sobre un documento y que el receptor pueda verificarla, ¿cuál es el orden correcto de los pasos técnicos?"

explicacion: |
  Primero se genera el hash del mensaje original. Luego, ese hash se cifra con la clave privada del emisor (esto es la firma). El receptor descifra la firma con la clave pública del emisor y compara el resultado con el hash que él mismo calcula del mensaje recibido.
```

### 15 — El error de la "doble seguridad"

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "intermedio"
  tags: ["eficiencia", "hibrida"]

respuesta: falso
tipo: vf

enunciado: "Dado que el cifrado asimétrico es mucho más seguro que el simétrico, la práctica estándar en la navegación web (HTTPS) es cifrar todo el tráfico de datos usando únicamente criptografía asimétrica."

explicacion: |
  Falso. El cifrado asimétrico es computacionalmente muy costoso y lento. Por eso, se usa un sistema híbrido: la criptografía asimétrica para intercambiar una clave simétrica, y luego se usa esa clave simétrica para cifrar el flujo de datos real por su rapidez.
```

### 16 — Criptografía Simétrica vs Asimétrica

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

variables:
  escenario: uno_de(["simetrica", "asimetrica"])

enunciado: "En un sistema de cifrado {escenario}, se utiliza la misma clave para cifrar y descifrar el mensaje."

respuesta: escenario == "simetrica"
tipo: completar
explicacion: |
  En la criptografía simétrica, la clave compartida es idéntica para ambas operaciones. En la asimétrica, se usa un par de claves (pública y privada).
```

### 17 — El propósito de una función Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

opciones_explicitas: ["Garantizar la confidencialidad del mensaje", "Garantizar la integridad del mensaje", "Cifrar el mensaje para que nadie lo lea", "Comprimir el mensaje para que ocupe menos"]

respuesta: "Garantizar la integridad del mensaje"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de aplicar una función hash a un archivo o mensaje?"

explicacion: |
  Una función hash genera una huella digital única. Si el archivo cambia, el hash cambia, lo que permite verificar que el contenido no ha sido alterado (integridad).
```

### 18 — Propiedades de las funciones Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "seguridad"]

variables:
  caso: uno_de(["colision", "unidireccional"])
  tabla: [["colision", "colision"], ["unidireccional", "unidireccional"]]

enunciado: "Una función hash es considerada {caso} si es computacionalmente imposible encontrar el mensaje original a partir de su hash."

pasos:
  - "Identificar la propiedad descrita."

respuesta: tabla[0][1]

tipo: completar
respuestas_validas:
  - "colision"
  - "unidireccional"

explicacion: |
  La propiedad de unidireccionalidad (one-way) impide revertir el proceso de hash para obtener el dato original.
```

### 19 — Flujo de comunicación asimétrica

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrica", "claves"]

opciones_explicitas: ["Clave privada", "Clave pública", "Clave secreta", "Clave de sesión"]

respuesta: "Clave pública"
tipo: mc

enunciado: "Si Alice quiere enviarle un mensaje cifrado a Bob de forma segura usando criptografía asimétrica, ¿qué clave debe utilizar Alice para cifrar el mensaje?"

explicacion: |
  En la criptografía asimétrica, se cifra con la clave pública del destinatario, de modo que solo el destinatario pueda descifrarlo con su clave privada correspondiente.
```

### 20 — Conceptos de Criptografía

```
metadata:
  materia: "informatica"
  tema: "criptografia_conceptos"
  nivel: "basico"
  tags: ["conceptos", "seguridad"]

opciones_explicitas: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]

respuesta_orden: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos de mayor a menor capacidad de recuperación de la información original (desde que es posible recuperar el mensaje original hasta que es imposible):"

explicacion: |
  1. Cifrado Simétrico/Asimétrico: Están diseñados para ser reversibles con la clave correcta.
  2. Hash: Es una función de una sola vía; no se puede recuperar el mensaje original a partir del hash.
```

### 21 — Cifrado de archivos masivos

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "simetrico"]

variables:
  datos: [["400 GB de datos", "simetrico"], ["2 KB de texto", "asimetrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simetrico", "asimetrico"]

enunciado: "Un servidor necesita cifrar un archivo de {datos[idx][0]} para su almacenamiento seguro. Dado que la velocidad de procesamiento es la prioridad, ¿qué tipo de cifrado debería utilizar?"

explicacion: |
  Para grandes volúmenes de datos, el cifrado simétrico es preferible por su alta velocidad y eficiencia computacional en comparación con el asimétrico.
```

### 22 — Integridad de datos con Hash

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["integridad", "hash"]

respuesta: "hash"
tipo: completar
respuestas_validas:
  - "hash"
  - "checksum"
  - "resumen"

enunciado: "Para verificar que un archivo no ha sido alterado durante una descarga, se suele comparar su valor ___ con el proporcionado por el servidor."

explicacion: |
  Una función hash genera una huella digital única (hash) de un mensaje. Si el contenido cambia, el hash cambia completamente.
```

### 23 — El dilema de la clave pública

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrico", "clave_publica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de criptografía asimétrica, si utilizo la clave pública del destinatario para cifrar un mensaje, solo él podrá descifrarlo usando su clave privada correspondiente."

explicacion: |
  Esa es la base de la criptografía de clave pública: la clave de cifrado es pública, pero la de descifrado es privada y secreta.
```

### 24 — El proceso de firma digital

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "ordenar"]

respuesta_orden: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]
tipo: ordenar
opciones_explicitas: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]

enunciado: "Para realizar una firma digital sobre un documento, se deben seguir estos pasos en orden:"

pasos:
  - "Generar un resumen del documento."
  - "Cifrar ese resumen con la clave privada del emisor."
  - "Enviar el documento original junto con la firma generada."

explicacion: |
  La firma digital no cifra el documento entero, sino el hash del mismo, utilizando la clave privada para garantizar el no repudio y la integridad.
```

### 25 — Comparativa de llaves

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["claves", "seguridad"]

variables:
  datos: [["enviar una sola clave por un canal inseguro", "falso"], ["usar dos llaves distintas (pública y privada)", "verdadero"]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En el cifrado simétrico, el principal problema de seguridad es: {datos[idx][0]}."

explicacion: |
  El cifrado simétrico requiere que ambas partes compartan la misma clave. Si el canal para compartirla es inseguro, un atacante podría interceptarla.
```
