# Matemática — Algoritmos de recorrido: BFS y DFS (cuestionario, 20 preguntas VBLang)

> Tema: `GRAF5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un algoritmo de recorrido

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

### 2 — Qué hace BFS

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

### 3 — Qué hace DFS

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

### 4 — Qué estructura de datos usa BFS

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

### 5 — Qué estructura de datos usa DFS

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

### 6 — BFS garantiza el camino más corto

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

### 7 — Problema: orden de recorrido BFS

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

### 8 — Problema: orden de recorrido DFS

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

### 9 — Problema: longitud del camino más corto según BFS

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

### 10 — DFS no garantiza el camino más corto

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

### 11 — Aplicación real: grados de separación

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

### 12 — Aplicación real: explorar un árbol de decisiones completo

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

### 13 — Relación con enrutamiento de redes

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

### 14 — Problema: nivel de un vértice en BFS

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

### 15 — Ambos algoritmos visitan cada vértice una sola vez

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

### 16 — La diferencia clave entre BFS y DFS

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

### 17 — Aplicación real: detectar ciclos con DFS

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

### 18 — Problema: comparar el orden de visita de F

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

### 19 — DFS puede implementarse con recursión

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

### 20 — Cierre: para qué sirven BFS y DFS

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
