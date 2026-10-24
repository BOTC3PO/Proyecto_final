### 1 — Función de la resistencia
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["resistencia", "componente"]

tipo: mc
opciones_explicitas: ["Aumentar la corriente", "Oponerse al paso de la corriente", "Almacenar carga eléctrica", "Amplificar señales"]

enunciado: "La función principal de una resistencia en un circuito es ___ la corriente eléctrica."

respuesta: "Oponerse al paso de la corriente"

explicacion: |
  Una resistencia limita el flujo de electrones, convirtiendo energía eléctrica en calor.
```

### 2 — El condensador
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["capacitor", "condensador"]

tipo: vf

enunciado: "Un capacitor (o condensador) tiene la capacidad de almacenar energía en forma de campo eléctrico."

respuesta: verdadero

explicacion: |
  Los capacitores almacenan energía mediante la separación de cargas en sus placas.
```

### 3 — El diodo semiconductor
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["diodo", "semiconductor"]

tipo: mc
opciones_explicitas: ["Permite el flujo en ambos sentidos", "Permite el flujo en un solo sentido", "Actúa como un interruptor automático", "Almacena energía"]

enunciado: "Un diodo es un componente que ___."

respuesta: "Permite el flujo en un solo sentido"

explicacion: |
  El diodo actúa como una válvula que permite que la corriente fluya en una dirección (polarización directa) pero bloquea el flujo en la dirección opuesta (polarización inversa).
```

### 4 — El transistor bipolar
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "intermedio"
  tags: ["transistor", "amplificacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["amplificar una señal", "controlar el flujo de corriente"], ["actuar como interruptor", "conmutar estados"]]

tipo: completar
respuestas_validas: ["amplificar una señal", "actuar como interruptor"]

enunciado: "Dependiendo de cómo se polarice, un transistor puede utilizarse para ___ o para ___."

respuesta: datos[escenario_idx][0]

explicacion: |
  El transistor es el componente fundamental de la electrónica moderna; puede funcionar en la región activa (amplificación) o en la región de saturación/corte (como interruptor).
```

### 5 — Orden de componentes por función
```
metadata:
  materia: "electronica"
  tema: "componentes_basicos"
  nivel: "basico"
  tags: ["ordenar", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Resistencia", "Capacitor", "Diodo", "Transistor"]

enunciado: "Ordena los siguientes componentes según su función principal de 'limitación', 'almacenamiento', 'rectificación' y 'conmutación' respectivamente:"

respuesta: ["Resistencia", "Capacitor", "Diodo", "Transistor"]

explicacion: |
  La secuencia correcta es: Resistencia (limita), Capacitor (almacena), Diodo (rectifica/direcciona) y Transistor (conmutación/amplificación).
```