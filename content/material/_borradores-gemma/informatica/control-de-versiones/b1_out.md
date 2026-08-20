### 1 — ¿Qué es un sistema de control de versiones?
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

### 2 — El concepto de "Commit"
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

### 5 — Importancia del trabajo en equipo
```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["colaboracion", "git"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Obliga a que un solo programador trabaje a la vez para evitar errores", "Sirve únicamente para guardar copias de seguridad en la nube", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]

enunciado: "Una de las razones principales por las que el control de versiones es esencial para el trabajo en equipo es que ___."

explicacion: |
  Los sistemas de control de versiones permiten la ramificación (branching) y la fusión (merging), facilitando que múltiples personas colaboren en la misma base de código de forma organizada.

tabla:
  - ["Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros", "Permite que varios desarrolladores trabajen en el mismo archivo simultáneamente sin sobrescribir el trabajo de otros"]
  - ["Obliga a que un solo programador trabaje a la vez para evitar errores", "Es una herramienta que reemplaza la necesidad de realizar pruebas de software"]
```