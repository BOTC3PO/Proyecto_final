### 1 — Energía vs. Potencia
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["conceptos_basicos", "unidades"]

respuesta: "kWh"
tipo: completar
respuestas_validas: ["kWh", "kilovatio-hora", "kilowatt-hora"]

enunciado: "Mientras que la potencia eléctrica se mide en vatios (W) o kilovatios (kW), la energía consumida en un periodo de tiempo se mide en ___."

explicacion: |
  La potencia es la capacidad de un artefacto para realizar un trabajo en un instante, mientras que la energía es esa potencia multiplicada por el tiempo de uso.
```

### 2 — El concepto de lectura de medidor
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["factura", "lectura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1250, 1300], [4500, 4650]]

respuesta: "consumo"
tipo: mc
opciones_explicitas: ["potencia", "consumo", "tensión", "frecuencia"]

enunciado: "Para calcular el consumo mensual en la factura, se resta la lectura actual del medidor menos la lectura del mes anterior. El resultado de esta resta representa el ___ del periodo."

explicacion: |
  La diferencia entre la lectura actual y la anterior nos indica cuántos kWh circularon por el medidor durante ese mes.
```

### 3 — Relación Potencia-Tiempo
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["calculo", "consumo"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [[2000, 5, 10], [1000, 10, 5]]

respuesta: 10000
tipo: input
tolerancia_abs: 0

enunciado: "Un artefacto tiene una potencia de {escenario[caso_idx][0]} W. Si se mantiene encendido durante {escenario[caso_idx][1]} horas, el consumo total será de ___ Wh."

pasos:
  - "Convertir la potencia de W a kW (dividir por 1000)."
  - "Multiplicar la potencia en kW por el tiempo en horas para obtener kWh."
  - "Convertir el resultado de kWh a Wh multiplicando por 1000."

explicacion: |
  El cálculo es: Potencia (W) × Tiempo (h) = Energía (Wh). En el caso {escenario[caso_idx][0]}W por {escenario[caso_idx][1]}h, el resultado es {escenario[caso_idx][0] * escenario[caso_idx][1]} Wh.
```

### 4 — Componentes de la factura
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["factura", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el cargo fijo en una factura de luz se paga independientemente de si se consume energía o no?"

explicacion: |
  Verdadero. El cargo fijo cubre los costos de mantenimiento de la red y la disponibilidad del servicio, independientemente del consumo medido.
```

### 5 — Pasos para el cálculo de la factura
```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["procedimiento", "factura"]

respuesta: ["lectura_actual", "lectura_anterior", "resta_consumo", "aplicar_tarifa"]
tipo: ordenar
opciones_explicitas: ["lectura_actual", "lectura_anterior", "resta_consumo", "aplicar_tarifa"]

enunciado: "Ordena los pasos lógicos para determinar el monto a pagar por consumo en una factura eléctrica:"

pasos:
  - "Obtener la lectura actual del medidor."
  - "Obtener la lectura del mes pasado."
  - "Calcular la diferencia para obtener los kWh consumidos."
  - "Multiplicar los kWh por el precio de la tarifa vigente."

explicacion: |
  Primero se necesitan los datos de lectura, luego se obtiene la diferencia (consumo) y finalmente se aplica el costo monetario.
```