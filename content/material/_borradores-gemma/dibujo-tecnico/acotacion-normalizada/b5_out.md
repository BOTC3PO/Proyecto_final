### 1 — Identificación de elementos de acotación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["normas", "iso", "elementos"]

variables:
  escenario: uno_de([
    ["La línea que indica la dimensión y tiene puntas de flecha", "Línea de cota"],
    ["La línea perpendicular a la línea de cota que delimita la medida", "Línea auxiliar"],
    ["La cifra que indica la magnitud de la medida", "Cifra de cota"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Línea de cota", "Línea auxiliar", "Cifra de cota", "Línea de referencia"]
respuesta: escenario[idx][1]

enunciado: "En un plano normalizado, el elemento descrito como '{escenario[idx][0]}' se denomina:"

explicacion: |
  Según la norma ISO/UNE, la línea que delimita la dimensión se llama línea de cota, la línea que marca los límites es la auxiliar y el número es la cifra.
```

### 2 — Sentido de la lectura de cotas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["lectura", "normas"]

variables:
  caso: uno_de([
    [false, "Falso"],
    [true, "Verdadero"]
  ])
  idx: uno_de([0, 1])

tipo: vf
respuesta: caso[idx]

enunciado: "En un dibujo técnico, las cotas deben colocarse de tal forma que la lectura sea clara y preferentemente de abajo hacia arriba o de izquierda a derecha. {caso}"

explicacion: |
  La normativa establece que la lectura de las cotas debe ser uniforme para evitar confusiones en la interpretación del plano.
```

### 3 — Unidades en acotación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "basico"
  tags: ["unidades", "normas"]

variables:
  escenario: uno_de([
    ["150", "150"],
    ["45,5", "45,5"],
    ["12", "12"]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["150", "45,5", "12"]
respuesta: escenario[idx][1]

enunciado: "En un plano de piezas mecánicas estandarizado, si no se indica la unidad de medida en el cuadro de rotulación, se asume que la cifra ___ representa la medida en milímetros (mm)."

pasos:
  - "Identificar la cifra de cota en el escenario."
  - "Escribir la cifra exacta sin añadir la unidad 'mm' en el campo de respuesta."

explicacion: |
  Por norma general, en dibujo técnico industrial, si no se especifica lo contrario, la unidad de medida es el milímetro y no se escribe la unidad junto a la cifra.
```

### 4 — Jerarquía de líneas en acotación
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["tipos_linea", "normas"]

variables:
  orden_lineas: ["Línea de contorno", "Línea de cota", "Línea de auxiliar"]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Línea de contorno", "Línea de cota", "Línea de auxiliar"]
respuesta: orden_lineas[idx]

enunciado: "En un esquema de acotación, el orden de importancia visual (de mayor a menor grosor de línea) suele seguir esta jerarquía: 1. ___ , 2. ___ , 3. ___ ."

explicacion: |
  Las líneas de contorno (gruesas) tienen prioridad visual sobre las líneas de cota y auxiliares (finas).
```

### 5 — Verificación de concordancia
```
metadata:
  materia: "dibujo-tecnico"
  tema: "acotacion_normalizada"
  nivel: "intermedio"
  tags: ["errores", "normas"]

variables:
  error: uno_de([
    [true, "Es correcto"],
    [false, "Es incorrecto"]
  ])
  idx: uno_de([0, 1])

tipo: vf
respuesta: error[idx]

enunciado: "Si una cota indica un valor de '50' pero la escala del dibujo hace que la distancia medida con regla sea de 25mm, el dibujo {error[idx]} según las reglas de acotación normalizada."

explicacion: |
  La acotación debe representar la medida real del objeto, independientemente de la escala en la que se imprima el plano. La cifra de cota es la verdad absoluta del plano.
```