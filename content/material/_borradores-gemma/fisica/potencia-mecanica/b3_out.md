### 1 — Relación entre Trabajo y Potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "trabajo"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto realiza el mismo trabajo que otro, pero lo hace en la mitad del tiempo, ambos han desarrollado la misma potencia mecánica."

explicacion: |
  La potencia se define como $P = W/t$. Si el tiempo disminuye, la potencia aumenta. Por lo tanto, quien realiza el mismo trabajo en menos tiempo es más potente.
```

### 2 — Unidades de la Potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

variables:
  escenario: uno_de([
    ["100 J en 5 s", "20"],
    ["50 J en 2 s", "25"],
    ["10 J en 10 s", "1"]
  ])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["20", "25", "1"]

enunciado: "Calcula la potencia mecánica realizada en el siguiente caso: {escenario[0]}."

pasos:
  - "Identifica el trabajo realizado (W): {escenario[0].split(' ')[0]} J"
  - "Identifica el tiempo empleado (t): {escenario[0].split(' ')[2]} s"
  - "Aplica la fórmula P = W / t"

explicacion: |
  La potencia se calcula dividiendo el trabajo (Joules) por el tiempo (segundos), resultando en Watts (W).
```

### 3 — El error de la velocidad constante
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["dinamica", "conceptos"]

respuesta: "La potencia mecánica depende de la fuerza aplicada y la velocidad."
tipo: mc
opciones_explicitas: [
  "La potencia mecánica depende únicamente de la fuerza aplicada.",
  "La potencia mecánica depende únicamente de la velocidad del objeto.",
  "La potencia mecánica depende de la fuerza aplicada y la velocidad.",
  "La potencia mecánica no depende de la fuerza si la velocidad es constante."
]

enunciado: "Un error común es pensar que si un objeto se mueve a velocidad constante, la potencia es cero. ¿Cuál es la relación correcta entre potencia, fuerza y velocidad?"

explicacion: |
  Para un objeto en movimiento, la potencia instantánea se puede expresar como $P = F \cdot v$. Aunque el trabajo neto sea cero en un ciclo cerrado, la potencia mecánica de la fuerza aplicada puede ser distinta de cero.
```

### 4 — Análisis de la fórmula de potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["analisis_dimensional"]

respuesta: "verdadero"
tipo: vf

enunciado: "Si duplicamos la fuerza aplicada a un objeto y también duplicamos su velocidad, la potencia mecánica resultante se cuadruplica."

explicacion: |
  Dado que $P = F \cdot v$, si $F' = 2F$ y $v' = 2v$, entonces $P' = (2F) \cdot (2v) = 4(F \cdot v)$, es decir, $4P$.
```

### 5 — Procedimiento para calcular potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "avanzado"
  tags: ["procedimiento", "calculo"]

variables:
  datos: uno_de([
    ["1000 N", "5 m/s", "2 s"],
    ["500 N", "10 m/s", "5 s"],
    ["200 N", "2 m/s", "10 s"]
  ])

respuesta: [
    "Calcular el trabajo realizado (W = F * d)",
    "Identificar el tiempo total (t)",
    "Dividir el trabajo por el tiempo (P = W / t)"
  ]
tipo: ordenar
opciones_explicitas: [
  "Calcular el trabajo realizado (W = F * d)",
  "Identificar el tiempo total (t)",
  "Dividir el trabajo por el tiempo (P = W / t)",
  "Multiplicar la fuerza por el tiempo (P = F * t)"
]

enunciado: "Para calcular la potencia mecánica de un motor que levanta una carga de {datos[0]} con una velocidad de {datos[1]} durante {datos[2]}, ¿cuál es el orden lógico de resolución?"

explicacion: |
  Primero debemos obtener la energía transferida (Trabajo) o usar la relación directa de potencia instantánea, y finalmente dividir por el intervalo de tiempo.
```