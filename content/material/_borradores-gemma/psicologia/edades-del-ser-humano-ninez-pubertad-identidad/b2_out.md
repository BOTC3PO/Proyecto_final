### 1 — La etapa de la niñez
```
metadata:
  materia: "psicologia"
  tema: "niñez"
  nivel: "basico"
  tags: ["desarrollo", "niñez"]

enunciado: "Durante la niñez, el desarrollo se caracteriza por un crecimiento físico constante y el perfeccionamiento de habilidades motoras. Si un niño de 7 años desarrolla la capacidad de seguir reglas complejas en un juego, estamos observando un avance en su desarrollo ___."

respuestas_validas: ["cognitivo", "motor", "emocional"]

respuesta: "cognitivo"
tipo: completar

explicacion: |
  El desarrollo cognitivo se refiere a la evolución de los procesos mentales como el pensamiento, la lógica y la comprensión de reglas.
```

### 2 — Cambios en la pubertad
```
metadata:
  materia: "psicologia"
  tema: "pubertad"
  nivel: "intermedio"
  tags: ["cambios_fisicos", "hormonas"]

variables:
  escenario: uno_de([
    ["Aumento de estatura y vello corporal", "cambios físicos"],
    ["Cambios en el tono de voz y estructura ósea", "cambios físicos"],
    ["Desarrollo de caracteres sexuales secundarios", "cambios físicos"]
  ])

enunciado: "En la pubertad, el sistema endocrino libera hormonas que provocan el proceso descrito como: {escenario[0]}."

opciones_explicitas: ["cambios físicos", "cambios psicológicos", "cambios sociales"]

respuesta: escenario[1]
tipo: mc

explicacion: |
  La pubertad es la etapa de transición biológica donde las hormonas activan los caracteres sexuales secundarios.
```

### 3 — Identidad y autoconcepto
```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "avanzado"
  tags: ["identidad", "adolescencia"]

variables:
  caso: uno_de([
    ["Un adolescente que busca activamente sus valores y metas", "identidad_estable"],
    ["Un adolescente que experimenta crisis de roles constantes", "identidad_en_crisis"],
    ["Un adolescente que adopta la identidad de sus padres sin cuestionar", "identidad_difusa"]
  ])

enunciado: "Analizamos el caso de un individuo que se encuentra en la etapa de formación de la identidad. Según el modelo de desarrollo, el perfil de: {caso[0]} se clasifica como ___."

opciones_explicitas: ["identidad_estable", "identidad_en_crisis", "identidad_difusa"]

respuesta: caso[1]
tipo: mc

explicacion: |
  La formación de la identidad implica la integración de la personalidad y la exploración de valores propios frente a los sociales.
```

### 4 — Secuencia del desarrollo humano
```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

respuesta: ["Infancia", "Niñez", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del desarrollo humano según la psicología evolutiva:"

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible desde el nacimiento hasta la madurez.
```

### 5 — Verdad o Falso: Identidad
```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "basico"
  tags: ["identidad", "falso"]

enunciado: "La identidad es un concepto estático que se define completamente al finalizar la niñez y no sufre cambios durante la adolescencia."

respuesta: falso
tipo: vf

explicacion: |
  La identidad es un proceso dinámico y continuo que se reconfigura constantemente, especialmente durante la transición de la pubertad a la adolescencia.
```