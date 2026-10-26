### 1 — Relación de Hubble
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["astronomia", "cosmologia"]

enunciado: "Según la Ley de Hubble, la velocidad de alejamiento (v) de una galaxia es directamente proporcional a su distancia (d). Esto se expresa mediante la fórmula v = H0 * d. Si una galaxia se encuentra a una distancia mayor, su velocidad de alejamiento será ___."

opciones_explicitas: ["menor", "mayor", "igual", "nula"]
respuesta: "mayor"
tipo: "mc"

explicacion: |
  La Ley de Hubble establece una relación de proporcionalidad directa: a mayor distancia, mayor es la velocidad con la que la galaxia se aleja de nosotros.
```

### 2 — Cálculo de velocidad
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["calculo", "astronomia"]

variables:
  distancia_m: 100000000
  h0_valor: 70

enunciado: "Utilizando una constante de Hubble H0 de {h0_valor} km/s/Mpc, calcula la velocidad de alejamiento de una galaxia situada a {distancia_m} Mpc."

pasos:
  - "Identificar la constante H0: 70 km/s/Mpc"
  - "Identificar la distancia: 100,000,000 Mpc"
  - "Multiplicar H0 por la distancia: 70 * 100,000,000"

respuesta: 7000000000
tipo: "input"
tolerancia_abs: 0

explicacion: |
  La velocidad se obtiene multiplicando la constante de Hubble por la distancia: 70 * 10^8 = 7 * 10^9 km/s.
```

### 3 — Estimación de la edad del universo
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["cosmologia", "tiempo"]

variables:
  idx: uno_de([0, 1])
  datos: [
    [70, "13.8"],
    [50, "20.0"]
  ]

enunciado: "La edad aproximada del universo se puede estimar mediante el inverso de la constante de Hubble (1/H0). Si tomamos un valor de H0 de {datos[idx][0]} km/s/Mpc, la edad estimada es de aproximadamente ___ miles de millones de años."

respuestas_validas: ["13.8", "20.0"]
respuesta: {datos[idx][1]}
tipo: "completar"

explicacion: |
  El tiempo estimado (edad del universo) es inversamente proporcional a H0. A mayor valor de la constante, menor es la edad estimada del universo.
```

### 4 — Conceptos clave de Hubble
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Ordena los elementos según la lógica de la expansión del universo descrita por Edwin Hubble, desde la causa hasta el efecto observado:"

opciones_explicitas: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
respuesta: ["Expansión del espacio", "Aumento de la distancia entre galaxias", "Aumento de la velocidad de alejamiento"]
tipo: "ordenar"

explicacion: |
  La expansión del espacio provoca que las galaxias se alejen (aumenta la distancia), lo cual se traduce en una velocidad de alejamiento mayor según la Ley de Hubble.
```

### 5 — Verdad o Falso
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "¿Es correcto afirmar que si la constante de Hubble (H0) fuera mayor, el universo sería más joven?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "mc"

explicacion: |
  Verdadero. Como la edad es aproximadamente 1/H0, un valor de H0 más grande implica un tiempo (edad) menor.
```