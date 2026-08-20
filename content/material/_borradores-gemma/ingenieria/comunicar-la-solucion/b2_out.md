### 1 — El informe técnico de un puente
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["documentacion", "informes"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["El informe debe centrarse en el análisis de cargas y materiales.", "El informe debe centrarse en el análisis de cargas y materiales."],
    ["El informe debe centrarse en la gestión del presupuesto y tiempos.", "El informe debe centrarse en la gestión del presupuesto y tiempos."]
  ]

enunciado: "Al redactar el informe técnico final para un proyecto de infraestructura civil, el enfoque principal debe ser {escenarios[caso_idx][0]}"

respuesta: escenarios[caso_idx][1]
tipo: completar
respuestas_validas: ["El informe debe centrarse en el análisis de cargas y materiales.", "El informe debe centrarse en la gestión del presupuesto y tiempos."]

explicacion: |
  Un informe técnico de ingeniería debe priorizar la integridad estructural y los datos técnicos del diseño para garantizar la seguridad y la viabilidad del proyecto.
```

### 2 — Elementos de un plano de ingeniería
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "dibujo_tecnico"]

enunciado: "En un plano de ingeniería mecánica, la escala es la relación entre la dimensión del dibujo y la dimensión real. Si un componente mide 50mm en el plano y su tamaño real es 500mm, la escala representada es:"

opciones_explicitas: ["1:1", "1:10", "10:1", "1:100"]
respuesta: "1:10"
tipo: mc

explicacion: |
  La escala se calcula como Dimensión Dibujo / Dimensión Real. En este caso: 50 / 500 = 1/10, lo que se expresa como 1:10.
```

### 3 — Veracidad de la documentación técnica
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "normas"]

enunciado: "¿Es correcto afirmar que la documentación de un diseño debe ser lo suficientemente clara para que un ingeniero externo pueda replicar el proceso de fabricación sin necesidad de consultas adicionales?"

respuesta: verdadero
tipo: vf

explicacion: |
  La reproducibilidad es un pilar fundamental de la documentación técnica de ingeniería. Si el diseño no es replicable, la documentación ha fallado.
```

### 4 — Secuencia de presentación de un proyecto
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "metodologia"]

enunciado: "Ordene los pasos lógicos para realizar una presentación efectiva de una solución de ingeniería ante un cliente:"

opciones_explicitas: ["Presentar el problema y necesidades", "Exponer la solución técnica y diseño", "Mostrar análisis de costos y beneficios", "Sesión de preguntas y conclusiones"]
respuesta: ["Presentar el problema y necesidades", "Exponer la solución técnica y diseño", "Mostrar análisis de costos y beneficios", "Sesión de preguntas y conclusiones"]
tipo: ordenar

explicacion: |
  Una presentación profesional debe seguir un flujo narrativo: Contexto (Problema) -> Propuesta (Solución) -> Viabilidad (Costos) -> Cierre (Feedback).
```

### 5 — El uso de la simbología en planos
```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["planos", "estandarizacion"]

variables:
  tipo_plano: uno_de([0, 1])
  datos: [
    ["un plano eléctrico", "un plano eléctrico"],
    ["un plano de tuberías", "un plano de tuberías"]
  ]

enunciado: "En {datos[tipo_plano][0]}, el uso de símbolos estandarizados (como la norma ISO o ANSI) es _________ para evitar errores de interpretación en la obra."

respuesta: "crítico"
tipo: completar
respuestas_validas: ["crítico", "esencial", "fundamental"]

explicacion: |
  La estandarización de la simbología asegura que el lenguaje técnico sea universal entre diseñadores, fabricantes y constructores.
```