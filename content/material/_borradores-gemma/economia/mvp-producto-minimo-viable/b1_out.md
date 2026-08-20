### 1 — Definición de MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["metodologia", "startup", "lean_startup"]

respuesta: "aprendizaje"
tipo: completar
respuestas_validas: ["aprendizaje", "validar hipótesis"]

enunciado: "El objetivo principal de un Producto Mínimo Viable (MVP) no es vender un producto final, sino obtener ___ sobre las preferencias y comportamientos de los usuarios reales."

explicacion: |
  El MVP es una herramienta de experimentación diseñada para maximizar el aprendizaje validado con el menor esfuerzo posible.
```

### 2 — Propósito del MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["estrategia", "validación"]

respuesta: verdadero
tipo: vf

enunciado: "Un MVP debe contener todas las características que el cliente final espera de un producto completo para asegurar su éxito."

explicacion: |
  Falso. Un MVP debe contener solo las características mínimas necesarias para cumplir su propósito de aprendizaje. Incluir demasiado puede desperdiciar recursos.
```

### 3 — Componentes de un MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["desarrollo", "iteración"]

variables:
  escenario: uno_de([
    ["Landing Page", "Validar interés"],
    ["Mago de Oz", "Simular funcionalidad"],
    ["Conserje", "Proceso manual"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Landing Page", "Mago de Oz", "Conserje"]

enunciado: "Si una startup lanza una página web simple para ver cuántas personas hacen clic en un botón de 'comprar' antes de tener el producto desarrollado, está utilizando un modelo de: {escenario[0]} con el fin de {escenario[1]}."

explicacion: |
  La Landing Page es uno de los MVPs más rápidos para validar la demanda de una idea antes de invertir en desarrollo técnico.
```

### 4 — Ciclo de Feedback
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "intermedio"
  tags: ["lean_startup", "ciclo_feedback"]

respuesta: ["Construir", "Medir", "Aprender"]
tipo: ordenar

enunciado: "Ordena los pasos del ciclo de feedback de la metodología Lean Startup que se utiliza para iterar sobre un MVP:"

pasos:
  - "Construir"
  - "Medir"
  - "Aprender"

explicacion: |
  El ciclo es iterativo: se construye un experimento, se miden los resultados y se aprende para decidir si pivotar o perseverar.
```

### 5 — El concepto de MVP
```
metadata:
  materia: "economia"
  tema: "mvp_producto_minimo_viable"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

respuesta: "el producto más simple que permite aprender de usuarios reales"
tipo: completar
respuestas_validas: ["el producto más simple que permite aprender de usuarios reales", "una versión completa pero barata"]

enunciado: "Se define al MVP como ___."

explicacion: |
  El MVP busca el equilibrio entre el valor para el usuario y el esfuerzo de desarrollo, priorizando el aprendizaje sobre la perfección técnica.
```