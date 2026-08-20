### 1 — El proceso de segmentación
```
metadata:
  materia: "informatica"
  tema: "asignacion_memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "segmentacion", "procesos"]

variables:
  escenario: uno_de([["segmento_codigo", "0x0040"], ["segmento_datos", "0x0080"], ["segmento_stack", "0x0120"]])
  idx: uno_de([0, 1, 2])

enunciado: "Un sistema operativo utiliza segmentación para gestionar la memoria de un proceso. Si el proceso requiere cargar el {escenario[idx][0]} en una dirección base específica, la dirección física final será el resultado de sumar la base más el offset. Si la base es 0x1000 y el offset es {escenario[idx][1]}, ¿cuál es la dirección física resultante en hexadecimal (sin el prefijo 0x)?"

pasos:
  - "Convertir el offset hexadecimal a decimal."
  - "Sumar el valor de la base (4096) al offset."
  - "Convertir el resultado de nuevo a hexadecimal."

respuesta: "1120"
tipo: input
tolerancia_abs: 0

explicacion: |
  La dirección física se calcula sumando la dirección base del segmento al offset relativo. 
  Para el caso de {escenario[idx][0]}, la suma es 0x1000 + {escenario[idx][1]} = 0x1120.
```

### 2 — Concepto de Memoria Virtual
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

### 3 — El rol de la MMU
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

### 4 — Gestión de Paginación
```
metadata:
  materia: "informatica"
  tema: "memoria_virtual"
  nivel: "avanzado"
  tags: ["paginacion", "paginas", "frames"]

variables:
  caso: uno_de([["pagina_virtual_2", "frame_fisico_5"], ["pagina_virtual_3", "frame_fisico_8"], ["pagina_virtual_5", "frame_fisico_12"]])
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de paginación, la tabla de páginas mapea la {caso[idx][0]} hacia el {caso[idx][1]}. Si el tamaño de página es de 4KB, ¿en qué dirección física comienza el {caso[idx][1]}?"

pasos:
  - "Identificar el número de frame físico: {caso[idx][1]}."
  - "Multiplicar el número de frame por el tamaño de página (4096)."
  - "El resultado es la dirección base del frame."

respuesta: "20480"
tipo: input
tolerancia_abs: 0

explicacion: |
  Si el frame físico es el {caso[idx][1]} (índice 5, 8 o 12), la dirección base se calcula como:
  Frame * 4096. Por ejemplo, si es el frame 5: 5 * 4096 = 20480.
```

### 5 — Ciclo de vida de la memoria
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