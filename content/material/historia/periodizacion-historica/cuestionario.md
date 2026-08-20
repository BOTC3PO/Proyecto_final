# Historia — Periodización histórica (cuestionario, 20 preguntas VBLang)

> Tema: `T4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es periodizar

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["periodizacion", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Periodizar es dividir el tiempo histórico en bloques delimitados por hechos que se consideran lo suficientemente importantes como para marcar un antes y un después."

pasos:
  - "Es una herramienta de análisis que los historiadores construyen, no una división natural del tiempo."

explicacion: |
  Verdadero: es la definición central de periodización.
```

### 2 — Identificar la Prehistoria

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["prehistoria"]

variables:
  n: uno_de([1, 1])

respuesta: "Prehistoria"
tipo: mc
opciones_explicitas: ["Prehistoria", "Edad Antigua", "Edad Media"]

enunciado: "El período que va desde el origen de la humanidad hasta la invención de la escritura se llama..."

pasos:
  - "Es el primer período de la periodización clásica occidental."

explicacion: |
  La Prehistoria es el período anterior a la invención de la
  escritura.
```

### 3 — Identificar la Edad Antigua

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_antigua"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Antigua"
tipo: mc
opciones_explicitas: ["Prehistoria", "Edad Antigua", "Edad Media"]

enunciado: "El período que va desde la invención de la escritura hasta la caída del Imperio Romano de Occidente (476 d.C.) se llama..."

pasos:
  - "Es el segundo período de la periodización clásica occidental."

explicacion: |
  La Edad Antigua va desde la escritura hasta la caída de Roma.
```

### 4 — Identificar la Edad Media

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_media"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Media"
tipo: mc
opciones_explicitas: ["Edad Antigua", "Edad Media", "Edad Moderna"]

enunciado: "El período que va desde el 476 d.C. hasta 1453 o 1492 (según el criterio usado) se llama..."

pasos:
  - "Es el tercer período de la periodización clásica occidental."

explicacion: |
  La Edad Media va desde la caída de Roma hasta la caída de
  Constantinopla o el descubrimiento de América.
```

### 5 — Identificar la Edad Moderna

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_moderna"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Moderna"
tipo: mc
opciones_explicitas: ["Edad Media", "Edad Moderna", "Edad Contemporánea"]

enunciado: "El período que va desde fines del siglo XV hasta la Revolución Francesa (1789) se llama..."

pasos:
  - "Es el cuarto período de la periodización clásica occidental."

explicacion: |
  La Edad Moderna va desde fines del s. XV hasta 1789.
```

### 6 — Identificar la Edad Contemporánea

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "basico"
  tags: ["edad_contemporanea"]

variables:
  n: uno_de([1, 1])

respuesta: "Edad Contemporánea"
tipo: mc
opciones_explicitas: ["Edad Moderna", "Edad Contemporánea", "Edad Media"]

enunciado: "El período que va desde 1789 hasta la actualidad se llama..."

pasos:
  - "Es el quinto y último período de la periodización clásica occidental."

explicacion: |
  La Edad Contemporánea va desde la Revolución Francesa hasta hoy.
```

### 7 — Orden de los cinco períodos clásicos

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "orden"]

enunciado: "Ordená cronológicamente los cinco períodos de la periodización clásica occidental."
tipo: ordenar
opciones_explicitas:
  - "Prehistoria"
  - "Edad Antigua"
  - "Edad Media"
  - "Edad Moderna"
  - "Edad Contemporánea"
respuesta_orden: ["Prehistoria", "Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"]
explicacion: |
  El orden sigue la secuencia cronológica estándar de la
  periodización clásica occidental.
```

### 8 — Los límites de un período no son un hecho literal para todo el mundo

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["limites_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decir que \"la Edad Media terminó en 1492\" es una convención útil para organizar el estudio, no un hecho que ocurrió literalmente ese día para todas las sociedades del planeta."

pasos:
  - "Ningún cambio histórico ocurre de un día para el otro en todo el mundo a la vez."

explicacion: |
  Verdadero: los límites de los períodos son convencionales, no
  hechos absolutos y simultáneos en todas partes.
```

### 9 — Distintos historiadores pueden proponer límites distintos

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["limites_convencionales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos historiadores pueden proponer límites algo distintos para un mismo período, según qué criterio prioricen."

pasos:
  - "Por ejemplo, la Edad Media puede terminar en 1453 o en 1492, según el criterio elegido."

explicacion: |
  Verdadero: es un matiz importante sobre la flexibilidad de los
  límites de período según el criterio historiográfico usado.
```

### 10 — La periodización clásica es occidental, no universal

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion_occidental"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La periodización clásica (Prehistoria/Antigua/Media/Moderna/Contemporánea) está construida desde la historia europea, y aplicarla sin más a otras regiones puede ser engañoso."

pasos:
  - "Los hitos que la organizan (caída de Roma, Revolución Francesa) no tienen el mismo peso o sentido en otras historias regionales."

explicacion: |
  Verdadero: es un matiz importante sobre las limitaciones de esta
  periodización fuera del contexto europeo.
```

### 11 — Ejemplo de por qué la periodización occidental no es universal

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion_occidental", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aplicar directamente el rótulo \"Edad Media\" a la historia de los pueblos originarios de América antes de 1492 puede ser engañoso, porque ese período fue definido a partir de hitos europeos que no aplican de la misma forma a esas sociedades."

pasos:
  - "Es el ejemplo concreto mencionado en la teoría sobre las limitaciones de esta periodización."

explicacion: |
  Verdadero: es la aplicación práctica de por qué esta periodización
  es una herramienta útil pero no neutral.
```

### 12 — Periodizar permite comparar etapas

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Dividir la historia en períodos permite comparar etapas entre sí, como preguntar qué caracterizaba a la Edad Media que ya no estaba en la Edad Moderna."

pasos:
  - "Es una de las utilidades centrales de periodizar."

explicacion: |
  Verdadero: la comparación entre períodos es una de las razones
  principales por las que periodizar ayuda a pensar históricamente.
```

### 13 — Sin periodizar, la historia sería una lista interminable

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["utilidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin periodizar, la historia sería una lista interminable de hechos sueltos sin ningún marco organizador."

pasos:
  - "Es la razón central de por qué periodizar es una herramienta valiosa, más allá de memorizar fechas de corte."

explicacion: |
  Verdadero: es la conclusión central sobre por qué periodizar ayuda
  a pensar, no sólo a clasificar.
```

### 14 — El tiempo en sí es continuo

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "conceptual"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tiempo histórico en sí es continuo; la división en períodos es una construcción de los historiadores, no una propiedad del tiempo mismo."

pasos:
  - "Es la aclaración conceptual central de por qué periodizar es una \"herramienta\" y no una \"división natural\"."

explicacion: |
  Verdadero: es el punto de partida conceptual de todo este tema.
```

### 15 — La caída de Roma como hito de periodización

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["edad_antigua", "edad_media"]

variables:
  n: uno_de([1, 1])

respuesta: "476"
tipo: completar

enunciado: "El año que marca convencionalmente el límite entre la Edad Antigua y la Edad Media (caída del Imperio Romano de Occidente) es el..."

pasos:
  - "Es uno de los hitos clásicos de la periodización occidental."

explicacion: |
  El 476 d.C. es el año convencional de la caída de Roma que marca el
  inicio de la Edad Media.
```

### 16 — La Revolución Francesa como hito de periodización

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["edad_moderna", "edad_contemporanea"]

variables:
  n: uno_de([1, 1])

respuesta: "1789"
tipo: completar

enunciado: "El año que marca convencionalmente el límite entre la Edad Moderna y la Edad Contemporánea (Revolución Francesa) es el..."

pasos:
  - "Es otro de los hitos clásicos de la periodización occidental."

explicacion: |
  1789 es el año convencional de la Revolución Francesa que marca el
  inicio de la Edad Contemporánea.
```

### 17 — Ubicar un año en su período correspondiente

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "practica"]

variables:
  anios: [1200, 1700, 1900]
  periodos: ["Edad Media", "Edad Moderna", "Edad Contemporánea"]
  idx: uno_de([0, 1, 2])

respuesta: periodos[idx]
tipo: mc
opciones_explicitas: ["Edad Antigua", "Edad Media", "Edad Moderna", "Edad Contemporánea"]

enunciado: "El año {anios[idx]} corresponde a la..."

pasos:
  - "Ubicar cada año dentro del rango de fechas de cada período de la periodización clásica."

explicacion: |
  Aplicar los límites de cada período para ubicar años concretos es
  la práctica central de este tema.
```

### 18 — Ordenar el proceso para periodizar un tema histórico

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "intermedio"
  tags: ["periodizacion", "metodo"]

enunciado: "Ordená los pasos para periodizar un tema histórico específico."
tipo: ordenar
opciones_explicitas:
  - "Identificar el rango temporal total del tema a estudiar"
  - "Buscar hechos suficientemente importantes que marquen posibles cortes de período"
  - "Dividir el rango en bloques delimitados por esos hechos"
  - "Verificar que la periodización elegida tenga sentido para el criterio que se quiere analizar"
respuesta_orden: ["Identificar el rango temporal total del tema a estudiar", "Buscar hechos suficientemente importantes que marquen posibles cortes de período", "Dividir el rango en bloques delimitados por esos hechos", "Verificar que la periodización elegida tenga sentido para el criterio que se quiere analizar"]
explicacion: |
  El proceso va de delimitar el rango total a construir la división
  en bloques según hitos relevantes.
```

### 19 — Periodización histórica como prerrequisito de causa y consecuencia

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Periodizar con precisión es el prerrequisito directo de analizar causa y consecuencia: antes de estudiar por qué ocurrió algo, hace falta un marco temporal claro donde ubicar esas causas y consecuencias."

pasos:
  - "Ver `../causa-y-consecuencia/`: es el tema siguiente de la cadena de pensamiento histórico."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo del
  siguiente en la cadena.
```

### 20 — Aplicación: elegir el período correcto al estudiar un hecho

```
metadata:
  materia: "historia"
  tema: "periodizacion_historica"
  nivel: "avanzado"
  tags: ["periodizacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al estudiar un hecho histórico, ubicarlo primero dentro de la periodización general (qué edad, qué siglo) ayuda a comparar rápidamente con otros procesos conocidos de esa misma etapa."

pasos:
  - "Es la aplicación práctica directa de este tema como estrategia de estudio."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al estudiar
  cualquier hecho histórico nuevo.
```
