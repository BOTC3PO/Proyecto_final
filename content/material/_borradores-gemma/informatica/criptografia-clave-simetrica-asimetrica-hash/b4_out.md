### 1 — Criptografía Simétrica vs Asimétrica
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
tipo: vf

explicacion: |
  En la criptografía simétrica, la clave compartida es idéntica para ambas operaciones. En la asimétrica, se usa un par de claves (pública y privada).
```

### 2 — El propósito de una función Hash
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

### 3 — Propiedades de las funciones Hash
```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "seguridad"]

variables:
  caso: uno_de(["colision", "unidireccional"])

enunciado: "Una función hash es considerada {caso} si es computacionalmente imposible encontrar el mensaje original a partir de su hash."

pasos:
  - "Identificar la propiedad descrita."

respuesta: tabla[idx][1]
tabla:
  - ["colision", "colision"]
  - ["unidireccional", "unidireccional"]

tipo: completar
respuestas_validas: ["colision", "unidireccional"]

explicacion: |
  La propiedad de unidireccionalidad (one-way) impide revertir el proceso de hash para obtener el dato original.
```

### 4 — Flujo de comunicación asimétrica
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

### 5 — Conceptos de Criptografía
```
metadata:
  materia: "informatica"
  tema: "criptografia_conceptos"
  nivel: "basico"
  tags: ["conceptos", "seguridad"]

opciones_explicitas: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]

respuesta: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos de mayor a menor capacidad de recuperación de la información original (desde que es posible recuperar el mensaje original hasta que es imposible):"

explicacion: |
  1. Cifrado Simétrico/Asimétrico: Están diseñados para ser reversibles con la clave correcta.
  2. Hash: Es una función de una sola vía; no se puede recuperar el mensaje original a partir del hash.
```