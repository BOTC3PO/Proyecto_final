### 1 — ¿La conclusión es un resumen?
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia", "conclusiones"]

respuesta: falso
tipo: vf

enunciado: "Una conclusión debe ser una mera repetición o resumen de los resultados obtenidos, sin aportar una síntesis interpretativa de los mismos."

explicacion: |
  La conclusión no es un resumen. Mientras que el resumen describe qué se hizo y qué se encontró, la conclusión debe interpretar los hallazgos, responder a la pregunta de investigación y discutir las implicancias de los resultados.
```

### 2 — El orden de una comunicación científica
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["comunicacion", "estructura"]

variables:
  orden_correcto: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión"]
  idx: uno_de([0,1,2,3,4,5])

respuesta: orden_correcto
tipo: ordenar

opciones_explicitas: ["Resumen", "Introducción", "Metodología", "Resultados", "Discusión", "Conclusión", "Bibliografía", "Anexos"]

enunciado: "Ordene los elementos de un artículo científico estándar siguiendo la estructura lógica de publicación (IMRyD extendido)."

explicacion: |
  La estructura estándar sigue un flujo lógico: desde la visión general (Resumen), el contexto (Introducción), el proceso (Metodología), la evidencia (Resultados), la interpretación (Discusión) y el cierre (Conclusión).
```

### 3 — El error de la generalización excesiva
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["errores", "validez"]

respuesta: "generalización excesiva"
tipo: completar
respuestas_validas: ["generalización excesiva", "sesgo de confirmación", "error de muestreo"]

enunciado: "Cuando un investigador extiende sus conclusiones más allá de los límites de su muestra o de los datos recolectados, está incurriendo en una ___."

explicacion: |
  La validez externa de una investigación depende de que las conclusiones no pretendan aplicar leyes universales si la muestra es limitada o no representativa del universo estudiado.
```

### 4 — ¿Qué debe evitarse en la discusión?
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["discusion", "errores"]

respuesta: "Presentar nuevos datos"
tipo: mc
opciones_explicitas: ["Presentar nuevos datos", "Comparar con autores previos", "Reconocer limitaciones", "Sugerir futuras líneas de investigación"]

enunciado: "Durante la sección de Discusión de un informe o artículo, ¿cuál de las siguientes acciones es un error metodológico grave?"

explicacion: |
  La sección de Discusión es para interpretar resultados ya presentados. Si se introducen datos nuevos que no fueron expuestos en la sección de Resultados, se rompe la estructura lógica y la transparencia del proceso.
```

### 5 — Comunicación y sesgo de confirmación
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["etica", "sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Al comunicar resultados, el investigador tiene la obligación ética de reportar tanto los hallazgos que apoyan su hipótesis como aquellos que la contradicen."

explicacion: |
  Omitir resultados que contradicen la hipótesis inicial es una forma de sesgo de publicación que distorsiona el conocimiento científico. La integridad requiere reportar toda la evidencia relevante.
```