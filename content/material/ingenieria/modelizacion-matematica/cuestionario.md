# Ingenieria — Modelizacion matematica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de modelo matemático

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

### 2 — Componentes de un modelo

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

### 3 — Veracidad de la modelización

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

### 4 — Etapas del proceso de modelado

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

### 5 — Tipos de modelos según el tiempo

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

### 6 — Caída libre y tiempo de impacto

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

### 7 — Crecimiento poblacional lineal

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

### 8 — Interés compuesto anual

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

### 9 — Análisis de veracidad: Modelo de mezcla

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

### 10 — Secuencia de resolución de un problema de optimización

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

### 11 — El error de la variable dependiente

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

### 12 — ¿Es un modelo perfecto?

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

### 13 — Identificación de relaciones

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

### 14 — El proceso de modelización

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

### 15 — El peligro de la extrapolación

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

### 16 — Modelo determinista vs estocástico

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

### 17 — El propósito de la simplificación

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

### 18 — Variables de estado vs parámetros

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

### 19 — Modelos estáticos vs dinámicos

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

### 20 — Pasos en el ciclo de modelización

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

### 21 — Crecimiento de población bacteriana

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

### 22 — Decaimiento de temperatura (Ley de Newton)

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

### 23 — Análisis de costos de producción

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

### 24 — Resistencia de materiales (Ley de Hooke)

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

### 25 — Eficiencia de un sistema de filtrado

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
