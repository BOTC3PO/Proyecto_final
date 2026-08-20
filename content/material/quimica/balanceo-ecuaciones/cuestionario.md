# Química — Balanceo de ecuaciones químicas (cuestionario, 30 preguntas VBLang)

> Tema: `Q1` (puente Álgebra → Química). Ver `teoria.md` en esta misma
> carpeta.

Las reacciones usadas son hechos estables de química de secundaria
(síntesis del agua, del amoníaco, combustión de metano, oxidación del
hierro, etc.) — no varían con el tiempo, así que los coeficientes están
fijos; lo que varía entre preguntas es cuál coeficiente se pregunta.

---

### 1 — Síntesis del agua: coeficiente del H₂

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: __H₂ + O₂ → __H₂O (con O₂ ya con coeficiente 1). ¿Qué coeficiente va delante del H₂?"

pasos:
  - "Balance de O: hacen falta 2 O en productos (2 H₂O), y O₂ ya aporta 2 — coincide"
  - "Balance de H: 2 H₂O tiene 4 H, así que hacen falta 2 H₂ (2×2=4)"

explicacion: |
  2H₂ + O₂ → 2H₂O es la ecuación balanceada clásica.
```

### 2 — Síntesis del agua: coeficiente del H₂O

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2H₂ + O₂ → __H₂O. ¿Qué coeficiente va delante del H₂O?"

explicacion: |
  Con 4 átomos de H en los reactivos (2×2), hacen falta 2 H₂O (2×2=4)
  para que coincida.
```

### 3 — Síntesis del amoníaco: coeficiente del H₂

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: N₂ + __H₂ → 2NH₃. ¿Qué coeficiente va delante del H₂?"

pasos:
  - "2NH₃ tiene 6 átomos de H, así que hacen falta 3 H₂ (3×2=6)"

explicacion: |
  N₂ + 3H₂ → 2NH₃ (síntesis de Haber-Bosch).
```

### 4 — Síntesis del amoníaco: coeficiente del NH₃

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: N₂ + 3H₂ → __NH₃. ¿Qué coeficiente va delante del NH₃?"

explicacion: |
  Con 2 átomos de N en los reactivos (de N₂), hacen falta 2 NH₃.
```

### 5 — Combustión del metano: coeficiente del O₂

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: CH₄ + __O₂ → CO₂ + 2H₂O. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "Productos: CO₂ aporta 2 O, 2H₂O aporta 2 O más — total 4 O"
  - "4 O en productos necesitan 2 O₂ (2×2=4)"

explicacion: |
  CH₄ + 2O₂ → CO₂ + 2H₂O.
```

### 6 — Combustión del metano: coeficiente del H₂O

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: CH₄ + 2O₂ → CO₂ + __H₂O. ¿Qué coeficiente va delante del H₂O?"

explicacion: |
  CH₄ tiene 4 átomos de H, así que hacen falta 2 H₂O (2×2=4).
```

### 7 — Combustión del magnesio

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2Mg + O₂ → __MgO. ¿Qué coeficiente va delante del MgO?"

explicacion: |
  Con 2 átomos de Mg en los reactivos, hacen falta 2 MgO.
```

### 8 — Oxidación del hierro: coeficiente del O₂

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 4Fe + __O₂ → 2Fe₂O₃. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "2Fe₂O₃ tiene 6 átomos de O, así que hacen falta 3 O₂ (3×2=6)"

explicacion: |
  4Fe + 3O₂ → 2Fe₂O₃ (la fórmula clásica del óxido de hierro/herrumbre).
```

### 9 — Oxidación del hierro: coeficiente del Fe₂O₃

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 4Fe + 3O₂ → __Fe₂O₃. ¿Qué coeficiente va delante del Fe₂O₃?"

explicacion: |
  Con 4 átomos de Fe en los reactivos, hacen falta 2 Fe₂O₃ (2×2=4).
```

### 10 — Síntesis de la sal común

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: __Na + Cl₂ → 2NaCl. ¿Qué coeficiente va delante del Na?"

explicacion: |
  Con 2 átomos de Cl en Cl₂, hacen falta 2 NaCl, y por lo tanto 2 Na.
```

### 11 — Descomposición del peróxido de hidrógeno

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["balanceo"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: __H₂O₂ → 2H₂O + O₂. ¿Qué coeficiente va delante del H₂O₂?"

pasos:
  - "Productos: 2H₂O (2 O) + O₂ (2 O) = 4 O en total"
  - "Cada H₂O₂ aporta 2 O, así que hacen falta 2 H₂O₂ (2×2=4)"

explicacion: |
  2H₂O₂ → 2H₂O + O₂.
```

### 12 — Descomposición del clorato de potasio

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2KClO₃ → 2KCl + __O₂. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "2KClO₃ tiene 6 átomos de O, así que hacen falta 3 O₂ (3×2=6)"

explicacion: |
  2KClO₃ → 2KCl + 3O₂.
```

### 13 — Combustión del etano: coeficiente del O₂

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 7
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2C₂H₆ + __O₂ → 4CO₂ + 6H₂O. ¿Qué coeficiente va delante del O₂?"

pasos:
  - "Productos: 4CO₂ (8 O) + 6H₂O (6 O) = 14 O en total"
  - "14 O necesitan 7 O₂ (7×2=14)"

explicacion: |
  2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.
```

### 14 — Combustión del etano: coeficiente del CO₂

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2C₂H₆ + 7O₂ → __CO₂ + 6H₂O. ¿Qué coeficiente va delante del CO₂?"

explicacion: |
  2C₂H₆ tiene 4 átomos de C, así que hacen falta 4 CO₂.
```

### 15 — Reacción de desplazamiento: aluminio con ácido sulfúrico

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["balanceo"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: 2Al + __H₂SO₄ → Al₂(SO₄)₃ + 3H₂. ¿Qué coeficiente va delante del H₂SO₄?"

pasos:
  - "Al₂(SO₄)₃ necesita 3 grupos sulfato, así que hacen falta 3 H₂SO₄"

explicacion: |
  2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂.
```

### 16 — Descomposición del carbonato de calcio

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["balanceo"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Balanceá: CaCO₃ → CaO + __CO₂. ¿Qué coeficiente va delante del CO₂?"

explicacion: |
  Ya está balanceada con todos los coeficientes en 1 — no todas las
  ecuaciones necesitan números grandes.
```

### 17 — Contar átomos: hidrógeno en agua

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 12)

respuesta: coef * 2
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} H₂O, ¿cuántos átomos de H hay en total?"

explicacion: |
  Cada H₂O aporta 2 átomos de H: {coef}×2 = {coef * 2}.
```

### 18 — Contar átomos: oxígeno en agua

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 12)

respuesta: coef
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} H₂O, ¿cuántos átomos de O hay en total?"

explicacion: |
  Cada H₂O aporta 1 átomo de O: {coef}×1 = {coef}.
```

### 19 — Contar átomos: oxígeno en dióxido de carbono

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 12)

respuesta: coef * 2
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} CO₂, ¿cuántos átomos de O hay en total?"

explicacion: |
  Cada CO₂ aporta 2 átomos de O: {coef}×2 = {coef * 2}.
```

### 20 — Contar átomos: hierro en óxido de hierro

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 10)

respuesta: coef * 2
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} Fe₂O₃, ¿cuántos átomos de Fe hay en total?"

explicacion: |
  Cada Fe₂O₃ aporta 2 átomos de Fe (por el subíndice 2): {coef}×2 =
  {coef * 2}.
```

### 21 — Contar átomos: azufre en sulfato de aluminio

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["contar_atomos"]

variables:
  coef: random(1, 8)

respuesta: coef * 3
tipo: input
tolerancia_abs: 0

enunciado: "En {coef} Al₂(SO₄)₃, ¿cuántos átomos de S hay en total?"

explicacion: |
  Cada Al₂(SO₄)₃ tiene 3 grupos sulfato (subíndice 3 fuera del
  paréntesis), cada uno con 1 S: {coef}×3 = {coef * 3}.
```

### 22 — Escalar una ecuación balanceada

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["escalar"]

variables:
  n: random(2, 10)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "2H₂ + O₂ → 2H₂O. Si se necesitan {n} O₂ completos, ¿cuántos H₂ hacen falta (manteniendo la misma proporción)?"

pasos:
  - "La proporción es 2 H₂ por cada 1 O₂: {n}×2 = {2 * n}"

explicacion: |
  Escalar una ecuación balanceada mantiene siempre la misma proporción
  entre coeficientes.
```

### 23 — Escalar una ecuación balanceada: amoníaco

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["escalar"]

variables:
  n: random(2, 10)

respuesta: 3 * n
tipo: input
tolerancia_abs: 0

enunciado: "N₂ + 3H₂ → 2NH₃. Si se usan {n} N₂ completos, ¿cuántos H₂ hacen falta?"

explicacion: |
  Proporción 1 N₂ : 3 H₂ → {n}×3 = {3 * n}.
```

### 24 — Concepto: qué se puede y qué no se puede cambiar

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Al balancear una ecuación química, se pueden cambiar tanto los coeficientes como los subíndices de las fórmulas."

explicacion: |
  Sólo los coeficientes se pueden cambiar — cambiar un subíndice
  convertiría la sustancia en otra distinta.
```

### 25 — Concepto: ley de conservación de la masa

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Balancear una ecuación química refleja que la cantidad de átomos de cada elemento no cambia entre reactivos y productos."

explicacion: |
  Es la ley de conservación de la masa: los átomos se reorganizan, no
  se crean ni se destruyen.
```

### 26 — Concepto: revisar todos los elementos

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Alcanza con balancear uno o dos elementos de la ecuación para darla por completa."

explicacion: |
  Hay que revisar TODOS los elementos que aparecen — dejar uno sin
  chequear puede dejar la ecuación mal balanceada.
```

### 27 — Concepto: coeficientes enteros mínimos

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "4H₂ + 2O₂ → 4H₂O está tan bien balanceada como 2H₂ + O₂ → 2H₂O, y da lo mismo cuál usar."

explicacion: |
  Aunque los átomos coinciden en las dos, la convención es usar siempre
  los coeficientes enteros MÁS CHICOS posibles — hay que simplificar.
```

### 28 — Concepto: método algebraico usa sistemas de ecuaciones

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El método algebraico de balanceo plantea una ecuación por cada elemento (átomos en reactivos = átomos en productos), y resuelve el sistema resultante."

explicacion: |
  Es exactamente aplicar `../../matematica/sistemas-dos-ecuaciones/` a
  un problema de química.
```

### 29 — Concepto: coeficiente fraccionario intermedio

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si al resolver el sistema algebraico un coeficiente queda fraccionario, se puede multiplicar TODA la ecuación por un número para que todos los coeficientes queden enteros."

explicacion: |
  Es el último paso del método algebraico — un coeficiente fraccionario
  no es una respuesta final, es un paso intermedio.
```

### 30 — Verificación con error: coeficiente del balanceo

```
metadata:
  materia: "matematicas"
  tema: "balanceo_ecuaciones"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  propuesto: uno_de([2, 1, 3])

respuesta: (propuesto == 2)
tipo: vf

enunciado: "2Mg + O₂ → __MgO. ¿Es correcto que el coeficiente del MgO sea {propuesto}?"

explicacion: |
  El coeficiente correcto es 2 (para que coincidan los 2 átomos de Mg de
  los reactivos).
```
