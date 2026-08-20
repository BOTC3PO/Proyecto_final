### 1 — Naturaleza del Derecho Laboral
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

### 2 — Diferencia con el Derecho Civil
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["contratos", "derecho_civil"]

variables:
  escenario: uno_de([
    ["Contrato de locación de servicios (Civil)", "Civil"],
    ["Contrato de trabajo (Laboral)", "Laboral"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona presta un servicio de manera autónoma, sin dependencia ni subordinación, bajo un contrato de locación de servicios, la relación se rige principalmente por el Derecho {escenario[1]}."

explicacion: |
  La subordinación técnica, jurídica y económica es el elemento distintivo que traslada la relación del ámbito Civil al ámbito Laboral.
```

### 3 — Elementos del Contrato de Trabajo
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "subordinacion"]

respuestas_validas: ["subordinación", "dependencia"]
respuesta: "subordinación"
tipo: completar

enunciado: "A diferencia de los contratos de naturaleza civil, el contrato de trabajo requiere la existencia de una relación de dependencia y, fundamentalmente, la ___ del trabajador hacia el empleador."

explicacion: |
  La subordinación es el eje central que distingue al trabajador de un contratista independiente.
```

### 4 — Principios del Derecho Laboral
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

### 5 — Jerarquía de Normas en el Trabajo
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["normativa", "jerarquia"]

respuesta: ["Constitución Nacional", "Tratados Internacionales", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Contrato Individual"]
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