# Examen jefe — [PENDIENTE #782]

> Logro #782. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **120 preguntas totales** en 5/5 secciones.

---

## Sección: valor-esperado-riesgo (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

enunciado: "¿Qué es el valor esperado de una inversión con varios resultados posibles?"
tipo: mc
opciones_explicitas:
  - "El promedio de los resultados posibles, ponderado por la probabilidad de cada uno"
  - "El mejor resultado posible entre todos los escenarios"
  - "El resultado que va a ocurrir con seguridad"
respuesta: "El promedio de los resultados posibles, ponderado por la probabilidad de cada uno"

explicacion: |
  No es lo que "seguro" va a pasar: es un promedio pesado según qué tan
  probable es cada escenario.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las probabilidades de todos los escenarios posibles de una inversión siempre suman 1 (o 100%)."

explicacion: |
  Si faltara algún escenario posible, o si sumaran más de 1, no serían
  probabilidades válidas.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "calculo"]

variables:
  prob_exito: random(20, 90)
  ganancia: random(10, 80) * 1000
  perdida: random(10, 80) * 1000

respuesta: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida
tipo: input
tolerancia_abs: 1

enunciado: "Una inversión tiene {prob_exito}% de probabilidad de ganar ${ganancia}, y {100 - prob_exito}% de probabilidad de perder ${perdida}. ¿Cuál es el valor esperado?"

pasos:
  - "E(X) = {prob_exito/100} × {ganancia} - {1 - prob_exito/100} × {perdida}"

explicacion: |
  Se multiplica cada resultado por su probabilidad, y se suman (la
  pérdida entra restando).
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos inversiones pueden tener exactamente el mismo valor esperado y, aun así, tener niveles de riesgo muy distintos."

explicacion: |
  El valor esperado resume el promedio, pero no dice nada sobre qué tan
  dispersos están los resultados posibles alrededor de ese promedio.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

enunciado: "En este contexto, ¿qué es el riesgo de una inversión?"
tipo: mc
opciones_explicitas:
  - "Qué tan dispersos (lejos del valor esperado) pueden estar los resultados reales"
  - "La probabilidad de que la inversión gane plata"
  - "El valor esperado con el signo cambiado"
respuesta: "Qué tan dispersos (lejos del valor esperado) pueden estar los resultados reales"

explicacion: |
  Una inversión sin dispersión (siempre da el mismo resultado) no tiene
  riesgo, sin importar cuál sea el valor esperado.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "problema"]

variables:
  x: random(5, 50) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Inversión A paga siempre ${x}, garantizado. Inversión B tiene 50% de probabilidad de pagar ${2 * x} y 50% de probabilidad de pagar $0. ¿Las dos inversiones tienen el mismo valor esperado?"

pasos:
  - "E(A) = {x}"
  - "E(B) = 0,5 × {2 * x} + 0,5 × 0 = {0.5 * (2 * x)}"

explicacion: |
  Ambas dan un valor esperado de ${x} — el promedio ponderado es
  idéntico, aunque los resultados posibles sean muy distintos.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "problema"]

variables:
  x: random(5, 50) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Con Inversión A (siempre ${x}, garantizado) e Inversión B (50% de ${2 * x}, 50% de $0), ¿B es más riesgosa que A, aunque tengan el mismo valor esperado?"

explicacion: |
  En B, el resultado real puede terminar siendo el doble del esperado o
  cero; en A, el resultado siempre es exactamente el esperado. Esa
  dispersión es, justamente, el riesgo.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["riesgo", "calculo"]

variables:
  p: random(20, 80)
  ganancia: random(10, 60) * 1000
  perdida: random(10, 60) * 1000
  esperado: (p / 100) * ganancia - (1 - p / 100) * perdida
  varianza: (p / 100) * (ganancia - esperado) ^ 2 + (1 - p / 100) * (-perdida - esperado) ^ 2

respuesta: sqrt(varianza)
tipo: input
tolerancia_abs: 5

enunciado: "Una inversión tiene {p}% de probabilidad de ganar ${ganancia}, y {100 - p}% de probabilidad de perder ${perdida} (valor esperado: ${redondear(esperado, 2)}). ¿Cuál es el desvío estándar, como medida de riesgo?"

pasos:
  - "Varianza = {p/100} × (ganancia - E(X))² + {1 - p/100} × (-pérdida - E(X))²"
  - "Desvío estándar = √Varianza"

explicacion: |
  El desvío estándar es la raíz cuadrada de la varianza: promedia, según
  probabilidad, qué tan lejos está cada resultado posible del valor
  esperado.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

enunciado: "¿Qué mide el desvío estándar de una inversión?"
tipo: mc
opciones_explicitas:
  - "Qué tan dispersos están los resultados posibles alrededor del valor esperado"
  - "El resultado más probable de todos"
  - "La diferencia entre el mejor resultado y el valor esperado, nada más"
respuesta: "Qué tan dispersos están los resultados posibles alrededor del valor esperado"

explicacion: |
  Es una medida de riesgo: cuanto más alto, más lejos pueden terminar
  los resultados reales del promedio esperado.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una inversión con desvío estándar igual a 0 (como un plazo fijo garantizado a tasa fija) no tiene riesgo: siempre da el mismo resultado."

explicacion: |
  Sin dispersión de resultados posibles, no hay incertidumbre sobre lo
  que va a pasar.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto mayor es el desvío estándar de una inversión, mayor es su riesgo."

explicacion: |
  Es, justamente, lo que mide el desvío estándar: dispersión de los
  resultados posibles.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["riesgo", "comparacion"]

variables:
  p_a: random(40, 60)
  ganancia_a: random(20, 30) * 1000
  perdida_a: random(20, 30) * 1000
  esperado_a: (p_a / 100) * ganancia_a - (1 - p_a / 100) * perdida_a
  varianza_a: (p_a / 100) * (ganancia_a - esperado_a) ^ 2 + (1 - p_a / 100) * (-perdida_a - esperado_a) ^ 2
  desvio_a: sqrt(varianza_a)
  p_b: random(10, 30)
  ganancia_b: random(60, 100) * 1000
  perdida_b: random(60, 100) * 1000
  esperado_b: (p_b / 100) * ganancia_b - (1 - p_b / 100) * perdida_b
  varianza_b: (p_b / 100) * (ganancia_b - esperado_b) ^ 2 + (1 - p_b / 100) * (-perdida_b - esperado_b) ^ 2
  desvio_b: sqrt(varianza_b)

respuesta: (desvio_b > desvio_a)
tipo: vf

enunciado: "Inversión A: {p_a}% de ganar ${ganancia_a} o {100 - p_a}% de perder ${perdida_a}. Inversión B: {p_b}% de ganar ${ganancia_b} o {100 - p_b}% de perder ${perdida_b}. ¿La inversión B es más riesgosa que la A (mayor desvío estándar)?"

explicacion: |
  Hay que calcular el desvío estándar de cada una y comparar — ni la
  probabilidad ni los montos solos alcanzan para saber cuál es más
  riesgosa.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que una inversión sea más riesgosa (mayor desvío estándar) no garantiza que tenga un valor esperado más alto."

explicacion: |
  Son dos medidas distintas: una inversión puede ser muy riesgosa y
  tener, además, un valor esperado bajo o incluso negativo.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En general, las inversiones con más riesgo tienden a ofrecer, en promedio, un valor esperado más alto que las de bajo riesgo — nadie asumiría más riesgo sin la posibilidad de una recompensa mayor."

explicacion: |
  Es la relación riesgo-retorno: un plazo fijo (bajo riesgo) suele
  ofrecer un rendimiento esperado menor que una acción (más riesgo).
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["valor_esperado", "calculo"]

variables:
  ganancia: random(20, 80) * 1000
  perdida: random(20, 80) * 1000
  prob_exito: random(30, 80)
  esperado: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida

respuesta: prob_exito
tipo: input
tolerancia_abs: 0.5

enunciado: "Una inversión puede ganar ${ganancia} o perder ${perdida}, y su valor esperado es ${redondear(esperado, 2)}. ¿Qué probabilidad de ganar (en %) tiene esa inversión?"

explicacion: |
  Se despeja la probabilidad de la ecuación del valor esperado, con los
  dos resultados posibles ya conocidos.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Contratar un seguro suele implicar un valor esperado ligeramente negativo para quien lo contrata (paga, en promedio, un poco más de lo que espera cobrar), a cambio de reducir su riesgo de una pérdida grande e inesperada."

explicacion: |
  Es la lectura inversa del valor esperado: se paga una prima fija por
  transferirle el riesgo a otro (la aseguradora).
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Diversificar (repartir el dinero en varias inversiones en vez de una sola) es una forma de reducir el riesgo total, sin necesariamente reducir el valor esperado."

explicacion: |
  Es uno de los pocos "beneficios gratis" en finanzas: bajar el riesgo
  sin sacrificar el promedio esperado.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["riesgo", "orden"]

tipo: ordenar
enunciado: "Ordená estas inversiones de menor a mayor riesgo típico (menor a mayor desvío estándar de sus resultados posibles)."
opciones_explicitas:
  - "Acciones de una sola empresa"
  - "Plazo fijo a tasa fija"
  - "Fondo diversificado de varias empresas"
respuesta_orden: ["Plazo fijo a tasa fija", "Fondo diversificado de varias empresas", "Acciones de una sola empresa"]

explicacion: |
  El plazo fijo casi no tiene dispersión de resultados; diversificar en
  varias empresas reduce el riesgo frente a apostar todo a una sola.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "intermedio"
  tags: ["valor_esperado", "verificacion"]

variables:
  prob_exito: random(20, 90)
  ganancia: random(10, 80) * 1000
  perdida: random(10, 80) * 1000
  correcto: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida
  error: uno_de([0, 0, 0, 2000, -2000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {prob_exito}% de ganar ${ganancia}, {100 - prob_exito}% de perder ${perdida}, valor esperado informado: ${redondear(mostrado, 2)}."

explicacion: |
  Se vuelve a calcular E(X) y se compara con el valor informado.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "avanzado"
  tags: ["valor_esperado"]

variables:
  prob_exito: random(30, 80)
  ganancia: random(20, 80) * 1000
  perdida: random(20, 80) * 1000
  esperado: (prob_exito / 100) * ganancia - (1 - prob_exito / 100) * perdida

tipo: completar
enunciado: "Una inversión tiene {prob_exito}% de probabilidad de ganar ${ganancia}, y {100 - prob_exito}% de probabilidad de perder cierto monto. Su valor esperado es ${redondear(esperado, 2)}. Completá: ___ (monto de la pérdida) = {perdida}."
respuestas_validas:
  - perdida

explicacion: |
  Se despeja el monto de la pérdida de la ecuación del valor esperado,
  con la probabilidad y la ganancia ya conocidas.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado de una inversión no es lo que \"seguro\" vas a ganar: es un promedio ponderado entre resultados posibles que pueden no ocurrir nunca exactamente así."

explicacion: |
  En el ejemplo clásico (50% de ganar el doble, 50% de perder todo), el
  resultado real nunca es el valor esperado — siempre es uno de los dos
  extremos.
```

```
metadata:
  materia: "economia"
  tema: "valor_esperado_riesgo"
  nivel: "basico"
  tags: ["valor_esperado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado resume el promedio ponderado por probabilidad de los resultados posibles; el riesgo mide qué tan dispersos pueden estar esos resultados reales alrededor de ese promedio — son dos preguntas distintas sobre la misma inversión."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: vision-y-mision-organizacional (28 preguntas)

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["mision", "definicion"]

variables:
  contexto: uno_de(["pyme", "multinacional", "startup"])
  enfoque: uno_de(["clientes", "productos", "servicios"])

respuesta: "mision"
tipo: input

enunciado: "En una {contexto}, la declaración que define 'qué hacemos', 'para quién' y 'cómo' se refiere a la {enfoque} actual. ¿Cuál es el nombre de este concepto estratégico?"

explicacion: |
  La misión describe el propósito presente de la organización, definiendo su negocio principal y su mercado objetivo.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["vision", "tiempo"]

variables:
  tiempo: uno_de(["futuro", "presente"])
  concepto: uno_de(["vision", "mision"])

respuesta: falso
tipo: vf

enunciado: "La {concepto} se centra exclusivamente en el {tiempo} inmediato de la empresa."

explicacion: |
  La visión es una proyección a largo plazo (futuro), mientras que la misión se centra en el presente.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["eficiencia", "recursos"]

variables:
  sin_mision: "falso"
  sin_vision: "falso"

respuesta: verdadero
tipo: vf

enunciado: "Sin una misión clara, los recursos financieros y humanos tienden a dispersarse, generando ineficiencia."

explicacion: |
  La misión alinea los esfuerzos hacia objetivos comunes, evitando la duplicidad de tareas y el desperdicio de recursos escasos.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["mision", "proposito"]

variables:
  palabra1: "mision"
  palabra2: "propósito"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "La ___ responde a la pregunta: ¿Qué hacemos? Y ¿Para quién lo hacemos?"

explicacion: |
  La misión define el propósito actual y el negocio principal de la organización.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["adaptabilidad", "mision"]

variables:
  cambio_mercado: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La misión es estática y nunca debe cambiar, incluso si el mercado lo requiere."

explicacion: |
  La misión es más concreta y operativa; puede cambiar si el mercado lo requiere o si la empresa decide pivotar su modelo de negocio.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["identificacion", "mision"]

variables:
  texto: uno_de(["Proveer alimentos saludables a bajo costo", "Ser la líder global en nutrición en 2030"])

respuesta: "mision"
tipo: input

enunciado: "Si la frase es '{texto}', ¿a qué concepto corresponde?"

explicacion: |
  Proveer alimentos es una acción presente y operativa, característica de la misión.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["identificacion", "vision"]

variables:
  texto: uno_de(["Ser la líder global en nutrición en 2030", "Proveer alimentos saludables a bajo costo"])

respuesta: "vision"
tipo: input

enunciado: "Si la frase es '{texto}', ¿a qué concepto corresponde?"

explicacion: |
  Ser líder en el futuro es una proyección aspiracional, característica de la visión.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["eficiencia", "operacion"]

variables:
  clave: "mision"

respuesta: verdadero
tipo: vf

enunciado: "La misión ayuda a evitar la duplicidad de tareas operativas."

explicacion: |
  Al definir el negocio principal y los clientes, la misión guía las decisiones diarias y alinea esfuerzos.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["comparacion", "tiempo"]

variables:
  palabra1: "mision"
  palabra2: "vision"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "Mientras la ___ es el presente, la visión es el futuro deseado."

explicacion: |
  La misión define el propósito actual, mientras que la visión proyecta el futuro.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["competitividad", "estrategia"]

variables:
  factor: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Tener misión y visión claras es una herramienta de competitividad en mercados con recursos escasos."

explicacion: |
  La claridad estratégica permite una mejor asignación de recursos y una respuesta más ágil frente a la competencia.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["equipo", "alineacion"]

variables:
  resultado: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La misión alinea los esfuerzos del equipo hacia objetivos comunes."

explicacion: |
  Al definir el propósito, la misión asegura que cada acción contribuya al centro del negocio.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["diferencia", "operativa"]

variables:
  palabra1: "mision"
  palabra2: "vision"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "La ___ es más concreta y operativa que la visión."

explicacion: |
  La misión describe el negocio actual y es más susceptible a cambios operativos inmediatos.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["recursos", "escasez"]

variables:
  contexto: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En mercados con recursos escasos, la falta de rumbo genera dispersión de esfuerzos."

explicacion: |
  Sin misión y visión claras, los recursos se dispersan, reduciendo la eficiencia y competitividad.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["mision", "preguntas"]

variables:
  pregunta: uno_de(["¿Qué hacemos?", "¿Qué queremos ser?"])

respuesta: "mision"
tipo: input

enunciado: "Si la pregunta es '{pregunta}', ¿a qué concepto corresponde?"

explicacion: |
  '¿Qué hacemos?' es la pregunta central de la misión.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["vision", "preguntas"]

variables:
  pregunta: uno_de(["¿Qué queremos ser?", "¿Qué hacemos?"])

respuesta: "vision"
tipo: input

enunciado: "Si la pregunta es '{pregunta}', ¿a qué concepto corresponde?"

explicacion: |
  '¿Qué queremos ser?' es la pregunta central de la visión.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["inversion", "estabilidad"]

variables:
  relacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Una visión sólida atrae inversores al proyectar estabilidad a largo plazo."

explicacion: |
  Los inversores buscan confianza en el crecimiento futuro, algo que la visión comunica.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["metfora", "brujula"]

variables:
  palabra1: "brújula"
  palabra2: "brujula"

respuesta: "brújula"
tipo: completar
respuestas_validas:
  - "brújula"
  - "brujula"

enunciado: "Estas declaraciones son la ___ que permite navegar la incertidumbre."

explicacion: |
  La metáfora de la brújula ilustra la guía estratégica que ofrecen la misión y la visión.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["eficiencia", "tareas"]

variables:
  efecto: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "La misión ayuda a evitar la duplicidad de tareas."

explicacion: |
  Al tener un propósito claro, se evitan esfuerzos redundantes y se optimiza el trabajo.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["resumen", "diferencia"]

variables:
  palabra1: "mision"
  palabra2: "vision"

respuesta: "mision"
tipo: completar
respuestas_validas:
  - "mision"
  - "misión"

enunciado: "La ___ es el 'qué', la visión es el 'hacia dónde'."

explicacion: |
  La misión define la acción presente, la visión define la dirección futura.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["preguntas", "propósito", "qué"]

variables:
  pregunta: uno_de(["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cuánto ganamos?"])

respuesta: "¿Qué hacemos?"
tipo: mc

enunciado: "¿Cuál de estas preguntas responde directamente a la definición de la misión?"

opciones: 4
opciones_explicitas: ["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cómo crecemos?", "¿Dónde invertimos?"]

explicacion: |
  La misión responde a: ¿Qué hacemos? ¿Para quién? y ¿Cómo lo hacemos?
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["preguntas", "futuro", "hacia dónde"]

variables:
  pregunta: uno_de(["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cuánto ganamos?"])

respuesta: "¿Qué queremos ser?"
tipo: mc

enunciado: "¿Cuál de estas preguntas responde directamente a la definición de la visión?"

opciones: 4
opciones_explicitas: ["¿Qué hacemos?", "¿Qué queremos ser?", "¿Cuánto ganamos?", "¿Dónde invertimos?"]

explicacion: |
  La visión responde a: ¿Qué queremos ser en el futuro?
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["características", "concreta", "operativa"]

variables:
  adjetivo: uno_de(["concreta", "abstracta", "vaga", "temporal"])

respuesta: "concreta"
tipo: mc

enunciado: "La misión se caracteriza por ser más {adjetivo} y operativa que la visión."

opciones: 4
opciones_explicitas: ["concreta", "abstracta", "vaga", "temporal"]

explicacion: |
  La misión es más concreta y operativa porque define el negocio actual. La visión es más abstracta y futura.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["características", "aspiracional", "futuro"]

variables:
  adjetivo: uno_de(["concreta", "abstracta", "vaga", "temporal"])

respuesta: "abstracta"
tipo: mc

enunciado: "La visión se caracteriza por ser más {adjetivo} y aspiracional que la misión."

opciones: 4
opciones_explicitas: ["concreta", "abstracta", "vaga", "temporal"]

explicacion: |
  La visión es una proyección futura, por lo que tiende a ser más abstracta e inspiradora que la misión operativa.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["amenazas", "oportunidades", "entorno"]

variables:
  elemento: uno_de(["amenazas", "fortalezas", "debilidades", "oportunidades"])

respuesta: "oportunidades"
tipo: mc

enunciado: "La visión permite transformar posibles {elemento} del entorno en oportunidades de negocio."

opciones: 4
opciones_explicitas: ["amenazas", "oportunidades", "fortalezas", "debilidades"]

explicacion: |
  La visión permite anticipar cambios y convertir amenazas en oportunidades mediante la adaptación proactiva.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "basico"
  tags: ["proyección", "largo plazo", "aspiración"]

variables:
  tiempo: uno_de(["corto", "mediano", "largo"])

respuesta: "largo"
tipo: mc

enunciado: "La visión es una proyección a {tiempo} plazo."

opciones: 4
opciones_explicitas: ["corto", "mediano", "largo", "inmediato"]

explicacion: |
  La visión se enfoca en el futuro lejano, guiando la estrategia a largo plazo.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["decisiones", "diarias", "mapa"]

variables:
  concepto: uno_de(["mapa", "brújula", "espejo", "puente"])

respuesta: "mapa"
tipo: mc

enunciado: "La misión es como el {concepto} que guía las decisiones diarias."

opciones: 4
opciones_explicitas: ["mapa", "brújula", "espejo", "puente"]

explicacion: |
  Se usa la metáfora del "mapa" para la misión porque define el terreno operativo actual y las rutas diarias.
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "intermedio"
  tags: ["dirección", "estratégica", "futuro"]

variables:
  concepto: uno_de(["mapa", "brújula", "espejo", "puente"])

respuesta: "brújula"
tipo: mc

enunciado: "La visión actúa como la {concepto} que orienta la dirección estratégica futura."

opciones: 4
opciones_explicitas: ["mapa", "brújula", "espejo", "puente"]

explicacion: |
  Se usa la metáfora de la "brújula" para la visión porque apunta hacia el norte (futuro deseado).
```

```
metadata:
  materia: "economia"
  tema: "vision_y_mision_organizacional"
  nivel: "avanzado"
  tags: ["resumen", "diferencias", "clave"]

variables:
  mision_tipo: uno_de(["presente", "futuro"])
  vision_tipo: uno_de(["presente", "futuro"])

respuesta: "presente"
tipo: mc

enunciado: "Mientras la misión es el {mision_tipo}, la visión es el {vision_tipo} deseado."

opciones: 4
opciones_explicitas: ["presente", "futuro", "pasado", "eterno"]

explicacion: |
  La misión es el presente operativo; la visión es el futuro deseado. Esta es la diferencia clave temporal.
```

## Sección: fondo-emergencia-diversificacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

enunciado: "¿Qué es un fondo de emergencia?"
tipo: mc
opciones_explicitas:
  - "Una suma de plata guardada aparte, para gastos imprevistos, priorizando poder sacarla rápido"
  - "El dinero que se invierte para hacer crecer el capital a largo plazo"
  - "El monto mínimo que exige un banco para abrir una cuenta"
respuesta: "Una suma de plata guardada aparte, para gastos imprevistos, priorizando poder sacarla rápido"

explicacion: |
  No es una inversión para crecer: es una reserva para lo inesperado,
  pensada para estar disponible cuando haga falta.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

enunciado: "¿Cuál es el principal beneficio de tener un fondo de emergencia armado?"
tipo: mc
opciones_explicitas:
  - "Evita tener que pedir un préstamo caro o vender una inversión en mal momento ante un gasto imprevisto"
  - "Genera el rendimiento más alto posible de todos los ahorros"
  - "Elimina por completo la posibilidad de tener un gasto imprevisto"
respuesta: "Evita tener que pedir un préstamo caro o vender una inversión en mal momento ante un gasto imprevisto"

explicacion: |
  Sin ese fondo, un imprevisto obliga a elegir entre dos opciones malas:
  endeudarse caro, o malvender otra inversión.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia prioriza estar disponible rápido y sin riesgo, aunque eso signifique un rendimiento más bajo que otras inversiones."

explicacion: |
  Ganar menos interés es el costo aceptado a cambio de poder usarlo en
  el momento exacto en que hace falta.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "calculo"]

variables:
  gasto_mensual: random(50, 500) * 1000
  meses_cobertura: uno_de([3, 4, 5, 6])

respuesta: gasto_mensual * meses_cobertura
tipo: input
tolerancia_abs: 0

enunciado: "Los gastos esenciales mensuales de una familia son ${gasto_mensual}. Si se recomienda tener {meses_cobertura} meses de cobertura, ¿cuánto debería tener ahorrado su fondo de emergencia?"

explicacion: |
  Se multiplica el gasto mensual esencial por la cantidad de meses de
  cobertura deseada.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "calculo"]

variables:
  gasto_mensual: random(50, 500) * 1000
  meses_cobertura: uno_de([3, 4, 5, 6])
  monto_ahorrado: gasto_mensual * meses_cobertura

respuesta: meses_cobertura
tipo: input
tolerancia_abs: 0.1

enunciado: "Una familia tiene ${monto_ahorrado} ahorrados, y gasta ${gasto_mensual} por mes en lo esencial. ¿Cuántos meses de cobertura le da ese fondo de emergencia?"

explicacion: |
  Se divide el monto ahorrado por el gasto mensual esencial.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia no es lo mismo que una inversión pensada para hacer crecer el capital a largo plazo."

explicacion: |
  Tienen objetivos distintos: uno busca estar disponible ante lo
  imprevisto, el otro busca crecer con el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Usar el fondo de emergencia ante un gasto imprevisto evita tener que pedir un préstamo a una tasa de interés alta, como la de una tarjeta de crédito."

explicacion: |
  Es plata que ya estaba separada para ese fin, sin necesidad de
  endeudarse.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sin un fondo de emergencia, un gasto imprevisto puede forzar a vender otra inversión justo cuando conviene menos hacerlo (por ejemplo, con esa inversión en baja)."

explicacion: |
  El fondo de emergencia evita quedar obligado a vender algo en el peor
  momento posible.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia se guarda en algo de fácil y rápido acceso, no en un instrumento difícil o lento de convertir en efectivo."

explicacion: |
  Si la plata no está disponible cuando hace falta, no cumple su
  función de fondo de emergencia.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "vocabulario"]

enunciado: "¿Qué es diversificar una inversión?"
tipo: mc
opciones_explicitas:
  - "Repartir el dinero entre varias inversiones distintas, en vez de ponerlo todo en una sola"
  - "Elegir la inversión con el rendimiento esperado más alto posible"
  - "Cambiar de inversión constantemente para aprovechar cada oportunidad"
respuesta: "Repartir el dinero entre varias inversiones distintas, en vez de ponerlo todo en una sola"

explicacion: |
  Es la idea de "no poner todos los huevos en la misma canasta".
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Diversificar reduce el riesgo total de una cartera de inversiones, sin necesariamente reducir su valor esperado."

explicacion: |
  Es uno de los pocos "beneficios gratis" en finanzas: bajar el riesgo
  sin sacrificar el promedio esperado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"No poner todos los huevos en la misma canasta\" es una forma popular de resumir la idea de diversificación."

explicacion: |
  Si se rompe una sola canasta con todos los huevos, se pierden todos;
  repartidos en varias, un problema en una no arrastra al resto.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diversificación reduce más el riesgo cuando los activos elegidos no reaccionan siempre de la misma forma a los mismos eventos."

explicacion: |
  Si dos activos siempre suben y bajan exactamente igual, combinarlos no
  reduce nada el riesgo.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000

respuesta: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
tipo: input
tolerancia_abs: 1

enunciado: "Una heladería gana ${ganancia_a_sol} en un día soleado y ${ganancia_a_lluvia} en un día lluvioso. La probabilidad de que un día sea soleado es {p_sol}%. ¿Cuál es la ganancia esperada de la heladería?"

pasos:
  - "E(heladería) = {p_sol/100} × {ganancia_a_sol} + {1 - p_sol/100} × {ganancia_a_lluvia}"

explicacion: |
  Se pondera cada resultado posible por su probabilidad, igual que
  cualquier valor esperado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000

respuesta: (p_sol / 100) * ganancia_b_sol + (1 - p_sol / 100) * ganancia_b_lluvia
tipo: input
tolerancia_abs: 1

enunciado: "Una fábrica de paraguas gana ${ganancia_b_sol} en un día soleado y ${ganancia_b_lluvia} en un día lluvioso. La probabilidad de que un día sea soleado es {p_sol}%. ¿Cuál es la ganancia esperada de la fábrica?"

pasos:
  - "E(paraguas) = {p_sol/100} × {ganancia_b_sol} + {1 - p_sol/100} × {ganancia_b_lluvia}"

explicacion: |
  Es la misma fórmula que en la heladería, con los resultados invertidos
  entre día soleado y lluvioso.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  esperado_b: (p_sol / 100) * ganancia_b_sol + (1 - p_sol / 100) * ganancia_b_lluvia

respuesta: 0.5 * esperado_a + 0.5 * esperado_b
tipo: input
tolerancia_abs: 1

enunciado: "Con la heladería (ganancia esperada ${redondear(esperado_a, 2)}) y la fábrica de paraguas (ganancia esperada ${redondear(esperado_b, 2)}), alguien invierte la mitad de su plata en cada una. ¿Cuál es la ganancia esperada del portafolio combinado?"

pasos:
  - "E(portafolio) = 0,5 × {redondear(esperado_a, 2)} + 0,5 × {redondear(esperado_b, 2)}"

explicacion: |
  El valor esperado del portafolio es el promedio ponderado de los
  valores esperados de cada activo.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado de un portafolio con varios activos es siempre el promedio ponderado (según cuánto se invirtió en cada uno) de los valores esperados individuales — eso no cambia por diversificar."

explicacion: |
  Lo que baja al diversificar es el riesgo, no el valor esperado
  combinado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  varianza_a: (p_sol / 100) * (ganancia_a_sol - esperado_a) ^ 2 + (1 - p_sol / 100) * (ganancia_a_lluvia - esperado_a) ^ 2

respuesta: sqrt(varianza_a)
tipo: input
tolerancia_abs: 3

enunciado: "Invirtiendo todo en la heladería (ganancia esperada ${redondear(esperado_a, 2)}, {p_sol}% de probabilidad de día soleado), ¿cuál es el desvío estándar de ese resultado?"

explicacion: |
  Se calcula la varianza ponderando cada resultado posible según su
  distancia al valor esperado, y se toma la raíz cuadrada.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  resultado_sol: 0.5 * ganancia_a_sol + 0.5 * ganancia_b_sol
  resultado_lluvia: 0.5 * ganancia_a_lluvia + 0.5 * ganancia_b_lluvia
  esperado_portafolio: (p_sol / 100) * resultado_sol + (1 - p_sol / 100) * resultado_lluvia
  varianza_portafolio: (p_sol / 100) * (resultado_sol - esperado_portafolio) ^ 2 + (1 - p_sol / 100) * (resultado_lluvia - esperado_portafolio) ^ 2

respuesta: sqrt(varianza_portafolio)
tipo: input
tolerancia_abs: 3

enunciado: "Invirtiendo la mitad en la heladería y la mitad en la fábrica de paraguas, ¿cuál es el desvío estándar del resultado combinado?"

explicacion: |
  Como las dos ganan en climas opuestos, el resultado combinado varía
  mucho menos entre un día soleado y uno lluvioso que cualquiera de las
  dos por separado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "comparacion"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  varianza_a: (p_sol / 100) * (ganancia_a_sol - esperado_a) ^ 2 + (1 - p_sol / 100) * (ganancia_a_lluvia - esperado_a) ^ 2
  resultado_sol: 0.5 * ganancia_a_sol + 0.5 * ganancia_b_sol
  resultado_lluvia: 0.5 * ganancia_a_lluvia + 0.5 * ganancia_b_lluvia
  esperado_portafolio: (p_sol / 100) * resultado_sol + (1 - p_sol / 100) * resultado_lluvia
  varianza_portafolio: (p_sol / 100) * (resultado_sol - esperado_portafolio) ^ 2 + (1 - p_sol / 100) * (resultado_lluvia - esperado_portafolio) ^ 2

respuesta: (varianza_portafolio < varianza_a)
tipo: vf

enunciado: "Comparando invertir todo en la heladería contra invertir la mitad en la heladería y la mitad en la fábrica de paraguas, ¿el portafolio combinado tiene menor riesgo (menor varianza) que invertir todo en la heladería sola?"

explicacion: |
  Como ganan en climas opuestos, combinarlas amortigua la variación
  total — el portafolio combinado queda más estable que cualquiera de
  las dos por separado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "orden"]

tipo: ordenar
enunciado: "Ordená estas tres formas de invertir de menor a mayor riesgo."
opciones_explicitas:
  - "Todo el dinero en las acciones de una sola empresa"
  - "Plazo fijo a tasa fija"
  - "Portafolio diversificado en muchas empresas distintas"
respuesta_orden: ["Plazo fijo a tasa fija", "Portafolio diversificado en muchas empresas distintas", "Todo el dinero en las acciones de una sola empresa"]

explicacion: |
  El plazo fijo prácticamente no tiene riesgo; diversificar reduce el
  riesgo frente a apostar todo a una sola empresa, pero sigue teniendo
  más riesgo que un instrumento garantizado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia es la reserva líquida y de bajo riesgo para lo imprevisto; la diversificación es repartir el resto de las inversiones para reducir el riesgo total sin sacrificar el valor esperado — las dos son piezas del mismo objetivo: manejar mejor el riesgo de la vida financiera de una persona."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: estudio-de-contexto-para-un-proyecto (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["comparacion", "niveles"]

respuesta: verdadero
tipo: vf

enunciado: "El nivel local se refiere al entorno inmediato y directo (normativa municipal, barrio), mientras que el nivel regional abarca un ámbito más amplio como una provincia o factores macroeconómicos."

explicacion: |
  Correcto. El nivel local es el microentorno inmediato, y el regional es el macroentorno que influye de manera más general.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["macroentorno", "control"]

respuesta: falso
tipo: vf

enunciado: "Los factores del entorno regional, como la tasa de cambio o la inflación, son controlables directamente por la organización mediante sus decisiones operativas."

explicacion: |
  Falso. Los factores del macroentorno (regional) no son controlables por la organización, solo condicionan su operación.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["definicion", "microentorno", "macroentorno"]

variables:
  nivel: uno_de(["local", "regional"])

respuesta: "entorno"
tipo: completar

enunciado: "El estudio de contexto analiza el {nivel} en el que se desarrolla una organización para identificar oportunidades y amenazas."

explicacion: |
  El estudio de contexto se enfoca en analizar el entorno (local o regional) para entender las condiciones externas que afectan a la organización.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "actores"]

variables:
  actor: uno_de(["clientes", "proveedores", "competidores"])

respuesta: actor
tipo: input

enunciado: "Menciona un actor clave del microentorno que define la viabilidad del producto o servicio: {actor}."

explicacion: |
  Los clientes, proveedores y competidores son los tres pilares del microentorno según la teoría presentada.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["macroentorno", "herramientas", "pest"]

variables:
  siglas: uno_de(["PEST", "FODA", "SWOT"])

respuesta: "PEST"
tipo: input

enunciado: "¿Qué herramienta se utiliza comúnmente para analizar el entorno regional considerando factores Políticos, Económicos, Sociales y Tecnológicos? {siglas}."

explicacion: |
  El análisis PEST es la herramienta estándar para el macroentorno. FODA/SWOT es más general para la estrategia interna/externa combinada.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "argentina", "inflacion"]

variables:
  factor: uno_de(["tasa de cambio", "inflación", "empleo"])

respuesta: "inflación"
tipo: input

enunciado: "En el contexto argentino, las fluctuaciones en {factor} son un factor macroeconómico crítico que condiciona la operación de las organizaciones."

explicacion: |
  La inflación y la tasa de cambio son factores clave del macroentorno en Argentina que afectan costos y precios.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["importancia", "estrategia"]

variables:
  riesgo: uno_de(["cimientos inestables", "errores de cálculo", "falta de visión"])

respuesta: "cimientos inestables"
tipo: completar

enunciado: "Sin un diagnóstico previo del contexto, las estrategias se construyen sobre {riesgo}."

explicacion: |
  El texto enfatiza que sin el estudio de contexto, las estrategias carecen de base real y solidez.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["oportunidades", "amenazas"]

variables:
  tipo_factor: uno_de(["oportunidades", "amenazas"])

respuesta: "amenazas"
tipo: input

enunciado: "El estudio de contexto permite identificar {tipo_factor} que podrían poner en riesgo el proyecto."

explicacion: |
  El objetivo dual del análisis es encontrar oportunidades de crecimiento y amenazas potenciales.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "geografia"]

variables:
  factor: uno_de(["accesibilidad", "mano de obra", "cultura"])

respuesta: "accesibilidad"
tipo: input

enunciado: "La {factor} a una zona comercial es un determinante clave en el análisis del entorno local."

explicacion: |
  La accesibilidad física es un elemento crítico del microentorno que afecta la llegada de clientes y proveedores.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "cultura"]

variables:
  elemento: uno_de(["cultura vecinal", "normativa municipal", "infraestructura"])

respuesta: "cultura vecinal"
tipo: input

enunciado: "La {elemento} puede influir en el éxito del proyecto al definir la aceptación social inmediata."

explicacion: |
  La cultura local es parte del microentorno y afecta cómo la comunidad recibe el proyecto.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "legal"]

variables:
  ambito: uno_de(["municipal", "provincial", "nacional"])

respuesta: "municipal"
tipo: input

enunciado: "La normativa {ambito} es parte del entorno local que la organización debe cumplir diariamente."

explicacion: |
  Las leyes y regulaciones locales son parte del microentorno inmediato.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "proveedores"]

variables:
  impacto: uno_de(["costos", "calidad", "innovacion"])

respuesta: "costos"
tipo: input

enunciado: "La confiabilidad y los {impacto} de los proveedores impactan directamente en la cadena de valor."

explicacion: |
  Los proveedores afectan tanto el costo final como la calidad del producto/servicio.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "competencia"]

variables:
  medio: uno_de(["precios", "calidad", "innovacion"])

respuesta: "innovacion"
tipo: input

enunciado: "La presencia de competidores obliga a diferenciarse mediante {medio}, entre otros factores."

explicacion: |
  La competencia fuerza a la organización a buscar ventajas competitivas como innovación, precio o calidad.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "finanzas"]

variables:
  variable: uno_de(["tasa de cambio", "inflación", "PIB"])

respuesta: "tasa de cambio"
tipo: input

enunciado: "Las fluctuaciones en la {variable} son un ejemplo de factor macroeconómico en Argentina."

explicacion: |
  La tasa de cambio es un indicador clave del macroentorno económico argentino.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "clientes"]

variables:
  actor: uno_de(["clientes"])

respuesta: "clientes"
tipo: input

enunciado: "La satisfacción y comportamiento de los {actor} definen la viabilidad del producto o servicio."

explicacion: |
  Sin clientes satisfechos, el producto no es viable, independientemente de otros factores.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["estrategia", "riesgo"]

variables:
  consecuencia: uno_de(["fracaso", "éxito", "estabilidad"])

respuesta: "fracaso"
tipo: input

enunciado: "Ignorar las condiciones locales corre el riesgo de llevar al {consecuencia} del proyecto."

explicacion: |
  El texto advierte que ignorar el contexto local puede llevar al fracaso por falta de adaptación.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["planificacion", "recursos"]

variables:
  accion: uno_de(["priorizar", "desperdiciar", "ignorar"])

respuesta: "priorizar"
tipo: input

enunciado: "El análisis de niveles ayuda a {accion} los recursos de manera eficiente."

explicacion: |
  Entender el contexto permite asignar recursos donde realmente importan.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "recursos humanos"]

variables:
  disponibilidad: uno_de(["disponibilidad", "costo", "ubicacion"])

respuesta: "disponibilidad"
tipo: input

enunciado: "La {disponibilidad} de mano de obra calificada en la ciudad es un factor local determinante."

explicacion: |
  La oferta de talento local es parte del microentorno y afecta la capacidad operativa.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["herramientas", "pest"]

variables:
  componente: uno_de(["Político", "Económico", "Social", "Tecnológico"])

respuesta: "Político"
tipo: input

enunciado: "En el análisis PEST, la 'P' se refiere al factor {componente}."

explicacion: |
  PEST: Político, Económico, Social, Tecnológico.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "mercado"]

variables:
  factor: uno_de(["factores macroeconómicos", "factores microeconómicos"])

respuesta: "factores macroeconómicos"
tipo: input

enunciado: "En el nivel regional, los {factor} influyen en la demanda y la oferta de manera general."

explicacion: |
  Los factores macroeconómicos afectan el mercado en su conjunto, no solo a una empresa.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "adaptacion"]

variables:
  riesgo: uno_de(["riesgo", "oportunidad", "ventaja"])

respuesta: "riesgo"
tipo: input

enunciado: "No adaptarse a las necesidades específicas de la comunidad inmediata es un {riesgo}."

explicacion: |
  La adaptación local es crucial para evitar riesgos de rechazo o fracaso.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "infraestructura"]

variables:
  elemento: uno_de(["infraestructura", "normativa", "cultura"])

respuesta: "infraestructura"
tipo: input

enunciado: "La {elemento} disponible juega un papel determinante en el entorno local."

explicacion: |
  La infraestructura (transporte, servicios) es parte del entorno físico local.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["vision", "mision", "contexto"]

variables:
  concepto: uno_de(["visión", "misión", "estrategia"])

respuesta: "visión"
tipo: input

enunciado: "No basta con saber la {concepto} o la misión; es crucial entender el escenario real."

explicacion: |
  La visión/misión son internas; el contexto es externo. Ambos deben alinearse.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["estrategia", "entorno"]

variables:
  elemento: uno_de(["reglas del juego", "costos fijos", "beneficios"])

respuesta: "reglas del juego"
tipo: input

enunciado: "Ignorar el contexto es ignorar las {elemento} económicas y sociales."

explicacion: |
  El contexto define las "reglas del juego" bajo las cuales opera la organización.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "calidad"]

variables:
  medio: uno_de(["calidad", "precio", "ubicacion"])

respuesta: "calidad"
tipo: input

enunciado: "La organización puede diferenciarse mediante la {medio} frente a la competencia."

explicacion: |
  La calidad es una vía de diferenciación estratégica en el microentorno.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["resumen", "importancia"]

variables:
  resultado: uno_de(["oportunidades", "amenazas", "ambas"])

respuesta: "ambas"
tipo: input

enunciado: "El estudio de contexto permite identificar {resultado} para el proyecto."

explicacion: |
  El estudio sirve tanto para detectar oportunidades como amenazas.
```

## Sección: seguros (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

enunciado: "¿Qué es, en esencia, contratar un seguro?"
tipo: mc
opciones_explicitas:
  - "Transferirle a otro (la aseguradora) el riesgo de una pérdida grande, a cambio de un pago fijo y chico"
  - "Eliminar por completo la posibilidad de sufrir una pérdida"
  - "Invertir plata para obtener una ganancia garantizada"
respuesta: "Transferirle a otro (la aseguradora) el riesgo de una pérdida grande, a cambio de un pago fijo y chico"

explicacion: |
  El seguro no hace desaparecer el riesgo: lo traslada de una persona a
  la aseguradora, a cambio de un pago.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

enunciado: "¿Qué es la prima de un seguro?"
tipo: mc
opciones_explicitas:
  - "El pago periódico que el asegurado le hace a la aseguradora para mantener la cobertura"
  - "El monto que paga la aseguradora cuando ocurre un siniestro"
  - "El documento del contrato entre asegurado y aseguradora"
respuesta: "El pago periódico que el asegurado le hace a la aseguradora para mantener la cobertura"

explicacion: |
  Es lo que se paga, sin importar si ocurre o no un siniestro en ese
  período.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

enunciado: "¿Qué es la póliza de un seguro?"
tipo: mc
opciones_explicitas:
  - "El documento del contrato entre asegurado y aseguradora, con la cobertura y las condiciones"
  - "El pago mensual que se hace por el seguro"
  - "El monto que el asegurado paga de su bolsillo en cada siniestro"
respuesta: "El documento del contrato entre asegurado y aseguradora, con la cobertura y las condiciones"

explicacion: |
  Ahí figura qué está cubierto, cuánto cuesta la prima, y las
  condiciones del contrato.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

enunciado: "¿Qué es la cobertura de un seguro?"
tipo: mc
opciones_explicitas:
  - "Qué situaciones (y hasta qué monto) paga la aseguradora"
  - "El pago que hace el asegurado cada mes"
  - "El organismo que regula a las aseguradoras"
respuesta: "Qué situaciones (y hasta qué monto) paga la aseguradora"

explicacion: |
  Ningún seguro cubre absolutamente todo: la póliza también lista las
  exclusiones (lo que no está cubierto).
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

enunciado: "¿Qué es un siniestro?"
tipo: mc
opciones_explicitas:
  - "El evento cubierto que efectivamente ocurre, y que dispara el derecho a reclamar el pago"
  - "El monto fijo que paga el asegurado cada mes"
  - "El documento que prueba el contrato del seguro"
respuesta: "El evento cubierto que efectivamente ocurre, y que dispara el derecho a reclamar el pago"

explicacion: |
  Es lo que activa el mecanismo del seguro: sin siniestro, no hay pago
  de la aseguradora (más allá de que se siga pagando la prima).
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "vocabulario"]

enunciado: "¿Qué es la franquicia (o deducible) de un seguro?"
tipo: mc
opciones_explicitas:
  - "Un monto que el asegurado paga de su bolsillo en cada siniestro, antes de que la aseguradora pague el resto"
  - "El pago total que hace la aseguradora al asegurado por un siniestro"
  - "Otro nombre para la prima mensual"
respuesta: "Un monto que el asegurado paga de su bolsillo en cada siniestro, antes de que la aseguradora pague el resto"

explicacion: |
  Es la parte del costo del siniestro que queda a cargo del asegurado,
  fijada de antemano en la póliza.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La aseguradora calcula la prima en base al valor esperado del costo de los siniestros (probabilidad × costo promedio), más un margen para sus gastos y ganancia."

explicacion: |
  Por eso la prima suele ser mayor que el valor esperado puro del
  siniestro: la aseguradora necesita ese margen para poder funcionar.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Contratar un seguro implica, en general, aceptar un valor esperado levemente negativo (pagar en promedio un poco más de lo que se espera cobrar), a cambio de reducir el riesgo de una pérdida grande."

explicacion: |
  Es la misma idea de valor esperado y riesgo aplicada al seguro: se
  paga por tener menos incertidumbre, no para "ganar en promedio".
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Una póliza con franquicia más alta suele tener una prima más baja, porque la aseguradora asume menos riesgo al cubrir menos del costo total de cada siniestro."

explicacion: |
  Es un intercambio: menos prima mensual, a cambio de más costo de
  bolsillo si ocurre un siniestro.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "comparacion"]

variables:
  franquicia_baja: random(5, 20) * 1000
  franquicia_alta: random(50, 100) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Comparando dos pólizas del mismo auto: una con franquicia de ${franquicia_baja} y otra con franquicia de ${franquicia_alta}, ¿es esperable que la de ${franquicia_alta} de franquicia tenga la prima mensual más baja?"

explicacion: |
  A mayor franquicia, menor riesgo para la aseguradora, y por lo tanto
  menor prima — es la relación esperada entre ambas.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "calculo"]

variables:
  costo_siniestro: random(50, 500) * 1000
  franquicia: random(5, 50) * 1000

respuesta: max(costo_siniestro - franquicia, 0)
tipo: input
tolerancia_abs: 0

enunciado: "Un siniestro cuesta ${costo_siniestro}. La póliza tiene una franquicia de ${franquicia}. ¿Cuánto paga la aseguradora?"

pasos:
  - "La aseguradora paga el costo del siniestro menos la franquicia: {costo_siniestro} - {franquicia}"

explicacion: |
  El asegurado absorbe el monto de la franquicia; la aseguradora cubre
  el resto del costo del siniestro.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "vocabulario"]

variables:
  franquicia: random(50, 100) * 1000
  costo_siniestro: random(5, 40) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Un siniestro cuesta ${costo_siniestro}, y la franquicia de la póliza es de ${franquicia}. ¿La aseguradora no paga nada en este caso?"

explicacion: |
  Si el costo del siniestro es menor a la franquicia, todo el costo
  queda a cargo del asegurado.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["gestion_riesgo", "vocabulario"]

enunciado: "De las 4 estrategias de gestión del riesgo (evitar, reducir, retener, transferir), ¿cuál corresponde a contratar un seguro?"
tipo: mc
opciones_explicitas:
  - "Transferir"
  - "Evitar"
  - "Retener"
respuesta: "Transferir"

explicacion: |
  Contratar un seguro es pasarle el riesgo a otro (la aseguradora) a
  cambio de un pago.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["gestion_riesgo", "vocabulario"]

enunciado: "¿Cuál de las 4 estrategias de gestión del riesgo es directamente no realizar la actividad riesgosa?"
tipo: mc
opciones_explicitas:
  - "Evitar"
  - "Reducir"
  - "Transferir"
respuesta: "Evitar"

explicacion: |
  Es la estrategia más directa: si no se hace la actividad, ese riesgo
  puntual desaparece por completo.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["gestion_riesgo", "vocabulario"]

enunciado: "¿Cuál de las 4 estrategias de gestión del riesgo es asumir el riesgo uno mismo, sin transferirlo a nadie?"
tipo: mc
opciones_explicitas:
  - "Retener"
  - "Transferir"
  - "Evitar"
respuesta: "Retener"

explicacion: |
  Tiene sentido cuando el riesgo es chico y afrontable — por ejemplo, no
  asegurar un objeto de bajo valor.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["gestion_riesgo", "vocabulario"]

enunciado: "Instalar una alarma en la casa o usar casco en la moto, ¿a cuál de las 4 estrategias de gestión del riesgo corresponde?"
tipo: mc
opciones_explicitas:
  - "Reducir"
  - "Transferir"
  - "Retener"
respuesta: "Reducir"

explicacion: |
  No elimina el riesgo ni lo transfiere: lo hace menos probable o menos
  grave si ocurre.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["gestion_riesgo", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Contratar un seguro es una de varias formas posibles de gestionar un riesgo, no la única — también se puede evitar, reducir o retener el riesgo."

explicacion: |
  Lo habitual, de hecho, es combinar varias estrategias a la vez (por
  ejemplo, reducir el riesgo manejando con precaución y además
  transferir lo que queda con un seguro).
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina, la Superintendencia de Seguros de la Nación (SSN) es el organismo que regula y supervisa a las aseguradoras."

explicacion: |
  Es el organismo estatal encargado de controlar a las compañías de
  seguros que operan en el país.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "avanzado"
  tags: ["seguros", "problema"]

variables:
  probabilidad_siniestro: random(1, 10)
  costo_siniestro: random(200, 2000) * 1000
  margen: random_float(1.2, 2.0)
  prima_anual: (probabilidad_siniestro / 100) * costo_siniestro * margen

respuesta: verdadero
tipo: vf

enunciado: "Una persona tiene {probabilidad_siniestro}% de probabilidad de sufrir un siniestro que le costaría ${redondear(costo_siniestro, 0)}. Asegurarse le cuesta una prima anual de ${redondear(prima_anual, 0)}. En términos de valor esperado PURO (sólo plata, sin considerar la aversión al riesgo), ¿no contratar el seguro da, en promedio, un resultado numérico mejor que contratarlo?"

pasos:
  - "Valor esperado sin seguro: -{probabilidad_siniestro/100} × {costo_siniestro} = {-(probabilidad_siniestro/100) * costo_siniestro}"
  - "Valor esperado con seguro (sólo la prima, con cobertura completa): -{redondear(prima_anual, 0)}"

explicacion: |
  Como la prima incluye el margen de la aseguradora, en valor esperado
  puro casi siempre conviene más no asegurarse — pero eso no significa
  que no convenga hacerlo (ver la próxima pregunta).
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque en valor esperado puro la mayoría de la gente \"pierde\" un poco al asegurarse, igual conviene hacerlo: el seguro no se contrata para ganar en promedio, sino para no quedar expuesto a una pérdida que la persona no podría afrontar."

explicacion: |
  Es la aversión al riesgo: preferir un costo chico y seguro (la prima)
  antes que una probabilidad chica de una pérdida enorme.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "intermedio"
  tags: ["seguros"]

variables:
  costo_siniestro: random(50, 500) * 1000
  franquicia: random(5, 50) * 1000
  paga_aseguradora: max(costo_siniestro - franquicia, 0)

tipo: completar
enunciado: "Un siniestro cuesta ${costo_siniestro}, con una franquicia de ${franquicia}. El asegurado paga ${franquicia} de su bolsillo. Completá: ___ (lo que paga la aseguradora) = {costo_siniestro} (costo del siniestro) - {franquicia} (franquicia)."
respuestas_validas:
  - paga_aseguradora

explicacion: |
  La aseguradora cubre el costo del siniestro que queda después de
  restar la franquicia.
```

```
metadata:
  materia: "economia"
  tema: "seguros"
  nivel: "basico"
  tags: ["seguros", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un seguro transfiere el riesgo de una pérdida grande a cambio de una prima; la cobertura, el siniestro y la franquicia definen qué paga la aseguradora y qué queda a cargo del asegurado — y es sólo una de las 4 estrategias posibles para gestionar un riesgo (evitar, reducir, retener, transferir)."

explicacion: |
  Es la idea central de todo el tema.
```

