### 1 — El rol del Bus de Control
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["arquitectura", "buses", "control"]

variables:
  es_control: verdadero

respuesta: es_control
tipo: vf

enunciado: "El bus de control es el encargado de transportar los datos reales (como un número o un carácter) entre el procesador y la memoria."

explicacion: |
  Falso. El bus de control transporta señales de sincronización y comandos (como lecturas o escrituras), mientras que el bus de datos es el que transporta la información propiamente dicha.
```

### 2 — Confusión de direcciones en el Bus de Direcciones
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["direccionamiento", "memoria", "buses"]

variables:
  escenario: uno_de([
    ["Bus de direcciones de 16 bits", "65536"],
    ["Bus de direcciones de 32 bits", "4294967296"],
    ["Bus de direcciones de 64 bits", "18446744073709551616"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["65536", "4294967296", "18446744073709551616"]

enunciado: "Si un sistema tiene un bus de direcciones de {escenario[idx][0]}, la cantidad máxima de ubicaciones de memoria que puede direccionar es de ___."

explicacion: |
  El número de direcciones direccionables está determinado por la cantidad de líneas del bus de direcciones ($2^n$, donde $n$ es el número de bits).
```

### 3 — ¿Qué comunica el Bus de Datos?
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["buses", "datos"]

opciones_explicitas: ["Direcciones de memoria", "Señales de reloj", "Información/Datos", "Comandos de lectura/escritura"]
respuesta: "Información/Datos"
tipo: mc

enunciado: "En una arquitectura de Von Neumann, ¿cuál es la función principal del bus de datos?"

explicacion: |
  El bus de datos es bidireccional y transporta la información (instrucciones o datos) entre los componentes. Los otros buses mencionados cumplen funciones de control o direccionamiento.
```

### 4 — Ciclo de una instrucción en el bus
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["ciclo_instruccion", "ordenar"]

opciones_explicitas: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
respuesta: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para que el procesador obtenga un dato de la memoria RAM:"

explicacion: |
  Primero se debe indicar 'dónde' buscar (dirección), luego 'qué hacer' (control/lectura), luego esperar a que el dato 'viaje' (datos) y finalmente usarlo.
```

### 5 — Interrupciones vs. Polling
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["E/S", "interrupciones", "eficiencia"]

variables:
  metodo: uno_de([
    ["Polling", "el CPU pregunta constantemente si el dispositivo está listo"],
    ["Interrupción", "el dispositivo avisa al CPU cuando está listo"]
  ])
  idx: uno_de([0, 1])

respuesta: metodo[idx][1]
tipo: completar
respuestas_validas: ["el CPU pregunta constantemente si el dispositivo está listo", "el dispositivo avisa al CPU cuando está listo"]

enunciado: "Si un sistema utiliza el método de ___ para gestionar un periférico, el procesador pierde eficiencia porque ___."

explicacion: |
  El Polling (o consulta) obliga al CPU a estar en un bucle de espera, desperdiciando ciclos de reloj. Las interrupciones permiten que el CPU realice otras tareas hasta que el hardware lo necesite.
```