# Matemática — Sucesiones y series (cuestionario, 24 preguntas VBLang)

> Tema: `N19`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una serie

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

enunciado: "¿Qué es una serie?"
tipo: mc
opciones_explicitas:
  - "La suma de los términos de una sucesión"
  - "Otra forma de llamar a una sucesión"
  - "El primer término de una sucesión"
respuesta: "La suma de los términos de una sucesión"

explicacion: |
  Una serie toma los términos de una sucesión y los suma todos juntos.
```

### 2 — Calcular la suma dado el primer y el último término

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión aritmética con a₁ = {a1} y a{n} = {an}."

pasos:
  - "Sₙ = n × (a₁+aₙ) ÷ 2 = {n} × ({a1}+{an}) ÷ 2 = {n * (a1 + an) / 2}"

explicacion: |
  Es el promedio del primer y último término, multiplicado por la
  cantidad de términos.
```

### 3 — Calcular la suma dado a₁ y d

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(5, 15)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión aritmética con a₁ = {a1} y d = {d}."

pasos:
  - "Primero el último término: a{n} = {a1} + ({n}-1)×{d} = {an}. Después la suma: {n} × ({a1}+{an}) ÷ 2 = {n * (a1 + an) / 2}"

explicacion: |
  Primero hay que hallar el último término con la fórmula del término
  general, y recién después aplicar la fórmula de la suma.
```

### 4 — Suma de los primeros N números naturales

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "casos_especiales"]

variables:
  n: random(5, 100)

respuesta: n * (n + 1) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto suman los primeros {n} números naturales (1+2+3+...+{n})?"

pasos:
  - "n × (n+1) ÷ 2 = {n} × ({n}+1) ÷ 2 = {n * (n + 1) / 2}"

explicacion: |
  Es el caso especial con a₁=1 y d=1: la fórmula se simplifica a
  n×(n+1)÷2.
```

### 5 — El truco de Gauss

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El truco de Gauss para sumar el 1 al 100 rápido consiste en emparejar el primero con el último (1+100), el segundo con el anteúltimo (2+99), y así — todos esos pares suman lo mismo."

explicacion: |
  Es la idea detrás de la fórmula de la suma de una serie aritmética.
```

### 6 — Verificar una suma (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "verificacion"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2
  error: uno_de([0, 0, 0, n, -n])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculada esta suma? Los primeros {n} términos (a₁={a1}, d={d}) suman {mostrado}."

explicacion: |
  Se vuelve a calcular con la fórmula y se compara.
```

### 7 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  n: random(4, 20)
  a1: random(1, 20)
  d: random(2, 10)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 + an
  - n * an

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y a{n} = {an}."

explicacion: |
  Las otras opciones se olvidan de multiplicar por la cantidad de
  términos, o de dividir por 2.
```

### 8 — Completar la cantidad de términos que falta

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series"]

variables:
  n: random(4, 20)

tipo: completar
enunciado: "La suma de los primeros ___ números naturales es {n * (n + 1) / 2}. Completá cuántos números se sumaron."
respuestas_validas:
  - n

explicacion: |
  Se despeja n de la fórmula n×(n+1)÷2, probando valores hasta encontrar
  el que da esa suma.
```

### 9 — Problema: ahorro acumulado

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(500, 2000)
  d: random(200, 800)
  meses: random(4, 10)
  an: a1 + (meses - 1) * d

respuesta: meses * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El primer mes ahorraste ${a1}, y cada mes siguiente ${d} más que el anterior. ¿Cuánto ahorraste en TOTAL entre los {meses} meses?"

explicacion: |
  Se suma toda la serie de ahorros mensuales, no sólo el último mes.
```

### 10 — Problema: total de asientos de un teatro

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(10, 30)
  d: random(2, 8)
  filas: random(5, 15)
  an: a1 + (filas - 1) * d

respuesta: filas * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La fila 1 de un teatro tiene {a1} asientos, y cada fila siguiente tiene {d} asientos más. Si el teatro tiene {filas} filas en total, ¿cuántos asientos tiene en total?"

explicacion: |
  Se suman los asientos de todas las filas, aplicando la fórmula de la
  serie.
```

### 11 — Problema: baldosas en un patrón de N figuras

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(3, 10)
  d: random(2, 6)
  figuras: random(4, 10)
  an: a1 + (figuras - 1) * d

respuesta: figuras * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La figura 1 de un patrón usa {a1} baldosas, y cada figura siguiente usa {d} baldosas más. Si se construyen las primeras {figuras} figuras, ¿cuántas baldosas se usan en total?"

explicacion: |
  Se suma toda la serie, no sólo la última figura.
```

### 12 — Suma de una sucesión decreciente

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series"]

variables:
  a1: random(50, 200)
  d: -random(2, 10)
  n: random(4, 10)
  an: a1 + (n - 1) * d

respuesta: n * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y d = {d} (decreciente)."

explicacion: |
  La fórmula funciona igual con una sucesión decreciente.
```

### 13 — La fórmula usa el promedio de los extremos

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula de la suma de una serie aritmética es, literalmente, el promedio del primer y el último término, multiplicado por la cantidad de términos."

explicacion: |
  Sₙ = n × (a₁+aₙ) ÷ 2: (a₁+aₙ)÷2 es el promedio de los dos extremos.
```

### 14 — Ordenar sumas de distintas series

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "orden"]

tipo: ordenar
enunciado: "Calculá la suma de los primeros 5 términos de cada serie (a₁ y d dados) y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "a₁=1, d=1"
  - "a₁=10, d=0"
  - "a₁=0, d=2"
  - "a₁=2, d=3"
respuesta_orden: ["a₁=1, d=1", "a₁=0, d=2", "a₁=2, d=3", "a₁=10, d=0"]

explicacion: |
  Sumas: 15, 20, 40, 50 — hay que calcular cada una con la fórmula antes
  de poder ordenarlas.
```

### 15 — Suma de una serie con d = 0

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "casos_especiales"]

variables:
  a1: random(2, 50)
  n: random(3, 10)

respuesta: a1 * n
tipo: input
tolerancia_abs: 0

enunciado: "Sumá los primeros {n} términos de una sucesión con a₁ = {a1} y d = 0."

pasos:
  - "Todos los términos valen {a1}: sumar {n} veces {a1} es {a1} × {n} = {a1 * n}"

explicacion: |
  Con d=0, todos los términos son iguales al primero: la suma es,
  simplemente, ese valor multiplicado por la cantidad de términos.
```

### 16 — Comparar dos series: cuál suma más

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "comparacion"]

variables:
  n: random(4, 10)
  a1_1: random(1, 20)
  d1: random(2, 10)
  an_1: a1_1 + (n - 1) * d1
  a1_2: random(1, 20)
  d2: random(2, 10)
  an_2: a1_2 + (n - 1) * d2

restricciones:
  - (n * (a1_1 + an_1) / 2) != (n * (a1_2 + an_2) / 2)

respuesta: ((n * (a1_1 + an_1) / 2) > (n * (a1_2 + an_2) / 2))
tipo: vf

enunciado: "Sumando {n} términos de cada una: ¿la serie con a₁={a1_1}, d={d1} suma más que la de a₁={a1_2}, d={d2}?"

explicacion: |
  Hay que calcular las dos sumas completas antes de poder compararlas.
```

### 17 — Suma de los primeros 100 naturales (el ejemplo de Gauss)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "casos_especiales"]

respuesta: 5050
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto suman los números del 1 al 100?"

explicacion: |
  Es el ejemplo histórico de Gauss: 100 × 101 ÷ 2 = 5.050.
```

### 18 — Problema: recolecta solidaria creciente

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series", "problema"]

variables:
  a1: random(5, 20)
  d: random(2, 8)
  dias: random(5, 15)
  an: a1 + (dias - 1) * d

respuesta: dias * (a1 + an) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "El día 1 de una colecta se juntaron {a1} kg de alimentos, y cada día se juntan {d} kg más que el anterior. Después de {dias} días, ¿cuántos kg se juntaron en total?"

explicacion: |
  Se suma toda la serie de los {dias} días, no sólo el último día.
```

### 19 — Reconocer la fórmula de la serie (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

enunciado: "¿Cuál es la fórmula de la suma de los primeros n términos de una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "Sₙ = n × (a₁ + aₙ) ÷ 2"
  - "Sₙ = a₁ + aₙ"
  - "Sₙ = n × a₁ × aₙ"
respuesta: "Sₙ = n × (a₁ + aₙ) ÷ 2"

explicacion: |
  Es el promedio del primer y último término, multiplicado por la
  cantidad de términos.
```

### 20 — Suma de una serie corta (2 términos)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series"]

variables:
  a1: random(1, 50)
  d: random(2, 20)
  a2: a1 + d

respuesta: a1 + a2
tipo: input
tolerancia_abs: 0

enunciado: "Sumá los primeros 2 términos de una sucesión con a₁ = {a1} y d = {d}."

pasos:
  - "Con sólo 2 términos, la fórmula da lo mismo que sumarlos directo: {a1} + {a2} = {a1 + a2}"

explicacion: |
  Con pocos términos, la fórmula coincide con la suma directa — la
  ventaja de la fórmula se nota con series largas.
```

### 21 — Verificar con el ejemplo del teatro (con error)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "avanzado"
  tags: ["series", "verificacion", "problema"]

variables:
  a1: random(10, 30)
  d: random(2, 8)
  filas: random(5, 15)
  an: a1 + (filas - 1) * d
  correcto: filas * (a1 + an) / 2
  error: uno_de([0, 0, 0, filas, -filas])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "Un teatro tiene {filas} filas (a₁={a1} asientos, {d} más por fila). ¿Es correcto decir que tiene {mostrado} asientos en total?"

explicacion: |
  Se vuelve a calcular la suma completa y se compara.
```

### 22 — Elegir el resultado correcto (con distractor de "sólo el último término")

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "intermedio"
  tags: ["series"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(5, 15)
  an: a1 + (n - 1) * d
  correcto: n * (a1 + an) / 2

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - an

enunciado: "¿Cuánto SUMAN los primeros {n} términos de una sucesión con a₁={a1}, d={d} (no sólo el último término)?"

explicacion: |
  {an} es sólo el último término (aₙ); la serie pide la suma de TODOS
  los términos, no sólo uno.
```

### 23 — Serie vs. sucesión (diferencia conceptual)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión es la lista de términos; una serie es el resultado de sumarlos todos."

explicacion: |
  Son conceptos relacionados pero distintos: la sucesión es la lista, la
  serie es la suma de esa lista.
```

### 24 — Qué es una serie aritmética (cierre)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_y_series"
  nivel: "basico"
  tags: ["series", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los primeros n términos de una sucesión aritmética se puede calcular con una fórmula directa, sin sumar término por término."

explicacion: |
  Es la idea central de todo el tema: Sₙ = n × (a₁+aₙ) ÷ 2.
```
