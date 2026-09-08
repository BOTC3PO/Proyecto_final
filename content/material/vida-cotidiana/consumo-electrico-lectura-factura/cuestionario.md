# Vida Cotidiana — Consumo electrico lectura factura (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — ¿Qué es un kWh?

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["conceptos", "unidad_medida"]

respuesta: "kilovatio-hora"
tipo: completar
respuestas_validas:
  - "kilovatio-hora"
  - "kWh"
  - "kilowatt-hora"

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
tipo: completar
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

respuesta_orden: ["Lectura del medidor", "Precio por kWh", "Impuestos y cargos fijos"]
tipo: ordenar
opciones_explicitas: ["Lectura del medidor", "Precio por kWh", "Impuestos y cargos fijos"]

enunciado: "Ordena los elementos que determinan el monto total de una factura eléctrica, desde el factor de consumo base hasta el costo final."

explicacion: |
  El proceso comienza con la medición del consumo (lectura), se multiplica por el precio unitario de la tarifa y finalmente se le suman los cargos fijos e impuestos.
```

### 6 — La unidad de consumo

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["unidades", "kwh"]

respuesta: "kWh"
tipo: completar
respuestas_validas:
  - "kWh"
  - "kilovatio-hora"
  - "kilowatt-hora"

enunciado: "La unidad de medida estándar utilizada en las facturas de electricidad para cuantificar la energía consumida es el ___."

explicacion: |
  El consumo de energía eléctrica se mide en kilovatios-hora (kWh), que representa la potencia (kW) multiplicada por el tiempo (h) de uso.
```

### 7 — Cálculo de consumo de un artefacto

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
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el consumo total en kWh de un artefacto que tiene una potencia de {datos[escenario_idx][0]} W, se usa durante {datos[escenario_idx][1]} horas al día, durante {datos[escenario_idx][2]} días en el mes."

pasos:
  - "1. Convertir la potencia de Watts a Kilowatts: {datos[escenario_idx][0]} / 1000"
  - "2. Multiplicar kW por horas diarias: {datos[escenario_idx][0] / 1000} * {datos[escenario_idx][1]}"
  - "3. Multiplicar el resultado por los días del mes: {datos[escenario_idx][0] / 1000 * datos[escenario_idx][1]} * {datos[escenario_idx][2]}"

explicacion: |
  El cálculo es: (Potencia en kW) × (Horas/día) × (Días) = {datos[escenario_idx][0] / 1000 * datos[escenario_idx][1] * datos[escenario_idx][2]} kWh.
```

### 8 — Interpretación de la factura

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

### 9 — Verdad o Falso: Consumo vs Potencia

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

### 10 — Pasos para el cálculo del costo

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["procedimiento", "costo"]

respuesta_orden: ["Obtener consumo en kWh", "Identificar precio por kWh", "Multiplicar consumo por precio", "Sumar cargos fijos o impuestos"]
tipo: ordenar

opciones_explicitas: ["Obtener consumo en kWh", "Identificar precio por kWh", "Multiplicar consumo por precio", "Sumar cargos fijos o impuestos"]

enunciado: "Ordena los pasos lógicos para calcular el monto total a pagar en una factura de luz basándote en el consumo."

explicacion: |
  Primero necesitas saber cuánto consumiste (kWh), luego cuánto cuesta cada unidad, multiplicas ambos y finalmente sumas los cargos fijos o impuestos que la empresa aplique.
```

### 11 — ¿Qué se factura en la boleta de luz?

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

### 12 — El cálculo del consumo mensual

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

respuesta: (datos[idx][0] / 1000) * datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un aparato tiene una potencia de {potencia_w} W y se usa durante {tiempo_h} horas en un mes, ¿cuántos kWh consumió?"

pasos:
  - "Convertir la potencia de Watts (W) a Kilowatts (kW) dividiendo por 1000."
  - "Multiplicar los kW por la cantidad de horas de uso."

explicacion: |
  Para calcular el consumo en kWh: (Potencia en W / 1000) * Horas de uso. 
  En este caso: ({potencia_w} / 1000) * {tiempo_h} = {(datos[idx][0] / 1000) * datos[idx][1]} kWh.
```

### 13 — Lectura de medidor: ¿Subida o bajada?

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

### 14 — Componentes de la factura

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["factura", "componentes"]

respuesta_orden: ["Lectura anterior", "Lectura actual", "Consumo en kWh", "Costo total"]
tipo: ordenar

opciones_explicitas: ["Lectura anterior", "Lectura actual", "Consumo en kWh", "Costo total"]

enunciado: "Para entender el detalle de tu consumo en una factura, ordena los pasos lógicos que sigue el cálculo del monto a pagar:"

explicacion: |
  Primero se resta la lectura anterior de la actual para obtener el consumo (kWh), y sobre ese valor se aplican las tarifas para obtener el costo final.
```

### 15 — El mito del consumo en Standby

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["standby", "consumo_invisible"]

respuesta: "consumo_fantasma"
tipo: completar

respuestas_validas:
  - "consumo_fantasma"
  - "consumo_invisible"

enunciado: "El consumo de energía de los aparatos que están apagados pero con una luz encendida o un reloj digital (modo espera) se conoce comúnmente como ___."

explicacion: |
  Este fenómeno se conoce como 'consumo vampiro' o 'consumo fantasma'. Aunque cada aparato consume poco, la suma de todos puede representar un porcentaje relevante de la factura.
```

### 16 — Energía vs. Potencia

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["conceptos_basicos", "unidades"]

respuesta: "kWh"
tipo: completar
respuestas_validas:
  - "kWh"
  - "kilovatio-hora"
  - "kilowatt-hora"

enunciado: "Mientras que la potencia eléctrica se mide en vatios (W) o kilovatios (kW), la energía consumida en un periodo de tiempo se mide en ___."

explicacion: |
  La potencia es la capacidad de un artefacto para realizar un trabajo en un instante, mientras que la energía es esa potencia multiplicada por el tiempo de uso.
```

### 17 — El concepto de lectura de medidor

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

### 18 — Relación Potencia-Tiempo

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
tipo: completar
tolerancia_abs: 0

enunciado: "Un artefacto tiene una potencia de {escenario[caso_idx][0]} W. Si se mantiene encendido durante {escenario[caso_idx][1]} horas, el consumo total será de ___ Wh."

pasos:
  - "Convertir la potencia de W a kW (dividir por 1000)."
  - "Multiplicar la potencia en kW por el tiempo en horas para obtener kWh."
  - "Convertir el resultado de kWh a Wh multiplicando por 1000."

explicacion: |
  El cálculo es: Potencia (W) × Tiempo (h) = Energía (Wh). En el caso {escenario[caso_idx][0]}W por {escenario[caso_idx][1]}h, el resultado es {escenario[caso_idx][0] * escenario[caso_idx][1]} Wh.
```

### 19 — Componentes de la factura

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

### 20 — Pasos para el cálculo de la factura

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["procedimiento", "factura"]

respuesta_orden: ["lectura_actual", "lectura_anterior", "resta_consumo", "aplicar_tarifa"]
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

### 21 — ¿Qué es un kWh?

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

### 22 — Cálculo de consumo de un electrodoméstico

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
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un artefacto consume {potencia} W. Si se usa durante {horas} horas al día, durante {dias} días, ¿cuántos kWh consumió en total?"

pasos:
  - "Multiplicar potencia (W) por horas (h) por días (d) para obtener Watt-hora totales."
  - "Dividir el resultado por 1000 para convertir Watts a Kilowatts."

explicacion: |
  El cálculo es: (Potencia en W * horas * días) / 1000.
  En este caso: ({potencia} * {horas} * {dias}) / 1000 = {escenario[0] * escenario[1] * escenario[2] / 1000} kWh.
```

### 23 — Lectura de medidor: ¿Aumentó el consumo?

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "intermedio"
  tags: ["lectura", "medidor"]

variables:
  lectura: uno_de([[1250.5, 1300.2], [4500.0, 4650.5], [890.2, 910.8]])
  anterior: lectura[0]
  actual: lectura[1]

respuesta: actual > anterior
tipo: vf
enunciado: "Si la lectura anterior del medidor era {anterior} kWh y la lectura actual es {actual} kWh, ¿el consumo registrado es positivo?"

explicacion: |
  El consumo se calcula restando la lectura actual menos la lectura anterior. 
  Si {actual} > {anterior}, el consumo es positivo.
```

### 24 — Componentes de la factura

```
metadata:
  materia: "vida-cotidiana"
  tema: "consumo_electrico_lectura_factura"
  nivel: "basico"
  tags: ["factura", "conceptos"]

respuesta_orden: ["Lectura anterior", "Lectura actual", "Consumo del período", "Monto total a pagar"]
tipo: ordenar

opciones_explicitas: ["Lectura actual", "Lectura anterior", "Monto total a pagar", "Consumo del período"]

enunciado: "Ordena los elementos de una factura eléctrica según el orden lógico en que se procesan para llegar al monto final:"

explicacion: |
  Primero se toma la lectura anterior, luego la actual para obtener el consumo, y finalmente se aplica la tarifa para obtener el monto total.
```

### 25 — Costo total del consumo

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

respuestas_validas:
  - consumo * tarifa

enunciado: "Si el consumo registrado es de {consumo} kWh y el precio por cada kWh es de ${tarifa}, el costo total de la energía es $___."

explicacion: |
  El costo se calcula multiplicando el consumo total en kWh por el precio unitario de la tarifa.
  Cálculo: {consumo} * {tarifa} = {consumo * tarifa}.
```
