# Cívica — Sistema electoral y reparto D'Hondt (cuestionario, 22 preguntas VBLang)

> Tema: `C8`. Ver `teoria.md` en esta misma carpeta. Incluye cálculo
> real del método (no sólo teoría), según lo pedido.

---

### 1 — Por qué hace falta un método de reparto

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["fundamento"]

enunciado: "¿Por qué no alcanza con repartir bancas 'exactamente proporcional' a los votos de cada partido?"
tipo: mc
opciones_explicitas:
  - "Porque el reparto exacto casi nunca da un número entero de bancas"
  - "Porque la ley prohíbe cualquier forma de proporcionalidad"
  - "Porque las bancas se sortean, no se reparten por votos"
respuesta: "Porque el reparto exacto casi nunca da un número entero de bancas"

explicacion: |
  33,3% de los votos con 5 bancas "daría" 1,665 bancas — un número que
  no existe.
```

### 2 — Nombre del método

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "¿Cómo se llama el método de reparto proporcional de bancas más usado en Argentina?"
tipo: mc
opciones_explicitas:
  - "Método D'Hondt"
  - "Método Hare"
  - "Método mayoritario simple"
respuesta: "Método D'Hondt"

explicacion: |
  Ideado por el matemático belga Victor D'Hondt.
```

### 3 — Origen del creador

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["historia"]

enunciado: "¿De qué nacionalidad era Victor D'Hondt, creador del método?"
tipo: mc
opciones_explicitas:
  - "Belga"
  - "Argentino"
  - "Francés"
respuesta: "Belga"

explicacion: |
  Matemático belga.
```

### 4 — Paso 1 del método

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["metodo"]

enunciado: "¿Cuál es el primer paso del método D'Hondt?"
tipo: mc
opciones_explicitas:
  - "Dividir el total de votos de cada partido por 1, 2, 3... hasta el número de bancas en juego"
  - "Sumar todos los votos de todos los partidos"
  - "Eliminar directamente al partido con menos votos"
respuesta: "Dividir el total de votos de cada partido por 1, 2, 3... hasta el número de bancas en juego"

explicacion: |
  Genera una tabla de cocientes por partido.
```

### 5 — Paso 2 del método

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["metodo"]

enunciado: "Después de calcular los cocientes de todos los partidos, ¿qué se hace con ellos?"
tipo: mc
opciones_explicitas:
  - "Se ordenan todos juntos de mayor a menor"
  - "Se descartan los del partido con menos votos totales"
  - "Se promedian entre todos los partidos"
respuesta: "Se ordenan todos juntos de mayor a menor"

explicacion: |
  Es el paso previo a asignar las bancas.
```

### 6 — Paso 3 del método

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["metodo"]

enunciado: "¿Cómo se asignan finalmente las bancas en el método D'Hondt?"
tipo: mc
opciones_explicitas:
  - "Tomando el cociente más alto restante, una banca por vez, hasta agotar las bancas disponibles"
  - "Dándole todas las bancas al partido con el cociente más alto en la primera división"
  - "Repartiendo una banca por cada 1000 votos, sin ordenar cocientes"
respuesta: "Tomando el cociente más alto restante, una banca por vez, hasta agotar las bancas disponibles"

explicacion: |
  Es el paso final que determina el reparto.
```

### 7 — Cálculo de cociente (aleatorio)

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  votos: random(2000, 9000)

enunciado: "Un partido sacó {votos} votos. ¿Cuál es su cociente D'Hondt al dividirlo por 1 (primer cociente)?"
tipo: input
respuesta: votos

explicacion: |
  El primer cociente (÷1) es siempre el total de votos del partido.
```

### 8 — Cálculo de cociente ÷2

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  votos: random(2000, 9000)

enunciado: "Ese mismo partido, con {votos} votos, ¿cuál es su cociente al dividir por 2?"
tipo: input
respuesta: votos / 2
tolerancia_abs: 0.01

explicacion: |
  Segundo cociente de la tabla D'Hondt de ese partido.
```

### 9 — Cálculo de cociente con divisor variable

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["calculo"]

variables:
  votos: random(3000, 9999)
  divisor: random(2, 5)

enunciado: "Un partido con {votos} votos, ¿cuál es su cociente D'Hondt al dividir por {divisor}?"
tipo: input
respuesta: votos / divisor
tolerancia_abs: 0.01

explicacion: |
  Se calcula dividiendo directamente los votos totales por el divisor.
```

### 10 — Ejemplo: cociente 1 de A

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["ejemplo"]

enunciado: "En el ejemplo de la teoría (Partido A: 10.000 votos, B: 6.000, C: 3.500, 5 bancas), ¿cuál es el primer cociente (÷1) del Partido A?"
tipo: input
respuesta: 10000

explicacion: |
  El primer cociente es siempre el total de votos.
```

### 11 — Ejemplo: cociente 2 de A

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuál es el segundo cociente (÷2) del Partido A (10.000 votos)?"
tipo: input
respuesta: 5000

explicacion: |
  10.000 ÷ 2 = 5.000.
```

### 12 — Ejemplo: cociente 1 de B

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuál es el primer cociente (÷1) del Partido B (6.000 votos)?"
tipo: input
respuesta: 6000

explicacion: |
  El primer cociente es siempre el total de votos.
```

### 13 — Ejemplo: cociente 1 de C

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "basico"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuál es el primer cociente (÷1) del Partido C (3.500 votos)?"
tipo: input
respuesta: 3500

explicacion: |
  El primer cociente es siempre el total de votos.
```

### 14 — Ejemplo: quinto cociente más alto

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo (A: 10.000, B: 6.000, C: 3.500, 5 bancas), ordenando todos los cocientes de mayor a menor, los primeros 4 son 10.000, 6.000, 5.000 y 3.500. ¿Qué partido obtiene la 5ta banca, con el cociente 3.333,33?"
tipo: mc
opciones_explicitas:
  - "A"
  - "B"
  - "C"
respuesta: "A"

explicacion: |
  El tercer cociente de A (10.000 ÷ 3 = 3.333,33) supera al segundo
  cociente de B (6.000 ÷ 2 = 3.000) y al segundo de C (3.500 ÷ 2 =
  1.750).
```

### 15 — Ejemplo: reparto final de A

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuántas de las 5 bancas obtiene finalmente el Partido A?"
tipo: input
respuesta: 3

explicacion: |
  A se queda con los cocientes 10.000, 5.000 y 3.333,33 — 3 bancas.
```

### 16 — Ejemplo: reparto final de B

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuántas bancas obtiene finalmente el Partido B?"
tipo: input
respuesta: 1

explicacion: |
  B sólo entra con su primer cociente (6.000) entre los 5 más altos.
```

### 17 — Ejemplo: reparto final de C

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuántas bancas obtiene finalmente el Partido C?"
tipo: input
respuesta: 1

explicacion: |
  C entra con su primer cociente (3.500) entre los 5 más altos.
```

### 18 — Suma total de bancas repartidas

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["ejemplo"]

enunciado: "En el mismo ejemplo, ¿cuánto suman las bancas de A (3), B (1) y C (1)?"
tipo: input
respuesta: 5

explicacion: |
  Coincide con el total de 5 bancas en juego — el método reparte
  exactamente todas las bancas disponibles, sin sobrar ni faltar.
```

### 19 — Favorece a partidos grandes

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "avanzado"
  tags: ["propiedad"]

enunciado: "¿Verdadero o falso? El método D'Hondt tiende a favorecer levemente a los partidos más grandes frente a un reparto perfectamente proporcional."
tipo: vf
respuesta: verdadero

explicacion: |
  En el ejemplo, A sacó 52,6% de los votos pero obtuvo 60% de las
  bancas (3 de 5).
```

### 20 — Piso electoral

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["piso_electoral"]

enunciado: "¿Qué porcentaje mínimo de votos válidos debe superar una lista de diputados nacionales en Argentina para entrar al reparto D'Hondt?"
tipo: input
respuesta: 3

explicacion: |
  3% de los votos válidos emitidos del distrito.
```

### 21 — Quedar fuera del piso

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["piso_electoral"]

enunciado: "¿Verdadero o falso? Un partido que sacó votos pero no llega al piso electoral del 3% entra igual al reparto D'Hondt, aunque con menos posibilidades."
tipo: vf
respuesta: falso

explicacion: |
  Queda directamente fuera del reparto, sin importar cuántos votos
  sacó por debajo del piso.
```

### 22 — Prerrequisito: división de poderes

```
metadata:
  materia: "civica"
  tema: "sistema_electoral_dhondt"
  nivel: "intermedio"
  tags: ["prerrequisito"]

enunciado: "¿Por qué este tema depende de haber visto primero la división de poderes?"
tipo: mc
opciones_explicitas:
  - "Porque entender cómo se reparten bancas presupone ya saber qué es una banca legislativa y para qué poder se elige"
  - "Porque no tiene ninguna relación con la división de poderes"
  - "Porque el reparto de bancas es anterior a la existencia del Poder Legislativo"
respuesta: "Porque entender cómo se reparten bancas presupone ya saber qué es una banca legislativa y para qué poder se elige"

explicacion: |
  Sin ese marco, "banca" es una palabra sin contexto institucional.
```
