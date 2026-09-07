# Lengua — discurso referido (cuestionario, 24 preguntas VBLang)

> Tema: `lengua/discurso-referido`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["estilo_directo", "identificacion"]

respuesta: "estilo_directo"
tipo: input

enunciado: "En la oración 'Juan gritó: —¡Ayuda! —', ¿qué tipo de discurso referido se utiliza?"

explicacion: |
  El estilo directo reproduce textualmente las palabras del hablante, utilizando signos como rayas o comillas para aislar la cita.
```

### 2 — pregunta 2

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["transformacion", "estilo_indirecto"]

variables:
  nombre: uno_de(["María", "Pedro", "Lucía"])
  verbo: uno_de(["dijo", "comentó", "afirmó"])

respuesta: "El " + nombre + " " + verbo + " que estaba lloviendo."
tipo: completar

enunciado: "Transformá al estilo indirecto: '{nombre} dijo: —Está lloviendo.'"

explicacion: |
  En el estilo indirecto, el verbo en presente ('está') cambia a imperfecto ('estaba') para mantener la concordancia temporal, y se introduce con la conjunción 'que'.
```

### 3 — pregunta 3

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["puntuacion", "estilo_directo"]

respuesta: "comillas"
tipo: input

enunciado: "¿Qué signo de puntuación se utiliza comúnmente en textos periodísticos o formales para delimitar el estilo directo?"

explicacion: |
  Las comillas (“ ” o ' ') son el recurso gráfico más habitual en contextos formales y periodísticos para citar textualmente.
```

### 4 — pregunta 4

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["estilo_indirecto", "identificacion"]

respuesta: "estilo_indirecto"
tipo: input

enunciado: "En la oración 'La maestra explicó que la tarea era obligatoria', ¿qué tipo de discurso referido se observa?"

explicacion: |
  El estilo indirecto integra la cita dentro de la oración narrativa, utilizando nexos como 'que' y modificando los tiempos verbales y pronombres.
```

### 5 — pregunta 5

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["pronombres", "transformacion"]

variables:
  sujeto: uno_de(["Ella", "Ellos"])
  accion: uno_de(["vino", "llegaron"])

respuesta: "El profesor dijo que " + sujeto + " " + accion + " tarde."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'El profesor dijo: —{sujeto} {accion} tarde.'"

explicacion: |
  Al pasar a indirecto, los pronombres pueden mantenerse si el sujeto es el mismo, pero el verbo se conjuga en la tercera persona del singular o plural según corresponda, y se añade 'que'.
```

### 6 — pregunta 6

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["preguntas", "estilo_indirecto"]

variables:
  lugar: uno_de(["a la escuela", "al parque", "en casa"])

respuesta: "Me preguntó si iba a " + lugar + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Me preguntó: —¿Vas a {lugar}?'"

explicacion: |
  Las preguntas directas en estilo indirecto se introducen con 'si' (si es pregunta sí/no) o con el pronombre interrogativo correspondiente, eliminando la entonación interrogativa y los signos de puntuación.
```

### 7 — pregunta 7

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["puntuacion", "estilo_directo"]

respuesta: "rayas"
tipo: input

enunciado: "¿Qué signo gráfico se utiliza preferentemente en la narrativa literaria argentina para marcar el inicio de cada intervención en el estilo directo?"

explicacion: |
  La raya (—) es el signo estándar en la prosa narrativa para indicar el inicio de cada turno de habla en el diálogo directo.
```

### 8 — pregunta 8

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["concordancia", "tiempos_verbales"]

variables:
  verbo: uno_de(["canto", "baila", "corro"])
  sujeto: uno_de(["él", "ella"])

respuesta: "Dijo que " + sujeto + " " + verbo + " bien."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{sujeto} {verbo} bien.'"

explicacion: |
  El presente de indicativo ('canto/baila/corro') cambia a imperfecto de indicativo ('cantaba/bailaba/corría') al pasar a estilo indirecto si el verbo introductorio está en pasado.
```

### 9 — pregunta 9

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["tiempos_verbales", "futuro"]

variables:
  accion: uno_de(["viajaré", "comeré", "dormiré"])

respuesta: "Afirmó que " + accion + " mañana."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Afirmó: —{accion} mañana.'"

explicacion: |
  El futuro simple ('viajaré/comeré') cambia a condicional simple ('viajaría/comería') en el estilo indirecto cuando el verbo introductorio está en pasado.
```

### 10 — pregunta 10

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["vocabulario", "verbos"]

respuesta: "preguntó"
tipo: input

enunciado: "En la frase '—¿Qué hora es? —inquirió el pasajero', ¿cuál es el verbo introductorio o de enunciación?"

explicacion: |
  El verbo introductorio es 'inquirió' (o 'preguntó' como sinónimo), que señala quién habla o qué función cumple la cita.
```

### 11 — pregunta 11

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["concordancia", "pluscuamperfecto"]

variables:
  accion: uno_de(["había comido", "había salido"])

respuesta: "Me contó que " + accion + " antes."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Me contó: —Ya {accion} antes.'"

explicacion: |
  El pluscuamperfecto ('había comido') se mantiene igual en estilo indirecto si el verbo introductorio está en pasado, ya que el tiempo verbal ya es relativo al pasado.
```

### 12 — pregunta 12

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["imperativo", "transformacion"]

variables:
  orden: uno_de(["ven", "sal", "calla"])

respuesta: "Me mandó que " + orden + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Me mandó: —¡{orden}!'"

explicacion: |
  El imperativo en estilo directo se transforma generalmente en subjuntivo en estilo indirecto ('venga/salga/calle'), pero en contextos informales o de resumen, a veces se mantiene la forma base o se usa 'que + subjuntivo'. Aquí se pide la forma más directa de reporte de mandato.
```

### 13 — pregunta 13

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["gramatica", "cambios"]

respuesta: "pronombres"
tipo: input

enunciado: "Además de los tiempos verbales, ¿qué otro elemento gramatical suele modificarse al pasar de estilo directo a indirecto?"

explicacion: |
  Los pronombres personales y demostrativos (yo/tú/este/ahora) cambian para adaptarse al punto de vista del narrador (él/ella/aquel/allí).
```

### 14 — pregunta 14

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["verbos_de_duda", "transformacion"]

variables:
  duda: uno_de(["no sé", "desconfío", "me pregunto"])

respuesta: "Dijo que " + duda + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{duda} si viene.'"

explicacion: |
  Se integra la duda dentro de la oración principal, manteniendo la conjunción 'si' para la pregunta indirecta y ajustando la concordancia.
```

### 15 — pregunta 15

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "avanzado"
  tags: ["complejidad", "identificacion"]

respuesta: "estilo_directo"
tipo: input

enunciado: "En la frase 'Ella dijo: \"No sé qué hacer\"', ¿qué estilo de discurso referido predomina en la parte citada?"

explicacion: |
  Predomina el estilo directo porque se cita textualmente la frase entre comillas, aunque la frase citada contenga una expresión de duda.
```

### 16 — pregunta 16

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["pronombres", "demostrativos"]

variables:
  objeto: uno_de(["este", "ese"])
  sustantivo: uno_de(["libro", "caso", "problema"])

respuesta: "Dijo que " + objeto + " " + sustantivo + " era importante."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{objeto} {sustantivo} es importante.'"

explicacion: |
  Los demostrativos 'este' (cercanía al hablante original) suelen cambiar a 'ese' o 'aquel' (cercanía o lejanía respecto al narrador actual) en estilo indirecto.
```

### 17 — pregunta 17

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["funcion", "conceptos"]

respuesta: "fidelidad"
tipo: input

enunciado: "¿Qué cualidad principal aporta el estilo directo a un relato?"

explicacion: |
  El estilo directo aporta fidelidad a la enunciación original, dando vivacidad y permitiendo al lector 'escuchar' la voz de los personajes.
```

### 18 — pregunta 18

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["entonacion", "transformacion"]

variables:
  emocion: uno_de(["qué alegría", "qué dolor", "qué sorpresa"])

respuesta: "Exclamó que " + emocion + "."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Exclamó: —¡{emocion}!'"

explicacion: |
  Las exclamaciones en estilo indirecto pierden los signos de exclamación y la entonación marcada, integrándose como una afirmación declarativa.
```

### 19 — pregunta 19

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["vocabulario", "preguntas"]

respuesta: "preguntó"
tipo: input

enunciado: "Si la cita es '—¿Dónde está el baño?', ¿qué verbo introductorio es más apropiado?"

explicacion: |
  'Preguntó', 'inquirió' o 'consultó' son verbos adecuados para introducir una cita interrogativa.
```

### 20 — pregunta 20

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["concordancia", "presente"]

variables:
  accion: uno_de(["trabaja", "estudia", "vive"])

respuesta: "Dice que " + accion + " aquí."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dice: —{accion} aquí.'"

explicacion: |
  Si el verbo introductorio está en presente ('dice'), los tiempos verbales de la cita NO cambian (no hay concordancia temporal hacia atrás).
```

### 21 — pregunta 21

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "basico"
  tags: ["identificacion", "resumen"]

respuesta: "estilo_indirecto"
tipo: input

enunciado: "En la oración 'El testigo afirmó que había visto al sospechoso', ¿qué estilo se usa?"

explicacion: |
  Es estilo indirecto porque el narrador resume lo dicho por el testigo sin citar sus palabras exactas, usando 'que' y modificando el tiempo verbal.
```

### 22 — pregunta 22

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["adverbios", "tiempo"]

variables:
  adverbio: uno_de(["ahora", "hoy", "mañana"])

respuesta: "Dijo que " + adverbio + " era difícil."
tipo: completar

enunciado: "Transformá al estilo indirecto: 'Dijo: —{adverbio} es difícil.'"

explicacion: |
  Los adverbios de tiempo como 'ahora', 'hoy' o 'mañana' suelen cambiar a 'entonces', 'ese día' o 'al día siguiente' en estilo indirecto, aunque en resúmenes informales a veces se mantienen.
```

### 23 — pregunta 23

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "intermedio"
  tags: ["puntuacion", "normas"]

respuesta: "coma"
tipo: input

enunciado: "En '—Vamos al cine —dijo Juan', ¿qué signo separa la cita del verbo introductorio cuando este va al final?"

explicacion: |
  Se utiliza una raya para cerrar la cita y otra para iniciar el verbo introductorio. No hay coma entre la raya final y el verbo. (Nota: Si fuera comillas, sería '...cine", dijo Juan'. Con rayas, es '—cine —dijo Juan'). La pregunta busca el signo que cierra la cita antes del verbo.
```

### 24 — pregunta 24

```
metadata:
  materia: "Lengua"
  tema: "discurso_referido"
  nivel: "avanzado"
  tags: ["funcion", "comparacion"]

respuesta: "agilidad"
tipo: input

enunciado: "¿Qué ventaja principal ofrece el estilo indirecto en la narración de hechos extensos?"

explicacion: |
  El estilo indirecto ofrece agilidad y economía narrativa, permitiendo resumir largos diálogos o pensamientos sin detener la acción con citas textuales.
```
