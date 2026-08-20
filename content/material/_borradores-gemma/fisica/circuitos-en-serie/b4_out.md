### 1 — Resistencia total en serie
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  r1: 10
  r2: 20
  r3: 30

respuesta: r1 + r2 + r3
tipo: input
tolerancia_abs: 0.01

enunciado: "En un circuito en serie con tres resistencias de {r1} Ω, {r2} Ω y {r3} Ω, ¿cuál es el valor de la resistencia equivalente total?"

explicacion: |
  En un circuito en serie, la resistencia total es la suma aritmética de todas las resistencias individuales: R_total = R1 + R2 + ... + Rn.
```

### 2 — Corriente en circuitos en serie
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "comparacion"]

opciones_explicitas: ["Es la misma en todos los puntos del circuito", "Se divide entre las distintas resistencias", "Es mayor en las resistencias más grandes"]

respuesta: opciones_explicitas[0]
tipo: mc

enunciado: "Al comparar un circuito en serie con uno en paralelo, ¿cuál es la característica fundamental de la intensidad de corriente en un circuito en serie?"

explicacion: |
  A diferencia de los circuitos en paralelo donde la corriente se divide, en un circuito en serie la corriente es la misma en cualquier punto del circuito porque solo hay un camino para las cargas.
```

### 3 — Tensión en serie vs paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje"]

variables:
  idx: uno_de([0, 1])
  datos: [["se reparte entre los componentes", "es la misma para todos los componentes"], ["se divide entre las distintas ramas", "es la misma en todas las ramas"]]

respuesta: datos[idx][0]
tipo: vf

enunciado: "En un circuito en serie con múltiples receptores, la tensión total de la fuente ___."

explicacion: |
  En un circuito en serie, la tensión total es la suma de las caídas de tensión en cada componente (la tensión se reparte). En un circuito en paralelo, la tensión es la misma en todos los componentes.
```

### 4 — Comportamiento de la corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["corriente", "comparacion"]

opciones_explicitas: ["La corriente disminuye al aumentar la resistencia total", "La corriente aumenta al aumentar la resistencia total", "La corriente permanece constante sin importar la resistencia"]

respuesta: opciones_explicitas[0]
tipo: mc

enunciado: "Si añadimos una resistencia adicional en serie a un circuito ya existente, ¿qué sucede con la intensidad de corriente total (asumiendo voltaje constante)?"

explicacion: |
  Según la Ley de Ohm (I = V/R), si la resistencia total aumenta debido a la conexión en serie, la intensidad de corriente disminuye.
```

### 5 — Orden de la resistencia equivalente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "avanzado"
  tags: ["resistencia", "comparacion"]

variables:
  r_serie: 60
  r_paralelo: 6.66

respuesta: ["Resistencia en serie", "Resistencia en paralelo"]
tipo: ordenar

enunciado: "Ordena los conceptos de mayor a menor valor de resistencia equivalente, considerando que tenemos dos resistencias de 10 Ω y 20 Ω conectadas de forma distinta."

explicacion: |
  Para R1=10 y R2=20:
  En serie: R_eq = 10 + 20 = 30 Ω.
  En paralelo: R_eq = (10 * 20) / (10 + 20) = 200 / 30 = 6.66 Ω.
  Por lo tanto, la resistencia en serie es mayor que la resistencia en paralelo.
```