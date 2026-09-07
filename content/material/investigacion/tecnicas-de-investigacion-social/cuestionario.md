# Investigacion — tecnicas de investigacion social (cuestionario, 25 preguntas VBLang)

> Tema: `investigacion/tecnicas-de-investigacion-social`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "cuantitativa", "definicion"]

variables:
  n_encuestados: random(100, 1000)
  porcentaje: random(40, 60)

respuesta: "cuantitativa"
tipo: completar

enunciado: "En un estudio sobre hábitos de lectura en {n_encuestados} estudiantes, se aplicó una técnica {porcentaje}% orientada a generalizar resultados mediante cuestionarios estructurados. Esta técnica se clasifica como de tipo ___."

explicacion: |
  La encuesta es una técnica cuantitativa porque busca generalizar patrones en grandes grupos mediante el procesamiento estadístico de datos estandarizados.
```

### 2 — pregunta 2

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["historia_de_vida", "cualitativa", "biografia"]

variables:
  tema_vida: uno_de(["migración", "trayectoria laboral", "experiencia educativa"])

respuesta: "trayectoria biográfica"
tipo: completar

enunciado: "Si el objetivo de la investigación es reconstruir la ___ de una persona dentro de su contexto histórico, la técnica más adecuada es la historia de vida."

explicacion: |
  La historia de vida se centra en reconstruir trayectorias biográficas individuales, permitiendo comprender la subjetividad y el significado de las experiencias a lo largo del tiempo.
```

### 3 — pregunta 3

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "semiestructurada", "flexibilidad"]

variables:
  n_preguntas_base: random(5, 10)

respuesta: "flexibilidad"
tipo: completar

enunciado: "A diferencia de la encuesta, la entrevista semiestructurada ofrece mayor ___ al permitir al investigador seguir la conversación y explorar matices según las respuestas del interlocutor."

explicacion: |
  La flexibilidad es la clave de la entrevista semiestructurada, ya que permite adaptar las preguntas y explorar temas emergentes que no estaban previstos inicialmente.
```

### 4 — pregunta 4

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "estandarizacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La clave de la encuesta es la estandarización: todas las personas deben recibir las mismas preguntas en el mismo orden para que los datos sean comparables."

explicacion: |
  La estandarización garantiza que las diferencias en las respuestas se deban a las características de los encuestados y no a variaciones en la administración del cuestionario.
```

### 5 — pregunta 5

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["encuesta", "muestra", "estadistica"]

variables:
  poblacion_total: random(10000, 50000)
  margen_error: 0.05
  confianza: 0.95

respuesta: "redondear(1.96**2 * 0.25 * poblacion_total / (margen_error**2 * (poblacion_total - 1) + 1.96**2 * 0.25), 0)"
tipo: input

enunciado: "Para una población de {poblacion_total} habitantes, con un margen de error del {redondear(margen_error*100, 0)}% y un nivel de confianza del {redondear(confianza*100, 0)}%, ¿cuál es el tamaño muestral mínimo aproximado necesario (usando la fórmula para proporciones máximas p=q=0.5)?"

explicacion: |
  Se utiliza la fórmula de muestreo para proporciones: n = (Z^2 * p * q) / e^2. Con Z=1.96 (95% confianza), p=q=0.5 (máxima varianza) y e=0.05. El resultado se redondea al entero más cercano.
```

### 6 — pregunta 6

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "cuestionario", "preguntas"]

variables:
  opcion_a: "Sí"
  opcion_b: "No"
  opcion_c: "A veces"

respuesta: "cerradas"
tipo: completar

enunciado: "Los cuestionarios de encuesta suelen utilizar preguntas ___ porque las respuestas están predefinidas (como sí/no o opciones múltiples), lo que facilita el procesamiento estadístico."

explicacion: |
  Las preguntas cerradas permiten cuantificar las respuestas y facilitar el análisis estadístico comparativo, a diferencia de las preguntas abiertas.
```

### 7 — pregunta 7

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["comparacion", "encuesta", "entrevista"]

variables:
  enfoque_encuesta: "generalizar patrones"
  enfoque_entrevista: "comprender significados"

respuesta: "significados"
tipo: completar

enunciado: "Mientras la encuesta busca generalizar patrones en grandes grupos, la entrevista prioriza la comprensión de los ___ individuales y grupales."

explicacion: |
  La entrevista cualitativa se enfoca en la profundidad y el significado subjetivo de las experiencias, en contraste con la amplitud y generalización de la encuesta.
```

### 8 — pregunta 8

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["seleccion_tecnicas", "cualitativa"]

variables:
  objetivo: "entender motivaciones"

respuesta: "entrevista"
tipo: completar

enunciado: "Si el investigador quiere entender las motivaciones detrás de una decisión política compleja, la técnica más adecuada es la ___."

explicacion: |
  Para explorar el "cómo" y el "por qué" de procesos subjetivos y complejos, la entrevista es la herramienta preferida por su capacidad de profundizar en significados.
```

### 9 — pregunta 9

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["historia_de_vida", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La historia de vida reconstruye trayectorias biográficas dentro de su contexto histórico, permitiendo una comprensión profunda de la experiencia individual."

explicacion: |
  Esta técnica conecta la biografía personal con la historia social, ofreciendo una visión holística de la vida del sujeto.
```

### 10 — pregunta 10

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["encuesta", "analisis_datos", "estadistica"]

variables:
  n_respuestas: random(50, 200)

respuesta: "estadístico"
tipo: completar

enunciado: "Las respuestas a las preguntas cerradas de una encuesta se procesan mediante técnicas ___ para identificar tendencias generales en la población."

explicacion: |
  La naturaleza cuantitativa de la encuesta requiere herramientas estadísticas para analizar la frecuencia y correlación de las respuestas predefinidas.
```

### 11 — pregunta 11

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["limitaciones", "encuesta", "subjetividad"]

variables:
  limite: "profundidad"

respuesta: "profundidad"
tipo: completar

enunciado: "Una limitación principal de la encuesta es que puede carecer de ___ para captar la riqueza de la experiencia subjetiva del encuestado."

explicacion: |
  Al estandarizar las preguntas y respuestas, la encuesta pierde matices y detalles contextuales que la entrevista cualitativa sí puede explorar.
```

### 12 — pregunta 12

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["entrevista", "preguntas", "abiertas"]

variables:
  caracteristica: "libre"

respuesta: "abiertas"
tipo: completar

enunciado: "En la entrevista, se utilizan preguntas ___ para permitir que el interlocutor exprese sus perspectivas sin restricciones predefinidas."

explicacion: |
  Las preguntas abiertas dan libertad al entrevistado para responder con sus propias palabras, generando datos ricos en detalle.
```

### 13 — pregunta 13

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["muestra", "representatividad", "encuesta"]

variables:
  poblacion: random(100000, 1000000)
  error: 0.05

respuesta: "redondear(1.96**2 * 0.25 / error**2, 0)"
tipo: input

enunciado: "Para una población muy grande (infinita), con un margen de error del {redondear(error*100, 0)}%, ¿cuál es el tamaño muestral aproximado necesario (usando p=0.5)?"

explicacion: |
  Para poblaciones grandes, la fórmula se simplifica a n = (Z^2 * p * q) / e^2. Con Z=1.96 y e=0.05, el resultado es aproximadamente 384.
```

### 14 — pregunta 14

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["cualitativa", "enfoque", "subjetividad"]

variables:
  enfoque: "subjetividad"

respuesta: "subjetividad"
tipo: completar

enunciado: "Las técnicas cualitativas, como la entrevista y la historia de vida, priorizan la riqueza del detalle y la ___."

explicacion: |
  El enfoque cualitativo valora la experiencia subjetiva y el significado personal, a diferencia del enfoque cuantitativo que busca objetividad y generalización.
```

### 15 — pregunta 15

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "semiestructurada", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La entrevista semiestructurada permite hacer preguntas abiertas y seguir la conversación según las respuestas del interlocutor."

explicacion: |
  Combina la guía de un guion con la flexibilidad de explorar temas emergentes, siendo ideal para procesos complejos.
```

### 16 — pregunta 16

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["datos", "tipos", "comparacion"]

variables:
  dato_cualitativo: "significado"
  dato_cuantitativo: "frecuencia"

respuesta: "significado"
tipo: completar

enunciado: "Mientras la encuesta busca medir la frecuencia de un fenómeno, la historia de vida busca comprender su ___."

explicacion: |
  La historia de vida se centra en el significado y la experiencia vivida, no en la cantidad o frecuencia de los eventos.
```

### 17 — pregunta 17

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["seleccion_tecnicas", "encuesta", "objetivo"]

variables:
  objetivo: "generalizar"

respuesta: "encuesta"
tipo: completar

enunciado: "Si queremos saber 'qué' pasa y 'cuántas' personas lo viven, la técnica más adecuada es la ___."

explicacion: |
  La encuesta es la herramienta estándar para medir la prevalencia y distribución de fenómenos en una población.
```

### 18 — pregunta 18

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "avanzado"
  tags: ["muestreo", "representatividad", "encuesta"]

variables:
  poblacion: 50000
  error: 0.05

respuesta: "redondear(1.96**2 * 0.25 * poblacion / (error**2 * (poblacion - 1) + 1.96**2 * 0.25), 0)"
tipo: input

enunciado: "Para una población de {poblacion}, con un margen de error del {redondear(error*100, 0)}%, ¿cuál es el tamaño muestral necesario?"

explicacion: |
  Se aplica la fórmula de muestreo finito. El resultado debe ser un número entero que garantiza la representatividad estadística.
```

### 19 — pregunta 19

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["historia_de_vida", "ventajas", "contexto"]

variables:
  ventaja: "contexto"

respuesta: "contexto"
tipo: completar

enunciado: "Una ventaja de la historia de vida es que permite situar la experiencia individual dentro de su ___ histórico y social."

explicacion: |
  La historia de vida no aísla al individuo, sino que lo conecta con las estructuras y eventos históricos que moldearon su trayectoria.
```

### 20 — pregunta 20

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["encuesta", "vf", "generalizacion"]

respuesta: verdadero
tipo: vf

enunciado: "La encuesta permite generalizar resultados de una muestra representativa a toda la población de estudio."

explicacion: |
  La generalización es el objetivo principal de la encuesta, siempre que la muestra sea representativa y el muestreo sea adecuado.
```

### 21 — pregunta 21

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["comparacion", "profundidad", "amplitud"]

variables:
  tecnica_profunda: "entrevista"
  tecnica_amplia: "encuesta"

respuesta: "amplitud"
tipo: completar

enunciado: "La encuesta ofrece mayor ___ en la cobertura de la población, mientras que la entrevista ofrece mayor ___ en la comprensión del fenómeno."

explicacion: |
  La encuesta cubre más personas (amplitud), pero la entrevista comprende mejor cada caso (profundidad).
```

### 22 — pregunta 22

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "migración", "aplicacion"]

variables:
  tema: "experiencias de migración"

respuesta: "entrevista"
tipo: completar

enunciado: "Para explorar las experiencias de migración de un grupo pequeño de personas, la técnica más adecuada es la ___."

explicacion: |
  Las experiencias de migración son complejas y subjetivas, requiriendo una técnica cualitativa como la entrevista para captar sus matices.
```

### 23 — pregunta 23

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["historia_de_vida", "estructura", "biografia"]

variables:
  estructura: "trayectoria"

respuesta: "trayectoria"
tipo: completar

enunciado: "La historia de vida se centra en reconstruir la ___ biográfica de un individuo a lo largo de su vida."

explicacion: |
  La trayectoria biográfica es el eje central de esta técnica, mostrando cómo las decisiones y eventos se entrelazan.
```

### 24 — pregunta 24

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "basico"
  tags: ["entrevista", "vf", "cualitativa"]

respuesta: verdadero
tipo: vf

enunciado: "La entrevista es una técnica cualitativa que prioriza la riqueza del detalle y la subjetividad."

explicacion: |
  La entrevista busca entender el punto de vista del sujeto, valorando la subjetividad como fuente de conocimiento.
```

### 25 — pregunta 25

```
metadata:
  materia: "Investigación Social"
  tema: "tecnicas_de_investigacion_social"
  nivel: "intermedio"
  tags: ["entrevista", "limitaciones", "generalizacion"]

variables:
  limite: "generalización"

respuesta: "generalización"
tipo: completar

enunciado: "Una limitación de la entrevista es que no permite la ___ de los resultados a una población más amplia debido al tamaño de la muestra."

explicacion: |
  Al trabajar con muestras pequeñas y no aleatorias, los resultados de la entrevista no son estadísticamente generalizables.
```
