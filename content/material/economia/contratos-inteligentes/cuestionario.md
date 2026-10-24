# Economía — Contratos inteligentes: reglas si-entonces autoejecutables (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Un contrato inteligente es un
> "si-entonces" que se ejecuta solo, sin intermediario. Necesita un
> oráculo para ver datos del mundo real.

---

### 1 — Qué es un contrato inteligente

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un contrato inteligente (smart contract)?"
tipo: mc
opciones_explicitas:
  - "Un programa que corre sobre una blockchain, con reglas \"si pasa X, entonces hacé Y\", que se ejecuta automáticamente"
  - "Un documento en PDF firmado digitalmente"
  - "Un tipo especial de wallet"
respuesta: "Un programa que corre sobre una blockchain, con reglas \"si pasa X, entonces hacé Y\", que se ejecuta automáticamente"

explicacion: |
  Es la definición central del tema.
```

### 2 — Diferencia con un contrato tradicional

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre un contrato tradicional en papel y un contrato inteligente?"
tipo: mc
opciones_explicitas:
  - "El tradicional necesita que un tercero (juez, tribunal) lo haga cumplir; el inteligente se ejecuta solo, automáticamente"
  - "El contrato inteligente no tiene ninguna condición \"si-entonces\""
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El tradicional necesita que un tercero (juez, tribunal) lo haga cumplir; el inteligente se ejecuta solo, automáticamente"

explicacion: |
  Es la ventaja central: elimina la necesidad de reclamar activamente
  el cumplimiento.
```

### 3 — Es el mismo condicional de programación

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente usa la misma lógica \"si-entonces\" (condicional) que existe en cualquier lenguaje de programación, sólo que corre distribuido en la blockchain."

explicacion: |
  No hay ninguna lógica nueva: es un condicional de programación
  común, ejecutado en un lugar distinto.
```

### 4 — Qué es un escrow automático

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Un comprador deposita dinero en un contrato inteligente, que lo libera al vendedor recién cuando el comprador confirma haber recibido el producto. ¿Quién tiene el control de liberar ese dinero antes de tiempo?"
tipo: mc
opciones_explicitas:
  - "Ninguno de los dos: sólo el código del contrato puede liberarlo, y sólo cuando se cumple la condición"
  - "El vendedor, en cualquier momento"
  - "El comprador, en cualquier momento"
respuesta: "Ninguno de los dos: sólo el código del contrato puede liberarlo, y sólo cuando se cumple la condición"

explicacion: |
  Es justamente el punto: ninguna de las partes controla la ejecución,
  sólo la condición programada la dispara.
```

### 5 — Qué puede ver un contrato inteligente por su cuenta

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué información puede ver un contrato inteligente, por su cuenta, sin ninguna ayuda externa?"
tipo: mc
opciones_explicitas:
  - "Sólo información que ya está dentro de la blockchain"
  - "Cualquier información del mundo real, sin restricciones"
  - "Sólo el saldo de la wallet de su creador"
respuesta: "Sólo información que ya está dentro de la blockchain"

explicacion: |
  No tiene forma nativa de saber qué pasa fuera de la blockchain.
```

### 6 — Qué es un oráculo

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un \"oráculo\", en el contexto de los contratos inteligentes?"
tipo: mc
opciones_explicitas:
  - "Un servicio externo que trae un dato del mundo real y lo inyecta en la blockchain para que un contrato lo pueda usar"
  - "Otro nombre para la clave privada de una wallet"
  - "El nombre técnico del creador de un contrato inteligente"
respuesta: "Un servicio externo que trae un dato del mundo real y lo inyecta en la blockchain para que un contrato lo pueda usar"

explicacion: |
  Es el puente entre el mundo real (fuera de la blockchain) y el
  contrato inteligente (que sólo ve datos dentro de ella).
```

### 7 — El oráculo es un punto débil

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un oráculo informa mal un dato del mundo real, el contrato inteligente ejecuta la acción igual, aunque el dato real haya sido otro."

explicacion: |
  El contrato confía ciegamente en lo que le informa el oráculo: es su
  punto más débil.
```

### 8 — Ejemplo de un vuelo retrasado

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "Un seguro de vuelo automático paga a un pasajero apenas se confirma que su vuelo se retrasó más de 3 horas. ¿Qué necesita el contrato inteligente para saber que el vuelo se retrasó?"
tipo: mc
opciones_explicitas:
  - "Un oráculo que le informe ese dato del mundo real"
  - "Nada especial: lo sabe automáticamente sin ayuda externa"
  - "Que el propio pasajero le escriba el código de la aerolínea"
respuesta: "Un oráculo que le informe ese dato del mundo real"

explicacion: |
  El retraso de un vuelo es un dato del mundo real, fuera de la
  blockchain, así que hace falta un oráculo para traerlo.
```

### 9 — Qué significa que sea inmutable

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué significa que un contrato inteligente sea, en general, \"inmutable\" una vez publicado?"
tipo: mc
opciones_explicitas:
  - "Que su código no se puede modificar después, ni siquiera por quien lo creó"
  - "Que nunca puede tener errores de programación"
  - "Que sólo lo puede usar una persona a la vez"
respuesta: "Que su código no se puede modificar después, ni siquiera por quien lo creó"

explicacion: |
  Es lo que garantiza que ninguna parte lo altere a su favor después
  de acordado.
```

### 10 — La inmutabilidad también fija los errores

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un contrato inteligente tiene un error de programación, ese error también queda fijo para siempre y se ejecuta igual que si fuera la regla correcta."

explicacion: |
  Es la contracara de la inmutabilidad: protege de manipulación
  externa, pero no corrige errores propios.
```

### 11 — Por qué no hace falta un intermediario

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente elimina la necesidad de un intermediario que obligue a cumplir el acuerdo, porque el cumplimiento está en el propio código."

explicacion: |
  Es la ventaja central del mecanismo: el código reemplaza al tercero
  que hace cumplir un contrato tradicional.
```

### 12 — Identificar la condición y la acción

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "En un contrato de vesting que libera tokens automáticamente cada mes sin que nadie apriete un botón, ¿cuál es la \"condición\" (el \"si\") de la regla?"
tipo: mc
opciones_explicitas:
  - "Que haya pasado un mes desde la última liberación"
  - "Que el dueño de los tokens los pida expresamente"
  - "Que el precio del token suba"
respuesta: "Que haya pasado un mes desde la última liberación"

explicacion: |
  El paso del tiempo es la condición programada; la liberación
  automática es la acción que dispara.
```

### 13 — Ordenar el flujo de un escrow automático

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del flujo de un contrato inteligente de depósito en garantía (escrow)."
opciones_explicitas:
  - "El contrato libera automáticamente el dinero al vendedor"
  - "El contrato verifica que se cumplió la condición programada"
  - "El comprador deposita el dinero en el contrato"
  - "El comprador confirma que recibió el producto"
respuesta_orden: ["El comprador deposita el dinero en el contrato", "El comprador confirma que recibió el producto", "El contrato verifica que se cumplió la condición programada", "El contrato libera automáticamente el dinero al vendedor"]

explicacion: |
  Cada paso habilita al siguiente: sin depósito no hay nada que
  liberar, sin confirmación no se cumple la condición.
```

### 14 — El código es público

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al correr sobre una blockchain pública, el código de un contrato inteligente puede ser revisado por cualquiera antes de interactuar con él."

explicacion: |
  Es una consecuencia directa de correr sobre una red pública y
  transparente.
```

### 15 — Sin intermediario, pero con un nuevo punto de confianza

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "Un contrato inteligente elimina la necesidad de confiar en un juez o tribunal para hacerlo cumplir. ¿En qué SÍ hay que confiar igual, cuando el contrato depende de un dato del mundo real?"
tipo: mc
opciones_explicitas:
  - "En que el oráculo que le informa ese dato sea confiable"
  - "En nada: un contrato inteligente nunca depende de confiar en nadie"
  - "En el banco central del país donde vive el comprador"
respuesta: "En que el oráculo que le informa ese dato sea confiable"

explicacion: |
  El oráculo reintroduce un punto de confianza que el resto del
  sistema había eliminado.
```

### 16 — Diferencia entre contrato inteligente y blockchain

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Cuál es la relación entre un contrato inteligente y una blockchain?"
tipo: mc
opciones_explicitas:
  - "El contrato inteligente es un programa que corre SOBRE una blockchain, usando su misma infraestructura descentralizada"
  - "Son exactamente lo mismo, dos nombres para una sola cosa"
  - "La blockchain es un tipo de contrato inteligente"
respuesta: "El contrato inteligente es un programa que corre SOBRE una blockchain, usando su misma infraestructura descentralizada"

explicacion: |
  La blockchain es la base; el contrato inteligente es una aplicación
  que se construye encima de ella.
```

### 17 — No requiere que las partes se conozcan ni confíen entre sí

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente puede funcionar entre dos partes que no se conocen ni confían entre sí, porque la confianza está puesta en el código, no en la otra persona."

explicacion: |
  Es una de las ventajas centrales: reemplaza la confianza personal
  por confianza en un código verificable.
```

### 18 — Completar el mecanismo central

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá: un contrato inteligente ejecuta la regla \"si ___ (se cumple la condición), entonces ocurre la acción\", de forma automática."
respuestas_validas:
  - "pasa x"
  - "se cumple x"
  - "se cumple la condición"

explicacion: |
  Es la estructura básica de cualquier contrato inteligente.
```

### 19 — El seguro de vuelo, de nuevo

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "problema"]

enunciado: "En el seguro de vuelo automático, ¿el pasajero tiene que reclamar activamente para cobrar, como en un seguro tradicional?"
tipo: mc
opciones_explicitas:
  - "No: el contrato paga automáticamente en cuanto el oráculo confirma el retraso"
  - "Sí: siempre hay que llenar un formulario de reclamo"
  - "Sí, pero sólo si el retraso fue de más de 24 horas"
respuesta: "No: el contrato paga automáticamente en cuanto el oráculo confirma el retraso"

explicacion: |
  Es la diferencia central frente a un seguro tradicional: se ejecuta
  solo, sin reclamo.
```

### 20 — El vesting como ejemplo de ejecución sin intervención

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un token que se libera de a poco con el paso del tiempo (vesting) es un ejemplo de contrato inteligente que se ejecuta sin que nadie tenga que intervenir manualmente cada vez."

explicacion: |
  El paso del tiempo es la condición; la liberación periódica es la
  acción automática.
```

### 21 — Cierre del tema

```
metadata:
  materia: "economia"
  tema: "contratos_inteligentes"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un contrato inteligente es una regla \"si-entonces\" escrita en código, que corre sobre una blockchain y se ejecuta sola, sin intermediario — con el límite de que sólo ve datos del mundo real a través de un oráculo."

explicacion: |
  Es la idea central de todo el tema.
```
