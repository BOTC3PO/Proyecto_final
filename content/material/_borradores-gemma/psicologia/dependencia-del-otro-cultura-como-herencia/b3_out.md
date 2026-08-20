### 1 — El mito de la autonomía absoluta
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["subjetividad", "cultura", "socializacion"]

respuesta: falso
tipo: vf

enunciado: "El desarrollo de la identidad es un proceso puramente biológico e individual, donde la cultura y los otros no intervienen en la formación del yo."

explicacion: |
  La subjetividad se construye en la trama de los vínculos. No existe un "yo" previo a la interacción con el otro y con la cultura que nos constituye.
```

### 2 — La herencia cultural como proceso
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["herencia", "socializacion", "identidad"]

variables:
  escenario: uno_de([
    ["el lenguaje", "la comunicación"],
    ["las normas", "la conducta"],
    ["los valores", "la moral"]
  ])

respuesta: escenario[0]
tipo: completar
respuestas_validas: ["el lenguaje", "la comunicación", "las normas", "la conducta", "los valores", "la moral"]

enunciado: "La cultura se transmite a través de la socialización; por ejemplo, mediante ___ es como el sujeto internaliza la estructura del lenguaje de su comunidad."

explicacion: |
  La cultura no es solo un conjunto de datos, sino que se encarna en herramientas simbólicas como el lenguaje, que preexisten al sujeto y lo moldean.
```

### 3 — Confusión sobre la "influencia" vs "constitución"
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["subjetividad", "ontogenia", "cultura"]

respuesta: "Constitución de la subjetividad"
tipo: mc
opciones_explicitas: ["Influencia externa sobre un yo preexistente", "Constitución de la subjetividad", "Adaptación biológica al medio", "Imitación de conductas"]

enunciado: "Desde la perspectiva psicosocial, la relación entre el individuo y la cultura no es una simple 'influencia' de afuera hacia adentro, sino que se define como la:"

explicacion: |
  No somos un envase vacío que recibe información; la cultura nos constituye, es decir, nos da las herramientas para que el "yo" pueda existir.
```

### 4 — El proceso de socialización
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "etapas", "identidad"]

respuesta: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]
tipo: ordenar
opciones_explicitas: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]

enunciado: "Ordene cronológicamente los procesos que permiten la formación del sujeto a través de la herencia cultural:"

explicacion: |
  Primero se interactúa con los otros (familia, escuela), luego se internalizan las normas de esa cultura y, finalmente, se consolida una identidad propia dentro de ese marco.
```

### 5 — La paradoja de la identidad
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["identidad", "otredad", "cultura"]

variables:
  caso: uno_de([
    ["el individuo", "la cultura"],
    ["el sujeto", "la sociedad"]
  ])

respuesta: caso[1]
tipo: completar
respuestas_validas: ["el individuo", "la cultura", "el sujeto", "la sociedad"]

enunciado: "Para que un ___ pueda desarrollar una identidad única, paradójicamente, debe primero estar profundamente arraigado en una ___ que le provea símbolos y significados."

explicacion: |
  La paradoja de la identidad radica en que para ser "único" necesitamos un marco común (cultura) que nos permita distinguirnos de los demás.
```