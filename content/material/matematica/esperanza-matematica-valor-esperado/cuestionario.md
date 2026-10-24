# Matemática — Esperanza matemática: valor esperado E(X) (cuestionario, 20 preguntas VBLang)

> Tema: `D17`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el valor esperado

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "vocabulario"]

enunciado: "¿Qué es el valor esperado E(X) de una variable aleatoria?"
tipo: mc
opciones_explicitas:
  - "Un promedio ponderado de los valores posibles, donde cada valor se pondera por su propia probabilidad de ocurrir"
  - "El valor más probable entre todos los posibles"
  - "El promedio simple de los valores posibles, sin considerar sus probabilidades"
respuesta: "Un promedio ponderado de los valores posibles, donde cada valor se pondera por su propia probabilidad de ocurrir"

explicacion: |
  A diferencia de la media simple, cada valor pesa según qué tan
  probable es.
```

### 2 — Completar: fórmula del valor esperado

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "completar"]

tipo: completar
enunciado: "Completá: E(X) = x₁×P(x₁) + x₂×P(x₂) + ... + xₙ×___."
respuestas_validas:
  - "P(xₙ)"
  - "P(xn)"

explicacion: |
  Cada valor posible se multiplica por su propia probabilidad, y se
  suman todos los términos.
```

### 3 — Problema: calcular E(X) con 3 valores

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  v1: random(1, 3)
  v2: random(4, 6)
  v3: random(7, 9)

respuesta: redondear(0.3 * v1 + 0.5 * v2 + 0.2 * v3, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "X tiene distribución: P(X={v1})=0,3, P(X={v2})=0,5, P(X={v3})=0,2. ¿Cuánto vale E(X)?"

pasos:
  - "E(X) = {v1}×0,3 + {v2}×0,5 + {v3}×0,2"
  - "= {redondear(v1 * 0.3, 2)} + {redondear(v2 * 0.5, 2)} + {redondear(v3 * 0.2, 2)} = {redondear(0.3 * v1 + 0.5 * v2 + 0.2 * v3, 2)}"

explicacion: |
  Se multiplica cada valor por su probabilidad y se suman los
  resultados.
```

### 4 — E(X) no tiene que ser uno de los valores posibles

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado E(X) no tiene por qué coincidir con ninguno de los valores que X puede tomar realmente — es un promedio a largo plazo, no un resultado posible puntual."

explicacion: |
  Por ejemplo, E(X)=4,7 aunque X sólo pueda valer 2, 5 u 8.
```

### 5 — Problema: valor esperado de un juego de azar

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo: uno_de([50, 100])
  premio: uno_de([300, 500])
  p_ganar: uno_de([0.1, 0.15])

respuesta: redondear(premio * p_ganar - costo, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un juego cuesta ${costo} jugar y paga ${premio} con probabilidad {p_ganar} (y $0 el resto de las veces). ¿Cuál es el valor esperado de la GANANCIA neta de jugar (premio esperado menos el costo)?"

pasos:
  - "Premio esperado = {premio} × {p_ganar} = {redondear(premio * p_ganar, 2)}"
  - "Ganancia esperada = {redondear(premio * p_ganar, 2)} − {costo} = {redondear(premio * p_ganar - costo, 2)}"

explicacion: |
  Si el resultado es negativo, el juego es desfavorable en promedio
  para quien juega, aunque en una partida puntual se pueda ganar.
```

### 6 — Interpretar un valor esperado negativo

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "aplicacion"]

enunciado: "Si el valor esperado de la ganancia de un juego de azar da negativo, ¿qué significa?"
tipo: mc
opciones_explicitas:
  - "Que, en promedio y a largo plazo, quien juega repetidamente pierde dinero — aunque una partida individual pueda ganar"
  - "Que es matemáticamente imposible ganar en ese juego"
  - "Que el juego siempre hace perder en cada partida, sin excepción"
respuesta: "Que, en promedio y a largo plazo, quien juega repetidamente pierde dinero — aunque una partida individual pueda ganar"

explicacion: |
  Es la lógica detrás de cualquier casino: el valor esperado del
  jugador es negativo, aunque partidas puntuales puedan ganar.
```

### 7 — Problema: comparar dos apuestas

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  premio_a: 1000
  p_a: 0.05
  premio_b: 200
  p_b: 0.3

respuesta: (premio_a * p_a) > (premio_b * p_b)
tipo: vf

enunciado: "Apuesta A paga ${premio_a} con probabilidad {p_a}. Apuesta B paga ${premio_b} con probabilidad {p_b}. Sin considerar el costo de entrada, ¿el valor esperado del premio de la Apuesta A es MAYOR que el de la Apuesta B?"

explicacion: |
  E(A) = {premio_a}×{p_a} = {premio_a * p_a}; E(B) = {premio_b}×{p_b}
  = {premio_b * p_b} — comparar el producto, no el premio ni la
  probabilidad por separado.
```

### 8 — Relación con la distribución binomial

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "binomial"]

enunciado: "¿Qué relación tiene la fórmula E(X)=n×p de la distribución binomial con el valor esperado en general?"
tipo: mc
opciones_explicitas:
  - "Es el mismo promedio ponderado general, aplicado al caso particular de una variable que sólo puede tomar valores enteros de 0 a n"
  - "No tiene ninguna relación, son fórmulas completamente distintas"
  - "E(X)=n×p sólo aplica quando la variable es continua"
respuesta: "Es el mismo promedio ponderado general, aplicado al caso particular de una variable que sólo puede tomar valores enteros de 0 a n"

explicacion: |
  `../distribucion-binomial/` adelantó este resultado sin
  demostrarlo — es un caso particular de esta fórmula más general.
```

### 9 — Problema: dos valores posibles

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "problema"]

variables:
  valor1: uno_de([10, 20])
  p1: uno_de([0.4, 0.6])
  valor2: uno_de([50, 80])

respuesta: redondear(valor1 * p1 + valor2 * (1 - p1), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "X toma el valor {valor1} con probabilidad {p1}, y el valor {valor2} con la probabilidad restante. ¿Cuánto vale E(X)?"

pasos:
  - "P({valor2}) = 1 − {p1} = {redondear(1 - p1, 2)}"
  - "E(X) = {valor1}×{p1} + {valor2}×{redondear(1 - p1, 2)} = {redondear(valor1 * p1 + valor2 * (1 - p1), 2)}"

explicacion: |
  Con sólo dos valores posibles, sus probabilidades deben sumar 1.
```

### 10 — Aplicación real: cuánto cobra una aseguradora

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "aplicacion"]

enunciado: "¿Cómo usa una aseguradora el valor esperado para decidir cuánto cobrar por una póliza?"
tipo: mc
opciones_explicitas:
  - "Calcula el valor esperado del siniestro (costo posible × probabilidad de que ocurra) y cobra por encima de ese valor, para tener ganancia en promedio"
  - "Cobra siempre el mismo monto fijo, sin ningún cálculo de probabilidad"
  - "El valor esperado no tiene ninguna aplicación en seguros"
respuesta: "Calcula el valor esperado del siniestro (costo posible × probabilidad de que ocurra) y cobra por encima de ese valor, para tener ganancia en promedio"

explicacion: |
  Es la misma lógica de `../../economia/valor-esperado-riesgo/`,
  aplicada a seguros en particular.
```

### 11 — Problema: valor esperado con tres resultados de distinto signo

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  ganancia: uno_de([200, 300])
  p_ganancia: 0.4
  perdida: uno_de([100, 150])
  p_perdida: 0.5

respuesta: redondear(ganancia * p_ganancia - perdida * p_perdida, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una inversión da una ganancia de ${ganancia} con probabilidad {p_ganancia}, una pérdida de ${perdida} con probabilidad {p_perdida}, y queda igual el resto de las veces (probabilidad {redondear(1 - p_ganancia - p_perdida, 2)}, resultado $0). ¿Cuál es el valor esperado del resultado?"

pasos:
  - "E(X) = {ganancia}×{p_ganancia} + (−{perdida})×{p_perdida} + 0×{redondear(1 - p_ganancia - p_perdida, 2)}"
  - "= {redondear(ganancia * p_ganancia, 2)} − {redondear(perdida * p_perdida, 2)} = {redondear(ganancia * p_ganancia - perdida * p_perdida, 2)}"

explicacion: |
  Los valores negativos (pérdidas) se ponderan igual que los
  positivos: por su propia probabilidad.
```

### 12 — El valor esperado pondera por probabilidad, no cuenta parejo

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la media simple de `../media-mediana-y-moda/` (que pesa todos los datos por igual), el valor esperado pesa cada resultado posible según su propia probabilidad de ocurrir."

explicacion: |
  Es la diferencia central entre 'promedio de datos ya medidos' y
  'promedio ponderado de resultados posibles antes de que ocurran'.
```

### 13 — Problema: comparar valor esperado de dos seguros

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo_siniestro: 10000
  p_siniestro: uno_de([0.02, 0.05])

respuesta: redondear(costo_siniestro * p_siniestro, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un siniestro cuesta en promedio ${costo_siniestro}, y ocurre con probabilidad {p_siniestro} en un año. ¿Cuál es el valor esperado del costo anual del siniestro (lo mínimo que debería cobrar la aseguradora, sin ganancia)?"

pasos:
  - "E(costo) = {costo_siniestro} × {p_siniestro} = {redondear(costo_siniestro * p_siniestro, 2)}"

explicacion: |
  Cualquier prima por debajo de este valor haría perder dinero a la
  aseguradora, en promedio, a largo plazo.
```

### 14 — Valor esperado de una variable con muchos valores posibles

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el valor esperado de una variable aleatoria con muchos valores posibles, hay que sumar TODOS los términos (cada valor por su probabilidad), no sólo el valor más probable."

explicacion: |
  Ignorar los demás valores posibles subestima o distorsiona el
  promedio real.
```

### 15 — Problema: valor esperado de un dado

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "intermedio"
  tags: ["esperanza", "problema"]

respuesta: redondear((1 + 2 + 3 + 4 + 5 + 6) / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un dado de 6 caras tiene la misma probabilidad (1/6) para cada resultado del 1 al 6. ¿Cuál es el valor esperado del resultado de un tiro?"

pasos:
  - "E(X) = 1×1/6 + 2×1/6 + 3×1/6 + 4×1/6 + 5×1/6 + 6×1/6"
  - "= (1+2+3+4+5+6)/6 = {redondear((1 + 2 + 3 + 4 + 5 + 6) / 6, 3)}"

explicacion: |
  Cuando todos los resultados tienen la misma probabilidad, el valor
  esperado coincide con el promedio simple.
```

### 16 — Aplicación real: decidir entre dos inversiones

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["esperanza", "aplicacion"]

enunciado: "¿Cómo ayuda el valor esperado a decidir entre dos inversiones de riesgo distintas?"
tipo: mc
opciones_explicitas:
  - "Comparando el promedio ponderado del retorno posible de cada una, aunque también haga falta mirar la dispersión (riesgo) alrededor de ese promedio"
  - "El valor esperado garantiza el resultado exacto de la inversión, sin ningún riesgo"
  - "El valor esperado no sirve para decisiones financieras"
respuesta: "Comparando el promedio ponderado del retorno posible de cada una, aunque también haga falta mirar la dispersión (riesgo) alrededor de ese promedio"

explicacion: |
  Es exactamente el enfoque de `../../economia/valor-esperado-riesgo/`:
  valor esperado Y dispersión, no sólo uno de los dos.
```

### 17 — Problema: valor esperado con probabilidades desiguales

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  v1: 100
  p1: 0.7
  v2: 500
  p2: 0.25
  v3: 2000
  p3: 0.05

respuesta: redondear(v1 * p1 + v2 * p2 + v3 * p3, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un premio de lotería da ${v1} con probabilidad {p1}, ${v2} con probabilidad {p2}, y ${v3} con probabilidad {p3}. ¿Cuál es el valor esperado del premio?"

pasos:
  - "E(X) = {v1}×{p1} + {v2}×{p2} + {v3}×{p3}"
  - "= {redondear(v1 * p1, 2)} + {redondear(v2 * p2, 2)} + {redondear(v3 * p3, 2)} = {redondear(v1 * p1 + v2 * p2 + v3 * p3, 2)}"

explicacion: |
  Aunque el premio grande (${v3}) sea llamativo, su probabilidad
  chica ({p3}) hace que aporte relativamente poco al valor esperado
  total.
```

### 18 — El valor esperado no predice un resultado puntual

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado describe el promedio a largo plazo de MUCHAS repeticiones, no predice el resultado de una única repetición puntual del experimento."

explicacion: |
  Por eso un juego con valor esperado negativo puede, en una partida
  puntual, dar ganancia igual.
```

### 19 — Problema: juego justo (valor esperado cero)

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "avanzado"
  tags: ["esperanza", "problema"]

variables:
  costo: 20
  p_ganar: 0.2

respuesta: costo / p_ganar
tipo: input

enunciado: "Un juego cuesta ${costo} jugar y sólo paga premio (y nada más) con probabilidad {p_ganar}. ¿Cuánto debería ser el premio para que el juego sea 'justo' (valor esperado de la ganancia neta = 0)?"

pasos:
  - "premio × {p_ganar} − {costo} = 0"
  - "premio = {costo} / {p_ganar} = {costo / p_ganar}"

explicacion: |
  Un juego 'justo' es aquel donde, en promedio, ni la casa ni el
  jugador ganan ni pierden dinero.
```

### 20 — Cierre: para qué sirve el valor esperado

```
metadata:
  materia: "matematicas"
  tema: "esperanza_matematica_valor_esperado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el valor esperado?"
tipo: mc
opciones_explicitas:
  - "Para tomar decisiones racionales bajo incertidumbre, resumiendo en un solo número el resultado promedio esperado de una situación azarosa"
  - "Para predecir con certeza el resultado de un único evento futuro"
  - "Sólo se usa en juegos de casino, sin otras aplicaciones"
respuesta: "Para tomar decisiones racionales bajo incertidumbre, resumiendo en un solo número el resultado promedio esperado de una situación azarosa"

explicacion: |
  Es la base de seguros, inversiones y cualquier decisión que
  involucre azar y consecuencias medibles.
```
