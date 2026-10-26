# Física — Trabajo de una fuerza (cuestionario, 26 preguntas VBLang)

> Tema: `F7`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es el trabajo físico

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Qué es el trabajo de una fuerza, en física?"
tipo: mc
opciones_explicitas:
  - "La transferencia de energía que ocurre cuando una fuerza actúa sobre un objeto que se desplaza"
  - "El esfuerzo muscular necesario para sostener algo"
  - "Otro nombre para la fuerza misma"
respuesta: "La transferencia de energía que ocurre cuando una fuerza actúa sobre un objeto que se desplaza"

explicacion: |
  Sin desplazamiento, no hay trabajo físico, aunque haya esfuerzo.
```

### 2 — Unidad del trabajo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿En qué unidad se mide el trabajo?"
tipo: mc
opciones_explicitas:
  - "Joule (J)"
  - "Newton (N)"
  - "Kilogramo (kg)"
respuesta: "Joule (J)"

explicacion: |
  1 J = 1 N × 1 m.
```

### 3 — Completar: definición del Joule

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "completar"]

tipo: completar
enunciado: "Completá: 1 Joule = 1 Newton × 1 ___."
respuestas_validas:
  - "metro"
  - "m"

explicacion: |
  Es el trabajo de 1 N desplazando un objeto 1 m en su misma dirección.
```

### 4 — Problema: trabajo con fuerza paralela al desplazamiento

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "problema"]

variables:
  fuerza: uno_de([10, 20, 30])
  distancia: uno_de([5, 10])

respuesta: fuerza * distancia
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {fuerza} N actúa exactamente en la misma dirección que el desplazamiento de {distancia} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × cos(0°) = {fuerza} × {distancia} × 1 = {fuerza * distancia} J"

explicacion: |
  Con ángulo 0°, cos(0°) = 1: el trabajo es simplemente fuerza por
  distancia.
```

### 5 — Problema: trabajo con ángulo de 60°

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  fuerza: uno_de([20, 40])
  distancia: uno_de([5, 10])
  cos_60: 0.5

respuesta: fuerza * distancia * cos_60
tipo: input
tolerancia_abs: 1

enunciado: "Una fuerza de {fuerza} N forma un ángulo de 60° con el desplazamiento de {distancia} m (cos 60° = 0,5). ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × 0,5 = {fuerza * distancia * cos_60} J"

explicacion: |
  Sólo la componente de la fuerza en la dirección del movimiento
  contribuye al trabajo.
```

### 6 — Problema: trabajo con ángulo de 90°

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "problema"]

variables:
  fuerza: random(10, 100)
  distancia: random(1, 20)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Una fuerza de {fuerza} N actúa exactamente perpendicular al desplazamiento de {distancia} m. ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × cos(90°) = {fuerza} × {distancia} × 0 = 0 J"

explicacion: |
  Una fuerza perpendicular al desplazamiento nunca hace trabajo, sin
  importar cuán grande sea.
```

### 7 — Cuándo el trabajo es positivo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Cuándo el trabajo de una fuerza es positivo?"
tipo: mc
opciones_explicitas:
  - "Cuando la fuerza tiene una componente en la misma dirección que el desplazamiento (ángulo menor a 90°)"
  - "Siempre que la fuerza sea muy grande"
  - "Sólo cuando la fuerza es vertical"
respuesta: "Cuando la fuerza tiene una componente en la misma dirección que el desplazamiento (ángulo menor a 90°)"

explicacion: |
  La fuerza "ayuda" al movimiento.
```

### 8 — Cuándo el trabajo es negativo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Cuándo el trabajo de una fuerza es negativo?"
tipo: mc
opciones_explicitas:
  - "Cuando la fuerza se opone al desplazamiento (ángulo mayor a 90°)"
  - "Cuando la fuerza es muy chica"
  - "El trabajo nunca puede ser negativo"
respuesta: "Cuando la fuerza se opone al desplazamiento (ángulo mayor a 90°)"

explicacion: |
  Como el rozamiento, que siempre se opone al movimiento.
```

### 9 — Cuándo el trabajo es nulo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Cuándo el trabajo de una fuerza es exactamente cero?"
tipo: mc
opciones_explicitas:
  - "Cuando la fuerza es perpendicular al desplazamiento, o cuando no hay desplazamiento"
  - "Sólo cuando la fuerza vale cero"
  - "El trabajo nunca puede ser cero si hay una fuerza actuando"
respuesta: "Cuando la fuerza es perpendicular al desplazamiento, o cuando no hay desplazamiento"

explicacion: |
  Son dos casos distintos que dan trabajo nulo.
```

### 10 — Sin desplazamiento no hay trabajo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "Sin ningún desplazamiento, no hay trabajo físico, sin importar cuán grande sea la fuerza aplicada."

explicacion: |
  d = 0 hace que W = F×d×cos(θ) sea siempre 0.
```

### 11 — Problema: sostener algo quieto no hace trabajo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "problema"]

variables:
  fuerza: random(50, 200)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Una persona sostiene una bolsa de {fuerza} N parada, sin moverse durante 2 minutos. ¿Cuánto trabajo físico realiza sobre la bolsa?"

explicacion: |
  Sin desplazamiento (d = 0), el trabajo es cero, aunque la persona se
  canse.
```

### 12 — El cansancio no es lo mismo que trabajo físico

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "El cansancio muscular de sostener algo quieto no es lo mismo que el trabajo físico definido en Física: ese trabajo mecánico sobre el objeto sostenido es cero."

explicacion: |
  El cuerpo gasta energía biológica internamente, pero no transfiere
  trabajo mecánico al objeto si éste no se desplaza.
```

### 13 — Problema: caminar cargando algo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  fuerza: random(30, 100)
  distancia: random(5, 20)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "Una persona camina en línea recta horizontal {distancia} m, sosteniendo una bolsa con una fuerza vertical de {fuerza} N (para no dejarla caer). ¿Cuál es el trabajo que esa fuerza vertical realiza sobre la bolsa?"

explicacion: |
  La fuerza (vertical) es perpendicular al desplazamiento (horizontal):
  el trabajo de esa fuerza es cero, aunque la bolsa se traslade.
```

### 14 — Por qué la fuerza centrípeta no hace trabajo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Por qué la fuerza centrípeta, que mantiene a un objeto girando en círculo, no realiza trabajo?"
tipo: mc
opciones_explicitas:
  - "Porque es siempre perpendicular a la velocidad del objeto en cada instante"
  - "Porque los objetos en movimiento circular no tienen energía cinética"
  - "En realidad sí hace trabajo, y por eso el objeto frena con el tiempo"
respuesta: "Porque es siempre perpendicular a la velocidad del objeto en cada instante"

explicacion: |
  Por eso el movimiento circular uniforme mantiene la rapidez constante,
  aunque la dirección cambie todo el tiempo.
```

### 15 — El movimiento circular uniforme no cambia la energía cinética

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "En un movimiento circular uniforme, la energía cinética del objeto no cambia, porque la fuerza centrípeta no realiza trabajo."

explicacion: |
  Sin trabajo neto, no hay cambio de energía cinética (teorema
  trabajo-energía).
```

### 16 — El rozamiento hace trabajo negativo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "La fuerza de rozamiento, al oponerse siempre al movimiento, realiza trabajo negativo sobre un objeto que se desliza."

explicacion: |
  El ángulo entre el rozamiento y el desplazamiento es siempre 180°:
  cos(180°) = -1.
```

### 17 — Problema: trabajo negativo del rozamiento

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  friccion: uno_de([10, 20, 30])
  distancia: uno_de([5, 10])

respuesta: 0 - (friccion * distancia)
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto se desliza {distancia} m, con una fuerza de rozamiento de {friccion} N oponiéndose al movimiento en todo momento. ¿Cuál es el trabajo realizado por el rozamiento?"

pasos:
  - "{friccion} × {distancia} × cos(180°) = {friccion} × {distancia} × (-1) = {0 - (friccion * distancia)} J"

explicacion: |
  El signo negativo indica que el rozamiento le quita energía al
  movimiento.
```

### 18 — El trabajo total se puede calcular de dos formas equivalentes

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "El trabajo total sobre un objeto se puede calcular sumando el trabajo de cada fuerza por separado, o calculando directamente el trabajo de la fuerza neta — ambos caminos dan el mismo resultado."

explicacion: |
  Es consecuencia de que el trabajo (como producto escalar) se
  distribuye sobre sumas de vectores.
```

### 19 — Qué dice el teorema trabajo-energía

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "vocabulario"]

enunciado: "¿Qué dice el teorema trabajo-energía?"
tipo: mc
opciones_explicitas:
  - "El trabajo neto sobre un objeto es igual al cambio en su energía cinética"
  - "El trabajo siempre es igual a la energía potencial del objeto"
  - "No existe ninguna relación entre trabajo y energía"
respuesta: "El trabajo neto sobre un objeto es igual al cambio en su energía cinética"

explicacion: |
  W_neto = Ec_final − Ec_inicial.
```

### 20 — Problema: aplicar el teorema trabajo-energía

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  ec_inicial: uno_de([50, 100, 150])
  trabajo_neto: uno_de([20, 30, 50])

respuesta: ec_inicial + trabajo_neto
tipo: input
tolerancia_abs: 0

enunciado: "Un objeto tiene una energía cinética inicial de {ec_inicial} J. Sobre él se realiza un trabajo neto de {trabajo_neto} J. ¿Cuál es su energía cinética final?"

pasos:
  - "{ec_inicial} + {trabajo_neto} = {ec_inicial + trabajo_neto} J"

explicacion: |
  Ec_final = Ec_inicial + W_neto.
```

### 21 — Ordenar: pasos para calcular el trabajo de una fuerza

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "ordenar"]

enunciado: "Ordená los pasos para calcular el trabajo de una fuerza sobre un objeto que se desplaza."
tipo: ordenar
opciones_explicitas:
  - "El resultado, en Joule, es el trabajo realizado"
  - "Identificar el ángulo entre la fuerza y el desplazamiento"
  - "Multiplicar la fuerza, la distancia y el coseno de ese ángulo"
respuesta_orden: ["Identificar el ángulo entre la fuerza y el desplazamiento", "Multiplicar la fuerza, la distancia y el coseno de ese ángulo", "El resultado, en Joule, es el trabajo realizado"]
explicacion: |
  W = F × d × cos(θ).
```

### 22 — Problema: trabajo con ángulo obtuso (120°)

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  fuerza: uno_de([20, 40])
  distancia: uno_de([5, 10])
  cos_120: -0.5

respuesta: fuerza * distancia * cos_120
tipo: input
tolerancia_abs: 1

enunciado: "Una fuerza de {fuerza} N forma un ángulo de 120° con el desplazamiento de {distancia} m (cos 120° = -0,5). ¿Cuál es el trabajo realizado?"

pasos:
  - "{fuerza} × {distancia} × (-0,5) = {fuerza * distancia * cos_120} J"

explicacion: |
  Con un ángulo obtuso, el trabajo da negativo: la fuerza frena más de
  lo que ayuda al movimiento.
```

### 23 — El trabajo es una magnitud escalar

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo"]

respuesta: verdadero
tipo: vf

enunciado: "El trabajo es una magnitud escalar (un número con signo), no una magnitud vectorial."

explicacion: |
  Es consecuencia directa de ser un producto escalar entre dos
  vectores.
```

### 24 — Problema: trabajo neto con dos fuerzas

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "avanzado"
  tags: ["trabajo", "problema"]

variables:
  trabajo_motor: uno_de([100, 200, 300])
  trabajo_friccion: uno_de([20, 40, 60])

respuesta: trabajo_motor - trabajo_friccion
tipo: input
tolerancia_abs: 0

enunciado: "Un auto recibe un trabajo de {trabajo_motor} J de parte del motor, mientras el rozamiento le realiza un trabajo de -{trabajo_friccion} J. ¿Cuál es el trabajo neto sobre el auto?"

pasos:
  - "{trabajo_motor} + (-{trabajo_friccion}) = {trabajo_motor - trabajo_friccion} J"

explicacion: |
  Se suman los trabajos de todas las fuerzas, respetando su signo.
```

### 25 — Aplicación real: por qué levantar algo hace trabajo positivo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "intermedio"
  tags: ["trabajo", "vocabulario"]

enunciado: "Al levantar una caja verticalmente hacia arriba, ¿por qué el trabajo que se realiza sobre ella es positivo?"
tipo: mc
opciones_explicitas:
  - "Porque la fuerza aplicada (hacia arriba) tiene la misma dirección que el desplazamiento (hacia arriba)"
  - "Porque toda fuerza vertical siempre hace trabajo positivo, sin excepción"
  - "El trabajo de levantar algo en realidad siempre es negativo"
respuesta: "Porque la fuerza aplicada (hacia arriba) tiene la misma dirección que el desplazamiento (hacia arriba)"

explicacion: |
  θ = 0° entre fuerza y desplazamiento: cos(0°) = 1, trabajo máximo
  positivo para esa fuerza y distancia.
```

### 26 — Cierre: para qué sirve el concepto de trabajo

```
metadata:
  materia: "fisica"
  tema: "trabajo_de_una_fuerza"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve el concepto de trabajo de una fuerza?"
tipo: mc
opciones_explicitas:
  - "Para calcular cuánta energía transfiere una fuerza a un objeto que se desplaza, conectando fuerza, movimiento y energía"
  - "Sólo sirve para medir el esfuerzo muscular de una persona"
  - "Sólo aplica a fuerzas que actúan durante un movimiento circular"
respuesta: "Para calcular cuánta energía transfiere una fuerza a un objeto que se desplaza, conectando fuerza, movimiento y energía"

explicacion: |
  Es el puente directo hacia el estudio de la energía, que se retoma en
  módulos futuros.
```
