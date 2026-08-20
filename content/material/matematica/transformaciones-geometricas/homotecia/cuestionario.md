# Matemática — Transformaciones geométricas: Homotecia (cuestionario, 24 preguntas VBLang)

> Tema: `GO8d`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una homotecia

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

### 2 — Qué dos datos definen una homotecia

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

### 3 — La homotecia conserva la forma pero no el tamaño

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

### 4 — Problema: ampliar con razón mayor a 1

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

### 5 — Problema: reducir con razón fraccionaria

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

### 6 — Con razón 1, la figura no cambia

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

### 7 — Razón -1 equivale a una rotación de 180°

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

### 8 — Qué significa una razón negativa

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

### 9 — Problema: punto en una recta numérica con razón negativa

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

### 10 — Ejemplo cotidiano de homotecia

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

### 11 — La homotecia es semejanza, no congruencia

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

### 12 — Completar: fórmula de la homotecia

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

### 13 — Ordenar: pasos para aplicar una homotecia

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
respuesta_orden: ["Elegir el centro de homotecia y la razón k", "Medir la distancia entre el centro y el punto original", "Multiplicar esa distancia por k para ubicar el punto imagen sobre la misma recta"]
explicacion: |
  El punto imagen siempre queda sobre la recta que ya unía al centro con
  el punto original.
```

### 14 — La homotecia es la única que cambia el tamaño

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

### 15 — Problema: lado de la imagen dado el lado original y la razón

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

### 16 — Problema: hallar la razón dado el original y la imagen

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

### 17 — El centro es el único punto fijo (con k ≠ 1)

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

### 18 — Problema: reducir a un tercio

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

### 19 — La sombra proyectada es un ejemplo de homotecia

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

### 20 — Con razón entre 0 y 1, la figura se reduce

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

### 21 — Homotecia depende de semejanza, no de congruencia

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

### 22 — Problema: aplicar dos homotecias sucesivas

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

### 23 — Homotecia con razón mayor a 1 aleja los puntos del centro

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

### 24 — Cierre: para qué sirve la homotecia

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
