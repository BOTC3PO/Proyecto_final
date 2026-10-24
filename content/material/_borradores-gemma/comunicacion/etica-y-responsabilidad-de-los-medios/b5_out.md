### 1 — El dilema de la primicia
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["etica", "veracidad", "responsabilidad"]

variables:
  escenario: uno_de([["Se recibe un video de un supuesto acto de corrupción sin verificar la fuente", "publicar sin verificar"], ["Se tiene una noticia sobre un crimen que aún está en investigación", "esperar confirmación oficial"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["publicar sin verificar", "esperar confirmación oficial"]

enunciado: "Un medio de comunicación recibe información sensible de una fuente anónima. Según la ética periodística, ante el escenario: {escenario[idx][0]}, la acción responsable es ___."

explicacion: |
  La responsabilidad editorial exige verificar la veracidad de los hechos antes de su difusión para evitar la propagación de noticias falsas o daños irreparables.
```

### 2 — El sesgo en la información
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "basico"
  tags: ["objetividad", "sesgo"]

respuesta: falso
tipo: vf

enunciado: "La objetividad absoluta es un ideal que el periodismo busca alcanzar, pero la ética profesional exige que el periodista reconozca sus propios sesgos para minimizar su impacto en la información."

explicacion: |
  Aunque la objetividad total es imposible debido a la subjetividad humana, la ética reside en la honestidad, el rigor y el contraste de fuentes para acercarse a la verdad.
```

### 3 — Jerarquía de la responsabilidad
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["proceso", "verificacion"]

respuesta: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación"]
tipo: ordenar

opciones_explicitas: ["Contraste de fuentes", "Verificación de datos", "Contextualización", "Publicación"]

enunciado: "Para cumplir con el deber de informar con veracidad, un medio debe seguir un proceso riguroso. Ordene los siguientes pasos desde el inicio hasta la publicación de una noticia de alto impacto:"

explicacion: |
  El proceso ético requiere primero contrastar la información con diversas fuentes, verificar que los datos sean correctos, dar el contexto necesario para no desinformar y, finalmente, publicar.
```

### 4 — El derecho a la réplica
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "avanzado"
  tags: ["derechos", "etica"]

variables:
  caso: uno_de([["Un medio publica una acusación falsa contra un ciudadano", "otorgar el derecho a réplica"], ["Un medio comete un error en un titular", "rectificar el error"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["otorgar el derecho a réplica", "rectificar el error"]

enunciado: "Ante un error cometido por un medio o una acusación que afecta la reputación de un tercero, la obligación ética y legal es ___."

explicacion: |
  El derecho a la réplica y el deber de rectificación son pilares de la ética comunicacional para garantizar la dignidad de las personas frente a la información pública.
```

### 5 — Intereses comerciales vs. Interés público
```
metadata:
  materia: "comunicacion"
  tema: "etica_y_responsabilidad_de_los_medios"
  nivel: "intermedio"
  tags: ["independencia", "etica"]

variables:
  situacion: uno_de([["Un gran anunciante pide censurar una noticia negativa", "mantener la independencia editorial"], ["Un medio recibe un soborno para publicar una noticia falsa", "rechazar el beneficio económico"]])
  idx: uno_de([0, 1])

respuesta: situacion[idx][1]
tipo: mc
opciones_explicitas: ["mantener la independencia editorial", "rechazar el beneficio económico"]

enunciado: "Si un medio se enfrenta a la situación: {situacion[idx][0]}, su compromiso con la responsabilidad social le obliga a ___."

explicacion: |
  La independencia editorial es fundamental para que el medio sirva al interés público y no a intereses económicos particulares que distorsionen la realidad.
```