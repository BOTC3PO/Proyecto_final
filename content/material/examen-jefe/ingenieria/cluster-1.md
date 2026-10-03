# Examen jefe — [PENDIENTE #918]

> Logro #918. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: modelizacion-matematica (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "representacion"
tipo: "completar"
respuestas_validas:
  - "representacion"
  - "representación"

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
respuesta_orden: ["Observación y simplificación", "Formulación matemática", "Validación y análisis"]
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
  datos: [["continuo", "depende del tiempo de forma ininterrumpida"], ["discreto", "cambia solo en instantes específicos"]]
  idx: uno_de([0, 1])
  tipo_modelo: datos[idx][0]
  descripcion: datos[idx][1]

respuesta: tipo_modelo
tipo: "mc"
opciones_explicitas: ["continuo", "discreto"]

enunciado: "Si un modelo describe un sistema donde las variables cambian de forma ininterrumpida en el tiempo, estamos ante un modelo de tipo {tipo_modelo}."

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
  escenario: uno_de([15.0, 25.0, 40.0])
  g: 9.81

respuesta: sqrt(2 * escenario / g)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se suelta un objeto desde una altura de {escenario} metros. Considerando la aceleración de la gravedad como {g} m/s², ¿cuánto tiempo tardará en tocar el suelo? (Use la fórmula t = sqrt(2h/g))"

pasos:
  - "Identificar la altura h = {escenario} m."
  - "Identificar la gravedad g = {g} m/s²."
  - "Sustituir en la fórmula: t = sqrt(2 * {escenario} / {g})."

explicacion: |
  El tiempo de caída libre se calcula despejando t de la ecuación de posición: h = 0.5 * g * t². 
  Para el caso de {escenario} m, el resultado es {sqrt(2 * escenario / g)} segundos.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "basico"
  tags: ["modelos", "lineal"]

variables:
  datos: uno_de([[100, 150, 200], [50, 80, 110], [200, 250, 300]])

respuesta: datos[1] - datos[0]
tipo: completar

enunciado: "Un tanque de agua comienza con {datos[0]} litros y después de una hora tiene {datos[1]} litros. Si el llenado es lineal, la tasa de cambio (litros por hora) es de ___ litros/h."

explicacion: |
  En un modelo lineal y de tasa constante, la pendiente m es (y2 - y1) / (x2 - x1).
  En este caso: ({datos[1]} - {datos[0]}) / (1 - 0) = {datos[1] - datos[0]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "intermedio"
  tags: ["finanzas", "exponencial"]

variables:
  capital: 1000.0
  tasa: 0.05
  monto: capital * (1 + tasa)
  opciones_validas: ["1050.0", "1100.0", "1500.0", "1005.0"]

tipo: mc
opciones_explicitas: ["1050.0", "1100.0", "1500.0", "1005.0"]
respuesta: "1050.0"

enunciado: "Se invierte un capital inicial de ${capital} con una tasa de interés compuesto anual del {tasa * 100}%. ¿Cuál será el monto total al finalizar el primer año?"

explicacion: |
  La fórmula del monto es M = C * (1 + i). 
  Para ${capital} con i = 0.05, el monto es ${monto}.
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

explicacion: |
  Verdadero. Con volumen constante, la variación de sal respecto al tiempo depende linealmente de la cantidad de sal presente (tasa de salida) y de un término constante (tasa de entrada), lo cual da una ecuación diferencial ordinaria de primer orden lineal.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["calculo", "metodologia"]

variables:
  pasos_correctos: ["Definir la función objetivo", "Establecer las restricciones", "Calcular la derivada", "Igualar la derivada a cero"]

respuesta_orden: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Definir la función objetivo", "Establecer las restricciones", "Calcular la derivada", "Igualar la derivada a cero"]

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
  escenario: uno_de([["La temperatura de un motor sube con el tiempo", "tiempo"], ["El volumen de un gas aumenta con la presión", "presión"], ["El costo de producción baja al aumentar la escala", "escala"]])

enunciado: "En un modelo matemático, si queremos representar cómo {escenario[0]} afecta a la variable principal, la variable que cambia como consecuencia directa es la variable ___."

respuestas_validas:
  - "dependiente"

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
  caso: uno_de([["El área de un círculo respecto a su radio", "area_radio"], ["La fuerza centrífuga respecto a la velocidad angular", "fuerza_omega"], ["La energía cinética respecto a la velocidad", "energia_v"]])

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

respuesta_orden: ["Observación del fenómeno", "Identificación de variables", "Establecimiento de relaciones matemáticas", "Validación del modelo con datos reales"]
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
  rango: uno_de([["[0, 10] para un experimento de tensión"], ["[20, 50] para el flujo de un fluido"], ["[600, 900] para la carga de una viga"]])

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

enunciado: "Un modelo que predice un resultado único y exacto ante las mismas condiciones iniciales se denomina modelo determinista. Por el contrario, un modelo que incluye variables aleatorias para representar la incertidumbre se denomina modelo ________."

respuestas_validas:
  - "estocástico"
  - "estocastico"
respuesta: "estocástico"
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

enunciado: "En un sistema dinámico, las variables de estado son aquellas que cambian con el tiempo durante la evolución del proceso, mientras que los ________ son valores que permanecen constantes durante el análisis del modelo."

respuestas_validas:
  - "parámetros"
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

enunciado: "Un modelo que describe un sistema en un momento específico, sin considerar la evolución temporal de sus variables, se considera un modelo estático, mientras que uno que describe la evolución de las variables respecto al tiempo es un modelo ________."

respuestas_validas:
  - "dinámico"
respuesta: "dinámico"
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

respuesta_orden: ["Identificación del problema", "Formulación de ecuaciones", "Resolución matemática", "Validación y verificación"]
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

respuesta: p_inicial * (1 + tasa)^tiempo
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un cultivo de bacterias crece exponencialmente según el modelo P(t) = P₀ * (1 + r)ᵗ. Si la población inicial es de {p_inicial} unidades, la tasa de crecimiento es del {tasa * 100}% por hora, ¿cuál será la población tras {tiempo} horas?"

pasos:
  - "Identificar la población inicial P₀ = {p_inicial}"
  - "Identificar la tasa r = {tasa}"
  - "Identificar el tiempo t = {tiempo}"
  - "Aplicar la fórmula: {p_inicial} * (1 + {tasa})^{tiempo}"

explicacion: |
  El modelo exponencial se aplica cuando el crecimiento es proporcional a la población actual. En este caso, tras {tiempo} horas, la población es de {p_inicial * (1 + tasa)^tiempo}.
```

```
metadata:
  materia: "ingenieria"
  tema: "modelizacion_matematica"
  nivel: "avanzado"
  tags: ["termodinamica", "ecuaciones_diferenciales"]

respuesta: "A la temperatura ambiente (T_amb)"
tipo: mc
opciones_explicitas: ["A la temperatura ambiente (T_amb)", "A la temperatura inicial del objeto (T_obj)", "A 0°C siempre", "A una temperatura que depende únicamente de k"]

enunciado: "La temperatura de un objeto sigue la ley de enfriamiento de Newton: T(t) = T_amb + (T_obj - T_amb) * e^(-k*t). ¿A qué temperatura tenderá el objeto cuando el tiempo t tiende a infinito (t → ∞)?"

explicacion: |
  A medida que el tiempo transcurre, el término exponencial e^(-k*t) tiende a cero, por lo que la temperatura del objeto se iguala a la temperatura ambiente T_amb.
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

respuesta_orden: ["Costo Fijo", "Costo Variable", "Costo Total"]
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

respuesta: fuerza / k
tipo: completar
tolerancia_abs: 0.01

enunciado: "Según la Ley de Hooke, la deformación x de un resorte está dada por F = k * x. Si se aplica una fuerza de {fuerza} N sobre un resorte con constante elástica k = {k} N/m, la deformación es de ___ m."

explicacion: |
  Despejando la fórmula para la deformación: x = F / k. En este caso, {fuerza} / {k} = {fuerza / k}.
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

## Sección: problema-y-restricciones (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "solución"
tipo: "completar"
respuestas_validas:
  - "solución"
  - "solucion"

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
  datos_caso: uno_de([["Requisito", "Requisito"], ["Restricción", "Restricción"]])

respuesta: datos_caso[1]
tipo: "mc"
opciones_explicitas: ["Requisito", "Restricción", "Optimización", "Variable"]

enunciado: "Si un cliente exige que un puente soporte exactamente 50 toneladas, esto se clasifica como un: {datos_caso[0]}"

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

respuesta_orden: ["Identificación del problema", "Definición de restricciones", "Generación de alternativas", "Selección de la mejor solución"]
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

tipo: "mc"
opciones_explicitas: ["Viable", "Inviable", "Óptimo", "Indeterminado"]

enunciado: "Si un diseño cumple con todos los requisitos funcionales pero excede el presupuesto máximo disponible, ¿cómo se clasifica la solución?"

respuesta: "Inviable"

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
  escenario: uno_de([["Proyecto A", 5000, 4500], ["Proyecto B", 12000, 11500]])

enunciado: "En un proyecto de ingeniería, el presupuesto asignado es de {escenario[1]} USD. Si el costo estimado de la solución propuesta es de {escenario[2]} USD, la restricción de presupuesto se cumple."

respuesta: verdadero
tipo: vf
explicacion: |
  Para que una solución sea viable, el costo debe ser menor o igual al presupuesto disponible. En este caso, {escenario[2]} <= {escenario[1]} es verdadero.
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

respuesta_orden: ["Definir el problema", "Identificar restricciones", "Generar soluciones", "Evaluar resultados"]
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
  nombres: ["Acero", "Aluminio"]
  densidades: [7.8, 2.7]
  limites: [5.0, 3.0]
  resultados: [falso, verdadero]
  idx: uno_de([0, 1])

enunciado: "Se requiere un componente con una densidad máxima de {limites[idx]} g/cm³. El material seleccionado es {nombres[idx]} con una densidad de {densidades[idx]} g/cm³. ¿Es viable este material según la restricción de densidad?"

pasos:
  - "Identificar la densidad del material propuesto."
  - "Comparar la densidad del material con el límite máximo permitido."

respuesta: resultados[idx]
tipo: vf
explicacion: |
  La solución es viable si la propiedad física del material no excede el límite impuesto por la restricción de diseño. En este caso, {densidades[idx]} g/cm³ frente al límite de {limites[idx]} g/cm³.
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "basico"
  tags: ["tiempo", "cronograma"]

variables:
  nombres_fase: ["diseño", "prototipado", "pruebas"]
  tiempos: [15, 30, 10]
  plazos: [20, 25, 12]
  idx: uno_de([0, 1, 2])
  nombre_fase: nombres_fase[idx]
  tiempo_estimado: tiempos[idx]
  plazo_maximo: plazos[idx]

enunciado: "Para la fase de {nombre_fase}, el tiempo estimado es de {tiempo_estimado} días, mientras que el plazo máximo permitido es de {plazo_maximo} días. ¿Se cumple con el plazo establecido?"

respuesta: tiempo_estimado <= plazo_maximo
tipo: vf

explicacion: |
  Se cumple el plazo cuando el tiempo estimado no supera el plazo máximo permitido. En este caso: {tiempo_estimado} días frente al límite de {plazo_maximo} días.
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
  escenarios: [["El cliente exige un color específico (estético)", "El puente debe soportar 50 toneladas (seguridad)"], ["El software debe ser azul (estético)", "El software no debe colapsar con 100 usuarios (estabilidad)"]]

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

respuesta_orden: ["Identificación", "Análisis", "Cumplimiento", "Validación"]
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

respuesta: "explícitas"
tipo: completar
respuestas_validas:
  - "explícitas"

enunciado: "Las restricciones que no son mencionadas directamente por el cliente pero que son obligatorias por ley o normas técnicas se conocen como restricciones implícitas, mientras que las comunicadas directamente son ________."

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

respuesta: "Un requisito define qué debe hacer el sistema, mientras que una restricción limita cómo debe hacerse."

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
  escenarios: [["El sistema debe procesar 100 transacciones por segundo.", "Funcional"], ["El sistema debe ser de color azul.", "No Funcional"]]

tipo: completar
enunciado: "Considerando el escenario: '{escenarios[escenario_idx][0]}', este se clasifica como un requisito de tipo ___."
respuestas_validas:
  - "Funcional"
  - "No Funcional"
respuesta: escenarios[escenario_idx][1]

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
respuesta_orden: ["Definición del problema y sus restricciones", "Generación de alternativas de solución", "Evaluación de soluciones bajo criterios de diseño", "Selección de la solución óptima"]
```

```
metadata:
  materia: "ingenieria"
  tema: "problema_y_restricciones"
  nivel: "avanzado"
  tags: ["optimizacion", "toma_de_decisiones"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Aumentar la velocidad de un motor", "Reducir el costo de fabricación"], ["Mejorar la durabilidad de un material", "Reducir el peso de una estructura"]]
  objetivo: ["Optimizar el rendimiento", "Optimizar la economía"]
  conflicto: ["El costo de los materiales aumenta", "La resistencia estructural disminuye"]

tipo: mc
opciones_explicitas: ["El cumplimiento de la restricción suele entrar en conflicto con la optimización del objetivo.", "La restricción es el objetivo principal del ingeniero.", "Las restricciones eliminan la necesidad de optimizar.", "No existe conflicto entre objetivos y restricciones."]
respuesta: "El cumplimiento de la restricción suele entrar en conflicto con la optimización del objetivo."

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
  escenario: [150, 200, 350]
  idx: uno_de([0, 1, 2])
  límite: escenario[idx]

enunciado: "Se debe diseñar un soporte estructural cuyo peso total no puede exceder los {límite} kg. Si el material seleccionado tiene una densidad de 5 kg/m³, ¿cuál es el volumen máximo permitido para cumplir con esta restricción?"

pasos:
  - "Identificar el límite de masa: {límite} kg"
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
respuestas_validas:
  - "850 USD"

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
respuesta_orden: ["Cimentación", "Estructura principal", "Colocación de tableros", "Acabados y señalización"]
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
  carga_max: [5000, 8000, 10000]
  idx: uno_de([0, 1, 2])
  valor_max: carga_max[idx]
  es_segura: ["falso", "verdadero", "verdadero"][idx]
  comparacion_texto: ["6750 > 5000", "6750 <= 8000", "6750 <= 10000"][idx]

enunciado: "Una viga tiene una capacidad de carga máxima de {valor_max} N. Si se aplica una carga de 4500 N y un factor de seguridad de 1.5, ¿la estructura es segura (el esfuerzo aplicado * factor de seguridad <= carga máxima)?"

respuesta: es_segura
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Calculamos el esfuerzo de diseño: 4500 * 1.5 = 6750 N. 
  Si la carga máxima es de {valor_max} N, comparamos: 
  {comparacion_texto}
```

## Sección: disciplinas-de-la-ingenieria (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "infraestructura"]

tipo: mc
opciones_explicitas: ["Diseño de sistemas de comunicación y redes eléctricas", "Diseño y construcción de infraestructuras como puentes, carreteras y represas", "Optimización de procesos de producción en fábricas", "Desarrollo de sistemas de propulsión para satélites"]

enunciado: "La ingeniería civil se encarga principalmente del diseño, construcción y mantenimiento de ___."

respuesta: "Diseño y construcción de infraestructuras como puentes, carreteras y represas"

explicacion: |
  La ingeniería civil se enfoca en el entorno construido, diseñando estructuras que soportan cargas y gestionan recursos naturales para la sociedad.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

tipo: vf
enunciado: "La ingeniería química se centra en la transformación de materias primas en productos útiles mediante procesos químicos."

respuesta: verdadero

explicacion: |
  La ingeniería química utiliza la química, la física y la biología para transformar materias primas en productos con valor añadido a escala industrial.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "maquinas"]

tipo: completar
respuestas_validas:
  - "sistemas de máquinas"
  - "motores térmicos"

enunciado: "La ingeniería mecánica se dedica al estudio y diseño de ___ y sistemas de movimiento."

respuesta: "sistemas de máquinas"

explicacion: |
  La ingeniería mecánica aplica principios de la física y la ciencia de materiales para el diseño de maquinaria, motores y sistemas térmicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimización"]

tipo: mc
opciones_explicitas: ["Optimización de procesos, recursos y sistemas para mejorar la eficiencia", "Diseño de fármacos y dispositivos médicos", "Análisis de la estabilidad de estructuras de acero", "Estudio de la dinámica de fluidos en cohetes"]

enunciado: "El objetivo principal de la ingeniería industrial es la ___."

respuesta: "Optimización de procesos, recursos y sistemas para mejorar la eficiencia"

explicacion: |
  A diferencia de otras ingenierías que se enfocan en productos específicos, la industrial se enfoca en la optimización de sistemas complejos (personas, dinero, tiempo, materiales).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["ordenar", "especialidades"]

tipo: ordenar
opciones_explicitas: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

respuesta_orden: ["Aeroespacial", "Biomédica", "Eléctrica", "Mecánica"]

enunciado: "Ordena las siguientes disciplinas de acuerdo a su escala de aplicación, desde la que opera en el espacio exterior hasta la que aplica tecnología en el cuerpo humano:"

explicacion: |
  El orden solicitado va desde la escala macro/espacial (Aeroespacial) hacia la escala micro/biológica (Biomédica), pasando por sistemas de energía (Eléctrica) y sistemas físicos/mecánicos (Mecánica).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "estructuras"]

enunciado: "Un equipo debe diseñar el esqueleto de un puente colgante para soportar el peso de camiones pesados. El profesional encargado de calcular las cargas, la resistencia de los materiales y la estabilidad de la estructura es el ingeniero ___."

respuestas_validas:
  - "civil"
tipo: completar

explicacion: |
  La ingeniería civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, carreteras y edificios.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos"]

variables:
  idx: uno_de([0, 1])
  datos: [["optimizar la línea de ensamblaje de una fábrica de autos", "reducir costos de producción"], ["gestionar el flujo de inventario en un centro logístico", "mejorar la eficiencia de la cadena de suministro"]]

enunciado: "Un profesional es contratado para {datos[idx][0]} con el fin de {datos[idx][1]}. ¿Qué disciplina está aplicando principalmente?"

opciones_explicitas: ["Mecánica", "Industrial", "Química", "Eléctrica"]
respuesta: "Industrial"
tipo: mc

explicacion: |
  La ingeniería industrial se enfoca en la optimización de sistemas complejos, procesos y recursos para mejorar la productividad.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "vuelo"]

enunciado: "El diseño de un motor de reacción para un satélite requiere conocimientos avanzados de aerodinámica y sistemas de propulsión fuera de la atmósfera terrestre."

respuesta: verdadero
tipo: vf

explicacion: |
  La ingeniería aeroespacial se especializa en el diseño y construcción de vehículos que operan en el aire o en el espacio.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["quimica", "procesos"]

variables:
  reaccion_idx: uno_de([0, 1])
  reacciones: [["la conversión de petróleo crudo en gasolina", "la producción de polímeros a partir de gas natural"], ["la obtención de fertilizantes mediante procesos térmicos", "la síntesis de fármacos complejos"]]

enunciado: "Para llevar a cabo {reacciones[reaccion_idx][0]}, se requiere un ingeniero que comprenda las transformaciones moleculares y las reacciones termodinámicas. Este es un ingeniero ___."

respuestas_validas:
  - "químico"
tipo: completar

explicacion: |
  La ingeniería química utiliza procesos químicos, físicos y biológicos para transformar materias primas en productos útiles a gran escala.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["biomedica", "ordenar"]

enunciado: "Para desarrollar un brazo robótico controlado por señales neuronales, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
respuesta_orden: ["Entender la señal biológica", "Diseñar el componente mecánico", "Integrar el software de control", "Probar el prototipo en un entorno clínico"]
tipo: ordenar

explicacion: |
  La ingeniería biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones tecnológicas aplicadas a la salud.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "mecanica", "estructuras"]

respuesta: "mecanica"
tipo: mc
opciones_explicitas: ["civil", "mecanica", "electrica", "quimica"]

enunciado: "Un error común es pensar que el diseño de maquinaria con partes móviles y sistemas de combustión es competencia de la ingeniería {idx_disciplina[1]}, cuando en realidad pertenece a la ingeniería _________."

variables:
  idx_disciplina: uno_de([[0, "civil"], [2, "electrica"], [3, "quimica"]])

explicacion: |
  La ingeniería civil se enfoca principalmente en infraestructuras estáticas (puentes, carreteras, edificios), mientras que la ingeniería mecánica se especializa en sistemas con movimiento y transformación de energía.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que el objetivo principal de la ingeniería química es la síntesis de nuevos elementos en un laboratorio, tal como lo hace un químico puro."

explicacion: |
  Falso. La ingeniería química se enfoca en el diseño de procesos industriales para transformar materias primas en productos a gran escala, no en la síntesis de elementos químicos básicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos", "optimizacion"]

respuesta: "optimizar la cadena de suministro"
tipo: completar
respuestas_validas:
  - "optimizar la cadena de suministro"

enunciado: "A menudo se confunde la ingeniería industrial con la administración pura; sin embargo, la ingeniería industrial busca _________ para mejorar la productividad de un sistema."

explicacion: |
  La ingeniería industrial utiliza métodos matemáticos y estadísticos para optimizar procesos, logística y recursos, diferenciándose de la gestión administrativa en su enfoque técnico-operativo.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["biomedica", "medicina"]

respuesta: "biomédica"
tipo: mc
opciones_explicitas: ["biomédica", "química", "aeroespacial", "industrial"]

enunciado: "Si un profesional se dedica al diseño de prótesis inteligentes y equipos de soporte vital para hospitales, su especialidad es la ingeniería _________."

explicacion: |
  La ingeniería biomédica aplica los principios de la ingeniería (electrónica, mecánica, materiales) al ámbito de la medicina y la biología para mejorar la salud humana.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "secuencia", "desarrollo"]

respuesta_orden: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]
tipo: ordenar
opciones_explicitas: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]

enunciado: "En el desarrollo de un vehículo de transporte espacial, ordene lógicamente estas etapas de ingeniería:"

pasos:
  - "Primero se define la forma para vencer la resistencia del aire."
  - "Luego se construye el esqueleto que soporte las cargas."
  - "Finalmente se instalan los motores para generar empuje."

explicacion: |
  El desarrollo aeroespacial sigue una jerarquía lógica: primero la aerodinámica (forma), luego la estructura (soporte) y finalmente la propulsión (movimiento).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["industrial", "optimizacion"]

respuesta: "optimizacion"
tipo: completar
respuestas_validas:
  - "optimizacion"
  - "eficiencia"

enunciado: "Mientras que la ingeniería mecánica se enfoca en el diseño de sistemas físicos y máquinas, la ingeniería industrial se centra primordialmente en la ___ de procesos, personas y recursos dentro de una organización."

explicacion: |
  La ingeniería industrial se distingue por su enfoque sistémico en la optimización de procesos productivos y la gestión de recursos para maximizar la eficiencia.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "civil"]

respuesta: verdadero
tipo: vf
enunciado: "Si el objetivo principal de un proyecto es la transformación de la materia a nivel molecular mediante reacciones químicas, estamos ante el campo de la ingeniería química y no de la ingeniería civil."

explicacion: |
  La ingeniería civil se ocupa de infraestructuras y estructuras macroscópicas, mientras que la química trabaja con transformaciones moleculares y procesos de reacción.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["electrica", "potencia"]

opciones_explicitas: ["flujo de electrones y energía", "diseño de motores de combustión", "estructuras de concreto", "procesos biológicos"]

respuesta: "flujo de electrones y energía"
tipo: mc

enunciado: "¿Cuál es el fenómeno físico central que estudia y aplica la ingeniería eléctrica?"

explicacion: |
  La ingeniería eléctrica se especializa en el control y la distribución de la energía eléctrica y el flujo de electrones en sistemas de potencia y circuitos.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "medicina"]

tipo: mc
opciones_explicitas: ["La creación de prótesis y dispositivos médicos", "El diseño de motores de alta potencia"]
respuesta: "La creación de prótesis y dispositivos médicos"

enunciado: "En un contexto de aplicación tecnológica, ¿cuál es el objetivo principal que distingue a la ingeniería biomédica de otras ingenierías?"

pasos:
  - "Identificar la aplicación principal de la ingeniería biomédica."
  - "Comparar con el enfoque de la ingeniería mecánica o eléctrica pura."

explicacion: |
  La ingeniería biomédica aplica principios de la ingeniería para resolver problemas en el ámbito de la medicina y la biología.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "proceso"]

opciones_explicitas: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]

respuesta_orden: ["Diseño de aerodinámica", "Propulsión del vehículo", "Integración de sistemas de navegación"]
tipo: ordenar

enunciado: "Para el desarrollo de un vehículo aeroespacial, el ingeniero debe seguir un orden lógico de prioridades de diseño técnico:"

explicacion: |
  El diseño aeroespacial requiere primero la forma (aerodinámica), luego la fuerza de movimiento (propulsión) y finalmente el control (navegación).
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["mecanica", "motores"]

variables:
  datos: [["diseño de engranajes y pistones", "Mecánica"], ["diseño de circuitos de encendido", "Eléctrica"], ["diseño de sistemas de combustible", "Química"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica", "Eléctrica", "Química"]

enunciado: "Un ingeniero está trabajando en el diseño de un nuevo motor de combustión interna, enfocándose específicamente en el movimiento de los engranajes y pistones. ¿Qué disciplina lidera este trabajo?"

explicacion: |
  El diseño de sistemas mecánicos, movimiento y máquinas es el campo principal de la Ingeniería Mecánica.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "construccion"]

variables:
  datos: [["puentes y túneles", "Civil"], ["procesos de refinación", "Química"], ["redes de distribución", "Eléctrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Civil"
  - "Química"
  - "Eléctrica"

enunciado: "El proyecto consiste en la construcción de ___ y túneles para mejorar la conectividad de una ciudad."

explicacion: |
  La Ingeniería Civil se encarga del diseño, construcción y mantenimiento de infraestructuras como puentes, túneles y carreteras.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "logistica"]

variables:
  textos: ["optimizar una línea de producción", "diseñar un satélite", "crear una prótesis"]
  valores: [verdadero, falso, falso]
  idx: uno_de([0, 1, 2])

respuesta: valores[idx]
tipo: vf
enunciado: "Un ingeniero es contratado para {textos[idx]}. ¿Es esta una tarea típica de la Ingeniería Industrial?"

explicacion: |
  La Ingeniería Industrial se enfoca en la optimización de procesos, sistemas y recursos para mejorar la eficiencia — como optimizar una línea de producción. Diseñar un satélite es tarea de la Ingeniería Aeroespacial, y crear una prótesis es tarea de la Ingeniería Biomédica.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["biomedica", "salud"]

variables:
  datos: [["un sensor de glucosa implantable", "Biomédica"], ["un reactor nuclear", "Química"], ["un avión de carga", "Aeroespacial"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Biomédica", "Química", "Aeroespacial"]

enunciado: "Se requiere desarrollar un sensor de glucosa implantable que interactúe con el cuerpo humano. ¿Qué disciplina es la más adecuada para este desarrollo?"

explicacion: |
  La Ingeniería Biomédica combina principios de la ingeniería con las ciencias de la vida para crear soluciones médicas.
```

```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["aeroespacial", "ordenar"]

variables:
  pasos_orden: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

respuesta_orden: pasos_orden
tipo: ordenar
opciones_explicitas: ["Diseño de la aerodinámica", "Construcción de la estructura", "Lanzamiento del vehículo"]

enunciado: "Ordena cronológicamente las etapas lógicas para el desarrollo de un nuevo vehículo de exploración espacial:"

explicacion: |
  Primero se debe diseñar la aerodinámica, luego construir la estructura física y finalmente realizar el lanzamiento.
```

## Sección: investigar-soluciones-existentes (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: "no reinventar la rueda"
tipo: completar
respuestas_validas:
  - "no reinventar la rueda"

enunciado: "En ingeniería, una de las reglas de oro para optimizar tiempos y recursos es ___."

explicacion: |
  Investigar soluciones existentes evita que un equipo pierda tiempo resolviendo problemas que ya han sido solucionados por otros, permitiendo enfocarse en la innovación real.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["benchmarking", "estandarizacion"]

opciones_explicitas: ["Benchmarking", "Prototipado", "Brainstorming", "Debugging"]
respuesta: "Benchmarking"
tipo: mc

enunciado: "¿Cómo se denomina al proceso de comparar productos, soluciones o procesos propios con los de los líderes del mercado o estándares de la industria?"

explicacion: |
  El Benchmarking es una herramienta de gestión y diseño que permite identificar las mejores prácticas para integrarlas en el propio desarrollo.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["precedentes", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que investigar soluciones existentes limita la creatividad del ingeniero al imponerle un camino ya trazado?"

explicacion: |
  Falso. La investigación de precedentes no limita la creatividad, sino que la fundamenta, permitiendo que el ingeniero construya sobre bases sólidas en lugar de cometer errores ya conocidos.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar problemas de la solución actual", "Documentar hallazgos", "Analizar arquitectura técnica", "Evaluar pros y contras"]
respuesta_orden: ["Identificar problemas de la solución actual", "Analizar arquitectura técnica", "Evaluar pros y contras", "Documentar hallazgos"]
tipo: ordenar

enunciado: "Ordene lógicamente los pasos para realizar un análisis de una solución existente antes de iniciar un nuevo diseño:"

explicacion: |
  Un proceso sistemático requiere primero entender qué falla o qué se puede mejorar, analizar cómo está construido, evaluar su rendimiento y finalmente documentar todo para el nuevo proyecto.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estado_del_arte", "investigacion"]

opciones_explicitas: ["Estado del Arte", "Diagrama de flujo", "Manual de usuario", "Especificación técnica"]
respuesta: "Estado del Arte"
tipo: mc

enunciado: "El conjunto de conocimientos, tecnologías y soluciones que representan el nivel más alto de desarrollo en un campo específico en un momento dado se conoce como:"

explicacion: |
  El 'Estado del Arte' es la revisión exhaustiva de lo que existe actualmente, fundamental para asegurar que el nuevo diseño sea verdaderamente innovador o una mejora significativa.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "metodologia"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[15000, 5000], [8000, 2000]]

enunciado: "Un equipo de ingeniería decide desarrollar un sensor de temperatura desde cero en lugar de usar uno ya estandarizado. El costo de desarrollo propio es de ${datos[caso_idx][0]} USD, mientras que la licencia de una solución existente es de ${datos[caso_idx][1]} USD. ¿Cuál es el ahorro potencial al usar la solución existente?"

respuesta: datos[caso_idx][0] - datos[caso_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al investigar soluciones existentes, el ahorro fue de ${datos[caso_idx][0] - datos[caso_idx][1]} USD. Reinventar la rueda sin necesidad aumenta los costos y el tiempo de salida al mercado.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estandar", "benchmarking"]

variables:
  estandares: [["ISO-9001", "Calidad"], ["IEEE-802.11", "Conectividad"], ["ASTM-E12", "Materiales"]]
  idx: uno_de([0, 1, 2])
  estandar_nombre: estandares[idx][0]
  estandar_valor: estandares[idx][1]

enunciado: "Al diseñar un sistema de comunicación inalámbrica, el ingeniero consulta el estándar {estandar_nombre} para evitar errores de compatibilidad. El objetivo principal de este estándar es asegurar la: ___"

respuesta: estandar_valor
respuestas_validas:
  - estandar_valor
tipo: completar

explicacion: |
  Consultar estándares como el {estandar_nombre} permite que el diseño sea compatible con el ecosistema existente, evitando el error de 'reinventar' protocolos de comunicación.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["propiedad_intelectual", "riesgo"]

enunciado: "Un ingeniero encuentra una solución técnica que resuelve el problema del diseño actual, pero descubre que existe una patente vigente para ese mecanismo específico. ¿Es legalmente seguro implementar esta solución sin una licencia?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  La investigación de soluciones existentes no es solo técnica, sino también legal. Implementar una solución patentada sin autorización constituye infracción de propiedad intelectual.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

enunciado: "Ordena los pasos lógicos para integrar una solución existente en un nuevo proyecto de ingeniería:"

opciones_explicitas: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
respuesta_orden: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
tipo: ordenar

explicacion: |
  El proceso correcto implica primero entender el problema, luego buscar qué se ha hecho antes, evaluar si esas soluciones sirven y finalmente adaptarlas.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["mentalidad", "eficiencia"]

enunciado: "Si un ingeniero dedica el 40% del tiempo de un proyecto a documentar soluciones que ya han sido resueltas en la industria para evitar errores previos, ¿esta práctica se considera eficiente en la gestión de ingeniería?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  La investigación de precedentes es una inversión de tiempo que reduce la incertidumbre y el riesgo de fallos catastróficos en la fase de prototipado.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "diseño", "eficiencia"]

respuesta: falso
tipo: vf

enunciado: "En el proceso de diseño de ingeniería, intentar crear una solución desde cero sin consultar precedentes tecnológicos se considera una práctica de alta eficiencia para maximizar la innovación."

explicacion: |
  Falso. Ignorar las soluciones existentes (el "reinventar la rueda") suele llevar a errores de diseño ya resueltos, mayores costos y pérdida de tiempo. La verdadera innovación surge de iterar sobre lo que ya funciona.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "gestión_de_proyectos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un ingeniero diseña un sistema de frenado ignorando normativas de seguridad previas.", "retrabajo_costoso"], ["Un ingeniero desarrolla un motor sin estudiar la termodinámica aplicada en modelos anteriores.", "fallo_estructural"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc

opciones_explicitas: ["retrabajo_costoso", "fallo_estructural", "optimización_de_costos", "aceleración_de_prototipado"]

enunciado: "Si un equipo de ingeniería decide omitir la fase de investigación de soluciones existentes para 'ahorrar tiempo', el resultado más probable en un proyecto complejo es: ___"

explicacion: |
  La falta de precedentes aumenta drásticamente la probabilidad de cometer errores técnicos que ya han sido documentados en la industria, lo que deriva en un {escenarios[escenario_idx][1]}.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodología", "pasos_diseño"]

respuesta_orden: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]
tipo: ordenar

opciones_explicitas: ["Identificar problemas", "Buscar soluciones existentes", "Analizar ventajas y desventajas", "Seleccionar la mejor base para el diseño"]

enunciado: "Ordene lógicamente los pasos que un ingeniero debe seguir al realizar un estudio de antecedentes antes de iniciar el diseño de un nuevo producto:"

explicacion: |
  Antes de diseñar, primero se debe entender el problema, luego investigar qué se ha hecho para resolverlo, evaluar esas soluciones y finalmente usar ese conocimiento como base.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["ética", "innovación"]

respuesta: "mejora"
tipo: completar

respuestas_validas:
  - "mejora"
  - "réplica"
  - "plagio"
  - "error"

enunciado: "Cuando un ingeniero estudia una solución existente para entender sus limitaciones y aplicarlas en un nuevo contexto, no está realizando una simple réplica, sino buscando una ___ del sistema original."

explicacion: |
  La investigación de precedentes tiene como objetivo la evolución técnica. El objetivo es aprender de los éxitos y, sobre todo, de los fallos de las soluciones actuales para proponer una mejora.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["documentación", "gestión_del_conocimiento"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la revisión de patentes y literatura técnica es una etapa de investigación de soluciones existentes?"

explicacion: |
  Verdadero. Las patentes y la literatura técnica son las fuentes primarias para asegurar que no se está reinventando algo que ya está protegido o documentado.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "benchmarking"]

variables:
  concepto_clave: "benchmarking"

enunciado: "El proceso de comparar procesos o productos propios con los de los líderes del mercado para identificar mejoras se denomina {concepto_clave}, mientras que la reingeniería implica un cambio radical de la estructura existente."

opciones_explicitas: ["benchmarking", "reingeniería", "prototipado", "iteración"]
respuesta: "benchmarking"
tipo: "mc"

explicacion: |
  El benchmarking busca mejorar mediante la comparación con estándares de excelencia, sin destruir el proceso actual, a diferencia de la reingeniería que propone un rediseño total desde cero.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "precedentes"]

variables:
  es_eficiente: falso

enunciado: "Si un ingeniero decide diseñar desde cero un mecanismo de engranajes que ya ha sido optimizado y documentado ampliamente por la industria, ¿está aplicando una práctica de eficiencia en el diseño?"

respuesta: es_eficiente
tipo: "vf"

explicacion: |
  No es eficiente. Ignorar soluciones existentes y "reinventar la rueda" consume recursos, tiempo y aumenta el riesgo de errores que ya han sido resueltos en precedentes técnicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

opciones_explicitas: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
respuesta_orden: ["Identificar necesidades", "Analizar soluciones existentes", "Evaluar precedentes", "Seleccionar arquitectura"]
tipo: "ordenar"

enunciado: "Ordene lógicamente los pasos para investigar soluciones existentes antes de definir la arquitectura de un nuevo diseño:"

explicacion: |
  Antes de diseñar, se debe entender qué se necesita, buscar qué se ha hecho antes (análisis), entender por qué funcionó o falló (evaluar) y finalmente elegir el camino a seguir.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["investigacion", "diseño"]

variables:
  idx: uno_de([0, 1])
  terminos: [["Estado del Arte", "Prototipo"], ["Revisión de literatura", "Modelo físico experimental"]]

enunciado: "La investigación de soluciones existentes se basa principalmente en el {terminos[idx][0]}, mientras que la validación de una nueva idea propia se realiza mediante un ___."

respuesta: terminos[idx][1]
tipo: "completar"
respuestas_validas:
  - "Prototipo"
  - "Modelo físico experimental"

explicacion: |
  El Estado del Arte es el conocimiento actual acumulado en la disciplina, mientras que el prototipo es la materialización física o digital de la nueva propuesta del ingeniero.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["riesgo", "diseño"]

enunciado: "Si un ingeniero omite la fase de investigación de soluciones existentes, el riesgo de cometer errores de diseño ya superados por la industria es ___."

respuesta: "alto"
tipo: "completar"
respuestas_validas:
  - "alto"
  - "muy alto"

explicacion: |
  La falta de estudio de precedentes incrementa exponencialmente la probabilidad de repetir fallos técnicos o de gestión que ya fueron resueltos en proyectos anteriores.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["metodologia", "eficiencia"]

variables:
  escenario: uno_de([["Se requiere un sistema de filtrado de agua para una comunidad rural.", "reutilizar"], ["Se busca optimizar un motor de combustión interna.", "analizar_precedentes"], ["Se necesita diseñar un puente peatonal de madera.", "estudiar_estándares"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["reutilizar", "analizar_precedentes", "estudiar_estándares", "inventar_todo"]

enunciado: "Ante el escenario: '{escenario[0]}', la acción más eficiente para evitar la 'reinvención de la rueda' es: ___"

explicacion: |
  Investigar soluciones existentes permite aprovechar conocimientos probados, ahorrando tiempo y recursos.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Si existe un estándar industrial consolidado para un componente mecánico, ¿es una buena práctica de ingeniería intentar diseñar un proceso de fabricación completamente nuevo sin antes estudiar dicho estándar?"

explicacion: |
  No. Ignorar los estándares y soluciones existentes aumenta el riesgo de errores y costos innecesarios.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta_orden: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo"]
tipo: ordenar

opciones_explicitas: ["Búsqueda de antecedentes", "Análisis de fallos previos", "Selección de solución base", "Diseño de prototipo"]

enunciado: "Ordene los pasos lógicos para aplicar el aprendizaje de precedentes en un nuevo proyecto de ingeniería:"

explicacion: |
  El orden lógico comienza con la investigación, sigue con el análisis de lo que falló o funcionó, la elección de una base y finalmente el diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["gestion_proyectos"]

variables:
  caso: uno_de([["Caso A: Implementar un software de gestión ya existente.", "200"], ["Caso B: Desarrollar un software de gestión desde cero.", "1500"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "200"
  - "1500"

enunciado: "Si el presupuesto para el '{caso[0]}' es de $1000, ¿cuál es el costo estimado (en dólares) según el escenario planteado?"

explicacion: |
  La investigación de soluciones existentes suele reducir drásticamente los costos de desarrollo inicial.
```

```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["patrones", "optimizacion"]

variables:
  patron: uno_de([["Modularidad", "Escalabilidad"], ["Redundancia", "Robustez"], ["Simplicidad", "Mantenibilidad"]])

respuesta: patron[1]
tipo: mc
opciones_explicitas: ["Modularidad", "Escalabilidad", "Redundancia", "Robustez", "Simplicidad", "Mantenibilidad"]

enunciado: "Al estudiar un sistema de ingeniería previo, se observa que su principal fortaleza es la {patron[0]}. Esta característica le aporta directamente al sistema una mayor: ___"

explicacion: |
  Identificar la característica clave de una solución exitosa permite replicar su éxito en nuevos contextos.
```

## Sección: diseno-conceptual (25 preguntas)

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "etapas_proyecto"]

respuesta: "diseño conceptual"
tipo: completar
respuestas_validas:
  - "diseño conceptual"

enunciado: "La etapa en la que se establece la idea general de la solución, definiendo el enfoque y los principios básicos antes de entrar en detalles técnicos profundos, se denomina ___."

explicacion: |
  El diseño conceptual es la fase donde se abstrae el problema para proponer una solución lógica y funcional sin considerar aún materiales específicos o tolerancias mecánicas.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivos", "metodologia"]

tipo: mc
opciones_explicitas: ["Definir la arquitectura general y la funcionalidad de la solución.", "Realizar el modelado matemático detallado de cada componente.", "Seleccionar los proveedores de materia prima.", "Realizar pruebas de fatiga en prototipos finales."]

respuesta: "Definir la arquitectura general y la funcionalidad de la solución."

enunciado: "¿Cuál es el objetivo principal de la fase de diseño conceptual?"

explicacion: |
  El diseño conceptual busca la arquitectura funcional. El modelado detallado, la selección de proveedores y las pruebas de fatiga pertenecen a etapas posteriores (diseño detallado y validación).
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["abstraccion", "conceptos"]

respuesta: verdadero

tipo: vf

enunciado: "En el diseño conceptual, la abstracción es una herramienta clave para simplificar el problema y centrarse en la lógica de la solución en lugar de en los detalles constructivos."

explicacion: |
  Correcto. La abstracción permite ignorar detalles irrelevantes en esta etapa para asegurar que la solución propuesta realmente resuelva el problema fundamental.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

respuesta_orden: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación"]
tipo: ordenar

opciones_explicitas: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación"]

enunciado: "Ordene las siguientes etapas de un proceso de desarrollo de ingeniería desde la concepción hasta la validación:"

explicacion: |
  El flujo lógico comienza con la idea (conceptual), sigue con el detalle técnico (detallado) y termina con la verificación de la solución (prototipado).
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["componentes", "requisitos"]

respuesta: "requisitos"
tipo: completar
respuestas_validas:
  - "requisitos"

enunciado: "El diseño conceptual debe basarse primordialmente en los ___ del cliente y las restricciones del problema."

explicacion: |
  Los requisitos son la base de cualquier diseño; si el diseño conceptual no satisface los requisitos, el proyecto fallará independientemente de qué tan buen detalle técnico tenga después.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "definicion"]

respuesta: "definicion_problema"
tipo: "mc"
opciones_explicitas: ["definicion_problema", "seleccion_materiales", "prototipado_rapido", "analisis_de_costos"]

enunciado: "Antes de proponer una solución técnica detallada, es fundamental realizar la ___ para entender qué se debe resolver."

explicacion: |
  El diseño conceptual comienza con la definición clara del problema. Sin entender la necesidad real, cualquier solución técnica posterior corre el riesgo de ser irrelevante o ineficiente.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["restricciones", "requisitos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Un dron de carga debe elevar 5kg", "5"], ["Un sensor de temperatura debe operar a -20°C", "-20"]]

respuesta: escenarios[caso_idx][1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "En el diseño conceptual de un sistema de transporte de carga, si el requisito principal es que el dispositivo debe ser capaz de levantar una masa de {escenarios[caso_idx][0]}, ¿cuál es el valor numérico de la carga de diseño en kg?"

pasos:
  - "Identificar el requisito de carga útil en el enunciado."
  - "Extraer el valor numérico asociado a la capacidad de carga."

explicacion: |
  En la fase conceptual, los requisitos de rendimiento (como la carga útil) se establecen como parámetros de diseño que guiarán la selección de motores y estructuras en la fase técnica.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso

tipo: "vf"

enunciado: "El diseño conceptual se encarga de especificar las dimensiones exactas de cada tornillo y el código de programación final de los componentes."

explicacion: |
  Falso. El diseño conceptual se centra en la arquitectura general, la lógica de funcionamiento y la solución macro. La especificación de detalles como tornillos o líneas de código pertenece a la fase de diseño detallado o ingeniería de detalle.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["proceso", "flujo"]

tipo: ordenar
opciones_explicitas: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad", "fabricacion_final"]
respuesta_orden: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad", "fabricacion_final"]

enunciado: "Ordene las etapas del proceso de diseño desde la concepción inicial hasta la validación de la idea antes de la fabricación."

explicacion: |
  El flujo lógico comienza con la necesidad, sigue con la generación de ideas (brainstorming), se elige una arquitectura de solución y se valida su viabilidad. La fabricación es una etapa posterior al diseño.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["toma_de_decisiones", "arquitectura"]

variables:
  opcion_idx: uno_de([0, 1])
  casos: [["un sistema de frenado mecánico", "hidraulico"], ["un sistema de transmisión de energía", "electrico"]]

respuesta: casos[opcion_idx][1]
tipo: "completar"
respuestas_validas:
  - "hidraulico"
  - "electrico"

enunciado: "Si estamos en la fase conceptual de un vehículo de transporte pesado y decidimos que la transferencia de fuerza se hará mediante fluidos a presión, la arquitectura seleccionada es de tipo ___."

explicacion: |
  La elección de la arquitectura (mecánica, hidráulica, eléctrica) es la decisión principal del diseño conceptual. Una vez elegida, se procede a realizar los cálculos de ingeniería detallados para esa arquitectura específica.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "etapas_proyecto"]

respuesta: "idea_general"
tipo: completar

enunciado: "Un error común en la gestión de proyectos es saltar directamente a la definición de detalles técnicos sin haber consolidado primero la ___ de la solución. ¿Qué etapa se está omitiendo?"

explicacion: |
  El diseño conceptual debe establecer la arquitectura y funcionalidad general. Si se salta directamente a los detalles técnicos (como dimensiones exactas o materiales específicos), se corre el riesgo de optimizar componentes de una solución que podría ser inherentemente errónea para el problema original.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["errores_comunes", "definicion"]

respuesta: falso
tipo: vf
enunciado: "Si el diseño conceptual se centra en la selección de tornillos, aleaciones específicas y tolerancias de fabricación, ¿se está cumpliendo estrictamente con la fase de diseño conceptual?"

explicacion: |
  Falso. El diseño conceptual debe responder al 'qué' y al 'por qué' de la solución a nivel macro. La selección de componentes específicos y tolerancias pertenece al diseño detallado.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "confusion"]

respuesta: "el_concepto_es_la_solucion"
tipo: completar
respuestas_validas:
  - "el_concepto_es_la_solucion"

enunciado: "Un error conceptual frecuente es creer que un prototipo funcional de baja fidelidad es lo mismo que el diseño conceptual. Sin embargo, el diseño conceptual es ___."

explicacion: |
  El diseño conceptual es una representación abstracta o lógica de la solución, mientras que el prototipo es una realización física o digital para validar hipótesis. No son sinónimos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["flujo_trabajo"]

respuesta_orden: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion"]
tipo: ordenar

opciones_explicitas: ["identificacion_problema", "diseno_conceptual", "diseno_detallado", "fabricacion"]

enunciado: "Ordene las etapas de un proceso de ingeniería de la más general a la más específica, evitando el error de saltar pasos críticos."

explicacion: |
  El flujo lógico requiere primero entender el problema, luego idear la solución general (conceptual), luego definir sus componentes exactos (detallado) y finalmente producirlo.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["riesgo", "optimizacion"]

respuesta: "optimizar_detalles"
tipo: mc
opciones_explicitas: ["optimizar_detalles", "validar_requisitos", "definir_presupuesto", "analizar_competencia"]

enunciado: "En la fase de diseño conceptual, ¿cuál es el mayor riesgo de error antes de haber validado si la idea general satisface las necesidades del usuario?"

explicacion: |
  Intentar optimizar detalles técnicos (como reducir el peso de una pieza en gramos) cuando la arquitectura general del sistema aún no es válida es una pérdida de recursos conocida como 'optimización prematura'.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "fases_proyecto"]

respuesta: "diseño detallado"
tipo: completar
respuestas_validas:
  - "diseño detallado"
  - "diseño de detalle"
  - "diseño técnico"

enunciado: "Mientras que el diseño conceptual se centra en la idea general y la viabilidad de la solución, el ___ se enfoca en las especificaciones técnicas precisas y la selección de materiales exactos."

explicacion: |
  El diseño conceptual es la fase de abstracción donde se define el 'qué' y el 'por qué', mientras que el diseño detallado define el 'cómo' técnico para la fabricación o implementación.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivo", "proposito"]

variables:
  escenarios: [["un sistema de filtración de agua", "identificar la arquitectura básica"], ["un nuevo modelo de smartphone", "definir la experiencia de usuario y funciones clave"]]
  escenario: uno_de(escenarios)

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["definir la arquitectura técnica final", "identificar la arquitectura básica", "definir la experiencia de usuario y funciones clave", "seleccionar proveedores de componentes"]

enunciado: "En el caso de {escenario[0]}, el objetivo principal del diseño conceptual es ___."

explicacion: |
  El diseño conceptual no busca detalles de implementación, sino establecer la estructura lógica y los principios fundamentales que guiarán la solución.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["naturaleza", "proceso"]

respuesta: falso
tipo: vf

enunciado: "El diseño conceptual es un proceso lineal y único que se completa antes de pasar a cualquier otra fase del proyecto."

explicacion: |
  Falso. El diseño conceptual es altamente iterativo; las ideas se refinan, se descartan o se modifican constantemente a medida que se comprenden mejor las restricciones del problema.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "jerarquia"]

respuesta_orden: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]
tipo: ordenar
opciones_explicitas: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]

enunciado: "Ordene cronológicamente las etapas de un proceso de diseño conceptual estándar:"

explicacion: |
  Un proceso lógico comienza entendiendo la necesidad (problema), explorando soluciones (ideas), eligiendo la más viable (selección) y estructurando la solución (arquitectura).
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "comparacion"]

variables:
  casos: [["un motor de combustión", "un software de gestión"], ["un puente colgante", "una aplicación móvil"]]
  caso_idx: uno_de([0, 1])
  caso_elegido: casos[caso_idx][0]

respuesta: "el prototipo es una manifestación física o funcional de la idea"
tipo: completar
respuestas_validas:
  - "el prototipo es una manifestación física o funcional de la idea"
  - "el prototipo es un dibujo"

enunciado: "Si el diseño conceptual es la representación mental o esquemática de la solución para {caso_elegido}, entonces ___."

explicacion: |
  El diseño conceptual es el concepto abstracto; el prototipo es la materialización (física o digital) para validar si ese concepto funciona en la realidad.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "alcance"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un sistema de purificación de agua para una comunidad rural", "priorizar la simplicidad y el costo"], ["un motor de combustión de alta eficiencia", "priorizar la potencia máxima y el rendimiento"]]

enunciado: "En la fase de diseño conceptual para {escenarios[escenario_idx][0]}, el objetivo principal es {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["priorizar la simplicidad y el costo", "priorizar la potencia máxima y el rendimiento", "definir el presupuesto detallado de materiales", "realizar pruebas de fatiga de materiales"]

explicacion: |
  El diseño conceptual se enfoca en la solución general y la viabilidad de la idea, no en los detalles técnicos o materiales específicos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["fases_proyecto"]

enunciado: "El diseño conceptual se realiza después de haber definido los requerimientos del cliente pero antes de la creación de los planos de fabricación detallados."

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. El diseño conceptual actúa como el puente entre la necesidad (requerimiento) y la solución técnica detallada.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "arquitectura"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["un puente peatonal", "la estructura principal y el flujo de carga"], ["un software de gestión hospitalaria", "la arquitectura de la base de datos y la interfaz de usuario"]]

enunciado: "Para el diseño conceptual de {datos[caso_idx][0]}, el ingeniero debe definir principalmente {datos[caso_idx][1]}."

respuesta: datos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "la estructura principal y el flujo de carga"
  - "la arquitectura de la base de datos y la interfaz de usuario"

explicacion: |
  El diseño conceptual define la arquitectura funcional o estructural básica que permitirá cumplir con los requerimientos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["flujo_trabajo"]

enunciado: "Ordene las etapas del proceso de diseño de un nuevo producto desde la concepción hasta la producción:"

opciones_explicitas: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
respuesta_orden: ["Identificación de la necesidad", "Diseño conceptual", "Diseño detallado", "Prototipado y pruebas"]
tipo: ordenar

explicacion: |
  El proceso sigue un flujo lógico: primero se entiende el problema, luego se propone la idea general (conceptual), se detallan las medidas y finalmente se valida con prototipos.
```

```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["evaluacion", "riesgo"]

variables:
  problema_idx: uno_de([0, 1])
  problemas: ["un sistema de frenado para un tren de alta velocidad", "un nuevo tipo de envase biodegradable para alimentos"]

enunciado: "Durante el diseño conceptual de {problemas[problema_idx]}, si se detecta que la solución propuesta es físicamente imposible, ¿cuál es la acción correcta?"

respuesta: "Reevaluar la idea o buscar una alternativa conceptual"
tipo: mc
opciones_explicitas: ["Reevaluar la idea o buscar una alternativa conceptual", "Continuar con el diseño detallado para ver si se soluciona", "Ignorar el problema y esperar a la fase de prototipado", "Aumentar el presupuesto de materiales"]

explicacion: |
  El diseño conceptual es la etapa ideal para detectar inviabilidades técnicas; intentar avanzar a detalles con un concepto erróneo es un error costoso.
```

