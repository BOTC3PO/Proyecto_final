# Matemática — Correlación no es causalidad (cuestionario, 22 preguntas VBLang)

> Tema: `C3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — El principio central

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["correlacion", "vocabulario"]

enunciado: "¿Qué significa el principio 'correlación no implica causalidad'?"
tipo: mc
opciones_explicitas:
  - "Que dos variables correlacionadas (que se mueven juntas) no necesariamente significan que una cause a la otra"
  - "Que dos variables correlacionadas siempre están relacionadas por causalidad"
  - "Que la correlación y la causalidad son exactamente lo mismo"
respuesta: "Que dos variables correlacionadas (que se mueven juntas) no necesariamente significan que una cause a la otra"

explicacion: |
  Un coeficiente de correlación alto (`../regresion-lineal/`) no
  prueba causalidad por sí solo.
```

### 2 — Ejemplo clásico: helados y ahogamientos

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["tercera_variable", "aplicacion"]

enunciado: "Las ventas de helado y los ahogamientos en piletas están correlacionados: ambos suben en la misma época del año. ¿Cuál es la explicación real de esta correlación?"
tipo: mc
opciones_explicitas:
  - "Una tercera variable (el calor del verano) hace subir a ambas cosas a la vez, sin que ninguna cause a la otra"
  - "Comer helado causa directamente más ahogamientos"
  - "Los ahogamientos causan que suban las ventas de helado"
respuesta: "Una tercera variable (el calor del verano) hace subir a ambas cosas a la vez, sin que ninguna cause a la otra"

explicacion: |
  Es el ejemplo clásico de variable de confusión (tercera variable).
```

### 3 — Qué es la causalidad inversa

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["causalidad_inversa", "vocabulario"]

enunciado: "¿Qué es la 'causalidad inversa' como explicación alternativa a una correlación?"
tipo: mc
opciones_explicitas:
  - "Que la dirección real de la causa está invertida: no es que A cause B, sino que B cause A"
  - "Que ninguna de las dos variables está relacionada con la otra"
  - "Que la correlación calculada tiene un error de signo"
respuesta: "Que la dirección real de la causa está invertida: no es que A cause B, sino que B cause A"

explicacion: |
  Ejemplo: ¿sonreír causa felicidad, o la felicidad causa que la
  gente sonría más?
```

### 4 — Qué es una correlación espuria

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion_espuria", "vocabulario"]

enunciado: "¿Qué es una correlación espuria (por coincidencia)?"
tipo: mc
opciones_explicitas:
  - "Una correlación fuerte entre dos variables que aparece por pura casualidad estadística, sin ningún mecanismo real que las conecte"
  - "Una correlación calculada con un método matemático incorrecto"
  - "Otro nombre para cualquier correlación negativa"
respuesta: "Una correlación fuerte entre dos variables que aparece por pura casualidad estadística, sin ningún mecanismo real que las conecte"

explicacion: |
  Como el consumo de queso mozzarella correlacionando con los
  doctorados en ingeniería civil — puro azar, sin relación real.
```

### 5 — Dos variables correlacionadas sin causa entre sí

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Dos variables pueden estar fuertemente correlacionadas sin que ninguna de las dos cause a la otra en absoluto."

explicacion: |
  Puede deberse a una tercera variable, a coincidencia, o a
  causalidad inversa.
```

### 6 — Problema: identificar la tercera variable

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["tercera_variable", "problema"]

enunciado: "Las ventas de paraguas y la cantidad de accidentes de tránsito están correlacionadas: ambas suben los mismos días. ¿Cuál es la tercera variable más probable detrás de esta correlación?"
tipo: mc
opciones_explicitas:
  - "La lluvia: hace que más gente compre/use paraguas, y también que haya más accidentes (piso resbaladizo, menor visibilidad)"
  - "Los paraguas causan directamente los accidentes de tránsito"
  - "No existe ninguna explicación posible para esta correlación"
respuesta: "La lluvia: hace que más gente compre/use paraguas, y también que haya más accidentes (piso resbaladizo, menor visibilidad)"

explicacion: |
  Mismo patrón que el ejemplo de helados y ahogamientos: una tercera
  variable (el clima) mueve a ambas.
```

### 7 — Cómo se prueba causalidad real

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Cuál es la forma estándar de probar que A realmente CAUSA a B, más allá de una simple correlación?"
tipo: mc
opciones_explicitas:
  - "Un experimento controlado y aleatorizado, comparando un grupo que recibe el tratamiento contra un grupo de control"
  - "Calcular un coeficiente de correlación todavía más alto"
  - "No existe ninguna forma de probar causalidad de verdad"
respuesta: "Un experimento controlado y aleatorizado, comparando un grupo que recibe el tratamiento contra un grupo de control"

explicacion: |
  La aleatorización reparte parejo cualquier tercera variable posible
  entre ambos grupos.
```

### 8 — Estudios observacionales no prueban causalidad por sí solos

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["experimento"]

respuesta: verdadero
tipo: vf

enunciado: "Un estudio puramente observacional (medir variables tal como ocurren, sin intervenir) no puede, por sí solo, probar causalidad — siempre queda abierta la posibilidad de una tercera variable o causalidad inversa."

explicacion: |
  Por eso los estudios científicos serios buscan, cuando es posible,
  complementar con experimentos controlados.
```

### 9 — Aplicación real: leer un titular con cuidado

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un titular dice: 'Un estudio encuentra que las personas que duermen con la luz prendida tienen más problemas de salud'. ¿Qué pregunta crítica conviene hacerse antes de aceptar que dormir con luz CAUSA problemas de salud?"
tipo: mc
opciones_explicitas:
  - "¿El estudio fue un experimento controlado, o sólo observó una correlación que podría explicarse por una tercera variable (por ejemplo, quienes ya tienen problemas de salud podrían dormir distinto por otras razones)?"
  - "Ninguna pregunta hace falta, un titular de un estudio siempre implica causalidad probada"
  - "Sólo importa cuántas personas participaron en el estudio, nada más"
respuesta: "¿El estudio fue un experimento controlado, o sólo observó una correlación que podría explicarse por una tercera variable (por ejemplo, quienes ya tienen problemas de salud podrían dormir distinto por otras razones)?"

explicacion: |
  Es la aplicación directa del pensamiento crítico de este módulo a
  una noticia real.
```

### 10 — Problema: identificar posible causalidad inversa

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["causalidad_inversa", "problema"]

enunciado: "Un estudio encuentra que las personas con más amigos reportan sentirse más felices. Alguien concluye: 'tener más amigos causa felicidad'. ¿Qué explicación alternativa (causalidad inversa) también es plausible?"
tipo: mc
opciones_explicitas:
  - "Que ser feliz haga a alguien más sociable y agradable de tratar, y por eso termine consiguiendo más amigos (la felicidad causaría los amigos, no al revés)"
  - "No hay ninguna explicación alternativa posible en este caso"
  - "Los amigos y la felicidad no pueden estar relacionados de ninguna forma"
respuesta: "Que ser feliz haga a alguien más sociable y agradable de tratar, y por eso termine consiguiendo más amigos (la felicidad causaría los amigos, no al revés)"

explicacion: |
  La correlación sola no distingue cuál de las dos direcciones (o
  ambas a la vez) es la real.
```

### 11 — Qué es un ensayo controlado aleatorizado

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Qué caracteriza a un ensayo controlado aleatorizado (RCT)?"
tipo: mc
opciones_explicitas:
  - "Los participantes se asignan AL AZAR a un grupo que recibe el tratamiento o a un grupo de control, para poder comparar el efecto real"
  - "Los participantes eligen ellos mismos si quieren recibir el tratamiento o no"
  - "No tiene grupo de control, sólo mide a quienes ya recibieron el tratamiento"
respuesta: "Los participantes se asignan AL AZAR a un grupo que recibe el tratamiento o a un grupo de control, para poder comparar el efecto real"

explicacion: |
  Si los participantes eligieran ellos mismos su grupo, podría
  aparecer sesgo del voluntario (`../muestreo-y-sesgo/`).
```

### 12 — A más comparaciones al azar, más correlaciones espurias

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion_espuria"]

respuesta: verdadero
tipo: vf

enunciado: "Cuantos más pares de variables se comparen al azar (sin ninguna hipótesis previa), más probable es encontrar correlaciones fuertes por pura coincidencia, sin ninguna relación real de por medio."

explicacion: |
  Es la razón matemática detrás de ejemplos absurdos como el consumo
  de mozzarella correlacionando con doctorados en ingeniería civil.
```

### 13 — Aplicación real: correlaciones espurias documentadas

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["correlacion_espuria", "aplicacion"]

enunciado: "El sitio 'Spurious Correlations' (Tyler Vigen) documenta con datos reales que el consumo per cápita de queso mozzarella en EE.UU. correlaciona fuertemente, año a año, con la cantidad de doctorados otorgados en ingeniería civil. ¿Qué explica esta correlación?"
tipo: mc
opciones_explicitas:
  - "Pura coincidencia estadística: no hay ningún mecanismo real que conecte el consumo de mozzarella con los doctorados en ingeniería"
  - "El consumo de mozzarella mejora el rendimiento académico en ingeniería civil"
  - "Los doctorados en ingeniería civil aumentan la producción de mozzarella"
respuesta: "Pura coincidencia estadística: no hay ningún mecanismo real que conecte el consumo de mozzarella con los doctorados en ingeniería"

explicacion: |
  Es el ejemplo clásico de correlación espuria, usado justamente para
  ilustrar este error de razonamiento de forma memorable.
```

### 14 — Problema: distinguir causalidad probable de tercera variable

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "¿Cuál de estos dos casos tiene MÁS evidencia a favor de causalidad real, más allá de la correlación simple?"
tipo: mc
opciones_explicitas:
  - "Fumar y cáncer de pulmón: además de la correlación observacional, hay experimentos en animales, mecanismos biológicos conocidos (sustancias cancerígenas del humo) y estudios longitudinales que refuerzan la causalidad"
  - "Ventas de helado y ahogamientos: sólo hay una correlación estacional, sin ningún mecanismo biológico que conecte comer helado con ahogarse"
respuesta: "Fumar y cáncer de pulmón: además de la correlación observacional, hay experimentos en animales, mecanismos biológicos conocidos (sustancias cancerígenas del humo) y estudios longitudinales que refuerzan la causalidad"

explicacion: |
  La causalidad se establece con evidencia ACUMULADA de varios tipos,
  no con una sola correlación aislada.
```

### 15 — Correlación fuerte sigue sin probar causalidad

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una correlación muy fuerte (r cercano a ±1) puede ser más llamativa que una débil, pero por sí sola sigue sin probar causalidad — las mismas explicaciones alternativas (tercera variable, causalidad inversa, coincidencia) siguen siendo posibles."

explicacion: |
  La fuerza de la correlación no cambia el tipo de evidencia que
  aporta.
```

### 16 — Por qué los estudios serios usan grupo de control

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["experimento", "aplicacion"]

enunciado: "¿Por qué un ensayo clínico serio siempre compara el tratamiento contra un grupo de control, en vez de sólo medir a quienes recibieron el tratamiento?"
tipo: mc
opciones_explicitas:
  - "Porque sin un grupo de control no hay forma de saber si la mejora observada se debe realmente al tratamiento, o hubiera pasado igual sin él"
  - "El grupo de control es sólo un formalismo sin ninguna utilidad real"
  - "Porque la ley obliga a tener siempre un grupo de control, sin ninguna razón científica"
respuesta: "Porque sin un grupo de control no hay forma de saber si la mejora observada se debe realmente al tratamiento, o hubiera pasado igual sin él"

explicacion: |
  El grupo de control es el punto de comparación que aísla el efecto
  real del tratamiento.
```

### 17 — Qué hace un grupo de control

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["experimento", "vocabulario"]

enunciado: "¿Qué función cumple el grupo de control en un experimento?"
tipo: mc
opciones_explicitas:
  - "Sirve de punto de comparación: no recibe el tratamiento (o recibe un placebo), para poder medir qué hubiera pasado sin él"
  - "Recibe una dosis doble del tratamiento, para maximizar el efecto"
  - "Se elige siempre a mano, nunca al azar"
respuesta: "Sirve de punto de comparación: no recibe el tratamiento (o recibe un placebo), para poder medir qué hubiera pasado sin él"

explicacion: |
  Sin ese punto de comparación, no se puede aislar el efecto real del
  tratamiento.
```

### 18 — Problema: otra tercera variable

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["tercera_variable", "problema"]

enunciado: "En los incendios, se observa que a mayor cantidad de bomberos presentes, mayor es el monto de daños materiales del incendio. ¿Los bomberos CAUSAN más daños?"
tipo: mc
opciones_explicitas:
  - "No: la tercera variable es el TAMAÑO del incendio — los incendios más grandes necesitan más bomberos Y producen más daños, sin que unos causen los otros"
  - "Sí: enviar más bomberos causa directamente más daños materiales"
respuesta: "No: la tercera variable es el TAMAÑO del incendio — los incendios más grandes necesitan más bomberos Y producen más daños, sin que unos causen los otros"

explicacion: |
  Es un ejemplo clásico usado para ilustrar variables de confusión en
  cursos de estadística.
```

### 19 — Aplicación: leer críticamente un estudio

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al leer un estudio que reporta sólo una correlación (sin experimento controlado), ¿qué actitud es la más razonable?"
tipo: mc
opciones_explicitas:
  - "Tomarlo como una pista interesante que merece más investigación, sin aceptar automáticamente que una variable causa a la otra"
  - "Rechazar por completo cualquier estudio que no sea un experimento controlado"
  - "Aceptar automáticamente que la variable que aparece primero en el titular es la causa"
respuesta: "Tomarlo como una pista interesante que merece más investigación, sin aceptar automáticamente que una variable causa a la otra"

explicacion: |
  Los estudios observacionales tienen valor real (generan hipótesis a
  investigar), pero no alcanzan solos para probar causalidad.
```

### 20 — Completar: las tres explicaciones alternativas

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "intermedio"
  tags: ["completar"]

tipo: completar
enunciado: "Completá: ante una correlación entre A y B, además de 'A causa B', las otras explicaciones posibles son causalidad ___, una tercera variable, o pura coincidencia."
respuestas_validas:
  - "inversa"

explicacion: |
  Las cuatro explicaciones posibles: A causa B, B causa A (inversa),
  una tercera variable causa a ambas, o coincidencia.
```

### 21 — Completar: qué reparte la aleatorización

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "avanzado"
  tags: ["experimento", "completar"]

tipo: completar
enunciado: "Completá: en un experimento aleatorizado, asignar los participantes al azar entre grupo de tratamiento y grupo de control reparte parejo cualquier ___ variable posible entre ambos grupos."
respuestas_validas:
  - "tercera"

explicacion: |
  Es la razón por la que un experimento aleatorizado permite concluir
  causalidad de una forma que un estudio observacional no puede.
```

### 22 — Cierre: para qué sirve este principio

```
metadata:
  materia: "matematicas"
  tema: "correlacion_no_es_causalidad"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve tener presente que 'correlación no implica causalidad'?"
tipo: mc
opciones_explicitas:
  - "Para leer con pensamiento crítico noticias, estudios y estadísticas, distinguiendo cuándo hay evidencia real de causalidad y cuándo sólo hay una correlación que podría explicarse de otra forma"
  - "Para rechazar automáticamente cualquier resultado estadístico, sin importar la evidencia"
  - "Sólo tiene aplicación en estudios médicos, no en otros campos"
respuesta: "Para leer con pensamiento crítico noticias, estudios y estadísticas, distinguiendo cuándo hay evidencia real de causalidad y cuándo sólo hay una correlación que podría explicarse de otra forma"

explicacion: |
  Cierra la cadena que empezó en `../regresion-lineal/`: ajustar una
  recta es sólo el primer paso, interpretarla con cuidado es el
  segundo.
```
