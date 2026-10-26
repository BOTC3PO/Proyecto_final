### 1 — Definición de sesgo algorítmico
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["etica", "ia", "sesgo"]

tipo: mc
opciones_explicitas: ["La reproducción de prejuicios humanos en los resultados de un modelo", "La capacidad de un modelo para procesar datos a gran velocidad", "El uso de algoritmos para optimizar la búsqueda de información", "La capacidad de un modelo para aprender sin supervisión humana"]

enunciado: "El sesgo algorítmico ocurre cuando un sistema de inteligencia artificial presenta resultados sistemáticamente prejuiciosos. Esto sucede principalmente porque el modelo ___."

respuesta: "La reproducción de prejuicios humanos en los resultados de un modelo"

explicacion: |
  El sesgo algorítmico surge cuando los datos de entrenamiento contienen prejuicios históricos o sociales, o cuando el diseño del algoritmo favorece ciertas categorías sobre otras, perpetuando la discriminación.
```

### 2 — Privacidad en el entrenamiento
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "datos", "entrenamiento"]

tipo: vf

enunciado: "El uso de datos personales sensibles para entrenar modelos de IA sin el consentimiento explícito de los individuos constituye una violación de la privacidad de los datos."

respuesta: verdadero

explicacion: |
  La privacidad es un pilar ético fundamental. Entrenar modelos con datos que contienen información identificable sin asegurar el anonimato o el consentimiento puede vulnerar derechos fundamentales.
```

### 3 — Componentes del sesgo
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["datos", "sesgo", "entrenamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["El conjunto de datos no representa la diversidad de la población real", "El diseño del algoritmo favorece erróneamente un resultado sobre otro"],
    ["Falta de diversidad en los datos de entrenamiento", "Sesgo de diseño o algorítmico"]
  ]

tipo: completar
respuestas_validas: ["Falta de diversidad en los datos de entrenamiento", "Sesgo de diseño o algorítmico"]

enunciado: "Si un modelo de reconocimiento facial falla sistemáticamente con personas de piel oscura porque el dataset era mayoritariamente de personas de piel clara, estamos ante un caso de: ___."

respuesta: escenario[idx][0]

explicacion: |
  Cuando el problema reside en que los datos no cubren todas las categorías de la población, se denomina sesgo de representación o falta de diversidad en los datos.
```

### 4 — Ciclo de vida de la ética en IA
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "intermedio"
  tags: ["proceso", "etica", "desarrollo"]

tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

enunciado: "Para mitigar sesgos y proteger la privacidad, se debe seguir un orden lógico en el ciclo de vida del desarrollo de IA. Ordena las siguientes etapas de forma correcta:"

respuesta: ["Recolección de datos", "Limpieza y auditoría de sesgos", "Entrenamiento del modelo", "Evaluación de impacto ético"]

explicacion: |
  Un proceso ético comienza con la recolección responsable, sigue con la auditoría para detectar sesgos en los datos antes de entrenar, continúa con el entrenamiento y culmina con una evaluación del impacto que el modelo tendrá en la sociedad.
```

### 5 — Concepto de anonimización
```
metadata:
  materia: "informatica"
  tema: "etica_de_la_ia_sesgo_privacidad"
  nivel: "basico"
  tags: ["privacidad", "anonimización", "datos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "La técnica de anonimización de datos garantiza que sea imposible, bajo cualquier circunstancia, volver a identificar a un individuo a partir de los datos utilizados para entrenar una IA."

respuesta: "Falso"

explicacion: |
  Aunque la anonimización es una medida de protección, existe el riesgo de 're-identificación' mediante ataques de vinculación de datos, por lo que no es una garantía absoluta de privacidad.
```