### 1 — Capas por densidad
```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "densidad"]

variables:
  escenario: [[["hierro", "núcleo"], ["silicatos", "manto"], ["granito", "corteza"]], 0]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: mc
opciones_explicitas: ["núcleo", "manto", "corteza"]

enunciado: "Durante la diferenciación planetaria, los elementos más densos como el {dato} se hundieron hacia el centro, formando la capa conocida como ___."

respuesta: resp

explicacion: |
  Los elementos más pesados (densos) como el hierro y el níquel migraron al centro debido a la gravedad, formando el núcleo.
```

### 2 — Composición de la corteza
```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["composicion", "corteza"]

variables:
  escenario: [["silicatos ligeros", "corteza"], ["metales pesados", "núcleo"], ["magma denso", "manto"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: completar
respuestas_validas: ["corteza", "núcleo", "manto"]

enunciado: "La capa más externa de la Tierra está compuesta principalmente por ___."

respuesta: resp

explicacion: |
  La corteza es la capa más superficial y está formada por materiales menos densos (silicatos) que flotaron sobre el manto.
```

### 3 — Orden de las capas
```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]
respuesta: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la superficie hacia el centro del planeta:"

explicacion: |
  La estructura terrestre se organiza por densidad: la corteza es la más externa, seguida por el manto y finalmente el núcleo en el centro.
```

### 4 — El manto terrestre
```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["manto", "densidad"]

variables:
  escenario: [["materiales de densidad intermedia", "manto"], ["hierro puro", "núcleo"], ["rocas ligeras", "corteza"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: mc
opciones_explicitas: ["manto", "núcleo", "corteza"]

enunciado: "La capa situada entre la corteza y el núcleo, compuesta por ___ , se denomina ___."

respuesta: resp

explicacion: |
  El manto está compuesto por materiales con una densidad intermedia, situándose debajo de la corteza.
```

### 5 — Densidad del núcleo
```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["nucleo", "densidad"]

variables:
  escenario: [["muy alta", "núcleo"], ["media", "manto"], ["baja", "corteza"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: input
tolerancia_abs: 0

enunciado: "Si la densidad de la corteza es baja y la del manto es media, la densidad del núcleo es ___."

respuesta: "muy alta"

explicacion: |
  Debido a la gravedad, los materiales con densidad muy alta (como el hierro) se acumularon en el centro del planeta.
```