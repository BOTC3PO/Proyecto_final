# Examen jefe — Maestro de Memorias y Bases

> Logro #176. Aprobaste el parcial dominando jerarquías de memoria, bases relacionales y planillas de cálculo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: memoria-asignacion-memoria-virtual (25 preguntas)

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

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["hardware", "direccionamiento"]

variables:
  escenario: uno_de([["dirección lógica", "dirección física"], ["dirección física", "dirección lógica"]])

respuesta: escenario[0
tipo: mc

opciones_explicitas: ["dirección lógica", "dirección física", "dirección de disco", "dirección de caché"]

enunciado: "En un sistema con memoria virtual, la unidad de gestión de memoria (MMU) es el componente de hardware encargado de traducir la {escenario[0]} en una {escenario[1]}."

explicacion: |
  La MMU (Memory Management Unit) es el componente encargado de la traducción de direcciones lógicas (generadas por la CPU) a direcciones físicas (ubicadas en la RAM).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["terminologia", "paginacion"]

respuesta: ["Paginación", "Segmentación", "Direccionamiento"]
tipo: ordenar

opciones_explicitas: ["Paginación", "Segmentación", "Direccionamiento"]

enunciado: "Ordena los conceptos de mayor a menor nivel de abstracción en la gestión de memoria (desde la división de memoria en bloques de tamaño fijo hasta la traducción de direcciones):"

explicacion: |
  La paginación divide la memoria en trozos fijos, la segmentación divide la memoria en unidades lógicas de tamaño variable, y el direccionamiento es el proceso final de localización.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "intermedio"
  tags: ["paginacion", "errores"]

respuesta: "page fault"
tipo: completar

respuestas_validas: ["page fault", "error de paginación", "fallo de página"]

enunciado: "Cuando un proceso intenta acceder a una página que no se encuentra actualmente en la memoria física, se produce un evento conocido como ___."

explicacion: |
  Un 'page fault' (fallo de página) es una interrupción generada por el hardware que indica que la página requerida debe ser cargada desde el disco a la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  datos: uno_de([[16, 128], [32, 256], [64, 512]])

respuesta: datos[1
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema tiene una memoria RAM física de {datos[0]} GB y se implementa memoria virtual, la capacidad de direccionamiento lógico total para un proceso puede llegar a ser de hasta {datos[1]} GB."

pasos:
  - "Identificar la capacidad de la RAM física."
  - "Asociar la capacidad de direccionamiento virtual como un valor superior a la física."

explicacion: |
  La memoria virtual permite que el espacio de direcciones lógicas sea significativamente mayor que la memoria física instalada.
```

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

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["calculo", "paginacion"]

variables:
  escenario: uno_de([
    ["4096", "4096"],
    ["8192", "8192"],
    ["1024", "1024"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["1024", "2048", "4096", "8192"]

enunciado: "Un proceso requiere un bloque de memoria de {escenario[0]} bytes. Si el sistema utiliza páginas de tamaño fijo de {escenario[2]} bytes, ¿cuántas páginas se deben asignar para cubrir el requerimiento total del proceso?"

pasos:
  - "Dividir el tamaño total del proceso por el tamaño de la página: {escenario[0]} / {escenario[2]}"
  - "Si el resultado no es entero, redondear hacia arriba (ceil) para asegurar que el proceso quepa."

explicacion: |
  Para calcular el número de páginas: 
  {escenario[0]} / {escenario[2]} = {escenario[1]}. 
  Se requiere asignar exactamente esa cantidad de páginas.
```

```
metadata:
  materia: "informatica"
  tema: "fragmentacion"
  nivel: "intermedio"
  tags: ["paginacion", "fragmentacion_interna"]

variables:
  datos: uno_de([
    ["15000", "4096", "14048"],
    ["18000", "4096", "17856"],
    ["10000", "4096", "9408"]
  ])

respuesta: datos[2
tipo: completar
respuestas_validas: ["14048", "17856", "9408"]

enunciado: "En un sistema con paginación de {datos[1]} bytes, se asigna un proceso de {datos[0]} bytes. La fragmentación interna (espacio desperdiciado en la última página) es de ___ bytes."

explicacion: |
  1. Calculamos cuántas páginas completas se necesitan: ceil({datos[0]} / {datos[1]}) = 4 páginas.
  2. Espacio total asignado: 4 * {datos[1]} = 16384 (en el primer caso).
  3. Fragmentación: 16384 - {datos[0]} = {datos[2]}.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["swapping", "gestion_procesos"]

respuesta: ["Petición de memoria", "Fallo de página (Page Fault)", "Intercambio (Swap-in/out)", "Actualización de tabla de páginas"]
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

```
metadata:
  materia: "informatica"
  tema: "direccionamiento_virtual"
  nivel: "avanzado"
  tags: ["direccionamiento", "paginacion"]

variables:
  direccion: uno_de([
    ["0x0045", "0x0005"],
    ["0x01A2", "0x01A2"],
    ["0x03FF", "0x03FF"]
  ])

respuesta: direccion[1
tipo: mc
opciones_explicitas: ["0x0000", "0x0005", "0x01A2", "0x03FF"]

enunciado: "Si el tamaño de página es de 16 bytes (0x10 en hex) y una dirección virtual es {direccion[0]}, ¿cuál es el desplazamiento (offset) dentro de la página?"

pasos:
  - "El desplazamiento se obtiene calculando el residuo de la dirección dividido por el tamaño de la página."
  - "En hexadecimal: {direccion[0]} MOD 0x10 = {direccion[1]}."

explicacion: |
  El desplazamiento (offset) identifica la posición exacta dentro de una página. Se calcula mediante la operación módulo: {direccion[0]} % 16 = {direccion[1]}.
```

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

```
metadata:
  materia: "informatica"
  tema: "asignacion_de_memoria"
  nivel: "intermedio"
  tags: ["fragmentacion", "gestion_memoria"]

variables:
  escenario: uno_de([["fragmentacion_externa", "la memoria tiene huecos libres pero no contiguos"], ["fragmentacion_interna", "la memoria tiene espacio sobrante dentro de un bloque asignado"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["la memoria tiene huecos libres pero no contiguos", "la memoria tiene espacio sobrante dentro de un bloque asignado", "el procesador no puede acceder a la RAM"]

enunciado: "Un sistema operativo utiliza particiones fijas para la asignación de memoria. Si un proceso requiere 15KB y se le asigna un bloque de 20KB, el espacio sobrante de 5KB dentro de ese bloque se conoce como: {escenario[1]}"

explicacion: |
  La fragmentación interna ocurre cuando se asigna un bloque de memoria a un proceso que es mayor que el tamaño requerido por este, dejando un residuo inutilizable dentro de la partición asignada.
```

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

```
metadata:
  materia: "informatica"
  tema: "direccionamiento"
  nivel: "intermedio"
  tags: ["bus_direcciones", "arquitectura"]

variables:
  bits: uno_de([32, 64])

respuesta: bits == 32 ? 4294967296 : 18446744073709551616

tipo: completar
tolerancia_abs: 0

enunciado: "Si un procesador tiene un bus de direcciones de {bits} bits, el número total de direcciones de memoria únicas que puede direccionar es:"

explicacion: |
  El número de direcciones posibles es igual a 2 elevado a la potencia del número de bits del bus de direcciones. Para 32 bits es 2^32, y para 64 bits es 2^64.
```

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

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "segmentacion", "procesos"]

variables:
  datos: [["segmento_codigo", "0x0040"], ["segmento_datos", "0x0080"], ["segmento_stack", "0x0120"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un sistema operativo utiliza segmentación para gestionar la memoria de un proceso. Si el proceso requiere cargar el {datos[idx][0]} en una dirección base específica, la dirección física final será el resultado de sumar la base más el offset. Si la base es 0x1000 y el offset es {datos[idx][1]}, ¿cuál es la dirección física resultante en hexadecimal (sin el prefijo 0x)?"

pasos:
  - "Convertir el offset hexadecimal a decimal."
  - "Sumar el valor de la base (4096) al offset."
  - "Convertir el resultado de nuevo a hexadecimal."

respuestas_validas: ["1120"]
respuesta: "1120"
tipo: completar
tolerancia_abs: 0

explicacion: |
  La dirección física se calcula sumando la dirección base del segmento al offset relativo. 
  Para el caso de {datos[idx][0]}, la suma es 0x1000 + {datos[idx][1]} = 0x1120.
```

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

```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["paginacion", "paginas", "frames"]

variables:
  datos: [["pagina_virtual_2", "frame_fisico_5"], ["pagina_virtual_3", "frame_fisico_8"], ["pagina_virtual_5", "frame_fisico_12"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de paginación, la tabla de páginas mapea la {datos[idx][0]} hacia el {datos[idx][1]}. Si el tamaño de página es de 4KB, ¿en qué dirección física comienza el {datos[idx][1]}?"

pasos:
  - "Identificar el número de frame físico: {datos[idx][1]}."
  - "Multiplicar el número de frame por el tamaño de página (4096)."
  - "El resultado es la dirección base del frame."

respuestas_validas: ["{redondear(datos[idx][1].replace('frame_fisico_', ''), 0) * 4096}"]
respuesta: "{redondear(datos[idx][1].replace('frame_fisico_', ''), 0) * 4096}"
tipo: completar
tolerancia_abs: 0

explicacion: |
  Si el frame físico es el {datos[idx][1]} (índice 5, 8 o 12), la dirección base se calcula como:
  Frame * 4096. Por ejemplo, si es el frame 5: 5 * 4096 = 20480.
```

```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["gestion", "orden"]

enunciado: "Ordena los pasos que sigue el Sistema Operativo desde que un proceso solicita memoria hasta que esta es liberada:"

opciones_explicitas: ["El SO asigna un bloque de memoria (física o virtual)", "El proceso solicita memoria mediante una llamada al sistema", "El proceso finaliza y el SO libera la memoria", "El proceso utiliza la memoria para sus datos"]
respuesta: ["El proceso solicita memoria mediante una llamada al sistema", "El SO asigna un bloque de memoria (física o virtual)", "El proceso utiliza la memoria para sus datos", "El proceso finaliza y el SO libera la memoria"]
tipo: ordenar

explicacion: |
  El flujo lógico es: 1. Solicitud (System Call), 2. Asignación (Gestión de memoria), 3. Uso (Ejecución), 4. Liberación (Cleanup).
```

## Sección: memoria-ram-cache-jerarquia (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

tipo: mc
opciones_explicitas: ["Mayor velocidad, menor capacidad", "Menor velocidad, mayor capacidad", "Igual velocidad, mayor costo", "Mayor velocidad, mayor costo"]

enunciado: "En una jerarquía de memoria típica, a medida que nos movemos desde la CPU hacia el almacenamiento secundario (disco), la memoria se vuelve..."

respuesta: "Menor velocidad, mayor capacidad"

explicacion: |
  La jerarquía busca equilibrar costo y rendimiento. Los niveles superiores (Caché) son muy rápidos pero caros y pequeños; los niveles inferiores (Disco) son lentos pero económicos y masivos.
```

```
metadata:
  materia: "informatica"
  tema: "ram_caracteristicas"
  nivel: "basico"
  tags: ["ram", "volatilidad"]

tipo: vf

enunciado: "La memoria RAM es considerada una memoria volátil porque pierde su contenido al interrumpirse el suministro eléctrico."

respuesta: falso

explicacion: |
  La RAM es volátil por definición. Si no hay energía, los datos almacenados en sus capacitores se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "cache_funcionamiento"
  nivel: "intermedio"
  tags: ["cache", "latencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["L1", "L2", "L3"], ["L1", "L3", "L2"]]

tipo: completar
respuestas_validas: ["L1", "L2", "L3"]

enunciado: "En una arquitectura con múltiples niveles de caché, la caché que se encuentra físicamente más cerca del núcleo del procesador es la caché ___."

pasos:
  - "Identificar la posición de la caché en la jerarquía respecto al procesador."
  - "Determinar cuál tiene la menor latencia de acceso."

respuesta: "L1"

explicacion: |
  La caché L1 (Level 1) es la más rápida y cercana al núcleo, seguida de la L2 y finalmente la L3.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad de acceso (del más rápido al más lento):"

respuesta: ["Registros", "Caché", "Memoria RAM", "Disco Duro"]

explicacion: |
  Los registros están dentro de la CPU y son instantáneos. La caché es la siguiente, luego la RAM (memoria principal) y finalmente el almacenamiento masivo (disco).
```

```
metadata:
  materia: "informatica"
  tema: "cache_principio_localidad"
  nivel: "avanzado"
  tags: ["localidad", "cache"]

tipo: mc
opciones_explicitas: ["Localidad Espacial", "Localidad Temporal", "Localidad de Datos", "Localidad de Instrucciones"]

enunciado: "Cuando un sistema carga un bloque de memoria porque se ha accedido a una dirección específica, asumiendo que las direcciones contiguas serán accedidas pronto, está aprovechando la ___."

respuesta: "Localidad Espacial"

explicacion: |
  La localidad espacial se refiere al uso de datos cercanos en direcciones de memoria. La localidad temporal se refiere al reuso de un mismo dato en un corto periodo de tiempo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["hardware", "memoria", "cache"]

variables:
  idx: uno_de([0, 1])
  datos: [["rápida", "pequeña"], ["lenta", "grande"]]

enunciado: "En una jerarquía de memoria típica, si comparamos la memoria caché L1 con la memoria RAM, la caché L1 es más ___ que la RAM, pero tiene una capacidad ___."

opciones_explicitas: ["rápida", "lenta", "pequeña", "grande"]

respuesta: datos[idx][0]

tipo: mc

explicacion: |
  La jerarquía de memoria busca equilibrar costo, capacidad y velocidad. La caché (L1, L2, L3) es mucho más rápida que la RAM porque está más cerca del procesador y usa tecnología más costosa, lo que obliga a que su capacidad sea mucho menor.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "localidad", "performance"]

enunciado: "Un procesador accede a una lista de elementos en orden consecutivo (0, 1, 2, 3...). Este tipo de comportamiento favorece la eficiencia de la caché debido a la localidad de referencia, la cual es de tipo ___."

opciones_explicitas: ["espacial", "temporal", "aleatoria"]

respuesta: "espacial"

tipo: mc

explicacion: |
  La localidad espacial ocurre cuando se accede a una posición de memoria y se accede rápidamente a posiciones cercanas. Esto permite que la caché cargue bloques enteros (cache lines) prediciendo que los datos contiguos serán necesarios pronto.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["cache", "hit", "miss"]

variables:
  caso: uno_de([0, 1])
  resultado: [["hit", "encontrado"], ["miss", "no encontrado"]]

enunciado: "El procesador solicita el dato en la dirección 0x4F. La unidad de control busca en la caché L1 y el dato no se encuentra allí. A este evento se le denomina ___ y el sistema deberá buscar el dato en la siguiente capa de la jerarquía."

respuestas_validas: ["miss", "hit"]

respuesta: resultado[caso][0

tipo: completar

explicacion: |
  Un 'Cache Miss' ocurre cuando el dato requerido no está en la caché, obligando al sistema a buscar en un nivel más lento (como la RAM), lo que aumenta la latencia de la operación.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["jerarquia", "orden"]

opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

respuesta: ["Registros", "Caché L1", "Memoria RAM", "Disco Rígido"]

tipo: ordenar

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros son parte del CPU y son instantáneos; la Caché es muy rápida; la RAM es el almacenamiento principal de trabajo; y el Disco Rígido (almacenamiento masivo) es el más lento de la cadena.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["costo", "capacidad"]

variables:
  afirmacion: uno_de([0, 1])
  es_cierto: [[verdadero, "La memoria RAM es más cara por GB que el disco duro"], [falso, "La memoria RAM es más barata por GB que el disco duro"]]

enunciado: "La memoria RAM tiene un costo por gigabyte significativamente mayor que un disco duro (HDD/SSD)."

respuesta: es_cierto[afirmacion][0

tipo: completar
explicacion: |
  Es verdadero. Debido a que la RAM utiliza tecnología semiconductoras mucho más rápida y compleja para mantener los datos, su costo por unidad de capacidad es mucho más elevado que el de los medios de almacenamiento masivo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "costo", "velocidad"]

enunciado: "En una arquitectura de memoria jerárquica, si comparamos la memoria caché, la memoria RAM y el disco duro, ¿cuál de ellas tiene el mayor costo por byte?"

opciones_explicitas: ["Disco duro", "Memoria RAM", "Memoria caché"]
respuesta: "Memoria caché"
tipo: mc

explicacion: |
  La jerarquía de memoria busca un equilibrio entre costo y rendimiento. Las memorias más rápidas (como la caché) utilizan tecnología más cara (SRAM) y tienen menos capacidad, mientras que las más lentas (como el disco duro) son mucho más económicas por cada GB almacenado.
```

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "intermedio"
  tags: ["latencia", "velocidad", "confucion"]

variables:
  es_falso: falso

enunciado: "Un error común es pensar que tener más capacidad de RAM (ej. 64GB vs 16GB) aumenta automáticamente la velocidad de procesamiento de una tarea que ya cabe en 16GB. ¿Es esto verdadero o falso?"

respuesta: es_falso
tipo: completar
explicacion: |
  La capacidad de la RAM determina cuánta información puede estar disponible para la CPU. Si el software ya cabe en la memoria disponible, aumentar la capacidad no acelera la ejecución; lo que acelera la ejecución es la velocidad de acceso (frecuencia) y la latencia, no el tamaño total.
```

```
metadata:
  materia: "informatica"
  tema: "cache_procesador"
  nivel: "intermedio"
  tags: ["cache", "cpu", "acceso"]

variables:
  datos: [["L1", "muy rápida"], ["L2", "rápida"], ["L3", "moderada"]]
  idx: uno_de([0,1,2])

enunciado: "Considerando la jerarquía de la caché del procesador, la caché de nivel {datos[idx][0]} es la que ofrece la latencia de acceso más baja, siendo la {datos[idx][1]} de todas las memorias principales."

respuesta: datos[idx][0
tipo: completar
respuestas_validas: ["L1", "L2", "L3"]

explicacion: |
  La caché L1 es la más cercana al núcleo del procesador, integrada directamente en él, lo que la hace extremadamente rápida pero de muy pequeña capacidad.
```

```
metadata:
  materia: "informatica"
  tema: "principio_localidad"
  nivel: "avanzado"
  tags: ["localidad_temporal", "localidad_espacial"]

enunciado: "La eficiencia de la memoria caché se basa en dos principios: la localidad temporal (reutilizar datos usados recientemente) y la localidad {___} (usar datos que están en direcciones de memoria cercanas)."

pasos:
  - "Identificar el tipo de localidad que complementa a la temporal."

respuesta: "espacial"
tipo: completar
respuestas_validas: ["espacial", "secuencial", "distante"]

explicacion: |
  La localidad espacial implica que si se accede a una posición de memoria, es muy probable que pronto se acceda a las posiciones adyacentes. La caché aprovecha esto cargando bloques enteros (cache lines) en lugar de bytes individuales.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["orden", "velocidad", "jerarquia"]

enunciado: "Ordena los siguientes componentes de memoria de mayor a menor velocidad de acceso (el más rápido primero):"

opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
respuesta: ["Caché L1", "Memoria RAM", "Disco SSD", "Disco HDD"]
tipo: ordenar

explicacion: |
  La jerarquía sigue un orden lógico: a medida que nos alejamos del núcleo de la CPU, la velocidad de acceso disminuye drásticamente, pero la capacidad y la economía mejoran.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "basico"
  tags: ["memoria", "ram", "cache"]

respuesta: "cache"
tipo: completar
respuestas_validas: ["cache", "caché"]

enunciado: "En la jerarquía de memoria, la ___ es un tipo de memoria de acceso muy rápido situada entre el procesador y la memoria RAM para reducir el tiempo de espera."

explicacion: |
  La memoria caché es mucho más rápida que la RAM pero tiene mucha menos capacidad. Su función es almacenar copias de los datos que el procesador utiliza con más frecuencia para evitar tener que ir a la RAM (que es más lenta).
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["costo", "capacidad", "jerarquia"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

enunciado: "Si comparamos la memoria RAM con la memoria Caché, la RAM se caracteriza por tener una ___."

datos:
  - ["Menor capacidad y mayor costo por bit", "Mayor capacidad y menor costo por bit"]
  - ["Mayor capacidad y menor costo por bit", "Menor capacidad y mayor costo por bit"]

explicacion: |
  En la jerarquía de memoria, cuanto más cerca está la memoria del núcleo del procesador (como la caché L1), más cara es y menos capacidad tiene. La RAM es más barata y permite almacenar mucha más información, pero es más lenta.
```

```
metadata:
  materia: "informatica"
  tema: "propiedades_memoria"
  nivel: "basico"
  tags: ["volatilidad", "ram", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria RAM es una memoria volátil, lo que significa que pierde toda la información almacenada cuando se corta el suministro eléctrico."

explicacion: |
  Correcto. A diferencia del disco duro (almacenamiento secundario), la RAM necesita energía para mantener los datos. Si apagas la computadora, los datos en la RAM se borran.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "intermedio"
  tags: ["orden", "velocidad", "jerarquia"]

respuesta: ["Registros", "Caché L1", "RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de mayor a menor velocidad de acceso (del más rápido al más lento):"

explicacion: |
  La jerarquía se organiza por velocidad: los Registros están dentro de la CPU (ultra rápidos), seguidos por la Caché (L1, L2, L3), luego la RAM y finalmente el almacenamiento masivo como el Disco Duro (HDD/SSD), que es mucho más lento pero permite guardar datos permanentemente.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_de_memoria"
  nivel: "avanzado"
  tags: ["eficiencia", "costo", "arquitectura"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]

datos:
  - ["Maximizar la velocidad de acceso a los datos con un costo equilibrado", "Aumentar la capacidad total de almacenamiento del sistema"]
  - ["Aumentar la capacidad total de almacenamiento del sistema", "Maximizar la velocidad de acceso a los datos con un costo equilibrado"]

enunciado: "El objetivo principal de implementar una jerarquía de memoria con distintos niveles es ___."

explicacion: |
  No es posible tener toda la memoria del sistema a la velocidad de la CPU porque sería extremadamente cara. La jerarquía permite que el sistema se comporte como si tuviera una memoria muy grande y muy rápida, equilibrando rendimiento y costo.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

variables:
  escenario_idx: uno_de([0,1,2])
  datos: [
    ["La memoria con mayor velocidad pero menor capacidad es la ___.", "Caché"],
    ["La memoria que es más lenta que la caché pero más rápida que el disco es la ___.", "RAM"],
    ["La memoria de mayor capacidad y menor costo por bit es el ___.", "Disco"]
  ]

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["Caché", "RAM", "Disco"]

enunciado: "Analizando la jerarquía de memoria, se observa que: {datos[escenario_idx][0]}"

explicacion: |
  En una jerarquía de memoria, cuanto más cerca está del procesador, más rápida y cara es (Caché), y cuanto más lejos, más lenta y económica es (Disco).
```

```
metadata:
  materia: "informatica"
  tema: "memoria_ram"
  nivel: "basico"
  tags: ["volatilidad", "hardware"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es una memoria de tipo no volátil, lo que significa que la información se mantiene grabada incluso si se apaga el ordenador."

explicacion: |
  Falso. La RAM es memoria volátil; requiere energía para mantener los datos almacenados. Al apagar el equipo, los datos se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["latencia", "rendimiento"]

variables:
  opcion_idx: uno_de([0,1])
  comparativa: [
    ["La caché L1 tiene una latencia ___ que la memoria RAM.", "menor"],
    ["La memoria RAM tiene una latencia ___ que la memoria caché L1.", "mayor"]
  ]

respuesta: comparativa[opcion_idx][1
tipo: mc
opciones_explicitas: ["menor", "mayor"]

enunciado: "Considerando el acceso a datos en un sistema computacional: {comparativa[opcion_idx][0]}"

explicacion: |
  La latencia es el tiempo de espera. La caché, al estar integrada en el procesador, responde mucho más rápido (menor latencia) que la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "intermedio"
  tags: ["orden", "arquitectura"]

respuesta: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]
tipo: ordenar
opciones_explicitas: ["Registros", "Caché L1", "Memoria RAM", "Disco Duro"]

enunciado: "Ordena los siguientes elementos de memoria de mayor a menor velocidad (del más rápido al más lento):"

explicacion: |
  La jerarquía correcta de velocidad es: Registros del CPU > Caché (L1, L2, L3) > Memoria RAM > Almacenamiento secundario (Disco).
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_memoria"
  nivel: "avanzado"
  tags: ["costo", "capacidad"]

variables:
  item_idx: uno_de([0,1])
  comparacion: [
    ["Si comparamos la Caché con la RAM, la caché tiene un costo por GB ___ que la RAM.", "mayor"],
    ["Si comparamos la RAM con el Disco Duro, la RAM tiene un costo por GB ___ que el disco.", "mayor"]
  ]

respuesta: comparacion[item_idx][1
tipo: mc
opciones_explicitas: ["mayor", "menor"]

enunciado: "En términos de arquitectura de computadores: {comparacion[item_idx][0]}"

explicacion: |
  Existe una relación inversa: a mayor velocidad de acceso, mayor es el costo por unidad de capacidad (GB/TB). Por eso las memorias rápidas son pequeñas y las lentas son masivas.
```

## Sección: modelo-relacional-tabla-registro-clave-primaria (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

tipo: mc
opciones_explicitas: ["Registro", "Atributo", "Relación", "Tupla"]

enunciado: "En el modelo relacional, una fila de una tabla que contiene un conjunto de datos relacionados se denomina:"

respuesta: "Registro"

explicacion: |
  En el modelo relacional, una tabla se compone de filas (registros o tuplas) y columnas (atributos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria"
  nivel: "basico"
  tags: ["clave_primaria", "identificador"]

tipo: vf

enunciado: "Una clave primaria (Primary Key) tiene la propiedad de permitir valores nulos (NULL) para asegurar la unicidad de los registros."

respuesta: falso

explicacion: |
  Una clave primaria debe ser única y, por definición, no puede contener valores nulos, ya que su función es identificar de forma inequívoca cada registro.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["tabla", "columna"]

tipo: completar
respuestas_validas: ["columna", "atributo"]

enunciado: "En una base de datos relacional, el conjunto de datos que define la estructura de una tabla (como el nombre y el tipo de dato) se conoce como ___."

respuesta: "columna"

explicacion: |
  Cada ___ representa una propiedad o característica de la entidad que estamos almacenando.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["orden", "estructura"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordene los siguientes elementos de mayor a menor nivel de jerarquía de datos:"

explicacion: |
  La jerarquía parte desde el contenedor global (Base de datos), contiene conjuntos de datos (Tablas), que contienen filas (Registros), las cuales se dividen en unidades mínimas de información (Campos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_propiedades"
  nivel: "intermedio"
  tags: ["clave_primaria", "unicidad"]

variables:
  escenario: uno_de([[1, "ID_Usuario"], [2, "DNI"], [3, "Codigo_Producto"]])
  campo_id: escenario[escenario[0]][1]

tipo: mc
opciones_explicitas: ["Puede repetirse en diferentes filas", "Debe ser única en toda la tabla", "Puede ser nula", "No tiene importancia para la integridad"]

enunciado: "Si definimos {escenario[0][1]} como la clave primaria de una tabla, esta debe cumplir con la propiedad de ser:"

respuesta: "Debe ser única en toda la tabla"

explicacion: |
  La función principal de la clave primaria es garantizar que no existan dos filas idénticas, permitiendo la identificación única de cada registro mediante el valor de {campo_id}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos"]

respuesta: "registro"
tipo: "completar"
respuestas_validas: ["registro", "fila"]

enunciado: "En el modelo relacional, una estructura que contiene una colección de datos organizados en columnas y filas se denomina tabla, mientras que cada una de las filas individuales que representan una entidad única se denomina ___."

explicacion: |
  Una tabla es la estructura completa, mientras que el registro (o fila) es la unidad mínima de información que representa un objeto o entidad específica dentro de esa tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["DNI", "Nombre", "Apellido"],
    ["ID_Producto", "Nombre_Prod", "Precio"]
  ]
  respuestas: [
    "DNI",
    "ID_Producto"
  ]

respuesta: datos[escenario_idx][0
tipo: "mc"
opciones_explicitas: ["DNI", "Nombre", "Apellido", "ID_Producto", "Precio", "Nombre_Prod"]

enunciado: "Considerando la tabla con el esquema {datos[escenario_idx]}, ¿cuál de los siguientes campos es el candidato ideal para actuar como clave primaria para asegurar que cada registro sea único?"

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre los registros. En el escenario {datos[escenario_idx][0]}, ese campo es {datos[escenario_idx][0]}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "reglas"]

respuesta: falso
tipo: "vf"

enunciado: "En un modelo relacional, una clave primaria puede contener valores nulos (NULL) para permitir que ciertos registros no tengan un identificador único asignado."

explicacion: |
  Falso. Una de las reglas de integridad de la clave primaria es la 'Integridad de Entidad', que prohíbe estrictamente que los campos que forman la clave primaria sean nulos.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "ordenar"]

respuesta: ["Identificar la entidad", "Definir los atributos", "Asignar la clave primaria"]
tipo: "ordenar"
opciones_explicitas: ["Definir los atributos", "Identificar la entidad", "Asignar la clave primaria"]

enunciado: "Para diseñar correctamente una tabla en un modelo relacional, se debe seguir un orden lógico de diseño. Ordena los siguientes pasos:"

pasos:
  - "Determinar qué objeto o concepto se quiere representar."
  - "Decidir qué propiedades tendrá ese objeto."
  - "Elegir el campo único que evitará duplicados."

explicacion: |
  Primero se identifica la entidad (ej. Usuario), luego sus atributos (ej. Nombre, Email) y finalmente se establece la clave primaria (ej. ID_Usuario).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "avanzado"
  tags: ["base_de_datos", "logica"]

variables:
  escenario_idx: uno_de([0, 1])
  valores_max: [100, 50]
  respuestas: [100, 50]

respuesta: valores_max[escenario_idx
tipo: "input"
tolerancia_abs: 0

enunciado: "Si una tabla de 'Clientes' tiene una clave primaria que solo permite valores numéricos del 1 al {valores_max[escenario_idx]}, ¿cuántos registros distintos se pueden almacenar como máximo sin violar la restricción de clave primaria?"

explicacion: |
  La clave primaria debe ser única. Si el rango de valores disponibles es de 1 a {valores_max[escenario_idx]}, el número máximo de registros es {valores_max[escenario_idx]}.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_conceptos_basicos"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "fila"
tipo: completar
respuestas_validas: ["fila", "registro"]

enunciado: "En el modelo relacional, una estructura de datos bidimensional se compone de columnas (atributos) y ___ (tuplas)."

explicacion: |
  En el modelo relacional, una tabla se compone de filas (también llamadas tuplas o registros) y columnas (atributos).
```

```
metadata:
  materia: "informatica"
  tema: "clave_primaria_caracteristicas"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  es_valido: uno_de([true, false])

respuesta: es_valido
tipo: completar
enunciado: "Si una tabla tiene una columna llamada 'Edad', ¿puede esta ser designada como la clave primaria de la tabla si existen múltiples personas con la misma edad?"

explicacion: |
  La clave primaria debe ser única para cada registro. Si dos filas tienen el mismo valor en la columna clave, el sistema no podría distinguirlas, violando el principio de integridad de entidad.
```

```
metadata:
  materia: "informatica"
  tema: "estructura_tabla"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: "columnas"
tipo: mc
opciones_explicitas: ["filas", "columnas", "celdas", "bases"]

enunciado: "Si un registro representa una entidad completa (como un usuario), las ___ representan las propiedades o características de esa entidad."

explicacion: |
  Las columnas definen la estructura y el tipo de datos de los atributos, mientras que las filas contienen los datos específicos de cada instancia.
```

```
metadata:
  materia: "informatica"
  tema: "integridad_entidad"
  nivel: "intermedio"
  tags: ["base_de_datos", "clave_primaria"]

respuesta: "ID_Estudiante"
tipo: completar
respuestas_validas: ["ID_Estudiante", "codigo_estudiante", "estudiante_id"]

enunciado: "Dada la siguiente tabla de 'Estudiantes':
| Nombre | Apellido | DNI |
|--------|----------|-----|
| Juan   | Perez    | 123 |
| Ana    | Lopez    | 456 |

Si queremos garantizar que no haya duplicados, la mejor opción para una clave primaria sería ___."

explicacion: |
  Aunque el DNI suele ser único, en el diseño de bases de datos se prefiere usar una clave artificial (como un ID) que sea inmutable y garantice la unicidad técnica sin depender de datos externos que podrían cambiar o repetirse por error.
```

```
metadata:
  materia: "informatica"
  tema: "jerarquia_relacional"
  nivel: "basico"
  tags: ["base_de_datos", "modelo_relacional"]

respuesta: ["Base de Datos", "Tabla", "Registro", "Atributo"]
tipo: ordenar
opciones_explicitas: ["Base de Datos", "Tabla", "Registro", "Atributo"]

enunciado: "Ordena los elementos de mayor a menor jerarquía en un modelo relacional (desde el contenedor global hasta el dato mínimo):"

explicacion: |
  La jerarquía lógica es: La Base de Datos contiene múltiples Tablas; cada Tabla contiene múltiples Registros; y cada Registro está compuesto por Atributos (valores).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "basico"
  tags: ["base_de_datos", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["La tabla es una unidad de datos y el registro es un conjunto de tablas", "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura", "La tabla es un dato individual y el registro es la base de datos completa", "No hay diferencia, son sinónimos"]

respuesta: "La tabla es la estructura que contiene datos y el registro es una fila de dicha estructura"

enunciado: "En el modelo relacional, ¿qué distingue fundamentalmente a una tabla de un registro?"

explicacion: |
  Una tabla (o relación) es la entidad completa que define la estructura y el conjunto de datos, mientras que un registro (o tupla) es una única entrada o fila que representa un elemento específico dentro de esa tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

tipo: completar
respuestas_validas: ["identificar", "diferenciar", "única"]

respuesta: "única"

enunciado: "A diferencia de un campo común, la clave primaria debe garantizar que cada registro sea ___."

explicacion: |
  La clave primaria (Primary Key) tiene la propiedad de unicidad, lo que significa que no puede haber dos filas con el mismo valor en ese campo, permitiendo identificar de forma inequívoca cada registro.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tabla_registro"
  nivel: "intermedio"
  tags: ["base_de_datos", "atributos"]

tipo: vf

respuesta: falso

enunciado: "¿Es correcto afirmar que un registro es la colección de todos los atributos (columnas) de una tabla?"

explicacion: |
  Falso. Un registro es una instancia de datos (una fila). La colección de todos los registros es la tabla. Los atributos son las columnas que definen la estructura de la tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_estructura"
  nivel: "basico"
  tags: ["base_de_datos", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Base de datos", "Tabla", "Registro", "Campo"]

respuesta: ["Base de datos", "Tabla", "Registro", "Campo"]

enunciado: "Ordena los siguientes elementos de mayor a menor jerarquía de abstracción en un modelo relacional:"

explicacion: |
  La jerarquía lógica va desde el contenedor global (Base de datos), que contiene estructuras (Tablas), que contienen instancias de datos (Registros), que a su vez se componen de unidades mínimas de información (Campos/Atributos).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_clave_primaria"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1

tipo: mc
opciones_explicitas: ["Puede contener valores nulos", "Debe ser única y no nula"]

enunciado: "Considerando la integridad de entidad, ¿cuál es la distinción principal de una clave primaria respecto a un campo de texto normal?"

pasos:
  - "Identificar la propiedad de unicidad"
  - "Verificar la restricción de nulidad"

explicacion: |
  La clave primaria tiene dos restricciones críticas que un campo normal no tiene: debe ser única en toda la tabla y no puede contener valores nulos (NOT NULL).
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "clave_primaria"]

variables:
  escenario: uno_de([
    ["ID_Usuario, Nombre, Email", "ID_Usuario"],
    ["DNI, Apellido, Dirección", "DNI"],
    ["Codigo_Producto, Descripcion, Precio", "Codigo_Producto"],
    ["Matricula, Estudiante, Curso", "Matricula"]
  ])
  idx: uno_de([0,1,2,3])

enunciado: "En una base de datos de una tienda, se tiene la siguiente estructura de tabla: {escenario[idx][0]}. El campo que actúa como clave primaria es ___."

respuestas_validas: ["{escenario[idx][1]}"]

tipo: completar

explicacion: |
  La clave primaria es el campo que identifica de forma única e irrepetible a cada registro en una tabla.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "registro"]

variables:
  datos: [
    ["Una fila de una tabla que representa un objeto único", "verdadero"],
    ["Un conjunto de todas las filas de una tabla", "falso"],
    ["El nombre de una columna en la tabla", "falso"]
  ]
  idx: uno_de([0,1,2])

enunciado: "¿Un registro en una base de datos relacional es equivalente a una fila que contiene datos de un objeto o entidad específica? {datos[idx][1]}"

tipo: completar
respuesta: datos[idx][1

explicacion: |
  En el modelo relacional, un registro (o tupla) es la colección de atributos que describen una única instancia de la entidad.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "columnas"]

variables:
  caso: uno_de([
    ["Nombre, Edad, Ciudad", "Nombre"],
    ["Producto, Stock, Precio", "Producto"],
    ["ID, Fecha, Monto", "ID"]
  ])
  idx: uno_de([0,1,2])

enunciado: "Si tenemos la tabla con las columnas {caso[idx][0]}, ¿cuál de ellas es la más adecuada para ser la clave primaria?"

opciones_explicitas: ["{caso[idx][0]}", "Otra columna no listada"]

tipo: mc

respuesta: caso[idx][0

explicacion: |
  La clave primaria debe ser un atributo que no se repita entre distintos registros.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "intermedio"
  tags: ["base_de_datos", "integridad"]

variables:
  propiedad: uno_de([
    ["Un valor de clave primaria puede ser nulo (NULL)", "falso"],
    ["Dos registros pueden tener la misma clave primaria", "falso"],
    ["La clave primaria puede ser un número repetido", "falso"]
  ])
  idx: uno_de([0,1,2])

enunciado: "Analizando las reglas de integridad de entidad: {propiedad[idx][0]}"

tipo: completar
respuesta: propiedad[idx][1

explicacion: |
  La integridad de entidad establece que ninguna parte de una clave primaria puede ser nula y que debe ser única.
```

```
metadata:
  materia: "informatica"
  tema: "modelo_relacional_tablas"
  nivel: "basico"
  tags: ["base_de_datos", "estructura"]

variables:
  orden_estructural: [
    "Nombre de la tabla",
    "Definición de columnas (esquema)",
    "Inserción de registros (datos)"
  ]

enunciado: "Ordena los pasos lógicos para la creación y uso de una tabla en una base de datos:"

opciones_explicitas: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

tipo: ordenar

respuesta: ["Nombre de la tabla", "Definición de columnas (esquema)", "Inserción de registros (datos)"]

explicacion: |
  Primero se define la identidad (nombre), luego la estructura (columnas/esquema) y finalmente se puebla con información (registros).
```

## Sección: normalizacion-bases-datos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["teoria", "redundancia"]

respuesta: "redundancia"
tipo: completar
respuestas_validas: ["redundancia", "duplicación", "repetir"]

enunciado: "Cuando la misma información se almacena en múltiples lugares de una base de datos, se produce un fenómeno llamado ___."

explicacion: |
  La redundancia de datos ocurre cuando un mismo dato se repite innecesariamente en diferentes tablas o registros, lo que aumenta el riesgo de inconsistencias.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["anomalia", "integridad"]

opciones_explicitas: ["Anomalía de inserción", "Anomalía de borrado", "Anomalía de actualización", "Todas las anteriores"]
respuesta: "Todas las anteriores"
tipo: mc

enunciado: "Si un dato está duplicado y se cambia en un registro pero no en el otro, estamos ante una anomalía de tipo:"

explicacion: |
  La redundancia causa anomalías de actualización, ya que la integridad de la información se pierde al no estar sincronizada en todos los puntos de almacenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["objetivo", "diseño"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la normalización es minimizar la redundancia de datos y evitar anomalías de inserción, actualización y borrado?"

explicacion: |
  Correcto. La normalización es un proceso de diseño que busca organizar las columnas y tablas de una base de datos para minimizar la duplicación de datos.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Identificar dependencias funcionales", "Definir la clave primaria", "Crear tablas relacionadas", "Aplicar reglas de formas normales"]
respuesta: ["Definir la clave primaria", "Identificar dependencias funcionales", "Aplicar reglas de formas normales", "Crear tablas relacionadas"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para diseñar una base de datos normalizada:"

explicacion: |
  Primero se debe definir la estructura básica (claves), luego entender cómo se relacionan los datos (dependencias) para finalmente aplicar las reglas de las Formas Normales.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["integridad", "consecuencia"]

variables:
  escenario: uno_de([
    ["Alta redundancia", "baja"],
    ["Normalización óptima", "alta"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["baja", "alta"]

enunciado: "En un esquema de base de datos con una normalización óptima, la integridad de los datos suele ser ___."

explicacion: |
  Al reducir la redundancia mediante la normalización, se garantiza que un dato solo se almacene en un lugar, elevando la integridad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "anomalia"]

enunciado: "En una tabla de 'Ventas' donde se repite el nombre y la dirección del cliente por cada producto comprado, si el cliente cambia de dirección y solo actualizamos una fila, ¿qué problema de integridad de datos estamos enfrentando?"

opciones_explicitas: ["Anomalia de actualización", "Anomalia de inserción", "Anomalia de borrado", "Redundancia de clave"]

respuesta: "Anomalia de actualización"
tipo: "mc"

explicacion: |
  La redundancia de datos (repetir la dirección en cada venta) provoca anomalías de actualización: si no se actualizan todos los registros de un mismo cliente, la base de datos queda con información inconsistente.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "intermedio"
  tags: ["dependencia_funcional", "normalizacion"]

variables:
  escenario: uno_de([
    ["ID_Estudiante", "Nombre", "Email", "Curso", "Aula"],
    ["ID_Libro", "Titulo", "ISBN", "Autor", "Editorial"],
    ["ID_Producto", "Nombre", "Precio", "Categoria", "Proveedor"]
  ])

enunciado: "Considerando el escenario {escenario}, si queremos eliminar la redundancia de la información del 'Curso' y su 'Aula' asociada, ¿cuál debería ser la clave primaria para una tabla separada que gestione la ubicación de los cursos?"

opciones_explicitas: ["ID_Estudiante", "Nombre", "Email", "Curso"]

respuesta: "Curso"
tipo: "mc"

explicacion: |
  Para normalizar, debemos mover los atributos que dependen de un concepto distinto (el curso) a una tabla propia, donde 'Curso' actúe como clave para evitar repetir la 'Aula' en cada estudiante.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["definicion"]

enunciado: "El proceso de organizar los datos en una base de datos relacional para minimizar la redundancia y evitar anomalías se denomina ___."

respuestas_validas: ["normalización", "normalizacion"]

respuesta: "normalización"
tipo: "completar"

explicacion: |
  La normalización es el proceso de estructurar una base de datos para que cada dato se almacene en un solo lugar, evitando duplicados.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "basico"
  tags: ["almacenamiento"]

enunciado: "Tener una base de datos altamente normalizada siempre implica un ahorro de espacio en disco debido a la eliminación de datos repetidos."

respuesta: falso
tipo: "vf"

explicacion: |
  Aunque la normalización reduce la redundancia de datos descriptivos, puede aumentar el uso de espacio debido a la necesidad de crear más tablas y gestionar múltiples claves foráneas (índices) para realizar las uniones (JOINs).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_de_datos"
  nivel: "avanzado"
  tags: ["proceso", "pasos"]

variables:
  pasos_ordenados: [
    "Identificar dependencias funcionales",
    "Eliminar dependencias parciales (1FN)",
    "Eliminar dependencias transitivas (2FN/3FN)",
    "Verificar integridad referencial"
  ]

enunciado: "Ordena los pasos lógicos para llevar una tabla desnormalizada hacia un modelo normalizado eficiente:"

opciones_explicitas: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]

respuesta: ["Identificar dependencias funcionales", "Eliminar dependencias parciales (1FN)", "Eliminar dependencias transitivas (2FN/3FN)", "Verificar integridad referencial"]
tipo: "ordenar"

explicacion: |
  El proceso comienza analizando cómo se relacionan los datos (dependencias), luego se separan los datos que no dependen de la clave completa (1FN/2FN) y finalmente se eliminan las dependencias indirectas (3FN).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["redundancia", "anomalias"]

variables:
  escenario: uno_de([
    ["Nombre: Juan, Tel: 123, Ciudad: BsAs", "Anomalía de actualización"],
    ["Nombre: Ana, Tel: 456, Ciudad: Córdoba", "Anomalía de inserción"],
    ["Nombre: Luis, Tel: 789, Ciudad: Salta", "Anomalía de borrado"]
  ])

enunciado: "Si al cambiar el número de teléfono de un cliente debemos buscar todas sus filas repetidas para actualizar cada una de ellas, estamos ante una {escenario[1]} causada por la redundancia."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Anomalía de actualización", "Anomalía de inserción", "Anomalía de borrado"]

explicacion: |
  La redundancia de datos provoca anomalías. Si un dato (como un teléfono) se repite en múltiples registros, el sistema corre el riesgo de que no todos se actualicen, dejando la base de datos en un estado inconsistente.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivos", "diseño"]

enunciado: "La normalización de bases de datos tiene como objetivo principal minimizar la redundancia de datos para evitar las anomalías de inserción, actualización y ___."

respuesta: ["borrado"]
respuestas_validas: ["borrado"]
tipo: completar

explicacion: |
  La normalización busca estructurar las tablas de modo que cada dato se almacene en un único lugar, evitando que al borrar un registro se pierda información que no debería ser eliminada (anomalía de borrado).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["desnormalizacion", "rendimiento"]

enunciado: "En sistemas de Big Data o Data Warehousing, a veces se aplica la 'desnormalización' intencionalmente para mejorar la velocidad de lectura, a pesar de aumentar la redundancia."

respuesta: verdadero
tipo: vf

explicacion: |
  Es correcto. Aunque la normalización es vital para la integridad (OLTP), en sistemas de análisis (OLAP) se prefiere la desnormalización para evitar JOINs costosos y acelerar las consultas de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["metodologia"]

variables:
  pasos_correctos: [
    "Identificar dependencias funcionales",
    "Aplicar Primera Forma Normal",
    "Aplicar Segunda Forma Normal",
    "Aplicar Tercera Forma Normal"
  ]

enunciado: "Para asegurar una base de datos bien estructurada, se debe seguir un proceso lógico de normalización. Ordena los pasos:"

respuesta: ["Identificar dependencias funcionales", "Aplicar Primera Forma Normal", "Aplicar Segunda Forma Normal", "Aplicar Tercera Forma Normal"]
tipo: ordenar
opciones_explicitas: [
  "Aplicar Tercera Forma Normal",
  "Identificar dependencias funcionales",
  "Aplicar Segunda Forma Normal",
  "Aplicar Primera Forma Normal"
]

explicacion: |
  La normalización es un proceso iterativo y progresivo. No se puede aplicar la 2FN sin haber cumplido la 1FN, y para la 2FN es indispensable haber identificado las dependencias funcionales.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "2fn"]

enunciado: "En la Segunda Forma Normal (2FN), es fundamental que todos los atributos que no forman parte de la clave primaria dependan de la clave completa y no solo de una parte de ella. A esto se le llama evitar la dependencia ___."

respuesta: ["parcial"]
respuestas_validas: ["parcial"]
tipo: completar

explicacion: |
  La dependencia parcial ocurre cuando un atributo depende de solo una parte de una clave compuesta. La 2FN exige que todos los atributos no clave dependan de la clave primaria completa.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

respuesta: "anomalias"
tipo: "completar"
respuestas_validas: ["anomalias", "anomalia"]

enunciado: "La redundancia de datos en una base de datos no normalizada puede provocar errores de consistencia conocidos como ___ de actualización o de borrado."

explicacion: |
  La redundancia es la duplicación innecesaria de datos. Cuando un dato se repite en varios lugares, si se actualiza en uno y no en el otro, se producen anomalías que rompen la integridad de la información.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["desnormalizacion", "rendimiento"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de(["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia."])[escenario_idx]
tipo: "mc"
opciones_explicitas: ["La normalización prioriza la integridad mediante la reducción de redundancia.", "La desnormalización prioriza la integridad mediante la reducción de redundancia.", "Ambas buscan lo mismo pero con diferentes nombres.", "Ninguna de las anteriores."]

enunciado: "Considerando el objetivo principal de cada proceso, ¿cuál de las siguientes afirmaciones es correcta según el escenario seleccionado?"

pasos:
  - "Analizar si el objetivo es evitar duplicados (normalizar) o acelerar lecturas (desnormalizar)."

explicacion: |
  La normalización busca eliminar la redundancia para asegurar la integridad. La desnormalización, por el contrario, introduce redundancia deliberadamente para mejorar el rendimiento de las consultas de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "avanzado"
  tags: ["dependencia_funcional", "3nf"]

respuesta: verdadero
tipo: "vf"

enunciado: "En el contexto de la Tercera Forma Normal (3NF), una dependencia transitiva ocurre cuando un atributo no clave depende de otro atributo que tampoco es una clave primaria, lo cual es distinto a una dependencia funcional directa sobre la clave."

explicacion: |
  Correcto. La 3NF exige que todos los atributos no clave dependan directamente de la clave primaria y no de otros atributos no clave (eliminando así la dependencia transitiva).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "basico"
  tags: ["proceso", "orden"]

respuesta: ["1NF", "2NF", "3NF"]
tipo: "ordenar"
opciones_explicitas: ["3NF", "1NF", "2NF"]

enunciado: "Ordene los pasos lógicos de las formas normales para asegurar una base de datos sin redundancias excesivas:"

explicacion: |
  El proceso estándar es asegurar primero la atomicidad (1NF), luego la dependencia funcional completa sobre la clave (2NF) y finalmente eliminar dependencias transitivas (3NF).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_bases_datos"
  nivel: "intermedio"
  tags: ["redundancia", "duplicacion"]

variables:
  es_redundante: uno_de([true, false])

respuesta: es_redundante
tipo: "vf"

enunciado: "Si un dato se repite en una tabla simplemente porque es necesario para realizar un JOIN eficiente en un modelo OLAP (Data Warehouse), ¿se considera una redundancia problemática que debe evitarse estrictamente como en el modelo OLTP?"

explicacion: |
  En sistemas OLAP, la redundancia controlada es una estrategia de diseño para el rendimiento. En sistemas OLTP (transaccionales), la redundancia es un error que causa inconsistencias.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["redundancia", "integridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Nombre del Cliente", "Dirección del Cliente"], ["Nombre del Producto", "Precio del Producto"]]
  error_tipo: uno_de([0, 1])
  errores: [["Inconsistencia", "Anomalía de actualización"], ["Inconsistencia", "Anomalía de inserción"]]

respuesta: escenarios[escenario_idx][error_tipo
tipo: mc
opciones_explicitas: ["Inconsistencia", "Anomalía de actualización", "Anomalía de inserción", "Pérdida de integridad"]

enunciado: "Si en una tabla de ventas repetimos el {escenario_idx} para cada producto vendido, y el cliente cambia de domicilio pero solo actualizamos una fila, generamos una anomalía de tipo: ___"

explicacion: |
  La redundancia de datos provoca que la información se repita innecesariamente, lo que deriva en anomalías de actualización cuando los datos no se mantienen sincronizados en todos los registros.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "basico"
  tags: ["objetivo", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El objetivo principal de la normalización es minimizar la redundancia de datos para evitar anomalías de inserción, actualización y borrado."

explicacion: |
  Correcto. La normalización busca estructurar las tablas para que cada dato se almacene en un único lugar, garantizando la integridad de la información.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["anomalia", "insercion"]

variables:
  caso_idx: uno_de([0])
  casos: [["No podemos registrar un nuevo curso si no hay alumnos inscritos", "No podemos registrar un proveedor si no tiene productos"]]

respuesta: casos[caso_idx][0
tipo: completar
respuestas_validas: ["No podemos registrar un nuevo curso si no hay alumnos inscritos", "No podemos registrar un nuevo proveedor si no tiene productos"]

enunciado: "En una tabla desnormalizada que combina 'Estudiantes' y 'Cursos', si intentamos agregar un curso que aún no tiene alumnos inscritos y la clave primaria depende de ambos, nos enfrentamos a una: ___"

explicacion: |
  Esto se conoce como anomalía de inserción: la imposibilidad de añadir información porque falta un dato que forma parte de la clave primaria.
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["1FN", "2FN", "3FN"]
tipo: ordenar
opciones_explicitas: ["3FN", "1FN", "2FN"]

enunciado: "Ordena los pasos lógicos para alcanzar la Tercera Forma Normal (3FN) partiendo de una tabla no normalizada:"

explicacion: |
  El proceso de normalización es iterativo y jerárquico: primero se asegura la atomicidad (1FN), luego la dependencia funcional completa (2FN) y finalmente se eliminan las dependencias transitivas (3FN).
```

```
metadata:
  materia: "informatica"
  tema: "normalizacion_de_bases_de_datos"
  nivel: "avanzado"
  tags: ["dependencia", "funcional"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta"], ["ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]]

respuesta: ejemplos[ejemplo_idx][0
tipo: mc
opciones_explicitas: ["ID_Empleado -> Nombre_Empleado", "ID_Producto -> Fecha_Venta", "ID_Cliente -> Dirección_Cliente", "ID_Pedido -> ID_Cliente"]

enunciado: "Para cumplir con la Segunda Forma Normal (2FN), debemos asegurar que todos los atributos no clave dependan de la clave primaria completa. Un ejemplo de una dependencia funcional válida es: ___"

explicacion: |
  En la 2FN, cada atributo que no es parte de la clave debe depender de toda la clave primaria, no solo de una parte de ella (evitando dependencias parciales).
```

## Sección: ofimatica-planilla-de-calculo (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["conceptos", "celda"]

tipo: mc
opciones_explicitas: ["La intersección de una fila y una columna", "El espacio para escribir texto solamente", "Una función matemática predefinida", "El comando para guardar el archivo"]

respuesta: "La intersección de una fila y una columna"

enunciado: "En una planilla de cálculo, la unidad básica de información se denomina ___."

explicacion: |
  Cada celda se identifica por la combinación de su letra de columna y su número de fila (ej. A1).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["referencias", "celdas"]

tipo: vf

enunciado: "Si una celda tiene la referencia $A$1, esto significa que la columna A está fijada (referencia absoluta) y la fila 1 es relativa."

respuesta: falso

explicacion: |
  El símbolo $ antes de la letra fija la columna, y el símbolo $ antes del número fija la fila. En $A$1, ambos están fijados.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "sintaxis"]

tipo: completar
respuestas_validas: ["="]

respuesta: "="

enunciado: "Para que una celda reconozca que el contenido ingresado es una fórmula y no un texto simple, el primer carácter debe ser ___."

explicacion: |
  Toda fórmula o función en una planilla de cálculo debe comenzar obligatoriamente con el signo igual (=).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores", "aritmética"]

tipo: mc
opciones_explicitas: ["*", "/", "+", "-"]

respuesta: "*"

enunciado: "En una planilla de cálculo, el operador utilizado para representar la multiplicación es ___."

explicacion: |
  Los operadores básicos son: + (suma), - (resta), * (multiplicación) y / (división).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["prioridad", "operaciones"]

tipo: ordenar

opciones_explicitas: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

respuesta: ["Paréntesis", "Potencias", "Multiplicación y División", "Suma y Resta"]

enunciado: "Ordena los siguientes elementos según la jerarquía de prioridad de operaciones en una fórmula de planilla de cálculo, de mayor a menor importancia:"

explicacion: |
  La jerarquía matemática se respeta en las planillas: primero lo que está entre paréntesis, luego potencias, luego multiplicación/división y finalmente suma/resta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

variables:
  tipo_referencia: uno_de(["absoluta", "relativa"])
  valor_celda: 100

respuesta: "A1"
tipo: completar
respuestas_validas: ["A1", "B2", "$A$1"]

enunciado: "Si queremos fijar la celda A1 para que no cambie al arrastrar una fórmula hacia abajo, debemos usar una referencia tipo ___."

explicacion: |
  Para mantener una referencia fija (como el valor de un impuesto o un tipo de cambio), se utiliza el símbolo '$' antes de la letra y el número (ej. $A$1). Esto se conoce como referencia absoluta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas"]

variables:
  val1: 15
  val2: 25

respuesta: 40
tipo: completar
tolerancia_abs: 0

enunciado: "En una planilla, si la celda A1 contiene {val1} y la celda B1 contiene {val2}, ¿cuál es el resultado de la fórmula =SUMA(A1;B1)?"

pasos:
  - "Identificar los valores en las celdas A1 y B1."
  - "Sumar ambos valores: 15 + 25."

explicacion: |
  La función SUMA suma los valores de los rangos o celdas indicados. En este caso, 15 + 25 = 40.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["operadores"]

variables:
  op_multi: "*"
  op_div: "/"

respuesta: "*"
tipo: mc
opciones_explicitas: ["+", "*", "/", "-"]

enunciado: "Para realizar una multiplicación entre la celda A1 y la celda B1 en una fórmula de planilla de cálculo, se debe utilizar el operador: ___."

explicacion: |
  En las hojas de cálculo, el asterisco (*) representa la multiplicación, el signo más (+) la suma, el signo menos (-) la resta y la barra diagonal (/) la división.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["logica", "celdas"]

variables:
  condicion: falso

respuesta: falso
tipo: vf

enunciado: "Si una celda A1 tiene el valor 10, la expresión lógica =A1>20 devuelve el valor booleano verdadero."

explicacion: |
  La expresión evalúa si 10 es mayor que 20. Como esto es falso, el resultado de la comparación es el booleano falso.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["orden_operaciones"]

variables:
  f_orden: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

respuesta: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]
tipo: ordenar
opciones_explicitas: ["Paréntesis", "Potencia", "Multiplicación/División", "Suma/Resta"]

enunciado: "Ordena las operaciones según la jerarquía de precedencia matemática que siguen las fórmulas en una planilla de cálculo:"

explicacion: |
  Al igual que en la matemática, las hojas de cálculo resuelven primero lo que está entre paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias", "formulas"]

variables:
  idx: uno_de([0, 1])
  datos: [["A1", "A2"], ["B5", "B6"]]

enunciado: "Si arrastras la fórmula {$datos[idx][0]} hacia abajo una fila, la referencia cambiará a {$datos[idx][1]} si la referencia es relativa."

respuesta: verdadero
tipo: vf

explicacion: |
  Las referencias relativas (sin $) cambian automáticamente al copiar la fórmula a otra celda. Las referencias absolutas (con $) permanecen fijas.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["errores", "sintaxis"]

opciones_explicitas: ["=SUMA(A1:A5)", "SUMA(A1:A5)", "SUMA(A1;A5)", "SUMA(A1,A5)"]

respuesta: "=SUMA(A1:A5)"
tipo: mc

explicacion: |
  En una planilla de cálculo, toda fórmula o función debe comenzar obligatoriamente con el signo igual (=).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "precedencia"]

enunciado: "Si en la celda A1 tenemos 10, en A2 tenemos 5 y en A3 tenemos 2, ¿cuál es el orden de evaluación de la fórmula =A1+A2*A3?"

pasos:
  - "Primero se identifica la multiplicación"
  - "Luego se identifica la suma"

opciones_explicitas: ["A1+A2 y luego *A3", "A2*A3 y luego +A1"]

respuesta: "A2*A3 y luego +A1"
tipo: mc

explicacion: |
  Siguiendo la jerarquía de operaciones matemáticas, la multiplicación tiene prioridad sobre la suma.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["errores", "logica"]

enunciado: "Si en la celda A1 escribes la fórmula =A1+10, el programa detectará un error de tipo ___."

respuestas_validas: ["circular", "referencia"]

respuesta: "circular"
tipo: completar

explicacion: |
  Una referencia circular ocurre cuando una fórmula intenta calcular su propio valor, creando un bucle infinito.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["referencias", "absolutas"]

enunciado: "Para fijar la columna A pero permitir que la fila cambie al arrastrar hacia abajo, la referencia correcta es ___."

respuestas_validas: ["$A1", "A$1", "$A$1", "A1"]

respuesta: "$A1"
tipo: completar

explicacion: |
  El signo $ antes de la letra fija la columna, mientras que el signo $ antes del número fija la fila.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "referencias"]

variables:
  tipo_ref: uno_de(["relativa", "absoluta"])

respuesta: tipo_ref == "absoluta"
tipo: completar
enunciado: "En una planilla de cálculo, la principal distinción de una referencia {tipo_ref} es que mantiene la posición de la celda fija aunque se copie la fórmula a otra ubicación, utilizando el signo $."

pasos:
  - "Identificar si la referencia cambia al arrastrar la fórmula."
  - "Observar la presencia del símbolo $ en la referencia."

explicacion: |
  Las referencias relativas (ej. A1) cambian según la posición donde se pegue la fórmula. Las referencias absolutas (ej. $A$1) permanecen constantes.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["celdas", "rangos"]

respuesta: "A1:B2"
tipo: completar
respuestas_validas: ["A1:B2", "A1-B2", "A1...B2"]

enunciado: "Si queremos referirnos a un conjunto de celdas que abarca desde la celda A1 hasta la celda B2, la notación correcta para representar este rango es ___."

explicacion: |
  En las planillas de cálculo, los rangos se definen utilizando los dos puntos (:) para indicar el origen y el destino del área seleccionada.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "funciones"]

opciones_explicitas: ["Una fórmula es una expresión escrita por el usuario, mientras que una función es una fórmula predefinida por el programa.", "Una fórmula es una función, mientras que una función es una fórmula.", "No existe diferencia entre ambas.", "Las fórmulas solo usan números y las funciones solo usan texto."]

respuesta: "Una fórmula es una expresión escrita por el usuario, mientras que una función es una fórmula predefinida por el programa."
tipo: mc

enunciado: "Al comparar el uso de fórmulas y funciones en una celda, ¿cuál es la distinción fundamental?"

explicacion: |
  Una fórmula es cualquier expresión que comienza con "=" (ej. =A1+A2), mientras que una función es un componente de la fórmula ya programado (ej. SUMA, PROMEDIO) que realiza un cálculo específico.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "logica"]

respuesta: falso
tipo: vf

enunciado: "En una fórmula de planilla de cálculo, el operador '=' se utiliza exclusivamente para asignar un valor a una celda, y no puede ser usado para comparar si dos valores son iguales."

explicacion: |
  El signo '=' tiene una doble función: inicia una fórmula y actúa como operador de comparación lógica para evaluar la igualdad entre dos expresiones.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["operadores", "orden_operaciones"]

opciones_explicitas: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]

respuesta: ["Paréntesis", "Multiplicación y División", "Suma y Resta"]
tipo: ordenar

enunciado: "Ordene los siguientes elementos según el orden de prioridad (precedencia) en el que la planilla de cálculo resuelve las operaciones en una fórmula:"

pasos:
  - "Observar los símbolos de agrupación."
  - "Observar las operaciones aritméticas básicas."

explicacion: |
  El orden de prioridad estándar sigue la jerarquía matemática: primero se resuelven los paréntesis, luego potencias, después multiplicación/división y finalmente suma/resta.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["excel", "celdas", "referencias"]

variables:
  datos: [["A1", "A2", "B1"], ["C5", "C6", "D5"], ["F10", "F11", "G10"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si en la celda B1 escribimos la fórmula ={datos[idx][0]}*{datos[idx][1]} y arrastramos el controlador de relleno hacia abajo una fila, la fórmula en la celda B2 será ___."

respuestas_validas:
  - "A2*A2"
  - "C6*C6"
  - "F11*F11"

respuesta: "{datos[idx][2]}"
tipo: completar
tolerancia_abs: 0

explicacion: |
  Al arrastrar una referencia relativa (sin $) hacia abajo, la fila aumenta automáticamente. Como el primer término es una referencia a una celda, esta cambia de A1 a A2, C5 a C6, o F10 a F11.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formulas", "operaciones"]

variables:
  valores: [[10, 5, 2], [20, 4, 3], [50, 2, 10]]
  idx: uno_de([0, 1, 2])

enunciado: "En una planilla, la celda A1 tiene el valor {valores[idx][0]}, la A2 tiene {valores[idx][1]} y la A3 tiene {valores[idx][2]}. Si en A4 escribimos la fórmula ={valores[idx][0]} + {valores[idx][1]} * {valores[idx][2]}, ¿cuál es el resultado?"

tipo: completar
tolerancia_abs: 0

explicacion: |
  Por la jerarquía de operaciones, la multiplicación se realiza antes que la suma. 
  En el caso actual: {valores[idx][0]} + ({valores[idx][1]} * {valores[idx][2]}).
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["funciones", "suma"]

variables:
  datos: [[10, 20, 30], [5, 5, 5], [100, 200, 300]]
  idx: uno_de([0, 1, 2])

enunciado: "Si tenemos los valores {datos[idx][0]}, {datos[idx][1]} y {datos[idx][2]} en las celdas A1, A2 y A3 respectivamente, ¿cuál es el resultado de aplicar la función =SUMA(A1:A3)?"

opciones_explicitas:
  - "30"
  - "60"
  - "65"
  - "90"
  - "600"

tipo: mc

explicacion: |
  La función SUMA con el operador de rango ':' suma todos los valores comprendidos entre la celda inicial y la final.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "basico"
  tags: ["formato", "texto"]

enunciado: "En una planilla de cálculo, si queremos que una celda muestre el texto 'Hola Mundo' como parte de una fórmula, debemos escribirlo entre comillas, por ejemplo: =CONCATENAR(""Hola"", "" "", ""Mundo"")."

tipo: vf

respuesta: verdadero

explicacion: |
  Para que una planilla de cálculo interprete una cadena de caracteres como texto y no como una función o nombre de variable, los valores textuales deben ir entre comillas dobles.
```

```
metadata:
  materia: "informatica"
  tema: "ofimatica_planilla_de_calculo"
  nivel: "intermedio"
  tags: ["jerarquia", "operadores"]

enunciado: "Para resolver una fórmula compleja que combina sumas, multiplicaciones y paréntesis, ¿cuál es el orden correcto de ejecución que sigue el motor de la planilla?"

opciones_explicitas:
  - "1. Paréntesis, 2. Potencias, 3. Multiplicación/División, 4. Suma/Resta"
  - "1. Suma/Resta, 2. Multiplicación/División, 3. Paréntesis"
  - "1. Multiplicación, 2. Paréntesis, 3. Suma"

tipo: ordenar

respuesta: ["1. Paréntesis, 2. Potencias, 3. Multiplicación/División, 4. Suma/Resta"]

explicacion: |
  Las hojas de cálculo siguen la jerarquía matemática estándar (PEMDAS/BODMAS): primero se resuelven los paréntesis, luego potencias, después multiplicaciones y divisiones, y finalmente sumas y restas.
```
