# Examen jefe — [PENDIENTE #602]

> Logro #602. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **107 preguntas totales** en 5/5 secciones.

---

## Sección: grafos-vertices-y-aristas (20 preguntas)

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

## Sección: grafos-dirigidos-no-dirigidos-y-ponderados (20 preguntas)

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

## Sección: leer-una-tabla (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "En una tabla, ¿qué es una fila?"
tipo: mc
opciones_explicitas:
  - "Una línea horizontal de la tabla, que agrupa los datos de un mismo registro"
  - "Una línea vertical de la tabla"
  - "El título general de toda la tabla"
respuesta: "Una línea horizontal de la tabla, que agrupa los datos de un mismo registro"

explicacion: |
  Por ejemplo, todos los datos de un mismo producto suelen ir en la
  misma fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "En una tabla, ¿qué es una columna?"
tipo: mc
opciones_explicitas:
  - "Una línea vertical de la tabla, que agrupa el mismo tipo de dato para todos los registros"
  - "Una línea horizontal de la tabla"
  - "Un dato suelto, sin relación con el resto"
respuesta: "Una línea vertical de la tabla, que agrupa el mismo tipo de dato para todos los registros"

explicacion: |
  Por ejemplo, la columna "Precio" tiene el precio de cada producto,
  uno por fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Qué es una celda en una tabla?"
tipo: mc
opciones_explicitas:
  - "La intersección de una fila y una columna, con un solo dato puntual adentro"
  - "El título de una columna"
  - "El total de una fila"
respuesta: "La intersección de una fila y una columna, con un solo dato puntual adentro"

explicacion: |
  Cada celda contiene un único valor.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Qué es el encabezado de una tabla?"
tipo: mc
opciones_explicitas:
  - "La primera fila, que nombra qué dato contiene cada columna"
  - "La última fila, con los totales"
  - "La primera columna, con los nombres de cada fila"
respuesta: "La primera fila, que nombra qué dato contiene cada columna"

explicacion: |
  Sin encabezado, no se sabría qué representa cada columna de números.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  tabla: [{producto: "Manzana", precio: 120, stock: 30}, {producto: "Banana", precio: 80, stock: 45}, {producto: "Naranja", precio: 100, stock: 20}, {producto: "Pera", precio: 150, stock: 15}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].precio
tipo: input
unidad: "$"

enunciado: "Según esta tabla — Manzana: $120 (30 en stock); Banana: $80 (45 en stock); Naranja: $100 (20 en stock); Pera: $150 (15 en stock) — ¿cuál es el precio de {tabla[idx].producto}?"

explicacion: |
  Se busca la fila del producto pedido, y se lee el valor de la
  columna "Precio" en esa fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  tabla: [{producto: "Manzana", precio: 120, stock: 30}, {producto: "Banana", precio: 80, stock: 45}, {producto: "Naranja", precio: 100, stock: 20}, {producto: "Pera", precio: 150, stock: 15}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].stock
tipo: input

enunciado: "Con la misma tabla — Manzana: $120 (30 en stock); Banana: $80 (45 en stock); Naranja: $100 (20 en stock); Pera: $150 (15 en stock) — ¿cuántas unidades hay en stock de {tabla[idx].producto}?"

explicacion: |
  Ahora se lee la columna "Stock" en vez de "Precio", en la misma fila.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "Según la tabla — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuál de estos dos productos es más caro, Banana o Pera?"
tipo: mc
opciones_explicitas:
  - "Pera"
  - "Banana"
respuesta: "Pera"

explicacion: |
  Pera cuesta $150 y Banana $80 — se comparan los valores de la misma
  columna en filas distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 110
tipo: input

enunciado: "Según la tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿cuál es el stock TOTAL sumando las 4 filas?"

pasos:
  - "30 + 45 + 20 + 15 = 110"

explicacion: |
  Cuando la tabla no trae ya un total, hay que sumar manualmente los
  valores de la columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 70
tipo: input

enunciado: "Según la tabla de precios — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuál es la diferencia entre el producto más caro y el más barato?"

pasos:
  - "Más caro: Pera ($150). Más barato: Banana ($80)."
  - "Diferencia = 150 − 80 = 70"

explicacion: |
  Primero hay que identificar cuál fila tiene el mayor y cuál el menor
  valor, y después restar.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla sin encabezado sigue siendo una tabla (filas y columnas de datos), pero es mucho más difícil de interpretar porque no queda claro qué representa cada columna."

explicacion: |
  El encabezado es lo que le da significado a los números de cada
  columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "ordenar"]

enunciado: "Ordená los pasos para encontrar un dato puntual en una tabla (por ejemplo, el precio de un producto específico)."
tipo: ordenar
opciones_explicitas:
  - "Ubicar la columna correspondiente al dato que se busca"
  - "Ubicar la fila correspondiente al registro que interesa"
  - "Leer el valor de la celda donde se cruzan esa fila y esa columna"
respuesta_orden: ["Ubicar la fila correspondiente al registro que interesa", "Ubicar la columna correspondiente al dato que se busca", "Leer el valor de la celda donde se cruzan esa fila y esa columna"]
explicacion: |
  Sin fijar primero la fila (o la columna), no hay una sola celda que
  leer.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "aplicacion"]

enunciado: "Una boleta de supermercado lista productos, cantidades y precios en filas. ¿Qué habilidad hace falta para entender cuánto costó cada producto?"
tipo: mc
opciones_explicitas:
  - "Leer una tabla: identificar la fila del producto y la columna del precio"
  - "Ninguna habilidad matemática, sólo hay que mirar el total final"
  - "Sólo sirve saber sumar, sin necesidad de leer filas ni columnas"
respuesta: "Leer una tabla: identificar la fila del producto y la columna del precio"

explicacion: |
  Es la misma habilidad de este módulo, aplicada a un documento real
  y cotidiano.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  equipos: [{nombre: "Águilas", puntos: 24, partidos: 10}, {nombre: "Tigres", puntos: 18, partidos: 10}, {nombre: "Leones", puntos: 30, partidos: 10}]
  idx: uno_de([0, 1, 2])

respuesta: equipos[idx].puntos
tipo: input

enunciado: "Tabla de un torneo — Águilas: 24 puntos (10 partidos); Tigres: 18 puntos (10 partidos); Leones: 30 puntos (10 partidos). ¿Cuántos puntos tiene {equipos[idx].nombre}?"

explicacion: |
  Misma habilidad que con la tabla de productos, en otro contexto.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "Con la tabla del torneo — Águilas: 24 puntos; Tigres: 18 puntos; Leones: 30 puntos — ¿qué equipo está primero en la tabla de posiciones?"
tipo: mc
opciones_explicitas:
  - "Leones"
  - "Águilas"
  - "Tigres"
respuesta: "Leones"

explicacion: |
  Tiene la mayor cantidad de puntos de los tres equipos.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Cómo se le llama, en general, al conjunto de datos de una misma fila (por ejemplo, todos los datos de un mismo producto)?"
tipo: mc
opciones_explicitas:
  - "Un registro"
  - "Un encabezado"
  - "Una celda"
respuesta: "Un registro"

explicacion: |
  Cada fila (fuera del encabezado) suele representar un registro
  completo.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 24
tipo: input

enunciado: "Con la tabla de puntos — Águilas: 24; Tigres: 18; Leones: 30 — ¿cuál es el promedio de puntos de los 3 equipos?"

pasos:
  - "(24 + 18 + 30) ÷ 3 = 72 ÷ 3 = 24"

explicacion: |
  Sumar la columna completa y dividir por la cantidad de filas.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla puede tener columnas con texto (como nombres o categorías), no sólo columnas numéricas."

explicacion: |
  La columna "Producto" o "Equipo", por ejemplo, es texto — sólo
  algunas columnas necesitan ser números.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 2
tipo: input

enunciado: "De la tabla de precios — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuántos productos cuestan MÁS de $100?"

pasos:
  - "Manzana ($120) y Pera ($150) superan los $100 — Naranja ($100) no supera, está justo en el límite."
  - "Total: 2 productos"

explicacion: |
  Hay que revisar cada fila una por una y contar cuántas cumplen la
  condición.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Si se reordenan las filas de una tabla (por ejemplo, de mayor a menor precio), los datos de cada registro no cambian — sólo cambia el orden en que se presentan."

explicacion: |
  Reordenar no agrega ni quita información, sólo la presenta distinto.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "Antes de confiar en los datos de una tabla, ¿qué conviene revisar además de los números en sí?"
tipo: mc
opciones_explicitas:
  - "De dónde vienen esos datos (la fuente) y si están actualizados"
  - "Sólo el color de fondo de la tabla"
  - "No hace falta revisar nada más, los números siempre son confiables"
respuesta: "De dónde vienen esos datos (la fuente) y si están actualizados"

explicacion: |
  Una tabla puede estar bien construida y aun así tener datos viejos o
  poco confiables si la fuente no es buena.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "De la tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿qué producto tiene MÁS unidades en stock?"
tipo: mc
opciones_explicitas:
  - "Banana"
  - "Manzana"
  - "Naranja"
respuesta: "Banana"

explicacion: |
  Banana tiene 45, el valor más alto de esa columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "De la misma tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿qué producto tiene MENOS unidades en stock?"
tipo: mc
opciones_explicitas:
  - "Pera"
  - "Naranja"
  - "Manzana"
respuesta: "Pera"

explicacion: |
  Pera tiene 15, el valor más bajo de esa columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una celda vacía en una tabla no siempre significa 'cero' — puede significar 'dato no disponible' o 'no aplica', y confundir ambos casos puede llevar a un error de interpretación."

explicacion: |
  Es un error común: tratar un dato faltante como si fuera 0 cuando en
  realidad nunca se midió ese valor.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "aplicacion"]

enunciado: "Un horario escolar tiene los días de la semana en las columnas y las horas del día en las filas. ¿Cómo se encuentra qué materia hay el miércoles a las 10 hs?"
tipo: mc
opciones_explicitas:
  - "Se busca la fila de las 10 hs y la columna del miércoles, y se lee la celda donde se cruzan"
  - "Se suman todas las materias de la semana"
  - "No se puede saber sin ver el horario completo del año"
respuesta: "Se busca la fila de las 10 hs y la columna del miércoles, y se lee la celda donde se cruzan"

explicacion: |
  Es exactamente el mismo procedimiento de cruzar fila y columna.
```

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber leer una tabla?"
tipo: mc
opciones_explicitas:
  - "Para encontrar, comparar y sumar datos organizados en filas y columnas, sin necesidad de que estén dibujados como gráfico"
  - "Sólo sirve para tablas de multiplicar"
  - "Sólo aplica a tablas con menos de 3 filas"
respuesta: "Para encontrar, comparar y sumar datos organizados en filas y columnas, sin necesidad de que estén dibujados como gráfico"

explicacion: |
  Es el prerrequisito directo de los tres módulos de gráficos que
  siguen — un gráfico es, en el fondo, una tabla dibujada.
```

