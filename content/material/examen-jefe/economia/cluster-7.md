# Examen jefe — [PENDIENTE #772]

> Logro #772. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **117 preguntas totales** en 5/5 secciones.

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

respuesta: "Un objetivo es una aspiración amplia y cualitativa, mientras que una meta es un resultado específico y cuantificable."

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
  escenarios: [["Incrementar la satisfacción del cliente en un 15% para diciembre de 2024.", "Mejorar la calidad del servicio."], ["Reducir los costos operativos en un 5% durante el próximo semestre.", "Gastar menos dinero."]]

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

respuesta: "cuantificable"
tipo: completar
respuestas_validas:
  - "cuantificable"

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
respuesta_orden: ["Misión de la empresa", "Objetivo estratégico", "Meta operativa", "Acción diaria"]
```

```
metadata:
  materia: "economia"
  tema: "objetivos_y_metas"
  nivel: "intermedio"
  tags: ["coherencia", "logica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Objetivo: 'Ser la empresa más rentable del sector'. Meta: 'Aumentar el margen de utilidad neta del 5% al 8% en un año'.", "Verdadero"], ["Objetivo: 'Mejorar el clima laboral'. Meta: 'Reducir la rotación de personal en un 20% para fin de año'.", "Verdadero"]]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]
respuesta: casos[caso_idx][1]

enunciado: "Determine si la relación entre el objetivo y la meta presentados en el caso es coherente: '{casos[caso_idx][0]}'"

explicacion: |
  En el caso 0, la meta de aumentar el margen de utilidad neta es coherente y directamente medible respecto al objetivo de rentabilidad. En el caso 1, la meta de reducir la rotación es un indicador directo y medible para alcanzar la mejora del clima laboral.
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
  escenario: uno_de([["Aumentar las ventas totales", "Aumentar las ventas en un 15% durante el segundo semestre de 2024"], ["Mejorar la satisfacción del cliente", "Lograr un puntaje de 9/10 en las encuestas de satisfacción para diciembre"], ["Reducir costos operativos", "Disminuir los gastos de logística en un 5% mensual durante el próximo trimestre"]])

respuesta: escenario[1]
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

respuesta_orden: ["Definir el objetivo general", "Establecer metas específicas", "Asignar recursos y tiempos", "Ejecutar y monitorear"]
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
  datos: [["Ventas actuales: 100.000 USD", "120.000 USD", "20%"], ["Clientes actuales: 500", "600", "20%"], ["Producción actual: 1000 unidades", "1100", "10%"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: "completar"
respuestas_validas:
  - datos[idx][2]

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
respuesta: "El objetivo es el fin último y la meta es el paso cuantificable"

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
  escenarios: [["Ser el líder del mercado regional", "Incrementar la cuota de mercado del 15% al 25% en un año"], ["Reducir la huella de carbono", "Disminuir las emisiones de CO2 en un 10% para diciembre de 2025"]]

tipo: completar
respuestas_validas:
  - escenarios[ejemplo_idx][1]
respuesta: escenarios[ejemplo_idx][1]

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
respuesta: "Todas las anteriores son errores comunes"

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

respuesta_orden: ["Definir la visión y misión de la empresa", "Establecer los objetivos generales estratégicos", "Determinar las metas tácticas y medibles", "Diseñar el plan de acción para ejecutar las metas"]

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

respuesta: "meta"
respuestas_validas:
  - "meta"
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
  casos: [["Reducir costos operativos", "Reducir costos operativos", "Reducir costos operativos"], ["Incrementar la rentabilidad", "Incrementar la rentabilidad", "Incrementar la rentabilidad"], ["Expandir la marca", "Expandir la marca", "Expandir la marca"]]
  metas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]

enunciado: "Si el objetivo es '{casos[caso_idx]}', ¿cuál de las siguientes opciones constituye una meta válida y medible?"

opciones_explicitas: ["Reducir costos operativos en un 5% mensual", "Incrementar la rentabilidad en un 10% anual", "Expandir la marca abriendo 3 sucursales en junio"]
tipo: mc
respuesta: metas[caso_idx]

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

respuesta_orden: ["Definir la visión y misión", "Establecer objetivos generales", "Diseñar metas específicas y medibles", "Ejecutar y monitorear resultados"]

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
  datos: [["Objetivo: Ser líderes en calidad. Meta: Lograr 95/100 en encuestas de satisfacción en diciembre.", 95], ["Objetivo: Crecimiento sostenido. Meta: Alcanzar 1.000 nuevos usuarios activos en 3 meses.", 1000]]

enunciado: "Para el escenario '{datos[dato_idx][0]}', el valor numérico que permite medir el cumplimiento de la meta es: ___"

respuesta: datos[dato_idx][1]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Las metas proporcionan el indicador numérico (KPI) necesario para evaluar si el objetivo general se está cumpliendo.
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
respuestas_validas:
  - "trueque"

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
  escenario: uno_de([["trigo", "herramientas de piedra"], ["lana", "cerámica"], ["fruta", "pieles"]])

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

tipo: vf
respuesta: verdadero

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

tipo: "ordenar"
opciones_explicitas: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]
respuesta_orden: ["Producción de excedentes", "Dificultad del trueque", "Aparición de la moneda"]

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
  caso: uno_de([["5 sacos de grano", "2 hachas de cobre"], ["3 cabras", "1 manta de lana"], ["10 cestas de fruta", "2 vasijas de barro"]])

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
respuestas_validas:
  - "doble coincidencia de deseos"

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

respuesta: "medio de cambio"
tipo: mc
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Si un comerciante utiliza una moneda para facilitar la transacción inmediata de un bien, está utilizando la moneda como: ___"

explicacion: |
  La función de medio de cambio permite que la moneda actúe como un intermediario en el intercambio, eliminando la necesidad de buscar una coincidencia exacta de bienes.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["evolucion_moneda", "historia_economica"]

respuesta_orden: ["Trueque", "Dinero Mercancía", "Dinero Papel", "Dinero Fiduciario"]
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

respuesta: 13
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
  escenario: uno_de([["conchas cauri", "conchas"], ["sal", "sal"]])

enunciado: "En diversas culturas antiguas, antes de la existencia de monedas acuñadas, se utilizaban objetos con valor intrínseco como medio de cambio. Un ejemplo común es el uso de {escenario[0]}."

opciones_explicitas: ["conchas", "sal", "piedras", "madera"]
respuesta: escenario[1]
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

respuestas_validas:
  - "durabilidad"
  - "divisibilidad"
  - "escasez"
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
  orden_pasos: [["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"], ["Trueque directo", "Uso de metales preciosos", "Moneda acuñada"], ["Trueque directo", "Uso de sal", "Moneda acuñada"]]

enunciado: "Ordene cronológicamente la evolución de los medios de intercambio en una economía en desarrollo."

opciones_explicitas: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
respuesta_orden: ["Trueque directo", "Uso de dinero mercancía", "Moneda acuñada"]
tipo: ordenar

explicacion: |
  La economía evoluciona desde el intercambio directo de bienes (trueque), pasando por objetos con valor intrínseco (dinero mercancía), hasta la estandarización con monedas metálicas.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "intermedio"
  tags: ["metales_preciosos", "valor_intrínseco"]

variables:
  metal_idx: uno_de([0, 1])
  metal_datos: [["oro", "oro"], ["plata", "plata"]]

enunciado: "El uso de {metal_datos[metal_idx][0]} como medio de cambio se debió a su valor intrínseco y su facilidad de transporte."

respuesta: metal_datos[metal_idx][1]
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
  problema_datos: [["doble coincidencia de deseos", "falta de divisibilidad"], ["doble coincidencia de deseos", "falta de durabilidad"]]

enunciado: "Uno de los principales obstáculos del trueque que impulsó la creación del dinero fue la ___."

opciones_explicitas: ["doble coincidencia de deseos", "falta de divisibilidad", "exceso de oferta"]
respuesta: problema_datos[problema_idx][0]
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
respuestas_validas:
  - "excedente"
  - "excedente_productivo"

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

respuesta: "mercado"
tipo: "completar"
respuestas_validas:
  - "mercado"

enunciado: "En una economía con división del trabajo, un {escenario[0]} produce un excedente de {escenario[1]}. Si este desea obtener un bien diferente, debe acudir al ___ para realizar un intercambio."

explicacion: |
  La especialización permite que cada individuo se concentre en una actividad, generando excedentes específicos que se intercambian en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "basico"
  tags: ["barter", "trueque", "moneda"]

tipo: ordenar
opciones_explicitas: ["trueque", "moneda", "dinero_fiduciario"]
respuesta_orden: ["trueque", "moneda", "dinero_fiduciario"]

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
  caso: uno_de(["sal", "conchas", "metales"])

respuesta: "unidad de cuenta"
tipo: "mc"
opciones_explicitas: ["unidad de cuenta", "medio de cambio", "reserva de valor"]

enunciado: "Para facilitar el comercio de excedentes, se utilizan objetos como medio de cambio. Si usamos {caso} para expresar y comparar el valor de otros bienes, estamos usando esa mercancía como:"

explicacion: |
  La moneda actúa como un estándar de valor que resuelve la dificultad de coincidencia de necesidades del trueque.
```

```
metadata:
  materia: "economia"
  tema: "origen_excedente_moneda_mercado"
  nivel: "avanzado"
  tags: ["mercado", "abstracto", "social"]

tipo: vf
respuesta: falso

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
respuestas_validas:
  - "divisibilidad"

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

respuesta_orden: ["Trueque", "Dinero Mercancía", "Dinero Fiat"]
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

## Sección: pitch-a-inversores (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["vocabulario", "fundamentos"]

respuesta: "elevator_pitch"
tipo: completar
respuestas_validas:
  - "elevator_pitch"
  - "elevator pitch"

enunciado: "La técnica de presentar una idea de negocio de forma extremadamente breve, como si se tuviera solo el tiempo que dura un viaje en ascensor, se denomina ___."

explicacion: |
  El 'elevator pitch' es una herramienta de comunicación diseñada para transmitir la esencia de un proyecto en menos de 60 segundos, captando el interés de un potencial inversor.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "inversion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: ["conseguir una reunión", "generar interés"]

respuesta: escenarios[escenario_idx]
tipo: mc
opciones_explicitas: ["conseguir una reunión", "vender el producto directamente", "generar interés", "obtener la firma del contrato en el momento"]

enunciado: "En un pitch inicial ante un inversor de capital de riesgo, ¿cuál suele ser el objetivo principal?"

explicacion: |
  Un pitch no busca cerrar la inversión en ese instante, sino despertar curiosidad suficiente para obtener una segunda reunión de análisis profundo (due diligence).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "propuesta_de_valor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental que un pitch identifique claramente un 'pain point' (punto de dolor) o problema real en el mercado para que la solución propuesta tenga sentido?"

explicacion: |
  Sin un problema validado, la solución es solo una idea sin demanda. El inversor busca negocios que resuelvan necesidades reales y cuantificables.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción"]

enunciado: "Ordena los siguientes elementos de un Pitch Deck según una estructura lógica de narrativa de negocios (storytelling):"

pasos:
  - "Identificar la necesidad"
  - "Presentar la propuesta"
  - "Explicar cómo se gana dinero"
  - "Mostrar resultados actuales"

explicacion: |
  Una narrativa efectiva comienza con el problema, presenta la solución, explica la monetización y finalmente demuestra que el modelo ya está funcionando (tracción).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["terminologia", "escalabilidad"]

respuesta: "escalabilidad"
tipo: completar
respuestas_validas:
  - "escalabilidad"
  - "scalability"

enunciado: "La capacidad de un modelo de negocio para aumentar sus ingresos de forma exponencial mientras sus costes crecen de forma lineal se conoce como ___."

explicacion: |
  La escalabilidad es el factor crítico para los inversores de Venture Capital, ya que permite retornos masivos sobre la inversión inicial.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "comunicacion", "emprendimiento"]

variables:
  idx: uno_de([0, 1, 2])
  problemas: ["La gente pierde tiempo buscando estacionamiento.", "El desperdicio de comida en restaurantes.", "La dificultad de encontrar tutores de idiomas."]
  propuestas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning"]

respuesta: propuestas[idx]
tipo: mc
opciones_explicitas: ["App de parking inteligente", "App de rescate gastronómico", "Plataforma de micro-learning", "Solución de logística rápida"]

enunciado: "Un pitch aborda el siguiente problema: {problemas[idx]} ¿Cuál de estas opciones representa mejor la propuesta de valor para ese problema?"

explicacion: |
  Un pitch efectivo debe comunicar la solución de forma directa y concisa, permitiendo que el inversor entienda el núcleo del negocio en pocos segundos.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura", "inversion"]

variables:
  orden_logico: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "The Ask"]

respuesta_orden: orden_logico
tipo: ordenar

enunciado: "Un inversor busca una narrativa coherente. Ordena los siguientes elementos de un Pitch Deck en el orden lógico recomendado para construir una historia convincente:"

pasos:
  - "Identificar el dolor del mercado."
  - "Presentar cómo tu producto resuelve ese dolor."
  - "Explicar cómo vas a ganar dinero."
  - "Mostrar métricas actuales que validen el interés."
  - "Presentar a las personas que ejecutan la idea."
  - "Indicar cuánto capital necesitas y para qué."

explicacion: |
  La estructura narrativa (Storytelling) debe llevar al inversor desde el problema (dolor) hasta la oportunidad de negocio (tracción) y finalmente la necesidad de capital (The Ask).
opciones_explicitas: orden_logico
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["mercado", "tam", "som", "metricas"]

variables:
  datos: [[1000000, 500000, 50000], [5000000, 2000000, 100000], [2500000, 1000000, 250000]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0

enunciado: "En el análisis de mercado para un pitch, si el mercado total (TAM) es de ${datos[idx][0]}, el mercado que puedes alcanzar con tu modelo de servicio (SAM) es de ${datos[idx][1]}, ¿cuál es el tamaño de tu mercado objetivo real (SOM) que puedes capturar a corto plazo?"

explicacion: |
  El SOM (Serviceable Obtainable Market) es la parte del SAM que tu empresa puede capturar de manera realista con sus recursos actuales.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["traction", "validacion", "metricas"]

respuesta: verdadero
tipo: vf

enunciado: "Si un emprendedor presenta en su pitch que tiene un crecimiento mensual del 20% en usuarios activos (MoM) y una tasa de retención constante, está demostrando 'Traction' (Tracción), lo cual reduce el riesgo percibido por el inversor."

explicacion: |
  La tracción es la evidencia de que el mercado está respondiendo positivamente a tu producto, lo cual es uno de los puntos más críticos en un pitch.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "financiamiento", "equity"]

variables:
  escenario_financiero: [["$500,000", "15%", "Desarrollo de producto y marketing"], ["$1,000,000", "10%", "Expansión internacional y ventas"], ["$250,000", "5%", "Contratación de equipo técnico"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario_financiero[idx][2]
tipo: completar
respuestas_validas:
  - escenario_financiero[idx][2]

enunciado: "En la última diapositiva, el emprendedor debe ser claro con el 'Ask'. Si el emprendedor busca una inversión de ${escenario_financiero[idx][0]} a cambio de un ${escenario_financiero[idx][1]} de participación, el objetivo principal de ese capital según su plan es: ___."

pasos:
  - "Identificar el monto solicitado."
  - "Identificar el porcentaje de equity ofrecido."
  - "Identificar el uso de fondos (Use of Funds)."

explicacion: |
  El 'Ask' no solo debe decir cuánto dinero necesitas, sino también cuánto de la empresa estás dispuesto a ceder y, crucialmente, en qué se va a gastar ese dinero para generar retorno.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch", "errores", "inversores"]

enunciado: "Un error común en un pitch es centrarse excesivamente en las características de la solución (el producto) en lugar de enfocarse en el ___ (el problema que se resuelve)."

respuestas_validas:
  - "problema"
respuesta: "problema"
tipo: completar

explicacion: |
  Los inversores buscan resolver problemas reales y dolorosos para un mercado grande. Si tu pitch solo habla de funciones de una app sin explicar el problema que ataca, pierdes el interés del inversor.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["competencia", "pitch"]

enunciado: "Si un emprendedor afirma durante su pitch que 'no tiene competencia en el mercado', ¿es esto una señal positiva o un error?"

opciones_explicitas: ["Es una señal positiva", "Es un error"]
respuesta: "Es un error"
tipo: mc

explicacion: |
  Decir que no hay competencia suele interpretarse como que el emprendedor no ha investigado lo suficiente o que no hay mercado. Siempre hay competencia, ya sea directa o indirecta (sustitutos).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["metricas", "pitch"]

enunciado: "En un pitch para inversores, ¿es verdadero o falso que la 'tracción' (evidencia de que el producto funciona y hay clientes) es más convincente que una simple idea brillante?"

respuesta: verdadero
tipo: vf

explicacion: |
  La tracción (ventas, usuarios activos, cartas de intención) reduce el riesgo percibido por el inversor. Una idea sin tracción es solo una hipótesis; una idea con tracción es un negocio en marcha.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "pitch"]

opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Equipo", "Call to Action"]
tipo: ordenar

enunciado: "Ordena los elementos de un pitch deck efectivo para que la narrativa sea convincente y lógica:"

explicacion: |
  Un pitch debe seguir un arco narrativo: primero estableces el dolor (Problema), presentas la cura (Solución), explicas cómo ganas dinero (Modelo), demuestras que puedes ejecutarlo (Equipo) y pides lo que necesitas (Call to Action).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["valoracion", "finanzas", "pitch"]

variables:
  escenario: uno_de([["La startup tiene 0 ventas y pide 10 millones de dólares", "exagerada"], ["La startup tiene 100 clientes recurrentes y pide 500k dólares", "razonable"]])

enunciado: "Analiza el caso: {escenario[0]}. La valoración o el pedido de capital es ___."

respuestas_validas:
  - "exagerada"
  - "razonable"
respuesta: escenario[1]
tipo: completar

explicacion: |
  Pedir montos desproporcionados a la etapa de tracción actual genera desconfianza. El emprendedor debe demostrar que el capital solicitado es necesario para alcanzar los hitos que justifican la valoración.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "business_plan", "inversion"]

respuesta: "Pitch"
tipo: completar
respuestas_validas:
  - "Pitch"

enunciado: "Mientras que el Business Plan es un documento detallado y extenso que describe la estrategia a largo plazo, el ___ es una presentación breve diseñada para captar la atención inmediata del inversor."

explicacion: |
  El Pitch es una herramienta de comunicación rápida y persuasiva, mientras que el Business Plan es un documento operativo y estratégico exhaustivo.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["objetivo", "pitch", "inversion"]

respuesta: falso
tipo: vf

enunciado: "¿El objetivo principal de un Pitch es presentar todos los detalles técnicos y financieros de la empresa para cerrar la inversión en ese mismo instante?"

explicacion: |
  Falso. El objetivo de un Pitch no es cerrar la inversión, sino conseguir la siguiente reunión o mostrar suficiente interés para avanzar en el proceso de Due Diligence.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["pitch_deck", "estructura"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["Problema", "Solución", "Modelo de Negocio", "Equipo", "Mercado"], ["Problema", "Propuesta de Valor", "Modelo de Negocio", "Tracción", "Equipo"], ["Problema", "Solución", "Modelo de Negocio", "Competencia", "Equipo"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Solución", "Propuesta de Valor", "Competencia", "Equipo"]

enunciado: "En un Pitch Deck efectivo, después de presentar el {escenario[idx][0]}, el siguiente elemento clave debe ser la {escenario[idx][1]}."

explicacion: |
  La secuencia lógica de un pitch busca validar que el problema identificado tiene una solución clara y viable antes de pasar a cómo se gana dinero.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["elevator_pitch", "pitch_deck"]

respuesta: "Elevator Pitch"
tipo: completar
respuestas_validas:
  - "Elevator Pitch"

enunciado: "La principal diferencia es la duración y el soporte: mientras que un Pitch Deck es una presentación visual apoyada en diapositivas, el ___ es un discurso verbal de pocos segundos, similar a lo que se diría en un ascensor."

explicacion: |
  El Elevator Pitch es una versión ultra-resumida y verbal, centrada en despertar curiosidad, mientras que el Pitch Deck es una narrativa estructurada con soporte visual.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["estructura", "storytelling"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Llamado a la acción"]

enunciado: "Ordena los elementos de un pitch de alto impacto siguiendo la lógica de narrativa de ventas (Storytelling):"

pasos:
  - "Identificar la necesidad del mercado"
  - "Presentar cómo se resuelve"
  - "Explicar cómo se monetiza"
  - "Mostrar pruebas de que funciona"
  - "Indicar qué se necesita del inversor"

explicacion: |
  Un buen pitch debe seguir un arco narrativo: Dolor (Problema) -> Alivio (Solución) -> Viabilidad (Modelo) -> Validación (Tracción) -> Cierre (Call to Action).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "basico"
  tags: ["pitch", "elevator_pitch", "comunicacion"]

variables:
  datos: [["Software de gestión de residuos para PYMES", "resolver el problema de la logística de reciclaje"], ["App de delivery de productos locales", "conectar productores con consumidores finales"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "En un elevator pitch, después de presentar el problema, el emprendedor debe presentar la propuesta de valor para {datos[idx][0]} con el fin de {datos[idx][1]}."

explicacion: |
  El objetivo del pitch es conectar el problema detectado con la solución específica que ofrece tu modelo de negocio de forma rápida.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["hook", "atencion", "inversores"]

variables:
  datos: [["Una startup de biotecnología", "revolucionar la medicina preventiva"], ["Una fintech de microcréditos", "democratizar el acceso al capital"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["revolucionar la medicina preventiva", "democratizar el acceso al capital", "ganar dinero rápido", "dominar el mercado global"]

enunciado: "Si estás presentando un caso de {datos[idx][0]}, un buen 'hook' debería enfocarse en la misión de {datos[idx][1]} para captar el interés emocional del inversor."

explicacion: |
  Un buen gancho no se trata solo de rentabilidad, sino del impacto o la transformación que la idea genera en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "intermedio"
  tags: ["validacion", "traction", "datos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es fundamental presentar métricas de tracción (como usuarios activos o ingresos mensuales) durante el pitch para demostrar que el modelo de negocio es escalable y validado?"

explicacion: |
  Los inversores buscan evidencia de que el mercado realmente quiere el producto (Product-Market Fit), y las métricas son la prueba de ello.
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["pitch_deck", "orden", "estructura"]

respuesta_orden: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]
tipo: ordenar
opciones_explicitas: ["Problema", "Solución", "Modelo de Negocio", "Tracción", "Equipo", "El Pedido"]

enunciado: "Ordena los elementos esenciales de un Pitch Deck efectivo para asegurar un flujo narrativo lógico que lleve al inversor hacia la llamada a la acción."

explicacion: |
  La narrativa debe ir de la necesidad (Problema) a la ejecución (Solución/Modelo/Tracción/Equipo) y finalizar con lo que necesitas (El Pedido/Ask).
```

```
metadata:
  materia: "economia"
  tema: "pitch_a_inversores"
  nivel: "avanzado"
  tags: ["ask", "funding", "financiamiento"]

variables:
  datos: [["500.000 USD", "expandir operaciones", "18 meses"], ["200.000 USD", "desarrollo de producto", "12 meses"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "Al presentar el 'Ask' en el pitch, no basta con decir cuánto dinero necesitas; es crucial especificar que el objetivo es {datos[idx][1]} en un plazo de {datos[idx][2]}."

explicacion: |
  Un inversor no solo pone dinero; compra una parte de tu visión. Debe saber exactamente en qué se usará cada centavo y qué hitos se alcanzarán con ello.
```

## Sección: libro-diario-mayor (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Diario?"
tipo: mc
opciones_explicitas:
  - "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"
  - "Un resumen de las ganancias del último mes"
  - "El registro de cada cuenta por separado"
respuesta: "El registro de todos los asientos contables, en el orden cronológico en que ocurrieron"

explicacion: |
  Es la fuente original y cronológica de todos los movimientos.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es el Libro Mayor?"
tipo: mc
opciones_explicitas:
  - "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"
  - "Un libro distinto que registra información que no está en el Diario"
  - "El registro exclusivo de las cuentas de Pasivo"
respuesta: "La misma información del Diario, reorganizada por cuenta, con una hoja para cada una"

explicacion: |
  No agrega información nueva: reorganiza lo que ya está en el Diario.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario organiza los asientos en orden cronológico, por fecha."

explicacion: |
  Es su criterio de organización principal.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor organiza los movimientos por cuenta, no por fecha."

explicacion: |
  Cada cuenta acumula todos sus movimientos, sin importar cuándo
  ocurrieron.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor no es una fuente de información nueva: todo lo que aparece ahí ya estaba registrado en el Libro Diario."

explicacion: |
  Es un traslado y una reorganización, no un registro independiente.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Cómo se llama, tradicionalmente, el proceso de trasladar cada línea del Diario a la cuenta correspondiente del Mayor?"
tipo: mc
opciones_explicitas:
  - "Pasar al mayor (o mayorización)"
  - "Cerrar el balance"
  - "Auditar la cuenta"
respuesta: "Pasar al mayor (o mayorización)"

explicacion: |
  Es el nombre técnico de ese traslado.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el Libro Mayor, cada cuenta (Caja, Mercadería, etc.) tiene su propia hoja, donde se acumulan todos sus movimientos."

explicacion: |
  Es lo que permite calcular el saldo de una cuenta puntual sin revisar
  todo el resto.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

enunciado: "¿Qué es la \"cuenta T\"?"
tipo: mc
opciones_explicitas:
  - "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"
  - "Una cuenta especial reservada para impuestos"
  - "El nombre de la primera cuenta de cualquier plan contable"
respuesta: "Una forma visual simple de representar una cuenta, con el Debe a la izquierda y el Haber a la derecha"

explicacion: |
  El nombre viene de la forma de letra \"T\" que arma la línea vertical
  (que separa Debe y Haber) con la horizontal (debajo del nombre de la
  cuenta).
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En una cuenta T, el Debe se anota a la izquierda y el Haber a la derecha."

explicacion: |
  Es la misma convención de columnas ya vista en el tema de Debe y
  Haber.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario sirve para reconstruir la historia completa y en orden de lo que le pasó a la empresa, útil por ejemplo para una auditoría."

explicacion: |
  Su organización cronológica lo hace ideal para reconstruir secuencias
  de hechos.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Mayor sirve para saber el saldo actual de una cuenta puntual de un vistazo, sin tener que revisar asiento por asiento."

explicacion: |
  Es su ventaja frente al Diario para esa pregunta puntual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000

respuesta: debe_caja - haber_caja
tipo: input
tolerancia_abs: 0

enunciado: "En la hoja del Mayor de la cuenta \"Caja\" (de Activo), el total acumulado en el Debe es ${debe_caja}, y en el Haber ${haber_caja}. ¿Cuál es el saldo actual de Caja?"

explicacion: |
  En una cuenta de Activo, el saldo es el total del Debe menos el total
  del Haber.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "avanzado"
  tags: ["contabilidad", "calculo"]

variables:
  debe_1: random(50, 200) * 1000
  debe_2: random(50, 200) * 1000
  haber_1: random(50, 150) * 1000

respuesta: debe_1 + debe_2 - haber_1
tipo: input
tolerancia_abs: 0

enunciado: "La cuenta \"Caja\" tuvo tres movimientos: dos entradas al Debe de ${debe_1} y ${debe_2}, y una salida al Haber de ${haber_1}. ¿Cuál es el saldo final de Caja?"

pasos:
  - "Total Debe: {debe_1} + {debe_2} = {debe_1 + debe_2}"
  - "Saldo: {debe_1 + debe_2} - {haber_1}"

explicacion: |
  Se suman todos los movimientos del Debe, todos los del Haber, y se
  restan.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber exactamente qué movimientos económicos ocurrieron un día puntual, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Diario"
  - "El Libro Mayor"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Diario"

explicacion: |
  Está organizado cronológicamente, así que es el indicado para
  reconstruir qué pasó en una fecha concreta.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "problema"]

enunciado: "Para saber cuánto dinero hay en Caja hoy, sin revisar movimiento por movimiento, ¿qué libro conviene consultar?"
tipo: mc
opciones_explicitas:
  - "El Libro Mayor"
  - "El Libro Diario"
  - "Ninguno de los dos tiene esa información"
respuesta: "El Libro Mayor"

explicacion: |
  La hoja de Caja en el Mayor ya tiene acumulado el saldo actual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "orden"]

tipo: ordenar
enunciado: "Ordená estos pasos del proceso contable en el orden en que ocurren."
opciones_explicitas:
  - "Se calculan los saldos de cada cuenta en el Mayor"
  - "Se registra el movimiento como asiento en el Libro Diario"
  - "Se ocurre un movimiento económico en la empresa"
respuesta_orden: ["Se ocurre un movimiento económico en la empresa", "Se registra el movimiento como asiento en el Libro Diario", "Se calculan los saldos de cada cuenta en el Mayor"]

explicacion: |
  Primero el hecho económico, después el registro cronológico, y
  finalmente la reorganización por cuenta.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "verificacion"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  correcto: debe_caja - haber_caja
  error: uno_de([0, 0, 0, 50000, -50000])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1000)
tipo: vf

enunciado: "¿Está bien calculado esto? Cuenta Caja con ${debe_caja} en el Debe y ${haber_caja} en el Haber, saldo informado: ${mostrado}."

explicacion: |
  Se vuelve a restar el Haber del Debe y se compara con el valor
  informado.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad"]

variables:
  debe_caja: random(100, 500) * 1000
  haber_caja: random(50, 300) * 1000
  saldo: debe_caja - haber_caja

tipo: completar
enunciado: "La cuenta Caja tiene ${debe_caja} en el Debe y ${haber_caja} en el Haber. Completá: ___ (saldo) = {debe_caja} - {haber_caja}."
respuestas_validas:
  - saldo

explicacion: |
  Es la aplicación directa de la fórmula de saldo de una cuenta de
  Activo.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Para armar el balance final de una empresa, se parte de los saldos que ya están calculados cuenta por cuenta en el Libro Mayor."

explicacion: |
  Es el paso siguiente en el proceso contable (estados contables), que
  no se construye en este tema puntual.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "intermedio"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario y el Libro Mayor muestran, en el fondo, la misma información contable, organizada de dos formas distintas y complementarias."

explicacion: |
  Uno por fecha, el otro por cuenta — ninguno reemplaza al otro.
```

```
metadata:
  materia: "economia"
  tema: "libro_diario_mayor"
  nivel: "basico"
  tags: ["contabilidad", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El Libro Diario registra los asientos en orden cronológico; el Libro Mayor reorganiza esos mismos asientos por cuenta, para poder calcular el saldo actual de cada una."

explicacion: |
  Es la idea central de todo el tema.
```

