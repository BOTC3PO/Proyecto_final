# Lengua — Punto de vista (cuestionario, 20 preguntas VBLang)

> Tema: `P10Cb`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre narrador y punto de vista

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["punto_de_vista", "narrador", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El narrador responde \"¿quién cuenta la historia?\", mientras que el punto de vista responde \"¿desde dónde/con qué perspectiva se cuenta?\" — son dos preguntas distintas sobre el mismo texto."

pasos:
  - "Dos narradores del mismo tipo pueden tener puntos de vista distintos."

explicacion: |
  Verdadero: narrador y punto de vista analizan aspectos diferentes
  de cómo se cuenta una historia.
```

### 2 — Identificar focalización cero

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_cero"]

variables:
  n: uno_de([1, 1])

respuesta: "focalización cero"
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna", "focalización externa"]

enunciado: "Cuando el narrador accede a todo sin ninguna restricción, sin filtrar la información a través de un personaje en particular, la focalización es..."

pasos:
  - "Sin filtro = el punto de vista más amplio posible = focalización cero."

explicacion: |
  La focalización cero es característica del narrador omnisciente
  clásico, sin restricciones de conocimiento.
```

### 3 — Identificar focalización interna

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_interna"]

variables:
  n: uno_de([1, 1])

respuesta: "focalización interna"
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna", "focalización externa"]

enunciado: "Cuando la información pasa por la conciencia de UN solo personaje, y el lector sólo sabe lo que ese personaje sabe o percibe, la focalización es..."

pasos:
  - "Filtro por un solo personaje = focalización interna."

explicacion: |
  La focalización interna limita la información a la perspectiva de
  un personaje específico.
```

### 4 — Identificar focalización externa

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_externa"]

variables:
  n: uno_de([1, 1])

respuesta: "focalización externa"
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna", "focalización externa"]

enunciado: "Cuando el punto de vista queda fuera de cualquier conciencia y sólo se cuenta lo observable, la focalización es..."

pasos:
  - "Sin acceso a ninguna mente, sólo lo visible/audible = focalización externa."

explicacion: |
  La focalización externa coincide con lo que narra un narrador
  observador.
```

### 5 — Relación focalización cero - narrador omnisciente

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_cero", "narrador_omnisciente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador omnisciente normalmente tiene focalización cero: no hay ningún filtro que limite lo que puede contar."

pasos:
  - "Ambos conceptos (narrador omnisciente y focalización cero) describen el mismo acceso ilimitado a la información."

explicacion: |
  Verdadero: es la relación típica (aunque no la única posible) entre
  tipo de narrador y focalización.
```

### 6 — Relación focalización externa - narrador observador

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_externa", "narrador_observador"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador observador coincide con la focalización externa: en ambos casos sólo se cuenta lo observable, sin acceso a pensamientos."

pasos:
  - "Los dos conceptos describen la misma limitación a lo visible/audible."

explicacion: |
  Verdadero: narrador observador y focalización externa se
  corresponden directamente.
```

### 7 — Un narrador en 3ª persona puede tener focalización interna

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_interna", "3a_persona"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador en 3ª persona (que no dice \"yo\") puede igual tener focalización interna, si el relato se limita a lo que percibe un solo personaje."

pasos:
  - "Persona gramatical y focalización no siempre coinciden de forma obvia: es el caso más avanzado del tema."

explicacion: |
  Verdadero: aunque el narrador no use \"yo\", puede filtrar toda la
  información a través de la conciencia de un único personaje.
```

### 8 — Reconocer focalización en un fragmento

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "practica"]

variables:
  fragmentos: ["Juan sabía que algo andaba mal, aunque no podía explicar por qué. Miró a María, que reía sin sospechar nada", "Juan miró a María, que reía sin que él dijera nada"]
  tipos: ["focalización interna (en Juan)", "focalización externa"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna (en Juan)", "focalización externa"]

enunciado: "\"{fragmentos[idx]}\" tiene..."

pasos:
  - "Si se accede a lo que Juan sabe/siente pero no a lo que piensa María (\"sin sospechar nada\" es evaluación externa), es focalización interna en Juan. Si sólo se describen acciones observables, es externa."

explicacion: |
  El primer fragmento filtra la información a través de la
  conciencia de Juan; el segundo se limita a lo observable.
```

### 9 — Focalización cero da la información más completa

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["focalizacion_cero", "informacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "De las tres focalizaciones, la cero es la que le da al lector la mayor cantidad de información posible, sin restricciones."

pasos:
  - "Sin filtro alguno, el narrador puede contar todo lo que sabe de cualquier personaje o situación."

explicacion: |
  Verdadero: focalización cero significa ausencia total de filtro
  informativo.
```

### 10 — Focalización interna genera suspenso

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_interna", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar focalización interna en un personaje que no sabe todo lo que está pasando puede generar suspenso, porque el lector descubre la información al mismo tiempo que ese personaje."

pasos:
  - "El lector queda limitado al mismo conocimiento que tiene el personaje focal."

explicacion: |
  Verdadero: es un recurso deliberado en géneros como el misterio o
  el suspenso.
```

### 11 — Novela de misterio y focalización

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "misterio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una novela de misterio, elegir focalización interna en el detective (en vez de focalización cero) evita que el lector sepa la solución antes de tiempo."

pasos:
  - "Con focalización cero, el narrador podría revelar información que el detective todavía no descubrió, arruinando el misterio."

explicacion: |
  Verdadero: la elección de focalización controla deliberadamente
  cuánta información recibe el lector.
```

### 12 — Dos narradores omniscientes, distinto punto de vista

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["punto_de_vista", "narrador_omnisciente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dos textos con narrador omnisciente pueden tener puntos de vista distintos si uno se centra más en la perspectiva de un personaje en particular que el otro."

pasos:
  - "El tipo de narrador (persona + conocimiento general) no agota la pregunta de \"desde dónde\" se enfoca la narración."

explicacion: |
  Verdadero: por eso el punto de vista es un análisis complementario,
  no redundante, al de narrador.
```

### 13 — Focalización externa y misterio sobre lo interno

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_externa", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La focalización externa genera cierto misterio sobre lo que sienten o piensan los personajes, porque el lector debe inferirlo sólo a partir de sus acciones."

pasos:
  - "Sin acceso a la mente de nadie, el lector interpreta como si viera la escena desde afuera, sin ayuda del narrador."

explicacion: |
  Verdadero: la ausencia de acceso interno es lo que genera esa
  distancia interpretativa.
```

### 14 — Focalización no es lo mismo que el género del narrador

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La focalización clasifica al narrador según si es protagonista, testigo, omnisciente u observador."

pasos:
  - "Esa clasificación (protagonista/testigo/omnisciente/observador) es la del tema \"narrador\"; la focalización usa otras tres categorías (cero/interna/externa)."

explicacion: |
  Falso: son dos sistemas de clasificación relacionados pero
  distintos, cada uno con su propio vocabulario técnico.
```

### 15 — Focalización interna puede cambiar de personaje

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion_interna", "cambios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un texto con focalización interna puede cambiar de personaje focal entre capítulos, mostrando primero la perspectiva de uno y después la de otro."

pasos:
  - "Mientras el cambio sea deliberado y claro (por ejemplo, un capítulo por personaje), es una técnica narrativa válida."

explicacion: |
  Verdadero: alternar el personaje focal es un recurso narrativo
  común en novelas con varios protagonistas.
```

### 16 — Punto de vista literal vs. técnico

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["punto_de_vista", "vocabulario"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En el análisis literario, \"punto de vista\" es un término técnico que se estudia principalmente a través del concepto de focalización, no sólo como sinónimo cotidiano de \"opinión\"."

pasos:
  - "El uso cotidiano (\"mi punto de vista sobre algo\") es distinto del uso técnico literario (por dónde pasa la información narrativa)."

explicacion: |
  Verdadero: distinguir el uso técnico evita confundir este análisis
  con dar una opinión sobre el texto.
```

### 17 — Clasificar tres fragmentos según focalización

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "practica"]

variables:
  fragmentos: ["Todos en el pueblo sabían la verdad, menos Juan, que seguía confiando ciegamente", "Juan sospechaba de todos, aunque no tenía pruebas de nada", "Juan caminó por la calle principal y se detuvo frente a la panadería"]
  tipos: ["focalización cero", "focalización interna (en Juan)", "focalización externa"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["focalización cero", "focalización interna (en Juan)", "focalización externa"]

enunciado: "\"{fragmentos[idx]}\" tiene..."

pasos:
  - "Si sabe más que cualquier personaje (incluido lo que \"todos sabían\"), es cero. Si se limita a lo que Juan piensa/sospecha, es interna. Si sólo describe acciones, es externa."

explicacion: |
  Cada fragmento fue construido para ejemplificar una focalización
  distinta según cuánta y de quién es la información que se cuenta.
```

### 18 — Ordenar el análisis del punto de vista

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "intermedio"
  tags: ["punto_de_vista", "metodo"]

enunciado: "Ordená los pasos para analizar el punto de vista de un fragmento narrativo, después de ya haber identificado el tipo de narrador."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el narrador accede a pensamientos internos de algún personaje"
  - "Si accede, determinar si es de UN personaje (interna) o de TODOS sin restricción (cero)"
  - "Si no accede a ningún pensamiento interno, clasificar como focalización externa"
  - "Confirmar que la focalización identificada es consistente con el tipo de narrador ya reconocido"
respuesta_orden: ["Revisar si el narrador accede a pensamientos internos de algún personaje", "Si accede, determinar si es de UN personaje (interna) o de TODOS sin restricción (cero)", "Si no accede a ningún pensamiento interno, clasificar como focalización externa", "Confirmar que la focalización identificada es consistente con el tipo de narrador ya reconocido"]
explicacion: |
  El análisis parte del acceso (o no) a lo interno, y termina
  contrastando esa conclusión con el tipo de narrador ya establecido.
```

### 19 — Punto de vista como paso previo a estructura narrativa

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["punto_de_vista", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una vez establecido desde qué perspectiva se cuenta una historia (punto de vista), el siguiente paso lógico es analizar en qué orden se cuentan los hechos (estructura narrativa)."

pasos:
  - "Primero se resuelve QUIÉN cuenta y DESDE DÓNDE; después, EN QUÉ ORDEN lo cuenta."

explicacion: |
  Verdadero: por eso punto de vista es prerrequisito directo de
  estructura narrativa, el siguiente tema de la subrama.
```

### 20 — Aplicación: elegir focalización según el efecto

```
metadata:
  materia: "lengua"
  tema: "punto_de_vista"
  nivel: "avanzado"
  tags: ["focalizacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere que el lector sienta la misma confusión que un personaje perdido en un lugar desconocido, conviene usar focalización interna en ese personaje antes que focalización cero."

pasos:
  - "La focalización cero le daría al lector información (como el mapa completo del lugar) que el personaje no tiene, rompiendo el efecto de confusión buscado."

explicacion: |
  Verdadero: elegir la focalización adecuada es una herramienta
  directa para controlar la experiencia del lector.
```
