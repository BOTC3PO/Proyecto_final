### 1 — El cierre del informe
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["conclusiones", "informe"]

variables:
  escenario: uno_de([["Los datos muestran una correlación positiva entre el uso de fertilizante y el crecimiento", "Se confirma la hipótesis inicial"], ["Los resultados son inconsistentes y no permiten validar la hipótesis", "Se sugiere ampliar la muestra"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Se confirma la hipótesis inicial", "Se sugiere ampliar la muestra", "Se deben ignorar los datos negativos", "El estudio es inválido"]

enunciado: "Un investigador llega a la siguiente situación: {escenario[idx][0]}. ¿Cuál es la acción o conclusión más adecuada para el cierre de su informe?"

explicacion: |
  Una conclusión debe ser coherente con los hallazgos. Si los datos apoyan la hipótesis, se confirma; si no, se debe proponer la necesidad de más investigación o admitir la falta de evidencia.
```

### 2 — Veracidad de la comunicación
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["etica", "comunicacion"]

respuesta: verdadero
tipo: vf

enunciado: "En la comunicación de resultados, es éticamente aceptable omitir datos que contradicen la hipótesis principal para asegurar que la conclusión sea contundente."

explicacion: |
  Falso. La integridad científica exige reportar todos los hallazgos, incluso aquellos que contradicen la hipótesis, para evitar el sesgo de publicación.
```

### 3 — Estructura del reporte final
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]
tipo: ordenar
opciones_explicitas: ["Introducción", "Metodología", "Resultados", "Discusión y Conclusión"]

enunciado: "Ordene los elementos de un artículo científico siguiendo el orden lógico estándar de comunicación de resultados."

explicacion: |
  El orden estándar permite que el lector comprenda primero el contexto (introducción), cómo se hizo (metodología), qué se encontró (resultados) y qué significan esos hallazgos (discusión/conclusión).
```

### 4 — Elementos de la discusión
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["discusion", "interpretacion"]

variables:
  caso: uno_de([["Resultados significativos en el grupo A", "Resultados no significativos"], ["Efecto observado en la variable X", "Efecto nulo en la variable X"]])
  idx: uno_de([0, 1])

respuesta: "interpretar"
tipo: completar
respuestas_validas: ["interpretar", "repetir", "ignorar"]

enunciado: "En la sección de discusión de un informe, el investigador debe ___ los resultados obtenidos en relación con el marco teórico y los objetivos planteados."

explicacion: |
  La discusión no es solo repetir los resultados, sino interpretarlos, compararlos con otros autores y explicar su relevancia científica.
```

### 5 — El canal de comunicación
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["difusion", "canales"]

variables:
  canal: uno_de([["un congreso científico", "una red social personal"], ["una revista indexada", "un blog de opinión"]])
  idx: uno_de([0, 1])

respuesta: canal[idx][0]
tipo: mc
opciones_explicitas: ["un congreso científico", "una red social personal", "una revista indexada", "un blog de opinión"]

enunciado: "Si el objetivo es la difusión académica formal de los resultados de una investigación, el medio más apropiado es {canal[idx][1]}."

explicacion: |
  Para la comunicación científica formal, se requieren canales con revisión por pares (peer-review) como revistas indexadas o presentaciones en congresos especializados.
```