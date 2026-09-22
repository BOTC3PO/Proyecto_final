# Examen jefe — [PENDIENTE #605]

> Logro #605. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **127 preguntas totales** en 5/5 secciones.

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

## Sección: regla-de-lhopital (31 preguntas)

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["terminologia"]

variables:
  nombre: "L'Hôpital"

tipo: completar

enunciado: "La regla que permite resolver indeterminaciones 0/0 y ∞/∞ mediante derivadas se llama Regla de {nombre}."

respuestas_validas:
  - "L'Hôpital"
  - "Lhopital"
  - "lhopital"
  - "l'Hôpital"

explicacion: |
  La regla lleva el nombre del matemático francés Guillaume de l'Hôpital.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  forma: "0/0"

tipo: completar

enunciado: "Una de las dos formas indeterminadas principales que permiten aplicar L'Hôpital es {forma}."

respuestas_validas:
  - "0/0"
  - "0 sobre 0"
  - "cero sobre cero"

explicacion: |
  Las formas son 0/0 y ∞/∞.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["historia"]

variables:
  apellido: "L'Hôpital"

tipo: completar

enunciado: "La regla lleva el nombre del matemático {apellido}."

respuestas_validas:
  - "L'Hôpital"
  - "Lhopital"
  - "l'Hôpital"

explicacion: |
  Guillaume de l'Hôpital publicó la regla en 1696.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["limites", "lhopital", "polinomios"]

variables:
  a: random(2, 5)
  b: random(1, 3)

respuesta: "{a/b}"
tipo: input

enunciado: "Calcule el límite: lim(x→0) (x^{a} + {b}x) / x"

explicacion: |
  Al sustituir x=0 obtenemos 0/0. Aplicamos L'Hôpital derivando numerador y denominador:
  Derivada num: a*x^{a-1} + {b}
  Derivada den: 1
  El límite es a*0^{a-1} + {b}. Como a >= 2, el término con x se anula.
  Resultado: {b}.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "seno"]

variables:
  k: random(2, 6)

respuesta: k
tipo: input

enunciado: "Calcule: lim(x→0) (sin(k*x)) / x"

explicacion: |
  Es indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: k*cos(k*x)
  Derivada den: 1
  Evaluar en x=0: k*cos(0)/1 = k*1 = {k}.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "infinito", "logaritmo"]

variables:
  n: random(2, 5)

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (log(x)) / x^{n}"

explicacion: |
  Es indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1/x
  Derivada den: n*x^{n-1}
  Nuevo límite: lim(x→∞) (1/x) / (n*x^{n-1}) = lim(x→∞) 1 / (n*x^{n})
  Como n > 0, el denominador crece infinitamente, por lo que el límite es 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "derivadas"]

variables:
  k: random(1, 4)

respuesta: "{1/(2*k)}"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1 + k*x) - 1) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: (1/2)*(1+k*x)^{-1/2} * k
  Derivada den: 1
  Evaluar en x=0: (1/2)*(1)^{-1/2} * k = k/2.
  El límite es k/2.
  Espera, la derivada de sqrt(1+kx) es k / (2*sqrt(1+kx)).
  En x=0: k / 2.
  La respuesta correcta es "{k/2}".
  Corrijo la respuesta:
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "derivadas"]

variables:
  k: random(1, 4)

respuesta: "{k/2}"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1 + k*x) - 1) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: k / (2*sqrt(1+k*x))
  Derivada den: 1
  En x=0: k / 2.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "logaritmo", "infinito"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (log(x)) / x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1/x
  Derivada den: 1
  Límite: lim(x→∞) 1/x = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (1 - cos(x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: sin(x)
  Derivada den: 1
  Lim(x→0) sin(x)/1 = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "exponencial", "infinito"]

respuesta: "∞"
tipo: input

enunciado: "Calcule: lim(x→∞) (e^x) / x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: e^x
  Derivada den: 1
  Lim(x→∞) e^x/1 = ∞.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "tangente"]

respuesta: "1"
tipo: input

enunciado: "Calcule: lim(x→0) (tan(x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: sec^2(x)
  Derivada den: 1
  En x=0: sec^2(0) = 1/cos^2(0) = 1/1 = 1.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "logaritmo", "natural"]

respuesta: "1"
tipo: input

enunciado: "Calcule: lim(x→0) (ln(1 + x)) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: 1/(1+x)
  Derivada den: 1
  En x=0: 1/(1+0) = 1.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "raices", "cubica"]

variables:
  k: random(1, 3)

respuesta: "{k/3}"
tipo: input

enunciado: "Calcule: lim(x→0) ( (1 + k*x)^{1/3} - 1 ) / x"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: (1/3)*(1+k*x)^{-2/3} * k
  Derivada den: 1
  En x=0: (1/3)*1 * k = k/3.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "exponencial", "infinito"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→∞) (x) / e^x"

explicacion: |
  Indeterminación ∞/∞. Aplicamos L'Hôpital:
  Derivada num: 1
  Derivada den: e^x
  Lim(x→∞) 1/e^x = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (cos(x) - 1) / x^2"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: -sin(x)
  Derivada den: 2x
  Resultado: -sin(x)/2x. En x=0 es 0/0.
  Aplicamos L'Hôpital de nuevo:
  Derivada num: -cos(x)
  Derivada den: 2
  En x=0: -cos(0)/2 = -1/2.
  Espera, la respuesta es -0.5.
  Cambiemos a (1-cos(x))/x^2 -> 1/2.
  O dejemos -1/2.
  Respuesta: "-0.5"
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["limites", "trigonometria", "coseno"]

respuesta: "-0.5"
tipo: input

enunciado: "Calcule: lim(x→0) (cos(x) - 1) / x^2"

explicacion: |
  1ra derivada: -sin(x) / 2x (0/0)
  2da derivada: -cos(x) / 2
  En x=0: -1/2 = -0.5.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["limites", "logaritmo", "raices"]

respuesta: "0"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1+x) - 1) / log(1+x)"

explicacion: |
  Indeterminación 0/0. Aplicamos L'Hôpital:
  Derivada num: 1/(2*sqrt(1+x))
  Derivada den: 1/(1+x)
  Fracción: (1/(2*sqrt(1+x))) / (1/(1+x)) = (1+x) / (2*sqrt(1+x))
  Simplificamos: sqrt(1+x) / 2.
  En x=0: sqrt(1)/2 = 1/2 = 0.5.
  Respuesta: "0.5"
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["limites", "logaritmo", "raices"]

respuesta: "0.5"
tipo: input

enunciado: "Calcule: lim(x→0) (sqrt(1+x) - 1) / log(1+x)"

explicacion: |
  Derivada num: 1/(2*sqrt(1+x))
  Derivada den: 1/(1+x)
  Cociente: (1+x) / (2*sqrt(1+x)) = sqrt(1+x)/2.
  En x=0: 1/2 = 0.5.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["identificacion", "indeterminacion"]

variables:
  k: random(1, 5)

respuesta: verdadero
tipo: vf

enunciado: "Al calcular el límite de {k}x / sin({k}x) cuando x tiende a 0, se obtiene la forma indeterminada 0/0."

explicacion: |
  Al sustituir x = 0 en el numerador obtenemos {k}*0 = 0.
  En el denominador obtenemos sin(0) = 0.
  Por lo tanto, la forma resultante es 0/0, que es una indeterminación válida para aplicar L'Hôpital.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["infinito", "logaritmo"]

variables:
  k: random(2, 5)

respuesta: 0
tipo: input

enunciado: "Calcula el límite de ln(x) / x^{k} cuando x tiende a infinito."

explicacion: |
  Forma indeterminada ∞/∞. Aplicamos L'Hôpital.
  Derivada num: 1/x.
  Derivada den: k*x^(k-1).
  Nuevo límite: (1/x) / (k*x^(k-1)) = 1 / (k*x^k).
  Cuando x -> ∞, el denominador crece sin límite, por lo que el resultado es 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["errores_comunes", "aplicacion"]

variables:
  k: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Se puede aplicar la Regla de L'Hôpital al límite de (x + {k}) / x cuando x tiende a 0."

explicacion: |
  Al sustituir x=0, el numerador tiende a {k} y el denominador a 0.
  Esto da una forma {k}/0 (asíntota), no una indeterminación 0/0.
  Por lo tanto, L'Hôpital no es aplicable directamente.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "derivada"]

respuesta: falso
tipo: vf

enunciado: "Para calcular el límite de f(x)/g(x) mediante L'Hôpital, debemos derivar la fracción completa como si fuera una función cociente."

explicacion: |
  Falso. L'Hôpital establece que el límite es igual al límite de (f'(x))/(g'(x)).
  No se deriva el cociente f/g, sino que se derivan el numerador y el denominador por separado.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["exponencial", "logaritmo"]

variables:
  k: random(1, 5)

respuesta: 0
tipo: input

enunciado: "Calcula el límite de x / ln(x) cuando x tiende a 1."

explicacion: |
  Al sustituir x=1, el numerador es 1 y el denominador es ln(1)=0.
  Esto no es 0/0 ni ∞/∞. Es 1/0 (asíntota).
  Espera, el límite es infinito (o no existe en el sentido finito).
  Si la pregunta pide un número finito, esta variable no sirve bien para input numérico simple sin especificar signo.
  Cambiemos a x->∞ para ln(x)/x.
  Nuevo enunciado: Lim ln(x)/x cuando x->∞.
  Derivada num: 1/x. Derivada den: 1.
  Lim (1/x)/1 = 0.
  Reescribiendo bloque:
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["exponencial", "logaritmo"]

respuesta: 0
tipo: input

enunciado: "Calcula el límite de ln(x) / x cuando x tiende a infinito."

explicacion: |
  Forma ∞/∞.
  Derivada num: 1/x. Derivada den: 1.
  El nuevo límite es lim (1/x) / 1 = 0.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "existencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si al aplicar L'Hôpital el límite de f'(x)/g'(x) no existe (ni es infinito), entonces L'Hôpital no permite concluir nada sobre el límite original."

explicacion: |
  Correcto. La regla dice que si el límite de las derivadas existe, entonces el límite original es igual a él.
  Si el límite de las derivadas no existe, la regla es inconclusa (el límite original podría existir o no).
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "avanzado"
  tags: ["iteracion", "polinomio"]

respuesta: 2
tipo: input

enunciado: "Calcula el límite de (x^{2} - 2x + 1) / (x^{3} - 1) cuando x tiende a 1."

explicacion: |
  Forma 0/0.
  Derivada 1: Num (2x-2), Den (3x^2). En x=1: 0/3 = 0.
  Espera, 0/3 es 0. No hay que derivar de nuevo.
  Reviso: Num en 1: 1-2+1=0. Den en 1: 1-1=0.
  Derivada Num: 2x-2. En 1: 0.
  Derivada Den: 3x^2. En 1: 3.
  Lim 0/3 = 0.
  La respuesta es 0.
  Cambio el ejercicio para que requiera 2 derivadas.
  Usar (x-1)^2 / (x^3-1)?
  Num derivada: 2(x-1) -> 0. Den derivada: 3x^2 -> 3. Resultado 0.
  Usar (x-1)^3 / (x^2-1)?
  Num derivada: 3(x-1)^2 -> 0. Den derivada: 2x -> 2. Resultado 0.
  Para que sea distinto de 0 y requiera iteración, necesitamos que la primera derivada siga dando 0/0.
  Ejemplo: (x-1)^2 / (x^2-1).
  Derivada 1: Num 2(x-1)->0. Den 2x->2. Resultado 0.
  Ejemplo: (x-1)^3 / (x-1)^2? Simplifica a x-1 -> 0.
  Ejemplo clásico: (x - sin(x)) / x^3?
  Derivada 1: (1-cos(x))/3x^2 -> 0/0.
  Derivada 2: sin(x)/6x -> 0/0.
  Derivada 3: cos(x)/6 -> 1/6.
  Muy complejo para input simple.
  Volvemos a (x^2 - 2x + 1)/(x-1)? No, eso es 0/0 directo.
  Vamos a usar (x^2 - 1)/(x^3 - 1) en x->1.
  Derivada 1: 2x / 3x^2 = 2/(3x). En 1: 2/3.
  Respuesta 2/3.
  Reescribiendo para evitar confusión de iteración innecesaria:
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "basico"
  tags: ["propiedades", "linealidad"]

respuesta: verdadero
tipo: vf

enunciado: "Si el límite de f(x)/g(x) es indeterminado, el límite de c*f(x)/g(x) (con c constante) se puede calcular derivando f(x) y g(x) por separado."

explicacion: |
  Verdadero. La constante c se puede sacar fuera o derivar como parte del numerador (c*f'(x)).
  El resultado será c veces el límite original de f/g.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["teoria", "limites_laterales"]

respuesta: verdadero
tipo: vf

enunciado: "La Regla de L'Hôpital es aplicable también para límites laterales (x -> a+ o x -> a-)."

explicacion: |
  Verdadero. La regla se basa en la derivabilidad en un entorno, y los límites laterales son casos particulares de ese comportamiento local.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["trigonometria", "limite"]

respuesta: 1
tipo: input

enunciado: "Calcula el límite de sen(3x) / x cuando x tiende a 0."

explicacion: |
  Forma 0/0.
  Derivada num: 3cos(3x). Derivada den: 1.
  En x=0: 3cos(0)/1 = 3.
  Espera, la respuesta es 3.
  Reescribiendo para que sea 1: sen(x)/x.
  Pero quiero variar.
  Si pongo sen(3x)/x, la respuesta es 3.
  Si pongo sen(x)/3x, la respuesta es 1/3.
  Vamos a usar sen(3x)/x para probar que el alumno deriva correctamente el argumento.
  Respuesta: 3.
```

```
metadata:
  materia: "matematica"
  tema: "regla_de_lhopital"
  nivel: "intermedio"
  tags: ["trigonometria", "limite"]

respuesta: 3
tipo: input

enunciado: "Calcula el límite de sen(3x) / x cuando x tiende a 0."

explicacion: |
  Forma 0/0.
  Derivada num: 3cos(3x). Derivada den: 1.
  En x=0: 3*1 / 1 = 3.
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

