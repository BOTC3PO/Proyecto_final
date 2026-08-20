# Examen jefe — Maestro de la Continuidad

> Logro #55. Has dominado la continuidad, las coordenadas y los cuerpos redondos para resolver con precisión. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **120 preguntas totales** en 5/5 secciones.

---

## Sección: continuidad (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(-10, 10)
  punto: random(-10, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}x² + {b}x. ¿Es continua f en x={punto}?"

explicacion: |
  Todos los polinomios son continuos en todos los reales.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["aplicacion"]

variables:
  a: random(1, 8)
  b: random(-10, 10)
  punto: random(-8, 8)

respuesta: a * punto ^ 2 + b * punto
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = {a}x² + {b}x, continua en todos lados. ¿Cuánto vale f({punto}) (que también es el límite ahí)?"

explicacion: |
  Al ser continua, f({punto}) y el límite en {punto} son el mismo
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["evitable", "verdadero_falso"]

variables:
  a: random(1, 15)

respuesta: falso

tipo: vf

enunciado: "f(x) = (x² − {a ^ 2}) / (x − {a}). ¿Es f continua en x={a}?"

explicacion: |
  f no está definida en x={a} (denominador 0) — no es continua ahí,
  aunque el límite exista.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["evitable"]

variables:
  a: random(1, 20)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x² − {a ^ 2}) / (x − {a}) tiene una discontinuidad evitable en x={a}. ¿Qué valor habría que asignarle a f({a}) para que quedara continua ahí?"

pasos:
  - "El límite en x={a} es 2×{a} = {2 * a} — ese es el valor que 'tapa el agujero'"

explicacion: |
  Redefinir f({a}) como el valor del límite convierte la discontinuidad
  evitable en una función continua.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["evitable"]

variables:
  r1: random(1, 15)
  r2: random(1, 15)

respuesta: r1 - r2
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = (x² − {r1 + r2}x + {r1 * r2}) / (x − {r1}) tiene una discontinuidad evitable en x={r1}. ¿Qué valor habría que asignarle a f({r1}) para arreglarla?"

pasos:
  - "El límite en x={r1} es {r1}−{r2} = {r1 - r2}"

explicacion: |
  Se factorea el numerador, se cancela el factor común, y se evalúa el
  resultado en x={r1}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 15)
  otro_punto: a + random(1, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = (x² − {a ^ 2}) / (x − {a}). ¿Es f continua en x={otro_punto} (un punto distinto de {a})?"

explicacion: |
  El denominador sólo se anula en x={a} — en cualquier otro punto, f es
  una función racional bien definida y continua.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["opcion_multiple"]

respuesta: "Evitable (el límite existe, pero no coincide con f(a) o f(a) no está definida)"
tipo: mc
opciones_explicitas:
  - "Evitable (el límite existe, pero no coincide con f(a) o f(a) no está definida)"
  - "No evitable (el límite no existe)"

enunciado: "f(x) = (x²−9)/(x−3). En x=3, el límite existe (vale 6) pero f(3) no está definida. ¿Qué tipo de discontinuidad es?"

explicacion: |
  Se podría "arreglar" definiendo f(3)=6 — por eso es evitable.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["opcion_multiple"]

respuesta: "No evitable (el límite no existe)"
tipo: mc
opciones_explicitas:
  - "No evitable (el límite no existe)"
  - "Evitable (el límite existe, pero no coincide con f(a))"

enunciado: "En x=2, el límite por la izquierda de f da 5, y el límite por la derecha da 9. ¿Qué tipo de discontinuidad es?"

explicacion: |
  Como los límites laterales no coinciden, el límite completo no
  existe — no hay ningún valor que "tape el agujero".
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para que f sea continua en x=a, hacen falta tres cosas a la vez: que f(a) esté definida, que el límite exista, y que ese límite coincida con f(a)."

explicacion: |
  Si falta cualquiera de las tres, f es discontinua en a.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si el límite de f en x=a existe, entonces f ya es continua en a, sin necesidad de chequear nada más."

explicacion: |
  Falta comparar ese límite con f(a) — y f(a) tiene que estar definida
  primero. Las dos condiciones adicionales son necesarias.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Cualquier función que tenga una fracción (con x en el denominador) es discontinua en todos los puntos de su dominio."

explicacion: |
  Sólo es discontinua donde el denominador se anula (fuera del
  dominio) — en el resto de los puntos puede ser perfectamente continua.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una discontinuidad evitable se puede 'arreglar' redefiniendo el valor de la función en ese único punto, igualándolo al límite."

explicacion: |
  Es justamente por eso que se llama "evitable" — a diferencia de la no
  evitable, donde no hay ningún valor que sirva.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["verdadero_falso"]

variables:
  m: random(1, 10)
  b: random(-15, 15)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {m}x + {b}. ¿Es f continua en TODOS los números reales?"

explicacion: |
  Cualquier función lineal es continua en todo su dominio, sin ninguna
  excepción.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  k: random(1, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {k}/x. ¿Es f continua en TODOS los números reales (incluido x=0)?"

explicacion: |
  En x=0, f ni siquiera está definida (denominador 0) — no puede ser
  continua ahí. Es discontinua (no evitable: el límite tampoco existe,
  la función se dispara al infinito).
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 15)
  valor_asignado: uno_de([2, 0, -1]) + 2 * a

respuesta: (valor_asignado == (2 * a))
tipo: vf

enunciado: "Se define f(x) = (x²−{a ^ 2})/(x−{a}) para x≠{a}, y f({a}) = {valor_asignado} (a mano). ¿Queda f continua en x={a} con esa definición?"

explicacion: |
  Queda continua sólo si el valor asignado coincide exactamente con el
  límite, que es 2×{a} = {2 * a}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 10)
  b: random(11, 20)

respuesta: falso

tipo: vf

enunciado: "f(x) = {a} para x < 2, y f(x) = {b} para x ≥ 2. ¿Es f continua en x=2?"

explicacion: |
  El límite por la izquierda ({a}) y por la derecha ({b}) no coinciden
  — el límite en x=2 no existe, así que f no es continua ahí.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Que una función sea 'continua en un intervalo' significa que es continua en cada uno de los puntos de ese intervalo, sin excepción."

explicacion: |
  Basta con que falle en un solo punto del intervalo para que ya no sea
  continua "en todo el intervalo".
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  a: random(2, 20)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "f(x) = 5 / (x − {a}). ¿En qué valor de x es discontinua f?"

explicacion: |
  El único punto problemático es donde el denominador se anula: x={a}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una función se dispara hacia el infinito cerca de un punto (como y=k/x en x=0), la discontinuidad en ese punto es no evitable."

explicacion: |
  No hay ningún valor finito que se le pueda asignar a la función ahí
  para "tapar" ese comportamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 20)
  real: 2 * a
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "f(x) = (x²−{a ^ 2})/(x−{a}) tiene discontinuidad evitable en x={a}. ¿Es correcto que el valor que la arregla sea {propuesto}?"

explicacion: |
  El valor correcto es el límite, 2×{a} = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El producto de dos funciones continuas en un punto también es continuo en ese punto."

explicacion: |
  Se deriva directo de la propiedad del límite de un producto (ver
  `../limite/`).
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

variables:
  a: random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "f(x) = {a}^x. ¿Es f continua en todos los números reales?"

explicacion: |
  Las funciones exponenciales (ver `../familias-exponencial-logaritmica/`)
  son continuas en todo su dominio, que ya es todos los reales.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "intermedio"
  tags: ["verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "g(x) = log₁₀(x). ¿Es g continua en TODOS los números reales (incluidos los negativos y el 0)?"

explicacion: |
  g ni siquiera está DEFINIDA para x≤0 — no puede ser continua ahí. Es
  continua sólo en su dominio, x>0.
```

```
metadata:
  materia: "matematicas"
  tema: "continuidad"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Una forma intuitiva de pensar la continuidad es: se puede dibujar el gráfico de la función sin levantar el lápiz del papel."

explicacion: |
  No es una definición matemática rigurosa, pero ayuda a visualizar
  dónde aparecen las discontinuidades (los puntos donde sí hay que
  levantar el lápiz).
```

## Sección: coordenadas-de-un-punto (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es un par ordenado, como (3, 5)?"
tipo: mc
opciones_explicitas:
  - "Dos números que identifican un punto: el primero es la posición horizontal, el segundo la vertical"
  - "Dos números que se pueden escribir en cualquier orden sin cambiar el punto"
  - "Un número dividido en dos partes"
respuesta: "Dos números que identifican un punto: el primero es la posición horizontal, el segundo la vertical"

explicacion: |
  Se llama "ordenado" porque el orden de los dos números importa.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es la abscisa de un punto?"
tipo: mc
opciones_explicitas:
  - "La primera coordenada (x), la posición horizontal"
  - "La segunda coordenada (y), la posición vertical"
  - "La distancia del punto al origen"
respuesta: "La primera coordenada (x), la posición horizontal"

explicacion: |
  La ordenada es la segunda coordenada (y).
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué es la ordenada de un punto?"
tipo: mc
opciones_explicitas:
  - "La segunda coordenada (y), la posición vertical"
  - "La primera coordenada (x), la posición horizontal"
  - "El nombre del propio punto"
respuesta: "La segunda coordenada (y), la posición vertical"

explicacion: |
  La abscisa es la primera coordenada (x).
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos (2, 3) y (3, 2) son puntos distintos en el plano cartesiano."

explicacion: |
  El orden de las coordenadas importa: invertirlo cambia el punto.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)
  y: random(-10, 10)

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la abscisa (primera coordenada) del punto ({x}, {y})?"

explicacion: |
  Es el primer número del par ordenado.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)
  y: random(-10, 10)

respuesta: y
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la ordenada (segunda coordenada) del punto ({x}, {y})?"

explicacion: |
  Es el segundo número del par ordenado.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Para ubicar el punto (4, -2) en el plano, ¿cuál es el primer movimiento desde el origen?"
tipo: mc
opciones_explicitas:
  - "Moverse 4 unidades a la derecha"
  - "Moverse 2 unidades hacia abajo"
  - "Moverse 4 unidades hacia arriba"
respuesta: "Moverse 4 unidades a la derecha"

explicacion: |
  Primero se mueve sobre el eje x (la abscisa), y recién después sobre
  el eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier punto de la forma (a, 0), con la segunda coordenada en 0, está siempre sobre el eje x."

explicacion: |
  No se mueve nada en dirección vertical, así que queda sobre el eje
  horizontal.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Cualquier punto de la forma (0, b), con la primera coordenada en 0, está siempre sobre el eje y."

explicacion: |
  No se mueve nada en dirección horizontal, así que queda sobre el eje
  vertical.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "problema"]

respuesta: "(0, 0)"
tipo: mc
opciones_explicitas:
  - "(0, 0)"
  - "(1, 1)"
  - "(0, 1)"

enunciado: "¿Cuáles son las coordenadas del origen del plano cartesiano?"

explicacion: |
  Es el único punto que no se mueve en ninguna dirección desde sí
  mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Si la abscisa de un punto es negativa, ¿hacia qué lado del origen queda ese punto?"
tipo: mc
opciones_explicitas:
  - "A la izquierda"
  - "A la derecha"
  - "Hacia abajo"
respuesta: "A la izquierda"

explicacion: |
  Los valores negativos de x quedan a la izquierda del origen.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "vocabulario"]

enunciado: "Si la ordenada de un punto es negativa, ¿hacia qué lado del origen queda ese punto?"
tipo: mc
opciones_explicitas:
  - "Hacia abajo"
  - "Hacia arriba"
  - "A la izquierda"
respuesta: "Hacia abajo"

explicacion: |
  Los valores negativos de y quedan hacia abajo del origen.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  x: random(1, 10)
  y: random(1, 10)

respuesta: 0 - y
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está {x} unidades a la derecha del origen y {y} unidades hacia abajo. ¿Cuál es su ordenada?"

explicacion: |
  Hacia abajo es y negativo: la ordenada es -{y}.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "avanzado"
  tags: ["coordenadas"]

respuesta: falso
tipo: vf

enunciado: "Los puntos (5, -1) y (-1, 5) representan la misma posición en el plano."

explicacion: |
  Tienen las mismas dos cifras, pero en orden distinto: son puntos
  distintos.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Qué nombre recibe el punto (0, 0) en el plano cartesiano?"
tipo: mc
opciones_explicitas:
  - "El origen"
  - "El vértice"
  - "El centro de masa"
respuesta: "El origen"

explicacion: |
  Es el punto de referencia desde el que se miden todas las posiciones.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  n: random(1, 15)

respuesta: verdadero
tipo: vf

enunciado: "El punto ({n}, {n}) tiene la misma distancia horizontal y vertical al origen, porque su abscisa y su ordenada son iguales."

explicacion: |
  Ambas coordenadas valen {n}, así que el punto se mueve lo mismo en
  ambas direcciones desde el origen.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Un par ordenado en el plano cartesiano siempre tiene exactamente dos números: la abscisa y la ordenada."

explicacion: |
  Un tercer número haría falta recién en un espacio de tres dimensiones,
  fuera del alcance de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "ordenar"]

enunciado: "Ordená los pasos para ubicar el punto (x, y) en el plano cartesiano."
tipo: ordenar
opciones_explicitas:
  - "Desde ahí, moverse y unidades en dirección vertical"
  - "Partir del origen (0, 0)"
  - "Moverse x unidades sobre el eje horizontal"
respuesta_orden:
  - "Partir del origen (0, 0)"
  - "Moverse x unidades sobre el eje horizontal"
  - "Desde ahí, moverse y unidades en dirección vertical"

explicacion: |
  Siempre se resuelve primero el movimiento horizontal (x), y recién
  después el vertical (y).
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  y: random(-10, 10)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está sobre el eje y, en la posición vertical {y}. ¿Cuál es su abscisa?"

explicacion: |
  Todo punto sobre el eje y tiene abscisa 0.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "problema"]

variables:
  x: random(-10, 10)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está sobre el eje x, en la posición horizontal {x}. ¿Cuál es su ordenada?"

explicacion: |
  Todo punto sobre el eje x tiene ordenada 0.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la primera coordenada de un par ordenado se llama ___."
respuestas_validas:
  - "abscisa"

explicacion: |
  La segunda coordenada se llama ordenada.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "intermedio"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la segunda coordenada de un par ordenado se llama ___."
respuestas_validas:
  - "ordenada"

explicacion: |
  La primera coordenada se llama abscisa.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "avanzado"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "Un par ordenado describe una posición exacta y única en el plano: no puede haber dos puntos distintos con exactamente las mismas dos coordenadas."

explicacion: |
  Es lo que hace útil al sistema de coordenadas: cada punto tiene un
  'nombre' numérico propio.
```

```
metadata:
  materia: "matematicas"
  tema: "coordenadas_de_un_punto"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve nombrar un punto con un par ordenado?"
tipo: mc
opciones_explicitas:
  - "Es la forma más compacta de describir una posición exacta, necesaria para medir distancias y hallar puntos medios más adelante"
  - "Sólo sirve para dibujar triángulos"
  - "Sólo aplica a puntos que están sobre los ejes"
respuesta: "Es la forma más compacta de describir una posición exacta, necesaria para medir distancias y hallar puntos medios más adelante"

explicacion: |
  Sin coordenadas, no se podría calcular ni distancia ni punto medio
  entre dos puntos.
```

## Sección: correlacion-no-es-causalidad (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["correlacion", "vocabulario"]

enunciado: "¿Qué significa el principio 'correlación no implica causalidad'?"
tipo: mc
opciones_explicitas:
  - "Que dos variables correlacionadas (que se mueven juntas) no necesariamente significan que una cause a la otra"
  - "Que dos variables correlacionadas siempre están relacionadas por causalidad"
  - "Que la correlación y la causalidad son exactamente lo mismo"
respuesta: "Que dos variables correlacionadas (que se mueven juntas) no necesariamente significan que una cause a la otra"

explicacion: |
  Un coeficiente de correlación alto (`../regresion-lineal/`) no
  prueba causalidad por sí solo.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["tercera_variable", "aplicacion"]

enunciado: "Las ventas de helado y los ahogamientos en piletas están correlacionados: ambos suben en la misma época del año. ¿Cuál es la explicación real de esta correlación?"
tipo: mc
opciones_explicitas:
  - "Una tercera variable (el calor del verano) hace subir a ambas cosas a la vez, sin que ninguna cause a la otra"
  - "Comer helado causa directamente más ahogamientos"
  - "Los ahogamientos causan que suban las ventas de helado"
respuesta: "Una tercera variable (el calor del verano) hace subir a ambas cosas a la vez, sin que ninguna cause a la otra"

explicacion: |
  Es el ejemplo clásico de variable de confusión (tercera variable).
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["causalidad_inversa", "vocabulario"]

enunciado: "¿Qué es la 'causalidad inversa' como explicación alternativa a una correlación?"
tipo: mc
opciones_explicitas:
  - "Que la dirección real de la causa está invertida: no es que A cause B, sino que B cause A"
  - "Que ninguna de las dos variables está relacionada con la otra"
  - "Que la correlación calculada tiene un error de signo"
respuesta: "Que la dirección real de la causa está invertida: no es que A cause B, sino que B cause A"

explicacion: |
  Ejemplo: ¿sonreír causa felicidad, o la felicidad causa que la
  gente sonría más?
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion_espuria", "vocabulario"]

enunciado: "¿Qué es una correlación espuria (por coincidencia)?"
tipo: mc
opciones_explicitas:
  - "Una correlación fuerte entre dos variables que aparece por pura casualidad estadística, sin ningún mecanismo real que las conecte"
  - "Una correlación calculada con un método matemático incorrecto"
  - "Otro nombre para cualquier correlación negativa"
respuesta: "Una correlación fuerte entre dos variables que aparece por pura casualidad estadística, sin ningún mecanismo real que las conecte"

explicacion: |
  Como el consumo de queso mozzarella correlacionando con los
  doctorados en ingeniería civil — puro azar, sin relación real.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dos variables pueden estar fuertemente correlacionadas sin que ninguna de las dos cause a la otra en absoluto."

explicacion: |
  Puede deberse a una tercera variable, a coincidencia, o a
  causalidad inversa.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["tercera_variable", "problema"]

enunciado: "Las ventas de paraguas y la cantidad de accidentes de tránsito están correlacionadas: ambas suben los mismos días. ¿Cuál es la tercera variable más probable detrás de esta correlación?"
tipo: mc
opciones_explicitas:
  - "La lluvia: hace que más gente compre/use paraguas, y también que haya más accidentes (piso resbaladizo, menor visibilidad)"
  - "Los paraguas causan directamente los accidentes de tránsito"
  - "No existe ninguna explicación posible para esta correlación"
respuesta: "La lluvia: hace que más gente compre/use paraguas, y también que haya más accidentes (piso resbaladizo, menor visibilidad)"

explicacion: |
  Mismo patrón que el ejemplo de helados y ahogamientos: una tercera
  variable (el clima) mueve a ambas.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Cuál es la forma estándar de probar que A realmente CAUSA a B, más allá de una simple correlación?"
tipo: mc
opciones_explicitas:
  - "Un experimento controlado y aleatorizado, comparando un grupo que recibe el tratamiento contra un grupo de control"
  - "Calcular un coeficiente de correlación todavía más alto"
  - "No existe ninguna forma de probar causalidad de verdad"
respuesta: "Un experimento controlado y aleatorizado, comparando un grupo que recibe el tratamiento contra un grupo de control"

explicacion: |
  La aleatorización reparte parejo cualquier tercera variable posible
  entre ambos grupos.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["experimento"]

respuesta: verdadero
tipo: vf

enunciado: "Un estudio puramente observacional (medir variables tal como ocurren, sin intervenir) no puede, por sí solo, probar causalidad — siempre queda abierta la posibilidad de una tercera variable o causalidad inversa."

explicacion: |
  Por eso los estudios científicos serios buscan, cuando es posible,
  complementar con experimentos controlados.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un titular dice: 'Un estudio encuentra que las personas que duermen con la luz prendida tienen más problemas de salud'. ¿Qué pregunta crítica conviene hacerse antes de aceptar que dormir con luz CAUSA problemas de salud?"
tipo: mc
opciones_explicitas:
  - "¿El estudio fue un experimento controlado, o sólo observó una correlación que podría explicarse por una tercera variable (por ejemplo, quienes ya tienen problemas de salud podrían dormir distinto por otras razones)?"
  - "Ninguna pregunta hace falta, un titular de un estudio siempre implica causalidad probada"
  - "Sólo importa cuántas personas participaron en el estudio, nada más"
respuesta: "¿El estudio fue un experimento controlado, o sólo observó una correlación que podría explicarse por una tercera variable (por ejemplo, quienes ya tienen problemas de salud podrían dormir distinto por otras razones)?"

explicacion: |
  Es la aplicación directa del pensamiento crítico de este módulo a
  una noticia real.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["causalidad_inversa", "problema"]

enunciado: "Un estudio encuentra que las personas con más amigos reportan sentirse más felices. Alguien concluye: 'tener más amigos causa felicidad'. ¿Qué explicación alternativa (causalidad inversa) también es plausible?"
tipo: mc
opciones_explicitas:
  - "Que ser feliz haga a alguien más sociable y agradable de tratar, y por eso termine consiguiendo más amigos (la felicidad causaría los amigos, no al revés)"
  - "No hay ninguna explicación alternativa posible en este caso"
  - "Los amigos y la felicidad no pueden estar relacionados de ninguna forma"
respuesta: "Que ser feliz haga a alguien más sociable y agradable de tratar, y por eso termine consiguiendo más amigos (la felicidad causaría los amigos, no al revés)"

explicacion: |
  La correlación sola no distingue cuál de las dos direcciones (o
  ambas a la vez) es la real.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Qué caracteriza a un ensayo controlado aleatorizado (RCT)?"
tipo: mc
opciones_explicitas:
  - "Los participantes se asignan AL AZAR a un grupo que recibe el tratamiento o a un grupo de control, para poder comparar el efecto real"
  - "Los participantes eligen ellos mismos si quieren recibir el tratamiento o no"
  - "No tiene grupo de control, sólo mide a quienes ya recibieron el tratamiento"
respuesta: "Los participantes se asignan AL AZAR a un grupo que recibe el tratamiento o a un grupo de control, para poder comparar el efecto real"

explicacion: |
  Si los participantes eligieran ellos mismos su grupo, podría
  aparecer sesgo del voluntario (`../muestreo-y-sesgo/`).
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion_espuria"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantos más pares de variables se comparen al azar (sin ninguna hipótesis previa), más probable es encontrar correlaciones fuertes por pura coincidencia, sin ninguna relación real de por medio."

explicacion: |
  Es la razón matemática detrás de ejemplos absurdos como el consumo
  de mozzarella correlacionando con doctorados en ingeniería civil.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["correlacion_espuria", "aplicacion"]

enunciado: "El sitio 'Spurious Correlations' (Tyler Vigen) documenta con datos reales que el consumo per cápita de queso mozzarella en EE.UU. correlaciona fuertemente, año a año, con la cantidad de doctorados otorgados en ingeniería civil. ¿Qué explica esta correlación?"
tipo: mc
opciones_explicitas:
  - "Pura coincidencia estadística: no hay ningún mecanismo real que conecte el consumo de mozzarella con los doctorados en ingeniería"
  - "El consumo de mozzarella mejora el rendimiento académico en ingeniería civil"
  - "Los doctorados en ingeniería civil aumentan la producción de mozzarella"
respuesta: "Pura coincidencia estadística: no hay ningún mecanismo real que conecte el consumo de mozzarella con los doctorados en ingeniería"

explicacion: |
  Es el ejemplo clásico de correlación espuria, usado justamente para
  ilustrar este error de razonamiento de forma memorable.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "¿Cuál de estos dos casos tiene MÁS evidencia a favor de causalidad real, más allá de la correlación simple?"
tipo: mc
opciones_explicitas:
  - "Fumar y cáncer de pulmón: además de la correlación observacional, hay experimentos en animales, mecanismos biológicos conocidos (sustancias cancerígenas del humo) y estudios longitudinales que refuerzan la causalidad"
  - "Ventas de helado y ahogamientos: sólo hay una correlación estacional, sin ningún mecanismo biológico que conecte comer helado con ahogarse"
respuesta: "Fumar y cáncer de pulmón: además de la correlación observacional, hay experimentos en animales, mecanismos biológicos conocidos (sustancias cancerígenas del humo) y estudios longitudinales que refuerzan la causalidad"

explicacion: |
  La causalidad se establece con evidencia ACUMULADA de varios tipos,
  no con una sola correlación aislada.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una correlación muy fuerte (r cercano a ±1) puede ser más llamativa que una débil, pero por sí sola sigue sin probar causalidad — las mismas explicaciones alternativas (tercera variable, causalidad inversa, coincidencia) siguen siendo posibles."

explicacion: |
  La fuerza de la correlación no cambia el tipo de evidencia que
  aporta.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "aplicacion"]

enunciado: "¿Por qué un ensayo clínico serio siempre compara el tratamiento contra un grupo de control, en vez de sólo medir a quienes recibieron el tratamiento?"
tipo: mc
opciones_explicitas:
  - "Porque sin un grupo de control no hay forma de saber si la mejora observada se debe realmente al tratamiento, o hubiera pasado igual sin él"
  - "El grupo de control es sólo un formalismo sin ninguna utilidad real"
  - "Porque la ley obliga a tener siempre un grupo de control, sin ninguna razón científica"
respuesta: "Porque sin un grupo de control no hay forma de saber si la mejora observada se debe realmente al tratamiento, o hubiera pasado igual sin él"

explicacion: |
  El grupo de control es el punto de comparación que aísla el efecto
  real del tratamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Qué función cumple el grupo de control en un experimento?"
tipo: mc
opciones_explicitas:
  - "Sirve de punto de comparación: no recibe el tratamiento (o recibe un placebo), para poder medir qué hubiera pasado sin él"
  - "Recibe una dosis doble del tratamiento, para maximizar el efecto"
  - "Se elige siempre a mano, nunca al azar"
respuesta: "Sirve de punto de comparación: no recibe el tratamiento (o recibe un placebo), para poder medir qué hubiera pasado sin él"

explicacion: |
  Sin ese punto de comparación, no se puede aislar el efecto real del
  tratamiento.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["tercera_variable", "problema"]

enunciado: "En los incendios, se observa que a mayor cantidad de bomberos presentes, mayor es el monto de daños materiales del incendio. ¿Los bomberos CAUSAN más daños?"
tipo: mc
opciones_explicitas:
  - "No: la tercera variable es el TAMAÑO del incendio — los incendios más grandes necesitan más bomberos Y producen más daños, sin que unos causen los otros"
  - "Sí: enviar más bomberos causa directamente más daños materiales"
respuesta: "No: la tercera variable es el TAMAÑO del incendio — los incendios más grandes necesitan más bomberos Y producen más daños, sin que unos causen los otros"

explicacion: |
  Es un ejemplo clásico usado para ilustrar variables de confusión en
  cursos de estadística.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al leer un estudio que reporta sólo una correlación (sin experimento controlado), ¿qué actitud es la más razonable?"
tipo: mc
opciones_explicitas:
  - "Tomarlo como una pista interesante que merece más investigación, sin aceptar automáticamente que una variable causa a la otra"
  - "Rechazar por completo cualquier estudio que no sea un experimento controlado"
  - "Aceptar automáticamente que la variable que aparece primero en el titular es la causa"
respuesta: "Tomarlo como una pista interesante que merece más investigación, sin aceptar automáticamente que una variable causa a la otra"

explicacion: |
  Los estudios observacionales tienen valor real (generan hipótesis a
  investigar), pero no alcanzan solos para probar causalidad.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["completar"]

tipo: completar
enunciado: "Completá: ante una correlación entre A y B, además de 'A causa B', las otras explicaciones posibles son causalidad ___, una tercera variable, o pura coincidencia."
respuestas_validas:
  - "inversa"

explicacion: |
  Las cuatro explicaciones posibles: A causa B, B causa A (inversa),
  una tercera variable causa a ambas, o coincidencia.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["experimento", "completar"]

tipo: completar
enunciado: "Completá: en un experimento aleatorizado, asignar los participantes al azar entre grupo de tratamiento y grupo de control reparte parejo cualquier ___ variable posible entre ambos grupos."
respuestas_validas:
  - "tercera"

explicacion: |
  Es la razón por la que un experimento aleatorizado permite concluir
  causalidad de una forma que un estudio observacional no puede.
```

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve tener presente que 'correlación no implica causalidad'?"
tipo: mc
opciones_explicitas:
  - "Para leer con pensamiento crítico noticias, estudios y estadísticas, distinguiendo cuándo hay evidencia real de causalidad y cuándo sólo hay una correlación que podría explicarse de otra forma"
  - "Para rechazar automáticamente cualquier resultado estadístico, sin importar la evidencia"
  - "Sólo tiene aplicación en estudios médicos, no en otros campos"
respuesta: "Para leer con pensamiento crítico noticias, estudios y estadísticas, distinguiendo cuándo hay evidencia real de causalidad y cuándo sólo hay una correlación que podría explicarse de otra forma"

explicacion: |
  Cierra la cadena que empezó en `../regresion-lineal/`: ajustar una
  recta es sólo el primer paso, interpretarla con cuidado es el
  segundo.
```

## Sección: cual-miente-y-cuando (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["criterio", "vocabulario"]

enunciado: "¿Qué determina si una medida de tendencia central 'engaña' en una situación dada?"
tipo: mc
opciones_explicitas:
  - "Usar la medida equivocada para la pregunta que se está haciendo, o presentarla como si fuera toda la historia"
  - "La media siempre miente y la mediana siempre dice la verdad"
  - "Ninguna medida puede usarse mal, todas dan siempre la misma información"
respuesta: "Usar la medida equivocada para la pregunta que se está haciendo, o presentarla como si fuera toda la historia"

explicacion: |
  Cada medida responde una pregunta distinta — el problema es elegir
  mal cuál usar, no que alguna sea inherentemente falsa.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(20, 30)
  b: random(20, 30)
  c: random(20, 30)
  d: random(20, 30)
  atipico: random(200, 300)
  datos: [a, b, c, d, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cinco sueldos son (en miles): {a}, {b}, {c}, {d} y {atipico}. ¿Cuál es el sueldo PROMEDIO?"

pasos:
  - "Media = ({a}+{b}+{c}+{d}+{atipico}) / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  El sueldo de {atipico} arrastra bastante el promedio hacia arriba.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "mediana"]

respuesta: verdadero
tipo: vf

enunciado: "La media es más sensible a valores atípicos que la mediana — un solo valor extremo puede correr bastante el promedio, sin afectar casi a la mediana."

explicacion: |
  Es la razón matemática detrás de todo este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["media", "mediana", "aplicacion"]

enunciado: "Si un país anuncia que 'el sueldo promedio subió 15%', pero unas pocas personas con sueldos muy altos ganaron mucho más este año, ¿qué podría estar pasando con el sueldo mediano?"
tipo: mc
opciones_explicitas:
  - "Podría haber subido mucho menos que 15% (o incluso no haber subido), porque el promedio está siendo arrastrado por esos pocos sueldos altos"
  - "El sueldo mediano tiene que haber subido exactamente lo mismo, siempre"
  - "El sueldo mediano no puede calcularse a partir de datos de sueldos"
respuesta: "Podría haber subido mucho menos que 15% (o incluso no haber subido), porque el promedio está siendo arrastrado por esos pocos sueldos altos"

explicacion: |
  Es el caso real más citado de esta distorsión — el promedio sube sin
  que la mayoría de la gente lo note en su propio bolsillo.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(15, 25)
  b: random(15, 25)
  c: random(15, 25)
  atipico: random(150, 200)
  datos: [a, b, c, atipico]

respuesta: redondear(promedio(datos) - mediana(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cuatro valores son: {a}, {b}, {c}, {atipico}. ¿Cuál es la diferencia entre la media y la mediana de este conjunto (media menos mediana)?"

pasos:
  - "Media = {redondear(promedio(datos), 2)}. Mediana = {mediana(datos)}."
  - "Diferencia = {redondear(promedio(datos), 2)} − {mediana(datos)} = {redondear(promedio(datos) - mediana(datos), 2)}"

explicacion: |
  Cuanto más grande esta diferencia, más está siendo arrastrada la
  media por valores extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos de datos con valores muy distintos entre sí pueden tener exactamente la misma mediana."

explicacion: |
  Por ejemplo, {4, 5, 6} y {1, 5, 100} tienen la misma mediana (5),
  aunque estén repartidos de forma completamente distinta.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "El grupo A tiene las notas 6, 7, 8 (mediana 7). El grupo B tiene las notas 2, 7, 10 (mediana también 7). Aunque tengan la misma mediana, ambos grupos tienen un desempeño igual de parejo entre sus alumnos."

explicacion: |
  Es falso: el grupo A es mucho más parejo (todas cerca de 7); el
  grupo B tiene mucha más dispersión (de 2 a 10) — la mediana sola no
  muestra esa diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media"]

enunciado: "¿Qué tipo de información se pierde al resumir un conjunto de datos en un solo promedio, sin ningún dato adicional?"
tipo: mc
opciones_explicitas:
  - "Cuánto varían los datos entre sí (la dispersión), y si hay valores atípicos que estén distorsionando ese promedio"
  - "Ninguna información se pierde nunca al calcular un promedio"
  - "Se pierde sólo el orden en que se recolectaron los datos, nada más relevante"
respuesta: "Cuánto varían los datos entre sí (la dispersión), y si hay valores atípicos que estén distorsionando ese promedio"

explicacion: |
  Un solo número nunca cuenta toda la historia de un conjunto de
  datos.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media"]

respuesta: verdadero
tipo: vf

enunciado: "Un promedio alto no garantiza que la mayoría de los casos individuales estén por encima de ese valor — es posible que la mayoría esté por debajo, y sólo unos pocos casos muy altos suban el promedio."

explicacion: |
  Es exactamente lo que pasa con el sueldo promedio cuando hay mucha
  desigualdad: la mayoría puede estar por debajo del promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  base: random(10, 20)
  atipico: random(150, 250)
  datos: [base, base + 1, base + 2, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cuatro valores son: {base}, {base + 1}, {base + 2} y {atipico}. La mediana de este conjunto es {mediana(datos)}. ¿Cuál es la media?"

pasos:
  - "Media = ({base}+{base + 1}+{base + 2}+{atipico}) / 4 = {redondear(promedio(datos), 2)}"

explicacion: |
  La media queda muy por encima de la mediana — señal clara de que hay
  un valor mucho más alto que el resto, distorsionando el promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["criterio"]

enunciado: "Frente a cualquier estadística resumida en un solo número (un promedio, un porcentaje), ¿qué pregunta conviene hacerse?"
tipo: mc
opciones_explicitas:
  - "¿Qué información se pierde al resumir todo en este solo número?"
  - "¿El número es par o impar?"
  - "No hace falta hacerse ninguna pregunta, los números nunca engañan"
respuesta: "¿Qué información se pierde al resumir todo en este solo número?"

explicacion: |
  Es la pregunta base del pensamiento crítico frente a cualquier dato
  estadístico.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio", "ordenar"]

enunciado: "Ordená los pasos para evaluar si un promedio dado representa bien a la mayoría de los casos."
tipo: ordenar
opciones_explicitas:
  - "Si la diferencia es grande, sospechar que hay valores atípicos distorsionando el promedio"
  - "Calcular también la mediana del mismo conjunto de datos"
  - "Comparar ambos valores: si son parecidos, el promedio representa bien; si difieren mucho, no"
respuesta_orden:
  - "Calcular también la mediana del mismo conjunto de datos"
  - "Comparar ambos valores: si son parecidos, el promedio representa bien; si difieren mucho, no"
  - "Si la diferencia es grande, sospechar que hay valores atípicos distorsionando el promedio"

explicacion: |
  Comparar media y mediana es la forma más directa de detectar esta
  distorsión sin necesitar ver todos los datos originales.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "aplicacion"]

enunciado: "Una noticia dice 'el ingreso promedio de las familias subió este año'. ¿Por qué esto no garantiza que la situación económica de la mayoría de las familias haya mejorado?"
tipo: mc
opciones_explicitas:
  - "Porque el promedio puede haber subido sólo por una mejora fuerte en un grupo chico de familias con más ingresos, sin que la mayoría haya mejorado"
  - "Porque los promedios de ingresos nunca pueden subir realmente"
  - "Porque la noticia tiene que estar necesariamente mintiendo"
respuesta: "Porque el promedio puede haber subido sólo por una mejora fuerte en un grupo chico de familias con más ingresos, sin que la mayoría haya mejorado"

explicacion: |
  No implica mala intención de quien da la noticia — el dato en sí es
  cierto, sólo que incompleto sin la mediana o la distribución al lado.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["moda", "problema"]

variables:
  repetido: random(10, 20)
  a: random(21, 30)
  b: random(31, 40)
  c: random(41, 50)
  d: random(51, 60)

respuesta: repetido
tipo: input

enunciado: "En un grupo de 6 personas, las edades son: {repetido}, {repetido}, {a}, {b}, {c}, {d}. ¿Cuál es la moda de este grupo?"

pasos:
  - "{repetido} aparece 2 veces, el resto aparece 1 vez cada uno — apenas alcanza para ser la moda."

explicacion: |
  Con sólo 2 repeticiones sobre 6 datos casi todos distintos, la moda
  no dice mucho sobre el grupo en general — es una moda 'débil'.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "mediana"]

enunciado: "¿En qué situación conviene usar la mediana en vez de la media?"
tipo: mc
opciones_explicitas:
  - "Cuando hay valores atípicos que distorsionarían mucho el promedio"
  - "Cuando se necesita saber la suma total de todos los datos"
  - "Cuando todos los datos son exactamente iguales entre sí"
respuesta: "Cuando hay valores atípicos que distorsionarían mucho el promedio"

explicacion: |
  Es justamente lo que resiste bien la mediana y no la media.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana"]

enunciado: "¿En qué situación conviene usar la media en vez de la mediana?"
tipo: mc
opciones_explicitas:
  - "Cuando se necesita reconstruir el TOTAL a partir del promedio y la cantidad de datos (media × cantidad = total), algo que la mediana no permite"
  - "Siempre, la mediana nunca sirve para nada"
  - "Sólo cuando hay valores atípicos muy grandes"
respuesta: "Cuando se necesita reconstruir el TOTAL a partir del promedio y la cantidad de datos (media × cantidad = total), algo que la mediana no permite"

explicacion: |
  Es una ventaja práctica real de la media que la mediana no tiene.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "problema"]

variables:
  media_gasto: random(200, 500)
  personas: random(10, 30)

respuesta: media_gasto * personas
tipo: input
unidad: "$"

enunciado: "El gasto PROMEDIO de {personas} personas en un evento fue de ${media_gasto} cada una. ¿Cuál fue el gasto TOTAL de todas juntas?"

pasos:
  - "Total = media × cantidad = {media_gasto} × {personas} = {media_gasto * personas}"

explicacion: |
  Con la mediana sola, este cálculo no sería posible — sólo la media
  tiene esta propiedad de reconstruir el total.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Conociendo sólo la mediana de un conjunto de datos y la cantidad de datos, NO se puede calcular la suma total de todos los valores (a diferencia de la media, que sí lo permite)."

explicacion: |
  La mediana no 'contiene' la información de cuánto suman todos los
  valores, sólo cuál queda en el medio.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "aplicacion"]

enunciado: "Si se dice que 'la temperatura promedio global subió 1,5°C', ¿significa que TODOS los lugares del planeta subieron exactamente 1,5°C?"
tipo: mc
opciones_explicitas:
  - "No — es un promedio global; algunas zonas pueden haber subido mucho más y otras mucho menos (o incluso bajado)"
  - "Sí, un promedio global siempre significa que todos los lugares cambiaron exactamente igual"
  - "No tiene sentido promediar temperaturas de distintos lugares"
respuesta: "No — es un promedio global; algunas zonas pueden haber subido mucho más y otras mucho menos (o incluso bajado)"

explicacion: |
  Es el mismo problema de fondo que el sueldo promedio: un promedio
  resume, pero no describe cada caso individual.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio"]

respuesta: verdadero
tipo: vf

enunciado: "Presentar sólo una medida (como el promedio) sin más contexto puede ser matemáticamente correcto y honesto, y AL MISMO TIEMPO dar una idea incompleta o engañosa de la situación real."

explicacion: |
  No hace falta mala intención para que un resumen estadístico, sin
  contexto, dé una impresión equivocada.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(60, 80)
  b: random(60, 80)
  c: random(60, 80)
  d: random(60, 80)
  bajo: random(5, 20)
  datos: [a, b, c, d, bajo]

respuesta: redondear(mediana(datos) - promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Las notas de 5 alumnos (sobre 100) son: {a}, {b}, {c}, {d} y {bajo} (un alumno con una nota muy baja). ¿Cuál es la diferencia entre la mediana y la media (mediana menos media)?"

pasos:
  - "Mediana = {mediana(datos)}. Media = {redondear(promedio(datos), 2)}."
  - "Mediana − Media = {mediana(datos)} − {redondear(promedio(datos), 2)} = {redondear(mediana(datos) - promedio(datos), 2)}"

explicacion: |
  Acá el valor atípico es BAJO, no alto — arrastra la media hacia
  abajo, por eso la mediana queda por encima de la media (al revés
  que en el caso del sueldo alto).
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor atípico puede distorsionar la media hacia arriba (si es mucho más grande que el resto) o hacia abajo (si es mucho más chico), según el caso."

explicacion: |
  No siempre el problema es un valor 'demasiado alto' — también puede
  ser uno 'demasiado bajo'.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio", "problema"]

enunciado: "Un estudio mide el tiempo que tardan 100 personas en resolver un problema, y hay 3 personas que tardaron muchísimo más que las demás (rezagadas). ¿Qué medida conviene reportar como 'tiempo típico'?"
tipo: mc
opciones_explicitas:
  - "La mediana, porque esos 3 casos extremos no la distorsionan tanto como distorsionarían a la media"
  - "La media, porque siempre es la medida más precisa"
  - "La moda, porque siempre representa mejor que las otras dos"
respuesta: "La mediana, porque esos 3 casos extremos no la distorsionan tanto como distorsionarían a la media"

explicacion: |
  Es exactamente el criterio de este módulo: elegir la medida según
  si hay o no valores atípicos relevantes.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender cuál medida 'miente' y cuándo?"
tipo: mc
opciones_explicitas:
  - "Para elegir la medida de tendencia central correcta según la pregunta y los datos, y para leer con criterio crítico cualquier estadística resumida en un solo número"
  - "Para saber que la mediana siempre es mejor que la media en todos los casos"
  - "Para desconfiar de todas las estadísticas, sin excepción"
respuesta: "Para elegir la medida de tendencia central correcta según la pregunta y los datos, y para leer con criterio crítico cualquier estadística resumida en un solo número"

explicacion: |
  Es el puente directo hacia
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/` — ver
  cuánto varían los datos es la forma más completa de responder
  'cuánto se pierde al resumir en un solo número'.
```

## Sección: cuerpos-redondos-y-poliedros/cilindros (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Qué es un cilindro?"
tipo: mc
opciones_explicitas:
  - "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"
  - "Un poliedro con caras triangulares"
  - "Un cuerpo con una sola base circular terminada en punta"
respuesta: "Un cuerpo redondo con dos bases circulares iguales unidas por una superficie curva"

explicacion: |
  Es el equivalente "redondo" de un prisma: base circular en vez de
  polígono.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

enunciado: "¿Cuáles son los dos datos que definen el tamaño de un cilindro?"
tipo: mc
opciones_explicitas:
  - "El radio de la base y la altura"
  - "El perímetro y el área"
  - "La cantidad de caras y de vértices"
respuesta: "El radio de la base y la altura"

explicacion: |
  Con el radio (r) y la altura (h) alcanza para calcular volumen y
  superficie.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "volumen", "vocabulario"]

enunciado: "¿Cuál es la fórmula del volumen de un cilindro?"
tipo: mc
opciones_explicitas:
  - "π × r² × h"
  - "π × r × h"
  - "2 × π × r × h"
respuesta: "π × r² × h"

explicacion: |
  Área de la base circular (π × r²) por la altura.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 15)
  h: random(3, 20)

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³"

explicacion: |
  Se aplica π × r² × h directamente.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  d: random(4, 30)
  h: random(3, 20)
  r: d / 2

respuesta: redondear(pi * r * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el volumen de un cilindro de diámetro {d} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Radio: {d} ÷ 2 = {r} cm. Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³."

explicacion: |
  Primero hay que pasar de diámetro a radio (dividir por 2) antes de
  aplicar la fórmula.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(h, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de radio {r} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su altura?"

pasos:
  - "{redondear(volumen, 2)} ÷ (π × {r}²) = {redondear(volumen / (pi * r * r), 2)} cm"

explicacion: |
  Se despeja la altura dividiendo el volumen por el área de la base
  circular (π × r²).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  volumen: pi * r * r * h

respuesta: redondear(r, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un cilindro de altura {h} cm tiene un volumen de {redondear(volumen, 2)} cm³. ¿Cuál es su radio?"

pasos:
  - "sqrt({redondear(volumen, 2)} ÷ (π × {h})) = {redondear(sqrt(volumen / (pi * h)), 2)} cm"

explicacion: |
  Se despeja: primero se divide el volumen por (π × altura), y después
  se saca la raíz cuadrada (porque el radio está al cuadrado).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 12)
  h: random(3, 20)

respuesta: redondear(2 * pi * r * h, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área de la superficie lateral (curva) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm²"

explicacion: |
  Es la circunferencia de la base (2πr) multiplicada por la altura —
  como "desenrollar" la parte curva en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "superficie"]

variables:
  r: random(2, 10)
  h: random(3, 15)

respuesta: redondear((2 * pi * r * h) + (2 * pi * r * r), 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuál es el área total (lateral + las dos bases) de un cilindro de radio {r} cm y altura {h} cm? Redondeá a 2 decimales."

pasos:
  - "Lateral: 2 × π × {r} × {h} = {redondear(2 * pi * r * h, 2)} cm². Bases: 2 × π × {r}² = {redondear(2 * pi * r * r, 2)} cm². Total: {redondear((2 * pi * r * h) + (2 * pi * r * r), 2)} cm²."

explicacion: |
  Se suma el área lateral más las dos bases circulares.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "capacidad", "problema"]

variables:
  r: random(3, 6)
  h: random(8, 15)

respuesta: redondear((pi * r * r * h) / 1000, 3)
tipo: input
tolerancia_abs: 0.005

enunciado: "Una lata cilíndrica tiene {r} cm de radio y {h} cm de altura. ¿Cuántos litros de líquido puede contener? Redondeá a 3 decimales."

pasos:
  - "Volumen: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. En litros: {redondear(pi * r * r * h, 2)} ÷ 1000 = {redondear((pi * r * r * h) / 1000, 3)}."

explicacion: |
  Se calcula el volumen en cm³ y se convierte a litros (1000 cm³ = 1
  litro).
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El cilindro NO es un poliedro, porque tiene una superficie curva (no todas sus caras son planas)."

explicacion: |
  Prismas y pirámides son poliedros (todas sus caras son polígonos
  planos); el cilindro tiene una superficie lateral curva, así que se
  clasifica como cuerpo redondo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un cilindro tiene dos bases circulares, iguales y paralelas."

explicacion: |
  Es la misma idea que las dos bases de un prisma, pero circulares en
  vez de poligonales.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "prisma", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El volumen del cilindro se calcula con la misma lógica que el de un prisma (área de la base por altura), sólo que la base es un círculo."

explicacion: |
  V = π×r²×h es exactamente área de la base (π×r²) por altura, igual
  patrón que `../prismas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: falso
tipo: vf

enunciado: "Si el radio de un cilindro de {r} cm y altura {h} cm se duplica (manteniendo la misma altura), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con el radio doble: π × {2 * r}² × {h} = {redondear(pi * (2 * r) * (2 * r) * h, 2)} cm³."

explicacion: |
  Como el radio está al cuadrado en la fórmula, duplicarlo multiplica el
  volumen por 4, no por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "volumen"]

variables:
  r: random(2, 8)
  h: random(3, 12)

respuesta: verdadero
tipo: vf

enunciado: "Si la altura de un cilindro de radio {r} cm y altura {h} cm se duplica (manteniendo el mismo radio), su volumen también se duplica."

pasos:
  - "Volumen original: π × {r}² × {h} = {redondear(pi * r * r * h, 2)} cm³. Con la altura doble: π × {r}² × {2 * h} = {redondear(pi * r * r * (2 * h), 2)} cm³."

explicacion: |
  A diferencia del radio, la altura NO está al cuadrado en la fórmula:
  duplicarla sí duplica el volumen.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "comparacion"]

variables:
  r1: random(2, 10)
  h1: random(3, 15)
  r2: random(2, 10)
  h2: random(3, 15)

restricciones:
  - (r1 * r1 * h1) != (r2 * r2 * h2)

respuesta: (r1 * r1 * h1) > (r2 * r2 * h2)
tipo: vf

enunciado: "¿Tiene mayor volumen un cilindro de radio {r1} cm y altura {h1} cm, que otro de radio {r2} cm y altura {h2} cm?"

pasos:
  - "Como ambos multiplican por π, alcanza con comparar r² × h: {r1}² × {h1} = {r1 * r1 * h1} contra {r2}² × {h2} = {r2 * r2 * h2}."

explicacion: |
  Se puede comparar sin calcular π × r² × h completo, porque el factor π
  es el mismo en los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

enunciado: "¿Cuál es la fórmula del área lateral (curva) de un cilindro?"
tipo: mc
opciones_explicitas:
  - "2 × π × r × h"
  - "π × r²"
  - "π × r² × h"
respuesta: "2 × π × r × h"

explicacion: |
  Es la circunferencia de la base (2πr) por la altura — como
  "desenrollar" la superficie curva en un rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "superficie", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se \"desenrolla\" la superficie lateral de un cilindro, queda un rectángulo cuyo largo es la circunferencia de la base y cuyo ancho es la altura del cilindro."

explicacion: |
  Se retoma en detalle en `../desarrollo-plano/`.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "completar"]

tipo: completar
enunciado: "Completá: el volumen del cilindro es π por el radio al cuadrado, por la ___."
respuestas_validas:
  - "altura"

explicacion: |
  V = π × r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "completar"]

variables:
  r: random(2, 8)
  h: random(3, 12)

tipo: completar
enunciado: "Completá: el volumen de un cilindro de radio {r} cm y altura {h} cm es ___ cm³ (redondeado a 2 decimales)."
respuestas_validas:
  - redondear(pi * r * r * h, 2)

explicacion: |
  V = π × r² × h.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "prisma", "problema"]

variables:
  r: random(3, 10)
  h: random(3, 15)

respuesta: (r * r) * h
tipo: input
tolerancia_abs: 0

enunciado: "Un prisma de base cuadrada tiene {r} cm de lado y {h} cm de altura. ¿Cuál es su volumen?"

explicacion: |
  Volumen del prisma cuadrado: lado² × altura — sirve como referencia
  para comparar con un cilindro de radio equivalente en el próximo
  ejercicio.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "verificacion"]

variables:
  r: random(2, 10)
  h: random(3, 15)
  correcto: redondear(pi * r * r * h, 1)
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.01)
tipo: vf

enunciado: "¿Está bien calculado esto? El volumen de un cilindro de radio {r} cm y altura {h} cm es {mostrado} cm³ (redondeado a 1 decimal)."

explicacion: |
  Se recalcula π × r² × h y se compara con el valor mostrado.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "comparacion"]

enunciado: "¿Cuál de estos cilindros tiene mayor volumen: uno de radio 4 cm y altura 10 cm, o uno de radio 5 cm y altura 6 cm?"
tipo: mc
opciones_explicitas:
  - "Radio 4 cm y altura 10 cm"
  - "Radio 5 cm y altura 6 cm"
respuesta: "Radio 4 cm y altura 10 cm"

pasos:
  - "r²×h: 4² × 10 = 160 contra 5² × 6 = 150."

explicacion: |
  Aunque el segundo tiene mayor radio, el primero gana porque el radio
  al cuadrado no compensa la diferencia de altura en este caso.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "avanzado"
  tags: ["cilindro", "orden"]

tipo: ordenar
enunciado: "Ordená estos cilindros de menor a mayor volumen (comparando r²×h, ya que todos comparten el factor π): radio 2 y altura 20; radio 5 y altura 2; radio 3 y altura 8; radio 4 y altura 6."
opciones_explicitas:
  - "Radio 3 y altura 8"
  - "Radio 2 y altura 20"
  - "Radio 4 y altura 6"
  - "Radio 5 y altura 2"
respuesta_orden:
  - "Radio 5 y altura 2"
  - "Radio 3 y altura 8"
  - "Radio 2 y altura 20"
  - "Radio 4 y altura 6"

pasos:
  - "r²×h: 2²×20=80; 5²×2=50; 3²×8=72; 4²×6=96."

explicacion: |
  Se calcula r²×h para cada uno (el factor π es común a todos, así que
  no hace falta calcularlo) y se ordena: 50 < 72 < 80 < 96.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "intermedio"
  tags: ["cilindro", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "La fórmula del volumen del cilindro usa el diámetro al cuadrado, no el radio al cuadrado."

explicacion: |
  Usa el RADIO al cuadrado (V = π × r² × h). Si sólo se conoce el
  diámetro, hay que dividirlo por 2 primero para obtener el radio.
```

```
metadata:
  materia: "matematicas"
  tema: "cilindros"
  nivel: "basico"
  tags: ["cilindro", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que hace falta saber para calcular el volumen o la superficie de un cilindro es el radio de su base circular y su altura."

explicacion: |
  Con esos dos datos alcanza para aplicar todas las fórmulas del cilindro
  vistas en este módulo.
```
