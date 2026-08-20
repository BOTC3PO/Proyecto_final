### 1 — Clasificación de patrimonio
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

### 2 — Elementos del patrimonio cultural
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "basico"
  tags: ["patrimonio_cultural", "tradiciones"]

respuestas_validas: ["tradiciones", "monumentos", "gastronomía"]

enunciado: "El patrimonio cultural se divide en elementos tangibles e intangibles. Los ___ son elementos tangibles (como edificios históricos), mientras que las ___ son elementos intangibles (como las danzas típicas)."

respuesta: ["monumentos", "tradiciones"]
tipo: "completar"

explicacion: |
  El patrimonio cultural tangible incluye objetos físicos como monumentos y arquitectura; el intangible incluye las tradiciones, la música y la gastronomía.
```

### 3 — Atractivos de un destino
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["atractivos", "valoracion"]

variables:
  escenario_idx: uno_de([0, 1])

datos:
  - ["El Gran Cañón ofrece vistas espectaculares de la erosión geológica.", "Paisaje natural"]
  - ["El Coliseo Romano muestra la arquitectura de la antigua civilización.", "Monumento cultural"]

enunciado: "Analizando el caso: {datos[escenario_idx][0]}, el principal factor de atracción es un: ___."

opciones_explicitas: ["Paisaje natural", "Monumento cultural", "Tradición oral"]

respuesta: datos[escenario_idx][1]
tipo: "mc"

explicacion: |
  La capacidad de atracción depende de la naturaleza del recurso: si es un proceso geológico es natural, si es una construcción humana es cultural.
```

### 4 — Secuencia de gestión turística
```
metadata:
  materia: "turismo"
  tema: "patrimonio_turistico_natural_y_cultural"
  nivel: "intermedio"
  tags: ["gestion", "ordenar"]

opciones_explicitas: ["Identificar el recurso", "Evaluar su valor", "Diseñar la infraestructura", "Promocionar el destino"]

enunciado: "Para convertir un recurso natural en un producto turístico sostenible, se deben seguir estos pasos en orden:"

respuesta: ["Identificar el recurso", "Evaluar su valor", "Diseñar la infraestructura", "Promocionar el destino"]
tipo: "ordenar"

explicacion: |
  Primero se identifica qué hay, luego se analiza su valor para decidir cómo protegerlo, se crea la infraestructura necesaria y finalmente se da a conocer.
```

### 5 — Verdad o Falso: Patrimonio y Desarrollo
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