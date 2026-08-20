### 1 — El proceso de la memoria de trabajo
```
metadata:
  materia: "psicologia"
  tema: "memoria_trabajo"
  nivel: "intermedio"
  tags: ["cognicion", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["El sujeto debe retener una secuencia de números para realizar una operación mental.", "retener"],
    ["El sujeto debe manipular mentalmente una lista de palabras para categorizarlas.", "manipular"]
  ]

enunciado: "Un estudiante está realizando una tarea de {datos[escenario_idx][0]}. En este proceso, la capacidad de mantener la información activa para su procesamiento inmediato se denomina memoria de trabajo. La función principal de este componente es ___ la información."

respuestas_validas: ["manipular", "procesar"]
respuesta: "manipular"
tipo: completar

explicacion: |
  La memoria de trabajo no es solo un almacén pasivo, sino un sistema dinámico que permite la manipulación de la información necesaria para tareas cognitivas complejas.
```

### 2 — Percepción y Bottom-up vs Top-down
```
metadata:
  materia: "psicologia"
  tema: "percepcion_procesamiento"
  nivel: "intermedio"
  tags: ["percepcion", "atencion"]

variables:
  caso_idx: uno_de([0, 1])
  ejemplos: [
    ["Ver una mancha roja en un papel blanco y reconocerla como una manzana debido a la experiencia previa.", "top-down"],
    ["Detectar el color rojo de un objeto basándose únicamente en la estimulación de los fotorreceptores.", "bottom-up"]
  ]

enunciado: "Analicemos el siguiente caso: {ejemplos[caso_idx][0]}. Este tipo de procesamiento, donde los conocimientos previos y las expectativas influyen en la interpretación de los estímulos, se denomina procesamiento ___."

opciones_explicitas: ["top-down", "bottom-up", "perceptual", "sensorial"]
respuesta: "top-down"
tipo: mc

explicacion: |
  El procesamiento top-down (de arriba hacia abajo) ocurre cuando nuestros procesos cognitivos de alto nivel (conocimiento, expectativas) guían la percepción de los estímulos sensoriales.
```

### 3 — Atención Selectiva y el Efecto Stroop
```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "basico"
  tags: ["atencion", "interferencia"]

enunciado: "En el Test de Stroop, se presenta la palabra 'AZUL' escrita en tinta de color rojo. El sujeto debe decir el color de la tinta, no leer la palabra. Esto genera una interferencia porque la lectura es un proceso automático que compite con la atención selectiva al color. ¿Es verdadero que este fenómeno demuestra la existencia de procesos automáticos que interfieren con procesos controlados?"

respuesta: verdadero
tipo: vf

explicacion: |
  El efecto Stroop es un ejemplo clásico de cómo la automatización de procesos (como la lectura) puede dificultar la ejecución de una tarea controlada (nombrar el color).
```

### 4 — Fases del Aprendizaje en la Memoria
```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_memoria"
  nivel: "avanzado"
  tags: ["aprendizaje", "codificacion"]

enunciado: "Para que un aprendizaje sea consolidado, la información debe atravesar una serie de etapas secuenciales. Ordene el proceso desde que el estímulo llega al sistema hasta que se estabiliza en la memoria a largo plazo:"

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

explicacion: |
  El proceso de memoria sigue una secuencia lógica: primero se codifica la información (transformación del estímulo), luego se almacena (mantenimiento) y finalmente se recupera (acceso a la información).
```

### 5 — El Modelo de Memoria de Atkinson-Shiffrin
```
metadata:
  materia: "psicologia"
  tema: "modelos_memoria"
  nivel: "intermedio"
  tags: ["memoria", "procesamiento"]

variables:
  tarea_idx: uno_de([0, 1])
  escenarios: [
    ["un número de teléfono que se repite mentalmente por 5 segundos", "sensorial"],
    ["el nombre de una persona que acabas de conocer y mantienes en mente brevemente", "sensorial"]
  ]

enunciado: "Un sujeto está realizando la siguiente acción: {escenarios[tarea_idx][0]}. Si el sujeto no presta atención a este estímulo, la información se pierde casi instantáneamente de la memoria ___."

opciones_explicitas: ["sensorial", "a corto plazo", "a largo plazo", "semántica"]
respuesta: "sensorial"
tipo: mc

explicacion: |
  La memoria sensorial es el primer nivel de procesamiento; retiene la información física del estímulo por un tiempo extremadamente breve (milisegundos a segundos) antes de que pase a la memoria de corto plazo mediante la atención.
```