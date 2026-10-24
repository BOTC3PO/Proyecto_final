### 1 — Concepto de Presión
```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["definicion", "presion"]

tipo: mc
opciones_explicitas: ["La presión es la fuerza aplicada por unidad de área", "La presión es la fuerza multiplicada por el área", "La presión es la masa dividida por el volumen", "La presión es la aceleración de un cuerpo"]

enunciado: "Si aplicamos una fuerza sobre una superficie, la magnitud de la presión resultante depende de la fuerza y del área. ¿Cuál es la definición física de presión?"

explicacion: |
  La presión se define como la magnitud de la fuerza aplicada perpendicularmente sobre una superficie, dividida por el área de dicha superficie ($P = F/A$).
```

### 2 — Cálculo de Presión
```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([
    [100, 2],
    [50, 5],
    [200, 10]
  ])

tipo: input
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[0]} N sobre una superficie de {escenario[1]} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

pasos:
  - "Identificar la fuerza: F = {escenario[0]} N"
  - "Identificar el área: A = {escenario[1]} m²"
  - "Aplicar la fórmula: P = F / A"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula $P = F/A$:
  $P = {escenario[0]} / {escenario[1]} = {escenario[0] / escenario[1]} \text{ Pa}$.
```

### 3 — Relación Inversa (Área y Presión)
```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["relacion", "conceptual"]

tipo: vf

enunciado: "Si mantenemos la fuerza constante pero aumentamos el área de la superficie sobre la que se aplica, la presión resultante será mayor."

respuesta: falso

explicacion: |
  Como la presión es inversamente proporcional al área ($P \propto 1/A$), si el área aumenta, la presión disminuye.
```

### 4 — Completar unidades
```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: completar
respuestas_validas: ["Pascal", "Pa"]

enunciado: "En el Sistema Internacional de Unidades, la unidad de medida de la presión es el ___."

explicacion: |
  El Pascal (Pa) es la unidad derivada del Newton (N) y el metro cuadrado (m²), definida como $1 \text{ Pa} = 1 \text{ N/m}^2$.
```

### 5 — Análisis de variables (Ordenar)
```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["ordenar", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]
respuesta: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]

enunciado: "Para resolver un problema de presión mediante la fórmula $P = F/A$, ¿cuál es el orden lógico de los datos que debemos identificar para realizar la división?"

explicacion: |
  Primero identificamos la fuerza (numerador), luego el área (denominador) y finalmente calculamos el cociente que es la presión.
```