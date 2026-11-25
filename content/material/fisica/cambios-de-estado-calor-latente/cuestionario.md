# Fisica — Cambios de estado calor latente (cuestionario, 31 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de calor latente

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["conceptos", "calor_latente"]

tipo: mc
opciones_explicitas: ["Energía para cambiar la temperatura", "Energía para cambiar el estado sin cambiar la temperatura", "Energía para aumentar la masa", "Energía para cambiar la presión"]

enunciado: "El calor latente es la energía necesaria para que una sustancia cambie de estado sin que su ____ cambie."

respuesta: "Energía para cambiar el estado sin cambiar la temperatura"
```

### 2 — Definición de calor específico vs latente

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["definiciones"]

tipo: vf
enunciado: "Durante un cambio de fase, el calor absorbido se utiliza para romper las fuerzas de atracción intermoleculares en lugar de aumentar la energía cinética de las moléculas."

respuesta: verdadero
```

### 3 — Identificación de la fórmula

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["formula"]

tipo: completar
respuestas_validas:
  - "Q = m * L"
  - "Q = m * c * ΔT"
  - "Q = m * g * h"

enunciado: "La expresión matemática para calcular el calor latente transferido es: ____"

respuesta: "Q = m * L"
```

### 4 — El papel de la masa

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["proporcionalidad"]

tipo: mc
opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No tiene relación", "Depende de la temperatura inicial"]

enunciado: "Si duplicamos la masa de una sustancia que está cambiando de estado, la cantidad de calor necesaria para completar el proceso es ____ veces mayor."

respuesta: "Directamente proporcional"
```

### 5 — Estado de la temperatura

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["temperatura"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Oscila"]

enunciado: "En un vaso de precipitados con hielo fundiéndose a 0°C, la temperatura del sistema durante todo el proceso de fusión será:"

respuesta: "Se mantiene constante"
```

### 6 — Cálculo de calor de fusión

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["calculo", "fusion"]

variables:
  idx: uno_de([0, 1])
  datos: [[2.0, 334000], [5.0, 334000]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el calor necesario para fundir {datos[idx][0]} kg de hielo. (Dato: L_fusión = {datos[idx][1]} J/kg)"

pasos:
  - "Identificar la masa (m)"
  - "Identificar el calor latente (L)"
  - "Multiplicar m * L"

respuesta: datos[idx][1] * datos[idx][0]
```

### 7 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["unidades"]

tipo: mc
opciones_explicitas: ["J/kg", "J/kg·°C", "Cal/g", "kg/J"]

enunciado: "En el Sistema Internacional, la unidad del calor latente de fusión es:"

respuesta: "J/kg"
```

### 8 — Relación masa y calor

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["proporcionalidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [[10, 5000], [20, 10000]]

tipo: completar
respuestas_validas:
  - "500"

enunciado: "Si para fundir {escenario[idx][0]} g de una sustancia se requieren {escenario[idx][1]} J, ¿cuánto calor se requiere para fundir 1 g?"

respuesta: escenario[idx][1] / escenario[idx][0]
```

### 9 — El signo del calor

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["termodinamica"]

tipo: mc
opciones_explicitas: ["Positivo (absorbe calor)", "Negativo (libera calor)", "Cero", "Variable"]

enunciado: "Cuando un líquido se convierte en gas (evaporación), el sistema está realizando un proceso endotérmico. Esto significa que el calor latente es:"

respuesta: "Positivo (absorbe calor)"
```

### 10 — Comparación de procesos

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["Fusión", "Condensación", "Sublimación", "Solidificación"]

enunciado: "El proceso inverso a la fusión (paso de sólido a líquido) es la ____, la cual libera calor latente."

respuesta: "Solidificación"
```

### 11 — Error común: Temperatura en la transición

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["error_comun"]

tipo: vf
enunciado: "Si añado más calor a una mezcla de agua y hielo que está a 0°C, la temperatura del agua subirá inmediatamente por encima de 0°C."

respuesta: falso
```

### 12 — La energía cinética vs potencial

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["microscopico"]

tipo: mc
opciones_explicitas: ["Aumenta la energía cinética", "Aumenta la energía potencial molecular", "Aumenta la velocidad de las moléculas", "Disminuye la energía interna"]

enunciado: "Durante un cambio de estado, el calor latente se utiliza principalmente para aumentar la ____ de las moléculas, permitiendo que se separen."

respuesta: "Aumenta la energía potencial molecular"
```

### 13 — El concepto de calor específico

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["diferencia"]

tipo: mc
opciones_explicitas: ["Calor latente", "Calor específico", "Capacidad calorífica", "Temperatura"]

enunciado: "La cantidad de calor necesaria para elevar 1°C la temperatura de 1 kg de una sustancia se denomina ____."

respuesta: "Calor específico"
```

### 14 — Análisis de gráfico (Pendiente)

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["graficos"]

tipo: mc
opciones_explicitas: ["La pendiente es mayor", "La pendiente es cero (horizontal)", "La pendiente es infinita", "La pendiente es negativa"]

enunciado: "En un gráfico de Temperatura vs. Tiempo, el proceso de cambio de estado se representa como una línea:"

respuesta: "La pendiente es cero (horizontal)"
```

### 15 — Identificación de fase

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "basico"
  tags: ["estado"]

tipo: completar
respuestas_validas:
  - "Gaseoso"

enunciado: "Si una sustancia ha absorbido su calor latente de vaporización y se encuentra a la temperatura de ebullición, su estado es ____."

respuesta: "Gaseoso"
```

### 16 — Escenario de evaporación

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0.5, 2260000], [2.0, 2260000]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula el calor necesario para evaporar {escenario[idx][0]} kg de agua. (L_vaporización = {escenario[idx][1]} J/kg)"

respuesta: escenario[idx][0] * escenario[idx][1]
```

### 17 — Relación con la entropía (Concepto)

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["termodinamica"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene constante", "Depende de la presión"]

enunciado: "Durante la fusión de un sólido, la entropía del sistema generalmente ____."

respuesta: "Aumenta"
```

### 18 — El caso del hielo seco

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["sublimacion"]

tipo: vf
enunciado: "La sublimación es el paso directo de un sólido a un gas sin pasar por el estado líquido."

respuesta: verdadero
```

### 19 — Comparación de energías

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["El calor de vaporización es mayor", "El calor de fusión es mayor", "Son iguales", "Dependen de la masa"]

enunciado: "Para la mayoría de las sustancias, el calor latente de vaporización es ____ que el de fusión."

respuesta: "El calor de vaporización es mayor"
```

### 20 — El orden de los procesos

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["orden"]

tipo: ordenar
opciones_explicitas: ["Sólido", "Líquido", "Gas"]

enunciado: "Ordena los estados de la materia de menor a mayor energía cinética (en un proceso de calentamiento):"

respuesta_orden: ["Sólido", "Líquido", "Gas"]
```

### 21 — Escenario de enfriamiento

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["aplicacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[334, 334], [167, 334]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un sistema libera {escenario[idx][0]} kJ de calor al solidificarse cierta masa de agua (L_fusión = {escenario[idx][1]} kJ/kg). ¿Cuál es esa masa, en kg?"

respuesta: escenario[idx][0] / escenario[idx][1]
```

### 22 — El papel de la presión

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["factores"]

tipo: mc
opciones_explicitas: ["La presión", "La masa", "El volumen", "El color"]

enunciado: "El valor del calor latente de una sustancia depende de la temperatura y de la ____."

respuesta: "La presión"
```

### 23 — Análisis de energía interna

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["energia"]

tipo: vf
enunciado: "Durante un cambio de fase, la energía interna del sistema aumenta aunque la temperatura sea constante."

respuesta: verdadero
```

### 24 — Cálculo de masa desconocida

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  idx: uno_de([0, 1])
  escenario: [[334000, 334000], [167000, 334000]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se necesitan {escenario[idx][0]} J para fundir una muestra de hielo. ¿Cuál es la masa en kg? (L = {escenario[idx][1]} J/kg)"

respuesta: escenario[idx][0] / escenario[idx][1]
```

### 25 — Resumen de conceptos

```
metadata:
  materia: "fisica"
  tema: "cambios_de_estado_calor_latente"
  nivel: "intermedio"
  tags: ["resumen"]

tipo: completar
respuestas_validas:
  - "calor latente"
  - "temperatura"
  - "masa"

enunciado: "El ____ es la energía necesaria para el cambio de estado, la cual no se refleja en un cambio de ____, sino en un cambio de la energía potencial de las partículas."

respuesta: "calor latente"
```

### 26 — Calor para fundir hielo (Q = m · L)

```
metadata:
  materia: "fisica"
  tema: "calor_latente"
  nivel: "basico"
  tags: ["calculo", "fusion"]

variables:
  m: uno_de([0.5, 1, 1.5, 2, 3])

respuesta: m * 334000
tipo: input
unidad: "J"
tolerancia: 1%

enunciado: "¿Cuánto calor hace falta para derretir {m} kg de hielo que ya está a 0 °C? (calor latente de fusión del agua: 334 000 J/kg)"

pasos:
  - "Q = m · Lf"
  - "Q = {m} kg × 334 000 J/kg = {m * 334000} J"

explicacion: |
  Durante el cambio de estado la temperatura no varía: el calor se usa para romper la estructura del hielo.
```

### 27 — Calor para evaporar agua

```
metadata:
  materia: "fisica"
  tema: "calor_latente"
  nivel: "basico"
  tags: ["calculo", "vaporizacion"]

variables:
  m: uno_de([0.1, 0.2, 0.5, 1])

respuesta: m * 2260000
tipo: input
unidad: "J"
tolerancia: 1%

enunciado: "¿Cuánto calor hace falta para evaporar {m} kg de agua que ya está a 100 °C? (calor latente de vaporización: 2 260 000 J/kg)"

pasos:
  - "Q = m · Lv"
  - "Q = {m} kg × 2 260 000 J/kg = {m * 2260000} J"

explicacion: |
  Evaporar requiere mucha más energía que derretir: por eso sudar enfría tanto el cuerpo.
```

### 28 — Calcular la masa que se fundió

```
metadata:
  materia: "fisica"
  tema: "calor_latente"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  m: uno_de([0.5, 1, 2, 4])
  Q: m * 334000

respuesta: m
tipo: input
unidad: "kg"
tolerancia: 1%

enunciado: "A un bloque de hielo a 0 °C se le dieron {Q} J y se derritió por completo. ¿Cuál era su masa, en kg? (Lf = 334 000 J/kg)"

pasos:
  - "De Q = m · Lf despejamos m = Q / Lf."
  - "m = {Q} J / 334 000 J/kg = {m} kg"

explicacion: |
  Con el calor absorbido y el calor latente se puede averiguar cuánta sustancia cambió de estado.
```

### 29 — Calcular el calor latente

```
metadata:
  materia: "fisica"
  tema: "calor_latente"
  nivel: "intermedio"
  tags: ["calculo", "calor_latente"]

variables:
  m: uno_de([1, 2, 4, 5])
  L: uno_de([25000, 64000, 105000, 207000])
  Q: m * L

respuesta: L
tipo: input
unidad: "J/kg"
tolerancia: 1%

enunciado: "Para fundir {m} kg de un metal que ya está en su punto de fusión hicieron falta {Q} J. ¿Cuál es su calor latente de fusión, en J/kg?"

pasos:
  - "De Q = m · L despejamos L = Q / m."
  - "L = {Q} J / {m} kg = {L} J/kg"

explicacion: |
  El calor latente es propio de cada sustancia: cuánta energía hace falta por kilo para cambiar de estado.
```

### 30 — Los cubitos de la heladera

```
metadata:
  materia: "fisica"
  tema: "calor_latente"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  n: uno_de([10, 12, 20, 24])
  g: uno_de([20, 25, 30])

respuesta: n * g / 1000 * 334000
tipo: input
unidad: "J"
tolerancia: 1%

enunciado: "Una cubetera tiene {n} cubitos de {g} g cada uno, ya a 0 °C. ¿Cuánto calor absorben del vaso al derretirse todos, en joules? (Lf = 334 000 J/kg)"

pasos:
  - "Masa total: {n} × {g} g = {n * g} g = {n * g / 1000} kg"
  - "Q = m · Lf = {n * g / 1000} × 334 000 = {n * g / 1000 * 334000 | 0} J"

explicacion: |
  Ese calor lo sacan de la bebida: por eso el hielo enfría mucho más que agua fría a 0 °C.
```

### 31 — Fundir o evaporar

```
metadata:
  materia: "fisica"
  tema: "calor_latente"
  nivel: "basico"
  tags: ["comparacion", "verdadero_falso"]

variables:
  m: uno_de([0.5, 1, 2])

respuesta: (m * 2260000) > (m * 334000)
tipo: vf

enunciado: "¿Hace falta más calor para evaporar {m} kg de agua hirviendo que para derretir {m} kg de hielo a 0 °C? (Lv = 2 260 000 J/kg; Lf = 334 000 J/kg)"

pasos:
  - "Evaporar: {m} × 2 260 000 = {m * 2260000} J"
  - "Derretir: {m} × 334 000 = {m * 334000} J"

explicacion: |
  El calor latente de vaporización del agua es casi siete veces el de fusión.
```
