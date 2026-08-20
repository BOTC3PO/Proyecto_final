### 1 — Origen de la multicelularidad
```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "intermedio"
  tags: ["evolucion", "linajes"]

respuesta: "independiente"
tipo: completar
respuestas_validas: ["independiente"]

enunciado: "La evidencia filogenética sugiere que la multicelularidad evolucionó de forma ___ en distintos linajes de la vida."

explicacion: |
  La multicelularidad no es un rasgo que surgió una sola vez en un ancestro común de todos los eucariotas; en su lugar, ocurrió múltiples veces de forma convergente en animales, plantas, hongos y algas.
```

### 2 — Linajes multicelulares
```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "basico"
  tags: ["linajes", "taxonomia"]

variables:
  escenario: uno_de([
    ["Animales", "Metazoa", "con células especializadas"],
    ["Plantas", "Viridiplantae", "con paredes de celulosa"],
    ["Hongos", "Fungi", "con paredes de quitina"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Metazoa", "Viridiplantae", "Fungi", "Protista"]

enunciado: "Si observamos el linaje de las {escenario[0]}, este se caracteriza por la presencia de {escenario[2]}."

explicacion: |
  Cada uno de estos grupos representa un evento de transición hacia la multicelularidad en un momento distinto de la historia evolutiva.
```

### 3 — Verdadero o Falso: Convergencia
```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "basico"
  tags: ["convergencia", "evolucion"]

respuesta: falso
tipo: vf

enunciado: "La multicelularidad es un carácter derivado único que define a todos los organismos complejos en un solo evento evolutivo."

explicacion: |
  Esto es falso. La evolución de la multicelularidad es un ejemplo clásico de evolución convergente, donde diferentes grupos resolvieron el mismo problema biológico por separado.
```

### 4 — Grupos con multicelularidad
```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "intermedio"
  tags: ["algas", "organismos"]

respuesta: ["Animales", "Plantas", "Hongos", "Algas"]
tipo: ordenar

opciones_explicitas: ["Animales", "Plantas", "Hongos", "Algas"]

enunciado: "Ordena los siguientes grupos según su capacidad de haber desarrollado multicelularidad de forma independiente (de mayor a menor complejidad estructural común en la historia evolutiva):"

pasos:
  - "Identificar los linajes clave"
  - "Reconocer la independencia de sus orígenes"

explicacion: |
  Aunque todos son multicelulares, cada uno pertenece a un supergrupo eucariota distinto, lo que confirma que la transición ocurrió de forma independiente.
```

### 5 — El caso de las algas
```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "avanzado"
  tags: ["algas", "evolucion"]

variables:
  caso: uno_de([
    ["rojas", "Rhodophyta"],
    ["verdes", "Chlorophyta"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Rhodophyta", "Chlorophyta", "Oomycota"]

enunciado: "En el caso de las algas {caso[0]}, la aparición de estructuras multicelulares es un evento independiente al de las algas {caso[1]}."

explicacion: |
  Incluso dentro de los grupos que parecen similares, como las algas, la multicelularidad ha surgido en múltiples linajes distintos (algas rojas, verdes, pardas, etc.).
```