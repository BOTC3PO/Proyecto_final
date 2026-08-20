### 1 — Concepto de bucle
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: "iteración"
tipo: completar
respuestas_validas: ["iteración", "iteracion"]

enunciado: "En programación, cada una de las repeticiones de un bloque de instrucciones dentro de un bucle se denomina ___."

explicacion: |
  Un bucle permite ejecutar un conjunto de instrucciones varias veces. Cada vez que el ciclo se ejecuta, se dice que ha ocurrido una iteración.
```

### 2 — Diferencia entre for y while
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["diferencias", "for", "while"]

respuesta: "falso"
tipo: vf

enunciado: "El bucle 'while' se utiliza preferentemente cuando se conoce de antemano el número exacto de veces que se debe repetir el bloque de código."

explicacion: |
  Falso. El bucle 'while' se basa en una condición lógica y se usa cuando no sabemos cuántas veces se repetirá. El bucle 'for' es el ideal cuando conocemos el número de iteraciones (iteraciones controladas).
```

### 3 — Componentes del bucle for
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "componentes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["i", "inicio", "paso"], ["cont", "valor_inicial", "incremento"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["i", "cont", "valor_inicial", "incremento"]

enunciado: "En una estructura de control 'for' estándar, el primer parámetro suele representar la ___ que actúa como contador."

explicacion: |
  La variable de control (comúnmente llamada 'i' o 'j') es la que toma los valores sucesivos durante el ciclo.
```

### 4 — Orden lógico de ejecución
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]
tipo: ordenar
opciones_explicitas: ["Inicializar variable", "Evaluar condición", "Ejecutar cuerpo", "Actualizar variable"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada ciclo para asegurar un funcionamiento correcto y evitar bucles infinitos."

explicacion: |
  Primero se verifica si la condición es verdadera, luego se ejecuta el código y finalmente se actualiza la variable de control para que la condición pueda llegar a ser falsa eventualmente.
```

### 5 — El bucle infinito
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["errores", "bucle_infinito"]

respuesta: "falso"
tipo: vf

enunciado: "Un bucle infinito ocurre únicamente cuando la condición de parada es siempre verdadera debido a un error de lógica en el programa."

explicacion: |
  Falso. Aunque es la causa más común (error de lógica), un bucle infinito también puede ser intencional (por ejemplo, en el bucle principal de un sistema operativo o un videojuego que espera una señal de salida).
```