### 1 — Concepto de Sistema de Archivos
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "software"
tipo: completar
respuestas_validas: ["software", "sistema"]

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
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Estructura lineal", "Estructura jerárquica", "Estructura aleatoria", "Estructura plana"]

enunciado: "La mayoría de los sistemas operativos modernos utilizan una estructura de archivos de tipo {datos[idx][0]} para organizar la información."

datos:
  - ["Estructura lineal", "Estructura jerárquica"]
  - ["Estructura plana", "Estructura jerárquica"]

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

respuesta: ["Extensión", "Nombre", "Ruta", "Metadatos"]
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
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sector", "Clúster", "Pista", "Cilindro"]

enunciado: "En un sistema de archivos, la unidad lógica mínima de asignación de espacio en el disco, que puede estar compuesta por varios sectores físicos, se denomina {datos[idx][0]}."

datos:
  - ["Sector", "Clúster"]
  - ["Clúster", "Clúster"]

explicacion: |
  Un clúster es la unidad de asignación de espacio que utiliza el sistema de archivos para gestionar bloques de datos en el disco.
```