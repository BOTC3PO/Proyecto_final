### 1 — Definición de Diferencia de Potencial
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "potencial", "definicion"]

tipo: mc
opciones_explicitas: ["La diferencia de energía potencial por unidad de carga", "La velocidad de los electrones en un cable", "La resistencia que ofrece un material al paso de corriente", "La cantidad de electrones en un conductor"]

respuesta: "La diferencia de energía potencial por unidad de carga"

enunciado: "La diferencia de potencial eléctrico entre dos puntos se define físicamente como ___."

explicacion: |
  La diferencia de potencial (V) es el trabajo realizado por unidad de carga para mover una carga de prueba desde un punto a otro.
```

### 2 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["unidades", "voltios"]

tipo: completar
respuestas_validas: ["Voltio", "Volt"]

respuesta: "Voltio"

enunciado: "La unidad de medida de la diferencia de potencial en el Sistema Internacional es el ___."

explicacion: |
  El Voltio (V) es la unidad estándar para medir la tensión o diferencia de potencial eléctrico.
```

### 3 — Relación Carga y Trabajo
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["trabajo", "carga", "formula"]

variables:
  escenario: uno_de([[10, 20], [50, 100]])

tipo: input
tolerancia_abs: 0.01

enunciado: "Se realiza un trabajo de {escenario[0]} Joules para mover una carga de {escenario[1]} Coulombs entre dos puntos. ¿Cuál es la diferencia de potencial en Voltios?"

pasos:
  - "Identificar el trabajo (W) y la carga (Q)."
  - "Aplicar la fórmula V = W / Q."

respuesta: "escenario[0] / escenario[1]"

explicacion: |
  Usando la fórmula V = W/Q: {escenario[0]}J / {escenario[1]}C = {escenario[0]/escenario[1]} V.
```

### 4 — Verdad o Falso: Movimiento de Cargas
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["movimiento", "cargas"]

tipo: vf

enunciado: "Para que exista una corriente eléctrica en un conductor, debe existir una diferencia de potencial entre sus extremos."

respuesta: verdadero

explicacion: |
  Verdadero. La diferencia de potencial es la "fuerza" o presión que impulsa a las cargas a moverse a través del circuito.
```

### 5 — Conceptos Asociados
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["conceptos", "vocabulario"]

tipo: mc
opciones_explicitas: ["Voltaje", "Resistencia", "Intensidad"]

respuesta: "Voltaje"

enunciado: "En el lenguaje cotidiano, el término ___ se utiliza frecuentemente como sinónimo de diferencia de potencial eléctrica."

explicacion: |
  Aunque técnicamente son conceptos distintos, en el uso común se emplea 'voltaje' para referirse a la tensión eléctrica.
```