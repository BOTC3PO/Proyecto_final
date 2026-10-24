# Economía — Blockchain, claves y wallet (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Clave privada: secreta, firma.
> Clave pública: se comparte, verifica. Hash: huella digital que
> encadena los bloques.

---

### 1 — Qué problema resuelve una blockchain

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué resuelve una blockchain, sin depender de ningún banco ni autoridad central?"
tipo: mc
opciones_explicitas:
  - "Llevar un registro confiable de transacciones, mantenido de forma coordinada por miles de computadoras repartidas"
  - "Calcular automáticamente el precio de cualquier producto"
  - "Reemplazar completamente la necesidad de tener una clave de acceso"
respuesta: "Llevar un registro confiable de transacciones, mantenido de forma coordinada por miles de computadoras repartidas"

explicacion: |
  Es la idea central: un registro confiable sin autoridad central
  única.
```

### 2 — Qué es un bloque

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es un \"bloque\" en una blockchain?"
tipo: mc
opciones_explicitas:
  - "Un grupo de transacciones confirmadas en un período de tiempo"
  - "Una sola transacción individual"
  - "El nombre de una wallet"
respuesta: "Un grupo de transacciones confirmadas en un período de tiempo"

explicacion: |
  Cada bloque agrupa varias transacciones a la vez.
```

### 3 — Por qué se llama "cadena"

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Por qué los bloques forman una \"cadena\"?"
tipo: mc
opciones_explicitas:
  - "Porque cada bloque nuevo incluye el hash del bloque anterior, enlazándolo con el que vino antes"
  - "Porque están ordenados alfabéticamente"
  - "Porque cada bloque contiene una copia completa de todos los bloques anteriores"
respuesta: "Porque cada bloque nuevo incluye el hash del bloque anterior, enlazándolo con el que vino antes"

explicacion: |
  El enlace es, literalmente, el hash del bloque previo guardado
  dentro del bloque nuevo.
```

### 4 — Qué es un hash

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es un hash?"
tipo: mc
opciones_explicitas:
  - "El resultado de una función matemática que actúa como huella digital única de unos datos"
  - "Una contraseña que elige el usuario"
  - "El nombre de una criptomoneda en particular"
respuesta: "El resultado de una función matemática que actúa como huella digital única de unos datos"

explicacion: |
  Es la pieza que permite detectar si algo cambió: mismos datos,
  mismo hash; datos distintos, hash distinto.
```

### 5 — Mismos datos, mismo hash

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los mismos datos de entrada siempre producen exactamente el mismo hash."

explicacion: |
  Es una propiedad fundamental de las funciones de hash: son
  deterministas.
```

### 6 — Un cambio mínimo cambia todo el hash

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar un solo carácter de los datos de entrada cambia el hash resultante por completo, no de forma parecida."

explicacion: |
  Es lo que hace que un hash sirva para detectar cualquier alteración,
  por mínima que sea.
```

### 7 — Por qué es difícil alterar una transacción vieja

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Por qué es tan difícil alterar una transacción registrada en un bloque viejo de una blockchain activa?"
tipo: mc
opciones_explicitas:
  - "Porque cambiaría el hash de ese bloque, y habría que recalcular también todos los bloques posteriores en la mayoría de las copias de la red"
  - "Porque está prohibido por una ley específica en todos los países"
  - "Porque cada transacción tiene una contraseña individual distinta"
respuesta: "Porque cambiaría el hash de ese bloque, y habría que recalcular también todos los bloques posteriores en la mayoría de las copias de la red"

explicacion: |
  El encadenamiento de hashes es lo que hace tan costoso alterar el
  pasado.
```

### 8 — Qué es la clave privada

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es la clave privada?"
tipo: mc
opciones_explicitas:
  - "Un número secreto que nunca se comparte, y que prueba que sos el dueño de algo"
  - "Un número que se comparte libremente para recibir fondos"
  - "El nombre de usuario dentro de una wallet"
respuesta: "Un número secreto que nunca se comparte, y que prueba que sos el dueño de algo"

explicacion: |
  Es la mitad SECRETA del par de claves.
```

### 9 — Qué es la clave pública

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué es la clave pública?"
tipo: mc
opciones_explicitas:
  - "Una clave generada a partir de la clave privada, que sí se puede compartir para que otros verifiquen firmas"
  - "La misma clave privada, sólo que escrita en otro formato"
  - "Una clave que cambia en cada transacción"
respuesta: "Una clave generada a partir de la clave privada, que sí se puede compartir para que otros verifiquen firmas"

explicacion: |
  Es la mitad PÚBLICA del par: se puede compartir sin comprometer la
  clave privada.
```

### 10 — La relación es de un solo sentido

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "De la clave privada se puede calcular la clave pública, pero no existe una forma práctica de calcular la clave privada a partir de la pública."

explicacion: |
  Es justamente lo que permite compartir la clave pública sin riesgo:
  la relación no se puede invertir en la práctica.
```

### 11 — Para qué sirve firmar una transacción

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Para qué sirve firmar una transacción con la clave privada?"
tipo: mc
opciones_explicitas:
  - "Para que cualquier nodo pueda verificar, usando la clave pública, que quien envió la transacción realmente tiene la clave privada correspondiente"
  - "Para ocultar el monto de la transacción a toda la red"
  - "Para reducir el tamaño del bloque"
respuesta: "Para que cualquier nodo pueda verificar, usando la clave pública, que quien envió la transacción realmente tiene la clave privada correspondiente"

explicacion: |
  La verificación se hace con la clave pública, sin que la clave
  privada se revele en ningún momento.
```

### 12 — La clave privada nunca se revela al firmar

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al firmar y verificar una transacción, la clave privada nunca se revela ni se comparte en ningún momento del proceso."

explicacion: |
  Es lo que hace segura a la criptografía asimétrica: se prueba
  posesión sin exponer el secreto.
```

### 13 — Qué guarda una wallet

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿Qué guarda realmente una wallet?"
tipo: mc
opciones_explicitas:
  - "Las claves privadas que prueban la propiedad sobre movimientos ya registrados en la blockchain"
  - "Las monedas físicas, como si fuera una caja fuerte"
  - "Una copia completa de toda la blockchain"
respuesta: "Las claves privadas que prueban la propiedad sobre movimientos ya registrados en la blockchain"

explicacion: |
  No "contiene" criptomonedas como objetos: guarda la llave que
  prueba la propiedad sobre lo ya registrado en la cadena.
```

### 14 — De dónde sale la dirección de una wallet

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "vocabulario"]

enunciado: "¿De dónde se deriva la \"dirección\" de una wallet, la que se comparte para recibir fondos?"
tipo: mc
opciones_explicitas:
  - "De la clave pública"
  - "De la clave privada, directamente"
  - "Del nombre elegido por el usuario"
respuesta: "De la clave pública"

explicacion: |
  La dirección es una versión más corta y manejable, derivada de la
  clave pública — nunca de la privada.
```

### 15 — Qué pasa si se pierde la clave privada

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

enunciado: "Si alguien pierde su clave privada y no guardó ninguna copia de respaldo, ¿qué puede hacer para recuperar el acceso?"
tipo: mc
opciones_explicitas:
  - "Nada: no existe ningún mecanismo de \"recuperar contraseña\", ni siquiera el creador de la blockchain puede restaurar el acceso"
  - "Pedirle al soporte técnico de la blockchain que la resetee"
  - "Esperar a que la red le asigne una clave nueva automáticamente"
respuesta: "Nada: no existe ningún mecanismo de \"recuperar contraseña\", ni siquiera el creador de la blockchain puede restaurar el acceso"

explicacion: |
  Es la contracara directa de no depender de una autoridad central:
  nadie tiene el poder de restaurar el acceso por vos.
```

### 16 — No depender de una autoridad central tiene un costo

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No depender de un banco ni de ninguna autoridad central tiene como contracara que perder la clave privada es, en la práctica, irreversible."

explicacion: |
  Es la misma característica (sin autoridad central) vista desde su
  ventaja y desde su riesgo.
```

### 17 — Distinguir un banco tradicional de una blockchain

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "problema"]

enunciado: "¿Cuál es la diferencia central entre cómo un banco tradicional lleva su registro de cuentas y cómo lo hace una blockchain?"
tipo: mc
opciones_explicitas:
  - "El banco mantiene un registro central único; la blockchain lo mantiene de forma coordinada entre miles de copias distribuidas"
  - "El banco usa hashes y la blockchain no"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El banco mantiene un registro central único; la blockchain lo mantiene de forma coordinada entre miles de copias distribuidas"

explicacion: |
  Es la diferencia estructural central entre un sistema centralizado y
  uno descentralizado.
```

### 18 — Identificar qué se comparte y qué no

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain", "problema"]

enunciado: "Alguien te pide su clave para poder enviarte fondos a su wallet. ¿Qué clave te debería compartir?"
tipo: mc
opciones_explicitas:
  - "Su clave pública (o la dirección derivada de ella)"
  - "Su clave privada"
  - "Ninguna: no hace falta ninguna clave para recibir fondos"
respuesta: "Su clave pública (o la dirección derivada de ella)"

explicacion: |
  La clave privada nunca se comparte, ni siquiera para recibir
  fondos: para eso alcanza con la pública.
```

### 19 — Ordenar el proceso de una transacción

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se procesa una transacción en una blockchain."
opciones_explicitas:
  - "La transacción se agrupa junto a otras en un bloque nuevo"
  - "El bloque nuevo incluye el hash del bloque anterior, quedando enlazado a la cadena"
  - "El emisor firma la transacción con su clave privada"
  - "Los nodos de la red verifican la firma con la clave pública del emisor"
respuesta_orden: ["El emisor firma la transacción con su clave privada", "Los nodos de la red verifican la firma con la clave pública del emisor", "La transacción se agrupa junto a otras en un bloque nuevo", "El bloque nuevo incluye el hash del bloque anterior, quedando enlazado a la cadena"]

explicacion: |
  Cada paso depende del anterior: sin firma no hay verificación, sin
  verificación no se agrupa en un bloque válido, y el bloque recién
  se encadena al final.
```

### 20 — Completar el concepto de la cadena

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "intermedio"
  tags: ["blockchain"]

tipo: completar
enunciado: "Completá: cada bloque nuevo incluye el ___ (huella digital única) del bloque anterior, formando así la cadena."
respuestas_validas:
  - "hash"

explicacion: |
  Es el mecanismo exacto que enlaza un bloque con el siguiente.
```

### 21 — No es lo mismo clave pública que dirección

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "avanzado"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección de una wallet es una versión derivada (más corta) de la clave pública, no la clave pública en sí misma sin ningún procesamiento."

explicacion: |
  Son conceptos relacionados pero distintos: la dirección se calcula
  a partir de la clave pública.
```

### 22 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "blockchain_claves_wallet"
  nivel: "basico"
  tags: ["blockchain", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una blockchain usa hashes encadenados para hacer difícil alterar el pasado, y claves pública/privada para probar la propiedad de una transacción sin depender de ningún banco."

explicacion: |
  Es la idea central de todo el tema.
```
