### 1 — ¿Qué es un directorio?
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "directorios"]

respuesta: "una lista de archivos"
tipo: completar
respuestas_validas: ["una lista de archivos", "una estructura que contiene archivos"]

enunciado: "En un sistema de archivos, un directorio es ___ que permite organizar y localizar archivos en el disco."

explicacion: |
  Un directorio no es un archivo en sí mismo que contiene datos de usuario, sino una estructura de datos que contiene nombres de archivos y sus direcciones físicas en el disco.
```

### 2 — ¿El nombre de un archivo es su ubicación física?
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

### 3 — ¿Qué sucede al borrar un archivo?
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

### 4 — Pasos para la creación de un archivo
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["proceso", "creacion"]

respuesta: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]
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

### 5 — ¿Es posible que dos archivos tengan el mismo nombre?
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