### 1 — Clasificación celular básica
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "clasificacion"]

variables:
  escenario: uno_de([["Amoeba proteus", "unicelular"], ["Homo sapiens", "multicelular"]])
  idx: uno_de([0, 1])

enunciado: "El organismo {escenario[0]} se caracteriza por ser un organismo ___________."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["unicelular", "multicelular"]

explicacion: |
  Los organismos unicelulares están formados por una sola célula que realiza todas las funciones vitales, mientras que los multicelulares están formados por múltiples células especializadas.
```

### 2 — El salto a la complejidad
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["evolucion", "celulas"]

variables:
  caso: uno_de([["un grupo de algas verdes", "multicelulares"], ["una bacteria extremófila", "unicelulares"]])
  idx: uno_de([0, 1])

enunciado: "Considerando el ejemplo de {caso[0]}, podemos clasificar a este grupo como ___________."

respuesta: caso[1]
tipo: completar
respuestas_validas: ["unicelulares", "multicelulares"]

explicacion: |
  La multicelularidad implica la especialización celular y la división de funciones, algo que no ocurre en los organismos unicelulares.
```

### 3 — Identificación de organismos
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "taxonomia"]

variables:
  organismo: uno_de([["Paramecium", "unicelular"], ["Fungi (hongo)", "multicelular"]])
  idx: uno_de([0, 1])

enunciado: "Si observamos un {organismo[0]}, su estructura es ___________."

respuesta: organismo[1]
tipo: mc
opciones_explicitas: ["unicelular", "multicelular"]

explicacion: |
  La distinción fundamental radica en el número de células que componen el individuo.
```

### 4 — Secuencia evolutiva de complejidad
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["evolucion", "orden"]

enunciado: "Ordena los niveles de organización biológica desde el más simple al más complejo:"

pasos:
  - "Organismo unicelular"
  - "Colonia de células"
  - "Organismo multicelular con tejidos"

respuesta: ["Organismo unicelular", "Colonia de células", "Organismo multicelular con tejidos"]
tipo: ordenar
opciones_explicitas: ["Organismo unicelular", "Colonia de células", "Organismo multicelular con tejidos"]

explicacion: |
  La evolución hacia la multicelularidad implica pasar de células aisladas a agrupaciones con comunicación y especialización.
```

### 5 — Análisis de muestras
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["laboratorio", "observacion"]

variables:
  muestra: uno_de([["una muestra de levadura", "unicelular"], ["una muestra de musgo", "multicelular"]])
  idx: uno_de([0, 1])

enunciado: "Al analizar {muestra[0]} bajo el microscopio, determinamos que es ___________."

respuesta: muestra[1]
tipo: completar
respuestas_validas: ["unicelular", "multicelular"]

explicacion: |
  La observación microscópica permite identificar si la unidad funcional es una célula individual o un conjunto de ellas organizadas.
```