# Matemática — Independencia de eventos y diagrama de árbol (cuestionario, 24 preguntas VBLang)

> Tema: `D9B`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué son eventos independientes

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "basico"
  tags: ["independencia", "vocabulario"]

enunciado: "¿Qué significa que dos eventos sean independientes?"
tipo: mc
opciones_explicitas:
  - "Que el resultado de uno no cambia en nada la probabilidad del otro"
  - "Que los dos eventos ocurren siempre al mismo tiempo"
  - "Que los dos eventos nunca pueden ocurrir juntos"
respuesta: "Que el resultado de uno no cambia en nada la probabilidad del otro"

explicacion: |
  Tirar una moneda dos veces: el resultado de la primera no afecta a
  la segunda.
```

### 2 — Qué son eventos dependientes

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "basico"
  tags: ["independencia", "vocabulario"]

enunciado: "¿Qué significa que dos eventos sean dependientes?"
tipo: mc
opciones_explicitas:
  - "Que el resultado de uno SÍ cambia la probabilidad del otro"
  - "Que uno de los dos eventos es imposible"
  - "Que los dos eventos son exactamente el mismo"
respuesta: "Que el resultado de uno SÍ cambia la probabilidad del otro"

explicacion: |
  Sacar dos cartas de un mazo sin devolver la primera: la segunda
  extracción ya no tiene las mismas probabilidades que la primera.
```

### 3 — Dos tiradas de moneda son independientes

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "intermedio"
  tags: ["independencia"]

respuesta: verdadero
tipo: vf

enunciado: "Tirar una moneda dos veces seguidas son dos eventos independientes: el resultado de la primera tirada no afecta la probabilidad de la segunda."

explicacion: |
  Cada tirada 'empieza de cero', sin memoria de la anterior.
```

### 4 — Sacar dos cartas sin devolver es independiente

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "intermedio"
  tags: ["independencia"]

respuesta: falso
tipo: vf

enunciado: "Sacar dos cartas de un mazo, SIN devolver la primera antes de sacar la segunda, son dos eventos independientes."

explicacion: |
  Es falso: son dependientes — la segunda extracción tiene una carta
  menos disponible, y potencialmente menos casos favorables.
```

### 5 — Completar: con reposición

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "intermedio"
  tags: ["independencia", "completar"]

tipo: completar
enunciado: "Completá: cuando se extrae y se DEVUELVE lo extraído antes de la siguiente extracción (con reposición), los eventos son ___."
respuestas_validas:
  - "independientes"

explicacion: |
  Devolver lo extraído mantiene las mismas condiciones para la
  siguiente extracción.
```

### 6 — Completar: sin reposición

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "intermedio"
  tags: ["independencia", "completar"]

tipo: completar
enunciado: "Completá: cuando NO se devuelve lo extraído antes de la siguiente extracción (sin reposición), los eventos son ___."
respuestas_validas:
  - "dependientes"

explicacion: |
  Sin devolver, el total y los casos favorables cambian para el
  siguiente paso.
```

### 7 — Problema: con reposición, dos extracciones del mismo color

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["independencia", "problema"]

variables:
  rojas: random(3, 8)
  totales: random(10, 20)

respuesta: redondear((rojas / totales) ^ 2, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {totales} bolitas, {rojas} de ellas rojas. Se saca una, se anota el color, y SE DEVUELVE a la bolsa antes de sacar una segunda. ¿Cuál es la probabilidad de que ambas extracciones sean rojas?"

pasos:
  - "Con reposición, cada extracción tiene la misma probabilidad: P(roja) = {rojas}/{totales}"
  - "Al ser independientes, se multiplican: ({rojas}/{totales})² = {redondear((rojas / totales) ^ 2, 3)}"

explicacion: |
  Como se devuelve la bolita, la segunda extracción parte de las
  mismas condiciones que la primera.
```

### 8 — Problema: sin reposición, dos ases seguidos

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["independencia", "problema"]

respuesta: redondear((4 / 40) * (3 / 39), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "De un mazo de 40 cartas (4 ases), se sacan 2 cartas SIN devolver la primera. ¿Cuál es la probabilidad de que las dos sean ases?"

pasos:
  - "Primera carta: P(as) = 4/40"
  - "Segunda carta (ya sin esa carta, y con un as menos si la primera fue as): P(as) = 3/39"
  - "P(ambas ases) = (4/40) × (3/39) = {redondear((4 / 40) * (3 / 39), 4)}"

explicacion: |
  Al no devolver la primera carta, la segunda probabilidad cambia: hay
  una carta menos en total y un as menos disponible.
```

### 9 — Qué es un diagrama de árbol

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "basico"
  tags: ["arbol", "vocabulario"]

enunciado: "¿Qué representa un diagrama de árbol?"
tipo: mc
opciones_explicitas:
  - "Todos los resultados posibles de un experimento de varios pasos, como ramas que se van abriendo paso a paso"
  - "Sólo el resultado final más probable"
  - "Un gráfico de barras dibujado de forma vertical"
respuesta: "Todos los resultados posibles de un experimento de varios pasos, como ramas que se van abriendo paso a paso"

explicacion: |
  Cada rama nueva representa una opción posible en ese paso, con su
  probabilidad anotada.
```

### 10 — La cantidad de caminos es el principio multiplicativo

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad total de caminos completos (de la raíz a una hoja final) de un diagrama de árbol es exactamente el resultado del principio multiplicativo de conteo."

explicacion: |
  Si el primer paso tiene n₁ ramas y el segundo n₂, hay n₁×n₂ caminos
  completos — la misma cuenta de
  `../principio-multiplicativo-de-conteo/`.
```

### 11 — Problema: cantidad de caminos en un árbol de dos pasos

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "intermedio"
  tags: ["arbol", "problema"]

variables:
  ramas1: uno_de([2, 3])
  ramas2: uno_de([3, 4])

respuesta: ramas1 * ramas2
tipo: input

enunciado: "Un diagrama de árbol tiene {ramas1} ramas posibles en el primer paso, y {ramas2} ramas posibles en el segundo paso (para cada rama del primero). ¿Cuántos caminos completos tiene el árbol en total?"

pasos:
  - "Total = {ramas1} × {ramas2} = {ramas1 * ramas2}"

explicacion: |
  Por cada rama del primer paso, se abren todas las ramas del segundo.
```

### 12 — Problema: probabilidad de un camino específico

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol", "problema"]

variables:
  p1: uno_de([0.3, 0.4, 0.5])
  p2: uno_de([0.2, 0.6, 0.8])

respuesta: redondear(p1 * p2, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un diagrama de árbol de dos pasos, la rama elegida en el primer paso tiene probabilidad {p1}, y la rama elegida en el segundo paso (siguiendo esa primera rama) tiene probabilidad {p2}. ¿Cuál es la probabilidad de ese camino completo?"

pasos:
  - "P(camino) = {p1} × {p2} = {redondear(p1 * p2, 3)}"

explicacion: |
  Se multiplican las probabilidades de todas las ramas que se
  recorren en el camino.
```

### 13 — Ordenar: pasos para usar un diagrama de árbol

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol", "ordenar"]

enunciado: "Ordená los pasos para calcular la probabilidad de un resultado usando un diagrama de árbol."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar las probabilidades de todas las ramas de ese camino"
  - "Dibujar todas las ramas posibles de cada paso, con su probabilidad anotada"
  - "Identificar el camino (secuencia de ramas) que lleva al resultado buscado"
respuesta_orden: ["Dibujar todas las ramas posibles de cada paso, con su probabilidad anotada", "Identificar el camino (secuencia de ramas) que lleva al resultado buscado", "Multiplicar las probabilidades de todas las ramas de ese camino"]
explicacion: |
  Sin dibujar primero todas las ramas, no queda claro cuál es 'el
  camino' que interesa.
```

### 14 — Problema: moneda tres veces, todas cara

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "intermedio"
  tags: ["independencia", "problema"]

respuesta: 0.125
tipo: input
tolerancia_abs: 0.01

enunciado: "Se lanza una moneda 3 veces (eventos independientes). ¿Cuál es la probabilidad de que las 3 veces salga cara?"

pasos:
  - "P = 0,5 × 0,5 × 0,5 = 0,125"

explicacion: |
  Al ser independientes, se multiplican las tres probabilidades de
  0,5 cada una.
```

### 15 — Las ramas de un mismo punto suman probabilidad 1

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol"]

respuesta: verdadero
tipo: vf

enunciado: "En un diagrama de árbol, las probabilidades de todas las ramas que salen de un mismo punto (representando resultados que se excluyen entre sí) siempre suman exactamente 1."

explicacion: |
  Alguna de esas ramas tiene que ocurrir, así que juntas cubren el
  100% de las posibilidades en ese paso.
```

### 16 — Problema: dos extracciones con reposición, mismo color

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol", "problema"]

variables:
  azules: random(4, 10)
  totales: random(12, 20)

respuesta: redondear((azules / totales) ^ 2, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {totales} bolitas, {azules} azules. Se hacen 2 extracciones CON reposición. Dibujando el árbol de las dos extracciones, ¿cuál es la probabilidad del camino 'azul, azul'?"

pasos:
  - "Cada rama 'azul' tiene probabilidad {azules}/{totales} (no cambia con reposición)"
  - "P(azul, azul) = ({azules}/{totales})² = {redondear((azules / totales) ^ 2, 3)}"

explicacion: |
  Es el mismo camino del árbol recorrido dos veces con la misma
  probabilidad, porque hay reposición.
```

### 17 — Problema: dos extracciones sin reposición, mismo color

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol", "problema"]

variables:
  rojas: random(5, 10)
  totales: random(15, 25)

respuesta: redondear((rojas / totales) * ((rojas - 1) / (totales - 1)), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {totales} bolitas, {rojas} rojas. Se hacen 2 extracciones SIN reposición. ¿Cuál es la probabilidad de sacar roja las dos veces?"

pasos:
  - "Primera: P(roja) = {rojas}/{totales}"
  - "Segunda (una roja menos, una bolita menos en total): P(roja) = ({rojas}−1)/({totales}−1)"
  - "P(ambas rojas) = {redondear((rojas / totales) * ((rojas - 1) / (totales - 1)), 3)}"

explicacion: |
  La segunda rama del árbol tiene una probabilidad distinta de la
  primera, porque ya no hay reposición.
```

### 18 — Aplicación real: dos análisis médicos independientes

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "basico"
  tags: ["independencia", "aplicacion"]

enunciado: "Si dos análisis médicos distintos, hechos con métodos totalmente distintos, se consideran independientes, ¿qué significa eso en la práctica?"
tipo: mc
opciones_explicitas:
  - "Que el resultado de un análisis no influye en la probabilidad del resultado del otro"
  - "Que los dos análisis siempre dan el mismo resultado"
  - "Que sólo uno de los dos análisis es confiable"
respuesta: "Que el resultado de un análisis no influye en la probabilidad del resultado del otro"

explicacion: |
  Es útil justamente para combinar evidencia de fuentes que no se
  contaminan entre sí.
```

### 19 — Eventos dependientes también se pueden dibujar en un árbol

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "Un diagrama de árbol también sirve para eventos DEPENDIENTES — sólo que las probabilidades de las ramas del segundo paso cambian según qué rama se siguió en el primero."

explicacion: |
  La herramienta (el árbol) es la misma; lo que cambia es si las
  probabilidades de las ramas posteriores son siempre iguales
  (independientes) o dependen del camino recorrido (dependientes).
```

### 20 — Problema: cantidad de caminos en un árbol de tres pasos

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["arbol", "problema"]

variables:
  ramas1: uno_de([2, 3])
  ramas2: uno_de([2, 3])
  ramas3: uno_de([2, 3])

respuesta: ramas1 * ramas2 * ramas3
tipo: input

enunciado: "Un diagrama de árbol tiene {ramas1} ramas en el primer paso, {ramas2} en el segundo y {ramas3} en el tercero. ¿Cuántos caminos completos tiene en total?"

pasos:
  - "Total = {ramas1} × {ramas2} × {ramas3} = {ramas1 * ramas2 * ramas3}"

explicacion: |
  El principio multiplicativo se aplica a cualquier cantidad de pasos.
```

### 21 — Sin reposición siempre reduce el total en 1

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["independencia"]

respuesta: verdadero
tipo: vf

enunciado: "Cada extracción sin reposición reduce en exactamente 1 el total de elementos disponibles para la siguiente extracción."

explicacion: |
  Se extrae un elemento y no se devuelve, así que el total disponible
  siempre baja de a uno.
```

### 22 — Diferencia entre independencia y diagrama de árbol

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["independencia", "arbol"]

enunciado: "¿Cuál es la diferencia entre 'independencia de eventos' y 'diagrama de árbol'?"
tipo: mc
opciones_explicitas:
  - "La independencia es una PROPIEDAD de los eventos (si uno afecta al otro o no); el diagrama de árbol es una HERRAMIENTA para representar visualmente cualquier secuencia de eventos, sean independientes o no"
  - "Son exactamente lo mismo, sólo con nombres distintos"
  - "El diagrama de árbol sólo puede usarse con eventos independientes"
respuesta: "La independencia es una PROPIEDAD de los eventos (si uno afecta al otro o no); el diagrama de árbol es una HERRAMIENTA para representar visualmente cualquier secuencia de eventos, sean independientes o no"

explicacion: |
  Una es una característica matemática de los eventos; la otra, una
  forma de dibujarlos y calcular con ellos.
```

### 23 — Problema: al menos dos pasos independientes con distinta probabilidad

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "avanzado"
  tags: ["independencia", "problema"]

variables:
  p1: uno_de([0.6, 0.7, 0.8])
  p2: uno_de([0.5, 0.9])

respuesta: redondear(p1 * p2, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una máquina tiene dos componentes independientes: el primero funciona bien con probabilidad {p1}, el segundo con probabilidad {p2}. ¿Cuál es la probabilidad de que AMBOS funcionen bien?"

pasos:
  - "Al ser independientes: P(ambos) = {p1} × {p2} = {redondear(p1 * p2, 3)}"

explicacion: |
  Es la misma regla del producto para eventos independientes,
  aplicada a un contexto distinto del de bolitas o cartas.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "independencia_de_eventos_y_diagrama_de_arbol"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la independencia de eventos y el diagrama de árbol?"
tipo: mc
opciones_explicitas:
  - "Para saber si se puede multiplicar directo las probabilidades de varios eventos, y para organizar visualmente todos los caminos posibles de una secuencia de pasos"
  - "Sólo sirve para tirar monedas"
  - "Sólo aplica cuando hay exactamente dos eventos"
respuesta: "Para saber si se puede multiplicar directo las probabilidades de varios eventos, y para organizar visualmente todos los caminos posibles de una secuencia de pasos"

explicacion: |
  Es el prerrequisito directo de `../probabilidad-compuesta/`, el
  próximo módulo.
```
