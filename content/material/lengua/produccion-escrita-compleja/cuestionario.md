# Lengua — Producción escrita compleja (cuestionario, 20 preguntas VBLang)

> Tema: `P14`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Producción escrita compleja integra temas previos

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["produccion_escrita_compleja", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja no enseña una técnica nueva, sino que integra la oración compuesta y la puntuación ya vistas para producir un texto largo y coherente."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/` y `../signos-de-puntuacion/`: son sus dos prerrequisitos directos."

explicacion: |
  Verdadero: este tema combina herramientas previas, no introduce
  contenido gramatical nuevo.
```

### 2 — Identificar la etapa de planificación

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["planificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "planificación"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se decide el tipo textual, la idea principal o tesis, y se arma un esquema de párrafos, ANTES de escribir, se llama..."

pasos:
  - "Es el primer paso del proceso, antes de poner una palabra en el papel."

explicacion: |
  La planificación organiza el texto antes de comenzar a redactar.
```

### 3 — Identificar la etapa de redacción

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["redaccion"]

variables:
  n: uno_de([1, 1])

respuesta: "redacción"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se escribe el borrador sin frenarse a corregir cada detalle, siguiendo el esquema hecho antes, se llama..."

pasos:
  - "El objetivo de esta etapa es sacar las ideas al papel, no lograr la versión final."

explicacion: |
  La redacción es la etapa de escribir el primer borrador completo.
```

### 4 — Identificar la etapa de revisión

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["revision"]

variables:
  n: uno_de([1, 1])

respuesta: "revisión"
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión"]

enunciado: "La etapa en la que se relee con ojo crítico buscando errores de coherencia, gramática, ortografía y puntuación se llama..."

pasos:
  - "Es el paso que sigue a tener un borrador completo escrito."

explicacion: |
  La revisión busca errores y aspectos a mejorar antes de la versión
  final.
```

### 5 — Identificar la etapa de edición final

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["edicion_final"]

variables:
  n: uno_de([1, 1])

respuesta: "edición final"
tipo: mc
opciones_explicitas: ["edición final", "planificación", "redacción"]

enunciado: "La etapa en la que se aplican las correcciones encontradas en la revisión para producir la versión definitiva se llama..."

pasos:
  - "Es el último paso del proceso de escritura, después de revisar."

explicacion: |
  La edición final cierra el proceso aplicando todas las correcciones
  detectadas.
```

### 6 — Orden de las etapas

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["produccion_escrita_compleja", "proceso"]

enunciado: "Ordená las cuatro etapas del proceso de escritura de un texto complejo."
tipo: ordenar
opciones_explicitas:
  - "Planificación"
  - "Redacción (borrador)"
  - "Revisión"
  - "Edición final"
respuesta_orden: ["Planificación", "Redacción (borrador)", "Revisión", "Edición final"]
explicacion: |
  El proceso completo va de organizar las ideas a escribirlas, luego
  revisarlas críticamente, y finalmente corregirlas.
```

### 7 — Escribir no es un proceso de una sola vez

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "basico"
  tags: ["produccion_escrita_compleja", "proceso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escribir un texto complejo tiene etapas distintas, cada una con un objetivo propio, en vez de ser un proceso de \"escribir de una sola vez\"."

pasos:
  - "Planificar, redactar, revisar y editar son pasos con objetivos distintos entre sí."

explicacion: |
  Verdadero: separar el proceso en etapas es una estrategia central
  de la producción escrita compleja.
```

### 8 — Un párrafo, una idea principal

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["parrafos", "idea_principal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada párrafo de un texto complejo debería desarrollar una sola idea principal propia, conectada con la del párrafo anterior y siguiente."

pasos:
  - "Ver `../comprension-idea-principal/`: mezclar varias ideas grandes en un solo párrafo dificulta la lectura."

explicacion: |
  Verdadero: la organización \"un párrafo, una idea\" es un principio
  central de la escritura clara.
```

### 9 — Variar la estructura sintáctica

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["estructura_sintactica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto complejo bien escrito combina oraciones simples y compuestas (coordinadas y subordinadas), en vez de repetir siempre la misma estructura corta."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: la variedad sintáctica distingue la escritura madura."

explicacion: |
  Verdadero: la variedad en la estructura de las oraciones es una
  marca de escritura compleja bien lograda.
```

### 10 — Por qué la puntuación importa más en oraciones largas

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["puntuacion", "oraciones_largas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más larga y combinada es una oración, más depende de una buena puntuación para seguir siendo legible."

pasos:
  - "Ver `../signos-de-puntuacion/`: es la razón concreta de por qué este tema depende también de la puntuación."

explicacion: |
  Verdadero: la puntuación es lo que hace legibles a las oraciones
  compuestas más largas.
```

### 11 — Redactar sin frenarse a corregir

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["redaccion", "estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Durante la etapa de redacción del borrador, conviene no frenarse a corregir cada detalle, porque esa revisión detallada corresponde a una etapa posterior."

pasos:
  - "Mezclar redacción y revisión al mismo tiempo puede hacer más lento y difícil sacar las ideas completas al papel."

explicacion: |
  Verdadero: separar redactar de revisar es una estrategia práctica
  para no trabarse durante el primer borrador.
```

### 12 — La planificación decide el tipo textual antes de escribir

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["planificacion", "tipos_textuales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la planificación se decide de qué tipo textual va a ser el texto (narrativo, expositivo, argumentativo...) antes de empezar a redactar."

pasos:
  - "Ver `../tipos-textuales/`: saber el propósito del texto orienta cómo se organiza el esquema."

explicacion: |
  Verdadero: definir el tipo textual es parte de la planificación
  previa a la redacción.
```

### 13 — La revisión busca varios tipos de error

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["revision", "errores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La etapa de revisión busca errores de distinto tipo: coherencia (¿se entiende la idea?), gramática, ortografía/tildación y puntuación."

pasos:
  - "No es una sola revisión de un solo aspecto, sino varias capas de lectura crítica."

explicacion: |
  Verdadero: la revisión abarca múltiples niveles del texto, no sólo
  la ortografía.
```

### 14 — Esquema de párrafos antes de escribir

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["planificacion", "esquema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Armar un esquema breve de los párrafos que van a desarrollar la idea principal o tesis es parte de la planificación, antes de escribir el borrador completo."

pasos:
  - "Ese esquema orienta la redacción y evita perder el hilo del texto en el camino."

explicacion: |
  Verdadero: el esquema de párrafos es una herramienta práctica
  central de la planificación.
```

### 15 — Doble prerrequisito de producción escrita compleja

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["prerrequisito", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Producción escrita compleja tiene dos prerrequisitos directos en el MAPA: oración compuesta (para combinar oraciones) y signos de puntuación (para que esas combinaciones se lean sin ambigüedad)."

pasos:
  - "Ambos prerrequisitos son necesarios en conjunto: combinar oraciones sin puntuar bien resulta igual de ilegible."

explicacion: |
  Verdadero: es el caso de un nodo con doble padre en el MAPA,
  explicado en `../dependencias.md`.
```

### 16 — No mezclar varias ideas grandes en un párrafo

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["parrafos", "coherencia"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Es una buena práctica de escritura mezclar varias ideas grandes distintas dentro de un mismo párrafo, para que el texto sea más corto."

pasos:
  - "Mezclar varias ideas grandes en un párrafo suele dificultar la lectura, en vez de facilitarla."

explicacion: |
  Falso: la regla \"un párrafo, una idea\" existe justamente para
  evitar esa confusión, no para acortar el texto a costa de la
  claridad.
```

### 17 — Reconocer una etapa a partir de una acción concreta

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "intermedio"
  tags: ["produccion_escrita_compleja", "practica"]

variables:
  acciones: ["armar un esquema de los párrafos antes de escribir", "corregir una falta de ortografía detectada al releer el borrador"]
  etapas: ["planificación", "revisión"]
  idx: uno_de([0, 1])

respuesta: etapas[idx]
tipo: mc
opciones_explicitas: ["planificación", "redacción", "revisión", "edición final"]

enunciado: "La acción de \"{acciones[idx]}\" corresponde a la etapa de..."

pasos:
  - "Antes de escribir = planificación. Detectar un error al releer = revisión."

explicacion: |
  Cada acción concreta del proceso de escritura corresponde a una
  etapa específica.
```

### 18 — Aplicación: por qué separar redacción de revisión

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Separar redactar (sacar todas las ideas) de revisar (corregir con ojo crítico) suele producir mejores textos que intentar escribir la versión perfecta desde la primera oración."

pasos:
  - "Frenar cada oración para corregirla antes de seguir suele hacer perder el hilo general del texto."

explicacion: |
  Verdadero: es la justificación práctica de por qué separar el
  proceso en etapas mejora el resultado final.
```

### 19 — Cohesión y coherencia como siguiente paso

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una vez que se puede producir un borrador completo con estructura básica correcta, el siguiente paso es refinar específicamente cómo se conectan las oraciones y párrafos entre sí (cohesión y coherencia)."

pasos:
  - "Ver `../conectores-textuales/`, `../referencia-anafora-y-catafora/`, `../progresion-tematica/`: los tres temas siguientes de la cadena."

explicacion: |
  Verdadero: por eso producción escrita compleja es prerrequisito
  directo de esos tres temas de cohesión y coherencia.
```

### 20 — Aplicación: planificar antes de un texto largo real

```
metadata:
  materia: "lengua"
  tema: "produccion_escrita_compleja"
  nivel: "avanzado"
  tags: ["produccion_escrita_compleja", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de escribir un informe escolar largo, conviene dedicar tiempo a planificar (tipo textual, tesis o idea central, esquema de párrafos) en vez de empezar a escribir directamente sin ningún plan."

pasos:
  - "La planificación previa suele ahorrar tiempo de reescritura y mejorar la coherencia general del texto final."

explicacion: |
  Verdadero: la aplicación práctica más directa de este tema es
  planificar antes de encarar cualquier texto extenso real.
```
