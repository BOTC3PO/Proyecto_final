### 1 — El concepto de Derecho
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["normas", "convivencia", "estado"]

respuesta: "normas escritas y obligatorias"
tipo: completar
respuestas_validas: ["normas escritas y obligatorias"]

enunciado: "El Derecho se define como el conjunto de ___ que regulan la conducta humana en sociedad para organizar la convivencia."

explicacion: |
  El Derecho es un sistema de normas que el Estado establece para garantizar el orden y la convivencia social.
```

### 2 — El Código de Hammurabi
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["historia", "hammurabi", "babilonia"]

variables:
  escenario: uno_de([
    ["Código de Hammurabi", "Babilonia"],
    ["Código de Ur-Nammu", "Sumeria"],
    ["Ley de las XII Tablas", "Roma"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Babilonia", "Sumeria", "Roma", "Egipto"]

enunciado: "El Código de Hammurabi es uno de los primeros conjuntos de leyes escritas de la historia y pertenece a la civilización de {escenario[0]}."

explicacion: |
  El Código de Hammurabi fue creado en la antigua Babilonia y es uno de los pilares del derecho histórico.
```

### 3 — Función del Estado
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["estado", "poder", "normas"]

respuesta: "organizar la convivencia"
tipo: mc
opciones_explicitas: ["imponer el miedo", "organizar la convivencia", "eliminar la libertad", "controlar la economía"]

enunciado: "Desde la perspectiva del Estado de Derecho, el objetivo principal de la creación de leyes es ___."

explicacion: |
  El Estado utiliza el derecho no solo para castigar, sino para establecer reglas que permitan la convivencia armónica entre los ciudadanos.
```

### 4 — Características de las normas
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["caracteristicas", "normas"]

respuesta: "obligatorias"
tipo: mc
opciones_explicitas: ["opcionales", "sugeridas", "obligatorias", "deseables"]

enunciado: "Para que una norma sea considerada parte del Derecho y sea aplicada por el Estado, debe poseer un carácter ___."

explicacion: |
  La obligatoriedad es la característica que distingue a la norma jurídica de una norma moral o social.
```

### 5 — Evolución de la organización social
```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["orden", "caos", "derecho"]

respuesta: ["caos", "normas escritas", "orden social"]
tipo: ordenar
opciones_explicitas: ["caos", "normas escritas", "orden social"]

enunciado: "El paso de una sociedad sin leyes a una organizada por el Estado sigue este proceso lógico:"

pasos:
  - "Estado de naturaleza o caos inicial"
  - "Creación de normas escritas"
  - "Establecimiento del orden social"

explicacion: |
  La transición hacia el Estado de Derecho implica pasar de la arbitrariedad (caos) a la previsibilidad mediante leyes escritas que aseguran el orden.
```