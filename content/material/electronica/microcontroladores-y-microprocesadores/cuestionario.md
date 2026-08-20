# Electronica — Microcontroladores y microprocesadores (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Diferencia fundamental

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

respuesta: "microcontrolador"
tipo: completar
respuestas_validas:
  - "microcontrolador"

enunciado: "Un dispositivo que integra en un solo chip la CPU, memoria RAM, memoria ROM y periféricos de entrada/salida se denomina ___."

explicacion: |
  El microcontrolador está diseñado para tareas específicas y contiene todos los componentes necesarios en un solo circuito integrado, a diferencia del microprocesador que requiere componentes externos.
```

### 2 — Aplicaciones de uso

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["aplicaciones", "uso"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["controlar el ciclo de lavado de una lavadora", "procesar un videojuego de alta resolución"], ["gestionar el sistema de frenado ABS de un auto", "ejecutar un sistema operativo complejo en una PC"]]
  tarea: escenarios[escenario_idx][0]
  respuesta_correcta: escenarios[escenario_idx][1]

tipo: mc
opciones_explicitas: [tarea, respuesta_correcta]
respuesta: respuesta_correcta

enunciado: "Considerando el uso de {tarea}, ¿qué tipo de procesador es el más adecuado?"

pasos:
  - "Identificar si la tarea requiere procesamiento de datos masivos o control de periféricos."
  - "Determinar si el sistema es dedicado o de propósito general."

explicacion: |
  Los microcontroladores son ideales para tareas de control dedicadas (como lavadoras o ABS), mientras que los microprocesadores se usan para computación de propósito general (como PCs o consolas).
```

### 3 — Componentes externos

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["arquitectura", "memoria"]

respuesta: verdadero
tipo: vf

enunciado: "¿Un microprocesador requiere obligatoriamente de componentes externos como memoria RAM y almacenamiento para funcionar?"

explicacion: |
  Correcto. El microprocesador es solo la unidad central de procesamiento (CPU); la memoria y los periféricos deben conectarse externamente.
```

### 4 — Jerarquía de componentes

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "componentes"]

respuesta_orden: ["CPU", "Memoria", "Periféricos"]
tipo: ordenar
opciones_explicitas: ["CPU", "Memoria", "Periféricos"]

enunciado: "Ordena los componentes según la jerarquía de integración en un sistema de microcontrolador (desde el núcleo hasta los elementos de interacción con el entorno):"

explicacion: |
  En un microcontrolador, la CPU es el núcleo, seguida de la memoria integrada y finalmente los periféricos (I/O).
```

### 5 — Propósito de diseño

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["diseño", "propósito"]

respuesta: "Propósito Específico"
tipo: mc
opciones_explicitas: ["Propósito General", "Propósito Específico"]

enunciado: "Si buscamos un chip diseñado para una función única y dedicada, el tipo de chip es de ___."

explicacion: |
  Los microprocesadores son de propósito general (pueden hacer cualquier tarea según el software), mientras que los microcontroladores son de propósito específico (diseñados para una tarea concreta).
```

### 6 — Arquitectura y propósito

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "diferencias"]

respuesta: "microcontrolador"
tipo: "completar"
respuestas_validas:
  - "microcontrolador"

enunciado: "Un dispositivo que integra en un solo chip la CPU, la memoria RAM, la memoria de programa y los periféricos de entrada/salida para controlar una tarea específica (como el control de un lavarropas) se denomina ___."

explicacion: |
  El microcontrolador es un sistema completo en un solo chip diseñado para tareas dedicadas, mientras que el microprocesador es solo la unidad central de procesamiento que requiere componentes externos para funcionar.
```

### 7 — Aplicación práctica: El cerebro de una PC

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["aplicacion", "computacion"]

respuesta: "microprocesador"
tipo: "mc"
opciones_explicitas: ["microcontrolador", "microprocesador", "memoria flash", "puerto GPIO"]

enunciado: "Si estamos diseñando una computadora de alto rendimiento para edición de video que requiere gran capacidad de procesamiento y expansión de memoria externa, el componente principal debe ser un:"

explicacion: |
  Los microprocesadores están diseñados para tareas de propósito general y alta velocidad, delegando el almacenamiento y la entrada/salida a otros componentes externos.
```

### 8 — Verdad o Falso: Integración de memoria

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["memoria", "integracion"]

respuesta: falso
tipo: "vf"

enunciado: "Un microprocesador incluye internamente la memoria RAM y la memoria de lectura de instrucciones (ROM) como parte esencial de su arquitectura básica de un solo chip."

explicacion: |
  Falso. El microprocesador solo contiene la unidad de procesamiento; la RAM y la ROM son componentes externos que deben conectarse a él. El microcontrolador sí las integra.
```

### 9 — El proceso de diseño de un sistema embebido

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "diseño"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Controlar la temperatura de un horno mediante un sensor y un relé", "microcontrolador"], ["Ejecutar un sistema operativo complejo como Windows o Linux", "microprocesador"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

enunciado: "Para el escenario: '{escenarios[escenario_idx][0]}', el componente ideal es un:"

explicacion: |
  Se ha seleccionado el componente adecuado según la complejidad y la naturaleza de la tarea (específica vs general).
```

### 10 — Secuencia de componentes en una PC

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["arquitectura", "ordenar"]

respuesta_orden: ["microprocesador", "memoria RAM", "unidades de almacenamiento"]
tipo: "ordenar"
opciones_explicitas: ["microprocesador", "memoria RAM", "unidades de almacenamiento"]

enunciado: "En una arquitectura basada en microprocesador (como una PC), ordene los componentes desde el núcleo de procesamiento hacia el almacenamiento de datos masivos:"

explicacion: |
  En un sistema basado en microprocesador, el flujo lógico es: CPU (procesamiento) -> RAM (memoria volátil de trabajo) -> Disco/SSD (almacenamiento masivo).
```

### 11 — El corazón del sistema

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "componentes"]

respuesta: "microprocesador"
tipo: completar
respuestas_validas:
  - "microprocesador"

enunciado: "A diferencia de un microcontrolador, que integra memoria y periféricos en un solo chip, un ___ requiere componentes externos (RAM, Flash, I/O) para funcionar como un sistema completo."

explicacion: |
  El microprocesador (MPU) es solo la unidad de procesamiento central (CPU). Para que un ordenador funcione, necesita memoria y periféricos externos, mientras que el microcontrolador (MCU) es un "sistema en un chip" (SoC) que ya incluye todo lo necesario para tareas específicas.
```

### 12 — ¿Cuál es la diferencia clave?

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["diferencias", "uso"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un sistema diseñado para lavar ropa (lavarropas) de forma dedicada.", "microcontrolador"], ["Una computadora de escritorio para edición de video y juegos.", "microprocesador"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

enunciado: "Para el siguiente escenario: '{escenarios[escenario_idx][0]}', el componente más adecuado es un:"

explicacion: |
  El escenario {escenarios[escenario_idx][0]} requiere un dispositivo de bajo costo, bajo consumo y que realice una tarea fija, características típicas de un microcontrolador.
```

### 13 — Integración de componentes

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

### 14 — Flujo de diseño de un sistema embebido

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "intermedio"
  tags: ["proceso", "diseño"]

respuesta_orden: ["Seleccionar el procesador", "Conectar memoria RAM externa", "Conectar almacenamiento", "Diseñar la placa de circuito"]
tipo: ordenar
opciones_explicitas: ["Seleccionar el procesador", "Conectar memoria RAM externa", "Conectar almacenamiento", "Diseñar la placa de circuito"]

enunciado: "Cuando diseñamos un sistema basado en un microprocesador de alto rendimiento, el orden lógico de integración de componentes es:"

explicacion: |
  Al usar un microprocesador, el diseño es más complejo porque primero se elige la CPU y luego se deben añadir los componentes esenciales (RAM, almacenamiento) que el procesador no trae integrados, para finalmente diseñar la placa que los interconecte.
```

### 15 — El mito de la potencia

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "avanzado"
  tags: ["rendimiento", "arquitectura"]

respuesta: "microprocesador"
tipo: completar
respuestas_validas:
  - "microprocesador"

enunciado: "Si un proyecto requiere realizar cálculos matemáticos extremadamente complejos y gestionar múltiples procesos simultáneos (multitarea pesada), se debe optar por un ___ en lugar de un microcontrolador."

explicacion: |
  Los microprocesadores están optimizados para el rendimiento y la velocidad de procesamiento mediante arquitecturas complejas y jerarquías de caché, mientras que los microcontroladores priorizan la eficiencia, el control de periféricos y el bajo consumo para tareas de control.
```

### 16 — Diferencia fundamental de arquitectura

```
metadata:
  materia: "electronica"
  tema: "arquitectura_computacional"
  nivel: "basico"
  tags: ["microcontrolador", "microprocesador"]

tipo: mc
opciones_explicitas: ["El microprocesador integra memoria RAM y almacenamiento en un solo chip", "El microcontrolador integra CPU, memoria y periféricos en un solo chip", "El microprocesador es más lento que un microcontrolador", "No existe diferencia real entre ambos"]

enunciado: "La principal diferencia arquitectónica es que un {tipo_comp}"

variables:
  tipo_comp: uno_de(["microcontrolador", "microprocesador"])

respuesta: "El microcontrolador integra CPU, memoria y periféricos en un solo chip"

explicacion: |
  Un microcontrolador (MCU) es un sistema completo en un solo chip (SoC), mientras que un microprocesador (MPU) requiere componentes externos (RAM, ROM, periféricos) para funcionar.
```

### 17 — Propósito de uso: Procesamiento vs Control

```
metadata:
  materia: "electronica"
  tema: "aplicaciones_sistemas_embebidos"
  nivel: "basico"
  tags: ["uso", "aplicacion"]

tipo: vf
respuesta: falso

enunciado: "Un microprocesador de alta potencia, como el de una computadora personal, es la opción más eficiente para controlar un termostato simple que solo lee un sensor y activa un relé."

explicacion: |
  Falso. Para tareas de control de baja complejidad y bajo consumo, se utiliza un microcontrolador. Un microprocesador sería excesivamente costoso y complejo para esa tarea.
```

### 18 — Componentes integrados

```
metadata:
  materia: "electronica"
  tema: "componentes_internos"
  nivel: "intermedio"
  tags: ["memoria", "perifericos"]

tipo: completar
respuestas_validas:
  - "RAM"
  - "ROM"
  - "Periféricos"

enunciado: "En un microcontrolador, la memoria ___ y los ___ (como GPIO o ADC) están integrados en el mismo encapsulado que la CPU, a diferencia de un microprocesador que requiere chips adicionales."

pasos:
  - "Identificar qué tipo de memoria volátil se integra."
  - "Identificar el término para los módulos de entrada/salida."

respuesta: "RAM"

explicacion: |
  Los microcontroladores están diseñados para ser autónomos, incluyendo RAM, ROM (o Flash) y periféricos en un solo chip.
```

### 19 — Jerarquía de complejidad

```
metadata:
  materia: "electronica"
  tema: "jerarquia_computacional"
  nivel: "basico"
  tags: ["orden", "componentes"]

tipo: ordenar
opciones_explicitas: ["Microprocesador", "Microcontrolador", "Sistema embebido completo"]
respuesta_orden: ["Microprocesador", "Microcontrolador", "Sistema embebido completo"]

enunciado: "Ordene los elementos desde el componente de mayor capacidad de cómputo/complejidad hasta el sistema que lo integra para una función específica."

explicacion: |
  El microprocesador es el núcleo de cómputo más complejo, el microcontrolador es un sistema de control integrado, y el sistema embebido es la aplicación final que utiliza estos componentes.
```

### 20 — Consumo energético

```
metadata:
  materia: "electronica"
  tema: "consumo_energetico"
  nivel: "intermedio"
  tags: ["eficiencia", "energia"]

tipo: mc
opciones_explicitas: ["El microcontrolador consume menos energía", "El microprocesador consume menos energía", "Ambos consumen lo mismo", "El consumo depende solo del voltaje"]

enunciado: "En un dispositivo alimentado por batería, como un sensor inalámbrico, se prefiere el uso de un microcontrolador debido a que su diseño está optimizado para un bajo consumo de energía."

respuesta: "El microcontrolador consume menos energía"

explicacion: |
  Los microcontroladores están diseñados para operar con eficiencias energéticas extremas, permitiendo que dispositivos funcionen meses con una batería pequeña.
```

### 21 — El cerebro de la automatización

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "sistemas_embebidos"]

variables:
  datos: [["Controlar un termostato doméstico", "microcontrolador"], ["Procesar un videojuego de última generación", "microprocesador"]]
  idx: uno_de([0, 1])

enunciado: "Para el escenario de {datos[idx][0]}, el componente ideal es un {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

explicacion: |
  Un microcontrolador integra CPU, memoria y periféricos en un solo chip, ideal para tareas específicas como un termostato. Un microprocesador requiere componentes externos y se usa para tareas de propósito general de alta potencia.
```

### 22 — Arquitectura integrada

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "memoria"]

respuesta: verdadero
tipo: vf

enunciado: "Un microcontrolador contiene la unidad de procesamiento, la memoria RAM, la memoria ROM y los periféricos de entrada/salida dentro de un mismo circuito integrado."

explicacion: |
  Esa es la definición fundamental de un microcontrolador (System-on-a-Chip), a diferencia del microprocesador que necesita memoria y periféricos externos para funcionar.
```

### 23 — Componentes de un sistema de cómputo

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "intermedio"
  tags: ["hardware", "perifericos"]

variables:
  componentes: [["CPU", "Memoria RAM", "Controlador de E/S", "Unidad de Control"], ["Memoria RAM", "Unidad de Control", "CPU", "Controlador de E/S"]]
  idx: uno_de([0, 1])

enunciado: "Ordena los componentes que se conectan externamente a un microprocesador para que este pueda funcionar como un sistema completo: {componentes[idx][0]}, {componentes[idx][1]}, {componentes[idx][2]}, {componentes[idx][3]}"

pasos:
  - "Identificar los elementos que el microprocesador no tiene integrados por defecto."

respuesta_orden: componentes[idx]
tipo: ordenar
opciones_explicitas: ["CPU", "Memoria RAM", "Controlador de E/S", "Unidad de Control"]

explicacion: |
  El microprocesador es solo el núcleo de procesamiento; necesita que el usuario o el diseñador añada la memoria y los controladores de E/S para ser útil.
```

### 24 — Propósito de uso

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["aplicacion", "uso"]

variables:
  caso: uno_de([["especifico", "general"], ["general", "especifico"]])

enunciado: "El uso de un microprocesador está orientado a tareas de propósito {caso[0]}, mientras que un microcontrolador se usa para tareas de propósito {caso[1]}."

respuesta: caso[0]
tipo: completar
respuestas_validas:
  - "especifico"
  - "general"

explicacion: |
  Los microprocesadores son versátiles (general), mientras que los microcontroladores están optimizados para una función dedicada (específico).
```

### 25 — Consumo y eficiencia

```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "intermedio"
  tags: ["consumo", "energia"]

variables:
  datos: [["bajo", "alto"], ["alto", "bajo"]]
  idx: uno_de([0, 1])

enunciado: "En comparación con un microprocesador, un microcontrolador suele tener un consumo de energía de tipo {datos[idx][0]} y un rendimiento de tipo {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["bajo", "alto"]

explicacion: |
  Debido a su arquitectura integrada y menor frecuencia de reloj, los microcontroladores son mucho más eficientes energéticamente, lo que permite su uso en dispositivos a batería.
```
