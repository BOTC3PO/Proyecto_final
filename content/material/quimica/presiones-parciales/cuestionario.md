# Química — Presiones parciales: Ley de Dalton (cuestionario, 26 preguntas VBLang)

> Tema: `QDALTON`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Ley de Dalton

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["gases", "ley_de_dalton"]

respuesta: verdadero
tipo: vf

enunciado: "La presión total de una mezcla de gases es la suma de las presiones parciales de cada componente."

explicacion: |
  Según la Ley de Dalton, la presión total de una mezcla de gases que no reaccionan entre sí es la suma de las presiones que cada gas ejercería si ocupara solo todo el volumen.
```

### 2 — Concepto de presión parcial

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "parcial"
tipo: completar
respuestas_validas:
  - "parcial"

enunciado: "La presión que ejercería un gas si estuviera solo, ocupando todo el volumen, se llama presión ___."

explicacion: |
  Esa presión hipotética es la presión parcial del gas dentro de la mezcla.
```

### 3 — Cálculo de presión total

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_dalton"]

variables:
  p1: uno_de([1, 2, 3])
  p2: uno_de([1, 2])
  p3: uno_de([1, 2, 3])

respuesta: p1 + p2 + p3
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una mezcla de tres gases tiene presiones parciales P1 = {p1} atm, P2 = {p2} atm y P3 = {p3} atm. ¿Cuál es la presión total de la mezcla?"

pasos:
  - "P_total = P1 + P2 + P3"

explicacion: |
  P_total = {p1} + {p2} + {p3} atm.
```

### 4 — Comportamiento independiente de cada gas

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Cada gas de una mezcla se comporta como si estuviera solo ocupando todo el volumen, a la misma temperatura."

explicacion: |
  Es un postulado de la Ley de Dalton para gases ideales: cada gas se comporta de forma independiente de los demás.
```

### 5 — Definición de fracción molar

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["fraccion_molar", "conceptos"]

respuesta: "totales"
tipo: completar
respuestas_validas:
  - "totales"

enunciado: "La fracción molar de un gas es sus moles dividido los moles ___."

explicacion: |
  La fracción molar (Xi) es el cociente entre los moles de ese componente (ni) y los moles totales de la mezcla (n_total).
```

### 6 — Suma de fracciones molares

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["fraccion_molar", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de todas las fracciones molares de una mezcla siempre da 1."

explicacion: |
  Como cada fracción molar es una proporción respecto al total, la suma de todas las partes siempre es 1.
```

### 7 — Cálculo de fracción molar

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "fraccion_molar"]

variables:
  datos: [[1, 4], [2, 5], [3, 10]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][0] / datos[idx][1]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calculá la fracción molar de un componente con {datos[idx][0]} moles, en una mezcla de {datos[idx][1]} moles totales."

explicacion: |
  Xi = ni / n_total = {datos[idx][0]} / {datos[idx][1]}.
```

### 8 — Fórmula de la presión parcial

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_de_dalton", "presion_parcial"]

respuesta: "Pi = Xi * P_total"
tipo: mc
opciones_explicitas: ["Pi = Xi * P_total", "Pi = Xi + P_total", "Pi = Xi / P_total", "Pi = P_total / Xi"]

enunciado: "¿Cuál es la fórmula para calcular la presión parcial (Pi) de un gas en una mezcla?"

explicacion: |
  Pi = Xi × P_total: la presión parcial es la fracción molar multiplicada por la presión total.
```

### 9 — Presión parcial del N2

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_dalton", "gases"]

variables:
  n_n2: 2
  n_o2: 1
  p_total: 3

respuesta: (n_n2 / (n_n2 + n_o2)) * p_total
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una mezcla tiene 2 moles de N2 y 1 mol de O2, con presión total de 3 atm. ¿Cuál es la presión parcial del N2?"

pasos:
  - "n_total = n_n2 + n_o2"
  - "X_N2 = n_n2 / n_total"
  - "P_N2 = X_N2 × P_total"

explicacion: |
  P_N2 = (2 / (2+1)) × 3 = (2/3) × 3 = 2 atm.
```

### 10 — Presión parcial del O2

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_dalton", "gases"]

variables:
  n_n2: 2
  n_o2: 1
  p_total: 3

respuesta: (n_o2 / (n_n2 + n_o2)) * p_total
tipo: completar
tolerancia_abs: 0.01

enunciado: "Con la misma mezcla (2 mol de N2, 1 mol de O2, presión total 3 atm), ¿cuál es la presión parcial del O2?"

pasos:
  - "X_O2 = n_o2 / n_total"
  - "P_O2 = X_O2 × P_total"

explicacion: |
  P_O2 = (1 / (2+1)) × 3 = 1 atm.
```

### 11 — Comparación de presiones parciales

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["ley_dalton", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "En la mezcla anterior (2 mol N2, 1 mol O2, 3 atm totales), la presión parcial del N2 (2 atm) es mayor que la del O2 (1 atm)."

explicacion: |
  Verdadero. Al haber más moles de N2, su fracción molar (y por lo tanto su presión parcial) es mayor.
```

### 12 — Suma de presiones parciales (verificación)

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["ley_dalton", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de las presiones parciales de todos los gases de una mezcla debe dar exactamente la presión total."

explicacion: |
  Verdadero. Es la definición misma de la Ley de Dalton: P_total = P1 + P2 + ... + Pn.
```

### 13 — Datos necesarios para una presión parcial

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["ley_de_dalton", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "Para calcular la presión parcial de un gas en una mezcla, hace falta conocer la cantidad de moles de TODOS los otros gases presentes por separado."

explicacion: |
  Falso. Alcanza con conocer los moles de ese gas y el total de moles de la mezcla (o su fracción molar) — no hace falta la composición detallada de cada uno de los demás.
```

### 14 — Ecuación que sigue cada componente

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["gas_ideal", "mezclas"]

respuesta: "la ecuación de estado de los gases ideales (PV=nRT)"
tipo: mc
opciones_explicitas: ["la ley de Boyle", "la ley de Charles", "la ecuación de estado de los gases ideales (PV=nRT)", "ninguna de las anteriores"]

enunciado: "En una mezcla de gases ideales, cada componente sigue su propia..."

explicacion: |
  Cada gas se comporta como si fuera el único presente, siguiendo PV=nRT con su propia presión parcial.
```

### 15 — Cálculo de presión parcial (gas A)

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "ley_de_dalton"]

variables:
  n_a: uno_de([2, 3, 4])
  n_b: uno_de([1, 2])
  p_total: uno_de([6, 9, 12])

respuesta: (n_a / (n_a + n_b)) * p_total
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un recipiente tiene el gas A con {n_a} moles y el gas B con {n_b} moles. Si la presión total es {p_total} atm, ¿cuál es la presión parcial del gas A?"

pasos:
  - "n_total = n_a + n_b"
  - "X_A = n_a / n_total"
  - "P_A = X_A × P_total"

explicacion: |
  P_A = ({n_a} / ({n_a} + {n_b})) × {p_total}.
```

### 16 — Símbolo de la fracción molar

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["simbolos", "fraccion_molar"]

respuesta: "X"
tipo: completar
respuestas_validas:
  - "X"

enunciado: "El símbolo típico para representar la fracción molar de un componente es la letra ___ (en mayúscula)."

explicacion: |
  La fracción molar se representa comúnmente con "X" (por ejemplo, X_A para el componente A).
```

### 17 — Presión parcial y cantidad de moles

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos", "ley_dalton"]

respuesta: verdadero
tipo: vf

enunciado: "A igual presión total, el gas con más moles en la mezcla tiene la presión parcial más alta."

explicacion: |
  Verdadero. La presión parcial es proporcional a la fracción molar, así que más moles de un gas implican mayor presión parcial de ese gas.
```

### 18 — Composición del aire (aplicación)

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["aplicacion", "aire"]

respuesta: "N2 (nitrógeno), porque es el componente mayoritario del aire"
tipo: mc
opciones_explicitas: ["N2 (nitrógeno), porque es el componente mayoritario del aire", "O2 (oxígeno), porque es el que respiramos", "CO2, porque es el más pesado", "Todos tienen la misma presión parcial"]

enunciado: "En el aire (mezcla de N2, O2, CO2 y otros gases), ¿cuál gas tiene la presión parcial más alta?"

explicacion: |
  El aire es ~78% N2 en moles, así que su fracción molar (y su presión parcial) es la más alta de todos los componentes.
```

### 19 — Presión parcial cero

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un gas que está presente en una mezcla, aunque sea en muy poca cantidad, tiene presión parcial igual a cero."

explicacion: |
  Falso. Mientras haya al menos una fracción molar mayor que cero de ese gas, su presión parcial también es mayor que cero (aunque sea chica).
```

### 20 — Relación fracción molar y presión parcial

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["conceptos", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos gases en una mezcla tienen la misma fracción molar, entonces tienen la misma presión parcial."

explicacion: |
  Verdadero. Como Pi = Xi × P_total, si Xi es igual para dos gases, Pi también es igual (mismo P_total para toda la mezcla).
```

### 21 — Presión total (ley de Dalton)

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["calculo", "dalton"]

variables:
  p1: random_float(0.2, 3, 1)
  p2: random_float(0.2, 3, 1)
  p3: random_float(0.1, 1, 1)

respuesta: p1 + p2 + p3
tipo: input
unidad: "atm"
tolerancia: 1%

enunciado: "Una mezcla tiene nitrógeno a {p1} atm, oxígeno a {p2} atm y dióxido de carbono a {p3} atm. ¿Cuál es la presión total?"

pasos:
  - "P total = suma de las presiones parciales"
  - "P total = {p1} + {p2} + {p3} = {p1 + p2 + p3 | 1} atm"

explicacion: |
  Cada gas aporta su presión como si estuviera solo.
```

### 22 — Presión parcial con la fracción molar

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "fraccion_molar"]

variables:
  nA: random(1, 6)
  nB: random(1, 6)
  P: uno_de([2, 3, 4, 6])

respuesta: nA / (nA + nB) * P
tipo: input
unidad: "atm"
tolerancia: 1%

enunciado: "Una mezcla tiene {nA} mol de gas A y {nB} mol de gas B, con una presión total de {P} atm. ¿Cuál es la presión parcial de A? (podés redondear a dos decimales)"

pasos:
  - "n total = {nA} + {nB} = {nA + nB} mol"
  - "X_A = {nA} / {nA + nB} ≈ {nA / (nA + nB) | 3}"
  - "P_A = X_A × P total = {nA / (nA + nB) | 3} × {P} ≈ {nA / (nA + nB) * P | 2} atm"

explicacion: |
  La presión parcial es la parte de la presión total que corresponde a la fracción de moles de ese gas.
```

### 23 — Fracción molar

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["calculo", "fraccion_molar"]

variables:
  nA: random(1, 9)
  nB: random(1, 9)

respuesta: nA / (nA + nB)
tipo: input
unidad: ""
tolerancia: 1%

enunciado: "En una mezcla hay {nA} mol de oxígeno y {nB} mol de nitrógeno. ¿Cuál es la fracción molar del oxígeno? (podés redondear a tres decimales)"

pasos:
  - "X = moles del gas / moles totales"
  - "X = {nA} / ({nA} + {nB}) = {nA} / {nA + nB} ≈ {nA / (nA + nB) | 3}"

explicacion: |
  La fracción molar no tiene unidades y las de todos los gases suman 1.
```

### 24 — Presión parcial de un gas que falta

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "intermedio"
  tags: ["calculo", "dalton"]

variables:
  P: uno_de([3, 5, 8, 10])
  p1: random_float(0.5, 2, 1)
  p2: random_float(0.5, 1, 1)

respuesta: P - p1 - p2
tipo: input
unidad: "atm"
tolerancia: 1%

enunciado: "Un tanque con tres gases tiene una presión total de {P} atm. Dos de ellos aportan {p1} atm y {p2} atm. ¿Cuál es la presión parcial del tercero?"

pasos:
  - "P3 = P total − P1 − P2"
  - "P3 = {P} − {p1} − {p2} = {P - p1 - p2 | 1} atm"

explicacion: |
  Si se conoce el total y todas las presiones menos una, la que falta sale restando.
```

### 25 — El aire que respiramos

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["calculo", "cotidiano"]

variables:
  P: uno_de([1, 0.7, 2, 3])

respuesta: 0.21 * P
tipo: input
unidad: "atm"
tolerancia: 1%

enunciado: "El aire tiene un 21 % de oxígeno (fracción molar 0,21). ¿Cuál es la presión parcial del oxígeno si la presión del aire es {P} atm? (podés redondear a tres decimales)"

pasos:
  - "P_O2 = X_O2 × P total = 0,21 × {P} = {0.21 * P | 3} atm"

explicacion: |
  En la montaña (presión menor) hay menos oxígeno por bocanada; al bucear, con más presión, hay más.
```

### 26 — Cuál aporta más presión

```
metadata:
  materia: "quimica"
  tema: "presiones_parciales"
  nivel: "basico"
  tags: ["comparacion", "verdadero_falso"]

variables:
  nA: random(1, 8)
  nB: random(1, 8)

respuesta: nA > nB
tipo: vf

enunciado: "En una mezcla hay {nA} mol de gas A y {nB} mol de gas B. ¿La presión parcial de A es mayor que la de B?"

pasos:
  - "Las presiones parciales son proporcionales a los moles: compará {nA} con {nB}."

explicacion: |
  Con la misma temperatura y volumen, el gas con más moles aporta más presión.
```
