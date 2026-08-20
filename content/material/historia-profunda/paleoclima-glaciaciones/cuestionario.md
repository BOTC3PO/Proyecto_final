# Historia Profunda — Paleoclima glaciaciones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de paleoclima

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["definicion", "introduccion"]

respuesta: "paleoclima"
tipo: completar
respuestas_validas:
  - "paleoclima"

enunciado: "El estudio de los climas de la Tierra en el pasado geológico se denomina ___."

explicacion: |
  El paleoclima es la ciencia que reconstruye las condiciones climáticas de épocas pasadas utilizando diversos indicadores naturales.
```

### 2 — Métodos de reconstrucción

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["metodos", "reconstruccion"]

variables:
  metodo_idx: uno_de([0, 1, 2])
  metodos: ["núcleos de hielo", "sedimentos marinos", "anillos de árboles"]

respuesta: metodos[metodo_idx]
tipo: mc
opciones_explicitas: ["núcleos de hielo", "sedimentos marinos", "anillos de árboles", "fósiles de insectos"]

enunciado: "Un método común para reconstruir el paleoclima mediante el análisis de capas de precipitación congelada es el uso de {metodos[metodo_idx]}."

explicacion: |
  Los núcleos de hielo almacenan burbujas de aire y partículas que permiten conocer la composición atmosférica de hace miles de años.
```

### 3 — Indicadores biológicos y geológicos

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["indicadores", "fósiles"]

respuesta: "fósiles"
tipo: mc
opciones_explicitas: ["fósiles", "satélites", "termómetros", "instrumentos de medición"]

enunciado: "Cuando no hay hielo o sedimentos disponibles, los científicos utilizan ___ de especies extintas para inferir temperaturas antiguas."

explicacion: |
  Los fósiles (como corales o plantas) actúan como indicadores biológicos de las condiciones ambientales en las que vivieron.
```

### 4 — Secuencia de análisis paleoclimático

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta_orden: ["extracción", "datación", "análisis químico"]
tipo: ordenar
opciones_explicitas: ["extracción", "datación", "análisis químico"]

enunciado: "Ordena los pasos típicos para reconstruir un clima antiguo a partir de una muestra de sedimento:"

pasos:
  - "Obtención de la muestra del terreno."
  - "Determinación de la edad de la capa sedimentaria."
  - "Estudio de la composición de la muestra en laboratorio."

explicacion: |
  Primero se extrae el material, luego se determina su edad (datación) y finalmente se analizan sus componentes químicos.
```

### 5 — Interpretación de anillos

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["dendrocronologia", "anillos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: ["ancho", "estrecho"]
  resultado: ["clima favorable", "clima adverso"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["clima favorable", "clima adverso"]

enunciado: "En dendrocronología, si un anillo de crecimiento es {escenarios[caso_idx]}, esto suele indicar un {resultado[caso_idx]} durante ese año."

explicacion: |
  Anillos anchos sugieren condiciones óptimas de temperatura y humedad, mientras que anillos estrechos indican estrés ambiental.
```

### 6 — Ciclos de Milankovitch: Excentricidad

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["astronomia", "clima", "milankovitch"]

respuesta: "excentricidad"
tipo: mc

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, que oscila entre una forma casi circular y una elíptica, se denomina:"

opciones_explicitas: ["oblicuidad", "precesión", "excentricidad", "nutación"]

explicacion: |
  La excentricidad describe qué tan "achatada" es la órbita terrestre. Este ciclo tiene periodos de aproximadamente 100,000 y 400,000 años y afecta la cantidad de radiación solar que llega a la Tierra.
```

### 7 — La Oblicuidad y las latitudes

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["oblicuidad", "inclinacion", "clima"]

variables:
  idx: uno_de([0, 1])
  escenario: [[15, 23.5], [24.5, 22.1]]

respuesta: escenario[idx][1]
tipo: completar
tolerancia_abs: 0.1

enunciado: "La inclinación del eje terrestre (oblicuidad) varía periódicamente. Si la inclinación aumenta hacia el valor de {escenario[idx][0]} grados, ¿cuál es el valor aproximado de la inclinación mínima que alcanza en el ciclo?"

pasos:
  - "Identificar el valor máximo de inclinación proporcionado."
  - "Identificar el valor mínimo de inclinación proporcionado en el escenario."

explicacion: |
  La oblicuidad influye en la estacionalidad. Una mayor inclinación genera estaciones más marcadas, mientras que una menor inclinación (como el valor de {escenario[idx][1]} grados) tiende a favorecer la glaciación al hacer los veranos menos intensos en las altas latitudes.
```

### 8 — Precesión de los equinoccios

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["precesion", "eje_terrestre"]

respuesta: "el eje de rotación"
tipo: completar
respuestas_validas:
  - "el eje de rotación"
  - "la órbita"
  - "el sol"

enunciado: "La precesión es el movimiento de bamboleo de ___ terrestre, similar al de un trompo, que cambia la orientación de los polos respecto a la eclíptica."

explicacion: |
  La precesión afecta la dirección en la que apunta la Tierra respecto a las estrellas y determina en qué época del año ocurre el solsticio o el equinoccio.
```

### 9 — Factores de la Glaciación

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["causas", "glaciaciones"]

respuesta_orden: ["excentricidad", "oblicuidad", "precesión"]
tipo: ordenar

opciones_explicitas: ["excentricidad", "oblicuidad", "precesión"]

enunciado: "Ordene los tres ciclos de Milankovitch desde el que tiene el periodo de duración más largo al más corto:"

explicacion: |
  El orden correcto de duración es: Excentricidad (~100k-400k años), Oblicuidad (~41k años) y Precesión (~21k-26k años).
```

### 10 — Efecto en la radiación

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["radiacion", "insolacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["disminuye", "glaciación"], ["aumenta", "interglaciar"]]

respuesta: datos[idx][1]
tipo: mc

enunciado: "Si los ciclos de Milankovitch provocan que la insolación estival en las altas latitudes sea significativamente menor, el efecto resultante en el clima global es una: {datos[idx][0]}"

opciones_explicitas: ["glaciación", "interglaciar", "estabilidad térmica"]

explicacion: |
  Para que se formen grandes capas de hielo, los veranos deben ser lo suficientemente frescos como para que la nieve del invierno no se derrita completamente, permitiendo la acumulación de hielo.
```

### 11 — El concepto de Snowball Earth

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["precambrico", "glaciacion", "teoria"]

respuesta: "Tierra bola de nieve"
tipo: completar
respuestas_validas:
  - "Tierra bola de nieve"
  - "Snowball Earth"

enunciado: "La hipótesis que propone que, durante el Precámbrico, la Tierra estuvo casi totalmente cubierta por capas de hielo se denomina ___."

explicacion: |
  La hipótesis de la 'Tierra bola de nieve' sugiere que el planeta experimentó periodos de glaciación global donde incluso el ecuador estaba cubierto de hielo.
```

### 12 — Evidencia geológica

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["evidencia", "sedimentos"]

variables:
  escenario_idx: uno_de([0, 1])
  evidencias: [["diamictitas", "depósitos de tilita"], ["capas de carbonatos", "depósitos de hierro bandeado"]]
  respuesta_correcta: evidencias[escenario_idx][0]

respuesta: respuesta_correcta
tipo: mc
opciones_explicitas: ["diamictitas", "capas de carbonatos", "depósitos de hierro bandeado", "depósitos de tilita"]

enunciado: "En el registro geológico, la presencia de ___ es una evidencia clave que sugiere la existencia de glaciaciones intensas en latitudes bajas durante el Precámbrico."

pasos:
  - "Identificar el tipo de sedimento glacial."
  - "Relacionar el sedimento con la hipótesis de congelamiento global."

explicacion: |
  Las diamictitas (o tilitas) son rocas sedimentarias con matriz de grano fino que contiene clastos de diversos tamaños, características de la erosión glacial.
```

### 13 — Mecanismo de retroalimentación

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["albedo", "retroalimentacion", "clima"]

respuesta: "albedo"
tipo: completar
respuestas_validas:
  - "albedo"
  - "efecto invernadero"

enunciado: "El principal mecanismo de retroalimentación positiva que acelera el enfriamiento en la hipótesis de la Tierra bola de nieve es el aumento del ___ terrestre."

explicacion: |
  Al extenderse el hielo, la superficie refleja más radiación solar (mayor albedo) en lugar de absorberla, lo que reduce la temperatura y permite que el hielo crezca aún más.
```

### 14 — Causas del deshielo

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

### 15 — Secuencia de eventos climáticos

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["secuencia", "clima", "precambrico"]

respuesta_orden: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]
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

### 16 — El periodo de la última glaciación

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["cuaternario", "glaciaciones"]

respuesta: "Pleistoceno"
tipo: completar
respuestas_validas:
  - "Pleistoceno"

enunciado: "El periodo geológico que comprende la mayor parte del Cuaternario y que se caracteriza por ciclos de glaciaciones es el ___________."

explicacion: |
  El Pleistoceno abarca desde hace aproximadamente 2.58 millones de años hasta hace 11,700 años, marcando la era de las grandes glaciaciones.
```

### 17 — La última glaciación

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["glaciacion", "tiempo"]

respuesta: 11700
tipo: completar
tolerancia_abs: 500

enunciado: "La última glaciación (LGM - Last Glacial Maximum) terminó hace aproximadamente ________ años, dando inicio al Holoceno."

explicacion: |
  Hace unos 11,700 años el clima se estabilizó, permitiendo el florecimiento de las civilizaciones humanas actuales.
```

### 18 — Ciclos de Milankovitch

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["milankovitch", "ciclos"]

tipo: mc
opciones_explicitas: ["Excentricidad", "Precesión", "Oblicuidad", "Efecto Coriolis"]
respuesta: "Excentricidad"

enunciado: "El ciclo de Milankovitch que altera la forma de la órbita terrestre, haciéndola pasar de casi circular a más elíptica y viceversa a lo largo de miles de años, se conoce como:"

explicacion: |
  La Excentricidad es uno de los tres ciclos astronómicos principales (junto con la Precesión y la Oblicuidad) que modulan la insolación terrestre, con un período aproximado de 100.000 años.
```

### 19 — Secuencia de eventos climáticos

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "clima"]

respuesta_orden: ["Glaciación", "Interglaciar", "Glaciación", "Interglaciar"]
tipo: ordenar
opciones_explicitas: ["Glaciación", "Interglaciar", "Glaciación", "Interglaciar"]

enunciado: "Ordena la secuencia típica de los ciclos climáticos que han definido el Cuaternario (de mayor a menor cobertura de hielo):"

explicacion: |
  El Cuaternario se caracteriza por la alternancia entre periodos fríos (glaciaciones) y periodos cálidos (interglaciares).
```

### 20 — El Holoceno actual

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["holoceno", "clima"]

respuesta: "Holoceno"
tipo: mc
opciones_explicitas: ["Pleistoceno", "Holoceno", "Eoceno", "Mioceno"]

enunciado: "El periodo interglaciar actual, en el que nos encontramos y que comenzó tras la última gran glaciación, se denomina:"

explicacion: |
  El Holoceno es el periodo de clima estable y cálido que ha permitido el desarrollo de la agricultura y la civilización humana.
```

### 21 — Ciclos de Milankovitch

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["milankovitch", "astronomia"]

variables:
  escenario: [[ "excentricidad", "cambios en la órbita terrestre" ], [ "oblicuidad", "inclinación del eje terrestre" ], [ "precesión", "balanceo del eje terrestre" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["cambios en la órbita terrestre", "inclinación del eje terrestre", "balanceo del eje terrestre"]

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, conocida como ciclo de {escenario[idx][0]}, es un factor clave en las glaciaciones."

explicacion: |
  La excentricidad describe qué tan elíptica es la órbita, afectando la distancia promedio al Sol.
```

### 22 — Forzamientos Volcánicos

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["volcanes", "clima"]

variables:
  caso: [[ "ceniza y aerosoles", "enfriamiento" ], [ "gases de efecto invernadero", "calentamiento" ]]
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["enfriamiento", "calentamiento"]

enunciado: "Una erupción volcánica masiva inyecta partículas en la estratosfera. Dependiendo de la composición predominante, el efecto inmediato sobre la temperatura global puede ser de ___."

explicacion: |
  Las erupciones grandes suelen causar enfriamiento temporal debido al efecto albedo de los aerosoles.
```

### 23 — El Ciclo del Carbono

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["carbono", "geoquimica"]

variables:
  evento: [[ "aumento", "liberación de CO2" ], [ "disminución", "secuestro de CO2" ]]
  idx: uno_de([0, 1])

respuesta: evento[idx][1]
tipo: completar
respuestas_validas:
  - "liberación de CO2"
  - "secuestro de CO2"

enunciado: "Durante un periodo de glaciación, la actividad biológica y la sedimentación oceánica provocan una ___ de carbono atmosférico."

explicacion: |
  El secuestro de carbono en el fondo marino reduce el efecto invernadero, favoreciendo el enfriamiento.
```

### 24 — Secuencia de Eventos Climáticos

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta_orden: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]
tipo: ordenar
opciones_explicitas: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]

enunciado: "Ordene cronológicamente la reacción en cadena ante un aumento en la insolación solar:"

explicacion: |
  El aumento de radiación calienta la superficie, lo que derrite el hielo y finalmente eleva el nivel del mar.
```

### 25 — Escala de Tiempo Geológica

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["escalas", "tiempo"]

variables:
  escala: [[ "Milankovitch", "Ciclos orbitales" ], [ "Ciclos de hielo", "Variaciones milenarias" ]]
  idx: uno_de([0, 1])

respuesta: escala[idx][1]
tipo: mc
opciones_explicitas: ["Ciclos orbitales", "Variaciones milenarias"]

enunciado: "Las variaciones climáticas de escala geológica, como las glaciaciones, están impulsadas principalmente por los ciclos de ___."

explicacion: |
  Los ciclos de Milankovitch operan en escalas de decenas de miles de años.
```
