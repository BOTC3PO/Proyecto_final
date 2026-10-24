### 1 — Concepto de Energía Potencial
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: "positiva"
tipo: "vf"

enunciado: "Si un objeto con masa positiva se encuentra a una altura positiva sobre el nivel de referencia, su energía potencial gravitatoria será ____."

explicacion: |
  La fórmula es Ep = m · g · h. Si la masa (m), la gravedad (g) y la altura (h) son todas positivas, el resultado es necesariamente positivo.
```

### 2 — Cálculo de la Energía Potencial
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([
    [2, "15", "5", 10],
    [3, "10", "4", 20],
    [4, "5", "10", 50]
  ])
  m: escenario[0]
  h: escenario[1]
  g: escenario[2]
  resultado_esperado: escenario[3]

respuesta: resultado_esperado
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto de {m} kg se encuentra a una altura de {h} metros. Calcula su energía potencial gravitatoria (usa g = {g} m/s²)."

pasos:
  - "Identificar los datos: masa (m) = {m} kg, altura (h) = {h} m, gravedad (g) = {g} m/s²."
  - "Aplicar la fórmula: Ep = m · g · h."
  - "Sustituir: Ep = {m} * {g} * {h} = {resultado_esperado} J."

explicacion: |
  La energía potencial se calcula multiplicando la masa por la gravedad por la altura. En este caso: {m} * {g} * {h} = {resultado_esperado} Joules.
```

### 3 — Dependencia de la altura
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["proporcionalidad", "analisis"]

respuesta: "se duplica"
tipo: "mc"
opciones_explicitas: ["se mantiene igual", "se reduce a la mitad", "se duplica", "se cuadruplica"]

enunciado: "Si un objeto mantiene su masa constante pero se coloca a una altura que es el doble de la original, su energía potencial gravitatoria ____."

explicacion: |
  Como la energía potencial es directamente proporcional a la altura (Ep ∝ h), si la altura se multiplica por 2, la energía también se multiplica por 2.
```

### 4 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "Joules"
tipo: "completar"
respuestas_validas: ["Joules", "J", "joules"]

enunciado: "En el Sistema Internacional de Unidades, la unidad para medir la energía potencial gravitatoria es el _________."

explicacion: |
  La unidad de energía (trabajo) es el Joule (J), que equivale a kg·m²/s².
```

### 5 — Procedimiento de Resolución
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["metodologia", "ordenar"]

respuesta: ["identificar_datos", "aplicar_formula", "realizar_multiplicacion"]
tipo: "ordenar"
opciones_explicitas: ["aplicar_formula", "realizar_multiplicacion", "identificar_datos"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de energía potencial gravitatoria:"

pasos:
  - "1. Identificar los datos (m, g, h)."
  - "2. Aplicar la fórmula Ep = m·g·h."
  - "3. Realizar la operación matemática y asignar unidades."

explicacion: |
  Para resolver problemas físicos de forma sistemática, primero debemos extraer los datos, luego plantear la ecuación y finalmente operar.
```