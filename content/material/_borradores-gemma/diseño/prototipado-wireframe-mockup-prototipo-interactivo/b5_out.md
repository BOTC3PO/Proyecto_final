### 1 — Identificación de entregable
```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un esquema en blanco y negro para definir la estructura", "un diseño visual de alta fidelidad con colores y tipografía", "una simulación navegable con transiciones entre pantallas"], ["un dibujo de cajas para la arquitectura de información", "una representación visual detallada de la interfaz final", "un modelo funcional que permite interactuar con los botones"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["un esquema en blanco y negro para definir la estructura", "un diseño visual de alta fidelidad con colores y tipografía", "una simulación navegable con transiciones entre pantallas"]

enunciado: "Si un diseñador está trabajando únicamente en la disposición de los elementos y la jerarquía de la información sin preocuparse por el color o la estética, está creando un {escenarios[escenario_idx][0]}."

explicacion: |
  El wireframe es la etapa inicial de baja fidelidad que se enfoca en la estructura y funcionalidad, dejando de lado el estilo visual.
```

### 2 — El paso siguiente
```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "basico"
  tags: ["workflow", "mockup"]

variables:
  paso_idx: uno_de([0, 1])
  flujo: [["mockup", "wireframe"], ["prototipo", "mockup"]]

respuesta: flujo[paso_idx][0]
tipo: completar
respuestas_validas: ["mockup", "prototipo"]

enunciado: "Si ya se ha finalizado un wireframe, el siguiente paso lógico para definir la identidad visual (colores, imágenes y tipografía) es crear un ___."

explicacion: |
  El mockup es el paso intermedio donde se aplica el diseño visual sobre la estructura definida previamente en el wireframe.
```

### 3 — Verdad o Falso: Interactividad
```
metadata:
  materia: "diseño"
  tema: "prototipado_interactivo"
  nivel: "basico"
  tags: ["interactividad", "prototipo"]

respuesta: falso
tipo: vf

enunciado: "Un mockup de alta fidelidad permite al usuario realizar flujos de navegación complejos y probar la lógica de la aplicación como si fuera el producto final."

explicacion: |
  Falso. El mockup es una representación estática (visual). La capacidad de navegación y respuesta a la interacción es característica del prototipo interactivo.
```

### 4 — Orden lógico de diseño
```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta: ["Wireframe", "Mockup", "Prototipo Interactivo"]
tipo: ordenar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Ordena las etapas de diseño de interfaces desde la fase de mayor abstracción (baja fidelidad) hasta la de mayor fidelidad funcional:"

explicacion: |
  El proceso estándar comienza con la estructura (wireframe), sigue con el aspecto visual (mockup) y culmina con la experiencia de uso (prototipo).
```

### 5 — El objetivo del prototipo
```
metadata:
  materia: "diseño"
  tema: "testeo_usuario"
  nivel: "intermedio"
  tags: ["testeo", "prototipo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["probar la navegación y flujos", "probar la paleta de colores"], ["validar la arquitectura de contenido", "validar la estética visual"]]

respuesta: casos[caso_idx][0]
tipo: mc
opciones_explicitas: ["probar la navegación y flujos", "probar la estética visual"]

enunciado: "En un proceso de testeo con usuarios, si el objetivo principal es verificar si los botones llevan a la pantalla correcta, se debe utilizar un {casos[caso_idx][0]}."

explicacion: |
  Para validar flujos y navegación, es indispensable un prototipo interactivo que simule el comportamiento real de la interfaz.
```