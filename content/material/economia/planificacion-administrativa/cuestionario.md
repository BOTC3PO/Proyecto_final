# Economia — Planificacion administrativa (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_basicos", "gestion"]

tipo: mc
opciones_explicitas: ["El proceso de tomar decisiones anticipadas para alcanzar objetivos", "La ejecución de tareas diarias sin un orden previo", "El análisis de los resultados obtenidos tras una crisis", "La asignación de recursos basada en la intuición"]
respuesta: "El proceso de tomar decisiones anticipadas para alcanzar objetivos"

enunciado: "La planificación administrativa se define como ___________."

explicacion: |
  La planificación es la función administrativa que consiste en establecer metas y elegir los medios para alcanzarlas, actuando de forma anticipada.
```

### 2 — Elementos de la Planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["elementos", "objetivos"]

tipo: completar
respuestas_validas:
  - "objetivos"
  - "estrategias"
  - "recursos"

enunciado: "Para que una planificación sea efectiva, debe definir claramente los ___________ que se desean alcanzar, las ___________ para lograrlos y los ___________ necesarios para llevar a cabo las acciones."

explicacion: |
  La planificación requiere de objetivos (el qué), estrategias (el cómo) y recursos (con qué).
```

### 3 — La importancia del "Cuándo"

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["temporalidad", "cronograma"]

tipo: vf
enunciado: "La planificación implica determinar el momento exacto (cuándo) en que deben ejecutarse las acciones para asegurar la eficiencia operativa."

respuesta: verdadero

explicacion: |
  La dimensión temporal es fundamental; sin un cronograma o tiempos definidos, la planificación carece de control y seguimiento.
```

### 4 — Fases del Proceso Administrativo

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["proceso_administrativo", "orden"]

tipo: ordenar
opciones_explicitas: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

enunciado: "Ordene cronológicamente las etapas lógicas de un proceso de planificación administrativa:"

respuesta_orden: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

explicacion: |
  Aunque los modelos varían, la lógica administrativa requiere primero saber a dónde ir (objetivos), dónde estamos (diagnóstico), cómo llegaremos (planes) y cómo nos aseguramos de haber llegado (control).
```

### 5 — Escalas de la Planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["niveles", "estrategia"]

variables:
  datos: [["estratégica", "largo plazo"], ["operativa", "corto plazo"]]
  idx: uno_de([0, 1])
  tipo_planificacion: datos[idx][0]
  horizonte: datos[idx][1]

tipo: completar
respuesta: "___"
enunciado: "La planificación que se realiza a nivel de alta dirección, enfocándose en la organización como un todo y con un horizonte de {horizonte}, es la planificación {tipo_planificacion}."
explicacion: |
  La planificación estratégica es global y de largo plazo, mientras que la operativa es específica y de corto plazo.
```

### 6 — El proceso de planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: "establecer objetivos"
tipo: completar
respuestas_validas:
  - "establecer objetivos"
  - "definir metas"

enunciado: "La primera etapa fundamental de la planificación administrativa consiste en ___ para saber hacia dónde se dirige la organización."

explicacion: |
  La planificación comienza con la definición de los objetivos o metas. Sin un norte claro, los demás pasos (cómo, cuándo y con qué recursos) carecen de propósito.
```

### 7 — Análisis de un caso de expansión

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["toma_de_decisiones", "estrategia"]

variables:
  escenario: uno_de([["Abrir una sucursal en otra ciudad", "aumentar costos fijos", "crecer mercado"], ["Lanzar un producto digital", "reducir costos de envío", "expandir alcance"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["aumentar costos fijos", "reducir costos de envío", "maximizar beneficios", "reducir personal"]

enunciado: "Una empresa decide expandirse mediante la apertura de una nueva sucursal física. Según la planificación estratégica, esta acción implica principalmente: {escenario[0]}."

explicacion: |
  Al abrir una sucursal física, la empresa está planificando un crecimiento que conlleva un aumento en sus costos fijos (alquiler, servicios, salarios fijos), como se indica en la opción seleccionada.
```

### 8 — Verdad o Falso: El carácter de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "La planificación administrativa es un proceso estático que, una vez definido, no debe ser revisado aunque el entorno cambie."

explicacion: |
  Falso. La planificación debe ser flexible. Si el entorno (economía, competencia, leyes) cambia, la planificación debe ajustarse para asegurar el cumplimiento de los objetivos.
```

### 9 — Secuencia de la planificación operativa

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma"]
tipo: ordenar
opciones_explicitas: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma"]

enunciado: "Para implementar un nuevo proyecto de producción, un gerente debe seguir un orden lógico de planificación. Ordene los siguientes pasos de forma secuencial:"

explicacion: |
  Primero se define el 'qué' (metas), luego el 'cómo' (acciones), después el 'con qué' (recursos) y finalmente el 'cuándo' (cronograma). La evaluación es un paso posterior al proceso de ejecución.
```

### 10 — Cálculo de presupuesto planificado

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["presupuesto", "calculo"]

variables:
  datos: [[5000, 1200, 3000], [8000, 2500, 5500], [3000, 900, 2100]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] - datos[idx][1] - datos[idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la fase de planificación de presupuesto, una empresa proyecta los siguientes valores para el próximo trimestre: Ingresos estimados: ${datos[idx][0]}, Gastos operativos: ${datos[idx][1]}, Impuestos proyectados: ${datos[idx][2]}. ¿Cuál es el beneficio neto planificado?"

pasos:
  - "Identificar los ingresos proyectados."
  - "Restar los gastos operativos."
  - "Restar los impuestos proyectados del resultado anterior."

explicacion: |
  El beneficio neto planificado se obtiene restando todos los costos y gastos proyectados de los ingresos totales previstos.
```

### 11 — Planificación vs. Control

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos", "administracion"]

respuesta: falso
tipo: vf

enunciado: "La planificación es un proceso que ocurre exclusivamente después de la ejecución de las actividades para corregir errores."

explicacion: |
  La planificación es un proceso proactivo que se realiza antes de la acción. El proceso de comparar lo ejecutado con lo planificado es lo que se denomina 'control'.
```

### 12 — Elementos de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["elementos", "objetivos"]

variables:
  datos: [["definir el rumbo", "qué hacer"], ["establecer métodos", "cómo hacerlo"], ["fijar plazos", "cuándo hacerlo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "qué hacer"
  - "cómo hacerlo"
  - "cuándo hacerlo"

enunciado: "En la etapa de planificación, cuando una empresa decide establecer los procedimientos y recursos necesarios para alcanzar sus metas, está definiendo ___."

explicacion: |
  La planificación implica determinar las acciones (qué), los métodos (cómo) y los tiempos (cuándo).
```

### 13 — El error de la planificación rígida

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["flexibilidad", "errores"]

respuesta: "Planificación excesivamente rígida"
tipo: mc
opciones_explicitas: ["Planificación excesivamente rígida", "Falta de objetivos", "Exceso de control", "Delegación ineficiente"]

enunciado: "Un error común en la planificación es diseñar planes que no permiten ajustes ante cambios en el entorno, lo que se conoce como:"

explicacion: |
  Una planificación efectiva debe ser flexible para adaptarse a las contingencias del mercado sin perder de vista el objetivo final.
```

### 14 — Secuencia del proceso administrativo

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos", "orden"]

respuesta_orden: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las etapas del proceso administrativo en su secuencia lógica estándar:"

explicacion: |
  El proceso administrativo comienza con la planificación (establecer metas), seguido de la organización (asignar recursos), la dirección (ejecutar/guiar) y el control (evaluar).
```

### 15 — La naturaleza de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "avanzado"
  tags: ["incertidumbre", "riesgo"]

variables:
  caso: uno_de([[0.85, "alta"], [0.40, "baja"], [0.10, "nula"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["alta", "baja", "nula"]

enunciado: "Si una empresa planifica basándose en un entorno con una probabilidad de éxito del {caso[0]}, la incertidumbre asociada a su planificación es ___."

explicacion: |
  A mayor probabilidad de éxito o mayor control sobre las variables, menor es la incertidumbre. Sin embargo, la planificación siempre busca reducir la incertidumbre, pero nunca puede eliminarla por completo.
```

### 16 — Planificación vs. Control

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["procesos_administrativos", "gestion"]

respuesta: "control"
tipo: "completar"
respuestas_validas:
  - "control"
  - "Control"

enunciado: "Mientras que la planificación establece los objetivos y los medios para alcanzarlos, el proceso de ___ se encarga de verificar que las actividades se realicen conforme a lo planeado."

explicacion: |
  La planificación es la fase de diseño y establecimiento de metas, mientras que el control es la fase de monitoreo y corrección de desviaciones.
```

### 17 — El carácter de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: "vf"

enunciado: "La planificación administrativa se caracteriza por ser un proceso reactivo que solo se inicia una vez que los problemas han ocurrido en la organización."

explicacion: |
  Falso. La planificación es un proceso proactivo y preventivo que busca anticipar situaciones y establecer un curso de acción antes de que los eventos ocurran.
```

### 18 — Elementos de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["elementos", "metas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["establecer un objetivo", "definir el camino"], ["determinar una meta", "asignar recursos"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: [datos[escenario_idx][0], datos[escenario_idx][1], "evaluar resultados", "ejecutar órdenes"]

enunciado: "En el proceso de planificación, una vez que se ha logrado {datos[escenario_idx][0]}, la siguiente etapa lógica es {datos[escenario_idx][1]}."

explicacion: |
  La planificación requiere primero la definición del 'qué' (objetivo) y luego el 'cómo' (estrategia o asignación de recursos).
```

### 19 — Niveles de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["jerarquia", "niveles"]

respuesta_orden: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]
tipo: "ordenar"
opciones_explicitas: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]

enunciado: "Ordene los niveles de planificación de la organización desde el alcance más global y a largo plazo hasta el más específico y de corto plazo:"

explicacion: |
  La jerarquía administrativa comienza con la Estratégica (toda la empresa/largo plazo), sigue con la Táctica (departamentos/mediano plazo) y finaliza con la Operativa (tareas específicas/corto plazo).
```

### 20 — Diferencia con la Organización

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["procesos_administrativos"]

respuesta: "organizar"
tipo: "completar"
respuestas_validas:
  - "organizar"
  - "Organizar"

enunciado: "La planificación determina qué se va a hacer y qué recursos se necesitan; por el contrario, la función de ___ se encarga de distribuir esos recursos y asignar responsabilidades entre los miembros de la empresa."

explicacion: |
  La planificación es el diseño de la acción, mientras que la organización es la estructura que permite ejecutar dicha acción mediante la asignación de tareas y autoridad.
```

### 21 — El proceso de planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

variables:
  datos: [["establecer_objetivos", "definir_metas"], ["asignar_recursos", "distribuir_insumos"], ["determinar_plazos", "fijar_tiempos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["definir_metas", "distribuir_insumos", "fijar_tiempos", "evaluar_desempeño"]

enunciado: "En el proceso de planificación, el primer paso fundamental consiste en ___."

explicacion: |
  La planificación comienza con la definición de objetivos o metas que la organización desea alcanzar.
```

### 22 — ¿Es planificación?

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La planificación administrativa implica decidir por adelantado qué se va a hacer, cómo se va a hacer y cuándo se va a hacer."

explicacion: |
  Correcto. La esencia de la planificación es la anticipación de acciones para alcanzar objetivos.
```

### 23 — Secuencia de la planificación estratégica

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Diagnóstico", "Objetivos", "Estrategias", "Control"]
tipo: ordenar
opciones_explicitas: ["Diagnóstico", "Objetivos", "Estrategias", "Control"]

enunciado: "Ordene cronológicamente las etapas de un proceso de planificación estándar:"

explicacion: |
  La secuencia lógica siempre parte del análisis de la situación actual para luego proyectar metas y acciones.
```

### 24 — Elementos de la planificación

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["componentes"]

variables:
  datos: [["recursos_humanos", "personal"], ["presupuesto", "dinero"], ["maquinaria", "equipos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "personal"
  - "dinero"
  - "equipos"

enunciado: "Para ejecutar el plan de producción, la empresa debe planificar la asignación de ___."

explicacion: |
  La planificación requiere la asignación de recursos (humanos, financieros o materiales) para que los planes sean realizables.
```

### 25 — El factor tiempo

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  datos: [["corto_plazo", "1 año"], ["mediano_plazo", "3 años"], ["largo_plazo", "5 años"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 año", "3 años", "5 años", "10 años"]

enunciado: "Si una empresa está realizando una planificación de ___, su horizonte temporal suele ser de ___."

explicacion: |
  El horizonte temporal define si la planificación es operativa (corto), táctica (mediano) o estratégica (largo).
```
