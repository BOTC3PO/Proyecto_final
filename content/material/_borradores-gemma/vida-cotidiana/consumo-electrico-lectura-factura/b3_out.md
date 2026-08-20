### 1 — ¿Qué se factura en la boleta de luz?
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["consumo", "kwh", "factura"]

respuesta: "energia_consumida"
tipo: mc
opciones_explicitas: ["potencia_instalada", "energia_consumida", "voltaje_de_la_red", "cantidad_de_aparatos"]

enunciado: "Un error común es pensar que la factura de luz se cobra por la potencia de los artefactos que tenemos conectados, pero en realidad se factura la ___."

explicacion: |
  La factura de luz no cobra por la potencia (W) de tus electrodomésticos, sino por la energía consumida (kWh) durante un período determinado.
```

### 2 — El cálculo del consumo mensual
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["calculo", "kwh", "consumo"]

variables:
  datos: [[100, 120], [200, 250], [50, 60]]
  idx: uno_de([0, 1, 2])
  potencia_w: datos[idx][0]
  tiempo_h: datos[idx][1]

respuesta: datos[idx][1] - datos[idx][0]
tipo: input
tolerancia_abs: 0.01

enunciado: "Si un aparato tiene una potencia de {potencia_w} W y se usa durante {tiempo_h} horas en un mes, ¿cuántos kWh consumió?"

pasos:
  - "Convertir la potencia de Watts (W) a Kilowatts (kW) dividiendo por 1000."
  - "Multiplicar los kW por la cantidad de horas de uso."

explicacion: |
  Para calcular el consumo en kWh: (Potencia en W / 1000) * Horas de uso. 
  En este caso: ({potencia_w} / 1000) * {tiempo_h} = {datos[idx][1] - datos[idx][0]} kWh.
```

### 3 — Lectura de medidor: ¿Subida o bajada?
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["lectura", "medidor", "error"]

respuesta: falso

tipo: vf

enunciado: "Si al revisar el medidor de luz hoy veo que la cifra es menor a la que figura en mi factura del mes pasado, significa que he consumido menos energía este mes."

explicacion: |
  Falso. El medidor es acumulativo. La lectura actual siempre debe ser igual o mayor a la lectura del mes anterior. Si es menor, puede haber un error de lectura o un medidor defectuoso.
```

### 4 — Componentes de la factura
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["factura", "componentes"]

respuesta: ["Lectura anterior", "Lectura actual", "Consumo en kWh", "Costo total"]
tipo: ordenar

opciones_explicitas: ["Lectura anterior", "Lectura actual", "Consumo en kWh", "Costo total"]

enunciado: "Para entender el detalle de tu consumo en una factura, ordena los pasos lógicos que sigue el cálculo del monto a pagar:"

explicacion: |
  Primero se resta la lectura anterior de la actual para obtener el consumo (kWh), y sobre ese valor se aplican las tarifas para obtener el costo final.
```

### 5 — El mito del consumo en Standby
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["standby", "consumo_invisible"]

respuesta: "consumo_fantasma"
tipo: completar

respuestas_validas: ["consumo_fantasma", "consumo_invisible"]

enunciado: "El consumo de energía de los aparatos que están apagados pero con una luz encendida o un reloj digital (modo espera) se conoce comúnmente como ___."

explicacion: |
  Este fenómeno se conoce como 'consumo vampiro' o 'consumo fantasma'. Aunque cada aparato consume poco, la suma de todos puede representar un porcentaje relevante de la factura.
```