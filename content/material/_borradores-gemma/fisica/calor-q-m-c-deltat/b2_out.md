### 1 — Concepto de Calor Específico
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["calor", "propiedades_materia"]

enunciado: "El calor específico de una sustancia es una propiedad intensiva que indica la cantidad de calor necesaria para aumentar en 1 °C la temperatura de 1 kg de dicha sustancia. Si una sustancia tiene un calor específico muy alto, significa que requiere ___ energía para cambiar su temperatura."

respuestas_validas: ["mayor", "menor"]
respuesta: "mayor"
tipo: completar

explicacion: |
  El calor específico ($c$) es directamente proporcional a la cantidad de calor ($Q$) necesaria para un cambio de temperatura ($\Delta T$). A mayor $c$, más calor se requiere para calentar la sustancia.
```

### 2 — Cálculo de Calor Sensible
```
metadata:
  materia: "fisica"
  tema: "calculo_calor_sensible"
  nivel: "intermedio"
  tags: ["calor", "calculo"]

variables:
  escenario: uno_de([[100, 0.5, 20], [250, 2.0, 10], [50, 4.18, 5]])
  m: escenario[0]
  c: escenario[1]
  dt: escenario[2]

enunciado: "Calcula la cantidad de calor ($Q$) necesaria para calentar una masa de {m} g de una sustancia con calor específico de {c} J/(g·°C) desde una temperatura inicial de 20 °C hasta una temperatura final de {dt + 20} °C."

pasos:
  - "Identificar la masa ($m = {m}$ g), el calor específico ($c = {c}$ J/g°C) y la variación de temperatura ($\Delta T = {dt}$ °C)."
  - "Aplicar la fórmula $Q = m \cdot c \cdot \Delta T$."
  - "Multiplicar: {m} * {c} * {dt}."

respuesta: m * c * dt
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Usando la fórmula $Q = m \cdot c \cdot \Delta T$:
  $Q = {m} \text{ g} \cdot {c} \text{ J/(g·°C)} \cdot {dt} \text{ °C} = {m * c * dt} \text{ J}$.
```

### 3 — Análisis de Variación de Temperatura
```
metadata:
  materia: "fisica"
  tema: "variacion_temperatura"
  nivel: "intermedio"
  tags: ["calor", "algebrac"]

variables:
  datos: uno_de([[500, 2000, 10], [1000, 4186, 5], [200, 1000, 25]])
  q: datos[0]
  c: datos[1]
  m: datos[2]

enunciado: "Si se suministran {q} J de calor a una masa de {m} g de una sustancia con calor específico de {c} J/(g·°C), ¿cuál será la variación de temperatura ($\Delta T$) experimentada?"

opciones_explicitas: ["5 °C", "10 °C", "20 °C", "25 °C"]
respuesta: "10 °C"
tipo: mc

explicacion: |
  Despejamos $\Delta T$ de la fórmula $Q = m \cdot c \cdot \Delta T$:
  $\Delta T = Q / (m \cdot c)$
  $\Delta T = {q} / ({m} \cdot {c}) = {q / (m * c)} \text{ °C}$.
```

### 4 — Comparación de Sustancias
```
metadata:
  materia: "fisica"
  tema: "comparacion_calor_especifico"
  nivel: "avanzado"
  tags: ["calor", "propiedades"]

enunciado: "Considera dos bloques de la misma masa ($m$) y el mismo $\Delta T$. El bloque A tiene un calor específico $c_A$ y el bloque B tiene $c_B$. Si $c_A > c_B$, ¿es verdadero que el bloque A absorbe más calor que el bloque B?"

opciones_explicitas: [verdadero, falso]
respuesta: verdadero
tipo: vf

explicacion: |
  Como $Q = m \cdot c \cdot \Delta T$ y la masa y la variación de temperatura son iguales, el calor $Q$ es directamente proporcional al calor específico $c$. Por lo tanto, si $c_A > c_B$, entonces $Q_A > Q_B$.
```

### 5 — Orden de Procedimiento de Cálculo
```
metadata:
  materia: "fisica"
  tema: "metodologia_calculo"
  nivel: "basico"
  tags: ["metodo", "pasos"]

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la temperatura final ($T_f$) de una sustancia tras recibir calor."

opciones_explicitas: ["Calcular la variación de temperatura ($\Delta T$) usando $\Delta T = Q / (m \cdot c)$", "Identificar los datos de masa, calor específico y calor suministrado", "Sumar la variación obtenida a la temperatura inicial ($T_f = T_i + \Delta T$)"]
respuesta: ["Identificar los datos de masa, calor específico y calor suministrado", "Calcular la variación de temperatura ($\Delta T$) usando $\Delta T = Q / (m \cdot c)$", "Sumar la variación obtenida a la temperatura inicial ($T_f = T_i + \Delta T$)"]
tipo: ordenar

explicacion: |
  Para resolver problemas de termodinámica es fundamental: 1. Extraer datos, 2. Despejar la incógnita de la fórmula principal, 3. Realizar la operación final para hallar la temperatura absoluta o relativa.
```