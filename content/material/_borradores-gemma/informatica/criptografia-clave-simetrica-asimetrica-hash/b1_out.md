### 1 — Criptografía Simétrica
```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

respuesta: "misma_clave"
tipo: completar
respuestas_validas: ["misma_clave"]

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
  escenario: [
    ["La clave privada debe compartirse con cualquier persona para que el sistema funcione.", "falso"],
    ["La clave pública se puede distribuir libremente para que cualquiera pueda cifrar un mensaje para el dueño.", "verdadero"]
  ]

respuesta: escenario[idx][1]
tipo: vf
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

respuesta: ["Clave Pública", "Clave Privada"]
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
respuestas_validas: ["unidireccional"]

enunciado: "Una de las propiedades fundamentales de una función hash es que es ___; es decir, es computacionalmente imposible reconstruir el mensaje original a partir del hash obtenido."

explicacion: |
  La propiedad de unidireccionalidad (o resistencia a la preimagen) es lo que impide que un atacante pueda revertir el proceso de hashing para obtener el dato original.
```