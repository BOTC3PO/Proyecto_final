# Informatica — Control de versiones (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — ¿Qué es un sistema de control de versiones?

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos", "software"]

respuesta: "un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo"
tipo: mc
opciones_explicitas: ["un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo", "un editor de texto avanzado para programadores", "un sistema operativo para gestionar archivos en la nube", "una herramienta de compilación de código fuente"]

enunciado: "En el desarrollo de software, un sistema de control de versiones es ___."

explicacion: |
  Un sistema de control de versiones permite rastrear la evolución de un proyecto, permitiendo volver a estados anteriores y gestionar cambios realizados por múltiples personas.
```

### 2 — El concepto de "Commit"

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

respuesta: "snapshot"
tipo: completar
respuestas_validas:
  - "snapshot"
  - "instantánea"
  - "foto"

enunciado: "En Git, un 'commit' puede entenderse como una ___ del estado actual de los archivos en el repositorio."

explicacion: |
  A diferencia de otros sistemas que guardan solo las diferencias (deltas), Git piensa en términos de snapshots (instantáneas) de la estructura de archivos en ese momento preciso.
```

### 3 — ¿Es Git un sistema distribuido?

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

### 4 — Flujo de trabajo básico en Git

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow", "ordenar"]

respuesta_orden: ["git add", "git commit", "git push"]
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

### 5 — Importancia del trabajo en equipo

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["colaboracion", "git"]

tipo: mc
opciones_explicitas: ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Obliga a que un solo programador trabaje a la vez para evitar errores", "Sirve únicamente para guardar copias de seguridad en la nube", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]
respuesta: "Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros"

enunciado: "Una de las razones principales por las que el control de versiones es esencial para el trabajo en equipo es que ___."

explicacion: |
  Los sistemas de control de versiones permiten la ramificación (branching) y la fusión (merging), facilitando que múltiples personas colaboren en la misma base de código de forma organizada.
```

### 6 — El propósito de Git

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

### 7 — Identificando un cambio

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  escenario: uno_de([["El desarrollador modificó el archivo main.py", "modificación"], ["El desarrollador borró el archivo README.md", "eliminación"], ["El desarrollador creó un nuevo archivo utils.py", "creación"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["modificación", "eliminación", "creación"]

enunciado: "En un proyecto de software, si un colaborador ejecuta un comando para registrar que ha borrado un archivo, ¿qué tipo de cambio está realizando en el historial?"

explicacion: |
  El cambio registrado es una {escenario[0]}. En el control de versiones, cada acción (crear, modificar, borrar) genera un nuevo estado en el historial.
```

### 8 — El flujo de trabajo básico

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

respuesta_orden: ["git add", "git commit", "git push"]
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

### 9 — El concepto de Commit

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "conceptos"]

respuesta: "mensaje"
tipo: completar
respuestas_validas:
  - "mensaje"
  - "autor"
  - "fecha"
  - "hash"

enunciado: "Para que un commit sea útil en un equipo de trabajo, es fundamental incluir un ___ descriptivo que explique qué cambios se realizaron."

explicacion: |
  Un commit sin un mensaje claro dificulta la comprensión del historial para otros miembros del equipo.
```

### 10 — Resolución de conflictos

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  escenarios: [["Dos personas editaron la misma línea del archivo index.html", "conflicto"], ["Una persona editó el archivo A y otra el archivo B", "sin_problema"], ["Una persona borró un archivo que otra persona estaba usando", "conflicto"]]
  idx: uno_de([0, 1, 2])
  escenario_actual: escenarios[idx]
  descripcion: escenario_actual[0]
  respuesta_correcta: escenario_actual[1]

respuesta: respuesta_correcta
tipo: mc

opciones_explicitas: ["conflicto", "sin_problema"]

enunciado: "Analiza el siguiente escenario: {descripcion}. ¿Qué situación se presenta al intentar fusionar (merge) los cambios?"

explicacion: |
  Cuando dos cambios incompatibles ocurren en la misma parte de un archivo, Git no puede decidir automáticamente qué versión mantener y genera un conflicto.
```

### 11 — El propósito de un repositorio

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

tipo: mc
opciones_explicitas: ["Una copia de seguridad en la nube para no perder archivos", "Un sistema para rastrear cambios y permitir la colaboración", "Un editor de texto avanzado para programadores", "Un sistema de mensajería para equipos de desarrollo"]
respuesta: "Un sistema para rastrear cambios y permitir la colaboración"
enunciado: "Un sistema de control de versiones como Git es esencial principalmente porque permite ___."
explicacion: |
  El control de versiones no es solo una copia de seguridad; su función principal es registrar la historia de cambios para que múltiples personas puedan trabajar en el mismo proyecto sin sobrescribir el trabajo de otros.
```

### 12 — El mito del "Guardar" vs "Commit"

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

### 13 — Confusión entre Local y Remoto

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "flujo_de_trabajo"]

variables:
  escenario: uno_de([["hice un commit localmente", "no es visible para mis compañeros"], ["hice un push al servidor", "es visible para mis compañeros"], ["hice un fetch de la rama principal", "solo descargo la información sin cambiar mi código"]])

tipo: completar
respuestas_validas:
  - "no es visible para mis compañeros"
  - "es visible para mis compañeros"
  - "solo descargo la información sin cambiar mi código"

enunciado: "Si un desarrollador realiza un commit en su repositorio local, la situación es: ___."

pasos:
  - "Realizar cambios en el código"
  - "Ejecutar 'git add' para preparar los cambios"
  - "Ejecutar 'git commit' para crear la versión local"

explicacion: |
  El repositorio local es privado a la máquina del desarrollador. Para que otros vean los cambios, se debe realizar un 'push' hacia un repositorio remoto (como GitHub o GitLab).
```

### 14 — El orden de un flujo de trabajo estándar

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
respuesta_orden: ["modificar archivos", "git add", "git commit", "git push"]
```

### 15 — El peligro de trabajar sin ramas

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "flujo_de_trabajo"]

variables:
  caso: uno_de([["trabajar directamente en la rama 'main'", "causa errores en la versión estable"], ["crear una rama nueva para una función", "permite experimentar sin romper el código principal"], ["hacer un merge de una rama con conflictos", "requiere resolución manual de cambios"]])

tipo: mc
opciones_explicitas: ["trabajar directamente en la rama 'main'", "crear una rama nueva para una función", "hacer un merge de una rama con conflictos"]

enunciado: "En un entorno de equipo, una práctica de riesgo que suele causar errores en la versión estable es {caso[0]}."

respuesta: "trabajar directamente en la rama 'main'"

explicacion: |
  Trabajar directamente en la rama principal (main/master) es peligroso porque cualquier error cometido durante el desarrollo se integra inmediatamente a la versión que se supone es funcional y estable. Se recomienda usar 'feature branches'.
```

### 16 — ¿Qué es Git?

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["Un sistema de gestión de archivos en la nube", "Un sistema de control de versiones distribuido", "Un editor de texto para programadores", "Un lenguaje de programación"]

respuesta: "Un sistema de control de versiones distribuido"

enunciado: "A diferencia de un simple respaldo de archivos en la nube, Git es un ___."

explicacion: |
  Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y trabajar de forma colaborativa sin depender de un único servidor centralizado para todo el historial.
```

### 17 — Diferencia entre Git y un Copia de Seguridad

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

### 18 — Flujo de trabajo en equipo

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["colaboracion", "flujo_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["desarrollador_A", "desarrollador_B"], ["usuario_X", "usuario_Y"]]

tipo: completar
respuestas_validas:
  - "merge"
  - "conflito"
  - "commit"
  - "push"
respuesta: "merge"

enunciado: "Cuando dos personas trabajan en la misma línea de un archivo, al intentar integrar sus cambios, el sistema de control de versiones debe realizar un ___ para unir las historias."

explicacion: |
  El proceso de integrar cambios de una rama a otra se llama 'merge'. Si los cambios chocan en la misma línea, surge un 'conflicto' que debe ser resuelto manualmente.
```

### 19 — Orden lógico de cambios

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["flujo_git", "orden"]

tipo: ordenar
opciones_explicitas: ["modificar_archivo", "hacer_commit", "hacer_push"]
respuesta_orden: ["modificar_archivo", "hacer_commit", "hacer_push"]

enunciado: "Ordena los pasos lógicos para enviar tus cambios locales a un repositorio remoto:"

explicacion: |
  Primero debes realizar los cambios en el archivo, luego registrar esos cambios en tu historial local con un 'commit', y finalmente enviarlos al servidor remoto con un 'push'.
```

### 20 — Atributos de un Commit

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["commit", "metadatos"]

variables:
  es_valido: uno_de([verdadero, falso])
  datos: [["mensaje descriptivo", verdadero], ["solo un espacio", falso]]

tipo: mc
opciones_explicitas: ["Es obligatorio incluir un mensaje descriptivo", "El mensaje es opcional pero recomendado", "El mensaje solo lo pone el administrador", "No se puede hacer commit sin internet"]

respuesta: "Es obligatorio incluir un mensaje descriptivo"

enunciado: "En un flujo de trabajo profesional, un commit se distingue de un simple guardado de archivo porque requiere un {datos[0][0]} que explique el cambio."

explicacion: |
  Aunque técnicamente se puede hacer un commit con mensajes vacíos en algunas configuraciones, en el desarrollo profesional es una regla fundamental para mantener la trazabilidad del proyecto.
```

### 21 — El propósito de Git

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

### 22 — El concepto de Commit

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

respuestas_validas:
  - "guardar un cambio con un mensaje descriptivo"
  - "borrar todo el historial de cambios"

respuesta: datos[idx][0]

tipo: completar

explicacion: |
  Un commit es una captura (snapshot) de los cambios realizados en los archivos, acompañada de un mensaje que explica qué se hizo.
```

### 23 — ¿Es Git un sistema distribuido?

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

### 24 — Flujo de trabajo básico

```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "intermedio"
  tags: ["git", "workflow"]

opciones_explicitas: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

respuesta_orden: ["Modificar archivos", "Realizar un commit", "Enviar cambios al servidor remoto (push)"]

tipo: ordenar

enunciado: "Ordena los pasos lógicos para subir un cambio local a un repositorio remoto (como GitHub):"

explicacion: |
  Primero modificas el contenido, luego creas un punto de control local (commit) y finalmente subes esa historia al servidor (push).
```

### 25 — Resolución de conflictos

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
