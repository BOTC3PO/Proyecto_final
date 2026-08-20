# Historia Profunda — Distribucion biomas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de bioma

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["conceptos", "ecologia"]

tipo: mc
opciones_explicitas: ["Una agrupación de especies animales y vegetales en un área determinada.", "Una gran región con clima, vegetación y fauna característicos.", "Un conjunto de suelos con propiedades químicas similares.", "La suma de todos los ecosistemas de un continente."]

enunciado: "Un bioma se define como ___."

respuesta: "Una gran región con clima, vegetación y fauna característicos."

explicacion: |
  Un bioma es una unidad ecológica de gran escala que se caracteriza por tener un clima, un tipo de vegetación y una fauna específicos que se repiten en diferentes partes del planeta.
```

### 2 — Factores determinantes

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos"]

tipo: mc
opciones_explicitas: ["La altitud y la presión atmosférica.", "La latitud y el clima.", "La distancia a la costa y la humedad.", "La actividad volcánica y el relieve."]
enunciado: "La distribución de los biomas en la superficie terrestre está determinada principalmente por:"
respuesta: "La latitud y el clima."
explicacion: |
  La latitud determina la radiación solar recibida, lo cual, junto con la humedad y la temperatura (clima), define el tipo de vegetación y el bioma resultante.
```

### 3 — Clasificación de biomas

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["ejemplos", "clasificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Selva Tropical", "Desierto"], ["Altas precipitaciones y calor constante", "Escasez extrema de agua y temperaturas extremas"]]

tipo: completar
respuestas_validas:
  - "Selva Tropical"
  - "Desierto"

enunciado: "El bioma caracterizado por {escenarios[escenario_idx][1]} es la {escenarios[escenario_idx][0]}."

explicacion: |
  El usuario debe identificar el bioma basado en la descripción climática proporcionada.
```

### 4 — Relación clima-vegetación

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "vegetacion"]

tipo: completar
respuestas_validas:
  - "Tundra"
  - "Taiga"
  - "Sabana"

enunciado: "El bioma de clima frío, con suelos congelados (permafrost) y vegetación de musgos y líquenes, se denomina ___."

explicacion: |
  La Tundra se caracteriza por condiciones climáticas extremas de frío y la presencia de permafrost, lo que impide el crecimiento de árboles grandes.
```

### 5 — Orden de complejidad biológica

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["jerarquia", "ecologia"]

tipo: ordenar
opciones_explicitas: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]

enunciado: "Ordene de menor a mayor complejidad los niveles de organización ecológica que conforman la estructura de un bioma:"

explicacion: |
  La jerarquía parte desde el organismo individual, pasa por grupos de la misma especie (población), interacciones entre especies (comunidad), la relación con el medio físico (ecosistema) y finalmente la escala global (bioma).
respuesta_orden: ["Individuo", "Población", "Comunidad", "Ecosistema", "Bioma"]
```

### 6 — Factores de distribución de biomas

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["latitud", "clima"]

respuesta: "latitud"
tipo: mc
opciones_explicitas: ["latitud", "altitud", "densidad_poblacion", "geologia"]

enunciado: "La distribución de los biomas en la superficie terrestre sigue patrones principales determinados por la ___, debido a la inclinación del eje terrestre y el ángulo de incidencia de la radiación solar."

explicacion: |
  La latitud determina la cantidad de radiación solar que recibe una superficie, creando franjas climáticas que definen los biomas.
```

### 7 — El efecto de la altitud

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["altitud", "gradiente_termico"]

variables:
  escenario: uno_de([["un ascenso constante en la montaña", "disminución de temperatura"], ["un descenso desde la cima", "aumento de temperatura"], ["un desplazamiento hacia el ecuador", "aumento de temperatura"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "disminución de temperatura"
  - "aumento de temperatura"
  - "cambio de humedad"

enunciado: "Al aumentar la altitud en una montaña, se produce un gradiente térmico donde ocurre una {escenario[0]}."

explicacion: |
  A mayor altitud, la presión atmosférica disminuye y la temperatura desciende, lo que puede cambiar el bioma local (piso térmico).
```

### 8 — Relación latitud y biomas

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "zonas_climaticas"]

variables:
  datos: uno_de([["Ecuador", "Selva Tropical"], ["Zonas Templadas", "Bosques Caducifolios"], ["Polos", "Tundra"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Selva Tropical", "Bosques Caducifolios", "Tundra", "Desierto"]

enunciado: "En las zonas de {datos[0]}, el bioma predominante suele ser el de {datos[1]}."

explicacion: |
  La radiación solar constante en el ecuador permite el desarrollo de biomas con alta biodiversidad y precipitaciones abundantes.
```

### 9 — Gradiente vertical de vegetación

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["altitud", "zonas_verticales"]

respuesta_orden: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]
tipo: ordenar
opciones_explicitas: ["Bosque de niebla", "Páramo", "Superpáramo", "Nieves perpetuas"]

enunciado: "Ordene los siguientes biomas de montaña desde la menor hasta la mayor altitud (de la base a la cima):"

explicacion: |
  La altitud genera una zonificación vertical donde la vegetación cambia según la temperatura y la presión.
```

### 10 — Factores determinantes

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores", "clima"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si sumamos los dos factores principales que determinan la distribución de biomas: la latitud (1) y la altitud (1), el resultado es: ___"

explicacion: |
  Ambos factores modifican la temperatura y la humedad, elementos clave para la vida vegetal.
```

### 11 — El bioma de la selva tropical

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

### 12 — Características del desierto

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["desierto", "subtropical", "clima"]

tipo: completar
respuestas_validas:
  - "seco"
  - "húmedo"

enunciado: "Los desiertos se localizan generalmente en zonas subtropicales y se caracterizan por tener un clima muy ___."

respuesta: "seco"

explicacion: |
  El desierto se define por la escasez de precipitaciones, lo que resulta en un clima extremadamente seco.
```

### 13 — Clasificación de biomas según latitud

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["tundra", "polar", "latitud"]

variables:
  datos: [["Tundra", "Zonas polares"], ["Bosque templado", "Zonas de latitudes medias"]]
  escenario_idx: uno_de([0, 1])
  bioma: datos[escenario_idx][0]
  ubicacion: datos[escenario_idx][1]

tipo: mc
opciones_explicitas: ["Tundra", "Bosque templado", "Selva tropical", "Desierto"]

enunciado: "Considerando el bioma de {bioma}, este se encuentra ubicado típicamente en {ubicacion}."

respuesta: bioma

explicacion: |
  La tundra se caracteriza por condiciones climáticas extremas en las zonas polares.
  El bosque templado se ubica en zonas de latitudes medias.
  La selva tropical en zonas ecuatoriales.
  El desierto en zonas áridas.
```

### 14 — Secuencia de biomas por latitud

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["orden", "latitud", "clima"]

tipo: ordenar
opciones_explicitas: ["Selva tropical", "Bosque templado", "Tundra"]

respuesta_orden: ["Selva tropical", "Bosque templado", "Tundra"]

enunciado: "Ordena los siguientes biomas de mayor a menor temperatura (del más cálido al más frío):"

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

### 15 — El bioma de bosque templado

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["bosque", "templado", "estaciones"]

tipo: completar
tolerancia_abs: 0

enunciado: "El bosque templado se distingue de la selva por presentar estaciones del año bien marcadas. Si la temperatura media anual es de 15 grados, el valor numérico es ___."

respuesta: 15

explicacion: |
  El bosque templado presenta variaciones estacionales significativas en su temperatura.
```

### 16 — Biomas y Deriva Continental

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "tectonica_de_placas"]

variables:
  escenario: uno_de([["Pangea", "Pangea"], ["Gondwana", "Gondwana"], ["Laurasia", "Laurasia"]])

enunciado: "La distribución actual de biomas y especies está influenciada por la fragmentación de {escenario[0]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Pangea", "Gondwana", "Laurasia", "Panthalassa"]

explicacion: |
  La fragmentación de Pangea permitió que las especies evolucionaran de forma aislada en diferentes masas continentales, determinando la distribución actual de biomas y la biodiversidad regional.
```

### 17 — El efecto de la separación continental

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["biogeografia", "aislamiento"]

variables:
  caso: uno_de([["Australia", "el continente que permitió el aislamiento de marsupiales"], ["América del Sur", "el continente que se unió a Norteamérica por el istmo"]])

enunciado: "La separación de {caso[0]} permitió que la fauna evolucionara de manera única, un proceso clave en la biogeografía histórica."

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["Australia", "América del Sur", "África", "Antártida"]

explicacion: |
  El aislamiento geográfico prolongado impide el flujo genético, permitiendo que especies específicas evolucionen en biomas exclusivos de esa región.
```

### 18 — Factores de distribución de biomas

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["factores_climaticos", "biomas"]

variables:
  factor: uno_de([["latitud", "la distancia respecto al ecuador"], ["altitud", "la altura sobre el nivel del mar"]])

enunciado: "La distribución de los biomas no solo depende de la tectónica, sino también de factores climáticos como la {factor[0]}."

respuesta: factor[0]
tipo: mc
opciones_explicitas: ["latitud", "altitud", "presión", "salinidad"]

explicacion: |
  La latitud determina la radiación solar recibida, lo cual es un factor determinante para la clasificación de biomas (tropicales, templados, polares).
```

### 19 — Secuencia de formación geológica

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["historia_geologica", "procesos"]

enunciado: "Ordena cronológicamente los procesos que influyen en la distribución de la vida en la Tierra:"

pasos:
  - "Formación de supercontinentes (ej. Pangea)"
  - "Fragmentación de las masas continentales"
  - "Evolución y especiación por aislamiento"
  - "Establecimiento de biomas actuales"

respuesta_orden: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]
tipo: ordenar
opciones_explicitas: ["Formación de supercontinentes (ej. Pangea)", "Fragmentación de las masas continentales", "Evolución y especiación por aislamiento", "Establecimiento de biomas actuales"]

explicacion: |
  La estructura geológica establece la base física, la fragmentación crea barreras, el aislamiento permite la especiación y el clima finaliza la configuración de los biomas.
```

### 20 — Relación Biogeografía - Tectónica

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "avanzado"
  tags: ["biogeografia", "tectonica"]

variables:
  relacion: uno_de([["directa", "existe una conexión clara entre movimiento de placas y especies"], ["inversa", "el movimiento de placas impide la distribución de especies"]])

enunciado: "La relación entre la tectónica de placas y la biogeografía es ___________."

respuesta: relacion[0]
tipo: completar
opciones_explicitas: ["directa", "inversa"]
respuestas_validas:
  - "directa"
  - "inversa"

pasos:
  - "Analizar cómo el movimiento de placas crea o destruye barreras físicas."
  - "Considerar cómo estas barreras afectan la migración de especies."

explicacion: |
  Es una relación directa: el movimiento de las placas tectónicas crea montañas, océanos y separa continentes, lo que dicta las rutas de migración y el aislamiento de las especies.
```

### 21 — Bioma de selva tropical

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "latitud", "selva"]

variables:
  datos: [["latitud_ecuatorial", "Selva Tropical"], ["latitud_polar", "Tundra"], ["latitud_desertica", "Desierto"]]
  idx: uno_de([0,1,2])

enunciado: "Un ecosistema con temperaturas elevadas durante todo el año, precipitaciones constantes y una biodiversidad extrema se encuentra en la {datos[idx][0]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Selva Tropical", "Tundra", "Desierto"]

explicacion: |
  La selva tropical se caracteriza por su clima cálido y húmedo, situado cerca del ecuador.
```

### 22 — Identificación de bioma desértico

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
respuestas_validas:
  - "Desierto"

explicacion: |
  Los desiertos se definen por la escasez extrema de agua y la alta tasa de evaporación.
```

### 23 — Secuencia de biomas por latitud

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["latitud", "secuencia", "clima"]

enunciado: "Ordene los siguientes biomas desde la zona ecuatorial hacia los polos (de mayor a menor temperatura):"

respuesta_orden: ["Selva Tropical", "Bosque Templado", "Tundra"]
tipo: ordenar
opciones_explicitas: ["Selva Tropical", "Bosque Templado", "Tundra"]

explicacion: |
  La temperatura disminuye a medida que nos alejamos del ecuador hacia los polos.
```

### 24 — Clima de la Tundra

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "intermedio"
  tags: ["clima", "suelo", "tundra"]

variables:
  datos: [["permafrost_permanente", "Tundra"], ["suelo_nutritivo", "Selva"], ["estaciones_marcadas", "Bosque Templado"]]
  idx: uno_de([0,1,2])

enunciado: "Un bioma caracterizado por el {datos[idx][0]} y la presencia de musgos y líquenes es la ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Tundra"

explicacion: |
  La tundra se define por el permafrost, un suelo que permanece congelado casi todo el año.
```

### 25 — Bioma de latitudes medias

```
metadata:
  materia: "geografia"
  tema: "distribucion_biomas"
  nivel: "basico"
  tags: ["clima", "estaciones"]

variables:
  datos: [["estaciones_bien_definidas", "Bosque Templado"], ["clima_extremadamente_seco", "Desierto"], ["clima_calido_húmedo", "Selva"]]
  idx: uno_de([0,1,2])

enunciado: "Un ecosistema con {datos[idx][0]} y árboles que pierden sus hojas en otoño es un ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Bosque Templado", "Desierto", "Selva"]

explicacion: |
  El bosque templado se distingue por la marcada estacionalidad de sus climas.
```
