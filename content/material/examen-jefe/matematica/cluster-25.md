# Examen jefe — Dominio de Geometría Analítica

> Logro #76. Completaste el parcial integrando punto medio, rectas y razones trigonométricas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

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
respuesta_orden:
  - "Sumar las dos abscisas y dividir por 2"
  - "Sumar las dos ordenadas y dividir por 2"
  - "Combinar ambos resultados en un nuevo par ordenado"

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

## Sección: raices (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

enunciado: "¿Qué es la raíz cuadrada de un número a?"
tipo: mc
opciones_explicitas:
  - "El número b tal que b² = a"
  - "El número a dividido 2"
  - "El número a multiplicado por sí mismo"
respuesta: "El número b tal que b² = a"

explicacion: |
  La raíz cuadrada es la operación inversa de elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices"]

variables:
  k: random(2, 15)
  n: k ^ 2

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

pasos:
  - "{n} es {k}², así que su raíz cuadrada es {k}"

explicacion: |
  Cuando el radicando es un cuadrado perfecto, la raíz da exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(10, 30)
  n: k ^ 2

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: buscar qué número
  elevado al cuadrado da {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 10)
  n: k ^ 3

respuesta: raiz(n, 3)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cúbica de {n}?"

pasos:
  - "{n} es {k}³, así que su raíz cúbica es {k}"

explicacion: |
  La raíz cúbica busca qué número, elevado al cubo, da el radicando.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "vocabulario"]

variables:
  b: random(2, 20)
  a: b ^ 2

respuesta: (sqrt(a) == b)
tipo: vf

enunciado: "Sabiendo que {b}² = {a}, ¿es cierto que √{a} = {b}?"

explicacion: |
  La raíz cuadrada deshace lo que hizo elevar al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  k: random(2, 6)
  n: k ^ 4

respuesta: raiz(n, 4)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cuarta de {n}?"

explicacion: |
  Con índice 4, se busca qué número elevado a la 4 da el radicando.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  n: random(2, 99)

respuesta: sqrt(n)
tipo: input
tolerancia_abs: 0.01

enunciado: "¿Cuánto es (aproximadamente) √{n}?"

explicacion: |
  No todos los números tienen raíz cuadrada exacta: cuando no la tiene,
  el resultado es un decimal con infinitas cifras, y se acepta una
  aproximación.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "propiedades"]

variables:
  a: random(2, 20) ^ 2
  b: random(2, 20) ^ 2

respuesta: (sqrt(a * b) == sqrt(a) * sqrt(b))
tipo: vf

enunciado: "¿Es cierto que √({a} × {b}) da lo mismo que √{a} × √{b}?"

explicacion: |
  Es la propiedad de la raíz de un producto: se puede separar en la raíz
  de cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "propiedades"]

variables:
  b: random(2, 15) ^ 2
  k: random(2, 10) ^ 2
  a: b * k

respuesta: (sqrt(a / b) == sqrt(a) / sqrt(b))
tipo: vf

enunciado: "¿Es cierto que √({a} ÷ {b}) da lo mismo que √{a} ÷ √{b}?"

explicacion: |
  Es la propiedad de la raíz de un cociente: se puede separar en la raíz
  del numerador dividida por la raíz del denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices", "propiedades"]

variables:
  a: random(2, 15) ^ 2
  b: random(2, 15) ^ 2

respuesta: sqrt(a) * sqrt(b)
tipo: input
tolerancia_abs: 0

enunciado: "Usando la propiedad de la raíz de un producto, ¿cuánto es √({a} × {b})?"

pasos:
  - "√{a} × √{b} = {sqrt(a)} × {sqrt(b)} = {sqrt(a) * sqrt(b)}"

explicacion: |
  Separar el producto en dos raíces cuadradas perfectas hace la cuenta
  más fácil.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dentro de los números reales, la raíz cuadrada de un número negativo no tiene solución."

explicacion: |
  Ningún número real, elevado al cuadrado, puede dar un resultado
  negativo: el cuadrado de cualquier número real es siempre positivo o
  cero.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 10)
  n: -(k ^ 3)

respuesta: -k
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la raíz cúbica de {n}?"

pasos:
  - "(-{k})³ = {n}, así que la raíz cúbica de {n} es -{k}"

explicacion: |
  A diferencia de la raíz cuadrada, la raíz cúbica de un negativo sí tiene
  solución (negativa): un número negativo elevado a un exponente impar
  sigue dando negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La raíz cuadrada es la operación inversa de elevar al cuadrado, igual que la resta es inversa de la suma."

explicacion: |
  Aplicar una y después la otra vuelve al número original.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 20)
  n: k ^ 2

respuesta: k
tipo: mc
opciones_explicitas:
  - k
  - n / 2
  - k + 1

enunciado: "¿Cuál es la raíz cuadrada de {n}?"

explicacion: |
  Las otras opciones confunden la raíz con dividir por 2, o se equivocan
  por poco.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "verificacion"]

variables:
  k: random(2, 20)
  n: k ^ 2
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: k + error

respuesta: (mostrado * mostrado == n)
tipo: vf

enunciado: "¿Está bien calculado esto? √{n} = {mostrado}"

explicacion: |
  Se verifica elevando {mostrado} al cuadrado y comparando con {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  k: random(2, 8)
  indice: uno_de([2, 3, 4])
  n: k ^ indice

tipo: completar
enunciado: "___√{n} = {k}. Completá el índice de la raíz (2, 3 o 4)."
respuestas_validas:
  - indice

explicacion: |
  Hay que encontrar a qué índice hay que elevar {k} para llegar a {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  k: random(2, 20)

tipo: completar
enunciado: "Completá: √___ = {k}."
respuestas_validas:
  - k ^ 2

explicacion: |
  El radicando que falta es {k} elevado al cuadrado (para deshacer la
  raíz).
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "problema"]

variables:
  lado: random(2, 30)
  area: lado ^ 2

respuesta: lado
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene un área de {area} cm². ¿Cuánto mide su lado?"

pasos:
  - "El lado es la raíz cuadrada del área: √{area} = {lado}"

explicacion: |
  Como el área de un cuadrado es lado², el lado se encuentra con la raíz
  cuadrada del área.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "problema"]

variables:
  arista: random(2, 15)
  volumen: arista ^ 3

respuesta: arista
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo tiene un volumen de {volumen} cm³. ¿Cuánto mide su arista?"

pasos:
  - "La arista es la raíz cúbica del volumen: ∛{volumen} = {arista}"

explicacion: |
  Como el volumen de un cubo es arista³, la arista se encuentra con la
  raíz cúbica del volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "orden"]

tipo: ordenar
enunciado: "Calculá estas raíces y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "√81"
  - "√16"
  - "√49"
  - "√4"
respuesta_orden: ["√4", "√16", "√49", "√81"]

explicacion: |
  √4=2, √16=4, √49=7, √81=9: hay que calcular cada una antes de poder
  ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "comparacion"]

variables:
  a: random(2, 99)
  b: random(2, 99)

restricciones:
  - a != b

respuesta: (sqrt(a) > sqrt(b))
tipo: vf

enunciado: "¿Es √{a} mayor que √{b}?"

explicacion: |
  A mayor radicando, mayor la raíz cuadrada: no hace falta calcular las
  dos raíces exactas para saber cuál es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices"]

variables:
  n: random(2, 99)
  k: floor(sqrt(n))

respuesta: (k * k == n)
tipo: vf

enunciado: "¿Es exacta la raíz cuadrada de {n} (da como resultado un número entero)?"

explicacion: |
  Es exacta sólo cuando el radicando es un cuadrado perfecto (1, 4, 9, 16,
  25...).
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "casos_especiales"]

respuesta: verdadero
tipo: vf

enunciado: "La raíz cuadrada de 0 es 0, y la raíz cuadrada de 1 es 1."

explicacion: |
  0² = 0 y 1² = 1: los dos son casos especiales donde el número y su raíz
  coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "avanzado"
  tags: ["raices"]

variables:
  base: random(2, 20)

respuesta: base
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es √({base}²)?"

pasos:
  - "La raíz cuadrada deshace el cuadrado: √({base}²) = {base}"

explicacion: |
  Elevar al cuadrado y después sacar raíz cuadrada son operaciones
  inversas: se cancelan entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "intermedio"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque √2 no tenga una cantidad finita de cifras decimales, sigue siendo un número real, ubicable en la recta numérica."

explicacion: |
  No tener un valor "exacto y corto" no significa que no sea un número
  real de verdad — es el adelanto del próximo tema, irracionales.
```

```
metadata:
  materia: "matematicas"
  tema: "raices"
  nivel: "basico"
  tags: ["raices", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sacar raíz es la operación inversa de elevar a una potencia: buscar qué número, elevado al índice de la raíz, da el radicando."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: razon (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

enunciado: "¿Qué es una razón entre dos cantidades?"
tipo: mc
opciones_explicitas:
  - "La comparación de las dos cantidades por cociente (a:b)"
  - "La suma de las dos cantidades"
  - "La diferencia entre las dos cantidades"
respuesta: "La comparación de las dos cantidades por cociente (a:b)"

explicacion: |
  Una razón compara dos cantidades dividiendo una por la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon"]

variables:
  varones: random(5, 30)
  mujeres: random(5, 30)

respuesta: varones
tipo: input
tolerancia_abs: 0

enunciado: "En un salón hay {varones} varones y {mujeres} mujeres. ¿Cuál es el primer término de la razón varones:mujeres?"

explicacion: |
  El primer término de la razón es la primera cantidad mencionada, en el
  mismo orden en que se pide.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  a: divisor_comun * random(2, 9)
  b: divisor_comun * random(2, 9)
  simplificador: mcd(a, b)

restricciones:
  - a != b

respuesta: a / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar la razón {a}:{b} al máximo, ¿cuál queda el primer término?"

pasos:
  - "MCD({a}, {b}) = {simplificador}. {a} ÷ {simplificador} = {a / simplificador}"

explicacion: |
  Simplificar una razón es dividir los dos términos por su MCD, igual que
  con las fracciones.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Son equivalentes las razones {a}:{b} y {c}:{d}?"

explicacion: |
  Dos razones son equivalentes si representan la misma relación,
  verificable con el producto cruzado.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Son equivalentes las razones {a}:{b} y {c}:{d}?"

explicacion: |
  El producto cruzado no coincide: no representan la misma relación.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre una razón y una fracción?"
tipo: mc
opciones_explicitas:
  - "La fracción compara una parte con el todo; la razón compara dos cantidades que pueden ser independientes"
  - "No hay ninguna diferencia, son exactamente lo mismo"
  - "Una razón siempre tiene denominador 100"
respuesta: "La fracción compara una parte con el todo; la razón compara dos cantidades que pueden ser independientes"

explicacion: |
  Se escriben igual, pero el significado de cada término es distinto.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  distancia: random(60, 400)
  horas: random(2, 8)

respuesta: distancia / horas
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {distancia} km en {horas} horas. ¿Cuál es la razón entre distancia y tiempo (la velocidad, en km/h)?"

explicacion: |
  La velocidad es una razón: distancia recorrida por cada unidad de
  tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  masa: random(20, 500)
  volumen: random(2, 20)

respuesta: masa / volumen
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene {masa} gramos de masa en {volumen} cm³ de volumen. ¿Cuál es la razón entre masa y volumen (la densidad, en g/cm³)?"

explicacion: |
  La densidad es otra razón de la vida diaria: masa por cada unidad de
  volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  cm_mapa: random(1, 9)
  km_real: cm_mapa * random(10, 100)

respuesta: km_real / cm_mapa
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mapa, {cm_mapa} cm representan {km_real} km reales. ¿Cuántos km representa cada cm (la escala del mapa)?"

explicacion: |
  La escala de un mapa es la razón entre la distancia dibujada y la
  distancia real.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)

respuesta: a * k
tipo: mc
opciones_explicitas:
  - a * k
  - a * k + 1
  - a + k

enunciado: "¿Cuál es el primer término de una razón equivalente a {a}:{b}, con segundo término {b * k}?"

explicacion: |
  Si el segundo término se multiplicó por {k}, el primero también tiene
  que multiplicarse por {k}.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 6)
  equivalente: a * k
  no_equivalente: equivalente + 1

respuesta: no_equivalente
tipo: mc
opciones_explicitas:
  - equivalente
  - no_equivalente

enunciado: "Con segundo término {b * k}, ¿cuál de estos dos primeros términos NO forma una razón equivalente a {a}:{b}?"

explicacion: |
  Sólo {a} × {k} = {equivalente} mantiene la misma relación.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "equivalencia"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}:{b} = ___:{b * k} (razones equivalentes)."
respuestas_validas:
  - a * k

explicacion: |
  El término que falta guarda la misma proporción: se multiplica {a} por
  el mismo {k} que multiplicó al segundo término.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  divisor_comun: random(2, 9)
  a: divisor_comun * random(2, 9)
  b: divisor_comun * random(2, 9)
  simplificador: mcd(a, b)

restricciones:
  - a != b

respuesta: b / simplificador
tipo: input
tolerancia_abs: 0

enunciado: "Al simplificar {a}:{b} al máximo, ¿cuál queda el segundo término?"

explicacion: |
  Se divide también el segundo término por el mismo MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "simplificar"]

variables:
  a: random(1, 20)
  b: a + 1

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}:{b} una razón irreducible (que ya no se puede simplificar más)?"

explicacion: |
  Como {a} y {b} son consecutivos, su MCD es 1: no se pueden simplificar.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "avanzado"
  tags: ["razon", "comparacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: (a * d > b * c)
tipo: vf

enunciado: "¿Es la razón {a}:{b} mayor que la razón {c}:{d}?"

pasos:
  - "Producto cruzado: {a} × {d} = {a * d}. {b} × {c} = {b * c}."

explicacion: |
  Se compara igual que fracciones: a/b es mayor que c/d si a×d es mayor
  que b×c.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "problema"]

variables:
  aprobados: random(10, 30)
  desaprobados: random(3, 15)

respuesta: aprobados
tipo: input
tolerancia_abs: 0

enunciado: "En un examen, {aprobados} alumnos aprobaron y {desaprobados} desaprobaron. ¿Cuál es el primer término de la razón aprobados:desaprobados?"

explicacion: |
  Se escribe en el orden que pide el enunciado: primero aprobados,
  después desaprobados.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "verificacion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_correcto: a * k
  error: uno_de([0, 0, 0, 1, -1])
  c_mostrado: c_correcto + error
  d: b * k

respuesta: (a * d == c_mostrado * b)
tipo: vf

enunciado: "¿Es {c_mostrado}:{d} equivalente a {a}:{b}?"

explicacion: |
  Se verifica con el producto cruzado.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón también puede comparar más de dos cantidades a la vez, como 2:3:5."

explicacion: |
  No siempre son dos términos: una razón puede tener varios, comparando
  todas las cantidades entre sí al mismo tiempo (por ejemplo, para
  repartir algo en varias partes con proporciones distintas).
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "problema"]

variables:
  agua: random(2, 5)
  jugo_concentrado: random(1, 3)

respuesta: agua
tipo: input
tolerancia_abs: 0

enunciado: "Una receta usa {agua} partes de agua por cada {jugo_concentrado} parte(s) de jugo concentrado. ¿Cuál es el primer término de esa razón (agua:concentrado)?"

explicacion: |
  Las recetas de cocina suelen expresarse como razones entre ingredientes.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "intermedio"
  tags: ["razon", "orden"]

tipo: ordenar
enunciado: "Ordená estas razones de menor a mayor (todas tienen el mismo segundo término)."
opciones_explicitas:
  - "5:8"
  - "1:8"
  - "6:8"
  - "3:8"
respuesta_orden: ["1:8", "3:8", "5:8", "6:8"]

explicacion: |
  Con el mismo segundo término, alcanza con ordenar el primero.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón a:b se puede escribir también como la fracción a/b."

explicacion: |
  Son dos formas distintas de escribir la misma comparación por cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "razon"
  nivel: "basico"
  tags: ["razon", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una razón compara dos cantidades por cociente, y esas cantidades pueden ser de magnitudes distintas (como km y horas)."

explicacion: |
  A diferencia de una fracción, los dos términos de una razón no
  necesitan ser "parte de lo mismo": la velocidad compara distancia con
  tiempo, dos magnitudes distintas.
```

## Sección: razones-trigonometricas (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "vocabulario"]

enunciado: "En un triángulo rectángulo, respecto de un ángulo agudo elegido, ¿qué es el cateto opuesto?"
tipo: mc
opciones_explicitas:
  - "El cateto que no toca a ese ángulo, el que está 'enfrente'"
  - "El cateto que sí toca a ese ángulo"
  - "La hipotenusa"
respuesta: "El cateto que no toca a ese ángulo, el que está 'enfrente'"

explicacion: |
  El cateto adyacente es el que sí toca al ángulo elegido.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "vocabulario"]

enunciado: "En un triángulo rectángulo, respecto de un ángulo agudo elegido, ¿qué es el cateto adyacente?"
tipo: mc
opciones_explicitas:
  - "El cateto que sí toca a ese ángulo (además de la hipotenusa)"
  - "El cateto que no toca a ese ángulo"
  - "La hipotenusa"
respuesta: "El cateto que sí toca a ese ángulo (además de la hipotenusa)"

explicacion: |
  El cateto opuesto es el que no lo toca.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "El cateto opuesto de un ángulo agudo es, al mismo tiempo, el cateto adyacente del otro ángulo agudo del mismo triángulo."

explicacion: |
  Los nombres "opuesto" y "adyacente" dependen de qué ángulo se elija
  como referencia.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Qué representa la regla mnemotécnica SOH-CAH-TOA?"
tipo: mc
opciones_explicitas:
  - "Seno=Opuesto/Hipotenusa, Coseno=Adyacente/Hipotenusa, Tangente=Opuesto/Adyacente"
  - "Los nombres de los tres ángulos de cualquier triángulo"
  - "El orden en que se miden los lados de un triángulo"
respuesta: "Seno=Opuesto/Hipotenusa, Coseno=Adyacente/Hipotenusa, Tangente=Opuesto/Adyacente"

explicacion: |
  Es una forma de memorizar las tres razones sin confundir cuál lado va
  en el numerador y cuál en el denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: seno = cateto opuesto / ___."
respuestas_validas:
  - "hipotenusa"

explicacion: |
  El coseno también divide por la hipotenusa, pero usa el cateto
  adyacente.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: coseno = cateto ___ / hipotenusa."
respuestas_validas:
  - "adyacente"

explicacion: |
  El seno usa el cateto opuesto en el numerador.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: tangente = cateto opuesto / cateto ___."
respuestas_validas:
  - "adyacente"

explicacion: |
  A diferencia de seno y coseno, la tangente no usa la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)
  opuesto: 3 * k
  adyacente: 4 * k
  hipotenusa: 5 * k

respuesta: redondear(opuesto / hipotenusa, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo α, cateto opuesto {opuesto}, cateto adyacente {adyacente} e hipotenusa {hipotenusa}. ¿Cuánto vale sen(α)?"

pasos:
  - "{opuesto} ÷ {hipotenusa} = {redondear(opuesto / hipotenusa, 2)}"

explicacion: |
  Seno es opuesto sobre hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)
  opuesto: 3 * k
  adyacente: 4 * k
  hipotenusa: 5 * k

respuesta: redondear(adyacente / hipotenusa, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo α, cateto opuesto {opuesto}, cateto adyacente {adyacente} e hipotenusa {hipotenusa}. ¿Cuánto vale cos(α)?"

pasos:
  - "{adyacente} ÷ {hipotenusa} = {redondear(adyacente / hipotenusa, 2)}"

explicacion: |
  Coseno es adyacente sobre hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)
  opuesto: 3 * k
  adyacente: 4 * k

respuesta: redondear(opuesto / adyacente, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo α, cateto opuesto {opuesto} y cateto adyacente {adyacente}. ¿Cuánto vale tan(α)?"

pasos:
  - "{opuesto} ÷ {adyacente} = {redondear(opuesto / adyacente, 2)}"

explicacion: |
  Tangente es opuesto sobre adyacente, sin usar la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 6)
  opuesto: 5 * k
  adyacente: 12 * k
  hipotenusa: 13 * k

respuesta: redondear(opuesto / hipotenusa, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo rectángulo tiene, respecto de un ángulo agudo β, cateto opuesto {opuesto}, cateto adyacente {adyacente} e hipotenusa {hipotenusa}. ¿Cuánto vale sen(β)? Redondeá a 3 decimales."

pasos:
  - "{opuesto} ÷ {hipotenusa} = {redondear(opuesto / hipotenusa, 3)}"

explicacion: |
  Esta vez la razón no da un número tan "redondo" como 3/5, pero se
  calcula exactamente igual.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "Si se agranda un triángulo rectángulo manteniendo el mismo ángulo agudo, el valor del seno de ese ángulo NO cambia."

explicacion: |
  Los triángulos son semejantes, así que la razón entre lados se
  mantiene igual.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  k1: random(1, 5)
  k2: k1 + random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo con catetos {3 * k1} y {4 * k1} (hipotenusa {5 * k1}) tiene el mismo ángulo agudo que otro con catetos {3 * k2} y {4 * k2} (hipotenusa {5 * k2}). ¿El seno de ese ángulo da el mismo valor (0,6) en ambos triángulos?"

explicacion: |
  {3 * k1}/{5 * k1} y {3 * k2}/{5 * k2} son ambos iguales a 3/5 = 0,6:
  son triángulos semejantes, misma razón.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Por qué una razón trigonométrica da siempre el mismo valor para un ángulo dado, sin importar el tamaño del triángulo?"
tipo: mc
opciones_explicitas:
  - "Porque dos triángulos rectángulos con el mismo ángulo agudo son semejantes (criterio AA), y sus lados son proporcionales"
  - "Porque todos los triángulos rectángulos son congruentes entre sí"
  - "Es una coincidencia, sin explicación geométrica"
respuesta: "Porque dos triángulos rectángulos con el mismo ángulo agudo son semejantes (criterio AA), y sus lados son proporcionales"

explicacion: |
  Es la razón por la que este módulo depende de
  `../semejanza-y-teorema-de-thales/`.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "La tangente de un ángulo es igual al seno de ese ángulo dividido su coseno (tan = sen / cos)."

explicacion: |
  Al dividir (opuesto/hipotenusa) por (adyacente/hipotenusa), la
  hipotenusa se simplifica y queda opuesto/adyacente.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  k: random(1, 8)

respuesta: redondear(0.6 / 0.8, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo α, sen(α) = 0,6 y cos(α) = 0,8. ¿Cuánto vale tan(α)?"

pasos:
  - "0,6 ÷ 0,8 = {redondear(0.6 / 0.8, 2)}"

explicacion: |
  Coincide con calcular directamente opuesto/adyacente = 3/4 = 0,75 en
  el triángulo 3-4-5.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Qué dice la identidad sen² + cos² = 1, para cualquier ángulo?"
tipo: mc
opciones_explicitas:
  - "Que el cuadrado del seno más el cuadrado del coseno de un mismo ángulo siempre suma 1"
  - "Que el seno y el coseno de cualquier ángulo son siempre iguales"
  - "Que la suma de seno y coseno siempre da 1, sin elevar al cuadrado"
respuesta: "Que el cuadrado del seno más el cuadrado del coseno de un mismo ángulo siempre suma 1"

explicacion: |
  Es consecuencia directa del teorema de Pitágoras aplicado a los
  catetos y la hipotenusa.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

respuesta: 1
tipo: input
tolerancia_abs: 0.01

enunciado: "Para el ángulo del triángulo 3-4-5, sen(α) = 0,6 y cos(α) = 0,8. ¿Cuánto da sen(α)² + cos(α)²?"

pasos:
  - "0,6² + 0,8² = 0,36 + 0,64 = 1"

explicacion: |
  Se cumple exactamente, porque 3² + 4² = 5² (el propio teorema de
  Pitágoras, dividido por 5² de los dos lados).
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "completar"]

tipo: completar
enunciado: "Completá: sen(30°) = ___ (como número decimal)."
respuestas_validas:
  - "0.5"
  - "0,5"

explicacion: |
  Es uno de los valores notables que conviene memorizar.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "sen(30°) y cos(60°) valen exactamente lo mismo."

explicacion: |
  Los ángulos que suman 90° "intercambian" seno y coseno.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "sen(45°) y cos(45°) valen exactamente lo mismo."

explicacion: |
  Tiene sentido: 45° + 45° = 90°, así que se intercambian entre sí — y
  como son iguales, coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria"]

respuesta: verdadero
tipo: vf

enunciado: "tan(45°) vale exactamente 1."

explicacion: |
  Como sen(45°) = cos(45°), su cociente (la tangente) da 1.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  seno_30: 0.5
  hipotenusa: uno_de([10, 20, 30, 40])

respuesta: hipotenusa * seno_30
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de 30° y una hipotenusa de {hipotenusa}. ¿Cuánto mide el cateto opuesto a ese ángulo? (usá sen(30°) = 0,5)"

pasos:
  - "{hipotenusa} × 0,5 = {hipotenusa * seno_30}"

explicacion: |
  Cateto opuesto = hipotenusa × sen(ángulo).
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  coseno_60: 0.5
  hipotenusa: uno_de([10, 20, 30, 40])

respuesta: hipotenusa * coseno_60
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de 60° y una hipotenusa de {hipotenusa}. ¿Cuánto mide el cateto adyacente a ese ángulo? (usá cos(60°) = 0,5)"

pasos:
  - "{hipotenusa} × 0,5 = {hipotenusa * coseno_60}"

explicacion: |
  Cateto adyacente = hipotenusa × cos(ángulo).
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "avanzado"
  tags: ["trigonometria", "problema"]

variables:
  adyacente: uno_de([5, 8, 10, 15])

respuesta: adyacente
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de 45° y un cateto adyacente de {adyacente}. ¿Cuánto mide el cateto opuesto a ese ángulo? (usá tan(45°) = 1)"

pasos:
  - "{adyacente} × 1 = {adyacente}"

explicacion: |
  En un triángulo con un ángulo de 45°, los dos catetos miden siempre
  lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "ordenar"]

enunciado: "Ordená los pasos para hallar un lado desconocido de un triángulo rectángulo, conociendo un ángulo agudo y otro lado."
tipo: ordenar
opciones_explicitas:
  - "Despejar el lado desconocido y calcular"
  - "Identificar qué lados están involucrados (opuesto, adyacente o hipotenusa) respecto del ángulo conocido"
  - "Elegir la razón trigonométrica correcta (seno, coseno o tangente) según esos dos lados"
respuesta_orden:
  - "Identificar qué lados están involucrados (opuesto, adyacente o hipotenusa) respecto del ángulo conocido"
  - "Elegir la razón trigonométrica correcta (seno, coseno o tangente) según esos dos lados"
  - "Despejar el lado desconocido y calcular"

explicacion: |
  Elegir mal la razón (usar coseno cuando corresponde seno, por
  ejemplo) es el error más común.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "intermedio"
  tags: ["trigonometria", "vocabulario"]

enunciado: "¿Cómo se puede calcular la altura de un edificio sin medirla directamente, usando trigonometría?"
tipo: mc
opciones_explicitas:
  - "Midiendo el ángulo de elevación desde una distancia conocida, y usando la tangente de ese ángulo"
  - "Contando la cantidad de pisos y multiplicando por 3 metros siempre"
  - "No es posible calcular una altura sin medirla directamente"
respuesta: "Midiendo el ángulo de elevación desde una distancia conocida, y usando la tangente de ese ángulo"

explicacion: |
  La distancia horizontal es el cateto adyacente, la altura es el
  cateto opuesto: tan(ángulo) = altura / distancia.
```

```
metadata:
  materia: "matematicas"
  tema: "razones_trigonometricas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven las razones trigonométricas?"
tipo: mc
opciones_explicitas:
  - "Para calcular lados o ángulos de un triángulo rectángulo sin medirlos directamente, a partir de datos conocidos"
  - "Sólo sirven para triángulos equiláteros"
  - "Sólo tienen aplicación teórica, sin uso práctico"
respuesta: "Para calcular lados o ángulos de un triángulo rectángulo sin medirlos directamente, a partir de datos conocidos"

explicacion: |
  Desde la altura de un edificio hasta el diseño de una rampa, siempre
  que hay un ángulo y un triángulo rectángulo, aparecen estas razones.
```

## Sección: rectas-paralelas-y-perpendiculares (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["paralelas", "vocabulario"]

enunciado: "¿Cuándo dos rectas son paralelas?"
tipo: mc
opciones_explicitas:
  - "Cuando tienen exactamente la misma pendiente"
  - "Cuando sus pendientes multiplicadas dan -1"
  - "Cuando tienen la misma ordenada al origen"
respuesta: "Cuando tienen exactamente la misma pendiente"

explicacion: |
  m₁ = m₂ es el criterio ya visto en `../funcion-lineal-pendiente/`.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares", "vocabulario"]

enunciado: "¿Cuándo dos rectas son perpendiculares?"
tipo: mc
opciones_explicitas:
  - "Cuando el producto de sus pendientes es -1"
  - "Cuando tienen exactamente la misma pendiente"
  - "Cuando ambas pasan por el origen"
respuesta: "Cuando el producto de sus pendientes es -1"

explicacion: |
  m₁ × m₂ = −1: cada pendiente es la recíproca y opuesta de la otra.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 3, 4, 5])

respuesta: -1 / m
tipo: input
tolerancia_abs: 0.01

enunciado: "Una recta tiene pendiente {m}. ¿Cuál es la pendiente de cualquier recta perpendicular a ella?"

pasos:
  - "-1 ÷ {m} = {-1 / m}"

explicacion: |
  Se invierte la pendiente y se cambia el signo.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  a: uno_de([2, 3, 4])
  b: uno_de([5, 7])

respuesta: 0 - (b / a)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una recta tiene pendiente {a}/{b}. ¿Cuál es la pendiente de cualquier recta perpendicular a ella?"

pasos:
  - "Se invierte la fracción y se cambia el signo: -{b}/{a} = {0 - (b / a)}"

explicacion: |
  ({a}/{b}) × (-{b}/{a}) = -1, verificando el criterio de
  perpendicularidad.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, -2])
  x0: random(1, 5)
  y0: random(1, 20)

respuesta: y0 - (m * x0)
tipo: input
tolerancia_abs: 0

enunciado: "Se busca la recta paralela a y = {m}x + 7, que además pasa por el punto ({x0}, {y0}). ¿Cuál es la ordenada al origen de esa nueva recta?"

pasos:
  - "Misma pendiente: {m}"
  - "{y0} = {m} × {x0} + b, entonces b = {y0} − {m}×{x0} = {y0 - (m * x0)}"

explicacion: |
  Se usa la misma pendiente de la recta original, y se despeja b con el
  punto dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 4, 5])
  m_perp: -1 / m
  x0: uno_de([2, 4, 6, 8])
  y0: random(1, 10)

respuesta: redondear(y0 - (m_perp * x0), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Se busca la recta perpendicular a y = {m}x + 3, que además pasa por el punto ({x0}, {y0}). Su pendiente es {m_perp}. ¿Cuál es la ordenada al origen de esa nueva recta?"

pasos:
  - "{y0} = {m_perp} × {x0} + b, entonces b = {y0} − ({m_perp}×{x0}) = {redondear(y0 - (m_perp * x0), 2)}"

explicacion: |
  Se usa la pendiente perpendicular ya calculada, y se despeja b con el
  punto dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas"]

respuesta: verdadero
tipo: vf

enunciado: "Dos rectas con la misma pendiente Y la misma ordenada al origen son, en realidad, la misma recta (coincidentes), no dos rectas paralelas distintas."

explicacion: |
  Ser paralelas exige además que b₁ sea distinto de b₂.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "vocabulario"]

enunciado: "¿Qué condición hace que dos rectas con la misma pendiente sean coincidentes (la misma recta) en vez de paralelas distintas?"
tipo: mc
opciones_explicitas:
  - "Que además tengan la misma ordenada al origen"
  - "Que además tengan pendientes recíprocas"
  - "No existe tal condición: siempre son paralelas distintas"
respuesta: "Que además tengan la misma ordenada al origen"

explicacion: |
  Mismo m y mismo b: es literalmente la misma ecuación escrita dos
  veces.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, 4, 5])
  b1: uno_de([1, 2, 3])
  b2: b1 + random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "¿Son paralelas las rectas y = {m}x + {b1} e y = {m}x + {b2}?"

explicacion: |
  Tienen la misma pendiente ({m}) y distinta ordenada al origen: son
  paralelas, sin llegar a tocarse nunca.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "problema"]

variables:
  m1: uno_de([2, 3, 4])
  m2: 0 - (1 / m1)

respuesta: verdadero
tipo: vf

enunciado: "¿Son perpendiculares las rectas con pendiente {m1} y con pendiente {m2}?"

explicacion: |
  {m1} × ({m2}) = -1: cumplen el criterio de perpendicularidad.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "perpendiculares", "vocabulario"]

enunciado: "¿Qué hay que verificar, usando pendientes, para confirmar que un cuadrilátero dado por sus 4 vértices es un rectángulo?"
tipo: mc
opciones_explicitas:
  - "Que los lados opuestos sean paralelos entre sí, y los lados consecutivos sean perpendiculares"
  - "Que las cuatro pendientes sean exactamente iguales"
  - "Que ningún lado tenga pendiente 0"
respuesta: "Que los lados opuestos sean paralelos entre sí, y los lados consecutivos sean perpendiculares"

explicacion: |
  Sin medir ningún ángulo con transportador: sólo comparando pendientes.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, -2])

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrilátero tiene un lado con pendiente {m}, y el lado opuesto también tiene pendiente {m}. ¿Es compatible eso con que el cuadrilátero sea un rectángulo (en lo que respecta a ese par de lados)?"

explicacion: |
  Los lados opuestos de un rectángulo tienen que ser paralelos: misma
  pendiente cumple esa condición.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta tangente a una circunferencia es siempre perpendicular al radio, en el punto de contacto."

explicacion: |
  Ya se había mencionado en `../circunferencia-y-circulo/`; ahora se
  puede verificar numéricamente con pendientes.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m_radio: uno_de([2, 3, 4, 5])

respuesta: -1 / m_radio
tipo: input
tolerancia_abs: 0.01

enunciado: "El radio de una circunferencia, en el punto de contacto con una tangente, tiene pendiente {m_radio}. ¿Cuál es la pendiente de la recta tangente en ese punto?"

pasos:
  - "-1 ÷ {m_radio} = {-1 / m_radio}"

explicacion: |
  La tangente es siempre perpendicular al radio en ese punto.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "ordenar"]

enunciado: "Ordená los pasos para hallar la ecuación de la recta paralela a otra, que además pasa por un punto dado."
tipo: ordenar
opciones_explicitas:
  - "Despejar la nueva ordenada al origen"
  - "Usar la misma pendiente que la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b"
respuesta_orden:
  - "Usar la misma pendiente que la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b"
  - "Despejar la nueva ordenada al origen"

explicacion: |
  La pendiente no cambia; sólo se recalcula b para que la recta pase por
  el punto pedido.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares", "ordenar"]

enunciado: "Ordená los pasos para hallar la ecuación de la recta perpendicular a otra, que además pasa por un punto dado."
tipo: ordenar
opciones_explicitas:
  - "Despejar la nueva ordenada al origen"
  - "Calcular la pendiente recíproca y opuesta de la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b, con esa nueva pendiente"
respuesta_orden:
  - "Calcular la pendiente recíproca y opuesta de la recta original"
  - "Reemplazar las coordenadas del punto dado en y = mx + b, con esa nueva pendiente"
  - "Despejar la nueva ordenada al origen"

explicacion: |
  Primero cambia la pendiente (recíproca y opuesta); recién después se
  ajusta b.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["paralelas"]

respuesta: verdadero
tipo: vf

enunciado: "Dos rectas verticales distintas (x = k₁ y x = k₂, con k₁ ≠ k₂) son siempre paralelas entre sí."

explicacion: |
  Aunque no tengan pendiente definida en la fórmula y=mx+b, nunca se
  cruzan: son paralelas.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Una recta horizontal (y = b) y una recta vertical (x = k) son siempre perpendiculares entre sí."

explicacion: |
  Se cruzan formando exactamente 90°, aunque el criterio m₁×m₂=-1 no se
  pueda aplicar literalmente (la vertical no tiene pendiente definida).
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "problema"]

variables:
  m: uno_de([2, 3, 4])
  x0: uno_de([1, 2, 3])
  producto: m * x0
  b: random(1, 10)

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "La recta paralela a y = {m}x + 5 que pasa por ({x0}, {producto + b}) tiene ordenada al origen b. ¿Cuánto vale b?"

pasos:
  - "{producto + b} = {m} × {x0} + b, entonces b = {producto + b} − {producto} = {b}"

explicacion: |
  Se despeja b restando m×x₀ al valor de y del punto dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto de las pendientes de dos rectas da exactamente -1, esas rectas son perpendiculares."

explicacion: |
  Es el criterio algebraico completo de perpendicularidad.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "La pendiente recíproca y opuesta de m = 2 es -1/2."

explicacion: |
  2 × (-1/2) = -1, cumple el criterio.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares"]

respuesta: falso
tipo: vf

enunciado: "Dos rectas con pendientes 2 y -2 (mismo valor, signo opuesto) son perpendiculares entre sí."

explicacion: |
  2 × (-2) = -4, no -1: no cumplen el criterio. Tener signos opuestos no
  alcanza, hace falta además que sean recíprocas.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "avanzado"
  tags: ["perpendiculares", "problema"]

variables:
  m: uno_de([2, 4, 5])

respuesta: -1 / m
tipo: input
tolerancia_abs: 0.01

enunciado: "Un lado de un cuadrilátero tiene pendiente {m}. Para que el cuadrilátero sea un rectángulo, ¿qué pendiente tiene que tener el lado consecutivo (adyacente)?"

pasos:
  - "-1 ÷ {m} = {-1 / m}"

explicacion: |
  Los lados consecutivos de un rectángulo son perpendiculares entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "intermedio"
  tags: ["paralelas", "perpendiculares"]

respuesta: verdadero
tipo: vf

enunciado: "Verificar paralelismo o perpendicularidad con pendientes permite confirmar propiedades geométricas sin necesidad de medir ángulos con transportador."

explicacion: |
  Es la ventaja de trabajar con coordenadas y ecuaciones en vez de con
  el dibujo físico.
```

```
metadata:
  materia: "matematicas"
  tema: "rectas_paralelas_y_perpendiculares"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve aplicar el criterio de paralelismo y perpendicularidad a problemas geométricos?"
tipo: mc
opciones_explicitas:
  - "Para confirmar propiedades de figuras dadas por coordenadas: si un cuadrilátero es rectángulo, si dos calles son paralelas, si una estructura es realmente perpendicular"
  - "Sólo sirve para practicar el cálculo de pendientes en abstracto"
  - "Sólo aplica a rectas que pasan por el origen"
respuesta: "Para confirmar propiedades de figuras dadas por coordenadas: si un cuadrilátero es rectángulo, si dos calles son paralelas, si una estructura es realmente perpendicular"

explicacion: |
  Es la aplicación geométrica del criterio algebraico ya conocido.
```
