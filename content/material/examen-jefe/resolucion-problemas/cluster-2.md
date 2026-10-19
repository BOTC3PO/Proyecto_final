# Examen jefe — Evaluador de Soluciones

> Logro #959. Dominaste el costo-beneficio, definir alcance y objetivos, evaluar el resultado, la planificación de tareas e hitos y mejorar o iterar. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: costo-beneficio (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["definicion", "decision"]

respuesta: "beneficio"
tipo: "completar"
respuestas_validas:
  - "beneficio"

enunciado: "En un análisis de costo-beneficio, el objetivo es comparar los costos de una decisión contra el ___ que se espera obtener de ella."

explicacion: |
  El análisis de costo-beneficio busca determinar si los beneficios de una acción superan sus costos asociados.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["costos", "conceptos"]

opciones_explicitas: ["Costos directos", "Costos indirectos", "Ambos son costos"]

respuesta: "Ambos son costos"
tipo: "mc"

enunciado: "En el contexto de la toma de decisiones, ¿qué tipo de gastos deben considerarse al calcular los costos totales?"

explicacion: |
  Para un análisis exhaustivo, se deben sumar tanto los costos directos (materiales, mano de obra) como los indirectos (alquiler, servicios).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["logica", "evaluacion"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es verdadero o falso que el análisis de costo-beneficio solo debe considerar factores monetarios y nunca factores cualitativos (como la satisfacción del cliente)?"

explicacion: |
  Falso. Aunque los factores monetarios son más fáciles de cuantificar, los factores cualitativos son cruciales para una decisión integral.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["proceso", "pasos"]

opciones_explicitas: ["Identificar costos", "Estimar beneficios", "Comparar resultados"]

respuesta_orden: ["Identificar costos", "Estimar beneficios", "Comparar resultados"]
tipo: "ordenar"

enunciado: "Ordene los pasos lógicos para realizar un análisis de costo-beneficio básico:"

explicacion: |
  Primero se deben listar los egresos, luego los ingresos/beneficios esperados, y finalmente se realiza la comparación para decidir.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["resultado", "decision"]

variables:
  datos: [[100, 150], [200, 150]]
  idx: uno_de([0, 1])
  resultados: ["La decisión no es rentable", "La decisión es rentable"]

respuesta: resultados[idx]
tipo: "mc"

enunciado: "Si los beneficios estimados son {datos[idx][0]} y los costos son {datos[idx][1]}, ¿cuál es la conclusión del análisis?"

opciones_explicitas: ["La decisión es rentable", "La decisión no es rentable"]

explicacion: |
  Si el beneficio es mayor al costo, la decisión es rentable. Si el costo es mayor, no lo es.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["finanzas", "decision"]

variables:
  costo_proyecto: 5000
  ganancia_esperada: 7500

respuesta: ganancia_esperada - costo_proyecto
tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa decide implementar un nuevo software que tiene un costo de ${costo_proyecto} y se estima que la ganancia neta adicional por eficiencia será de ${ganancia_esperada}, ¿cuál es el beneficio neto de la inversión?"

pasos:
  - "Identificar el costo total de la decisión."
  - "Identificar la ganancia total esperada."
  - "Restar el costo de la ganancia para hallar el beneficio neto."

explicacion: |
  El beneficio neto se calcula restando el costo de la inversión de la ganancia total obtenida: 7500 - 5000 = 2500.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["ratio", "rentabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1200, 1500], [5000, 4500]]

respuesta: datos[escenario_idx][1] / datos[escenario_idx][0] > 1

tipo: vf
enunciado: "Considerando que el beneficio se define como la relación entre la ganancia y el costo (Ratio = Ganancia / Costo), ¿es la inversión en el escenario seleccionado rentable (Ratio > 1)?"

explicacion: |
  En el escenario seleccionado, si la ganancia es mayor al costo, el ratio será mayor a 1, lo que indica que la decisión es financieramente beneficiosa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["comparacion", "decision"]

variables:
  opcion_a_costo: 100
  opcion_a_ganancia: 150
  opcion_b_costo: 200
  opcion_b_ganancia: 300

respuesta: "Opción B"

tipo: mc
opciones_explicitas: ["Opción A", "Opción B", "Ambas son iguales"]

enunciado: "Se deben elegir dos proyectos. El Proyecto A cuesta ${opcion_a_costo} y genera ${opcion_a_ganancia}. El Proyecto B cuesta ${opcion_b_costo} y genera ${opcion_b_ganancia}. Si buscamos la opción con el mayor beneficio neto (Ganancia - Costo), ¿cuál es la mejor elección?"

explicacion: |
  Beneficio neto A: 150 - 100 = 50.
  Beneficio neto B: 300 - 200 = 100.
  Por valor absoluto del beneficio neto, la Opción B es superior, aunque su rentabilidad relativa (ratio ganancia/costo) sea la misma que la de A.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificar costos", "Estimar beneficios", "Calcular beneficio neto", "Comparar con alternativas"]
tipo: ordenar
opciones_explicitas: ["Identificar costos", "Estimar beneficios", "Calcular beneficio neto", "Comparar con alternativas"]

enunciado: "Ordena correctamente los pasos lógicos para realizar un análisis de costo-beneficio antes de tomar una decisión de inversión."

explicacion: |
  Para decidir correctamente, primero se deben conocer todos los desembolsos (costos), luego lo que se espera recibir (beneficios), calcular la diferencia y finalmente comparar el resultado con otras opciones disponibles.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["punto_de_equilibrio", "calculo"]

variables:
  costo_fijo: 1000
  margen_unitario: 50

respuesta: costo_fijo / margen_unitario
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una empresa tiene un costo fijo de ${costo_fijo} y cada unidad vendida aporta un margen de ${margen_unitario} para cubrir costos, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio (donde el beneficio es cero)?"

pasos:
  - "Identificar el costo total que debe ser cubierto."
  - "Dividir el costo total por el margen de contribución unitario."

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos cubren exactamente los costos. La fórmula es: Costo Fijo / Margen Unitario = 1000 / 50 = 20 unidades.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["costo_de_oportunidad", "decision"]

variables:
  idx: uno_de([0, 1, 2])
  descripciones: ["Invertir $1000 en acciones que rinden $1200", "Estudiar una semana que rinde $500 de beneficio", "Comprar un equipo que ahorra $300 de costos"]
  ingresos: [1200, 500, 300]
  costos: [1000, 0, 150]
  descripcion: descripciones[idx]
  ingreso: ingresos[idx]
  costo: costos[idx]

enunciado: "Si decides ejecutar la opción {descripcion}, el beneficio neto es {ingreso - costo}. Sin embargo, si la mejor alternativa sacrificada hubiera dado un beneficio de $500, el costo de oportunidad de tu decisión es de $___."

respuestas_validas:
  - "500"
tipo: completar

explicacion: |
  El costo de oportunidad no es lo que gastas, sino el valor de la mejor alternativa a la que renuncias al tomar una decisión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["beneficio_contable", "flujo_caja"]

enunciado: "Un proyecto genera una ganancia contable de $10.000, pero requiere una inversión inicial de $12.000. Si el análisis de costo-beneficio solo considera el beneficio contable sin considerar el desembolso inicial (inversión), ¿el resultado de la decisión es financieramente positivo?"

respuesta: falso
tipo: vf
explicacion: |
  Un error común es confundir el ingreso o beneficio bruto con el beneficio neto. Para una decisión correcta, se debe restar el costo total (inversión) del beneficio obtenido.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["costos_hundidos", "sesgo_cognitivo"]

enunciado: "Has gastado $5.000 en un proyecto que ya no es rentable. La única forma de continuar es gastar $2.000 más, pero el retorno esperado es de solo $1.000. ¿Cuál es el análisis correcto para la decisión futura?"

opciones_explicitas: ["Debo gastar los $2.000 porque ya invertí $5.000.", "Debo gastar los $2.000 para no perder los $5.000 iniciales.", "No debo gastar los $2.000 porque el costo adicional es mayor al beneficio esperado."]
respuesta: "No debo gastar los $2.000 porque el costo adicional es mayor al beneficio esperado."
tipo: mc

explicacion: |
  Los 'costos hundidos' (los $5.000 ya gastados) no deben influir en la decisión actual. Solo deben considerarse los costos y beneficios futuros.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

enunciado: "Ordena los pasos lógicos para realizar un análisis de costo-beneficio efectivo:"

opciones_explicitas: ["Identificar todos los costos (directos e indirectos)", "Estimar los beneficios o ahorros esperados", "Comparar los costos totales contra los beneficios totales", "Tomar la decisión basada en el resultado neto"]
respuesta_orden: ["Identificar todos los costos (directos e indirectos)", "Estimar los beneficios o ahorros esperados", "Comparar los costos totales contra los beneficios totales", "Tomar la decisión basada en el resultado neto"]
tipo: ordenar

explicacion: |
  El proceso debe ser sistemático: primero se listan las salidas de recursos (costos), luego las entradas o ahorros (beneficios), se comparan y finalmente se decide.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["valor_temporal", "inflacion"]

variables:
  datos: [["Inversión: $100, Beneficio: $110 en 1 año", 110, 100], ["Inversión: $100, Beneficio: $120 en 5 años", 120, 100]]
  idx: uno_de([0, 1])

enunciado: "Considerando el escenario {datos[idx][0]}, un error común es comparar directamente el beneficio nominal con el costo sin considerar el valor del dinero en el tiempo. Si el beneficio de ${datos[idx][1]} se recibe en un plazo largo, su valor real hoy es ___ que el beneficio recibido inmediatamente."

respuestas_validas:
  - "menor"
tipo: completar

explicacion: |
  Debido a la inflación y al costo de oportunidad del dinero, un dólar recibido en el futuro vale menos que un dólar recibido hoy. Ignorar esto es un error crítico en el análisis de costo-beneficio.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["conceptos_base", "finanzas"]

respuesta: "gasto"
tipo: completar
respuestas_validas:
  - "gasto"

enunciado: "Mientras que el costo se asocia con la inversión realizada para generar ingresos, el ___ se refiere a una salida de dinero que no está directamente vinculada a la producción de un bien o servicio."

explicacion: |
  El costo es un desembolso necesario para la actividad principal (producción), mientras que el gasto es un consumo necesario para el funcionamiento operativo pero no genera valor directo al producto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["decision", "oportunidad"]

variables:
  escenario: uno_de([["Invertir en una máquina nueva", "ganancia_extra"], ["Estudiar una maestría", "mayor_salario"], ["Lanzar un nuevo producto", "nuevos_clientes"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ganancia_extra", "mayor_salario", "nuevos_clientes"]

enunciado: "Si una empresa decide usar su capital para {escenario[0]}, el costo de oportunidad es la {escenario[1]} que deja de percibir. ¿Qué representa el costo de oportunidad en este contexto?"

explicacion: |
  El costo de oportunidad no es un valor monetario directo, sino el beneficio de la mejor alternativa sacrificada al tomar una decisión.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["rentabilidad", "liquidez"]

respuesta: falso
tipo: vf

enunciado: "Si un proyecto tiene una alta rentabilidad proyectada, esto garantiza automáticamente que la empresa tendrá suficiente efectivo (liquidez) para cubrir sus obligaciones inmediatas."

explicacion: |
  Falso. La rentabilidad es una medida de beneficio sobre inversión, mientras que el flujo de caja (liquidez) mide la disponibilidad de dinero real en momentos específicos. Se puede ser rentable pero quebrar por falta de caja.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Identificar costos", "Identificar beneficios", "Comparar resultados"]
tipo: ordenar

opciones_explicitas: ["Identificar costos", "Identificar beneficios", "Comparar resultados"]

enunciado: "Ordena los pasos lógicos para realizar un análisis de costo-beneficio efectivo:"

explicacion: |
  Primero se deben cuantificar las salidas (costos), luego las entradas (beneficios) y finalmente evaluar si la relación beneficio/costo es favorable.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["punto_de_equilibrio", "break_even"]

variables:
  datos: [[1000, 30, 50], [500, 20, 45], [2000, 60, 100]]
  idx: uno_de([0,1,2])
  costo_fijo: datos[idx][0]
  costo_variable: datos[idx][1]
  precio_venta: datos[idx][2]

respuesta: costo_fijo / (precio_venta - costo_variable)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una empresa tiene un costo fijo de ${costo_fijo}, un costo variable por unidad de ${costo_variable} y un precio de venta de ${precio_venta}, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio (donde el beneficio es cero)?"

pasos:
  - "Calcular el margen de contribución unitario: {precio_venta - costo_variable}"
  - "Dividir el costo fijo entre el margen de contribución: {costo_fijo / (precio_venta - costo_variable)}"

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales: ${costo_fijo} / (${precio_venta} - ${costo_variable}) = ${costo_fijo / (precio_venta - costo_variable)}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["finanzas", "decision"]

variables:
  escenario_idx: uno_de([0, 1])
  costos: [5000, 3000]
  ganancias: [12000, 7500]
  costo: costos[escenario_idx]
  ganancia: ganancias[escenario_idx]

enunciado: "Se está evaluando una decisión de inversión. El costo de la acción es de ${costo} y el beneficio esperado es de ${ganancia}. ¿Cuál es el beneficio neto (ganancia menos costo)?"

respuesta: ganancia - costo
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El beneficio neto se calcula restando el costo total de los ingresos o beneficios obtenidos.
  En este caso: ${ganancia} - ${costo} = ${ganancia - costo}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["rentabilidad", "porcentaje"]

variables:
  escenario_idx: uno_de([0, 1])
  costos: [100, 200]
  beneficios: [150, 250]
  costo: costos[escenario_idx]
  beneficio: beneficios[escenario_idx]
  ratio: beneficio / costo

enunciado: "Si el costo es ${costo} y el beneficio es ${beneficio}, ¿el ratio beneficio/costo es mayor a 1.2?"

respuesta: ratio > 1.2
tipo: vf
explicacion: |
  El ratio es ${ratio}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["decision", "mc"]

enunciado: "Se comparan dos proyectos: la Opción A tiene un costo de $1000 y un beneficio de $1500; la Opción B tiene un costo de $2000 y un beneficio de $1800. ¿Cuál es la mejor opción basándose únicamente en el beneficio neto?"

opciones_explicitas: ["Opción A", "Opción B"]
respuesta: "Opción A"
tipo: mc

explicacion: |
  Para decidir, calculamos el beneficio neto de cada una. 
  Opción A: ${1500 - 1000} = 500.
  Opción B: ${1800 - 2000} = -200.
  La mejor opción es la que tiene mayor beneficio neto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["flujo", "ordenar"]

enunciado: "Ordene los eventos de un análisis de costo-beneficio desde el inicio del proyecto hasta la obtención del beneficio neto."

opciones_explicitas: ["Inversión inicial", "Gastos operativos", "Ingresos totales", "Cálculo de beneficio neto"]
respuesta_orden: ["Inversión inicial", "Gastos operativos", "Ingresos totales", "Cálculo de beneficio neto"]
tipo: ordenar

explicacion: |
  Primero se realiza la inversión, luego se incurre en gastos para operar, se generan ingresos y finalmente se resta todo para hallar el neto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["punto_de_equilibrio", "completar"]

variables:
  escenario_idx: uno_de([0, 1])
  costos_fijos: [1000, 500]
  margenes_unitarios: [50, 25]
  costo_fijo: costos_fijos[escenario_idx]
  margen_unitario: margenes_unitarios[escenario_idx]

enunciado: "Para recuperar la inversión inicial de ${costo_fijo}, si cada unidad aporta un margen de ${margen_unitario}, se deben vender ___ unidades para alcanzar el punto de equilibrio."

respuesta: costo_fijo / margen_unitario
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El punto de equilibrio se alcanza cuando el margen total cubre el costo fijo.
  Cálculo: ${costo_fijo} / ${margen_unitario} = ${costo_fijo / margen_unitario}.
```

## Sección: definir-alcance-y-objetivos (25 preguntas)

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

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "smart"]

respuesta: falso
tipo: vf
enunciado: "Un objetivo que es ambiguo, no tiene una fecha de finalización clara y no es medible, ¿cumple con la metodología SMART?"

explicacion: |
  Para que un objetivo sea SMART debe ser Específico, Medible, Alcanzable, Relevante y con un Tiempo determinado.
```

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

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["gestion_proyectos", "alcance"]

enunciado: "Se está diseñando un proyecto para una App de delivery de comida. Según la definición de alcance establecida, el proyecto incluye la gestión de pedidos y pagos pero no incluye la preparación de los alimentos."

respuesta: "incluye la gestión de pedidos y pagos"
tipo: mc
opciones_explicitas: ["incluye la gestión de pedidos y pagos", "incluye la preparación de los alimentos", "no incluye la gestión de pedidos y pagos", "no incluye la preparación de los alimentos"]

explicacion: |
  El alcance define los límites del proyecto. En este caso, la gestión de pedidos es parte del software (incluido), mientras que la preparación de la comida es una tarea operativa externa al software (no incluido).
```

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

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["exclusiones", "gestion_riesgos"]

respuesta: "Excluir la versión web"
tipo: "mc"
opciones_explicitas: ["Incluir soporte técnico 24/7", "Excluir mantenimiento preventivo", "Desarrollar la app móvil", "Excluir la versión web", "Instalar el software", "Excluir la capacitación de usuarios"]

enunciado: "En la gestión de proyectos, definir lo que NO está incluido en el alcance es tan crítico como definir lo que sí está. Si un proyecto tiene como límite definido el desarrollo de una aplicación móvil, ¿cuál de los siguientes ejemplos representa una exclusión clara del alcance?"

pasos:
  - "Identificar el entregable principal definido en el enunciado."
  - "Buscar la opción que represente una tarea o producto fuera de ese entregable."

explicacion: |
  Definir las exclusiones (out-of-scope) ayuda a prevenir el 'scope creep' (corrimiento del alcance) y gestiona las expectativas del cliente.
```

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

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["riesgos", "gestion_proyectos"]

respuesta: "retrasar la fecha de entrega"
tipo: "mc"
opciones_explicitas: ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"]

enunciado: "Cuando el alcance no se define correctamente y se permiten cambios constantes sin control (scope creep), ¿cuál es la consecuencia más directa en el cronograma del proyecto?"

explicacion: |
  El descontrol en el alcance consume más horas de las previstas, lo que impacta directamente en el cumplimiento de los plazos (retraso).
```

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

```
metadata:
  materia: "resolucion-problemas"
  tema: "definir-alcance-y-objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "smart"]

variables:
  textos: ["Aumentar las ventas un 20% en 6 meses", "Mejorar la calidad del servicio", "Reducir costos de producción"]
  valores: [verdadero, falso, falso]
  idx: uno_de([0, 1, 2])

tipo: vf
respuesta: valores[idx]

enunciado: "Analizando el siguiente objetivo: '{textos[idx]}'. ¿Cumple con los criterios SMART (Específico, Medible, Alcanzable, Relevante y con Tiempo definido)?"

explicacion: |
  Un objetivo SMART debe ser medible y tener un plazo determinado. 'Mejorar la calidad del servicio' es un deseo, no un objetivo SMART, porque no indica cuánto ni cuándo. 'Reducir costos de producción' tampoco lo es, ya que no especifica un porcentaje ni un plazo concreto.
```

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

enunciado: "Evaluando el objetivo planteado: '{escenario[0]}'. ¿Es un objetivo realista y alcanzable para el equipo?"

respuesta: escenario[1]

explicacion: |
  Un objetivo debe ser realista. Los objetivos que ignoran la calidad técnica o que son excesivamente ambiciosos sin un plan de acción (como ser líderes mundiales en un año) se consideran inviables.
```

## Sección: evaluar-el-resultado (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "validar"
tipo: completar
respuestas_validas:
  - "validar"

enunciado: "El proceso de comprobar si la solución implementada realmente resolvió el problema se denomina ________."

explicacion: |
  La evaluación es la etapa donde se verifica si la solución propuesta cumple con los requisitos iniciales y resuelve el problema planteado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["criterios", "metodologia"]

opciones_explicitas: ["Criterios de aceptación", "Pasos de la solución", "Variables de entorno", "Diagramas de flujo"]
respuesta: "Criterios de aceptación"
tipo: mc

enunciado: "¿Cómo se denominan los estándares o condiciones que se utilizan para determinar si una solución es correcta y satisfactoria?"

explicacion: |
  Los criterios de aceptación definen las condiciones que debe cumplir el resultado para ser considerado una solución válida.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["eficiencia", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Evaluar el resultado implica únicamente verificar que la solución sea correcta, sin importar el uso de recursos como tiempo o memoria."

explicacion: |
  Falso. Una evaluación completa también debe considerar la eficiencia (optimización de recursos) de la solución implementada.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["ciclo", "pasos"]

opciones_explicitas: ["Implementación", "Evaluación", "Diseño de la solución", "Análisis del problema"]
respuesta_orden: ["Análisis del problema", "Diseño de la solución", "Implementación", "Evaluación"]
tipo: ordenar

enunciado: "Ordena las etapas del ciclo de resolución de problemas desde el inicio hasta la fase de evaluación:"

explicacion: |
  El ciclo estándar comienza con entender el problema, diseñar la estrategia, construir la solución y finalmente evaluarla.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["errores", "verificacion"]

variables:
  escenarios: [["el resultado es incorrecto", "el resultado es correcto pero lento"], ["fallo en la lógica", "fallo en la eficiencia"]]
  escenario: uno_de(escenarios)

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["el resultado es incorrecto", "el resultado es correcto pero lento", "fallo en la lógica", "fallo en la eficiencia"]

enunciado: "Si tras la evaluación se detecta que la solución no cumple con los criterios de aceptación debido a un error en el proceso, ¿cuál de las siguientes conclusiones describe correctamente la situación?"

explicacion: |
  Si la solución no satisface los criterios establecidos, la evaluación indica que el problema no ha sido resuelto satisfactoriamente.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["verificacion", "logica"]

variables:
  lista_datos: [12, 5, 8, 20]
  suma_esperada: sumar([12, 5, 8, 20])

enunciado: "Se implementó un algoritmo para sumar los elementos de la lista {lista_datos}. El resultado obtenido por el programa fue {suma_esperada}. ¿Es este resultado correcto según la suma manual?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  Para verificar un algoritmo de suma, debemos realizar la operación manualmente: 12 + 5 + 8 + 20 = 45. Como el resultado coincide, la solución es correcta.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["estadistica", "verificacion"]

variables:
  valores: [10, 20, 30, 40]
  media_calculada: 25

enunciado: "Un estudiante afirma que el promedio de los valores {valores} es {media_calculada}. Si el procedimiento para calcular la media es sumar todos los elementos y dividir por la cantidad de elementos, ¿la respuesta es correcta?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "verdadero"
tipo: mc

explicacion: |
  La media es (10 + 20 + 30 + 40) / 4 = 100 / 4 = 25. El resultado es correcto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["ordenamiento", "verificacion"]

enunciado: "Se desea verificar si el siguiente proceso de ordenamiento ascendente es correcto para la lista original [15, 3, 9, 1]:"

pasos:
  - "Paso 1: Comparar 15 y 3 -> [3, 15, 9, 1]"
  - "Paso 2: Comparar 15 y 9 -> [3, 9, 15, 1]"
  - "Paso 3: Comparar 15 y 1 -> [3, 9, 1, 15]"
  - "Paso 4: Comparar 9 y 1 -> [3, 1, 9, 15]"
  - "Paso 5: Comparar 3 y 1 -> [1, 3, 9, 15]"

opciones_explicitas: ["Correcto", "Incorrecto"]

respuesta: "Correcto"
tipo: mc

explicacion: |
  Al seguir los pasos del algoritmo de burbuja (bubble sort), la lista resultante [1, 3, 9, 15] está efectivamente ordenada de menor a mayor.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["matematica", "verificacion"]

variables:
  n: 17

enunciado: "Un programa indica que el número {n} es primo. Para verificarlo, se comprueba si tiene divisores distintos de 1 y de sí mismo. El resultado de la función 'es_primo({n})' es ___."

respuestas_validas:
  - "verdadero"
  - "falso"

respuesta: "verdadero"
tipo: completar

explicacion: |
  El número 17 solo es divisible por 1 y 17. Por lo tanto, la afirmación de que es primo es verdadera.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["logica", "condicionales"]

variables:
  x: 10
  oy: 5

enunciado: "Se implementó la siguiente lógica para un sistema de facturación: 'Si el monto es mayor a 100, aplicar descuento de 10; de lo contrario, sumar el monto tal cual'. Si el monto es {x} y se le suma {oy}, el resultado final debería ser ___."

respuesta: "15"
respuestas_validas:
  - "15"
tipo: completar

explicacion: |
  Dado que 10 no es mayor a 100, se aplica la condición 'de lo contrario'. Por tanto, el resultado es simplemente la suma: 10 + 5 = 15.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["validacion", "errores_comunes"]

variables:
  caso_test: uno_de([[10, 5], [20, 10], [5, 2.5]])

respuesta: "La prueba manual con un caso de éxito no descarta errores en otros escenarios"
tipo: mc
opciones_explicitas: ["La prueba manual con un solo caso es suficiente para garantizar la corrección", "La prueba manual con un caso de éxito no descarta errores en otros escenarios", "Si el resultado es el esperado para un caso, el algoritmo es perfecto", "La validación manual es más confiable que la automatizada"]

enunciado: "Un programador implementa una función para calcular la mitad de un número. Al probarla con el número {caso_test[0]}, obtiene {caso_test[1]} y concluye que el código es correcto para todos los números. ¿Cuál es el error en su proceso de evaluación?"

explicacion: |
  Comprobar que un algoritmo funciona para un caso específico (happy path) no garantiza que sea correcto para todos los casos de entrada. Se requiere una estrategia de pruebas que incluya casos límite (edge cases) y valores inesperados.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["conceptos", "verificacion"]

respuesta: falso
tipo: vf

enunciado: "En el contexto de evaluación de software, la 'verificación' consiste en asegurar que el producto final cumple con las necesidades reales del usuario, mientras que la 'validación' asegura que el producto se construyó correctamente según las especificaciones técnicas."

explicacion: |
  Es al revés: La Verificación se pregunta "¿Estamos construyendo el producto correctamente?" (cumplimiento de especificaciones), mientras que la Validación se pregunta "¿Estamos construyendo el producto correcto?" (cumplimiento de la necesidad del usuario).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["edge_cases", "testing"]

variables:
  caso: uno_de([[0, "0"], [1, "1"], [1000000, "1000"], [0.0001, "0.01"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "0"
  - "1"
  - "1000"
  - "0.01"

enunciado: "Si estamos evaluando un algoritmo de cálculo de raíz cuadrada y el valor de entrada es {caso[0]}, el resultado esperado es ___."

explicacion: |
  Evaluar el resultado implica probar no solo valores comunes, sino también valores extremos o 'edge cases' (como cero, números negativos o números muy grandes) para asegurar la robustez del sistema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["metodologia", "ordenar"]

respuesta_orden: ["Definir el problema", "Implementar la solución", "Ejecutar pruebas con datos de prueba", "Comparar resultados con la solución esperada"]
tipo: ordenar
opciones_explicitas: ["Ejecutar pruebas con datos de prueba", "Definir el problema", "Comparar resultados con la solución esperada", "Implementar la solución"]

enunciado: "Ordene los pasos lógicos para asegurar que una solución implementada realmente resolvió el problema, partiendo desde la comprensión del mismo:"

explicacion: |
  Para evaluar correctamente, primero se debe entender el problema, luego construir la solución, probarla con datos conocidos y, finalmente, verificar si el output coincide con lo esperado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["precision", "floating_point"]

variables:
  valor_real: 0.3
  valor_computado: 0.1 + 0.2

respuesta: falso
tipo: vf

enunciado: "Al evaluar un algoritmo de suma de punto flotante, si el resultado esperado es {valor_real} y el resultado obtenido es {valor_computado}, podemos afirmar que el algoritmo es matemáticamente incorrecto debido a un error de lógica, ignorando la precisión de la máquina."

explicacion: |
  En computación, debido a la representación de números de punto flotante, 0.1 + 0.2 no es exactamente 0.3. Al evaluar resultados numéricos, es crucial distinguir entre un error de lógica del algoritmo y una limitación de la precisión de la arquitectura de la computadora.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["conceptos", "calidad"]

respuesta: "verificación"
tipo: "completar"
respuestas_validas:
  - "verificación"

enunciado: "Mientras que la validación asegura que el producto cumpla con las necesidades del cliente, la ________ asegura que el producto se haya construido correctamente según las especificaciones técnicas."

explicacion: |
  La validación se enfoca en "¿estamos construyendo el producto correcto?" (necesidades del usuario), mientras que la verificación se enfoca en "¿estamos construyendo el producto correctamente?" (cumplimiento de especificaciones).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["conceptos", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "Si una solución cumple con todos los requisitos técnicos pero no resuelve el problema original del usuario, ¿se puede considerar que la solución es exitosa desde la perspectiva de la validación?"

explicacion: |
  Falso. Si no resuelve el problema del usuario, la validación falla, aunque la verificación técnica haya sido exitosa.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["calidad", "terminologia"]

opciones_explicitas: ["Defecto", "Error", "Falla"]

respuesta: "Falla"
tipo: "mc"

enunciado: "En el contexto de la evaluación de resultados, un ________ es la manifestación externa (el síntoma) de que un defecto ha sido ejecutado durante la operación del sistema."

explicacion: |
  El error es la acción humana, el defecto es la imperfección en el código/diseño, y la falla es la desviación del comportamiento esperado durante la ejecución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

opciones_explicitas: ["Identificar el problema", "Implementar solución", "Evaluar resultado", "Comparar con requerimientos"]

respuesta_orden: ["Identificar el problema", "Implementar solución", "Evaluar resultado", "Comparar con requerimientos"]
tipo: "ordenar"

enunciado: "Ordene las etapas lógicas para asegurar que la solución implementada realmente resolvió el problema planteado:"

explicacion: |
  Primero se debe conocer el problema, luego actuar, después observar el resultado obtenido y finalmente contrastarlo con los requerimientos iniciales para validar el éxito.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["gestion", "calidad"]

respuesta: "Los criterios de aceptación son la medida objetiva para determinar si se ha cumplido el requisito."
tipo: "mc"
opciones_explicitas: ["Los criterios de aceptación son la medida objetiva para determinar si se ha cumplido el requisito.", "Los criterios de aceptación son solo deseos del cliente.", "Los requisitos son condiciones obligatorias para la validación.", "Ambos términos son sinónimos."]

enunciado: "En la fase de evaluación, ¿cuál es la distinción fundamental entre un requisito y un criterio de aceptación?"

explicacion: |
  Los requisitos definen el 'qué', mientras que los criterios de aceptación definen el 'cómo sabemos que se ha logrado' de manera medible.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["verificacion", "promedio"]

variables:
  datos: [[ [10, 20, 30], 20 ], [ [5, 15, 25], 15 ], [ [100, 200, 300], 200 ]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Se implementó una función para calcular el promedio de una lista. Si la lista es {datos[idx][0]}, el resultado esperado es ___."

pasos:
  - "Sumar todos los elementos de la lista."
  - "Dividir la suma por la cantidad de elementos."

explicacion: |
  Para verificar si el algoritmo es correcto, comparamos el resultado obtenido con el valor teórico. En este caso, el promedio de {datos[idx][0]} es {datos[idx][1]}.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "basico"
  tags: ["logica", "paridad"]

variables:
  datos: [[12, verdadero], [7, falso], [4, verdadero]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Al evaluar la función `es_par(n)`, se ingresa el número {datos[idx][0]}. El resultado correcto de la implementación debe ser ___."

explicacion: |
  La función es correcta si devuelve el valor booleano que corresponde a la paridad del número evaluado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["ordenamiento", "verificacion"]

variables:
  caso: uno_de([[[5, 1, 9], "[1, 5, 9]"], [[10, 2, 8], "[2, 8, 10]"], [[3, 7, 4], "[3, 4, 7]"]])

respuesta: caso[1]
tipo: mc

enunciado: "Si el algoritmo de ordenamiento recibe la lista {caso[0]}, ¿cuál debería ser la salida correcta para validar que el proceso fue exitoso?"

opciones_explicitas:
  - "[1, 5, 9]"
  - "[2, 8, 10]"
  - "[3, 4, 7]"
  - "[9, 5, 1]"

explicacion: |
  Un algoritmo de ordenamiento ascendente debe transformar la lista desordenada en una secuencia estrictamente creciente.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "intermedio"
  tags: ["recursion", "factorial"]

variables:
  datos: [[5, 120], [4, 24], [6, 720]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Para validar la función `factorial(n)`, se prueba con n = {datos[idx][0]}. El valor de salida esperado es ___."

explicacion: |
  La validación de funciones recursivas requiere comparar el valor retornado con el valor matemático esperado para un caso de prueba dado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "evaluar_el_resultado"
  nivel: "avanzado"
  tags: ["filtros", "primos"]

variables:
  datos: [[ [2, 3, 4, 5, 6], "[2, 3, 5]" ], [ [1, 7, 8, 9, 11], "[7, 11]" ]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

enunciado: "Se aplica una función `filtrar_primos` a la lista {datos[idx][0]}. ¿Cuál es el resultado esperado para confirmar que la implementación es correcta?"

opciones_explicitas:
  - "[2, 3, 5]"
  - "[2, 3, 4, 5, 6]"
  - "[7, 11]"
  - "[3, 5, 7, 11]"

explicacion: |
  La evaluación consiste en verificar que el conjunto resultante contenga únicamente los elementos de la lista original que cumplen la propiedad de ser primos.
```

## Sección: planificacion-tareas-e-hitos (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos", "vocabulario"]

respuesta: "hitos"
tipo: completar
respuestas_validas:
  - "hitos"

enunciado: "Mientras que las tareas son actividades que consumen tiempo y recursos, los ___ son puntos de control específicos que marcan la finalización de una fase importante."

explicacion: |
  Los hitos (milestones) no tienen duración propia; representan un momento en el tiempo que valida el progreso de un proyecto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un hito en la gestión de proyectos se define como una actividad que requiere una duración de al menos 24 horas para completarse."

explicacion: |
  Falso. Los hitos son eventos de duración cero; son puntos de referencia, no tareas con duración.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["secuencia"]

respuesta_orden: ["Definir objetivos", "Listar tareas", "Asignar recursos", "Establecer hitos"]
tipo: ordenar
opciones_explicitas: ["Definir objetivos", "Listar tareas", "Asignar recursos", "Establecer hitos"]

enunciado: "Ordena cronológicamente los pasos lógicos para iniciar la planificación de un proyecto:"

explicacion: |
  Primero se debe saber qué se quiere lograr (objetivos), luego qué hay que hacer (tareas), con qué se hará (recursos) y finalmente qué puntos de control marcarán el éxito (hitos).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
respuesta: "C) Una unidad de trabajo con inicio y fin definidos"
opciones_explicitas: ["A) Un punto de control sin duración", "B) El resultado final de un proyecto", "C) Una unidad de trabajo con inicio y fin definidos"]

enunciado: "¿Cuál de las siguientes opciones describe mejor una 'tarea' en un cronograma?"

explicacion: |
  Una tarea es una acción concreta que requiere un esfuerzo y un tiempo determinado para ser ejecutada.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["logica"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La tarea 'Diseño de plano' termina, marcando el hito 'Aprobación de diseño'.", "Aprobación de diseño"], ["La tarea 'Instalación eléctrica' termina, marcando el hito 'Red eléctrica lista'.", "Red eléctrica lista"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Aprobación de diseño", "Red eléctrica lista", "Ninguna de las anteriores"]

enunciado: "En el escenario seleccionado, ¿cuál es el hito resultante de la finalización de la tarea mencionada?"

explicacion: |
  Los hitos suelen ser el resultado natural de haber completado un conjunto de tareas críticas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion_proyectos", "hitos"]

enunciado: "En el proyecto de Diseño de App, un hito es un evento que marca un punto de control significativo, no una tarea continua. ¿Cuál de los siguientes elementos del escenario es un hito?"

opciones_explicitas: ["Diseño de App", "Desarrollo de MVP", "Lanzamiento"]

respuesta: "Lanzamiento"
tipo: mc

explicacion: |
  Un hito es un punto de referencia en el tiempo que indica la finalización de una fase importante o la consecución de un objetivo clave. En este caso, el 'Lanzamiento' marca el fin del ciclo de desarrollo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "En la gestión de proyectos, una 'tarea' y un 'hito' son términos sinónimos que representan la misma unidad de trabajo."

explicacion: |
  Falso. Una tarea es una acción que consume tiempo y recursos para ser completada, mientras que un hito es un punto en el tiempo que marca un evento importante y tiene duración cero.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["ordenamiento", "secuencia"]

variables:
  escenario_idx: uno_de([0, 1])
  secuencias: [["Cimientos", "Estructura", "Techo", "Entrega"], ["Investigación", "Diseño", "Producción", "Distribución"]]

opciones_explicitas: secuencias[escenario_idx]

respuesta_orden: secuencias[escenario_idx]
tipo: ordenar

enunciado: "Ordene las fases del proyecto según su secuencia lógica y cronológica:"

explicacion: |
  La planificación requiere un orden lógico y cronológico. Los hitos deben seguir la secuencia natural de la ejecución del proyecto para asegurar que cada fase se complete antes de iniciar la siguiente.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  palabras: [["final", "final"], ["cierre", "cierre"]]

enunciado: "En un cronograma, si una tarea es 'Escribir código', el hito correspondiente al finalizar esa actividad sería el ___ de la fase de desarrollo."

respuestas_validas:
  - "final"
  - "cierre"

respuesta: palabras[ejemplo_idx][0]
tipo: completar

explicacion: |
  Los hitos suelen marcar el 'final' o el 'cierre' de un conjunto de tareas que conforman una etapa del proyecto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["calculo", "cronograma"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [[10, 5, 3], [15, 10, 4]]
  duracion_a: casos[caso_idx][0]
  duracion_b: casos[caso_idx][1]
  duracion_c: casos[caso_idx][2]
  respuesta_correcta: duracion_a + duracion_b + duracion_c

enunciado: "Un proyecto tiene tres tareas consecutivas. La Tarea A dura {duracion_a} días, la Tarea B dura {duracion_b} días y la Tarea C dura {duracion_c} días. Si el primer hito se marca al terminar la Tarea A y el segundo al terminar la Tarea C, ¿en qué día total del proyecto se alcanza el segundo hito?"

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0

explicacion: |
  Para encontrar el momento de un hito que marca el fin de una secuencia de tareas, se debe sumar la duración de todas las tareas que lo preceden. En este caso: Tarea A + Tarea B + Tarea C.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_basicos", "planificacion"]

respuesta: "hito"
tipo: completar
respuestas_validas:
  - "hito"

enunciado: "En la gestión de proyectos, una actividad que requiere esfuerzo y tiempo para ser completada se denomina tarea, mientras que un punto de control que marca un evento significativo o la finalización de una fase se denomina ___."

explicacion: |
  Las tareas son acciones con duración (ej. "Escribir el código"), mientras que los hitos son puntos en el tiempo sin duración propia que marcan progreso (ej. "Diseño aprobado").
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un hito debe tener una duración asignada en el cronograma para poder ser medido?"

explicacion: |
  Falso. Por definición, un hito es un evento instantáneo (duración cero) que sirve para marcar el fin de una etapa o un logro importante.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["gestion_de_errores", "cronograma"]

variables:
  escenario: uno_de([["El hito 'Entrega de prototipo' tiene una duración de 5 días.", "Escenario A: El hito 'Entrega de prototipo' tiene una duración de 5 días."], ["El hito 'Aprobación de presupuesto' es una tarea de 2 horas.", "Escenario B: El hito 'Aprobación de presupuesto' es una tarea de 2 horas."]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Escenario A: El hito 'Entrega de prototipo' tiene una duración de 5 días.", "Escenario B: El hito 'Aprobación de presupuesto' es una tarea de 2 horas."]

enunciado: "Analiza el escenario seleccionado: {escenario[0]}. ¿Cuál es el error de planificación cometido?"

explicacion: |
  Los hitos representan momentos en el tiempo, no procesos. Si tienen duración, se están tratando erróneamente como tareas en lugar de puntos de control.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["secuencia", "logica"]

respuesta_orden: ["Definir requerimientos", "Diseño de arquitectura", "Desarrollo de módulos", "Pruebas de integración", "Lanzamiento del producto"]
tipo: ordenar
opciones_explicitas: ["Definir requerimientos", "Diseño de arquitectura", "Desarrollo de módulos", "Pruebas de integración", "Lanzamiento del producto"]

enunciado: "Ordena las siguientes fases de un proyecto de software de forma lógica, desde la concepción hasta la entrega final:"

explicacion: |
  La planificación requiere una secuencia lógica donde los hitos (como el lanzamiento) ocurren solo después de haber completado las tareas de desarrollo y pruebas.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["relaciones", "dependencias"]

tipo: mc
opciones_explicitas: ["La tarea es un subconjunto de un hito.", "El hito es el resultado de la finalización de una o más tareas.", "Un hito siempre contiene múltiples tareas dentro de sí mismo.", "Las tareas y los hitos son conceptos intercambiables."]

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre tareas e hitos?"

respuesta: "El hito es el resultado de la finalización de una o más tareas."

explicacion: |
  Un hito actúa como un marcador de posición que se alcanza cuando las tareas que lo preceden han sido completadas con éxito.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion_proyectos", "conceptos_base"]

respuesta: "hitos"
tipo: "mc"
opciones_explicitas: ["tareas", "hitos", "recursos", "riesgos"]

enunciado: "Mientras que las tareas son acciones que consumen tiempo y esfuerzo para avanzar en un proyecto, los ___ son puntos de control que marcan la finalización de un entregable o una fase importante."

explicacion: |
  Las tareas tienen una duración (comienzo y fin), mientras que los hitos representan un momento específico en el tiempo (duración cero) que indica un logro significativo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["planificacion", "tiempo"]

respuesta: falso
tipo: "vf"

enunciado: "En un cronograma de proyecto, un hito se define técnicamente como una actividad con una duración establecida de al menos 24 horas."

explicacion: |
  Falso. Por definición, un hito es un evento sin duración (duración = 0) que sirve para marcar un progreso, no es una tarea de trabajo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "secuencia"]

variables:
  escenarios: [["Definir requisitos", "Diseño de arquitectura", "Desarrollo de código", "Hito: Prototipo aprobado"], ["Compra de materiales", "Preparación de terreno", "Construcción de cimientos", "Hito: Estructura completada"]]
  escenario: uno_de(escenarios)

tipo: ordenar
opciones_explicitas: [escenario[0], escenario[1], escenario[2], escenario[3]]
respuesta_orden: [escenario[0], escenario[1], escenario[2], escenario[3]]

enunciado: "Ordena cronológicamente la secuencia de planificación para el escenario seleccionado: {escenario[0]} -> {escenario[1]} -> {escenario[2]} -> {escenario[3]}"

pasos:
  - "Identifica la secuencia lógica de tareas que conduce al hito."

explicacion: |
  Un proyecto se organiza mediante una secuencia lógica de tareas que culminan en un hito, el cual valida que la fase anterior ha concluido con éxito.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["analisis", "gestion"]

respuesta: "Hito: Sistema operativo listo"
tipo: "completar"
respuestas_validas:
  - "Hito: Sistema operativo listo"

enunciado: "Analiza el primer caso: La acción es 'Instalar software'. El evento de control resultante es: ___"

explicacion: |
  El hito es la culminación o el resultado del conjunto de tareas; en este caso, la disponibilidad del sistema operativo.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["metodologia", "control"]

respuesta: "un hito no tiene duración"
tipo: "completar"
respuestas_validas:
  - "un hito no tiene duración"
  - "una tarea tiene duración"

enunciado: "La diferencia fundamental en la gestión de tiempos es que una tarea implica un proceso de ejecución, mientras que ___."

explicacion: |
  La distinción clave es la dimensión temporal: las tareas ocupan un intervalo de tiempo, los hitos son puntos de referencia instantáneos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion", "hitos", "proyecto"]

variables:
  escenario: uno_de([["Diseño de App", "Lanzamiento Beta"], ["Construcción de Casa", "Entrega de Llaves"], ["Campaña de Marketing", "Reporte de Resultados"]])

enunciado: "En un proyecto de {escenario[0]}, el punto de control que marca el fin de una fase crítica y permite validar el progreso es el/la ___."

respuesta: escenario[1]
tipo: completar

explicacion: |
  Un hito es un evento significativo en el cronograma que no tiene duración, sino que marca el fin de una etapa o un punto de control importante.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos", "diferencias"]

enunciado: "¿Es correcto afirmar que una 'Tarea' tiene una duración temporal (inicio y fin) mientras que un 'Hito' es un evento puntual sin duración?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. Las tareas consumen tiempo y recursos, mientras que los hitos son puntos de referencia en el tiempo para medir el avance.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

variables:
  proyectos: [["software", ["Definición de requisitos", "Diseño de arquitectura", "Desarrollo de código", "Pruebas de usuario"]], ["construcción", ["Compra de materiales", "Cimentación", "Levantado de paredes", "Techado"]]]
  idx: uno_de([0, 1])

enunciado: "Ordene las fases de un proyecto de {proyectos[idx][0]} según el orden lógico de ejecución:"

opciones_explicitas: proyectos[idx][1]
respuesta_orden: proyectos[idx][1]
tipo: ordenar

explicacion: |
  La planificación requiere seguir un orden lógico donde cada etapa es el insumo de la siguiente para evitar retrabajos.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["identificacion", "mc"]

variables:
  escenario: uno_de([["Finalización de cimientos", "Aprobación de presupuesto", "Firma de contrato"], ["Entrega de prototipo funcional", "Aprobación de diseño", "Cierre de fase de investigación"]])

enunciado: "En el contexto de {escenario[0]}, ¿cuál de los siguientes elementos se clasifica correctamente como un HITO?"

opciones_explicitas: ["Realizar la tarea", "Hito alcanzado", "Tarea pendiente"]
respuesta: "Hito alcanzado"
tipo: mc

explicacion: |
  Un hito es un estado alcanzado (ej. 'Aprobado', 'Finalizado'), no una acción continua como 'Realizar'.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["gestion_riesgos", "impacto"]

variables:
  idx: uno_de([0, 1, 2, 3])
  textos: ["El hito de 'Aprobación de diseño' se retrasa 2 semanas", "El hito de 'Pruebas de calidad' se retrasa 1 semana", "El hito de 'Compra de insumos' se retrasa 3 días", "El hito de 'Instalación de software' se retrasa 2 días"]

enunciado: "Si en el escenario '{textos[idx]}' el hito se retrasa, ¿qué sucede con las tareas dependientes que siguen en el cronograma?"

opciones_explicitas: ["Se mantienen igual", "Se retrasan proporcionalmente", "Se cancelan automáticamente"]
respuesta: "Se retrasan proporcionalmente"
tipo: mc

explicacion: |
  En la gestión de proyectos, los hitos suelen actuar como puntos de dependencia; si un hito se desplaza, las tareas sucesoras que dependen de él también sufren un retraso.
```

## Sección: mejorar-o-iterar (25 preguntas)

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["definicion", "iteracion"]

respuesta: "iterar"
tipo: completar
respuestas_validas:
  - "iterar"
  - "iteración"

enunciado: "Cuando una solución inicial no es óptima y decidimos realizar un nuevo ciclo de evaluación y ajuste para acercarnos al objetivo, estamos realizando un proceso de ___."

explicacion: |
  La iteración es el acto de repetir un proceso de evaluación y ajuste para refinar una solución hasta que cumpla con los criterios de éxito.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["evaluacion", "feedback"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de mejora continua, si una solución cumple con el objetivo mínimo pero presenta errores secundarios, se debe considerar que el problema ha sido resuelto definitivamente y no se requiere más análisis."

explicacion: |
  Falso. El concepto de iterar implica que, aunque se alcance un umbral, la evaluación de la calidad puede disparar un nuevo ciclo de mejora para optimizar el resultado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo", "feedback"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Analizar el error", "Ajustar la solución"], ["Implementar cambio", "Verificar resultado"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Analizar el error", "Ajustar la solución", "Implementar cambio", "Verificar resultado"]

enunciado: "Supongamos que estamos en la fase de {escenario[idx][0]}. El siguiente paso lógico dentro de un ciclo de iteración es ___."

explicacion: |
  El ciclo de mejora sigue una lógica de: Evaluar -> Analizar -> Ajustar -> Implementar -> Verificar. Después de analizar el error, el siguiente paso es el ajuste.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["feedback", "informacion"]

respuesta: "información de retroalimentación"
tipo: completar
respuestas_validas:
  - "información de retroalimentación"
  - "feedback"
  - "retroalimentación"

enunciado: "Para poder iterar con éxito, es indispensable contar con ___ que nos indique la brecha entre el estado actual de la solución y el estado deseado."

explicacion: |
  Sin feedback o retroalimentación (datos sobre el desempeño de la solución), es imposible saber qué aspectos deben ser ajustados en la siguiente iteración.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta_orden: ["Evaluar", "Identificar brechas", "Proponer ajustes", "Implementar cambios"]
tipo: ordenar
opciones_explicitas: ["Evaluar", "Identificar brechas", "Proponer ajustes", "Implementar cambios"]

enunciado: "Ordena los pasos lógicos para realizar una iteración de mejora sobre una solución existente:"

pasos:
  - "Observar el resultado obtenido"
  - "Detectar qué falta para llegar al ideal"
  - "Decidir qué cambios hacer"
  - "Aplicar las modificaciones"

explicacion: |
  El proceso iterativo requiere primero la evaluación, luego el diagnóstico de la brecha, la planificación del ajuste y finalmente la ejecución del cambio.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["metodologia", "iteracion"]

tipo: vf
respuesta: verdadero

enunciado: "Cuando una solución inicial no cumple con todos los criterios de éxito tras una evaluación, el proceso correcto es iterar la solución en lugar de descartarla por completo."

explicacion: |
  La iteración es el proceso de repetir un ciclo de mejora. Si la solución no es óptima, evaluamos los fallos y volvemos a empezar el proceso de ajuste, no significa que el trabajo esté perdido, sino que estamos en una fase de refinamiento.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["evaluacion", "ajuste"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El prototipo de una silla es estable pero muy incómoda.", "ajustar el acolchado"], ["La aplicación de gestión es rápida pero confusa para el usuario.", "simplificar la interfaz"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["cambiar de proyecto", "abandonar el diseño", "ajustar el acolchado", "simplificar la interfaz"]

enunciado: "Se evalúa un proyecto y se detecta el siguiente problema: {escenarios[escenario_idx][0]}. ¿Cuál es la acción de mejora más adecuada?"

pasos:
  - "Identificar la brecha entre el resultado actual y el objetivo."
  - "Seleccionar el componente específico que requiere ajuste."
  - "Aplicar la modificación y volver a evaluar."

explicacion: |
  La evaluación nos indica exactamente qué parte de la solución falló. En lugar de cambiar de proyecto, aplicamos un ajuste específico basado en el feedback recibido.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta_orden: ["Diseñar", "Implementar", "Evaluar", "Ajustar"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar", "Implementar", "Evaluar", "Ajustar"]

enunciado: "Ordena los pasos lógicos de un ciclo de mejora iterativa, comenzando desde la concepción de la idea hasta el refinamiento final."

explicacion: |
  Un ciclo iterativo no es lineal, sino circular. El paso de 'Ajustar' (basado en la evaluación) es lo que permite volver a 'Diseñar' una versión mejorada de la solución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["mentalidad", "evaluacion"]

respuesta: falso
tipo: "vf"

enunciado: "Si una solución resuelve el problema principal pero presenta detalles secundarios que podrían optimizarse, la solución debe considerarse como 'terminada' y no debe ser objeto de más iteraciones."

explicacion: |
  Asumir que una solución está terminada solo porque cumple lo mínimo impide la optimización. La mejora continua sugiere que siempre es posible iterar para elevar la calidad o eficiencia.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["analisis", "datos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Eficiencia actual: 60%, Objetivo: 90%", "30%"], ["Tiempo de respuesta: 10s, Objetivo: 2s", "8s"]]

respuesta: casos[caso_idx][1]

tipo: "completar"

enunciado: "Para iterar con éxito, primero debemos cuantificar la brecha. En el caso planteado, la diferencia entre el estado actual y el objetivo es de ___."

pasos:
  - "Identificar el valor actual."
  - "Identificar el valor objetivo."
  - "Calcular la diferencia (Brecha)."

explicacion: |
  La iteración requiere metas claras. Si no sabemos cuánto nos falta para alcanzar el objetivo (la brecha), no podemos diseñar una acción de mejora que sea proporcional al problema.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["metodologia", "evaluacion"]

respuesta: falso
tipo: vf

enunciado: "Si una solución cumple con los requisitos iniciales del problema, ¿es correcto asumir que el proceso de resolución ha finalizado sin necesidad de evaluar su eficiencia o aplicabilidad en contextos reales?"

explicacion: |
  Una solución puede ser funcional pero ineficiente o incompleta. La iteración permite optimizar la solución mediante la evaluación continua, asegurando que no solo sea correcta, sino también la mejor opción posible.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo_iterativo", "optimizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Diseño de un motor de búsqueda", "Se ha implementado, pero la velocidad de respuesta es lenta"], ["Construcción de un puente", "Se ha construido, pero el material es más costoso de lo previsto"]]

enunciado: "En el escenario de '{escenarios[escenario_idx][0]}', el problema detectado es: '{escenarios[escenario_idx][1]}'. ¿Cuál es la acción correcta según el proceso de mejora?"

opciones_explicitas: ["Aceptar la solución como definitiva", "Reiniciar el problema desde cero", "Iterar para ajustar la solución actual"]

respuesta: "Iterar para ajustar la solución actual"
tipo: mc

explicacion: |
  Detectar una deficiencia (como lentitud o costo) tras haber implementado una solución no implica necesariamente volver al inicio, sino iterar sobre la solución existente para optimizarla.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["pasos", "evaluacion"]

respuesta_orden: ["Evaluar", "Identificar", "Ajustar", "Implementar"]
tipo: ordenar

opciones_explicitas: ["Implementar", "Evaluar", "Ajustar", "Identificar"]

enunciado: "Para mejorar una solución que no ha alcanzado el rendimiento esperado, se debe seguir este orden lógico de pasos:"

explicacion: |
  Al tratarse de una solución ya implementada que no alcanzó el rendimiento esperado, el ciclo comienza evaluando su desempeño, luego identifica la brecha entre el resultado y el objetivo, después ajusta la solución y finalmente implementa ese cambio.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: "optimización"
tipo: completar

enunciado: "Cuando una solución ya resuelve el problema pero se busca mejorar su rendimiento, velocidad o costo, estamos pasando de la fase de resolución a la fase de ___________."

respuestas_validas:
  - "optimización"

explicacion: |
  La resolución busca la viabilidad (que funcione), mientras que la optimización (parte del proceso iterativo) busca la excelencia o eficiencia de dicha solución.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["evaluacion", "iteracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["La solución no cumple con el objetivo principal", "Falla de diseño"], ["La solución cumple el objetivo pero es muy costosa", "Falla de eficiencia"]]

enunciado: "Analizamos el siguiente caso: '{casos[caso_idx][0]}'. ¿Cómo se clasifica esta situación?"

opciones_explicitas: ["Falla de diseño", "Falla de eficiencia"]

respuesta: casos[caso_idx][1]
tipo: mc

explicacion: |
  Es crucial distinguir si el problema es que la solución no funciona (diseño/lógica) o si simplemente no es la mejor versión posible (eficiencia). Ambos requieren iteración, pero el enfoque del ajuste es distinto.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["iteracion", "mejora_continua"]

respuesta: "mejorar"
tipo: completar
respuestas_validas:
  - "mejorar"
  - "optimizar"

enunciado: "Cuando el proceso de resolución de un problema requiere ajustar la solución tras evaluar su desempeño, estamos en una fase de ________, en lugar de considerar la tarea como una solución final."

explicacion: |
  La iteración implica volver a pasar por ciclos de diseño y evaluación para perfeccionar el resultado. No es un error, es parte del proceso de mejora.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["evaluacion", "iteracion"]

opciones_explicitas: ["Confirmar que la solución es perfecta", "Identificar brechas para realizar ajustes", "Finalizar el proyecto inmediatamente", "Cambiar el problema original"]
respuesta: "Identificar brechas para realizar ajustes"
tipo: mc

enunciado: "En un proceso iterativo, ¿cuál es la función principal de la fase de evaluación en contraste con una resolución lineal?"

explicacion: |
  En un modelo lineal, la evaluación busca validar el éxito. En un modelo iterativo, la evaluación busca detectar áreas de mejora para volver a iterar.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["ciclo", "iteracion"]

variables:
  etapas: [["Planificar", "Ejecutar", "Evaluar", "Ajustar"], ["Analizar", "Diseñar", "Probar", "Refinar"], ["Definir", "Idear", "Implementar", "Corregir"]]
  idx: uno_de([0, 1, 2])

opciones_explicitas: etapas[idx]
respuesta_orden: etapas[idx]
tipo: ordenar

enunciado: "Ordena correctamente las etapas de un ciclo de iteración para la mejora de una solución:"

explicacion: |
  El ciclo iterativo sigue una secuencia lógica de acción, verificación y ajuste para asegurar que la solución evolucione hacia la excelencia.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["conceptos", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Si una solución ya funciona, realizar una iteración adicional se considera un desperdicio de recursos (redundancia) y no parte de un proceso de optimización."

explicacion: |
  Falso. La iteración busca la optimización. Una solución que "funciona" puede ser mejorada para ser más eficiente, económica o robusta.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["correccion", "optimizacion"]

respuesta: "mejorar"
tipo: completar
respuestas_validas:
  - "mejorar"
  - "optimizar"

enunciado: "Si el objetivo es eliminar un fallo que impide el funcionamiento, estamos en una fase de reparación; si el objetivo es elevar la calidad de una solución que ya funciona, estamos en una fase de ________."

explicacion: |
  La corrección es reactiva (arreglar lo que está mal), mientras que la iteración para mejora es proactiva (elevar lo que ya está bien).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["iteracion", "evaluacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El algoritmo tarda 10s", "optimizar_tiempo"], ["El algoritmo usa 2GB de RAM", "optimizar_memoria"]]
  solucion: datos[escenario_idx][1]

respuesta: solucion
tipo: mc
opciones_explicitas: ["optimizar_memoria", "optimizar_tiempo", "finalizar_proyecto", "cambiar_lenguaje"]

enunciado: "Tras evaluar el desempeño, observamos que {datos[escenario_idx][0]}. ¿Cuál es la acción de iteración más adecuada?"

explicacion: |
  Cuando una solución cumple el objetivo pero presenta un cuello de botella específico, la iteración debe enfocarse en corregir ese punto particular en lugar de descartar todo el proceso.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["evaluacion", "criterios"]

respuesta: falso
tipo: vf

enunciado: "Si una solución resuelve el problema pero no cumple con los criterios de eficiencia o usabilidad definidos en la fase de evaluación, ¿se debe considerar la solución como terminada?"

explicacion: |
  No. Una solución que no cumple con todos los criterios de calidad debe entrar en un ciclo de iteración para ajustar los aspectos deficientes.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Evaluar resultados", "Implementar solución", "Definir problema", "Ajustar solución"]

respuesta_orden: ["Definir problema", "Implementar solución", "Evaluar resultados", "Ajustar solución"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para mejorar una solución que ha sido evaluada y requiere ajustes."

explicacion: |
  El proceso cíclico implica: 1. Definir, 2. Implementar, 3. Evaluar y, si hay brechas, 4. Ajustar (iterar).
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "avanzado"
  tags: ["analisis", "brecha"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Requerimiento: 5s | Real: 8s", "reducir_latencia"], ["Requerimiento: 100% uso | Real: 85% uso", "aumentar_rendimiento"]]
  objetivo: casos[caso_idx][1]

respuesta: objetivo
tipo: completar

enunciado: "Al comparar el desempeño real con el esperado en el caso '{casos[caso_idx][0]}', la acción de iteración necesaria es: ___"

explicacion: |
  La iteración se basa en la brecha (gap) detectada entre el estado actual y el estado deseado.
```

```
metadata:
  materia: "resolucion-problemas"
  tema: "mejorar_o_iterar"
  nivel: "basico"
  tags: ["feedback", "iteracion"]

respuesta: verdadero
tipo: vf

enunciado: "Si tras una iteración el error de la solución disminuye de 0.5 a 0.1, ¿se ha cumplido el objetivo de la fase de mejora?"

explicacion: |
  Una reducción en la magnitud del error indica que la iteración fue efectiva y se acerca al estándar de calidad deseado.
```

