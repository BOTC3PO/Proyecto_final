# Matemática — Árboles: grafo conexo sin ciclos (cuestionario, 20 preguntas VBLang)

> Tema: `GRAF4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un árbol

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["arbol", "vocabulario"]

enunciado: "¿Qué es un árbol, en teoría de grafos?"
tipo: mc
opciones_explicitas:
  - "Un grafo que es conexo (hay camino entre cualquier par de vértices) Y acíclico (no tiene ningún ciclo), las dos propiedades a la vez"
  - "Cualquier grafo con más de 10 vértices"
  - "Un grafo dirigido con al menos un ciclo"
respuesta: "Un grafo que es conexo (hay camino entre cualquier par de vértices) Y acíclico (no tiene ningún ciclo), las dos propiedades a la vez"

explicacion: |
  Ninguna de las dos propiedades sola alcanza — hace falta que se
  cumplan ambas.
```

### 2 — Árbol combina conexo y acíclico

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "intermedio"
  tags: ["arbol"]

respuesta: verdadero
tipo: vf

enunciado: "Un árbol es, exactamente, un grafo que combina las dos propiedades de `../caminos-y-ciclos/`: ser conexo y ser acíclico, a la vez."

explicacion: |
  Un grafo conexo con ciclos no es árbol; un grafo acíclico pero
  desconectado tampoco.
```

### 3 — Problema: contar aristas de un árbol

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "intermedio"
  tags: ["arbol", "problema"]

variables:
  vertices: uno_de([5, 7, 10, 12])

respuesta: vertices - 1
tipo: input

enunciado: "Un árbol tiene {vertices} vértices. ¿Cuántas aristas tiene exactamente?"

pasos:
  - "Aristas = vértices − 1 = {vertices} − 1 = {vertices - 1}"

explicacion: |
  Un árbol siempre tiene exactamente n−1 aristas para n vértices, ni
  una más ni una menos.
```

### 4 — Problema: verificar si un grafo podría ser un árbol

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "avanzado"
  tags: ["arbol", "problema"]

variables:
  vertices: 6
  aristas: uno_de([5, 6, 7])

respuesta: aristas == vertices - 1
tipo: vf

enunciado: "Un grafo tiene {vertices} vértices y {aristas} aristas. Sin ver el dibujo, ¿PODRÍA ser un árbol (cumple la cantidad correcta de aristas)?"

explicacion: |
  Sólo con vértices−1 = {vertices - 1} aristas exactas puede llegar a
  ser un árbol — de más o de menos, se descarta sin necesitar mirar el
  dibujo.
```

### 5 — Más de n−1 aristas implica un ciclo

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "avanzado"
  tags: ["arbol", "ciclo"]

respuesta: verdadero
tipo: vf

enunciado: "Si un grafo conexo con n vértices tiene MÁS de n−1 aristas, necesariamente contiene al menos un ciclo."

explicacion: |
  La arista 'de más', sumada a un grafo ya conexo, cierra
  necesariamente algún ciclo.
```

### 6 — Qué es la raíz de un árbol

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es la raíz de un árbol?"
tipo: mc
opciones_explicitas:
  - "El vértice elegido como punto de partida de la jerarquía (por convención, se dibuja arriba)"
  - "El vértice con el grado más bajo del árbol"
  - "Cualquier hoja del árbol"
respuesta: "El vértice elegido como punto de partida de la jerarquía (por convención, se dibuja arriba)"

explicacion: |
  Un mismo árbol puede 'enraizarse' en distintos vértices, dando
  jerarquías distintas.
```

### 7 — Qué es una hoja

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es un nodo 'hoja' en un árbol?"
tipo: mc
opciones_explicitas:
  - "Un vértice sin ningún hijo — el final de una rama"
  - "El vértice raíz del árbol"
  - "Un vértice con exactamente 2 hijos"
respuesta: "Un vértice sin ningún hijo — el final de una rama"

explicacion: |
  Es la contraparte de la raíz: mientras la raíz es el punto de
  partida, las hojas son los puntos finales.
```

### 8 — Padre e hijo

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "En un árbol con raíz elegida, ¿qué relación describe 'padre' e 'hijo'?"
tipo: mc
opciones_explicitas:
  - "Si dos vértices están conectados por una arista y uno está más cerca de la raíz, ese es el padre del otro (su hijo)"
  - "El padre siempre es una hoja del árbol"
  - "Todos los vértices son padres entre sí, sin ninguna jerarquía"
respuesta: "Si dos vértices están conectados por una arista y uno está más cerca de la raíz, ese es el padre del otro (su hijo)"

explicacion: |
  La dirección 'padre → hijo' depende de qué vértice se eligió como
  raíz.
```

### 9 — Problema: contar hojas de un árbol descrito

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "avanzado"
  tags: ["problema"]

respuesta: 3
tipo: input

enunciado: "Un árbol tiene raíz A, con hijos B y C. B tiene hijos D y E (sin más descendientes). C no tiene ningún hijo. ¿Cuántas hojas tiene este árbol?"

pasos:
  - "D, E y C no tienen ningún hijo — son las 3 hojas. A y B sí tienen hijos, no son hojas."

explicacion: |
  Se cuentan sólo los vértices sin ningún hijo.
```

### 10 — Qué es un árbol binario

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "intermedio"
  tags: ["arbol_binario", "vocabulario"]

enunciado: "¿Qué es un árbol binario?"
tipo: mc
opciones_explicitas:
  - "Un árbol donde cada vértice tiene como máximo 2 hijos"
  - "Un árbol con exactamente 2 vértices"
  - "Un árbol donde todos los vértices son hojas"
respuesta: "Un árbol donde cada vértice tiene como máximo 2 hijos"

explicacion: |
  Es la estructura central detrás de muchos algoritmos de búsqueda
  eficientes.
```

### 11 — Aplicación real: sistema de archivos

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué un sistema de archivos (carpetas y subcarpetas) es, en esencia, un árbol?"
tipo: mc
opciones_explicitas:
  - "Porque cada carpeta puede contener subcarpetas (hijos), partiendo de una carpeta raíz única, sin que ninguna subcarpeta termine 'conectada en círculo' de vuelta a una carpeta ancestro"
  - "Porque las carpetas siempre se dibujan con forma triangular"
  - "Un sistema de archivos no tiene ninguna relación con la teoría de grafos"
respuesta: "Porque cada carpeta puede contener subcarpetas (hijos), partiendo de una carpeta raíz única, sin que ninguna subcarpeta termine 'conectada en círculo' de vuelta a una carpeta ancestro"

explicacion: |
  Es exactamente la estructura de raíz, padres, hijos y hojas de este
  módulo.
```

### 12 — Aplicación real: árbol genealógico

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En un árbol genealógico (descendencia de una persona), ¿qué representan los vértices y qué representa la relación padre-hijo?"
tipo: mc
opciones_explicitas:
  - "Los vértices son las personas; la relación padre-hijo del árbol coincide con la relación familiar real de padre/madre e hijo"
  - "Los vértices son los años de nacimiento; no hay ninguna relación de parentesco representada"
respuesta: "Los vértices son las personas; la relación padre-hijo del árbol coincide con la relación familiar real de padre/madre e hijo"

explicacion: |
  Es uno de los usos más antiguos e intuitivos de la estructura de
  árbol.
```

### 13 — Aplicación real: árbol de decisión

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En un árbol de decisión, ¿qué representan los nodos internos y qué representan las hojas?"
tipo: mc
opciones_explicitas:
  - "Los nodos internos son preguntas o decisiones a tomar; las hojas son los resultados finales posibles"
  - "Los nodos internos son los resultados finales; las hojas son las preguntas"
  - "Un árbol de decisión no tiene hojas, sólo nodos internos"
respuesta: "Los nodos internos son preguntas o decisiones a tomar; las hojas son los resultados finales posibles"

explicacion: |
  Cada rama representa una respuesta posible a la pregunta de ese
  nodo.
```

### 14 — Problema: árbol trivial de un solo vértice

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "intermedio"
  tags: ["arbol", "problema"]

respuesta: 0
tipo: input

enunciado: "Un árbol tiene un único vértice (sin ninguna arista). Según la fórmula n−1, ¿cuántas aristas debería tener?"

pasos:
  - "n − 1 = 1 − 1 = 0"

explicacion: |
  Es el caso trivial: un solo vértice ya es, por definición, un árbol
  (conexo consigo mismo, sin ningún ciclo posible).
```

### 15 — Un árbol con un solo vértice es válido

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "avanzado"
  tags: ["arbol"]

respuesta: verdadero
tipo: vf

enunciado: "Un grafo con un único vértice y ninguna arista cumple la definición de árbol: es conexo (trivialmente, no hay otro vértice al que no se pueda 'llegar') y acíclico (no tiene ninguna arista para formar un ciclo)."

explicacion: |
  Es el caso base más chico posible de un árbol.
```

### 16 — Aplicación real: filogenia en Biología

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un árbol filogenético (Biología) agrupa especies según su ancestro común. ¿Por qué es, matemáticamente, un árbol?"
tipo: mc
opciones_explicitas:
  - "Porque tiene una raíz (el ancestro común más antiguo representado) y se ramifica sin volver a juntarse en ningún ciclo, con las especies actuales como hojas"
  - "Porque siempre tiene exactamente 2 especies"
  - "No tiene ninguna relación real con la estructura de árbol de este módulo"
respuesta: "Porque tiene una raíz (el ancestro común más antiguo representado) y se ramifica sin volver a juntarse en ningún ciclo, con las especies actuales como hojas"

explicacion: |
  Es el mismo caso mencionado en `troncos.md` como aplicación de
  teoría de grafos sin nombrarla así en Biología.
```

### 17 — Relación con estructuras de datos

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene una lista enlazada (una estructura de datos donde cada elemento apunta al siguiente) con un árbol?"
tipo: mc
opciones_explicitas:
  - "Es un árbol 'degenerado': cada nodo tiene como mucho un solo hijo, así que el árbol completo es una única cadena lineal, sin ninguna ramificación"
  - "No tiene ninguna relación con la estructura de árbol"
  - "Una lista enlazada siempre tiene ciclos, a diferencia de un árbol"
respuesta: "Es un árbol 'degenerado': cada nodo tiene como mucho un solo hijo, así que el árbol completo es una única cadena lineal, sin ninguna ramificación"

explicacion: |
  Sigue cumpliendo la definición de árbol (conexo, acíclico), sólo
  que sin ninguna rama.
```

### 18 — Problema: nivel de un nodo

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "avanzado"
  tags: ["problema"]

respuesta: 2
tipo: input

enunciado: "En un árbol con raíz A (nivel 0), A tiene hijo B (nivel 1), y B tiene hijo C. ¿En qué nivel está C?"

pasos:
  - "Cada paso hacia abajo desde la raíz suma 1 al nivel: A=0, B=1, C=2"

explicacion: |
  El nivel de un nodo es la longitud del camino desde la raíz hasta
  ese nodo, en cantidad de aristas.
```

### 19 — Un subárbol también es un árbol

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "avanzado"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier vértice de un árbol, junto con todos sus descendientes, forma en sí mismo un árbol más chico (un subárbol) — cumple la misma definición de conexo y acíclico."

explicacion: |
  Es una propiedad que se aprovecha mucho en algoritmos recursivos
  sobre árboles.
```

### 20 — Cierre: para qué sirven los árboles

```
metadata:
  materia: "matematicas"
  tema: "arboles_grafo_sin_ciclos"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve reconocer una estructura como 'árbol' (grafo conexo sin ciclos)?"
tipo: mc
opciones_explicitas:
  - "Para poder aplicar el mismo vocabulario y las mismas herramientas (raíz, hojas, recorridos) a sistemas muy distintos que comparten esa misma estructura: archivos, genealogías, decisiones, evolución de especies"
  - "Sólo sirve para dibujar diagramas jerárquicos, sin ninguna utilidad de cálculo"
  - "Sólo se aplica a estructuras de datos de programación, sin otros usos"
respuesta: "Para poder aplicar el mismo vocabulario y las mismas herramientas (raíz, hojas, recorridos) a sistemas muy distintos que comparten esa misma estructura: archivos, genealogías, decisiones, evolución de especies"

explicacion: |
  Es la base directa de `../algoritmos-de-recorrido-bfs-dfs/`, que
  aplica exactamente igual a árboles que a grafos generales.
```
