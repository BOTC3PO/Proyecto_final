### 1 — Definición de diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["definicion", "etapas_proyecto"]

respuesta: "diseño conceptual"
tipo: completar
respuestas_validas: ["diseño conceptual", "diseño conceptual"]

enunciado: "La etapa en la que se establece la idea general de la solución, definiendo el enfoque y los principios básicos antes de entrar en detalles técnicos profundos, se denomina ___."

explicacion: |
  El diseño conceptual es la fase donde se abstrae el problema para proponer una solución lógica y funcional sin considerar aún materiales específicos o tolerancias mecánicas.
```

### 2 — Objetivo del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["objetivos", "metodologia"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["A", "B", "C", "D"]

enunciado: "Según el enfoque de diseño seleccionado, ¿cuál es el objetivo principal de esta fase? {datos[idx][0]}"

variables:
  datos: [
    ["Definir la arquitectura general y la funcionalidad de la solución.", "A"],
    ["Realizar el modelado matemático detallado de cada componente.", "B"],
    ["Seleccionar los proveedores de materia prima.", "C"],
    ["Realizar pruebas de fatiga en prototipos finales.", "D"]
  ]

explicacion: |
  El diseño conceptual busca la arquitectura funcional. El modelado detallado, la selección de proveedores y las pruebas de fatiga pertenecen a etapas posteriores (diseño detallado y validación).
```

### 3 — Verdad o Falso: Abstracción
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["abstraccion", "conceptos"]

respuesta: verdadero

tipo: vf

enunciado: "En el diseño conceptual, la abstracción es una herramienta clave para simplificar el problema y centrarse en la lógica de la solución en lugar de en los detalles constructivos."

explicacion: |
  Correcto. La abstracción permite ignorar detalles irrelevantes en esta etapa para asegurar que la solución propuesta realmente resuelva el problema fundamental.
```

### 4 — Fases del proceso de diseño
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["secuencia", "metodologia"]

respuesta: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación"]
tipo: ordenar

opciones_explicitas: ["Diseño conceptual", "Diseño detallado", "Prototipado y validación", "Selección de materiales de descarte"]

enunciado: "Ordene las siguientes etapas de un proceso de desarrollo de ingeniería desde la concepción hasta la validación:"

explicacion: |
  El flujo lógico comienza con la idea (conceptual), sigue con el detalle técnico (detallado) y termina con la verificación de la solución (prototipado).
```

### 5 — Elementos del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["componentes", "requisitos"]

respuesta: "requisitos"
tipo: completar
respuestas_validas: ["requisitos", "requisitos"]

enunciado: "El diseño conceptual debe basarse primordialmente en los ___ del cliente y las restricciones del problema."

explicacion: |
  Los requisitos son la base de cualquier diseño; si el diseño conceptual no satisface los requisitos, el proyecto fallará independientemente de qué tan buen detalle técnico tenga después.
```