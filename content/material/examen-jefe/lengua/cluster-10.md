# Examen jefe — [PENDIENTE #660]

> Logro #660. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **111 preguntas totales** en 5/5 secciones.

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

respuesta: auxiliar + " " + participio
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

## Sección: oracion-compuesta-coordinacion-y-subordinacion (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["oracion_compuesta", "reconocimiento"]

variables:
  frases: ["Juan estudió", "Juan estudió y aprobó el examen", "María durmió", "Juan dijo que vendría"]
  tipos: ["simple", "compuesta", "simple", "compuesta"]
  idx: uno_de([0, 1, 2, 3])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["simple", "compuesta"]

enunciado: "\"{frases[idx]}\" es una oración..."

pasos:
  - "Contar los verbos conjugados: uno solo = simple, dos o más = compuesta."

explicacion: |
  Una oración compuesta combina dos o más proposiciones (cada una con
  su propio verbo conjugado).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["coordinacion", "copulativa"]

variables:
  frases: ["Juan estudió y aprobó", "María cantó y bailó", "Ni estudió ni aprobó"]
  nexos: ["y", "y", "ni...ni"]
  idx: uno_de([0, 1, 2])

respuesta: nexos[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo coordinante copulativo?"

pasos:
  - "Los nexos copulativos suman ideas: y, ni."

explicacion: |
  La coordinación copulativa suma dos proposiciones con "y" (o "ni"
  para sumar en negativo).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["coordinacion", "disyuntiva"]

variables:
  frases: ["Estudiás o repetís", "Vas al cine o te quedás en casa"]
  idx: uno_de([0, 1])

respuesta: "o"
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo coordinante que marca una opción entre dos alternativas?"

pasos:
  - "El nexo disyuntivo presenta alternativas excluyentes: o."

explicacion: |
  La coordinación disyuntiva presenta dos opciones con "o".
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "basico"
  tags: ["coordinacion", "adversativa"]

variables:
  frases: ["Estudió pero no aprobó", "No fue al cine sino que se quedó en casa"]
  nexos: ["pero", "sino"]
  idx: uno_de([0, 1])

respuesta: nexos[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo coordinante que marca contraste?"

pasos:
  - "Los nexos adversativos contrastan ideas: pero, sino."

explicacion: |
  La coordinación adversativa contrasta dos ideas con "pero" o
  "sino".
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "clasificacion"]

variables:
  frases: ["Juan estudió y aprobó", "Estudiás o repetís", "Estudió pero no aprobó"]
  tipos: ["copulativa", "disyuntiva", "adversativa"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "La coordinación en \"{frases[idx]}\" es de tipo..."

pasos:
  - "y/ni = copulativa, o = disyuntiva, pero/sino = adversativa."

explicacion: |
  El nexo usado determina el tipo de coordinación: suma (copulativa),
  opción (disyuntiva) o contraste (adversativa).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "reconocimiento"]

variables:
  frases: ["Juan dijo que vendría", "Juan estudió y aprobó"]
  tipos: ["subordinada", "coordinada"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["subordinada", "coordinada"]

enunciado: "\"{frases[idx]}\" combina sus proposiciones por..."

pasos:
  - "Si al separar las proposiciones una queda incompleta o sin sentido, es subordinación."

explicacion: |
  En la subordinación, una proposición depende gramaticalmente de la
  otra; en la coordinación, son independientes.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "reconocimiento"]

variables:
  frases: ["Juan dijo que vendría", "El libro que compré es bueno", "Llegó cuando terminó la clase"]
  subordinadas: ["que vendría", "que compré", "cuando terminó la clase"]
  idx: uno_de([0, 1, 2])

respuesta: subordinadas[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es la proposición subordinada?"

pasos:
  - "La subordinada es la que no tiene sentido completo por sí sola, separada de la principal."

explicacion: |
  La proposición subordinada cumple una función dentro de la
  principal (sujeto, OD, modificador o circunstancial).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "sustantiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Creo que vendrá\", la proposición \"que vendrá\" funciona como objeto directo de \"creo\" (¿qué creo? → que vendrá)."

pasos:
  - "La subordinada sustantiva ocupa el lugar de un sustantivo/OD en la oración principal."

explicacion: |
  Verdadero: es el ejemplo clásico de subordinada sustantiva con
  función de OD.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "sustantiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Que llueva me preocupa\", la proposición \"que llueva\" funciona como sujeto de \"preocupa\"."

pasos:
  - "¿Qué me preocupa? → que llueva. Cumple función de sujeto, no de OD."

explicacion: |
  Verdadero: una subordinada sustantiva también puede ocupar el lugar
  del sujeto, no sólo del OD.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "adjetiva"]

variables:
  frases: ["El libro que compré es bueno", "La casa donde vivo es grande"]
  modificados: ["libro", "casa"]
  idx: uno_de([0, 1])

respuesta: modificados[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", la subordinada adjetiva modifica al sustantivo..."

pasos:
  - "La subordinada adjetiva funciona como un adjetivo: modifica directamente a un sustantivo de la principal."

explicacion: |
  La subordinada adjetiva suele empezar con \"que\"/\"quien\"/\"donde\"
  y modifica al sustantivo inmediatamente anterior.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "adverbial"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Llegó cuando terminó la clase\", la proposición \"cuando terminó la clase\" funciona como circunstancial de tiempo de \"llegó\"."

pasos:
  - "¿Cuándo llegó? → cuando terminó la clase. Cumple función de CC de tiempo."

explicacion: |
  Verdadero: la subordinada adverbial cumple la misma función que un
  circunstancial simple, pero con su propio verbo.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "clasificacion"]

variables:
  frases: ["Creo que vendrá", "El libro que compré es bueno", "Llegó cuando terminó la clase"]
  tipos: ["sustantiva", "adjetiva", "adverbial"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["sustantiva", "adjetiva", "adverbial"]

enunciado: "La subordinada de \"{frases[idx]}\" es de tipo..."

pasos:
  - "Sustantiva = función de sustantivo (sujeto/OD). Adjetiva = modifica un sustantivo. Adverbial = función de circunstancial."

explicacion: |
  El tipo de subordinada depende de qué función cumple dentro de la
  oración principal.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "subordinacion", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si al separar una oración compuesta en dos, ambas partes tienen sentido completo por sí solas, se trata de coordinación (no de subordinación)."

pasos:
  - "\"Juan estudió y aprobó\" → \"Juan estudió.\" + \"Aprobó.\" (ambas completas) = coordinación."

explicacion: |
  Verdadero: esa es exactamente la prueba práctica para distinguir
  coordinación de subordinación.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["subordinacion", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "\"Que vendría\", separada de \"Juan dijo que vendría\", tiene sentido completo por sí sola."

pasos:
  - "\"Que vendría\" sola no dice quién dijo qué; necesita la principal para completarse."

explicacion: |
  Falso: la marca de la subordinación es justamente que la
  subordinada NO se sostiene sola gramaticalmente.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "nexos"]

variables:
  frases: ["Juan dijo que vendría", "El libro que compré es bueno", "Llegó cuando terminó la clase", "Iré si tengo tiempo"]
  nexos: ["que", "que", "cuando", "si"]
  idx: uno_de([0, 1, 2, 3])

respuesta: nexos[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el nexo subordinante?"

pasos:
  - "Los nexos subordinantes típicos son: que, cuando, donde, como, si, porque, aunque."

explicacion: |
  El nexo subordinante introduce la proposición subordinada y marca
  su dependencia de la principal.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En la coordinación, ninguna de las dos proposiciones depende gramaticalmente de la otra: ambas están al mismo nivel."

pasos:
  - "\"Juan estudió y aprobó\": \"aprobó\" no cumple ninguna función DENTRO de \"Juan estudió\", están simplemente unidas."

explicacion: |
  Verdadero: la coordinación une proposiciones independientes,
  a diferencia de la subordinación donde una depende de la otra.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["coordinacion", "nexos"]

variables:
  nexos: ["y", "ni", "o", "pero", "sino"]
  tipos: ["copulativa", "copulativa", "disyuntiva", "adversativa", "adversativa"]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "El nexo coordinante \"{nexos[idx]}\" es de tipo..."

pasos:
  - "y/ni suman, o presenta alternativas, pero/sino contrastan."

explicacion: |
  Cada nexo coordinante corresponde a un tipo fijo de relación entre
  las proposiciones.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["subordinacion", "funcion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Toda proposición subordinada cumple una función sintáctica concreta dentro de la oración principal (sujeto, objeto directo, modificador o circunstancial)."

pasos:
  - "Es justamente lo que la distingue de una coordinada: ocupa el lugar de una función gramatical específica."

explicacion: |
  Verdadero: por eso se clasifican según esa función (sustantiva,
  adjetiva, adverbial).
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "intermedio"
  tags: ["oracion_compuesta", "metodo"]

enunciado: "Ordená los pasos para clasificar una oración compuesta como coordinada o subordinada."
tipo: ordenar
opciones_explicitas:
  - "Contar los verbos conjugados para confirmar que es compuesta"
  - "Separar las proposiciones en dos oraciones independientes"
  - "Revisar si ambas tienen sentido completo por sí solas"
  - "Si ambas tienen sentido, es coordinación; si una queda incompleta, es subordinación"
respuesta_orden: ["Contar los verbos conjugados para confirmar que es compuesta", "Separar las proposiciones en dos oraciones independientes", "Revisar si ambas tienen sentido completo por sí solas", "Si ambas tienen sentido, es coordinación; si una queda incompleta, es subordinación"]
explicacion: |
  El método sigue el mismo orden que la prueba práctica de la teoría:
  contar verbos, separar, y evaluar si cada parte se sostiene sola.
```

```
metadata:
  materia: "lengua"
  tema: "oracion_compuesta"
  nivel: "avanzado"
  tags: ["oracion_compuesta", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Combinar oraciones simples en compuestas (por coordinación o subordinación) permite escribir textos más fluidos, en vez de encadenar sólo oraciones cortas sueltas."

pasos:
  - "Un texto con sólo oraciones simples suena entrecortado; combinarlas con nexos mejora la cohesión."

explicacion: |
  Verdadero: dominar coordinación y subordinación es la base directa
  para la producción escrita compleja, tema siguiente en esta rama.
```

## Sección: oraciones-negativas-e-interrogativas (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["negacion"]

variables:
  afirmativas: ["Juan compró el pan", "María leyó el libro", "Los chicos jugaron al fútbol"]
  negativas: ["Juan no compró el pan", "María no leyó el libro", "Los chicos no jugaron al fútbol"]
  idx: uno_de([0, 1, 2])

respuesta: negativas[idx]
tipo: completar

enunciado: "Convertí en negativa la oración: \"{afirmativas[idx]}\""

pasos:
  - "Se agrega \"no\" inmediatamente antes del verbo."

explicacion: |
  La negación simple se forma con "no" antes del verbo conjugado.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["negacion", "doble_negacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En español, \"Juan no compró nada\" tiene dos negaciones (\"no\" y \"nada\") que se refuerzan entre sí, no se cancelan como en otros idiomas."

pasos:
  - "A diferencia del inglés (\"didn't buy anything\", sin doble negativo), el español permite y hasta exige la doble negación en muchos casos."

explicacion: |
  Verdadero: la doble negación en español es gramaticalmente correcta
  y refuerza el sentido negativo, no lo anula.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_total"]

variables:
  afirmativas: ["Juan compró el pan", "María leyó el libro"]
  interrogativas: ["¿Juan compró el pan?", "¿María leyó el libro?"]
  idx: uno_de([0, 1])

respuesta: interrogativas[idx]
tipo: completar

enunciado: "Convertí en pregunta total (se responde sí/no): \"{afirmativas[idx]}\""

pasos:
  - "Se agregan los signos de interrogación, sin cambiar el orden de las palabras."

explicacion: |
  La interrogativa total no necesita palabra interrogativa, sólo
  signos de pregunta (y entonación ascendente en el habla).
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_total", "interrogativa_parcial", "diferenciacion"]

variables:
  frases: ["¿Juan compró el pan?", "¿Qué compró Juan?", "¿Vino María?", "¿Cuándo vino María?"]
  tipos: ["total", "parcial", "total", "parcial"]
  idx: uno_de([0, 1, 2, 3])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["total", "parcial"]

enunciado: "\"{frases[idx]}\" es una interrogativa..."

pasos:
  - "Si se responde con sí/no, es total. Si pregunta por una parte específica con palabra interrogativa, es parcial."

explicacion: |
  Total: se responde sí/no. Parcial: usa una palabra interrogativa
  (qué, quién, cuándo...) y pide un dato específico.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "objeto_directo"]

variables:
  n: uno_de([1, 1])

respuesta: "qué"
tipo: completar

enunciado: "Para preguntar por el objeto directo de una oración (\"¿... compró Juan?\" → \"el pan\"), se usa la palabra interrogativa..."

pasos:
  - "\"Qué\" apunta al objeto directo cuando es una cosa."

explicacion: |
  "Qué" pregunta por el OD (cosa). Para el OD de persona se usa
  "a quién".
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "sujeto"]

variables:
  n: uno_de([1, 1])

respuesta: "quién"
tipo: completar

enunciado: "Para preguntar por el sujeto de \"Juan compró el pan\" (\"¿... compró el pan?\"), se usa la palabra interrogativa..."

pasos:
  - "\"Quién\" apunta al sujeto cuando es una persona."

explicacion: |
  "Quién(es)" pregunta por el sujeto (o por un complemento de
  persona), según el contexto.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "circunstancial"]

variables:
  n: uno_de([1, 1])

respuesta: "cuándo"
tipo: completar

enunciado: "Para preguntar por el circunstancial de tiempo, se usa la palabra interrogativa..."

pasos:
  - "\"Cuándo\" apunta al CC de tiempo, igual que en el análisis de complementos."

explicacion: |
  Cada palabra interrogativa corresponde a la pregunta que se usa
  para reconocer ese complemento.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "circunstancial"]

variables:
  n: uno_de([1, 1])

respuesta: "dónde"
tipo: completar

enunciado: "Para preguntar por el circunstancial de lugar, se usa la palabra interrogativa..."

pasos:
  - "\"Dónde\" apunta al CC de lugar."

explicacion: |
  "Dónde" pregunta específicamente por el lugar de la acción.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "circunstancial"]

variables:
  n: uno_de([1, 1])

respuesta: "cómo"
tipo: completar

enunciado: "Para preguntar por el circunstancial de modo, se usa la palabra interrogativa..."

pasos:
  - "\"Cómo\" apunta al CC de modo."

explicacion: |
  "Cómo" pregunta específicamente por la manera en que ocurre la
  acción.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_parcial", "tildes"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las palabras interrogativas (qué, quién, cuándo, dónde, cómo, cuánto) siempre llevan tilde cuando forman parte de una pregunta."

pasos:
  - "\"¿Qué compró Juan?\" (con tilde) vs. \"Juan sabe que compró pan\" (\"que\" sin tilde, no es interrogativo)."

explicacion: |
  Verdadero: la tilde diacrítica distingue el uso interrogativo del
  uso no interrogativo de esas mismas palabras.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["negacion", "interrogativa", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una oración puede ser negativa e interrogativa a la vez, como \"¿Juan no compró el pan?\"."

pasos:
  - "Se combinan las dos transformaciones sobre la misma oración base."

explicacion: |
  Verdadero: negación e interrogación son transformaciones
  independientes que pueden aplicarse juntas.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["negacion", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Agregar \"no\" a una oración cambia su sentido pero no cambia cuál es el sujeto ni cuál es el predicado."

pasos:
  - "\"Juan compró el pan\" y \"Juan no compró el pan\" tienen el mismo sujeto (Juan) y el mismo OD (el pan)."

explicacion: |
  Verdadero: la negación es una transformación semántica (cambia el
  sentido) pero no toca la estructura sintáctica de base.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["negacion", "vocabulario"]

variables:
  frases: ["Nadie vino a la fiesta", "Juan nunca llega tarde", "No hay nada en la heladera"]
  palabras: ["Nadie", "nunca", "nada"]
  idx: uno_de([0, 1, 2])

respuesta: palabras[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es la palabra que aporta el sentido negativo (además de o en vez de \"no\")?"

pasos:
  - "Nadie, nunca, nada, ninguno son palabras negativas que pueden reemplazar o acompañar a \"no\"."

explicacion: |
  Además de "no", el español tiene palabras negativas propias:
  nadie, nunca, nada, ninguno/a, tampoco.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "eleccion"]

variables:
  preguntas: ["¿... compró Juan?", "¿... compró el pan?", "¿... compró Juan el pan?", "¿... está la panadería?"]
  respuestas_esperadas: ["Qué", "Quién", "Cuándo", "Dónde"]
  idx: uno_de([0, 1, 2, 3])

respuesta: respuestas_esperadas[idx]
tipo: mc
opciones_explicitas: ["Qué", "Quién", "Cuándo", "Dónde", "Cómo"]

enunciado: "Completá con la palabra interrogativa correcta: \"{preguntas[idx]}\" (si la respuesta esperada apunta al {respuestas_esperadas[idx]})"

pasos:
  - "Identificar qué complemento se busca (OD, sujeto, tiempo, lugar) y elegir la palabra que le corresponde."

explicacion: |
  Cada palabra interrogativa apunta a un complemento específico de la
  oración base.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_total", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Toda oración interrogativa necesita una palabra interrogativa (qué, quién, cuándo...) para formarse."

pasos:
  - "\"¿Vino María?\" es interrogativa (total) sin ninguna palabra interrogativa, sólo con los signos de pregunta."

explicacion: |
  Falso: las interrogativas totales no llevan palabra interrogativa,
  sólo las parciales la necesitan.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "basico"
  tags: ["interrogativa_total", "interrogativa_parcial", "respuestas"]

variables:
  frases: ["¿Vino María?", "¿Cuándo vino María?"]
  tipos_respuesta: ["sí o no", "un dato específico (una fecha/momento)"]
  idx: uno_de([0, 1])

respuesta: tipos_respuesta[idx]
tipo: mc
opciones_explicitas: ["sí o no", "un dato específico (una fecha/momento)"]

enunciado: "La pregunta \"{frases[idx]}\" se responde con..."

pasos:
  - "Total → sí/no. Parcial → el dato puntual que pide la palabra interrogativa."

explicacion: |
  El tipo de interrogativa determina qué forma de respuesta se
  espera.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["negacion", "practica"]

variables:
  afirmativas: ["Juan le regaló un libro a María", "El profesor les explicó el tema a los alumnos"]
  negativas: ["Juan no le regaló un libro a María", "El profesor no les explicó el tema a los alumnos"]
  idx: uno_de([0, 1])

respuesta: negativas[idx]
tipo: completar

enunciado: "Convertí en negativa: \"{afirmativas[idx]}\""

pasos:
  - "El \"no\" se ubica antes del verbo, sin alterar OD ni OI de la oración."

explicacion: |
  La negación se agrega en un único lugar (antes del verbo) sin
  importar cuántos complementos tenga la oración.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["interrogativa_parcial", "objeto_indirecto"]

variables:
  n: uno_de([1, 1])

respuesta: "a quién"
tipo: completar

enunciado: "Para preguntar por el objeto indirecto de \"Juan le regaló un libro a María\" (\"¿... le regaló un libro Juan?\"), se usa..."

pasos:
  - "El OI es el destinatario, se pregunta con \"a quién\"."

explicacion: |
  "A quién" pregunta específicamente por el destinatario (OI), a
  diferencia de "quién" que pregunta por el sujeto.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "intermedio"
  tags: ["interrogativa_parcial", "metodo"]

enunciado: "Ordená los pasos para transformar una afirmativa en una pregunta parcial sobre su circunstancial de lugar."
tipo: ordenar
opciones_explicitas:
  - "Identificar el circunstancial de lugar en la oración afirmativa"
  - "Reemplazarlo por la palabra interrogativa \"dónde\""
  - "Ubicar \"dónde\" al inicio de la oración"
  - "Agregar los signos de interrogación"
respuesta_orden: ["Identificar el circunstancial de lugar en la oración afirmativa", "Reemplazarlo por la palabra interrogativa \"dónde\"", "Ubicar \"dónde\" al inicio de la oración", "Agregar los signos de interrogación"]
explicacion: |
  Se identifica el complemento, se reemplaza por su palabra
  interrogativa, se la antepone y se cierra con los signos de
  pregunta.
```

```
metadata:
  materia: "lengua"
  tema: "oraciones_negativas_e_interrogativas"
  nivel: "avanzado"
  tags: ["interrogativa_parcial", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Elegir bien la palabra interrogativa (qué/quién/cuándo/dónde/cómo/por qué/cuánto) permite pedir exactamente el dato que falta, sin tener que reformular toda la pregunta."

pasos:
  - "Cada palabra apunta a un complemento distinto: usar la incorrecta pide un dato distinto del que se busca."

explicacion: |
  Verdadero: elegir la palabra interrogativa correcta es lo que hace
  que la pregunta pida exactamente el dato faltante.
```

## Sección: coordinadas-adversativas (22 preguntas)

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  n: uno_de([1, 1])

respuesta: "oposición o contraste"
tipo: mc
opciones_explicitas: ["suma de información", "oposición o contraste", "una alternativa entre opciones"]

enunciado: "Una oración coordinada adversativa expresa principalmente..."

explicacion: |
  Las adversativas presentan un contraste: "A, pero B", donde B limita o
  contradice parcialmente lo dicho en A.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["pero", "sin embargo", "no obstante"])

respuesta: verdadero
tipo: vf

enunciado: "El conector \"{conector}\" puede introducir una oración coordinada adversativa."

explicacion: |
  Los tres son nexos adversativos reales: "pero" es el más simple, "sin
  embargo" y "no obstante" son locuciones adversativas más formales.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["y", "o", "ni"])

respuesta: falso
tipo: vf

enunciado: "El conector \"{conector}\" es un nexo adversativo."

explicacion: |
  "Y"/"ni" son copulativos (suman) y "o" es disyuntivo (alternativa) — ninguno
  expresa contraste, así que no son adversativos.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["nexos"]

variables:
  n: uno_de([1, 1])

respuesta: "sino"
tipo: completar

enunciado: "En \"No fue por miedo, ___ por respeto\", el nexo que reemplaza una proposición negativa anterior por la alternativa verdadera es:"

respuestas_validas:
  - "sino"

explicacion: |
  "Sino" se usa específicamente para corregir/reemplazar una negación
  previa por la afirmación correcta — distinto de "pero", que no niega
  lo anterior sino que lo matiza.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["independencia sintactica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En una coordinada adversativa, las dos proposiciones son sintácticamente independientes entre sí (ninguna depende de la otra para tener sentido completo)."

explicacion: |
  A diferencia de la subordinación, en la coordinación ambas oraciones
  tienen igual jerarquía gramatical — el nexo adversativo sólo agrega
  un matiz semántico de contraste, no crea dependencia sintáctica.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "adversativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"Quería ir al cine, pero estaba lloviendo\" es una oración coordinada..."

explicacion: |
  "Pero" marca el contraste entre el deseo (ir al cine) y la circunstancia
  que lo impide (la lluvia): es adversativa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["puntuacion"]

variables:
  n: uno_de([1, 1])

respuesta: "van entre comas"
tipo: mc
opciones_explicitas: ["nunca llevan coma", "van entre comas", "siempre van al final de la oración"]

enunciado: "Locuciones adversativas como \"sin embargo\" o \"no obstante\" típicamente..."

explicacion: |
  Al ser conectores discursivos más marcados que "pero", suelen ir
  encerrados entre comas, ya sea al inicio de la segunda proposición o
  en medio de ella.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["analisis"]

variables:
  n: uno_de([1, 1])

respuesta: "el esfuerzo del equipo y la falta de goles"
tipo: mc
opciones_explicitas: ["el clima y el resultado", "el esfuerzo del equipo y la falta de goles", "el árbitro y los jugadores"]

enunciado: "\"El equipo jugó con mucha entrega durante los primeros cuarenta minutos, sin embargo, no logró convertir goles\". ¿Qué dos ideas contrasta \"sin embargo\" acá?"

explicacion: |
  El conector marca la oposición entre el esfuerzo demostrado (entrega)
  y el resultado negativo (no convertir goles).
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["pero", "mas"])

respuesta: verdadero
tipo: vf

enunciado: "\"{conector}\" es una conjunción adversativa (aunque \"mas\" sin tilde se usa sobre todo en registros literarios o formales)."

explicacion: |
  Ambas cumplen la misma función adversativa; "mas" es una variante más
  formal/literaria de "pero".
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["puntuacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de \"pero\" suele colocarse una coma cuando la primera proposición es larga o se busca marcar una pausa enfática."

explicacion: |
  Con oraciones cortas, "pero" puede ir sin coma previa; con proposiciones
  más extensas, la coma ayuda a marcar el corte antes del contraste.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "copulativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"Estudió mucho y aprobó el examen\" es una oración coordinada..."

explicacion: |
  "Y" suma información sin contraste (estudió Y además aprobó): es
  copulativa, no adversativa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["funcion textual"]

variables:
  n: uno_de([1, 1])

respuesta: "anticipar giros o matices en el argumento del autor"
tipo: mc
opciones_explicitas: ["memorizar vocabulario nuevo", "anticipar giros o matices en el argumento del autor", "identificar el género textual"]

enunciado: "Reconocer las coordinadas adversativas en un texto ayuda principalmente a..."

explicacion: |
  Los conectores adversativos señalan que el autor está por matizar,
  limitar o contradecir parcialmente lo que acaba de afirmar — anticiparlos
  mejora la comprensión lectora.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  conector: uno_de(["por el contrario", "sino"])

respuesta: verdadero
tipo: vf

enunciado: "\"{conector}\" puede funcionar como nexo adversativo."

explicacion: |
  Ambos son nexos/locuciones adversativas reconocidas: "por el contrario"
  refuerza la oposición, "sino" reemplaza una negación previa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["analisis"]

variables:
  n: uno_de([1, 1])

respuesta: "que la complejidad del proceso no niega que sus ideales inspiraran cambios"
tipo: mc
opciones_explicitas: ["que la Revolución de Mayo fue un fracaso total", "que la complejidad del proceso no niega que sus ideales inspiraran cambios", "que no hubo ningún ideal de libertad"]

enunciado: "\"La Revolución de Mayo fue un proceso complejo, pero sus ideales de libertad inspiraron cambios profundos\". ¿Qué matiz introduce \"pero\" acá?"

explicacion: |
  El "pero" no niega la complejidad, sino que agrega una consecuencia
  positiva que igual se dio a pesar de esa complejidad.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  conector: uno_de(["pero", "sin embargo", "no obstante", "sino"])

respuesta: "adversativa"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "Una oración unida con el nexo \"{conector}\" es de tipo coordinada..."

explicacion: |
  Los cuatro son nexos adversativos: expresan contraste u oposición
  entre las dos proposiciones que unen.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["posicion del nexo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La posición del nexo adversativo dentro de la oración es flexible, lo que permite variar el ritmo y el énfasis del discurso."

explicacion: |
  A diferencia de nexos con posición fija, adversativas como "sin embargo"
  pueden ir al inicio de la segunda proposición o insertarse en medio de
  ella.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["clasificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "disyuntiva"
tipo: mc
opciones_explicitas: ["copulativa", "disyuntiva", "adversativa"]

enunciado: "\"¿Vamos al cine o nos quedamos en casa?\" es una oración coordinada..."

explicacion: |
  "O" plantea una alternativa entre dos opciones, no un contraste: es
  disyuntiva, no adversativa.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["nexos"]

variables:
  n: uno_de([1, 1])

respuesta: "concesivo-adversativo"
tipo: completar

enunciado: "En ciertos contextos, \"aunque\" puede funcionar con un valor ___ cercano al de las adversativas, aunque formalmente introduce una subordinada."

respuestas_validas:
  - "concesivo-adversativo"
  - "concesivo adversativo"

explicacion: |
  "Aunque" suele introducir subordinadas concesivas, pero semánticamente
  su matiz de contraste lo acerca al valor de las adversativas en varios
  usos.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["conectores"]

variables:
  n: uno_de([1, 1])

respuesta: "sino"
tipo: mc
opciones_explicitas: ["pero", "sino", "y"]

enunciado: "El nexo específico para corregir una negación previa (\"no X, ... Y\") es:"

explicacion: |
  "Sino" es el único de estos tres que exige que la primera proposición
  sea negativa — reemplaza esa negación por la alternativa correcta.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "intermedio"
  tags: ["escritura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Usar conectores adversativos correctamente evita que un texto sea una simple lista de ideas desconectadas."

explicacion: |
  Al marcar relaciones de contraste explícitas, los conectores
  adversativos ayudan a construir razonamientos más cohesivos y matizados
  en vez de oraciones sueltas.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  conector: uno_de(["ni", "o", "u"])

respuesta: falso
tipo: vf

enunciado: "El nexo \"{conector}\" expresa un contraste u oposición entre dos proposiciones."

explicacion: |
  "Ni" es copulativo negativo y "o"/"u" son disyuntivos — ninguno expresa
  oposición, por eso no son adversativos.
```

```
metadata:
  materia: "lengua"
  tema: "coordinadas_adversativas"
  nivel: "avanzado"
  tags: ["examenes"]

variables:
  n: uno_de([1, 1])

respuesta: "analizar la función de los conectores en un fragmento dado"
tipo: mc
opciones_explicitas: ["memorizar la lista de conjunciones de memoria", "analizar la función de los conectores en un fragmento dado", "contar cuántas comas tiene el texto"]

enunciado: "En pruebas de diagnóstico y exámenes finales, un pedido típico sobre este tema es..."

explicacion: |
  Se suele pedir identificar y explicar la función (adversativa,
  copulativa, disyuntiva, etc.) de conectores dentro de un fragmento real.
```

## Sección: coordinadas-copulativas (28 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["estructura", "independencia"]

variables:
  oracion: uno_de(["El sol sale y la luna se oculta", "Juan corre y María camina", "Pedro come y Ana duerme"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{oracion}', la segunda parte depende jerárquicamente de la primera para tener sentido completo."

explicacion: |
  Falso. En las coordenadas copulativas, ambas partes tienen independencia sintáctica. Ninguna es subordinada de la otra; simplemente se suman información.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["funcion", "nexos"]

variables:
  op_a: "subordinar"
  op_b: "unir aditivamente"
  op_c: "contrastar"
  op_d: "causar"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Cuál es la función principal de las conjunciones copulativas (como 'y', 'e', 'ni') en una oración?"

explicacion: |
  La función principal es unir elementos o proposiciones de manera aditiva (sumar información), sin crear dependencia jerárquica entre ellas.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "estructura"]

variables:
  ejemplo: "Pedro come pan y María [come] queso"

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{ejemplo}', la omisión del verbo en la segunda parte se llama elisión y no cambia la naturaleza coordinada de la oración."

explicacion: |
  Verdadero. La elisión es una omisión de elementos repetidos para evitar redundancia, pero la estructura sigue siendo coordinada copulativa.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["independencia", "permutaciones"]

variables:
  partes: 2
  total: permutations(partes, partes)

respuesta: total
tipo: input

enunciado: "Si tenemos dos coordenadas copulativas independientes (A y B), ¿cuántas permutaciones distintas de orden existen sin cambiar el significado esencial de la coordinación?"

explicacion: |
  Como son independientes, se pueden invertir. Para 2 elementos, hay 2! (2x1) = 2 permutaciones posibles (A y B; B y A).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["etimologia", "terminologia"]

variables:
  op_a: "copular"
  op_b: "separar"
  op_c: "subordinar"
  op_d: "conjugar"

respuesta: op_a
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "El término 'copulativa' proviene del verbo latino 'copular', que significa:"

explicacion: |
  'Copular' significa unir o ligar, reflejando la función de estas conjunciones de enlazar elementos.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["dependencia", "jerarquia"]

variables:
  afirmacion: "una parte completa el sentido de la otra"

respuesta: falso
tipo: vf

enunciado: "En las coordenadas copulativas, una parte completa el sentido de la otra, creando una jerarquía principal/secundaria."

explicacion: |
  Falso. Esa es la característica de las subordinadas. En las copulativas, ambas partes son independientes e iguales jerárquicamente.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["nexos", "frecuencia"]

variables:
  total_nexos: 3
  nexo_comun: "y"

respuesta: nexo_comun
tipo: input

enunciado: "De los nexos copulativos principales (y, e, ni), ¿cuál es el más común y representativo?"

explicacion: |
  La conjunción 'y' es la más común y representativa de las coordinadas copulativas.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["prueba", "independencia"]

variables:
  op_a: "cambiar el significado"
  op_b: "mantener la relación aditiva"
  op_c: "crear una subordinada"
  op_d: "eliminar la elisión"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "Una prueba clave para identificar coordenadas copulativas es invertir el orden de las partes. ¿Qué ocurre con la relación al invertir?"

explicacion: |
  La relación de adición se mantiene, demostrando la independencia sintáctica de las partes.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["fonetica", "cacofonia"]

variables:
  palabra: "isla"

respuesta: verdadero
tipo: vf

enunciado: "Ante la palabra '{palabra}', se debe usar 'e' en lugar de 'y' para evitar cacofonía."

explicacion: |
  Verdadero. 'Y isla' suena mal fonéticamente; 'e isla' es la forma correcta.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["comparacion", "subordinadas"]

variables:
  op_a: "dependencia jerárquica"
  op_b: "independencia sintáctica"
  op_c: "uso de 'que'"
  op_d: "elisión obligatoria"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "¿Qué característica distingue fundamentalmente a las coordenadas copulativas de las subordinadas?"

explicacion: |
  La independencia sintáctica. En las copulativas, ninguna parte depende de la otra.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "naturaleza"]

variables:
  afirmacion: "cambia la naturaleza coordinada"

respuesta: falso
tipo: vf

enunciado: "La elisión de elementos repetidos cambia la naturaleza coordinada de la oración."

explicacion: |
  Falso. La elisión no cambia la naturaleza; solo hace la oración más fluida.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["funcion", "nexos"]

variables:
  op_a: "separar"
  op_b: "unir"
  op_c: "subordinar"
  op_d: "interrogar"

respuesta: op_b
tipo: mc
opciones_explicitas: [op_a, op_b, op_c, op_d]

enunciado: "La conjunción 'y' tiene la función de:"

explicacion: |
  Unir elementos o proposiciones de manera aditiva.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["que", "independencia"]

variables:
  afirmacion: "siempre es subordinante"

respuesta: falso
tipo: vf

enunciado: "El nexo 'que' siempre cumple una función subordinante y nunca aditiva."

explicacion: |
  Falso. En algunos contextos específicos, 'que' puede cumplir función aditiva, aunque su uso principal es subordinante.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["identificacion", "contexto"]

variables:
  oracion: "Juan e María estudian"
  nexo: "e"

respuesta: nexo
tipo: input

enunciado: "En la oración '{oracion}', ¿cuál es el nexo copulativo?"

explicacion: |
  El nexo es 'e', utilizado antes de la vocal 'i' de 'María'.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["permutaciones", "logica"]

variables:
  elementos: 3
  total: permutations(elementos, elementos)

respuesta: total
tipo: input

enunciado: "Si tenemos tres coordenadas copulativas independientes (A, B, C), ¿cuántas permutaciones distintas de orden existen?"

explicacion: |
  Para 3 elementos independientes, hay 3! (3x2x1) = 6 permutaciones posibles.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["independencia", "sintaxis"]

variables:
  caso: uno_de(["verdadero", "falso"])

respuesta: verdadero
tipo: vf

enunciado: "En una oración coordinada copulativa, la segunda parte depende jerárquicamente de la primera."

explicacion: |
  Falso. En las coordinadas copulativas, ambas partes tienen independencia sintáctica y gramatical. Ninguna es subordinada de la otra.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["fonetica", "uso_de_nexos"]

variables:
  palabra_siguiente: uno_de(["isla", "hambre", "yogur"])

respuesta: e
tipo: input

enunciado: "Si la palabra siguiente comienza con 'i' o 'hi' (como '{palabra_siguiente}'), ¿qué forma de la conjunción 'y' se utiliza para evitar cacofonía?"

explicacion: |
  Se utiliza 'e' en lugar de 'y' cuando el término siguiente comienza por 'i' o 'hi' para evitar la repetición de sonidos vocálicos iguales (cacofonía).
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["independencia", "prueba_sintactica"]

variables:
  parte1: uno_de(["Juan corre", "María lee", "Pedro come"])
  parte2: uno_de(["Ana duerme", "Luis trabaja", "Sofía estudia"])

respuesta: verdadero
tipo: vf

enunciado: "En una coordinada copulativa, es posible invertir el orden de las partes ('{parte1} y {parte2}' por '{parte2} y {parte1}') sin alterar la relación sintáctica fundamental."

explicacion: |
  Verdadero. La independencia de las partes permite invertir el orden manteniendo la adición de información, a diferencia de las subordinadas donde el orden es más rígido.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["comparacion", "subordinacion"]

variables:
  ejemplo_copulativa: "Estudio y trabajo"
  ejemplo_subordinada: "Estudio porque necesito aprobar"

respuesta: verdadero
tipo: vf

enunciado: "La diferencia principal entre 'Estudio y trabajo' (copulativa) y 'Estudio porque necesito aprobar' (subordinada causal) es que en la primera no hay dependencia jerárquica entre los verbos."

explicacion: |
  Verdadero. En la coordinada, ambas acciones son independientes. En la subordinada, una depende de la otra para completar su sentido.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "estructura"]

variables:
  verbo: uno_de(["come", "lee", "corre"])
  sujeto1: uno_de(["Pedro", "María", "Juan"])
  sujeto2: uno_de(["Ana", "Luis", "Sofía"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Pedro come pan y Ana queso', se ha producido una elisión del verbo en la segunda parte, pero sigue siendo una coordinada copulativa."

explicacion: |
  Verdadero. La elisión de elementos repetidos (como el verbo) es común en las coordinadas copulativas y no cambia su naturaleza sintáctica.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["identificacion", "distractores"]

variables:
  correcta: "y"
  incorrecta: uno_de(["pero", "o", "sino"])
  oracion: "Juan corre {incorrecta} María camina."

respuesta: incorrecta
tipo: input

enunciado: "En la oración 'Juan corre {incorrecta} María camina', ¿qué nexo se usa que NO es copulativo?"

explicacion: |
  El nexo '{incorrecta}' es adversativo o disyuntivo, no copulativo. Las copulativas usan 'y', 'e' o 'ni'.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["estructura", "definicion"]

variables:
  minimo: 2

respuesta: 2
tipo: input

enunciado: "¿Cuál es el número mínimo de partes (oraciones simples o sintagmas) que deben unirse para formar una coordinada copulativa?"

explicacion: |
  Se necesitan al menos dos partes. La coordinación implica la unión de dos o más elementos de igual jerarquía.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["ejemplos", "literatura"]

variables:
  autor: uno_de(["Borges", "Cortázar", "Bianchi", "Sábato"])
  nexo: "y"

respuesta: verdadero
tipo: vf

enunciado: "En la literatura argentina, es común encontrar coordinadas copulativas con el nexo 'y' para crear ritmo o sumar imágenes, como en 'El sol brillaba {nexo} la brisa refrescaba'."

explicacion: |
  Verdadero. Autores argentinos utilizan frecuentemente estas estructuras para dar fluidez y adición de sensaciones en sus textos.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["sintaxis", "analisis"]

variables:
  sujeto1: uno_de(["Los pibes", "El equipo", "La gente"])
  verbo1: uno_de(["jugó", "ganó", "perdió"])
  nexo: "y"
  sujeto2: uno_de(["nosotros", "ellos", "ustedes"])
  verbo2: uno_de(["miramos", "observaron", "escucharon"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Los pibes jugaron y nosotros miramos', ambas partes son sintácticamente independientes."

explicacion: |
  Verdadero. Cada parte tiene su propio sujeto y verbo, y están unidas por un nexo copulativo, manteniendo su independencia.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "basico"
  tags: ["identificacion", "lista"]

variables:
  nexo: uno_de(["y", "e"])
  oracion: "Vi el mar {nexo} la montaña."

respuesta: verdadero
tipo: vf

enunciado: "La oración 'Vi el mar {nexo} la montaña' es una coordinada copulativa."

explicacion: |
  Verdadero. El nexo 'y' o 'e' une dos objetos directos (o proposiciones elípticas) de igual jerarquía.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "sujeto"]

variables:
  verbo: uno_de(["come", "duerme", "trabaja"])
  sujeto: uno_de(["Pedro", "María", "Juan"])

respuesta: verdadero
tipo: vf

enunciado: "En 'Pedro come y duerme', se ha elidido el sujeto en la segunda parte, pero sigue siendo una coordinada copulativa de verbos."

explicacion: |
  Verdadero. La elisión del sujeto es válida en coordinadas copulativas cuando el sujeto es el mismo para ambas acciones.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "avanzado"
  tags: ["comparacion", "causalidad"]

variables:
  ejemplo_copulativa: "Estudio y trabajo"
  ejemplo_subordinada: "Estudio porque trabajo"

respuesta: verdadero
tipo: vf

enunciado: "En 'Estudio y trabajo', no hay causa-efecto entre las partes, a diferencia de 'Estudio porque trabajo'."

explicacion: |
  Verdadero. La coordinada copulativa suma acciones sin establecer relación causal. La subordinada causal establece una dependencia de razón.
```

```
metadata:
  materia: "Lengua"
  tema: "coordinadas_copulativas"
  nivel: "intermedio"
  tags: ["elision", "verbo"]

variables:
  verbo: uno_de(["come", "lee", "corre"])

respuesta: verdadero
tipo: vf

enunciado: "Es correcto omitir el verbo en la segunda parte de una coordinada copulativa si se sobreentiende, como en 'Pedro come y Ana [come] queso'."

explicacion: |
  Verdadero. La elisión del verbo es una práctica común para evitar repeticiones y hacer el habla más fluida, sin alterar la coordinación.
```

