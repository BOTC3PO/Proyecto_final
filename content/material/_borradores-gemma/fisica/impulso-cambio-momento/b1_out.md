### 1 — Definición de Impulso
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "tiempo"]

respuesta: "J"
tipo: "completar"
respuestas_validas: ["J", "impulso"]

enunciado: "El producto de la fuerza aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa se denomina ___."

explicacion: |
  El impulso (J) se define como el producto de la fuerza constante por el tiempo de aplicación: J = F · Δt.
```

### 2 — Relación con el Momento Lineal
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teorema_impulso_momento"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual al cambio en su momento lineal (Δp)."

explicacion: |
  El teorema establece que J = Δp, lo que significa que el impulso aplicado es igual a la variación de la cantidad de movimiento.
```

### 3 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "SI"]

variables:
  opciones: [["N·s", "kg·m/s"], ["kg·m/s", "N·s"], ["N/s", "kg·m/s"]]
  idx: uno_de([0, 1])

respuesta: opciones[idx][0]
tipo: "mc"
opciones_explicitas: ["N·s", "kg·m/s", "N/s"]

enunciado: "En el Sistema Internacional, la unidad del impulso es ___ (nota: ambas son equivalentes, elige la que representa la definición directa de F·Δt)."

explicacion: |
  Tanto N·s como kg·m/s son unidades válidas para el impulso debido a la equivalencia dimensional.
```

### 4 — Concepto de Momento Lineal
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["momento_lineal", "definicion"]

respuesta: "m * v"
tipo: "completar"
respuestas_validas: ["m * v", "m*v", "p = m*v"]

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal (p) es una magnitud vectorial definida como p = m · v.
```

### 5 — Relación de variables
```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["relacion_variables"]

respuesta: "falso"
tipo: "vf"

enunciado: "Si se mantiene constante la fuerza aplicada sobre un objeto, aumentar el tiempo de aplicación reducirá el cambio en el momento lineal."

explicacion: |
  Como J = Δp y J = F · Δt, si la fuerza es constante, el cambio en el momento es directamente proporcional al tiempo. A mayor tiempo, mayor cambio de momento.
```