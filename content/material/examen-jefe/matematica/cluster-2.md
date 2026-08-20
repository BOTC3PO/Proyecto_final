# Examen jefe — Domina asintotas y combinaciones

> Logro #53. Examen parcial completado con éxito, integrando análisis de funciones geométricas y conteo combinatorio. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **119 preguntas totales** en 5/5 secciones.

---

## Sección: asintotas (22 preguntas)

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["clasificacion", "teoria"]

respuesta: "horizontal"
tipo: completar
respuestas_validas:
  - "horizontal"
  - "asintota horizontal"

enunciado: "Si el grado del numerador es menor que el grado del denominador en una función racional, la asíntota es ___."

explicacion: |
  Cuando el denominador crece más rápido que el numerador, la función tiende a 0, definiendo una asíntota horizontal en $y=0$.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["comparacion", "teoria"]

variables:
  # Caso: grado num = grado den + 1
  tiene_ao: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Si el grado del numerador es exactamente uno mayor que el grado del denominador, la función tiene una asíntota oblicua."

explicacion: |
  Esta es la condición necesaria y suficiente para la existencia de una asíntota oblicua en funciones racionales.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["caso_especifico", "rh"]

respuesta: "0"
tipo: completar
respuestas_validas:
  - "0"
  - "y = 0"
  - "eje x"

enunciado: "Si el grado del numerador es menor que el del denominador, la asíntota horizontal es la recta ___."

explicacion: |
  El límite de la función cuando $x \to \infty$ es 0, por lo que la asíntota es el eje horizontal $y=0$.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["teoria", "limite"]

respuesta: "infinito"
tipo: completar
respuestas_validas:
  - "infinito"
  - "infinita"
  - "infinito positivo"
  - "infinito negativo"

enunciado: "Una asíntota vertical se define cuando el límite de la función al acercarse a un punto es ___."

explicacion: |
  La definición formal implica que el valor de la función crece sin cota (positiva o negativamente) al acercarse a $x=a$.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["identificacion", "raices"]

respuesta: "raices"
tipo: completar
respuestas_validas:
  - "raices"
  - "raíces"
  - "ceros"
  - "cero"

enunciado: "Las asíntotas verticales de una función racional suelen ubicarse en las ___ reales del denominador."

explicacion: |
  Son los puntos donde el denominador se hace cero (si no se cancelan con el numerador).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["funciones_transcendentes", "exp"]

respuesta: "ninguna"
tipo: completar
respuestas_validas:
  - "ninguna"
  - "no tiene"
  - "no hay"

enunciado: "La función $f(x) = e^x$ tiene ___ asíntotas verticales."

explicacion: |
  $e^x$ está definida para todo $x \in \mathbb{R}$ y es continua. No tiene asíntotas verticales. (Tiene una horizontal en $y=0$ para $x \to -\infty$).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["asintota_horizontal", "limite"]

variables:
  num: random(1, 5)
  den: random(6, 10)

respuesta: 0
tipo: input

enunciado: "¿Cuál es la asíntota horizontal de f(x) = {num} / (x^{den} + 1) cuando x tiende a infinito?"

explicacion: |
  Cuando el grado del denominador es mayor que el del numerador,
  el límite cuando x -> infinito es 0. Por lo tanto, la asíntota es y = 0.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["propiedad", "polinomio"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La función f(x) = x^2 + 3x tiene una asíntota horizontal."

explicacion: |
  Falso. Las funciones polinómicas no tienen asíntotas horizontales ni verticales.
  Su dominio es todo R y crece sin límite.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["definicion", "terminologia"]

respuesta: "vertical"
tipo: completar
respuestas_validas:
  - "vertical"
  - "verticales"

enunciado: "Una ___ es una recta x = a tal que el límite de la función cuando x se acerca a a es infinito."

explicacion: |
  Se llama asíntota vertical a la recta donde la función no está definida
  y tiende a infinito por uno o ambos lados.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["dominio", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Si una función tiene una asíntota vertical en x = a, entonces x = a no pertenece al dominio de la función."

explicacion: |
  Verdadero. Por definición, en una asíntota vertical la función tiende a infinito,
  por lo que no está definida en ese punto (división por cero).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["definicion", "horizontal"]

respuesta: "horizontal"
tipo: completar
respuestas_validas:
  - "horizontal"
  - "horizontales"

enunciado: "Si el límite de f(x) cuando x tiende a infinito es un número constante L, la recta y = L se llama asíntota ___."

explicacion: |
  Se denomina asíntota horizontal a la recta paralela al eje X a la que se acerca la gráfica.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["asintota_oblicua", "division"]

variables:
  a: random(2, 4)
  b: random(1, 5)
  c: random(1, 3)
  d: random(2, 5)

respuesta: "{a / d}x + ({b - a * c / d})"
tipo: input

enunciado: "Determiná la ecuación de la asíntota oblicua de f(x) = ({a}x^2 + {b}x) / (x + {c}) para x -> infinito. Escribí en formato 'mx+n' (ej: 2x+3)."

explicacion: |
  Dividiendo el numerador por el denominador:
  m = a/d
  n = b - m*c = b - (a/d)*c.
  La ecuación es y = mx + n.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["propiedad", "corte"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Una función puede cortar su asíntota horizontal."

explicacion: |
  Verdadero. La asíntota describe el comportamiento en el infinito,
  pero la función puede intersectarla en puntos finitos del dominio.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["metodo", "calculo"]

respuesta: "denominador"
tipo: completar
respuestas_validas:
  - "denominador"
  - "denominadores"

enunciado: "Para encontrar las asíntotas verticales de una función racional, igualamos a cero el ___."

explicacion: |
  Las asíntotas vertuales ocurren donde el denominador se anula (y el numerador no).
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["raices", "multiples"]

variables:
  a: random(1, 5)
  b: random(6, 10)

respuesta: "{a},{b}"
tipo: input

enunciado: "Encontrá las asíntotas verticales de f(x) = 1 / ((x - {a})(x - {b})). Escribí los valores separados por coma."

explicacion: |
  El denominador se anula en x = {a} y x = {b}.
  Ambas son asíntotas verticales.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["raiz_cuadrada", "asintota_oblicua"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La función f(x) = sqrt(x) tiene una asíntota oblicua."

explicacion: |
  Falso. sqrt(x) crece más lento que cualquier recta (x^1).
  No tiene asíntota oblicua ni horizontal.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["caso_particular", "eje_x"]

respuesta: "eje X"
tipo: completar
respuestas_validas:
  - "eje X"
  - "eje x"
  - "y=0"

enunciado: "Si la asíntota horizontal es y = 0, esta coincide con el ___."

explicacion: |
  La recta y=0 es el eje de abscisas o eje X.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["paridad", "oblicua"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Una función par puede tener una asíntota oblicua."

explicacion: |
  Falso. Si f(x) es par, f(x) = f(-x).
  Si tuviera una asíntota oblicua y = mx + n para x->inf,
  para x->-inf debería tender a y = -mx + n (por simetría).
  Pero una función racional con grado num = grado den + 1 tiene la misma oblicua en ambos extremos (mismo m).
  Para que m = -m, m debe ser 0, lo que implica una asíntota horizontal, no oblicua.
  Por lo tanto, una función par NO puede tener una asíntota oblicua (con m != 0).
  La afirmación dice "puede tener". La respuesta es Falso.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "intermedio"
  tags: ["limite", "lateral"]

respuesta: "infinito"
tipo: completar
respuestas_validas:
  - "infinito"
  - "infinitos"
  - "+infinito"
  - "-infinito"

enunciado: "Para que exista una asíntota vertical en x=a, el límite lateral de la función cuando x tiende a a debe ser ___ (positivo o negativo)."

explicacion: |
  La definición de asíntota vertical requiere que el límite sea infinito.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "avanzado"
  tags: ["exponencial", "limite"]

respuesta: 0
tipo: input

enunciado: "¿Cuál es la asíntota horizontal de f(x) = e^(-x) cuando x tiende a +infinito?"

explicacion: |
  lim(x->inf) e^(-x) = lim(1/e^x) = 0.
  La asíntota horizontal es y = 0.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["continuidad", "discontinuidad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La presencia de una asíntota vertical implica una discontinuidad infinita en esa función."

explicacion: |
  Verdadero. La función no está definida en el punto y tiende a infinito,
  lo que constituye una discontinuidad infinita.
```

```
metadata:
  materia: "matematica"
  tema: "asintotas"
  nivel: "basico"
  tags: ["definicion", "geometria"]

respuesta: "recta"
tipo: completar
respuestas_validas:
  - "recta"
  - "rectas"

enunciado: "Una asíntota es una ___ a la cual la curva se acerca indefinidamente."

explicacion: |
  Por definición geométrica, las asíntotas son rectas.
```

## Sección: caminos-y-ciclos (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "basico"
  tags: ["camino", "vocabulario"]

enunciado: "¿Qué es un camino en un grafo?"
tipo: mc
opciones_explicitas:
  - "Una secuencia de vértices donde cada par consecutivo está conectado por una arista, sin repetir ningún vértice"
  - "La cantidad total de vértices de un grafo"
  - "Un vértice que no tiene ninguna conexión"
respuesta: "Una secuencia de vértices donde cada par consecutivo está conectado por una arista, sin repetir ningún vértice"

explicacion: |
  Es la forma matemática de describir 'ir de un vértice a otro'.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "intermedio"
  tags: ["camino", "vocabulario"]

enunciado: "¿Qué mide la 'longitud' de un camino?"
tipo: mc
opciones_explicitas:
  - "La cantidad de ARISTAS que recorre el camino"
  - "La cantidad de VÉRTICES que recorre el camino"
  - "La suma de los grados de todos los vértices del camino"
respuesta: "La cantidad de ARISTAS que recorre el camino"

explicacion: |
  Un camino con 4 vértices tiene longitud 3 — una arista menos que la
  cantidad de vértices.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "intermedio"
  tags: ["camino", "problema"]

respuesta: 4
tipo: input

enunciado: "El camino A, B, C, D, E conecta 5 vértices, uno a continuación del otro. ¿Cuál es su longitud (cantidad de aristas)?"

pasos:
  - "Con 5 vértices en secuencia, hay 4 aristas: A-B, B-C, C-D, D-E"

explicacion: |
  La longitud siempre es 'cantidad de vértices del camino menos 1'.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "basico"
  tags: ["ciclo", "vocabulario"]

enunciado: "¿Qué es un ciclo en un grafo?"
tipo: mc
opciones_explicitas:
  - "Un camino que empieza y termina en el mismo vértice, sin repetir ningún otro vértice en el medio"
  - "Cualquier grafo que tenga más de 3 vértices"
  - "Un vértice con grado mayor a 2"
respuesta: "Un camino que empieza y termina en el mismo vértice, sin repetir ningún otro vértice en el medio"

explicacion: |
  Un ciclo es, literalmente, un caso particular de camino.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "intermedio"
  tags: ["ciclo", "camino"]

respuesta: verdadero
tipo: vf

enunciado: "Un ciclo es un caso particular de camino: uno que empieza y termina exactamente en el mismo vértice."

explicacion: |
  Es la relación central que da nombre a este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["ciclo", "problema"]

enunciado: "La secuencia A, B, C, D, A (volviendo al punto de partida, sin repetir A, B, C ni D en el medio) recorre las aristas A-B, B-C, C-D, D-A. ¿Es esto un ciclo?"
tipo: mc
opciones_explicitas:
  - "Sí: empieza y termina en el mismo vértice (A), sin repetir ningún otro vértice en el camino"
  - "No, porque tiene 4 vértices distintos"
respuesta: "Sí: empieza y termina en el mismo vértice (A), sin repetir ningún otro vértice en el camino"

explicacion: |
  Cumple exactamente la definición de ciclo.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "intermedio"
  tags: ["acíclico", "vocabulario"]

enunciado: "¿Qué es un grafo acíclico?"
tipo: mc
opciones_explicitas:
  - "Un grafo que no contiene ningún ciclo — no se puede volver al punto de partida sin repetir una arista"
  - "Un grafo que no tiene ninguna arista"
  - "Un grafo con exactamente un solo vértice"
respuesta: "Un grafo que no contiene ningún ciclo — no se puede volver al punto de partida sin repetir una arista"

explicacion: |
  Es el prerrequisito directo de `../arboles-grafo-sin-ciclos/`.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "intermedio"
  tags: ["conexo", "vocabulario"]

enunciado: "¿Qué significa que un grafo sea 'conexo'?"
tipo: mc
opciones_explicitas:
  - "Que existe al menos un camino entre cualquier par de vértices — ningún vértice queda completamente aislado del resto"
  - "Que todos los vértices tienen exactamente el mismo grado"
  - "Que el grafo no tiene ningún ciclo"
respuesta: "Que existe al menos un camino entre cualquier par de vértices — ningún vértice queda completamente aislado del resto"

explicacion: |
  'Conexo' y 'acíclico' son dos propiedades distintas e
  independientes entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["camino_mas_corto", "problema"]

respuesta: 2
tipo: input

enunciado: "En un grafo con aristas A-B, B-C, A-D, D-C, ¿cuál es la longitud del camino MÁS CORTO entre A y C?"

pasos:
  - "Camino A-B-C: longitud 2. Camino A-D-C: longitud 2. Ambos son igual de cortos."

explicacion: |
  Hay dos caminos distintos, ambos de longitud 2 — el camino más
  corto no siempre es único.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["camino_mas_corto"]

respuesta: verdadero
tipo: vf

enunciado: "Entre dos vértices puede haber más de un camino con la misma longitud mínima — el camino más corto no siempre es único."

explicacion: |
  Es lo que muestra el problema anterior: dos caminos distintos, la
  misma longitud mínima.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "basico"
  tags: ["ciclo", "aplicacion"]

enunciado: "El módulo A de un programa necesita al módulo B, que necesita al C, que a su vez necesita al A. ¿Qué problema representa esta situación, en términos de teoría de grafos?"
tipo: mc
opciones_explicitas:
  - "Un ciclo en el grafo de dependencias — impide determinar un orden válido para cargar o compilar los módulos"
  - "Un camino simple, sin ningún problema real"
  - "Un grafo desconectado"
respuesta: "Un ciclo en el grafo de dependencias — impide determinar un orden válido para cargar o compilar los módulos"

explicacion: |
  Es la razón por la que muchos sistemas de compilación detectan y
  rechazan dependencias circulares.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["ciclo", "ponderado", "problema"]

variables:
  peso1: uno_de([4, 5])
  peso2: uno_de([3, 6])
  peso3: uno_de([2, 4])
  peso4: uno_de([5, 3])

respuesta: peso1 + peso2 + peso3 + peso4
tipo: input

enunciado: "Un ciclo A-B-C-D-A en un grafo ponderado tiene aristas con pesos {peso1}, {peso2}, {peso3} y {peso4}. ¿Cuál es el peso total del ciclo?"

pasos:
  - "Peso total = {peso1} + {peso2} + {peso3} + {peso4} = {peso1 + peso2 + peso3 + peso4}"

explicacion: |
  Se suman los pesos de todas las aristas recorridas, igual que en
  cualquier camino.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "intermedio"
  tags: ["camino"]

respuesta: verdadero
tipo: vf

enunciado: "En un camino simple, ningún vértice se repite (excepto en un ciclo, donde el primero y el último vértice sí son el mismo, por definición)."

explicacion: |
  Es la condición que distingue un camino válido de simplemente
  'moverse por el grafo sin ningún orden'.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "basico"
  tags: ["ciclo", "aplicacion"]

enunciado: "¿Por qué un circuito eléctrico necesita formar un ciclo (un camino cerrado) para que fluya la corriente?"
tipo: mc
opciones_explicitas:
  - "Porque la corriente necesita volver a la fuente de energía para completar el recorrido — sin un camino cerrado, el circuito queda 'abierto' y no circula corriente"
  - "Los circuitos eléctricos nunca forman ciclos, siempre son caminos simples"
  - "El concepto de ciclo no tiene ninguna aplicación en electricidad"
respuesta: "Porque la corriente necesita volver a la fuente de energía para completar el recorrido — sin un camino cerrado, el circuito queda 'abierto' y no circula corriente"

explicacion: |
  Es la razón por la que se llama 'circuito' (del mismo origen que
  'circular', volver al punto de partida).
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["acíclico", "problema"]

enunciado: "Un grafo tiene 4 vértices (A, B, C, D) y sólo 3 aristas: A-B, B-C, C-D (sin ninguna arista que vuelva a cerrar el circuito). ¿Es este grafo acíclico?"
tipo: mc
opciones_explicitas:
  - "Sí: no hay ninguna forma de volver al punto de partida sin repetir una arista ya usada"
  - "No, cualquier grafo con 4 vértices tiene al menos un ciclo"
respuesta: "Sí: no hay ninguna forma de volver al punto de partida sin repetir una arista ya usada"

explicacion: |
  De hecho, este grafo en particular también es un árbol — se retoma
  en `../arboles-grafo-sin-ciclos/`.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["conexo", "acíclico"]

respuesta: verdadero
tipo: vf

enunciado: "'Conexo' y 'acíclico' son dos propiedades independientes de un grafo — un grafo puede ser conexo y tener ciclos, o puede ser acíclico y no ser conexo (estar partido en varios pedazos sin conexión entre ellos)."

explicacion: |
  Sólo cuando un grafo es AMBAS cosas a la vez (conexo Y acíclico) se
  llama árbol — el tema del módulo que sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["conexo", "problema"]

enunciado: "Un grafo tiene 6 vértices: A, B, C están conectados entre sí (A-B, B-C), y D, E, F están conectados entre sí por separado (D-E, E-F), pero no hay ninguna arista entre los dos grupos. ¿Es este grafo conexo?"
tipo: mc
opciones_explicitas:
  - "No: no existe ningún camino entre, por ejemplo, A y D — son dos componentes separadas"
  - "Sí, porque todos los vértices tienen al menos una arista"
respuesta: "No: no existe ningún camino entre, por ejemplo, A y D — son dos componentes separadas"

explicacion: |
  Ser conexo exige un camino entre CUALQUIER par de vértices, no sólo
  dentro de cada grupo por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "avanzado"
  tags: ["camino", "problema"]

variables:
  vertices_camino_a: 5
  vertices_camino_b: 8

respuesta: (vertices_camino_a - 1) < (vertices_camino_b - 1)
tipo: vf

enunciado: "El Camino A pasa por {vertices_camino_a} vértices; el Camino B pasa por {vertices_camino_b} vértices, ambos entre el mismo par de puntos. ¿La longitud (cantidad de aristas) del Camino A es MENOR que la del Camino B?"

explicacion: |
  A menos vértices en el camino, menos aristas — longitud menor.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "basico"
  tags: ["ciclo", "aplicacion"]

enunciado: "¿Por qué una red de tuberías de agua con un ciclo (una ruta alternativa que vuelve a conectar) es más robusta que una sin ningún ciclo?"
tipo: mc
opciones_explicitas:
  - "Porque si una parte de la tubería se rompe, el agua todavía puede llegar a destino por el camino alternativo del ciclo, en vez de quedar completamente cortada"
  - "Un ciclo en una red de tuberías siempre es un error de diseño, sin ninguna ventaja"
  - "Los ciclos no tienen ninguna aplicación práctica en redes de tuberías"
respuesta: "Porque si una parte de la tubería se rompe, el agua todavía puede llegar a destino por el camino alternativo del ciclo, en vez de quedar completamente cortada"

explicacion: |
  Es la misma razón por la que las redes eléctricas y de internet
  reales suelen tener rutas redundantes (ciclos) a propósito.
```

```
metadata:
  materia: "matematicas"
  tema: "caminos_y_ciclos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve identificar caminos y ciclos en un grafo?"
tipo: mc
opciones_explicitas:
  - "Para encontrar rutas entre vértices (el más corto o el de menor costo) y para detectar problemas como dependencias circulares, además de entender la robustez de una red"
  - "Sólo sirve para dibujar el grafo de forma más prolija"
  - "Sólo se aplica a grafos con menos de 5 vértices"
respuesta: "Para encontrar rutas entre vértices (el más corto o el de menor costo) y para detectar problemas como dependencias circulares, además de entender la robustez de una red"

explicacion: |
  Es la base de `../arboles-grafo-sin-ciclos/` (grafos sin ciclos) y
  `../algoritmos-de-recorrido-bfs-dfs/` (cómo encontrar caminos de
  forma sistemática).
```

## Sección: cifras-significativas-y-error (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "vocabulario"]

enunciado: "¿Qué son las cifras significativas de un número medido?"
tipo: mc
opciones_explicitas:
  - "Los dígitos que aportan información real sobre la precisión de la medición"
  - "Todos los dígitos, incluidos los que sólo ubican la coma"
  - "Sólo el primer dígito del número"
respuesta: "Los dígitos que aportan información real sobre la precisión de la medición"

explicacion: |
  No incluyen los ceros que sólo sirven para ubicar la coma decimal.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "vocabulario"]

enunciado: "¿Para qué sirve expresar un resultado con la cantidad correcta de cifras significativas?"
tipo: mc
opciones_explicitas:
  - "Para no inventar precisión que el instrumento no tiene, ni desperdiciar la que sí se logró"
  - "Para que el número se vea más largo"
  - "Para redondear siempre a números enteros"
respuesta: "Para no inventar precisión que el instrumento no tiene, ni desperdiciar la que sí se logró"

explicacion: |
  Es la forma de ser honesto sobre cuánto se sabe realmente.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 305?"

explicacion: |
  Los tres dígitos son significativos: el 0 está ENTRE dos dígitos
  distintos de cero.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 0,0042?"

explicacion: |
  Los ceros a la izquierda del 4 no cuentan (sólo ubican la coma): las
  cifras significativas son 4 y 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 3,40?"

explicacion: |
  El cero final después de la coma SÍ es significativo: indica que se
  midió hasta el centésimo. Cifras: 3, 4 y 0.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 0,00500?"

explicacion: |
  Los ceros a la izquierda del 5 no cuentan; los dos ceros a la derecha
  del 5 sí (después de la coma). Cifras: 5, 0 y 0.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 100,0?"

explicacion: |
  Con la coma decimal presente, todos los ceros cuentan: 1, 0, 0 y 0.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 1200 (entero, sin coma decimal, sin ninguna aclaración extra)?"

explicacion: |
  Por convención escolar, los ceros finales de un entero sin coma se
  toman como no significativos (ambiguos): cuentan sólo el 1 y el 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros a la izquierda del primer dígito distinto de cero nunca son cifras significativas."

explicacion: |
  Sólo sirven para ubicar la coma decimal, como en 0,0042.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros ubicados entre dos dígitos distintos de cero siempre son cifras significativas."

explicacion: |
  Como el 0 en 305 o en 1004.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros al final de un número, después de la coma decimal, sí son cifras significativas."

explicacion: |
  Indican que se logró medir con esa precisión (por ejemplo, el 0 en
  3,40).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["error", "vocabulario"]

enunciado: "¿Cómo se calcula el error absoluto de una medición?"
tipo: mc
opciones_explicitas:
  - "El valor absoluto de la diferencia entre el valor medido y el valor real"
  - "El valor medido dividido el valor real"
  - "La suma del valor medido y el valor real"
respuesta: "El valor absoluto de la diferencia entre el valor medido y el valor real"

explicacion: |
  Error absoluto = |medido − real|.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: abs(medido - real)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error absoluto?"

pasos:
  - "|{medido} − {real}| = {abs(medido - real)} cm"

explicacion: |
  Se resta y se toma el valor absoluto (el error no es negativo).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "vocabulario"]

enunciado: "¿Cómo se calcula el error relativo de una medición?"
tipo: mc
opciones_explicitas:
  - "Error absoluto dividido el valor real"
  - "Error absoluto multiplicado por el valor real"
  - "Valor real dividido el error absoluto"
respuesta: "Error absoluto dividido el valor real"

explicacion: |
  Error relativo = error absoluto ÷ valor real. Es un número sin unidad.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: redondear(abs(medido - real) / real, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error relativo? Redondeá a 4 decimales."

pasos:
  - "Error absoluto: {abs(medido - real)} cm. Error relativo: {abs(medido - real)} ÷ {real} = {redondear(abs(medido - real) / real, 4)}"

explicacion: |
  Se divide el error absoluto por el valor real.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: redondear((abs(medido - real) / real) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error porcentual? Redondeá a 2 decimales."

pasos:
  - "Error relativo: {redondear(abs(medido - real) / real, 4)}. Error porcentual: {redondear(abs(medido - real) / real, 4)} × 100 = {redondear((abs(medido - real) / real) * 100, 2)}%"

explicacion: |
  El error porcentual es el error relativo expresado como porcentaje.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error relativo es un número sin unidad (una proporción), a diferencia del error absoluto."

explicacion: |
  Por eso permite comparar la calidad de mediciones de magnitudes
  distintas (por ejemplo, un error en una longitud contra un error en una
  masa).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "comparacion"]

variables:
  real1: random(50, 200)
  error1: random(1, 5)
  real2: random(500, 2000)
  error2: random(5, 20)

restricciones:
  - (error1 / real1) != (error2 / real2)

respuesta: (error1 / real1) < (error2 / real2)
tipo: vf

enunciado: "Una medición de {real1} cm tuvo un error absoluto de {error1} cm; otra de {real2} cm tuvo un error absoluto de {error2} cm. ¿Es la primera medición más precisa (menor error relativo) que la segunda?"

pasos:
  - "Error relativo 1: {error1} ÷ {real1} = {redondear(error1 / real1, 4)}. Error relativo 2: {error2} ÷ {real2} = {redondear(error2 / real2, 4)}."

explicacion: |
  Aunque el error absoluto de la segunda sea mayor en números, hay que
  comparar el error RELATIVO (proporcional al tamaño de lo medido) para
  saber cuál midió con más precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "instrumento"]

respuesta: verdadero
tipo: vf

enunciado: "El error absoluto de una medición nunca puede ser menor que la mitad de la división más chica del instrumento usado."

explicacion: |
  Es el límite físico de lo que el instrumento puede distinguir, ya
  adelantado en `../magnitud-unidad-instrumento/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se cuentan 24 alumnos en un aula (un conteo exacto, no una medición con instrumento), ese número no tiene incertidumbre: la idea de \"cifras significativas\" no le aplica de la misma forma que a una medida."

explicacion: |
  Las cifras significativas son un concepto de MEDICIÓN (con margen de
  error); un conteo exacto de unidades discretas no tiene ese margen.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "comparacion"]

enunciado: "¿Cuál de estos números tiene MÁS cifras significativas?"
tipo: mc
opciones_explicitas:
  - "20,50"
  - "0,02"
  - "2000"
respuesta: "20,50"

explicacion: |
  20,50 tiene 4 cifras significativas (2, 0, 5, 0 — con coma, los ceros
  cuentan); 0,02 tiene 1; 2000 se toma como 1 (ambiguo, sin coma).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "completar"]

tipo: completar
enunciado: "Completá: los ceros a la ___ del primer dígito distinto de cero NO son cifras significativas."
respuestas_validas:
  - "izquierda"

explicacion: |
  Sólo ubican la coma decimal, no aportan precisión.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "completar"]

tipo: completar
enunciado: "Completá: el error porcentual es el error relativo multiplicado por ___."
respuestas_validas:
  - 100

explicacion: |
  Es la misma idea que pasar de decimal a porcentaje (ver
  `../porcentaje/`).
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de MENOS a MÁS cifras significativas: 3,40; 0,002; 0,042; 100,0."
opciones_explicitas:
  - "0,042"
  - "100,0"
  - "0,002"
  - "3,40"
respuesta_orden:
  - "0,002"
  - "0,042"
  - "3,40"
  - "100,0"

pasos:
  - "0,002 tiene 1; 0,042 tiene 2; 3,40 tiene 3; 100,0 tiene 4."

explicacion: |
  Se cuentan las cifras significativas de cada uno aplicando las reglas
  antes de poder ordenarlos: 1 < 2 < 3 < 4.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "verificacion"]

variables:
  real: random(50, 200)
  diferencia: random(2, 10)
  medido: real + diferencia
  correcto: abs(medido - real)
  error_mostrado: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error_mostrado

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? Se midió {medido} cm, el valor real es {real} cm, y se dice que el error absoluto es {mostrado} cm."

explicacion: |
  Se recalcula |medido − real| y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "error", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cifras significativas y el error de una medición son dos formas de expresar la misma idea: ningún instrumento mide con precisión infinita."

explicacion: |
  Es el hilo conductor de todo el módulo, que se retoma en
  `../error-sistematico-vs-aleatorio/`.
```

## Sección: circunferencia-y-circulo (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "circulo", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre circunferencia y círculo?"
tipo: mc
opciones_explicitas:
  - "La circunferencia es la línea curva del borde; el círculo es la superficie plana que encierra"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "La circunferencia es más grande que el círculo"
respuesta: "La circunferencia es la línea curva del borde; el círculo es la superficie plana que encierra"

explicacion: |
  La circunferencia es el borde (una línea), el círculo es el borde más
  el relleno (una superficie).
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es el radio de una circunferencia?"
tipo: mc
opciones_explicitas:
  - "El segmento que une el centro con cualquier punto de la circunferencia"
  - "El segmento que une dos puntos cualesquiera de la circunferencia"
  - "La línea curva completa"
respuesta: "El segmento que une el centro con cualquier punto de la circunferencia"

explicacion: |
  Todos los radios de una misma circunferencia miden lo mismo: es la
  distancia constante al centro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "diametro", "problema"]

variables:
  r: random(2, 40)

respuesta: 2 * r
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene un radio de {r} cm. ¿Cuánto mide su diámetro?"

pasos:
  - "2 × {r} = {2 * r} cm"

explicacion: |
  El diámetro mide siempre el doble que el radio: d = 2r.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "diametro", "problema"]

variables:
  d: uno_de([10, 12, 14, 16, 18, 20, 24, 30, 40, 50])

respuesta: d / 2
tipo: input
tolerancia_abs: 0

enunciado: "Una circunferencia tiene un diámetro de {d} cm. ¿Cuánto mide su radio?"

pasos:
  - "{d} ÷ 2 = {d / 2} cm"

explicacion: |
  El radio es la mitad del diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es una cuerda de una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Un segmento que une dos puntos cualesquiera de la circunferencia"
  - "Un segmento que une el centro con la circunferencia"
  - "Una recta que toca la circunferencia en un solo punto"
respuesta: "Un segmento que une dos puntos cualesquiera de la circunferencia"

explicacion: |
  A diferencia del radio, una cuerda no tiene por qué pasar por el
  centro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El diámetro es la cuerda más larga que se puede trazar en una circunferencia."

explicacion: |
  Cualquier otra cuerda que no pase por el centro es más corta.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es un arco de una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Cada una de las partes en que una cuerda divide a la circunferencia"
  - "El segmento entre el centro y un punto de la circunferencia"
  - "La superficie plana encerrada por la circunferencia"
respuesta: "Cada una de las partes en que una cuerda divide a la circunferencia"

explicacion: |
  Toda cuerda (menos ninguna) divide a la circunferencia en dos arcos.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circulo", "vocabulario"]

enunciado: "¿Qué es un sector circular?"
tipo: mc
opciones_explicitas:
  - "La porción de círculo entre dos radios y el arco que encierran, como una porción de pizza"
  - "La porción de círculo entre una cuerda y el arco que corta"
  - "Otro nombre para el diámetro"
respuesta: "La porción de círculo entre dos radios y el arco que encierran, como una porción de pizza"

explicacion: |
  Está delimitado por dos radios y el arco entre ellos.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es una recta tangente a una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Una recta que toca a la circunferencia en un único punto, sin cruzarla"
  - "Una recta que cruza a la circunferencia en dos puntos"
  - "Una recta que pasa por el centro"
respuesta: "Una recta que toca a la circunferencia en un único punto, sin cruzarla"

explicacion: |
  Roza la circunferencia en un solo punto de contacto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "tangente"]

respuesta: verdadero
tipo: vf

enunciado: "En el punto de contacto, una recta tangente a una circunferencia es siempre perpendicular al radio."

explicacion: |
  Es una propiedad constante de toda tangente: forma 90° con el radio
  trazado hasta el punto de contacto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "vocabulario"]

enunciado: "¿Qué es una recta secante a una circunferencia?"
tipo: mc
opciones_explicitas:
  - "Una recta que cruza a la circunferencia en dos puntos"
  - "Una recta que toca a la circunferencia en un único punto"
  - "Un segmento que une el centro con un punto de la circunferencia"
respuesta: "Una recta que cruza a la circunferencia en dos puntos"

explicacion: |
  A diferencia de la tangente (un solo punto de contacto), la secante
  atraviesa la circunferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "perimetro", "problema"]

variables:
  r: random(2, 25)

respuesta: redondear(2 * pi * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la longitud (el perímetro) de una circunferencia de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} = {redondear(2 * pi * r, 2)} cm"

explicacion: |
  La longitud de una circunferencia es 2 × π × radio.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circulo", "area", "problema"]

variables:
  r: random(2, 25)

respuesta: redondear(pi * r * r, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de un círculo de radio {r} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² = {redondear(pi * r * r, 2)} cm²"

explicacion: |
  El área del círculo es π por el radio al cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "perimetro", "problema"]

variables:
  d: random(4, 50)

respuesta: redondear(pi * d, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es la longitud de una circunferencia de diámetro {d} cm? Redondeá a 2 decimales."

pasos:
  - "π × {d} = {redondear(pi * d, 2)} cm"

explicacion: |
  Como el diámetro es el doble del radio, 2×π×r se puede escribir
  directo como π × diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["circunferencia", "pi"]

respuesta: verdadero
tipo: vf

enunciado: "π (pi) vale siempre lo mismo, sin importar el tamaño del círculo."

explicacion: |
  π es la razón entre el perímetro y el diámetro de cualquier círculo:
  ese cociente da siempre ≈ 3,14159..., sea el círculo chico o grande.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["angulos", "vocabulario"]

enunciado: "¿Qué es un ángulo central en una circunferencia?"
tipo: mc
opciones_explicitas:
  - "El que tiene su vértice en el centro y sus lados son dos radios"
  - "El que tiene su vértice sobre la circunferencia y sus lados son dos cuerdas"
  - "El que forma una recta tangente con un radio"
respuesta: "El que tiene su vértice en el centro y sus lados son dos radios"

explicacion: |
  Su vértice está en el centro, no sobre la curva.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["angulos", "problema"]

variables:
  arco: random(10, 300)

respuesta: arco
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo central abarca un arco de {arco}°. ¿Cuánto mide ese ángulo central?"

pasos:
  - "El ángulo central mide igual que el arco que abarca: {arco}°"

explicacion: |
  Es la propiedad que define al ángulo central: su medida coincide con
  la del arco comprendido entre sus lados.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["angulos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ángulo central que abarca toda la circunferencia (una vuelta completa) mide 360°."

explicacion: |
  Toda la circunferencia es un solo arco de 360°.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["angulos", "vocabulario"]

enunciado: "¿Qué es un ángulo inscripto en una circunferencia?"
tipo: mc
opciones_explicitas:
  - "El que tiene su vértice sobre la circunferencia y sus lados son dos cuerdas"
  - "El que tiene su vértice en el centro y sus lados son dos radios"
  - "El que se forma entre dos tangentes"
respuesta: "El que tiene su vértice sobre la circunferencia y sus lados son dos cuerdas"

explicacion: |
  A diferencia del ángulo central, su vértice está sobre la curva, no en
  el centro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "problema"]

variables:
  mitad: random(10, 170)
  central: mitad * 2

respuesta: mitad
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo central mide {central}°. ¿Cuánto mide un ángulo inscripto que abarca el mismo arco?"

pasos:
  - "{central}° ÷ 2 = {mitad}°"

explicacion: |
  Todo ángulo inscripto mide la mitad del ángulo central que abarca el
  mismo arco.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "problema"]

variables:
  inscripto: random(5, 170)

respuesta: inscripto * 2
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo inscripto mide {inscripto}°. ¿Cuánto mide el ángulo central que abarca el mismo arco?"

pasos:
  - "{inscripto}° × 2 = {inscripto * 2}°"

explicacion: |
  El ángulo central es el doble del ángulo inscripto correspondiente al
  mismo arco.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un ángulo inscripto abarca una semicircunferencia (sus lados terminan en los dos extremos de un diámetro), ese ángulo mide siempre 90°."

explicacion: |
  La semicircunferencia es un arco de 180° (mitad de la vuelta
  completa), y el ángulo inscripto siempre mide la mitad de eso: 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos"]

enunciado: "Si se traza un triángulo con un lado sobre un diámetro y el tercer vértice en cualquier otro punto de la circunferencia, ¿qué tipo de triángulo se forma siempre?"
tipo: mc
opciones_explicitas:
  - "Un triángulo rectángulo, sin importar dónde esté el tercer vértice"
  - "Un triángulo equilátero"
  - "Depende de dónde esté el tercer vértice: puede no ser rectángulo"
respuesta: "Un triángulo rectángulo, sin importar dónde esté el tercer vértice"

explicacion: |
  El ángulo inscripto que abarca el diámetro (una semicircunferencia)
  mide siempre 90°, así que ese vértice siempre da un ángulo recto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "intermedio"
  tags: ["circunferencia", "completar"]

tipo: completar
enunciado: "Completá la fórmula del perímetro de una circunferencia de radio r: Perímetro = 2 × ___ × r."
respuestas_validas:
  - "π"
  - "pi"

explicacion: |
  π es la razón constante entre el perímetro y el diámetro.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "avanzado"
  tags: ["angulos", "ordenar"]

enunciado: "Ordená los pasos para hallar un ángulo inscripto, conociendo sólo el arco que abarca."
tipo: ordenar
opciones_explicitas:
  - "Se divide la medida del arco por 2 para obtener el ángulo inscripto"
  - "El ángulo central que abarca ese arco mide igual que el arco"
  - "El ángulo inscripto mide la mitad del ángulo central"
respuesta_orden:
  - "El ángulo central que abarca ese arco mide igual que el arco"
  - "El ángulo inscripto mide la mitad del ángulo central"
  - "Se divide la medida del arco por 2 para obtener el ángulo inscripto"

explicacion: |
  Como el central es igual al arco, dividir el arco por 2 da directo el
  ángulo inscripto.
```

```
metadata:
  materia: "matematicas"
  tema: "circunferencia_y_circulo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer los elementos y ángulos de la circunferencia?"
tipo: mc
opciones_explicitas:
  - "Es la base para calcular medidas circulares reales y para construir diseños simétricos como los rosetones"
  - "Sólo tiene uso decorativo, sin aplicación práctica"
  - "Sólo sirve para clasificar triángulos"
respuesta: "Es la base para calcular medidas circulares reales y para construir diseños simétricos como los rosetones"

explicacion: |
  Desde calcular el material de una rueda o un caño hasta diseñar
  patrones circulares con simetría, todo parte de estos elementos.
```

## Sección: combinaciones (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "vocabulario"]

enunciado: "¿Qué es una combinación de k elementos elegidos de un conjunto de n elementos (k ≤ n)?"
tipo: mc
opciones_explicitas:
  - "Cada forma distinta de elegir k elementos, sin repetir ninguno, donde el ORDEN NO importa"
  - "Cada forma distinta de elegir Y ordenar k elementos"
  - "Cada forma de ordenar TODOS los n elementos"
respuesta: "Cada forma distinta de elegir k elementos, sin repetir ninguno, donde el ORDEN NO importa"

explicacion: |
  Elegir A y B es lo mismo que elegir B y A — es la misma combinación.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "completar"]

tipo: completar
enunciado: "Completá: C(n, k) = n! / (___ × (n−k)!)."
respuestas_validas:
  - "k!"

explicacion: |
  Se divide por k! para no contar cada combinación una vez por cada
  orden posible de sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([6, 7, 8, 9, 10])
  k: uno_de([2, 3])

respuesta: combinations(n, k)
tipo: input

enunciado: "¿Cuántas combinaciones de {k} elementos se pueden formar a partir de un conjunto de {n} elementos?"

pasos:
  - "C({n}, {k}) = {n}! / ({k}! × ({n}−{k})!) = {combinations(n, k)}"

explicacion: |
  Se divide la variación correspondiente por las formas de ordenar los
  {k} elementos elegidos.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "En una combinación, elegir A y luego B es exactamente lo mismo que elegir B y luego A — cuentan como UNA sola combinación."

explicacion: |
  Es la diferencia clave con las variaciones, donde sí se
  distinguen.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones"]

respuesta: falso
tipo: vf

enunciado: "En una combinación (en el sentido clásico de este módulo), se permite elegir el mismo elemento más de una vez."

explicacion: |
  Es falso: cada elemento se elige como máximo una vez, igual que en
  variaciones y permutaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  candidatos: uno_de([8, 9, 10, 12])
  comite: uno_de([2, 3])

respuesta: combinations(candidatos, comite)
tipo: input

enunciado: "Entre {candidatos} candidatos, se va a formar un comité de {comite} personas, sin roles distintos (no importa el orden en que se elijan). ¿Cuántos comités distintos son posibles?"

pasos:
  - "C({candidatos}, {comite}) = {combinations(candidatos, comite)}"

explicacion: |
  A diferencia de elegir presidente y vicepresidente (variación), acá
  ningún miembro del comité tiene un rol distinto de los demás.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  mazo: uno_de([10, 12, 15])
  mano: uno_de([2, 3])

respuesta: combinations(mazo, mano)
tipo: input

enunciado: "De un mazo de {mazo} cartas distintas, ¿de cuántas formas se pueden elegir {mano} cartas (sin importar el orden en que se las reciba)?"

pasos:
  - "C({mazo}, {mano}) = {combinations(mazo, mano)}"

explicacion: |
  Una mano de cartas es el ejemplo clásico de combinación: no importa
  en qué orden llegaron a la mano.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "C(n, k) es siempre igual a C(n, n−k) — elegir k para incluir es lo mismo que elegir n−k para dejar afuera."

explicacion: |
  Son la misma partición del conjunto en dos partes, mirada desde
  cualquiera de los dos lados.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([8, 9, 10])
  k: uno_de([2, 3])

respuesta: combinations(n, n - k)
tipo: input

enunciado: "Si C({n}, {k}) = {combinations(n, k)}, ¿cuánto es C({n}, {n}−{k})?"

pasos:
  - "Por la propiedad simétrica, C({n}, {n}−{k}) = C({n}, {k}) = {combinations(n, n - k)}"

explicacion: |
  Elegir {k} para incluir de un total de {n} es lo mismo que elegir
  {n}−{k} para dejar afuera.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "ordenar"]

enunciado: "Ordená los pasos para calcular C(n, k) a partir de la variación correspondiente."
tipo: ordenar
opciones_explicitas:
  - "Dividir esa variación por k! (las formas de ordenar los k elementos elegidos)"
  - "Calcular la variación V(n, k) = n! / (n−k)!"
  - "El resultado de esa división es C(n, k)"
respuesta_orden:
  - "Calcular la variación V(n, k) = n! / (n−k)!"
  - "Dividir esa variación por k! (las formas de ordenar los k elementos elegidos)"
  - "El resultado de esa división es C(n, k)"

explicacion: |
  La combinación se obtiene corrigiendo la variación por el
  sobre-conteo de los distintos órdenes.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones", "problema"]

variables:
  n: uno_de([7, 8, 9])
  k: uno_de([2, 3])

respuesta: combinations(n, k) * factorial(k)
tipo: input

enunciado: "Si C({n}, {k}) = {combinations(n, k)}, ¿cuánto vale la variación V({n}, {k}) (multiplicando la combinación por las formas de ordenar los {k} elementos)?"

pasos:
  - "V({n}, {k}) = C({n}, {k}) × {k}! = {combinations(n, k)} × {factorial(k)} = {combinations(n, k) * factorial(k)}"

explicacion: |
  Es la relación inversa a la fórmula de combinaciones: V = C × k!.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

enunciado: "¿Por qué la fórmula de combinaciones divide la variación por k!?"
tipo: mc
opciones_explicitas:
  - "Porque cada combinación de k elementos corresponde a k! variaciones distintas (todos los órdenes posibles de esos mismos elementos), y hay que corregir ese sobre-conteo"
  - "Porque k! siempre es un número muy grande y hay que reducir el resultado"
  - "No hay ninguna razón matemática, es sólo una convención arbitraria"
respuesta: "Porque cada combinación de k elementos corresponde a k! variaciones distintas (todos los órdenes posibles de esos mismos elementos), y hay que corregir ese sobre-conteo"

explicacion: |
  Sin dividir, se estaría contando la misma combinación una vez por
  cada orden posible de sus elementos.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: n
tipo: input

enunciado: "¿Cuántas combinaciones de 1 solo elemento hay en un conjunto de {n} elementos?"

pasos:
  - "C({n}, 1) = {n} (elegir uno solo, sin nada más que decidir)"

explicacion: |
  Con k=1 no hay orden ni repetición que considerar: el resultado es
  simplemente n.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: 1
tipo: input

enunciado: "¿Cuántas combinaciones de {n} elementos hay en un conjunto de {n} elementos (elegirlos todos)?"

explicacion: |
  Sólo hay una forma de 'elegir a todos' — no hay ninguna decisión
  real que tomar.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "intermedio"
  tags: ["combinaciones", "problema"]

variables:
  n: random(5, 20)

respuesta: 1
tipo: input

enunciado: "Por convención, ¿cuántas combinaciones de 0 elementos hay en un conjunto de {n} elementos?"

explicacion: |
  C(n, 0) = 1 — hay exactamente una forma de 'no elegir nada' (el
  conjunto vacío).
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para los mismos n y k, C(n,k) siempre es menor o igual que V(n,k)."

explicacion: |
  La combinación es la variación dividida por k! (que es 1 o mayor),
  así que nunca puede ser mayor.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "aplicacion"]

enunciado: "En una lotería donde se elige un grupo de números sin importar el orden en que salen, ¿qué hay que calcular para saber cuántos resultados distintos son posibles?"
tipo: mc
opciones_explicitas:
  - "Una combinación: no importa el orden en que salen los números, sólo cuáles salen"
  - "Una variación, porque el orden de salida sí importa"
  - "Una simple multiplicación de la cantidad de números por sí misma"
respuesta: "Una combinación: no importa el orden en que salen los números, sólo cuáles salen"

explicacion: |
  Ganar con los números 5-12-23 es lo mismo que ganar con 23-5-12: el
  orden de salida no cambia el resultado del sorteo.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  total_numeros: uno_de([20, 25, 30])
  elegidos: uno_de([3, 4])

respuesta: combinations(total_numeros, elegidos)
tipo: input

enunciado: "Una lotería sortea {elegidos} números distintos de un total de {total_numeros} números posibles (sin importar el orden). ¿Cuántos resultados de sorteo distintos son posibles?"

pasos:
  - "C({total_numeros}, {elegidos}) = {combinations(total_numeros, elegidos)}"

explicacion: |
  Es exactamente el mismo cálculo que un comité o una mano de cartas.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["combinaciones", "aplicacion"]

enunciado: "¿Para qué se usan las combinaciones en problemas de probabilidad compuesta (por ejemplo, probabilidades genéticas en Biología)?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántos casos favorables y cuántos casos totales hay, sin necesidad de enumerarlos todos, y así calcular la probabilidad como un cociente"
  - "Sólo sirven para calcular promedios de datos"
  - "No tienen ninguna aplicación en probabilidad"
respuesta: "Para contar cuántos casos favorables y cuántos casos totales hay, sin necesidad de enumerarlos todos, y así calcular la probabilidad como un cociente"

explicacion: |
  Es el puente directo hacia Probabilidad compuesta (Tronco 4.b).
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  puntos: uno_de([6, 7, 8, 9])

respuesta: combinations(puntos, 3)
tipo: input

enunciado: "Hay {puntos} puntos marcados en una hoja, ninguno alineado con otros dos. ¿Cuántos triángulos distintos se pueden formar uniendo 3 de esos puntos?"

pasos:
  - "Cada triángulo es un grupo de 3 puntos, sin importar el orden en que se los nombre: C({puntos}, 3) = {combinations(puntos, 3)}"

explicacion: |
  Un triángulo con vértices A, B, C es el mismo triángulo sin importar
  en qué orden se mencionen los vértices — por eso es combinación, no
  variación.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "variaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Para k=1, la combinación C(n,1) y la variación V(n,1) dan exactamente el mismo resultado (ambas son n)."

explicacion: |
  Con un solo elemento elegido no hay ningún orden que definir, así
  que dividir por 1! (=1) no cambia nada.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([9, 10, 11])
  k: uno_de([3, 4])

respuesta: combinations(n - 1, k - 1)
tipo: input

enunciado: "De un grupo de {n} personas, se va a elegir un comité de {k}, con la condición de que una persona específica (el director) SIEMPRE tiene que estar incluida. ¿Cuántos comités distintos son posibles?"

pasos:
  - "El director ya está incluido: sólo hay que elegir los {k}−1 restantes entre las otras {n}−1 personas"
  - "C({n}−1, {k}−1) = {combinations(n - 1, k - 1)}"

explicacion: |
  Fijar un elemento reduce el problema a elegir el resto entre los que
  quedan disponibles.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones"]

respuesta: verdadero
tipo: vf

enunciado: "Sin la fórmula de combinaciones, calcular la probabilidad de sucesos compuestos (como extraer varias cartas de un mismo color) quedaría condenado a enumerar caso por caso."

explicacion: |
  Para conjuntos grandes, enumerar deja de ser viable — combinaciones
  resuelve el conteo sin listar nada.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "avanzado"
  tags: ["combinaciones", "problema"]

variables:
  n: uno_de([10, 12, 14])

respuesta: combinations(n, 2) + combinations(n, 3)
tipo: input

enunciado: "De un grupo de {n} personas, se quiere saber cuántos comités posibles hay en total, contando tanto los comités de 2 personas como los de 3 personas (cada tamaño por separado, sumados al final). ¿Cuál es ese total?"

pasos:
  - "Comités de 2: C({n}, 2) = {combinations(n, 2)}"
  - "Comités de 3: C({n}, 3) = {combinations(n, 3)}"
  - "Total = {combinations(n, 2)} + {combinations(n, 3)} = {combinations(n, 2) + combinations(n, 3)}"

explicacion: |
  Como son comités de tamaños distintos (no se solapan entre sí), se
  suman directo las dos cantidades.
```

```
metadata:
  materia: "matematicas"
  tema: "combinaciones"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve calcular combinaciones?"
tipo: mc
opciones_explicitas:
  - "Para contar cuántas formas hay de elegir una parte de un conjunto SIN importar el orden, sin repetir elementos"
  - "Sólo sirve cuando el orden de la elección es importante"
  - "Sólo aplica a conjuntos de cartas de juego"
respuesta: "Para contar cuántas formas hay de elegir una parte de un conjunto SIN importar el orden, sin repetir elementos"

explicacion: |
  Cierra el tronco de Conjuntos y combinatoria (4.a), y es la puerta
  directa hacia Probabilidad compuesta (Tronco 4.b).
```
