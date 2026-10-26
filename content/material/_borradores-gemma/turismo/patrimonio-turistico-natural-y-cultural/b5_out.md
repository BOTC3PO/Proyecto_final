### 1 — Clasificación de patrimonio
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

### 2 — Atractivos de un destino
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

respuestas_validas: ["cultural", "natural"]
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  La distinción depende de si el elemento fue creado por la naturaleza o por la acción humana a lo largo del tiempo.
```

### 3 — Componentes del patrimonio cultural
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

### 4 — Elementos del paisaje natural
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

### 5 — Secuencia de gestión turística
```
metadata:
  materia: "turismo"
  tema: "gestion_patrimonial"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

enunciado: "Ordene los pasos para la valoración de un nuevo sitio turístico:"

opciones_explicitas: ["Identificación del recurso", "Evaluación del estado de conservación", "Diseño de la infraestructura", "Promoción del destino"]
respuesta: ["Identificación del recurso", "Evaluación del estado de conservación", "Diseño de la infraestructura", "Promoción del destino"]
tipo: ordenar

explicacion: |
  Antes de promocionar un destino, se debe identificar el recurso, verificar si está en condiciones de recibir turistas y planificar la infraestructura necesaria.
```