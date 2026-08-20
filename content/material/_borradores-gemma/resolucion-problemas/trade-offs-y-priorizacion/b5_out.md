### 1 — El dilema del lanzamiento
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["gestion_de_proyectos", "trade_offs"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Lanzar el producto hoy con errores menores", "Velocidad"],
    ["Retrasar el lanzamiento para asegurar calidad total", "Calidad"]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Velocidad", "Calidad", "Costo", "Seguridad"]

enunciado: "Si una startup decide priorizar el 'Time-to-Market' para capturar usuarios rápidamente, está aceptando un trade-off donde la prioridad principal es la {datos[escenario_idx][0]} en detrimento de otros factores."

explicacion: |
  En gestión de proyectos, elegir una prioridad implica sacrificar otra (trade-off). Si el objetivo es salir rápido, la prioridad es la velocidad, aunque se sacrifique la perfección.
```

### 2 — Calidad vs. Presupuesto
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "basico"
  tags: ["costos", "priorizacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Reducir la calidad de materiales para bajar el precio", "Costo"],
    ["Aumentar el precio para usar materiales premium", "Calidad"]
  ]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["Costo", "Calidad", "Tiempo", "Estética"]

enunciado: "Al decidir reducir la calidad de los componentes para disminuir el precio de venta, se está realizando un trade-off donde se prioriza el {casos[caso_idx][0]}."

explicacion: |
  El trade-off es la compensación entre dos variables contrapuestas. En este caso, bajar costos suele implicar una reducción en la calidad percibida o real.
```

### 3 — El impacto del cambio
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["analisis_de_impacto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Añadir una nueva funcionalidad compleja al software", "Aumenta el valor pero aumenta la complejidad"],
    ["Simplificar la interfaz de usuario", "Aumenta la facilidad de uso pero reduce la potencia"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "Si aplicamos la decisión de {escenarios[escenario_idx][0]}, ¿es cierto que esto genera un trade-off donde una mejora en un aspecto conlleva una degradación o cambio en otro?"

explicacion: |
  Correcto. Todo cambio en un sistema complejo (software, organización, producto) tiene efectos secundarios. La esencia del trade-off es la existencia de estos efectos colaterales.
```

### 4 — Pasos para la priorización
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "avanzado"
  tags: ["metodologia", "decision"]

variables:
  metodo_idx: uno_de([0, 1, 2])
  pasos_lista: [
    ["Identificar objetivos", "Evaluar trade-offs", "Elegir prioridad"],
    ["Definir problemas", "Analizar riesgos", "Implementar solución"],
    ["Recoger datos", "Comparar opciones", "Decidir"]
  ]

respuesta: pasos_lista[metodo_idx]
tipo: ordenar
opciones_explicitas: [
  "Identificar objetivos", "Evaluar trade-offs", "Elegir prioridad",
  "Definir problemas", "Analizar riesgos", "Implementar solución",
  "Recoger datos", "Comparar opciones", "Decidir"
]

enunciado: "Para resolver un conflicto de prioridades, un método lógico de toma de decisiones sigue este orden de pasos:"

explicacion: |
  La priorización requiere primero entender qué queremos (objetivos), luego entender qué perdemos al elegir algo (trade-offs) y finalmente ejecutar la decisión.
```

### 5 — Evaluación de impacto
```
metadata:
  materia: "resolucion-problemas"
  tema: "trade_offs_y_priorizacion"
  nivel: "intermedio"
  tags: ["analisis_cuantitativo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Mejorar el rendimiento del motor en un 20% requiere un 15% más de combustible", "combustible"],
    ["Aumentar la seguridad en un 30% requiere un 10% más de peso", "peso"]
  ]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas: ["combustible", "peso"]

enunciado: "Si un ingeniero decide que el rendimiento es lo más importante, debe aceptar el trade-off de un mayor consumo de ___."

explicacion: |
  En problemas técnicos, los trade-offs suelen ser cuantitativos. Al mejorar una métrica (rendimiento), otra métrica (consumo) se ve afectada negativamente.
```