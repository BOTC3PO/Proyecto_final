### 1 — ¿Qué es Git?
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

### 2 — Diferencia entre Git y un Copia de Seguridad
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

### 3 — Flujo de trabajo en equipo
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

### 4 — Orden lógico de cambios
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

### 5 — Atributos de un Commit
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