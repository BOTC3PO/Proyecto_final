### 1 — El propósito de un repositorio
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

### 2 — El mito del "Guardar" vs "Commit"
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

### 3 — Confusión entre Local y Remoto
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

### 4 — El orden de un flujo de trabajo estándar
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

### 5 — El peligro de trabajar sin ramas
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