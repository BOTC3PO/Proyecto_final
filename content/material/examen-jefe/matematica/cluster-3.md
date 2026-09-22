# Examen jefe — [PENDIENTE #603]

> Logro #603. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **107 preguntas totales** en 5/5 secciones.

---

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

## Sección: leer-grafico/barras (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "vocabulario"]

enunciado: "En un gráfico de barras, ¿qué representa la altura (o longitud) de cada barra?"
tipo: mc
opciones_explicitas:
  - "El valor numérico de esa categoría"
  - "El orden en que aparece la categoría"
  - "El color de la categoría"
respuesta: "El valor numérico de esa categoría"

explicacion: |
  Cuanto más alta la barra, mayor el valor que representa.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "vocabulario"]

enunciado: "¿Qué tipo de dato suele ir en el eje que NO mide altura (categorías)?"
tipo: mc
opciones_explicitas:
  - "Categorías sin un orden numérico propio (productos, colores, nombres)"
  - "Siempre el tiempo, en orden cronológico"
  - "Siempre porcentajes que suman 100%"
respuesta: "Categorías sin un orden numérico propio (productos, colores, nombres)"

explicacion: |
  A diferencia de un gráfico de líneas, el orden de las barras no
  tiene por qué representar una secuencia numérica.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

variables:
  datos: [{producto: "Camisas", ventas: 45}, {producto: "Pantalones", ventas: 30}, {producto: "Camperas", ventas: 15}, {producto: "Zapatos", ventas: 25}]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx].ventas
tipo: input
unidad: "unidades"

enunciado: "Un gráfico de barras muestra las ventas del mes: Camisas 45, Pantalones 30, Camperas 15, Zapatos 25. ¿Cuántas unidades de {datos[idx].producto} se vendieron?"

explicacion: |
  Se lee la altura de la barra correspondiente a esa categoría.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "En el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿qué producto tiene la barra más alta?"
tipo: mc
opciones_explicitas:
  - "Camisas"
  - "Pantalones"
  - "Zapatos"
respuesta: "Camisas"

explicacion: |
  45 es el valor más alto de los cuatro.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 30
tipo: input

enunciado: "Con el mismo gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuál es la diferencia entre la barra más alta y la más baja?"

pasos:
  - "Más alta: Camisas (45). Más baja: Camperas (15)."
  - "Diferencia = 45 − 15 = 30"

explicacion: |
  Se identifican los dos extremos y se resta.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Cada barra de un gráfico de barras corresponde exactamente a una fila de una tabla: la categoría es el nombre de la fila, y la altura es el valor de la columna graficada."

explicacion: |
  Es la misma información que una tabla, sólo que dibujada.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Un gráfico de barras puede dibujarse con barras horizontales (en vez de verticales) — la lógica de lectura es la misma, sólo cambia la orientación."

explicacion: |
  Se usa sobre todo cuando los nombres de las categorías son largos y
  no entran bien debajo de una barra vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "ordenar"]

enunciado: "Ordená los pasos para leer el valor exacto de una barra en un gráfico."
tipo: ordenar
opciones_explicitas:
  - "Leer el número donde esa altura coincide con el eje numérico"
  - "Identificar la barra correspondiente a la categoría que interesa"
  - "Seguir su altura (o longitud) hasta el eje que tiene los números"
respuesta_orden: ["Identificar la barra correspondiente a la categoría que interesa", "Seguir su altura (o longitud) hasta el eje que tiene los números", "Leer el número donde esa altura coincide con el eje numérico"]
explicacion: |
  Sin identificar primero la barra correcta, no hay altura que seguir.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "aplicacion"]

enunciado: "¿Por qué los resultados electorales suelen mostrarse con un gráfico de barras (una barra por candidato o partido)?"
tipo: mc
opciones_explicitas:
  - "Porque permite comparar de un vistazo cuántos votos sacó cada candidato, sin un orden numérico entre ellos"
  - "Porque los votos siempre cambian con el tiempo, como en un gráfico de líneas"
  - "Porque las barras muestran directamente porcentajes que suman 100%"
respuesta: "Porque permite comparar de un vistazo cuántos votos sacó cada candidato, sin un orden numérico entre ellos"

explicacion: |
  Los candidatos son categorías, no una secuencia temporal ni
  proporciones de un total (eso sería más propio de una torta).
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 60
tipo: input

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuántas unidades se vendieron entre Camperas y Zapatos juntos?"

pasos:
  - "15 + 25 = 40"

explicacion: |
  Se suman los valores de las dos barras correspondientes.

```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: falso
tipo: vf

enunciado: "Un gráfico de barras siempre muestra cómo cambia un valor a lo largo del tiempo."

explicacion: |
  Es falso en general: las categorías de un gráfico de barras
  usualmente no tienen relación temporal entre sí (aunque se puede usar
  para comparar el mismo dato en distintos años, ese no es su uso
  típico ni exclusivo).
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿qué producto tiene la barra más baja?"
tipo: mc
opciones_explicitas:
  - "Camperas"
  - "Zapatos"
  - "Pantalones"
respuesta: "Camperas"

explicacion: |
  15 es el valor más bajo de los cuatro.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "vocabulario"]

enunciado: "¿Para qué sirve un gráfico de barras AGRUPADAS (dos barras juntas por cada categoría, de colores distintos)?"
tipo: mc
opciones_explicitas:
  - "Para comparar dos series de datos distintas (por ejemplo, ventas de este año contra el año pasado) para cada categoría"
  - "Para mostrar el promedio de todas las categorías juntas"
  - "Es exactamente lo mismo que un gráfico de líneas"
respuesta: "Para comparar dos series de datos distintas (por ejemplo, ventas de este año contra el año pasado) para cada categoría"

explicacion: |
  Cada categoría tiene dos barras (o más) en vez de una, una por cada
  serie que se está comparando.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

variables:
  datos: [{dia: "Lunes", clientes: 80}, {dia: "Martes", clientes: 65}, {dia: "Miércoles", clientes: 95}, {dia: "Jueves", clientes: 70}, {dia: "Viernes", clientes: 120}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: datos[idx].clientes
tipo: input

enunciado: "Un local registra clientes por día: Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120. ¿Cuántos clientes tuvo el {datos[idx].dia}?"

explicacion: |
  Cada barra representa un día, con su cantidad de clientes.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras", "problema"]

enunciado: "Con el gráfico de clientes — Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120 — ¿qué día tuvo más clientes?"
tipo: mc
opciones_explicitas:
  - "Viernes"
  - "Miércoles"
  - "Lunes"
respuesta: "Viernes"

explicacion: |
  120 es el valor más alto de la semana mostrada.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "intermedio"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Si se reordenan las barras de un gráfico (por ejemplo, de mayor a menor), los valores que representa cada una no cambian, sólo el orden en que se presentan."

explicacion: |
  Es la misma idea que reordenar filas de una tabla.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "Sin números en el eje que mide la altura, sólo se puede comparar qué barra es más alta o más baja, pero no leer el valor exacto de ninguna."

explicacion: |
  Los números del eje son los que permiten pasar de 'más alta' a
  'exactamente cuánto'.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 30
tipo: input

enunciado: "Con el gráfico de ventas — Camisas 45, Pantalones 30, Camperas 15, Zapatos 25 — ¿cuál es el promedio de ventas de las 4 categorías?"

pasos:
  - "(45 + 30 + 15 + 25) ÷ 4 = 115 ÷ 4"
  - "= 28,75, redondeado a la unidad más cercana ≈ 30"

explicacion: |
  Sumar todas las barras y dividir por la cantidad de categorías.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["barras", "aplicacion"]

enunciado: "Un gráfico de barras muestra el precio del mismo producto en 4 supermercados distintos. ¿Para qué sirve este gráfico?"
tipo: mc
opciones_explicitas:
  - "Para comparar de un vistazo en qué supermercado el producto es más caro o más barato"
  - "Para mostrar cómo cambió el precio a lo largo del año"
  - "Para mostrar qué porcentaje del gasto total representa ese producto"
respuesta: "Para comparar de un vistazo en qué supermercado el producto es más caro o más barato"

explicacion: |
  Los supermercados son categorías (sin orden numérico entre sí), el
  caso típico de un gráfico de barras.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico de barras simple, lo que importa es la ALTURA de cada barra — el ancho de las barras no representa ningún dato (suele ser sólo estético)."

explicacion: |
  A diferencia de un histograma (donde el ancho también importa), en
  un gráfico de barras categórico sólo la altura tiene significado.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "avanzado"
  tags: ["barras", "problema"]

respuesta: 2
tipo: input

enunciado: "Con el gráfico de clientes — Lunes 80, Martes 65, Miércoles 95, Jueves 70, Viernes 120 — ¿en cuántos días hubo MÁS de 90 clientes?"

pasos:
  - "Miércoles (95) y Viernes (120) superan los 90. Los demás días no."

explicacion: |
  Se revisa cada barra y se cuentan las que cumplen la condición.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_barras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de barras?"
tipo: mc
opciones_explicitas:
  - "Para comparar de un vistazo el valor de distintas categorías, usando la altura de cada barra"
  - "Sólo sirve para mostrar datos que cambian con el tiempo"
  - "Sólo aplica cuando hay exactamente 2 categorías"
respuesta: "Para comparar de un vistazo el valor de distintas categorías, usando la altura de cada barra"

explicacion: |
  Es el hermano de `../lineas/` (para datos en el tiempo) y
  `../torta/` (para proporciones de un total).
```

## Sección: algoritmos-de-recorrido-bfs-dfs (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "basico"
  tags: ["recorrido", "vocabulario"]

enunciado: "¿Qué hace un algoritmo de recorrido de grafos?"
tipo: mc
opciones_explicitas:
  - "Visita sistemáticamente todos los vértices alcanzables desde un vértice inicial, sin repetir ninguno"
  - "Cuenta la cantidad total de vértices de un grafo"
  - "Dibuja el grafo en la pantalla"
respuesta: "Visita sistemáticamente todos los vértices alcanzables desde un vértice inicial, sin repetir ninguno"

explicacion: |
  BFS y DFS son los dos algoritmos estándar, con órdenes de visita
  distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "intermedio"
  tags: ["bfs", "vocabulario"]

enunciado: "¿Cómo explora el grafo el algoritmo BFS (Breadth-First Search)?"
tipo: mc
opciones_explicitas:
  - "Nivel por nivel: primero todos los vecinos directos del inicio, después los vecinos de esos vecinos, y así sucesivamente"
  - "Se mete lo más profundo posible por una rama antes de probar otra"
  - "Visita los vértices en orden alfabético, sin importar las conexiones reales"
respuesta: "Nivel por nivel: primero todos los vecinos directos del inicio, después los vecinos de esos vecinos, y así sucesivamente"

explicacion: |
  BFS = 'recorrido en anchura' — nunca avanza a un nivel más lejano
  sin terminar el actual.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "intermedio"
  tags: ["dfs", "vocabulario"]

enunciado: "¿Cómo explora el grafo el algoritmo DFS (Depth-First Search)?"
tipo: mc
opciones_explicitas:
  - "Se mete lo más profundo posible por una rama, y sólo retrocede (backtrack) cuando no puede avanzar más"
  - "Explora nivel por nivel, como BFS"
  - "Visita únicamente los vértices con grado par"
respuesta: "Se mete lo más profundo posible por una rama, y sólo retrocede (backtrack) cuando no puede avanzar más"

explicacion: |
  DFS = 'recorrido en profundidad' — prioriza avanzar antes que
  explorar todas las opciones del nivel actual.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["bfs", "vocabulario"]

enunciado: "¿Qué estructura de datos usa internamente BFS?"
tipo: mc
opciones_explicitas:
  - "Una cola (FIFO: el primero en entrar es el primero en salir)"
  - "Una pila (LIFO: el último en entrar es el primero en salir)"
  - "Ninguna estructura auxiliar, sólo el grafo original"
respuesta: "Una cola (FIFO: el primero en entrar es el primero en salir)"

explicacion: |
  La cola es lo que fuerza a procesar los vértices en el orden exacto
  en que fueron descubiertos, nivel por nivel.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["dfs", "vocabulario"]

enunciado: "¿Qué estructura de datos usa internamente DFS?"
tipo: mc
opciones_explicitas:
  - "Una pila (LIFO), directa o mediante recursión (que es, en el fondo, una pila implícita)"
  - "Una cola (FIFO), igual que BFS"
  - "Un árbol binario ordenado"
respuesta: "Una pila (LIFO), directa o mediante recursión (que es, en el fondo, una pila implícita)"

explicacion: |
  La pila (o la recursión) es lo que permite 'meterse profundo' y
  luego retroceder al último punto de decisión.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["bfs"]

respuesta: verdadero
tipo: vf

enunciado: "En un grafo NO ponderado, BFS siempre encuentra el camino más corto (menos aristas) desde el vértice inicial hasta cualquier otro vértice."

explicacion: |
  Porque BFS visita los vértices en el orden exacto de su distancia
  (en aristas) al vértice inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["bfs", "problema", "ordenar"]

enunciado: "Grafo con aristas A-B, A-C, B-D, C-E, D-F. Ordená el recorrido BFS empezando desde A (visitando los vecinos disponibles en orden alfabético)."
tipo: ordenar
opciones_explicitas:
  - "A"
  - "C"
  - "E"
  - "B"
  - "F"
  - "D"
respuesta_orden: ["A", "B", "C", "D", "E", "F"]
explicacion: |
  Nivel 0: A. Nivel 1: B, C (vecinos de A). Nivel 2: D (vecino de B),
  E (vecino de C). Nivel 3: F (vecino de D).
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["dfs", "problema", "ordenar"]

enunciado: "Mismo grafo (aristas A-B, A-C, B-D, C-E, D-F). Ordená el recorrido DFS empezando desde A (probando siempre el primer vecino no visitado en orden alfabético, antes de retroceder)."
tipo: ordenar
opciones_explicitas:
  - "F"
  - "A"
  - "C"
  - "D"
  - "B"
  - "E"
respuesta_orden: ["A", "B", "D", "F", "C", "E"]
explicacion: |
  Desde A se mete por B, después por D, después por F (sin más
  vecinos, retrocede); recién ahí vuelve a A para probar C, y de C
  sigue a E.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["bfs", "problema"]

respuesta: 3
tipo: input

enunciado: "En el mismo grafo (aristas A-B, A-C, B-D, C-E, D-F), BFS visita a F recién en el nivel 3. ¿Cuál es la longitud del camino más corto entre A y F?"

pasos:
  - "El único camino de A a F es A-B-D-F: 3 aristas, coincide con el nivel en que BFS descubre a F"

explicacion: |
  El nivel en el que BFS descubre un vértice ES la longitud del
  camino más corto hasta ese vértice.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["dfs"]

respuesta: verdadero
tipo: vf

enunciado: "DFS no garantiza encontrar el camino más corto entre dos vértices — puede llegar a un vértice recorriendo un camino más largo de lo necesario, antes de descubrir uno más directo por otra rama."

explicacion: |
  DFS prioriza 'llegar hasta el final de una rama', no 'la distancia
  mínima' como sí hace BFS.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "basico"
  tags: ["bfs", "aplicacion"]

enunciado: "Una red social quiere calcular 'cuántos grados de separación' hay entre dos usuarios (la cantidad mínima de conexiones intermedias). ¿Qué algoritmo conviene usar?"
tipo: mc
opciones_explicitas:
  - "BFS, porque garantiza encontrar el camino más corto (la menor cantidad de conexiones) entre dos usuarios"
  - "DFS, porque siempre es más rápido que BFS en cualquier grafo"
respuesta: "BFS, porque garantiza encontrar el camino más corto (la menor cantidad de conexiones) entre dos usuarios"

explicacion: |
  Es la aplicación directa de la propiedad de camino más corto de
  BFS.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "basico"
  tags: ["dfs", "aplicacion"]

enunciado: "Un programa necesita explorar TODAS las posibles jugadas de un juego (un árbol de decisiones) hasta llegar a un resultado final en cada rama, antes de pasar a la siguiente. ¿Qué algoritmo se ajusta mejor a esta lógica?"
tipo: mc
opciones_explicitas:
  - "DFS, porque se mete hasta el final de cada rama (cada secuencia completa de jugadas) antes de retroceder y probar otra"
  - "BFS, porque siempre usa menos memoria que DFS en cualquier caso"
respuesta: "DFS, porque se mete hasta el final de cada rama (cada secuencia completa de jugadas) antes de retroceder y probar otra"

explicacion: |
  Es exactamente cómo funcionan muchos algoritmos de juegos (como el
  ajedrez) que exploran variantes completas antes de evaluarlas.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "intermedio"
  tags: ["bfs", "aplicacion"]

enunciado: "¿Qué relación tiene BFS con el enrutamiento de paquetes en una red de computadoras?"
tipo: mc
opciones_explicitas:
  - "Un router que busca el camino más corto para un paquete de datos está, en esencia, corriendo un BFS sobre el grafo de la red — descubre la ruta, no la memoriza de antemano"
  - "No tiene ninguna relación real con el enrutamiento"
  - "El enrutamiento siempre usa DFS, nunca BFS"
respuesta: "Un router que busca el camino más corto para un paquete de datos está, en esencia, corriendo un BFS sobre el grafo de la red — descubre la ruta, no la memoriza de antemano"

explicacion: |
  Es la aplicación mencionada explícitamente en `troncos.md` como
  motivo real para incluir teoría de grafos en el mapa.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["bfs", "problema"]

respuesta: 2
tipo: input

enunciado: "En el grafo con aristas A-B, A-C, B-D, C-E, D-F, ¿en qué nivel del recorrido BFS desde A se descubre al vértice E?"

pasos:
  - "Nivel 0: A. Nivel 1: B, C. Nivel 2: D (vecino de B), E (vecino de C)"

explicacion: |
  E es vecino directo de C, que está en el nivel 1 — así que E queda
  en el nivel 2.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "intermedio"
  tags: ["bfs", "dfs"]

respuesta: verdadero
tipo: vf

enunciado: "Tanto BFS como DFS visitan cada vértice alcanzable exactamente una vez — la diferencia entre ambos está en el ORDEN de esa visita, no en cuáles vértices visitan."

explicacion: |
  Ambos terminan visitando el mismo conjunto de vértices (todos los
  alcanzables desde el inicio), sólo que en secuencias distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "intermedio"
  tags: ["bfs", "dfs"]

enunciado: "¿Cuál es la diferencia clave entre BFS y DFS?"
tipo: mc
opciones_explicitas:
  - "BFS explora 'ancho primero' (nivel por nivel); DFS explora 'profundo primero' (rama por rama hasta el final)"
  - "BFS sólo funciona en grafos dirigidos; DFS sólo en no dirigidos"
  - "No hay ninguna diferencia real, son dos nombres para el mismo algoritmo"
respuesta: "BFS explora 'ancho primero' (nivel por nivel); DFS explora 'profundo primero' (rama por rama hasta el final)"

explicacion: |
  Es la diferencia que da nombre a cada uno: 'breadth' (ancho) vs.
  'depth' (profundidad).
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["dfs", "aplicacion"]

enunciado: "¿Cómo ayuda DFS a detectar si un grafo tiene un ciclo (por ejemplo, una dependencia circular de `../caminos-y-ciclos/`)?"
tipo: mc
opciones_explicitas:
  - "Si durante el recorrido DFS se llega a un vértice que ya está siendo explorado en la rama actual (no sólo ya visitado, sino todavía 'en el camino'), eso significa que hay un ciclo"
  - "DFS no puede usarse para detectar ciclos, sólo BFS puede hacerlo"
  - "Cualquier grafo recorrido con DFS automáticamente deja de tener ciclos"
respuesta: "Si durante el recorrido DFS se llega a un vértice que ya está siendo explorado en la rama actual (no sólo ya visitado, sino todavía 'en el camino'), eso significa que hay un ciclo"

explicacion: |
  Es la base de los algoritmos que detectan dependencias circulares
  en sistemas de compilación.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["bfs", "dfs", "problema"]

respuesta: falso
tipo: vf

enunciado: "En el grafo con aristas A-B, A-C, B-D, C-E, D-F, tanto BFS como DFS visitan al vértice F en la misma POSICIÓN del recorrido (4° vértice visitado en ambos casos)."

explicacion: |
  BFS visita F en la posición 6 (A,B,C,D,E,F); DFS lo visita en la
  posición 4 (A,B,D,F,C,E) — las posiciones NO coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "avanzado"
  tags: ["dfs"]

respuesta: verdadero
tipo: vf

enunciado: "DFS se puede implementar tanto con una pila explícita como con recursión — la recursión funciona porque cada llamada a función usa, internamente, la pila de llamadas del programa."

explicacion: |
  Es por eso que DFS se suele programar de forma más simple que BFS,
  aprovechando la recursión en vez de armar una pila manualmente.
```

```
metadata:
  materia: "matematicas"
  tema: "algoritmos_de_recorrido_bfs_dfs"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven los algoritmos BFS y DFS?"
tipo: mc
opciones_explicitas:
  - "Para recorrer sistemáticamente un grafo completo, encontrar caminos (BFS garantiza el más corto en grafos no ponderados) y resolver problemas como enrutamiento, redes sociales o detección de ciclos"
  - "Sólo sirven para dibujar un grafo de forma más prolija"
  - "Sólo se aplican a grafos con menos de 10 vértices"
respuesta: "Para recorrer sistemáticamente un grafo completo, encontrar caminos (BFS garantiza el más corto en grafos no ponderados) y resolver problemas como enrutamiento, redes sociales o detección de ciclos"

explicacion: |
  Cierra la cadena completa de Tronco 4.c: de vértices y aristas
  sueltos a poder recorrer y resolver problemas reales sobre un
  grafo.
```

## Sección: leer-grafico/lineas (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Qué es un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Un gráfico que conecta con segmentos los puntos de una serie de datos, casi siempre a lo largo del tiempo"
  - "Un gráfico que muestra cada categoría como una porción de un círculo"
  - "Un gráfico que sólo puede tener un único punto"
respuesta: "Un gráfico que conecta con segmentos los puntos de una serie de datos, casi siempre a lo largo del tiempo"

explicacion: |
  La línea conecta los puntos para que se vea la tendencia completa,
  no sólo valores sueltos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Qué tipo de dato suele ir en el eje horizontal de un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Una magnitud continua y ordenada, casi siempre tiempo (horas, meses, años)"
  - "Categorías sin ningún orden entre sí"
  - "Siempre porcentajes que suman 100%"
respuesta: "Una magnitud continua y ordenada, casi siempre tiempo (horas, meses, años)"

explicacion: |
  Por eso tiene sentido "conectar" los puntos: hay un orden real entre
  ellos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

variables:
  datos: [{mes: "Enero", temperatura: 28}, {mes: "Marzo", temperatura: 22}, {mes: "Junio", temperatura: 10}, {mes: "Septiembre", temperatura: 16}, {mes: "Diciembre", temperatura: 26}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: datos[idx].temperatura
tipo: input
unidad: "°C"

enunciado: "Un gráfico de líneas muestra la temperatura promedio mensual: Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C. ¿Cuál fue la temperatura en {datos[idx].mes}?"

explicacion: |
  Se busca el punto correspondiente a ese mes y se lee su altura en
  el eje de temperatura.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con el gráfico de temperatura — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿qué pasa entre Enero y Junio?"
tipo: mc
opciones_explicitas:
  - "La temperatura baja"
  - "La temperatura sube"
  - "La temperatura se mantiene igual"
respuesta: "La temperatura baja"

explicacion: |
  De 28°C a 10°C la línea desciende — es la mitad del año que va del
  verano al invierno.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con el mismo gráfico — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿cuál es el mes más frío de los mostrados?"
tipo: mc
opciones_explicitas:
  - "Junio"
  - "Septiembre"
  - "Marzo"
respuesta: "Junio"

explicacion: |
  10°C es el valor más bajo de la serie — es el punto más bajo (valle)
  de la línea.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "completar"]

tipo: completar
enunciado: "Completá: un punto de la línea notablemente más bajo que sus vecinos se llama un ___ (lo opuesto de un pico)."
respuestas_validas:
  - "valle"

explicacion: |
  Pico (más alto) y valle (más bajo) son los dos extremos que suele
  destacarse al leer una línea.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 18
tipo: input

enunciado: "Con el gráfico de temperatura — Enero 28°C, Marzo 22°C, Junio 10°C, Septiembre 16°C, Diciembre 26°C — ¿cuál es la diferencia entre el mes más caluroso y el más frío?"

pasos:
  - "Más caluroso: Enero (28°C). Más frío: Junio (10°C)."
  - "Diferencia = 28 − 10 = 18"

explicacion: |
  Se identifican los dos extremos de la línea y se restan.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "ordenar"]

enunciado: "Ordená los pasos para leer el valor de un gráfico de líneas en un momento determinado."
tipo: ordenar
opciones_explicitas:
  - "Leer el número donde esa línea vertical cruza a la línea del gráfico"
  - "Ubicar ese momento (por ejemplo, un mes) en el eje horizontal"
  - "Subir en línea vertical imaginaria desde ese punto hasta la línea del gráfico"
respuesta_orden: ["Ubicar ese momento (por ejemplo, un mes) en el eje horizontal", "Subir en línea vertical imaginaria desde ese punto hasta la línea del gráfico", "Leer el número donde esa línea vertical cruza a la línea del gráfico"]
explicacion: |
  Es el mismo procedimiento que leer una barra, pero siguiendo la
  línea en vez de una barra sólida.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "aplicacion"]

enunciado: "¿Por qué la cotización de una moneda a lo largo del año se muestra casi siempre con un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Porque el tiempo (los días del año) es una magnitud continua y ordenada, y la línea muestra la tendencia completa"
  - "Porque las monedas sólo se pueden comparar entre sí, nunca en el tiempo"
  - "Porque un gráfico de líneas siempre suma 100%"
respuesta: "Porque el tiempo (los días del año) es una magnitud continua y ordenada, y la línea muestra la tendencia completa"

explicacion: |
  Es el caso de uso típico: ver cómo evoluciona un valor a lo largo
  del tiempo.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Que la línea termine más arriba de donde empezó no significa que haya subido de forma constante todo el tiempo — puede haber bajado y vuelto a subir en el medio."

explicacion: |
  Hay que mirar la forma completa de la línea, no sólo los dos
  extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

variables:
  datos: [{mes: "Enero", ventas: 200}, {mes: "Febrero", ventas: 250}, {mes: "Marzo", ventas: 180}, {mes: "Abril", ventas: 300}]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx].ventas
tipo: input

enunciado: "Un gráfico de líneas muestra ventas mensuales: Enero 200, Febrero 250, Marzo 180, Abril 300. ¿Cuánto se vendió en {datos[idx].mes}?"

explicacion: |
  Se lee el punto correspondiente a ese mes.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿entre qué dos meses consecutivos hubo la mayor CAÍDA?"
tipo: mc
opciones_explicitas:
  - "Entre Febrero y Marzo"
  - "Entre Enero y Febrero"
  - "Entre Marzo y Abril"
respuesta: "Entre Febrero y Marzo"

explicacion: |
  De 250 a 180 hay una caída de 70 — la única caída entre esos meses
  (los otros dos tramos suben).
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo gráfico puede tener varias líneas de colores distintos, cada una representando una serie de datos distinta, para comparar sus evoluciones."

explicacion: |
  Por ejemplo, la temperatura de dos ciudades distintas a lo largo del
  mismo año.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 100
tipo: input

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿cuánto creció el valor entre el primer mes (Enero) y el último (Abril)?"

pasos:
  - "Abril − Enero = 300 − 200 = 100"

explicacion: |
  Se compara el primer y el último punto de la serie, ignorando lo que
  pasó en el medio.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "vocabulario"]

enunciado: "¿Cómo se le llama al conjunto completo de puntos que forma una línea en el gráfico?"
tipo: mc
opciones_explicitas:
  - "Una serie de datos"
  - "Un encabezado"
  - "Una celda"
respuesta: "Una serie de datos"

explicacion: |
  Es el mismo término que se usa cuando hay varias líneas
  (series) en un mismo gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar sólo el primer y el último punto de una línea puede dar una idea equivocada de la tendencia real, si en el medio hubo subidas y bajadas grandes."

explicacion: |
  Una línea puede terminar igual que empezó y haber tenido un pico
  enorme en el medio — mirar sólo los extremos no lo muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas", "problema"]

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿cuál fue el mes con más ventas?"
tipo: mc
opciones_explicitas:
  - "Abril"
  - "Febrero"
  - "Enero"
respuesta: "Abril"

explicacion: |
  300 es el valor más alto de la serie.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "intermedio"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "Un tramo de la línea completamente horizontal significa que el valor se mantuvo igual entre esos dos puntos."

explicacion: |
  Sin subir ni bajar, el valor permanece constante en ese tramo.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["lineas", "aplicacion"]

enunciado: "¿Por qué el crecimiento de la población de una ciudad a lo largo de las décadas se muestra con un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Porque el tiempo (las décadas) es continuo y ordenado, y permite ver la tendencia de crecimiento completa"
  - "Porque la población siempre suma 100% del total del país"
  - "Porque no hay otra forma de mostrar ese dato"
respuesta: "Porque el tiempo (las décadas) es continuo y ordenado, y permite ver la tendencia de crecimiento completa"

explicacion: |
  Es el mismo motivo por el que se usa para temperatura o cotizaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas", "problema"]

respuesta: 2
tipo: input

enunciado: "Con las ventas — Enero 200, Febrero 250, Marzo 180, Abril 300 — ¿en cuántos meses las ventas superaron las 240 unidades?"

pasos:
  - "Febrero (250) y Abril (300) superan las 240. Enero (200) y Marzo (180) no."

explicacion: |
  Se revisa cada punto de la serie y se cuentan los que cumplen la
  condición.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "avanzado"
  tags: ["lineas"]

respuesta: verdadero
tipo: vf

enunciado: "El segmento entre dos puntos consecutivos de un gráfico de líneas es una aproximación visual — no garantiza que el valor real haya seguido exactamente esa recta entre ambos momentos."

explicacion: |
  Sólo se conocen con certeza los valores en los puntos medidos; lo de
  en el medio es interpolación visual, no un dato medido de verdad.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_lineas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de líneas?"
tipo: mc
opciones_explicitas:
  - "Para ver la evolución de un valor a lo largo del tiempo, y detectar tendencias, picos y valles"
  - "Sólo sirve para comparar categorías sin relación entre sí"
  - "Sólo aplica cuando los datos suman exactamente 100%"
respuesta: "Para ver la evolución de un valor a lo largo del tiempo, y detectar tendencias, picos y valles"

explicacion: |
  Es el hermano de `../barras/` (categorías) y `../torta/`
  (proporciones de un total).
```

## Sección: leer-grafico/torta (23 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta", "vocabulario"]

enunciado: "¿Qué es un gráfico de torta (o circular)?"
tipo: mc
opciones_explicitas:
  - "Un círculo dividido en porciones, donde cada una representa la proporción de una categoría sobre el total"
  - "Un gráfico que conecta puntos con líneas a lo largo del tiempo"
  - "Un gráfico donde cada categoría es una barra de distinta altura"
respuesta: "Un círculo dividido en porciones, donde cada una representa la proporción de una categoría sobre el total"

explicacion: |
  El círculo completo siempre representa el 100% del total.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "En un gráfico de torta, todas las porciones mostradas tienen que sumar exactamente el 100% del total."

explicacion: |
  Si suman menos, falta alguna categoría en el gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta", "completar"]

tipo: completar
enunciado: "Completá: cantidad de la categoría = porcentaje × total / ___."
respuestas_validas:
  - "100"

explicacion: |
  Es la misma fórmula de porcentaje ya conocida, aplicada a una
  porción del gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  porcentaje: uno_de([20, 25, 30, 40])
  total: uno_de([50000, 80000, 100000])

respuesta: porcentaje * total / 100
tipo: input
unidad: "$"

enunciado: "En un gráfico de torta de un presupuesto total de ${total}, la categoría 'Alquiler' ocupa el {porcentaje}% de la torta. ¿A cuánto dinero equivale esa porción?"

pasos:
  - "Cantidad = {porcentaje} × {total} / 100 = {porcentaje * total / 100}"

explicacion: |
  Se aplica el porcentaje directamente sobre el total.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  total: uno_de([200, 400, 500])
  cantidad: uno_de([50, 100])

respuesta: redondear(cantidad * 100 / total, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "De un total de {total} personas encuestadas, {cantidad} eligieron la opción A. ¿Qué porcentaje de la torta representa esa opción?"

pasos:
  - "Porcentaje = {cantidad} × 100 / {total} = {redondear(cantidad * 100 / total, 1)}%"

explicacion: |
  Es la fórmula de porcentaje despejada al revés.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  a: random(20, 35)
  b: random(15, 30)
  c: random(10, 20)

respuesta: 100 - a - b - c
tipo: input
unidad: "%"

enunciado: "Un gráfico de torta tiene 4 categorías. Se sabe que tres de ellas ocupan {a}%, {b}% y {c}% respectivamente. ¿Qué porcentaje ocupa la cuarta categoría?"

pasos:
  - "100 − {a} − {b} − {c} = {100 - a - b - c}%"

explicacion: |
  Como todas las porciones suman 100%, la que falta es lo que resta
  hasta llegar a ese total.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta", "problema"]

variables:
  gastos: [{categoria: "Alquiler", porcentaje: 35}, {categoria: "Comida", porcentaje: 25}, {categoria: "Transporte", porcentaje: 15}, {categoria: "Ocio", porcentaje: 10}, {categoria: "Otros", porcentaje: 15}]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: gastos[idx].porcentaje
tipo: input
unidad: "%"

enunciado: "Un gráfico de torta muestra la distribución de un presupuesto: Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15%. ¿Qué porcentaje ocupa {gastos[idx].categoria}?"

explicacion: |
  Se lee directamente el tamaño de la porción correspondiente.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "Si las porciones mostradas en un gráfico de torta suman menos del 100%, significa que falta alguna categoría (posiblemente agrupada como 'Otros')."

explicacion: |
  El círculo completo siempre debería representar el total.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

enunciado: "¿En qué situación conviene más usar un gráfico de torta?"
tipo: mc
opciones_explicitas:
  - "Cuando hay pocas categorías (hasta 5 o 6) y lo que importa es la proporción de cada una sobre el total"
  - "Cuando se quiere mostrar la evolución de un valor a lo largo del tiempo"
  - "Cuando hay 20 categorías distintas, todas del mismo tamaño"
respuesta: "Cuando hay pocas categorías (hasta 5 o 6) y lo que importa es la proporción de cada una sobre el total"

explicacion: |
  Con muchas categorías chicas, las porciones se vuelven ilegibles.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta"]

enunciado: "¿Por qué no conviene usar un gráfico de torta con 20 categorías distintas, muchas de ellas muy chicas?"
tipo: mc
opciones_explicitas:
  - "Porque las porciones más chicas se vuelven casi imposibles de distinguir o leer a simple vista"
  - "Porque un gráfico de torta nunca puede tener más de 3 categorías"
  - "No hay ningún problema real en hacerlo"
respuesta: "Porque las porciones más chicas se vuelven casi imposibles de distinguir o leer a simple vista"

explicacion: |
  Es un límite práctico de legibilidad, no una regla matemática
  estricta.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "ordenar"]

enunciado: "Ordená los pasos para calcular la cantidad real que representa una porción, dado su porcentaje y el total."
tipo: ordenar
opciones_explicitas:
  - "El resultado es la cantidad real de esa categoría"
  - "Identificar el porcentaje de la porción y el valor del total"
  - "Multiplicar el porcentaje por el total y dividir por 100"
respuesta_orden: ["Identificar el porcentaje de la porción y el valor del total", "Multiplicar el porcentaje por el total y dividir por 100", "El resultado es la cantidad real de esa categoría"]
explicacion: |
  Sin el total, el porcentaje solo no dice cuánto es en cantidad real.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos gráficos de torta representan totales distintos (por ejemplo, presupuestos de distinto tamaño), una porción del 20% en uno no necesariamente es una cantidad mayor que una porción del 30% en el otro."

explicacion: |
  El porcentaje es relativo a SU propio total — sin conocer ambos
  totales, no se puede comparar la cantidad real.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta", "aplicacion"]

enunciado: "¿Para qué sirve un gráfico de torta al mostrar la composición de una población por grupo de edad?"
tipo: mc
opciones_explicitas:
  - "Para mostrar qué proporción del total de la población representa cada grupo de edad"
  - "Para mostrar cómo cambió la población año a año"
  - "Para comparar la población de dos países distintos en números absolutos"
respuesta: "Para mostrar qué proporción del total de la población representa cada grupo de edad"

explicacion: |
  Es el caso de uso típico: proporciones de un total, no evolución en
  el tiempo ni comparación de magnitudes absolutas.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta", "problema"]

enunciado: "Con el gráfico de presupuesto — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — ¿cuál es la categoría con la porción más grande?"
tipo: mc
opciones_explicitas:
  - "Alquiler"
  - "Comida"
  - "Otros"
respuesta: "Alquiler"

explicacion: |
  35% es el valor más alto de las 5 categorías.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

respuesta: 10
tipo: input
unidad: "%"

enunciado: "Con el mismo gráfico — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — ¿cuál es la diferencia de porcentaje entre Alquiler y Comida?"

pasos:
  - "35 − 25 = 10 puntos porcentuales"

explicacion: |
  Se restan directamente los dos porcentajes.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "Una torta con muchas categorías muy chicas (por ejemplo, 15 categorías de 2-3% cada una) es más difícil de leer con precisión que una con pocas categorías grandes."

explicacion: |
  Las porciones muy finitas son difíciles de comparar visualmente
  entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  total: uno_de([60000, 90000, 120000])

respuesta: 40 * total / 100
tipo: input
unidad: "$"

enunciado: "Con el presupuesto — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — y un total de ${total}, ¿cuánto se gasta en Comida y Transporte JUNTOS?"

pasos:
  - "Comida + Transporte = 25% + 15% = 40%"
  - "40% de {total} = {40 * total / 100}"

explicacion: |
  Se suman primero los porcentajes de las categorías que interesan, y
  después se aplica al total.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["torta", "aplicacion"]

enunciado: "Una encuesta muestra en un gráfico de torta qué porcentaje de la gente prefiere cada una de 4 opciones. ¿Qué garantiza el hecho de que sea un gráfico de torta?"
tipo: mc
opciones_explicitas:
  - "Que los 4 porcentajes mostrados suman exactamente 100% de los encuestados"
  - "Que las 4 opciones tienen exactamente el mismo porcentaje"
  - "Que la encuesta se hizo en un solo día"
respuesta: "Que los 4 porcentajes mostrados suman exactamente 100% de los encuestados"

explicacion: |
  Es la propiedad definitoria de este tipo de gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "intermedio"
  tags: ["torta"]

respuesta: verdadero
tipo: vf

enunciado: "La categoría 'Otros' en un gráfico de torta suele agrupar varias categorías chicas en una sola porción, para no saturar el gráfico con muchas porciones diminutas."

explicacion: |
  Es una simplificación visual habitual, no significa que esas
  categorías no existan.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

variables:
  gastos: [{categoria: "Alquiler", porcentaje: 35}, {categoria: "Comida", porcentaje: 25}, {categoria: "Transporte", porcentaje: 15}]
  idx: uno_de([0, 1, 2])
  total: uno_de([40000, 60000, 80000])

respuesta: gastos[idx].porcentaje * total / 100
tipo: input
unidad: "$"

enunciado: "Con el presupuesto — Alquiler 35%, Comida 25%, Transporte 15% — y un total de ${total}, ¿cuánto dinero representa la categoría {gastos[idx].categoria}?"

pasos:
  - "{gastos[idx].porcentaje}% de {total} = {gastos[idx].porcentaje} × {total} / 100 = {gastos[idx].porcentaje * total / 100}"

explicacion: |
  Se aplica la fórmula de porcentaje a cada categoría por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta"]

respuesta: falso
tipo: vf

enunciado: "Un círculo dibujado más grande en un gráfico de torta siempre representa un total mayor que un círculo más chico en otra torta."

explicacion: |
  No necesariamente — el tamaño del dibujo es una decisión visual, no
  garantiza nada sobre el total real que representa, salvo que el
  gráfico lo aclare explícitamente.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "avanzado"
  tags: ["torta", "problema"]

respuesta: 25
tipo: input
unidad: "%"

enunciado: "Con el gráfico — Alquiler 35%, Comida 25%, Transporte 15%, Ocio 10%, Otros 15% — ¿qué porcentaje representan juntas Transporte y Ocio?"

pasos:
  - "Transporte (15%) + Ocio (10%) = 25%"

explicacion: |
  Se suman directamente los dos porcentajes de las categorías
  pedidas.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_grafico_de_torta"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve un gráfico de torta?"
tipo: mc
opciones_explicitas:
  - "Para mostrar qué proporción de un total representa cada categoría, cuando hay pocas categorías"
  - "Para mostrar la evolución de un dato a lo largo del tiempo"
  - "Sólo aplica cuando todas las categorías tienen el mismo tamaño"
respuesta: "Para mostrar qué proporción de un total representa cada categoría, cuando hay pocas categorías"

explicacion: |
  Es el hermano de `../barras/` (comparar categorías) y `../lineas/`
  (evolución en el tiempo) — cierra el trío de gráficos básicos.
```

