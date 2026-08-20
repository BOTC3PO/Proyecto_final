# Economia — Objetivos y metas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Diferencia conceptual básica

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos"]

tipo: mc
opciones_explicitas: ["Un objetivo es un resultado específico y cuantificable, mientras que una meta es una aspiración amplia.", "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable.", "Ambos términos son sinónimos y se usan indistintamente en la administración.", "El objetivo es el camino y la meta es el destino final."]

enunciado: "En el ámbito de la administración, ¿cuál es la diferencia fundamental entre un objetivo y una meta?"

respuesta: "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable."

explicacion: |
  Los objetivos suelen ser declaraciones amplias de lo que se desea lograr (ej. 'Ser líderes en el mercado'), mientras que las metas son pasos específicos, medibles y con un tiempo determinado para alcanzar esos objetivos (ej. 'Aumentar las ventas un 10% en el primer trimestre').
```

### 2 — Identificación de metas SMART

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["metas", "smart"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Incrementar la satisfacción del cliente en un 15% para diciembre de 2024.", "Mejorar la calidad del servicio."], ["Reducir los costos operativos en un 5% durante el próximo semestre.", "Gastar menos dinero."]]

tipo: vf
respuesta: verdadero

enunciado: "Analice el siguiente enunciado: '{escenarios[escenario_idx][0]}' es un ejemplo de una meta concreta y medible."

explicacion: |
  Para que una meta sea efectiva, debe ser específica, medible, alcanzable, relevante y con un tiempo definido (SMART). El enunciado cumple con tener un indicador (15% o 5%) y un plazo determinado.
```

### 3 — Completar terminología

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["terminologia"]

tipo: completar
respuestas_validas:
  - "cuantificable"
  - "cuantificable"

enunciado: "Para que una meta sea considerada efectiva, debe ser __________, es decir, debe poder medirse a través de indicadores numéricos."

explicacion: |
  La cuantificación es lo que permite saber si se ha alcanzado la meta o qué tan cerca se está de lograrla. Sin medición, no hay control administrativo.
```

### 4 — Jerarquía de planificación

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
respuesta_orden: ["Misión de la empresa", "Objetivo estratégico", "Meta operativa", "Acción diaria"]
```

### 5 — Análisis de coherencia

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["coherencia", "logica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Objetivo: 'Ser la empresa más rentable del sector'. Meta: 'Aumentar el margen de utilidad neta del 5% al 8% en un año'.", "Falso"], ["Objetivo: 'Mejorar el clima laboral'. Meta: 'Reducir la rotación de personal en un 20% para fin de año'.", "Verdadero"]]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]
respuesta: casos[caso_idx][1]

enunciado: "Determine si la relación entre el objetivo y la meta presentados en el caso es coherente: '{casos[caso_idx][0]}'"

explicacion: |
  En el caso 0 (Falso), la meta es coherente con el objetivo. En el caso 1 (Verdadero), la meta de reducir la rotación es un indicador directo y medible para alcanzar la mejora del clima laboral.
```

### 6 — Diferencia conceptual

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

### 7 — Identificación de metas

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_SMART", "medicion"]

variables:
  escenario: uno_de([["Aumentar las ventas totales", "Aumentar las ventas en un 15% durante el segundo semestre de 2024"], ["Mejorar la satisfacción del cliente", "Lograr un puntaje de 9/10 en las encuestas de satisfacción para diciembre"], ["Reducir costos operativos", "Disminuir los gastos de logística en un 5% mensual durante el próximo trimestre"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: [escenario[0], escenario[1], "Reducir la rotación de personal"]

enunciado: "Dada la siguiente lista de declaraciones, selecciona aquella que represente una META concreta y medible (SMART) en lugar de un objetivo general: {escenario[0]}"

explicacion: |
  Una meta debe ser cuantificable y tener un plazo. Mientras que '{escenario[0]}' es una intención general, '{escenario[1]}' proporciona un número (15%) y un tiempo (segundo semestre), permitiendo su medición real.
```

### 8 — Veracidad de la medición

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

### 9 — Proceso de planificación

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["pasos", "planificacion"]

respuesta_orden: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]
tipo: "ordenar"
opciones_explicitas: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]

enunciado: "Ordena lógicamente los pasos para pasar de una visión empresarial a la ejecución de una estrategia de gestión:"

explicacion: |
  La planificación estratégica siempre comienza con la visión macro (objetivo), se desglosa en pasos accionables y medibles (metas), se asignan los medios para lograrlas y finalmente se controla el proceso.
```

### 10 — Completar la meta

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["calculo", "indicadores"]

variables:
  datos: [["Ventas actuales: 100.000 USD", "120.000 USD", "10%"], ["Clientes actuales: 500", "600", "20%"], ["Producción actual: 1000 unidades", "1100", "10%"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: "completar"
respuestas_validas:
  - datos[idx][2]

enunciado: "Si el objetivo general es 'Incrementar la facturación anual', y actualmente se facturan {datos[idx][0]}, una meta concreta para este año sería alcanzar los {datos[idx][1]} USD, lo que representa un incremento del ___."

explicacion: |
  Para convertir un objetivo en meta, debemos calcular la diferencia porcentual o absoluta. En este caso, el incremento respecto al valor base definido en el escenario sorteado.
```

### 11 — Diferencia fundamental

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["El objetivo es el fin último y la meta es el paso cuantificable", "El objetivo es el paso cuantificable y la meta es el fin último", "Son sinónimos en la práctica administrativa", "La meta es cualitativa y el objetivo es cuantitativo"]
respuesta: "El objetivo es el fin último y la meta es el paso cuantificable"

enunciado: "En el proceso de planificación estratégica, ¿cuál es la distinción principal entre un objetivo general y una meta?"

explicacion: |
  Un objetivo general describe un estado deseado a largo plazo (el "qué"), mientras que una meta es un punto de referencia específico, medible y con un tiempo determinado que ayuda a alcanzar ese objetivo (el "cuánto" y "cuándo").
```

### 12 — Identificación de error

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

### 13 — Completar la jerarquía

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

variables:
  ejemplo_idx: uno_de([0, 1])
  escenarios: [["Ser el líder del mercado regional", "Incrementar la cuota de mercado del 15% al 25% en un año"], ["Reducir la huella de carbono", "Disminuir las emisiones de CO2 en un 10% para diciembre de 2025"]]

tipo: completar
respuestas_validas:
  - escenarios[ejemplo_idx][1]
respuesta: escenarios[ejemplo_idx][1]

enunciado: "Dado el siguiente objetivo general: '{escenarios[ejemplo_idx][0]}', la meta concreta correspondiente es: ___"

explicacion: |
  La meta debe transformar la intención cualitativa en un dato cuantitativo y temporal. En el primer caso es la cuota de mercado; en el segundo, la reducción de emisiones con fecha límite.
```

### 14 — El error de la ambigüedad

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["metas_smart", "errores"]

tipo: mc
opciones_explicitas: ["Falta de temporalidad", "Falta de cuantificación", "Falta de relevancia", "Todas las anteriores son errores comunes"]
respuesta: "Todas las anteriores son errores comunes"

enunciado: "Un error crítico al transformar un objetivo en meta es presentar una declaración que no permite saber si se ha logrado o no. Esto sucede principalmente por:"

explicacion: |
  Para que una meta sea efectiva, debe ser medible (cuantificación) y tener un plazo (temporalidad). Sin estos elementos, la meta es ambigua y no permite el control administrativo.
```

### 15 — Secuencia de planificación

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

enunciado: "Ordene correctamente los pasos del proceso de planificación, desde la visión macro hasta la ejecución operativa:"

respuesta_orden: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

explicacion: |
  La planificación sigue un flujo descendente: primero se define la identidad (visión/misión), luego el rumbo (objetivos), después los hitos concretos (metas) y finalmente el cómo (plan de acción).
```

### 16 — Objetivo vs Meta

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

### 17 — Veracidad de la medición

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

### 18 — Jerarquía de la planificación

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["jerarquia", "procesos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Incrementar la rentabilidad", "Aumentar el margen de beneficio neto en un 5% anual"], ["Expandir la presencia de marca", "Abrir 3 nuevas sucursales en la región norte antes de diciembre"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - datos[escenario_idx][1]

enunciado: "Considere el siguiente objetivo general: '{datos[escenario_idx][0]}'. Una meta concreta que represente este objetivo sería: ___"

pasos:
  - "Identificar el fin último (objetivo)."
  - "Transformar el fin en una acción medible con tiempo y cantidad (meta)."

explicacion: |
  La meta debe desglosar el objetivo en términos de 'cuánto', 'cuándo' y 'cómo' de forma que se pueda verificar su cumplimiento.
```

### 19 — Atributos de una meta

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["caracteristicas"]

respuesta: "específica, medible, alcanzable, relevante y con tiempo"
tipo: "completar"
respuestas_validas:
  - "específica, medible, alcanzable, relevante y con tiempo"

enunciado: "Para que una meta sea efectiva y se diferencie de un deseo vago, se recomienda que cumpla con el criterio SMART, lo que significa que debe ser ___."

explicacion: |
  El acrónimo SMART (Specific, Measurable, Achievable, Relevant, Time-bound) es el estándar para transformar objetivos en metas operativas.
```

### 20 — Secuencia lógica de planificación

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["secuencia", "logica"]

respuesta_orden: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas"]
tipo: "ordenar"
opciones_explicitas: ["Definir misión", "Establecer objetivos", "Determinar metas", "Diseñar tácticas"]

enunciado: "Ordene los siguientes elementos según la jerarquía lógica de la planificación estratégica, desde lo más abstracto a lo más concreto:"

explicacion: |
  La planificación comienza con la identidad (misión), sigue con la dirección (objetivos), se desglosa en hitos (metas) y finalmente en la ejecución táctica.
```

### 21 — Diferencia conceptual

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

respuestas_validas:
  - "meta"
  - "objetivo general"
tipo: completar

explicacion: |
  El primer elemento es un objetivo general (aspiracional y amplio), mientras que el segundo es una meta (específica, medible y con un plazo determinado).
```

### 22 — Identificación de metas

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "basico"
  tags: ["administracion", "metas"]

variables:
  caso_idx: uno_de([0,1,2])
  casos: [["Reducir costos operativos", "Reducir costos operativos", "Reducir costos operativos"], ["Incrementar la rentabilidad", "Incrementar la rentabilidad", "Incrementar la rentabilidad"], ["Expandir la marca", "Expandir la marca", "Expandir la marca"]]
  metas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]

enunciado: "Si el objetivo es '{casos[caso_idx]}', ¿cuál de las siguientes opciones constituye una meta válida y medible?"

opciones_explicitas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]
tipo: mc
respuesta: metas[caso_idx]

explicacion: |
  Una meta debe ser cuantificable y tener un tiempo definido para poder ser medida frente al objetivo general.
```

### 23 — Veracidad de conceptos

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

### 24 — Secuencia de planificación

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["proceso", "planificacion"]

enunciado: "Ordene los pasos lógicos para la planificación estratégica de una empresa:"

opciones_explicitas: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]
tipo: ordenar

respuesta_orden: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]

explicacion: |
  La planificación comienza con la filosofía organizacional (visión/misión), sigue con los propósitos amplios (objetivos), luego se desglosan en acciones cuantificables (metas) y finalmente se ejecutan.
```

### 25 — Análisis de métricas

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "avanzado"
  tags: ["analisis", "metas"]

variables:
  dato_idx: uno_de([0,1])
  datos: [["Objetivo: Ser líderes en calidad. Meta: Lograr 95/100 en encuestas de satisfacción en diciembre.", 95], ["Objetivo: Crecimiento sostenido. Meta: Alcanzar 1.000 nuevos usuarios activos en 3 meses.", 1000]]

enunciado: "Para el escenario '{datos[dato_idx][0]}', el valor numérico que permite medir el cumplimiento de la meta es: ___"

respuestas_validas:
  - "95"
  - "1000"
tipo: completar

explicacion: |
  Las metas proporcionan el indicador numérico (KPI) necesario para evaluar si el objetivo general se está cumpliendo.
```
