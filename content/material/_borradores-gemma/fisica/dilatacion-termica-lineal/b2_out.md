### 1 — Concepto de dilatación lineal
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["conceptos", "termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "Si un material se calienta, su longitud inicial aumenta debido al incremento de la agitación térmica de sus átomos. ¿Es esto verdadero?"

explicacion: |
  La dilatación térmica lineal es el aumento de la longitud de un cuerpo cuando se incrementa su temperatura.
```

### 2 — La fórmula de dilatación
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["formula", "teoria"]

opciones_explicitas: ["ΔL = L₀ * α * ΔT", "ΔL = L₀ / (α * ΔT)", "ΔL = L₀ + α + ΔT", "ΔL = α * ΔT / L₀"]
respuesta: "ΔL = L₀ * α * ΔT"
tipo: mc

enunciado: "La expresión matemática que define la variación de longitud (ΔL) en función de la longitud inicial (L₀), el coeficiente de dilatación lineal (α) y el cambio de temperatura (ΔT) es:"

explicacion: |
  La fórmula fundamental es ΔL = L₀ * α * ΔT, donde ΔL es la variación de longitud.
```

### 3 — Cálculo de la variación de longitud
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  L0: 10.0
  alfa: 0.000012
  deltaT: 50.0
  resultado: L0 * alfa * deltaT

respuesta: resultado
tipo: input
tolerancia_abs: 0.0001

enunciado: "Una barra de acero tiene una longitud inicial de {L0} m. Si la temperatura aumenta en {deltaT} °C y el coeficiente de dilatación lineal del acero es de {alfa} 1/°C, ¿cuál es la variación de longitud (ΔL) en metros?"

pasos:
  - "Identificar la longitud inicial: L₀ = 10.0 m"
  - "Identificar el coeficiente: α = 0.000012 1/°C"
  - "Identificar la variación de temperatura: ΔT = 50 °C"
  - "Calcular: ΔL = 10.0 * 0.000012 * 50"

explicacion: |
  El cálculo es: ΔL = 10.0 * 0.000012 * 50 = 0.006 m.
```

### 4 — Longitud final de una varilla
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "intermedio"
  tags: ["calculo", "longitud_final"]

variables:
  L0: 5.0
  alfa: 0.000024
  deltaT: 100.0
  deltaL: L0 * alfa * deltaT
  Lf: L0 + deltaL
  resultado: Lf

respuesta: resultado
tipo: input
tolerancia_abs: 0.0001

enunciado: "Una varilla de aluminio de {L0} m de longitud se calienta de 20°C a 120°C. Si el coeficiente de dilatación lineal es {alfa} 1/°C, ¿cuál es la longitud final (L_f) de la varilla en metros?"

pasos:
  - "Calcular la variación de longitud: ΔL = 5.0 * 0.000024 * 100 = 0.012 m"
  - "Sumar la variación a la longitud inicial: L_f = L₀ + ΔL"
  - "L_f = 5.0 + 0.012 = 5.012 m"

explicacion: |
  La longitud final es la suma de la longitud inicial más la expansión: 5.0 + 0.012 = 5.012 m.
```

### 5 — Orden de los pasos para resolver un problema
```
metadata:
  materia: "fisica"
  tema: "dilatacion_termica_lineal"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
respuesta: ["Identificar datos (L₀, α, ΔT)", "Calcular la variación ΔL", "Sumar ΔL a L₀ para hallar L_f"]
tipo: ordenar

enunciado: "Para resolver un problema que pida hallar la longitud final de un objeto tras un cambio de temperatura, ¿cuál es el orden lógico de los pasos?"

explicacion: |
  Primero se deben extraer los datos, luego aplicar la fórmula de dilatación y finalmente sumar el resultado a la longitud inicial.
```