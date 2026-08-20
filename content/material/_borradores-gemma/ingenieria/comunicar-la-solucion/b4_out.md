### 1 — Documentación técnica vs. Manual de usuario
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "comunicacion"]

respuesta: "especificaciones_tecnicas"
tipo: completar
respuestas_validas: ["especificaciones_tecnicas"]

enunciado: "Mientras que el manual de usuario está orientado al cliente final para la operación del producto, la documentación que detalla los parámetros de diseño, materiales y tolerancias para otros ingenieros se denomina ___."

explicacion: |
  Las especificaciones técnicas son documentos de ingeniería destinados a la fabricación y validación, a diferencia de los manuales de usuario que son guías de uso operativo.
```

### 2 — El propósito de un plano técnico
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "dibujo_tecnico"]

variables:
  es_informativo: true

respuesta: es_informativo
tipo: vf

enunciado: "¿El objetivo principal de un plano técnico es proporcionar una representación visual inequívoca que permita la fabricación exacta de una pieza, distinguiéndose de un boceto conceptual por su precisión y normalización?"

explicacion: |
  Un plano técnico sigue normas internacionales (como ISO o ANSI) para asegurar que cualquier fabricante pueda interpretar las dimensiones y tolerancias sin ambigüedad, a diferencia de un boceto.
```

### 3 — Elementos de una presentación de diseño
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "soft_skills"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["presentar_ante_inversores", "enfoque_negocio_y_viabilidad"],
    ["presentar_ante_equipo_de_fabricacion", "enfoque_tecnico_y_materiales"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["enfoque_negocio_y_viabilidad", "enfoque_tecnico_y_materiales"]

enunciado: "Si el objetivo de la presentación es para {escenarios[escenario_idx][0]}, el enfoque principal debe ser el {escenarios[escenario_idx][1]}, diferenciándose de una reunión de revisión de diseño técnica."

explicacion: |
  La audiencia determina el lenguaje y el contenido: los inversores buscan retorno de inversión y viabilidad, mientras que los técnicos buscan detalles de implementación.
```

### 4 — Jerarquía de la documentación de proyecto
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "orden"]

respuesta: ["memoria_descriptiva", "planos_detallados", "manual_de_mantenimiento"]
tipo: ordenar

opciones_explicitas: ["memoria_descriptiva", "planos_detallados", "manual_de_mantenimiento"]

enunciado: "Ordene los documentos de un proyecto de ingeniería desde la fase de diseño conceptual hasta la fase de post-implementación:"

explicacion: |
  Primero se describe la solución (memoria), luego se detalla para producción (planos) y finalmente se entrega al usuario para su cuidado (manual).
```

### 5 — El rol de la memoria descriptiva
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["informes", "memoria_descriptiva"]

respuesta: "justificar_decisiones"
tipo: completar
respuestas_validas: ["justificar_decisiones"]

enunciado: "A diferencia de un informe de resultados que describe qué sucedió, la memoria descriptiva de un diseño tiene como función primordial ___ de las soluciones adoptadas."

explicacion: |
  La memoria descriptiva no solo dice qué se hizo, sino el porqué (la lógica de diseño), permitiendo entender la trazabilidad de las decisiones técnicas frente a alternativas.
```