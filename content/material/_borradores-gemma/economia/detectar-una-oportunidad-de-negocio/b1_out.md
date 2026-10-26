### 1 — Concepto de oportunidad de negocio
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "mercado"]

respuesta: "oportunidad de negocio"
tipo: completar
respuestas_validas: ["oportunidad de negocio"]

enunciado: "Una ___ es la identificación de una necesidad insatisfecha o un problema no resuelto en un mercado específico que puede ser aprovechado para crear valor."

explicacion: |
  La oportunidad de negocio surge cuando se detecta un segmento de clientes con una necesidad que no está siendo cubierta adecuadamente por la oferta actual.
```

### 2 — Identificación de necesidades
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "clientes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un grupo de personas busca comida saludable pero no hay locales cerca de su oficina.", "necesidad de conveniencia y salud"],
    ["Los usuarios de una app de transporte se quejan de los altos precios en hora pico.", "necesidad de economía"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["necesidad de conveniencia y salud", "necesidad de economía", "necesidad de estatus", "necesidad de entretenimiento"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]}. ¿Qué tipo de oportunidad se detecta principalmente?"

explicacion: |
  En el escenario seleccionado, el problema identificado apunta directamente a la {escenarios[escenario_idx][1]}.
```

### 3 — Validación de mercado
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "riesgo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que una idea de negocio solo se convierte en una oportunidad real si existe un grupo de clientes dispuestos a pagar por la solución propuesta?"

explicacion: |
  Correcto. Una idea sin mercado potencial (clientes dispuestos a pagar) es solo una idea, no una oportunidad de negocio viable.
```

### 4 — Pasos para la detección
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["proceso", "metodología"]

respuesta: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]
tipo: ordenar
opciones_explicitas: ["Observación del entorno", "Identificación del problema", "Análisis de la competencia", "Validación con clientes"]

enunciado: "Ordena cronológicamente los pasos lógicos para detectar y validar una oportunidad de negocio:"

explicacion: |
  Primero se observa el entorno, luego se define el problema, se analiza qué hace la competencia y finalmente se valida con usuarios reales.
```

### 5 — Segmentación de mercado
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["segmentación", "público"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Vender juguetes educativos para niños de 0 a 5 años.", "segmento infantil"],
    ["Ofrecer software contable para pequeñas empresas de servicios.", "segmento empresarial"]
  ]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["segmento infantil", "segmento empresarial", "segmento de lujo", "segmento masivo"]

enunciado: "Si el problema detectado es: {casos[caso_idx][0]}. ¿A qué grupo pertenece el mercado objetivo?"

explicacion: |
  La segmentación permite enfocar los esfuerzos de marketing y producto hacia el {casos[caso_idx][1]}.
```