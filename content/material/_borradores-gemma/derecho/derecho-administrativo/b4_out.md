### 1 — Diferencia con el Derecho Privado
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["naturaleza_juridica", "derecho_privado"]

respuesta: "Derecho Administrativo"
tipo: "completar"
respuestas_validas: ["Derecho Administrativo"]

enunciado: "Mientras que el Derecho Privado regula las relaciones entre particulares, el ___ regula la organización y actividad del Estado en su función pública."

explicacion: |
  El Derecho Administrativo es una rama del Derecho Público que se ocupa de la organización, funcionamiento, poderes y deberes de la Administración Pública y de la relación jurídica entre esta y los ciudadanos.
```

### 2 — Relación de Subordinación vs. Igualdad
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["principios", "derecho_privado"]

respuesta: falso
tipo: "vf"

enunciado: "En el Derecho Administrativo, la relación entre el Estado y el ciudadano es de igualdad absoluta, tal como ocurre en el Derecho Privado."

explicacion: |
  Falso. En el Derecho Administrativo rige el principio de supraestatalidad o prerrogativas de la Administración, lo que implica una relación de subordinación jurídica para asegurar el bien común, a diferencia de la igualdad de condiciones en el Derecho Privado.
```

### 3 — El Objeto de Estudio
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un contrato de alquiler entre dos vecinos", "Derecho Privado"],
    ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]
  ]

respuesta: escenario_idx_res[1]
tipo: "mc"
opciones_explicitas: ["escenario_idx_res[0]", "escenario_idx_res[1]"]

enunciado: "Identifique la situación que pertenece al ámbito del Derecho Administrativo: {escenario_idx_res[0]}"

variables_extra:
  escenario_idx_res: [["un contrato de alquiler entre dos vecinos", "Derecho Privado"], ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]]

explicacion: |
  El Derecho Administrativo regula los actos de la administración pública, como la emisión de licencias o permisos, mientras que los contratos entre particulares pertenecen al Derecho Privado.
```
*(Nota: Corregido el error de lógica de variable en el bloque anterior para cumplir la regla de indexado)*

### 3 — El Objeto de Estudio (Versión Corregida)
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  idx: uno_de([0, 1])
  datos: [["un contrato de alquiler entre dos vecinos", "Derecho Privado"], ["la concesión de una licencia de conducir por un municipio", "Derecho Administrativo"]]

respuesta: datos[idx][1]
tipo: "mc"
opciones_explicitas: ["Derecho Privado", "Derecho Administrativo"]

enunciado: "Si el caso es {datos[idx][0]}, ¿qué rama del derecho lo regula?"

explicacion: |
  El Derecho Administrativo regula los actos de la administración pública, como la emisión de licencias o permisos, mientras que los contratos entre particulares pertenecen al Derecho Privado.
```

### 4 — Jerarquía de Normas
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

respuesta: "Derecho Público"
tipo: "completar"
respuestas_validas: ["Derecho Público"]

enunciado: "A diferencia del Derecho Privado, el Derecho Administrativo se clasifica dentro del ___."

explicacion: |
  El Derecho Administrativo es parte del Derecho Público porque regula intereses generales y la estructura del Estado, donde el Estado actúa con potestades que no posee un particular.
```

### 5 — Elementos de la Actividad Administrativa
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "avanzado"
  tags: ["procedimiento", "orden"]

respuesta: ["Sujeto Activo (Estado)", "Sujeto Pasivo (Administrado)", "Objeto (Acto Administrativo)", "Motivación (Causa/Fin)"]
tipo: "ordenar"
opciones_explicitas: ["Sujeto Activo (Estado)", "Sujeto Pasivo (Administrado)", "Objeto (Acto Administrativo)", "Motivación (Causa/Fin)"]

enunciado: "Ordene los elementos esenciales que configuran la relación administrativa, partiendo desde la entidad que ejerce la función hasta la justificación del acto:"

pasos:
  - "Identificar quién actúa (Estado)"
  - "Identificar quién recibe la acción (Ciudadano)"
  - "Identificar el contenido del acto"
  - "Identificar la razón de ser del acto"

explicacion: |
  Para que exista la actividad administrativa, debe haber un sujeto estatal (activo) que interactúa con un ciudadano (pasivo) mediante un acto (objeto) que debe estar debidamente fundado (motivación).
```