### 1 — Diferencia fundamental de arquitectura
```
metadata:
  materia: "electronica"
  tema: "arquitectura_computacional"
  nivel: "basico"
  tags: ["microcontrolador", "microprocesador"]

tipo: mc
opciones_explicitas: ["El microprocesador integra memoria RAM y almacenamiento en un solo chip", "El microcontrolador integra CPU, memoria y periféricos en un solo chip", "El microprocesador es más lento que un microcontrolador", "No existe diferencia real entre ambos"]

enunciado: "La principal diferencia arquitectónica es que un {uno_de(['microcontrolador', 'microprocesador'])}"

variables:
  idx: uno_de([0, 1])
  tipo_comp: uno_de(['microcontrolador', 'microprocesador'])

respuesta: "El microcontrolador integra CPU, memoria y periféricos en un solo chip"

explicacion: |
  Un microcontrolador (MCU) es un sistema completo en un solo chip (SoC), mientras que un microprocesador (MPU) requiere componentes externos (RAM, ROM, periféricos) para funcionar.
```

### 2 — Propósito de uso: Procesamiento vs Control
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

### 3 — Componentes integrados
```
metadata:
  materia: "electronica"
  tema: "componentes_internos"
  nivel: "intermedio"
  tags: ["memoria", "perifericos"]

tipo: completar
respuestas_validas: ["RAM", "ROM", "Periféricos"]

enunciado: "En un microcontrolador, la memoria ___ y los ___ (como GPIO o ADC) están integrados en el mismo encapsulado que la CPU, a diferencia de un microprocesador que requiere chips adicionales."

pasos:
  - "Identificar qué tipo de memoria volátil se integra."
  - "Identificar el término para los módulos de entrada/salida."

respuesta: "RAM"

explicacion: |
  Los microcontroladores están diseñados para ser autónomos, incluyendo RAM, ROM (o Flash) y periféricos en un solo chip.
```

### 4 — Jerarquía de complejidad
```
metadata:
  materia: "electronica"
  tema: "jerarquia_computacional"
  nivel: "basico"
  tags: ["orden", "componentes"]

tipo: ordenar
opciones_explicitas: ["Microprocesador", "Microcontrolador", "Sistema embebido completo"]

enunciado: "Ordene los elementos desde el componente de mayor capacidad de cómputo/complejidad hasta el sistema que lo integra para una función específica."

respuesta: ["Microprocesador", "Microcontrolador", "Sistema embeido completo"]

explicacion: |
  El microprocesador es el núcleo de cómputo más complejo, el microcontrolador es un sistema de control integrado, y el sistema embebido es la aplicación final que utiliza estos componentes.
```

### 5 — Consumo energético
```
metadata:
  materia: "electronica"
  tema: "consumo_energetico"
  nivel: "intermedio"
  tags: ["eficiencia", "energia"]

tipo: mc
opciones_explicitas: ["El microcontrolador consume menos energía", "El microprocesador consume menos energía", "Ambos consumen lo mismo", "El consumo depende solo del voltaje"]

enunciado: "En un dispositivo alimentado por batería, como un sensor inalámbrico, se prefiere el uso de un {uno_de(['microcontrolador', 'microprocesador'])} debido a que su diseño está optimizado para un ___ consumo de energía."

variables:
  idx: uno_de([0, 1])

respuesta: "El microcontrolador consume menos energía"

explicacion: |
  Los microcontroladores están diseñados para operar con eficiencias energéticas extremas, permitiendo que dispositivos funcionen meses con una batería pequeña.
```