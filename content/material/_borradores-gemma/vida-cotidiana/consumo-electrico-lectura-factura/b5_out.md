### 1 — ¿Qué es un kWh?
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "kilovatio-hora"
tipo: mc
opciones_explicitas: ["kilogramo-hora", "kilovatio-hora", "kilocaloría-hora", "kilovoltio-hora"]

enunciado: "En una factura de luz, la unidad que mide la energía consumida es el ___."

explicacion: |
  El kWh (kilovatio-hora) es la unidad de energía que indica la potencia utilizada multiplicada por el tiempo de uso.
```

### 2 — Cálculo de consumo de un electrodoméstico
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["calculo", "consumo"]

variables:
  escenario: uno_de([[1500, 2, 30], [2000, 3, 24], [1000, 5, 12]])
  potencia: escenario[0]
  horas: escenario[1]
  dias: escenario[2]

respuesta: escenario[0] * escenario[1] * escenario[2] / 1000
tipo: input
tolerancia_abs: 0.1

enunciado: "Un artefacto consume {potencia} W. Si se usa durante {horas} horas al día, durante {dias} días, ¿cuántos kWh consumió en total?"

pasos:
  - "Multiplicar potencia (W) por horas (h) por días (d) para obtener Watt-hora totales."
  - "Dividir el resultado por 1000 para convertir Watts a Kilowatts."

explicacion: |
  El cálculo es: (Potencia en W * horas * días) / 1000.
  En este caso: ({potencia} * {horas} * {dias}) / 1000 = {escenario[0] * escenario[1] * escenario[2] / 1000} kWh.
```

### 3 — Lectura de medidor: ¿Aumentó el consumo?
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["lectura", "medidor"]

variables:
  lectura: uno_de([[1250.5, 1300.2], [4500.0, 4480.5], [890.2, 910.8]])
  anterior: lectura[0]
  actual: lectura[1]

respuesta: actual > anterior
tipo: vf

enunciado: "Si la lectura anterior del medidor era {anterior} kWh y la lectura actual es {actual} kWh, ¿el consumo registrado es positivo?"

explicacion: |
  El consumo se calcula restando la lectura actual menos la lectura anterior. 
  Si {actual} > {anterior}, el consumo es positivo.
```

### 4 — Componentes de la factura
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["factura", "conceptos"]

respuesta: ["Lectura anterior", "Lectura actual", "Consumo del período", "Monto total a pagar"]
tipo: ordenar

opciones_explicitas: ["Lectura actual", "Lectura anterior", "Monto total a pagar", "Consumo del período"]

enunciado: "Ordena los elementos de una factura eléctrica según el orden lógico en que se procesan para llegar al monto final:"

explicacion: |
  Primero se toma la lectura anterior, luego la actual para obtener el consumo, y finalmente se aplica la tarifa para obtener el monto total.
```

### 5 — Costo total del consumo
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["calculo", "costo"]

variables:
  datos: uno_de([[150, 0.15], [200, 0.20], [120, 0.25]])
  consumo: datos[0]
  tarifa: datos[1]

respuesta: consumo * tarifa
tipo: completar

respuestas_validas: [consumo * tarifa]

enunciado: "Si el consumo registrado es de ___ kWh y el precio por cada kWh es de $___, el costo total de la energía es $___."

explicacion: |
  El costo se calcula multiplicando el consumo total en kWh por el precio unitario de la tarifa.
  Cálculo: {consumo} * {tarifa} = {consumo * tarifa}.
```