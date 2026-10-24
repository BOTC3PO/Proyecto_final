# Física — Primera ley de Newton: inercia (cuestionario, 25 preguntas VBLang)

> Tema: `NEWTON1a`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué dice la primera ley de Newton

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Qué dice la primera ley de Newton (ley de inercia)?"
tipo: mc
opciones_explicitas:
  - "Un objeto en reposo sigue en reposo, y uno en movimiento sigue con velocidad constante, a menos que actúe una fuerza neta"
  - "Todo objeto se detiene solo con el tiempo, sin necesitar ninguna fuerza"
  - "La fuerza siempre es igual a la masa por la velocidad"
respuesta: "Un objeto en reposo sigue en reposo, y uno en movimiento sigue con velocidad constante, a menos que actúe una fuerza neta"

explicacion: |
  Los objetos no cambian su estado de movimiento por sí solos.
```

### 2 — Qué es la fuerza neta

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["fuerza_neta", "vocabulario"]

enunciado: "¿Qué es la fuerza neta sobre un objeto?"
tipo: mc
opciones_explicitas:
  - "La suma vectorial de todas las fuerzas que actúan sobre él al mismo tiempo"
  - "La fuerza más grande de todas las que actúan sobre él"
  - "El promedio de todas las fuerzas que actúan sobre él"
respuesta: "La suma vectorial de todas las fuerzas que actúan sobre él al mismo tiempo"

explicacion: |
  Se calcula sumando vectores, como en
  `../../../matematica/suma-de-vectores-y-descomposicion/`.
```

### 3 — Dos fuerzas opuestas iguales dan fuerza neta cero

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["fuerza_neta"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos fuerzas iguales en magnitud actúan sobre un objeto desde direcciones exactamente opuestas, la fuerza neta es cero."

explicacion: |
  Se cancelan entre sí como vectores, aunque ninguna de las dos sea cero
  por separado.
```

### 4 — Qué es el equilibrio, según la primera ley

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "Según la primera ley de Newton, ¿qué situaciones cuentan como 'equilibrio'?"
tipo: mc
opciones_explicitas:
  - "Estar en reposo, O moverse a velocidad constante (misma rapidez y dirección)"
  - "Únicamente estar completamente en reposo"
  - "Únicamente estar acelerando de forma constante"
respuesta: "Estar en reposo, O moverse a velocidad constante (misma rapidez y dirección)"

explicacion: |
  Lo que importa es que la velocidad no cambie, no que sea cero.
```

### 5 — Velocidad constante también es equilibrio

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "Un objeto que se mueve en línea recta a velocidad constante también está en equilibrio, según la primera ley de Newton."

explicacion: |
  Su velocidad no cambia, así que la fuerza neta sobre él es cero.
```

### 6 — El equilibrio no significa siempre estar en reposo

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio"]

respuesta: falso
tipo: vf

enunciado: "Según la primera ley de Newton, un objeto en equilibrio siempre está completamente detenido."

explicacion: |
  También puede estar en movimiento, siempre que sea a velocidad
  constante.
```

### 7 — Problema: fuerza neta sobre un eje

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["fuerza_neta", "problema"]

variables:
  f1: random(20, 50)
  f2: random(5, 19)

respuesta: f1 - f2
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan dos fuerzas horizontales: {f1} N hacia la derecha, y {f2} N hacia la izquierda. ¿Cuál es la fuerza neta (positiva si es hacia la derecha)?"

pasos:
  - "{f1} − {f2} = {f1 - f2} N hacia la derecha"

explicacion: |
  Se restan porque apuntan en direcciones opuestas sobre el mismo eje.
```

### 8 — Problema: verificar equilibrio con tres fuerzas

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "avanzado"
  tags: ["equilibrio", "problema"]

variables:
  f1: random(10, 30)
  f2: random(10, 30)

respuesta: verdadero
tipo: vf

enunciado: "Sobre un objeto actúan tres fuerzas horizontales: {f1} N y {f2} N hacia la derecha, y {f1 + f2} N hacia la izquierda. ¿Está el objeto en equilibrio?"

explicacion: |
  {f1} + {f2} = {f1 + f2} N hacia la derecha, que se cancela
  exactamente con los {f1 + f2} N hacia la izquierda: fuerza neta cero.
```

### 9 — Por qué el cuerpo se va hacia adelante al frenar

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "Cuando un auto frena bruscamente, ¿por qué el cuerpo de los pasajeros 'sigue de largo' hacia adelante?"
tipo: mc
opciones_explicitas:
  - "Porque el cuerpo mantiene su inercia de movimiento mientras el auto ya está frenando"
  - "Porque una fuerza invisible empuja al cuerpo hacia adelante"
  - "Porque el aire dentro del auto empuja a los pasajeros"
respuesta: "Porque el cuerpo mantiene su inercia de movimiento mientras el auto ya está frenando"

explicacion: |
  No hay ninguna fuerza nueva empujando hacia adelante: es el cuerpo
  resistiéndose a cambiar su estado de movimiento.
```

### 10 — Por qué cuesta más arrancar un mueble que mantenerlo en movimiento

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Por qué cuesta más esfuerzo empezar a mover un mueble pesado desde el reposo que mantenerlo deslizándose una vez que ya está en movimiento?"
tipo: mc
opciones_explicitas:
  - "Porque la inercia se opone al CAMBIO de estado de movimiento, no al movimiento en sí"
  - "Porque el mueble pierde peso una vez que empieza a moverse"
  - "En realidad cuesta exactamente el mismo esfuerzo en ambos casos"
respuesta: "Porque la inercia se opone al CAMBIO de estado de movimiento, no al movimiento en sí"

explicacion: |
  Arrancar exige vencer la inercia del reposo; mantenerlo en velocidad
  constante no exige cambiar nada.
```

### 11 — Qué es la inercia

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Qué es la inercia de un objeto?"
tipo: mc
opciones_explicitas:
  - "Su resistencia a cambiar su estado de movimiento"
  - "La fuerza que lo empuja hacia adelante"
  - "Su velocidad máxima posible"
respuesta: "Su resistencia a cambiar su estado de movimiento"

explicacion: |
  Cuanta más inercia, más cuesta arrancarlo, frenarlo o desviarlo.
```

### 12 — A mayor masa, mayor inercia

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es la masa de un objeto, mayor es su inercia."

explicacion: |
  La masa es, literalmente, la medida de la inercia.
```

### 13 — Problema: comparar inercia por masa

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "problema"]

variables:
  masa1: uno_de([5, 10])
  masa2: masa1 * 100

respuesta: verdadero
tipo: vf

enunciado: "Un camión de {masa2} kg y una bicicleta de {masa1} kg. ¿Tiene el camión más inercia que la bicicleta?"

explicacion: |
  Con una masa mucho mayor, hace falta mucha más fuerza neta para
  cambiar el estado de movimiento del camión.
```

### 14 — Qué mide la masa

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿Qué mide la masa de un objeto?"
tipo: mc
opciones_explicitas:
  - "La cantidad de materia que lo compone"
  - "La fuerza con la que la gravedad lo atrae"
  - "Su velocidad máxima"
respuesta: "La cantidad de materia que lo compone"

explicacion: |
  El peso, en cambio, es la fuerza gravitatoria sobre esa masa.
```

### 15 — Qué mide el peso

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿Qué mide el peso de un objeto?"
tipo: mc
opciones_explicitas:
  - "La fuerza con la que la gravedad lo atrae"
  - "La cantidad de materia que lo compone"
  - "Su resistencia al rozamiento"
respuesta: "La fuerza con la que la gravedad lo atrae"

explicacion: |
  Se mide en Newton, a diferencia de la masa que se mide en kilogramos.
```

### 16 — La masa no cambia según el lugar

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "La masa de un objeto es la misma sin importar en qué lugar del universo se encuentre."

explicacion: |
  A diferencia del peso, la masa no depende de la gravedad local.
```

### 17 — El peso sí cambia según el lugar

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "El peso de un objeto sí cambia según el lugar, porque depende de la gravedad local."

explicacion: |
  El mismo objeto pesa distinto en la Tierra que en la Luna.
```

### 18 — Un objeto pesa menos en la Luna, pero su masa es igual

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["masa_peso"]

respuesta: verdadero
tipo: vf

enunciado: "Un astronauta pesa menos en la Luna que en la Tierra, aunque su masa sea exactamente la misma en los dos lugares."

explicacion: |
  La Luna tiene menos gravedad, así que atrae con menos fuerza a la
  misma cantidad de materia.
```

### 19 — Unidad de masa

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿En qué unidad se mide la masa?"
tipo: mc
opciones_explicitas:
  - "Kilogramos (kg)"
  - "Newton (N)"
  - "Metros por segundo (m/s)"
respuesta: "Kilogramos (kg)"

explicacion: |
  El peso (una fuerza) se mide en Newton.
```

### 20 — Unidad de fuerza (y de peso)

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["masa_peso", "vocabulario"]

enunciado: "¿En qué unidad se mide la fuerza (y por lo tanto el peso)?"
tipo: mc
opciones_explicitas:
  - "Newton (N)"
  - "Kilogramos (kg)"
  - "Joules (J)"
respuesta: "Newton (N)"

explicacion: |
  La masa (una cantidad de materia) se mide en kilogramos.
```

### 21 — Ordenar: pasos para determinar si un objeto está en equilibrio

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["equilibrio", "ordenar"]

enunciado: "Ordená los pasos para determinar si un objeto está en equilibrio, conociendo todas las fuerzas que actúan sobre él."
tipo: ordenar
opciones_explicitas:
  - "Si da cero, el objeto está en equilibrio (en reposo o a velocidad constante)"
  - "Sumar vectorialmente todas las fuerzas que actúan sobre el objeto"
  - "Verificar si esa suma (la fuerza neta) da cero"
respuesta_orden: ["Sumar vectorialmente todas las fuerzas que actúan sobre el objeto", "Verificar si esa suma (la fuerza neta) da cero", "Si da cero, el objeto está en equilibrio (en reposo o a velocidad constante)"]
explicacion: |
  El equilibrio se define completamente por el resultado de la fuerza
  neta.
```

### 22 — Problema: fuerza neta con tres fuerzas en un eje

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "avanzado"
  tags: ["fuerza_neta", "problema"]

variables:
  f1: random(10, 20)
  f2: random(10, 20)
  f3: random(5, 15)

respuesta: (f1 + f2) - f3
tipo: input
tolerancia_abs: 0

enunciado: "Sobre un objeto actúan tres fuerzas horizontales: {f1} N y {f2} N hacia la derecha, y {f3} N hacia la izquierda. ¿Cuál es la fuerza neta (positiva hacia la derecha)?"

pasos:
  - "({f1} + {f2}) − {f3} = {(f1 + f2) - f3} N hacia la derecha"

explicacion: |
  Se suman las fuerzas en un sentido y se restan las del sentido
  contrario.
```

### 23 — Sin fuerza neta, un objeto en reposo sigue en reposo indefinidamente

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia"]

respuesta: verdadero
tipo: vf

enunciado: "Si la fuerza neta sobre un objeto en reposo es cero, ese objeto permanece en reposo indefinidamente, sin límite de tiempo."

explicacion: |
  No hace falta ninguna fuerza para "mantenerlo quieto": la ausencia de
  fuerza neta ya es suficiente.
```

### 24 — Aplicación real: el cinturón de seguridad

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "intermedio"
  tags: ["inercia", "vocabulario"]

enunciado: "¿Por qué el cinturón de seguridad es necesario, en términos de la primera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Porque en un choque, el auto frena bruscamente pero el cuerpo de la persona 'quiere' seguir moviéndose por inercia"
  - "Porque el cinturón hace que el auto pese menos"
  - "No tiene relación real con la inercia"
respuesta: "Porque en un choque, el auto frena bruscamente pero el cuerpo de la persona 'quiere' seguir moviéndose por inercia"

explicacion: |
  El cinturón aplica la fuerza neta necesaria para frenar también al
  cuerpo, junto con el auto.
```

### 25 — Cierre: para qué sirve la primera ley

```
metadata:
  materia: "fisica"
  tema: "primera_ley_newton_inercia"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la primera ley de Newton?"
tipo: mc
opciones_explicitas:
  - "Para entender que los objetos no cambian su movimiento por sí solos, y que hace falta una fuerza neta para lograrlo"
  - "Sólo sirve para calcular pesos en distintos planetas"
  - "Sólo aplica a objetos que ya están en movimiento"
respuesta: "Para entender que los objetos no cambian su movimiento por sí solos, y que hace falta una fuerza neta para lograrlo"

explicacion: |
  Es la base conceptual sobre la que se construyen la segunda y tercera
  ley.
```
