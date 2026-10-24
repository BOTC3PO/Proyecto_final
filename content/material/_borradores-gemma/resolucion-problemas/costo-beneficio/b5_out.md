### 1 — Análisis de inversión inicial
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["finanzas", "decision"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["compra_maquina", 5000, 12000], ["reforma_local", 3000, 7500]]
  costo: datos[escenario_idx][1]
  ganancia: datos[escenario_idx][2]

enunciado: "Se está evaluando una decisión de inversión. El costo de la acción es de ${costo} y el beneficio esperado es de ${ganancia}. ¿Cuál es el beneficio neto (ganancia menos costo)?"

respuesta: ganancia - costo
tipo: input
tolerancia_abs: 0.01

explicacion: |
  El beneficio neto se calcula restando el costo total de los ingresos o beneficios obtenidos.
  En este caso: ${ganancia} - ${costo} = ${ganancia - costo}.
```

### 2 — Evaluación de rentabilidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["rentabilidad", "porcentaje"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["A", 100, 150], ["B", 200, 250]]
  costo: datos[escenario_idx][1]
  beneficio: datos[escenario_idx][2]
  ratio: beneficio / costo

enunciado: "Si el costo es ${costo} y el beneficio es ${beneficio}, ¿el ratio beneficio/costo es mayor a 1.2?"

respuesta: ratio > 1.2
tipo: vf

explicacion: |
  El ratio es ${ratio}. Como ${ratio} es ${ratio > 1.2}, la afirmación es correcta/incorrecta.
```

### 3 — Decisión de expansión
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "basico"
  tags: ["decision", "mc"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Opción A", 1000, 1500], ["Opción B", 2000, 1800]]
  costo: datos[escenario_idx][1]
  beneficio: datos[escenario_idx][2]

enunciado: "Se comparan dos proyectos. El proyecto seleccionado tiene un costo de ${costo} y un beneficio de ${beneficio}. ¿Cuál es la mejor opción basándose únicamente en el beneficio neto?"

opciones_explicitas: ["Opción A", "Opción B"]
respuesta: (beneficio - costo == 500) ? "Opción A" : "Opción B"
tipo: mc

explicacion: |
  Para decidir, calculamos el beneficio neto de cada una. 
  Opción A: ${1500 - 1000} = 500.
  Opción B: ${1800 - 2000} = -200.
  La mejor opción es la que tiene mayor beneficio neto.
```

### 4 — Flujo de caja de un proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "intermedio"
  tags: ["flujo", "ordenar"]

enunciado: "Ordene los eventos de un análisis de costo-beneficio desde el inicio del proyecto hasta la obtención del beneficio neto."

opciones_explicitas: ["Inversión inicial", "Gastos operativos", "Ingresos totales", "Cálculo de beneficio neto"]
respuesta: ["Inversión inicial", "Gastos operativos", "Ingresos totales", "Cálculo de beneficio neto"]
tipo: ordenar

explicacion: |
  Primero se realiza la inversión, luego se incurre en gastos para operar, se generan ingresos y finalmente se resta todo para hallar el neto.
```

### 5 — Análisis de punto de equilibrio
```
metadata:
  materia: "resolucion-problemas"
  tema: "costo_beneficio"
  nivel: "avanzado"
  tags: ["punto_de_equilibrio", "completar"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Caso 1", 1000, 50], ["Caso 2", 500, 25]]
  costo_fijo: datos[escenario_idx][1]
  margen_unitario: datos[escenario_idx][2]

enunciado: "Para recuperar la inversión inicial de ${costo_fijo}, si cada unidad aporta un margen de ${margen_unitario}, se deben vender ___ unidades para alcanzar el punto de equilibrio."

respuesta_validas: ["20", "20"]
respuesta: costo_fijo / margen_unitario
tipo: completar

explicacion: |
  El punto de equilibrio se alcanza cuando el margen total cubre el costo fijo.
  Cálculo: ${costo_fijo} / ${margen_unitario} = ${costo_fijo / margen_unitario}.
```