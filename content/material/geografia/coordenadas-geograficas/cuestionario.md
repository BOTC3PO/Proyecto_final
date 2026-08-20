# Geografía — Coordenadas geográficas (cuestionario, 20 preguntas VBLang)

> Tema: `G4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la grilla del mapa

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["grilla"]

enunciado: "¿Qué forman los meridianos y paralelos dibujados sobre un mapa?"
tipo: mc
opciones_explicitas:
  - "Una grilla que permite ubicar cualquier punto con dos coordenadas"
  - "Las rutas de los barcos"
  - "Los límites entre países"
respuesta: "Una grilla que permite ubicar cualquier punto con dos coordenadas"

explicacion: |
  Meridianos (longitud) y paralelos (latitud) forman una grilla: la
  intersección de uno de cada tipo ubica un único punto.
```

### 2 — Meridianos

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["grilla"]

enunciado: "Los meridianos son líneas que van de..."
tipo: mc
opciones_explicitas:
  - "Polo a polo"
  - "Este a oeste, paralelas al ecuador"
  - "De un país a otro"
respuesta: "Polo a polo"

explicacion: |
  Los meridianos son semicírculos que unen el Polo Norte con el Polo
  Sur; todos los puntos de un mismo meridiano comparten longitud.
```

### 3 — Paralelos

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["grilla"]

enunciado: "Los paralelos son círculos..."
tipo: mc
opciones_explicitas:
  - "Paralelos al ecuador"
  - "Que unen los dos polos"
  - "Que sólo existen en el hemisferio norte"
respuesta: "Paralelos al ecuador"

explicacion: |
  Todos los puntos de un mismo paralelo comparten latitud.
```

### 4 — Orden de los datos en una coordenada

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["notacion"]

enunciado: "Una coordenada geográfica se escribe convencionalmente como..."
tipo: mc
opciones_explicitas:
  - "(latitud, longitud)"
  - "(longitud, latitud)"
  - "(huso, latitud)"
respuesta: "(latitud, longitud)"

explicacion: |
  Convención: primero latitud (norte/sur del ecuador), después
  longitud (este/oeste de Greenwich).
```

### 5 — Ubicar un punto en la grilla

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["lectura_de_mapa"]

variables:
  lat: random(10, 60)
  lon: random(10, 90)

enunciado: "Para ubicar el punto ({lat}° S, {lon}° O) en un mapa, ¿qué dos líneas de la grilla tenés que encontrar?"
tipo: mc
opciones_explicitas:
  - "El paralelo de {lat}° S y el meridiano de {lon}° O"
  - "Sólo el meridiano de {lon}° O"
  - "El ecuador y el ecuador"
respuesta: "El paralelo de {lat}° S y el meridiano de {lon}° O"

explicacion: |
  El punto está en la intersección del paralelo correspondiente a esa
  latitud y el meridiano correspondiente a esa longitud.
```

### 6 — Analogía con el plano cartesiano

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["analogia"]

enunciado: "¿Con qué sistema matemático se puede comparar la grilla de latitud/longitud?"
tipo: mc
opciones_explicitas:
  - "El plano cartesiano (ejes X e Y)"
  - "Una tabla de multiplicar"
  - "Un histograma"
respuesta: "El plano cartesiano (ejes X e Y)"

explicacion: |
  Igual que un punto en el plano se ubica con (x, y), un punto en la
  Tierra se ubica con (latitud, longitud) — la diferencia es que los
  "ejes" acá son círculos sobre una esfera, no rectas infinitas.
```

### 7 — Por qué hacen falta coordenadas

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["uso_practico"]

enunciado: "¿Por qué el medio del océano necesita coordenadas y no puede describirse con una dirección postal?"
tipo: mc
opciones_explicitas:
  - "Porque no hay calles ni nomenclatura en esa zona"
  - "Porque el océano no tiene latitud"
  - "Porque las coordenadas sólo sirven en tierra firme"
respuesta: "Porque no hay calles ni nomenclatura en esa zona"

explicacion: |
  Sin nombres de calle, la única forma inequívoca de decir "acá" es
  una coordenada.
```

### 8 — GPS

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["gps"]

enunciado: "¿Qué calcula un receptor GPS para mostrar tu posición en un mapa digital?"
tipo: mc
opciones_explicitas:
  - "Un par (o terna, con altitud) de coordenadas geográficas"
  - "El nombre de la calle más cercana, sin coordenadas"
  - "Sólo la distancia al ecuador"
respuesta: "Un par (o terna, con altitud) de coordenadas geográficas"

explicacion: |
  El GPS calcula latitud y longitud (y a veces altitud); el mapa
  digital sólo dibuja ese punto sobre la grilla que ya conoce.
```

### 9 — Fronteras marítimas

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["uso_practico"]

enunciado: "Los tratados internacionales que definen fronteras marítimas se expresan con..."
tipo: mc
opciones_explicitas:
  - "Coordenadas geográficas exactas"
  - "Descripciones del paisaje visible desde la costa"
  - "El nombre de la ciudad más cercana"
respuesta: "Coordenadas geográficas exactas"

explicacion: |
  En el mar no hay accidentes geográficos fijos que sirvan de límite
  visual, así que los tratados usan coordenadas exactas.
```

### 10 — Minutos y segundos

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["precision"]

enunciado: "Un grado de latitud o longitud puede partirse en unidades más chicas para mayor precisión, igual que una hora se parte en minutos. ¿Cuántos minutos tiene 1 grado?"
tipo: input
respuesta: 60

explicacion: |
  1° = 60′ (minutos de arco), y 1′ = 60″ (segundos de arco) — mismo
  esquema sexagesimal que horas/minutos/segundos.
```

### 11 — Segundos de arco

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["precision"]

enunciado: "¿Cuántos segundos de arco tiene 1 minuto de arco?"
tipo: input
respuesta: 60

explicacion: |
  1′ = 60″, igual que 1 minuto de tiempo tiene 60 segundos.
```

### 12 — Notación decimal vs. sexagesimal

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "avanzado"
  tags: ["precision"]

enunciado: "34°30′ expresado en notación decimal es..."
tipo: input
respuesta: 34.5
tolerancia_abs: 0.01

explicacion: |
  30′ es la mitad de 60′, es decir 0,5° — 34°30′ = 34,5°.
```

### 13 — Más decimales, más precisión

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["precision"]

enunciado: "¿Verdadero o falso? Cuantos más decimales tiene una coordenada expresada en notación decimal, más preciso es el punto que ubica."
tipo: vf
respuesta: verdadero

explicacion: |
  Cada decimal adicional reduce el margen de error del punto ubicado.
```

### 14 — Coordenada de Buenos Aires (hemisferio)

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["ejemplo_real"]

enunciado: "Buenos Aires está aproximadamente a 34° S, 58° O. ¿En qué hemisferios está?"
tipo: mc
opciones_explicitas:
  - "Sur y oeste"
  - "Norte y este"
  - "Sur y este"
respuesta: "Sur y oeste"

explicacion: |
  S indica sur del ecuador, O indica oeste de Greenwich.
```

### 15 — Qué representa la letra de hemisferio

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["notacion"]

enunciado: "En una coordenada como 40° N, la letra N indica..."
tipo: mc
opciones_explicitas:
  - "Que el punto está al norte del ecuador"
  - "Que el punto está en el hemisferio oeste"
  - "Que es de noche en ese lugar"
respuesta: "Que el punto está al norte del ecuador"

explicacion: |
  Las letras N/S acompañan la latitud (norte o sur del ecuador); E/O
  acompañan la longitud (este u oeste de Greenwich).
```

### 16 — Un punto, dos coordenadas, único lugar

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["unicidad"]

enunciado: "¿Verdadero o falso? Dos lugares distintos de la Tierra pueden tener exactamente la misma latitud Y la misma longitud."
tipo: vf
respuesta: falso

explicacion: |
  La combinación (latitud, longitud) identifica un único punto —
  si coinciden ambas, es el mismo lugar (salvo el caso límite de los
  polos, donde la longitud deja de distinguir puntos).
```

### 17 — Mismo paralelo, distinto lugar

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["unicidad"]

enunciado: "¿Verdadero o falso? Dos ciudades pueden compartir la misma latitud (estar en el mismo paralelo) y sin embargo estar en lugares muy distintos del planeta."
tipo: vf
respuesta: verdadero

explicacion: |
  Compartir latitud sólo dice que están sobre el mismo paralelo — la
  longitud es la que distingue dónde, a lo largo de ese paralelo,
  está cada una.
```

### 18 — Requisito previo: ángulos

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "basico"
  tags: ["prerrequisito"]

enunciado: "¿Qué tipo de magnitud son la latitud y la longitud?"
tipo: mc
opciones_explicitas:
  - "Ángulos medidos desde el centro de la Tierra"
  - "Distancias medidas en kilómetros"
  - "Alturas sobre el nivel del mar"
respuesta: "Ángulos medidos desde el centro de la Tierra"

explicacion: |
  Latitud y longitud son ángulos (grados de arco), no distancias — la
  distancia real que representa un grado varía según dónde se mida.
```

### 19 — Para qué sirve una imagen satelital con coordenadas

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "avanzado"
  tags: ["integracion"]

enunciado: "Un mapa digital que muestra tu posición GPS sobre una imagen satelital está combinando..."
tipo: mc
opciones_explicitas:
  - "La grilla de coordenadas con una capa visual de datos superpuesta"
  - "Sólo nombres de calles, sin coordenadas"
  - "Un dibujo hecho a mano sin sistema de referencia"
respuesta: "La grilla de coordenadas con una capa visual de datos superpuesta"

explicacion: |
  Un SIG (Sistema de Información Geográfica) es, en esencia,
  coordenadas con una capa de datos encima.
```

### 20 — Navegación aérea

```
metadata:
  materia: "geografia"
  tema: "coordenadas_geograficas"
  nivel: "intermedio"
  tags: ["uso_practico"]

enunciado: "¿Por qué la navegación aérea depende de coordenadas geográficas y no de nombres de lugares?"
tipo: mc
opciones_explicitas:
  - "Porque un avión en vuelo no está sobre ningún lugar con nombre visible"
  - "Porque los aviones no pueden usar mapas"
  - "Porque las coordenadas son más lindas de decir por radio"
respuesta: "Porque un avión en vuelo no está sobre ningún lugar con nombre visible"

explicacion: |
  En pleno vuelo (sobre el mar, a gran altura) no hay referencias
  visuales con nombre; la posición se define exclusivamente por
  coordenadas.
```
