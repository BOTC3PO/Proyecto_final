# Geografia — Urbanizacion migracion ciudad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El motor de la urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["historia", "revolucion_industrial"]

respuesta: "Revolución Industrial"
tipo: completar
respuestas_validas:
  - "Revolución Industrial"

enunciado: "El proceso de crecimiento acelerado de las ciudades, conocido como urbanización, se vio fuertemente impulsado por la ___."

explicacion: |
  La Revolución Industrial provocó un éxodo masivo del campo a la ciudad debido a la mecanización de la agricultura y la creación de fábricas en los núcleos urbanos.
```

### 2 — Causas de la migración rural-urbana

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["migracion", "causas"]

variables:
  caso: uno_de([["falta de tierras y mecanización agrícola", "atracción por empleos industriales"], ["escasez de servicios en el campo", "búsqueda de mejores oportunidades educativas"], ["crisis de subsistencia rural", "promesa de salarios fijos en la ciudad"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: [caso[0], caso[1], "Crecimiento natural de la población urbana", "Políticas de vivienda"]

enunciado: "En un contexto de urbanización acelerada, una causa principal de la migración desde el campo hacia la ciudad es: {caso[0]}."

explicacion: |
  La migración suele responder a un factor de "expulsión" (lo que sucede en el origen) y un factor de "atracción" (lo que ofrece el destino).
```

### 3 — Conceptos de densidad poblacional

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["demografia", "densidad"]

respuesta: 85
tipo: completar
tolerancia_abs: 5

enunciado: "Si una ciudad tiene una superficie de 100 km² y una población de 8500 habitantes, ¿cuál es su densidad de población (habitantes por km²)? (Redondea al entero más cercano)"

pasos:
  - "Identificar la población total: 8500"
  - "Identificar la superficie: 100 km²"
  - "Dividir población / superficie: 8500 / 100"

explicacion: |
  La densidad de población se calcula dividiendo el número total de habitantes por la superficie territorial: 8500 / 100 = 85 hab/km².
```

### 4 — Etapas del crecimiento urbano

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["procesos", "urbanismo"]

respuesta_orden: ["Expansión de la periferia", "Densificación del centro", "Crecimiento de la zona industrial", "Consolidación del núcleo urbano"]
tipo: ordenar
opciones_explicitas: ["Expansión de la periferia", "Densificación del centro", "Crecimiento de la zona industrial", "Consolidación del núcleo urbano"]

enunciado: "Ordena cronológicamente las fases típicas de una ciudad que experimenta un crecimiento acelerado por la industrialización:"

explicacion: |
  El proceso suele comenzar con un núcleo consolidado, seguido por la creación de zonas industriales, la densificación del centro para albergar trabajadores y, finalmente, la expansión hacia la periferia.
```

### 5 — Impacto de la urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["consecuencias", "social"]

variables:
  impacto: uno_de([["Problemas de infraestructura", "Desigualdad social"], ["Contaminación ambiental", "Hacinamiento"], ["Escasez de servicios", "Crecimiento de asentamientos informales"]])

respuesta: impacto[1]
tipo: mc
opciones_explicitas: ["Crecimiento demográfico natural", impacto[1], "Despoblación de las metrópolis", "Migración estacional"]

enunciado: "Un efecto común de la urbanización rápida y descontrolada es: {impacto[0]}."

explicacion: |
  Cuando la población urbana crece más rápido que la capacidad de la ciudad para proveer servicios y vivienda, surgen problemas como el hacinamiento o la falta de infraestructura.
```

### 6 — Causas de la migración rural-urbana

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["migracion", "campo", "ciudad"]

tipo: mc
opciones_explicitas: ["Falta de servicios y empleo en el campo", "Exceso de recursos naturales en la ciudad", "Deseo de vivir en zonas con menos población"]
respuesta: "Falta de servicios y empleo en el campo"
enunciado: "Uno de los principales motores que impulsa el éxodo rural hacia las grandes urbes es la ___."
explicacion: |
  La migración rural-urbana suele ser motivada por factores de 'expulsión' en el campo (falta de trabajo, servicios o tierras) y factores de 'atracción' en la ciudad (ofertas laborales y mejores servicios).
```

### 7 — El proceso de urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["urbanizacion", "crecimiento"]

variables:
  datos: [["crecimiento_desordenado", "crecimiento_planificado"], ["asentamientos_informales", "barrios_planificados"], ["servicios_insuficientes", "infraestructura_moderna"]]
  idx: uno_de([0, 1, 2])
  tipo_crecimiento: datos[idx][0]

tipo: mc
opciones_explicitas: ["crecimiento_planificado", "crecimiento_desordenado"]
respuesta: "crecimiento_desordenado"

enunciado: "Cuando la migración hacia la ciudad es masiva y rápida, suele producirse un {tipo_crecimiento} que genera problemas de vivienda."

explicacion: |
  El crecimiento desordenado ocurre cuando la infraestructura urbana no puede seguir el ritmo de la llegada de nuevos habitantes, derivando en asentamientos informales.
```

### 8 — Impacto en la población urbana

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["demografia", "poblacion"]

tipo: completar
respuestas_validas:
  - "industrialización"
  - "agricultura"

enunciado: "Históricamente, el proceso de migración del campo a la ciudad ha estado estrechamente vinculado al proceso de ___."

explicacion: |
  La Revolución Industrial demandó mano de obra masiva en las ciudades para las fábricas, lo que aceleró el traslado de la población rural al ámbito urbano.
```

### 9 — Secuencia del proceso migratorio

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Búsqueda de empleo en la ciudad", "Dificultades económicas en el sector rural", "Asentamiento en la periferia urbana"]

enunciado: "Ordena cronológicamente las etapas típicas de un proceso de migración rural-urbana:"

explicacion: |
  Primero surge la necesidad o dificultad en el origen (campo), luego se realiza el traslado buscando oportunidades y finalmente se establece la residencia en la zona de destino (ciudad).
respuesta_orden: ["Búsqueda de empleo en la ciudad", "Dificultades económicas en el sector rural", "Asentamiento en la periferia urbana"]
```

### 10 — Consecuencias socioeconómicas

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["economia", "servicios"]

variables:
  datos: [["alta_densidad", "baja_densidad"], ["escasez_servicios", "abundancia_servicios"], ["desempleo_estructural", "pleno_empleo"]]
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["alta_densidad", "baja_densidad"]
respuesta: "alta_densidad"

enunciado: "La llegada masiva de personas a las urbes provoca un aumento de la alta_densidad en los centros urbanos."

explicacion: |
  La concentración de población en áreas limitadas aumenta la densidad demográfica, lo que puede sobrecargar los servicios públicos y el mercado laboral.
```

### 11 — Impacto en servicios básicos

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["servicios", "urbanismo"]

respuesta: "saturación"
tipo: completar
respuestas_validas:
  - "saturación"
  - "colapso"

enunciado: "Cuando la migración hacia las ciudades es más rápida de lo que el Estado puede planificar, se produce una ___ de los servicios públicos como el agua potable y el transporte."

explicacion: |
  La urbanización acelerada genera una demanda de infraestructura que supera la capacidad de respuesta de la ciudad, provocando la saturación de los servicios básicos.
```

### 12 — Consecuencias de la urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["consecuencias", "barrios_precarios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["crecimiento de asentamientos informales", "falta de planificación urbana"], ["aumento de la contaminación", "congestión vehicular"]]

respuesta: uno_de(escenarios[escenario_idx])
tipo: mc
opciones_explicitas: ["crecimiento de asentamientos informales", "falta de planificación urbana", "aumento de la contaminación", "congestión vehicular"]

enunciado: "La expansión descontrolada de la mancha urbana hacia las periferias suele derivar en {escenarios[escenario_idx][0]}."

explicacion: |
  La falta de regulación y el rápido crecimiento demográfico llevan a la formación de barrios precarios o asentamientos informales en zonas no planificadas.
```

### 13 — Ventajas de la vida urbana

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["oportunidades", "empleo"]

respuesta: "empleo"
tipo: mc
opciones_explicitas: ["empleo", "aislamiento", "subsistencia", "degradación"]

enunciado: "Uno de los principales motores de la migración campo-ciudad es la búsqueda de mejores oportunidades de _________ y acceso a servicios especializados."

explicacion: |
  Las ciudades concentran la mayor parte de la actividad económica, ofreciendo una mayor diversidad de empleo en comparación con las zonas rurales.
```

### 14 — Procesos de urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["procesos", "secuencia"]

respuesta_orden: ["migración rural", "crecimiento demográfico", "expansión urbana", "asentamientos informales"]
tipo: ordenar
opciones_explicitas: ["migración rural", "crecimiento demográfico", "expansión urbana", "asentamientos informales"]

enunciado: "Ordena cronológicamente los elementos que suelen caracterizar un proceso de urbanización acelerada no planificada:"

pasos:
  - "Movimiento de personas desde el campo a la ciudad."
  - "Aumento de la población en el área metropolitana."
  - "Ocupación de terrenos periféricos por la ciudad."
  - "Formación de barrios con servicios deficientes."

explicacion: |
  El proceso suele iniciar con la migración, seguido por el aumento de población, la expansión física de la ciudad y, finalmente, la consolidación de barrios precarios por la falta de servicios.
```

### 15 — El dilema urbano

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["dualidad", "urbanismo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["positiva", "acceso a educación"], ["negativa", "hacinamiento"]]

respuesta: uno_de(casos[caso_idx])
tipo: mc
opciones_explicitas: ["positiva", "acceso a educación", "negativa", "hacinamiento"]

enunciado: "La urbanización es un proceso dual: puede tener una consecuencia {casos[caso_idx][0]} como el {casos[caso_idx][1]}."

explicacion: |
  La urbanización presenta una dualidad: por un lado, ofrece ventajas como el acceso a educación y salud; por otro, presenta desafíos como el hacinamiento y la falta de servicios.
```

### 16 — El gran cambio demográfico

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["demografia", "urbanizacion"]

respuesta: "urbana"
tipo: completar
tolerancia_abs: 0

enunciado: "Históricamente, la mayor parte de la población mundial vivía en entornos de carácter _____, pero en la actualidad la tendencia se ha invertido."

explicacion: |
  La transición de una sociedad mayoritariamente rural a una urbana es uno de los procesos demográficos más significativos de la historia moderna.
```

### 17 — Distribución de la población

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["poblacion", "ciudades"]

variables:
  idx: uno_de([0, 1])
  datos: [[55, "más de la mitad"], [50, "exactamente la mitad"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["menos de la mitad", "exactamente la mitad", "más de la mitad", "casi la totalidad"]

enunciado: "En la actualidad, la población mundial es, aproximadamente, {datos[idx][1]} urbana."

explicacion: |
  Hoy en día, la tendencia global muestra que la población urbana ha superado el umbral del 50% de la población total del planeta.
```

### 18 — Procesos de urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["migracion", "causas"]

respuesta_orden: ["Migración rural", "Industrialización", "Crecimiento natural urbano"]
tipo: ordenar

opciones_explicitas: ["Migración rural", "Industrialización", "Crecimiento natural urbano"]

enunciado: "Ordene cronológicamente los factores que impulsaron el crecimiento de las ciudades en la era moderna:"

explicacion: |
  El proceso comenzó con la migración del campo a la ciudad por la industrialización, seguido por el crecimiento demográfico dentro de las propias ciudades.
```

### 19 — El perfil de la ciudad moderna

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["densidad", "urbanismo"]

respuesta: "densidad"
tipo: completar
respuestas_validas:
  - "densidad"
  - "extensión"
  - "clima"

enunciado: "El fenómeno de la urbanización implica una mayor ___ de población en áreas delimitadas en comparación con las zonas rurales."

explicacion: |
  La concentración de personas en núcleos urbanos genera un aumento en la densidad poblacional, lo que requiere infraestructuras más complejas.
```

### 20 — Tendencias de crecimiento

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["proyecciones", "globalizacion"]

respuesta: "aumentará"
tipo: mc
opciones_explicitas: ["aumentará", "disminuirá", "se mantendrá igual", "desaparecerá"]

enunciado: "Según las proyecciones de la ONU, la proporción de la población mundial que vive en ciudades ___ en las próximas décadas."

explicacion: |
  Se espera que el proceso de urbanización continúe, especialmente en países en vías de desarrollo, llevando la cifra urbana aún más arriba del 60% o 70%.
```

### 21 — Causas de la migración rural

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["migracion", "causas"]

variables:
  datos: [["La falta de infraestructura sanitaria y servicios de salud en el campo", "Mejorar la calidad de vida"], ["La mecanización de la agricultura que reduce la demanda de mano de obra", "Búsqueda de empleo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mejorar la calidad de vida", "Búsqueda de empleo", "Aumento de la densidad poblacional", "Contaminación acústica"]

enunciado: "En el siguiente caso: {datos[idx][0]}, ¿cuál es la causa principal que impulsa la migración hacia la ciudad?"

explicacion: |
  La migración suele ser motivada por factores de "expulsión" en el origen (falta de servicios o empleo) y factores de "atracción" en el destino.
```

### 22 — Consecuencias de la urbanización rápida

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["consecuencias", "urbanismo"]

variables:
  datos: [["El crecimiento descontrolado de la periferia urbana", "Crecimiento de asentamientos informales"], ["La llegada masiva de personas en un corto periodo", "Saturación de los servicios públicos"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Crecimiento de asentamientos informales", "Saturación de los servicios públicos", "Reducción de la contaminación", "Descentralización económica"]

enunciado: "Analice el siguiente fenómeno: {datos[idx][0]}. ¿Cuál es una consecuencia directa de este proceso?"

explicacion: |
  Cuando la urbanización supera la capacidad de planificación de la ciudad, se producen problemas de infraestructura y servicios.
```

### 23 — Factores de atracción urbana

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["factores_atracción"]

respuesta: "oferta educativa"
tipo: completar
respuestas_validas:
  - "oferta educativa"
  - "centros de salud"
  - "empleo industrial"

enunciado: "Uno de los principales factores de atracción de las grandes urbes para la población joven es la mayor ___."

explicacion: |
  Las ciudades concentran instituciones de enseñanza superior y técnica que no están disponibles en zonas rurales.
```

### 24 — Procesos de urbanización

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["procesos", "secuencia"]

respuesta_orden: ["Éxodo rural", "Crecimiento de la ciudad", "Expansión de la periferia"]
tipo: ordenar
opciones_explicitas: ["Éxodo rural", "Crecimiento de la ciudad", "Expansión de la periferia"]

enunciado: "Ordene cronológicamente los procesos que caracterizan un proceso de urbanización acelerado:"

explicacion: |
  Primero ocurre el movimiento de población (éxodo), luego la ciudad se densifica y finalmente se expande hacia los bordes.
```

### 25 — Impacto ambiental urbano

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["impacto_ambiental"]

variables:
  datos: [["La impermeabilización de suelos por el asfalto", "Aumento de la temperatura urbana"], ["La concentración de vehículos en el centro", "Creación de islas de calor"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Aumento de la temperatura urbana", "Creación de islas de calor", "Disminución de la huella de carbono", "Aumento de la biodiversidad"]

enunciado: "Si observamos que {datos[idx][0]}, el fenómeno climático urbano resultante es el/la ___."

explicacion: |
  La sustitución de vegetación por materiales urbanos retiene el calor, generando el efecto de isla de calor.
```
