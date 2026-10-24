# Lengua — Narrador (cuestionario, 20 preguntas VBLang)

> Tema: `P10Ca`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — El narrador no es el autor

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["narrador", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El narrador de una historia es siempre exactamente la misma persona que el autor real del texto."

pasos:
  - "El narrador es una construcción del texto, elegida por el autor según el efecto que quiere lograr."

explicacion: |
  Falso: igual que el hablante lírico, el narrador es una voz
  construida, no necesariamente el autor real.
```

### 2 — Identificar narrador protagonista

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["narrador_protagonista"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador protagonista"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Yo caminé hasta la plaza y me senté a esperar a mi amigo.\" ¿Qué tipo de narrador es?"

pasos:
  - "Cuenta en 1ª persona su propia historia, siendo el personaje central: es protagonista."

explicacion: |
  El narrador protagonista narra su propia historia en 1ª persona.
```

### 3 — Identificar narrador testigo

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["narrador_testigo"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador testigo"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Yo vi cómo Juan caminaba hasta la plaza y se sentaba a esperar.\" ¿Qué tipo de narrador es?"

pasos:
  - "Cuenta en 1ª persona, pero lo que le pasa a OTRO personaje (Juan), no a sí mismo: es testigo."

explicacion: |
  El narrador testigo está presente en la historia (1ª persona) pero
  no es el protagonista de lo que cuenta.
```

### 4 — Identificar narrador omnisciente

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_omnisciente"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador omnisciente"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Juan caminó hasta la plaza, pensando en lo que le diría a María.\" ¿Qué tipo de narrador es?"

pasos:
  - "Narra en 3ª persona (no es personaje) y accede a los PENSAMIENTOS de Juan: es omnisciente."

explicacion: |
  El narrador omnisciente sabe todo, incluso lo que piensan y sienten
  los personajes, desde afuera de la historia.
```

### 5 — Identificar narrador observador

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_observador"]

variables:
  n: uno_de([1, 1])

respuesta: "narrador observador"
tipo: mc
opciones_explicitas: ["narrador protagonista", "narrador testigo", "narrador omnisciente", "narrador observador"]

enunciado: "\"Juan caminó hasta la plaza y se sentó en un banco, mirando el reloj.\" (sin acceder a lo que piensa) ¿Qué tipo de narrador es?"

pasos:
  - "Narra en 3ª persona, sin ser personaje, y sólo cuenta lo observable (acciones), sin pensamientos internos: es observador."

explicacion: |
  El narrador observador cuenta desde afuera, limitado a lo que se ve
  y se oye, sin acceso a la mente de los personajes.
```

### 6 — Persona gramatical del narrador protagonista/testigo

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["persona_gramatical"]

variables:
  tipos: ["narrador protagonista", "narrador testigo"]
  idx: uno_de([0, 1])

respuesta: "primera"
tipo: mc
opciones_explicitas: ["primera", "segunda", "tercera"]

enunciado: "El {tipos[idx]} narra en persona gramatical..."

pasos:
  - "Ambos usan \"yo\" para narrar, sea contando su propia historia o la de otro."

explicacion: |
  Protagonista y testigo son los dos tipos de narrador en 1ª persona.
```

### 7 — Persona gramatical del narrador omnisciente/observador

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "basico"
  tags: ["persona_gramatical"]

variables:
  tipos: ["narrador omnisciente", "narrador observador"]
  idx: uno_de([0, 1])

respuesta: "tercera"
tipo: mc
opciones_explicitas: ["primera", "segunda", "tercera"]

enunciado: "El {tipos[idx]} narra en persona gramatical..."

pasos:
  - "Ambos cuentan desde afuera de la historia, sin ser personajes ni usar \"yo\"."

explicacion: |
  Omnisciente y observador son los dos tipos de narrador en 3ª
  persona.
```

### 8 — Qué distingue omnisciente de observador

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_omnisciente", "narrador_observador", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre narrador omnisciente y observador es que el omnisciente accede a los pensamientos y sentimientos internos de los personajes, y el observador sólo cuenta lo que se puede ver u oír."

pasos:
  - "Ambos narran en 3ª persona, pero difieren en cuánto saben del interior de los personajes."

explicacion: |
  Verdadero: es exactamente el criterio que distingue a los dos
  narradores en 3ª persona.
```

### 9 — Qué distingue protagonista de testigo

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_protagonista", "narrador_testigo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre narrador protagonista y testigo es que el protagonista cuenta su propia historia como personaje central, y el testigo cuenta lo que le pasa a otros."

pasos:
  - "Ambos narran en 1ª persona, pero difieren en si la historia les pasa a ellos o a otro personaje."

explicacion: |
  Verdadero: es el criterio que distingue a los dos narradores en 1ª
  persona.
```

### 10 — El narrador protagonista está limitado a lo que sabe

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador_protagonista", "limitacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un narrador protagonista sólo puede contar lo que él mismo vive, sabe o piensa — no puede acceder a los pensamientos de otros personajes."

pasos:
  - "A diferencia del omnisciente, el protagonista está limitado a su propia experiencia y conocimiento."

explicacion: |
  Verdadero: esa limitación es una de las razones por las que el
  autor elige un tipo de narrador u otro, según el efecto buscado.
```

### 11 — El narrador omnisciente sabe más que cualquier personaje

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_omnisciente", "conocimiento"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El narrador omnisciente puede saber cosas que ningún personaje individual conoce por completo, como los pensamientos secretos de varios personajes a la vez."

pasos:
  - "Su conocimiento no está limitado a la perspectiva de un solo personaje."

explicacion: |
  Verdadero: la amplitud de conocimiento es la característica
  distintiva del narrador omnisciente.
```

### 12 — Clasificar según fragmento (persona + conocimiento)

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "clasificacion"]

variables:
  fragmentos: ["María sentía que el corazón se le aceleraba, aunque nadie más en la sala lo notaba", "María entró a la sala y se sentó en la primera fila, en silencio"]
  tipos: ["narrador omnisciente", "narrador observador"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["narrador omnisciente", "narrador observador"]

enunciado: "\"{fragmentos[idx]}\" (narrado en 3ª persona) corresponde a un..."

pasos:
  - "Si accede a lo que siente María por dentro, es omnisciente. Si sólo describe acciones visibles, es observador."

explicacion: |
  El acceso (o no) al interior del personaje es el criterio que
  distingue estos dos tipos de narrador en 3ª persona.
```

### 13 — Efecto del narrador protagonista: inmediatez

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador_protagonista", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un narrador protagonista genera un efecto de inmediatez y subjetividad, porque el lector accede directamente a la experiencia del personaje central."

pasos:
  - "El costo de esa cercanía es la limitación: sólo se sabe lo que el protagonista sabe."

explicacion: |
  Verdadero: cada tipo de narrador tiene un efecto propio en cómo el
  lector experimenta la historia.
```

### 14 — Efecto del narrador observador: distancia

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador_observador", "efecto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar un narrador observador genera un efecto de distancia y misterio, porque el lector debe interpretar a los personajes sin ayuda de sus pensamientos internos."

pasos:
  - "Al no acceder al interior de los personajes, el lector se apoya sólo en gestos y acciones, como si viera la escena."

explicacion: |
  Verdadero: la falta de acceso interno genera ambigüedad
  interpretativa, un efecto buscado deliberadamente en muchos textos.
```

### 15 — Un texto puede tener un solo narrador por convención

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "consistencia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Generalmente, un cuento o novela mantiene el mismo tipo de narrador (persona y nivel de conocimiento) a lo largo de todo el texto, salvo que el autor cambie deliberadamente de narrador entre capítulos."

pasos:
  - "Cambiar de narrador sin aviso puede confundir al lector; los cambios deliberados suelen marcarse claramente (por capítulo, por ejemplo)."

explicacion: |
  Verdadero: la consistencia del narrador es la norma, salvo decisión
  explícita del autor de alternar.
```

### 16 — Diferenciar narrador de personaje que habla en diálogo

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "En una obra de teatro (género dramático), los personajes que hablan en los diálogos cumplen la misma función que un narrador en un cuento."

pasos:
  - "El género dramático no tiene narrador; los personajes hablan directamente entre sí (ver `../genero-dramatico/`)."

explicacion: |
  Falso: el género dramático justamente no tiene narrador — la
  historia se conoce sólo a través del diálogo entre personajes.
```

### 17 — El narrador testigo puede ser un personaje secundario

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador_testigo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El narrador testigo suele ser un personaje secundario de la historia, que observa y cuenta lo que le pasa al protagonista."

pasos:
  - "A diferencia del narrador protagonista, el testigo no es el centro de la trama, sólo participa como observador cercano."

explicacion: |
  Verdadero: el testigo típico es un personaje cercano al
  protagonista, pero no el centro de los hechos.
```

### 18 — Ordenar el proceso para identificar el narrador

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "intermedio"
  tags: ["narrador", "metodo"]

enunciado: "Ordená los pasos para identificar el tipo de narrador de un texto."
tipo: ordenar
opciones_explicitas:
  - "Revisar si el narrador dice \"yo\" y participa como personaje (1ª persona) o cuenta desde afuera (3ª persona)"
  - "Si es 1ª persona, determinar si la historia le pasa a él (protagonista) o a otro (testigo)"
  - "Si es 3ª persona, determinar si accede a pensamientos internos (omnisciente) o sólo a lo observable (observador)"
  - "Confirmar que esa elección se mantiene a lo largo del texto"
respuesta_orden: ["Revisar si el narrador dice \"yo\" y participa como personaje (1ª persona) o cuenta desde afuera (3ª persona)", "Si es 1ª persona, determinar si la historia le pasa a él (protagonista) o a otro (testigo)", "Si es 3ª persona, determinar si accede a pensamientos internos (omnisciente) o sólo a lo observable (observador)", "Confirmar que esa elección se mantiene a lo largo del texto"]
explicacion: |
  El método sigue el mismo árbol de decisión de la teoría: primero
  persona gramatical, después el criterio específico de cada rama.
```

### 19 — El narrador y el punto de vista están relacionados

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "punto_de_vista", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo de narrador elegido determina desde dónde y con cuánta información se cuenta la historia — eso es justamente lo que se profundiza en el tema \"punto de vista\"."

pasos:
  - "Quién narra (protagonista/testigo/omnisciente/observador) fija los límites de lo que se puede contar."

explicacion: |
  Verdadero: por eso narrador es prerrequisito directo de punto de
  vista, el siguiente tema de esta subrama.
```

### 20 — Aplicación: elegir narrador según el efecto buscado

```
metadata:
  materia: "lengua"
  tema: "narrador"
  nivel: "avanzado"
  tags: ["narrador", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si un autor quiere que el lector descubra la verdad al mismo tiempo que el protagonista, sin saber más que él, conviene usar un narrador protagonista antes que uno omnisciente."

pasos:
  - "El narrador omnisciente le daría al lector información que el protagonista todavía no tiene, rompiendo esa sorpresa compartida."

explicacion: |
  Verdadero: elegir el tipo de narrador es una decisión que controla
  cuánta información recibe el lector y cuándo.
```
