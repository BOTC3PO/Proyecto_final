### 1 — Diferencia entre Archivo y Directorio
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos_basicos", "organizacion"]

respuesta: "directorio"
tipo: completar
respuestas_validas: ["directorio", "carpeta"]

enunciado: "Mientras que un archivo es una colección de datos almacenados bajo un nombre, un ___ es una estructura que permite organizar y agrupar dichos archivos."

explicacion: |
  Un archivo contiene la información propiamente dicha, mientras que el directorio (o carpeta) actúa como un contenedor lógico para organizar los archivos en una jerarquía.
```

### 2 — Sistema de archivos vs. Sistema de archivos FAT32
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

### 3 — Atributos de un archivo
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

### 4 — Proceso de creación de un archivo
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["operaciones", "secuencia"]

respuesta: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]
tipo: ordenar
opciones_explicitas: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo desde que una aplicación solicita guardar un nuevo archivo hasta que este queda disponible:"

explicacion: |
  Primero el SO busca bloques libres (espacio), asigna la entrada en la estructura de metadatos, escribe la información y finalmente marca el archivo como disponible en la tabla del sistema de archivos.
```

### 5 — Fragmentación de archivos
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