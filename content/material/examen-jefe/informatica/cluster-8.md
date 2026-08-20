# Examen jefe — Dominio de Procesos y Protocolos

> Logro #178. Completaste el parcial integrando conceptos de ejecución, técnicas y protocolos HTTP. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **118 preguntas totales** en 5/5 secciones.

---

## Sección: proceso-programa-en-ejecucion (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

respuesta: "proceso"
tipo: completar
respuestas_validas: ["proceso"]

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que se encuentra en ejecución en la memoria."

explicacion: |
  Un programa es simplemente un conjunto de instrucciones almacenadas (archivo), mientras que un proceso es la instancia de ese programa en ejecución, con su propio estado, contador de programa y recursos asignados.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["El archivo 'navegador.exe' guardado en el disco", "programa"],
    ["La ventana del navegador abierta y consumiendo RAM", "proceso"]
  ]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["programa", "proceso"]

enunciado: "Identifica la naturaleza del siguiente elemento: {datos[escenario_idx][0]}"

explicacion: |
  {datos[escenario_idx][0]} se clasifica como {datos[escenario_idx][1]} porque la distinción principal radica en si la entidad está estática en almacenamiento o activa en la CPU/Memoria.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso incluye no solo el código del programa, sino también el estado de los registros de la CPU y la memoria asignada?"

explicacion: |
  Verdadero. A diferencia del programa (que es solo código), el proceso es un paquete completo que incluye el contexto de ejecución (registros, pila, contador de programa, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]
tipo: ordenar
opciones_explicitas: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]

enunciado: "Ordena cronológicamente las etapas desde que un usuario hace doble clic en un ejecutable hasta que este finaliza:"

explicacion: |
  El flujo lógico comienza con el archivo estático en el almacenamiento secundario, pasa a la memoria principal (RAM) mediante el cargador, se asigna tiempo de CPU para su ejecución y finalmente se liberan los recursos al terminar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

pasos:
  - "Identificar si las instancias son entidades independientes en ejecución."
  - "Relacionar cada instancia con un proceso distinto."

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado, aunque el código base (el programa) sea el mismo. Por lo tanto, hay 2 procesos (en este ejemplo hipotético de 2 instancias, pero el usuario preguntó por 3, corregimos lógica: el usuario preguntó por 3, la respuesta debe ser 3). 

# Corrigiendo para que la lógica sea coherente con la pregunta:
# Si la pregunta dice "tres instancias", la respuesta debe ser 3.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

respuesta: 3
tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre tres instancias diferentes de un mismo editor de texto (por ejemplo, tres notas distintas), ¿cuántos procesos habrá corriendo en el sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y estado. Por lo tanto, hay 3 procesos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

respuesta: "proceso"
tipo: "mc"
opciones_explicitas: ["archivo_en_disco", "proceso", "instruccion_suelta", "hardware"]

enunciado: "Un programa es una entidad pasiva que reside en el almacenamiento secundario; cuando este programa se carga en la memoria y se inicia su ejecución, se convierte en un ___."

explicacion: |
  Un programa es un conjunto de instrucciones estáticas (un archivo en el disco), mientras que un proceso es la entidad dinámica que representa la ejecución de dichas instrucciones en la memoria RAM y con recursos asignados.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: falso
tipo: "vf"

enunciado: "Si abro dos instancias diferentes del mismo navegador web (por ejemplo, dos ventanas independientes), estoy ejecutando dos procesos distintos que comparten el mismo código de programa original."

explicacion: |
  Es verdadero. El programa (el ejecutable en disco) es el mismo, pero cada ventana es un proceso independiente con su propio espacio de memoria, contador de programa y estado de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["memoria", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["recursos_asignados", "estado_de_ejecucion"], ["memoria_y_registros", "contexto_del_cpu"]]

respuesta: tabla[escenario_idx][1
tipo: "completar"
respuestas_validas: ["recursos_asignados", "estado_de_ejecucion", "memoria_y_registros", "contexto_del_cpu"]

enunciado: "Al pasar de un programa a un proceso, el sistema operativo debe asignar {datos[escenario_idx][0]} para que este pueda operar."

explicacion: |
  Un proceso no es solo el código; requiere recursos como memoria (stack, heap), archivos abiertos y el estado de los registros del procesador para poder ejecutarse.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados_proceso"]

respuesta: ["creado", "listo", "ejecutando", "terminado"]
tipo: "ordenar"
opciones_explicitas: ["creado", "listo", "ejecutando", "terminado"]

enunciado: "Ordena las etapas lógicas por las que pasa un proceso desde que se solicita su creación hasta que finaliza su tarea:"

explicacion: |
  El flujo estándar es: 1. Creado (se solicita), 2. Listo (esperando CPU), 3. Ejecutando (usando CPU), 4. Terminado (finaliza).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["gestion_recursos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["gestionar_recursos", "controlar_ejecucion"], ["gestionar_recursos", "modificar_el_codigo"]]

respuesta: tabla[caso_idx][1
tipo: "mc"
opciones_explicitas: ["gestionar_recursos", "controlar_ejecucion", "modificar_el_codigo", "eliminar_el_archivo"]

enunciado: "Cuando un programa se convierte en proceso, el Sistema Operativo asume la tarea de {datos[caso_idx][0]} para asegurar que el proceso pueda realizar su función sin interferir con otros."

explicacion: |
  El SO actúa como un administrador que asigna tiempo de CPU y memoria (gestiona recursos) y decide cuándo un proceso puede estar en la CPU (controla la ejecución).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistemas_operativos"]

respuesta: "proceso"
tipo: mc
opciones_explicitas: ["archivo", "proceso", "compilador", "kernel"]

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que posee recursos del sistema (CPU, memoria, etc.)."

explicacion: |
  El programa es el código estático (un archivo en el disco), mientras que el proceso es la instancia de ese programa en ejecución, con su propio estado y recursos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["recursos", "memoria"]

respuesta: falso
tipo: vf

enunciado: "Si ejecutas dos veces el mismo archivo 'navegador.exe', tendrás un único proceso con dos ventanas abiertas."

explicacion: |
  Falso. Cada vez que ejecutas un programa, el sistema operativo crea un proceso distinto con su propio espacio de direcciones y recursos, aunque el código de origen sea el mismo.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estructura", "memoria"]

variables:
  escenario: uno_de([[0, "Contador de instrucciones"], [1, "Espacio de direcciones"], [2, "Estado del proceso"]])

respuesta: tabla_respuestas[escenario][1
tipo: completar
respuestas_validas: ["Contador de instrucciones", "Espacio de direcciones", "Estado del proceso"]

tabla_respuestas: [
  ["Contador de instrucciones", "Contador de instrucciones"],
  ["Espacio de direcciones", "Espacio de direcciones"],
  ["Estado del proceso", "Estado del proceso"]
]

enunciado: "Un proceso requiere de un ___ para saber cuál es la próxima instrucción que debe ejecutar la CPU."

explicacion: |
  El Program Counter (PC) o Contador de Instrucciones es un registro que indica la dirección de la próxima instrucción a ejecutar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados", "ciclo_de_vida"]

respuesta: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordena los estados típicos por los que pasa un proceso en un sistema operativo, desde su creación hasta su finalización:"

explicacion: |
  El ciclo de vida estándar implica la creación (Nuevo), la espera en cola (Listo), el uso de CPU (Ejecución), la espera por E/S (Bloqueado) y el cierre (Terminado).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["memoria", "ejecucion"]

variables:
  caso: uno_de([[0, "estático"], [1, "dinámico"]])

respuesta: tabla_respuestas[caso][1
tipo: completar
respuestas_validas: ["estático", "dinámico"]

tabla_respuestas: [
  ["estático", "estático"],
  ["dinámico", "dinámico"]
]

enunciado: "Mientras que el programa se considera un ente ___ almacenado en soporte persistente, el proceso es un ente ___ que reside principalmente en la memoria RAM."

explicacion: |
  El programa es una secuencia de instrucciones en un archivo (estático), mientras que el proceso es la entidad viva que gestiona memoria y registros (dinámico).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_vs_programa"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un archivo estático en el disco", "Una instancia activa en memoria", "Una instrucción de CPU", "Un lenguaje de programación"]

enunciado: "La diferencia fundamental es que un programa es una entidad pasiva almacenada en el disco, mientras que un proceso es..."

respuesta: "Una instancia activa en memoria"

explicacion: |
  Un programa es el conjunto de instrucciones estáticas (el archivo .exe, por ejemplo), mientras que un proceso es la ejecución real de ese programa, con su propio estado, memoria y recursos asignados por el sistema operativo.
```

```
metadata:
  materia: "informatica"
  tema: "estados_del_proceso"
  nivel: "intermedio"
  tags: ["gestion_procesos", "so"]

tipo: vf

enunciado: "¿Es correcto afirmar que un programa puede estar en estado 'listo' (ready) o 'bloqueado' (blocked)?"

respuesta: falso

explicacion: |
  Los estados (listo, bloqueado, ejecución, etc.) son atributos de un PROCESO, no de un programa. Un programa es solo el código en disco y no tiene estados de ejecución hasta que el sistema operativo crea un proceso a partir de él.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_proceso"
  nivel: "avanzado"
  tags: ["memoria", "so"]

variables:
  datos: [["Contador de instrucciones", "Contexto de CPU"], ["Contenido de memoria", "Estado de E/S"], ["Código fuente", "Archivo ejecutable"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Contador de instrucciones", "Contenido de memoria", "Código fuente"]

enunciado: "Un proceso contiene información dinámica que un programa no posee, como por ejemplo el {datos[idx][0]}."

respuesta: datos[idx][0

explicacion: |
  Mientras que el programa contiene el código, el proceso contiene el contexto de ejecución: el contador de programa (PC), los registros de la CPU, la pila (stack) y el estado de los recursos de entrada/salida.
```

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_vida"
  nivel: "intermedio"
  tags: ["planificacion", "so"]

tipo: ordenar
opciones_explicitas: ["Creación", "Listo", "Ejecución", "Terminación"]

enunciado: "Ordene correctamente las etapas típicas por las que pasa un proceso desde que se carga hasta que finaliza su tarea:"

respuesta: ["Creación", "Listo", "Ejecución", "Terminación"]

explicacion: |
  El ciclo de vida estándar implica: 1. Creación (el SO asigna recursos), 2. Listo (esperando CPU), 3. Ejecución (usando la CPU) y 4. Terminación (liberación de recursos).
```

```
metadata:
  materia: "informatica"
  tema: "identificacion_procesos"
  nivel: "basico"
  tags: ["pid", "so"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un usuario abre dos veces el mismo navegador (ej. Chrome), el sistema operativo crea dos procesos distintos. ¿Cómo se denomina el identificador único numérico que el SO asigna a cada uno de estos procesos para distinguirlos?"

respuesta: 1024

explicacion: |
  Aunque el código sea el mismo, cada instancia en ejecución es un proceso distinto y posee un identificador único llamado PID (Process Identifier). Para este ejercicio, se asume que el usuario debe ingresar un valor numérico representativo (en este caso, el ejemplo es el número 1024).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

variables:
  datos: [["El archivo 'editor.exe' está guardado en el disco duro", "falso"], ["El proceso 'editor.exe' está usando 500MB de RAM", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Analice el siguiente escenario: {datos[idx][0]}. ¿Es esto una descripción de un proceso en ejecución?"

explicacion: |
  Un programa es una entidad pasiva (un archivo en disco), mientras que un proceso es una entidad activa (un programa en ejecución con recursos asignados como RAM y CPU).
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: "proceso"
tipo: completar
respuestas_validas: ["proceso"]

enunciado: "Un programa es una secuencia de instrucciones almacenadas en un medio no volátil, mientras que un ___ es la instancia de esa secuencia siendo ejecutada por la CPU."

explicacion: |
  La diferencia clave es el estado de actividad: el programa es el código estático y el proceso es la ejecución dinámica.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["recursos", "gestion_memoria"]

variables:
  datos: [["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]

enunciado: "Considere el siguiente caso: {datos[idx][0]}. ¿Cuál de las opciones describe correctamente los recursos que se gestionan en ese escenario?"

explicacion: |
  Un proceso necesita recursos volátiles y de procesamiento (RAM, CPU, registros) para poder operar.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ordenar"]

respuesta: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]
tipo: ordenar
opciones_explicitas: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]

enunciado: "Ordene los pasos lógicos que ocurren desde que un usuario hace doble clic en un ejecutable hasta que el proceso finaliza:"

explicacion: |
  El sistema operativo primero carga el código del disco a la RAM, asigna memoria y recursos, la CPU ejecuta las instrucciones y, finalmente, el proceso se cierra liberando los recursos.
```

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["instancias", "pids"]

variables:
  datos: [["Se abren dos ventanas independientes del navegador Chrome", "Dos procesos distintos"], ["Se abre un solo archivo de texto", "Un solo proceso"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Dos procesos distintos", "Un solo proceso"]

enunciado: "Analice el escenario: {datos[idx][0]}. ¿Qué sucede a nivel de sistema operativo?"

explicacion: |
  Cada vez que se inicia una instancia de un programa, el sistema operativo crea un proceso nuevo con su propio espacio de memoria y un PID (Process Identifier) único, incluso si el código fuente es el mismo.
```

## Sección: procesos-tecnicos-artesanales-e-industriales (22 preguntas)

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "un conjunto de pasos organizados para transformar materias primas en algo útil"
tipo: mc
opciones_explicitas: ["un conjunto de pasos organizados para transformar materias primas en algo útil", "sólo el resultado final de una fábrica", "un tipo de máquina específica"]

enunciado: "Un proceso técnico es, en esencia..."

explicacion: |
  Tanto el proceso artesanal como el industrial son formas organizadas
  de transformar materias primas en algo útil, aunque de maneras
  distintas.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["proceso artesanal"]

variables:
  n: uno_de([1, 1])

respuesta: "la habilidad manual y el conocimiento del oficio"
tipo: mc
opciones_explicitas: ["la habilidad manual y el conocimiento del oficio", "la velocidad de una máquina automatizada", "la estandarización de protocolos"]

enunciado: "En el proceso artesanal, el motor principal de la producción es..."

explicacion: |
  La intervención directa y constante del trabajador, con su habilidad
  y conocimiento específico, es lo que define al proceso artesanal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["limite artesanal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso artesanal tiene como límite natural el tiempo humano, ya que cada pieza requiere trabajo manual delicado."

explicacion: |
  No es posible producir miles de unidades idénticas en un día si cada
  una necesita horas de trabajo manual individual.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["proceso industrial"]

variables:
  n: uno_de([1, 1])

respuesta: "eficiencia, estandarización y producción en masa"
tipo: mc
opciones_explicitas: ["eficiencia, estandarización y producción en masa", "personalización única de cada pieza", "dependencia exclusiva del trabajo manual"]

enunciado: "El proceso industrial prioriza..."

explicacion: |
  Usa maquinaria y algoritmos para repetir operaciones con precisión y
  velocidad, reduciendo el costo unitario a costa de la unicidad.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["estandarizacion digital"]

variables:
  elemento: uno_de(["protocolos", "formatos de archivo", "lenguajes de programación universales"])

respuesta: verdadero
tipo: vf

enunciado: "En el mundo digital, la estandarización se manifiesta en \"{elemento}\", permitiendo que un archivo creado en una ciudad se abra en otra sin problemas."

explicacion: |
  Así como antes las piezas mecánicas eran intercambiables, hoy los
  protocolos y formatos digitales cumplen esa misma función de
  compatibilidad universal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: "el correo electrónico"
tipo: mc
opciones_explicitas: ["redactar mil cartas a mano", "el correo electrónico", "ninguno de los dos métodos"]

enunciado: "Para enviar un mensaje a mil personas de forma eficiente (lógica industrial), conviene usar..."

explicacion: |
  Redactar mil cartas a mano sería el enfoque artesanal, mucho menos
  eficiente para esa escala; el correo electrónico es la solución
  industrial/escalable.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["desafios"]

variables:
  n: uno_de([1, 1])

respuesta: "la pérdida de la \"huella humana\" y la dependencia de sistemas rígidos"
tipo: mc
opciones_explicitas: ["la pérdida de la \"huella humana\" y la dependencia de sistemas rígidos", "el aumento del costo unitario de producción", "la imposibilidad de automatizar tareas"]

enunciado: "La industrialización extrema de la informática (automatización con scripts y algoritmos) plantea como desafío..."

explicacion: |
  Democratiza el acceso a la información, pero también implica perder
  unicidad y depender de sistemas que fallan si no se entienden sus
  reglas internas.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal"
tipo: mc
opciones_explicitas: ["artesanal", "industrial"]

enunciado: "La panadería tradicional donde el panadero amasa cada pieza a mano, ajustando el agua según la humedad del día, es un ejemplo de proceso..."

explicacion: |
  Es flexible, depende del experto y tiene variaciones naturales en cada
  producto: características típicas del proceso artesanal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["ejemplo argentino"]

variables:
  n: uno_de([1, 1])

respuesta: "industrial"
tipo: mc
opciones_explicitas: ["artesanal", "industrial"]

enunciado: "La fábrica de galletitas donde robots y cintas transportadoras aseguran que cada galletita pese exactamente lo mismo es un ejemplo de proceso..."

explicacion: |
  La estandarización extrema (mismo peso y sabor en millones de
  unidades) es característica del proceso industrial.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo informatico"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal/prototipo"
tipo: mc
opciones_explicitas: ["artesanal/prototipo", "industrial", "ninguno de los dos"]

enunciado: "Escribir código personalizado para resolver un problema específico de una empresa es, en la lógica de esta teoría, un proceso..."

explicacion: |
  Es único y adaptable a esa empresa en particular, a diferencia de un
  sistema estandarizado y masivo.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["ejemplo informatico"]

variables:
  n: uno_de([1, 1])

respuesta: "rígido, estandarizado y obligatorio para millones de usuarios"
tipo: mc
opciones_explicitas: ["rígido, estandarizado y obligatorio para millones de usuarios", "único y personalizable para cada empresa", "opcional y sin ninguna regla fija"]

enunciado: "El sistema de facturación electrónica que exige la AFIP es, según la teoría, un ejemplo de software..."

explicacion: |
  Es un sistema de software masivo: rígido, estandarizado y obligatorio,
  a diferencia de una solución artesanal/personalizada.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["medios tecnicos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Tanto el proceso artesanal como el industrial son considerados \"medios técnicos\" que extienden las capacidades humanas."

explicacion: |
  Ambos son formas de extender lo que el ser humano puede producir, sólo
  que gestionan tiempo, calidad y escala de manera diferente.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["diferencia clave"]

variables:
  n: uno_de([1, 1])

respuesta: "en cómo se gestiona el tiempo, la calidad y la escala de producción"
tipo: mc
opciones_explicitas: ["en el resultado final obtenido", "en cómo se gestiona el tiempo, la calidad y la escala de producción", "en el país donde se fabrica el producto"]

enunciado: "Según la teoría, la diferencia clave entre proceso artesanal e industrial no está en el resultado final, sino..."

explicacion: |
  Ambos pueden llegar a un producto similar; lo que cambia es la forma
  de gestionar tiempo, calidad y escala durante la producción.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["personalizacion vs escala"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El proceso industrial permite el mismo grado de personalización pieza por pieza que el proceso artesanal."

explicacion: |
  El proceso industrial gana en escala y costo unitario, pero sacrifica
  la unicidad y personalización propia de lo artesanal.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["estandarizacion pre-digital"]

variables:
  n: uno_de([1, 1])

respuesta: "las piezas mecánicas eran intercambiables"
tipo: mc
opciones_explicitas: ["las piezas mecánicas eran intercambiables", "cada máquina tenía piezas únicas", "no existía ningún tipo de estándar"]

enunciado: "En la era pre-digital, la estandarización industrial significaba principalmente que..."

explicacion: |
  La intercambiabilidad de piezas mecánicas fue la base de la
  estandarización industrial antes de la era digital.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["decision"]

variables:
  n: uno_de([1, 1])

respuesta: "equilibrar eficiencia con calidad y adaptabilidad"
tipo: mc
opciones_explicitas: ["equilibrar eficiencia con calidad y adaptabilidad", "elegir siempre el proceso industrial sin excepción", "elegir siempre el proceso artesanal sin excepción"]

enunciado: "Comprender la dualidad artesanal/industrial ayuda, según la teoría, a..."

explicacion: |
  No se trata de que uno sea siempre mejor: la clave es decidir cuándo
  personalizar y cuándo adoptar un estándar industrial, equilibrando
  eficiencia, calidad y adaptabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["costo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El proceso industrial reduce el costo unitario de producción respecto al proceso artesanal."

explicacion: |
  Al producir en masa con maquinaria y algoritmos, el costo por unidad
  baja, aunque se pierda la unicidad de cada objeto.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["automatizacion"]

variables:
  n: uno_de([1, 1])

respuesta: "scripts y algoritmos"
tipo: completar

enunciado: "En informática, lo que antes era un trabajo intelectual único hoy se automatiza mediante ___."

respuestas_validas:
  - "scripts y algoritmos"
  - "algoritmos y scripts"

explicacion: |
  Esta automatización democratiza el acceso a la información, pero
  también plantea el desafío de la pérdida de "huella humana" en la
  creación de contenido.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["software y hardware"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En informática, el software y el hardware siguen lógicas similares a la distinción entre proceso artesanal e industrial."

explicacion: |
  Un código personalizado (artesanal) y un sistema masivo estandarizado
  (industrial) reflejan la misma dualidad vista en la producción física.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "basico"
  tags: ["escalabilidad"]

variables:
  n: uno_de([1, 1])

respuesta: "su capacidad de escalar"
tipo: mc
opciones_explicitas: ["su capacidad de escalar", "su bajo nivel de estandarización", "su dependencia exclusiva del trabajo manual"]

enunciado: "La principal ventaja del modelo industrial, según la teoría, es..."

explicacion: |
  Puede repetir operaciones con precisión y velocidad para producir a
  gran escala, algo que el proceso artesanal no logra por su límite de
  tiempo humano.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "avanzado"
  tags: ["democratizacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La automatización informática democratiza el acceso a la información, pero también plantea desafíos sobre la pérdida de la \"huella humana\" en la creación de contenido."

explicacion: |
  Es una tensión real señalada en la teoría: más acceso y eficiencia,
  pero menos marca personal en lo producido.
```

```
metadata:
  materia: "informatica"
  tema: "procesos_tecnicos_artesanales_e_industriales"
  nivel: "intermedio"
  tags: ["conceptos clave"]

variables:
  n: uno_de([1, 1])

respuesta: "artesanal e industrial"
tipo: mc
opciones_explicitas: ["artesanal e industrial", "digital y analógico", "público y privado"]

enunciado: "Las dos formas fundamentales de producir objetos o servicios que compara la teoría son el proceso..."

explicacion: |
  Artesanal e industrial son los dos "medios técnicos" cuya diferencia
  central se explica en toda la teoría.
```

## Sección: protocolo-http-peticion-respuesta (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "redes", "web"]

tipo: vf

enunciado: "En el modelo de comunicación de la web, el dispositivo que inicia una comunicación solicitando un recurso (como una página HTML) se denomina cliente."

respuesta: verdadero
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "peticion", "metodo"]

tipo: mc

opciones_explicitas: ["URL", "Método HTTP", "Código de estado", "Cuerpo de la respuesta"]

enunciado: "En una petición HTTP, el verbo que indica la acción a realizar (como GET o POST) se conoce como:"

respuesta: "Método HTTP"

explicacion: |
  El método HTTP (GET, POST, PUT, DELETE, etc.) define la naturaleza de la operación que el cliente desea realizar sobre el recurso.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "secuencia"]

tipo: ordenar

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

enunciado: "Ordena los pasos que describen el flujo básico de una interacción HTTP:"

respuesta: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

explicacion: |
  La comunicación HTTP es un protocolo de tipo petición-respuesta: el cliente siempre debe iniciar la comunicación para que el servidor pueda responder.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["404", "No encontrado"],
    ["200", "OK"]
  ]

tipo: completar

respuestas_validas: ["404", "200"]

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado HTTP de tipo ___."

respuesta: escenarios[escenario_idx][0

explicacion: |
  El código 404 indica que el servidor no pudo encontrar el recurso solicitado. El código 200 indica que la petición fue exitosa.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "cabeceras"]

tipo: mc

opciones_explicitas: ["Cabeceras (Headers)", "Cuerpo (Body)", "Línea de estado", "Todas las anteriores"]

enunciado: "Una respuesta HTTP estándar está compuesta por varias partes. ¿Cuál de las siguientes opciones describe los elementos que contienen metadatos sobre el contenido (como el tipo de archivo o la fecha)?"

respuesta: "Cabeceras (Headers)"

explicacion: |
  Las cabeceras (Headers) contienen información adicional sobre la respuesta, mientras que el cuerpo (Body) contiene el recurso solicitado propiamente dicho.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "web", "cliente_servidor"]

respuesta: "GET"
tipo: completar
respuestas_validas: ["GET"]

enunciado: "Cuando un usuario escribe una URL en su navegador y presiona Enter, el navegador actúa como cliente y envía una petición de tipo ___ al servidor para solicitar el recurso."

explicacion: |
  En el protocolo HTTP, el método GET se utiliza para solicitar y recibir una representación de un recurso (como un archivo HTML) del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["200 OK", "El recurso se encontró y se envió correctamente."],
    ["404 Not Found", "El servidor no pudo encontrar el recurso solicitado."]
  ]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"]

enunciado: "Si el servidor responde con el código de estado {datos[idx][1]}, ¿cuál es el mensaje de estado que acompaña a la respuesta?"

explicacion: |
  El código de estado indica el resultado de la petición. El código 200 indica éxito, mientras que el 404 indica que la URL no existe en el servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "estado"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es un protocolo 'stateful', lo que significa que el servidor recuerda automáticamente quién es el cliente entre una petición y otra sin ayuda de cookies o tokens."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente; para mantener el estado (como un carrito de compras), se usan mecanismos adicionales como Cookies o sesiones.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "flujo"]

respuesta: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que un usuario hace clic en un enlace hasta que ve la página en su pantalla:"

explicacion: |
  El flujo comienza con el cliente enviando la petición, el servidor la procesa, envía la respuesta y finalmente el navegador interpreta (renderiza) el contenido.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "error_server"]

respuesta: 500
tipo: completar
tolerancia_abs: 0

enunciado: "Si un servidor web experimenta un error inesperado en su código interno (por ejemplo, un error de sintaxis en un script de backend) al intentar procesar una petición, el servidor responderá con un código de estado de la familia 5xx. ¿Cuál es el código específico para 'Internal Server Error'?"

pasos:
  - "Identificar la familia de errores (4xx para cliente, 5xx para servidor)."
  - "Localizar el código estándar para errores genéricos del servidor."

explicacion: |
  El código 500 indica que el servidor encontró una condición inesperada que le impidió completar la petición, generalmente debido a un error en el software del lado del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor"]

respuesta: "cliente"
tipo: completar
respuestas_validas: ["cliente"]

enunciado: "En el modelo de comunicación HTTP, el dispositivo o software que inicia una comunicación solicitando un recurso es el ___."

explicacion: |
  El modelo cliente-servidor se basa en que el cliente inicia la interacción mediante una petición (request), y el servidor espera estas peticiones para responder (response).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estado", "stateless"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es considerado un protocolo 'stateful' (con estado), lo que significa que el servidor recuerda automáticamente todas las peticiones anteriores de un mismo cliente."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente y el servidor no guarda información de sesiones previas por defecto, por eso se usan cookies o tokens para mantener el estado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estructura_respuesta", "status_code"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["404", "Not Found"],
    ["200", "OK"]
  ]

respuesta: escenarios[escenario_idx][0
tipo: mc
opciones_explicitas: ["404", "200", "500", "301"]

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado de la serie 4xx. En este caso específico, el código será ___."

explicacion: |
  Los códigos de la serie 4xx indican errores del cliente (Client Error), como el 404 cuando el recurso no se encuentra.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo_comunicacion"]

respuesta: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos de una interacción estándar de HTTP:"

explicacion: |
  Primero el cliente envía la petición, luego el servidor la procesa y finalmente envía la respuesta con el contenido solicitado.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos_http", "verbos"]

respuesta: "GET"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "Si un cliente desea simplemente recuperar (leer) la información de un recurso sin modificar nada en el servidor, el método HTTP más apropiado es ___."

explicacion: |
  El método GET se utiliza para solicitar la representación de un recurso específico, mientras que POST, PUT y DELETE se utilizan para crear, actualizar o eliminar datos.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["redes", "protocolos", "modelo_cliente_servidor"]

respuesta: "capa_aplicacion"
tipo: completar
respuestas_validas: ["capa_aplicacion", "capa_aplicacion"]

enunciado: "Mientras que TCP opera en la capa de transporte para garantizar la entrega de datos, el protocolo HTTP opera en la ___."

explicacion: |
  HTTP es un protocolo de la capa de aplicación que define cómo se estructuran los mensajes, mientras que TCP se encarga de la conexión y fiabilidad del transporte de esos mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["protocolos", "web"]

variables:
  es_statica: uno_de([verdadero, falso])

respuesta: es_statica
tipo: completar
enunciado: "A diferencia de FTP, que está diseñado principalmente para la transferencia de archivos, HTTP es un protocolo orientado a la transferencia de hipermedios (páginas web, imágenes, etc.). ¿Es correcto afirmar que HTTP es un protocolo sin estado (stateless) por diseño?"

explicacion: |
  HTTP es stateless porque cada petición es independiente; el servidor no guarda memoria de peticiones anteriores por defecto (para eso se usan cookies o sesiones).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

respuesta: "POST"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "En el modelo petición-respuesta, ¿qué método se distingue por enviar los datos del cuerpo en el cuerpo del mensaje y no en la URL, siendo ideal para enviar información sensible?"

explicacion: |
  El método GET envía los parámetros en la URL (query string), lo que los hace visibles en el historial y logs. El método POST envía la información en el cuerpo (body) de la petición.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo", "modelo_cliente_servidor"]

respuesta: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos que ocurren en un ciclo estándar de comunicación HTTP:"

explicacion: |
  El cliente inicia la comunicación con una petición (Request), el servidor procesa dicha petición y finalmente devuelve una respuesta (Response) al cliente.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["codigos_estado", "http"]

respuesta: "Error del cliente"
tipo: mc
opciones_explicitas: ["Éxito del servidor", "Redirección", "Error del cliente", "Error del servidor"]

enunciado: "Un código de estado HTTP de la serie 400 (como el 404) se distingue de un código de la serie 500 porque el primero indica un ___."

explicacion: |
  Los códigos 4xx indican que el problema reside en la petición del cliente (ej. recurso no encontrado), mientras que los 5xx indican que el servidor falló al procesar una petición válida.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor", "web"]

variables:
  datos: [["El navegador solicita la página principal de un sitio", "GET"], ["El navegador envía un formulario de registro", "POST"], ["El navegador solicita un archivo de estilo CSS", "GET"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el modelo cliente-servidor, cuando {datos[idx][0]}, el método HTTP utilizado es ___."

respuestas_validas: ["GET", "POST", "PUT", "DELETE"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El método HTTP indica la acción que el cliente desea realizar. 'GET' se usa para solicitar datos y 'POST' para enviar datos al servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code", "headers"]

variables:
  datos: [["404", "Not Found"], ["200", "OK"], ["500", "Internal Server Error"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el servidor responde con el código de estado {datos[idx][0]}, el significado de la respuesta es ___."

opciones_explicitas: ["Not Found", "OK", "Internal Server Error", "Bad Request"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los códigos de estado HTTP informan sobre el resultado de la petición: 2xx son éxitos, 4xx errores del cliente y 5xx errores del servidor.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["conceptos", "modelo_cliente_servidor"]

enunciado: "En el protocolo HTTP, el servidor es el encargado de iniciar la comunicación enviando una petición al cliente para que este pueda mostrar contenido."

respuesta: falso
tipo: vf

explicacion: |
  Es falso. En el modelo petición-respuesta de HTTP, el cliente (como un navegador) siempre inicia la comunicación mediante una petición, y el servidor responde a dicha petición.
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["flujo", "protocolo"]

enunciado: "Ordena los pasos que ocurren durante una navegación web estándar:"

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
respuesta: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
tipo: ordenar

explicacion: |
  El flujo lógico es: Petición (Cliente) -> Procesamiento (Servidor) -> Respuesta (Servidor) -> Renderizado (Cliente).
```

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

variables:
  datos: [["actualizar un recurso existente", "PUT"], ["eliminar un recurso", "DELETE"], ["enviar datos para crear un nuevo usuario", "POST"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo de la operación es ___, el método HTTP más adecuado es ___."

opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada método tiene una semántica definida: GET para lectura, POST para creación, PUT para actualización y DELETE para eliminación.
```

## Sección: pruebas-unitarias-integracion (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["testing", "unitario"]

respuesta: "unitario"
tipo: completar
respuestas_validas: ["unitario", "unitarias"]

enunciado: "Una prueba ___ se enfoca en verificar el funcionamiento de la unidad más pequeña y aislada de código, como una función o un método, sin dependencias externas."

explicacion: |
  Las pruebas unitarias validan la lógica interna de un componente de forma aislada, asegurando que cada pieza cumpla su contrato individualmente.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["conceptos", "integracion"]

opciones_explicitas: ["Verificar la comunicación entre módulos", "Verificar la sintaxis del lenguaje", "Verificar el rendimiento del hardware"]
respuesta: "Verificar la comunicación entre módulos"
tipo: mc

enunciado: "El objetivo principal de las pruebas de integración es:"

explicacion: |
  Mientras que las pruebas unitarias miran el componente solo, las de integración buscan detectar errores en la interacción y el flujo de datos entre diferentes módulos.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "En una prueba de integración, el objetivo principal es aislar completamente un componente de sus dependencias para probar su lógica interna."

explicacion: |
  Falso. El aislamiento es la característica de las pruebas unitarias. Las pruebas de integración, por el contrario, requieren que los componentes estén conectados para verificar su interacción.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las etapas de testing de software desde el nivel más granular (más pequeño) hasta el nivel de sistema completo:"

explicacion: |
  El flujo estándar de desarrollo sigue una jerarquía: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla el requisito (Sistema).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "intermedio"
  tags: ["diagnostico"]

variables:
  idx: uno_de([0, 1])
  escenarios: [
    ["La función 'sumar(a, b)' devuelve un error de sintaxis", "unitario"],
    ["El módulo de 'Pagos' no logra recibir los datos del módulo de 'Carrito'", "integracion"]
  ]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["unitario", "integracion"]

enunciado: "Si una función matemática falla al calcular un resultado, pero el resto del sistema funciona bien, estamos ante un error de tipo: {escenarios[idx][0]}"

explicacion: |
  Como el fallo está contenido en la lógica interna de una pieza aislada, el error se identifica mediante pruebas unitarias.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Se verifica que la función 'sumar(a, b)' devuelva correctamente el resultado de la suma de dos enteros.", "unitarias"],
    ["Se verifica que el módulo de 'pagos' se comunique correctamente con la 'base de datos' para registrar una transacción.", "integracion"]
  ]

enunciado: "Si el objetivo es verificar {escenarios[escenario_idx][0]}, estamos realizando pruebas de tipo: ___"

respuesta: escenarios[escenario_idx][1
tipo: completar
respuestas_validas: ["unitarias", "integracion"]

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una función o componente de forma aislada. Las pruebas de integración verifican la interacción entre diferentes módulos o componentes del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "En una prueba de integración, el objetivo principal es asegurar que una función individual funcione correctamente de forma aislada, sin importar si sus dependencias responden bien."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El objetivo de las pruebas de integración es precisamente verificar cómo interactúan los componentes entre sí, por lo que el foco no es el aislamiento, sino la comunicación y el flujo de datos entre ellos.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

enunciado: "Ordena las etapas típicas de un ciclo de desarrollo de software orientado a calidad (Testing Pyramid):"

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza con las pruebas más granulares y rápidas (Unitarias), luego se combinan componentes (Integración) y finalmente se prueba el sistema completo en un entorno similar al real (Sistema/E2E).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["casos_practicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El sistema debe validar que el módulo de 'Login' envíe las credenciales correctamente al servicio de 'Autenticación'.", "integracion"],
    ["El sistema debe validar que el método 'calcular_iva(monto)' devuelva el 21% del monto ingresado.", "unitarias"]
  ]

enunciado: "Analiza el siguiente caso: '{casos[caso_idx][0]}'. ¿Qué tipo de prueba es?"

opciones_explicitas: ["unitarias", "integracion"]
respuesta: casos[caso_idx][1
tipo: mc

explicacion: |
  Si el caso implica la interacción entre dos entidades distintas (Login -> Servicio), es de integración. Si solo valida la lógica de un método matemático o de cálculo simple, es unitaria.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["debug"]

variables:
  error_idx: uno_de([0, 1])
  errores: [
    ["Si una prueba de integración falla, el error puede estar en la lógica de un módulo o en la comunicación entre ellos.", "integracion"],
    ["Si una prueba unitaria falla, el error está garantizado en la lógica interna de la función probada.", "unitaria"]
  ]

enunciado: "En el contexto de pruebas de ___, un fallo puede indicar un problema en la interfaz entre dos componentes, no necesariamente en la lógica interna de cada uno.", "completar"

respuestas_validas: ["unitarias", "integracion"]
respuesta: "integracion"
tipo: completar

explicacion: |
  Las pruebas de integración son cruciales para detectar errores de contrato, protocolos de comunicación o formatos de datos incorrectos que las pruebas unitarias (por su naturaleza aislada) no pueden detectar.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "unitarias"]

respuesta: "unitarias"
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion", "de_sistema", "de_aceptacion"]

enunciado: "Cuando un desarrollador se enfoca exclusivamente en verificar que una única función o método funcione correctamente de forma aislada, está realizando pruebas ___."

explicacion: |
  Las pruebas unitarias se centran en la unidad mínima de software (una función, un método o una clase) de forma aislada de sus dependencias.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "integracion"]

respuesta: falso
tipo: vf

enunciado: "El objetivo principal de las pruebas de integración es verificar que cada componente individual funcione correctamente según su especificación técnica."

explicacion: |
  Falso. El objetivo de las pruebas de integración es verificar que los componentes, una vez probados individualmente, funcionen correctamente al interactuar entre sí.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "errores_comunes"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La función A llama a la función B y el error ocurre por un valor de retorno inesperado de B", "de_integracion"],
    ["La función A tiene un error de lógica en su cálculo interno", "unitarias"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion"]

enunciado: "Si una prueba falla porque la interacción entre dos módulos es incorrecta, pero cada módulo funciona bien por separado, estamos ante un error de tipo: {escenarios[escenario_idx][0]}."

explicacion: |
  En este caso, el problema no reside en la lógica interna de los módulos (unitario), sino en el contrato o la comunicación entre ellos (integración).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "flujo_de_trabajo"]

respuesta: ["Unitarias", "Integración", "Sistema"]
tipo: ordenar
opciones_explicitas: ["Unitarias", "Integración", "Sistema"]

enunciado: "Ordena las etapas típicas de una estrategia de testing ascendente (Bottom-Up), desde lo más pequeño a lo más complejo."

explicacion: |
  El flujo lógico estándar comienza validando las piezas individuales (unitarias), luego cómo se conectan (integración) y finalmente el sistema completo.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "mocks"]

respuesta: "unitarias"
tipo: completar
respuestas_validas: ["unitarias"]

enunciado: "Para aislar una pieza de código y evitar que dependencias externas (como una base de datos) afecten el resultado, se utilizan objetos simulados (Mocks/Stubs). Este enfoque es característico de las pruebas ___."

explicacion: |
  El uso de Mocks es fundamental en las pruebas unitarias para garantizar que el test solo evalúe la lógica de la unidad y no el comportamiento de sus dependencias.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

tipo: mc
opciones_explicitas: ["El objetivo de la prueba unitaria es verificar la interacción entre múltiples módulos.", "La prueba unitaria se enfoca en la lógica interna de un componente aislado.", "La prueba de integración busca validar la interfaz de usuario.", "Ambas pruebas tienen exactamente el mismo alcance y objetivo."]

respuesta: "La prueba unitaria se enfoca en la lógica interna de un componente aislado."

enunciado: "En el ciclo de vida de pruebas, ¿cuál es la principal distinción de una prueba unitaria respecto a una de integración?"

explicacion: |
  Las pruebas unitarias validan la unidad mínima de software (como una función o método) de forma aislada, mientras que las de integración verifican que los componentes funcionen correctamente al unirse.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

tipo: vf

enunciado: "En una prueba unitaria, si el componente que estamos probando depende de una base de datos, se debe utilizar un objeto simulado (mock) para mantener el aislamiento del componente."

respuesta: verdadero

explicacion: |
  Es correcto. Para que una prueba sea puramente unitaria, no debe depender de sistemas externos (DB, APIs, archivos); se utilizan mocks o stubs para simular esos comportamientos.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["error_logica", "error_interfaz"],
    ["error_calculo", "error_comunicacion"]
  ]

respuesta: tabla[escenario_idx][1
tipo: completar
respuestas_validas: ["error_logica", "error_interfaz", "error_calculo", "error_comunicacion"]

enunciado: "Si una función calcula mal un impuesto debido a un error en su algoritmo interno, el tipo de error detectado es un ___; pero si la función envía el dato correcto pero el receptor no sabe interpretarlo, el problema es un ___."

pasos:
  - "Identificar si el error es interno (lógica) o de interacción (interfaz)."
  - "Relacionar el tipo de error con el nivel de prueba correspondiente."

explicacion: |
  Los errores de lógica interna se detectan en pruebas unitarias, mientras que los errores de comunicación entre módulos se detectan en pruebas de integración.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

enunciado: "Ordene los siguientes niveles de prueba según el orden lógico de ejecución en un proceso de desarrollo estándar (de lo más pequeño a lo más completo):"

explicacion: |
  El desarrollo sigue una pirámide: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla su propósito (Sistema).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "complejidad"]

tipo: mc
opciones_explicitas: ["Las pruebas unitarias son generalmente más complejas de configurar que las de integración.", "Las pruebas de integración suelen ser más rápidas de ejecutar que las unitarias.", "Las pruebas unitarias son más fáciles de aislar que las de integración.", "Las pruebas de integración no requieren de código de prueba."]

respuesta: "Las pruebas unitarias son más fáciles de aislar que las de integración."

enunciado: "Al comparar la dificultad de preparación (setup) y aislamiento, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  Las pruebas unitarias son fáciles de aislar porque solo requieren el componente y sus mocks. Las de integración son más complejas porque requieren configurar múltiples módulos, bases de datos o servicios reales para que interactúen.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario: uno_de([
    ["Se está probando si la función 'calcular_iva(monto)' devuelve el valor correcto para un número dado, sin considerar la base de datos.", "unitaria"],
    ["Se está probando si el módulo de 'pagos' logra comunicarse correctamente con la 'pasarela_de_pagos' externa.", "integracion"],
    ["Se está probando si un solo método de una clase procesa correctamente un string de entrada.", "unitaria"],
    ["Se está probando si la interacción entre el módulo de 'inventario' y el de 'ventas' actualiza el stock tras una compra.", "integracion"]
  ])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["unitaria", "integracion"]

enunciado: "Dado el siguiente escenario: {escenario[idx][0]}. ¿Qué tipo de prueba se está ejecutando?"

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una pieza mínima de código (función, método) de forma aislada. Las pruebas de integración verifican que la interacción entre diferentes módulos o componentes funcione correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

variables:
  afirmacion: uno_de([
    [true, "Verdadero"],
    [false, "Falso"]
  ])

respuesta: afirmacion[idx][0
tipo: completar
enunciado: "Las pruebas de integración tienen como objetivo principal verificar que cada función individual cumpla con su contrato de entrada y salida, de forma aislada de otros módulos."

explicacion: |
  Falso. Eso es la definición de pruebas unitarias. Las de integración buscan detectar fallos en las interfaces y la comunicación entre componentes ya probados.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_datos"]

respuestas_validas: ["flujo", "interacción", "comunicación"]
respuesta: "interacción"
tipo: completar

enunciado: "Mientras que las pruebas unitarias validan la lógica de un componente aislado, las pruebas de ___________ validan que los componentes funcionen correctamente cuando se combinan."

explicacion: |
  La integración se centra en la interacción entre módulos para asegurar que el flujo de datos y el control entre ellos sea el esperado.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "metodologia"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las fases de testing de menor a mayor alcance (de lo más pequeño a lo más complejo):"

explicacion: |
  El proceso estándar comienza con la validación de la unidad mínima (Unitarias), luego se unen las piezas (Integración) y finalmente se prueba el sistema completo (Sistema/E2E).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "debug"]

variables:
  caso: uno_de([
    ["El módulo A envía un objeto JSON, pero el módulo B espera un XML.", "error_integracion"],
    ["La función 'sumar(a, b)' devuelve un resultado incorrecto debido a un error de redondeo.", "error_unitario"],
    ["Un método de validación de email no acepta caracteres especiales.", "error_unitario"],
    ["El módulo de base de datos no responde ante una consulta de un módulo de reporte.", "error_integracion"]
  ])

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["error_unitario", "error_integracion"]

enunciado: "Se detecta el siguiente problema: {caso[idx][0]}. ¿A qué categoría de error pertenece principalmente?"

explicacion: |
  Si el error reside en la lógica interna de una función, es unitario. Si el error surge por la incompatibilidad de formatos o la falta de comunicación entre dos componentes que por separado funcionan bien, es un error de integración.
```

## Sección: que-es-la-tecnica-y-la-tecnologia (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["caracteristicas", "tecnica"]

respuesta: verdadero
tipo: vf

enunciado: "La técnica se describe como un conjunto de procedimientos, métodos o habilidades específicas."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["caracteristicas", "tecnologia"]

respuesta: verdadero
tipo: vf

enunciado: "La tecnología es solo la herramienta física en sí misma, sin considerar el conocimiento detrás de ella."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["critica", "neutralidad"]

respuesta: falso
tipo: vf

enunciado: "La tecnología es neutral y está libre de sesgos culturales o objetivos de diseño."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["componentes", "informatica"]

respuesta: verdadero
tipo: vf

enunciado: "En informática, la tecnología incluye hardware, software y protocolos de comunicación."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["variabilidad", "tecnica"]

respuesta: verdadero
tipo: vf

enunciado: "Las técnicas pueden variar según el contexto o la herramienta disponible."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["interdependencia", "historia"]

respuesta: verdadero
tipo: vf

enunciado: "Las nuevas técnicas surgen como respuesta a las limitaciones de la tecnología existente."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["ciclo", "computacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el campo de la computación, el ciclo entre técnica y tecnología es acelerado."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["analisis", "critica"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la diferencia entre técnica y tecnología ayuda a analizar críticamente el mundo digital."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["definicion", "marco"]

respuesta: verdadero
tipo: vf

enunciado: "La tecnología define el marco de posibilidades y restricciones para la acción técnica."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["definicion", "herramienta"]

respuesta: verdadero
tipo: vf

enunciado: "La técnica es descrita como la herramienta que da poder de acción inmediato."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["diferencia", "naturaleza"]

variables:
  tipo_technica: "individual"
  tipo_tecnologia: "colectiva"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La técnica se caracteriza por ser individual y procedimental, mientras que la tecnología suele ser colectiva y sistémica."

explicacion: |
  La técnica es una habilidad o método que posee o aplica una persona (individual). La tecnología es un sistema complejo que involucra múltiples componentes, usuarios y procesos (colectivo).
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["neutralidad", "etica"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La tecnología es un elemento neutral, libre de sesgos culturales o objetivos de sus creadores."

explicacion: |
  La tecnología no es neutral. Está diseñada por personas con ciertos objetivos, sesgos y contextos culturales. Su diseño refleja las intenciones y valores de quienes la crean.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["interdependencia", "ciclo"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las nuevas técnicas surgen como respuesta a limitaciones tecnológicas existentes, y a su vez, nuevas tecnologías permiten técnicas más complejas."

explicacion: |
  Existe un ciclo dinámico. Las limitaciones de la tecnología actual impulsan la creación de nuevas técnicas, y el avance tecnológico abre puertas para desarrollar técnicas más sofisticadas.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["componentes", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En informática, la tecnología incluye solo el hardware y el software, pero no los protocolos de comunicación."

explicacion: |
  Falso. La tecnología informática incluye hardware, software, protocolos de comunicación e infraestructura. Todos estos elementos funcionan en conjunto para permitir la operación del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["contexto", "variabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las técnicas pueden variar según el contexto o la herramienta disponible."

explicacion: |
  Sí. Una misma tarea puede requerir diferentes técnicas dependiendo de las herramientas (software/hardware) o el entorno (contexto) en el que se realice.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["impacto", "sociedad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Es importante comprender el impacto de la tecnología en la sociedad para pasar de ser usuarios pasivos a ciudadanos conscientes."

explicacion: |
  El análisis crítico del impacto social, ético y cultural de la tecnología es fundamental para una ciudadanía digital responsable y activa.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La técnica se refiere al 'cómo' hacemos algo."

explicacion: |
  Correcto. La técnica define los métodos, procedimientos y habilidades para ejecutar una tarea. Es la parte procedimental del conocimiento.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La tecnología es el producto o sistema resultante de aplicar conocimiento y técnicas."

explicacion: |
  Correcto. La tecnología es el resultado tangible o sistémico de la aplicación del saber técnico y científico para resolver problemas.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["metacognicion", "evaluacion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Estudiar informática implica solo aprender a operar máquinas, sin necesidad de entender su diseño."

explicacion: |
  Falso. Estudiar informática implica entender la lógica detrás del diseño, los sesgos y el impacto, no solo la operación. Esto permite una ciudadanía digital crítica.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["ciudadania", "objetivo"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Entender la diferencia entre técnica y tecnología nos ayuda a analizar críticamente el mundo digital."

explicacion: |
  Sí. Esta distinción permite pasar de la mera operación (técnica) al análisis crítico del sistema (tecnología), fomentando una ciudadanía digital más consciente y capaz de innovar.
```
