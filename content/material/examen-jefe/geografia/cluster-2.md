# Examen jefe — [PENDIENTE #797]

> Logro #797. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **107 preguntas totales** en 5/5 secciones.

---

## Sección: orientacion-puntos-cardinales (22 preguntas)

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "vocabulario"]

enunciado: "¿Cuáles son los cuatro puntos cardinales?"
tipo: mc
opciones_explicitas:
  - "Norte, Sur, Este, Oeste"
  - "Arriba, Abajo, Izquierda, Derecha"
  - "Norte, Sur, Noreste, Sudoeste"
respuesta: "Norte, Sur, Este, Oeste"

explicacion: |
  Son los cuatro puntos fijos de referencia, a diferencia de
  izquierda/derecha que dependen de hacia dónde mira el observador.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "opuestos"]

enunciado: "¿Cuál es el punto cardinal opuesto al norte?"
tipo: mc
opciones_explicitas:
  - "Sur"
  - "Este"
  - "Oeste"
respuesta: "Sur"

explicacion: |
  Norte y sur son opuestos entre sí, igual que este y oeste.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "opuestos"]

enunciado: "¿Cuál es el punto cardinal opuesto al este?"
tipo: mc
opciones_explicitas:
  - "Oeste"
  - "Norte"
  - "Sur"
respuesta: "Oeste"

explicacion: |
  El este es por donde sale el Sol; el oeste, por donde se pone.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "sol"]

enunciado: "¿Por qué punto cardinal sale el Sol?"
tipo: mc
opciones_explicitas:
  - "Este"
  - "Oeste"
  - "Norte"
respuesta: "Este"

explicacion: |
  El Sol sale por el este y se pone por el oeste, en cualquier
  hemisferio.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "sol"]

enunciado: "¿Por qué punto cardinal se pone el Sol?"
tipo: mc
opciones_explicitas:
  - "Oeste"
  - "Este"
  - "Sur"
respuesta: "Oeste"

explicacion: |
  Se pone por el oeste, opuesto al este por donde sale.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el norte y el este?"
tipo: mc
opciones_explicitas:
  - "Noreste"
  - "Sudeste"
  - "Noroeste"
respuesta: "Noreste"

explicacion: |
  Se nombra combinando los dos cardinales que rodean al punto
  intermedio: Norte + Este = Noreste.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el sur y el este?"
tipo: mc
opciones_explicitas:
  - "Sudeste"
  - "Noreste"
  - "Sudoeste"
respuesta: "Sudeste"

explicacion: |
  Sur + Este = Sudeste.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el sur y el oeste?"
tipo: mc
opciones_explicitas:
  - "Sudoeste"
  - "Noroeste"
  - "Sudeste"
respuesta: "Sudoeste"

explicacion: |
  Sur + Oeste = Sudoeste.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "colaterales"]

enunciado: "¿Cómo se llama el punto intermedio entre el norte y el oeste?"
tipo: mc
opciones_explicitas:
  - "Noroeste"
  - "Noreste"
  - "Sudoeste"
respuesta: "Noroeste"

explicacion: |
  Norte + Oeste = Noroeste.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "rosa_de_los_vientos"]

enunciado: "Contando los 4 cardinales y los 4 intermedios, ¿cuántos puntos tiene la rosa de los vientos básica?"
tipo: input
respuesta: 8

explicacion: |
  4 cardinales (N, S, E, O) + 4 colaterales (NE, SE, SO, NO) = 8 puntos.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "angulos"]

enunciado: "¿Cuántos grados hay entre el norte y el este, medidos en la rosa de los vientos?"
tipo: input
respuesta: 90

explicacion: |
  Los 4 cardinales dividen el círculo completo (360°) en 4 partes
  iguales de 90° cada una.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "angulos"]

enunciado: "¿Cuántos grados hay entre el norte y su opuesto, el sur?"
tipo: input
respuesta: 180

explicacion: |
  Dos puntos opuestos están separados por media vuelta completa: 180°.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "angulos"]

enunciado: "¿Cuántos grados tiene un giro completo (los 8 puntos de la rosa de los vientos, ida y vuelta al norte)?"
tipo: input
respuesta: 360

explicacion: |
  Un círculo completo siempre tiene 360°.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "avanzado"
  tags: ["orientacion", "angulos"]

variables:
  total_puntos: 8
  grados_totales: 360

respuesta: grados_totales / total_puntos
tipo: input

enunciado: "Si la rosa de los vientos de 8 puntos divide el círculo en partes iguales, ¿cuántos grados separan a cada punto del siguiente (ej.: de norte a noreste)?"

pasos:
  - "{grados_totales}° ÷ {total_puntos} puntos"

explicacion: |
  360° repartidos en 8 puntos iguales dan 45° entre cada punto y el
  siguiente.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "brujula"]

enunciado: "La aguja imantada de una brújula se alinea sola con el campo magnético terrestre y señala el norte."
tipo: vf
respuesta: verdadero

explicacion: |
  Es el principio físico detrás de toda brújula: la aguja es un imán
  chico que reacciona al campo magnético de la Tierra.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "relativo_absoluto"]

enunciado: "\"Izquierda\" y \"derecha\" son referencias absolutas, iguales para cualquier persona sin importar hacia dónde mire."
tipo: vf
respuesta: falso

explicacion: |
  Son referencias relativas: dependen de hacia dónde mira quien habla,
  y cambian si esa persona se da vuelta. Los cardinales, en cambio, son
  absolutos.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "relativo_absoluto"]

enunciado: "El norte geográfico es el mismo punto fijo sin importar hacia dónde mire la persona que lo señala."
tipo: vf
respuesta: verdadero

explicacion: |
  Por eso los cardinales son la referencia usada en mapas y
  navegación: no dependen del observador.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "sol", "hemisferios"]

enunciado: "En Argentina (hemisferio sur), al mediodía el Sol queda aproximadamente hacia el..."
tipo: mc
opciones_explicitas:
  - "Norte"
  - "Sur"
  - "Este"
respuesta: "Norte"

explicacion: |
  En el hemisferio sur, al mediodía el Sol queda hacia el norte
  (al revés que en el hemisferio norte, donde queda hacia el sur).
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "basico"
  tags: ["orientacion", "mapas"]

enunciado: "¿Para qué sirve la rosa de los vientos dibujada en un mapa?"
tipo: mc
opciones_explicitas:
  - "Para indicar hacia dónde apunta el norte del mapa"
  - "Para indicar la escala del mapa"
  - "Para indicar la fecha en que se hizo el mapa"
respuesta: "Para indicar hacia dónde apunta el norte del mapa"

explicacion: |
  Sin esa referencia, no se puede relacionar lo dibujado con el
  territorio real: un mapa girado es ilegible aunque tenga toda la
  información correcta.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "hemisferios"]

enunciado: "¿Qué referencia estelar se usa en el hemisferio sur para aproximar el sur de noche?"
tipo: mc
opciones_explicitas:
  - "La Cruz del Sur"
  - "La Estrella Polar"
  - "La Osa Mayor"
respuesta: "La Cruz del Sur"

explicacion: |
  La Estrella Polar es la referencia del hemisferio norte; en el sur
  no hay una estrella tan cercana al polo, se usa la Cruz del Sur.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "avanzado"
  tags: ["orientacion", "rosa_de_los_vientos"]

enunciado: "Ordená estos 4 puntos empezando desde el norte y avanzando en sentido horario: Este, Norte, Oeste, Sur."
tipo: ordenar
opciones_explicitas:
  - "Norte"
  - "Este"
  - "Sur"
  - "Oeste"
respuesta_orden: ["Norte", "Este", "Sur", "Oeste"]

explicacion: |
  En sentido horario desde el norte: Norte → Este → Sur → Oeste →
  vuelta al Norte.
```

```
metadata:
  materia: "geografia"
  tema: "orientacion_puntos_cardinales"
  nivel: "intermedio"
  tags: ["orientacion", "colaterales"]

enunciado: "El noreste (NE) es el punto intermedio entre..."
tipo: mc
opciones_explicitas:
  - "Norte y Este"
  - "Norte y Oeste"
  - "Sur y Este"
respuesta: "Norte y Este"

explicacion: |
  El nombre combina los dos cardinales entre los que está: Norte y
  Este.
```

## Sección: urbanizacion-migracion-ciudad (25 preguntas)

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

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["migracion", "causas"]

respuesta: "atracción por empleos industriales"
tipo: mc
opciones_explicitas: ["falta de tierras y mecanización agrícola", "atracción por empleos industriales", "Crecimiento natural de la población urbana", "Políticas de vivienda"]

enunciado: "En un contexto de urbanización acelerada, un factor de \"atracción\" (pull) que impulsa la migración desde el campo hacia la ciudad es: ___."

explicacion: |
  La migración suele responder a un factor de "expulsión" (lo que sucede en el origen) y un factor de "atracción" (lo que ofrece el destino).
```

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

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["procesos", "urbanismo"]

respuesta_orden: ["Consolidación del núcleo urbano", "Crecimiento de la zona industrial", "Densificación del centro", "Expansión de la periferia"]
tipo: ordenar
opciones_explicitas: ["Expansión de la periferia", "Densificación del centro", "Crecimiento de la zona industrial", "Consolidación del núcleo urbano"]

enunciado: "Ordena cronológicamente las fases típicas de una ciudad que experimenta un crecimiento acelerado por la industrialización:"

explicacion: |
  El proceso suele comenzar con un núcleo consolidado, seguido por la creación de zonas industriales, la densificación del centro para albergar trabajadores y, finalmente, la expansión hacia la periferia.
```

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "basico"
  tags: ["consecuencias", "social"]

respuesta: "Desigualdad social"
tipo: mc
opciones_explicitas: ["Crecimiento demográfico natural", "Desigualdad social", "Despoblación de las metrópolis", "Migración estacional"]

enunciado: "Un efecto común de la urbanización rápida y descontrolada es: ___."

explicacion: |
  Cuando la población urbana crece más rápido que la capacidad de la ciudad para proveer servicios y vivienda, surgen problemas como el hacinamiento o la falta de infraestructura.
```

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

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["urbanizacion", "crecimiento"]

tipo: mc
opciones_explicitas: ["crecimiento_planificado", "crecimiento_desordenado"]
respuesta: "crecimiento_desordenado"

enunciado: "Cuando la migración hacia la ciudad es masiva y rápida, suele producirse un ___ que genera problemas de vivienda."

explicacion: |
  El crecimiento desordenado ocurre cuando la infraestructura urbana no puede seguir el ritmo de la llegada de nuevos habitantes, derivando en asentamientos informales.
```

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
respuesta_orden: ["Dificultades económicas en el sector rural", "Búsqueda de empleo en la ciudad", "Asentamiento en la periferia urbana"]
```

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["economia", "servicios"]

tipo: mc
opciones_explicitas: ["alta densidad", "baja densidad"]
respuesta: "alta densidad"

enunciado: "La llegada masiva de personas a las urbes provoca un aumento de la ___ en los centros urbanos."

explicacion: |
  La concentración de población en áreas limitadas aumenta la densidad demográfica, lo que puede sobrecargar los servicios públicos y el mercado laboral.
```

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

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["consecuencias", "barrios_precarios"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["crecimiento de asentamientos informales", "falta de planificación urbana"], ["aumento de la contaminación", "congestión vehicular"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["crecimiento de asentamientos informales", "falta de planificación urbana", "aumento de la contaminación", "congestión vehicular"]

enunciado: "La expansión descontrolada de la mancha urbana hacia las periferias suele derivar en ___."

explicacion: |
  La falta de regulación y el rápido crecimiento demográfico llevan a la formación de barrios precarios o asentamientos informales en zonas no planificadas.
```

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

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "avanzado"
  tags: ["dualidad", "urbanismo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["positiva", "acceso a educación"], ["negativa", "hacinamiento"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["positiva", "acceso a educación", "negativa", "hacinamiento"]

enunciado: "La urbanización es un proceso dual: puede tener una consecuencia {casos[caso_idx][0]} como el ___."

explicacion: |
  La urbanización presenta una dualidad: por un lado, ofrece ventajas como el acceso a educación y salud; por otro, presenta desafíos como el hacinamiento y la falta de servicios.
```

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

enunciado: "En la actualidad, la población mundial es, aproximadamente, ___ urbana."

explicacion: |
  Hoy en día, la tendencia global muestra que la población urbana ha superado el umbral del 50% de la población total del planeta.
```

```
metadata:
  materia: "geografia"
  tema: "urbanizacion_migracion_ciudad"
  nivel: "intermedio"
  tags: ["migracion", "causas"]

respuesta_orden: ["Industrialización", "Migración rural", "Crecimiento natural urbano"]
tipo: ordenar

opciones_explicitas: ["Migración rural", "Industrialización", "Crecimiento natural urbano"]

enunciado: "Ordene cronológicamente los factores que impulsaron el crecimiento de las ciudades en la era moderna:"

explicacion: |
  El proceso comenzó con la migración del campo a la ciudad por la industrialización, seguido por el crecimiento demográfico dentro de las propias ciudades.
```

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

## Sección: mapa-plano-escala (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "¿Cuál es la diferencia principal entre un plano y un mapa?"
tipo: mc
opciones_explicitas:
  - "El plano representa un espacio chico donde la curvatura terrestre no importa; el mapa representa un espacio grande donde sí"
  - "El plano usa colores y el mapa no"
  - "No hay diferencia, son sinónimos exactos"
respuesta: "El plano representa un espacio chico donde la curvatura terrestre no importa; el mapa representa un espacio grande donde sí"

explicacion: |
  Un plano de una casa o un barrio puede tratar la superficie como
  plana; un mapa de un país o el mundo tiene que lidiar con la
  curvatura real de la Tierra.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "¿Cuál de estos ejemplos es más probable que se represente con un plano en vez de un mapa?"
tipo: mc
opciones_explicitas:
  - "El interior de un shopping"
  - "Los países de Sudamérica"
  - "El mundo entero"
respuesta: "El interior de un shopping"

explicacion: |
  Un espacio chico y de detalle fino (un edificio, un barrio) se
  representa con un plano.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "¿Qué muestra principalmente un mapa político?"
tipo: mc
opciones_explicitas:
  - "Límites entre países o provincias y sus capitales"
  - "El relieve del terreno"
  - "La densidad de población"
respuesta: "Límites entre países o provincias y sus capitales"

explicacion: |
  El mapa político representa la división administrativa del espacio,
  no su forma natural ni datos estadísticos.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "¿Qué muestra principalmente un mapa físico?"
tipo: mc
opciones_explicitas:
  - "El relieve: montañas, llanuras, ríos y costas"
  - "Los límites entre países"
  - "El resultado de una elección por región"
respuesta: "El relieve: montañas, llanuras, ríos y costas"

explicacion: |
  El mapa físico muestra la forma natural del terreno, sin límites
  administrativos.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Un mapa que muestra la densidad de población de cada provincia con distintos colores es un ejemplo de mapa..."
tipo: mc
opciones_explicitas:
  - "Temático"
  - "Físico"
  - "Político"
respuesta: "Temático"

explicacion: |
  Un mapa temático muestra un dato específico distribuido en el
  espacio — en este caso, densidad de población.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "Un buen mapa siempre muestra toda la información posible del territorio (relieve, límites políticos, población, clima) a la vez."
tipo: vf
respuesta: falso

explicacion: |
  Cada tipo de mapa elige qué información representar y descarta el
  resto — mostrar todo a la vez saturaría la lectura.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["escala", "vocabulario"]

enunciado: "¿Qué es la escala de un mapa?"
tipo: mc
opciones_explicitas:
  - "La relación entre el tamaño representado en el mapa y el tamaño real del territorio"
  - "La cantidad de colores usados en el mapa"
  - "El año en que se hizo el mapa"
respuesta: "La relación entre el tamaño representado en el mapa y el tamaño real del territorio"

explicacion: |
  Todo mapa reduce el territorio real para que entre en una hoja o
  pantalla; la escala indica en qué proporción.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["escala"]

enunciado: "Una escala escrita como 1:100.000 significa que..."
tipo: mc
opciones_explicitas:
  - "1 unidad en el mapa equivale a 100.000 de esas mismas unidades en la realidad"
  - "El mapa tiene 100.000 kilómetros de ancho"
  - "El mapa se hizo con 100.000 mediciones distintas"
respuesta: "1 unidad en el mapa equivale a 100.000 de esas mismas unidades en la realidad"

explicacion: |
  Es una razón: por cada unidad de longitud en el papel, hay 100.000
  unidades iguales en el territorio real.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["escala"]

enunciado: "¿Qué es una escala gráfica?"
tipo: mc
opciones_explicitas:
  - "Una barra dibujada en el mapa con marcas de distancias reales"
  - "Un número que indica cuántos colores tiene el mapa"
  - "La cantidad de países que aparecen en el mapa"
respuesta: "Una barra dibujada en el mapa con marcas de distancias reales"

explicacion: |
  Es una representación visual de la escala, útil porque se agranda o
  achica junto con el mapa si éste cambia de tamaño.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["escala"]

enunciado: "¿Por qué una escala gráfica sigue siendo correcta después de fotocopiar el mapa agrandado, mientras que la escala numérica deja de serlo?"
tipo: mc
opciones_explicitas:
  - "Porque la barra gráfica se agranda junto con el mapa; el número de la escala numérica no cambia solo"
  - "Porque la escala gráfica no depende del tamaño del mapa"
  - "Porque la escala numérica es siempre más precisa"
respuesta: "Porque la barra gráfica se agranda junto con el mapa; el número de la escala numérica no cambia solo"

explicacion: |
  Al fotocopiar agrandado, la barra dibujada crece en la misma
  proporción que todo el mapa y sigue midiendo lo correcto; el "1:100.000"
  escrito queda igual aunque el mapa ya no sea ese tamaño.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["proyecciones"]

enunciado: "Existe una forma de proyectar la superficie curva de la Tierra sobre un papel plano sin distorsionar nada."
tipo: vf
respuesta: falso

explicacion: |
  Es matemáticamente imposible: toda proyección distorsiona algo (forma,
  tamaño relativo, distancia o dirección) — no hay una perfecta.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "La proyección Mercator prioriza mantener las formas correctas (útil para navegación). ¿Qué distorsiona a cambio?"
tipo: mc
opciones_explicitas:
  - "El tamaño relativo de las áreas, agrandando mucho las zonas cercanas a los polos"
  - "Los límites políticos entre países"
  - "El nombre de los océanos"
respuesta: "El tamaño relativo de las áreas, agrandando mucho las zonas cercanas a los polos"

explicacion: |
  Por eso en un mapa Mercator Groenlandia se ve casi tan grande como
  África, cuando África es unas 14 veces más grande en la realidad.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "En la proyección Mercator, Groenlandia se ve casi del mismo tamaño que África. En la realidad, ¿cuál es más grande?"
tipo: mc
opciones_explicitas:
  - "África, ampliamente"
  - "Groenlandia, ampliamente"
  - "Son del mismo tamaño real"
respuesta: "África, ampliamente"

explicacion: |
  África es real unas 14 veces más grande que Groenlandia — la
  Mercator distorsiona el tamaño relativo para preservar las formas.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["plano_vs_mapa"]

enunciado: "¿Por qué el plano de un barrio no necesita ninguna proyección especial para la curvatura terrestre, pero un mapa del mundo sí?"
tipo: mc
opciones_explicitas:
  - "Porque en un área tan chica la curvatura de la Tierra es imperceptible"
  - "Porque los barrios no tienen curvatura"
  - "Porque los planos siempre son más precisos que los mapas"
respuesta: "Porque en un área tan chica la curvatura de la Tierra es imperceptible"

explicacion: |
  A escala de un barrio o ciudad, tratar la superficie como plana no
  genera un error perceptible; a escala de un continente, sí.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["lectura_de_mapas"]

enunciado: "¿Para qué sirve que un mapa incluya una rosa de los vientos o una flecha marcando el norte?"
tipo: mc
opciones_explicitas:
  - "Para poder relacionar lo dibujado con la orientación real del territorio"
  - "Para decorar el mapa"
  - "Para indicar la escala"
respuesta: "Para poder relacionar lo dibujado con la orientación real del territorio"

explicacion: |
  Sin esa referencia, un mapa girado respecto al terreno sería
  ilegible aunque tuviera toda la información correcta — por eso este
  tema depende de `../orientacion-puntos-cardinales/`.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Para planificar una ruta de trekking por zonas montañosas, ¿qué tipo de mapa es más útil?"
tipo: mc
opciones_explicitas:
  - "Un mapa físico, que muestra el relieve"
  - "Un mapa político, que muestra límites de países"
  - "Un mapa temático de resultados electorales"
respuesta: "Un mapa físico, que muestra el relieve"

explicacion: |
  El relieve (montañas, pendientes, ríos) es justo lo que un mapa
  físico representa.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Para saber a qué provincia pertenece una ciudad, ¿qué tipo de mapa es más útil?"
tipo: mc
opciones_explicitas:
  - "Un mapa político"
  - "Un mapa físico"
  - "Un mapa temático de clima"
respuesta: "Un mapa político"

explicacion: |
  Los límites administrativos (provincias, países) son lo que muestra
  un mapa político.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["escala"]

enunciado: "Si un mapa con escala numérica 1:50.000 se fotocopia agrandado al doble, ese \"1:50.000\" impreso sigue siendo la escala correcta de la fotocopia."
tipo: vf
respuesta: falso

explicacion: |
  Al agrandar el papel, la relación real entre lo dibujado y el
  territorio cambió, pero el número impreso quedó igual — por eso la
  escala numérica deja de ser confiable después de una ampliación o
  reducción, a diferencia de la gráfica.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "¿Existe una proyección cartográfica objetivamente \"mejor\" que las demás?"
tipo: mc
opciones_explicitas:
  - "No: cada una es un compromiso distinto entre qué preservar (forma o tamaño relativo) y qué sacrificar"
  - "Sí, la Mercator es la mejor en todos los casos"
  - "Sí, cualquier proyección moderna elimina toda distorsión"
respuesta: "No: cada una es un compromiso distinto entre qué preservar (forma o tamaño relativo) y qué sacrificar"

explicacion: |
  No existe una proyección perfecta — la elección depende de para qué
  se va a usar el mapa (navegar, comparar superficies, etc.).
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "Un dibujo que muestra las habitaciones de una casa con sus medidas es..."
tipo: mc
opciones_explicitas:
  - "Un plano"
  - "Un mapa físico"
  - "Un mapa temático"
respuesta: "Un plano"

explicacion: |
  Representa un espacio chico con nivel de detalle fino: es un plano,
  no un mapa.
```

## Sección: coordenadas-geograficas (20 preguntas)

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
  - "El paralelo y el meridiano correspondientes a esas coordenadas"
  - "Sólo el meridiano correspondiente a esa longitud"
  - "El ecuador y el meridiano de Greenwich, siempre"
respuesta: "El paralelo y el meridiano correspondientes a esas coordenadas"
explicacion: |
  El punto está en la intersección del paralelo correspondiente a esa
  latitud y el meridiano correspondiente a esa longitud.
```

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

## Sección: division-politica (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "basico"
  tags: ["division_politica", "vocabulario"]

enunciado: "¿Qué es la división política de un territorio?"
tipo: mc
opciones_explicitas:
  - "Cómo se organiza en unidades administrativas con gobierno propio, delimitadas por límites reconocidos"
  - "Cómo se distribuye el relieve del terreno"
  - "Cómo se reparte la vegetación natural"
respuesta: "Cómo se organiza en unidades administrativas con gobierno propio, delimitadas por límites reconocidos"

explicacion: |
  A diferencia del relieve o el clima (rasgos naturales), la división
  política es una construcción humana e histórica.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "basico"
  tags: ["jerarquia"]

enunciado: "¿Cuál es la unidad político-administrativa de mayor jerarquía, con gobierno propio y reconocimiento internacional?"
tipo: mc
opciones_explicitas:
  - "País / Estado nacional"
  - "Municipio"
  - "Región"
respuesta: "País / Estado nacional"

explicacion: |
  Es la unidad soberana; provincias y municipios son subdivisiones
  internas de un país.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "¿Cuántas provincias tiene Argentina, sin contar la Ciudad Autónoma de Buenos Aires?"
tipo: input
respuesta: 23

explicacion: |
  23 provincias más la Ciudad Autónoma de Buenos Aires, que tiene
  estatus especial (autonomía similar, pero no es una provincia).
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["argentina"]

enunciado: "¿La Ciudad Autónoma de Buenos Aires es una provincia argentina más?"
tipo: vf
respuesta: falso

explicacion: |
  Tiene un estatus especial con autonomía similar a una provincia,
  pero formalmente no es una de las 23 provincias.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["argentina", "jerarquia"]

enunciado: "En la mayoría de las provincias argentinas, ¿en qué se subdividen?"
tipo: mc
opciones_explicitas:
  - "Departamentos"
  - "Municipios directamente, sin nivel intermedio"
  - "Regiones culturales"
respuesta: "Departamentos"

explicacion: |
  La excepción es la provincia de Buenos Aires, que usa el nombre
  "partidos" en vez de "departamentos".
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "avanzado"
  tags: ["argentina"]

enunciado: "¿Cómo se llama la subdivisión que usa la provincia de Buenos Aires en vez de \"departamento\"?"
tipo: mc
opciones_explicitas:
  - "Partido"
  - "Comuna"
  - "Cantón"
respuesta: "Partido"

explicacion: |
  Es un nombre propio de esa provincia para la misma jerarquía que
  otras provincias llaman "departamento".
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "basico"
  tags: ["jerarquia"]

enunciado: "¿Cuál es generalmente la unidad de gobierno más cercana a la vida cotidiana (recolección de basura, alumbrado, tránsito local)?"
tipo: mc
opciones_explicitas:
  - "El municipio"
  - "El país"
  - "La región"
respuesta: "El municipio"

explicacion: |
  Es la subdivisión más chica de la jerarquía político-administrativa
  típica, la más cercana a los servicios diarios.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "avanzado"
  tags: ["limite_frontera"]

enunciado: "¿Cuál es la diferencia entre \"límite\" y \"frontera\"?"
tipo: mc
opciones_explicitas:
  - "El límite es la línea abstracta que separa jurisdicciones; la frontera es la zona real con infraestructura donde ese límite se hace tangible"
  - "Son exactamente sinónimos sin ningún matiz"
  - "El límite es sólo terrestre; la frontera es sólo marítima"
respuesta: "El límite es la línea abstracta que separa jurisdicciones; la frontera es la zona real con infraestructura donde ese límite se hace tangible"

explicacion: |
  Una frontera puede ser mucho más ancha que la línea exacta del
  límite (una zona con doble control, por ejemplo).
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["limites_naturales"]

enunciado: "El límite entre Argentina y Uruguay sigue en gran parte un accidente geográfico natural. ¿Cuál?"
tipo: mc
opciones_explicitas:
  - "El río Uruguay"
  - "La Cordillera de los Andes"
  - "El paralelo 40°"
respuesta: "El río Uruguay"

explicacion: |
  Es un ejemplo típico de límite natural, que sigue un curso de agua
  real en vez de una línea artificial trazada por decisión política.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["limites_naturales"]

enunciado: "El límite entre Argentina y Chile sigue en gran parte una cordillera, por la línea de las altas cumbres. ¿Cuál cordillera?"
tipo: mc
opciones_explicitas:
  - "La Cordillera de los Andes"
  - "Los Alpes"
  - "El Himalaya"
respuesta: "La Cordillera de los Andes"

explicacion: |
  Es otro ejemplo de límite natural: sigue un rasgo del relieve, no una
  línea artificial.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["limites_artificiales"]

enunciado: "¿Qué es un límite artificial?"
tipo: mc
opciones_explicitas:
  - "Una línea que no sigue ningún accidente geográfico, trazada por tratado o decisión política"
  - "Un límite que sigue un río"
  - "Un límite marcado por una cordillera"
respuesta: "Una línea que no sigue ningún accidente geográfico, trazada por tratado o decisión política"

explicacion: |
  Suelen ser rectas o seguir un paralelo/meridiano — herencia de
  acuerdos que no tuvieron en cuenta rasgos del territorio.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "avanzado"
  tags: ["limites_artificiales"]

enunciado: "¿En qué región del mundo son especialmente comunes los límites artificiales, herencia de acuerdos coloniales que no tuvieron en cuenta a las poblaciones locales?"
tipo: mc
opciones_explicitas:
  - "África"
  - "Europa occidental"
  - "El sudeste asiático insular"
respuesta: "África"

explicacion: |
  Muchos límites africanos son líneas rectas trazadas en tratados
  europeos del siglo XIX sin considerar pueblos ni geografía real.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "basico"
  tags: ["division_politica"]

enunciado: "La división política de un territorio es un rasgo natural, igual que el relieve o el clima, y no cambia con el tiempo."
tipo: vf
respuesta: falso

explicacion: |
  Es una construcción humana e histórica: puede cambiar por tratados,
  guerras o decisiones internas, a diferencia del relieve o el clima.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "¿En qué se diferencia la división política de una región (agrupar territorio por rasgos compartidos)?"
tipo: mc
opciones_explicitas:
  - "La división política tiene límites oficiales y gobierno reconocido; una región puede no tener ninguno de los dos"
  - "Son exactamente lo mismo"
  - "Una región siempre coincide con los límites de un país"
respuesta: "La división política tiene límites oficiales y gobierno reconocido; una región puede no tener ninguno de los dos"

explicacion: |
  Una región cultural, por ejemplo, puede atravesar varios países sin
  cambiar ningún límite político.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "avanzado"
  tags: ["jerarquia"]

enunciado: "¿El grado de autonomía de una \"provincia\" o \"estado\" (subdivisión interna de un país) es siempre igual en todos los países?"
tipo: vf
respuesta: falso

explicacion: |
  Varía mucho: desde provincias con constitución propia (como en
  Argentina) hasta divisiones puramente administrativas sin poder
  político real en otros países.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "basico"
  tags: ["jerarquia"]

enunciado: "¿Qué es la \"capital\" de un país o una provincia?"
tipo: mc
opciones_explicitas:
  - "La ciudad sede del gobierno de ese nivel administrativo"
  - "La ciudad con más población de ese territorio, siempre"
  - "El límite más al norte de ese territorio"
respuesta: "La ciudad sede del gobierno de ese nivel administrativo"

explicacion: |
  No siempre coincide con la ciudad más poblada (ej.: la capital
  nacional de Argentina, Buenos Aires, sí es la más poblada, pero en
  otros países la capital y la ciudad más grande son distintas).
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "avanzado"
  tags: ["limite_frontera"]

enunciado: "¿Puede una \"zona de frontera\" ser más ancha que la línea exacta del límite entre dos países?"
tipo: vf
respuesta: verdadero

explicacion: |
  Una zona de frontera con pasos, aduana y doble control puede
  extenderse varios kilómetros a cada lado de la línea exacta del
  límite.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["division_politica"]

enunciado: "¿Qué distingue a un país / Estado nacional de una provincia o municipio en la jerarquía político-administrativa?"
tipo: mc
opciones_explicitas:
  - "El país es la unidad soberana, con reconocimiento internacional; las demás son subdivisiones internas"
  - "El país es siempre la unidad más chica"
  - "No hay ninguna diferencia jerárquica entre ellos"
respuesta: "El país es la unidad soberana, con reconocimiento internacional; las demás son subdivisiones internas"

explicacion: |
  La soberanía y el reconocimiento internacional son lo que distingue
  al país de cualquier subdivisión interna.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["jerarquia"]

enunciado: "Ordená de mayor a menor jerarquía: Municipio, País, Provincia."
tipo: ordenar
opciones_explicitas:
  - "País"
  - "Provincia"
  - "Municipio"
respuesta_orden: ["País", "Provincia", "Municipio"]

explicacion: |
  De mayor a menor escala: País → Provincia (o estado/departamento) →
  Municipio.
```

```
metadata:
  materia: "geografia"
  tema: "division_politica"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Por qué distinguir un límite internacional de uno provincial en un mapa presupone ya saber leer un mapa político y su escala?"
tipo: mc
opciones_explicitas:
  - "Porque sin saber leer los símbolos y la escala del mapa no se puede identificar dónde empieza y termina cada jurisdicción"
  - "Porque los límites internacionales nunca aparecen en mapas políticos"
  - "Porque la escala determina el nombre del país"
respuesta: "Porque sin saber leer los símbolos y la escala del mapa no se puede identificar dónde empieza y termina cada jurisdicción"

explicacion: |
  Es la razón por la que `division-politica/` depende de
  `../mapa-plano-escala/` en `../dependencias.md`.
```

