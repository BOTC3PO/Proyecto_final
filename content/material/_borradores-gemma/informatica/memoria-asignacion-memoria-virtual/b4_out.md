### 1 — Memoria Virtual vs Memoria Física
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["memoria", "sistema_operativo", "abstraccion"]

respuesta: "abstraccion"
tipo: mc
opciones_explicitas: ["abstraccion", "hardware", "almacenamiento", "registro"]

enunciado: "A diferencia de la memoria RAM (memoria física), la memoria virtual actúa como una ___ que permite a los procesos manejar un espacio de direcciones mayor al tamaño de la memoria física disponible."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que proporciona una abstracción de la memoria física, permitiendo que cada proceso crea que tiene un espacio de direccionamiento continuo y extenso.
```

### 2 — Segmentación vs Paginación
```
metadata:
  materia: "informatica"
  tema: "gestion_de_memoria"
  nivel: "avanzado"
  tags: ["paginacion", "segmentacion", "fragmentacion"]

variables:
  tipo_fragmentacion: uno_de(["interna", "externa"])

respuesta: tipo_fragmentacion
tipo: mc
opciones_explicitas: ["interna", "externa"]

enunciado: "La paginación divide la memoria en bloques de tamaño fijo, lo que puede causar fragmentación {tipo_fragmentacion}. Por el contrario, la segmentación, al usar tamaños variables, suele provocar fragmentación ___."

explicacion: |
  La paginación causa fragmentación interna (espacio sobrante dentro de una página), mientras que la segmentación causa fragmentación externa (huecos entre segmentos que no son lo suficientemente grandes para nuevos procesos).
```

### 3 — ¿Es la Memoria Virtual una extensión física?
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos_clave", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria virtual es una extensión física de la memoria RAM mediante la adición de módulos de memoria adicionales."

explicacion: |
  Falso. La memoria virtual es una técnica de gestión lógica/de software que utiliza espacio en el disco (almacenamiento secundario) para simular memoria adicional, no es un componente físico extra.
```

### 4 — Proceso de intercambio de páginas
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "swap", "paged_fault"]

respuesta: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]
tipo: ordenar

opciones_explicitas: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]

enunciado: "Cuando un proceso intenta acceder a una página que no está en la RAM, ocurre un 'Page Fault'. Ordena los pasos lógicos que el Sistema Operativo debe seguir para resolver esta interrupción:"

explicacion: |
  1. Se detecta el Page Fault (interrupción).
  2. Se busca la página en el disco y se carga en RAM (Swap In).
  3. Se actualiza la tabla de páginas para marcarla como presente.
  4. Se reanuda la ejecución de la instrucción original.
```

### 5 — El concepto de Espacio de Direcciones
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["direcciones", "logico", "fisico"]

respuesta: "lógico"
tipo: completar
respuestas_validas: ["lógico", "virtual"]

enunciado: "Mientras que la memoria física se refiere a las direcciones reales en los chips de RAM, el espacio de direcciones que ve un proceso es un espacio ___."

explicacion: |
  El espacio de direcciones lógico (o virtual) es la vista que el procesador y el software tienen de la memoria, la cual es mapeada a direcciones físicas mediante la MMU (Memory Management Unit).
```