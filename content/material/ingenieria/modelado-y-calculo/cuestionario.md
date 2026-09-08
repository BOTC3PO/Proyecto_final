# Ingenieria — Modelado y calculo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Modelo Matemático

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["definicion", "modelado"]

respuesta: "matematico"
tipo: "completar"
respuestas_validas:
  - "matematico"
  - "matemático"

enunciado: "Un modelo ___ es una representación abstracta de un sistema o fenómeno físico mediante el uso de lenguaje matemático para predecir su comportamiento."

explicacion: |
  El modelado matemático permite traducir la realidad a ecuaciones para realizar cálculos predictivos antes de la construcción física.
```

### 2 — Naturaleza de los Modelos

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["verdadera_falso", "conceptos"]

respuesta: falso

tipo: "vf"

enunciado: "Un modelo matemático es una representación exacta y perfecta de la realidad que no requiere simplificaciones para ser útil."

explicacion: |
  Falso. Todo modelo es una simplificación de la realidad; un modelo demasiado complejo sería tan difícil de resolver como el sistema real mismo.
```

### 3 — Variables y Parámetros

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["variables", "parametros"]

tipo: "mc"
opciones_explicitas: ["variable", "parámetro"]

enunciado: "En el contexto de un modelo, si un valor cambia a medida que el sistema evoluciona, se denomina variable. Si el valor permanece constante durante el análisis, se denomina ___."

respuesta: "parámetro"

explicacion: |
  Las variables representan las incógnitas del sistema (como la posición o el tiempo), mientras que los parámetros son valores que definen las propiedades del sistema (como la gravedad o la densidad).
```

### 4 — Fases del Modelado

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta_orden: ["Observación", "Formulación", "Resolución", "Validación"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Formulación", "Resolución", "Validación"]

enunciado: "Ordene las etapas típicas del proceso de modelado en ingeniería, desde la identificación del problema hasta la comprobación de resultados."

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la creación de las ecuaciones (formulación), el cálculo matemático (resolución) y finalmente la comparación con datos reales (validación).
```

### 5 — Modelos Deterministas vs Estocásticos

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["determinismo", "probabilidad"]

tipo: "mc"
opciones_explicitas: ["determinista", "estocástico"]

enunciado: "Si un modelo matemático incluye variables aleatorias y la incertidumbre en sus resultados, estamos ante un modelo estocástico. Si el resultado es único y predecible para las mismas condiciones iniciales, es un modelo ___."

respuesta: "determinista"

explicacion: |
  Los modelos deterministas no consideran la probabilidad, mientras que los estocásticos (o probabilísticos) modelan sistemas donde existe el azar.
```

### 6 — Diseño de una viga de soporte

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["estructuras", "estatica"]

variables:
  datos: [[1200, 5.5, 2.5], [1500, 6.0, 3.0], [2000, 7.5, 4.0]]
  idx: uno_de([0,1,2])
  carga: datos[idx][0]
  longitud: datos[idx][1]
  distancia_apoyo: datos[idx][2]

enunciado: "Para diseñar una viga de soporte, se modela la carga puntual P en el centro de una viga de longitud L. Si la carga es de {carga} N y la longitud es de {longitud} m, el momento flector máximo M_max se calcula como (P · L) / 4."

pasos:
  - "Identificar la carga $P$ y la longitud $L$ del modelo."
  - "Aplicar la fórmula del momento flector para vigas simplemente apoyadas con carga centrada."
  - "Calcular el valor resultante en N·m."

respuesta: (carga * longitud) / 4
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El modelado matemático permite predecir el esfuerzo interno. En este caso, M_max = ({carga} · {longitud}) / 4 = {redondear((carga * longitud) / 4, 2)} N·m.
```

### 7 — Análisis de estabilidad térmica

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["termodinamica", "modelado"]

enunciado: "En el modelado de un material sometido a un incremento de temperatura constante, si el coeficiente de dilatación es positivo, el componente físico ___."

respuesta: "se expande"
tipo: completar
respuestas_validas:
  - "se expande"

explicacion: |
  El modelo matemático $L = L_0(1 + \alpha \cdot \Delta T)$ indica que si $\Delta T > 0$ y $\alpha > 0$, la longitud final es mayor a la inicial.
```

### 8 — Simulación de flujo de fluidos

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["fluidos", "simulacion"]

enunciado: "Al modelar el flujo de un fluido a través de una tubería mediante la ecuación de Bernoulli, se asume que el fluido es ideal. ¿Es este modelo físicamente representativo para un fluido real con alta viscosidad?"

respuesta: falso
tipo: vf

explicacion: |
  El modelo de Bernoulli es una simplificación idealizada que desprecia la viscosidad y las pérdidas de energía por fricción, por lo que no es preciso para fluidos reales muy viscosos.
```

### 9 — Secuencia de validación de un prototipo

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["gestion_proyectos", "metodologia"]

enunciado: "Antes de la construcción física de un puente, se debe seguir un orden lógico de modelado y validación. Ordene las siguientes etapas:"

opciones_explicitas: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
respuesta_orden: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
tipo: ordenar

explicacion: |
  El proceso de ingeniería sigue un flujo: primero se define qué se necesita, luego se traduce a ecuaciones (modelo), se verifica mediante software (simulación) y finalmente se valida físicamente.
```

### 10 — Cálculo de resistencia de materiales

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["resistencia", "esfuerzo"]

variables:
  casos: [[100, 0.01], [250, 0.005], [500, 0.002]]
  idx: uno_de([0,1,2])
  fuerza: casos[idx][0]
  area: casos[idx][1]

enunciado: "En el modelado de esfuerzos mecánicos, el esfuerzo normal $\\sigma$ se define como la fuerza aplicada $F$ dividida por el área de la sección transversal $A$. Si aplicamos una fuerza de {fuerza} N sobre un área de {area} m², el esfuerzo resultante es:"

respuesta: fuerza / area
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El cálculo del esfuerzo es $\sigma = {fuerza} / {area} = {redondear(fuerza / area, 2)}$ Pa. Este valor es crucial para determinar si el material fallará o no.
```

### 11 — El peligro de la escala en el modelado

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["escala", "errores_comunes", "dimensiones"]

enunciado: "Un error crítico en el modelado físico es ignorar la escala. Si un ingeniero escala un modelo de un puente a la mitad de su tamaño lineal (factor 1:2), la resistencia de los materiales (que depende del área de la sección transversal) se escala por un factor de ___."

respuestas_validas:
  - "0.25"
  - "1/4"
  - "0.5"
respuesta: "0.25"
tipo: completar

explicacion: |
  El área es una magnitud cuadrática ($L^2$). Si la longitud se reduce a la mitad ($1/2$), el área se reduce a $(1/2)^2 = 1/4 = 0.25$. Ignorar esto en el diseño de componentes estructurales puede llevar al colapso del prototipo real.
```

### 12 — Modelado vs. Realidad

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["conceptos", "limitaciones"]

enunciado: "¿Es correcto afirmar que un modelo matemático es una representación exacta y absoluta de la realidad física?"

respuesta: falso
tipo: vf
explicacion: |
  Todo modelo es una simplificación de la realidad. Un modelo matemático omite variables (como la fricción del aire o imperfecciones del material) para facilitar el cálculo. Por definición, un modelo es una aproximación, no la realidad misma.
```

### 13 — El orden del proceso de diseño

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

enunciado: "Para evitar errores de diseño costosos, se debe seguir un orden lógico en el desarrollo de un proyecto de ingeniería. Ordene los siguientes pasos desde la fase inicial hasta la construcción:"

opciones_explicitas: ["Definición del problema", "Modelado matemático", "Simulación y validación", "Construcción del prototipo"]
respuesta_orden: ["Definición del problema", "Modelado matemático", "Simulación y validación", "Construcción del prototipo"]
tipo: ordenar

explicacion: |
  Saltarse el modelado o la validación para pasar directamente a la construcción es la causa principal de fallos estructurales y sobrecostos. El modelo debe validarse contra los requerimientos definidos inicialmente.
```

### 14 — Sensibilidad de parámetros

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["sensibilidad", "incertidumbre"]

enunciado: "En un modelo de simulación, si un pequeño cambio en una variable de entrada produce un cambio desproporcionadamente grande en el resultado, decimos que el modelo tiene una sensibilidad ___."

opciones_explicitas: ["baja", "alta"]
respuesta: "alta"
tipo: mc

explicacion: |
  La sensibilidad es crucial en ingeniería. Un modelo con alta sensibilidad requiere una precisión extrema en las mediciones de entrada, ya que cualquier error de medición se amplificará en el resultado final.
```

### 15 — La trampa de la linealidad

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["linealidad", "errores_de_asuncion"]

enunciado: "Un error común en el modelado es asumir que un sistema es lineal cuando en la realidad es no lineal. Si un modelo asume una relación lineal para un componente que tiene un comportamiento cuadrático, el error en la predicción de la respuesta será ___."

opciones_explicitas: ["nulo", "creciente", "constante"]
respuesta: "creciente"
tipo: mc

explicacion: |
  En sistemas no lineales, la diferencia entre la aproximación lineal (tangente) y la curva real aumenta a medida que nos alejamos del punto de operación, lo que resulta en un error creciente.
```

### 16 — Modelado vs. Realidad

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["conceptos", "metodologia"]

respuesta: "aproximacion"
tipo: "completar"
respuestas_validas:
  - "aproximacion"
  - "modelo"

enunciado: "Un modelo matemático es una ___ de un sistema físico real, lo que implica que siempre existe un margen de error entre la solución calculada y el comportamiento del objeto construido."

explicacion: |
  Un modelo nunca es una réplica exacta; es una simplificación que omite variables menores para permitir el cálculo de las principales.
```

### 17 — Fidelidad del Modelo

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["fidelidad", "complejidad"]

respuesta: "Un modelo más complejo es siempre más preciso pero más costoso de resolver"
tipo: "mc"
opciones_explicitas: ["Un modelo más complejo es siempre más preciso pero más costoso de resolver", "Un modelo más simple es siempre más preciso pero más difícil de implementar"]

enunciado: "Al comparar dos modelos para un mismo problema de ingeniería, si el modelo A incluye más variables físicas (como fricción, temperatura y humedad) que el modelo B (que solo considera la gravedad), ¿cuál es la distinción principal respecto a la fidelidad?"

explicacion: |
  Aumentar la complejidad del modelo suele aumentar la fidelidad (precisión), pero incrementa significativamente el costo computacional y el tiempo de resolución.
```

### 18 — Determinismo en el Modelado

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["determinismo", "estocastico"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Un modelo determinista se distingue de un modelo estocástico en que sus resultados son siempre los mismos ante las mismas condiciones iniciales, sin intervención de variables aleatorias?"

explicacion: |
  Correcto. El modelo determinista no contiene elementos de azar, mientras que el estocástico modela la incertidumbre mediante distribuciones de probabilidad.
```

### 19 — Fases del Diseño de Ingeniería

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["proceso", "secuencia"]

respuesta_orden: ["Definición del problema", "Abstracción matemática", "Simulación numérica", "Construcción física"]
tipo: "ordenar"
opciones_explicitas: ["Definición del problema", "Abstracción matemática", "Simulación numérica", "Construcción física"]

enunciado: "Ordene las etapas lógicas de un proceso de ingeniería desde la concepción hasta la materialización de una solución."

explicacion: |
  El proceso comienza con la comprensión del problema, sigue con la creación de un modelo (abstracción), la validación mediante cálculos (simulación) y finaliza con la construcción.
```

### 20 — Modelos Lineales vs. No Lineales

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["linealidad", "complejidad"]

respuesta: "Los modelos lineales permiten usar el principio de superposición"
tipo: "mc"
opciones_explicitas: ["Los modelos lineales permiten usar el principio de superposición", "Los modelos no lineales son más fáciles de resolver analíticamente"]

enunciado: "Considerando la utilidad en el cálculo de estructuras, ¿cuál es la principal distinción que permite tratar un sistema como lineal en lugar de no lineal?"

explicacion: |
  La linealidad permite aplicar el principio de superposición (la respuesta a una suma de cargas es la suma de las respuestas individuales), lo cual simplifica drásticamente el cálculo de ingeniería.
```

### 21 — Resistencia de un pilar de soporte

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["estructuras", "calculo"]

variables:
  escenario: [[150, 200], [220, 280], [310, 400]]
  idx: uno_de([0, 1, 2])
  carga: escenario[idx][0]
  resistencia_critica: escenario[idx][1]

respuesta: verdadero
tipo: vf
enunciado: "Un pilar de soporte en una estructura debe soportar una carga de {carga} kN. El modelo matemático indica que la resistencia crítica del material es de {resistencia_critica} kN. ¿Es la estructura segura bajo este modelo?"

explicacion: |
  En ingeniería, el modelo matemático debe garantizar que la carga aplicada sea menor a la capacidad máxima del material para asegurar la estabilidad estructural.
```

### 22 — Dimensionamiento de un tanque de almacenamiento

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["hidraulica", "modelado"]

variables:
  datos: [[5.0, 2.0], [12.5, 2.5], [8.2, 2.0]]
  idx: uno_de([0, 1, 2])
  volumen_requerido: datos[idx][0]
  area_base: datos[idx][1]

respuesta: volumen_requerido / area_base
tipo: completar
tolerancia_abs: 0.01

enunciado: "Para el diseño de un tanque cilíndrico, se requiere un volumen de {volumen_requerido} m³. Si el modelo de diseño establece un área de la base de {area_base} m², ¿cuál debe ser la altura (h) del tanque?"

pasos:
  - "Calcular la altura usando la fórmula del volumen de un cilindro: V = A_base * h"
  - "Despejar h = V / A_base"

explicacion: |
  El modelado geométrico permite determinar las dimensiones necesarias antes de la fabricación. En este caso, h = {volumen_requerido} / {area_base}.
```

### 23 — Fase de diseño: Secuencia de validación

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["gestion_proyectos", "metodologia"]

opciones_explicitas: ["Definición del problema", "Modelado matemático", "Simulación computacional", "Construcción del prototipo"]
respuesta_orden: ["Definición del problema", "Modelado matemático", "Simulación computacional", "Construcción del prototipo"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas de un proceso de ingeniería desde la concepción hasta la ejecución física:"

explicacion: |
  Antes de construir, se debe definir el problema, crear un modelo matemático, validarlo mediante simulaciones y finalmente construir el prototipo o estructura.
```

### 24 — Análisis de fatiga de materiales

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["materiales", "seguridad"]

variables:
  valores_factor: [0.85, 1.15, 0.95]
  es_seguro: [falso, verdadero, falso]
  idx: uno_de([0, 1, 2])
  factor_seguridad: valores_factor[idx]

respuesta: es_seguro[idx]
tipo: vf
enunciado: "En el modelado de un componente mecánico, se calcula un factor de seguridad de {factor_seguridad}. ¿Es el diseño considerado seguro según los estándares de ingeniería (donde factor > 1)?"

explicacion: |
  Un factor de seguridad menor o igual a 1 indica que la carga aplicada iguala o supera la resistencia del material, lo que representa un fallo inminente.
```

### 25 — Estimación de costos de materiales

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["presupuesto", "modelado"]

variables:
  materiales: [450, 1200, 850]
  idx: uno_de([0, 1, 2])
  cantidad: materiales[idx]
  precio_unitario: 15.5

respuesta: cantidad * precio_unitario
tipo: completar

enunciado: "Para el presupuesto de una obra, el modelo de costos indica que se requieren {cantidad} unidades de un componente. Si el precio unitario es de {precio_unitario} USD, el costo total estimado es de ___ USD."

explicacion: |
  El modelado económico es crucial para la viabilidad del proyecto. El cálculo es: {cantidad} * {precio_unitario}.
```
