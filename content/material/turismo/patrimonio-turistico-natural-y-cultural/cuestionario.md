# Turismo — Patrimonio turistico natural y cultural (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Patrimonio Turístico

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["El conjunto de bienes tangibles e intangibles que un destino ofrece a los visitantes.", "El conjunto de medios de transporte y servicios hoteleros de una región.", "La cantidad de turistas que visitan un lugar en un año determinado.", "El presupuesto destinado a la promoción de un país."]

respuesta: "El conjunto de bienes tangibles e intangibles que un destino ofrece a los visitantes."

enunciado: "Se define como patrimonio turístico al..."

explicacion: |
  El patrimonio turístico abarca tanto los elementos naturales como las manifestaciones culturales que poseen un valor para atraer visitantes.
```

### 2 — Clasificación del Patrimonio

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["clasificacion", "natural", "cultural"]

tipo: vf

enunciado: "¿Un monumento histórico o una danza tradicional se consideran patrimonio turístico natural?"

respuesta: falso

explicacion: |
  Falso. Los monumentos y tradiciones forman parte del patrimonio cultural. El patrimonio natural está compuesto por formaciones geológicas, flora y fauna.
```

### 3 — Elementos del Patrimonio Natural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["patrimonio_natural", "ejemplos"]

tipo: completar
respuestas_validas:
  - "Parques Nacionales"
  - "Cataratas"

respuesta: "Parques Nacionales"

enunciado: "Un ejemplo típico de un recurso que constituye patrimonio turístico natural son los ___."

explicacion: |
  Los Parques Nacionales son áreas protegidas que conservan la biodiversidad y paisajes naturales, siendo pilares del turismo de naturaleza.
```

### 4 — Atractivos del Patrimonio Cultural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["patrimonio_cultural", "tangible", "intangible"]

tipo: mc
opciones_explicitas: ["Patrimonio Tangible", "Patrimonio Intangible", "Patrimonio Paisajístico", "Patrimonio Geológico"]

respuesta: "Patrimonio Tangible"

enunciado: "Las ruinas de una ciudad antigua o un edificio histórico son ejemplos de patrimonio cultural de tipo ___."

explicacion: |
  El patrimonio tangible es aquel que se puede tocar (objetos, edificios, sitios arqueológicos), mientras que el intangible se refiere a tradiciones, música o gastronomía.
```

### 5 — Componentes del Atractivo Turístico

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["atractivos", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Identificación del recurso", "Evaluación de su valor", "Planificación de la infraestructura", "Promoción del destino"]

respuesta_orden: ["Identificación del recurso", "Evaluación de su valor", "Planificación de la infraestructura", "Promoción del destino"]

enunciado: "Ordene lógicamente las etapas para convertir un recurso natural o cultural en un producto turístico consolidado:"

explicacion: |
  Para desarrollar un destino, primero se debe identificar qué recurso existe, luego evaluar su potencial, diseñar la infraestructura necesaria y finalmente promocionarlo.
```

### 6 — Clasificación de patrimonio

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio"]

opciones_explicitas: ["Patrimonio Natural", "Patrimonio Cultural"]

enunciado: "Un grupo de turistas visita las Cataratas del Iguazú para observar la biodiversidad y la geología del lugar. Este sitio se clasifica como ___."

respuesta: "Patrimonio Natural"
tipo: "mc"

explicacion: |
  El patrimonio natural está compuesto por formaciones físicas, biológicas y geológicas que no han sido creadas por el hombre, como las Cataratas del Iguazú.
```

### 7 — Elementos del patrimonio cultural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["patrimonio_cultural", "tradiciones"]

respuestas_validas:
  - "tradiciones"
  - "monumentos"
  - "gastronomía"

enunciado: "El patrimonio cultural se divide en elementos tangibles e intangibles. Los ___ son elementos tangibles (como edificios históricos), mientras que las ___ son elementos intangibles (como las danzas típicas)."

respuesta: ["monumentos", "tradiciones"]
tipo: "completar"

explicacion: |
  El patrimonio cultural tangible incluye objetos físicos como monumentos y arquitectura; el intangible incluye las tradiciones, la música y la gastronomía.
```

### 8 — Atractivos de un destino

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["atractivos", "valoracion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El Gran Cañón ofrece vistas espectaculares de la erosión geológica.", "Paisaje natural"], ["El Coliseo Romano muestra la arquitectura de la antigua civilización.", "Monumento cultural"]]

enunciado: "Analizando el caso: {datos[escenario_idx][0]}, el principal factor de atracción es un: ___."

opciones_explicitas: ["Paisaje natural", "Monumento cultural", "Tradición oral"]

respuesta: datos[escenario_idx][1]
tipo: "mc"

explicacion: |
  La capacidad de atracción depende de la naturaleza del recurso: si es un proceso geológico es natural, si es una construcción humana es cultural.
```

### 9 — Secuencia de gestión turística

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["gestion", "ordenar"]

opciones_explicitas: ["Identificar el recurso", "Evaluar su valor", "Diseñar la infraestructura", "Promocionar el destino"]

enunciado: "Para convertir un recurso natural en un producto turístico sostenible, se deben seguir estos pasos en orden:"

respuesta_orden: ["Identificar el recurso", "Evaluar su valor", "Diseñar la infraestructura", "Promocionar el destino"]
tipo: "ordenar"

explicacion: |
  Primero se identifica qué hay, luego se analiza su valor para decidir cómo protegerlo, se crea la infraestructura necesaria y finalmente se da a conocer.
```

### 10 — Verdad o Falso: Patrimonio y Desarrollo

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Un sitio puede ser considerado patrimonio cultural aunque no sea un edificio, por ejemplo, una técnica de tejido ancestral."

respuesta: verdadero
tipo: "vf"

explicacion: |
  Correcto. El patrimonio cultural no se limita a lo material (edificios); incluye también el patrimonio inmaterial como las técnicas artesanales y conocimientos.
```

### 11 — Clasificación de patrimonio

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio_natural"]

enunciado: "Un conjunto de cuevas con pinturas rupestres y un sistema de cascadas adyacente se clasifican como patrimonio _______."

opciones_explicitas: ["natural", "cultural", "mixto"]
respuestas_validas:
  - "mixto"
respuesta: "mixto"
tipo: "completar"

explicacion: |
  Cuando un sitio integra elementos naturales (como las cascadas) con elementos culturales (como las pinturas rupestres), se denomina patrimonio mixto.
```

### 12 — Atractivos tangibles e intangibles

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico"
  nivel: "basico"
  tags: ["cultura", "intangible"]

variables:
  es_intangible: uno_de([verdadero, falso])

enunciado: "Si un destino ofrece una danza tradicional y una leyenda local, ¿estamos ante un patrimonio cultural intangible? {es_intangible}"

respuesta: es_intangible
tipo: "vf"

explicacion: |
  El patrimonio cultural intangible comprende las tradiciones, expresiones orales, artes del espectáculo y conocimientos técnicos que las comunidades reconocen como parte de su identidad.
```

### 13 — Elementos del atractivo turístico

```
metadata:
  materia: "turismo"
  tema: "atractivos_turisticos"
  nivel: "intermedio"
  tags: ["atractivos", "naturaleza"]

variables:
  escenario: uno_de([["un bosque virgen", "un monumento histórico"], ["un volcán activo", "una catedral"]])

enunciado: "Un {escenario[0]} es un ejemplo de patrimonio natural, mientras que {escenario[1]} es un ejemplo de patrimonio cultural."

respuesta: verdadero
tipo: vf

explicacion: |
  Los elementos naturales son aquellos creados por la dinámica de la Tierra, mientras que los culturales son producto de la acción humana.
```

### 14 — Jerarquía de la gestión patrimonial

```
metadata:
  materia: "turismo"
  tema: "gestion_patrimonial"
  nivel: "avanzado"
  tags: ["orden", "proteccion"]

enunciado: "Ordena los pasos lógicos para la puesta en valor de un sitio patrimonial cultural:"

opciones_explicitas: ["Identificación del bien", "Diagnóstico de estado", "Plan de gestión", "Implementación de medidas"]
respuesta_orden: ["Identificación del bien", "Diagnóstico de estado", "Plan de gestión", "Implementación de medidas"]
tipo: "ordenar"

explicacion: |
  Para gestionar un patrimonio no basta con encontrarlo; se debe diagnosticar su estado actual y planificar cómo protegerlo y difundirlo antes de actuar.
```

### 15 — Confusión común: Paisaje vs. Patrimonio

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico"
  nivel: "intermedio"
  tags: ["paisaje", "natural"]

enunciado: "Todo paisaje es automáticamente un patrimonio natural protegido. ¿Esto es correcto? (Respuesta: falso)"

respuesta: falso
tipo: "vf"

explicacion: |
  Un paisaje es una percepción visual de un entorno. Para ser considerado patrimonio, debe poseer un valor excepcional (natural o cultural) y estar sujeto a procesos de conservación y reconocimiento.
```

### 16 — Diferencia entre patrimonio natural y cultural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["definiciones", "clasificacion"]

respuesta: "natural"
tipo: "completar"
respuestas_validas:
  - "natural"

enunciado: "Mientras que el patrimonio cultural está compuesto por obras humanas como monumentos o tradiciones, el patrimonio ___ se refiere a los elementos de la naturaleza, como parques nacionales y paisajes sin intervención humana significativa."

explicacion: |
  El patrimonio natural está constituido por formaciones físicas y biológicas, mientras que el cultural es el resultado de la actividad humana.
```

### 17 — Atractivos de un destino cultural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["atractivos", "cultura"]

opciones_explicitas: ["Paisajes montañosos", "Festivales folclóricos", "Playas tropicales", "Glaciares"]
respuesta: "Festivales folclóricos"
tipo: "mc"

enunciado: "¿Cuál de los siguientes elementos es un ejemplo de patrimonio turístico cultural que distingue a un destino por su tradición viva?"

explicacion: |
  Los festivales folclóricos son expresiones de la cultura inmaterial, a diferencia de los paisajes o glaciares que son patrimonio natural.
```

### 18 — Clasificación de monumentos

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["clasificacion", "monumentos"]

respuesta: verdadero
tipo: "vf"

enunciado: "Un monumento histórico, como una catedral antigua o una pirámide, se clasifica dentro del patrimonio turístico cultural."

explicacion: |
  Es verdadero, ya que los monumentos son creaciones humanas que poseen un valor histórico o estético para la sociedad.
```

### 19 — Elementos del patrimonio natural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["componentes", "naturaleza"]

variables:
  escenario: uno_de([["Reserva de la Biosfera", "Protección de la biodiversidad"], ["Cataratas del Iguazú", "Formaciones geológicas naturales"], ["Arrecife de coral", "Ecosistemas marinos"]])

respuesta: escenario[1]
tipo: "mc"

opciones_explicitas: [escenario[0], escenario[1], "Museos de antropología", "Arquitectura colonial"]

enunciado: "Si un turista visita un destino cuyo principal atractivo es la {escenario[0]}, está consumiendo principalmente:"

explicacion: |
  La {escenario[0]} es un ejemplo de patrimonio natural debido a su origen biológico y geológico.
```

### 20 — Procesos de conservación patrimonial

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["gestion", "conservacion"]

tipo: ordenar
opciones_explicitas: ["Identificación del recurso", "Planificación de la infraestructura", "Promoción y comercialización", "Evaluación del impacto turístico"]
respuesta_orden: ["Identificación del recurso", "Planificación de la infraestructura", "Promoción y comercialización", "Evaluación del impacto turístico"]

enunciado: "Ordena cronológicamente las etapas lógicas para la gestión de un nuevo producto turístico basado en patrimonio:"

explicacion: |
  Para gestionar un destino se debe primero identificar el recurso, luego planificar su uso, después promocionarlo y finalmente evaluar el impacto generado.
```

### 21 — Clasificación de patrimonio

```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenario_datos: [["Cataratas del Iguazú", "natural"], ["Machu Picchu", "cultural"], ["Fiesta de la Vendimia", "cultural"]]

enunciado: "El sitio seleccionado es {escenario_datos[escenario_idx][0]}. Por su origen y características, este sitio se clasifica como patrimonio ________."

opciones_explicitas: ["natural", "cultural"]
respuesta: escenario_datos[escenario_idx][1]
tipo: mc

explicacion: |
  El patrimonio natural está compuesto por formaciones físicas y biológicas, mientras que el cultural incluye creaciones humanas como monumentos o tradiciones.
```

### 22 — Atractivos de un destino

```
metadata:
  materia: "turismo"
  tema: "atractivos_turisticos"
  nivel: "intermedio"
  tags: ["atractivos", "valoracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un monumento histórico en ruinas", "cultural"], ["un parque nacional con fauna endémica", "natural"]]

enunciado: "Un turista visita {casos[caso_idx][0]}. Este elemento es un ejemplo de patrimonio ________."

respuestas_validas:
  - "cultural"
  - "natural"
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  La distinción depende de si el elemento fue creado por la naturaleza o por la acción humana a lo largo del tiempo.
```

### 23 — Componentes del patrimonio cultural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_cultural"
  nivel: "basico"
  tags: ["tradiciones", "monumentos"]

enunciado: "¿El patrimonio cultural incluye únicamente monumentos físicos o también tradiciones y costumbres?"

respuesta: verdadero
tipo: vf

explicacion: |
  El patrimonio cultural es amplio: incluye tanto el patrimonio material (edificios, objetos) como el inmaterial (música, danzas, gastronomía).
```

### 24 — Elementos del paisaje natural

```
metadata:
  materia: "turismo"
  tema: "patrimonio_natural"
  nivel: "basico"
  tags: ["paisajes", "reservas"]

enunciado: "Identifica la opción que corresponde a un componente del patrimonio natural:"

opciones_explicitas: ["Un templo antiguo", "Un arrecife de coral", "Una danza folclórica"]
respuesta: "Un arrecife de coral"
tipo: mc

explicacion: |
  Los arrecifes son formaciones biológicas naturales, a diferencia de los templos (humanos) o las danzas (culturales).
```

### 25 — Secuencia de gestión turística

```
metadata:
  materia: "turismo"
  tema: "gestion_patrimonial"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

enunciado: "Ordene los pasos para la valoración de un nuevo sitio turístico:"

opciones_explicitas: ["Identificación del recurso", "Evaluación del estado de conservación", "Diseño de la infraestructura", "Promoción del destino"]
respuesta_orden: ["Identificación del recurso", "Evaluación del estado de conservación", "Diseño de la infraestructura", "Promoción del destino"]
tipo: ordenar

explicacion: |
  Antes de promocionar un destino, se debe identificar el recurso, verificar si está en condiciones de recibir turistas y planificar la infraestructura necesaria.
```
