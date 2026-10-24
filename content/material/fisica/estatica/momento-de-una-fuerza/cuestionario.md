# Física — Estática: momento de una fuerza (cuestionario, 22 preguntas VBLang)

> Tema: `EST1a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué mide el momento de una fuerza

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué mide el momento de una fuerza (torque)?"
tipo: mc
opciones_explicitas:
  - "La tendencia de una fuerza a hacer girar un cuerpo alrededor de un punto o eje"
  - "La tendencia de una fuerza a desplazar un cuerpo en línea recta"
  - "La energía que transmite una fuerza"
respuesta: "La tendencia de una fuerza a hacer girar un cuerpo alrededor de un punto o eje"

explicacion: |
  A diferencia de la fuerza neta (que mueve un cuerpo), el momento mide
  el efecto de giro.
```

### 2 — Completar: la fórmula del momento

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: M = F × ___, donde esa distancia se mide perpendicular al eje de giro."
respuestas_validas:
  - "d"
  - "brazo"
  - "brazo de palanca"

explicacion: |
  El brazo de palanca es la distancia perpendicular desde el eje de
  giro hasta la línea de acción de la fuerza.
```

### 3 — El brazo de palanca es perpendicular

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El brazo de palanca es la distancia PERPENDICULAR desde el eje de giro hasta la línea de acción de la fuerza."

explicacion: |
  Si la fuerza no es perpendicular al brazo, hay que usar la
  componente perpendicular (M=F×d×sen(θ)).
```

### 4 — Unidad del momento de una fuerza

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "vocabulario"]

enunciado: "¿En qué unidad se mide el momento de una fuerza en el Sistema Internacional?"
tipo: mc
opciones_explicitas:
  - "Newton-metro (N·m)"
  - "Newton (N)"
  - "Joule (J)"
respuesta: "Newton-metro (N·m)"

explicacion: |
  Es fuerza (N) por distancia (m) — aunque tenga las mismas unidades
  que el trabajo (Joule), son conceptos físicos distintos.
```

### 5 — Problema: calcular el momento

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F: random(5, 50)
  d: random_float(0.2, 2, 2)

respuesta: redondear(F * d, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N·m"

enunciado: "Se aplica una fuerza de {F} N, perpendicular a una palanca, a {d} m del eje de giro. ¿Cuál es el momento generado?"

pasos:
  - "M = F × d = {F} × {d} = {redondear(F * d, 2)} N·m"

explicacion: |
  Fuerza perpendicular al brazo: M=F×d directo, sin necesidad de seno.
```

### 6 — Problema: despejar la fuerza

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  M: random(10, 100)
  d: random_float(0.5, 2, 2)

respuesta: redondear(M / d, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N"

enunciado: "Para generar un momento de {M} N·m con una palanca de {d} m de brazo (fuerza perpendicular), ¿qué fuerza hace falta aplicar?"

pasos:
  - "F = M / d = {M} / {d} = {redondear(M / d, 2)} N"

explicacion: |
  Es el mismo despeje algebraico ya practicado con otras fórmulas de
  Física.
```

### 7 — Problema: despejar el brazo de palanca

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  M: random(10, 100)
  F: random(5, 50)

respuesta: redondear(M / F, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "Para generar un momento de {M} N·m aplicando una fuerza de {F} N (perpendicular), ¿a qué distancia del eje hay que aplicarla?"

pasos:
  - "d = M / F = {M} / {F} = {redondear(M / F, 2)} m"

explicacion: |
  Con menos fuerza disponible, hace falta más brazo de palanca para el
  mismo momento — y viceversa.
```

### 8 — A mayor brazo, mayor momento (misma fuerza)

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Con la misma fuerza, un brazo de palanca más largo produce un momento mayor."

explicacion: |
  M=F×d: con F fijo, M crece con d.
```

### 9 — Fuerza aplicada exactamente en el eje

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si una fuerza se aplica exactamente sobre el eje de giro (brazo de palanca = 0), no genera ningún momento, sin importar cuán grande sea esa fuerza."

explicacion: |
  M=F×0=0, siempre, sin importar F.
```

### 10 — Convención de signos para el sentido de giro

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "intermedio"
  tags: ["estatica", "vocabulario"]

enunciado: "Por convención habitual, ¿qué sentido de giro se toma como momento positivo?"
tipo: mc
opciones_explicitas:
  - "Antihorario"
  - "Horario"
  - "Da igual, no hay convención"
respuesta: "Antihorario"

explicacion: |
  Es la convención más usada (no universal, pero la habitual) — lo
  importante es ser consistente dentro de un mismo problema.
```

### 11 — Momentos en sentidos opuestos se restan

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el momento neto sobre un cuerpo, dos momentos que giran en sentidos opuestos se restan (uno se toma positivo y el otro negativo)."

explicacion: |
  Igual que sumar fuerzas con signo en un eje, pero para giros.
```

### 12 — Por qué es más fácil empujar una puerta lejos de la bisagra

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué cuesta menos esfuerzo abrir una puerta empujando en el borde (lejos de la bisagra) que empujando cerca de la bisagra?"
tipo: mc
opciones_explicitas:
  - "Porque lejos de la bisagra el brazo de palanca es mayor, así que se necesita menos fuerza para el mismo momento"
  - "Porque cerca de la bisagra la puerta pesa más"
  - "No hay ninguna diferencia real, es sólo una sensación"
respuesta: "Porque lejos de la bisagra el brazo de palanca es mayor, así que se necesita menos fuerza para el mismo momento"

explicacion: |
  M=F×d: para un mismo M (el necesario para abrir la puerta), a mayor
  d, menor F requerida.
```

### 13 — Problema: comparar fuerzas para el mismo momento

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F1: random(20, 60)
  d1: random_float(0.3, 1, 2)
  d2: random_float(1.5, 3, 2)

respuesta: redondear(F1 * d1 / d2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "N"

enunciado: "Una fuerza de {F1} N aplicada a {d1} m del eje genera un cierto momento. ¿Qué fuerza hace falta aplicar a {d2} m del eje para generar exactamente el mismo momento?"

pasos:
  - "M = F₁ × d₁ = {F1} × {d1} = {redondear(F1 * d1, 2)} N·m"
  - "F₂ = M / d₂ = {redondear(F1 * d1, 2)} / {d2} = {redondear(F1 * d1 / d2, 2)} N"

explicacion: |
  Con más brazo de palanca, alcanza con menos fuerza para el mismo
  momento.
```

### 14 — Si la fuerza no es perpendicular al brazo

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "Si la fuerza aplicada NO es perpendicular al brazo de palanca, ¿qué pasa con el momento generado?"
tipo: mc
opciones_explicitas:
  - "Es menor que F×d — sólo la componente perpendicular de la fuerza genera momento"
  - "Es mayor que F×d"
  - "No se puede calcular el momento en ese caso"
respuesta: "Es menor que F×d — sólo la componente perpendicular de la fuerza genera momento"

explicacion: |
  M = F×d×sen(θ): con θ<90°, sen(θ)<1, así que M queda por debajo del
  máximo posible (que se da con θ=90°, fuerza perpendicular).
```

### 15 — Problema: momento con fuerza en ángulo

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  F: random(10, 40)
  d: random_float(0.5, 2, 2)
  angulo: uno_de([30, 45, 60, 90])

respuesta: redondear(F * d * sin_deg(angulo), 2)
tipo: input
tolerancia_abs: 0.2
unidad: "N·m"

enunciado: "Se aplica una fuerza de {F} N a {d} m del eje de giro, formando un ángulo de {angulo}° con la palanca. ¿Cuál es el momento generado?"

pasos:
  - "M = F × d × sen(θ) = {F} × {d} × sen({angulo}°) = {redondear(F * d * sin_deg(angulo), 2)} N·m"

explicacion: |
  Con θ=90° (perpendicular), sen(90°)=1 y se recupera la fórmula
  simple M=F×d.
```

### 16 — Ordenar: pasos para calcular un momento

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos para calcular el momento de una fuerza aplicada en cualquier ángulo."
tipo: ordenar
opciones_explicitas:
  - "Multiplicar la fuerza por ese brazo (y por sen(θ) si la fuerza no es perpendicular)"
  - "Identificar el eje (o punto) de giro que se va a usar como referencia"
  - "Medir el brazo de palanca: la distancia perpendicular desde el eje hasta la línea de acción de la fuerza"
respuesta_orden: ["Identificar el eje (o punto) de giro que se va a usar como referencia", "Medir el brazo de palanca: la distancia perpendicular desde el eje hasta la línea de acción de la fuerza", "Multiplicar la fuerza por ese brazo (y por sen(θ) si la fuerza no es perpendicular)"]
explicacion: |
  Sin fijar primero el eje de referencia, no hay brazo de palanca que
  medir.
```

### 17 — El momento depende del punto de referencia

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El momento de una misma fuerza puede ser distinto según qué punto se elija como eje de giro de referencia."

explicacion: |
  El momento no es una propiedad de la fuerza sola — siempre se
  calcula respecto de un punto específico.
```

### 18 — Aplicación real: llave de tuercas

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Por qué una llave de tuercas con mango largo afloja un tornillo con menos esfuerzo que una con mango corto?"
tipo: mc
opciones_explicitas:
  - "El mango largo da un brazo de palanca mayor, así que se necesita menos fuerza para el mismo momento"
  - "El mango largo hace que la llave pese menos"
  - "No hay ninguna diferencia física real"
respuesta: "El mango largo da un brazo de palanca mayor, así que se necesita menos fuerza para el mismo momento"

explicacion: |
  Exactamente el mismo principio que la puerta y la bisagra.
```

### 19 — Completar: otro nombre del momento de una fuerza

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: el momento de una fuerza también se conoce, sobre todo en contextos de ingeniería, con el nombre en inglés ___."
respuestas_validas:
  - "torque"

explicacion: |
  "Momento de una fuerza" y "torque" son el mismo concepto físico.
```

### 20 — El momento es una cantidad vectorial

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "El momento de una fuerza es, en general, una cantidad vectorial (no sólo un número), aunque en muchos problemas de un solo plano alcance con su magnitud y un signo (horario/antihorario)."

explicacion: |
  En 3D el momento tiene una dirección propia (perpendicular al plano
  de giro); en problemas de un solo plano, esa dirección es siempre la
  misma y sólo hace falta el signo.
```

### 21 — El momento no es lo mismo que el trabajo, aunque compartan unidad

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Como el momento de una fuerza y el trabajo mecánico se miden en las mismas unidades (N·m), son la misma magnitud física."

explicacion: |
  Comparten unidades por cómo se combinan fuerza y distancia, pero son
  conceptos distintos: el trabajo (`../../trabajo-de-una-fuerza/`) mide
  energía transferida por un desplazamiento; el momento mide la
  tendencia a girar.
```

### 22 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "momento_de_una_fuerza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el momento de una fuerza?"
tipo: mc
opciones_explicitas:
  - "Para predecir y calcular el efecto de giro de una fuerza sobre un cuerpo, no sólo si lo desplaza"
  - "Sólo sirve para calcular fuerzas en línea recta"
  - "Sólo aplica a objetos sin masa"
respuesta: "Para predecir y calcular el efecto de giro de una fuerza sobre un cuerpo, no sólo si lo desplaza"

explicacion: |
  Es la base necesaria para `../equilibrio-de-cuerpo-rigido/` y para
  entender por qué funcionan las palancas
  (`../../maquinas-simples/`).
```
