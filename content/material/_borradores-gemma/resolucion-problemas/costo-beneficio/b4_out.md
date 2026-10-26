### 1 — Diferencia entre Costo y Gasto
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["conceptos_base", "finanzas"]

respuesta: "gasto"
tipo: completar
respuestas_validas: ["gasto"]

enunciado: "Mientras que el costo se asocia con la inversión realizada para generar ingresos, el ___ se refiere a una salida de dinero que no está directamente vinculada a la producción de un bien o servicio."

explicacion: |
  El costo es un desembolso necesario para la actividad principal (producción), mientras que el gasto es un consumo necesario para el funcionamiento operativo pero no genera valor directo al producto.
```

### 2 — Análisis de Costo de Oportunidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["decision", "oportunidad"]

variables:
  escenario: uno_de([
    ["Invertir en una máquina nueva", "ganancia_extra"],
    ["Estudiar una maestría", "mayor_salario"],
    ["Lanzar un nuevo producto", "nuevos_clientes"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]"]

enunciado: "Si una empresa decide usar su capital para {escenario[0]}, el costo de oportunidad es la {escenario[1]} que deja de percibir. ¿Qué representa el costo de oportunidad en este contexto?"

explicacion: |
  El costo de oportunidad no es un valor monetario directo, sino el beneficio de la mejor alternativa sacrificada al tomar una decisión.
```

### 3 — Rentabilidad vs. Flujo de Caja
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

### 4 — Componentes del Análisis Costo-Beneficio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

respuesta: ["Identificar costos", "Identificar beneficios", "Comparar resultados"]
tipo: ordenar

opciones_explicitas: ["Identificar costos", "Identificar beneficios", "Comparar resultados"]

enunciado: "Ordena los pasos lógicos para realizar un análisis de costo-beneficio efectivo:"

explicacion: |
  Primero se deben cuantificar las salidas (costos), luego las entradas (beneficios) y finalmente evaluar si la relación beneficio/costo es favorable.
```

### 5 — Punto de Equilibrio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["punto_de_equilibrio", "break_even"]

variables:
  datos: [
    [100, 50, 10],
    [200, 100, 15],
    [50, 20, 5]
  ]
  idx: uno_de([0,1,2])
  costo_fijo: datos[idx][0]
  costo_variable: datos[idx][1]
  precio_venta: datos[idx][2]

respuesta: 10
tipo: input
tolerancia_abs: 0

enunciado: "Si una empresa tiene un costo fijo de ${costo_fijo}, un costo variable por unidad de ${costo_variable} y un precio de venta de ${precio_venta}, ¿cuántas unidades debe vender para alcanzar el punto de equilibrio (donde el beneficio es cero)?"

pasos:
  - "Calcular el margen de contribución unitario: {precio_venta - costo_variable}"
  - "Dividir el costo fijo entre el margen de contribución: {costo_fijo / (precio_venta - costo_variable)}"

explicacion: |
  El punto de equilibrio se alcanza cuando los ingresos totales igualan a los costos totales. En este caso: 100 / (10 - 5) = 20. (Nota: El ejemplo usa los valores del array indexado).
```