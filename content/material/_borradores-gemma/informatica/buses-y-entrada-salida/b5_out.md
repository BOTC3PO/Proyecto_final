### 1 — El rol del Bus de Datos
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["hardware", "buses"]

variables:
  escenario: uno_de([["El procesador necesita leer una instrucción de la memoria RAM", "datos"], ["La unidad de control envía una dirección de memoria", "direcciones"], ["La tarjeta de video recibe un color para un píxel", "datos"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["datos", "direcciones", "control"]

enunciado: "En el escenario donde {escenario[idx][0]}, el componente encargado de transportar la información específica es el bus de ___."

explicacion: |
  El bus de datos es el camino bidireccional que transporta la información (instrucciones, datos, resultados) entre los componentes del sistema.
```

### 2 — El ciclo de lectura de un periférico
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "bus_control"]

respuesta: true
tipo: vf

enunciado: "Cuando un dispositivo de entrada (como un teclado) necesita informar al procesador que se ha presionado una tecla, utiliza el bus de control para enviar una señal de interrupción."

explicacion: |
  Correcto. El bus de control se utiliza para transmitir señales de sincronización, interrupciones y estados de dispositivos.
```

### 3 — Secuencia de comunicación de un periférico
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["protocolo", "comunicacion"]

respuesta: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]
tipo: ordenar
opciones_explicitas: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]

enunciado: "Para que un controlador de periférico realice una operación de lectura de un registro de estado, debe seguir este orden lógico de señales en el bus:"

explicacion: |
  Primero se establece la dirección del dispositivo/registro, luego se indica la operación (lectura/escritura) y finalmente se mueven los datos.
```

### 4 — Identificación de buses
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["componentes", "bus_direccion"]

variables:
  casos: [["un bus que solo se mueve en un sentido (unidireccional) para indicar dónde está un dato", "direcciones"], ["un bus que permite enviar y recibir datos (bidireccional)", "datos"]]
  idx: uno_de([0, 1])

respuesta: casos[idx][1]
tipo: completar
respuestas_validas: ["direcciones", "datos"]

enunciado: "Si nos referimos a un bus que solo se mueve en un sentido (unidireccional) para indicar dónde está un dato, estamos hablando del bus de ___."

explicacion: |
  El bus de direcciones es unidireccional (del CPU hacia la memoria/periféricos) para indicar la ubicación de la información.
```

### 5 — Ancho de bus y rendimiento
```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["rendimiento", "ancho_de_bus"]

variables:
  config: [["64 bits", 8], ["32 bits", 4], ["16 bits", 2]]
  idx: uno_de([0, 1, 2])

respuesta: config[idx][1]

enunciado: "Si un sistema tiene un bus de datos de {config[idx][0]} bits, ¿cuántos bytes puede transferir en un solo ciclo de bus?"

pasos:
  - "Identificar el ancho del bus en bits: {config[idx][0]}"
  - "Dividir el número de bits por 8 (ya que 1 byte = 8 bits)"

explicacion: |
  El ancho de bus determina la cantidad de datos que pueden viajar simultáneamente. Dividir los bits por 8 nos da el total de bytes.
```