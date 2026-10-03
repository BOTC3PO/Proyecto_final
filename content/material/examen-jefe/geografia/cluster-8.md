# Examen jefe — [PENDIENTE #803]

> Logro #803. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **130 preguntas totales** en 5/5 secciones.

---

## Sección: riesgos-naturales-argentinos (24 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sequia", "clima"]

variables:
  region1: uno_de(["NOA", "Cuyo"])
  region2: uno_de(["NOA", "Cuyo"])

respuesta: "NOA y Cuyo"
tipo: input

enunciado: "Identifica las dos grandes regiones de Argentina donde la aridez es una característica estructural y la sequía afecta principalmente a la producción agropecuaria."

explicacion: |
  El NOA y Cuyo son regiones áridas por naturaleza, donde la sequía es un riesgo constante vinculado también a cambios climáticos globales.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["granizo", "economia"]

variables:
  sector: uno_de(["agricultura", "ganadería"])

respuesta: "agricultura"
tipo: input

enunciado: "El granizo, asociado a las tormentas severas del norte, causa daños significativos principalmente al sector de {sector}."

explicacion: |
  El texto indica que el granizo puede causar daños significativos en la agricultura, sector vital para la economía nacional.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "patagonia"]

variables:
  zona: uno_de(["Patagonia", "costa atlántica"])

respuesta: "Patagonia"
tipo: input

enunciado: "Los ciclones extratropicales generan lluvias torrenciales y vientos fuertes en el sur del país, especialmente en {zona} y la costa atlántica."

explicacion: |
  Los ciclones extratropicales influyen fuertemente en la Patagonia y la costa atlántica, afectando la navegación y la vida costera.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["dinamica", "territorio"]

variables:
  estado: falso

respuesta: falso
tipo: vf

enunciado: "La geografía argentina es estática y no está sujeta a fuerzas tectónicas, atmosféricas o hidrológicas que interactúen con el espacio habitado."

explicacion: |
  Falso. La geografía argentina no es estática; está sujeta constantemente a fuerzas tectónicas, atmosféricas y hidrológicas.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["planificacion", "gestion"]

variables:
  objetivo: uno_de(["reducir vulnerabilidad", "aumentar densidad"])

respuesta: "reducir vulnerabilidad"
tipo: input

enunciado: "El estudio de los riesgos naturales permite tomar decisiones informadas para {objetivo} social y económica, transformando el conocimiento geográfico en protección civil."

explicacion: |
  Comprender los riesgos permite reducir la vulnerabilidad social y económica mediante la planificación del territorio.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["sismos", "magnitud"]

variables:
  factor1: "profundidad del hipocentro"
  factor2: "distancia al epicentro"

respuesta: "profundidad del hipocentro"
tipo: input

enunciado: "La magnitud de los efectos de un sismo depende de la {factor1} y de la distancia al epicentro, exigiendo normas antisísmicas estrictas."

explicacion: |
  La magnitud y los efectos dependen de factores como la profundidad del hipocentro y la distancia al epicentro.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "comparacion"]

variables:
  intensidad: "menos intensos"

respuesta: "menos intensos"
tipo: input

enunciado: "Los ciclones extratropicales son {intensidad} que los huracanes tropicales, pero aún así generan lluvias torrenciales en el sur."

explicacion: |
  A diferencia de los huracanes, los ciclones extratropicales son menos intensos, pero peligrosos por sus lluvias y vientos en el sur.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["vulnerabilidad", "gestion"]

variables:
  riesgo: uno_de(["tornados", "inundaciones"])

respuesta: "inundaciones"
tipo: input

enunciado: "Conocer dónde ocurren fenómenos como los tornados o las {riesgo} es fundamental para reducir la vulnerabilidad social y económica."

explicacion: |
  El conocimiento de la ubicación y causa de riesgos como inundaciones y tornados es clave para la reducción de vulnerabilidad.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sequia", "cambio_climatico"]

variables:
  causa: "cambios en los patrones climáticos globales"

respuesta: "cambios en los patrones climáticos globales"
tipo: completar

enunciado: "La intensificación de las sequías recientes se vincula a {causa}, poniendo en riesgo el acceso al agua."

explicacion: |
  La intensificación de la sequía no es solo natural, sino que está vinculada a cambios en los patrones climáticos globales.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["tectonica", "placas"]

variables:
  placa: "Nazca"

respuesta: "Nazca"
tipo: input

enunciado: "La actividad sísmica en el occidente argentino se debe a la subducción de la placa {placa} bajo la placa Sudamericana."

explicacion: |
  La placa de Nazca se subduce bajo la placa Sudamericana, generando la actividad sísmica en el oeste argentino.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sismos", "ubicacion"]

variables:
  zona: uno_de(["occidente", "este"])

respuesta: "occidente"
tipo: input

enunciado: "La actividad sísmica es un riesgo permanente en el {zona} del país, debido a la dinámica de placas."

explicacion: |
  El occidente argentino es la zona de mayor riesgo sísmico debido a la subducción de la placa de Nazca.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["tornados", "agricultura"]

variables:
  efecto: "daños significativos"

respuesta: "daños significativos"
tipo: input

enunciado: "El granizo asociado a tormentas severas puede causar {efecto} en la agricultura, un sector vital para la economía nacional."

explicacion: |
  Las tormentas severas en el norte generan granizo que causa daños significativos a los cultivos agrícolas.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["tormentas", "atmosferica"]

variables:
  condicion: "inestabilidad atmosférica violenta"

respuesta: "inestabilidad atmosférica violenta"
tipo: completar

enunciado: "El choque de masas de aire genera una {condicion} que da lugar a tornados en el NEA."

explicacion: |
  El choque de masas de aire cálido y húmedo con frentes fríos crea inestabilidad atmosférica violenta.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["inundaciones", "hidrologia"]

variables:
  riesgo: "inundaciones"

respuesta: "inundaciones"
tipo: input

enunciado: "Además de los sismos, las {riesgo} son un riesgo hidrológico importante que debe ser gestionado mediante la planificación territorial."

explicacion: |
  Las inundaciones son un riesgo hidrológico clave, junto con los sismos, que requiere planificación para su gestión.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["sismos", "propagacion"]

variables:
  caracteristica: "no respetan fronteras"

respuesta: "no respetan fronteras"
tipo: input

enunciado: "Los sismos {caracteristica} provinciales, por lo que la gestión del riesgo debe ser interjurisdiccional."

explicacion: |
  Los sismos no respetan las fronteras provinciales, afectando áreas amplias independientemente de los límites administrativos.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sequia", "regiones"]

variables:
  region: uno_de(["NOA", "Cuyo"])

respuesta: "NOA"
tipo: input

enunciado: "La región del {region} presenta una aridez como característica estructural del clima, lo que la hace propensa a sequías."

explicacion: |
  El NOA y Cuyo son regiones con aridez estructural, lo que las hace vulnerables a la sequía.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["gestion", "emergencias"]

variables:
  accion: "prepararse"

respuesta: "prepararse"
tipo: input

enunciado: "Al conocer dónde y por qué ocurren los fenómenos naturales, podemos tomar decisiones para {accion} ante emergencias."

explicacion: |
  El conocimiento geográfico permite tomar decisiones informadas para prepararse ante emergencias y reducir riesgos.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "navegacion"]

variables:
  sector: "navegación"

respuesta: "navegación"
tipo: input

enunciado: "Los ciclones extratropicales influyen en la {sector} y la vida costera del sur del país."

explicacion: |
  Los ciclones en el sur afectan la navegación y la vida costera debido a sus lluvias y vientos fuertes.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["tectonica", "subduccion"]

variables:
  placa_superior: "Sudamericana"
  placa_inferior: "Nazca"

respuesta: "Nazca"
tipo: input

enunciado: "La placa {placa_inferior} se subduce bajo la placa {placa_superior}, generando la sismicidad en el occidente."

explicacion: |
  La placa de Nazca se subduce bajo la placa Sudamericana, causando la actividad sísmica en el oeste argentino.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["dimensiones", "clima"]

variables:
  dimension: "continentales"

respuesta: "continentales"
tipo: input

enunciado: "Argentina es un país de dimensiones {dimension} que atraviesa diversas zonas climáticas y geológicas."

explicacion: |
  Las dimensiones continentales de Argentina implican una gran variedad de zonas climáticas y geológicas expuestas a riesgos.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sostenibilidad", "planificacion"]

variables:
  objetivo: "desarrollo sostenible"

respuesta: "desarrollo sostenible"
tipo: input

enunciado: "Transformar el conocimiento geográfico en protección civil es fundamental para el {objetivo}."

explicacion: |
  La gestión de riesgos contribuye al desarrollo sostenible al proteger la población y el territorio.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sismos", "provincias"]

variables:
  prov1: uno_de(["Mendoza", "San Juan", "Catamarca"])
  prov2: uno_de(["Mendoza", "San Juan", "Catamarca"])

respuesta: "Mendoza"
tipo: input

enunciado: "Entre las provincias del NOA y Cuyo, {prov1} se encuentra en una zona de alta sismicidad."

explicacion: |
  Mendoza, San Juan y Catamarca son provincias del occidente con alta sismicidad por la subducción de la placa de Nazca.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["tormentas", "NEA"]

variables:
  region: "NEA"

respuesta: "NEA"
tipo: input

enunciado: "En el {region}, los tornados y tormentas severas son frecuentes debido a la inestabilidad atmosférica."

explicacion: |
  El NEA y el norte de la Pampa son regiones con frecuente actividad de tornados y tormentas severas.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sequia", "agua"]

variables:
  recurso: "acceso al agua"

respuesta: "acceso al agua"
tipo: input

enunciado: "La intensificación de las sequías pone en riesgo el {recurso} y la producción agropecuaria en el NOA y Cuyo."

explicacion: |
  Las sequías intensificadas amenazan el acceso al agua y la producción agrícola en las regiones áridas del país.
```

## Sección: trabajo-y-desempleo-mundial (21 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["desempleo", "estadisticas", "basico"]

variables:
  poblacion_activa: random(1000000, 50000000)
  desempleados: random(50000, floor(poblacion_activa / 10))

respuesta: redondear((desempleados / poblacion_activa) * 100, 2)
tipo: input

enunciado: "En un país con una población activa de {poblacion_activa} personas, se registran {desempleados} personas desempleadas. ¿Cuál es la tasa de desempleo expresada en porcentaje? (Redondear a 2 decimales)"

explicacion: |
  La tasa de desempleo se calcula dividiendo el número de desempleados entre la población activa y multiplicando por 100.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["desempleo", "tipos", "estructural"]

variables:
  sector: uno_de(["manufactura automotriz", "minería de carbón", "textil"])
  causa: uno_de(["automatización", "cambio tecnológico", "desplazamiento industrial"])

respuesta: "estructural"
tipo: input

enunciado: "Si en una región desaparecen los empleos en el sector de {sector} debido a la {causa}, ¿qué tipo de desempleo se está generando principalmente?"

explicacion: |
  El desempleo estructural ocurre cuando hay una desconexión entre las habilidades de los trabajadores y las necesidades del mercado, a menudo por cambios tecnológicos o industriales.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["desigualdad", "norte_sur", "estructura"]

variables:
  vacio1: "desarrollados"
  vacio2: "emergentes"

respuesta: "desarrollados emergentes"
tipo: completar

enunciado: "En las economías {vacio1}, el desafío suele ser el envejecimiento de la población, mientras que en las {vacio2} la demanda se desplaza hacia servicios avanzados y tecnología."

explicacion: |
  Se distingue entre países desarrollados (con poblaciones envejecidas) y emergentes (en transición tecnológica y de servicios).
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["poblacion", "activa", "calculos"]

variables:
  total_poblacion: random(10000000, 100000000)
  tasa_participacion: random_float(40, 70)
  poblacion_activa: floor(total_poblacion * (tasa_participacion / 100))

respuesta: poblacion_activa
tipo: input

enunciado: "Si un país tiene una población total de {total_poblacion} habitantes y una tasa de participación laboral del {tasa_participacion}%, ¿cuál es el tamaño aproximado de su población económicamente activa? (Resultado entero)"

explicacion: |
  La población activa se obtiene multiplicando la población total por la tasa de participación laboral.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["desempleo", "friccional", "transicion"]

variables:
  correcta_idx: random(0, 3)

opciones: 4
respuesta: correcta_idx
tipo: mc

enunciado: "¿Cuál de los siguientes factores está MÁS asociado directamente con el desempleo friccional?"

explicacion: |
  El desempleo friccional es temporal y ocurre cuando los trabajadores cambian de empleo o buscan su primera inserción laboral.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["informalidad", "derechos", "proteccion"]

variables:
  vacio1: "jubilación"
  vacio2: "enfermedad"

respuesta: "jubilación enfermedad"
tipo: completar

enunciado: "La informalidad laboral implica trabajar sin acceso a beneficios como la {vacio1} o las licencias por {vacio2}."

explicacion: |
  La falta de formalidad excluye al trabajador de la red de protección social básica.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["comparacion", "estadisticas", "diferencia"]

variables:
  tasa_pais_a: random_float(4, 12)
  tasa_pais_b: random_float(1, 6)
  diferencia: redondear(abs(tasa_pais_a - tasa_pais_b), 1)

respuesta: diferencia
tipo: input

enunciado: "El país A tiene una tasa de desempleo del {tasa_pais_a}% y el país B del {tasa_pais_b}%. ¿Cuál es la diferencia absoluta entre ambas tasas? (Redondear a 1 decimal)"

explicacion: |
  Se calcula la resta absoluta entre las dos tasas para comparar la magnitud del problema.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["informalidad", "sectores", "global"]

variables:
  correcta_idx: random(0, 3)

opciones: 4
respuesta: correcta_idx
tipo: mc

enunciado: "¿En qué región del mundo la economía informal representa una porción significativamente más grande de la actividad económica?"

explicacion: |
  América Latina, África y partes de Asia tienen tasas de informalidad muy altas comparadas con el Norte Global.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["conocimiento", "digitalizacion", "demanda"]

variables:
  vacio1: "servicios"
  vacio2: "innovacion"

respuesta: "servicios innovacion"
tipo: completar

enunciado: "La transición hacia una economía basada en el conocimiento ha desplazado la demanda hacia {vacio1} avanzados, tecnología e {vacio2}."

explicacion: |
  Las economías modernas priorizan el sector terciario avanzado y la I+D.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["informalidad", "calculos", "porcentaje"]

variables:
  trabajadores_formales: random(100000, 1000000)
  trabajadores_informales: random(50000, 500000)
  total: trabajadores_formales + trabajadores_informales
  porcentaje: redondear((trabajadores_informales / total) * 100, 1)

respuesta: porcentaje
tipo: input

enunciado: "Si en una ciudad hay {trabajadores_formales} trabajadores formales y {trabajadores_informales} informales, ¿qué porcentaje del total de la fuerza laboral está en la informalidad? (Redondear a 1 decimal)"

explicacion: |
  Se divide la cantidad de informales entre el total (formales + informales) y se multiplica por 100.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["informalidad", "consecuencias", "sociales"]

variables:
  correcta_idx: random(0, 3)

opciones: 4
respuesta: correcta_idx
tipo: mc

enunciado: "¿Cuál es una consecuencia directa de la alta informalidad laboral en términos de protección social?"

explicacion: |
  Los trabajadores informales carecen de indemnizaciones, licencias y acceso a jubilación.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "avanzado"
  tags: ["paradoja", "crecimiento", "calidad_vida"]

variables:
  vacio1: "riqueza"
  vacio2: "seguridad"

respuesta: "riqueza seguridad"
tipo: completar

enunciado: "Se crea una paradoja donde la {vacio1} nacional aumenta mientras la {vacio2} laboral individual disminuye en contextos de alta informalidad."

explicacion: |
  El PIB no refleja necesariamente el bienestar distribuido si la economía es informal.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["actividad", "calculos", "poblacion"]

variables:
  poblacion_activa: random(5000000, 20000000)
  poblacion_total: random(20000000, 80000000)
  tasa: redondear((poblacion_activa / poblacion_total) * 100, 2)

respuesta: tasa
tipo: input

enunciado: "Si la población activa es {poblacion_activa} y la población total es {poblacion_total}, ¿cuál es la tasa de actividad en porcentaje? (Redondear a 2 decimales)"

explicacion: |
  La tasa de actividad mide la proporción de la población total que participa en el mercado laboral.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["desempleo", "friccional", "definicion"]

variables:
  correcta_idx: random(0, 3)

opciones: 4
respuesta: correcta_idx
tipo: mc

enunciado: "El desempleo friccional se caracteriza principalmente por:"

explicacion: |
  Es temporal y surge de la búsqueda de empleo o transición entre trabajos, no por falta de puestos.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia", "demanda"]

variables:
  vacio1: "desplaza"
  vacio2: "reciclarse"

respuesta: "desplaza reciclarse"
tipo: completar

enunciado: "La demanda de habilidades se {vacio1} hacia la tecnología, generando dificultades para que los trabajadores {vacio2} rápidamente."

explicacion: |
  La velocidad del cambio tecnológico supera la capacidad de adaptación de algunos trabajadores.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["comparacion", "brecha", "global"]

variables:
  empleo_norte: random(60, 95)
  empleo_sur: random(40, 70)
  brecha: empleo_norte - empleo_sur

respuesta: brecha
tipo: input

enunciado: "Si la tasa de formalidad en el Norte Global es del {empleo_norte}% y en el Sur Global es del {empleo_sur}%, ¿cuál es la brecha en puntos porcentuales? (Resultado entero)"

explicacion: |
  Se resta la tasa menor de la mayor para cuantificar la desigualdad estructural.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["digitalizacion", "impacto", "mercado"]

variables:
  correcta_idx: random(0, 3)

opciones: 4
respuesta: correcta_idx
tipo: mc

enunciado: "La digitalización ha reconfigurado las necesidades de habilidades generando principalmente:"

explicacion: |
  Un desplazamiento hacia servicios avanzados y tecnología, dejando atrás empleos tradicionales.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["desempleo", "estructural", "causas"]

variables:
  vacio1: "habilidades"
  vacio2: "mercado"

respuesta: "habilidades mercado"
tipo: completar

enunciado: "En el desempleo estructural, los trabajadores pierden sus empleos porque sus {vacio1} ya no coinciden con las demandas del {vacio2}."

explicacion: |
  La raíz del problema es la incompatibilidad técnica entre oferta y demanda de trabajo.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["empleo", "calculos", "tasa"]

variables:
  empleados: random(500000, 5000000)
  poblacion_activa: random(600000, 6000000)
  tasa_empleo: redondear((empleados / poblacion_activa) * 100, 2)

respuesta: tasa_empleo
tipo: input

enunciado: "Si hay {empleados} personas empleadas y la población activa es de {poblacion_activa}, ¿cuál es la tasa de empleo en porcentaje? (Redondear a 2 decimales)"

explicacion: |
  La tasa de empleo es la proporción de la población activa que tiene trabajo.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "basico"
  tags: ["informalidad", "geografia", "regiones"]

variables:
  correcta_idx: random(0, 3)

opciones: 4
respuesta: correcta_idx
tipo: mc

enunciado: "¿Cuál de las siguientes regiones se menciona comúnmente por tener una porción significativa de actividad económica informal?"

explicacion: |
  América Latina, África y Asia son regiones con altos índices de informalidad.
```

```
metadata:
  materia: "Geografía"
  tema: "trabajo_y_desempleo_mundial"
  nivel: "intermedio"
  tags: ["desafios", "dinamica", "global"]

variables:
  vacio1: "desigualdad"
  vacio2: "precariación"

respuesta: "desigualdad precariación"
tipo: completar

enunciado: "El mercado laboral mundial se caracteriza por una profunda {vacio1}, donde algunos sectores enfrentan la {vacio2} de puestos tradicionales."

explicacion: |
  La dualidad del mercado laboral es un rasgo central de la geografía económica contemporánea.
```

## Sección: riesgos-ambientales-mundiales (24 preguntas)

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["componentes", "amenaza", "vulnerabilidad"]

variables:
  amenaza: random(1, 10)
  vulnerabilidad: random(1, 10)

respuesta: amenaza + " + " + vulnerabilidad
tipo: input

enunciado: "Si modelamos el riesgo como una función de la amenaza y la vulnerabilidad, y asignamos valores arbitrarios de {amenaza} y {vulnerabilidad}, ¿cuál es la suma conceptual de sus componentes principales?"

explicacion: |
  Aunque la fórmula real es compleja, conceptualmente el riesgo surge de la presencia simultánea de una amenaza y una vulnerabilidad. Esta pregunta verifica la comprensión de que ambos elementos son necesarios.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["ecosistemas", "humedales", "bosques"]

variables:
  ecosistema: uno_de(["humedales", "bosques"])

respuesta: "clave"
tipo: completar

enunciado: "Los {ecosistema} son considerados ecosistemas clave por su rol en la regulación hídrica y la biodiversidad."

explicacion: |
  Estos ecosistemas tienen una desproporción alta en su contribución a la estabilidad ambiental relativa a su tamaño o área.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["definicion", "riesgo"]

variables:
  a: random(10, 20)
  b: random(10, 20)

respuesta: "la combinacion de la amenaza y la vulnerabilidad"
tipo: completar

enunciado: "Segun la teoria, un riesgo ambiental no es solo el fenomeno en si, sino {a} + {b} (en palabras clave) entre la amenaza y la vulnerabilidad de la sociedad que lo recibe."

explicacion: |
  El concepto clave es que el riesgo surge de la interseccion entre un evento peligroso (amenaza) y la capacidad de la sociedad para enfrentarlo (vulnerabilidad).
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["escala", "alcance"]

variables:
  x: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Los riesgos ambientales mundiales son fenomenos que se limitan a las fronteras nacionales y no trascienden otros paises."

explicacion: |
  Falso. Los riesgos ambientales mundiales, por definicion, trascienden las fronteras nacionales y afectan a la estabilidad de los ecosistemas a escala planetaria.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["antropoceno", "impacto_humano"]

variables:
  a: random(100, 900)
  b: random(100, 900)

respuesta: "antropoceno"
tipo: completar

enunciado: "En la era actual, conocida como el {a} + {b} (nombre del periodo geologico), la huella humana es tan profunda que los riesgos tienen una fuerte componente tecnologica y politica."

explicacion: |
  El termino "Antropoceno" se utiliza para describir el periodo actual donde la actividad humana es la influencia dominante en el clima y el medio ambiente.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["clima", "eventos_extremos"]

variables:
  freq: random(2, 5)

respuesta: "mas frecuentes e intensos"
tipo: completar

enunciado: "El calentamiento global no solo implica mas calor, sino que los eventos climaticos extremos se vuelven {freq} veces mas frecuentes e intensos en su descripcion teorica."

explicacion: |
  La teoria establece que el cambio climático modifica los regímenes tradicionales, haciendo que los eventos extremos sean más frecuentes e intensos.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["argentina", "impacto_local"]

variables:
  a: random(1, 3)

respuesta: "sudestada"
tipo: completar

enunciado: "En Argentina, el cambio climático se vincula directamente con la mayor frecuencia de fenomenos como el {a} o las sequias en el centro del pais."

explicacion: |
  El fenomeno meteorologico citado en la teoria como ejemplo de impacto local del cambio global es la Sudestada.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["ecosistemas", "servicios"]

variables:
  n: random(1, 3)

respuesta: "amortiguadores"
tipo: completar

enunciado: "Los ecosistemas como los humedales actuan como {n} + {n} + {n} (palabra clave) naturales que protegen contra inundaciones."

explicacion: |
  La teoria describe a los ecosistemas clave como "amortiguadores" naturales que proveen servicios como la regulacion del agua y la proteccion contra inundaciones.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["biodiversidad", "suelos"]

variables:
  a: random(1, 2)

respuesta: "pérdida de biodiversidad"
tipo: completar

enunciado: "Junto con el cambio climático, la {a} y la degradacion de los suelos son pilares de la crisis ambiental actual."

explicacion: |
  Los tres pilares mencionados son el cambio climático, la pérdida de biodiversidad y la contaminación transfronteriza.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["contaminacion", "transfronterizo"]

variables:
  a: random(1, 3)

respuesta: "contaminacion transfronteriza"
tipo: completar

enunciado: "Entre los riesgos urgentes a nivel mundial destaca la {a} + {a} + {a} (termino clave)."

explicacion: |
  La contaminacion transfronteriza es uno de los riesgos globales principales junto con el cambio climático y la pérdida de biodiversidad.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["gei", "causa"]

variables:
  a: random(1, 2)

respuesta: "emision de gases de efecto invernadero"
tipo: completar

enunciado: "El calentamiento global esta impulsado principalmente por la {a} + {a} + {a} (causa principal)."

explicacion: |
  La causa principal del calentamiento global mencionada es la emision de gases de efecto invernadero.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["servicios_ecosistemicos", "polinizacion"]

variables:
  a: random(1, 3)

respuesta: "polinizacion"
tipo: completar

enunciado: "Al destruir bosques nativos, se pierden servicios como la regulacion del agua, la {a} + {a} + {a} y la proteccion contra inundaciones."

explicacion: |
  La polinizacion es uno de los servicios ecosistemicos vitales mencionados que se pierden con la degradacion ambiental.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["estrategias", "adaptacion"]

variables:
  a: random(1, 3)

respuesta: "adaptacion y mitigacion"
tipo: completar

enunciado: "Comprender la red de causas y efectos de los riesgos ambientales es vital para desarrollar estrategias de {a} + {a} + {a} (dos conceptos clave)."

explicacion: |
  La teoria menciona que el entendimiento de estas interacciones es clave para estrategias de adaptacion y mitigacion.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["humedales", "proteccion"]

variables:
  a: random(1, 2)

respuesta: "humedales"
tipo: completar

enunciado: "Cuando se destruyen ecosistemas clave, como los {a} + {a} + {a}, se pierden servicios de regulacion del agua."

explicacion: |
  Los humedales son citados como un ecosistema clave cuyo destruccion conlleva la perdida de regulacion hidrica.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["enfoque", "geografia"]

variables:
  a: random(1, 3)

respuesta: "relaciones entre la naturaleza y la organizacion humana"
tipo: completar

enunciado: "Esta perspectiva nos ayuda a ver que la geografia no estudia solo el terreno, sino las {a} + {a} + {a} (objetivo de estudio)."

explicacion: |
  La geografia, desde este enfoque, estudia las relaciones entre los sistemas naturales y la organizacion humana.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["sequias", "argentina"]

variables:
  a: random(1, 2)

respuesta: "centro"
tipo: completar

enunciado: "En Argentina, el cambio climático se vincula con la mayor frecuencia de fenomenos como la sudestada o las sequias en el {a} del pais."

explicacion: |
  La teoria especifica que las sequias en el centro del pais son un ejemplo de impacto local del cambio global.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["regimenes", "clima"]

variables:
  a: random(1, 3)

respuesta: "regimenes climaticos tradicionales"
tipo: completar

enunciado: "El calentamiento global esta modificando los {a} + {a} + {a} (objeto de modificacion)."

explicacion: |
  El calentamiento global altera los patrones y regimenes climaticos que existian previamente.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["impacto_social", "migracion"]

variables:
  a: random(1, 2)

respuesta: "migraciones masivas"
tipo: completar

enunciado: "Cuando el calor provoca sequias prolongadas que destruyen cosechas, puede generar {a} + {a} + {a} (consecuencia social)."

explicacion: |
  La destruccion de cosechas por sequias es un factor que puede generar migraciones masivas de poblacion.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["estabilidad", "ecosistemas"]

variables:
  a: random(1, 3)

respuesta: "estabilidad de los ecosistemas"
tipo: completar

enunciado: "Los riesgos ambientales mundiales amenazan la {a} + {a} + {a} y el bienestar de la humanidad."

explicacion: |
  La definicion inicial menciona que amenazan la estabilidad de los ecosistemas y el bienestar humano.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["suelos", "degradacion"]

variables:
  a: random(1, 2)

respuesta: "degradacion de los suelos"
tipo: completar

enunciado: "La perdida de biodiversidad y la {a} + {a} + {a} son pilares de la crisis ambiental."

explicacion: |
  La degradacion de los suelos es mencionada junto a la perdida de biodiversidad como pilar de la crisis.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["comprension", "integral"]

variables:
  a: random(1, 3)

respuesta: "comprension integral"
tipo: completar

enunciado: "Los riesgos ambientales requieren una {a} + {a} + {a} de como interactuan los sistemas terrestres."

explicacion: |
  Se requiere una comprension integral de las interacciones entre los diversos sistemas de la Tierra.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["inundaciones", "proteccion"]

variables:
  a: random(1, 3)

respuesta: "proteccion contra inundaciones"
tipo: completar

enunciado: "Sin los amortiguadores naturales, la sociedad queda expuesta a riesgos mayores, perdiendo la {a} + {a} + {a} (servicio perdido)."

explicacion: |
  La proteccion contra inundaciones es un servicio especifico que dejan de proveer los ecosistemas degradados.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["huella", "humana"]

variables:
  a: random(1, 2)

respuesta: "profunda"
tipo: completar

enunciado: "En el Antropoceno, la huella humana es tan {a} que los riesgos tienen componente politico."

explicacion: |
  La teoria describe la huella humana como "profunda" en esta era.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["interaccion", "sistemas"]

variables:
  a: random(1, 3)

respuesta: "sistemas terrestres"
tipo: completar

enunciado: "Es fundamental entender como interactuan los {a} + {a} + {a} para comprender los riesgos ambientales."

explicacion: |
  La comprension de la interaccion entre los sistemas terrestres es clave para abordar estos riesgos.
```

## Sección: turismo-mundial (36 preguntas)

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  duracion_max: 12

respuesta: "12"
tipo: input

enunciado: "Según la definición estándar, el turismo implica estancias consecutivas inferiores a {duracion_max} meses en lugares distintos al entorno habitual."

explicacion: |
  El turismo se define como actividades realizadas durante viajes y estancias inferiores a un año (12 meses) fuera del entorno habitual.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "avanzado"
  tags: ["impacto", "paisaje"]

variables:
  agente: "turismo"

respuesta: agente
tipo: input

enunciado: "El __________ es una de las actividades más dinámicas que transforma paisajes, economías y culturas de regiones antes poco accesibles."

explicacion: |
  El turismo transforma físicamente los destinos, modificando paisajes y estructuras económicas para adaptarse a la llegada masiva de visitantes.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["definicion", "alcance"]

variables:
  concepto: "turismo"

respuesta: concepto
tipo: input

enunciado: "No se trata simplemente de 'vacaciones', sino de un fenómeno global complejo de movimiento transfronterizo: el __________."

explicacion: |
  El turismo no es solo ocio; implica movimiento transfronterizo y consumo de servicios, siendo un fenómeno complejo y global.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["empleo", "estacionalidad"]

variables:
  variable: "estabilidad"

respuesta: variable
tipo: input

enunciado: "La dinámica estacional del turismo afecta directamente la planificación de infraestructuras y la __________ del empleo en los destinos."

explicacion: |
  Los picos y valles de la estacionalidad generan inestabilidad laboral, con períodos de alta demanda y otros de inactividad.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["definicion", "movilidad"]

variables:
  concepto: "movimiento transfronterizo"

respuesta: concepto
tipo: completar
respuestas_validas:
  - "movimiento transfronterizo"
  - "movilidad transfronteriza"

enunciado: "El turismo implica el __________ de personas y el consumo de servicios en el destino."

explicacion: |
  El turismo se define por el movimiento de personas a través de fronteras y el consumo de servicios fuera de su entorno habitual.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["economia", "servicios"]

variables:
  concepto: "consumo"

respuesta: concepto
tipo: input

enunciado: "El turismo no es solo viajar, sino el __________ de servicios en el destino."

explicacion: |
  El aspecto económico del turismo radica en el consumo de servicios (alojamiento, comida, transporte) en el lugar visitado.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["geografia", "emisores"]

variables:
  hemisferio: "Hemisferio Norte"

respuesta: hemisferio
tipo: input

enunciado: "Generalmente, los grandes emisores de turistas se encuentran en el __________."

explicacion: |
  Los grandes emisores están en el Hemisferio Norte, debido a factores económicos y sociales como el poder adquisitivo y la urbanización.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["emisores", "asia"]

variables:
  region: "Asia Oriental"

respuesta: region
tipo: input

enunciado: "¿Qué región asiática está emergiendo con fuerza como gran emisora de turistas?"

explicacion: |
  Asia Oriental es cada vez más importante como región emisora de turistas debido al crecimiento económico y de la clase media.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["rutas", "europa"]

variables:
  zona: "Unión Europea"

respuesta: zona
tipo: input

enunciado: "¿En qué zona se mencionan flujos turísticos regionales muy intensos entre países vecinos?"

explicacion: |
  La Unión Europea es un ejemplo clave de flujo turístico regional intenso debido a la libre circulación y proximidad.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["rutas", "america"]

variables:
  zona: "América del Sur"

respuesta: zona
tipo: input

enunciado: "¿Qué otra región se menciona junto a Europa por tener flujos turísticos regionales fuertes entre vecinos?"

explicacion: |
  América del Sur también presenta flujos regionales intensos entre países vecinos, facilitados por la proximidad y acuerdos comerciales.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "avanzado"
  tags: ["impacto", "rural"]

variables:
  zona: "zonas rurales"

respuesta: zona
tipo: input

enunciado: "El turismo está presente en casi todos los territorios, incluyendo las __________ más remotas."

explicacion: |
  El turismo no se limita a ciudades; llega a zonas rurales remotas, transformando su economía y accesibilidad.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["acceso", "globalización"]

variables:
  concepto: "poco accesibles"

respuesta: concepto
tipo: input

enunciado: "El turismo transforma regiones que antes eran __________ o desconocidas para el gran público."

explicacion: |
  El turismo abre regiones antes inaccesibles, haciéndolas conocidas y accesibles para el turismo masivo.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["definicion", "tiempo"]

variables:
  tiempo: 12

respuesta: tiempo
tipo: input

enunciado: "Para ser considerado turismo, el período consecutivo de estancia debe ser inferior a cuántos meses?"

explicacion: |
  La definición estándar establece que el turismo implica estancias inferiores a un año (12 meses).
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["definicion", "espacio"]

variables:
  concepto: "distintos"

respuesta: concepto
tipo: input

enunciado: "El turismo ocurre en lugares __________ al entorno habitual de la persona."

explicacion: |
  Una condición clave del turismo es la estancia en lugares distintos al entorno habitual del individuo.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["globalización", "conexión"]

variables:
  concepto: "conecta"

respuesta: concepto
tipo: input

enunciado: "El turismo ha dejado de ser un lujo para convertirse en una actividad masiva que __________ al mundo."

explicacion: |
  El turismo masivo conecta al mundo, facilitando la interacción entre sociedades y culturas diversas.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "avanzado"
  tags: ["desigualdad", "análisis"]

variables:
  concepto: "desigualdades"

respuesta: concepto
tipo: input

enunciado: "Comprender los flujos turísticos permite identificar las __________ entre países emisores y receptores."

explicacion: |
  El análisis de los flujos turísticos revela las desigualdades económicas y de poder entre quienes envían y quienes reciben a los turistas.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

variables:
  dias_max: random(250, 360)

respuesta: "inferior a un año"
tipo: completar

enunciado: "El turismo se define como actividades realizadas por un período consecutivo {dias_max} días o menos. ¿Cómo se describe temporalmente este límite en la definición oficial?"

explicacion: |
  La definición clave del turismo incluye el requisito de que la estancia sea inferior a un año consecutivo, diferenciándolo de la migración o residencia permanente.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["globalizacion", "impacto"]

variables:
  paises: random(100, 200)

respuesta: verdadero
tipo: vf

enunciado: "El turismo es una actividad económica presente en casi todos los territorios, desde grandes metrópolis hasta zonas rurales remotas, independientemente del desarrollo del país."

explicacion: |
  El turismo es una de las pocas actividades económicas verdaderamente globales y distribuidas, afectando tanto a destinos de lujo como a regiones menos desarrolladas.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["flujos", "hemisferio_norte"]

variables:
  region: uno_de(["Europa Occidental", "Norteamérica", "Asia Oriental"])

respuesta: "Europa Occidental, Norteamérica y Asia Oriental"
tipo: completar

enunciado: "Los grandes emisores de turistas se concentran mayoritariamente en el Hemisferio Norte. Nombra las tres regiones principales que actúan como fuentes de salida turística."

explicacion: |
  Los principales mercados emisores son Europa Occidental, Norteamérica y, cada vez más, Asia Oriental, debido a su poder adquisitivo y legislación laboral.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["causas", "desarrollo"]

variables:
  factor: uno_de(["poder adquisitivo", "legislación laboral", "urbanización"])

respuesta: "poder adquisitivo, legislación laboral y urbanización"
tipo: completar

enunciado: "¿Cuáles son los tres factores estructurales clave que permiten a las regiones emisoras (como Europa o Norteamérica) generar grandes flujos turísticos?"

explicacion: |
  La combinación de alto poder adquisitivo, leyes que garantizan descanso remunerado y alta urbanización (que genera necesidad de escape) son los motores principales.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["estacionalidad", "dinamica"]

variables:
  estacion: uno_de(["verano", "invierno", "vacaciones escolares"])

respuesta: "estacionalidad"
tipo: input

enunciado: "El fenómeno por el cual los flujos turísticos se concentran en ciertos meses del año, generando picos de demanda e inactividad en otros periodos, se llama {estacion}."

explicacion: |
  La estacionalidad es crucial en la planificación turística, creando desigualdades en el empleo y la infraestructura a lo largo del año.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["atractivos", "receptores"]

variables:
  atractivo: uno_de(["naturales", "culturales", "de entretenimiento"])

respuesta: "naturales, culturales o de entretenimiento"
tipo: completar

enunciado: "Los principales destinos receptores suelen ofrecer atractivos de tipo {atractivo}. Completa la lista de tipos de atractivos que atraen al turista."

explicacion: |
  Los destinos compiten ofreciendo playas, montañas (naturales), museos, historia (culturales) o parques temáticos (entretenimiento).
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "avanzado"
  tags: ["desigualdad", "economía"]

variables:
  rol: uno_de(["emisores", "receptores"])

respuesta: "desigualdades"
tipo: input

enunciado: "Analizar los flujos turísticos permite identificar las {rol} entre países que reciben a los turistas y aquellos que los envían, revelando asimetrías de poder y riqueza."

explicacion: |
  El análisis geográfico del turismo no es neutral; muestra quién tiene el poder de moverse (emisores) y quién depende del flujo de capital externo (receptores).
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["rutas", "conectividad"]

variables:
  origen: "Europa Occidental"
  destino: "zonas tropicales o exóticas"

respuesta: "zonas tropicales o exóticas"
tipo: completar

enunciado: "Las rutas turísticas más intensas conectan zonas emisoras como Europa Occidental con destinos de tipo {destino}."

explicacion: |
  Existe una clara correlación entre el clima templado/frío de los emisores y la búsqueda de climas cálidos en los receptores.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["regional", "vecindad"]

variables:
  region: uno_de(["Unión Europea", "América del Sur"])

respuesta: "Unión Europea o América del Sur"
tipo: completar

enunciado: "Además de los flujos intercontinentales, existen flujos regionales muy fuertes, como los que ocurren dentro de la {region} o entre países vecinos."

explicacion: |
  La proximidad geográfica y la integración política (como la UE) facilitan el turismo de corta distancia y frecuente.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["empleo", "estabilidad"]

variables:
  periodo: uno_de(["picos de demanda", "períodos de inactividad"])

respuesta: "períodos de inactividad"
tipo: completar

enunciado: "La estacionalidad afecta directamente la estabilidad del empleo, generando inestabilidad durante los {periodo} fuera de temporada."

explicacion: |
  El turismo crea empleos precarios o temporales debido a la irregularidad de la demanda a lo largo del año.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["paisaje", "transformación"]

variables:
  elemento: uno_de(["playas", "montañas", "centros históricos"])

respuesta: "paisajes, economías y culturas"
tipo: completar

enunciado: "El turismo no solo visita lugares, sino que los transforma. ¿Qué tres ámbitos principales se ven transformados por esta actividad?"

explicacion: |
  El turismo altera el entorno físico (paisaje), la estructura económica local y las dinámicas sociales (cultura).
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["historia", "evolución"]

variables:
  estado: uno_de(["lujo exclusivo", "actividad masiva"])

respuesta: "actividad masiva"
tipo: input

enunciado: "El turismo ha dejado de ser un {estado} para convertirse en una actividad masiva que conecta al mundo."

explicacion: |
  La democratización del viaje es un fenómeno reciente, ligado al aumento de la renta disponible y al transporte aéreo barato.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["geopolítica", "flujos"]

variables:
  hemisferio_origen: "Hemisferio Norte"
  hemisferio_destino: "Hemisferio Sur"

respuesta: "Hemisferio Norte"
tipo: input

enunciado: "Generalmente, los grandes emisores de turistas se encuentran en el {hemisferio_origen}, mientras que muchos destinos de sol y playa están en el {hemisferio_destino}."

explicacion: |
  Hay una dinámica de flujo de capital desde el norte rico hacia el sur con recursos naturales atractivos, planteando debates sobre neocolonialismo turístico.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["definicion", "espacio"]

variables:
  distancia: random(50, 500)

respuesta: "distinto a su entorno habitual"
tipo: completar

enunciado: "Para que un viaje se considere turístico, la persona debe desplazarse a lugares {distancia} km de distancia de su entorno habitual."

explicacion: |
  El concepto de "entorno habitual" es subjetivo pero excluye los desplazamientos diarios por trabajo o estudio.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["motivación", "tipos"]

variables:
  fin: uno_de(["ocio", "negocios", "otros motivos"])

respuesta: "ocio, negocios u otros motivos"
tipo: completar

enunciado: "El turismo incluye viajes con fines de {fin}, no solo por placer."

explicacion: |
  El turismo de negocios (MICE) es una parte crucial y a menudo menos estacional del mercado global.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["infraestructura", "planificación"]

variables:
  consecuencia: uno_de(["picos de demanda", "períodos de inactividad"])

respuesta: "picos de demanda"
tipo: completar

enunciado: "La dinámica de la estacionalidad obliga a los destinos a planificar infraestructuras capaces de atender {consecuencia} sin colapsar."

explicacion: |
  Los destinos deben construir capacidad de sobra para la temporada alta, lo que genera ineficiencias económicas en la baja temporada.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "intermedio"
  tags: ["accesibilidad", "desarrollo"]

variables:
  estado: uno_de(["poco accesibles", "desarrolladas"])

respuesta: "poco accesibles o desconocidas"
tipo: completar

enunciado: "El turismo transforma regiones que antes eran {estado} para el gran público, abriéndolas al mercado global."

explicacion: |
  El turismo puede ser una herramienta de desarrollo para áreas aisladas, pero también puede destruir su autenticidad.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "avanzado"
  tags: ["economía", "desigualdad"]

variables:
  variable: uno_de(["riqueza", "poder", "infraestructura"])

respuesta: "riqueza"
tipo: input

enunciado: "Comprender los flujos turísticos nos permite analizar cómo se distribuye la {variable} y el poder en el planeta."

explicacion: |
  El turismo no siempre genera desarrollo local equitativo; a menudo las ganancias se filtran a corporaciones internacionales.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "avanzado"
  tags: ["globalización", "impacto"]

respuesta: verdadero
tipo: vf

enunciado: "El turismo es considerado un motor fundamental de la globalización cultural y económica."

explicacion: |
  Facilita el intercambio transfronterizo de bienes, servicios, ideas y costumbres, integrando economías locales en redes globales.
```

```
metadata:
  materia: "geografia"
  tema: "turismo_mundial"
  nivel: "basico"
  tags: ["alcance", "geografía"]

respuesta: verdadero
tipo: vf

enunciado: "El turismo es una de las pocas actividades económicas presentes en casi todos los territorios del planeta."

explicacion: |
  Desde las grandes ciudades hasta las áreas rurales más aisladas, la actividad turística tiene una presencia geográfica muy amplia.
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

