### 1 — El propósito de Git
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

### 2 — Identificando un cambio
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

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["modificación", "eliminación", "creación"]

enunciado: "En un proyecto de software, si un colaborador ejecuta un comando para registrar que ha borrado un archivo, ¿qué tipo de cambio está realizando en el historial?"

explicacion: |
  El cambio registrado es una {escenario[0]}. En el control de versiones, cada acción (crear, modificar, borrar) genera un nuevo estado en el historial.
```

### 3 — El flujo de trabajo básico
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

### 4 — El concepto de Commit
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

### 5 — Resolución de conflictos
```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  caso: uno_de([
    ["Dos personas editaron la misma línea del archivo index.html", "conflicto"],
    ["Una persona editó el archivo A y otra el archivo B", "sin_problema"],
    ["Una persona borró un archivo que otra persona estaba usando", "conflicto"]
  ])

respuesta: caso[0]
tipo: mc

opciones_explicitas: ["conflicto", "sin_problema"]

enunciado: "Analiza el siguiente escenario: {caso[0]}. ¿Qué situación se presenta al intentar fusionar (merge) los cambios?"

explicacion: |
  Cuando dos cambios incompatibles ocurren en la misma parte de un archivo, Git no puede decidir automáticamente qué versión mantener y genera un {caso[0]}.
```