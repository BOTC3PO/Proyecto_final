# Resolucion Problemas — Costo beneficio (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Costo-Beneficio

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

### 2 — Identificación de Costos

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

### 3 — Veracidad del Análisis

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

### 4 — El Proceso de Decisión

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

### 5 — Resultado del Análisis

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

### 6 — Análisis de inversión inicial

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

### 7 — Evaluación de rentabilidad

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

tipo: completar
enunciado: "Considerando que el beneficio se define como la relación entre la ganancia y el costo (Ratio = Ganancia / Costo), ¿es la inversión en el escenario seleccionado rentable (Ratio > 1)?"

explicacion: |
  En el escenario seleccionado, si la ganancia es mayor al costo, el ratio será mayor a 1, lo que indica que la decisión es financieramente beneficiosa.
```

### 8 — Comparación de alternativas

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

respuesta: "Opción A"

tipo: mc
opciones_explicitas: ["Opción A", "Opción B", "Ambas son iguales"]

enunciado: "Se deben elegir dos proyectos. El Proyecto A cuesta ${opcion_a_costo} y genera ${opcion_a_ganancia}. El Proyecto B cuesta ${opcion_b_costo} y genera ${opcion_b_ganancia}. Si buscamos la opción con el mayor beneficio neto (Ganancia - Costo), ¿cuál es la mejor elección?"

explicacion: |
  Beneficio A: 150 - 100 = 50.
  Beneficio B: 300 - 200 = 100.
  Nota: Aunque el beneficio de B es mayor, la pregunta pide comparar la relación de beneficio neto. Si comparamos la rentabilidad relativa (1.5 vs 1.5), son iguales, pero en términos de valor absoluto, B es superior. Sin embargo, en este ejercicio comparamos la diferencia absoluta.
```

### 9 — Proceso de toma de decisiones

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

### 10 — Análisis de punto de equilibrio

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["punto_de_equilibrio", "calculo"]

variables:
  costo_fijo: 1000
  margen_unitario: 50

respuesta: "1000 / 50"
tipo: completar
respuestas_validas:
  - "20"
  - "20.0"

enunciado: "Si una empresa tiene un costo fijo de ${costo_fijo} y cada unidad vendida aporta un margen de ${margen_unitario} para cubrir costos, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio (donde el beneficio es cero)?"

pasos:
  - "Identificar el costo total que debe ser cubierto."
  - "Dividir el costo total por el margen de contribución unitario."

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos cubren exactamente los costos. La fórmula es: Costo Fijo / Margen Unitario = 1000 / 50 = 20 unidades.
```

### 11 — El costo de oportunidad olvidado

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

### 12 — Beneficio vs. Flujo de caja

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["beneficio_contable", "flujo_caja"]

enunciado: "Un proyecto genera una ganancia contable de $10.000, pero requiere una inversión inicial de $12.000. Si el análisis de costo-beneficio solo considera el beneficio contable sin considerar el desembolso inicial (inversión), ¿el resultado de la decisión es financieramente positivo?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  Un error común es confundir el ingreso o beneficio bruto con el beneficio neto. Para una decisión correcta, se debe restar el costo total (inversión) del beneficio obtenido.
```

### 13 — El error de los costos hundidos

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

### 14 — Pasos para el análisis de costo-beneficio

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

### 15 — El factor tiempo en el beneficio

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

### 16 — Diferencia entre Costo y Gasto

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

### 17 — Análisis de Costo de Oportunidad

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

### 18 — Rentabilidad vs. Flujo de Caja

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

### 19 — Componentes del Análisis Costo-Beneficio

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

### 20 — Punto de Equilibrio

```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["punto_de_equilibrio", "break_even"]

variables:
  datos: [[100, 50, 10], [200, 100, 15], [50, 20, 5]]
  idx: uno_de([0,1,2])
  costo_fijo: datos[idx][0]
  costo_variable: datos[idx][1]
  precio_venta: datos[idx][2]

respuesta: 10
tipo: completar
tolerancia_abs: 0

enunciado: "Si una empresa tiene un costo fijo de ${costo_fijo}, un costo variable por unidad de ${costo_variable} y un precio de venta de ${precio_venta}, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio (donde el beneficio es cero)?"

pasos:
  - "Calcular el margen de contribución unitario: {precio_venta - costo_variable}"
  - "Dividir el costo fijo entre el margen de contribución: {costo_fijo / (precio_venta - costo_variable)}"

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales. En este caso: 100 / (10 - 5) = 20. (Nota: El ejemplo usa los valores del array indexado).
```

### 21 — Análisis de inversión inicial

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

### 22 — Evaluación de rentabilidad

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

### 23 — Decisión de expansión

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

### 24 — Flujo de caja de un proyecto

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

### 25 — Análisis de punto de equilibrio

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
