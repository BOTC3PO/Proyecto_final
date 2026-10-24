# Filosofía — El gusto estético (cuestionario, 20 preguntas VBLang)

> Tema: `FI6b`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Diferencia entre qué es el arte y el gusto estético

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_estetico", "que_es_el_arte", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras \"qué es el arte\" pregunta qué hace que algo cuente como arte, el gusto estético pregunta cómo se juzga si ese arte es bueno o malo."

pasos:
  - "Ver `../que-es-el-arte/`: son dos preguntas relacionadas pero distintas."

explicacion: |
  Verdadero: es la diferencia central entre estos dos temas hermanos.
```

### 2 — El dicho "sobre gustos no hay nada escrito"

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "basico"
  tags: ["gusto_subjetivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El dicho popular \"sobre gustos no hay nada escrito\" sugiere que el gusto estético es totalmente subjetivo, sin ningún criterio compartido posible."

pasos:
  - "La filosofía del gusto estético matiza esta idea, sin negarla del todo."

explicacion: |
  Verdadero: es el punto de partida popular que la filosofía del
  gusto pone en discusión.
```

### 3 — Hay debate sobre la objetividad del gusto

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["objetividad_del_gusto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existe debate filosófico sobre si hay algún grado de objetividad en los juicios estéticos, más allá de la preferencia puramente personal."

pasos:
  - "Un amplio consenso histórico y cultural sobre qué obras son \"grandes\" es uno de los argumentos a favor de cierta objetividad."

explicacion: |
  Verdadero: no es un tema cerrado, hay argumentos en ambos sentidos.
```

### 4 — El juicio de gusto según Kant

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["kant", "juicio_de_gusto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Kant propuso que el juicio estético (\"esto es bello\") se expresa como si fuera universal (esperamos que otros estén de acuerdo), aunque no se pueda demostrar con un argumento lógico como un teorema."

pasos:
  - "Es distinto de decir \"me gusta el chocolate\", donde no esperamos ese acuerdo universal."

explicacion: |
  Verdadero: es el argumento central de Kant sobre la peculiaridad
  del juicio estético.
```

### 5 — El juicio estético pretende validez universal

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["kant", "universalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según Kant, el juicio estético es subjetivo (nace de la reacción de cada persona) pero pretende validez universal — una tensión característica de lo estético."

pasos:
  - "Esa tensión entre origen subjetivo y pretensión universal es la idea central de Kant sobre el gusto."

explicacion: |
  Verdadero: es la formulación precisa de la propuesta kantiana sobre
  el juicio de gusto.
```

### 6 — No decimos "es bello sólo para mí"

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["kant", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando decimos \"esta pintura es bella\", normalmente no agregamos \"pero sólo para mí\", como sí haríamos con un gusto puramente personal (\"me gusta el chocolate, pero sólo a mí\")."

pasos:
  - "Es el ejemplo práctico que ilustra la pretensión de universalidad del juicio estético según Kant."

explicacion: |
  Verdadero: es la diferencia de lenguaje que Kant usó para ilustrar
  esta peculiaridad del juicio de gusto.
```

### 7 — Diferenciar gusto personal de juicio de valor artístico

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_personal", "juicio_de_valor"]

variables:
  afirmaciones: ["No me gusta esta pintura", "Esta pintura es técnicamente deficiente en su composición"]
  tipos: ["gusto personal", "juicio de valor artístico"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["gusto personal", "juicio de valor artístico"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "El gusto personal no requiere justificación técnica; el juicio de valor sí admite argumentación sobre técnica, composición u originalidad."

explicacion: |
  Distinguir gusto personal de juicio de valor artístico es una
  herramienta central para analizar el arte con más precisión.
```

### 8 — Se puede reconocer valor sin que guste personalmente

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_personal", "juicio_de_valor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una persona puede reconocer el valor artístico de una obra que, personalmente, no le gusta."

pasos:
  - "Gusto personal y juicio de valor técnico/artístico son evaluaciones distintas, que pueden no coincidir."

explicacion: |
  Verdadero: es la aplicación práctica de la distinción entre gusto
  personal y juicio de valor artístico.
```

### 9 — El gusto cambia con el tiempo

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Lo que una época o cultura considera de \"buen gusto\" varía históricamente: hay estilos artísticos rechazados en su momento y luego consagrados, o al revés."

pasos:
  - "Es un argumento a favor de que el gusto tiene al menos un componente cultural e histórico, más allá de la reacción individual."

explicacion: |
  Verdadero: el carácter cambiante del gusto a lo largo de la
  historia es un dato relevante para este debate filosófico.
```

### 10 — El componente cultural del gusto

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_historico", "cultura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que el gusto varíe según la cultura o la época es un argumento a favor de que no es completamente individual ni completamente objetivo, sino que tiene también un componente social/cultural."

pasos:
  - "El gusto se sitúa entre la pura subjetividad individual y la objetividad total, con un componente cultural compartido."

explicacion: |
  Verdadero: es una tercera posición intermedia entre subjetividad
  pura y objetividad total.
```

### 11 — El gusto no es totalmente arbitrario según la filosofía

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["objetividad_del_gusto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La filosofía del gusto estético concluye de forma unánime que el gusto es completamente arbitrario, sin ningún elemento compartido entre las personas."

pasos:
  - "Es justamente el punto que se matiza: hay debate sobre cuánto hay de objetivo/compartido y cuánto de individual, no una conclusión unánime de arbitrariedad total."

explicacion: |
  Falso: no hay consenso filosófico de que el gusto sea puramente
  arbitrario; el debate sigue abierto sobre su grado de objetividad.
```

### 12 — Kant no dice que el gusto sea completamente objetivo

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["kant", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según Kant, el juicio estético se puede demostrar con un argumento lógico riguroso, igual que un teorema matemático."

pasos:
  - "Kant sostuvo lo contrario: el juicio estético no se puede demostrar así, aunque pretenda validez universal."

explicacion: |
  Falso: la peculiaridad kantiana es justamente que el juicio
  estético pretende universalidad SIN poder demostrarse
  lógicamente, a diferencia de un teorema.
```

### 13 — Justificar un juicio de valor artístico

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["juicio_de_valor", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decir \"esta obra tiene una composición desequilibrada y un uso pobre del color\" es un ejemplo de juicio de valor artístico, que admite argumentación técnica más allá del gusto personal."

pasos:
  - "A diferencia de \"no me gusta\", esta afirmación apela a criterios técnicos discutibles con argumentos."

explicacion: |
  Verdadero: es un ejemplo de juicio de valor que sí admite algún
  tipo de justificación técnica.
```

### 14 — El gusto estético completa la subrama junto a los otros dos temas

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["el_gusto_estetico", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El gusto estético completa, junto con Qué es el arte y Lo bello, la subrama de estética de este mapa."

pasos:
  - "Ver `../que-es-el-arte/` y `../lo-bello/`: los tres son nodos hermanos con ángulos distintos de la experiencia estética."

explicacion: |
  Verdadero: es la relación entre los tres nodos hermanos de esta
  subrama.
```

### 15 — El gusto estético no depende de la definición de arte elegida

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_estetico", "que_es_el_arte"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El debate sobre el gusto estético es completamente independiente de qué definición de arte se sostenga (imitación, expresión, institución, etc.)."

pasos:
  - "Cómo se juzga una obra puede depender de qué se considera relevante según cada definición (por ejemplo, la fidelidad de la imitación, o la originalidad institucional)."

explicacion: |
  Falso: la definición de arte que se sostenga puede influir en qué
  criterios se consideran relevantes al juzgar una obra.
```

### 16 — Consenso histórico como evidencia de objetividad parcial

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["objetividad_del_gusto", "consenso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que ciertas obras (como algunas de Shakespeare o Miguel Ángel) gocen de un amplio consenso histórico y cultural sobre su calidad es uno de los argumentos usados a favor de cierto grado de objetividad en el gusto."

pasos:
  - "Si el gusto fuera completamente arbitrario, sería raro encontrar este tipo de consenso sostenido a través del tiempo y las culturas."

explicacion: |
  Verdadero: es uno de los argumentos filosóficos citados a favor de
  la objetividad parcial del gusto estético.
```

### 17 — Reconocer valor artístico sin que guste (ejemplo práctico)

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["juicio_de_valor", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Alguien puede decir \"reconozco que esta ópera es técnicamente extraordinaria, aunque personalmente no me gusta el género\", combinando un juicio de valor artístico con un gusto personal distinto."

pasos:
  - "Es exactamente la separación entre juicio de valor y gusto personal descrita en la teoría."

explicacion: |
  Verdadero: es un ejemplo cotidiano de cómo se pueden distinguir
  estas dos evaluaciones dentro de una misma persona.
```

### 18 — Ordenar el análisis de un juicio estético

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_estetico", "metodo"]

enunciado: "Ordená los pasos para analizar si un comentario sobre una obra es gusto personal o juicio de valor artístico."
tipo: ordenar
opciones_explicitas:
  - "Identificar la afirmación concreta hecha sobre la obra"
  - "Revisar si se apela a una preferencia sin argumento (\"no me gusta\") o a un criterio técnico (\"la composición es débil\")"
  - "Si hay criterio técnico, evaluar si ese criterio es defendible con argumentos"
  - "Clasificar la afirmación como gusto personal o juicio de valor según esa evaluación"
respuesta_orden: ["Identificar la afirmación concreta hecha sobre la obra", "Revisar si se apela a una preferencia sin argumento (\"no me gusta\") o a un criterio técnico (\"la composición es débil\")", "Si hay criterio técnico, evaluar si ese criterio es defendible con argumentos", "Clasificar la afirmación como gusto personal o juicio de valor según esa evaluación"]
explicacion: |
  El análisis va de identificar la afirmación a distinguir si apela a
  preferencia sin fundamento o a un criterio técnico argumentable.
```

### 19 — El gusto estético como puente entre subjetividad y objetividad

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_estetico", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El gusto estético es un tema donde se cruzan la subjetividad individual, el componente cultural/histórico compartido, y la pregunta filosófica sobre si hay algún grado de objetividad posible."

pasos:
  - "Es un tema que no se resuelve con una sola respuesta simple, sino que integra varias perspectivas."

explicacion: |
  Verdadero: es la síntesis de las distintas dimensiones exploradas
  en este tema.
```

### 20 — Aplicación: separar crítica técnica de preferencia personal

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_estetico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al comentar una obra de arte, conviene distinguir entre \"no me gusta\" (gusto personal, válido sin justificación) y \"esto está mal hecho\" (juicio de valor, que exige argumentar por qué)."

pasos:
  - "Es la aplicación práctica de la distinción central de este tema al momento de hablar sobre arte."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en cualquier
  conversación cotidiana sobre arte.
```
