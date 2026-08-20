### 1 — El bioma de la selva tropical
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["selva", "tropical", "ecuador"]

tipo: mc
opciones_explicitas: ["Ecuador", "Sahara", "Antártida", "Siberia"]

enunciado: "La selva tropical es un bioma caracterizado por altas temperaturas y precipitaciones constantes. Un ejemplo de región donde este bioma es predominante es ___."

respuesta: "Ecuador"

explicacion: |
  La selva tropical, como la de Ecuador, se encuentra en zonas ecuatoriales con alta humedad y calor todo el año.
```

### 2 — Características del desierto
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["desierto", "subtropical", "clima"]

tipo: completar
respuestas_validas: ["seco", "húmedo"]

enunciado: "Los desiertos se localizan generalmente en zonas subtropicales y se caracterizan por tener un clima muy ___."

respuesta: "seco"

explicacion: |
  El desierto se define por la escasez de precipitaciones, lo que resulta en un clima extremadamente seco.
```

### 3 — Clasificación de biomas según latitud
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["tundra", "polar", "latitud"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["Tundra", "Zonas polares"], ["Bosque templado", "Zonas de latitudes medias"]]]

tipo: mc
opciones_explicitas: ["Tundra", "Bosque templado", "Selva tropical", "Desierto"]

enunciado: "Considerando el bioma de {datos[escenario_idx][0]}, este se encuentra ubicado típicamente en {datos[escenario_idx][1]}."

respuesta: "Tundra"

explicacion: |
  La tundra se caracteriza por condiciones climáticas extremas en las zonas polares.
```

### 4 — Secuencia de biomas por latitud
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["orden", "latitud", "clima"]

tipo: ordenar
opciones_explicitas: ["Selva tropical", "Bosque templado", "Tundra"]

respuesta: ["Selva tropical", "Bosque templado", "Tundra"]

enunciado: "Ordena los siguientes biomas de mayor a menor temperatura (del más cálido al más frío):"

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

### 5 — El bioma de bosque templado
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["bosque", "templado", "estaciones"]

tipo: input
tolerancia_abs: 0

enunciado: "El bosque templado se distingue de la selva por presentar estaciones del año bien marcadas. Si la temperatura media anual es de 15 grados, el valor numérico es ___."

respuesta: 15

explicacion: |
  El bosque templado presenta variaciones estacionales significativas en su temperatura.
```