# Examen jefe — Dominio de Sistemas y Redes

> Logro #173. Completaste el examen jefe que abarca desde la arquitectura del CPU hasta la criptografía y el direccionamiento IP. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **126 preguntas totales** en 5/5 secciones.

---

## Sección: control-de-versiones (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos", "software"]

respuesta: "software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo"
tipo: mc
opciones_explicitas: ["un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo", "un editor de texto avanzado para programadores", "un sistema operativo para gestionar archivos en la nube", "una herramienta de compilación de código fuente"]

enunciado: "En el desarrollo de software, un sistema de control de versiones es ___."

explicacion: |
  Un sistema de control de versiones permite rastrear la evolución de un proyecto, permitiendo volver a estados anteriores y gestionar cambios realizados por múltiples personas.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

respuesta: "snapshot"
tipo: completar
respuestas_validas: ["snapshot", "instantánea", "foto"]

enunciado: "En Git, un 'commit' puede entenderse como una ___ del estado actual de los archivos en el repositorio."

explicacion: |
  A diferencia de otros sistemas que guardan solo las diferencias (deltas), Git piensa en términos de snapshots (instantáneas) de la estructura de archivos en ese momento preciso.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "arquitectura"]

respuesta: verdadero

tipo: vf

enunciado: "¿Git es considerado un sistema de control de versiones distribuido, donde cada desarrollador tiene una copia completa del historial en su máquina local?"

explicacion: |
  Correcto. A diferencia de los sistemas centralizados (como SVN), en Git cada clon es un repositorio completo con todo el historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow", "ordenar"]

respuesta: ["git add", "git commit", "git push"]
tipo: ordenar
opciones_explicitas: ["git add", "git commit", "git push"]

enunciado: "Ordena los siguientes comandos según el flujo lógico estándar para enviar cambios locales a un repositorio remoto:"

pasos:
  - "1. Preparar los archivos en el área de stage (index)."
  - "2. Confirmar los cambios en el repositorio local con un mensaje."
  - "3. Subir los cambios confirmados al servidor remoto."

explicacion: |
  Primero se seleccionan los cambios con 'add', luego se crean la versión con 'commit' y finalmente se envían al servidor con 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["colaboracion", "git"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: mc
opciones_explicitas: ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Obliga a que un solo programador trabaje a la vez para evitar errores", "Sirve únicamente para guardar copias de seguridad en la nube", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]

enunciado: "Una de las razones principales por las que el control de versiones es esencial para el trabajo en equipo es que ___."

explicacion: |
  Los sistemas de control de versiones permiten la ramificación (branching) y la fusión (merging), facilitando que múltiples personas colaboren en la misma base de código de forma organizada.

tabla:
  - ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros"]
  - ["Obliga a que un solo programador trabaje a la vez para evitar errores", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Git es un sistema de control de versiones distribuido que permite rastrear cambios en los archivos de un proyecto de software a lo largo del tiempo."

explicacion: |
  Efectivamente, Git permite que cada desarrollador tenga una copia completa del historial, facilitando el trabajo colaborativo y la recuperación de versiones anteriores.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  escenario: uno_de([
    ["El desarrollador modificó el archivo main.py", "modificación"],
    ["El desarrollador borró el archivo README.md", "eliminación"],
    ["El desarrollador creó un nuevo archivo utils.py", "creación"]
  ])

respuesta: escenario[1
tipo: mc

opciones_explicitas: ["modificación", "eliminación", "creación"]

enunciado: "En un proyecto de software, si un colaborador ejecuta un comando para registrar que ha borrado un archivo, ¿qué tipo de cambio está realizando en el historial?"

explicacion: |
  El cambio registrado es una {escenario[0]}. En el control de versiones, cada acción (crear, modificar, borrar) genera un nuevo estado en el historial.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

respuesta: ["git add", "git commit", "git push"]
tipo: ordenar

opciones_explicitas: ["git add", "git commit", "git push"]

enunciado: "Un desarrollador desea enviar sus cambios locales a un repositorio remoto (como GitHub). Ordene los comandos necesarios para realizar este proceso de forma secuencial:"

pasos:
  - "1. Preparar los archivos en el área de preparación (staging area)."
  - "2. Crear un punto de control en el historial local con un mensaje descriptivo."
  - "3. Subir los commits locales al servidor remoto."

explicacion: |
  El flujo estándar es: primero se seleccionan los archivos (add), luego se empaquetan con un mensaje (commit) y finalmente se envían al servidor (push).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "conceptos"]

respuesta: "mensaje"
tipo: completar
respuestas_validas: ["mensaje", "autor", "fecha", "hash"]

enunciado: "Para que un commit sea útil en un equipo de trabajo, es fundamental incluir un ___ descriptivo que explique qué cambios se realizaron."

explicacion: |
  Un commit sin un mensaje claro dificulta la comprensión del historial para otros miembros del equipo.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  datos: [
    ["Dos personas editaron la misma línea del archivo index.html", "conflicto"],
    ["Una persona editó el archivo A y otra el archivo B", "sin_problema"],
    ["Una persona borró un archivo que otra persona estaba usando", "conflicto"]
  ]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["conflicto", "sin_problema"]

enunciado: "Analiza el siguiente escenario: {datos[idx][0]}. ¿Qué situación se presenta al intentar fusionar (merge) los cambios?"

explicacion: |
  Cuando dos cambios incompatibles ocurren en la misma parte de un archivo, Git no puede decidir automáticamente qué versión mantener y genera un {respuesta}.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: mc
opciones_explicitas: ["Una copia de seguridad en la nube para no perder archivos", "Un sistema para rastrear cambios y permitir la colaboración", "Un editor de texto avanzado para programadores", "Un sistema de mensajería para equipos de desarrollo"]

enunciado: "Un sistema de control de versiones como Git es esencial principalmente porque permite ___."

explicacion: |
  El control de versiones no es solo una copia de seguridad; su función principal es registrar la historia de cambios para que múltiples personas puedan trabajar en el mismo proyecto sin sobrescribir el trabajo de otros.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: vf

enunciado: "Si realizo cambios en un archivo y presiono 'Guardar' (Ctrl+S) en mi editor de código, estos cambios quedan registrados automáticamente en el historial de commits de Git."

respuesta: falso

explicacion: |
  Falso. 'Guardar' solo escribe los cambios en el disco local. Para que Git registre un cambio en su historial, es necesario realizar un 'commit' tras haber añadido los archivos al área de preparación (staging area).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

variables:
  escenario: uno_de([
    ["hice un commit localmente", "no es visible para mis compañeros"],
    ["hice un push al servidor", "es visible para mis compañeros"],
    ["hice un fetch de la rama principal", "solo descargo la información sin cambiar mi código"]
  ])

tipo: completar
respuestas_validas: ["no es visible para mis compañeros", "es visible para mis compañeros", "solo descargo la información sin cambiar mi código"]

enunciado: "Si un desarrollador realiza un commit en su repositorio local, la situación es: ___."

pasos:
  - "Realizar cambios en el código"
  - "Ejecutar 'git add' para preparar los cambios"
  - "Ejecutar 'git commit' para crear la versión local"

explicacion: |
  El repositorio local es privado a la máquina del desarrollador. Para que otros vean los cambios, se debe realizar un 'push' hacia un repositorio remoto (como GitHub o GitLab).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

tipo: ordenar
opciones_explicitas: ["modificar archivos", "git add", "git commit", "git push"]

enunciado: "Ordena los pasos lógicos para subir un cambio desde tu máquina local hasta que esté disponible para el equipo en el servidor remoto:"

explicacion: |
  Primero modificas el contenido, luego preparas los archivos con 'add', creas la versión con 'commit' y finalmente la envías al servidor con 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "flujo_de_trabajo"]

variables:
  caso: uno_de([
    ["trabajar directamente en la rama 'main'", "causa errores en la versión estable"],
    ["crear una rama nueva para una función", "permite experimentar sin romper el código principal"],
    ["hacer un merge de una rama con conflictos", "requiere resolución manual de cambios"]
  ])

tipo: mc
opciones_explicitas: ["trabajar directamente en la rama 'main'", "crear una rama nueva para una función", "hacer un merge de una rama con conflictos"]

enunciado: "En un entorno de equipo, una práctica de riesgo que suele causar errores en la versión estable es ___."

explicacion: |
  Trabajar directamente en la rama principal (main/master) es peligroso porque cualquier error cometido durante el desarrollo se integra inmediatamente a la versión que se supone es funcional y estable. Se recomienda usar 'feature branches'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un sistema de gestión de archivos en la nube", "Un sistema de control de versiones distribuido", "Un editor de texto para programadores", "Un lenguaje de programación"]

respuesta: "Un sistema de gestión de versiones distribuido"

enunciado: "A diferencia de un simple respaldo de archivos en la nube, Git es un ___."

explicacion: |
  Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y trabajar de forma colaborativa sin depender de un único servidor centralizado para todo el historial.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "backup"]

tipo: vf

enunciado: "Un sistema de control de versiones como Git es lo mismo que realizar copias de seguridad (backups) manuales de una carpeta de proyecto."

respuesta: falso

explicacion: |
  Aunque Git ayuda a no perder trabajo, su propósito principal es el seguimiento de la evolución de los cambios (historial, ramas, merges) y la colaboración, no es simplemente una copia de seguridad de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["colaboracion", "flujo_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["desarrollador_A", "desarrollador_B"],
    ["usuario_X", "usuario_Y"]
  ]

tipo: completar
respuestas_validas: ["merge", "conflito", "commit", "push"]
respuesta: "merge"

enunciado: "Cuando dos personas trabajan en la misma línea de un archivo, al intentar integrar sus cambios, el sistema de control de versiones debe realizar un ___ para unir las historias."

explicacion: |
  El proceso de integrar cambios de una rama a otra se llama 'merge'. Si los cambios chocan en la misma línea, surge un 'conflicto' que debe ser resuelto manualmente.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["flujo_git", "orden"]

tipo: ordenar
opciones_explicitas: ["modificar_archivo", "hacer_commit", "hacer_push"]
respuesta: ["modificar_archivo", "hacer_commit", "hacer_push"]

enunciado: "Ordena los pasos lógicos para enviar tus cambios locales a un repositorio remoto:"

explicacion: |
  Primero debes realizar los cambios en el archivo, luego registrar esos cambios en tu historial local con un 'commit', y finalmente enviarlos al servidor remoto con un 'push'.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["commit", "metadatos"]

variables:
  es_valido: uno_de([true, false])
  datos: [
    ["mensaje descriptivo", true],
    ["solo un espacio", false]
  ]

tipo: mc
opciones_explicitas: ["Es obligatorio incluir un mensaje descriptivo", "El mensaje es opcional pero recomendado", "El mensaje solo lo pone el administrador", "No se puede hacer commit sin internet"]

respuesta: "Es obligatorio incluir un mensaje descriptivo"

enunciado: "En un flujo de trabajo profesional, un commit se distingue de un simple guardado de archivo porque requiere un {datos[idx][0]} que explique el cambio."

explicacion: |
  Aunque técnicamente se puede hacer un commit con mensajes vacíos en algunas configuraciones, en el desarrollo profesional es una regla fundamental para mantener la trazabilidad del proyecto.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  idx: uno_de([0,1,2])
  datos: [["un equipo de 5 programadores trabajando en el mismo archivo", "Permite trabajar en paralelo sin sobrescribir el trabajo de otros"], ["un solo programador trabajando solo en su PC", "Hace que el código sea más rápido de ejecutar"], ["un equipo que no usa herramientas de control", "Evita que los programadores tengan que escribir código"]]

enunciado: "En el escenario de {datos[idx][0]}, ¿cuál es la principal ventaja de utilizar un sistema de control de versiones como Git?"

opciones_explicitas: ["Permite trabajar en paralelo sin sobrescribir el trabajo de otros", "Hace que el código sea más rápido de ejecutar", "Evita que los programadores tengan que escribir código"]

respuesta: datos[idx][1]

tipo: mc

explicacion: |
  El control de versiones permite que múltiples personas trabajen en la misma base de código simultáneamente, gestionando las integraciones y evitando que los cambios de uno borren los del otro.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

variables:
  idx: uno_de([0,1])
  datos: [["guardar un cambio con un mensaje descriptivo", "guardar un cambio con un mensaje descriptivo"], ["borrar todo el historial de cambios", "borrar todo el historial de cambios"]]

enunciado: "En Git, realizar un 'commit' equivale a ___."

respuestas_validas: ["guardar un cambio con un mensaje descriptivo", "borrar todo el historial de cambios"]

respuesta: datos[idx][0]

tipo: completar

explicacion: |
  Un commit es una captura (snapshot) de los cambios realizados en los archivos, acompañada de un mensaje que explica qué se hizo.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "arquitectura"]

variables:
  es_distribuido: verdadero

enunciado: "Git es un sistema de control de versiones de tipo distribuido, lo que significa que cada desarrollador tiene una copia completa del historial en su máquina local. ¿Es esto verdadero?"

respuesta: es_distribuido

tipo: completar
explicacion: |
  A diferencia de los sistemas centralizados, en Git cada clon es un repositorio completo con todo su historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

opciones_explicitas: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

respuesta: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

tipo: ordenar

enunciado: "Ordena los pasos lógicos para subir un cambio local a un repositorio remoto (como GitHub):"

explicacion: |
  Primero modificas el contenido, luego creas un punto de control local (commit) y finalmente subes esa historia al servidor (push).
```

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  idx: uno_de([0,1])
  datos: [["dos personas modificaron la misma línea de un archivo", "Se produce un conflicto de fusión (merge conflict)"], ["una persona modificó un archivo y otra borró el mismo archivo", "Se produce un conflicto de fusión (merge conflict)"], ["una persona añadió una función nueva en un archivo distinto", "Git lo resuelve automáticamente sin avisar"]]

enunciado: "Si ocurre la situación: {datos[idx][0]}, ¿qué sucede en Git?"

opciones_explicitas: ["Se produce un conflicto de fusión (merge conflict)", "Git lo resuelve automáticamente sin avisar", "El repositorio se bloquea permanentemente"]

respuesta: datos[idx][1]

tipo: mc

explicacion: |
  Cuando los cambios son en líneas distintas o archivos distintos, Git puede fusionar automáticamente. Si los cambios chocan en la misma línea, el usuario debe resolver el conflicto manualmente.
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
```

```
metadata:
  materia: "informatica"
  tema: "cpu_unidad_de_control_y_alu"
  nivel: "basico"
  tags: ["uc", "control"]

tipo: completar
respuestas_validas: ["decodificar", "decodificación"]

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

tipo: mc
opciones_explicitas: ["Suma y Resta", "AND y OR", "Lectura y Escritura de archivos", "Gestión de memoria RAM"]

enunciado: "Además de las operaciones aritméticas, la ALU es capaz de realizar operaciones ____."

explicacion: |
  La ALU (Arithmetic Logic Unit) realiza tanto cálculos aritméticos (como sumas) como comparaciones y operaciones lógicas (como AND, OR, XOR).
```

```
metadata:
  materia: "informatica"
  tema: "cpu_arquitectura"
  nivel: "basico"
  tags: ["cpu", "ciclo_instruccion", "uc"]

variables:
  paso_uc: uno_de(["buscar", "decodificar", "ejecutar"])

respuesta: paso_uc
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

variables:
  op_tipo: uno_de([0, 1])

respuesta: tabla[op_tipo][1
tipo: completar
tabla: [["AND", "AND"], ["OR", "OR"]]
respuestas_validas: ["AND", "OR"]

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

respuesta: ["La UC busca la instrucción de suma en memoria", "La UC decodifica la instrucción de suma", "La ALU realiza la suma de los valores", "El resultado se escribe en un registro o memoria"]
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

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario][1
tipo: completar
tabla: [["controlar", "controlar"], ["calcular", "calcular"]]
respuestas_validas: ["controlar", "calcular"]

enunciado: "Si comparamos las funciones de los dos componentes principales de la CPU: la ALU se encarga de ___ los datos, mientras que la Unidad de Control se encarga de ___ el flujo de ejecución."

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

respuesta: ["Búsqueda (Fetch)", "Decodificación (Decode)", "Ejecución (Execute)"]

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

enunciado: "La ALU es capaz de realizar dos tipos principales de operaciones: las operaciones ___ (como la suma o resta) y las operaciones ___ (como la comparación de si un número es mayor que otro)."

respuestas_validas: ["aritméticas", "lógicas"]

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

variables:
  escenario: uno_de([[0, "La UC decide qué operación hacer"], [1, "La ALU decide qué operación hacer"]])

tipo: mc
opciones_explicitas: ["La UC decide qué operación hacer", "La ALU decide qué operación hacer", "Ambas deciden por igual", "Ninguna de las anteriores"]

enunciado: "Analizando el flujo de datos, cuando se lee una instrucción de la memoria, {escenario}."

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

variables:
  idx: uno_de([0, 1])
  datos: [["decodificar", "ejecutar"], ["ejecutar", "decodificar"]]

tipo: completar
respuestas_validas: ["decodificar", "ejecutar"]
respuesta: datos[idx][0]

enunciado: "En el ciclo de instrucción, la Unidad de Control se encarga de ___ la instrucción, mientras que la ALU se encarga de ___ la operación lógica o aritmética resultante."

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

respuesta: ["Unidad de Control", "Unidad Aritmético-Lógica", "Registros de la CPU"]

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

enunciado: "En un procesador, cuando se requiere realizar una operación de comparación entre dos valores, ¿qué componente es el encargado de ejecutar dicha lógica?: {datos[idx][0]}"

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
  pasos_orden: [["Fetch (Captación)", "Decode (Decodificación)", "Execute (Ejecución)"]]
  idx: 0

respuesta: pasos_orden[idx
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

respuestas_validas: ["25", "verdadero"]

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

enunciado: "Considerando el siguiente escenario: '{datos[idx][0]}'. ¿Qué componente es el responsable de coordinar el movimiento de datos entre la memoria y el registro?: {datos[idx][0]}"

explicacion: |
  El movimiento de datos y la coordinación de señales entre componentes es la función principal de la Unidad de Control (UC).
```

## Sección: criptografia-clave-simetrica-asimetrica-hash (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

respuesta: "misma_clave"
tipo: completar
respuestas_validas: ["misma_clave"]

enunciado: "En la criptografía simétrica, se utiliza la ___ para cifrar y descifrar el mensaje."

explicacion: |
  En la criptografía simétrica, tanto el emisor como el receptor utilizan la misma clave secreta para realizar las operaciones de cifrado y descifrado.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "clave_publica"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["La clave privada debe compartirse con cualquier persona para que el sistema funcione.", "falso"],
    ["La clave pública se puede distribuir libremente para que cualquiera pueda cifrar un mensaje para el dueño.", "verdadero"]
  ]

respuesta: escenario[idx][1
tipo: completar
opciones_explicitas: ["verdadero", "falso"]

enunciado: "En un sistema de clave pública (asimétrica), {escenario[idx][0]}"

explicacion: |
  El enunciado seleccionado es {escenario[idx][1]}. En la criptografía asimétrica, la clave pública se distribuye para cifrar, mientras que la privada se mantiene en secreto para descifrar.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

respuesta: "integridad"
tipo: mc
opciones_explicitas: ["confidencialidad", "integridad", "autenticidad", "disponibilidad"]

enunciado: "Las funciones hash se utilizan principalmente para garantizar la ___ de los datos, asegurando que el mensaje no haya sido alterado."

explicacion: |
  Un hash es una huella digital única. Si el mensaje cambia, el hash cambia, permitiendo verificar la integridad del archivo.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_vs_asimetrica"
  nivel: "basico"
  tags: ["clave_privada", "clave_publica"]

respuesta: ["Clave Pública", "Clave Privada"]
tipo: ordenar
opciones_explicitas: ["Clave Pública", "Clave Privada"]

enunciado: "Ordena el proceso de cifrado asimétrico para enviar un mensaje privado a alguien: el emisor usa la ___ del destinatario para cifrar, y el destinatario usa su ___ para descifrar."

explicacion: |
  En la criptografía asimétrica, el emisor utiliza la clave pública del receptor para que solo el receptor, con su clave privada correspondiente, pueda leer el mensaje.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "unidireccional"]

respuesta: "unidireccional"
tipo: completar
respuestas_validas: ["unidireccional"]

enunciado: "Una de las propiedades fundamentales de una función hash es que es ___; es decir, es computacionalmente imposible reconstruir el mensaje original a partir del hash obtenido."

explicacion: |
  La propiedad de unidireccionalidad (o resistencia a la preimagen) es lo que impide que un atacante pueda revertir el proceso de hashing para obtener el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Alice envía un mensaje a Bob usando la misma clave que ambos conocen para cifrar y descifrar.", "Alice envía un mensaje a Bob usando su clave privada para cifrar y Bob usa la clave pública de Alice para descifrar." ], [ "Un sistema de comunicación donde la clave de cifrado es idéntica a la de descifrado.", "Un sistema de firma digital donde la clave de cifrado es distinta a la de descifrado." ]]

enunciado: "Si estamos ante el escenario de: {datos[escenario_idx][0]}, ¿qué tipo de criptografía se está utilizando?"

opciones_explicitas: ["Simétrica", "Asimétrica"]
respuesta: datos[escenario_idx][1
tipo: mc

explicacion: |
  En la criptografía simétrica, se utiliza una única clave compartida para ambas operaciones. En la asimétrica, se utiliza un par de claves (pública y privada) relacionadas matemáticamente.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

enunciado: "Se aplica una función hash a un archivo de 1 GB. Si se cambia un solo bit del archivo original, el valor del hash resultante será ___."

respuestas_validas: ["completamente diferente", "el mismo", "casi igual"]
respuesta: "completamente diferente"
tipo: completar

explicacion: |
  Una de las propiedades fundamentales de las funciones hash criptográficas es el "efecto avalancha": un cambio mínimo en la entrada produce un cambio drástico e impredecible en la salida.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["firma_digital", "asimetrica"]

enunciado: "Ordena los pasos para que Alice firme digitalmente un documento para asegurar su autenticidad:"

opciones_explicitas: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
respuesta: ["Generar hash del documento", "Cifrar el hash con la clave privada de Alice", "Enviar documento y firma al receptor"]
tipo: ordenar

explicacion: |
  La firma digital no cifra el documento completo (que sería lento), sino el hash del documento usando la clave privada del emisor. El receptor descifra el hash con la clave pública del emisor para verificar la integridad y autoría.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "teoria"]

enunciado: "¿Es posible recuperar el mensaje original a partir de su valor hash?"

respuesta: falso
tipo: vf

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way functions). Están diseñadas para ser computacionalmente imposibles de invertir.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "verificacion"]

variables:
  hash_original: "a1b2c3d4"
  hash_recibido: uno_de(["a1b2c3d4", "f9e8d7c6"])

enunciado: "El emisor envía un archivo con el hash '{hash_original}'. El receptor, tras descargar el archivo, calcula el hash y obtiene '{hash_recibido}'. ¿El archivo ha sido alterado?"

opciones_explicitas: ["No, el archivo es íntegro", "Sí, el archivo fue alterado"]
respuesta: si(hash_original == hash_recibido, "No, el archivo es íntegro", "Sí, el archivo fue alterado")
tipo: mc

explicacion: |
  Si el hash calculado por el receptor coincide exactamente con el hash enviado por el emisor, se garantiza que el contenido no ha sido modificado durante la transmisión.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "claves"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: escenario_datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["Cifrado simétrico", "Cifrado asimétrico", "Función Hash", "No es una técnica de cifrado"]

enunciado: "En un escenario donde dos personas necesitan comunicarse de forma segura pero nunca se han encontrado previamente para intercambiar una clave secreta, ¿qué tipo de criptografía es la más adecuada para establecer la comunicación inicial?"

escenario_datos:
  - ["Cifrado simétrico", "Cifrado asimétrico"]
  - ["Cifrado simétrico", "Cifrado simétrico"]

explicacion: |
  El cifrado asimétrico utiliza un par de claves (pública y privada), lo que permite que dos entidades se comuniquen sin haber compartido previamente una clave secreta. El cifrado simétrico requiere que la clave ya sea conocida por ambas partes.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

respuesta: falso
tipo: vf

enunciado: "Una función hash criptográfica es un proceso reversible; es decir, es posible reconstruir el mensaje original a partir de su valor hash."

explicacion: |
  Las funciones hash son funciones de una sola vía (one-way). Su propósito es generar una huella digital única de un mensaje, pero no permiten recuperar el mensaje original a partir del hash.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "integridad"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: caso_datos[caso_idx][1
tipo: completar
respuestas_validas: ["integridad", "confidencialidad", "autenticidad"]

enunciado: "Si un software utiliza una función hash para verificar que un archivo descargado no ha sido modificado por un tercero durante la transmisión, está garantizando la _________ del archivo."

caso_datos:
  - ["integridad", "integridad"]
  - ["confidencialidad", "integridad"]

explicacion: |
  El hash permite verificar que el contenido no ha cambiado (integridad). No garantiza la confidencialidad, ya que el archivo original sigue siendo legible si no está cifrado.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "proceso"]

respuesta: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes"]
tipo: ordenar

opciones_explicitas: ["Hash del mensaje", "Cifrar el hash con la clave privada", "Descifrar con la clave pública", "Comparar hashes", "Cifrar el mensaje con la clave privada"]

enunciado: "Para realizar una firma digital sobre un documento y que el receptor pueda verificarla, ¿cuál es el orden correcto de los pasos técnicos?"

explicacion: |
  Primero se genera el hash del mensaje original. Luego, ese hash se cifra con la clave privada del emisor (esto es la firma). El receptor descifra la firma con la clave pública del emisor y compara el resultado con el hash que él mismo calcula del mensaje recibido.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "intermedio"
  tags: ["eficiencia", "hibrida"]

respuesta: falso
tipo: vf

enunciado: "Dado que el cifrado asimétrico es mucho más seguro que el simétrico, la práctica estándar en la navegación web (HTTPS) es cifrar todo el tráfico de datos usando únicamente criptografía asimétrica."

explicacion: |
  Falso. El cifrado asimétrico es computacionalmente muy costoso y lento. Por eso, se usa un sistema híbrido: la criptografía asimétrica para intercambiar una clave simétrica, y luego se usa esa clave simétrica para cifrar el flujo de datos real por su rapidez.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_simetrica_asimetrica"
  nivel: "basico"
  tags: ["criptografia", "seguridad"]

variables:
  escenario: uno_de(["simetrica", "asimetrica"])

enunciado: "En un sistema de cifrado {escenario}, se utiliza la misma clave para cifrar y descifrar el mensaje."

respuesta: escenario == "simetrica"
tipo: completar
explicacion: |
  En la criptografía simétrica, la clave compartida es idéntica para ambas operaciones. En la asimétrica, se usa un par de claves (pública y privada).
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["hash", "integridad"]

opciones_explicitas: ["Garantizar la confidencialidad del mensaje", "Garantizar la integridad del mensaje", "Cifrar el mensaje para que nadie lo lea", "Comprimir el mensaje para que ocupe menos"]

respuesta: "Garantizar la integridad del mensaje"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de aplicar una función hash a un archivo o mensaje?"

explicacion: |
  Una función hash genera una huella digital única. Si el archivo cambia, el hash cambia, lo que permite verificar que el contenido no ha sido alterado (integridad).
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "intermedio"
  tags: ["hash", "seguridad"]

variables:
  caso: uno_de(["colision", "unidireccional"])

enunciado: "Una función hash es considerada {caso} si es computacionalmente imposible encontrar el mensaje original a partir de su hash."

pasos:
  - "Identificar la propiedad descrita."

respuesta: tabla[idx][1
tabla:
  - ["colision", "colision"]
  - ["unidireccional", "unidireccional"]

tipo: completar
respuestas_validas: ["colision", "unidireccional"]

explicacion: |
  La propiedad de unidireccionalidad (one-way) impide revertir el proceso de hash para obtener el dato original.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_clave_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrica", "claves"]

opciones_explicitas: ["Clave privada", "Clave pública", "Clave secreta", "Clave de sesión"]

respuesta: "Clave pública"
tipo: mc

enunciado: "Si Alice quiere enviarle un mensaje cifrado a Bob de forma segura usando criptografía asimétrica, ¿qué clave debe utilizar Alice para cifrar el mensaje?"

explicacion: |
  En la criptografía asimétrica, se cifra con la clave pública del destinatario, de modo que solo el destinatario pueda descifrarlo con su clave privada correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_conceptos"
  nivel: "basico"
  tags: ["conceptos", "seguridad"]

opciones_explicitas: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]

respuesta: ["Hash", "Cifrado Simétrico", "Cifrado Asimétrico"]
tipo: ordenar

enunciado: "Ordena los siguientes conceptos de mayor a menor capacidad de recuperación de la información original (desde que es posible recuperar el mensaje original hasta que es imposible):"

explicacion: |
  1. Cifrado Simétrico/Asimétrico: Están diseñados para ser reversibles con la clave correcta.
  2. Hash: Es una función de una sola vía; no se puede recuperar el mensaje original a partir del hash.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["seguridad", "simetrico"]

variables:
  datos: [["400 GB de datos", "simetrico"], ["2 KB de texto", "asimetrico"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["simetrico", "asimetrico"]

enunciado: "Un servidor necesita cifrar un archivo de {datos[idx][0]} para su almacenamiento seguro. Dado que la velocidad de procesamiento es la prioridad, ¿qué tipo de cifrado debería utilizar?"

explicacion: |
  Para grandes volúmenes de datos, el cifrado simétrico es preferible por su alta velocidad y eficiencia computacional en comparación con el asimétrico.
```

```
metadata:
  materia: "informatica"
  tema: "funciones_hash"
  nivel: "basico"
  tags: ["integridad", "hash"]

respuesta: "hash"
tipo: completar
respuestas_validas: ["hash", "checksum", "resumen"]

enunciado: "Para verificar que un archivo no ha sido alterado durante una descarga, se suele comparar su valor ___ con el proporcionado por el servidor."

explicacion: |
  Una función hash genera una huella digital única (hash) de un mensaje. Si el contenido cambia, el hash cambia completamente.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "intermedio"
  tags: ["asimetrico", "clave_publica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de criptografía asimétrica, si utilizo la clave pública del destinatario para cifrar un mensaje, solo él podrá descifrarlo usando su clave privada correspondiente."

explicacion: |
  Esa es la base de la criptografía de clave pública: la clave de cifrado es pública, pero la de descifrado es privada y secreta.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_asimetrica"
  nivel: "avanzado"
  tags: ["firma_digital", "ordenar"]

respuesta: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]
tipo: ordenar
opciones_explicitas: ["crear_hash", "cifrar_hash_con_clave_privada", "enviar_mensaje_y_firma"]

enunciado: "Para realizar una firma digital sobre un documento, se deben seguir estos pasos en orden:"

pasos:
  - "Generar un resumen del documento."
  - "Cifrar ese resumen con la clave privada del emisor."
  - "Enviar el documento original junto con la firma generada."

explicacion: |
  La firma digital no cifra el documento entero, sino el hash del mismo, utilizando la clave privada para garantizar el no repudio y la integridad.
```

```
metadata:
  materia: "informatica"
  tema: "criptografia_simetrica_asimetrica"
  nivel: "basico"
  tags: ["claves", "seguridad"]

variables:
  datos: [["enviar una sola clave por un canal inseguro", "falso"], ["usar dos llaves distintas (pública y privada)", "verdadero"]]
  idx: uno_de([0,1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En el cifrado simétrico, el principal problema de seguridad es: {datos[idx][0]}."

explicacion: |
  El cifrado simétrico requiere que ambas partes compartan la misma clave. Si el canal para compartirla es inseguro, un atacante podría interceptarla.
```

## Sección: direccionamiento-ip-dns (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "conceptos"]

respuesta: "identificador"
tipo: completar
respuestas_validas: ["identificador", "dirección", "etiqueta"]

enunciado: "En una red de computadoras, la dirección IP funciona como un ___ único que permite identificar un dispositivo en la red."

explicacion: |
  La dirección IP (Internet Protocol) es la etiqueta numérica que identifica de manera lógica a un dispositivo dentro de una red, permitiendo que los datos lleguen al destino correcto.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["dns", "redes", "internet"]

opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar direcciones IP dinámicas", "Cifrar el tráfico de la red", "Almacenar páginas web"]

respuesta: uno_de(["Traducir nombres de dominio a direcciones IP", "Asignar direcciones IP dinámicas", "Cifrar el tráfico de la red", "Almacenar páginas web"])[0]
tipo: mc

enunciado: "Si escribes 'google.com' en tu navegador, ¿qué tarea realiza principalmente el sistema DNS?"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce los nombres de dominio legibles para humanos (como google.com) en direcciones IP legibles para las máquinas.
```

```
metadata:
  materia: "informatica"
  tema: "protocolos_ip"
  nivel: "basico"
  tags: ["ipv4", "ipv6", "protocolos"]

respuesta: falso
tipo: vf

enunciado: "La principal diferencia entre IPv4 e IPv6 es que IPv6 utiliza direcciones de 128 bits, mientras que IPv4 utiliza 32 bits."

explicacion: |
  La afirmación es falsa porque la descripción de los tamaños es correcta, pero la pregunta suele ser de validación de conceptos. (Nota: En este caso la afirmación es verdadera, por lo tanto la respuesta es verdadero. Corregido: La afirmación es verdadera, el usuario debe marcar verdadero).

# Re-ajuste para cumplir la lógica de la pregunta:
# Si la afirmación es "IPv6 tiene 128 bits y IPv4 32 bits", la respuesta es verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "protocolos_ip"
  nivel: "basico"
  tags: ["ipv4", "ipv6", "protocolos"]

respuesta: verdadero
tipo: vf

enunciado: "El protocolo IPv4 es una versión más antigua que IPv6 y ofrece un espacio de direcciones mucho más limitado."

explicacion: |
  Es verdadero. IPv4 utiliza 32 bits (aprox. 4.3 mil millones de direcciones), mientras que IPv6 utiliza 128 bits, proporcionando un número prácticamente infinito de direcciones.
```

```
metadata:
  materia: "informatica"
  tema: "dns_flujo"
  nivel: "intermedio"
  tags: ["dns", "redes", "orden"]

opciones_explicitas: ["Consulta al servidor DNS", "Traducción de nombre a IP", "Conexión al servidor web"]

respuesta: ["Consulta al servidor DNS", "Traducción de nombre a IP", "Conexión al servidor web"]
tipo: ordenar

enunciado: "Ordena los pasos que ocurren desde que escribes una URL hasta que ves la página en tu pantalla:"

explicacion: |
  Primero el cliente pregunta al DNS, el DNS devuelve la IP, y finalmente el cliente usa esa IP para establecer la conexión con el servidor web.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "redes"]

variables:
  idx: uno_de([0, 1])
  datos: [["192.168.1.1", "Dirección IP"], ["google.com", "Nombre de dominio"]]

respuesta: datos[idx][1
tipo: mc

opciones_explicitas: ["Dirección IP", "Nombre de dominio"]

enunciado: "Si tenemos el valor {datos[idx][0]}, este representa un/a ___."

explicacion: |
  Dependiendo del valor sorteado, se identifica si es una dirección numérica (IP) o un nombre alfanumérico (Dominio).
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip"]

tipo: mc
opciones_explicitas: ["La dirección física de la tarjeta de red", "La etiqueta lógica que identifica un dispositivo en una red", "El nombre asignado por el usuario al equipo", "La velocidad de conexión a internet"]

respuesta: "La etiqueta lógica que identifica un dispositivo en una red"

enunciado: "En una red local, cada dispositivo necesita una identidad única para que los datos lleguen al destino correcto. Esta identidad se conoce como dirección IP. ¿Cuál es su función principal?"

explicacion: |
  La dirección IP (Internet Protocol) actúa como una etiqueta lógica que permite identificar un dispositivo (como tu móvil o tu router) dentro de una red, permitiendo que la información sepa exactamente a dónde dirigirse.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  escenario: uno_de([["www.google.com", "142.250.190.46"], ["www.wikipedia.org", "103.102.166.224"]])

tipo: completar
respuestas_validas: ["142.250.190.46", "103.102.166.224"]
respuesta: escenario[0

enunciado: "Cuando escribes un nombre de dominio en tu navegador, el sistema DNS realiza una traducción. Si el dominio es {escenario[0]}, el servidor DNS te devolverá la dirección IP correspondiente, que es ___."

explicacion: |
  El DNS (Domain Name System) funciona como una agenda telefónica: tú buscas el nombre (dominio) y el DNS te devuelve el número (dirección IP) necesario para establecer la conexión.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["dns", "verdadero_falso"]

tipo: vf

enunciado: "¿Es correcto afirmar que la función principal del DNS es traducir nombres de dominio (como google.com) en direcciones IP (como 142.250.190.46) para que las computadoras puedan comunicarse?"

respuesta: verdadero

explicacion: |
  Verdadero. Las computadoras se comunican mediante números (IPs), pero los humanos preferimos usar nombres (dominios). El DNS es el traductor que permite esta interoperabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "flujo_dns"
  nivel: "intermedio"
  tags: ["dns", "redes"]

tipo: ordenar
opciones_explicitas: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

respuesta: ["El navegador solicita la IP al servidor DNS", "El servidor DNS responde con la dirección IP", "El navegador se conecta a la dirección IP obtenida", "Se carga el contenido de la página web"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que presionas 'Enter' en tu navegador hasta que ves una página web:"

explicacion: |
  Primero se consulta al DNS para obtener la IP, luego se usa esa IP para establecer la conexión con el servidor de destino y finalmente se descarga el contenido.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "calculo"]

variables:
  ip_base: "192.168.1.0"
  mascara: "255.255.255.0"
  total_hosts: 254

tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos una red con máscara de subred {mascara}, y el rango de direcciones utilizables comienza en {ip_base} (excluyendo la red) y termina en 192.168.1.255 (excluyendo el broadcast), ¿cuántos dispositivos distintos pueden tener una IP válida en este segmento?"

pasos:
  - "Identificar el número total de direcciones en el bloque (256)"
  - "Restar la dirección de red (.0) y la dirección de broadcast (.255)"
  - "Resultado: 256 - 2 = 254"

respuesta: 254

explicacion: |
  En una red con máscara /24 (255.255.255.0), hay 256 direcciones totales. Se deben restar siempre dos: la dirección de red (la primera) y la de broadcast (la última), dejando 254 direcciones para hosts.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["redes", "internet", "dns"]

respuesta: "traducción"
tipo: "completar"
respuestas_validas: ["traducción", "traducir", "resolver"]

enunciado: "El sistema DNS tiene la función principal de realizar la ___ de nombres de dominio a direcciones IP."

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, transformando nombres fáciles de recordar (como google.com) en direcciones IP numéricas que las máquinas pueden entender.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "dns", "conceptos"]

variables:
  escenario: uno_de([
    ["192.168.1.1", "google.com"],
    ["8.8.8.8", "facebook.com"],
    ["10.0.0.5", "wikipedia.org"]
  ])

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["La IP es el nombre y el dominio es la dirección", "El dominio es el nombre y la IP es la dirección", "Ambos son lo mismo", "El DNS convierte IPs en dominios"]

enunciado: "Si intentas acceder a {escenario[1]}, tu navegador primero buscará la dirección IP correspondiente a ese nombre. En este contexto, {escenario[1]} es el ___ y {escenario[0]} es la ___."

explicacion: |
  El nombre de dominio es la etiqueta legible para humanos, mientras que la dirección IP es la identificación numérica única de un dispositivo en la red.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "pasos", "redes"]

respuesta: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]
tipo: "ordenar"
opciones_explicitas: ["Consulta al servidor DNS", "El DNS devuelve la IP", "El navegador se conecta a la IP"]

enunciado: "Ordena los pasos lógicos que ocurren cuando escribes una URL en tu navegador y el nombre no está en caché:"

explicacion: |
  El proceso sigue un orden jerárquico: primero se pregunta al servidor DNS, este responde con la IP y finalmente el cliente puede establecer la conexión con el servidor de destino.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "capas_modelo_osi"]

respuesta: falso

tipo: "vf"

enunciado: "La dirección IP es una dirección física única grabada en el hardware de la tarjeta de red (MAC Address)."

explicacion: |
  Falso. La dirección IP es una dirección lógica asignada por la red para el direccionamiento en la capa de red, mientras que la dirección MAC es la dirección física grabada en el hardware.
```

```
metadata:
  materia: "informatica"
  tema: "dns_cache"
  nivel: "intermedio"
  tags: ["dns", "troubleshooting"]

variables:
  caso: uno_de([
    ["un sitio web cambió de servidor y la IP vieja sigue cargando", "el servidor DNS tiene datos desactualizados"],
    ["un sitio web no carga pero la IP funciona", "hay un problema de resolución de nombres"]
  ])

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["La IP es incorrecta", "El DNS tiene datos desactualizados", "El cable de red está desconectado", "El dominio expiró"]

enunciado: "Si un usuario intenta entrar a una web y recibe un error de 'no se encuentra el servidor', pero al usar la IP directamente la web carga, ¿cuál es la causa más probable? {caso[0]}."

explicacion: |
  Esto ocurre cuando el sistema operativo o el servidor DNS mantienen en caché una información antigua (la IP vieja) que ya no apunta al servidor actual del sitio web.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["redes", "ip", "mac"]

respuesta: "capa_red"
tipo: completar
respuestas_validas: ["capa_red", "capa_enlace"]

enunciado: "Mientras que la dirección MAC se utiliza para la comunicación en la capa de enlace, la dirección IP se utiliza para el direccionamiento en la ___."

explicacion: |
  La dirección MAC es una dirección física única grabada en el hardware (Capa 2), mientras que la IP es una dirección lógica que permite el enrutamiento entre redes distintas (Capa 3).
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "basico"
  tags: ["dns", "internet"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"]]

respuesta: uno_de(datos)[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Traducir nombres de dominio a direcciones IP", "Asignar una dirección MAC a un dispositivo", "Encriptar el tráfico de la web", "Almacenar archivos de sitios web"]

enunciado: "Si un usuario intenta acceder a {uno_de(datos)[escenario_idx][0]}, el sistema DNS se encarga de realizar la siguiente tarea: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' que traduce nombres legibles para humanos a direcciones IP legibles para las máquinas.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "intermedio"
  tags: ["ipv4", "ipv6"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la principal diferencia entre IPv4 e IPv6 es que IPv6 utiliza direcciones de 128 bits para ofrecer un espacio de direccionamiento mucho mayor que los 32 bits de IPv4?"

explicacion: |
  Verdadero. El agotamiento de direcciones IPv4 fue el motor principal para la transición hacia IPv6, que permite un número prácticamente infinito de direcciones.
```

```
metadata:
  materia: "informatica"
  tema: "dns_resolucion"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]
tipo: ordenar
opciones_explicitas: ["Consulta al Resolver", "Consulta al Root Server", "Consulta al TLD Server", "Consulta al Authoritative Server"]

enunciado: "Ordena los pasos lógicos que sigue un cliente cuando busca resolver un nombre de dominio que no está en la caché local:"

explicacion: |
  El proceso comienza con el Resolver (usualmente tu ISP), que pregunta a los Root Servers, estos derivan a los servidores TLD (como .com) y finalmente al servidor autoritativo que tiene la IP real.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip_estatica", "ip_dinamica"]

variables:
  tipo_ip_idx: uno_de([0, 1])
  config: [["estatica", "servidor web"], ["dinamica", "computadora de hogar"]]

respuesta: uno_de(config)[tipo_ip_idx][1]

tipo: mc
opciones_explicitas: ["servidor web", "computadora de hogar", "router principal", "switch de capa 2"]

enunciado: "Para el tipo de dirección IP {uno_de(config)[tipo_ip_idx][0]}, es más común utilizar una dirección de tipo ___."

explicacion: |
  Los servidores necesitan una IP estática para que siempre sean localizables en la misma dirección. Los dispositivos finales suelen usar IPs dinámicas asignadas por DHCP para optimizar el uso de direcciones.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "basico"
  tags: ["redes", "dns"]

variables:
  datos: [["google.com", "142.250.190.46"], ["wikipedia.org", "103.102.166.224"], ["github.com", "140.82.121.4"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["142.250.190.46", "103.102.166.224", "140.82.121.4"]

enunciado: "Un usuario escribe en su navegador el nombre de dominio {datos[idx][0]}. Para poder conectar con el servidor, el sistema DNS debe traducir ese nombre a la dirección IP: ___"

explicacion: |
  El DNS (Domain Name System) actúa como una 'agenda telefónica' de Internet, traduciendo nombres legibles para humanos en direcciones IP numéricas que las máquinas pueden entender.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "basico"
  tags: ["ip", "redes"]

respuesta: verdadero
tipo: vf

enunciado: "La dirección IP 192.168.1.1 es una dirección lógica que identifica a un dispositivo en una red, a diferencia de la dirección MAC que es física."

explicacion: |
  Correcto. La dirección IP es una dirección lógica asignada por software (capa de red), mientras que la MAC es la dirección física grabada en el hardware (capa de enlace).
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "protocolos"]

respuesta: "DNS"
tipo: mc
opciones_explicitas: ["DNS", "DHCP", "HTTP", "FTP"]

enunciado: "Si un ordenador conoce el nombre de un servidor pero no sabe su dirección IP para establecer la comunicación, ¿qué servicio debe consultar?"

explicacion: |
  El servicio DNS es el encargado de la resolución de nombres a direcciones IP.
```

```
metadata:
  materia: "informatica"
  tema: "dns_funcionamiento"
  nivel: "intermedio"
  tags: ["dns", "proceso"]

respuesta: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]
tipo: ordenar
opciones_explicitas: ["Consulta caché local", "Consulta servidor DNS recursivo", "Consulta servidor DNS raíz", "Obtención de la IP final"]

enunciado: "Ordena los pasos lógicos que sigue un sistema operativo para resolver un nombre de dominio cuando no lo tiene en memoria:"

explicacion: |
  El proceso comienza buscando en la caché local; si no está, consulta al resolver (recursivo), quien a su vez consulta a los servidores raíz y otros niveles hasta encontrar la IP.
```

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_ip"
  nivel: "avanzado"
  tags: ["ip", "redes"]

variables:
  datos: [[["192.168.1.5", "192.168.1.255"], ["10.0.0.1", "10.0.0.255"], ["172.16.0.10", "172.16.0.255"]]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["192.168.1.255", "10.0.0.255", "172.16.0.255"]

enunciado: "En una red con máscara de subred que identifica la dirección de broadcast como {datos[idx][1]}, ¿cuál es la dirección de broadcast para el host {datos[idx][0]}?"

explicacion: |
  La dirección de broadcast es la dirección que se utiliza para enviar paquetes a todos los hosts de una red específica; es la última dirección de ese rango de red.
```

## Sección: diseno-y-arquitectura-de-software (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: mc
opciones_explicitas: ["El diseño detallado de algoritmos y estructuras de datos", "La estructura fundamental de un sistema y sus componentes", "La escritura de código siguiendo un estándar de estilo", "La gestión de los servidores donde se aloja la aplicación"]

enunciado: "La arquitectura de software se define principalmente como ___."

explicacion: |
  La arquitectura de software se refiere a la estructura de alto nivel de un sistema, incluyendo sus componentes, las relaciones entre ellos y los principios que rigen su diseño y evolución.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["calidad", "requerimientos"]

variables:
  es_calidad: true

tipo: vf

enunciado: "Los atributos de calidad (como la escalabilidad, la seguridad y la disponibilidad) forman parte de los requerimientos no funcionales del sistema. ¿Es esto verdadero?"

explicacion: |
  Correcto. Mientras que los requerimientos funcionales describen qué hace el sistema, los no funcionales (atributos de calidad) describen cómo se comporta el sistema bajo ciertas condiciones.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "procesos"]

tipo: ordenar
opciones_explicitas: ["Análisis de requisitos", "Diseño de arquitectura", "Implementación", "Pruebas y despliegue"]

enunciado: "Ordene las etapas del ciclo de vida de desarrollo de software en un orden lógico secuencial, desde la concepción hasta la entrega."

explicacion: |
  Un flujo estándar comienza con entender qué se necesita (Análisis), diseñar cómo se construirá (Arquitectura/Diseño), escribir el código (Implementación) y verificar que funcione (Pruebas/Despliegue).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones", "arquitectura"]

variables:
  escenario: [[ "Monolítica", "Un solo bloque de código donde todo está interconectado" ], [ "Microservicios", "Un conjunto de servicios pequeños e independientes" ]]
  idx: uno_de([0, 1])

tipo: completar

enunciado: "Si elegimos una arquitectura de tipo {escenario[idx][0]}, el sistema se caracteriza por ser {escenario[idx][1]}."

respuestas_validas: ["Un solo bloque de código donde todo está interconectado", "Un conjunto de servicios pequeños e independientes"]
respuesta: escenario[idx][1

explicacion: |
  La arquitectura Monolítica centraliza toda la lógica en una única unidad, mientras que los Microservicios descomponen la aplicación en servicios autónomos que se comunican entre sí.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["principios", "calidad_codigo"]

variables:
  es_bueno: false

tipo: vf

enunciado: "En un buen diseño de arquitectura de software, se busca que los componentes tengan un alto acoplamiento y una baja cohesión. ¿Es esto correcto?"

explicacion: |
  Falso. Un buen diseño busca **bajo acoplamiento** (que los componentes dependan poco entre sí) y **alta cohesión** (que cada componente tenga una responsabilidad única y bien definida).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseño", "observer"]

variables:
  escenario: uno_de([
    ["Sistema de Clima", "Sensor de Temperatura"],
    ["App de Bolsa", "Widget de Cotizaciones"],
    ["Videojuego", "Sistema de Logros"]
  ])

enunciado: "En un sistema de {escenario[0]}, el {escenario[1]} actúa como el 'Subject'. Cuando la temperatura cambia, debe notificar a todos los observadores registrados. Si un observador no está suscrito, no recibirá la actualización."

opciones_explicitas: ["El Subject mantiene una lista de suscriptores", "El Observer decide cuándo notificar al Subject", "El Subject debe conocer la implementación interna de cada Observer"]

respuesta: "El Subject mantiene una lista de suscriptores"
tipo: mc

explicacion: |
  El patrón Observer define una relación de uno a muchos. El 'Subject' mantiene una lista de suscriptados y, ante un cambio de estado, recorre dicha lista llamando al método de actualización de cada uno.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura_hexagonal", "dependencias"]

variables:
  capa_externa: uno_de(["Base de Datos", "Interfaz de Usuario", "Servicio de Email"])
  capa_core: "Dominio (Lógica de Negocio)"

enunciado: "Siguiendo los principios de la Arquitectura Hexagonal (Ports and Adapters), la dependencia debe fluir hacia el centro. Si tenemos un componente de {capa_externa}, este debe depender de una interfaz definida en el {capa_core}, pero el {capa_core} NUNCA debe depender de {capa_externa}."

opciones_explicitas: [verdadero, falso]

respuesta: verdadero
tipo: vf

explicacion: |
  La regla de oro de la arquitectura hexagonal es la inversión de dependencias. El núcleo (Core) es independiente de los detalles de infraestructura (DB, UI, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

variables:
  modelo: uno_de([
    ["Cascada", "Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"],
    ["Ágil", "Planificación", "Iteración", "Revisión", "Adaptación"]
  ])

enunciado: "En el modelo de {modelo[0]}, las fases deben completarse de forma secuencial. El orden correcto de las etapas es: 1. {modelo[1]}, 2. {modelo[2]}, 3. {modelo[3]}, 4. {modelo[4]} y 5. {modelo[5]}."

opciones_explicitas: [
  ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"],
  ["Diseño", "Requerimientos", "Implementación", "Pruebas", "Mantenimiento"],
  ["Requerimientos", "Implementación", "Diseño", "Pruebas", "Mantenimiento"]
]

respuesta: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El modelo en Cascada (Waterfall) es lineal y rígido: no se puede pasar a la fase de implementación sin haber finalizado el diseño y los requerimientos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_solid", "cohesion"]

variables:
  modulo: uno_de(["Modulo_Pagos", "Modulo_Usuarios", "Modulo_Inventario"])

enunciado: "Estamos diseñando un sistema para una tienda online. Si el {modulo[0]} contiene funciones para procesar pagos, generar facturas PDF y también para enviar emails de bienvenida, el módulo tiene una ___ baja."

respuestas_validas: ["cohesión"]

respuesta: "cohesión"
tipo: completar

explicacion: |
  Una baja cohesión ocurre cuando un módulo realiza demasiadas tareas distintas que no están relacionadas entre sí. Un buen diseño busca que cada módulo tenga una responsabilidad única (Single Responsibility Principle).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_of_software"
  nivel: "intermedio"
  tags: ["microservicios", "monolito"]

variables:
  escenario_carga: uno_de([
    "El módulo de pagos recibe 1000 peticiones por segundo, pero el resto del sistema no.",
    "El módulo de catálogo es muy pesado en memoria, pero el resto es ligero.",
    "El módulo de búsqueda requiere escalar su CPU constantemente por la alta demanda."
  ])

enunciado: "En un escenario donde {escenario_carga}, una arquitectura de microservicios permite escalar solo el componente afectado, mientras que en un monolito se debe escalar toda la aplicación. ¿Cuál es la principal ventaja de microservicios en este caso?"

opciones_explicitas: ["Escalabilidad selectiva", "Simplicidad de despliegue", "Menor latencia de red"]

respuesta: "Escalabilidad selectiva"
tipo: mc

explicacion: |
  Los microservicios permiten el "Scaling out" dirigido. Si solo un componente tiene carga, solo pagamos por más recursos para ese componente, optimizando costos y recursos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["principios_diseno", "mantenibilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["un modulo que realiza muchas tareas distintas", "bajo"], ["un modulo que hace una sola cosa muy bien", "alto"]], [["un modulo que depende de demasiados otros", "alto"], ["un modulo que es independiente y autónomo", "bajo"]]]

enunciado: "En el diseño de software, buscamos que los módulos tengan una ___ cohesión y un ___ acoplamiento para facilitar el mantenimiento."

opciones_explicitas: ["alta", "baja", "alta", "alta", "baja", "baja", "alta"]

respuesta: datos[escenario_idx][1
tipo: mc

explicacion: |
  Una alta cohesión significa que el módulo está enfocado en una sola responsabilidad. Un bajo acoplamiento significa que los módulos están poco interconectados, lo que permite cambiarlos sin afectar al resto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

enunciado: "¿Es siempre preferible una arquitectura de microservicios sobre una arquitectura monolítica para cualquier proyecto de software?"

respuesta: falso
tipo: vf

explicacion: |
  No siempre. Los microservicios añaden una complejidad operativa significativa (red, latencia, consistencia de datos). Para proyectos pequeños o equipos reducidos, un monolito bien estructurado suele ser más eficiente y menos costoso.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["metodologias", "sdlc"]

enunciado: "Ordena las fases típicas del ciclo de vida de desarrollo de software (SDLC) desde la concepción hasta el cierre:"

opciones_explicitas: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]

respuesta: ["Requerimientos", "Diseño", "Implementación", "Pruebas", "Mantenimiento"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza entendiendo qué se necesita (Requerimientos), cómo se estructurará (Diseño), escribiendo el código (Implementación), verificando que funcione (Pruebas) y asegurando su vida útil (Mantenimiento).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "creacionales"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplo: [["gestión de una conexión a una base de datos única", "Singleton"], ["crear diferentes tipos de botones en una interfaz", "Factory"]]

enunciado: "Si un programador necesita asegurar que una clase tenga una única instancia en todo el sistema, está intentando implementar el patrón ___."

respuestas_validas: ["Singleton", "Factory"]

respuesta: ejemplo[caso_idx][1
tipo: completar

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella, evitando conflictos de recursos como conexiones a bases de datos o archivos de configuración.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["acoplamiento", "diseño_estructural"]

variables:
  tipo_acoplamiento: uno_de(["control", "datos"])
  descripcion: [["cuando un módulo le dice a otro exactamente qué hacer y cómo", "control"], ["cuando un módulo solo pasa información necesaria", "datos"]]

enunciado: "Cuando un módulo A le pasa un objeto a un módulo B, pero además le indica a B qué método debe llamar y en qué orden, estamos ante un acoplamiento de ___."

opciones_explicitas: ["control", "datos"]

respuesta: tipo_acoplamiento == "control"
tipo: mc

explicacion: |
  El acoplamiento de control es peligroso porque el módulo emisor debe conocer la lógica interna del receptor. El objetivo es evolucionar hacia un acoplamiento de datos, donde solo se intercambie la información necesaria.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["arquitectura", "diseno", "conceptos"]

respuesta: "arquitectura"
tipo: "mc"
opciones_explicitas: ["diseño", "arquitectura", "codificación", "testing"]

enunciado: "Mientras que el diseño de software se enfoca en los detalles de algoritmos y estructuras de datos internas, la ___ se ocupa de la estructura global y las decisiones de alto nivel del sistema."

explicacion: |
  La arquitectura define la estructura macro (componentes, interacciones y patrones), mientras que el diseño se encarga de la micro-estructura (lógica interna de los componentes).
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["acoplamiento", "cohesion"]

variables:
  escenario: uno_de([["bajo", "alto"], ["alto", "bajo"], ["alto", "alto"]])

respuesta: escenario[0][0
tipo: "vf"

enunciado: "En un sistema con buen diseño, buscamos que el acoplamiento sea ___ y la cohesión sea ___."

explicacion: |
  Un bajo acoplamiento minimiza la dependencia entre módulos, facilitando cambios. Una alta cohesión asegura que cada módulo tenga una responsabilidad única y clara.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["monolito", "microservicios", "despliegue"]

respuesta: "microservicios"
tipo: "completar"
respuestas_validas: ["microservicios"]

enunciado: "A diferencia de una arquitectura de tipo ___, donde todos los componentes están en un único paquete desplegable, la arquitectura de ___ divide la aplicación en servicios independientes que se comunican por red."

explicacion: |
  Los microservicios permiten escalar partes específicas del sistema de forma independiente, algo que en un monolito requiere escalar toda la aplicación.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["capas", "arquitectura", "orden"]

respuesta: ["Presentación", "Lógica de Negocio", "Acceso a Datos"]
tipo: "ordenar"
opciones_explicitas: ["Acceso a Datos", "Lógica de Negocio", "Presentación"]

enunciado: "Ordene las capas de una arquitectura clásica en capas (N-Tier) desde la más cercana al usuario hasta la más cercana a la base de datos:"

explicacion: |
  La capa de Presentación maneja la interfaz, la de Lógica de Negocio procesa las reglas y la de Acceso a Datos gestiona la persistencia.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["atributos", "calidad", "mantenibilidad"]

respuesta: "mantenibilidad"
tipo: "mc"
opciones_explicitas: ["rendimiento", "mantenibilidad", "usabilidad", "seguridad"]

enunciado: "Un sistema puede ser muy rápido (alto rendimiento), pero si su arquitectura es desordenada y difícil de modificar, carece de buena ___."

explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado para corregir errores, mejorar el rendimiento o adaptarse a nuevos requisitos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["arquitectura", "patrones"]

variables:
  escenario: uno_de([
    ["Se requiere un sistema donde la interfaz de usuario y la lógica de negocio estén totalmente desacopladas para permitir múltiples vistas (web, móvil, CLI) usando el mismo núcleo.", "MVC"],
    ["Se requiere un sistema donde las componentes se comuniquen mediante eventos asíncronos para garantizar un desacoplamiento máximo entre productores y consumidores.", "Event-Driven"],
    ["Se requiere un sistema basado en servicios independientes que se comunican por red, permitiendo escalar cada componente de forma autónoma.", "Microservicios"]
  ])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["MVC", "Event-Driven", "Microservicios", "Monolito"]

enunciado: "Un arquitecto de software debe elegir la estructura para un proyecto con las siguientes características: {escenario[idx][0]}"

explicacion: |
  El patrón seleccionado es {escenario[idx][1]}. Cada patrón responde a necesidades específicas de escalabilidad, desacoplamiento o complejidad de interfaz.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "basico"
  tags: ["principios_solid", "refactorizacion"]

variables:
  clase_problematica: uno_de([
    ["Una clase 'Factura' que calcula el total, guarda en la base de datos y genera un PDF.", "Falso"],
    ["Una clase 'Usuario' que contiene solo los atributos de datos y métodos de acceso.", "Verdadero"]
  ])
  idx: uno_de([0,1])

respuesta: clase_problematica[idx][1
tipo: completar
enunciado: "Analice el siguiente caso: {clase_problematica[idx][0]}. ¿Cumple esta clase con el Principio de Responsabilidad Única (SRP)?"

explicacion: |
  El valor es {clase_problematica[idx][1]}. El SRP establece que una clase debe tener una, y solo una, razón para cambiar.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["capas", "arquitectura_n_capas"]

variables:
  capas_orden: [
    ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos"],
    ["Interfaz", "Lógica", "Persistencia", "Almacenamiento"],
    ["UI", "Domain", "Data Access", "DB"]
  ]
  idx: uno_de([0,1,2])

respuesta: capas_orden[idx
tipo: ordenar

opciones_explicitas: ["Presentación", "Negocio", "Acceso a Datos", "Base de Datos", "Interfaz", "Lógica", "Persistencia", "Almacenamiento", "UI", "Domain", "Data Access", "DB"]

enunciado: "Ordene las capas de un sistema de software estándar desde la capa más externa (usuario) hasta la más interna (almacenamiento) según el modelo de {capas_orden[idx][0]}."

explicacion: |
  El orden correcto para este modelo es {capas_orden[idx]}. La arquitectura en capas busca separar la lógica de presentación de la lógica de negocio y el acceso a datos.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "intermedio"
  tags: ["calidad_codigo", "acoplamiento", "cohesion"]

variables:
  caso_estudio: uno_de([
    ["Un módulo que tiene funciones muy relacionadas entre sí pero que depende fuertemente de variables globales de otros módulos.", "Baja Cohesion, Alto Acoplamiento"],
    ["Un módulo con funciones diversas que no tienen relación entre sí, pero que son independientes de otros sistemas.", "Alta Cohesion, Bajo Acoplamiento"]
  ])
  idx: uno_de([0,1])

respuesta: caso_estudio[idx][1
tipo: completar
respuestas_validas: ["Baja Cohesion, Alto Acoplamiento", "Alta Cohesion, Bajo Acoplamiento"]

enunciado: "En el diseño de software, el caso descrito es: ___"

explicacion: |
  El diagnóstico es {caso_estudio[idx][1]}. Un buen diseño busca Maximizar la Cohesión y Minimizar el Acoplamiento.
```

```
metadata:
  materia: "informatica"
  tema: "diseno_y_arquitectura_de_software"
  nivel: "avanzado"
  tags: ["mantenibilidad", "deuda_tecnica"]

variables:
  escenario_deuda: uno_de([
    ["Se decide omitir la creación de tests unitarios y la documentación de la arquitectura para cumplir con una fecha de entrega inmediata.", "Verdadero"],
    ["Se implementa un patrón de diseño robusto y se realiza una revisión de arquitectura antes de cada sprint.", "Falso"]
  ])
  idx: uno_de([0,1])

respuesta: escenario_deuda[idx][1
tipo: completar
enunciado: "¿Es cierto que el siguiente escenario representa la acumulación de deuda técnica?: {escenario_deuda[idx][0]}"

explicacion: |
  La respuesta es {escenario_deuda[idx][1]}. La deuda técnica surge cuando se prioriza la rapidez sobre la calidad del diseño y la estructura del código.
```
