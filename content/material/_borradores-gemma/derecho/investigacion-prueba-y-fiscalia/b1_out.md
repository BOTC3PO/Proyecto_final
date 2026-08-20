### 1 — El rol del Fiscal
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["fiscalia", "rol_fiscal"]

respuesta: "dirigir"
tipo: completar
respuestas_validas: ["dirigir", "dirigir la investigación"]

enunciado: "En el proceso penal, el Fiscal es el encargado de ___ la investigación para determinar la existencia de un delito y la responsabilidad de los autores."

explicacion: |
  El Fiscal tiene la carga de la prueba y la función de dirigir la investigación penal para asegurar que se recolecten los elementos necesarios para el juicio.
```

### 2 — Naturaleza de la prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "prueba"]

variables:
  es_falso: uno_de([verdadero, falso])

respuesta: es_falso
tipo: vf

enunciado: "La evidencia recolectada durante la investigación es, por definición, una prueba por sí misma, independientemente de su valoración judicial."

explicacion: |
  La evidencia es un elemento material o digital hallado; la 'prueba' es el elemento que ha sido incorporado legalmente al proceso y ha sido valorado por el juez.
```

### 3 — Elementos de la investigación
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "basico"
  tags: ["evidencia", "elementos"]

respuesta: "evidencia material"
tipo: mc
opciones_explicitas: ["testimonio", "evidencia material", "opinión del fiscal", "presunción"]

enunciado: "Un objeto encontrado en la escena del crimen que puede ser analizado para establecer la veracidad de un hecho se denomina:"

explicacion: |
  La evidencia material es todo objeto físico o elemento tangible que puede ser sometido a pericia para aportar conocimiento al proceso.
```

### 4 — Etapas de la recolección de evidencia
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["cadena_de_custodia", "procedimiento"]

respuesta: ["hallazgo", "recolección", "preservación", "traslado"]
tipo: ordenar

opciones_explicitas: ["hallazgo", "recolección", "preservación", "traslado", "anulación"]

enunciado: "Ordene cronológicamente los pasos lógicos para asegurar la integridad de un elemento de convicción desde que se encuentra en la escena:"

explicacion: |
  Para mantener la cadena de custodia, se debe seguir un orden estricto: primero se identifica el hallazgo, luego se recolecta, se preserva su estado y finalmente se traslada bajo protocolos.
```

### 5 — Carga de la prueba
```
metadata:
  materia: "derecho"
  tema: "investigacion_prueba_y_fiscalia"
  nivel: "intermedio"
  tags: ["carga_de_la_prueba", "fiscalia"]

respuesta: "presunción de inocencia"
tipo: mc
opciones_explicitas: ["presunción de culpabilidad", "presunción de inocencia", "inversión de la carga", "verdad real"]

enunciado: "El principio que obliga al Fiscal a presentar pruebas suficientes para desvirtuar la ___ es la base del sistema acusatorio."

explicacion: |
  La carga de la prueba recae en la fiscalía porque el imputado goza de la presunción de inocencia hasta que se demuestre lo contrario.
```