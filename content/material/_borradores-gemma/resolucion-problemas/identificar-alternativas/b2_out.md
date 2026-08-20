### 1 — El dilema del transporte
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["toma_de_decisiones", "alternativas"]

variables:
  escenario: uno_de([
    ["Viajar en tren", "Es más lento pero puedes leer", "Es más barato"],
    ["Viajar en avión", "Es más rápido pero más caro", "Es más cómodo"],
    ["Viajar en auto", "Es flexible pero requiere conducir", "Es más costoso por el combustible"]
  ])

respuesta: escenario[0][1]
tipo: mc
opciones_explicitas: ["Es más lento pero puedes leer", "Es más rápido pero más caro", "Es flexible pero requiere conducir"]

enunciado: "Un estudiante necesita viajar de una ciudad a otra. Si elige la opción de '{escenario[0][0]}', la principal ventaja según el escenario es: ___"

explicacion: |
  Identificar alternativas implica evaluar las ventajas y desventajas de cada camino. En este caso, cada opción tiene un beneficio distinto (tiempo, costo o comodidad).
```

### 2 — El camino de la optimización
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["analisis", "estrategia"]

variables:
  problema: uno_de([
    ["comprar_todo_reunido", "Ahorras tiempo pero pagas más"],
    ["comprar_por_partes", "Ahorras dinero pero pierdes tiempo"],
    ["esperar_ofertas", "Ahorras mucho pero no tienes el producto ahora"]
  ])

respuesta: problema[0][1]
tipo: completar
respuestas_validas: ["Ahorras tiempo pero pagas más", "Ahorras dinero pero pierdes tiempo", "Ahorras mucho pero no tienes el producto ahora"]

enunciado: "Para resolver un problema de presupuesto, se presentan tres alternativas. Si se decide '{problema[0]}', la consecuencia directa es: ___"

explicacion: |
  Reconocer que una decisión implica un 'trade-off' (intercambio). Al elegir una alternativa, estás renunciando a los beneficios de las otras.
```

### 3 — Prioridades de estudio
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "basico"
  tags: ["gestion_tiempo", "priorizacion"]

respuesta: falso
tipo: vf

enunciado: "Ante un examen difícil, la única forma de aprobar es estudiando 10 horas seguidas sin descanso."

explicacion: |
  Falso. Existen múltiples alternativas: estudiar en bloques con descansos, estudiar con un tutor, o enfocarse en los temas más importantes primero. La existencia de alternativas es clave para la resolución de problemas.
```

### 4 — Pasos para elegir una solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

variables:
  pasos_orden: [
    "Identificar el problema",
    "Generar múltiples alternativas",
    "Evaluar cada alternativa",
    "Elegir la mejor opción"
  ]

respuesta: pasos_orden
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Generar múltiples alternativas", "Evaluar cada alternativa", "Elegir la mejor opción"]

enunciado: "Para resolver un problema de manera efectiva, se debe seguir un proceso lógico. Ordena las etapas de la metodología de resolución de problemas:"

explicacion: |
  El paso crítico para evitar la 'visión de túnel' es el segundo paso: generar múltiples alternativas antes de evaluar.
```

### 5 — Evaluación de costos
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar_alternativas"
  nivel: "avanzado"
  tags: ["analisis_costo", "decisivon"]

variables:
  caso: uno_de([
    [100, "Opción A"],
    [150, "Opción B"],
    [200, "Opción C"]
  ])

respuesta: caso[1][1]
tipo: mc
opciones_explicitas: ["Opción A", "Opción B", "Opción C"]

enunciado: "Tienes un presupuesto de 120 unidades. Si debes elegir la alternativa más económica que se ajuste a tu presupuesto, ¿cuál elegirías?"

explicacion: |
  Al identificar alternativas, también debemos filtrar aquellas que no cumplen con nuestras restricciones (en este caso, el presupuesto). La Opción A es la más barata, pero si el problema exigiera la opción que más se acerca al límite sin pasarse, la respuesta cambiaría.
```