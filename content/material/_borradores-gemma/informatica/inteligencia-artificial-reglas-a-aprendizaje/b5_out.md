### 1 — Evolución de paradigmas en IA
```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos", "aprendizaje"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un sistema de diagnóstico médico basado en un árbol de decisión con reglas 'SI fiebre Y tos ENTONCES gripe'", "Un sistema de reconocimiento de imágenes que identifica gatos tras ver 10.000 fotos de gatos"], ["Un sistema de filtrado de spam basado en palabras prohibidas como 'oferta' o 'gratis'", "Un modelo de lenguaje que predice la siguiente palabra basándose en patrones estadísticos de texto"]]

enunciado: "Identifica si el siguiente escenario representa un sistema basado en reglas explícitas o un sistema que aprende de datos: {datos[escenario_idx][0]}"

opciones_explicitas: ["Basado en reglas explícitas", "Aprendizaje basado en datos"]
respuesta: datos[escenario_idx][1]
tipo: mc

explicacion: |
  Los sistemas basados en reglas dependen de la lógica programada manualmente por expertos (IF-THEN), mientras que el aprendizaje automático (Machine Learning) extrae patrones directamente de los datos.
```

### 2 — El rol de los datos en el Machine Learning
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

respuestas_validas: [casos[caso_idx][0], ""]
respuesta: respuestas[caso_idx][0]
tipo: completar

explicacion: |
  En el primer caso, el sistema descubre la estructura de los datos (aprendizaje), mientras que en el segundo, la estructura ya está definida por el programador (reglas).
```

### 3 — Capacidad de generalización
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
tipo: vf

explicacion: |
  La generalización es la capacidad de un modelo de aprendizaje para aplicar lo aprendido a datos no vistos durante el entrenamiento, algo que los sistemas de reglas puras no pueden hacer sin intervención humana.
```

### 4 — Flujo de desarrollo en IA moderna
```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "datos"]

enunciado: "Ordena los pasos típicos para desarrollar un sistema de aprendizaje automático (Machine Learning):"

opciones_explicitas: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
respuesta: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
tipo: ordenar

explicacion: |
  A diferencia de los sistemas basados en reglas donde el paso principal es el "diseño de la lógica", en ML el flujo gira en torno a la gestión de datos y la optimización del modelo.
```

### 5 — Requisito fundamental del aprendizaje
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

respuestas_validas: ["No puede aprender", "No puede aprender"]
respuesta: resultado[ejemplo_idx]
tipo: completar

explicacion: |
  El aprendizaje automático requiere obligatoriamente de datos para identificar patrones; sin datos, el sistema no tiene materia prima para "aprender".
```