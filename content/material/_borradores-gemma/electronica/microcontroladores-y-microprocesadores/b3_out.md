### 1 — El corazón del sistema
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "componentes"]

respuesta: "microprocesador"
tipo: completar
respuestas_validas: ["microprocesador"]

enunciado: "A diferencia de un microcontrolador, que integra memoria y periféricos en un solo chip, un ___ requiere componentes externos (RAM, Flash, I/O) para funcionar como un sistema completo."

explicacion: |
  El microprocesador (MPU) es solo la unidad de procesamiento central (CPU). Para que un ordenador funcione, necesita memoria y periféricos externos, mientras que el microcontrolador (MCU) es un "sistema en un chip" (SoC) que ya incluye todo lo necesario para tareas específicas.
```

### 2 — ¿Cuál es la diferencia clave?
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["diferencias", "uso"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un sistema diseñado para lavar ropa (lavarropas) de forma dedicada.", "microcontrolador"],
    ["Una computadora de escritorio para edición de video y juegos.", "microprocesador"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

enunciado: "Para el siguiente escenario: '{escenarios[escenario_idx][0]}', el componente más adecuado es un:"

explicacion: |
  El escenario {escenarios[escenario_idx][0]} requiere un dispositivo de bajo costo, bajo consumo y que realice una tarea fija, características típicas de un microcontrolador.
```

### 3 — Integración de componentes
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["memoria", "perifericos"]

respuesta: falso
tipo: vf

enunciado: "Un microprocesador es, por definición, un dispositivo que contiene internamente la memoria RAM y los puertos de entrada/salida (I/O) para operar de forma autónoma."

explicacion: |
  Falso. La integración de RAM, ROM/Flash y periféricos I/O en un mismo chip es la característica definitoria de un microcontrolador. El microprocesador depende de la arquitectura de bus para conectarse a ellas.
```

### 4 — Flujo de diseño de un sistema embebido
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["proceso", "diseño"]

respuesta: ["Seleccionar el procesador", "Conectar memoria RAM externa", "Conectar almacenamiento", "Diseñar la placa de circuito"]
tipo: ordenar
opciones_explicitas: ["Seleccionar el procesador", "Conectar memoria RAM externa", "Conectar almacenamiento", "Diseñar la placa de circuito"]

enunciado: "Cuando diseñamos un sistema basado en un microprocesador de alto rendimiento, el orden lógico de integración de componentes es:"

explicacion: |
  Al usar un microprocesador, el diseño es más complejo porque primero se elige la CPU y luego se deben añadir los componentes esenciales (RAM, almacenamiento) que el procesador no trae integrados, para finalmente diseñar la placa que los interconecte.
```

### 5 — El mito de la potencia
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "avanzado"
  tags: ["rendimiento", "arquitectura"]

respuesta: "microprocesador"
tipo: completar
respuestas_validas: ["microprocesador"]

enunciado: "Si un proyecto requiere realizar cálculos matemáticos extremadamente complejos y gestionar múltiples procesos simultáneos (multitarea pesada), se debe optar por un ___ en lugar de un microcontrolador."

explicacion: |
  Los microprocesadores están optimizados para el rendimiento y la velocidad de procesamiento mediante arquitecturas complejas y jerarquías de caché, mientras que los microcontroladores priorizan la eficiencia, el control de periféricos y el bajo consumo para tareas de control.
```