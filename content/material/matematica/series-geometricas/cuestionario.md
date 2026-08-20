# Matemática — Series geométricas (cuestionario, 26 preguntas VBLang)

> Tema puente a Álgebra (`A11P2`). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una sucesión geométrica

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Qué es una sucesión geométrica?"
tipo: mc
opciones_explicitas:
  - "Una lista de números donde siempre se multiplica por la misma razón para pasar al siguiente"
  - "Una lista de números donde siempre se suma la misma cantidad"
  - "Una lista de números al azar"
respuesta: "Una lista de números donde siempre se multiplica por la misma razón para pasar al siguiente"

explicacion: |
  Esa cantidad fija por la que se multiplica se llama razón (r).
```

### 2 — Calcular un término usando la fórmula

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 6)

respuesta: a1 * (r ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y razón r = {r}, ¿cuánto vale a{n}?"

pasos:
  - "aₙ = a₁ × r^(n−1) = {a1} × {r}^{n - 1} = {a1} × {r ^ (n - 1)} = {a1 * (r ^ (n - 1))}"

explicacion: |
  Se aplica la fórmula del término general: multiplicar el primer
  término por la razón elevada a (n−1).
```

### 3 — Calcular un término más lejano

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 5)
  r: 2
  n: random(6, 10)

respuesta: a1 * (r ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y razón r = {r}, ¿cuánto vale a{n}?"

explicacion: |
  El crecimiento geométrico se nota más cuanto más lejano es el término.
```

### 4 — Hallar la razón

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 6)
  a2: a1 * r

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica, dos términos consecutivos son {a1} y {a2}. ¿Cuál es la razón?"

explicacion: |
  La razón es el término siguiente dividido por el anterior.
```

### 5 — Reconocer una sucesión geométrica

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a3: a2 * r
  a4: a3 * r

respuesta: verdadero
tipo: vf

enunciado: "¿Es geométrica la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La razón entre cada par de términos consecutivos es siempre {r}.
```

### 6 — Reconocer que NO es geométrica

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a3: a2 * r
  a4: a3 * r + 1

respuesta: falso
tipo: vf

enunciado: "¿Es geométrica la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  Los primeros pares mantienen razón {r}, pero el último par rompe esa
  proporción: no es geométrica.
```

### 7 — Diferencia entre sucesión aritmética y geométrica

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una sucesión aritmética y una geométrica?"
tipo: mc
opciones_explicitas:
  - "La aritmética suma siempre la misma diferencia; la geométrica multiplica siempre por la misma razón"
  - "No hay ninguna diferencia, son lo mismo"
  - "La geométrica sólo sirve para figuras geométricas"
respuesta: "La aritmética suma siempre la misma diferencia; la geométrica multiplica siempre por la misma razón"

explicacion: |
  Son dos formas distintas de generar el siguiente término.
```

### 8 — Suma de una serie geométrica finita

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: 2
  n: random(3, 8)

respuesta: a1 * ((r ^ n) - 1) / (r - 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión geométrica con a₁ = {a1} y r = {r}."

pasos:
  - "Sₙ = a₁ × (rⁿ−1) ÷ (r−1) = {a1} × ({r}^{n}−1) ÷ ({r}−1) = {a1 * ((r ^ n) - 1) / (r - 1)}"

explicacion: |
  Se aplica la fórmula de la suma de una serie geométrica finita.
```

### 9 — Suma con otra razón

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 5)
  r: 3
  n: random(3, 6)

respuesta: a1 * ((r ^ n) - 1) / (r - 1)
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión geométrica con a₁ = {a1} y r = {r}."

explicacion: |
  El procedimiento es el mismo con cualquier razón (distinta de 1).
```

### 10 — Verificar una suma (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "verificacion"]

variables:
  a1: random(1, 10)
  r: 2
  n: random(3, 6)
  correcto: a1 * ((r ^ n) - 1) / (r - 1)
  error: uno_de([0, 0, 0, a1, -a1])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculada esta suma? Los primeros {n} términos (a₁={a1}, r={r}) suman {mostrado}."

explicacion: |
  Se vuelve a aplicar la fórmula y se compara.
```

### 11 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 6)
  correcto: a1 * (r ^ (n - 1))

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 * r * n
  - a1 + (r ^ (n - 1))

enunciado: "En una sucesión geométrica con a₁={a1}, r={r}, ¿cuánto vale a{n}?"

explicacion: |
  Las otras opciones confunden multiplicar por r elevado al exponente con
  multiplicar por r y n, o mezclan suma con potencia.
```

### 12 — Completar el término que falta

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  a2: a1 * r
  a4: a1 * (r ^ 3)

tipo: completar
enunciado: "Completá el término que falta: {a1}, {a2}, ___, {a4}."
respuestas_validas:
  - a1 * (r ^ 2)

explicacion: |
  El término que falta sigue multiplicando por la misma razón r.
```

### 13 — Problema: población que se duplica

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "problema"]

variables:
  inicial: random(2, 20)
  horas: random(3, 8)

respuesta: inicial * (2 ^ horas)
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {inicial} bacterias se duplica cada hora. ¿Cuántas bacterias hay después de {horas} horas?"

pasos:
  - "Es una sucesión geométrica con r=2: {inicial} × 2^{horas} = {inicial * (2 ^ horas)}"

explicacion: |
  Duplicarse cada hora es multiplicar por 2 en cada paso: razón
  geométrica r=2.
```

### 14 — Problema: interés compuesto simple

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "problema"]

variables:
  capital: random(1000, 5000)
  periodos: random(2, 5)

respuesta: capital * (1.1 ^ periodos)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un capital de ${capital} crece un 10% cada período. ¿Cuánto queda después de {periodos} períodos?"

pasos:
  - "Cada período se multiplica por 1,1: {capital} × 1,1^{periodos} = {capital * (1.1 ^ periodos)}"

explicacion: |
  El interés compuesto es, exactamente, una sucesión geométrica con razón
  (1 + tasa).
```

### 15 — Problema: rebote de una pelota

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "problema"]

variables:
  altura_inicial: random(100, 500)
  rebotes: random(2, 4)

respuesta: altura_inicial * (0.5 ^ rebotes)
tipo: input
tolerancia_abs: 0.1

enunciado: "Una pelota cae desde {altura_inicial} cm, y en cada rebote alcanza la mitad de la altura anterior. ¿A qué altura llega en el rebote número {rebotes}?"

pasos:
  - "Razón r=0,5: {altura_inicial} × 0,5^{rebotes} = {altura_inicial * (0.5 ^ rebotes)}"

explicacion: |
  Con razón menor a 1, la sucesión geométrica decrece en vez de crecer.
```

### 16 — Serie geométrica con razón fraccionaria

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(50, 200)
  n: random(2, 4)

respuesta: a1 * (0.5 ^ (n - 1))
tipo: input
tolerancia_abs: 0.1

enunciado: "En una sucesión geométrica con a₁ = {a1} y r = 0,5, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula funciona igual con razones menores a 1: el resultado va
  bajando en vez de subir.
```

### 17 — Crecimiento exponencial vs. lineal

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con el mismo punto de partida, una sucesión geométrica (con razón mayor a 1) termina superando a una aritmética, sin importar cuán grande sea la diferencia de la aritmética."

explicacion: |
  El crecimiento exponencial siempre "gana" al lineal a largo plazo,
  aunque al principio la aritmética pueda ir adelante.
```

### 18 — La razón se mantiene constante

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una sucesión geométrica, la razón entre cualquier par de términos consecutivos es siempre la misma."

explicacion: |
  Es la propia definición de sucesión geométrica.
```

### 19 — Ordenar términos de una sucesión geométrica

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "orden"]

tipo: ordenar
enunciado: "Ordená estos términos de una sucesión geométrica (a₁=2, r=3) de menor a mayor."
opciones_explicitas:
  - "54"
  - "2"
  - "18"
  - "6"
respuesta_orden: ["2", "6", "18", "54"]

explicacion: |
  2, 2×3=6, 6×3=18, 18×3=54: con razón mayor a 1, ya están en orden
  creciente por cómo se construyen.
```

### 20 — Hallar el primer término

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas"]

variables:
  a1: random(1, 10)
  r: random(2, 4)
  n: random(3, 5)
  an: a1 * (r ^ (n - 1))

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con r = {r}, el término {n} vale {an} (a{n} = {an}). ¿Cuál es a₁?"

pasos:
  - "a₁ = a{n} ÷ r^(n−1) = {an} ÷ {r}^{n - 1} = {an / (r ^ (n - 1))}"

explicacion: |
  Se despeja a₁ de la fórmula del término general.
```

### 21 — Suma infinita (concepto)

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de una sucesión geométrica está entre -1 y 1 (sin ser 0), la suma de TODOS sus infinitos términos da un resultado finito."

explicacion: |
  Es contraintuitivo, pero pasa porque cada término agregado es cada vez
  más chico: la suma converge a a₁ ÷ (1−r).
```

### 22 — Razón negativa: signos alternados

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "casos_especiales"]

variables:
  a1: random(2, 10)
  n: random(2, 5)

respuesta: a1 * ((-2) ^ (n - 1))
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión geométrica con a₁ = {a1} y r = -2, ¿cuánto vale a{n}?"

explicacion: |
  Con razón negativa, los signos de los términos van alternando entre
  positivo y negativo.
```

### 23 — Comparar dos sucesiones geométricas

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "avanzado"
  tags: ["series_geometricas", "comparacion"]

variables:
  r1: random(2, 5)
  r2: random(2, 5)

restricciones:
  - r1 != r2

respuesta: (r1 > r2)
tipo: vf

enunciado: "Dos sucesiones geométricas empiezan igual (mismo a₁). Una tiene razón {r1} y la otra {r2}. Después de varios términos, ¿la primera va a estar por delante?"

explicacion: |
  A mayor razón (siendo ambas mayores a 1), más rápido crece la
  sucesión.
```

### 24 — Problema: bacterias que se triplican

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "intermedio"
  tags: ["series_geometricas", "problema"]

variables:
  inicial: random(2, 15)
  ciclos: random(3, 6)

respuesta: inicial * (3 ^ ciclos)
tipo: input
tolerancia_abs: 0

enunciado: "Un cultivo de {inicial} bacterias se triplica en cada ciclo. ¿Cuántas bacterias hay después de {ciclos} ciclos?"

explicacion: |
  Triplicarse es multiplicar por 3 en cada paso: razón geométrica r=3.
```

### 25 — Reconocer la fórmula del término general (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

enunciado: "¿Cuál es la fórmula del término general de una sucesión geométrica?"
tipo: mc
opciones_explicitas:
  - "aₙ = a₁ × r^(n−1)"
  - "aₙ = a₁ + (n−1)×r"
  - "aₙ = a₁ × n × r"
respuesta: "aₙ = a₁ × r^(n−1)"

explicacion: |
  La segunda opción es la fórmula de la sucesión ARITMÉTICA, no la
  geométrica.
```

### 26 — Qué es una sucesión geométrica (cierre)

```
metadata:
  materia: "matematicas"
  tema: "series_geometricas"
  nivel: "basico"
  tags: ["series_geometricas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión geométrica es una lista de números donde cada uno se obtiene multiplicando siempre por la misma razón al anterior."

explicacion: |
  Es la idea central de todo el tema, y el puente hacia el crecimiento
  exponencial que se profundiza en Álgebra.
```
