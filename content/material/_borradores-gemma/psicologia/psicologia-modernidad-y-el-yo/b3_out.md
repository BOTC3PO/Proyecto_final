### 1 — El origen del "Yo" moderno
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["historia", "subjetividad", "modernidad"]

tipo: mc
opciones_explicitas: ["La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad.", "El concepto de 'yo' ha sido inmutable y constante en toda la historia de la humanidad.", "El 'yo' es una entidad biológica que no depende de contextos culturales.", "La psicología moderna descubrió el 'yo', pero este siempre existió de la misma forma."]

enunciado: "Un error común es creer que la experiencia de la individualidad es una constante biológica. Sin embargo, la noción de un 'yo' centrado en la autonomía y la introspección es:"

respuesta: "La noción de un 'yo' individual y autónomo es una construcción histórica de la modernidad."

explicacion: |
  La modernidad, con el giro subjetivo (Descartes, etc.), consolidó la idea de un sujeto separado del cosmos y de la comunidad, algo que no era la norma en las cosmologías pre-modernas.
```

### 2 — ¿Es el 'yo' una esencia fija?
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "basico"
  tags: ["subjetividad", "esencia"]

tipo: vf

enunciado: "Desde la perspectiva de la psicología moderna y la construcción del sujeto, se considera que el 'yo' es una esencia inmutable y preexistente que la psicología debe 'descubrir'."

respuesta: falso

explicacion: |
  La psicología moderna entiende al 'yo' como un proceso dinámico y una construcción, no como una esencia fija o una sustancia metafísica que permanece igual a lo largo de la vida.
```

### 3 — Evolución del concepto de sujeto
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["historia", "subjetividad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["La subjetividad pre-moderna", "La subjetividad moderna"],
    ["Se basaba en el lugar social y el orden cósmico.", "Se basa en la introspección y la autonomía individual."]
  ]

tipo: ordenar
opciones_explicitas: ["La subjetividad pre-moderna", "La subjetividad moderna"]
respuesta: ["La subjetividad pre-moderna", "La subjetividad moderna"]

enunciado: "Ordene cronológicamente los modelos de subjetividad según la evolución histórica del concepto de 'yo':"

pasos:
  - "Identifique el modelo basado en la pertenencia a un orden social/cósmico."
  - "Identifique el modelo basado en la autonomía del individuo."

explicacion: |
  En la pre-modernidad, el sujeto se definía por su lugar en un orden dado (Dios, la naturaleza, la comunidad). La modernidad desplaza ese centro hacia el individuo autónomo.
```

### 4 — El error de la "naturaleza humana" única
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "intermedio"
  tags: ["errores_conceptuales", "cultura"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["un sujeto medieval", "un sujeto contemporáneo"],
    ["se define por su rol en la comunidad y la tradición.", "se define por su identidad personal y deseos internos."]
  ]

tipo: completar
respuestas_validas: ["se define por su rol en la comunidad y la tradición.", "se define por su identidad personal y deseos internos."]
respuesta: casos[caso_idx][1]

enunciado: "Para entender el error de la universalización del 'yo', comparemos: mientras que ___ , ___"

explicacion: |
  Confundir la psicología moderna con una verdad universal es un error: lo que hoy llamamos 'identidad' es un producto de la modernidad y no necesariamente una constante humana universal.
```

### 5 — La paradoja de la autonomía
```
metadata:
  materia: "psicologia"
  tema: "psicologia_modernidad_y_el_yo"
  nivel: "avanzado"
  tags: ["modernidad", "sujeto"]

tipo: mc
opciones_explicitas: ["La idea de un 'yo' totalmente aislado de la cultura.", "La idea de que el 'yo' es una construcción social e histórica.", "La idea de que el 'yo' es una entidad puramente biológica.", "La idea de que la psicología no tiene relación con la historia."]

enunciado: "Un error conceptual frecuente en la psicología es tratar al sujeto como si su identidad fuera independiente de su contexto histórico. Esto implica ignorar que el 'yo' es:"

respuesta: "La idea de que el 'yo' es una construcción social e histórica."

explicacion: |
  La noción de individuo es un producto histórico. No se puede estudiar la psicología ignorando que las categorías de 'persona' y 'sujeto' cambian según la época.
```