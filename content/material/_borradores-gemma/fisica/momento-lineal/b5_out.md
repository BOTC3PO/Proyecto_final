### 1 — El camión y el auto
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["cantidad_de_movimiento", "cinematica"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    [1500, 20, 30000],
    [1200, 10, 12000]
  ]

enunciado: "Un vehículo de masa de {datos[escenario_idx][0]} kg se desplaza con una velocidad de {datos[escenario_idx][1]} m/s. ¿Cuál es su cantidad de movimiento (p)?"

opciones_explicitas: ["25000 kg·m/s", "30000 kg·m/s", "15000 kg·m/s", "45000 kg·m/s"]
respuesta: datos[escenario_idx][2]
tipo: mc

explicacion: |
  El momento lineal se calcula con la fórmula p = m · v.
  En este caso: {datos[escenario_idx][0]} kg * {datos[escenario_idx][1]} m/s = {datos[escenario_idx][2]} kg·m/s.
```

### 2 — Comparación de movimiento
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "intermedio"
  tags: ["comparacion", "masa", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    [10, 5, 50],
    [5, 10, 50]
  ]

enunciado: "Si un objeto A tiene masa {escenario[escenario_idx][0]} kg y velocidad {escenario[escenario_idx][1]} m/s, y un objeto B tiene la misma cantidad de movimiento que A, ¿cuál es su valor?"

opciones_explicitas: ["50 kg·m/s", "10 kg·m/s", "100 kg·m/s", "25 kg·m/s"]
respuesta: escenario[escenario_idx][2]
tipo: mc

explicacion: |
  El momento lineal es el producto de la masa por la velocidad. 
  Para el escenario seleccionado: {escenario[escenario_idx][0]} * {escenario[escenario_idx][1]} = {escenario[escenario_idx][2]}.
```

### 3 — Concepto de inercia en movimiento
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["teoria", "concepto"]

enunciado: "Si un objeto con masa constante aumenta su velocidad, su cantidad de movimiento ___."

respuestas_validas: ["aumenta", "disminuye", "se mantiene"]
respuesta: "aumenta"
tipo: completar

explicacion: |
  Dado que p = m · v, si la masa (m) es constante y la velocidad (v) aumenta, el producto p debe aumentar proporcionalmente.
```

### 4 — El impacto de un proyectil
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    [0.05, 400, 20],
    [0.02, 600, 12]
  ]

enunciado: "Una bala de masa {datos[escenario_idx][0]} kg viaja a una velocidad de {datos[escenario_idx][1]} m/s. Al impactar un bloque, su velocidad se reduce a 5 m/s. ¿Cuál es la magnitud del cambio en su momento lineal (Δp)?"

pasos:
  - "Calcular el momento inicial: p_inicial = m * v_inicial"
  - "Calcular el momento final: p_final = m * v_final"
  - "Calcular la diferencia: Δp = p_inicial - p_final"

respuesta: datos[escenario_idx][2]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Δp = m(v_i - v_f).
  Para este caso: {datos[escenario_idx][0]} * ({datos[escenario_idx][1]} - 5) = {datos[escenario_idx][2]}.
```

### 5 — Verificación de igualdad
```
metadata:
  materia: "fisica"
  tema: "momento_lineal"
  nivel: "basico"
  tags: ["verdadero_falso", "propiedades"]

enunciado: "Si dos objetos tienen la misma masa pero el doble de velocidad, el segundo objeto tiene el doble de cantidad de movimiento que el primero. ¿Es esto verdadero?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  Como p es directamente proporcional a la velocidad (p ∝ v), si la masa es constante y la velocidad se duplica, el momento lineal también se duplica.
```