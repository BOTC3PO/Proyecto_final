### 1 — Diferencia fundamental
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_y_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "hardware"]

respuesta: "microcontrolador"
tipo: completar
respuestas_validas: ["microcontrolador"]

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
  escenarios: [
    ["controlar el ciclo de lavado de una lavadora", "procesar un videojuego de alta resolución"],
    ["gestionar el sistema de frenado ABS de un auto", "ejecutar un sistema operativo complejo en una PC"]
  ]

respuesta: uno_de(escenarios[escenario_idx][0])
tipo: mc
opciones_explicitas: ["uno_de(escenarios[escenario_idx][0])", "uno_de(escenarios[escenario_idx][1])"]

enunciado: "Considerando el uso de un {escenarios[escenario_idx][0]}, ¿qué tipo de procesador es el más adecuado?"

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

respuesta: ["CPU", "Memoria", "Periféricos"]
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

variables:
  tipo_chip: uno_de(["A", "B"])
  datos: [
    ["Propósito General", "Microprocesador"],
    ["Propósito Específico", "Microcontrolador"]
  ]

respuesta: datos[tipo_chip][1]
tipo: mc
opciones_explicitas: ["datos[tipo_chip][1]", "datos[tipo_chip][0]"]

enunciado: "Si buscamos un chip diseñado para una función única y dedicada, el tipo de chip es de ___."

explicacion: |
  Los microprocesadores son de propósito general (pueden hacer cualquier tarea según el software), mientras que los microcontroladores son de propósito específico (diseñados para una tarea concreta).
```