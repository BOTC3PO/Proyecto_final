### 1 — Identificación de Sesgo en Noticias
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "noticias", "critica"]

variables:
  escenario: uno_de([["Un titular dice: 'Científicos confirman que el café es la cura de todo'", "Sesgo de generalización"], ["Un titular dice: 'El 90% de la gente odia esta nueva ley'", "Sesgo de generalización"], ["Un titular dice: 'Solo los que saben de política entenderán esto'", "Sesgo de exclusión"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Sesgo de generalización", "Sesgo de exclusión", "Sesgo de confirmación", "Sesgo de autoridad"]

enunciado: "Analiza el siguiente titular: '{escenario[idx][0]}'. ¿Qué tipo de sesgo presenta?"

explicacion: |
  El titular utiliza una afirmación extrema o excluyente para manipular la percepción del lector, lo cual es una característica del sesgo informativo.
```

### 2 — Concepto de Deepfakes
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "basico"
  tags: ["ia", "deepfakes", "video"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'deepfake' es un contenido audiovisual (video o audio) creado o manipulado mediante inteligencia artificial para que parezca que una persona dice o hace algo que nunca ocurrió."

explicacion: |
  Correcto. Los deepfakes utilizan redes neuronales para sustituir rostros o clonar voces de manera altamente realista.
```

### 3 — Análisis de Evidencia en Imágenes
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "avanzado"
  tags: ["verificacion", "ia", "pistas"]

variables:
  pista_falsa: uno_de(["parpadeo poco natural", "sombras inconsistentes", "bordes difusos en el cuello"])
  idx: uno_de([0, 1, 2])

respuesta: "pista_falsa"
tipo: completar
respuestas_validas: ["parpadeo poco natural", "sombras inconsistentes", "bordes difusos en el cuello"]

enunciado: "Al verificar un video sospechoso de ser un deepfake, un detalle técnico común que delata la manipulación es el ___."

explicacion: |
  {pista_falsa} es una de las inconsistencias visuales más comunes producidas por algoritmos de generación de video actuales.
```

### 4 — Pasos para Verificar una Noticia
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_proceso"
  nivel: "intermedio"
  tags: ["verificacion", "metodo", "pasos"]

respuesta: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor", "Analizar si el contenido apela a emociones extremas"]
tipo: ordenar
opciones_explicitas: ["Buscar la fuente original", "Contrastar con otros medios", "Verificar la fecha y el autor", "Analizar si el contenido apela a emociones extremas"]

enunciado: "Ordena los pasos lógicos para verificar la veracidad de una noticia viral en redes sociales:"

explicacion: |
  La verificación efectiva requiere ir desde la fuente primaria hacia el análisis crítico del tono y la actualidad de la información.
```

### 5 — Identificación de Manipulación Visual
```
metadata:
  materia: "ciudadania_digital"
  tema: "detectar_desinformacion_deepfakes"
  nivel: "intermedio"
  tags: ["ia", "audio", "clonacion"]

variables:
  caso: uno_de([["Un audio de un político diciendo algo escandaloso", "audio"], ["Un video de un famoso recomendando una estafa", "video"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["audio", "video", "texto", "imagen"]

enunciado: "Si se utiliza IA para clonar la voz de un líder mundial con el fin de desinformar, estamos ante un deepfake de tipo {caso[idx][1]}."

explicacion: |
  El término deepfake se aplica tanto a la manipulación de imagen (video) como de la voz (audio).
```