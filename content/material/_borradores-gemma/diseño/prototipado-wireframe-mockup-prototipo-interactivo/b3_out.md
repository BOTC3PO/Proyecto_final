### 1 — El propósito del Wireframe
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

### 2 — Confusión entre Mockup y Prototipo
```
metadata:
  materia: "diseño"
  tema: "prototipado_diferencias"
  nivel: "intermedio"
  tags: ["mockup", "prototipo"]

variables:
  escenario: uno_de([["visual", "estático"], ["funcional", "interactivo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["visual, estático", "funcional, interactivo", "estructural, esquemático", "animado, dinámico"]

enunciado: "Si un diseñador presenta un diseño con colores, tipografías y sombras finales, pero no se puede hacer clic en ningún elemento para navegar, está entregando un: {escenario[0]}."

explicacion: |
  Un mockup es una representación visual de alta fidelidad (estática), mientras que un prototipo interactivo permite simular la navegación y el flujo del usuario.
```

### 3 — Fidelidad del Prototipo
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

### 4 — El proceso de diseño
```
metadata:
  materia: "diseño"
  tema: "prototipado_flujo_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["Wireframe", "Mockup", "Prototipo"]
tipo: ordenar

opciones_explicitas: ["Wireframe", "Mockup", "Prototipo"]

enunciado: "Ordena las etapas de diseño de baja a alta fidelidad para un producto digital:"

explicacion: |
  El flujo estándar comienza con la estructura (Wireframe), sigue con la apariencia visual (Mockup) y finaliza con la simulación de uso (Prototipo).
```

### 5 — El error de la "Falsa Fidelidad"
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
respuestas_validas: ["estético", "funcional"]

enunciado: "Un error común es saltar directamente al mockup, enfocándose demasiado en lo ___ y descuidando la lógica de navegación que debería definirse en el wireframe."

explicacion: |
  Saltar la etapa de wireframing para ir directo al mockup suele llevar a errores de arquitectura de información, ya que se gasta mucho tiempo en detalles visuales de una estructura que aún no es sólida.
```