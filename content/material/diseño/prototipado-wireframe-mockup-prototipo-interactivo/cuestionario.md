# Diseño — Prototipado wireframe mockup prototipo interactivo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Identificación de niveles de fidelidad

```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

enunciado: "El esquema básico de una interfaz, que se centra en la estructura y la disposición de los elementos sin considerar el diseño visual, se denomina ___."

respuestas_validas:
  - "wireframe"
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

respuesta: verdadero
tipo: vf

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
respuesta_orden: ["Wireframe", "Mockup", "Prototipo Interactivo"]
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
  escenarios: [["Un boceto en blanco y negro de una app", "wireframe"], ["Una pantalla con colores y fotos finales", "mockup"]]

enunciado: "Si estamos trabajando en {escenarios[escenario_idx][0]}, estamos creando un ___."

respuestas_validas:
  - "wireframe"
  - "mockup"
tipo: completar

explicacion: |
  Dependiendo de la fidelidad visual, el término cambia: wireframe para estructura y mockup para diseño visual.
```

### 6 — El proceso de diseño de una App

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["ui", "ux", "workflow"]

tipo: ordenar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuesta_orden: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Para diseñar una aplicación móvil desde cero, un equipo de UX/UI debe seguir un flujo de fidelidad creciente. Ordena las etapas de menor a mayor fidelidad visual y funcional."

explicacion: |
  El proceso estándar comienza con un Wireframe (esquema de estructura), sigue con un Mockup (representación visual estática con color y tipografía) y finaliza con un Prototipo Interactivo (simulación de navegación).
```

### 7 — Identificación de fidelidad visual

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

### 8 — El esquema estructural

```
metadata:
  materia: "diseño"
  tema: "wireframe_concept"
  nivel: "basico"
  tags: ["wireframe", "estructura"]

tipo: completar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]
respuestas_validas:
  - "Wireframe"

enunciado: "Un diseño que se centra exclusivamente en la disposición de los elementos (layout) y la jerarquía de la información, utilizando cajas y líneas sin considerar el color o la estética, se denomina ___."

explicacion: |
  El Wireframe es un esqueleto de baja fidelidad que sirve para validar la arquitectura de la información antes de invertir tiempo en el diseño visual.
```

### 9 — Verdad o Falso: Interactividad

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

### 10 — Análisis de un caso de estudio

```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["caso_practico", "workflow"]

variables:
  escenarios: [["Wireframe", "Esquema de cajas grises"], ["Mockup", "Diseño visual de alta fidelidad"], ["Prototipo Interactivo", "Simulación de navegación"]]
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Un diseñador necesita crear un entregable cuyo objetivo es: {escenarios[idx][1]}. ¿Qué tipo de artefacto es?"

respuesta: escenarios[idx][0]

explicacion: |
  El sistema ha seleccionado un escenario aleatorio para evaluar si comprendes la relación entre el nombre del artefacto y su propósito funcional en el proceso de diseño.
```

### 11 — El propósito del Wireframe

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["wireframe", "estructura"]

respuesta: "estructura"
tipo: mc
opciones_explicitas: ["estética", "estructura", "interacción", "color"]

enunciado: "El objetivo principal de un wireframe es definir la ___ de la interfaz, sin preocuparse por la estética o el color."

explicacion: |
  El wireframe es un esquema de baja fidelidad que se centra en la disposición de los elementos y la jerarquía de la información, no en el diseño visual.
```

### 12 — Confusión entre Mockup y Prototipo

```
metadata:
  materia: "diseño"
  tema: "prototipado_diferencias"
  nivel: "intermedio"
  tags: ["mockup", "prototipo"]

tipo: mc
opciones_explicitas: ["visual, estático", "funcional, interactivo", "estructural, esquemático", "animado, dinámico"]

respuesta: "visual, estático"

enunciado: "Si un diseñador presenta un diseño con colores, tipografías y sombras finales, pero no se puede hacer clic en ningún elemento para navegar, está entregando un: ___."

explicacion: |
  Un mockup es una representación visual de alta fidelidad (estática), mientras que un prototipo interactivo permite simular la navegación y el flujo del usuario.
```

### 13 — Fidelidad del Prototipo

```
metadata:
  materia: "diseño"
  tema: "prototipado_interactividad"
  nivel: "basico"
  tags: ["prototipo", "interaccion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un prototipo interactivo tiene como función principal permitir la validación de flujos y la navegación entre pantallas?"

explicacion: |
  Correcto. La interactividad es la característica que distingue al prototipo de un mockup estático, permitiendo probar la experiencia de uso.
```

### 14 — El proceso de diseño

```
metadata:
  materia: "diseño"
  tema: "prototipado_flujo_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta_orden: ["Wireframe", "Mockup", "Prototipo"]
tipo: ordenar

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo"]

enunciado: "Ordena las etapas de diseño de baja a alta fidelidad para un producto digital:"

explicacion: |
  El flujo estándar comienza con la estructura (Wireframe), sigue con la apariencia visual (Mockup) y finaliza con la simulación de uso (Prototipo).
```

### 15 — El error de la "Falsa Fidelidad"

```
metadata:
  materia: "diseño"
  tema: "prototipado_errores_comunes"
  nivel: "avanzado"
  tags: ["error", "mockup"]

variables:
  caso: uno_de([["A", "estético"], ["B", "funcional"]])

respuesta: caso[0]
tipo: completar
respuestas_validas:
  - "estético"
  - "funcional"

enunciado: "Un error común es saltar directamente al mockup, enfocándose demasiado en lo ___ y descuidando la lógica de navegación que debería definirse en el wireframe."

explicacion: |
  Saltar la etapa de wireframing para ir directo al mockup suele llevar a errores de arquitectura de información, ya que se gasta mucho tiempo en detalles visuales de una estructura que aún no es sólida.
```

### 16 — El nivel de fidelidad

```
metadata:
  materia: "diseño"
  tema: "prototipado_fidelidad"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

tipo: mc
opciones_explicitas: ["Baja fidelidad", "Media fidelidad", "Alta fidelidad", "Fidelidad extrema"]

enunciado: "Un wireframe se distingue de un mockup principalmente por su nivel de fidelidad, siendo este de tipo ___."

respuesta: "Baja fidelidad"

explicacion: |
  El wireframe es un esquema estructural básico (low-fidelity) que no incluye elementos visuales complejos, a diferencia del mockup que ya presenta el diseño visual.
```

### 17 — La esencia del prototipo interactivo

```
metadata:
  materia: "diseño"
  tema: "prototipado_interaccion"
  nivel: "basico"
  tags: ["prototipo", "interactividad"]

tipo: vf
enunciado: "A diferencia de un mockup estático, un prototipo interactivo permite simular la navegación y el flujo de un usuario. ¿Es el prototipo interactivo un elemento que permite probar la usabilidad mediante la simulación de clics?"

respuesta: verdadero

explicacion: |
  Exacto. La principal distinción del prototipo interactivo es la capacidad de simular la interacción y el flujo de navegación, algo que el mockup (estático) no puede hacer.
```

### 18 — Evolución del diseño

```
metadata:
  materia: "diseño"
  tema: "flujo_de_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "workflow"]

variables:
  secuencia: ["Wireframe", "Mockup", "Prototipo interactivo"]
  idx: uno_de([0, 1, 2])

tipo: ordenar

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo interactivo"]

enunciado: "Ordena las etapas de diseño de una interfaz desde la definición estructural hasta la simulación funcional:"

respuesta_orden: ["Wireframe", "Mockup", "Prototipo interactivo"]

explicacion: |
  El proceso estándar comienza con la estructura (Wireframe), sigue con la estética (Mockup) y finaliza con la interactividad (Prototipo).
```

### 19 — Elementos visuales

```
metadata:
  materia: "diseño"
  tema: "mockup_vs_wireframe"
  nivel: "basico"
  tags: ["mockup", "estetica"]

tipo: completar

enunciado: "Mientras que el wireframe se centra en la arquitectura de la información, el ___ se enfoca en la identidad visual, incluyendo colores, tipografías e imágenes."

respuestas_validas:
  - "mockup"

respuesta: "mockup"

explicacion: |
  El mockup es la representación visual (estética) del producto, mientras que el wireframe es el esqueleto funcional.
```

### 20 — Propósito de uso

```
metadata:
  materia: "diseño"
  tema: "validacion_usuario"
  nivel: "avanzado"
  tags: ["testeo", "prototipo"]

tipo: mc
opciones_explicitas: ["Validar la arquitectura de información", "Validar la estética de colores", "Validar la experiencia de navegación y flujo", "Validar la impresión de materiales"]

enunciado: "Si el objetivo principal es realizar un testeo de usabilidad para observar cómo un usuario navega entre pantallas, ¿qué artefacto es el más adecuado?"

respuesta: "Validar la experiencia de navegación y flujo"

explicacion: |
  Para testear la navegación y el flujo (usabilidad), se requiere la interactividad que solo ofrece el prototipo interactivo.
```

### 21 — Identificación de entregable

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "basico"
  tags: ["wireframe", "mockup", "prototipo"]

tipo: mc
opciones_explicitas: ["un esquema en blanco y negro para definir la estructura", "un diseño visual de alta fidelidad con colores y tipografía", "una simulación navegable con transiciones entre pantallas"]

respuesta: "un esquema en blanco y negro para definir la estructura"

enunciado: "Si un diseñador está trabajando únicamente en la disposición de los elementos y la jerarquía de la información sin preocuparse por el color o la estética, está creando: ___."

explicacion: |
  El wireframe es la etapa inicial de baja fidelidad que se enfoca en la estructura y funcionalidad, dejando de lado el estilo visual.
```

### 22 — El paso siguiente

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
respuestas_validas:
  - "mockup"
  - "prototipo"

enunciado: "Si ya se ha finalizado un wireframe, el siguiente paso lógico para definir la identidad visual (colores, imágenes y tipografía) es crear un ___."

explicacion: |
  El mockup es el paso intermedio donde se aplica el diseño visual sobre la estructura definida previamente en el wireframe.
```

### 23 — Verdad o Falso: Interactividad

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

### 24 — Orden lógico de diseño

```
metadata:
  materia: "diseño"
  tema: "prototipado_jerarquia"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta_orden: ["Wireframe", "Mockup", "Prototipo Interactivo"]
tipo: ordenar
opciones_explicitas: ["Wireframe", "Mockup", "Prototipo Interactivo"]

enunciado: "Ordena las etapas de diseño de interfaces desde la fase de mayor abstracción (baja fidelidad) hasta la de mayor fidelidad funcional:"

explicacion: |
  El proceso estándar comienza con la estructura (wireframe), sigue con el aspecto visual (mockup) y culmina con la experiencia de uso (prototipo).
```

### 25 — El objetivo del prototipo

```
metadata:
  materia: "diseño"
  tema: "testeo_usuario"
  nivel: "intermedio"
  tags: ["testeo", "prototipo"]

tipo: mc
opciones_explicitas: ["probar la navegación y flujos", "probar la estética visual"]

respuesta: "probar la navegación y flujos"

enunciado: "En un proceso de testeo con usuarios, si el objetivo principal es verificar si los botones llevan a la pantalla correcta, el foco del testeo es: ___."

explicacion: |
  Para validar flujos y navegación, es indispensable un prototipo interactivo que simule el comportamiento real de la interfaz.
```
