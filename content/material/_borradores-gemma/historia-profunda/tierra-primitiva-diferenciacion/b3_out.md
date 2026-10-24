### 1 — Capas de la Tierra por densidad
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["geologia", "densidad"]

tipo: mc
opciones_explicitas: ["Núcleo", "Manto", "Corteza"]

enunciado: "Durante la diferenciación planetaria, los materiales más densos se hundieron hacia el centro de la Tierra, formando la capa más interna conocida como la ___."

respuesta: "Núcleo"

explicacion: |
  La gravedad hizo que los elementos más pesados (como el hierro y el níquel) migraran hacia el centro, formando el núcleo.
```

### 2 — Orden de densidad
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["densidad", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la menos densa (superficie) hasta la más densa (centro):"

respuesta: ["Corteza", "Manto", "Núcleo"]

explicacion: |
  La diferenciación por densidad organiza la Tierra en capas: la corteza es la más ligera, seguida por el manto y finalmente el núcleo en el centro.
```

### 3 — Comparación de densidades
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "manto"]

variables:
  idx: uno_de([0, 1])

enunciado: "Considerando la estructura terrestre, la densidad del {datos[idx][0]} es {datos[idx][1]} que la densidad de la corteza."

variables:
  datos: [["manto", "mayor"], ["núcleo", "mayor"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: datos[idx][1]

explicacion: |
  El {datos[idx][0]} se encuentra debajo de la corteza y posee una densidad {datos[idx][1]}.
```

### 4 — Completar la estructura
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["geologia", "capas"]

tipo: completar
respuestas_validas: ["manto"]

respuesta: "manto"

enunciado: "La capa intermedia de la Tierra, situada entre la corteza y el núcleo, se denomina ___."

explicacion: |
  El manto es la capa intermedia que separa la corteza externa del núcleo central.
```

### 5 — Cálculo de densidad relativa
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["calculo", "densidad"]

variables:
  datos: [[5.5, 13.0], [3.3, 5.5], [2.7, 3.3]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la densidad de la capa A es {datos[idx][0]} g/cm³ y la densidad de la capa B es {datos[idx][1]} g/cm³, la diferencia de densidad entre la capa más densa y la menos densa de este par es de ___ g/cm³."

tipo: input
respuesta: abs(datos[idx][1] - datos[idx][0])
tolerancia_abs: 0.01

explicacion: |
  La diferencia se calcula restando la densidad menor de la mayor. En este caso, el resultado es {abs(datos[idx][1] - datos[idx][0])}.
```