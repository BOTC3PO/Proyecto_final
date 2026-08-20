# Cívica — Cómo se lee una encuesta electoral (cuestionario, 20 preguntas VBLang)

> Tema: `C4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una encuesta electoral

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "basico"
  tags: ["encuesta", "vocabulario"]

enunciado: "¿Qué es una encuesta electoral, en términos de muestreo?"
tipo: mc
opciones_explicitas:
  - "Preguntarle a una MUESTRA de votantes y generalizar el resultado a todo el electorado, en vez de preguntarle a todo el padrón"
  - "Contar los votos reales de una elección ya realizada"
  - "Un censo completo de todos los votantes habilitados"
respuesta: "Preguntarle a una MUESTRA de votantes y generalizar el resultado a todo el electorado, en vez de preguntarle a todo el padrón"

explicacion: |
  Es la misma lógica de `../../matematica/muestreo-y-sesgo/`, aplicada
  a intención de voto.
```

### 2 — Qué es el margen de error de una encuesta

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["margen_error", "vocabulario"]

enunciado: "¿Qué significa que una encuesta reporte 'candidato A: 42% ± 3 puntos'?"
tipo: mc
opciones_explicitas:
  - "Que el resultado real de la población probablemente está entre 39% y 45%, no exactamente en 42%"
  - "Que el candidato A tiene exactamente 42% de los votos, sin ningún margen de duda"
  - "Que 3 de cada 100 encuestados no respondieron la pregunta"
respuesta: "Que el resultado real de la población probablemente está entre 39% y 45%, no exactamente en 42%"

explicacion: |
  Es la misma idea del intervalo de confianza aplicada a una encuesta
  electoral.
```

### 3 — Problema: identificar un empate técnico

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["margen_error", "problema"]

variables:
  candidato_a: uno_de([41, 43])
  candidato_b: uno_de([39, 40])
  margen_error: 3

respuesta: abs(candidato_a - candidato_b) < margen_error
tipo: vf

enunciado: "Candidato A: {candidato_a}%; Candidato B: {candidato_b}%, con un margen de error de ±{margen_error} puntos. ¿Es esto un 'empate técnico' (la diferencia es menor que el margen de error)?"

explicacion: |
  Si la diferencia real es menor que el margen de error, no se puede
  afirmar con confianza quién va primero.
```

### 4 — Empate técnico: definición

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["margen_error"]

respuesta: verdadero
tipo: vf

enunciado: "Si la diferencia entre dos candidatos en una encuesta es menor que el margen de error combinado, se lo llama 'empate técnico', aunque los números muestren a uno numéricamente arriba del otro."

explicacion: |
  El margen de error dice que el orden real podría estar invertido.
```

### 5 — Qué son los indecisos

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "basico"
  tags: ["indecisos", "vocabulario"]

enunciado: "¿Qué son los 'indecisos' o 'no sabe / no contesta' en una encuesta electoral?"
tipo: mc
opciones_explicitas:
  - "Encuestados que todavía no decidieron su voto, o que no quieren revelar su intención"
  - "Encuestados que no fueron contactados por la encuestadora"
  - "Votantes que no están habilitados legalmente para votar"
respuesta: "Encuestados que todavía no decidieron su voto, o que no quieren revelar su intención"

explicacion: |
  Cómo se los trata en el cálculo de porcentajes cambia la lectura de
  los resultados.
```

### 6 — Problema: recalcular porcentajes descontando indecisos

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["indecisos", "problema"]

variables:
  candidato_a: 35
  candidato_b: 30
  indecisos: 35

respuesta: redondear(candidato_a / (candidato_a + candidato_b) * 100, 1)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Sobre el total de encuestados: Candidato A={candidato_a}%, Candidato B={candidato_b}%, indecisos={indecisos}%. ¿Cuál es el porcentaje del Candidato A si se recalcula SOLO sobre quienes sí respondieron (descontando indecisos)?"

pasos:
  - "Total que respondió = {candidato_a}+{candidato_b} = {candidato_a + candidato_b}"
  - "% de A sobre respondidos = {candidato_a}/{candidato_a + candidato_b} × 100 = {redondear(candidato_a / (candidato_a + candidato_b) * 100, 1)}%"

explicacion: |
  El número sube respecto del {candidato_a}% original — ambas formas
  de calcular son válidas, pero dan números distintos.
```

### 7 — Encuesta vs. boca de urna

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["boca_de_urna", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una encuesta electoral y una boca de urna (exit poll)?"
tipo: mc
opciones_explicitas:
  - "La encuesta se hace antes de la elección preguntando intención de voto (que puede cambiar); la boca de urna se hace el día de la votación preguntando a quienes ya votaron qué eligieron"
  - "Son exactamente lo mismo, sólo cambia el nombre"
  - "La boca de urna siempre se hace varias semanas antes de la elección"
respuesta: "La encuesta se hace antes de la elección preguntando intención de voto (que puede cambiar); la boca de urna se hace el día de la votación preguntando a quienes ya votaron qué eligieron"

explicacion: |
  La boca de urna suele ser más precisa porque mide un voto ya
  emitido, no una intención futura.
```

### 8 — La fecha de una encuesta puede quedar desactualizada

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["fecha"]

respuesta: verdadero
tipo: vf

enunciado: "Una encuesta hecha dos semanas antes de una elección puede no reflejar la intención de voto del día de la votación, especialmente si ocurrió algún evento relevante en el medio."

explicacion: |
  La intención de voto no es estática — cambia con el tiempo y con
  los acontecimientos de la campaña.
```

### 9 — Aplicación: por qué la fecha importa

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "basico"
  tags: ["fecha", "aplicacion"]

enunciado: "Al comparar dos encuestas del mismo candidato, una de hace un mes y otra de esta semana, ¿qué conviene tener en cuenta?"
tipo: mc
opciones_explicitas:
  - "Que la más reciente es probablemente más representativa de la situación actual, y que la diferencia entre ambas podría reflejar un cambio real de opinión, no un error de medición"
  - "Que ambas encuestas miden exactamente lo mismo, sin importar la fecha"
  - "Que sólo la encuesta más vieja es confiable"
respuesta: "Que la más reciente es probablemente más representativa de la situación actual, y que la diferencia entre ambas podría reflejar un cambio real de opinión, no un error de medición"

explicacion: |
  Comparar encuestas de fechas muy distintas como si midieran lo mismo
  es un error común de lectura.
```

### 10 — Qué es el "voto oculto"

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["voto_oculto", "vocabulario"]

enunciado: "¿Qué es el fenómeno del 'voto oculto' en encuestas electorales?"
tipo: mc
opciones_explicitas:
  - "Parte del electorado no revela su verdadera intención de voto por miedo al juicio social, torciendo el resultado de la encuesta respecto del voto real"
  - "Votantes que legalmente no pueden revelar su voto"
  - "Un error de cálculo en el conteo de votos"
respuesta: "Parte del electorado no revela su verdadera intención de voto por miedo al juicio social, torciendo el resultado de la encuesta respecto del voto real"

explicacion: |
  Es un tipo de sesgo de no respuesta específico del contexto
  político.
```

### 11 — La metodología de contacto puede introducir sesgo

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["sesgo", "metodologia"]

respuesta: verdadero
tipo: vf

enunciado: "La metodología de una encuesta (telefónica, presencial, online) puede introducir sesgo de selección, porque cada método de contacto excluye sistemáticamente a cierto tipo de personas (quien no tiene teléfono registrado, quien no usa internet, etc.)."

explicacion: |
  Es la aplicación directa del sesgo de selección de
  `../../matematica/muestreo-y-sesgo/`.
```

### 12 — Por qué preguntar quién financió la encuesta

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué es relevante saber quién encargó o financió una encuesta electoral?"
tipo: mc
opciones_explicitas:
  - "Porque puede indicar un posible conflicto de interés — no invalida el resultado por sí solo, pero es un dato más a considerar al evaluar la fuente"
  - "Porque una encuesta financiada por un partido político siempre es matemáticamente incorrecta"
  - "No es relevante en absoluto, el financiamiento nunca afecta la metodología"
respuesta: "Porque puede indicar un posible conflicto de interés — no invalida el resultado por sí solo, pero es un dato más a considerar al evaluar la fuente"

explicacion: |
  Es uno de los cinco chequeos de lectura crítica de este módulo, no
  una descalificación automática.
```

### 13 — Problema: comparar encuestas con distinto tamaño de muestra

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["margen_error", "problema"]

variables:
  n_chica: 400
  n_grande: 1600
  sigma_aprox: 25

respuesta: redondear(sigma_aprox / sqrt(n_chica), 2) > redondear(sigma_aprox / sqrt(n_grande), 2)
tipo: vf

enunciado: "Encuesta A tiene n={n_chica} encuestados; Encuesta B tiene n={n_grande}. Con el mismo desvío aproximado, ¿el margen de error de la Encuesta A es MAYOR que el de la Encuesta B?"

explicacion: |
  Es la misma relación de `../../matematica/teorema-central-del-limite/`:
  a menor tamaño de muestra, mayor error estándar y mayor margen de
  error.
```

### 14 — Relación con muestreo y sesgo

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Qué relación tiene la lectura crítica de una encuesta electoral con `../../matematica/muestreo-y-sesgo/`?"
tipo: mc
opciones_explicitas:
  - "Es una aplicación directa: metodología de contacto, representatividad de la muestra y tipos de sesgo son exactamente los mismos conceptos, aplicados a intención de voto"
  - "No tiene ninguna relación real"
  - "Las encuestas electorales no usan ningún método de muestreo, preguntan a toda la población"
respuesta: "Es una aplicación directa: metodología de contacto, representatividad de la muestra y tipos de sesgo son exactamente los mismos conceptos, aplicados a intención de voto"

explicacion: |
  Es el prerrequisito formal de este módulo, según `troncos.md`.
```

### 15 — Problema: diferencia mayor que el margen de error

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["margen_error", "problema"]

variables:
  candidato_a: 52
  candidato_b: 38
  margen_error: 3

respuesta: abs(candidato_a - candidato_b) > margen_error
tipo: vf

enunciado: "Candidato A: {candidato_a}%; Candidato B: {candidato_b}%, margen de error ±{margen_error} puntos. ¿La diferencia entre ambos SUPERA el margen de error (no es un empate técnico)?"

explicacion: |
  Con una diferencia tan grande respecto del margen de error, sí se
  puede afirmar con más confianza quién va adelante.
```

### 16 — Ambas formas de calcular indecisos son válidas si se aclaran

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["indecisos"]

respuesta: verdadero
tipo: vf

enunciado: "Reportar los porcentajes de una encuesta sobre el total de encuestados o sólo sobre quienes respondieron son dos formas igualmente válidas — el problema aparece cuando no se aclara cuál de las dos se está usando."

explicacion: |
  El error no está en el método elegido, sino en la falta de
  transparencia sobre cuál se usó.
```

### 17 — Aplicación: checklist para leer una encuesta

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Antes de confiar en el resultado de una encuesta electoral citada en una noticia, ¿qué conviene revisar?"
tipo: mc
opciones_explicitas:
  - "El margen de error, si los porcentajes incluyen o no a los indecisos, la metodología usada, la fecha de realización, y quién la encargó o financió"
  - "Sólo el nombre de la empresa encuestadora, nada más"
  - "No hace falta revisar nada, cualquier encuesta publicada es igual de confiable"
respuesta: "El margen de error, si los porcentajes incluyen o no a los indecisos, la metodología usada, la fecha de realización, y quién la encargó o financió"

explicacion: |
  Son los cinco chequeos completos descritos en `teoria.md`.
```

### 18 — Problema: boca de urna vs. encuesta previa

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["boca_de_urna", "problema"]

enunciado: "Una encuesta de dos semanas antes daba 45% al Candidato A; la boca de urna del día de la elección da 48%. ¿Cuál de las dos mediciones es, en principio, más confiable para saber el resultado real de esa elección?"
tipo: mc
opciones_explicitas:
  - "La boca de urna, porque mide votos ya emitidos el mismo día, sin depender de una intención de voto que todavía podía cambiar"
  - "La encuesta de dos semanas antes, porque siempre es más precisa que una boca de urna"
respuesta: "La boca de urna, porque mide votos ya emitidos el mismo día, sin depender de una intención de voto que todavía podía cambiar"

explicacion: |
  No mide lo mismo: intención futura vs. voto ya realizado.
```

### 19 — El margen de error no es cero, aunque la muestra sea grande

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "avanzado"
  tags: ["margen_error"]

respuesta: verdadero
tipo: vf

enunciado: "Ninguna encuesta con una muestra (por más grande que sea) tiene un margen de error exactamente igual a cero — sólo un censo completo de todo el electorado lo tendría."

explicacion: |
  Es la misma idea de `../../matematica/intervalo-de-confianza/`: más
  muestra reduce el margen de error, pero nunca lo elimina del todo.
```

### 20 — Cierre: para qué sirve leer una encuesta con criterio

```
metadata:
  materia: "civica"
  tema: "encuesta_electoral"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber leer una encuesta electoral con criterio?"
tipo: mc
opciones_explicitas:
  - "Para interpretar correctamente una cifra de intención de voto, sin tratarla como un resultado exacto ni descartarla por sistema, evaluando margen de error, metodología, fecha y fuente"
  - "Para poder predecir con certeza absoluta el resultado de cualquier elección"
  - "Sólo sirve para trabajar en una empresa encuestadora"
respuesta: "Para interpretar correctamente una cifra de intención de voto, sin tratarla como un resultado exacto ni descartarla por sistema, evaluando margen de error, metodología, fecha y fuente"

explicacion: |
  Es la aplicación cívica directa de
  `../../matematica/muestreo-y-sesgo/` al contexto donde más se citan
  encuestas en público.
```
