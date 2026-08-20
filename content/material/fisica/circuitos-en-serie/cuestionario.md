# Fisica — Circuitos en serie (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
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
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie", "conceptos"]

tipo: mc
opciones_explicitas: ["La suma de las resistencias individuales", "La inversa de la suma de las resistencias", "La media de las resistencias", "La resta de las resistencias"]
respuesta: "La suma de las resistencias individuales"

enunciado: "En un circuito en serie, la resistencia total o equivalente es igual a ___."

explicacion: |
  En un circuito en serie, las resistencias se conectan una tras otra, por lo que la resistencia total es la suma algebraica de todas las resistencias del circuito.
```

### 2 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "intensidad"]

tipo: vf
respuesta: verdadero

enunciado: "En un circuito en serie, la intensidad de corriente que circula por cada uno de los componentes es la misma."

explicacion: |
  Al haber un único camino para el flujo de electrones, la carga no tiene otra vía para circular, por lo tanto, la intensidad es constante en todos los puntos del circuito.
```

### 3 — Distribución de la tensión

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje", "ley_de_kirchhoff"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["12V", "24V"], ["10V", "20V"]]
  componentes: [["R1=2Ω, R2=4Ω", "R1=5Ω, R2=5Ω"], ["R1=10Ω, R2=10Ω", "R1=2Ω, R2=8Ω"]]

tipo: completar
respuestas_validas:
  - "12V"
  - "24V"
  - "10V"
  - "20V"
respuesta: datos[escenario_idx][0]

enunciado: "Si tenemos un circuito con una fuente de tensión de {datos[escenario_idx][0]} y dos resistencias, la suma de las caídas de tensión en cada resistencia debe ser igual a ___."

explicacion: |
  Según la Ley de Kirchhoff de tensiones, la suma de las caídas de potencial en un lazo cerrado es igual a la tensión total suministrada por la fuente.
```

### 4 — Componentes de un circuito

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["vocabulario", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuente de tensión", "Interruptor", "Resistencias", "Cables de conexión"]
respuesta_orden: ["Fuente de tensión", "Interruptor", "Resistencias", "Cables de conexión"]

enunciado: "Ordena los elementos de un circuito básico desde la fuente de energía hasta el receptor, pasando por el control y la conducción:"

explicacion: |
  Un circuito típico comienza con la fuente de energía, sigue por el dispositivo de control (interruptor), los elementos de carga (resistencias/receptores) y el conductor (cables).
```

### 5 — Dependencia de la resistencia total

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

tipo: mc
opciones_explicitas: ["Aumenta", "Disminuye", "Se mantiene igual", "Se vuelve cero"]
respuesta: "Aumenta"

enunciado: "Si añadimos una resistencia adicional a un circuito que ya está en serie, la resistencia total del circuito ___."

explicacion: |
  Como la resistencia total en serie es la suma de todas las resistencias ($R_t = R_1 + R_2 + ... + R_n$), añadir más elementos siempre incrementará el valor de la resistencia total.
```

### 6 — Resistencia equivalente en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  r1: 10.0
  r2: 20.0
  r3: 30.0

respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se conectan tres resistencias en serie con valores de {r1} $\\Omega$, {r2} $\\Omega$ y {r3} $\\Omega$. ¿Cuál es el valor de la resistencia total del circuito?"

pasos:
  - "Identificar las resistencias: R1 = 10, R2 = 20, R3 = 30"
  - "En un circuito en serie, la resistencia total es la suma de las resistencias individuales: R_total = R1 + R2 + R3"
  - "Calcular: 10 + 20 + 30 = 60"

explicacion: |
  En un circuito en serie, la resistencia total es siempre la suma algebraica de todas las resistencias presentes en la rama.
```

### 7 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "ley_de_ohm"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito de corriente continua con resistencias conectadas en serie, ¿la intensidad de corriente es la misma en todos los puntos del circuito?"

explicacion: |
  Verdadero. En un circuito en serie solo existe un camino para el flujo de electrones, por lo que la carga que pasa por una resistencia es la misma que pasa por las demás.
```

### 8 — Distribución de tensión

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje"]

variables:
  v_total: 24.0
  r1: 4.0
  r2: 8.0
  r3: 4.0
  idx: uno_de([0, 1])
  resistencia_label: ["R1", "R2"]
  resultados_texto: ["6.0 V", "12.0 V"]

respuesta: resultados_texto[idx]
tipo: mc
opciones_explicitas: ["6.0 V", "12.0 V", "8.0 V", "16.0 V"]

enunciado: "Un circuito en serie tiene una fuente de {v_total} V y tres resistencias: R1 = {r1} Ω, R2 = {r2} Ω y R3 = {r3} Ω. Si calculamos la caída de tensión en la resistencia {resistencia_label[idx]}, ¿cuál es el valor obtenido?"

explicacion: |
  R_total = R1 + R2 + R3 = 16 Ω.
  La caída de tensión en cada resistencia es proporcional a su valor: V = V_total * (R / R_total).
  Para {resistencia_label[idx]}: V = {resultados_texto[idx]}.
```

### 9 — Cálculo de corriente total

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["ley_de_ohm", "corriente"]

variables:
  v_fuente: 12.0
  r_total: 4.0

respuesta: 3.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito en serie tiene una resistencia total de {r_total} $\\Omega$ y se alimenta con una fuente de {v_fuente} V. ¿Cuál es la intensidad de corriente total que circula por el circuito?"

pasos:
  - "Aplicar la Ley de Ohm: I = V / R"
  - "Sustituir valores: I = 12 / 4"
  - "Resultado: I = 3 A"

explicacion: |
  La corriente se calcula dividiendo la tensión total por la resistencia equivalente del circuito.
```

### 10 — Pasos para resolver un circuito

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular la resistencia total sumando las resistencias", "Calcular la corriente total usando la Ley de Ohm", "Calcular las caídas de tensión individuales"]
respuesta_orden: ["Calcular la resistencia total sumando las resistencias", "Calcular la corriente total usando la Ley de Ohm", "Calcular las caídas de tensión individuales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar la tensión en una resistencia específica dentro de un circuito en serie dado el voltaje total y las resistencias."

explicacion: |
  Primero necesitas la resistencia total para hallar la corriente. Una vez que tienes la corriente, puedes hallar la tensión en cualquier componente usando V = I * R.
```

### 11 — Resistencia equivalente en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie", "ley_de_ohm"]

variables:
  r1: 10
  r2: 20
  r3: 30

respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un circuito en serie con tres resistencias de {r1} Ω, {r2} Ω y {r3} Ω, ¿cuál es el valor de la resistencia total (equivalente) del circuito?"

pasos:
  - "Identificar que en un circuito en serie, la resistencia total es la suma de las resistencias individuales."
  - "Sumar los valores: {r1} + {r2} + {r3}."

explicacion: |
  En una configuración en serie, la resistencia total es siempre la suma aritmética de todas las resistencias presentes en la rama.
```

### 12 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "intensidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en serie, la intensidad de corriente que circula por cada uno de los componentes es la misma."

explicacion: |
  Verdadero. Al haber un solo camino para el flujo de electrones, la carga debe pasar por todos los componentes en la misma cantidad, por lo que la corriente es constante en todo el circuito.
```

### 13 — Distribución de la tensión

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje", "ley_de_kirchhoff"]

variables:
  v_total: 12
  r1: 5
  r2: 7

respuesta_orden: ["V1", "V2"]
tipo: ordenar

opciones_explicitas: ["V1", "V2"]

enunciado: "Si tenemos dos resistencias en serie con una tensión total de {v_total}V, donde la primera resistencia consume {r1}V y la segunda consume {r2}V, ordena los componentes según el orden en que se reparte la tensión total (de mayor a menor consumo)."

explicacion: |
  En un circuito en serie, la tensión total se reparte entre los componentes. La suma de las caídas de tensión en cada resistencia debe ser igual a la tensión de la fuente.
```

### 14 — Error de la resistencia total

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo_vs_serie"]

variables:
  r1: 10
  r2: 10

respuesta: "La resistencia total disminuye"
tipo: mc

opciones_explicitas: ["La resistencia total aumenta", "La resistencia total disminuye", "La resistencia total permanece igual"]

enunciado: "Si añadimos una segunda resistencia de {r1} Ω en serie a una resistencia ya existente de {r1} Ω, ¿qué sucede con la resistencia total del circuito?"

explicacion: |
  Al añadir componentes en serie, se incrementa la oposición total al paso de la corriente, por lo tanto, la resistencia total aumenta.
```

### 15 — Cálculo de corriente en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "avanzado"
  tags: ["corriente", "ley_de_ohm", "calculo"]

variables:
  v_fuente: 24
  r1: 4
  r2: 8

respuesta: 2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una fuente de {v_fuente}V conectada a dos resistencias en serie de {r1} Ω y {r2} Ω. ¿Cuál es la intensidad de corriente que circula por el circuito?"

pasos:
  - "Calcular la resistencia total: R_total = {r1} + {r2}."
  - "Usar la Ley de Ohm: I = V / R_total."

explicacion: |
  Primero sumamos las resistencias: 4 + 8 = 12 Ω. Luego aplicamos la Ley de Ohm: I = 24V / 12Ω = 2A.
```

### 16 — Resistencia total en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  datos: [[10, 20, 30], [5, 15, 25], [8, 12, 20]]
  idx: uno_de([0, 1, 2])
  r1: datos[idx][0]
  r2: datos[idx][1]
  r3: datos[idx][2]

respuestas_validas:
  - r1 + r2 + r3
respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un circuito en serie con tres resistencias de {r1} Ω, {r2} Ω y {r3} Ω, ¿cuál es el valor de la resistencia equivalente total?"

explicacion: |
  En un circuito en serie, la resistencia total es la suma aritmética de todas las resistencias individuales: R_total = R1 + R2 + ... + Rn.
```

### 17 — Corriente en circuitos en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "comparacion"]

opciones_explicitas: ["Es la misma en todos los puntos del circuito", "Se divide entre las distintas resistencias", "Es mayor en las resistencias más grandes"]

respuesta: "Es la misma en todos los puntos del circuito"
tipo: mc

enunciado: "Al comparar un circuito en serie con uno en paralelo, ¿cuál es la característica fundamental de la intensidad de corriente en un circuito en serie?"

explicacion: |
  A diferencia de los circuitos en paralelo donde la corriente se divide, en un circuito en serie la corriente es la misma en cualquier punto del circuito porque solo hay un camino para las cargas.
```

### 18 — Tensión en serie vs paralelo

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
tipo: completar
enunciado: "En un circuito en serie con múltiples receptores, la tensión total de la fuente ___."

explicacion: |
  En un circuito en serie, la tensión total es la suma de las caídas de tensión en cada componente (la tensión se reparte). En un circuito en paralelo, la tensión es la misma en todos los componentes.
```

### 19 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["corriente", "comparacion"]

opciones_explicitas: ["La corriente disminuye al aumentar la resistencia total", "La corriente aumenta al aumentar la resistencia total", "La corriente permanece constante sin importar la resistencia"]

respuesta: "La corriente disminuye al aumentar la resistencia total"
tipo: mc

enunciado: "Si añadimos una resistencia adicional en serie a un circuito ya existente, ¿qué sucede con la intensidad de corriente total (asumiendo voltaje constante)?"

explicacion: |
  Según la Ley de Ohm (I = V/R), si la resistencia total aumenta debido a la conexión en serie, la intensidad de corriente disminuye.
```

### 20 — Orden de la resistencia equivalente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "avanzado"
  tags: ["resistencia", "comparacion"]

tipo: ordenar
opciones_explicitas: ["Resistencia en serie", "Resistencia en paralelo"]
respuesta_orden: ["Resistencia en serie", "Resistencia en paralelo"]

enunciado: "Ordena los conceptos de mayor a menor valor de resistencia equivalente, considerando que tenemos dos resistencias de 10 Ω y 20 Ω conectadas de forma distinta."

explicacion: |
  Para R1=10 y R2=20:
  En serie: R_eq = 10 + 20 = 30 Ω.
  En paralelo: R_eq = (10 * 20) / (10 + 20) = 200 / 30 = 6.66 Ω.
  Por lo tanto, la resistencia en serie es mayor que la resistencia en paralelo.
```

### 21 — Resistencia total en serie

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie"]

variables:
  datos: [[10.0, 5.0, 2.0], [20.0, 15.0, 10.0], [5.0, 3.0, 2.0]]
  idx: uno_de([0, 1, 2])
  r1: datos[idx][0]
  r2: datos[idx][1]
  r3: datos[idx][2]

respuestas_validas:
  - r1 + r2 + r3
respuesta: r1 + r2 + r3
tipo: completar
tolerancia_abs: 0.01

enunciado: "En un circuito en serie, se conectan tres resistencias con valores de {r1} Ω, {r2} Ω y {r3} Ω. ¿Cuál es la resistencia total del circuito?"

pasos:
  - "Identificar que en un circuito en serie la resistencia total es la suma de las resistencias individuales."
  - "Sumar los valores: {r1} + {r2} + {r3}."

explicacion: |
  La resistencia equivalente en un circuito en serie se calcula sumando todas las resistencias: R_total = R1 + R2 + R3.
  En este caso: {r1} + {r2} + {r3} = {r1 + r2 + r3} Ω.
```

### 22 — Comportamiento de la corriente

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "ley_de_ohm"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en serie con múltiples resistencias, ¿la intensidad de corriente que circula por cada una de las resistencias es la misma?"

explicacion: |
  Verdadero. En un circuito en serie solo existe un camino para la carga eléctrica, por lo tanto, la corriente (I) es constante en todos los puntos del circuito.
```

### 23 — Reparto de tensión

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tensión", "voltaje"]

variables:
  datos: [[12.0, 4.0, 8.0], [24.0, 12.0, 12.0], [9.0, 3.0, 6.0]]
  idx: uno_de([0, 1, 2])
  v_total: datos[idx][0]
  r1: datos[idx][1]
  r2: datos[idx][2]
  r_total: r1 + r2
  i: v_total / r_total
  v1: i * r1

respuesta: "4.0 V"
tipo: mc

opciones_explicitas: ["4.0 V", "8.0 V", "12.0 V", "24.0 V"]

enunciado: "Se tiene una fuente de tensión de {v_total} V conectada a dos resistencias en serie de {r1} Ω y {r2} Ω. ¿Cuál es la caída de tensión (voltaje) en la primera resistencia ({r1} Ω)?"

pasos:
  - "Calcular la resistencia total: R_total = {r1} + {r2} = {r_total} Ω."
  - "Calcular la corriente total usando Ley de Ohm: I = V_total / R_total = {v_total} / {r_total} A."
  - "Calcular la tensión en R1: V1 = I * R1."

explicacion: |
  Primero hallamos la resistencia total: {r_total} Ω. Luego la corriente: {i} A. Finalmente, el voltaje en R1 es: {v1} V.
```

### 24 — Pasos para resolver un circuito

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular resistencia total", "Calcular corriente total", "Calcular voltajes parciales"]
respuesta_orden: ["Calcular resistencia total", "Calcular corriente total", "Calcular voltajes parciales"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para hallar la tensión en una resistencia específica dentro de un circuito en serie con una fuente de voltaje conocida."

explicacion: |
  Para resolver circuitos en serie, el orden estándar es: 1. Sumar resistencias, 2. Hallar la corriente con la Ley de Ohm, 3. Usar la corriente para hallar voltajes individuales.
```

### 25 — Completar valores de resistencia

```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["completar", "resistencia"]

variables:
  escenario: [[100.0, 60.0], [50.0, 25.0], [30.0, 15.0]]
  idx: uno_de([0, 1, 2])
  r_total: escenario[idx][0]
  r1: escenario[idx][1]

respuestas_validas:
  - escenario[idx][1]
respuesta: escenario[idx][1]
tipo: completar

enunciado: "Si la resistencia total de un circuito en serie es de ___ Ω y una de las resistencias es de ___ Ω, la otra resistencia debe ser de ___ Ω."

# Nota: El sistema de completar en VBLang para este prompt requiere que la respuesta sea el valor exacto. 
# Debido a la restricción de no usar expresiones complejas en 'respuesta', 
# se define la respuesta como el valor de la segunda resistencia de la tupla.

explicacion: |
  En serie: R_total = R1 + R2. Por lo tanto, R2 = R_total - R1.
  En este caso: {r_total} - {r1} = {r_total - r1}.
```
