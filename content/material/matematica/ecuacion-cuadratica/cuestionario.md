# Matemática — Ecuación cuadrática (cuestionario, 32 preguntas VBLang)

> Tema: `A7` (Tronco 2 — Algebraico). Ver `teoria.md` en esta misma
> carpeta.

Las ecuaciones con raíces enteras se arman desde las raíces (r1, r2) hacia
los coeficientes, así siempre dan soluciones exactas — el mismo truco de
construcción que en `../sistemas-dos-ecuaciones/`.

---

### 1 — Calcular el discriminante

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["discriminante"]

variables:
  a: random(1, 6)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: b ^ 2 - 4 * a * c
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. ¿Cuál es el discriminante (Δ)?"

pasos:
  - "Δ = {b}² − 4×{a}×{c} = {b ^ 2} − {4 * a * c} = {b ^ 2 - 4 * a * c}"

explicacion: |
  Δ = b² − 4ac.
```

### 2 — Discriminante positivo: dos soluciones

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["discriminante", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((b ^ 2 - 4 * c) > 0)
tipo: vf

enunciado: "x² + {b}x + {c} = 0. ¿Es positivo el discriminante (o sea, tiene dos soluciones reales distintas)?"

explicacion: |
  Como se armó con dos raíces distintas ({r1} y {r2}), el discriminante
  tiene que dar positivo.
```

### 3 — Discriminante 0: raíz doble

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["discriminante"]

variables:
  r: random(1, 20)
  b: -2 * r
  c: r ^ 2

respuesta: b ^ 2 - 4 * c
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0 (viene de (x−{r})²). ¿Cuál es el discriminante?"

explicacion: |
  Al ser un cuadrado perfecto, el discriminante da exactamente 0 — una
  única solución (doble).
```

### 4 — Discriminante negativo: sin soluciones reales

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["discriminante", "verdadero_falso"]

variables:
  a: random(1, 4)
  b: random(-6, 6)
  c: random(10, 30)

respuesta: ((b ^ 2 - 4 * a * c) < 0)
tipo: vf

enunciado: "{a}x² + {b}x + {c} = 0. ¿Es negativo el discriminante (o sea, no tiene soluciones reales)?"

explicacion: |
  Con {a} y {c} positivos y grandes en comparación con {b}, es frecuente
  que 4ac supere a b², dando discriminante negativo.
```

### 5 — Resolver con la fórmula: hallar x1

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0. ¿Cuál es la mayor de las dos soluciones?"

pasos:
  - "Δ = {b}² − 4×{c} = {b ^ 2 - 4 * c}"
  - "x = (−({b}) ± √{b ^ 2 - 4 * c}) / 2"

explicacion: |
  Las dos soluciones son {r1} y {r2}.
```

### 6 — Resolver con la fórmula: hallar x2

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0. ¿Cuál es la menor de las dos soluciones?"

explicacion: |
  Las dos soluciones son {r1} y {r2}.
```

### 7 — Resolver con a≠1: hallar la mayor solución

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["formula_resolvente"]

variables:
  a: random(2, 6)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. ¿Cuál es la mayor de las dos soluciones?"

pasos:
  - "Δ = {b}² − 4×{a}×{c} = {b ^ 2 - 4 * a * c}"
  - "x = (−({b}) ± √{b ^ 2 - 4 * a * c}) / (2×{a})"

explicacion: |
  Con a distinto de 1, hay que dividir por 2a completo, no sólo por 2.
```

### 8 — Resolver con a≠1: hallar la menor solución

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["formula_resolvente"]

variables:
  a: random(2, 6)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. ¿Cuál es la menor de las dos soluciones?"

explicacion: |
  Las dos soluciones son {r1} y {r2}.
```

### 9 — Raíz doble: hallar la solución única

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r: random(1, 25)
  b: -2 * r
  c: r ^ 2

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0, con discriminante 0. ¿Cuál es la única solución?"

explicacion: |
  Con Δ=0, x = −b/(2a) = {r} — las dos "ramas" de la fórmula coinciden.
```

### 10 — Verificar una raíz por sustitución (correcta)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((r1 ^ 2 + b * r1 + c) == 0)
tipo: vf

enunciado: "x² + {b}x + {c} = 0. ¿Es x = {r1} una solución?"

explicacion: |
  Se reemplaza x por {r1} y se comprueba que la ecuación dé 0.
```

### 11 — Verificar una raíz por sustitución (incorrecta)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2
  propuesto: r1 + uno_de([1, -1, 2, -2])

respuesta: ((propuesto ^ 2 + b * propuesto + c) == 0)
tipo: vf

enunciado: "x² + {b}x + {c} = 0. ¿Es x = {propuesto} una solución?"

explicacion: |
  Sólo {r1} y {r2} son soluciones — cualquier otro valor no cumple la
  ecuación (salvo coincidencia numérica puntual).
```

### 12 — Suma de las raíces

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["vieta"]

variables:
  a: random(1, 5)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: -b / a
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. Sin resolver la ecuación, ¿cuánto vale la suma de las dos raíces?"

explicacion: |
  Suma de raíces = −b/a = {-b / a}, sin necesidad de calcular cada raíz
  por separado.
```

### 13 — Producto de las raíces

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["vieta"]

variables:
  a: random(1, 5)
  r1: random(1, 15)
  r2: random(1, 15)
  b: -a * (r1 + r2)
  c: a * r1 * r2

respuesta: c / a
tipo: input
tolerancia_abs: 0

enunciado: "{a}x² + {b}x + {c} = 0. Sin resolver la ecuación, ¿cuánto vale el producto de las dos raíces?"

explicacion: |
  Producto de raíces = c/a = {c / a}.
```

### 14 — Verificar suma y producto tras resolver

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["vieta", "verificacion", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: (((r1 + r2) == (-b)) == ((r1 * r2) == c))
tipo: vf

enunciado: "x² + {b}x + {c} = 0 tiene raíces {r1} y {r2}. ¿Coinciden a la vez la suma (−b) y el producto (c) con las relaciones de Vieta?"

explicacion: |
  Es la forma de verificar rápido si las raíces encontradas están bien,
  sin tener que rehacer toda la fórmula resolvente.
```

### 15 — Resolver por factoreo directo

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["factoreo"]

variables:
  r1: random(1, 12)
  r2: random(1, 12)

respuesta: r1
tipo: input
tolerancia_abs: 0

enunciado: "x² − {r1 + r2}x + {r1 * r2} = 0 se factorea como (x − {r1})(x − {r2}) = 0. ¿Cuál es una de las soluciones?"

explicacion: |
  Un producto da 0 sólo si alguno de los factores da 0 — las soluciones
  son directamente {r1} y {r2}.
```

### 16 — Raíz negativa: hallar la solución positiva

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["signos"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: r2 - r1
  c: -r1 * r2

respuesta: r1
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {c} = 0 tiene una raíz negativa (−{r2}) y una positiva. ¿Cuál es la raíz positiva?"

pasos:
  - "El producto de las raíces es {c}/1 = {c}, negativo — significa que las dos raíces tienen signos opuestos"

explicacion: |
  Con c negativo, las raíces siempre tienen signos opuestos entre sí.
```

### 17 — Concepto: cuántas soluciones según el discriminante (positivo)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Dos soluciones reales distintas"
tipo: mc
opciones_explicitas:
  - "Dos soluciones reales distintas"
  - "Una única solución"
  - "Ninguna solución real"

enunciado: "Si el discriminante de una ecuación cuadrática es positivo, ¿cuántas soluciones reales tiene?"

explicacion: |
  Δ>0 da dos raíces distintas.
```

### 18 — Concepto: cuántas soluciones según el discriminante (cero)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Una única solución (raíz doble)"
tipo: mc
opciones_explicitas:
  - "Una única solución (raíz doble)"
  - "Dos soluciones reales distintas"
  - "Ninguna solución real"

enunciado: "Si el discriminante de una ecuación cuadrática es 0, ¿cuántas soluciones reales tiene?"

explicacion: |
  Δ=0 da una única solución, contada dos veces (raíz doble).
```

### 19 — Concepto: cuántas soluciones según el discriminante (negativo)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ninguna solución real"
tipo: mc
opciones_explicitas:
  - "Ninguna solución real"
  - "Dos soluciones reales distintas"
  - "Una única solución"

enunciado: "Si el discriminante de una ecuación cuadrática es negativo, ¿cuántas soluciones reales tiene?"

explicacion: |
  Δ<0 no da soluciones reales — la raíz cuadrada de un número negativo
  no es real (sí tiene solución compleja, tema de `../numeros-complejos/`).
```

### 20 — Concepto: por qué a no puede ser 0

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En ax²+bx+c=0, si a fuera 0, la ecuación dejaría de ser cuadrática (pasaría a ser de primer grado, o ni siquiera una ecuación en x si b también fuera 0)."

explicacion: |
  Por eso la condición a≠0 es parte de la definición de ecuación
  cuadrática.
```

### 21 — Concepto: el símbolo ±

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El símbolo ± en la fórmula resolvente es sólo una forma de escribir más corto, y en la práctica sólo hay que calcular un valor de x."

explicacion: |
  Hay que calcular DOS valores (uno sumando la raíz, otro restando),
  salvo que Δ=0 (ahí coinciden en un solo valor).
```

### 22 — Error común: olvidar dividir todo por 2a

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

variables:
  a: random(2, 5)
  r1: random(1, 10)
  r2: random(1, 10)
  b: -a * (r1 + r2)
  c: a * r1 * r2
  disc: b ^ 2 - 4 * a * c

respuesta: (((-b + sqrt(disc)) / (2 * a)) == max(r1, r2))
tipo: vf

enunciado: "{a}x² + {b}x + {c} = 0. ¿Es correcto que x = (−({b}) + √{disc}) / (2×{a}) dé la mayor raíz?"

explicacion: |
  Dividir por 2a completo (no sólo el numerador de un lado) es
  justamente lo que hace falta para que la fórmula dé el resultado
  correcto.
```

### 23 — Aplicar: problema de área

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  ancho: random(2, 15)
  largo_extra: random(1, 10)

respuesta: ancho
tipo: input
tolerancia_abs: 0

enunciado: "Un terreno rectangular tiene {largo_extra} metros más de largo que de ancho, y su área es {ancho * (ancho + largo_extra)} m². ¿Cuánto mide el ancho?"

pasos:
  - "Planteo: x(x+{largo_extra}) = {ancho * (ancho + largo_extra)} → x² + {largo_extra}x − {ancho * (ancho + largo_extra)} = 0"

explicacion: |
  Es la misma ecuación cuadrática de siempre, planteada desde un
  problema de área — se descarta la raíz negativa porque un ancho no
  puede ser negativo.
```

### 24 — Concepto: raíz negativa descartada en problemas físicos

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En problemas donde x representa una magnitud física (longitud, tiempo, cantidad), si una de las dos raíces da negativa, normalmente se descarta."

explicacion: |
  La ecuación puede tener dos soluciones matemáticas válidas, pero sólo
  una (o ninguna) tiene sentido en el contexto del problema real.
```

### 25 — Resolver con coeficiente b=0

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["formula_resolvente"]

variables:
  r: random(2, 15)
  c: -(r ^ 2)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "x² + {c} = 0 (sin término x). ¿Cuál es la solución positiva?"

pasos:
  - "x² = {-c} → x = ±√{-c}"

explicacion: |
  Sin el término x, la ecuación se resuelve directo despejando x² y
  sacando raíz cuadrada — no hace falta la fórmula completa.
```

### 26 — Resolver con c=0 (factor común x)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["factoreo"]

variables:
  r: random(1, 20)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "x² − {r}x = 0 (sin término independiente). Factoreando: x(x − {r}) = 0. ¿Cuál es la solución distinta de 0?"

explicacion: |
  Sacando x como factor común, las soluciones son x=0 y x={r} — no hace
  falta la fórmula resolvente completa acá tampoco.
```

### 27 — Verificar el discriminante de una ecuación con factoreo directo

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["discriminante", "verificacion", "verdadero_falso"]

variables:
  r1: random(1, 12)
  r2: random(1, 12)
  b: -(r1 + r2)
  c: r1 * r2
  disc: b ^ 2 - 4 * c
  raiz_disc: sqrt(disc)

respuesta: (raiz_disc == abs(r1 - r2))
tipo: vf

enunciado: "x² + {b}x + {c} = 0 tiene raíces {r1} y {r2}. ¿Es √Δ igual a la diferencia (en valor absoluto) entre las dos raíces?"

explicacion: |
  √Δ = |r1 − r2| siempre, porque las dos raíces son (−b±√Δ)/2 —
  la distancia entre ellas es exactamente √Δ.
```

### 28 — Concepto: ecuación ya en forma factoreada

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "basico"
  tags: ["factoreo"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)

respuesta: r2
tipo: input
tolerancia_abs: 0

enunciado: "(x − {r1})(x − {r2}) = 0. ¿Cuál es la segunda solución (la distinta de {r1})?"

explicacion: |
  Ya está factoreada — las soluciones se leen directo: {r1} y {r2}.
```

### 29 — Verificación con error en el discriminante

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(-15, 15)
  c: random(-15, 15)
  real: b ^ 2 - 4 * a * c
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "{a}x² + {b}x + {c} = 0. ¿Es correcto que el discriminante sea {propuesto}?"

explicacion: |
  El discriminante correcto es b²−4ac = {real}.
```

### 30 — Concepto: relación entre factoreo y raíces

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si un trinomio se puede factorear como (x−p)(x−q), entonces p y q son exactamente las soluciones de esa ecuación cuadrática."

explicacion: |
  Es la conexión directa con `../polinomios-factoreo/`: factorear y
  resolver son, en el fondo, la misma pregunta.
```

### 31 — Aplicar suma de raíces en problema inverso

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["vieta"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)

respuesta: -(r1 + r2)
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere armar una ecuación x² + bx + c = 0 cuyas raíces sean {r1} y {r2}. ¿Cuánto tiene que valer b?"

explicacion: |
  b = −(suma de las raíces) = −({r1}+{r2}) = {-(r1 + r2)}.
```

### 32 — Aplicar producto de raíces en problema inverso

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_cuadratica"
  nivel: "avanzado"
  tags: ["vieta"]

variables:
  r1: random(1, 20)
  r2: random(1, 20)

respuesta: r1 * r2
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere armar una ecuación x² + bx + c = 0 cuyas raíces sean {r1} y {r2}. ¿Cuánto tiene que valer c?"

explicacion: |
  c = producto de las raíces = {r1}×{r2} = {r1 * r2}.
```
