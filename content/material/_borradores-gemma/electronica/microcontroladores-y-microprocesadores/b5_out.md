### 1 — El cerebro de la automatización
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["arquitectura", "sistemas_embebidos"]

variables:
  escenario: uno_de([["Controlar un termostato doméstico", "microcontrolador"], ["Procesar un videojuego de última generación", "microprocesador"]])
  idx: uno_de([0, 1])

enunciado: "Para el escenario de {escenario[0]}, el componente ideal es un {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["microcontrolador", "microprocesador"]

explicacion: |
  Un microcontrolador integra CPU, memoria y periféricos en un solo chip, ideal para tareas específicas como un termostato. Un microprocesador requiere componentes externos y se usa para tareas de propósito general de alta potencia.
```

### 2 — Arquitectura integrada
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

### 3 — Componentes de un sistema de cómputo
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "intermedio"
  tags: ["hardware", "perifericos"]

variables:
  componentes: [["CPU", "Memoria RAM", "Controlador de E/S", "Unidad de Control"], ["Memoria RAM", "Unidad de Control", "CPU", "Controlador de E/S"]]
  idx: uno_de([0, 1])

enunciado: "Ordena los componentes que se conectan externamente a un microprocesador para que este pueda funcionar como un sistema completo:"

pasos:
  - "Identificar los elementos que el microprocesador no tiene integrados por defecto."

respuesta: componentes[idx]
tipo: ordenar
opciones_explicitas: ["Memoria RAM", "Unidad de Control", "CPU", "Controlador de E/S"]

explicacion: |
  El microprocesador es solo el núcleo de procesamiento; necesita que el usuario o el diseñador añada la memoria y los controladores de E/S para ser útil.
```

### 4 — Propósito de uso
```
metadata:
  materia: "electronica"
  tema: "microcontroladores_vs_microprocesadores"
  nivel: "basico"
  tags: ["aplicacion", "uso"]

variables:
  caso: uno_de([["Un sistema de frenos ABS", "especifico"], ["Una estación de trabajo de edición de video", "general"]])

enunciado: "El uso de un microprocesador está orientado a tareas de propósito ___________, mientras que un microcontrolador se usa para tareas de propósito ___________."

respuesta: tabla[idx][1]
tipo: completar
tabla: [["especifico", "general"], ["general", "especifico"]]
respuestas_validas: ["especifico", "general"]

explicacion: |
  Los microprocesadores son versátiles (general), mientras que los microcontroladores están optimizados para una función dedicada (específico).
```

### 5 — Consumo y eficiencia
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