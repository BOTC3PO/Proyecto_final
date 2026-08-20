### 1 — Identificación de componentes
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["componentes", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["resistencia", "limita la corriente"], ["capacitor", "almacena energía"], ["diodo", "permite flujo en un sentido"]]
  respuesta_texto: datos[escenario_idx][1]

tipo: mc
opciones_explicitas: ["limita la corriente", "almacena energía", "permite flujo en un sentido", "amplifica señal"]

enunciado: "Si tenemos un componente cuya función principal es {datos[escenario_idx][0]}, ¿cuál es su función en el circuito?"

explicacion: |
  El componente seleccionado es un/a {datos[escenario_idx][0]}, cuya función es {datos[escenario_idx][1]}.
```

### 2 — El rol del capacitor
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador"]

tipo: vf

enunciado: "¿Un capacitor (condensador) puede actuar como una fuente de energía temporal en un circuito?"

respuesta: verdadero

explicacion: |
  Verdadero. Los capacitores almacenan energía en un campo eléctrico y pueden liberarla rápidamente cuando el circuito lo requiere.
```

### 3 — Comportamiento del diodo
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["diodo", "polarizacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["directa", "conduce"], ["inversa", "bloquea"]]
  tipo_polar: ["directa", "inversa"]
  resultado: ["conduce", "bloquea"]

tipo: completar

enunciado: "Si un diodo se encuentra en polarización ___, la corriente será ___."

respuestas_validas: ["directa", "inversa", "conduce", "bloquea"]

respuesta: "si tipo_polar == 'directa' entonces 'conduce' sino 'bloquea'"

explicacion: |
  En polarización directa, el diodo permite el paso de corriente. En polarización inversa, actúa como un aislante (bloquea).
```

### 4 — El transistor como interruptor
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "conmutacion"]

tipo: mc
opciones_explicitas: ["Controlar el flujo de corriente mediante una señal pequeña", "Aumentar la resistencia de forma infinita", "Almacenar carga eléctrica", "Rectificar corriente alterna"]

enunciado: "¿Cuál es la función principal de un transistor cuando se utiliza en modo de conmutación?"

respuesta: "Controlar el flujo de corriente mediante una señal pequeña"

explicacion: |
  El transistor puede actuar como un interruptor electrónico, donde una pequeña corriente en la base controla una corriente mayor entre colector y emisor.
```

### 5 — Secuencia de montaje de un circuito simple
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["montaje", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Fuente de alimentación", "Resistencia", "LED", "Tierra/GND"]
respuesta: ["Fuente de alimentación", "Resistencia", "LED", "Tierra/GND"]

enunciado: "Ordena los componentes para crear un circuito de protección simple para un LED (de positivo a negativo):"

explicacion: |
  El orden lógico es: primero la fuente, luego la resistencia para limitar corriente, el LED para emitir luz y finalmente el retorno a tierra.
```