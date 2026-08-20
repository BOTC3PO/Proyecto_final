### 1 — Identificación de la radiación alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particula", "carga"]

enunciado: "La radiación alfa está compuesta por un núcleo de helio, lo que significa que posee una carga eléctrica de ___."

respuestas_validas: ["+2", "+2", "+2"]
respuesta: "+2"
tipo: completar

explicacion: |
  Una partícula alfa consiste en 2 protones y 2 neutrones, resultando en una carga de +2.
```

### 2 — Comparación de poder de penetración
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetración", "alfa", "beta", "gamma"]

opciones_explicitas: ["La radiación gamma tiene mayor capacidad de penetración que la beta", "La radiación alfa tiene mayor capacidad de penetración que la gamma", "La radiación beta tiene mayor capacidad de penetración que la alfa"]

enunciado: "Considerando la capacidad de atravesar la materia, ¿cuál de las siguientes afirmaciones es correcta?"

respuesta: "La radiación gamma tiene mayor capacidad de penetración que la beta"
tipo: mc

explicacion: |
  La radiación gamma, al ser una onda electromagnética de alta energía sin masa ni carga, atraviesa la materia con mucha más facilidad que las partículas alfa o beta.
```

### 3 — Naturaleza de la radiación gamma
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["gamma", "fotones"]

enunciado: "¿Es la radiación gamma una partícula con masa y carga eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  A diferencia de las partículas alfa y beta, la radiación gamma es radiación electromagnética (fotones) y no posee masa ni carga.
```

### 4 — Diferencia entre decaimiento beta y alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["beta", "neutrino", "nucleo"]

variables:
  escenario: uno_de([[1, "electrón"], [2, "neutrón"]])

enunciado: "En un decaimiento beta negativo, un neutrón se transforma en un protón y emite una partícula tipo {escenario[idx]} para conservar la carga."

pasos:
  - "Identificar la partícula emitida en el decaimiento beta-"
  - "Comparar con la composición del núcleo"

respuestas_validas: ["electrón", "electrón"]
respuesta: "electrón"
tipo: completar

explicacion: |
  En el decaimiento beta menos, un neutrón se convierte en un protón, emitiendo un electrón (partícula beta) y un antineutrino.
```

### 5 — Secuencia de interacción con la materia
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["interacción", "materia", "orden"]

opciones_explicitas: ["Alfa, Beta, Gamma", "Gamma, Beta, Alfa", "Alfa, Gamma, Beta"]

enunciado: "Ordena las radiaciones de mayor a menor capacidad de penetración (de la que más atraviesa a la que menos atraviesa):"

respuesta: ["Gamma, Beta, Alfa"]
tipo: ordenar

explicacion: |
  El orden de penetración es: Gamma (máxima, atraviesa casi todo), Beta (media, requiere láminas de aluminio) y Alfa (mínima, es detenida por una hoja de papel).
```