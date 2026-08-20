# Examen jefe — Maestro del Pitch Financiero

> Logro #198. Completaste el examen jefe dominando inversiones y planificación. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **118 preguntas totales** en 5/5 secciones.

---

## Sección: pitch-a-inversores (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["vocabulario", "fundamentos"]

respuesta: "elevator_pitch"
tipo: completar
respuestas_validas: ["elevator_pitch", "elevator pitch"]

enunciado: "La técnica de presentar una idea de negocio de forma extremadamente breve, como si se tuviera solo el tiempo que dura un viaje en ascensor, se denomina ___."

explicacion: |
  El 'elevator pitch' es una herramienta de comunicación diseñada para transmitir la esencia de un proyecto en menos de 60 segundos, captando el interés de un potencial inversor.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "inversion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "conseguir una reunión", "vender el producto directamente" ], [ "generar interés", "obtener la firma del contrato en el momento" ]]

respuesta: escenarios[escenario_idx][0
tipo: mc
opciones_explicitas: ["conseguir una reunión", "vender el producto directamente", "generar interés", "obtener la firma del contrato en el momento"]

enunciado: "En un pitch inicial ante un inversor de capital de riesgo, el objetivo principal suele ser {escenarios[escenario_idx][1]}."

explicacion: |
  Un pitch no busca cerrar la inversión en ese instante, sino despertar curiosidad suficiente para obtener una segunda reunión de análisis profundo (due diligence).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "propuesta_de_valor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental que un pitch identifique claramente un 'pain point' (punto de dolor) o problema real en el mercado para que la solución propuesta tenga sentido?"

explicacion: |
  Sin un problema validado, la solución es solo una idea sin demanda. El inversor busca negocios que resuelvan necesidades reales y cuantificables.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "Competencia"]

enunciado: "Ordena los siguientes elementos de un Pitch Deck según una estructura lógica de narrativa de negocios (storytelling):"

pasos:
  - "Identificar la necesidad"
  - "Presentar la propuesta"
  - "Explicar cómo se gana dinero"
  - "Mostrar resultados actuales"

explicacion: |
  Una narrativa efectiva comienza con el problema, presenta la solución, explica la monetización y finalmente demuestra que el modelo ya está funcionando (tracción).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["terminologia", "escalabilidad"]

respuesta: "escalabilidad"
tipo: completar
respuestas_validas: ["escalabilidad", "scalability"]

enunciado: "La capacidad de un modelo de negocio para aumentar sus ingresos de forma exponencial mientras sus costes crecen de forma lineal se conoce como ___."

explicacion: |
  La escalabilidad es el factor crítico para los inversores de Venture Capital, ya que permite retornos masivos sobre la inversión inicial.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "comunicacion", "emprendimiento"]

variables:
  escenario: uno_de([
    ["Problema: La gente pierde tiempo buscando estacionamiento.", "Solución: App de reserva de espacios privados.", "Propuesta: App de parking inteligente."],
    ["Problema: El desperdicio de comida en restaurantes.", "Solución: Marketplace de excedentes de comida.", "Propuesta: App de rescate gastronómico."],
    ["Problema: La dificultad de encontrar tutores de idiomas.", "Solución: Conexión instantánea por video.", "Propuesta: Plataforma de micro-learning."]
  ])

respuesta: escenario[2][2
tipo: mc
opciones_explicitas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning", "Solución de logística rápida"]

enunciado: "Para que un Elevator Pitch sea efectivo, debe centrarse en la {escenario[2][2]}. ¿Cuál de estas opciones representa mejor el enfoque de la propuesta de valor?"

explicacion: |
  Un pitch efectivo debe comunicar la solución de forma directa y concisa, permitiendo que el inversor entienda el núcleo del negocio en pocos segundos.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura", "inversion"]

variables:
  orden_logico: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "The Ask"]

respuesta: orden_logico
tipo: ordenar

enunciado: "Un inversor busca una narrativa coherente. Ordena los siguientes elementos de un Pitch Deck en el orden lógico recomendado para construir una historia convincente:"

pasos:
  - "Identificar el dolor del mercado."
  - "Presentar cómo tu producto resuelve ese dolor."
  - "Explicar cómo vas a ganar dinero."
  - "Mostrar métricas actuales que validen el interés."
  - "Presentar a las personas que ejecutan la idea."
  - "Indicar cuánto capital necesitas y para qué."

explicacion: |
  La estructura narrativa (Storytelling) debe llevar al inversor desde el problema (dolor) hasta la oportunidad de negocio (tracción) y finalmente la necesidad de capital (The Ask).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["mercado", "tam", "som", "metricas"]

variables:
  datos: [
    [1000000, 500000, 50000],
    [5000000, 2000000, 100000],
    [2500000, 1000000, 250000]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2
tipo: completar
tolerancia_abs: 0

enunciado: "En el análisis de mercado para un pitch, si el mercado total (TAM) es de ${datos[idx][0]}, el mercado que puedes alcanzar con tu modelo de servicio (SAM) es de ${datos[idx][1]}, ¿cuál es el tamaño de tu mercado objetivo real (SOM) que puedes capturar a corto plazo?"

explicacion: |
  El SOM (Serviceable Obtainable Market) es la parte del SAM que tu empresa puede capturar de manera realista con sus recursos actuales.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["traction", "validacion", "metricas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un emprendedor presenta en su pitch que tiene un crecimiento mensual del 20% en usuarios activos (MoM) y una tasa de retención constante, está demostrando 'Traction' (Tracción), lo cual reduce el riesgo percibido por el inversor."

explicacion: |
  La tracción es la evidencia de que el mercado está respondiendo positivamente a tu producto, lo cual es uno de los puntos más críticos en un pitch.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "financiamiento", "equity"]

variables:
  escenario_financiero: [
    ["$500,000", "15%", "Desarrollo de producto y marketing"],
    ["$1,000,000", "10%", "Expansión internacional y ventas"],
    ["$250,000", "5%", "Contratación de equipo técnico"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: escenario_financiero[idx][0
tipo: completar

enunciado: "En la última diapositiva, el emprendedor debe ser claro con el 'Ask'. Si el emprendedor busca una inversión de ${escenario_financiero[idx][0]} a cambio de un ${escenario_financiero[idx][1]} de participación, el objetivo principal de ese capital según su plan es: ___."

pasos:
  - "Identificar el monto solicitado."
  - "Identificar el porcentaje de equity ofrecido."
  - "Identificar el uso de fondos (Use of Funds)."

explicacion: |
  El 'Ask' no solo debe decir cuánto dinero necesitas, sino también cuánto de la empresa estás dispuesto a ceder y, crucialmente, en qué se va a gastar ese dinero para generar retorno.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch", "errores", "inversores"]

enunciado: "Un error común en un pitch es centrarse excesivamente en las características de la solución (el producto) en lugar de enfocarse en el ___ (el problema que se resuelve)."

respuestas_validas: ["problema"]
respuesta: "problema"
tipo: completar

explicacion: |
  Los inversores buscan resolver problemas reales y dolorosos para un mercado grande. Si tu pitch solo habla de funciones de una app sin explicar el problema que ataca, pierdes el interés del inversor.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["competencia", "pitch"]

variables:
  es_error_decir_que_no_hay_competencia: falso

enunciado: "Si un emprendedor afirma durante su pitch que 'no tiene competencia en el mercado', ¿es esto una señal positiva o un error?"

opciones_explicitas: ["Es una señal positiva", "Es un error"]
respuesta: uno_de(["Es una señal positiva", "Es un error"])
tipo: mc

explicacion: |
  Decir que no hay competencia suele interpretarse como que el emprendedor no ha investigado lo suficiente o que no hay mercado. Siempre hay competencia, ya sea directa o indirecta (sustitutos).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["metricas", "pitch"]

enunciado: "En un pitch para inversores, ¿es verdadero o falso que la 'tracción' (evidencia de que el producto funciona y hay clientes) es más convincente que una simple idea brillante?"

respuesta: verdadero
tipo: vf

explicacion: |
  La tracción (ventas, usuarios activos, cartas de intención) reduce el riesgo percibido por el inversor. Una idea sin tracción es solo una hipótesis; una idea con tracción es un negocio en marcha.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "pitch"]

opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
respuesta: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
tipo: ordenar

enunciado: "Ordena los elementos de un pitch deck efectivo para que la narrativa sea convincente y lógica:"

explicacion: |
  Un pitch debe seguir un arco narrativo: primero estableces el dolor (Problema), presentas la cura (Solución), explicas cómo ganas dinero (Modelo), demuestras que puedes ejecutarlo (Equipo) y pides lo que necesitas (Call to Action).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["valoracion", "finanzas", "pitch"]

variables:
  escenario: uno_de([
    ["La startup tiene 0 ventas y pide 10 millones de dólares", "exagerada"],
    ["La startup tiene 100 clientes recurrentes y pide 500k dólares", "razonable"]
  ])

enunciado: "Analiza el caso: {escenario[0]}. La valoración o el pedido de capital es ___."

respuestas_validas: ["exagerada", "razonable"]
respuesta: escenario[1
tipo: completar

explicacion: |
  Pedir montos desproporcionados a la etapa de tracción actual genera desconfianza. El emprendedor debe demostrar que el capital solicitado es necesario para alcanzar los hitos que justifican la valoración.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "business_plan", "inversion"]

respuesta: "Pitch"
tipo: completar
respuestas_validas: ["Pitch"]

enunciado: "Mientras que el Business Plan es un documento detallado y extenso que describe la estrategia a largo plazo, el ___ es una presentación breve diseñada para captar la atención inmediata del inversor."

explicacion: |
  El Pitch es una herramienta de comunicación rápida y persuasiva, mientras que el Business Plan es un documento operativo y estratégico exhaustivo.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "pitch", "inversion"]

variables:
  es_correcto: falso

respuesta: falso
tipo: vf

enunciado: "¿El objetivo principal de un Pitch es presentar todos los detalles técnicos y financieros de la empresa para cerrar la inversión en ese mismo instante?"

explicacion: |
  Falso. El objetivo de un Pitch no es cerrar la inversión, sino conseguir la siguiente reunión o mostrar suficiente interés para avanzar en el proceso de Due Diligence.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Mercado"],
    ["Problema", "Propuesta de Valor", "Modelo de Negocio", "Tracción", "Equipo"],
    ["Problema", "Solución", "Modelo de Negocio", "Competencia", "Equipo"]
  ]
  respuesta_correcta: [
    "Solución",
    "Propuesta de Valor",
    "Solución"
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Solución", "Propuesta de Valor", "Competencia", "Equipo"]

enunciado: "En un Pitch Deck efectivo, después de presentar el {escenario[idx][0]}, el siguiente elemento clave debe ser la {escenario[idx][1]}."

explicacion: |
  La secuencia lógica de un pitch busca validar que el problema identificado tiene una solución clara y viable antes de pasar a cómo se gana dinero.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["elevator_pitch", "pitch_deck"]

respuesta: "Elevator Pitch"
tipo: completar
respuestas_validas: ["Elevator Pitch"]

enunciado: "La principal diferencia es la duración y el soporte: mientras que un Pitch Deck es una presentación visual apoyada en diapositivas, el ___ es un discurso verbal de pocos segundos, similar a lo que se diría en un ascensor."

explicacion: |
  El Elevator Pitch es una versión ultra-resumida y verbal, centrada en despertar curiosidad, mientras que el Pitch Deck es una narrativa estructurada con soporte visual.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "storytelling"]

respuesta: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]

enunciado: "Ordena los elementos de un pitch de alto impacto siguiendo la lógica de narrativa de ventas (Storytelling):"

pasos:
  - "Identificar la necesidad del mercado"
  - "Presentar cómo se resuelve"
  - "Explicar cómo se monetiza"
  - "Mostrar pruebas de que funciona"
  - "Indicar qué se necesita del inversor"

explicacion: |
  Un buen pitch debe seguir un arco narrativo: Dolor (Problema) -> Alivio (Solución) -> Viabilidad (Modelo) -> Validación (Tracción) -> Cierre (Call to Action).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "elevator_pitch", "comunicacion"]

variables:
  datos: [["Software de gestión de residuos para PYMES", "resolver el problema de la logística de reciclaje"], ["App de delivery de productos locales", "conectar productores con consumidores finales"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "En un elevator pitch, después de presentar el problema, el emprendedor debe presentar la propuesta de valor para {datos[idx][0]} con el fin de {datos[idx][1]}."

explicacion: |
  El objetivo del pitch es conectar el problema detectado con la solución específica que ofrece tu modelo de negocio de forma rápida.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["hook", "atencion", "inversores"]

variables:
  datos: [["Una startup de biotecnología", "revolucionar la medicina preventiva"], ["Una fintech de microcréditos", "democratizar el acceso al capital"]]
  idx: uno_de([0, 1])

respuesta: "revolucionar la medicina preventiva"
tipo: mc
opciones_explicitas: ["revolucionar la medicina preventiva", "ganar dinero rápido", "crear empleos masivos", "dominar el mercado global"]

enunciado: "Si estás presentando un caso de {datos[idx][0]}, un buen 'hook' debería enfocarse en la misión de {datos[idx][1]} para captar el interés emocional del inversor."

explicacion: |
  Un buen gancho no se trata solo de rentabilidad, sino del impacto o la transformación que la idea genera en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["validacion", "traction", "datos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental presentar métricas de tracción (como usuarios activos o ingresos mensuales) durante el pitch para demostrar que el modelo de negocio es escalable y validado?"

explicacion: |
  Los inversores buscan evidencia de que el mercado realmente quiere el producto (Product-Market Fit), y las métricas son la prueba de ello.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["pitch_deck", "orden", "estructura"]

respuesta: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]

enunciado: "Ordena los elementos esenciales de un Pitch Deck efectivo para asegurar un flujo narrativo lógico que lleve al inversor hacia la llamada a la acción."

explicacion: |
  La narrativa debe ir de la necesidad (Problema) a la ejecución (Solución/Modelo/Tracción/Equipo) y finalizar con lo que necesitas (El Pedido/Ask).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "funding", "financiamiento"]

variables:
  datos: [["500.000 USD", "expandir operaciones", "18 meses"], ["200.000 USD", "desarrollo de producto", "12 meses"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: [datos[idx][1]]

enunciado: "Al presentar el 'Ask' en el pitch, no basta con decir cuánto dinero necesitas; es crucial especificar que el objetivo es {datos[idx][1]} en un plazo de {datos[idx][2]}."

explicacion: |
  Un inversor no solo pone dinero; compra una parte de tu visión. Debe saber exactamente en qué se usará cada centavo y qué hitos se alcanzarán con ello.
```

## Sección: planificacion-administrativa (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_basicos", "gestion"]

tipo: mc
opciones_explicitas: ["El proceso de tomar decisiones anticipadas para alcanzar objetivos", "La ejecución de tareas diarias sin un orden previo", "El análisis de los resultados obtenidos tras una crisis", "La asignación de recursos basada en la intuición"]

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

tipo: completar
respuestas_validas: ["objetivos", "estrategias", "recursos"]

enunciado: "Para que una planificación sea efectiva, debe definir claramente los ___________ que se desean alcanzar, las ___________ para lograrlos y los ___________ necesarios para llevar a cabo las acciones."

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

respuesta: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

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
  idx: uno_de([0, 1])
  datos: [["estratégica", "largo plazo"], ["operativa", "corto plazo"]]

tipo: mc
opciones_explicitas: ["Estratégica", "Operativa", "Táctica"]

enunciado: "La planificación que se realiza a nivel de alta dirección, enfocándose en la organización como un todo y con un horizonte de {datos[idx][0]}, es la planificación ___________."

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
respuestas_validas: ["establecer objetivos", "definir metas"]

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

variables:
  escenario: uno_de([
    ["Abrir una sucursal en otra ciudad", "aumentar costos fijos", "crecer mercado"],
    ["Lanzar un producto digital", "reducir costos de envío", "expandir alcance"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["aumentar costos fijos", "reducir costos de envío", "maximizar beneficios", "reducir personal"]

enunciado: "Una empresa decide expandirse mediante la apertura de una nueva sucursal física. Según la planificación estratégica, esta acción implica principalmente: {escenario[idx][0]}."

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

respuesta: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma"]
tipo: ordenar
opciones_explicitas: ["Definir metas", "Determinar acciones", "Asignar recursos", "Establecer cronograma", "Evaluar resultados"]

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
  datos: [
    [5000, 1200, 3000],
    [8000, 2500, 5500],
    [3000, 900, 2100]
  ]
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
  datos: [
    ["definir el rumbo", "qué hacer"],
    ["establecer métodos", "cómo hacerlo"],
    ["fijar plazos", "cuándo hacerlo"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["qué hacer", "cómo hacerlo", "cuándo hacerlo"]

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

respuesta: ["Planificación", "Organización", "Dirección", "Control"]
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
  caso: uno_de([
    [0.85, "alta"],
    [0.40, "baja"],
    [0.10, "nula"]
  ])

respuesta: caso[0
tipo: mc
opciones_explicitas: ["alta", "baja", "nula"]

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
respuestas_validas: ["control", "Control"]

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
  datos: [
    ["establecer un objetivo", "definir el camino"],
    ["determinar una meta", "asignar recursos"]
  ]

respuesta: datos[escenario_idx][1
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

respuesta: ["Planificación Estratégica", "Planificación Táctica", "Planificación Operativa"]
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
respuestas_validas: ["organizar", "Organizar"]

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

variables:
  pasos: [["Diagnóstico", "Objetivos", "Estrategias", "Control"], ["Situación actual", "Metas", "Acciones", "Evaluación"], ["Análisis", "Propósito", "Plan de acción", "Seguimiento"]]
  idx: uno_de([0, 1, 2])

respuesta: pasos[idx
tipo: ordenar
opciones_explicitas: ["Diagnóstico", "Objetivos", "Estrategias", "Control"]

enunciado: "Ordene cronológicamente las etapas de un proceso de planificación estándar según el escenario seleccionado:"

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
respuestas_validas: ["personal", "dinero", "equipos"]

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
  datos: [["corto_plazo", "1 año"], ["mediano_plazo", "3 años"], ["largo_plazo", "5 años"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["1 año", "3 años", "5 años", "10 años"]

enunciado: "Si una empresa está realizando una planificación de ___, su horizonte temporal suele ser de ___."

explicacion: |
  El horizonte temporal define si la planificación es operativa (corto), táctica (mediano) o estratégica (largo).
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

## Sección: pools-liquidez-amm (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un pool de liquidez?"
tipo: mc
opciones_explicitas:
  - "Un fondo compartido de dos tokens, guardado en un contrato inteligente, que sirve de contraparte automática de un swap"
  - "Una cuenta bancaria compartida entre varias personas"
  - "El nombre de un tipo especial de wallet"
respuesta: "Un fondo compartido de dos tokens, guardado en un contrato inteligente, que sirve de contraparte automática de un swap"

explicacion: |
  Es lo que reemplaza al libro de órdenes de un exchange tradicional.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Quién arma un pool de liquidez, depositando ambos tokens?"
tipo: mc
opciones_explicitas:
  - "Proveedores de liquidez (LP), a cambio de ganar una comisión de cada swap"
  - "Sólo la empresa dueña del DEX"
  - "El banco central del país donde vive el usuario"
respuesta: "Proveedores de liquidez (LP), a cambio de ganar una comisión de cada swap"

explicacion: |
  Son usuarios comunes que aportan sus propios tokens al pool.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es un AMM (creador de mercado automático)?"
tipo: mc
opciones_explicitas:
  - "Una fórmula matemática que fija el precio automáticamente, según las reservas del pool, sin que una persona lo decida"
  - "Una persona que decide manualmente el precio de cada swap"
  - "Otro nombre para un contrato inteligente cualquiera"
respuesta: "Una fórmula matemática que fija el precio automáticamente, según las reservas del pool, sin que una persona lo decida"

explicacion: |
  Reemplaza al \"market maker\" humano de una casa de cambio
  tradicional por una fórmula.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué se mantiene constante en el AMM más usado, según la fórmula del producto constante?"
tipo: mc
opciones_explicitas:
  - "El producto entre las dos reservas del pool (reserva_A × reserva_B)"
  - "La suma entre las dos reservas del pool"
  - "El precio del token, sin importar cuánto se opere"
respuesta: "El producto entre las dos reservas del pool (reserva_A × reserva_B)"

explicacion: |
  Es la fórmula central del tema: x × y = k, con k constante.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(50, 150) * 10
  reserva_b: random(6, 20) * 12

respuesta: reserva_a * reserva_b
tipo: input
tolerancia_abs: 0

enunciado: "Un pool tiene {reserva_a} unidades de Token A y {reserva_b} unidades de Token B. Según la fórmula del producto constante, ¿cuál es el valor de k?"

explicacion: |
  k = reserva_A × reserva_B, el valor que el pool mantiene fijo.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Si alguien deposita Token A en el pool para llevarse Token B, ¿qué pasa con las dos reservas del pool?"
tipo: mc
opciones_explicitas:
  - "La reserva de A sube y la reserva de B baja"
  - "Las dos reservas suben por igual"
  - "Las dos reservas quedan exactamente iguales que antes"
respuesta: "La reserva de A sube y la reserva de B baja"

explicacion: |
  El pool entrega B y recibe A: sube lo que entra, baja lo que sale.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(50, 150) * 10
  reserva_b: random(6, 20) * 12
  k: reserva_a * reserva_b
  factor: uno_de([2, 3, 4, 6])
  reserva_a_2: reserva_a * factor
  reserva_b_2_correcto: reserva_b / factor
  error: uno_de([0, 0, 0, 5, -5])
  reserva_b_2_reportado: reserva_b_2_correcto + error

respuesta: (reserva_a_2 * reserva_b_2_reportado == k)
tipo: vf

enunciado: "Un pool arrancó con {reserva_a} de Token A y {reserva_b} de Token B (k = {k}). Después de varios swaps, quedó con {reserva_a_2} de Token A y {reserva_b_2_reportado} de Token B. ¿Es correcto que el pool mantuvo el producto constante?"

explicacion: |
  Se multiplican las reservas nuevas y se compara el resultado contra
  el k original.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En un AMM de producto constante, ¿cómo se calcula el precio de un token en términos del otro?"
tipo: mc
opciones_explicitas:
  - "Por la relación entre las dos reservas (cuánto hay de uno por cada unidad del otro)"
  - "Lo fija manualmente el proveedor de liquidez que depositó más"
  - "Siempre es 1 a 1, sin importar las reservas"
respuesta: "Por la relación entre las dos reservas (cuánto hay de uno por cada unidad del otro)"

explicacion: |
  El precio surge de la proporción entre reservas, no de una decisión
  manual.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "calculo"]

variables:
  reserva_a: random(2, 20) * 10
  precio: uno_de([2, 3, 4, 5])
  reserva_b: reserva_a * precio

respuesta: reserva_b / reserva_a
tipo: input
tolerancia_abs: 0

enunciado: "Un pool tiene {reserva_a} unidades de Token A y {reserva_b} unidades de Token B. ¿Cuántas unidades de Token B vale, aproximadamente, cada unidad de Token A?"

explicacion: |
  Precio de A en términos de B = reserva_B / reserva_A.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es el slippage (deslizamiento) en un swap?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el precio esperado al empezar la operación y el precio real obtenido al terminarla"
  - "La comisión fija que cobra el DEX por cada operación"
  - "El tiempo que tarda en confirmarse un swap"
respuesta: "La diferencia entre el precio esperado al empezar la operación y el precio real obtenido al terminarla"

explicacion: |
  Es consecuencia directa de que el precio se mueve mientras se
  ejecuta la operación.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un swap grande cambia la relación entre las reservas de forma más brusca que uno chico, por eso el precio final que recibe quien opera es peor cuanto más grande es la operación."

explicacion: |
  El precio depende de la proporción entre reservas: moverla mucho
  empeora el precio de la propia operación que la movió.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "problema"]

enunciado: "Para hacer un swap grande con el menor slippage posible, ¿qué conviene buscar?"
tipo: mc
opciones_explicitas:
  - "Un pool con reservas grandes (mucha profundidad), donde la misma operación mueve menos la relación entre reservas"
  - "El pool con las reservas más chicas disponibles"
  - "Da exactamente igual el tamaño de las reservas del pool"
respuesta: "Un pool con reservas grandes (mucha profundidad), donde la misma operación mueve menos la relación entre reservas"

explicacion: |
  Un mismo swap mueve proporcionalmente menos un pool grande que uno
  chico.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

enunciado: "¿Qué es la \"pérdida impermanente\" para un proveedor de liquidez?"
tipo: mc
opciones_explicitas:
  - "Que la combinación de tokens que le queda en el pool valga menos, en conjunto, que si se hubiera quedado con los tokens originales sin depositarlos"
  - "La comisión que cobra el DEX por retirar fondos del pool"
  - "La pérdida garantizada que sufre cualquier proveedor de liquidez, sin excepción"
respuesta: "Que la combinación de tokens que le queda en el pool valga menos, en conjunto, que si se hubiera quedado con los tokens originales sin depositarlos"

explicacion: |
  Ocurre cuando el precio de mercado de los dos tokens diverge por
  fuera del pool.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La pérdida impermanente sólo se vuelve una pérdida real si el proveedor retira sus fondos del pool en ese momento; si los precios vuelven a acercarse, la pérdida se reduce o desaparece."

explicacion: |
  Es justamente lo que explica el nombre \"impermanente\": no está
  fija hasta que se retira.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "calculo"]

variables:
  volumen_swap: random(1, 50) * 1000
  fee_pct: uno_de([1, 2, 5])

respuesta: volumen_swap * fee_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "Un pool cobra una comisión del {fee_pct}% sobre cada swap. Si en un día se operó un volumen total de ${volumen_swap}, ¿cuánto se repartió en comisiones entre los proveedores de liquidez? (comisión simplificada a un número redondo para el cálculo; las reales suelen ser más chicas, del orden de 0.3%)"

explicacion: |
  Comisión = volumen operado × porcentaje de comisión.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un AMM, ninguna persona decide manualmente el precio en cada operación: el precio surge automáticamente de la fórmula, según las reservas del pool en ese momento."

explicacion: |
  Es la idea central de \"automático\" en el nombre AMM.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "En una casa de cambio tradicional, ¿quién decide a qué precio comprar y vender?"
tipo: mc
opciones_explicitas:
  - "Una persona (el \"market maker\")"
  - "Una fórmula matemática automática"
  - "Nadie: el precio siempre es fijo"
respuesta: "Una persona (el \"market maker\")"

explicacion: |
  Es justo lo que el AMM reemplaza: la decisión humana por una
  fórmula.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del ciclo de un proveedor de liquidez (LP) en un pool."
opciones_explicitas:
  - "El LP retira su parte del pool, incluyendo las comisiones ganadas"
  - "El LP deposita una cantidad de ambos tokens en el pool"
  - "El pool acumula comisiones de cada swap"
  - "Otros usuarios hacen swaps usando ese pool como contraparte"
respuesta_orden: ["El LP deposita una cantidad de ambos tokens en el pool", "Otros usuarios hacen swaps usando ese pool como contraparte", "El pool acumula comisiones de cada swap", "El LP retira su parte del pool, incluyendo las comisiones ganadas"]

explicacion: |
  Cada paso depende del anterior: sin depósito no hay pool, sin swaps
  no hay comisión que acumular.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "avanzado"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando una app de DeFi muestra un \"APY estimado\" por dar liquidez, ese número suele reflejar las comisiones esperadas, sin incluir necesariamente el riesgo de pérdida impermanente."

explicacion: |
  Es una distinción importante: la comisión ganada y el riesgo del
  pool son cosas separadas.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi"]

tipo: completar
enunciado: "Completá la fórmula del AMM de producto constante: reserva_A × ___ (la otra reserva) = k."
respuestas_validas:
  - "reserva_b"
  - "reserva_B"

explicacion: |
  Es la fórmula central del tema.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "intermedio"
  tags: ["defi", "vocabulario"]

enunciado: "Cuando alguien hace un swap contra un pool de liquidez, ¿contra quién está intercambiando en términos prácticos?"
tipo: mc
opciones_explicitas:
  - "Contra el fondo compartido del pool en su conjunto, no contra una persona específica"
  - "Contra el proveedor de liquidez que depositó más recientemente"
  - "Contra la empresa dueña del DEX"
respuesta: "Contra el fondo compartido del pool en su conjunto, no contra una persona específica"

explicacion: |
  Es la diferencia con el libro de órdenes tradicional: no hay una
  contraparte individual, sino el pool como conjunto.
```

```
metadata:
  materia: "economia"
  tema: "pools_liquidez_amm"
  nivel: "basico"
  tags: ["defi", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un pool de liquidez guarda dos tokens aportados por proveedores de liquidez, y un AMM fija el precio automáticamente manteniendo constante el producto entre esas dos reservas."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: precio-final (24 preguntas)

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué compone el precio final que paga el consumidor?"
tipo: mc
opciones_explicitas:
  - "Costo + margen de cada eslabón + IVA + otros impuestos y tasas (como Ingresos Brutos)"
  - "Sólo el costo de producción"
  - "Sólo el IVA"
respuesta: "Costo + margen de cada eslabón + IVA + otros impuestos y tasas (como Ingresos Brutos)"

explicacion: |
  El IVA (ver `../iva/teoria.md`) es sólo una de las capas del precio
  final.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué es el impuesto a los Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "Un impuesto provincial que grava los ingresos de cualquier actividad económica"
  - "Un impuesto nacional idéntico al IVA"
  - "Un impuesto que sólo pagan las importaciones"
respuesta: "Un impuesto provincial que grava los ingresos de cualquier actividad económica"

explicacion: |
  A diferencia del IVA, es provincial: cada provincia fija su propia
  alícuota.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ingresos Brutos es un impuesto provincial, a diferencia del IVA, que es nacional."

explicacion: |
  Es la diferencia clave entre los dos impuestos.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada provincia argentina fija su propia alícuota de Ingresos Brutos, que puede llegar hasta aproximadamente el 9%."

explicacion: |
  Por eso el mismo tipo de producto puede pagar distinto Ingresos Brutos
  según en qué provincia se venda.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "calculo"]

variables:
  precio: random(10, 50) * 1000

respuesta: precio * 0.085
tipo: input
tolerancia_abs: 5

enunciado: "Usando la estimación de que Ingresos Brutos representa, en promedio, un 8,5% del precio final, ¿cuántos pesos de un precio de ${precio} corresponden aproximadamente a este impuesto?"

explicacion: |
  Es una aproximación educativa (la cifra real varía por provincia y por
  producto), no una alícuota fija y exacta.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Según estimaciones, Ingresos Brutos representa entre el 8% y el 9% del precio final que paga el consumidor, en promedio."

explicacion: |
  Es un \"segundo impuesto\" bastante grande, aunque menos visible que el
  IVA porque no aparece desglosado en el ticket como el IVA.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

enunciado: "¿Qué es el \"efecto cascada\" de Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "Se cobra sobre el ingreso total de cada eslabón de la cadena, varias veces, sin descontar lo ya pagado antes"
  - "El impuesto baja automáticamente con el tiempo"
  - "Sólo se cobra una vez, al final de toda la cadena"
respuesta: "Se cobra sobre el ingreso total de cada eslabón de la cadena, varias veces, sin descontar lo ya pagado antes"

explicacion: |
  A diferencia del IVA (que sólo grava el valor agregado en cada etapa),
  Ingresos Brutos se acumula etapa tras etapa.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo producto puede pagar Ingresos Brutos varias veces a lo largo de la cadena productiva: una vez por cada empresa que participó (fabricante, distribuidor, comercio)."

explicacion: |
  Es la característica que lo hace \"distorsivo\": no se descuenta lo
  pagado en etapas anteriores.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "iva", "vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre el IVA e Ingresos Brutos?"
tipo: mc
opciones_explicitas:
  - "El IVA es nacional y grava sólo el valor agregado; Ingresos Brutos es provincial y grava el ingreso total en cada etapa (cascada)"
  - "Son exactamente el mismo impuesto con otro nombre"
  - "El IVA es provincial e Ingresos Brutos es nacional"
respuesta: "El IVA es nacional y grava sólo el valor agregado; Ingresos Brutos es provincial y grava el ingreso total en cada etapa (cascada)"

explicacion: |
  Son dos impuestos bien distintos, aunque los dos terminan formando
  parte del mismo precio final.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El IVA es idéntico en todo el país; Ingresos Brutos puede variar según la provincia donde se venda el producto."

explicacion: |
  Es la razón central de por qué el precio final puede diferir entre
  provincias, aunque el IVA sea el mismo en todos lados.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  costo_mas_margen: random(5, 30) * 1000

respuesta: costo_mas_margen * 1.21 * 1.085
tipo: input
tolerancia_abs: 5

enunciado: "Un producto tiene un costo más margen de ${costo_mas_margen}, antes de impuestos. Sumando 21% de IVA y, en cascada, un 8,5% aproximado de Ingresos Brutos, ¿cuál es el precio final aproximado?"

pasos:
  - "{costo_mas_margen} × 1,21 × 1,085 = {costo_mas_margen * 1.21 * 1.085}"

explicacion: |
  Los dos impuestos se aplican en cadena (como descuentos o recargos
  sucesivos, ver `../../vida-cotidiana/recargos-sucesivos/`), aunque en
  la práctica real el orden y la base exacta pueden variar según el caso.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mismo producto, del mismo fabricante, puede costar distinto en dos provincias distintas."

explicacion: |
  Ingresos Brutos (y otras cargas locales) puede diferir de una provincia
  a otra, aunque el IVA sea idéntico.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia de precio de un mismo producto entre dos provincias NO se explica por el IVA (que es igual en todo el país)."

explicacion: |
  Hay que mirar los impuestos provinciales (como Ingresos Brutos) para
  explicar esa diferencia, no el IVA.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final"]

enunciado: "¿Qué explica mejor que un producto cueste distinto en dos provincias?"
tipo: mc
opciones_explicitas:
  - "Las distintas alícuotas de Ingresos Brutos (y otras cargas locales) de cada provincia"
  - "El IVA, que cambia según la provincia"
  - "El color del envase del producto"
respuesta: "Las distintas alícuotas de Ingresos Brutos (y otras cargas locales) de cada provincia"

explicacion: |
  El IVA es nacional y no cambia por provincia; Ingresos Brutos sí.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "verificacion"]

variables:
  costo_mas_margen: random(5, 30) * 1000
  correcto: costo_mas_margen * 1.21 * 1.085
  error: uno_de([0, 0, 0, 500, -500])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 10)
tipo: vf

enunciado: "¿Está bien calculado esto? Costo+margen ${costo_mas_margen}, con IVA (21%) e Ingresos Brutos (8,5% aprox.), el precio final da ${mostrado}."

explicacion: |
  Se vuelve a aplicar la cadena de multiplicaciones y se compara.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final"]

variables:
  costo_mas_margen: random(5, 30) * 1000
  precio_final: costo_mas_margen * 1.21 * 1.085

tipo: completar
enunciado: "Completá: ___ (costo+margen) × 1,21 (IVA) × 1,085 (Ingresos Brutos aprox.) = ${precio_final}."
respuestas_validas:
  - costo_mas_margen

explicacion: |
  Se despeja dividiendo el precio final por 1,21 y por 1,085.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el precio final, el IVA (21%) representa un porcentaje mayor que Ingresos Brutos (8-9% aproximado en promedio)."

explicacion: |
  Aunque Ingresos Brutos es significativo, sigue siendo menor que la
  alícuota general del IVA.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  ingreso_fabricante: random(10, 30) * 1000
  ingreso_distribuidor: ingreso_fabricante + random(5, 15) * 1000
  ingreso_comercio: ingreso_distribuidor + random(5, 15) * 1000
  alicuota: 0.03

respuesta: (ingreso_fabricante + ingreso_distribuidor + ingreso_comercio) * alicuota
tipo: input
tolerancia_abs: 1

enunciado: "En una cadena simplificada de 3 etapas, cada una paga Ingresos Brutos (alícuota del 3%) sobre su propio ingreso: fabricante ${ingreso_fabricante}, distribuidor ${ingreso_distribuidor}, comercio ${ingreso_comercio}. ¿Cuánto se pagó de Ingresos Brutos en TOTAL entre las tres etapas?"

pasos:
  - "Se suma el impuesto de cada etapa por separado: ({ingreso_fabricante}+{ingreso_distribuidor}+{ingreso_comercio}) × 3% = {(ingreso_fabricante + ingreso_distribuidor + ingreso_comercio) * alicuota}"

explicacion: |
  Es el efecto cascada en acción: cada etapa paga sobre su propio
  ingreso, sin descontar lo que ya pagaron las etapas anteriores.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ingresos Brutos representa, aproximadamente, el 80% de la recaudación tributaria de las provincias argentinas."

explicacion: |
  Es, por lejos, el impuesto provincial más importante en términos de
  recaudación.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Además de los impuestos, el precio final incluye el margen de ganancia de cada eslabón de la cadena (fabricante, distribuidor, comercio)."

explicacion: |
  No todo el precio final es impuesto: también hay costo y ganancia de
  cada parte involucrada.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Especialistas consideran a Ingresos Brutos un impuesto \"distorsivo\", porque grava en cascada a toda la cadena productiva, encareciendo el precio final más de lo que su alícuota nominal sugeriría."

explicacion: |
  El efecto cascada hace que el impuesto \"pese\" más de lo que parece a
  simple vista, comparado con un impuesto que sólo grava el valor
  agregado (como el IVA).
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "avanzado"
  tags: ["precio_final", "problema"]

variables:
  costo_mas_margen: random(10, 30) * 1000
  ib_provincia_a: 0.03
  ib_provincia_b: 0.05

respuesta: (costo_mas_margen * 1.21 * (1 + ib_provincia_b)) - (costo_mas_margen * 1.21 * (1 + ib_provincia_a))
tipo: input
tolerancia_abs: 5

enunciado: "Un producto con costo+margen de ${costo_mas_margen} (más 21% de IVA, igual en las dos provincias) paga {ib_provincia_a * 100}% de Ingresos Brutos en la provincia A, y {ib_provincia_b * 100}% en la provincia B. ¿Cuánto más caro sale en la provincia B?"

explicacion: |
  La diferencia depende únicamente de la distinta alícuota de Ingresos
  Brutos, ya que el IVA es igual en las dos.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "intermedio"
  tags: ["precio_final", "iva", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer sólo el 21% de IVA no alcanza para saber cuánto de un precio final es impuesto: falta sumar Ingresos Brutos y otras cargas."

explicacion: |
  El IVA es la parte más visible (a veces se desglosa en el ticket), pero
  no es la única carga tributaria del precio.
```

```
metadata:
  materia: "economia"
  tema: "precio_final"
  nivel: "basico"
  tags: ["precio_final", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El precio final combina costo, margen, IVA (nacional, parejo) e Ingresos Brutos y otras cargas locales (que sí varían según la provincia)."

explicacion: |
  Es la idea central de todo el tema: el IVA es sólo una parte de la
  historia completa del precio final.
```
