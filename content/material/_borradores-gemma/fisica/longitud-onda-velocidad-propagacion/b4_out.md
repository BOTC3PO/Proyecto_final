### 1 — Diferencia entre frecuencia y longitud de onda
```
metadata:
  materia: "fisica"
  tema: "relacion_longitud_frecuencia"
  nivel: "basico"
  tags: ["ondas", "conceptos"]

respuesta: "inversamente"
tipo: completar
respuestas_validas: ["inversamente", "inversa"]

enunciado: "En una onda de velocidad constante, si la frecuencia aumenta, la longitud de onda debe variar de forma ___ a la frecuencia."

explicacion: |
  Como la velocidad de propagación es $v = \lambda \cdot f$, si la velocidad es constante, la longitud de onda ($\lambda$) y la frecuencia ($f$) son inversamente proporcionales. Si una sube, la otra baja.
```

### 2 — Identificación de la velocidad de fase
```
metadata:
  materia: "fisica"
  tema: "velocidad_propagacion"
  nivel: "intermedio"
  tags: ["ondas", "velocidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[300, 10, 3000], [340, 500, 170000]]

respuesta: uno_de(datos[escenario_idx][2])
tipo: mc
opciones_explicitas: ["300", "3000", "340", "170000"]

enunciado: "Considera el siguiente caso: una onda tiene una longitud de onda de {datos[escenario_idx][0]} metros y una frecuencia de {datos[scenario_idx][1]} Hz. ¿Cuál es su velocidad de propagación?"

pasos:
  - "Identificar la longitud de onda ($\lambda$): {datos[escenario_idx][0]} m"
  - "Identificar la frecuencia ($f$): {datos[escenario_idx][1]} Hz"
  - "Aplicar la fórmula $v = \lambda \cdot f$"

explicacion: |
  Utilizando la fórmula $v = \lambda \cdot f$:
  Caso 1: $300 \cdot 10 = 3000$ m/s.
  Caso 2: $340 \cdot 500 = 170000$ m/s.
```

### 3 — Naturaleza de la velocidad de fase
```
metadata:
  materia: "fisica"
  tema: "propiedades_ondas"
  nivel: "basico"
  tags: ["conceptos", "velocidad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la velocidad de propagación de una onda una propiedad que depende exclusivamente del medio por el cual se desplaza (y no de la frecuencia de la fuente) en un medio no dispersivo?"

explicacion: |
  En un medio no dispersivo (como el vacío para la luz), la velocidad de propagación es constante para todas las frecuencias. En medios dispersivos, la velocidad sí puede depender de la frecuencia.
```

### 4 — Componentes de la ecuación de onda
```
metadata:
  materia: "fisica"
  tema: "componentes_ecuacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "frecuencia"
tipo: completar
respuestas_validas: ["frecuencia"]

enunciado: "En la ecuación de la velocidad de propagación $v = \lambda \cdot f$, el término $f$ representa la ___."

explicacion: |
  La letra $f$ representa la frecuencia, que es el número de ciclos por unidad de tiempo.
```

### 5 — Orden de magnitudes en la propagación
```
metadata:
  materia: "fisica"
  tema: "relacion_magnitudes"
  nivel: "intermedio"
  tags: ["orden", "conceptos"]

respuesta: ["frecuencia", "velocidad", "longitud_onda"]
tipo: ordenar
opciones_explicitas: ["frecuencia", "velocidad", "longitud_onda"]

enunciado: "Ordena las siguientes magnitudes de menor a mayor, considerando una onda de sonido en el aire con una frecuencia de 440 Hz (una nota musical):"

pasos:
  - "Estimar la frecuencia ($f$): 440 Hz"
  - "Estimar la velocidad ($v$): ~340 m/s"
  - "Estimar la longitud de onda ($\lambda = v/f$): ~0.77 m"

explicacion: |
  Para una onda de sonido estándar:
  1. La frecuencia es 440 (valor numérico).
  2. La velocidad es ~340 m/s.
  3. La longitud de onda es ~0.77 m.
  *Nota: El orden se basa en la magnitud de los valores numéricos resultantes en unidades SI para este escenario específico.*
```