# Examen jefe — Domino trigonometría y grafos

> Logro #66. Completaste el parcial dominando funciones trigonométricas, grafos y problemas de hora. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **112 preguntas totales** en 5/5 secciones.

---

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
respuesta_orden:
  - "Tomar la medida en grados"
  - "Multiplicarla por π/180"
  - "El resultado queda expresado en radianes"

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

## Sección: grafico-eje-truncado (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "vocabulario"]

enunciado: "¿Qué es un eje Y 'truncado' en un gráfico de barras o líneas?"
tipo: mc
opciones_explicitas:
  - "Un eje que no empieza en 0, sino en un valor mucho más alto"
  - "Un eje que muestra valores negativos"
  - "Un eje que tiene demasiadas marcas numéricas"
respuesta: "Un eje que no empieza en 0, sino en un valor mucho más alto"

explicacion: |
  A diferencia del eje 'completo', que arranca en 0.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado"]

enunciado: "¿Por qué un eje truncado puede hacer que una diferencia chica entre dos valores se vea mucho más grande de lo que realmente es?"
tipo: mc
opciones_explicitas:
  - "Porque al achicar el rango del eje, la misma diferencia absoluta ocupa una proporción mucho mayor del alto total del gráfico"
  - "Porque cambia los valores numéricos reales de los datos"
  - "Un eje truncado nunca puede hacer que una diferencia se vea más grande"
respuesta: "Porque al achicar el rango del eje, la misma diferencia absoluta ocupa una proporción mucho mayor del alto total del gráfico"

explicacion: |
  El dato no cambia — sólo cambia cuánto 'estira' visualmente la
  diferencia el rango elegido para el eje.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "problema"]

variables:
  a: uno_de([48, 49])
  b: uno_de([51, 52])

respuesta: abs(a - b)
tipo: input
unidad: "puntos porcentuales"

enunciado: "Dos candidatos sacaron {a}% y {b}% de los votos. ¿Cuál es la diferencia REAL entre ambos, en puntos porcentuales?"

pasos:
  - "Diferencia = |{a} − {b}| = {abs(a - b)} puntos porcentuales"

explicacion: |
  Esta es la diferencia real, sin importar cómo se dibuje después el
  gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Truncar el eje Y de un gráfico no cambia los datos reales en absoluto — sólo cambia la percepción visual de qué tan grande parece la diferencia entre ellos."

explicacion: |
  Los números siguen siendo los mismos; lo que cambia es la
  impresión visual que produce el gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "¿Cuál es el primer paso para detectar si un gráfico de barras está usando un eje truncado para exagerar una diferencia?"
tipo: mc
opciones_explicitas:
  - "Revisar dónde arranca el eje Y — si no arranca en 0 y no hay ninguna marca que lo avise, sospechar"
  - "Contar cuántas barras tiene el gráfico"
  - "Fijarse en qué colores se usaron para las barras"
respuesta: "Revisar dónde arranca el eje Y — si no arranca en 0 y no hay ninguna marca que lo avise, sospechar"

explicacion: |
  Es lo primero que hay que mirar antes de sacar cualquier conclusión
  del gráfico.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  a: uno_de([95, 98])
  b: 100

respuesta: redondear((b - a) / a * 100, 2)
tipo: input
tolerancia_abs: 0.1
unidad: "%"

enunciado: "Producto A vende {a} unidades; Producto B vende {b} unidades. Un gráfico con eje truncado (arrancando en 90) hace ver a B como 'mucho más grande'. ¿Cuál es la diferencia porcentual REAL entre A y B, respecto de A?"

pasos:
  - "Diferencia % = ({b} − {a}) / {a} × 100 = {redondear((b - a) / a * 100, 2)}%"

explicacion: |
  Calcular la diferencia porcentual real es la forma de contrastar lo
  que dice el número contra lo que 'muestra' el gráfico truncado.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Truncar el eje Y no siempre es un engaño — puede ser legítimo cuando los datos varían en un rango angosto dentro de valores grandes, siempre que el gráfico lo declare explícitamente (por ejemplo, con una marca de quiebre en el eje)."

explicacion: |
  Como graficar temperatura corporal entre 36,5°C y 37,5°C: truncar
  ahí permite ver la variación real con claridad, si se avisa.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "Una noticia muestra un gráfico de barras donde el 'crecimiento' de una empresa de 100 a 103 unidades se ve como una barra el TRIPLE de alta que el año anterior, con el eje arrancando en 99. ¿Qué está pasando?"
tipo: mc
opciones_explicitas:
  - "El eje truncado (arrancando en 99, no en 0) exagera visualmente un crecimiento real de apenas 3%"
  - "La empresa realmente triplicó su tamaño, y el gráfico lo muestra correctamente"
  - "Es imposible saber nada sin más información sobre la empresa"
respuesta: "El eje truncado (arrancando en 99, no en 0) exagera visualmente un crecimiento real de apenas 3%"

explicacion: |
  El crecimiento real es de 3 unidades sobre 100 (3%) — el gráfico lo
  hace ver mucho más grande de lo que es.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  valor_a: 90
  valor_b: 95
  inicio_eje: uno_de([80, 85])

respuesta: redondear((valor_b - inicio_eje) / (valor_a - inicio_eje), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Dos barras representan {valor_a} y {valor_b}, con el eje Y truncado arrancando en {inicio_eje} (en vez de 0). En este gráfico, ¿cuántas veces más alta se ve la barra de {valor_b} respecto de la de {valor_a}?"

pasos:
  - "Altura visual de {valor_a} = {valor_a} − {inicio_eje} = {valor_a - inicio_eje}"
  - "Altura visual de {valor_b} = {valor_b} − {inicio_eje} = {valor_b - inicio_eje}"
  - "Razón = {valor_b - inicio_eje} / {valor_a - inicio_eje} = {redondear((valor_b - inicio_eje) / (valor_a - inicio_eje), 2)}"

explicacion: |
  Esa razón visual es mucho más grande que la razón real
  ({valor_b}/{valor_a} ≈ {redondear(valor_b / valor_a, 2)}) — el eje
  truncado exagera la diferencia.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "clasificar"]

enunciado: "¿Qué tipo de gráfico es más susceptible al engaño del eje truncado?"
tipo: mc
opciones_explicitas:
  - "Gráficos de barras o líneas, donde la altura representa la magnitud del dato de forma proporcional al eje"
  - "Gráficos de torta, porque siempre representan porcentajes sobre un total"
respuesta: "Gráficos de barras o líneas, donde la altura representa la magnitud del dato de forma proporcional al eje"

explicacion: |
  En barras y líneas, la altura ES la información visual central —
  truncar el eje distorsiona directamente esa lectura.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "torta"]

respuesta: verdadero
tipo: vf

enunciado: "El concepto de 'eje truncado' no tiene sentido para un gráfico de torta, porque un gráfico de torta no tiene eje — cada porción representa directamente un porcentaje del total (100%)."

explicacion: |
  Un gráfico de torta puede engañar de otras formas (por ejemplo,
  usando perspectiva 3D que distorsiona el tamaño aparente de cada
  porción), pero no con un eje truncado.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "Un aviso publicitario muestra un gráfico de barras donde 'su producto es más efectivo' (94% vs. 91% de un competidor), con el eje arrancando en 88 y sin ninguna marca de quiebre. ¿Qué recurso está usando?"
tipo: mc
opciones_explicitas:
  - "Un eje truncado sin declarar, para hacer ver una diferencia real de apenas 3 puntos porcentuales como una ventaja mucho más grande"
  - "Un gráfico completamente honesto, sin ningún truco visual"
  - "Un gráfico de torta disfrazado de gráfico de barras"
respuesta: "Un eje truncado sin declarar, para hacer ver una diferencia real de apenas 3 puntos porcentuales como una ventaja mucho más grande"

explicacion: |
  Es un uso clásico del eje truncado en publicidad comparativa.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  a: 40
  b: 44

respuesta: redondear(b / a, 3)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con un eje que arranca en 0, dos barras de {a} y {b}. ¿Cuál es la razón real de alturas (barra mayor sobre barra menor) en ese gráfico honesto?"

pasos:
  - "Razón = {b}/{a} = {redondear(b / a, 3)}"

explicacion: |
  Con el eje en 0, la razón visual coincide exactamente con la razón
  numérica real de los datos — es el gráfico que no engaña.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "Al ver un gráfico de barras con una diferencia que parece enorme, ¿qué conviene hacer antes de sacar conclusiones?"
tipo: mc
opciones_explicitas:
  - "Revisar dónde arranca el eje Y y calcular la diferencia numérica real entre los valores, en vez de confiar sólo en la impresión visual"
  - "Confiar directamente en lo que muestra el gráfico, sin revisar nada más"
  - "Ignorar el gráfico por completo, sin mirar ningún dato"
respuesta: "Revisar dónde arranca el eje Y y calcular la diferencia numérica real entre los valores, en vez de confiar sólo en la impresión visual"

explicacion: |
  Es la aplicación práctica del pensamiento crítico de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "El eje truncado es sólo un caso particular de gráfico engañoso — también existen otros trucos, como usar una escala no lineal sin avisar, o elegir un rango de tiempo que muestre sólo la parte más favorable de una tendencia."

explicacion: |
  Todos comparten el mismo principio: los datos no cambian, pero la
  forma de presentarlos distorsiona la impresión visual.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado", "problema"]

variables:
  a: 80
  b: 84
  inicio_truncado: 75

respuesta: redondear((b - inicio_truncado) / (a - inicio_truncado), 3) > redondear(b / a, 3)
tipo: vf

enunciado: "Con los mismos valores {a} y {b}: en un gráfico con eje desde 0, la razón de alturas es {redondear(b / a, 3)}. En un gráfico con eje truncado desde {inicio_truncado}, ¿la razón de alturas visual es MAYOR que esa razón real?"

explicacion: |
  El eje truncado siempre agranda la razón visual de alturas respecto
  de la razón real de los valores, cuando el eje no arranca en 0.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "¿Cómo se puede 'arreglar' un gráfico de barras que usa un eje truncado sin declarar, para que muestre la información de forma honesta?"
tipo: mc
opciones_explicitas:
  - "Rehacer el gráfico con el eje Y arrancando en 0, o mantener el truncado pero agregar una marca de quiebre visible que lo declare"
  - "Es imposible arreglar un gráfico así, hay que descartarlo por completo"
  - "Agregar más colores a las barras"
respuesta: "Rehacer el gráfico con el eje Y arrancando en 0, o mantener el truncado pero agregar una marca de quiebre visible que lo declare"

explicacion: |
  Ambas soluciones devuelven la transparencia que le faltaba al
  gráfico original.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "avanzado"
  tags: ["eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Ante un gráfico de barras con un eje que claramente no arranca en 0 y sin ninguna marca de quiebre que lo avise, es razonable sospechar que se está exagerando la diferencia entre los datos a propósito."

explicacion: |
  No es una prueba definitiva de mala intención, pero sí una señal de
  alerta que justifica revisar los números reales.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "intermedio"
  tags: ["eje_truncado", "problema"]

variables:
  minimo_dato: uno_de([45, 60, 80])

respuesta: 0
tipo: input

enunciado: "Un conjunto de datos de barras tiene un valor mínimo de {minimo_dato}. Para armar un gráfico de barras que NO exagere las diferencias entre los valores, ¿en qué valor debería arrancar el eje Y?"

explicacion: |
  El eje Y de un gráfico de barras honesto arranca en 0,
  independientemente de cuál sea el valor mínimo de los datos.
```

```
metadata:
  materia: "matematicas"
  tema: "grafico_eje_truncado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve saber detectar un gráfico con eje truncado?"
tipo: mc
opciones_explicitas:
  - "Para no dejarse convencer por la forma visual de un gráfico, y en cambio evaluar la diferencia real entre los datos que representa"
  - "Para poder armar gráficos siempre con ejes truncados"
  - "Sólo sirve para leer gráficos de elecciones políticas"
respuesta: "Para no dejarse convencer por la forma visual de un gráfico, y en cambio evaluar la diferencia real entre los datos que representa"

explicacion: |
  Es una aplicación directa de `../leer-grafico/barras/` al
  pensamiento crítico frente a noticias, publicidad e informes.
```

## Sección: grafos-dirigidos-no-dirigidos-y-ponderados (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["dirigido", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre un grafo dirigido y uno no dirigido?"
tipo: mc
opciones_explicitas:
  - "En el dirigido, cada arista tiene un sentido (A→B no implica B→A); en el no dirigido, la conexión es simétrica en ambos sentidos"
  - "El grafo dirigido tiene más vértices que el no dirigido"
  - "El grafo no dirigido no puede tener aristas"
respuesta: "En el dirigido, cada arista tiene un sentido (A→B no implica B→A); en el no dirigido, la conexión es simétrica en ambos sentidos"

explicacion: |
  El sentido de la arista es lo único que cambia entre ambos tipos.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cuál de estos ejemplos se modela mejor con un grafo NO dirigido?"
tipo: mc
opciones_explicitas:
  - "Una amistad mutua en una red social (si A es amigo de B, B también es amigo de A)"
  - "Que un usuario 'siga' a otro en una red social donde el seguimiento no tiene por qué ser mutuo"
respuesta: "Una amistad mutua en una red social (si A es amigo de B, B también es amigo de A)"

explicacion: |
  La amistad mutua es simétrica por definición — no dirigido.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Cuál de estos ejemplos se modela mejor con un grafo DIRIGIDO?"
tipo: mc
opciones_explicitas:
  - "Un enlace de una página web hacia otra (que A enlace a B no implica que B enlace a A)"
  - "Un cable de red que conecta dos computadoras entre sí"
respuesta: "Un enlace de una página web hacia otra (que A enlace a B no implica que B enlace a A)"

explicacion: |
  Los enlaces web son el ejemplo clásico de conexión asimétrica.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["ponderado", "vocabulario"]

enunciado: "¿Qué es un grafo ponderado?"
tipo: mc
opciones_explicitas:
  - "Uno donde cada arista tiene un número (peso) asociado, como una distancia, un costo o un tiempo"
  - "Uno donde cada vértice tiene un tamaño distinto en el dibujo"
  - "Uno que tiene más aristas que vértices"
respuesta: "Uno donde cada arista tiene un número (peso) asociado, como una distancia, un costo o un tiempo"

explicacion: |
  El peso es información adicional a la simple conexión.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["ponderado", "problema"]

variables:
  peso1: uno_de([5, 8])
  peso2: uno_de([3, 6])
  peso3: uno_de([4, 7])

respuesta: peso1 + peso2 + peso3
tipo: input
unidad: "km"

enunciado: "Un camino en un mapa de rutas pasa por 3 tramos, con distancias {peso1} km, {peso2} km y {peso3} km. ¿Cuál es la distancia total del camino?"

pasos:
  - "Distancia total = {peso1} + {peso2} + {peso3} = {peso1 + peso2 + peso3} km"

explicacion: |
  El costo de un camino en un grafo ponderado es la suma de los pesos
  de todas las aristas que lo forman.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["dirigido", "ponderado"]

respuesta: verdadero
tipo: vf

enunciado: "'Dirigido/no dirigido' y 'ponderado/no ponderado' son dos clasificaciones independientes — un grafo puede ser dirigido Y ponderado a la vez, como un mapa de rutas con calles de un sentido y distancias distintas."

explicacion: |
  Son dos preguntas distintas sobre la misma arista, no mutuamente
  excluyentes.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["grado", "vocabulario"]

enunciado: "En un grafo dirigido, ¿cuál es la diferencia entre grado de entrada (in-degree) y grado de salida (out-degree) de un vértice?"
tipo: mc
opciones_explicitas:
  - "El grado de entrada cuenta cuántas aristas LLEGAN a ese vértice; el grado de salida cuenta cuántas aristas SALEN de él"
  - "Son exactamente el mismo número, sólo cambia el nombre"
  - "El grado de entrada sólo existe en grafos no dirigidos"
respuesta: "El grado de entrada cuenta cuántas aristas LLEGAN a ese vértice; el grado de salida cuenta cuántas aristas SALEN de él"

explicacion: |
  En un grafo no dirigido, ambos coinciden en un único 'grado' — la
  distinción sólo aparece cuando las aristas tienen sentido.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado", "problema"]

respuesta: 3
tipo: input

enunciado: "En una red social (grafo dirigido de 'sigue a'), el usuario V es seguido por los usuarios P, Q y R (P→V, Q→V, R→V). ¿Cuál es el grado de ENTRADA de V?"

explicacion: |
  El grado de entrada cuenta las aristas que apuntan HACIA V: 3.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado", "problema"]

respuesta: 2
tipo: input

enunciado: "El mismo usuario V sigue a los usuarios X e Y (V→X, V→Y), y a nadie más. ¿Cuál es el grado de SALIDA de V?"

explicacion: |
  El grado de salida cuenta las aristas que salen DESDE V: 2.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["dirigido"]

respuesta: verdadero
tipo: vf

enunciado: "En un grafo dirigido, que exista la arista A→B no implica que también exista la arista B→A."

explicacion: |
  Es la propiedad que distingue a los grafos dirigidos de los no
  dirigidos.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un buscador web modela internet como un grafo dirigido, donde cada página es un vértice y cada enlace es una arista dirigida. Si la página A tiene un grado de entrada muy alto, ¿qué sugiere eso?"
tipo: mc
opciones_explicitas:
  - "Que muchas otras páginas enlazan hacia A — una señal de que A podría ser una página relevante o popular"
  - "Que la página A enlaza a muchas otras páginas"
  - "Que la página A tiene muy poco contenido"
respuesta: "Que muchas otras páginas enlazan hacia A — una señal de que A podría ser una página relevante o popular"

explicacion: |
  Es, de hecho, la intuición base de algoritmos de ranking de páginas
  web como PageRank.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["ponderado", "problema"]

variables:
  peso1: uno_de([10, 15])
  peso2: uno_de([20, 25])

respuesta: peso1 + peso2
tipo: input
unidad: "minutos"

enunciado: "Un viaje en colectivo tiene dos tramos: el primero tarda {peso1} minutos, el segundo {peso2} minutos. ¿Cuál es el tiempo total del viaje (peso total del camino en el grafo)?"

pasos:
  - "Tiempo total = {peso1} + {peso2} = {peso1 + peso2} minutos"

explicacion: |
  El peso puede representar cualquier magnitud acumulable: distancia,
  tiempo, costo.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["clasificar"]

enunciado: "¿Cuántas combinaciones distintas existen entre 'dirigido/no dirigido' y 'ponderado/no ponderado'?"
tipo: mc
opciones_explicitas:
  - "4: no dirigido no ponderado, no dirigido ponderado, dirigido no ponderado, dirigido ponderado"
  - "2: sólo dirigido o no dirigido, el peso no se combina con eso"
  - "8, porque hay que contar también el tamaño del grafo"
respuesta: "4: no dirigido no ponderado, no dirigido ponderado, dirigido no ponderado, dirigido ponderado"

explicacion: |
  Son dos clasificaciones binarias independientes: 2 × 2 = 4
  combinaciones.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "intermedio"
  tags: ["aplicacion", "clasificar"]

enunciado: "Un mapa de una ciudad con calles de un solo sentido, donde cada tramo tiene una distancia distinta, ¿qué tipo de grafo necesita?"
tipo: mc
opciones_explicitas:
  - "Dirigido (por las calles de un sentido) Y ponderado (por las distancias)"
  - "No dirigido y no ponderado, alcanza con el tipo más simple"
  - "Sólo ponderado, el sentido de las calles no importa para un mapa"
respuesta: "Dirigido (por las calles de un sentido) Y ponderado (por las distancias)"

explicacion: |
  Ignorar el sentido de las calles daría rutas que en la realidad no
  se pueden recorrer.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  seguidores: uno_de([500, 800])
  seguidos: uno_de([50, 90])

respuesta: seguidores > seguidos
tipo: vf

enunciado: "Un perfil tiene {seguidores} seguidores (grado de entrada) y sigue a {seguidos} cuentas (grado de salida). ¿El grado de entrada es MAYOR que el grado de salida?"

explicacion: |
  Es un perfil con más gente que lo sigue de la que él sigue —
  grado de entrada mayor al de salida.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["grado"]

respuesta: verdadero
tipo: vf

enunciado: "En un grafo NO dirigido, la distinción entre grado de entrada y grado de salida no aplica — cada arista 'cuenta' igual en ambos sentidos, así que sólo hace falta un único número de grado por vértice."

explicacion: |
  Es porque en un grafo no dirigido cada arista ya es simétrica de
  entrada.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué es importante elegir bien el tipo de grafo (dirigido/no dirigido, ponderado/no ponderado) antes de resolver un problema real con él?"
tipo: mc
opciones_explicitas:
  - "Porque un algoritmo que ignore el sentido de las conexiones o los pesos puede dar resultados incorrectos para el problema real que se está modelando"
  - "El tipo de grafo elegido nunca afecta el resultado final"
  - "Sólo importa la cantidad de vértices, el tipo de grafo es un detalle decorativo"
respuesta: "Porque un algoritmo que ignore el sentido de las conexiones o los pesos puede dar resultados incorrectos para el problema real que se está modelando"

explicacion: |
  Como el ejemplo de las calles de un sentido: ignorar la dirección
  daría rutas irrealizables.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["ponderado", "problema"]

variables:
  camino_a: uno_de([12, 15])
  camino_b: uno_de([18, 20])

respuesta: camino_a < camino_b
tipo: vf

enunciado: "Entre dos ciudades hay dos caminos posibles en el mapa: el Camino A pesa {camino_a} km en total, el Camino B pesa {camino_b} km. ¿El Camino A es más corto?"

explicacion: |
  En un grafo ponderado, comparar caminos significa comparar la suma
  total de sus pesos.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "avanzado"
  tags: ["ponderado"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque en la mayoría de las aplicaciones reales (distancias, tiempos) los pesos son positivos, matemáticamente un grafo ponderado puede tener pesos negativos, dependiendo de qué represente ese peso."

explicacion: |
  Por ejemplo, en un grafo financiero un peso podría representar una
  ganancia o pérdida en una transacción entre dos cuentas.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_dirigidos_no_dirigidos_y_ponderados"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve clasificar un grafo como dirigido/no dirigido y ponderado/no ponderado?"
tipo: mc
opciones_explicitas:
  - "Para elegir el modelo matemático correcto según las características reales de lo que se quiere representar (¿las conexiones tienen sentido? ¿tienen un costo asociado?)"
  - "Es sólo una diferencia de vocabulario sin ninguna consecuencia práctica"
  - "Sólo se aplica a mapas de rutas, no a otros tipos de grafos"
respuesta: "Para elegir el modelo matemático correcto según las características reales de lo que se quiere representar (¿las conexiones tienen sentido? ¿tienen un costo asociado?)"

explicacion: |
  Es el vocabulario que se retoma en `../caminos-y-ciclos/` y
  `../algoritmos-de-recorrido-bfs-dfs/`.
```

## Sección: grafos-vertices-y-aristas (20 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["grafos", "vocabulario"]

enunciado: "¿Qué es un grafo?"
tipo: mc
opciones_explicitas:
  - "Una estructura formada por un conjunto de vértices (puntos) y un conjunto de aristas (conexiones entre pares de vértices)"
  - "Una tabla de valores numéricos ordenados en filas y columnas"
  - "Otro nombre para un gráfico de barras o de líneas"
respuesta: "Una estructura formada por un conjunto de vértices (puntos) y un conjunto de aristas (conexiones entre pares de vértices)"

explicacion: |
  No confundir con 'gráfico' en el sentido de `../leer-grafico/barras/`
  — acá 'grafo' es una estructura de vértices y conexiones.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es un vértice en un grafo?"
tipo: mc
opciones_explicitas:
  - "Cada uno de los 'puntos' o nodos del grafo"
  - "Cada una de las conexiones entre dos puntos"
  - "La cantidad total de conexiones del grafo"
respuesta: "Cada uno de los 'puntos' o nodos del grafo"

explicacion: |
  También se le llama 'nodo'.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["vocabulario"]

enunciado: "¿Qué es una arista en un grafo?"
tipo: mc
opciones_explicitas:
  - "Una conexión entre dos vértices"
  - "Otro nombre para un vértice aislado"
  - "La cantidad total de vértices del grafo"
respuesta: "Una conexión entre dos vértices"

explicacion: |
  También se le llama 'borde' o 'arco'.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "vocabulario"]

enunciado: "¿Qué es el 'grado' de un vértice?"
tipo: mc
opciones_explicitas:
  - "La cantidad de aristas que tocan a ese vértice"
  - "La cantidad total de vértices del grafo completo"
  - "La distancia más corta hasta otro vértice"
respuesta: "La cantidad de aristas que tocan a ese vértice"

explicacion: |
  Un vértice con grado 3 tiene exactamente 3 aristas conectadas a él.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["vocabulario"]

enunciado: "¿Cuándo se dice que dos vértices son 'adyacentes'?"
tipo: mc
opciones_explicitas:
  - "Cuando hay una arista directa que los conecta"
  - "Cuando tienen exactamente el mismo grado"
  - "Cuando están dibujados uno al lado del otro en el papel"
respuesta: "Cuando hay una arista directa que los conecta"

explicacion: |
  También se dice que son 'vecinos'. La posición en el dibujo no
  importa, sólo la conexión real.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  grafos: [{vertices: 4, grados: [2, 2, 2, 2]}, {vertices: 5, grados: [1, 3, 2, 1, 1]}, {vertices: 4, grados: [1, 3, 1, 1]}]
  idx: uno_de([0, 1, 2])

respuesta: sumar(grafos[idx].grados) / 2
tipo: input

enunciado: "Un grafo con {grafos[idx].vertices} vértices tiene los siguientes grados: {grafos[idx].grados}. ¿Cuántas aristas tiene el grafo?"

pasos:
  - "Suma de los grados = {sumar(grafos[idx].grados)}"
  - "Aristas = suma de grados / 2 = {sumar(grafos[idx].grados) / 2}"

explicacion: |
  Cada arista se cuenta dos veces al sumar los grados (una vez por
  cada extremo) — por eso se divide por 2.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los grados de TODOS los vértices de un grafo siempre da un número par, sin excepción."

explicacion: |
  Es el 'lema del apretón de manos': cada arista aporta exactamente 2
  al total (1 por cada extremo).
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "completar"]

tipo: completar
enunciado: "Completá: la suma de los grados de todos los vértices de un grafo es igual a ___ veces la cantidad de aristas."
respuestas_validas:
  - "2"
  - "dos"

explicacion: |
  suma de grados = 2 × cantidad de aristas.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  grafos: [{vertices: 4, grados: [2, 2, 2, 2]}, {vertices: 5, grados: [1, 3, 2, 1, 1]}, {vertices: 4, grados: [1, 3, 1, 1]}]
  idx: uno_de([0, 1, 2])

respuesta: redondear(promedio(grafos[idx].grados), 2)
tipo: input
tolerancia_abs: 0.01

enunciado: "Con los grados {grafos[idx].grados} de un grafo de {grafos[idx].vertices} vértices, ¿cuál es el grado promedio de sus vértices?"

pasos:
  - "Grado promedio = promedio({grafos[idx].grados}) = {redondear(promedio(grafos[idx].grados), 2)}"

explicacion: |
  Es el mismo cálculo de `../media-mediana-y-moda/`, aplicado a la
  lista de grados.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["problema"]

respuesta: 5
tipo: input

enunciado: "Un grafo tiene vértices A, B, C, D y las siguientes aristas: A-B, B-C, C-D, D-A, A-C. ¿Cuántas aristas tiene en total?"

explicacion: |
  Se cuentan directo las conexiones listadas: 5 aristas.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "problema"]

respuesta: 3
tipo: input

enunciado: "En el grafo con aristas A-B, B-C, C-D, D-A, A-C, ¿cuál es el grado del vértice A?"

pasos:
  - "Las aristas que tocan a A son: A-B, D-A, A-C — 3 aristas"

explicacion: |
  Se cuentan sólo las aristas que tienen a A en alguno de sus dos
  extremos.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En una red social modelada como grafo, ¿qué representan los vértices y qué representan las aristas?"
tipo: mc
opciones_explicitas:
  - "Los vértices son las personas (perfiles); las aristas son las relaciones de amistad o de seguimiento entre ellas"
  - "Los vértices son las publicaciones; las aristas son los 'me gusta'"
  - "No se puede modelar una red social como un grafo"
respuesta: "Los vértices son las personas (perfiles); las aristas son las relaciones de amistad o de seguimiento entre ellas"

explicacion: |
  Es el ejemplo más citado de aplicación real de teoría de grafos.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En un mapa de rutas modelado como grafo, ¿qué representan los vértices y qué representan las aristas?"
tipo: mc
opciones_explicitas:
  - "Los vértices son las ciudades; las aristas son los caminos directos entre pares de ciudades"
  - "Los vértices son los caminos; las aristas son las ciudades"
  - "Un mapa de rutas no se puede representar como un grafo"
respuesta: "Los vértices son las ciudades; las aristas son los caminos directos entre pares de ciudades"

explicacion: |
  Es la base de cualquier GPS o app de rutas: encontrar el mejor
  camino en un grafo de ciudades conectadas.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["conjuntos", "aplicacion"]

enunciado: "¿Qué relación tiene un grafo con `../conjuntos-pertenencia-e-inclusion/`?"
tipo: mc
opciones_explicitas:
  - "Un grafo es un conjunto de vértices, junto con una relación (las aristas) entre pares de ellos — la misma idea de conjuntos aplicada a modelar conexiones"
  - "No tiene ninguna relación real con los conjuntos"
  - "Un grafo reemplaza por completo la necesidad de conjuntos"
respuesta: "Un grafo es un conjunto de vértices, junto con una relación (las aristas) entre pares de ellos — la misma idea de conjuntos aplicada a modelar conexiones"

explicacion: |
  Es el prerrequisito formal de este módulo.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["representacion", "vocabulario"]

enunciado: "¿Cuáles son formas válidas de representar un grafo?"
tipo: mc
opciones_explicitas:
  - "Un dibujo de puntos y líneas, una lista de aristas, o una matriz de adyacencia"
  - "Sólo se puede representar con un dibujo, no hay otra forma"
  - "Sólo se puede representar con una fórmula algebraica"
respuesta: "Un dibujo de puntos y líneas, una lista de aristas, o una matriz de adyacencia"

explicacion: |
  La matriz de adyacencia es la forma que más se usa para procesar
  grafos por computadora.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado", "problema"]

respuesta: 0
tipo: input

enunciado: "Un grafo tiene 5 vértices y ninguna arista (todos están aislados entre sí). ¿Cuál es el grado de cualquiera de sus vértices?"

explicacion: |
  Sin ninguna arista que lo toque, el grado de cada vértice es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "avanzado"
  tags: ["grado", "problema"]

variables:
  vertices: uno_de([4, 5, 6])

respuesta: vertices - 1
tipo: input

enunciado: "En un grafo de {vertices} vértices, sin conexiones repetidas ni un vértice conectado consigo mismo, ¿cuál es el grado MÁXIMO posible que puede tener un vértice?"

pasos:
  - "Como mucho, se conecta con todos los demás vértices: {vertices} − 1 = {vertices - 1}"

explicacion: |
  Un vértice no puede conectarse consigo mismo ni tener dos aristas
  distintas hacia el mismo vecino, así que el máximo es 'todos los
  demás vértices'.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "intermedio"
  tags: ["grado"]

respuesta: verdadero
tipo: vf

enunciado: "Un vértice puede tener grado 0 (estar completamente aislado, sin ninguna arista que lo conecte a otro vértice)."

explicacion: |
  Un grafo no tiene por qué tener todos sus vértices conectados entre
  sí — eso se retoma en `../caminos-y-ciclos/` y
  `../arboles-grafo-sin-ciclos/`.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "En una red de computadoras modelada como grafo, si un dispositivo tiene grado 5, ¿qué significa?"
tipo: mc
opciones_explicitas:
  - "Que ese dispositivo tiene 5 conexiones directas (cables o inalámbricas) hacia otros dispositivos de la red"
  - "Que ese dispositivo procesa 5 veces más rápido que los demás"
  - "Que la red tiene en total 5 dispositivos"
respuesta: "Que ese dispositivo tiene 5 conexiones directas (cables o inalámbricas) hacia otros dispositivos de la red"

explicacion: |
  Es la aplicación directa del concepto de grado a una red real.
```

```
metadata:
  materia: "matematicas"
  tema: "grafos_vertices_y_aristas"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve modelar una situación como un grafo (vértices y aristas)?"
tipo: mc
opciones_explicitas:
  - "Para representar y analizar matemáticamente cualquier sistema de 'cosas conectadas entre sí': redes sociales, mapas de rutas, redes de computadoras, y muchos otros sistemas"
  - "Sólo sirve para dibujar diagramas, sin ninguna utilidad de cálculo"
  - "Sólo se aplica a problemas de geometría"
respuesta: "Para representar y analizar matemáticamente cualquier sistema de 'cosas conectadas entre sí': redes sociales, mapas de rutas, redes de computadoras, y muchos otros sistemas"

explicacion: |
  Es el vocabulario base para `../grafos-dirigidos-no-dirigidos-y-ponderados/`,
  `../caminos-y-ciclos/`, `../arboles-grafo-sin-ciclos/` y
  `../algoritmos-de-recorrido-bfs-dfs/`.
```

## Sección: hora-y-reloj (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(2, 10)

respuesta: horas * 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos minutos hay en {horas} horas?"

explicacion: |
  1 hora son 60 minutos: se multiplica la cantidad de horas por 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "conversion"]

variables:
  minutos: random(2, 20)

respuesta: minutos * 60
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos segundos hay en {minutos} minutos?"

explicacion: |
  1 minuto son 60 segundos: se multiplica la cantidad de minutos por 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra

respuesta: horas
tipo: input
tolerancia_abs: 0

enunciado: "{total} minutos, ¿cuántas horas COMPLETAS son?"

pasos:
  - "{total} ÷ 60 = {horas} horas, con {minutos_extra} minutos sobrando"

explicacion: |
  Se divide por 60 y se toma la parte entera del cociente.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "conversion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra

respuesta: minutos_extra
tipo: input
tolerancia_abs: 0

enunciado: "{total} minutos son {horas} horas, ¿y cuántos minutos más?"

explicacion: |
  Los minutos que sobran son el resto de dividir el total por 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_12: random(1, 11)

respuesta: hora_12 + 12
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_12} PM, en formato 24 horas, ¿qué hora son?"

explicacion: |
  Para pasar de PM a formato 24 horas (salvo el 12 del mediodía), se
  suma 12.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_24: random(13, 23)

respuesta: hora_24 - 12
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_24} en formato 24 horas, ¿qué hora son en formato 12 horas (PM)?"

explicacion: |
  Para pasar de formato 24 horas a PM, se resta 12.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

respuesta: 12
tipo: input
tolerancia_abs: 0

enunciado: "El mediodía (12 PM), en formato 24 horas, ¿qué hora es?"

explicacion: |
  Es el único caso PM que no cambia al pasar a formato 24 horas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 10)
  minutos: random(0, 59)
  horas_de_diferencia: random(1, 5)
  hora_fin: hora_inicio + horas_de_diferencia

respuesta: horas_de_diferencia
tipo: input
tolerancia_abs: 0

enunciado: "Entre las {hora_inicio} horas y {minutos} minutos, y las {hora_fin} horas y {minutos} minutos, ¿cuántas horas completas pasaron?"

explicacion: |
  Con el mismo minuto en los dos horarios, alcanza con restar las horas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "duracion"]

variables:
  min_inicio: random(30, 50)
  min_fin: random(0, min_inicio - 1)
  hora_inicio: random(1, 8)
  hora_fin: hora_inicio + random(1, 4)
  total_inicio: hora_inicio * 60 + min_inicio
  total_fin: hora_fin * 60 + min_fin

respuesta: total_fin - total_inicio
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos minutos pasaron entre las {hora_inicio} horas y {min_inicio} minutos, y las {hora_fin} horas y {min_fin} minutos?"

pasos:
  - "Todo en minutos: {total_inicio} y {total_fin}. {total_fin} - {total_inicio} = {total_fin - total_inicio}"

explicacion: |
  Cuando los minutos de llegada son menos que los de salida, conviene
  pasar todo a minutos totales antes de restar, en vez de restar por
  columnas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 8)
  min_inicio: random(0, 29)
  min_agregados: random(1, 29)

respuesta: min_inicio + min_agregados
tipo: input
tolerancia_abs: 0

enunciado: "Empezás algo a las {hora_inicio} horas y {min_inicio} minutos, y dura {min_agregados} minutos más. ¿A los cuántos minutos termina (sin cambiar de hora)?"

explicacion: |
  Sumando los minutos sin pasar de 60, la hora no cambia.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "duracion"]

variables:
  hora_inicio: random(1, 8)
  min_inicio: random(30, 55)
  min_agregados: random(20, 50)
  total: min_inicio + min_agregados

respuesta: hora_inicio + floor(total / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Empezás algo a las {hora_inicio} horas y {min_inicio} minutos, y dura {min_agregados} minutos más. ¿A qué hora completa cae el final (sin contar los minutos)?"

pasos:
  - "{min_inicio} + {min_agregados} = {total} minutos, que son {floor(total / 60)} hora(s) más: {hora_inicio} + {floor(total / 60)} = {hora_inicio + floor(total / 60)}"

explicacion: |
  Cuando los minutos suman 60 o más, se "lleva" 1 a la hora, igual que
  llevar una decena en una suma común, pero acá llevando de a 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 hora equivale a 60 minutos."

explicacion: |
  El tiempo se mide en base 60, no en base 10.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 minuto equivale a 60 segundos."

explicacion: |
  Mismo sistema sexagesimal que horas y minutos.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj"]

variables:
  horas: random(2, 10)
  correcto: horas * 60

respuesta: correcto
tipo: mc
opciones_explicitas:
  - correcto
  - horas * 100
  - horas + 60

enunciado: "¿Cuántos minutos hay en {horas} horas?"

explicacion: |
  Las otras opciones confunden la base 60 con la base 10 (multiplicar por
  100), o mezclan mal las unidades.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "verificacion"]

variables:
  horas: random(1, 6)
  minutos_extra: random(1, 59)
  total: horas * 60 + minutos_extra
  error: uno_de([0, 0, 0, 1, -1])
  horas_mostradas: horas + error

respuesta: (horas_mostradas == horas)
tipo: vf

enunciado: "¿Está bien calculado esto? {total} minutos son {horas_mostradas} horas completas (y algunos minutos más)."

explicacion: |
  Se verifica dividiendo el total por 60 y comparando la parte entera.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj"]

variables:
  min_inicio: random(0, 40)
  min_agregados: random(5, 19)

tipo: completar
enunciado: "{min_inicio} minutos más ___ minutos da {min_inicio + min_agregados} minutos. Completá cuántos minutos se agregaron."
respuestas_validas:
  - min_agregados

explicacion: |
  Se despeja restando: {min_inicio + min_agregados} - {min_inicio}.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  total_minutos: random(80, 179)

respuesta: floor(total_minutos / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Una película dura {total_minutos} minutos. ¿Cuántas horas COMPLETAS dura?"

explicacion: |
  Se divide por 60 y se toma la parte entera.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "avanzado"
  tags: ["hora_y_reloj", "problema"]

variables:
  hora_salida: random(6, 10)
  min_salida: random(30, 55)
  duracion_min: random(20, 50)
  total: min_salida + duracion_min

respuesta: hora_salida + floor(total / 60)
tipo: input
tolerancia_abs: 0

enunciado: "Un colectivo sale a las {hora_salida} horas y {min_salida} minutos, y el viaje dura {duracion_min} minutos. ¿A qué hora completa llega (sin contar los minutos)?"

explicacion: |
  Sumar la duración al horario de salida, llevando a la hora si los
  minutos pasan de 60.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  min_actual: random(1, 59)

respuesta: 60 - min_actual
tipo: input
tolerancia_abs: 0

enunciado: "Son las {min_actual} minutos de la hora en curso. ¿Cuántos minutos faltan para que se cumpla la hora completa (el próximo :00)?"

explicacion: |
  Faltan 60 menos los minutos que ya pasaron.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "orden"]

tipo: ordenar
enunciado: "Ordená estos horarios del más temprano al más tarde."
opciones_explicitas:
  - "9 horas y 45 minutos"
  - "9 horas y 5 minutos"
  - "10 horas y 15 minutos"
  - "9 horas y 30 minutos"
respuesta_orden: ["9 horas y 5 minutos", "9 horas y 30 minutos", "9 horas y 45 minutos", "10 horas y 15 minutos"]

explicacion: |
  Primero se compara la hora; si empata, se compara el minuto.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "comparacion"]

variables:
  min1: random(30, 90)
  min2: random(30, 90)

restricciones:
  - min1 != min2

respuesta: (min1 > min2)
tipo: vf

enunciado: "¿Dura más una actividad de {min1} minutos que una de {min2} minutos?"

explicacion: |
  Se comparan directamente los minutos totales.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al restar horarios, si los minutos de llegada son menos que los de salida, se le pide prestada 1 hora (60 minutos) a la columna de las horas."

explicacion: |
  Es el mismo mecanismo que pedir prestada una decena en una resta común,
  pero acá se presta de a 60 en vez de a 10.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

variables:
  hora_am: random(1, 11)

respuesta: hora_am
tipo: input
tolerancia_abs: 0

enunciado: "Las {hora_am} AM, en formato 24 horas, ¿qué hora son (el número de la hora no cambia)?"

explicacion: |
  Las horas AM (salvo la medianoche) se escriben igual en formato 24
  horas.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "formato"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "La medianoche (12 AM), en formato 24 horas, ¿qué hora es?"

explicacion: |
  Es el único caso AM que sí cambia el número: la medianoche es la hora 0.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "intermedio"
  tags: ["hora_y_reloj", "problema"]

variables:
  min_por_recreo: random(10, 20)
  cantidad: random(2, 5)

respuesta: min_por_recreo * cantidad
tipo: input
tolerancia_abs: 0

enunciado: "Cada recreo dura {min_por_recreo} minutos, y hay {cantidad} recreos por día. ¿Cuántos minutos de recreo hay en total?"

explicacion: |
  Multiplicar la duración de cada recreo por la cantidad de recreos.
```

```
metadata:
  materia: "matematicas"
  tema: "hora_y_reloj"
  nivel: "basico"
  tags: ["hora_y_reloj", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El tiempo (horas, minutos, segundos) se mide en base 60, un sistema distinto al decimal que se usa para casi todo lo demás."

explicacion: |
  Es la idea central de todo el tema: contar y operar en grupos de 60, no
  de 10.
```
