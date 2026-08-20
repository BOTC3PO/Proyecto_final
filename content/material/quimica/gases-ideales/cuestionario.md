# Química — Gases ideales: PV = nRT (cuestionario, 20 preguntas VBLang)

> Tema: `QZ1`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bug recurrente: `respuesta: "verdadero"` entrecomillado con
> `opciones_explicitas` de más en un `vf` (no las necesita, es binario).
> También se limpiaron variables declaradas y nunca usadas (residuo de
> un intento previo de la misma pregunta).

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
tipo: input
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
tipo: input
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
tipo: input
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

### 13 — Identificación de la constante R

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["constante_r", "teoria"]

respuesta: "R"
tipo: completar
respuestas_validas:
  - "R"

enunciado: "La constante de los gases ideales ya está precargada en VBLang con el nombre ___."

explicacion: |
  El identificador `R` está disponible como constante global en el DSL.
```

### 14 — Despeje de la presión

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

### 15 — Cálculo de volumen

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
tipo: input
tolerancia_abs: 0.5

enunciado: "Calculá el volumen (V) de un gas ideal con P = {p_val} atm, n = {n_val} mol, R = {r} L·atm/(K·mol) y T = {t_val} K."

pasos:
  - "V = nRT / P"

explicacion: |
  V = ({n_val} × {r} × {t_val}) / {p_val}.
```

### 16 — Ley de Gay-Lussac aplicada

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

### 17 — Despeje de la temperatura

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

### 18 — Efecto de la presión sobre el volumen

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

### 19 — Unidades de la constante R

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

### 20 — Por qué un gas necesita las 4 variables

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
