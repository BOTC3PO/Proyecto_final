# Física — Plano inclinado y rozamiento (cuestionario, 29 preguntas VBLang)

> Tema: `F6`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un plano inclinado

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["plano_inclinado", "vocabulario"]

enunciado: "¿Qué es un plano inclinado?"
tipo: mc
opciones_explicitas:
  - "Una superficie que forma un ángulo con la horizontal, como una rampa"
  - "Una superficie perfectamente vertical"
  - "Otro nombre para una superficie sin rozamiento"
respuesta: "Una superficie que forma un ángulo con la horizontal, como una rampa"

explicacion: |
  El peso de un objeto sobre esa superficie se descompone en dos
  componentes.
```

### 2 — Completar: componente paralela del peso

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso paralela al plano inclinado es P∥ = peso × ___(θ)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  Es la componente que empuja al objeto a deslizar por la rampa.
```

### 3 — Completar: componente perpendicular del peso

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado", "completar"]

tipo: completar
enunciado: "Completá: la componente del peso perpendicular al plano inclinado es P⊥ = peso × ___(θ)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  Es la componente que presiona al objeto contra la superficie.
```

### 4 — Problema: componente paralela con ángulo de 30°

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_30: 0.5

respuesta: peso * sen_30
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (sen 30° = 0,5). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,5 = {peso * sen_30} N"

explicacion: |
  P∥ = peso × sen(θ).
```

### 5 — Problema: componente perpendicular con ángulo de 30°

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  cos_30: 0.87

respuesta: redondear(peso * cos_30, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 30° (cos 30° ≈ 0,87). ¿Cuál es la componente del peso perpendicular al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * cos_30, 1)} N"

explicacion: |
  P⊥ = peso × cos(θ).
```

### 6 — Problema: componente paralela con ángulo de 60°

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60, 80])
  sen_60: 0.87

respuesta: redondear(peso * sen_60, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 60° (sen 60° ≈ 0,87). ¿Cuál es la componente del peso paralela al plano?"

pasos:
  - "{peso} × 0,87 = {redondear(peso * sen_60, 1)} N"

explicacion: |
  Con un ángulo más pronunciado (60° en vez de 30°), la componente que
  empuja a deslizar es mayor.
```

### 7 — Problema: normal en un plano de 45°

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([20, 40, 60])
  cos_45: 0.71

respuesta: redondear(peso * cos_45, 1)
tipo: input
tolerancia_abs: 1

enunciado: "Un objeto de peso {peso} N está sobre un plano inclinado 45° (cos 45° ≈ 0,71). ¿Cuál es la normal que ejerce el plano sobre el objeto?"

pasos:
  - "{peso} × 0,71 = {redondear(peso * cos_45, 1)} N"

explicacion: |
  La normal equilibra sólo la componente perpendicular del peso.
```

### 8 — La normal NO es igual al peso completo en un plano inclinado

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: falso
tipo: vf

enunciado: "En un plano inclinado, la normal siempre es igual al peso completo del objeto, igual que en una superficie horizontal."

explicacion: |
  Sólo equilibra la componente perpendicular del peso (peso × cos θ),
  que es menor que el peso completo.
```

### 9 — A mayor ángulo, menor la normal

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, menor es la normal que actúa sobre el objeto."

explicacion: |
  cos(θ) disminuye a medida que θ aumenta (para ángulos entre 0° y 90°).
```

### 10 — A mayor ángulo, mayor la componente que empuja a deslizar

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el ángulo de inclinación del plano, mayor es la componente del peso que empuja al objeto a deslizar."

explicacion: |
  sen(θ) aumenta a medida que θ aumenta (para ángulos entre 0° y 90°).
```

### 11 — Qué es el rozamiento

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Qué es la fuerza de rozamiento?"
tipo: mc
opciones_explicitas:
  - "La fuerza que se opone al deslizamiento entre dos superficies en contacto"
  - "La fuerza que empuja a un objeto hacia adelante"
  - "Otro nombre para el peso de un objeto"
respuesta: "La fuerza que se opone al deslizamiento entre dos superficies en contacto"

explicacion: |
  Actúa siempre paralela a la superficie de contacto.
```

### 12 — Dirección del rozamiento

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿En qué dirección y sentido actúa el rozamiento respecto del movimiento (o del movimiento que tendería a ocurrir)?"
tipo: mc
opciones_explicitas:
  - "Paralela a la superficie de contacto, en sentido contrario al movimiento"
  - "Siempre perpendicular a la superficie de contacto"
  - "En la misma dirección y sentido que el movimiento"
respuesta: "Paralela a la superficie de contacto, en sentido contrario al movimiento"

explicacion: |
  Se opone al deslizamiento, nunca lo favorece.
```

### 13 — Diferencia entre rozamiento estático y cinético

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre rozamiento estático y cinético?"
tipo: mc
opciones_explicitas:
  - "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"
  - "El estático es siempre más chico que el cinético"
  - "No hay ninguna diferencia real entre ambos"
respuesta: "El estático actúa mientras el objeto está quieto; el cinético mientras ya se está moviendo"

explicacion: |
  El estático impide que el movimiento empiece; el cinético actúa
  durante el movimiento.
```

### 14 — El rozamiento estático tiene un valor máximo

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento estático tiene un valor máximo, más allá del cual el objeto empieza a deslizar."

explicacion: |
  f_estático_máx = μ_e × N: si la fuerza que intenta mover al objeto
  supera ese máximo, el objeto se pone en movimiento.
```

### 15 — El rozamiento cinético es prácticamente constante

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "El rozamiento cinético es prácticamente constante mientras el objeto se desliza, sin depender de qué tan rápido se mueva."

explicacion: |
  f_cinético = μ_c × N, sin ningún término de velocidad en los casos
  simples.
```

### 16 — El coeficiente estático suele ser mayor que el cinético

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En general, el coeficiente de rozamiento estático (μ_e) es mayor que el coeficiente cinético (μ_c) entre las mismas dos superficies."

explicacion: |
  Es la razón física por la que cuesta más iniciar un movimiento que
  mantenerlo.
```

### 17 — Qué es el coeficiente de rozamiento

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿De qué depende principalmente el coeficiente de rozamiento (μ) entre dos superficies?"
tipo: mc
opciones_explicitas:
  - "De qué materiales están en contacto"
  - "Del área total de contacto entre las superficies"
  - "De la velocidad a la que se mueve el objeto"
respuesta: "De qué materiales están en contacto"

explicacion: |
  Madera con madera da un μ distinto que goma con asfalto o hielo con
  metal.
```

### 18 — μ no depende del área de contacto

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["rozamiento"]

respuesta: verdadero
tipo: vf

enunciado: "En los casos simples que se estudian en la escuela, el coeficiente de rozamiento no depende del área de contacto entre las superficies."

explicacion: |
  Es un resultado que suele sorprender: un ladrillo apoyado sobre su
  cara grande o su cara chica tiene el mismo μ con el piso.
```

### 19 — Problema: fuerza de rozamiento cinético

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_c: 0.2

respuesta: normal * mu_c
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se desliza sobre una superficie con normal {normal} N, y el coeficiente de rozamiento cinético es 0,2. ¿Cuál es la fuerza de rozamiento?"

pasos:
  - "{normal} × 0,2 = {normal * mu_c} N"

explicacion: |
  f_cinético = μ_c × N.
```

### 20 — Problema: fuerza de rozamiento estático máxima

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "problema"]

variables:
  normal: uno_de([50, 100, 200])
  mu_e: 0.3

respuesta: normal * mu_e
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto en reposo está sobre una superficie con normal {normal} N, y el coeficiente de rozamiento estático es 0,3. ¿Cuál es la máxima fuerza de rozamiento estático posible, antes de que el objeto empiece a moverse?"

pasos:
  - "{normal} × 0,3 = {normal * mu_e} N"

explicacion: |
  f_estático_máx = μ_e × N.
```

### 21 — Problema: normal dado peso y ángulo

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  cos_60: 0.5

respuesta: peso * cos_60
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 60° (cos 60° = 0,5). ¿Cuál es la normal?"

pasos:
  - "{peso} × 0,5 = {peso * cos_60} N"

explicacion: |
  N = peso × cos(θ).
```

### 22 — Problema: fuerza neta a lo largo del plano

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60, 80])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: (peso * sen_30) - friccion
tipo: input
tolerancia_abs: 0.5

enunciado: "Un objeto de peso {peso} N está en un plano inclinado 30° (sen 30° = 0,5), ya deslizando, con una fuerza de rozamiento cinético de {friccion} N oponiéndose. ¿Cuál es la fuerza neta a lo largo del plano?"

pasos:
  - "P∥ = {peso} × 0,5 = {peso * sen_30} N"
  - "{peso * sen_30} − {friccion} = {(peso * sen_30) - friccion} N"

explicacion: |
  Se resta la fuerza de rozamiento a la componente del peso que empuja
  a deslizar.
```

### 23 — Fuerza neta positiva significa que el objeto acelera

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["plano_inclinado"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta a lo largo del plano (peso paralelo menos rozamiento) es positiva, el objeto acelera deslizando hacia abajo."

explicacion: |
  Es la segunda ley de Newton aplicada a lo largo del plano inclinado.
```

### 24 — Problema: ¿el objeto queda quieto o desliza?

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  peso: uno_de([40, 60])
  sen_30: 0.5
  friccion_max: peso * sen_30 + random(2, 10)

respuesta: verdadero
tipo: vf

enunciado: "Un objeto de peso {peso} N está en reposo en un plano inclinado 30° (P∥ = {peso * sen_30} N). El rozamiento estático máximo posible es {friccion_max} N. ¿El objeto se queda quieto (no empieza a deslizar)?"

explicacion: |
  Como el rozamiento estático máximo ({friccion_max} N) es mayor que la
  componente que empuja a deslizar ({peso * sen_30} N), el objeto no se
  mueve.
```

### 25 — Ordenar: pasos para analizar un plano inclinado con rozamiento

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "ordenar"]

enunciado: "Ordená los pasos para analizar si un objeto se queda quieto o desliza en un plano inclinado con rozamiento."
tipo: ordenar
opciones_explicitas:
  - "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"
  - "Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)"
  - "Calcular la normal y con ella la fuerza de rozamiento estático máximo"
respuesta_orden: ["Calcular la componente del peso paralela al plano (P∥ = peso × sen θ)", "Calcular la normal y con ella la fuerza de rozamiento estático máximo", "Comparar P∥ con el rozamiento máximo: si P∥ es mayor, el objeto desliza"]
explicacion: |
  La comparación final es la que decide si hay movimiento o no.
```

### 26 — Aplicación real: caminar sobre hielo

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué es tan difícil caminar sin resbalar sobre hielo?"
tipo: mc
opciones_explicitas:
  - "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"
  - "Porque el hielo no tiene normal"
  - "Porque el peso de la persona cambia sobre el hielo"
respuesta: "Porque el coeficiente de rozamiento entre el calzado y el hielo es muy bajo"

explicacion: |
  Con μ muy chico, la fuerza de rozamiento disponible es insuficiente
  para el empuje necesario al caminar.
```

### 27 — El rozamiento no es sólo una molestia

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "intermedio"
  tags: ["rozamiento", "vocabulario"]

enunciado: "¿Por qué el rozamiento, aunque suele pensarse como algo que 'frena' o 'molesta', también es necesario para muchas acciones cotidianas?"
tipo: mc
opciones_explicitas:
  - "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"
  - "En realidad el rozamiento nunca es útil, siempre conviene eliminarlo"
  - "El rozamiento sólo afecta a objetos en un plano inclinado"
respuesta: "Porque es la reacción del piso (ver la tercera ley) la que permite caminar, y sin rozamiento suficiente no habría tracción"

explicacion: |
  Sin rozamiento, las ruedas patinarían y los pies resbalarían sin
  poder empujar contra nada.
```

### 28 — Problema avanzado: plano inclinado con rozamiento y masa

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "avanzado"
  tags: ["plano_inclinado", "problema"]

variables:
  masa: uno_de([4, 8])
  sen_30: 0.5
  friccion: uno_de([5, 10])

respuesta: redondear(((masa * 10 * sen_30) - friccion) / masa, 2)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto de {masa} kg (peso {masa * 10} N, con g=10 m/s²) desliza por un plano inclinado 30° (sen 30° = 0,5), con una fuerza de rozamiento de {friccion} N. ¿Cuál es su aceleración a lo largo del plano?"

pasos:
  - "P∥ = {masa * 10} × 0,5 = {(masa * 10) * sen_30} N"
  - "Fuerza neta: {(masa * 10) * sen_30} − {friccion} = {((masa * 10) * sen_30) - friccion} N"
  - "a = {((masa * 10) * sen_30) - friccion} ÷ {masa} = {redondear(((masa * 10 * sen_30) - friccion) / masa, 2)} m/s²"

explicacion: |
  Combina el peso descompuesto, el rozamiento y la segunda ley de
  Newton en un solo problema.
```

### 29 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "plano_inclinado_y_rozamiento"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el plano inclinado y el rozamiento juntos?"
tipo: mc
opciones_explicitas:
  - "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"
  - "Sólo sirve para superficies perfectamente horizontales"
  - "Sólo aplica quitando el rozamiento del cálculo"
respuesta: "Para predecir si un objeto se desliza o queda quieto en una rampa real, y con qué aceleración, considerando ambos efectos a la vez"

explicacion: |
  Es la aplicación combinada de descomposición de vectores, las leyes de
  Newton y el rozamiento.
```
