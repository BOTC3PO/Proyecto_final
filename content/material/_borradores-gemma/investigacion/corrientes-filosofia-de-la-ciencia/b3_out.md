### 1 — Falsacionismo vs Verificacionismo
```
metadata:
  materia: "investigacion"
  tema: "falsacionismo"
  nivel: "intermedio"
  tags: ["popper", "falsacionismo", "epistemologia"]

respuesta: falso
tipo: vf

enunciado: "Para Karl Popper, el criterio de demarcación de la ciencia es la capacidad de una teoría para ser verificada empíricamente de forma definitiva."

explicacion: |
  El falsacionismo de Popper sostiene que la ciencia no progresa mediante la verificación (que es lógicamente imposible para leyes universales), sino mediante la falsación: una teoría es científica si es capaz de ser refutada por un enunciado observacional.
```

### 2 — La naturaleza de los paradigmas
```
metadata:
  materia: "investigacion"
  tema: "paradigmas_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ciencia-normal"]

variables:
  escenario: uno_de([
    ["ciencia-normal", "periodo de estabilidad donde se trabaja bajo un paradigma establecido"],
    ["revolucion-cientifica", "periodo de crisis donde el paradigma actual es reemplazado"]
  ])

opciones_explicitas: ["ciencia-normal", "revolucion-cientifica"]

respuesta: escenario[0]
tipo: mc

enunciado: "Según Thomas Kuhn, el periodo en el que los científicos se dedican a resolver 'enigmas' dentro de un marco teórico aceptado se denomina: ___"

pasos:
  - "Identificar si el enunciado describe un periodo de estabilidad o de crisis."

explicacion: |
  En la {escenario[0]}, los científicos no cuestionan los fundamentos, sino que resuelven problemas dentro del modelo vigente. La ruptura de este estado da lugar a la revolución científica.
```

### 3 — El anarquismo de Feyerabend
```
metadata:
  materia: "investigacion"
  tema: "anarquismo_epistemologico"
  nivel: "avanzado"
  tags: ["feyerabend", "anarquismo", "metodologia"]

respuesta: "contra el método"
tipo: completar

respuestas_validas: ["contra el método", "pro-método", "sin método"]

enunciado: "El principio de 'contra el método' de Paul Feyerabend sugiere que no existe una regla metodológica única y universal que guíe todo progreso científico."

explicacion: |
  Feyerabend argumenta que la ciencia es una actividad pluralista y que imponer un método único (como el inductivismo o el falsacionismo) limitaría el progreso científico y la libertad de investigación.
```

### 4 — Diferencia entre Popper y Kuhn
```
metadata:
  materia: "investigacion"
  tema: "comparativa_popper_kuhn"
  nivel: "avanzado"
  tags: ["popper", "kuhn", "comparacion"]

variables:
  caso: uno_de([
    ["popper", "enfocado en la lógica de la justificación y la refutación"],
    ["kuhn", "enfocado en la historia y la sociología de la ciencia"]
  ])

opciones_explicitas: ["popper", "kuhn"]

respuesta: caso[0]
tipo: mc

enunciado: "Si un filósofo analiza la ciencia centrándose en la estructura lógica de las leyes y cómo estas pueden ser refutadas, está adoptando una perspectiva principalmente ___."

explicacion: |
  Mientras que Kuhn analiza cómo la comunidad científica cambia sus paradigmas (perspectiva histórica/sociológica), Popper se centra en la lógica de la validación de las teorías (perspectiva lógica/normativa).
```

### 5 — El proceso de cambio de paradigma
```
metadata:
  materia: "investigacion"
  tema: "ciclo_kuhn"
  nivel: "intermedio"
  tags: ["kuhn", "paradigmas", "ordenar"]

opciones_explicitas: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]

respuesta: ["Ciencia Normal", "Crisis", "Revolución Científica", "Nuevo Paradigma"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del ciclo de cambio de paradigma propuesto por Thomas Kuhn:"

pasos:
  - "Identificar el estado de estabilidad inicial."
  - "Identificar la aparición de anomalías que no pueden ser resueltas."
  - "Identificar el conflicto entre el modelo viejo y el nuevo."
  - "Identificar el resultado final del proceso."

explicacion: |
  El ciclo comienza con la Ciencia Normal, sigue con la Crisis (cuando las anomalías se acumulan), continúa con la Revolución Científica (el conflicto) y culmina con la instauración de un Nuevo Paradigma.
```