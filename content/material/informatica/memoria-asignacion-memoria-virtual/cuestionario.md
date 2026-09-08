# Informatica — Memoria asignacion memoria virtual (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Memoria Virtual

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual es una técnica que permite a un proceso utilizar una cantidad de memoria que excede la capacidad de la memoria física (RAM) disponible, utilizando parte del almacenamiento secundario como extensión."

explicacion: |
  Correcto. La memoria virtual permite que el sistema operativo gestione la memoria de forma abstracta, permitiendo ejecutar programas más grandes que la RAM física mediante el uso de paginación o segmentación en el disco.
```

### 2 — El rol de la MMU

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["hardware", "direccionamiento"]

respuesta: "dirección lógica"
tipo: mc

opciones_explicitas: ["dirección lógica", "dirección física", "dirección de disco", "dirección de caché"]

enunciado: "En un sistema con memoria virtual, la unidad de gestión de memoria (MMU) es el componente de hardware encargado de traducir la ___ en una dirección física."

explicacion: |
  La MMU (Memory Management Unit) es el componente encargado de la traducción de direcciones lógicas (generadas por la CPU) a direcciones físicas (ubicadas en la RAM).
```

### 3 — Componentes de la gestión de memoria

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["terminologia", "paginacion"]

respuesta_orden: ["Paginación", "Segmentación", "Direccionamiento"]
tipo: ordenar

opciones_explicitas: ["Paginación", "Segmentación", "Direccionamiento"]

enunciado: "Ordena los conceptos de mayor a menor nivel de abstracción en la gestión de memoria (desde la división de memoria en bloques de tamaño fijo hasta la traducción de direcciones):"

explicacion: |
  La paginación divide la memoria en trozos fijos, la segmentación divide la memoria en unidades lógicas de tamaño variable, y el direccionamiento es el proceso final de localización.
```

### 4 — El fenómeno de la Paginación

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "errores"]

respuesta: "page fault"
tipo: completar

respuestas_validas:
  - "page fault"
  - "error de paginación"
  - "fallo de página"

enunciado: "Cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria física, se produce un evento conocido como ___."

explicacion: |
  Un 'page fault' (fallo de página) es una interrupción generada por el hardware que indica que la página requerida debe ser cargada desde el disco a la RAM.
```

### 5 — Memoria Física vs. Virtual

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: uno_de([[16, 128], [32, 256], [64, 512]])

respuesta: datos[1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema tiene una memoria RAM física de {datos[0]} GB y se implementa memoria virtual, la capacidad de direccionamiento lógico total para un proceso puede llegar a ser de hasta {datos[1]} GB."

pasos:
  - "Identificar la capacidad de la RAM física."
  - "Asociar la capacidad de direccionamiento virtual como un valor superior a la física."

explicacion: |
  La memoria virtual permite que el espacio de direcciones lógicas sea significativamente mayor que la memoria física instalada.
```

### 6 — Concepto de Memoria Virtual

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_memoria"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que excede la capacidad física de la memoria RAM disponible, utilizando el almacenamiento secundario como extensión."

explicacion: |
  La memoria virtual es una técnica de gestión de memoria que utiliza el espacio en el disco duro para simular memoria RAM adicional, permitiendo ejecutar procesos más grandes que la RAM física.
```

### 7 — Cálculo de Espacio en Memoria

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["calculo", "paginacion"]

variables:
  escenario: uno_de([["4096", "4096", "1024", "4"], ["8192", "8192", "4096", "2"], ["1024", "1024", "512", "2"]])

respuesta: escenario[3]
tipo: mc
opciones_explicitas: ["1", "2", "4", "8"]

enunciado: "Un proceso requiere un bloque de memoria de {escenario[0]} bytes. Si el sistema utiliza páginas de tamaño fijo de {escenario[2]} bytes, ¿cuántas páginas se deben asignar para cubrir el requerimiento total del proceso?"

pasos:
  - "Dividir el tamaño total del proceso por el tamaño de la página: {escenario[0]} / {escenario[2]}"
  - "Si el resultado no es entero, redondear hacia arriba (ceil) para asegurar que el proceso quepa."

explicacion: |
  Para calcular el número de páginas: 
  {escenario[0]} / {escenario[2]} = {escenario[3]}. 
  Se requiere asignar exactamente esa cantidad de páginas.
```

### 8 — Fragmentación Interna

```
metadata:
  materia: "informatica"
  tema: "fragmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "fragmentacion_interna"]

variables:
  datos: uno_de([["15000", "4096", "1384"], ["18000", "4096", "2480"], ["10000", "4096", "2288"]])

respuesta: datos[2]
tipo: completar
respuestas_validas:
  - "1384"
  - "2480"
  - "2288"

enunciado: "En un sistema con paginación de {datos[1]} bytes, se asigna un proceso de {datos[0]} bytes. La fragmentación interna (espacio desperdiciado en la última página) es de ___ bytes."

explicacion: |
  1. Calculamos cuántas páginas completas se necesitan: ceil({datos[0]} / {datos[1]}) páginas.
  2. Espacio total asignado: número de páginas * {datos[1]}.
  3. Fragmentación: espacio total asignado - {datos[0]} = {datos[2]}.
```

### 9 — Ciclo de Intercambio (Swapping)

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["swapping", "gestion_procesos"]

respuesta_orden: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]
tipo: ordenar

enunciado: "Ordene los pasos que ocurren cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria RAM (Page Fault):"

opciones_explicitas: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]

explicacion: |
  El flujo lógico es:
  1. El proceso solicita una dirección de memoria.
  2. La MMU detecta que la página no está en RAM (Page Fault).
  3. El SO busca la página en el disco y la carga en RAM (Swap-in).
  4. Se actualiza la tabla de páginas para marcar la página como presente.
```

### 10 — Desplazamiento de Página

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_virtual"
  nivel: "avanzado"
  tags: ["direccionamiento", "paginacion"]

variables:
  direccion: uno_de([["0x0045", "0x0005"], ["0x01A2", "0x0002"], ["0x03FF", "0x000F"]])

respuesta: direccion[1]
tipo: mc
opciones_explicitas: ["0x0000", "0x0005", "0x0002", "0x000F"]

enunciado: "Si el tamaño de página es de 16 bytes (0x10 en hex) y una dirección virtual es {direccion[0]}, ¿cuál es el desplazamiento (offset) dentro de la página?"

pasos:
  - "El desplazamiento se obtiene calculando el residuo de la dirección dividido por el tamaño de la página."
  - "En hexadecimal: {direccion[0]} MOD 0x10 = {direccion[1]}."

explicacion: |
  El desplazamiento (offset) identifica la posición exacta dentro de una página. Se calcula mediante la operación módulo: {direccion[0]} % 16 = {direccion[1]}.
```

### 11 — El mito de la memoria física

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos_base"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria virtual permite que un proceso acceda a una cantidad de memoria que excede la capacidad de la memoria RAM física instalada en el sistema."

explicacion: |
  Verdadero. La memoria virtual utiliza espacio en el disco (archivo de paginación/swap) para simular memoria adicional, permitiendo que el sistema operativo gestione procesos que requieren más espacio del que la RAM física puede ofrecer de forma inmediata.
```

### 12 — Fragmentación y asignación

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["fragmentacion", "gestion_memoria"]

variables:
  escenario: uno_de([["fragmentacion_externa", "la memoria tiene huecos libres pero no contiguos"], ["fragmentacion_interna", "la memoria tiene espacio sobrante dentro de un bloque asignado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["la memoria tiene huecos libres pero no contiguos", "la memoria tiene espacio sobrante dentro de un bloque asignado", "el procesador no puede acceder a la RAM"]

enunciado: "Un sistema operativo utiliza particiones fijas para la asignación de memoria. Si un proceso requiere 15KB y se le asigna un bloque de 20KB, el espacio sobrante de 5KB dentro de ese bloque se conoce como: {escenario[1]}"

explicacion: |
  La fragmentación interna ocurre cuando se asigna un bloque de memoria a un proceso que es mayor que el tamaño requerido por este, dejando un residuo inutilizable dentro de la partición asignada.
```

### 13 — El proceso de paginación

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "direccionamiento"]

respuesta_orden: ["Dirección lógica", "MMU", "Dirección física"]
tipo: ordenar

opciones_explicitas: ["Dirección lógica", "MMU", "Dirección física"]

enunciado: "Ordena el flujo de resolución de una dirección de memoria cuando un proceso intenta acceder a un dato en un sistema con paginación:"

explicacion: |
  El proceso comienza con la dirección lógica generada por la CPU, la cual es interceptada por la Unidad de Gestión de Memoria (MMU) para ser traducida mediante tablas de páginas, resultando finalmente en una dirección física en la RAM.
```

### 14 — El error de la "Falsa Memoria"

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["page_fault", "rendimiento"]

respuesta: "page_fault"
tipo: completar
respuestas_validas:
  - "page_fault"

enunciado: "Cuando un proceso intenta acceder a una página de memoria que no se encuentra actualmente cargada en la memoria RAM, se produce una excepción llamada ___."

explicacion: |
  El 'page fault' (falta de página) no es un error fatal del programa, sino una interrupción que le indica al sistema operativo que debe buscar la página necesaria en el disco para cargarla en la RAM.
```

### 15 — Capacidad de direccionamiento

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "intermedio"
  tags: ["bus_direcciones", "arquitectura"]

variables:
  pares: [[32, 4294967296], [64, 18446744073709551616]]
  idx: uno_de([0, 1])
  bits: pares[idx][0]
  max_direccion: pares[idx][1]

respuesta: max_direccion

tipo: completar
tolerancia_abs: 0

enunciado: "Si un procesador tiene un bus de direcciones de {bits} bits, el número total de direcciones de memoria únicas que puede direccionar es:"

explicacion: |
  El número de direcciones posibles es igual a 2 elevado a la potencia del número de bits del bus de direcciones. Para 32 bits es 2^32, y para 64 bits es 2^64.
```

### 16 — Memoria Virtual vs Memoria Física

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

### 17 — Segmentación vs Paginación

```
metadata:
  materia: "informatica"
  tema: "gestion_de_memoria"
  nivel: "avanzado"
  tags: ["paginacion", "segmentacion", "fragmentacion"]

respuesta: "externa"
tipo: mc
opciones_explicitas: ["interna", "externa"]

enunciado: "La paginación divide la memoria en bloques de tamaño fijo, lo que puede causar fragmentación interna. Por el contrario, la segmentación, al usar tamaños variables, suele provocar fragmentación ___."

explicacion: |
  La paginación causa fragmentación interna (espacio sobrante dentro de una página), mientras que la segmentación causa fragmentación externa (huecos entre segmentos que no son lo suficientemente grandes para nuevos procesos).
```

### 18 — ¿Es la Memoria Virtual una extensión física?

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

### 19 — Proceso de intercambio de páginas

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "swap", "paged_fault"]

respuesta_orden: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]
tipo: ordenar

opciones_explicitas: ["Page Fault", "Swap In", "Update Page Table", "Resume Execution"]

enunciado: "Cuando un proceso intenta acceder a una página que no está en la RAM, ocurre un 'Page Fault'. Ordena los pasos lógicos que el Sistema Operativo debe seguir para resolver esta interrupción:"

explicacion: |
  1. Se detecta el Page Fault (interrupción).
  2. Se busca la página en el disco y se carga en RAM (Swap In).
  3. Se actualiza la tabla de páginas para marcarla como presente.
  4. Se reanuda la ejecución de la instrucción original.
```

### 20 — El concepto de Espacio de Direcciones

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["direcciones", "logico", "fisico"]

respuesta: "lógico"
tipo: completar
respuestas_validas:
  - "lógico"
  - "virtual"

enunciado: "Mientras que la memoria física se refiere a las direcciones reales en los chips de RAM, el espacio de direcciones que ve un proceso es un espacio ___."

explicacion: |
  El espacio de direcciones lógico (o virtual) es la vista que el procesador y el software tienen de la memoria, la cual es mapeada a direcciones físicas mediante la MMU (Memory Management Unit).
```

### 21 — El proceso de segmentación

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "segmentacion", "procesos"]

variables:
  datos: [["segmento_codigo", "0x0040"], ["segmento_datos", "0x0080"], ["segmento_stack", "0x0120"]]
  resultados: ["1040", "1080", "1120"]
  idx: uno_de([0, 1, 2])

enunciado: "Un sistema operativo utiliza segmentación para gestionar la memoria de un proceso. Si el proceso requiere cargar el {datos[idx][0]} en una dirección base específica, la dirección física final será el resultado de sumar la base más el offset. Si la base es 0x1000 y el offset es {datos[idx][1]}, ¿cuál es la dirección física resultante en hexadecimal (sin el prefijo 0x)?"

pasos:
  - "Convertir el offset hexadecimal a decimal."
  - "Sumar el valor de la base (4096) al offset."
  - "Convertir el resultado de nuevo a hexadecimal."

respuestas_validas:
  - "1040"
  - "1080"
  - "1120"
respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0

explicacion: |
  La dirección física se calcula sumando la dirección base del segmento al offset relativo.
  Para el caso de {datos[idx][0]}, la suma es 0x1000 + {datos[idx][1]} = 0x{resultados[idx]}.
```

### 22 — Concepto de Memoria Virtual

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["memoria_virtual", "conceptos"]

enunciado: "La memoria virtual permite que un proceso utilice una cantidad de memoria que es mayor a la capacidad de la memoria RAM física disponible, utilizando el almacenamiento secundario (disco) como extensión. ¿Es esta afirmación verdadera o falsa?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. La memoria virtual abstrae la memoria física, permitiendo que los programas se ejecuten incluso si la RAM es insuficiente, mediante el uso de paginación o segmentación y el intercambio (swapping) con el disco.
```

### 23 — El rol de la MMU

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["mmu", "direccionamiento"]

enunciado: "Cuando un proceso intenta acceder a una dirección de memoria virtual, un componente de hardware especializado debe traducir esa dirección a una dirección física real. ¿Cómo se llama este componente?"

opciones_explicitas: ["MMU (Memory Management Unit)", "CPU (Central Processing Unit)", "ALU (Arithmetic Logic Unit)", "Controlador de Interrupciones"]
respuesta: "MMU (Memory Management Unit)"
tipo: mc

explicacion: |
  La MMU es la unidad de hardware encargada de la traducción de direcciones virtuales a físicas en tiempo real durante la ejecución de las instrucciones.
```

### 24 — Gestión de Paginación

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["paginacion", "paginas", "frames"]

variables:
  datos: [["pagina_virtual_2", "frame_fisico_5"], ["pagina_virtual_3", "frame_fisico_8"], ["pagina_virtual_5", "frame_fisico_12"]]
  resultados: [20480, 32768, 49152]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de paginación, la tabla de páginas mapea la {datos[idx][0]} hacia el {datos[idx][1]}. Si el tamaño de página es de 4KB, ¿en qué dirección física comienza el {datos[idx][1]}?"

pasos:
  - "Identificar el número de frame físico: {datos[idx][1]}."
  - "Multiplicar el número de frame por el tamaño de página (4096)."
  - "El resultado es la dirección base del frame."

respuesta: resultados[idx]
tipo: completar
tolerancia_abs: 0

explicacion: |
  Si el frame físico es el {datos[idx][1]} (índice 5, 8 o 12), la dirección base se calcula como:
  Frame * 4096. Por ejemplo, si es el frame 5: 5 * 4096 = 20480.
```

### 25 — Ciclo de vida de la memoria

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["gestion", "orden"]

enunciado: "Ordena los pasos que sigue el Sistema Operativo desde que un proceso solicita memoria hasta que esta es liberada:"

opciones_explicitas: ["El SO asigna un bloque de memoria (física o virtual)", "El proceso solicita memoria mediante una llamada al sistema", "El proceso finaliza y el SO libera la memoria", "El proceso utiliza la memoria para sus datos"]
respuesta_orden: ["El proceso solicita memoria mediante una llamada al sistema", "El SO asigna un bloque de memoria (física o virtual)", "El proceso utiliza la memoria para sus datos", "El proceso finaliza y el SO libera la memoria"]
tipo: ordenar

explicacion: |
  El flujo lógico es: 1. Solicitud (System Call), 2. Asignación (Gestión de memoria), 3. Uso (Ejecución), 4. Liberación (Cleanup).
```
