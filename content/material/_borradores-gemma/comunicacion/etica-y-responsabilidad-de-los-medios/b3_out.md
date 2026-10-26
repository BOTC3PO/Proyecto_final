### 1 — El sesgo de confirmación en la información
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["etica", "sesgo", "verdad"]

tipo: mc
opciones_explicitas: ["Presentar solo hechos que apoyen una postura", "Verificar la identidad de todas las fuentes", "Publicar información sin contrastar para ser el primero", "Ignorar la opinión de expertos para ser neutral"]

enunciado: "Un error ético frecuente en el periodismo es el sesgo de confirmación. Este ocurre cuando un medio..."

respuesta: "Presentar solo hechos que apoyen una postura"

explicacion: |
  El sesgo de confirmación implica seleccionar información que refuerce una creencia previa, omitiendo datos que la contradigan, lo cual vulnera el deber de informar con veracidad y objetividad.
```

### 2 — Veracidad vs. Inmediatez
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["inmediatez", "veracidad", "responsabilidad"]

tipo: vf

enunciado: "La obligación de ser el primero en publicar una noticia (inmediatez) es superior a la obligación de verificar la veracidad de la misma en el ejercicio del periodismo ético."

respuesta: falso

explicacion: |
  La ética periodística establece que la veracidad es un pilar fundamental. Priorizar la velocidad sobre la verificación puede propagar noticias falsas (fake news) y dañar la credibilidad del medio y la sociedad.
```

### 3 — El proceso de verificación de fuentes
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["fuentes", "verificacion", "procedimiento"]

variables:
  pasos_ordenar: [
    ["Recibir la información o pista", "Búsqueda de evidencia y contraste"],
    ["Contrastar con al menos dos fuentes independientes", "Publicar la noticia"],
    ["Verificar la credibilidad de la fuente original", "Redactar el informe final"]
  ]
  idx: uno_de([0,1,2])

tipo: ordenar
opciones_explicitas: ["Recibir la información o pista", "Verificar la credibilidad de la fuente original", "Búsqueda de evidencia y contraste", "Contrastar con al menos dos fuentes independientes", "Redactar el informe final", "Publicar la noticia"]

respuesta: ["Recibir la información o pista", "Verificar la credibilidad de la fuente original", "Búsqueda de evidencia y contraste", "Contrastar con al menos dos fuentes independientes", "Redactar el informe final", "Publicar la noticia"]

enunciado: "Para cumplir con la responsabilidad de informar con verdad, un periodista debe seguir un proceso riguroso de verificación. Ordene los pasos lógicos de este proceso:"

explicacion: |
  Un proceso ético requiere primero identificar la fuente, luego buscar evidencia para respaldar lo dicho, contrastar con otras visiones, redactar con precisión y, finalmente, publicar.
```

### 4 — La distinción entre opinión e información
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["opinion", "informacion", "confusion"]

tipo: completar
respuestas_validas: ["opinión", "hecho"]

enunciado: "Una confusión común en los medios es mezclar el ___ (dato objetivo y verificable) con la ___ (juicio de valor del periodista), lo cual desinforma al público sobre la naturaleza de la noticia."

respuesta: "hecho"

explicacion: |
  La distinción clara entre información (hechos) y opinión (interpretaciones) es vital para que el receptor pueda formar su propio criterio sin ser manipulado por el juicio del emisor.
```

### 5 — El derecho a la rectificación
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["rectificacion", "derecho", "etica"]

tipo: mc
opciones_explicitas: ["Es una opción opcional si la noticia ya fue leída", "Es una obligación ética y legal cuando hay errores", "Solo aplica si la persona afectada es una figura pública", "Solo se aplica si el error fue intencionado"]

enunciado: "Cuando un medio de comunicación comete un error en la información publicada, su responsabilidad ética le exige ejercer el derecho de..."

respuesta: "Es una obligación ética y legal cuando hay errores"

explicacion: |
  La responsabilidad social de los medios implica corregir errores de manera visible y con la misma relevancia que la noticia original, garantizando el derecho de la audiencia a la información veraz.
```