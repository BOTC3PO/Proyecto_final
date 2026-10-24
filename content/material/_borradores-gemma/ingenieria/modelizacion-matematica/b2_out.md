### 1 — Caída libre y tiempo de impacto
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["fisica", "cinematica"]

variables:
  escenario: uno_de([
    [15.0, "15.0"],
    [25.0, "25.0"],
    [40.0, "40.0"]
  ])
  g: 9.81

respuesta: sqrt(2 * g * escenario[0])
tipo: input
tolerancia_abs: 0.01

enunciado: "Se suelta un objeto desde una altura de {escenario[0]} metros. Considerando la aceleración de la gravedad como {g} m/s², ¿cuánto tiempo tardará en tocar el suelo? (Use la fórmula t = sqrt(2h/g))"

pasos:
  - "Identificar la altura h = {escenario[0]} m."
  - "Identificar la gravedad g = {g} m/s²."
  - "Sustituir en la fórmula: t = sqrt(2 * {escenario[0]} / {g})."

explicacion: |
  El tiempo de caída libre se calcula despejando t de la ecuación de posición: h = 0.5 * g * t². 
  Para el caso de {escenario[0]} m, el resultado es {sqrt(2 * g * escenario[0])} segundos.
```

### 2 — Crecimiento poblacional lineal
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["modelos", "lineal"]

variables:
  datos: uno_de([
    [100, 150, 200],
    [50, 80, 110],
    [200, 250, 300]
  ])

respuesta: datos[0][1] - datos[0][0]
tipo: completar
respuestas_validas: [10, 20, 30, 40, 50]

enunciado: "Un tanque de agua comienza con {datos[0][0]} litros y después de una hora tiene {datos[0][1]} litros. Si el llenado es lineal, la tasa de cambio (litros por hora) es de ___ litros/h."

explicacion: |
  En un modelo lineal y de tasa constante, la pendiente m es (y2 - y1) / (x2 - x1).
  En este caso: ({datos[0][1]} - {datos[0][0]}) / (1 - 0) = {datos[0][1] - datos[0][0]}.
```

### 3 — Interés compuesto anual
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["finanzas", "exponencial"]

variables:
  capital: uno_de([
    [1000.0, "1000.0"],
    [5000.0, "5000.0"]
  ])
  tasa: 0.05

respuesta: capital[0] * (1 + tasa)

tipo: mc
opciones_explicitas: ["1050.0", "1100.0", "1500.0", "1005.0"]

enunciado: "Se invierte un capital inicial de ${capital[0]} con una tasa de interés compuesto anual del {tasa * 100}%. ¿Cuál será el monto total al finalizar el primer año?"

explicacion: |
  La fórmula del monto es M = C * (1 + i). 
  Para ${capital[0]} con i = 0.05, el monto es ${capital[0] * (1 + tasa)}.
```

### 4 — Análisis de veracidad: Modelo de mezcla
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["quimica", "modelos"]

respuesta: verdadero
tipo: vf

enunciado: "Si modelamos la concentración de sal en un tanque donde entra salmuera con una concentración constante y el volumen de líquido es constante, la ecuación diferencial que describe la cantidad de sal será de primer orden lineal."
```

### 5 — Secuencia de resolución de un problema de optimización
```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["calculo", "metodologia"]

variables:
  pasos_correctos: ["Definir la función objetivo", "Establecer las restricciones", "Calcular la derivada", "Igualar la derivada a cero"]

respuesta: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Definir la función objetivo", "Establecer las restricciones", "Calcular la derivada", "Igualar la derivada a cero", "Verificar la segunda derivada"]

enunciado: "Ordene los pasos lógicos para resolver un problema de optimización matemática (maximizar/minimizar una función):"

explicacion: |
  Para modelizar y resolver un problema de optimización, primero se debe definir qué se quiere optimizar (función objetivo) y qué limitaciones existen (restricciones). Luego, se aplica el cálculo diferencial para hallar puntos críticos.
```