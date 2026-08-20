### 1 — Definición de fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["fatiga", "esfuerzo_repetitivo"]

respuesta: "fatiga"
tipo: "completar"
respuestas_validas: ["fatiga"]

enunciado: "El fenómeno por el cual un material se rompe bajo la aplicación de esfuerzos cíclicos o repetitivos, incluso cuando el esfuerzo máximo es inferior al límite de fluencia del material, se denomina ___."

explicacion: |
  La fatiga es un proceso de degradación estructural que ocurre debido a la aplicación de cargas fluctuantes, lo que puede generar microgrietas que se propagan hasta causar la falla catastrófica.
```

### 2 — Componentes de la falla por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["mecanismo", "grieta"]

opciones_explicitas: ["Iniciación de grieta", "Propagación de grieta", "Fractura final"]
respuesta: "Iniciación de grieta"
tipo: "mc"

enunciado: "En un proceso de falla por fatiga, ¿cuál es la etapa inicial que ocurre generalmente en la superficie del material debido a concentradores de tensión?"

explicacion: |
  El proceso típico de fatiga comienza con la nucleación o iniciación de una microgrieta, seguida por su propagación gradual y, finalmente, la fractura súbita cuando la sección remanente no puede soportar la carga.
```

### 3 — Verdad o Falso: Esfuerzos estáticos
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["esfuerzo", "estatico"]

respuesta: falso
tipo: "vf"

enunciado: "Si un material está sometido a un esfuerzo constante (estático) que es menor a su límite de rotura, el material nunca fallará por fatiga."

explicacion: |
  Correcto. La fatiga requiere de la naturaleza cíclica o fluctuante de la carga. Un esfuerzo constante sin variaciones de amplitud no produce el mecanismo de fatiga.
```

### 4 — Secuencia de la fractura por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["secuencia", "falla"]

opciones_explicitas: ["Iniciación", "Propagación", "Fractura catastrófica"]
respuesta: ["Iniciación", "Propagación", "Fractura catastrófica"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas que ocurren durante la falla de un componente sometido a fatiga:"

explicacion: |
  La secuencia lógica es: primero se nuclea la grieta (iniciación), luego la grieta crece a través del material (propagación) y finalmente la sección restante falla de forma súbita (fractura).
```

### 5 — El límite de fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["limite_fatiga", "curva_s-n"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1]
tipo: "mc"
opciones_explicitas: ["Límite de fatiga", "Límite elástico", "Límite de rotura"]

enunciado: "En materiales como el acero, existe un valor de esfuerzo por debajo del cual el material puede soportar un número infinito de ciclos sin fallar. Este valor se conoce como ___."

pasos:
  - "Identificar el concepto relacionado con la resistencia a ciclos infinitos."

explicacion: |
  El límite de fatiga (o límite de resistencia a la fatiga) es el esfuerzo máximo que un material puede soportar sin presentar falla por fatiga tras un número de ciclos muy elevado.
```