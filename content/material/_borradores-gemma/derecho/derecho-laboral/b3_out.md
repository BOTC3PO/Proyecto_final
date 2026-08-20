### 1 — El objeto del Derecho Laboral
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["definicion", "relacion_laboral"]

respuesta: "subordinación"
tipo: completar
respuestas_validas: ["subordinación", "subordinacion"]

enunciado: "A diferencia del derecho civil, donde prima la autonomía de la voluntad, el derecho laboral se caracteriza por la existencia de un vínculo de ___ entre el trabajador y el empleador."

explicacion: |
  El elemento esencial que distingue la relación laboral de un contrato de servicios profesionales es la subordinación (o dependencia), donde el trabajador está sujeto a las órdenes y dirección del empleador.
```

### 2 — ¿Es el Derecho Laboral una rama autónoma?
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["naturaleza_juridica"]

respuesta: verdadero
tipo: vf

enunciado: "¿El Derecho Laboral es una rama autónoma del Derecho, con sus propios principios y normas, o es simplemente una extensión del Derecho Civil?"

explicacion: |
  El Derecho Laboral es autónomo porque posee principios propios (como el principio protector) y un objeto de estudio específico que busca equilibrar la desigualdad natural entre empleador y trabajador.
```

### 3 — Diferencia con el Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["distinciones", "contratos"]

variables:
  escenario: uno_de([
    ["Contrato de Locación de Servicios (Civil)", "Civil"],
    ["Contrato de Trabajo (Laboral)", "Laboral"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona es contratada para realizar una tarea específica, pero no está sujeta a horarios, no recibe órdenes directas y utiliza sus propios medios, ¿bajo qué rama del derecho se encuadra principalmente esta relación?"

explicacion: |
  En el escenario seleccionado ({escenario[0]}), la ausencia de subordinación y la autonomía técnica desplazan la relación al ámbito del Derecho Civil.
```

### 4 — Principios del Derecho Laboral
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["principios", "proteccion"]

respuesta: "Principio Protector"
tipo: completar
respuestas_validas: ["Principio Protector", "Principio de Protección"]

enunciado: "El principio que busca compensar la desigualdad económica y de poder entre el trabajador y el empleador se denomina ___."

explicacion: |
  El principio protector es la columna vertebral del derecho laboral y se manifiesta en reglas como 'in dubio pro operario'.
```

### 5 — Elementos de la relación laboral
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["elementos", "requisitos"]

variables:
  orden_correcta: ["Prestación personal", "Subordinación", "Remuneración"]

respuesta: orden_correcta
tipo: ordenar
opciones_explicitas: ["Prestación personal", "Subordinación", "Remuneración"]

enunciado: "Para que exista un contrato de trabajo, deben concurrir tres elementos esenciales. Ordénalos según la lógica de la existencia de la prestación, la dependencia y la contraprestación:"

explicacion: |
  Para que se configure el contrato de trabajo, primero debe haber una prestación personal (el trabajador), que debe ser bajo subordinación (el control del empleador) y siempre a cambio de una remuneración.
```