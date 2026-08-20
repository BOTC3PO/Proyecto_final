### 1 — Partícula Alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["nucleo", "alfa"]

respuesta: "núcleo de helio"
tipo: completar
respuestas_validas: ["núcleo de helio", "particula alfa"]

enunciado: "La radiación alfa consiste en la emisión de un ___."

explicacion: |
  Una partícula alfa es idéntica al núcleo de un átomo de helio, compuesta por dos protones y dos neutrones.
```

### 2 — Carga de la radiación Beta
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

variables:
  escenario_idx: uno_de([0, 1])
  particula_beta: uno_de(["electrón", "positrón"])

respuesta: "negativa"
tipo: mc
opciones_explicitas: ["positiva", "negativa", "neutra"]

enunciado: "En el decaimiento beta menos ($\beta^-$), un neutrón se transforma en un protón y se emite una partícula de carga {particula_beta}."

explicacion: |
  En el decaimiento beta menos, el neutrón se convierte en protón y emite un electrón (carga negativa).
```

### 3 — Naturaleza de la radiación Gamma
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

respuesta: verdadero
tipo: vf

enunciado: "¿La radiación gamma está compuesta por fotones de alta energía y no posee carga eléctrica ni masa?"

explicacion: |
  Correcto. A diferencia de las partículas alfa y beta, la radiación gamma es energía electromagnética pura (fotones).
```

### 4 — Comparación de alcance
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["alcance", "radiacion"]

variables:
  tipo_rad: uno_de(["alfa", "beta", "gamma"])
  alcance_desc: uno_de(["muy corto", "moderado", "muy alto"])

respuesta: alcance_desc[tipo_rad]
tipo: mc
opciones_explicitas: ["muy corto", "moderado", "muy alto"]

enunciado: "El alcance de la radiación tipo {tipo_rad} en el aire es {alcance_desc}."

explicacion: |
  La partícula alfa tiene un alcance muy corto (se detiene con una hoja de papel), la beta un alcance moderado y la gamma un alcance muy alto.
```

### 5 — Secuencia de desintegración
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["secuencia", "nucleo"]

respuesta: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]
tipo: ordenar
opciones_explicitas: ["emisión de partículas alfa", "emisión de partículas beta", "emisión de radiación gamma"]

enunciado: "Ordene las siguientes emisiones según su capacidad de penetración (de menor a mayor):"

explicacion: |
  La radiación alfa tiene la menor capacidad de penetración, seguida por la beta, mientras que la gamma es la más penetrante.
```