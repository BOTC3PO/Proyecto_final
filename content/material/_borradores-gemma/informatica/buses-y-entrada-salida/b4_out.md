### 1 — Bus de Datos vs Bus de Direcciones
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["arquitectura", "buses"]

respuesta: "direcciones"
tipo: completar
respuestas_validas: ["direcciones"]

enunciado: "Mientras que el bus de datos transporta la información procesada entre los componentes, el bus de ___ determina la ubicación de memoria o el dispositivo al que se quiere acceder."

explicacion: |
  El bus de direcciones es unidireccional (en la mayoría de los casos) y especifica la celda de memoria o el puerto de E/S, mientras que el bus de datos es bidireccional y transporta el contenido.
```

### 2 — El rol del Bus de Control
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["control", "sincronizacion"]

variables:
  es_control: verdadero

respuesta: es_control
tipo: vf

enunciado: "El bus de control es el encargado de transmitir señales de sincronización y de estado (como señales de lectura/escritura) para coordinar la comunicación entre la CPU y los periféricos."

explicacion: |
  Correcto. Sin el bus de control, los componentes no sabrían si el dato en el bus de datos es para ser leído o para ser escrito, ni cuándo debe iniciar la operación.
```

### 3 — Diferencia entre DMA y CPU en E/S
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "eficiencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["transferencia_cpu", "La CPU debe intervenir en cada byte transferido"],
    ["transferencia_dma", "El controlador de DMA gestiona la transferencia sin la CPU"]
  ]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["La CPU debe intervenir en cada byte transferido", "El controlador de DMA gestiona la transferencia sin la CPU"]

enunciado: "En un sistema con acceso directo a memoria (DMA), ¿cuál es la principal distinción con el método de E/S programada?"

explicacion: |
  El DMA libera a la CPU de la carga de gestionar cada byte de la transferencia, permitiéndole realizar otras tareas mientras el controlador de DMA mueve los datos entre la E/S y la memoria.
```

### 4 — Jerarquía de Buses
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["jerarquia", "velocidad"]

respuesta: ["Bus local", "Bus de sistema", "Bus de expansión"]
tipo: ordenar

opciones_explicitas: ["Bus local", "Bus de sistema", "Bus de expansión"]

enunciado: "Ordena los buses de mayor a menor velocidad de comunicación (desde el núcleo de la CPU hacia los periféricos externos):"

explicacion: |
  El bus local es el más rápido (conexión directa con CPU/Caché), seguido por el bus de sistema (placa base) y finalmente los buses de expansión (como PCIe o USB) que conectan periféricos.
```

### 5 — Interrupciones vs Polling
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["interrupcion", "polling"]

variables:
  metodo_idx: uno_de([0, 1])
  metodo_nombre: ["Polling", "Interrupción"]
  caracteristica: [
    "La CPU debe consultar constantemente el estado del dispositivo",
    "El dispositivo avisa a la CPU cuando está listo"
  ]

respuesta: caracteristica[metodo_idx]
tipo: mc
opciones_explicitas: ["La CPU debe consultar constantemente el estado del dispositivo", "El dispositivo avisa a la CPU cuando está listo"]

enunciado: "Si el sistema utiliza el método de {metodo_nombre[metodo_idx]}, ¿cuál es su característica distintiva respecto a la interrupción?"

explicacion: |
  El Polling (consulta activa) consume ciclos de CPU innecesarios si el dispositivo no está listo, mientras que las interrupciones permiten que la CPU trabaje en otra cosa hasta que el hardware requiera atención.
```