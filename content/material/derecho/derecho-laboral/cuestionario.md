# Derecho — Derecho laboral (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "regula la relación entre empleador y trabajador"
tipo: completar
respuestas_validas:
  - "regula la relación entre empleador y trabajador"
  - "regula la relación entre empleador y trabajador"

enunciado: "El Derecho Laboral es la rama del derecho que ___."

explicacion: |
  El derecho laboral tiene como objeto principal regular las relaciones jurídicas que surgen entre el empleador y el trabajador.
```

### 2 — Elementos del Contrato de Trabajo

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "elementos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["prestación de servicios", "subordinación", "remuneración"], ["prestación de servicios", "autonomía", "remuneración"]]

opciones_explicitas: ["prestación de servicios, subordinación y remuneración", "prestación de servicios, autonomía y remuneración", "solo prestación de servicios"]

respuesta: "prestación de servicios, subordinación y remuneración"
tipo: mc

enunciado: "Para que exista un contrato de trabajo, deben concurrir tres elementos esenciales. Según el escenario planteado, estos son: {datos[escenario_idx][0]}, {datos[escenario_idx][1]} y {datos[escenario_idx][2]}."

explicacion: |
  La subordinación es el elemento distintivo que diferencia un contrato de trabajo de un contrato de servicios profesionales.
```

### 3 — Verdad o Falso: Sujeción a la autoridad

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["subordinacion", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "En una relación laboral, el trabajador está sujeto a la dirección y mando del empleador (subordinación)."

explicacion: |
  La subordinación jurídica es la facultad del empleador de dar órdenes y la obligación del trabajador de acatarlas.
```

### 4 — Sujetos de la Relación Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["sujetos", "terminologia"]

respuesta: "Trabajador"
tipo: mc
opciones_explicitas: ["Trabajador", "Sindicato", "Estado", "Proveedor"]

enunciado: "La persona física que presta un servicio personal bajo dependencia es el ___."

explicacion: |
  El trabajador es el sujeto que aporta su fuerza de trabajo a cambio de una contraprestación económica.
```

### 5 — Jerarquía de Normas Laborales

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

opciones_explicitas: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]

respuesta_orden: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]
tipo: ordenar

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía en el ámbito laboral:"

explicacion: |
  En el derecho laboral rige el principio de norma más favorable, pero la jerarquía normativa establece el orden de validez de las fuentes.
```

### 6 — El contrato de trabajo

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "relacion_laboral"]

respuesta: "subordinación"
tipo: completar
respuestas_validas:
  - "subordinación"
  - "subordinacion"

enunciado: "Para que exista un contrato de trabajo, debe existir una prestación de servicios personales por parte del trabajador, una remuneración y un elemento esencial llamado ___."

explicacion: |
  La subordinación es el elemento que distingue la relación laboral de la prestación de servicios profesionales independientes. Implica la facultad del empleador de dar órdenes y la obligación del trabajador de cumplirlas.
```

### 7 — ¿Es una relación laboral?

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["elementos_esenciales", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si una persona presta servicios de forma autónoma, con sus propios medios, sin cumplir un horario impuesto y sin recibir órdenes directas, ¿se configura un contrato de trabajo?"

explicacion: |
  Falso. Al no existir subordinación ni dependencia jerárquica, se trata de una relación de carácter civil o comercial (prestación de servicios), no laboral.
```

### 8 — Indemnización por despido

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["despido", "indemnizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["despido_sin_causa", "indemnización_total"], ["renuncia_voluntaria", "sin_indemnización"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["indemnización_total", "sin_indemnización", "pago_de_salarios_pendientes", "solo_vacaciones"]

enunciado: "Un trabajador es despedido de forma arbitraria (sin causa justificada) tras 2 años de servicio. Según el escenario seleccionado, ¿qué derecho le corresponde principalmente?"

pasos:
  - "Determinar si el despido fue con o sin causa."
  - "Verificar la antigüedad del trabajador."
  - "Aplicar la normativa sobre indemnizaciones por despido injustificado."

explicacion: |
  En el caso de despido sin causa, el trabajador tiene derecho a una indemnización por los daños causados por la ruptura unilateral del vínculo.
```

### 9 — Proceso de una sanción disciplinaria

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["procedimiento", "disciplina"]

respuesta_orden: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]
tipo: ordenar
opciones_explicitas: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]

enunciado: "Ordene cronológicamente los pasos que debe seguir un empleador para aplicar una sanción disciplinaria válida sin vulnerar el debido proceso:"

explicacion: |
  El empleador primero debe comunicar la falta, permitir que el trabajador dé su versión (derecho a defensa) y, finalmente, decidir la sanción proporcional.
```

### 10 — Salario Mínimo y Remuneración

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["salario", "remuneracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["$500", "es_ilegal"], ["$1200", "es_legal"]]
  ley_minima: 1000

respuesta: "es_ilegal"
tipo: mc
opciones_explicitas: ["es_ilegal", "es_legal"]

enunciado: "Si el salario mínimo legal vigente es de {ley_minima}, un empleador ofrece un sueldo de {casos[caso_idx][0]} por una jornada completa. ¿Cuál es la situación jurídica de este salario?"

explicacion: |
  El salario no puede ser inferior al mínimo establecido por la ley para la jornada completa. Si la oferta es menor, se considera una violación a los derechos laborales.
```

### 11 — El objeto del Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["definicion", "relacion_laboral"]

respuesta: "subordinación"
tipo: completar
respuestas_validas:
  - "subordinación"
  - "subordinacion"

enunciado: "A diferencia del derecho civil, donde prima la autonomía de la voluntad, el derecho laboral se caracteriza por la existencia de un vínculo de ___ entre el trabajador y el empleador."

explicacion: |
  El elemento esencial que distingue la relación laboral de un contrato de servicios profesionales es la subordinación (o dependencia), donde el trabajador está sujeto a las órdenes y dirección del empleador.
```

### 12 — ¿Es el Derecho Laboral una rama autónoma?

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

### 13 — Diferencia con el Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["distinciones", "contratos"]

variables:
  escenario: uno_de([["Contrato de Locación de Servicios (Civil)", "Civil"], ["Contrato de Trabajo (Laboral)", "Laboral"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona es contratada para realizar una tarea específica, pero no está sujeta a horarios, no recibe órdenes directas y utiliza sus propios medios, ¿bajo qué rama del derecho se encuadra principalmente esta relación?"

explicacion: |
  En el escenario seleccionado ({escenario[0]}), la ausencia de subordinación y la autonomía técnica desplazan la relación al ámbito del Derecho Civil.
```

### 14 — Principios del Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["principios", "proteccion"]

respuesta: "Principio Protector"
tipo: completar
respuestas_validas:
  - "Principio Protector"
  - "Principio de Protección"

enunciado: "El principio que busca compensar la desigualdad económica y de poder entre el trabajador y el empleador se denomina ___."

explicacion: |
  El principio protector es la columna vertebral del derecho laboral y se manifiesta en reglas como 'in dubio pro operario'.
```

### 15 — Elementos de la relación laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["elementos", "requisitos"]

variables:
  orden_correcta: ["Prestación personal", "Subordinación", "Remuneración"]

respuesta_orden: orden_correcta
tipo: ordenar
opciones_explicitas: ["Prestación personal", "Subordinación", "Remuneración"]

enunciado: "Para que exista un contrato de trabajo, deben concurrir tres elementos esenciales. Ordénalos según la lógica de la existencia de la prestación, la dependencia y la contraprestación:"

explicacion: |
  Para que se configure el contrato de trabajo, primero debe haber una prestación personal (el trabajador), que debe ser bajo subordinación (el control del empleador) y siempre a cambio de una remuneración.
```

### 16 — Naturaleza del Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["caracteristicas", "naturaleza_juridica"]

respuesta: falso
tipo: vf

enunciado: "El Derecho Laboral se caracteriza por ser una rama del Derecho Privado, similar al Derecho Civil, donde las partes actúan en igualdad de condiciones."

explicacion: |
  El Derecho Laboral es una rama del Derecho Social/Público que busca compensar la desigualdad económica entre empleador y trabajador mediante normas de orden público e irrenunciables.
```

### 17 — Diferencia con el Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["contratos", "derecho_civil"]

variables:
  escenario: uno_de([["Contrato de locación de servicios (Civil)", "Civil"], ["Contrato de trabajo (Laboral)", "Laboral"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona presta un servicio de manera autónoma, sin dependencia ni subordinación, bajo un contrato de locación de servicios, la relación se rige principalmente por el Derecho {escenario[1]}."

explicacion: |
  La subordinación técnica, jurídica y económica es el elemento distintivo que traslada la relación del ámbito Civil al ámbito Laboral.
```

### 18 — Elementos del Contrato de Trabajo

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "subordinacion"]

respuestas_validas:
  - "subordinación"
  - "dependencia"
respuesta: "subordinación"
tipo: completar

enunciado: "A diferencia de los contratos de naturaleza civil, el contrato de trabajo requiere la existencia de una relación de dependencia y, fundamentalmente, la ___ del trabajador hacia el empleador."

explicacion: |
  La subordinación es el eje central que distingue al trabajador de un contratista independiente.
```

### 19 — Principios del Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["principios", "proteccion"]

respuesta: "Principio Protector"
tipo: mc
opciones_explicitas: ["Principio de Autonomía de la Voluntad", "Principio Protector", "Principio de Congruencia", "Principio de Legalidad"]

enunciado: "En el Derecho Civil rige la autonomía de la voluntad; sin embargo, en el Derecho Laboral, para equilibrar la desigualdad de las partes, rige el:"

explicacion: |
  El Principio Protector (en sus variantes in dubio pro operario, de la norma más favorable y de la condición más beneficiosa) es la piedra angular del Derecho Laboral.
```

### 20 — Jerarquía de Normas en el Trabajo

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["normativa", "jerarquia"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Contrato Individual"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Contrato Individual"]

enunciado: "Ordene las normas de mayor a menor jerarquía en el ordenamiento jurídico laboral, considerando el principio de la norma más favorable:"

pasos:
  - "Identificar la norma de máxima jerarquía (Constitución)."
  - "Ubicar los tratados con jerarquía constitucional."
  - "Colocar la ley general de fondo."
  - "Incluir la norma negociada por sindicatos."
  - "Finalizar con el acuerdo particular entre partes."

explicacion: |
  Aunque el principio de la norma más favorable permite aplicar la norma más beneficiosa al trabajador incluso si es de menor jerarquía formal, la estructura jerárquica sigue este orden descendente.
```

### 21 — El contrato de trabajo

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "elementos"]

variables:
  datos: [["Juan trabaja como cajero en un súper con un sueldo fijo y bajo dependencia", "contrato"], ["Ana presta servicios profesionales de consultoría sin horario fijo", "no_contrato"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["contrato", "no_contrato"]

enunciado: "Analice el siguiente caso: {datos[idx][0]}. ¿Se ha configurado una relación de dependencia laboral que dé lugar a un contrato de trabajo?"

explicacion: |
  Para que exista un contrato de trabajo, debe haber subordinación técnica, jurídica y económica. En el primer caso, la dependencia y la remuneración fija lo confirman.
```

### 22 — Jornada laboral y horas extra

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["jornada", "horas_extra"]

variables:
  datos: [["8 horas", "8"], ["9 horas", "9"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - 2
respuesta: 2
tipo: completar
enunciado: "Si la jornada legal es de {datos[idx][0]} horas diarias y el trabajador realiza {datos[idx][0]} horas, ¿se han devengado horas extraordinarias?"

explicacion: |
  Si la jornada trabajada excede el límite legal establecido, el excedente debe pagarse como hora extraordinaria según la legislación vigente.
```

### 23 — Elementos del contrato

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "completar"]

respuesta: "remuneración"
tipo: completar
respuestas_validas:
  - "remuneración"

enunciado: "En un contrato de trabajo, la contraprestación económica que recibe el trabajador por sus servicios se denomina ___."

explicacion: |
  La remuneración es el elemento esencial que distingue al contrato de trabajo de otras formas de servicios, como la voluntariedad.
```

### 24 — Principios del Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["principios", "irrenunciabilidad"]

respuesta: "irrenunciabilidad"
tipo: mc
opciones_explicitas: ["irrenunciabilidad", "continuidad", "primacía", "prooperidad"]

enunciado: "El principio que establece que el trabajador no puede privarse voluntariamente de las garantías y derechos mínimos establecidos en la ley se denomina principio de ___."

explicacion: |
  El principio de irrenunciabilidad protege al trabajador frente a posibles presiones del empleador para aceptar condiciones inferiores a las legales.
```

### 25 — Proceso de extinción contractual

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["despido", "procedimiento"]

respuesta_orden: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]
tipo: ordenar
opciones_explicitas: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]

enunciado: "Ordene cronológicamente los pasos habituales en un proceso de despido con causa:"

explicacion: |
  Primero se debe comunicar la causa, luego se debe respetar el preaviso (si corresponde) y finalmente se procede al pago de la liquidación final.
```
