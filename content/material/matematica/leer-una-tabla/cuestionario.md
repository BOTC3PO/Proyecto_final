# Matemática — Leer una tabla (cuestionario, 25 preguntas VBLang)

> Tema: `D1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una fila

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "En una tabla, ¿qué es una fila?"
tipo: mc
opciones_explicitas:
  - "Una línea horizontal de la tabla, que agrupa los datos de un mismo registro"
  - "Una línea vertical de la tabla"
  - "El título general de toda la tabla"
respuesta: "Una línea horizontal de la tabla, que agrupa los datos de un mismo registro"

explicacion: |
  Por ejemplo, todos los datos de un mismo producto suelen ir en la
  misma fila.
```

### 2 — Qué es una columna

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "En una tabla, ¿qué es una columna?"
tipo: mc
opciones_explicitas:
  - "Una línea vertical de la tabla, que agrupa el mismo tipo de dato para todos los registros"
  - "Una línea horizontal de la tabla"
  - "Un dato suelto, sin relación con el resto"
respuesta: "Una línea vertical de la tabla, que agrupa el mismo tipo de dato para todos los registros"

explicacion: |
  Por ejemplo, la columna "Precio" tiene el precio de cada producto,
  uno por fila.
```

### 3 — Qué es una celda

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Qué es una celda en una tabla?"
tipo: mc
opciones_explicitas:
  - "La intersección de una fila y una columna, con un solo dato puntual adentro"
  - "El título de una columna"
  - "El total de una fila"
respuesta: "La intersección de una fila y una columna, con un solo dato puntual adentro"

explicacion: |
  Cada celda contiene un único valor.
```

### 4 — Qué es el encabezado

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Qué es el encabezado de una tabla?"
tipo: mc
opciones_explicitas:
  - "La primera fila, que nombra qué dato contiene cada columna"
  - "La última fila, con los totales"
  - "La primera columna, con los nombres de cada fila"
respuesta: "La primera fila, que nombra qué dato contiene cada columna"

explicacion: |
  Sin encabezado, no se sabría qué representa cada columna de números.
```

### 5 — Problema: leer un precio

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  tabla: [{producto: "Manzana", precio: 120, stock: 30}, {producto: "Banana", precio: 80, stock: 45}, {producto: "Naranja", precio: 100, stock: 20}, {producto: "Pera", precio: 150, stock: 15}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].precio
tipo: input
unidad: "$"

enunciado: "Según esta tabla — Manzana: $120 (30 en stock); Banana: $80 (45 en stock); Naranja: $100 (20 en stock); Pera: $150 (15 en stock) — ¿cuál es el precio de {tabla[idx].producto}?"

explicacion: |
  Se busca la fila del producto pedido, y se lee el valor de la
  columna "Precio" en esa fila.
```

### 6 — Problema: leer un stock

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  tabla: [{producto: "Manzana", precio: 120, stock: 30}, {producto: "Banana", precio: 80, stock: 45}, {producto: "Naranja", precio: 100, stock: 20}, {producto: "Pera", precio: 150, stock: 15}]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx].stock
tipo: input

enunciado: "Con la misma tabla — Manzana: $120 (30 en stock); Banana: $80 (45 en stock); Naranja: $100 (20 en stock); Pera: $150 (15 en stock) — ¿cuántas unidades hay en stock de {tabla[idx].producto}?"

explicacion: |
  Ahora se lee la columna "Stock" en vez de "Precio", en la misma fila.
```

### 7 — Problema: comparar dos filas

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "Según la tabla — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuál de estos dos productos es más caro, Banana o Pera?"
tipo: mc
opciones_explicitas:
  - "Pera"
  - "Banana"
respuesta: "Pera"

explicacion: |
  Pera cuesta $150 y Banana $80 — se comparan los valores de la misma
  columna en filas distintas.
```

### 8 — Problema: sumar una columna completa

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 110
tipo: input

enunciado: "Según la tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿cuál es el stock TOTAL sumando las 4 filas?"

pasos:
  - "30 + 45 + 20 + 15 = 110"

explicacion: |
  Cuando la tabla no trae ya un total, hay que sumar manualmente los
  valores de la columna.
```

### 9 — Problema: diferencia entre el mayor y el menor valor

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 70
tipo: input

enunciado: "Según la tabla de precios — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuál es la diferencia entre el producto más caro y el más barato?"

pasos:
  - "Más caro: Pera ($150). Más barato: Banana ($80)."
  - "Diferencia = 150 − 80 = 70"

explicacion: |
  Primero hay que identificar cuál fila tiene el mayor y cuál el menor
  valor, y después restar.
```

### 10 — Una tabla sin encabezado es más difícil de leer

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla sin encabezado sigue siendo una tabla (filas y columnas de datos), pero es mucho más difícil de interpretar porque no queda claro qué representa cada columna."

explicacion: |
  El encabezado es lo que le da significado a los números de cada
  columna.
```

### 11 — Ordenar: pasos para leer un valor puntual

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "ordenar"]

enunciado: "Ordená los pasos para encontrar un dato puntual en una tabla (por ejemplo, el precio de un producto específico)."
tipo: ordenar
opciones_explicitas:
  - "Ubicar la columna correspondiente al dato que se busca"
  - "Ubicar la fila correspondiente al registro que interesa"
  - "Leer el valor de la celda donde se cruzan esa fila y esa columna"
respuesta_orden: ["Ubicar la fila correspondiente al registro que interesa", "Ubicar la columna correspondiente al dato que se busca", "Leer el valor de la celda donde se cruzan esa fila y esa columna"]
explicacion: |
  Sin fijar primero la fila (o la columna), no hay una sola celda que
  leer.
```

### 12 — Aplicación real: leer una boleta de compra

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "aplicacion"]

enunciado: "Una boleta de supermercado lista productos, cantidades y precios en filas. ¿Qué habilidad hace falta para entender cuánto costó cada producto?"
tipo: mc
opciones_explicitas:
  - "Leer una tabla: identificar la fila del producto y la columna del precio"
  - "Ninguna habilidad matemática, sólo hay que mirar el total final"
  - "Sólo sirve saber sumar, sin necesidad de leer filas ni columnas"
respuesta: "Leer una tabla: identificar la fila del producto y la columna del precio"

explicacion: |
  Es la misma habilidad de este módulo, aplicada a un documento real
  y cotidiano.
```

### 13 — Problema: tabla de resultados deportivos

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

variables:
  equipos: [{nombre: "Águilas", puntos: 24, partidos: 10}, {nombre: "Tigres", puntos: 18, partidos: 10}, {nombre: "Leones", puntos: 30, partidos: 10}]
  idx: uno_de([0, 1, 2])

respuesta: equipos[idx].puntos
tipo: input

enunciado: "Tabla de un torneo — Águilas: 24 puntos (10 partidos); Tigres: 18 puntos (10 partidos); Leones: 30 puntos (10 partidos). ¿Cuántos puntos tiene {equipos[idx].nombre}?"

explicacion: |
  Misma habilidad que con la tabla de productos, en otro contexto.
```

### 14 — Problema: quién va primero en la tabla de resultados

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "Con la tabla del torneo — Águilas: 24 puntos; Tigres: 18 puntos; Leones: 30 puntos — ¿qué equipo está primero en la tabla de posiciones?"
tipo: mc
opciones_explicitas:
  - "Leones"
  - "Águilas"
  - "Tigres"
respuesta: "Leones"

explicacion: |
  Tiene la mayor cantidad de puntos de los tres equipos.
```

### 15 — Vocabulario: registro

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "vocabulario"]

enunciado: "¿Cómo se le llama, en general, al conjunto de datos de una misma fila (por ejemplo, todos los datos de un mismo producto)?"
tipo: mc
opciones_explicitas:
  - "Un registro"
  - "Un encabezado"
  - "Una celda"
respuesta: "Un registro"

explicacion: |
  Cada fila (fuera del encabezado) suele representar un registro
  completo.
```

### 16 — Problema: promedio simple de una columna

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 24
tipo: input

enunciado: "Con la tabla de puntos — Águilas: 24; Tigres: 18; Leones: 30 — ¿cuál es el promedio de puntos de los 3 equipos?"

pasos:
  - "(24 + 18 + 30) ÷ 3 = 72 ÷ 3 = 24"

explicacion: |
  Sumar la columna completa y dividir por la cantidad de filas.
```

### 17 — Las tablas no siempre tienen números

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla puede tener columnas con texto (como nombres o categorías), no sólo columnas numéricas."

explicacion: |
  La columna "Producto" o "Equipo", por ejemplo, es texto — sólo
  algunas columnas necesitan ser números.
```

### 18 — Problema: contar filas que cumplen una condición

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla", "problema"]

respuesta: 2
tipo: input

enunciado: "De la tabla de precios — Manzana: $120; Banana: $80; Naranja: $100; Pera: $150 — ¿cuántos productos cuestan MÁS de $100?"

pasos:
  - "Manzana ($120) y Pera ($150) superan los $100 — Naranja ($100) no supera, está justo en el límite."
  - "Total: 2 productos"

explicacion: |
  Hay que revisar cada fila una por una y contar cuántas cumplen la
  condición.
```

### 19 — El orden de las filas no cambia los datos

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Si se reordenan las filas de una tabla (por ejemplo, de mayor a menor precio), los datos de cada registro no cambian — sólo cambia el orden en que se presentan."

explicacion: |
  Reordenar no agrega ni quita información, sólo la presenta distinto.
```

### 20 — Vocabulario: fuente de los datos

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "vocabulario"]

enunciado: "Antes de confiar en los datos de una tabla, ¿qué conviene revisar además de los números en sí?"
tipo: mc
opciones_explicitas:
  - "De dónde vienen esos datos (la fuente) y si están actualizados"
  - "Sólo el color de fondo de la tabla"
  - "No hace falta revisar nada más, los números siempre son confiables"
respuesta: "De dónde vienen esos datos (la fuente) y si están actualizados"

explicacion: |
  Una tabla puede estar bien construida y aun así tener datos viejos o
  poco confiables si la fuente no es buena.
```

### 21 — Problema: buscar el valor máximo de una columna

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "De la tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿qué producto tiene MÁS unidades en stock?"
tipo: mc
opciones_explicitas:
  - "Banana"
  - "Manzana"
  - "Naranja"
respuesta: "Banana"

explicacion: |
  Banana tiene 45, el valor más alto de esa columna.
```

### 22 — Problema: buscar el valor mínimo de una columna

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "intermedio"
  tags: ["tabla", "problema"]

enunciado: "De la misma tabla de stock — Manzana: 30; Banana: 45; Naranja: 20; Pera: 15 — ¿qué producto tiene MENOS unidades en stock?"
tipo: mc
opciones_explicitas:
  - "Pera"
  - "Naranja"
  - "Manzana"
respuesta: "Pera"

explicacion: |
  Pera tiene 15, el valor más bajo de esa columna.
```

### 23 — Una celda vacía no siempre significa cero

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "avanzado"
  tags: ["tabla"]

respuesta: verdadero
tipo: vf

enunciado: "Una celda vacía en una tabla no siempre significa 'cero' — puede significar 'dato no disponible' o 'no aplica', y confundir ambos casos puede llevar a un error de interpretación."

explicacion: |
  Es un error común: tratar un dato faltante como si fuera 0 cuando en
  realidad nunca se midió ese valor.
```

### 24 — Aplicación real: horario escolar

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["tabla", "aplicacion"]

enunciado: "Un horario escolar tiene los días de la semana en las columnas y las horas del día en las filas. ¿Cómo se encuentra qué materia hay el miércoles a las 10 hs?"
tipo: mc
opciones_explicitas:
  - "Se busca la fila de las 10 hs y la columna del miércoles, y se lee la celda donde se cruzan"
  - "Se suman todas las materias de la semana"
  - "No se puede saber sin ver el horario completo del año"
respuesta: "Se busca la fila de las 10 hs y la columna del miércoles, y se lee la celda donde se cruzan"

explicacion: |
  Es exactamente el mismo procedimiento de cruzar fila y columna.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "matematicas"
  tema: "leer_una_tabla"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber leer una tabla?"
tipo: mc
opciones_explicitas:
  - "Para encontrar, comparar y sumar datos organizados en filas y columnas, sin necesidad de que estén dibujados como gráfico"
  - "Sólo sirve para tablas de multiplicar"
  - "Sólo aplica a tablas con menos de 3 filas"
respuesta: "Para encontrar, comparar y sumar datos organizados en filas y columnas, sin necesidad de que estén dibujados como gráfico"

explicacion: |
  Es el prerrequisito directo de los tres módulos de gráficos que
  siguen — un gráfico es, en el fondo, una tabla dibujada.
```
