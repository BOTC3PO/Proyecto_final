### 1 — ¿Qué es una estructura cristalina?
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["cristalografía", "átomos"]

respuesta: "arreglo geométrico repetitivo y ordenado de átomos/iones"
tipo: completar
respuestas_validas: ["arreglo geométrico repetitivo y ordenado de átomos/iones", "un desorden total de partículas", "una estructura sin simetría"]

enunciado: "Una estructura cristalina se define como un ___."

explicacion: |
  Los cristales se caracterizan por tener un ordenamiento espacial de sus componentes (átomos, iones o moléculas) que se repite de forma periódica en las tres dimensiones del espacio.
```

### 2 — Sólidos cristalinos vs. amorfos
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["amorfo", "cristalino"]

variables:
  escenario: uno_de([["vidrio", "amorfo"], ["cuarzo", "cristalino"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Si un material como el {escenario[0]} carece de un ordenamiento de largo alcance en su estructura, se clasifica como un sólido ___."

explicacion: |
  Los sólidos amorfos, como el vidrio, carecen de la periodicidad característica de los cristales, presentando un desorden estructural a escala atómica.
```

### 3 — Componentes de la red
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["átomos", "red_cristalina"]

respuesta: "átomos, iones o moléculas"
tipo: completar
respuestas_validas: ["átomos, iones o moléculas"]

enunciado: "La unidad básica que se repite para formar la red de un cristal está compuesta por ___."

explicacion: |
  Dependiendo de la naturaleza del mineral, los puntos de la red pueden ser átomos elementales, iones en compuestos iónicos o moléculas en sólidos moleculares.
```

### 4 — Diferencia fundamental
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["orden", "desorden"]

respuesta: "orden"
tipo: mc
opciones_explicitas: ["orden", "desorden", "densidad", "color"]

enunciado: "La diferencia fundamental entre un cristal y un sólido amorfo radica en la presencia de:"

explicacion: |
  El orden es la clave: los cristales tienen un patrón repetitivo (orden), mientras que los amorfos tienen un desorden estructural.
```

### 5 — Clasificación de materiales
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["clasificación", "estructura"]

variables:
  ejemplo: uno_de([["diamante", "cristalino"], ["plástico", "amorfo"]])

respuesta: ejemplo[1]
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Considerando el caso del {ejemplo[0]}, su estructura interna es de tipo ___."

explicacion: |
  El diamante es el ejemplo clásico de un sólido con una estructura cristalina altamente ordenada de átomos de carbono.
```