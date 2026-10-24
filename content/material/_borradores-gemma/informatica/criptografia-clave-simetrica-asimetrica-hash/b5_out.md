### 1 — Cifrado de archivos masivos
```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "simetrico"]

variables:
  escenario: uno_de([["400 GB de datos", "simetrico"], ["2 KB de texto", "asimetrico"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["simetrico", "asimetrico"]

enunciado: "Un servidor necesita cifrar un archivo de {escenario[idx][0]} para su almacenamiento seguro. Dado que la velocidad de procesamiento es la prioridad, ¿qué tipo de cifrado debería utilizar?"

explicacion: |
  Para grandes volúmenes de datos, el cifrado simétrico es preferible por su alta velocidad y eficiencia computacional en comparación con el asimétrico.
```

### 2 — Integridad de datos con Hash
```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["integridad", "hash"]

respuesta: "hash"
tipo: completar
respuestas_validas: ["hash", "checksum", "resumen"]

enunciado: "Para verificar que un archivo no ha sido alterado durante una descarga, se suele comparar su valor ___ con el proporcionado por el servidor."

explicacion: |
  Una función hash genera una huella digital única (hash) de un mensaje. Si el contenido cambia, el hash cambia completamente.
```

### 3 — El dilema de la clave pública
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

### 4 — El proceso de firma digital
```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "ordenar"]

respuesta: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]
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

### 5 — Comparativa de llaves
```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["claves", "seguridad"]

variables:
  caso: uno_de([["enviar una sola clave por un canal inseguro", "falso"], ["usar dos llaves distintas (pública y privada)", "verdadero"]])
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: vf

enunciado: "En el cifrado simétrico, el principal problema de seguridad es: {caso[idx][0]}."

explicacion: |
  El cifrado simétrico requiere que ambas partes compartan la misma clave. Si el canal para compartirla es inseguro, un atacante podría interceptarla.
```