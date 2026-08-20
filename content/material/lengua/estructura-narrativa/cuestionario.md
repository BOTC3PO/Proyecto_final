# Lengua — Estructura narrativa (cuestionario, 20 preguntas VBLang)

> Tema: `P10Cc`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de estructura narrativa

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["estructura_narrativa", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La estructura narrativa es el orden en que se organizan y presentan los hechos de una historia, y no siempre coincide con el orden en que esos hechos ocurrieron dentro de la ficción."

pasos:
  - "Esa posible diferencia entre orden de los hechos y orden del relato es la base de flashback/flashforward."

explicacion: |
  Verdadero: la estructura narrativa puede reordenar los hechos, no
  sólo presentarlos en secuencia.
```

### 2 — Identificar la introducción

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["introduccion"]

variables:
  n: uno_de([1, 1])

respuesta: "introducción"
tipo: mc
opciones_explicitas: ["introducción", "nudo", "desenlace"]

enunciado: "La parte de la estructura clásica que presenta a los personajes, el espacio y la situación inicial, antes del conflicto, se llama..."

pasos:
  - "También llamada \"planteamiento\": establece el punto de partida de la historia."

explicacion: |
  La introducción presenta el contexto antes de que aparezca el
  conflicto.
```

### 3 — Identificar el nudo

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["nudo"]

variables:
  n: uno_de([1, 1])

respuesta: "nudo"
tipo: mc
opciones_explicitas: ["introducción", "nudo", "desenlace"]

enunciado: "La parte de la estructura clásica donde el conflicto se desarrolla y crece la tensión se llama..."

pasos:
  - "También llamado \"desarrollo\": es el cuerpo central de la historia."

explicacion: |
  El nudo es donde el conflicto avanza y los personajes intentan
  resolverlo.
```

### 4 — Identificar el desenlace

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["desenlace"]

variables:
  n: uno_de([1, 1])

respuesta: "desenlace"
tipo: mc
opciones_explicitas: ["introducción", "nudo", "desenlace"]

enunciado: "La parte de la estructura clásica donde el conflicto se resuelve y se cierra la historia se llama..."

pasos:
  - "Puede resolverse bien, mal, o quedar abierto."

explicacion: |
  El desenlace cierra la historia, resolviendo (o dejando planteado)
  el conflicto del nudo.
```

### 5 — Orden de las tres partes clásicas

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "basico"
  tags: ["estructura_clasica", "orden"]

enunciado: "Ordená las tres partes de la estructura narrativa clásica."
tipo: ordenar
opciones_explicitas:
  - "Introducción"
  - "Nudo"
  - "Desenlace"
respuesta_orden: ["Introducción", "Nudo", "Desenlace"]
explicacion: |
  La estructura clásica sigue el orden cronológico: presentación,
  desarrollo del conflicto y resolución.
```

### 6 — Orden lineal/cronológico

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["orden_lineal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando el orden en que se cuenta la historia coincide con el orden en que ocurrieron los hechos, se llama orden lineal o cronológico."

pasos:
  - "Es el caso más simple: contar todo en el mismo orden en que sucedió."

explicacion: |
  Verdadero: el orden lineal es la forma más directa de narrar,
  siguiendo la cronología real de los hechos.
```

### 7 — Identificar flashback

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["flashback"]

variables:
  n: uno_de([1, 1])

respuesta: "flashback"
tipo: mc
opciones_explicitas: ["flashback", "flashforward", "orden lineal"]

enunciado: "\"Juan miró la foto y recordó aquel verano en la playa, años atrás.\" ¿Qué recurso usa este fragmento?"

pasos:
  - "Interrumpe el relato para contar algo que ocurrió ANTES: es un flashback (analepsis)."

explicacion: |
  El flashback retrocede en el tiempo respecto del presente
  narrativo.
```

### 8 — Identificar flashforward

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["flashforward"]

variables:
  n: uno_de([1, 1])

respuesta: "flashforward"
tipo: mc
opciones_explicitas: ["flashback", "flashforward", "orden lineal"]

enunciado: "\"Años más tarde, Juan entendería que ese día lo había cambiado todo.\" ¿Qué recurso usa este fragmento?"

pasos:
  - "Interrumpe el relato para anticipar algo que va a ocurrir DESPUÉS: es un flashforward (prolepsis)."

explicacion: |
  El flashforward adelanta información sobre el futuro de la
  historia.
```

### 9 — Nombre técnico del flashback

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashback", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: "analepsis"
tipo: completar

enunciado: "El nombre técnico del flashback (volver al pasado dentro del relato) es..."

pasos:
  - "Es el término usado en narratología además de \"flashback\"."

explicacion: |
  Analepsis es el nombre técnico equivalente a flashback.
```

### 10 — Nombre técnico del flashforward

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashforward", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: "prolepsis"
tipo: completar

enunciado: "El nombre técnico del flashforward (adelantar el futuro dentro del relato) es..."

pasos:
  - "Es el término usado en narratología además de \"flashforward\"."

explicacion: |
  Prolepsis es el nombre técnico equivalente a flashforward.
```

### 11 — Marca típica de flashback

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashback", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El pluscuamperfecto (\"había ocurrido\") suele marcar que el relato está volviendo a un momento anterior (flashback)."

pasos:
  - "El pluscuamperfecto indica una acción anterior a otra ya pasada, típico de retrocesos temporales."

explicacion: |
  Verdadero: es una de las marcas verbales típicas para reconocer un
  flashback.
```

### 12 — Marca típica de flashforward

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashforward", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Frases como \"años más tarde\" o \"con el tiempo\" suelen marcar un salto hacia el futuro del relato (flashforward)."

pasos:
  - "Esas expresiones temporales anuncian un adelanto respecto del presente narrativo."

explicacion: |
  Verdadero: son marcas típicas para reconocer un flashforward.
```

### 13 — Romper el orden lineal no cambia los hechos

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["estructura_narrativa", "orden"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar flashback o flashforward cambia el orden en que el lector se entera de los hechos, pero no cambia qué hechos ocurrieron en la historia."

pasos:
  - "Es una decisión sobre CÓMO contar, no sobre QUÉ contar."

explicacion: |
  Verdadero: el reordenamiento afecta la experiencia de lectura, no
  la cronología real de la ficción.
```

### 14 — Por qué un autor usa flashback

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashback", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un autor puede usar un flashback para explicar por qué un personaje actúa de cierta manera en el presente de la historia."

pasos:
  - "Mostrar un hecho pasado puede dar contexto o motivación a una acción actual."

explicacion: |
  Verdadero: el flashback suele usarse para dar contexto explicativo
  sobre el presente narrativo.
```

### 15 — Por qué un autor usa flashforward

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["flashforward", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un autor puede usar un flashforward para generar expectativa en el lector, anticipando que algo importante va a pasar más adelante."

pasos:
  - "Adelantar información crea tensión: el lector sabe que algo viene, pero no sabe cómo se llega a eso."

explicacion: |
  Verdadero: el flashforward suele usarse para generar suspenso sobre
  cómo se llega a un futuro ya anticipado.
```

### 16 — Clasificar según fragmento

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["estructura_narrativa", "practica"]

variables:
  fragmentos: ["Juan se despertó, desayunó y salió a trabajar como cualquier día", "De pronto recordó aquella tarde de invierno, hacía diez años, cuando todo había empezado", "Nadie sabía todavía que, dos años después, esa decisión sería la más importante de sus vidas"]
  tipos: ["orden lineal", "flashback", "flashforward"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["orden lineal", "flashback", "flashforward"]

enunciado: "\"{fragmentos[idx]}\" corresponde a..."

pasos:
  - "Sin salto temporal = lineal. Salto al pasado = flashback. Salto al futuro = flashforward."

explicacion: |
  Cada fragmento fue construido para marcar un tipo distinto de
  relación entre el orden del relato y el orden de los hechos.
```

### 17 — La estructura clásica no es obligatoria

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["estructura_narrativa", "flexibilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "No todo texto narrativo sigue estrictamente la estructura de introducción-nudo-desenlace en ese orden; muchos relatos empiezan por el nudo o incluso por el desenlace."

pasos:
  - "Empezar in medias res (\"en medio de la acción\") es una técnica narrativa común que rompe el orden clásico."

explicacion: |
  Verdadero: la estructura clásica es la más común y la más fácil de
  reconocer, pero no la única posible.
```

### 18 — Ordenar el análisis de la estructura de un relato

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "intermedio"
  tags: ["estructura_narrativa", "metodo"]

enunciado: "Ordená los pasos para analizar la estructura narrativa de un texto."
tipo: ordenar
opciones_explicitas:
  - "Identificar introducción, nudo y desenlace dentro del relato"
  - "Revisar si hay saltos temporales (marcas verbales o frases de tiempo) respecto del presente narrativo"
  - "Clasificar cada salto como flashback o flashforward según hacia dónde vaya"
  - "Determinar si, en conjunto, el relato es de orden lineal o tiene una estructura más compleja"
respuesta_orden: ["Identificar introducción, nudo y desenlace dentro del relato", "Revisar si hay saltos temporales (marcas verbales o frases de tiempo) respecto del presente narrativo", "Clasificar cada salto como flashback o flashforward según hacia dónde vaya", "Determinar si, en conjunto, el relato es de orden lineal o tiene una estructura más compleja"]
explicacion: |
  El análisis va de la estructura clásica de base a la detección y
  clasificación de saltos temporales.
```

### 19 — Cierre de la subrama de análisis narrativo

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["estructura_narrativa", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El análisis narrativo completo combina tres preguntas: quién cuenta (narrador), desde dónde (punto de vista) y en qué orden (estructura narrativa)."

pasos:
  - "Cada tema de la subrama respondió una de esas tres preguntas, en ese orden."

explicacion: |
  Verdadero: estructura narrativa cierra la subrama que empezó con
  narrador y siguió con punto de vista.
```

### 20 — Aplicación: elegir estructura según el efecto buscado

```
metadata:
  materia: "lengua"
  tema: "estructura_narrativa"
  nivel: "avanzado"
  tags: ["estructura_narrativa", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere generar intriga sobre cómo un personaje llegó a una situación extrema, puede empezar el relato por el desenlace y usar flashbacks para explicar el camino hasta ahí."

pasos:
  - "Mostrar el final primero y explicar el \"cómo\" después es una estructura narrativa deliberadamente no lineal."

explicacion: |
  Verdadero: romper la estructura clásica es una herramienta más
  para controlar el efecto narrativo sobre el lector.
```
