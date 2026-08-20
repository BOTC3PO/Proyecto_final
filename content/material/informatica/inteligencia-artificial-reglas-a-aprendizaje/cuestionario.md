# Informatica — Inteligencia artificial reglas a aprendizaje (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Evolución de la IA

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["conceptos", "historia"]

respuesta: "aprendizaje automatico"
tipo: completar
respuestas_validas:
  - "aprendizaje automatico"
  - "machine learning"

enunciado: "Mientras que los sistemas tradicionales se basan en reglas programadas manualmente, la disciplina que permite a las máquinas mejorar su rendimiento mediante la experiencia con datos se denomina ___."

explicacion: |
  El paso de la IA basada en reglas (sistemas expertos) al aprendizaje automático (Machine Learning) marca la transición de la programación explícita al entrenamiento mediante datos.
```

### 2 — Sistemas Basados en Reglas

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["sistemas-expertos", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema basado en reglas (como un sistema experto), el conocimiento es extraído y codificado manualmente por un experto humano bajo la forma de estructuras 'SI [condición] ENTONCES [acción]'."

explicacion: |
  Efectivamente, los sistemas de IA clásica dependen de que un programador o experto defina todas las reglas lógicas que el sistema debe seguir para tomar decisiones.
```

### 3 — El rol de los datos

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["datos", "entrenamiento"]

variables:
  escenario: uno_de([["un sistema de filtrado de spam basado en reglas", "palabra 'viagra'"], ["un modelo de reconocimiento de imágenes", "fotos de gatos"]])

respuesta: "datos de entrenamiento"
tipo: mc
opciones_explicitas: ["datos de entrenamiento", "reglas explícitas", "Ninguna de las anteriores"]

enunciado: "En el contexto de la IA moderna, ¿cuál de los siguientes elementos es el componente fundamental que sustituye a la regla explícita para permitir que el sistema aprenda? Ejemplo de insumo: {escenario[1]}."

pasos:
  - "Identificar qué elemento es el insumo para el entrenamiento."
  - "Comparar con el concepto de 'regla manual' vs 'dato de entrenamiento'."

explicacion: |
  En el aprendizaje automático, el modelo no recibe la regla, sino los datos (como {escenario[1]}) para que él mismo infiera los patrones.
```

### 4 — Componentes de un sistema de aprendizaje

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["terminologia", "machine-learning"]

respuesta_orden: ["Datos", "Algoritmo", "Modelo"]
tipo: ordenar

opciones_explicitas: ["Datos", "Algoritmo", "Modelo"]

enunciado: "Ordene los componentes en el orden lógico de un proceso de aprendizaje automático: primero se requieren los ___, luego se aplica un ___ sobre ellos y finalmente se obtiene un ___ capaz de realizar predicciones."

explicacion: |
  El flujo estándar es: Datos (input) $\rightarrow$ Algoritmo (proceso de entrenamiento) $\rightarrow$ Modelo (producto final entrenado).
```

### 5 — Diferencia fundamental

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["paradigma", "comparativa"]

respuesta: "aprendizaje automatico"
tipo: mc
opciones_explicitas: ["sistemas expertos", "aprendizaje automatico", "programación lógica", "sistemas de reglas"]

enunciado: "Si un programador debe escribir cada instrucción lógica para que la IA funcione, está usando un sistema de reglas. Si el sistema descubre la lógica por sí mismo analizando patrones, está usando:"

explicacion: |
  La diferencia clave es la fuente de la lógica: en los sistemas de reglas es el humano (codificación), en el aprendizaje automático es el patrón extraído de los datos.
```

### 6 — Sistemas basados en reglas

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas"
  nivel: "basico"
  tags: ["ia", "logica", "reglas"]

enunciado: "Un sistema experto de diagnóstico médico utiliza una regla lógica simple: 'Si el paciente tiene fiebre Y dolor de garganta, entonces el diagnóstico es Faringitis'. Si un paciente presenta fiebre pero NO presenta dolor de garganta, el sistema determinará que el diagnóstico NO es Faringitis según esta regla específica."

respuesta: falso
tipo: vf

explicacion: |
  En los sistemas basados en reglas explícitas, el conocimiento es rígido. Si no se cumplen todas las condiciones de la premisa (antecedente), la regla no se dispara, independientemente de si hay otros síntomas presentes.
```

### 7 — El cambio de paradigma

```
metadata:
  materia: "informatica"
  tema: "ia_aprendizaje_datos"
  nivel: "intermedio"
  tags: ["machine_learning", "paradigma"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Reglas manuales", "Programador escribe IF/ELSE" ], [ "Aprendizaje", "El modelo extrae patrones de datos" ]]

enunciado: "En el paradigma de Machine Learning, a diferencia de la programación tradicional, el componente principal que determina la lógica del sistema es: {datos[escenario_idx][0]}"

opciones_explicitas: ["El código fuente escrito por el humano", "Los datos y los ejemplos proporcionados", "La memoria RAM del computador"]
respuesta: "Los datos y los ejemplos proporcionados"
tipo: mc

explicacion: |
  En la IA clásica (Sistemas Expertos), el humano codifica las reglas. En el Machine Learning, el humano proporciona datos y el algoritmo "aprende" las reglas (parámetros) mediante optimización.
```

### 8 — El proceso de entrenamiento

```
metadata:
  materia: "informatica"
  tema: "entrenamiento_ia"
  nivel: "intermedio"
  tags: ["machine_learning", "pasos"]

enunciado: "Para que un modelo de IA aprenda a reconocer imágenes de gatos, se debe seguir un orden lógico de trabajo. Ordena los siguientes pasos:"

opciones_explicitas: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
respuesta_orden: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
tipo: ordenar

explicacion: |
  El flujo estándar de Ciencia de Datos implica: 1. Obtener datos (Data Collection), 2. Entrenar (Training), 3. Validar/Testear (Evaluation) y 4. Desplegar (Deployment).
```

### 9 — Clasificación de datos

```
metadata:
  materia: "informatica"
  tema: "clasificacion_ia"
  nivel: "basico"
  tags: ["machine_learning", "conceptos"]

enunciado: "Un sistema de filtrado de SPAM analiza miles de correos electrónicos previos. Si el sistema detecta que la palabra 'Gratis' aparece en el 90% de los correos marcados como spam, aprenderá a asociar esa palabra con el spam. Este proceso de encontrar una función que asocie características con etiquetas se llama: ___"

respuestas_validas:
  - "Entrenamiento"
  - "Inferencia"
  - "Etiquetado"
respuesta: "Entrenamiento"
tipo: completar

explicacion: |
  El entrenamiento es el proceso mediante el cual el algoritmo ajusta sus parámetros internos para minimizar el error entre sus predicciones y las etiquetas reales de los datos.
```

### 10 — Capacidad de generalización

```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["machine_learning", "error"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [[ "El modelo memorizó los datos de entrenamiento y falla con datos nuevos", "Overfitting" ], [ "El modelo es muy simple y no captura la tendencia de los datos", "Underfitting" ]]

enunciado: "Cuando un sistema de IA ha aprendido tan perfectamente los datos de entrenamiento que ha 'memorizado' el ruido y los detalles irrelevantes, perdiendo su capacidad de aplicarse a casos reales distintos, estamos ante un problema de: {caso[caso_idx][1]}"

opciones_explicitas: ["Overfitting", "Underfitting", "Bias", "Variance"]
respuesta: "Overfitting"
tipo: mc

explicacion: |
  El Overfitting (sobreajuste) ocurre cuando el modelo es demasiado complejo y se adapta excesivamente al ruido de los datos de entrenamiento, lo que resulta en un error muy alto cuando se le presentan datos nuevos (pérdida de generalización).
```

### 11 — Sistemas de reglas vs. Aprendizaje

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos_base"]

respuesta: "aprendizaje automático"
tipo: "completar"
respuestas_validas:
  - "aprendizaje automático"
  - "machine learning"

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ es un paradigma donde el sistema identifica patrones directamente a partir de los datos."

explicacion: |
  En la IA clásica (sistemas expertos), el conocimiento es explícito y codificado por humanos. En el aprendizaje automático, el modelo "aprende" las reglas estadísticas a partir de la experiencia (datos).
```

### 12 — El problema de la escalabilidad de reglas

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["escalabilidad", "sistemas_expertos"]

variables:
  es_complejo: falso

respuesta: falso
tipo: "vf"

enunciado: "Un sistema basado en reglas explícitas es intrínsecamente más eficiente y fácil de mantener que un modelo de aprendizaje automático cuando el problema involucra miles de variables interdependientes y dinámicas."

explicacion: |
  Falso. A medida que la complejidad y el número de variables aumentan, las reglas manuales se vuelven imposibles de gestionar (explosión combinatoria), mientras que los modelos de aprendizaje están diseñados para manejar esa dimensionalidad.
```

### 13 — ¿Qué aprende realmente un modelo?

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["naturaleza_aprendizaje"]

respuesta: "correlaciones estadísticas"
tipo: "mc"
opciones_explicitas: ["correlaciones estadísticas", "lógica formal pura", "causalidad absoluta", "sentido común humano"]

enunciado: "Es un error común pensar que un modelo de aprendizaje profundo entiende la 'causa' de un fenómeno. En realidad, lo que el modelo optimiza es la detección de ___ en los datos de entrenamiento."

explicacion: |
  Los modelos de IA actuales son excelentes encontrando patrones y correlaciones, pero no comprenden la causalidad ni el "porqué" de las cosas, a menos que se diseñen arquitecturas específicas para inferencia causal.
```

### 14 — Flujo de desarrollo: Reglas vs Datos

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["metodologia"]

respuesta_orden: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]
tipo: "ordenar"
opciones_explicitas: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]

enunciado: "Ordena los pasos típicos en el desarrollo de un Sistema Experto (basado en reglas) de forma lógica:"

explicacion: |
  En el enfoque basado en reglas, primero se extrae el conocimiento del experto (reglas), luego se traduce a código y finalmente se valida la lógica.
```

### 15 — El sesgo en el aprendizaje

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "avanzado"
  tags: ["sesgo", "datos"]

variables:
  idx: uno_de([0, 1])
  escenario: [["Un sistema de reglas tiene un error porque el programador olvidó una condición.", "error_programador"], ["Un sistema de aprendizaje tiene un error porque los datos de entrenamiento son parciales.", "error_datos"]]

respuesta: "error_datos"
tipo: "mc"
opciones_explicitas: ["error_programador", "error_datos"]

enunciado: "En el escenario {escenario[idx][0]}, el problema principal es un: ___"

explicacion: |
  Si el sistema es de reglas, el error es de diseño/lógica humana. Si el sistema es de aprendizaje, el error suele provenir de la calidad o representatividad de los datos (sesgo).
```

### 16 — Sistemas basados en reglas vs Aprendizaje

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "logica", "aprendizaje_automatico"]

respuesta: "aprendizaje automático"
tipo: completar
respuestas_validas:
  - "aprendizaje automático"

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ permite que el sistema descubra patrones directamente desde los datos."

explicacion: |
  En la IA tradicional (sistemas expertos), la lógica es explícita y programada por humanos. En el Machine Learning, la lógica se infiere a partir de la observación de datos.
```

### 17 — Característica del aprendizaje supervisado

```
metadata:
  materia: "informatica"
  tema: "aprendizaje_supervisado"
  nivel: "intermedio"
  tags: ["ia", "supervisado", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["clasificar_imágenes", "etiquetadas"], ["predecir_precios", "numéricas"]]

respuesta: "etiquetadas"
tipo: mc
opciones_explicitas: ["etiquetadas", "no estructuradas", "aleatorias", "puramente sintácticas"]

enunciado: "En un escenario de {escenarios[escenario_idx][0]}, el modelo requiere que los datos de entrenamiento estén {escenarios[escenario_idx][1]} para aprender la relación entre la entrada y la salida."

explicacion: |
  El aprendizaje supervisado se distingue de otros por el uso de un conjunto de datos donde la respuesta correcta (etiqueta) ya es conocida.
```

### 18 — Capacidad de generalización

```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["ia", "generalizacion", "overfitting"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema basado en reglas es capaz de manejar situaciones que no fueron explícitamente programadas mediante una regla 'si-entonces', a diferencia de un modelo de aprendizaje que puede generalizar patrones nuevos."

explicacion: |
  Falso. Un sistema de reglas es rígido: si no existe una regla para un caso específico, el sistema no puede decidir. El aprendizaje busca la generalización para manejar datos no vistos.
```

### 19 — Flujo de desarrollo en IA moderna

```
metadata:
  materia: "informatica"
  tema: "flujo_desarrollo_ia"
  nivel: "intermedio"
  tags: ["ia", "workflow", "datos"]

respuesta_orden: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]

enunciado: "Ordene las etapas típicas del ciclo de vida de un proyecto de aprendizaje automático, desde la obtención de información hasta la validación del modelo."

explicacion: |
  A diferencia del desarrollo de software tradicional donde el centro es el código, en IA el flujo comienza con la gestión de datos y termina validando la capacidad de predicción.
```

### 20 — Diferencia en la fuente de conocimiento

```
metadata:
  materia: "informatica"
  tema: "fuente_conocimiento"
  nivel: "basico"
  tags: ["ia", "conocimiento", "datos"]

respuesta: "datos"
tipo: mc
opciones_explicitas: ["conocimiento experto", "datos", "reglas lógicas", "hardware"]

enunciado: "En la IA clásica, el conocimiento proviene de la codificación de la experiencia humana; en la IA moderna basada en aprendizaje, el conocimiento se extrae de los ___."

explicacion: |
  La transición fundamental es pasar de la "codificación de reglas" (conocimiento manual) a la "extracción de patrones" (conocimiento derivado de datos).
```

### 21 — Evolución de paradigmas en IA

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos", "aprendizaje"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un sistema de diagnóstico médico basado en un árbol de decisión con reglas 'SI fiebre Y tos ENTONCES gripe'", "Basado en reglas explícitas"], ["Un sistema de reconocimiento de imágenes que identifica gatos tras ver 10.000 fotos de gatos", "Aprendizaje basado en datos"]]

enunciado: "Identifica si el siguiente escenario representa un sistema basado en reglas explícitas o un sistema que aprende de datos: {datos[escenario_idx][0]}"

opciones_explicitas: ["Basado en reglas explícitas", "Aprendizaje basado en datos"]
respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  Los sistemas basados en reglas dependen de la lógica programada manualmente por expertos (IF-THEN), mientras que el aprendizaje automático (Machine Learning) extrae patrones directamente de los datos.
```

### 22 — El rol de los datos en el Machine Learning

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["machine_learning", "datos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un modelo de detección de fraude que analiza millones de transacciones para encontrar anomalías."], ["Un chatbot que responde preguntas siguiendo un guion predefinido de 'si el usuario dice X, responde Y'."]]
  respuestas: [["Aprendizaje basado en datos", "Basado en reglas explícitas"], ["Basado en reglas explícitas", "Aprendizaje basado en datos"]]

enunciado: "En el caso: {casos[caso_idx][0]}, el paradigma predominante es ___."

respuestas_validas:
  - casos[caso_idx][0]
  - ""
respuesta: respuestas[caso_idx][0]
tipo: completar

explicacion: |
  En el primer caso, el sistema descubre la estructura de los datos (aprendizaje), mientras que en el segundo, la estructura ya está definida por el programador (reglas).
```

### 23 — Capacidad de generalización

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "avanzado"
  tags: ["generalizacion", "ia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un sistema de reglas que no reconoce un nuevo tipo de spam porque la palabra clave no está en su lista.", "Un modelo de IA que, al ver un objeto nunca visto, estima su categoría basándose en su similitud con datos previos."], ["Un sistema de reglas que es muy preciso en su dominio pero rígido.", "Un sistema de aprendizaje que puede generalizar ante datos nuevos."]]

enunciado: "Analiza la situación: {escenarios[escenario_idx][0]}. ¿Es esta una característica típica de un sistema que aprende de datos?"

respuesta: escenarios[escenario_idx][1] == "Un sistema de aprendizaje que puede generalizar ante datos nuevos."
tipo: completar
explicacion: |
  La generalización es la capacidad de un modelo de aprendizaje para aplicar lo aprendido a datos no vistos durante el entrenamiento, algo que los sistemas de reglas puras no pueden hacer sin intervención humana.
```

### 24 — Flujo de desarrollo en IA moderna

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "datos"]

enunciado: "Ordena los pasos típicos para desarrollar un sistema de aprendizaje automático (Machine Learning):"

opciones_explicitas: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
respuesta_orden: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
tipo: ordenar

explicacion: |
  A diferencia de los sistemas basados en reglas donde el paso principal es el "diseño de la lógica", en ML el flujo gira en torno a la gestión de datos y la optimización del modelo.
```

### 25 — Requisito fundamental del aprendizaje

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["datos", "requisitos"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un algoritmo de visión artificial sin acceso a imágenes previas."], ["Un algoritmo de recomendación de música sin historial de reproducciones del usuario."]]
  resultado: ["No puede aprender", "No puede aprender"]

enunciado: "Si tenemos el siguiente escenario: {ejemplos[ejemplo_idx][0]}, el sistema ___."

respuestas_validas:
  - "No puede aprender"
  - "No puede aprender"
respuesta: resultado[ejemplo_idx]
tipo: completar

explicacion: |
  El aprendizaje automático requiere obligatoriamente de datos para identificar patrones; sin datos, el sistema no tiene materia prima para "aprender".
```
