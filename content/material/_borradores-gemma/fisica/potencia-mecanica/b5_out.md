### 1 — Potencia de un motor de elevación
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["trabajo", "tiempo", "potencia"]

variables:
  escenario: uno_de([[1000, 500, 2000], [2500, 1000, 400], [1500, 800, 600]])
  w: escenario[0]
  t: escenario[1]
  p: escenario[2]

respuesta: w / t
tipo: input
tolerancia_abs: 0.1

enunciado: "Un motor realiza un trabajo de {w} J para elevar una carga durante un tiempo de {t} s. ¿Cuál es la potencia mecánica desarrollada por el motor en Watts?"

pasos:
  - "Identificar el trabajo realizado (W = {w} J)"
  - "Identificar el tiempo transcurrido (t = {t} s)"
  - "Aplicar la fórmula de potencia: P = W / t"

explicacion: |
  La potencia mecánica se define como la rapidez con la que se realiza un trabajo. 
  En este caso: P = {w} J / {t} s = {redondear(w/t, 2)} W.
```

### 2 — Análisis de potencia mecánica
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["conceptos", "unidades"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "Si un objeto realiza un trabajo de 500 Joules en 10 segundos, la unidad de medida de la potencia resultante es la unidad de..."

explicacion: |
  La potencia es la relación entre trabajo (J) y tiempo (s). 
  J/s es equivalente a la unidad de potencia, el Watt (W).
```

### 3 — Comparación de potencias
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  datos: [[100, 5, 1000, 20], [50, 2, 500, 50], [200, 10, 100, 5]]
  idx: uno_de([0, 1, 2])
  w1: datos[idx][0]
  t1: datos[idx][1]
  w2: datos[idx][2]
  t2: datos[idx][3]
  p1: w1 / t1
  p2: w2 / t2

respuesta: p1 > p2
tipo: vf

enunciado: "Se comparan dos máquinas. La máquina A realiza {w1} J en {t1} s. La máquina B realiza {w2} J en {t2} s. ¿Es la potencia de la máquina A mayor que la de la máquina B?"

explicacion: |
  Calculamos las potencias:
  P_A = {w1} / {t1} = {redondear(p1, 2)} W
  P_B = {w2} / {t2} = {redondear(p2, 2)} W
  La afirmación es {p1 > p2}.
```

### 4 — Cálculo de tiempo necesario
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["despeje", "tiempo"]

variables:
  escenario: uno_de([[500, 100], [1200, 300], [400, 50]])
  w: escenario[0]
  p: escenario[1]
  t: w / p

respuesta: t
tipo: completar
respuestas_validas: [5, 4, 8]

enunciado: "Una máquina tiene una potencia constante de {p} W. ¿Cuántos segundos tardará en realizar un trabajo de {w} J? La respuesta es ___ s."

explicacion: |
  Para hallar el tiempo, despejamos la fórmula de potencia:
  P = W / t  =>  t = W / P
  t = {w} / {p} = {t} s.
```

### 5 — Orden de procesos para calcular potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el trabajo realizado", "Dividir el trabajo por el tiempo", "Identificar los datos de trabajo y tiempo"]
respuesta: ["Calcular el trabajo realizado", "Dividir el trabajo por el tiempo", "Identificar los datos de trabajo y tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide la potencia, pero solo se conocen la fuerza, la distancia y el tiempo."

pasos:
  - "Paso 1: Identificar los datos de trabajo y tiempo"
  - "Paso 2: Calcular el trabajo realizado (W = F * d)"
  - "Paso 3: Dividir el trabajo por el tiempo (P = W / t)"

explicacion: |
  Primero debemos obtener el trabajo (W) usando la fuerza y la distancia, y luego aplicar la definición de potencia dividiendo por el tiempo.
```