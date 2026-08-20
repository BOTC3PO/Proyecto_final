# Lengua — Decodificación y fluidez (cuestionario, 20 preguntas VBLang)

> Tema: `P2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la decodificación

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["decodificacion", "vocabulario"]

enunciado: "¿Qué es la decodificación, en el proceso de aprender a leer?"
tipo: mc
opciones_explicitas:
  - "El proceso de convertir letras en sonidos para reconstruir la palabra hablada"
  - "El proceso de entender el significado de un texto completo"
  - "El proceso de memorizar palabras completas sin analizar sus letras"
respuesta: "El proceso de convertir letras en sonidos para reconstruir la palabra hablada"

explicacion: |
  Aplica directo la conciencia fonológica al código escrito.
```

### 2 — Qué es la fluidez lectora

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["fluidez", "vocabulario"]

enunciado: "¿Qué es la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "Leer con precisión, velocidad y prosodia adecuadas, de forma automática"
  - "Leer lo más rápido posible, sin importar la precisión"
  - "Conocer el significado de todas las palabras de un texto"
respuesta: "Leer con precisión, velocidad y prosodia adecuadas, de forma automática"

explicacion: |
  Velocidad sola, sin precisión ni entonación, no es fluidez real.
```

### 3 — Problema: calcular palabras por minuto

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([80, 100, 120])
  segundos: 60

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee {palabras} palabras correctamente en {segundos} segundos. ¿Cuál es su fluidez en palabras por minuto (PPM)?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  Como el tiempo ya es exactamente 1 minuto (60 segundos), el PPM
  coincide directamente con la cantidad de palabras leídas.
```

### 4 — Problema: calcular PPM con otro tiempo

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([60, 90])
  segundos: 45

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee {palabras} palabras correctamente en sólo {segundos} segundos (menos de un minuto). ¿Cuál es su fluidez en palabras por minuto?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  Se escala el resultado a 'por minuto', igual que cualquier tasa
  (como la velocidad = distancia/tiempo).
```

### 5 — Español vs. inglés: regularidad grafema-fonema

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["decodificacion"]

respuesta: verdadero
tipo: vf

enunciado: "La correspondencia entre letras y sonidos en español es, en general, más regular y predecible que en inglés, donde una misma letra puede sonar de formas muy distintas según la palabra."

explicacion: |
  Por eso decodificar en español suele ser más rápido de aprender una
  vez conocidas las reglas básicas.
```

### 6 — Por qué la fluidez libera recursos para comprender

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué la fluidez lectora es un puente hacia la comprensión de un texto?"
tipo: mc
opciones_explicitas:
  - "Porque cuando decodificar se vuelve automático, la atención que antes se gastaba en 'sonar' cada palabra queda libre para entender el significado"
  - "Porque leer rápido garantiza automáticamente entender el texto, sin ninguna excepción"
  - "No existe ninguna relación real entre fluidez y comprensión"
respuesta: "Porque cuando decodificar se vuelve automático, la atención que antes se gastaba en 'sonar' cada palabra queda libre para entender el significado"

explicacion: |
  La capacidad de atención es limitada — automatizar un paso libera
  recursos para el siguiente.
```

### 7 — Velocidad sola no es fluidez

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["fluidez"]

respuesta: verdadero
tipo: vf

enunciado: "Leer muy rápido pero con errores o sin ninguna entonación (sin prosodia) no cuenta como verdadera fluidez lectora — hacen falta las tres cosas juntas: precisión, velocidad y prosodia."

explicacion: |
  Un lector 'fluido' pero impreciso no está realmente decodificando
  bien.
```

### 8 — Problema: comparar dos lecturas por PPM

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras_a: 100
  segundos_a: 50
  palabras_b: 90
  segundos_b: 60

respuesta: (palabras_a / segundos_a * 60) > (palabras_b / segundos_b * 60)
tipo: vf

enunciado: "Lectura A: {palabras_a} palabras en {segundos_a} segundos. Lectura B: {palabras_b} palabras en {segundos_b} segundos. ¿La fluidez en PPM de la Lectura A es MAYOR que la de la Lectura B?"

explicacion: |
  PPM(A) = {redondear(palabras_a / segundos_a * 60, 0)}; PPM(B) =
  {redondear(palabras_b / segundos_b * 60, 0)} — hay que calcular la
  tasa, no comparar sólo la cantidad de palabras.
```

### 9 — Por qué promediar varias lecturas

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué conviene medir la fluidez de un alumno en varios textos y días distintos, en vez de con una sola lectura?"
tipo: mc
opciones_explicitas:
  - "Porque una sola lectura puede estar afectada por factores puntuales (texto más difícil, cansancio, nervios) — promediar varias da una estimación más confiable"
  - "Porque la fluidez de una persona cambia por completo de un día a otro sin ningún patrón"
  - "No hay ninguna ventaja real en medir más de una vez"
respuesta: "Porque una sola lectura puede estar afectada por factores puntuales (texto más difícil, cansancio, nervios) — promediar varias da una estimación más confiable"

explicacion: |
  Es la misma razón por la que `../../matematica/muestreo-y-sesgo/`
  prefiere una muestra a un único dato suelto.
```

### 10 — Problema: promedio de PPM en 3 lecturas

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  ppm1: uno_de([95, 100])
  ppm2: uno_de([105, 110])
  ppm3: uno_de([90, 115])

respuesta: redondear(promedio([ppm1, ppm2, ppm3]), 1)
tipo: input
tolerancia_abs: 0.1
unidad: "palabras por minuto"

enunciado: "Un alumno leyó a {ppm1}, {ppm2} y {ppm3} palabras por minuto en tres textos distintos. ¿Cuál es su fluidez promedio?"

pasos:
  - "Promedio = ({ppm1}+{ppm2}+{ppm3}) / 3 = {redondear(promedio([ppm1, ppm2, ppm3]), 1)}"

explicacion: |
  El promedio da una estimación más representativa que cualquiera de
  las tres lecturas por separado.
```

### 11 — Qué es la prosodia

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["prosodia", "vocabulario"]

enunciado: "¿Qué es la prosodia, como parte de la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "La entonación y el ritmo naturales con que se lee, respetando pausas, signos de puntuación y énfasis"
  - "La cantidad de palabras leídas por minuto"
  - "La cantidad de errores cometidos al leer"
respuesta: "La entonación y el ritmo naturales con que se lee, respetando pausas, signos de puntuación y énfasis"

explicacion: |
  Leer 'como se habla', no en un tono monótono palabra por palabra.
```

### 12 — La meta de la decodificación es volverse automática

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["decodificacion"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo final de aprender a decodificar es que el proceso se vuelva automático, sin necesitar esfuerzo consciente para convertir cada letra en su sonido."

explicacion: |
  Cuando eso pasa, decodificar deja de competir por atención con
  comprender el texto.
```

### 13 — Problema: calcular el tiempo dado el PPM

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  ppm: uno_de([80, 100])
  palabras_texto: uno_de([40, 50])

respuesta: redondear(palabras_texto / ppm * 60, 0)
tipo: input
unidad: "segundos"

enunciado: "Un alumno lee a {ppm} palabras por minuto. Si un texto tiene {palabras_texto} palabras, ¿cuánto tiempo (en segundos) debería tardar en leerlo completo?"

pasos:
  - "Tiempo = ({palabras_texto}/{ppm}) × 60 = {redondear(palabras_texto / ppm * 60, 0)} segundos"

explicacion: |
  Es la fórmula de PPM despejada para el tiempo en vez de para la
  velocidad.
```

### 14 — Aplicación real: evaluación de fluidez en la escuela

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Muchas escuelas usan 'registros de lectura oral' (running records), donde un docente escucha leer a un alumno en voz alta y anota errores, tiempo y entonación. ¿Para qué sirve esta evaluación?"
tipo: mc
opciones_explicitas:
  - "Para medir el progreso real de la fluidez lectora de un alumno a lo largo del tiempo, con datos concretos (precisión, PPM, prosodia)"
  - "Sólo sirve para calificar la letra del alumno"
  - "No tiene ninguna utilidad pedagógica real"
respuesta: "Para medir el progreso real de la fluidez lectora de un alumno a lo largo del tiempo, con datos concretos (precisión, PPM, prosodia)"

explicacion: |
  Es la aplicación práctica de todo lo visto en este módulo.
```

### 15 — Problema: identificar la lectura menos fluida

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras_a: 70
  segundos_a: 60
  palabras_b: 70
  segundos_b: 90

respuesta: (palabras_a / segundos_a * 60) > (palabras_b / segundos_b * 60)
tipo: vf

enunciado: "Dos alumnos leen el mismo texto de {palabras_a} palabras: el Alumno A tarda {segundos_a} segundos, el Alumno B tarda {segundos_b} segundos. ¿El Alumno A tiene mayor fluidez en PPM?"

explicacion: |
  Con la misma cantidad de palabras, tardar MENOS tiempo da un PPM
  MAYOR.
```

### 16 — Relación entre decodificación y conciencia fonológica

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene la decodificación con `../conciencia-fonologica/`?"
tipo: mc
opciones_explicitas:
  - "La decodificación aplica al código escrito la distinción de sonidos que ya construyó la conciencia fonológica — sin distinguir sonidos, no se puede saber qué sonido corresponde a cada letra"
  - "No tienen ninguna relación real entre sí"
  - "La decodificación reemplaza por completo la necesidad de conciencia fonológica"
respuesta: "La decodificación aplica al código escrito la distinción de sonidos que ya construyó la conciencia fonológica — sin distinguir sonidos, no se puede saber qué sonido corresponde a cada letra"

explicacion: |
  Es el prerrequisito formal de este módulo.
```

### 17 — Problema: PPM con un tiempo largo

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["ppm", "problema"]

variables:
  palabras: uno_de([150, 200])
  segundos: 120

respuesta: redondear(palabras / segundos * 60, 0)
tipo: input
unidad: "palabras por minuto"

enunciado: "Un alumno lee un texto largo: {palabras} palabras en {segundos} segundos (2 minutos). ¿Cuál es su fluidez en PPM?"

pasos:
  - "PPM = ({palabras}/{segundos}) × 60 = {redondear(palabras / segundos * 60, 0)}"

explicacion: |
  La fórmula funciona igual sin importar si el tiempo es más o menos
  de un minuto — siempre se escala a 'por minuto'.
```

### 18 — La fluidez varía según el texto

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["fluidez"]

respuesta: verdadero
tipo: vf

enunciado: "La fluidez lectora de una misma persona puede variar según qué tan difícil o familiar sea el texto que está leyendo, no es un número fijo e invariable."

explicacion: |
  Es otra razón por la que conviene promediar mediciones de varios
  textos distintos.
```

### 19 — Aplicación: por qué un buen decodificador puede no comprender

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "avanzado"
  tags: ["aplicacion"]

enunciado: "Un alumno decodifica correctamente cada palabra de un texto, pero al preguntarle de qué trataba, no puede responder. ¿Qué explica esto, en términos de fluidez?"
tipo: mc
opciones_explicitas:
  - "Es posible que la decodificación todavía no sea automática para ese alumno, así que gasta toda su atención 'sonando' las palabras y no le queda capacidad para comprender el significado"
  - "Es imposible que esto pase: decodificar bien siempre implica comprender el texto"
  - "El alumno tiene un problema de vocabulario, sin ninguna relación con la fluidez"
respuesta: "Es posible que la decodificación todavía no sea automática para ese alumno, así que gasta toda su atención 'sonando' las palabras y no le queda capacidad para comprender el significado"

explicacion: |
  Es exactamente el fenómeno que explica por qué la fluidez es un
  puente necesario hacia la comprensión.
```

### 20 — Cierre: para qué sirven decodificación y fluidez

```
metadata:
  materia: "lengua"
  tema: "decodificacion_y_fluidez"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la decodificación y la fluidez lectora?"
tipo: mc
opciones_explicitas:
  - "Para convertir letras en sonidos de forma cada vez más automática, liberando la atención necesaria para poder comprender lo que se lee"
  - "Sólo sirven para leer más rápido, sin ninguna relación con la comprensión"
  - "Sólo se aplican en los primeros meses de la alfabetización, después dejan de ser relevantes"
respuesta: "Para convertir letras en sonidos de forma cada vez más automática, liberando la atención necesaria para poder comprender lo que se lee"

explicacion: |
  Es el puente entre `../conciencia-fonologica/` y
  `../vocabulario-y-familia-de-palabras/`, el módulo que sigue.
```
