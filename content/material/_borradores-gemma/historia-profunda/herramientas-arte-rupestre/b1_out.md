### 1 — Evolución de la talla lítica
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["paleolitico", "tecnologia"]

variables:
  escenario: uno_de([
    ["lasca", "fragmento desprendido de un núcleo"],
    ["bifaz", "herramienta tallada por ambas caras"],
    ["punta", "herramienta especializada para perforar"]
  ])

enunciado: "En la industria lítica, un/a {escenario[0]} se define como un/a ___."

respuestas_validas: ["fragmento desprendido de un núcleo"]
tipo: completar

explicacion: |
  En la tecnología de la talla, las lascas son los fragmentos que se desprenden de una piedra núcleo al ser golpeada, siendo fundamentales para la producción de herramientas.
```

### 2 — Cronología de la industria lítica
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["paleolitico", "ordenar"]

opciones_explicitas: ["Olduvayense", "Achelense", "Musteriense"]

enunciado: "Ordene las siguientes tecnologías de la más antigua a la más reciente:"

tipo: ordenar
respuesta: ["Olduvayense", "Achelense", "Musteriense"]

explicacion: |
  La secuencia evolutiva comienza con el Olduvayense (choppers simples), sigue con el Achelense (bifaces elaborados) y continúa con el Musteriense (técnicas de lasca más complejas).
```

### 3 — El Bifaz y su complejidad
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["tecnologia", "evolucion"]

enunciado: "El bifaz es una herramienta característica del Paleolítico Inferior que se diferencia de las lascas simples por su técnica de fabricación. ¿Cuál es su principal característica?"

opciones_explicitas: ["Es tallado por ambas caras para lograr simetría", "Es un fragmento accidental de una piedra", "Se fabrica únicamente mediante percusión blanda"]
tipo: mc
respuesta: "Es tallado por ambas caras para lograr simetría"

explicacion: |
  El bifaz representa un salto cognitivo importante, ya que el homínido debe prever la forma final de la herramienta en la piedra antes de empezar a tallar ambas caras.
```

### 4 — Especialización de herramientas
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["especializacion", "paleolitico"]

variables:
  tipo_herramienta: uno_de([
    ["raspador", "usado para tratar pieles"],
    ["buril", "usado para grabar hueso o madera"],
    ["punzón", "usado para perforar cuero"]
  ])

enunciado: "Un/a {tipo_herramienta[0]} es una herramienta especializada cuya función principal es ___."

respuestas_validas: ["usado para tratar pieles", "usado para grabar hueso o madera", "usado para perforar cuero"]
tipo: completar

explicacion: |
  La especialización de las herramientas (como el buril o el raspador) indica una mayor complejidad en la organización social y una explotación más eficiente de los recursos naturales.
```

### 5 — Determinación de la técnica
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["tecnologia", "calculo"]

variables:
  caso: uno_de([
    [12, "percusión"],
    [45, "presión"],
    [88, "percusión"]
  ])

enunciado: "Si un arqueólogo encuentra un conjunto de {caso[0]} herramientas que fueron producidas mediante la técnica de {caso[1]}, ¿cuál es la técnica utilizada?"

tipo: mc
opciones_explicitas: ["percusión", "presión"]
respuesta: "percusión"

explicacion: |
  La técnica de presión permite obtener lascas muy finas y controladas, mientras que la percusión (especialmente con percutor duro) es la forma más primaria de obtener lascas.
```