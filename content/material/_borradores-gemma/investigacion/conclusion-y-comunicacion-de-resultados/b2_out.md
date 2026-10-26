### 1 — La estructura de la conclusión
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["estructura", "conclusion"]

enunciado: "Al redactar la conclusión de un informe de investigación, el investigador debe retomar los objetivos planteados inicialmente para determinar si se cumplieron o no. Por lo tanto, una conclusión debe ser una síntesis de los hallazgos y no una repetición textual del resumen."

respuesta: verdadero
tipo: vf
```

### 2 — El proceso de revisión de manuscritos
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "revision"]

variables:
  escenario: uno_de([
    ["El investigador escribe el artículo y lo envía directamente a la revista sin revisión previa.", "error"],
    ["El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista.", "acierto"],
    ["El investigador publica los resultados en un blog personal sin pasar por revisión científica.", "error"]
  ])

enunciado: "En el proceso de comunicación científica, el paso que describe una práctica recomendada para mejorar la calidad del manuscrito antes de la sumisión formal es: {escenario[0]}"

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["El investigador escribe el artículo y lo envía directamente a la revista sin revisión previa.", "El investigador envía el artículo a un colega para una revisión por pares informal antes de la revista.", "El investigador publica los resultados en un blog personal sin pasar por revisión científica."]
```

### 3 — Pasos para la comunicación de resultados
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["proceso", "comunicacion"]

enunciado: "Para asegurar una comunicación efectiva de un nuevo descubrimiento científico, se deben seguir estos pasos en orden lógico:"

pasos:
  - "Redactar el manuscrito siguiendo las normas de la revista elegida."
  - "Realizar el análisis exhaustivo de los datos obtenidos."
  - "Enviar el manuscrito a la editorial para la revisión por pares."
  - "Presentar los resultados en un congreso para recibir feedback."

respuesta: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
tipo: ordenar
opciones_explicitas: ["Realizar el análisis exhaustivo de los datos obtenidos.", "Redactar el manuscrito siguiendo las normas de la revista elegida.", "Enviar el manuscrito a la editorial para la revisión por pares.", "Presentar los resultados en un congreso para recibir feedback."]
```

### 4 — El rol de las limitaciones
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["limitaciones", "etica"]

variables:
  caso: uno_de([
    ["Un estudio sobre un fármaco que no menciona que la muestra fue de solo 5 personas.", "incorrecto"],
    ["Un estudio que reconoce que el clima afectó la velocidad de reacción química.", "correcto"]
  ])

enunciado: "En la sección de discusión y conclusiones, un investigador debe declarar las limitaciones del estudio. Un ejemplo de una declaración de limitaciones adecuada es: {caso[0]}"

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Un estudio sobre un fármaco que no menciona que la muestra fue de solo 5 personas.", "Un estudio que reconoce que el clima afectó la velocidad de reacción química."]
```

### 5 — Completar el flujo de comunicación
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["terminologia", "completar"]

enunciado: "Cuando un artículo científico es aceptado y publicado, se convierte en parte del ___ científico, permitiendo que otros investigadores citen los hallazgos para construir nuevo conocimiento."

respuestas_validas: ["cuerpo", "conocimiento", "corpus"]
respuesta: "conocimiento"
tipo: completar
```