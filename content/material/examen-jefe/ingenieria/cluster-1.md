# Examen jefe — Maestro del Diseño y la Comunicación

> Logro #183. Completaste el parcial integrando diseño conceptual, investigación y comunicación de soluciones. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: comunicar-la-solucion (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "propósito"]

respuesta: "transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"
tipo: completar
respuestas_validas: ["transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"]

enunciado: "El objetivo principal de la documentación técnica en ingeniería es ___."

explicacion: |
  La documentación no es solo un registro, es el medio para que otros puedan replicar, entender y ejecutar la solución diseñada sin ambigüedades.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Resumen Ejecutivo", "Introducción", "Metodología", "Resultados", "Conclusiones"],
    ["Objetivos", "Marco Teórico", "Desarrollo", "Análisis de Resultados", "Recomendaciones"]
  ]

respuesta: datos[escenario_idx][0
tipo: completar
respuestas_validas: ["Resumen Ejecutivo", "Objetivos"]

enunciado: "En la estructura estándar de un informe técnico profesional, la sección que ofrece una visión general de todo el documento para una lectura rápida se denomina ___."

explicacion: |
  El Resumen Ejecutivo (o Abstract) es vital para que los tomadores de decisiones comprendan el alcance y los resultados sin leer todo el documento.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "orden"]

opciones_explicitas: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
respuesta: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar una presentación técnica efectiva ante un comité de revisión:"

explicacion: |
  Una presentación debe seguir una narrativa lógica: primero se establece el contexto (problema), luego la propuesta, se valida con evidencia (pruebas) y se cierra con la síntesis.
```

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

respuesta: escenarios[caso_idx][1
tipo: completar
respuestas_validas: ["El informe debe centrarse en el análisis de cargas y materiales.", "El informe debe centrarse en la gestión del presupuesto y tiempos."]

explicacion: |
  Un informe técnico de ingeniería debe priorizar la integridad estructural y los datos técnicos del diseño para garantizar la seguridad y la viabilidad del proyecto.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["proceso", "presentacion"]

tipo: ordenar
opciones_explicitas: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

respuesta: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

enunciado: "Para asegurar una comunicación efectiva y coherente de la solución, se debe seguir un orden lógico en la preparación de los entregables. Ordene los pasos:"

explicacion: |
  No se pueden dibujar planos sin haber validado los cálculos previos, y no se puede presentar una solución al cliente sin haber consolidado toda la información en un informe técnico que respalde los diagramas.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["presentacion", "errores"]

variables:
  escenario: uno_de([
    ["Presentación con exceso de texto y tablas pequeñas", "El cliente se distrae leyendo y no escucha al orador"],
    ["Presentación con gráficos abstractos sin ejes", "El cliente no puede interpretar los datos presentados"],
    ["Presentación con lenguaje excesivamente técnico para un cliente no experto", "El cliente no comprende el valor de la solución"]
  ])

tipo: mc
opciones_explicitas: ["Falta de claridad visual", "Falta de rigor técnico", "Exceso de información técnica para la audiencia"]

enunciado: "Un error crítico al presentar una solución ante un cliente que no es especialista en el área es: {escenario[0]}."

respuesta: "Exceso de información técnica para la audiencia"

explicacion: |
  La comunicación debe adaptarse al receptor. Un error común es asumir que el cliente entiende la terminología técnica profunda, lo que genera una desconexión entre la solución propuesta y la comprensión del cliente.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "avanzado"
  tags: ["informe", "estructura"]

variables:
  datos: uno_de([
    ["Memoria de cálculo", "Resumen ejecutivo"],
    ["Planos de conjunto", "Lista de materiales"],
    ["Análisis de riesgos", "Conclusiones"]
  ])

tipo: completar
respuestas_validas: ["Memoria de cálculo", "Resumen ejecutivo", "Planos de conjunto", "Lista de materiales", "Análisis de riesgos", "Conclusiones"]

enunciado: "En un informe de ingeniería profesional, el apartado que contiene el desarrollo matemático y la justificación de las decisiones de diseño se denomina ___."

respuesta: "Memoria de cálculo"

explicacion: |
  La memoria de cálculo es el pilar que sostiene la validez de la solución. Sin ella, el diseño es solo una idea; con ella, es una solución técnica verificable y justificable.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "dibujo_tecnico"]

variables:
  es_informativo: true

respuesta: es_informativo
tipo: completar
enunciado: "¿El objetivo principal de un plano técnico es proporcionar una representación visual inequívoca que permita la fabricación exacta de una pieza, distinguiéndose de un boceto conceptual por su precisión y normalización?"

explicacion: |
  Un plano técnico sigue normas internacionales (como ISO o ANSI) para asegurar que cualquier fabricante pueda interpretar las dimensiones y tolerancias sin ambigüedad, a diferencia de un boceto.
```

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

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["enfoque_negocio_y_viabilidad", "enfoque_tecnico_y_materiales"]

enunciado: "Si el objetivo de la presentación es para {escenarios[escenario_idx][0]}, el enfoque principal debe ser el {escenarios[escenario_idx][1]}, diferenciándose de una reunión de revisión de diseño técnica."

explicacion: |
  La audiencia determina el lenguaje y el contenido: los inversores buscan retorno de inversión y viabilidad, mientras que los técnicos buscan detalles de implementación.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "documentacion"]

variables:
  escenario: uno_de([
    ["Un plano de conjunto de una pieza mecánica", "ISO"],
    ["Un esquema de un circuito electrónico", "IEC"],
    ["Un diagrama de flujo de un proceso químico", "ANSI"]
  ])

enunciado: "Para asegurar la interoperabilidad internacional, un ingeniero debe seguir la normativa {escenario[0]} al presentar el diseño de {escenario[0]}."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["ISO", "IEC", "ANSI", "DIN"]

explicacion: |
  La normativa seleccionada para {escenario[0]} es {escenario[1]}. Es fundamental utilizar el estándar correcto para evitar errores de fabricación o interpretación en proyectos globales.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "veracidad"]

variables:
  caso: uno_de([
    ["Un informe técnico que incluye datos experimentales sin citar la fuente de los instrumentos", falso],
    ["Un manual de usuario que especifica las tolerancias de montaje según el fabricante", verdadero]
  ])

enunciado: "En el contexto de la documentación de ingeniería, ¿es correcto afirmar que: {caso[0]}?"

respuesta: caso[1
tipo: completar
explicacion: |
  La veracidad y la trazabilidad son pilares de la ingeniería. {caso[1]} es la respuesta correcta porque {caso[0]} es {caso[1]}.
```

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
respuesta: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
tipo: ordenar

explicacion: |
  Un informe profesional debe fluir desde una visión general (resumen) hacia el detalle técnico (cuerpo), cerrar con el juicio del ingeniero (conclusiones) y terminar con el soporte documental (anexos).
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["presentaciones", "comunicacion"]

variables:
  presentacion: uno_de([
    ["Presentación ante un comité de inversión", "costos"],
    ["Presentación ante un equipo de mantenimiento", "operación"],
    ["Presentación ante un equipo de fabricación", "tolerancias"]
  ])

enunciado: "Al realizar una presentación para {presentacion[0]}, el enfoque principal de la comunicación debe centrarse en {presentacion[1]}."

respuesta: presentación[1]
tipo: completar
respuestas_validas: ["costos", "operación", "tolerancias"]

explicacion: |
  El enfoque de la comunicación técnica debe adaptarse a la audiencia. Para {presentacion[0]}, lo crítico es discutir {presentacion[1]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "control_de_revisiones"]

variables:
  revision: uno_de([
    ["El plano muestra la versión 'Rev. 02' pero el índice del informe dice 'Rev. 01'", falso],
    ["El plano y el informe coinciden en la fecha y el número de revisión", verdadero]
  ])

enunciado: "En un proceso de auditoría de diseño, se detecta que: {revision[0]}"

respuesta: revision[1
tipo: completar
explicacion: |
  La consistencia entre planos e informes es vital. Si hay discrepancias como en el caso {revision[0]}, la documentación se considera no válida. Por tanto, la afirmación es {revision[1]}.
```

## Sección: disciplinas-de-la-ingenieria (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "infraestructura"]

tipo: mc
opciones_explicitas: ["Diseño de sistemas de comunicación y redes eléctricas", "Diseño y construcción de infraestructuras como puentes, carreteras y represas", "Optimización de procesos de producción en fábricas", "Desarrollo de sistemas de propulsión para satélites"]

enunciado: "La ingeniería civil se encarga principalmente del diseño, construcción y mantenimiento de ___."

respuesta: "Diseño y construcción de infraestructuras como puentes, carreteras y represas"

explicacion: |
  La ingeniería civil se enfoca en el entorno construido, diseñando estructuras que soportan cargas y gestionan recursos naturales para la sociedad.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])

variables:
  datos: [
    ["transformación de materias primas en productos útiles mediante procesos químicos", "procesos químicos"],
    ["diseño de circuitos integrados y microchips", "procesos electrónicos"]
  ]

tipo: vf
enunciado: "La ingeniería química se centra en la transformación de materias primas en productos útiles mediante {datos[escenario_idx][0]}."

respuesta: verdadero

explicacion: |
  La ingeniería química utiliza la química, la física y la biología para transformar materias primas en productos con valor añadido a escala industrial.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "maquinas"]

tipo: completar
respuestas_validas: ["sistemas de máquinas", "sistemas de máquinas", "motores térmicos"]

enunciado: "La ingeniería mecánica se dedica al estudio y diseño de ___ y sistemas de movimiento."

respuesta: "sistemas de máquinas"

explicacion: |
  La ingeniería mecánica aplica principios de la física y la ciencia de materiales para el diseño de maquinaria, motores y sistemas térmicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimización"]

tipo: mc
opciones_explicitas: ["Optimización de procesos, recursos y sistemas para mejorar la eficiencia", "Diseño de fármacos y dispositivos médicos", "Análisis de la estabilidad de estructuras de acero", "Estudio de la dinámica de fluidos en cohetes"]

enunciado: "El objetivo principal de la ingeniería industrial es la ___."

respuesta: "Optimización de procesos, recursos y sistemas para mejorar la eficiencia"

explicacion: |
  A diferencia de otras ingenierías que se enfocan en productos específicos, la industrial se enfoca en la optimización de sistemas complejos (personas, dinero, tiempo, materiales).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["ordenar", "especialidades"]

tipo: ordenar
opciones_explicitas: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

respuesta: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

enunciado: "Ordena las siguientes disciplinas de acuerdo a su escala de aplicación, desde la que opera en el espacio exterior hasta la que aplica tecnología en el cuerpo humano:"

explicacion: |
  El orden solicitado va desde la escala macro/espacial (Aeroespacial) hacia la escala micro/biológica (Biomédica), pasando por sistemas de energía (Eléctrica) y sistemas físicos/mecánicos (Mecánica).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "estructuras"]

enunciado: "Un equipo debe diseñar el esqueleto de un puente colgante para soportar el peso de camiones pesados. El profesional encargado de calcular las cargas, la resistencia de los materiales y la estabilidad de la estructura es el ingeniero ___."

respuestas_validas: ["civil"]
tipo: completar

explicacion: |
  La ingeniería civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, carreteras y edificios.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["optimizar la línea de ensamblaje de una fábrica de autos", "reducir costos de producción"],
    ["gestionar el flujo de inventario en un centro logístico", "mejorar la eficiencia de la cadena de suministro"]
  ]

enunciado: "Un profesional es contratado para {datos[idx][0]} con el fin de {datos[idx][1]}. ¿Qué disciplina está aplicando principalmente?"

opciones_explicitas: ["Mecánica", "Industrial", "Química", "Eléctrica"]
respuesta: "Industrial"
tipo: mc

explicacion: |
  La ingeniería industrial se enfoca en la optimización de sistemas complejos, procesos y recursos para mejorar la productividad.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "vuelo"]

enunciado: "El diseño de un motor de reacción para un satélite requiere conocimientos avanzados de aerodinámica y sistemas de propulsión fuera de la atmósfera terrestre."

respuesta: verdadero
tipo: vf

explicacion: |
  La ingeniería aeroespacial se especializa en el diseño y construcción de vehículos que operan en el aire o en el espacio.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["quimica", "procesos"]

variables:
  reaccion_idx: uno_de([0, 1])
  reacciones: [
    ["la conversión de petróleo crudo en gasolina", "la producción de polímeros a partir de gas natural"],
    ["la obtención de fertilizantes mediante procesos térmicos", "la síntesis de fármacos complejos"]
  ]

enunciado: "Para llevar a cabo {reacciones[reaccion_idx][0]}, se requiere un ingeniero que comprenda las transformaciones moleculares y las reacciones termodinámicas. Este es un ingeniero ___."

respuestas_validas: ["químico"]
tipo: completar

explicacion: |
  La ingeniería química utiliza procesos químicos, físicos y biológicos para transformar materias primas en productos útiles a gran escala.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["biomedica", "ordenar"]

enunciado: "Para desarrollar un brazo robótico controlado por señales neuronales, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
respuesta: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
tipo: ordenar

explicacion: |
  La ingeniería biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones tecnológicas aplicadas a la salud.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "mecanica", "estructuras"]

respuesta: "mecanica"
tipo: mc
opciones_explicitas: ["civil", "mecanica", "electrica", "quimica"]

enunciado: "Un error común es pensar que el diseño de maquinaria con partes móviles y sistemas de combustión es competencia de la ingeniería {idx_disciplina[1]}, cuando en realidad pertenece a la ingeniería _________."

variables:
  idx_disciplina: uno_de([[0, "civil"], [1, "mecanica"], [2, "electrica"], [3, "quimica"]])

explicacion: |
  La ingeniería civil se enfoca principalmente en infraestructuras estáticas (puentes, carreteras, edificios), mientras que la ingeniería mecánica se especializa en sistemas con movimiento y transformación de energía.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que el objetivo principal de la ingeniería química es la síntesis de nuevos elementos en un laboratorio, tal como lo hace un químico puro."

explicacion: |
  Falso. La ingeniería química se enfoca en el diseño de procesos industriales para transformar materias primas en productos a gran escala, no en la síntesis de elementos químicos básicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos", "optimizacion"]

variables:
  escenario: uno_de([[0, "optimizar la cadena de suministro", "optimizar la cadena de suministro"], [1, "diseñar circuitos integrados", "diseñar circuitos integrados"], [2, "diseñar motores de reacción", "diseñar motores de reacción"]])

respuesta: "optimizar la cadena de suministro"
tipo: completar
respuestas_validas: ["optimizar la cadena de suministro", "diseñar circuitos integrados", "diseñar motores de reacción"]

enunciado: "A menudo se confunde la ingeniería industrial con la administración pura; sin embargo, la ingeniería industrial busca _________ para mejorar la productividad de un sistema."

explicacion: |
  La ingeniería industrial utiliza métodos matemáticos y estadísticos para optimizar procesos, logística y recursos, diferenciándose de la gestión administrativa en su enfoque técnico-operativo.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["biomedica", "medicina"]

respuesta: "biomédica"
tipo: mc
opciones_explicitas: ["biomédica", "química", "aeroespacial", "industrial"]

enunciado: "Si un profesional se dedica al diseño de prótesis inteligentes y equipos de soporte vital para hospitales, su especialidad es la ingeniería _________."

explicacion: |
  La ingeniería biomédica aplica los principios de la ingeniería (electrónica, mecánica, materiales) al ámbito de la medicina y la biología para mejorar la salud humana.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "secuencia", "desarrollo"]

respuesta: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]
tipo: ordenar
opciones_explicitas: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]

enunciado: "En el desarrollo de un vehículo de transporte espacial, ordene lógicamente estas etapas de ingeniería:"

pasos:
  - "Primero se define la forma para vencer la resistencia del aire."
  - "Luego se construye el esqueleto que soporte las cargas."
  - "Finalmente se instalan los motores para generar empuje."

explicacion: |
  El desarrollo aeroespacial sigue una jerarquía lógica: primero la aerodinámica (forma), luego la estructura (soporte) y finalmente la propulsión (movimiento).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimizacion"]

respuesta: "optimizacion"
tipo: completar
respuestas_validas: ["optimizacion", "eficiencia"]

enunciado: "Mientras que la ingeniería mecánica se enfoca en el diseño de sistemas físicos y máquinas, la ingeniería industrial se centra primordialmente en la ___ de procesos, personas y recursos dentro de una organización."

explicacion: |
  La ingeniería industrial se distingue por su enfoque sistémico en la optimización de procesos productivos y la gestión de recursos para maximizar la eficiencia.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "civil"]

variables:
  es_quimica: falso

respuesta: es_quimica
tipo: completar
enunciado: "Si el objetivo principal de un proyecto es la transformación de la materia a nivel molecular mediante reacciones químicas, estamos ante el campo de la ingeniería química y no de la ingeniería civil."

explicacion: |
  La ingeniería civil se ocupa de infraestructuras y estructuras macroscópicas, mientras que la química trabaja con transformaciones moleculares y procesos de reacción.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["electrica", "potencia"]

opciones_explicitas: ["flujo de electrones y energía", "diseño de motores de combustión", "estructuras de concreto", "procesos biológicos"]

respuesta: uno_de([0,1,2,3])[0]
tipo: mc

enunciado: "La disciplina que se distingue por el estudio y aplicación del ___ es la ingeniería eléctrica."

explicacion: |
  La ingeniería eléctrica se especializa en el control y la distribución de la energía eléctrica y el flujo de electrones en sistemas de potencia y circuitos.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "medicina"]

variables:
  escenario: uno_de([0,1])

respuesta: escenario_datos[escenario][1

enunciado: "En un contexto de aplicación tecnológica, la ingeniería biomédica se diferencia de otras ingenierías por su objetivo principal: {escenario_datos[escenario][0]}."

pasos:
  - "Identificar la aplicación principal de la ingeniería biomédica."
  - "Comparar con el enfoque de la ingeniería mecánica o eléctrica pura."

explicacion: |
  La ingeniería biomédica aplica principios de la ingeniería para resolver problemas en el ámbito de la medicina y la biología.

variables_contexto:
  escenario_datos: [["la creación de prótesis y dispositivos médicos", "el diseño de motores de alta potencia"], ["la creación de prótesis y dispositivos médicos", "el diseño de motores de alta potencia"]]
  escenario: uno_de([0,1])
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "proceso"]

opciones_explicitas: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]

respuesta: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]
tipo: ordenar

enunciado: "Para el desarrollo de un vehículo aeroespacial, el ingeniero debe seguir un orden lógico de prioridades de diseño técnico:"

explicacion: |
  El diseño aeroespacial requiere primero la forma (aerodinámica), luego la fuerza de movimiento (propulsión) y finalmente el control (navegación).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "motores"]

variables:
  datos: [["diseño de engranajes y pistones", "Mecánica"], ["diseño de circuitos de encendido", "Eléctrica"], ["diseño de sistemas de combustible", "Química"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica", "Eléctrica", "Química"]

enunciado: "Un ingeniero está trabajando en el diseño de un nuevo motor de combustión interna, enfocándose específicamente en el movimiento de los engranajes y pistones. ¿Qué disciplina lidera este trabajo?"

explicacion: |
  El diseño de sistemas mecánicos, movimiento y máquinas es el campo principal de la Ingeniería Mecánica.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "construccion"]

variables:
  datos: [["puentes y túneles", "Civil"], ["procesos de refinación", "Química"], ["redes de distribución", "Eléctrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Civil", "Química", "Eléctrica"]

enunciado: "El proyecto consiste en la construcción de ___ y túneles para mejorar la conectividad de una ciudad."

explicacion: |
  La Ingeniería Civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, túneles y carreteras.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "logistica"]

variables:
  datos: [["optimizar una línea de producción", "Industrial"], ["diseñar un satélite", "Aeroespacial"], ["crear una prótesis", "Biomédica"]]
  idx: uno_de([0, 1, 2])

respuestas_validas: [datos[idx][0]]
respuesta: datos[idx][0]
tipo: completar
enunciado: "Un ingeniero es contratado para {datos[idx][0]} en una fábrica de automóviles para reducir desperdicios y tiempos de espera. ¿Es esta una tarea típica de la Ingeniería Industrial?"

explicacion: |
  Verdadero. La Ingeniería Industrial se enfoca en la optimización de procesos, sistemas y recursos para mejorar la eficiencia.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "salud"]

variables:
  datos: [["un sensor de glucosa implantable", "Biomédica"], ["un reactor nuclear", "Química"], ["un avión de carga", "Aeroespacial"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Biomédica", "Química", "Aeroespacial"]

enunciado: "Se requiere desarrollar un sensor de glucosa implantable que interactúe con el cuerpo humano. ¿Qué disciplina es la más adecuada para este desarrollo?"

explicacion: |
  La Ingeniería Biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones médicas.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "ordenar"]

variables:
  pasos_orden: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

respuesta: pasos_orden
tipo: ordenar
opciones_explicitas: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

enunciado: "Ordena cronológicamente las etapas lógicas para el desarrollo de un nuevo vehículo de exploración espacial:"

explicacion: |
  Primero se debe diseñar la aerodinámica, luego construir la estructura física y finalmente realizar el lanzamiento.
```

## Sección: diseno-conceptual (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "etapas_proyecto"]

respuesta: "diseño conceptual"
tipo: completar
respuestas_validas: ["diseño conceptual", "diseño conceptual"]

enunciado: "La etapa en la que se establece la idea general de la solución, definiendo el enfoque y los principios básicos antes de entrar en detalles técnicos profundos, se denomina ___."

explicacion: |
  El diseño conceptual es la fase donde se abstrae el problema para proponer una solución lógica y funcional sin considerar aún materiales específicos o tolerancias mecánicas.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivos", "metodologia"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["A", "B", "C", "D"]

enunciado: "Según el enfoque de diseño seleccionado, ¿cuál es el objetivo principal de esta fase? {datos[idx][0]}"

variables:
  datos: [
    ["Definir la arquitectura general y la funcionalidad de la solución.", "A"],
    ["Realizar el modelado matemático detallado de cada componente.", "B"],
    ["Seleccionar los proveedores de materia prima.", "C"],
    ["Realizar pruebas de fatiga en prototipos finales.", "D"]
  ]

explicacion: |
  El diseño conceptual busca la arquitectura funcional. El modelado detallado, la selección de proveedores y las pruebas de fatiga pertenecen a etapas posteriores (diseño detallado y validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["abstraccion", "conceptos"]

respuesta: verdadero

tipo: vf

enunciado: "En el diseño conceptual, la abstracción es una herramienta clave para simplificar el problema y centrarse en la lógica de la solución en lugar de en los detalles constructivos."

explicacion: |
  Correcto. La abstracción permite ignorar detalles irrelevantes en esta etapa para asegurar que la solución propuesta realmente resuelva el problema fundamental.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

respuesta: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación"]
tipo: ordenar

opciones_explicitas: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación", "Selección de materiales de descarte"]

enunciado: "Ordene las siguientes etapas de un proceso de desarrollo de ingeniería desde la concepción hasta la validación:"

explicacion: |
  El flujo lógico comienza con la idea (conceptual), sigue con el detalle técnico (detallado) y termina con la verificación de la solución (prototipado).
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["componentes", "requisitos"]

respuesta: "requisitos"
tipo: completar
respuestas_validas: ["requisitos", "requisitos"]

enunciado: "El diseño conceptual debe basarse primordialmente en los ___ del cliente y las restricciones del problema."

explicacion: |
  Los requisitos son la base de cualquier diseño; si el diseño conceptual no satisface los requisitos, el proyecto fallará independientemente de qué tan buen detalle técnico tenga después.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "definicion"]

respuesta: "definicion_problema"
tipo: "mc"
opciones_explicitas: ["definicion_problema", "seleccion_materiales", "prototipado_rapido", "analisis_de_costos"]

enunciado: "Antes de proponer una solución técnica detallada, es fundamental realizar la ___ para entender qué se debe resolver."

explicacion: |
  El diseño conceptual comienza con la definición clara del problema. Sin entender la necesidad real, cualquier solución técnica posterior corre el riesgo de ser irrelevante o ineficiente.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["restricciones", "requisitos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Un dron de carga debe elevar 5kg", "5"],
    ["Un sensor de temperatura debe operar a -20°C", "-20"]
  ]

respuesta: escenarios[caso_idx][1
tipo: "input"
tolerancia_abs: 0.1

enunciado: "En el diseño conceptual de un sistema de transporte de carga, si el requisito principal es que el dispositivo debe ser capaz de levantar una masa de {escenarios[caso_idx][0]}, ¿cuál es el valor numérico de la carga de diseño en kg?"

pasos:
  - "Identificar el requisito de carga útil en el enunciado."
  - "Extraer el valor numérico asociado a la capacidad de carga."

explicacion: |
  En la fase conceptual, los requisitos de rendimiento (como la carga útil) se establecen como parámetros de diseño que guiarán la selección de motores y estructuras en la fase técnica.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso

tipo: "vf"

enunciado: "El diseño conceptual se encarga de especificar las dimensiones exactas de cada tornillo y el código de programación final de los componentes."

explicacion: |
  Falso. El diseño conceptual se centra en la arquitectura general, la lógica de funcionamiento y la solución macro. La especificación de detalles como tornillos o líneas de código pertenece a la fase de diseño detallado o ingeniería de detalle.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["proceso", "flujo"]

respuesta: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad"]
tipo: "ordenar"
opciones_explicitas: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad", "fabricacion_final"]

enunciado: "Ordene las etapas del proceso de diseño desde la concepción inicial hasta la validación de la idea antes de la fabricación."

explicacion: |
  El flujo lógico comienza con la necesidad, sigue con la generación de ideas (brainstorming), se elige una arquitectura de solución y se valida su viabilidad. La fabricación es una etapa posterior al diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["toma_de_decisiones", "arquitectura"]

variables:
  opcion_idx: uno_de([0, 1])
  casos: [
    ["un sistema de frenado mecánico", "hidraulico"],
    ["un sistema de transmisión de energía", "electrico"]
  ]

respuesta: casos[opcion_idx][1
tipo: "completar"
respuestas_validas: ["hidraulico", "electrico"]

enunciado: "Si estamos en la fase conceptual de un vehículo de transporte pesado y decidimos que la transferencia de fuerza se hará mediante fluidos a presión, la arquitectura seleccionada es de tipo ___."

explicacion: |
  La elección de la arquitectura (mecánica, hidráulica, eléctrica) es la decisión principal del diseño conceptual. Una vez elegida, se procede a realizar los cálculos de ingeniería detallados para esa arquitectura específica.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "etapas_proyecto"]

respuesta: "detalles_tecnicos"
tipo: mc
opciones_explicitas: ["detalles_tecnicos", "materiales_especificos", "costos_de_fabricacion", "planos_de_ensamblaje"]

enunciado: "Un error común en la gestión de proyectos es saltar directamente a la definición de {detalles_tecnicos} sin haber consolidado primero la idea general de la solución. ¿Qué etapa se está omitiendo?"

explicacion: |
  El diseño conceptual debe establecer la arquitectura y funcionalidad general. Si se salta directamente a los detalles técnicos (como dimensiones exactas o materiales específicos), se corre el riesgo de optimizar componentes de una solución que podría ser inherentemente errónea para el problema original.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["errores_comunes", "definicion"]

variables:
  es_tecnico: uno_de([verdadero, falso])

respuesta: es_tecnico
tipo: completar
enunciado: "Si el diseño conceptual se centra en la selección de tornillos, aleaciones específicas y tolerancias de fabricación, ¿se está cumpliendo estrictamente con la fase de diseño conceptual? (Respuesta: verdadero o falso)"

explicacion: |
  Falso. El diseño conceptual debe responder al 'qué' y al 'por qué' de la solución a nivel macro. La selección de componentes específicos y tolerancias pertenece al diseño detallado.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "confusion"]

respuesta: "el_concepto_es_la_solucion"
tipo: completar
respuestas_validas: ["el_concepto_es_la_solucion"]

enunciado: "Un error conceptual frecuente es creer que un prototipo funcional de baja fidelidad es lo mismo que el diseño conceptual. Sin embargo, el diseño conceptual es ___."

explicacion: |
  El diseño conceptual es una representación abstracta o lógica de la solución, mientras que el prototipo es una realización física o digital para validar hipótesis. No son sinónimos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["flujo_trabajo"]

respuesta: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion"]
tipo: ordenar

opciones_explicitas: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion", "pruebas_de_usuario"]

enunciado: "Ordene las etapas de un proceso de ingeniería de la más general a la más específica, evitando el error de saltar pasos críticos."

explicacion: |
  El flujo lógico requiere primero entender el problema, luego idear la solución general (conceptual), luego definir sus componentes exactos (detallado) y finalmente producirlo.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["riesgo", "optimizacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: "optimizar_detalles"
tipo: mc
opciones_explicitas: ["optimizar_detalles", "validar_requisitos", "definir_presupuesto", "analizar_competencia"]

enunciado: "En la fase de diseño conceptual, el mayor riesgo de error es intentar {escenario_texto} antes de haber validado si la idea general satisface las necesidades del usuario."

variables:
  escenario_texto: uno_de(["optimizar_detalles", "validar_requisitos", "definir_presupuesto", "analizar_competencia"])

explicacion: |
  Intentar optimizar detalles técnicos (como reducir el peso de una pieza en gramos) cuando la arquitectura general del sistema aún no es válida es una pérdida de recursos conocida como 'optimización prematura'.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "fases_proyecto"]

respuesta: "diseño detallado"
tipo: completar
respuestas_validas: ["diseño detallado", "diseño de detalle", "diseño técnico"]

enunciado: "Mientras que el diseño conceptual se centra en la idea general y la viabilidad de la solución, el ___ se enfoca en las especificaciones técnicas precisas y la selección de materiales exactos."

explicacion: |
  El diseño conceptual es la fase de abstracción donde se define el 'qué' y el 'por qué', mientras que el diseño detallado define el 'cómo' técnico para la fabricación o implementación.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivo", "proposito"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un sistema de filtración de agua", "identificar la arquitectura básica"],
    ["un nuevo modelo de smartphone", "definir la experiencia de usuario y funciones clave"]
  ]

respuesta: uno_de(escenarios)[escenario_idx][1]
tipo: mc
opciones_explicitas: ["definir la arquitectura técnica final", "identificar la arquitectura básica", "definir la experiencia de usuario y funciones clave", "seleccionar proveedores de componentes"]

enunciado: "En el caso de {uno_de(escenarios)[escenario_idx][0]}, el objetivo principal del diseño conceptual es ___."

explicacion: |
  El diseño conceptual no busca detalles de implementación, sino establecer la estructura lógica y los principios fundamentales que guiarán la solución.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["naturaleza", "proceso"]

respuesta: verdadero
tipo: vf

enunciado: "El diseño conceptual es un proceso lineal y único que se completa antes de pasar a cualquier otra fase del proyecto."

explicacion: |
  Falso. El diseño conceptual es altamente iterativo; las ideas se refinan, se descartan o se modifican constantemente a medida que se comprenden mejor las restricciones del problema.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "jerarquia"]

respuesta: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]
tipo: ordenar
opciones_explicitas: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]

enunciado: "Ordene cronológicamente las etapas de un proceso de diseño conceptual estándar:"

explicacion: |
  Un proceso lógico comienza entendiendo la necesidad (problema), explorando soluciones (ideas), eligiendo la más viable (selección) y estructurando la solución (arquitectura).
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "comparacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["un motor de combustión", "un software de gestión"],
    ["un puente colgante", "una aplicación móvil"]
  ]

respuesta: "el prototipo es una manifestación física o funcional de la idea"
tipo: completar
respuestas_validas: ["el prototipo es una manifestación física o funcional de la idea", "el prototipo es un dibujo"]

enunciado: "Si el diseño conceptual es la representación mental o esquemática de la solución para {uno_de(casos)[caso_idx][0]}, entonces ___."

explicacion: |
  El diseño conceptual es el concepto abstracto; el prototipo es la materialización (física o digital) para validar si ese concepto funciona en la realidad.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "alcance"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un sistema de purificación de agua para una comunidad rural", "un motor de combustión de alta eficiencia"], ["priorizar la simplicidad y el costo", "priorizar la potencia máxima y el rendimiento"]]

enunciado: "En la fase de diseño conceptual para {escenarios[escenario_idx][0]}, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: "priorizar la simplicidad y el costo"
tipo: mc
opciones_explicitas: ["priorizar la simplicidad y el costo", "priorizar la potencia máxima y el rendimiento", "definir el presupuesto detallado de materiales", "realizar pruebas de fatiga de materiales"]

explicacion: |
  El diseño conceptual se enfoca en la solución general y la viabilidad de la idea, no en los detalles técnicos o materiales específicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["fases_proyecto"]

enunciado: "El diseño conceptual se realiza después de haber definido los requerimientos del cliente pero antes de la creación de los planos de fabricación detallados."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El diseño conceptual actúa como el puente entre la necesidad (requerimiento) y la solución técnica detallada.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "arquitectura"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["un puente peatonal", "un software de gestión hospitalaria"], ["la estructura principal y el flujo de carga", "la arquitectura de la base de datos y la interfaz de usuario"]]

enunciado: "Para el diseño conceptual de {datos[caso_idx][0]}, el ingeniero debe definir principalmente {datos[caso_idx][1]}."

respuesta: "la estructura principal y el flujo de carga"
tipo: completar
respuestas_validas: ["la estructura principal y el flujo de carga", "el acabado estético de los materiales", "el costo de la mano de obra"]

explicacion: |
  El diseño conceptual define la arquitectura funcional o estructural básica que permitirá cumplir con los requerimientos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["flujo_trabajo"]

enunciado: "Ordene las etapas del proceso de diseño de un nuevo producto desde la concepción hasta la producción:"

opciones_explicitas: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
respuesta: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
tipo: ordenar

explicacion: |
  El proceso sigue un flujo lógico: primero se entiende el problema, luego se propone la idea general (conceptual), se detallan las medidas y finalmente se valida con prototipos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["evaluacion", "riesgo"]

variables:
  problema_idx: uno_de([0, 1])
  problemas: [["un sistema de frenado para un tren de alta velocidad", "un nuevo tipo de envase biodegradable para alimentos"]]

enunciado: "Durante el diseño conceptual de {problemas[problema_idx][0]}, si se detecta que la solución propuesta es físicamente imposible, ¿cuál es la acción correcta?"

respuesta: "Reevaluar la idea o buscar una alternativa conceptual"
tipo: mc
opciones_explicitas: ["Reevaluar la idea o buscar una alternativa conceptual", "Continuar con el diseño detallado para ver si se soluciona", "Ignorar el problema y esperar a la fase de prototipado", "Aumentar el presupuesto de materiales"]

explicacion: |
  El diseño conceptual es la etapa ideal para detectar inviabilidades técnicas; intentar avanzar a detalles con un concepto erróneo es un error costoso.
```

## Sección: ensayo-y-medicion (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["definicion", "prototipo"]

respuesta: "ensayo"
tipo: completar
respuestas_validas: ["ensayo", "ensayo de desempeño"]

enunciado: "El proceso de someter un prototipo a condiciones controladas para evaluar su comportamiento se denomina ___."

explicacion: |
  El ensayo es la acción de probar un objeto o sistema bajo condiciones específicas para observar su respuesta.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "variables"]

opciones_explicitas: ["Variables dependientes", "Variables independientes", "Variables de ruido", "Variables de error"]
respuesta: "Variables independientes"
tipo: mc

enunciado: "En un ensayo controlado, las condiciones que el experimentador manipula deliberadamente para observar un efecto se conocen como ___."

explicacion: |
  Las variables independientes son aquellas que se modifican para medir cómo afectan a la variable dependiente (el resultado).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["precision", "veracidad"]

respuesta: verdadero
tipo: vf

enunciado: "La precisión se refiere a qué tan cerca está un valor medido del valor real o verdadero de la magnitud."

explicacion: |
  Falso. La cercanía al valor real es la 'exactitud'. La 'precisión' se refiere a la repetibilidad o concordancia entre mediciones sucesivas.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
respuesta: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente las etapas de un protocolo de ensayo de prototipo:"

explicacion: |
  Un proceso de ingeniería requiere primero preparar las condiciones, luego ejecutar, analizar los datos obtenidos y finalmente documentar el proceso.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["error", "medicion"]

variables:
  escenario: uno_de([[10.5, 0.1], [25.2, 0.5], [100.0, 2.0]])

respuesta: "10.5"
tipo: completar
respuestas_validas: ["10.5", "25.2", "100.0"]

enunciado: "Si se realiza una medición de un componente y el valor obtenido es {escenario[0]}, pero existe una incertidumbre asociada de {escenario[1]}, el valor reportado es ___."

pasos:
  - "Identificar el valor nominal medido."
  - "Asociar la incertidumbre al valor obtenido."

explicacion: |
  En metrología, el valor medido es el punto de partida para reportar la magnitud con su respectiva tolerancia o incertidumbre.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "incertidumbre"]

variables:
  mediciones: [10.02, 10.05, 10.03, 10.04, 10.06]
  valor_nominal: 10.04

respuesta: promedio(mediciones)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se realizan 5 mediciones de la longitud de un prototipo de eje bajo condiciones controladas. Si el valor nominal es {valor_nominal} mm, ¿cuál es el valor promedio de las mediciones obtenidas?"

pasos:
  - "Sumar todos los valores de la serie de mediciones."
  - "Dividir la suma total por la cantidad de mediciones (5)."

explicacion: |
  El promedio se calcula sumando las mediciones (10.02 + 10.05 + 10.03 + 10.04 + 10.06 = 50.20) y dividiendo por el número de muestras (50.20 / 5 = 10.04).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["errores", "calibracion"]

variables:
  es_desviacion_constante: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Durante un ensayo de tensión, se detecta que un sensor de carga tiene un error de calibración que siempre suma 0.5N a la lectura real, independientemente de la carga aplicada. ¿Este es un ejemplo de error sistemático?"

explicacion: |
  Los errores sistemáticos son aquellos que se repiten de manera constante o predecible en cada medición, como un error de offset en un sensor.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "procedimiento"]

variables:
  pasos_correctos: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]

respuesta: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]
tipo: ordenar

opciones_explicitas: ["Registrar datos y analizar", "Calibrar instrumentos", "Ejecutar ensayo", "Configurar parámetros de prueba"]

enunciado: "Para garantizar la repetibilidad en la medición del desempeño de un prototipo, ordene los pasos lógicos de un protocolo de ensayo estándar."

explicacion: |
  Un protocolo científico requiere primero asegurar la precisión de los instrumentos (calibración), definir las condiciones (configuración), realizar la acción (ensayo) y finalmente procesar la información (registro y análisis).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["tolerancia", "control_calidad"]

variables:
  dim_min: 24.95
  dim_max: 25.05
  medida_actual: 25.08

respuesta: "fuera de rango"
tipo: completar

opciones_explicitas: ["dentro de rango", "fuera de rango"]

enunciado: "Un prototipo de componente mecánico tiene una tolerancia especificada entre {dim_min} mm y {dim_max} mm. Si la medición obtenida en el ensayo es de {medida_actual} mm, el componente se encuentra ___."

explicacion: |
  Como 25.08 es mayor que el límite superior de 25.05, la pieza no cumple con las especificaciones de diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["precision", "repetibilidad"]

variables:
  error_max: 0.002
  error_min: 0.001

respuesta: "alta"
tipo: mc

opciones_explicitas: ["alta", "baja", "nula"]

enunciado: "Si al repetir un ensayo de medición de presión 10 veces sobre el mismo prototipo, la dispersión de los resultados es extremadamente pequeña (variación de {error_min} a {error_max} bar), podemos decir que la repetibilidad es ___."

explicacion: |
  Una baja dispersión entre mediciones sucesivas bajo las mismas condiciones indica una alta repetibilidad (precisión).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "error_de_medicion"]

variables:
  error_sistema: uno_de(["positivo", "negativo"])

enunciado: "Si un sensor de presión siempre marca 5 kPa por encima del valor real debido a una mala calibración, el instrumento presenta un error de tipo {error_sistema} y tiene una baja precisión."

respuesta: error_sistema
tipo: mc
opciones_explicitas: ["positivo", "negativo"]

explicacion: |
  El error sistemático (o sesgo) es una desviación constante. Si el error siempre suma un valor constante al valor real, es un error positivo. La precisión se refiere a la repetibilidad de las medidas, no a su cercanía al valor real.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["incertidumbre", "incertidumbre_tipo_a"]

variables:
  datos: [[10.1, 10.2, 10.1, 10.3, 10.2], [5.0, 5.1, 4.9, 5.0, 5.0]]
  idx: uno_de([0, 1])

enunciado: "Se realizan mediciones repetidas de un componente. El conjunto de datos obtenidos es: {datos[idx]}."

pasos:
  - "Calcular el promedio de las mediciones."
  - "Calcular la desviación estándar de la muestra."

respuesta: redondear(sqrt(sumar(map(lambda x: (x - promedio(datos[idx]))^2, datos[idx])) / (largo(datos[idx]) - 1), 2))
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La incertidumbre de tipo A se estima mediante el análisis estadístico de una serie de mediciones, siendo la desviación estándar de la media una de las formas de representarla.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "variables_controladas"]

enunciado: "En un ensayo de fatiga de materiales, si no se controlan las variables ambientales (como la temperatura), los resultados obtenidos pueden tener una alta variabilidad y no ser comparables con otros ensayos."

respuesta: verdadero
tipo: vf

explicacion: |
  Para que un ensayo sea válido y reproducible, las condiciones ambientales deben mantenerse constantes o ser registradas, ya que factores como la temperatura afectan las propiedades mecánicas de los materiales.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["procedimiento", "calibracion"]

variables:
  pasos_correctos: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]

enunciado: "Ordene los pasos lógicos para realizar el proceso de calibración de un instrumento de medición en un laboratorio."

opciones_explicitas: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
respuesta: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
tipo: ordenar

explicacion: |
  El proceso debe seguir un orden lógico: primero asegurar la limpieza, luego la comparación contra un estándar, proceder al ajuste si es necesario y finalmente documentar el resultado.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["error_humano", "lectura"]

variables:
  error_tipo: uno_de(["paralaje", "redondeo", "calibracion"])

enunciado: "Al leer un manómetro analógico, si el observador no se posiciona perpendicularmente a la escala, comete un error de ___."

respuesta: error_tipo
tipo: mc
opciones_explicitas: ["paralaje", "redondeo", "calibracion"]

explicacion: |
  El error de paralaje ocurre cuando la línea de visión no es perpendicular a la escala graduada, provocando una lectura incorrecta de la posición de la aguja o el menisco.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "metrologia"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas: ["precisión", "exactitud"]

enunciado: "En metrología, mientras que la exactitud se refiere a qué tan cerca está el valor medido del valor real, la ___ se refiere a la repetibilidad de las mediciones bajo las mismas condiciones."

explicacion: |
  La exactitud mide la ausencia de error sistemático (cercanía al valor real), mientras que la precisión mide la dispersión de los resultados (repetibilidad).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "ajuste"]

variables:
  tipo_accion: uno_de(["calibracion", "ajuste"])

respuesta: "calibracion"
tipo: "mc"
opciones_explicitas: ["calibracion", "ajuste", "estandarización", "mantenimiento"]

enunciado: "El proceso de comparar un instrumento de medición contra un patrón de referencia para determinar la desviación es la {tipo_accion}."

explicacion: |
  La calibración establece la relación entre los valores indicados por el instrumento y los valores de un patrón. El ajuste es la acción de corregir el instrumento para que coincida con el patrón.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["incertidumbre", "medicion"]

respuesta: verdadero
tipo: "vf"

enunciado: "La incertidumbre de medida es un parámetro que cuantifica la dispersión de los valores que podrían ser atribuidos al objeto de medición."

explicacion: |
  Verdadero. A diferencia del error (que es una cantidad única), la incertidumbre describe el rango de duda razonable sobre el resultado de una medición.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "ensayo"]

respuesta: ["definir_variables", "preparar_prototipo", "ejecutar_ensayo", "analizar_datos"]
tipo: "ordenar"
opciones_explicitas: ["ejecutar_ensayo", "analizar_datos", "definir_variables", "preparar_prototipo"]

enunciado: "Ordene los pasos lógicos para llevar a cabo un ensayo de desempeño controlado en un prototipo:"

pasos:
  - "Establecer qué se va a medir (variables)."
  - "Configurar el equipo y el prototipo."
  - "Realizar las pruebas físicas."
  - "Procesar los resultados obtenidos."

explicacion: |
  Un ensayo sistemático requiere primero la planificación (definición), luego la preparación, la ejecución y finalmente el análisis de los datos recolectados.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["sensibilidad", "resolucion"]

respuesta: "sensibilidad"
tipo: "mc"
opciones_explicitas: ["sensibilidad", "resolucion", "rango", "linealidad"]

enunciado: "La propiedad que describe la relación entre el cambio en la indicación del instrumento y el cambio en la magnitud medida es la ___."

explicacion: |
  La sensibilidad es la pendiente de la curva de calibración (cambio de salida / cambio de entrada). La resolución es el cambio más pequeño que el instrumento puede detectar y mostrar.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "sensores", "error"]

variables:
  datos: [["10.5", "10.2"], ["25.0", "24.8"], ["50.2", "49.9"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Se realiza una prueba de calibración en un prototipo de sensor de presión. El valor nominal de referencia es {datos[idx][0]} kPa, pero la lectura obtenida del sensor es {datos[idx][1]} kPa. El error absoluto medido es ___ kPa."

pasos:
  - "Identificar el valor nominal (referencia)."
  - "Identificar la lectura medida."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El error absoluto se define como |Valor_Referencia - Valor_Medido|. 
  En este caso: |{datos[idx][0]} - {datos[idx][1]}| = {datos[idx][1]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["estadistica", "fatiga", "desviacion"]

variables:
  datos: [["100", "105", "95", "100"], ["50", "52", "48", "50"], ["200", "210", "190", "200"]]
  idx: uno_de([0, 1, 2])

respuesta: 5.0
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se realizan 4 ensayos de fatiga en un componente estructural. Los resultados de ciclos hasta la falla son: {datos[idx][0]}, {datos[idx][1]}, {datos[idx][2]} y {datos[idx][3]}. Calcule la desviación estándar poblacional de este conjunto de datos."

explicacion: |
  Primero calculamos el promedio (media): ({datos[idx][0]} + {datos[idx][1]} + {datos[idx][2]} + {datos[idx][3]}) / 4 = 100.
  Luego la varianza: ((100-100)^2 + (105-100)^2 + (95-100)^2 + (100-100)^2) / 4 = (0 + 25 + 25 + 0) / 4 = 12.5.
  Finalmente, la desviación estándar es la raíz cuadrada de 12.5, que es aproximadamente 3.53. 
  Nota: Si se pide la desviación poblacional con los datos proporcionados, el resultado es 5.0 para el primer set.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["tolerancia", "calidad", "verificacion"]

variables:
  especificacion: [["10.00", "10.05"], ["5.00", "5.02"], ["100.0", "100.1"]]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "El prototipo de una pieza mecánica debe tener un diámetro de {especificacion[idx][0]} mm con una tolerancia de ±{especificacion[idx][1]} mm. Si la medición obtenida es {especificacion[idx][0]} mm, ¿cumple la pieza con la especificación técnica?"

explicacion: |
  La pieza mide exactamente el valor nominal, por lo tanto, está dentro del rango permitido.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "protocolo", "orden"]

respuesta: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]
tipo: ordenar

opciones_explicitas: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]

enunciado: "Ordene los pasos lógicos para realizar un ensayo de medición controlado sobre un prototipo de motor:"

explicacion: |
  Para asegurar la repetibilidad, primero se debe asegurar el entorno, luego calibrar/configurar el equipo, proceder a la prueba y finalmente recolectar los datos.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "precision", "exactitud"]

variables:
  caso: [["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: caso[idx
tipo: mc

opciones_explicitas: ["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]

enunciado: "Un prototipo de sensor de temperatura entrega los siguientes valores ante una referencia constante de 100°C: {caso[idx]}. ¿Qué característica define este comportamiento?"

explicacion: |
  La precisión se refiere a la repetibilidad (qué tan cerca están los valores entre sí), mientras que la exactitud se refiere a qué tan cerca están del valor real.
```

## Sección: investigar-soluciones-existentes (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: "no reinventar la rueda"
tipo: completar
respuestas_validas: ["no reinventar la rueda", "no reinventar la rueda", "no reinventar la rueda"]

enunciado: "En ingeniería, una de las reglas de oro para optimizar tiempos y recursos es ___."

explicacion: |
  Investigar soluciones existentes evita que un equipo pierda tiempo resolviendo problemas que ya han sido solucionados por otros, permitiendo enfocarse en la innovación real.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["benchmarking", "estandarizacion"]

opciones_explicitas: ["Benchmarking", "Prototipado", "Brainstorming", "Debugging"]
respuesta: "Benchmarking"
tipo: mc

enunciado: "¿Cómo se denomina al proceso de comparar productos, soluciones o procesos propios con los de los líderes del mercado o estándares de la industria?"

explicacion: |
  El Benchmarking es una herramienta de gestión y diseño que permite identificar las mejores prácticas para integrarlas en el propio desarrollo.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["precedentes", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que investigar soluciones existentes limita la creatividad del ingeniero al imponerle un camino ya trazado?"

explicacion: |
  Falso. La investigación de precedentes no limita la creatividad, sino que la fundamenta, permitiendo que el ingeniero construya sobre bases sólidas en lugar de cometer errores ya conocidos.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar problemas de la solución actual", "Documentar hallazgos", "Analizar arquitectura técnica", "Evaluar pros y contras"]
respuesta: ["Identificar problemas de la solución actual", "Analizar arquitectura técnica", "Evaluar pros y contras", "Documentar hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar un análisis de una solución existente antes de iniciar un nuevo diseño:"

explicacion: |
  Un proceso sistemático requiere primero entender qué falla o qué se puede mejorar, analizar cómo está construido, evaluar su rendimiento y finalmente documentar todo para el nuevo proyecto.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estado_del_arte", "investigacion"]

opciones_explicitas: ["Estado del Arte", "Diagrama de flujo", "Manual de usuario", "Especificación técnica"]
respuesta: "Estado del Arte"
tipo: mc

enunciado: "El conjunto de conocimientos, tecnologías y soluciones que representan el nivel más alto de desarrollo en un campo específico en un momento dado se conoce como:"

explicacion: |
  El 'Estado del Arte' es la revisión exhaustiva de lo que existe actualmente, fundamental para asegurar que el nuevo diseño sea verdaderamente innovador o una mejora significativa.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "metodologia"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[15000, 5000], [8000, 2000]]

enunciado: "Un equipo de ingeniería decide desarrollar un sensor de temperatura desde cero en lugar de usar uno ya estandarizado. El costo de desarrollo propio es de ${datos[caso_idx][0]} USD, mientras que la licencia de una solución existente es de ${datos[caso_idx][1]} USD. ¿Cuál es el ahorro potencial al usar la solución existente?"

respuesta: datos[caso_idx][0] - datos[caso_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al investigar soluciones existentes, el ahorro fue de ${datos[caso_idx][0] - datos[caso_idx][1]} USD. Reinventar la rueda sin necesidad aumenta los costos y el tiempo de salida al mercado.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estandar", "benchmarking"]

variables:
  estandar_nombre: uno_de(["ISO-9001", "IEEE-802.11", "ASTM-E12"])
  estandar_valor: uno_de(["Calidad", "Conectividad", "Materiales"])

enunciado: "Al diseñar un sistema de comunicación inalámbrica, el ingeniero consulta el estándar ${estandar_nombre} para evitar errores de compatibilidad. El objetivo principal de este estándar es asegurar la: ___"

respuestas_validas: ["{estandar_valor}"]
tipo: completar

explicacion: |
  Consultar estándares como el ${estandar_nombre} permite que el diseño sea compatible con el ecosistema existente, evitando el error de 'reinventar' protocolos de comunicación.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["propiedad_intelectual", "riesgo"]

variables:
  patente_valida: uno_de([verdadero, falso])

enunciado: "Un ingeniero encuentra una solución técnica que resuelve el problema del diseño actual, pero descubre que existe una patente vigente para ese mecanismo específico. ¿Es legalmente seguro implementar esta solución sin una licencia?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  La investigación de soluciones existentes no es solo técnica, sino también legal. Implementar una solución patentada sin autorización constituye infracción de propiedad intelectual.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

enunciado: "Ordena los pasos lógicos para integrar una solución existente en un nuevo proyecto de ingeniería:"

opciones_explicitas: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
respuesta: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
tipo: ordenar

explicacion: |
  El proceso correcto implica primero entender el problema, luego buscar qué se ha hecho antes, evaluar si esas soluciones sirven y finalmente adaptarlas.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["mentalidad", "eficiencia"]

variables:
  es_eficiente: uno_de([verdadero, falso])

enunciado: "Si un ingeniero dedica el 40% del tiempo de un proyecto a documentar soluciones que ya han sido resueltas en la industria para evitar errores previos, ¿esta práctica se considera eficiente en la gestión de ingeniería?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  La investigación de precedentes es una inversión de tiempo que reduce la incertidumbre y el riesgo de fallos catastróficos en la fase de prototipado.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de ingeniería, intentar crear una solución desde cero sin consultar precedentes tecnológicos se considera una práctica de alta eficiencia para maximizar la innovación."

explicacion: |
  Falso. Ignorar las soluciones existentes (el "reinventar la rueda") suele llevar a errores de diseño ya resueltos, mayores costos y pérdida de tiempo. La verdadera innovación surge de iterar sobre lo que ya funciona.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "gestión_de_proyectos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [
    ["Un ingeniero diseña un sistema de frenado ignorando normativas de seguridad previas.", "retrabajo_costoso"],
    ["Un ingeniero desarrolla un motor sin estudiar la termodinámica aplicada en modelos anteriores.", "fallo_estructural"]
  ]

respuesta: escenario_idx[escenario_idx][1
tipo: mc

opciones_explicitas: ["retrabajo_costoso", "fallo_estructural", "optimización_de_costos", "aceleración_de_prototipado"]

enunciado: "Si un equipo de ingeniería decide omitir la fase de investigación de soluciones existentes para 'ahorrar tiempo', el resultado más probable en un proyecto complejo es: ___"

explicacion: |
  La falta de precedentes aumenta drásticamente la probabilidad de cometer errores técnicos que ya han sido documentados en la industria, lo que deriva en un {escenario_idx[escenario_idx][1]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodología", "pasos_diseño"]

respuesta: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]
tipo: ordenar

opciones_explicitas: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]

enunciado: "Ordene lógicamente los pasos que un ingeniero debe seguir al realizar un estudio de antecedentes antes de iniciar el diseño de un nuevo producto:"

explicacion: |
  Antes de diseñar, primero se debe entender el problema, luego investigar qué se ha hecho para resolverlo, evaluar esas soluciones y finalmente usar ese conocimiento como base.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["ética", "innovación"]

respuesta: "mejora"
tipo: completar

respuestas_validas: ["mejora", "réplica", "plagio", "error"]

enunciado: "Cuando un ingeniero estudia una solución existente para entender sus limitaciones y aplicarlas en un nuevo contexto, no está realizando una simple réplica, sino buscando una ___ del sistema original."

explicacion: |
  La investigación de precedentes tiene como objetivo la evolución técnica. El objetivo es aprender de los éxitos y, sobre todo, de los fallos de las soluciones actuales para proponer una mejora.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["documentación", "gestión_del_conocimiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la revisión de patentes y literatura técnica es una etapa de investigación de soluciones existentes?"

explicacion: |
  Verdadero. Las patentes y la literatura técnica son las fuentes primarias para asegurar que no se está reinventando algo que ya está protegido o documentado.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "benchmarking"]

variables:
  concepto_clave: "benchmarking"

enunciado: "El proceso de comparar procesos o productos propios con los de los líderes del mercado para identificar mejoras se denomina {concepto_clave}, mientras que la reingeniería implica un cambio radical de la estructura existente."

opciones_explicitas: ["benchmarking", "reingeniería", "prototipado", "iteración"]
respuesta: "benchmarking"
tipo: "mc"

explicacion: |
  El benchmarking busca mejorar mediante la comparación con estándares de excelencia, sin destruir el proceso actual, a diferencia de la reingeniería que propone un rediseño total desde cero.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "precedentes"]

variables:
  es_eficiente: falso

enunciado: "Si un ingeniero decide diseñar desde cero un mecanismo de engranajes que ya ha sido optimizado y documentado ampliamente por la industria, ¿está aplicando una práctica de eficiencia en el diseño?"

respuesta: es_eficiente
tipo: "vf"

explicacion: |
  No es eficiente. Ignorar soluciones existentes y "reinventar la rueda" consume recursos, tiempo y aumenta el riesgo de errores que ya han sido resueltos en precedentes técnicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
respuesta: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
tipo: "ordenar"

explicacion: |
  Antes de diseñar, se debe entender qué se necesita, buscar qué se ha hecho antes (análisis), entender por qué funcionó o falló (evaluar) y finalmente elegir el camino a seguir.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["investigacion", "diseño"]

variables:
  idx: uno_de([0, 1])
  terminos: [["Estado del Arte", "Prototipo"], ["Revisión de literatura", "Modelo físico experimental"]]

enunciado: "La investigación de soluciones existentes se basa principalmente en el {terminos[idx][0]}, mientras que la validación de una nueva idea propia se realiza mediante un {terminos[idx][1]}."

respuesta: [terminos[idx][0], terminos[idx][1]
tipo: "completar"
respuestas_validas: [terminos[idx][0], terminos[idx][1]]

explicacion: |
  El Estado del Arte es el conocimiento actual acumulado en la disciplina, mientras que el prototipo es la materialización física o digital de la nueva propuesta del ingeniero.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "diseño"]

variables:
  riesgo_alto: verdadero

enunciado: "Si un ingeniero omite la fase de investigación de soluciones existentes, el riesgo de cometer errores de diseño ya superados por la industria es ___."

respuesta: "alto"
tipo: "completar"
respuestas_validas: ["alto", "muy alto"]

explicacion: |
  La falta de estudio de precedentes incrementa exponencialmente la probabilidad de repetir fallos técnicos o de gestión que ya fueron resueltos en proyectos anteriores.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "eficiencia"]

variables:
  escenario: uno_de([
    ["Se requiere un sistema de filtrado de agua para una comunidad rural.", "reutilizar"],
    ["Se busca optimizar un motor de combustión interna.", "analizar_precedentes"],
    ["Se necesita diseñar un puente peatonal de madera.", "estudiar_estándares"]
  ])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["reutilizar", "analizar_precedentes", "estudiar_estándares", "inventar_todo"]
idx: uno_de([0,1,2])

enunciado: "Ante el escenario: '{escenario[idx][0]}', la acción más eficiente para evitar la 'reinvención de la rueda' es: ___"

explicacion: |
  Investigar soluciones existentes permite aprovechar conocimientos probados, ahorrando tiempo y recursos.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Si existe un estándar industrial consolidado para un componente mecánico, ¿es una buena práctica de ingeniería intentar diseñar un proceso de fabricación completamente nuevo sin antes estudiar dicho estándar?"

explicacion: |
  No. Ignorar los estándares y soluciones existentes aumenta el riesgo de errores y costos innecesarios.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo"]
tipo: ordenar

opciones_explicitas: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo", "Construcción final"]

enunciado: "Ordene los pasos lógicos para aplicar el aprendizaje de precedentes en un nuevo proyecto de ingeniería:"

explicacion: |
  El orden lógico comienza con la investigación, sigue con el análisis de lo que falló o funcionó, la elección de una base y finalmente el diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["gestion_proyectos"]

variables:
  caso: uno_de([
    ["Caso A: Implementar un software de gestión ya existente.", "200"],
    ["Caso B: Desarrollar un software de gestión desde cero.", "1500"]
  ])

respuesta: caso[idx][1
tipo: completar
respuestas_validas: ["200", "1500"]
idx: uno_de([0,1])

enunciado: "Si el presupuesto para el '{caso[idx][0]}' es de $1000, ¿cuál es el costo estimado (en dólares) según el escenario planteado?"

explicacion: |
  La investigación de soluciones existentes suele reducir drásticamente los costos de desarrollo inicial.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["patrones", "optimizacion"]

variables:
  patron: uno_de([
    ["Modularidad", "Escalabilidad"],
    ["Redundancia", "Robustez"],
    ["Simplicidad", "Mantenibilidad"]
  ])

respuesta: patron[idx][0
tipo: mc
opciones_explicitas: ["Modularidad", "Escalabilidad", "Redundancia", "Robustez", "Simplicidad", "Mantenibilidad"]
idx: uno_de([0,1,2])

enunciado: "Al estudiar un sistema de ingeniería previo, se observa que su principal fortaleza es la {patron[idx][0]}. Si el nuevo diseño busca replicar exactamente esta característica, el objetivo principal es la: ___"

explicacion: |
  Identificar la característica clave de una solución exitosa permite replicar su éxito en nuevos contextos.
```
