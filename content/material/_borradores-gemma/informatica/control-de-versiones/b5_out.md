### 1 — El propósito de Git
```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "conceptos"]

variables:
  idx: uno_de([0,1,2])
  escenario: uno_de([["un equipo de 5 programadores trabajando en el mismo archivo", "un solo programador trabajando solo en su PC", "un equipo que no usa herramientas de control"]])

enunciado: "En el escenario de {escenario[idx]}, ¿cuál es la principal ventaja de utilizar un sistema de control de versiones como Git?"

opciones_explicitas: ["Permite trabajar en paralelo sin sobrescribir el trabajo de otros", "Hace que el código sea más rápido de ejecutar", "Evita que los programadores tengan que escribir código"]

respuesta: escenario[idx] == "un equipo de 5 programadores trabajando en el mismo archivo" ? "Permite trabajar en paralelo sin sobrescribir el trabajo de otros" : ""

tipo: mc

explicacion: |
  El control de versiones permite que múltiples personas trabajen en la misma base de código simultáneamente, gestionando las integraciones y evitando que los cambios de uno borren los del otro.
```

### 2 — El concepto de Commit
```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "basico"
  tags: ["git", "workflow"]

variables:
  idx: uno_de([0,1])
  accion: uno_de([["guardar un cambio con un mensaje descriptivo", "borrar todo el historial de cambios"]])

enunciado: "En Git, realizar un 'commit' equivale a ___."

respuestas_validas: ["guardar un cambio con un mensaje descriptivo", "borrar todo el historial de cambios"]

respuesta: accion[idx] == "guardar un cambio con un mensaje descriptivo" ? "guardar un cambio con un mensaje descriptivo" : ""

tipo: completar

explicacion: |
  Un commit es una captura (snapshot) de los cambios realizados en los archivos, acompañada de un mensaje que explica qué se hizo.
```

### 3 — ¿Es Git un sistema distribuido?
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

tipo: vf

explicacion: |
  A diferencia de los sistemas centralizados, en Git cada clon es un repositorio completo con todo su historial, lo que permite trabajar sin conexión y ofrece mayor seguridad.
```

### 4 — Flujo de trabajo básico
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

### 5 — Resolución de conflictos
```
metadata:
  materia: "informatica"
  tema: "control_de_versiones"
  nivel: "avanzado"
  tags: ["git", "conflictos"]

variables:
  idx: uno_de([0,1])
  situacion: uno_de([["dos personas modificaron la misma línea de un archivo", "una persona modificó un archivo y otra borró el mismo archivo", "una persona añadió una función nueva en un archivo distinto"]])

enunciado: "Si ocurre la situación: {situacion[idx]}, ¿qué sucede en Git?"

opciones_explicitas: ["Se produce un conflicto de fusión (merge conflict)", "Git lo resuelve automáticamente sin avisar", "El repositorio se bloquea permanentemente"]

respuesta: situacion[idx] != "una persona añadió una función nueva en un archivo distinto" ? "Se produce un conflicto de fusión (merge conflict)" : ""

tipo: mc

explicacion: |
  Cuando los cambios son en líneas distintas o archivos distintos, Git puede fusionar automáticamente. Si los cambios chocan en la misma línea, el usuario debe resolver el conflicto manualmente.
```