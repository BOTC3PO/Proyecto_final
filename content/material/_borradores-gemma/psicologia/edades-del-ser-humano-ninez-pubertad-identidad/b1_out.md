### 1 — Etapas del desarrollo
```
metadata:
  materia: "psicologia"
  tema: "edades_del_ser_humano"
  nivel: "basico"
  tags: ["desarrollo", "etapas"]

tipo: mc
opciones_explicitas: ["Niñez", "Pubertad", "Adultez", "Senectud"]

enunciado: "La etapa caracterizada por el crecimiento físico acelerado y la maduración de los órganos reproductores se denomina ________."

respuesta: "Pubertad"

explicacion: |
  La pubertad es el periodo de transición entre la niñez y la edad adulta, marcado por cambios hormonales y físicos significativos.
```

### 2 — Cambios biológicos
```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos"
  nivel: "basico"
  tags: ["biologia", "pubertad"]

tipo: vf

enunciado: "Durante la pubertad, los cambios físicos son exclusivamente externos y no afectan el sistema endocrino."

respuesta: falso

explicacion: |
  Falso. La pubertad es impulsada precisamente por cambios en el sistema endocrino (hormonas) que provocan cambios tanto internos como externos.
```

### 3 — Desarrollo de la identidad
```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Búsqueda de pertenencia a grupos", "Construcción de la autonomía personal"], ["Dependencia de la opinión parental", "Definición de valores propios"]]

tipo: completar
respuestas_validas: ["pertenencia", "autonomía", "dependencia", "valores"]

enunciado: "En la etapa de la adolescencia, el individuo suele transitar desde una etapa de {escenarios[escenario_idx][0]} hacia una fase de {escenarios[escenario_idx][1]}."

respuesta: "autonomía"

explicacion: |
  La identidad se construye mediante el proceso de diferenciación de las figuras de autoridad y la búsqueda de un sentido de autonomía.
```

### 4 — Secuencia del desarrollo
```
metadata:
  materia: "psicologia"
  tema: "secuencia_desarrollo"
  nivel: "basico"
  tags: ["orden", "etapas"]

tipo: ordenar
opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

enunciado: "Ordene cronológicamente las etapas del desarrollo humano desde el nacimiento hasta la madurez."

respuesta: ["Infancia", "Niñez", "Pubertad", "Adultez"]

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible de etapas sucesivas.
```

### 5 — Concepto de identidad
```
metadata:
  materia: "psicologia"
  tema: "identidad_personal"
  nivel: "intermedio"
  tags: ["identidad", "autoconcepto"]

tipo: mc
opciones_explicitas: ["Autoconcepto", "Identidad", "Personalidad", "Temperamento"]

enunciado: "El proceso mediante el cual una persona reconoce sus propios rasgos, valores y la continuidad de su 'yo' a través del tiempo se conoce como ________."

respuesta: "Identidad"

explicacion: |
  La identidad es la conciencia de ser uno mismo y la integración de los cambios experimentados durante el desarrollo.
```