# Fisica — Circuitos mixtos (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de resistencia equivalente

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "equivalente", "conceptos"]

respuesta: "resistencia equivalente"
tipo: completar
respuestas_validas:
  - "resistencia equivalente"

enunciado: "En un circuito complejo que combina tramos en serie y en paralelo, la única resistencia que permite simplificar todo el sistema a un solo componente es la ___."

explicacion: |
  La resistencia equivalente es el valor de una resistencia única que puede sustituir a todo el conjunto de resistencias de un circuito, manteniendo la misma corriente y voltaje.
```

### 2 — Comportamiento en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["serie", "corriente", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un tramo de un circuito que está conectado en serie, la corriente eléctrica que circula por cada una de las resistencias es la misma."

explicacion: |
  Verdadero. En una conexión en serie, al haber un único camino para la carga, la intensidad de corriente (I) es constante en todos los puntos del tramo.
```

### 3 — Identificación de componentes

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["paralelo", "nodos", "voltaje"]

respuesta: "voltaje"
tipo: mc
opciones_explicitas: ["voltaje", "corriente", "resistencia", "potencia"]

enunciado: "En un tramo de un circuito conectado en paralelo, la propiedad que se mantiene constante en cada rama es el ___."

explicacion: |
  En una conexión en paralelo, todos los terminales de las resistencias están conectados a los mismos dos puntos (nodos), por lo que el voltaje es el mismo para todas.
```

### 4 — Pasos para la resolución

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["metodologia", "resolucion"]

respuesta_orden: ["identificar", "simplificar", "calcular"]
tipo: ordenar
opciones_explicitas: ["identificar", "simplificar", "calcular"]

enunciado: "Ordena los pasos lógicos para resolver un circuito mixto complejo:"

pasos:
  - "Identificar qué partes están en serie y cuáles en paralelo."
  - "Simplificar los tramos mediante el cálculo de resistencias equivalentes parciales."
  - "Calcular la resistencia total y las variables finales (I, V, R)."

explicacion: |
  Para resolver circuitos mixtos, primero se debe analizar la topología para separar tramos, luego reducir cada tramo a una resistencia equivalente y finalmente resolver el circuito simplificado.
```

### 5 — Suma de resistencias en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["serie", "calculo"]

variables:
  idx: uno_de([0, 1])
  escenarios: [[10, 5, 15], [20, 30, 50]]

respuesta: escenarios[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos un tramo de un circuito mixto con dos resistencias en serie de {escenarios[idx][0]} Ω y {escenarios[idx][1]} Ω, ¿cuál es su resistencia equivalente?"

pasos:
  - "Identificar que las resistencias están en serie."
  - "Sumar los valores de las resistencias: Req = R1 + R2."

explicacion: |
  En una conexión en serie, la resistencia total es la suma aritmética de las resistencias individuales.
```

### 6 — Resistencia equivalente en paralelo

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
tipo: completar
tolerancia_abs: 0.1

enunciado: "Dos resistencias, una de {R1} Ω y otra de {R2} Ω, se encuentran conectadas en paralelo. ¿Cuál es el valor de la resistencia equivalente (Req)?"

pasos:
  - "Calcular la resistencia equivalente usando la fórmula: 1/Req = 1/R1 + 1/R2"
  - "O la fórmula directa para dos resistencias: Req = (R1 · R2) / (R1 + R2)"
  - "Req = (10 · 40) / (10 + 40) = 400 / 50 = 8"

explicacion: |
  En una conexión en paralelo, la resistencia equivalente siempre es menor que la menor de las resistencias individuales. En este caso, 8 < 10.
```

### 7 — Identificación de componentes

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

### 8 — Análisis de circuito mixto

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "mixto"]

variables:
  idx: uno_de([0, 1])
  R_s: [6, 5]
  R_p: [4, 10]
  R_eq: [8, 10]

respuesta: R_eq[idx]
tipo: completar
tolerancia_abs: 0.1

enunciado: "En un circuito mixto, una resistencia de {R_s[idx]} Ω está en serie con un bloque en paralelo compuesto por dos resistencias de {R_p[idx]} Ω y {R_p[idx]} Ω. ¿Cuál es la resistencia equivalente total?"

pasos:
  - "Primero calculamos la resistencia del bloque en paralelo: Rp_eq = (Rp · Rp) / (Rp + Rp)"
  - "Luego sumamos la resistencia en serie: Req = Rs + Rp_eq"

explicacion: |
  Para resolver circuitos mixtos, primero se simplifican las partes en paralelo para convertirlas en una resistencia equivalente, y luego se suma con las resistencias que están en serie.
```

### 9 — Veracidad de leyes de Kirchhoff

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

### 10 — Pasos para resolver circuitos complejos

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["metodologia", "ordenar"]

opciones_explicitas: ["Identificar ramas en paralelo", "Simplificar ramas en paralelo", "Sumar resistencias en serie", "Calcular resistencia equivalente total"]
respuesta_orden: ["Identificar ramas en paralelo", "Simplificar ramas en paralelo", "Sumar resistencias en serie", "Calcular resistencia equivalente total"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver la resistencia equivalente de un circuito mixto complejo:"

explicacion: |
  El orden correcto implica simplificar de lo más interno (paralelos) hacia lo más externo (series) para reducir el circuito a una sola resistencia equivalente.
```

### 11 — ¿Resistencia equivalente en paralelo?

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
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un error común es pensar que la resistencia equivalente de dos resistencias en paralelo es la suma de sus valores. Si tenemos dos resistencias de {r1} $\\Omega$ y {r2} $\\Omega$ conectadas en paralelo, la resistencia equivalente es de ___ $\\Omega$."

pasos:
  - "Identificar que las resistencias están en paralelo."
  - "Aplicar la fórmula: 1 / Req = 1 / r1 + 1 / r2"
  - "Calcular: Req = (r1 * r2) / (r1 + r2)"

explicacion: |
  En un circuito en paralelo, la resistencia equivalente siempre es MENOR que la resistencia más pequeña del conjunto. En este caso, (10 * 10) / (10 + 10) = 100 / 20 = 5 $\Omega$.
```

### 12 — ¿Voltaje en tramos serie?

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

### 13 — ¿Corriente en tramos paralelo?

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["corriente", "paralelo", "concepto"]

respuesta: "se divide"
tipo: completar
respuestas_validas:
  - "se divide"
  - "se mantiene"
  - "aumenta"

enunciado: "En un circuito mixto, cuando la corriente llega a un nodo donde el camino se divide en dos ramas en paralelo, la corriente total ___ en las ramas."

explicacion: |
  En un circuito en paralelo, la corriente total se divide entre las ramas disponibles. La suma de las corrientes de cada rama es igual a la corriente que entra al nodo.
```

### 14 — Análisis de circuito mixto

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["resolucion", "pasos", "metodo"]

variables:
  casos: [[10, 5, 2, "serie-paralelo"], [20, 20, 10, "paralelo-serie"], [15, 30, 5, "serie-paralelo"]]
  idx: uno_de([0, 1, 2])
  r_serie: casos[idx][0]
  r_paralelo: casos[idx][1]
  r_extra: casos[idx][2]
  r_correcto: verdadero

respuesta: r_correcto
tipo: vf

enunciado: "Para resolver un circuito mixto complejo, se debe seguir un orden lógico de simplificación. Dado un circuito donde una resistencia {r_serie} está en serie con un bloque paralelo compuesto por {r_paralelo} y {r_extra}, ¿es correcto resolver primero el bloque paralelo y luego sumar la resistencia en serie?"

explicacion: |
  Primero se debe resolver la parte más interna o el bloque más simple (en este caso el paralelo) y luego sumar la resistencia que está en serie con ese bloque.
```

### 15 — ¿Resistencia total en serie?

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

### 16 — Diferencia fundamental: Serie vs Paralelo

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "corriente", "voltaje"]

tipo: mc
opciones_explicitas: ["La corriente es la misma en todos los componentes", "El voltaje es el mismo en todos los componentes", "La resistencia total disminuye al añadir componentes", "La corriente se divide entre las ramas"]

enunciado: "En un circuito en serie, a diferencia de un circuito en paralelo, la característica principal que se mantiene constante en todos los componentes es la ___."

respuesta: "La corriente es la misma en todos los componentes"

explicacion: |
  En un circuito en serie, solo existe un camino para la corriente, por lo que la intensidad es igual en todos los puntos. En paralelo, lo que se mantiene constante es el voltaje.
```

### 17 — Comportamiento de la resistencia equivalente

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia_equivalente", "paralelo"]

tipo: vf
enunciado: "En un circuito mixto que contiene una sección en paralelo, la resistencia equivalente de esa sección siempre será menor que la resistencia de cada uno de los componentes individuales en dicha sección."

respuesta: verdadero

explicacion: |
  Verdadero. En una configuración en paralelo, la resistencia equivalente siempre es menor que la menor de las resistencias individuales, ya que se ofrecen más caminos para el flujo de carga.
```

### 18 — Cálculo de resistencia en tramos

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 20], [30, 60]]
  resultados_texto: ["20", "60"]

tipo: completar
respuesta: resultados_texto[idx]

enunciado: "Si tenemos un circuito compuesto por una resistencia de {datos[idx][0]} Ω en serie con un bloque en paralelo formado por dos resistencias de {datos[idx][1]} Ω cada una, la resistencia equivalente total es de ___ Ω."

pasos:
  - "Calcular la resistencia equivalente de la sección en paralelo: Rp = (R2 * R3) / (R2 + R3)"
  - "Sumar la resistencia en serie a la resistencia equivalente obtenida: Rtotal = R1 + Rp"

explicacion: |
  Para este caso: Rp = {datos[idx][1]}*{datos[idx][1]} / ({datos[idx][1]}+{datos[idx][1]}). Total = {resultados_texto[idx]} Ω.
```

### 19 — (Re-generada) Cálculo de resistencia en tramos

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 20], [30, 60]]

tipo: completar
respuestas_validas:
  - 20
  - 60

enunciado: "Si tenemos un circuito compuesto por una resistencia de {datos[idx][0]} Ω en serie con un bloque en paralelo formado por dos resistencias de {datos[idx][1]} Ω cada una, la resistencia equivalente total es de ___ Ω."

pasos:
  - "Calcular la resistencia equivalente de la sección en paralelo: Rp = (R2 * R3) / (R2 + R3)"
  - "Sumar la resistencia en serie a la resistencia equivalente obtenida: Rtotal = R1 + Rp"

respuesta: datos[idx][0] + (datos[idx][1] / 2)

explicacion: |
  La resistencia en paralelo de dos iguales es la mitad de una. Luego se suma la serie.
```

### 20 — Orden de resolución de circuitos

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["metodologia", "resolucion"]

tipo: ordenar
opciones_explicitas: ["Identificar tramos en paralelo", "Calcular resistencias equivalentes de cada tramo", "Sumar las resistencias en serie para el total"]

enunciado: "Para resolver un circuito mixto, ¿cuál es el orden lógico de simplificación?"

respuesta_orden: ["Identificar tramos en paralelo", "Calcular resistencias equivalentes de cada tramo", "Sumar las resistencias en serie para el total"]

explicacion: |
  Primero se deben simplificar las partes más complejas (paralelos) para convertir el circuito en una cadena de componentes en serie, facilitando el cálculo final.
```

### 21 — Análisis de corriente en ramas

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["corriente", "ley_de_kirchhoff"]

tipo: mc
opciones_explicitas: ["La corriente se divide en las ramas en paralelo", "La corriente es la misma en todas las ramas", "La corriente aumenta en las ramas en paralelo", "La corriente es cero en las ramas en paralelo"]

enunciado: "Al pasar de un tramo en serie a un tramo en paralelo dentro de un circuito mixto, la corriente total del circuito ___."

respuesta: "La corriente se divide en las ramas en paralelo"

explicacion: |
  En un tramo en paralelo, la corriente total se bifurca, repartiéndose entre las distintas ramas según la resistencia de cada una (Ley de Corrientes de Kirchhoff).
```

### 22 — Resistencia equivalente en una linterna

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia", "serie", "paralelo"]

variables:
  escenario: uno_de([[10, 5, 2], [20, 10, 4], [5, 5, 5]])
  R1: escenario[0]
  R2: escenario[1]
  R3: escenario[2]

enunciado: "En una linterna, la resistencia R1 está en serie con un bloque en paralelo formado por R2 y R3. ¿Cuál es la resistencia equivalente total del circuito?"

pasos:
  - "Primero, calcula la resistencia equivalente del tramo en paralelo: Rp = 1 / (1/R2 + 1/R3)"
  - "Luego, suma la resistencia R1 al resultado anterior: Req = R1 + Rp"

respuesta: R1 + 1 / (1 / R2 + 1 / R3)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La resistencia equivalente de un tramo en paralelo se calcula como Rp = (R2 * R3) / (R2 + R3). 
  Al estar en serie con R1, la fórmula final es Req = R1 + Rp.
```

### 23 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["corriente", "ley_de_ohm"]

variables:
  datos: [[12, 2, 4, 4], [24, 3, 6, 6], [6, 2, 2, 2]]
  V: datos[0][0]
  R1: datos[0][1]
  R2: datos[0][2]
  R3: datos[0][3]

enunciado: "Si aplicamos un voltaje de {V}V a un circuito donde R1 está en serie con el paralelo de R2 y R3, y sabiendo que R2 = {R2}Ω y R3 = {R3}Ω, ¿la corriente total que sale de la fuente será mayor que si R2 y R3 estuvieran en serie?"

respuesta: verdadero
tipo: vf
explicacion: |
  Al poner R2 y R3 en paralelo, la resistencia equivalente del bloque disminuye en comparación con ponerlas en serie. 
  Al disminuir la resistencia total, la corriente total (I = V/Req) aumenta.
```

### 24 — Identificación de componentes

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["conceptos", "serie_paralelo"]

enunciado: "En un circuito mixto, si dos resistencias están conectadas de tal forma que la corriente que pasa por una es la misma que pasa por la otra, decimos que están en ___."

respuestas_validas:
  - "serie"
  - "paralelo"
respuesta: "serie"
tipo: completar

explicacion: |
  En una conexión en serie, no hay bifurcaciones, por lo que la intensidad de corriente es constante en todos los puntos del tramo.
```

### 25 — Cálculo de voltaje en un nodo

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["voltaje", "ley_de_kirchhoff"]

variables:
  config: [[10, 2, 4, 3], [20, 5, 5, 5], [12, 4, 2, 2]]
  V_total: config[0][0]
  R1: config[0][1]
  R2: config[0][2]
  R3: config[0][3]
  R_par: 1 / (1 / R2 + 1 / R3)

enunciado: "En un circuito con una fuente de {V_total}V, una resistencia R1 está en serie con un paralelo de R2 y R3. ¿Cuál es el voltaje que cae exclusivamente en el bloque paralelo (R2 y R3)?"

pasos:
  - "Calcula la resistencia equivalente total: Req = R1 + Rp"
  - "Calcula la corriente total: I_total = V_total / Req"
  - "Calcula el voltaje en el paralelo: Vp = I_total * Rp"

respuesta: (V_total / (R1 + 1 / (1 / R2 + 1 / R3))) * (1 / (1 / R2 + 1 / R3))
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El voltaje en el bloque paralelo es igual a la corriente total multiplicada por la resistencia equivalente de ese bloque.
```

### 26 — Orden de resolución de un esquema

```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Para resolver un circuito mixto complejo, ¿cuál es el orden lógico de simplificación de los componentes?"

opciones_explicitas: ["Identificar tramos en paralelo", "Simplificar tramos en paralelo a una resistencia equivalente", "Sumar resistencias en serie", "Calcular resistencia total"]
respuesta_orden: ["Identificar tramos en paralelo", "Simplificar tramos en paralelo a una resistencia equivalente", "Sumar resistencias en serie", "Calcular resistencia total"]
tipo: ordenar

explicacion: |
  El método estándar consiste en reducir el circuito por partes, empezando por los nodos más internos (paralelos) para convertir el circuito en uno de serie simple.
```
