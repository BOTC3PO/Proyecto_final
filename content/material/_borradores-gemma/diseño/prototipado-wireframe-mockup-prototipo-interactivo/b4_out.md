### 1 — El nivel de fidelidad
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

### 2 — La esencia del prototipo interactivo
```
metadata:
  materia: "diseño"
  tema: "prototipado_interaccion"
  nivel: "basico"
  tags: ["prototipo", "interactividad"]

variables:
  es_interactivo: true

tipo: vf

enunciado: "A diferencia de un mockup estático, un prototipo interactivo permite simular la navegación y el flujo de un usuario. ¿Es el prototipo interactivo un elemento que permite probar la usabilidad mediante la simulación de clics? {es_interactivo}"

respuesta: es_interactivo

explicacion: |
  Exacto. La principal distinción del prototipo interactivo es la capacidad de simular la interacción y el flujo de navegación, algo que el mockup (estático) no puede hacer.
```

### 3 — Evolución del diseño
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

respuesta: ["Wireframe", "Mockup", "Prototipo interactivo"]

explicacion: |
  El proceso estándar comienza con la estructura (Wireframe), sigue con la estética (Mockup) y finaliza con la interactividad (Prototipo).
```

### 4 — Elementos visuales
```
metadata:
  materia: "diseño"
  tema: "mockup_vs_wireframe"
  nivel: "basico"
  tags: ["mockup", "estetica"]

tipo: completar

enunciado: "Mientras que el wireframe se centra en la arquitectura de la información, el ___ se enfoca en la identidad visual, incluyendo colores, tipografías e imágenes."

respuestas_validas: ["mockup"]

respuesta: "mockup"

explicacion: |
  El mockup es la representación visual (estética) del producto, mientras que el wireframe es el esqueleto funcional.
```

### 5 — Propósito de uso
```
metadata:
  materia: "diseño"
  tema: "validacion_usuario"
  nivel: "avanzado"
  tags: ["testeo", "prototipo"]

variables:
  es_testeo_usabilidad: true

tipo: mc
opciones_explicitas: ["Validar la arquitectura de información", "Validar la estética de colores", "Validar la experiencia de navegación y flujo", "Validar la impresión de materiales"]

enunciado: "Si el objetivo principal es realizar un testeo de usabilidad para observar cómo un usuario navega entre pantallas, ¿qué artefacto es el más adecuado?"

respuesta: "Validar la experiencia de navegación y flujo"

explicacion: |
  Para testear la navegación y el flujo (usabilidad), se requiere la interactividad que solo ofrece el prototipo interactivo.
```