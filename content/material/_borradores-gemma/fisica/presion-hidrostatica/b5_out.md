### 1 — Presión en un buzo
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["fluidos", "presion"]

variables:
  escenarios: [["densidad_agua_dulce", 1000, "densidad_agua_salada", 1030, "profundidad_buzo", 15, "profundidad_buzo", 30], ["densidad_agua_dulce", 1000, "densidad_agua_salada", 1030, "profundidad_buzo", 10, "profundidad_buzo", 25], ["densidad_agua_dulce", 1000, "densidad_agua_salada", 1030, "profundidad_buzo", 5, "profundidad_buzo", 40]]
  idx: uno_de([0, 1, 2])
  rho: escenario[idx][1]
  h: escenario[idx][3]

respuesta: rho * g * h
tipo: input
tolerancia_abs: 1

enunciado: "Un buzo se encuentra sumergido en un fluido cuya densidad es de {rho} kg/m³ a una profundidad de {h} metros. ¿Cuál es la presión hidrostática que soporta (en Pascales)?"

pasos:
  - "Identificar la densidad del fluido (ρ)."
  - "Identificar la profundidad (h)."
  - "Multiplicar ρ * g * h (usando g = 9.8 m/s²)."

explicacion: |
  La presión hidrostática se calcula con la fórmula P = ρ · g · h.
  Para este caso: {rho} * 9.8 * {h} = {rho * g * h} Pa.
```

### 2 — Comparación de presiones
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["comparacion", "fluidos"]

variables:
  datos: [["agua_dulce", 1000, "agua_salada", 1030], ["agua_dulce", 1000, "mercurio", 13600], ["agua_dulce", 1000, "aceite", 800]]
  idx: uno_de([0, 1, 2])
  rho1: datos[idx][0]
  rho2: datos[idx][2]

respuesta: rho1 < rho2
tipo: vf

enunciado: "Si dos recipientes iguales están llenos con {rho1} y {rho2} respectivamente, y se miden a la misma profundidad, ¿la presión en el recipiente con {rho1} es menor que en el de {rho2}?"

explicacion: |
  La presión hidrostática es directamente proporcional a la densidad del fluido. Como la densidad de {rho1} es menor que la de {rho2}, la presión también lo será.
```

### 3 — El misterio del tanque
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "basico"
  tags: ["completar", "fluidos"]

variables:
  casos: [["10", "20", "500"], ["5", "40", "200"], ["2", "100", "2000"]]
  idx: uno_de([0, 1, 2])
  rho: 1000
  h: casos[idx][1]
  p_calc: rho * g * h

respuesta: tabla[idx][2]
tipo: completar
respuestas_validas: ["500", "200", "2000"]

enunciado: "Un tanque con un fluido de densidad 1000 kg/m³ tiene una profundidad de ___ metros. Si la presión hidrostática en el fondo es de ___ Pa, ¿cuál es la profundidad?"

explicacion: |
  Despejando la fórmula P = ρ · g · h para la profundidad (h):
  h = P / (ρ · g)
  En este caso: {p_calc} / (1000 * 9.8) ≈ {h} m.
```

### 4 — Profundidad y presión
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "intermedio"
  tags: ["mc", "fluidos"]

variables:
  escenarios: [["10000", "10300"], ["25000", "26500"], ["50000", "52000"]]
  idx: uno_de([0, 1, 2])
  p_base: escenarios[idx][0]
  p_sal: escenarios[idx][1]

respuesta: "Presión en agua salada"
tipo: mc
opciones_explicitas: ["Presión en agua dulce", "Presión en agua salada"]

enunciado: "Si comparamos un objeto a la misma profundidad en agua dulce (densidad 1000 kg/m³) y agua salada (densidad 1030 kg/m³), ¿en qué fluido la presión será de aproximadamente {p_sal} Pa?"

explicacion: |
  A mayor densidad, mayor presión hidrostática. El agua salada es más densa, por lo tanto ejerce una presión mayor ({p_sal} Pa) que el agua dulce ({p_base} Pa).
```

### 5 — Orden de presiones
```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatic"
  nivel: "intermedio"
  tags: ["ordenar", "fluidos"]

variables:
  niveles: [["1m", "5m", "10m"], ["10m", "2m", "5m"], ["20m", "10m", "30m"]]
  idx: uno_de([0, 1, 2])

respuesta: ["1m", "5m", "10m"]
tipo: ordenar
opciones_explicitas: ["1m", "5m", "10m"]

enunciado: "Ordena las profundidades de un buzo de menor a mayor presión hidrostática (asumiendo el mismo fluido):"

explicacion: |
  La presión hidrostática aumenta linealmente con la profundidad. Por lo tanto, el orden de menor a mayor presión corresponde al orden de menor a mayor profundidad.
```