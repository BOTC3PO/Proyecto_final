# Cívica — El sueldo promedio de un país: uso político de la cifra (cuestionario, 20 preguntas VBLang)

> Tema: `C1` (ángulo cívico). Ver `teoria.md` en esta misma carpeta.

---

### 1 — Dos afirmaciones verdaderas, distinta impresión

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["uso_politico", "vocabulario"]

enunciado: "Frente a la misma base de datos de ingresos, un discurso dice 'el salario promedio subió', y otro dice 'el salario típico casi no se movió'. ¿Qué es lo más probable?"
tipo: mc
opciones_explicitas:
  - "Que ambas afirmaciones sean técnicamente verdaderas, cada una citando una medida distinta (media vs. mediana) de la misma distribución de ingresos"
  - "Que una de las dos afirmaciones necesariamente sea falsa o esté inventada"
  - "Que sea imposible que dos afirmaciones distintas sobre el mismo tema sean ambas correctas"
respuesta: "Que ambas afirmaciones sean técnicamente verdaderas, cada una citando una medida distinta (media vs. mediana) de la misma distribución de ingresos"

explicacion: |
  El problema no es que alguna mienta con los números, sino que cada
  una elige la medida que más conviene a lo que quiere mostrar.
```

### 2 — Por qué elegir la mediana puede convenir a una crítica

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["uso_politico", "aplicacion"]

enunciado: "¿Por qué un sector crítico de una gestión podría preferir citar la mediana de ingresos en vez del promedio?"
tipo: mc
opciones_explicitas:
  - "Porque la mediana describe mejor lo que le pasa a 'la persona típica', sin la distorsión que meten los ingresos muy altos de una minoría en el promedio"
  - "Porque la mediana siempre da un número más favorable para cualquier crítica, sin ninguna razón estadística real"
  - "Porque la mediana es más fácil de calcular que el promedio"
respuesta: "Porque la mediana describe mejor lo que le pasa a 'la persona típica', sin la distorsión que meten los ingresos muy altos de una minoría en el promedio"

explicacion: |
  Es la misma razón estadística de `../../economia/sueldo-promedio-pais/`,
  ahora usada como argumento en un debate.
```

### 3 — Ambas cifras pueden ser correctas a la vez

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["uso_politico"]

respuesta: verdadero
tipo: vf

enunciado: "'El promedio subió' y 'la mediana casi no se movió' pueden ser dos afirmaciones matemáticamente correctas al mismo tiempo, sobre la misma base de datos."

explicacion: |
  Media y mediana miden cosas distintas — ninguna de las dos es 'la
  mentira' por definición.
```

### 4 — Qué es el cherry-picking estadístico

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["cherry_picking", "vocabulario"]

enunciado: "¿Qué es el 'cherry-picking' estadístico?"
tipo: mc
opciones_explicitas:
  - "Elegir selectivamente la medida, el período o la fuente de datos que más respalda el argumento que se quiere hacer, ignorando el resto de la información disponible"
  - "Inventar datos falsos que no salen de ninguna fuente real"
  - "Usar siempre el promedio en vez de la mediana, sin excepción"
respuesta: "Elegir selectivamente la medida, el período o la fuente de datos que más respalda el argumento que se quiere hacer, ignorando el resto de la información disponible"

explicacion: |
  A diferencia de inventar datos, el cherry-picking usa datos reales
  — pero elegidos con la conclusión ya decidida de antemano.
```

### 5 — El cherry-picking no es exclusivo de un sector

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["cherry_picking", "neutralidad"]

respuesta: verdadero
tipo: vf

enunciado: "El cherry-picking estadístico en el debate público no es un recurso exclusivo de ningún partido, gobierno u oposición en particular — el mismo patrón (elegir la medida o el período que más conviene) aparece en cualquier posición política."

explicacion: |
  Es una tentación general de cualquier argumento que necesite
  respaldo numérico, sin importar la postura ideológica de quien lo
  usa.
```

### 6 — Términos reales vs. nominales

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["terminos_reales", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre un aumento de sueldo 'en términos nominales' y 'en términos reales'?"
tipo: mc
opciones_explicitas:
  - "Nominal es el número tal cual, sin ajustar; real está ajustado por inflación, y muestra si de verdad se puede comprar más o menos con ese sueldo"
  - "Son exactamente lo mismo, sólo cambia el nombre"
  - "Real es el aumento antes de impuestos; nominal es después de impuestos"
respuesta: "Nominal es el número tal cual, sin ajustar; real está ajustado por inflación, y muestra si de verdad se puede comprar más o menos con ese sueldo"

explicacion: |
  Un aumento nominal puede convivir con una pérdida real de poder
  adquisitivo, si la inflación fue mayor.
```

### 7 — Problema: aumento real aproximado

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["terminos_reales", "problema"]

variables:
  aumento_nominal: uno_de([25, 30, 40])
  inflacion: uno_de([20, 35, 45])

respuesta: aumento_nominal - inflacion
tipo: input
unidad: "%"

enunciado: "Un sueldo tuvo un aumento nominal del {aumento_nominal}% en un período donde la inflación fue del {inflacion}%. ¿Cuál es el aumento REAL aproximado (en puntos porcentuales)?"

pasos:
  - "Aumento real aproximado = {aumento_nominal}% − {inflacion}% = {aumento_nominal - inflacion} puntos"

explicacion: |
  Si el resultado es negativo, el poder adquisitivo BAJÓ aunque el
  número nominal del sueldo haya subido.
```

### 8 — Un aumento nominal puede ser una pérdida real

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["terminos_reales"]

respuesta: verdadero
tipo: vf

enunciado: "Es posible que un sueldo tenga un aumento nominal (el número en pesos sube) y, al mismo tiempo, represente una PÉRDIDA de poder adquisitivo, si la inflación del período fue mayor que ese aumento."

explicacion: |
  Es la situación descrita en el problema anterior cuando el aumento
  real aproximado da negativo.
```

### 9 — Problema: comparar dos anuncios con la misma base

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["terminos_reales", "problema"]

variables:
  aumento_nominal: 30
  inflacion_a: 25
  inflacion_b: 38

respuesta: (aumento_nominal - inflacion_a) > (aumento_nominal - inflacion_b)
tipo: vf

enunciado: "Con el mismo aumento nominal del {aumento_nominal}%, en el Período A la inflación fue {inflacion_a}% y en el Período B fue {inflacion_b}%. ¿El aumento REAL del Período A fue MAYOR que el del Período B?"

explicacion: |
  Con la misma suba nominal, una inflación más baja siempre deja un
  resultado real más favorable.
```

### 10 — Qué preguntar frente a una cifra citada en un discurso

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Al escuchar en un discurso 'el sueldo promedio subió X%', ¿qué preguntas conviene hacerse antes de sacar una conclusión?"
tipo: mc
opciones_explicitas:
  - "¿Es promedio o mediana? ¿Está en términos reales o nominales? ¿Qué período cubre? ¿Cuál es la fuente primaria de ese dato?"
  - "Ninguna: cualquier cifra citada en un discurso oficial se puede aceptar directamente sin revisar nada más"
  - "Sólo importa quién lo dijo, no qué datos usó"
respuesta: "¿Es promedio o mediana? ¿Está en términos reales o nominales? ¿Qué período cubre? ¿Cuál es la fuente primaria de ese dato?"

explicacion: |
  Son las cuatro preguntas básicas para leer con cuidado cualquier
  estadística económica citada en público.
```

### 11 — Por qué conviene mirar series históricas

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué comparar una serie histórica completa (varios años) suele ser más confiable que mirar un solo dato puntual?"
tipo: mc
opciones_explicitas:
  - "Porque un solo dato puede ser el mejor (o el peor) momento de una tendencia más larga, y no representar el panorama completo"
  - "Porque los datos históricos son siempre más precisos que los datos recientes"
  - "No hay ninguna ventaja real en mirar series históricas"
respuesta: "Porque un solo dato puede ser el mejor (o el peor) momento de una tendencia más larga, y no representar el panorama completo"

explicacion: |
  Es el mismo argumento que justifica desconfiar de un gráfico que
  sólo muestra el rango de tiempo más favorable.
```

### 12 — Elegir el período favorable, mismo patrón que el eje truncado

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["uso_politico", "eje_truncado"]

respuesta: verdadero
tipo: vf

enunciado: "Citar sólo el mejor mes o trimestre de una serie de datos, ignorando la tendencia completa, es un tipo de manipulación de la lectura de datos parecido en espíritu a truncar el eje de un gráfico: los datos no se inventan, pero se elige qué parte mostrar."

explicacion: |
  Es la conexión directa con `../../matematica/grafico-eje-truncado/`
  — ahí se elegía un rango de eje, acá un rango de tiempo.
```

### 13 — Problema: comparar un mes favorable contra el promedio del año

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["aplicacion", "problema"]

variables:
  mejor_mes: uno_de([8, 10])
  promedio_anual: uno_de([3, 4])

respuesta: mejor_mes > promedio_anual
tipo: vf

enunciado: "El mejor mes del año tuvo un aumento real del {mejor_mes}%, mientras que el promedio de los 12 meses del año fue de {promedio_anual}%. Si un discurso sólo menciona el dato del mejor mes, ¿da una impresión más favorable que el panorama completo del año?"

explicacion: |
  Mostrar sólo el mejor mes, sin aclarar que no es representativo del
  resto del año, es una forma de selección sesgada de los datos.
```

### 14 — Relación con el gráfico de eje truncado

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "intermedio"
  tags: ["eje_truncado", "aplicacion"]

enunciado: "¿Qué tienen en común elegir un 'período favorable' para citar una cifra económica y truncar el eje de un gráfico?"
tipo: mc
opciones_explicitas:
  - "En ambos casos los datos reales no se alteran, pero se elige selectivamente qué mostrar (o cómo mostrarlo) para dar una impresión más favorable de lo que el panorama completo sugeriría"
  - "No tienen absolutamente nada en común"
  - "Ambos casos implican inventar datos falsos"
respuesta: "En ambos casos los datos reales no se alteran, pero se elige selectivamente qué mostrar (o cómo mostrarlo) para dar una impresión más favorable de lo que el panorama completo sugeriría"

explicacion: |
  Es el mismo tipo de escepticismo estadístico aplicado a dos
  contextos distintos.
```

### 15 — Cómo pedir la fuente primaria

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un discurso cita 'el sueldo promedio subió', sin decir de dónde sale el dato. ¿Qué es lo más razonable pedir para poder evaluar esa afirmación?"
tipo: mc
opciones_explicitas:
  - "La fuente primaria del dato (un organismo oficial de estadísticas), el período exacto que cubre, y si está en términos reales o nominales"
  - "Nada: si lo dice un discurso público, no hace falta ninguna fuente adicional"
  - "Sólo importa que la persona que lo dijo tenga un cargo importante"
respuesta: "La fuente primaria del dato (un organismo oficial de estadísticas), el período exacto que cubre, y si está en términos reales o nominales"

explicacion: |
  Sin esos tres datos, la cifra citada no se puede evaluar ni
  contrastar con nada.
```

### 16 — Correcto no siempre es igual a honesto

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["uso_politico"]

respuesta: verdadero
tipo: vf

enunciado: "Que una cifra sea técnicamente correcta (calculada bien, con datos reales) no garantiza que la conclusión que alguien saca de ella sea honesta — depende de qué se eligió mostrar y qué se dejó afuera."

explicacion: |
  Es la idea central de todo el módulo: la honestidad no está sólo en
  el cálculo, sino también en qué se elige comunicar.
```

### 17 — Problema: otro caso de inflación

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["terminos_reales", "problema"]

variables:
  aumento_nominal: uno_de([15, 20])
  inflacion: uno_de([10, 12])

respuesta: aumento_nominal - inflacion
tipo: input
unidad: "%"

enunciado: "Con un aumento nominal del {aumento_nominal}% y una inflación del {inflacion}% en el mismo período, ¿cuál es el aumento real aproximado?"

pasos:
  - "Aumento real aproximado = {aumento_nominal}% − {inflacion}% = {aumento_nominal - inflacion} puntos"

explicacion: |
  Acá el resultado da positivo: el aumento nominal superó a la
  inflación, así que hubo una mejora real del poder adquisitivo.
```

### 18 — Aplicación: dos citas contrapuestas, misma fuente

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["uso_politico", "aplicacion"]

enunciado: "Dos dirigentes de posturas opuestas citan la misma fuente oficial de estadísticas de ingresos: uno dice 'mejoramos el poder adquisitivo', el otro dice 'el poder adquisitivo cayó'. ¿Cómo es posible que ambos citen la misma fuente y digan cosas opuestas?"
tipo: mc
opciones_explicitas:
  - "Puede deberse a que eligieron distintos períodos, distintas medidas (media/mediana), o si el ajuste es en términos reales o nominales — la misma fuente permite varias lecturas según qué recorte se elija"
  - "Es matemáticamente imposible, uno de los dos necesariamente está mintiendo sobre la fuente"
  - "Sólo es posible si uno de los dos usa datos de otro país"
respuesta: "Puede deberse a que eligieron distintos períodos, distintas medidas (media/mediana), o si el ajuste es en términos reales o nominales — la misma fuente permite varias lecturas según qué recorte se elija"

explicacion: |
  Es el resumen de todo el módulo: misma fuente, distintos recortes,
  distintas conclusiones — todas potencialmente 'correctas' en su
  propio recorte.
```

### 19 — No es "todos mienten", es un patrón de selección

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "avanzado"
  tags: ["neutralidad", "aplicacion"]

enunciado: "¿Cuál es la lectura más precisa de este fenómeno: 'todos los discursos políticos sobre economía mienten' o 'existe un patrón real de selección de datos que conviene poder identificar'?"
tipo: mc
opciones_explicitas:
  - "La segunda: no se trata de que toda cifra política sea falsa, sino de reconocer el patrón de qué medida, período o ajuste se eligió mostrar, para poder evaluar la afirmación con criterio propio"
  - "La primera: cualquier cifra que use un dirigente político es necesariamente falsa"
  - "Ninguna de las dos: no hay forma de que un ciudadano evalúe este tipo de afirmaciones"
respuesta: "La segunda: no se trata de que toda cifra política sea falsa, sino de reconocer el patrón de qué medida, período o ajuste se eligió mostrar, para poder evaluar la afirmación con criterio propio"

explicacion: |
  El objetivo de este módulo es dar herramientas de lectura crítica,
  no fomentar un cinismo generalizado sin criterio.
```

### 20 — Cierre: para qué sirve este módulo

```
metadata:
  materia: "civica"
  tema: "sueldo_promedio_pais"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender cómo se usa la cifra del 'sueldo promedio' en el debate público?"
tipo: mc
opciones_explicitas:
  - "Para poder evaluar con criterio propio las afirmaciones económicas de cualquier discurso político, identificando qué medida, período y ajuste se eligió citar"
  - "Para descartar automáticamente cualquier cifra que mencione un dirigente político"
  - "Sólo sirve para leer noticias de un país en particular"
respuesta: "Para poder evaluar con criterio propio las afirmaciones económicas de cualquier discurso político, identificando qué medida, período y ajuste se eligió citar"

explicacion: |
  Cierra la cadena completa: `../../matematica/cual-miente-y-cuando/`
  → `../../economia/sueldo-promedio-pais/` (la mecánica) → este módulo
  (el uso público de esa mecánica).
```
