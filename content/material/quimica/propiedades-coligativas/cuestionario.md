# Química — Propiedades coligativas (cuestionario, 20 preguntas VBLang)

> Temas: `QCOLIGa/b/c`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bugs de esta tanda: interpolación escrita como `\{variable\}` (con
> backslash, sintaxis inválida — la interpolación real es `{variable}`
> sin barra), y un caso de `uno_de([...])[idx]` — `uno_de(lista)` ya
> devuelve UN valor escalar, indexarlo de nuevo con `[idx]` intenta
> indexar un número, no una lista; y el array indexado tenía menos
> elementos que el rango del índice usado. Reescrito con el patrón
> simple de variables independientes.

---

### 1 — Propiedades coligativas y naturaleza del soluto

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["propiedades_coligativas", "soluto", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Las propiedades coligativas dependen exclusivamente de la cantidad de partículas de soluto presentes en la solución y no de la naturaleza química de la sustancia que actúa como soluto."

explicacion: |
  Correcto. Las propiedades coligativas (presión de vapor, punto de ebullición, punto de congelación, presión osmótica) dependen sólo de la concentración de partículas.
```

### 2 — Comparación de efecto coligativo: NaCl vs. azúcar

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["disociacion", "soluto"]

respuesta: falso
tipo: vf

enunciado: "Un mol de sal de mesa (NaCl), que se disocia en dos iones (Na+ y Cl-), tiene el mismo efecto coligativo que un mol de azúcar (sacarosa), que no se disocia en la solución."

explicacion: |
  Falso. Como el NaCl se disocia, 1 mol de NaCl produce 2 moles de partículas; 1 mol de azúcar produce sólo 1 mol de partículas. El NaCl tiene el doble de efecto coligativo.
```

### 3 — Definición de "coligativa"

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["definicion", "terminologia"]

respuesta: "coligativa"
tipo: completar
respuestas_validas:
  - "coligativa"

enunciado: "La propiedad que depende únicamente de la CANTIDAD de partículas de soluto disueltas, y no de la identidad química del soluto, se llama propiedad ___."

explicacion: |
  "Coligativa" viene del latín "colligare" (ligar, atar): estas propiedades están ligadas a la cantidad de partículas, no a cuáles son.
```

### 4 — Partículas en la disociación del NaCl

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["disociacion", "nacl"]

respuesta: "2 moles de partículas"
tipo: mc
opciones_explicitas: ["2 moles de partículas", "1 mol de partículas", "3 moles de partículas", "0.5 moles de partículas"]

enunciado: "Cuando 1 mol de NaCl se disuelve en agua y se disocia por completo en Na+ y Cl-, ¿cuántas moles de partículas aporta al medio?"

explicacion: |
  NaCl → Na+ + Cl−. Como hay dos iones por cada unidad de NaCl, la cantidad de partículas se duplica.
```

### 5 — Descenso crioscópico

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["crioscopia"]

respuesta: verdadero
tipo: vf

enunciado: "Un solvente con un soluto disuelto se congela a una temperatura menor que el solvente puro."

explicacion: |
  Correcto. La presencia de un soluto disminuye la temperatura de congelación del solvente: descenso crioscópico.
```

### 6 — Sal en las calles

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["aplicacion"]

respuesta: verdadero
tipo: vf

enunciado: "Se usa sal en las calles con hielo para que la mezcla necesite una temperatura más baja para congelarse."

explicacion: |
  Al disolver sal en el hielo, el descenso crioscópico baja el punto de congelación, así que el hielo se derrite incluso bajo cero.
```

### 7 — Cálculo del descenso crioscópico

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["calculo", "crioscopia"]

variables:
  k_constante: uno_de([1, 2, 3])
  molalidad: uno_de([1, 2, 3, 4])

respuesta: k_constante * molalidad
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá el descenso de la temperatura de congelación usando la constante crioscópica Kc = {k_constante} y molalidad m = {molalidad}."

pasos:
  - "Fórmula: ΔT = Kc × m"
  - "ΔT = {k_constante} × {molalidad}"

explicacion: |
  El descenso crioscópico es Kc multiplicado por la molalidad de la solución.
```

### 8 — Fórmula del descenso crioscópico

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["formula"]

respuesta: "molalidad"
tipo: completar
respuestas_validas:
  - "molalidad"
  - "m"

enunciado: "La fórmula del descenso crioscópico es ΔT = Kc × ___."

explicacion: |
  El descenso de la temperatura de congelación es proporcional a la molalidad de la solución.
```

### 9 — Ascenso ebulloscópico

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["ebulloscopia"]

respuesta: verdadero
tipo: vf

enunciado: "Un solvente con un soluto no volátil disuelto hierve a una temperatura mayor que el solvente puro."

explicacion: |
  Esto es el ascenso ebulloscópico: el soluto disminuye la presión de vapor del solvente, así que hace falta más temperatura para que hierva.
```

### 10 — Cálculo de ascenso ebulloscópico

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["calculo", "ebulloscopia"]

variables:
  ke: uno_de([1, 2, 3])
  m: uno_de([1, 2, 3, 4])

respuesta: ke * m
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá el ascenso de la temperatura de ebullición usando ΔT = Ke × m, con Ke = {ke} y m = {m}."

pasos:
  - "ΔT = {ke} × {m}"

explicacion: |
  El ascenso ebulloscópico es directamente proporcional a la molalidad del soluto.
```

### 11 — Relación soluto-desvío de temperatura

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor cantidad de soluto disuelto, mayor es el desvío de temperatura respecto al solvente puro, tanto en el ascenso ebulloscópico como en el descenso crioscópico."

explicacion: |
  Las propiedades coligativas dependen sólo de la cantidad de partículas de soluto, no de su identidad química.
```

### 12 — Ebullición del agua con sal

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["aplicacion", "ebulloscopia"]

respuesta: "más alta que el agua sola"
tipo: mc
opciones_explicitas: ["más alta que el agua sola", "más baja que el agua sola", "igual que el agua sola", "no hierve nunca"]

enunciado: "Cuando se agrega sal al agua para cocinar, el agua hierve a una temperatura..."

explicacion: |
  La sal (soluto no volátil) produce un ascenso ebulloscópico: eleva el punto de ebullición por encima de los 100°C (a 1 atm).
```

### 13 — Mecanismo de la presión osmótica

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["osmosis", "membrana"]

respuesta: "membrana semipermeable"
tipo: mc
opciones_explicitas: ["membrana semipermeable", "pared sólida", "vacío", "llave de paso"]

enunciado: "La presión osmótica ocurre cuando dos soluciones de distinta concentración están separadas por una..."

explicacion: |
  La ósmosis requiere una membrana semipermeable, que deja pasar el solvente pero no el soluto.
```

### 14 — Dirección del flujo de solvente en ósmosis

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["osmosis", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "En el proceso de ósmosis, el solvente se mueve desde el lado menos concentrado hacia el lado más concentrado."

explicacion: |
  Correcto. El solvente fluye hacia donde hay más soluto, buscando igualar las concentraciones.
```

### 15 — Cálculo de la presión osmótica

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["calculo", "osmosis"]

variables:
  M: uno_de([1, 2])
  R: 0.082
  T: uno_de([273, 298, 300])

respuesta: M * R * T
tipo: input
tolerancia_abs: 0.5

enunciado: "Calculá la presión osmótica de una solución con molaridad {M} M a temperatura {T} K, usando R = {R} L·atm/(mol·K)."

pasos:
  - "π = M × R × T"

explicacion: |
  π = {M} × {R} × {T} atm.
```

### 16 — Ósmosis en células biológicas

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["biologia", "osmosis"]

respuesta: verdadero
tipo: vf

enunciado: "Una célula puesta en agua muy pura (sin sal) se hincha porque el agua entra buscando igualar la concentración de sales de adentro."

explicacion: |
  Verdadero. El agua externa es hipotónica respecto a la célula, así que el agua entra por ósmosis y la célula aumenta de volumen.
```

### 17 — La fórmula de la presión osmótica

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "basico"
  tags: ["formula", "osmosis"]

respuesta: "T"
tipo: completar
respuestas_validas:
  - "T"
  - "temperatura absoluta"

enunciado: "La fórmula de la presión osmótica es π = M × R × ___."

explicacion: |
  La variable que representa la temperatura en esta fórmula es la temperatura absoluta (T), en Kelvin.
```

### 18 — Mayor efecto coligativo entre dos solutos

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "avanzado"
  tags: ["disociacion", "comparacion"]

respuesta: "CaCl2 (se disocia en 3 iones: Ca2+ + 2 Cl-)"
tipo: mc
opciones_explicitas: ["CaCl2 (se disocia en 3 iones: Ca2+ + 2 Cl-)", "NaCl (se disocia en 2 iones)", "Glucosa (no se disocia)", "Los tres tienen el mismo efecto"]

enunciado: "Con la misma cantidad de moles disueltos, ¿cuál de estos solutos produce el mayor efecto coligativo?"

explicacion: |
  Cuantas más partículas libera cada unidad de soluto al disociarse, mayor el efecto coligativo. CaCl2 libera 3 partículas por unidad (1 Ca2+ + 2 Cl-), más que NaCl (2) o la glucosa, que no se disocia (1).
```

### 19 — Aplicación en anticongelantes

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "intermedio"
  tags: ["aplicacion", "crioscopia"]

respuesta: verdadero
tipo: vf

enunciado: "El anticongelante de los autos funciona bajando el punto de congelación del agua del radiador, por el mismo principio del descenso crioscópico."

explicacion: |
  Correcto. El anticongelante es un soluto disuelto en el agua del radiador que baja su punto de congelación, evitando que se congele en climas fríos.
```

### 20 — Comparación de propiedades coligativas

```
metadata:
  materia: "quimica"
  tema: "propiedades_coligativas"
  nivel: "avanzado"
  tags: ["comparacion", "resumen"]

respuesta: "menor punto de congelación y mayor punto de ebullición"
tipo: mc
opciones_explicitas: ["menor punto de congelación y mayor punto de ebullición", "mayor punto de congelación y menor punto de ebullición", "ambos puntos suben", "ambos puntos bajan"]

enunciado: "Comparado con agua pura, ¿qué le pasa al punto de congelación y al punto de ebullición del agua con sal disuelta?"

explicacion: |
  El soluto baja el punto de congelación (descenso crioscópico) y sube el punto de ebullición (ascenso ebulloscópico) — van en direcciones opuestas.
```
