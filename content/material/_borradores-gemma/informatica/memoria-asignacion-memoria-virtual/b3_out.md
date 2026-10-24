### 1 — El mito de la memoria física
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos_base"]

respuesta: falso
tipo: vf

enunciado: "La memoria virtual permite que un proceso acceda a una cantidad de memoria que excede la capacidad de la memoria RAM física instalada en el sistema."

explicacion: |
  Verdadero. La memoria virtual utiliza espacio en el disco (archivo de paginación/swap) para simular memoria adicional, permitiendo que el sistema operativo gestione procesos que requieren más espacio del que la RAM física puede ofrecer de forma inmediata.
```

### 2 — Fragmentación y asignación
```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["fragmentacion", "gestion_memoria"]

variables:
  escenario: uno_de([["fragmentacion_externa", "la memoria tiene huecos libres pero no contiguos"], ["fragmentacion_interna", "la memoria tiene espacio sobrante dentro de un bloque asignado"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["la memoria tiene huecos libres pero no contiguos", "la memoria tiene espacio sobrante dentro de un bloque asignado", "el procesador no puede acceder a la RAM"]

enunciado: "Un sistema operativo utiliza particiones fijas para la asignación de memoria. Si un proceso requiere 15KB y se le asigna un bloque de 20KB, el espacio sobrante de 5KB dentro de ese bloque se conoce como: {escenario[1]}"

explicacion: |
  La fragmentación interna ocurre cuando se asigna un bloque de memoria a un proceso que es mayor que el tamaño requerido por este, dejando un residuo inutilizable dentro de la partición asignada.
```

### 3 — El proceso de paginación
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "direccionamiento"]

respuesta: ["Dirección lógica", "MMU", "Dirección física"]
tipo: ordenar

opciones_explicitas: ["Dirección lógica", "MMU", "Dirección física"]

enunciado: "Ordena el flujo de resolución de una dirección de memoria cuando un proceso intenta acceder a un dato en un sistema con paginación:"

explicacion: |
  El proceso comienza con la dirección lógica generada por la CPU, la cual es interceptada por la Unidad de Gestión de Memoria (MMU) para ser traducida mediante tablas de páginas, resultando finalmente en una dirección física en la RAM.
```

### 4 — El error de la "Falsa Memoria"
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["page_fault", "rendimiento"]

respuesta: "page_fault"
tipo: completar
respuestas_validas: ["page_fault", "error_de_segmentacion"]

enunciado: "Cuando un proceso intenta acceder a una página de memoria que no se encuentra actualmente cargada en la memoria RAM, se produce una excepción llamada ___."

explicacion: |
  El 'page fault' (falta de página) no es un error fatal del programa, sino una interrupción que le indica al sistema operativo que debe buscar la página necesaria en el disco para cargarla en la RAM.
```

### 5 — Capacidad de direccionamiento
```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "intermedio"
  tags: ["bus_direcciones", "arquitectura"]

variables:
  bits: uno_de([32, 64])

respuesta: bits == 32 ? 4294967296 : 18446744073709551616

tipo: input
tolerancia_abs: 0

enunciado: "Si un procesador tiene un bus de direcciones de {bits} bits, el número total de direcciones de memoria únicas que puede direccionar es:"

explicacion: |
  El número de direcciones posibles es igual a 2 elevado a la potencia del número de bits del bus de direcciones. Para 32 bits es 2^32, y para 64 bits es 2^64.
```