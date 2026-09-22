# Examen jefe — [PENDIENTE #796]

> Logro #796. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **119 preguntas totales** en 5/5 secciones.

---

## Sección: america-anglosajona (25 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["definicion", "colonizacion"]

variables:
  regiones: uno_de(["Canada y Estados Unidos", "Mexico y Centroamerica", "El Caribe Francés", "Sudamerica"])

respuesta: "Canada y Estados Unidos"
tipo: mc
opciones_explicitas: ["Canada y Estados Unidos", "Mexico y Centroamerica", "El Caribe Francés", "Sudamerica"]

enunciado: "¿Qué países conforman el núcleo principal de América Anglosajona?"

explicacion: |
  América Anglosajona se refiere fundamentalmente a los territorios del norte del continente americano colonizados por británicos, siendo Canadá y Estados Unidos sus componentes principales.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["historia", "colonizacion"]

variables:
  siglo: random(16, 18)

respuesta: "17"
tipo: input

enunciado: "El poblamiento sistemático comenzó en el siglo {siglo} con la fundación de las Trece Colonias en la costa este."

explicacion: |
  La primera fase del poblamiento significativo ocurrió en el siglo XVII, estableciendo las bases culturales y políticas anglosajonas en la costa este.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["motivacion", "religion"]

variables:
  motivo: uno_de(["libertad religiosa", "extracción de oro", "comercio de especias", "conquista militar"])

respuesta: "libertad religiosa"
tipo: mc
opciones_explicitas: ["libertad religiosa", "extracción de oro", "comercio de especias", "conquista militar"]

enunciado: "¿Cuál fue un motivo clave para la llegada de los primeros colonos protestantes al norte?"

explicacion: |
  Muchos de los primeros colonos buscaban libertad religiosa y oportunidades económicas, alejándose de las persecuciones en Europa.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["economia", "comparacion"]

variables:
  modelo_latam: uno_de(["extraccion de recursos", "agricultura de subsistencia", "industria pesada"])
  modelo_anglo: uno_de(["comunidades permanentes", "encomiendas", "mita"])

respuesta: "comunidades permanentes"
tipo: mc
opciones_explicitas: ["comunidades permanentes", "extraccion de recursos", "encomiendas", "mita"]

enunciado: "A diferencia de la extracción rápida en el sur, el norte se caracterizó por la instalación de:"

explicacion: |
  El proceso en el norte fue más gradual y masivo, ligado a la instalación de comunidades permanentes, definiendo estructuras económicas distintas.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["demografia", "inmigracion"]

variables:
  origen: uno_de(["Irlanda y Alemania", "China y Japón", "Brasil y Argentina", "Rusia y Polonia"])

respuesta: "Irlanda y Alemania"
tipo: mc
opciones_explicitas: ["Irlanda y Alemania", "China y Japón", "Brasil y Argentina", "Rusia y Polonia"]

enunciado: "Entre los siglos XVIII y XIX, la inmigración masiva a EE.UU. provino principalmente de:"

explicacion: |
  Millones de personas de Irlanda, Alemania e Italia llegaron durante este periodo, transformando la demografía del país.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["expansion", "destino manifiesto"]

variables:
  concepto: "Destino Manifiesto"

respuesta: "Destino Manifiesto"
tipo: completar
respuestas_validas:
  - "Destino Manifiesto"
  - "destino manifiesto"

enunciado: "La expansión hacia el oeste de EE.UU. se justificó ideológicamente mediante el concepto de {concepto}."

explicacion: |
  El "Destino Manifiesto" fue la creencia de que los estadounidenses tenían el derecho divino y moral de expandirse por todo el continente.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["canada", "cultura"]

variables:
  provincia: "Quebec"

respuesta: "Quebec"
tipo: completar
respuestas_validas:
  - "Quebec"
  - "québec"

enunciado: "En Canadá, la fuerte influencia francesa se concentra principalmente en la provincia de {provincia}."

explicacion: |
  Quebec mantiene una identidad cultural y lingüística francesa distintiva dentro de la federación canadiense.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["dinamica", "proceso"]

variables:
  caracteristica: uno_de(["gradual", "rápida", "violenta", "instantánea"])

respuesta: "gradual"
tipo: mc
opciones_explicitas: ["gradual", "rápida", "violenta", "instantánea"]

enunciado: "El poblamiento de América Anglosajona se describe como un proceso:"

explicacion: |
  A diferencia del sur, el norte tuvo un proceso más gradual, masivo y ligado a la instalación de comunidades.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["ubicacion", "colonias"]

variables:
  region: "costa este"

respuesta: "costa este"
tipo: completar
respuestas_validas:
  - "costa este"
  - "costa oriental"
  - "este"

enunciado: "Las Trece Colonias se fundaron inicialmente en la {region} de lo que hoy es Estados Unidos."

explicacion: |
  La colonización británica comenzó en la franja costera atlántica, extendiéndose luego hacia el interior.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["economia", "modelo"]

variables:
  modelo: "comunidades permanentes"

respuesta: "comunidades permanentes"
tipo: completar
respuestas_validas:
  - "comunidades permanentes"
  - "poblamiento permanente"

enunciado: "El modelo de América Anglosajona se basó en la instalación de {modelo}, no solo en la extracción."

explicacion: |
  La diferencia clave radica en la intención de establecer sociedades estables y duraderas.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["origen", "britanico"]

variables:
  origen: "britanicos"

respuesta: "britanicos"
tipo: completar
respuestas_validas:
  - "britanicos"
  - "británicos"
  - "ingleses"

enunciado: "Los territorios fueron colonizados principalmente por {origen} y otros grupos del norte de Europa."

explicacion: |
  La herencia británica es el pilar definitorio de la región anglosajona.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["infraestructura", "canada"]

variables:
  medio: "ferrocarriles"

respuesta: "ferrocarriles"
tipo: completar
respuestas_validas:
  - "ferrocarriles"
  - "trenes"

enunciado: "La expansión hacia el oeste de Canadá fue impulsada por políticas gubernamentales y la construcción de {medio}."

explicacion: |
  El ferrocarril fue vital para conectar las provincias y poblar las llanuras occidentales.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["inmigracion", "diversidad"]

variables:
  origen: uno_de(["Asia y América del Sur", "África y Oceanía", "Europa del Este", "Norte de África"])

respuesta: "Asia y América del Sur"
tipo: mc
opciones_explicitas: ["Asia y América del Sur", "África y Oceanía", "Europa del Este", "Norte de África"]

enunciado: "Posteriormente, la inmigración a EE.UU. incluyó grupos provenientes de:"

explicacion: |
  Aunque Europa fue la fuente principal inicialmente, flujos posteriores vinieron de Asia y América del Sur.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["politica", "instituciones"]

variables:
  modelo: "británico"

respuesta: "británico"
tipo: completar
respuestas_validas:
  - "británico"
  - "britanico"
  - "british"

enunciado: "Las instituciones políticas de la región se inspiraron en el modelo {modelo}."

explicacion: |
  El legado institucional británico influyó en el sistema legal y político de EE.UU. y Canadá.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["demografia", "crecimiento"]

variables:
  tipo_crecimiento: uno_de(["exponencial", "lineal", "estancado", "negativo"])

respuesta: "exponencial"
tipo: mc
opciones_explicitas: ["exponencial", "lineal", "estancado", "negativo"]

enunciado: "Tras la independencia, la población de EE.UU. creció de forma:"

explicacion: |
  El crecimiento fue exponencial debido a la alta tasa de natalidad y la inmigración masiva.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["religion", "protestante"]

variables:
  religion: "protestantes"

respuesta: "protestantes"
tipo: completar
respuestas_validas:
  - "protestantes"
  - "protestante"

enunciado: "Los primeros colonos de las Trece Colonias eran en su mayoría {religion} del norte de Europa."

explicacion: |
  El protestantismo fue un elemento central de la identidad cultural y religiosa de los colonizadores.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["fronteras", "herencia"]

variables:
  influencia: "poblamiento"

respuesta: "poblamiento"
tipo: completar
respuestas_validas:
  - "poblamiento"
  - "poblacion"

enunciado: "Las dinámicas de {influencia} definieron las fronteras políticas actuales de la región."

explicacion: |
  La forma en que se ocupó el territorio determinó los límites estatales y nacionales.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["economia", "actualidad"]

variables:
  pais: uno_de(["EE.UU.", "Canadá", "Reino Unido", "Australia"])

respuesta: "EE.UU."
tipo: mc
opciones_explicitas: ["EE.UU.", "Canadá", "Reino Unido", "Australia"]

enunciado: "Comprender el poblamiento histórico es clave para entender la potencia económica actual de:"

explicacion: |
  Estados Unidos es la principal potencia económica derivada de este proceso histórico.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["cronologia", "inmigracion"]

variables:
  periodo: "siglos XVIII y XIX"

respuesta: "siglos XVIII y XIX"
tipo: completar
respuestas_validas:
  - "siglos XVIII y XIX"
  - "siglo 18 y 19"
  - "siglos 18 y 19"

enunciado: "El verdadero cambio demográfico ocurrió entre los {periodo}."

explicacion: |
  Este periodo coincide con la industrialización y la necesidad de mano de obra en el norte.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["comparacion", "violencia"]

variables:
  caracteristica_sur: "rápida y violenta"
  caracteristica_norte: "gradual"

respuesta: "gradual"
tipo: completar
respuestas_validas:
  - "gradual"
  - "lenta"

enunciado: "Mientras el sur tuvo una colonización rápida y violenta, el norte fue más {caracteristica_norte}."

explicacion: |
  La diferencia en la intensidad y velocidad del poblamiento marcó la estructura social posterior.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "basico"
  tags: ["colonias", "britanico"]

variables:
  origen: "británica"

respuesta: "británica"
tipo: completar
respuestas_validas:
  - "británica"
  - "britanica"
  - "inglesa"

enunciado: "Las Trece Colonias fueron fundadas durante la etapa de colonización {origen}."

explicacion: |
  Son el origen directo del núcleo anglosajón en el continente.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "avanzado"
  tags: ["geopolitica", "herencia"]

variables:
  aspecto: "estructura económica"

respuesta: "estructura económica"
tipo: completar
respuestas_validas:
  - "estructura económica"
  - "estructura economica"
  - "dinámica económica"

enunciado: "El poblamiento definió la {aspecto}, la distribución de la población y las relaciones internacionales."

explicacion: |
  La base económica establecida durante la colonización perdura en las relaciones globales actuales.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["proceso", "continuidad"]

variables:
  naturaleza: "largo"

respuesta: "largo"
tipo: completar
respuestas_validas:
  - "largo"
  - "prolongado"

enunciado: "El poblamiento de América Anglosajona no fue un evento único, sino un proceso {naturaleza}."

explicacion: |
  Se desarrolló a lo largo de varios siglos, con etapas claras de expansión e inmigración.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["perspectiva", "colonial"]

variables:
  concepto: "espacio vacío"

respuesta: "espacio vacío"
tipo: completar
respuestas_validas:
  - "espacio vacío"
  - "espacio vacio"
  - "terra nullius"

enunciado: "Desde la perspectiva europea, se entendió el territorio como un {concepto} a ser llenado."

explicacion: |
  Esta visión justificó la ocupación y la marginalización de los pueblos indígenas.
```

```
metadata:
  materia: "Geografía"
  tema: "america_anglosajona"
  nivel: "intermedio"
  tags: ["canada", "expansion"]

variables:
  motor: "ferrocarriles"

respuesta: "ferrocarriles"
tipo: completar
respuestas_validas:
  - "ferrocarriles"
  - "trenes"

enunciado: "La expansión canadiense hacia el oeste fue impulsada por políticas gubernamentales y {motor}."

explicacion: |
  El ferrocarril fue la herramienta clave para integrar el vasto territorio canadiense.
```

## Sección: coordenadas-y-husos-horarios (25 preguntas)

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

## Sección: densidad-poblacion (22 preguntas)

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

## Sección: escala-de-mapa (22 preguntas)

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

enunciado: "¿Qué es la escala de un mapa?"
tipo: mc
opciones_explicitas:
  - "La razón entre una distancia medida en el mapa y la distancia real que representa"
  - "El tamaño físico del papel donde está impreso el mapa"
  - "La cantidad de colores que usa el mapa"
respuesta: "La razón entre una distancia medida en el mapa y la distancia real que representa"

explicacion: |
  Dice exactamente cuánto se redujo la realidad para representarla en
  el mapa.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una escala de 1:100.000 significa que 1 unidad de medida en el mapa equivale a 100.000 de esas mismas unidades en la realidad."

explicacion: |
  Si la unidad es el centímetro, 1 cm en el mapa representa 100.000 cm
  reales (1 km).
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000, 500000])
  distancia_mapa_cm: random(1, 20)

respuesta: (distancia_mapa_cm * escala) / 100000
tipo: input
tolerancia_abs: 0.05

enunciado: "En un mapa a escala 1:{escala}, dos ciudades están a {distancia_mapa_cm} cm de distancia. ¿Cuál es la distancia real, en km?"

pasos:
  - "Distancia real en cm: {distancia_mapa_cm} × {escala} = {distancia_mapa_cm * escala}"
  - "En km: {distancia_mapa_cm * escala} ÷ 100.000"

explicacion: |
  Se multiplica la distancia del mapa por el denominador de la escala,
  y se convierte de centímetros a kilómetros.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([1000, 2000, 5000, 10000, 25000])
  distancia_mapa_cm: random(1, 20)

respuesta: (distancia_mapa_cm * escala) / 100
tipo: input
tolerancia_abs: 0.5

enunciado: "En un mapa a escala 1:{escala}, dos puntos están a {distancia_mapa_cm} cm de distancia. ¿Cuál es la distancia real, en metros?"

pasos:
  - "Distancia real en cm: {distancia_mapa_cm} × {escala} = {distancia_mapa_cm * escala}"
  - "En metros: {distancia_mapa_cm * escala} ÷ 100"

explicacion: |
  1 metro tiene 100 centímetros, así que se divide por 100 para pasar de
  cm a m.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000, 500000])
  distancia_real_km: random(1, 50)

respuesta: (distancia_real_km * 100000) / escala
tipo: input
tolerancia_abs: 0.05

enunciado: "En un mapa a escala 1:{escala}, ¿a cuántos cm de distancia deberían estar dibujadas dos ciudades que en la realidad están a {distancia_real_km} km?"

pasos:
  - "Distancia real en cm: {distancia_real_km} × 100.000 = {distancia_real_km * 100000}"
  - "En el mapa: {distancia_real_km * 100000} ÷ {escala}"

explicacion: |
  Se despeja la distancia del mapa dividiendo la distancia real (en cm)
  por el denominador de la escala.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "calculo"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000, 500000])
  distancia_mapa_cm: random(1, 20)
  distancia_real_km: (distancia_mapa_cm * escala) / 100000

respuesta: escala
tipo: input
tolerancia_abs: 1

enunciado: "En un mapa, dos ciudades están a {distancia_mapa_cm} cm de distancia, y en la realidad esas ciudades están a {redondear(distancia_real_km, 2)} km. ¿Cuál es el denominador de la escala de ese mapa (el número después de \"1:\")?"

explicacion: |
  Se despeja el denominador de la fórmula de la escala, convirtiendo
  primero la distancia real a centímetros.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un mapa se agranda o se achica (por ejemplo, al fotocopiarlo), la escala gráfica (la barra dibujada) sigue siendo correcta, porque se agranda o achica junto con el dibujo."

explicacion: |
  Es la ventaja de la escala gráfica frente a la numérica.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si un mapa se imprime o se muestra en un tamaño distinto al original, la escala numérica (\"1:50.000\") escrita deja de ser válida."

explicacion: |
  Ese número asumía el tamaño original del mapa; si el mapa cambia de
  tamaño, la relación real entre el mapa y el terreno ya no es esa.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una escala 1:1.000 (denominador chico) se llama escala GRANDE, porque representa más detalle en una zona más chica — aunque el número 1.000 sea menor que el de otras escalas."

explicacion: |
  \"Grande\" se refiere a qué tan grande es la fracción 1/1.000 en sí,
  no al tamaño del número del denominador.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una escala 1:1.000.000 (denominador grande) se llama escala CHICA, porque representa menos detalle en una zona mucho más grande."

explicacion: |
  Es el matiz contraintuitivo del tema: más grande el número, más chica
  se llama la escala.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

enunciado: "¿Cuál de estas dos escalas es la \"escala grande\": 1:5.000 o 1:500.000?"
tipo: mc
opciones_explicitas:
  - "1:5.000"
  - "1:500.000"
  - "Las dos son igual de grandes"
respuesta: "1:5.000"

explicacion: |
  El denominador más chico corresponde a la escala más grande (más
  detalle, área más reducida).
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El plano de un barrio, con mucho detalle de sus calles, usa una escala grande (denominador chico)."

explicacion: |
  Mucho detalle en una zona chica es, justamente, lo que caracteriza a
  una escala grande.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un mapa que muestra un país entero, con poco detalle de cada ciudad, usa una escala chica (denominador grande)."

explicacion: |
  Poco detalle en una zona grande es lo que caracteriza a una escala
  chica.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "comparacion"]

variables:
  distancia_mapa_cm: random(2, 10)
  escala_a: uno_de([10000, 25000])
  escala_b: uno_de([250000, 500000])

respuesta: (((distancia_mapa_cm * escala_b) / 100000) > ((distancia_mapa_cm * escala_a) / 100000))
tipo: vf

enunciado: "Dos mapas distintos miden la misma distancia de {distancia_mapa_cm} cm entre dos puntos. Mapa A tiene escala 1:{escala_a}. Mapa B tiene escala 1:{escala_b}. ¿La distancia real que representa el Mapa B es mayor que la del Mapa A?"

explicacion: |
  A igual medida en el mapa, la escala con denominador más grande
  representa una distancia real mayor.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "comparacion"]

variables:
  distancia_real_km: random(5, 40)
  escala_a: uno_de([10000, 25000])
  escala_b: uno_de([250000, 500000])

respuesta: (((distancia_real_km * 100000) / escala_a) > ((distancia_real_km * 100000) / escala_b))
tipo: vf

enunciado: "Dos puntos están a {distancia_real_km} km de distancia real. Para representar esa misma distancia, ¿hace falta dibujar más centímetros en un mapa a escala 1:{escala_a} que en uno a escala 1:{escala_b}?"

explicacion: |
  Con un denominador más chico (escala más grande), la misma distancia
  real ocupa más espacio dibujado en el mapa.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "orden"]

tipo: ordenar
enunciado: "Ordená estas escalas de menor a mayor nivel de detalle (de escala más chica a escala más grande)."
opciones_explicitas:
  - "1:10.000"
  - "1:1.000.000"
  - "1:100.000"
respuesta_orden: ["1:1.000.000", "1:100.000", "1:10.000"]

explicacion: |
  A menor denominador, mayor el nivel de detalle (escala más grande).
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "verificacion"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000, 250000])
  distancia_mapa_cm: random(1, 20)
  correcto: (distancia_mapa_cm * escala) / 100000
  error: uno_de([0, 0, 0, 2, -2])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 0.1)
tipo: vf

enunciado: "¿Está bien calculado esto? Mapa a escala 1:{escala}, distancia en el mapa {distancia_mapa_cm} cm, distancia real informada: {redondear(mostrado, 2)} km."

explicacion: |
  Se vuelve a calcular con la fórmula de la escala y se compara con el
  valor informado.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa"]

variables:
  escala: uno_de([10000, 25000, 50000, 100000])
  distancia_mapa_cm: random(1, 20)
  distancia_real_cm: distancia_mapa_cm * escala

tipo: completar
enunciado: "En un mapa a escala 1:{escala}, una distancia de {distancia_mapa_cm} cm representa una distancia real de ___ cm."
respuestas_validas:
  - distancia_real_cm

explicacion: |
  Se multiplica la distancia del mapa por el denominador de la escala.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En un mapa a escala 1:100.000, cada centímetro dibujado representa 1 kilómetro real."

explicacion: |
  100.000 cm equivalen exactamente a 1.000 metros, o sea, 1 km.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "avanzado"
  tags: ["escala_mapa", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿La escala numérica de un mapa impreso sigue siendo exactamente la misma si esa imagen se agranda al hacer zoom en una pantalla?"

explicacion: |
  Al agrandar la imagen, la relación entre lo dibujado y la realidad
  cambia — la escala numérica original deja de ser correcta, salvo que
  el mapa también tenga una escala gráfica que se agrande junto con la
  imagen.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "intermedio"
  tags: ["escala_mapa", "vocabulario"]

enunciado: "Para planificar una caminata dentro de un mismo barrio, ¿qué tipo de escala conviene usar?"
tipo: mc
opciones_explicitas:
  - "Una escala grande (denominador chico), con mucho detalle"
  - "Una escala chica (denominador grande), con poco detalle"
  - "No importa la escala para ese uso"
respuesta: "Una escala grande (denominador chico), con mucho detalle"

explicacion: |
  Cuanto más chica el área a recorrer, más conviene un mapa de escala
  grande, con más detalle.
```

```
metadata:
  materia: "geografia"
  tema: "escala_de_mapa"
  nivel: "basico"
  tags: ["escala_mapa", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La escala de un mapa relaciona una distancia dibujada con la distancia real (distancia_real = distancia_mapa × denominador), y una escala \"grande\" (denominador chico) representa más detalle en menos área, al revés de lo que sugiere el tamaño del número."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: huella-de-carbono-agua-virtual (25 preguntas)

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "gases_efecto_invernadero"]

respuesta: "gases de efecto invernadero"
tipo: completar
respuestas_validas:
  - "gases de efecto invernadero"

enunciado: "La huella de carbono es la totalidad de ___ emitidos por un individuo, organización, evento o producto, expresados en toneladas de CO2 equivalente."

explicacion: |
  La huella de carbono mide la cantidad de gases de efecto invernadero (GEI) que liberamos a la atmósfera como consecuencia de nuestras actividades diarias o procesos productivos.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["ecologia", "niveles_troficos"]

respuesta: "10%"
tipo: completar
respuestas_validas:
  - "10%"

enunciado: "En una cadena alimentaria, según la regla del diez por ciento, sólo aproximadamente el ___ de la energía de un nivel trófico se transfiere al siguiente nivel."

explicacion: |
  Debido a que la mayor parte de la energía se pierde en forma de calor y procesos metabólicos durante la transferencia entre niveles, se requiere mucha más biomasa vegetal para producir una cantidad pequeña de carne, lo que aumenta la huella de carbono de los productos animales.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["alimentacion", "impacto_ambiental"]

respuesta: "la carne"
tipo: completar
respuestas_validas:
  - "la carne"

enunciado: "Debido a la pérdida de energía entre los niveles tróficos, la huella de carbono de ___ es significativamente mayor que la de las verduras."

explicacion: |
  Para producir un kilo de carne se necesita alimentar al animal con muchos kilos de plantas. Como la energía se reduce drásticamente en cada paso (regla del 10%), el proceso de producción de carne requiere más recursos y emite más gases que la producción directa de vegetales.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["gases_efecto_invernadero", "ganaderia"]

respuesta: "metano"
tipo: completar
respuestas_validas:
  - "metano"

enunciado: "Además del dióxido de carbono, la ganadería intensiva contribuye significativamente a la huella de carbono mediante la emisión de ___ durante la digestión de los rumiantes."

explicacion: |
  El metano (CH4) es un gas de efecto invernadero muy potente. Las emisiones de metano provenientes del ganado son uno de los factores principales que elevan la huella de carbono de los productos de origen animal.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "ecologia"]

respuesta: "reducir"
tipo: completar
respuestas_validas:
  - "reducir"

enunciado: "Para disminuir nuestra huella de carbono personal, es recomendable ___ el consumo de productos de origen animal y aumentar el de alimentos de origen vegetal."

explicacion: |
  Al consumir más productos vegetales, aprovechamos la energía de los productores primarios de forma más directa, evitando las ineficiencias de la cadena trófica y reduciendo la emisión de gases asociados a la ganadería.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "recursos_naturales"]

tipo: mc
opciones_explicitas: ["El agua que contiene un producto y que podemos beber directamente.", "El volumen total de agua utilizada en todo el proceso de producción de un bien.", "La cantidad de agua que se evapora de los océanos debido al calentamiento global.", "El agua que se utiliza exclusivamente para la limpieza de las fábricas."]

respuesta: "El volumen total de agua utilizada en todo el proceso de producción de un bien."

enunciado: "El concepto de 'agua virtual' se refiere a..."

explicacion: |
  El agua virtual es el volumen total de agua dulce que se consume en todas las etapas de producción de un producto (desde la extracción de materia prima hasta el procesamiento), aunque el producto final no parezca contener agua líquida.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["comparacion", "consumo"]

tipo: mc
opciones_explicitas: ["El café consume mucha más agua que un kilo de carne.", "La carne vacuna requiere una cantidad de agua significativamente mayor que el café.", "Ambos consumen la misma cantidad de agua por unidad.", "El café es un producto con huella hídrica nula."]

respuesta: "La carne vacuna requiere una cantidad de agua significativamente mayor que el café."

enunciado: "Considerando los valores promedio (café: ~140 litros/taza, carne vacuna: ~15.000 litros/kg), ¿cuál es la diferencia principal entre ambas huellas hídricas?"

explicacion: |
  La producción de carne vacuna requiere aproximadamente 15.000 litros de agua por kilo, mientras que una taza de café requiere cerca de 140 litros. La diferencia es masiva debido a la cantidad de agua necesaria para cultivar el forraje y el mantenimiento del ganado.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["ejemplos", "consumo_masivo"]

tipo: mc
opciones_explicitas: ["hamburguesa", "arroz", "café", "carne vacuna"]

enunciado: "De la siguiente lista, ¿cuál es el producto que requiere aproximadamente 2.500 litros de agua por kilo?"

respuesta: "arroz"

explicacion: |
  El arroz es un cultivo que requiere una gran cantidad de agua para su crecimiento en campos inundados, lo que resulta en una huella hídrica de aproximadamente 2.500 litros por kilo.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

tipo: mc
opciones_explicitas: ["Una hamburguesa tiene una huella hídrica menor que un kilo de arroz.", "La huella hídrica de una hamburguesa es de aproximadamente 2500 litros.", "El consumo de carne no afecta la huella hídrica global.", "El agua virtual sólo se mide en productos industriales, no en alimentos."]

respuesta: "La huella hídrica de una hamburguesa es de aproximadamente 2500 litros."

enunciado: "Si analizamos el impacto del consumo de alimentos procesados, ¿cuál de estas afirmaciones es correcta?"

explicacion: |
  Una hamburguesa representa un producto de alto impacto hídrico, con una huella de aproximadamente 2500 litros, debido a la suma de la producción de carne, cereales y otros ingredientes.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "El concepto de agua virtual implica que, aunque no veamos agua en un paquete de arroz, se han utilizado miles de litros para su producción."

explicacion: |
  Es verdadero. El agua virtual es el agua "oculta" que se utiliza en la agricultura y la industria para crear productos que consumimos habitualmente.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "recursos_naturales"]

respuesta: "virtual"
tipo: completar
respuestas_validas:
  - "virtual"

enunciado: "El término ___ se utiliza para referirse al volumen de agua que no se ve directamente pero que se utilizó en el proceso de producción de un bien o servicio."

explicacion: |
  Se llama "virtual" porque el agua no se consume en el sentido de desaparecer del planeta, sino que se utiliza en un proceso productivo y luego vuelve a la naturaleza a través del ciclo hidrológico.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["ciclo_del_agua", "produccion"]

respuesta: "ciclo del agua"
tipo: completar
respuestas_validas:
  - "ciclo del agua"
  - "ciclo hidrológico"

enunciado: "El agua utilizada en la agricultura o la industria no deja de existir tras la producción; simplemente se integra nuevamente en el ___."

explicacion: |
  El concepto de agua virtual resalta que el agua sigue fluyendo en el ciclo natural, pero su uso en la producción "desplaza" o "compromete" ese recurso para otros usos.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo", "recursos"]

variables:
  idx: uno_de([0, 1])
  tabla: [["carne de vaca", "alto"], ["trigo", "bajo"]]

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas:
  - "alto"
  - "bajo"

enunciado: "En la producción de {tabla[idx][0]}, el nivel de agua comprometida (agua virtual) para ese producto es ___."

explicacion: |
  El término "virtual" enfatiza que el agua está comprometida en la cadena de valor: la carne de vaca compromete mucha más agua que el trigo.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["impacto", "recursos"]

respuesta: "comprometida"
tipo: completar
respuestas_validas:
  - "comprometida"

enunciado: "En lugar de decir que el agua es 'consumida' por un producto, se prefiere decir que es agua ___ en su proceso de fabricación."

explicacion: |
  Decir "consumida" daría la falsa idea de que el agua desaparece del planeta, mientras que "comprometida" indica que se ha utilizado para un fin específico.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["comercio", "globalizacion"]

respuesta: "importar"
tipo: completar
respuestas_validas:
  - "importar"

enunciado: "Cuando un país compra productos de una región con escasez hídrica, en realidad está realizando una acción de ___ agua virtual."

explicacion: |
  El comercio internacional permite a las naciones "importar" agua de forma indirecta a través de los productos que adquieren de otros países.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "recursos_naturales"]

enunciado: "Un productor de aguacates en una zona con escasez de agua decide utilizar tecnología de riego por goteo muy eficiente para reducir el uso de agua. Sin embargo, para mantener la cadena de frío y el transporte internacional hacia Europa, utiliza barcos y camiones que queman grandes cantidades de combustibles fósiles. En este escenario, el producto presenta una ___ huella hídrica pero una ___ huella de carbono."

opciones_explicitas: ["baja / alta", "alta / baja", "alta / alta", "baja / baja"]

respuesta: "baja / alta"
tipo: mc

explicacion: |
  El uso de riego eficiente reduce la huella hídrica, pero el transporte de larga distancia y la refrigeración incrementan la huella de carbono. Mirar ambos indicadores permite ver que la eficiencia en un recurso no compensa el impacto en otro.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "recursos_naturales"]

enunciado: "Si analizamos la producción de carne de res, observamos que el proceso requiere grandes extensiones de tierra para pasturas y una cantidad masiva de agua para el riego de forraje y el consumo animal, además de las emisiones de metano. Por lo tanto, la carne de res se caracteriza por tener:"

opciones_explicitas: ["Baja huella de carbono y baja huella hídrica", "Baja huella de carbono y alta huella hídrica", "Alta huella de carbono y baja huella hídrica", "Alta huella de carbono y alta huella hídrica"]

respuesta: "Alta huella de carbono y alta huella hídrica"
tipo: mc

explicacion: |
  La producción ganadera intensiva o extensiva suele impactar ambos indicadores: el agua necesaria para el ciclo de vida del animal y los gases de efecto invernadero producidos por el ganado y el cambio de uso de suelo.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["metodologia", "sustentabilidad"]

enunciado: "Al evaluar el impacto ambiental de un producto importado, ¿cuál es la razón principal por la que es necesario mirar la huella de carbono Y la huella de agua de forma conjunta?"

opciones_explicitas: ["Porque un producto puede ser eficiente en un recurso pero altamente costoso en otro.", "Porque la huella de carbono siempre es mayor que la huella hídrica.", "Porque sólo así se puede calcular el precio final del producto.", "Porque la huella hídrica sólo se aplica a productos agrícolas."]

respuesta: "Porque un producto puede ser eficiente en un recurso pero altamente costoso en otro."
tipo: mc

explicacion: |
  El análisis integral evita mostrar una imagen parcial: un producto puede parecer ecológico por su baja emisión de CO2, pero estar agotando acuíferos críticos (costo ambiental oculto).
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["conceptos_clave"]

enunciado: "Cuando consumimos un producto que ha sido producido en una región con estrés hídrico extremo, aunque su transporte sea local y emita poco CO2, estamos consumiendo un ___ costo ambiental relacionado con el agua."

respuestas_validas:
  - "alto"
  - "elevado"
  - "significativo"

respuesta: "alto"
tipo: completar

explicacion: |
  El concepto de "agua virtual" se refiere al agua que no vemos pero que se utilizó para producir un bien. Si esa agua proviene de zonas con escasez, el costo ambiental es muy alto para esa región.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["industria", "impacto"]

enunciado: "Considerá dos productos textiles: A (algodón convencional con riego intensivo en zona seca) y B (poliéster derivado del petróleo con transporte transoceánico). Si comparamos sus impactos, es correcto afirmar que:"

opciones_explicitas: ["El producto A tiene mayor huella hídrica y el B mayor huella de carbono.", "El producto B tiene mayor huella hídrica y el A mayor huella de carbono.", "Ambos tienen la misma huella en ambos indicadores.", "Ninguno de los dos tiene impacto ambiental significativo."]

respuesta: "El producto A tiene mayor huella hídrica y el B mayor huella de carbono."
tipo: mc

explicacion: |
  El algodón requiere cantidades masivas de agua para su cultivo (huella hídrica), mientras que el poliéster es un plástico derivado de combustibles fósiles cuya producción y transporte global elevan su huella de carbono.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["transporte", "emisiones", "consumo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["10 kg CO2"], ["50 kg CO2"], ["100 kg CO2"]]

enunciado: "Un consumidor elige un producto importado cuyo transporte genera una huella de carbono de {datos[idx][0]}. Si decide cambiar a un producto local, la huella se reduce significativamente. ¿Cuál es la huella de carbono del producto importado según el escenario actual?"

opciones_explicitas: ["10 kg CO2", "50 kg CO2", "100 kg CO2"]
respuesta: datos[idx][0]
tipo: mc

explicacion: |
  La huella de carbono del transporte depende de la distancia y el medio de transporte. Los productos locales reducen estas emisiones.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["agua_virtual", "consumo_responsable", "recursos_naturales"]

variables:
  idx: uno_de([0, 1])
  datos: [["carne de vaca", "15000 litros"], ["carne de pollo", "4000 litros"]]

enunciado: "El concepto de agua virtual se refiere al agua utilizada para producir un bien. Para producir 1 kg de {datos[idx][0]} se requieren aproximadamente ___."

respuestas_validas:
  - "15000 litros"
  - "4000 litros"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La producción de carne roja requiere una cantidad significativamente mayor de agua (para riego de forraje y bebida del animal) que la carne blanca.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["dieta", "huella_hídrica", "impacto_ambiental"]

variables:
  idx: uno_de([0, 1])
  datos: [["alta en proteína animal", "Mayor huella de agua"], ["basada en vegetales", "Menor huella de agua"]]

enunciado: "Si una persona mantiene una dieta {datos[idx][0]}, su huella de agua virtual será ___ en comparación con una dieta equilibrada."

opciones_explicitas: ["Mayor huella de agua", "Menor huella de agua", "Igual", "Nula"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las dietas con alto contenido de productos de origen animal suelen tener una huella de agua virtual mucho más elevada debido a los procesos de producción ganadera.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["procesados", "emisiones", "ciclo_de_vida"]

variables:
  idx: uno_de([0, 1])
  datos: [["muy procesado", "2.5 kg CO2"], ["mínimamente procesado", "0.8 kg CO2"]]

enunciado: "Un producto {datos[idx][0]} tiene una huella de carbono de ___ por unidad."

opciones_explicitas: ["2.5 kg CO2", "0.8 kg CO2", "5.0 kg CO2", "1.2 kg CO2"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los productos altamente procesados suelen tener una huella de carbono más alta debido a las etapas de transformación industrial y empaquetado.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["definiciones", "agua_virtual"]

enunciado: "La cantidad de agua que se utiliza para producir un bien o servicio, incluyendo el agua utilizada en la extracción de materias primas y el procesamiento, se denomina ___."

respuestas_validas:
  - "agua virtual"
  - "huella hídrica"
respuesta: "agua virtual"
tipo: completar

explicacion: |
  El "agua virtual" es el volumen de agua que no vemos pero que se ha consumido para fabricar un producto (por ejemplo, para cultivar el algodón de una camiseta).
```

