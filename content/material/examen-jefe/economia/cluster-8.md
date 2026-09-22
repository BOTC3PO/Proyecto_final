# Examen jefe — [PENDIENTE #773]

> Logro #773. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: planificacion-administrativa (25 preguntas)

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

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["elementos", "objetivos"]

respuesta: "objetivos"
tipo: completar
respuestas_validas:
  - "objetivos"

enunciado: "Para que una planificación sea efectiva, debe definir claramente los ___________ que se desean alcanzar, así como las estrategias para lograrlos y los recursos necesarios para llevar a cabo las acciones."

explicacion: |
  La planificación requiere de objetivos (el qué), estrategias (el cómo) y recursos (con qué).
```

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
respuesta: tipo_planificacion
respuestas_validas:
  - tipo_planificacion
enunciado: "La planificación que se realiza a nivel de alta dirección, enfocándose en la organización como un todo y con un horizonte de {horizonte}, es la planificación ___."
explicacion: |
  La planificación estratégica es global y de largo plazo, mientras que la operativa es específica y de corto plazo.
```

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

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["toma_de_decisiones", "estrategia"]

respuesta: "aumentar costos fijos"
tipo: mc
opciones_explicitas: ["aumentar costos fijos", "reducir costos de envío", "maximizar beneficios", "reducir personal"]

enunciado: "Una empresa decide expandirse mediante la apertura de una nueva sucursal física. Según la planificación estratégica, esta acción implica principalmente: ___"

explicacion: |
  Al abrir una sucursal física, la empresa está planificando un crecimiento que conlleva un aumento en sus costos fijos (alquiler, servicios, salarios fijos), como se indica en la opción seleccionada.
```

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

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "avanzado"
  tags: ["incertidumbre", "riesgo"]

variables:
  caso: uno_de([[0.90, "baja"], [0.50, "moderada"], [0.15, "alta"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["alta", "baja", "moderada"]

enunciado: "Si una empresa planifica basándose en un entorno con una probabilidad de éxito del {caso[0]}, la incertidumbre asociada a su planificación es ___."

explicacion: |
  A mayor probabilidad de éxito o mayor control sobre las variables, menor es la incertidumbre. Sin embargo, la planificación siempre busca reducir la incertidumbre, pero nunca puede eliminarla por completo.
```

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

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: "definir_metas"
tipo: mc
opciones_explicitas: ["definir_metas", "distribuir_insumos", "fijar_tiempos", "evaluar_desempeño"]

enunciado: "En el proceso de planificación, el primer paso fundamental consiste en ___."

explicacion: |
  La planificación comienza con la definición de objetivos o metas que la organización desea alcanzar.
```

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

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  datos: [["corto plazo", "1 año"], ["mediano plazo", "3 años"], ["largo plazo", "5 años"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 año", "3 años", "5 años", "10 años"]

enunciado: "Si una empresa está realizando una planificación de {datos[idx][0]}, su horizonte temporal suele ser de ___."

explicacion: |
  El horizonte temporal define si la planificación es operativa (corto), táctica (mediano) o estratégica (largo).
```

## Sección: estados-contables (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el ciclo contable?"
tipo: mc
opciones_explicitas:
  - "La secuencia completa de pasos desde que ocurre un movimiento económico hasta que aparece en los estados contables finales"
  - "El período de un año calendario, sin más"
  - "El nombre de un software de contabilidad"
respuesta: "La secuencia completa de pasos desde que ocurre un movimiento económico hasta que aparece en los estados contables finales"

explicacion: |
  Conecta todos los pasos ya vistos por separado (asiento, Diario,
  Mayor) con los estados contables finales.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del ciclo contable, del primero al último."
opciones_explicitas:
  - "Se arman los estados contables"
  - "Ocurre el hecho económico"
  - "Se pasa la información al Libro Mayor"
  - "Se registra el asiento en el Libro Diario"
respuesta_orden: ["Ocurre el hecho económico", "Se registra el asiento en el Libro Diario", "Se pasa la información al Libro Mayor", "Se arman los estados contables"]

explicacion: |
  Cada paso depende del anterior: sin el hecho económico no hay
  asiento, sin asiento no hay mayor, sin mayor no hay estados
  contables.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué muestra el Estado de Situación Patrimonial?"
tipo: mc
opciones_explicitas:
  - "Una foto de un instante puntual: qué tiene y qué debe la empresa en esa fecha"
  - "Todo lo que ganó y gastó la empresa durante un período completo"
  - "Sólo las cuentas de Caja y Bancos"
respuesta: "Una foto de un instante puntual: qué tiene y qué debe la empresa en esa fecha"

explicacion: |
  Es una fotografía, no una película: describe un momento, no un
  período.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué muestra el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "Todo lo que ganó y gastó la empresa durante un período completo"
  - "Una foto de un instante puntual de la empresa"
  - "Sólo los préstamos pendientes de pago"
respuesta: "Todo lo que ganó y gastó la empresa durante un período completo"

explicacion: |
  Es una película de un período (un mes, un año), no una foto de un
  instante.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Estado de Situación Patrimonial se arma con la misma ecuación ya vista en Debe y Haber: Activo = Pasivo + Patrimonio Neto."

explicacion: |
  Es la misma ecuación contable fundamental, aplicada acá como
  producto final del ciclo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  activo: random(500, 900) * 1000
  pasivo: random(100, 400) * 1000

respuesta: activo - pasivo
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un Activo de ${activo} y un Pasivo de ${pasivo}. ¿Cuál es su Patrimonio Neto?"

explicacion: |
  Patrimonio Neto = Activo - Pasivo, despejando la ecuación contable.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  pasivo: random(100, 400) * 1000
  patrimonio_neto: random(200, 600) * 1000

respuesta: pasivo + patrimonio_neto
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa tiene un Pasivo de ${pasivo} y un Patrimonio Neto de ${patrimonio_neto}. ¿Cuál es su Activo total?"

explicacion: |
  Activo = Pasivo + Patrimonio Neto, aplicando la ecuación directo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cuándo una empresa tiene ganancia en el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "Cuando los Ingresos son mayores que los Gastos"
  - "Cuando el Activo es mayor que el Pasivo"
  - "Cuando el Pasivo es igual a cero"
respuesta: "Cuando los Ingresos son mayores que los Gastos"

explicacion: |
  Resultado = Ingresos - Gastos; si da positivo, es ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  ingresos: random(300, 700) * 1000
  gastos: random(100, 250) * 1000

respuesta: ingresos - gastos
tipo: input
tolerancia_abs: 0

enunciado: "Durante el mes, una empresa tuvo Ingresos por ${ingresos} y Gastos por ${gastos}. ¿Cuál es su resultado del período?"

explicacion: |
  Resultado = Ingresos - Gastos. Un número positivo es ganancia.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "calculo"]

variables:
  ingresos: random(100, 400) * 1000
  gastos: random(300, 700) * 1000
  resultado: ingresos - gastos

respuesta: (resultado < 0)
tipo: vf

enunciado: "Una empresa tuvo Ingresos de ${ingresos} y Gastos de ${gastos} en el período. ¿Es correcto decir que tuvo una pérdida?"

explicacion: |
  Se compara Ingresos contra Gastos: si Gastos es mayor, el resultado
  es negativo, o sea pérdida.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Para qué sirve el balance de comprobación, dentro del ciclo contable?"
tipo: mc
opciones_explicitas:
  - "Para verificar que la suma de todos los saldos deudores coincida con la suma de todos los saldos acreedores del Mayor"
  - "Para calcular el impuesto a las ganancias del período"
  - "Para registrar un nuevo asiento contable"
respuesta: "Para verificar que la suma de todos los saldos deudores coincida con la suma de todos los saldos acreedores del Mayor"

explicacion: |
  Es un control: si no coinciden, hay un error de carga en algún
  asiento del período.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué son los ajustes de cierre, en el ciclo contable?"
tipo: mc
opciones_explicitas:
  - "Correcciones que reconocen algo que ya pasó pero no se había registrado todavía (por ejemplo, la depreciación de una máquina)"
  - "Los primeros asientos que se cargan al empezar un ejercicio"
  - "Un tipo de impuesto que paga la empresa"
respuesta: "Correcciones que reconocen algo que ya pasó pero no se había registrado todavía (por ejemplo, la depreciación de una máquina)"

explicacion: |
  No vienen de un movimiento nuevo, sino de reconocer contablemente
  algo que ya venía ocurriendo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al cerrar el ejercicio, el resultado del período (ganancia o pérdida) pasa a formar parte del Patrimonio Neto."

explicacion: |
  Es el punto donde se conectan los dos estados contables: lo que
  ganó o perdió la empresa modifica lo que le queda a los dueños.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa tiene ganancia en un período, su Patrimonio Neto aumenta al cerrar el ejercicio."

explicacion: |
  La ganancia se suma al Patrimonio Neto en el cierre.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si una empresa tiene pérdida en un período, su Patrimonio Neto se reduce al cerrar el ejercicio."

explicacion: |
  La pérdida se resta del Patrimonio Neto en el cierre.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  patrimonio_inicial: random(500, 900) * 1000
  ingresos: random(200, 500) * 1000
  gastos: random(50, 180) * 1000

respuesta: patrimonio_inicial + (ingresos - gastos)
tipo: input
tolerancia_abs: 0

enunciado: "Una empresa arrancó el período con un Patrimonio Neto de ${patrimonio_inicial}. Durante el período tuvo Ingresos de ${ingresos} y Gastos de ${gastos}. ¿Cuál es su Patrimonio Neto al cierre?"

pasos:
  - "Resultado del período: {ingresos} - {gastos} = {ingresos - gastos}"
  - "Patrimonio final: {patrimonio_inicial} + {ingresos - gastos}"

explicacion: |
  El Patrimonio Neto final es el inicial más el resultado del
  período (que puede ser positivo o negativo).
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cuál de estas comparaciones describe mejor la diferencia entre el Estado de Situación Patrimonial y el Estado de Resultados?"
tipo: mc
opciones_explicitas:
  - "El Patrimonial es una foto de un instante; el de Resultados es una película de un período"
  - "El Patrimonial es mensual y el de Resultados es siempre anual"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El Patrimonial es una foto de un instante; el de Resultados es una película de un período"

explicacion: |
  Es la metáfora central del tema: uno describe un momento, el otro
  describe un tramo de tiempo.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Un banco quiere saber qué tiene y qué debe una empresa HOY antes de decidir si le da un crédito. ¿Qué estado contable conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Estado de Situación Patrimonial"
  - "El Estado de Resultados"
  - "El balance de comprobación únicamente"
respuesta: "El Estado de Situación Patrimonial"

explicacion: |
  Es la foto del instante presente: exactamente lo que necesita el
  banco para esa decisión.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Un inversor quiere saber si una empresa gana o pierde plata de forma sostenida en los últimos años. ¿Qué estado contable conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Estado de Resultados de varios períodos"
  - "El Estado de Situación Patrimonial de un solo día"
  - "El Libro Diario del último mes"
respuesta: "El Estado de Resultados de varios períodos"

explicacion: |
  Muestra la evolución de ganancias y pérdidas período a período, que
  es justo lo que necesita evaluar.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "basico"
  tags: ["contabilidad"]

variables:
  ingresos: random(200, 600) * 1000
  gastos: random(50, 150) * 1000
  resultado: ingresos - gastos

tipo: completar
enunciado: "Completá: Resultado = {ingresos} - {gastos} = ___ (resultado)."
respuestas_validas:
  - resultado

explicacion: |
  Es la aplicación directa de la fórmula del Estado de Resultados.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo contable completo es el PROCESO, y los estados contables (patrimonio y resultados) son el PRODUCTO de ese proceso: por eso se enseñan como un solo tema."

explicacion: |
  Es la idea central que conecta las dos partes del título de este
  tema.
```

```
metadata:
  materia: "economia"
  tema: "estados_contables"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El ciclo contable completo va desde que ocurre un movimiento económico (asiento, Diario, Mayor) hasta que se arman los estados contables finales de la empresa."

explicacion: |
  Es el resumen de todo el recorrido de esta sub-rama de Contabilidad.
```

## Sección: plazo-fijo-vs-inflacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

enunciado: "¿Qué es el rendimiento real de una inversión?"
tipo: mc
opciones_explicitas:
  - "Cuánto creció el poder adquisitivo del dinero, descontando la inflación del período"
  - "La tasa de interés que informa el banco, sin ajustar por nada más"
  - "La diferencia entre dos bancos distintos que ofrecen la misma inversión"
respuesta: "Cuánto creció el poder adquisitivo del dinero, descontando la inflación del período"

explicacion: |
  Es la diferencia entre "cuántos pesos más tengo" (nominal) y "cuánto
  más puedo comprar con esos pesos" (real).
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La tasa nominal es la que informa el banco: cuántos pesos de más da la inversión, sin ajustar por la inflación del período."

explicacion: |
  Es el punto de partida del cálculo, pero por sí sola no dice si el
  dinero ganó o perdió poder de compra.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "calculo"]

variables:
  tasa_nominal: random(20, 150)
  inflacion: random(20, 150)

respuesta: ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
tipo: input
tolerancia_abs: 0.3

enunciado: "Un plazo fijo pagó una tasa nominal anual del {tasa_nominal}%, en un año con una inflación del {inflacion}%. ¿Cuál fue el rendimiento real, en porcentaje?"

pasos:
  - "rendimiento_real = (1 + {tasa_nominal/100}) / (1 + {inflacion/100}) - 1"

explicacion: |
  Se aplica la ecuación de Fisher: se divide (1 + tasa nominal) por
  (1 + inflación), y se le resta 1.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

variables:
  inflacion: random(50, 150)
  tasa_nominal: random(20, 49)

respuesta: (((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) < 0)
tipo: vf

enunciado: "Un plazo fijo pagó una tasa nominal anual del {tasa_nominal}%, en un año con una inflación del {inflacion}%. ¿El rendimiento real fue negativo?"

explicacion: |
  Cuando la inflación supera a la tasa nominal, el rendimiento real
  siempre da negativo.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible tener un rendimiento real negativo aunque el saldo en pesos de la cuenta haya crecido: el dinero es \"más\" en pesos, pero compra menos que antes."

explicacion: |
  Eso es justamente lo que revela el rendimiento real, que la sola tasa
  nominal no muestra.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real"]

enunciado: "¿Cuál es la fórmula correcta del rendimiento real (ecuación de Fisher)?"
tipo: mc
opciones_explicitas:
  - "(1 + tasa_nominal) / (1 + inflación) - 1"
  - "tasa_nominal / inflación"
  - "tasa_nominal + inflación"
respuesta: "(1 + tasa_nominal) / (1 + inflación) - 1"

explicacion: |
  La segunda y la tercera opción no son la fórmula de Fisher: no
  reflejan cómo se combinan tasa nominal e inflación.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"Rendimiento real ≈ tasa nominal − inflación\" es sólo una aproximación de la ecuación de Fisher, válida cuando ambas tasas son chicas — no es el cálculo exacto."

explicacion: |
  El cálculo exacto es (1 + tasa_nominal) / (1 + inflación) - 1, no la
  resta directa.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con tasas de interés e inflación altas (como suele pasar en Argentina), la aproximación \"tasa nominal − inflación\" se aleja bastante del resultado exacto de la ecuación de Fisher."

explicacion: |
  La aproximación ignora el término que divide por (1 + inflación); ese
  error se vuelve grande cuando la inflación no es chica.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  tasa_nominal: random(60, 150)
  inflacion: random(60, 150)

respuesta: (tasa_nominal - inflacion) - ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
tipo: input
tolerancia_abs: 0.5

enunciado: "Con una tasa nominal del {tasa_nominal}% y una inflación del {inflacion}%, ¿cuántos puntos porcentuales de diferencia hay entre la aproximación simple (resta directa) y el resultado exacto de Fisher?"

pasos:
  - "Aproximación: {tasa_nominal} - {inflacion} = {tasa_nominal - inflacion}"
  - "Exacto: (1 + {tasa_nominal/100}) / (1 + {inflacion/100}) - 1, en porcentaje"

explicacion: |
  Con tasas de esta magnitud, la diferencia entre ambos cálculos ya no
  es despreciable.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "comparacion"]

variables:
  tasa_nominal: random(20, 150)
  inflacion_a: random(20, 60)
  inflacion_b: random(61, 150)

respuesta: (((1 + tasa_nominal / 100) / (1 + inflacion_b / 100) - 1) < ((1 + tasa_nominal / 100) / (1 + inflacion_a / 100) - 1))
tipo: vf

enunciado: "Con la misma tasa nominal del {tasa_nominal}%, ¿una inflación del {inflacion_b}% da un rendimiento real menor que una inflación del {inflacion_a}%?"

explicacion: |
  A mayor inflación, con la misma tasa nominal, menor el rendimiento
  real — la inflación erosiona más el poder de compra.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "comparacion"]

variables:
  inflacion: random(20, 150)
  tasa_a: random(20, 60)
  tasa_b: random(61, 150)

respuesta: (((1 + tasa_b / 100) / (1 + inflacion / 100) - 1) > ((1 + tasa_a / 100) / (1 + inflacion / 100) - 1))
tipo: vf

enunciado: "Con la misma inflación del {inflacion}%, ¿una tasa nominal del {tasa_b}% da un rendimiento real mayor que una del {tasa_a}%?"

explicacion: |
  A igual inflación, a mayor tasa nominal, mayor el rendimiento real.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  inflacion: random(20, 150)

respuesta: inflacion
tipo: input
tolerancia_abs: 0.01

enunciado: "Si la inflación de un año fue del {inflacion}%, ¿qué tasa nominal anual necesitaba pagar una inversión para que el rendimiento real diera exactamente 0%?"

explicacion: |
  Por la ecuación de Fisher, el rendimiento real da 0% sólo cuando la
  tasa nominal es exactamente igual a la inflación.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "calculo"]

variables:
  inflacion: random(30, 150)
  rendimiento_real_objetivo: random(5, 20)
  tasa_nominal: (1 + rendimiento_real_objetivo / 100) * (1 + inflacion / 100) * 100 - 100

respuesta: tasa_nominal
tipo: input
tolerancia_abs: 0.5

enunciado: "En un año con {inflacion}% de inflación, ¿qué tasa nominal anual hace falta para lograr un rendimiento real del {rendimiento_real_objetivo}%?"

pasos:
  - "tasa_nominal = (1 + rendimiento_real) × (1 + inflación) - 1"

explicacion: |
  Se despeja la tasa nominal de la ecuación de Fisher: (1 + tasa_nominal)
  = (1 + rendimiento_real) × (1 + inflación).
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "avanzado"
  tags: ["rendimiento_real", "problema"]

variables:
  capital: random(100, 1000) * 1000
  tasa_nominal: random(30, 150)
  inflacion: random(30, 150)
  monto_nominal: capital * (1 + tasa_nominal / 100)

respuesta: monto_nominal / (1 + inflacion / 100)
tipo: input
tolerancia_abs: 5

enunciado: "Un capital de ${capital} se puso a plazo fijo un año, a una tasa nominal anual del {tasa_nominal}%, en un año con {inflacion}% de inflación. El monto nominal al final es ${redondear(monto_nominal, 2)}. ¿Cuánto vale eso en poder de compra de hoy (valor real, en los pesos de hace un año)?"

pasos:
  - "Valor real = monto nominal ÷ (1 + inflación) = {redondear(monto_nominal, 2)} ÷ {1 + inflacion/100}"

explicacion: |
  Se divide el monto nominal final por (1 + inflación) para expresarlo
  en el poder de compra del momento en que se empezó a invertir.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Elegir un plazo fijo sólo por tener la tasa nominal más alta, sin comparar contra la inflación esperada, puede llevar a un resultado real peor que otra opción con tasa nominal más baja pero rendimiento real mayor."

explicacion: |
  Lo mismo que ya pasaba al comparar créditos por CFT en vez de por TNA:
  el número nominal más llamativo no siempre es el mejor dato para
  decidir.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real"]

variables:
  tasa_nominal: random(20, 60)
  inflacion: random(20, 60)
  aproximado: tasa_nominal - inflacion

tipo: completar
enunciado: "Con una tasa nominal del {tasa_nominal}% y una inflación del {inflacion}%, completá la aproximación simple: {tasa_nominal} (tasa nominal) - {inflacion} (inflación) = ___ (rendimiento real aproximado, en puntos porcentuales)."
respuestas_validas:
  - aproximado

explicacion: |
  Es la aproximación simple (válida sólo con tasas chicas) — no la
  ecuación de Fisher exacta.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La inflación reduce el rendimiento real de una inversión, incluso si esa inversión paga intereses positivos."

explicacion: |
  Los intereses suman pesos; la inflación resta poder de compra a esos
  mismos pesos — el resultado neto es lo que mide el rendimiento real.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que el rendimiento real dé exactamente 0% es un caso muy puntual: sólo pasa cuando la tasa nominal coincide exactamente con la inflación del mismo período."

explicacion: |
  Cualquier diferencia entre ambas, para cualquier lado, ya da un
  rendimiento real distinto de cero.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "orden"]

tipo: ordenar
enunciado: "Con una inflación anual del 50% fija, ordená estos rendimientos nominales de menor a mayor rendimiento real."
opciones_explicitas:
  - "Nominal 80%"
  - "Nominal 40%"
  - "Nominal 60%"
respuesta_orden: ["Nominal 40%", "Nominal 60%", "Nominal 80%"]

explicacion: |
  A igual inflación, a mayor tasa nominal, mayor rendimiento real — el
  orden de la tasa nominal es el mismo que el del rendimiento real.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "intermedio"
  tags: ["rendimiento_real", "verificacion"]

variables:
  tasa_nominal: random(20, 150)
  inflacion: random(20, 150)
  correcto: ((1 + tasa_nominal / 100) / (1 + inflacion / 100) - 1) * 100
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? Tasa nominal {tasa_nominal}%, inflación {inflacion}%, rendimiento real informado: {redondear(mostrado, 2)}%."

explicacion: |
  Se vuelve a aplicar la ecuación de Fisher y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un aumento de sueldo que queda por debajo de la inflación del mismo período es, en términos reales, una pérdida de poder adquisitivo — aunque el número en el recibo de sueldo sea más alto que antes."

explicacion: |
  Es el mismo concepto de rendimiento real aplicado a un sueldo en vez
  de a una inversión.
```

```
metadata:
  materia: "economia"
  tema: "plazo_fijo_vs_inflacion"
  nivel: "basico"
  tags: ["rendimiento_real", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El rendimiento real se calcula con (1 + tasa nominal) / (1 + inflación) - 1: mide cuánto cambió el poder de compra del dinero, no sólo cuántos pesos de más hay."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: contabilidad-ambiental (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["calculos", "externalidades"]

variables:
  costo_externo: random(1000, 5000)
  costo_privado: random(2000, 8000)

respuesta: "{costo_privado + costo_externo}"
tipo: input

enunciado: "Una empresa tiene un costo privado de producción de {costo_privado} pesos y genera una externalidad negativa valorizada en {costo_externo} pesos. Según la contabilidad ambiental, ¿cuál es el costo económico total real de esta actividad?"

explicacion: |
  El costo económico total es la suma del costo privado (pagado por la empresa) más el costo externo (impuesto a la sociedad). Internalizar la externalidad implica reconocer esta suma como el costo real de la actividad.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["eficiencia", "calculos"]

variables:
  ingreso_bruto: random(100000, 200000)
  costo_operativo: random(40000, 60000)
  costo_ambiental: random(10000, 30000)

respuesta: "{ingreso_bruto - costo_operativo - costo_ambiental}"
tipo: input

enunciado: "Una empresa tiene un ingreso bruto de {ingreso_bruto}, costos operativos de {costo_operativo} y un costo ambiental internalizado de {costo_ambiental}. ¿Cuál es su beneficio económico real ajustado?"

explicacion: |
  El beneficio real se calcula restando tanto los costos operativos tradicionales como los costos ambientales internalizados. Esto muestra la verdadera sostenibilidad financiera de la actividad.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["carbono", "calculos"]

variables:
  emisiones_co2: random(100, 1000)
  precio_carbono: random(10, 50)

respuesta: "{emisiones_co2 * precio_carbono}"
tipo: input

enunciado: "Si una fábrica emite {emisiones_co2} toneladas de CO2 y el precio social del carbono es de {precio_carbono} pesos por tonelada, ¿cuál es el costo ambiental total de estas emisiones?"

explicacion: |
  El costo ambiental se calcula multiplicando la cantidad de emisiones por el precio social del carbono, que representa el daño económico estimado por cada unidad emitida.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["suelos", "recuperacion"]

variables:
  costo_recuperacion: random(10000, 50000)
  vida_util: random(5, 10)

respuesta: "{costo_recuperacion / vida_util}"
tipo: input

enunciado: "Si el costo total de recuperación de un suelo degradado es de {costo_recuperacion} pesos y la vida útil estimada de la recuperación es de {vida_util} años, ¿cuál es el costo anualizado?"

explicacion: |
  El costo anualizado permite distribuir el gasto de recuperación a lo largo del tiempo, facilitando su comparación con los beneficios anuales de la actividad productiva que causó el daño.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

variables:
  valor_produccion: random(100000, 300000)
  consumo_recursos: random(1000, 5000)

respuesta: "{valor_produccion / consumo_recursos}"
tipo: input

enunciado: "Si una empresa genera {valor_produccion} pesos de valor con {consumo_recursos} unidades de recurso natural, ¿cuál es su eficiencia de recursos (valor por unidad de recurso)?"

explicacion: |
  La eficiencia de recursos mide cuánta valor económico se genera por cada unidad de recurso consumido. Un valor más alto indica una gestión más sostenible y eficiente.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["daños", "estimacion"]

variables:
  daño_directo: random(5000, 20000)
  daño_indirecto: random(10000, 40000)

respuesta: "{daño_directo + daño_indirecto}"
tipo: input

enunciado: "Si un derrame causa un daño directo de {daño_directo} y un daño indirecto (pérdida de turismo, etc.) de {daño_indirecto}, ¿cuál es el costo total del incidente?"

explicacion: |
  El costo total de un incidente ambiental incluye tanto los daños directos (limpieza, multas) como los indirectos (pérdida de ingresos para otros sectores, salud pública), reflejando el impacto completo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["externalidades", "costos"]

variables:
  a: random(10, 50)
  b: random(1, 10)
  costo_total: a + b

respuesta: costo_total
tipo: input

enunciado: "Si una fábrica genera un beneficio privado de {a} millones pero traslada un costo de salud pública de {b} millones a la comunidad, ¿cuál es el costo social total no internalizado inicialmente?"

explicacion: |
  La externalidad negativa traslada el costo a terceros. El costo social total es la suma del beneficio privado (que no refleja el daño) más el costo del daño. En este contexto de cálculo simple de impacto, sumamos las magnitudes dadas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["riesgo", "sostenibilidad"]

variables:
  a: random(1, 5)
  b: random(1, 5)

respuesta: "{max(a, b)}"
tipo: input

enunciado: "Si ignoramos los costos ocultos, el riesgo financiero asociado al cambio climático se subestima. Si el riesgo directo es {a} y el indirecto es {b}, ¿cuál es el valor máximo de riesgo individual considerado en la evaluación básica?"

explicacion: |
  Se pide el máximo de dos valores de riesgo hipotéticos para evaluar la comprensión de la magnitud del impacto.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["calculos", "emisiones"]

variables:
  a: random(100, 500)
  b: random(100, 500)
  c: random(100, 500)
  promedio: redondear((a + b + c) / 3, 2)

respuesta: promedio
tipo: input

enunciado: "Si una empresa emitió {a} toneladas en Q1, {b} en Q2 y {c} en Q3, ¿cuál fue la emisión promedio trimestral?"

explicacion: |
  Se calcula el promedio aritmético de las emisiones para entender la magnitud del impacto ambiental anual.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["costos", "suelos"]

variables:
  a: random(10, 100)
  b: random(1, 10)
  costo: a * b

respuesta: costo
tipo: input

enunciado: "Si el costo de recuperación por hectárea es de {a} mil pesos y se degradaron {b} hectáreas, ¿cuál es el costo total de recuperación?"

explicacion: |
  Multiplicación simple para estimar el costo financiero de la restauración ambiental mencionada en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["precios", "GEE"]

variables:
  a: random(5, 20)
  b: random(100, 1000)
  costo_total: a * b

respuesta: costo_total
tipo: input

enunciado: "Si el precio por tonelada de CO2 es de {a} dólares y la empresa emite {b} toneladas, ¿cuál es el costo total de las emisiones?"

explicacion: |
  Cálculo del costo interno que la empresa debería asumir si internalizara el costo de las emisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["costos", "limpieza"]

variables:
  a: random(50, 200)
  b: random(10, 50)
  total: a + b

respuesta: total
tipo: input

enunciado: "Si el costo de limpieza del río es {a} millones y el de salud pública es {b} millones, ¿cuál es el costo total trasladado a la comunidad?"

explicacion: |
  Suma de los costos externos generados por la contaminación, que la contabilidad ambiental busca internalizar.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["huella_carbono", "calculos"]

variables:
  a: random(10, 50)
  b: random(10, 50)
  c: random(10, 50)
  total: a + b + c

respuesta: total
tipo: input

enunciado: "Si las fuentes fijas emiten {a}, las móviles {b} y los residuos {c}, ¿cuál es la huella total de emisiones?"

explicacion: |
  Suma de las emisiones directas e indirectas para determinar el impacto ambiental total.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["costo_oportunidad", "decisiones"]

variables:
  a: random(100, 500)
  b: random(10, 50)
  ratio: redondear(a / b, 2)

respuesta: ratio
tipo: input

enunciado: "Si el beneficio privado es {a} y el costo ambiental es {b}, ¿cuál es la relación beneficio/costo ambiental?"

explicacion: |
  Cálculo de la relación para evaluar la eficiencia económica ignorando el impacto ambiental.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["capital_natural", "recursos"]

variables:
  recurso: "uno_de(['agua potable', 'aire limpio', 'fertilidad del suelo'])"

respuesta: verdadero
tipo: vf

enunciado: "El {recurso} es considerado un bien gratuito e infinito en los modelos económicos tradicionales, pero tiene un valor económico real en la contabilidad ambiental."

explicacion: |
  Falso en la teoría moderna/ambiental. La contabilidad ambiental sostiene que estos recursos tienen valor económico real y no son infinitos, por lo que deben ser cuantificados.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["internalizacion", "mecanismos"]

variables:
  agente: "uno_de(['quien contamina', 'el consumidor', 'el estado'])"

respuesta: "quien contamina"
tipo: completar

enunciado: "El principio de 'quien contamina paga' busca que el costo de la degradación ambiental sea asumido por {agente}."

respuestas_validas:
  - "quien contamina"
  - "el contaminador"

explicacion: |
  La internalización de costos implica que el agente que genera la externalidad negativa debe asumir el costo económico del daño causado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["servicios_ecosistemicos", "valoracion"]

variables:
  valor_polinizacion: random(10000, 20000)
  valor_purificacion_agua: random(5000, 10000)
  porcentaje_perdida: uno_de([0.1, 0.2, 0.3])

respuesta: redondear((valor_polinizacion + valor_purificacion_agua) * porcentaje_perdida, 0)
tipo: input

enunciado: "Si el valor anual de los servicios de polinización es {valor_polinizacion} y de purificación de agua es {valor_purificacion_agua}, y un proyecto destruye el {porcentaje_perdida} de estos servicios, ¿cuál es el costo económico de la pérdida?"

explicacion: |
  Se calcula sumando los valores de los servicios ecosistémicos y aplicando el porcentaje de daño causado por la actividad humana.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["externalidades", "definicion"]

variables:
  tipo_ext: "una externalidad negativa"

respuesta: verdadero
tipo: vf

enunciado: "Una {tipo_ext} ocurre cuando una actividad económica afecta a terceros sin compensación monetaria."

explicacion: |
  Correcto. Las externalidades negativas son costos impuestos a terceros que no figuran en los precios de mercado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["sostenibilidad", "gestion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad ambiental permite tomar decisiones que consideren la sostenibilidad futura, no solo la rentabilidad inmediata."

explicacion: |
  Correcto. Al integrar variables ecológicas, se evalúa el impacto a largo plazo de las decisiones económicas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["eficiencia", "recursos"]

variables:
  input_total: random(1000, 5000)
  output_util: random(600, 4000)

respuesta: redondear((output_util / input_total) * 100, 2)
tipo: input

enunciado: "Si una empresa utiliza {input_total} unidades de recurso para generar {output_util} unidades de producto útil, ¿cuál es el porcentaje de eficiencia de uso?"

explicacion: |
  La eficiencia se calcula como (producto útil / insumo total) * 100.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["salud", "externalidades"]

respuesta: verdadero
tipo: vf

enunciado: "La contaminación industrial puede generar costos de salud pública que deben ser considerados en la contabilidad ambiental."

explicacion: |
  Correcto. Los impactos en la salud de la comunidad son externalidades negativas que tienen un costo económico.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["incentivos", "practicas_limpias"]

respuesta: verdadero
tipo: vf

enunciado: "Asignar un precio a la contaminación crea incentivos económicos para favorecer prácticas más limpias."

explicacion: |
  Correcto. Al internalizar el costo, las empresas tienen un incentivo financiero para reducir su impacto ambiental.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "avanzado"
  tags: ["sensibilidad", "riesgo"]

variables:
  costo_base: random(10000, 50000)
  factor_riesgo: uno_de([1.1, 1.2, 1.5, 2.0])

respuesta: redondear(costo_base * factor_riesgo, 0)
tipo: input

enunciado: "Si el costo base de un proyecto es {costo_base} y se aplica un factor de riesgo ambiental del {factor_riesgo}, ¿cuál es el costo ajustado por riesgo?"

explicacion: |
  El costo ajustado se obtiene multiplicando el costo base por el factor de riesgo ambiental seleccionado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "intermedio"
  tags: ["agua", "costos"]

variables:
  litros_usados: random(1000, 10000)
  costo_por_litro: random(0.1, 1.0)

respuesta: redondear(litros_usados * costo_por_litro, 2)
tipo: input

enunciado: "Si una industria utiliza {litros_usados} litros de agua y el costo económico del recurso es {costo_por_litro} por litro, ¿cuál es el costo total del agua utilizada?"

explicacion: |
  El costo total se calcula multiplicando el volumen de agua por su costo económico unitario.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_ambiental"
  nivel: "basico"
  tags: ["visibilidad", "transparencia"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad ambiental busca dar visibilidad a los costos ocultos que los modelos tradicionales ignoran."

explicacion: |
  Correcto. Su objetivo es revelar el verdadero impacto económico de las actividades productivas sobre el medio ambiente.
```

## Sección: contabilidad-como-sistema-de-informacion (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["sistema_informacion", "definicion"]

variables:
  analogia: uno_de(["sistema nervioso", "corazón", "estómago"])

respuesta: "sistema nervioso"
tipo: completar

enunciado: "En la analogía corporativa, la contabilidad funciona como el {analogia} de la empresa, llevando información vital a quienes toman decisiones."

explicacion: |
  La contabilidad se compara con el sistema nervioso y circulatorio porque transporta datos financieros cruciales para la "salud" y decisión empresarial.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["objetivo", "informacion"]

variables:
  dato_crudo: random(1, 100)
  conocimiento: redondear(dato_crudo / 10, 1)

respuesta: "conocimiento"
tipo: completar

enunciado: "La contabilidad transforma datos crudos como ventas o compras en {conocimiento} útil para la gestión."

explicacion: |
  El proceso clave es la transformación de datos operativos en información procesada que permite la toma de decisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ciclo_comercial", "comercio"]

variables:
  ejemplo: uno_de(["supermercado", "fábrica de autos", "panadería"])
  accion: "compra y venta de bienes ya terminados"

respuesta: "compra y venta de bienes ya terminados"
tipo: completar

enunciado: "En el ciclo comercial, típico de empresas como {ejemplo}, la actividad central es la {accion}."

explicacion: |
  El ciclo comercial implica intermediación: comprar productos terminados y venderlos sin alterar su forma física.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["costos", "industrial"]

variables:
  costo1: "materiales directos"
  costo2: "mano de obra directa"
  costo3: "gastos generales de fabricación"

respuesta: "gastos generales de fabricación"
tipo: completar

enunciado: "La contabilidad industrial rastrea materiales directos, mano de obra directa y {costo3}."

explicacion: |
  Los tres componentes esenciales del costo de producción son materiales, mano de obra y gastos indirectos o generales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "balance"]

variables:
  informe: "Balance General"

respuesta: "Balance General"
tipo: completar

enunciado: "Uno de los principales informes que actúan como 'informes médicos' de la compañía es el {informe}."

explicacion: |
  El Balance General muestra la situación patrimonial (activos, pasivos y patrimonio) en un momento dado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["informes", "resultados"]

variables:
  informe: "Estado de Resultados"

respuesta: "Estado de Resultados"
tipo: completar

enunciado: "El {informe} muestra la capacidad de generar ganancias o pérdidas en un período."

explicacion: |
  El Estado de Resultados (o de Ganancias y Pérdidas) resume ingresos y egresos del periodo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comercio", "inventario"]

variables:
  foco: "control de inventarios"

respuesta: "control de inventarios"
tipo: completar

enunciado: "En el ciclo comercial, la contabilidad se centra en el {foco} de mercadería."

explicacion: |
  Para los comerciantes, el manejo preciso del stock es vital para calcular el margen de ganancia.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "industria"]

variables:
  ejemplo: uno_de(["fábrica de muebles", "supermercado", "agencia de viajes"])

respuesta: "fábrica de muebles"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo industrial es una {ejemplo}."

explicacion: |
  Las fábricas transforman madera en muebles, requiriendo contabilidad de costos compleja.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["ejemplos", "comercio"]

variables:
  ejemplo: uno_de(["tienda de ropa", "planta de alimentos", "taller mecánico"])

respuesta: "tienda de ropa"
tipo: completar

enunciado: "Un ejemplo clásico de ciclo comercial es una {ejemplo}."

explicacion: |
  Las tiendas de ropa compran prendas terminadas y las venden, sin manufacturarlas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un simple conjunto de cálculos numéricos."

explicacion: |
  Correcto. La contabilidad funciona como el 'sistema nervioso' de la empresa, transformando datos crudos en información útil para la toma de decisiones.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["clasificacion", "ciclo_industrial"]

variables:
  caso: uno_de(["fabrica_de_muebles", "planta_de_alimentos", "taller_de_autos"])

respuesta: verdadero
tipo: vf

enunciado: "Una {caso} opera bajo el ciclo industrial porque transforma materias primas en productos terminados."

explicacion: |
  Correcto. La transformación física del producto es la marca distintiva del ciclo industrial frente al comercial.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["gastos", "industrial"]

respuesta: verdadero
tipo: vf

enunciado: "El alquiler de un galpón de producción se considera un gasto general de fabricación en el ciclo industrial."

explicacion: |
  Correcto. Los gastos indirectos necesarios para la producción, como el alquiler de la fábrica, son gastos generales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["materia_prima", "industrial"]

variables:
  materia: uno_de(["madera", "cuero", "harina"])

respuesta: verdadero
tipo: vf

enunciado: "{materia} es un ejemplo de materia prima directa en una fábrica de muebles."

explicacion: |
  La madera es el insumo principal que se transforma en el producto final en una carpintería.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la analogía, la contabilidad también funciona como el sistema circulatorio, distribuyendo la información a los stakeholders."

explicacion: |
  La analogía completa incluye el sistema nervioso (captación) y circulatorio (distribución) de la información.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["accountability", "ética"]

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad facilita la rendición de cuentas (accountability) a dueños e inversores."

explicacion: |
  Permite verificar que los recursos se usen conforme a lo esperado y reportar resultados reales.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["ejemplo", "industrial"]

variables:
  planta: uno_de(["planta_de_alimentos", "fábrica_de_textiles", "fundición"])

respuesta: verdadero
tipo: vf

enunciado: "{planta} es un ejemplo de entidad que opera en el ciclo industrial."

explicacion: |
  Estas plantas transforman materias primas en productos finales mediante procesos productivos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia", "confianza"]

respuesta: verdadero
tipo: vf

enunciado: "La transparencia financiera promovida por la contabilidad ayuda a atraer socios e inversores."

explicacion: |
  Los inversores confían en empresas con informes claros y auditables.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion", "sistema_informacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad se define fundamentalmente como un sistema de información diseñado para captar, procesar y comunicar datos económicos, más que como un mero conjunto de cálculos numéricos."

explicacion: |
  La contabilidad es el sistema nervioso de la empresa. Su función principal es transformar datos crudos en información útil para la toma de decisiones, asegurando transparencia y rendición de cuentas.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["analogia", "funcion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En la analogía propuesta, la contabilidad funciona como el sistema nervioso y circulatorio de la empresa, llevando información vital sobre su salud financiera a los decisores."

explicacion: |
  Sin este flujo de información, dueños e inversores navegarían a ciegas. La contabilidad permite saber si hay ganancias, cuánto se debe y cómo se usan los recursos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["comparacion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La diferencia estructural clave entre ciclo comercial e industrial es la existencia de un proceso de transformación de materias primas en el industrial."

explicacion: |
  El comercial solo mueve bienes terminados. El industrial los crea, lo que exige un sistema de costos más complejo.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["transparencia"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad es la herramienta básica para la transparencia y la rendición de cuentas en el mundo de los negocios."

explicacion: |
  Permite a los externos (inversores, bancos) y internos verificar el estado real de la organización y la gestión de los recursos.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["complejidad"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad del ciclo industrial es más compleja que la del ciclo comercial debido al rastreo de tres tipos de costos."

explicacion: |
  La necesidad de imputar costos indirectos y calcular el costo de producción hace que el sistema contable industrial sea más robusto y detallado.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "intermedio"
  tags: ["impacto"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La claridad en los informes contables determina la capacidad de la empresa para conseguir créditos y atraer socios."

explicacion: |
  Los terceros externos confían en la información contable para evaluar el riesgo y la solvencia de la empresa antes de prestar dinero o invertir.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["consecuencias"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "Sin el sistema de información contable, los dueños e inversores navegarían a ciegas respecto a la salud financiera."

explicacion: |
  La falta de información impide detectar problemas a tiempo, optimizar recursos o justificar la gestión ante los stakeholders.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "avanzado"
  tags: ["estructura_costos"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "En el ciclo industrial, la diferencia clave es la necesidad de rastrear materiales directos, mano de obra y gastos generales."

explicacion: |
  Esta triple estructura de costos es lo que distingue contablemente a la industria del comercio puro.
```

```
metadata:
  materia: "economia"
  tema: "contabilidad_como_sistema_de_informacion"
  nivel: "basico"
  tags: ["definicion"]

variables:
  pass: 1

respuesta: verdadero
tipo: vf

enunciado: "La contabilidad NO es simplemente una obligación tributaria, sino un sistema de información clave."

explicacion: |
  Aunque tiene fines fiscales, su esencia es la gestión interna y la comunicación externa de la realidad económica de la empresa.
```

