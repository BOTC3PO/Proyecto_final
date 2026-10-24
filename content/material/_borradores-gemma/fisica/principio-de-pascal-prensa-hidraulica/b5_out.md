### 1 — La prensa hidráulica básica
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["presion", "fluido", "pascal"]

variables:
  escenario: uno_de([
    ["F1=100, A1=0.01, A2=0.1", "1000"],
    ["F1=50, A1=0.02, A2=0.1", "250"],
    ["F1=200, A1=0.05, A2=0.2", "200"]
  ])
  f1: escenario[0]
  a1: escenario[1]
  a2: escenario[2]
  r: escenario[3]

tipo: completar
respuestas_validas: [r]
respuesta: r

enunciado: "En una prensa hidráulica, se aplica una fuerza de {f1} N sobre un pistón de área {a1} m². Si el segundo pistón tiene un área de {a2} m², ¿cuál es la fuerza resultante en el segundo pistón en Newtons?"

pasos:
  - "Calcular la presión aplicada: P = F1 / A1"
  - "La presión se transmite íntegramente, por lo que P2 = P1"
  - "Calcular la fuerza resultante: F2 = P1 * A2"

explicacion: |
  Según el Principio de Pascal, la presión es constante en todo el fluido incompresible:
  P = F1 / A1 = {f1} / {a1} = {r/a2} Pa (en el caso de ejemplo).
  F2 = P * A2 = {r} N.
```

### 2 — Verdad o Falso: Fluido incompresible
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Para que una prensa hidráulica funcione de manera eficiente según el principio de Pascal, el fluido utilizado debe ser incompresible (su volumen no cambia significativamente con la presión)."

explicacion: |
  Si el fluido fuera compresible (como un gas), parte de la energía se perdería en reducir el volumen del gas en lugar de transmitir la presión para mover el pistón de salida.
```

### 3 — El elevador de autos
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "intermedio"
  tags: ["aplicacion", "presion"]

variables:
  datos: [
    ["P=5000, A1=0.05, A2=0.5", "50000"],
    ["P=2000, A1=0.1, A2=1.0", "2000"],
    ["P=10000, A1=0.02, A2=0.2", "10000"]
  ]
  idx: uno_de([0,1,2])
  p: datos[idx][0]
  a1: datos[idx][1]
  a2: datos[idx][2]
  f2: datos[idx][3]

tipo: mc
opciones_explicitas: ["1000 N", "5000 N", "50000 N", "100000 N"]
respuesta: f2

enunciado: "Un elevador hidráulico en un taller mecánico opera con una presión constante de {p} Pa. Si el pistón de entrada tiene un área de {a1} m² y el pistón que levanta el vehículo tiene un área de {a2} m², ¿cuál es la fuerza máxima que puede ejercer el segundo pistón?"

explicacion: |
  La presión es la misma en ambos puntos: P = F1/A1 = F2/A2.
  Por lo tanto, F2 = P * A2.
  En este caso: {f2} N.
```

### 4 — Componentes de un sistema hidráulico
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "basico"
  tags: ["componentes"]

tipo: ordenar
opciones_explicitas: ["Aplicación de fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]
respuesta: ["Aplicación de fuerza en pistón pequeño", "Transmisión de presión por el fluido", "Levantamiento de carga en pistón grande"]

enunciado: "Ordena lógicamente los pasos que ocurren en una prensa hidráulica desde que se aplica la fuerza inicial hasta que se obtiene el trabajo mecánico:"

explicacion: |
  1. Se aplica una fuerza en un área pequeña.
  2. La presión se transmite íntegramente por el fluido (Pascal).
  3. La presión actúa sobre el área grande, multiplicando la fuerza resultante.
```

### 5 — Relación de áreas y fuerzas
```
metadata:
  materia: "fisica"
  tema: "principio_de_pascal_prensa_hidraulica"
  nivel: "avanzado"
  tags: ["proporcionalidad"]

variables:
  escenario: uno_de([
    ["A2=10, A1=2", "5"],
    ["A2=5, A1=1", "5"],
    ["A2=100, A1=10", "10"]
  ])
  a2: escenario[0]
  a1: escenario[1]
  ratio: escenario[2]

tipo: mc
opciones_explicitas: ["El factor de multiplicación es 2", "El factor de multiplicación es 5", "El factor de multiplicación es 10", "La fuerza no cambia"]
respuesta: ratio

enunciado: "Si el área del pistón de salida (A2) es {a2} m² y el área del pistón de entrada (A1) es {a1} m², ¿por cuánto se multiplica la fuerza aplicada según el principio de Pascal?"

explicacion: |
  La relación de fuerzas es igual a la relación de áreas: F2/F1 = A2/A1.
  En este caso, el factor es {ratio}.
```