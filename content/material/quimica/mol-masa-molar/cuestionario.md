# Química — Mol y masa molar (cuestionario, 20 preguntas VBLang)

> Tema: `QJ`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Concepto de mol

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["mol", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "1 mol de cualquier sustancia contiene exactamente 6,022×10²³ partículas."

explicacion: |
  El mol es la unidad que define la cantidad de sustancia y equivale al número de Avogadro de partículas.
```

### 2 — El número de Avogadro

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["avogadro", "constante"]

respuesta: "6.022x10^23"
tipo: mc
opciones_explicitas: ["6.022x10^23", "3.14", "9.8", "1.6x10^-19"]

enunciado: "El número de Avogadro es aproximadamente:"

explicacion: |
  El número de Avogadro es la cantidad de entidades elementales que hay en 1 mol.
```

### 3 — Universalidad de la constante

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["avogadro", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "El número de Avogadro cambia dependiendo de la sustancia que se esté midiendo."

explicacion: |
  Falso. El número de Avogadro es una constante universal; lo que cambia según la sustancia es la MASA de un mol (la masa molar).
```

### 4 — Identificación de la constante

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["constante", "nomenclatura"]

respuesta: "N_A"
tipo: completar
respuestas_validas:
  - "N_A"

enunciado: "En VBLang, la constante del número de Avogadro ya está precargada con el nombre ___."

explicacion: |
  El identificador `N_A` está disponible como constante global, sin necesidad de declararlo.
```

### 5 — Relación masa molar-tabla periódica

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["masa_molar", "elementos"]

respuesta: "masa atómica de la tabla periódica"
tipo: mc
opciones_explicitas: ["masa atómica de la tabla periódica", "número atómico", "número de neutrones", "número de oxidación"]

enunciado: "La masa molar de un elemento coincide numéricamente con su..."

explicacion: |
  La masa molar de un elemento (en g/mol) es numéricamente igual a su masa atómica de la tabla periódica (en u).
```

### 6 — Cálculo de masa molar: H2O

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "agua"]

variables:
  h: 1
  masa_o: 16

respuesta: 2 * h + masa_o
tipo: completar
tolerancia_abs: 0

enunciado: "Calcula la masa molar del agua (H2O) si la masa atómica del H es {h} y la del O es {masa_o}."

pasos:
  - "Multiplicar la masa del H por 2 (hay 2 átomos de H): 2 × {h}"
  - "Sumar la masa del O: (2 × {h}) + {masa_o}"

explicacion: |
  La masa molar de H2O es (2 × 1) + 16 = 18 g/mol.
```

### 7 — Cálculo de masa molar: CO2

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "dioxido_de_carbono"]

variables:
  c: 12
  masa_o: 16

respuesta: c + 2 * masa_o
tipo: completar
tolerancia_abs: 0

enunciado: "Calcula la masa molar del dióxido de carbono (CO2) si la masa atómica del C es {c} y la del O es {masa_o}."

pasos:
  - "Sumar la masa de un átomo de C: {c}"
  - "Sumar la masa de dos átomos de O: 2 × {masa_o}"

explicacion: |
  La masa molar de CO2 es 12 + (2 × 16) = 44 g/mol.
```

### 8 — Cálculo de masa molar: NaCl

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "sal_comun"]

variables:
  na: 23
  cl: 35.5

respuesta: na + cl
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la masa molar del cloruro de sodio (NaCl) si la masa atómica del Na es {na} y la del Cl es {cl}."

explicacion: |
  La masa molar de NaCl es 23 + 35,5 = 58,5 g/mol.
```

### 9 — Concepto de masa molar de un compuesto

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La masa molar de un compuesto es la suma de las masas atómicas de todos los átomos de su fórmula."

explicacion: |
  Correcto. Para un compuesto se suman las masas atómicas de cada átomo, según su cantidad en la fórmula.
```

### 10 — Cálculo de moles

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "moles"]

variables:
  masa_molar: uno_de([2, 4, 5, 10, 20, 25, 50])
  moles_deseados: random(1, 10)
  masa: masa_molar * moles_deseados

respuesta: moles_deseados
tipo: completar
tolerancia_abs: 0

enunciado: "Una muestra contiene {masa} g de una sustancia cuya masa molar es {masa_molar} g/mol. ¿Cuántos moles hay en la muestra?"

explicacion: |
  n = m / M = {masa} / {masa_molar} = {moles_deseados} moles.
```

### 11 — Cálculo de masa

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["calculo", "masa"]

variables:
  masa_molar: uno_de([2, 4, 5, 10, 20, 25, 50])
  moles: random(1, 10)

respuesta: masa_molar * moles
tipo: completar
tolerancia_abs: 0

enunciado: "Si hay {moles} moles de una sustancia con masa molar {masa_molar} g/mol, ¿cuál es la masa de la muestra en gramos?"

explicacion: |
  m = n × M = {moles} × {masa_molar} g/mol.
```

### 12 — Fórmula de los moles

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["teoria", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula para calcular el número de moles (n) es n = masa / masa molar."

explicacion: |
  Correcto. n = m / M relaciona la masa de una muestra con su masa molar para obtener la cantidad de sustancia.
```

### 13 — Unidades de masa molar

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["unidades", "conceptos"]

respuesta: "mol"
tipo: completar
respuestas_validas:
  - "mol"

enunciado: "La unidad de la masa molar es gramos por ___."

explicacion: |
  La masa molar es la masa de un mol de sustancia, así que su unidad es g/mol.
```

### 14 — Partículas en 1 mol exacto

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["avogadro", "mol"]

respuesta: N_A
tipo: completar
tolerancia_abs: 1000000000000000000

enunciado: "¿Cuántas partículas (átomos o moléculas) hay en exactamente 1 mol de cualquier sustancia?"

explicacion: |
  Por definición, 1 mol contiene N_A partículas (aproximadamente 6,022×10²³), sin importar de qué sustancia se trate.
```

### 15 — Cálculo de moles de agua

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["moles", "agua", "calculo"]

variables:
  masa_molar_agua: 18
  gramos: uno_de([18, 36, 54, 72, 90])

respuesta: gramos / masa_molar_agua
tipo: completar
tolerancia_abs: 0.001

enunciado: "Una muestra de agua tiene {gramos} gramos. ¿Cuántos moles de agua hay? (masa molar del agua = {masa_molar_agua} g/mol)"

pasos:
  - "Identificar la masa de la muestra."
  - "Dividir la masa por la masa molar del agua."

explicacion: |
  n = m / M = {gramos} / {masa_molar_agua} moles.
```

### 16 — Relación masa-partículas

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["relacion", "particulas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantos más moles de una sustancia tengo, más partículas (átomos o moléculas) hay en la muestra."

explicacion: |
  Verdadero. El número de partículas se relaciona con los moles mediante N = n × N_A.
```

### 17 — Notación de masa molar

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["simbologia", "notacion"]

respuesta: "M"
tipo: mc
opciones_explicitas: ["M", "m", "n", "N"]

enunciado: "¿Cuál es la abreviatura convencional de la masa molar en las fórmulas de este tema?"

explicacion: |
  La masa molar se representa con "M" (mayúscula). "m" es la masa en gramos, "n" son los moles, y "N" es el número de partículas.
```

### 18 — Masa molar de un elemento (sodio)

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "basico"
  tags: ["calculo", "sodio"]

variables:
  masa_atomica_na: 23

respuesta: masa_atomica_na
tipo: completar
tolerancia_abs: 0

enunciado: "Si la masa atómica del sodio (Na) en la tabla periódica es {masa_atomica_na}, ¿cuál es su masa molar en g/mol?"

explicacion: |
  Para un elemento, la masa molar coincide numéricamente con la masa atómica: {masa_atomica_na} g/mol.
```

### 19 — Diferencia entre masa molar y número de moles

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "intermedio"
  tags: ["conceptos", "diferencia"]

respuesta: falso
tipo: vf

enunciado: "La masa molar (M) y el número de moles (n) son la misma magnitud, sólo que con nombres distintos."

explicacion: |
  Falso. La masa molar (M) es una propiedad fija de cada sustancia (g/mol); el número de moles (n) depende de cuánta cantidad de esa sustancia hay en la muestra.
```

### 20 — Cálculo combinado: moles a partir de fórmula

```
metadata:
  materia: "quimica"
  tema: "mol_masa_molar"
  nivel: "avanzado"
  tags: ["calculo", "co2"]

variables:
  c: 12
  masa_o: 16
  masa_molar_co2: c + 2 * masa_o
  gramos_co2: uno_de([44, 88, 132, 176])

respuesta: gramos_co2 / masa_molar_co2
tipo: completar
tolerancia_abs: 0.001

enunciado: "El CO2 tiene masa molar {masa_molar_co2} g/mol (C={c}, O={masa_o}). Si hay {gramos_co2} g de CO2, ¿cuántos moles son?"

explicacion: |
  n = m / M = {gramos_co2} / {masa_molar_co2} moles.
```
