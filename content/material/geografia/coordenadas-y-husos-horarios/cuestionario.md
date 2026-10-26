# Geografía — Coordenadas y husos horarios (cuestionario, 25 preguntas VBLang)

> Tema: `G1`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué mide la latitud

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Desde dónde se mide la latitud de un punto?"
tipo: mc
opciones_explicitas:
  - "Desde el ecuador, hacia el norte o el sur"
  - "Desde el meridiano de Greenwich, hacia el este o el oeste"
  - "Desde el Polo Norte, hacia cualquier dirección"
respuesta: "Desde el ecuador, hacia el norte o el sur"

explicacion: |
  La latitud es el ángulo medido desde el ecuador (0°) hasta el punto,
  hacia el norte o el sur, entre 0° y 90°.
```

### 2 — Qué mide la longitud

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas", "vocabulario"]

enunciado: "¿Desde dónde se mide la longitud de un punto?"
tipo: mc
opciones_explicitas:
  - "Desde el meridiano de Greenwich, hacia el este o el oeste"
  - "Desde el ecuador, hacia el norte o el sur"
  - "Desde el Polo Sur, hacia cualquier dirección"
respuesta: "Desde el meridiano de Greenwich, hacia el este o el oeste"

explicacion: |
  La longitud es el ángulo medido desde el meridiano de Greenwich
  (0°) hacia el este o el oeste, entre 0° y 180°.
```

### 3 — El ecuador es la latitud 0°

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "El ecuador es el paralelo de referencia, con latitud 0°."

explicacion: |
  Todas las latitudes se miden como distancia angular al ecuador.
```

### 4 — Greenwich es la longitud 0°

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas"]

respuesta: verdadero
tipo: vf

enunciado: "El meridiano de Greenwich es el meridiano de referencia, con longitud 0°."

explicacion: |
  Todas las longitudes se miden como distancia angular a Greenwich,
  hacia el este o hacia el oeste.
```

### 5 — Completar: rango de la latitud

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la latitud va desde 0° (ecuador) hasta ___° (en los polos)."
respuestas_validas:
  - 90

explicacion: |
  90° norte es el Polo Norte; 90° sur es el Polo Sur.
```

### 6 — Completar: rango de la longitud

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas", "completar"]

tipo: completar
enunciado: "Completá: la longitud va desde 0° (Greenwich) hasta ___° (este u oeste)."
respuestas_validas:
  - 180

explicacion: |
  180° es el meridiano opuesto a Greenwich, cerca de la Línea
  Internacional de Cambio de Fecha.
```

### 7 — Qué comparten los puntos de un mismo paralelo

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "intermedio"
  tags: ["coordenadas"]

enunciado: "Todos los puntos de un mismo paralelo comparten la misma..."
tipo: mc
opciones_explicitas:
  - "Latitud"
  - "Longitud"
  - "Huso horario"
respuesta: "Latitud"

explicacion: |
  Un paralelo es un círculo imaginario paralelo al ecuador: todo punto
  sobre él está a la misma distancia angular del ecuador.
```

### 8 — Qué comparten los puntos de un mismo meridiano

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "intermedio"
  tags: ["coordenadas"]

enunciado: "Todos los puntos de un mismo meridiano comparten la misma..."
tipo: mc
opciones_explicitas:
  - "Longitud"
  - "Latitud"
  - "Hora local exacta durante todo el año"
respuesta: "Longitud"

explicacion: |
  Un meridiano va de polo a polo: todo punto sobre él está a la misma
  distancia angular de Greenwich.
```

### 9 — Problema: de grados y minutos a decimal

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["coordenadas", "problema"]

variables:
  grados: random(10, 80)
  minutos: uno_de([0, 10, 15, 20, 30, 40, 45, 50])

respuesta: redondear(grados + minutos / 60, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Una latitud está expresada como {grados}° {minutos}′. Expresada en grados decimales (redondeando a 2 decimales), ¿cuánto es?"

pasos:
  - "decimal = grados + minutos/60 = {grados} + {minutos}/60"
  - "= {redondear(grados + minutos / 60, 2)}°"

explicacion: |
  Cada grado tiene 60 minutos de arco, igual que cada hora tiene 60
  minutos de tiempo.
```

### 10 — Cuántos husos horarios tiene la Tierra

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["husos"]

respuesta: 24
tipo: input

enunciado: "¿En cuántos husos horarios se divide la superficie terrestre?"

explicacion: |
  La Tierra gira 360° en 24 horas, y cada huso representa 1 hora.
```

### 11 — Cuántos grados de longitud tiene cada huso

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "intermedio"
  tags: ["husos", "problema"]

respuesta: 360 / 24
tipo: input

enunciado: "Si la Tierra (360°) se divide en 24 husos horarios iguales, ¿cuántos grados de longitud mide cada huso?"

pasos:
  - "360° ÷ 24 husos = {360 / 24}° por huso"

explicacion: |
  15° de longitud equivalen a 1 hora de diferencia horaria.
```

### 12 — Problema: diferencia horaria entre dos meridianos

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["husos", "problema"]

variables:
  lonA: uno_de([0, 15, 30, 45, 60, 75, 90, 105, 120])
  lonB: uno_de([0, 15, 30, 45, 60, 75, 90, 105, 120])

restricciones:
  - abs(lonA - lonB) > 0

respuesta: abs(lonA - lonB) / 15
tipo: input

enunciado: "Dos ciudades del mismo hemisferio están en los meridianos {lonA}° y {lonB}°. ¿Cuántas horas de diferencia hay entre sus husos horarios?"

pasos:
  - "diferencia de longitud = |{lonA} − {lonB}| = {abs(lonA - lonB)}°"
  - "horas de diferencia = {abs(lonA - lonB)} ÷ 15 = {abs(lonA - lonB) / 15}"

explicacion: |
  Cada 15° de diferencia de longitud equivalen a 1 hora, sin importar
  el hemisferio (siempre que ambos puntos estén del mismo lado).
```

### 13 — Hacia el este se suman horas

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "intermedio"
  tags: ["husos"]

respuesta: verdadero
tipo: vf

enunciado: "Moverse hacia el este (en dirección a Asia desde América) suma horas al huso horario; moverse hacia el oeste resta horas."

explicacion: |
  El Sol "sale antes" cuanto más al este se está, por eso los husos del
  este están más adelantados.
```

### 14 — Problema: hora local dado un huso

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["husos", "problema"]

variables:
  huso: uno_de([-3, -5, -8, 1, 2, 5, 8])
  hora_utc: random(0, 23)

restricciones:
  - hora_utc + huso >= 0
  - hora_utc + huso <= 23

respuesta: hora_utc + huso
tipo: input

enunciado: "Son las {hora_utc}:00 en el huso 0 (UTC/Greenwich). En una ciudad que está {huso} horas respecto de UTC (positivo = más adelantada hacia el este, negativo = más atrasada hacia el oeste), ¿qué hora es?"

pasos:
  - "hora local = hora UTC + huso = {hora_utc} + ({huso}) = {hora_utc + huso}"

explicacion: |
  El huso de una ciudad es simplemente cuántas horas hay que sumar (o
  restar) a la hora UTC para obtener su hora local.
```

### 15 — Qué representa el huso 0

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["husos"]

enunciado: "¿Qué huso horario es la referencia UTC (antes llamada GMT)?"
tipo: mc
opciones_explicitas:
  - "El huso 0, que contiene al meridiano de Greenwich"
  - "El huso que contiene al ecuador"
  - "El huso de la Línea Internacional de Cambio de Fecha"
respuesta: "El huso 0, que contiene al meridiano de Greenwich"

explicacion: |
  Todos los demás husos se definen como una cantidad de horas de
  diferencia respecto de este huso 0.
```

### 16 — La Línea de Cambio de Fecha está en el meridiano 180°, no en el 0°

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "intermedio"
  tags: ["husos"]

respuesta: falso
tipo: vf

enunciado: "La Línea Internacional de Cambio de Fecha está cerca del meridiano de Greenwich (longitud 0°)."

explicacion: |
  Está cerca del meridiano opuesto, 180°, en pleno océano Pacífico —
  ahí es donde "cierra" el círculo de husos horarios.
```

### 17 — Cruzar la Línea de Cambio de Fecha hacia el oeste

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["husos"]

enunciado: "Al cruzar la Línea Internacional de Cambio de Fecha viajando hacia el oeste, ¿qué pasa con la fecha del calendario?"
tipo: mc
opciones_explicitas:
  - "Se suma un día (se adelanta)"
  - "Se resta un día (se atrasa)"
  - "No cambia, sólo cambia la hora"
respuesta: "Se suma un día (se adelanta)"

explicacion: |
  Es la costura necesaria: los husos suman hacia el este y restan hacia
  el oeste, y algo tiene que "cerrar" la vuelta completa al planeta.
```

### 18 — Huso horario de Argentina

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "intermedio"
  tags: ["husos", "argentina"]

enunciado: "¿Qué huso horario usa Argentina, sin horario de verano desde 2009?"
tipo: mc
opciones_explicitas:
  - "UTC−3"
  - "UTC+3"
  - "UTC−5"
respuesta: "UTC−3"

explicacion: |
  Argentina está 3 horas detrás de Greenwich durante todo el año.
```

### 19 — El huso legal no siempre coincide con el geográfico

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["husos"]

respuesta: falso
tipo: vf

enunciado: "El huso horario que usa legalmente un país siempre coincide exactamente con el huso que le correspondería por su longitud geográfica."

explicacion: |
  Cada país decide su huso legal (a veces por conveniencia económica o
  política), y ese huso puede diferir del huso "natural" que le
  correspondería por longitud — no siempre coinciden.
```

### 20 — Completar: nombre del sistema de referencia horaria mundial

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["husos", "completar"]

tipo: completar
enunciado: "Completá: la referencia horaria mundial, correspondiente al huso 0, se llama tiempo ___ coordinado (sigla ___)."
respuestas_validas:
  - "universal"
  - "UTC"

explicacion: |
  UTC (Universal Time Coordinated/Coordinated Universal Time) reemplazó
  al antiguo GMT como estándar internacional.
```

### 21 — Ordenar: pasos para calcular la hora en otra ciudad

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["husos", "ordenar"]

enunciado: "Ordená los pasos para calcular qué hora es en otra ciudad, conociendo la hora UTC actual."
tipo: ordenar
opciones_explicitas:
  - "Ajustar la fecha si el resultado pasa de las 24:00 o baja de las 0:00"
  - "Averiguar el huso horario de la ciudad (horas de diferencia respecto de UTC)"
  - "Sumar (o restar, si el huso es negativo) esa diferencia a la hora UTC"
respuesta_orden: ["Averiguar el huso horario de la ciudad (horas de diferencia respecto de UTC)", "Sumar (o restar, si el huso es negativo) esa diferencia a la hora UTC", "Ajustar la fecha si el resultado pasa de las 24:00 o baja de las 0:00"]
explicacion: |
  El último paso es el que la Línea de Cambio de Fecha resuelve para
  las 24 zonas en conjunto.
```

### 22 — Coordenadas y GPS

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["coordenadas", "aplicacion"]

enunciado: "¿Qué par de datos usa un GPS para indicar la posición exacta de un punto en el planeta?"
tipo: mc
opciones_explicitas:
  - "Latitud y longitud"
  - "Huso horario y altitud"
  - "Nombre de la ciudad y provincia"
respuesta: "Latitud y longitud"

explicacion: |
  Con esos dos ángulos, cualquier punto de la superficie terrestre
  queda ubicado sin ambigüedad.
```

### 23 — Para qué sirven los husos horarios

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["husos", "aplicacion"]

enunciado: "¿Por qué hace falta dividir el planeta en husos horarios en vez de usar la misma hora en todo el mundo?"
tipo: mc
opciones_explicitas:
  - "Porque el Sol no está en la misma posición del cielo en todos los meridianos a la vez"
  - "Porque cada país necesita un idioma distinto para la hora"
  - "Porque la Tierra no gira, y por eso hace falta dividirla en zonas"
respuesta: "Porque el Sol no está en la misma posición del cielo en todos los meridianos a la vez"

explicacion: |
  Los husos existen para que la hora del reloj se mantenga cerca del
  mediodía solar real en cada lugar.
```

### 24 — Problema: diferencia horaria no exacta en husos completos

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "avanzado"
  tags: ["husos", "problema"]

variables:
  diferencia_grados: uno_de([10, 20, 40, 50, 70])

respuesta: redondear(diferencia_grados / 15, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Dos puntos están separados por {diferencia_grados}° de longitud (no un múltiplo exacto de 15°). ¿Cuántas horas de diferencia representa eso, redondeando a 2 decimales?"

pasos:
  - "horas = grados ÷ 15 = {diferencia_grados} ÷ 15 = {redondear(diferencia_grados / 15, 2)}"

explicacion: |
  En la práctica los países ajustan su huso legal a números enteros (o
  a veces medias/cuartos de hora), pero la relación grados↔horas de
  base es siempre esta división por 15.
```

### 25 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "geografia"
  tema: "coordenadas_y_husos_horarios"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender coordenadas y husos horarios juntos?"
tipo: mc
opciones_explicitas:
  - "Para ubicar cualquier punto del planeta sin ambigüedad, y saber qué hora es ahí en cualquier momento"
  - "Sólo sirve para leer mapas en papel"
  - "Sólo aplica a los países que están sobre el meridiano de Greenwich"
respuesta: "Para ubicar cualquier punto del planeta sin ambigüedad, y saber qué hora es ahí en cualquier momento"

explicacion: |
  La longitud, que ubica un punto en el espacio, es también el dato del
  que sale directo su huso horario — las dos ideas están conectadas por
  el mismo giro de la Tierra.
```
