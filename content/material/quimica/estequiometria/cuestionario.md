# Química — Estequiometría (cuestionario, 26 preguntas VBLang)

> Tema: `QKP`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la estequiometría

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

### 2 — Qué es un mol

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

### 3 — El número de partículas en un mol no depende de la sustancia

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

### 4 — Qué es la masa molar

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

### 5 — Problema: masa molar del agua

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

### 6 — Problema: masa molar del dióxido de carbono

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

### 7 — Completar: fórmula de los moles a partir de la masa

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

### 8 — Problema: hallar moles dado la masa

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

### 9 — Problema: hallar la masa dado los moles

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

### 10 — Por qué moles = masa / masa molar es análisis dimensional

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

### 11 — Qué indican los coeficientes de una ecuación balanceada

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

### 12 — Problema: relación mol a mol

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

### 13 — Problema: relación mol a mol (producto)

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

### 14 — Los coeficientes son proporción de moles, no de gramos

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

### 15 — Problema: cadena completa masa → moles → moles → masa

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

### 16 — Qué es el reactivo limitante

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

### 17 — El reactivo limitante determina el producto máximo

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

### 18 — Ordenar: la cadena de conversión estequiométrica

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
respuesta_orden: ["Convertir la masa de A a moles de A, dividiendo por la masa molar de A", "Convertir moles de A a moles de B, usando la razón de los coeficientes balanceados", "Convertir moles de B a masa de B, multiplicando por la masa molar de B"]
explicacion: |
  Nunca se salta el paso de los moles: es el único puente válido entre
  cantidades de sustancias distintas.
```

### 19 — Completar: fórmula de la masa a partir de los moles

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

### 20 — Problema: masa molar del cloruro de sodio

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

### 21 — Por qué no se puede pasar directo de masa de A a masa de B

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

### 22 — La estequiometría depende de tener la ecuación balanceada

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

### 23 — Problema: masa molar del metano

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

### 24 — Problema: moles con resultado redondeado

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

### 25 — Un mol de gas no pesa lo mismo que un mol de otro gas

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

### 26 — Cierre: para qué sirve la estequiometría

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
