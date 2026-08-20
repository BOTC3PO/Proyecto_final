### 1 — Jerarquía vs. Contraste
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "contraste"
tipo: mc
opciones_explicitas: ["contraste", "equilibrio", "alineación", "proximidad"]

enunciado: "Mientras que la jerarquía visual establece un orden de importancia de los elementos, el ___ es la herramienta que permite diferenciar dichos elementos mediante cambios en color, tamaño o forma."

explicacion: |
  El contraste es lo que permite que el ojo detecte diferencias. Sin contraste, no hay jerarquía, ya que todos los elementos parecerían tener la misma importancia.
```

### 2 — El rol de la Proximidad
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "intermedio"
  tags: ["gestalt", "organizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["elementos agrupados por su función", "crea una unidad visual clara"],
    ["elementos dispersos sin relación", "genera confusión en la lectura"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas: [escenarios[escenario_idx][1]]

enunciado: "Cuando aplicamos el principio de proximidad en una interfaz, si agrupamos elementos que están relacionados, esto ___."

explicacion: |
  La proximidad utiliza el espacio para comunicar que ciertos elementos pertenecen a un mismo grupo o concepto, reduciendo la carga cognitiva.
```

### 3 — Jerarquía vs. Ruido Visual
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "avanzado"
  tags: ["usabilidad", "cognicion"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que una jerarquía visual efectiva consiste en resaltar todos los elementos de una interfaz por igual para que el usuario no pierda información importante?"

explicacion: |
  Falso. Si todo resalta, nada resalta. Una jerarquía efectiva requiere decidir qué es lo más importante y qué es secundario para guiar el flujo de atención.
```

### 4 — Flujo de lectura en interfaces
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["patrones_de_lectura", "layout"]

respuesta: ["Título principal", "Subtítulo o imagen", "Cuerpo de texto", "Botón de acción (CTA)"]
tipo: ordenar
opciones_explicitas: ["Título principal", "Subtítulo o imagen", "Cuerpo de texto", "Botón de acción (CTA)"]

enunciado: "Ordena los elementos de una tarjeta de producto de mayor a menor importancia visual en un diseño estándar de e-commerce:"

explicacion: |
  La jerarquía debe guiar al usuario desde la identificación del objeto (título/imagen) hacia la información de detalle (texto) y finalmente hacia la conversión (botón).
```

### 5 — El impacto del tamaño
```
metadata:
  materia: "diseño"
  tema: "jerarquia_visual_e_informacion"
  nivel: "basico"
  tags: ["escala", "atencion"]

variables:
  valor_escala: uno_de([0, 1])
  datos: [
    [10, "menor"],
    [50, "mayor"]
  ]

respuesta: datos[valor_escala][1]

tipo: completar
respuestas_validas: [datos[valor_escala][1]]

enunciado: "En una composición visual, un elemento con un tamaño de {datos[valor_escala][0]}px tiene una importancia visual ___ que uno de {datos[valor_escala][0] * 2}px."

explicacion: |
  El tamaño es uno de los indicadores de jerarquía más directos: el ojo tiende a procesar primero los elementos de mayor escala.
```