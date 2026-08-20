# Física — Presión atmosférica (cuestionario, 22 preguntas VBLang)

> Tema: `MET1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la presión atmosférica

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Qué es la presión atmosférica?"
tipo: mc
opciones_explicitas:
  - "El peso del aire que hay por encima de un punto, repartido sobre su área"
  - "La temperatura del aire en un punto dado"
  - "La cantidad de nubes que hay en el cielo"
respuesta: "El peso del aire que hay por encima de un punto, repartido sobre su área"

explicacion: |
  Es la misma idea general de presión (P=F/A) aplicada al peso de la
  columna de aire de la atmósfera.
```

### 2 — Fórmula de presión

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "La presión atmosférica se calcula con la misma fórmula general de presión, P = F/A."

explicacion: |
  El "F" es el peso de la columna de aire, y el "A" el área sobre la que
  se reparte.
```

### 3 — Valor de referencia a nivel del mar

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Aproximadamente cuánto vale la presión atmosférica a nivel del mar, en hectopascales (hPa)?"
tipo: mc
opciones_explicitas:
  - "1013 hPa"
  - "100 hPa"
  - "10000 hPa"
respuesta: "1013 hPa"

explicacion: |
  Esa es la presión de referencia de "1 atmósfera" (1 atm).
```

### 4 — Presión y altitud

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "altitud"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor altitud, la presión atmosférica disminuye, porque hay menos columna de aire por encima empujando hacia abajo."

explicacion: |
  Por eso cuesta más respirar en la cima de una montaña alta.
```

### 5 — Por qué se presuriza un avión

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

enunciado: "¿Por qué los aviones presurizan la cabina en vuelo?"
tipo: mc
opciones_explicitas:
  - "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"
  - "Porque a la altitud de crucero la presión externa es demasiado alta"
  - "Para que los pasajeros no sientan el frío"
respuesta: "Porque a la altitud de crucero la presión externa es demasiado baja para respirar sin ayuda"

explicacion: |
  A esa altura hay muy poca columna de aire por encima, la presión (y el
  oxígeno disponible) cae mucho.
```

### 6 — Aire caliente y densidad

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "temperatura"]

respuesta: verdadero
tipo: vf

enunciado: "El aire caliente es menos denso que el aire frío, porque sus moléculas están más separadas."

explicacion: |
  Por eso el aire caliente tiende a subir.
```

### 7 — Aire cálido y presión en superficie

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire cálido, que asciende y se aleja?"
tipo: mc
opciones_explicitas:
  - "Una zona de baja presión"
  - "Una zona de alta presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de baja presión"

explicacion: |
  Al subir y alejarse, el aire cálido deja una zona de menor presión
  detrás.
```

### 8 — Aire frío y presión en superficie

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "temperatura"]

enunciado: "¿Qué zona de presión en superficie tiende a generar el aire frío, más denso, que desciende y se acumula?"
tipo: mc
opciones_explicitas:
  - "Una zona de alta presión"
  - "Una zona de baja presión"
  - "No afecta a la presión en superficie"
respuesta: "Una zona de alta presión"

explicacion: |
  El aire frío es más denso, baja y se acumula, generando mayor presión.
```

### 9 — Qué es una isobara

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "isobaras"]

enunciado: "¿Qué es una isobara en un mapa del clima?"
tipo: mc
opciones_explicitas:
  - "Una línea que une puntos con la misma presión atmosférica"
  - "Una línea que une puntos con la misma temperatura"
  - "Una línea que marca el límite entre dos países"
respuesta: "Una línea que une puntos con la misma presión atmosférica"

explicacion: |
  Es análoga a las curvas de nivel de un mapa de relieve, pero para
  presión.
```

### 10 — Isobaras juntas: viento

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "isobaras"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando las isobaras de un mapa están muy juntas entre sí, eso indica vientos más fuertes."

explicacion: |
  Isobaras juntas significan un cambio de presión brusco en poco
  espacio, lo que genera vientos fuertes.
```

### 11 — Anticiclón

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de alta presión, con aire frío que desciende y suele traer cielo despejado?"
tipo: mc
opciones_explicitas:
  - "Anticiclón"
  - "Ciclón"
  - "Frente"
respuesta: "Anticiclón"

explicacion: |
  El aire que baja se comprime y se seca, dificultando que se formen
  nubes.
```

### 12 — Ciclón / depresión

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "vocabulario"]

enunciado: "¿Cómo se llama una zona de baja presión, con aire cálido y húmedo que asciende y suele traer nubosidad e inestabilidad?"
tipo: mc
opciones_explicitas:
  - "Ciclón (o depresión)"
  - "Anticiclón"
  - "Isobara"
respuesta: "Ciclón (o depresión)"

explicacion: |
  El aire que sube se enfría y puede condensar su humedad, generando
  nubes y lluvia.
```

### 13 — Dirección del viento

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "viento"]

respuesta: verdadero
tipo: vf

enunciado: "El viento siempre sopla desde la zona de alta presión hacia la zona de baja presión, buscando equilibrar la diferencia."

explicacion: |
  Es el mismo principio que iguala cualquier diferencia de presión.
```

### 14 — Calcular presión con P=F/A

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 1000)
  area: random(2, 10)

respuesta: fuerza / area
tipo: input
tolerancia_abs: 0.1

enunciado: "Una fuerza de {fuerza} N actúa sobre un área de {area} m². ¿Cuál es la presión resultante, en Pa?"

pasos:
  - "P = F/A = {fuerza}/{area}"

explicacion: |
  Se aplica la fórmula general de presión, P = F/A.
```

### 15 — Despejar la fuerza a partir de la presión

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  presion: random(50, 500)
  area: random(2, 8)

respuesta: presion * area
tipo: input
tolerancia_abs: 0.1

enunciado: "Sobre un área de {area} m² se ejerce una presión de {presion} Pa. ¿Cuál es la fuerza total, en N?"

pasos:
  - "F = P·A = {presion}·{area}"

explicacion: |
  Se despeja F de P = F/A, multiplicando ambos lados por A.
```

### 16 — Comparar presión a distinta altitud

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  altura_a: random(0, 1000)
  altura_b: random(2000, 5000)

respuesta: "el punto A"
tipo: mc
opciones_explicitas:
  - "el punto A"
  - "el punto B"
  - "tienen la misma presión"

enunciado: "El punto A está a {altura_a} m de altitud, y el punto B está a {altura_b} m de altitud. ¿En cuál de los dos la presión atmosférica es mayor?"

explicacion: |
  A menor altitud hay más columna de aire por encima, así que la
  presión es mayor.
```

### 17 — Relación con relieve, clima y biomas

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

respuesta: verdadero
tipo: vf

enunciado: "Muchas zonas desérticas del planeta coinciden con bandas de alta presión subtropical permanente, donde el aire que desciende se comprime y se seca."

explicacion: |
  La presión atmosférica es una pieza del mecanismo que explica por qué
  ciertas regiones tienen clima seco o húmedo.
```

### 18 — Zonas ecuatoriales

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "clima"]

enunciado: "¿Qué tipo de presión predomina en las zonas ecuatoriales, donde el aire cálido y húmedo asciende casi todo el año?"
tipo: mc
opciones_explicitas:
  - "Baja presión"
  - "Alta presión"
  - "Presión constante, igual que en los polos"
respuesta: "Baja presión"

explicacion: |
  El aire que asciende deja zonas de baja presión, asociadas a las
  fuertes lluvias tropicales.
```

### 19 — Completar: unidad de presión atmosférica

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "basico"
  tags: ["presion_atmosferica", "vocabulario"]

tipo: completar
respuestas_validas:
  - "hectopascales"
  - "hPa"

enunciado: "Los mapas del clima suelen expresar la presión atmosférica en ____ (unidad, o su abreviatura)."

explicacion: |
  Hectopascal (hPa) es la unidad más usada en meteorología para la
  presión.
```

### 20 — Ordenar de mayor a menor presión

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "intermedio"
  tags: ["presion_atmosferica", "altitud"]

variables:
  nivel_mar: 0
  cerro: 1500
  montana: 4000

tipo: ordenar
opciones_explicitas:
  - "nivel del mar"
  - "cerro (1500 m)"
  - "montaña (4000 m)"
respuesta_orden: ["nivel del mar", "cerro (1500 m)", "montaña (4000 m)"]
enunciado: "Ordená estos tres lugares de mayor a menor presión atmosférica."

explicacion: |
  A mayor altitud, menor presión: nivel del mar tiene la mayor presión,
  la montaña la menor.
```

### 21 — Verificar un cálculo de presión (con error a veces)

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "calculo"]

variables:
  fuerza: random(100, 500)
  area: random(2, 5)
  presion_correcta: fuerza / area
  error: uno_de([0, 0, 0, 5, -5])
  presion_mostrada: presion_correcta + error

respuesta: (abs(presion_mostrada - presion_correcta) < 0.01)
tipo: vf

enunciado: "Una fuerza de {fuerza} N sobre un área de {area} m² da, según un cálculo, una presión de {presion_mostrada} Pa. ¿Es correcto ese resultado?"

explicacion: |
  La presión correcta es P = F/A = {presion_correcta}.
```

### 22 — Presión atmosférica (cierre)

```
metadata:
  materia: "fisica"
  tema: "presion_atmosferica"
  nivel: "avanzado"
  tags: ["presion_atmosferica", "sintesis"]

enunciado: "¿Cuál de estas afirmaciones resume mejor la relación entre presión, altitud y temperatura?"
tipo: mc
opciones_explicitas:
  - "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"
  - "A mayor altitud la presión sube, y el aire cálido genera zonas de alta presión"
  - "La presión atmosférica no depende ni de la altitud ni de la temperatura"
respuesta: "A mayor altitud la presión baja, y el aire cálido (menos denso) genera zonas de baja presión al ascender"

explicacion: |
  Son las dos relaciones centrales del tema: presión vs. altitud, y
  presión vs. temperatura.
```
