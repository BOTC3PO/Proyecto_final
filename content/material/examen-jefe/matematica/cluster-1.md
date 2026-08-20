# Examen jefe — Maestro del Grafismo y Geometría

> Logro #52. Exploraste grafos con BFS y DFS, analizaste dimensiones y calculaste áreas de polígonos sin fallar. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

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
respuesta_orden:
  - "A"
  - "B"
  - "C"
  - "D"
  - "E"
  - "F"

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
respuesta_orden:
  - "A"
  - "B"
  - "D"
  - "F"
  - "C"
  - "E"

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

## Sección: analisis-dimensional (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

enunciado: "¿Qué es el análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Revisar las unidades de una fórmula o resultado para verificar que tengan sentido"
  - "Contar cuántos dígitos tiene un número"
  - "Medir el tamaño de una figura con una regla"
respuesta: "Revisar las unidades de una fórmula o resultado para verificar que tengan sentido"

explicacion: |
  Sirve para detectar errores de planteo antes de mirar los números.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

enunciado: "¿Para qué sirve principalmente el análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Para detectar errores en una fórmula, aunque los números parezcan cerrar"
  - "Para hacer las cuentas más rápido"
  - "Para redondear resultados"
respuesta: "Para detectar errores en una fórmula, aunque los números parezcan cerrar"

explicacion: |
  Si las unidades no coinciden con lo esperado, hay un error en el
  planteo.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "Se pueden sumar directamente 3 metros más 5 segundos, porque son sólo números."

explicacion: |
  Metros y segundos son magnitudes distintas (longitud y tiempo): no se
  pueden combinar con suma o resta.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Se pueden sumar 3 metros más 5 metros, porque tienen la misma unidad."

explicacion: |
  Con la misma unidad, la suma tiene sentido: 3 m + 5 m = 8 m.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la suma, sí se pueden multiplicar o dividir magnitudes con unidades distintas (por ejemplo, distancia dividido tiempo)."

explicacion: |
  De ahí nacen las unidades derivadas: velocidad (m/s), área (m²),
  densidad (kg/m³).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La velocidad se calcula como distancia ÷ tiempo. ¿Cuál de estas es una unidad válida de velocidad?"
tipo: mc
opciones_explicitas:
  - "km/h"
  - "kg/h"
  - "m²"
respuesta: "km/h"

explicacion: |
  Distancia (km) dividido tiempo (h) da km/h.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El área se calcula multiplicando dos longitudes. Si ambas están en metros, ¿en qué unidad queda el área?"
tipo: mc
opciones_explicitas:
  - "m²"
  - "m"
  - "m³"
respuesta: "m²"

explicacion: |
  Longitud × longitud = m × m = m² (metro cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El volumen se calcula multiplicando tres longitudes. Si las tres están en metros, ¿en qué unidad queda el volumen?"
tipo: mc
opciones_explicitas:
  - "m³"
  - "m²"
  - "m"
respuesta: "m³"

explicacion: |
  Longitud × longitud × longitud = m³ (metro cúbico).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La densidad se calcula como masa ÷ volumen. ¿Cuál de estas es una unidad válida de densidad?"
tipo: mc
opciones_explicitas:
  - "kg/m³"
  - "kg·m³"
  - "m/kg²"
respuesta: "kg/m³"

explicacion: |
  Masa (kg) dividido volumen (m³) da kg/m³.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "La aceleración se calcula como velocidad ÷ tiempo. Si la velocidad está en m/s y el tiempo en s, ¿en qué unidad queda la aceleración?"
tipo: mc
opciones_explicitas:
  - "m/s²"
  - "m/s"
  - "s/m"
respuesta: "m/s²"

explicacion: |
  (m/s) ÷ s = m/s² — "metros por segundo, por segundo".
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

enunciado: "¿Cuál de estas operaciones NO tiene sentido dimensionalmente?"
tipo: mc
opciones_explicitas:
  - "5 metros + 3 segundos"
  - "5 metros × 3 metros"
  - "10 km ÷ 2 horas"
respuesta: "5 metros + 3 segundos"

explicacion: |
  Sumar longitud con tiempo no tiene sentido; multiplicar o dividir
  magnitudes distintas sí (da una unidad derivada).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si en una fórmula las unidades de ambos lados de la igualdad no coinciden, la fórmula tiene un error."

explicacion: |
  Es justo la base del análisis dimensional: usar las unidades como
  chequeo antes de confiar en los números.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

enunciado: "Una fórmula calcula el área de un rectángulo como base + altura (sumando, no multiplicando), con base y altura en metros. ¿Qué unidad da ese resultado?"
tipo: mc
opciones_explicitas:
  - "m (no m², así que la fórmula está mal para calcular un área)"
  - "m² (está bien)"
  - "m³ (está bien)"
respuesta: "m (no m², así que la fórmula está mal para calcular un área)"

explicacion: |
  Sumar dos longitudes da otra longitud (m), no un área (m²): el
  análisis dimensional detecta que la fórmula "base + altura" no puede
  ser el área.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "problema"]

variables:
  distancia_km: random(60, 400)
  horas: random(2, 8)

respuesta: distancia_km / horas
tipo: input
tolerancia_abs: 0.01

enunciado: "Un auto recorre {distancia_km} km en {horas} horas. ¿Cuál es su velocidad, en km/h?"

pasos:
  - "{distancia_km} km ÷ {horas} h = {distancia_km / horas} km/h"

explicacion: |
  Distancia (km) dividido tiempo (h) da directamente la unidad esperada,
  km/h — eso confirma que la fórmula está bien planteada.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "problema"]

variables:
  masa_kg: random(1, 5)
  volumen_cm3: random(200, 900)

respuesta: (masa_kg * 1000) / volumen_cm3
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto tiene {masa_kg} kg de masa y ocupa {volumen_cm3} cm³. Para calcular la densidad en g/cm³, primero hay que convertir la masa a gramos. ¿Cuál es la densidad, en g/cm³?"

pasos:
  - "{masa_kg} kg = {masa_kg * 1000} g. {masa_kg * 1000} g ÷ {volumen_cm3} cm³ = {(masa_kg * 1000) / volumen_cm3} g/cm³."

explicacion: |
  Antes de dividir, ambas magnitudes tienen que quedar en unidades
  compatibles con lo que se pide (g y cm³, no kg y cm³) — es la conexión
  directa con `../sistema-metrico-y-conversiones/`.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si un cálculo que debía dar un área termina en una unidad como m/s, eso es una señal clara de que hay un error en el planteo."

explicacion: |
  m/s no es una unidad de área (que debería ser m²): el resultado avisa
  que algo está mal antes de mirar el número.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "unidades_derivadas"]

enunciado: "El caudal de una canilla se calcula como volumen de agua ÷ tiempo. Si el volumen está en litros y el tiempo en minutos, ¿en qué unidad queda el caudal?"
tipo: mc
opciones_explicitas:
  - "l/min"
  - "min/l"
  - "l · min"
respuesta: "l/min"

explicacion: |
  Volumen (l) dividido tiempo (min) da l/min — litros por minuto.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "completar"]

tipo: completar
enunciado: "Completá: si un área se calcula multiplicando dos longitudes en centímetros, la unidad del resultado es cm___ (con el número del exponente)."
respuestas_validas:
  - 2

explicacion: |
  cm × cm = cm² (centímetro cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "intermedio"
  tags: ["analisis_dimensional", "completar"]

tipo: completar
enunciado: "Completá: si un volumen se calcula multiplicando tres longitudes en centímetros, la unidad del resultado es cm___ (con el número del exponente)."
respuestas_validas:
  - 3

explicacion: |
  cm × cm × cm = cm³ (centímetro cúbico).
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "orden"]

tipo: ordenar
enunciado: "Ordená los pasos para verificar una fórmula por análisis dimensional."
opciones_explicitas:
  - "Si no coinciden, revisar la fórmula: algo está mal planteado"
  - "Identificar las unidades de cada variable de la fórmula"
  - "Comparar la unidad resultante con la unidad esperada"
  - "Combinar esas unidades con las mismas operaciones (× o ÷) que usa la fórmula"
respuesta_orden:
  - "Identificar las unidades de cada variable de la fórmula"
  - "Combinar esas unidades con las mismas operaciones (× o ÷) que usa la fórmula"
  - "Comparar la unidad resultante con la unidad esperada"
  - "Si no coinciden, revisar la fórmula: algo está mal planteado"

explicacion: |
  Es el mismo procedimiento en todos los casos: seguir las unidades a
  través de las operaciones, no sólo los números.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "avanzado"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que las unidades de una fórmula cierren no garantiza que el número esté bien calculado: sólo descarta un tipo de error (el de planteo), no errores aritméticos."

explicacion: |
  Una fórmula puede tener las unidades correctas y aun así tener un error
  de cuenta (por ejemplo, un factor mal multiplicado) — el análisis
  dimensional es un chequeo más, no el único.
```

```
metadata:
  materia: "matematicas"
  tema: "analisis_dimensional"
  nivel: "basico"
  tags: ["analisis_dimensional", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Revisar las unidades de una fórmula antes de confiar en el resultado numérico es una forma rápida de detectar errores de planteo."

explicacion: |
  Es la idea central de todo el módulo: las unidades cuentan una historia
  que los números solos no cuentan.
```

## Sección: angulos (34 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

enunciado: "¿Qué es un ángulo?"
tipo: mc
opciones_explicitas:
  - "La abertura entre dos semirrectas que comparten un mismo origen"
  - "La distancia entre dos puntos"
  - "El área encerrada por un polígono"
respuesta: "La abertura entre dos semirrectas que comparten un mismo origen"

explicacion: |
  Ese punto de origen común es el vértice; las dos semirrectas son los
  lados del ángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

enunciado: "¿En qué unidad se mide un ángulo, y con qué instrumento?"
tipo: mc
opciones_explicitas:
  - "En grados, con el transportador"
  - "En metros, con una regla"
  - "En litros, con una probeta"
respuesta: "En grados, con el transportador"

explicacion: |
  Ver `../magnitud-unidad-instrumento/`: el grado es la unidad, el
  transportador el instrumento.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

respuesta: 360
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos grados mide una vuelta completa?"

explicacion: |
  360° es el ángulo completo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(1, 89)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Agudo"
  - "Obtuso"
  - "Recto"
respuesta: "Agudo"

explicacion: |
  Mide menos de 90°: es agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

enunciado: "Un ángulo mide 90°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Recto"
  - "Agudo"
  - "Obtuso"
respuesta: "Recto"

explicacion: |
  Exactamente 90°: es recto.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(91, 179)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Obtuso"
  - "Agudo"
  - "Llano"
respuesta: "Obtuso"

explicacion: |
  Mide más de 90° y menos de 180°: es obtuso.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

enunciado: "Un ángulo mide 180°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Llano"
  - "Obtuso"
  - "Completo"
respuesta: "Llano"

explicacion: |
  Exactamente 180°: sus dos lados forman una línea recta.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "clasificacion"]

variables:
  medida: random(181, 359)

enunciado: "Un ángulo mide {medida}°. ¿Cómo se clasifica?"
tipo: mc
opciones_explicitas:
  - "Reflejo"
  - "Obtuso"
  - "Completo"
respuesta: "Reflejo"

explicacion: |
  Mide más de 180° y menos de 360°: es reflejo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "complementarios", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son complementarios?"
tipo: mc
opciones_explicitas:
  - "Cuando sus medidas suman 90°"
  - "Cuando sus medidas suman 180°"
  - "Cuando miden exactamente lo mismo"
respuesta: "Cuando sus medidas suman 90°"

explicacion: |
  30° y 60° son complementarios, por ejemplo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "complementarios"]

variables:
  a: random(10, 80)

respuesta: 90 - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el complemento de un ángulo de {a}°?"

pasos:
  - "90 − {a} = {90 - a}°"

explicacion: |
  El complemento es lo que le falta a un ángulo para llegar a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "complementarios"]

variables:
  a: random(10, 80)
  b: uno_de([90 - a, random(10, 80)])

respuesta: (a + b == 90)
tipo: vf

enunciado: "¿Son complementarios un ángulo de {a}° y otro de {b}°?"

pasos:
  - "{a} + {b} = {a + b}"

explicacion: |
  Son complementarios sólo si la suma da exactamente 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "suplementarios", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son suplementarios?"
tipo: mc
opciones_explicitas:
  - "Cuando sus medidas suman 180°"
  - "Cuando sus medidas suman 90°"
  - "Cuando uno es el doble del otro"
respuesta: "Cuando sus medidas suman 180°"

explicacion: |
  110° y 70° son suplementarios, por ejemplo.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "suplementarios"]

variables:
  a: random(10, 170)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el suplemento de un ángulo de {a}°?"

pasos:
  - "180 − {a} = {180 - a}°"

explicacion: |
  El suplemento es lo que le falta a un ángulo para llegar a 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "suplementarios"]

variables:
  a: random(10, 170)
  b: uno_de([180 - a, random(10, 170)])

respuesta: (a + b == 180)
tipo: vf

enunciado: "¿Son suplementarios un ángulo de {a}° y otro de {b}°?"

pasos:
  - "{a} + {b} = {a + b}"

explicacion: |
  Son suplementarios sólo si la suma da exactamente 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "adyacentes", "vocabulario"]

enunciado: "¿Cuándo dos ángulos son adyacentes?"
tipo: mc
opciones_explicitas:
  - "Cuando comparten el vértice y un lado, quedando uno al lado del otro"
  - "Cuando están opuestos por el vértice"
  - "Cuando miden exactamente lo mismo"
respuesta: "Cuando comparten el vértice y un lado, quedando uno al lado del otro"

explicacion: |
  No se superponen: quedan "pegados" por un lado en común.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "adyacentes"]

variables:
  a: random(20, 160)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "Dos ángulos adyacentes forman entre los dos un ángulo llano (180°). Si uno mide {a}°, ¿cuánto mide el otro?"

pasos:
  - "180 − {a} = {180 - a}°"

explicacion: |
  Cuando dos ángulos adyacentes forman un llano, también son
  suplementarios entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "opuestos_por_el_vertice", "vocabulario"]

enunciado: "Cuando dos rectas se cruzan, ¿cómo se llaman los ángulos que quedan enfrentados en diagonal?"
tipo: mc
opciones_explicitas:
  - "Opuestos por el vértice"
  - "Adyacentes"
  - "Complementarios"
respuesta: "Opuestos por el vértice"

explicacion: |
  Se forman cuando dos rectas se cortan; quedan uno frente al otro, en
  diagonal.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "opuestos_por_el_vertice"]

respuesta: verdadero
tipo: vf

enunciado: "Los ángulos opuestos por el vértice siempre son iguales entre sí."

explicacion: |
  Es una propiedad que se cumple siempre, sin importar el ángulo que
  formen las dos rectas.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "opuestos_por_el_vertice", "problema"]

variables:
  a: random(20, 160)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "Dos rectas se cruzan y uno de los cuatro ángulos formados mide {a}°. ¿Cuánto mide el ángulo opuesto por el vértice a ese?"

explicacion: |
  Los ángulos opuestos por el vértice son iguales: mide lo mismo,
  {a}°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "adyacentes", "problema"]

variables:
  a: random(20, 160)

respuesta: 180 - a
tipo: input
tolerancia_abs: 0

enunciado: "Dos rectas se cruzan y uno de los cuatro ángulos formados mide {a}°. ¿Cuánto mide cualquiera de los dos ángulos ADYACENTES a ese (los que están a su lado, no el opuesto)?"

pasos:
  - "180 − {a} = {180 - a}°, porque son suplementarios (juntos forman un ángulo llano)."

explicacion: |
  Los ángulos adyacentes al cruce son suplementarios del ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los ángulos formados alrededor de un mismo punto (sin superponerse) suman en total 360°."

explicacion: |
  Es una vuelta completa repartida entre todos esos ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "problema"]

variables:
  a: random(60, 120)
  b: random(60, 120)
  c: random(60, 120)

respuesta: 360 - (a + b + c)
tipo: input
tolerancia_abs: 0

enunciado: "Alrededor de un punto hay 4 ángulos que no se superponen. Tres de ellos miden {a}°, {b}° y {c}°. ¿Cuánto mide el cuarto?"

pasos:
  - "360 − ({a} + {b} + {c}) = {360 - (a + b + c)}°"

explicacion: |
  Los 4 ángulos alrededor de un punto suman 360° en total.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "clasificacion"]

respuesta: falso
tipo: vf

enunciado: "Un ángulo recto (90°) se clasifica como agudo."

explicacion: |
  El recto es su propia categoría (exactamente 90°): no es agudo (menos
  de 90°) ni obtuso (más de 90°).
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "complementarios"]

respuesta: verdadero
tipo: vf

enunciado: "El complemento de cualquier ángulo agudo (entre 0° y 90°) siempre es también un ángulo agudo."

explicacion: |
  Si el ángulo original mide entre 0° y 90°, 90° menos ese valor da otro
  número entre 0° y 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "suplementarios"]

respuesta: verdadero
tipo: vf

enunciado: "El suplemento de un ángulo puede ser agudo, recto u obtuso, dependiendo de cuánto mida el ángulo original."

explicacion: |
  Si el original es obtuso, el suplemento es agudo (y viceversa); si el
  original mide 90°, el suplemento también mide 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "comparacion"]

variables:
  a: random(10, 170)
  b: random(10, 170)

restricciones:
  - a != b

respuesta: a > b
tipo: vf

enunciado: "¿Es mayor un ángulo de {a}° que uno de {b}°?"

explicacion: |
  Se comparan directamente los valores en grados.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "comparacion"]

variables:
  a: random(10, 89)
  b: random(91, 179)

respuesta: b
tipo: mc
opciones_explicitas:
  - a
  - b

enunciado: "¿Cuál de estos dos ángulos es mayor: {a}° o {b}°?"

explicacion: |
  Se comparan los valores directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "completar"]

variables:
  a: random(10, 80)

tipo: completar
enunciado: "Completá: el complemento de un ángulo de {a}° es ___°."
respuestas_validas:
  - 90 - a

explicacion: |
  90° menos el ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "completar"]

variables:
  a: random(10, 170)

tipo: completar
enunciado: "Completá: el suplemento de un ángulo de {a}° es ___°."
respuestas_validas:
  - 180 - a

explicacion: |
  180° menos el ángulo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "orden"]

tipo: ordenar
enunciado: "Ordená estos ángulos de menor a mayor: 120°, 45°, 90°, 15°."
opciones_explicitas:
  - "90°"
  - "15°"
  - "120°"
  - "45°"
respuesta_orden: ["15°", "45°", "90°", "120°"]

explicacion: |
  Se comparan directamente los valores en grados.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "verificacion"]

variables:
  medida: random(91, 179)
  clasificacion_mostrada: uno_de(["obtuso", "obtuso", "obtuso", "agudo"])

respuesta: (clasificacion_mostrada == "obtuso")
tipo: vf

enunciado: "¿Está bien esta clasificación? Un ángulo de {medida}° es {clasificacion_mostrada}."

explicacion: |
  Entre 90° y 180° (sin llegar a 180°), el ángulo es obtuso.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "intermedio"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando dos rectas se cruzan formando ángulos rectos (90°), se dice que son perpendiculares."

explicacion: |
  Es la definición de perpendicularidad en términos de ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "avanzado"
  tags: ["angulo", "problema"]

variables:
  horas: uno_de([3, 6, 9])

respuesta: (horas / 12) * 360
tipo: input
tolerancia_abs: 0

enunciado: "En un reloj analógico, las 12 horas están repartidas en 360° a su alrededor. ¿Cuántos grados recorre el minutero desde las 12 hasta marcar las {horas} en punto (pensando la esfera del reloj completa, no la posición del horario)?"

pasos:
  - "({horas} ÷ 12) × 360 = {(horas / 12) * 360}°"

explicacion: |
  Cada hora representa 360° ÷ 12 = 30° del total de la esfera del reloj.
```

```
metadata:
  materia: "matematicas"
  tema: "angulos"
  nivel: "basico"
  tags: ["angulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer las relaciones entre ángulos (complementarios, suplementarios, opuestos por el vértice) permite calcular la medida de un ángulo sin necesidad de medirlo con el transportador."

explicacion: |
  Es la utilidad central de este módulo, y la base para
  `../triangulos/`.
```

## Sección: arboles-grafo-sin-ciclos (20 preguntas)

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

## Sección: area-poligonos-regulares-y-compuestas (27 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["apotema", "vocabulario"]

enunciado: "¿Qué es el apotema de un polígono regular?"
tipo: mc
opciones_explicitas:
  - "La distancia perpendicular desde el centro hasta el punto medio de un lado"
  - "La distancia desde el centro hasta un vértice"
  - "La longitud de un lado cualquiera"
respuesta: "La distancia perpendicular desde el centro hasta el punto medio de un lado"

explicacion: |
  No es lo mismo que el radio (centro a vértice): el apotema va del
  centro al punto medio de un lado.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El apotema, como una única distancia constante del centro a cada lado, sólo está bien definido en polígonos regulares."

explicacion: |
  En un polígono irregular la distancia del centro a cada lado varía —
  no hay un único apotema.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "vocabulario"]

enunciado: "¿Cómo se deduce la fórmula del área de un polígono regular a partir del apotema?"
tipo: mc
opciones_explicitas:
  - "Se divide el polígono en n triángulos iguales desde el centro, cada uno con base un lado y altura el apotema"
  - "Se lo compara directamente con un círculo de igual perímetro"
  - "No tiene deducción, es una fórmula empírica"
respuesta: "Se divide el polígono en n triángulos iguales desde el centro, cada uno con base un lado y altura el apotema"

explicacion: |
  Sumando el área de esos n triángulos (cada uno lado×apotema/2) se llega
  a (perímetro × apotema) / 2.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "completar"]

tipo: completar
enunciado: "Completá: Área de un polígono regular = (Perímetro × ___) / 2."
respuestas_validas:
  - "apotema"
  - "Apotema"

explicacion: |
  El área se calcula con el perímetro y el apotema.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["apotema", "problema"]

variables:
  n: uno_de([5, 6, 8, 9, 10, 12])
  lado: random(4, 20)

respuesta: n * lado
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene {n} lados de {lado} cm cada uno. ¿Cuál es su perímetro?"

pasos:
  - "{n} × {lado} = {n * lado} cm"

explicacion: |
  El perímetro de un polígono regular es la cantidad de lados por la
  medida de cada lado.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema", "problema"]

variables:
  n: uno_de([5, 6, 8, 10])
  lado: random(4, 15)
  apotema: 2 * random(2, 10)

respuesta: (n * lado * apotema) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene {n} lados de {lado} cm, y su apotema mide {apotema} cm. ¿Cuál es su área (en cm²)?"

pasos:
  - "Perímetro = {n} × {lado} = {n * lado} cm"
  - "Área = ({n * lado} × {apotema}) ÷ 2 = {(n * lado * apotema) / 2} cm²"

explicacion: |
  Primero se calcula el perímetro, y con él y el apotema se aplica la
  fórmula del área.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "problema"]

variables:
  perimetro: uno_de([24, 30, 36, 40, 48, 54, 60])
  apotema: 2 * random(2, 12)

respuesta: (perimetro * apotema) / 2
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene un perímetro de {perimetro} cm y un apotema de {apotema} cm. ¿Cuál es su área (en cm²)?"

pasos:
  - "({perimetro} × {apotema}) ÷ 2 = {(perimetro * apotema) / 2} cm²"

explicacion: |
  Se aplica directo la fórmula: no hace falta calcular el perímetro
  porque ya está dado.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema", "problema"]

variables:
  perimetro: uno_de([24, 30, 36, 40, 48, 60])
  apotema_real: uno_de([4, 5, 6, 8, 10])
  area_dada: (perimetro * apotema_real) / 2

respuesta: apotema_real
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene un perímetro de {perimetro} cm y un área de {area_dada} cm². ¿Cuánto mide su apotema?"

pasos:
  - "Área = (Perímetro × Apotema) ÷ 2, entonces Apotema = (2 × Área) ÷ Perímetro"
  - "(2 × {area_dada}) ÷ {perimetro} = {(2 * area_dada) / perimetro} cm"

explicacion: |
  Se despeja el apotema invirtiendo la fórmula del área.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas", "vocabulario"]

enunciado: "¿Qué es una figura compuesta?"
tipo: mc
opciones_explicitas:
  - "Una figura formada por dos o más figuras simples combinadas"
  - "Cualquier figura con más de 4 lados"
  - "Una figura que no tiene fórmula de área"
respuesta: "Una figura formada por dos o más figuras simples combinadas"

explicacion: |
  Como una habitación en forma de L, o una ventana rectangular con un
  semicírculo arriba.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas", "vocabulario"]

enunciado: "¿Cuál es la estrategia general para calcular el área de una figura compuesta?"
tipo: mc
opciones_explicitas:
  - "Descomponerla en figuras simples, calcular cada área por separado, y sumar o restar según corresponda"
  - "Usar siempre la fórmula del rectángulo, sea cual sea la forma"
  - "Medir directamente la superficie total sin descomponer nada"
respuesta: "Descomponerla en figuras simples, calcular cada área por separado, y sumar o restar según corresponda"

explicacion: |
  No hace falta una fórmula nueva: se reusan las fórmulas de las figuras
  simples ya conocidas.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "vocabulario"]

enunciado: "¿Cuándo hay que restar el área de una figura simple en vez de sumarla?"
tipo: mc
opciones_explicitas:
  - "Cuando esa figura queda recortada o hueca dentro de otra, como una fuente en el medio de un patio"
  - "Nunca hay que restar, siempre se suma"
  - "Cuando la figura simple es un círculo"
respuesta: "Cuando esa figura queda recortada o hueca dentro de otra, como una fuente en el medio de un patio"

explicacion: |
  Si la figura no forma parte de la superficie útil, se descuenta del
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular el área de una figura compuesta no hace falta ninguna fórmula nueva: alcanza con las fórmulas de las figuras simples ya conocidas."

explicacion: |
  La clave es descomponer bien la figura, no memorizar una fórmula
  distinta.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "problema"]

variables:
  a1: random(4, 8)
  b1: random(3, 6)
  a2: random(3, 6)
  b2: random(2, 5)

respuesta: (a1 * b1) + (a2 * b2)
tipo: input
tolerancia_abs: 0

enunciado: "Una habitación en forma de L se arma con un rectángulo de {a1}×{b1} m pegado a otro rectángulo de {a2}×{b2} m. ¿Cuál es el área total (en m²)?"

pasos:
  - "Rectángulo 1: {a1} × {b1} = {a1 * b1} m²"
  - "Rectángulo 2: {a2} × {b2} = {a2 * b2} m²"
  - "{a1 * b1} + {a2 * b2} = {(a1 * b1) + (a2 * b2)} m²"

explicacion: |
  La L se descompone en dos rectángulos y se suman sus áreas.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "problema"]

variables:
  ancho: random(10, 20)
  alto: random(10, 20)
  corte_ancho: random(2, 6)
  corte_alto: random(2, 6)

respuesta: (ancho * alto) - (corte_ancho * corte_alto)
tipo: input
tolerancia_abs: 0

enunciado: "A un terreno rectangular de {ancho}×{alto} m se le recorta, en una esquina, un rectángulo de {corte_ancho}×{corte_alto} m. ¿Cuál es el área útil restante (en m²)?"

pasos:
  - "Área total: {ancho} × {alto} = {ancho * alto} m²"
  - "Área recortada: {corte_ancho} × {corte_alto} = {corte_ancho * corte_alto} m²"
  - "{ancho * alto} − {corte_ancho * corte_alto} = {(ancho * alto) - (corte_ancho * corte_alto)} m²"

explicacion: |
  Se calcula como si no faltara nada, y después se resta la parte
  recortada.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["figuras_compuestas", "problema"]

variables:
  lado: random(8, 20)
  r: random(1, 3)

respuesta: redondear((lado * lado) - (pi * r * r), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un patio cuadrado de {lado} m de lado tiene una fuente circular de radio {r} m en el medio. ¿Cuál es el área útil del patio, sin contar la fuente (en m²)? Redondeá a 2 decimales."

pasos:
  - "Área del cuadrado: {lado} × {lado} = {lado * lado} m²"
  - "Área de la fuente: π × {r}² = {redondear(pi * r * r, 2)} m²"
  - "{lado * lado} − {redondear(pi * r * r, 2)} = {redondear((lado * lado) - (pi * r * r), 2)} m²"

explicacion: |
  El área de la fuente (un círculo) se resta del área total del cuadrado.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["figuras_compuestas", "problema"]

variables:
  base: random(6, 20)
  altura: random(6, 20)

respuesta: redondear((base * altura) + ((pi * (base / 2) * (base / 2)) / 2), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Una ventana tiene forma de rectángulo de {base}×{altura} cm, coronado por un semicírculo cuyo diámetro coincide con el lado de {base} cm. ¿Cuál es el área total de la ventana (en cm²)? Redondeá a 2 decimales."

pasos:
  - "Área del rectángulo: {base} × {altura} = {base * altura} cm²"
  - "Radio del semicírculo: {base} ÷ 2 = {base / 2} cm"
  - "Área del semicírculo: (π × {base / 2}²) ÷ 2 = {redondear((pi * (base / 2) * (base / 2)) / 2, 2)} cm²"
  - "{base * altura} + {redondear((pi * (base / 2) * (base / 2)) / 2, 2)} = {redondear((base * altura) + ((pi * (base / 2) * (base / 2)) / 2), 2)} cm²"

explicacion: |
  Se suman el área del rectángulo y la del semicírculo (la mitad del
  área de un círculo completo).
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema"]

respuesta: verdadero
tipo: vf

enunciado: "Un hexágono regular se puede descomponer en 6 triángulos iguales trazando segmentos desde su centro hasta cada vértice."

explicacion: |
  Es la misma idea que da la fórmula del apotema, aplicada a n = 6.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema", "problema"]

variables:
  lado: random(5, 10)
  apotema: 2 * random(3, 8)

tipo: mc
opciones_explicitas:
  - "El hexágono (6 lados)"
  - "El pentágono (5 lados)"
  - "Tienen la misma área"
respuesta: "El hexágono (6 lados)"

enunciado: "Un pentágono regular y un hexágono regular tienen el mismo lado ({lado} cm) y el mismo apotema ({apotema} cm). ¿Cuál tiene mayor área?"

explicacion: |
  A igual lado y apotema, a más lados más perímetro, y el área depende
  del perímetro: el hexágono (más lados) tiene mayor área.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["apotema", "completar"]

tipo: completar
enunciado: "Completá: Perímetro de un polígono regular = número de lados × ___."
respuestas_validas:
  - "lado"
  - "el lado"

explicacion: |
  Como todos los lados miden lo mismo, alcanza con multiplicar la
  cantidad de lados por la medida de uno solo.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "ordenar"]

enunciado: "Ordená los pasos para calcular el área de un polígono regular, conociendo la cantidad de lados, la medida de cada lado y el apotema."
tipo: ordenar
opciones_explicitas:
  - "Dividir ese resultado por 2 para obtener el área"
  - "Calcular el perímetro: cantidad de lados × medida de cada lado"
  - "Multiplicar el perímetro por el apotema"
respuesta_orden:
  - "Calcular el perímetro: cantidad de lados × medida de cada lado"
  - "Multiplicar el perímetro por el apotema"
  - "Dividir ese resultado por 2 para obtener el área"

explicacion: |
  Área = (Perímetro × Apotema) / 2, en ese orden de operaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "ordenar"]

enunciado: "Ordená los pasos para calcular el área de un patio cuadrado con una fuente circular en el medio."
tipo: ordenar
opciones_explicitas:
  - "Restar el área del círculo al área del cuadrado"
  - "Calcular el área del cuadrado completo"
  - "Calcular el área del círculo (la fuente)"
respuesta_orden:
  - "Calcular el área del cuadrado completo"
  - "Calcular el área del círculo (la fuente)"
  - "Restar el área del círculo al área del cuadrado"

explicacion: |
  Primero se calcula como si no hubiera fuente, y recién después se
  descuenta el hueco.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["figuras_compuestas", "problema"]

variables:
  base: random(6, 15)
  altura_rect: random(4, 10)
  altura_tri: random(3, 8)

respuesta: (base * altura_rect) + ((base * altura_tri) / 2)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un frente de casa combina un rectángulo de base {base} m y altura {altura_rect} m, coronado por un techo triangular de la misma base {base} m y altura {altura_tri} m. ¿Cuál es el área total del frente (en m²)?"

pasos:
  - "Área del rectángulo: {base} × {altura_rect} = {base * altura_rect} m²"
  - "Área del triángulo: ({base} × {altura_tri}) ÷ 2 = {(base * altura_tri) / 2} m²"
  - "{base * altura_rect} + {(base * altura_tri) / 2} = {(base * altura_rect) + ((base * altura_tri) / 2)} m²"

explicacion: |
  Se suman el área del cuerpo rectangular y la del techo triangular.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "intermedio"
  tags: ["apotema", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "En un polígono regular, el apotema y el radio (centro a vértice) son siempre exactamente la misma medida."

explicacion: |
  El apotema llega hasta el punto medio de un lado; el radio llega hasta
  un vértice — son distancias distintas (el apotema es siempre más
  corto).
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["figuras_compuestas", "problema"]

variables:
  lado: random(10, 20)
  r1: random(1, 2)
  r2: random(1, 2)

respuesta: redondear((lado * lado) - (pi * r1 * r1) - (pi * r2 * r2), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un patio cuadrado de {lado} m de lado tiene dos fuentes circulares, de radios {r1} m y {r2} m. ¿Cuál es el área útil del patio (en m²)? Redondeá a 2 decimales."

pasos:
  - "Área del cuadrado: {lado} × {lado} = {lado * lado} m²"
  - "Área de las dos fuentes: π×{r1}² + π×{r2}² = {redondear((pi * r1 * r1) + (pi * r2 * r2), 2)} m²"
  - "{lado * lado} − {redondear((pi * r1 * r1) + (pi * r2 * r2), 2)} = {redondear((lado * lado) - (pi * r1 * r1) - (pi * r2 * r2), 2)} m²"

explicacion: |
  Cuando hay más de un hueco, se resta el área de cada uno por separado.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "avanzado"
  tags: ["apotema"]

respuesta: verdadero
tipo: vf

enunciado: "Entre dos polígonos regulares con el mismo perímetro, el que tiene mayor apotema también tiene mayor área."

explicacion: |
  Área = (Perímetro × Apotema) / 2: con el perímetro fijo, el área crece
  directamente con el apotema.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["figuras_compuestas"]

enunciado: "¿Cuál es la parte más difícil de resolver el área de una figura compuesta?"
tipo: mc
opciones_explicitas:
  - "Identificar bien qué figuras simples la forman y si corresponde sumar o restar cada una"
  - "Recordar una fórmula especial para figuras compuestas"
  - "Convertir las unidades de medida"
respuesta: "Identificar bien qué figuras simples la forman y si corresponde sumar o restar cada una"

explicacion: |
  El cálculo de cada parte ya está resuelto en las fórmulas simples: lo
  nuevo es descomponer bien la figura.
```

```
metadata:
  materia: "matematicas"
  tema: "area_poligonos_regulares_y_compuestas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber calcular áreas de polígonos regulares y figuras compuestas?"
tipo: mc
opciones_explicitas:
  - "Para calcular materiales reales en espacios con forma irregular, y para diseños con simetría radial"
  - "Sólo para resolver ejercicios de geometría sin aplicación práctica"
  - "Sólo sirve para figuras con menos de 4 lados"
respuesta: "Para calcular materiales reales en espacios con forma irregular, y para diseños con simetría radial"

explicacion: |
  Desde calcular piso o pintura para un ambiente en L, hasta diseñar
  mosaicos y señales con forma de polígono regular.
```
