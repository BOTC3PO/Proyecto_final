# Matemática — Grafos: vértices y aristas (cuestionario, 20 preguntas VBLang)

> Tema: `GRAF1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un grafo

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["grafos", "vocabulario"]

enunciado: "¿Qué es un grafo?"
tipo: mc
opciones_explicitas:
  - "Una estructura formada por un conjunto de vértices (puntos) y un conjunto de aristas (conexiones entre pares de vértices)"
  - "Una tabla de valores numéricos ordenados en filas y columnas"
  - "Otro nombre para un gráfico de barras o de líneas"
respuesta: "Una estructura formada por un conjunto de vértices (puntos) y un conjunto de aristas (conexiones entre pares de vértices)"

explicacion: |
  No confundir con 'gráfico' en el sentido de `../leer-grafico/barras/`
  — acá 'grafo' es una estructura de vértices y conexiones.
```

### 2 — Qué es un vértice

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es un vértice en un grafo?"
tipo: mc
opciones_explicitas:
  - "Cada uno de los 'puntos' o nodos del grafo"
  - "Cada una de las conexiones entre dos puntos"
  - "La cantidad total de conexiones del grafo"
respuesta: "Cada uno de los 'puntos' o nodos del grafo"

explicacion: |
  También se le llama 'nodo'.
```

### 3 — Qué es una arista

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es una arista en un grafo?"
tipo: mc
opciones_explicitas:
  - "Una conexión entre dos vértices"
  - "Otro nombre para un vértice aislado"
  - "La cantidad total de vértices del grafo"
respuesta: "Una conexión entre dos vértices"

explicacion: |
  También se le llama 'borde' o 'arco'.
```

### 4 — Qué es el grado de un vértice

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "vocabulario"]

enunciado: "¿Qué es el 'grado' de un vértice?"
tipo: mc
opciones_explicitas:
  - "La cantidad de aristas que tocan a ese vértice"
  - "La cantidad total de vértices del grafo completo"
  - "La distancia más corta hasta otro vértice"
respuesta: "La cantidad de aristas que tocan a ese vértice"

explicacion: |
  Un vértice con grado 3 tiene exactamente 3 aristas conectadas a él.
```

### 5 — Qué son vértices adyacentes

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Cuándo se dice que dos vértices son 'adyacentes'?"
tipo: mc
opciones_explicitas:
  - "Cuando hay una arista directa que los conecta"
  - "Cuando tienen exactamente el mismo grado"
  - "Cuando están dibujados uno al lado del otro en el papel"
respuesta: "Cuando hay una arista directa que los conecta"

explicacion: |
  También se dice que son 'vecinos'. La posición en el dibujo no
  importa, sólo la conexión real.
```

### 6 — Problema: contar aristas dado el grado de cada vértice

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  grafos: [{vertices: 4, grados: [2, 2, 2, 2]}, {vertices: 5, grados: [1, 3, 2, 1, 1]}, {vertices: 4, grados: [1, 3, 1, 1]}]
  idx: uno_de([0, 1, 2])

respuesta: sumar(grafos[idx].grados) / 2
tipo: input

enunciado: "Un grafo con {grafos[idx].vertices} vértices tiene los siguientes grados: {grafos[idx].grados}. ¿Cuántas aristas tiene el grafo?"

pasos:
  - "Suma de los grados = {sumar(grafos[idx].grados)}"
  - "Aristas = suma de grados / 2 = {sumar(grafos[idx].grados) / 2}"

explicacion: |
  Cada arista se cuenta dos veces al sumar los grados (una vez por
  cada extremo) — por eso se divide por 2.
```

### 7 — La suma de los grados siempre es par

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los grados de TODOS los vértices de un grafo siempre da un número par, sin excepción."

explicacion: |
  Es el 'lema del apretón de manos': cada arista aporta exactamente 2
  al total (1 por cada extremo).
```

### 8 — Completar: fórmula de suma de grados

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "completar"]

tipo: completar
enunciado: "Completá: la suma de los grados de todos los vértices de un grafo es igual a ___ veces la cantidad de aristas."
respuestas_validas:
  - "2"
  - "dos"

explicacion: |
  suma de grados = 2 × cantidad de aristas.
```

### 9 — Problema: calcular el grado promedio

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  grafos: [{vertices: 4, grados: [2, 2, 2, 2]}, {vertices: 5, grados: [1, 3, 2, 1, 1]}, {vertices: 4, grados: [1, 3, 1, 1]}]
  idx: uno_de([0, 1, 2])

respuesta: redondear(promedio(grafos[idx].grados), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con los grados {grafos[idx].grados} de un grafo de {grafos[idx].vertices} vértices, ¿cuál es el grado promedio de sus vértices?"

pasos:
  - "Grado promedio = promedio({grafos[idx].grados}) = {redondear(promedio(grafos[idx].grados), 2)}"

explicacion: |
  Es el mismo cálculo de `../media-mediana-y-moda/`, aplicado a la
  lista de grados.
```

### 10 — Problema: contar aristas de un grafo descrito

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["problema"]

respuesta: 5
tipo: input

enunciado: "Un grafo tiene vértices A, B, C, D y las siguientes aristas: A-B, B-C, C-D, D-A, A-C. ¿Cuántas aristas tiene en total?"

explicacion: |
  Se cuentan directo las conexiones listadas: 5 aristas.
```

### 11 — Problema: grado de un vértice específico

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "problema"]

respuesta: 3
tipo: input

enunciado: "En el grafo con aristas A-B, B-C, C-D, D-A, A-C, ¿cuál es el grado del vértice A?"

pasos:
  - "Las aristas que tocan a A son: A-B, D-A, A-C — 3 aristas"

explicacion: |
  Se cuentan sólo las aristas que tienen a A en alguno de sus dos
  extremos.
```

### 12 — Aplicación real: red social como grafo

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En una red social modelada como grafo, ¿qué representan los vértices y qué representan las aristas?"
tipo: mc
opciones_explicitas:
  - "Los vértices son las personas (perfiles); las aristas son las relaciones de amistad o de seguimiento entre ellas"
  - "Los vértices son las publicaciones; las aristas son los 'me gusta'"
  - "No se puede modelar una red social como un grafo"
respuesta: "Los vértices son las personas (perfiles); las aristas son las relaciones de amistad o de seguimiento entre ellas"

explicacion: |
  Es el ejemplo más citado de aplicación real de teoría de grafos.
```

### 13 — Aplicación real: mapa de rutas como grafo

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En un mapa de rutas modelado como grafo, ¿qué representan los vértices y qué representan las aristas?"
tipo: mc
opciones_explicitas:
  - "Los vértices son las ciudades; las aristas son los caminos directos entre pares de ciudades"
  - "Los vértices son los caminos; las aristas son las ciudades"
  - "Un mapa de rutas no se puede representar como un grafo"
respuesta: "Los vértices son las ciudades; las aristas son los caminos directos entre pares de ciudades"

explicacion: |
  Es la base de cualquier GPS o app de rutas: encontrar el mejor
  camino en un grafo de ciudades conectadas.
```

### 14 — Relación con conjuntos

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["conjuntos", "aplicacion"]

enunciado: "¿Qué relación tiene un grafo con `../conjuntos-pertenencia-e-inclusion/`?"
tipo: mc
opciones_explicitas:
  - "Un grafo es un conjunto de vértices, junto con una relación (las aristas) entre pares de ellos — la misma idea de conjuntos aplicada a modelar conexiones"
  - "No tiene ninguna relación real con los conjuntos"
  - "Un grafo reemplaza por completo la necesidad de conjuntos"
respuesta: "Un grafo es un conjunto de vértices, junto con una relación (las aristas) entre pares de ellos — la misma idea de conjuntos aplicada a modelar conexiones"

explicacion: |
  Es el prerrequisito formal de este módulo.
```

### 15 — Formas de representar un grafo

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["representacion", "vocabulario"]

enunciado: "¿Cuáles son formas válidas de representar un grafo?"
tipo: mc
opciones_explicitas:
  - "Un dibujo de puntos y líneas, una lista de aristas, o una matriz de adyacencia"
  - "Sólo se puede representar con un dibujo, no hay otra forma"
  - "Sólo se puede representar con una fórmula algebraica"
respuesta: "Un dibujo de puntos y líneas, una lista de aristas, o una matriz de adyacencia"

explicacion: |
  La matriz de adyacencia es la forma que más se usa para procesar
  grafos por computadora.
```

### 16 — Problema: grafo sin ninguna arista

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "problema"]

respuesta: 0
tipo: input

enunciado: "Un grafo tiene 5 vértices y ninguna arista (todos están aislados entre sí). ¿Cuál es el grado de cualquiera de sus vértices?"

explicacion: |
  Sin ninguna arista que lo toque, el grado de cada vértice es 0.
```

### 17 — Problema: vértice con grado máximo posible

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  vertices: uno_de([4, 5, 6])

respuesta: vertices - 1
tipo: input

enunciado: "En un grafo de {vertices} vértices, sin conexiones repetidas ni un vértice conectado consigo mismo, ¿cuál es el grado MÁXIMO posible que puede tener un vértice?"

pasos:
  - "Como mucho, se conecta con todos los demás vértices: {vertices} − 1 = {vertices - 1}"

explicacion: |
  Un vértice no puede conectarse consigo mismo ni tener dos aristas
  distintas hacia el mismo vecino, así que el máximo es 'todos los
  demás vértices'.
```

### 18 — Un vértice puede tener grado 0

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado"]

respuesta: verdadero
tipo: vf

enunciado: "Un vértice puede tener grado 0 (estar completamente aislado, sin ninguna arista que lo conecte a otro vértice)."

explicacion: |
  Un grafo no tiene por qué tener todos sus vértices conectados entre
  sí — eso se retoma en `../caminos-y-ciclos/` y
  `../arboles-grafo-sin-ciclos/`.
```

### 19 — Aplicación real: red de computadoras

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En una red de computadoras modelada como grafo, si un dispositivo tiene grado 5, ¿qué significa?"
tipo: mc
opciones_explicitas:
  - "Que ese dispositivo tiene 5 conexiones directas (cables o inalámbricas) hacia otros dispositivos de la red"
  - "Que ese dispositivo procesa 5 veces más rápido que los demás"
  - "Que la red tiene en total 5 dispositivos"
respuesta: "Que ese dispositivo tiene 5 conexiones directas (cables o inalámbricas) hacia otros dispositivos de la red"

explicacion: |
  Es la aplicación directa del concepto de grado a una red real.
```

### 20 — Cierre: para qué sirve la teoría de grafos

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve modelar una situación como un grafo (vértices y aristas)?"
tipo: mc
opciones_explicitas:
  - "Para representar y analizar matemáticamente cualquier sistema de 'cosas conectadas entre sí': redes sociales, mapas de rutas, redes de computadoras, y muchos otros sistemas"
  - "Sólo sirve para dibujar diagramas, sin ninguna utilidad de cálculo"
  - "Sólo se aplica a problemas de geometría"
respuesta: "Para representar y analizar matemáticamente cualquier sistema de 'cosas conectadas entre sí': redes sociales, mapas de rutas, redes de computadoras, y muchos otros sistemas"

explicacion: |
  Es el vocabulario base para `../grafos-dirigidos-no-dirigidos-y-ponderados/`,
  `../caminos-y-ciclos/`, `../arboles-grafo-sin-ciclos/` y
  `../algoritmos-de-recorrido-bfs-dfs/`.
```
