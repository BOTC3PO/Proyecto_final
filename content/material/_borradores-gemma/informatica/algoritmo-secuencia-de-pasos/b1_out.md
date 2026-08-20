### 1 — Definición de Algoritmo
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "secuencia finita de pasos"
tipo: completar
respuestas_validas: ["secuencia finita de pasos", "pasos ordenados", "instrucciones"]

enunciado: "Un algoritmo se define como una ___ para resolver un problema o realizar una tarea."

explicacion: |
  Un algoritmo es una serie de pasos ordenados y finitos que permiten alcanzar un objetivo o resolver un problema.
```

### 2 — Propiedades de un Algoritmo
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["propiedades", "finitud"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un algoritmo sea considerado como tal, debe ser finito, es decir, debe tener un número determinado de pasos y terminar en algún momento."

explicacion: |
  Efectivamente, si un proceso no termina nunca, no es un algoritmo funcional para resolver un problema específico, sino un bucle infinito.
```

### 3 — Orden de los pasos
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "secuencia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Lavar platos", "Secar platos", "Mojar platos"],
    ["Encender motor", "Poner llave", "Soltar llave"]
  ]
  respuestas_correctas: [
    ["Mojar platos", "Lavar platos", "Secar platos"],
    ["Poner llave", "Encender motor", "Soltar llave"]
  ]

respuesta: escenarios[escenario_idx][0]
tipo: ordenar
opciones_explicitas: ["Mojar platos", "Lavar platos", "Secar platos", "Poner llave", "Encender motor", "Soltar llave"]

enunciado: "Un algoritmo requiere que los pasos sigan un orden lógico. Si tenemos el siguiente problema: {escenarios[escenario_idx][0]}, ¿cuál es la secuencia correcta de pasos?"

pasos:
  - "Identificar los elementos necesarios."
  - "Establecer el orden lógico de ejecución."
  - "Verificar que la secuencia resuelva el problema."

explicacion: |
  El orden es fundamental. Si los pasos se ejecutan fuera de su secuencia lógica, el algoritmo fallará en alcanzar el objetivo.
```

### 4 — Componentes de un Algoritmo
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["entrada", "salida", "procesamiento"]

respuesta: "entrada, procesamiento y salida"
tipo: mc
opciones_explicitas: ["entrada, procesamiento y salida", "inicio, desarrollo y fin", "datos, código y error", "input, loop y output"]

enunciado: "Todo algoritmo procesa información. ¿Cuáles son las tres etapas fundamentales de su estructura?"

explicacion: |
  Los algoritmos reciben datos de entrada, realizan procesos sobre ellos y devuelven un resultado o salida.
```

### 5 — Precisión en Algoritmos
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["precision", "ambiguedad"]

respuesta: falso
tipo: vf

enunciado: "Un buen algoritmo debe ser ambiguo, permitiendo que los pasos se interpreten de diferentes maneras según el programador."

explicacion: |
  Falso. Un algoritmo debe ser preciso y no ambiguo; cada paso debe estar claramente definido para que siempre produzca el mismo resultado ante los mismos datos.
```