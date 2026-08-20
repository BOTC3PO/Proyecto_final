### 1 — El origen de la propiedad
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["sedentarismo", "excedente", "propiedad_privada"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente"]

enunciado: "El paso de la vida nómada a la sedentaria permitió la acumulación de un ___ agrícola, lo cual fue el motor para el surgimiento de la propiedad privada sobre la tierra."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que algunos individuos acumularan riqueza, diferenciándose de otros y dando origen a la propiedad privada.
```

### 2 — Transición económica
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["revolucion_neolitica", "acumulacion"]

variables:
  escenario: uno_de([["comunidad_tribal", "propiedad colectiva"], ["asentamiento_fijo", "propiedad privada"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["propiedad colectiva", "propiedad privada"]

enunciado: "En un sistema de asentamientos fijos con excedentes, la organización social tiende a transicionar de una {escenario[0]} hacia una {escenario[1]}."

explicacion: |
  El control sobre el excedente y la tierra delimita territorios y derechos de uso, consolidando la propiedad privada frente al modelo de uso común de las tribus nómadas.
```

### 3 — Jerarquías y control
```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "burocracia", "tributo"]

respuesta: "Estado"
tipo: "completar"
respuestas_validas: ["Estado"]

enunciado: "Para gestionar la propiedad de la tierra y asegurar la recaudación de tributos sobre el excedente, surge una estructura de poder centralizada denominada ___."

explicacion: |
  El Estado surge como el ente encargado de codificar las leyes de propiedad y administrar la fuerza para garantizar la recaudación y la defensa de los bienes acumulados.
```

### 4 — Secuencia de la complejidad social
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo_social"]

respuesta: ["Sedentarismo", "Excedente", "Propiedad Privada", "Estratificación"]
tipo: "ordenar"
opciones_explicitas: ["Sedentarismo", "Excedente", "Propiedad Privada", "Estratificación"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las sociedades de clases:"

pasos:
  - "Establecimiento de asentamientos permanentes."
  - "Producción de alimento más allá del consumo inmediato."
  - "Delimitación de derechos de posesión sobre la tierra y bienes."
  - "División de la sociedad en grupos con distintos niveles de riqueza."

explicacion: |
  La secuencia lógica parte de la estabilidad del asentamiento, que genera excedente, lo que permite la propiedad privada y, finalmente, la división social en clases (estratificación).
```

### 5 — El rol de la ley
```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["derecho", "propiedad"]

variables:
  caso: uno_de([["robo_tierra", "delito"], ["tributo_no_pagado", "delito"]])

respuesta: "delito"
tipo: "mc"
opciones_explicitas: ["acto_social", "delito"]

enunciado: "En una sociedad con propiedad privada consolidada, el acto de apropiarse de la tierra de otro sin permiso es considerado un {caso[0]} bajo el código del Estado."

explicacion: |
  La creación de leyes penales es fundamental para proteger la propiedad privada, transformando la apropiación de bienes ajenos en un delito contra el orden establecido.
```