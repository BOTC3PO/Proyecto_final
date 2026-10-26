### 1 — El proceso de diseño de una App
```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["ui", "ux", "workflow"]

tipo: ordenar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuesta: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Para diseñar una aplicación móvil desde cero, un equipo de UX/UI debe seguir un flujo de fidelidad creciente. Ordena las etapas de menor a mayor fidelidad visual y funcional."

explicacion: |
  El proceso estándar comienza con un Wireframe (esquema de estructura), sigue con un Mockup (representación visual estática con color y tipografía) y finaliza con un Prototipo Interactivo (simulación de navegación).
```

### 2 — Identificación de fidelidad visual
```
metadata:
  materia: "diseño"
  tema: "mockup_definition"
  nivel: "basico"
  tags: ["mockup", "visual"]

tipo: mc
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Se ha creado una representación de la pantalla de inicio que incluye la paleta de colores corporativa, la tipografía final y las imágenes reales, pero no permite hacer clic en los botones para navegar. ¿Qué tipo de artefacto es?"

respuesta: "Mockup"

explicacion: |
  El Mockup se caracteriza por su alta fidelidad visual (colores, imágenes, estilos), pero es estático; no tiene la interactividad de un prototipo.
```

### 3 — El esquema estructural
```
metadata:
  materia: "diseño"
  tema: "wireframe_concept"
  nivel: "basico"
  tags: ["wireframe", "estructura"]

tipo: completar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuestas_validas: ["Wireframe"]

enunciado: "Un diseño que se centra exclusivamente en la disposición de los elementos (layout) y la jerarquía de la información, utilizando cajas y líneas sin considerar el color o la estética, se denomina ___."

explicacion: |
  El Wireframe es un esqueleto de baja fidelidad que sirve para validar la arquitectura de la información antes de invertir tiempo en el diseño visual.
```

### 4 — Verdad o Falso: Interactividad
```
metadata:
  materia: "diseño"
  tema: "prototipo_interactivo"
  nivel: "basico"
  tags: ["interactividad", "UX"]

tipo: vf

enunciado: "Un prototipo interactivo es aquel que permite al usuario simular la experiencia de uso de la aplicación, permitiendo transiciones entre pantallas y flujos de navegación."

respuesta: falso

explicacion: |
  La afirmación es falsa porque lo descrito es la definición de un prototipo interactivo. (Nota: En este caso, la pregunta se plantea como una afirmación para evaluar si el usuario comprende que la descripción pertenece al prototipo, no al mockup o wireframe).
```

### 5 — Análisis de un caso de estudio
```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["caso_practico", "workflow"]

variables:
  escenarios: [
    ["Wireframe", "Esquema de cajas grises"],
    ["Mockup", "Diseño visual de alta fidelidad"],
    ["Prototipo Interactivo", "Simulación de navegación"]
  ]
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Un diseñador está trabajando en el escenario: {escenarios[idx][0]}. El objetivo de este entregable es: {escenarios[idx][1]}."

respuesta: {escenarios[idx][1]}

explicacion: |
  El sistema ha seleccionado un escenario aleatorio para evaluar si comprendes la relación entre el nombre del artefacto y su propósito funcional en el proceso de diseño.
```