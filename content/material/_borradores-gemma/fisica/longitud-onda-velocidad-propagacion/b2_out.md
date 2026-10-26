### 1 — Relación fundamental
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "v = lambda * f"
tipo: completar
respuestas_validas: ["v = lambda * f", "v = λ * f", "v = lambda * f"]

enunciado: "La velocidad de propagación de una onda ($v$) se define como el producto de la longitud de onda ($\lambda$) por la ___."

explicacion: |
  La relación fundamental para ondas es $v = \lambda \cdot f$, donde $v$ es la velocidad, $\lambda$ la longitud de onda y $f$ la frecuencia.
```

### 2 — Cálculo de velocidad
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["calculo"]

variables:
  escenario: uno_de([[0.5, 10, 20], [0.2, 50, 10], [0.8, 5, 40]])

respuesta: datos[escenario][2]
tipo: mc
opciones_explicitas: ["100 m/s", "250 m/s", "400 m/s", "500 m/s"]

enunciado: "Una onda tiene una longitud de onda de {datos[escenario][0]} m y una frecuencia de {datos[escenario][1]} Hz. ¿Cuál es su velocidad de propagación?"

pasos:
  - "Identificar los datos: $\lambda = {datos[escenario][0]}$ m y $f = {datos[escenario][1]}$ Hz."
  - "Aplicar la fórmula: $v = \lambda \cdot f$."
  - "Calcular: $v = {datos[escenario][0]} \cdot {datos[escenario][1]} = {datos[escenario][2]}$ m/s."

explicacion: |
  Usando la fórmula $v = \lambda \cdot f$, multiplicamos la longitud de onda por la frecuencia para obtener la velocidad.
```

### 3 — Despeje de longitud de onda
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["despeje"]

respuesta: 2.0
tipo: input
tolerancia_abs: 0.01

enunciado: "Si una onda sonora viaja a una velocidad de $340$ m/s y su frecuencia es de $170$ Hz, ¿cuál es su longitud de onda en metros?"

pasos:
  - "Despejar la fórmula original: $\lambda = v / f$."
  - "Sustituir valores: $\lambda = 340 / 170$."
  - "Resultado: $\lambda = 2$ m."

explicacion: |
  Al despejar la longitud de onda, la frecuencia pasa dividiendo al otro lado de la igualdad.
```

### 4 — Verdad o Falso: Relación de proporcionalidad
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "intermedio"
  tags: ["conceptos"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad de una onda se mantiene constante (como en el vacío para la luz) y la frecuencia aumenta, la longitud de onda debe aumentar también."

explicacion: |
  Falso. Si $v$ es constante, $\lambda$ y $f$ son inversamente proporcionales ($\lambda = v/f$). Si la frecuencia aumenta, la longitud de onda disminuye.
```

### 5 — Orden de resolución de problema
```
metadata:
  materia: "fisica"
  tema: "longitud_onda_velocidad_propagacion"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado"]
tipo: ordenar
opciones_explicitas: ["identificar_datos", "seleccionar_formula", "sustituir_valores", "calcular_resultado", "graficar_onda"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de velocidad de onda."

explicacion: |
  Para resolver problemas físicos, primero debemos extraer los datos, elegir la ecuación correcta, realizar la sustitución y finalmente operar matemáticamente.
```