### 1 — Concepto de Presión
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La fuerza aplicada por unidad de área", "La fuerza total aplicada sobre un objeto", "La aceleración producida por una fuerza", "La energía transferida por unidad de superficie"]

enunciado: "La presión se define físicamente como la ___ aplicada sobre una superficie."

respuesta: "La fuerza aplicada por unidad de área"

explicacion: |
  La presión (P) es una magnitud escalar que mide la razón entre la fuerza perpendicular aplicada (F) y el área (A) sobre la que actúa: P = F/A.
```

### 2 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: mc
opciones_explicitas: ["Newton (N)", "Pascal (Pa)", "Joule (J)", "Watt (W)"]

enunciado: "En el Sistema Internacional de Unidades, la unidad de presión es el ___."

respuesta: "Pascal (Pa)"

explicacion: |
  Un Pascal (Pa) equivale a un Newton por metro cuadrado (1 N/m²).
```

### 3 — Relación Inversa Área-Presión
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["relacion_proporcional", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["2", "4"], ["5", "10"]] # [fuerza, area]

tipo: vf
enunciado: "Si mantenemos la fuerza constante, al aumentar el área de contacto, la presión ___."

respuesta: falso

explicacion: |
  Dado que la fórmula es P = F/A, la presión es inversamente proporcional al área. Si el área aumenta, la presión disminuye.
```

### 4 — Cálculo de Presión Simple
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["calculo", "aplicacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  escenario: [
    ["100", "2"], # [fuerza, area]
    ["50", "5"],
    ["200", "4"]
  ]

tipo: input
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[caso_idx][0]} N sobre una superficie de {escenario[caso_idx][1]} m². ¿Cuál es la presión resultante en Pa?"

pasos:
  - "Identificar la fuerza (F) y el área (A)."
  - "Aplicar la fórmula P = F/A."

respuesta: escenario[caso_idx][0] / escenario[caso_idx][1]

explicacion: |
  Utilizando la fórmula P = F/A, dividimos la fuerza entre el área proporcionada.
```

### 5 — Componentes de la Presión
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["completar", "terminologia"]

tipo: completar
respuestas_validas: ["fuerza", "área"]

enunciado: "Para calcular la presión, es necesario conocer la ___ aplicada y el ___ sobre el cual actúa."

respuesta: ["fuerza", "área"]

explicacion: |
  La presión depende directamente de la magnitud de la fuerza y de la extensión de la superficie (área) donde se distribuye dicha fuerza.
```