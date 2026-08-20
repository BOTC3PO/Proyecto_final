### 1 — El origen de los tetrápodos
```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["evolucion", "tetrapodos", "sarcopterigios"]

respuesta: "sarcopterigios"
tipo: completar
respuestas_validas: ["sarcopterigios", "peces de aletas lobuladas"]

enunciado: "Los tetrápodos evolucionaron a partir de un grupo específico de peces con aletas lobuladas conocidos como ___."

explicacion: |
  Los sarcopterigios (del griego 'sarcopteryx', aleta carnosa) son peces que poseen aletas con una estructura ósea similar a la de los miembros de los tetrápodos, lo que permitió la transición hacia la vida terrestre.
```

### 2 — El eslabón perdido: Tiktaalik
```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["tiktaalik", "transicion", "paleontologia"]

variables:
  escenario: uno_de([
    ["Tiktaalik roseae", "un fósil que muestra una transición entre peces y anfibios"],
    ["Eusthenopteron", "un pez sarcopterigio más primitivo"],
    ["Panderichthys", "un pez que muestra características de transición"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["un fósil que muestra una transición entre peces y anfibios", "un pez sarcopterigio más primitivo", "un pez que muestra características de transición"]

enunciado: "El fósil {escenario[0]} es fundamental para la paleontología porque se considera {escenario[1]}."

explicacion: |
  Tiktaalik es un ejemplo clásico de morfología de transición, poseyendo características de peces (escamas, branquias) y de tetrápodos (cuello, articulaciones en las aletas para soportar peso).
```

### 3 — Características de la transición
```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "avanzado"
  tags: ["morfologia", "transicion"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los primeros tetrápodos aparecieron de forma súbita sin formas de transición con aletas lobuladas?"

explicacion: |
  La evidencia fósil demuestra una transición gradual donde las estructuras de soporte en las aletas de los sarcopterigios se modificaron para permitir el movimiento en ambientes poco profundos o terrestres.
```

### 4 — Secuencia evolutiva
```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "intermedio"
  tags: ["orden_evolutivo"]

opciones_explicitas: ["Peces Actinopterigios", "Peces Sarcopterigios", "Tetrápodos"]
respuesta: ["Peces Actinopterigios", "Peces Sarcopterigios", "Tetrápodos"]
tipo: ordenar

enunciado: "Ordena cronológicamente la línea evolutiva que lleva de los peces comunes a los vertebrados con cuatro extremidades:"

pasos:
  - "Identifica el grupo de peces con aletas radiadas (no lobuladas)."
  - "Identifica el grupo con aletas carnosas (base de la evolución)."
  - "Identifica el grupo con extremidades articuladas."

explicacion: |
  La evolución muestra un paso de la radiación de las aletas (actinopterigios) hacia la especialización de la base de la aleta (sarcopterigios) y finalmente el desarrollo de miembros (tetrápodos).
```

### 5 — Anatomía de la transición
```
metadata:
  materia: "biologia"
  tema: "evolucion_vertebrados"
  nivel: "basico"
  tags: ["anatomia", "extremidades"]

variables:
  caracteristica: uno_de([
    ["presencia de cuello", "permite mover la cabeza independientemente del tronco"],
    ["presencia de escamas", "protección contra la desecación"],
    ["presencia de branquias", "respiración acuática"]
  ])

respuesta: caracteristica[0]
tipo: mc
opciones_explicitas: ["presencia de cuello", "presencia de escamas", "presencia de branquias"]

enunciado: "Una de las innovaciones morfológicas clave observada en fósiles de transición como Tiktaalik fue la {caracteristica}."

explicacion: |
  A diferencia de los peces, que tienen la cabeza fusionada al tronco, los primeros tetrápodos y sus ancestros de transición desarrollaron un cuello, permitiendo mayor movilidad para alimentarse y navegar en aguas someras.
```