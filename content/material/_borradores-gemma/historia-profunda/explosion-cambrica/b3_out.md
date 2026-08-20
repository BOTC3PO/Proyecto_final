### 1 — La fauna de Ediacara
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["ediacara", "precambrico"]

respuesta: "blandos"
tipo: completar
respuestas_validas: ["blandos", "blandos"]

enunciado: "Antes de la explosión cámbrica, los organismos que componían la fauna de Ediacara eran mayormente de cuerpo ___."

explicacion: |
  La fauna de Ediacara se caracteriza por organismos con estructuras corporales simples y, en su gran mayoría, sin partes endurecidas.
```

### 2 — El gran cambio estructural
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["evolucion", "esqueletos"]

variables:
  escenario: uno_de([
    ["aparición de esqueletos", "estructuras duras"],
    ["aparición de ojos", "órganos sensoriales"],
    ["aparición de depredadores", "planes complejos"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["estructuras duras", "órganos sensoriales", "planes complejos"]

enunciado: "Uno de los cambios biológicos más significativos durante la explosión cámbrica fue la aparición de {escenario[0]}."

explicacion: |
  La evolución de partes duras (conchas, esqueletos) y órganos sensoriales complejos como los ojos permitió una nueva dinámica de supervivencia y depredación.
```

### 3 — Secuencia evolutiva
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

opciones_explicitas: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
respuesta: ["Organismos de Ediacara", "Aparición de esqueletos", "Diversificación de planos corporales"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos biológicos desde el Precámbrico hasta el Cámbrico:"

explicacion: |
  Primero dominaban los organismos de Ediacara; luego, la biomineralización permitió la aparición de esqueletos, lo que finalmente impulsó la diversificación de planos corporales complejos.
```

### 4 — El impacto de la visión
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "intermedio"
  tags: ["sensores", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La aparición de ojos y sistemas sensoriales complejos fue una característica distintiva de la explosión cámbrica?"

explicacion: |
  Correcto. La capacidad de detectar movimiento y luz permitió el desarrollo de una red trófica mucho más activa y compleja.
```

### 5 — Comparativa de complejidad
```
metadata:
  materia: "historia_profunda"
  tema: "explosion_cambrica"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: [
    ["Ediacara", "simples"],
    ["Cámbrico", "complejos"]
  ]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simples", "complejos"]

enunciado: "Si comparamos la era de Ediacara con la explosión cámbrica, los organismos del Cámbrico eran biológicamente más {datos[idx][0]}."

explicacion: |
  La explosión cámbrica marca el paso de formas de vida mayormente simples a formas con planes corporales altamente especializados.
```