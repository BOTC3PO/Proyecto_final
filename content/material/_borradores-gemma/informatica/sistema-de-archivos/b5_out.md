### 1 — Estructura de directorios
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["directorios", "jerarquia"]

variables:
  escenario: uno_de([["Documentos/Proyectos/final.pdf", "final.pdf"], ["Fotos/Vacaciones/playa.jpg", "playa.jpg"], ["Musica/Rock/cancion.mp3", "cancion.mp3"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: [escenario[idx][1]]

enunciado: "Si tenemos la ruta absoluta {escenario[idx][0]}, el nombre del archivo es ___."

explicacion: |
  En un sistema de archivos jerárquico, la ruta indica la posición desde la raíz. El último elemento después de la última barra es el nombre del archivo.
```

### 2 — Atributos de archivo
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

variables:
  archivo: uno_de([["config.sys", "solo_lectura"], ["data.db", "oculto"], ["script.sh", "ejecutable"]])
  idx: uno_de([0,1,2])

respuesta: archivo[idx][1]
tipo: mc
opciones_explicitas: ["solo_lectura", "oculto", "ejecutable"]

enunciado: "Un archivo con el atributo {archivo[idx][0]} tiene la propiedad de: ___"

explicacion: |
  Los metadatos o atributos definen permisos y propiedades del archivo (lectura, oculto, ejecución, etc.).
```

### 3 — Fragmentación de disco
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["fragmentacion", "rendimiento"]

variables:
  estado: uno_de([[true, "fragmentado"], [false, "contiguo"]])
  idx: uno_de([0,1])

respuesta: estado[idx][0]
tipo: vf

enunciado: "Si un archivo se almacena en sectores no contiguos debido a que el espacio libre está disperso, el disco está ___."

explicacion: |
  La fragmentación ocurre cuando los archivos no se almacenan en bloques contiguos, lo que puede afectar el rendimiento de lectura.
```

### 4 — Proceso de creación de archivos
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["flujo_archivo", "operaciones"]

respuesta: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]
tipo: ordenar
opciones_explicitas: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]

enunciado: "Ordena los pasos lógicos que realiza el sistema de archivos al guardar un archivo nuevo en el disco:"

explicacion: |
  El SO primero reserva espacio en la estructura de control, asigna los bloques físicos, marca los metadatos y finalmente lo hace visible en el directorio.
```

### 5 — Capacidad de almacenamiento
```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["capacidad", "unidades"]

variables:
  valor: uno_de([[1024, "1 KB"], [1048576, "1 MB"], [1073741824, "1 GB"]])
  idx: uno_de([0,1,2])

respuesta: valor[idx][1]
tipo: mc
opciones_explicitas: ["1 KB", "1 MB", "1 GB"]

enunciado: "Si el sistema reporta un tamaño de {valor[idx][0]} bytes, esto equivale a: ___"

explicacion: |
  En informática, las unidades suelen basarse en potencias de 2 (binarias): 1024 bytes = 1 KB, 1024^2 = 1 MB, etc.
```