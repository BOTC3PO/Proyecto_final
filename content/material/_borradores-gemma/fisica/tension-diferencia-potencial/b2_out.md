### 1 — Definición de Diferencia de Potencial
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["voltaje", "potencial", "teoria"]

respuesta: "V"
tipo: mc
opciones_explicitas: ["A", "V", "W", "Ω"]

enunciado: "La unidad de medida de la diferencia de potencial eléctrico en el Sistema Internacional es el ___."

explicacion: |
  La diferencia de potencial (tensión) se mide en Voltios (V), que representa la energía por unidad de carga.
```

### 2 — Relación Carga y Potencial
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["carga", "energia", "calculo"]

variables:
  escenario: uno_de([[12, 24, 36], ["12V", "24V", "36V"]])
  valor_carga: 3
  resultado_energia: escenario[0] * escenario[1]

respuesta: resultado_energia
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una carga de {valor_carga} C se desplaza entre dos puntos con una diferencia de potencial de {escenario[1]}, ¿cuánta energía eléctrica (en Joules) realiza el campo sobre la carga?"

pasos:
  - "Identificar la fórmula: Trabajo (Energía) = Carga (Q) × Diferencia de Potencial (V)"
  - "Sustituir valores: W = 3 C × {escenario[1]} V"
  - "Calcular el producto: 3 * {escenario[0]} = {resultado_energia} J"

explicacion: |
  La energía (W) es el producto de la carga (Q) por el potencial (V). En este caso, {valor_carga} * {escenario[0]} = {resultado_energia} Joules.
```

### 3 — Análisis de Polaridad
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "basico"
  tags: ["polaridad", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "¿Si una carga positiva se mueve de un punto A (10V) a un punto B (25V), el campo eléctrico realiza un trabajo positivo sobre la carga?"

explicacion: |
  Verdadero. Al moverse de un potencial menor a uno mayor, la carga gana energía potencial, lo que implica que el campo realiza un trabajo positivo sobre ella.
```

### 4 — Cálculo de Diferencia de Potencial
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "intermedio"
  tags: ["calculo", "potencial"]

variables:
  puntos: [[10, 50], [5, 20], [100, 10]]
  idx: uno_de([0, 1, 2])
  v_a: puntos[idx][0]
  v_b: puntos[idx][1]
  v_diff: abs(v_a - v_b)

respuesta: v_diff
tipo: input
tolerancia_abs: 0.01

enunciado: "Se tienen dos puntos en un campo eléctrico con potenciales de {v_a} V y {v_b} V respectivamente. ¿Cuál es la magnitud de la diferencia de potencial entre ambos puntos?"

pasos:
  - "Restar los valores de potencial: |{v_a} - {v_b}|"
  - "Calcular la diferencia absoluta: {v_diff} V"

explicacion: |
  La diferencia de potencial es la resta de los potenciales: |{v_a} - {v_b}| = {v_diff} V.
```

### 5 — Relación Trabajo y Potencial (Completar)
```
metadata:
  materia: "fisica"
  tema: "tension_electrica"
  nivel: "avanzado"
  tags: ["trabajo", "carga", "completo"]

variables:
  datos: [[2, 10, 20], [5, 4, 20], [10, 2, 20]]
  idx: uno_de([0, 1, 2])
  q: datos[idx][0]
  v: datos[idx][1]
  w: datos[idx][2]

respuesta: [0, 1, 2]
tipo: completar
respuestas_validas: ["20", "20", "20"]

enunciado: "Si una carga de {q} C requiere un trabajo de {w} J para ser trasladada entre dos puntos, la diferencia de potencial entre dichos puntos es de ___ V."

explicacion: |
  Usando la fórmula V = W / Q, tenemos {w} / {q} = {v} V.
```