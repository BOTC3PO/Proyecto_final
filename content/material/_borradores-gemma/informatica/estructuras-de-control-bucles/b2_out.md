### 1 — El bucle for y la suma de rangos
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["for", "iteracion", "suma"]

variables:
  escenario: uno_de([
    [1, 10],
    [1, 5],
    [1, 20]
  ])
  limite: escenario[0]
  suma_final: escenario[1]

respuesta: suma_final
tipo: input
tolerancia_abs: 0

enunciado: "Considera un bucle que recorre un rango desde 1 hasta {limite} (inclusive) sumando cada valor a una variable acumuladora que inicia en 0. ¿Cuál es el valor final de la suma?"

pasos:
  - "Inicializar acumulador = 0"
  - "Iterar desde i = 1 hasta {limite}"
  - "En cada paso, sumar i al acumulador"

explicacion: |
  El bucle recorre todos los enteros desde 1 hasta el límite definido. La suma de los primeros n números se calcula con la fórmula (n * (n + 1)) / 2. En este caso, para un límite de {limite}, la suma es {suma_final}.
```

### 2 — Condición de parada en bucles while
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "condicion"]

variables:
  valor_inicial: 10
  divisor: 2
  resultado_final: 1

respuesta: falso
tipo: vf

enunciado: "Se ejecuta el siguiente pseudocódigo: \n x = {valor_inicial} \n while (x > 1): \n   x = x / {divisor} \n \n ¿La variable x terminará siendo exactamente igual a 1 al finalizar el bucle? (Verdadero/Falso)"

explicacion: |
  En cada iteración, x se divide por 2. La secuencia es: 10, 5, 2.5, 1.25, 0.625... Como x siempre será mayor que 1 hasta que cruce el umbral, el bucle se detiene cuando x <= 1. En este caso, el valor final es 0.625, por lo tanto, no es exactamente 1.
```

### 3 — Análisis de iteraciones
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["for", "anidado", "iteraciones"]

variables:
  i_max: 3
  j_max: 2

respuesta: 6
tipo: input
tolerancia_abs: 0

enunciado: "En un bucle anidado donde el bucle externo corre desde i = 1 hasta {i_max} y el bucle interno corre desde j = 1 hasta {j_max}, ¿cuántas veces se ejecutará el cuerpo del bucle interno en total?"

pasos:
  - "El bucle externo se ejecuta {i_max} veces"
  - "Por cada iteración del externo, el interno se ejecuta {j_max} veces"
  - "Total = {i_max} * {j_max}"

explicacion: |
  Cuando tenemos bucles anidados, el número total de iteraciones es el producto del número de iteraciones de cada bucle. En este caso, 3 * 2 = 6.
```

### 4 — Secuencia de ejecución
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "intermedio"
  tags: ["ordenar", "flujo"]

respuesta: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]
tipo: ordenar

opciones_explicitas: ["inicializar_contador", "evaluar_condicion", "ejecutar_cuerpo", "actualizar_contador"]

enunciado: "Ordena los pasos lógicos que sigue un bucle 'while' en cada iteración para asegurar su funcionamiento correcto:"

explicacion: |
  Primero se debe evaluar si la condición es verdadera. Si lo es, se ejecuta el código interno. Luego, es crucial actualizar la variable de control (incrementar o decrementar) para evitar un bucle infinito.
```

### 5 — El valor de la variable de control
```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_bucles"
  nivel: "basico"
  tags: ["while", "incremento"]

variables:
  puntos_iniciales: 5
  incremento: 2
  puntos_finales: 11

respuesta: "11"
tipo: completar

opciones_explicitas: ["11"]
respuestas_validas: ["11"]

enunciado: "Un programa tiene un bucle 'while' que continúa mientras 'puntos' sea menor que 10. Si 'puntos' comienza en {puntos_iniciales} y en cada iteración se le suma {incremento}, ¿cuál será el valor final de 'puntos' cuando el bucle termine?"

explicacion: |
  1. Inicio: puntos = 5. ¿5 < 10? Sí. Sumamos 2 -> puntos = 7.
  2. ¿7 < 10? Sí. Sumamos 2 -> puntos = 9.
  3. ¿9 < 10? Sí. Sumamos 2 -> puntos = 11.
  4. ¿11 < 10? No. El bucle termina. El valor final es 11.
```