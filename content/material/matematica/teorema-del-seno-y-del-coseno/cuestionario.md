# Matemática — Teorema del seno y del coseno (cuestionario, 25 preguntas VBLang)

> Tema: `TRIG2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un triángulo oblicuo

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Qué es un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Un triángulo que no tiene ningún ángulo de 90°"
  - "Un triángulo con los tres lados iguales"
  - "Otro nombre para el triángulo rectángulo"
respuesta: "Un triángulo que no tiene ningún ángulo de 90°"

explicacion: |
  Ahí ni Pitágoras ni las razones trigonométricas simples se pueden
  aplicar directo.
```

### 2 — Por qué Pitágoras no alcanza en un triángulo oblicuo

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["oblicuos", "vocabulario"]

enunciado: "¿Por qué el teorema de Pitágoras no se puede usar directamente en un triángulo oblicuo?"
tipo: mc
opciones_explicitas:
  - "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"
  - "Porque los triángulos oblicuos no tienen hipotenusa nombrada"
  - "En realidad sí se puede usar exactamente igual"
respuesta: "Porque Pitágoras exige un ángulo recto, y un triángulo oblicuo no tiene ninguno"

explicacion: |
  Por eso hacen falta el teorema del seno y del coseno.
```

### 3 — Completar: teorema del seno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "completar"]

tipo: completar
enunciado: "Completá el teorema del seno: a / sen(A) = b / sen(B) = ___."
respuestas_validas:
  - "c / sen(C)"
  - "c/sen(C)"

explicacion: |
  Los tres cocientes lado/seno(ángulo opuesto) son siempre iguales entre
  sí.
```

### 4 — Qué dice el teorema del seno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Qué dice el teorema del seno?"
tipo: mc
opciones_explicitas:
  - "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"
  - "Que la suma de los tres lados es igual al seno del ángulo mayor"
  - "Que sólo aplica a triángulos rectángulos"
respuesta: "Que cada lado de un triángulo es proporcional al seno de su ángulo opuesto, con la misma razón para los tres"

explicacion: |
  Vale para cualquier triángulo, no sólo los rectángulos.
```

### 5 — Problema: hallar un lado con el teorema del seno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  a: uno_de([10, 20, 30, 40])
  sen_A: 0.5
  sen_B: 1

respuesta: (a / sen_A) * sen_B
tipo: input
tolerancia_abs: 0.5

enunciado: "En un triángulo, el lado a = {a} es opuesto al ángulo A = 30° (sen 30° = 0,5). El lado b es opuesto al ángulo B = 90° (sen 90° = 1). ¿Cuánto mide el lado b?"

pasos:
  - "{a} ÷ 0,5 = {a / sen_A} (la razón constante del triángulo)"
  - "b = {a / sen_A} × 1 = {(a / sen_A) * sen_B}"

explicacion: |
  Se usa la razón a/sen(A), que es la misma para los tres lados del
  triángulo.
```

### 6 — Problema: otro caso con el teorema del seno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno", "problema"]

variables:
  b: uno_de([10, 14, 20])
  sen_B: 0.71
  sen_A: 0.5

respuesta: redondear((b / sen_B) * sen_A, 1)
tipo: input
tolerancia_abs: 1

enunciado: "En un triángulo, el lado b = {b} es opuesto al ángulo B = 45° (sen 45° ≈ 0,71). El lado a es opuesto al ángulo A = 30° (sen 30° = 0,5). ¿Cuánto mide el lado a, aproximadamente?"

pasos:
  - "{b} ÷ 0,71 ≈ {redondear(b / sen_B, 2)} (razón constante)"
  - "a ≈ {redondear(b / sen_B, 2)} × 0,5 ≈ {redondear((b / sen_B) * sen_A, 1)}"

explicacion: |
  Mismo procedimiento: primero se halla la razón constante, después se
  aplica al ángulo del lado buscado.
```

### 7 — Cuándo conviene usar el teorema del seno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del seno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"
  - "Cuando se conocen sólo los tres lados, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conoce un ángulo y su lado opuesto, más otro ángulo o lado"

explicacion: |
  Ese par lado-ángulo opuesto es lo que permite fijar la razón
  constante.
```

### 8 — Completar: teorema del coseno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "completar"]

tipo: completar
enunciado: "Completá el teorema del coseno: c² = a² + b² − ___."
respuestas_validas:
  - "2ab·cos(C)"
  - "2ab cos(C)"
  - "2*a*b*cos(C)"

explicacion: |
  C es el ángulo comprendido entre los lados a y b.
```

### 9 — Qué generaliza el teorema del coseno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Qué relación tiene el teorema del coseno con el teorema de Pitágoras?"
tipo: mc
opciones_explicitas:
  - "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"
  - "No tienen ninguna relación entre sí"
  - "El teorema del coseno reemplaza completamente a Pitágoras, que ya no se usa"
respuesta: "Pitágoras es el caso particular del teorema del coseno cuando el ángulo C es de 90°"

explicacion: |
  Con cos(90°) = 0, el último término del teorema del coseno desaparece.
```

### 10 — Con C = 90°, el teorema del coseno da Pitágoras

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "Si el ángulo C de un triángulo es 90°, el teorema del coseno se reduce exactamente a c² = a² + b² (el teorema de Pitágoras)."

explicacion: |
  Porque cos(90°) = 0, y el término -2ab·cos(C) se anula.
```

### 11 — Problema: verificar el caso C = 90°

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 3
  b: 4
  cos_90: 0

respuesta: 25
tipo: input
tolerancia_abs: 0

enunciado: "Un triángulo tiene lados a = 3 y b = 4, con el ángulo C entre ellos de 90° (cos 90° = 0). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "c² = 3² + 4² − 2×3×4×0 = 9 + 16 − 0 = 25"

explicacion: |
  Da exactamente el mismo resultado que Pitágoras: 3² + 4² = 25.
```

### 12 — Problema: teorema del coseno con ángulo de 60°

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 6, 8])
  b: uno_de([4, 6, 8])
  cos_60: 0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_60)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo C = 60° entre ellos (cos 60° = 0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"

explicacion: |
  Se reemplazan los valores directamente en la fórmula.
```

### 13 — Problema: teorema del coseno con ángulo obtuso (120°)

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: uno_de([4, 5, 6])
  b: uno_de([4, 5, 6])
  cos_120: -0.5

respuesta: (a * a) + (b * b) - (2 * a * b * cos_120)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un triángulo tiene lados a = {a} y b = {b}, con un ángulo obtuso C = 120° entre ellos (cos 120° = -0,5). Usando el teorema del coseno, ¿cuánto vale c²?"

pasos:
  - "{a}² + {b}² − 2×{a}×{b}×(-0,5) = {(a * a) + (b * b) - (2 * a * b * cos_120)}"

explicacion: |
  Con coseno negativo, el término se SUMA en vez de restarse: el lado c
  queda más largo que si el ángulo fuera agudo.
```

### 14 — Cuándo conviene usar el teorema del coseno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "¿Cuándo conviene usar el teorema del coseno para resolver un triángulo?"
tipo: mc
opciones_explicitas:
  - "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"
  - "Cuando se conoce sólo un lado, sin ningún ángulo"
  - "Nunca, sólo sirve para triángulos rectángulos"
respuesta: "Cuando se conocen dos lados y el ángulo entre ellos, o los tres lados"

explicacion: |
  Es el caso LAL (lado-ángulo-lado) o LLL (los tres lados).
```

### 15 — Diferencia entre cuándo usar seno vs. coseno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

enunciado: "¿Cuál es la diferencia clave entre cuándo usar el teorema del seno y cuándo el del coseno?"
tipo: mc
opciones_explicitas:
  - "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"
  - "El seno sólo sirve para ángulos agudos; el coseno sólo para obtusos"
  - "Son intercambiables, da lo mismo cuál se use"
respuesta: "El seno necesita un ángulo con su lado opuesto ya conocidos; el coseno necesita dos lados y el ángulo entre ellos (o los tres lados)"

explicacion: |
  Es la clave para decidir cuál aplicar según los datos disponibles.
```

### 16 — El teorema del coseno funciona con ángulos obtusos

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del coseno funciona igual de bien con ángulos obtusos (mayores a 90°), no sólo con agudos."

explicacion: |
  El coseno de un ángulo obtuso es simplemente negativo, y la fórmula
  lo maneja sin ningún ajuste extra.
```

### 17 — Problema: tercer lado con dos lados y el ángulo entre ellos

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "problema"]

variables:
  a: 6
  b: 8
  cos_60: 0.5

respuesta: redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un terreno triangular tiene dos lados de {a} m y {b} m, con un ángulo de 60° entre ellos. ¿Cuánto mide el tercer lado? Redondeá a 2 decimales."

pasos:
  - "c² = {a}² + {b}² − 2×{a}×{b}×0,5 = {(a * a) + (b * b) - (2 * a * b * cos_60)}"
  - "c = √{(a * a) + (b * b) - (2 * a * b * cos_60)} ≈ {redondear(sqrt((a * a) + (b * b) - (2 * a * b * cos_60)), 2)} m"

explicacion: |
  Se calcula c² con el teorema del coseno, y recién al final se saca
  raíz cuadrada para obtener c.
```

### 18 — Ordenar: pasos para aplicar el teorema del coseno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_coseno", "ordenar"]

enunciado: "Ordená los pasos para hallar el lado c con el teorema del coseno, conociendo a, b y el ángulo C entre ellos."
tipo: ordenar
opciones_explicitas:
  - "Sacar raíz cuadrada de c² para obtener c"
  - "Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)"
  - "Calcular el valor numérico de c²"
respuesta_orden: ["Reemplazar a, b y cos(C) en la fórmula c² = a² + b² − 2ab·cos(C)", "Calcular el valor numérico de c²", "Sacar raíz cuadrada de c² para obtener c"]
explicacion: |
  La raíz cuadrada siempre va al final, no antes de tener c² completo.
```

### 19 — Ordenar: pasos para aplicar el teorema del seno

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["teorema_seno", "ordenar"]

enunciado: "Ordená los pasos para hallar un lado desconocido con el teorema del seno."
tipo: ordenar
opciones_explicitas:
  - "El resultado es el lado buscado"
  - "Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido"
  - "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado"
respuesta_orden: ["Calcular la razón lado/sen(ángulo opuesto) con el par de datos ya conocido", "Multiplicar esa razón por el seno del ángulo opuesto al lado buscado", "El resultado es el lado buscado"]
explicacion: |
  La razón constante es el puente entre el par conocido y el
  desconocido.
```

### 20 — El teorema del seno también sirve para hallar ángulos

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_seno"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno también se puede usar al revés: para hallar un ángulo desconocido, si se conocen los dos lados involucrados y un ángulo opuesto ya conocido."

explicacion: |
  La misma proporción se puede despejar para cualquiera de sus cuatro
  términos (dos lados, dos ángulos).
```

### 21 — Aplicación real: triangulación

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Para qué se usan estos dos teoremas en topografía?"
tipo: mc
opciones_explicitas:
  - "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"
  - "Sólo para calcular el área de un terreno cuadrado"
  - "No tienen ninguna aplicación práctica fuera del aula"
respuesta: "Para calcular distancias o alturas inaccesibles, midiendo sólo algunos ángulos y una distancia de referencia"

explicacion: |
  Es la base de la triangulación: no hace falta que el triángulo
  formado tenga un ángulo recto.
```

### 22 — Ambos teoremas también funcionan en triángulos rectángulos

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El teorema del seno y del coseno también son válidos para triángulos rectángulos, aunque ahí ya alcance con Pitágoras y las razones trigonométricas simples."

explicacion: |
  Son herramientas más generales; simplemente no hace falta usarlas
  cuando hay una forma más rápida disponible.
```

### 23 — Problema combinado: verificar consistencia entre ambos teoremas

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["problema"]

variables:
  lado: 5

respuesta: verdadero
tipo: vf

enunciado: "Un triángulo equilátero tiene los tres lados iguales a {lado}, y sus tres ángulos son de 60°. ¿Es consistente que la razón lado/sen(ángulo opuesto) dé el mismo valor para los tres lados (teorema del seno)?"

explicacion: |
  Al ser equilátero, los tres pares lado-ángulo son idénticos entre sí:
  la razón tiene que coincidir por simetría.
```

### 24 — El teorema del coseno con LLL despeja un ángulo

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "avanzado"
  tags: ["teorema_coseno", "vocabulario"]

enunciado: "Si se conocen los tres lados de un triángulo (LLL) pero ningún ángulo, ¿qué teorema conviene usar para hallar un ángulo?"
tipo: mc
opciones_explicitas:
  - "El teorema del coseno, despejando cos(C) de la fórmula"
  - "El teorema del seno, porque siempre es más simple"
  - "Ninguno de los dos sirve sin conocer al menos un ángulo de entrada"
respuesta: "El teorema del coseno, despejando cos(C) de la fórmula"

explicacion: |
  cos(C) = (a² + b² − c²) / (2ab): se puede despejar sin conocer ningún
  ángulo de entrada.
```

### 25 — Cierre: para qué sirven estos dos teoremas

```
metadata:
  materia: "matematicas"
  tema: "teorema_del_seno_y_del_coseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven el teorema del seno y del coseno en conjunto?"
tipo: mc
opciones_explicitas:
  - "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"
  - "Sólo sirven para triángulos equiláteros"
  - "Son redundantes entre sí, alcanza con saber uno solo"
respuesta: "Para resolver cualquier triángulo, tenga o no un ángulo recto, según qué datos estén disponibles"

explicacion: |
  Entre los dos, y sumados a Pitágoras para el caso rectángulo, cubren
  cualquier triángulo posible.
```
