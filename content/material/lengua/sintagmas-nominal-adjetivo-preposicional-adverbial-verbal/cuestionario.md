# Lengua — sintagmas nominal adjetivo preposicional adverbial verbal (cuestionario, 21 preguntas VBLang)

> Tema: `lengua/sintagmas-nominal-adjetivo-preposicional-adverbial-verbal`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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
