# Examen jefe — Maestro de la Estequiometria y Gases

> Logro #144. Completaste el parcial dominando cálculos estequiométricos, gases ideales y la geometría molecular. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **106 preguntas totales** en 5/5 secciones.

---

## Sección: estequiometria (26 preguntas)

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué calcula la estequiometría?"
tipo: mc
opciones_explicitas:
  - "Las cantidades exactas de reactivos y productos en una reacción química"
  - "La velocidad a la que ocurre una reacción"
  - "El color de los productos de una reacción"
respuesta: "Las cantidades exactas de reactivos y productos en una reacción química"

explicacion: |
  Usa la ecuación balanceada como una receta que indica las proporciones.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué es un mol en química?"
tipo: mc
opciones_explicitas:
  - "La unidad que cuenta 6,022 × 10²³ partículas de una sustancia"
  - "Una unidad de masa, equivalente a un gramo"
  - "El nombre de un tipo de reacción química"
respuesta: "La unidad que cuenta 6,022 × 10²³ partículas de una sustancia"

explicacion: |
  Es como una "docena", pero mucho más grande: cuenta partículas, no
  gramos.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Un mol de cualquier sustancia contiene siempre la misma cantidad de partículas (el número de Avogadro), sin importar de qué sustancia se trate."

explicacion: |
  Lo que sí cambia según la sustancia es la MASA de ese mol (la masa
  molar), no la cantidad de partículas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué es la masa molar de una sustancia?"
tipo: mc
opciones_explicitas:
  - "La masa de un mol de esa sustancia, en gramos por mol"
  - "La masa de una sola molécula, en gramos"
  - "El peso total de una muestra, sin importar la cantidad"
respuesta: "La masa de un mol de esa sustancia, en gramos por mol"

explicacion: |
  Se calcula sumando las masas atómicas de todos los átomos de la
  fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 18
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que la masa atómica del hidrógeno (H) es ≈1 y la del oxígeno (O) es ≈16, ¿cuál es la masa molar del agua (H₂O), en g/mol?"

pasos:
  - "2 × 1 (dos átomos de H) + 16 (un átomo de O) = 18 g/mol"

explicacion: |
  Se suman las masas atómicas de todos los átomos que aparecen en la
  fórmula, contando los subíndices.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 44
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que la masa atómica del carbono (C) es ≈12 y la del oxígeno (O) es ≈16, ¿cuál es la masa molar del dióxido de carbono (CO₂), en g/mol?"

pasos:
  - "12 (un átomo de C) + 2 × 16 (dos átomos de O) = 44 g/mol"

explicacion: |
  Un átomo de carbono y dos de oxígeno, sumando sus masas atómicas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "completar"]

tipo: completar
enunciado: "Completá la fórmula: moles = masa (g) / ___ (g/mol)."
respuestas_validas:
  - "masa molar"

explicacion: |
  Dividir la masa por la masa molar da la cantidad de moles.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

variables:
  masa_molar: uno_de([18, 44, 2, 32, 40])
  moles_real: uno_de([2, 3, 4, 5])
  masa: masa_molar * moles_real

respuesta: moles_real
tipo: input
tolerancia_abs: 0

enunciado: "Se tienen {masa} g de una sustancia con masa molar {masa_molar} g/mol. ¿Cuántos moles hay?"

pasos:
  - "{masa} ÷ {masa_molar} = {moles_real} mol"

explicacion: |
  Moles = masa / masa molar.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

variables:
  masa_molar: uno_de([18, 44, 2, 32, 40])
  moles: uno_de([2, 3, 5, 6])

respuesta: masa_molar * moles
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos gramos son {moles} moles de una sustancia con masa molar {masa_molar} g/mol?"

pasos:
  - "{moles} × {masa_molar} = {masa_molar * moles} g"

explicacion: |
  Masa = moles × masa molar.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Por qué la fórmula moles = masa / masa molar es un ejemplo de análisis dimensional?"
tipo: mc
opciones_explicitas:
  - "Porque dividir gramos por (gramos/mol) da como resultado mol: las unidades 'cierran' solas"
  - "Porque usa números muy grandes, como el número de Avogadro"
  - "No tiene relación real con el análisis dimensional"
respuesta: "Porque dividir gramos por (gramos/mol) da como resultado mol: las unidades 'cierran' solas"

explicacion: |
  Es la misma verificación por unidades vista en
  `../../matematica/analisis-dimensional/`.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "vocabulario"]

enunciado: "En una ecuación química ya balanceada, ¿qué indican los coeficientes?"
tipo: mc
opciones_explicitas:
  - "La proporción de MOLES en la que reaccionan o se producen las sustancias"
  - "La proporción de GRAMOS en la que reaccionan las sustancias"
  - "El número de electrones que se transfieren"
respuesta: "La proporción de MOLES en la que reaccionan o se producen las sustancias"

explicacion: |
  Es la razón por la que hace falta convertir a moles antes de comparar
  cantidades de sustancias distintas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  k: random(1, 10)

respuesta: k
tipo: input
tolerancia_abs: 0

enunciado: "Según la ecuación balanceada 2H₂ + O₂ → 2H₂O, si reaccionan {2 * k} moles de H₂, ¿cuántos moles de O₂ se necesitan?"

pasos:
  - "La proporción es 2 moles de H₂ por cada 1 mol de O₂: {2 * k} ÷ 2 = {k} mol de O₂"

explicacion: |
  Se usa la razón de coeficientes (2 de H₂ por 1 de O₂) para escalar la
  cantidad.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  k: random(1, 10)

respuesta: 2 * k
tipo: input
tolerancia_abs: 0

enunciado: "Según la ecuación balanceada 2H₂ + O₂ → 2H₂O, si reaccionan {k} moles de O₂ (con suficiente H₂ disponible), ¿cuántos moles de H₂O se producen?"

pasos:
  - "La proporción es 1 mol de O₂ por cada 2 moles de H₂O: {k} × 2 = {2 * k} mol de H₂O"

explicacion: |
  Se multiplica por la razón de coeficientes: 2 moles de producto por
  cada mol de ese reactivo.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Los coeficientes de una ecuación balanceada indican una proporción de moles, NO de gramos."

explicacion: |
  Por eso nunca se puede pasar directo de masa de un reactivo a masa de
  un producto sin convertir a moles primero.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  k: random(1, 8)
  masa_h2: 4 * k

respuesta: 36 * k
tipo: input
tolerancia_abs: 0

enunciado: "Según la ecuación balanceada 2H₂ + O₂ → 2H₂O (masa molar del H₂ = 2 g/mol, masa molar del H₂O = 18 g/mol), ¿cuántos gramos de agua se producen a partir de {masa_h2} g de H₂?"

pasos:
  - "Moles de H₂: {masa_h2} ÷ 2 = {2 * k} mol"
  - "Moles de H₂O (misma proporción 2 a 2): {2 * k} mol"
  - "Masa de H₂O: {2 * k} × 18 = {36 * k} g"

explicacion: |
  La cadena completa: masa de H₂ → moles de H₂ → moles de H₂O (misma
  razón, 2 a 2) → masa de H₂O.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Qué es el reactivo limitante en una reacción química?"
tipo: mc
opciones_explicitas:
  - "El reactivo que se termina primero, y por eso limita la cantidad máxima de producto"
  - "El reactivo que sobra al final de la reacción"
  - "El reactivo más caro de conseguir"
respuesta: "El reactivo que se termina primero, y por eso limita la cantidad máxima de producto"

explicacion: |
  El otro reactivo queda "en exceso", sin importar cuánto sobre.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "La cantidad máxima de producto que se puede formar en una reacción está determinada por el reactivo limitante, no por el reactivo en exceso."

explicacion: |
  Una vez que se acaba el reactivo limitante, la reacción no puede
  seguir, sin importar cuánto quede del otro.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "ordenar"]

enunciado: "Ordená los pasos para calcular cuántos gramos de un producto B se forman a partir de una masa conocida de un reactivo A."
tipo: ordenar
opciones_explicitas:
  - "Convertir moles de B a masa de B, multiplicando por la masa molar de B"
  - "Convertir la masa de A a moles de A, dividiendo por la masa molar de A"
  - "Convertir moles de A a moles de B, usando la razón de los coeficientes balanceados"
respuesta_orden:
  - "Convertir la masa de A a moles de A, dividiendo por la masa molar de A"
  - "Convertir moles de A a moles de B, usando la razón de los coeficientes balanceados"
  - "Convertir moles de B a masa de B, multiplicando por la masa molar de B"

explicacion: |
  Nunca se salta el paso de los moles: es el único puente válido entre
  cantidades de sustancias distintas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "completar"]

tipo: completar
enunciado: "Completá la fórmula: masa (g) = moles × ___ (g/mol)."
respuestas_validas:
  - "masa molar"

explicacion: |
  Es la fórmula inversa de moles = masa / masa molar.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 58.5
tipo: input
tolerancia_abs: 0.1

enunciado: "Sabiendo que la masa atómica del sodio (Na) es ≈23 y la del cloro (Cl) es ≈35,5, ¿cuál es la masa molar del cloruro de sodio (NaCl, sal de mesa), en g/mol?"

pasos:
  - "23 + 35,5 = 58,5 g/mol"

explicacion: |
  Un átomo de sodio y uno de cloro, sumando sus masas atómicas.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "vocabulario"]

enunciado: "¿Por qué no se puede calcular la masa de un producto B directamente a partir de la masa de un reactivo A, sin pasar por moles?"
tipo: mc
opciones_explicitas:
  - "Porque los coeficientes de la ecuación relacionan cantidades de partículas (moles), no masas en gramos"
  - "Porque las masas en gramos no se pueden convertir nunca"
  - "En realidad sí se puede, pasar por moles es un paso opcional"
respuesta: "Porque los coeficientes de la ecuación relacionan cantidades de partículas (moles), no masas en gramos"

explicacion: |
  A y B suelen tener masas molares distintas: sin pasar por moles, la
  proporción de gramos no coincide con la de los coeficientes.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Para hacer cálculos estequiométricos hace falta partir de una ecuación química ya balanceada."

explicacion: |
  Sin balancear (ver `../balanceo-ecuaciones/`), los coeficientes no
  reflejan la proporción real de átomos que se conservan.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria", "problema"]

respuesta: 16
tipo: input
tolerancia_abs: 0

enunciado: "Sabiendo que la masa atómica del carbono (C) es ≈12 y la del hidrógeno (H) es ≈1, ¿cuál es la masa molar del metano (CH₄), en g/mol?"

pasos:
  - "12 (un átomo de C) + 4 × 1 (cuatro átomos de H) = 16 g/mol"

explicacion: |
  Un átomo de carbono y cuatro de hidrógeno, según el subíndice de la
  fórmula.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "avanzado"
  tags: ["estequiometria", "problema"]

variables:
  masa: random(10, 100)
  masa_molar: uno_de([18, 44, 58.5])

respuesta: redondear(masa / masa_molar, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se tienen {masa} g de una sustancia con masa molar {masa_molar} g/mol. ¿Cuántos moles hay? Redondeá a 2 decimales."

pasos:
  - "{masa} ÷ {masa_molar} = {redondear(masa / masa_molar, 2)} mol"

explicacion: |
  No siempre la división da un número exacto: en ese caso se redondea.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "intermedio"
  tags: ["estequiometria"]

respuesta: verdadero
tipo: vf

enunciado: "Un mol de un gas y un mol de otro gas distinto tienen la misma cantidad de partículas, pero no necesariamente la misma masa."

explicacion: |
  La cantidad de partículas es siempre la misma (el número de
  Avogadro); la masa depende de la masa molar de cada sustancia.
```

```
metadata:
  materia: "quimica"
  tema: "estequiometria"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la estequiometría en la práctica?"
tipo: mc
opciones_explicitas:
  - "Para calcular de antemano cuánto reactivo hace falta para obtener una cantidad determinada de producto"
  - "Sólo para nombrar correctamente los compuestos químicos"
  - "Sólo aplica a reacciones que ya ocurrieron, nunca antes"
respuesta: "Para calcular de antemano cuánto reactivo hace falta para obtener una cantidad determinada de producto"

explicacion: |
  Desde un experimento de laboratorio hasta la producción industrial, la
  estequiometría planifica cantidades antes de mezclar nada.
```

## Sección: gases-ideales (20 preguntas)

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

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["gay_lussac", "completar"]

respuesta: "Gay-Lussac"
tipo: completar
respuestas_validas: ["Gay-Lussac"]

enunciado: "La ley que relaciona presión y temperatura a volumen constante es la ley de ___."

explicacion: |
  La ley de Gay-Lussac dice que la presión es directamente proporcional a la temperatura absoluta cuando el volumen es constante.
```

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

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["conversiones"]

respuesta: "273"
tipo: completar
respuestas_validas: ["273"]

enunciado: "La conversión de grados Celsius a Kelvin es: K = C + ___."

explicacion: |
  Se suma 273 (más precisamente 273,15) para pasar de Celsius a la escala absoluta.
```

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

```
metadata:
  materia: "quimica"
  tema: "gases_ideales"
  nivel: "basico"
  tags: ["constante_r", "teoria"]

respuesta: "R"
tipo: completar
respuestas_validas: ["R"]

enunciado: "La constante de los gases ideales ya está precargada en VBLang con el nombre ___."

explicacion: |
  El identificador `R` está disponible como constante global en el DSL.
```

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

## Sección: geometria-molecular-vsepr (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["teoria", "vsepr"]

respuesta: verdadero
tipo: vf

enunciado: "La teoría VSEPR establece que los pares de electrones alrededor de un átomo central se repelen entre sí y se acomodan lo más lejos posible para minimizar la repulsión."

explicacion: |
  Correcto. La repulsión electrónica es el principio que determina la forma de las moléculas.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["geometria", "vsepr"]

variables:
  datos: [[2, "lineal"], [3, "trigonal plana"], [4, "tetraédrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["lineal", "trigonal plana", "tetraédrica"]

enunciado: "Si un átomo central tiene {datos[idx][0]} pares de electrones enlazantes y ningún par libre, la geometría resultante es..."

explicacion: |
  La geometría depende del número de dominios electrónicos. Con {datos[idx][0]} dominios, la forma es {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["geometria", "angulos"]

respuesta: "lineal"
tipo: completar
respuestas_validas: ["lineal"]

enunciado: "La geometría con 2 pares de electrones alrededor del centro y un ángulo de enlace de 180 grados es la ___."

explicacion: |
  Con dos dominios electrónicos, la máxima separación posible es un ángulo de 180°: geometría lineal.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["moleculas", "co2"]

respuesta: verdadero
tipo: vf

enunciado: "La molécula de dióxido de carbono (CO2) posee una geometría molecular lineal."

explicacion: |
  El carbono central tiene dos dobles enlaces con los oxígenos y ningún par libre, lo que da una geometría lineal.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["angulos", "tetraedrica"]

respuesta: "109.5 grados"
tipo: mc
opciones_explicitas: ["109.5 grados", "180 grados", "120 grados", "90 grados"]

enunciado: "¿Cuál es el ángulo de enlace típico en una molécula con geometría tetraédrica perfecta?"

explicacion: |
  En una geometría tetraédrica, los cuatro pares de electrones se orientan hacia los vértices de un tetraedro, con ángulo de 109,5°.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["vsepr", "repulsion"]

respuesta: verdadero
tipo: vf

enunciado: "Un par de electrones libre (no enlazante) ocupa espacio alrededor del átomo central igual que un enlace."

explicacion: |
  Correcto — y además, los pares libres repelen con MÁS fuerza que los enlazantes, ocupando incluso un poco más de volumen.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["geometria", "vsepr"]

variables:
  escenario: [["NH3", "piramidal trigonal"], ["H2O", "angular"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["piramidal trigonal", "angular", "lineal", "tetraédrica"]

enunciado: "Dada la molécula {escenario[idx][0]}, ¿cuál es su geometría molecular?"

explicacion: |
  La molécula {escenario[idx][0]} tiene geometría {escenario[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["h2o", "geometria"]

respuesta: falso
tipo: vf

enunciado: "La molécula de agua (H2O) tiene una geometría lineal."

explicacion: |
  Falso. El oxígeno tiene dos pares enlazantes y dos pares libres, lo que da una geometría angular.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["h2o", "electrones"]

respuesta: "libres"
tipo: completar
respuestas_validas: ["libres"]

enunciado: "El oxígeno del agua tiene 4 pares de electrones alrededor: 2 enlaces O-H y 2 pares ___."

explicacion: |
  Los dos pares que no forman enlaces se llaman pares de electrones libres.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "angulos"]

respuesta: verdadero
tipo: vf

enunciado: "Los pares libres repelen con más fuerza que los pares enlazantes, por eso el ángulo de una molécula como el agua es menor al de un tetraedro puro."

explicacion: |
  Correcto. La mayor repulsión de los pares libres "empuja" a los pares enlazantes, reduciendo el ángulo de enlace observado.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "polaridad", "co2"]

respuesta: verdadero
tipo: vf

enunciado: "El CO2 tiene enlaces polares (C=O) pero la molécula en conjunto es no polar, debido a su geometría lineal simétrica."

explicacion: |
  Aunque los enlaces C=O son polares, la geometría lineal hace que los vectores de momento dipolar se cancelen: momento dipolar neto cero.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["vsepr", "polaridad", "h2o"]

respuesta: verdadero
tipo: vf

enunciado: "El agua (H2O) tiene enlaces polares y es una molécula polar en su conjunto, debido a su geometría angular asimétrica."

explicacion: |
  La geometría angular del agua impide que los momentos dipolares de los enlaces O-H se cancelen: queda un momento dipolar neto.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "avanzado"
  tags: ["vsepr", "co2", "dipolo"]

respuesta: "Los dipolos de los enlaces C=O se cancelan debido a la geometría lineal simétrica."
tipo: mc
opciones_explicitas: ["Los dipolos de los enlaces C=O se cancelan debido a la geometría lineal simétrica.", "La electronegatividad del carbono es igual a la del oxígeno.", "Los electrones se distribuyen de forma uniforme en toda la molécula.", "La geometría es angular y no lineal."]

enunciado: "¿Por qué el CO2 NO es polar, a pesar de tener enlaces polares?"

explicacion: |
  Para que una molécula con enlaces polares sea no polar, la disposición espacial debe ser tal que los vectores de los momentos dipolares se anulen entre sí — eso pasa en el CO2 por su simetría lineal.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["polaridad", "dipolo"]

respuesta: "cancelan"
tipo: completar
respuestas_validas: ["cancelan"]

enunciado: "Una molécula es polar en conjunto cuando sus momentos dipolares individuales no se ___."

explicacion: |
  Si los momentos dipolares de los enlaces no se cancelan por la geometría de la molécula, queda un momento dipolar neto: la molécula es polar.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["vsepr", "polaridad", "enlace_polar"]

respuesta: falso
tipo: vf

enunciado: "Cualquier molécula que posea al menos un enlace polar es, por definición, una molécula polar."

explicacion: |
  Falso. Depende también de la geometría: si es muy simétrica (como CO2 o CH4), los enlaces polares se pueden cancelar entre sí.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["teoria", "vsepr"]

respuesta: "Repulsión de pares de electrones de la capa de valencia"
tipo: mc
opciones_explicitas: ["Repulsión de pares de electrones de la capa de valencia", "Velocidad de electrones en la capa de valencia", "Vibración de electrones en la capa de valencia", "Valencia de electrones por repulsión"]

enunciado: "¿Qué significa la sigla VSEPR (RPECV en español) respecto a la disposición de los electrones en una molécula?"

explicacion: |
  VSEPR = "Valence Shell Electron Pair Repulsion". Los pares de electrones de la capa de valencia se repelen y buscan la máxima distancia posible entre sí.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["geometria", "angulos"]

respuesta: "plana"
tipo: completar
respuestas_validas: ["plana"]

enunciado: "La geometría con 3 pares de electrones enlazantes y un ángulo de 120 grados es la trigonal ___."

explicacion: |
  Con 3 grupos de electrones, la forma que minimiza la repulsión es un triángulo equilátero en un plano: trigonal plana.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "basico"
  tags: ["molecula", "metano"]

respuesta: verdadero
tipo: vf

enunciado: "¿El metano (CH4) tiene una geometría molecular tetraédrica?"

explicacion: |
  Verdadero. El carbono tiene 4 pares enlazantes con los hidrógenos y ningún par libre: tetraedro perfecto, ángulos de 109,5°.
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "avanzado"
  tags: ["vsepr", "calculo"]

variables:
  escenario: [[4, 1, "piramidal trigonal"], [4, 2, "angular"], [4, 0, "tetraedrica"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][2]
tipo: mc
opciones_explicitas: ["piramidal trigonal", "angular", "tetraedrica"]

enunciado: "Si una molécula tiene {escenario[idx][0]} pares de electrones en total alrededor del átomo central, de los cuales {escenario[idx][1]} son pares libres, ¿cuál es su geometría molecular?"

explicacion: |
  Con 4 pares totales: 1 libre da piramidal trigonal (NH₃), 2 libres dan angular (H₂O), 0 libres dan tetraédrica (CH₄).
```

```
metadata:
  materia: "quimica"
  tema: "geometria_molecular_vsepr"
  nivel: "intermedio"
  tags: ["polaridad", "ejemplos"]

respuesta: "NH3 (amoníaco)"
tipo: mc
opciones_explicitas: ["NH3 (amoníaco)", "CO2 (dióxido de carbono)", "CH4 (metano)", "BF3 (trifluoruro de boro)"]

enunciado: "¿Cuál de las siguientes moléculas es polar debido a una geometría asimétrica (piramidal trigonal, con un par libre)?"

explicacion: |
  El NH₃ tiene geometría piramidal trigonal (asimétrica, por el par libre del nitrógeno), lo que deja un momento dipolar neto. CO2, CH4 y BF3 son todas geometrías simétricas que cancelan la polaridad.
```

## Sección: grupos-funcionales (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Un grupo funcional es un átomo o grupo de átomos que le da a la molécula un comportamiento químico característico."

explicacion: |
  Correcto. Los grupos funcionales determinan las propiedades químicas y la reactividad de una molécula orgánica.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["hidroxilo", "alcoholes"]

respuesta: "hidroxilo"
tipo: mc
opciones_explicitas: ["hidroxilo", "carbonilo", "carboxilo", "amino"]

enunciado: "El grupo funcional -OH se denomina..."

explicacion: |
  El grupo -OH (oxígeno + hidrógeno) se llama grupo hidroxilo.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["nomenclatura", "alcoholes"]

respuesta: "ol"
tipo: completar
respuestas_validas: ["ol"]

enunciado: "Los compuestos con grupo hidroxilo (-OH) se nombran con el sufijo ___."

explicacion: |
  El sufijo -ol indica un alcohol (metanol, etanol...).
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["etanol", "alcoholes"]

respuesta: verdadero
tipo: vf

enunciado: "El etanol es un ejemplo de alcohol, ya que posee un grupo funcional hidroxilo (-OH)."

explicacion: |
  Correcto. El etanol (CH3CH2OH) es el alcohol más común.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["aldehido", "cetona", "carbonilo"]

respuesta: verdadero
tipo: vf

enunciado: "El aldehído y la cetona comparten el mismo grupo carbonilo (C=O), pero en distinta posición."

explicacion: |
  En el aldehído el carbono está en un extremo de la cadena; en la cetona, unido a otros dos carbonos.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["aldehido", "cetona", "estructura"]

respuesta: "aldehído"
tipo: mc
opciones_explicitas: ["aldehído", "cetona", "ácido carboxílico", "amina"]

enunciado: "Si el carbono del grupo carbonilo está en la PUNTA de la cadena, es un..."

explicacion: |
  El grupo C=O en un extremo de la cadena define un aldehído.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["cetona", "estructura"]

respuesta: "cetona"
tipo: mc
opciones_explicitas: ["cetona", "aldehído", "ácido carboxílico", "amina"]

enunciado: "Si el carbono del grupo carbonilo está en el MEDIO de la cadena, es una..."

explicacion: |
  El carbonilo unido a dos carbonos vecinos define una cetona.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["acido_carboxilico", "nomenclatura"]

respuesta: "carboxilo"
tipo: mc
opciones_explicitas: ["carboxilo", "carbonilo", "hidroxilo", "amino"]

enunciado: "El grupo funcional -COOH se llama..."

explicacion: |
  El grupo carboxilo combina un carbonilo (C=O) y un hidroxilo (-OH) en el mismo carbono.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["acido_acetico", "vinagre"]

respuesta: verdadero
tipo: vf

enunciado: "El ácido acético (vinagre) tiene grupo funcional carboxilo."

explicacion: |
  El ácido acético (CH3COOH) es un ácido carboxílico.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["quimica_organica"]

respuesta: "amino"
tipo: mc
opciones_explicitas: ["amino", "carboxilo", "ester", "hidroxilo"]

enunciado: "El grupo funcional -NH2 se llama..."

explicacion: |
  El grupo -NH2 es el grupo amino, característico de las aminas.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["reactividad", "generalizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dos moléculas distintas que comparten el mismo grupo funcional reaccionan de forma parecida."

explicacion: |
  Verdadero. El grupo funcional determina el comportamiento químico principal de la molécula.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: falso
tipo: vf

enunciado: "Para predecir el comportamiento de un compuesto orgánico hace falta memorizar cada molécula por separado, sin poder generalizar por grupo funcional."

explicacion: |
  Falso. La química orgánica se apoya justamente en generalizar por grupo funcional.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["reacciones", "esterificacion"]

respuesta: "ester"
tipo: completar
respuestas_validas: ["ester"]

enunciado: "El grupo funcional que se forma cuando un ácido reacciona con un alcohol se llama ___."

explicacion: |
  Esa reacción (esterificación) produce un éster y agua.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["quimica_organica"]

variables:
  datos: [["hidroxilo", "-OH"], ["carboxilo", "-COOH"], ["amino", "-NH2"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["-OH", "-COOH", "-NH2"]

enunciado: "¿Cuál es la fórmula del grupo funcional {datos[idx][0]}?"

explicacion: |
  El grupo {datos[idx][0]} tiene fórmula {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["proteinas", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace peptídico que une aminoácidos en las proteínas se forma por la reacción entre un grupo amino y un grupo carboxilo."

explicacion: |
  Correcto. La deshidratación entre el -NH2 de un aminoácido y el -COOH de otro forma el enlace peptídico.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["glucidos"]

respuesta: verdadero
tipo: vf

enunciado: "Los glúcidos se caracterizan por tener muchos grupos hidroxilo y un grupo carbonilo (aldehído o cetona)."

explicacion: |
  Correcto. Los glúcidos son polihidroxialdehídos o polihidroxicetonas.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "intermedio"
  tags: ["proteinas"]

respuesta: "hidroxilo"
tipo: mc
opciones_explicitas: ["hidroxilo", "amino", "carboxilo", "enlace peptidico"]

enunciado: "¿Cuál de estos NO es un componente estructural básico de un aminoácido?"

explicacion: |
  Los aminoácidos tienen grupo amino y grupo carboxilo. El hidroxilo es propio de alcoholes/glúcidos, no la base de un aminoácido.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "avanzado"
  tags: ["carboxilo", "carbonilo"]

respuesta: verdadero
tipo: vf

enunciado: "El grupo carboxilo (-COOH) contiene un grupo carbonilo (C=O) dentro de su estructura."

explicacion: |
  Correcto. El carboxilo combina un carbonilo y un hidroxilo sobre el mismo átomo de carbono.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "avanzado"
  tags: ["comparacion", "acidez"]

respuesta: "un ácido carboxílico (-COOH)"
tipo: mc
opciones_explicitas: ["un ácido carboxílico (-COOH)", "un alcohol (-OH)", "una amina (-NH2)", "un éster"]

enunciado: "¿Cuál de estos grupos funcionales le da a la molécula propiedades ácidas (puede donar un H+ fácilmente)?"

explicacion: |
  El grupo carboxilo es el que da carácter ácido a la molécula — de ahí el nombre "ácido" carboxílico.
```

```
metadata:
  materia: "quimica"
  tema: "grupos_funcionales"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "El nombre de la familia de un compuesto orgánico (alcohol, ácido, amina, etc.) se define por su grupo funcional, no por el largo de su cadena de carbono."

explicacion: |
  Correcto. El largo de la cadena cambia el nombre específico (etanol, propanol...) pero la familia (alcohol) la define el grupo -OH presente.
```

## Sección: hidrocarburos-alcanos-alquenos-alquinos (20 preguntas)

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["hidrocarburos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Un hidrocarburo es un compuesto orgánico formado exclusivamente por átomos de carbono e hidrógeno."

explicacion: |
  Correcto. Por definición, los hidrocarburos contienen únicamente C y H.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alcanos"]

respuesta: "ano"
tipo: completar
respuestas_validas: ["ano"]

enunciado: "Los alcanos, con un solo tipo de enlace entre carbonos, terminan con el sufijo ___."

explicacion: |
  Se nombran con la terminación -ano (metano, etano, propano...).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alcanos", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "Los alcanos se caracterizan por tener únicamente enlaces sencillos (simples) entre sus átomos de carbono."

explicacion: |
  Correcto. Son hidrocarburos saturados: todos sus enlaces C-C son simples.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alcanos", "formula", "calculo"]

variables:
  n: uno_de([1, 2, 3, 4, 5])

respuesta: 2 * n + 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de átomos de hidrógeno en un alcano con {n} átomos de carbono."

pasos:
  - "Fórmula general: CnH(2n+2)"

explicacion: |
  H = 2×{n} + 2.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alcanos", "nomenclatura", "formula"]

variables:
  datos: [["metano", "CH4"], ["etano", "C2H6"], ["propano", "C3H8"], ["butano", "C4H10"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["CH4", "C2H6", "C3H8", "C4H10"]

enunciado: "¿Cuál es la fórmula molecular del {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]} tiene fórmula {datos[idx][1]}.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alquenos"]

respuesta: "eno"
tipo: completar
respuestas_validas: ["eno"]

enunciado: "Los alquenos, con al menos un doble enlace, terminan con el sufijo ___."

explicacion: |
  Los alquenos son insaturados: al menos un doble enlace C=C, sufijo "-eno".
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["estructura", "alquenos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alqueno tiene al menos un enlace doble entre carbonos."

explicacion: |
  Correcto. Esa es la característica que distingue alquenos de alcanos (simple) y alquinos (triple).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["formula_molecular", "alquenos"]

variables:
  n: uno_de([2, 3, 4, 5])

respuesta: 2 * n
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de hidrógenos de un alqueno con {n} carbonos y 1 doble enlace."

pasos:
  - "Fórmula: CnH2n"

explicacion: |
  H = 2×{n}.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["eteno", "biologia"]

respuesta: verdadero
tipo: vf

enunciado: "El eteno (C2H4) también se llama etileno y es la hormona vegetal responsable de la maduración de las frutas."

explicacion: |
  Verdadero. El eteno regula naturalmente la maduración en plantas.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "alquinos"]

respuesta: "ino"
tipo: completar
respuestas_validas: ["ino"]

enunciado: "Los alquinos, con al menos un triple enlace, terminan con el sufijo ___."

explicacion: |
  Sufijo "-ino" para hidrocarburos con al menos un triple enlace C≡C.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["estructura", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un alquino tiene al menos un enlace triple entre carbonos?"

explicacion: |
  Correcto. Es la característica definitoria de los alquinos.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["formula_molecular", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])

respuesta: 2 * n - 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la cantidad de hidrógenos de un alquino lineal con {n} carbonos."

pasos:
  - "Fórmula: CnH(2n-2)"

explicacion: |
  H = 2×{n} - 2.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "usos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El etino (C2H2) también se llama acetileno y se usa comúnmente en soldadura?"

explicacion: |
  Verdadero. Su combustión alcanza temperaturas muy altas, útil en sopletes de soldadura.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alcanos", "saturados"]

respuesta: verdadero
tipo: vf

enunciado: "Los alcanos se llaman saturados porque tienen la máxima cantidad posible de hidrógenos en su estructura."

explicacion: |
  Correcto. Con enlaces simples no queda lugar para más hidrógenos sin romper la cadena de carbonos.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["alquenos", "alquinos", "insaturados"]

respuesta: falso
tipo: vf

enunciado: "Los alquenos y alquinos se llaman insaturados porque tienen MÁS hidrógenos que el alcano equivalente."

explicacion: |
  Falso. Tienen MENOS hidrógenos que el alcano de igual número de carbonos, por los enlaces dobles o triples.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["nomenclatura", "enlaces"]

variables:
  tabla: [["-ano", "simple"], ["-eno", "doble"], ["-ino", "triple"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["simple", "doble", "triple"]

enunciado: "El sufijo {tabla[idx][0]} indica que el hidrocarburo tiene un enlace de tipo..."

explicacion: |
  -ano (simple), -eno (doble), -ino (triple).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["alquenos", "hidrogenos"]

respuesta: verdadero
tipo: vf

enunciado: "Un alqueno con 2 dobles enlaces tendría aún menos hidrógenos que uno con sólo 1 doble enlace, para el mismo número de carbonos."

explicacion: |
  Verdadero. Cada enlace múltiple adicional resta 2 hidrógenos más.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "intermedio"
  tags: ["comparacion", "formula"]

variables:
  n: uno_de([3, 4, 5, 6])

respuesta: (2 * n + 2) - (2 * n - 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para {n} carbonos, ¿cuántos hidrógenos MÁS tiene el alcano que el alquino (con 1 triple enlace)?"

pasos:
  - "H alcano = 2n+2, H alquino = 2n-2"

explicacion: |
  Diferencia = (2×{n}+2) - (2×{n}-2) = 4, siempre — la diferencia entre alcano y alquino de igual n es constante.
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "avanzado"
  tags: ["clasificacion", "formula"]

respuesta: "alqueno"
tipo: mc
opciones_explicitas: ["alqueno", "alcano", "alquino", "no es un hidrocarburo"]

enunciado: "Una molécula con 4 carbonos y 8 hidrógenos (C4H8), ¿a qué familia pertenece?"

explicacion: |
  Para n=4, un alcano tendría 10 H, un alquino 6 H — 8 H coincide con la fórmula de alqueno (2n = 8).
```

```
metadata:
  materia: "quimica"
  tema: "hidrocarburos_alcanos_alquenos_alquinos"
  nivel: "basico"
  tags: ["metano", "conceptos"]

respuesta: falso
tipo: vf

enunciado: "El metano (CH4) puede existir como alqueno o alquino, dependiendo de las condiciones de reacción."

explicacion: |
  Falso. Con un solo carbono no hay otro carbono con el que formar un enlace doble o triple — el metano es siempre un alcano.
```
