# Examen jefe — Maestro del Cálculo y Probabilidad

> Logro #67. Resolviste con éxito el parcial integrando trigonometría, probabilidades y el área bajo la curva. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **130 preguntas totales** en 5/5 secciones.

---

## Sección: identidades-y-ecuaciones-trigonometricas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una identidad y una ecuación trigonométrica?"
tipo: mc
opciones_explicitas:
  - "La identidad se cumple para todo ángulo; la ecuación sólo para algunos ángulos específicos"
  - "Son exactamente lo mismo, dos nombres para un solo concepto"
  - "La identidad sólo aplica al seno; la ecuación sólo al coseno"
respuesta: "La identidad se cumple para todo ángulo; la ecuación sólo para algunos ángulos específicos"

explicacion: |
  Es la distinción central de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades"]

respuesta: verdadero
tipo: vf

enunciado: "sen²θ + cos²θ = 1 es una identidad: se cumple para absolutamente cualquier ángulo θ."

explicacion: |
  Es consecuencia del teorema de Pitágoras aplicado al círculo unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "sen(θ) = 0,5 es una ecuación: sólo se cumple para algunos ángulos específicos, no para todos."

explicacion: |
  Para la mayoría de los ángulos, sen(θ) da un valor distinto de 0,5.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["identidades", "completar"]

tipo: completar
enunciado: "Completá la identidad pitagórica: sen²θ + cos²θ = ___."
respuestas_validas:
  - "1"

explicacion: |
  Vale para cualquier ángulo θ.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

respuesta: 0.6
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ del primer cuadrante, cos(θ) = 0,8. Usando la identidad pitagórica, ¿cuánto vale sen(θ)?"

pasos:
  - "sen²θ = 1 − 0,8² = 1 − 0,64 = 0,36"
  - "senθ = √0,36 = 0,6"

explicacion: |
  Es el mismo triángulo 3-4-5, ahora con los lados divididos por la
  hipotenusa (0,6 = 3/5, 0,8 = 4/5).
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

respuesta: 0.8
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ del primer cuadrante, sen(θ) = 0,6. Usando la identidad pitagórica, ¿cuánto vale cos(θ)?"

pasos:
  - "cos²θ = 1 − 0,6² = 1 − 0,36 = 0,64"
  - "cosθ = √0,64 = 0,8"

explicacion: |
  En el primer cuadrante, tanto seno como coseno son positivos, así que
  se toma la raíz positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Qué dice la identidad sen(90° − θ) = cos(θ)?"
tipo: mc
opciones_explicitas:
  - "Que el seno de un ángulo es igual al coseno de su ángulo complementario"
  - "Que el seno y el coseno de cualquier ángulo son siempre iguales"
  - "Que 90° menos cualquier ángulo siempre da 0"
respuesta: "Que el seno de un ángulo es igual al coseno de su ángulo complementario"

explicacion: |
  Dos ángulos son complementarios si suman 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "problema"]

respuesta: 0.5
tipo: input
tolerancia_abs: 0.01

enunciado: "Sabiendo que sen(30°) = 0,5, y que 30° y 60° son ángulos complementarios (suman 90°), ¿cuánto vale cos(60°)?"

explicacion: |
  sen(30°) = cos(90° − 30°) = cos(60°): valen exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

variables:
  valor: uno_de([0.6, 0.71, 0.87])

respuesta: valor
tipo: input
tolerancia_abs: 0.01

enunciado: "Se sabe que cos(35°) = {valor}. ¿Cuánto vale sen(55°)? (35° y 55° son complementarios)"

explicacion: |
  cos(35°) = sen(90° − 35°) = sen(55°): mismo valor.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "30° y 150° son ángulos suplementarios: suman exactamente 180°."

explicacion: |
  Es la relación que explica por qué comparten el mismo valor de seno.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "sen(30°) y sen(150°) valen exactamente lo mismo."

explicacion: |
  El seno de un ángulo y el de su suplemento son siempre iguales — por
  la simetría del círculo unitario respecto del eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ángulos distintos, entre 0° y 360°, cumplen sen(θ) = 0,5?"

explicacion: |
  30° y 150° (suplementarios), ambos con seno 0,5.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones", "ordenar"]

enunciado: "Ordená de menor a mayor las dos soluciones de sen(θ) = 0,5 entre 0° y 360°."
tipo: ordenar
opciones_explicitas:
  - "150°"
  - "30°"
respuesta_orden:
  - "30°"
  - "150°"

explicacion: |
  Son ángulos suplementarios: 30° + 150° = 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 90
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo, entre 0° y 360°, cumple sen(θ) = 1?"

explicacion: |
  Es el único punto del círculo unitario con ordenada máxima, (0, 1).
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de sen(θ) = 0,5 (con dos soluciones), sen(θ) = 1 tiene una única solución entre 0° y 360°."

explicacion: |
  El valor máximo del seno se alcanza en un solo punto del círculo
  unitario por vuelta.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo, entre 0° y 360°, cumple cos(θ) = 1?"

explicacion: |
  Es el punto (1, 0) del círculo unitario, el ángulo de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones", "problema"]

respuesta: 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo del primer cuadrante (entre 0° y 90°) cumple cos(θ) = 0,5?"

explicacion: |
  cos(60°) = 0,5, uno de los valores notables ya conocidos (también
  cumple θ = 300°, fuera del primer cuadrante).
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación sen(θ) = 2 no tiene ninguna solución, para ningún ángulo θ."

explicacion: |
  El seno nunca puede superar 1: su amplitud está acotada.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "vocabulario"]

enunciado: "¿Por qué la ecuación sen(θ) = 2 no tiene solución para ningún ángulo?"
tipo: mc
opciones_explicitas:
  - "Porque el seno está acotado entre −1 y 1, y 2 queda fuera de ese rango"
  - "Porque 2 es un número par"
  - "En realidad sí tiene solución, para ángulos muy grandes"
respuesta: "Porque el seno está acotado entre −1 y 1, y 2 queda fuera de ese rango"

explicacion: |
  Es la amplitud ya vista en
  `../funciones-trigonometricas-seno-coseno/`.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "ordenar"]

enunciado: "Ordená los pasos para resolver una ecuación como sen(θ) = k, con k un valor notable."
tipo: ordenar
opciones_explicitas:
  - "Revisar si existe una segunda solución (el suplemento) dentro de la misma vuelta"
  - "Verificar que k esté entre −1 y 1 (si no, no hay solución)"
  - "Buscar en la tabla de ángulos notables cuál da ese valor de seno"
respuesta_orden:
  - "Verificar que k esté entre −1 y 1 (si no, no hay solución)"
  - "Buscar en la tabla de ángulos notables cuál da ese valor de seno"
  - "Revisar si existe una segunda solución (el suplemento) dentro de la misma vuelta"

explicacion: |
  Verificar el rango primero evita buscar una solución que no existe.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "problema"]

respuesta: 1
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ, sen(θ) = 0,6 y cos(θ) = 0,8. ¿Cuánto da sen²θ + cos²θ?"

pasos:
  - "0,6² + 0,8² = 0,36 + 0,64 = 1"

explicacion: |
  Confirma la identidad pitagórica con un caso concreto.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Qué significa 'despejar sen²θ' de la identidad pitagórica?"
tipo: mc
opciones_explicitas:
  - "Escribirla como sen²θ = 1 − cos²θ, para calcular sen²θ conociendo cos²θ"
  - "Eliminar el seno de la ecuación por completo"
  - "Reemplazar el seno por un número fijo, sin importar el ángulo"
respuesta: "Escribirla como sen²θ = 1 − cos²θ, para calcular sen²θ conociendo cos²θ"

explicacion: |
  Es reordenar la identidad para que quede sen²θ solo de un lado.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

variables:
  cos_cuadrado: uno_de([0.36, 0.49, 0.64])

respuesta: redondear(1 - cos_cuadrado, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ, cos²θ = {cos_cuadrado}. ¿Cuánto vale sen²θ?"

pasos:
  - "1 − {cos_cuadrado} = {redondear(1 - cos_cuadrado, 2)}"

explicacion: |
  Se despeja directo de la identidad pitagórica.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades"]

respuesta: verdadero
tipo: vf

enunciado: "sen²θ + cos²θ = 1 es consecuencia directa del teorema de Pitágoras, aplicado a un triángulo con hipotenusa 1 (el radio del círculo unitario)."

explicacion: |
  Los catetos de ese triángulo son exactamente senθ y cosθ.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "vocabulario"]

enunciado: "¿Para qué sirve resolver una ecuación trigonométrica en un fenómeno periódico real?"
tipo: mc
opciones_explicitas:
  - "Para encontrar en qué momento del ciclo se alcanza un valor determinado (por ejemplo, cuándo una onda llega a cierta altura)"
  - "Sólo sirve para resolver ejercicios sin aplicación real"
  - "Sólo aplica a triángulos rectángulos"
respuesta: "Para encontrar en qué momento del ciclo se alcanza un valor determinado (por ejemplo, cuándo una onda llega a cierta altura)"

explicacion: |
  Cualquier fenómeno oscilatorio (sonido, luz, órbitas) se puede
  preguntar "¿cuándo pasa esto?" con una ecuación trigonométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir identidades de ecuaciones trigonométricas, y saber resolver ambas?"
tipo: mc
opciones_explicitas:
  - "Las identidades simplifican expresiones sin importar el ángulo; las ecuaciones encuentran ángulos concretos que cumplen una condición"
  - "Son lo mismo, no hace falta distinguirlas en la práctica"
  - "Sólo sirven para el primer cuadrante"
respuesta: "Las identidades simplifican expresiones sin importar el ángulo; las ecuaciones encuentran ángulos concretos que cumplen una condición"

explicacion: |
  Cada una cumple un rol distinto al trabajar con trigonometría.
```

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
respuesta_orden:
  - "Dibujar todas las ramas posibles de cada paso, con su probabilidad anotada"
  - "Identificar el camino (secuencia de ramas) que lleva al resultado buscado"
  - "Multiplicar las probabilidades de todas las ramas de ese camino"

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

## Sección: inecuaciones (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "identidad", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)

respuesta: "Identidad"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}(x + {b}) = {a}x + {a * b} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Distribuyendo el lado izquierdo se obtiene exactamente el lado
  derecho — es verdadera para cualquier x, así que es una identidad.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "identidad", "opcion_multiple"]

variables:
  a: random(2, 10)
  c: random(2, 10)
  b: random(1, 20)

respuesta: "Identidad"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} + {c}x = {a + c}x + {b} es una identidad, una ecuación o una inecuación?"

explicacion: |
  El lado izquierdo, al combinar los términos con x, da exactamente el
  lado derecho — verdadera para cualquier x.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "ecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: "Ecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} = {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Tiene "=" y los dos lados no son la misma expresión — se cumple sólo
  para un valor puntual de x, así que es una ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "ecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(1, 30)

respuesta: "Ecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x − {b} = {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Tiene una única solución puntual — es una ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "inecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(21, 60)

respuesta: "Inecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x + {b} < {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Usa un símbolo de desigualdad en vez de "=" — es una inecuación, y su
  solución es un rango de valores, no uno solo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["clasificar", "inecuacion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  c: random(1, 30)

respuesta: "Inecuación"
tipo: mc
opciones_explicitas:
  - "Identidad"
  - "Ecuación"
  - "Inecuación"

enunciado: "¿{a}x − {b} > {c} es una identidad, una ecuación o una inecuación?"

explicacion: |
  Cualquier símbolo <, >, ≤ o ≥ marca una inecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) < c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} < {c}?"

explicacion: |
  Se reemplaza x por {val} y se compara: {a}×{val}+{b} = {a * val + b},
  contra {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) > c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} > {c}?"

explicacion: |
  Se reemplaza x por {val} en {a}x + {b} y se compara el resultado con
  {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) < c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} < {c}?"

explicacion: |
  Con coeficiente negativo, aumentar x hace que {a}x + {b} disminuya —
  al revés que con coeficiente positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-5, -2, -1, 1, 2, 5])
  val: sol + offset

respuesta: (a * val + b) > c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} > {c}?"

explicacion: |
  Reemplazar x por {val} y comparar {a}×{val}+{b} con {c}, con cuidado
  porque {a} es negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) <= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≤ {c}?"

explicacion: |
  Con ≤, el propio valor frontera (offset 0) también es solución — a
  diferencia de < estricto.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) >= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≥ {c}?"

explicacion: |
  Con coeficiente negativo, el conjunto solución de "≥" queda del lado
  contrario al que daría un coeficiente positivo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) >= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≥ {c}?"

explicacion: |
  Se reemplaza x por {val} y se compara con {c} usando ≥.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["verificacion", "signos", "verdadero_falso"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b
  offset: uno_de([-4, -2, 0, 1, 3])
  val: sol + offset

respuesta: (a * val + b) <= c
tipo: vf

enunciado: "¿x = {val} es solución de {a}x + {b} ≤ {c}?"

explicacion: |
  Mismo procedimiento de siempre: reemplazar y comparar, con {a}
  negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} < {c}. ¿Cuál es el valor frontera de x (el límite del conjunto solución)?"

pasos:
  - "Restar {b}: {a}x < {c - b}"
  - "Dividir por {a}: x < {(c - b) / a}"

explicacion: |
  El valor frontera se calcula igual que resolver la ecuación asociada
  {a}x + {b} = {c}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} > {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  x = ({c} − {b}) / {a}, el mismo cálculo que para "<".
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["frontera", "signos"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} < {c}. ¿Cuál es el valor frontera de x?"

pasos:
  - "Restar {b}: {a}x < {c - b}"
  - "Dividir por {a} (negativo): x = {c - b} / {a} = {(c - b) / a}"

explicacion: |
  El valor frontera se calcula igual sea {a} positivo o negativo — lo
  único que cambia con el signo es la dirección de la desigualdad, no el
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["frontera", "signos"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} > {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  x = ({c} − {b}) / {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol - b

respuesta: (c + b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x − {b} < {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  Primero se suma {b} a los dos lados, después se divide por {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["frontera"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: (c - b) / a
tipo: input
tolerancia_abs: 0

enunciado: "Resolvé: {a}x + {b} ≤ {c}. ¿Cuál es el valor frontera de x?"

explicacion: |
  El procedimiento para hallar el valor frontera no cambia entre < y ≤ —
  sólo cambia si ese valor frontera está incluido o no en la solución.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Al resolver una inecuación, si se multiplican (o dividen) los dos lados por un número negativo, la desigualdad se da vuelta."

explicacion: |
  Es la única diferencia real respecto a resolver una ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Una identidad es verdadera sólo para un valor puntual de x, igual que una ecuación."

explicacion: |
  Al revés: una identidad es verdadera para CUALQUIER valor de x. La que
  tiene un valor puntual como solución es la ecuación.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El conjunto solución de una inecuación suele ser un rango de infinitos valores, no un único número."

explicacion: |
  Por eso se escribe como "x < 3" y no como "x = 3".
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si al dividir los dos lados de una inecuación por un número negativo no se da vuelta la desigualdad, el conjunto solución puede quedar completamente al revés."

explicacion: |
  El resultado incluiría valores que no cumplen la inecuación original, y
  excluiría valores que sí la cumplen.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["conjunto_solucion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x < ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x < ", sol)
  - concatenar("x > ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} < {c}?"

explicacion: |
  Coeficiente positivo: la desigualdad no se da vuelta al despejar.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "intermedio"
  tags: ["conjunto_solucion", "opcion_multiple"]

variables:
  a: random(2, 10)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x > ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", sol)
  - concatenar("x < ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} > {c}?"

explicacion: |
  Coeficiente positivo: se despeja igual que en una ecuación, sin dar
  vuelta la desigualdad.
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["conjunto_solucion", "signos", "opcion_multiple"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x > ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x > ", sol)
  - concatenar("x < ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} < {c}? (atención al signo de {a})"

explicacion: |
  Como {a} es negativo, al dividir para despejar x la desigualdad se da
  vuelta: de "<" pasa a ">".
```

```
metadata:
  materia: "matematicas"
  tema: "inecuaciones"
  nivel: "avanzado"
  tags: ["conjunto_solucion", "signos", "opcion_multiple"]

variables:
  a: random(-10, -2)
  b: random(1, 20)
  sol: random(1, 20)
  c: a * sol + b

respuesta: concatenar("x < ", sol)
tipo: mc
opciones_explicitas:
  - concatenar("x < ", sol)
  - concatenar("x > ", sol)
  - concatenar("x = ", sol)

enunciado: "¿Cuál es el conjunto solución de {a}x + {b} > {c}? (atención al signo de {a})"

explicacion: |
  Como {a} es negativo, ">" se da vuelta a "<" al despejar x.
```

## Sección: integral (30 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(1, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "∫x^{n} dx. ¿Cuál es el exponente de x en el resultado (antes de sumar la constante C)?"

explicacion: |
  Al integrar, se le suma 1 al exponente original.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["regla_potencia"]

variables:
  n: random(1, 8)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "∫x^{n} dx. ¿Por qué número hay que dividir?"

explicacion: |
  Se divide por el nuevo exponente, n+1 = {n + 1}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  n: random(1, 5)
  m: random(1, 10)
  k: (n + 1) * m

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "∫{k}x^{n} dx. ¿Cuál es el coeficiente de x^{n + 1} en el resultado?"

pasos:
  - "El coeficiente es {k}/({n}+1) = {k}/{n + 1} = {m}"

explicacion: |
  El coeficiente original se divide por el nuevo exponente.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["regla_potencia"]

variables:
  n: random(1, 6)
  m: random(1, 8)
  k: (n + 1) * m

respuesta: m
tipo: input
tolerancia_abs: 0

enunciado: "∫{k}x^{n} dx. ¿Cuál es el coeficiente de x^{n + 1} en el resultado?"

explicacion: |
  {k}/{n + 1} = {m}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["constante"]

variables:
  k: random(1, 20)
  x: random(1, 15)

respuesta: k * x
tipo: input
tolerancia_abs: 0

enunciado: "∫{k} dx da {k}x + C. Sin la constante C, ¿cuánto vale {k}x en x={x}?"

explicacion: |
  ∫k dx = kx + C — evaluando la parte sin C en x={x}: {k}×{x} = {k * x}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 10)
  a: random(0, 5)
  b: random(6, 15)

respuesta: m * (b ^ 2 - a ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] {m}x dx. ¿Cuánto vale?"

pasos:
  - "Antiderivada: F(x) = {m}x²/2"
  - "F({b}) − F({a}) = {m}×{b ^ 2}/2 − {m}×{a ^ 2}/2 = {m * (b ^ 2 - a ^ 2) / 2}"

explicacion: |
  Es el área bajo la recta y={m}x, entre x={a} y x={b}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 8)
  a: random(1, 6)
  b: random(7, 14)

respuesta: m * (b ^ 2 - a ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] {m}x dx. ¿Cuánto vale?"

explicacion: |
  F(x) = {m}x²/2, evaluada entre {a} y {b}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["definida"]

variables:
  m: random(2, 8)
  c: random(1, 10)
  a: random(0, 4)
  b: random(5, 12)

respuesta: (m * b ^ 2 / 2 + c * b) - (m * a ^ 2 / 2 + c * a)
tipo: input
tolerancia_abs: 0

enunciado: "∫[{a},{b}] ({m}x + {c}) dx. ¿Cuánto vale?"

pasos:
  - "Antiderivada: F(x) = {m}x²/2 + {c}x"
  - "F({b}) − F({a})"

explicacion: |
  Se integra término a término, y se evalúa la diferencia F(b)−F(a).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  velocidad: random(10, 100)
  t1: random(0, 5)
  t2: random(6, 15)

respuesta: velocidad * (t2 - t1)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se mueve a velocidad constante v(t) = {velocidad} km/h. ¿Qué distancia recorre entre t={t1} y t={t2} horas (∫v dt)?"

explicacion: |
  Con velocidad constante, la integral se reduce a velocidad×tiempo —
  el área de un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  aceleracion: random(2, 10)
  t1: random(0, 3)
  t2: random(4, 10)

respuesta: aceleracion * (t2 ^ 2 - t1 ^ 2) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto acelera desde el reposo con v(t) = {aceleracion}t. ¿Qué distancia recorre entre t={t1} y t={t2} (∫v dt)?"

pasos:
  - "F(t) = {aceleracion}t²/2, evaluada entre {t1} y {t2}"

explicacion: |
  La distancia recorrida es la integral de la velocidad — el área bajo
  el gráfico de v(t).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "F es una antiderivada de f si F'(x) = f(x)."

explicacion: |
  Es la definición: la integral deshace la derivada.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una integral indefinida siempre incluye una constante +C, porque la derivada de cualquier constante es 0."

explicacion: |
  F(x)+C también es una antiderivada válida de f, para cualquier C —
  por eso ∫f(x)dx representa a TODAS las antiderivadas a la vez.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la integral indefinida, la integral definida ∫[a,b] f(x)dx es un número concreto, no una familia de funciones."

explicacion: |
  Por eso la integral definida no lleva "+C" — la constante se cancela
  al restar F(b)−F(a).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La integral definida ∫[a,b] f(x)dx representa el área entre el gráfico de f y el eje x, entre x=a y x=b."

explicacion: |
  Es la interpretación geométrica central de la integral definida.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["error_comun", "opcion_multiple"]

variables:
  n: random(2, 8)

respuesta: n + 1
tipo: mc
opciones_explicitas:
  - n + 1
  - n - 1
  - n

enunciado: "∫x^{n} dx. ¿Cuál es el exponente correcto del resultado?"

explicacion: |
  Al integrar se SUMA 1 al exponente (n−1 sería el error de confundirlo
  con derivar).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "∫3x² dx = x³ es una respuesta completa y correcta."

explicacion: |
  Falta el "+C" — sin la constante, la respuesta está incompleta (no es
  TODA antiderivada posible, sólo una).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 6)
  m: random(1, 8)
  k: (n + 1) * m

respuesta: ((m * (n + 1)) == k)
tipo: vf

enunciado: "Se propone que ∫{k}x^{n} dx = {m}x^{n + 1} + C. Derivando {m}x^{n + 1}, ¿se recupera {k}x^{n}?"

pasos:
  - "Derivando {m}x^{n + 1}: {m}×({n + 1})x^{n} = {m * (n + 1)}x^{n}"

explicacion: |
  Derivar el resultado de una integral tiene que devolver la función
  original — es la forma de verificar.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  m: random(2, 10)
  a: random(0, 5)
  b: random(6, 15)
  real: m * (b ^ 2 - a ^ 2) / 2
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "∫[{a},{b}] {m}x dx. ¿Es correcto que el resultado sea {propuesto}?"

explicacion: |
  El valor correcto es {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "En ∫[a,b] f(x)dx = F(b)−F(a), da lo mismo calcular F(a)−F(b) en vez de F(b)−F(a)."

explicacion: |
  Invertir el orden cambia el signo del resultado — no da lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La integral de una suma de funciones es la suma de las integrales de cada una, por separado."

explicacion: |
  Mismo criterio que al derivar: se integra término a término.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La regla ∫xⁿdx = x^(n+1)/(n+1)+C no se puede aplicar cuando n=−1 (dividiría por 0)."

explicacion: |
  Ese caso especial (∫x⁻¹dx = ∫(1/x)dx) da ln|x|+C — fuera del alcance
  de este módulo, pero vale la pena saber que existe la excepción.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Integrar y derivar son operaciones inversas una de la otra, como sumar y restar."

explicacion: |
  Derivar la integral de f devuelve f; integrar la derivada de f
  devuelve f (más una constante).
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["definida"]

variables:
  m: random(2, 12)
  b: random(3, 20)

respuesta: m * b ^ 2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "∫[0,{b}] {m}x dx. ¿Cuánto vale?"

pasos:
  - "F({b}) − F(0) = {m}×{b ^ 2}/2 − 0 = {m * b ^ 2 / 2}"

explicacion: |
  Con el límite inferior en 0, F(0)=0 siempre, así que sólo hace falta
  evaluar F en el límite superior.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una integral definida puede dar 0, si a=b (los dos límites son el mismo valor)."

explicacion: |
  F(a)−F(a) = 0 siempre — no hay ningún área entre un punto y sí mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["regla_potencia"]

variables:
  n1: 1
  m1: random(1, 8)
  k1: (n1 + 1) * m1
  k2: random(1, 20)

respuesta: m1
tipo: input
tolerancia_abs: 0

enunciado: "∫({k1}x + {k2}) dx. ¿Cuál es el coeficiente de x² en el resultado?"

pasos:
  - "∫{k1}x dx = {k1}x²/2 = {m1}x²"
  - "∫{k2} dx = {k2}x"

explicacion: |
  Se integra cada término por separado, con la regla de la potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["regla_potencia"]

variables:
  n1: 1
  m1: random(1, 8)
  k1: (n1 + 1) * m1
  k2: random(1, 20)

respuesta: k2
tipo: input
tolerancia_abs: 0

enunciado: "∫({k1}x + {k2}) dx = {m1}x² + (algo)x + C. ¿Cuál es el coeficiente de ese término lineal?"

explicacion: |
  ∫{k2} dx = {k2}x — el coeficiente no cambia al integrar una constante.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si una función toma valores negativos en parte del intervalo, la integral definida resta esa área (en vez de sumarla) para esa parte."

explicacion: |
  La integral definida da el área "con signo" — regiones bajo el eje x
  cuentan negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  aceleracion: random(2, 8)
  t_final: random(2, 12)

respuesta: aceleracion * t_final ^ 2 / 2
tipo: input
tolerancia_abs: 0

enunciado: "v(t) = {aceleracion}t (velocidad, partiendo del reposo). ¿Qué distancia total recorre entre t=0 y t={t_final}?"

explicacion: |
  ∫[0,{t_final}] {aceleracion}t dt = {aceleracion}×{t_final}²/2.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) = {a}x² + {b}x, y se deriva para obtener f'(x), integrar f'(x) devuelve {a}x² + {b}x + C (la función original, salvo la constante)."

explicacion: |
  Integrar y derivar se cancelan entre sí, módulo la constante de
  integración que se pierde al derivar.
```

```
metadata:
  materia: "matematicas"
  tema: "integral"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  n: random(1, 5)
  m: random(1, 8)
  k: (n + 1) * m
  error: uno_de([0, 0, 1, -1])
  propuesto: m + error

respuesta: (propuesto == m)
tipo: vf

enunciado: "∫{k}x^{n} dx. ¿Es correcto que el coeficiente de x^{n + 1} en el resultado sea {propuesto}?"

explicacion: |
  El coeficiente correcto es {k}/{n + 1} = {m}.
```

## Sección: integral-definida-y-area-bajo-la-curva (22 preguntas)

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "el área entre la curva y el eje horizontal en un intervalo [a, b]"
tipo: mc
opciones_explicitas: ["el área entre la curva y el eje horizontal en un intervalo [a, b]", "la pendiente de la recta tangente en un punto", "el valor máximo que alcanza la función"]

enunciado: "La integral definida de f(x) entre a y b representa..."

explicacion: |
  Es la cantidad de espacio entre la curva de f(x) y el eje horizontal,
  dentro de ese intervalo específico.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["area neta"]

variables:
  n: uno_de([1, 1])

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "siempre cero"]

enunciado: "Si la curva de f(x) está por debajo del eje x en el intervalo considerado, el área correspondiente se considera..."

explicacion: |
  La integral definida calcula el área neta, no el área total absoluta:
  por eso puede dar valores negativos.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["teorema fundamental"]

variables:
  n: uno_de([1, 1])

respuesta: "Teorema Fundamental del Cálculo"
tipo: completar

enunciado: "El teorema que permite calcular una integral definida usando una primitiva F(x), en vez de sumar rectángulos infinitos, se llama ___."

respuestas_validas:
  - "Teorema Fundamental del Cálculo"

explicacion: |
  Establece una relación directa entre la derivada y la integral,
  simplificando enormemente el cálculo del área.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["formula tfc"]

variables:
  n: uno_de([1, 1])

respuesta: "F(b) - F(a)"
tipo: mc
opciones_explicitas: ["F(b) - F(a)", "F(b) + F(a)", "F(a) - F(b)"]

enunciado: "Según el Teorema Fundamental del Cálculo, ∫ f(x) dx entre a y b es igual a:"

explicacion: |
  Se evalúa la primitiva en el límite superior y se le resta el valor
  evaluado en el límite inferior.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["primitiva"]

variables:
  n: random(2, 8)

respuesta: n / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "La primitiva de f(x) = {n}·x es F(x) = k·x². ¿Cuánto vale k?"

explicacion: |
  La primitiva de k'·x es (k'/2)·x², así que si f(x)={n}·x, el
  coeficiente de x² en la primitiva es {n}/2.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  b: random(2, 8)

respuesta: b * b
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo la curva de f(x) = 2x entre x=0 y x={b}, usando F(x) = x². (F({b}) - F(0))"

explicacion: |
  F(x) = x² es la primitiva de 2x. El área es F(b) - F(0) = b² - 0 = b².
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  k: random(1, 5)
  b: random(2, 6)

respuesta: k * b
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo la curva de f(x) = {k} (función constante) entre x=0 y x={b}, usando F(x) = {k}·x."

explicacion: |
  Para una función constante, el área bajo la curva es un rectángulo:
  base × altura = {b} × {k}.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["simbolo integral"]

variables:
  n: uno_de([1, 1])

respuesta: "una S alargada que recuerda a suma"
tipo: mc
opciones_explicitas: ["una S alargada que recuerda a suma", "una letra griega sin significado especial", "el símbolo de infinito"]

enunciado: "El símbolo ∫ de la integral es..."

explicacion: |
  Representa la idea de "sumar" infinitas cantidades infinitesimales, de
  ahí la forma de S alargada.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["existencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si f(x) es continua en el intervalo [a, b], la integral definida siempre existe y es única."

explicacion: |
  La continuidad de la función en el intervalo garantiza que el área
  bajo la curva esté bien definida.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["aplicaciones"]

variables:
  campo: uno_de(["física", "economía", "ingeniería"])

respuesta: verdadero
tipo: vf

enunciado: "La integral definida tiene aplicaciones reales en {campo}, según la teoría."

explicacion: |
  Se usa para calcular distancia recorrida (física), excedente del
  consumidor (economía) o volúmenes de objetos (ingeniería).
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["discreto vs continuo"]

variables:
  n: uno_de([1, 1])

respuesta: "de lo discreto a lo continuo"
tipo: mc
opciones_explicitas: ["de lo discreto a lo continuo", "de lo continuo a lo discreto", "no hay ninguna diferencia entre ambos"]

enunciado: "La importancia de la integral definida radica en su capacidad de pasar..."

explicacion: |
  Mientras la suma simple junta cantidades finitas, la integral suma
  infinitas cantidades infinitesimales.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["pasos del calculo"]

variables:
  n: uno_de([1, 1])

respuesta: "encontrar la primitiva, evaluarla en b, evaluarla en a y restar"
tipo: mc
opciones_explicitas: ["encontrar la primitiva, evaluarla en b, evaluarla en a y restar", "derivar la función dos veces", "graficar la función sin ningún cálculo"]

enunciado: "Según el Teorema Fundamental del Cálculo, el proceso para calcular una integral definida consiste en..."

explicacion: |
  Son los tres pasos que transforman un problema geométrico complejo en
  álgebra simple.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["verificacion geometrica"]

variables:
  b: random(3, 9)

respuesta: b * b
tipo: input
tolerancia_abs: 0

enunciado: "Verificá con geometría básica: el área bajo f(x)=2x entre 0 y {b} es un triángulo de base {b} y altura {2*b}... espera, calculalo directo: (base × altura) / 2 = ({b} × 2·{b}) / 2. ¿Cuánto da?"

explicacion: |
  (b × 2b) / 2 = b², el mismo resultado que da la integral, confirmando
  que ambos métodos coinciden.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["dx"]

variables:
  n: uno_de([1, 1])

respuesta: "un segmento horizontal de ancho infinitesimal"
tipo: mc
opciones_explicitas: ["un segmento horizontal de ancho infinitesimal", "el valor máximo de la función", "la derivada de la función"]

enunciado: "En la notación ∫f(x) dx, el símbolo dx indica que se está sumando..."

explicacion: |
  Cada dx representa un segmento horizontal muy chico que, sumado a
  infinitos otros, da el área total.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["primitiva de potencia"]

variables:
  n: random(1, 6)

respuesta: n + 1
tipo: input
tolerancia_abs: 0

enunciado: "La primitiva de x^{n} tiene exponente (antes de dividir por el nuevo exponente):"

explicacion: |
  Al integrar x^n, el exponente sube en 1 (regla inversa a la
  derivación).
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["relacion con derivada"]

variables:
  n: uno_de([1, 1])

respuesta: "una función cuya derivada es f(x)"
tipo: mc
opciones_explicitas: ["una función cuya derivada es f(x)", "una función cuyo valor máximo es f(x)", "la inversa de f(x)"]

enunciado: "Una función primitiva F(x) de f(x) es..."

explicacion: |
  Por eso el Teorema Fundamental del Cálculo conecta directamente
  derivación e integración: son procesos inversos.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["areas irregulares"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La integral definida permite medir áreas irregulares que la geometría básica (cuadrados, triángulos) no puede resolver por sí sola."

explicacion: |
  Es justamente su utilidad principal: calcular áreas bajo curvas
  complejas, no sólo figuras geométricas simples.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  b: random(1, 7)

respuesta: b * b * b
tipo: input
tolerancia_abs: 0

enunciado: "Si F(x) = x³ es la primitiva de f(x) = 3x², calculá F({b}) - F(0), el área bajo f(x) entre 0 y {b}."

explicacion: |
  F(b) - F(0) = b³ - 0 = b³, aplicando directamente el Teorema
  Fundamental del Cálculo.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "basico"
  tags: ["limites de integracion"]

variables:
  n: uno_de([1, 1])

respuesta: "los valores inicial y final del intervalo"
tipo: mc
opciones_explicitas: ["los valores inicial y final del intervalo", "el valor máximo y mínimo de la función", "las raíces de la función"]

enunciado: "En ∫_a^b f(x) dx, los valores a y b representan..."

explicacion: |
  Son los límites del intervalo dentro del cual se calcula el área bajo
  la curva.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "avanzado"
  tags: ["metodo alternativo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Calcular el área sumando rectángulos infinitos es el método práctico habitual para resolver integrales definidas en un examen."

explicacion: |
  Sería imposible en la práctica; por eso se usa el Teorema Fundamental
  del Cálculo, que evita esa suma infinita directa.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["aplicacion fisica"]

variables:
  n: uno_de([1, 1])

respuesta: "distancias recorridas cuando la velocidad cambia"
tipo: mc
opciones_explicitas: ["distancias recorridas cuando la velocidad cambia", "la masa de un objeto en reposo", "el color de la luz emitida"]

enunciado: "En física, la integral definida se usa para calcular, entre otras cosas..."

explicacion: |
  Si la velocidad varía con el tiempo, integrarla da la distancia total
  recorrida.
```

```
metadata:
  materia: "matematica"
  tema: "integral_definida_y_area_bajo_la_curva"
  nivel: "intermedio"
  tags: ["calculo directo"]

variables:
  a: random(1, 4)
  b: random(5, 9)

respuesta: b*b - a*a
tipo: input
tolerancia_abs: 0

enunciado: "Calculá el área bajo f(x) = 2x entre x={a} y x={b}, usando F(x) = x² (F({b}) - F({a}))."

explicacion: |
  F(b) - F(a) = b² - a², aplicando el Teorema Fundamental del Cálculo
  con límites distintos de cero.
```
