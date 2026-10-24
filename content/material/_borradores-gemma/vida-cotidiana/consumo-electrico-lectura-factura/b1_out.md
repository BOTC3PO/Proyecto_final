### 1 — ¿Qué es un kWh?
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["conceptos", "unidad_medida"]

respuesta: "kilovatio-hora"
tipo: completar
respuestas_validas: ["kilovatio-hora", "kWh", "kilowatt-hora"]

enunciado: "La unidad de medida que se utiliza en las facturas de electricidad para cuantificar el consumo de energía es el ___."

explicacion: |
  El kilovatio-hora (kWh) es la unidad que indica la cantidad de energía consumida. Un kWh representa el consumo de un aparato que utiliza 1000 vatios durante una hora.
```

### 2 — Cálculo de consumo de un aparato
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["calculo", "potencia"]

variables:
  datos: [[1000, 2, 2], [2000, 3, 6], [500, 10, 5]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: input
tolerancia_abs: 0

enunciado: "Un aparato tiene una potencia de {datos[idx][0]} vatios y se utiliza durante {datos[idx][1]} horas al día. ¿Cuántos kWh consume en total al día?"

pasos:
  - "Convertir los vatios a kilovatios: {datos[idx][0]} / 1000"
  - "Multiplicar los kW por la cantidad de horas: {datos[idx][0]/1000 * datos[idx][1]}"

explicacion: |
  Para calcular el consumo en kWh, dividimos la potencia en vatios por 1000 y multiplicamos por el tiempo de uso en horas.
```

### 3 — Componentes de la factura
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["factura", "lectura"]

respuesta: verdadero
tipo: vf

enunciado: "¿La lectura de consumo se obtiene restando la lectura actual del medidor menos la lectura anterior?"

explicacion: |
  Correcto. La diferencia entre la lectura actual (la que marca el medidor hoy) y la lectura del período anterior es lo que se factura como consumo del mes.
```

### 4 — Conceptos de potencia y energía
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["conceptos", "diferencia"]

respuesta: "potencia"
tipo: mc

opciones_explicitas: ["energía", "potencia", "tensión", "resistencia"]

enunciado: "La capacidad de un aparato para realizar un trabajo en un tiempo determinado se define como ___."

explicacion: |
  La potencia (medida en vatios o kW) es la rapidez con la que se consume energía. La energía (kWh) es el acumulado de esa potencia a lo largo del tiempo.
```

### 5 — Factores que influyen en el costo
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["costo", "factura"]

respuesta: "ordenar"
tipo: ordenar
opciones_explicitas: ["Lectura del medidor", "Precio por kWh", "Impuestos y cargos fijos"]

enunciado: "Ordena los elementos que determinan el monto total de una factura eléctrica, desde el factor de consumo base hasta el costo final."

explicacion: |
  El proceso comienza con la medición del consumo (lectura), se multiplica por el precio unitario de la tarifa y finalmente se le suman los cargos fijos e impuestos.
```