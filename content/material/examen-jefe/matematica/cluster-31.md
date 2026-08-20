# Examen jefe — Maestro de las Transformaciones

> Logro #82. Completaste el parcial de transformaciones geométricas y triángulos, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: transformaciones-geometricas/homotecia (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Qué es una homotecia?"
tipo: mc
opciones_explicitas:
  - "Agrandar o achicar una figura desde un punto fijo, según una razón"
  - "Deslizar una figura sin cambiar su tamaño"
  - "Voltear una figura como en un espejo"
respuesta: "Agrandar o achicar una figura desde un punto fijo, según una razón"

explicacion: |
  Es la única de las cuatro transformaciones que cambia el tamaño de la
  figura.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Qué dos datos definen una homotecia?"
tipo: mc
opciones_explicitas:
  - "El centro de homotecia y la razón (factor de escala)"
  - "Un vector de dirección y magnitud"
  - "Un eje de simetría"
respuesta: "El centro de homotecia y la razón (factor de escala)"

explicacion: |
  La razón indica cuánto se agranda o se achica la figura.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Una homotecia conserva la forma de la figura (los ángulos), pero no necesariamente el tamaño."

explicacion: |
  Por eso la imagen y la original son semejantes, no congruentes (salvo
  que la razón sea 1 o -1).
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  distancia_original: random(2, 15)
  k: random(2, 5)

respuesta: distancia_original * k
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro de homotecia. Se aplica una homotecia de razón k = {k}. ¿A qué distancia del centro queda la imagen de ese punto?"

pasos:
  - "{distancia_original} × {k} = {distancia_original * k} cm"

explicacion: |
  Con razón mayor a 1, la figura se amplía: el punto se aleja del
  centro.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  mitad: random(2, 20)
  distancia_original: 2 * mitad

respuesta: mitad
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro de homotecia. Se aplica una homotecia de razón k = 1/2. ¿A qué distancia del centro queda la imagen de ese punto?"

pasos:
  - "{distancia_original} × (1/2) = {mitad} cm"

explicacion: |
  Con razón entre 0 y 1, la figura se reduce: el punto se acerca al
  centro.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de homotecia es k = 1, la figura queda exactamente igual, sin cambiar de tamaño ni de posición."

explicacion: |
  Es la transformación identidad: cada punto se queda a la misma
  distancia del centro que tenía.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Una homotecia de razón k = -1 produce exactamente el mismo resultado que una rotación de 180° alrededor del mismo centro."

explicacion: |
  El tamaño no cambia (|k| = 1) pero cada punto queda del lado opuesto
  del centro, a la misma distancia — igual que rotar 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Qué significa que la razón de una homotecia sea negativa?"
tipo: mc
opciones_explicitas:
  - "Que la imagen queda del lado opuesto del centro, respecto de la figura original"
  - "Que la figura se hace más chica siempre"
  - "Que la homotecia no es válida"
respuesta: "Que la imagen queda del lado opuesto del centro, respecto de la figura original"

explicacion: |
  Con razón positiva, la imagen queda del mismo lado del centro que el
  punto original; con razón negativa, del lado contrario.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "problema"]

variables:
  punto: random(2, 20)
  k: uno_de([-2, -3])

respuesta: punto * k
tipo: input
tolerancia_abs: 0

enunciado: "El centro de homotecia está en la posición 0 de una recta numérica. Un punto está en la posición {punto}. Se aplica una homotecia de razón k = {k}. ¿En qué posición queda la imagen?"

pasos:
  - "{punto} × ({k}) = {punto * k}"

explicacion: |
  Al ser k negativo, la imagen queda del lado opuesto del centro
  respecto del punto original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de homotecia?"
tipo: mc
opciones_explicitas:
  - "Ampliar o reducir un documento en una fotocopiadora"
  - "Ver el reflejo de un objeto en un espejo"
  - "Girar las manecillas de un reloj"
respuesta: "Ampliar o reducir un documento en una fotocopiadora"

explicacion: |
  La fotocopiadora aplica una razón de escala (por ejemplo, 150% o 70%)
  manteniendo la forma del original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Salvo que la razón sea 1 o -1, una figura y su imagen por homotecia son semejantes (misma forma, distinto tamaño), no congruentes."

explicacion: |
  Congruencia exige mismo tamaño Y forma; semejanza sólo exige misma
  forma y proporciones.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "completar"]

tipo: completar
enunciado: "Completá: distancia del centro al punto imagen = ___ × distancia del centro al punto original."
respuestas_validas:
  - "k"
  - "la razón"

explicacion: |
  k es la razón (o factor de escala) de la homotecia.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "ordenar"]

enunciado: "Ordená los pasos para aplicar una homotecia a un punto."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar esa distancia por k para ubicar el punto imagen sobre la misma recta"
  - "Elegir el centro de homotecia y la razón k"
  - "Medir la distancia entre el centro y el punto original"
respuesta_orden:
  - "Elegir el centro de homotecia y la razón k"
  - "Medir la distancia entre el centro y el punto original"
  - "Multiplicar esa distancia por k para ubicar el punto imagen sobre la misma recta"

explicacion: |
  El punto imagen siempre queda sobre la recta que ya unía al centro con
  el punto original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "vocabulario"]

enunciado: "De las cuatro transformaciones geométricas (traslación, rotación, reflexión, homotecia), ¿cuál es la única que puede cambiar el tamaño de la figura?"
tipo: mc
opciones_explicitas:
  - "La homotecia"
  - "La rotación"
  - "La reflexión"
respuesta: "La homotecia"

explicacion: |
  Las otras tres son isometrías: conservan siempre el tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  lado: random(3, 12)
  k: random(2, 6)

respuesta: lado * k
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene un lado de {lado} cm. Se le aplica una homotecia de razón {k}. ¿Cuánto mide ese mismo lado en la figura imagen?"

pasos:
  - "{lado} × {k} = {lado * k} cm"

explicacion: |
  Todas las medidas de la figura quedan multiplicadas por la razón k.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "problema"]

variables:
  lado_original: random(2, 10)
  k: random(2, 8)
  lado_imagen: lado_original * k

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Un lado de {lado_original} cm en la figura original mide {lado_imagen} cm en la imagen, después de una homotecia. ¿Cuál fue la razón de la homotecia?"

pasos:
  - "{lado_imagen} ÷ {lado_original} = {k}"

explicacion: |
  La razón es el cociente entre la medida en la imagen y la medida
  original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la razón de homotecia no es 1, el centro de homotecia es el único punto que no se mueve."

explicacion: |
  Todos los demás puntos se alejan o se acercan al centro, según la
  razón.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "intermedio"
  tags: ["homotecia", "problema"]

variables:
  tercio: random(2, 15)
  distancia_original: 3 * tercio

respuesta: tercio
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro de homotecia. Se aplica una homotecia de razón k = 1/3. ¿A qué distancia del centro queda la imagen?"

pasos:
  - "{distancia_original} × (1/3) = {tercio} cm"

explicacion: |
  Con razón 1/3, la nueva distancia es la tercera parte de la original.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La sombra que proyecta un objeto desde una fuente de luz puntual es un ejemplo de homotecia: la fuente de luz actúa como centro."

explicacion: |
  Cuanto más lejos está la superficie donde cae la sombra, mayor la
  razón de ampliación.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia"]

enunciado: "Si la razón de una homotecia es un número entre 0 y 1 (por ejemplo, 0,5), ¿qué le pasa a la figura?"
tipo: mc
opciones_explicitas:
  - "Se reduce (la imagen es más chica que la original)"
  - "Se amplía (la imagen es más grande)"
  - "No cambia de tamaño"
respuesta: "Se reduce (la imagen es más chica que la original)"

explicacion: |
  Sólo con razón mayor a 1 (en valor absoluto) la figura se agranda.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "vocabulario"]

enunciado: "¿Por qué la homotecia se relaciona con la semejanza de triángulos y no con la congruencia?"
tipo: mc
opciones_explicitas:
  - "Porque la homotecia, como la semejanza, conserva la forma y las proporciones pero no necesariamente el tamaño"
  - "Porque la homotecia siempre agranda las figuras"
  - "No hay ninguna relación real entre ambos temas"
respuesta: "Porque la homotecia, como la semejanza, conserva la forma y las proporciones pero no necesariamente el tamaño"

explicacion: |
  Es exactamente la misma idea vista en `../../semejanza-y-teorema-de-thales/`,
  aplicada como transformación.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "avanzado"
  tags: ["homotecia", "problema"]

variables:
  distancia_original: random(2, 8)
  k1: random(2, 4)
  k2: random(2, 4)

respuesta: distancia_original * k1 * k2
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_original} cm del centro. Se le aplica una homotecia de razón {k1}, y a la imagen resultante se le aplica otra homotecia (mismo centro) de razón {k2}. ¿A qué distancia final queda del centro?"

pasos:
  - "Primera homotecia: {distancia_original} × {k1} = {distancia_original * k1} cm"
  - "Segunda homotecia: {distancia_original * k1} × {k2} = {distancia_original * k1 * k2} cm"

explicacion: |
  Dos homotecias sucesivas con el mismo centro equivalen a una sola con
  razón igual al producto de ambas.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["homotecia"]

respuesta: verdadero
tipo: vf

enunciado: "Con una razón de homotecia mayor a 1, cada punto de la figura se aleja del centro de homotecia."

explicacion: |
  La nueva distancia (k × distancia original) es mayor que la original
  cuando k > 1.
```

```
metadata:
  materia: "matematicas"
  tema: "homotecia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la homotecia?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier ampliación o reducción que mantiene las proporciones: fotocopias, zoom, sombras"
  - "Sólo sirve para calcular perímetros"
  - "Sólo aplica a triángulos rectángulos"
respuesta: "Para describir cualquier ampliación o reducción que mantiene las proporciones: fotocopias, zoom, sombras"

explicacion: |
  Es la transformación detrás de cualquier cambio de escala que respeta
  la forma original.
```

## Sección: transformaciones-geometricas/reflexion (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué es una reflexión en geometría?"
tipo: mc
opciones_explicitas:
  - "Voltear una figura como en un espejo, respecto de una línea (el eje de simetría)"
  - "Deslizar una figura sin girarla"
  - "Girar una figura alrededor de un punto"
respuesta: "Voltear una figura como en un espejo, respecto de una línea (el eje de simetría)"

explicacion: |
  Cada punto y su reflejo quedan a la misma distancia del eje, en lados
  opuestos.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué es el eje de simetría de una reflexión?"
tipo: mc
opciones_explicitas:
  - "La línea que actúa como espejo: cada punto y su reflejo quedan a la misma distancia de ella"
  - "El punto que no se mueve durante la transformación"
  - "El vector que define la dirección del movimiento"
respuesta: "La línea que actúa como espejo: cada punto y su reflejo quedan a la misma distancia de ella"

explicacion: |
  A diferencia de la rotación (un punto fijo) o la traslación (ningún
  punto fijo), acá lo fijo es toda una línea.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Una reflexión preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Una reflexión invierte la orientación de la figura: queda 'espejada'."

explicacion: |
  Es lo que distingue a la reflexión de la traslación y la rotación.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

variables:
  punto: random(1, 20)

respuesta: 0 - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición 0. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "El reflejo queda a la misma distancia del eje, del otro lado: −{punto}"

explicacion: |
  Respecto del 0, reflejar es cambiar el signo de la posición.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  eje: random(5, 15)
  punto: random(1, 4)

respuesta: (2 * eje) - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición {eje}. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "Distancia del punto al eje: {eje} − {punto} = {eje - punto}"
  - "El reflejo queda a esa misma distancia, del otro lado del eje: {eje} + {eje - punto} = {(2 * eje) - punto}"

explicacion: |
  El reflejo está tan lejos del eje, del otro lado, como estaba el punto
  original.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Los puntos que están exactamente sobre el eje de simetría no cambian de posición al reflejar la figura."

explicacion: |
  Están a distancia 0 del eje, así que su reflejo cae en el mismo lugar.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de reflexión?"
tipo: mc
opciones_explicitas:
  - "El reflejo de un árbol en la superficie de un lago"
  - "Las manecillas de un reloj girando"
  - "Un cajón que se desliza al abrirlo"
respuesta: "El reflejo de un árbol en la superficie de un lago"

explicacion: |
  La superficie del agua actúa como el eje (o plano) de simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ejes de simetría tiene un cuadrado?"

explicacion: |
  Las dos diagonales, más las dos líneas que unen los puntos medios de
  lados opuestos: 4 en total.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Cuántos ejes de simetría tiene un círculo?"
tipo: mc
opciones_explicitas:
  - "Infinitos: cualquier diámetro es un eje de simetría"
  - "Ninguno"
  - "Exactamente 4"
respuesta: "Infinitos: cualquier diámetro es un eje de simetría"

explicacion: |
  Cualquier línea que pase por el centro divide al círculo en dos
  mitades espejadas.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La letra 'A' mayúscula (en su forma geométrica típica) tiene un eje de simetría vertical."

explicacion: |
  Su mitad izquierda es el reflejo de su mitad derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["reflexion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La letra 'N' mayúscula no tiene ningún eje de simetría (ninguna línea la refleja en sí misma)."

explicacion: |
  Ninguna línea vertical, horizontal ni diagonal la refleja en sí misma
  (aunque sí tiene simetría rotacional de 180°, algo distinto).
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué significa que una figura tenga simetría axial?"
tipo: mc
opciones_explicitas:
  - "Que existe al menos un eje respecto del cual la figura reflejada coincide exactamente con la original"
  - "Que la figura tiene todos los lados iguales"
  - "Que la figura se puede rotar y queda igual"
respuesta: "Que existe al menos un eje respecto del cual la figura reflejada coincide exactamente con la original"

explicacion: |
  Es la simetría "de espejo", distinta de la simetría rotacional.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "Aplicar dos reflexiones seguidas sobre dos ejes distintos que se cruzan equivale a una rotación alrededor del punto de cruce."

explicacion: |
  Es la conexión entre reflexión y rotación, clave en el diseño de
  rosetones.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Qué diferencia principal hay entre una reflexión y una rotación?"
tipo: mc
opciones_explicitas:
  - "La reflexión deja fija toda una línea (el eje); la rotación deja fijo un solo punto (el centro)"
  - "La reflexión cambia el tamaño de la figura; la rotación no"
  - "No hay ninguna diferencia real"
respuesta: "La reflexión deja fija toda una línea (el eje); la rotación deja fijo un solo punto (el centro)"

explicacion: |
  Esa es la diferencia estructural entre ambas isometrías.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "ordenar"]

enunciado: "Ordená los pasos para reflejar un punto respecto de un eje."
tipo: ordenar
opciones_explicitas:
  - "Ese nuevo punto es el reflejo"
  - "Medir la distancia del punto al eje de simetría"
  - "Ubicar esa misma distancia del otro lado del eje"
respuesta_orden:
  - "Medir la distancia del punto al eje de simetría"
  - "Ubicar esa misma distancia del otro lado del eje"
  - "Ese nuevo punto es el reflejo"

explicacion: |
  La distancia al eje se conserva; sólo cambia de lado.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  distancia_al_eje: random(2, 20)

respuesta: 2 * distancia_al_eje
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está a {distancia_al_eje} cm del eje de simetría. ¿A qué distancia queda ese punto de su propio reflejo?"

pasos:
  - "2 × {distancia_al_eje} = {2 * distancia_al_eje} cm"

explicacion: |
  El punto y su reflejo están cada uno a esa distancia del eje, en
  lados opuestos: la distancia entre ambos es el doble.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion"]

respuesta: verdadero
tipo: vf

enunciado: "La reflexión es una isometría: no cambia ni la forma ni el tamaño de la figura."

explicacion: |
  Junto con la traslación y la rotación, es una de las tres isometrías.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "vocabulario"]

enunciado: "¿Por qué una letra 'F' reflejada no se puede hacer coincidir con una 'F' normal deslizándola o girándola, sólo volteándola?"
tipo: mc
opciones_explicitas:
  - "Porque la reflexión invierte la orientación de la figura, algo que ni la traslación ni la rotación hacen"
  - "Porque la reflexión cambia el tamaño de la letra"
  - "En realidad sí se puede, con suficiente rotación"
respuesta: "Porque la reflexión invierte la orientación de la figura, algo que ni la traslación ni la rotación hacen"

explicacion: |
  Es la propiedad distintiva de la reflexión frente a las otras dos
  isometrías.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "avanzado"
  tags: ["reflexion", "problema"]

variables:
  eje: random(10, 30)
  punto: random(1, 9)

respuesta: (2 * eje) - punto
tipo: input
tolerancia_abs: 0

enunciado: "En una recta numérica, el eje de simetría está en la posición {eje}. Un punto está en la posición {punto}. ¿En qué posición queda su reflejo?"

pasos:
  - "Distancia al eje: {eje} − {punto} = {eje - punto}"
  - "Reflejo: {eje} + {eje - punto} = {(2 * eje) - punto}"

explicacion: |
  Misma fórmula que el problema anterior, con otro eje y otro punto.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "intermedio"
  tags: ["reflexion", "problema"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ejes de simetría tiene un triángulo equilátero?"

explicacion: |
  Uno por cada vértice, pasando por el punto medio del lado opuesto.
```

```
metadata:
  materia: "matematicas"
  tema: "reflexion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la reflexión?"
tipo: mc
opciones_explicitas:
  - "Para describir y diseñar cualquier patrón simétrico tipo espejo: logos, rosetones, reflejos"
  - "Sólo sirve para calcular áreas"
  - "Sólo aplica a figuras con más de 6 lados"
respuesta: "Para describir y diseñar cualquier patrón simétrico tipo espejo: logos, rosetones, reflejos"

explicacion: |
  Junto con la rotación, es la base matemática de los diseños con
  simetría (ver `../../../arte/rosetones-y-simetria/`).
```

## Sección: transformaciones-geometricas/rotacion (23 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué es una rotación en geometría?"
tipo: mc
opciones_explicitas:
  - "Girar una figura alrededor de un punto fijo, una cierta cantidad de grados"
  - "Deslizar una figura sin girarla"
  - "Reflejar una figura sobre una línea"
respuesta: "Girar una figura alrededor de un punto fijo, una cierta cantidad de grados"

explicacion: |
  El punto fijo es el centro de rotación.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué dos datos definen una rotación?"
tipo: mc
opciones_explicitas:
  - "El centro de rotación y el ángulo de rotación (con su sentido)"
  - "Un vector de dirección y magnitud"
  - "Un eje de simetría"
respuesta: "El centro de rotación y el ángulo de rotación (con su sentido)"

explicacion: |
  El sentido puede ser horario o antihorario.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "En una rotación, el centro de rotación es el único punto que no cambia de lugar."

explicacion: |
  Todos los demás puntos giran alrededor de él, recorriendo un arco de
  circunferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una rotación preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la traslación, una rotación sí cambia la orientación de la figura (queda 'mirando' hacia otro lado)."

explicacion: |
  Sólo se mantiene el tamaño y la forma, no la orientación en el
  espacio.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una rotación de 360° deja la figura exactamente en la misma posición y orientación que al principio."

explicacion: |
  360° es una vuelta completa.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "problema"]

variables:
  inicial: random(0, 350)
  angulo: random(10, 340)

respuesta: (inicial + angulo) - (floor((inicial + angulo) / 360) * 360)
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {inicial}° sobre una circunferencia. Se rota {angulo}° en sentido antihorario. ¿En qué posición (en grados, entre 0° y 360°) queda?"

pasos:
  - "{inicial}° + {angulo}° = {inicial + angulo}°"
  - "Si pasa de 360°, se le resta una vuelta completa: {(inicial + angulo) - (floor((inicial + angulo) / 360) * 360)}°"

explicacion: |
  Rotar es sumar el ángulo; si el resultado supera 360°, se resta una
  vuelta completa (la posición "da la vuelta").
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "problema"]

variables:
  inicial: random(0, 179)

respuesta: inicial + 180
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {inicial}° sobre una circunferencia. Se rota 180°. ¿En qué posición queda?"

pasos:
  - "{inicial}° + 180° = {inicial + 180}°"

explicacion: |
  Una rotación de 180° pone al punto exactamente del otro lado del
  centro, a la misma distancia.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué es la simetría rotacional de una figura?"
tipo: mc
opciones_explicitas:
  - "Que la figura se ve exactamente igual después de rotarla menos de 360°"
  - "Que la figura tiene un eje de simetría"
  - "Que todos sus lados miden lo mismo"
respuesta: "Que la figura se ve exactamente igual después de rotarla menos de 360°"

explicacion: |
  Por ejemplo, un cuadrado se ve igual rotado 90°, sin necesidad de
  completar la vuelta entera.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

variables:
  n: uno_de([3, 4, 5, 6, 8, 9, 10, 12])

respuesta: 360 / n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el ángulo mínimo de rotación con el que un polígono REGULAR de {n} lados se ve exactamente igual a sí mismo?"

pasos:
  - "360° ÷ {n} = {360 / n}°"

explicacion: |
  Un polígono regular de n lados tiene simetría rotacional cada
  360°/n.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "completar"]

tipo: completar
enunciado: "Completá: el ángulo mínimo de simetría rotacional de un polígono regular de n lados es 360° dividido ___."
respuestas_validas:
  - "n"

explicacion: |
  A más lados, menor el ángulo mínimo de simetría.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo cotidiano de rotación?"
tipo: mc
opciones_explicitas:
  - "Las aspas de un ventilador girando alrededor de su eje"
  - "Un cajón que se desliza al abrirlo"
  - "El reflejo de un objeto en un espejo"
respuesta: "Las aspas de un ventilador girando alrededor de su eje"

explicacion: |
  El eje del ventilador es el centro de rotación.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "ordenar"]

enunciado: "Ordená los pasos para aplicar una rotación a una figura."
tipo: ordenar
opciones_explicitas:
  - "Girar cada punto de la figura ese ángulo alrededor del centro"
  - "Elegir el centro de rotación (el punto que no se va a mover)"
  - "Definir el ángulo de rotación y el sentido (horario o antihorario)"
respuesta_orden:
  - "Elegir el centro de rotación (el punto que no se va a mover)"
  - "Definir el ángulo de rotación y el sentido (horario o antihorario)"
  - "Girar cada punto de la figura ese ángulo alrededor del centro"

explicacion: |
  El centro se define primero: todo el resto del giro se mide respecto
  de él.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Salvo en el caso de 180°, rotar una figura X grados en sentido horario da un resultado distinto que rotarla X grados en sentido antihorario."

explicacion: |
  El sentido importa tanto como la magnitud del ángulo — sólo a 180° dan
  el mismo resultado, porque quedan exactamente opuestos.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

variables:
  angulo1: random(20, 150)
  angulo2: random(20, 150)

respuesta: angulo1 + angulo2
tipo: input
tolerancia_abs: 0

enunciado: "Una figura se rota {angulo1}° y después se rota otros {angulo2}° más, en el mismo sentido y alrededor del mismo centro. ¿A qué rotación total equivale?"

pasos:
  - "{angulo1}° + {angulo2}° = {angulo1 + angulo2}°"

explicacion: |
  Dos rotaciones sucesivas alrededor del mismo centro equivalen a una
  sola rotación con la suma de los ángulos.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué distingue a la rotación de la traslación?"
tipo: mc
opciones_explicitas:
  - "La rotación tiene un punto fijo (el centro) y cambia la orientación; la traslación no tiene puntos fijos y mantiene la orientación"
  - "La rotación cambia el tamaño de la figura; la traslación no"
  - "No hay ninguna diferencia real entre las dos"
respuesta: "La rotación tiene un punto fijo (el centro) y cambia la orientación; la traslación no tiene puntos fijos y mantiene la orientación"

explicacion: |
  Son las dos diferencias clave entre ambas transformaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "La rotación es una isometría: no cambia ni la forma ni el tamaño de la figura, sólo su orientación y posición."

explicacion: |
  Junto con la traslación y la reflexión, es una de las tres isometrías
  (la homotecia es la excepción: sí cambia el tamaño).
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

respuesta: 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cada cuántos grados un hexágono regular se ve exactamente igual a sí mismo al rotarlo?"

pasos:
  - "360° ÷ 6 = 60°"

explicacion: |
  Un hexágono regular tiene 6 lados: 360° ÷ 6 = 60°.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion", "problema"]

variables:
  n: uno_de([3, 4, 5, 6, 8, 9, 10, 12])

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Un polígono regular tiene simetría rotacional cada {360 / n}°. ¿Cuántos lados tiene?"

pasos:
  - "360° ÷ {360 / n}° = {n}"

explicacion: |
  Se despeja n dividiendo 360° por el ángulo mínimo dado.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un círculo se ve exactamente igual sin importar cuántos grados se lo rote: tiene simetría rotacional para cualquier ángulo."

explicacion: |
  Es el caso límite: al no tener vértices ni lados distinguibles,
  cualquier rotación alrededor de su centro lo deja igual.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "avanzado"
  tags: ["rotacion"]

respuesta: verdadero
tipo: vf

enunciado: "El centro de rotación no tiene por qué estar dentro de la figura que se rota: puede ser cualquier punto del plano."

explicacion: |
  Por ejemplo, las manecillas de un reloj giran alrededor de un centro
  que está fuera de cada manecilla individual.
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "intermedio"
  tags: ["rotacion", "vocabulario"]

enunciado: "¿Qué transformación explica que un rosetón (una ventana circular con un patrón repetido) se vea igual varias veces al girarlo?"
tipo: mc
opciones_explicitas:
  - "La rotación, por su simetría rotacional"
  - "La traslación"
  - "La homotecia"
respuesta: "La rotación, por su simetría rotacional"

explicacion: |
  El motivo del rosetón se repite girando un ángulo fijo alrededor del
  centro de la ventana (ver `../../../arte/rosetones-y-simetria/`).
```

```
metadata:
  materia: "matematicas"
  tema: "rotacion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la rotación?"
tipo: mc
opciones_explicitas:
  - "Para describir y diseñar cualquier objeto o patrón con un eje de giro: ruedas, relojes, rosetones"
  - "Sólo sirve para calcular áreas"
  - "Sólo aplica a triángulos"
respuesta: "Para describir y diseñar cualquier objeto o patrón con un eje de giro: ruedas, relojes, rosetones"

explicacion: |
  Cualquier cosa que gire alrededor de un punto fijo se describe con
  centro y ángulo de rotación.
```

## Sección: transformaciones-geometricas/traslacion (22 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Qué es una traslación en geometría?"
tipo: mc
opciones_explicitas:
  - "Deslizar una figura entera en una dirección, sin girarla y sin voltearla"
  - "Girar una figura alrededor de un punto"
  - "Reflejar una figura sobre una línea, como en un espejo"
respuesta: "Deslizar una figura entera en una dirección, sin girarla y sin voltearla"

explicacion: |
  Todos los puntos de la figura se mueven la misma distancia, en la
  misma dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Qué dos cosas define un vector de traslación?"
tipo: mc
opciones_explicitas:
  - "Una dirección y una magnitud (longitud)"
  - "Un ángulo y un centro de giro"
  - "Un eje de simetría"
respuesta: "Una dirección y una magnitud (longitud)"

explicacion: |
  Ese vector es el mismo para todos los puntos de la figura.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una traslación preserva la forma y el tamaño de la figura original."

explicacion: |
  Es una isometría: la imagen es congruente a la original.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la rotación y la reflexión, una traslación no cambia la orientación de la figura: no queda girada ni espejada."

explicacion: |
  La figura sólo cambia de posición, se mantiene "mirando" hacia el
  mismo lado.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Cuál de estas es un ejemplo de traslación?"
tipo: mc
opciones_explicitas:
  - "Deslizar una ficha de ajedrez de una casilla a otra sin rotarla"
  - "Girar la manecilla de un reloj"
  - "Ver el reflejo de un objeto en un espejo"
respuesta: "Deslizar una ficha de ajedrez de una casilla a otra sin rotarla"

explicacion: |
  La ficha cambia de lugar pero mantiene su orientación exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "congruencia"]

respuesta: verdadero
tipo: vf

enunciado: "La figura resultante de una traslación (la imagen) es siempre congruente a la figura original."

explicacion: |
  Congruente significa mismo tamaño y forma — la traslación no altera
  ninguna de las dos.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "problema"]

variables:
  punto: random(-10, 10)
  vector: random(1, 15)

respuesta: punto + vector
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {punto} de una recta numérica. Se le aplica una traslación de {vector} unidades hacia la derecha. ¿En qué posición queda?"

pasos:
  - "{punto} + {vector} = {punto + vector}"

explicacion: |
  Trasladar hacia la derecha es sumar la magnitud del vector a la
  posición original.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "problema"]

variables:
  punto: random(-5, 15)
  vector: random(1, 15)

respuesta: punto - vector
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {punto} de una recta numérica. Se le aplica una traslación de {vector} unidades hacia la izquierda. ¿En qué posición queda?"

pasos:
  - "{punto} − {vector} = {punto - vector}"

explicacion: |
  Trasladar hacia la izquierda es restar la magnitud del vector.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "En una traslación, todos los puntos de la figura se mueven exactamente la misma distancia y en la misma dirección."

explicacion: |
  Es lo que define al vector de traslación: es único para toda la
  figura, no varía punto por punto.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "Salvo el caso trivial de un vector de longitud cero, una traslación no deja ningún punto de la figura en su lugar original."

explicacion: |
  A diferencia de la rotación (que fija el centro) o la reflexión (que
  fija el eje completo), la traslación mueve todo por igual.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion", "problema"]

variables:
  punto: random(0, 10)
  vector: random(2, 8)

respuesta: punto + (2 * vector)
tipo: input
tolerancia_abs: 0

enunciado: "Un punto está en la posición {punto}. Se le aplican dos traslaciones seguidas, cada una de {vector} unidades hacia la derecha (como un patrón que se repite). ¿En qué posición final queda?"

pasos:
  - "Primera traslación: {punto} + {vector} = {punto + vector}"
  - "Segunda traslación: {punto + vector} + {vector} = {punto + (2 * vector)}"

explicacion: |
  Aplicar la misma traslación dos veces equivale a sumar el vector dos
  veces — la misma idea detrás de un patrón de baldosas repetido.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion", "vocabulario"]

enunciado: "¿Qué tienen en común la traslación, la rotación y la reflexión?"
tipo: mc
opciones_explicitas:
  - "Las tres son isometrías: no cambian ni la forma ni el tamaño de la figura"
  - "Las tres cambian el tamaño de la figura"
  - "Las tres necesitan un centro de giro"
respuesta: "Las tres son isometrías: no cambian ni la forma ni el tamaño de la figura"

explicacion: |
  La homotecia (ver `../homotecia/`) es la única de las cuatro que sí
  cambia el tamaño.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "completar"]

tipo: completar
enunciado: "Completá: la traslación conserva la forma, el tamaño Y la ___ de la figura (no la gira ni la voltea)."
respuestas_validas:
  - "orientación"

explicacion: |
  Es lo único que no conservan la rotación ni la reflexión.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "ordenar"]

enunciado: "Ordená los pasos para aplicar una traslación a una figura."
tipo: ordenar
opciones_explicitas:
  - "La figura resultante (imagen) queda congruente a la original, sólo que desplazada"
  - "Definir el vector de traslación: una dirección y una magnitud"
  - "Mover cada punto de la figura esa misma distancia, en esa misma dirección"
respuesta_orden:
  - "Definir el vector de traslación: una dirección y una magnitud"
  - "Mover cada punto de la figura esa misma distancia, en esa misma dirección"
  - "La figura resultante (imagen) queda congruente a la original, sólo que desplazada"

explicacion: |
  El vector es el mismo para toda la figura: no varía punto por punto.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion", "problema"]

variables:
  origen: random(-20, 0)
  destino: random(1, 20)

respuesta: destino - origen
tipo: input
tolerancia_abs: 0

enunciado: "Una figura se traslada de la posición {origen} a la posición {destino} en una recta numérica. ¿Cuál es la magnitud del vector de traslación?"

pasos:
  - "{destino} − ({origen}) = {destino - origen}"

explicacion: |
  La magnitud del vector es la diferencia entre la posición final y la
  inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

respuesta: falso
tipo: vf

enunciado: "Una traslación y una rotación son exactamente lo mismo."

explicacion: |
  La traslación desliza sin girar; la rotación gira alrededor de un
  centro fijo (ver `../rotacion/`) — son transformaciones distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrón de baldosas o un papel tapiz que repite el mismo motivo, siempre en la misma orientación, es un ejemplo de traslaciones repetidas."

explicacion: |
  El mismo motivo se desliza el mismo vector una y otra vez, sin girar
  ni espejar.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "problema"]

variables:
  inicial: random(1, 15)
  vector: random(-10, 10)

respuesta: inicial + vector
tipo: input
tolerancia_abs: 0

enunciado: "Un punto en la posición {inicial} se traslada aplicando un vector de {vector} unidades (positivo hacia la derecha, negativo hacia la izquierda). ¿En qué posición queda?"

pasos:
  - "{inicial} + ({vector}) = {inicial + vector}"

explicacion: |
  Un vector negativo desplaza hacia la izquierda; uno positivo, hacia la
  derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["traslacion"]

enunciado: "¿Qué es lo único que cambia en una figura después de una traslación?"
tipo: mc
opciones_explicitas:
  - "Su posición"
  - "Su tamaño"
  - "Su forma"
respuesta: "Su posición"

explicacion: |
  Forma, tamaño y orientación quedan exactamente igual.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "avanzado"
  tags: ["traslacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un vector de traslación de longitud cero deja la figura exactamente en el mismo lugar."

explicacion: |
  Es el único caso en el que una traslación sí deja puntos fijos: todos
  ellos, porque nada se mueve.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "intermedio"
  tags: ["traslacion", "vocabulario"]

enunciado: "Una figura cambia de posición pero NO cambia de tamaño, forma NI orientación. ¿Qué transformación es?"
tipo: mc
opciones_explicitas:
  - "Una traslación"
  - "Una homotecia"
  - "Una reflexión"
respuesta: "Una traslación"

explicacion: |
  Es la única de las cuatro que conserva también la orientación.
```

```
metadata:
  materia: "matematicas"
  tema: "traslacion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la traslación?"
tipo: mc
opciones_explicitas:
  - "Es la base de cualquier patrón repetitivo: mosaicos, guardas, papel tapiz"
  - "Sólo sirve para triángulos rectángulos"
  - "Sólo tiene aplicación en el espacio, nunca en el plano"
respuesta: "Es la base de cualquier patrón repetitivo: mosaicos, guardas, papel tapiz"

explicacion: |
  Cualquier diseño donde un motivo se repite sin girar ni cambiar de
  tamaño usa traslaciones.
```

## Sección: triangulos (34 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

enunciado: "¿Qué es un triángulo?"
tipo: mc
opciones_explicitas:
  - "Un polígono de 3 lados y 3 ángulos internos"
  - "Un polígono de 4 lados"
  - "Cualquier figura con ángulos"
respuesta: "Un polígono de 3 lados y 3 ángulos internos"

explicacion: |
  Es el polígono más simple posible.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo equilátero?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 lados iguales"
  - "El que tiene 2 lados iguales"
  - "El que tiene sus 3 lados distintos"
respuesta: "El que tiene sus 3 lados iguales"

explicacion: |
  Los 3 lados miden exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo isósceles?"
tipo: mc
opciones_explicitas:
  - "El que tiene exactamente 2 lados iguales"
  - "El que tiene sus 3 lados iguales"
  - "El que no tiene ningún lado igual a otro"
respuesta: "El que tiene exactamente 2 lados iguales"

explicacion: |
  El tercer lado es distinto de los otros dos.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_lados", "vocabulario"]

enunciado: "¿Qué es un triángulo escaleno?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 lados con medidas distintas entre sí"
  - "El que tiene sus 3 lados iguales"
  - "El que tiene exactamente 2 lados iguales"
respuesta: "El que tiene sus 3 lados con medidas distintas entre sí"

explicacion: |
  Ningún par de lados coincide en su medida.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo acutángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene sus 3 ángulos internos agudos"
  - "El que tiene un ángulo recto"
  - "El que tiene un ángulo obtuso"
respuesta: "El que tiene sus 3 ángulos internos agudos"

explicacion: |
  Los tres ángulos son menores a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo rectángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene un ángulo interno recto (90°)"
  - "El que tiene sus 3 ángulos agudos"
  - "El que tiene sus 3 lados iguales"
respuesta: "El que tiene un ángulo interno recto (90°)"

explicacion: |
  Los otros dos ángulos son necesariamente agudos.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "clasificacion_angulos", "vocabulario"]

enunciado: "¿Qué es un triángulo obtusángulo?"
tipo: mc
opciones_explicitas:
  - "El que tiene un ángulo interno obtuso (mayor a 90°)"
  - "El que tiene un ángulo recto"
  - "El que tiene sus 3 ángulos agudos"
respuesta: "El que tiene un ángulo interno obtuso (mayor a 90°)"

explicacion: |
  Sólo puede haber UN ángulo obtuso en un triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  l: random(3, 20)

enunciado: "Un triángulo tiene sus tres lados de {l} cm, {l} cm y {l} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Equilátero"
  - "Isósceles"
  - "Escaleno"
respuesta: "Equilátero"

explicacion: |
  Los tres lados miden lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  l: random(3, 20)
  distinto: l + random(1, 10)

enunciado: "Un triángulo tiene lados de {l} cm, {l} cm y {distinto} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Isósceles"
  - "Equilátero"
  - "Escaleno"
respuesta: "Isósceles"

explicacion: |
  Exactamente dos lados miden lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  a: random(3, 10)
  b: a + random(1, 5)
  c: b + random(1, 5)

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Cómo se clasifica según sus lados?"
tipo: mc
opciones_explicitas:
  - "Escaleno"
  - "Isósceles"
  - "Equilátero"
respuesta: "Escaleno"

explicacion: |
  Los tres lados tienen medidas distintas entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "suma_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier triángulo, sin importar su forma o tamaño, la suma de sus 3 ángulos internos es siempre 180°."

explicacion: |
  Es la propiedad central de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

variables:
  a: random(30, 80)
  b: random(30, 80)

respuesta: 180 - (a + b)
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene dos ángulos internos de {a}° y {b}°. ¿Cuánto mide el tercero?"

pasos:
  - "180 − ({a} + {b}) = {180 - (a + b)}°"

explicacion: |
  Se resta la suma de los dos ángulos conocidos a 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

variables:
  a: 90
  b: random(20, 70)

respuesta: 180 - (a + b)
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo rectángulo tiene un ángulo de {a}° y otro de {b}°. ¿Cuánto mide el tercero?"

pasos:
  - "180 − ({a} + {b}) = {180 - (a + b)}°"

explicacion: |
  Igual procedimiento, sin importar si uno de los ángulos ya es recto.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos", "verificacion"]

variables:
  a: random(30, 80)
  b: random(30, 80)
  c_correcto: 180 - (a + b)
  error: uno_de([0, 0, 0, 5, -5])
  c_mostrado: c_correcto + error

respuesta: (a + b + c_mostrado == 180)
tipo: vf

enunciado: "¿Pueden ser estos los tres ángulos internos de un triángulo? {a}°, {b}° y {c_mostrado}°."

explicacion: |
  Se suman los tres y se verifica que den exactamente 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(50, 70)
  b: random(50, 70)
  c: 180 - (a + b)

restricciones:
  - c > 0
  - c < 90

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Cómo se clasifica según sus ángulos?"
tipo: mc
opciones_explicitas:
  - "Acutángulo"
  - "Rectángulo"
  - "Obtusángulo"
respuesta: "Acutángulo"

explicacion: |
  Los tres ángulos son menores a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(100, 150)
  b: random(10, 30)
  c: 180 - (a + b)

restricciones:
  - c > 0
  - c < 90

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Cómo se clasifica según sus ángulos?"
tipo: mc
opciones_explicitas:
  - "Obtusángulo"
  - "Acutángulo"
  - "Rectángulo"
respuesta: "Obtusángulo"

explicacion: |
  Tiene un ángulo (el de {a}°) mayor a 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "En un triángulo rectángulo, los otros dos ángulos (además del de 90°) son necesariamente agudos."

explicacion: |
  Como los tres suman 180° y uno ya usa 90°, a los otros dos les quedan
  90° para repartirse entre ambos: ninguno puede llegar a 90° ni
  superarlo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo no puede tener dos ángulos obtusos a la vez."

explicacion: |
  Si dos ángulos ya superaran 90° cada uno, la suma de esos dos solos ya
  pasaría los 180° disponibles para el triángulo completo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "angulo_exterior"]

variables:
  a: random(30, 80)
  b: random(30, 80)

respuesta: a + b
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene dos ángulos internos de {a}° y {b}°. ¿Cuánto mide el ángulo exterior correspondiente al tercer vértice (el opuesto a esos dos)?"

pasos:
  - "{a} + {b} = {a + b}°"

explicacion: |
  El ángulo exterior es igual a la suma de los dos ángulos internos que
  no son adyacentes a él.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "angulo_exterior"]

variables:
  a: random(30, 80)
  b: random(30, 80)
  c: 180 - (a + b)

restricciones:
  - c > 0

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene ángulos internos de {a}°, {b}° y {c}°. ¿Es cierto que el ángulo exterior del vértice de {c}° (su suplemento, 180° − {c}°) es igual a {a}° + {b}°?"

pasos:
  - "180 − {c} = {180 - c}. {a} + {b} = {a + b}."

explicacion: |
  Ambos caminos dan el mismo resultado: es la misma propiedad vista
  desde dos ángulos distintos (el suplemento del interior, o la suma de
  los otros dos internos).
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular"]

respuesta: verdadero
tipo: vf

enunciado: "¿Pueden formar un triángulo los lados 3 cm, 4 cm y 5 cm?"

pasos:
  - "3 + 4 = 7 > 5. También 3 + 5 = 8 > 4, y 4 + 5 = 9 > 3."

explicacion: |
  La suma de cualquier par de lados supera al tercero: sí forman un
  triángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular"]

respuesta: falso
tipo: vf

enunciado: "¿Pueden formar un triángulo los lados 2 cm, 3 cm y 10 cm?"

pasos:
  - "2 + 3 = 5, que NO supera a 10."

explicacion: |
  Los dos lados cortos, juntos, no alcanzan a "cerrar" la figura contra
  el lado más largo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "desigualdad_triangular", "vocabulario"]

enunciado: "¿Qué condición tienen que cumplir 3 longitudes para poder formar un triángulo?"
tipo: mc
opciones_explicitas:
  - "La suma de cualquier par de lados tiene que ser mayor que el tercero"
  - "Los tres lados tienen que ser iguales"
  - "La suma de los tres lados tiene que dar 180"
respuesta: "La suma de cualquier par de lados tiene que ser mayor que el tercero"

explicacion: |
  Si no se cumple, los lados "no llegan a cerrar" la figura.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_lados", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo puede clasificarse a la vez por sus lados y por sus ángulos: por ejemplo, \"isósceles rectángulo\" (2 lados iguales, y un ángulo de 90°)."

explicacion: |
  Las dos clasificaciones (por lados y por ángulos) son independientes
  entre sí, así que se pueden combinar.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "clasificacion_lados", "clasificacion_angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Todo triángulo equilátero es también acutángulo (sus tres ángulos internos miden 60° cada uno)."

explicacion: |
  180° ÷ 3 = 60° para cada ángulo, si los tres son iguales — y 60° es
  agudo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "avanzado"
  tags: ["triangulo", "problema"]

variables:
  base: random(20, 100)

respuesta: (180 - base) / 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un triángulo isósceles tiene su ángulo desigual (el de la base) midiendo {base}°. Como los otros dos ángulos son iguales entre sí, ¿cuánto mide cada uno?"

pasos:
  - "(180 − {base}) ÷ 2 = {(180 - base) / 2}°"

explicacion: |
  Se resta el ángulo conocido de 180° y se reparte el resto entre los
  dos ángulos iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "completar"]

tipo: completar
enunciado: "Completá: la suma de los 3 ángulos internos de cualquier triángulo es siempre ___°."
respuestas_validas:
  - 180

explicacion: |
  Es la propiedad más importante del módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "completar"]

variables:
  a: random(30, 70)
  b: random(30, 70)

tipo: completar
enunciado: "Completá: si dos ángulos internos de un triángulo miden {a}° y {b}°, el ángulo exterior del tercer vértice mide ___°."
respuestas_validas:
  - a + b

explicacion: |
  El ángulo exterior es igual a la suma de los dos ángulos internos no
  adyacentes.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "suma_angulos"]

enunciado: "¿Cuál de estos tríos de ángulos SÍ puede corresponder a un triángulo real?"
tipo: mc
opciones_explicitas:
  - "60°, 60°, 60°"
  - "90°, 90°, 90°"
  - "100°, 100°, 100°"
respuesta: "60°, 60°, 60°"

explicacion: |
  Sólo 60+60+60=180 da la suma correcta; los otros dos superan 180° en
  total.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "orden"]

tipo: ordenar
enunciado: "Ordená estos tipos de triángulo de MENOS a MÁS lados iguales entre sí: equilátero, escaleno, isósceles."
opciones_explicitas:
  - "Isósceles"
  - "Equilátero"
  - "Escaleno"
respuesta_orden: ["Escaleno", "Isósceles", "Equilátero"]

explicacion: |
  Escaleno: 0 pares de lados iguales. Isósceles: exactamente 1 par.
  Equilátero: los 3 lados iguales entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_angulos"]

variables:
  a: random(20, 70)
  b: 90 - a
  c: 90

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo tiene ángulos de {a}°, {b}° y {c}°. ¿Es un triángulo rectángulo?"

pasos:
  - "{a} + {b} + {c} = {a + b + c}. Tiene un ángulo de 90°."

explicacion: |
  Suma 180° (verificación necesaria) y tiene un ángulo de exactamente
  90°: es rectángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "intermedio"
  tags: ["triangulo", "clasificacion_lados"]

variables:
  a: random(4, 15)
  b: a
  c: a + random(1, 8)

enunciado: "Un triángulo tiene lados de {a} cm, {b} cm y {c} cm. ¿Es escaleno o isósceles?"
tipo: mc
opciones_explicitas:
  - "Isósceles"
  - "Escaleno"
respuesta: "Isósceles"

explicacion: |
  Dos de sus lados ({a} cm y {b} cm) son iguales.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El triángulo es el polígono con menor cantidad de lados posible (no existe un polígono de 2 lados)."

explicacion: |
  Con sólo 2 segmentos no se puede cerrar una figura: 3 es el mínimo.
```

```
metadata:
  materia: "matematicas"
  tema: "triangulos"
  nivel: "basico"
  tags: ["triangulo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo triángulo se puede clasificar a la vez por sus lados (equilátero, isósceles, escaleno) y por sus ángulos (acutángulo, rectángulo, obtusángulo), porque son dos criterios independientes."

explicacion: |
  Es el resumen central del módulo, junto con la suma de 180° de los
  ángulos internos.
```
