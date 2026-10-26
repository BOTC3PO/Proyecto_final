### 1 — Concepto de Mineral
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definiciones", "geologia"]

tipo: mc
opciones_explicitas: ["Un agregado de varios minerales", "Una sustancia pura con estructura cristalina definida", "Una mezcla de materia orgánica e inorgánica", "Un fragmento de corteza terrestre sin estructura"]

enunciado: "Desde una perspectiva geológica, ¿cuál es la definición fundamental de un mineral?"

explicacion: |
  Un mineral es una sustancia sólida, inorgánica, con una composición química definida y una estructura atómica ordenada (cristalina).
```

### 2 — Identificación de Rocas
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  escenario: uno_de([
    ["Granito", ["cuarzo", "feldespato", "mica"]],
    ["Basalto", ["olivino", "piroxeno", "plagioclasa"]],
    ["Caliza", ["calcita"]]
  ])

tipo: completar
respuestas_validas: ["cuarzo", "feldespato", "mica", "olivino", "piroxeno", "plagioclasa", "calcita"]

enunciado: "Si observamos una muestra de {escenario[0]}, estamos ante una roca compuesta por diversos minerales, como por ejemplo {escenario[1][0]}, {escenario[1][1]} y {escenario[1][2]}."

pasos:
  - "Identifica si el material es una sustancia única o un agregado."
  - "Observa los componentes individuales que forman el conjunto."

explicacion: |
  El {escenario[0]} es una roca porque es un agregado de los minerales listados.
```

### 3 — Relación Mineral-Roca
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["relaciones", "estructuras"]

tipo: completar
respuestas_validas: ["mineral", "roca"]

enunciado: "Un ejemplar de cuarzo puro se clasifica como un ________, mientras que una masa de granito se clasifica como una ________."

explicacion: |
  El cuarzo es una sustancia individual (mineral), mientras que el granito es un agregado de varios minerales (roca).
```

### 4 — Clasificación de Componentes
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["ordenar", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Átomos", "Cristales (Minerales)", "Rocas"]

enunciado: "Ordena los siguientes elementos de menor a mayor complejidad estructural en la formación de la corteza terrestre:"

explicacion: |
  Los átomos se organizan en redes cristalinas para formar minerales, y los minerales se agrupan para formar rocas.
```

### 5 — Análisis de Composición
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["analisis", "composicion"]

variables:
  caso: uno_de([
    ["feldespato", "mineral"],
    ["granito", "roca"]
  ])

tipo: mc
opciones_explicitas: ["mineral", "roca"]

enunciado: "Considerando el elemento {caso[0]}, su clasificación técnica es: ________."

explicacion: |
  Según el caso seleccionado, {caso[0]} es un/a {caso[1]}.
```