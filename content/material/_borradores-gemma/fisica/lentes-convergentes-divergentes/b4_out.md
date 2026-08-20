### 1 — Diferencia de curvatura
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "lentes"]

opciones_explicitas: ["Las lentes convergentes son más gruesas en el centro que en los bordes", "Las lentes divergentes son más gruesas en el centro que en los bordes", "Ambas tienen la misma forma"]

respuesta: opciones_explicitas[0]
tipo: mc

enunciado: "En términos de su geometría física, la principal distinción respecto a su espesor es que ___."

explicacion: |
  Las lentes convergentes (o biconvexas) tienen un centro más grueso que sus bordes, lo que permite que los rayos de luz se unan en un punto focal. Las divergentes (bicóncavas) son más delgadas en el centro.
```

### 2 — Comportamiento de los rayos
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["optica", "rayos_luz"]

variables:
  tipo_lente: uno_de(["convergente", "divergente"])

respuesta: tipo_lente == "convergente"
tipo: vf

enunciado: "Si utilizamos una lente {tipo_lente}, los rayos de luz paralelos que inciden sobre ella se separan (divergen) tras el paso por la lente."

explicacion: |
  En una lente convergente, los rayos se acercan entre sí para pasar por un punto común. En una divergente, los rayos se alejan.
```

### 3 — Naturaleza de la imagen
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["imagen", "foco"]

variables:
  escenario: uno_de([0, 1])

respuesta: escenario_datos[escenario][1]

enunciado: "Considerando una lente {escenario_datos[escenario][0]}, la imagen formada por un objeto situado más allá del foco es ___."

variables:
  escenario_datos: [["lente convergente", "real"], ["lente divergente", "virtual"]]

explicacion: |
  Las lentes convergentes pueden formar imágenes reales (si el objeto está lejos) o virtuales (si está muy cerca). Las lentes divergentes siempre forman imágenes virtuales.
```

### 4 — Distancia focal y signo
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["foco", "signo"]

opciones_explicitas: ["Positiva", "Negativa"]

respuesta: opciones_explicitas[0]
tipo: mc

enunciado: "En el convenio de signos de la óptica, la distancia focal de una lente convergente se representa con un valor ___."

explicacion: |
  Por convención, las lentes convergentes tienen una distancia focal positiva ($f > 0$), mientras que las lentes divergentes tienen una distancia focal negativa ($f < 0$).
```

### 5 — Formación de la imagen (Pasos)
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["rayos_luz", "proceso"]

opciones_explicitas: ["Incidencia de rayos paralelos", "Refracción en la superficie de la lente", "Convergencia en el punto focal"]

respuesta: ["Incidencia de rayos paralelos", "Refracción en la superficie de la lente", "Convergencia en el punto focal"]
tipo: ordenar

enunciado: "Para que una lente convergente enfoque la luz en un punto, el proceso sigue este orden lógico:"

explicacion: |
  Primero los rayos viajan hacia la lente (incidencia), luego cambian de dirección al cruzar el material (refracción) y finalmente se cruzan en un punto (foco).
```