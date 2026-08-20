# Filosofía — Ética como rama propia (cuestionario, 20 preguntas VBLang)

> Tema: `FI5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la ética

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "basico"
  tags: ["etica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética es la rama de Filosofía que estudia qué hace que una acción sea correcta o incorrecta, qué es una vida buena, y cómo se justifican los juicios morales."

pasos:
  - "Es una de las 5 ramas clásicas de Filosofía."

explicacion: |
  Verdadero: es la definición central de esta rama filosófica.
```

### 2 — Qué pregunta la ética normativa

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_normativa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética normativa busca criterios generales para evaluar si una acción es correcta, preguntando cómo DEBERÍA actuarse, no cómo la gente de hecho actúa."

pasos:
  - "Es distinta de un estudio descriptivo sobre cómo se comporta la gente."

explicacion: |
  Verdadero: es la pregunta central de la ética normativa.
```

### 3 — Diferenciar ética descriptiva de normativa

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_descriptiva", "etica_normativa", "diferenciacion"]

variables:
  afirmaciones: ["La mayoría de la gente en tal cultura considera aceptable X", "X es correcto porque respeta la dignidad de las personas"]
  tipos: ["ética descriptiva", "ética normativa"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["ética descriptiva", "ética normativa"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "Describir qué cree la gente es descriptiva; argumentar qué debería considerarse correcto es normativa."

explicacion: |
  La ética descriptiva reporta creencias reales; la normativa
  argumenta sobre qué debería ser correcto.
```

### 4 — La ética descriptiva es un estudio empírico

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_descriptiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética descriptiva es más cercana a un estudio empírico (sociológico o antropológico) que a la filosofía normativa, porque describe cómo actúa la gente de hecho."

pasos:
  - "No pregunta qué DEBERÍA ser correcto, sino qué SE CONSIDERA correcto en distintas culturas o momentos."

explicacion: |
  Verdadero: es la razón por la que se distingue claramente de la
  ética normativa, que sí es un análisis propiamente filosófico.
```

### 5 — Primera pregunta central: qué hace correcta a una acción

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["preguntas_centrales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una de las tres preguntas centrales que organizan las corrientes normativas es \"¿qué hace que una acción sea correcta?\", con foco en la acción misma o sus consecuencias."

pasos:
  - "Esta pregunta da lugar a corrientes como el utilitarismo y la deontología."

explicacion: |
  Verdadero: es una de las tres preguntas centrales mencionadas en la
  teoría.
```

### 6 — Segunda pregunta central: qué hace buena a una persona

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["preguntas_centrales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra de las tres preguntas centrales es \"¿qué hace que una persona sea buena?\", con foco en el carácter más que en acciones puntuales."

pasos:
  - "Esta pregunta da lugar específicamente a la ética de la virtud."

explicacion: |
  Verdadero: es la segunda pregunta central mencionada en la teoría.
```

### 7 — Tercera pregunta central: acuerdo sobre reglas compartidas

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["preguntas_centrales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tercera pregunta central es \"¿cómo se llega a un acuerdo sobre reglas morales compartidas?\", con foco en el contrato social."

pasos:
  - "Esta pregunta da lugar específicamente al contractualismo."

explicacion: |
  Verdadero: es la tercera pregunta central mencionada en la teoría.
```

### 8 — Las 5 ramas clásicas de Filosofía

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "basico"
  tags: ["ramas_clasicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las 5 ramas clásicas de Filosofía son: metafísica, epistemología, ética, lógica y estética."

pasos:
  - "Ver `../ser-ontologia/` y `../epistemologia/`: es la misma clasificación ya mencionada en esos temas."

explicacion: |
  Verdadero: es la clasificación clásica de las áreas centrales de la
  disciplina.
```

### 9 — Metaética como tercer nivel de análisis

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["metaetica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La metaética pregunta algo más abstracto todavía que la ética normativa: qué significa, en general, que algo sea \"moralmente correcto\", y si los juicios morales son objetivos o subjetivos."

pasos:
  - "Es un tercer nivel de análisis ético, junto a la normativa y la descriptiva, mencionado brevemente sin profundizar."

explicacion: |
  Verdadero: la metaética es el nivel más abstracto de los tres,
  cuestionando la naturaleza misma de los juicios morales.
```

### 10 — Los tres niveles de análisis ético

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_descriptiva", "etica_normativa", "metaetica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ética descriptiva, ética normativa y metaética son tres niveles distintos de análisis dentro de la rama de la ética."

pasos:
  - "Cada nivel responde una pregunta distinta: qué cree la gente, qué debería considerarse correcto, y qué significan en general los juicios morales."

explicacion: |
  Verdadero: es la clasificación completa de niveles dentro de la
  ética como rama filosófica.
```

### 11 — Neutralidad al presentar corrientes normativas

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al presentar las corrientes normativas (utilitarismo, deontología, etc.), el objetivo es describir qué sostiene cada una, no evaluar cuál es \"la correcta\"."

pasos:
  - "Mismo criterio de neutralidad ya aplicado en `../epistemologia/`, `../existencia/` y `../realidad/`."

explicacion: |
  Verdadero: son tradiciones filosóficas con argumentos sólidos
  propios, sin consenso definitivo entre filósofos.
```

### 12 — Ética normativa como fundamento de corrientes específicas

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_como_rama_propia", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema da el marco general de las tres preguntas centrales antes de que los cuatro temas siguientes (utilitarismo, deontología, ética de la virtud, contractualismo) bajen a corrientes normativas específicas."

pasos:
  - "Ver `../utilitarismo/`, `../deontologia/`, `../etica-de-la-virtud/`, `../contractualismo/`: los cuatro nodos hermanos dependen de éste."

explicacion: |
  Verdadero: es el prerrequisito directo de las cuatro corrientes
  normativas específicas de la subrama.
```

### 13 — Identificar el foco de cada pregunta central

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["preguntas_centrales", "practica"]

variables:
  preguntas: ["¿qué hace correcta a una acción?", "¿qué hace buena a una persona?", "¿cómo se acuerdan reglas compartidas?"]
  focos: ["la acción o sus consecuencias", "el carácter", "el contrato social"]
  idx: uno_de([0, 1, 2])

respuesta: focos[idx]
tipo: mc
opciones_explicitas: ["la acción o sus consecuencias", "el carácter", "el contrato social"]

enunciado: "La pregunta \"{preguntas[idx]}\" tiene como foco principal..."

pasos:
  - "Cada una de las tres preguntas centrales organiza un foco distinto de análisis ético."

explicacion: |
  Cada pregunta central corresponde a un foco de análisis distinto
  dentro de la ética normativa.
```

### 14 — Ética como estudio filosófico, no sólo empírico

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_normativa", "metodo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La ética normativa se resuelve completamente con una encuesta sobre qué considera correcto la mayoría de la gente."

pasos:
  - "Eso sería ética descriptiva; la normativa argumenta filosóficamente sobre qué DEBERÍA considerarse correcto, más allá de lo que la mayoría opine."

explicacion: |
  Falso: la ética normativa no se resuelve con estadísticas de
  opinión, requiere argumentación filosófica propia.
```

### 15 — Vida buena como pregunta ética

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica", "vida_buena"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Además de evaluar acciones puntuales, la ética también pregunta qué es una vida \"buena\" en un sentido más amplio."

pasos:
  - "Es una de las preguntas centrales mencionadas en la definición general de ética."

explicacion: |
  Verdadero: la ética no se limita a juzgar actos aislados, también
  aborda el sentido general de una vida bien vivida.
```

### 16 — Las corrientes normativas responden preguntas distintas

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["corrientes_normativas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente normativa específica (utilitarismo, deontología, ética de la virtud, contractualismo) responde de forma distinta a una o varias de las tres preguntas centrales de la ética normativa."

pasos:
  - "No todas responden exactamente la misma pregunta de la misma manera, aunque compartan el mismo objetivo general (evaluar qué es correcto)."

explicacion: |
  Verdadero: la diversidad de corrientes surge justamente de dar
  distintas respuestas a las mismas preguntas fundamentales.
```

### 17 — Ética como rama independiente de la lógica

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica", "logica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética es una rama distinta de la lógica: depende de `../logica-proposicional/` como base formal general del mapa, pero estudia una pregunta distinta (qué es correcto), no la validez de razonamientos."

pasos:
  - "Ver `../dependencias.md`: por eso cuelga de `FI1` como hermana de las otras ramas clásicas, no como continuación de la cadena de razonamiento."

explicacion: |
  Verdadero: cada rama clásica de Filosofía tiene su propio objeto de
  estudio, aunque compartan el mismo punto de partida lógico en el
  mapa.
```

### 18 — Ordenar el proceso para analizar un caso con ética normativa

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_como_rama_propia", "metodo"]

enunciado: "Ordená los pasos para analizar una acción usando el marco de la ética normativa."
tipo: ordenar
opciones_explicitas:
  - "Identificar la acción concreta a evaluar"
  - "Determinar cuál de las tres preguntas centrales aplica mejor al caso (consecuencias, carácter, o acuerdo social)"
  - "Aplicar el criterio correspondiente a esa pregunta"
  - "Concluir si la acción sería correcta o incorrecta según ese criterio"
respuesta_orden: ["Identificar la acción concreta a evaluar", "Determinar cuál de las tres preguntas centrales aplica mejor al caso (consecuencias, carácter, o acuerdo social)", "Aplicar el criterio correspondiente a esa pregunta", "Concluir si la acción sería correcta o incorrecta según ese criterio"]
explicacion: |
  El análisis va de identificar la acción concreta a elegir el marco
  de las tres preguntas centrales para evaluarla.
```

### 19 — Ética como rama propia cierra un hueco del MAPA

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_como_rama_propia", "contexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes del agregado v2.4 del MAPA, Filosofía sólo tenía nodos de lógica (`FI1`/`FI2`), sin ningún nodo dedicado específicamente a ética como rama propia."

pasos:
  - "Este tema cierra esa brecha, junto con metafísica y estética."

explicacion: |
  Verdadero: es el contexto histórico de por qué este nodo se agregó
  al mapa en esa versión.
```

### 20 — Aplicación: distinguir juicio moral de dato empírico

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_como_rama_propia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distinguir ética descriptiva de normativa es útil para no confundir \"así se hacen las cosas habitualmente\" con \"así deberían hacerse las cosas\", dos afirmaciones muy distintas."

pasos:
  - "Es un error común confundir lo habitual (descriptivo) con lo correcto (normativo)."

explicacion: |
  Verdadero: es la aplicación práctica más directa de esta distinción
  fuera del ámbito puramente filosófico.
```
