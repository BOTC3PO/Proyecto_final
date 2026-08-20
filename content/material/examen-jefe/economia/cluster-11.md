# Examen jefe — Maestro de la Partida Doble

> Logro #197. Completaste el examen jefe dominando oferta, demanda y el origen de la moneda. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **115 preguntas totales** en 5/5 secciones.

---

## Sección: objetivos-y-metas (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

tipo: mc
opciones_explicitas: ["Un objetivo es un resultado específico y cuantificable, mientras que una meta es una aspiración amplia.", "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable.", "Ambos términos son sinónimos y se usan indistintamente en la administración.", "El objetivo es el camino y la meta es el destino final."]

enunciado: "En el ámbito de la administración, ¿cuál es la diferencia fundamental entre un objetivo y una meta?"

explicacion: |
  Los objetivos suelen ser declaraciones amplias de lo que se desea lograr (ej. 'Ser líderes en el mercado'), mientras que las metas son pasos específicos, medibles y con un tiempo determinado para alcanzar esos objetivos (ej. 'Aumentar las ventas un 10% en el primer trimestre').
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metas", "smart"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Incrementar la satisfacción del cliente en un 15% para diciembre de 2024.", "Mejorar la calidad del servicio."],
    ["Reducir los costos operativos en un 5% durante el próximo semestre.", "Gastar menos dinero."]
  ]

tipo: vf
respuesta: verdadero

enunciado: "Analice el siguiente enunciado: '{escenarios[escenario_idx][0]}' es un ejemplo de una meta concreta y medible."

explicacion: |
  Para que una meta sea efectiva, debe ser específica, medible, alcanzable, relevante y con un tiempo definido (SMART). El enunciado cumple con tener un indicador (15% o 5%) y un plazo determinado.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["terminologia"]

tipo: completar
respuestas_validas: ["cuantificable", "cuantificable"]

enunciado: "Para que una meta sea considerada efectiva, debe ser __________, es decir, debe poder medirse a través de indicadores numéricos."

explicacion: |
  La cuantificación es lo que permite saber si se ha alcanzado la meta o qué tan cerca se está de lograrla. Sin medición, no hay control administrativo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["planificacion", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Misión de la empresa", "Objetivo estratégico", "Meta operativa", "Acción diaria"]

enunciado: "Ordene los siguientes elementos desde el nivel más macro (estratégico/filosófico) hasta el nivel más micro (ejecución):"

explicacion: |
  La planificación sigue una cascada: la Misión define la razón de ser, los Objetivos estratégicos marcan el rumbo a largo plazo, las Metas operativas desglosan esos objetivos en términos medibles, y las Acciones son las tareas concretas del día a día.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["coherencia", "logica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Objetivo: 'Ser la empresa más rentable del sector'. Meta: 'Aumentar el margen de utilidad neta del 5% al 8% en un año'.", "Falso"],
    ["Objetivo: 'Mejorar el clima laboral'. Meta: 'Reducir la rotación de personal en un 20% para fin de año'.", "Verdadero"]
  ]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "Determine si la relación entre el objetivo y la meta presentados en el caso es coherente: '{casos[caso_idx][0]}'"

explicacion: |
  En el caso 0 (Falso), la meta es coherente con el objetivo. En el caso 1 (Verdadero), la meta de reducir la rotación es un indicador directo y medible para alcanzar la mejora del clima laboral.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

respuesta: "meta"
tipo: "mc"
opciones_explicitas: ["objetivo", "meta", "estrategia", "plan"]

enunciado: "Un enunciado que describe un propósito amplio y aspiracional, como 'Ser la empresa líder en el sector de calzado en el país', se define como un ___."

explicacion: |
  El objetivo general es el fin último y amplio (la visión), mientras que la meta es el paso específico, medible y con un tiempo determinado para alcanzar dicho objetivo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_SMART", "medicion"]

variables:
  escenario: uno_de([
    ["Aumentar las ventas totales", "Aumentar las ventas en un 15% durante el segundo semestre de 2024"],
    ["Mejorar la satisfacción del cliente", "Lograr un puntaje de 9/10 en las encuestas de satisfacción para diciembre"],
    ["Reducir costos operativos", "Disminuir los gastos de logística en un 5% mensual durante el próximo trimestre"]
  ])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: [escenario[0], escenario[1], "Reducir la rotación de personal"]

enunciado: "Dada la siguiente lista de declaraciones, selecciona aquella que represente una META concreta y medible (SMART) en lugar de un objetivo general: {escenario[0]}"

explicacion: |
  Una meta debe ser cuantificable y tener un plazo. Mientras que '{escenario[0]}' es una intención general, '{escenario[1]}' proporciona un número (15%) y un tiempo (segundo semestre), permitiendo su medición real.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["logica", "metas"]

respuesta: falso
tipo: "vf"

enunciado: "Un objetivo general puede ser evaluado de forma inmediata y precisa mediante un indicador numérico sin necesidad de desglosarlo en metas."

explicacion: |
  Falso. Los objetivos generales suelen ser cualitativos o demasiado amplios. Para poder medirlos, es indispensable transformarlos en metas específicas, medibles y con un plazo determinado.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["pasos", "planificacion"]

respuesta: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]
tipo: "ordenar"
opciones_explicitas: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]

enunciado: "Ordena lógicamente los pasos para pasar de una visión empresarial a la ejecución de una estrategia de gestión:"

explicacion: |
  La planificación estratégica siempre comienza con la visión macro (objetivo), se desglosa en pasos accionables y medibles (metas), se asignan los medios para lograrlas y finalmente se controla el proceso.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["calculo", "indicadores"]

variables:
  datos: [
    ["Ventas actuales: 100.000 USD", "120.000 USD", "10%"],
    ["Clientes actuales: 500", "600", "20%"],
    ["Producción actual: 1000 unidades", "1100", "10%"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2
tipo: "completar"
respuestas_validas: [datos[idx][2]]

enunciado: "Si el objetivo general es 'Incrementar la facturación anual', y actualmente se facturan {datos[idx][0]}, una meta concreta para este año sería alcanzar los {datos[idx][1]} USD, lo que representa un incremento del ___."

explicacion: |
  Para convertir un objetivo en meta, debemos calcular la diferencia porcentual o absoluta. En este caso, el incremento respecto al valor base definido en el escenario sorteado.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["El objetivo es el fin último y la meta es el paso cuantificable", "El objetivo es el paso cuantificable y la meta es el fin último", "Son sinónimos en la práctica administrativa", "La meta es cualitativa y el objetivo es cuantitativo"]

enunciado: "En el proceso de planificación estratégica, ¿cuál es la distinción principal entre un objetivo general y una meta?"

explicacion: |
  Un objetivo general describe un estado deseado a largo plazo (el "qué"), mientras que una meta es un punto de referencia específico, medible y con un tiempo determinado que ayuda a alcanzar ese objetivo (el "cuánto" y "cuándo").
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["planificacion", "errores_comunes"]

tipo: vf
enunciado: "Si una empresa establece como objetivo 'Aumentar la satisfacción del cliente', esto se considera una meta SMART porque es específica y medible."

respuesta: falso

explicacion: |
  Falso. 'Aumentar la satisfacción del cliente' es un objetivo general. Para ser una meta, debería ser algo como: 'Aumentar el índice de satisfacción de 75% a 85% en los próximos 6 meses'.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [
    ["Ser el líder del mercado regional", "Incrementar la cuota de mercado del 15% al 25% en un año"],
    ["Reducir la huella de carbono", "Disminuir las emisiones de CO2 en un 10% para diciembre de 2025"]
  ]

tipo: completar
respuestas_validas: [escenarios[ejemplo_idx][1]]
respuesta: escenarios[ejemplo_idx][1

enunciado: "Dado el siguiente objetivo general: '{escenarios[ejemplo_idx][0]}', la meta concreta correspondiente es: ___"

explicacion: |
  La meta debe transformar la intención cualitativa en un dato cuantitativo y temporal. En el primer caso es la cuota de mercado; en el segundo, la reducción de emisiones con fecha límite.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_smart", "errores"]

tipo: mc
opciones_explicitas: ["Falta de temporalidad", "Falta de cuantificación", "Falta de relevancia", "Todas las anteriores son errores comunes"]

enunciado: "Un error crítico al transformar un objetivo en meta es presentar una declaración que no permite saber si se ha logrado o no. Esto sucede principalmente por:"

explicacion: |
  Para que una meta sea efectiva, debe ser medible (cuantificación) y tener un plazo (temporalidad). Sin estos elementos, la meta es ambigua y no permite el control administrativo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

enunciado: "Ordene correctamente los pasos del proceso de planificación, desde la visión macro hasta la ejecución operativa:"

respuesta: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

explicacion: |
  La planificación sigue un flujo descendente: primero se define la identidad (visión/misión), luego el rumbo (objetivos), después los hitos concretos (metas) y finalmente el cómo (plan de acción).
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "planificacion"]

respuesta: "meta"
tipo: "mc"
opciones_explicitas: ["objetivo", "meta", "estrategia", "plan"]

enunciado: "Mientras que un objetivo es una declaración amplia de lo que se desea lograr a largo plazo, una ___ es un paso específico, cuantificable y con un tiempo determinado para alcanzarlo."

explicacion: |
  Los objetivos son la dirección general (ej. "Ser líderes en el mercado"), mientras que las metas son los hitos medibles (ej. "Aumentar las ventas un 10% en el primer trimestre").
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metodologia", "medicion"]

respuesta: falso
tipo: "vf"

enunciado: "Un objetivo general se distingue de una meta concreta principalmente porque el objetivo debe ser necesariamente cuantificable y tener una fecha de vencimiento estricta."

explicacion: |
  Falso. Es la meta la que debe ser cuantificable y tener un plazo. El objetivo es la aspiración cualitativa o el fin último.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["jerarquia", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Incrementar la rentabilidad", "Aumentar el margen de beneficio neto en un 5% anual"],
    ["Expandir la presencia de marca", "Abrir 3 nuevas sucursales en la región norte antes de diciembre"]
  ]

respuesta: datos[escenario_idx][1
tipo: "completar"
respuestas_validas: [datos[escenario_idx][1]]

enunciado: "Considere el siguiente objetivo general: '{datos[escenario_idx][0]}'. Una meta concreta que represente este objetivo sería: ___"

pasos:
  - "Identificar el fin último (objetivo)."
  - "Transformar el fin en una acción medible con tiempo y cantidad (meta)."

explicacion: |
  La meta debe desglosar el objetivo en términos de 'cuánto', 'cuándo' y 'cómo' de forma que se pueda verificar su cumplimiento.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["caracteristicas"]

respuesta: "específica, medible, alcanzable, relevante y con tiempo"
tipo: "completar"
respuestas_validas: ["específica, medible, alcanzable, relevante y con tiempo"]

enunciado: "Para que una meta sea efectiva y se diferencie de un deseo vago, se recomienda que cumpla con el criterio SMART, lo que significa que debe ser ___."

explicacion: |
  El acrónimo SMART (Specific, Measurable, Achievable, Relevant, Time-bound) es el estándar para transformar objetivos en metas operativas.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

respuesta: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas"]
tipo: "ordenar"
opciones_explicitas: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas", "Ejecutar acciones"]

enunciado: "Ordene los siguientes elementos según la jerarquía lógica de la planificación estratégica, desde lo más abstracto a lo más concreto:"

explicacion: |
  La planificación comienza con la identidad (misión), sigue con la dirección (objetivos), se desglosa en hitos (metas) y finalmente en la ejecución táctica.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Aumentar la presencia en el mercado nacional", "Incrementar las ventas en un 15% durante el primer semestre de 2024"], ["Mejorar la satisfacción del cliente", "Reducir el tiempo de espera en atención al cliente a menos de 2 minutos para diciembre"]]

enunciado: "En el escenario '{escenarios[escenario_idx][0]}', la expresión '{escenarios[escenario_idx][1]}' representa una: ___"

respuestas_validas: ["meta", "objetivo general"]
tipo: completar

explicacion: |
  El primer elemento es un objetivo general (aspiracional y amplio), mientras que el segundo es una meta (específica, medible y con un plazo determinado).
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "metas"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [
    ["Reducir costos operativos", "Reducir costos operativos", "Reducir costos operativos"],
    ["Incrementar la rentabilidad", "Incrementar la rentabilidad", "Incrementar la rentabilidad"],
    ["Expandir la marca", "Expandir la marca", "Expandir la marca"]
  ]
  metas: [
    "Reducir costos operativos en un 5% mensual",
    "Incrementar la rentabilidad en un 10% anual",
    "Expandir la marca abriendo 3 sucursales en junio"
  ]

enunciado: "Si el objetivo es '{casos[caso_idx]}', ¿cuál de las siguientes opciones constituye una meta válida y medible?"

opciones_explicitas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]
tipo: mc

explicacion: |
  Una meta debe ser cuantificable y tener un tiempo definido para poder ser medida frente al objetivo general.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["conceptos", "logica"]

enunciado: "Un objetivo general es una meta concreta y medible que define un resultado específico en un tiempo determinado. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf

explicacion: |
  Es falso. La definición dada corresponde a una 'meta'. El 'objetivo general' es el propósito amplio y cualitativo.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["proceso", "planificacion"]

enunciado: "Ordene los pasos lógicos para la planificación estratégica de una empresa:"

opciones_explicitas: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]
tipo: ordenar

respuesta: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]

explicacion: |
  La planificación comienza con la filosofía organizacional (visión/misión), sigue con los propósitos amplios (objetivos), luego se desglosan en acciones cuantificables (metas) y finalmente se ejecutan.
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["analisis", "metas"]

variables:
  dato_idx: uno_de([0,1])
  datos: [
    ["Objetivo: Ser líderes en calidad. Meta: Lograr 95/100 en encuestas de satisfacción en diciembre.", 95],
    ["Objetivo: Crecimiento sostenido. Meta: Alcanzar 1.000 nuevos usuarios activos en 3 meses.", 1000]
  ]

enunciado: "Para el escenario '{datos[dato_idx][0]}', el valor numérico que permite medir el cumplimiento de la meta es: ___"

respuestas_validas: ["95", "1000"]
tipo: completar

explicacion: |
  Las metas proporcionan el indicador numérico (KPI) necesario para evaluar si el objetivo general se está cumpliendo.
```

## Sección: oferta-y-demanda (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "Según la ley de la demanda, ¿qué pasa con la cantidad demandada cuando sube el precio de un bien?"
tipo: mc
opciones_explicitas:
  - "Baja"
  - "Sube"
  - "No cambia nunca"
respuesta: "Baja"

explicacion: |
  A mayor precio, menos gente está dispuesta a comprar esa cantidad.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "Según la ley de la oferta, ¿qué pasa con la cantidad ofrecida cuando sube el precio de un bien?"
tipo: mc
opciones_explicitas:
  - "Sube"
  - "Baja"
  - "No cambia nunca"
respuesta: "Sube"

explicacion: |
  A mayor precio, a los vendedores les conviene más producir y
  vender.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

enunciado: "¿Qué es el precio de equilibrio?"
tipo: mc
opciones_explicitas:
  - "El precio donde la cantidad demandada es igual a la cantidad ofrecida"
  - "El precio más alto que alguien pagaría por un bien"
  - "El precio fijado por el gobierno para todos los bienes"
respuesta: "El precio donde la cantidad demandada es igual a la cantidad ofrecida"

explicacion: |
  Es el punto donde las dos curvas (oferta y demanda) se cruzan.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de la demanda dice que, en general, cuando el precio de un bien sube, la cantidad demandada baja."

explicacion: |
  Es la relación inversa entre precio y cantidad demandada.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La ley de la oferta dice que, en general, cuando el precio de un bien sube, la cantidad ofrecida también sube."

explicacion: |
  Es la relación directa entre precio y cantidad ofrecida.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "Si el precio de un bien está POR ENCIMA de su precio de equilibrio, ¿qué ocurre?"
tipo: mc
opciones_explicitas:
  - "Exceso de oferta: sobra mercadería sin vender"
  - "Exceso de demanda: falta mercadería"
  - "El mercado se vacía exactamente"
respuesta: "Exceso de oferta: sobra mercadería sin vender"

explicacion: |
  A ese precio los vendedores quieren ofrecer más de lo que los
  compradores quieren llevarse.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "Si el precio de un bien está POR DEBAJO de su precio de equilibrio, ¿qué ocurre?"
tipo: mc
opciones_explicitas:
  - "Exceso de demanda: falta mercadería"
  - "Exceso de oferta: sobra mercadería"
  - "El mercado se vacía exactamente"
respuesta: "Exceso de demanda: falta mercadería"

explicacion: |
  A ese precio los compradores quieren llevarse más de lo que los
  vendedores quieren ofrecer.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

enunciado: "Una tienda de ropa liquida la colección de invierno porque quedó mucho stock sin vender. ¿Qué situación describe mejor esto?"
tipo: mc
opciones_explicitas:
  - "Exceso de oferta al precio original"
  - "Exceso de demanda al precio original"
  - "El precio original ya era el de equilibrio"
respuesta: "Exceso de oferta al precio original"

explicacion: |
  Si sobró stock sin vender, es porque a ese precio se ofrecía más de
  lo que se demandaba.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

enunciado: "Las entradas de un recital, a precio fijo, se agotan en minutos y queda mucha gente sin poder comprar. ¿Qué situación describe mejor esto?"
tipo: mc
opciones_explicitas:
  - "Exceso de demanda al precio fijado"
  - "Exceso de oferta al precio fijado"
  - "El precio fijado ya era el de equilibrio"
respuesta: "Exceso de demanda al precio fijado"

explicacion: |
  Si mucha gente se queda sin comprar, es porque a ese precio se
  demanda más de lo que se ofrece.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "vocabulario"]

enunciado: "Si SÓLO cambia el precio de un bien (nada más), y con eso cambia la cantidad demandada, ¿cómo se describe ese cambio?"
tipo: mc
opciones_explicitas:
  - "Un movimiento a lo largo de la misma curva de demanda"
  - "Un desplazamiento de toda la curva de demanda"
  - "Ninguno de los dos: no hay cambio real"
respuesta: "Un movimiento a lo largo de la misma curva de demanda"

explicacion: |
  La curva no se mueve: sólo cambia el punto sobre ella, siguiendo la
  misma ley.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "vocabulario"]

enunciado: "Una sequía reduce la cosecha disponible de un cultivo, y eso mueve el propio precio de equilibrio hacia arriba, incluso antes de que cambie ningún otro precio. ¿Cómo se describe este efecto?"
tipo: mc
opciones_explicitas:
  - "Un desplazamiento de la curva de oferta"
  - "Un movimiento a lo largo de la curva de oferta"
  - "No tiene relación con oferta y demanda"
respuesta: "Un desplazamiento de la curva de oferta"

explicacion: |
  Cambió algo distinto del precio (la cantidad disponible para
  cosechar): eso desplaza toda la curva, no sólo mueve un punto sobre
  ella.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_demanda: random(2, 8)
  ordenada_demanda: cantidad_eq + pendiente_demanda * precio_eq
  precio_prueba: precio_eq - random(1, 5)

respuesta: ordenada_demanda - pendiente_demanda * precio_prueba
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad demandada de un bien sigue esta fórmula: Qd = {ordenada_demanda} - {pendiente_demanda} × Precio. Si el precio es ${precio_prueba}, ¿cuál es la cantidad demandada?"

explicacion: |
  Se reemplaza el precio en la fórmula y se calcula Qd directo.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_oferta: random(2, 8)
  ordenada_oferta: cantidad_eq - pendiente_oferta * precio_eq
  precio_prueba: precio_eq + random(1, 5)

respuesta: ordenada_oferta + pendiente_oferta * precio_prueba
tipo: input
tolerancia_abs: 0

enunciado: "La cantidad ofrecida de un bien sigue esta fórmula: Qs = {ordenada_oferta} + {pendiente_oferta} × Precio. Si el precio es ${precio_prueba}, ¿cuál es la cantidad ofrecida?"

explicacion: |
  Se reemplaza el precio en la fórmula y se calcula Qs directo.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "calculo"]

variables:
  precio_eq: random(10, 40)
  cantidad_eq: random(100, 400)
  pendiente_demanda: random(2, 8)
  pendiente_oferta: random(2, 8)
  ordenada_demanda: cantidad_eq + pendiente_demanda * precio_eq
  ordenada_oferta: cantidad_eq - pendiente_oferta * precio_eq
  qd: ordenada_demanda - pendiente_demanda * precio_eq
  qs: ordenada_oferta + pendiente_oferta * precio_eq

respuesta: (qd == qs)
tipo: vf

enunciado: "Con Qd = {ordenada_demanda} - {pendiente_demanda} × Precio y Qs = {ordenada_oferta} + {pendiente_oferta} × Precio, al precio ${precio_eq}: ¿es correcto decir que la cantidad demandada es igual a la ofrecida (o sea, que ese es el precio de equilibrio)?"

explicacion: |
  Se evalúan las dos fórmulas al mismo precio y se comparan los
  resultados.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "calculo"]

variables:
  qd: random(100, 300)
  qs: qd + random(20, 80)

respuesta: (qs > qd)
tipo: vf

enunciado: "A un precio determinado, la cantidad demandada es {qd} unidades y la cantidad ofrecida es {qs} unidades. ¿Es correcto decir que hay exceso de oferta a ese precio?"

explicacion: |
  Se ofrece más de lo que se demanda: exceso de oferta.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "calculo"]

variables:
  qs: random(100, 300)
  qd: qs + random(20, 80)

respuesta: (qd > qs)
tipo: vf

enunciado: "A un precio determinado, la cantidad ofrecida es {qs} unidades y la cantidad demandada es {qd} unidades. ¿Es correcto decir que hay exceso de demanda a ese precio?"

explicacion: |
  Se demanda más de lo que se ofrece: exceso de demanda.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "En un mercado libre, si hay exceso de oferta (sobra mercadería), ¿qué tiende a pasar con el precio?"
tipo: mc
opciones_explicitas:
  - "Tiende a bajar, para vender lo que sobra"
  - "Tiende a subir, para compensar la pérdida"
  - "Se queda fijo siempre"
respuesta: "Tiende a bajar, para vender lo que sobra"

explicacion: |
  Los vendedores bajan el precio para deshacerse del stock excedente,
  acercándose de nuevo al equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "vocabulario"]

enunciado: "En un mercado libre, si hay exceso de demanda (falta mercadería), ¿qué tiende a pasar con el precio?"
tipo: mc
opciones_explicitas:
  - "Tiende a subir, porque hay compradores dispuestos a pagar más"
  - "Tiende a bajar, para atraer más compradores"
  - "Se queda fijo siempre"
respuesta: "Tiende a subir, porque hay compradores dispuestos a pagar más"

explicacion: |
  Los vendedores suben el precio al ver que hay demanda dispuesta a
  pagarlo, acercándose de nuevo al equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "avanzado"
  tags: ["mercado", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo un mercado libre se ajusta hacia el precio de equilibrio, partiendo de un precio demasiado bajo."
opciones_explicitas:
  - "El mercado se acerca al precio de equilibrio"
  - "Los vendedores suben el precio"
  - "El precio está por debajo del equilibrio"
  - "Se genera exceso de demanda (falta mercadería)"
respuesta_orden: ["El precio está por debajo del equilibrio", "Se genera exceso de demanda (falta mercadería)", "Los vendedores suben el precio", "El mercado se acerca al precio de equilibrio"]

explicacion: |
  El desequilibrio inicial genera la señal (falta de mercadería) que
  empuja el precio de vuelta hacia el equilibrio.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "intermedio"
  tags: ["mercado", "problema"]

respuesta: verdadero
tipo: vf

enunciado: "Si más gente quiere comprar dólares informales de la que quiere venderlos a un precio dado, el precio del dólar informal tiende a subir."

explicacion: |
  Es exceso de demanda a ese precio: empuja el precio hacia arriba,
  igual que en cualquier otro mercado.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado"]

variables:
  cantidad_eq: random(100, 400)

tipo: completar
enunciado: "En el precio de equilibrio, la cantidad demandada es igual a la cantidad ___ (misma palabra que describe lo que ponen a la venta los vendedores)."
respuestas_validas:
  - "ofrecida"
  - "ofertada"

explicacion: |
  Es la definición misma de precio de equilibrio: demanda = oferta.
```

```
metadata:
  materia: "economia"
  tema: "oferta_y_demanda"
  nivel: "basico"
  tags: ["mercado", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La oferta y la demanda son dos fuerzas que reaccionan al precio en sentidos opuestos, y el precio de equilibrio es el punto exacto donde ambas coinciden."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: origen-excedente-moneda-mercado (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["excedente", "intercambio"]

respuesta: "trueque"
tipo: "completar"
respuestas_validas: ["trueque"]

enunciado: "Cuando una sociedad agrícola comienza a producir más de lo que consume, el excedente genera la necesidad de realizar un proceso de intercambio llamado ___."

explicacion: |
  El excedente agrícola permitió que las personas no solo sobrevivieran, sino que pudieran intercambiar sus sobras por otros bienes necesarios, dando inicio al comercio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "limitaciones"]

variables:
  escenario: uno_de([
    ["trigo", "herramientas de piedra"],
    ["lana", "cerámica"],
    ["fruta", "pieles"]
  ])

respuesta: "doble coincidencia de necesidades"
tipo: "mc"
opciones_explicitas: ["doble coincidencia de necesidades", "especialización del trabajo", "inflación de bienes", "escasez de recursos"]

enunciado: "Un agricultor tiene un excedente de {escenario[0]} y desea obtener {escenario[1]}, pero para lograrlo necesita encontrar a alguien que tenga {escenario[1]} y que, además, necesite exactamente {escenario[0]}. A este problema se le conoce como:"

explicacion: |
  La 'doble coincidencia de necesidades' es la principal dificultad del trueque, ya que requiere que ambas partes coincidan en el tiempo y en el objeto de intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda", "trueque"]

respuesta: "true"
tipo: "vf"

enunciado: "¿El paso del trueque a la moneda fue impulsado por la dificultad de encontrar una doble coincidencia de necesidades?"

explicacion: |
  Correcto. La moneda surge como una solución para evitar la dificultad de encontrar a alguien que quiera exactamente lo que nosotros ofrecemos y que tenga lo que nosotros buscamos.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["comercio", "excedente"]

respuesta: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]
tipo: "ordenar"
opciones_explicitas: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]

enunciado: "Ordena cronológicamente los hitos que permitieron la evolución del sistema de intercambio:"

explicacion: |
  Primero aparece el excedente, luego se detecta que el trueque es ineficiente por la doble coincidencia de necesidades, y finalmente se crea la moneda para facilitar el intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["valor", "intercambio"]

variables:
  caso: uno_de([
    ["5 sacos de grano", "2 hachas de cobre"],
    ["3 cabras", "1 manta de lana"],
    ["10 cestas de fruta", "2 vasijas de barro"]
  ])

respuesta: "valor_relativo"
tipo: "mc"
opciones_explicitas: ["valor_relativo", "valor_absoluto", "costo_de_produccion", "precio_fijo"]

enunciado: "En un sistema de trueque, si un agricultor intercambia {caso[0]} por {caso[1]}, el valor de los bienes se determina de forma ___ (es decir, depende de la relación entre las necesidades de ambos)."

explicacion: |
  En el trueque, el valor no es absoluto, sino relativo a la utilidad que cada parte le asigne al bien en ese momento específico de intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "intercambio"]

respuesta: "doble coincidencia de deseos"
tipo: completar
respuestas_validas: ["doble coincidencia de deseos"]

enunciado: "Para que el trueque sea efectivo, es necesaria la ___ de deseos, lo que significa que ambas partes deben querer intercambiar exactamente lo que el otro ofrece."

explicacion: |
  El trueque requiere que cada persona encuentre a otra que tenga lo que necesita y que, además, necesite lo que ella ofrece, un proceso ineficiente llamado doble coincidencia de deseos.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["funciones_moneda", "teoria_monetaria"]

variables:
  escenario: uno_de([
    ["Se usa para fijar el precio de un producto", "unidad de cuenta"],
    ["Se usa para comprar bienes hoy y pagar después", "medio de cambio"],
    ["Se usa para ahorrar para el futuro", "reserva de valor"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Si un comerciante utiliza una moneda para facilitar la transacción inmediata de un bien, está utilizando la moneda como: {escenario[0]}."

explicacion: |
  La función de medio de cambio permite que la moneda actúe como un intermediario en el intercambio, eliminando la necesidad de buscar una coincidencia exacta de bienes.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion_moneda", "historia_economica"]

respuesta: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]
tipo: ordenar

opciones_explicitas: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]

enunciado: "Ordena cronológicamente la evolución de los medios de intercambio en una economía de mercado:"

explicacion: |
  La economía evolucionó desde el intercambio directo de bienes (trueque) hacia mercancías con valor intrínseco (sal, oro), luego hacia representaciones físicas (papel moneda) y finalmente hacia sistemas basados en la confianza (fiduciario).
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["valor", "moneda"]

respuesta: 100
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una unidad de medida de valor (unidad de cuenta) establece que un saco de trigo vale 5 monedas y un saco de cebada vale 8 monedas, ¿cuántas monedas se requieren para intercambiar ambos sacos de forma equivalente?"

pasos:
  - "Identificar el valor de cada bien en la unidad de cuenta."
  - "Sumar los valores de ambos bienes."

explicacion: |
  La función de unidad de cuenta permite expresar los valores de distintos bienes en términos comunes, facilitando la suma y comparación de precios.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["reserva_valor", "ahorro"]

respuesta: "reserva de valor"
tipo: mc
opciones_explicitas: ["medio de cambio", "unidad de cuenta", "reserva de valor"]

enunciado: "Cuando una persona decide guardar parte de sus ingresos en moneda para realizar una compra importante en el futuro, está utilizando la moneda como:"

explicacion: |
  La función de reserva de valor permite transferir poder adquisitivo del presente al futuro, permitiendo el ahorro.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["moneda_mercado", "dinero_mercado", "historia_economica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: uno_de([
    ["conchas_cauri", "conchas"],
    ["sal", "sal"]
  ])

enunciado: "En diversas culturas antiguas, antes de la existencia de monedas acuñadas, se utilizaban objetos con valor intrínseco como medio de cambio. Un ejemplo común es el uso de {escenario[escenario_idx][0]}."

opciones_explicitas: ["conchas", "sal", "piedras", "madera"]
respuesta: escenario[escenario_idx][1
tipo: mc

explicacion: |
  Antes de la moneda metálica, se utilizaban bienes de consumo o decorativos que tenían valor por su escasez o utilidad, como las conchas cauri o la sal.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["dinero_mercado", "propiedades_dinero"]

respuestas_validas: ["durabilidad", "divisibilidad", "escasez"]
respuesta: "durabilidad"
tipo: completar

enunciado: "Para que un objeto funcione eficazmente como dinero mercancía, debe poseer ciertas propiedades. La capacidad de resistir el paso del tiempo y el uso sin degradarse se denomina ___."

explicacion: |
  La durabilidad es esencial para que el valor se preserve a través de las transacciones y el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["trueque", "moneda_mercado"]

variables:
  orden_pasos: [
    ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"],
    ["Trueque directo", "Uso de metales preciosos", "Moneda acuñada"],
    ["Trueque directo", "Uso de sal", "Moneda acuñada"]
  ]

enunciado: "Ordene cronológicamente la evolución de los medios de intercambio en una economía en desarrollo."

opciones_explicitas: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
respuesta: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
tipo: ordenar

explicacion: |
  La economía evoluciona desde el intercambio directo de bienes (trueque), pasando por objetos con valor intrínseco (dinero mercancía), hasta la estandarización con monedas metálicas.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_monoda_mercado"
  nivel: "intermedio"
  tags: ["metales_preciosos", "valor_intrínseco"]

variables:
  metal_idx: uno_de([0, 1])
  metal_datos: [
    ["oro", "oro"],
    ["plata", "plata"]
  ]

enunciado: "El uso de {metal_datos[metal_idx][0]} como medio de cambio se debió a su valor intrínseco y su facilidad de transporte."

respuesta: metal_datos[metal_idx][1
tipo: completar
tolerancia_abs: 0

explicacion: |
  Los metales preciosos fueron fundamentales para la transición hacia la moneda debido a su escasez y homogeneidad.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["trueque", "costos_transaccion"]

variables:
  problema_idx: uno_de([0, 1])
  problema_datos: [
    ["doble coincidencia de deseos", "falta de divisibilidad"],
    ["doble coincidencia de deseos", "falta de durabilidad"]
  ]

enunciado: "Uno de los principales obstáculos del trueque que impulsó la creación del dinero fue la ___."

opciones_explicitas: ["doble coincidencia de deseos", "falta de divisibilidad", "exceso de oferta"]
respuesta: problema_datos[problema_idx][0
tipo: mc

explicacion: |
  El trueque requiere que dos personas quieran exactamente lo que el otro ofrece en el mismo momento, lo cual es ineficiente y da origen a la necesidad de un medio de cambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["intercambio", "excedente", "neolítico"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente", "excedente_productivo"]

enunciado: "Cuando una sociedad logra producir más de lo que necesita para su subsistencia inmediata, se genera un ___ que permite el inicio del intercambio."

explicacion: |
  El excedente es la base del comercio: al sobrar productos, las comunidades pueden intercambiar lo que les sobra por lo que les falta.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["especializacion", "division_del_trabajo"]

variables:
  escenario: uno_de([["agricultor", "trigo"], ["pastor", "lana"], ["alfarero", "cerámica"]])

respuesta: "segundo"
tipo: "mc"
opciones_explicitas: ["primero", "segundo", "tercero"]

enunciado: "En una economía con división del trabajo, un {escenario[0]} produce un excedente de {escenario[1]}. Si este desea obtener {escenario[2]}, debe acudir al mercado para realizar un intercambio."

explicacion: |
  La especialización permite que cada individuo se concentre en una actividad, generando excedentes específicos que se intercambian en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["barter", "trueque", "moneda"]

respuesta: ["trueque", "moneda"]
tipo: "ordenar"
opciones_explicitas: ["trueque", "moneda", "dinero_fiduciario"]

enunciado: "Ordena cronológicamente las formas de intercambio según la complejidad del medio de cambio:"

explicacion: |
  El proceso evolutivo comenzó con el trueque directo, pasó por el uso de mercancías como dinero (moneda mercancía) y llegó al dinero fiduciario actual.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["moneda", "liquidez", "intercambio"]

variables:
  caso: uno_de([["sal", "sal"], ["conchas", "conchas"], ["metales", "metales"]])
  valor_caso: uno_de([1, 2, 3])

respuesta: "valor_caso"
tipo: "mc"
opciones_explicitas: ["1", "2", "3"]

enunciado: "Para facilitar el comercio de excedentes, se utilizan objetos como medio de cambio. Si usamos {caso[0]} como unidad de cuenta, el valor de un bien se mide en {caso[1]}."

explicacion: |
  La moneda actúa como un estándar de valor que resuelve la dificultad de coincidencia de necesidades del trueque.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["mercado", "abstracto", "social"]

respuesta: "verdadero"
tipo: "vf"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "El mercado es estrictamente un lugar físico (como una plaza o feria) y no puede existir de forma abstracta o virtual."

explicacion: |
  El mercado es un concepto institucional y social que define las reglas de intercambio; puede ser físico (un mercado de abastos) o abstracto (el mercado de divisas).
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["trueque", "moneda", "intercambio"]

variables:
  datos: [["Un agricultor tiene manzanas y busca zapatos, pero el zapatero solo quiere trigo", "falta de coincidencia de necesidades"], ["Un pescador tiene peces y quiere madera, pero el carpintero solo quiere lana", "falta de coincidencia de necesidades"], ["Un artesano tiene vasijas y quiere carne, pero el carnicero solo quiere herramientas", "falta de coincidencia de necesidades"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["falta de liquidez", "falta de coincidencia de necesidades", "exceso de oferta", "escasez de valor"]

enunciado: "En el siguiente escenario: {datos[idx][0]}, ¿cuál es la principal limitación del sistema de trueque que impide el intercambio?"

explicacion: |
  El trueque requiere que ambas partes deseen exactamente lo que el otro ofrece en el mismo momento, lo que se conoce como la "doble coincidencia de deseos" o "falta de coincidencia de necesidades". La moneda resuelve esto actuando como un medio de cambio universal.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["divisibilidad", "moneda", "valor"]

variables:
  datos: [["Comprar una manzana con una vaca", "divisibilidad"], ["Comprar un pan con un caballo", "divisibilidad"], ["Comprar un clavo con una oveja", "divisibilidad"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["divisibilidad"]

enunciado: "Si un comerciante desea comprar un objeto de bajo valor utilizando un bien de alto valor (como un animal), se enfrenta al problema de la ___."

explicacion: |
  Muchos bienes son indivisibles (no puedes partir un animal a la mitad sin destruir su valor). La moneda permite fraccionar el valor de forma exacta para transacciones de cualquier escala.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["costos_transaccion", "eficiencia"]

variables:
  datos: [["Buscar un intercambio específico requiere mucho tiempo", "costos de transacción"], ["Perder horas buscando quién quiera el producto", "costos de transacción"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["costos de transacción", "inflación", "escasez", "desequilibrio"]

enunciado: "El tiempo y esfuerzo invertidos en encontrar a alguien que quiera intercambiar sus bienes por los nuestros se denomina: {datos[idx][0]}."

explicacion: |
  El trueque aumenta los costos de transacción debido a la dificultad de encontrar la pareja de intercambio ideal. La moneda reduce estos costos al estandarizar el medio de intercambio.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion", "historia_moneda"]

respuesta: ["Trueque", "Dinero Mercancía", "Dinero Fiat"]
tipo: ordenar
opciones_explicitas: ["Dinero Fiat", "Trueque", "Dinero Mercancía"]

enunciado: "Ordena cronológicamente las etapas de la evolución de los medios de intercambio, desde el sistema más primitivo al más moderno:"

explicacion: |
  Primero existió el trueque directo, luego se usaron mercancías con valor intrínseco (sal, oro) y finalmente el dinero fiat (basado en la confianza y ley).
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["unidad_cuenta", "precio"]

variables:
  datos: [["Comparar el precio de 10 productos distintos en trueque", "complejidad de precios"], ["Determinar el valor relativo de bienes diversos", "complejidad de precios"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["complejidad de precios", "estabilidad de valor", "liquidez inmediata", "escasez"]

enunciado: "Sin una moneda, establecer un precio estándar para todos los bienes es extremadamente difícil debido a la {datos[idx][0]}."

explicacion: |
  En un sistema de trueque, el número de precios relativos crece exponencialmente con la cantidad de bienes. La moneda actúa como una "unidad de cuenta" que simplifica la medición del valor.
```

## Sección: partida-doble (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué establece el principio de partida doble?"
tipo: mc
opciones_explicitas:
  - "Que todo movimiento económico afecta a dos o más cuentas al mismo tiempo, nunca a una sola"
  - "Que todo movimiento se registra dos veces, en dos libros distintos"
  - "Que las empresas tienen que llevar doble contabilidad, una oficial y otra interna"
respuesta: "Que todo movimiento económico afecta a dos o más cuentas al mismo tiempo, nunca a una sola"

explicacion: |
  Es la regla base de toda la contabilidad moderna.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún movimiento económico de una empresa se registra en una sola cuenta: siempre afecta a dos o más."

explicacion: |
  Es la regla de oro de la partida doble.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En cualquier asiento contable, la suma de los importes del Debe tiene que ser exactamente igual a la suma de los importes del Haber."

explicacion: |
  Es lo que mantiene equilibrada la ecuación contable después de cada
  movimiento.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es un asiento contable?"
tipo: mc
opciones_explicitas:
  - "El registro de un movimiento: qué cuentas se debitan, qué cuentas se acreditan, y con qué importe"
  - "El balance final de toda la empresa"
  - "Un documento legal que reemplaza a una factura"
respuesta: "El registro de un movimiento: qué cuentas se debitan, qué cuentas se acreditan, y con qué importe"

explicacion: |
  Es la unidad básica de registro en contabilidad.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

variables:
  importe: random(50, 500) * 1000

respuesta: verdadero
tipo: vf

enunciado: "Un asiento registra ${importe} en el Debe de \"Mercadería\" y ${importe} en el Haber de \"Caja\". ¿Está balanceado (Debe = Haber)?"

explicacion: |
  Los dos importes son exactamente iguales, así que el asiento respeta
  la partida doble.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

variables:
  debe: random(100, 500) * 1000
  haber: random(100, 500) * 1000

respuesta: (debe == haber)
tipo: vf

enunciado: "Un asiento registra ${debe} en el Debe y ${haber} en el Haber. ¿Está balanceado?"

explicacion: |
  Hay que comparar directamente ambos totales — si no coinciden, el
  asiento tiene un error.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 300) * 1000
  debe_2: random(50, 300) * 1000
  haber_conocido: random(50, 300) * 1000

respuesta: debe_1 + debe_2 - haber_conocido
tipo: input
tolerancia_abs: 0

enunciado: "Un asiento tiene dos líneas en el Debe: ${debe_1} y ${debe_2}. En el Haber ya hay una línea de ${haber_conocido}. ¿Cuál debe ser el importe de la segunda línea del Haber, para que el asiento quede balanceado?"

pasos:
  - "Total del Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Falta en el Haber: {debe_1 + debe_2} - {haber_conocido}"

explicacion: |
  El total del Haber tiene que igualar al total del Debe.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Al comprar mercadería pagando en efectivo, tanto \"Mercadería\" como \"Caja\" son cuentas de Activo."

explicacion: |
  El activo total no cambia: sólo cambia de forma, de efectivo a
  mercadería.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando se compra mercadería pagando en efectivo, el activo total de la empresa no cambia: \"Mercadería\" sube en la misma cantidad que baja \"Caja\"."

explicacion: |
  Es un movimiento dentro del mismo grupo (Activo), no una ganancia ni
  una pérdida.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si el Debe y el Haber de un asiento no coinciden, hay un error en el registro contable."

explicacion: |
  Es la primera revisión que hace cualquier contador ante un balance
  que \"no cierra\".
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La partida doble registra, en el mismo asiento, de dónde sale un recurso y a dónde va — nunca sólo una de las dos partes."

explicacion: |
  Es la razón del nombre \"doble\": las dos caras de cada movimiento se
  anotan juntas.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "comparacion"]

variables:
  debe_a: random(100, 400) * 1000
  haber_a: random(100, 400) * 1000
  debe_b: random(100, 400) * 1000

respuesta: (debe_a == haber_a)
tipo: vf

enunciado: "Asiento A: Debe ${debe_a}, Haber ${haber_a}. ¿El asiento A está balanceado?"

explicacion: |
  Se comparan directamente los dos totales del mismo asiento.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto registrar un pago en efectivo anotando sólo la salida de dinero de \"Caja\", sin registrar a qué cuenta fue ese dinero?"

explicacion: |
  Violaría la partida doble: todo movimiento necesita su contrapartida
  registrada en otra cuenta.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un asiento contable puede tener más de dos líneas (por ejemplo, dos cuentas en el Debe y una en el Haber), siempre que el total del Debe siga igualando al total del Haber."

explicacion: |
  \"Doble\" significa \"al menos dos\", no exactamente dos líneas
  siempre.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "avanzado"
  tags: ["contabilidad", "problema"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 200) * 1000
  haber_2: random(50, 200) * 1000

respuesta: ((debe_1 + debe_2) == (haber_1 + haber_2))
tipo: vf

enunciado: "Un asiento tiene dos líneas en el Debe (${debe_1} y ${debe_2}) y dos líneas en el Haber (${haber_1} y ${haber_2}). ¿Está balanceado?"

explicacion: |
  Hay que sumar todas las líneas de cada lado antes de comparar.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos en el orden lógico para registrar un asiento contable."
opciones_explicitas:
  - "Verificar que el total del Debe sea igual al total del Haber"
  - "Identificar qué cuentas se ven afectadas por el movimiento"
  - "Anotar el importe correspondiente en el Debe o el Haber de cada cuenta"
respuesta_orden: ["Identificar qué cuentas se ven afectadas por el movimiento", "Anotar el importe correspondiente en el Debe o el Haber de cada cuenta", "Verificar que el total del Debe sea igual al total del Haber"]

explicacion: |
  Primero se identifican las cuentas, después se anotan los importes, y
  al final se verifica el balance.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  importe: random(50, 500) * 1000
  error: uno_de([0, 0, 0, 10000, -10000])
  haber_mostrado: importe + error

respuesta: (importe == haber_mostrado)
tipo: vf

enunciado: "¿Está bien registrado este asiento? Debe: ${importe}. Haber: ${haber_mostrado}."

explicacion: |
  Se comparan directamente los dos importes: si no coinciden, el
  asiento no respeta la partida doble.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  importe: random(50, 500) * 1000

tipo: completar
enunciado: "Un asiento tiene ${importe} en el Debe de \"Mercadería\". Para que el asiento quede balanceado, el Haber de \"Caja\" tiene que ser: ___ = {importe}."
respuestas_validas:
  - importe

explicacion: |
  El Haber tiene que igualar exactamente al Debe.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La partida doble no es sólo un trámite formal: es lo que permite detectar errores, porque si el Debe y el Haber no coinciden en algún punto, algo está mal registrado."

explicacion: |
  Es una herramienta de control, no sólo una regla administrativa.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los asientos armados con partida doble son la base de lo que después se organiza en el libro diario y el libro mayor."

explicacion: |
  Es la conexión directa con el próximo tema.
```

```
metadata:
  materia: "economia"
  tema: "partida_doble"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Todo asiento contable afecta al menos dos cuentas, y la suma del Debe siempre tiene que ser igual a la suma del Haber — es la regla de oro de la partida doble."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: pbi-e-inflacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué mide el Producto Bruto Interno (PBI)?"
tipo: mc
opciones_explicitas:
  - "El valor total de todos los bienes y servicios finales producidos en un país durante un período"
  - "El total de dinero que hay en los bancos de un país"
  - "El sueldo promedio de los habitantes de un país"
respuesta: "El valor total de todos los bienes y servicios finales producidos en un país durante un período"

explicacion: |
  Es la medida estándar del tamaño de la economía de un país.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Por qué el PBI cuenta el pan terminado, pero no cuenta aparte la harina que se usó para hacerlo?"
tipo: mc
opciones_explicitas:
  - "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"
  - "Porque la harina no se considera un producto"
  - "Porque sólo se cuentan los productos importados"
respuesta: "Porque la harina ya está incluida en el valor del pan, y contarla aparte la contaría dos veces"

explicacion: |
  El PBI cuenta bienes FINALES, justamente para evitar la doble
  contabilización de los insumos intermedios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia principal entre PBI nominal y PBI real?"
tipo: mc
opciones_explicitas:
  - "El real está ajustado quitando el efecto de la inflación; el nominal no"
  - "El real sólo cuenta productos exportados; el nominal cuenta todo"
  - "No hay ninguna diferencia real entre los dos"
respuesta: "El real está ajustado quitando el efecto de la inflación; el nominal no"

explicacion: |
  Es la distinción central para saber si la economía realmente
  produjo más, o si el número sólo subió por los precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Comparar el PBI nominal de dos años distintos, sin ajustar por inflación, puede hacer parecer que la economía \"creció\" cuando en realidad sólo subieron los precios."

explicacion: |
  Por eso las comparaciones serias siempre usan el PBI real, no el
  nominal.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cómo se calcula el PBI per cápita?"
tipo: mc
opciones_explicitas:
  - "PBI total dividido la población del país"
  - "PBI total multiplicado por la población del país"
  - "El sueldo mínimo dividido el PBI total"
respuesta: "PBI total dividido la población del país"

explicacion: |
  Reparte el tamaño total de la economía entre la cantidad de
  habitantes.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "calculo"]

variables:
  poblacion: uno_de([2, 4, 5, 8, 10])
  pbi_per_capita_real: random(5, 40) * 1000
  pbi_total: poblacion * pbi_per_capita_real

respuesta: pbi_total / poblacion
tipo: input
tolerancia_abs: 0

enunciado: "Un país tiene un PBI total de ${pbi_total} millones y una población de {poblacion} millones de habitantes. ¿Cuál es su PBI per cápita?"

explicacion: |
  PBI per cápita = PBI total / población.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país con mucha población puede tener un PBI total enorme y, aun así, un nivel de vida bajo por persona — por eso conviene mirar el PBI per cápita, no sólo el total."

explicacion: |
  El PBI total mide tamaño; el per cápita se acerca más al nivel de
  vida promedio de cada habitante.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "A escala de todo un país, ¿qué es la inflación?"
tipo: mc
opciones_explicitas:
  - "El aumento generalizado y sostenido de los precios de la economía en su conjunto"
  - "El aumento del precio de un solo producto puntual"
  - "La cantidad total de dinero que emite el banco central"
respuesta: "El aumento generalizado y sostenido de los precios de la economía en su conjunto"

explicacion: |
  No es que un producto puntual suba: es que la MAYORÍA de los
  precios sube de forma sostenida.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Que un solo producto se ponga más caro por una razón puntual (por ejemplo, una mala cosecha) no es, por sí solo, inflación."

explicacion: |
  Inflación es un fenómeno generalizado del conjunto de precios, no un
  solo producto aislado.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Con qué herramienta se mide oficialmente la inflación de un país?"
tipo: mc
opciones_explicitas:
  - "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"
  - "El sueldo promedio de los trabajadores"
  - "El precio del dólar, exclusivamente"
respuesta: "Un índice de precios (como el IPC), que sigue el costo de una canasta representativa de bienes y servicios"

explicacion: |
  El IPC (Índice de Precios al Consumidor) es el ejemplo estándar de
  este tipo de índice.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Por convención, un índice de precios arranca en un año base con valor 100, y a partir de ahí se compara cómo sube ese número."

explicacion: |
  Es la convención estándar de cualquier índice de precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)

respuesta: (ipc_actual - ipc_base) / ipc_base * 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios de un país arrancó el año en {ipc_base} (año base) y terminó en {ipc_actual}. ¿Cuál fue la tasa de inflación de ese período, en porcentaje?"

pasos:
  - "Variación: ({ipc_actual} - {ipc_base}) / {ipc_base}"
  - "En porcentaje: × 100"

explicacion: |
  Tasa de inflación = (Índice actual - Índice anterior) / Índice
  anterior × 100. Con año base 100, el resultado coincide con los
  puntos que subió el índice.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  ipc_anterior: uno_de([100, 120, 200])
  inflacion_pct: uno_de([5, 10, 20, 25, 50])

respuesta: ipc_anterior + ipc_anterior * inflacion_pct / 100
tipo: input
tolerancia_abs: 0

enunciado: "El índice de precios estaba en {ipc_anterior} y hubo una inflación del {inflacion_pct}% en el período siguiente. ¿En qué valor quedó el índice?"

explicacion: |
  Índice nuevo = Índice anterior + (Índice anterior × tasa de
  inflación).
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre este tema (PBI e inflación) y el tema de \"Plazo fijo vs. inflación\" visto antes?"
tipo: mc
opciones_explicitas:
  - "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"
  - "Son exactamente el mismo tema repetido"
  - "Este tema no tiene ninguna relación con la inflación"
respuesta: "Ese otro tema es la lectura PERSONAL de un dato de inflación ya conocido; este mide la inflación de todo el país desde cero, con un índice de precios"

explicacion: |
  Misma palabra, dos escalas: personal (un ahorro puntual) vs.
  macroeconómica (todo el país).
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "Cuando un noticiero dice \"la economía creció 3% este año\", ¿a qué PBI se refiere normalmente?"
tipo: mc
opciones_explicitas:
  - "Al PBI real (ya ajustado por inflación)"
  - "Al PBI nominal (sin ajustar)"
  - "Al PBI per cápita exclusivamente"
respuesta: "Al PBI real (ya ajustado por inflación)"

explicacion: |
  Hablar de "crecimiento" implica que se produjo más, no que sólo
  subieron los precios — por eso se usa el PBI real.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "calculo"]

variables:
  pbi_anterior: random(1, 20) * 20 * 1000
  crecimiento_pct: uno_de([5, 10, 15, 20, 25])
  pbi_actual: pbi_anterior + pbi_anterior * crecimiento_pct / 100

respuesta: (pbi_actual - pbi_anterior) / pbi_anterior * 100
tipo: input
tolerancia_abs: 0

enunciado: "El PBI real de un país fue ${pbi_anterior} millones un año, y ${pbi_actual} millones el año siguiente. ¿Cuál fue la tasa de crecimiento del PBI, en porcentaje?"

explicacion: |
  Tasa de crecimiento = (PBI actual - PBI anterior) / PBI anterior ×
  100 — la misma lógica que la tasa de inflación, aplicada al tamaño
  de la economía en vez de a los precios.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué significa la \"I\" (Interno) del PBI?"
tipo: mc
opciones_explicitas:
  - "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"
  - "Se cuenta sólo lo producido por empresas del propio país en cualquier lugar del mundo"
  - "Se cuenta sólo lo que se consume dentro del país"
respuesta: "Se cuenta lo producido DENTRO del país, sin importar la nacionalidad de quién lo produjo"

explicacion: |
  Es un criterio geográfico (dónde se produce), no de nacionalidad de
  quién produce.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La palabra \"Bruto\" del PBI significa que no se descuenta el desgaste de las máquinas y edificios usados para producir."

explicacion: |
  Es lo que distingue al PBI Bruto de un cálculo Neto, que sí
  descontaría esa depreciación.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

enunciado: "¿Qué tipo de organismo suele publicar el IPC oficial de un país?"
tipo: mc
opciones_explicitas:
  - "Un organismo estatal de estadísticas (como el INDEC en Argentina)"
  - "Un banco privado cualquiera"
  - "Cada supermercado por separado"
respuesta: "Un organismo estatal de estadísticas (como el INDEC en Argentina)"

explicacion: |
  Es una medición oficial, centralizada en un organismo estadístico
  del Estado.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "avanzado"
  tags: ["macroeconomia", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos de cómo se mide la inflación de un país."
opciones_explicitas:
  - "Se calcula la variación porcentual del índice entre dos períodos"
  - "Se releva el precio de esa canasta mes a mes"
  - "Se define una canasta representativa de bienes y servicios"
  - "Se arma un índice de precios (base 100) con esos relevamientos"
respuesta_orden: ["Se define una canasta representativa de bienes y servicios", "Se releva el precio de esa canasta mes a mes", "Se arma un índice de precios (base 100) con esos relevamientos", "Se calcula la variación porcentual del índice entre dos períodos"]

explicacion: |
  Cada paso es prerrequisito del siguiente: sin canasta no hay
  relevamiento, sin relevamiento no hay índice, sin índice no hay
  variación que calcular.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "intermedio"
  tags: ["macroeconomia"]

variables:
  ipc_base: 100
  ipc_actual: 100 + random(5, 45)
  tasa: (ipc_actual - ipc_base) / ipc_base * 100

tipo: completar
enunciado: "Completá: Tasa de inflación = ({ipc_actual} - {ipc_base}) / {ipc_base} × 100 = ___ (tasa, en porcentaje)."
respuestas_validas:
  - tasa

explicacion: |
  Es la aplicación directa de la fórmula de tasa de inflación.
```

```
metadata:
  materia: "economia"
  tema: "pbi_e_inflacion"
  nivel: "basico"
  tags: ["macroeconomia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El PBI mide el tamaño de toda la economía de un país, y la inflación (a esta escala) mide el aumento generalizado de precios de todo el país, medido con un índice — distinto de la lectura personal de cuánto rinde un ahorro puntual."

explicacion: |
  Es la idea central de todo el tema.
```
