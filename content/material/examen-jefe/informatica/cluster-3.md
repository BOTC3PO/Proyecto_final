# Examen jefe — [PENDIENTE #818]

> Logro #818. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **119 preguntas totales** en 5/5 secciones.

---

## Sección: tipos-de-so-por-dispositivo (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["concepto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Todos los dispositivos usan el mismo tipo de sistema operativo, sin importar su función."

explicacion: |
  Los SO no son "talla única": están diseñados según las necesidades de
  hardware y objetivos de cada tipo de dispositivo.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["mainframes"]

variables:
  n: uno_de([1, 1])

respuesta: "procesar volúmenes masivos de datos con disponibilidad casi ininterrumpida"
tipo: mc
opciones_explicitas: ["procesar volúmenes masivos de datos con disponibilidad casi ininterrumpida", "ofrecer la mejor interfaz gráfica para el usuario", "consumir la menor batería posible"]

enunciado: "Los mainframes están diseñados principalmente para..."

explicacion: |
  Son el corazón de instituciones financieras, aerolíneas y gobiernos:
  priorizan la integridad de datos y el procesamiento en bloque.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["servidores"]

variables:
  ejemplo_so: uno_de(["Linux", "Windows Server"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo_so}\" es mencionado en la teoría como ejemplo de sistema operativo típico de un servidor."

explicacion: |
  Ambos son SO reales usados en servidores, enfocados en gestión de
  redes, seguridad perimetral y entrega de recursos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["servidores"]

variables:
  n: uno_de([1, 1])

respuesta: "escalabilidad: aumentar capacidad según demanda sin detenerse"
tipo: mc
opciones_explicitas: ["escalabilidad: aumentar capacidad según demanda sin detenerse", "una interfaz gráfica vistosa para el usuario final", "un consumo energético mínimo"]

enunciado: "Una característica clave de los SO de servidor, según la teoría, es..."

explicacion: |
  A diferencia de un mainframe aislado, un servidor debe poder crecer en
  capacidad según la demanda sin interrumpir el servicio.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["diferencia mainframe servidor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los mainframes suelen ser sistemas aislados y centralizados, mientras que los servidores operan en entornos distribuidos."

explicacion: |
  Es una diferencia clave entre ambos: el mainframe centraliza, el
  servidor se conecta y distribuye recursos a otros equipos por red.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["pcs"]

variables:
  so: uno_de(["Windows", "macOS", "distribuciones de Linux"])

respuesta: verdadero
tipo: vf

enunciado: "\"{so}\" es mencionado en la teoría como sistema operativo típico de una computadora personal (PC)."

explicacion: |
  Los tres priorizan la experiencia del usuario, la interfaz gráfica y
  la compatibilidad con periféricos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["pcs"]

variables:
  n: uno_de([1, 1])

respuesta: "facilitar la interacción humana con interfaz gráfica y multitarea ligera"
tipo: mc
opciones_explicitas: ["facilitar la interacción humana con interfaz gráfica y multitarea ligera", "garantizar respuesta en milisegundos para sistemas críticos", "controlar un único hardware específico con consumo mínimo"]

enunciado: "El objetivo principal de un SO para PC es..."

explicacion: |
  A diferencia de los sistemas embebidos o de tiempo real, la PC busca
  facilitar la interacción del usuario con aplicaciones diversas.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["tiempo real"]

variables:
  ejemplo: uno_de(["control industrial", "aviónica", "equipos médicos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{ejemplo}\" es un ámbito donde los sistemas operativos de tiempo real son vitales, según la teoría."

explicacion: |
  En estos ámbitos, un retraso de milisegundos puede ser catastrófico,
  así que se necesita una respuesta estrictamente predecible.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["tiempo real"]

variables:
  n: uno_de([1, 1])

respuesta: "que una tarea se complete dentro de un plazo estricto y predecible"
tipo: mc
opciones_explicitas: ["que una tarea se complete dentro de un plazo estricto y predecible", "que el usuario tenga la mejor experiencia visual", "que el dispositivo consuma la menor batería posible"]

enunciado: "Un sistema operativo de tiempo real garantiza principalmente..."

explicacion: |
  La predictibilidad del tiempo de respuesta es la característica
  central de estos sistemas, no la interfaz ni el consumo energético.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["embebidos"]

variables:
  dispositivo: uno_de(["lavadoras", "televisores inteligentes", "controles de acceso"])

respuesta: verdadero
tipo: vf

enunciado: "\"{dispositivo}\" es un ejemplo de dispositivo con sistema operativo embebido mencionado en la teoría."

explicacion: |
  Los sistemas embebidos son SO livianos integrados en dispositivos
  cotidianos con función específica y bajo consumo energético.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["embebidos"]

variables:
  n: uno_de([1, 1])

respuesta: "controlar un hardware específico con consumo energético muy bajo"
tipo: mc
opciones_explicitas: ["controlar un hardware específico con consumo energético muy bajo", "permitir instalar cualquier programa arbitrario", "procesar millones de transacciones financieras"]

enunciado: "La función de un sistema embebido es..."

explicacion: |
  Tienen capacidades mínimas porque su rol es controlar un hardware
  puntual, sin necesidad de interfaces complejas ni gran potencia.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "embebido"
tipo: mc
opciones_explicitas: ["embebido", "mainframe", "servidor"]

enunciado: "La pantalla digital de un microondas usa un sistema operativo..."

explicacion: |
  Es un ejemplo claro de sistema embebido: no se le instalan programas
  arbitrarios, sólo controla el hardware específico del microondas.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "tiempo real"
tipo: mc
opciones_explicitas: ["tiempo real", "para PC", "embebido"]

enunciado: "El sistema que controla un airbag en un auto, garantizando respuesta inmediata ante una señal de peligro, es de tipo..."

explicacion: |
  Necesita una respuesta predecible en milisegundos, algo que un SO de
  PC común no puede garantizar con la misma fiabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "servidor"
tipo: mc
opciones_explicitas: ["servidor", "embebido", "tiempo real"]

enunciado: "Cuando accedés a la plataforma de tu escuela y ves datos que residen en otra máquina remota, esos datos están gestionados por un SO de tipo..."

explicacion: |
  El servidor asegura que la información llegue a todos los usuarios de
  forma segura, gestionando la red y los recursos remotos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "para PC"
tipo: mc
opciones_explicitas: ["para PC", "mainframe", "tiempo real"]

enunciado: "Cuando abrís tu notebook para hacer una tarea, estás usando un sistema operativo..."

explicacion: |
  Está diseñado para la interacción directa del usuario: es un SO de PC.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "avanzado"
  tags: ["criterios de eleccion"]

variables:
  n: uno_de([1, 1])

respuesta: "la eficiencia, la seguridad y la capacidad de respuesta del dispositivo"
tipo: mc
opciones_explicitas: ["la eficiencia, la seguridad y la capacidad de respuesta del dispositivo", "únicamente el precio de venta del hardware", "el color de la carcasa del dispositivo"]

enunciado: "Según la teoría, la elección del tipo de SO determina principalmente..."

explicacion: |
  No es una decisión estética: afecta directamente la eficiencia,
  seguridad y capacidad de respuesta según el contexto de uso.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["funcion comun"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque su implementación varía drásticamente, todos los tipos de SO comparten la función básica de gestionar recursos."

explicacion: |
  Mainframes, servidores, PCs, sistemas de tiempo real y embebidos
  gestionan recursos de forma distinta, pero esa función básica es
  compartida por todos.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["mainframes"]

variables:
  institucion: uno_de(["instituciones financieras", "aerolíneas", "gobiernos"])

respuesta: verdadero
tipo: vf

enunciado: "\"{institucion}\" son mencionadas en la teoría como usuarias típicas de mainframes."

explicacion: |
  Los mainframes son el corazón de este tipo de instituciones, que
  necesitan procesar grandes volúmenes de datos de forma confiable.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["identificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "embebido"
tipo: mc
opciones_explicitas: ["embebido", "servidor", "mainframe"]

enunciado: "El sistema operativo de un celular es, según la teoría, de tipo..."

explicacion: |
  El celular es mencionado explícitamente como ejemplo de dispositivo
  con sistema embebido, sin acceso directo a instalar cualquier
  programa arbitrario.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "avanzado"
  tags: ["comparacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un SO de PC común puede garantizar la misma fiabilidad de respuesta inmediata que un sistema de tiempo real."

explicacion: |
  Los sistemas de tiempo real están diseñados específicamente para
  respuestas predecibles en milisegundos; un SO de PC no ofrece esa
  garantía.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "basico"
  tags: ["ejemplo cotidiano"]

variables:
  n: uno_de([1, 1])

respuesta: "tren"
tipo: completar

enunciado: "El sistema de control de un ___ (mencionado junto al airbag) es un ejemplo de sistema de tiempo real en la teoría."

respuestas_validas:
  - "tren"

explicacion: |
  Tanto el sistema de un tren como el airbag de un auto necesitan
  respuestas inmediatas y predecibles: son ejemplos de tiempo real.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_so_por_dispositivo"
  nivel: "intermedio"
  tags: ["embebidos vs pc"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un sistema embebido, a diferencia de una PC, no se puede instalar programas arbitrarios porque su función es controlar un hardware específico."

explicacion: |
  Un microondas o un celular no permiten instalar cualquier software:
  están limitados a la función para la que fueron fabricados.
```

## Sección: cpu-unidad-de-control-y-alu (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "hardware", "cpu"]

tipo: mc
opciones_explicitas: ["Unidad de Control y ALU", "Memoria RAM y Disco Duro", "Monitor y Teclado", "Sistema Operativo y Aplicaciones"]
respuesta: "Unidad de Control y ALU"

enunciado: "La CPU (Unidad Central de Procesamiento) está compuesta principalmente por dos bloques funcionales. ¿Cuáles son?"

explicacion: |
  La CPU se divide fundamentalmente en la Unidad de Control (UC), que dirige el flujo de datos, y la ALU (Unidad Aritmético-Lógica), que realiza los cálculos.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu", "calculo"]

tipo: vf
respuesta: falso

enunciado: "La función principal de la ALU (Unidad Aritmético-Lógica) es gestionar el flujo de instrucciones y el control de los componentes del sistema."

explicacion: |
  Falso. La gestión del flujo de instrucciones es responsabilidad de la Unidad de Control. La ALU se encarga exclusivamente de operaciones aritméticas (suma, resta, etc.) y lógicas (AND, OR, NOT).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Busqueda de la instrucción (Fetch)", "Decodificación de la instrucción (Decode)", "Ejecución de la instrucción (Execute)"]

enunciado: "Ordena las etapas del ciclo de instrucción que realiza la CPU para procesar una orden:"

explicacion: |
  El ciclo básico consiste en buscar la instrucción en memoria, decodificarla para entender qué debe hacer la UC y finalmente ejecutar la operación (usando la ALU si es necesario).
respuesta_orden: ["Busqueda de la instrucción (Fetch)", "Decodificación de la instrucción (Decode)", "Ejecución de la instrucción (Execute)"]
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["uc", "control"]

tipo: completar
respuestas_validas:
  - "decodificar"
  - "decodificación"

enunciado: "La Unidad de Control tiene la tarea de ___ las instrucciones para determinar qué operaciones debe realizar la ALU."

explicacion: |
  La Unidad de Control interpreta o decodifica las instrucciones para coordinar las señales de control necesarias para el resto del hardware.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu", "logica"]

tipo: vf
enunciado: "Además de las operaciones aritméticas, la ALU es capaz de realizar operaciones lógicas."
respuesta: verdadero
explicacion: |
  La ALU (Arithmetic Logic Unit) realiza tanto cálculos aritméticos (como sumas) como comparaciones y operaciones lógicas (como AND, OR, XOR).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["cpu", "ciclo_instruccion", "uc"]

respuesta: "decodificar"
tipo: mc
opciones_explicitas: ["buscar", "decodificar", "ejecutar"]

enunciado: "Durante el ciclo de instrucción, la Unidad de Control (UC) realiza una serie de pasos. Si la CPU acaba de obtener la instrucción desde la memoria principal, el siguiente paso que debe realizar la UC es ___."

explicacion: |
  El ciclo de instrucción sigue un orden lógico: 1. Buscar (Fetch) la instrucción en memoria, 2. Decodificar (Decode) para entender qué operación es, y 3. Ejecutar (Execute) la operación.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["alu", "logica", "operaciones"]

respuesta: "AND"
tipo: completar

enunciado: "La ALU es responsable de las operaciones aritméticas y lógicas. Si la CPU necesita verificar si dos valores binarios cumplen con la condición de que ambos sean 1, la ALU debe utilizar la operación lógica ___."

explicacion: |
  La operación AND (Y) devuelve verdadero solo si ambos operandos son verdaderos (1). Si se buscara que al menos uno sea 1, se usaría OR.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["componentes", "uc", "alu"]

respuesta: falso
tipo: vf

enunciado: "La Unidad Aritmético-Lógica (ALU) es el componente encargado de coordinar el flujo de datos entre la memoria y los registros, enviando señales de control a los demás componentes."

explicacion: |
  Falso. La descripción corresponde a la Unidad de Control (UC). La ALU es la encargada de realizar los cálculos matemáticos y las comparaciones lógicas.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "intermedio"
  tags: ["flujo_datos", "ordenar", "cpu"]

opciones_explicitas: ["La UC busca la instrucción de suma en memoria", "La ALU realiza la suma de los valores", "La UC decodifica la instrucción de suma", "El resultado se escribe en un registro o memoria"]

respuesta_orden: ["La UC busca la instrucción de suma en memoria", "La UC decodifica la instrucción de suma", "La ALU realiza la suma de los valores", "El resultado se escribe en un registro o memoria"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que ocurren en la CPU cuando se ejecuta una instrucción de suma de dos números:"

explicacion: |
  Primero se debe obtener la instrucción (Fetch), luego interpretarla (Decode), procesar el cálculo (Execute en la ALU) y finalmente guardar el resultado (Write-back).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["uc", "control"]

respuesta: "calcular"
tipo: completar
respuestas_validas:
  - "calcular"

enunciado: "Si comparamos las funciones de los dos componentes principales de la CPU: la ALU se encarga de ___ los datos, mientras que la Unidad de Control se encarga de controlar el flujo de ejecución."

explicacion: |
  La ALU es el "músculo" que realiza los cálculos (calcular), mientras que la UC es el "cerebro" que dirige el tráfico de información (controlar).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "alu"]

tipo: mc
opciones_explicitas: ["Unidad de Control (UC)", "Unidad Aritmético-Lógica (ALU)", "Memoria Caché", "Bus de Datos"]

enunciado: "Un error común es pensar que la Unidad de Control es la encargada de realizar operaciones matemáticas como sumas o comparaciones lógicas. En realidad, esa función le corresponde a la ___."

respuesta: "Unidad Aritmético-Lógica (ALU)"
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "uc", "control"]

tipo: vf

enunciado: "La Unidad de Control (UC) actúa como el 'director de orquesta' de la CPU, decodificando instrucciones y enviando señales de control a los demás componentes para que actúen en el momento adecuado."

respuesta: verdadero

explicacion: |
  Correcto. La UC no procesa datos, sino que interpreta las instrucciones del programa y coordina el flujo de datos entre la memoria, la ALU y los registros.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

enunciado: "Para que una instrucción sea procesada por la CPU, debe seguir un orden lógico de pasos. Ordena los siguientes procesos según el ciclo de instrucción estándar:"

respuesta_orden: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

explicacion: |
  Primero se busca la instrucción en memoria (Fetch), luego la UC la interpreta (Decode) y finalmente la ALU o los registros ejecutan la operación (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["alu", "logica", "aritmetica"]

tipo: completar

enunciado: "La ALU es capaz de realizar dos tipos principales de operaciones: las operaciones ___ (como la suma o resta) y las operaciones lógicas (como la comparación de si un número es mayor que otro)."

respuestas_validas:
  - "aritméticas"

respuesta: "aritméticas"

explicacion: |
  La ALU combina ambas: la parte aritmética para el cálculo numérico y la lógica para la toma de decisiones basada en comparaciones (AND, OR, NOT, comparaciones).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "avanzado"
  tags: ["arquitectura", "uc", "alu"]

tipo: mc
opciones_explicitas: ["La UC decide qué operación hacer", "La ALU decide qué operación hacer", "Ambas deciden por igual", "Ninguna de las anteriores"]

enunciado: "Cuando se lee una instrucción de la memoria, ¿qué componente decide qué operación debe ejecutar la ALU?"

respuesta: "La UC decide qué operación hacer"

explicacion: |
  La ALU es un componente pasivo que recibe datos y una señal de control; es la Unidad de Control la que "decide" o determina qué operación debe ejecutar la ALU basándose en el código de operación de la instrucción.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "alu"]

tipo: mc
opciones_explicitas: ["Realiza cálculos matemáticos y comparaciones lógicas", "Coordina el flujo de datos entre los componentes", "Almacena permanentemente los datos del usuario", "Gestiona la interfaz de entrada y salida"]

enunciado: "A diferencia de la Unidad de Control, la ALU (Unidad Aritmético-Lógica) tiene como función principal:"

respuesta: "Realiza cálculos matemáticos y comparaciones lógicas"

explicacion: |
  La ALU es el componente encargado de realizar las operaciones aritméticas (suma, resta, etc.) y las operaciones lógicas (AND, OR, NOT), mientras que la Unidad de Control se encarga de dirigir el flujo de datos.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "control"]

tipo: vf
respuesta: falso

enunciado: "La Unidad de Control (UC) es la encargada de ejecutar directamente las operaciones de suma y resta de los datos contenidos en los registros."

explicacion: |
  Falso. La UC no realiza los cálculos; su función es decodificar las instrucciones y enviar señales de control para que la ALU realice dichas operaciones.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["instrucciones", "ciclo_fetch_execute"]

tipo: completar
respuestas_validas:
  - "decodificar"
respuesta: "decodificar"

enunciado: "En el ciclo de instrucción, la Unidad de Control se encarga de ___ la instrucción, mientras que la ALU se encarga de ejecutar la operación lógica o aritmética resultante."

pasos:
  - "La UC interpreta el código de operación."
  - "La ALU procesa los operandos."

explicacion: |
  El ciclo típico es: Búsqueda (Fetch), Decodificación (por la UC) y Ejecución (donde interviene la ALU).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes", "cpu"]

tipo: ordenar
opciones_explicitas: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

respuesta_orden: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

enunciado: "Ordena los componentes según el flujo lógico de una instrucción: primero se interpreta, luego se procesa el dato y finalmente se guarda el resultado temporalmente."

explicacion: |
  1. Unidad de Control (interpreta/decodifica).
  2. ALU (procesa/calcula).
  3. Registros (almacenan el resultado inmediato).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["señales", "control", "alu"]

tipo: mc
opciones_explicitas: ["La UC envía señales de control a la ALU", "La ALU envía señales de control a la UC", "La UC y la ALU no se comunican entre sí", "La ALU controla el bus de datos principal"]

enunciado: "¿Qué distingue la interacción entre la Unidad de Control y la ALU?"

respuesta: "La UC envía señales de control a la ALU"

explicacion: |
  La Unidad de Control actúa como el 'director de orquesta', enviando señales eléctricas (señales de control) para indicarle a la ALU qué operación debe realizar en cada momento.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["arquitectura", "cpu"]

variables:
  datos: [["La CPU debe sumar dos números almacenados en registros", "ALU"], ["La CPU debe decidir si un número es mayor que otro", "ALU"], ["La CPU debe buscar la siguiente instrucción en la memoria", "UC"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ALU", "UC", "Memoria RAM"]

enunciado: "En un procesador, considera el siguiente caso: {datos[idx][0]}. ¿Qué componente es el responsable de ejecutar esa tarea?"

explicacion: |
  La Unidad de Control (UC) dirige el flujo de datos, mientras que la Unidad Aritmético-Lógica (ALU) es la encargada de realizar las operaciones matemáticas y de comparación.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["componentes"]

respuesta: verdadero
tipo: vf

enunciado: "La Unidad de Control (UC) es la encargada de decodificar las instrucciones y coordinar las actividades de los demás componentes de la CPU."

explicacion: |
  Correcto. La UC actúa como el "cerebro" que interpreta las instrucciones y envía señales de control para que la ALU y la memoria operen correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["ciclo_instruccion"]

variables:
  pasos_orden: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

respuesta_orden: pasos_orden
tipo: ordenar

opciones_explicitas: ["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]

enunciado: "Ordena las etapas lógicas que sigue una instrucción dentro de la CPU para ser procesada:"

explicacion: |
  El ciclo básico de una instrucción consiste en buscarla en memoria (Fetch), entender qué debe hacer (Decode) y realizar la operación (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["alu"]

variables:
  datos: [["Calcular el producto de 5 * 5", "25"], ["Determinar si 10 es igual a 10", "verdadero"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si la ALU recibe la instrucción para procesar la operación de {datos[idx][0]}, el resultado de dicha operación es: ___"

respuestas_validas:
  - "25"
  - "verdadero"

explicacion: |
  La ALU maneja tanto operaciones aritméticas (como la multiplicación) como operaciones lógicas (como la igualdad).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "intermedio"
  tags: ["uc"]

variables:
  datos: [["La CPU debe leer un dato de la memoria para llevarlo al registro A", "UC"], ["La CPU debe calcular la raíz cuadrada de 144", "ALU"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["UC", "ALU"]

enunciado: "Considerando el siguiente escenario: '{datos[idx][0]}'. ¿Qué componente de la CPU es el responsable de esa tarea?"

explicacion: |
  Mover datos entre memoria y registros es tarea de la Unidad de Control (UC), que coordina el flujo de información. En cambio, un cálculo como una raíz cuadrada requiere operaciones aritméticas, que son responsabilidad de la ALU.
```

## Sección: unidades-almacenamiento (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Qué es un bit?"
tipo: mc
opciones_explicitas:
  - "La unidad mínima de información en una computadora: un 0 o un 1"
  - "Un grupo de 8 bytes"
  - "La velocidad de un procesador"
respuesta: "La unidad mínima de información en una computadora: un 0 o un 1"

explicacion: |
  Todo lo demás (bytes, kilobytes...) se construye a partir de esta
  unidad mínima.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un byte está compuesto por 8 bits."

explicacion: |
  Es la unidad base sobre la que se arman kilobyte, megabyte, etc.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema decimal (SI), ¿a cuántos bytes equivale 1 KB?"
tipo: mc
opciones_explicitas:
  - "1.000 bytes"
  - "1.024 bytes"
  - "100 bytes"
respuesta: "1.000 bytes"

explicacion: |
  Es la potencia de 10 estándar, igual que en cualquier otra unidad
  \"kilo\" (kilogramo, kilómetro).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "En el sistema binario (IEC), ¿a cuántos bytes equivale 1 KiB?"
tipo: mc
opciones_explicitas:
  - "1.024 bytes"
  - "1.000 bytes"
  - "512 bytes"
respuesta: "1.024 bytes"

explicacion: |
  1.024 es 2 elevado a la 10, la potencia de 2 más cercana a 1.000.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "KB (1.000 bytes) y KiB (1.024 bytes) no son la misma cantidad, aunque en el uso cotidiano a veces se confundan o se usen como sinónimos."

explicacion: |
  Es justamente la ambigüedad que el estándar IEC de 1998 quiso resolver
  con los prefijos \"kibi/mebi/gibi\".
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)

respuesta: cantidad_kb * 1000
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kb} KB (sistema decimal). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.000, la definición decimal de kilo.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kib: random(5, 900)

respuesta: cantidad_kib * 1024
tipo: input
tolerancia_abs: 0

enunciado: "Un archivo pesa {cantidad_kib} KiB (sistema binario). ¿Cuántos bytes son?"

explicacion: |
  Se multiplica por 1.024, la definición binaria de kibi.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "comparacion"]

variables:
  cantidad: random(10, 500)

respuesta: ((cantidad * 1024) > (cantidad * 1000))
tipo: vf

enunciado: "Con el mismo número, {cantidad} KiB representa más bytes que {cantidad} KB."

explicacion: |
  1.024 es mayor que 1.000, así que la versión binaria siempre da más
  bytes para el mismo número.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM y el direccionamiento de memoria de una computadora usan naturalmente potencias de 2, porque las computadoras funcionan internamente en base binaria."

explicacion: |
  Es la razón de fondo por la que existe el sistema binario de
  prefijos (kibi, mebi, gibi).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Los fabricantes de discos, pendrives y tarjetas de memoria suelen anunciar la capacidad usando el sistema decimal (1.000), no el binario."

explicacion: |
  Da un número redondo y, casualmente, también más grande que el
  binario.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: gb_anunciados * 1000000000
tipo: input
tolerancia_abs: 0

enunciado: "Un disco se vende anunciando \"{gb_anunciados} GB\" (sistema decimal del fabricante). ¿Cuántos bytes tiene realmente ese disco?"

pasos:
  - "{gb_anunciados} × 1.000.000.000"

explicacion: |
  1 GB decimal son 1.000 millones de bytes.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  gb_anunciados: uno_de([120, 240, 500, 1000, 2000])

respuesta: (gb_anunciados * 1000000000) / 1073741824
tipo: input
tolerancia_abs: 0.5

enunciado: "Ese mismo disco de \"{gb_anunciados} GB\" (decimal), ¿aproximadamente cuánto va a mostrar el sistema operativo, que calcula dividiendo por potencias de 1.024 (aunque siga llamándolo \"GB\")?"

pasos:
  - "bytes reales: {gb_anunciados} × 1.000.000.000 = {gb_anunciados * 1000000000}"
  - "÷ 1.024³ (1.073.741.824) = {(gb_anunciados * 1000000000) / 1073741824}"

explicacion: |
  El sistema operativo divide por 1.024³, no por 1.000³, así que el
  número que muestra siempre es menor al anunciado por el fabricante.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un disco anunciado como \"500 GB\" por el fabricante suele mostrar un número menor a 500 en el sistema operativo (aproximadamente 465,7)."

explicacion: |
  Es la consecuencia directa de que el fabricante usa 1.000 y el
  sistema operativo divide por 1.024.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre el \"500 GB\" del fabricante y lo que muestra el sistema operativo no significa que falte espacio: es la misma cantidad de bytes, contada con dos reglas de prefijos distintas."

explicacion: |
  No hay ningún byte \"perdido\": es sólo una diferencia de convención
  de conteo.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "calculo"]

variables:
  cantidad_kb: random(5, 900)
  bytes_totales: cantidad_kb * 1000

respuesta: cantidad_kb
tipo: input
tolerancia_abs: 0.01

enunciado: "Un archivo pesa {bytes_totales} bytes. ¿Cuántos KB (sistema decimal) son?"

explicacion: |
  Se despeja dividiendo los bytes totales por 1.000.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "vocabulario"]

enunciado: "¿Para qué introdujo la IEC los prefijos \"kibi/mebi/gibi\" en 1998?"
tipo: mc
opciones_explicitas:
  - "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"
  - "Para reemplazar por completo al byte como unidad base"
  - "Para que los fabricantes de discos vendieran más capacidad"
respuesta: "Para desambiguar: que \"KB\" volviera a significar sólo 1.000 bytes, y \"KiB\" quedara para 1.024"

explicacion: |
  Antes del estándar, \"KB\" se usaba indistintamente para 1.000 o 1.024
  bytes, según el contexto.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "orden"]

tipo: ordenar
enunciado: "Ordená estas unidades de almacenamiento de menor a mayor."
opciones_explicitas:
  - "1 MB"
  - "1 byte"
  - "1 GB"
  - "1 KB"
respuesta_orden: ["1 byte", "1 KB", "1 MB", "1 GB"]

explicacion: |
  Cada prefijo es 1.000 (o 1.024) veces más grande que el anterior.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "verificacion"]

variables:
  cantidad_kib: random(5, 900)
  correcto: cantidad_kib * 1024
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? {cantidad_kib} KiB convertidos a bytes: {mostrado}."

explicacion: |
  Se vuelve a multiplicar por 1.024 y se compara con el valor mostrado.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento"]

variables:
  cantidad_kib: random(5, 900)
  bytes_totales: cantidad_kib * 1024

tipo: completar
enunciado: "Un archivo pesa {bytes_totales} bytes. Completá: ___ (KiB) = {bytes_totales} (bytes) ÷ 1.024."
respuestas_validas:
  - cantidad_kib

explicacion: |
  Se divide por 1.024 para pasar de bytes a KiB.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "avanzado"
  tags: ["unidades_almacenamiento", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Para el mismo disco, el número de \"GB\" que anuncia el fabricante (sistema decimal) siempre es mayor que el número que muestra el sistema operativo al calcularlo en sistema binario."

explicacion: |
  Dividir la misma cantidad de bytes por 1.000³ da un número mayor que
  dividirla por 1.024³.
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "intermedio"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "1 MB (1.000.000 bytes, decimal) no es exactamente lo mismo que 1 MiB (1.048.576 bytes, binario)."

explicacion: |
  La diferencia se agranda a medida que se sube de escala (kilo, mega,
  giga...).
```

```
metadata:
  materia: "informatica"
  tema: "unidades_almacenamiento"
  nivel: "basico"
  tags: ["unidades_almacenamiento", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Existen dos sistemas de prefijos de almacenamiento (decimal: KB=1.000; binario: KiB=1.024), y confundirlos es la razón por la que un disco \"de 500 GB\" nunca muestra exactamente 500 en la computadora."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: ciclo-de-instruccion-fetch-decode-execute (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "fetch"]

respuesta: "fetch"
tipo: completar
respuestas_validas:
  - "fetch"
  - "buscar"

enunciado: "La primera etapa del ciclo de instrucción, donde la CPU obtiene la siguiente instrucción de la memoria principal, se denomina ___."

explicacion: |
  El ciclo comienza con el 'fetch' (búsqueda), donde el contador de programa (PC) indica la dirección de la instrucción que debe ser cargada en el procesador.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["decode", "instruccion"]

respuesta: "decodificar"
tipo: mc
opciones_explicitas: ["ejecutar", "decodificar", "almacenar", "leer"]

enunciado: "Una vez que la instrucción ha sido cargada en el procesador, la unidad de control debe interpretar qué operación se debe realizar. Este proceso se conoce como:"

explicacion: |
  La etapa de 'decode' (decodificación) traduce la instrucción binaria en señales de control para que los componentes internos sepan qué hacer.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

respuesta_orden: ["fetch", "decode", "execute"]
tipo: ordenar
opciones_explicitas: ["execute", "fetch", "decode"]

enunciado: "Ordena las fases del ciclo de instrucción de la CPU desde que se solicita la instrucción hasta que se completa la operación:"

explicacion: |
  El flujo lógico es siempre: 1. Buscar (Fetch), 2. Decodificar (Decode) y 3. Ejecutar (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["execute", "alua"]

respuesta: falso
tipo: vf

enunciado: "¿La fase de 'execute' (ejecución) consiste únicamente en mover datos de la memoria a los registros sin realizar operaciones aritméticas?"

explicacion: |
  Falso. En la fase de ejecución, la ALU (Unidad Aritmético Lógica) puede realizar cálculos, comparaciones y otras operaciones lógicas fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["control", "decodificar"]

variables:
  idx: uno_de([0, 1])
  escenario: [["la decodificación es responsabilidad de la ALU", "la decodificación es responsabilidad de la Unidad de Control"], ["la ejecución es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la ALU"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["la decodificación es responsabilidad de la ALU", "la decodificación es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la Unidad de Control", "la ejecución es responsabilidad de la ALU"]

enunciado: "Dependiendo del componente, identifica la afirmación correcta sobre la arquitectura de Von Neumann:"

explicacion: |
  La Unidad de Control se encarga de decodificar la instrucción, mientras que la ALU se encarga de la ejecución de operaciones aritméticas y lógicas.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "arquitectura", "ciclo_de_instruccion"]

respuesta: "fetch"
tipo: "mc"
opciones_explicitas: ["fetch", "decode", "execute", "writeback"]

enunciado: "En la primera etapa del ciclo de instrucción, la CPU debe obtener la siguiente instrucción de la memoria principal. ¿Cómo se llama este proceso?"

explicacion: |
  El ciclo comienza con el 'fetch' (búsqueda), donde el Program Counter (PC) indica la dirección de la instrucción en la memoria, la cual se carga en el IR (Instruction Register).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["decode", "control_unit"]

respuesta: verdadero
tipo: "vf"

enunciado: "Durante la fase de 'decode', la Unidad de Control interpreta el código de operación (opcode) para determinar qué acción debe realizar la ALU. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. La fase de decodificación traduce el bitstream de la instrucción en señales de control que activan las partes necesarias de la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["orden", "proceso"]

tipo: ordenar
opciones_explicitas: ["fetch", "decode", "execute"]
respuesta_orden: ["fetch", "decode", "execute"]

enunciado: "Ordena las etapas fundamentales del ciclo de instrucción de una CPU en su secuencia lógica de ejecución."

explicacion: |
  El flujo estándar es: 1. Fetch (traer), 2. Decode (entender), 3. Execute (hacer).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "avanzado"
  tags: ["pc", "direccionamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [["La instrucción actual está en 0x1000 y cada instrucción ocupa 4 bytes. La siguiente dirección será:", "0x1004"], ["La instrucción actual está en 0x2000 y cada instrucción ocupa 8 bytes. La siguiente dirección será:", "0x2008"]]

respuesta: escenario[idx][1]
tipo: "completar"
respuestas_validas:
  - "0x1004"
  - "0x2008"

enunciado: "Considerando que el Program Counter (PC) se incrementa automáticamente para apuntar a la siguiente instrucción: {escenario[idx][0]}"

pasos:
  - "Identificar la dirección actual del PC."
  - "Sumar el tamaño de la instrucción actual al valor del PC."

explicacion: |
  El PC debe apuntar a la dirección de la próxima instrucción. Si la instrucción mide N bytes, la nueva dirección es PC + N.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["alu", "execute"]

respuesta: "ALU"
tipo: "completar"
respuestas_validas:
  - "ALU"

enunciado: "En la fase de ejecución, si la instrucción es una suma aritmética, el componente encargado de realizar la operación matemática es la ___."

explicacion: |
  La ALU (Arithmetic Logic Unit) es el componente de la CPU que realiza todas las operaciones aritméticas (suma, resta) y lógicas (AND, OR).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["arquitectura", "cpu", "ciclo_instruccion"]

tipo: ordenar
opciones_explicitas: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]
respuesta_orden: ["Fetch (Buscar)", "Decode (Decodificar)", "Execute (Ejecutar)", "Write-back (Escritura)"]

enunciado: "Para que un procesador procese una instrucción de forma correcta, debe seguir una secuencia lógica de etapas. Ordena las siguientes fases del ciclo de instrucción:"

explicacion: |
  El ciclo de instrucción debe seguir un orden estrictamente secuencial: primero se busca la instrucción en memoria (Fetch), luego se interpreta qué debe hacer (Decode), se realiza la operación (Execute) y, finalmente, se guardan los resultados (Write-back).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["decode", "control", "cpu"]

tipo: mc
opciones_explicitas: ["Traer la instrucción desde la memoria RAM a la CPU", "Interpretar el código de operación para entender qué tarea realizar", "Realizar operaciones aritméticas en la ALU", "Escribir el resultado en un registro o memoria"]
respuesta: "Interpretar el código de operación para entender qué tarea realizar"
enunciado: "Un error común es confundir el 'Fetch' con el 'Decode'. ¿Cuál es la función principal de la etapa de Decodificación (Decode)?"
explicacion: |
  En la etapa de decodificación, la Unidad de Control interpreta el código de operación (opcode) de la instrucción para determinar qué señales de control deben activarse para la siguiente etapa.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["alu", "execute", "operaciones"]

tipo: vf
respuesta: falso

enunciado: "Verdadero o Falso: La etapa de 'Execute' (Ejecución) es la encargada de buscar la instrucción en la memoria principal."

explicacion: |
  Falso. La búsqueda en memoria corresponde a la etapa de 'Fetch'. La etapa de 'Execute' es donde se lleva a cabo la operación lógica o aritmética propiamente dicha.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["pipeline", "hazard", "data_dependency"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Instrucción A: SUMAR R1, R2", "Instrucción B: SUBTRACT R1, R3"], ["Instrucción A: LOAD R1, [1000]", "Instrucción B: ADD R1, R2"]]
  problema: ["R1", "R1"]

enunciado: "En un procesador con pipeline, si la segunda instrucción requiere el resultado de la primera (como en el caso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]}), se produce un conflicto de dependencia sobre el registro {problema[escenario_idx]}. ¿Cómo se llama este problema?"

opciones_explicitas: ["Data Hazard", "Control Hazard", "Structural Hazard", "Memory Leak"]
respuesta: "Data Hazard"
tipo: mc

explicacion: |
  Se produce un 'Data Hazard' (conflicto de datos) cuando una instrucción depende del resultado de una instrucción anterior que aún no ha terminado de escribir su valor en el registro o memoria.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["pc", "program_counter", "fetch"]

tipo: completar
respuestas_validas:
  - "Program Counter"
  - "Contador de Programa"
  - "PC"
respuesta: "Program Counter"

enunciado: "Durante la etapa de Fetch, el procesador utiliza un registro especial para saber cuál es la dirección de memoria de la próxima instrucción a buscar. Este registro se denomina ___."

explicacion: |
  El Program Counter (PC) o Contador de Programa contiene la dirección de la próxima instrucción a ser ejecutada. Al finalizar el fetch, el PC se incrementa para apuntar a la siguiente dirección.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

enunciado: "Durante la fase de Fetch, la CPU debe obtener la instrucción desde la memoria principal. ¿Qué componente es el encargado de contener la dirección de la próxima instrucción a buscar?"

opciones_explicitas: ["Acumulador", "Contador de Programa (PC)", "Unidad de Control", "ALU"]
respuesta: "Contador de Programa (PC)"
tipo: "mc"

explicacion: |
  El Contador de Programa (PC) almacena la dirección de memoria de la siguiente instrucción que debe ser procesada, permitiendo que el ciclo de Fetch sea posible.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "decodificacion"]

enunciado: "La fase de Decode se distingue de la fase de Fetch en que su objetivo principal es ___ la instrucción para entender qué operación debe realizar la CPU."

respuestas_validas:
  - "interpretar"
  - "traducir"
  - "analizar"
respuesta: "interpretar"
tipo: "completar"

explicacion: |
  Mientras que el Fetch solo trae los datos, el Decode interpreta el código de operación (opcode) para determinar qué debe hacer la Unidad de Control.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "ejecucion"]

enunciado: "En el ciclo de instrucción, la fase de Execute se diferencia de la de Decode porque en la primera la CPU realmente ejecuta la operación lógica o aritmética solicitada."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La fase de ejecución es donde ocurre la acción real (operación matemática, movimiento de datos o salto), después de que la instrucción ya ha sido comprendida.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "basico"
  tags: ["cpu", "orden"]

enunciado: "Ordena las fases del ciclo de instrucción de una CPU desde el inicio del proceso hasta la realización de la tarea:"

opciones_explicitas: ["Fetch", "Decode", "Execute"]
respuesta_orden: ["Fetch", "Decode", "Execute"]
tipo: "ordenar"

explicacion: |
  El ciclo es un proceso secuencial: primero se busca la instrucción (Fetch), luego se entiende (Decode) y finalmente se realiza (Execute).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_fetch_decode_execute"
  nivel: "intermedio"
  tags: ["cpu", "alu"]

enunciado: "¿Es correcto afirmar que la Unidad Aritmético-Lógica (ALU) actúa principalmente durante la fase de Decode?"

respuesta: falso
tipo: vf

explicacion: |
  La ALU actúa en la fase de Execute. En la fase de Decode, la Unidad de Control es la que determina qué componentes deben activarse.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["cpu", "arquitectura"]

variables:
  datos: [["La CPU lee la dirección de memoria contenida en el PC", "fetch"], ["La ALU realiza una suma de dos registros", "execute"], ["La unidad de control interpreta el código de operación", "decode"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el ciclo de instrucción, cuando la unidad de control accede a la memoria principal para traer la siguiente instrucción basándose en el Program Counter, se está realizando la fase de: ___"

respuestas_validas:
  - "fetch"
  - "decode"
  - "execute"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La fase de Fetch (búsqueda) es el proceso mediante el cual la CPU obtiene la instrucción desde la memoria RAM utilizando la dirección apuntada por el PC.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "intermedio"
  tags: ["control", "decode"]

enunciado: "¿Cuál es la función principal de la fase de 'Decode' (Decodificación) en el ciclo de instrucción?"

opciones_explicitas: ["Traducir la instrucción en señales de control para los componentes de la CPU", "Escribir el resultado de una operación en la memoria RAM", "Actualizar el contador de programa con la siguiente dirección", "Realizar operaciones aritméticas y lógicas"]

respuesta: "Traducir la instrucción en señales de control para los componentes de la CPU"
tipo: mc

explicacion: |
  En la fase de decodificación, la unidad de control interpreta el código de operación (opcode) para entender qué acción debe realizar la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["logica"]

enunciado: "Durante la fase de 'Execute', la ALU (Unidad Aritmético Lógica) es la encargada de realizar las operaciones matemáticas o lógicas indicadas por la instrucción. (Verdadero/Falso)"

opciones_explicitas: ["verdadero", "falso"]

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La fase de ejecución es donde se lleva a cabo la operación real, utilizando la ALU para cálculos o transferencias de datos.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "basico"
  tags: ["orden", "ciclo"]

enunciado: "Ordene las fases del ciclo de instrucción de una CPU en el orden cronológico correcto:"

opciones_explicitas: ["Fetch", "Decode", "Execute", "Write-back"]

respuesta_orden: ["Fetch", "Decode", "Execute", "Write-back"]
tipo: ordenar

explicacion: |
  El ciclo estándar sigue el flujo: buscar la instrucción (Fetch), entender qué significa (Decode), realizar la tarea (Execute) y, opcionalmente, guardar el resultado (Write-back).
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_instruccion_cpu"
  nivel: "avanzado"
  tags: ["debug", "memoria"]

enunciado: "Se detecta que la CPU ha recibido un código de operación (opcode) que no corresponde a ninguna instrucción válida en su conjunto de instrucciones. ¿En qué fase del ciclo ha ocurrido el fallo?"

opciones_explicitas: ["Fetch", "Decode", "Execute"]

respuesta: "Decode"
tipo: mc

explicacion: |
  Si el código de la instrucción es inválido, el error se identifica en la fase de decodificación, ya que la unidad de control no puede interpretar el patrón de bits recibido.
```

## Sección: memoria-ram-cache-jerarquia (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

tipo: mc
opciones_explicitas: ["Mayor velocidad, menor capacidad", "Menor velocidad, mayor capacidad", "Igual velocidad, mayor costo", "Mayor velocidad, mayor costo"]

enunciado: "En una jerarquía de memoria típica, a medida que nos movemos desde la CPU hacia el almacenamiento secundario (disco), la memoria se vuelve..."

respuesta: "Menor velocidad, mayor capacidad"

explicacion: |
  La jerarquía busca equilibrar costo y rendimiento. Los niveles superiores (Caché) son muy rápidos pero caros y pequeños; los niveles inferiores (Disco) son lentos pero económicos y masivos.
```

```
metadata:
  materia: "informatica"
  tema: "ram_caracteristicas"
  nivel: "basico"
  tags: ["ram", "volatilidad"]

tipo: vf

enunciado: "La memoria RAM es considerada una memoria volátil porque pierde su contenido al interrumpirse el suministro eléctrico."

respuesta: verdadero

explicacion: |
  La RAM es volátil por definición. Si no hay energía, los datos almacenados en sus capacitores se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "cache_funcionamiento"
  nivel: "intermedio"
  tags: ["cache", "latencia"]

tipo: completar
respuestas_validas:
  - "L1"
  - "L2"
  - "L3"

enunciado: "En una arquitectura con múltiples niveles de caché, la caché que se encuentra físicamente más cerca del núcleo del procesador es la caché ___."

pasos:
  - "Identificar la posición de la caché en la jerarquía respecto al procesador."
  - "Determinar cuál tiene la menor latencia de acceso."

respuesta: "L1"

explicacion: |
  La caché L1 (Level 1) es la más rápida y cercana al núcleo, seguida de la L2 y finalmente la L3.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad de acceso (del más rápido al más lento):"

respuesta_orden: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

explicacion: |
  Los registros están dentro de la CPU y son instantáneos. La caché es la siguiente, luego la RAM (memoria principal) y finalmente el almacenamiento masivo (disco).
```

```
metadata:
  materia: "informatica"
  tema: "cache_principio_localidad"
  nivel: "avanzado"
  tags: ["localidad", "cache"]

tipo: mc
opciones_explicitas: ["Localidad Espacial", "Localidad Temporal", "Localidad de Datos", "Localidad de Instrucciones"]

enunciado: "Cuando un sistema carga un bloque de memoria porque se ha accedido a una dirección específica, asumiendo que las direcciones contiguas serán accedidas pronto, está aprovechando la ___."

respuesta: "Localidad Espacial"

explicacion: |
  La localidad espacial se refiere al uso de datos cercanos en direcciones de memoria. La localidad temporal se refiere al reuso de un mismo dato en un corto periodo de tiempo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["hardware", "memoria", "cache"]

enunciado: "En una jerarquía de memoria típica, si comparamos la memoria caché L1 con la memoria RAM, la caché L1 es más ___ que la RAM, pero tiene una capacidad menor."

opciones_explicitas: ["rápida", "lenta", "pequeña", "grande"]

respuesta: "rápida"

tipo: mc

explicacion: |
  La jerarquía de memoria busca equilibrar costo, capacidad y velocidad. La caché (L1, L2, L3) es mucho más rápida que la RAM porque está más cerca del procesador y usa tecnología más costosa, lo que obliga a que su capacidad sea mucho menor.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "localidad", "performance"]

enunciado: "Un procesador accede a una lista de elementos en orden consecutivo (0, 1, 2, 3...). Este tipo de comportamiento favorece la eficiencia de la caché debido a la localidad de referencia, la cual es de tipo ___."

opciones_explicitas: ["espacial", "temporal", "aleatoria"]

respuesta: "espacial"

tipo: mc

explicacion: |
  La localidad espacial ocurre cuando se accede a una posición de memoria y se accede rápidamente a posiciones cercanas. Esto permite que la caché cargue bloques enteros (cache lines) prediciendo que los datos contiguos serán necesarios pronto.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "hit", "miss"]

enunciado: "El procesador solicita el dato en la dirección 0x4F. La unidad de control busca en la caché L1 y el dato no se encuentra allí. A este evento se le denomina ___ y el sistema deberá buscar el dato en la siguiente capa de la jerarquía."

respuestas_validas:
  - "miss"

respuesta: "miss"

tipo: completar

explicacion: |
  Un 'Cache Miss' ocurre cuando el dato requerido no está en la caché, obligando al sistema a buscar en un nivel más lento (como la RAM), lo que aumenta la latencia de la operación.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

respuesta_orden: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

tipo: ordenar

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros son parte del CPU y son instantáneos; la Caché es muy rápida; la RAM es el almacenamiento principal de trabajo; y el Disco Rígido (almacenamiento masivo) es el más lento de la cadena.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["costo", "capacidad"]

enunciado: "La memoria RAM tiene un costo por gigabyte significativamente mayor que un disco duro (HDD/SSD)."

respuesta: verdadero

tipo: vf
explicacion: |
  Es verdadero. Debido a que la RAM utiliza tecnología semiconductoras mucho más rápida y compleja para mantener los datos, su costo por unidad de capacidad es mucho más elevado que el de los medios de almacenamiento masivo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "costo", "velocidad"]

enunciado: "En una arquitectura de memoria jerárquica, si comparamos la memoria caché, la memoria RAM y el disco duro, ¿cuál de ellas tiene el mayor costo por byte?"

opciones_explicitas: ["Disco duro", "Memoria RAM", "Memoria caché"]
respuesta: "Memoria caché"
tipo: mc

explicacion: |
  La jerarquía de memoria busca un equilibrio entre costo y rendimiento. Las memorias más rápidas (como la caché) utilizan tecnología más cara (SRAM) y tienen menos capacidad, mientras que las más lentas (como el disco duro) son mucho más económicas por cada GB almacenado.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "intermedio"
  tags: ["latencia", "velocidad", "confucion"]

enunciado: "Un error común es pensar que tener más capacidad de RAM (ej. 64GB vs 16GB) aumenta automáticamente la velocidad de procesamiento de una tarea que ya cabe en 16GB. ¿Es esto verdadero o falso?"

respuesta: falso
tipo: vf
explicacion: |
  La capacidad de la RAM determina cuánta información puede estar disponible para la CPU. Si el software ya cabe en la memoria disponible, aumentar la capacidad no acelera la ejecución; lo que acelera la ejecución es la velocidad de acceso (frecuencia) y la latencia, no el tamaño total.
```

```
metadata:
  materia: "informatica"
  tema: "cache_procesador"
  nivel: "intermedio"
  tags: ["cache", "cpu", "acceso"]

variables:
  datos: [["L1", "muy rápida"], ["L2", "rápida"], ["L3", "moderada"]]
  idx: uno_de([0,1,2])

enunciado: "Considerando la jerarquía de la caché del procesador, la caché de nivel {datos[idx][0]} tiene una latencia de acceso descrita como {datos[idx][1]}."

respuesta: datos[idx][0]
tipo: completar
respuestas_validas:
  - "L1"
  - "L2"
  - "L3"

explicacion: |
  La caché L1 es la más cercana al núcleo del procesador, integrada directamente en él, lo que la hace extremadamente rápida pero de muy pequeña capacidad.
```

```
metadata:
  materia: "informatica"
  tema: "principio_localidad"
  nivel: "avanzado"
  tags: ["localidad_temporal", "localidad_espacial"]

enunciado: "La eficiencia de la memoria caché se basa en dos principios: la localidad temporal (reutilizar datos usados recientemente) y la localidad ___ (usar datos que están en direcciones de memoria cercanas)."

pasos:
  - "Identificar el tipo de localidad que complementa a la temporal."

respuesta: "espacial"
tipo: completar
respuestas_validas:
  - "espacial"
  - "secuencial"
  - "distante"

explicacion: |
  La localidad espacial implica que si se accede a una posición de memoria, es muy probable que pronto se acceda a las posiciones adyacentes. La caché aprovecha esto cargando bloques enteros (cache lines) en lugar de bytes individuales.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "velocidad", "jerarquia"]

enunciado: "Ordena los siguientes componentes de memoria de mayor a menor velocidad de acceso (el más rápido primero):"

opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
respuesta_orden: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
tipo: ordenar

explicacion: |
  La jerarquía sigue un orden lógico: a medida que nos alejamos del núcleo de la CPU, la velocidad de acceso disminuye drásticamente, pero la capacidad y la economía mejoran.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "ram", "cache"]

respuesta: "cache"
tipo: completar
respuestas_validas:
  - "cache"
  - "caché"

enunciado: "En la jerarquía de memoria, la ___ es un tipo de memoria de acceso muy rápido situada entre el procesador y la memoria RAM para reducir el tiempo de espera."

explicacion: |
  La memoria caché es mucho más rápida que la RAM pero tiene mucha menos capacidad. Su función es almacenar copias de los datos que el procesador utiliza con más frecuencia para evitar tener que ir a la RAM (que es más lenta).
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["costo", "capacidad", "jerarquia"]

respuesta: "Mayor capacidad y menor costo por bit"
tipo: mc
opciones_explicitas: ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

enunciado: "Si comparamos la memoria RAM con la memoria Caché, la RAM se caracteriza por tener una ___."

explicacion: |
  En la jerarquía de memoria, cuanto más cerca está la memoria del núcleo del procesador (como la caché L1), más cara es y menos capacidad tiene. La RAM es más barata y permite almacenar mucha más información, pero es más lenta.
```

```
metadata:
  materia: "informatica"
  tema: "propiedades_memoria"
  nivel: "basico"
  tags: ["volatilidad", "ram", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM es una memoria volátil, lo que significa que pierde toda la información almacenada cuando se corta el suministro eléctrico."

explicacion: |
  Correcto. A diferencia del disco duro (almacenamiento secundario), la RAM necesita energía para mantener los datos. Si apagas la computadora, los datos en la RAM se borran.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["orden", "velocidad", "jerarquia"]

respuesta_orden: ["Registros", "Caché L1", "RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de mayor a menor velocidad de acceso (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros están dentro de la CPU (ultra rápidos), seguidos por la Caché (L1, L2, L3), luego la RAM y finalmente el almacenamiento masivo como el Disco Duro (HDD/SSD), que es mucho más lento pero permite guardar datos permanentemente.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "avanzado"
  tags: ["eficiencia", "costo", "arquitectura"]

respuesta: "Maximizar la velocidad de acceso a los datos con un costo equilibrado"
tipo: mc
opciones_explicitas: ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]

enunciado: "El objetivo principal de implementar una jerarquía de memoria con distintos niveles es ___."

explicacion: |
  No es posible tener toda la memoria del sistema a la velocidad de la CPU porque sería extremadamente cara. La jerarquía permite que el sistema se comporte como si tuviera una memoria muy grande y muy rápida, equilibrando rendimiento y costo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

variables:
  escenario_idx: uno_de([0,1,2])
  datos: [["La memoria con mayor velocidad pero menor capacidad es la ___.", "Caché"], ["La memoria que es más lenta que la caché pero más rápida que el disco es la ___.", "RAM"], ["La memoria de mayor capacidad y menor costo por bit es el ___.", "Disco"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "Caché"
  - "RAM"
  - "Disco"

enunciado: "Analizando la jerarquía de memoria, se observa que: {datos[escenario_idx][0]}"

explicacion: |
  En una jerarquía de memoria, cuanto más cerca está del procesador, más rápida y cara es (Caché), y cuanto más lejos, más lenta y económica es (Disco).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "basico"
  tags: ["volatilidad", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es una memoria de tipo no volátil, lo que significa que la información se mantiene grabada incluso si se apaga el ordenador."

explicacion: |
  Falso. La RAM es memoria volátil; requiere energía para mantener los datos almacenados. Al apagar el equipo, los datos se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento"]

variables:
  opcion_idx: uno_de([0,1])
  comparativa: [["La caché L1 tiene una latencia ___ que la memoria RAM.", "menor"], ["La memoria RAM tiene una latencia ___ que la memoria caché L1.", "mayor"]]

respuesta: comparativa[opcion_idx][1]
tipo: mc
opciones_explicitas: ["menor", "mayor"]

enunciado: "Considerando el acceso a datos en un sistema computacional: {comparativa[opcion_idx][0]}"

explicacion: |
  La latencia es el tiempo de espera. La caché, al estar integrada en el procesador, responde mucho más rápido (menor latencia) que la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["orden", "arquitectura"]

respuesta_orden: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía correcta de velocidad es: Registros del CPU > Caché (L1, L2, L3) > Memoria RAM > Almacenamiento secundario (Disco).
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "avanzado"
  tags: ["costo", "capacidad"]

variables:
  item_idx: uno_de([0,1])
  comparacion: [["Si comparamos la Caché con la RAM, la caché tiene un costo por GB ___ que la RAM.", "mayor"], ["Si comparamos la RAM con el Disco Duro, la RAM tiene un costo por GB ___ que el disco.", "mayor"]]

respuesta: comparacion[item_idx][1]
tipo: mc
opciones_explicitas: ["mayor", "menor"]

enunciado: "En términos de arquitectura de computadores: {comparacion[item_idx][0]}"

explicacion: |
  Existe una relación inversa: a mayor velocidad de acceso, mayor es el costo por unidad de capacidad (GB/TB). Por eso las memorias rápidas son pequeñas y las lentas son masivas.
```

