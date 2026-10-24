### 1 — Definición de Energía Potencial Gravitatoria
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["definicion", "energia"]

respuesta: "energia_potencial_gravitatoria"
tipo: completar
respuestas_validas: ["energia_potencial_gravitatoria"]

enunciado: "La capacidad de un cuerpo de realizar un trabajo debido a su posición en un campo gravitatorio se denomina ___."

explicacion: |
  La energía potencial gravitatoria depende de la masa, la aceleración de la gravedad y la altura respecto a un nivel de referencia.
```

### 2 — Dependencia de la masa
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["relacion", "masa"]

variables:
  caso: uno_de([[10, "10 kg"], [25, "25 kg"], [50, "50 kg"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["10 kg", "25 kg", "50 kg", "No depende de la masa"]

enunciado: "Si duplicamos la masa de un objeto manteniendo su altura y la gravedad constantes, la energía potencial gravitatoria de un objeto de {caso[1]} se..."

pasos:
  - "Identificar la masa inicial: {caso[1]}"
  - "Aplicar la relación de proporcionalidad directa con la masa (Ep ∝ m)"

explicacion: |
  Como la fórmula es Ep = m · g · h, la energía es directamente proporcional a la masa. Si la masa se duplica, la energía se duplica.
```

### 3 — El factor gravedad
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["gravedad", "verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "La energía potencial gravitatoria de un objeto es la misma en la Tierra y en la Luna si el objeto se encuentra a la misma altura sobre su respectivo suelo."

explicacion: |
  Falso. La energía potencial depende de la aceleración de la gravedad (g). Como la gravedad en la Luna es menor que en la Tierra, la energía potencial también será menor.
```

### 4 — Componentes de la fórmula
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["formula", "variables"]

respuesta: "altura"
tipo: completar
respuestas_validas: ["altura"]

enunciado: "En la expresión matemática Ep = m · g · h, la variable 'h' representa la ___."

explicacion: |
  En física, 'h' proviene del término 'height' (altura) y representa la distancia vertical respecto a un punto de referencia.
```

### 5 — Cálculo de energía básica
```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["calculo", "ejercicio"]

variables:
  escenario: uno_de([[2, 5, 9.8], [5, 2, 9.8], [10, 3, 9.8]])

respuesta: escenario[0] * escenario[1] * escenario[2]
tipo: input
tolerancia_abs: 0.1

enunciado: "Calcula la energía potencial gravitatoria de un objeto con masa de {escenario[0]} kg, situado a una altura de {escenario[1]} m, considerando una gravedad de {escenario[2]} m/s²."

pasos:
  - "Multiplicar la masa por la gravedad: {escenario[0]} * {escenario[2]}"
  - "Multiplicar el resultado por la altura: ({escenario[0]} * {escenario[2]}) * {escenario[1]}"

explicacion: |
  El resultado se obtiene multiplicando directamente los tres valores: m · g · h.
```