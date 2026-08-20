# Geografia — trabajo y desempleo mundial (cuestionario, 21 preguntas VBLang)

> Tema: `geografia/trabajo-y-desempleo-mundial`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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
