### 1 — Definición de corriente eléctrica
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["definicion", "carga"]

respuesta: "flujo de carga"
tipo: completar
respuestas_validas: ["flujo de carga", "movimiento de cargas"]

enunciado: "La corriente eléctrica se define físicamente como el ___ a través de un conductor."

explicacion: |
  La corriente eléctrica es el flujo de carga eléctrica (producido principalmente por electrones en metales) que atraviesa una sección de un conductor por unidad de tiempo.
```

### 2 — Unidad de medida de la intensidad
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

variables:
  opciones: [["Amperio", "Voltio", "Ohmio", "Coulomb"]]

respuesta: opciones[uno_de([0,1,2,3])]
tipo: mc
opciones_explicitas: ["Amperio", "Voltio", "Ohmio", "Coulomb"]

enunciado: "La unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional es el ___."

explicacion: |
  El Amperio (A) es la unidad de intensidad de corriente. El Voltio (V) es potencial, el Ohmio (Ω) es resistencia y el Coulomb (C) es carga.
```

### 3 — Relación carga y tiempo
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "intensidad"]

variables:
  escenario: [[10, 2], [20, 4], [5, 5], [12, 3]]
  idx: uno_de([0,1,2,3])

respuesta: escenario[idx][0] / escenario[idx][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una carga de {escenario[idx][0]} Coulombs atraviesa una sección de un conductor en un tiempo de {escenario[idx][1]} segundos, ¿cuál es la intensidad de corriente eléctrica?"

pasos:
  - "Calcular la intensidad usando la fórmula: I = Q / t"
  - "Dividir la carga (C) por el tiempo (s)"

explicacion: |
  La intensidad de corriente I se calcula como la carga total Q dividida por el tiempo t: I = Q/t. En este caso: {escenario[idx][0]} / {escenario[idx][1]} = {escenario[idx][0] / escenario[idx][1]} A.
```

### 4 — Naturaleza del movimiento de carga
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["verdadero_falso", "electrones"]

respuesta: falso
tipo: vf

enunciado: "En un cable de cobre, la corriente eléctrica es producida por el movimiento de protones a través del metal."

explicacion: |
  Falso. En los metales conductores, la corriente es transportada por el movimiento de electrones libres, no de protones (los cuales están fijos en el núcleo atómico).
```

### 5 — Componentes de la corriente
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: ["Carga eléctrica", "Conductor", "Fuente de energía"]
tipo: ordenar

opciones_explicitas: ["Carga eléctrica", "Conductor", "Fuente de energía"]

enunciado: "Para que exista una corriente eléctrica en un circuito simple, se requiere que los elementos estén presentes en un orden lógico de dependencia (desde el origen del movimiento hasta el medio):"

explicacion: |
  Para que haya corriente se necesita una fuente que impulse las cargas, las cargas que se mueven y un camino (conductor) para que lo hagan.
```