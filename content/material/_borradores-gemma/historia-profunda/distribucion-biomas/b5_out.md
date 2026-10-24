### 1 — Bioma de selva tropical
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "latitud", "selva"]

variables:
  escenario: uno_de([["latitud_ecuatorial", "Selva Tropical"], ["latitud_polar", "Tundra"], ["latitud_desertica", "Desierto"]])
  idx: uno_de([0,1,2])

enunciado: "Un ecosistema con temperaturas elevadas durante todo el año, precipitaciones constantes y una biodiversidad extrema se encuentra en la {escenario[0]}."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Selva Tropical", "Tundra", "Desierto"]

explicacion: |
  La selva tropical se caracteriza por su clima cálido y húmedo, situado cerca del ecuador.
```

### 2 — Identificación de bioma desértico
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "precipitacion"]

variables:
  datos: [["precipitaciones_nulas", "Desierto"], ["precipitaciones_moderadas", "Bosque Templado"], ["precipitaciones_altas", "Selva Tropical"]]
  idx: uno_de([0,1,2])

enunciado: "Si un área presenta {datos[idx][0]} y una evaporación muy superior a la precipitación, el bioma es un ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Desierto"]

explicacion: |
  Los desiertos se definen por la escasez extrema de agua y la alta tasa de evaporación.
```

### 3 — Secuencia de biomas por latitud
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "secuencia", "clima"]

enunciado: "Ordene los siguientes biomas desde la zona ecuatorial hacia los polos (de mayor a menor temperatura):"

respuesta: ["Selva Tropical", "Bosque Templado", "Tundra"]
tipo: ordenar
opciones_explicitas: ["Selva Tropical", "Bosque Templado", "Tundra"]

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

### 4 — Clima de la Tundra
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "suelo", "tundra"]

variables:
  caso: uno_de([["permafrost_permanente", "Tundra"], ["suelo_nutritivo", "Selva"], ["estaciones_marcadas", "Bosque Templado"]])
  idx: uno_de([0,1,2])

enunciado: "Un bioma caracterizado por el {caso[idx][0]} y la presencia de musgos y líquenes es la ___."

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["Tundra"]

explicacion: |
  La tundra se define por el permafrost, un suelo que permanece congelado casi todo el año.
```

### 5 — Bioma de latitudes medias
```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "estaciones"]

variables:
  escenario: uno_de([["estaciones_bien_definidas", "Bosque Templado"], ["clima_extremadamente_seco", "Desierto"], ["clima_calido_húmedo", "Selva"]])
  idx: uno_de([0,1,2])

enunciado: "Un ecosistema con {escenario[idx][0]} y árboles que pierden sus hojas en otoño es un ___."

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Bosque Templado", "Desierto", "Selva"]

explicacion: |
  El bosque templado se distingue por la marcada estacionalidad de sus climas.
```