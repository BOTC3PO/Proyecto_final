### 1 — Identificación de niveles de fidelidad
```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

enunciado: "El esquema básico de una interfaz, que se centra en la estructura y la disposición de los elementos sin considerar el diseño visual, se denomina ___."

respuestas_validas: ["wireframe"]
tipo: completar

explicacion: |
  El wireframe es el esqueleto de la interfaz. Su objetivo es definir la jerarquía de la información y la arquitectura de la página sin distracciones estéticas.
```

### 2 — Diferencia entre Wireframe y Mockup
```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["mockup", "diseño_visual"]

variables:
  es_visual: true

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: mc

enunciado: "Un mockup es una representación de alta fidelidad que incluye colores, tipografías e imágenes, representando el diseño visual final."

explicacion: |
  Correcto. A diferencia del wireframe, el mockup se enfoca en la estética y la identidad visual de la interfaz.
```

### 3 — El objetivo del prototipo interactivo
```
metadata:
  materia: "diseño"
  tema: "prototipado_interactivo"
  nivel: "basico"
  tags: ["interactividad", "flujo"]

opciones_explicitas: ["Definir colores", "Definir la estructura", "Simular la navegación y el flujo"]
respuesta: "Simular la navegación y el flujo"
tipo: mc

enunciado: "¿Cuál es la función principal de un prototipo interactivo?"

explicacion: |
  El prototipo interactivo permite probar la experiencia de usuario (UX) mediante la simulación de clics, transiciones y flujos de navegación.
```

### 4 — Orden de las etapas de diseño
```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "etapas"]

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuesta: ["Wireframe", "Mockup", "Prototipo Interactivo"]
tipo: ordenar

enunciado: "Ordena las etapas de diseño de una interfaz desde la fase más abstracta hasta la más funcional:"

explicacion: |
  El proceso estándar comienza con la estructura (Wireframe), sigue con la estética (Mockup) y culmina con la interactividad (Prototipo).
```

### 5 — Verificación de conceptos
```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un boceto en blanco y negro de una app", "wireframe"],
    ["Una pantalla con colores y fotos finales", "mockup"]
  ]

enunciado: "Si estamos trabajando en {escenarios[escenario_idx][0]}, estamos creando un ___."

respuestas_validas: ["wireframe", "mockup"]
tipo: completar

explicacion: |
  Dependiendo de la fidelidad visual, el término cambia: wireframe para estructura y mockup para diseño visual.
```