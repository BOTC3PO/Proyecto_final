# Examen jefe — [PENDIENTE #919]

> Logro #919. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 6 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **150 preguntas totales** en 6/6 secciones.

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
respuestas_validas:
  - "matematico"
  - "matemático"

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

tipo: "mc"
opciones_explicitas: ["variable", "parámetro"]

enunciado: "En el contexto de un modelo, si un valor cambia a medida que el sistema evoluciona, se denomina variable. Si el valor permanece constante durante el análisis, se denomina ___."

respuesta: "parámetro"

explicacion: |
  Las variables representan las incógnitas del sistema (como la posición o el tiempo), mientras que los parámetros son valores que definen las propiedades del sistema (como la gravedad o la densidad).
```

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
respuesta_orden: ["Definición de requerimientos", "Modelado matemático", "Simulación computacional", "Pruebas de prototipo a escala"]
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

enunciado: "En el modelado de esfuerzos mecánicos, el esfuerzo normal $\\sigma$ se define como la fuerza aplicada $F$ dividida por el área de la sección transversal $A$. Si aplicamos una fuerza de {fuerza} N sobre un área de {area} m², el esfuerzo resultante es:"

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

respuestas_validas:
  - "0.25"
  - "1/4"
  - "0.5"
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

respuesta: falso
tipo: vf
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
respuesta_orden: ["Definición del problema", "Modelado matemático", "Simulación y validación", "Construcción del prototipo"]
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

enunciado: "En un modelo de simulación, si un pequeño cambio en una variable de entrada produce un cambio desproporcionadamente grande en el resultado, decimos que el modelo tiene una sensibilidad ___."

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
respuestas_validas:
  - "aproximacion"
  - "modelo"

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

respuesta: "Un modelo más complejo es siempre más preciso pero más costoso de resolver"
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

respuesta: verdadero
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

respuesta_orden: ["Definición del problema", "Abstracción matemática", "Simulación numérica", "Construcción física"]
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

respuesta: "Los modelos lineales permiten usar el principio de superposición"
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

## Sección: prototipo (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos_basicos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "versión preliminar y simplificada de la solución para probar ideas antes de la versión final"
tipo: completar
respuestas_validas:
  - "versión preliminar y simplificada de la solución para probar ideas antes de la versión final"

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
  escenario: uno_de([["Baja fidelidad", "se enfoca en la estructura y flujo básico, con pocos detalles visuales"], ["Alta fidelidad", "se parece mucho al producto final en apariencia y funcionalidad"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Baja fidelidad", "Alta fidelidad"]

enunciado: "Un prototipo de {escenario[0]} es aquel que {escenario[1]}."

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

respuesta_orden: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]
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

respuesta_orden: ["Identificar necesidad", "Construir prototipo", "Testear con usuarios", "Iterar diseño"]
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

respuesta: 990
tipo: completar
tolerancia_abs: 0

enunciado: "Si el costo de corregir un error en fase de prototipado es de $10 y en fase de producción es de $1000, ¿cuál es la diferencia de costo (en unidades monetarias) entre ambos escenarios?"

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
respuestas_validas:
  - "funcionalidad"

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
respuestas_validas:
  - "validar"
  - "verificar"
  - "probar"

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

respuesta: falso
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
  escenarios: [["Baja fidelidad", "rápido y económico"], ["Alta fidelidad", "detallado y costoso"]]

respuesta: escenarios[escenario_idx][1]
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

respuesta_orden: ["Construir prototipo", "Probar prototipo", "Analizar resultados", "Refinar diseño"]
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

respuesta: falso
tipo: vf

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
respuestas_validas:
  - "verificar la viabilidad de una idea"
  - "validar conceptos"
  - "probar ideas"

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

respuesta: falso
tipo: vf
enunciado: "Un prototipo es una versión preliminar y simplificada de la solución que busca probar ideas antes de la versión final. ¿Es el prototipo la versión definitiva del diseño?"

explicacion: |
  Falso. El prototipo es una etapa de experimentación, no el resultado final.
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

respuesta_orden: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]
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

respuesta: verdadero
tipo: vf
enunciado: "Un prototipo de alta fidelidad se distingue de uno de baja fidelidad porque posee una apariencia y funcionalidad muy cercanas al producto final. ¿Es esto correcto?"

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
  escenarios: [["un sensor de temperatura para un invernadero", "validar la precisión de la lectura"], ["un nuevo diseño de ala para un dron", "probar la estabilidad aerodinámica"]]

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "validar la precisión de la lectura"
  - "probar la estabilidad aerodinámica"

enunciado: "En el desarrollo de {escenarios[escenario_idx][0]}, el objetivo principal de crear un prototipo es ___."

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
  datos: [["baja fidelidad", "rápido y económico"], ["alta fidelidad", "lento y costoso"]]

respuesta: datos[tipo_prototipo_idx][1]
tipo: mc
opciones_explicitas: ["rápido y económico", "lento y costoso", "extremadamente preciso", "imposible de modificar"]

enunciado: "Si estamos construyendo un prototipo de {datos[tipo_prototipo_idx][0]}, su principal ventaja es que es ___."

explicacion: |
  Los prototipos de baja fidelidad (como bocetos o maquetas simples) priorizan la velocidad y el bajo costo para fallar rápido y barato.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "intermedio"
  tags: ["proceso", "iteracion"]

tipo: ordenar
opciones_explicitas: ["Diseño", "Prototipado", "Pruebas", "Análisis", "Descarte"]
respuesta_orden: ["Diseño", "Prototipado", "Pruebas", "Análisis", "Descarte"]

enunciado: "Ordene las etapas lógicas para mejorar un prototipo tras un testeo fallido:"

explicacion: |
  El proceso de ingeniería es iterativo: se diseña, se construye, se prueba, se analiza el error y se vuelve a diseñar.
```

```
metadata:
  materia: "ingenieria"
  tema: "prototipo_diferencias"
  nivel: "basico"
  tags: ["falso", "conceptos"]

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
  tags: ["metricas", "decision"]

variables:
  caso_idx: uno_de([0,1])
  descripcion: ["El prototipo falló en la prueba de carga", "El prototipo superó las pruebas de carga"]
  accion: ["revisar el diseño estructural", "proceder a la fase de producción"]

respuesta: accion[caso_idx]
tipo: mc
opciones_explicitas: ["revisar el diseño estructural", "proceder a la fase de producción", "cancelar el proyecto", "aumentar el presupuesto"]

enunciado: "Si tras las pruebas el prototipo presenta un comportamiento de: {descripcion[caso_idx]}, la acción inmediata debe ser ___."

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
respuestas_validas:
  - "fuerza / area"
  - "fuerza / área"
  - "F/A"

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

respuesta: escenario[1]
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

respuesta_orden: ["Nodos", "Barras", "Cargas"]
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
  datos: uno_de([[100, 20], [50, 10], [200, 50]])

respuesta: datos[0] / datos[1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Si una barra soporta una fuerza de {datos[0]} N y tiene un área de sección transversal de {datos[1]} mm², ¿cuál es el valor de la tensión en MPa?"

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

enunciado: "Un perno de acero de sección transversal de {area} mm² está sujeto a una fuerza de tracción axial de {fuerza} N. Calcule la tensión normal ($\\sigma$) en MPa."

pasos:
  - "Identificar la fuerza aplicada: $F = 5000$ N"
  - "Identificar el área de la sección: $A = 25$ mm²"
  - "Aplicar la fórmula de tensión: $\\sigma = F / A$"

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

respuesta: "Triángulo"
tipo: mc
opciones_explicitas: ["Cuadrilátero", "Triángulo", "Pentágono"]

enunciado: "En el diseño de cerchas (trusses), se utiliza la geometría del triángulo porque es la única forma geométrica que es intrínsecamente rígida, es decir, sus ángulos no cambian sin que cambien las longitudes de sus lados."

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

respuesta_orden: ["Identificar carga", "Calcular área", "Dividir carga por área"]
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

respuesta: "doble"
tipo: completar
respuestas_validas:
  - "doble"

enunciado: "Si duplicamos la carga aplicada a una barra manteniendo su área constante, la tensión resultante será el ___ de la tensión original."

explicacion: |
  Como la tensión $\sigma = F / A$ es directamente proporcional a la fuerza, si la fuerza se duplica (manteniendo el área constante), la tensión también se duplica.
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

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "acortamiento"
  - "estiramiento"
  - "torsion"

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
  datos: [[1200, 0.02], [800, 0.03]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0] / datos[idx][1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una carga axial de {datos[idx][0]} N sobre una barra de sección transversal de {datos[idx][1]} m². ¿Cuál es el valor del esfuerzo normal (en Pascales)?"

pasos:
  - "Identificar la carga (P)"
  - "Identificar el área (A)"
  - "Calcular el esfuerzo usando la fórmula σ = P / A"

explicacion: |
  El esfuerzo normal σ se calcula dividiendo la fuerza aplicada (N) por el área de la sección transversal (m²): σ = {datos[idx][0]} / {datos[idx][1]} = {redondear(datos[idx][0] / datos[idx][1], 2)} Pa.
```

```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["metodologia", "analisis"]

respuesta_orden: ["Carga", "Esfuerzo", "Deformación"]
tipo: ordenar
opciones_explicitas: ["Esfuerzo", "Deformación", "Carga"]

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

respuesta: verdadero
tipo: vf
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

respuesta: caso[1]
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
  forma: uno_de(["cuadrado", "triangulo"])

respuesta: forma
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

respuesta_orden: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]
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

respuesta: tipo_t[1]
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

respuesta_orden: ["Vértice", "Lado", "Superficie"]
tipo: ordenar
opciones_explicitas: ["Vértice", "Lado", "Superficie"]

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

respuesta: tipo_deformacion
tipo: completar

respuestas_validas:
  - "elongacion"

enunciado: "Si un material experimenta una deformación unitaria de {deformacion}, el fenómeno físico observado es una ___."

explicacion: |
  La deformación unitaria ($\epsilon$) positiva indica un aumento en la longitud del elemento, lo que se conoce como elongación.
```

## Sección: ensayo-y-medicion (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["definicion", "prototipo"]

respuesta: "ensayo"
tipo: completar
respuestas_validas:
  - "ensayo"
  - "ensayo de desempeño"

enunciado: "El proceso de someter un prototipo a condiciones controladas para evaluar su comportamiento se denomina ___."

explicacion: |
  El ensayo es la acción de probar un objeto o sistema bajo condiciones específicas para observar su respuesta.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "variables"]

opciones_explicitas: ["Variables dependientes", "Variables independientes", "Variables de ruido", "Variables de error"]
respuesta: "Variables independientes"
tipo: mc

enunciado: "En un ensayo controlado, las condiciones que el experimentador manipula deliberadamente para observar un efecto se conocen como ___."

explicacion: |
  Las variables independientes son aquellas que se modifican para medir cómo afectan a la variable dependiente (el resultado).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["precision", "veracidad"]

respuesta: falso
tipo: vf

enunciado: "La precisión se refiere a qué tan cerca está un valor medido del valor real o verdadero de la magnitud."

explicacion: |
  Falso. La cercanía al valor real es la 'exactitud'. La 'precisión' se refiere a la repetibilidad o concordancia entre mediciones sucesivas.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metodologia", "orden"]

opciones_explicitas: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
respuesta_orden: ["Preparación del entorno", "Ejecución de la prueba", "Análisis de resultados", "Documentación de hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente las etapas de un protocolo de ensayo de prototipo:"

explicacion: |
  Un proceso de ingeniería requiere primero preparar las condiciones, luego ejecutar, analizar los datos obtenidos y finalmente documentar el proceso.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["error", "medicion"]

variables:
  escenario: uno_de([[10.5, 0.1], [25.2, 0.5], [100.0, 2.0]])

respuesta: escenario[0]
tipo: completar
respuestas_validas:
  - "10.5"
  - "25.2"
  - "100.0"

enunciado: "Si se realiza una medición de un componente y el valor obtenido es {escenario[0]}, pero existe una incertidumbre asociada de {escenario[1]}, el valor reportado es ___."

pasos:
  - "Identificar el valor nominal medido."
  - "Asociar la incertidumbre al valor obtenido."

explicacion: |
  En metrología, el valor medido es el punto de partida para reportar la magnitud con su respectiva tolerancia o incertidumbre.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "incertidumbre"]

variables:
  mediciones: [10.02, 10.05, 10.03, 10.04, 10.06]
  valor_nominal: 10.04

respuesta: promedio(mediciones)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se realizan 5 mediciones de la longitud de un prototipo de eje bajo condiciones controladas. Si el valor nominal es {valor_nominal} mm, ¿cuál es el valor promedio de las mediciones obtenidas?"

pasos:
  - "Sumar todos los valores de la serie de mediciones."
  - "Dividir la suma total por la cantidad de mediciones (5)."

explicacion: |
  El promedio se calcula sumando las mediciones (10.02 + 10.05 + 10.03 + 10.04 + 10.06 = 50.20) y dividiendo por el número de muestras (50.20 / 5 = 10.04).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["errores", "calibracion"]

variables:
  es_desviacion_constante: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Durante un ensayo de tensión, se detecta que un sensor de carga tiene un error de calibración que siempre suma 0.5N a la lectura real, independientemente de la carga aplicada. ¿Este es un ejemplo de error sistemático?"

explicacion: |
  Los errores sistemáticos son aquellos que se repiten de manera constante o predecible en cada medición, como un error de offset en un sensor.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "procedimiento"]

variables:
  pasos_correctos: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]

respuesta_orden: ["Calibrar instrumentos", "Configurar parámetros de prueba", "Ejecutar ensayo", "Registrar datos y analizar"]
tipo: ordenar

opciones_explicitas: ["Registrar datos y analizar", "Calibrar instrumentos", "Ejecutar ensayo", "Configurar parámetros de prueba"]

enunciado: "Para garantizar la repetibilidad en la medición del desempeño de un prototipo, ordene los pasos lógicos de un protocolo de ensayo estándar."

explicacion: |
  Un protocolo científico requiere primero asegurar la precisión de los instrumentos (calibración), definir las condiciones (configuración), realizar la acción (ensayo) y finalmente procesar la información (registro y análisis).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["tolerancia", "control_calidad"]

variables:
  dim_min: 24.95
  dim_max: 25.05
  medida_actual: 25.08

respuesta: "fuera de rango"
tipo: completar

opciones_explicitas: ["dentro de rango", "fuera de rango"]

enunciado: "Un prototipo de componente mecánico tiene una tolerancia especificada entre {dim_min} mm y {dim_max} mm. Si la medición obtenida en el ensayo es de {medida_actual} mm, el componente se encuentra ___."

explicacion: |
  Como 25.08 es mayor que el límite superior de 25.05, la pieza no cumple con las especificaciones de diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["precision", "repetibilidad"]

variables:
  error_max: 0.002
  error_min: 0.001

respuesta: "alta"
tipo: mc

opciones_explicitas: ["alta", "baja", "nula"]

enunciado: "Si al repetir un ensayo de medición de presión 10 veces sobre el mismo prototipo, la dispersión de los resultados es extremadamente pequeña (variación de {error_min} a {error_max} bar), podemos decir que la repetibilidad es ___."

explicacion: |
  Una baja dispersión entre mediciones sucesivas bajo las mismas condiciones indica una alta repetibilidad (precisión).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "error_de_medicion"]

enunciado: "Si un sensor de presión siempre marca 5 kPa por encima del valor real debido a una mala calibración, el instrumento presenta un error de tipo ___."

respuesta: "positivo"
tipo: mc
opciones_explicitas: ["positivo", "negativo"]

explicacion: |
  El error sistemático (o sesgo) es una desviación constante. Si el error siempre suma un valor constante al valor real, es un error positivo. La precisión se refiere a la repetibilidad de las medidas, no a su cercanía al valor real.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["incertidumbre", "incertidumbre_tipo_a"]

variables:
  datos: [[[10.1, 10.2, 10.1, 10.3, 10.2], 0.24], [[5.0, 5.1, 4.9, 5.0, 5.0], 0.07]]
  idx: uno_de([0, 1])

enunciado: "Se realizan mediciones repetidas de un componente. El conjunto de datos obtenidos es: {datos[idx][0]}."

pasos:
  - "Calcular el promedio de las mediciones."
  - "Calcular la desviación estándar de la muestra."

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La incertidumbre de tipo A se estima mediante el análisis estadístico de una serie de mediciones, siendo la desviación estándar de la media una de las formas de representarla.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "variables_controladas"]

enunciado: "En un ensayo de fatiga de materiales, si no se controlan las variables ambientales (como la temperatura), los resultados obtenidos pueden tener una alta variabilidad y no ser comparables con otros ensayos."

respuesta: verdadero
tipo: vf

explicacion: |
  Para que un ensayo sea válido y reproducible, las condiciones ambientales deben mantenerse constantes o ser registradas, ya que factores como la temperatura afectan las propiedades mecánicas de los materiales.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["procedimiento", "calibracion"]

variables:
  pasos_correctos: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]

enunciado: "Ordene los pasos lógicos para realizar el proceso de calibración de un instrumento de medición en un laboratorio."

opciones_explicitas: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
respuesta_orden: ["Limpiar el instrumento", "Comparar con patrón trazable", "Ajustar desviaciones", "Registrar certificado"]
tipo: ordenar

explicacion: |
  El proceso debe seguir un orden lógico: primero asegurar la limpieza, luego la comparación contra un estándar, proceder al ajuste si es necesario y finalmente documentar el resultado.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["error_humano", "lectura"]

enunciado: "Al leer un manómetro analógico, si el observador no se posiciona perpendicularmente a la escala, comete un error de ___."

respuesta: "paralaje"
tipo: mc
opciones_explicitas: ["paralaje", "redondeo", "calibracion"]

explicacion: |
  El error de paralaje ocurre cuando la línea de visión no es perpendicular a la escala graduada, provocando una lectura incorrecta de la posición de la aguja o el menisco.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["medicion", "metrologia"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas:
  - "precisión"
  - "exactitud"

enunciado: "En metrología, mientras que la exactitud se refiere a qué tan cerca está el valor medido del valor real, la ___ se refiere a la repetibilidad de las mediciones bajo las mismas condiciones."

explicacion: |
  La exactitud mide la ausencia de error sistemático (cercanía al valor real), mientras que la precisión mide la dispersión de los resultados (repetibilidad).
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "ajuste"]

respuesta: "calibracion"
tipo: "mc"
opciones_explicitas: ["calibracion", "ajuste", "estandarización", "mantenimiento"]

enunciado: "El proceso de comparar un instrumento de medición contra un patrón de referencia para determinar la desviación se denomina:"

explicacion: |
  La calibración establece la relación entre los valores indicados por el instrumento y los valores de un patrón. El ajuste es la acción de corregir el instrumento para que coincida con el patrón.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["incertidumbre", "medicion"]

respuesta: verdadero
tipo: "vf"

enunciado: "La incertidumbre de medida es un parámetro que cuantifica la dispersión de los valores que podrían ser atribuidos al objeto de medición."

explicacion: |
  Verdadero. A diferencia del error (que es una cantidad única), la incertidumbre describe el rango de duda razonable sobre el resultado de una medición.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["protocolo", "ensayo"]

tipo: ordenar
opciones_explicitas: ["definir_variables", "preparar_prototipo", "ejecutar_ensayo", "analizar_datos"]
respuesta_orden: ["definir_variables", "preparar_prototipo", "ejecutar_ensayo", "analizar_datos"]

enunciado: "Ordene los pasos lógicos para llevar a cabo un ensayo de desempeño controlado en un prototipo:"

explicacion: |
  Un ensayo sistemático requiere primero la planificación (definición), luego la preparación, la ejecución y finalmente el análisis de los datos recolectados.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["sensibilidad", "resolucion"]

respuesta: "sensibilidad"
tipo: "mc"
opciones_explicitas: ["sensibilidad", "resolucion", "rango", "linealidad"]

enunciado: "La propiedad que describe la relación entre el cambio en la indicación del instrumento y el cambio en la magnitud medida es la ___."

explicacion: |
  La sensibilidad es la pendiente de la curva de calibración (cambio de salida / cambio de entrada). La resolución es el cambio más pequeño que el instrumento puede detectar y mostrar.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["calibracion", "sensores", "error"]

variables:
  datos: [["10.5", "10.2", "0.3"], ["25.0", "24.8", "0.2"], ["50.2", "49.9", "0.3"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: completar
respuestas_validas:
  - datos[idx][2]

enunciado: "Se realiza una prueba de calibración en un prototipo de sensor de presión. El valor nominal de referencia es {datos[idx][0]} kPa, pero la lectura obtenida del sensor es {datos[idx][1]} kPa. El error absoluto medido es ___ kPa."

pasos:
  - "Identificar el valor nominal (referencia)."
  - "Identificar la lectura medida."
  - "Calcular la diferencia absoluta entre ambos valores."

explicacion: |
  El error absoluto se define como |Valor_Referencia - Valor_Medido|. 
  En este caso: |{datos[idx][0]} - {datos[idx][1]}| = {datos[idx][2]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "avanzado"
  tags: ["estadistica", "fatiga", "desviacion"]

variables:
  series: ["100, 105, 95 y 100", "50, 52, 48 y 50", "200, 210, 190 y 200"]
  resultados: ["3.54", "1.41", "7.07"]
  idx: uno_de([0, 1, 2])

respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0.05

enunciado: "Se realizan 4 ensayos de fatiga en un componente estructural. Los resultados de ciclos hasta la falla son: {series[idx]}. Calcule la desviación estándar poblacional de este conjunto de datos."

explicacion: |
  Primero se calcula el promedio de los 4 valores. Luego, la varianza poblacional es el promedio de los cuadrados de las desviaciones respecto a la media (dividiendo por N=4, no por N-1). Finalmente, la desviación estándar poblacional es la raíz cuadrada de esa varianza.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["tolerancia", "calidad", "verificacion"]

variables:
  especificacion: [["10.00", "10.05"], ["5.00", "5.02"], ["100.0", "100.1"]]
  idx: uno_de([0, 1, 2])

respuesta: verdadero
tipo: vf

enunciado: "El prototipo de una pieza mecánica debe tener un diámetro de {especificacion[idx][0]} mm con una tolerancia de ±{especificacion[idx][1]} mm. Si la medición obtenida es {especificacion[idx][0]} mm, ¿cumple la pieza con la especificación técnica?"

explicacion: |
  La pieza mide exactamente el valor nominal, por lo tanto, está dentro del rango permitido.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "basico"
  tags: ["metodologia", "protocolo", "orden"]

respuesta_orden: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]
tipo: ordenar

opciones_explicitas: ["Preparar el entorno", "Configurar el instrumento", "Ejecutar la prueba", "Registrar resultados"]

enunciado: "Ordene los pasos lógicos para realizar un ensayo de medición controlado sobre un prototipo de motor:"

explicacion: |
  Para asegurar la repetibilidad, primero se debe asegurar el entorno, luego calibrar/configurar el equipo, proceder a la prueba y finalmente recolectar los datos.
```

```
metadata:
  materia: "ingenieria"
  tema: "ensayo_y_medicion"
  nivel: "intermedio"
  tags: ["metrologia", "precision", "exactitud"]

variables:
  caso: uno_de([["98.1°C, 98.2°C, 98.1°C, 98.2°C", "Alta precisión, baja exactitud"], ["97.5°C, 102.3°C, 99.8°C, 100.4°C", "Baja precisión, alta exactitud"], ["99.9°C, 100.1°C, 100.0°C, 100.0°C", "Alta precisión, alta exactitud"], ["95.0°C, 103.0°C, 90.0°C, 108.0°C", "Baja precisión, baja exactitud"]])

respuesta: caso[1]
tipo: mc

opciones_explicitas: ["Alta precisión, baja exactitud", "Baja precisión, alta exactitud", "Alta precisión, alta exactitud", "Baja precisión, baja exactitud"]

enunciado: "Un prototipo de sensor de temperatura entrega los siguientes valores ante una referencia constante de 100°C: {caso[0]}. ¿Qué característica define este comportamiento?"

explicacion: |
  La precisión se refiere a la repetibilidad (qué tan cerca están los valores entre sí), mientras que la exactitud se refiere a qué tan cerca están del valor real.
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
respuestas_validas:
  - "iteración"

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

respuesta: "minimizar"
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

respuesta_orden: ["Evaluar", "Ajustar", "Implementar", "Verificar"]
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

respuesta: datos[idx][1]
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
respuestas_validas:
  - "converger"
  - "convergencia"

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

respuesta: "mejora"
tipo: "mc"
opciones_explicitas: ["mejora", "empeoramiento", "sin cambios"]

enunciado: "Se realiza un ensayo de diseño. El valor de la función objetivo en la iteración n es f(xₙ) = 100 y en la iteración n+1 es f(xₙ₊₁) = 85. Si el objetivo es minimizar la función, el resultado del ensayo representa una ___."

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

enunciado: "Si la diferencia absoluta entre la solución actual xᵢ y la solución de la iteración anterior xᵢ₋₁ es menor que una tolerancia ε predefinida, se considera que se ha cumplido el criterio de parada por convergencia."

explicacion: |
  El criterio de parada es fundamental para evitar ciclos infinitos. Cuando el cambio entre iteraciones es menor que la tolerancia, se asume que el algoritmo ha encontrado un punto estable.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["secuencia", "pasos"]

respuesta_orden: ["Definir objetivo", "Ejecutar ensayo", "Analizar error", "Ajustar parámetros"]
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

respuesta: abs(datos[idx][0] - datos[idx][1])

enunciado: "En la iteración actual, el valor óptimo estimado es {datos[idx][0]} y el valor obtenido en el ensayo es {datos[idx][1]}. Calcule el error absoluto de la iteración (asumiendo error = |valor_estimado - valor_obtenido|)."
tipo: completar
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
  error_actual: uno_de([0.001, 0.0001])
  error_previo: uno_de([0.005, 0.0005])

respuesta: error_actual < error_previo
tipo: vf
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

respuesta_orden: ["Evaluar_resultado", "Comparar_con_objetivo", "Ajustar_parametros", "Repetir_ensayo"]
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

respuesta: "infinitas"

tipo: completar
respuestas_validas:
  - "infinitas"

enunciado: "Si un programador establece una tolerancia de error extremadamente pequeña (por debajo de la precisión de punto flotante de la máquina) para un problema con precisión de máquina limitada, el algoritmo podría entrar en un ciclo de iteraciones ___."

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

tipo: vf
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
respuestas_validas:
  - "convergencia"

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

respuesta: "El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles."
tipo: "mc"
opciones_explicitas: ["El descenso de gradiente utiliza información de la derivada para dirigir la búsqueda, mientras que la búsqueda exhaustiva prueba todos los puntos posibles.", "El descenso de gradiente es un método de fuerza bruta, mientras que la búsqueda exhaustiva es un método basado en derivadas.", "Ambos métodos son idénticos en su forma de navegar el espacio de búsqueda.", "La búsqueda exhaustiva es siempre más eficiente que el descenso de gradiente en espacios continuos."]

enunciado: "¿Cuál es la principal diferencia entre el descenso de gradiente y la búsqueda exhaustiva como métodos de optimización?"

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

respuesta_orden: ["Evaluación de la función", "Cálculo del error/gradiente", "Actualización de la variable", "Verificación del criterio de parada"]
tipo: "ordenar"
opciones_explicitas: ["Evaluación de la función", "Cálculo del error/gradiente", "Actualización de la variable", "Verificación del criterio de parada"]

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

respuesta: datos[caso][1]
tipo: "mc"
opciones_explicitas: ["Muy sensible", "Poco sensible", "No depende de la condición inicial", "Depende únicamente del número de iteraciones"]

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

respuesta: error_iter[2] < 0.001
tipo: vf

explicacion: |
  El criterio de parada exige que el error absoluto sea estrictamente menor a 0.001. En este caso, el error de la iteración actual es {error_iter[2]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "optimizacion_e_iteracion"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene los pasos lógicos para un ciclo de optimización de un sistema de control de temperatura:"

opciones_explicitas: ["Medir la variable", "Comparar con el setpoint", "Actuar sobre el sistema", "Analizar desviación"]
respuesta_orden: ["Medir la variable", "Comparar con el setpoint", "Analizar desviación", "Actuar sobre el sistema"]
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
  diferencia: abs(val_actual - val_previo)

enunciado: "En un proceso de optimización por descenso de gradiente, ¿cuál es la diferencia entre el valor de la función en la iteración actual ({val_actual}) y la anterior ({val_previo})?"

respuesta: diferencia
tipo: completar
tolerancia_abs: 0.001

explicacion: |
  El error o cambio entre iteraciones se calcula como |{val_actual} - {val_previo}|. En este caso: {diferencia}.
```

## Sección: comunicar-la-solucion (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "propósito"]

respuesta: "transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"
tipo: completar
respuestas_validas:
  - "transmitir información técnica de manera precisa y estandarizada para permitir la fabricación o implementación del diseño"

enunciado: "El objetivo principal de la documentación técnica en ingeniería es ___."

explicacion: |
  La documentación no es solo un registro, es el medio para que otros puedan replicar, entender y ejecutar la solución diseñada sin ambigüedades.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "elementos"]

opciones_explicitas: ["Cotas y tolerancias", "Esquema de colores artísticos", "Biografía del diseñador", "Presupuesto de marketing"]
respuesta: "Cotas y tolerancias"
tipo: mc

enunciado: "En un plano técnico de ingeniería, ¿cuál de los siguientes elementos es fundamental para asegurar que la pieza sea fabricada con las dimensiones correctas?"

explicacion: |
  Las cotas definen las medidas y las tolerancias permiten el margen de error aceptable en la fabricación.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["presentaciones", "comunicacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una presentación de diseño para clientes debe contener exclusivamente detalles matemáticos complejos y fórmulas, omitiendo la visualización del producto final?"

explicacion: |
  Falso. Una presentación efectiva debe equilibrar el rigor técnico con la claridad visual, permitiendo que los stakeholders entiendan la funcionalidad y el valor de la solución.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

respuesta: "Resumen Ejecutivo"
tipo: completar
respuestas_validas:
  - "Resumen Ejecutivo"

enunciado: "En la estructura estándar de un informe técnico profesional, la sección que ofrece una visión general de todo el documento para una lectura rápida se denomina ___."

explicacion: |
  El Resumen Ejecutivo (o Abstract) es vital para que los tomadores de decisiones comprendan el alcance y los resultados sin leer todo el documento.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "orden"]

opciones_explicitas: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
respuesta_orden: ["Definición del problema", "Propuesta de solución", "Demostración/Pruebas", "Conclusión y próximos pasos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar una presentación técnica efectiva ante un comité de revisión:"

explicacion: |
  Una presentación debe seguir una narrativa lógica: primero se establece el contexto (problema), luego la propuesta, se valida con evidencia (pruebas) y se cierra con la síntesis.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["documentacion", "informes"]

tipo: mc
opciones_explicitas: ["El análisis de cargas y materiales (seguridad estructural)", "La gestión del presupuesto y los tiempos"]

enunciado: "Al redactar el informe técnico final para un proyecto de infraestructura civil (por ejemplo, un puente), ¿en qué debe centrarse principalmente el enfoque del informe?"

respuesta: "El análisis de cargas y materiales (seguridad estructural)"

explicacion: |
  Un informe técnico de ingeniería debe priorizar la integridad estructural y los datos técnicos del diseño para garantizar la seguridad y la viabilidad del proyecto.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "dibujo_tecnico"]

enunciado: "En un plano de ingeniería mecánica, la escala es la relación entre la dimensión del dibujo y la dimensión real. Si un componente mide 50mm en el plano y su tamaño real es 500mm, la escala representada es:"

opciones_explicitas: ["1:1", "1:10", "10:1", "1:100"]
respuesta: "1:10"
tipo: mc

explicacion: |
  La escala se calcula como Dimensión Dibujo / Dimensión Real. En este caso: 50 / 500 = 1/10, lo que se expresa como 1:10.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "normas"]

enunciado: "¿Es correcto afirmar que la documentación de un diseño debe ser lo suficientemente clara para que un ingeniero externo pueda replicar el proceso de fabricación sin necesidad de consultas adicionales?"

respuesta: verdadero
tipo: vf

explicacion: |
  La reproducibilidad es un pilar fundamental de la documentación técnica de ingeniería. Si el diseño no es replicable, la documentación ha fallado.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "metodologia"]

enunciado: "Ordene los pasos lógicos para realizar una presentación efectiva de una solución de ingeniería ante un cliente:"

opciones_explicitas: ["Presentar el problema y necesidades", "Exponer la solución técnica y diseño", "Mostrar análisis de costos y beneficios", "Sesión de preguntas y conclusiones"]
respuesta_orden: ["Presentar el problema y necesidades", "Exponer la solución técnica y diseño", "Mostrar análisis de costos y beneficios", "Sesión de preguntas y conclusiones"]
tipo: ordenar

explicacion: |
  Una presentación profesional debe seguir un flujo narrativo: Contexto (Problema) -> Propuesta (Solución) -> Viabilidad (Costos) -> Cierre (Feedback).
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["planos", "estandarizacion"]

variables:
  tipo_plano: uno_de([0, 1])
  datos: [["un plano eléctrico", "un plano eléctrico"], ["un plano de tuberías", "un plano de tuberías"]]

enunciado: "En {datos[tipo_plano][0]}, el uso de símbolos estandarizados (como la norma ISO o ANSI) es _________ para evitar errores de interpretación en la obra."

respuesta: "crítico"
tipo: completar
respuestas_validas:
  - "crítico"
  - "esencial"
  - "fundamental"

explicacion: |
  La estandarización de la simbología asegura que el lenguaje técnico sea universal entre diseñadores, fabricantes y constructores.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "basico"
  tags: ["documentacion", "comunicacion"]

tipo: mc
opciones_explicitas: ["Registrar la historia del proyecto para fines legales", "Servir como una guía detallada para la implementación y mantenimiento", "Reemplazar la necesidad de reuniones con el cliente", "Ser un documento estético para marketing"]

enunciado: "Un error común es creer que la documentación técnica tiene como fin principal la estética o el marketing. En realidad, el objetivo fundamental de un informe de diseño es ___."

respuesta: "Servir como una guía detallada para la implementación y mantenimiento"

explicacion: |
  La documentación técnica debe ser funcional. Su propósito es permitir que otros ingenieros (o el mismo equipo en el futuro) puedan entender, replicar, mantener o reparar el sistema diseñado sin ambigüedades.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "basico"
  tags: ["veracidad", "errores"]

tipo: vf

enunciado: "Es verdadero que un plano técnico debe ser lo suficientemente claro para que un profesional capacitado pueda interpretar las dimensiones y especificaciones sin necesidad de consultar al diseñador original para cada detalle."

respuesta: verdadero

explicacion: |
  Si un plano requiere consultas constantes al autor para ser interpretado, el diseño ha fallado en su objetivo de comunicación técnica. La autonomía del lector es un indicador de calidad.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["proceso", "presentacion"]

tipo: ordenar
opciones_explicitas: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

respuesta_orden: ["Recopilación de datos y cálculos", "Elaboración de planos y diagramas", "Redacción del informe técnico final", "Presentación de la solución al cliente"]

enunciado: "Para asegurar una comunicación efectiva y coherente de la solución, se debe seguir un orden lógico en la preparación de los entregables. Ordene los pasos:"

explicacion: |
  No se pueden dibujar planos sin haber validado los cálculos previos, y no se puede presentar una solución al cliente sin haber consolidado toda la información en un informe técnico que respalde los diagramas.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "intermedio"
  tags: ["presentacion", "errores"]

variables:
  escenario: uno_de([["Presentación con exceso de texto y tablas pequeñas", "Falta de claridad visual"], ["Presentación con gráficos abstractos sin ejes", "Falta de claridad visual"], ["Presentación con lenguaje excesivamente técnico para un cliente no experto", "Exceso de información técnica para la audiencia"]])

tipo: mc
opciones_explicitas: ["Falta de claridad visual", "Falta de rigor técnico", "Exceso de información técnica para la audiencia"]

enunciado: "Un error crítico al presentar una solución ante un cliente que no es especialista en el área es: {escenario[0]}."

respuesta: escenario[1]

explicacion: |
  La comunicación debe adaptarse al receptor. Un error común es asumir que el cliente entiende la terminología técnica profunda, lo que genera una desconexión entre la solución propuesta y la comprensión del cliente.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar-la-solucion"
  nivel: "avanzado"
  tags: ["informe", "estructura"]

tipo: completar
respuestas_validas:
  - "Memoria de cálculo"

enunciado: "En un informe de ingeniería profesional, el apartado que contiene el desarrollo matemático y la justificación de las decisiones de diseño se denomina ___."

respuesta: "Memoria de cálculo"

explicacion: |
  La memoria de cálculo es el pilar que sostiene la validez de la solución. Sin ella, el diseño es solo una idea; con ella, es una solución técnica verificable y justificable.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "comunicacion"]

respuesta: "especificaciones_tecnicas"
tipo: completar
respuestas_validas:
  - "especificaciones_tecnicas"

enunciado: "Mientras que el manual de usuario está orientado al cliente final para la operación del producto, la documentación que detalla los parámetros de diseño, materiales y tolerancias para otros ingenieros se denomina ___."

explicacion: |
  Las especificaciones técnicas son documentos de ingeniería destinados a la fabricación y validación, a diferencia de los manuales de usuario que son guías de uso operativo.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "dibujo_tecnico"]

respuesta: verdadero
tipo: vf
enunciado: "¿El objetivo principal de un plano técnico es proporcionar una representación visual inequívoca que permita la fabricación exacta de una pieza, distinguiéndose de un boceto conceptual por su precisión y normalización?"

explicacion: |
  Un plano técnico sigue normas internacionales (como ISO o ANSI) para asegurar que cualquier fabricante pueda interpretar las dimensiones y tolerancias sin ambigüedad, a diferencia de un boceto.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["presentacion", "soft_skills"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["presentar_ante_inversores", "enfoque_negocio_y_viabilidad"], ["presentar_ante_equipo_de_fabricacion", "enfoque_tecnico_y_materiales"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["enfoque_negocio_y_viabilidad", "enfoque_tecnico_y_materiales"]

enunciado: "Si el objetivo de la presentación es para {escenarios[escenario_idx][0]}, el enfoque principal debe ser el {escenarios[escenario_idx][1]}, diferenciándose de una reunión de revisión de diseño técnica."

explicacion: |
  La audiencia determina el lenguaje y el contenido: los inversores buscan retorno de inversión y viabilidad, mientras que los técnicos buscan detalles de implementación.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "orden"]

respuesta_orden: ["memoria_descriptiva", "planos_detallados", "manual_de_mantenimiento"]
tipo: ordenar

opciones_explicitas: ["memoria_descriptiva", "planos_detallados", "manual_de_mantenimiento"]

enunciado: "Ordene los documentos de un proyecto de ingeniería desde la fase de diseño conceptual hasta la fase de post-implementación:"

explicacion: |
  Primero se describe la solución (memoria), luego se detalla para producción (planos) y finalmente se entrega al usuario para su cuidado (manual).
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["informes", "memoria_descriptiva"]

respuesta: "justificar_decisiones"
tipo: completar
respuestas_validas:
  - "justificar_decisiones"

enunciado: "A diferencia de un informe de resultados que describe qué sucedió, la memoria descriptiva de un diseño tiene como función primordial ___ de las soluciones adoptadas."

explicacion: |
  La memoria descriptiva no solo dice qué se hizo, sino el porqué (la lógica de diseño), permitiendo entender la trazabilidad de las decisiones técnicas frente a alternativas.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["planos", "documentacion"]

variables:
  escenario: uno_de([["Un plano de conjunto de una pieza mecánica", "ISO"], ["Un esquema de un circuito electrónico", "IEC"], ["Un diagrama de flujo de un proceso químico", "ANSI"]])

enunciado: "Para asegurar la interoperabilidad internacional, un ingeniero debe seguir la normativa {escenario[1]} al presentar el diseño de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["ISO", "IEC", "ANSI", "DIN"]

explicacion: |
  La normativa seleccionada para {escenario[0]} es {escenario[1]}. Es fundamental utilizar el estándar correcto para evitar errores de fabricación o interpretación en proyectos globales.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "veracidad"]

variables:
  textos: ["Un informe técnico que incluye datos experimentales sin citar la fuente de los instrumentos", "Un manual de usuario que especifica las tolerancias de montaje según el fabricante"]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

enunciado: "En el contexto de la documentación de ingeniería, ¿es correcto afirmar que: {textos[idx]}?"

respuesta: valores[idx]
tipo: vf
explicacion: |
  La veracidad y la trazabilidad son pilares de la ingeniería: un dato experimental sin citar la fuente del instrumento no es trazable (incorrecto), mientras que un manual que especifica tolerancias según el fabricante sí lo es (correcto).
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "intermedio"
  tags: ["informes", "estructura"]

enunciado: "Ordene los elementos de un informe técnico de diseño final de la forma más lógica y profesional:"

pasos:
  - "Resumen ejecutivo"
  - "Cuerpo del diseño (cálculos y especificaciones)"
  - "Conclusiones y recomendaciones"
  - "Anexos (planos y hojas de datos)"

opciones_explicitas: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
respuesta_orden: ["Resumen ejecutivo", "Cuerpo del diseño (cálculos y especificaciones)", "Conclusiones y recomendaciones", "Anexos (planos y hojas de datos)"]
tipo: ordenar

explicacion: |
  Un informe profesional debe fluir desde una visión general (resumen) hacia el detalle técnico (cuerpo), cerrar con el juicio del ingeniero (conclusiones) y terminar con el soporte documental (anexos).
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "avanzado"
  tags: ["presentaciones", "comunicacion"]

variables:
  presentacion: uno_de([["Presentación ante un comité de inversión", "costos"], ["Presentación ante un equipo de mantenimiento", "operación"], ["Presentación ante un equipo de fabricación", "tolerancias"]])

enunciado: "Al realizar una presentación para {presentacion[0]}, el enfoque principal de la comunicación debe centrarse en {presentacion[1]}."

respuesta: presentacion[1]
tipo: completar
respuestas_validas:
  - "costos"
  - "operación"
  - "tolerancias"

explicacion: |
  El enfoque de la comunicación técnica debe adaptarse a la audiencia. Para {presentacion[0]}, lo crítico es discutir {presentacion[1]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "comunicar_la_solucion"
  nivel: "basico"
  tags: ["documentacion", "control_de_revisiones"]

variables:
  textos: ["El plano muestra la versión 'Rev. 02' pero el índice del informe dice 'Rev. 01', y aun así se considera consistente", "El plano y el informe coinciden en la fecha y el número de revisión, por lo que se consideran consistentes"]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

enunciado: "En un proceso de auditoría de diseño, se detecta que: {textos[idx]}. ¿Es correcta esta afirmación?"

respuesta: valores[idx]
tipo: vf
explicacion: |
  La consistencia entre planos e informes es vital. Si hay discrepancias en la versión o revisión, la documentación se considera no válida, aunque describa el mismo diseño.
```

