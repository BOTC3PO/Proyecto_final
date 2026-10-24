### 1 — El propósito real del MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["conceptos_clave", "metodologia_lean"]

respuesta: "aprender"
tipo: mc
opciones_explicitas: ["construir", "aprender", "vender", "perfeccionar"]

enunciado: "Un error común es pensar que el objetivo principal de un MVP es lanzar un producto final con pocas funciones. En realidad, el objetivo fundamental de un MVP es ___ de los usuarios reales."

explicacion: |
  El MVP no es un producto "incompleto" para salir rápido al mercado, sino una herramienta de aprendizaje validado. Su fin es probar hipótesis de negocio con el menor esfuerzo posible.
```

### 2 — MVP vs Producto Incompleto
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["errores_comunes", "calidad"]

respuesta: falso
tipo: vf

enunciado: "Un Producto Mínimo Viable (MVP) puede ser un producto de mala calidad o con una experiencia de usuario deficiente, siempre y cuando cumpla con la función básica."

explicacion: |
  Falso. Un MVP debe ser "viable". Si la calidad es tan baja que el usuario no puede completar la tarea principal, no estás probando tu idea, estás probando que tu producto es malo. La funcionalidad es mínima, pero la calidad debe ser suficiente para generar aprendizaje.
```

### 3 — El ciclo de aprendizaje
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["ciclo_feedback", "lean_startup"]

variables:
  pasos_orden: [["Construir", "Medir", "Aprender"], ["Aprender", "Construir", "Medir"], ["Medir", "Aprender", "Construir"]]
  idx: uno_de([0,1,2])

respuesta: pasos_orden[idx]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Para que el MVP sea efectivo, se debe seguir el ciclo de feedback de la metodología Lean Startup. Ordena los pasos correctamente:"

explicacion: |
  El ciclo es: Construir (MVP) -> Medir (datos de usuarios) -> Aprender (decidir si pivotar o perseverar).
```

### 4 — La confusión del "Producto Mínimo"
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "avanzado"
  tags: ["estrategia", "errores_comunes"]

variables:
  escenario: [["un prototipo de baja fidelidad", "una versión con todas las funciones pero sin marketing"], ["un prototipo de baja fidelidad", "un producto incompleto que no resuelve el problema principal"], ["un prototipo de baja fidelidad", "una campaña de publicidad sin producto"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["un prototipo de baja fidelidad", "una versión con todas las funciones pero sin marketing", "un producto incompleto que no resuelve el problema principal", "una campaña de publicidad sin producto"]

enunciado: "Un error crítico es confundir un MVP con ___."

explicacion: |
  Un MVP debe resolver el problema central. Si lanzas algo que no resuelve el problema principal, no estás validando tu propuesta de valor, solo estás lanzando un producto inútil.
```

### 5 — El enfoque en la funcionalidad
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["caracteristicas", "definicion"]

respuesta: "una función principal"
tipo: completar
respuestas_validas: ["una función principal", "todas las funciones posibles", "ninguna función para ahorrar costes", "una interfaz muy compleja"]

enunciado: "Para evitar el exceso de funciones (feature creep) en un MVP, el equipo debe centrarse en desarrollar ___ que aporte valor real."

explicacion: |
  El enfoque debe estar en el "Core Value Proposition". Si intentas incluir demasiadas funciones, dejas de tener un producto "mínimo" y te pierdes en el desarrollo de características que quizás nadie necesita.
```