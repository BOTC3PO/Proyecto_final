# Matemática — Ecuación de la recta: pendiente y ordenada al origen (cuestionario, 26 preguntas VBLang)

> Tema: `GA5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la ordenada al origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Qué es la ordenada al origen de una recta?"
tipo: mc
opciones_explicitas:
  - "El punto donde la recta cruza el eje y"
  - "El punto donde la recta cruza el eje x"
  - "La pendiente de la recta"
respuesta: "El punto donde la recta cruza el eje y"

explicacion: |
  Es el punto (0, b): se obtiene evaluando la ecuación en x = 0.
```

### 2 — Qué es la abscisa al origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Qué es la abscisa al origen (o raíz) de una recta?"
tipo: mc
opciones_explicitas:
  - "El punto donde la recta cruza el eje x"
  - "El punto donde la recta cruza el eje y"
  - "El punto más alejado del origen"
respuesta: "El punto donde la recta cruza el eje x"

explicacion: |
  Se obtiene poniendo y = 0 en la ecuación y despejando x.
```

### 3 — Problema: ordenada al origen directa de la ecuación

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, 4, 5, -2, -3])
  b: uno_de([1, 2, 5, -3, -4, 6])

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su ordenada al origen?"

pasos:
  - "En x = 0: y = {m} × 0 + {b} = {b}"

explicacion: |
  La ordenada al origen es directamente el término independiente b.
```

### 4 — Problema: abscisa al origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 4, 5])
  k: random(-6, 6)
  b: 0 - (m * k)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su abscisa al origen (dónde cruza el eje x)?"

pasos:
  - "0 = {m}x + {b}"
  - "x = -{b} ÷ {m} = {k}"

explicacion: |
  Se pone y = 0 y se despeja x.
```

### 5 — Problema: evaluar la recta en un punto

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, 4, -2])
  b: uno_de([1, 3, 5, -2])
  x: random(1, 8)

respuesta: (m * x) + b
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es el valor de y cuando x = {x}?"

pasos:
  - "y = {m} × {x} + {b} = {(m * x) + b}"

explicacion: |
  Se reemplaza x por el valor dado y se calcula y.
```

### 6 — Si b = 0, la recta pasa por el origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si la ordenada al origen de una recta es b = 0, la recta pasa exactamente por el origen (0, 0)."

explicacion: |
  La ecuación queda y = mx, que en x = 0 da y = 0.
```

### 7 — Si m = 0, la recta es horizontal

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si la pendiente de una recta es m = 0, la recta es horizontal: y = b para cualquier valor de x."

explicacion: |
  Sin inclinación, la recta no sube ni baja.
```

### 8 — Una recta horizontal con b ≠ 0 no cruza el eje x

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta horizontal y = b, con b distinto de 0, nunca cruza el eje x."

explicacion: |
  Como y vale siempre b (nunca 0), no hay ningún punto de esa recta
  sobre el eje x.
```

### 9 — Una recta vertical no se puede escribir como y = mx + b

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta vertical (x = k, para cualquier k) no se puede escribir en la forma y = mx + b."

explicacion: |
  Su pendiente es indefinida: a un mismo x le corresponderían infinitos
  valores de y.
```

### 10 — Por qué la recta vertical no tiene pendiente definida

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Por qué una recta vertical no tiene una pendiente definida?"
tipo: mc
opciones_explicitas:
  - "Porque todos sus puntos comparten el mismo x, y la fórmula de pendiente dividiría por (x₂ − x₁) = 0"
  - "Porque las rectas verticales no existen en geometría"
  - "Porque su pendiente siempre vale exactamente 0"
respuesta: "Porque todos sus puntos comparten el mismo x, y la fórmula de pendiente dividiría por (x₂ − x₁) = 0"

explicacion: |
  Dividir por 0 no está definido — por eso la pendiente de una recta
  vertical no existe como número.
```

### 11 — Problema: verificar si un punto está sobre la recta (caso verdadero)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, -2])
  b: uno_de([1, 4, -3])
  x: random(1, 6)
  oy: (m * x) + b

respuesta: verdadero
tipo: vf

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿El punto ({x}, {oy}) está sobre esa recta?"

explicacion: |
  Reemplazando x = {x}: y = {m} × {x} + {b} = {oy}, que coincide con la
  ordenada del punto.
```

### 12 — Problema: verificar si un punto está sobre la recta (caso falso)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([2, 3, -2])
  b: uno_de([1, 4, -3])
  x: random(1, 6)
  y_real: (m * x) + b
  y_falso: y_real + random(1, 4)

respuesta: falso
tipo: vf

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿El punto ({x}, {y_falso}) está sobre esa recta?"

explicacion: |
  Reemplazando x = {x}, la recta da y = {y_real}, que NO coincide con
  {y_falso}: el punto no está sobre la recta.
```

### 13 — Ordenar: pasos para graficar una recta desde su ecuación

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "ordenar"]

enunciado: "Ordená los pasos para graficar la recta y = mx + b sin tabular muchos puntos."
tipo: ordenar
opciones_explicitas:
  - "Trazar la recta que pasa por esos dos puntos"
  - "Marcar el punto (0, b), la ordenada al origen"
  - "Desde ese punto, usar la pendiente m para subir/bajar y avanzar, marcando un segundo punto"
respuesta_orden: ["Marcar el punto (0, b), la ordenada al origen", "Desde ese punto, usar la pendiente m para subir/bajar y avanzar, marcando un segundo punto", "Trazar la recta que pasa por esos dos puntos"]
explicacion: |
  Con sólo dos puntos alcanza para trazar toda la recta.
```

### 14 — Qué significa la pendiente al graficar (subir y avanzar)

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "Si una recta tiene pendiente m = 3/4, ¿cómo se usa ese valor para marcar un segundo punto desde la ordenada al origen?"
tipo: mc
opciones_explicitas:
  - "Subir 3 unidades y avanzar 4 unidades hacia la derecha"
  - "Avanzar 3 unidades y subir 4 unidades"
  - "Subir 4 unidades y avanzar 3 hacia la izquierda"
respuesta: "Subir 3 unidades y avanzar 4 unidades hacia la derecha"

explicacion: |
  La pendiente es "cuánto sube, dividido cuánto avanza": el numerador es
  la subida, el denominador el avance horizontal.
```

### 15 — Problema: segundo punto usando la pendiente como fracción

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  b: uno_de([1, 2, 3])
  avance: uno_de([2, 3, 4])
  subida: uno_de([1, 2, 3])

respuesta: b + subida
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por (0, {b}) y tiene pendiente {subida}/{avance}. Si desde ese punto se avanza {avance} hacia la derecha, ¿en qué valor de y queda el nuevo punto?"

pasos:
  - "{b} + {subida} = {b + subida}"

explicacion: |
  Avanzar exactamente el denominador de la pendiente hace subir (o
  bajar) exactamente el numerador.
```

### 16 — La ordenada al origen se obtiene con x = 0

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La ordenada al origen de una recta se obtiene evaluando su ecuación en x = 0."

explicacion: |
  y = m×0 + b = b.
```

### 17 — La abscisa al origen se obtiene con y = 0

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La abscisa al origen de una recta se obtiene poniendo y = 0 en su ecuación y despejando x."

explicacion: |
  0 = mx + b, así que x = −b/m.
```

### 18 — Problema: abscisa al origen con números negativos

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: uno_de([-2, -3, -5])
  k: random(1, 8)
  b: 0 - (m * k)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Una recta tiene ecuación y = {m}x + {b}. ¿Cuál es su abscisa al origen?"

pasos:
  - "0 = {m}x + {b}"
  - "x = -{b} ÷ ({m}) = {k}"

explicacion: |
  Con pendiente negativa, el cálculo funciona exactamente igual.
```

### 19 — Qué es la raíz de una recta

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "En geometría analítica, ¿qué es la 'raíz' de una recta?"
tipo: mc
opciones_explicitas:
  - "Otro nombre para la abscisa al origen"
  - "Otro nombre para la ordenada al origen"
  - "Otro nombre para la pendiente"
respuesta: "Otro nombre para la abscisa al origen"

explicacion: |
  Es el valor de x donde la recta "vale cero" (cruza el eje x).
```

### 20 — Problema: ecuación de una recta que pasa por el origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "problema"]

variables:
  m: random(2, 8)
  x: random(1, 10)

respuesta: m * x
tipo: input
tolerancia_abs: 0

enunciado: "Una recta pasa por el origen y tiene pendiente {m} (es decir, y = {m}x). ¿Cuánto vale y cuando x = {x}?"

pasos:
  - "{m} × {x} = {m * x}"

explicacion: |
  Sin ordenada al origen (b = 0), la ecuación se reduce a y = mx.
```

### 21 — Toda recta no vertical tiene ordenada al origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Toda recta que no sea vertical cruza el eje y en algún punto, así que tiene una ordenada al origen definida."

explicacion: |
  Sólo las rectas verticales (x = k) pueden no cruzar el eje y en ningún
  punto (salvo la propia recta x = 0).
```

### 22 — Distinguir recta horizontal de vertical

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre la ecuación de una recta horizontal y una vertical?"
tipo: mc
opciones_explicitas:
  - "La horizontal es y = b (pendiente 0); la vertical es x = k (pendiente indefinida)"
  - "Son la misma ecuación, escrita de dos formas distintas"
  - "La horizontal es x = k; la vertical es y = b"
respuesta: "La horizontal es y = b (pendiente 0); la vertical es x = k (pendiente indefinida)"

explicacion: |
  Sólo la horizontal se puede escribir en la forma y = mx + b (con
  m = 0); la vertical no.
```

### 23 — Problema: leer la ordenada al origen desde dos puntos marcados

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta", "problema"]

variables:
  b: uno_de([2, 4, 6])
  m: uno_de([2, 3])
  x2: random(1, 5)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "En un gráfico, una recta pasa por el punto (0, {b}) y por el punto ({x2}, {(m * x2) + b}). ¿Cuál es su ordenada al origen?"

pasos:
  - "El punto (0, {b}) ya está sobre el eje y: la ordenada al origen es {b}"

explicacion: |
  Cuando uno de los puntos marcados ya tiene x = 0, la ordenada al
  origen se lee directamente, sin ningún cálculo extra.
```

### 24 — y = mx + b con b distinto de 0 no pasa por el origen

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "intermedio"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "Si b es distinto de 0 en y = mx + b, la recta no pasa por el origen (0, 0)."

explicacion: |
  En x = 0, y valdría b (no 0), así que el origen no está sobre esa
  recta.
```

### 25 — La ecuación de la recta conecta álgebra y geometría

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "avanzado"
  tags: ["ecuacion_recta"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación y = mx + b es el mismo objeto que la función lineal de Álgebra, ahora leída como el dibujo de una recta sobre el plano cartesiano."

explicacion: |
  Es la idea central de este módulo: la pendiente que se despeja
  algebraicamente es la misma que se ve como inclinación en el gráfico.
```

### 26 — Cierre: para qué sirve esta lectura geométrica

```
metadata:
  materia: "matematicas"
  tema: "ecuacion_de_la_recta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve poder pasar de la ecuación de una recta a su dibujo, y viceversa?"
tipo: mc
opciones_explicitas:
  - "Para resolver problemas geométricos reales: hallar cruces con los ejes, verificar puntos, y comparar rectas entre sí"
  - "Sólo sirve para memorizar más fórmulas"
  - "Sólo aplica a rectas que pasan por el origen"
respuesta: "Para resolver problemas geométricos reales: hallar cruces con los ejes, verificar puntos, y comparar rectas entre sí"

explicacion: |
  Es la base para el módulo siguiente,
  `../rectas-paralelas-y-perpendiculares/`.
```
