# Geografía — Densidad de población (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Fórmula: `densidad = población /
> superficie`, habitualmente en habitantes por km².

---

### 1 — Qué es la densidad de población

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "basico"
  tags: ["densidad_poblacion", "vocabulario"]

enunciado: "¿Qué es la densidad de población?"
tipo: mc
opciones_explicitas:
  - "La cantidad de habitantes, en promedio, por cada unidad de superficie de un territorio"
  - "La cantidad total de habitantes de un país"
  - "El porcentaje de la población que vive en ciudades"
respuesta: "La cantidad de habitantes, en promedio, por cada unidad de superficie de un territorio"

explicacion: |
  Es un promedio que combina dos datos: cuánta gente hay, y cuánto
  espacio ocupa el territorio.
```

### 2 — Calcular la densidad

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "calculo"]

variables:
  poblacion: random(1, 50) * 1000000
  superficie: random(50000, 2000000)

respuesta: poblacion / superficie
tipo: input
tolerancia_abs: 0.5

enunciado: "Un país tiene {poblacion} habitantes y {superficie} km² de superficie. ¿Cuál es su densidad de población, en hab/km²?"

pasos:
  - "densidad = {poblacion} ÷ {superficie}"

explicacion: |
  Se divide la población total por la superficie total.
```

### 3 — Despejar la población

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "calculo"]

variables:
  superficie: random(50000, 2000000)
  densidad: random(5, 200)

respuesta: densidad * superficie
tipo: input
tolerancia_abs: 1

enunciado: "Un país tiene {superficie} km² de superficie y una densidad de {densidad} hab/km². ¿Cuál es su población total?"

explicacion: |
  Se despeja la población multiplicando la densidad por la superficie.
```

### 4 — Despejar la superficie

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "calculo"]

variables:
  poblacion: random(1, 50) * 1000000
  densidad: random(5, 200)

respuesta: poblacion / densidad
tipo: input
tolerancia_abs: 1

enunciado: "Un país tiene {poblacion} habitantes y una densidad de {densidad} hab/km². ¿Cuál es su superficie, en km²?"

explicacion: |
  Se despeja la superficie dividiendo la población por la densidad.
```

### 5 — Densidad alta no es lo mismo que población alta

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Densidad de población alta no es lo mismo que población total alta: son dos datos distintos."

explicacion: |
  Uno depende sólo de la cantidad de habitantes; el otro depende también
  de la superficie.
```

### 6 — Comparar densidad con misma población, distinta superficie

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "avanzado"
  tags: ["densidad_poblacion", "comparacion"]

variables:
  poblacion: random(5, 30) * 1000000
  superficie_a: random(50000, 200000)
  superficie_b: random(500000, 2000000)

respuesta: ((poblacion / superficie_a) > (poblacion / superficie_b))
tipo: vf

enunciado: "País A tiene {poblacion} habitantes en {superficie_a} km². País B tiene la misma población, {poblacion} habitantes, pero en {superficie_b} km². ¿El país A tiene mayor densidad que el país B?"

explicacion: |
  Con la misma población, el país de menor superficie tiene mayor
  densidad.
```

### 7 — Comparar densidad con misma superficie, distinta población

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "avanzado"
  tags: ["densidad_poblacion", "comparacion"]

variables:
  superficie: random(100000, 500000)
  poblacion_a: random(1, 10) * 1000000
  poblacion_b: random(11, 40) * 1000000

respuesta: ((poblacion_b / superficie) > (poblacion_a / superficie))
tipo: vf

enunciado: "País A tiene {poblacion_a} habitantes en {superficie} km². País B tiene {poblacion_b} habitantes en la misma superficie, {superficie} km². ¿El país B tiene mayor densidad que el país A?"

explicacion: |
  Con la misma superficie, el país de mayor población tiene mayor
  densidad.
```

### 8 — Población grande, densidad baja

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener una población total muy grande y, aun así, una densidad baja, si su superficie también es muy grande."

explicacion: |
  La densidad depende de la relación entre los dos datos, no de la
  población sola.
```

### 9 — Población chica, densidad alta

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener una población total relativamente chica y, aun así, una densidad alta, si su superficie es chica."

explicacion: |
  Es el caso contrario: superficie chica con población concentrada.
```

### 10 — La densidad es un promedio

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad de un país es un promedio: la población real casi nunca se reparte de forma pareja sobre todo el territorio."

explicacion: |
  Es la idea central para no malinterpretar lo que dice un número de
  densidad promedio.
```

### 11 — Densidad baja y ciudades densas al mismo tiempo

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "avanzado"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país puede tener una densidad promedio baja y, al mismo tiempo, tener ciudades entre las más densamente pobladas del mundo — los dos datos no se contradicen."

explicacion: |
  Describen escalas distintas: el promedio de todo el país, y la
  situación puntual de una ciudad dentro de él.
```

### 12 — Zonas urbanas vs. rurales

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "basico"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las zonas urbanas suelen tener una densidad de población mucho más alta que las zonas rurales o los territorios poco habitables (desiertos, montañas)."

explicacion: |
  Es la razón principal por la que el promedio de un país entero puede
  no representar bien a ninguna zona en particular.
```

### 13 — Calcular la densidad de una ciudad

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "problema"]

variables:
  poblacion_ciudad: random(500000, 5000000)
  superficie_ciudad: random(100, 800)

respuesta: poblacion_ciudad / superficie_ciudad
tipo: input
tolerancia_abs: 1

enunciado: "Una ciudad tiene {poblacion_ciudad} habitantes en {superficie_ciudad} km². ¿Cuál es su densidad de población?"

explicacion: |
  Las ciudades, por concentrar mucha población en poca superficie,
  suelen tener densidades mucho más altas que el promedio de un país.
```

### 14 — Calcular la densidad de un país grande y poco poblado

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "problema"]

variables:
  poblacion_pais: random(3, 15) * 1000000
  superficie_pais: random(1000000, 3000000)

respuesta: poblacion_pais / superficie_pais
tipo: input
tolerancia_abs: 0.1

enunciado: "Un país tiene {poblacion_pais} habitantes en {superficie_pais} km². ¿Cuál es su densidad de población?"

explicacion: |
  Con una superficie muy grande y una población moderada, la densidad
  promedio da un número bajo.
```

### 15 — Ordenar por densidad de menor a mayor

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "basico"
  tags: ["densidad_poblacion", "orden"]

tipo: ordenar
enunciado: "Ordená estos territorios de menor a mayor densidad de población."
opciones_explicitas:
  - "Zona rural despoblada: 2 hab/km²"
  - "Ciudad grande: 8.000 hab/km²"
  - "País de tamaño medio: 40 hab/km²"
respuesta_orden: ["Zona rural despoblada: 2 hab/km²", "País de tamaño medio: 40 hab/km²", "Ciudad grande: 8.000 hab/km²"]

explicacion: |
  Las ciudades concentran población en poca superficie; las zonas
  rurales, mucho menos.
```

### 16 — Verificar un cálculo de densidad (con error a veces)

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "verificacion"]

variables:
  poblacion: random(1, 50) * 1000000
  superficie: random(50000, 2000000)
  correcto: poblacion / superficie
  error: uno_de([0, 0, 0, 5, -5])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.5)
tipo: vf

enunciado: "¿Está bien calculado esto? Población de {poblacion} habitantes, superficie de {superficie} km², densidad informada: {redondear(mostrado, 2)} hab/km²."

explicacion: |
  Se vuelve a dividir población por superficie y se compara con el
  valor informado.
```

### 17 — Completar la superficie

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion"]

variables:
  poblacion: random(1, 50) * 1000000
  superficie: random(50000, 2000000)
  densidad: poblacion / superficie

tipo: completar
enunciado: "Un país tiene {poblacion} habitantes y una densidad de {redondear(densidad, 2)} hab/km². Completá: ___ (superficie en km²) = {poblacion} (población) ÷ {redondear(densidad, 2)} (densidad)."
respuestas_validas:
  - superficie

explicacion: |
  Se despeja la superficie dividiendo la población por la densidad.
```

### 18 — Unidad habitual de la densidad

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "basico"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad de población se expresa habitualmente en habitantes por kilómetro cuadrado (hab/km²)."

explicacion: |
  Es la unidad estándar más usada para comparar densidades entre
  distintos territorios.
```

### 19 — Hacen falta dos datos para calcular la densidad

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "basico"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para calcular la densidad de población de un territorio, hace falta conocer tanto su población como su superficie."

explicacion: |
  Con sólo uno de los dos datos no alcanza para calcular la densidad.
```

### 20 — Infraestructura según la densidad

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "intermedio"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una zona de alta densidad de población suele necesitar una lógica de infraestructura distinta (transporte público, vivienda en altura) que una zona de baja densidad."

explicacion: |
  Es una de las razones prácticas por las que la densidad importa para
  planificar servicios y ciudades.
```

### 21 — La densidad no dice nada sobre distribución interna

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "avanzado"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿La densidad promedio de un país alcanza, por sí sola, para saber cómo se reparte realmente la población dentro de ese país?"

explicacion: |
  No: sólo da un promedio. Para saber la distribución real hace falta
  mirar datos más detallados (por ciudad, por región), no sólo el
  promedio de todo el país.
```

### 22 — Densidad de población (cierre)

```
metadata:
  materia: "geografia"
  tema: "densidad_poblacion"
  nivel: "basico"
  tags: ["densidad_poblacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La densidad de población es población dividida superficie; es un promedio que puede convivir con una distribución real muy despareja, con ciudades muy densas y zonas rurales casi vacías dentro del mismo país."

explicacion: |
  Es la idea central de todo el tema.
```
