### 1 — Diferencia con el diseño detallado
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "fases_proyecto"]

respuesta: "diseño detallado"
tipo: completar
respuestas_validas: ["diseño detallado", "diseño de detalle", "diseño técnico"]

enunciado: "Mientras que el diseño conceptual se centra en la idea general y la viabilidad de la solución, el ___ se enfoca en las especificaciones técnicas precisas y la selección de materiales exactos."

explicacion: |
  El diseño conceptual es la fase de abstracción donde se define el 'qué' y el 'por qué', mientras que el diseño detallado define el 'cómo' técnico para la fabricación o implementación.
```

### 2 — El objetivo del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivo", "proposito"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un sistema de filtración de agua", "identificar la arquitectura básica"],
    ["un nuevo modelo de smartphone", "definir la experiencia de usuario y funciones clave"]
  ]

respuesta: uno_de(escenarios)[escenario_idx][1]
tipo: mc
opciones_explicitas: ["definir la arquitectura técnica final", "identificar la arquitectura básica", "definir la experiencia de usuario y funciones clave", "seleccionar proveedores de componentes"]

enunciado: "En el caso de {uno_de(escenarios)[escenario_idx][0]}, el objetivo principal del diseño conceptual es ___."

explicacion: |
  El diseño conceptual no busca detalles de implementación, sino establecer la estructura lógica y los principios fundamentales que guiarán la solución.
```

### 3 — ¿Es el diseño conceptual un proceso iterativo?
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["naturaleza", "proceso"]

respuesta: verdadero
tipo: vf

enunciado: "El diseño conceptual es un proceso lineal y único que se completa antes de pasar a cualquier otra fase del proyecto."

explicacion: |
  Falso. El diseño conceptual es altamente iterativo; las ideas se refinan, se descartan o se modifican constantemente a medida que se comprenden mejor las restricciones del problema.
```

### 4 — Elementos del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["componentes", "jerarquia"]

respuesta: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]
tipo: ordenar
opciones_explicitas: ["Identificación del problema", "Generación de ideas", "Selección de la mejor alternativa", "Definición de la arquitectura"]

enunciado: "Ordene cronológicamente las etapas de un proceso de diseño conceptual estándar:"

explicacion: |
  Un proceso lógico comienza entendiendo la necesidad (problema), explorando soluciones (ideas), eligiendo la más viable (selección) y estructurando la solución (arquitectura).
```

### 5 — Comparación con el prototipado
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["prototipado", "comparacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["un motor de combustión", "un software de gestión"],
    ["un puente colgante", "una aplicación móvil"]
  ]

respuesta: "el prototipo es una manifestación física o funcional de la idea"
tipo: completar
respuestas_validas: ["el prototipo es una manifestación física o funcional de la idea", "el prototipo es un dibujo"]

enunciado: "Si el diseño conceptual es la representación mental o esquemática de la solución para {uno_de(casos)[caso_idx][0]}, entonces ___."

explicacion: |
  El diseño conceptual es el concepto abstracto; el prototipo es la materialización (física o digital) para validar si ese concepto funciona en la realidad.
```