### 1 — El nomadismo y el alimento
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["nomadismo", "supervivencia"]

variables:
  escenario: uno_de([
    ["el movimiento de las manadas de renos", "el renos"],
    ["la maduración de frutos silvestres", "los frutos"],
    ["el ciclo de vida de los grandes mamíferos", "los mamíferos"]
  ])

enunciado: "En el Paleolítico, los grupos humanos se desplazaban siguiendo {escenario[0]} para asegurar su subsistencia."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["el movimiento de las manadas de renos", "la maduración de frutos silvestres", "el ciclo de vida de los grandes mamíferos"]

explicacion: |
  El nomadismo era una estrategia de supervivencia basada en el seguimiento de los ciclos naturales de los recursos disponibles.
```

### 2 — Asentamientos en el Paleolítico
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["asentamientos", "nomadismo"]

enunciado: "A diferencia de los grupos nómadas, los asentamientos fijos no existían en el Paleolítico; los grupos humanos se movían constantemente de un lugar a otro."

respuesta: "no existían"
tipo: completar
respuestas_validas: ["no existían", "no existían", "no existían"]

explicacion: |
  La falta de agricultura obligaba a los grupos humanos a desplazarse constantemente para no agotar los recursos de una zona.
```

### 3 — Estrategias de subsistencia
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["recoleccion", "caza"]

variables:
  tipo_recurso: uno_de([
    ["caza de animales", "la caza"],
    ["recolección de plantas", "la recolección"]
  ])

enunciado: "La economía del Paleolítico se basaba principalmente en {tipo_recurso[0]} y {tipo_recurso[1]}."

respuesta: ["la caza", "la recolección"]
tipo: ordenar
opciones_explicitas: ["la caza", "la recolección"]

explicacion: |
  La subsistencia dependía de una combinación de actividades de caza y recolección para garantizar una dieta variada.
```

### 4 — El factor estacional
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["estacionalidad", "clima"]

variables:
  clima: uno_de([
    ["el invierno", "el frío"],
    ["el verano", "el calor"]
  ])

enunciado: "Los cambios en {clima[0]} afectaban la disponibilidad de alimento, obligando a los grupos a migrar hacia zonas más favorables."

respuesta: "el frío"
tipo: mc
opciones_explicitas: ["el frío", "el calor"]

explicacion: |
  Las variaciones climáticas estacionales determinaban el movimiento de los animales y el crecimiento de las plantas, dictando la ruta de los nómadas.
```

### 5 — Estructura social y movilidad
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["sociedad", "movilidad"]

variables:
  grupo: uno_de([
    ["pequeños grupos familiares", "pequeños grupos familiares"],
    ["grandes tribus sedentarias", "grandes tribus sedentarias"]
  ])

enunciado: "La vida nómada era compatible con la organización en ___ debido a la necesidad de movilidad constante."

respuesta: "pequeños grupos familiares"
tipo: completar
respuestas_validas: ["pequeños grupos familiares", "pequeños grupos familiares"]

explicacion: |
  Los grupos eran pequeños para facilitar el desplazamiento rápido y evitar el agotamiento de los recursos en un mismo territorio.
```