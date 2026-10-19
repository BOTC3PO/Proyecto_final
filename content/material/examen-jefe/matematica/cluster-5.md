# Examen jefe — Domina Trigonometría y Regresión

> Logro #605. Trabajaste funciones trigonométricas, identidades, suma y descomposición de vectores y regresión lineal, y detectaste quién miente y cuándo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **123 preguntas totales** en 5/5 secciones.

---

## Sección: cual-miente-y-cuando (24 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["criterio", "vocabulario"]

enunciado: "¿Qué determina si una medida de tendencia central 'engaña' en una situación dada?"
tipo: mc
opciones_explicitas:
  - "Usar la medida equivocada para la pregunta que se está haciendo, o presentarla como si fuera toda la historia"
  - "La media siempre miente y la mediana siempre dice la verdad"
  - "Ninguna medida puede usarse mal, todas dan siempre la misma información"
respuesta: "Usar la medida equivocada para la pregunta que se está haciendo, o presentarla como si fuera toda la historia"

explicacion: |
  Cada medida responde una pregunta distinta — el problema es elegir
  mal cuál usar, no que alguna sea inherentemente falsa.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(20, 30)
  b: random(20, 30)
  c: random(20, 30)
  d: random(20, 30)
  atipico: random(200, 300)
  datos: [a, b, c, d, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cinco sueldos son (en miles): {a}, {b}, {c}, {d} y {atipico}. ¿Cuál es el sueldo PROMEDIO?"

pasos:
  - "Media = ({a}+{b}+{c}+{d}+{atipico}) / 5 = {redondear(promedio(datos), 2)}"

explicacion: |
  El sueldo de {atipico} arrastra bastante el promedio hacia arriba.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "mediana"]

respuesta: verdadero
tipo: vf

enunciado: "La media es más sensible a valores atípicos que la mediana — un solo valor extremo puede correr bastante el promedio, sin afectar casi a la mediana."

explicacion: |
  Es la razón matemática detrás de todo este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["media", "mediana", "aplicacion"]

enunciado: "Si un país anuncia que 'el sueldo promedio subió 15%', pero unas pocas personas con sueldos muy altos ganaron mucho más este año, ¿qué podría estar pasando con el sueldo mediano?"
tipo: mc
opciones_explicitas:
  - "Podría haber subido mucho menos que 15% (o incluso no haber subido), porque el promedio está siendo arrastrado por esos pocos sueldos altos"
  - "El sueldo mediano tiene que haber subido exactamente lo mismo, siempre"
  - "El sueldo mediano no puede calcularse a partir de datos de sueldos"
respuesta: "Podría haber subido mucho menos que 15% (o incluso no haber subido), porque el promedio está siendo arrastrado por esos pocos sueldos altos"

explicacion: |
  Es el caso real más citado de esta distorsión — el promedio sube sin
  que la mayoría de la gente lo note en su propio bolsillo.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(15, 25)
  b: random(15, 25)
  c: random(15, 25)
  atipico: random(150, 200)
  datos: [a, b, c, atipico]

respuesta: redondear(promedio(datos) - mediana(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cuatro valores son: {a}, {b}, {c}, {atipico}. ¿Cuál es la diferencia entre la media y la mediana de este conjunto (media menos mediana)?"

pasos:
  - "Media = {redondear(promedio(datos), 2)}. Mediana = {mediana(datos)}."
  - "Diferencia = {redondear(promedio(datos), 2)} − {mediana(datos)} = {redondear(promedio(datos) - mediana(datos), 2)}"

explicacion: |
  Cuanto más grande esta diferencia, más está siendo arrastrada la
  media por valores extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Dos conjuntos de datos con valores muy distintos entre sí pueden tener exactamente la misma mediana."

explicacion: |
  Por ejemplo, {4, 5, 6} y {1, 5, 100} tienen la misma mediana (5),
  aunque estén repartidos de forma completamente distinta.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "El grupo A tiene las notas 6, 7, 8 (mediana 7). El grupo B tiene las notas 2, 7, 10 (mediana también 7). Aunque tengan la misma mediana, ambos grupos tienen un desempeño igual de parejo entre sus alumnos."

explicacion: |
  Es falso: el grupo A es mucho más parejo (todas cerca de 7); el
  grupo B tiene mucha más dispersión (de 2 a 10) — la mediana sola no
  muestra esa diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media"]

enunciado: "¿Qué tipo de información se pierde al resumir un conjunto de datos en un solo promedio, sin ningún dato adicional?"
tipo: mc
opciones_explicitas:
  - "Cuánto varían los datos entre sí (la dispersión), y si hay valores atípicos que estén distorsionando ese promedio"
  - "Ninguna información se pierde nunca al calcular un promedio"
  - "Se pierde sólo el orden en que se recolectaron los datos, nada más relevante"
respuesta: "Cuánto varían los datos entre sí (la dispersión), y si hay valores atípicos que estén distorsionando ese promedio"

explicacion: |
  Un solo número nunca cuenta toda la historia de un conjunto de
  datos.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media"]

respuesta: verdadero
tipo: vf

enunciado: "Un promedio alto no garantiza que la mayoría de los casos individuales estén por encima de ese valor — es posible que la mayoría esté por debajo, y sólo unos pocos casos muy altos suban el promedio."

explicacion: |
  Es exactamente lo que pasa con el sueldo promedio cuando hay mucha
  desigualdad: la mayoría puede estar por debajo del promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  base: random(10, 20)
  atipico: random(150, 250)
  datos: [base, base + 1, base + 2, atipico]

respuesta: redondear(promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Cuatro valores son: {base}, {base + 1}, {base + 2} y {atipico}. La mediana de este conjunto es {mediana(datos)}. ¿Cuál es la media?"

pasos:
  - "Media = ({base}+{base + 1}+{base + 2}+{atipico}) / 4 = {redondear(promedio(datos), 2)}"

explicacion: |
  La media queda muy por encima de la mediana — señal clara de que hay
  un valor mucho más alto que el resto, distorsionando el promedio.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["criterio"]

enunciado: "Frente a cualquier estadística resumida en un solo número (un promedio, un porcentaje), ¿qué pregunta conviene hacerse?"
tipo: mc
opciones_explicitas:
  - "¿Qué información se pierde al resumir todo en este solo número?"
  - "¿El número es par o impar?"
  - "No hace falta hacerse ninguna pregunta, los números nunca engañan"
respuesta: "¿Qué información se pierde al resumir todo en este solo número?"

explicacion: |
  Es la pregunta base del pensamiento crítico frente a cualquier dato
  estadístico.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio", "ordenar"]

enunciado: "Ordená los pasos para evaluar si un promedio dado representa bien a la mayoría de los casos."
tipo: ordenar
opciones_explicitas:
  - "Si la diferencia es grande, sospechar que hay valores atípicos distorsionando el promedio"
  - "Calcular también la mediana del mismo conjunto de datos"
  - "Comparar ambos valores: si son parecidos, el promedio representa bien; si difieren mucho, no"
respuesta_orden: ["Calcular también la mediana del mismo conjunto de datos", "Comparar ambos valores: si son parecidos, el promedio representa bien; si difieren mucho, no", "Si la diferencia es grande, sospechar que hay valores atípicos distorsionando el promedio"]
explicacion: |
  Comparar media y mediana es la forma más directa de detectar esta
  distorsión sin necesitar ver todos los datos originales.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "aplicacion"]

enunciado: "Una noticia dice 'el ingreso promedio de las familias subió este año'. ¿Por qué esto no garantiza que la situación económica de la mayoría de las familias haya mejorado?"
tipo: mc
opciones_explicitas:
  - "Porque el promedio puede haber subido sólo por una mejora fuerte en un grupo chico de familias con más ingresos, sin que la mayoría haya mejorado"
  - "Porque los promedios de ingresos nunca pueden subir realmente"
  - "Porque la noticia tiene que estar necesariamente mintiendo"
respuesta: "Porque el promedio puede haber subido sólo por una mejora fuerte en un grupo chico de familias con más ingresos, sin que la mayoría haya mejorado"

explicacion: |
  No implica mala intención de quien da la noticia — el dato en sí es
  cierto, sólo que incompleto sin la mediana o la distribución al lado.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["moda", "problema"]

variables:
  repetido: random(10, 20)
  a: random(21, 30)
  b: random(31, 40)
  c: random(41, 50)
  d: random(51, 60)

respuesta: repetido
tipo: input

enunciado: "En un grupo de 6 personas, las edades son: {repetido}, {repetido}, {a}, {b}, {c}, {d}. ¿Cuál es la moda de este grupo?"

pasos:
  - "{repetido} aparece 2 veces, el resto aparece 1 vez cada uno — apenas alcanza para ser la moda."

explicacion: |
  Con sólo 2 repeticiones sobre 6 datos casi todos distintos, la moda
  no dice mucho sobre el grupo en general — es una moda 'débil'.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "mediana"]

enunciado: "¿En qué situación conviene usar la mediana en vez de la media?"
tipo: mc
opciones_explicitas:
  - "Cuando hay valores atípicos que distorsionarían mucho el promedio"
  - "Cuando se necesita saber la suma total de todos los datos"
  - "Cuando todos los datos son exactamente iguales entre sí"
respuesta: "Cuando hay valores atípicos que distorsionarían mucho el promedio"

explicacion: |
  Es justamente lo que resiste bien la mediana y no la media.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana"]

enunciado: "¿En qué situación conviene usar la media en vez de la mediana?"
tipo: mc
opciones_explicitas:
  - "Cuando se necesita reconstruir el TOTAL a partir del promedio y la cantidad de datos (media × cantidad = total), algo que la mediana no permite"
  - "Siempre, la mediana nunca sirve para nada"
  - "Sólo cuando hay valores atípicos muy grandes"
respuesta: "Cuando se necesita reconstruir el TOTAL a partir del promedio y la cantidad de datos (media × cantidad = total), algo que la mediana no permite"

explicacion: |
  Es una ventaja práctica real de la media que la mediana no tiene.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "problema"]

variables:
  media_gasto: random(200, 500)
  personas: random(10, 30)

respuesta: media_gasto * personas
tipo: input
unidad: "$"

enunciado: "El gasto PROMEDIO de {personas} personas en un evento fue de ${media_gasto} cada una. ¿Cuál fue el gasto TOTAL de todas juntas?"

pasos:
  - "Total = media × cantidad = {media_gasto} × {personas} = {media_gasto * personas}"

explicacion: |
  Con la mediana sola, este cálculo no sería posible — sólo la media
  tiene esta propiedad de reconstruir el total.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["mediana"]

respuesta: verdadero
tipo: vf

enunciado: "Conociendo sólo la mediana de un conjunto de datos y la cantidad de datos, NO se puede calcular la suma total de todos los valores (a diferencia de la media, que sí lo permite)."

explicacion: |
  La mediana no 'contiene' la información de cuánto suman todos los
  valores, sólo cuál queda en el medio.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "intermedio"
  tags: ["media", "aplicacion"]

enunciado: "Si se dice que 'la temperatura promedio global subió 1,5°C', ¿significa que TODOS los lugares del planeta subieron exactamente 1,5°C?"
tipo: mc
opciones_explicitas:
  - "No — es un promedio global; algunas zonas pueden haber subido mucho más y otras mucho menos (o incluso bajado)"
  - "Sí, un promedio global siempre significa que todos los lugares cambiaron exactamente igual"
  - "No tiene sentido promediar temperaturas de distintos lugares"
respuesta: "No — es un promedio global; algunas zonas pueden haber subido mucho más y otras mucho menos (o incluso bajado)"

explicacion: |
  Es el mismo problema de fondo que el sueldo promedio: un promedio
  resume, pero no describe cada caso individual.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio"]

respuesta: verdadero
tipo: vf

enunciado: "Presentar sólo una medida (como el promedio) sin más contexto puede ser matemáticamente correcto y honesto, y AL MISMO TIEMPO dar una idea incompleta o engañosa de la situación real."

explicacion: |
  No hace falta mala intención para que un resumen estadístico, sin
  contexto, dé una impresión equivocada.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media", "mediana", "problema"]

variables:
  a: random(60, 80)
  b: random(60, 80)
  c: random(60, 80)
  d: random(60, 80)
  bajo: random(5, 20)
  datos: [a, b, c, d, bajo]

respuesta: redondear(mediana(datos) - promedio(datos), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Las notas de 5 alumnos (sobre 100) son: {a}, {b}, {c}, {d} y {bajo} (un alumno con una nota muy baja). ¿Cuál es la diferencia entre la mediana y la media (mediana menos media)?"

pasos:
  - "Mediana = {mediana(datos)}. Media = {redondear(promedio(datos), 2)}."
  - "Mediana − Media = {mediana(datos)} − {redondear(promedio(datos), 2)} = {redondear(mediana(datos) - promedio(datos), 2)}"

explicacion: |
  Acá el valor atípico es BAJO, no alto — arrastra la media hacia
  abajo, por eso la mediana queda por encima de la media (al revés
  que en el caso del sueldo alto).
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["media"]

respuesta: verdadero
tipo: vf

enunciado: "Un valor atípico puede distorsionar la media hacia arriba (si es mucho más grande que el resto) o hacia abajo (si es mucho más chico), según el caso."

explicacion: |
  No siempre el problema es un valor 'demasiado alto' — también puede
  ser uno 'demasiado bajo'.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "avanzado"
  tags: ["criterio", "problema"]

enunciado: "Un estudio mide el tiempo que tardan 100 personas en resolver un problema, y hay 3 personas que tardaron muchísimo más que las demás (rezagadas). ¿Qué medida conviene reportar como 'tiempo típico'?"
tipo: mc
opciones_explicitas:
  - "La mediana, porque esos 3 casos extremos no la distorsionan tanto como distorsionarían a la media"
  - "La media, porque siempre es la medida más precisa"
  - "La moda, porque siempre representa mejor que las otras dos"
respuesta: "La mediana, porque esos 3 casos extremos no la distorsionan tanto como distorsionarían a la media"

explicacion: |
  Es exactamente el criterio de este módulo: elegir la medida según
  si hay o no valores atípicos relevantes.
```

```
metadata:
  materia: "matematicas"
  tema: "cual_miente_y_cuando"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender cuál medida 'miente' y cuándo?"
tipo: mc
opciones_explicitas:
  - "Para elegir la medida de tendencia central correcta según la pregunta y los datos, y para leer con criterio crítico cualquier estadística resumida en un solo número"
  - "Para saber que la mediana siempre es mejor que la media en todos los casos"
  - "Para desconfiar de todas las estadísticas, sin excepción"
respuesta: "Para elegir la medida de tendencia central correcta según la pregunta y los datos, y para leer con criterio crítico cualquier estadística resumida en un solo número"

explicacion: |
  Es el puente directo hacia
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/` — ver
  cuánto varían los datos es la forma más completa de responder
  'cuánto se pierde al resumir en un solo número'.
```

## Sección: funciones-trigonometricas-seno-coseno (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["radianes", "vocabulario"]

enunciado: "¿Qué es un radián?"
tipo: mc
opciones_explicitas:
  - "El ángulo central de una circunferencia que abarca un arco de longitud igual al radio"
  - "Otro nombre para un grado sexagesimal"
  - "La centésima parte de una vuelta completa"
respuesta: "El ángulo central de una circunferencia que abarca un arco de longitud igual al radio"

explicacion: |
  Es una unidad de ángulo distinta del grado, útil para trabajar con
  funciones trigonométricas.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["radianes", "completar"]

tipo: completar
enunciado: "Completá: una vuelta completa, 360°, mide exactamente ___ radianes (en términos de π)."
respuestas_validas:
  - "2π"
  - "2pi"

explicacion: |
  Es la equivalencia base de la que salen todas las demás conversiones.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["radianes", "completar"]

tipo: completar
enunciado: "Completá: 180° mide exactamente ___ radianes (en términos de π)."
respuestas_validas:
  - "π"
  - "pi"

explicacion: |
  Es la mitad de una vuelta completa (2π).
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes", "problema"]

variables:
  grados: uno_de([30, 45, 60, 90, 120, 180, 270, 360])

respuesta: redondear(grados * pi / 180, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "¿Cuántos radianes son {grados}°? Redondeá a 2 decimales."

pasos:
  - "{grados} × (π ÷ 180) = {redondear(grados * pi / 180, 2)}"

explicacion: |
  Se multiplica por π/180 para pasar de grados a radianes.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes", "problema"]

variables:
  fraccion: uno_de([2, 3, 4, 6])
  radianes_valor: pi / fraccion

respuesta: redondear(radianes_valor * 180 / pi, 0)
tipo: input
tolerancia_abs: 0.5

enunciado: "Un ángulo mide π/{fraccion} radianes. ¿Cuántos grados es eso?"

pasos:
  - "(π ÷ {fraccion}) × (180 ÷ π) = {redondear(radianes_valor * 180 / pi, 0)}°"

explicacion: |
  Se multiplica por 180/π para pasar de radianes a grados.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "El círculo unitario, usado para definir seno y coseno de cualquier ángulo, tiene radio exactamente 1."

explicacion: |
  Por eso las coordenadas de cualquier punto sobre él quedan siempre
  entre −1 y 1.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["circulo_unitario", "vocabulario"]

enunciado: "En el círculo unitario, ¿cuáles son las coordenadas del punto que corresponde a un ángulo θ?"
tipo: mc
opciones_explicitas:
  - "(cos θ, sen θ)"
  - "(sen θ, cos θ)"
  - "(θ, θ)"
respuesta: "(cos θ, sen θ)"

explicacion: |
  La abscisa es el coseno, la ordenada es el seno de ese ángulo.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un ángulo entre 90° y 180° (segundo cuadrante), el coseno de ese ángulo es negativo."

explicacion: |
  En el segundo cuadrante, la abscisa (el coseno) del punto sobre el
  círculo unitario es negativa; la ordenada (el seno) sigue siendo
  positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "Para un ángulo entre 180° y 270° (tercer cuadrante), tanto el seno como el coseno de ese ángulo son negativos."

explicacion: |
  En el tercer cuadrante, tanto la abscisa como la ordenada del punto
  sobre el círculo unitario son negativas.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "vocabulario"]

enunciado: "¿Qué significa que seno y coseno sean funciones periódicas?"
tipo: mc
opciones_explicitas:
  - "Que sus valores se repiten exactamente cada 2π radianes (una vuelta completa)"
  - "Que sus valores nunca se repiten"
  - "Que sólo están definidas para ángulos entre 0° y 90°"
respuesta: "Que sus valores se repiten exactamente cada 2π radianes (una vuelta completa)"

explicacion: |
  Girar una vuelta de más da exactamente el mismo punto en el círculo
  unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "completar"]

tipo: completar
enunciado: "Completá: sen(θ + 2π) = ___."
respuestas_validas:
  - "sen(θ)"
  - "sen θ"

explicacion: |
  Sumar una vuelta completa no cambia el valor del seno.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "problema"]

variables:
  seno_conocido: uno_de([0.5, 0.6, 0.8, 0.71])

respuesta: seno_conocido
tipo: input
tolerancia_abs: 0.01

enunciado: "Se sabe que sen(θ) = {seno_conocido}. ¿Cuánto vale sen(θ + 2π)?"

explicacion: |
  Al ser periódica con período 2π, da exactamente el mismo valor.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["amplitud", "vocabulario"]

enunciado: "¿Cuál es el rango de valores posibles (la amplitud) de sen(θ) y cos(θ), para cualquier ángulo θ?"
tipo: mc
opciones_explicitas:
  - "Entre −1 y 1"
  - "Entre 0 y 360"
  - "Sin límite, pueden dar cualquier número"
respuesta: "Entre −1 y 1"

explicacion: |
  Es consecuencia directa de que el círculo unitario tiene radio 1.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["amplitud"]

respuesta: verdadero
tipo: vf

enunciado: "No existe ningún ángulo θ para el cual sen(θ) = 2."

explicacion: |
  El seno está siempre acotado entre −1 y 1; 2 queda fuera de ese rango.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El gráfico de y = sen(θ) tiene forma de onda, subiendo y bajando entre −1 y 1, repitiéndose cada 2π."

explicacion: |
  Es la misma forma de onda (sinusoide) que aparece en sonido y luz.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: cos(0°) = ___."
respuestas_validas:
  - "1"

explicacion: |
  En el círculo unitario, el ángulo 0° corresponde al punto (1, 0).
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: sen(0°) = ___."
respuestas_validas:
  - "0"

explicacion: |
  En el círculo unitario, el ángulo 0° corresponde al punto (1, 0).
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: sen(90°) = ___."
respuestas_validas:
  - "1"

explicacion: |
  En el círculo unitario, el ángulo 90° corresponde al punto (0, 1).
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["valores_notables", "completar"]

tipo: completar
enunciado: "Completá: cos(90°) = ___."
respuestas_validas:
  - "0"

explicacion: |
  En el círculo unitario, el ángulo 90° corresponde al punto (0, 1).
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["periodicidad", "problema"]

variables:
  vueltas: random(2, 8)

respuesta: vueltas
tipo: input
tolerancia_abs: 0

enunciado: "Un ángulo mide {vueltas * 360}°. ¿A cuántas vueltas completas equivale?"

pasos:
  - "{vueltas * 360} ÷ 360 = {vueltas}"

explicacion: |
  Cada 360° es una vuelta completa, después de la cual sen y cos vuelven
  a repetirse.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes", "ordenar"]

enunciado: "Ordená los pasos para convertir una medida en grados a radianes."
tipo: ordenar
opciones_explicitas:
  - "El resultado queda expresado en radianes"
  - "Tomar la medida en grados"
  - "Multiplicarla por π/180"
respuesta_orden: ["Tomar la medida en grados", "Multiplicarla por π/180", "El resultado queda expresado en radianes"]
explicacion: |
  π/180 es el factor de conversión de grados a radianes.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario", "vocabulario"]

enunciado: "¿Por qué ahora tiene sentido hablar de sen(120°) o sen(-30°), ángulos que no caben en un triángulo rectángulo?"
tipo: mc
opciones_explicitas:
  - "Porque el círculo unitario define seno y coseno para cualquier ángulo, no sólo para los agudos de un triángulo"
  - "Porque esos valores en realidad no existen"
  - "Porque se usa una fórmula completamente distinta para ángulos obtusos"
respuesta: "Porque el círculo unitario define seno y coseno para cualquier ángulo, no sólo para los agudos de un triángulo"

explicacion: |
  Es la extensión central de este módulo respecto de
  `../razones-trigonometricas/`.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "intermedio"
  tags: ["radianes"]

respuesta: verdadero
tipo: vf

enunciado: "Un radián es un ángulo más grande que un grado sexagesimal."

explicacion: |
  Como una vuelta completa son sólo ≈6,28 radianes (2π) pero 360 grados,
  cada radián individual es bastante más grande que cada grado.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["radianes", "problema"]

respuesta: redondear(180 / pi, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Aproximadamente, ¿cuántos grados es 1 radián? Redondeá a 1 decimal."

pasos:
  - "180 ÷ π ≈ {redondear(180 / pi, 1)}°"

explicacion: |
  Es un valor aproximado que conviene recordar: un radián es bastante
  menos que un ángulo recto.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "avanzado"
  tags: ["circulo_unitario"]

respuesta: verdadero
tipo: vf

enunciado: "Las razones trigonométricas de un triángulo rectángulo (para ángulos entre 0° y 90°) son un caso particular de las funciones seno y coseno definidas sobre el círculo unitario."

explicacion: |
  Para ángulos agudos, ambas definiciones dan exactamente los mismos
  valores.
```

```
metadata:
  materia: "matematicas"
  tema: "funciones_trigonometricas_seno_coseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve extender seno y coseno a funciones de cualquier ángulo, medido en radianes?"
tipo: mc
opciones_explicitas:
  - "Para describir cualquier movimiento circular o fenómeno periódico, no sólo triángulos puntuales"
  - "Sólo sirve para ángulos mayores a 360°"
  - "No tiene ninguna aplicación fuera de la matemática pura"
respuesta: "Para describir cualquier movimiento circular o fenómeno periódico, no sólo triángulos puntuales"

explicacion: |
  Desde una rueda que gira hasta una onda de sonido, todo fenómeno
  periódico se describe con esta misma idea.
```

## Sección: suma-de-vectores-y-descomposicion (27 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "¿Cómo se suman dos vectores usando sus componentes?"
tipo: mc
opciones_explicitas:
  - "Se suman las componentes x entre sí, y por separado las componentes y entre sí"
  - "Se suman todas las componentes en un solo número"
  - "Se multiplican las componentes de un vector por las del otro"
respuesta: "Se suman las componentes x entre sí, y por separado las componentes y entre sí"

explicacion: |
  (x₁,y₁) + (x₂,y₂) = (x₁+x₂, y₁+y₂).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: random(1, 10)
  y2: random(1, 10)

respuesta: x1 + x2
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la componente x del vector resultante?"

pasos:
  - "{x1} + {x2} = {x1 + x2}"

explicacion: |
  Se suman sólo las dos componentes x.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(1, 10)
  y1: random(1, 10)
  x2: random(1, 10)
  y2: random(1, 10)

respuesta: y1 + y2
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es la componente y del vector resultante?"

pasos:
  - "{y1} + {y2} = {y1 + y2}"

explicacion: |
  Se suman sólo las dos componentes y.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores", "problema"]

variables:
  k: random(1, 6)
  x1: uno_de([1, 2, 3])
  y1: uno_de([1, 2])
  x2: (3 * k) - x1
  y2: (4 * k) - y1

respuesta: 5 * k
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es el módulo del vector resultante?"

pasos:
  - "Suma: ({x1 + x2}, {y1 + y2})"
  - "√({x1 + x2}² + {y1 + y2}²) = {5 * k}"

explicacion: |
  Primero se suman las componentes, y recién con el resultado se aplica
  Pitágoras para hallar el módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "¿Cómo se restan dos vectores usando sus componentes?"
tipo: mc
opciones_explicitas:
  - "Se restan las componentes x entre sí, y por separado las componentes y entre sí"
  - "Se restan los módulos, sin tocar las componentes"
  - "No es posible restar vectores, sólo sumarlos"
respuesta: "Se restan las componentes x entre sí, y por separado las componentes y entre sí"

explicacion: |
  Es exactamente el mismo procedimiento que sumar, con resta en vez de
  suma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "problema"]

variables:
  x1: random(10, 20)
  y1: random(10, 20)
  x2: random(1, 9)
  y2: random(1, 9)

respuesta: x1 - x2
tipo: input
tolerancia_abs: 0

enunciado: "Se resta el vector ({x2}, {y2}) al vector ({x1}, {y1}). ¿Cuál es la componente x del resultado?"

pasos:
  - "{x1} − {x2} = {x1 - x2}"

explicacion: |
  Se restan sólo las componentes x, en el orden dado.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar k > 1?"
tipo: mc
opciones_explicitas:
  - "Se alarga (su módulo aumenta), sin cambiar de dirección"
  - "Se acorta"
  - "Cambia de dirección, apuntando al lado opuesto"
respuesta: "Se alarga (su módulo aumenta), sin cambiar de dirección"

explicacion: |
  Cada componente queda multiplicada por k, que es mayor a 1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar k, con 0 < k < 1?"
tipo: mc
opciones_explicitas:
  - "Se acorta (su módulo disminuye), sin cambiar de dirección"
  - "Se alarga"
  - "Se vuelve el vector nulo"
respuesta: "Se acorta (su módulo disminuye), sin cambiar de dirección"

explicacion: |
  Cada componente queda multiplicada por un número menor a 1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué le pasa a un vector si se lo multiplica por un escalar negativo?"
tipo: mc
opciones_explicitas:
  - "Cambia de dirección, quedando apuntando exactamente al lado opuesto"
  - "Se vuelve el vector nulo automáticamente"
  - "No cambia nada, sólo el módulo se hace negativo"
respuesta: "Cambia de dirección, quedando apuntando exactamente al lado opuesto"

explicacion: |
  El módulo (que nunca es negativo) puede cambiar, pero la dirección
  gira 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "problema"]

variables:
  x: random(2, 10)
  oy: random(2, 10)
  k: uno_de([2, 3, 4])

respuesta: x * k
tipo: input
tolerancia_abs: 0

enunciado: "Se multiplica el vector ({x}, {oy}) por el escalar {k}. ¿Cuál es la componente x del resultado?"

pasos:
  - "{x} × {k} = {x * k}"

explicacion: |
  Cada componente se multiplica por el mismo escalar.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar", "vocabulario"]

enunciado: "¿Qué es el vector opuesto de v?"
tipo: mc
opciones_explicitas:
  - "El vector -v: mismo módulo, dirección exactamente contraria (180°)"
  - "Un vector con módulo 0"
  - "Un vector perpendicular a v"
respuesta: "El vector -v: mismo módulo, dirección exactamente contraria (180°)"

explicacion: |
  Se obtiene multiplicando v por el escalar -1.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar"]

respuesta: verdadero
tipo: vf

enunciado: "El vector opuesto de v tiene exactamente el mismo módulo que v."

explicacion: |
  Multiplicar por -1 sólo cambia la dirección, no la longitud.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["escalar"]

respuesta: falso
tipo: vf

enunciado: "El vector opuesto de v tiene exactamente la misma dirección que v."

explicacion: |
  Tiene dirección opuesta (girada 180°), no la misma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores", "vocabulario"]

enunciado: "En el método gráfico para sumar vectores, ¿cómo se dibuja el segundo vector respecto del primero?"
tipo: mc
opciones_explicitas:
  - "Empezando justo donde termina el primero (uniendo punta con cola)"
  - "Superpuesto exactamente sobre el primero"
  - "Siempre partiendo del origen, sin importar el primero"
respuesta: "Empezando justo donde termina el primero (uniendo punta con cola)"

explicacion: |
  El vector suma va desde el origen del primero hasta el extremo del
  segundo.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "El método gráfico (punta con cola) y el método por componentes dan exactamente el mismo vector suma."

explicacion: |
  Son dos formas distintas de llegar al mismo resultado; el de
  componentes es más preciso para calcular.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "vocabulario"]

enunciado: "¿Qué es descomponer un vector?"
tipo: mc
opciones_explicitas:
  - "Hallar sus componentes x e y, a partir de su módulo y su dirección"
  - "Dividir su módulo por 2"
  - "Convertirlo en dos vectores nulos"
respuesta: "Hallar sus componentes x e y, a partir de su módulo y su dirección"

explicacion: |
  Es el proceso inverso a calcular módulo y dirección a partir de las
  componentes.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "completar"]

tipo: completar
enunciado: "Completá: componente x = módulo × ___(dirección)."
respuestas_validas:
  - "cos"
  - "coseno"

explicacion: |
  La componente y usa seno en cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["descomposicion", "completar"]

tipo: completar
enunciado: "Completá: componente y = módulo × ___(dirección)."
respuestas_validas:
  - "sen"
  - "seno"

explicacion: |
  La componente x usa coseno en cambio.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  modulo: uno_de([10, 20, 40])
  cos_30: 0.87

respuesta: redondear(modulo * cos_30, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza tiene módulo {modulo} N y dirección 30° (cos 30° ≈ 0,87). ¿Cuál es su componente horizontal?"

pasos:
  - "{modulo} × 0,87 = {redondear(modulo * cos_30, 1)} N"

explicacion: |
  x = módulo × cos(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  modulo: uno_de([10, 20, 40])
  sen_60: 0.87

respuesta: redondear(modulo * sen_60, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "Una fuerza tiene módulo {modulo} N y dirección 60° (sen 60° ≈ 0,87). ¿Cuál es su componente vertical?"

pasos:
  - "{modulo} × 0,87 = {redondear(modulo * sen_60, 1)} N"

explicacion: |
  y = módulo × sen(dirección).
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "ordenar"]

enunciado: "Ordená los pasos para sumar dos vectores que no están alineados con los ejes (cada uno con su propio módulo y dirección)."
tipo: ordenar
opciones_explicitas:
  - "Calcular el módulo del vector resultante con esas componentes sumadas"
  - "Descomponer cada vector en sus componentes x e y"
  - "Sumar todas las componentes x entre sí, y todas las componentes y entre sí"
respuesta_orden: ["Descomponer cada vector en sus componentes x e y", "Sumar todas las componentes x entre sí, y todas las componentes y entre sí", "Calcular el módulo del vector resultante con esas componentes sumadas"]
explicacion: |
  Sin descomponer primero, no se pueden sumar directamente dos vectores
  con direcciones distintas.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores", "problema"]

variables:
  k: random(1, 5)
  x1: uno_de([1, 2])
  y1: uno_de([1, 2, 3])
  x2: (5 * k) - x1
  y2: (12 * k) - y1

respuesta: 13 * k
tipo: input
tolerancia_abs: 0

enunciado: "Se suman los vectores ({x1}, {y1}) y ({x2}, {y2}). ¿Cuál es el módulo del vector resultante?"

pasos:
  - "Suma: ({x1 + x2}, {y1 + y2})"
  - "√({x1 + x2}² + {y1 + y2}²) = {13 * k}"

explicacion: |
  Es la terna pitagórica 5-12-13 aplicada al resultado de la suma.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar vectores por componentes funciona siempre, sin importar en qué dirección apunte cada uno."

explicacion: |
  A diferencia del método gráfico (que depende de dibujar bien), el
  método por componentes es puramente numérico y siempre da el
  resultado correcto.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Por qué hace falta descomponer las fuerzas antes de sumarlas, cuando dos personas empujan un mismo objeto desde ángulos distintos?"
tipo: mc
opciones_explicitas:
  - "Porque no se pueden sumar directamente dos vectores con direcciones distintas sin pasar por sus componentes"
  - "Porque las fuerzas nunca se pueden sumar entre sí"
  - "No hace falta descomponer nada, alcanza con sumar los módulos"
respuesta: "Porque no se pueden sumar directamente dos vectores con direcciones distintas sin pasar por sus componentes"

explicacion: |
  Sumar los módulos directamente (sin descomponer) da un resultado
  incorrecto, salvo que ambos vectores tengan la misma dirección.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["descomposicion", "problema"]

variables:
  fx1: uno_de([10, 20])
  fx2: uno_de([5, 15])

respuesta: fx1 + fx2
tipo: input
tolerancia_abs: 0

enunciado: "Dos fuerzas actúan sobre un objeto. Al descomponerlas, la primera tiene componente horizontal {fx1} N, y la segunda {fx2} N. ¿Cuál es la componente horizontal de la fuerza neta (la suma de ambas)?"

pasos:
  - "{fx1} + {fx2} = {fx1 + fx2} N"

explicacion: |
  Las componentes horizontales de cada fuerza se suman entre sí, por
  separado de las verticales.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "avanzado"
  tags: ["suma_vectores"]

respuesta: verdadero
tipo: vf

enunciado: "Sumar el vector nulo a cualquier otro vector no cambia nada: da el mismo vector original."

explicacion: |
  (x, y) + (0, 0) = (x, y): el vector nulo es el "cero" de la suma de
  vectores.
```

```
metadata:
  materia: "matematicas"
  tema: "suma_de_vectores_y_descomposicion"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber sumar y descomponer vectores?"
tipo: mc
opciones_explicitas:
  - "Para calcular el efecto neto de varias magnitudes vectoriales (fuerzas, velocidades) que actúan juntas, incluso en direcciones distintas"
  - "Sólo sirve para vectores que ya están alineados con los ejes"
  - "No tiene aplicación fuera de la matemática pura"
respuesta: "Para calcular el efecto neto de varias magnitudes vectoriales (fuerzas, velocidades) que actúan juntas, incluso en direcciones distintas"

explicacion: |
  Es el paso que conecta directamente con las leyes de Newton en
  Física.
```

## Sección: identidades-y-ecuaciones-trigonometricas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre una identidad y una ecuación trigonométrica?"
tipo: mc
opciones_explicitas:
  - "La identidad se cumple para todo ángulo; la ecuación sólo para algunos ángulos específicos"
  - "Son exactamente lo mismo, dos nombres para un solo concepto"
  - "La identidad sólo aplica al seno; la ecuación sólo al coseno"
respuesta: "La identidad se cumple para todo ángulo; la ecuación sólo para algunos ángulos específicos"

explicacion: |
  Es la distinción central de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades"]

respuesta: verdadero
tipo: vf

enunciado: "sen²θ + cos²θ = 1 es una identidad: se cumple para absolutamente cualquier ángulo θ."

explicacion: |
  Es consecuencia del teorema de Pitágoras aplicado al círculo unitario.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "sen(θ) = 0,5 es una ecuación: sólo se cumple para algunos ángulos específicos, no para todos."

explicacion: |
  Para la mayoría de los ángulos, sen(θ) da un valor distinto de 0,5.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["identidades", "completar"]

tipo: completar
enunciado: "Completá la identidad pitagórica: sen²θ + cos²θ = ___."
respuestas_validas:
  - "1"

explicacion: |
  Vale para cualquier ángulo θ.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

respuesta: 0.6
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ del primer cuadrante, cos(θ) = 0,8. Usando la identidad pitagórica, ¿cuánto vale sen(θ)?"

pasos:
  - "sen²θ = 1 − 0,8² = 1 − 0,64 = 0,36"
  - "senθ = √0,36 = 0,6"

explicacion: |
  Es el mismo triángulo 3-4-5, ahora con los lados divididos por la
  hipotenusa (0,6 = 3/5, 0,8 = 4/5).
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

respuesta: 0.8
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ del primer cuadrante, sen(θ) = 0,6. Usando la identidad pitagórica, ¿cuánto vale cos(θ)?"

pasos:
  - "cos²θ = 1 − 0,6² = 1 − 0,36 = 0,64"
  - "cosθ = √0,64 = 0,8"

explicacion: |
  En el primer cuadrante, tanto seno como coseno son positivos, así que
  se toma la raíz positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Qué dice la identidad sen(90° − θ) = cos(θ)?"
tipo: mc
opciones_explicitas:
  - "Que el seno de un ángulo es igual al coseno de su ángulo complementario"
  - "Que el seno y el coseno de cualquier ángulo son siempre iguales"
  - "Que 90° menos cualquier ángulo siempre da 0"
respuesta: "Que el seno de un ángulo es igual al coseno de su ángulo complementario"

explicacion: |
  Dos ángulos son complementarios si suman 90°.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "problema"]

respuesta: 0.5
tipo: input
tolerancia_abs: 0.01

enunciado: "Sabiendo que sen(30°) = 0,5, y que 30° y 60° son ángulos complementarios (suman 90°), ¿cuánto vale cos(60°)?"

explicacion: |
  sen(30°) = cos(90° − 30°) = cos(60°): valen exactamente lo mismo.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

variables:
  valor: uno_de([0.6, 0.71, 0.87])

respuesta: valor
tipo: input
tolerancia_abs: 0.01

enunciado: "Se sabe que cos(35°) = {valor}. ¿Cuánto vale sen(55°)? (35° y 55° son complementarios)"

explicacion: |
  cos(35°) = sen(90° − 35°) = sen(55°): mismo valor.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "30° y 150° son ángulos suplementarios: suman exactamente 180°."

explicacion: |
  Es la relación que explica por qué comparten el mismo valor de seno.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "sen(30°) y sen(150°) valen exactamente lo mismo."

explicacion: |
  El seno de un ángulo y el de su suplemento son siempre iguales — por
  la simetría del círculo unitario respecto del eje y.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos ángulos distintos, entre 0° y 360°, cumplen sen(θ) = 0,5?"

explicacion: |
  30° y 150° (suplementarios), ambos con seno 0,5.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones", "ordenar"]

enunciado: "Ordená de menor a mayor las dos soluciones de sen(θ) = 0,5 entre 0° y 360°."
tipo: ordenar
opciones_explicitas:
  - "150°"
  - "30°"
respuesta_orden: ["30°", "150°"]
explicacion: |
  Son ángulos suplementarios: 30° + 150° = 180°.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 90
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo, entre 0° y 360°, cumple sen(θ) = 1?"

explicacion: |
  Es el único punto del círculo unitario con ordenada máxima, (0, 1).
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de sen(θ) = 0,5 (con dos soluciones), sen(θ) = 1 tiene una única solución entre 0° y 360°."

explicacion: |
  El valor máximo del seno se alcanza en un solo punto del círculo
  unitario por vuelta.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "problema"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo, entre 0° y 360°, cumple cos(θ) = 1?"

explicacion: |
  Es el punto (1, 0) del círculo unitario, el ángulo de partida.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones", "problema"]

respuesta: 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Qué ángulo del primer cuadrante (entre 0° y 90°) cumple cos(θ) = 0,5?"

explicacion: |
  cos(60°) = 0,5, uno de los valores notables ya conocidos (también
  cumple θ = 300°, fuera del primer cuadrante).
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["ecuaciones"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación sen(θ) = 2 no tiene ninguna solución, para ningún ángulo θ."

explicacion: |
  El seno nunca puede superar 1: su amplitud está acotada.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "vocabulario"]

enunciado: "¿Por qué la ecuación sen(θ) = 2 no tiene solución para ningún ángulo?"
tipo: mc
opciones_explicitas:
  - "Porque el seno está acotado entre −1 y 1, y 2 queda fuera de ese rango"
  - "Porque 2 es un número par"
  - "En realidad sí tiene solución, para ángulos muy grandes"
respuesta: "Porque el seno está acotado entre −1 y 1, y 2 queda fuera de ese rango"

explicacion: |
  Es la amplitud ya vista en
  `../funciones-trigonometricas-seno-coseno/`.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "ordenar"]

enunciado: "Ordená los pasos para resolver una ecuación como sen(θ) = k, con k un valor notable."
tipo: ordenar
opciones_explicitas:
  - "Revisar si existe una segunda solución (el suplemento) dentro de la misma vuelta"
  - "Verificar que k esté entre −1 y 1 (si no, no hay solución)"
  - "Buscar en la tabla de ángulos notables cuál da ese valor de seno"
respuesta_orden: ["Verificar que k esté entre −1 y 1 (si no, no hay solución)", "Buscar en la tabla de ángulos notables cuál da ese valor de seno", "Revisar si existe una segunda solución (el suplemento) dentro de la misma vuelta"]
explicacion: |
  Verificar el rango primero evita buscar una solución que no existe.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "problema"]

respuesta: 1
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ, sen(θ) = 0,6 y cos(θ) = 0,8. ¿Cuánto da sen²θ + cos²θ?"

pasos:
  - "0,6² + 0,8² = 0,36 + 0,64 = 1"

explicacion: |
  Confirma la identidad pitagórica con un caso concreto.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["identidades", "vocabulario"]

enunciado: "¿Qué significa 'despejar sen²θ' de la identidad pitagórica?"
tipo: mc
opciones_explicitas:
  - "Escribirla como sen²θ = 1 − cos²θ, para calcular sen²θ conociendo cos²θ"
  - "Eliminar el seno de la ecuación por completo"
  - "Reemplazar el seno por un número fijo, sin importar el ángulo"
respuesta: "Escribirla como sen²θ = 1 − cos²θ, para calcular sen²θ conociendo cos²θ"

explicacion: |
  Es reordenar la identidad para que quede sen²θ solo de un lado.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades", "problema"]

variables:
  cos_cuadrado: uno_de([0.36, 0.49, 0.64])

respuesta: redondear(1 - cos_cuadrado, 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Para un ángulo θ, cos²θ = {cos_cuadrado}. ¿Cuánto vale sen²θ?"

pasos:
  - "1 − {cos_cuadrado} = {redondear(1 - cos_cuadrado, 2)}"

explicacion: |
  Se despeja directo de la identidad pitagórica.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "avanzado"
  tags: ["identidades"]

respuesta: verdadero
tipo: vf

enunciado: "sen²θ + cos²θ = 1 es consecuencia directa del teorema de Pitágoras, aplicado a un triángulo con hipotenusa 1 (el radio del círculo unitario)."

explicacion: |
  Los catetos de ese triángulo son exactamente senθ y cosθ.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "intermedio"
  tags: ["ecuaciones", "vocabulario"]

enunciado: "¿Para qué sirve resolver una ecuación trigonométrica en un fenómeno periódico real?"
tipo: mc
opciones_explicitas:
  - "Para encontrar en qué momento del ciclo se alcanza un valor determinado (por ejemplo, cuándo una onda llega a cierta altura)"
  - "Sólo sirve para resolver ejercicios sin aplicación real"
  - "Sólo aplica a triángulos rectángulos"
respuesta: "Para encontrar en qué momento del ciclo se alcanza un valor determinado (por ejemplo, cuándo una onda llega a cierta altura)"

explicacion: |
  Cualquier fenómeno oscilatorio (sonido, luz, órbitas) se puede
  preguntar "¿cuándo pasa esto?" con una ecuación trigonométrica.
```

```
metadata:
  materia: "matematicas"
  tema: "identidades_y_ecuaciones_trigonometricas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve distinguir identidades de ecuaciones trigonométricas, y saber resolver ambas?"
tipo: mc
opciones_explicitas:
  - "Las identidades simplifican expresiones sin importar el ángulo; las ecuaciones encuentran ángulos concretos que cumplen una condición"
  - "Son lo mismo, no hace falta distinguirlas en la práctica"
  - "Sólo sirven para el primer cuadrante"
respuesta: "Las identidades simplifican expresiones sin importar el ángulo; las ecuaciones encuentran ángulos concretos que cumplen una condición"

explicacion: |
  Cada una cumple un rol distinto al trabajar con trigonometría.
```

## Sección: regresion-lineal (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "vocabulario"]

enunciado: "¿Qué es la regresión lineal?"
tipo: mc
opciones_explicitas:
  - "El método para encontrar la recta que mejor describe la tendencia de una nube de puntos de datos"
  - "El método para calcular la media de un conjunto de datos"
  - "El método para armar un gráfico de torta"
respuesta: "El método para encontrar la recta que mejor describe la tendencia de una nube de puntos de datos"

explicacion: |
  Parte de la nube de puntos ya construida en `../construir-un-grafico/`.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "vocabulario"]

enunciado: "En la ecuación de la recta de regresión y=m·x+b, ¿qué representan m y b?"
tipo: mc
opciones_explicitas:
  - "m es la pendiente (cuánto cambia y por cada unidad que aumenta x) y b es la ordenada al origen (el valor de y cuando x=0)"
  - "m y b son siempre iguales entre sí"
  - "m es el valor máximo de y, y b es el valor mínimo"
respuesta: "m es la pendiente (cuánto cambia y por cada unidad que aumenta x) y b es la ordenada al origen (el valor de y cuando x=0)"

explicacion: |
  Es la misma forma de la ecuación de la recta ya vista en Álgebra.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([2, 3, 5])
  b: uno_de([10, 20])
  x: uno_de([4, 6, 8])

respuesta: m * x + b
tipo: input

enunciado: "La recta de regresión ajustada es y = {m}x + {b}. ¿Cuál es la predicción de y para x={x}?"

pasos:
  - "y = {m}×{x} + {b} = {m * x} + {b} = {m * x + b}"

explicacion: |
  Se reemplaza el valor de x directo en la ecuación de la recta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([2, 4])
  b: 10
  x_real: uno_de([5, 10])

respuesta: x_real
tipo: input

enunciado: "La recta de regresión es y = {m}x + {b}. Si se observa y = {m * x_real + b}, ¿qué valor de x predice la recta?"

pasos:
  - "{m * x_real + b} = {m}x + {b}"
  - "x = ({m * x_real + b} − {b}) / {m} = {x_real}"

explicacion: |
  Se despeja x de la ecuación de la recta, igual que en cualquier
  ecuación de primer grado.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion", "vocabulario"]

enunciado: "¿Qué mide el coeficiente de correlación (r)?"
tipo: mc
opciones_explicitas:
  - "Qué tan bien la recta ajustada describe la relación real entre los datos, en una escala de −1 a 1"
  - "La pendiente exacta de la recta de regresión"
  - "La cantidad de puntos que tiene la nube de datos"
respuesta: "Qué tan bien la recta ajustada describe la relación real entre los datos, en una escala de −1 a 1"

explicacion: |
  r cerca de ±1 indica un ajuste fuerte; cerca de 0, un ajuste débil.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación cercano a +1 o a −1 indica que la recta ajusta muy bien a los datos; uno cercano a 0 indica un ajuste débil."

explicacion: |
  El valor absoluto de r es lo que indica la fuerza del ajuste; el
  signo indica la dirección (directa o inversa).
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación positivo indica una relación directa (a mayor x, mayor y); uno negativo indica una relación inversa (a mayor x, menor y)."

explicacion: |
  El signo de r siempre coincide con el signo de la pendiente m de la
  recta ajustada.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "vocabulario"]

enunciado: "¿En qué consiste el método de mínimos cuadrados para ajustar una recta?"
tipo: mc
opciones_explicitas:
  - "Elegir la recta que hace mínima la suma de las distancias verticales AL CUADRADO entre cada punto real y la recta"
  - "Elegir la recta que pasa exactamente por todos los puntos, sin excepción"
  - "Elegir la recta con la pendiente más grande posible"
respuesta: "Elegir la recta que hace mínima la suma de las distancias verticales AL CUADRADO entre cada punto real y la recta"

explicacion: |
  Es matemáticamente imposible, en general, que una única recta pase
  por todos los puntos de datos reales.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion"]

enunciado: "¿Por qué el método de mínimos cuadrados usa distancias AL CUADRADO en vez de distancias directas?"
tipo: mc
opciones_explicitas:
  - "Porque las distancias directas (positivas para puntos arriba de la recta, negativas para los de abajo) se cancelarían entre sí al sumarlas"
  - "Porque elevar al cuadrado siempre da un número más chico"
  - "No hay ninguna razón matemática, es sólo una convención arbitraria"
respuesta: "Porque las distancias directas (positivas para puntos arriba de la recta, negativas para los de abajo) se cancelarían entre sí al sumarlas"

explicacion: |
  Es exactamente el mismo argumento usado para la varianza en
  `../tablas-de-frecuencia-cuartiles-percentiles-y-varianza/`.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "extrapolacion"]

respuesta: verdadero
tipo: vf

enunciado: "Usar la recta de regresión para predecir valores de x fuera del rango de datos que realmente se observaron (extrapolar) es riesgoso, porque no hay garantía de que la misma tendencia lineal siga valiendo ahí afuera."

explicacion: |
  La recta se ajustó sólo con los datos observados — fuera de ese
  rango, es una extensión sin evidencia directa que la respalde.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

enunciado: "Un estudio encuentra que, en una empresa, a mayor gasto en publicidad corresponden mayores ventas. ¿Qué signo debería tener la pendiente (m) de la recta de regresión ajustada a estos datos?"
tipo: mc
opciones_explicitas:
  - "Positivo: a medida que aumenta el gasto en publicidad (x), también aumentan las ventas (y)"
  - "Negativo: a medida que aumenta el gasto en publicidad, bajan las ventas"
respuesta: "Positivo: a medida que aumenta el gasto en publicidad (x), también aumentan las ventas (y)"

explicacion: |
  Una relación directa (ambas variables suben juntas) siempre da una
  pendiente positiva.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["regresion", "aplicacion"]

enunciado: "Una empresa ajustó la recta ventas = 3×(gasto en publicidad) + 500, usando datos históricos. ¿Para qué sirve esta recta?"
tipo: mc
opciones_explicitas:
  - "Para predecir las ventas esperadas dado un monto de gasto en publicidad, dentro del rango de datos ya observado"
  - "Para calcular con certeza absoluta las ventas futuras, sin ningún margen de error"
  - "Sólo sirve para describir datos pasados, nunca para predecir"
respuesta: "Para predecir las ventas esperadas dado un monto de gasto en publicidad, dentro del rango de datos ya observado"

explicacion: |
  Es una predicción basada en la tendencia histórica, no una certeza
  matemática exacta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([-2, -3])
  b: uno_de([100, 150])
  x: uno_de([10, 20])

respuesta: m * x + b
tipo: input

enunciado: "Una recta de regresión con pendiente negativa es y = {m}x + {b} (por ejemplo: precio del producto vs. cantidad demandada). ¿Cuál es la predicción de y para x={x}?"

pasos:
  - "y = {m}×{x} + {b} = {m * x + b}"

explicacion: |
  Con pendiente negativa, y BAJA a medida que x aumenta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["correlacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un coeficiente de correlación cercano a 0 no significa que no haya ninguna relación entre las variables — sólo dice que no hay una relación LINEAL. Podría haber una relación fuerte pero curva."

explicacion: |
  Por ejemplo, una relación en forma de parábola puede dar r≈0 aunque
  las variables estén claramente relacionadas.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["correlacion", "aplicacion"]

enunciado: "¿Por qué conviene reportar el coeficiente de correlación (r) junto con la ecuación de la recta de regresión?"
tipo: mc
opciones_explicitas:
  - "Porque una recta siempre se puede calcular, aunque ajuste mal — r dice qué tan confiable es esa recta para describir los datos reales"
  - "Porque r reemplaza por completo a la ecuación de la recta"
  - "No es necesario reportarlo, la pendiente ya dice todo lo importante"
respuesta: "Porque una recta siempre se puede calcular, aunque ajuste mal — r dice qué tan confiable es esa recta para describir los datos reales"

explicacion: |
  Sin r, no hay forma de saber si la recta realmente describe bien la
  tendencia o si los datos están demasiado dispersos.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: uno_de([5, 8, 10])

respuesta: m
tipo: input
unidad: "puntos por hora de estudio"

enunciado: "La recta ajustada entre horas de estudio y nota de examen es nota = {m}×horas + 40. Según esta recta, ¿cuánto aumenta la nota esperada por cada hora adicional de estudio?"

pasos:
  - "La pendiente m={m} es, directamente, el cambio en y por cada unidad de x."

explicacion: |
  Interpretar la pendiente en las unidades del problema es la parte
  más útil de la regresión en la práctica.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "intermedio"
  tags: ["regresion", "aplicacion"]

enunciado: "¿Qué relación tiene la regresión lineal con `../construir-un-grafico/`?"
tipo: mc
opciones_explicitas:
  - "La regresión parte de una nube de puntos (gráfico de dispersión) ya construida, y ajusta la recta que mejor la describe"
  - "No tienen ninguna relación entre sí"
  - "La regresión reemplaza la necesidad de graficar los datos"
respuesta: "La regresión parte de una nube de puntos (gráfico de dispersión) ya construida, y ajusta la recta que mejor la describe"

explicacion: |
  Por eso `../construir-un-grafico/` es el prerrequisito directo de
  este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["correlacion", "causalidad"]

respuesta: verdadero
tipo: vf

enunciado: "Que una recta ajuste muy bien a los datos (r cercano a ±1) no prueba que una de las variables CAUSE a la otra — podría haber otra explicación detrás de esa relación."

explicacion: |
  Es el punto central de `../correlacion-no-es-causalidad/`, el
  módulo que sigue.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "avanzado"
  tags: ["regresion", "problema"]

variables:
  m: 4
  b: 20
  x1: 10
  x2: 15

respuesta: (m * x2 + b) - (m * x1 + b)
tipo: input

enunciado: "Con la recta y = {m}x + {b}, ¿cuánto AUMENTA la predicción de y al pasar de x={x1} a x={x2}?"

pasos:
  - "y({x1}) = {m * x1 + b}; y({x2}) = {m * x2 + b}"
  - "Diferencia = {m * x2 + b} − {m * x1 + b} = {(m * x2 + b) - (m * x1 + b)}"

explicacion: |
  El aumento siempre es m × (diferencia en x) — es la definición
  misma de pendiente constante en una recta.
```

```
metadata:
  materia: "matematicas"
  tema: "regresion_lineal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve la regresión lineal?"
tipo: mc
opciones_explicitas:
  - "Para cuantificar y predecir la relación entre dos variables numéricas, ajustando la recta que mejor describe la tendencia de los datos observados"
  - "Para calcular la media y la mediana de un conjunto de datos"
  - "Sólo sirve para variables que ya se sabe que están relacionadas causalmente"
respuesta: "Para cuantificar y predecir la relación entre dos variables numéricas, ajustando la recta que mejor describe la tendencia de los datos observados"

explicacion: |
  El paso siguiente, `../correlacion-no-es-causalidad/`, pone el
  límite crítico a esta herramienta: ajustar bien no es lo mismo que
  explicar por qué.
```

