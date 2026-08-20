# Física — Estática: equilibrio de cuerpo rígido (cuestionario, 24 preguntas VBLang)

> Tema: `EST1c`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Las dos condiciones de equilibrio

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué dos condiciones tienen que cumplirse A LA VEZ para que un cuerpo rígido esté en equilibrio completo?"
tipo: mc
opciones_explicitas:
  - "Fuerza neta cero (ΣF=0) Y momento neto cero (ΣM=0)"
  - "Sólo fuerza neta cero"
  - "Sólo momento neto cero"
respuesta: "Fuerza neta cero (ΣF=0) Y momento neto cero (ΣM=0)"

explicacion: |
  Ninguna de las dos alcanza sola — un cuerpo puede no acelerar pero
  seguir girando, o no girar pero seguir acelerando.
```

### 2 — Fuerza neta cero no alcanza sola

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Si la fuerza neta sobre un cuerpo es cero, ese cuerpo está necesariamente en equilibrio completo (sin ningún tipo de aceleración)."

explicacion: |
  Puede tener momento neto distinto de cero y estar girando cada vez
  más rápido (aceleración angular), aunque no se desplace.
```

### 3 — Momento neto cero no alcanza solo

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: falso
tipo: vf

enunciado: "Si el momento neto sobre un cuerpo (respecto de su centro de gravedad) es cero, ese cuerpo está necesariamente en equilibrio completo."

explicacion: |
  Puede tener fuerza neta distinta de cero y estar acelerando en línea
  recta, aunque no esté girando.
```

### 4 — Qué condición aplica principalmente en una balanza

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "En una balanza (sube y baja) en equilibrio, ¿qué condición es la que determina si está balanceada?"
tipo: mc
opciones_explicitas:
  - "El momento neto respecto del punto de apoyo es cero"
  - "El peso total de ambos lados es cero"
  - "La velocidad de ambos lados es la misma"
respuesta: "El momento neto respecto del punto de apoyo es cero"

explicacion: |
  Los momentos de los dos lados (peso × distancia al apoyo) se
  cancelan.
```

### 5 — Problema: balanza, encontrar la distancia de equilibrio

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(10, 40)
  d1: random_float(0.5, 2, 2)
  m2: random(10, 40)

respuesta: redondear(m1 * d1 / m2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "m"

enunciado: "En una balanza, una masa de {m1} kg está a {d1} m del punto de apoyo. ¿A qué distancia del apoyo hay que poner una masa de {m2} kg, del otro lado, para que quede en equilibrio?"

pasos:
  - "m₁×d₁ = m₂×d₂  →  d₂ = m₁×d₁ / m₂ = {m1}×{d1} / {m2} = {redondear(m1 * d1 / m2, 2)} m"

explicacion: |
  El momento de un lado tiene que igualar al del otro lado.
```

### 6 — Problema: balanza, encontrar la masa de equilibrio

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  m1: random(10, 40)
  d1: random_float(0.5, 2, 2)
  d2: random_float(0.5, 2, 2)

respuesta: redondear(m1 * d1 / d2, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "kg"

enunciado: "En una balanza, una masa de {m1} kg está a {d1} m del punto de apoyo. ¿Qué masa hay que poner a {d2} m del apoyo, del otro lado, para que quede en equilibrio?"

pasos:
  - "m₁×d₁ = m₂×d₂  →  m₂ = m₁×d₁ / d₂ = {m1}×{d1} / {d2} = {redondear(m1 * d1 / d2, 2)} kg"

explicacion: |
  Es el mismo despeje que la pregunta anterior, ahora para la masa en
  vez de la distancia.
```

### 7 — El punto de referencia para el momento se elige libremente

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "La condición ΣM=0 vale para el momento calculado respecto de CUALQUIER punto — no tiene que ser necesariamente el centro de gravedad."

explicacion: |
  Si un cuerpo está en equilibrio, el momento neto es cero respecto de
  cualquier punto que se elija como referencia.
```

### 8 — Por qué conviene elegir el pivote donde actúa una incógnita

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué conviene elegir como punto de referencia, al plantear ΣM=0, un punto donde actúa una fuerza desconocida?"
tipo: mc
opciones_explicitas:
  - "Porque el brazo de palanca de esa fuerza respecto de ese punto es cero, así que desaparece de la ecuación y queda una sola incógnita"
  - "Porque así la fuerza desconocida se hace más grande"
  - "No hay ninguna ventaja real, es sólo costumbre"
respuesta: "Porque el brazo de palanca de esa fuerza respecto de ese punto es cero, así que desaparece de la ecuación y queda una sola incógnita"

explicacion: |
  Es un truco algebraico válido porque ΣM=0 vale para cualquier punto —
  conviene elegir el que simplifica más las cuentas.
```

### 9 — Completar: ecuación de equilibrio rotacional

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la condición de equilibrio rotacional se escribe ΣM = ___."
respuestas_validas:
  - 0

explicacion: |
  La suma de todos los momentos (con su signo según el sentido de
  giro) tiene que ser cero.
```

### 10 — Completar: ecuación de equilibrio traslacional

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "completar"]

tipo: completar
enunciado: "Completá: la condición de equilibrio traslacional se escribe ΣF = ___."
respuestas_validas:
  - 0

explicacion: |
  La suma vectorial de todas las fuerzas tiene que ser cero.
```

### 11 — Problema: viga apoyada en dos puntos, reacción derecha

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8, 10])
  x_cg: random(1, L - 1)
  W: random(50, 200)

respuesta: redondear(W * x_cg / L, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "Una viga de {L} m de largo, apoyada en sus dos extremos, tiene un peso de {W} N actuando a {x_cg} m del extremo izquierdo. ¿Cuál es la reacción de apoyo en el extremo DERECHO?"

pasos:
  - "Tomando momentos respecto del extremo izquierdo: R_der × L = W × x_cg"
  - "R_der = W × x_cg / L = {W} × {x_cg} / {L} = {redondear(W * x_cg / L, 2)} N"

explicacion: |
  Al tomar momentos respecto del extremo izquierdo, la reacción de ese
  lado no aparece en la ecuación (brazo de palanca cero).
```

### 12 — Problema: viga apoyada en dos puntos, reacción izquierda

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8, 10])
  x_cg: random(1, L - 1)
  W: random(50, 200)
  R_der: redondear(W * x_cg / L, 2)

respuesta: redondear(W - R_der, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "La misma viga de {L} m, con peso {W} N a {x_cg} m del extremo izquierdo, tiene una reacción de {R_der} N en el extremo derecho. ¿Cuál es la reacción en el extremo IZQUIERDO?"

pasos:
  - "Por ΣF=0: R_izq + R_der = W"
  - "R_izq = W − R_der = {W} − {R_der} = {redondear(W - R_der, 2)} N"

explicacion: |
  Entre las dos reacciones tienen que sostener todo el peso de la
  viga.
```

### 13 — Las dos reacciones suman el peso total

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "En una viga apoyada en dos puntos, la suma de las dos reacciones de apoyo es siempre igual al peso total de la viga (y de lo que cargue encima)."

explicacion: |
  Es la condición ΣF=0 aplicada al eje vertical.
```

### 14 — Peso centrado, reacciones iguales

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Si el peso de la viga actúa exactamente en el punto medio entre los dos apoyos, las dos reacciones de apoyo son iguales entre sí."

explicacion: |
  Con x_cg = L/2, R_der = W×(L/2)/L = W/2, y por lo tanto R_izq también
  es W/2.
```

### 15 — Qué es un par de fuerzas

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "vocabulario"]

enunciado: "¿Qué es un 'par de fuerzas' (el caso donde ΣF=0 pero ΣM≠0)?"
tipo: mc
opciones_explicitas:
  - "Dos fuerzas de igual magnitud y sentido opuesto, aplicadas en puntos distintos de un cuerpo (se cancelan como fuerza, pero generan un momento neto)"
  - "Dos fuerzas iguales aplicadas en el mismo punto"
  - "Una sola fuerza muy grande"
respuesta: "Dos fuerzas de igual magnitud y sentido opuesto, aplicadas en puntos distintos de un cuerpo (se cancelan como fuerza, pero generan un momento neto)"

explicacion: |
  Es el ejemplo clásico de por qué ΣF=0 no alcanza para el equilibrio
  completo — el cuerpo no se desplaza, pero gira.
```

### 16 — Ordenar: pasos para resolver un problema de equilibrio

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "ordenar"]

enunciado: "Ordená los pasos típicos para resolver un problema de equilibrio de cuerpo rígido con reacciones desconocidas."
tipo: ordenar
opciones_explicitas:
  - "Plantear ΣF=0 para despejar la incógnita que falte"
  - "Identificar todas las fuerzas que actúan (pesos, reacciones de apoyo, tensiones) y sus puntos de aplicación"
  - "Elegir un punto de referencia (conviene uno donde actúe una incógnita) y plantear ΣM=0 para despejar otra incógnita"
respuesta_orden: ["Identificar todas las fuerzas que actúan (pesos, reacciones de apoyo, tensiones) y sus puntos de aplicación", "Elegir un punto de referencia (conviene uno donde actúe una incógnita) y plantear ΣM=0 para despejar otra incógnita", "Plantear ΣF=0 para despejar la incógnita que falte"]
explicacion: |
  Primero se agota lo que da la ecuación de momentos (eligiendo bien el
  pivote), y con lo que quede sin resolver se usa la ecuación de
  fuerzas.
```

### 17 — Aplicación real: una escalera contra la pared

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Qué tiene que cumplirse para que una escalera apoyada contra una pared no se caiga ni resbale?"
tipo: mc
opciones_explicitas:
  - "Que la fuerza neta sobre ella sea cero (no resbale) Y el momento neto sea cero (no rote/vuelque)"
  - "Sólo que sea muy pesada"
  - "Sólo que esté apoyada en ángulo de 90°"
respuesta: "Que la fuerza neta sobre ella sea cero (no resbale) Y el momento neto sea cero (no rote/vuelque)"

explicacion: |
  Es el mismo par de condiciones aplicado a un caso muy concreto y
  cotidiano.
```

### 18 — Un cuerpo puede girar cada vez más rápido sin desplazarse

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Un cuerpo puede tener fuerza neta cero (no acelera en línea recta) y sin embargo estar girando cada vez más rápido, si el momento neto sobre él no es cero."

explicacion: |
  Es exactamente el caso del par de fuerzas.
```

### 19 — Aplicación real: puente

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["estatica", "aplicacion"]

enunciado: "¿Qué principio físico garantiza que un puente sostenga su propio peso y el de los vehículos que pasan por él?"
tipo: mc
opciones_explicitas:
  - "El equilibrio de cuerpo rígido: las reacciones de sus apoyos se ajustan para que se cumplan ΣF=0 y ΣM=0"
  - "Que el puente no tiene peso propio"
  - "Que los vehículos no ejercen ninguna fuerza sobre el puente"
respuesta: "El equilibrio de cuerpo rígido: las reacciones de sus apoyos se ajustan para que se cumplan ΣF=0 y ΣM=0"

explicacion: |
  Es la misma idea de la viga apoyada en dos puntos, aplicada a una
  estructura real.
```

### 20 — Depende de los dos módulos anteriores

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "intermedio"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Para resolver un problema de equilibrio de cuerpo rígido hace falta saber calcular momentos de una fuerza Y saber dónde está el centro de gravedad de los pesos involucrados."

explicacion: |
  Es la combinación directa de `../momento-de-una-fuerza/` y
  `../centro-de-gravedad/`.
```

### 21 — El momento neto se calcula con signo

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

respuesta: verdadero
tipo: vf

enunciado: "Al plantear ΣM=0, hay que sumar los momentos con signo (positivo para un sentido de giro, negativo para el opuesto), no sólo sus magnitudes."

explicacion: |
  Si se ignorara el signo, momentos que en realidad se cancelan
  parecerían sumarse.
```

### 22 — Problema: equilibrio con tres términos, despejando W

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica", "problema"]

variables:
  L: uno_de([4, 5, 6, 8])
  x_cg: random(1, L - 1)
  R_der: random(20, 80)

respuesta: redondear(R_der * L / x_cg, 2)
tipo: input
tolerancia_abs: 0.5
unidad: "N"

enunciado: "Una viga de {L} m apoyada en sus dos extremos tiene su peso W actuando a {x_cg} m del extremo izquierdo. La reacción en el extremo derecho es de {R_der} N. ¿Cuál es el peso W de la viga?"

pasos:
  - "R_der = W × x_cg / L  →  W = R_der × L / x_cg = {R_der} × {L} / {x_cg} = {redondear(R_der * L / x_cg, 2)} N"

explicacion: |
  Es el mismo despeje de siempre, ahora resolviendo para el peso en vez
  de para la reacción.
```

### 23 — El equilibrio completo es más exigente que sólo no acelerar

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "avanzado"
  tags: ["estatica"]

enunciado: "¿Por qué el equilibrio de cuerpo rígido es una condición más exigente que sólo 'la fuerza neta es cero' (que ya se usaba en fuerzas concurrentes)?"
tipo: mc
opciones_explicitas:
  - "Porque un cuerpo extendido (no un punto) también puede girar, y hace falta además que el momento neto sea cero"
  - "No es más exigente, son exactamente la misma condición"
  - "Porque los cuerpos rígidos no tienen masa"
respuesta: "Porque un cuerpo extendido (no un punto) también puede girar, y hace falta además que el momento neto sea cero"

explicacion: |
  `../../dinamica-fuerzas-concurrentes/` trataba las fuerzas como
  aplicadas en un punto (sin posibilidad de girar) — un cuerpo rígido
  real tiene tamaño, y por eso aparece la condición extra.
```

### 24 — Cierre: para qué sirve este bloque

```
metadata:
  materia: "fisica"
  tema: "equilibrio_de_cuerpo_rigido"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el equilibrio de cuerpo rígido?"
tipo: mc
opciones_explicitas:
  - "Para calcular fuerzas de apoyo, tensiones y condiciones de balance en estructuras reales (vigas, escaleras, balanzas, palancas)"
  - "Sólo sirve para objetos que no tienen peso"
  - "Sólo aplica a objetos en movimiento circular"
respuesta: "Para calcular fuerzas de apoyo, tensiones y condiciones de balance en estructuras reales (vigas, escaleras, balanzas, palancas)"

explicacion: |
  Es la combinación de todo lo visto en Estática, y la base directa
  para entender por qué funcionan las máquinas simples
  (`../../maquinas-simples/`).
```
