### 1 — El concepto de Snowball Earth
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["precambrico", "glaciacion", "teoria"]

respuesta: "Tierra bola de nieve"
tipo: completar
respuestas_validas: ["Tierra bola de nieve", "Snowball Earth"]

enunciado: "La hipótesis que propone que, durante el Precámbrico, la Tierra estuvo casi totalmente cubierta por capas de hielo se denomina ___."

explicacion: |
  La hipótesis de la 'Tierra bola de nieve' sugiere que el planeta experimentó periodos de glaciación global donde incluso el ecuador estaba cubierto de hielo.
```

### 2 — Evidencia geológica
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["evidencia", "sedimentos"]

variables:
  escenario_idx: uno_de([0, 1])
  evidencias: [["diamictitas", "depósitos de tilita"], ["capas de carbonatos", "depósitos de hierro bandeado"]]

respuesta: escenario_idx_datos[1]
tipo: mc
opciones_explicitas: ["diamictitas", "capas de carbonatos", "depósitos de hierro bandeado", "depósitos de tilita"]

enunciado: "En el registro geológico, la presencia de ___ es una evidencia clave que sugiere la existencia de glaciaciones intensas en latitudes bajas durante el Precámbrico."

pasos:
  - "Identificar el tipo de sedimento glacial."
  - "Relacionar el sedimento con la hipótesis de congelamiento global."

explicacion: |
  Las diamictitas (o tilitas) son rocas sedimentarias con matriz de grano fino que contiene clastos de diversos tamaños, características de la erosión glacial.
```

### 3 — Mecanismo de retroalimentación
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["albedo", "retroalimentacion", "clima"]

respuesta: "albedo"
tipo: completar
respuestas_validas: ["albedo", "efecto invernadero"]

enunciado: "El principal mecanismo de retroalimentación positiva que acelera el enfriamiento en la hipótesis de la Tierra bola de nieve es el aumento del ___ terrestre."

explicacion: |
  Al extenderse el hielo, la superficie refleja más radiación solar (mayor albedo) en lugar de absorberla, lo que reduce la temperatura y permite que el hielo crezca aún más.
```

### 4 — Causas del deshielo
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["volcanismo", "co2", "deshielo"]

respuesta: "volcanismo"
tipo: mc
opciones_explicitas: ["tectónica de placas", "volcanismo", "actividad solar", "cambios en la órbita"]

enunciado: "¿Qué proceso geológico se considera el principal responsable de liberar grandes cantidades de CO2 para romper el estado de 'bola de nieve' y provocar un efecto invernadero extremo?"

explicacion: |
  El vulcanismo continuo durante el periodo de congelación acumula gases de efecto invernadero en la atmósfera, ya que el ciclo de carbonato-silicato (que normalmente consume CO2) se detiene por la falta de meteorización líquida.
```

### 5 — Secuencia de eventos climáticos
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["secuencia", "clima", "precambrico"]

respuesta: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]
tipo: ordenar
opciones_explicitas: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]

enunciado: "Ordena cronológicamente los eventos que llevan a la transición de una Tierra bola de nieve a un estado de clima cálido."

pasos:
  - "Establecer el estado inicial de congelamiento."
  - "Identificar la fuente de gases en la atmósfera."
  - "Determinar la consecuencia térmica."
  - "Indicar el resultado final del proceso."

explicacion: |
  La secuencia comienza con la glaciación, sigue con la acumulación de CO2 por vulcanismo (al no haber meteorización), lo que genera un efecto invernadero que finalmente provoca el deshielo.
```