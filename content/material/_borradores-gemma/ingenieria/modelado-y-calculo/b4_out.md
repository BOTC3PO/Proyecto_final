### 1 — Modelado vs. Realidad
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["conceptos", "metodologia"]

respuesta: "aproximacion"
tipo: "completar"
respuestas_validas: ["aproximacion", "modelo"]

enunciado: "Un modelo matemático es una ___ de un sistema físico real, lo que implica que siempre existe un margen de error entre la solución calculada y el comportamiento del objeto construido."

explicacion: |
  Un modelo nunca es una réplica exacta; es una simplificación que omite variables menores para permitir el cálculo de las principales.
```

### 2 — Fidelidad del Modelo
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["fidelidad", "complejidad"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: "mc"
opciones_explicitas: ["Un modelo más complejo es siempre más preciso pero más costoso de resolver", "Un modelo más simple es siempre más preciso pero más difícil de implementar"]

enunciado: "Al comparar dos modelos para un mismo problema de ingeniería, si el modelo A incluye más variables físicas (como fricción, temperatura y humedad) que el modelo B (que solo considera la gravedad), ¿cuál es la distinción principal respecto a la fidelidad?"

explicacion: |
  Aumentar la complejidad del modelo suele aumentar la fidelidad (precisión), pero incrementa significativamente el costo computacional y el tiempo de resolución.
```

### 3 — Determinismo en el Modelado
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["determinismo", "estocastico"]

respuesta: falso
tipo: "vf"

enunciado: "¿Un modelo determinista se distingue de un modelo estocástico en que sus resultados son siempre los mismos ante las mismas condiciones iniciales, sin intervención de variables aleatorias?"

explicacion: |
  Correcto. El modelo determinista no contiene elementos de azar, mientras que el estocástico modela la incertidumbre mediante distribuciones de probabilidad.
```

### 4 — Fases del Diseño de Ingeniería
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["proceso", "secuencia"]

respuesta: ["Definición del problema", "Abstracción matemática", "Simulación numérica", "Construcción física"]
tipo: "ordenar"
opciones_explicitas: ["Definición del problema", "Abstracción matemática", "Simulación numérica", "Construcción física"]

enunciado: "Ordene las etapas lógicas de un proceso de ingeniería desde la concepción hasta la materialización de una solución."

explicacion: |
  El proceso comienza con la comprensión del problema, sigue con la creación de un modelo (abstracción), la validación mediante cálculos (simulación) y finaliza con la construcción.
```

### 5 — Modelos Lineales vs. No Lineales
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["linealidad", "complejidad"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: uno_de([0, 1])[0]
tipo: "mc"
opciones_explicitas: ["Los modelos lineales permiten usar el principio de superposición", "Los modelos no lineales son más fáciles de resolver analíticamente"]

enunciado: "Considerando la utilidad en el cálculo de estructuras, ¿cuál es la principal distinción que permite tratar un sistema como lineal en lugar de no lineal?"

explicacion: |
  La linealidad permite aplicar el principio de superposición (la respuesta a una suma de cargas es la suma de las respuestas individuales), lo cual simplifica drásticamente el cálculo de ingeniería.
```