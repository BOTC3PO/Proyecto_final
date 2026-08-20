# Matemática — Distribución binomial: P(X=k) (cuestionario, 20 preguntas VBLang)

> Tema: `D16`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué modela la distribución binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "vocabulario"]

enunciado: "¿Qué modela la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "La cantidad de éxitos en n intentos independientes, todos con la misma probabilidad de éxito"
  - "El tiempo que pasa hasta el próximo éxito"
  - "El promedio de un conjunto de datos ya medidos"
respuesta: "La cantidad de éxitos en n intentos independientes, todos con la misma probabilidad de éxito"

explicacion: |
  Como la cantidad de caras en varios tiros de moneda.
```

### 2 — Completar: fórmula de la binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "completar"]

tipo: completar
enunciado: "Completá: P(X=k) = C(n,k) × pᵏ × (1−p)^___."
respuestas_validas:
  - "n-k"
  - "n−k"

explicacion: |
  El exponente del complemento (1−p) es la cantidad de fracasos: n−k.
```

### 3 — Qué representa C(n,k) en la fórmula

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "combinaciones"]

enunciado: "En la fórmula binomial, ¿qué representa el factor C(n,k)?"
tipo: mc
opciones_explicitas:
  - "De cuántas formas distintas pueden caer exactamente k éxitos entre los n intentos"
  - "La probabilidad de un único intento exitoso"
  - "La cantidad total de intentos posibles"
respuesta: "De cuántas formas distintas pueden caer exactamente k éxitos entre los n intentos"

explicacion: |
  Es exactamente el mismo `C(n,k)` de `../combinaciones/`.
```

### 4 — Problema: calcular P(X=k)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 5
  p: 0.5
  k: uno_de([2, 3])

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Se tira una moneda {n} veces (p=0,5 de cara en cada tiro). ¿Cuál es la probabilidad de que salgan exactamente {k} caras (P(X={k}))?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Se combina la cantidad de formas posibles (combinatoria) con la
  probabilidad de una secuencia particular (probabilidad compuesta).
```

### 5 — Problema: binomial con p distinto de 0,5

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([4, 6])
  p: uno_de([0.2, 0.3, 0.7])
  k: uno_de([1, 2])

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Un jugador convierte penales con probabilidad p={p} en cada intento (independientes entre sí). De {n} penales pateados, ¿cuál es la probabilidad de que convierta exactamente {k}?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Se aplica la misma fórmula con la probabilidad de éxito propia de
  este escenario.
```

### 6 — Requisitos de la distribución binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "vocabulario"]

enunciado: "¿Cuáles son los tres requisitos para poder usar la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "Una cantidad fija de intentos independientes, con la misma probabilidad de éxito en cada uno, y sólo dos resultados posibles por intento"
  - "Que la cantidad de intentos sea siempre mayor a 30"
  - "Que la probabilidad de éxito cambie en cada intento"
respuesta: "Una cantidad fija de intentos independientes, con la misma probabilidad de éxito en cada uno, y sólo dos resultados posibles por intento"

explicacion: |
  Si la probabilidad cambiara de un intento a otro, la fórmula no
  aplicaría directo.
```

### 7 — Cuándo NO corresponde usar la binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "clasificar"]

enunciado: "Se sacan 3 cartas de un mazo SIN reposición, y se cuenta cuántas son ases. ¿Corresponde usar la fórmula binomial directo para este caso?"
tipo: mc
opciones_explicitas:
  - "No, porque sin reposición la probabilidad de sacar un as cambia de una extracción a la siguiente — no es constante como exige la binomial"
  - "Sí, porque cualquier conteo de 'éxitos' siempre es binomial"
respuesta: "No, porque sin reposición la probabilidad de sacar un as cambia de una extracción a la siguiente — no es constante como exige la binomial"

explicacion: |
  Es el mismo caso 'dependiente' de
  `../independencia-de-eventos-y-diagrama-de-arbol/` — rompe el
  requisito de probabilidad constante.
```

### 8 — Completar: valor esperado de la binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "completar"]

tipo: completar
enunciado: "Completá: el valor esperado de una distribución binomial es E(X) = n × ___."
respuestas_validas:
  - "p"

explicacion: |
  n intentos por la probabilidad de éxito de cada uno.
```

### 9 — Problema: calcular el valor esperado

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "intermedio"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([10, 20, 40])
  p: uno_de([0.1, 0.25, 0.5])

respuesta: redondear(n * p, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se repite un experimento {n} veces, con probabilidad de éxito p={p} en cada uno. ¿Cuál es el valor esperado de la cantidad de éxitos, E(X)?"

pasos:
  - "E(X) = {n} × {p} = {redondear(n * p, 2)}"

explicacion: |
  El valor esperado no tiene por qué ser un número entero: es un
  promedio a largo plazo.
```

### 10 — El valor esperado no tiene que ser entero

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado E(X)=n×p de una binomial no tiene por qué ser un número entero, aunque X en sí (la cantidad de éxitos observada) siempre lo sea."

explicacion: |
  Es un promedio a largo plazo, no un resultado posible puntual — por
  ejemplo, E(X)=2,5 con n=5 y p=0,5.
```

### 11 — Problema: P(X=0), ningún éxito

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([3, 4, 5])
  p: uno_de([0.2, 0.3])

respuesta: redondear((1 - p) ^ n, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con n={n} intentos y probabilidad de éxito p={p} en cada uno, ¿cuál es la probabilidad de que NO haya NINGÚN éxito (P(X=0))?"

pasos:
  - "C({n},0) = 1, así que P(X=0) = (1−{p})^{n} = {redondear((1 - p) ^ n, 4)}"

explicacion: |
  Con k=0, C(n,0)=1 y pᵏ=1, así que la fórmula se reduce a
  (1−p)ⁿ: todos los intentos fallan.
```

### 12 — Problema: P(X=n), todos éxitos

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: uno_de([3, 4, 5])
  p: uno_de([0.6, 0.8])

respuesta: redondear(p ^ n, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con n={n} intentos y probabilidad de éxito p={p} en cada uno, ¿cuál es la probabilidad de que TODOS sean éxitos (P(X={n}))?"

pasos:
  - "C({n},{n}) = 1, así que P(X={n}) = {p}^{n} = {redondear(p ^ n, 4)}"

explicacion: |
  Con k=n, C(n,n)=1 y (1−p)⁰=1, así que la fórmula se reduce a pⁿ:
  todos los intentos son éxito.
```

### 13 — Aplicación real: control de calidad

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "aplicacion"]

enunciado: "Una máquina produce piezas con un 2% de probabilidad de defecto en cada una, independiente entre piezas. Se inspecciona un lote de 50 piezas. ¿Qué distribución conviene usar para calcular la probabilidad de encontrar exactamente 3 piezas defectuosas?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial, con n=50 y p=0,02"
  - "La distribución exponencial, con λ=0,02"
  - "La distribución normal, con media 50"
respuesta: "La distribución binomial, con n=50 y p=0,02"

explicacion: |
  Cantidad fija de intentos (50 piezas), independientes, misma
  probabilidad de defecto en cada una — el caso central de la
  binomial.
```

### 14 — Relación con la genética (cuadro de Punnett)

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "aplicacion"]

enunciado: "Una pareja tiene 4 hijos. Cada hijo tiene, independientemente, una probabilidad de 1/4 de heredar un genotipo recesivo particular (según el cuadro de Punnett). ¿Qué distribución conviene usar para calcular la probabilidad de que exactamente 2 de los 4 hijos lo hereden?"
tipo: mc
opciones_explicitas:
  - "La distribución binomial, con n=4 y p=1/4"
  - "La distribución de Poisson, con λ=4"
respuesta: "La distribución binomial, con n=4 y p=1/4"

explicacion: |
  Es la misma probabilidad compuesta de `../probabilidad-compuesta/`
  aplicada a genética, ahora generalizada a 'exactamente k de n'.
```

### 15 — Problema: binomial aplicada a genética

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 4
  p: 0.25
  k: 2

respuesta: redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Con {n} hijos y probabilidad p={p} de heredar el alelo recesivo cada uno (independiente), ¿cuál es la probabilidad de que exactamente {k} lo hereden?"

pasos:
  - "C({n},{k}) = {combinations(n, k)}"
  - "P(X={k}) = {combinations(n, k)} × {p}^{k} × {1-p}^{n-k} = {redondear(combinations(n, k) * p ^ k * (1 - p) ^ (n - k), 4)}"

explicacion: |
  Aplicación directa de la binomial a un caso genético con más de dos
  hijos.
```

### 16 — La suma de todas las P(X=k) da 1

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de P(X=0) + P(X=1) + ... + P(X=n) (para todos los valores posibles de k) siempre da exactamente 1, igual que en cualquier distribución de variable aleatoria discreta."

explicacion: |
  Es la misma propiedad general de `../variable-aleatoria-discreta-continua/`.
```

### 17 — Problema: comparar P(X=k) con distinto p

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "problema"]

variables:
  n: 5
  k: 3
  p_bajo: 0.2
  p_alto: 0.7

respuesta: (combinations(n, k) * p_alto ^ k * (1 - p_alto) ^ (n - k)) > (combinations(n, k) * p_bajo ^ k * (1 - p_bajo) ^ (n - k))
tipo: vf

enunciado: "Con n={n} y k={k}, ¿P(X={k}) es MAYOR cuando p={p_alto} que cuando p={p_bajo}?"

explicacion: |
  Con una probabilidad de éxito más alta, es más probable observar
  una cantidad alta de éxitos como k={k}.
```

### 18 — Binomial es discreta

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["binomial", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La distribución binomial es discreta, porque X (la cantidad de éxitos) siempre es un número entero entre 0 y n."

explicacion: |
  Es el ejemplo central de variable discreta usado en
  `../variable-aleatoria-discreta-continua/`.
```

### 19 — Binomial como límite hacia Poisson

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "avanzado"
  tags: ["binomial", "poisson"]

enunciado: "¿Qué distribución se obtiene como caso límite de la binomial cuando n es muy grande y p es muy chico, con n×p constante?"
tipo: mc
opciones_explicitas:
  - "La distribución de Poisson"
  - "La distribución normal"
  - "La distribución exponencial"
respuesta: "La distribución de Poisson"

explicacion: |
  Es la conexión mencionada en `../distribucion-de-poisson/`, entre
  'muchos intentos con probabilidad chica' y 'conteo de eventos
  raros'.
```

### 20 — Cierre: para qué sirve la distribución binomial

```
metadata:
  materia: "matematicas"
  tema: "distribucion_binomial"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la distribución binomial?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de obtener exactamente k éxitos en n intentos independientes, todos con la misma probabilidad de éxito"
  - "Para calcular el tiempo de espera hasta el próximo evento"
  - "Para calcular el promedio de un conjunto de datos ya medidos"
respuesta: "Para calcular la probabilidad de obtener exactamente k éxitos en n intentos independientes, todos con la misma probabilidad de éxito"

explicacion: |
  Combina directo la combinatoria de `../combinaciones/` con la
  probabilidad compuesta de `../probabilidad-compuesta/`.
```
