### 1 — Presión y área constante
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area", "fuerza"]

enunciado: "Si se mantiene la misma fuerza aplicada sobre una superficie, pero el área de contacto se reduce a la mitad, la presión resultante será ___ veces la presión original."

respuestas_validas: ["2", "0.5", "1", "4"]
respuesta: "2"
tipo: completar

explicacion: |
  La presión es inversamente proporcional al área ($P = F/A$). Si el área disminuye ($A/2$), la presión se duplica ($2P$).
```

### 2 — El error de la unidad de área
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["unidades", "error_comun"]

variables:
  datos: [[100, 2, 50], [200, 4, 50], [50, 0.5, 100]]
  idx: uno_de([0, 1, 2])

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una superficie de {datos[idx][1]} cm². ¿Cuál es la presión en Pascales (Pa)? (Nota: Recuerde que $1\text{ m}^2 = 10000\text{ cm}^2$)."

pasos:
  - "Convertir el área de $\text{cm}^2$ a $\text{m}^2$ dividiendo por $10000$."
  - "Dividir la fuerza por el área en $\text{m}^2$."

respuesta: datos[idx][2]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Un error común es no convertir las unidades de área. Para obtener Pascales ($N/m^2$), el área debe estar en $\text{m}^2$.
```

### 3 — Relación entre presión y área
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Un clavo tiene una punta muy afilada. Esto se hace para que, al aplicar una fuerza, la presión sobre la superficie sea:"

opciones_explicitas: ["mayor", "menor", "igual"]
respuesta: "mayor"
tipo: mc

explicacion: |
  Al reducir el área de contacto (punta afilada), la presión aumenta significativamente para una misma fuerza aplicada.
```

### 4 — ¿Presión o Fuerza?
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "distincion"]

enunciado: "Si un objeto se sumerge en un fluido y la presión sobre él aumenta debido a la profundidad, ¿la fuerza total ejercida por el fluido sobre el objeto cambia necesariamente?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: vf

explicacion: |
  La presión es una magnitud intensiva (no depende de la cantidad de materia), pero la fuerza es la presión multiplicada por el área ($F = P \cdot A$). Si la presión aumenta y el área es constante, la fuerza también aumenta.
```

### 5 — Orden de magnitudes de presión
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "avanzado"
  tags: ["ordenar", "conceptos"]

enunciado: "Ordene las siguientes situaciones de MAYOR a MENOR presión aplicada, asumiendo que la fuerza aplicada es siempre la misma en todos los casos:"

opciones_explicitas: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
respuesta: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
tipo: ordenar

explicacion: |
  A menor área, mayor presión. Los tacones concentran la fuerza en un área muy pequeña (máxima presión), mientras que las raquetas de nieve distribuyen la fuerza en un área grande (mínima presión).
```