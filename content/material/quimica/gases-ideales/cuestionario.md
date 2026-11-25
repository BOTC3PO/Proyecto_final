# Química — Gases ideales: PV = nRT (cuestionario, 25 preguntas VBLang)

> Tema: `QZ1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Leyes de los gases

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["leyes", "gases"]

variables:
  escenario: [["Boyle", "temperatura"], ["Charles", "presion"], ["Gay-Lussac", "volumen"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["temperatura", "presion", "volumen"]

enunciado: "En la ley de {escenario[idx][0]}, ¿qué variable se mantiene constante?"

explicacion: |
  La ley de {escenario[idx][0]} mantiene constante la {escenario[idx][1]}.
```

### 2 — Relación de Boyle

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["boyle", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de Boyle dice que la presión y el volumen son inversamente proporcionales a temperatura constante."

explicacion: |
  Verdadero. La ley de Boyle establece que P × V = constante cuando la temperatura no cambia.
```

### 3 — Relación de Charles

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["charles", "relacion"]

respuesta: falso
tipo: vf

enunciado: "La ley de Charles dice que el volumen y la temperatura son inversamente proporcionales a presión constante."

explicacion: |
  Falso. Son directamente proporcionales: si la temperatura sube, el volumen también sube (a presión constante).
```

### 4 — Ley de Gay-Lussac

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["gay_lussac", "completar"]

respuesta: "Gay-Lussac"
tipo: completar
respuestas_validas:
  - "Gay-Lussac"

enunciado: "La ley que relaciona presión y temperatura a volumen constante es la ley de ___."

explicacion: |
  La ley de Gay-Lussac dice que la presión es directamente proporcional a la temperatura absoluta cuando el volumen es constante.
```

### 5 — Cálculo del producto PV

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["ley_de_gases", "calculo"]

variables:
  datos_n: [1, 2, 4]
  datos_t: [100, 200, 400]
  n_idx: uno_de([0, 1, 2])
  t_idx: uno_de([0, 1, 2])
  r: 0.0821

respuesta: datos_n[n_idx] * r * datos_t[t_idx]
tipo: completar
tolerancia_abs: 0.5

enunciado: "Calculá el producto PV usando PV=nRT, con n = {datos_n[n_idx]} mol y T = {datos_t[t_idx]} K (R = {r})."

pasos:
  - "PV = n × R × T"

explicacion: |
  PV = {datos_n[n_idx]} × {r} × {datos_t[t_idx]}.
```

### 6 — Cálculo de moles

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["despeje", "moles"]

variables:
  p_vals: [1, 2]
  v_vals: [10, 20, 40]
  t_vals: [100, 200]
  p_idx: uno_de([0, 1])
  v_idx: uno_de([0, 1, 2])
  t_idx: uno_de([0, 1])
  r: 0.0821

respuesta: (p_vals[p_idx] * v_vals[v_idx]) / (r * t_vals[t_idx])
tipo: completar
tolerancia_abs: 0.2

enunciado: "Con P = {p_vals[p_idx]} atm, V = {v_vals[v_idx]} L y T = {t_vals[t_idx]} K (R = {r}), calculá el número de moles (n)."

pasos:
  - "n = PV / RT"

explicacion: |
  n = ({p_vals[p_idx]} × {v_vals[v_idx]}) / ({r} × {t_vals[t_idx]}).
```

### 7 — Escala de temperatura obligatoria

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación PV=nRT, la temperatura T siempre debe estar en la escala absoluta (Kelvin), no en grados Celsius."

explicacion: |
  Correcto. Usar Celsius directamente da un resultado incorrecto — hay que convertir a Kelvin siempre.
```

### 8 — Conversión Celsius a Kelvin

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conversiones"]

respuesta: "273"
tipo: completar
respuestas_validas:
  - "273"

enunciado: "La conversión de grados Celsius a Kelvin es: K = C + ___."

explicacion: |
  Se suma 273 (más precisamente 273,15) para pasar de Celsius a la escala absoluta.
```

### 9 — Volumen molar en condiciones normales

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["gases", "condiciones_normales"]

respuesta: verdadero
tipo: vf

enunciado: "En condiciones normales (1 atm, 273 K), 1 mol de cualquier gas ideal ocupa 22,4 litros."

explicacion: |
  Correcto. Por definición, el volumen molar de un gas ideal en CNPT es 22,4 L/mol.
```

### 10 — Cálculo de volumen en condiciones normales

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "volumen"]

variables:
  moles_lista: [1, 2, 3, 5]
  idx: uno_de([0, 1, 2, 3])

respuesta: moles_lista[idx] * 22.4
tipo: completar
tolerancia_abs: 0.5

enunciado: "En condiciones normales, ¿qué volumen ocupan {moles_lista[idx]} moles de un gas ideal?"

pasos:
  - "V = n × 22,4 L/mol"

explicacion: |
  V = {moles_lista[idx]} × 22,4 L.
```

### 11 — Condiciones normales de presión y temperatura

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "1 atm y 273 K"
tipo: mc
opciones_explicitas: ["1 atm y 273 K", "2 atm y 300 K", "1 atm y 298 K", "0.5 atm y 273 K"]

enunciado: "¿Cuáles son las condiciones normales de presión y temperatura (CNPT)?"

explicacion: |
  Las condiciones normales son 1 atm de presión y 273 K (0°C) de temperatura.
```

### 12 — Trampa de Celsius sin convertir

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["temperatura", "kelvin"]

respuesta: falso
tipo: vf

enunciado: "Usar 25 grados Celsius directamente en la fórmula PV=nRT (sin convertir a Kelvin) da un resultado correcto."

explicacion: |
  Falso. Hay que convertir siempre a Kelvin (25°C = 298 K); usar el 25 directo da un resultado muy distinto al real.
```


### 13 — Despeje de la presión

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["despeje", "formula"]

respuesta: "P = nRT/V"
tipo: mc
opciones_explicitas: ["P = nRT/V", "P = nRT*V", "P = V/nRT", "P = nR/VT"]

enunciado: "Si se despeja la presión (P) de PV = nRT, la fórmula queda:"

explicacion: |
  Pasando V al otro lado dividiendo: P = nRT/V.
```

### 14 — Cálculo de volumen

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "volumen"]

variables:
  p_val: uno_de([2, 4])
  n_val: uno_de([1, 2])
  t_val: uno_de([200, 300])
  r: 0.0821

respuesta: n_val * r * t_val / p_val
tipo: completar
tolerancia_abs: 0.5

enunciado: "Calculá el volumen (V) de un gas ideal con P = {p_val} atm, n = {n_val} mol, R = {r} L·atm/(K·mol) y T = {t_val} K."

pasos:
  - "V = nRT / P"

explicacion: |
  V = ({n_val} × {r} × {t_val}) / {p_val}.
```

### 15 — Ley de Gay-Lussac aplicada

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["leyes", "gay_lussac"]

respuesta: verdadero
tipo: vf

enunciado: "En la ecuación de los gases ideales, si la temperatura sube y el volumen se mantiene constante, la presión también sube."

explicacion: |
  Correcto (Ley de Gay-Lussac): a volumen constante, presión y temperatura son directamente proporcionales.
```

### 16 — Despeje de la temperatura

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["despeje", "formula"]

respuesta: "T = PV/(nR)"
tipo: mc
opciones_explicitas: ["T = PV/(nR)", "T = PVnR", "T = nR/(PV)", "T = PV+nR"]

enunciado: "Si se despeja la temperatura (T) de PV = nRT, la fórmula queda:"

explicacion: |
  Despejando T: T = PV / (n × R).
```

### 17 — Efecto de la presión sobre el volumen

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["boyle", "aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si la presión sobre un gas aumenta y la temperatura se mantiene constante, el volumen del gas disminuye."

explicacion: |
  Correcto (Ley de Boyle): a temperatura constante, presión y volumen son inversamente proporcionales.
```

### 18 — Unidades de la constante R

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["constante_r", "unidades"]

respuesta: "L·atm/(mol·K)"
tipo: mc
opciones_explicitas: ["L·atm/(mol·K)", "g/mol", "atm/L", "mol/L"]

enunciado: "¿Cuáles son las unidades de la constante R usada en PV=nRT (con P en atm y V en L)?"

explicacion: |
  R = 0,0821 L·atm/(mol·K) es la forma de R consistente con presión en atmósferas y volumen en litros.
```

### 19 — Por qué un gas necesita las 4 variables

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "El estado de un gas ideal se puede describir completamente conociendo sólo su volumen, sin necesidad de presión ni temperatura."

explicacion: |
  Falso. Un mismo volumen de gas puede tener distinta cantidad de moles según la presión y la temperatura — hacen falta las 4 variables (P, V, n, T) relacionadas por PV=nRT.
```

### 20 — Volumen de un gas (V = n · R · T / P)

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "volumen"]

variables:
  n: random(1, 5)
  tc: random(0, 50)
  P: uno_de([1, 2, 4])

respuesta: n * 0.0821 * (tc + 273) / P
tipo: input
unidad: "L"
tolerancia: 1%

enunciado: "¿Qué volumen ocupan {n} mol de un gas a {tc} °C y {P} atm? (R = 0,0821 L·atm/(mol·K); podés redondear a un decimal)"

pasos:
  - "T = {tc} + 273 = {tc + 273} K"
  - "V = n · R · T / P = {n} × 0,0821 × {tc + 273} / {P} ≈ {n * 0.0821 * (tc + 273) / P | 1} L"

explicacion: |
  La temperatura siempre en Kelvin: sumale 273 a los grados Celsius.
```

### 21 — Presión de un gas

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "presion"]

variables:
  n: random(1, 10)
  T: uno_de([273, 300, 350, 400])
  V: uno_de([5, 10, 20, 50])

respuesta: n * 0.0821 * T / V
tipo: input
unidad: "atm"
tolerancia: 1%

enunciado: "Un recipiente de {V} L contiene {n} mol de gas a {T} K. ¿Qué presión tiene, en atm? (R = 0,0821 L·atm/(mol·K); podés redondear a dos decimales)"

pasos:
  - "P = n · R · T / V"
  - "P = {n} × 0,0821 × {T} / {V} ≈ {n * 0.0821 * T / V | 2} atm"

explicacion: |
  Más moles o más temperatura aumentan la presión; más volumen la baja.
```

### 22 — Moles de gas

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "moles"]

variables:
  P: uno_de([1, 2, 3])
  V: uno_de([10, 22.4, 50, 100])
  T: uno_de([273, 300])

respuesta: P * V / (0.0821 * T)
tipo: input
unidad: "mol"
tolerancia: 1%

enunciado: "Un gas ocupa {V} L a {P} atm y {T} K. ¿Cuántos moles hay? (R = 0,0821 L·atm/(mol·K); podés redondear a dos decimales)"

pasos:
  - "n = P · V / (R · T)"
  - "n = {P} × {V} / (0,0821 × {T}) = {P * V} / {0.0821 * T | 3} ≈ {P * V / (0.0821 * T) | 2} mol"

explicacion: |
  Con presión, volumen y temperatura se puede contar cuántas moléculas (moles) hay.
```

### 23 — Condiciones normales

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["calculo", "cnpt"]

variables:
  n: uno_de([0.5, 1, 2, 3, 5])

respuesta: n * 22.4
tipo: input
unidad: "L"
tolerancia: 1%

enunciado: "¿Qué volumen ocupan {n} mol de un gas en condiciones normales (1 atm y 0 °C)?"

pasos:
  - "En CNPT, 1 mol de cualquier gas ocupa 22,4 L."
  - "V = {n} × 22,4 = {n * 22.4} L"

explicacion: |
  En condiciones normales no hace falta la fórmula completa: alcanza con multiplicar por 22,4.
```

### 24 — La rueda de la bici al sol

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  P1: uno_de([2, 3, 4])
  t1: uno_de([10, 15, 20])
  t2: uno_de([40, 45, 50])

respuesta: P1 * (t2 + 273) / (t1 + 273)
tipo: input
unidad: "atm"
tolerancia: 1%

enunciado: "Una cámara de bici tiene {P1} atm a {t1} °C. Al sol llega a {t2} °C sin cambiar de volumen. ¿Qué presión tiene ahora, en atm? (podés redondear a dos decimales)"

pasos:
  - "Con volumen constante, P1 / T1 = P2 / T2 (en Kelvin)."
  - "T1 = {t1 + 273} K; T2 = {t2 + 273} K"
  - "P2 = {P1} × {t2 + 273} / {t1 + 273} ≈ {P1 * (t2 + 273) / (t1 + 273) | 2} atm"

explicacion: |
  Por eso no conviene inflar de más las ruedas en verano: el calor sube la presión.
```

### 25 — Celsius o Kelvin

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["unidades", "calculo"]

variables:
  tc: random(-50, 100)

respuesta: tc + 273
tipo: input
unidad: "K"
tolerancia_abs: 0

enunciado: "Para usar la ecuación de los gases, ¿cuántos kelvin son {tc} °C?"

pasos:
  - "K = °C + 273 = {tc} + 273 = {tc + 273} K"

explicacion: |
  La escala Kelvin empieza en el cero absoluto, así que nunca da negativa: es la que exige la ecuación.
```
