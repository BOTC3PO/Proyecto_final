# Informatica — Sistema de archivos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Sistema de Archivos

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "software"
tipo: completar
respuestas_validas:
  - "software"
  - "sistema"

enunciado: "El sistema de archivos es el ___ que permite al sistema operativo gestionar la organización, almacenamiento y recuperación de datos en un dispositivo de almacenamiento."

explicacion: |
  El sistema de archivos es una parte del software del sistema operativo que controla cómo se almacenan y se recuperan los datos en un disco o unidad de almacenamiento.
```

### 2 — Estructura de Directorios

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["jerarquia", "directorios"]

variables:
  datos: [["Estructura lineal", "Estructura jerárquica"], ["Estructura plana", "Estructura jerárquica"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Estructura lineal", "Estructura jerárquica", "Estructura aleatoria", "Estructura plana"]

enunciado: "La mayoría de los sistemas operativos modernos utilizan una estructura de archivos de tipo {datos[idx][0]} para organizar la información."

explicacion: |
  Una estructura jerárquica permite organizar archivos en directorios y subdirectorios, creando una "rama" o árbol de información.
```

### 3 — Metadatos y Atributos

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los metadatos de un archivo incluyen información como la fecha de creación, el tamaño y los permisos de acceso?"

explicacion: |
  Correcto. Los metadatos son 'datos sobre los datos' que describen las propiedades del archivo pero no su contenido real.
```

### 4 — Componentes del Sistema de Archivos

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

respuesta_orden: ["Extensión", "Nombre", "Ruta", "Metadatos"]
tipo: ordenar

opciones_explicitas: ["Extensión", "Nombre", "Ruta", "Metadatos"]

enunciado: "Ordena los elementos que componen la identificación completa y la ubicación de un archivo en un sistema operativo, desde lo más específico a lo más general (considerando la ruta completa):"

explicacion: |
  La ruta indica la ubicación, el nombre identifica el archivo, la extensión indica el formato y los metadatos describen sus propiedades.
```

### 5 — Formateo de Unidades

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["sectores", "clúster"]

variables:
  datos: uno_de([["Sector", "Clúster"], ["Clúster", "Clúster"]])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["Sector", "Clúster", "Pista", "Cilindro"]

enunciado: "En un sistema de archivos, la unidad lógica mínima de asignación de espacio en el disco, que puede estar compuesta por varios sectores físicos, se denomina {datos[0]}."

explicacion: |
  Un clúster es la unidad de asignación de espacio que utiliza el sistema de archivos para gestionar bloques de datos en el disco.
```

### 6 — El concepto de Inodo

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["linux", "unix", "inode"]

respuesta: "metadatos"
tipo: completar
respuestas_validas:
  - "metadatos"
  - "metadato"

enunciado: "En sistemas de archivos tipo Unix/Linux, la estructura que contiene la información sobre el tamaño, permisos y ubicación de los bloques de datos de un archivo, pero no su nombre, se denomina ___."

explicacion: |
  El inodo (index node) es una estructura de datos que contiene la información descriptiva del archivo (metadatos). El nombre del archivo se almacena en el directorio, no en el inodo.
```

### 7 — Fragmentación de archivos

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

### 8 — Ciclo de vida de un archivo

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["gestion", "orden"]

respuesta_orden: ["Crear", "Escribir", "Cerrar", "Eliminar"]
tipo: ordenar
opciones_explicitas: ["Crear", "Escribir", "Cerrar", "Eliminar"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo para gestionar un archivo desde que se inicia su uso hasta que se libera el espacio en disco:"

explicacion: |
  El flujo estándar implica la asignación de inodos/bloques (Crear), la escritura de datos (Escribir), el cierre del descriptor para asegurar la integridad (Cerrar) y la liberación de recursos (Eliminar).
```

### 9 — Capacidad de un sistema de archivos

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
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema de archivos utiliza bloques de {tamaño_bloque} bytes y queremos guardar un archivo de {tamaño_archivo} bytes, ¿cuántos bloques físicos se deben asignar como mínimo para este archivo?"

pasos:
  - "Dividir el tamaño del archivo por el tamaño del bloque."
  - "Redondear hacia arriba (ceil) ya que un bloque no puede usarse parcialmente para otro archivo."

explicacion: |
  Aunque el archivo sea pequeño, el sistema operativo asigna bloques completos. En este caso, 1024/4096 = 0.25, lo que requiere 1 bloque completo.
```

### 10 — El concepto de Directorio

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

### 11 — ¿Qué es un directorio?

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "directorios"]

respuesta: "una lista de archivos"
tipo: completar
respuestas_validas:
  - "una lista de archivos"
  - "una estructura que contiene archivos"

enunciado: "En un sistema de archivos, un directorio es ___ que permite organizar y localizar archivos en el disco."

explicacion: |
  Un directorio no es un archivo en sí mismo que contiene datos de usuario, sino una estructura de datos que contiene nombres de archivos y sus direcciones físicas en el disco.
```

### 12 — ¿El nombre de un archivo es su ubicación física?

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "nombres_archivos"]

respuesta: falso
tipo: vf

enunciado: "El nombre de un archivo determina directamente la posición física de los sectores en el disco duro donde se almacenan sus datos."

explicacion: |
  Falso. El nombre es una etiqueta lógica. El sistema de archivos utiliza una tabla (como FAT o MFT) para traducir ese nombre a direcciones lógicas y físicas en el hardware.
```

### 13 — ¿Qué sucede al borrar un archivo?

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["borrado", "espacio_disco"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[ "el sistema marca el espacio como disponible", "el sistema sobreescribe los datos inmediatamente"], ["solo se borra el puntero en el directorio", "se limpian todos los bits del sector"]]

respuesta: escenarios[caso_idx][0]
tipo: mc
opciones_explicitas: ["el sistema marca el espacio como disponible", "el sistema sobreescribe los datos inmediatamente", "solo se borra el puntero en el directorio", "se limpian todos los bits del sector"]

enunciado: "Cuando un usuario elimina un archivo de gran tamaño en un sistema de archivos estándar, {escenarios[caso_idx][0]}."

explicacion: |
  En la mayoría de los sistemas de archivos modernos, borrar un archivo no borra los datos reales del disco, sino que marca los clusters/sectores como "libres" en la tabla de asignación para que el SO pueda escribir nuevos datos allí en el futuro.
```

### 14 — Pasos para la creación de un archivo

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["proceso", "creacion"]

respuesta_orden: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]
tipo: ordenar
opciones_explicitas: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]

enunciado: "Ordena los pasos lógicos que realiza el sistema operativo desde que una aplicación solicita crear un archivo hasta que este es visible en el explorador de archivos."

pasos:
  - "El usuario/app pide crear un archivo."
  - "El SO reserva espacio en la tabla de archivos (nombre, permisos, fecha)."
  - "El SO busca sectores libres en el disco para el contenido."
  - "El SO vincula el nombre con la dirección de los sectores en el directorio."

explicacion: |
  Primero se procesa la intención, luego se preparan los metadatos, se reserva el espacio físico y finalmente se actualiza la estructura de navegación (directorio) para que el usuario lo vea.
```

### 15 — ¿Es posible que dos archivos tengan el mismo nombre?

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["nombres", "directorios"]

respuesta: verdadero
tipo: vf

enunciado: "En un mismo sistema de archivos, es posible tener dos archivos con el mismo nombre siempre y cuando se encuentren en directorios diferentes."

explicacion: |
  Verdadero. El nombre es único dentro de un directorio específico, pero cada directorio es un contenedor independiente. Por lo tanto, 'foto.jpg' puede existir en 'Carpeta_A' y 'Carpeta_B' sin conflicto.
```

### 16 — Diferencia entre Archivo y Directorio

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos_basicos", "organizacion"]

respuesta: "directorio"
tipo: completar
respuestas_validas:
  - "directorio"
  - "carpeta"

enunciado: "Mientras que un archivo es una colección de datos almacenados bajo un nombre, un ___ es una estructura que permite organizar y agrupar dichos archivos."

explicacion: |
  Un archivo contiene la información propiamente dicha, mientras que el directorio (o carpeta) actúa como un contenedor lógico para organizar los archivos en una jerarquía.
```

### 17 — Sistema de archivos vs. Sistema de archivos FAT32

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["formatos", "comparacion"]

variables:
  escenario: uno_de([["FAT32", "No permite archivos mayores a 4GB"], ["NTFS", "Permite archivos de gran tamaño y seguridad"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["FAT32", "NTFS", "ext4"]

enunciado: "Si comparamos un sistema de archivos moderno como NTFS con uno antiguo como {escenario[0]}, ¿cuál es la limitación principal de este último en cuanto al tamaño de archivos individuales?"

explicacion: |
  El sistema FAT32 tiene una limitación técnica en el tamaño de los clusters que impide almacenar archivos individuales que superen los 4GB.
```

### 18 — Atributos de un archivo

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["metadatos", "atributos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que los metadatos de un archivo (como fecha de creación o tamaño) forman parte del contenido de datos del archivo mismo?"

explicacion: |
  Falso. Los metadatos son información sobre el archivo que es gestionada por el sistema de archivos (como en la tabla de asignación de archivos o el MFT), pero no son parte del contenido de datos que el usuario escribe.
```

### 19 — Proceso de creación de un archivo

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["operaciones", "secuencia"]

respuesta_orden: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]
tipo: ordenar
opciones_explicitas: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo desde que una aplicación solicita guardar un nuevo archivo hasta que este queda disponible:"

explicacion: |
  Primero el SO busca bloques libres (espacio), asigna la entrada en la estructura de metadatos, escribe la información y finalmente marca el archivo como disponible en la tabla del sistema de archivos.
```

### 20 — Fragmentación de archivos

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["rendimiento", "fragmentacion"]

variables:
  caso: uno_de([[100, "fragmentado"], [100, "contiguo"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["fragmentado", "contiguo"]

enunciado: "En un disco duro, si un archivo se almacena en bloques de datos que están físicamente separados en diferentes sectores del plato, el archivo se encuentra en un estado {caso[1]}. Si los bloques estuvieran en sectores adyacentes, se diría que es..."

explicacion: |
  La fragmentación ocurre cuando el sistema de archivos no puede asignar bloques contiguos, lo que obliga al cabezal del disco a moverse más, reduciendo el rendimiento.
```

### 21 — Estructura de directorios

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["directorios", "jerarquia"]

variables:
  datos: [["Documentos/Proyectos/final.pdf", "final.pdf"], ["Fotos/Vacaciones/playa.jpg", "playa.jpg"], ["Musica/Rock/cancion.mp3", "cancion.mp3"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "Si tenemos la ruta absoluta {datos[idx][0]}, el nombre del archivo es ___."

explicacion: |
  En un sistema de archivos jerárquico, la ruta indica la posición desde la raíz. El último elemento después de la última barra es el nombre del archivo.
```

### 22 — Atributos de archivo

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

variables:
  datos: [["config.sys", "solo_lectura"], ["data.db", "oculto"], ["script.sh", "ejecutable"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["solo_lectura", "oculto", "ejecutable"]

enunciado: "Un archivo con el atributo {datos[idx][0]} tiene la propiedad de: ___"

explicacion: |
  Los metadatos o atributos definen permisos y propiedades del archivo (lectura, oculto, ejecución, etc.).
```

### 23 — Fragmentación de disco

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["fragmentacion", "rendimiento"]

variables:
  datos: [[verdadero, "fragmentado"], [falso, "contiguo"]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si un archivo se almacena en sectores no contiguos debido a que el espacio libre está disperso, el disco está ___."

explicacion: |
  La fragmentación ocurre cuando los archivos no se almacenan en bloques contiguos, lo que puede afectar el rendimiento de lectura.
```

### 24 — Proceso de creación de archivos

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["flujo_archivo", "operaciones"]

respuesta_orden: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]
tipo: ordenar
opciones_explicitas: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]

enunciado: "Ordena los pasos lógicos que realiza el sistema de archivos al guardar un archivo nuevo en el disco:"

explicacion: |
  El SO primero reserva espacio en la estructura de control, asigna los bloques físicos, marca los metadatos y finalmente lo hace visible en el directorio.
```

### 25 — Capacidad de almacenamiento

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["capacidad", "unidades"]

variables:
  datos: [[1024, "1 KB"], [1048576, "1 MB"], [1073741824, "1 GB"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 KB", "1 MB", "1 GB"]

enunciado: "Si el sistema reporta un tamaño de {datos[idx][0]} bytes, esto equivale a: ___"

explicacion: |
  En informática, las unidades suelen basarse en potencias de 2 (binarias): 1024 bytes = 1 KB, 1024^2 = 1 MB, etc.
```
