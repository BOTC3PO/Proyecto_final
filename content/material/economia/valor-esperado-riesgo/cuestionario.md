# Economía — Valor esperado de una inversión y riesgo (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmulas: `E(X) = Σ pᵢ ×
> resultadoᵢ` (valor esperado), `Varianza = Σ pᵢ × (resultadoᵢ - E(X))²`
> y `Desvío estándar = √Varianza` (riesgo).

---

### 1 — Qué es el valor esperado

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

enunciado: "¿Qué es el valor esperado de una inversión con varios resultados posibles?"
tipo: mc
opciones_explicitas:
  - "El promedio de los resultados posibles, ponderado por la probabilidad de cada uno"
  - "El mejor resultado posible entre todos los escenarios"
  - "El resultado que va a ocurrir con seguridad"
respuesta: "El promedio de los resultados posibles, ponderado por la probabilidad de cada uno"

explicacion: |
  No es lo que "seguro" va a pasar: es un promedio pesado según qué tan
  probable es cada escenario.
```

### 2 — Las probabilidades suman 1

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las probabilidades de todos los escenarios posibles de una inversión siempre suman 1 (o 100%)."

explicacion: |
  Si faltara algún escenario posible, o si sumaran más de 1, no serían
  probabilidades válidas.
```

### 3 — Calcular el valor esperado

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "calculo"]

variables:
  prob_exito: random(20, 90)
  ganancia: random(10, 80) * 1000
  perdida: random(10, 80) * 1000

respuesta: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida
tipo: input
tolerancia_abs: 1

enunciado: "Una inversión tiene {prob_exito}% de probabilidad de ganar ${ganancia}, y {100 - prob_exito}% de probabilidad de perder ${perdida}. ¿Cuál es el valor esperado?"

pasos:
  - "E(X) = {prob_exito/100} × {ganancia} - {1 - prob_exito/100} × {perdida}"

explicacion: |
  Se multiplica cada resultado por su probabilidad, y se suman (la
  pérdida entra restando).
```

### 4 — Mismo valor esperado, distinto riesgo

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos inversiones pueden tener exactamente el mismo valor esperado y, aun así, tener niveles de riesgo muy distintos."

explicacion: |
  El valor esperado resume el promedio, pero no dice nada sobre qué tan
  dispersos están los resultados posibles alrededor de ese promedio.
```

### 5 — Qué es el riesgo en este contexto

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

enunciado: "En este contexto, ¿qué es el riesgo de una inversión?"
tipo: mc
opciones_explicitas:
  - "Qué tan dispersos (lejos del valor esperado) pueden estar los resultados reales"
  - "La probabilidad de que la inversión gane plata"
  - "El valor esperado con el signo cambiado"
respuesta: "Qué tan dispersos (lejos del valor esperado) pueden estar los resultados reales"

explicacion: |
  Una inversión sin dispersión (siempre da el mismo resultado) no tiene
  riesgo, sin importar cuál sea el valor esperado.
```

### 6 — El ejemplo clásico: garantizado vs. 50/50

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "problema"]

variables:
  x: random(5, 50) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Inversión A paga siempre ${x}, garantizado. Inversión B tiene 50% de probabilidad de pagar ${2 * x} y 50% de probabilidad de pagar $0. ¿Las dos inversiones tienen el mismo valor esperado?"

pasos:
  - "E(A) = {x}"
  - "E(B) = 0,5 × {2 * x} + 0,5 × 0 = {0.5 * (2 * x)}"

explicacion: |
  Ambas dan un valor esperado de ${x} — el promedio ponderado es
  idéntico, aunque los resultados posibles sean muy distintos.
```

### 7 — La inversión B es más riesgosa

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "problema"]

variables:
  x: random(5, 50) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Con Inversión A (siempre ${x}, garantizado) e Inversión B (50% de ${2 * x}, 50% de $0), ¿B es más riesgosa que A, aunque tengan el mismo valor esperado?"

explicacion: |
  En B, el resultado real puede terminar siendo el doble del esperado o
  cero; en A, el resultado siempre es exactamente el esperado. Esa
  dispersión es, justamente, el riesgo.
```

### 8 — Calcular el desvío estándar

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["riesgo", "calculo"]

variables:
  p: random(20, 80)
  ganancia: random(10, 60) * 1000
  perdida: random(10, 60) * 1000
  esperado: (p / 100) * ganancia - (1 - p / 100) * perdida
  varianza: (p / 100) * (ganancia - esperado) ^ 2 + (1 - p / 100) * (-perdida - esperado) ^ 2

respuesta: sqrt(varianza)
tipo: input
tolerancia_abs: 5

enunciado: "Una inversión tiene {p}% de probabilidad de ganar ${ganancia}, y {100 - p}% de probabilidad de perder ${perdida} (valor esperado: ${redondear(esperado, 2)}). ¿Cuál es el desvío estándar, como medida de riesgo?"

pasos:
  - "Varianza = {p/100} × (ganancia - E(X))² + {1 - p/100} × (-pérdida - E(X))²"
  - "Desvío estándar = √Varianza"

explicacion: |
  El desvío estándar es la raíz cuadrada de la varianza: promedia, según
  probabilidad, qué tan lejos está cada resultado posible del valor
  esperado.
```

### 9 — Qué mide el desvío estándar

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

enunciado: "¿Qué mide el desvío estándar de una inversión?"
tipo: mc
opciones_explicitas:
  - "Qué tan dispersos están los resultados posibles alrededor del valor esperado"
  - "El resultado más probable de todos"
  - "La diferencia entre el mejor resultado y el valor esperado, nada más"
respuesta: "Qué tan dispersos están los resultados posibles alrededor del valor esperado"

explicacion: |
  Es una medida de riesgo: cuanto más alto, más lejos pueden terminar
  los resultados reales del promedio esperado.
```

### 10 — Desvío estándar cero significa sin riesgo

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una inversión con desvío estándar igual a 0 (como un plazo fijo garantizado a tasa fija) no tiene riesgo: siempre da el mismo resultado."

explicacion: |
  Sin dispersión de resultados posibles, no hay incertidumbre sobre lo
  que va a pasar.
```

### 11 — Mayor desvío estándar, mayor riesgo

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el desvío estándar de una inversión, mayor es su riesgo."

explicacion: |
  Es, justamente, lo que mide el desvío estándar: dispersión de los
  resultados posibles.
```

### 12 — Comparar el riesgo de dos inversiones

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["riesgo", "comparacion"]

variables:
  p_a: random(40, 60)
  ganancia_a: random(20, 30) * 1000
  perdida_a: random(20, 30) * 1000
  esperado_a: (p_a / 100) * ganancia_a - (1 - p_a / 100) * perdida_a
  varianza_a: (p_a / 100) * (ganancia_a - esperado_a) ^ 2 + (1 - p_a / 100) * (-perdida_a - esperado_a) ^ 2
  desvio_a: sqrt(varianza_a)
  p_b: random(10, 30)
  ganancia_b: random(60, 100) * 1000
  perdida_b: random(60, 100) * 1000
  esperado_b: (p_b / 100) * ganancia_b - (1 - p_b / 100) * perdida_b
  varianza_b: (p_b / 100) * (ganancia_b - esperado_b) ^ 2 + (1 - p_b / 100) * (-perdida_b - esperado_b) ^ 2
  desvio_b: sqrt(varianza_b)

respuesta: (desvio_b > desvio_a)
tipo: vf

enunciado: "Inversión A: {p_a}% de ganar ${ganancia_a} o {100 - p_a}% de perder ${perdida_a}. Inversión B: {p_b}% de ganar ${ganancia_b} o {100 - p_b}% de perder ${perdida_b}. ¿La inversión B es más riesgosa que la A (mayor desvío estándar)?"

explicacion: |
  Hay que calcular el desvío estándar de cada una y comparar — ni la
  probabilidad ni los montos solos alcanzan para saber cuál es más
  riesgosa.
```

### 13 — Mayor riesgo no garantiza mayor valor esperado

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que una inversión sea más riesgosa (mayor desvío estándar) no garantiza que tenga un valor esperado más alto."

explicacion: |
  Son dos medidas distintas: una inversión puede ser muy riesgosa y
  tener, además, un valor esperado bajo o incluso negativo.
```

### 14 — La relación riesgo-retorno

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En general, las inversiones con más riesgo tienden a ofrecer, en promedio, un valor esperado más alto que las de bajo riesgo — nadie asumiría más riesgo sin la posibilidad de una recompensa mayor."

explicacion: |
  Es la relación riesgo-retorno: un plazo fijo (bajo riesgo) suele
  ofrecer un rendimiento esperado menor que una acción (más riesgo).
```

### 15 — Despejar la probabilidad de éxito

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["valor_esperado", "calculo"]

variables:
  ganancia: random(20, 80) * 1000
  perdida: random(20, 80) * 1000
  prob_exito: random(30, 80)
  esperado: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida

respuesta: prob_exito
tipo: input
tolerancia_abs: 0.5

enunciado: "Una inversión puede ganar ${ganancia} o perder ${perdida}, y su valor esperado es ${redondear(esperado, 2)}. ¿Qué probabilidad de ganar (en %) tiene esa inversión?"

explicacion: |
  Se despeja la probabilidad de la ecuación del valor esperado, con los
  dos resultados posibles ya conocidos.
```

### 16 — El seguro como valor esperado negativo

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Contratar un seguro suele implicar un valor esperado ligeramente negativo para quien lo contrata (paga, en promedio, un poco más de lo que espera cobrar), a cambio de reducir su riesgo de una pérdida grande e inesperada."

explicacion: |
  Es la lectura inversa del valor esperado: se paga una prima fija por
  transferirle el riesgo a otro (la aseguradora).
```

### 17 — Diversificar reduce el riesgo

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Diversificar (repartir el dinero en varias inversiones en vez de una sola) es una forma de reducir el riesgo total, sin necesariamente reducir el valor esperado."

explicacion: |
  Es uno de los pocos "beneficios gratis" en finanzas: bajar el riesgo
  sin sacrificar el promedio esperado.
```

### 18 — Ordenar inversiones por riesgo

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["riesgo", "orden"]

tipo: ordenar
enunciado: "Ordená estas inversiones de menor a mayor riesgo típico (menor a mayor desvío estándar de sus resultados posibles)."
opciones_explicitas:
  - "Acciones de una sola empresa"
  - "Plazo fijo a tasa fija"
  - "Fondo diversificado de varias empresas"
respuesta_orden: ["Plazo fijo a tasa fija", "Fondo diversificado de varias empresas", "Acciones de una sola empresa"]

explicacion: |
  El plazo fijo casi no tiene dispersión de resultados; diversificar en
  varias empresas reduce el riesgo frente a apostar todo a una sola.
```

### 19 — Verificar un cálculo de valor esperado (con error a veces)

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "verificacion"]

variables:
  prob_exito: random(20, 90)
  ganancia: random(10, 80) * 1000
  perdida: random(10, 80) * 1000
  correcto: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida
  error: uno_de([0, 0, 0, 2000, -2000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {prob_exito}% de ganar ${ganancia}, {100 - prob_exito}% de perder ${perdida}, valor esperado informado: ${redondear(mostrado, 2)}."

explicacion: |
  Se vuelve a calcular E(X) y se compara con el valor informado.
```

### 20 — Completar la pérdida dado el valor esperado

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["valor_esperado"]

variables:
  prob_exito: random(30, 80)
  ganancia: random(20, 80) * 1000
  perdida: random(20, 80) * 1000
  esperado: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida

tipo: completar
enunciado: "Una inversión tiene {prob_exito}% de probabilidad de ganar ${ganancia}, y {100 - prob_exito}% de probabilidad de perder cierto monto. Su valor esperado es ${redondear(esperado, 2)}. Completá: ___ (monto de la pérdida) = {perdida}."
respuestas_validas:
  - perdida

explicacion: |
  Se despeja el monto de la pérdida de la ecuación del valor esperado,
  con la probabilidad y la ganancia ya conocidas.
```

### 21 — Valor esperado no es una garantía

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado de una inversión no es lo que \"seguro\" vas a ganar: es un promedio ponderado entre resultados posibles que pueden no ocurrir nunca exactamente así."

explicacion: |
  En el ejemplo clásico (50% de ganar el doble, 50% de perder todo), el
  resultado real nunca es el valor esperado — siempre es uno de los dos
  extremos.
```

### 22 — Valor esperado y riesgo (cierre)

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado resume el promedio ponderado por probabilidad de los resultados posibles; el riesgo mide qué tan dispersos pueden estar esos resultados reales alrededor de ese promedio — son dos preguntas distintas sobre la misma inversión."

explicacion: |
  Es la idea central de todo el tema.
```
