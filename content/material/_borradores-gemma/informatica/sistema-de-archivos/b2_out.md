### 1 — El concepto de Inodo
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["linux", "unix", "inode"]

respuesta: "metadatos"
tipo: completar
respuestas_validas: ["metadatos", "metadato"]

enunciado: "En sistemas de archivos tipo Unix/Linux, la estructura que contiene la información sobre el tamaño, permisos y ubicación de los bloques de datos de un archivo, pero no su nombre, se denomina ___."

explicacion: |
  El inodo (index node) es una estructura de datos que contiene la información descriptiva del archivo (metadatos). El nombre del archivo se almacena en el directorio, no en el inodo.
```

### 2 — Fragmentación de archivos
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["almacenamiento", "fragmentacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["archivo_A", "40KB", "fragmentado"], ["archivo_B", "12KB", "contiguo"]]
  opcion_correcta: ["fragmentado", "contiguo"]

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: ["fragmentado", "contiguo"]

enunciado: "Un archivo de {datos[escenario_idx][0]} tiene un tamaño de {datos[escenario_idx][1]}. Si el sistema de archivos debe guardar este archivo en bloques no adyacentes debido a que el espacio libre está disperso, el archivo se encuentra ___."

explicacion: |
  Cuando un archivo no se puede almacenar en bloques contiguos y debe repartirse por diferentes partes del disco, se produce la fragmentación.
```

### 3 — Ciclo de vida de un archivo
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["gestion", "orden"]

respuesta: ["Crear", "Escribir", "Cerrar", "Eliminar"]
tipo: ordenar
opciones_explicitas: ["Crear", "Escribir", "Cerrar", "Eliminar"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo para gestionar un archivo desde que se inicia su uso hasta que se libera el espacio en disco:"

explicacion: |
  El flujo estándar implica la asignación de inodos/bloques (Crear), la escritura de datos (Escribir), el cierre del descriptor para asegurar la integridad (Cerrar) y la liberación de recursos (Eliminar).
```

### 4 — Capacidad de un sistema de archivos
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["calculo", "capacidad"]

variables:
  tamaño_archivo: 1024
  tamaño_bloque: 4096
  bloques_necesarios: ceil(1024 / 4096)

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Si un sistema de archivos utiliza bloques de {tamaño_bloque} bytes y queremos guardar un archivo de {tamaño_archivo} bytes, ¿cuántos bloques físicos se deben asignar como mínimo para este archivo?"

pasos:
  - "Dividir el tamaño del archivo por el tamaño del bloque."
  - "Redondear hacia arriba (ceil) ya que un bloque no puede usarse parcialmente para otro archivo."

explicacion: |
  Aunque el archivo sea pequeño, el sistema operativo asigna bloques completos. En este caso, 1024/4096 = 0.25, lo que requiere 1 bloque completo.
```

### 5 — El concepto de Directorio
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

respuesta: falso
tipo: vf

enunciado: "En un sistema de archivos jerárquico, un directorio es una estructura especial que contiene una lista de nombres de archivos y sus correspondientes punteros a inodos o direcciones de inicio. ¿Es esto verdadero o falso?"

explicacion: |
  Es verdadero. Un directorio actúa como un mapa que vincula un nombre legible para el usuario con la ubicación física o lógica (inodo) de los datos en el disco.
```