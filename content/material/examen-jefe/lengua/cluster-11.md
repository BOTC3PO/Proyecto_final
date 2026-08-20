# Examen jefe — Maestro de Sintaxis y Subordinadas

> Logro #94. Dominaste los sintagmas, la subjetivación y las oraciones subordinadas adjetivas y adverbiales. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **119 preguntas totales** en 5/5 secciones.

---

## Sección: sintagmas-nominal-adjetivo-preposicional-adverbial-verbal (21 preguntas)

```
metadata:
  materia: "lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["verdad_falsa"]

variables:
  sustantivo: uno_de(["gato"])
  adjetivo: uno_de(["negro"])

respuesta: falso
tipo: vf

enunciado: "En el sintagma nominal 'el gato negro', la palabra 'negro' es el núcleo del sintagma."

explicacion: |
  Falso. El núcleo del sintagma nominal es el sustantivo ('gato'). 'Negro' es un adjetivo que lo modifica.
```

```
metadata:
  materia: "lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["verdad_falsa"]

variables:
  adverbio1: uno_de(["casi"])
  adverbio2: uno_de(["nunca"])

respuesta: verdadero
tipo: vf

enunciado: "En el sintagma adverbial 'casi nunca', la palabra 'nunca' es el núcleo."

explicacion: |
  Verdadero. El núcleo es el adverbio principal, mientras que el otro actúa como modificador de grado.
```

```
metadata:
  materia: "lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["verdad_falsa"]

respuesta: verdadero
tipo: vf

enunciado: "Un sintagma es un conjunto de palabras que funcionan como una unidad girando en torno a un núcleo."

explicacion: |
  Verdadero. Esta es la definición fundamental de un sintagma en gramática.
```

```
metadata:
  materia: "lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["verdad_falsa"]

variables:
  preposicion: uno_de(["sobre"])
  sustantivo: uno_de(["la mesa"])

respuesta: falso
tipo: vf

enunciado: "En el sintagma preposicional 'sobre la mesa', la preposición 'sobre' es el núcleo del sintagma."

explicacion: |
  Falso. La preposición introduce el término, pero el núcleo del sintagma preposicional completo suele considerarse el sustantivo del término que sigue, o se analiza la relación. En el contexto de clasificación por núcleo, la preposición no es el núcleo nominal/adjetival/adverbial.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_adjetival", "clasificacion"]

variables:
  adverbio: uno_de(["muy", "extremadamente", "tan", "bastante"])
  adjetivo: uno_de(["feliz", "triste", "rápido", "lento"])

respuesta: "sintagma_adjetival"
tipo: input

enunciado: "Clasifica el siguiente sintagma: '{adverbio} {adjetivo}'. ¿Qué tipo de sintagma es?"

explicacion: |
  Cuando el núcleo es un adjetivo (modificado por un adverbio), se trata de un sintagma adjetival.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_adverbial", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El sintagma adverbial tiene como núcleo un adverbio y modifica al verbo, al adjetivo u otro adverbio."

explicacion: |
  Correcto. El núcleo es un adverbio (ej. 'ayer', 'aquí', 'muy') y su función es precisar circunstancias.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_verbal", "nucleo"]

variables:
  auxiliar: uno_de(["ha", "ha estado", "está"])
  participio: uno_de(["comido", "dormido", "corrido", "leído"])

respuesta: "verbo"
tipo: completar

enunciado: "En el sintagma '{auxiliar} {participio}', la palabra núcleo es un ___."
respuestas_validas:
  - "verbo"
  - "nucleo"

explicacion: |
  El sintagma verbal tiene como núcleo un verbo conjugado (o forma verbal) que expresa la acción o estado.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_adjetival", "sintagma_adverbial", "diferenciacion"]

variables:
  adverbio: uno_de(["muy", "extremadamente", "tan"])
  adjetivo: uno_de(["feliz", "triste", "contento", "enojado"])

respuesta: "sintagma_adjetival"
tipo: input

enunciado: "Clasifica el sintagma: '{adverbio} {adjetivo}'."

explicacion: |
  Aunque contiene un adverbio, el núcleo es el adjetivo '{adjetivo}', por lo que es un sintagma adjetival.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_preposicional", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "En un sintagma preposicional, la preposición es siempre el núcleo gramatical."

explicacion: |
  Falso. La preposición es el nexo o cabeza funcional, pero el término que la sigue (sustantivo, pronombre, etc.) es el núcleo semántico del sintagma.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_preposicional", "estructura"]

variables:
  preposicion: uno_de(["de", "en", "con", "por"])
  sustantivo: uno_de(["la casa", "el libro", "su amigo", "mi madre"])

respuesta: "preposicion"
tipo: completar

enunciado: "El sintagma '{preposicion} {sustantivo}' comienza con una ___."
respuestas_validas:
  - "preposicion"
  - "preposición"

explicacion: |
  Todo sintagma preposicional está encabezado obligatoriamente por una preposición.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_adverbial", "clasificacion"]

variables:
  adverbio: uno_de(["ayer", "hoy", "mañana", "nunca"])

respuesta: "sintagma_adverbial"
tipo: input

enunciado: "Clasifica el sintagma: '{adverbio}'."

explicacion: |
  Es un sintagma adverbial porque su único elemento (y por tanto su núcleo) es un adverbio.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_verbal", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "El núcleo del sintagma verbal es un verbo conjugado."

explicacion: |
  Correcto. El verbo es el corazón del sintagma verbal y determina la estructura de la oración.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_nominal", "categoria_gramatical"]

respuesta: "sustantivo"
tipo: completar

enunciado: "El núcleo del sintagma nominal es un ___ o un pronombre."
respuestas_validas:
  - "sustantivo"
  - "sustantio"

explicacion: |
  El sintagma nominal se define por tener como núcleo un sustantivo o un pronombre.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_nominal", "sintagma_adverbial", "diferenciacion"]

variables:
  determinante: uno_de(["el", "la", "los", "las"])
  sustantivo: uno_de(["perro", "gato", "casa", "árbol"])
  adverbio: uno_de(["ayer", "hoy", "mañana", "nunca"])

respuesta: "sintagma_nominal"
tipo: input

enunciado: "Clasifica el sintagma: '{determinante} {sustantivo}'."

explicacion: |
  Es un sintagma nominal porque su núcleo es un sustantivo.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_verbal", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El sintagma verbal expresa una acción o un estado y su núcleo es un verbo."

explicacion: |
  Correcto. Es el corazón de la oración.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_adjetival", "nucleo"]

respuesta: "adjetivo"
tipo: completar

enunciado: "El núcleo del sintagma adjetival es un ___."
respuestas_validas:
  - "adjetivo"
  - "adjetivo"

explicacion: |
  El sintagma adjetival gira en torno a un adjetivo.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_preposicional", "clasificacion"]

variables:
  preposicion: uno_de(["en", "sobre", "bajo", "con"])
  sustantivo: uno_de(["la mesa", "el suelo", "su cabeza", "su mente"])

respuesta: "sintagma_preposicional"
tipo: input

enunciado: "Clasifica el sintagma: '{preposicion} {sustantivo}'."

explicacion: |
  Es un sintagma preposicional porque está encabezado por una preposición.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_adjetival", "nucleo"]

respuesta: verdadero
tipo: vf

enunciado: "El núcleo del sintagma adjetival es un adjetivo."

explicacion: |
  Correcto. El adjetivo es la palabra más importante del grupo.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "basico"
  tags: ["sintagma_adverbial", "estructura"]

respuesta: "adverbio"
tipo: completar

enunciado: "El núcleo del sintagma adverbial es un ___."
respuestas_validas:
  - "adverbio"
  - "adverbio"

explicacion: |
  El sintagma adverbial tiene como núcleo un adverbio.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_verbal", "nucleo"]

variables:
  auxiliar: uno_de(["ha", "está", "va"])
  participio: uno_de(["comido", "durmiendo", "yendo", "saliendo"])

respuesta: "{auxiliar} {participio}"
tipo: input

enunciado: "En el sintagma '{auxiliar} {participio}', ¿cuál es el núcleo (escribe el verbo completo)?"

explicacion: |
  El núcleo es la forma verbal completa '{auxiliar} {participio}'.
```

```
metadata:
  materia: "Lengua"
  tema: "sintagmas_nominal_adjetivo_preposicional_adverbial_verbal"
  nivel: "intermedio"
  tags: ["sintagma_adverbial", "sintagma_preposicional", "diferenciacion"]

variables:
  adverbio: uno_de(["ayer", "hoy", "mañana", "nunca"])
  preposicion: uno_de(["en", "sobre", "bajo", "con"])
  sustantivo: uno_de(["la casa", "el libro", "su amigo", "mi madre"])

respuesta: "sintagma_adverbial"
tipo: input

enunciado: "Clasifica el sintagma: '{adverbio}'."

explicacion: |
  Es un sintagma adverbial porque su núcleo es un adverbio.
```

## Sección: subjetivemas-y-modalizadores (22 preguntas)

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

## Sección: subordinada-adjetiva-o-de-relativo (24 preguntas)

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["sintaxis", "funcion"]

variables:
  funcion: uno_de(["adjetivo", "sustantivo", "verbo", "adverbio"])

respuesta: "adjetivo"
tipo: input

enunciado: "Las oraciones subordinadas adjetivas cumplen la función sintáctica de un {funcion} dentro de la oración principal."

explicacion: |
  Aunque están formadas por un sujeto y un verbo, su función es modificar al sustantivo (antecedente), actuando como un adjetivo.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "concordancia"]

variables:
  genero_antecedente: uno_de(["masculino", "femenino"])
  numero_antecedente: uno_de(["singular", "plural"])
  genero_pertenencia: uno_de(["masculino", "femenino"])
  numero_pertenencia: uno_de(["singular", "plural"])

respuesta: "cuyo"
tipo: input

enunciado: "Si el antecedente es {genero_antecedente} {numero_antecedente} y posee una {genero_pertenencia} {numero_pertenencia}, ¿qué pronombre relativo se usa para indicar posesión?"

explicacion: |
  Se usa 'cuyo' (o sus formas 'cuya', 'cuyos', 'cuyas') para expresar posesión. Concuerda en género y número con la cosa poseída (la pertenencia), no con el antecedente.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["quien", "personas"]

variables:
  antecedente_persona: uno_de(["el profesor", "mi hermana", "quien", "alguien"])
  antecedente_no_persona: uno_de(["el libro", "la mesa", "el gato", "el tiempo"])

respuesta: "quien"
tipo: input

enunciado: "¿Qué pronombre relativo se utiliza comúnmente para referirse a personas, a menudo precedido de preposición?"

explicacion: |
  'Quien' (o 'quienes') se usa para personas. 'Que' es más genérico y puede usarse para cosas o personas, pero 'quien' es específico para personas en contextos formales o con preposición.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "mc"]

variables:
  oracion: uno_de(["El hombre que llegó es mi padre", "Mi padre, que llegó ayer, está cansado", "El libro que leo es interesante"])
    # Nota: Para simplificar la lógica de MC, asumimos que la primera opción es especificativa y la segunda explicativa en la generación real, pero aquí generamos distractores.
    # Mejor: Generamos una oración específica en el enunciado.

respuesta: "especificativa"
tipo: mc
opciones_explicitas: ["especificativa", "explicativa", "sustantiva", "adverbial"]

enunciado: "En la oración 'Los estudiantes que estudiaron aprobaron', la subordinada adjetiva es:"

explicacion: |
  Es especificativa porque restringe el grupo de 'estudiantes' a aquellos que estudiaron. Sin ella, no sabríamos qué estudiantes aprobaron.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "mc"]

respuesta: "posesiva"
tipo: mc
opciones_explicitas: ["posesiva", "temporal", "local", "causal"]

enunciado: "El pronombre relativo 'cuyo' introduce una subordinada adjetiva con función:"

explicacion: |
  'Cuyo' expresa posesión o pertenencia. Equivale a 'cuya', 'cuyos', 'cuyas'.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombres", "cosas"]

variables:
  cosa: uno_de(["el coche", "la idea", "el proyecto", "el problema"])

respuesta: "que"
tipo: input

enunciado: "Para referirse a '{cosa}' en una subordinada adjetiva, ¿cuál es el pronombre relativo más común y versátil?"

explicacion: |
  'Que' es el pronombre relativo más frecuente y puede referirse tanto a personas como a cosas.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["cuyo", "concordancia", "input"]

variables:
  posesor: uno_de(["el hombre", "la mujer"])
  poseido: uno_de(["los hijos", "la casa"])

respuesta: "cuyos"
tipo: input

enunciado: "En 'El hombre {posesor} tiene {poseido}', si usamos 'cuyo' para unir las frases, ¿cómo se escribe el relativo si 'poseido' es plural?"

explicacion: |
  'Cuyos' concuerda en género y número con el poseído ('los hijos' -> masculino plural).
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombres", "mc"]

respuesta: "cuando"
tipo: mc
opciones_explicitas: ["que", "cual", "donde", "cuando"]

enunciado: "¿Cuál de estos NO es un pronombre relativo que introduce una subordinada adjetiva típica?"

explicacion: |
  'Cuando' es un adverbio relativo de tiempo. Aunque puede introducir subordinadas, 'que', 'cual' y 'donde' son los pronombres relativos clásicos (de persona/cosa/lugar). 'Cuando' a menudo introduce oraciones adverbiales temporales.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "mc"]

respuesta: "sustantiva"
tipo: mc
opciones_explicitas: ["sustantiva", "adjetiva", "adverbial", "causal"]

enunciado: "En 'Quiero que vengas', la subordinada es:"

explicacion: |
  Es sustantiva porque funciona como objeto directo del verbo 'quiero'. No modifica a un sustantivo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["antecedente", "identificacion"]

variables:
  antecedente: uno_de(["libro", "casa", "amigo", "perro"])
  verbo: uno_de(["leí", "construí", "conocí", "adopté"])
  adjetivo: uno_de(["nuevo", "grande", "viejo", "pequeño"])

respuesta: "{antecedente}"
tipo: input

enunciado: "En la oración 'El {antecedente} que {verbo} es {adjetivo}', ¿cuál es el antecedente de la subordinada adjetiva?"

explicacion: |
  El antecedente es el sustantivo al que modifica la subordinada. En este caso, "que {verbo}" describe al "{antecedente}".
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion"]

variables:
  sustantivo: uno_de(["profesor", "colega", "vecino", "jefe"])
  accion: uno_de(["enseña", "trabaja", "vive", "manda"])

respuesta: "complemento del nombre"
tipo: input

enunciado: "La oración subordinada adjetiva 'que {accion}' en 'El {sustantivo} que {accion} es amable' cumple la función de:"

explicacion: |
  Las subordinadas adjetivas funcionan como un adjetivo, es decir, como complemento del nombre o sustantivo antecedente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "especificativa"]

variables:
  sustantivo: uno_de(["alumnos", "estudiantes"])
  condicion: uno_de(["estudian", "trabajan", "juegan", "duermen"])

respuesta: "especificativa"
tipo: completar

enunciado: "En 'Los {sustantivo} que {condicion} pasan el año', la subordinada es __________."

explicacion: |
  Es especificativa porque delimita qué {sustantivo} específicos pasan el año.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["sintaxis", "funcion"]

respuesta: "adjetivo"
tipo: completar

enunciado: "La subordinada adjetiva funciona sintácticamente como un __________."

explicacion: |
  Funciona como un adjetivo, modificando al sustantivo antecedente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["terminologia", "antecedente"]

respuesta: "antecedente"
tipo: completar

enunciado: "El sustantivo que es modificado por la subordinada adjetiva se llama __________."

explicacion: |
  Se llama antecedente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["clasificacion", "semantica"]

variables:
  sujeto: uno_de(["Argentina", "Madrid", "Tokio", "Paris", "Roma"])
  dato: uno_de(["es capital", "tiene museos", "es antigua", "es grande", "es famosa"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sujeto}, que {dato}, es popular', la subordinada es explicativa porque su información es complementaria y no esencial para identificar al sujeto."

explicacion: |
  Verdadero. '{sujeto}' es un nombre propio que ya identifica inequívocamente al referente. La cláusula 'que {dato}' aporta información extra, no restrictiva, por lo que es explicativa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "basico"
  tags: ["pronombre", "persona"]

variables:
  persona: uno_de(["el amigo", "la vecina", "el colega", "la hermana", "el novio"])
  accion: uno_de(["llamó", "escribió", "visitó", "ayudó", "conoció"])

respuesta: uno_de(["quien", "quienes"])
tipo: input

enunciado: "Si el antecedente es 'la persona', ¿qué pronombre relativo se usa comúnmente para referirse a ella en registro formal: 'que' o 'quien'?"

explicacion: |
  'Quien' (o 'quienes' si es plural) se usa frecuentemente para referentes personificados, especialmente en contextos más formales o después de preposiciones. Aquí, 'quien' es la opción válida para singular.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["identificacion", "segmento"]

variables:
  antecedente: uno_de(["el coche", "el avión", "el tren", "el barco", "el auto"])
  caracteristica: uno_de(["que viaja rápido", "que es nuevo", "que es rojo", "que es viejo", "que es caro"])

respuesta: "{caracteristica}"
tipo: input

enunciado: "En 'El {antecedente} {caracteristica} es mío', ¿cuál es el segmento que forma la subordinada adjetiva?"

explicacion: |
  La subordinada adjetiva comienza con el pronombre relativo y termina al cerrar la idea. En este caso, es '{caracteristica}'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["prueba", "especificativa"]

variables:
  sujeto: uno_de(["los libros", "los estudiantes", "los días", "los meses", "los años"])
  condicion: uno_de(["que llueve", "que estudian", "que amanecen", "que terminan", "que empiezan"])

respuesta: verdadero
tipo: vf

enunciado: "Si quitamos la cláusula '{condicion}' de 'Los {sujeto} {condicion} son raros', la oración pierde su sentido específico de referencia. ¿Es esto característico de una especificativa?"

explicacion: |
  Verdadero. Las especificativas son esenciales para identificar al antecedente. Sin ellas, no sabemos a qué '{sujeto}' nos referimos.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["prueba", "explicativa"]

variables:
  sujeto: uno_de(["Juan", "María", "Carlos", "Ana", "Luis"])
  dato: uno_de(["es alto", "es inteligente", "es amable", "es joven", "es rico"])

respuesta: verdadero
tipo: vf

enunciado: "Si quitamos la cláusula '{dato}' de 'Juan, que {dato}, viene mañana', la oración sigue teniendo sentido completo. ¿Es esto característico de una explicativa?"

explicacion: |
  Verdadero. Las explicativas aportan información extra. El sujeto 'Juan' ya está identificado, por lo que la cláusula es prescindible.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["error", "puntuacion"]

variables:
  sujeto: uno_de(["Mi madre", "El presidente", "La reina", "El director", "El alcalde"])
  dato: uno_de(["es anciana", "es popular", "es querida", "es famosa", "es anciana"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Mi madre que {dato} vive aquí', falta una coma antes de 'que' si se quiere dar un dato adicional sobre 'Mi madre'. ¿Es esto correcto?"

explicacion: |
  Verdadero. Si 'Mi madre' es único y el dato es adicional (explicativo), debe haber comas: 'Mi madre, que {dato}, vive aquí'. Sin comas, implicaría que hay varias madres y solo la que es '{dato}' vive ahí.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["error", "puntuacion"]

variables:
  sujeto: uno_de(["los libros", "los estudiantes", "los días", "los meses", "los años"])
  condicion: uno_de(["que llueve", "que estudian", "que amanecen", "que terminan", "que empiezan"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Los {sujeto}, {condicion}, son raros', si la intención es restringir el grupo (solo esos específicos), la coma es incorrecta. ¿Es esto cierto?"

explicacion: |
  Verdadero. Si la cláusula es especificativa (restringe el significado), NO debe llevar comas. Las comas la convertirían en explicativa, cambiando el sentido.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["elision", "pronombre"]

variables:
  antecedente: uno_de(["el libro", "la casa", "el día", "el momento", "el lugar"])
  accion: uno_de(["leí", "construí", "esperé", "visité", "busqué"])

respuesta: verdadero
tipo: vf

enunciado: "En 'El {antecedente} {accion} es bueno', se puede omitir el pronombre relativo 'que' en español coloquial: 'El {antecedente} {accion} es bueno'. ¿Es esto gramaticalmente aceptable en registro informal?"

explicacion: |
  Verdadero. En español, el pronombre relativo 'que' puede omitirse cuando funciona como complemento directo de la subordinada, aunque es más común en el habla cotidiana.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "intermedio"
  tags: ["pronombre", "comparacion"]

variables:
  antecedente: uno_de(["la idea", "el problema", "la solución", "el caso", "el tema"])

respuesta: uno_de(["cual", "que"])
tipo: input

enunciado: "Después de una coma, si queremos un tono más formal y evitar ambigüedad, es preferible usar 'que' o 'cual' para referirse a '{antecedente}'?"

explicacion: |
  'Cual' (o 'el cual') se prefiere después de comas o preposiciones para mayor claridad y formalidad, especialmente cuando el antecedente es una idea abstracta o para evitar confusión con el 'que' relativo estándar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adjetiva_o_de_relativo"
  nivel: "avanzado"
  tags: ["error", "concordancia"]

variables:
  poseedor: uno_de(["el hombre", "la mujer", "el niño", "la niña", "el padre"])
  poseido: uno_de(["hija", "hijo", "madre", "padre", "hermano"])
  forma_incorrecta: uno_de(["cuyas", "cuyos", "cuya", "cuyo"])

respuesta: verdadero
tipo: vf

enunciado: "En 'La {poseedor}, {forma_incorrecta} {poseido} es joven', si '{poseido}' es femenino singular, la forma '{forma_incorrecta}' es incorrecta. ¿Es esto cierto?"

explicacion: |
  Verdadero. Si '{poseido}' es femenino singular, debe ser 'cuya'. '{forma_incorrecta}' no concuerda.
```

## Sección: subordinada-adverbial-de-lugar (25 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["teoria", "sintaxis"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "La subordinada adverbial de lugar es una oración independiente que puede sostenerse por sí misma sin el verbo principal."

explicacion: |
  Falso. La subordinada adverbial de lugar depende sintácticamente de la oración principal para completar su significado espacial. No es una oración independiente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "identificacion"]

variables:
  prueba: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "Es un truco útil para identificar una subordinada de lugar sustituirla por el adverbio 'allí' y verificar si la oración mantiene su sentido lógico."

explicacion: |
  Verdadero. Si la oración principal sigue teniendo sentido al reemplazar la subordinada por 'allí', es muy probable que se trate de una subordinada adverbial de lugar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["teoria", "dependencia"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "La subordinada adverbial de lugar puede interpretarse completamente sin referencia a la oración principal."

explicacion: |
  Falso. Su significado espacial solo se completa en relación con el verbo de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "recorrido"]

variables:
  recorrido: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El nexo 'por donde' puede introducir una subordinada adverbial de lugar indicando el trayecto o recorrido."

explicacion: |
  Verdadero. 'Por donde' indica el camino o el lugar por el cual se pasa, funcionando como complemento de lugar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "variedad"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "Solo existe un nexo posible para introducir subordinadas adverbiales de lugar: 'donde'."

explicacion: |
  Falso. Existen varios nexos como 'dondequiera que', 'a donde', 'desde donde', 'por donde', etc.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "avanzado"
  tags: ["estilo", "ventaja"]

variables:
  ventaja: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El uso de subordinadas de lugar ayuda a evitar la repetición de nombres propios o lugares en el texto."

explicacion: |
  Verdadero. Permite referirse a un lugar ya mencionado o implícito mediante una oración subordinada, enriqueciendo el estilo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["nexos", "trayecto"]

variables:
  trayecto: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "El nexo 'por donde' puede indicar el trayecto o el camino recorrido por la acción."

explicacion: |
  Verdadero. 'Por donde' especifica el lugar o camino por el cual se realiza la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["definicion", "verdadero_falso"]

variables:
  afirmacion: uno_de(["verdadero", "falso"])

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una subordinada adverbial de lugar siempre funciona como sujeto de la oración principal."

explicacion: |
  Falso. Las subordinadas adverbiales de lugar funcionan como Complemento Circunstancial de Lugar, modificando al verbo de la oración principal, no como sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "sustitucion"]

variables:
  oracion_principal: uno_de(["Voy al parque", "Esperé en la plaza", "Corrió hacia el bosque"])
  oracion_sub: uno_de(["donde hay árboles", "donde nos vimos", "donde hace frío"])
  resultado_valido: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En la oración '{oracion_principal} {oracion_sub}', la parte subrayada puede sustituirse por el adverbio 'allí' sin perder el sentido espacial."

explicacion: |
  Verdadero. La prueba de sustitución por 'allí' es un método válido para identificar subordinadas adverbiales de lugar, ya que 'allí' es el pronombre adverbial de lugar equivalente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["funcion", "sintaxis"]

variables:
  tipo_funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Lugar", "Atributo", "Complemento Agente"])

respuesta: "Complemento Circunstancial de Lugar"
tipo: completar

enunciado: "La subordinada adverbial de lugar funciona sintácticamente como un {tipo_funcion}."

explicacion: |
  Las subordinadas adverbiales de lugar desempeñan la función de Complemento Circunstancial de Lugar (CCL) respecto al verbo de la oración principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["diferenciacion", "nexos"]

variables:
  nexo_lugar: uno_de(["donde", "a donde"])
  nexo_tiempo: uno_de(["cuando", "mientras"])
  es_lugar: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: El nexo '{nexo_lugar}' introduce una subordinada de lugar, mientras que '{nexo_tiempo}' introduce una de tiempo."

explicacion: |
  Verdadero. Los nexos como 'donde' y 'a donde' indican espacio, mientras que 'cuando' o 'mientras' indican tiempo. Confundirlos es un error común.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["dependencia", "verdadero_falso"]

variables:
  afirmacion: falso

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Una subordinada adverbial de lugar puede funcionar como una oración independiente y completa por sí misma."

explicacion: |
  Falso. Por definición, una oración subordinada depende sintáctica y semánticamente de la oración principal. No es independiente.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["pregunta", "funcion"]

variables:
  pregunta: uno_de(["¿Dónde?", "¿Cuándo?", "¿Por qué?", "¿Cómo?"])

respuesta: "¿Dónde?"
tipo: completar

enunciado: "La subordinada adverbial de lugar responde principalmente a la pregunta: '{pregunta}'."

explicacion: |
  Las subordinadas de lugar responden a '¿Dónde?', '¿Hacia dónde?' o '¿Desde dónde?'. '¿Cuándo?' es temporal, '¿Por qué?' causal, '¿Cómo?' modal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["posicion", "verdadero_falso"]

variables:
  posicion: uno_de(["solo al final", "solo al inicio", "puede ir al inicio o al final"])

respuesta: "puede ir al inicio o al final"
tipo: completar

enunciado: "La subordinada adverbial de lugar '{posicion}' de la oración principal."

explicacion: |
  Las subordinadas adverbiales de lugar pueden aparecer tanto al inicio como al final de la oración principal, aunque es más común al final.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["origen", "nexos"]

variables:
  origen: uno_de(["desde donde", "a donde", "donde"])
  contexto: "Te llamaré {origen} estoy."

respuesta: "desde donde"
tipo: completar

enunciado: "Completa la oración '{contexto}' con el nexo que indica origen o punto de partida."

explicacion: |
  'Desde donde' indica el punto de origen de la acción. 'A donde' indica destino, 'donde' ubicación estática.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["prueba", "sustitucion"]

variables:
  afirmacion: falso

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La prueba de sustitución por 'aquí' es igualmente válida que por 'allí' para identificar subordinadas de lugar."

explicacion: |
  Falso. 'Aquí' indica cercanía, 'allí' indica lejanía o lugar genérico. La prueba estándar usa 'allí' como pronombre adverbial de lugar neutro o de referencia lejana, que es más común en la teoría sintáctica para generalizar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["destino", "nexos"]

variables:
  destino: uno_de(["a donde", "desde donde", "donde"])
  contexto: "Iré {destino} me llames."

respuesta: "a donde"
tipo: completar

enunciado: "Completa la oración '{contexto}' con el nexo que indica destino o dirección hacia un lugar."

explicacion: |
  'A donde' indica el punto de llegada o destino. 'Desde donde' indica origen, 'donde' ubicación.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "avanzado"
  tags: ["produccion", "nexos"]

variables:
  lugar: uno_de(["la cima", "el fondo", "el centro"])
  accion: uno_de(["se ve", "se escucha", "se siente"])

respuesta: "allí donde"
tipo: completar

enunciado: "Completa con el nexo formal: '{lugar} {accion}'."

explicacion: |
  'Allí donde' es un nexo formal que introduce la idea de lugar, equivalente a 'en el lugar en que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["funcion", "sintaxis"]

variables:
  funcion: uno_de(["Complemento Directo", "Complemento Circunstancial de Lugar", "Atributo", "Complemento Agente"])

respuesta: "Complemento Circunstancial de Lugar"
tipo: completar

enunciado: "La subordinada adverbial de lugar funciona como un {funcion}."

explicacion: |
  Las subordinadas adverbiales de lugar desempeñan la función de Complemento Circunstancial de Lugar (CCL).
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["dependencia", "sintaxis"]

variables:
  dependencia: verdadero

respuesta: dependencia
tipo: vf

enunciado: "La subordinada adverbial de lugar puede funcionar como una oración independiente y completa sin la oración principal."

explicacion: |
  Falso. Por definición, es una oración subordinada, lo que significa que depende sintáctica y semánticamente de la principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En la oración 'Voy donde tú vas', la palabra 'donde' introduce una subordinada adverbial de lugar."

explicacion: |
  Correcto. 'Donde' es el nexo más común para indicar ubicación o destino.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "a donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En 'Voy a donde tú vas', la parte 'a donde tú vas' es una subordinada adverbial de lugar."

explicacion: |
  Correcto. Indica el destino de la acción 'voy'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["estructura", "compuesta"]

variables:
  es_compuesta: verdadero

respuesta: es_compuesta
tipo: vf

enunciado: "Una oración que contiene una subordinada adverbial de lugar es una oración compuesta."

explicacion: |
  Correcto. Al tener una oración principal y una subordinada, es compuesta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "basico"
  tags: ["nexo", "desde donde"]

variables:
  es_lugar: verdadero

respuesta: es_lugar
tipo: vf

enunciado: "En 'Vengo desde donde tú viniste', la parte 'desde donde tú viniste' es una subordinada adverbial de lugar."

explicacion: |
  Correcto. Indica el origen de la acción 'vengo'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_lugar"
  nivel: "intermedio"
  tags: ["dependencia", "independencia"]

variables:
  es_independiente: falso

respuesta: es_independiente
tipo: vf

enunciado: "La subordinada adverbial de lugar puede entenderse completamente sola, sin la oración principal."

explicacion: |
  Falso. Dependes de la principal para su significado espacial específico.
```

## Sección: subordinada-adverbial-de-modo (27 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["definicion", "funcion"]

respuesta: verdadero
tipo: vf

enunciado: "La subordinada adverbial de modo funciona sintácticamente como un adverbio de modo, especificando 'cómo' se lleva a cabo la acción del verbo principal."

explicacion: |
  Correcto. Su función es modificar al verbo principal indicando la manera o el modo de ejecución de la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["puntuacion", "sintaxis"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando la subordinada adverbial de modo aparece al inicio de la oración principal, es recomendable separarla con una coma."

explicacion: |
  Correcto. Las oraciones subordinadas adverbiales extensas o colocadas al inicio suelen llevar coma para marcar la pausa sintáctica y facilitar la lectura.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["sustitucion", "prueba"]

variables:
  oracion_base: "Habló como si fuera un experto."
  adverbio_sustituto: "así"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La oración subordinada 'como si fuera un experto' en '{oracion_base}' puede ser sustituida por el adverbio '{adverbio_sustituto}' sin perder el sentido lógico general de la oración principal."

explicacion: |
  Una prueba fundamental para identificar una subordinada adverbial de modo es sustituirla por un adverbio de modo simple (así, bien, mal). Si la oración mantiene su sentido básico, la identificación es correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["diferenciacion", "causal"]

variables:
  oracion_causal: "Llegué tarde porque se cortó la luz."
  oracion_modal: "Llegué como me indicaron."

respuesta: oracion_modal
tipo: input

enunciado: "De las siguientes oraciones, ¿cuál contiene una subordinada adverbial de modo? Opción A: '{oracion_causal}'. Opción B: '{oracion_modal}'."

explicacion: |
  La primera oración es causal (explica el *porqué*). La segunda contiene 'como', que indica la *manera* o *cómo* se realizó la acción, siendo por tanto una subordinada de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  frase: "Trabajó de manera que todos lo admiraran."
  nexo_detectado: "de manera que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En la frase '{frase}', el nexo '{nexo_detectado}' introduce una subordinada adverbial de modo."

explicacion: |
  'De manera que' es un nexo compuesto que introduce una oración subordinada adverbial de modo, especificando la forma en que se ejecutó la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["literatura", "analisis"]

variables:
  fragmento: "El viento soplaba como si quisiera apagar las estrellas."
  nexo: "como si"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En el fragmento '{fragmento}', la parte '{nexo} quisiera apagar las estrellas' funciona como una subordinada de modo."

explicacion: |
  La estructura 'como si' introduce una comparación que describe la manera en que ocurría la acción del verbo principal ('soplaba'), cumpliendo la función de adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["distractor", "causal"]

variables:
  opcion_a: "Lo hizo porque tenía que hacerlo."
  opcion_b: "Lo hizo como le enseñaron."

respuesta: opcion_b
tipo: input

enunciado: "Seleccioná la oración que contiene una subordinada adverbial de modo: {opcion_a} / {opcion_b}."

explicacion: |
  'Porque' introduce una causa. 'Como' introduce la manera o modo, por lo que la segunda opción es la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["nexos", "segun"]

variables:
  oracion: "Actuó según las normas establecidas."
  nexo: "según"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Según' puede funcionar como nexo de modo cuando indica la regla o criterio que se siguió para realizar la acción, equivalente a 'de la manera que'.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["produccion", "nexos"]

variables:
  nexo1: "como"
  nexo2: "conforme"

respuesta: nexo1
tipo: input

enunciado: "Si quiero decir que alguien caminó 'de la manera en que lo hizo su padre', ¿cuál de estos nexos es el más común y directo para introducir la subordinada? {nexo1} o {nexo2}."

explicacion: |
  'Como' es el nexo más frecuente y directo para introducir subordinadas de modo en el lenguaje cotidiano y literario. 'Conforme' también es válido pero menos común en este contexto específico de comparación directa.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["puntuacion", "posicion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las subordinadas adverbiales de modo, cuando aparecen al inicio de la oración principal, generalmente van separadas por una coma."

explicacion: |
  La norma ortográfica general indica que las oraciones subordinadas que anteceden a la principal suelen ir separadas por una coma para marcar el límite sintáctico y facilitar la lectura.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  oracion: "Habló bajo un micrófono de modo que todos lo escucharan."
  nexo: "de modo que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'De modo que' es un nexo compuesto que indica la manera específica en que se realizó la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["diferenciacion", "finalidad"]

variables:
  oracion_modo: "Lo hizo como le pidieron."
  oracion_fin: "Lo hizo para que lo vieran."

respuesta: oracion_modo
tipo: input

enunciado: "¿Cuál de estas oraciones tiene una subordinada de modo? {oracion_modo} / {oracion_fin}."

explicacion: |
  'Como' indica la manera (modo). 'Para que' indica la intención o propósito (finalidad), por lo que la primera es la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["sustitucion", "prueba"]

variables:
  oracion: "Se vistió como le gustaba."
  sustituto: "así"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La parte 'como le gustaba' en '{oracion}' puede reemplazarse por '{sustituto}'."

explicacion: |
  La prueba de sustitución por 'así' es válida aquí, ya que 'como le gustaba' especifica la manera de vestir, funcionando como adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "conforme"]

variables:
  oracion: "Procedió conforme a la ley."
  nexo: "conforme"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Conforme' indica que la acción se realizó de acuerdo con un criterio o regla, especificando la manera (modo) de proceder.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["analisis", "oracion"]

variables:
  oracion: "Escribió la carta como si fuera un profesional."
  parte_subordinada: "como si fuera un profesional"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', la parte '{parte_subordinada}' es una subordinada adverbial de modo."

explicacion: |
  La cláusula introducida por 'como si' describe la manera en que se escribió la carta, cumpliendo la función de adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["distractor", "comparativo"]

variables:
  oracion_a: "Es alto como su padre."
  oracion_b: "Habló como un experto."

respuesta: oracion_b
tipo: input

enunciado: "¿Cuál de estas oraciones contiene una subordinada adverbial de modo? {oracion_a} / {oracion_b}."

explicacion: |
  'Es alto como su padre' es una oración comparativa de igualdad (compara la altura con la del padre). 'Habló como un experto' indica la manera de hablar (modo), siendo la segunda la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  oracion: "Lo organizó de forma que nadie se perdiera."
  nexo: "de forma que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'De forma que' es un nexo compuesto que especifica la manera en que se realizó la acción principal.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "como"]

variables:
  oracion: "Lo hizo como vio que hacían los demás."
  nexo: "como"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  Aquí 'como' no introduce una comparación directa de igualdad, sino que especifica la manera en que se realizó la acción, funcionando como nexo de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["diferenciacion", "causal"]

variables:
  oracion_causal: "Se fue porque estaba cansado."
  oracion_modal: "Se fue como si no le importara."

respuesta: oracion_modal
tipo: input

enunciado: "Seleccioná la oración con subordinada de modo: {oracion_causal} / {oracion_modal}."

explicacion: |
  'Porque' es causal. 'Como si' introduce la manera de irse (modo), haciendo a la segunda oración la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "segun"]

variables:
  oracion: "Decidió según el clima."
  nexo: "según"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Según' indica el criterio o regla que determinó la decisión, especificando la manera (modo) en que se tomó.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["puntuacion", "posicion"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: Las subordinadas adverbiales de modo, cuando aparecen al final de la oración principal, SIEMPRE van precedidas por una coma."

explicacion: |
  No siempre. Si la subordinada de modo es breve y está al final, a menudo no lleva coma. La coma es más frecuente si es extensa o si inicia la oración.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "complejos"]

variables:
  oracion: "Lo preparó de manera que fuera perfecto."
  nexo: "de manera que"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'De manera que' es un nexo compuesto que indica la forma específica en que se realizó la acción.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["analisis", "hipotesis"]

variables:
  oracion: "Mira como si no supiera nada."
  nexo: "como si"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Como si' introduce una comparación hipotética que describe la manera de mirar, cumpliendo la función de adverbio de modo.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["diferenciacion", "consecutiva"]

variables:
  oracion_consecutiva: "Corrió tanto que se cansó."
  oracion_modal: "Corrió como un profesional."

respuesta: oracion_modal
tipo: input

enunciado: "¿Cuál de estas oraciones tiene una subordinada de modo? {oracion_consecutiva} / {oracion_modal}."

explicacion: |
  'Tan... que' introduce una consecuencia (consecutiva). 'Como' introduce la manera (modo), por lo que la segunda es la correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "intermedio"
  tags: ["nexos", "conforme"]

variables:
  oracion: "Avanzó conforme avanzaba la tarde."
  nexo: "conforme"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En '{oracion}', el nexo '{nexo}' introduce una subordinada de modo."

explicacion: |
  'Conforme' aquí indica la manera progresiva en que se realizó la acción, especificando el modo de avanzar.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "basico"
  tags: ["sustitucion", "adverbio"]

variables:
  oracion: "Lo hizo bien."
  sustituto: "como se esperaba"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La oración '{oracion}' puede considerarse una versión simplificada de una subordinada de modo introducida por '{sustituto}'."

explicacion: |
  'Lo hizo bien' es una oración simple con un adverbio de modo. No contiene una subordinada. La pregunta evalúa la comprensión de que la subordinada es una estructura compleja, no un adverbio simple.
```

```
metadata:
  materia: "Lengua"
  tema: "subordinada_adverbial_de_modo"
  nivel: "avanzado"
  tags: ["diferenciacion", "finalidad"]

variables:
  oracion_modo: "Lo dijo de modo que todos entendieran."
  oracion_fin: "Lo dijo de modo que lo escucharan."

respuesta: oracion_modo
tipo: input

enunciado: "¿Cuál de estas oraciones usa 'de modo que' como nexo de modo? {oracion_modo} / {oracion_fin}."

explicacion: |
  'De modo que' puede tener valor consecutivo o final. En '{oracion_modo}', se refiere a la manera de decirlo (para que la forma de decirlo permitiera la comprensión). En '{oracion_fin}', el énfasis está en la intención (finalidad). La primera es más claramente de modo en contextos de análisis sintáctico estricto, aunque la distinción es sutil. (Nota: En muchos contextos, 'de modo que' se considera consecutivo/final. Para evaluar modo estricto, se prefiere 'como'. Sin embargo, en el contexto de este ejercicio, se busca distinguir la intención de la forma. La respuesta correcta es la que enfatiza la *forma* de la acción).
```
