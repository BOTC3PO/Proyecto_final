### 1 — La unidad de consumo
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["unidades", "kwh"]

respuesta: "kWh"
tipo: completar
respuestas_validas: ["kWh", "kilovatio-hora", "kilowatt-hora"]

enunciado: "La unidad de medida estándar utilizada en las facturas de electricidad para cuantificar la energía consumida es el ___."

explicacion: |
  El consumo de energía eléctrica se mide en kilovatios-hora (kWh), que representa la potencia (kW) multiplicada por el tiempo (h) de uso.
```

### 2 — Cálculo de consumo de un artefacto
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["calculo", "potencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1000, 5, 12, 60], [2000, 2, 8, 30]]
  # [potencia_W, horas_uso_dia, dias_mes, costo_kwh]

respuesta: datos[escenario_idx][0] * (datos[escenario_idx][1] / 1000) * datos[escenario_idx][2]
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula el consumo total en kWh de un artefacto que tiene una potencia de {datos[escenario_idx][0]} W, se usa durante {datos[escenario_idx][1]} horas al día, durante {datos[escenario_idx][2]} días en el mes."

pasos:
  - "1. Convertir la potencia de Watts a Kilowatts: {datos[escenario_idx][0]} / 1000"
  - "2. Multiplicar kW por horas diarias: {datos[escenario_idx][0] / 1000} * {datos[escenario_idx][1]}"
  - "3. Multiplicar el resultado por los días del mes: {datos[escenario_idx][0] / 1000 * datos[escenario_idx][1]} * {datos[escenario_idx][2]}"

explicacion: |
  El cálculo es: (Potencia en kW) × (Horas/día) × (Días) = {datos[escenario_idx][0] / 1000 * datos[escenario_idx][1] * datos[escenario_idx][2]} kWh.
```

### 3 — Interpretación de la factura
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["lectura", "factura"]

respuesta: "Lectura anterior"
tipo: mc
opciones_explicitas: ["Lectura anterior", "Lectura actual", "Consumo total", "Costo fijo"]

enunciado: "Para calcular el consumo del mes en una factura, se debe restar la ___ a la lectura actual."

explicacion: |
  La diferencia entre la lectura actual (el número que marca el medidor hoy) y la lectura anterior (el número que marcó el mes pasado) nos da el consumo real del periodo.
```

### 4 — Verdad o Falso: Consumo vs Potencia
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["conceptos", "potencia"]

respuesta: falso

tipo: vf

enunciado: "Si dejo una bombilla de 100W encendida durante 10 horas, el consumo será de 1000 kWh."

explicacion: |
  Falso. El consumo es de 1 kWh. El valor 1000 corresponde a 1000 Wh (vatios-hora). Para pasar a kWh se divide por 1000.
```

### 5 — Pasos para el cálculo del costo
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["procedimiento", "costo"]

respuesta: ["Obtener consumo en kWh", "Identificar precio por kWh", "Multiplicar consumo por precio", "Sumar cargos fijos o impuestos"]
tipo: ordenar

opciones_explicitas: ["Obtener consumo en kWh", "Identificar precio por kWh", "Multiplicar consumo por precio", "Sumar cargos fijos o impuestos", "Dividir consumo por el precio"]

enunciado: "Ordena los pasos lógicos para calcular el monto total a pagar en una factura de luz basándote en el consumo."

explicacion: |
  Primero necesitas saber cuánto consumiste (kWh), luego cuánto cuesta cada unidad, multiplicas ambos y finalmente sumas los cargos fijos o impuestos que la empresa aplique.
```