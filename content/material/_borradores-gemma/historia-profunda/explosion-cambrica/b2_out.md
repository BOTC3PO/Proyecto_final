### 1 — El motor químico de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["oxigeno", "geologia", "evolucion"]

variables:
  escenario: uno_de([
    ["aumento de oxígeno", "oxígeno"],
    ["cambio en la salinidad", "salinidad"],
    ["descarga de metano", "metano"]
  ])

enunciado: "Una de las teorías principales sostiene que el aumento de {escenario[0]} en los océanos permitió el desarrollo de organismos con metabolismos más complejos durante la explosión cámbrica."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["aumento de oxígeno", "cambio en la salinidad", "descarga de metano"]

explicacion: |
  El aumento de la disponibilidad de oxígeno (oxigenación) fue crucial para sostener la alta demanda energética de los nuevos cuerpos complejos.
```

### 2 — El código de la forma
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["genetica", "hox", "desarrollo"]

enunciado: "La aparición de una familia de genes reguladores fundamentales para el plan corporal de los animales se denomina genes ___."

respuesta: ["Hox"]
respuestas_validas: ["Hox"]
tipo: completar

explicacion: |
  Los genes Hox controlan el eje anteroposterior del embrión, permitiendo la segmentación y especialización de los cuerpos.
```

### 3 — La carrera armamentista biológica
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["depredacion", "seleccion_natural"]

variables:
  caso: uno_de([
    ["depredación", "depredación"],
    ["simbiósis", "simbiósis"],
    ["filtración", "filtración"]
  ])

enunciado: "La aparición de la {caso[0]} actuó como una presión evolutiva masiva, obligando a los organismos a desarrollar conchas, esqueletos y sistemas sensoriales."

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["depredación", "simbiósis", "filtración"]

explicacion: |
  La depredación creó un ciclo de retroalimentación: los depredadores necesitaban mejores sentidos y armas, y las presas, mejores defensas.
```

### 4 — Secuencia de factores
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["causas", "causalidad"]

opciones_explicitas: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]

enunciado: "Ordena los factores que se consideran un modelo de causalidad en cascada para la explosión cámbrica (de la causa ambiental a la consecuencia biológica):"

respuesta: ["Aumento de O2", "Evolución de genes Hox", "Aparición de depredación"]
tipo: ordenar

explicacion: |
  El modelo sugiere que el oxígeno permitió la vida compleja, los genes Hox permitieron la arquitectura corporal, y la depredación impulsó la diversificación rápida.
```

### 5 — El valor del oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["oxigeno", "quimica"]

enunciado: "Si el nivel de oxígeno en el océano aumenta, la probabilidad de que surjan organismos de gran tamaño es: ___"

respuesta: ["mayor"]
respuestas_validas: ["mayor", "menor"]
tipo: completar

explicacion: |
  Los organismos grandes requieren más energía para mantener sus tejidos, la cual se obtiene mediante la respiración aeróbica.
```