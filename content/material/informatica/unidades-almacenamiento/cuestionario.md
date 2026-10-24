# Informática — Unidades de almacenamiento (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. `bytes = cantidad × 1000^n`
> (decimal: KB/MB/GB) vs. `bytes = cantidad × 1024^n` (binario:
> KiB/MiB/GiB).

---

### 1 — Qué es un bit

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Qué es un bit?"
tipo: mc
opciones_explicitas:
  - "La unidad mínima de información en una computadora: un 0 o un 1"
  - "Un grupo de 8 bytes"
  - "La velocidad de un procesador"
respuesta: "La unidad mínima de información en una computadora: un 0 o un 1"

explicacion: |
  Todo lo demás (bytes, kilobytes...) se construye a partir de esta
  unidad mínima.
```

### 2 — Un byte tiene 8 bits

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un byte está compuesto por 8 bits."

explicacion: |
  Es la unidad base sobre la que se arman kilobyte, megabyte, etc.
```

### 3 — El prefijo "kilo" en el sistema decimal

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema decimal (SI), ¿a cuántos bytes equivale 1 KB?"
tipo: mc
opciones_explicitas:
  - "1.000 bytes"
  - "1.024 bytes"
  - "100 bytes"
respuesta: "1.000 bytes"

explicacion: |
  Es la potencia de 10 estándar, igual que en cualquier otra unidad
  \"kilo\" (kilogramo, kilómetro).
```

### 4 — El prefijo "kibi" en el sistema binario

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema binario (IEC), ¿a cuántos bytes equivale 1 KiB?"
tipo: mc
opciones_explicitas:
  - "1.024 bytes"
  - "1.000 bytes"
  - "512 bytes"
respuesta: "1.024 bytes"

explicacion: |
  1.024 es 2 elevado a la 10, la potencia de 2 más cercana a 1.000.
```

### 5 — KB y KiB no son lo mismo

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "KB (1.000 bytes) y KiB (1.024 bytes) no son la misma cantidad, aunque en el uso cotidiano a veces se confundan o se usen como sinónimos."

explicacion: |
  Es justamente la ambigüedad que el estándar IEC de 1998 quiso resolver
  con los prefijos \"kibi/mebi/gibi\".
```

### 6 — Convertir KB a bytes

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)

respuesta: cantidad_kb * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kb} KB (sistema decimal). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.000, la definición decimal de kilo.
```

### 7 — Convertir KiB a bytes

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kib: random(5, 900)

respuesta: cantidad_kib * 1024
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kib} KiB (sistema binario). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.024, la definición binaria de kibi.
```

### 8 — El mismo número representa más bytes en KiB

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "comparacion"]

variables:
  cantidad: random(10, 500)

respuesta: ((cantidad * 1024) > (cantidad * 1000))
tipo: vf

enunciado: "Con el mismo número, {cantidad} KiB representa más bytes que {cantidad} KB."

explicacion: |
  1.024 es mayor que 1.000, así que la versión binaria siempre da más
  bytes para el mismo número.
```

### 9 — La RAM usa naturalmente potencias de 2

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM y el direccionamiento de memoria de una computadora usan naturalmente potencias de 2, porque las computadoras funcionan internamente en base binaria."

explicacion: |
  Es la razón de fondo por la que existe el sistema binario de
  prefijos (kibi, mebi, gibi).
```

### 10 — Los fabricantes de discos usan el sistema decimal

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los fabricantes de discos, pendrives y tarjetas de memoria suelen anunciar la capacidad usando el sistema decimal (1.000), no el binario."

explicacion: |
  Da un número redondo y, casualmente, también más grande que el
  binario.
```

### 11 — Calcular los bytes reales de un disco anunciado

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: gb_anunciados * 1000000000
tipo: input
tolerancia_abs: 0

enunciado: "Un disco se vende anunciando \"{gb_anunciados} GB\" (sistema decimal del fabricante). ¿Cuántos bytes tiene realmente ese disco?"

pasos:
  - "{gb_anunciados} × 1.000.000.000"

explicacion: |
  1 GB decimal son 1.000 millones de bytes.
```

### 12 — Calcular cuánto muestra el sistema operativo

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: (gb_anunciados * 1000000000) / 1073741824
tipo: input
tolerancia_abs: 0.5

enunciado: "Ese mismo disco de \"{gb_anunciados} GB\" (decimal), ¿aproximadamente cuánto va a mostrar el sistema operativo, que calcula dividiendo por potencias de 1.024 (aunque siga llamándolo \"GB\")?"

pasos:
  - "bytes reales: {gb_anunciados} × 1.000.000.000 = {gb_anunciados * 1000000000}"
  - "÷ 1.024³ (1.073.741.824) = {(gb_anunciados * 1000000000) / 1073741824}"

explicacion: |
  El sistema operativo divide por 1.024³, no por 1.000³, así que el
  número que muestra siempre es menor al anunciado por el fabricante.
```

### 13 — Un disco de 500 GB muestra menos

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un disco anunciado como \"500 GB\" por el fabricante suele mostrar un número menor a 500 en el sistema operativo (aproximadamente 465,7)."

explicacion: |
  Es la consecuencia directa de que el fabricante usa 1.000 y el
  sistema operativo divide por 1.024.
```

### 14 — No falta espacio, es una diferencia de conteo

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre el \"500 GB\" del fabricante y lo que muestra el sistema operativo no significa que falte espacio: es la misma cantidad de bytes, contada con dos reglas de prefijos distintas."

explicacion: |
  No hay ningún byte \"perdido\": es sólo una diferencia de convención
  de conteo.
```

### 15 — Despejar el valor en KB decimal

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)
  bytes_totales: cantidad_kb * 1000

respuesta: cantidad_kb
tipo: input
tolerancia_abs: 0.01

enunciado: "Un archivo pesa {bytes_totales} bytes. ¿Cuántos KB (sistema decimal) son?"

explicacion: |
  Se despeja dividiendo los bytes totales por 1.000.
```

### 16 — El objetivo del estándar IEC de 1998

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Para qué introdujo la IEC los prefijos \"kibi/mebi/gibi\" en 1998?"
tipo: mc
opciones_explicitas:
  - "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"
  - "Para reemplazar por completo al byte como unidad base"
  - "Para que los fabricantes de discos vendieran más capacidad"
respuesta: "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"

explicacion: |
  Antes del estándar, \"KB\" se usaba indistintamente para 1.000 o 1.024
  bytes, según el contexto.
```

### 17 — Ordenar unidades de menor a mayor

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "orden"]

tipo: ordenar
enunciado: "Ordená estas unidades de almacenamiento de menor a mayor."
opciones_explicitas:
  - "1 MB"
  - "1 byte"
  - "1 GB"
  - "1 KB"
respuesta_orden: ["1 byte", "1 KB", "1 MB", "1 GB"]

explicacion: |
  Cada prefijo es 1.000 (o 1.024) veces más grande que el anterior.
```

### 18 — Verificar una conversión (con error a veces)

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "verificacion"]

variables:
  cantidad_kib: random(5, 900)
  correcto: cantidad_kib * 1024
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {cantidad_kib} KiB convertidos a bytes: {mostrado}."

explicacion: |
  Se vuelve a multiplicar por 1.024 y se compara con el valor mostrado.
```

### 19 — Completar la cantidad en KiB

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento"]

variables:
  cantidad_kib: random(5, 900)
  bytes_totales: cantidad_kib * 1024

tipo: completar
enunciado: "Un archivo pesa {bytes_totales} bytes. Completá: ___ (KiB) = {bytes_totales} (bytes) ÷ 1.024."
respuestas_validas:
  - cantidad_kib

explicacion: |
  Se divide por 1.024 para pasar de bytes a KiB.
```

### 20 — Comparar capacidad decimal y binaria del mismo disco

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para el mismo disco, el número de \"GB\" que anuncia el fabricante (sistema decimal) siempre es mayor que el número que muestra el sistema operativo al calcularlo en sistema binario."

explicacion: |
  Dividir la misma cantidad de bytes por 1.000³ da un número mayor que
  dividirla por 1.024³.
```

### 21 — 1 MB no es lo mismo que 1 MiB

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 MB (1.000.000 bytes, decimal) no es exactamente lo mismo que 1 MiB (1.048.576 bytes, binario)."

explicacion: |
  La diferencia se agranda a medida que se sube de escala (kilo, mega,
  giga...).
```

### 22 — Unidades de almacenamiento (cierre)

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen dos sistemas de prefijos de almacenamiento (decimal: KB=1.000; binario: KiB=1.024), y confundirlos es la razón por la que un disco \"de 500 GB\" nunca muestra exactamente 500 en la computadora."

explicacion: |
  Es la idea central de todo el tema.
```
