### 1 — ¿Qué es una constelación?
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "patrón aparente"
tipo: completar
respuestas_validas: ["patrón aparente"]

enunciado: "Una constelación no es un grupo de estrellas unidas físicamente, sino un ___ formado por estrellas que parecen estar juntas desde nuestra perspectiva."

explicacion: |
  Las estrellas de una constelación pueden estar a cientos o miles de años luz de distancia unas de otras; solo parecen estar cerca debido a nuestra perspectiva desde la Tierra.
```

### 2 — Relación de distancia entre estrellas
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["distancia", "perspectiva"]

opciones_explicitas: ["Están físicamente unidas por la gravedad", "Están a distancias muy distintas de la Tierra", "Tienen la misma edad y composición", "Se mueven siempre en la misma dirección"]

respuesta: "Están a distancias muy distintas de la Tierra"
tipo: mc

enunciado: "Sobre la distancia real de las estrellas que forman una constelación, es correcto afirmar que:"

explicacion: |
  Aunque en el cielo nocturno parezcan formar un dibujo coherente, la mayoría de las veces las estrellas de una constelación no tienen ninguna relación física de distancia entre sí.
```

### 3 — El efecto de la perspectiva
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["perspectiva", "geometria_espacial"]

variables:
  idx: uno_de([0, 1])

datos:
  - ["Desde la Tierra, las estrellas parecen formar un dibujo", "La perspectiva visual crea la ilusión de proximidad"]
  - ["Las estrellas están en un plano bidimensional", "La profundidad espacial es engañosa para el ojo humano"]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Desde la Tierra, las estrellas parecen formar un dibujo", "La perspectiva visual crea la ilusión de proximidad", "Las estrellas están en un plano bidimensional", "La profundidad espacial es engañosa para el ojo humano"]

enunciado: "Si observamos una constelación, el fenómeno que explica por qué vemos estrellas que están a miles de años luz como si estuvieran juntas es: {datos[idx][0]}"

explicacion: |
  {datos[idx][1]}
```

### 4 — Componentes de una constelación
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "patrones"]

respuesta: "no están relacionadas físicamente entre sí"
tipo: completar
respuestas_validas: ["no están relacionadas físicamente entre sí"]

enunciado: "A diferencia de un sistema estelar como el Sol y sus planetas, las estrellas que componen una constelación ___."

explicacion: |
  La agrupación es una ilusión óptica causada por la línea de visión. Físicamente, son objetos independientes que navegan por el espacio en direcciones distintas.
```

### 5 — Orden de conceptos astronómicos
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["orden_logico", "perspectiva"]

opciones_explicitas: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]

respuesta: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]
tipo: ordenar

enunciado: "Ordena los conceptos según el proceso que explica la creación de una constelación (desde el origen físico hasta la percepción humana):"

explicacion: |
  Primero la luz viaja desde la estrella (1), la estrella tiene una distancia real (2), esa luz llega con una posición específica (3) y el ojo humano percibe el patrón (4).
```