### 1 — ¿Resistencia equivalente en paralelo?
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo", "error_comun"]

variables:
  r1: 10
  r2: 10

respuesta: 5
tipo: input
tolerancia_abs: 0.1

enunciado: "Un error común es pensar que la resistencia equivalente de dos resistencias en paralelo es la suma de sus valores. Si tenemos dos resistencias de {r1} $\Omega$ y {r2} $\Omega$ conectadas en paralelo, la resistencia equivalente es de ___ $\Omega$."

pasos:
  - "Identificar que las resistencias están en paralelo."
  - "Aplicar la fórmula: 1 / Req = 1 / r1 + 1 / r2"
  - "Calcular: Req = (r1 * r2) / (r1 + r2)"

explicacion: |
  En un circuito en paralelo, la resistencia equivalente siempre es MENOR que la resistencia más pequeña del conjunto. En este caso, (10 * 10) / (10 + 10) = 100 / 20 = 5 $\Omega$.
```

### 2 — ¿Voltaje en tramos serie?
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["voltaje", "serie", "concepto"]

respuesta: falso
tipo: vf

enunciado: "En un tramo de un circuito mixto donde dos resistencias están conectadas en serie, la diferencia de potencial (voltaje) es la misma para ambas resistencias."

explicacion: |
  Falso. En una conexión en serie, la corriente es la misma, pero el voltaje total se reparte entre las resistencias (según la Ley de Ohm, V = I * R). El voltaje es igual solo si las resistencias son idénticas, pero la afirmación general es falsa.
```

### 3 — ¿Corriente en tramos paralelo?
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["corriente", "paralelo", "concepto"]

respuesta: "se divide"
tipo: completar
respuestas_validas: ["se divide", "se mantiene", "aumenta"]

enunciado: "En un circuito mixto, cuando la corriente llega a un nodo donde el camino se divide en dos ramas en paralelo, la corriente total ___ en las ramas."

explicacion: |
  En un circuito en paralelo, la corriente total se divide entre las ramas disponibles. La suma de las corrientes de cada rama es igual a la corriente que entra al nodo.
```

### 4 — Análisis de circuito mixto
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["resolucion", "pasos", "metodo"]

variables:
  idx: uno_de([0,1,2])
  casos: [
    [10, 5, 2, "serie-paralelo"],
    [20, 20, 10, "paralelo-serie"],
    [15, 30, 5, "serie-paralelo"]
  ]
  r_serie: casos[idx][0]
  r_paralelo: casos[idx][1]
  r_extra: casos[idx][2]

respuesta: [r_paralelo, r_extra, r_serie]
tipo: ordenar
opciones_explicitas: [10, 5, 2, 20, 20, 10, 15, 30, 5]

enunciado: "Para resolver un circuito mixto complejo, se debe seguir un orden lógico de simplificación. Dado un circuito donde una resistencia {r_serie} está en serie con un bloque paralelo compuesto por {r_paralelo} y {r_extra}, ¿cuál es el orden correcto para hallar la resistencia equivalente total?"

explicacion: |
  Primero se debe resolver la parte más interna o el bloque más simple (en este caso el paralelo) y luego sumar la resistencia que está en serie con ese bloque.
```

### 5 — ¿Resistencia total en serie?
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "serie", "error_comun"]

variables:
  r_a: 5
  r_b: 15

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "es cero"]

enunciado: "Al añadir una resistencia adicional en serie a un tramo de un circuito mixto, la resistencia equivalente de ese tramo ___."

explicacion: |
  En una conexión en serie, las resistencias se suman (Req = R1 + R2 + ...). Por lo tanto, añadir más resistencias en serie siempre aumenta la resistencia total del tramo.
```