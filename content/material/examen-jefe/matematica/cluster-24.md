# Examen jefe — [PENDIENTE #624]

> Logro #624. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **142 preguntas totales** en 5/5 secciones.

---

## Sección: ecuacion-cuadratica (32 preguntas)

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

## Sección: punto-medio-de-un-segmento (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "basico"
  tags: ["punto_medio", "vocabulario"]

enunciado: "¿Qué es el punto medio de un segmento?"
tipo: mc
opciones_explicitas:
  - "El punto sobre el segmento que está a la misma distancia de sus dos extremos"
  - "El extremo más cercano al origen"
  - "El punto más alejado de ambos extremos"
respuesta: "El punto sobre el segmento que está a la misma distancia de sus dos extremos"

explicacion: |
  Divide al segmento en dos mitades exactamente iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "completar"]

tipo: completar
enunciado: "Completá: la coordenada x del punto medio es el ___ de las dos abscisas de los extremos."
respuestas_validas:
  - "promedio"

explicacion: |
  Lo mismo aplica para la coordenada y, con las dos ordenadas.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "problema"]

variables:
  x1: uno_de([2, 4, 6, 8, 10])
  x2: uno_de([2, 4, 6, 8, 10])

respuesta: (x1 + x2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento va de x = {x1} a x = {x2} (ambos puntos con la misma altura). ¿Cuál es la abscisa de su punto medio?"

pasos:
  - "({x1} + {x2}) ÷ 2 = {(x1 + x2) / 2}"

explicacion: |
  Se promedian las dos abscisas.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "problema"]

variables:
  x1: uno_de([0, 2, 4, 6])
  y1: uno_de([0, 2, 4, 6])
  x2: uno_de([8, 10, 12])
  y2: uno_de([8, 10, 12])

respuesta: (x1 + x2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento va del punto ({x1}, {y1}) al punto ({x2}, {y2}). ¿Cuál es la abscisa (coordenada x) de su punto medio?"

pasos:
  - "({x1} + {x2}) ÷ 2 = {(x1 + x2) / 2}"

explicacion: |
  Se promedian sólo las abscisas de ambos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "problema"]

variables:
  x1: uno_de([0, 2, 4, 6])
  y1: uno_de([0, 2, 4, 6])
  x2: uno_de([8, 10, 12])
  y2: uno_de([8, 10, 12])

respuesta: (y1 + y2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento va del punto ({x1}, {y1}) al punto ({x2}, {y2}). ¿Cuál es la ordenada (coordenada y) de su punto medio?"

pasos:
  - "({y1} + {y2}) ÷ 2 = {(y1 + y2) / 2}"

explicacion: |
  Se promedian sólo las ordenadas de ambos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio", "problema"]

variables:
  x1: random(-10, -1)
  x2: random(1, 10)

respuesta: redondear((x1 + x2) / 2, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un segmento va de x = {x1} a x = {x2}. ¿Cuál es la abscisa de su punto medio?"

pasos:
  - "({x1} + {x2}) ÷ 2 = {redondear((x1 + x2) / 2, 1)}"

explicacion: |
  El promedio funciona igual con números negativos: se suman con su
  signo, y se divide por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "El punto medio de un segmento está exactamente a la misma distancia de cada uno de los dos extremos."

explicacion: |
  Es la propiedad que lo define.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio", "problema"]

variables:
  largo_total: uno_de([10, 20, 30, 40, 50])

respuesta: largo_total / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento mide {largo_total} unidades de largo en total. ¿A qué distancia está su punto medio de cada uno de los dos extremos?"

pasos:
  - "{largo_total} ÷ 2 = {largo_total / 2}"

explicacion: |
  El punto medio siempre está a la mitad de la distancia total.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular el punto medio de un segmento no requiere sacar ninguna raíz cuadrada, a diferencia de calcular la distancia entre sus extremos."

explicacion: |
  Es una operación directa de promedio, sin pasar por Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio", "problema"]

variables:
  x1: random(1, 10)
  m: random(11, 20)

respuesta: (2 * m) - x1
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento tiene un extremo en x = {x1} y su punto medio está en x = {m}. ¿En qué posición x está el otro extremo?"

pasos:
  - "El punto medio es el promedio: {m} = ({x1} + x₂) ÷ 2"
  - "x₂ = (2 × {m}) − {x1} = {(2 * m) - x1}"

explicacion: |
  Se despeja el extremo faltante invirtiendo la fórmula del promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "El punto medio de un segmento siempre está ubicado sobre el propio segmento, nunca fuera de él."

explicacion: |
  Es un promedio de los dos extremos: nunca puede quedar más allá de
  ninguno de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio", "vocabulario"]

enunciado: "¿Qué es la mediatriz de un segmento?"
tipo: mc
opciones_explicitas:
  - "La recta perpendicular al segmento que pasa exactamente por su punto medio"
  - "Otro nombre para el propio punto medio"
  - "La recta que contiene al segmento"
respuesta: "La recta perpendicular al segmento que pasa exactamente por su punto medio"

explicacion: |
  Necesita conocer primero el punto medio para poder trazarse.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "ordenar"]

enunciado: "Ordená los pasos para hallar el punto medio de un segmento entre (x₁, y₁) y (x₂, y₂)."
tipo: ordenar
opciones_explicitas:
  - "Combinar ambos resultados en un nuevo par ordenado"
  - "Sumar las dos abscisas y dividir por 2"
  - "Sumar las dos ordenadas y dividir por 2"
respuesta_orden: ["Sumar las dos abscisas y dividir por 2", "Sumar las dos ordenadas y dividir por 2", "Combinar ambos resultados en un nuevo par ordenado"]
explicacion: |
  Cada coordenada del punto medio se calcula de forma independiente.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "basico"
  tags: ["punto_medio", "problema"]

variables:
  x: random(-5, 5)
  y1: uno_de([0, 2, 4])
  y2: uno_de([10, 12, 14])

respuesta: (y1 + y2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento vertical va del punto ({x}, {y1}) al punto ({x}, {y2}). ¿Cuál es la ordenada de su punto medio?"

pasos:
  - "({y1} + {y2}) ÷ 2 = {(y1 + y2) / 2}"

explicacion: |
  Como el segmento es vertical, la abscisa del punto medio es la misma
  {x} de ambos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "Si los dos extremos de un segmento son en realidad el mismo punto, su punto medio es ese mismo punto."

explicacion: |
  Promediar un número consigo mismo da ese mismo número.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "problema"]

variables:
  x1: uno_de([0, 4, 8])
  x2: x1 + 12
  y1: uno_de([0, 4, 8])
  y2: y1 + 6

respuesta: (x1 + x2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una mesa rectangular tiene sus esquinas opuestas en ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la abscisa del centro exacto de la mesa?"

pasos:
  - "El centro de un rectángulo es el punto medio de una diagonal: ({x1} + {x2}) ÷ 2 = {(x1 + x2) / 2}"

explicacion: |
  El centro de cualquier rectángulo coincide con el punto medio de
  cualquiera de sus dos diagonales.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "Promediar dos números siempre da el valor que está exactamente a mitad de camino entre ambos, en la recta numérica."

explicacion: |
  Es la razón por la que la fórmula del punto medio es simplemente un
  promedio, aplicado dos veces (una por cada coordenada).
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular el punto medio de un segmento no depende de la fórmula de distancia entre dos puntos, aunque ambos temas usen las mismas coordenadas de partida."

explicacion: |
  Son dos cálculos independientes: uno promedia coordenadas, el otro usa
  Pitágoras.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "problema"]

variables:
  a: random(1, 15)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un segmento va del punto (-{a}, 0) al punto ({a}, 0). ¿Cuál es la abscisa de su punto medio?"

pasos:
  - "(-{a} + {a}) ÷ 2 = 0"

explicacion: |
  Dos valores opuestos siempre promedian 0: el punto medio cae en el
  origen.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "avanzado"
  tags: ["punto_medio", "problema"]

variables:
  x1: uno_de([2, 4, 6])
  x2: uno_de([10, 12, 14])
  y1: uno_de([0, 2])
  y2: uno_de([8, 10])

respuesta: verdadero
tipo: vf

enunciado: "Un segmento va de ({x1}, {y1}) a ({x2}, {y2}). ¿Es el punto (({x1 + x2}) / 2, ({y1 + y2}) / 2) el punto medio de ese segmento?"

explicacion: |
  Por definición, ese es exactamente el punto medio: el promedio de cada
  coordenada.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "basico"
  tags: ["punto_medio"]

respuesta: verdadero
tipo: vf

enunciado: "Un segmento tiene un único punto medio, no varios."

explicacion: |
  El promedio de dos números da siempre un único resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "basico"
  tags: ["punto_medio", "vocabulario"]

enunciado: "¿Qué son los 'extremos' de un segmento?"
tipo: mc
opciones_explicitas:
  - "Los dos puntos que delimitan el segmento en cada punta"
  - "El punto medio del segmento"
  - "Cualquier punto que esté sobre el segmento"
respuesta: "Los dos puntos que delimitan el segmento en cada punta"

explicacion: |
  El punto medio se calcula a partir de esos dos extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "intermedio"
  tags: ["punto_medio", "problema"]

variables:
  lado: uno_de([4, 6, 8, 10])

respuesta: lado / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene un vértice en (0, 0) y el vértice contiguo en ({lado}, 0). ¿Cuál es la abscisa del punto medio de ese lado?"

pasos:
  - "(0 + {lado}) ÷ 2 = {lado / 2}"

explicacion: |
  Es el promedio de las dos abscisas de ese lado del cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "punto_medio_de_un_segmento"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular el punto medio de un segmento?"
tipo: mc
opciones_explicitas:
  - "Para encontrar el centro exacto de un objeto, espacio o figura, a partir de coordenadas"
  - "Sólo sirve para segmentos verticales"
  - "Sólo tiene aplicación en trigonometría"
respuesta: "Para encontrar el centro exacto de un objeto, espacio o figura, a partir de coordenadas"

explicacion: |
  Desde el centro de una mesa hasta la mediatriz de un segmento, todo
  parte de este mismo promedio de coordenadas.
```

## Sección: funcion-cuadratica-parabola (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["vertice"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuál es la coordenada x del vértice?"

pasos:
  - "xᵥ = −{b} / (2×{a}) = {-b} / {2 * a} = {(-b) / (2 * a)}"

explicacion: |
  xᵥ = −b/(2a).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["vertice"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: a * xv ^ 2 + b * xv + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. Ya sabiendo que xᵥ = {xv}, ¿cuál es la coordenada y del vértice (o sea, f({xv}))?"

explicacion: |
  yᵥ = f(xᵥ) = {a}×{xv}² + {b}×{xv} + {c} = {a * xv ^ 2 + b * xv + c}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["ordenada_origen"]

variables:
  a: random(1, 8)
  b: random(-15, 15)
  c: random(-20, 20)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuál es la ordenada al origen (f(0))?"

explicacion: |
  f(0) = {c} — se lee directo, sin ninguna cuenta.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["evaluar"]

variables:
  a: random(1, 6)
  b: random(-10, 10)
  c: random(-10, 10)
  x: random(-8, 8)

respuesta: a * x ^ 2 + b * x + c
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Cuánto vale f({x})?"

explicacion: |
  Se reemplaza x por {x} y se calcula.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: max(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² + {b}x + {c}. ¿Cuál es la mayor raíz (dónde f(x)=0)?"

explicacion: |
  Mismo procedimiento que `../ecuacion-cuadratica/`: las raíces son
  {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: min(r1, r2)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² + {b}x + {c}. ¿Cuál es la menor raíz?"

explicacion: |
  Las raíces son {r1} y {r2}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concavidad", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Abre hacia arriba la parábola (el vértice es un mínimo)?"

explicacion: |
  El coeficiente principal {a} es positivo, así que abre hacia arriba.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concavidad", "verdadero_falso"]

variables:
  a: random(-10, -1)
  b: random(-15, 15)
  c: random(-15, 15)

respuesta: falso

tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Abre hacia arriba la parábola?"

explicacion: |
  El coeficiente principal {a} es negativo, así que abre hacia ABAJO (el
  vértice es un máximo).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["eje_simetria"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)

respuesta: xv
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿En qué valor de x está el eje de simetría?"

explicacion: |
  El eje de simetría pasa siempre por la coordenada x del vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["eje_simetria", "verdadero_falso"]

variables:
  a: random(1, 6)
  xv: random(-8, 8)
  b: -2 * a * xv
  c: random(-10, 10)
  d: random(1, 8)

respuesta: ((a * (xv + d) ^ 2 + b * (xv + d) + c) == (a * (xv - d) ^ 2 + b * (xv - d) + c))
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}, con vértice en xᵥ={xv}. ¿f({xv}+{d}) es igual a f({xv}−{d})?"

explicacion: |
  Dos puntos a la misma distancia del eje de simetría siempre dan el
  mismo valor de f — es la definición de simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  r1: random(1, 10)
  r2: random(1, 10)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: verdadero
tipo: vf

enunciado: "f(x) = x² + {b}x + {c}. ¿Cruza esta parábola el eje x en dos puntos distintos?"

explicacion: |
  Al tener dos raíces reales distintas ({r1} y {r2}), la parábola cruza
  el eje x en dos puntos.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una parábola abre hacia arriba, el vértice es el punto más bajo de toda la curva."

explicacion: |
  Es el mínimo absoluto de la función en ese caso.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La coordenada x del vértice se calcula como b/(2a), sin ningún signo negativo."

explicacion: |
  Es −b/(2a), con el signo negativo — un error muy común es olvidarlo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La ordenada al origen (f(0)) es siempre el mismo punto que el vértice de la parábola."

explicacion: |
  Sólo coinciden cuando b=0 (el vértice está sobre el eje y) — en
  general son dos puntos distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["vertice"]

variables:
  a: random(1, 8)
  c: random(-15, 15)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {c} (sin término x). ¿Cuál es la coordenada x del vértice?"

explicacion: |
  Con b=0, xᵥ = −0/(2a) = 0 — el vértice está sobre el eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["vertice", "verdadero_falso"]

variables:
  a: random(1, 8)
  c: random(-15, 15)

respuesta: ((0) == (0))
tipo: vf

enunciado: "f(x) = {a}x² + {c}. ¿Coincide el vértice con la ordenada al origen, en este caso particular?"

explicacion: |
  Sí, porque b=0: el vértice cae justo sobre el eje y, en el mismo punto
  que f(0).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  tv: random(1, 10)
  a: -random(1, 5)
  b: -2 * a * tv
  altura_inicial: random(0, 20)

respuesta: tv
tipo: input
tolerancia_abs: 0

enunciado: "La altura de un objeto lanzado es h(t) = {a}t² + {b}t + {altura_inicial}. ¿En qué instante t alcanza la altura máxima?"

pasos:
  - "Como a={a} es negativo, la parábola abre hacia abajo: el vértice es un máximo, en t = −{b}/(2×{a})"

explicacion: |
  El instante de altura máxima es siempre la coordenada t del vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  tv: random(1, 10)
  a: -random(1, 5)
  b: -2 * a * tv
  altura_inicial: random(0, 20)

respuesta: a * tv ^ 2 + b * tv + altura_inicial
tipo: input
tolerancia_abs: 0

enunciado: "h(t) = {a}t² + {b}t + {altura_inicial}, con instante de altura máxima en t = {tv}. ¿Cuál es esa altura máxima?"

explicacion: |
  Se evalúa h en t={tv}: h({tv}) = {a * tv ^ 2 + b * tv + altura_inicial}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 6)
  xv: random(-10, 10)
  b: -2 * a * xv
  c: random(-10, 10)
  error: uno_de([0, 0, 1, -1])
  propuesto: xv + error

respuesta: (propuesto == xv)
tipo: vf

enunciado: "f(x) = {a}x² + {b}x + {c}. ¿Es correcto que la coordenada x del vértice sea {propuesto}?"

explicacion: |
  El valor correcto es xᵥ = −b/(2a) = {xv}.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función cuadrática f(x) = ax² + bx + c son todos los números reales."

explicacion: |
  No tiene denominador, ni raíz, ni logaritmo — nada que restrinja el
  dominio (ver `../funcion-dominio/`).
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "imagen", "verdadero_falso"]

variables:
  a: random(1, 8)

respuesta: falso

tipo: vf

enunciado: "Con a = {a} (positivo), la imagen de la función es 'y ≤ yᵥ'."

explicacion: |
  Con a positivo (abre hacia arriba), la imagen es 'y ≥ yᵥ', no ≤ — ver
  `../funcion-imagen/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["raices", "factoreo"]

variables:
  r: random(1, 20)

respuesta: r
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = x² − {2 * r}x + {r ^ 2} se factorea como (x − {r})². ¿Cuál es la única raíz (doble) de f?"

explicacion: |
  Con discriminante 0, la parábola sólo toca el eje x en un punto: el
  vértice coincide con la raíz.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) = a(x − r₁)(x − r₂), entonces r₁ y r₂ son exactamente los puntos donde la parábola cruza el eje x."

explicacion: |
  Es la misma conexión ya vista entre factoreo y raíces en
  `../ecuacion-cuadratica/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["raices", "verdadero_falso"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)
  b: -(r1 + r2)
  c: r1 * r2

respuesta: ((r1 ^ 2 + b * r1 + c) == 0)
tipo: vf

enunciado: "f(x) = x² + {b}x + {c}. ¿Es f({r1}) igual a 0?"

explicacion: |
  Por definición, evaluar la función en una raíz siempre da 0.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["concepto", "opcion_multiple"]

respuesta: "Ninguna"
tipo: mc
opciones_explicitas:
  - "Ninguna"
  - "Una"
  - "Dos"

enunciado: "Si el discriminante de una función cuadrática es negativo, ¿en cuántos puntos cruza el eje x?"

explicacion: |
  Sin raíces reales, la parábola no toca el eje x en absoluto — queda
  completamente arriba o completamente abajo.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["problema", "concavidad"]

variables:
  pv: random(5, 30)
  a: -random(1, 4)
  b: -2 * a * pv

respuesta: pv
tipo: input
tolerancia_abs: 0

enunciado: "El ingreso de una empresa según el precio p es I(p) = {a}p² + {b}p. ¿A qué precio p se maximiza el ingreso?"

explicacion: |
  El precio óptimo es la coordenada del vértice, igual que en el
  problema de altura máxima.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Toda parábola de una función cuadrática es simétrica respecto de una recta vertical (el eje de simetría)."

explicacion: |
  Es una propiedad geométrica central de la parábola.
```

```
metadata:
  materia: "matematicas"
  tema: "funcion_cuadratica_parabola"
  nivel: "avanzado"
  tags: ["vertice"]

variables:
  a: random(1, 8)
  xv: random(-15, 15)

respuesta: -2 * a * xv
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere que f(x) = {a}x² + bx + c tenga vértice en xᵥ = {xv}. ¿Cuánto tiene que valer b?"

explicacion: |
  De xᵥ = −b/(2a), despejando: b = −2a×xᵥ = −2×{a}×{xv} = {-2 * a * xv}.
```

## Sección: numeros-complejos (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["suma"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: a + c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) + ({c} + {d}i). ¿Cuál es la parte real del resultado?"

explicacion: |
  Las partes reales se suman entre sí: {a} + {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["suma"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: b + d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) + ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  Las partes imaginarias se suman entre sí: {b} + {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["resta"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: a - c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) − ({c} + {d}i). ¿Cuál es la parte real del resultado?"

explicacion: |
  {a} − {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["resta"]

variables:
  a: random(-15, 15)
  b: random(-15, 15)
  c: random(-15, 15)
  d: random(-15, 15)

respuesta: b - d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) − ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  {b} − {d}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)

respuesta: a * c - b * d
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Cuál es la parte real del resultado?"

pasos:
  - "(ac − bd) = ({a}×{c}) − ({b}×{d}) = {a * c} − {b * d} = {a * c - b * d}"

explicacion: |
  La parte real es ac − bd (el −bd viene de que i² = −1).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)

respuesta: a * d + b * c
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Cuál es la parte imaginaria del resultado?"

pasos:
  - "(ad + bc) = ({a}×{d}) + ({b}×{c}) = {a * d} + {b * c} = {a * d + b * c}"

explicacion: |
  La parte imaginaria junta los dos términos cruzados: ad + bc.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["multiplicacion"]

variables:
  k: random(2, 10)
  a: random(-10, 10)
  b: random(-10, 10)

respuesta: k * b
tipo: input
tolerancia_abs: 0

enunciado: "{k} × ({a} + {b}i). ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  Multiplicar por un real puro multiplica las dos partes por igual:
  {k}×{b}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i"]

variables:
  k: random(1, 10) * 4

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} es múltiplo de 4, así que i^{k} = 1 (vuelve al inicio del ciclo).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i", "opcion_multiple"]

variables:
  k: random(0, 9) * 4 + 1

respuesta: "i"
tipo: mc
opciones_explicitas:
  - "i"
  - "1"
  - "-1"
  - "-i"

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 1 al dividir por 4, así que i^{k} = i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i"]

variables:
  k: random(0, 9) * 4 + 2

respuesta: -1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 2 al dividir por 4, así que i^{k} = i² = −1.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["potencias_i", "opcion_multiple"]

variables:
  k: random(0, 9) * 4 + 3

respuesta: "-i"
tipo: mc
opciones_explicitas:
  - "-i"
  - "i"
  - "1"
  - "-1"

enunciado: "¿Cuánto vale i^{k}?"

explicacion: |
  {k} deja resto 3 al dividir por 4, así que i^{k} = −i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Por definición, i² = −1."

explicacion: |
  Es la única regla nueva que hace falta para operar con números
  complejos.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "i² es igual a 1 (como el cuadrado de cualquier número)."

explicacion: |
  i² = −1, no 1 — es justo lo que hace especial a la unidad imaginaria:
  ningún número real cumple eso.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["conjugado"]

variables:
  a: random(-15, 15)
  b: random(1, 15)

respuesta: -b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la parte imaginaria del conjugado de {a} + {b}i?"

explicacion: |
  El conjugado cambia el signo de la parte imaginaria: −{b}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["conjugado"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: a ^ 2 + b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i) × ({a} − {b}i). ¿Cuánto da (la parte real, ya que la imaginaria da 0)?"

pasos:
  - "(a+bi)(a−bi) = a² − (bi)² = a² − b²×i² = a² + b² = {a ^ 2 + b ^ 2}"

explicacion: |
  Multiplicar un complejo por su conjugado siempre da un número real:
  a² + b².
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["conjugado", "verdadero_falso"]

variables:
  a: random(1, 15)
  b: random(1, 15)

respuesta: ((a * (-b) + b * a) == 0)
tipo: vf

enunciado: "({a} + {b}i) × ({a} − {b}i). ¿Da 0 la parte imaginaria del resultado?"

explicacion: |
  El término cruzado se cancela siempre al multiplicar por el conjugado
  — por eso el resultado es un número real puro.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  n: random(1, 15)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "√(−{n * n}) se escribe como {n}i. Si el radicando es −{n * n}, ¿cuál es el coeficiente de i?"

explicacion: |
  √(−{n * n}) = √({n * n}) × √(−1) = {n} × i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  b: random(-10, 10) * 2
  m: random(1, 8)

respuesta: -b / 2
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {(b ^ 2) / 4 + m ^ 2} = 0 tiene discriminante negativo. Las soluciones son x = −{b}/2 ± {m}i. ¿Cuál es la parte real de esas soluciones?"

explicacion: |
  Cuando Δ<0, la parte real de las dos soluciones complejas es siempre
  −b/(2a) — el mismo punto donde estaría el vértice de la parábola.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  b: random(-10, 10) * 2
  m: random(1, 8)

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "x² + {b}x + {(b ^ 2) / 4 + m ^ 2} = 0 tiene discriminante negativo. Las soluciones son x = −{b}/2 ± {m}i. ¿Cuál es el coeficiente de i?"

explicacion: |
  Viene directo de √Δ con Δ negativo: √Δ = {m}i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una ecuación cuadrática con coeficientes reales tiene discriminante negativo, sus dos soluciones complejas son conjugadas entre sí."

explicacion: |
  Vienen de −b/(2a) ± (algo)i — la misma parte real, partes imaginarias
  opuestas: exactamente la definición de conjugados.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Todo número real es también un número complejo, con parte imaginaria igual a 0."

explicacion: |
  a + 0i es simplemente a — los complejos incluyen a los reales como
  caso particular.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Un número de la forma bi (con b distinto de 0, y parte real 0) se llama 'imaginario puro'."

explicacion: |
  Ni real ni con parte real distinta de 0 — sólo la parte imaginaria.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["multiplicacion"]

variables:
  b: random(2, 10)
  d: random(2, 10)

respuesta: -(b * d)
tipo: input
tolerancia_abs: 0

enunciado: "({b}i) × ({d}i). ¿Cuánto da (un número real)?"

pasos:
  - "({b}i)({d}i) = {b * d}×i² = {b * d}×(−1) = {-(b * d)}"

explicacion: |
  Multiplicar dos imaginarios puros siempre da un real (negativo, si los
  dos coeficientes son positivos).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["suma", "verdadero_falso"]

variables:
  a: random(-15, 15)
  b: random(1, 15)

respuesta: ((b + (-b)) == 0)
tipo: vf

enunciado: "({a} + {b}i) + ({a} − {b}i). ¿Da 0 la parte imaginaria del resultado (o sea, el resultado es un real puro)?"

explicacion: |
  Sumar un complejo con su conjugado siempre cancela la parte
  imaginaria, dejando 2a como resultado real.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(-8, 8)
  b: random(-8, 8)
  c: random(-8, 8)
  d: random(-8, 8)
  real: a * c - b * d
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "({a} + {b}i) × ({c} + {d}i). ¿Es correcto que la parte real del resultado sea {propuesto}?"

explicacion: |
  La parte real correcta es ac − bd = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular i elevado a un exponente muy grande, alcanza con mirar el resto de dividir el exponente por 4."

explicacion: |
  El patrón 1, i, −1, −i se repite cada 4 potencias — el resto módulo 4
  dice en qué parte del ciclo cae.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "intermedio"
  tags: ["resta", "verdadero_falso"]

variables:
  a: random(-15, 15)
  b: random(1, 15)
  d: random(1, 15)

respuesta: ((a - a) == 0)
tipo: vf

enunciado: "({a} + {b}i) − ({a} + {d}i). ¿Da 0 la parte real del resultado?"

explicacion: |
  Al tener la misma parte real en los dos complejos, se cancela al
  restar, dejando un imaginario puro.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Se puede decir que un número complejo es 'mayor' o 'menor' que otro, igual que con los números reales."

explicacion: |
  Los complejos no tienen un orden natural como los reales — no tiene
  sentido preguntar si 3+2i es mayor o menor que 1+5i.
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: a ^ 2 - b ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i)². ¿Cuál es la parte real del resultado?"

pasos:
  - "(a+bi)² = a² + 2abi + b²i² = a² − b² + 2abi"

explicacion: |
  La parte real es a² − b² (el término i² convierte +b² en −b²).
```

```
metadata:
  materia: "matematicas"
  tema: "numeros_complejos"
  nivel: "avanzado"
  tags: ["multiplicacion"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: 2 * a * b
tipo: input
tolerancia_abs: 0

enunciado: "({a} + {b}i)². ¿Cuál es la parte imaginaria del resultado?"

explicacion: |
  2ab = 2×{a}×{b} = {2 * a * b}.
```

## Sección: familias-exponencial-logaritmica (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  n: random(1, 6)

respuesta: 10 ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 10^x. ¿Cuánto vale f({n})?"

explicacion: |
  10^{n} = {10 ^ n}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 10)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}^x. ¿Cuánto vale f(0)?"

explicacion: |
  Cualquier base elevada a 0 da 1, sin importar cuál sea la base.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["exponencial"]

variables:
  a: random(2, 8)
  n: random(1, 5)

respuesta: a ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}^x. ¿Cuánto vale f({n})?"

explicacion: |
  {a}^{n} = {a ^ n}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["exponencial", "decaimiento"]

variables:
  base_inv: uno_de([2, 5])
  n: random(1, 4)

respuesta: 1 / (base_inv ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (1/{base_inv})^x. ¿Cuánto vale f({n})?"

pasos:
  - "(1/{base_inv})^{n} = 1/{base_inv}^{n} = 1/{base_inv ^ n} = {1 / (base_inv ^ n)}"

explicacion: |
  Con base entre 0 y 1, la función decae en vez de crecer.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["logaritmica"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g({x})?"

explicacion: |
  log₁₀({x}) = {n}, porque 10^{n} = {x}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["logaritmica"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g(1)?"

explicacion: |
  El logaritmo de 1 siempre da 0, sin importar la base.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["logaritmica"]

variables:
  n: random(1, 5)
  x: 10 ^ n * 10

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "g(x) = log₁₀(x). ¿Cuánto vale g({x})?"

explicacion: |
  {x} = 10^{n + 1}, así que g({x}) = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["inversa", "verdadero_falso"]

variables:
  n: random(1, 6)

respuesta: (log10(10 ^ n) == n)
tipo: vf

enunciado: "f(x) = 10^x, g(x) = log₁₀(x). ¿g(f({n})) da de vuelta {n}?"

explicacion: |
  Es la definición de funciones inversas: una deshace lo que hace la
  otra.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["inversa", "verdadero_falso"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: ((10 ^ log10(x)) == x)
tipo: vf

enunciado: "f(x) = 10^x, g(x) = log₁₀(x). ¿f(g({x})) da de vuelta {x}?"

explicacion: |
  Aplicar la exponencial después del logaritmo también devuelve el
  valor original.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de cualquier función exponencial f(x) = aˣ son todos los números reales."

explicacion: |
  Cualquier exponente (entero, fraccionario, negativo) tiene sentido.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El dominio de la función logarítmica también son todos los reales, igual que la exponencial."

explicacion: |
  El dominio del logaritmo es sólo x > 0 — no se puede sacar logaritmo
  de 0 ni de un número negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "imagen", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La imagen de cualquier función exponencial f(x) = aˣ (con a>0) es y > 0."

explicacion: |
  Una potencia con base positiva nunca da 0 ni negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "imagen", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La imagen de la función logarítmica son todos los números reales."

explicacion: |
  A diferencia del dominio (restringido a x>0), la imagen del logaritmo
  cubre todos los reales — el dominio y la imagen se invierten entre
  exponencial y logarítmica.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Existe algún valor de x para el cual 10^x da exactamente 0."

explicacion: |
  Nunca — la exponencial se acerca a 0 (asíntota horizontal) pero jamás
  lo toca.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una función exponencial tiene una asíntota horizontal en y=0."

explicacion: |
  La curva se acerca cada vez más al eje x sin tocarlo nunca.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una función logarítmica tiene una asíntota vertical en x=0."

explicacion: |
  Cuando x se acerca a 0 por la derecha, el logaritmo se va hacia menos
  infinito sin llegar nunca a x=0 (que ni siquiera está en el dominio).
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A la larga, cualquier función exponencial con base mayor que 1 termina superando a cualquier función lineal, sin importar cuán grande sea la pendiente de esta última."

explicacion: |
  El crecimiento exponencial multiplica en cada paso; el lineal suma
  siempre lo mismo — a la larga, multiplicar gana.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  m: random(50, 200)
  n: random(10, 15)

respuesta: ((2 ^ n) > (m * n))
tipo: vf

enunciado: "f(x) = 2^x (exponencial) y g(x) = {m}x (lineal, con pendiente grande). ¿f({n}) ya supera a g({n})?"

explicacion: |
  Aunque {m} es una pendiente grande, el crecimiento exponencial termina
  superándola para un x suficientemente grande.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "decaimiento", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Con base entre 0 y 1 (por ejemplo, f(x) = (1/2)ˣ), la función decrece en vez de crecer."

explicacion: |
  A diferencia de a>1, con 0<a<1 cada paso multiplica por un número
  menor a 1, así que el valor disminuye.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["exponencial", "decaimiento"]

variables:
  base_inv: random(2, 5)
  n: random(1, 4)

respuesta: base_inv ^ n
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (1/{base_inv})^x. ¿Cuánto vale f(−{n})?"

pasos:
  - "(1/{base_inv})^(−{n}) = {base_inv}^{n} = {base_inv ^ n}"

explicacion: |
  Un exponente negativo con base fraccionaria "da vuelta" la fracción,
  volviendo a crecer.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La función logarítmica es la función inversa de la exponencial de la misma base."

explicacion: |
  Una deshace lo que hace la otra — mismo concepto ya visto en
  `../funcion-inversa-composicion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Los gráficos de una función exponencial y su logaritmo inverso son reflejos uno del otro respecto a la recta y=x."

explicacion: |
  Es una propiedad general de cualquier par de funciones inversas.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 5)
  real: 10 ^ n
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = 10^x. ¿Es correcto que f({n}) sea {propuesto}?"

explicacion: |
  El valor correcto es 10^{n} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 6)
  x: 10 ^ n
  error: uno_de([0, 0, 1, -1])
  propuesto: n + error

respuesta: (propuesto == n)
tipo: vf

enunciado: "g(x) = log₁₀(x). ¿Es correcto que g({x}) sea {propuesto}?"

explicacion: |
  El valor correcto es log₁₀({x}) = {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "avanzado"
  tags: ["exponencial", "problema"]

variables:
  poblacion_inicial: random(100, 1000)
  tasa: random(2, 4)
  anios: random(1, 4)

respuesta: poblacion_inicial * tasa ^ anios
tipo: input
tolerancia_abs: 0

enunciado: "Una población se duplica (o se multiplica por {tasa}) cada año: P(t) = {poblacion_inicial}×{tasa}^t. ¿Cuál es la población después de {anios} años?"

explicacion: |
  Es una función exponencial: el crecimiento multiplica, no suma, en
  cada paso.
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "log₁₀(x) y ln(x) son exactamente la misma función, sólo con otro nombre."

explicacion: |
  Son logaritmos de distinta base: log₁₀ es base 10, ln es logaritmo
  natural (base e) — dan resultados distintos para el mismo x (ver
  `../logaritmos/` de Tronco 1).
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "basico"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "log₁₀(−5) da un número real negativo."

explicacion: |
  No está definido: −5 no pertenece al dominio del logaritmo (x tiene
  que ser mayor que 0).
```

```
metadata:
  materia: "matematicas"
  tema: "familias_exponencial_logaritmica"
  nivel: "intermedio"
  tags: ["exponencial", "logaritmica"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "10^x = {x}. ¿Cuánto vale x?"

pasos:
  - "x = log₁₀({x}) = {n}"

explicacion: |
  Despejar un exponente es, exactamente, aplicar el logaritmo — la
  operación inversa.
```

