### 1 — Escala vs Proporción
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "proporción"
tipo: mc
opciones_explicitas: ["escala", "proporción", "dimensión", "medida"]

enunciado: "Mientras que la escala es la relación matemática entre la representación y el objeto real, la ___ es la relación de semejanza entre las partes de un mismo objeto para mantener su forma."

explicacion: |
  La escala determina el tamaño de la representación respecto al objeto real, mientras que la proporción asegura que las partes del objeto mantengan su relación de tamaño entre sí para no deformar la figura.
```

### 2 — Escala de Reducción
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "basico"
  tags: ["escalas", "reduccion"]

variables:
  es_reduccion: falso

respuesta: es_reduccion
tipo: vf

enunciado: "En una escala de dibujo técnico, si el valor del denominador es mayor que el valor del numerador (ej. 1:50), estamos ante una escala de reducción."

explicacion: |
  Correcto. En una escala de reducción, el objeto real es más grande que el dibujo, por lo tanto, el número de la derecha (denominador) debe ser mayor.
```

### 3 — Escala Numérica vs Gráfica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["comparacion", "tipos_de_escala"]

variables:
  tipo_escala: uno_de(["num", "graf"])

respuesta: tipo_escala[idx][1]
tipo: mc
opciones_explicitas: ["numérica", "gráfica"]

enunciado: "Si un plano se imprime en un tamaño distinto al original, la escala ___ pierde su validez directa, mientras que la escala gráfica (barra graduada) permanece exacta."

pasos:
  - "Identificar el tipo de escala que depende de la impresión física."
  - "Comparar la naturaleza de la escala numérica (relación de números) frente a la gráfica (representación visual)."

explicacion: |
  La escala numérica es una relación de valores que depende de la reproducción exacta del papel. La escala gráfica es una línea graduada dibujada que escala junto con el dibujo, manteniendo su veracidad siempre.
```

### 4 — Procedimiento de Cálculo de Escala
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

variables:
  escenario: uno_de([
    ["10mm", "100mm", "1:10"],
    ["5cm", "20cm", "1:4"],
    ["2m", "50cm", "4:1"]
  ])

respuesta: escenario[idx][2]
tipo: completar

enunciado: "Para hallar la escala de un dibujo, se debe dividir la medida del objeto real entre la medida del dibujo. Si el objeto mide {escenario[idx][0]} y el dibujo mide {escenario[idx][1]}, la escala es ___."

pasos:
  - "Identificar la medida real y la medida en el papel."
  - "Dividir la medida real por la medida del dibujo para obtener la relación."
  - "Simplificar la fracción hasta obtener la forma 1:n o n:1."

explicacion: |
  La fórmula es Escala = Medida Real / Medida Dibujo. En el caso de 10mm/100mm, la relación es 0.1, que expresado como escala es 1:10.
```

### 5 — Relación de Escalas
```
metadata:
  materia: "dibujo-tecnico"
  tema: "escalas_numericas_y_graficas"
  nivel: "avanzado"
  tags: ["relaciones", "escalas"]

respuesta: ["Escala 1:1", "Escala 1:5", "Escala 1:10", "Escala 1:50"]
tipo: ordenar

enunciado: "Ordene las siguientes escalas de mayor a menor tamaño de representación (de la que representa al objeto en su tamaño real a la que lo representa más pequeño):"

opciones_explicitas: ["1:1", "1:5", "1:10", "1:50"]

explicacion: |
  El orden correcto de tamaño de representación es de la escala natural (1:1) hacia las de reducción más agresivas (1:50). A medida que el denominador aumenta, el objeto se ve más pequeño en el papel.
```