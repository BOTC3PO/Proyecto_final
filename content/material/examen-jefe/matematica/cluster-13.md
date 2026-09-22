# Examen jefe — [PENDIENTE #613]

> Logro #613. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **129 preguntas totales** en 5/5 secciones.

---

## Sección: independencia-de-eventos-y-diagrama-de-arbol (24 preguntas)

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

## Sección: potencias (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

enunciado: "¿Qué es 2⁴?"
tipo: mc
opciones_explicitas:
  - "2 multiplicado por sí mismo 4 veces"
  - "2 multiplicado por 4"
  - "2 sumado 4 veces"
respuesta: "2 multiplicado por sí mismo 4 veces"

explicacion: |
  Una potencia es multiplicar la base por sí misma tantas veces como
  indica el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  base: random(2, 10)
  exponente: random(2, 4)

respuesta: base ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

pasos:
  - "{base}^{exponente} = {base} multiplicado por sí mismo {exponente} veces = {base ^ exponente}"

explicacion: |
  Se multiplica la base por sí misma, tantas veces como el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 20)
  exponente: random(2, 3)

respuesta: base ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{exponente}?"

explicacion: |
  El procedimiento es el mismo con bases más grandes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(1, 999)

respuesta: base
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}¹?"

explicacion: |
  Elevar a la 1 no cambia el número: es multiplicarlo por sí mismo "una
  sola vez", o sea, dejarlo igual.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 999)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}⁰?"

explicacion: |
  Cualquier número (distinto de 0) elevado a la 0 da 1. Es una convención
  que hace que las propiedades de las potencias funcionen sin
  excepciones.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 10)
  exponente: random(1, 3)

respuesta: 1 / (base ^ exponente)
tipo: input
tolerancia_abs: 0.0001

enunciado: "¿Cuánto es {base}^(-{exponente})?"

pasos:
  - "{base}^(-{exponente}) = 1 ÷ {base}^{exponente} = 1 ÷ {base ^ exponente} = {1 / (base ^ exponente)}"

explicacion: |
  El exponente negativo manda la potencia al denominador de una fracción.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 5)
  m: random(2, 5)

respuesta: base ^ (n + m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{n} × {base}^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se suman los exponentes: {n} + {m} = {n + m} → {base}^{n + m}"

explicacion: |
  Al multiplicar potencias de igual base, se suman los exponentes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(4, 8)
  m: random(1, n - 1)

respuesta: base ^ (n - m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {base}^{n} ÷ {base}^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se restan los exponentes: {n} - {m} = {n - m} → {base}^{n - m}"

explicacion: |
  Al dividir potencias de igual base, se restan los exponentes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 4)
  m: random(2, 3)

respuesta: base ^ (n * m)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({base}^{n})^{m}, expresado como {base} elevado a un solo exponente?"

pasos:
  - "Se multiplican los exponentes: {n} × {m} = {n * m} → {base}^{n * m}"

explicacion: |
  Al elevar una potencia a otro exponente, se multiplican los exponentes.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  n: random(2, 3)

respuesta: (a * b) ^ n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es ({a} × {b})^{n}?"

pasos:
  - "El exponente se distribuye a cada factor: {a}^{n} × {b}^{n} = {a ^ n} × {b ^ n} = {(a * b) ^ n}"

explicacion: |
  La potencia de un producto es el producto de las potencias.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  n: random(2, 30)

respuesta: n ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el cuadrado de {n}?"

explicacion: |
  El cuadrado de un número es elevarlo a la 2.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias"]

variables:
  n: random(2, 15)

respuesta: n ^ 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el cubo de {n}?"

explicacion: |
  El cubo de un número es elevarlo a la 3.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número elevado a la 1 da como resultado ese mismo número."

explicacion: |
  a¹ = a, para cualquier a.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier número (distinto de 0) elevado a la 0 da 1."

explicacion: |
  a⁰ = 1, para cualquier a ≠ 0.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)
  correcto: base ^ exponente

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - base * exponente
  - correcto + base

enunciado: "¿Cuánto es {base}^{exponente}?"

explicacion: |
  La opción "base × exponente" es un error común: confunde potencia con
  multiplicación simple.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "verificacion"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)
  correcto: base ^ exponente
  error: uno_de([0, 0, 0, base, -base])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? {base}^{exponente} = {mostrado}"

explicacion: |
  Se vuelve a calcular la potencia y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  base: random(2, 9)
  exponente: random(2, 4)

tipo: completar
enunciado: "Completá: {base}^___ = {base ^ exponente}."
respuestas_validas:
  - exponente

explicacion: |
  Hay que encontrar a qué exponente hay que elevar {base} para obtener
  {base ^ exponente}.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "problema"]

variables:
  lado: random(2, 30)

respuesta: lado ^ 2
tipo: input
tolerancia_abs: 0

enunciado: "Un cuadrado tiene {lado} cm de lado. ¿Cuál es su área (en cm²)?"

explicacion: |
  El área de un cuadrado es el lado elevado al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "problema"]

variables:
  arista: random(2, 15)

respuesta: arista ^ 3
tipo: input
tolerancia_abs: 0

enunciado: "Un cubo tiene {arista} cm de arista. ¿Cuál es su volumen (en cm³)?"

explicacion: |
  El volumen de un cubo es la arista elevada al cubo.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  n: random(2, 3)

respuesta: ((a * b) ^ n == (a ^ n) * (b ^ n))
tipo: vf

enunciado: "¿Es cierto que ({a} × {b})^{n} da lo mismo que {a}^{n} × {b}^{n}?"

explicacion: |
  Es la propiedad de la potencia de un producto: el exponente se
  distribuye a cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "propiedades"]

variables:
  base: random(2, 9)
  n: random(2, 4)
  m: random(2, 4)

respuesta: ((base ^ n) * (base ^ m) == base ^ (n + m))
tipo: vf

enunciado: "¿Es cierto que {base}^{n} × {base}^{m} da lo mismo que {base}^({n} + {m})?"

explicacion: |
  Es la propiedad del producto de potencias de igual base.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "orden"]

tipo: ordenar
enunciado: "Calculá estas potencias y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "2^5"
  - "3^3"
  - "5^2"
  - "2^3"
respuesta_orden: ["2^3", "5^2", "3^3", "2^5"]

explicacion: |
  2³=8, 5²=25, 3³=27, 2⁵=32: hay que calcular cada una antes de poder
  ordenarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias"]

variables:
  exponente: random(2, 6)

respuesta: 10 ^ exponente
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 10^{exponente}?"

pasos:
  - "10 elevado a n es un 1 seguido de n ceros: {10 ^ exponente}"

explicacion: |
  Las potencias de 10 son la base de la notación científica, el próximo
  tema del mapa.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "intermedio"
  tags: ["potencias", "comparacion"]

variables:
  base1: random(2, 9)
  exp1: random(2, 4)
  base2: random(2, 9)
  exp2: random(2, 4)

restricciones:
  - (base1 ^ exp1) != (base2 ^ exp2)

respuesta: ((base1 ^ exp1) > (base2 ^ exp2))
tipo: vf

enunciado: "¿Es {base1}^{exp1} mayor que {base2}^{exp2}?"

explicacion: |
  Hay que calcular las dos potencias antes de poder compararlas — no
  alcanza con comparar sólo las bases o sólo los exponentes por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "problema"]

variables:
  inicial: random(1, 10)
  veces: random(3, 8)

respuesta: inicial * (2 ^ veces)
tipo: input
tolerancia_abs: 0

enunciado: "Una población de {inicial} bacterias se duplica cada hora. ¿Cuántas bacterias hay después de {veces} horas?"

pasos:
  - "{inicial} × 2^{veces} = {inicial} × {2 ^ veces} = {inicial * (2 ^ veces)}"

explicacion: |
  Duplicarse varias veces seguidas es multiplicar por 2 elevado a la
  cantidad de veces que se duplicó.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 10)
  exponente: random(1, 3)

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que {base}^(-{exponente}) da como resultado un número menor a 1?"

explicacion: |
  Un exponente negativo con base mayor a 1 siempre da una fracción entre
  0 y 1.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "avanzado"
  tags: ["potencias", "casos_especiales"]

variables:
  base: random(2, 9)
  exponente: random(1, 3) * 2

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que (-{base})^{exponente} da como resultado un número positivo?"

explicacion: |
  Con exponente par, los signos negativos se van cancelando de a pares:
  el resultado siempre da positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "potencias"
  nivel: "basico"
  tags: ["potencias", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una potencia es multiplicar la base por sí misma tantas veces como indica el exponente."

explicacion: |
  Es la idea central de todo el tema: potenciación es multiplicación
  repetida, igual que multiplicación es suma repetida.
```

## Sección: probabilidad-simple (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "vocabulario"]

enunciado: "¿Qué mide la probabilidad de un evento?"
tipo: mc
opciones_explicitas:
  - "Qué tan posible es que ocurra ese evento, con un número entre 0 (imposible) y 1 (seguro)"
  - "Cuántas veces ya ocurrió ese evento en el pasado"
  - "El tiempo que tarda en ocurrir ese evento"
respuesta: "Qué tan posible es que ocurra ese evento, con un número entre 0 (imposible) y 1 (seguro)"

explicacion: |
  0 significa que nunca puede pasar; 1 significa que siempre pasa.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "completar"]

tipo: completar
enunciado: "Completá: P(evento) = casos ___ / casos totales."
respuestas_validas:
  - "favorables"

explicacion: |
  Los casos favorables son los que cumplen la condición del evento.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "vocabulario"]

enunciado: "¿Qué es el espacio muestral de un experimento?"
tipo: mc
opciones_explicitas:
  - "El conjunto de TODOS los resultados posibles de ese experimento"
  - "Sólo el resultado que finalmente ocurrió"
  - "La cantidad de veces que se repite el experimento"
respuesta: "El conjunto de TODOS los resultados posibles de ese experimento"

explicacion: |
  Al tirar un dado, el espacio muestral es {1, 2, 3, 4, 5, 6}.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "vocabulario"]

enunciado: "¿Qué es un evento, en términos de probabilidad?"
tipo: mc
opciones_explicitas:
  - "Un subconjunto del espacio muestral (un conjunto de resultados que cumplen cierta condición)"
  - "El espacio muestral completo, siempre"
  - "Un número entre 0 y 100 fijo"
respuesta: "Un subconjunto del espacio muestral (un conjunto de resultados que cumplen cierta condición)"

explicacion: |
  Es el mismo vocabulario de conjuntos que ya se usó en
  `../diagramas-de-venn/`.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

respuesta: 0.5
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un número PAR (2, 4 o 6)?"

pasos:
  - "Casos favorables: {2, 4, 6} = 3. Casos totales: 6."
  - "P = 3/6 = 0,5"

explicacion: |
  La mitad de los números del 1 al 6 son pares.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un múltiplo de 3 (3 o 6)?"

pasos:
  - "Casos favorables: {3, 6} = 2. Casos totales: 6."
  - "P = 2/6 = {redondear(2 / 6, 3)}"

explicacion: |
  Sólo el 3 y el 6, entre el 1 y el 6, son múltiplos de 3.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "problema"]

respuesta: 0.5
tipo: input

enunciado: "Al lanzar una moneda equilibrada, ¿cuál es la probabilidad de que salga cara?"

pasos:
  - "1 caso favorable (cara) sobre 2 casos totales (cara o ceca): P = 1/2 = 0,5"

explicacion: |
  Ambos resultados son igual de probables en una moneda equilibrada.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  totales: uno_de([12, 18, 24])
  favorables: uno_de([4, 6])

respuesta: fraccion(favorables, totales)
tipo: input

enunciado: "En una bolsa hay {totales} bolitas en total, y {favorables} son rojas. Expresá la probabilidad de sacar una bolita roja como fracción simplificada (formato p/q)."

pasos:
  - "P = {favorables}/{totales}, simplificada = {fraccion(favorables, totales)}"

explicacion: |
  Se simplifica la fracción dividiendo numerador y denominador por su
  máximo común divisor.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si la probabilidad de un evento es exactamente 0, ese evento es imposible: no tiene ningún caso favorable."

explicacion: |
  Por ejemplo, sacar un 7 en un dado normal de 6 caras.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si la probabilidad de un evento es exactamente 1, ese evento es seguro: todos los casos posibles lo cumplen."

explicacion: |
  Por ejemplo, sacar un número entre 1 y 6 en un dado de 6 caras.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las probabilidades de TODOS los resultados posibles de un espacio muestral siempre da exactamente 1 (100%)."

explicacion: |
  Alguno de los resultados posibles tiene que ocurrir, así que la
  probabilidad total de que 'pase alguno' es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "completar"]

tipo: completar
enunciado: "Completá: P(Ā) = 1 − ___."
respuestas_validas:
  - "P(A)"

explicacion: |
  La probabilidad de que NO ocurra A es 1 menos la probabilidad de que
  ocurra A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

variables:
  p_a: uno_de([0.2, 0.3, 0.4, 0.6, 0.7])

respuesta: redondear(1 - p_a, 2)
tipo: input

enunciado: "Si la probabilidad de que llueva mañana es {p_a}, ¿cuál es la probabilidad de que NO llueva?"

pasos:
  - "P(no llueve) = 1 − {p_a} = {redondear(1 - p_a, 2)}"

explicacion: |
  Lluvia y no-lluvia son eventos complementarios: cubren entre los dos
  todo lo posible.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  rojas: random(3, 8)
  azules: random(3, 8)
  verdes: random(3, 8)

respuesta: redondear(rojas / (rojas + azules + verdes), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {rojas} bolitas rojas, {azules} azules y {verdes} verdes. Si se saca una al azar, ¿cuál es la probabilidad de que sea roja?"

pasos:
  - "Total de bolitas = {rojas} + {azules} + {verdes} = {rojas + azules + verdes}"
  - "P(roja) = {rojas} / {rojas + azules + verdes} = {redondear(rojas / (rojas + azules + verdes), 3)}"

explicacion: |
  Los casos favorables son las bolitas rojas; los totales, todas las
  bolitas de la bolsa.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "problema"]

respuesta: redondear(4 / 40, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mazo de 40 cartas españolas (4 palos, 10 cartas cada uno), ¿cuál es la probabilidad de sacar un as (hay 4 ases en total)?"

pasos:
  - "P(as) = 4/40 = {redondear(4 / 40, 3)}"

explicacion: |
  Hay exactamente un as por palo, 4 en total sobre 40 cartas.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad", "ordenar"]

enunciado: "Ordená los pasos para calcular la probabilidad de un evento simple."
tipo: ordenar
opciones_explicitas:
  - "El cociente entre ambos es la probabilidad del evento"
  - "Contar cuántos casos totales hay en el espacio muestral"
  - "Contar cuántos de esos casos son favorables al evento"
respuesta_orden: ["Contar cuántos casos totales hay en el espacio muestral", "Contar cuántos de esos casos son favorables al evento", "El cociente entre ambos es la probabilidad del evento"]
explicacion: |
  Sin los dos números (favorables y totales) no hay cociente que
  calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "aplicacion"]

enunciado: "Cuando un pronóstico dice '70% de probabilidad de lluvia', ¿qué significa ese número?"
tipo: mc
opciones_explicitas:
  - "Que, en condiciones similares, llovió el 70% de las veces (es una estimación de qué tan probable es que llueva, no una certeza)"
  - "Que va a llover exactamente el 70% del día"
  - "Que sólo va a llover en el 70% del territorio"
respuesta: "Que, en condiciones similares, llovió el 70% de las veces (es una estimación de qué tan probable es que llueva, no una certeza)"

explicacion: |
  Una probabilidad alta no es una garantía — sigue siendo posible que
  no llueva ese día en particular.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "aplicacion"]

enunciado: "¿Por qué la probabilidad de ganar el premio mayor de una lotería suele ser un número extremadamente chico (cercano a 0, pero no exactamente 0)?"
tipo: mc
opciones_explicitas:
  - "Porque hay muchísimos casos totales posibles y muy pocos (o uno solo) son favorables"
  - "Porque las loterías están diseñadas para que nadie pueda ganar nunca"
  - "Porque la probabilidad de ganar siempre es exactamente 0"
respuesta: "Porque hay muchísimos casos totales posibles y muy pocos (o uno solo) son favorables"

explicacion: |
  No es imposible (P=0), sólo muy poco probable — hay una diferencia
  real entre ambas cosas.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  rojas: random(3, 10)
  azules: random(3, 10)

respuesta: redondear(azules / (rojas + azules), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una bolsa tiene {rojas} bolitas rojas y {azules} azules (nada más). ¿Cuál es la probabilidad de que la bolita extraída NO sea roja?"

pasos:
  - "P(no roja) = P(azul) = {azules} / ({rojas}+{azules}) = {redondear(azules / (rojas + azules), 3)}"

explicacion: |
  Como sólo hay dos colores, 'no roja' es exactamente lo mismo que
  'azul'.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "intermedio"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "La probabilidad de cualquier evento siempre está entre 0 y 1 (inclusive) — nunca puede ser negativa ni mayor a 1."

explicacion: |
  Los casos favorables nunca pueden ser más que los casos totales, ni
  menos que cero.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["probabilidad", "problema"]

variables:
  p: uno_de([0.25, 0.4, 0.6, 0.75])

respuesta: p * 100
tipo: input
unidad: "%"

enunciado: "Si la probabilidad de un evento es {p}, ¿a qué porcentaje equivale?"

pasos:
  - "{p} × 100 = {p * 100}%"

explicacion: |
  Multiplicar por 100 pasa de proporción (0 a 1) a porcentaje (0% a
  100%).
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Un evento con probabilidad muy baja (por ejemplo, 0,0001) NO es lo mismo que un evento imposible (probabilidad exactamente 0) — sigue pudiendo ocurrir."

explicacion: |
  'Muy poco probable' y 'imposible' son categorías distintas, aunque
  en la vida cotidiana a veces se confundan.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  numeros_totales: uno_de([20, 30, 50])
  multiplo: uno_de([4, 5])

respuesta: redondear(floor(numeros_totales / multiplo) / numeros_totales, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se elige al azar un número entre 1 y {numeros_totales}. ¿Cuál es la probabilidad de que sea múltiplo de {multiplo}?"

pasos:
  - "Cantidad de múltiplos de {multiplo} hasta {numeros_totales}: {floor(numeros_totales / multiplo)}"
  - "P = {floor(numeros_totales / multiplo)} / {numeros_totales} = {redondear(floor(numeros_totales / multiplo) / numeros_totales, 3)}"

explicacion: |
  Se cuentan los múltiplos de {multiplo} en ese rango, y se divide por
  el total de números posibles.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "avanzado"
  tags: ["probabilidad", "problema"]

variables:
  total: uno_de([10, 15, 20, 25])
  favorables: uno_de([2, 5])

respuesta: fraccion(favorables, total)
tipo: input

enunciado: "Una ruleta tiene {total} casilleros iguales, {favorables} de ellos son de color dorado. Expresá la probabilidad de que caiga en dorado como fracción simplificada."

pasos:
  - "P = {favorables}/{total}, simplificada = {fraccion(favorables, total)}"

explicacion: |
  Simplificar la fracción no cambia el valor de la probabilidad, sólo
  la forma en que se escribe.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_simple"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular la probabilidad simple de un evento?"
tipo: mc
opciones_explicitas:
  - "Para medir con un número qué tan posible es que ocurra un evento, a partir de casos favorables sobre casos totales"
  - "Sólo sirve para juegos de azar, sin ninguna otra aplicación"
  - "Sólo aplica cuando el espacio muestral tiene exactamente 6 resultados"
respuesta: "Para medir con un número qué tan posible es que ocurra un evento, a partir de casos favorables sobre casos totales"

explicacion: |
  Es la base directa de `../independencia-de-eventos-y-diagrama-de-arbol/`
  y `../probabilidad-compuesta/`, que combinan varios eventos simples
  como este.
```

## Sección: logaritmos (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

enunciado: "¿Qué es log₁₀ x?"
tipo: mc
opciones_explicitas:
  - "El exponente al que hay que elevar 10 para obtener x"
  - "x dividido 10"
  - "10 elevado a x"
respuesta: "El exponente al que hay que elevar 10 para obtener x"

explicacion: |
  log_b x = y significa que bʸ = x: el logaritmo despeja el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀({x})?"

pasos:
  - "{x} = 10^{n}, así que log₁₀({x}) = {n}"

explicacion: |
  El logaritmo en base 10 de una potencia exacta de 10 es, directamente,
  el exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(2, 9)
  x: 10 ^ n

respuesta: log10(x)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀({x})?"

explicacion: |
  Alcanza con contar cuántos ceros tiene {x} después del 1.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "vocabulario"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: ((10 ^ n) == x)
tipo: vf

enunciado: "Sabiendo que log₁₀({x}) = {n}, ¿es cierto que 10^{n} = {x}?"

explicacion: |
  El logaritmo y la potencia son operaciones inversas: si log_b x = y,
  entonces bʸ = x.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "casos_especiales"]

respuesta: 0
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(1)?"

explicacion: |
  Cualquier base elevada a 0 da 1: por eso el logaritmo de 1, en
  cualquier base, siempre es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "casos_especiales"]

respuesta: 1
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(10)?"

explicacion: |
  Cualquier base elevada a 1 da esa misma base: por eso log_b(b) siempre
  es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

respuesta: (abs(log10(a * b) - (log10(a) + log10(b))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} × {b}) da lo mismo que log₁₀({a}) + log₁₀({b})?"

explicacion: |
  Es la propiedad del logaritmo de un producto: se convierte en una suma
  de logaritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(20, 900)
  b: random(2, 19)

respuesta: (abs(log10(a / b) - (log10(a) - log10(b))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} ÷ {b}) da lo mismo que log₁₀({a}) - log₁₀({b})?"

explicacion: |
  Es la propiedad del logaritmo de un cociente: se convierte en una resta
  de logaritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  n: random(2, 4)

respuesta: (abs(log10(a ^ n) - (n * log10(a))) < 0.001)
tipo: vf

enunciado: "¿Es cierto que log₁₀({a}^{n}) da lo mismo que {n} × log₁₀({a})?"

explicacion: |
  Es la propiedad del logaritmo de una potencia: el exponente pasa a
  multiplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  n1: random(1, 4)
  n2: random(1, 4)

respuesta: n1 + n2
tipo: input
tolerancia_abs: 0.001

enunciado: "Sabiendo que log₁₀(10^{n1}) = {n1} y log₁₀(10^{n2}) = {n2}, ¿cuánto es log₁₀(10^{n1} × 10^{n2})?"

pasos:
  - "log₁₀(10^{n1} × 10^{n2}) = {n1} + {n2} = {n1 + n2}"

explicacion: |
  El logaritmo de un producto es la suma de los logaritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)
  x: 10 ^ n

respuesta: n
tipo: mc
opciones_explicitas:
  - n
  - x / 10
  - n + 1

enunciado: "¿Cuánto es log₁₀({x})?"

explicacion: |
  Las otras opciones confunden el logaritmo con dividir por 10, o se
  equivocan por poco.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "verificacion"]

variables:
  n: random(1, 6)
  x: 10 ^ n
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: n + error

respuesta: (mostrado == n)
tipo: vf

enunciado: "¿Está bien calculado esto? log₁₀({x}) = {mostrado}"

explicacion: |
  Se verifica comprobando que 10 elevado al resultado dado sea igual a
  {x}.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos"]

variables:
  n: random(1, 6)

tipo: completar
enunciado: "Completá: log₁₀(10^___) = {n}."
respuestas_validas:
  - n

explicacion: |
  Hay que encontrar a qué exponente hay que elevar 10 para que el
  logaritmo dé {n}.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

variables:
  n: random(100, 98765)

respuesta: floor(log10(n)) + 1
tipo: input
tolerancia_abs: 0

enunciado: "Usando que la cantidad de cifras de un número es floor(log₁₀(n)) + 1, ¿cuántas cifras tiene {n}?"

explicacion: |
  El logaritmo en base 10 de un número dice, aproximadamente, cuántas
  cifras tiene: tomar la parte entera y sumarle 1 da la cantidad exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "comparacion"]

variables:
  a: random(2, 999)
  b: random(2, 999)

restricciones:
  - a != b

respuesta: (log10(a) > log10(b))
tipo: vf

enunciado: "¿Es log₁₀({a}) mayor que log₁₀({b})?"

explicacion: |
  Con base mayor a 1, a mayor argumento, mayor el logaritmo — no hace
  falta calcular los dos logaritmos exactos para saber cuál es mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

variables:
  n1: random(2, 6)
  n2: n1 + 1

respuesta: 10
tipo: input
tolerancia_abs: 0.01

enunciado: "La escala Richter es logarítmica en base 10: un sismo de magnitud {n2} libera 10 veces más energía que uno de magnitud {n1}. ¿Cuántas veces más energía libera cada punto de diferencia?"

explicacion: |
  En una escala logarítmica de base 10, cada unidad de diferencia
  representa multiplicar por 10.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "casos_especiales"]

variables:
  n: random(1, 4)

respuesta: -n
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es log₁₀(1 ÷ 10^{n})?"

pasos:
  - "1 ÷ 10^{n} = 10^(-{n}), así que su logaritmo es -{n}"

explicacion: |
  El logaritmo de un número menor a 1 (pero mayor a 0) siempre da
  negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "orden"]

tipo: ordenar
enunciado: "Calculá estos logaritmos y ordená los resultados de menor a mayor."
opciones_explicitas:
  - "log₁₀(1000)"
  - "log₁₀(10)"
  - "log₁₀(100000)"
  - "log₁₀(1)"
respuesta_orden: ["log₁₀(1)", "log₁₀(10)", "log₁₀(1000)", "log₁₀(100000)"]

explicacion: |
  log₁₀(1)=0, log₁₀(10)=1, log₁₀(1000)=3, log₁₀(100000)=5.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos"]

variables:
  n: random(2, 999)

respuesta: log10(n)
tipo: input
tolerancia_abs: 0.001

enunciado: "¿Cuánto es (aproximadamente) log₁₀({n})?"

explicacion: |
  No todos los logaritmos dan un número entero exacto: cuando no es
  potencia exacta de la base, el resultado es un decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La parte entera de log₁₀(n) está directamente relacionada con el exponente que tendría n escrito en notación científica."

explicacion: |
  Para un número entre 1×10ⁿ y 10×10ⁿ, log₁₀ del número da un valor
  entre n y n+1 — la parte entera coincide con el exponente de la
  notación científica.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El logaritmo es la operación inversa de la potenciación, igual que la resta es inversa de la suma."

explicacion: |
  Aplicar la potenciación y después el logaritmo (en la misma base)
  vuelve al exponente original.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que log₁₀({a} × {b}) da lo mismo que log₁₀({a}) × log₁₀({b})?"

explicacion: |
  Es un error común: el logaritmo de un producto es la SUMA de los
  logaritmos, no el producto.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "intermedio"
  tags: ["logaritmos", "vocabulario"]

enunciado: "Cuando se escribe \"log x\" sin ninguna base aclarada, ¿a qué base se suele referir en el nivel secundario?"
tipo: mc
opciones_explicitas:
  - "Base 10"
  - "Base 2"
  - "Siempre hay que aclarar la base, nunca se sobreentiende"
respuesta: "Base 10"

explicacion: |
  "log" sin base es, por convención en este nivel, el logaritmo decimal
  (base 10) — distinto de "ln", que es el logaritmo natural (base e).
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "comparacion"]

variables:
  a: random(100, 999)
  b: random(10, 99)

respuesta: verdadero
tipo: vf

enunciado: "Sin calcular el valor exacto: ¿es cierto que log₁₀({a}) es mayor que log₁₀({b}), sabiendo que {a} tiene más cifras que {b}?"

explicacion: |
  Más cifras significa mayor magnitud, y el logaritmo en base 10 crece
  junto con la magnitud del número.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "avanzado"
  tags: ["logaritmos", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "El pH de una solución se calcula con un logaritmo en base 10: por eso, una solución de pH 3 es 10 veces más ácida que una de pH 4."

explicacion: |
  Es otra aplicación real de una escala logarítmica, igual que la escala
  Richter de terremotos.
```

```
metadata:
  materia: "matematicas"
  tema: "logaritmos"
  nivel: "basico"
  tags: ["logaritmos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El logaritmo despeja el exponente de una potencia, sabiendo la base y el resultado."

explicacion: |
  Es la idea central de todo el tema: log_b x = y ⟺ bʸ = x.
```

## Sección: probabilidad-compuesta (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "vocabulario"]

enunciado: "¿Qué calcula la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de que ocurran varios eventos a la vez, o de que ocurra al menos uno de varios"
  - "La probabilidad de un único evento simple"
  - "Sólo la probabilidad de eventos que nunca pueden ocurrir"
respuesta: "La probabilidad de que ocurran varios eventos a la vez, o de que ocurra al menos uno de varios"

explicacion: |
  Combina la probabilidad simple con la independencia entre eventos.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: si A y B son independientes, P(A y B) = P(A) × ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Es la misma regla del producto ya usada con los diagramas de árbol.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  pa: uno_de([0.3, 0.4, 0.5, 0.6])
  pb: uno_de([0.2, 0.5, 0.7])

respuesta: redondear(pa * pb, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "A y B son eventos independientes, con P(A)={pa} y P(B)={pb}. ¿Cuál es P(A y B)?"

pasos:
  - "P(A y B) = {pa} × {pb} = {redondear(pa * pb, 3)}"

explicacion: |
  Se multiplican directo, porque son independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: si A y B son mutuamente excluyentes (no pueden ocurrir juntos), P(A o B) = P(A) + ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Al no poder solaparse, no hay nada que restar.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga 2 O que salga 5? (no pueden salir los dos a la vez en un solo tiro)"

pasos:
  - "P(2) = 1/6, P(5) = 1/6. Son mutuamente excluyentes."
  - "P(2 o 5) = 1/6 + 1/6 = {redondear(2 / 6, 3)}"

explicacion: |
  En un solo tiro de dado, no puede salir 2 y 5 a la vez — se suman
  directo.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Si A y B PUEDEN ocurrir juntos, sumar P(A) + P(B) directo sobrestima la probabilidad de 'A o B', porque el caso en que ocurren ambos se cuenta dos veces."

explicacion: |
  Por eso hay que restar P(A y B) una vez, igual que con la
  cardinalidad de la unión de conjuntos.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "completar"]

tipo: completar
enunciado: "Completá: en general (aunque A y B puedan solaparse), P(A o B) = P(A) + P(B) − ___."
respuestas_validas:
  - "P(A y B)"

explicacion: |
  Es la fórmula de inclusión-exclusión, igual que
  |A∪B|=|A|+|B|−|A∩B|.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  pa: uno_de([0.3, 0.4, 0.5])
  pb: uno_de([0.2, 0.3, 0.4])
  pab: uno_de([0.1, 0.05])

respuesta: redondear(pa + pb - pab, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(A)={pa}, P(B)={pb}, y P(A y B)={pab} (A y B SÍ pueden ocurrir juntos). ¿Cuál es P(A o B)?"

pasos:
  - "P(A o B) = {pa} + {pb} − {pab} = {redondear(pa + pb - pab, 3)}"

explicacion: |
  Se resta la superposición para no contarla dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "intermedio"
  tags: ["probabilidad_compuesta"]

enunciado: "¿Cuál es la pista para saber si hay que multiplicar o sumar dos probabilidades?"
tipo: mc
opciones_explicitas:
  - "'Y' (ambos a la vez) sugiere multiplicar; 'O' (cualquiera de los dos) sugiere sumar (ajustando si se solapan)"
  - "Siempre hay que multiplicar, sin importar la pregunta"
  - "Siempre hay que sumar, sin importar la pregunta"
respuesta: "'Y' (ambos a la vez) sugiere multiplicar; 'O' (cualquiera de los dos) sugiere sumar (ajustando si se solapan)"

explicacion: |
  No es una regla mágica, pero es una guía práctica confiable para
  empezar a plantear el problema.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(4 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Al tirar un dado de 6 caras, ¿cuál es la probabilidad de que salga un número PAR o un MÚLTIPLO DE 3? (el 6 es ambas cosas a la vez)"

pasos:
  - "P(par) = 3/6 = {2, 4, 6}. P(múltiplo de 3) = 2/6 = {3, 6}. P(par y múltiplo de 3) = 1/6 = {6}."
  - "P(par o múltiplo de 3) = 3/6 + 2/6 − 1/6 = 4/6 = {redondear(4 / 6, 3)}"

explicacion: |
  El 6 cumple las dos condiciones — sin restar esa superposición, se
  contaría dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "ordenar"]

enunciado: "Ordená los pasos para decidir y aplicar la regla correcta de probabilidad compuesta."
tipo: ordenar
opciones_explicitas:
  - "Si es 'O', revisar si los eventos pueden ocurrir juntos: si no, sumar directo; si sí, sumar y restar la superposición"
  - "Identificar si la pregunta pide 'Y' (ambos) o 'O' (cualquiera)"
  - "Si es 'Y', revisar si los eventos son independientes o dependientes, y multiplicar con las probabilidades correspondientes"
respuesta_orden: ["Identificar si la pregunta pide 'Y' (ambos) o 'O' (cualquiera)", "Si es 'Y', revisar si los eventos son independientes o dependientes, y multiplicar con las probabilidades correspondientes", "Si es 'O', revisar si los eventos pueden ocurrir juntos: si no, sumar directo; si sí, sumar y restar la superposición"]
explicacion: |
  Identificar primero 'Y' vs 'O' es el paso que determina qué
  operación aplicar.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: 0.25
tipo: input

enunciado: "Cada progenitor (Aa) tiene 1/2 de probabilidad de transmitir el alelo recesivo 'a' (independiente del otro progenitor). ¿Cuál es la probabilidad de que un hijo herede el alelo recesivo de AMBOS progenitores (genotipo aa)?"

pasos:
  - "P(a del padre) = 1/2. P(a de la madre) = 1/2. Son independientes."
  - "P(aa) = 1/2 × 1/2 = 0,25"

explicacion: |
  Es exactamente la proporción 1/4 del cuadro de Punnett clásico
  (Aa × Aa → 1 AA : 2 Aa : 1 aa), calculada con probabilidad compuesta
  en vez de dibujar el cuadro de 4 casilleros.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: 0.75
tipo: input

enunciado: "Se lanzan 2 monedas independientes. ¿Cuál es la probabilidad de que salga AL MENOS una cara (una o las dos)?"

pasos:
  - "P(ninguna cara) = P(ceca y ceca) = 0,5 × 0,5 = 0,25"
  - "P(al menos una cara) = 1 − P(ninguna) = 1 − 0,25 = 0,75"

explicacion: |
  Para 'al menos uno', suele ser más fácil calcular el complemento
  ('ninguno') y restar de 1, en vez de sumar todos los casos con al
  menos una cara por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "¿Qué relación tiene el cuadro de Punnett de Biología con la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con otra notación visual"
  - "No tiene ninguna relación real, son temas separados"
  - "El cuadro de Punnett reemplaza por completo a la probabilidad, no la necesita"
respuesta: "Es exactamente probabilidad compuesta (eventos independientes que se multiplican), con otra notación visual"

explicacion: |
  Heredar un alelo de cada progenitor son eventos independientes —
  el cuadro de Punnett es una forma visual de multiplicar esas
  probabilidades.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  p_madre: uno_de([0.5, 1])
  p_padre: uno_de([0.5, 1])

respuesta: redondear(p_madre * p_padre, 3)
tipo: input

enunciado: "La probabilidad de que la madre transmita el alelo recesivo es {p_madre}, y la del padre es {p_padre} (eventos independientes). ¿Cuál es la probabilidad de que el hijo herede el alelo recesivo de ambos?"

pasos:
  - "P(ambos) = {p_madre} × {p_padre} = {redondear(p_madre * p_padre, 3)}"

explicacion: |
  Si un progenitor es homocigota (p=1), siempre transmite ese alelo,
  pero la regla del producto sigue aplicando igual.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "P(A y B) = P(A) × P(B) sólo vale directo si A y B son independientes; si son dependientes, la segunda probabilidad hay que recalcularla sabiendo que el primer evento ya ocurrió (como en el diagrama de árbol sin reposición)."

explicacion: |
  Es la misma distinción de `../independencia-de-eventos-y-diagrama-de-arbol/`.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(8 / 40, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 ases, 4 reyes), ¿cuál es la probabilidad de sacar un AS o un REY en una sola extracción? (ninguna carta es las dos cosas a la vez)"

pasos:
  - "P(as) = 4/40, P(rey) = 4/40. Son mutuamente excluyentes (ninguna carta es ambas)."
  - "P(as o rey) = 4/40 + 4/40 = 8/40 = {redondear(8 / 40, 3)}"

explicacion: |
  Ninguna carta puede ser as y rey a la vez, así que se suman directo
  sin restar nada.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear((12 / 40) + (10 / 40) - (3 / 40), 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 palos de 10 cartas, con 3 figuras por palo: 12 figuras en total, 10 cartas de oro), ¿cuál es la probabilidad de sacar una FIGURA o una carta de ORO? (las figuras de oro son ambas cosas a la vez: 3 cartas)"

pasos:
  - "P(figura) = 12/40, P(oro) = 10/40, P(figura y oro) = 3/40 (las 3 figuras de oro)"
  - "P(figura o oro) = 12/40 + 10/40 − 3/40 = {redondear((12 / 40) + (10 / 40) - (3 / 40), 3)}"

explicacion: |
  Hay 3 cartas que son figura Y de oro a la vez — sin restarlas, se
  contarían dos veces.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["probabilidad_compuesta", "aplicacion"]

enunciado: "Si la probabilidad de que llueva es 0,4 y la de que se corte la luz (independiente de la lluvia) es 0,1, ¿cómo se calcula la probabilidad de que pasen LAS DOS COSAS a la vez?"
tipo: mc
opciones_explicitas:
  - "Multiplicando 0,4 × 0,1, porque son eventos independientes y se pide 'Y'"
  - "Sumando 0,4 + 0,1, porque se pide 'ambas cosas'"
  - "No se puede calcular sin más información sobre el clima"
respuesta: "Multiplicando 0,4 × 0,1, porque son eventos independientes y se pide 'Y'"

explicacion: |
  'Ambas cosas a la vez' es la palabra clave de la regla del producto,
  no de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  falla1: uno_de([0.05, 0.1, 0.15])
  falla2: uno_de([0.02, 0.08])

respuesta: redondear(falla1 * falla2, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Dos máquinas funcionan de forma independiente. La probabilidad de que la máquina 1 falle es {falla1}, y la de que la máquina 2 falle es {falla2}. ¿Cuál es la probabilidad de que AMBAS fallen a la vez?"

pasos:
  - "P(ambas fallan) = {falla1} × {falla2} = {redondear(falla1 * falla2, 4)}"

explicacion: |
  Es mucho menos probable que fallen las dos juntas que que falle
  sólo una — por eso los sistemas críticos usan componentes
  redundantes e independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "P(A y B) nunca puede ser mayor que P(A) sola (pedir una condición extra nunca aumenta la probabilidad, como mucho la deja igual)."

explicacion: |
  Multiplicar por P(B) (que es como mucho 1) nunca puede aumentar el
  valor de P(A).
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

enunciado: "Al tirar UN SOLO dado, para calcular P(par Y mayor que 3), ¿por qué NO corresponde multiplicar P(par) × P(mayor que 3) como si fueran dos experimentos independientes?"
tipo: mc
opciones_explicitas:
  - "Porque son dos condiciones sobre el MISMO resultado de un único tiro, no dos eventos de experimentos separados — hay que contar directo los casos que cumplen ambas condiciones a la vez"
  - "Porque en realidad sí corresponde multiplicar, sin ninguna excepción"
  - "Porque un dado nunca puede cumplir dos condiciones a la vez"
respuesta: "Porque son dos condiciones sobre el MISMO resultado de un único tiro, no dos eventos de experimentos separados — hay que contar directo los casos que cumplen ambas condiciones a la vez"

explicacion: |
  Par y mayor que 3 en un dado: {4, 6} cumplen ambas → P=2/6, que en
  general NO coincide con P(par)×P(mayor que 3) = (3/6)×(3/6) = 9/36 —
  son cálculos distintos porque no es una multiplicación de dos
  tiradas separadas.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

respuesta: redondear(2 / 6, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un solo tiro de un dado de 6 caras, ¿cuál es la probabilidad real de que salga un número PAR y MAYOR QUE 3 a la vez (contando los casos directo: {4, 6})?"

pasos:
  - "Los números pares y mayores que 3, del 1 al 6, son 4 y 6: 2 casos favorables."
  - "P = 2/6 = {redondear(2 / 6, 3)}"

explicacion: |
  Es distinto del resultado de multiplicar P(par)×P(mayor que 3) —
  confirma por qué esa multiplicación no aplicaba acá.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta"]

respuesta: verdadero
tipo: vf

enunciado: "Antes de aplicar P(A y B) = P(A) × P(B), conviene confirmar que A y B son realmente independientes — asumirlo sin pensar puede llevar a un resultado incorrecto."

explicacion: |
  Es el error más común de este tema: multiplicar directo sin
  verificar si corresponde.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "avanzado"
  tags: ["probabilidad_compuesta", "problema"]

variables:
  p_exito: uno_de([0.3, 0.4])
  intentos: uno_de([2, 3])

respuesta: redondear((1 - p_exito) ^ intentos, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un jugador tiene {p_exito} de probabilidad de éxito en cada intento (independientes entre sí). ¿Cuál es la probabilidad de que falle los {intentos} intentos, uno tras otro?"

pasos:
  - "P(falla) en cada intento = 1 − {p_exito} = {1 - p_exito}"
  - "P(falla los {intentos}) = ({1 - p_exito})^{intentos} = {redondear((1 - p_exito) ^ intentos, 3)}"

explicacion: |
  Se multiplica la probabilidad de fallar, la misma cantidad de veces
  que hay intentos, porque son independientes.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_compuesta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la probabilidad compuesta?"
tipo: mc
opciones_explicitas:
  - "Para calcular la probabilidad de que ocurran varios eventos a la vez, o al menos uno de varios, combinando las reglas del Y y del O"
  - "Sólo sirve para dados y monedas"
  - "Sólo aplica cuando los eventos son mutuamente excluyentes"
respuesta: "Para calcular la probabilidad de que ocurran varios eventos a la vez, o al menos uno de varios, combinando las reglas del Y y del O"

explicacion: |
  Cierra este bloque de Tronco 4.b y es la puerta directa al cuadro
  de Punnett de Biología — el mismo cálculo, otra notación.
```

