# Historia Profunda — Conquista y colonia argentina (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Fundaciones de ciudades

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["conquista", "fundaciones"]

variables:
  escenario: uno_de([["Santiago del Estero", "1553"], ["Córdoba", "1609"], ["Buenos Aires (segunda)", "1580"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Santiago del Estero", "Córdoba", "Buenos Aires (segunda)"]

enunciado: "La ciudad de {escenario[0]} fue fundada en el año {escenario[1]}."

explicacion: |
  La fundación de {escenario[0]} en {escenario[1]} marcó un hito en la organización territorial de la región.
```

### 2 — Cronología de asentamientos

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["ordenar", "cronologia"]

opciones_explicitas: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]

respuesta_orden: ["Fundación de Santiago del Estero", "Segunda fundación de Buenos Aires", "Fundación de Córdoba"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos de la conquista y colonización:"

pasos:
  - "Identificar la fecha de Santiago del Estero (1553)"
  - "Identificar la fecha de la segunda Buenos Aires (1580)"
  - "Identificar la fecha de Córdoba (1609)"

explicacion: |
  El orden cronológico correcto es: Santiago del Estero (1553), Buenos Aires (1580) y Córdoba (1609).
```

### 3 — La importancia de Buenos Aires

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["buenos_aires", "conquista"]

respuesta: "Juan de Garay"
tipo: completar
respuestas_validas:
  - "Juan de Garay"

enunciado: "La segunda fundación de la ciudad de Buenos Aires en 1580 fue liderada por ___."

explicacion: |
  Tras el fracaso de la primera fundación de Pedro de Mendoza, Juan de Garay estableció la segunda fundación en 1580.
```

### 4 — El rol de Córdoba

```
metadata:
  materia: "historia_profucha"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cordoba", "fundacion"]

respuesta: "1609"
tipo: completar
tolerancia_abs: 0

enunciado: "La ciudad de Córdoba fue fundada en el año ___."

explicacion: |
  Córdoba fue fundada en 1609, convirtiéndose en un centro neurálgico para la educación y la administración colonial.
```

### 5 — Identificación de capitales

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["geografia_historica"]

variables:
  datos: [["Santiago del Estero", "1553"], ["Córdoba", "1609"], ["Buenos Aires", "1580"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1553", "1609", "1580"]

enunciado: "Si nos referimos a la fundación de {datos[idx][0]}, el año correspondiente es ___."

explicacion: |
  La fecha correcta para la fundación de {datos[idx][0]} es {datos[idx][1]}.
```

### 6 — Origen administrativo del territorio

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["organizacion_colonial", "virreinatos"]

respuesta: "Perú"
tipo: completar
respuestas_validas:
  - "Perú"

enunciado: "Antes de la creación del Virreinato del Río de la Plata, el territorio que hoy ocupa Argentina pertenecía al Virreinato del ___."

explicacion: |
  Durante gran parte de la era colonial, las tierras rioplatenses dependían de la administración del Virreinato del Perú, con sede en Lima.
```

### 7 — El cambio de 1776

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["virreinatos", "reformas_borbonicas"]

opciones_explicitas: ["Lima", "Buenos Aires", "Santiago", "Asunción"]
respuesta: "Buenos Aires"
tipo: mc

enunciado: "Con la creación del Virreinato del Río de la Plata en 1776, ¿cuál se convirtió en la nueva capital administrativa?"

explicacion: |
  La creación del Virreinato del Río de la Plata buscaba mejorar la defensa del Atlántico y el control comercial, estableciendo a Buenos Aires como su centro de poder.
```

### 8 — Secuencia de organización territorial

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["orden_cronologico", "virreinatos"]

opciones_explicitas: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
respuesta_orden: ["Virreinato del Perú", "Virreinato del Río de la Plata", "Estado Argentino"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de organización política del territorio que hoy es Argentina:"

explicacion: |
  La secuencia correcta comienza con la dependencia del Perú, sigue con la autonomía regional del Río de la Plata y culmina con la formación del Estado nacional.
```

### 9 — El rol de la capital

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["capitales", "geografia_colonial"]

respuesta: "Río de la Plata"
tipo: completar
respuestas_validas:
  - "Río de la Plata"

enunciado: "En el año 1776, se fundó el Virreinato del ___."

explicacion: |
  La reforma administrativa de 1776 fue fundamental para el desarrollo de la región del Plata.
```

### 10 — Identificación de cambios

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["reformas", "geopolitica"]

opciones_explicitas: ["Perú", "Río de la Plata"]
respuesta: "Río de la Plata"
tipo: mc

enunciado: "La creación de un nuevo virreinato en 1776 significó que el territorio pasó de depender del Virreinato del Perú a pertenecer al Virreinato del ___."

explicacion: |
  Este cambio permitió una gestión más directa de las rutas comerciales hacia el Atlántico.
```

### 11 — Las dos fundaciones de Buenos Aires

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "conquista"]

tipo: mc
opciones_explicitas: ["Pedro de Mendoza", "Juan de Garay", "Juan de Cabral", "Hernán de Magallanes"]

enunciado: "La primera fundación de la ciudad de Buenos Aires, realizada en 1536, fue liderada por el cual de los siguientes exploradores?"

respuesta: "Pedro de Mendoza"

explicacion: |
  La primera fundación fue un intento fallido liderado por Pedro de Mendoza en 1536, que terminó siendo abandonado debido a las condiciones extremas y los conflictos con los nativos.
```

### 12 — El destino de la primera fundación

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "fracaso"]

tipo: completar
respuestas_validas:
  - "fracasó"

enunciado: "A diferencia de la segunda fundación, la expedición de Pedro de Mendoza en 1536 ___ y la ciudad fue posteriormente abandonada."

respuesta: "fracasó"

explicacion: |
  La primera fundación de Buenos Aires fracasó debido a la hambruna y los ataques de los pueblos originarios, lo que obligó a los sobrevivientes a retirarse.
```

### 13 — El éxito de la segunda fundación

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["fundacion", "buenos_aires", "juan_de_garay"]

variables:
  datos: [["Juan de Garay", "Juan de Garay"], ["Pedro de Mendoza", "Pedro de Mendoza"]]
  idx: uno_de([0, 1])
  respuesta_correcta: datos[idx][1]

respuesta: respuesta_correcta
tipo: mc
opciones_explicitas: ["Juan de Garay", "Pedro de Mendoza"]

enunciado: "En el año 1580, la segunda fundación de Buenos Aires, que finalmente logró consolidarse y prosperar, fue llevada a cabo por: ___"

explicacion: |
  Juan de Garay lideró la segunda fundación en 1580, estableciendo un asentamiento que sí logró perdurar en el tiempo, a diferencia del intento de 1536.
```

### 14 — Cronología de fundaciones

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "fundaciones"]

tipo: ordenar
opciones_explicitas: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

respuesta_orden: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

enunciado: "Ordene cronológicamente los hitos de la fundación de Buenos Aires:"

explicacion: |
  El proceso comenzó con el intento fallido de Mendoza en 1536, seguido por el intento exitoso de Garay en 1580, lo que permitió la posterior consolidación de la ciudad.
```

### 15 — Comparativa de fundadores

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["fundadores", "comparativa"]

variables:
  datos: [["Garay", "Garay"], ["Mendoza", "Mendoza"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Garay", "Mendoza"]

enunciado: "Si comparamos los dos intentos de fundación de Buenos Aires, el líder que logró establecer un asentamiento próspero fue ___."

explicacion: |
  Mientras que Mendoza (1536) no logró establecer un asentamiento permanente, Juan de Garay (1580) fue el responsable de la fundación que prosperó.
```

### 16 — Resistencia Mapuche

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["mapuche", "resistencia", "territorio"]

respuesta: "mapuches"
tipo: mc

opciones_explicitas: ["incas", "mapuches", "guaraníes", "diaguitas"]

enunciado: "A diferencia de otros pueblos que fueron rápidamente sometidos, ¿qué grupo indígena mantuvo una resistencia activa y una autonomía territorial significativa frente a la expansión colonial en el sur hasta bien entrado el siglo XIX?"

explicacion: |
  El pueblo Mapuche mantuvo una estructura política y militar que les permitió resistir la expansión española y, posteriormente, la consolidación del Estado argentino durante gran parte del siglo XIX.
```

### 17 — El proceso de mestizaje

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["mestizaje", "sociedad", "colonia"]

variables:
  escenario: uno_de([["biológico", "cultural"], ["biológico", "político"], ["religioso", "militar"]])

respuesta: escenario[1]
tipo: completar

respuestas_validas:
  - "biológico"
  - "cultural"
  - "político"
  - "religioso"
  - "militar"

enunciado: "El proceso de mestizaje en el Virreinato del Río de la Plata fue de carácter tanto ___ como ___."

explicacion: |
  El mestizaje no fue solo la unión biológica de españoles e indígenas, sino también un profundo intercambio de costumbres, lenguas y creencias (mestizaje cultural).
```

### 18 — Impacto demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["demografia", "impacto", "enfermedades"]

respuesta: 0.7
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se estima que, debido a las guerras de conquista y, fundamentalmente, a las epidemias traídas por los europeos, la población indígena sufrió una reducción drástica. Si una población original era de 100 personas, ¿cuántas personas (estimado decimal) quedarían tras una reducción del 70%?"

pasos:
  - "Calcular el 70% de la población original (100 * 0.70)."
  - "Restar ese valor al total original (100 - 70)."

explicacion: |
  Las enfermedades como la viruela y el sarampión fueron agentes devastadores que causaron un colapso demográfico en los pueblos originarios.
```

### 19 — Organización social colonial

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["encomienda", "sistema", "colonia"]

respuesta_orden: ["encomienda", "mita", "reparto"]
tipo: ordenar

opciones_explicitas: ["encomienda", "mita", "reparto"]

enunciado: "Ordene los siguientes sistemas de trabajo/tributo utilizados por la corona española en América, desde el que se basaba en la asignación de indígenas a un español para evangelización, pasando por el trabajo forzado en minas, hasta el sistema de venta de productos a indígenas en zonas periféricas:"

explicacion: |
  La encomienda fue el sistema inicial de tutela y evangelización; la mita era el trabajo obligatorio en minas; y el reparto de mercancías fue una forma de explotación comercial en las zonas de frontera.
```

### 20 — Consecuencias de la conquista

```
metadata:
  materia: "historia_profunda"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cosmovision", "religión", "impacto"]

respuesta: "sincretismo"
tipo: completar

respuestas_validas:
  - "sincretismo"
  - "aislamiento"
  - "extinción"

enunciado: "La superposición de las creencias religiosas católicas sobre las prácticas espirituales de los pueblos originarios dio lugar a un fenómeno conocido como ___."

explicacion: |
  El sincretismo religioso es la fusión de elementos de distintas religiones, resultando en nuevas expresiones culturales y espirituales que persisten hoy en día.
```

### 21 — El avance hacia el Río de la Plata

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["conquista", "expediciones"]

variables:
  escenario: uno_de([["La expedición de Pedro de Mendoza (1536) se estableció en un asentamiento que luego fue abandonado debido a las condiciones climáticas y los ataques de los nativos.", "Asentamiento de Buenos Aires"], ["La expedición de Juan de Garay (1580) fue fundamental para la consolidación de la presencia española en la región.", "Fundación de la segunda Buenos Aires"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Asentamiento de Buenos Aires", "Fundación de la segunda Buenos Aires", "Fundación de Asunción", "Expedición de Solís"]

enunciado: "De acuerdo con la cronología de la conquista, ¿cuál fue el hito principal del escenario descrito: {escenario[0]}?"

explicacion: |
  El proceso de colonización fue errático. Mendoza fundó el primer asentamiento en 1536, pero fracasó, siendo Garay quien consolidó la presencia española años después.
```

### 22 — La organización administrativa virreinal

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["instituciones", "virreinato"]

variables:
  caso: uno_de([["El Virreinato del Río de la Plata fue creado para mejorar la defensa y administración del territorio frente a las potencias europeas.", "España"], ["La administración de las colonias dependía directamente de la corona de...", "España"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "España"

enunciado: "Complete la siguiente afirmación basada en el contexto: {caso[0]}"

explicacion: |
  La creación del Virreinato del Río de la Plata en 1776 fue una respuesta de la corona española a las presiones de Portugal y Gran Bretaña en el Atlántico Sur.
```

### 23 — Secuencia de la conquista del interior

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["cronologia", "conquista"]

respuesta_orden: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]
tipo: ordenar
opciones_explicitas: ["Llegada de los españoles al Atlántico", "Fundación de ciudades en el Tucumán", "Establecimiento de las rutas comerciales coloniales"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de expansión y consolidación en el actual territorio argentino:"

explicacion: |
  Primero se exploró el litoral (Solís/Mendoza), luego se penetró el interior hacia el Tucumán y finalmente se consolidó la red de caminos y comercio colonial.
```

### 24 — El rol de las instituciones coloniales

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["instituciones", "cabildo"]

variables:
  situacion: uno_de([["El órgano encargado de la administración de justicia y gobierno en las ciudades coloniales era el...", "Cabildo"], ["La institución de gobierno local más importante en las ciudades del Virreinato era el...", "Cabildo"]])

respuesta: situacion[1]
tipo: mc
opciones_explicitas: ["Cabildo", "Real Audiencia", "Consejo de Indias", "Corregimiento"]

enunciado: "Identifique la institución mencionada en el siguiente contexto: {situacion[0]}"

explicacion: |
  El Cabildo era la institución de gobierno local que permitía la participación de los vecinos en la administración de la ciudad.
```

### 25 — Economía colonial y monopolio

```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["economia", "monopolio"]

variables:
  modelo: uno_de([["El sistema económico impuesto por la metrópoli que prohibía el comercio con otras naciones era el...", "Monopolio comercial"], ["La política de comercio exclusivo de España con sus colonias se denominaba...", "Monopolio comercial"]])

respuesta: verdadero
tipo: vf

enunciado: "El sistema de {modelo[0]} fue el eje de la economía virreinal, limitando el crecimiento de puertos como Buenos Aires hasta la creación del Virreinato del Río de la Plata en 1776."

explicacion: |
  El monopolio comercial obligaba a que todo el comercio pasara por puertos autorizados (como Sevilla o Cádiz), lo que fomentó el contrabando en el Río de la Plata.
```
