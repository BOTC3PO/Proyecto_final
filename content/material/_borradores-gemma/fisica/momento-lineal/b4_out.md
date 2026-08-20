### 1 — Momento vs Impulso
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: falso
tipo: vf

enunciado: "El momento lineal de un objeto depende únicamente de su masa, independientemente de su velocidad."

explicacion: |
  El momento lineal se define como el producto de la masa por la velocidad ($p = m \cdot v$). Por lo tanto, la velocidad es un factor determinante.
```

### 2 — Relación entre Masa y Momento
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  escenario: uno_de([
    [10, 2, "un objeto A de 10 kg a 2 m/s"],
    [5, 4, "un objeto B de 5 kg a 4 m/s"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][0] * escenario[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Calcula el módulo del momento lineal para {escenario[idx][2]}."

pasos:
  - "Identificar la masa (m) y la velocidad (v) del objeto."
  - "Multiplicar la masa por la velocidad ($p = m \cdot v$)."

explicacion: |
  El momento lineal es una magnitud vectorial que depende tanto de la masa como de la velocidad. En el caso seleccionado, el resultado es {escenario[idx][0] * escenario[idx][1]} kg·m/s.
```

### 3 — Momento vs Cantidad de Movimiento
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "cantidad de movimiento"
tipo: completar
respuestas_validas: ["cantidad de movimiento", "cantidad de movimiento"]

enunciado: "En muchos contextos académicos, el concepto de momento lineal es sinónimo de ___."

explicacion: |
  Tanto 'momento lineal' como 'cantidad de movimiento' se refieren a la misma magnitud física ($p = m \cdot v$).
```

### 4 — Comparación de Magnitudes
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "dimensiones"]

respuesta: "vectorial"
tipo: mc
opciones_explicitas: ["escalar", "vectorial", "unidades de fuerza", "aceleración"]

enunciado: "A diferencia de la masa, que es una magnitud escalar, el momento lineal es una magnitud ___."

explicacion: |
  El momento lineal posee dirección y sentido (definidos por el vector velocidad), por lo que es una magnitud vectorial.
```

### 5 — Relación Momento e Impulso
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["teorema", "impulso"]

variables:
  caso: uno_de([
    ["un choque de alta velocidad", "un objeto con gran masa en reposo"],
    ["un objeto con gran masa en reposo", "un choque de alta velocidad"]
  ])
  idx: uno_de([0, 1])

respuesta: "impulso"
tipo: completar
respuestas_validas: ["impulso", "impulso"]

enunciado: "El cambio en el momento lineal de un objeto es igual al ___ aplicado sobre dicho objeto."

explicacion: |
  Según el teorema del impulso, el cambio en la cantidad de movimiento ($\Delta p$) es igual al impulso ($J = F \cdot \Delta t$). En el caso de {caso[idx][0]}, se observa este principio.
```