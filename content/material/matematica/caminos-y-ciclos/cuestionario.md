# Matemática — Caminos y ciclos (cuestionario, 20 preguntas VBLang)

> Tema: `GRAF3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un camino

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

### 2 — Qué es la longitud de un camino

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

### 3 — Problema: contar la longitud de un camino

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

### 4 — Qué es un ciclo

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

### 5 — Un ciclo es un caso particular de camino

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

### 6 — Problema: identificar un ciclo

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

### 7 — Qué es un grafo acíclico

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

### 8 — Qué es un grafo conexo

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

### 9 — Problema: camino más corto contando aristas

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

### 10 — El camino más corto no siempre es único

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

### 11 — Aplicación real: dependencias circulares en software

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

### 12 — Problema: peso total de un ciclo

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

### 13 — Un camino simple no repite vértices

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

### 14 — Aplicación real: circuito eléctrico

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

### 15 — Problema: identificar si un grafo es acíclico

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

### 16 — Conexo y acíclico son propiedades independientes

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

### 17 — Problema: grafo desconectado

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

### 18 — Problema: comparar longitud de dos caminos

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

### 19 — Aplicación: redes de tuberías con rutas alternativas

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

### 20 — Cierre: para qué sirven caminos y ciclos

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
