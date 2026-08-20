# Examen jefe — Maestro de Probabilidades y Proporciones

> Logro #75. Completaste el examen dominando la probabilidad condicional, simple, el producto escalar y las funciones de proporcionalidad. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **121 preguntas totales** en 5/5 secciones.

---

## Sección: probabilidad-condicional (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "vocabulario"]

enunciado: "¿Qué es P(A|B), la probabilidad condicional de A dado B?"
tipo: mc
opciones_explicitas:
  - "La probabilidad de que ocurra A, ya sabiendo que B ocurrió"
  - "La probabilidad de que ocurran A y B al mismo tiempo"
  - "La probabilidad de que no ocurra ni A ni B"
respuesta: "La probabilidad de que ocurra A, ya sabiendo que B ocurrió"

explicacion: |
  Saber que B pasó cambia el universo de posibilidades sobre el que
  se calcula la probabilidad de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional", "completar"]

tipo: completar
enunciado: "Completá: P(A|B) = P(A y B) / ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Siempre con P(B) > 0.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: uno_de([0.1, 0.15, 0.2])
  p_b: uno_de([0.3, 0.4, 0.5])

respuesta: redondear(p_a_y_b / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(A y B) = {p_a_y_b} y P(B) = {p_b}. ¿Cuál es P(A|B)?"

pasos:
  - "P(A|B) = {p_a_y_b} / {p_b} = {redondear(p_a_y_b / p_b, 3)}"

explicacion: |
  Se divide la probabilidad conjunta por la probabilidad del evento
  que ya se sabe que ocurrió.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si A y B son eventos independientes, entonces P(A|B) = P(A) — saber que B ocurrió no cambia en nada la probabilidad de A."

explicacion: |
  Es la definición formal de independencia en términos de
  probabilidad condicional.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a: 0.3
  p_a_dado_b: uno_de([0.3, 0.5])

respuesta: p_a_dado_b == p_a
tipo: vf

enunciado: "P(A) = {p_a} y P(A|B) = {p_a_dado_b}. ¿Son A y B eventos independientes?"

explicacion: |
  Son independientes sólo si P(A|B) es exactamente igual a P(A) — si
  cambia, B sí aporta información sobre A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

respuesta: redondear(3 / 39, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De un mazo de 40 cartas (4 ases), se saca una carta y sale as (no se devuelve). ¿Cuál es la probabilidad de que la SEGUNDA carta también sea as, dado que la primera lo fue?"

pasos:
  - "Quedan 39 cartas, de las cuales 3 son ases (ya salió uno)."
  - "P(as en 2ª | as en 1ª) = 3/39 = {redondear(3 / 39, 3)}"

explicacion: |
  Es exactamente el caso 'sin reposición' de
  `../independencia-de-eventos-y-diagrama-de-arbol/`, formalizado como
  probabilidad condicional.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "vocabulario"]

enunciado: "¿Cómo se lee la notación P(A|B)?"
tipo: mc
opciones_explicitas:
  - "Probabilidad de A dado B"
  - "Probabilidad de A dividido B"
  - "Probabilidad de A o B"
respuesta: "Probabilidad de A dado B"

explicacion: |
  La barra vertical se lee "dado".
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  estudio_aprobo: 40
  no_estudio_aprobo: 15
  total_aprobo: estudio_aprobo + no_estudio_aprobo

respuesta: redondear(estudio_aprobo / total_aprobo, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De 100 estudiantes: {estudio_aprobo} estudiaron y aprobaron, {no_estudio_aprobo} no estudiaron pero igual aprobaron. Entre los que aprobaron en total, ¿cuál es la probabilidad de que ese estudiante haya estudiado (P(estudió | aprobó))?"

pasos:
  - "Total de aprobados = {estudio_aprobo} + {no_estudio_aprobo} = {total_aprobo}"
  - "P(estudió | aprobó) = {estudio_aprobo}/{total_aprobo} = {redondear(estudio_aprobo / total_aprobo, 3)}"

explicacion: |
  Se restringe el universo a la columna 'aprobó' antes de calcular la
  proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["condicional", "aplicacion"]

enunciado: "'¿Cuál es la probabilidad de tener una enfermedad, dado que el test dio positivo?' es una pregunta de qué tipo de probabilidad?"
tipo: mc
opciones_explicitas:
  - "Probabilidad condicional: P(enfermedad | test positivo)"
  - "Probabilidad simple, sin ninguna condición"
  - "Probabilidad compuesta del tipo 'Y', sin condicionar nada"
respuesta: "Probabilidad condicional: P(enfermedad | test positivo)"

explicacion: |
  Es el ejemplo central de `../teorema-de-bayes/`, el módulo que
  sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "En general, P(A|B) no es lo mismo que P(B|A) — invertir el orden de la condición puede cambiar el resultado."

explicacion: |
  Es exactamente el punto de partida del teorema de Bayes: cómo pasar
  de un condicional al otro.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: uno_de([0.06, 0.09, 0.12])
  p_b: uno_de([0.2, 0.3])

respuesta: redondear(p_a_y_b / p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "En una fábrica, P(defecto Y turno noche) = {p_a_y_b} y P(turno noche) = {p_b}. ¿Cuál es la probabilidad de defecto, dado que la pieza se hizo en el turno noche?"

pasos:
  - "P(defecto | turno noche) = {p_a_y_b} / {p_b} = {redondear(p_a_y_b / p_b, 3)}"

explicacion: |
  Aplicación directa de la fórmula a control de calidad.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional", "arbol"]

enunciado: "En un diagrama de árbol SIN reposición, ¿qué representan las probabilidades de las ramas del segundo paso?"
tipo: mc
opciones_explicitas:
  - "Probabilidades condicionales: la probabilidad de cada resultado del segundo paso, dado lo que ya ocurrió en el primero"
  - "Siempre son idénticas a las probabilidades del primer paso"
  - "No tienen relación con lo que pasó en el primer paso"
respuesta: "Probabilidades condicionales: la probabilidad de cada resultado del segundo paso, dado lo que ya ocurrió en el primero"

explicacion: |
  Por eso cambian de una rama a otra en el caso sin reposición.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  estudio_no_aprobo: 10
  estudio_aprobo: 40
  total_estudio: estudio_aprobo + estudio_no_aprobo

respuesta: redondear(estudio_aprobo / total_estudio, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "De los estudiantes que SÍ estudiaron: {estudio_aprobo} aprobaron y {estudio_no_aprobo} no aprobaron. ¿Cuál es P(aprobó | estudió)?"

pasos:
  - "Total que estudió = {estudio_aprobo} + {estudio_no_aprobo} = {total_estudio}"
  - "P(aprobó | estudió) = {estudio_aprobo}/{total_estudio} = {redondear(estudio_aprobo / total_estudio, 3)}"

explicacion: |
  Notar que este resultado es distinto del de P(estudió | aprobó) del
  problema anterior — confirma que invertir la condición cambia el
  resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Calcular una probabilidad condicional P(A|B) equivale a restringir el espacio muestral sólo a los casos donde B ya ocurrió, y calcular ahí la proporción de A."

explicacion: |
  Es la misma idea de la tabla de contingencia: mirar sólo la
  fila/columna donde se cumple la condición.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "completar"]

tipo: completar
enunciado: "Despejando la fórmula de probabilidad condicional: P(A y B) = P(A|B) × ___."
respuestas_validas:
  - "P(B)"

explicacion: |
  Es la misma fórmula de `../probabilidad-compuesta/`, ahora expresada
  con probabilidad condicional en vez de asumir independencia directo.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_b: uno_de([0.4, 0.6])
  p_a_dado_b: uno_de([0.5, 0.7])

respuesta: redondear(p_a_dado_b * p_b, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "P(B) = {p_b} y P(A|B) = {p_a_dado_b}. ¿Cuál es P(A y B)?"

pasos:
  - "P(A y B) = P(A|B) × P(B) = {p_a_dado_b} × {p_b} = {redondear(p_a_dado_b * p_b, 3)}"

explicacion: |
  Es la fórmula de probabilidad condicional despejada para la
  probabilidad conjunta.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional", "problema"]

variables:
  p_a_y_b: 0.15
  p_b: 0.3
  p_a: 0.4

respuesta: (p_a_y_b / p_b) > p_a
tipo: vf

enunciado: "P(A y B) = {p_a_y_b}, P(B) = {p_b}, P(A) = {p_a}. ¿Es P(A|B) MAYOR que P(A) (es decir, saber que ocurrió B hace más probable a A)?"

explicacion: |
  P(A|B) = {p_a_y_b}/{p_b} = 0,5, que es mayor que P(A) = {p_a} — B
  está asociado con una mayor probabilidad de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "avanzado"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Si P(A|B) es mayor que P(A), entonces saber que B ocurrió aumenta la probabilidad de A (hay una asociación positiva entre ambos eventos)."

explicacion: |
  Si en cambio P(A|B) fuera menor que P(A), B estaría asociado con
  una probabilidad MENOR de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "intermedio"
  tags: ["condicional"]

respuesta: verdadero
tipo: vf

enunciado: "Si B implica necesariamente A (siempre que ocurre B, también ocurre A), entonces P(A|B) = 1."

explicacion: |
  El espacio muestral restringido a B queda completamente contenido
  dentro de A.
```

```
metadata:
  materia: "matematicas"
  tema: "probabilidad_condicional"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la probabilidad condicional?"
tipo: mc
opciones_explicitas:
  - "Para recalcular una probabilidad cuando aparece información nueva (que otro evento ya ocurrió), achicando el universo de posibilidades"
  - "Sólo sirve para calcular probabilidades de eventos independientes"
  - "Es sólo otro nombre para la probabilidad simple"
respuesta: "Para recalcular una probabilidad cuando aparece información nueva (que otro evento ya ocurrió), achicando el universo de posibilidades"

explicacion: |
  Es el prerrequisito directo de `../teorema-de-bayes/`, que invierte
  esta misma fórmula.
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
respuesta_orden:
  - "Contar cuántos casos totales hay en el espacio muestral"
  - "Contar cuántos de esos casos son favorables al evento"
  - "El cociente entre ambos es la probabilidad del evento"

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

## Sección: producto-escalar (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "¿Qué es el producto escalar entre dos vectores?"
tipo: mc
opciones_explicitas:
  - "Una operación entre dos vectores que da como resultado un número (no otro vector)"
  - "Una operación que siempre da como resultado otro vector"
  - "Otro nombre para el módulo de un vector"
respuesta: "Una operación entre dos vectores que da como resultado un número (no otro vector)"

explicacion: |
  De ahí el nombre "escalar": el resultado es un número suelto.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "completar"]

tipo: completar
enunciado: "Completá: v · w = (vₓ × wₓ) + ___."
respuestas_validas:
  - "(v_y × w_y)"
  - "v_y × w_y"
  - "vy × wy"

explicacion: |
  Se multiplican las componentes correspondientes y se suman.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "problema"]

variables:
  vx: random(1, 8)
  vy: random(1, 8)
  wx: random(1, 8)
  wy: random(1, 8)

respuesta: (vx * wx) + (vy * wy)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el producto escalar entre los vectores ({vx}, {vy}) y ({wx}, {wy})?"

pasos:
  - "({vx} × {wx}) + ({vy} × {wy}) = {vx * wx} + {vy * wy} = {(vx * wx) + (vy * wy)}"

explicacion: |
  Se multiplican las componentes x entre sí, las componentes y entre
  sí, y se suman ambos resultados.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  vx: random(2, 10)
  vy: random(2, 10)
  wx: 0 - random(1, 5)
  wy: random(1, 5)

respuesta: (vx * wx) + (vy * wy)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el producto escalar entre los vectores ({vx}, {vy}) y ({wx}, {wy})?"

pasos:
  - "({vx} × ({wx})) + ({vy} × {wy}) = {(vx * wx) + (vy * wy)}"

explicacion: |
  El signo de cada componente se respeta en la multiplicación.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El resultado de un producto escalar es siempre un número (un escalar), nunca otro vector."

explicacion: |
  Es lo que distingue al producto escalar de la suma de vectores, que
  sí da otro vector.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "¿Cuál es la fórmula del producto escalar en términos de los módulos y el ángulo entre los vectores?"
tipo: mc
opciones_explicitas:
  - "v · w = |v| × |w| × cos(θ)"
  - "v · w = |v| + |w| + θ"
  - "v · w = |v| × |w| × sen(θ)"
respuesta: "v · w = |v| × |w| × cos(θ)"

explicacion: |
  Da exactamente el mismo resultado que la fórmula por componentes.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "perpendicularidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto escalar de dos vectores (ninguno nulo) da 0, esos dos vectores son perpendiculares entre sí."

explicacion: |
  Porque cos(90°) = 0: es la única forma de que el producto dé 0 sin que
  ninguno de los vectores sea nulo.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "¿Son perpendiculares los vectores ({a}, {b}) y (-{b}, {a})?"

explicacion: |
  Producto escalar: ({a})×(-{b}) + ({b})×({a}) = -{a * b} + {a * b} = 0:
  son perpendiculares.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)

respuesta: falso
tipo: vf

enunciado: "¿Son perpendiculares los vectores ({a}, {b}) y ({a}, {b})?"

explicacion: |
  Un vector nunca es perpendicular a sí mismo: su producto escalar
  consigo mismo da {(a * a) + (b * b)}, que no es 0 (salvo el vector
  nulo).
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si el ángulo entre dos vectores es agudo (menor a 90°), ¿qué signo tiene su producto escalar?"
tipo: mc
opciones_explicitas:
  - "Positivo"
  - "Negativo"
  - "Siempre cero"
respuesta: "Positivo"

explicacion: |
  cos(θ) es positivo para ángulos entre 0° y 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si el ángulo entre dos vectores es obtuso (mayor a 90°), ¿qué signo tiene su producto escalar?"
tipo: mc
opciones_explicitas:
  - "Negativo"
  - "Positivo"
  - "Siempre cero"
respuesta: "Negativo"

explicacion: |
  cos(θ) es negativo para ángulos entre 90° y 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si el ángulo entre dos vectores es exactamente 90°, ¿cuánto vale su producto escalar?"
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Depende siempre de los módulos"
respuesta: "0"

explicacion: |
  cos(90°) = 0, así que el producto entero se anula, sin importar los
  módulos.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El producto escalar es conmutativo: v · w da exactamente el mismo resultado que w · v."

explicacion: |
  El orden de los factores no altera el producto, igual que con la
  multiplicación de números.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "problema"]

variables:
  vx: random(2, 9)
  vy: random(2, 9)
  wx: random(2, 9)
  wy: random(2, 9)

respuesta: (wx * vx) + (wy * vy)
tipo: input
tolerancia_abs: 0

enunciado: "Si v · w = ({vx} × {wx}) + ({vy} × {wy}) = {(vx * wx) + (vy * wy)}, ¿cuánto vale w · v?"

explicacion: |
  Exactamente lo mismo: {(vx * wx) + (vy * wy)}, por la propiedad
  conmutativa.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  fuerza: uno_de([10, 20, 40])
  distancia: uno_de([5, 10])
  cos_60: 0.5

respuesta: fuerza * distancia * cos_60
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza de {fuerza} N actúa sobre un objeto que se desplaza {distancia} m, con un ángulo de 60° entre la fuerza y el desplazamiento (cos 60° = 0,5). ¿Cuál es el trabajo realizado (W = F × d × cos θ)?"

pasos:
  - "{fuerza} × {distancia} × 0,5 = {fuerza * distancia * cos_60}"

explicacion: |
  El trabajo de una fuerza es, en el fondo, un producto escalar entre el
  vector fuerza y el vector desplazamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar", "ordenar"]

enunciado: "Ordená los pasos para calcular el producto escalar de dos vectores, conociendo sus componentes."
tipo: ordenar
opciones_explicitas:
  - "Sumar ambos resultados"
  - "Multiplicar las dos componentes x entre sí"
  - "Multiplicar las dos componentes y entre sí"
respuesta_orden:
  - "Multiplicar las dos componentes x entre sí"
  - "Multiplicar las dos componentes y entre sí"
  - "Sumar ambos resultados"

explicacion: |
  v · w = (vₓ×wₓ) + (v_y×w_y).
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "¿Qué relación tiene el criterio 'producto escalar = 0' con el criterio de pendientes m₁×m₂=-1 de `../rectas-paralelas-y-perpendiculares/`?"
tipo: mc
opciones_explicitas:
  - "Son dos formas distintas de expresar la misma idea: perpendicularidad, una con vectores y otra con pendientes"
  - "No tienen ninguna relación entre sí"
  - "El producto escalar reemplaza por completo al criterio de pendientes"
respuesta: "Son dos formas distintas de expresar la misma idea: perpendicularidad, una con vectores y otra con pendientes"

explicacion: |
  Ambos son formas de detectar un ángulo de 90° sin medirlo directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(3, 12)
  b: random(3, 12)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el producto escalar entre los vectores ({a}, {b}) y (-{b}, {a})?"

pasos:
  - "({a})×(-{b}) + ({b})×({a}) = -{a * b} + {a * b} = 0"

explicacion: |
  Este par de vectores es perpendicular por construcción: intercambiar
  las componentes y cambiar un signo siempre da un vector perpendicular
  al original.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El producto escalar de un vector consigo mismo (v · v) es igual al cuadrado de su propio módulo."

explicacion: |
  v · v = vₓ² + v_y², que es exactamente lo que hay dentro de la raíz de
  la fórmula del módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  k: random(1, 6)
  x: 3 * k
  y: 4 * k

respuesta: (5 * k) * (5 * k)
tipo: input
tolerancia_abs: 0

enunciado: "Un vector tiene componentes ({x}, {y}) y módulo {5 * k}. ¿Cuánto vale v · v?"

pasos:
  - "{x}² + {y}² = {(x * x) + (y * y)}"
  - "({5 * k})² = {(5 * k) * (5 * k)}"

explicacion: |
  Ambos cálculos dan el mismo resultado: v · v = |v|².
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "vocabulario"]

enunciado: "Si una fuerza actúa exactamente perpendicular a la dirección del desplazamiento de un objeto, ¿cuánto trabajo realiza esa fuerza?"
tipo: mc
opciones_explicitas:
  - "Cero, sin importar cuán grande sea la fuerza"
  - "El máximo posible"
  - "Depende únicamente de la magnitud de la fuerza"
respuesta: "Cero, sin importar cuán grande sea la fuerza"

explicacion: |
  W = F×d×cos(90°) = F×d×0 = 0: es la aplicación física directa de la
  perpendicularidad en el producto escalar.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "avanzado"
  tags: ["producto_escalar", "problema"]

variables:
  a: random(5, 15)
  b: random(1, 4)

respuesta: falso
tipo: vf

enunciado: "Los vectores ({a}, 0) y (-{b}, 0) tienen producto escalar {0 - (a * b)}. ¿Forman un ángulo agudo entre sí?"

explicacion: |
  El producto escalar es negativo: el ángulo entre ellos es obtuso (de
  hecho, son opuestos, apuntan en sentidos contrarios sobre el mismo
  eje).
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto escalar de dos vectores da un número positivo, el ángulo entre ellos es agudo (menor a 90°)."

explicacion: |
  Es la relación directa entre el signo del producto y el tipo de
  ángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "intermedio"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "Si el producto escalar de dos vectores da un número negativo, el ángulo entre ellos es obtuso (mayor a 90°)."

explicacion: |
  Es la relación directa entre el signo del producto y el tipo de
  ángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["producto_escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El producto escalar entre dos vectores es una operación distinta de la suma de vectores: la suma da otro vector, el producto escalar da un número."

explicacion: |
  Son dos operaciones distintas entre los mismos dos objetos.
```

```
metadata:
  materia: "matematicas"
  tema: "producto_escalar"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el producto escalar entre vectores?"
tipo: mc
opciones_explicitas:
  - "Para detectar perpendicularidad, medir el ángulo entre vectores, y calcular magnitudes físicas como el trabajo de una fuerza"
  - "Sólo sirve para sumar vectores más rápido"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para detectar perpendicularidad, medir el ángulo entre vectores, y calcular magnitudes físicas como el trabajo de una fuerza"

explicacion: |
  Es la última pieza de este bloque de vectores antes de cruzar a
  Física.
```

## Sección: proporcion (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Qué es una proporción?"
tipo: mc
opciones_explicitas:
  - "La igualdad entre dos razones"
  - "La suma de dos razones"
  - "Cualquier fracción"
respuesta: "La igualdad entre dos razones"

explicacion: |
  Una proporción dice que dos razones representan la misma relación:
  a/b = c/d.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c: a * k
  d: b * k

respuesta: (a * d == b * c)
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

pasos:
  - "Producto de extremos: {a} × {d} = {a * d}. Producto de medios: {b} × {c} = {b * c}."

explicacion: |
  Es proporción si el producto de los extremos (a×d) es igual al producto
  de los medios (b×c).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  c: random(1, 9)
  d: random(2, 9)

restricciones:
  - (a * d) != (b * c)

respuesta: falso
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

explicacion: |
  El producto de extremos no coincide con el de medios: no es una
  proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)
  x: (b * c) / a

restricciones:
  - (b * c) - floor((b * c) / a) * a == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/{b} = {c}/x, ¿cuánto vale x?"

pasos:
  - "{a} × x = {b} × {c} → x = ({b} × {c}) ÷ {a} = {b * c} ÷ {a} = {x}"

explicacion: |
  Se aplica la propiedad fundamental y se despeja x.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  c: random(2, 9)
  d: random(2, 9)
  x: (a * d) / c

restricciones:
  - (a * d) - floor((a * d) / c) * c == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/x = {c}/{d}, ¿cuánto vale x?"

pasos:
  - "{a} × {d} = x × {c} → x = ({a} × {d}) ÷ {c} = {a * d} ÷ {c} = {x}"

explicacion: |
  Se despeja x aplicando la propiedad fundamental de la proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  b: random(2, 9)
  c: random(2, 9)
  d: random(2, 9)
  x: (b * c) / d

restricciones:
  - (b * c) - floor((b * c) / d) * d == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción x/{b} = {c}/{d}, ¿cuánto vale x?"

pasos:
  - "x × {d} = {b} × {c} → x = ({b} × {c}) ÷ {d} = {b * c} ÷ {d} = {x}"

explicacion: |
  Igual que antes, se aplica el producto de extremos igual al producto de
  medios.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  d: random(2, 9)
  x: (a * d) / b

restricciones:
  - (a * d) - floor((a * d) / b) * b == 0

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "En la proporción {a}/{b} = x/{d}, ¿cuánto vale x?"

pasos:
  - "{a} × {d} = {b} × x → x = ({a} × {d}) ÷ {b} = {a * d} ÷ {b} = {x}"

explicacion: |
  Se despeja x de la misma manera, cambiando en qué lugar de la
  proporción está.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(2, 8)
  b: random(2, 8)
  c: random(2, 8)
  correcto: (b * c) / a

restricciones:
  - (b * c) - floor((b * c) / a) * a == 0

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b * c
  - correcto + 1

enunciado: "En la proporción {a}/{b} = {c}/x, ¿cuánto vale x?"

explicacion: |
  Las otras opciones no cumplen la propiedad fundamental (producto de
  extremos = producto de medios).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "problema"]

variables:
  personas_original: random(2, 6)
  harina_original: random(1, 5)
  personas_nueva: personas_original * random(2, 4)

respuesta: harina_original * (personas_nueva / personas_original)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una receta para {personas_original} personas usa {harina_original} tazas de harina. Manteniendo la misma proporción, ¿cuántas tazas hacen falta para {personas_nueva} personas?"

pasos:
  - "{harina_original}/{personas_original} = x/{personas_nueva} → x = ({harina_original} × {personas_nueva}) ÷ {personas_original}"

explicacion: |
  Escalar una receta manteniendo el sabor es armar una proporción entre
  cantidad de personas e ingrediente.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "problema"]

variables:
  cm_base: random(1, 5)
  km_base: cm_base * random(10, 50)
  cm_nueva: cm_base * random(2, 4)

respuesta: km_base * (cm_nueva / cm_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "En un mapa, {cm_base} cm representan {km_base} km reales. Si dos ciudades están a {cm_nueva} cm en el mapa, ¿cuántos km reales las separan?"

pasos:
  - "{cm_base}/{km_base} = {cm_nueva}/x → x = ({km_base} × {cm_nueva}) ÷ {cm_base}"

explicacion: |
  La escala del mapa es una razón constante: se arma una proporción para
  encontrar la distancia real.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "verificacion"]

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

enunciado: "¿Es {a}/{b} = {c_mostrado}/{d} una proporción válida?"

explicacion: |
  Se aplica la propiedad fundamental para verificar.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "termino_desconocido"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)

tipo: completar
enunciado: "Completá: {a}/{b} = ___/{b * k} (que sea una proporción válida)."
respuestas_validas:
  - a * k

explicacion: |
  El término que falta tiene que mantener la misma relación: {a}
  multiplicado por el mismo {k} que multiplicó al denominador.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Cómo se llama la propiedad que dice que, en una proporción, a × d = b × c?"
tipo: mc
opciones_explicitas:
  - "Producto de extremos igual a producto de medios"
  - "Regla de tres"
  - "Teorema de Pitágoras"
respuesta: "Producto de extremos igual a producto de medios"

explicacion: |
  a y d son los extremos (primero y último); b y c son los medios (los
  del medio).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

enunciado: "En la proporción a/b = c/d, ¿cuáles son los medios?"
tipo: mc
opciones_explicitas:
  - "b y c"
  - "a y d"
  - "a y b"
respuesta: "b y c"

explicacion: |
  Los extremos son el primero (a) y el último (d); los medios son los dos
  del centro (b y c).
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion", "problema"]

variables:
  km_base: random(20, 100)
  horas_base: random(1, 4)
  horas_nueva: horas_base * random(2, 4)

respuesta: km_base * (horas_nueva / horas_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {km_base} km en {horas_base} horas, a velocidad constante. ¿Cuántos km recorre en {horas_nueva} horas?"

explicacion: |
  A velocidad constante, distancia y tiempo mantienen una proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "intermedio"
  tags: ["proporcion"]

variables:
  a: random(1, 9)
  b: random(2, 9)
  k: random(2, 8)
  c_valida: a * k
  d: b * k
  c_invalida: c_valida + 1

respuesta: c_valida
tipo: mc
opciones_explicitas:
  - c_valida
  - c_invalida

enunciado: "¿Cuál de estos dos valores hace que {a}/{b} = ___/{d} sea una proporción válida?"

explicacion: |
  Sólo {c_valida} cumple que {a} × {d} = {b} × {c_valida}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion"]

variables:
  n: random(1, 999)

respuesta: verdadero
tipo: vf

enunciado: "¿Es {n}/{n} = {n}/{n} una proporción válida?"

explicacion: |
  Cualquier razón es igual a sí misma: siempre forma una proporción
  consigo misma.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las proporciones son la herramienta detrás de la regla de tres, el siguiente tema del mapa."

explicacion: |
  Resolver una regla de tres es, exactamente, hallar el término
  desconocido de una proporción.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "problema"]

variables:
  peso_base: random(10, 30)
  dosis_base: random(5, 20)
  peso_nuevo: peso_base * random(2, 3)

respuesta: dosis_base * (peso_nuevo / peso_base)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un paciente de {peso_base} kg se indican {dosis_base} mg de un medicamento (proporcional al peso). ¿Cuántos mg corresponden a un paciente de {peso_nuevo} kg?"

explicacion: |
  Cuando una dosis es proporcional al peso, se arma una proporción entre
  peso y cantidad de medicamento.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion"]

variables:
  a: random(10, 50)
  b: random(10, 50)
  k: random(2, 5)
  c: a * k
  d: b * k

respuesta: verdadero
tipo: vf

enunciado: "¿Es {a}/{b} = {c}/{d} una proporción válida?"

explicacion: |
  Con números más grandes, el procedimiento no cambia: se verifica el
  producto de extremos contra el de medios.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "avanzado"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "No todas las relaciones entre dos cantidades son proporciones directas: a veces, cuando una aumenta, la otra disminuye (proporción inversa)."

explicacion: |
  Este tema cubrió la proporción directa; la inversa (y la regla de tres
  inversa) es parte del próximo tema del mapa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcion"
  nivel: "basico"
  tags: ["proporcion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una proporción es la igualdad entre dos razones, y se puede verificar comparando el producto de los extremos con el producto de los medios."

explicacion: |
  Es la idea central de todo el tema: a/b = c/d es proporción si
  a × d = b × c.
```

## Sección: proporcionalidad-funcion (28 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["directa"]

variables:
  k: random(2, 20)
  x: random(1, 15)
  y: k * x

respuesta: y / x
tipo: input
tolerancia_abs: 0

enunciado: "y es directamente proporcional a x. Si x = {x} e y = {y}, ¿cuál es la constante de proporcionalidad k?"

explicacion: |
  k = y/x = {y}/{x} = {y / x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["directa"]

variables:
  k: random(2, 20)
  x: random(1, 30)

respuesta: k * x
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}x (proporcionalidad directa). ¿Cuánto vale y cuando x = {x}?"

explicacion: |
  y = {k}×{x} = {k * x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa"]

variables:
  k: random(2, 15)
  x_sol: random(1, 20)
  y: k * x_sol

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}x. ¿Para qué valor de x es y = {y}?"

explicacion: |
  x = y/k = {y}/{k} = {y / k}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "problema"]

variables:
  precio_kg: random(200, 2000)
  kg1: random(1, 10)
  kg2: random(1, 20)
  costo1: precio_kg * kg1

respuesta: precio_kg * kg2
tipo: input
tolerancia_abs: 0

enunciado: "{kg1} kg de un producto cuestan {costo1}. ¿Cuánto cuestan {kg2} kg (proporcionalidad directa)?"

pasos:
  - "k = {costo1}/{kg1} = {precio_kg} (precio por kg)"
  - "{kg2} kg cuestan {precio_kg}×{kg2} = {precio_kg * kg2}"

explicacion: |
  Es la misma regla de tres directa de `../regla-de-tres-directa/`,
  mirada ahora como una función y=kx.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "verificacion", "verdadero_falso"]

variables:
  k: random(2, 15)
  x1: random(1, 10)
  x2: random(11, 20)
  y1: k * x1
  y2: k * x2

respuesta: ((y1 / x1) == (y2 / x2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}). ¿Son directamente proporcionales (o sea, y/x da lo mismo en los dos)?"

explicacion: |
  y₁/x₁ = {y1 / x1}, y₂/x₂ = {y2 / x2} — coinciden, así que sí son
  directamente proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "verificacion", "verdadero_falso"]

variables:
  k1: random(2, 10)
  k2: random(11, 20)
  x1: random(1, 10)
  x2: random(1, 10)
  y1: k1 * x1
  y2: k2 * x2

respuesta: ((y1 / x1) == (y2 / x2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}). ¿Son directamente proporcionales?"

explicacion: |
  y₁/x₁ = {y1 / x1}, y₂/x₂ = {y2 / x2} — al no coincidir, no son
  directamente proporcionales.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["inversa"]

variables:
  x: random(2, 15)
  y: random(2, 15)

respuesta: x * y
tipo: input
tolerancia_abs: 0

enunciado: "y es inversamente proporcional a x. Si x = {x} e y = {y}, ¿cuál es la constante de proporcionalidad k?"

explicacion: |
  k = x×y = {x}×{y} = {x * y}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  x: random(2, 12)
  y_deseado: random(2, 15)
  k: x * y_deseado

respuesta: k / x
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}/x (proporcionalidad inversa). ¿Cuánto vale y cuando x = {x}?"

explicacion: |
  y = {k}/{x} = {k / x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa"]

variables:
  x_sol: random(2, 15)
  y: random(2, 15)
  k: x_sol * y

respuesta: x_sol
tipo: input
tolerancia_abs: 0

enunciado: "y = {k}/x. ¿Para qué valor de x es y = {y}?"

explicacion: |
  x = k/y = {k}/{y} = {k / y}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa", "problema"]

variables:
  dias1: random(2, 15)
  dias2: random(2, 15)
  m: random(2, 8)
  obreros1: dias2 * m
  obreros2: dias1 * m
  trabajo_total: obreros1 * dias1

respuesta: dias2
tipo: input
tolerancia_abs: 0

enunciado: "{obreros1} obreros tardan {dias1} días en hacer un trabajo. ¿Cuántos días tardarían {obreros2} obreros (al mismo ritmo cada uno)?"

pasos:
  - "k = {obreros1}×{dias1} = {trabajo_total} (trabajo total)"
  - "días = {trabajo_total}/{obreros2} = {dias2}"

explicacion: |
  Es la misma regla de tres inversa de `../regla-de-tres-inversa/`,
  mirada como función y=k/x.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  x1: random(2, 8)
  x2: random(2, 8)
  m: random(2, 10)
  y1: x2 * m
  y2: x1 * m
  k: x1 * y1

respuesta: ((x1 * y1) == (x2 * y2))
tipo: vf

enunciado: "Dos pares de valores son ({x1}, {y1}) y ({x2}, {y2}), ambos con y=k/x para k={k}. ¿Es cierto que x×y da lo mismo en ambos casos?"

explicacion: |
  El producto x×y siempre da k, sea cual sea el par — eso es justamente
  lo que define a la proporcionalidad inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["inversa", "verificacion", "verdadero_falso"]

variables:
  k: random(2, 15)
  x1: random(1, 10)
  x2: random(11, 20)
  y1: k * x1
  y2: k * x2

respuesta: ((x1 * y1) == (x2 * y2))
tipo: vf

enunciado: "Un par de valores es ({x1}, {y1}) y otro es ({x2}, {y2}) (que en realidad son directamente proporcionales). ¿Son también inversamente proporcionales (x×y constante)?"

explicacion: |
  x₁×y₁ = {x1 * y1}, x₂×y₂ = {x2 * y2} — no coinciden: una relación
  directamente proporcional casi nunca es, a la vez, inversamente
  proporcional.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Directa"
tipo: mc
opciones_explicitas:
  - "Directa"
  - "Inversa"
  - "Ninguna de las dos"

enunciado: "x: 2, 4, 6 — y: 10, 20, 30. El cociente y/x siempre da 5. ¿Es directa o inversa?"

explicacion: |
  El cociente y/x constante es la marca de la proporcionalidad directa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Inversa"
tipo: mc
opciones_explicitas:
  - "Inversa"
  - "Directa"
  - "Ninguna de las dos"

enunciado: "x: 2, 4, 6 — y: 12, 6, 4. El producto x×y siempre da 24. ¿Es directa o inversa?"

explicacion: |
  El producto x×y constante es la marca de la proporcionalidad inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de una relación de proporcionalidad directa siempre pasa por el origen (0,0)."

explicacion: |
  y=kx da y=0 cuando x=0 — siempre pasa por el origen.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "El gráfico de una relación de proporcionalidad inversa pasa por el origen (0,0), igual que la directa."

explicacion: |
  La inversa (y=k/x) ni siquiera está definida en x=0 — no puede pasar
  por ese punto.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "dominio", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El dominio de y = k/x son todos los reales excepto 0."

explicacion: |
  x=0 haría que el denominador se anule — mismo criterio que
  `../funcion-dominio/`.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La proporcionalidad directa y=kx es el caso particular de una función lineal y=mx+b, con b=0."

explicacion: |
  k hace el papel de la pendiente m, y la ordenada al origen es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "La proporcionalidad inversa y=k/x también es una función lineal, como la directa."

explicacion: |
  No: su gráfico es una hipérbola, no una recta — x no tiene exponente 1
  en una posición lineal, está dividiendo.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  k: random(1, 15)

respuesta: verdadero
tipo: vf

enunciado: "En y = {k}x (con k positivo), si x aumenta, y también aumenta."

explicacion: |
  Con k positivo, la relación es directamente proporcional: los dos
  crecen juntos.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

variables:
  k: random(1, 15)

respuesta: falso

tipo: vf

enunciado: "En y = {k}/x (con k positivo), si x aumenta, y también aumenta."

explicacion: |
  Al revés: si x aumenta, y DISMINUYE — el producto x×y se mantiene
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["inversa", "problema"]

variables:
  tiempo1: random(1, 10)
  tiempo2: random(1, 10)
  m: random(5, 20)
  velocidad1: tiempo2 * m
  velocidad2: tiempo1 * m
  distancia: velocidad1 * tiempo1

respuesta: tiempo2
tipo: input
tolerancia_abs: 0

enunciado: "Un viaje a {velocidad1} km/h tarda {tiempo1} horas. ¿Cuánto tardaría el mismo viaje a {velocidad2} km/h?"

pasos:
  - "La distancia (constante) es {velocidad1}×{tiempo1} = {distancia} km"
  - "tiempo = {distancia}/{velocidad2} = {tiempo2}"

explicacion: |
  A distancia fija, velocidad y tiempo son inversamente proporcionales:
  cuanto más rápido, menos tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  k: random(2, 20)
  x: random(1, 15)
  y: k * x
  error: uno_de([0, 0, 1, -1])
  propuesto: k + error

respuesta: (propuesto == k)
tipo: vf

enunciado: "y es directamente proporcional a x, con x = {x} e y = {y}. ¿Es correcto que la constante k sea {propuesto}?"

explicacion: |
  k = y/x = {y / x}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  x: random(2, 15)
  y: random(2, 15)
  real: x * y
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "y es inversamente proporcional a x, con x = {x} e y = {y}. ¿Es correcto que la constante k sea {propuesto}?"

explicacion: |
  k = x×y = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["concepto", "signos", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una proporcionalidad directa también puede tener constante k negativa (y = −3x, por ejemplo) — en ese caso, cuando x crece, y decrece."

explicacion: |
  El signo de k determina si es creciente o decreciente, pero sigue
  siendo "directamente proporcional" mientras el cociente y/x sea
  constante.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["directa", "problema"]

variables:
  escala: random(2, 8)
  medida_real: random(5, 50)

respuesta: medida_real * escala
tipo: input
tolerancia_abs: 0

enunciado: "En un plano, cada medida real se multiplica por {escala} para dibujarla a escala. Si una pared mide {medida_real} en la realidad, ¿cuánto mide en el plano?"

explicacion: |
  Es una proporcionalidad directa simple, con k={escala}.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Repartir un monto en partes directamente proporcionales a distintos valores (por ejemplo, según horas trabajadas) usa la misma idea de y=kx, con una k común para todos."

explicacion: |
  Cada parte se calcula como k×(su valor correspondiente), con el mismo
  k para todos los repartos.
```

```
metadata:
  materia: "matematicas"
  tema: "proporcionalidad_funcion"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Inversa (más grifos, menos tiempo)"
tipo: mc
opciones_explicitas:
  - "Inversa (más grifos, menos tiempo)"
  - "Directa (más grifos, más tiempo)"

enunciado: "Llenar un tanque con más grifos abiertos a la vez tarda menos tiempo. ¿Es una relación directa o inversa entre cantidad de grifos y tiempo?"

explicacion: |
  A más grifos, menos tiempo — el producto (grifos×tiempo) es lo que se
  mantiene constante: proporcionalidad inversa.
```
