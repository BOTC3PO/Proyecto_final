### 1 — Cifrado simétrico vs asimétrico
```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Alice envía un mensaje a Bob usando la misma clave que ambos conocen para cifrar y descifrar.", "Alice envía un mensaje a Bob usando su clave privada para cifrar y Bob usa la clave pública de Alice para descifrar." ], [ "Un sistema de comunicación donde la clave de cifrado es idéntica a la de descifrado.", "Un sistema de firma digital donde la clave de cifrado es distinta a la de descifrado." ]]

enunciado: "Si estamos ante el escenario de: {datos[escenario_idx][0]}, ¿qué tipo de criptografía se está utilizando?"

opciones_explicitas: ["Simétrica", "Asimétrica"]
respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  En la criptografía simétrica, se utiliza una única clave compartida para ambas operaciones. En la asimétrica, se utiliza un par de claves (pública y privada) relacionadas matemáticamente.
```

### 2 — Propiedad de las funciones Hash
```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

enunciado: "Se aplica una función hash a un archivo de 1 GB. Si se cambia un solo bit del archivo original, el valor del hash resultante será ___."

respuestas_validas: ["completamente diferente", "el mismo", "casi igual"]
respuesta: "completamente diferente"
tipo: completar

explicacion: |
  Una de las propiedades fundamentales de las funciones hash criptográficas es el "efecto avalancha": un cambio mínimo en la entrada produce un cambio drástico e impredecible en la salida.
```

### 3 — El proceso de firma digital
```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["firma_digital", "asimetrica"]

enunciado: "Ordena los pasos para que Alice firme digitalmente un documento para asegurar su autenticidad:"

opciones_explicitas: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
respuesta: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
tipo: ordenar

explicacion: |
  La firma digital no cifra el documento completo (que sería lento), sino el hash del documento usando la clave privada del emisor. El receptor descifra el hash con la clave pública del emisor para verificar la integridad y autoría.
```

### 4 — Veracidad de conceptos
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

### 5 — Cálculo de integridad (Simulación)
```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "verificacion"]

variables:
  hash_original: "a1b2c3d4"
  hash_recibido: uno_de(["a1b2c3d4", "f9e8d7c6"])

enunciado: "El emisor envía un archivo con el hash '{hash_original}'. El receptor, tras descargar el archivo, calcula el hash y obtiene '{hash_recibido}'. ¿El archivo ha sido alterado?"

opciones_explicitas: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
respuesta: si(hash_original == hash_recibido, "No, el archivo es íntegro", "Sí, el archivo fue alterado")
tipo: mc

explicacion: |
  Si el hash calculado por el receptor coincide exactamente con el hash enviado por el emisor, se garantiza que el contenido no ha sido modificado durante la transmisión.
```