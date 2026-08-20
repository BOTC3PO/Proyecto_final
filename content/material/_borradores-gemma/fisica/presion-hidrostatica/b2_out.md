### 1 — Concepto de presión hidrostática
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

respuesta: "f"
tipo: "mc"
opciones_explicitas: ["a", "b", "c", "d"]

enunciado: "La presión hidrostática en un fluido en reposo depende de la profundidad, la densidad del fluido y la aceleración de la gravedad. Si un recipiente tiene una forma irregular, la presión en el fondo dependerá de:"

pasos:
  - "Identificar que la presión hidrostática no depende de la forma del recipiente, sino de la altura de la columna de fluido."

explicacion: |
  La fórmula es P = ρ · g · h. Como puedes ver, la geometría del recipiente no aparece en la ecuación, solo importa la profundidad vertical (h).
```

### 2 — Cálculo de presión en el fondo
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["calculo", "hidrostatica"]

variables:
  escenario: uno_de([
    [1000, 10, 20, 200000],
    [800, 5, 10, 40000],
    [1260, 4, 5, 30870]
  ])

respuesta: escenario[3]
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Calcula la presión hidrostática en el fondo de un tanque que contiene un fluido con densidad de {escenario[0]} kg/m³, a una profundidad de {escenario[1]} m. Considera la gravedad g = {escenario[2]} m/s²."

pasos:
  - "Identificar los datos: ρ = {escenario[0]} kg/m³, h = {escenario[1]} m, g = {escenario[2]} m/s²."
  - "Aplicar la fórmula: P = ρ · g · h."
  - "Calcular: {escenario[0]} * {escenario[2]} * {escenario[1]} = {escenario[3]} Pa."

explicacion: |
  El resultado es {escenario[3]} Pascales (Pa).
```

### 3 — Relación con la densidad
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["teoria", "relaciones"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "Si sumergimos un objeto en un fluido y luego cambiamos ese fluido por uno de mayor densidad (manteniendo la profundidad constante), la presión hidrostática sobre el objeto aumentará."

explicacion: |
  Correcto. Como P = ρ · g · h, la presión es directamente proporcional a la densidad (ρ).
```

### 4 — Completar fórmula
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["formula"]

respuesta: "rho * g * h"
tipo: "completar"
respuestas_validas: ["rho * g * h", "ρ * g * h"]

enunciado: "La expresión matemática para calcular la presión hidrostática es P = ___."

explicacion: |
  La fórmula completa es el producto de la densidad (ρ), la gravedad (g) y la profundidad (h).
```

### 5 — Orden de magnitudes de presión
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["ordenar", "procedimiento"]

respuesta: ["Identificar datos", "Calcular producto", "Verificar unidades"]
tipo: "ordenar"
opciones_explicitas: ["Identificar datos", "Calcular producto", "Verificar unidades"]

enunciado: "Ordena los pasos lógicos para resolver un problema de presión hidrostática:"

pasos:
  - "Primero extraemos la densidad, la profundidad y la gravedad."
  - "Luego multiplicamos los tres valores obtenidos."
  - "Finalmente nos aseguramos de que el resultado esté en Pascales (N/m²)."

explicacion: |
  Un procedimiento sistemático evita errores de cálculo y de unidades.
```