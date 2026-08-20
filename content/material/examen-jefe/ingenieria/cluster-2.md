# Examen jefe — Modelado y Optimización

> Logro #184. Resolviste el parcial integrando modelado matemático, optimización y resistencia de materiales con criterio ingenieril. Pool agregado de los `cuestionario.md` ya validados de sus 6 temas. **150 preguntas totales** en 6/6 secciones.

---

## Sección: modelado-y-calculo (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["definicion", "modelado"]

respuesta: "matematico"
tipo: "completar"
respuestas_validas: ["matematico", "matemático"]

enunciado: "Un modelo ___ es una representación abstracta de un sistema o fenómeno físico mediante el uso de lenguaje matemático para predecir su comportamiento."

explicacion: |
  El modelado matemático permite traducir la realidad a ecuaciones para realizar cálculos predictivos antes de la construcción física.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["variables", "parametros"]

variables:
  escenario: uno_de([[0, "variable", "cambia durante el proceso"], [1, "parámetro", "se mantiene constante"]])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["variable", "parámetro"]

enunciado: "En el contexto de un modelo, si un valor cambia a medida que el sistema evoluciona, se denomina {escenario[0]}. Si el valor permanece constante durante el análisis, se denomina {escenario[1]}."

explicacion: |
  Las variables representan las incógnitas del sistema (como la posición o el tiempo), mientras que los parámetros son valores que definen las propiedades del sistema (como la gravedad o la densidad).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["proceso", "ordenar"]

respuesta: ["Observación", "Formulación", "Resolución", "Validación"]
tipo: "ordenar"
opciones_explicitas: ["Observación", "Formulación", "Resolución", "Validación"]

enunciado: "Ordene las etapas típicas del proceso de modelado en ingeniería, desde la identificación del problema hasta la comprobación de resultados."

explicacion: |
  El proceso comienza con la observación del fenómeno, sigue con la creación de las ecuaciones (formulación), el cálculo matemático (resolución) y finalmente la comparación con datos reales (validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["determinismo", "probabilidad"]

variables:
  caso: uno_de([[0, "determinista", "no tiene incertidumbre"], [1, "estocástico", "incluye elementos aleatorios"]])

respuesta: caso[1
tipo: "mc"
opciones_explicitas: ["determinista", "estocástico"]

enunciado: "Si un modelo matemático incluye variables aleatorias y la incertidumbre en sus resultados, estamos ante un modelo {caso[0]}. Si el resultado es único y predecible para las mismas condiciones iniciales, es un modelo {caso[1]}."

explicacion: |
  Los modelos deterministas no consideran la probabilidad, mientras que los estocásticos (o probabilísticos) modelan sistemas donde existe el azar.
```

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

enunciado: "Para diseñar una viga de soporte, se modela la carga puntual $P$ en el centro de una viga de longitud $L$. Si la carga es de {carga} N y la longitud es de {longitud} m, el momento flector máximo $M_{max}$ se calcula como $(P \cdot L) / 4$."

pasos:
  - "Identificar la carga $P$ y la longitud $L$ del modelo."
  - "Aplicar la fórmula del momento flector para vigas simplemente apoyadas con carga centrada."
  - "Calcular el valor resultante en N·m."

respuesta: (carga * longitud) / 4
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El modelado matemático permite predecir el esfuerzo interno. En este caso, $M_{max} = ({carga} \cdot {longitud}) / 4 = {redondear((carga * longitud) / 4, 2)}$ N·m.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["termodinamica", "modelado"]

variables:
  escenarios: [["se expande", "se contrae", "no cambia"], ["aumenta", "disminuye", "se mantiene"]]
  idx: uno_de([0,1,2])

enunciado: "En el modelado de un material sometido a un incremento de temperatura constante, si el coeficiente de dilatación es positivo, el componente físico ___."

respuesta: ["se expande", "se contrae", "no cambia"][idx]
tipo: completar
respuestas_validas: ["se expande", "se contrae", "no cambia"]

explicacion: |
  El modelo matemático $L = L_0(1 + \alpha \cdot \Delta T)$ indica que si $\Delta T > 0$ y $\alpha > 0$, la longitud final es mayor a la inicial.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["gestion_proyectos", "metodologia"]

enunciado: "Antes de la construcción física de un puente, se debe seguir un orden lógico de modelado y validación. Ordene las siguientes etapas:"

opciones_explicitas: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
respuesta: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
tipo: ordenar

explicacion: |
  El proceso de ingeniería sigue un flujo: primero se define qué se necesita, luego se traduce a ecuaciones (modelo), se verifica mediante software (simulación) y finalmente se valida físicamente.
```

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

enunciado: "En el modelado de esfuerzos mecánicos, el esfuerzo normal $\sigma$ se define como la fuerza aplicada $F$ dividida por el área de la sección transversal $A$. Si aplicamos una fuerza de {fuerza} N sobre un área de {area} m², el esfuerzo resultante es:"

respuesta: fuerza / area
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  El cálculo del esfuerzo es $\sigma = {fuerza} / {area} = {redondear(fuerza / area, 2)}$ Pa. Este valor es crucial para determinar si el material fallará o no.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["conceptos", "limitaciones"]

enunciado: "¿Es correcto afirmar que un modelo matemático es una representación exacta y absoluta de la realidad física?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  Todo modelo es una simplificación de la realidad. Un modelo matemático omite variables (como la fricción del aire o imperfecciones del material) para facilitar el cálculo. Por definición, un modelo es una aproximación, no la realidad misma.
```

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

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["estructuras", "calculo"]

variables:
  escenario: [[150, "150"], [220, "220"], [310, "310"]]
  idx: uno_de([0, 1, 2])
  carga: escenario[idx][0]
  resistencia_critica: escenario[idx][1]

respuesta: carga < resistencia_critica
tipo: completar
enunciado: "Un pilar de soporte en una estructura debe soportar una carga de {carga} kN. El modelo matemático indica que la resistencia crítica del material es de {resistencia_critica} kN. ¿Es la estructura segura bajo este modelo?"

explicacion: |
  En ingeniería, el modelo matemático debe garantizar que la carga aplicada sea menor a la capacidad máxima del material para asegurar la estabilidad estructural.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "avanzado"
  tags: ["hidraulica", "modelado"]

variables:
  datos: [[5.0, "5.0"], [12.5, "12.5"], [8.2, "8.2"]]
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

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["gestion_proyectos", "metodologia"]

respuesta: ["Definición del problema", "Modelado matemático", "Simulación computacional", "Construcción del prototipo"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas de un proceso de ingeniería desde la concepción hasta la ejecución física:"

explicacion: |
  Antes de construir, se debe definir el problema, crear un modelo matemático, validarlo mediante simulaciones y finalmente construir el prototipo o estructura.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "intermedio"
  tags: ["materiales", "seguridad"]

variables:
  test: [[0.85, "0.85"], [1.15, "1.15"], [0.95, "0.95"]]
  idx: uno_de([0, 1, 2])
  factor_seguridad: test[idx][0]

respuesta: factor_seguridad > 1.0
tipo: completar
enunciado: "En el modelado de un componente mecánico, se calcula un factor de seguridad de {factor_seguridad}. ¿Es el diseño considerado seguro según los estándares de ingeniería (donde factor > 1)?"

explicacion: |
  Un factor de seguridad menor o igual a 1 indica que la carga aplicada iguala o supera la resistencia del material, lo que representa un fallo inminente.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelado_y_calculo"
  nivel: "basico"
  tags: ["presupuesto", "modelado"]

variables:
  materiales: [[450, "450"], [1200, "1200"], [850, "850"]]
  idx: uno_de([0, 1, 2])
  cantidad: materiales[idx][0]
  precio_unitario: 15.5

respuesta: cantidad * precio_unitario
tipo: completar
respuestas_validas: [6975.0, 18600.0, 13175.0]

enunciado: "Para el presupuesto de una obra, el modelo de costos indica que se requieren {cantidad} unidades de un componente. Si el precio unitario es de {precio_unitario} USD, el costo total estimado es de ___ USD."

explicacion: |
  El modelado económico es crucial para la viabilidad del proyecto. El cálculo es: {cantidad} * {precio_unitario}.
```

## Sección: modelizacion-matematica (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas: ["representacion", "representación"]

enunciado: "Un modelo matemático es una ___ de un sistema o fenómeno de la realidad mediante el uso de lenguaje matemático."

explicacion: |
  La modelización consiste en crear una representación simplificada de la realidad para entenderla, predecirla o controlarla.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["componentes", "variables"]

opciones_explicitas: ["Parámetros", "Variables de estado", "Incertidumbre"]
respuesta: "Variables de estado"
tipo: "mc"

enunciado: "En la modelización de un sistema dinámico, las magnitudes que describen el estado del sistema en un instante dado se denominan:"

explicacion: |
  Las variables de estado son las incógnitas que definen la condición del sistema en un momento específico.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["naturaleza_del_modelo"]

respuesta: falso
tipo: "vf"

enunciado: "¿Un modelo matemático es siempre una representación exacta y completa de la realidad física?"

explicacion: |
  Falso. Todo modelo es una simplificación de la realidad. Si un modelo fuera idéntico a la realidad, sería tan complejo como la propia realidad y perdería su utilidad para el análisis.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Observación y simplificación", "Formulación matemática", "Validación y análisis"]
respuesta: ["Observación y simplificación", "Formulación matemática", "Validación y análisis"]
tipo: "ordenar"

enunciado: "Ordene las etapas lógicas del proceso de modelización:"

explicacion: |
  El proceso comienza identificando el problema (observación), luego se traduce a lenguaje matemático (formulación) y finalmente se comprueba si el modelo funciona (validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["continuo", "depende del tiempo de forma ininterrumpida"],
    ["discreto", "cambia solo en instantes específicos"]
  ]

respuesta: datos[idx][1
tipo: "mc"
opciones_explicitas: ["continuo", "discreto"]

enunciado: "Si un modelo describe un sistema donde las variables cambian de forma ininterrumpida en el tiempo, estamos ante un modelo de tipo {datos[idx][0]}."

explicacion: |
  Los modelos continuos utilizan funciones que se definen para todos los valores de un intervalo, mientras que los discretos operan sobre pasos o momentos específicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["fisica", "cinematica"]

variables:
  escenario: uno_de([
    [15.0, "15.0"],
    [25.0, "25.0"],
    [40.0, "40.0"]
  ])
  g: 9.81

respuesta: sqrt(2 * g * escenario[0])
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se suelta un objeto desde una altura de {escenario[0]} metros. Considerando la aceleración de la gravedad como {g} m/s², ¿cuánto tiempo tardará en tocar el suelo? (Use la fórmula t = sqrt(2h/g))"

pasos:
  - "Identificar la altura h = {escenario[0]} m."
  - "Identificar la gravedad g = {g} m/s²."
  - "Sustituir en la fórmula: t = sqrt(2 * {escenario[0]} / {g})."

explicacion: |
  El tiempo de caída libre se calcula despejando t de la ecuación de posición: h = 0.5 * g * t². 
  Para el caso de {escenario[0]} m, el resultado es {sqrt(2 * g * escenario[0])} segundos.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["modelos", "lineal"]

variables:
  datos: uno_de([
    [100, 150, 200],
    [50, 80, 110],
    [200, 250, 300]
  ])

respuesta: datos[0][1] - datos[0][0]
tipo: completar
respuestas_validas: [10, 20, 30, 40, 50]

enunciado: "Un tanque de agua comienza con {datos[0][0]} litros y después de una hora tiene {datos[0][1]} litros. Si el llenado es lineal, la tasa de cambio (litros por hora) es de ___ litros/h."

explicacion: |
  En un modelo lineal y de tasa constante, la pendiente m es (y2 - y1) / (x2 - x1).
  En este caso: ({datos[0][1]} - {datos[0][0]}) / (1 - 0) = {datos[0][1] - datos[0][0]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["finanzas", "exponencial"]

variables:
  capital: uno_de([
    [1000.0, "1000.0"],
    [5000.0, "5000.0"]
  ])
  tasa: 0.05

respuesta: capital[0] * (1 + tasa)

tipo: mc
opciones_explicitas: ["1050.0", "1100.0", "1500.0", "1005.0"]

enunciado: "Se invierte un capital inicial de ${capital[0]} con una tasa de interés compuesto anual del {tasa * 100}%. ¿Cuál será el monto total al finalizar el primer año?"

explicacion: |
  La fórmula del monto es M = C * (1 + i). 
  Para ${capital[0]} con i = 0.05, el monto es ${capital[0] * (1 + tasa)}.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["quimica", "modelos"]

respuesta: verdadero
tipo: vf

enunciado: "Si modelamos la concentración de sal en un tanque donde entra salmuera con una concentración constante y el volumen de líquido es constante, la ecuación diferencial que describe la cantidad de sal será de primer orden lineal."
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["calculo", "metodologia"]

variables:
  pasos_correctos: ["Definir la función objetivo", "Establecer las restricciones", "Calcular la derivada", "Igualar la derivada a cero"]

respuesta: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Definir la función objetivo", "Establecer las restricciones", "Calcular la derivada", "Igualar la derivada a cero", "Verificar la segunda derivada"]

enunciado: "Ordene los pasos lógicos para resolver un problema de optimización matemática (maximizar/minimizar una función):"

explicacion: |
  Para modelizar y resolver un problema de optimización, primero se debe definir qué se quiere optimizar (función objetivo) y qué limitaciones existen (restricciones). Luego, se aplica el cálculo diferencial para hallar puntos críticos.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["conceptos", "variables"]

variables:
  escenario: uno_de([
    ["La temperatura de un motor sube con el tiempo", "tiempo"],
    ["El volumen de un gas aumenta con la presión", "presión"],
    ["El costo de producción baja al aumentar la escala", "escala"]
  ])

enunciado: "En un modelo matemático, si queremos representar cómo {escenario[0]} afecta a la variable principal, la variable que cambia como consecuencia directa es la variable ___."

respuestas_validas: ["dependiente"]

respuesta: "dependiente"
tipo: completar

explicacion: |
  En la modelización, la variable dependiente es aquella cuyo valor "depende" de los cambios en la variable independiente (explicativa).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["filosofia_modelado", "limitaciones"]

enunciado: "Un modelo matemático es una representación simplificada de la realidad. ¿Es posible que un modelo sea 100% exacto y capture todos los fenómenos físicos de un sistema complejo?"

opciones_explicitas: ["verdadero", "falso"]

respuesta: "falso"
tipo: mc

explicacion: |
  Todo modelo implica una simplificación (asunciones). Si un modelo fuera tan complejo como la realidad misma, dejaría de ser un modelo útil para la ingeniería.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["relaciones", "proporcionalidad"]

variables:
  caso: uno_de([
    ["El área de un círculo respecto a su radio", "area_radio"],
    ["La fuerza centrífuga respecto a la velocidad angular", "fuerza_omega"],
    ["La energía cinética respecto a la velocidad", "energia_v"]
  ])

enunciado: "Analizando el caso de {caso[0]}, la relación matemática entre la variable dependiente y la independiente es de tipo ___."

opciones_explicitas: ["lineal", "cuadrática", "inversa", "exponencial"]

respuesta: "cuadrática"
tipo: mc

explicacion: |
  En el caso de {caso[0]}, la relación sigue la forma $y = k \cdot x^2$, lo cual es una relación cuadrática.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Ordena los pasos lógicos para desarrollar un modelo matemático de un sistema físico:"

opciones_explicitas: ["Observación del fenómeno", "Identificación de variables", "Establecimiento de relaciones matemáticas", "Validación del modelo con datos reales"]

respuesta: ["Observación del fenómeno", "Identificación de variables", "Establecimiento de relaciones matemáticas", "Validación del modelo con datos reales"]
tipo: ordenar

explicacion: |
  El proceso comienza con la observación, sigue con la definición de qué mediremos (variables), cómo se relacionan (ecuaciones) y termina verificando si el modelo predice bien la realidad (validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["validacion", "errores"]

variables:
  rango: uno_de([
    ["[0, 10] para un experimento de tensión"],
    ["[20, 50] para el flujo de un fluido"],
    ["[100, 500] para la carga de una viga"]
  ])

enunciado: "Si un modelo ha sido validado experimentalmente solo en el rango {rango[0]}, aplicar el modelo para predecir el comportamiento en el rango [100, 200] sin nueva validación se denomina error de ___."

opciones_explicitas: ["extrapolación", "interpolación", "discretización", "normalización"]

respuesta: "extrapolación"
tipo: mc

explicacion: |
  La extrapolación consiste en predecir valores fuera del rango de los datos conocidos. Es altamente riesgosa porque el modelo puede dejar de ser válido (por ejemplo, por cambios de fase o efectos no lineales) fuera del rango observado.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["modelos", "probabilidad", "determinismo"]

variables:
  es_estocastico: uno_de([verdadero, falso])

enunciado: "Un modelo que predice un resultado único y exacto ante las mismas condiciones iniciales se denomina modelo determinista. Por el contrario, un modelo que incluye variables aleatorias para representar la incertidumbre se denomina modelo {es_estocastico}."

respuesta: es_estocastico
tipo: completar
explicacion: |
  El modelo determinista no contiene elementos de azar; sus resultados son predecibles al 100% si se conocen las condiciones iniciales. El modelo estocástico incorpora la probabilidad para modelar la variabilidad natural de los sistemas reales.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["modelos", "simplificacion", "precision"]

opciones_explicitas: ["Aumentar la complejidad para ganar precisión absoluta", "Reducir la complejidad para facilitar la resolución y comprensión", "Eliminar todas las variables para obtener un resultado constante", "Añadir ruido para que el modelo sea más realista"]

respuesta: "Reducir la complejidad para facilitar la resolución y comprensión"
tipo: mc

enunciado: "En la modelización matemática, la simplificación es un proceso crítico. ¿Cuál es la principal distinción entre un modelo matemático y la realidad física que se busca representar?"

explicacion: |
  Un modelo nunca es una réplica exacta de la realidad; es una representación simplificada. El objetivo es capturar los fenómenos esenciales manteniendo una complejidad manejable para el análisis matemático.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["variables", "parametros", "dinamica"]

variables:
  tipo_elemento: uno_de(["estado", "parametro"])

enunciado: "En un sistema dinámico, las variables de {tipo_elemento} son aquellas que cambian con el tiempo durante la evolución del proceso, mientras que los ________ son valores que permanecen constantes durante el análisis del modelo."

respuestas_validas: ["parámetros"]
respuesta: "parámetros"
tipo: completar

explicacion: |
  Las variables de estado describen el estado del sistema en un instante dado (ej. posición, velocidad), mientras que los parámetros definen las propiedades del sistema o del entorno (ej. masa, gravedad) y no cambian durante la simulación.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["tiempo", "sistemas", "estatica"]

enunciado: "Un modelo que describe un sistema en un momento específico, sin considerar la evolución temporal de sus variables, se considera un modelo ________, mientras que uno que describe la evolución de las variables respecto al tiempo es un modelo ________."

respuestas_validas: ["estático", "dinámico"]
respuesta: "estático"
tipo: completar

explicacion: |
  La distinción fundamental radica en la dependencia explícita del tiempo. Los modelos estáticos se usan para equilibrio o relaciones instantáneas; los dinámicos para procesos evolutivos.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["metodologia", "proceso", "validacion"]

opciones_explicitas: ["Identificación del problema", "Formulación de ecuaciones", "Resolución matemática", "Validación y verificación"]

respuesta: ["Identificación del problema", "Formulación de ecuaciones", "Resolución matemática", "Validación y verificación"]
tipo: ordenar

enunciado: "Ordene correctamente las etapas del proceso de modelización matemática, desde el contacto con el problema real hasta la obtención de conclusiones fiables."

explicacion: |
  El proceso es cíclico: se identifica el problema, se traduce a lenguaje matemático (formulación), se resuelve el modelo y finalmente se comprueba si el modelo representa fielmente la realidad (validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["modelos_exponenciales", "biotecnologia"]

variables:
  escenario: uno_de([[100, 2, 0.5], [500, 3, 0.2], [250, 2, 0.8]])
  p_inicial: escenario[0]
  tasa: escenario[1]
  tiempo: escenario[2]

respuesta: p_inicial * (1 + tasa)**tiempo
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un cultivo de bacterias crece exponencialmente según el modelo P(t) = P₀ * (1 + r)ᵗ. Si la población inicial es de {p_inicial} unidades, la tasa de crecimiento es del {tasa * 100}% por hora, ¿cuál será la población tras {tiempo} horas?"

pasos:
  - "Identificar la población inicial P₀ = {p_inicial}"
  - "Identificar la tasa r = {tasa}"
  - "Identificar el tiempo t = {tiempo}"
  - "Aplicar la fórmula: {p_inicial} * (1 + {tasa})^{tiempo}"

explicacion: |
  El modelo exponencial se aplica cuando el crecimiento es proporcional a la población actual. En este caso, tras {tiempo} horas, la población es de {p_inicial * (1 + tasa)**tiempo}.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["termodinamica", "ecuaciones_diferenciales"]

variables:
  datos: uno_de([[25, 100, 20], [30, 80, 25], [20, 120, 15]])
  temp_obj: datos[0]
  temp_amb: datos[1]
  k: datos[2]

respuesta: temp_amb
tipo: mc
opciones_explicitas: ["25°C", "100°C", "20°C", "0°C"]

enunciado: "La temperatura de un objeto sigue la ley de enfriamiento de Newton: T(t) = T_amb + (T_obj - T_amb) * e^(-k*t). ¿Cuál será la temperatura del objeto cuando el tiempo t tiende a infinito (t → ∞)?"

explicacion: |
  A medida que el tiempo transcurre, el término exponencial e^(-k*t) tiende a cero, por lo que la temperatura del objeto se iguala a la temperatura ambiente ({temp_amb}°C).
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["costos", "lineal"]

variables:
  costos: uno_de([[500, 5], [800, 12], [300, 8]])
  fijo: costos[0]
  variable: costos[1]

respuesta: ["Costo Fijo", "Costo Variable", "Costo Total"]
tipo: ordenar

opciones_explicitas: ["Costo Fijo", "Costo Variable", "Costo Total"]

enunciado: "Un proceso industrial presenta un costo fijo de ${fijo} y un costo variable de ${variable} por unidad producida. Ordene los componentes de la función de costo total C(x) = {fijo} + {variable} * x de mayor a menor importancia en el costo total cuando la producción es muy baja."

explicacion: |
  Cuando la producción (x) es cercana a cero, el componente dominante es el costo fijo. A medida que x aumenta, el costo variable toma relevancia.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["mecanica", "ley_de_hooke"]

variables:
  par: uno_de([[100, 200], [500, 50], [250, 100]])
  fuerza: par[0]
  k: par[1]

respuesta: "2.5"
tipo: completar
respuestas_validas: ["2.5", "2,5"]

enunciado: "Según la Ley de Hooke, la deformación x de un resorte está dada por F = k * x. Si se aplica una fuerza de {fuerza} N sobre un resorte con constante elástica k = {k} N/m, la deformación es de ___ m."

explicacion: |
  Despejando la fórmula para la deformación: x = F / k. En este caso, {fuerza} / {k} = 2.5.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["probabilidad", "eficiencia"]

variables:
  escenario: uno_de([[0.95, 0.05], [0.98, 0.02], [0.90, 0.10]])
  p_filtro: escenario[0]
  p_error: escenario[1]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema de filtrado tiene una probabilidad de éxito (capturar partícula) de {p_filtro} y una probabilidad de error (dejar pasar) de {p_error}. ¿Es la suma de las probabilidades de los eventos complementarios igual a 1.0?"

explicacion: |
  En cualquier modelo probabilístico, la suma de la probabilidad de un evento y su complemento debe ser exactamente 1. En este caso, {p_filtro} + {p_error} = 1.0.
```

## Sección: optimizacion-e-iteracion (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["definiciones", "ciclos"]

respuesta: "iteración"
tipo: completar
respuestas_validas: ["iteración"]

enunciado: "El proceso de repetir un conjunto de pasos o un algoritmo para acercarse a una solución óptima se denomina ___."

explicacion: |
  La iteración es la repetición de un proceso con el objetivo de mejorar la calidad de una solución o alcanzar un criterio de parada.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["objetivo", "optimización"]

variables:
  escenario: uno_de([["minimizar", "costo"], ["maximizar", "eficiencia"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["minimizar", "maximizar", "estabilizar", "ignorar"]

enunciado: "En un problema de optimización, si el objetivo es reducir el uso de materiales, estamos intentando ___ el costo."

explicacion: |
  Dependiendo de la función objetivo, buscamos el valor máximo o el valor mínimo de una variable.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["convergencia", "criterio"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso iterativo se considera 'convergente' cuando la diferencia entre dos soluciones sucesivas es menor a un umbral de tolerancia definido?"

explicacion: |
  La convergencia ocurre cuando la solución se estabiliza y deja de cambiar significativamente, indicando que hemos alcanzado un resultado aceptable.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["secuencia", "metodologia"]

respuesta: ["Evaluar", "Ajustar", "Implementar", "Verificar"]
tipo: ordenar
opciones_explicitas: ["Evaluar", "Ajustar", "Implementar", "Verificar"]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa tras haber obtenido un resultado inicial:"

explicacion: |
  El ciclo típico consiste en evaluar el resultado, ajustar los parámetros, implementar el cambio y verificar la mejora.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["error", "tolerancia"]

variables:
  datos: [[0.001, "muy bajo"], [0.5, "alto"], [10.0, "excesivo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["muy bajo", "alto", "excesivo", "nulo"]

enunciado: "Si el error residual en la iteración actual es de {datos[idx][0]}, se considera que el error es ___."

explicacion: |
  La magnitud del error determina si el proceso debe continuar o si se ha alcanzado la tolerancia permitida.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "ciclos"]

respuesta: "converger"
tipo: "completar"
respuestas_validas: ["converger", "convergencia"]

enunciado: "En un proceso de optimización iterativo, el objetivo es realizar ajustes sucesivos en las variables de diseño para que la función objetivo logre ___ hacia un valor óptimo."

explicacion: |
  La optimización iterativa busca reducir el error o la diferencia entre la solución actual y la solución óptima. Cuando la diferencia se vuelve despreciable, decimos que el algoritmo ha convergido.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["evaluacion", "error"]

variables:
  idx: uno_de([0, 1])
  escenario: [[0.85, "mejora"], [0.98, "mejora"]]

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["mejora", "empeoramiento", "sin cambios"]

enunciado: "Se realiza un ensayo de diseño. El valor de la función objetivo en la iteración $n$ es $f(x_n) = 100$ y en la iteración $n+1$ es $f(x_{n+1}) = 85$. Si el objetivo es minimizar la función, el resultado del ensayo representa una ___."

explicacion: |
  Al pasar de 100 a 85 en un problema de minimización, el valor de la función ha disminuido, lo que indica que la iteración ha sido exitosa en mejorar la solución.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["criterio_parada", "convergencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "Si la diferencia absoluta entre la solución actual $x_{i}$ y la solución de la iteración anterior $x_{i-1}$ es menor que una tolerancia $\epsilon$ predefinida, se considera que se ha cumplido el criterio de parada por convergencia."

explicacion: |
  El criterio de parada es fundamental para evitar ciclos infinitos. Cuando el cambio entre iteraciones es menor que la tolerancia, se asume que el algoritmo ha encontrado un punto estable.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["secuencia", "pasos"]

respuesta: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]
tipo: "ordenar"
opciones_explicitas: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización industrial basado en ensayos experimentales:"

explicacion: |
  El proceso comienza con la definición de qué se quiere optimizar, luego se realiza el ensayo físico o numérico, se evalúa la desviación respecto al objetivo y, finalmente, se modifican los parámetros para la siguiente iteración.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["calculo", "error"]

variables:
  idx: uno_de([0, 1])
  datos: [[10.5, 10.0], [5.0, 4.8]]

respuesta: datos[idx][0

enunciado: "En la iteración actual, el valor óptimo estimado es {datos[idx][0]} y el valor obtenido en el ensayo es {datos[idx][1]}. Calcule el error absoluto de la iteración (asumiendo error = |valor_estimado - valor_obtenido|)."
tipo: "input"
tolerancia_abs: 0.001

explicacion: |
  El error absoluto mide la magnitud de la desviación. En este caso, el resultado es la diferencia absoluta entre el valor de referencia y el obtenido en el ensayo.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["convergencia", "criterio_parada"]

variables:
  idx: uno_de([0, 1])
  error_actual: uno_de([0.001, 0.0001])
  error_previo: uno_de([0.005, 0.0005])

respuesta: error_actual < error_previo
tipo: completar
enunciado: "En un proceso iterativo de optimización, si el error absoluto en la iteración {error_actual} es menor que el error de la iteración anterior {error_previo}, ¿se está cumpliendo un criterio de convergencia?"

explicacion: |
  Para que un método iterativo sea considerado convergente en una etapa dada, el error debe disminuir en cada paso sucesivo. Si el error aumenta, el método está divergiendo o está en una zona de inestabilidad.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["errores", "precision"]

variables:
  escenario: uno_de(["truncamiento", "redondeo"])

respuesta: "truncamiento"

tipo: mc
opciones_explicitas: ["truncamiento", "redondeo", "redondeo_estocastico"]

enunciado: "Si un algoritmo de optimización se detiene prematuramente porque se decidió cortar los decimales de una variable sin considerar el valor del siguiente dígito, ¿qué tipo de error se está introduciendo predominantemente?"

explicacion: |
  El error de truncamiento ocurre cuando se limitan los términos de una serie o los decimales de un número, mientras que el error de redondeo surge por la incapacidad de la máquina para representar números reales con precisión infinita.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["flujo_trabajo", "iteracion"]

respuesta: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]
tipo: ordenar

opciones_explicitas: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa para mejorar una solución técnica:"

explicacion: |
  La optimización es un ciclo cerrado: primero se obtiene el resultado del ensayo, luego se compara con la meta (objetivo), se realizan los ajustes necesarios en los parámetros de entrada y finalmente se vuelve a ejecutar el ensayo.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["convergencia", "tolerancia"]

variables:
  tol: uno_de([0.00001, 0.0000001])

respuesta: "infinitas"

tipo: completar
respuestas_validas: ["infinitas", "finitas"]

enunciado: "Si un programador establece una tolerancia de error de ___ para un problema que tiene una precisión de máquina limitada, el algoritmo podría entrar en un ciclo de iteraciones ___."

explicacion: |
  Si la tolerancia exigida es menor que la precisión que la computadora puede representar para ese número (debido al error de punto flotante), el error nunca llegará a ser menor que la tolerancia y el bucle será infinito.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["gradiente", "optimizacion"]

variables:
  valor_f: uno_de([10.5, 12.2])
  valor_f_prev: uno_de([11.2, 11.5])

respuesta: valor_f < valor_f_prev

tipo: completar
enunciado: "En un problema de minimización, si el valor de la función objetivo en la iteración actual es de {valor_f} y en la anterior era de {valor_f_prev}, ¿se ha logrado una mejora en la solución?"

explicacion: |
  En problemas de optimización de mínimos, una "mejora" se define como una disminución en el valor de la función objetivo. Si el valor actual es menor que el anterior, el algoritmo se está acercando al mínimo.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["iteracion", "convergencia", "algoritmos"]

respuesta: "convergencia"
tipo: "completar"
respuestas_validas: ["convergencia"]

enunciado: "Mientras que la iteración se refiere al proceso repetitivo de aplicar un algoritmo para refinar una solución, la ________ es el estado en el que la solución obtenida se aproxima a un valor límite o solución óptima."

explicacion: |
  La iteración es la acción de repetir el ciclo, mientras que la convergencia es la propiedad matemática de que dichas repeticiones se acercan cada vez más al objetivo.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["gradiente", "busqueda", "optimizacion"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([escenario_datos[0], escenario_datos[1]])
tipo: "mc"
opciones_explicitas: ["El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles."]
  # Nota: Para cumplir la regla de una sola llamada a uno_de, reestructuramos:
  # En realidad, como es una pregunta de contraste fijo, no uso uno_de para la respuesta si la pregunta es teórica.
  # Re-haciendo para seguir la regla de "Si la respuesta no depende de sorteo, no usar variables".

# Versión corregida para pregunta teórica fija:
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["gradiente", "busqueda", "optimizacion"]

respuesta: "El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles."
tipo: "mc"
opciones_explicitas: [
  "El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles.",
  "El descenso de gradiente es un método de fuerza bruta, mientras que la búsqueda exhaustiva es un método basado en derivadas.",
  "Ambos métodos son idénticos en su forma de navegar el espacio de búsqueda.",
  "La búsqueda exhaustiva es siempre más eficiente que el descenso de gradiente en espacios continuos."
]

explicacion: |
  El descenso de gradiente es un método iterativo que utiliza el gradiente (derivada) para encontrar la dirección de máximo descenso, optimizando el tiempo de cómputo frente a una búsqueda exhaustiva que es computacionalmente costosa.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["criterio_parada", "iteracion"]

respuesta: falso
tipo: "vf"

enunciado: "El criterio de parada es el proceso de realizar iteraciones sucesivas para mejorar una solución."

explicacion: |
  Falso. El criterio de parada es la condición que determina cuándo detener el proceso iterativo (por ejemplo, cuando el error es menor a una tolerancia), no es el proceso de iteración en sí mismo.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["flujo", "iteracion", "optimización"]

respuesta: ["Evaluación de la función", "Cálculo del error/gradiente", "Actualización de la variable", "Verificación del criterio de parada"]
tipo: "ordenar"
opciones_explicitas: [
  "Evaluación de la función",
  "Cálculo del error/gradiente",
  "Actualización de la variable",
  "Verificación del criterio de parada"
]

enunciado: "Ordene los pasos lógicos de un ciclo de optimización iterativa estándar, desde el inicio de la evaluación hasta la decisión de continuar o detenerse."

explicacion: |
  Un ciclo típico comienza evaluando la función en el punto actual, calculando cuánto nos hemos alejado del óptimo (error/gradiente), moviendo la variable hacia la mejora y finalmente comprobando si ya estamos lo suficientemente cerca para parar.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["condicion_inicial", "convergencia"]

variables:
  caso: uno_de([0, 1])
  datos: [["Método de Newton-Raphson", "Muy sensible"], ["Método de Bisección", "Poco sensible"]]

respuesta: datos[caso][1
tipo: "mc"
opciones_explicitas: [
  "Muy sensible",
  "Poco sensible",
  "No depende de la condición inicial",
  "Depende únicamente del número de iteraciones"
]

enunciado: "En un proceso de optimización iterativa, el {datos[caso][0]} se caracteriza por ser {datos[caso][1]} a la elección del punto de partida inicial."

explicacion: |
  Los métodos de orden superior (como Newton-Raphson) suelen tener una convergencia cuadrática pero pueden divergir si el punto inicial es malo, a diferencia de métodos más robustos como la bisección.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["procesos", "iteracion"]

variables:
  escenario: [[150, 0.85], [220, 0.70], [310, 0.60]]
  idx: uno_de([0, 1, 2])
  costo_actual: escenario[idx][0]
  eficiencia_actual: escenario[idx][1]

enunciado: "En un proceso de fundición, se ha obtenido una mezcla con un costo de ${costo_actual} USD y una eficiencia del {eficiencia_actual * 100}%. Si el objetivo es reducir el costo un 10% manteniendo la misma eficiencia, ¿cuál debería ser el nuevo costo objetivo?"

pasos:
  - "Calcular el 10% del costo actual: {costo_actual * 0.10}"
  - "Restar ese valor al costo actual: {costo_actual - (costo_actual * 0.10)}"

respuesta: costo_actual * 0.9
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  En optimización de procesos, el ciclo iterativo busca reducir el costo objetivo. 
  El cálculo fue: ${costo_actual} * 0.9 = ${redondear(costo_actual * 0.9, 2)}.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "avanzado"
  tags: ["convergencia", "iteracion"]

variables:
  iteraciones: [[0.05, 0.02, 0.001], [0.12, 0.08, 0.05], [0.01, 0.005, 0.0001]]
  idx: uno_de([0, 1, 2])
  error_iter: iteraciones[idx]

enunciado: "Se está ejecutando un método de Newton-Raphson para hallar la raíz de una función. El error absoluto en la iteración actual es {error_iter[2]}. Si el criterio de parada es un error menor a 0.001, ¿se ha cumplido la condición de convergencia?"

respuesta: falso
tipo: vf

explicacion: |
  El error actual es {error_iter[2]}, el cual no es estrictamente menor a 0.001 en el caso seleccionado.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización de un sistema de control de temperatura:"

opciones_explicitas: ["Medir la variable", "Comparar con el setpoint", "Actuar sobre el sistema", "Analizar desviación"]
respuesta: ["Medir la variable", "Comparar con el setpoint", "Analizar desviación", "Actuar sobre el sistema"]
tipo: ordenar

explicacion: |
  La secuencia lógica es: 1. Medición, 2. Comparación, 3. Análisis del error/desviación y 4. Acción correctiva.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["parametros", "ajuste"]

variables:
  ajuste: [["K_p: 1.5", "K_i: 0.5", "K_d: 0.1"], ["K_p: 2.0", "K_i: 1.0", "K_d: 0.2"], ["K_p: 0.5", "K_i: 0.1", "K_d: 0.05"]]
  idx: uno_de([0, 1, 2])

enunciado: "Tras un ensayo de respuesta transitoria, se observa un sobreimpulso excesivo. ¿Cuál de los siguientes conjuntos de parámetros debería probarse en la siguiente iteración para reducir el sobreimpulso (asumiendo un control PID estándar)?"

opciones_explicitas: ["Reducir K_p", "Aumentar K_p", "Eliminar K_d"]
respuesta: "Reducir K_p"
tipo: mc

explicacion: |
  Un exceso de sobreimpulso suele indicar una ganancia proporcional (K_p) demasiado alta. La iteración debe buscar un valor menor para estabilizar el sistema.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "intermedio"
  tags: ["error", "iteracion"]

variables:
  datos: [[10.5, 10.45], [25.2, 25.18], [5.0, 4.99]]
  idx: uno_de([0, 1, 2])
  val_actual: datos[idx][0]
  val_previo: datos[idx][1]

enunciado: "En un proceso de optimización por descenso de gradiente, la diferencia entre el valor de la función en la iteración actual y la anterior es de ___."

respuesta_validas: ["0.05", "0.02", "0.01"]
respuesta: "0.05"
tipo: completar

explicacion: |
  El error o cambio entre iteraciones se calcula como |{val_actual} - {val_previo}|. En este caso: {abs(val_actual - val_previo)}.
```

## Sección: problema-y-restricciones (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "solución"
tipo: "completar"
respuestas_validas: ["solución", "solucion"]

enunciado: "En ingeniería, el objetivo del proceso de diseño es encontrar una ___ que satisfaga todos los requisitos establecidos."

explicacion: |
  Una solución es la respuesta técnica o el producto que resuelve el problema planteado cumpliendo con las condiciones impuestas.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["requisitos", "clasificacion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos_caso[idx][1
tipo: "mc"
opciones_explicitas: ["Requisito", "Restricción", "Optimización", "Variable"]

enunciado: "Si un cliente exige que un puente soporte exactamente 50 toneladas, esto se clasifica como un: {datos_caso[idx][0]}"

datos_caso: [["Requisito", "Requisito"], ["Restricción", "Restricción"]]

explicacion: |
  Los requisitos definen qué debe hacer la solución, mientras que las restricciones limitan el espacio de búsqueda de soluciones posibles.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["restricciones", "verdadero_falso"]

respuesta: falso
tipo: "vf"

enunciado: "¿Una restricción de presupuesto (límite de costo) es un ejemplo de un requisito de rendimiento?"

explicacion: |
  Falso. El presupuesto es una restricción de recursos; los requisitos de rendimiento se refieren a la funcionalidad o capacidad del sistema.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["proceso", "ordenar"]

respuesta: ["Identificación del problema", "Definición de restricciones", "Generación de alternativas", "Selección de la mejor solución"]
tipo: "ordenar"
opciones_explicitas: ["Generación de alternativas", "Identificación del problema", "Selección de la mejor solución", "Definición de restricciones"]

enunciado: "Ordene las etapas lógicas del proceso de ingeniería para abordar un problema:"

explicacion: |
  Primero se entiende el problema, luego se delimita qué se puede y no se puede hacer (restricciones), se crean opciones y finalmente se elige la mejor.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["viabilidad", "recursos"]

variables:
  idx: uno_de([0, 1])

respuesta: datos_viabilidad[idx][1
tipo: "mc"
opciones_explicitas: ["Viable", "Inviable", "Óptimo", "Indeterminado"]

enunciado: "Si un diseño cumple con todos los requisitos funcionales pero excede el presupuesto máximo disponible, la solución es: {datos_viabilidad[idx][0]}"

datos_viabilidad: [["Viable", "Inviable"], ["Inviable", "Viable"]]

explicacion: |
  Si una solución no cumple con una restricción crítica (como el presupuesto), se considera inviable, aunque sea técnicamente funcional.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["presupuesto", "gestion"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Proyecto A", 5000, 4500],
    ["Proyecto B", 12000, 11500]
  ])

enunciado: "En un proyecto de ingeniería, el presupuesto asignado es de {escenario[idx][1]} USD. Si el costo estimado de la solución propuesta es de {escenario[idx][2]} USD, la restricción de presupuesto se cumple."

respuesta: escenario[idx][1] >= escenario[idx][2]
tipo: completar
explicacion: |
  Para que una solución sea viable, el costo debe ser menor o igual al presupuesto disponible. En este caso, {escenario[idx][2]} <= {escenario[idx][1]} es verdadero.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["requisitos", "especificaciones"]

opciones_explicitas: ["Requisito de rendimiento", "Restricción de material", "Restricción de tiempo"]

enunciado: "Un cliente solicita que un puente debe soportar una carga de 50 toneladas. Esta especificación técnica se clasifica como una:"

respuesta: "Requisito de rendimiento"
tipo: mc

explicacion: |
  Los requisitos de rendimiento definen la capacidad operativa o funcionalidad que la solución debe alcanzar para satisfacer la necesidad del cliente.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["metodologia", "proceso"]

opciones_explicitas: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]

respuesta: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas para abordar un problema de ingeniería de manera sistemática:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la delimitación de los límites (restricciones), la creación de alternativas y finalmente la validación de la mejor opción.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["materiales", "viabilidad"]

variables:
  material_data: uno_de([
    ["Acero", 7.8, 5.0],
    ["Aluminio", 2.7, 2.0]
  ])

enunciado: "Se requiere un componente con una densidad máxima de {material_data[idx][2]} g/cm³. El material seleccionado es {material_data[idx][0]} con una densidad de {material_data[idx][1]} g/cm³."

pasos:
  - "Identificar la densidad del material propuesto."
  - "Comparar la densidad del material con el límite máximo permitido."

respuesta: material_data[idx][1] <= material_data[idx][2]
tipo: completar
explicacion: |
  La solución es viable si la propiedad física del material no excede el límite impuesto por la restricción de diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  datos: uno_de([
    ["Fase de diseño", 15, 20],
    ["Fase de prototipado", 30, 25],
    ["Fase de pruebas", 10, 12]
  ])

enunciado: "Para la fase de ___ , el tiempo estimado es de {datos[idx][1]} días, mientras que el plazo máximo permitido es de {datos[idx][2]} días."

respuestas_validas: ["diseño", "prototipado", "pruebas"]
tipo: completar

explicacion: |
  El usuario debe completar el nombre de la fase según el índice sorteado. En el caso de {datos[idx][0]}, el tiempo es {datos[idx][1]} y el límite es {datos[idx][2]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "definiciones"]

respuesta: "restricción"
tipo: mc
opciones_explicitas: ["requisito", "restricción", "objetivo", "variable"]

enunciado: "En el diseño de un sistema, un elemento que limita las opciones de solución (como un presupuesto máximo o un límite de peso) se denomina ________."

explicacion: |
  Un requisito describe lo que el sistema DEBE hacer (funcionalidad), mientras que una restricción impone límites sobre cómo debe ser construido o qué recursos puede consumir (presupuesto, tiempo, materiales).
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["optimizacion", "errores_comunes"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la 'solución óptima' es siempre aquella que maximiza el rendimiento técnico, ignorando las restricciones de costo y tiempo?"

explicacion: |
  Falso. En ingeniería, la solución óptima es un compromiso (trade-off) que satisface todos los requisitos y respeta todas las restricciones. Una solución técnicamente superior pero que excede el presupuesto es una solución inviable.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["gestion_de_proyectos", "priorizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El cliente exige un color específico (estético)", "El puente debe soportar 50 toneladas (seguridad)"],
    ["El software debe ser azul (estético)", "El software no debe colapsar con 100 usuarios (estabilidad)"]
  ]

respuesta: "seguridad"
tipo: mc
opciones_explicitas: ["estética", "seguridad", "costo", "tiempo"]

enunciado: "Dada la situación: {escenarios[escenario_idx][1]}, si las restricciones de presupuesto se ven comprometidas, ¿qué tipo de restricción debe priorizarse siempre para garantizar la viabilidad del proyecto?"

explicacion: |
  Las restricciones de seguridad y estabilidad son críticas e innegociables. Si una solución no cumple con la seguridad, no es una solución válida, independientemente de su costo o estética.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso_de_diseño"]

respuesta: ["Identificación", "Análisis", "Cumplimiento", "Validación"]
tipo: ordenar

opciones_explicitas: ["Cumplimiento", "Identificación", "Validación", "Análisis"]

enunciado: "Ordene cronológicamente las etapas lógicas en el manejo de restricciones durante el proceso de diseño de un producto:"

explicacion: |
  Primero se identifican las limitaciones (Identificación), luego se estudia cómo afectan al diseño (Análisis), se diseña respetando esos límites (Cumplimiento) y finalmente se comprueba que se cumplieron (Validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["definicion_problema", "errores_comunes"]

respuesta: ["implícitas", "explícitas"]
tipo: completar
respuestas_validas: ["implícitas", "explícitas"]

enunciado: "Las restricciones que no son mencionadas directamente por el cliente pero que son obligatorias por ley o normas técnicas se conocen como restricciones ________, mientras que las comunicadas directamente son ________."

explicacion: |
  Las restricciones explícitas son las dadas por el cliente (ej. "quiero que sea rojo"). Las implícitas son aquellas que el ingeniero debe conocer por conocimiento profesional (ej. normas de seguridad eléctrica o leyes ambientales).
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "definiciones"]

tipo: mc
opciones_explicitas: ["Un requisito define qué debe hacer el sistema, mientras que una restricción limita cómo debe hacerse.", "Un requisito es una limitación de recursos, mientras que una restricción es una funcionalidad deseada.", "Ambos términos son sinónimos en el diseño de ingeniería.", "El requisito es una limitación de tiempo y la restricción es una meta de rendimiento."]

enunciado: "En el contexto de la ingeniería de sistemas, ¿cuál es la distinción fundamental entre un requisito y una restricción?"

explicacion: |
  Los requisitos describen las funciones o capacidades que el producto debe poseer (el "qué"), mientras que las restricciones imponen límites o condiciones de diseño que deben respetarse (el "cómo", como presupuesto, tiempo o normativas).
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["conceptos_fundamentales"]

tipo: vf
enunciado: "Las restricciones de diseño, como el presupuesto o la disponibilidad de materiales, son elementos que el ingeniero puede ignorar si la solución técnica es superior."

respuesta: falso

explicacion: |
  Las restricciones son límites inamovibles. Si una solución técnica es excelente pero excede el presupuesto o viola una norma de seguridad (restricción), la solución no es válida para el problema planteado.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["clasificacion", "requisitos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El sistema debe procesar 100 transacciones por segundo.", "El sistema debe pesar menos de 5kg."],
    ["El sistema debe ser de color azul.", "El sistema debe operar entre 0°C y 50°C."]
  ]
  tipos: ["Funcional", "No Funcional"]

tipo: completar
enunciado: "Considerando el escenario: '{escenarios[escenario_idx][0]}', este se clasifica como un requisito de tipo {tipos[0]}."
respuestas_validas: ["Funcional", "No Funcional"]
respuesta: "Funcional"

explicacion: |
  Los requisitos funcionales definen acciones o comportamientos específicos del sistema (lo que hace), mientras que los no funcionales (como peso, color o temperatura) definen atributos o cualidades de la solución.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["metodologia", "proceso"]

tipo: ordenar
opciones_explicitas: ["Definición del problema y sus restricciones", "Generación de alternativas de solución", "Evaluación de soluciones bajo criterios de diseño", "Selección de la solución óptima"]

enunciado: "Ordene cronológicamente las etapas lógicas del proceso de diseño de ingeniería para abordar un problema con restricciones dadas:"

explicacion: |
  No se puede diseñar sin entender primero las limitaciones (restricciones). Una vez definido el problema, se exploran opciones, se comparan contra las restricciones y finalmente se elige la mejor.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["optimizacion", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Aumentar la velocidad de un motor", "Reducir el costo de fabricación"],
    ["Mejorar la durabilidad de un material", "Reducir el peso de una estructura"]
  ]
  objetivo: ["Optimizar el rendimiento", "Optimizar la economía"]
  conflicto: ["El costo de los materiales aumenta", "La resistencia estructural disminuye"]

tipo: mc
opciones_explicitas: ["El cumplimiento de la restricción suele entrar en conflicto con la optimización del objetivo.", "La restricción es el objetivo principal del ingeniero.", "Las restricciones eliminan la necesidad de optimizar.", "No existe conflicto entre objetivos y restricciones."]

enunciado: "Al intentar '{objetivo[caso_idx]}' en el caso de '{casos[caso_idx][0]}', es común que surja un conflicto con la restricción de '{conflicto[caso_idx]}'. ¿Cómo se define esta relación?"

explicacion: |
  En ingeniería, la optimización de un parámetro (ej. velocidad) suele penalizar otro (ej. costo o peso). El diseño consiste en encontrar el equilibrio óptimo dentro de las restricciones impuestas.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["recursos", "optimizacion"]

variables:
  escenario: [[150, "150 kg"], [200, "200 kg"], [350, "350 kg"]]
  idx: uno_de([0, 1, 2])
  límite: escenario[idx][0]
  unidad: escenario[idx][1]

enunciado: "Se debe diseñar un soporte estructural cuyo peso total no puede exceder los {límite} {unidad}. Si el material seleccionado tiene una densidad de 5 kg/m³, ¿cuál es el volumen máximo permitido para cumplir con esta restricción?"

pasos:
  - "Identificar el límite de masa: {límite} {unidad}"
  - "Utilizar la fórmula de densidad: Volumen = Masa / Densidad"
  - "Calcular: {límite} / 5"

respuesta: redondear(límite / 5, 2)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  Para cumplir con la restricción de masa, el volumen debe ser igual o menor al resultado del cálculo. El volumen máximo es de {redondear(límite / 5, 2)} m³.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "restricciones"]

variables:
  proyecto: [[120, "120 días"], [180, "180 días"], [240, "240 días"]]
  idx: uno_de([0, 1, 2])
  plazo_total: proyecto[idx][0]
  unidad_plazo: proyecto[idx][1]

enunciado: "Un proyecto de infraestructura tiene un plazo de entrega estricto de {plazo_total} {unidad_plazo}. Si la fase de cimentación dura 45 días y la fase de estructura dura 100 días, ¿se cumple con la restricción de tiempo si la fase de acabado requiere 100 días adicionales?"

respuesta: falso
tipo: vf

explicacion: |
  La suma de las fases es 45 + 100 + 100 = 245 días. Como 245 > {plazo_total}, la restricción de tiempo se viola.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "intermedio"
  tags: ["costos", "presupuesto"]

variables:
  datos: [[500, "500 USD"], [800, "800 USD"], [1200, "1200 USD"]]
  idx: uno_de([0, 1, 2])
  presupuesto: datos[idx][0]
  moneda: datos[idx][1]

enunciado: "El presupuesto asignado para un prototipo es de {presupuesto} {moneda}. Se deben comprar 3 sensores de $150 cada uno y un controlador de $400. El costo total de los componentes es: ___"

respuesta: "850 USD"
tipo: completar
respuestas_validas: ["850 USD"]

explicacion: |
  El cálculo es (3 * 150) + 400 = 450 + 400 = 850. El costo total es 850 USD.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["procesos", "orden"]

enunciado: "Para asegurar la integridad estructural de un puente, se deben seguir estrictamente las siguientes fases de construcción. Ordene las etapas de forma lógica:"

opciones_explicitas: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
respuesta: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
tipo: ordenar

explicacion: |
  En ingeniería civil, la secuencia lógica siempre comienza por la base (cimentación), sigue con el esqueleto (estructura), la superficie de rodamiento (tableros) y finalmente los detalles (acabados).
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["seguridad", "carga"]

variables:
  carga_max: [[5000, "5000 N"], [8000, "8000 N"], [10000, "10000 N"]]
  idx: uno_de([0, 1, 2])
  valor_max: carga_max[idx][0]
  unidad_max: carga_max[idx][1]

enunciado: "Una viga tiene una capacidad de carga máxima de {valor_max} {unidad_max}. Si se aplica una carga de 4500 N y un factor de seguridad de 1.5, ¿la estructura es segura (el esfuerzo aplicado * factor de seguridad <= carga máxima)?"

respuesta: uno_de(["verdadero", "falso"])
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Calculamos el esfuerzo de diseño: 4500 * 1.5 = 6750 N. 
  Si la carga máxima es de {valor_max} N, comparamos: 
  {if(6750 <= valor_max, "6750 <= " + string(valor_max), "6750 > " + string(valor_max))}
```

## Sección: prototipo (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos_basicos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "versión preliminar y simplificada de la solución para probar ideas antes de la versión final"
tipo: completar
respuestas_validas: ["versión preliminar y simplificada de la solución para probar ideas antes de la versión final"]

enunciado: "Un prototipo se define como una ___."

explicacion: |
  El prototipo es una representación temprana de un producto o sistema que permite validar hipótesis de diseño y funcionalidad antes de la producción masiva.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_objetivos"
  nivel: "basico"
  tags: ["objetivo", "validacion"]

opciones_explicitas: ["A) Maximizar la estética del producto final", "B) Probar ideas y reducir riesgos de diseño", "C) Reemplazar la fase de fabricación definitiva", "D) Aumentar el costo de producción"]

respuesta: "B) Probar ideas y reducir riesgos de diseño"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de crear un prototipo en un proceso de ingeniería?"

explicacion: |
  El prototipado busca validar conceptos, detectar errores tempranos y asegurar que la solución propuesta sea viable, minimizando el riesgo antes de la inversión final.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "intermedio"
  tags: ["fidelidad", "low_fidelity", "high_fidelity"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Baja fidelidad", "se enfoca en la estructura y flujo básico, con pocos detalles visuales"],
    ["Alta fidelidad", "se parece mucho al producto final en apariencia y funcionalidad"]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Baja fidelidad", "Alta fidelidad"]

enunciado: "Un prototipo de {escenario[idx][0]} es aquel que {escenario[idx][1]}."

explicacion: |
  La fidelidad se refiere al nivel de detalle y realismo del prototipo. Los de baja fidelidad son rápidos y baratos, mientras que los de alta fidelidad son casi indistinguibles del producto final.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "basico"
  tags: ["iteracion", "mejora_continua"]

respuesta: falso
tipo: vf

enunciado: "El proceso de prototipado es lineal y no requiere volver a las etapas anteriores una vez que el prototipo ha sido construido."

explicacion: |
  Falso. El prototipado es un proceso iterativo; los resultados de las pruebas suelen llevar a rediseños y nuevas versiones del prototipo para corregir fallos.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_ciclo_vida"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]

respuesta: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas de un ciclo de prototipado funcional:"

explicacion: |
  Un ciclo estándar comienza con la definición de qué se quiere probar, seguido de la construcción, la ejecución de pruebas y finalmente el análisis de los datos obtenidos para decidir si se itera o se avanza.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipado_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "validar"
tipo: mc
opciones_explicitas: ["validar", "finalizar", "producir", "comercializar"]

enunciado: "Un prototipo es una versión preliminar y simplificada de una solución cuyo objetivo principal es _______ ideas antes de comprometer recursos en la versión final."

explicacion: |
  El prototipado permite fallar rápido y barato. Al probar una idea mediante un prototipo, se busca validar si la solución propuesta resuelve el problema antes de pasar a la fase de producción masiva.
```

```
metadata:
  materia: "ingenieria"
  tema: "ciclo_vida_prototipo"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

variables:
  pasos_orden: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]

respuesta: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]
tipo: ordenar
opciones_explicitas: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]

enunciado: "Ordene cronológicamente las etapas de un proceso de prototipado iterativo para asegurar la mejora continua del producto."

explicacion: |
  El proceso comienza con la identificación de la necesidad, seguido de la construcción de una versión mínima, la validación con el usuario real y, finalmente, la iteración basada en el feedback obtenido.
```

```
metadata:
  materia: "ingenieria"
  tema: "fidelidad_prototipo"
  nivel: "intermedio"
  tags: ["fidelidad", "low_fi"]

respuesta: falso
tipo: vf

enunciado: "Un prototipo de baja fidelidad (low-fidelity) tiene como característica principal presentar un aspecto visual y funcional muy cercano al producto final real."

explicacion: |
  Falso. Los prototipos de baja fidelidad (como bocetos en papel) son rápidos y económicos, pero carecen de realismo visual. Los de alta fidelidad son los que se acercan a la versión final.
```

```
metadata:
  materia: "ingenieria"
  tema: "gestion_riesgo"
  nivel: "avanzado"
  tags: ["costos", "riesgo"]

variables:
  escenario: [
    ["detectar error en prototipo", "10"],
    ["detectar error en producción", "1000"]
  ]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Si el costo de corregir un error en fase de prototipado es de ${escenario[idx][0]} y en fase de producción es de ${escenario[idx][1]}, ¿cuál es la diferencia de costo (en unidades monetarias) entre ambos escenarios según el caso actual?"

pasos:
  - "Identificar el costo en prototipado: 10"
  - "Identificar el costo en producción: 1000"
  - "Calcular la diferencia: 1000 - 10 = 990"

explicacion: |
  La detección temprana de errores mediante prototipos reduce drásticamente los costos de ingeniería. En este caso, el error en producción es 100 veces más costoso que en la fase de prototipado.
```

```
metadata:
  materia: "ingenieria"
  tema: "componentes_prototipo"
  nivel: "basico"
  tags: ["elementos"]

respuesta: "funcionalidad"
tipo: completar
respuestas_validas: ["funcionalidad", "estetica", "marketing"]

enunciado: "En un prototipo de concepto (Proof of Concept), el enfoque principal no es la estética del producto, sino validar su _______ principal."

explicacion: |
  El Proof of Concept (PoC) busca demostrar que una idea es técnicamente viable. Por ello, se prioriza la funcionalidad básica sobre el diseño visual o el empaque.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "validar"
tipo: "completar"
respuestas_validas: ["validar", "verificar", "probar"]

enunciado: "El objetivo principal de crear un prototipo no es construir el producto final, sino _______ las hipótesis de diseño y la funcionalidad de la solución."

explicacion: |
  Un prototipo es una herramienta de aprendizaje. Su fin no es la estética ni la perfección, sino validar si la idea resuelve el problema planteado antes de invertir grandes recursos.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["error_comun", "gestion_proyectos"]

variables:
  es_final: uno_de([verdadero, falso])

respuesta: es_final
tipo: "vf"

enunciado: "Un prototipo funcional que permite probar la lógica de un sistema, pero que utiliza materiales de baja fidelidad y no es apto para la venta al público, es considerado una versión final del producto."

pasos:
  - "Evaluar si el objetivo del prototipo es la validación o la comercialización."
  - "Comparar la durabilidad y estética del prototipo con los estándares de mercado."

explicacion: |
  El prototipo es una versión preliminar y simplificada. Si el objeto está destinado a ser vendido y tiene todas las características de producción, ya no es un prototipo, es el producto final.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "intermedio"
  tags: ["fidelidad", "costos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Baja fidelidad", "rápido y económico"],
    ["Alta fidelidad", "detallado y costoso"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: "mc"
opciones_explicitas: ["rápido y económico", "detallado y costoso", "solo para marketing", "no tiene utilidad"]

enunciado: "Si estamos en una fase inicial de diseño y necesitamos un prototipo de {escenarios[escenario_idx][0]}, este suele ser _______."

explicacion: |
  La elección de la fidelidad depende de la pregunta que queramos responder. Los prototipos de baja fidelidad (como bocetos o maquetas de cartón) son ideales para validar conceptos rápidamente sin gastar presupuesto.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["metodologia", "iteracion"]

respuesta: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]
tipo: "ordenar"
opciones_explicitas: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]

enunciado: "Para que el proceso de prototipado sea efectivo en un ciclo de mejora continua, se deben seguir estos pasos en orden:"

explicacion: |
  El proceso es iterativo. El análisis de los resultados obtenidos en las pruebas es lo que permite refinar el diseño para la siguiente versión del prototipo.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_errores"
  nivel: "avanzado"
  tags: ["eficiencia", "gestion_recursos"]

respuesta: "falso"
tipo: "vf"

enunciado: "Es un error común en la gestión de proyectos dedicar demasiado tiempo y recursos a que un prototipo sea estéticamente perfecto antes de haber validado su funcionalidad básica."

explicacion: |
  Este error se conoce como "over-engineering" en la fase de prototipado. El objetivo es fallar rápido y barato para aprender; perfeccionar la estética antes de validar la utilidad es un desperdicio de recursos en etapas tempranas.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_vs_producto_final"
  nivel: "basico"
  tags: ["diseño", "desarrollo"]

respuesta: "verificar la viabilidad de una idea"
tipo: completar
respuestas_validas: ["verificar la viabilidad de una idea", "validar conceptos", "probar ideas"]

enunciado: "A diferencia del producto final, cuyo objetivo es la producción en serie y la satisfacción del cliente, el propósito principal de un prototipo es ___."

explicacion: |
  El prototipo es una herramienta de aprendizaje y validación técnica, no un producto destinado a la venta o uso final.
```

```
metadata:
  materia: "ingenieria"
  tema: "caracteristicas_prototipo"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  es_final: uno_de([verdadero, falso])

respuesta: es_final
tipo: completar
enunciado: "Un prototipo es una versión preliminar y simplificada de la solución que busca probar ideas antes de la versión final. ¿Es el prototipo la versión definitiva del diseño? {es_final}"

explicacion: |
  Si la variable sorteada es falso, la respuesta es falso. El prototipo es una etapa de experimentación, no el resultado final.
```

```
metadata:
  materia: "ingenieria"
  tema: "comparacion_prototipo"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: "un prototipo es una versión simplificada para probar ideas"
tipo: mc
opciones_explicitas: ["un prototipo es una versión simplificada para probar ideas", "un prototipo es el producto listo para el mercado", "un prototipo es una versión con todos los materiales finales", "un prototipo es un manual de instrucciones"]

enunciado: "¿Cuál es la distinción fundamental entre un prototipo y un producto terminado?"

explicacion: |
  El prototipo se enfoca en la funcionalidad y la validación de hipótesis de diseño, mientras que el producto terminado se enfoca en la manufacturabilidad, estética y calidad comercial.
```

```
metadata:
  materia: "ingenieria"
  tema: "ciclo_prototipado"
  nivel: "intermedio"
  tags: ["procesos"]

respuesta: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]
tipo: ordenar
opciones_explicitas: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]

enunciado: "Ordene las etapas lógicas en el proceso de creación de un prototipo para validar una solución técnica:"

explicacion: |
  El proceso es cíclico e iterativo: primero se sabe qué se necesita, se construye, se prueba y se vuelve a diseñar según los errores encontrados.
```

```
metadata:
  materia: "ingenieria"
  tema: "fidelidad_prototipo"
  nivel: "avanzado"
  tags: ["especificaciones"]

variables:
  es_alta_fidelidad: uno_de([verdadero, falso])

respuesta: es_alta_fidelidad
tipo: completar
enunciado: "Un prototipo de alta fidelidad se distingue de uno de baja fidelidad porque posee una apariencia y funcionalidad muy cercanas al producto final. ¿Es esto correcto? {es_alta_fidelidad}"

explicacion: |
  La fidelidad se refiere a qué tan cerca está el prototipo del producto real en términos de estética, interacción y precisión técnica.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un sensor de temperatura para un invernadero", "un nuevo diseño de ala para un dron"], ["validar la precisión de la lectura", "probar la estabilidad aerodinámica"]]

respuesta: "___"
tipo: completar
respuestas_validas: ["validar la precisión de la lectura", "probar la estabilidad aerodinámica"]

enunciado: "En el desarrollo de {escenarios[escenario_idx][0]}, el objetivo principal de crear un prototipo es {escenarios[escenario_idx][1]}."

explicacion: |
  Un prototipo es una versión preliminar que permite testear hipótesis específicas antes de la producción masiva.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "basico"
  tags: ["fidelidad", "costos"]

variables:
  tipo_prototipo_idx: uno_de([0,1])
  datos: [["baja fidelidad", "alta fidelidad"], ["rápido y económico", "lento y costoso"]]

respuesta: datos[tipo_prototipo_idx][1
tipo: mc
opciones_explicitas: ["rápido y económico", "lento y costoso", "extremadamente preciso", "imposible de modificar"]]

enunciado: "Si estamos construyendo un prototipo de {datos[tipo_prototipo_idx][0]}, su principal ventaja es que es ___."

explicacion: |
  Los prototipos de baja fidelidad (como bocetos o maquetas simples) priorizan la velocidad y el bajo costo para fallar rápido y barato.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["proceso", "iteracion"]]

respuesta: ["Diseño", "Prototipado", "Pruebas", "Análisis"]
tipo: ordenar
opciones_explicitas: ["Diseño", "Prototipado", "Pruebas", "Análisis", "Descarte"]

enunciado: "Ordene las etapas lógicas para mejorar un prototipo tras un testeo fallido:"

explicacion: |
  El proceso de ingeniería es iterativo: se diseña, se construye, se prueba, se analiza el error y se vuelve a diseñar.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["falso", "conceptos"]]

respuesta: falso

tipo: vf

enunciado: "Un prototipo es una versión simplificada que debe tener exactamente las mismas características y materiales que el producto final."

explicacion: |
  Falso. El prototipo suele ser una versión simplificada (MVP o prototipo funcional) que omite detalles estéticos o de manufactura para centrarse en la funcionalidad técnica.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_evaluacion"
  nivel: "intermedio"
  tags: ["metricas", "decision"]]

variables:
  caso_idx: uno_de([0,1])
  casos: [["El prototipo falló en la prueba de carga", "El prototipo superó las pruebas de carga"], ["revisar el diseño estructural", "proceder a la fase de producción"]]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["revisar el diseño estructural", "proceder a la fase de producción", "cancelar el proyecto", "aumentar el presupuesto"]]

enunciado: "Si tras las pruebas el prototipo presenta un comportamiento de: {casos[caso_idx][0]}, la acción inmediata debe ser ___."

explicacion: |
  La fase de pruebas del prototipo sirve para tomar decisiones: si falla, se itera (se vuelve a diseñar); si tiene éxito, se avanza hacia la versión final.
```

## Sección: resistencia-de-materiales (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "definicion"]

respuesta: "fuerza / area"
tipo: completar
respuestas_validas: ["fuerza / area", "fuerza / área", "F/A", "F/A"]

enunciado: "La tensión (o esfuerzo) se define matemáticamente como la relación entre la ___ aplicada sobre una sección transversal y el ___ de dicha sección."

explicacion: |
  La tensión ($\sigma$ o $\tau$) es la intensidad de las fuerzas internas que actúan en un cuerpo, definida como la fuerza aplicada dividida por el área de la sección que la soporta.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "tension", "carga"]

variables:
  escenario: uno_de([["un pistón que empuja un bloque", "compresión"], ["un cable de acero que sostiene una lámpara", "tensión"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["compresión", "tensión", "cizalladura", "torsión"]

enunciado: "En el caso de {escenario[0]}, el material está sometido principalmente a un esfuerzo de ___."

explicacion: |
  La compresión ocurre cuando las fuerzas actúan hacia el interior del cuerpo (acortándolo), mientras que la tensión ocurre cuando las fuerzas actúan hacia afuera (estirándolo).
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "rigidez", "triangulo"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el triángulo la forma geométrica más rígida en estructuras debido a que sus ángulos no pueden cambiar sin que cambien las longitudes de sus lados?"

explicacion: |
  A diferencia de un cuadrilátero, que puede deformarse en un paralelogramo manteniendo sus lados iguales, un triángulo es indeformable si sus lados son rígidos.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["armadura", "nodos", "barras"]

respuesta: ["Nodos", "Barras", "Cargas"]
tipo: ordenar

opciones_explicitas: ["Nodos", "Barras", "Cargas"]

enunciado: "Ordene los componentes de una armadura estructural desde el punto de unión hasta el elemento que transmite la fuerza:"

pasos:
  - "Punto de intersección de elementos"
  - "Elemento lineal que une los puntos"
  - "Fuerza externa aplicada"

explicacion: |
  En una armadura, las cargas se aplican en los nodos, las cuales se transmiten a través de las barras (elementos) como fuerzas axiales.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["calculo", "tension", "area"]

variables:
  datos: [[100, 20], [50, 10], [200, 50]]

respuesta: datos[idx][0] / datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una barra soporta una fuerza de {datos[idx][0]} N y tiene un área de sección transversal de {datos[idx][1]} mm², ¿cuál es el valor de la tensión en MPa?"

pasos:
  - "Identificar la fuerza aplicada (F)"
  - "Identificar el área de la sección (A)"
  - "Dividir F / A para obtener la tensión"

explicacion: |
  La tensión se calcula dividiendo la fuerza entre el área. En este caso, al usar Newtons y mm², el resultado se expresa directamente en Megapascales (MPa).
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "calculo"]

variables:
  fuerza: 5000
  area: 25

respuesta: fuerza / area
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un perno de acero de sección transversal de {area} mm² está sujeto a una fuerza de tracción axial de {fuerza} N. Calcule la tensión normal ($\sigma$) en MPa."

pasos:
  - "Identificar la fuerza aplicada: $F = 5000$ N"
  - "Identificar el área de la sección: $A = 25$ mm²"
  - "Aplicar la fórmula de tensión: $\sigma = F / A$"

explicacion: |
  La tensión normal se define como la fuerza aplicada dividida por el área de la sección transversal: $\sigma = F / A$.
  En este caso: $5000 / 25 = 200$ MPa.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["compresion", "esfuerzo"]

variables:
  esfuerzo: 150
  area: 100

respuesta: verdadero
tipo: vf

enunciado: "Si un elemento estructural está sometido a una carga que tiende a reducir su longitud, estamos ante un caso de {esfuerzo} MPa de compresión. ¿Es esto un esfuerzo de compresión?"

explicacion: |
  Correcto. La compresión es el esfuerzo que actúa de forma perpendicular a la sección transversal y tiende a acortar el elemento.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["geometria", "estructuras"]

variables:
  opciones: ["Cuadrilátero", "Triángulo", "Pentágono"]

respuesta: "Triángulo"
tipo: mc
opciones_explicitas: ["Cuadrilátero", "Triángulo", "Pentágono"]

enunciado: "En el diseño de cerchas (trusses), se utiliza la geometría del {uno_de(opciones)} porque es la única forma geométrica que es intrínsecamente rígida, es decir, sus ángulos no cambian sin que cambien las longitudes de sus lados."

explicacion: |
  El triángulo es la unidad básica de las estructuras rígidas porque sus propiedades geométricas están determinadas únicamente por la longitud de sus tres lados.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["metodologia", "calculo"]

variables:
  pasos_correctos: ["Identificar carga", "Calcular área", "Dividir carga por área"]

respuesta: ["Identificar carga", "Calcular área", "Dividir carga por área"]
tipo: ordenar
opciones_explicitas: ["Dividir carga por área", "Identificar carga", "Calcular área"]

enunciado: "Ordene los pasos lógicos para determinar la tensión axial en una barra:"

explicacion: |
  Para resolver problemas de resistencia, primero se deben conocer las fuerzas (carga), luego la geometría (área) y finalmente aplicar la relación matemática.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["relacion", "tension"]

variables:
  fuerza: 1000
  area: 50
  tension_calculada: 20

respuesta: "20"
tipo: completar
respuestas_validas: ["20"]

enunciado: "Si duplicamos la carga aplicada a una barra manteniendo su área constante, la tensión resultante será el ___ de la tensión original."

explicacion: |
  Como la tensión $\sigma = F / A$ es directamente proporcional a la fuerza, si la fuerza se duplica, la tensión también se duplica.
  En este ejemplo: $1000 / 50 = 20$.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "presion", "conceptos"]

respuesta: "tension"
tipo: mc
opciones_explicitas: ["tension", "presion", "esfuerzo_cortante", "deformacion"]

enunciado: "Aunque a menudo se usan como sinónimos en el lenguaje cotidiano, en ingeniería la fuerza interna distribuida perpendicularmente a un área interna de un cuerpo se denomina ___."

explicacion: |
  La presión se define como una fuerza externa aplicada sobre una superficie, mientras que la tensión (o esfuerzo normal) es la intensidad de las fuerzas internas que actúan en una sección transversal de un cuerpo debido a cargas externas.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "estructuras", "triangulo"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuadrilátero formado por barras articuladas es intrínsecamente rígido y no puede deformarse sin cambiar la longitud de sus lados, a diferencia de un triángulo."

explicacion: |
  El triángulo es la única forma geométrica que es unívocamente determinada por la longitud de sus tres lados (teorema de la existencia del triángulo), lo que lo hace la unidad básica de rigidez en estructuras de celosía.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "deformacion"]

variables:
  escenario: uno_de([[100, "acortamiento"], [50, "acortamiento"]])

respuesta: escenario[1
tipo: completar
respuestas_validas: ["acortamiento", "estiramiento", "torsion"]

enunciado: "Cuando un material está sometido exclusivamente a esfuerzos de compresión axial, el efecto principal esperado en su dimensión longitudinal es el ___."

explicacion: |
  La compresión implica fuerzas que tienden a "aplastar" el material, lo que resulta en una reducción de su longitud (acortamiento) y un aumento de su sección transversal (efecto Poisson).
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["calculo", "tension_axial"]

variables:
  datos: [[1200, 0.02, 0.05], [800, 0.03, 0.04]]

respuesta: datos[0][0] / datos[0][1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una carga axial de 1200 N sobre una barra de sección transversal de 0.02 m². ¿Cuál es el valor del esfuerzo normal (en Pascales)?"

pasos:
  - "Identificar la carga (P = 1200 N)"
  - "Identificar el área (A = 0.02 m²)"
  - "Calcular el esfuerzo usando la fórmula σ = P / A"

explicacion: |
  El esfuerzo normal σ se calcula dividiendo la fuerza aplicada (N) por el área de la sección transversal (m²). En este caso: 1200 / 0.02 = 60000 Pa.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

respuesta: ["Carga", "Esfuerzo", "Deformación"]
tipo: ordenar
opciones_explicitas: ["Esfuerzo", "Deformación", "Carga", "Reacción"]

enunciado: "Ordene la secuencia lógica de causalidad en el análisis de resistencia de materiales, desde la acción externa hasta el efecto físico en el cuerpo."

explicacion: |
  Primero se aplica una Carga externa, la cual genera un Esfuerzo (tensión/compresión) interno en el material, lo que finalmente produce una Deformación (cambio de forma o tamaño).
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "conceptos"]

variables:
  es_distinguido: verdadero

respuesta: es_distinguido
tipo: completar
enunciado: "En ingeniería, la tensión se define como la fuerza interna por unidad de área, mientras que el concepto de esfuerzo suele referirse a la carga aplicada externamente sobre una sección transversal. ¿Es esta distinción conceptualmente válida para diferenciar la respuesta interna del material de la carga externa?"

explicacion: |
  La tensión es una propiedad interna que surge como respuesta a una carga aplicada (esfuerzo externo). Aunque a menudo se usan como sinónimos, la distinción es fundamental para el análisis de estados de carga.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "traccion", "esfuerzos"]

variables:
  caso: uno_de([[1, "acortar"], [2, "alargar"], [3, "cortar"]])

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["acortar", "alargar", "cortar"]

enunciado: "Si sometemos un cilindro de acero a un esfuerzo de compresión pura, el efecto principal sobre su geometría longitudinal será ___."

pasos:
  - "Identificar el sentido de la fuerza aplicada."
  - "Determinar si la fuerza tiende a expandir o contraer el material."

explicacion: |
  La compresión es un esfuerzo que tiende a reducir las dimensiones de un cuerpo, mientras que la tracción busca incrementarlas.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "estructuras", "triangulo"]

variables:
  forma: uno_de([[0, "cuadrado"], [1, "triangulo"]])

respuesta: forma[idx][1
tipo: mc
opciones_explicitas: ["cuadrado", "triangulo"]

enunciado: "Comparando un cuadrilátero con un triángulo, ¿cuál de estas formas es intrínsecamente rígida porque sus ángulos no pueden cambiar sin variar la longitud de sus lados?"

explicacion: |
  El triángulo es la única forma geométrica simple que es indeformable (rígida) por sí misma, ya que sus tres lados definen unívocamente su forma. Un cuadrilátero puede colapsar (deformarse) manteniendo sus lados constantes.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["proceso", "carga"]

respuesta: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]
tipo: ordenar
opciones_explicitas: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]

enunciado: "Ordene cronológicamente los eventos que ocurren en un elemento estructural bajo carga:"

explicacion: |
  Primero se aplica la carga, esto genera tensiones internas en el material para resistirla, y finalmente, si el material no es infinitamente rígido, se produce la deformación.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["tensión_corte", "tensión_normal"]

variables:
  tipo_t: uno_de([[0, "paralela"], [1, "perpendicular"]])

respuesta: tipo_t[idx][1
tipo: completar
opciones_explicitas: ["paralela", "perpendicular"]

enunciado: "Mientras que la tensión normal actúa de forma perpendicular a la sección transversal, la tensión de corte actúa de forma ___ a la misma."

explicacion: |
  La distinción fundamental radica en la orientación del vector de fuerza respecto al plano de la sección: perpendicular para la normal y paralela para la de corte (o tangencial).
```

```
metadata:
  materia: "ingenieria"
  tema: "tension_axial"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "ingenieria"]

variables:
  datos: [[5000, 0.01], [8000, 0.02], [12000, 0.015]]
  idx: uno_de([0, 1, 2])
  fuerza: datos[idx][0]
  area: datos[idx][1]
  esfuerzo: fuerza / area

respuesta: esfuerzo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un cable de acero soporta una carga axial de {fuerza} N. Si su sección transversal es de {area} m², ¿cuál es el esfuerzo axial (tensión) en Pa?"

explicacion: |
  El esfuerzo axial ($\sigma$) se calcula como la fuerza aplicada dividida por el área de la sección transversal: $\sigma = F / A$.
```

```
metadata:
  materia: "ingenieria"
  tema: "compresion_axial"
  nivel: "basico"
  tags: ["compresion", "esfuerzo"]

variables:
  escenario: [[15000, "compresion"], [20000, "compresion"]]
  idx: uno_de([0, 1])
  fuerza: escenario[idx][0]
  tipo_esfuerzo: escenario[idx][1]

respuesta: tipo_esfuerzo
tipo: mc
opciones_explicitas: ["tension", "compresion", "cizalladura"]

enunciado: "Si una carga de {fuerza} N actúa sobre un pilar reduciendo su longitud, el tipo de esfuerzo predominante es..."

explicacion: |
  Cuando las fuerzas actúan hacia el interior del cuerpo, tendiendo a acortarlo, el esfuerzo se denomina compresión.
```

```
metadata:
  materia: "ingenieria"
  tema: "geometria_estructural"
  nivel: "intermedio"
  tags: ["triangulo", "rigidez", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es el triángulo una forma geométrica intrínsecamente rígida, ya que sus tres lados definen una única forma sin necesidad de uniones articuladas para mantener su geometría?"

explicacion: |
  A diferencia de un cuadrilátero, que puede deformarse en un paralelogramo manteniendo la longitud de sus lados, un triángulo es rígido porque sus ángulos están fijados por la longitud de sus lados.
```

```
metadata:
  materia: "ingenieria"
  tema: "geometria_estructural"
  nivel: "basico"
  tags: ["triangulo", "elementos"]

respuesta: ["Vértice", "Vértice", "Vértice"]
tipo: ordenar
opciones_explicitas: ["Vértice", "Vértice", "Vértice"]

enunciado: "Ordene los elementos de un triángulo según su jerarquía de construcción (puntos de unión, líneas de conexión, espacio interno):"

pasos:
  - "Identificar los puntos de unión (nodos)."
  - "Identificar las líneas que los unen (barras)."
  - "Identificar el área encerrada (superficie)."

explicacion: |
  En el análisis de estructuras tipo truss (celosías), primero definimos los nodos (vértices), luego los elementos (barras) y finalmente el área resultante.
```

```
metadata:
  materia: "ingenieria"
  tema: "deformacion_axial"
  nivel: "intermedio"
  tags: ["deformacion", "ley_de_hooke"]

variables:
  casos: [[0.005, "elongacion"], [0.002, "elongacion"]]
  idx: uno_de([0, 1])
  deformacion: casos[idx][0]
  tipo_deformacion: casos[idx][1]

respuesta: tabla_deformacion[idx][1
tipo: completar

variables_extra:
  tabla_deformacion: [["0.005", "elongacion"], ["0.002", "elongacion"]]

respuestas_validas: ["elongacion"]

enunciado: "Si un material experimenta una deformación unitaria de {deformacion}, el fenómeno físico observado es una ___."

explicacion: |
  La deformación unitaria ($\epsilon$) positiva indica un aumento en la longitud del elemento, lo que se conoce como elongación.
```
