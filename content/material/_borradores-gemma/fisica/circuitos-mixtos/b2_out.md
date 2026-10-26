### 1 — Resistencia equivalente en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "paralelo"]

variables:
  R1: 10
  R2: 40

respuesta: 8.0
tipo: input
tolerancia_abs: 0.1

enunciado: "Dos resistencias, una de {R1} $\Omega$ y otra de {R2} $\Omega$, se encuentran conectadas en paralelo. ¿Cuál es el valor de la resistencia equivalente ($R_{eq}$)?"

pasos:
  - "Calcular la resistencia equivalente usando la fórmula: $1/R_{eq} = 1/R_1 + 1/R_2$"
  - "O la fórmula directa para dos resistencias: $R_{eq} = (R_1 \cdot R_2) / (R_1 + R_2)$"
  - "$R_{eq} = (10 \cdot 40) / (10 + 40) = 400 / 50 = 8$"

explicacion: |
  En una conexión en paralelo, la resistencia equivalente siempre es menor que la menor de las resistencias individuales. En este caso, $8 < 10$.
```

### 2 — Identificación de componentes
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["conceptos", "serie_paralelo"]

respuesta: "serie"
tipo: mc
opciones_explicitas: ["serie", "paralelo", "mixto"]

enunciado: "Si dos resistencias están conectadas una tras otra, de modo que la corriente que pasa por la primera debe pasar obligatoriamente por la segunda, estamos ante una conexión en ___."

explicacion: |
  En una conexión en serie, no hay caminos alternativos para la corriente; todos los componentes comparten la misma intensidad de corriente.
```

### 3 — Análisis de circuito mixto
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "mixto"]

variables:
  idx: uno_de([0, 1])
  datos: [[12, 4, 6], [20, 10, 20]]
  R_s: [6, 5]
  R_p: [4, 10]
  R_eq: [3, 5]

respuesta: R_eq[idx]
tipo: input
tolerancia_abs: 0.1

enunciado: "En un circuito mixto, una resistencia de {R_s[idx]} $\Omega$ está en serie con un bloque en paralelo compuesto por dos resistencias de {R_p[idx]} $\Omega$ y {R_p[idx]} $\Omega$. ¿Cuál es la resistencia equivalente total?"

pasos:
  - "Primero calculamos la resistencia del bloque en paralelo: $R_p\_eq = (R_p \cdot R_p) / (R_p + R_p)$"
  - "Luego sumamos la resistencia en serie: $R_{eq} = R_s + R_p\_eq$"

explicacion: |
  Para resolver circuitos mixtos, primero se simplifican las partes en paralelo para convertirlas en una resistencia equivalente, y luego se suma con las resistencias que están en serie.
```

### 4 — Veracidad de leyes de Kirchhoff
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["leyes", "teoria"]

respuesta: falso
tipo: vf

enunciado: "En un circuito mixto, la corriente total que sale de la fuente es igual a la suma de las corrientes que pasan por cada una de las ramas en paralelo."

explicacion: |
  Falso. La corriente total es la suma de las corrientes de las ramas en paralelo, pero esto solo se cumple si la fuente está en serie con el bloque paralelo. La afirmación es una generalización incorrecta de la Ley de Corrientes de Kirchhoff aplicada a cualquier punto del circuito.
```

### 5 — Pasos para resolver circuitos complejos
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["metodologia", "ordenar"]

opciones_explicitas: ["Identificar ramas en paralelo", "Simplificar ramas en paralelo", "Sumar resistencias en serie", "Calcular resistencia equivalente total"]
respuesta: ["Identificar ramas en paralelo", "Simplificar ramas en paralelo", "Sumar resistencias en serie", "Calcular resistencia equivalente total"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver la resistencia equivalente de un circuito mixto complejo:"

explicacion: |
  El orden correcto implica simplificar de lo más interno (paralelos) hacia lo más externo (series) para reducir el circuito a una sola resistencia equivalente.
```