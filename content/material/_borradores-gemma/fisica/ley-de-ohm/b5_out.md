### 1 — Resistencia en un circuito doméstico
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[120.0, "2.0", "60.0"], [220.0, "5.0", "44.0"], [12.0, "0.5", "24.0"]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: r
tipo: completar
respuestas_validas: ["60.0", "44.0", "24.0"]

enunciado: "Un dispositivo eléctrico se conecta a una fuente de tensión de {v} V y por él circula una corriente de {i} A. ¿Cuál es el valor de la resistencia del dispositivo?"

explicacion: |
  Aplicando la Ley de Ohm: R = V / I.
  En este caso: {v} / {i} = {r} Ω.
```

### 2 — Corriente en una linterna
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["corriente", "voltaje", "resistencia"]

variables:
  escenario: uno_de([[9.0, "0.2"], [12.0, "0.5"], [3.0, "1.0"]])
  v: escenario[0]
  r: escenario[1]

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["0.2", "0.5", "1.0"]

enunciado: "Una linterna funciona con una batería de {v} V y tiene una resistencia interna de {r} Ω. ¿Qué intensidad de corriente circula por el circuito?"

explicacion: |
  Usamos la fórmula I = V / R.
  I = {v} / {r} = {escenario[2]} A.
```

### 3 — Relación entre voltaje y corriente
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[10.0, 2.0, 5.0], [20.0, 4.0, 5.0], [50.0, 10.0, 5.0]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: verdadero
tipo: vf

enunciado: "Si mantenemos una resistencia constante de {r} Ω, al duplicar el voltaje de {v} V a {v*2} V, la corriente debe duplicarse de {i} A a {i*2} A. ¿Es esto correcto?"

explicacion: |
  Verdadero. Según la Ley de Ohm (V = I·R), el voltaje y la corriente son directamente proporcionales cuando la resistencia es constante.
```

### 4 — Cálculo de voltaje en un componente
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["voltaje", "corriente", "resistencia"]

variables:
  escenario: uno_de([[5.0, "0.1"], [10.0, "2.0"], [12.0, "0.5"]])
  v: escenario[0]
  i: escenario[1]
  r: escenario[2]

respuesta: v
tipo: completar
respuestas_validas: ["5.0", "10.0", "12.0"]

enunciado: "Un componente electrónico tiene una resistencia de {r} Ω y es atravesado por una corriente de {i} A. ¿Qué voltaje se aplica a dicho componente?"

explicacion: |
  La fórmula es V = I · R.
  V = {i} * {r} = {v} V.
```

### 5 — Pasos para resolver un circuito
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

respuesta: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo"]
tipo: ordenar
opciones_explicitas: ["Identificar datos", "Seleccionar fórmula", "Realizar cálculo", "Verificar unidades"]

enunciado: "Ordena los pasos lógicos para resolver un problema de Ley de Ohm donde conoces la resistencia y la corriente para hallar el voltaje:"

explicacion: |
  Para resolver problemas físicos de forma sistemática se debe:
  1. Identificar los datos conocidos.
  2. Seleccionar la fórmula adecuada (V=I·R, I=V/R o R=V/I).
  3. Realizar el cálculo matemático.
```