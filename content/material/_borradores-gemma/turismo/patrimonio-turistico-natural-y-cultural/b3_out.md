### 1 — Clasificación de patrimonio
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico"
  nivel: "basico"
  tags: ["clasificacion", "patrimonio_natural"]

enunciado: "Un conjunto de cuevas con pinturas rupestres y un sistema de cascadas adyacente se clasifican como patrimonio _______."

opciones_explicitas: ["natural", "cultural", "mixto"]
respuestas_validas: ["mixto"]
respuesta: "mixto"
tipo: "completar"

explicacion: |
  Cuando un sitio integra elementos naturales (como las cascadas) con elementos culturales (como las pinturas rupestres), se denomina patrimonio mixto.
```

### 2 — Atractivos tangibles e intangibles
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

### 3 — Elementos del atractivo turístico
```
metadata:
  materia: "turismo"
  tema: "atractivos_turisticos"
  nivel: "intermedio"
  tags: ["atractivos", "naturaleza"]

variables:
  escenario: uno_de([["un bosque virgen", "un monumento histórico"], ["un volcán activo", "una catedral"]])

enunciado: "Un {escenario[0]} es un ejemplo de patrimonio natural, mientras que {escenario[1]} es un ejemplo de patrimonio cultural."

respuesta: escenario[0] == "un bosque virgen"
tipo: "mc"
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Los elementos naturales son aquellos creados por la dinámica de la Tierra, mientras que los culturales son producto de la acción humana.
```

### 4 — Jerarquía de la gestión patrimonial
```
metadata:
  materia: "turismo"
  tema: "gestion_patrimonial"
  nivel: "avanzado"
  tags: ["orden", "proteccion"]

enunciado: "Ordena los pasos lógicos para la puesta en valor de un sitio patrimonial cultural:"

opciones_explicitas: ["Identificación del bien", "Diagnóstico de estado", "Plan de gestión", "Implementación de medidas"]
respuesta: ["Identificación del bien", "Diagnóstico de estado", "Plan de gestión", "Implementación de medidas"]
tipo: "ordenar"

explicacion: |
  Para gestionar un patrimonio no basta con encontrarlo; se debe diagnosticar su estado actual y planificar cómo protegerlo y difundirlo antes de actuar.
```

### 5 — Confusión común: Paisaje vs. Patrimonio
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