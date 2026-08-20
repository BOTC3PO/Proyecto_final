# Matemática — Sucesiones aritméticas (cuestionario, 26 preguntas VBLang)

> Tema: `N19B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una sucesión aritmética

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

enunciado: "¿Qué es una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "Una lista de números donde siempre se suma la misma cantidad para pasar al siguiente"
  - "Una lista de números en cualquier orden"
  - "Una lista donde cada número es el doble del anterior"
respuesta: "Una lista de números donde siempre se suma la misma cantidad para pasar al siguiente"

explicacion: |
  Esa cantidad fija que se suma se llama diferencia común (d).
```

### 2 — Calcular un término usando la fórmula

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale el término {n} (aₙ)?"

pasos:
  - "aₙ = a₁ + (n−1)×d = {a1} + ({n}−1)×{d} = {a1 + (n - 1) * d}"

explicacion: |
  Se aplica la fórmula del término general, sin tener que sumar la
  diferencia término por término.
```

### 3 — Calcular un término lejano

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 15)
  n: random(15, 40)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula sirve igual (y ahorra mucho más trabajo) para términos
  lejanos.
```

### 4 — Sucesión decreciente

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(50, 200)
  d: -random(2, 10)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d} (decreciente), ¿cuánto vale a{n}?"

pasos:
  - "aₙ = {a1} + ({n}−1)×({d}) = {a1 + (n - 1) * d}"

explicacion: |
  Con d negativo, la fórmula funciona igual: el término va bajando.
```

### 5 — Hallar la diferencia entre dos términos consecutivos

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 15)
  a2: a1 + d

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética, dos términos consecutivos son {a1} y {a2}. ¿Cuál es la diferencia común (d)?"

explicacion: |
  La diferencia es, directamente, el término siguiente menos el anterior.
```

### 6 — Hallar la diferencia despejando de la fórmula

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(3, 8)
  an: a1 + (n - 1) * d

respuesta: d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética, a₁ = {a1} y a{n} = {an}. ¿Cuál es la diferencia común?"

pasos:
  - "d = (a{n} − a₁) ÷ (n−1) = ({an} − {a1}) ÷ ({n}−1) = {(an - a1) / (n - 1)}"

explicacion: |
  Se despeja d de la fórmula del término general.
```

### 7 — Hallar el primer término

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 10)
  n: random(3, 8)
  an: a1 + (n - 1) * d

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con d = {d}, el término {n} vale {an} (a{n} = {an}). ¿Cuál es a₁?"

pasos:
  - "a₁ = a{n} − (n−1)×d = {an} − ({n}−1)×{d} = {an - (n - 1) * d}"

explicacion: |
  Se despeja a₁ de la fórmula del término general.
```

### 8 — Reconocer una sucesión aritmética

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a3: a2 + d
  a4: a3 + d

respuesta: verdadero
tipo: vf

enunciado: "¿Es aritmética la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La diferencia entre cada par de términos consecutivos es siempre {d}.
```

### 9 — Reconocer que NO es aritmética

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a3: a2 + d
  a4: a3 + d + 1

respuesta: falso
tipo: vf

enunciado: "¿Es aritmética la sucesión {a1}, {a2}, {a3}, {a4}?"

explicacion: |
  La diferencia entre los primeros pares es {d}, pero entre los últimos
  dos términos cambia: no es una diferencia constante.
```

### 10 — Elegir el resultado correcto

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)
  correcto: a1 + (n - 1) * d

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a1 + n * d
  - a1 * n * d

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  El error común es multiplicar por n en vez de (n−1): el primer término
  no suma ninguna diferencia todavía.
```

### 11 — Verificar un término (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "verificacion"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(4, 10)
  correcto: a1 + (n - 1) * d
  error: uno_de([0, 0, 0, d, -d])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "En una sucesión con a₁ = {a1} y d = {d}, ¿está bien calculado que a{n} = {mostrado}?"

explicacion: |
  Se vuelve a aplicar la fórmula y se compara.
```

### 12 — Completar el término que falta en una secuencia

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  a2: a1 + d
  a4: a1 + 3 * d

tipo: completar
enunciado: "Completá el término que falta: {a1}, {a2}, ___, {a4}."
respuestas_validas:
  - a1 + 2 * d

explicacion: |
  El término que falta sigue el mismo salto d que el resto de la
  sucesión.
```

### 13 — Completar la diferencia que falta

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 30)
  d: random(2, 15)
  a2: a1 + d

tipo: completar
enunciado: "En la sucesión {a1}, {a2}, ..., completá la diferencia común (d)."
respuestas_validas:
  - d

explicacion: |
  d es la distancia entre dos términos consecutivos.
```

### 14 — Problema: ahorro constante cada mes

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  inicial: random(500, 2000)
  ahorro_mensual: random(200, 1000)
  meses: random(4, 12)

respuesta: inicial + (meses - 1) * ahorro_mensual
tipo: input
tolerancia_abs: 0

enunciado: "El primer mes ahorraste ${inicial}, y cada mes siguiente ahorrás ${ahorro_mensual} más que el mes anterior (en total, no adicional). ¿Cuánto ahorraste en el mes {meses}?"

explicacion: |
  Es una sucesión aritmética: a₁ = {inicial}, d = {ahorro_mensual}.
```

### 15 — Problema: filas de un teatro

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  primera_fila: random(10, 30)
  incremento: random(2, 8)
  fila: random(5, 15)

respuesta: primera_fila + (fila - 1) * incremento
tipo: input
tolerancia_abs: 0

enunciado: "La primera fila de un teatro tiene {primera_fila} asientos, y cada fila siguiente tiene {incremento} asientos más que la anterior. ¿Cuántos asientos tiene la fila {fila}?"

explicacion: |
  Es una sucesión aritmética aplicada a la cantidad de asientos por fila.
```

### 16 — Problema: temperatura que baja constante

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  inicial: random(15, 30)
  baja_por_hora: random(1, 4)
  hora: random(4, 10)

respuesta: inicial - (hora - 1) * baja_por_hora
tipo: input
tolerancia_abs: 0

enunciado: "A la hora 1, la temperatura era {inicial}°C, y baja {baja_por_hora} grados cada hora. ¿Qué temperatura hay en la hora {hora} (puede dar negativa)?"

explicacion: |
  Es una sucesión aritmética con diferencia negativa (decreciente).
```

### 17 — La diferencia siempre es la misma (verdadero/falso)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una sucesión aritmética, la diferencia entre cualquier par de términos consecutivos es siempre la misma."

explicacion: |
  Es la propia definición de sucesión aritmética.
```

### 18 — Diferencia 0 (caso especial)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "casos_especiales"]

respuesta: verdadero
tipo: vf

enunciado: "Si la diferencia común (d) de una sucesión aritmética es 0, todos los términos de la sucesión son iguales."

explicacion: |
  Sumar 0 en cada paso no cambia nada: la sucesión queda constante.
```

### 19 — Sucesión con d = 0

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "casos_especiales"]

variables:
  a1: random(1, 999)
  n: random(2, 50)

respuesta: a1
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = 0, ¿cuánto vale a{n}?"

explicacion: |
  Con d = 0, todos los términos son iguales al primero.
```

### 20 — Hallar la posición de un término

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: random(1, 20)
  d: random(2, 10)
  n: random(3, 12)
  an: a1 + (n - 1) * d

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, el término {an} (a? = {an}), ¿en qué posición está?"

pasos:
  - "n = (a? − a₁) ÷ d + 1 = ({an} − {a1}) ÷ {d} + 1 = {(an - a1) / d + 1}"

explicacion: |
  Se despeja n de la fórmula del término general.
```

### 21 — Problema: número de baldosas en una fila creciente

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "intermedio"
  tags: ["sucesiones_aritmeticas", "problema"]

variables:
  a1: random(3, 10)
  d: random(2, 6)
  n: random(4, 10)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "La figura 1 de un patrón usa {a1} baldosas, y cada figura siguiente usa {d} baldosas más que la anterior. ¿Cuántas baldosas usa la figura {n}?"

explicacion: |
  Los patrones de figuras que crecen de a lo mismo son sucesiones
  aritméticas.
```

### 22 — Comparar dos sucesiones: cuál crece más rápido

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas", "comparacion"]

variables:
  d1: random(2, 8)
  d2: random(2, 8)

restricciones:
  - d1 != d2

respuesta: (d1 > d2)
tipo: vf

enunciado: "Una sucesión aritmética tiene d = {d1} y otra tiene d = {d2}. ¿Crece más rápido la primera?"

explicacion: |
  A mayor diferencia común, más rápido crece la sucesión, sin importar
  cuál sea el primer término.
```

### 23 — Ordenar términos calculados de distintas sucesiones

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas", "orden"]

tipo: ordenar
enunciado: "Calculá el término 5 (a₅) de cada sucesión aritmética y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "a₁=1, d=5"
  - "a₁=10, d=1"
  - "a₁=5, d=3"
  - "a₁=0, d=4"
respuesta_orden: ["a₁=10, d=1", "a₁=0, d=4", "a₁=5, d=3", "a₁=1, d=5"]

explicacion: |
  a₅ = a₁ + 4d en cada caso: 14, 16, 17, 21 — hay que calcular cada una
  antes de poder ordenarlas.
```

### 24 — Sucesión aritmética con números negativos

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "avanzado"
  tags: ["sucesiones_aritmeticas"]

variables:
  a1: -random(1, 20)
  d: random(2, 10)
  n: random(3, 8)

respuesta: a1 + (n - 1) * d
tipo: input
tolerancia_abs: 0

enunciado: "En una sucesión aritmética con a₁ = {a1} y d = {d}, ¿cuánto vale a{n}?"

explicacion: |
  La fórmula funciona igual aunque el primer término sea negativo.
```

### 25 — Reconocer el término general (opción múltiple)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

enunciado: "¿Cuál es la fórmula del término general de una sucesión aritmética?"
tipo: mc
opciones_explicitas:
  - "aₙ = a₁ + (n − 1) × d"
  - "aₙ = a₁ × n × d"
  - "aₙ = a₁ + n × d"
respuesta: "aₙ = a₁ + (n − 1) × d"

explicacion: |
  El (n−1) es clave: el primer término no suma ninguna diferencia
  todavía.
```

### 26 — Qué es una sucesión aritmética (cierre)

```
metadata:
  materia: "matematicas"
  tema: "sucesiones_aritmeticas"
  nivel: "basico"
  tags: ["sucesiones_aritmeticas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una sucesión aritmética es una lista de números donde cada uno se obtiene sumando siempre la misma diferencia al anterior."

explicacion: |
  Es la idea central de todo el tema.
```
