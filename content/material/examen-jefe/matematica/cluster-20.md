# Examen jefe — Maestro del mcm y estadística

> Logro #71. ¡Calculaste el mcm, analizaste datos con media, mediana y moda, y dominaste el muestreo sin sesgo! Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **135 preguntas totales** en 5/5 secciones.

---

## Sección: mcm (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

enunciado: "¿Qué es el Mínimo Común Múltiplo (MCM) de dos números?"
tipo: mc
opciones_explicitas:
  - "El menor número (mayor que 0) que es múltiplo de los dos a la vez"
  - "El mayor número que es divisor de los dos a la vez"
  - "El producto de los dos números"
respuesta: "El menor número (mayor que 0) que es múltiplo de los dos a la vez"

explicacion: |
  Se buscan los múltiplos en común de los dos números, y se toma el más
  chico (sin contar el 0).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Se buscan los múltiplos de {a} y de {b} hasta encontrar el primero que
  coincide en las dos listas.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(10, 40)
  b: random(10, 40)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Con números más grandes conviene usar el atajo del MCD en vez de listar
  múltiplos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)
  divisor_comun: mcd(a, b)

respuesta: (a * b) / divisor_comun
tipo: input
tolerancia_abs: 0

enunciado: "El MCD de {a} y {b} es {divisor_comun}. Usando la fórmula MCM = (a × b) ÷ MCD, ¿cuál es el MCM?"

pasos:
  - "({a} × {b}) ÷ {divisor_comun} = {a * b} ÷ {divisor_comun} = {(a * b) / divisor_comun}"

explicacion: |
  Es el atajo más rápido: multiplicar los dos números y dividir por su
  MCD.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  candidato: a * b

respuesta: verdadero
tipo: vf

enunciado: "¿Es {candidato} un múltiplo común de {a} y {b}?"

explicacion: |
  {candidato} es {a} × {b}, así que es múltiplo de los dos a la vez
  (aunque no sea necesariamente el MCM: podría haber uno más chico).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(3, 15)
  b: a + 1

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b} (dos números consecutivos, que no comparten factores)?"

pasos:
  - "Como no comparten ningún factor (MCD = 1), el MCM es directamente el producto: {a} × {b} = {a * b}"

explicacion: |
  Cuando dos números son primos entre sí (su MCD es 1), su MCM es
  directamente el producto de los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm"]

variables:
  n: random(2, 999)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {n} y {n}?"

explicacion: |
  El menor múltiplo en común de un número consigo mismo es el propio
  número.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM de dos números nunca puede ser menor que el más grande de los dos."

explicacion: |
  Un múltiplo de un número nunca puede ser menor que ese número (salvo el
  0); como el MCM es múltiplo de los dos, no puede ser menor que el más
  grande.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(3, 15)
  b: random(3, 15)
  correcto: mcm(a, b)

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - correcto + a

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  El producto a×b es un múltiplo común, pero no siempre es el MÍNIMO — sólo
  coincide con el MCM cuando los dos números son primos entre sí.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 12)
  b: random(2, 12)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar dos fracciones con denominadores {a} y {b}, conviene usar como común denominador el MCM de los dos. ¿Cuál es ese común denominador?"

explicacion: |
  El MCM de los denominadores es el común denominador más chico posible
  para sumar o restar las fracciones.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(4, 20)
  b: random(4, 20)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo pasa por una parada cada {a} minutos, y otro cada {b} minutos. Si los dos pasaron juntos a las 0, ¿en qué minuto vuelven a pasar juntos por primera vez?"

explicacion: |
  El primer momento en que coinciden de nuevo es el MCM de los dos
  intervalos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 15)
  b: random(2, 15)

respuesta: mcm(a, b)
tipo: input
tolerancia_abs: 0

enunciado: "Una luz titila cada {a} segundos y otra cada {b} segundos. Si las dos titilaron juntas en el segundo 0, ¿en qué segundo van a volver a titilar juntas?"

explicacion: |
  Es el mismo tipo de problema que los colectivos: el primer encuentro es
  el MCM de los dos ritmos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm"]

variables:
  a: random(2, 10)
  b: random(2, 10)
  c: random(2, 10)

respuesta: mcm(mcm(a, b), c)
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a}, {b} y {c}?"

pasos:
  - "Se calcula de a dos: MCM({a}, {b}) = {mcm(a, b)}, y después MCM({mcm(a, b)}, {c}) = {mcm(mcm(a, b), c)}"

explicacion: |
  El MCM de tres números se calcula de a pares: primero entre dos, y
  después ese resultado con el tercero.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "verificacion"]

variables:
  a: random(3, 15)
  b: random(3, 15)
  correcto: mcm(a, b)
  error: uno_de([0, 0, 0, a, -a])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Es correcto decir que el MCM de {a} y {b} es {mostrado}?"

explicacion: |
  Hay que verificar que {mostrado} sea múltiplo de los dos números, y que
  no haya ningún múltiplo común más chico.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  primos: [2, 3, 5, 7, 11, 13]
  p1: uno_de(primos)
  p2: uno_de(primos)

restricciones:
  - p1 != p2

respuesta: p1 * p2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {p1} y {p2} (dos números primos distintos)?"

explicacion: |
  Como no comparten ningún factor, el MCM es directamente el producto de
  los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM de dos números siempre es múltiplo de los dos, además de ser el menor de los múltiplos en común."

explicacion: |
  Es la propia definición: el MCM tiene que ser múltiplo de ambos números
  para contar como múltiplo común.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)

tipo: completar
enunciado: "Nombrá un múltiplo común de {a} y {b} (no hace falta que sea el MCM, alcanza con que sea múltiplo de los dos)."
respuestas_validas:
  - a * b
  - mcm(a, b)

explicacion: |
  El producto de los dos números siempre es un múltiplo común válido,
  aunque no sea siempre el más chico.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm"]

variables:
  a: random(2, 30)
  k: random(2, 9)
  b: a * k

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es el MCM de {a} y {b}, sabiendo que {b} es múltiplo de {a}?"

explicacion: |
  Cuando un número es múltiplo del otro, el más grande de los dos ya es
  el MCM: no hace falta calcular nada más.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "multiplos"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  comun: a * b
  no_comun: comun + 1

respuesta: no_comun
tipo: mc
opciones_explicitas:
  - comun
  - mcm(a, b)
  - no_comun

enunciado: "¿Cuál de estos tres números NO es múltiplo común de {a} y {b}?"

explicacion: |
  {no_comun} le sobra 1 respecto de un múltiplo común real: eso rompe la
  divisibilidad exacta con al menos uno de los dos números.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "intermedio"
  tags: ["mcm", "propiedades"]

variables:
  a: random(3, 20)
  b: random(3, 20)

respuesta: (mcm(a, b) == mcm(b, a))
tipo: vf

enunciado: "¿Es cierto que el MCM de {a} y {b} da lo mismo que el MCM de {b} y {a}?"

explicacion: |
  El orden en que se comparan los dos números no cambia el resultado: el
  MCM es conmutativo (igual que el MCD).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "problema"]

variables:
  a: random(2, 10)
  b: random(2, 10)
  comun: mcm(a, b)

respuesta: comun / a
tipo: input
tolerancia_abs: 0

enunciado: "Para sumar una fracción con denominador {a} con otra de denominador {b}, se usa el común denominador {comun} (el MCM de los dos). ¿Por cuánto hay que multiplicar el numerador de la primera fracción?"

pasos:
  - "{comun} ÷ {a} = {comun / a}: ese es el factor que hay que usar para pasar la primera fracción al nuevo denominador."

explicacion: |
  Al cambiar de denominador, el numerador se multiplica por el mismo
  factor que el denominador (para no cambiar el valor de la fracción).
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "factorizacion"]

variables:
  a: uno_de([4, 6, 8, 9])
  b: uno_de([4, 6, 8, 9])
  correcto: mcm(a, b)

restricciones:
  - a != b

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - a * b
  - mcd(a, b)

enunciado: "¿Cuál es el MCM de {a} y {b}?"

explicacion: |
  Conviene factorizar los dos números en primos y quedarse con TODOS los
  factores, usando el mayor exponente de cada uno.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "avanzado"
  tags: ["mcm", "mcd"]

variables:
  a: random(4, 40)
  b: random(4, 40)

respuesta: (mcd(a, b) * mcm(a, b) == a * b)
tipo: vf

enunciado: "¿Es cierto que el MCD de {a} y {b}, multiplicado por el MCM de {a} y {b}, da lo mismo que {a} × {b}?"

explicacion: |
  Es la fórmula que conecta MCD y MCM: MCD × MCM siempre da el producto de
  los dos números originales.
```

```
metadata:
  materia: "matematicas"
  tema: "mcm"
  nivel: "basico"
  tags: ["mcm", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El MCM sirve para saber, entre otras cosas, cuándo dos sucesos que se repiten con ritmos distintos vuelven a coincidir por primera vez."

explicacion: |
  Es la aplicación práctica más común del MCM: encontrar el primer punto
  de encuentro entre dos ciclos distintos.
```

## Sección: media-mediana-y-moda (25 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["media", "vocabulario"]

enunciado: "¿Qué es la media (promedio) de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "La suma de todos los valores, dividida por la cantidad de valores"
  - "El valor que aparece más veces"
  - "El valor que queda justo en el medio al ordenar los datos"
respuesta: "La suma de todos los valores, dividida por la cantidad de valores"

explicacion: |
  Es la medida de tendencia central más usada.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["mediana", "vocabulario"]

enunciado: "¿Qué es la mediana de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "El valor que queda exactamente en el medio, una vez que los datos están ordenados de menor a mayor"
  - "El valor que aparece más veces"
  - "La suma de todos los valores"
respuesta: "El valor que queda exactamente en el medio, una vez que los datos están ordenados de menor a mayor"

explicacion: |
  Hay que ordenar los datos primero — sin ordenar, 'el del medio' no
  significa nada.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["moda", "vocabulario"]

enunciado: "¿Qué es la moda de un conjunto de datos?"
tipo: mc
opciones_explicitas:
  - "El valor (o valores) que aparece con más frecuencia"
  - "El valor más grande de todos"
  - "El promedio de todos los valores"
respuesta: "El valor (o valores) que aparece con más frecuencia"

explicacion: |
  Es la única de las tres medidas que también tiene sentido con datos
  que no son números (como colores o talles).
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["media", "completar"]

tipo: completar
enunciado: "Completá: media = suma de todos los valores / ___."
respuestas_validas:
  - "cantidad de valores"
  - "cantidad"

explicacion: |
  Dividir por la cantidad de datos es lo que convierte la suma total
  en un promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["media", "problema"]

variables:
  a: random(1, 20)
  b: random(1, 20)
  c: random(1, 20)
  d: random(1, 20)
  e: random(1, 20)
  datos: [a, b, c, d, e]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la media de estos 5 valores: {a}, {b}, {c}, {d}, {e}."

pasos:
  - "Suma = {a}+{b}+{c}+{d}+{e} = {a + b + c + d + e}"
  - "Media = {a + b + c + d + e} / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  Se suman los 5 valores y se divide por 5.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana", "problema"]

variables:
  a: random(1, 30)
  b: random(1, 30)
  c: random(1, 30)
  d: random(1, 30)
  e: random(1, 30)
  datos: [a, b, c, d, e]

respuesta: mediana(datos)
tipo: input

enunciado: "Calculá la mediana de estos 5 valores: {a}, {b}, {c}, {d}, {e}."

pasos:
  - "Se ordenan de menor a mayor, y se toma el valor del medio (el 3° de 5)."
  - "Mediana = {mediana(datos)}"

explicacion: |
  Con 5 valores (cantidad impar), hay un único valor central una vez
  ordenados.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

variables:
  a: random(1, 30)
  b: random(1, 30)
  c: random(1, 30)
  d: random(1, 30)
  datos: [a, b, c, d]

respuesta: mediana(datos)
tipo: input
tolerancia_abs: 0.01

enunciado: "Calculá la mediana de estos 4 valores: {a}, {b}, {c}, {d}."

pasos:
  - "Se ordenan de menor a mayor, y se promedian los dos valores centrales (el 2° y el 3° de 4)."
  - "Mediana = {mediana(datos)}"

explicacion: |
  Con una cantidad par de datos, no hay un único valor central — se
  promedian los dos del medio.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando hay una cantidad PAR de datos, la mediana es el promedio de los dos valores que quedan en el medio, una vez ordenados."

explicacion: |
  No hay un único valor central posible con una cantidad par, así que
  se promedian los dos.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["moda", "problema"]

variables:
  repetido: random(1, 10)
  otro1: random(11, 20)
  otro2: random(11, 20)
  datos: [repetido, repetido, repetido, otro1, otro2]

respuesta: repetido
tipo: input

enunciado: "Calculá la moda de estos 5 valores: {repetido}, {repetido}, {repetido}, {otro1}, {otro2}."

pasos:
  - "{repetido} aparece 3 veces; los demás aparecen 1 vez cada uno."
  - "Moda = {repetido}"

explicacion: |
  Es el valor con la frecuencia más alta del conjunto.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["moda"]

respuesta: verdadero
tipo: vf

enunciado: "Si todos los valores de un conjunto de datos aparecen exactamente la misma cantidad de veces, no hay moda."

explicacion: |
  No hay ningún valor que se destaque por frecuencia más alta que los
  demás.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["moda"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos o más valores empatan en la frecuencia más alta, un conjunto de datos puede tener más de una moda a la vez."

explicacion: |
  Por ejemplo, en {1, 1, 2, 2, 3}, tanto 1 como 2 aparecen 2 veces —
  hay dos modas.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana", "ordenar"]

enunciado: "Ordená los pasos para calcular la mediana de un conjunto de datos."
tipo: ordenar
opciones_explicitas:
  - "Si la cantidad es par, promediar los dos valores centrales; si es impar, tomar el único valor central"
  - "Ordenar todos los datos de menor a mayor"
  - "Contar cuántos datos hay en total, para saber si es una cantidad par o impar"
respuesta_orden:
  - "Ordenar todos los datos de menor a mayor"
  - "Contar cuántos datos hay en total, para saber si es una cantidad par o impar"
  - "Si la cantidad es par, promediar los dos valores centrales; si es impar, tomar el único valor central"

explicacion: |
  Sin ordenar primero, 'el valor del medio' no tiene ningún sentido.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(8, 12)
  b: random(8, 12)
  c: random(8, 12)
  d: random(8, 12)
  atipico: random(80, 100)
  datos: [a, b, c, d, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Un grupo de 5 valores son: {a}, {b}, {c}, {d} y un valor mucho más grande, {atipico}. ¿Cuál es la MEDIA de estos 5 valores?"

pasos:
  - "Media = ({a}+{b}+{c}+{d}+{atipico}) / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  El valor atípico ({atipico}) empuja bastante la media hacia arriba,
  aunque los otros 4 valores sean todos parecidos y chicos.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor atípico (mucho más grande o más chico que el resto) puede correr bastante el valor de la media, mientras que la mediana casi no se ve afectada por él."

explicacion: |
  La mediana sólo depende del ORDEN, no del valor exacto de cada
  dato — un valor extremo sigue siendo 'el más alto', sin importar
  cuán extremo sea.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["media", "mediana", "aplicacion"]

enunciado: "¿Por qué a veces se prefiere hablar del sueldo MEDIANO de un país en vez del sueldo PROMEDIO (media)?"
tipo: mc
opciones_explicitas:
  - "Porque unos pocos sueldos extremadamente altos pueden subir mucho la media, sin representar el sueldo 'típico' de la mayoría"
  - "Porque la mediana siempre da un número más alto que la media"
  - "Porque la media no se puede calcular con sueldos"
respuesta: "Porque unos pocos sueldos extremadamente altos pueden subir mucho la media, sin representar el sueldo 'típico' de la mayoría"

explicacion: |
  Es el ejemplo clásico de por qué elegir bien la medida importa —
  desarrollado en detalle en `../cual-miente-y-cuando/`.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["mediana", "problema"]

variables:
  paso: uno_de([2, 3, 5])
  inicio: random(1, 10)
  datos: [inicio, inicio + paso, inicio + paso * 2, inicio + paso * 3, inicio + paso * 4, inicio + paso * 5, inicio + paso * 6]

respuesta: mediana(datos)
tipo: input

enunciado: "Estos 7 valores ya están ordenados de menor a mayor: {inicio}, {inicio + paso}, {inicio + paso * 2}, {inicio + paso * 3}, {inicio + paso * 4}, {inicio + paso * 5}, {inicio + paso * 6}. ¿Cuál es la mediana?"

pasos:
  - "Con 7 valores ya ordenados, la mediana es el 4° valor: {mediana(datos)}"

explicacion: |
  Ya estando ordenados, sólo hace falta contar hasta el valor central.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana"]

enunciado: "¿Cuál de las tres medidas de tendencia central es más resistente a la presencia de valores atípicos?"
tipo: mc
opciones_explicitas:
  - "La mediana"
  - "La media"
  - "Las tres son igual de sensibles a los valores atípicos"
respuesta: "La mediana"

explicacion: |
  Sólo depende del orden de los datos, no de cuán extremo sea el
  valor más alto o más bajo.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando hay una cantidad par de datos, la mediana (el promedio de los dos centrales) puede ser un valor que no está entre los datos originales."

explicacion: |
  Por ejemplo, con {2, 4, 6, 8}, la mediana es (4+6)/2=5, que no
  aparece en la lista original.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  centro: random(20, 50)
  paso: uno_de([3, 5, 8])
  datos: [centro - paso * 2, centro - paso, centro, centro + paso, centro + paso * 2]

respuesta: promedio(datos)
tipo: input

enunciado: "Con los valores {centro - paso * 2}, {centro - paso}, {centro}, {centro + paso}, {centro + paso * 2} (equidistantes entre sí), ¿cuál es la media?"

pasos:
  - "Al ser equidistantes alrededor de {centro}, la media coincide exactamente con la mediana: {promedio(datos)}"

explicacion: |
  Cuando los datos son simétricos alrededor de un valor central, media
  y mediana coinciden.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["moda", "problema"]

variables:
  talle_popular: uno_de([38, 40, 42])
  otro1: uno_de([36, 44])
  otro2: uno_de([36, 44])
  datos: [talle_popular, talle_popular, talle_popular, talle_popular, otro1, otro2]

respuesta: talle_popular
tipo: input

enunciado: "Una tienda vendió estos talles de zapatillas: {talle_popular}, {talle_popular}, {talle_popular}, {talle_popular}, {otro1}, {otro2}. ¿Cuál es el talle moda (el más vendido)?"

pasos:
  - "{talle_popular} se repite 4 veces, más que cualquier otro talle."

explicacion: |
  La moda es especialmente útil para decidir qué talle pedir más stock.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["media", "mediana", "moda"]

respuesta: verdadero
tipo: vf

enunciado: "Ninguna de las tres medidas (media, mediana, moda) es 'la correcta' en todos los casos — cuál conviene usar depende de qué pregunta se quiere responder y de cómo están distribuidos los datos."

explicacion: |
  Por eso el próximo módulo se llama justamente 'Cuál miente y
  cuándo'.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "intermedio"
  tags: ["media", "problema"]

variables:
  a: random(50, 70)
  b: random(50, 70)
  c: random(50, 70)
  datos: [a, b, c]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Tres exámenes de un alumno dieron estas notas: {a}, {b}, {c} (sobre 100). ¿Cuál es la nota media?"

pasos:
  - "({a}+{b}+{c}) / 3 = {redondear(promedio(datos), 2)}"

explicacion: |
  Con valores parecidos entre sí (sin atípicos), la media representa
  bien el rendimiento típico.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["moda"]

respuesta: verdadero
tipo: vf

enunciado: "La moda es la única de las tres medidas que tiene sentido calcular incluso con datos que no son números (como colores favoritos o marcas de auto más elegidas)."

explicacion: |
  No se puede sumar ni ordenar "rojo" y "azul", pero sí se puede
  contar cuál aparece más veces.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

variables:
  valor: random(10, 30)
  extra1: random(1, 9)
  extra2: random(31, 40)

respuesta: valor
tipo: input

enunciado: "Estos 4 valores son: {extra1}, {valor}, {valor}, {extra2}. ¿Cuál es la mediana?"

pasos:
  - "Ordenados: {extra1}, {valor}, {valor}, {extra2}. Los dos centrales son {valor} y {valor}."
  - "Mediana = ({valor}+{valor})/2 = {valor}"

explicacion: |
  Cuando los dos valores centrales son iguales, la mediana coincide
  exactamente con ese valor repetido.
```

```
metadata:
  materia: "matematicas"
  tema: "media_mediana_y_moda"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirven la media, la mediana y la moda?"
tipo: mc
opciones_explicitas:
  - "Para resumir un conjunto de datos en un solo número que represente su 'centro', cada una desde un criterio distinto"
  - "Sólo sirven para calcular notas escolares"
  - "Las tres dan siempre exactamente el mismo resultado"
respuesta: "Para resumir un conjunto de datos en un solo número que represente su 'centro', cada una desde un criterio distinto"

explicacion: |
  Es la base directa de `../cual-miente-y-cuando/` y de
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```

## Sección: muestreo-y-sesgo (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre población y muestra?"
tipo: mc
opciones_explicitas:
  - "La población es el grupo completo que interesa estudiar; la muestra es el subconjunto más chico que realmente se mide"
  - "Son dos nombres distintos para exactamente lo mismo"
  - "La muestra siempre es más grande que la población"
respuesta: "La población es el grupo completo que interesa estudiar; la muestra es el subconjunto más chico que realmente se mide"

explicacion: |
  Se estudia la muestra para sacar conclusiones sobre la población
  completa.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo"]

enunciado: "¿Por qué casi siempre se estudia una muestra en vez de censar a toda la población?"
tipo: mc
opciones_explicitas:
  - "Porque censar a toda la población suele ser demasiado caro, lento o directamente imposible"
  - "Porque las muestras siempre dan resultados más precisos que censar a toda la población"
  - "Porque está prohibido por ley censar poblaciones completas"
respuesta: "Porque censar a toda la población suele ser demasiado caro, lento o directamente imposible"

explicacion: |
  Un censo completo (como el censo nacional) es la excepción, no la
  regla, justamente por su costo y complejidad.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Qué significa que una muestra sea 'representativa'?"
tipo: mc
opciones_explicitas:
  - "Que sus características (promedios, proporciones, dispersión) se parecen a las de la población completa"
  - "Que incluye a absolutamente todos los miembros de la población"
  - "Que fue elegida por el investigador a mano, uno por uno"
respuesta: "Que sus características (promedios, proporciones, dispersión) se parecen a las de la población completa"

explicacion: |
  Es lo que permite generalizar conclusiones de la muestra hacia toda
  la población.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿Qué caracteriza al muestreo aleatorio simple?"
tipo: mc
opciones_explicitas:
  - "Cada elemento de la población tiene exactamente la misma probabilidad de ser elegido"
  - "Se eligen sólo los elementos más fáciles de conseguir"
  - "Se elige un elemento cada 10 posiciones de una lista"
respuesta: "Cada elemento de la población tiene exactamente la misma probabilidad de ser elegido"

explicacion: |
  Es el ideal teórico, como sortear nombres de un bolillero.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿En qué consiste el muestreo estratificado?"
tipo: mc
opciones_explicitas:
  - "Se divide la población en subgrupos según alguna característica relevante, y se muestrea de cada subgrupo en proporción a su tamaño"
  - "Se toman sólo los elementos más accesibles, sin ningún criterio adicional"
  - "Se sortea un único elemento y se asume que representa a toda la población"
respuesta: "Se divide la población en subgrupos según alguna característica relevante, y se muestrea de cada subgrupo en proporción a su tamaño"

explicacion: |
  Garantiza que ningún subgrupo quede sub- o sobre-representado por
  puro azar.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo"]

respuesta: verdadero
tipo: vf

enunciado: "En el muestreo estratificado, la población se divide primero en subgrupos (estratos) antes de elegir a quién muestrear de cada uno."

explicacion: |
  Por ejemplo, dividir por provincia o por curso antes de sortear
  dentro de cada grupo.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["sesgo", "vocabulario"]

enunciado: "¿Qué significa que una muestra esté 'sesgada'?"
tipo: mc
opciones_explicitas:
  - "Que el método usado para elegirla favorece sistemáticamente a cierto tipo de casos, así que no representa a la población real"
  - "Que tiene muy pocos elementos"
  - "Que se recolectó demasiado rápido"
respuesta: "Que el método usado para elegirla favorece sistemáticamente a cierto tipo de casos, así que no representa a la población real"

explicacion: |
  El sesgo es un problema del MÉTODO de selección, no del tamaño de
  la muestra.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "aplicacion"]

enunciado: "Un estudio encuesta a personas en la calle un martes a las 11 de la mañana, para estimar la opinión de 'toda la población adulta' sobre un tema. ¿Qué problema tiene este método?"
tipo: mc
opciones_explicitas:
  - "Sesgo de selección: excluye sistemáticamente a quienes están trabajando en ese horario, un grupo grande de la población"
  - "Ningún problema, porque la calle es un lugar público abierto a cualquiera"
  - "El único problema es que la muestra es demasiado grande"
respuesta: "Sesgo de selección: excluye sistemáticamente a quienes están trabajando en ese horario, un grupo grande de la población"

explicacion: |
  El horario y el lugar de la encuesta ya determinan qué tipo de
  personas tienen chance de ser encuestadas.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "vocabulario"]

enunciado: "¿Qué es el sesgo del voluntario?"
tipo: mc
opciones_explicitas:
  - "Que quienes se ofrecen espontáneamente a participar de un estudio suelen tener características distintas del resto de la población"
  - "Que los voluntarios siempre mienten en sus respuestas"
  - "Que un estudio con voluntarios nunca puede tener sesgo"
respuesta: "Que quienes se ofrecen espontáneamente a participar de un estudio suelen tener características distintas del resto de la población"

explicacion: |
  Por ejemplo, más motivación, más tiempo libre, u opiniones más
  extremas que el promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo", "aplicacion"]

enunciado: "Una encuesta de 1936, con más de 2 millones de respuestas, predijo mal el resultado de una elección presidencial porque armó su lista de encuestados a partir de guías telefónicas y registros de autos (en plena Depresión, bienes de clase media-alta). ¿Qué enseña este caso?"
tipo: mc
opciones_explicitas:
  - "Que una muestra gigante sigue estando sesgada si el método de selección está sesgado — el tamaño no arregla el sesgo"
  - "Que las encuestas con más de un millón de respuestas nunca pueden estar equivocadas"
  - "Que las guías telefónicas eran, en esa época, la mejor forma posible de armar una muestra"
respuesta: "Que una muestra gigante sigue estando sesgada si el método de selección está sesgado — el tamaño no arregla el sesgo"

explicacion: |
  Es el ejemplo histórico estándar de sesgo de selección: el tamaño
  de la muestra (2 millones) no compensó que el método excluía
  sistemáticamente a buena parte del electorado real.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo"]

respuesta: verdadero
tipo: vf

enunciado: "Una muestra grande no garantiza que sea representativa, si el método usado para elegirla está sesgado."

explicacion: |
  Agrandar una muestra reduce el error por azar, pero no corrige un
  sesgo sistemático en cómo se la construyó.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "completar"]

tipo: completar
enunciado: "Completá: un método de muestreo que le da a cada elemento de la población la misma probabilidad de ser elegido se llama muestreo aleatorio ___."
respuestas_validas:
  - "simple"

explicacion: |
  Es el ideal teórico, aunque en la práctica no siempre se puede
  armar la lista completa de la población para sortear.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["muestreo", "problema"]

variables:
  poblacion_total: 1000
  poblacion_estrato: uno_de([200, 250, 400])
  muestra_total: 100

respuesta: redondear(muestra_total * (poblacion_estrato / poblacion_total), 0)
tipo: input

enunciado: "Una escuela tiene {poblacion_total} alumnos en total, de los cuales {poblacion_estrato} son de un curso particular. Si se arma una muestra estratificada de {muestra_total} alumnos, ¿cuántos deberían salir de ese curso, en proporción a su tamaño?"

pasos:
  - "Proporción del estrato = {poblacion_estrato}/{poblacion_total}"
  - "Cantidad de la muestra = {muestra_total} × ({poblacion_estrato}/{poblacion_total}) = {redondear(muestra_total * (poblacion_estrato / poblacion_total), 0)}"

explicacion: |
  El muestreo estratificado respeta el peso real de cada subgrupo
  dentro de la población.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "vocabulario"]

enunciado: "¿En qué consiste el muestreo sistemático?"
tipo: mc
opciones_explicitas:
  - "Se elige un elemento cada k posiciones de una lista ordenada (por ejemplo, cada 10° cliente que entra a un local)"
  - "Se dividen los elementos en subgrupos según alguna característica"
  - "Se eligen sólo los elementos que están más a mano"
respuesta: "Se elige un elemento cada k posiciones de una lista ordenada (por ejemplo, cada 10° cliente que entra a un local)"

explicacion: |
  Es más fácil de aplicar que el aleatorio simple puro, si ya existe
  una lista ordenada de la población.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["muestreo", "sesgo", "vocabulario"]

enunciado: "¿Qué caracteriza al muestreo por conveniencia, y por qué es el más riesgoso de los cuatro?"
tipo: mc
opciones_explicitas:
  - "Se toma lo que está más a mano (los primeros que responden, quienes pasan por la puerta) — es el más fácil y barato, pero también el que más riesgo tiene de terminar sesgado"
  - "Se sortea entre absolutamente todos los elementos de la población con la misma probabilidad, por eso nunca tiene sesgo"
  - "Es el método más costoso de todos, pero el más preciso"
respuesta: "Se toma lo que está más a mano (los primeros que responden, quienes pasan por la puerta) — es el más fácil y barato, pero también el que más riesgo tiene de terminar sesgado"

explicacion: |
  La facilidad de armarlo es, justamente, lo que suele introducir
  sesgo de selección.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["sesgo", "muestreo"]

respuesta: verdadero
tipo: vf

enunciado: "Aumentar el tamaño de una muestra reduce el error debido al azar, pero NO corrige un sesgo sistemático que venga del método usado para elegirla."

explicacion: |
  Son dos problemas distintos: el error por azar se reduce con más
  datos; el sesgo es un problema del método, no de la cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "avanzado"
  tags: ["muestreo", "normal"]

enunciado: "Si se toman muchas muestras distintas de la misma población y se calcula el promedio de cada una, ¿cómo tienden a distribuirse esos promedios?"
tipo: mc
opciones_explicitas:
  - "Tienden a distribuirse en forma de campana (aproximadamente normal), sin importar cómo se distribuya la población original"
  - "Siempre dan exactamente el mismo valor, sin ninguna variación"
  - "Se distribuyen de forma completamente impredecible, sin ningún patrón"
respuesta: "Tienden a distribuirse en forma de campana (aproximadamente normal), sin importar cómo se distribuya la población original"

explicacion: |
  Es la idea que se formaliza en `../teorema-central-del-limite/`, el
  módulo que sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["muestreo", "aplicacion"]

enunciado: "¿Por qué las encuestadoras políticas serias invierten tanto esfuerzo en el método de muestreo (y no sólo en juntar muchas respuestas)?"
tipo: mc
opciones_explicitas:
  - "Porque una muestra sesgada, aunque sea grande, produce una estimación torcida de la opinión pública real — el método importa más que la cantidad"
  - "Porque la ley obliga a usar un método de muestreo específico en todas las encuestas"
  - "Porque cuantas más respuestas se junten, siempre es mejor sin importar cómo se consiguieron"
respuesta: "Porque una muestra sesgada, aunque sea grande, produce una estimación torcida de la opinión pública real — el método importa más que la cantidad"

explicacion: |
  Es la misma lección del caso histórico de 1936, aplicada a encuestas
  actuales.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "intermedio"
  tags: ["sesgo", "problema"]

enunciado: "Una encuesta se publica únicamente en una app de noticias, y se pide a quien la vea que la responda si quiere. ¿Qué tipo de sesgo tiene más probabilidad de aparecer en los resultados?"
tipo: mc
opciones_explicitas:
  - "Sesgo de selección (sólo llega a quien usa esa app) combinado con sesgo del voluntario (sólo responde quien elige hacerlo)"
  - "Ningún sesgo, porque cualquiera con la app puede responder si quiere"
  - "Sólo hay sesgo si la encuesta tiene menos de 100 respuestas"
respuesta: "Sesgo de selección (sólo llega a quien usa esa app) combinado con sesgo del voluntario (sólo responde quien elige hacerlo)"

explicacion: |
  Quien no usa esa app queda afuera de entrada, y entre quienes sí la
  usan, sólo responde quien decide hacerlo — dos filtros, dos sesgos.
```

```
metadata:
  materia: "matematicas"
  tema: "muestreo_y_sesgo"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender los tipos de muestreo y de sesgo?"
tipo: mc
opciones_explicitas:
  - "Para poder evaluar si una muestra realmente representa a la población que dice representar, antes de confiar en sus conclusiones"
  - "Sólo sirve para diseñar encuestas políticas"
  - "Sólo importa si la población es muy grande"
respuesta: "Para poder evaluar si una muestra realmente representa a la población que dice representar, antes de confiar en sus conclusiones"

explicacion: |
  Es el fundamento sobre el que se construyen
  `../teorema-central-del-limite/`, `../intervalo-de-confianza/` y
  `../test-de-hipotesis/`.
```

## Sección: multiplicacion (40 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  n: random(1, 10)

respuesta: 2 * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 2 × {n}?"

explicacion: |
  La tabla del 2 es sumar 2 tantas veces como indique el otro factor.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  n: random(1, 10)

respuesta: 5 * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 5 × {n}?"

explicacion: |
  La tabla del 5 siempre termina en 0 o en 5: sirve para verificar el
  resultado a simple vista.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  n: random(1, 10)

respuesta: 9 * n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es 9 × {n}?"

explicacion: |
  La tabla del 9 tiene un patrón: la cifra de las decenas del resultado es
  siempre uno menos que el otro factor.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "tablas"]

variables:
  a: random(2, 9)
  b: random(2, 9)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  Es la tabla de multiplicar de {a} (o de {b}), en el lugar que le
  corresponde a {b} (o a {a}).
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "sin_llevar"]

variables:
  d: random(1, 4)
  u: random(0, 4)
  m: 2
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

pasos:
  - "Unidades: {u} × {m} = {u * m}. Decenas: {d} × {m} = {d * m}."

explicacion: |
  Sin llevar, se multiplica cada cifra del número por el factor y se
  colocan los resultados en su columna, sin ajustar nada entre ellas.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "sin_llevar"]

variables:
  d: random(1, 3)
  u: random(0, 3)
  m: 3
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

explicacion: |
  Mismo procedimiento con otro factor: cada cifra se multiplica por
  separado, sin llevar.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "con_llevada"]

variables:
  d: random(1, 9)
  u: random(4, 9)
  m: random(4, 9)
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

pasos:
  - "Unidades: {u} × {m} = {u * m} → se escribe {(u * m) - (floor((u * m) / 10) * 10)} y se lleva {floor((u * m) / 10)} a las decenas"

explicacion: |
  Cuando un producto parcial da 10 o más, se escribe sólo la cifra de las
  unidades de ese resultado y se lleva el resto a la columna siguiente,
  donde se suma al próximo producto.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "con_llevada", "problema"]

variables:
  d: random(1, 9)
  u: random(4, 9)
  m: random(4, 9)
  a: d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "Cada caja tiene {a} lápices. ¿Cuántos lápices hay en {m} cajas?"

explicacion: |
  El planteo es el mismo que una multiplicación numérica; el contexto sólo
  dice qué representa cada factor.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "con_llevada"]

variables:
  c: random(1, 9)
  d: random(0, 9)
  u: random(4, 9)
  m: random(4, 9)
  a: c * 100 + d * 10 + u

respuesta: a * m
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {m}?"

explicacion: |
  Con más cifras el procedimiento es el mismo: se multiplica cada cifra por
  el factor, llevando el sobrante de cada columna a la siguiente.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "columna_completa"]

variables:
  a: random(11, 49)
  b: random(11, 49)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

pasos:
  - "Se multiplica {a} por las unidades de {b}, después por las decenas de {b} (corriendo un lugar), y se suman los dos productos parciales"

explicacion: |
  Multiplicar por un número de 2 cifras es repetir el algoritmo una vez por
  cada cifra del segundo factor, y sumar los productos parciales al final.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "columna_completa"]

variables:
  a: random(50, 99)
  b: random(11, 30)

respuesta: a * b
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b}?"

explicacion: |
  El procedimiento no cambia con números más grandes: productos parciales,
  uno por cada cifra del segundo factor, sumados al final.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "potencias_de_10"]

variables:
  a: random(1, 999)
  potencia: uno_de([10, 100, 1000])

respuesta: a * potencia
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {potencia}?"

explicacion: |
  Multiplicar por una potencia de 10 es agregar al final tantos ceros como
  tenga esa potencia.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "potencias_de_10"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar un número entero por 100 es agregarle dos ceros al final."

explicacion: |
  Cada cero de la potencia de 10 corre las cifras un lugar más hacia la
  izquierda en el valor posicional.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 90)
  b: random(2, 90)

restricciones:
  - a != b

respuesta: a * b
tipo: mc
opciones_explicitas:
  - b * a
  - a * b + 1
  - a * b - 1

enunciado: "¿Cuál de estas opciones da el mismo resultado que {a} × {b}?"

explicacion: |
  Cambiar el orden de los factores no cambia el resultado (propiedad
  conmutativa): {a} × {b} es exactamente lo mismo que {b} × {a}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

respuesta: verdadero
tipo: vf

enunciado: "Cambiar el orden de los factores no cambia el resultado de una multiplicación."

explicacion: |
  Es la propiedad conmutativa: a × b siempre da lo mismo que b × a.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  c: random(2, 9)

respuesta: ((a * b) * c == a * (b * c))
tipo: vf

enunciado: "¿Es cierto que ({a} × {b}) × {c} da lo mismo que {a} × ({b} × {c})?"

explicacion: |
  Es la propiedad asociativa: no importa qué par de factores se
  multiplique primero, el resultado final es siempre el mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades", "calculo_mental"]

variables:
  a: random(2, 9)
  b: 5
  c: random(2, 9)

respuesta: a * b * c
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × {b} × {c}?"

pasos:
  - "Conviene multiplicar primero por el 5, que da un número redondo con un par: {b} × {c} = {b * c}, y después × {a}: {a} × {b * c} = {a * b * c}"

explicacion: |
  La propiedad asociativa permite elegir qué par multiplicar primero:
  agrupar los números "más fáciles" ahorra trabajo mental.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(1, 999)

respuesta: a
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × 1?"

explicacion: |
  Multiplicar por 1 no cambia nada: el resultado es siempre el mismo
  número con el que se empezó.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(1, 999)

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuánto es {a} × 0?"

explicacion: |
  Multiplicar por 0 siempre da 0, sin importar qué tan grande sea el otro
  factor.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "propiedades"]

respuesta: falso
tipo: vf

enunciado: "Multiplicar por 0 da como resultado el mismo número, igual que multiplicar por 1."

explicacion: |
  Son propiedades distintas: multiplicar por 1 no cambia el número
  (elemento neutro), pero multiplicar por 0 siempre da 0 (elemento
  absorbente).
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 9)
  b: random(1, 40)
  c: random(1, 40)

respuesta: (a * (b + c) == a * b + a * c)
tipo: vf

enunciado: "¿Es cierto que {a} × ({b} + {c}) da lo mismo que {a} × {b} + {a} × {c}?"

explicacion: |
  Es la propiedad distributiva: repartir un factor entre una suma da lo
  mismo que multiplicar cada término por separado y sumar después.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades", "calculo_mental"]

variables:
  a: random(2, 9)
  b: random(1, 8) * 10
  c: random(1, 9)

respuesta: a * (b + c)
tipo: input
tolerancia_abs: 0

enunciado: "Usá la propiedad distributiva para calcular {a} × ({b} + {c})."

pasos:
  - "{a} × {b} + {a} × {c} = {a * b} + {a * c} = {a * b + a * c}"

explicacion: |
  Separar en una parte "redonda" ({b}) y una chica ({c}) hace que la
  cuenta se pueda resolver mentalmente por partes.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "propiedades"]

variables:
  a: random(2, 9)
  b: random(1, 20)
  c: random(1, 20)

respuesta: a * b + a * c
tipo: mc
opciones_explicitas:
  - a * (b + c)
  - a * b + c
  - a + b * c

enunciado: "¿Cuál de estas expresiones es igual a {a} × {b} + {a} × {c}?"

explicacion: |
  Es la propiedad distributiva mirada al revés: la suma de dos productos
  con el mismo factor se puede escribir como ese factor por la suma de los
  otros dos.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "vocabulario"]

enunciado: "En la multiplicación 4 × 5 = 20, ¿cómo se llama el 20?"
tipo: mc
opciones_explicitas:
  - "Producto"
  - "Factor"
  - "Cociente"
respuesta: "Producto"

explicacion: |
  El resultado de una multiplicación se llama producto; los números que se
  multiplican son los factores.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "vocabulario"]

enunciado: "En la multiplicación 4 × 5 = 20, ¿cómo se llaman el 4 y el 5?"
tipo: mc
opciones_explicitas:
  - "Factores"
  - "Productos"
  - "Divisores"
respuesta: "Factores"

explicacion: |
  Los números que se multiplican se llaman factores; el resultado es el
  producto.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "estimacion"]

variables:
  a: random(11, 88)
  b: random(2, 9)
  ra: redondear(a / 10, 0) * 10

respuesta: ra * b
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} a la decena más cercana y multiplicalo por {b}. ¿Cuánto da la estimación?"

pasos:
  - "{a} redondea a {ra}. {ra} × {b} = {ra * b}"

explicacion: |
  Estimar una multiplicación es redondear uno de los factores antes de
  multiplicar, para tener una idea rápida del resultado.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "estimacion"]

variables:
  a: random(11, 88)
  b: random(11, 88)
  ra: redondear(a / 10, 0) * 10
  rb: redondear(b / 10, 0) * 10

respuesta: ra * rb
tipo: input
tolerancia_abs: 0

enunciado: "Redondeá {a} y {b} a la decena más cercana y multiplicá esos redondeos. ¿Cuánto da la estimación?"

explicacion: |
  Redondear los dos factores antes de multiplicar da una idea rápida de la
  magnitud del resultado, sin hacer la cuenta exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "verificacion"]

variables:
  a: random(2, 9)
  b: random(2, 9)
  correcto: a * b
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta multiplicación? {a} × {b} = {mostrado}"

explicacion: |
  Para verificar una multiplicación hay que volver a calcularla, no
  alcanza con que el número parezca razonable.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "verificacion"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  m: random(2, 9)
  a: d * 10 + u
  correcto: a * m
  error: uno_de([0, 0, 0, 1, -1, 10])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta multiplicación? {a} × {m} = {mostrado}"

explicacion: |
  Un error típico es olvidarse de sumar la llevada de un producto parcial
  al siguiente: conviene revisar columna por columna.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "avanzado"
  tags: ["multiplicacion", "verificacion"]

variables:
  a: random(11, 60)
  b: random(11, 30)
  correcto: a * b
  error: uno_de([0, 0, 0, 1, -1, 100])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien resuelta esta multiplicación? {a} × {b} = {mostrado}"

explicacion: |
  Con dos cifras en cada factor hay más productos parciales donde puede
  haber un error de cálculo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "problema"]

variables:
  filas: random(3, 12)
  columnas: random(3, 12)

respuesta: filas * columnas
tipo: input
tolerancia_abs: 0

enunciado: "Un salón tiene {filas} filas de sillas, con {columnas} sillas cada fila. ¿Cuántas sillas hay en total?"

explicacion: |
  Contar un arreglo en filas y columnas es multiplicar la cantidad de filas
  por la cantidad de columnas.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "problema"]

variables:
  grupos: random(2, 10)
  n: random(3, 15)

respuesta: grupos * n
tipo: input
tolerancia_abs: 0

enunciado: "Hay {grupos} grupos de {n} alumnos cada uno. ¿Cuántos alumnos hay en total?"

explicacion: |
  Varios grupos con la misma cantidad de elementos es el caso típico de
  multiplicación: grupos × elementos por grupo.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "problema"]

variables:
  precio: random(50, 500)
  cantidad: random(2, 9)

respuesta: precio * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Cada entrada cuesta ${precio}. ¿Cuánto cuestan {cantidad} entradas?"

explicacion: |
  El costo total de varias unidades iguales es el precio de una, repetido
  tantas veces como unidades se compren.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "problema"]

variables:
  n: random(2, 10)
  dias: random(3, 20)

respuesta: n * dias
tipo: input
tolerancia_abs: 0

enunciado: "Si tomás {n} vasos de agua por día, ¿cuántos vasos tomás en {dias} días?"

explicacion: |
  Repetir la misma cantidad todos los días es multiplicar esa cantidad por
  la cantidad de días.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "termino_faltante"]

variables:
  a: random(2, 9)
  x: random(2, 20)
  total: a * x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Por qué número hay que multiplicar {a} para obtener {total}?"

pasos:
  - "{total} ÷ {a} = {total / a}"

explicacion: |
  Buscar el factor que falta es, en realidad, hacer la división entre el
  producto y el factor conocido.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "termino_faltante"]

variables:
  a: random(3, 12)
  x: random(3, 15)
  total: a * x

respuesta: x
tipo: input
tolerancia_abs: 0

enunciado: "¿Por qué número hay que multiplicar {a} para obtener {total}?"

explicacion: |
  El procedimiento es el mismo con números más grandes: dividir el
  producto por el factor que ya se conoce.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "intermedio"
  tags: ["multiplicacion", "termino_faltante"]

variables:
  a: random(2, 9)
  x: random(2, 12)
  total: a * x

tipo: completar
enunciado: "Completá: {a} × ___ = {total}."
respuestas_validas:
  - x

explicacion: |
  El número que falta es el que, multiplicado por {a}, da exactamente
  {total}.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "algoritmo_columna"]

variables:
  d: random(1, 9)
  u: random(0, 9)
  m: random(2, 9)
  a: d * 10 + u
  producto: a * m

tipo: completar
enunciado: "Completá el resultado: {a} × {m} = ___."
respuestas_validas:
  - producto

explicacion: |
  Se resuelve la multiplicación en columna, cifra por cifra, y se completa
  con el resultado final.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "orden"]

tipo: ordenar
enunciado: "Ordená estos productos de menor a mayor resultado (sin calcularlos todos de una)."
opciones_explicitas:
  - "3 × 4"
  - "2 × 5"
  - "6 × 6"
  - "4 × 4"
respuesta_orden: ["2 × 5", "3 × 4", "4 × 4", "6 × 6"]

explicacion: |
  2×5=10, 3×4=12, 4×4=16, 6×6=36: hay que resolver cada producto antes de
  poder ordenarlos.
```

```
metadata:
  materia: "matematicas"
  tema: "multiplicacion"
  nivel: "basico"
  tags: ["multiplicacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Multiplicar es sumar el mismo número varias veces."

explicacion: |
  Es la idea central de la multiplicación: 4 × 3 es lo mismo que
  4 + 4 + 4.
```

## Sección: notacion-cientifica (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

enunciado: "¿Cómo se escribe un número en notación científica?"
tipo: mc
opciones_explicitas:
  - "a × 10ⁿ, con a entre 1 y 10"
  - "Cualquier número multiplicado por 10"
  - "Un número con muchos ceros"
respuesta: "a × 10ⁿ, con a entre 1 y 10"

explicacion: |
  El coeficiente a siempre tiene que estar entre 1 y 10 (1 ≤ a < 10).
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el coeficiente (la parte \"a\")?"

explicacion: |
  Se corre la coma hasta que quede un solo dígito antes de ella: ese
  número (con su parte decimal) es el coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el exponente de 10?"

explicacion: |
  El exponente es la cantidad de lugares que se corrió la coma hacia la
  izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 6)
  numero: (a_entero + a_decimal / 10) / (10 ^ n)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el coeficiente?"

explicacion: |
  Igual que con números grandes: se corre la coma hasta dejar un solo
  dígito antes de ella.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 6)
  numero: (a_entero + a_decimal / 10) / (10 ^ n)

respuesta: -n
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir {numero} en notación científica, ¿cuál es el exponente de 10?"

explicacion: |
  Con números menores a 1, el exponente da negativo: la coma se corrió
  hacia la derecha.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a: random(1, 9)
  n: random(3, 7)

respuesta: a * (10 ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "¿A qué número equivale {a} × 10^{n}?"

pasos:
  - "{a} × 10^{n} corre la coma {n} lugares a la derecha: {a * (10 ^ n)}"

explicacion: |
  Un exponente positivo corre la coma hacia la derecha, agregando ceros.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a: random(1, 9)
  n: random(2, 5)

respuesta: a / (10 ^ n)
tipo: input
tolerancia_abs: 0.00001

enunciado: "¿A qué número equivale {a} × 10^(-{n})?"

pasos:
  - "Un exponente negativo corre la coma {n} lugares a la izquierda: {a / (10 ^ n)}"

explicacion: |
  Un exponente negativo corre la coma hacia la izquierda.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En la notación científica a × 10ⁿ, el coeficiente \"a\" siempre tiene que cumplir 1 ≤ a < 10."

explicacion: |
  Es la regla que define la forma correcta: ni con más de un dígito antes
  de la coma, ni con la coma antes del primer dígito.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "35 × 10⁶ está bien escrito como notación científica."

explicacion: |
  El coeficiente 35 es mayor o igual a 10: no cumple la regla. La forma
  correcta sería 3,5 × 10⁷.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  a1: random(1, 9)
  n1: random(2, 8)
  a2: random(1, 9)
  n2: random(2, 8)

restricciones:
  - n1 != n2

respuesta: (n1 > n2)
tipo: vf

enunciado: "¿Es {a1} × 10^{n1} mayor que {a2} × 10^{n2}?"

explicacion: |
  Con exponentes distintos, alcanza con comparar los exponentes: gana el
  mayor, sin importar el coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  n: random(2, 8)
  a1: random(1, 8)
  a2: a1 + 1

respuesta: falso
tipo: vf

enunciado: "¿Es {a1} × 10^{n} mayor que {a2} × 10^{n}?"

explicacion: |
  Con el mismo exponente, se compara el coeficiente: {a1} es menor que
  {a2}.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(4, 8)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)
  correcto: a_entero + a_decimal / 10

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - correcto * 10
  - correcto / 10

enunciado: "¿Cuál es el coeficiente correcto para escribir {numero} en notación científica?"

explicacion: |
  Las otras opciones no cumplen la regla de que el coeficiente esté entre
  1 y 10.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "verificacion"]

variables:
  a: random(1, 9)
  n: random(3, 7)
  correcto: a * (10 ^ n)
  error: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien convertido esto? {a} × 10^{n} = {mostrado}"

explicacion: |
  Se vuelve a calcular corriendo la coma y se compara.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica"]

variables:
  a: random(1, 9)
  n: random(3, 7)

tipo: completar
enunciado: "Completá: {a} × 10^___ = {a * (10 ^ n)}."
respuestas_validas:
  - n

explicacion: |
  Se cuenta cuántos lugares hay que correr la coma para llegar de {a} al
  número completo.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "problema"]

variables:
  a: random(1, 9)
  n: random(6, 9)

respuesta: a * (10 ^ n)
tipo: input
tolerancia_abs: 0

enunciado: "La distancia a una estrella es {a} × 10^{n} km. ¿Cuántos km son, escritos en forma normal?"

explicacion: |
  Las distancias astronómicas son un caso típico donde conviene la
  notación científica.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "avanzado"
  tags: ["notacion_cientifica", "problema"]

variables:
  a: random(1, 9)
  n: random(6, 9)

respuesta: a / (10 ^ n)
tipo: input
tolerancia_abs: 0.000000001

enunciado: "El diámetro de una célula es {a} × 10^(-{n}) metros. ¿Cuántos metros son, escritos en forma normal?"

explicacion: |
  Las medidas microscópicas también se escriben cómodas en notación
  científica, con exponente negativo.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica"]

variables:
  n: random(2, 9)

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ceros tiene 10^{n} escrito en forma normal (después del 1)?"

explicacion: |
  10 elevado a n se escribe como un 1 seguido de n ceros.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "0,35 × 10⁸ está bien escrito como notación científica."

explicacion: |
  El coeficiente 0,35 es menor a 1: no cumple la regla. La forma correcta
  sería 3,5 × 10⁷.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "conversion"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)
  n: random(3, 7)
  numero: (a_entero + a_decimal / 10) * (10 ^ n)
  a: a_entero + a_decimal / 10

respuesta: verdadero
tipo: vf

enunciado: "{numero} en notación científica es {a} × 10^{n}. ¿Es cierto que convertir {a} × 10^{n} de vuelta a forma normal da otra vez {numero}?"

explicacion: |
  Convertir y volver a convertir tiene que devolver el número original:
  son dos formas de escribir la misma cantidad.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de menor a mayor."
opciones_explicitas:
  - "5 × 10^4"
  - "2 × 10^6"
  - "9 × 10^3"
  - "1 × 10^5"
respuesta_orden: ["9 × 10^3", "5 × 10^4", "1 × 10^5", "2 × 10^6"]

explicacion: |
  Primero se compara el exponente; entre exponentes iguales (acá no hay
  ninguno repetido), recién se compararía el coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "comparacion"]

variables:
  a1: random(1, 9)
  n1: random(2, 8)
  a2: random(1, 9)
  n2: random(2, 8)
  a3: random(1, 9)
  n3: random(2, 8)

restricciones:
  - n1 != n2
  - n1 != n3
  - n2 != n3

respuesta: max(n1, n2, n3)
tipo: mc
opciones_explicitas:
  - n1
  - n2
  - n3

enunciado: "Entre {a1}×10^{n1}, {a2}×10^{n2} y {a3}×10^{n3}, ¿cuál exponente corresponde al número mayor?"

explicacion: |
  Con exponentes todos distintos, gana el mayor exponente sin importar el
  coeficiente.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica"]

variables:
  n: random(3, 9)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Al escribir 10^{n} (un 1 seguido de {n} ceros) en notación científica, ¿cuál es el coeficiente?"

explicacion: |
  Cuando el número ya es una potencia exacta de 10, el coeficiente es 1.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "problema"]

variables:
  a_entero: random(1, 9)
  a_decimal: random(0, 9)

respuesta: a_entero + a_decimal / 10
tipo: input
tolerancia_abs: 0.01

enunciado: "La población mundial es aproximadamente {a_entero},{a_decimal} × 10⁹ personas. ¿Cuál es el coeficiente de esa notación?"

explicacion: |
  El coeficiente es, directamente, la parte antes de la potencia de 10.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "intermedio"
  tags: ["notacion_cientifica", "potencias"]

variables:
  n1: random(2, 6)
  n2: random(2, 6)

respuesta: n1 + n2
tipo: input
tolerancia_abs: 0

enunciado: "10^{n1} × 10^{n2} = 10^x. ¿Cuánto vale x?"

explicacion: |
  Al multiplicar potencias de igual base (acá, 10), se suman los
  exponentes — la misma propiedad de `../potencias/`.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La notación científica sirve para escribir cómodo números muy grandes o muy chicos, sin tener que contar montones de ceros."

explicacion: |
  Es la razón de ser de esta notación: comparar y operar con magnitudes
  extremas sin perderse entre los ceros.
```

```
metadata:
  materia: "matematicas"
  tema: "notacion_cientifica"
  nivel: "basico"
  tags: ["notacion_cientifica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En a × 10ⁿ, un exponente positivo representa un número grande, y un exponente negativo representa un número menor a 1."

explicacion: |
  Es la idea central de todo el tema: el signo del exponente dice si el
  número original era grande o chico.
```
