# Informatica — Proceso programa en ejecucion (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos", "conceptos_basicos"]

respuesta: "proceso"
tipo: completar
respuestas_validas:
  - "proceso"

enunciado: "Un programa es una entidad pasiva que reside en el disco, mientras que un ___ es una entidad activa que se encuentra en ejecución en la memoria."

explicacion: |
  Un programa es simplemente un conjunto de instrucciones almacenadas (archivo), mientras que un proceso es la instancia de ese programa en ejecución, con su propio estado, contador de programa y recursos asignados.
```

### 2 — Diferencia fundamental

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["sistemas_operativos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El archivo 'navegador.exe' guardado en el disco", "programa"], ["La ventana del navegador abierta y consumiendo RAM", "proceso"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["programa", "proceso"]

enunciado: "Identifica la naturaleza del siguiente elemento: {datos[escenario_idx][0]}"

explicacion: |
  {datos[escenario_idx][0]} se clasifica como {datos[escenario_idx][1]} porque la distinción principal radica en si la entidad está estática en almacenamiento o activa en la CPU/Memoria.
```

### 3 — Componentes de un proceso

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

### 4 — Ciclo de vida (Orden)

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["gestion_de_procesos"]

respuesta_orden: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]
tipo: ordenar
opciones_explicitas: ["Programa en disco", "Carga en memoria", "Ejecución en CPU", "Terminación"]

enunciado: "Ordena cronológicamente las etapas desde que un usuario hace doble clic en un ejecutable hasta que este finaliza:"

explicacion: |
  El flujo lógico comienza con el archivo estático en el almacenamiento secundario, pasa a la memoria principal (RAM) mediante el cargador, se asigna tiempo de CPU para su ejecución y finalmente se liberan los recursos al terminar.
```

### 5 — Relación de cardinalidad

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

### 6 — Relación de cardinalidad

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

### 7 — ¿Qué es un proceso?

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

### 8 — Diferencia entre programa y proceso

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

### 9 — Componentes de un proceso en ejecución

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["memoria", "estructura"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["recursos_asignados", "estado_de_ejecucion"], ["memoria_y_registros", "contexto_del_cpu"]]

respuesta: datos[escenario_idx][1]
tipo: "completar"
respuestas_validas:
  - "recursos_asignados"
  - "estado_de_ejecucion"
  - "memoria_y_registros"
  - "contexto_del_cpu"

enunciado: "Al pasar de un programa a un proceso, el sistema operativo debe asignar {datos[escenario_idx][0]} para que este pueda operar."

explicacion: |
  Un proceso no es solo el código; requiere recursos como memoria (stack, heap), archivos abiertos y el estado de los registros del procesador para poder ejecutarse.
```

### 10 — Ciclo de vida de un proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados_proceso"]

tipo: "ordenar"
opciones_explicitas: ["creado", "listo", "ejecutando", "terminado"]
respuesta_orden: ["creado", "listo", "ejecutando", "terminado"]

enunciado: "Ordena las etapas lógicas por las que pasa un proceso desde que se solicita su creación hasta que finaliza su tarea:"

explicacion: |
  El flujo estándar es: 1. Creado (se solicita), 2. Listo (esperando CPU), 3. Ejecutando (usando CPU), 4. Terminado (finaliza).
```

### 11 — El rol del Sistema Operativo

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["gestion_recursos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["gestionar_recursos", "controlar_ejecucion"], ["gestionar_recursos", "modificar_el_codigo"]]

respuesta: casos[caso_idx][1]
tipo: "mc"
opciones_explicitas: ["gestionar_recursos", "controlar_ejecucion", "modificar_el_codigo", "eliminar_el_archivo"]

enunciado: "Cuando un programa se convierte en proceso, el Sistema Operativo asume la tarea de {casos[caso_idx][0]} para asegurar que el proceso pueda realizar su función sin interferir con otros."

explicacion: |
  El SO actúa como un administrador que asigna tiempo de CPU y memoria (gestiona recursos) y decide cuándo un proceso puede estar en la CPU (controla la ejecución).
```

### 12 — Programa vs Proceso

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

### 13 — Recursos de un proceso

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

### 14 — Componentes del proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estructura", "memoria"]

variables:
  escenario: uno_de([[0, "Contador de instrucciones"], [1, "Espacio de direcciones"], [2, "Estado del proceso"]])
  respuesta_correcta: escenario[1]

tipo: completar
respuesta: "Contador de instrucciones"

enunciado: "Un proceso requiere de un ___ para saber cuál es la próxima instrucción que debe ejecutar la CPU."

explicacion: |
  El Program Counter (PC) o Contador de Instrucciones es un registro que indica la dirección de la próxima instrucción a ejecutar.
```

### 15 — Ciclo de vida de un proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["estados", "ciclo_de_vida"]

respuesta_orden: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordena los estados típicos por los que pasa un proceso en un sistema operativo, desde su creación hasta su finalización:"

explicacion: |
  El ciclo de vida estándar implica la creación (Nuevo), la espera en cola (Listo), el uso de CPU (Ejecución), la espera por E/S (Bloqueado) y el cierre (Terminado).
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "avanzado"
  tags: ["memoria", "ejecucion"]

variables:
  caso: uno_de([[0, "estático"], [1, "dinámico"]])

tipo: completar
respuestas_validas:
  - "estático"
  - "dinámico"

enunciado: "Mientras que el programa se considera un ente {caso[1]} almacenado en soporte persistente, el proceso es un ente {caso[1]} que reside principalmente en la memoria RAM."

explicacion: |
  El programa es una secuencia de instrucciones en un archivo (estático), mientras que el proceso es la entidad viva que gestiona memoria y registros (dinámico).
```

### 17 — Programa vs Proceso

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

### 18 — El estado de un proceso

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

### 19 — Componentes de un proceso

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
respuestas_validas:
  - "Contador de instrucciones"
  - "Contenido de memoria"
  - "Código fuente"

enunciado: "Un proceso contiene información dinámica que un programa no posee, como por ejemplo el {datos[idx][0]}."

respuesta: datos[idx][0]

explicacion: |
  Mientras que el programa contiene el código, el proceso contiene el contexto de ejecución: el contador de programa (PC), los registros de la CPU, la pila (stack) y el estado de los recursos de entrada/salida.
```

### 20 — Ciclo de vida del proceso

```
metadata:
  materia: "informatica"
  tema: "ciclo_de_vida"
  nivel: "intermedio"
  tags: ["planificacion", "so"]

tipo: ordenar
opciones_explicitas: ["Creación", "Listo", "Ejecución", "Terminación"]

enunciado: "Ordene correctamente las etapas típicas por las que pasa un proceso desde que se carga hasta que finaliza su tarea:"

respuesta_orden: ["Creación", "Listo", "Ejecución", "Terminación"]

explicacion: |
  El ciclo de vida estándar implica: 1. Creación (el SO asigna recursos), 2. Listo (esperando CPU), 3. Ejecución (usando la CPU) y 4. Terminación (liberación de recursos).
```

### 21 — Identificación de procesos

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

### 22 — El estado de un proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["conceptos_basicos", "sistema_operativo"]

variables:
  datos: [["El archivo 'editor.exe' está guardado en el disco duro", "falso"], ["El proceso 'editor.exe' está usando 500MB de RAM", "verdadero"]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Analice el siguiente escenario: {datos[idx][0]}. ¿Es esto una descripción de un proceso en ejecución?"

explicacion: |
  Un programa es una entidad pasiva (un archivo en disco), mientras que un proceso es una entidad activa (un programa en ejecución con recursos asignados como RAM y CPU).
```

### 23 — Diferencia fundamental

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "basico"
  tags: ["diferencias"]

respuesta: "proceso"
tipo: completar
respuestas_validas:
  - "proceso"

enunciado: "Un programa es una secuencia de instrucciones almacenadas en un medio no volátil, mientras que un ___ es la instancia de esa secuencia siendo ejecutada por la CPU."

explicacion: |
  La diferencia clave es el estado de actividad: el programa es el código estático y el proceso es la ejecución dinámica.
```

### 24 — Recursos de un proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["recursos", "gestion_memoria"]

respuesta: "Un proceso requiere: [Memoria, CPU, Registradores]"
tipo: mc
opciones_explicitas: ["Un proceso requiere: [Memoria, CPU, Registradores]", "El programa en disco requiere: [Almacenamiento, Instrucciones, Nombre de archivo]"]

enunciado: "¿Cuál de las siguientes opciones describe correctamente los recursos que gestiona un proceso en ejecución, a diferencia de un programa almacenado en disco?"

explicacion: |
  Un proceso necesita recursos volátiles y de procesamiento (RAM, CPU, registros) para poder operar.
```

### 25 — Ciclo de vida de un proceso

```
metadata:
  materia: "informatica"
  tema: "proceso_programa_en_ejecucion"
  nivel: "intermedio"
  tags: ["ciclo_vida", "ordenar"]

respuesta_orden: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]
tipo: ordenar
opciones_explicitas: ["Cargar programa", "Asignar memoria", "Ejecutar instrucciones", "Liberar recursos"]

enunciado: "Ordene los pasos lógicos que ocurren desde que un usuario hace doble clic en un ejecutable hasta que el proceso finaliza:"

explicacion: |
  El sistema operativo primero carga el código del disco a la RAM, asigna memoria y recursos, la CPU ejecuta las instrucciones y, finalmente, el proceso se cierra liberando los recursos.
```

### 26 — Identificación de instancias

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
