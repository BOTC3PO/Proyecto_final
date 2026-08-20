### 1 — Adaptación contra la deshidratación
```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "basico"
  tags: ["cuticula", "deshidratacion"]

respuesta: "cuticula"
tipo: completar
respuestas_validas: ["cuticula"]

enunciado: "Para evitar la pérdida excesiva de agua por evaporación en ambientes terrestres, muchos organismos han desarrollado una capa protectora externa llamada ___."

explicacion: |
  La cutícula es una capa cerosa e impermeable que sella la superficie del organismo, permitiendo la vida en medios secos al minimizar la deshidratación.
```

### 2 — Soporte en medios terrestres
```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "intermedio"
  tags: ["soporte", "esqueleto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["agua", "flotabilidad"], ["aire", "gravedad"]]

respuesta: uno_de(["esqueleto interno", "flotabilidad"])
tipo: mc
opciones_explicitas: ["esqueleto interno", "flotabilidad", "flotabilidad neutra", "soporte hidrostático"]

enunciado: "En el medio acuático, el empuje compensa el peso. Sin embargo, al pasar a vivir en el {datos[escenario_idx][0]}, los organismos necesitan estructuras de soporte para vencer la {datos[escenario_idx][1]}."

explicacion: |
  En tierra, la gravedad actúa directamente sobre el cuerpo sin la ayuda del empuje hidrostático, lo que requiere estructuras rígidas (como esqueletos) para mantener la forma y permitir el movimiento.
```

### 3 — El desafío de la respiración aérea
```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "basico"
  tags: ["respiracion", "pulmones"]

respuesta: "pulmones"
tipo: mc
opciones_explicitas: ["branquias", "pulmones", "piel desnuda", "estomas"]

enunciado: "A diferencia de las branquias, que extraen oxígeno disuelto en agua, los animales terrestres suelen desarrollar ___ para captar el oxígeno presente en el aire."

explicacion: |
  Los pulmones o estructuras similares (como los traqueal en insectos) permiten la difusión de gases en un medio gaseoso sin que las superficies respiratorias se colapsen por falta de soporte líquido.
```

### 4 — Relación entre medio y estructura
```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "avanzado"
  tags: ["evolucion", "respiracion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["branquias", "agua"],
    ["pulmones", "aire"]
  ]

respuesta: uno_de(["branquias", "pulmones"])
tipo: completar
respuestas_validas: ["branquias", "pulmones"]

enunciado: "Si un organismo evoluciona de un medio de {escenarios[caso_idx][1]} a uno de aire, su sistema de intercambio gaseoso debe pasar de tener {escenarios[caso_idx][0]} a tener ___."

explicacion: |
  La transición del agua al aire exige un cambio radical: de estructuras que dependen de la humedad constante (branquias) a órganos protegidos que eviten el colapso y la sequedad (pulmones).
```

### 5 — Secuencia de adaptaciones terrestres
```
metadata:
  materia: "biologia"
  tema: "adaptaciones_terrestres"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

respuesta: ["cuticula", "soporte", "pulmones"]
tipo: ordenar
opciones_explicitas: ["cuticula", "soporte", "pulmones", "branquias", "flotabilidad"]

enunciado: "Ordena las adaptaciones necesarias para colonizar la tierra firme, desde la prevención de la sequedad hasta la locomoción y la respiración:"

pasos:
  - "Primero: Evitar la deshidratación."
  - "Segundo: Mantener la forma contra la gravedad."
  - "Tercero: Obtener oxígeno del medio gaseoso."

explicacion: |
  La colonización de la tierra requirió primero evitar la muerte por sequedad (cutícula), luego desarrollar estructuras que sostengan el peso (soporte/esqueleto) y finalmente optimizar la captura de oxígeno (pulmones).
```