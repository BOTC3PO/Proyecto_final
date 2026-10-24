### 1 — El sesgo de selección en encuestas
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["sesgo", "muestreo", "validez"]

enunciado: "Un investigador desea conocer la opinión de los estudiantes de una universidad sobre la calidad del buffet. Para ello, decide realizar la encuesta únicamente a las personas que están haciendo fila en la cafetería a las 12:00 PM. ¿Este método de recolección presenta un sesgo de selección?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  Es un sesgo de selección porque la muestra solo incluye a quienes consumen en la cafetería a esa hora específica, excluyendo a quienes traen su propia comida, a quienes almuerzan en otros horarios o a quienes no usan la cafetería, invalidando la representatividad de la muestra.
```

### 2 — El proceso de validación de instrumentos
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["metodologia", "validez", "confiabilidad"]

variables:
  pasos_ordenados: [
    ["Diseñar el instrumento de recolección", "1"],
    ["Realizar una prueba piloto con una muestra pequeña", "2"],
    ["Analizar la consistencia interna y confiabilidad", "3"],
    ["Aplicar el instrumento a la muestra definitiva", "4"]
  ]

respuesta: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]
tipo: "ordenar"
opciones_explicitas: ["Diseñar el instrumento de recolección", "Realizar una prueba piloto con una muestra pequeña", "Analizar la consistencia interna y confiabilidad", "Aplicar el instrumento a la muestra definitiva"]

explicacion: |
  Para garantizar la confiabilidad, la secuencia lógica debe comenzar con el diseño, seguido de una validación mediante prueba piloto, el análisis estadístico de dicha prueba y, finalmente, la aplicación masiva.
```

### 3 — El dilema de la observación participante
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["observacion", "etnografia", "metodologia"]

enunciado: "En una investigación etnográfica, si el investigador se involucra profundamente en la cultura que estudia, puede perder la objetividad debido al 'efecto de reactividad'. ¿Cuál es el término técnico para cuando los sujetos cambian su comportamiento al saber que son observados?"

opciones_explicitas: ["Efecto Hawthorne", "Sesgo de confirmación", "Error de medición", "Falsa dicotomía"]
respuesta: "Efecto Hawthorne"
tipo: "mc"

explicacion: |
  El Efecto Hawthorne ocurre cuando los individuos modifican un aspecto de su comportamiento en respuesta a su conciencia de que están siendo observados, lo cual es un desafío crítico en la observación directa.
```

### 4 — Completar la definición de Triangulación
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "avanzado"
  tags: ["triangulacion", "validez", "metodologia"]

enunciado: "Para aumentar la validez de una investigación, el investigador decide utilizar entrevistas, encuestas y observación para estudiar el mismo fenómeno. A este proceso de utilizar múltiples fuentes o métodos se le denomina ___."

respuestas_validas: ["triangulación"]
respuesta: "triangulación"
tipo: "completar"

explicacion: |
  La triangulación permite contrastar diferentes tipos de datos para reducir el sesgo de un único método y fortalecer la consistencia de los hallazgos.
```

### 5 — Análisis de consistencia en datos cualitativos
```
metadata:
  materia: "investigacion"
  tema: "recoleccion_de_datos"
  nivel: "intermedio"
  tags: ["cualitativa", "codificacion", "fiabilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un investigador analiza 10 entrevistas y llega a conclusiones basadas solo en sus propias opiniones sin contrastar con el texto.", "falso"],
    ["Dos investigadores analizan las mismas entrevistas de forma independiente y llegan a las mismas categorías temáticas.", "verdadero"]
  ]

enunciado: "Se presenta el siguiente escenario de investigación: {escenarios[escenario_idx][0]}. ¿Es este proceso confiable para la investigación científica? (Respuesta: verdadero/falso)"

respuesta: "{escenarios[escenario_idx][1]}"
tipo: "vf"

explicacion: |
  En el primer caso (falso), el investigador incurre en subjetividad excesiva. En el segundo caso (verdadero), se cumple con la fiabilidad inter-jueces, esencial en la investigación cualitativa.
```