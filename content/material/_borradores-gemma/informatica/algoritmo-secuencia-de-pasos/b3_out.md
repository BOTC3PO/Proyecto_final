### 1 — ¿Es un algoritmo siempre una secuencia infinita?
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "caracteristicas"]

respuesta: falso
tipo: vf

enunciado: "Un algoritmo se define como una secuencia de pasos que debe ser finita para poder resolver un problema."

explicacion: |
  Por definición, un algoritmo debe tener un fin. Si un proceso no termina nunca, se considera un bucle infinito, pero no un algoritmo válido para resolver un problema específico.
```

### 2 — El orden de los pasos
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "logica"]

variables:
  escenario: uno_de([
    ["Poner agua en la olla", "Poner la olla al fuego", "Echar la pasta"],
    ["Encender el motor", "Poner la llave en contacto", "Pisar el embrague"]
  ])

respuesta: escenario[2]
tipo: ordenar

opciones_explicitas:
  - "Poner agua en la olla"
  - "Poner la olla al fuego"
  - "Echar la pasta"

enunciado: "Para cocinar pasta, el orden lógico de los pasos es el siguiente:"

pasos:
  - "Primero preparamos el recipiente con el líquido."
  - "Luego aplicamos calor."
  - "Finalmente añadimos el ingrediente principal."

explicacion: |
  La secuencia debe ser lógica y ordenada; si alteramos el orden de los pasos, el algoritmo fallará en alcanzar su objetivo (la pasta cocida).
```

### 3 — ¿Algoritmo o Receta?
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["ambiguedad"]

respuesta: "ambos"
tipo: mc

opciones_explicitas:
  - "solo un algoritmo"
  - "solo una receta"
  - "ambos"

enunciado: "Si una receta de cocina sigue una secuencia finita, ordenada y clara de pasos para lograr un plato, ¿se puede considerar un algoritmo?"

explicacion: |
  Correcto. Un algoritmo es un concepto general. Una receta de cocina es un ejemplo de un algoritmo aplicado al mundo real.
```

### 4 — La importancia de la precisión
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["ambiguedad", "instrucciones"]

respuesta: "ambiguo"
tipo: completar

respuestas_validas:
  - "ambiguo"
  - "preciso"

enunciado: "Si una instrucción en un algoritmo dice 'añadir un poco de sal' sin especificar la cantidad, el paso es considerado ___________."

explicacion: |
  Un algoritmo debe ser preciso. Las instrucciones ambiguas pueden llevar a resultados diferentes según quién o qué ejecute el algoritmo, rompiendo la determinística.
```

### 5 — ¿Puede un algoritmo ser desordenado?
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "logica"]

respuesta: falso
tipo: vf

enunciado: "Un conjunto de pasos que no siguen un orden lógico pero que eventualmente llegan a un resultado se considera un algoritmo válido."

explicacion: |
  Falso. La secuencia debe ser estrictamente ordenada. Si el orden de los pasos es incorrecto, el algoritmo no es válido porque no garantiza la solución del problema.
```