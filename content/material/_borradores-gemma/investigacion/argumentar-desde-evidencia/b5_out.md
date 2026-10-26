### 1 — Defensa de la hipótesis climática
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["argumentacion", "evidencia", "ciencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["el aumento de la temperatura global fue de 1.5°C", "los registros satelitales confirman el aumento"], ["la concentración de CO2 subió 50ppm", "los núcleos de hielo muestran niveles récord"]]
  objecion: [["la variabilidad natural", "el ciclo solar"], ["la falta de mediciones precisas", "el error de los sensores"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["datos de registros satelitales", "datos de núcleos de hielo", "observaciones anecdóticas", "teorías sin sustento"]

enunciado: "Un investigador afirma que el calentamiento es antropogénico. Un crítico objeta que {objecion[escenario_idx]}. Para defender su conclusión, el investigador debe presentar como evidencia: ___"

explicacion: |
  Para refutar una objeción sobre la variabilidad natural o errores de medición, se requiere evidencia empírica directa (registros o núcleos de hielo) que descarte la causa propuesta por el crítico.
```

### 2 — Validación de resultados experimentales
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["metodologia", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["El grupo control no mostró cambios significativos", "El grupo experimental redujo la carga viral en un 90%"], ["La muestra fue insuficiente para generalizar", "El fármaco mostró una eficacia del 85% en ensayos clínicos"]]
  objecion: ["la varianza es demasiado alta", "el efecto es producto del azar"]

respuesta: verdadero
tipo: vf

enunciado: "En un ensayo clínico, si el grupo experimental muestra una reducción del 90% en la carga viral frente a un grupo control estable, y la desviación estándar es mínima, ¿es válido argumentar que el fármaco es efectivo para refutar la objecion de que {objecion[caso_idx]}?"

explicacion: |
  La evidencia estadística (reducción significativa y baja varianza) es la base para defender una conclusión científica frente a críticas sobre la aleatoriedad.
```

### 3 — Estructura del argumento científico
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["logica", "argumentacion"]

variables:
  orden_idx: uno_de([0, 1])
  pasos_correctos: [["Observación de datos", "Formulación de hipótesis", "Contraste con evidencia", "Conclusión"], ["Recolección de muestra", "Análisis estadístico", "Revisión de pares", "Publicación de resultados"]]

respuesta: pasos_correctos[orden_idx]
tipo: ordenar
opciones_explicitas: ["Observación de datos", "Formulación de hipótesis", "Contraste con evidencia", "Conclusión", "Recolección de muestra", "Análisis estadístico", "Revisión de pares", "Publicación de resultados"]

enunciado: "Para construir un argumento científico sólido que resista una objeción, se debe seguir un orden lógico de validación. Ordene los pasos para el caso de una investigación de campo:"

explicacion: |
  Un argumento científico no es solo una opinión; es una secuencia lógica que parte de la observación y pasa por el contraste riguroso de la evidencia antes de concluir.
```

### 4 — Identificación de falacias en la objeción
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["logica", "critica"]

variables:
  ejemplo_idx: uno_de([0, 1])
  objecion_texto: [["Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa", "No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye"], ["No has probado que el cambio sea causado por el CO2, por lo tanto, el CO2 no influye", "Si no puedes medir el efecto exacto de cada molécula, entonces tu teoría es falsa"]]

respuesta: "falacia de la evidencia insuficiente"
tipo: completar
respuestas_validas: ["falacia de la evidencia insuficiente", "error de generalización"]

enunciado: "Ante la objecion: '{objecion_texto[ejemplo_idx]}', el investigador debe identificar que el crítico está cometiendo una ___ para poder responder con datos que cubran el margen de error."

explicacion: |
  Cuando un crítico exige una certeza absoluta (imposible en ciencia) para invalidar una tendencia, está incurriendo en una falacia de evidencia insuficiente.
```

### 5 — Selección de evidencia relevante
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["Se estudia la eficacia de un nuevo fertilizante", "Se estudia la relación entre horas de sueño y memoria"]]
  dato_relevante: [["kg de biomasa por planta", "puntuación en test de retención"]]
  objecion: ["la calidad del suelo no fue controlada", "el nivel de estrés de los sujetos"]

respuesta: dato_relevante[escenario_idx]
tipo: mc
opciones_explicitas: ["kg de biomasa por planta", "puntuación en test de retención", "opinión de los agricultores", "color de las hojas"]

enunciado: "Para defender la eficacia de {escenario[escenario_idx]} frente a la objecion de que {objecion[escenario_idx]}, el dato científico más concreto es: ___"

explicacion: |
  La defensa de una conclusión depende de la elección de la variable dependiente correcta que cuantifique directamente el fenómeno estudiado.
```