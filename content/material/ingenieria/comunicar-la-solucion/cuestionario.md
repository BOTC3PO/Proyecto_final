# Ingenieria — Comunicar la solucion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El propósito de la documentación

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "propósito"]

respuesta: "transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"
tipo: completar
respuestas_validas:
  - "transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"

enunciado: "El objetivo principal de la documentación técnica en ingeniería es ___."

explicacion: |
  La documentación no es solo un registro, es el medio para que otros puedan replicar, entender y ejecutar la solución diseñada sin ambigüedades.
```

### 2 — Elementos de un plano técnico

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "elementos"]

opciones_explicitas: ["Cotas y tolerancias", "Esquema de colores artísticos", "Biografía del diseñador", "Presupuesto de marketing"]
respuesta: "Cotas y tolerancias"
tipo: mc

enunciado: "En un plano técnico de ingeniería, ¿cuál de los siguientes elementos es fundamental para asegurar que la pieza sea fabricada con las dimensiones correctas?"

explicacion: |
  Las cotas definen las medidas y las tolerancias permiten el margen de error aceptable en la fabricación.
```

### 3 — Verdad o Falso: Presentaciones de diseño

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["presentaciones", "comunicacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una presentación de diseño para clientes debe contener exclusivamente detalles matemáticos complejos y fórmulas, omitiendo la visualización del producto final?"

explicacion: |
  Falso. Una presentación efectiva debe equilibrar el rigor técnico con la claridad visual, permitiendo que los stakeholders entiendan la funcionalidad y el valor de la solución.
```

### 4 — El informe técnico

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Resumen Ejecutivo", "Introducción", "Metodología", "Resultados", "Conclusiones"], ["Objetivos", "Marco Teórico", "Desarrollo", "Análisis de Resultados", "Recomendaciones"]]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas:
  - "Resumen Ejecutivo"
  - "Objetivos"

enunciado: "En la estructura estándar de un informe técnico profesional, la sección que ofrece una visión general de todo el documento para una lectura rápida se denomina ___."

explicacion: |
  El Resumen Ejecutivo (o Abstract) es vital para que los tomadores de decisiones comprendan el alcance y los resultados sin leer todo el documento.
```

### 5 — Secuencia de presentación de un proyecto

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "orden"]

opciones_explicitas: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
respuesta_orden: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar una presentación técnica efectiva ante un comité de revisión:"

explicacion: |
  Una presentación debe seguir una narrativa lógica: primero se establece el contexto (problema), luego la propuesta, se valida con evidencia (pruebas) y se cierra con la síntesis.
```

### 6 — El informe técnico de un puente

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["documentacion", "informes"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["El informe debe centrarse en el análisis de cargas y materiales.", "El informe debe centrarse en el análisis de cargas y materiales."], ["El informe debe centrarse en la gestión del presupuesto y tiempos.", "El informe debe centrarse en la gestión del presupuesto y tiempos."]]

enunciado: "Al redactar el informe técnico final para un proyecto de infraestructura civil, el enfoque principal debe ser {escenarios[caso_idx][0]}"

respuesta: escenarios[caso_idx][1]
tipo: completar
respuestas_validas:
  - "El informe debe centrarse en el análisis de cargas y materiales."
  - "El informe debe centrarse en la gestión del presupuesto y tiempos."

explicacion: |
  Un informe técnico de ingeniería debe priorizar la integridad estructural y los datos técnicos del diseño para garantizar la seguridad y la viabilidad del proyecto.
```

### 7 — Elementos de un plano de ingeniería

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

### 8 — Veracidad de la documentación técnica

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

### 9 — Secuencia de presentación de un proyecto

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "metodologia"]

enunciado: "Ordene los pasos lógicos para realizar una presentación efectiva de una solución de ingeniería ante un cliente:"

opciones_explicitas: ["Presentar el problema y necesidades", "Exponer la solución técnica y diseño", "Mostrar análisis de costos y beneficios", "Sesión de preguntas y conclusiones"]
respuesta_orden: ["Presentar el problema y necesidades", "Exponer la solución técnica y diseño", "Mostrar análisis de costos y beneficios", "Sesión de preguntas y conclusiones"]
tipo: ordenar

explicacion: |
  Una presentación profesional debe seguir un flujo narrativo: Contexto (Problema) -> Propuesta (Solución) -> Viabilidad (Costos) -> Cierre (Feedback).
```

### 10 — El uso de la simbología en planos

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["planos", "estandarizacion"]

variables:
  tipo_plano: uno_de([0, 1])
  datos: [["un plano eléctrico", "un plano eléctrico"], ["un plano de tuberías", "un plano de tuberías"]]

enunciado: "En {datos[tipo_plano][0]}, el uso de símbolos estandarizados (como la norma ISO o ANSI) es _________ para evitar errores de interpretación en la obra."

respuesta: "crítico"
tipo: completar
respuestas_validas:
  - "crítico"
  - "esencial"
  - "fundamental"

explicacion: |
  La estandarización de la simbología asegura que el lenguaje técnico sea universal entre diseñadores, fabricantes y constructores.
```

### 11 — El propósito de la documentación técnica

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "basico"
  tags: ["documentacion", "comunicacion"]

tipo: mc
opciones_explicitas: ["Registrar la historia del proyecto para fines legales", "Servir como una guía detallada para la implementación y mantenimiento", "Reemplazar la necesidad de reuniones con el cliente", "Ser un documento estético para marketing"]

enunciado: "Un error común es creer que la documentación técnica tiene como fin principal la estética o el marketing. En realidad, el objetivo fundamental de un informe de diseño es ___."

respuesta: "Servir como una guía detallada para la implementación y mantenimiento"

explicacion: |
  La documentación técnica debe ser funcional. Su propósito es permitir que otros ingenieros (o el mismo equipo en el futuro) puedan entender, replicar, mantener o reparar el sistema diseñado sin ambigüedades.
```

### 12 — Veracidad de la documentación

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "basico"
  tags: ["veracidad", "errores"]

tipo: vf

enunciado: "Es verdadero que un plano técnico debe ser lo suficientemente claro para que un profesional capacitado pueda interpretar las dimensiones y especificaciones sin necesidad de consultar al diseñador original para cada detalle."

respuesta: verdadero

explicacion: |
  Si un plano requiere consultas constantes al autor para ser interpretado, el diseño ha fallado en su objetivo de comunicación técnica. La autonomía del lector es un indicador de calidad.
```

### 13 — Secuencia de entrega de la solución

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["proceso", "presentacion"]

tipo: ordenar
opciones_explicitas: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

respuesta_orden: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

enunciado: "Para asegurar una comunicación efectiva y coherente de la solución, se debe seguir un orden lógico en la preparación de los entregables. Ordene los pasos:"

explicacion: |
  No se pueden dibujar planos sin haber validado los cálculos previos, y no se puede presentar una solución al cliente sin haber consolidado toda la información en un informe técnico que respalde los diagramas.
```

### 14 — El error de la ambigüedad en presentaciones

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["presentacion", "errores"]

variables:
  escenario: uno_de([["Presentación con exceso de texto y tablas pequeñas", "El cliente se distrae leyendo y no escucha al orador"], ["Presentación con gráficos abstractos sin ejes", "El cliente no puede interpretar los datos presentados"], ["Presentación con lenguaje excesivamente técnico para un cliente no experto", "El cliente no comprende el valor de la solución"]])

tipo: mc
opciones_explicitas: ["Falta de claridad visual", "Falta de rigor técnico", "Exceso de información técnica para la audiencia"]

enunciado: "Un error crítico al presentar una solución ante un cliente que no es especialista en el área es: {escenario[0]}."

respuesta: "Exceso de información técnica para la audiencia"

explicacion: |
  La comunicación debe adaptarse al receptor. Un error común es asumir que el cliente entiende la terminología técnica profunda, lo que genera una desconexión entre la solución propuesta y la comprensión del cliente.
```

### 15 — Componentes de un informe de diseño

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "avanzado"
  tags: ["informe", "estructura"]

variables:
  datos: uno_de([["Memoria de cálculo", "Resumen ejecutivo"], ["Planos de conjunto", "Lista de materiales"], ["Análisis de riesgos", "Conclusiones"]])

tipo: completar
respuestas_validas:
  - "Memoria de cálculo"
  - "Resumen ejecutivo"
  - "Planos de conjunto"
  - "Lista de materiales"
  - "Análisis de riesgos"
  - "Conclusiones"

enunciado: "En un informe de ingeniería profesional, el apartado que contiene el desarrollo matemático y la justificación de las decisiones de diseño se denomina ___."

respuesta: "Memoria de cálculo"

explicacion: |
  La memoria de cálculo es el pilar que sostiene la validez de la solución. Sin ella, el diseño es solo una idea; con ella, es una solución técnica verificable y justificable.
```

### 16 — Documentación técnica vs. Manual de usuario

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "comunicacion"]

respuesta: "especificaciones_tecnicas"
tipo: completar
respuestas_validas:
  - "especificaciones_tecnicas"

enunciado: "Mientras que el manual de usuario está orientado al cliente final para la operación del producto, la documentación que detalla los parámetros de diseño, materiales y tolerancias para otros ingenieros se denomina ___."

explicacion: |
  Las especificaciones técnicas son documentos de ingeniería destinados a la fabricación y validación, a diferencia de los manuales de usuario que son guías de uso operativo.
```

### 17 — El propósito de un plano técnico

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "dibujo_tecnico"]

variables:
  es_informativo: verdadero

respuesta: verdadero
tipo: vf
enunciado: "¿El objetivo principal de un plano técnico es proporcionar una representación visual inequívoca que permita la fabricación exacta de una pieza, distinguiéndose de un boceto conceptual por su precisión y normalización?"

explicacion: |
  Un plano técnico sigue normas internacionales (como ISO o ANSI) para asegurar que cualquier fabricante pueda interpretar las dimensiones y tolerancias sin ambigüedad, a diferencia de un boceto.
```

### 18 — Elementos de una presentación de diseño

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "soft_skills"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["presentar_ante_inversores", "enfoque_negocio_y_viabilidad"], ["presentar_ante_equipo_de_fabricacion", "enfoque_tecnico_y_materiales"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["enfoque_negocio_y_viabilidad", "enfoque_tecnico_y_materiales"]

enunciado: "Si el objetivo de la presentación es para {escenarios[escenario_idx][0]}, el enfoque principal debe ser el {escenarios[escenario_idx][1]}, diferenciándose de una reunión de revisión de diseño técnica."

explicacion: |
  La audiencia determina el lenguaje y el contenido: los inversores buscan retorno de inversión y viabilidad, mientras que los técnicos buscan detalles de implementación.
```

### 19 — Jerarquía de la documentación de proyecto

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "orden"]

respuesta_orden: ["memoria_descriptiva", "planos_detallados", "manual_de_mantenimiento"]
tipo: ordenar

opciones_explicitas: ["memoria_descriptiva", "planos_detallados", "manual_de_mantenimiento"]

enunciado: "Ordene los documentos de un proyecto de ingeniería desde la fase de diseño conceptual hasta la fase de post-implementación:"

explicacion: |
  Primero se describe la solución (memoria), luego se detalla para producción (planos) y finalmente se entrega al usuario para su cuidado (manual).
```

### 20 — El rol de la memoria descriptiva

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["informes", "memoria_descriptiva"]

respuesta: "justificar_decisiones"
tipo: completar
respuestas_validas:
  - "justificar_decisiones"

enunciado: "A diferencia de un informe de resultados que describe qué sucedió, la memoria descriptiva de un diseño tiene como función primordial ___ de las soluciones adoptadas."

explicacion: |
  La memoria descriptiva no solo dice qué se hizo, sino el porqué (la lógica de diseño), permitiendo entender la trazabilidad de las decisiones técnicas frente a alternativas.
```

### 21 — Formato de planos técnicos

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "documentacion"]

variables:
  escenario: uno_de([["Un plano de conjunto de una pieza mecánica", "ISO"], ["Un esquema de un circuito electrónico", "IEC"], ["Un diagrama de flujo de un proceso químico", "ANSI"]])

enunciado: "Para asegurar la interoperabilidad internacional, un ingeniero debe seguir la normativa {escenario[0]} al presentar el diseño de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ISO", "IEC", "ANSI", "DIN"]

explicacion: |
  La normativa seleccionada para {escenario[0]} es {escenario[1]}. Es fundamental utilizar el estándar correcto para evitar errores de fabricación o interpretación en proyectos globales.
```

### 22 — Veracidad de documentación técnica

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "veracidad"]

variables:
  caso: uno_de([["Un informe técnico que incluye datos experimentales sin citar la fuente de los instrumentos", falso], ["Un manual de usuario que especifica las tolerancias de montaje según el fabricante", verdadero]])

enunciado: "En el contexto de la documentación de ingeniería, ¿es correcto afirmar que: {caso[0]}?"

respuesta: caso[1]
tipo: completar
explicacion: |
  La veracidad y la trazabilidad son pilares de la ingeniería. {caso[1]} es la respuesta correcta porque {caso[0]} es {caso[1]}.
```

### 23 — Secuencia de un informe de diseño

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

enunciado: "Ordene los elementos de un informe técnico de diseño final de la forma más lógica y profesional:"

pasos:
  - "Resumen ejecutivo"
  - "Cuerpo del diseño (cálculos y especificaciones)"
  - "Conclusiones y recomendaciones"
  - "Anexos (planos y hojas de datos)"

opciones_explicitas: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
respuesta_orden: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
tipo: ordenar

explicacion: |
  Un informe profesional debe fluir desde una visión general (resumen) hacia el detalle técnico (cuerpo), cerrar con el juicio del ingeniero (conclusiones) y terminar con el soporte documental (anexos).
```

### 24 — Componentes de una presentación técnica

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["presentaciones", "comunicacion"]

variables:
  presentacion: uno_de([["Presentación ante un comité de inversión", "costos"], ["Presentación ante un equipo de mantenimiento", "operación"], ["Presentación ante un equipo de fabricación", "tolerancias"]])

enunciado: "Al realizar una presentación para {presentacion[0]}, el enfoque principal de la comunicación debe centrarse en {presentacion[1]}."

respuesta: presentacion[1]
tipo: completar
respuestas_validas:
  - "costos"
  - "operación"
  - "tolerancias"

explicacion: |
  El enfoque de la comunicación técnica debe adaptarse a la audiencia. Para {presentacion[0]}, lo crítico es discutir {presentacion[1]}.
```

### 25 — Integridad de la documentación

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "control_de_revisiones"]

variables:
  revision: uno_de([["El plano muestra la versión 'Rev. 02' pero el índice del informe dice 'Rev. 01'", falso], ["El plano y el informe coinciden en la fecha y el número de revisión", verdadero]])

enunciado: "En un proceso de auditoría de diseño, se detecta que: {revision[0]}"

respuesta: revision[1]
tipo: completar
explicacion: |
  La consistencia entre planos e informes es vital. Si hay discrepancias como en el caso {revision[0]}, la documentación se considera no válida. Por tanto, la afirmación es {revision[1]}.
```
