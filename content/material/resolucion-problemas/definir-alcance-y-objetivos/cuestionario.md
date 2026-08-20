# Resolucion Problemas — Definir alcance y objetivos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de alcance

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["alcance", "definicion"]

respuesta: "alcance"
tipo: completar
respuestas_validas:
  - "alcance"

enunciado: "La delimitación de las tareas, entregables y límites de un proyecto se denomina ________."

explicacion: |
  El alcance define los límites del proyecto: qué se va a hacer y, muy importante, qué no se va a hacer.
```

### 2 — Objetivos SMART

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "smart"]

variables:
  es_smart: uno_de([verdadero, falso])

respuesta: es_smart
tipo: completar
enunciado: "Un objetivo que es ambiguo, no tiene una fecha de finalización clara y no es medible, ¿cumple con la metodología SMART? {es_smart == falso}"

explicacion: |
  Para que un objetivo sea SMART debe ser Específico, Medible, Alcanzable, Relevante y con un Tiempo determinado.
```

### 3 — Componentes de un objetivo

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "estructura"]

opciones_explicitas: ["Entregable", "Recurso", "Restricción", "Meta"]

respuesta: "Entregable"
tipo: mc

enunciado: "En la definición de un proyecto, un producto tangible o intangible que se debe producir para completar una fase se conoce como:"

explicacion: |
  Los entregables son los resultados concretos que permiten verificar el progreso hacia los objetivos.
```

### 4 — Exclusiones del proyecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["alcance", "limites"]

opciones_explicitas: ["Inclusiones", "Exclusiones", "Riesgos", "Costos"]

respuesta: "Exclusiones"
tipo: mc

enunciado: "Para evitar la corrupción del alcance (scope creep), es fundamental definir claramente las ________, es decir, aquello que el proyecto NO cubrirá."

explicacion: |
  Definir las exclusiones ayuda a gestionar las expectativas de los stakeholders y evita que el proyecto crezca descontroladamente.
```

### 5 — Ciclo de definición

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Identificar el problema", "Definir objetivos", "Establecer el alcance", "Validar con stakeholders"]

respuesta_orden: ["Identificar el problema", "Definir objetivos", "Establecer el alcance", "Validar con stakeholders"]
tipo: ordenar

enunciado: "Ordene cronológicamente los pasos lógicos para la fase inicial de planificación de un proyecto:"

explicacion: |
  Primero se entiende el problema, luego se establece qué se quiere lograr (objetivos), se delimita el trabajo (alcance) y finalmente se busca la aprobación de los interesados.
```

### 6 — El alcance de la App de Delivery

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["gestion_proyectos", "alcance"]

variables:
  escenario: uno_de([["App de delivery de comida", "incluye la gestión de pedidos y pagos", "no incluye la preparación de los alimentos"], ["Sistema de gestión de biblioteca", "incluye el préstamo de libros", "no incluye la compra de nuevos ejemplares"], ["Software de turnos médicos", "incluye la reserva de citas", "no incluye la gestión de salarios del personal"]])

enunciado: "Se está diseñando un proyecto para una {escenario[0]}. Según la definición de alcance establecida, el proyecto {escenario[1]} pero {escenario[2]}."

respuesta: "incluye la gestión de pedidos y pagos"
tipo: mc
opciones_explicitas: ["incluye la gestión de pedidos y pagos", "incluye la preparación de los alimentos", "no incluye la gestión de pedidos y pagos", "no incluye la preparación de los alimentos"]

explicacion: |
  El alcance define los límites del proyecto. En este caso, la gestión de pedidos es parte del software (incluido), mientras que la preparación de la comida es una tarea operativa externa al software (no incluido).
```

### 7 — ¿Es un objetivo SMART?

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "smart"]

enunciado: "Un equipo de desarrollo establece el siguiente objetivo: 'Aumentar el número de usuarios activos en un 20% en los próximos 3 meses mediante una campaña de marketing'. ¿Este objetivo cumple con el criterio de ser 'Medible' (Measurable)?"

respuesta: verdadero
tipo: vf

explicacion: |
  Sí, es medible porque establece un porcentaje específico (20%) que permite verificar si se cumplió o no el objetivo al finalizar el periodo.
```

### 8 — Componentes de un objetivo

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "estructura"]

enunciado: "Para que un objetivo esté bien definido, debe responder a qué se quiere lograr y ___. El primer componente es el 'qué' y el segundo es el 'cuánto' o 'cuándo'."

respuestas_validas:
  - "cuándo"
  - "en qué tiempo"
  - "el plazo"
respuesta: "cuándo"
tipo: completar

explicacion: |
  Un objetivo debe ser concreto. Decir "mejorar las ventas" es vago; decir "mejorar las ventas un 10% en diciembre" define el qué y el cuándo.
```

### 9 — Pasos para definir el alcance

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Ordena los pasos lógicos para definir el alcance de un nuevo proyecto de software:"

opciones_explicitas: ["Identificar las necesidades del cliente", "Definir los límites (qué incluye y qué no)", "Validar el alcance con los stakeholders", "Crear el cronograma de trabajo"]
respuesta_orden: ["Identificar las necesidades del cliente", "Definir los límites (qué incluye y qué no)", "Validar el alcance con los stakeholders", "Crear el cronograma de trabajo"]
tipo: ordenar

explicacion: |
  Primero se entiende la necesidad, luego se delimita el trabajo, se busca la aprobación de los interesados y finalmente se planifica el tiempo.
```

### 10 — El límite del proyecto

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["exclusiones", "riesgos"]

variables:
  caso: uno_de([["desarrollar una web de e-commerce", "el soporte técnico post-venta", "el diseño de la marca"], ["crear un sistema de riego automático", "la instalación de los caños", "la compra de las plantas"], ["diseñar un mueble de oficina", "el transporte a domicilio", "la materia prima"]])

enunciado: "Si el objetivo principal es {caso[0]}, definir que {caso[1]} queda fuera del proyecto es una acción de..."

respuesta: "definición de exclusiones"
tipo: mc
opciones_explicitas: ["definición de exclusiones", "definición de objetivos", "gestión de riesgos", "planificación de recursos"]

explicacion: |
  Definir qué NO incluye el proyecto (exclusiones) es fundamental para evitar el 'scope creep' o corrupción del alcance, que ocurre cuando el proyecto crece sin control.
```

### 11 — El error de la ambigüedad en objetivos

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "metodologia", "errores"]

respuesta: "SMART"
tipo: completar
respuestas_validas:
  - "SMART"
  - "smart"

enunciado: "Para evitar la ambigüedad, los objetivos de un proyecto deben seguir la metodología ___ (específicos, medibles, alcanzables, relevantes y con un tiempo definido)."

explicacion: |
  Un objetivo mal definido es vago (ej: "mejorar el servicio"). Un objetivo SMART permite medir el éxito del proyecto al final del mismo.
```

### 12 — Alcance vs. Deseos del cliente

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["alcance", "gestion_proyectos"]

opciones_explicitas: ["Incluido en el alcance", "No incluido en el alcance"]

respuesta: "No incluido en el alcance"
tipo: mc

enunciado: "Si el documento de alcance define que el proyecto es 'Desarrollo de una aplicación de delivery' pero no menciona explícitamente la integración de pasarelas de pago, el ítem 'incluye el módulo de pagos' se considera: ___"

explicacion: |
  El alcance debe ser explícito. Si algo no está listado como entregable o actividad, se considera fuera del alcance (out of scope) para evitar el 'scope creep'.
```

### 13 — Verdadero o Falso: La naturaleza de los objetivos

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "teoria"]

respuesta: falso
tipo: vf

enunciado: "Los objetivos de un proyecto son los medios o las actividades que se realizan para alcanzar el fin último. ¿Verdadero o Falso?"

explicacion: |
  Falso. Los objetivos son los fines o resultados esperados. Las actividades y medios son los pasos para alcanzar esos objetivos. Confundirlos lleva a gestionar tareas en lugar de resultados.
```

### 14 — El proceso de definición de alcance

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

opciones_explicitas: ["Identificar necesidades", "Definir entregables", "Validar con stakeholders", "Establecer exclusiones"]

respuesta_orden: ["Identificar necesidades", "Definir entregables", "Validar con stakeholders", "Establecer exclusiones"]
tipo: ordenar

enunciado: "Ordena cronológicamente las etapas lógicas para establecer un alcance de proyecto sólido:"

explicacion: |
  Primero se entiende qué se necesita, luego qué se va a entregar, se consulta con los interesados para validar y finalmente se deja claro qué NO se va a hacer (exclusiones).
```

### 15 — La trampa del 'Scope Creep'

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["riesgos", "alcance"]

variables:
  caso: uno_de([["El cliente solicita un botón extra sin cambiar el presupuesto ni el tiempo", "Aumenta el costo y el tiempo"], ["El cliente solicita un cambio de color en el logo sin afectar el cronograma", "No afecta el alcance"], ["El cliente pide una funcionalidad nueva a mitad del desarrollo sin renegociar", "Aumenta el costo y el tiempo"]])

opciones_explicitas: ["No afecta el alcance", "Aumenta el costo y el tiempo"]

respuesta: caso[1]
tipo: mc

enunciado: "En el escenario donde '{caso[0]}', el fenómeno conocido como 'Scope Creep' (corrimiento del alcance) provoca que: ___"

explicacion: |
  El Scope Creep ocurre cuando el alcance crece de forma descontrolada sin los ajustes correspondientes en recursos, tiempo o presupuesto, poniendo en riesgo el éxito del proyecto.
```

### 16 — Alcance vs. Objetivos

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "gestion_proyectos"]

respuesta: "objetivos"
tipo: "completar"
respuestas_validas:
  - "objetivos"
  - "el objetivo"

enunciado: "Mientras que el alcance define los límites y entregables de un proyecto, los ___ definen el propósito y los resultados que se desean alcanzar."

explicacion: |
  El alcance delimita el 'qué' y el 'hasta dónde' (fronteras), mientras que los objetivos definen el 'para qué' (metas/resultados).
```

### 17 — El límite del alcance

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["exclusiones", "gestion_riesgos"]

variables:
  escenario: uno_de([["Incluir soporte técnico 24/7", "Excluir mantenimiento preventivo"], ["Desarrollar la app móvil", "Excluir la versión web"], ["Instalar el software", "Excluir la capacitación de usuarios"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["Incluir soporte técnico 24/7", "Excluir mantenimiento preventivo", "Desarrollar la app móvil", "Excluir la versión web", "Instalar el software", "Excluir la capacitación de usuarios"]

enunciado: "En la gestión de proyectos, definir lo que NO está incluido en el alcance es tan crítico como definir lo que sí está. Si un proyecto tiene como límite definido el desarrollo de una aplicación móvil, ¿cuál de los siguientes ejemplos representa una exclusión clara del alcance?"

pasos:
  - "Identificar el entregable principal definido en el enunciado."
  - "Buscar la opción que represente una tarea o producto fuera de ese entregable."

explicacion: |
  Definir las exclusiones (out-of-scope) ayuda a prevenir el 'scope creep' (corrimiento del alcance) y gestiona las expectativas del cliente.
```

### 18 — Características de los objetivos

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["metodologia_smart"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Un objetivo de proyecto debe ser medible y tener un tiempo determinado para diferenciarse de un deseo general?"

explicacion: |
  Efectivamente, un objetivo mal definido (sin métrica o tiempo) es solo una intención, mientras que un objetivo bien definido permite evaluar el éxito del proyecto.
```

### 19 — Jerarquía de la planificación

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["secuencia_logica"]

respuesta_orden: ["objetivos", "alcance", "entregables", "tareas"]
tipo: "ordenar"
opciones_explicitas: ["objetivos", "alcance", "entregables", "tareas"]

enunciado: "Ordena lógicamente los elementos de planificación, desde la intención estratégica hasta la ejecución operativa:"

explicacion: |
  Primero se establece el propósito (objetivos), luego se delimita el trabajo (alcance), luego se definen los productos finales (entregables) y finalmente las acciones concretas (tareas).
```

### 20 — El impacto del alcance mal definido

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["riesgos", "gestion_proyectos"]

variables:
  caso: uno_de([["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"], ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"], ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"]])

respuesta: "retrasar la fecha de entrega"
tipo: "mc"
opciones_explicitas: ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"]

enunciado: "Cuando el alcance no se define correctamente y se permiten cambios constantes sin control (scope creep), ¿cuál es la consecuencia más directa en el cronograma del proyecto?"

explicacion: |
  El descontrol en el alcance consume más horas de las previstas, lo que impacta directamente en el cumplimiento de los plazos (retraso).
```

### 21 — Alcance de un proyecto de software

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "basico"
  tags: ["gestion_proyectos", "alcance"]

variables:
  escenario: uno_de([["Desarrollar una app de delivery para restaurantes", "Incluye: gestión de pedidos y pagos. No incluye: logística de repartidores."], ["Crear un sistema de inventario para una farmacia", "Incluye: control de stock y vencimientos. No incluye: venta al público."], ["Diseñar una web de e-commerce para ropa", "Incluye: catálogo y carrito de compras. No incluye: gestión de envíos internacionales."]])

tipo: mc
opciones_explicitas: ["Definir qué tareas se realizarán y cuáles quedan fuera del proyecto", "Establecer únicamente el presupuesto total", "Determinar quiénes serán los clientes finales", "Definir la fecha de finalización sin considerar tareas"]

enunciado: "Para el proyecto '{escenario[0]}', la definición de alcance correcta sería: {escenario[1]}"

respuesta: "Definir qué tareas se realizarán y cuáles quedan fuera del proyecto"

explicacion: |
  El alcance delimita las fronteras del proyecto, especificando qué entregables se incluirán y qué está fuera de los límites para evitar la expansión descontrolada del proyecto (scope creep).
```

### 22 — Objetivos SMART

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "smart"]

variables:
  caso: uno_de([["Aumentar las ventas un 20% en 6 meses", "Verdadero"], ["Mejorar la calidad del servicio", "Falso"], ["Reducir costos de producción", "Falso"]])

tipo: completar
respuesta: caso[1]

enunciado: "Analizando el siguiente objetivo: '{caso[0]}'. ¿Cumple con los criterios SMART (Específico, Medible, Alcanzable, Relevante y con Tiempo definido)? {caso[1]}"

explicacion: |
  Un objetivo SMART debe ser medible y tener un plazo determinado. 'Mejorar la calidad' es un deseo, no un objetivo SMART, porque no indica cuánto ni cuándo.
```

### 23 — Elementos de la definición de alcance

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "basico"
  tags: ["alcance", "exclusiones"]

tipo: completar
respuestas_validas:
  - "exclusiones"
  - "límites"
respuesta: "exclusiones"

enunciado: "Para evitar malentendidos con el cliente, es fundamental definir claramente las ________ que el proyecto no cubrirá."

explicacion: |
  Definir las exclusiones (o límites) es tan importante como definir los entregables, ya que previene que el cliente asuma que ciertas tareas están incluidas sin haberlas presupuestado.
```

### 24 — Jerarquía de objetivos

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "avanzado"
  tags: ["objetivos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Objetivo General", "Objetivos Específicos", "Metas Operativas"]

enunciado: "Ordena jerárquicamente los niveles de objetivos de un proyecto, desde el más macro hasta el más micro:"

explicacion: |
  El objetivo general es el propósito principal; los específicos desglosan ese propósito en partes manejables, y las metas operativas son los pasos concretos y medibles para alcanzar los específicos.
respuesta_orden: ["Objetivo General", "Objetivos Específicos", "Metas Operativas"]
```

### 25 — Validación de objetivos

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "intermedio"
  tags: ["validacion", "riesgos"]

variables:
  escenario: uno_de([["El objetivo es 'Lanzar la app mañana' sin haber probado el código.", "Inviable"], ["El objetivo es 'Reducir el error humano en un 5% mediante capacitación'.", "Viable"], ["El objetivo es 'Ser la empresa líder del mundo en un año'.", "Inviable"]])

tipo: mc
opciones_explicitas: ["Inviable", "Viable"]

enunciado: "Evaluando el objetivo planteado: '{escenario[0]}'. ¿Es un objetivo realista y alcanzable para el equipo? {escenario[1]}"

respuesta: escenario[1]

explicacion: |
  Un objetivo debe ser realista. Los objetivos que ignoran la calidad técnica o que son excesivamente ambiciosos sin un plan de acción (como ser líderes mundiales en un año) se consideran inviables.
```
