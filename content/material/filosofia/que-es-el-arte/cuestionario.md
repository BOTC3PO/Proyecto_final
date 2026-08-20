# Filosofía — Qué es el arte (cuestionario, 20 preguntas VBLang)

> Tema: `FI6a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la estética

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "basico"
  tags: ["estetica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La estética es la rama de Filosofía que estudia el arte, la belleza y el gusto."

pasos:
  - "Es una de las 5 ramas clásicas de Filosofía."

explicacion: |
  Verdadero: es la definición central de esta rama filosófica.
```

### 2 — Definir el arte es difícil

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "intermedio"
  tags: ["definicion_de_arte"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque parece fácil reconocer un ejemplo de arte, es sorprendentemente difícil dar una definición general que incluya a todo lo que se considera arte y excluya al resto."

pasos:
  - "Un cuadro, una sinfonía, una novela y una escultura son todos \"arte\", pero encontrar qué tienen en común no es trivial."

explicacion: |
  Verdadero: es el problema central de este tema.
```

### 3 — Identificar el arte como imitación (mímesis)

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "intermedio"
  tags: ["arte_como_imitacion"]

variables:
  n: uno_de([1, 1])

respuesta: "arte como imitación (mímesis)"
tipo: mc
opciones_explicitas: ["arte como imitación (mímesis)", "arte como expresión", "arte como institución"]

enunciado: "La definición histórica más antigua, asociada a Platón y Aristóteles, que sostiene que el arte imita o representa la realidad, se llama..."

pasos:
  - "Es la definición más antigua registrada de la teoría."

explicacion: |
  La mímesis (imitación) es la definición clásica más antigua del
  arte.
```

### 4 — Problema de la definición como imitación

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_imitacion", "problema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La definición del arte como imitación tiene el problema de que el arte abstracto, que no representa nada reconocible, no encaja bien en ella."

pasos:
  - "Un cuadro abstracto no \"imita\" nada del mundo real de forma directa."

explicacion: |
  Verdadero: es la limitación central de la definición mimética
  frente al arte moderno abstracto.
```

### 5 — Identificar el arte como expresión

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "intermedio"
  tags: ["arte_como_expresion"]

variables:
  n: uno_de([1, 1])

respuesta: "arte como expresión"
tipo: mc
opciones_explicitas: ["arte como imitación (mímesis)", "arte como expresión", "arte como institución"]

enunciado: "La definición que sostiene que el arte comunica o expresa emociones o estados internos del artista se llama..."

pasos:
  - "Pone el foco en la comunicación de un estado interno, no en la representación de la realidad externa."

explicacion: |
  El arte como expresión enfatiza la comunicación de emociones o
  estados internos.
```

### 6 — Problema de la definición como expresión

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_expresion", "problema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La definición del arte como expresión tiene el problema de que no toda expresión emocional (como un grito de dolor) se considera arte."

pasos:
  - "Expresar una emoción no basta, por sí solo, para que algo cuente como arte."

explicacion: |
  Verdadero: es la limitación central de esta definición, que es
  demasiado amplia.
```

### 7 — Identificar el arte como forma significativa

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_forma_significativa"]

variables:
  n: uno_de([1, 1])

respuesta: "arte como forma significativa"
tipo: mc
opciones_explicitas: ["arte como forma significativa", "arte como imitación (mímesis)", "arte como institución"]

enunciado: "La definición que sostiene que el arte es una organización especial de sus elementos formales (color, línea, sonido) que genera una experiencia estética particular se llama..."

pasos:
  - "Pone el foco en la organización formal de los elementos, no en qué representa o expresa la obra."

explicacion: |
  El arte como forma significativa se enfoca en la organización
  formal de los elementos de la obra.
```

### 8 — Problema de la definición como forma significativa

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_forma_significativa", "problema"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La definición del arte como forma significativa tiene el problema de caer en circularidad: ¿qué hace que una forma sea \"significativa\" sin recurrir de nuevo a la idea de arte?"

pasos:
  - "Definir \"forma significativa\" sin apelar a lo que ya se considera arte es difícil de evitar."

explicacion: |
  Verdadero: es la limitación lógica central de esta definición.
```

### 9 — Identificar el arte como institución

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_institucion"]

variables:
  n: uno_de([1, 1])

respuesta: "arte como institución"
tipo: mc
opciones_explicitas: ["arte como institución", "arte como expresión", "arte como imitación (mímesis)"]

enunciado: "La definición que sostiene que algo es arte porque el \"mundo del arte\" (museos, críticos, artistas) lo reconoce como tal se llama..."

pasos:
  - "Desplaza la pregunta de \"qué propiedades tiene la obra\" a \"quién la declara arte\"."

explicacion: |
  El arte como institución pone el foco en el reconocimiento social,
  no en propiedades intrínsecas de la obra.
```

### 10 — El urinal de Duchamp como caso límite

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_institucion", "duchamp"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El urinal presentado como obra de arte por Duchamp es un caso límite que se usa para argumentar a favor de la definición del arte como institución, más que como propiedades intrínsecas del objeto."

pasos:
  - "Un objeto cotidiano sin ninguna propiedad artística \"visible\" se volvió arte por el contexto institucional en que se presentó."

explicacion: |
  Verdadero: es el ejemplo histórico más citado a favor de la
  definición institucional del arte.
```

### 11 — Ninguna definición cierra el debate por completo

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["definicion_de_arte", "debate_abierto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada definición histórica del arte (imitación, expresión, forma significativa, institución) explica bien algunos casos y falla en otros, sin que ninguna cierre el debate por completo."

pasos:
  - "Es un ejemplo clásico de \"concepto en disputa\" en filosofía."

explicacion: |
  Verdadero: es la conclusión central de este tema, coherente con la
  neutralidad ya aplicada en otros temas de Filosofía.
```

### 12 — Presentar las definiciones sin declarar ganadora

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El enfoque más honesto al presentar las distintas definiciones de arte es exponer qué sostiene cada una, sin declarar una definición \"ganadora\" o definitivamente correcta."

pasos:
  - "Mismo criterio de neutralidad ya aplicado en `../epistemologia/`, `../etica-como-rama-propia/` y otros temas de esta materia."

explicacion: |
  Verdadero: es el criterio de neutralidad consistente en toda la
  materia de Filosofía.
```

### 13 — Clasificar una obra según qué definición la explica mejor

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["definicion_de_arte", "practica"]

variables:
  obras: ["una pintura realista de un paisaje", "un cuadro abstracto sin ninguna figura reconocible presentado en un museo importante"]
  definiciones: ["arte como imitación (mímesis)", "arte como institución"]
  idx: uno_de([0, 1])

respuesta: definiciones[idx]
tipo: mc
opciones_explicitas: ["arte como imitación (mímesis)", "arte como expresión", "arte como forma significativa", "arte como institución"]

enunciado: "\"{obras[idx]}\" es explicada mejor por la definición de..."

pasos:
  - "Una pintura realista encaja bien en la mímesis; un cuadro abstracto sin representación reconocible, reconocido por el contexto institucional, encaja mejor en la definición institucional."

explicacion: |
  Distintas obras se explican mejor con distintas definiciones
  históricas del arte, ninguna las cubre todas por igual.
```

### 14 — Platón y Aristóteles como referentes de la mímesis

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "intermedio"
  tags: ["arte_como_imitacion", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Platón y Aristóteles son los referentes clásicos asociados a la idea del arte como imitación (mímesis) de la realidad."

pasos:
  - "Es la definición más antigua registrada en la historia de la filosofía del arte."

explicacion: |
  Verdadero: son los filósofos griegos clásicos asociados a esta
  primera definición histórica.
```

### 15 — La definición institucional es una propuesta del siglo XX

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_institucion", "contexto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La definición del arte como institución es una propuesta influyente especialmente del siglo XX, tras la aparición del arte conceptual."

pasos:
  - "El caso del urinal de Duchamp es un ejemplo emblemático de ese contexto histórico."

explicacion: |
  Verdadero: es una definición más reciente que la mímesis o la
  expresión, surgida ante nuevas formas de arte del siglo XX.
```

### 16 — El arte abstracto desafía definiciones tradicionales

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["arte_como_imitacion", "arte_abstracto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El surgimiento del arte abstracto desafió a la definición del arte como imitación, obligando a buscar definiciones alternativas."

pasos:
  - "Es la razón concreta por la que se buscaron otras definiciones (expresión, forma significativa, institución) además de la mímesis."

explicacion: |
  Verdadero: los cambios históricos en las formas de arte impulsaron
  el desarrollo de nuevas definiciones filosóficas.
```

### 17 — La estética como parte de las 5 ramas clásicas

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "intermedio"
  tags: ["estetica", "ramas_clasicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La estética completa, junto a metafísica, epistemología, ética y lógica, las 5 ramas clásicas de Filosofía."

pasos:
  - "Ver `../ser-ontologia/`, `../epistemologia/` y `../etica-como-rama-propia/`: es la misma clasificación mencionada en esos temas."

explicacion: |
  Verdadero: es la clasificación clásica completa de las 5 ramas de
  la disciplina.
```

### 18 — Ordenar el análisis histórico de las definiciones de arte

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "intermedio"
  tags: ["definicion_de_arte", "metodo"]

enunciado: "Ordená cronológicamente las cuatro definiciones históricas del arte mencionadas en la teoría."
tipo: ordenar
opciones_explicitas:
  - "Arte como imitación (mímesis)"
  - "Arte como expresión"
  - "Arte como forma significativa"
  - "Arte como institución"
respuesta_orden: ["Arte como imitación (mímesis)", "Arte como expresión", "Arte como forma significativa", "Arte como institución"]
explicacion: |
  El orden refleja la evolución histórica de los intentos de
  definición, cada uno como respuesta a limitaciones del anterior
  frente a nuevas formas de arte.
```

### 19 — Qué es el arte abre la subrama de estética

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["que_es_el_arte", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema abre la subrama de estética, que se completa con El gusto estético (cómo se juzga el arte) y Lo bello (qué hace que algo se considere bello)."

pasos:
  - "Ver `../el-gusto-estetico/` y `../lo-bello/`: los tres son nodos hermanos con ángulos distintos de la experiencia estética."

explicacion: |
  Verdadero: es la relación entre los tres nodos hermanos de esta
  subrama.
```

### 20 — Aplicación: analizar una obra polémica

```
metadata:
  materia: "filosofia"
  tema: "que_es_el_arte"
  nivel: "avanzado"
  tags: ["definicion_de_arte", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante una obra contemporánea polémica (\"¿esto es arte?\"), conviene identificar con qué definición histórica encajaría mejor, en vez de responder sólo con una opinión personal sin argumento."

pasos:
  - "Usar el vocabulario filosófico (mímesis, expresión, forma significativa, institución) da herramientas de análisis más allá del gusto personal."

explicacion: |
  Verdadero: es la aplicación práctica de este tema para analizar
  casos concretos y polémicos de arte contemporáneo.
```
