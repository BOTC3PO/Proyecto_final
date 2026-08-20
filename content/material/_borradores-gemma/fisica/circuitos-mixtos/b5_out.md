### 1 — Resistencia equivalente en una linterna
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "paralelo"]

variables:
  escenario: uno_de([[10, 5, 2], [20, 10, 4], [5, 5, 5]])
  R1: escenario[0]
  R2: escenario[1]
  R3: escenario[2]

enunciado: "En una linterna, la resistencia R1 está en serie con un bloque en paralelo formado por R2 y R3. ¿Cuál es la resistencia equivalente total del circuito?"

pasos:
  - "Primero, calcula la resistencia equivalente del tramo en paralelo: Rp = 1 / (1/R2 + 1/R3)"
  - "Luego, suma la resistencia R1 al resultado anterior: Req = R1 + Rp"

respuesta: R1 + 1 / (1 / R2 + 1 / R3)
tipo: input
tolerancia_abs: 0.01

explicacion: |
  La resistencia equivalente de un tramo en paralelo se calcula como Rp = (R2 * R3) / (R2 + R3). 
  Al estar en serie con R1, la fórmula final es Req = R1 + Rp.
```

### 2 — Comportamiento de la corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_ohm"]

variables:
  datos: [[12, 2, 4], [24, 3, 6], [6, 2, 2]]
  V: datos[0][0]
  R1: datos[0][1]
  R2: datos[0][2]
  R3: datos[0][3]

enunciado: "Si aplicamos un voltaje de {V}V a un circuito donde R1 está en serie con el paralelo de R2 y R3, y sabiendo que R2 = {R2}Ω y R3 = {R3}Ω, ¿la corriente total que sale de la fuente será mayor que si R2 y R3 estuvieran en serie?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: vf

explicacion: |
  Al poner R2 y R3 en paralelo, la resistencia equivalente del bloque disminuye en comparación con ponerlas en serie. 
  Al disminuir la resistencia total, la corriente total (I = V/Req) aumenta.
```

### 3 — Identificación de componentes
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["conceptos", "serie_paralelo"]

enunciado: "En un circuito mixto, si dos resistencias están conectadas de tal forma que la corriente que pasa por una es la misma que pasa por la otra, decimos que están en ___."

respuestas_validas: ["serie", "paralelo"]
respuesta: "serie"
tipo: completar

explicacion: |
  En una conexión en serie, no hay bifurcaciones, por lo que la intensidad de corriente es constante en todos los puntos del tramo.
```

### 4 — Cálculo de voltaje en un nodo
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["voltaje", "ley_de_kirchhoff"]

variables:
  config: [[10, 2, 4, 3], [20, 5, 5, 5], [12, 4, 2, 2]]
  V_total: config[0][0]
  R1: config[0][1]
  R2: config[0][2]
  R3: config[0][3]
  R_par: 1 / (1 / R2 + 1 / R3)

enunciado: "En un circuito con una fuente de {V_total}V, una resistencia R1 está en serie con un paralelo de R2 y R3. ¿Cuál es el voltaje que cae exclusivamente en el bloque paralelo (R2 y R3)?"

pasos:
  - "Calcula la resistencia equivalente total: Req = R1 + Rp"
  - "Calcula la corriente total: I_total = V_total / Req"
  - "Calcula el voltaje en el paralelo: Vp = I_total * Rp"

respuesta: (V_total / (R1 + 1 / (1 / R2 + 1 / R3))) * (1 / (1 / R2 + 1 / R3))
tipo: input
tolerancia_abs: 0.01

explicacion: |
  El voltaje en el bloque paralelo es igual a la corriente total multiplicada por la resistencia equivalente de ese bloque.
```

### 5 — Orden de resolución de un esquema
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Para resolver un circuito mixto complejo, ¿cuál es el orden lógico de simplificación de los componentes?"

opciones_explicitas: ["Identificar tramos en paralelo", "Simplificar tramos en paralelo a una resistencia equivalente", "Sumar resistencias en serie", "Calcular resistencia total"]
respuesta: ["Identificar tramos en paralelo", "Simplificar tramos en paralelo a una resistencia equivalente", "Sumar resistencias en serie", "Calcular resistencia total"]
tipo: ordenar

explicacion: |
  El método estándar consiste en reducir el circuito por partes, empezando por los nodos más internos (paralelos) para convertir el circuito en uno de serie simple.
```