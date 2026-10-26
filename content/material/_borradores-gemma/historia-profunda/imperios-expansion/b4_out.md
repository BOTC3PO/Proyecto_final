### 1 — Estrategias de control imperial
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["gobierno", "diversidad"]

variables:
  escenario: uno_de([
    ["El Imperio Romano implementaba el culto al Emperador en las provincias para unificar la lealtad.", "asimilación"],
    ["El Imperio Persa permitía que los pueblos conquistados mantuvieran sus leyes y religiones.", "tolerancia"],
    ["El Imperio Inca exigía tributos y trabajo (mita) pero permitía cultos locales bajo el Sol.", "autonomia"]
  ])

enunciado: "Un imperio que permite que sus súbditos conserven sus propias leyes y costumbres a cambio de lealtad y tributos está aplicando una política de {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["asimilación", "tolerancia", "autonomia"]

explicacion: |
  La tolerancia religiosa y cultural es una estrategia para reducir la resistencia en territorios recién conquistados, permitiendo que las estructuras locales operen bajo la soberanía imperial.
```

### 2 — El proceso de asimilación
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "basico"
  tags: ["cultura", "identidad"]

respuesta: "asimilación"
tipo: completar
respuestas_validas: ["asimilación"]

enunciado: "Cuando un imperio busca que los pueblos conquistados adopten su lengua, religión y costumbres, eliminando gradualmente la identidad original, se dice que busca la ________."

explicacion: |
  La asimilación es un proceso de integración cultural profunda donde la identidad del conquistado es absorbida por la del conquistador.
```

### 3 — Modelos de gobernanza
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "avanzado"
  tags: ["tributo", "autonomia"]

variables:
  caso: uno_de([
    ["Un imperio que deja gobernadores locales con poder absoluto pero exige oro.", "autonomia"],
    ["Un imperio que impone sus propios jueces y gobernadores en cada ciudad.", "centralizacion"],
    ["Un imperio que obliga a todos a hablar su lengua y vestir su ropa.", "asimilacion"]
  ])

enunciado: "En el modelo de {caso[0]}, el desafío principal es asegurar que la ________ sea efectiva para financiar el centro sin causar rebeliones por exceso de control."

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["autonomia", "centralizacion", "asimilacion"]

explicacion: |
  La autonomía local es un compromiso entre el control central y la libertad de las provincias; el éxito depende de la capacidad de recaudar tributos sin desatar revueltas.
```

### 4 — Secuencia de expansión imperial
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

opciones_explicitas: ["Conquista militar", "Imposición de tributos", "Establecimiento de administración", "Integración cultural"]
respuesta: ["Conquista militar", "Imposición de tributos", "Establecimiento de administración", "Integración cultural"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de la consolidación de un imperio sobre un territorio diverso:"

explicacion: |
  La expansión suele seguir un patrón: primero la fuerza militar, luego la extracción de recursos (tributo), la creación de una estructura de gobierno y, finalmente, la integración de la población al sistema imperial.
```

### 5 — Consecuencias de la diversidad
```
metadata:
  materia: "historia_profunda"
  tema: "imperios_expansion"
  nivel: "intermedio"
  tags: ["conflicto", "gestion"]

variables:
  conflicto: uno_de([
    ["La falta de tolerancia religiosa suele derivar en...", "rebeliones"],
    ["La asimilación forzada suele derivar en...", "resistencia"],
    ["La autonomía excesiva suele derivar en...", "secesion"]
  ])

enunciado: "Si un imperio intenta imponer una única religión en un territorio con fuertes tradiciones locales, lo más probable es que surjan {conflicto[0]}."

respuesta: conflicto[0]
tipo: mc
opciones_explicitas: ["rebeliones", "resistencia", "secesion"]

explicacion: |
  La imposición cultural es una de las causas más comunes de conflicto interno y levantamientos armados en la historia de los grandes imperios.
```