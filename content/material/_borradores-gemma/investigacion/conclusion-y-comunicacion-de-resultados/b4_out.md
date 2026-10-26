### 1 — Conclusión vs. Discusión
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["metodologia", "escritura_cientifica"]

respuesta: "discusión"
tipo: mc
opciones_explicitas: ["conclusión", "discusión", "resumen", "introducción"]

enunciado: "Mientras que la conclusión se centra en sintetizar los hallazgos principales y responder al objetivo, la ___ se enfoca en interpretar los resultados en el contexto de la literatura existente y las implicaciones teóricas."

explicacion: |
  La discusión es la sección donde se comparan los resultados propios con otros estudios, mientras que la conclusión es un cierre sintético de lo aprendido.
```

### 2 — Diferencia entre Resumen y Conclusión
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["comunicacion", "estructura"]

variables:
  es_resumen_en_conclusio: falso

respuesta: es_resumen_en_conclusio
tipo: vf

enunciado: "En un artículo científico, la sección de conclusiones debe ser una mera repetición del texto del resumen (abstract) sin aportar una síntesis interpretativa de los hallazgos."

explicacion: |
  Falso. El resumen es una síntesis de todo el trabajo (incluyendo métodos y resultados), mientras que la conclusión debe cerrar el argumento de la investigación y proyectar futuras líneas de estudio.
```

### 3 — El rol de la Comunicación de Resultados
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "intermedio"
  tags: ["difusion", "etica"]

respuesta: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]
tipo: ordenar

opciones_explicitas: ["publicar_en_revistas_con_revision_pares", "publicar_en_redes_sociales", "guardar_en_un_archivo_personal"]

enunciado: "Ordene los niveles de formalidad y validación científica en la comunicación de resultados, desde el más riguroso/validado hasta el menos formal."

explicacion: |
  La revisión por pares (peer-review) es el estándar de oro de la comunicación científica, asegurando la calidad y veracidad de los hallazgos antes de su difusión masiva.
```

### 4 — Conclusión vs. Hipótesis
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["se_confirma_o_rechaza", "se_plantea_al_inicio"]
tipo: completar
respuestas_validas: ["se_confirma_o_rechaza", "se_plantea_al_inicio"]

enunciado: "Si la hipótesis es la proposición que se intenta verificar al inicio de la investigación, la conclusión es el espacio donde la hipótesis ___."

explicacion: |
  La conclusión debe retomar la hipótesis original para determinar si la evidencia recolectada la respalda o la refuta.
```

### 5 — Elementos de una Conclusión Efectiva
```
metadata:
  materia: "investigacion"
  tema: "conclusion_y_comunicacion_de_resultados"
  nivel: "avanzado"
  tags: ["escritura_cientifica", "calidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["hallazgos_limitados", "relevancia_alta"], ["hallazgos_contradictorios", "necesidad_de_nuevos_estudios"]]
  respuestas: ["relevancia_alta", "necesidad_de_nuevos_estudios"]

respuesta: respuestas[caso_idx]
tipo: mc
opciones_explicitas: ["relevancia_alta", "necesidad_de_nuevos_estudios", "repetir_metodologia", "ignorar_errores"]

enunciado: "Si un investigador obtiene {escenarios[caso_idx][0]}, la conclusión debe enfocarse principalmente en la {escenarios[caso_idx][1]}."

explicacion: |
  Una conclusión debe ser honesta con las limitaciones del estudio. Si los resultados son limitados o contradictorios, la comunicación científica exige señalar la necesidad de nuevas investigaciones para resolver la ambigüedad.
```