### 1 — El proceso de la receta
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "secuencia"]

variables:
  escenario: uno_de([
    ["Para hacer un café: 1. Calentar agua, 2. Poner café en filtro, 3. Verter agua", "Verdadero"],
    ["Para encender una PC: 1. Presionar botón, 2. Conectar cable, 3. Esperar inicio", "Falso"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "Analiza el siguiente escenario: {escenario[idx][0]}. ¿Es una secuencia lógica y ordenada para resolver el problema planteado?"

explicacion: |
  Un algoritmo debe ser una secuencia finita y ordenada de pasos. En el primer caso, los pasos siguen un orden lógico para obtener el resultado. En el segundo, el orden es incorrecto (primero se debe conectar el cable).
```

### 2 — El algoritmo de la suma
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "orden"]

variables:
  pasos: [
    ["1. Leer primer número, 2. Leer segundo número, 3. Sumar ambos, 4. Mostrar resultado", "1. Leer primer número, 2. Leer segundo número, 3. Sumar ambos, 4. Mostrar resultado"],
    ["1. Mostrar resultado, 2. Sumar ambos, 3. Leer segundo número, 4. Leer primer número", "1. Mostrar resultado, 2. Sumar ambos, 3. Leer segundo número, 4. Leer primer número"],
    ["1. Sumar ambos, 2. Mostrar resultado, 3. Leer segundo número, 4. Leer primer número", "1. Sumar ambos, 2. Mostrar resultado, 3. Leer segundo número, 4. Leer primer número"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: pasos[idx][1]
tipo: ordenar

enunciado: "Ordena los pasos necesarios para realizar el algoritmo de suma de dos números:"

pasos_list:
  - "Leer primer número"
  - "Leer segundo número"
  - "Sumar ambos"
  - "Mostrar resultado"

explicacion: |
  Un algoritmo requiere un orden lógico. Para sumar, primero debemos obtener los datos (entrada), luego procesarlos (suma) y finalmente entregar el resultado (salida).
```

### 3 — Atributos de un algoritmo
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "caracteristicas"]

variables:
  caso: uno_de([
    ["Un proceso que no termina nunca", "Falso"],
    ["Un proceso con pasos finitos y definidos", "Verdadero"]
  ])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: vf

enunciado: "Un algoritmo debe ser necesariamente finito, es decir, debe tener un número determinado de pasos que se completan en un tiempo razonable. ¿Es esto correcto? {caso[idx][0]}"

explicacion: |
  La finitud es una característica esencial de todo algoritmo. Si un proceso no termina, no puede ser considerado un algoritmo funcional para resolver un problema.
```

### 4 — El ciclo de una lámpara
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "completar"]

respuesta: "encender"
tipo: completar
respuestas_validas: ["encender"]

enunciado: "Para resolver el problema de iluminar una habitación oscura, el primer paso del algoritmo debe ser ___ la luz."

explicacion: |
  En un algoritmo de acción, el primer paso debe ser la instrucción que cambia el estado del entorno para resolver el problema. En este caso, encender la luz.
```

### 5 — Identificación de errores
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["logica", "errores"]

variables:
  escenario: uno_de([
    ["1. Salir de casa, 2. Abrir la puerta, 3. Caminar hacia la calle", "Pasos desordenados"],
    ["1. Abrir la puerta, 2. Salir de casa, 3. Caminar hacia la calle", "Pasos correctos"]
  ])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["Pasos desordenados", "Pasos correctos"]

enunciado: "Analiza la secuencia: {escenario[idx][0]}. ¿Cuál es la clasificación de este algoritmo?"

explicacion: |
  Si el orden de los pasos impide alcanzar el objetivo de forma lógica (como intentar salir de casa antes de abrir la puerta), el algoritmo es incorrecto o está desordenado.
```