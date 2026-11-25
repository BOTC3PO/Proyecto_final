# Fisica — Choques elasticos inelasticos (cuestionario, 31 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Conservación en choques

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "momento", "energia"]

respuesta: "momento"
tipo: completar
respuestas_validas:
  - "momento"
  - "cantidad_de_movimiento"

enunciado: "En cualquier tipo de choque (elástico o inelástico), la _______ lineal del sistema se conserva siempre, siempre que no actúen fuerzas externas netas."

explicacion: |
  La cantidad de movimiento (o momento lineal) se conserva en todos los choques si la suma de fuerzas externas es cero.
```

### 2 — Energía en choques elásticos

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia_cinetica", "elastico"]

respuesta: verdadero
tipo: vf

enunciado: "En un choque perfectamente elástico, la energía cinética total del sistema antes del impacto es igual a la energía cinética total después del impacto."

explicacion: |
  Por definición, un choque es elástico si no hay pérdida de energía cinética (la energía se transforma en otras formas, pero la suma de las cinéticas se mantiene).
```

### 3 — Identificación de choques

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["clasificacion", "choque_inelastico"]

respuesta: "Inelástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico"]

enunciado: "Si tras un choque dos objetos quedan pegados y se mueven con la misma velocidad, ¿qué tipo de choque ha ocurrido según la descripción del escenario?"

pasos:
  - "Identificar si hubo deformación permanente o pérdida de energía."
  - "Observar si los objetos permanecen unidos."

explicacion: |
  Cuando los objetos quedan unidos tras el impacto, el choque es perfectamente inelástico, ya que se ha perdido la mayor parte de la energía cinética en la deformación.
```

### 4 — Propiedades de la energía

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia", "inelastico"]

respuesta: falso
tipo: vf

enunciado: "En un choque perfectamente inelástico, la energía cinética del sistema se conserva íntegramente."

explicacion: |
  Falso. En los choques inelásticos, parte de la energía cinética se transforma en calor, sonido o energía de deformación.
```

### 5 — Conceptos clave

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "Inelástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico", "Superelástico"]

enunciado: "Se denomina choque _______ aquel en el cual la energía cinética del sistema no se conserva, transformándose en otras formas de energía."

explicacion: |
  El término correcto es choque inelástico. En este proceso, la energía cinética se disipa.
```

### 6 — Conservación en choques

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "energia", "impulso"]

tipo: vf
respuesta: falso
enunciado: "En un choque perfectamente inelástico, la energía cinética total del sistema se conserva."

explicacion: |
  En un choque inelástico, la energía cinética no se conserva porque parte de ella se transforma en calor o deformación. Lo que siempre se conserva es el momento lineal (cantidad de movimiento).
```

### 7 — Identificación de tipo de choque

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "Elástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico"]

enunciado: "Si tras una colisión la energía cinética total es igual a la energía cinética inicial, el choque es: ___"

explicacion: |
  Si la energía cinética se mantiene constante (sin pérdidas por calor o deformación), el choque es clasificado como elástico.
```

### 8 — Cálculo de momento lineal

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["calculo", "momento_lineal"]

variables:
  m1: uno_de([2.0, 5.0])
  v1: uno_de([10.0, 4.0])
  m2: uno_de([3.0, 2.0])
  v2: 0.0

respuesta: m1 * v1 + m2 * v2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto de masa {m1} kg se mueve a {v1} m/s y colisiona con otro objeto de masa {m2} kg que está en reposo ({v2} m/s). ¿Cuál es el momento lineal total del sistema antes del choque?"

pasos:
  - "Calcular el momento del primer objeto: p1 = m1 * v1"
  - "Calcular el momento del segundo objeto: p2 = m2 * v2"
  - "Sumar ambos momentos para obtener el momento total del sistema."

explicacion: |
  El momento lineal total es la suma de los momentos individuales: p_total = {m1}*{v1} + {m2}*{v2} = {m1 * v1 + m2 * v2} kg·m/s.
```

### 9 — Pasos para resolver un choque

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular momentos iniciales", "Aplicar conservación de energía", "Calcular momentos finales", "Resolver sistema de ecuaciones"]

respuesta_orden: ["Calcular momentos iniciales", "Aplicar conservación de energía", "Calcular momentos finales", "Resolver sistema de ecuaciones"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un choque elástico donde se busca la velocidad final de dos cuerpos:"

explicacion: |
  Para resolver choques elásticos se requiere usar la conservación del momento lineal y la conservación de la energía cinética, lo que genera un sistema de ecuaciones para hallar las incógnitas.
```

### 10 — Energía cinética en choque elástico

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["energia_cinetica", "calculo"]

variables:
  m1: 2.0
  v1: 4.0
  m2: 2.0
  v2: 6.0

respuesta: 52.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Dos masas de {m1} kg cada una se mueven en la misma dirección. La primera a {v1} m/s y la segunda a {v2} m/s. ¿Cuál es la energía cinética total inicial del sistema?"

pasos:
  - "Calcular la energía cinética de la primera masa: Ek1 = 0.5 * m1 * v1^2"
  - "Calcular la energía cinética de la segunda masa: Ek2 = 0.5 * m2 * v2^2"
  - "Sumar ambas energías: Ek_total = Ek1 + Ek2"

explicacion: |
  Ek1 = 0.5 * 2 * 4^2 = 16 J.
  Ek2 = 0.5 * 2 * 6^2 = 36 J.
  Ek_total = 16 + 36 = 52 J.
```

### 11 — Conservación en choques

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "energia", "momento"]

respuesta: "momento_lineal"
tipo: "mc"
opciones_explicitas: ["energia_cinetica", "momento_lineal", "energia_potencial", "impulso"]

enunciado: "En un choque perfectamente inelástico, donde los objetos quedan pegados tras la colisión, ¿qué magnitud física se conserva siempre?"

explicacion: |
  En cualquier sistema donde no actúen fuerzas externas netas, el momento lineal (p = m * v) se conserva. Sin embargo, en choques inelásticos, parte de la energía cinética se transforma en calor o deformación, por lo que la energía cinética NO se conserva.
```

### 12 — El error de la energía cinética

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia_cinetica", "choque_elastico"]

respuesta: verdadero
tipo: "vf"

enunciado: "En un choque perfectamente elástico entre dos partículas, la energía cinética total del sistema se conserva."

explicacion: |
  Por definición, un choque es elástico si la energía cinética del sistema antes del choque es igual a la energía cinética después del choque. Por lo tanto, la afirmación es verdadera.
```

### 13 — Identificación de tipos de choque

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["clasificacion", "energia"]

respuesta: "inelástico"
tipo: "completar"

enunciado: "Si en una colisión la energía cinética total se reduce tras el impacto, el choque es de tipo ___."

respuestas_validas:
  - "inelástico"

explicacion: |
  Si hay pérdida de energía cinética (que se transforma en otra forma de energía), el choque es inelástico. Si la energía cinética se mantiene constante, es elástico.
```

### 14 — Análisis de variables

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["conservacion", "leyes"]

respuesta_orden: ["momento_lineal", "energia_cinetica"]
tipo: "ordenar"
opciones_explicitas: ["momento_lineal", "energia_cinetica"]

enunciado: "Al plantear las ecuaciones de un choque perfectamente elástico, ordena estas dos magnitudes conservadas según el orden habitual en que se escriben sus ecuaciones de conservación:"

explicacion: |
  En un choque elástico se conservan tanto el momento lineal como la energía cinética. La masa total es una propiedad de la materia y no es una magnitud que se "conserve" mediante una ecuación de colisión como las otras dos.
```

### 15 — El caso del choque inelástico

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "calor"]

respuesta: "se_pierde"
tipo: "mc"
opciones_explicitas: ["se_pierde", "se_conserva", "se_duplica", "no_cambia"]

enunciado: "En un choque inelástico, la energía cinética que no se conserva se transforma principalmente en:"

explicacion: |
  En los choques inelásticos, la energía cinética "perdida" no desaparece, sino que se transforma en energía térmica (calor), energía sonora o trabajo para deformar los cuerpos.
```

### 16 — Conservación en choques

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["mecanica", "conservacion"]

respuesta: "momento_lineal"
tipo: completar
respuestas_validas:
  - "momento_lineal"

enunciado: "En cualquier tipo de choque (elástico o inelástico) entre dos cuerpos que interactúan, la propiedad que siempre se conserva es el ___."

explicacion: |
  En un sistema aislado, la cantidad de movimiento (o momento lineal) se conserva siempre, independientemente de si el choque es elástico o inelástico.
```

### 17 — Diferencia energética

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "choques"]

respuesta: "elástico"
tipo: mc
opciones_explicitas: ["elástico", "inelástico"]

enunciado: "Si en un sistema de dos partículas se observa que la energía cinética total se mantiene constante antes y después del impacto, podemos afirmar que el choque es: ___"

explicacion: |
  La característica distintiva del choque elástico es que la energía cinética se conserva. En el inelástico, parte de esa energía se transforma en calor o deformación.
```

### 18 — Verdad o Falso: Energía en choques inelásticos

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "¿Es posible que en un choque perfectamente inelástico la energía cinética total del sistema se mantenga constante?"

explicacion: |
  Falso. En un choque inelástico, la energía cinética se pierde (se transforma en otras formas de energía), aunque el momento lineal se siga conservando.
```

### 19 — Comparación de propiedades

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["propiedades", "comparacion"]

respuesta: verdadero

tipo: vf
enunciado: "Si comparamos un choque elástico con uno inelástico, el choque elástico se distingue porque la energía cinética se conserva."

explicacion: |
  Efectivamente, la conservación de la energía cinética es el criterio que define la elasticidad de un choque.
```

### 20 — Secuencia de análisis de un choque

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["metodologia", "analisis"]

opciones_explicitas: ["Calcular momento lineal inicial", "Determinar si hay pérdida de energía cinética", "Calcular momento lineal final", "Verificar si el choque fue elástico"]

respuesta_orden: ["Calcular momento lineal inicial", "Calcular momento lineal final", "Determinar si hay pérdida de energía cinética", "Verificar si el choque fue elástico"]
tipo: ordenar

enunciado: "Para analizar un choque y determinar su naturaleza, se deben seguir estos pasos lógicos:"

explicacion: |
  Primero se aplican las leyes de conservación (momento) para hallar las velocidades finales, luego se compara la energía cinética inicial con la final para clasificar el choque.
```

### 21 — Conservación en choques

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "momento", "energia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["colision_elástica", "se conserva"], ["colision_inelástica", "no se conserva"]]

enunciado: "En una {datos[escenario_idx][0]}, la energía cinética total del sistema ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "se conserva"
  - "no se conserva"

explicacion: |
  En un choque elástico la energía cinética se conserva. En un choque inelástico parte de la energía se transforma en calor o deformación, por lo que no se conserva.
```

### 22 — El caso del choque inelástico

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia_cinetica"]

enunciado: "¿Qué sucede con la energía cinética total en un choque perfectamente inelástico donde los objetos quedan pegados?"

opciones_explicitas: ["Se mantiene constante", "Se conserva parcialmente", "Se pierde (se transforma en otra forma de energía)", "Aumenta debido a la fricción"]

respuesta: "Se pierde (se transforma en otra forma de energía)"
tipo: mc

explicacion: |
  En los choques inelásticos, la energía cinética no se conserva; se transforma en energía térmica, sonido o energía de deformación.
```

### 23 — El principio de conservación universal

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["momento_lineal"]

enunciado: "Si dos bolas de billar chocan, independientemente de si el choque es elástico o inelástico, la cantidad de movimiento (momento lineal) total del sistema se ___."

opciones_explicitas: ["conserva", "pierde", "transforma en energía"]

respuesta: "conserva"
tipo: mc

explicacion: |
  La cantidad de movimiento lineal se conserva en todos los choques (siempre que no actúen fuerzas externas netas), ya sea elástico o inelástico.
```

### 24 — Análisis de escenario real

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia", "momento"]

enunciado: "Un accidente de tránsito donde los vehículos quedan trabados tras el impacto es un ejemplo de choque inelástico. En este caso, la energía cinética ___."

respuesta: "no se conserva la energía cinética"
tipo: completar
respuestas_validas:
  - "no se conserva la energía cinética"

explicacion: |
  Al quedar los cuerpos unidos, se trata de un choque inelástico, donde la energía cinética no se conserva.
```

### 25 — Verdadero o Falso: Conservación

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "¿Es posible que en un choque inelástico la energía cinética total del sistema sea mayor que la energía cinética inicial?"

opciones_explicitas: [falso, verdadero]

respuesta: falso
tipo: vf

explicacion: |
  La energía cinética no puede aumentar espontáneamente en un choque; en los choques inelásticos, la energía cinética siempre disminuye o se mantiene (si fuera elástico).
```

### 26 — Velocidad después de quedar unidos

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["calculo", "inelastico"]

variables:
  m1: random(1, 6)
  m2: random(1, 6)
  vf: random(1, 6)
  v1: vf * (m1 + m2) / m1

respuesta: vf
tipo: input
unidad: "m/s"
tolerancia: 1%

enunciado: "Un carrito de {m1} kg a {v1 | 2} m/s choca con otro de {m2} kg que está quieto, y quedan enganchados. ¿A qué velocidad se mueven juntos, en m/s?"

pasos:
  - "Momento antes: {m1} × {v1 | 2} + {m2} × 0 = {m1 * v1 | 2} kg·m/s"
  - "Después: ({m1} + {m2}) · v = {m1 * v1 | 2}"
  - "v = {m1 * v1 | 2} / {m1 + m2} = {vf} m/s"

explicacion: |
  En todo choque se conserva el momento lineal total; si quedan unidos, se mueven con una sola velocidad.
```

### 27 — Momento total antes del choque

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["calculo", "momento"]

variables:
  m1: random(1, 10)
  v1: random(1, 10)
  m2: random(1, 10)
  v2: random(1, 10)

respuesta: m1 * v1 + m2 * v2
tipo: input
unidad: "kg·m/s"
tolerancia_abs: 0

enunciado: "Dos bloques se mueven en la misma dirección y sentido: uno de {m1} kg a {v1} m/s y otro de {m2} kg a {v2} m/s. ¿Cuál es el momento lineal total, en kg·m/s?"

pasos:
  - "p1 = {m1} × {v1} = {m1 * v1}; p2 = {m2} × {v2} = {m2 * v2}"
  - "p total = {m1 * v1} + {m2 * v2} = {m1 * v1 + m2 * v2} kg·m/s"

explicacion: |
  Ese total es el mismo antes y después del choque.
```

### 28 — Energía perdida en el choque

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["calculo", "energia", "inelastico"]

variables:
  m1: uno_de([1, 2, 3, 4])
  m2: uno_de([1, 2, 3, 4])
  vf: uno_de([1, 2, 3])
  v1: vf * (m1 + m2) / m1
  Ei: m1 * v1 ^ 2 / 2
  Ef: (m1 + m2) * vf ^ 2 / 2

respuesta: Ei - Ef
tipo: input
unidad: "J"
tolerancia: 1%

enunciado: "Un bloque de {m1} kg a {v1 | 2} m/s choca con otro de {m2} kg quieto y quedan pegados, moviéndose a {vf} m/s. ¿Cuánta energía cinética se perdió, en joules?"

pasos:
  - "Antes: ½ × {m1} × {v1 | 2}² = {Ei | 2} J"
  - "Después: ½ × {m1 + m2} × {vf}² = {Ef | 2} J"
  - "Perdida: {Ei | 2} − {Ef | 2} = {Ei - Ef | 2} J"

explicacion: |
  En un choque inelástico parte de la energía cinética se transforma en deformación, calor y sonido.
```

### 29 — Retroceso de un cañón de juguete

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["calculo", "retroceso"]

variables:
  mb: uno_de([0.05, 0.1, 0.2])
  vb: random(10, 40)
  M: uno_de([1, 2, 4, 5])

respuesta: mb * vb / M
tipo: input
unidad: "m/s"
tolerancia: 1%

enunciado: "Un cañón de juguete de {M} kg, quieto sobre ruedas, dispara una bolita de {mb} kg a {vb} m/s. ¿A qué velocidad retrocede el cañón, en m/s?"

pasos:
  - "Antes del disparo todo está quieto: momento total 0."
  - "Después: {mb} × {vb} = {M} × v (en sentidos opuestos)"
  - "v = {mb * vb | 2} / {M} = {mb * vb / M | 3} m/s"

explicacion: |
  La bolita y el cañón salen con momentos iguales y opuestos: la suma sigue siendo cero.
```

### 30 — El autito chocador

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["calculo", "cotidiano"]

variables:
  m1: uno_de([150, 180, 200])
  m2: uno_de([150, 180, 200])
  v1: uno_de([2, 3, 4])

respuesta: m1 * v1 / (m1 + m2)
tipo: input
unidad: "m/s"
tolerancia: 2%

enunciado: "En el parque, un autito chocador de {m1} kg (con su conductor) va a {v1} m/s y choca de atrás a otro de {m2} kg que está quieto. Si quedan trabados, ¿a qué velocidad siguen juntos, en m/s? (podés redondear a dos decimales)"

pasos:
  - "Momento antes: {m1} × {v1} = {m1 * v1} kg·m/s"
  - "v = {m1 * v1} / ({m1} + {m2}) = {m1 * v1} / {m1 + m2} ≈ {m1 * v1 / (m1 + m2) | 2} m/s"

explicacion: |
  Después del choque se mueven más despacio porque el mismo momento se reparte en más masa.
```

### 31 — ¿Elástico o inelástico?

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["clasificacion", "verdadero_falso"]

variables:
  Ei: random(40, 100)
  perdida: uno_de([0, 0, 10, 20])

respuesta: perdida == 0
tipo: vf

enunciado: "En un choque, la energía cinética total era de {Ei} J antes y de {Ei - perdida} J después. ¿Fue un choque elástico?"

pasos:
  - "Diferencia de energía cinética: {Ei} − {Ei - perdida} = {perdida} J"

explicacion: |
  Es elástico si la energía cinética total se conserva (no se pierde nada); si disminuye, es inelástico.
```
