### 1 — El salto del escalador
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "gravitacion"]

variables:
  escenario: uno_de([[0.5, "50"], [1.5, "150"], [2.0, "200"]])
  m: escenario[0]
  h: escenario[1]
  g: 9.8

respuesta: m * g * h
tipo: input
tolerancia_abs: 0.1

enunciado: "Un escalador de masa de {m} kg se encuentra a una altura de {h} metros sobre el suelo. ¿Cuál es su energía potencial gravitatoria en Joules?"

pasos:
  - "Identificar la masa (m = {m} kg)"
  - "Identificar la altura (h = {h} m)"
  - "Identificar la aceleración de la gravedad (g = {g} m/s²)"
  - "Aplicar la fórmula Ep = m * g * h"

explicacion: |
  La energía potencial se calcula multiplicando la masa por la gravedad por la altura:
  Ep = {m} kg * {g} m/s² * {h} m = {m * g * h} J.
```

### 2 — El almacén de suministros
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "logistica"]

variables:
  datos: [[10, 980], [20, 1960], [5, 490]]
  idx: uno_de([0, 1, 2])
  m: datos[idx][0]
  ep: datos[idx][1]

respuesta: ep == (m * 9.8 * 10)
tipo: vf

enunciado: "Un paquete de {m} kg se encuentra en un estante a 10 metros de altura. Si la energía potencial es de {ep} J, ¿es correcto afirmar que la gravedad aplicada fue de 9.8 m/s²?"

explicacion: |
  Para verificar: Ep = m * g * h => 9.8 = Ep / (m * h).
  En este caso: {ep} / ({m} * 10) = {ep / (m * 10)}.
  El resultado es {ep / (m * 10)} m/s².
```

### 3 — El elevador de carga
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "mecanica"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Si un elevador de carga sube desde el primer piso hasta el quinto piso, su energía potencial gravitatoria respecto al suelo: ___"

explicacion: |
  Al aumentar la altura (h) en la fórmula Ep = m * g * h, la energía potencial también aumenta.
```

### 4 — El experimento de laboratorio
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "calculo"]

variables:
  caso: uno_de([[2, 5, 10], [5, 2, 10], [10, 5, 2]])
  m: caso[0]
  h: caso[1]
  ep: caso[2]

respuesta: ["m * g * h", "m * g / h", "m / (g * h)", "g * h / m"]
tipo: ordenar

opciones_explicitas: ["m * g * h", "m * g / h", "m / (g * h)", "g * h / m"]

enunciado: "Para un objeto de {m} kg a una altura de {h} m, ordena las expresiones de modo que la última sea la fórmula correcta para calcular su energía potencial (Ep = {ep} J):"

explicacion: |
  La fórmula correcta es el producto de la masa, la gravedad y la altura: m * g * h.
```

### 5 — El dron de rescate
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "drones"]

variables:
  escenario: uno_de([[2, 50], [5, 100], [1, 20]])
  m: escenario[0]
  h: escenario[1]

respuesta: "500"
tipo: completar
respuestas_validas: ["500", "500.0", "500.00"]

enunciado: "Un dron de {m} kg vuela a una altura de {h} metros. Su energía potencial gravitatoria es de ___ Joules (usa g = 10 m/s²)."

explicacion: |
  Usando la fórmula Ep = m * g * h:
  Ep = {m} kg * 10 m/s² * {h} m = {m * 10 * h} J.
```