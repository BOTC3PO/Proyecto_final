### 1 — El peligro de la escala en el modelado
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["escala", "errores_comunes", "dimensiones"]

enunciado: "Un error crítico en el modelado físico es ignorar la escala. Si un ingeniero escala un modelo de un puente a la mitad de su tamaño lineal (factor 1:2), la resistencia de los materiales (que depende del área de la sección transversal) se escala por un factor de ___."

respuestas_validas: ["0.25", "1/4", "0.5"]
respuesta: "0.25"
tipo: completar

explicacion: |
  El área es una magnitud cuadrática ($L^2$). Si la longitud se reduce a la mitad ($1/2$), el área se reduce a $(1/2)^2 = 1/4 = 0.25$. Ignorar esto en el diseño de componentes estructurales puede llevar al colapso del prototipo real.
```

### 2 — Modelado vs. Realidad
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["conceptos", "limitaciones"]

enunciado: "¿Es correcto afirmar que un modelo matemático es una representación exacta y absoluta de la realidad física?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: vf

explicacion: |
  Todo modelo es una simplificación de la realidad. Un modelo matemático omite variables (como la fricción del aire o imperfecciones del material) para facilitar el cálculo. Por definición, un modelo es una aproximación, no la realidad misma.
```

### 3 — El orden del proceso de diseño
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

enunciado: "Para evitar errores de diseño costosos, se debe seguir un orden lógico en el desarrollo de un proyecto de ingeniería. Ordene los siguientes pasos desde la fase inicial hasta la construcción:"

opciones_explicitas: ["Definición del problema", "Modelado matemático", "Simulación y validación", "Construcción del prototipo"]
respuesta: ["Definición del problema", "Modelado matemático", "Simulación y validación", "Construcción del prototipo"]
tipo: ordenar

explicacion: |
  Saltarse el modelado o la validación para pasar directamente a la construcción es la causa principal de fallos estructurales y sobrecostos. El modelo debe validarse contra los requerimientos definidos inicialmente.
```

### 4 — Sensibilidad de parámetros
```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["sensibilidad", "incertidumbre"]

variables:
  idx: uno_de([0, 1])
  datos: [["error_bajo", "error_alto"], ["error_bajo", "error_alto"]]

enunciado: "En un modelo de simulación, si un pequeño cambio en una variable de entrada produce un cambio desproporcionadamente grande en el resultado, decimos que el modelo tiene una sensibilidad de tipo {datos[idx][0]}."

opciones_explicitas: ["baja", "alta"]
respuesta: "alta"
tipo: mc

explicacion: |
  La sensibilidad es crucial en ingeniería. Un modelo con alta sensibilidad requiere una precisión extrema en las mediciones de entrada, ya que cualquier error de medición se amplificará en el resultado final.
```

### 5 — La trampa de la linealidad
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