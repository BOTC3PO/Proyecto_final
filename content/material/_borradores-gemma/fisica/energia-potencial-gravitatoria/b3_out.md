### 1 — La dependencia de la altura
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "h"
tipo: completar
respuestas_validas: ["h", "la altura", "la posición vertical"]

enunciado: "En la fórmula de la energía potencial gravitatoria $E_p = m \cdot g \cdot h$, la variable $h$ representa la ___ respecto a un nivel de referencia."

explicacion: |
  La energía potencial gravitatoria depende de la posición vertical (altura) del objeto respecto a un punto de referencia elegido. Si cambias el nivel de referencia, la energía potencial cambia, aunque el objeto sea el mismo.
```

### 2 — El error de la masa y la aceleración
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "relacion_variables"]

variables:
  escenario: uno_de([
    ["un objeto de 2 kg", 2, "2 kg"],
    ["un objeto de 5 kg", 5, "5 kg"],
    ["un objeto de 10 kg", 10, "10 kg"]
  ])

respuesta: "a"
tipo: mc
opciones_explicitas: ["La energía es mayor", "La energía es menor", "La energía es igual"]

enunciado: "Si duplicamos la masa de {escenario[0]} manteniendo su altura y la gravedad constantes, la energía potencial gravitatoria será: ___"

explicacion: |
  Como la energía potencial es directamente proporcional a la masa ($E_p \propto m$), si la masa se duplica, la energía potencial también se duplica (es mayor).
```

### 3 — ¿Depende de la trayectoria?
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "trayectoria"]

respuesta: falso
tipo: vf

enunciado: "La energía potencial gravitatoria de un objeto depende de la trayectoria seguida para alcanzar su altura actual (por ejemplo, si subió en línea recta o en zigzag)."

explicacion: |
  La energía potencial es una función de estado, lo que significa que solo depende de la posición inicial y la posición final (la altura), no del camino recorrido.
```

### 4 — Cálculo de altura desconocida
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

variables:
  datos: uno_de([
    [100, 9.8, 50],
    [50, 9.8, 20],
    [200, 9.8, 100]
  ])

respuesta: "datos[2]"
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto de {datos[0]} kg tiene una energía potencial de {datos[2]} J. Si la aceleración de la gravedad es de {datos[1]} m/s², ¿a qué altura se encuentra?"

pasos:
  - "Identificar los valores: m = {datos[0]}, Ep = {datos[2]}, g = {datos[1]}"
  - "Despejar la altura de la fórmula: h = Ep / (m * g)"
  - "Calcular el resultado final."

explicacion: |
  Usando la fórmula $h = E_p / (m \cdot g)$, obtenemos: $h = {datos[2]} / ({datos[0]} \cdot {datos[1]}) = {redondear(datos[2]/(datos[0]*datos[1]), 2)}$ m.
```

### 5 — El orden de los factores
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "orden"]

respuesta: ["m", "g", "h"]
tipo: ordenar

opciones_explicitas: ["h", "g", "m"]

enunciado: "Para calcular la energía potencial gravitatoria siguiendo la estructura de la fórmula $E_p = m \cdot g \cdot h$, el orden de los factores es:"

explicacion: |
  Aunque el orden de los factores no altera el producto, la fórmula estándar se presenta como Masa $\cdot$ Gravedad $\cdot$ Altura.
```