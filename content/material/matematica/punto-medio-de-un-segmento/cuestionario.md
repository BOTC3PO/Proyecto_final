# Matemática — Punto medio de un segmento (cuestionario, 24 preguntas VBLang)

> Tema: `GA4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el punto medio de un segmento

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

### 2 — Completar: fórmula del punto medio

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

### 3 — Problema: abscisa del punto medio

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

### 4 — Problema: punto medio completo

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

### 5 — Problema: ordenada del punto medio

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

### 6 — Problema: punto medio con coordenadas negativas

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

### 7 — El punto medio equidista de ambos extremos

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

### 8 — Problema: distancia del punto medio a cada extremo

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

### 9 — El punto medio no necesita raíz cuadrada

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

### 10 — Problema: hallar un extremo dado el punto medio

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

### 11 — El punto medio siempre está sobre el propio segmento

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

### 12 — Qué es la mediatriz

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

### 13 — Ordenar: pasos para hallar el punto medio

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

### 14 — Problema: punto medio de un segmento vertical

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

### 15 — El punto medio de (a, b) y (a, b) es el mismo punto

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

### 16 — Problema: punto medio como centro de una figura

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

### 17 — El promedio da el valor "del medio" en la recta numérica

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

### 18 — El punto medio no depende de la fórmula de distancia

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

### 19 — Problema: punto medio en el origen

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

### 20 — Problema: verificar si un punto es el punto medio

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

### 21 — El punto medio es único

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

### 22 — Vocabulario: extremos de un segmento

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

### 23 — Problema: punto medio de un lado de un cuadrado

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

### 24 — Cierre: para qué sirve el punto medio

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
