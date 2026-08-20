# Historia Profunda — Movimiento aparente constelaciones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen del movimiento estelar

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "rotacion_terrestre"]

respuesta: "rotación terrestre"
tipo: completar
respuestas_validas:
  - "rotación terrestre"

enunciado: "El movimiento aparente de las estrellas durante la noche, donde parecen desplazarse de este a oeste, es causado en realidad por la ___ de la Tierra."

explicacion: |
  Aunque parece que el cielo gira alrededor de nosotros, es la Tierra la que gira sobre su propio eje de oeste a este, lo que genera la ilusión de movimiento estelar en sentido contrario.
```

### 2 — Dirección del movimiento aparente

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["observacion", "astronomia"]

variables:
  dir_estrellas: uno_de(["Este-Oeste", "Oeste-Este"])
  sentido_estrellas: uno_de(["Este-Oeste", "Este-Oeste"])

respuesta: dir_estrellas
tipo: mc
opciones_explicitas: ["Este-Oeste", "Oeste-Este", "Norte-Sur", "Sur-Norte"]

enunciado: "Debido a la rotación terrestre, ¿en qué dirección aparente vemos que se desplazan las estrellas durante la noche?"

explicacion: |
  Como la Tierra rota hacia el Este, los objetos celestes parecen moverse hacia el Oeste.
```

### 3 — ¿Qué es lo que realmente se mueve?

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["geocentrismo", "heliocentrismo"]

respuesta: falso
tipo: vf

enunciado: "¿Es el movimiento de las constelaciones causado por el desplazamiento físico de las estrellas alrededor de la Tierra?"

explicacion: |
  Falso. Las estrellas tienen sus propios movimientos propios (muy lentos), pero el movimiento diario que vemos es un efecto óptico de nuestra rotación.
```

### 4 — El eje de rotación y el polo celeste

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["eje_terrestre", "estrellas_fijas"]

variables:
  punto_fijo: uno_de(["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"])
  nombre_fijo: uno_de(["Polo Norte Celeste", "Polo Sur Celeste"])

respuesta: punto_fijo
tipo: mc
opciones_explicitas: ["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"]

enunciado: "En el hemisferio norte, las estrellas parecen girar alrededor de un punto fijo en el cielo llamado ___."

explicacion: |
  El eje de rotación de la Tierra apunta hacia las estrellas que parecen estar en el centro del movimiento circular, como la Estrella Polar.
```

### 5 — Secuencia de observación astronómica

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["observacion", "secuencia"]

respuesta_orden: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]
tipo: ordenar
opciones_explicitas: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]

enunciado: "Ordena el ciclo de movimiento aparente de una estrella desde que sale hasta que se pone:"

pasos:
  - "La estrella aparece en el horizonte."
  - "La estrella alcanza su punto más alto."
  - "La estrella desaparece bajo el horizonte."

explicacion: |
  Debido a la rotación de la Tierra, el ciclo sigue siempre este orden: sale por el este, cruza el cielo (meridiano) y se pone por el oeste.
```

### 6 — El motor del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "tierra", "sol"]

respuesta: "traslación"
tipo: completar
respuestas_validas:
  - "traslación"
  - "traslación de la Tierra"

enunciado: "El cambio en las constelaciones visibles a lo largo de los meses ocurre debido al movimiento de ___ de la Tierra alrededor del Sol."

explicacion: |
  La Tierra se desplaza en su órbita alrededor del Sol. Esto hace que, según nuestra posición en la órbita, la parte del cielo que queda en la oscuridad (noche) cambie, permitiéndonos ver diferentes estrellas.
```

### 7 — Observación estacional

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["estaciones", "cielo_nocturno"]

variables:
  escenario: uno_de([["Orión", "invierno"], ["Escorpio", "verano"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["invierno", "verano", "primavera", "otoño"]

enunciado: "Si en una fecha determinada observamos con claridad la constelación de {escenario[0]}, esto indica que estamos en la estación de {escenario[1]}."

explicacion: |
  Las constelaciones estacionales dependen de la posición de la Tierra respecto al Sol. Por ejemplo, la constelación de Orión es típica del cielo de invierno en el hemisferio norte.
```

### 8 — La perspectiva terrestre

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["perspectiva", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas:
  - "Sol"
  - "Sol"

enunciado: "Las constelaciones que vemos en el cielo nocturno cambian porque, al movernos en nuestra órbita, el ___ queda situado entre la Tierra y las estrellas que antes veíamos, ocultándolas durante la noche."

explicacion: |
  Durante el día, el Sol "tapa" la luz de las estrellas que se encuentran en la misma dirección. Al cambiar nuestra posición orbital, las estrellas que antes eran visibles de noche ahora están en la dirección del Sol.
```

### 9 — Secuencia de observación

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["orden", "ciclo_anual"]

respuesta_orden: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]
tipo: ordenar
opciones_explicitas: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]

enunciado: "Ordena la secuencia lógica de causas que explica por qué vemos diferentes estrellas cada mes:"

pasos:
  - "La Tierra tiene un eje de rotación."
  - "La Tierra realiza un movimiento de traslación alrededor del Sol."
  - "La perspectiva de las estrellas cambia, mostrando nuevas constelaciones."

explicacion: |
  El ciclo es una consecuencia directa del movimiento orbital de la Tierra alrededor del Sol.
```

### 10 — Verdadero o Falso

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es el movimiento de rotación (sobre su propio eje) la causa principal por la que las constelaciones cambian de una estación a otra?"

explicacion: |
  Falso. La rotación causa el ciclo día/noche, pero es la traslación la que causa el cambio de las constelaciones visibles a lo largo de los meses.
```

### 11 — La Estrella Polar

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "basico"
  tags: ["astronomia", "orientacion"]

respuesta: "eje de rotación"
tipo: completar
respuestas_validas:
  - "eje de rotación"

enunciado: "La estrella Polaris parece permanecer casi fija en el cielo debido a que se encuentra alineada con el ___ de la Tierra."

explicacion: |
  Debido a que la Tierra gira alrededor de su eje, las estrellas parecen moverse en círculos. Como Polaris está casi sobre el eje, su movimiento aparente es mínimo, manteniéndola como punto de referencia constante.
```

### 12 — Utilidad de Polaris

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "basico"
  tags: ["orientacion", "navegacion"]

opciones_explicitas: ["Determinar la hora exacta", "Orientarse en el hemisferio norte", "Predecir eclipses lunares", "Calcular la distancia a la Luna"]

respuesta: "Orientarse en el hemisferio norte"
tipo: mc

enunciado: "¿Cuál es la principal utilidad histórica de la estrella Polar para los navegantes?"

explicacion: |
  Al estar situada cerca del polo norte celeste, su posición permite identificar rápidamente el norte geográfico, siendo vital para la navegación en el hemisferio norte.
```

### 13 — Movimiento de las estrellas

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "intermedio"
  tags: ["movimiento_aparente", "rotacion"]

variables:
  respuesta_correcta: "se mueven en arcos circulares"

tipo: mc
opciones_explicitas: ["se mueven en líneas rectas", "se mueven en arcos circulares"]
respuesta: respuesta_correcta

enunciado: "Debido a la rotación terrestre, las estrellas que no son Polaris parecen moverse en el cielo siguiendo un patrón de ___."

explicacion: |
  La rotación de la Tierra sobre su eje provoca que las estrellas tracen trayectorias curvas o arcos en la bóveda celeste durante la noche.
```

### 14 — El eje terrestre

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "intermedio"
  tags: ["geometria_celeste"]

respuesta: "norte"
tipo: completar
respuestas_validas:
  - "norte"

enunciado: "Si observamos el cielo nocturno en el hemisferio norte, la estrella que marca el punto cardinal ___ es la Polaris."

explicacion: |
  Polaris es la estrella que indica la dirección del norte celeste, sirviendo como brújula natural.
```

### 15 — Secuencia de observación

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "avanzado"
  tags: ["observacion", "secuencia"]

opciones_explicitas: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]

respuesta_orden: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]
tipo: ordenar

enunciado: "Un navegante antiguo sigue este proceso para orientarse usando las estrellas. Ordena los pasos correctamente:"

explicacion: |
  Para encontrar el norte de forma fiable, primero se busca una constelación conocida (como la Osa Mayor), luego se localiza la estrella guía (Polaris) y finalmente se establece el punto cardinal.
```

### 16 — ¿Qué es una constelación?

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "patrón aparente"
tipo: completar
respuestas_validas:
  - "patrón aparente"

enunciado: "Una constelación no es un grupo de estrellas unidas físicamente, sino un ___ formado por estrellas que parecen estar juntas desde nuestra perspectiva."

explicacion: |
  Las estrellas de una constelación pueden estar a cientos o miles de años luz de distancia unas de otras; solo parecen estar cerca debido a nuestra perspectiva desde la Tierra.
```

### 17 — Relación de distancia entre estrellas

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

### 18 — El efecto de la perspectiva

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["perspectiva", "geometria_espacial"]

tipo: mc
enunciado: "Las estrellas de una constelación suelen estar a distancias radicalmente distintas de la Tierra, algunas mucho más cerca que otras. Sin embargo, las vemos formando una figura plana en el cielo. ¿Cuál es la explicación de este efecto?"
opciones_explicitas:
  - "La perspectiva visual proyecta estrellas a distancias muy distintas sobre un mismo plano aparente"
  - "Las estrellas de una constelación están realmente cerca unas de otras en el espacio"
  - "Todas las estrellas se encuentran exactamente a la misma distancia de la Tierra"
  - "Las constelaciones son figuras físicas dibujadas en el espacio interestelar"
respuesta: "La perspectiva visual proyecta estrellas a distancias muy distintas sobre un mismo plano aparente"

explicacion: |
  Lo que vemos es una proyección: la línea de visión aplana la profundidad real del espacio, así que estrellas separadas por años luz de distancia entre sí pueden parecer vecinas cuando en realidad no lo están.
```

### 19 — Componentes de una constelación

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "patrones"]

respuesta: "no están relacionadas físicamente entre sí"
tipo: completar
respuestas_validas:
  - "no están relacionadas físicamente entre sí"

enunciado: "A diferencia de un sistema estelar como el Sol y sus planetas, las estrellas que componen una constelación ___."

explicacion: |
  La agrupación es una ilusión óptica causada por la línea de visión. Físicamente, son objetos independientes que navegan por el espacio en direcciones distintas.
```

### 20 — Orden de conceptos astronómicos

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["orden_logico", "perspectiva"]

opciones_explicitas: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]

respuesta_orden: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]
tipo: ordenar

enunciado: "Ordena los conceptos según el proceso que explica la creación de una constelación (desde el origen físico hasta la percepción humana):"

explicacion: |
  Primero la luz viaja desde la estrella (1), la estrella tiene una distancia real (2), esa luz llega con una posición específica (3) y el ojo humano percibe el patrón (4).
```

### 21 — Estrellas de la Primavera

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

variables:
  datos: [["Orión", "Leo"], ["Sirio", "Tauro"], ["Spica", "Cáncer"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Leo", "Tauro", "Cáncer", "Orión"]

enunciado: "Durante la primavera en el hemisferio norte, la constelación que se encuentra en su punto más alto en el cielo es {datos[idx][0]}."

explicacion: |
  Debido al movimiento de traslación de la Tierra, diferentes constelaciones son visibles en diferentes épocas del año. En primavera, la constelación de {datos[idx][0]} es prominente.
```

### 22 — El Zodiaco y las Estaciones

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["zodiaco", "estaciones"]

variables:
  datos: [["verano", "Escorpio"], ["invierno", "Géminis"], ["otoño", "Libra"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Escorpio"
  - "Géminis"
  - "Libra"

enunciado: "Si estamos en la estación de {datos[idx][0]}, la constelación del zodiaco que es más visible hacia el mediodía es ___."

explicacion: |
  La posición del Sol en el zodiaco determina qué constelaciones son visibles durante el día y cuáles durante la noche en una estación específica.
```

### 23 — Identificación de Estrellas

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "noche"]

variables:
  estrellas: [["Sirio", "Canis Mayor"], ["Betelgeuse", "Orión"], ["Arcturus", "Boote"]]
  idx: uno_de([0, 1, 2])

respuesta: estrellas[idx][1]
tipo: mc
opciones_explicitas: ["Canis Mayor", "Orión", "Boote"]

enunciado: "La estrella {estrellas[idx][0]} es la estrella principal de la constelación de ___."

explicacion: |
  {estrellas[idx][0]} es una de las estrellas más brillantes y es el componente central de la constelación de {estrellas[idx][1]}.
```

### 24 — Secuencia de Constelaciones

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["secuencia", "ecliptic"]

variables:
  grupos: [["Aries", "Tauro", "Géminis"], ["Cáncer", "Leo", "Virgo"], ["Libra", "Escorpio", "Sagitario"]]
  grupo_seleccionado: uno_de(grupos)

respuesta_orden: grupo_seleccionado
tipo: ordenar
opciones_explicitas: grupo_seleccionado

enunciado: "Ordene las siguientes constelaciones según su orden de aparición en el zodíaco (eclíptica) para el grupo seleccionado:"

explicacion: |
  El orden de las constelaciones zodiacales sigue la trayectoria aparente del Sol a través del cielo.
```

### 25 — El Sol y la Constelación

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["sol", "ecliptic"]

variables:
  par: [["Junio", "Géminis"], ["Diciembre", "Sagitario"], ["Septiembre", "Virgo"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si el Sol se encuentra en la constelación de {par[idx][0]}, la constelación opuesta en el cielo nocturno será ___."

explicacion: |
  Cuando el Sol está en una constelación, esa constelación es invisible de noche. La constelación opuesta es la que se observa en su punto más alto durante la medianoche.
```
