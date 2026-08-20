# Matemática — Grafos dirigidos, no dirigidos y ponderados (cuestionario, 20 preguntas VBLang)

> Tema: `GRAF2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre grafo dirigido y no dirigido

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["dirigido", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre un grafo dirigido y uno no dirigido?"
tipo: mc
opciones_explicitas:
  - "En el dirigido, cada arista tiene un sentido (A→B no implica B→A); en el no dirigido, la conexión es simétrica en ambos sentidos"
  - "El grafo dirigido tiene más vértices que el no dirigido"
  - "El grafo no dirigido no puede tener aristas"
respuesta: "En el dirigido, cada arista tiene un sentido (A→B no implica B→A); en el no dirigido, la conexión es simétrica en ambos sentidos"

explicacion: |
  El sentido de la arista es lo único que cambia entre ambos tipos.
```

### 2 — Ejemplo real de grafo no dirigido

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cuál de estos ejemplos se modela mejor con un grafo NO dirigido?"
tipo: mc
opciones_explicitas:
  - "Una amistad mutua en una red social (si A es amigo de B, B también es amigo de A)"
  - "Que un usuario 'siga' a otro en una red social donde el seguimiento no tiene por qué ser mutuo"
respuesta: "Una amistad mutua en una red social (si A es amigo de B, B también es amigo de A)"

explicacion: |
  La amistad mutua es simétrica por definición — no dirigido.
```

### 3 — Ejemplo real de grafo dirigido

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cuál de estos ejemplos se modela mejor con un grafo DIRIGIDO?"
tipo: mc
opciones_explicitas:
  - "Un enlace de una página web hacia otra (que A enlace a B no implica que B enlace a A)"
  - "Un cable de red que conecta dos computadoras entre sí"
respuesta: "Un enlace de una página web hacia otra (que A enlace a B no implica que B enlace a A)"

explicacion: |
  Los enlaces web son el ejemplo clásico de conexión asimétrica.
```

### 4 — Qué es un grafo ponderado

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["ponderado", "vocabulario"]

enunciado: "¿Qué es un grafo ponderado?"
tipo: mc
opciones_explicitas:
  - "Uno donde cada arista tiene un número (peso) asociado, como una distancia, un costo o un tiempo"
  - "Uno donde cada vértice tiene un tamaño distinto en el dibujo"
  - "Uno que tiene más aristas que vértices"
respuesta: "Uno donde cada arista tiene un número (peso) asociado, como una distancia, un costo o un tiempo"

explicacion: |
  El peso es información adicional a la simple conexión.
```

### 5 — Problema: costo total de un camino ponderado

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["ponderado", "problema"]

variables:
  peso1: uno_de([5, 8])
  peso2: uno_de([3, 6])
  peso3: uno_de([4, 7])

respuesta: peso1 + peso2 + peso3
tipo: input
unidad: "km"

enunciado: "Un camino en un mapa de rutas pasa por 3 tramos, con distancias {peso1} km, {peso2} km y {peso3} km. ¿Cuál es la distancia total del camino?"

pasos:
  - "Distancia total = {peso1} + {peso2} + {peso3} = {peso1 + peso2 + peso3} km"

explicacion: |
  El costo de un camino en un grafo ponderado es la suma de los pesos
  de todas las aristas que lo forman.
```

### 6 — Un grafo puede ser dirigido y ponderado a la vez

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["dirigido", "ponderado"]

respuesta: verdadero
tipo: vf

enunciado: "'Dirigido/no dirigido' y 'ponderado/no ponderado' son dos clasificaciones independientes — un grafo puede ser dirigido Y ponderado a la vez, como un mapa de rutas con calles de un sentido y distancias distintas."

explicacion: |
  Son dos preguntas distintas sobre la misma arista, no mutuamente
  excluyentes.
```

### 7 — Grado de entrada vs. grado de salida

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["grado", "vocabulario"]

enunciado: "En un grafo dirigido, ¿cuál es la diferencia entre grado de entrada (in-degree) y grado de salida (out-degree) de un vértice?"
tipo: mc
opciones_explicitas:
  - "El grado de entrada cuenta cuántas aristas LLEGAN a ese vértice; el grado de salida cuenta cuántas aristas SALEN de él"
  - "Son exactamente el mismo número, sólo cambia el nombre"
  - "El grado de entrada sólo existe en grafos no dirigidos"
respuesta: "El grado de entrada cuenta cuántas aristas LLEGAN a ese vértice; el grado de salida cuenta cuántas aristas SALEN de él"

explicacion: |
  En un grafo no dirigido, ambos coinciden en un único 'grado' — la
  distinción sólo aparece cuando las aristas tienen sentido.
```

### 8 — Problema: calcular grado de entrada

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado", "problema"]

respuesta: 3
tipo: input

enunciado: "En una red social (grafo dirigido de 'sigue a'), el usuario V es seguido por los usuarios P, Q y R (P→V, Q→V, R→V). ¿Cuál es el grado de ENTRADA de V?"

explicacion: |
  El grado de entrada cuenta las aristas que apuntan HACIA V: 3.
```

### 9 — Problema: calcular grado de salida

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado", "problema"]

respuesta: 2
tipo: input

enunciado: "El mismo usuario V sigue a los usuarios X e Y (V→X, V→Y), y a nadie más. ¿Cuál es el grado de SALIDA de V?"

explicacion: |
  El grado de salida cuenta las aristas que salen DESDE V: 2.
```

### 10 — A→B no implica B→A

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["dirigido"]

respuesta: verdadero
tipo: vf

enunciado: "En un grafo dirigido, que exista la arista A→B no implica que también exista la arista B→A."

explicacion: |
  Es la propiedad que distingue a los grafos dirigidos de los no
  dirigidos.
```

### 11 — Aplicación real: enlaces web

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un buscador web modela internet como un grafo dirigido, donde cada página es un vértice y cada enlace es una arista dirigida. Si la página A tiene un grado de entrada muy alto, ¿qué sugiere eso?"
tipo: mc
opciones_explicitas:
  - "Que muchas otras páginas enlazan hacia A — una señal de que A podría ser una página relevante o popular"
  - "Que la página A enlaza a muchas otras páginas"
  - "Que la página A tiene muy poco contenido"
respuesta: "Que muchas otras páginas enlazan hacia A — una señal de que A podría ser una página relevante o popular"

explicacion: |
  Es, de hecho, la intuición base de algoritmos de ranking de páginas
  web como PageRank.
```

### 12 — Problema: suma de pesos de otra ruta

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["ponderado", "problema"]

variables:
  peso1: uno_de([10, 15])
  peso2: uno_de([20, 25])

respuesta: peso1 + peso2
tipo: input
unidad: "minutos"

enunciado: "Un viaje en colectivo tiene dos tramos: el primero tarda {peso1} minutos, el segundo {peso2} minutos. ¿Cuál es el tiempo total del viaje (peso total del camino en el grafo)?"

pasos:
  - "Tiempo total = {peso1} + {peso2} = {peso1 + peso2} minutos"

explicacion: |
  El peso puede representar cualquier magnitud acumulable: distancia,
  tiempo, costo.
```

### 13 — Las 4 combinaciones posibles

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿Cuántas combinaciones distintas existen entre 'dirigido/no dirigido' y 'ponderado/no ponderado'?"
tipo: mc
opciones_explicitas:
  - "4: no dirigido no ponderado, no dirigido ponderado, dirigido no ponderado, dirigido ponderado"
  - "2: sólo dirigido o no dirigido, el peso no se combina con eso"
  - "8, porque hay que contar también el tamaño del grafo"
respuesta: "4: no dirigido no ponderado, no dirigido ponderado, dirigido no ponderado, dirigido ponderado"

explicacion: |
  Son dos clasificaciones binarias independientes: 2 × 2 = 4
  combinaciones.
```

### 14 — Aplicación: mapa de rutas dirigido y ponderado

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["aplicacion", "clasificar"]

enunciado: "Un mapa de una ciudad con calles de un solo sentido, donde cada tramo tiene una distancia distinta, ¿qué tipo de grafo necesita?"
tipo: mc
opciones_explicitas:
  - "Dirigido (por las calles de un sentido) Y ponderado (por las distancias)"
  - "No dirigido y no ponderado, alcanza con el tipo más simple"
  - "Sólo ponderado, el sentido de las calles no importa para un mapa"
respuesta: "Dirigido (por las calles de un sentido) Y ponderado (por las distancias)"

explicacion: |
  Ignorar el sentido de las calles daría rutas que en la realidad no
  se pueden recorrer.
```

### 15 — Problema: comparar grado de entrada y salida

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  seguidores: uno_de([500, 800])
  seguidos: uno_de([50, 90])

respuesta: seguidores > seguidos
tipo: vf

enunciado: "Un perfil tiene {seguidores} seguidores (grado de entrada) y sigue a {seguidos} cuentas (grado de salida). ¿El grado de entrada es MAYOR que el grado de salida?"

explicacion: |
  Es un perfil con más gente que lo sigue de la que él sigue —
  grado de entrada mayor al de salida.
```

### 16 — En no dirigido, grado de entrada y salida coinciden

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado"]

respuesta: verdadero
tipo: vf

enunciado: "En un grafo NO dirigido, la distinción entre grado de entrada y grado de salida no aplica — cada arista 'cuenta' igual en ambos sentidos, así que sólo hace falta un único número de grado por vértice."

explicacion: |
  Es porque en un grafo no dirigido cada arista ya es simétrica de
  entrada.
```

### 17 — Aplicación: elegir el tipo de grafo correcto

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué es importante elegir bien el tipo de grafo (dirigido/no dirigido, ponderado/no ponderado) antes de resolver un problema real con él?"
tipo: mc
opciones_explicitas:
  - "Porque un algoritmo que ignore el sentido de las conexiones o los pesos puede dar resultados incorrectos para el problema real que se está modelando"
  - "El tipo de grafo elegido nunca afecta el resultado final"
  - "Sólo importa la cantidad de vértices, el tipo de grafo es un detalle decorativo"
respuesta: "Porque un algoritmo que ignore el sentido de las conexiones o los pesos puede dar resultados incorrectos para el problema real que se está modelando"

explicacion: |
  Como el ejemplo de las calles de un sentido: ignorar la dirección
  daría rutas irrealizables.
```

### 18 — Problema: elegir el camino más corto por peso

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["ponderado", "problema"]

variables:
  camino_a: uno_de([12, 15])
  camino_b: uno_de([18, 20])

respuesta: camino_a < camino_b
tipo: vf

enunciado: "Entre dos ciudades hay dos caminos posibles en el mapa: el Camino A pesa {camino_a} km en total, el Camino B pesa {camino_b} km. ¿El Camino A es más corto?"

explicacion: |
  En un grafo ponderado, comparar caminos significa comparar la suma
  total de sus pesos.
```

### 19 — Un grafo ponderado puede tener pesos negativos (en teoría)

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["ponderado"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque en la mayoría de las aplicaciones reales (distancias, tiempos) los pesos son positivos, matemáticamente un grafo ponderado puede tener pesos negativos, dependiendo de qué represente ese peso."

explicacion: |
  Por ejemplo, en un grafo financiero un peso podría representar una
  ganancia o pérdida en una transacción entre dos cuentas.
```

### 20 — Cierre: para qué sirven estas clasificaciones

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve clasificar un grafo como dirigido/no dirigido y ponderado/no ponderado?"
tipo: mc
opciones_explicitas:
  - "Para elegir el modelo matemático correcto según las características reales de lo que se quiere representar (¿las conexiones tienen sentido? ¿tienen un costo asociado?)"
  - "Es sólo una diferencia de vocabulario sin ninguna consecuencia práctica"
  - "Sólo se aplica a mapas de rutas, no a otros tipos de grafos"
respuesta: "Para elegir el modelo matemático correcto según las características reales de lo que se quiere representar (¿las conexiones tienen sentido? ¿tienen un costo asociado?)"

explicacion: |
  Es el vocabulario que se retoma en `../caminos-y-ciclos/` y
  `../algoritmos-de-recorrido-bfs-dfs/`.
```
