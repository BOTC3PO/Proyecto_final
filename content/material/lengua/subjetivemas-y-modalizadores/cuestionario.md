# Lengua — Subjetivemas y modalizadores (cuestionario, 22 preguntas VBLang)

> Tema: `lengua/subjetivemas-y-modalizadores`. Ver `teoria.md` en esta misma carpeta. Escrito a mano (Claude), cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "manifiestan la presencia del hablante y sus valoraciones"
tipo: mc
opciones_explicitas: ["manifiestan la presencia del hablante y sus valoraciones", "sólo aparecen en textos científicos objetivos", "reemplazan siempre a la primera persona"]

enunciado: "Los subjetivemas son elementos lingüísticos que..."

explicacion: |
  Muestran cómo se siente o qué valora el hablante sobre lo que dice,
  haciendo visible que el discurso no es neutro.
```

### 2 — pregunta 2

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "el grado de certeza, posibilidad o necesidad de lo enunciado"
tipo: mc
opciones_explicitas: ["el grado de certeza, posibilidad o necesidad de lo enunciado", "quién es el autor del texto", "el tema principal del párrafo"]

enunciado: "Los modalizadores indican..."

explicacion: |
  A diferencia de los subjetivemas (que muestran valoración emocional),
  los modalizadores matizan cuán segura es la afirmación.
```

### 3 — pregunta 3

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["clasificacion subjetivema"]

variables:
  ejemplo: uno_de(["increíble", "lamentablemente", "afortunadamente"])

respuesta: "subjetivema"
tipo: mc
opciones_explicitas: ["subjetivema", "modalizador dubitativo", "modalizador afirmativo"]

enunciado: "\"{ejemplo}\" es un ejemplo de..."

explicacion: |
  Son adjetivos o adverbios evaluativos que expresan la valoración
  emocional del hablante, no el grado de certeza.
```

### 4 — pregunta 4

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["clasificacion modalizador"]

variables:
  ejemplo: uno_de(["quizás", "probablemente", "tal vez"])

respuesta: "modalizador hipotético o dubitativo"
tipo: mc
opciones_explicitas: ["subjetivema evaluativo", "modalizador hipotético o dubitativo", "modalizador afirmativo"]

enunciado: "\"{ejemplo}\" es un ejemplo de..."

explicacion: |
  Expresan duda o posibilidad sobre lo enunciado, distinto de un
  subjetivema que expresa valoración emocional.
```

### 5 — pregunta 5

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["clasificacion modalizador"]

variables:
  ejemplo: uno_de(["seguramente", "jamás"])

respuesta: "modalizador afirmativo o negativo"
tipo: mc
opciones_explicitas: ["modalizador afirmativo o negativo", "modalizador hipotético o dubitativo", "subjetivema"]

enunciado: "\"{ejemplo}\" es un ejemplo de..."

explicacion: |
  Confirman o niegan la verdad del enunciado, a diferencia de los
  modalizadores dubitativos que expresan duda.
```

### 6 — pregunta 6

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "avanzado"
  tags: ["funcion argumentativa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los modalizadores permiten al hablante protegerse de la refutación inmediata al no presentar su afirmación como una verdad absoluta."

explicacion: |
  Decir "quizás" o "probablemente" deja margen para no comprometerse
  totalmente con la afirmación.
```

### 7 — pregunta 7

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["caso"]

variables:
  n: uno_de([1, 1])

respuesta: "está siendo preciso y honesto con la incertidumbre"
tipo: mc
opciones_explicitas: ["está siendo preciso y honesto con la incertidumbre", "está mintiendo deliberadamente", "está siendo ambiguo sin ningún motivo"]

enunciado: "Si un experto dice \"es probable que llueva\", según la teoría..."

explicacion: |
  A diferencia de decir "va a llover" sin fundamento (presentar una
  hipótesis como hecho), el modalizador refleja honestamente el nivel
  de certeza real.
```

### 8 — pregunta 8

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "avanzado"
  tags: ["caso engañoso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Presentar una hipótesis como un hecho, sin usar ningún modalizador de incertidumbre, puede ser engañoso para quien escucha."

explicacion: |
  Decir "va a llover" como certeza absoluta, sin fundamento, oculta que
  en realidad es sólo una posibilidad.
```

### 9 — pregunta 9

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: "detectar sesgos emocionales o ideológicos del autor"
tipo: mc
opciones_explicitas: ["detectar sesgos emocionales o ideológicos del autor", "memorizar la biografía del autor", "contar la cantidad de palabras del texto"]

enunciado: "Identificar subjetivemas en un artículo de opinión permite principalmente..."

explicacion: |
  Ayuda a responder si el emisor busca manipular emocionalmente al
  lector para que acepte su idea.
```

### 10 — pregunta 10

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["caso titular"]

variables:
  n: uno_de([1, 1])

respuesta: "lamentablemente"
tipo: completar

enunciado: "En el titular \"Lamentablemente, el egoísmo de algunos bloqueó la ciudad\", la palabra que funciona como subjetivema explícito es ___."

respuestas_validas:
  - "lamentablemente"

explicacion: |
  Expresa desaprobación del hablante, mientras que "egoísmo" también
  carga de juicio moral la acción descrita.
```

### 11 — pregunta 11

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["caso neutro"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"El corte de ruta paralizó el tránsito en la 9 de Julio\" es un enunciado con pocos modalizadores y subjetivemas, orientado a informar un hecho."

explicacion: |
  Es el ejemplo de titular descriptivo de la teoría, en contraste con
  el titular que sí usa subjetivemas para juzgar la situación.
```

### 12 — pregunta 12

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["caso redes sociales"]

variables:
  n: uno_de([1, 1])

respuesta: "increíble"
tipo: completar

enunciado: "En \"¡Qué golazo! ¡La selección jugó increíble!\", la palabra que expresa euforia como subjetivema es ___."

respuestas_validas:
  - "increíble"

explicacion: |
  Es un adjetivo evaluativo que muestra la emoción del hablante, no un
  dato objetivo sobre el partido.
```

### 13 — pregunta 13

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "avanzado"
  tags: ["caso redes sociales"]

variables:
  n: uno_de([1, 1])

respuesta: "podría"
tipo: mc
opciones_explicitas: ["podría", "ganó", "aplastó"]

enunciado: "En \"Creo que la selección podría mejorar en la defensa\", el modalizador dubitativo usado es..."

explicacion: |
  "Podría" suaviza la crítica, mostrando que el hablante no presenta su
  opinión como una verdad absoluta.
```

### 14 — pregunta 14

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["expresion de subjetividad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La expresión \"Creo que...\" funciona como una marca de subjetividad que muestra respeto por la posibilidad de equivocarse."

explicacion: |
  Antepone una postura personal en vez de presentar la afirmación como
  un hecho universal e indiscutible.
```

### 15 — pregunta 15

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["produccion propia"]

variables:
  n: uno_de([1, 1])

respuesta: "menos subjetivemas y más modalizadores de certeza basados en datos"
tipo: mc
opciones_explicitas: ["menos subjetivemas y más modalizadores de certeza basados en datos", "sólo subjetivemas, sin ningún modalizador", "ninguno de los dos recursos"]

enunciado: "Para escribir un texto más objetivo, conviene usar..."

explicacion: |
  Reducir la carga emocional (subjetivemas) y apoyar las afirmaciones en
  datos con modalizadores de certeza da un tono más objetivo.
```

### 16 — pregunta 16

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["produccion propia"]

variables:
  n: uno_de([1, 1])

respuesta: "subjetivemas para conectar con la audiencia"
tipo: mc
opciones_explicitas: ["subjetivemas para conectar con la audiencia", "sólo cifras estadísticas sin ningún comentario", "modalizadores dubitativos únicamente"]

enunciado: "Para escribir un texto más persuasivo y empático, conviene usar..."

explicacion: |
  Los subjetivemas ayudan a generar cercanía emocional con quien lee o
  escucha.
```

### 17 — pregunta 17

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["ejemplos subjetivema"]

variables:
  tipo_palabra: uno_de(["adjetivos evaluativos", "adverbios de modo", "expresiones idiomáticas con carga emocional"])

respuesta: verdadero
tipo: vf

enunciado: "\"{tipo_palabra}\" es un tipo de recurso mencionado en la teoría que puede funcionar como subjetivema."

explicacion: |
  Palabras como "increíble" (adjetivo), "lamentablemente" (adverbio) o
  expresiones cargadas emocionalmente son todas subjetivemas posibles.
```

### 18 — pregunta 18

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "avanzado"
  tags: ["ambitos de uso"]

variables:
  ambito: uno_de(["el periodismo", "la literatura", "los debates políticos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ambito}\" es uno de los ámbitos mencionados en la teoría donde se usan subjetivemas y modalizadores para expresar postura."

explicacion: |
  En estos ámbitos rara vez la comunicación es puramente objetiva, como
  sí lo sería un manual de instrucciones.
```

### 19 — pregunta 19

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["ejemplo base"]

variables:
  n: uno_de([1, 1])

respuesta: "un juicio de valor sobre ese hecho"
tipo: mc
opciones_explicitas: ["un juicio de valor sobre ese hecho", "sólo el dato de la hora exacta", "ninguna información adicional"]

enunciado: "Al decir \"Es una pena que hayas llegado tarde\", además de informar la hora de llegada, el hablante emite..."

explicacion: |
  "Es una pena" no es un dato neutro: es una valoración subjetiva sobre
  el hecho de llegar tarde.
```

### 20 — pregunta 20

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "avanzado"
  tags: ["confusion comun"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Subjetivemas y modalizadores son exactamente el mismo recurso lingüístico con distinto nombre."

explicacion: |
  Aunque a veces se confunden, cumplen funciones distintas: uno muestra
  valoración emocional, el otro grado de certeza.
```

### 21 — pregunta 21

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "intermedio"
  tags: ["pensamiento critico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distinguir subjetivemas de modalizadores es fundamental para desarrollar pensamiento crítico y evaluar la solidez de un argumento."

explicacion: |
  Permite separar lo que es valoración emocional de lo que es
  honestidad sobre el grado de certeza de una afirmación.
```

### 22 — pregunta 22

```
metadata:
  materia: "lengua"
  tema: "subjetivemas_y_modalizadores"
  nivel: "basico"
  tags: ["primera persona"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un subjetivema requiere obligatoriamente el uso explícito de la primera persona del singular (\"yo\")."

explicacion: |
  Según la teoría, no se trata solo de usar "yo": basta con mostrar cómo
  se siente o qué valora el hablante, aun sin decir "yo" explícitamente.
```

