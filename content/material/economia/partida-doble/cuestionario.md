# Economía — Partida doble: asiento contable (cuestionario, 21 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Regla de oro: en todo asiento,
> suma del Debe = suma del Haber.

---

### 1 — Qué es la partida doble

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué establece el principio de partida doble?"
tipo: mc
opciones_explicitas:
  - "Que todo movimiento económico afecta a dos o más cuentas al mismo tiempo, nunca a una sola"
  - "Que todo movimiento se registra dos veces, en dos libros distintos"
  - "Que las empresas tienen que llevar doble contabilidad, una oficial y otra interna"
respuesta: "Que todo movimiento económico afecta a dos o más cuentas al mismo tiempo, nunca a una sola"

explicacion: |
  Es la regla base de toda la contabilidad moderna.
```

### 2 — Ningún movimiento se registra solo

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún movimiento económico de una empresa se registra en una sola cuenta: siempre afecta a dos o más."

explicacion: |
  Es la regla de oro de la partida doble.
```

### 3 — Debe = Haber en cada asiento

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier asiento contable, la suma de los importes del Debe tiene que ser exactamente igual a la suma de los importes del Haber."

explicacion: |
  Es lo que mantiene equilibrada la ecuación contable después de cada
  movimiento.
```

### 4 — Qué es un asiento contable

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es un asiento contable?"
tipo: mc
opciones_explicitas:
  - "El registro de un movimiento: qué cuentas se debitan, qué cuentas se acreditan, y con qué importe"
  - "El balance final de toda la empresa"
  - "Un documento legal que reemplaza a una factura"
respuesta: "El registro de un movimiento: qué cuentas se debitan, qué cuentas se acreditan, y con qué importe"

explicacion: |
  Es la unidad básica de registro en contabilidad.
```

### 5 — Verificar si un asiento está balanceado

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

variables:
  importe: random(50, 500) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Un asiento registra ${importe} en el Debe de \"Mercadería\" y ${importe} en el Haber de \"Caja\". ¿Está balanceado (Debe = Haber)?"

explicacion: |
  Los dos importes son exactamente iguales, así que el asiento respeta
  la partida doble.
```

### 6 — Detectar un asiento desbalanceado

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

variables:
  debe: random(100, 500) * 1000
  haber: random(100, 500) * 1000

respuesta: (debe == haber)
tipo: vf

enunciado: "Un asiento registra ${debe} en el Debe y ${haber} en el Haber. ¿Está balanceado?"

explicacion: |
  Hay que comparar directamente ambos totales — si no coinciden, el
  asiento tiene un error.
```

### 7 — Calcular el importe faltante para balancear

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 300) * 1000
  debe_2: random(50, 300) * 1000
  haber_conocido: random(50, 300) * 1000

respuesta: debe_1 + debe_2 - haber_conocido
tipo: input
tolerancia_abs: 0

enunciado: "Un asiento tiene dos líneas en el Debe: ${debe_1} y ${debe_2}. En el Haber ya hay una línea de ${haber_conocido}. ¿Cuál debe ser el importe de la segunda línea del Haber, para que el asiento quede balanceado?"

pasos:
  - "Total del Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Falta en el Haber: {debe_1 + debe_2} - {haber_conocido}"

explicacion: |
  El total del Haber tiene que igualar al total del Debe.
```

### 8 — El ejemplo de comprar mercadería

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al comprar mercadería pagando en efectivo, tanto \"Mercadería\" como \"Caja\" son cuentas de Activo."

explicacion: |
  El activo total no cambia: sólo cambia de forma, de efectivo a
  mercadería.
```

### 9 — El activo total no cambia en ese ejemplo

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando se compra mercadería pagando en efectivo, el activo total de la empresa no cambia: \"Mercadería\" sube en la misma cantidad que baja \"Caja\"."

explicacion: |
  Es un movimiento dentro del mismo grupo (Activo), no una ganancia ni
  una pérdida.
```

### 10 — Un asiento desbalanceado indica un error

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el Debe y el Haber de un asiento no coinciden, hay un error en el registro contable."

explicacion: |
  Es la primera revisión que hace cualquier contador ante un balance
  que \"no cierra\".
```

### 11 — Origen y destino del recurso

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La partida doble registra, en el mismo asiento, de dónde sale un recurso y a dónde va — nunca sólo una de las dos partes."

explicacion: |
  Es la razón del nombre \"doble\": las dos caras de cada movimiento se
  anotan juntas.
```

### 12 — Comparar dos asientos por si están balanceados

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "comparacion"]

variables:
  debe_a: random(100, 400) * 1000
  haber_a: random(100, 400) * 1000
  debe_b: random(100, 400) * 1000

respuesta: (debe_a == haber_a)
tipo: vf

enunciado: "Asiento A: Debe ${debe_a}, Haber ${haber_a}. ¿El asiento A está balanceado?"

explicacion: |
  Se comparan directamente los dos totales del mismo asiento.
```

### 13 — Un movimiento nunca se anota en una sola cuenta

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto registrar un pago en efectivo anotando sólo la salida de dinero de \"Caja\", sin registrar a qué cuenta fue ese dinero?"

explicacion: |
  Violaría la partida doble: todo movimiento necesita su contrapartida
  registrada en otra cuenta.
```

### 14 — Un asiento puede tener más de dos líneas

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un asiento contable puede tener más de dos líneas (por ejemplo, dos cuentas en el Debe y una en el Haber), siempre que el total del Debe siga igualando al total del Haber."

explicacion: |
  \"Doble\" significa \"al menos dos\", no exactamente dos líneas
  siempre.
```

### 15 — Verificar un asiento con varias líneas

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "problema"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 200) * 1000
  haber_2: random(50, 200) * 1000

respuesta: ((debe_1 + debe_2) == (haber_1 + haber_2))
tipo: vf

enunciado: "Un asiento tiene dos líneas en el Debe (${debe_1} y ${debe_2}) y dos líneas en el Haber (${haber_1} y ${haber_2}). ¿Está balanceado?"

explicacion: |
  Hay que sumar todas las líneas de cada lado antes de comparar.
```

### 16 — Ordenar pasos para armar un asiento

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos en el orden lógico para registrar un asiento contable."
opciones_explicitas:
  - "Verificar que el total del Debe sea igual al total del Haber"
  - "Identificar qué cuentas se ven afectadas por el movimiento"
  - "Anotar el importe correspondiente en el Debe o el Haber de cada cuenta"
respuesta_orden: ["Identificar qué cuentas se ven afectadas por el movimiento", "Anotar el importe correspondiente en el Debe o el Haber de cada cuenta", "Verificar que el total del Debe sea igual al total del Haber"]

explicacion: |
  Primero se identifican las cuentas, después se anotan los importes, y
  al final se verifica el balance.
```

### 17 — Verificar un asiento (con error a veces)

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  importe: random(50, 500) * 1000
  error: uno_de([0, 0, 0, 10000, -10000])
  haber_mostrado: importe + error

respuesta: (importe == haber_mostrado)
tipo: vf

enunciado: "¿Está bien registrado este asiento? Debe: ${importe}. Haber: ${haber_mostrado}."

explicacion: |
  Se comparan directamente los dos importes: si no coinciden, el
  asiento no respeta la partida doble.
```

### 18 — Completar el importe del Haber

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  importe: random(50, 500) * 1000

tipo: completar
enunciado: "Un asiento tiene ${importe} en el Debe de \"Mercadería\". Para que el asiento quede balanceado, el Haber de \"Caja\" tiene que ser: ___ = {importe}."
respuestas_validas:
  - importe

explicacion: |
  El Haber tiene que igualar exactamente al Debe.
```

### 19 — La partida doble no es un trámite burocrático

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La partida doble no es sólo un trámite formal: es lo que permite detectar errores, porque si el Debe y el Haber no coinciden en algún punto, algo está mal registrado."

explicacion: |
  Es una herramienta de control, no sólo una regla administrativa.
```

### 20 — Base del libro diario y mayor

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los asientos armados con partida doble son la base de lo que después se organiza en el libro diario y el libro mayor."

explicacion: |
  Es la conexión directa con el próximo tema.
```

### 21 — Partida doble (cierre)

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo asiento contable afecta al menos dos cuentas, y la suma del Debe siempre tiene que ser igual a la suma del Haber — es la regla de oro de la partida doble."

explicacion: |
  Es la idea central de todo el tema.
```
