### 1 — El algoritmo de la receta
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "secuencia", "logica"]

enunciado: "Para preparar un té, un algoritmo debe seguir un orden lógico. Si el orden es: 1. Hervir agua, 2. Poner la bolsa en la taza, 3. Verter el agua en la taza. ¿Cuál es la secuencia correcta para que el proceso sea efectivo?"

opciones_explicitas: ["1, 2, 3", "2, 1, 3", "2, 3, 1", "3, 2, 1"]
respuesta: "2, 1, 3"
tipo: "mc"

explicacion: |
  Un algoritmo requiere que los pasos sigan una secuencia lógica donde cada paso dependa del anterior o prepare el escenario para el siguiente. En este caso, no puedes verter el agua si no está hervida, y es más eficiente tener la bolsa ya en la taza.
```

### 2 — El concepto de finitud
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "finitud"]

enunciado: "Un algoritmo debe ser una secuencia de pasos que tiene un principio y un fin, es decir, debe terminar después de realizar un número limitado de instrucciones. ¿Este concepto se conoce como finitud?"

respuesta: verdadero
tipo: "vf"

explicacion: |
  Correcto. La finitud es una de las características esenciales de un algoritmo: debe tener un número determinado de pasos y terminar en algún momento.
```

### 3 — Algoritmo de suma de dos números
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["calculo", "pasos"]

variables:
  datos: [[15, 10, 25], [5, 8, 13], [100, 50, 150]]
  idx: uno_de([0, 1, 2])

enunciado: "Considera el siguiente algoritmo para sumar dos números: 1. Leer primer número, 2. Leer segundo número, 3. Sumar ambos valores, 4. Mostrar resultado. Si los números ingresados son {datos[idx][0]} y {datos[idx][1]}, ¿cuál es el valor final que mostrará el paso 4?"

respuesta: datos[idx][2]
tipo: "input"
tolerancia_abs: 0

explicacion: |
  El algoritmo sigue una secuencia lógica de entrada, proceso y salida. En el caso sorteado, la suma de {datos[idx][0]} y {datos[idx][1]} es {datos[idx][2]}.
```

### 4 — El orden de los factores
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["orden", "logica"]

enunciado: "Para cambiar una bombilla (foco) quemada, se deben seguir estos pasos desordenados: 
- Colocar la bombilla nueva en el casquillo.
- Retirar la bombilla quemada.
- Asegurarse de que el interruptor esté apagado.
- Encender el interruptor para probar."

opciones_explicitas: ["Apagar, Retirar, Colocar, Encender", "Retirar, Apagar, Colocar, Encender", "Apagar, Colocar, Retirar, Encender", "Encender, Retirar, Colocar, Apagar"]
respuesta: "Apagar, Retirar, Colocar, Encender"
tipo: "mc"

explicacion: |
  La seguridad es primordial en un algoritmo de la vida real. Primero se debe asegurar que no haya corriente (Apagar), luego proceder al cambio físico y finalmente verificar el resultado.
```

### 5 — Completar el proceso de login
```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["completar", "logica"]

enunciado: "Un algoritmo de inicio de sesión sigue esta lógica: 1. Solicitar usuario y contraseña, 2. Comparar datos con la base de datos, 3. Si son correctos, permitir acceso; si no, mostrar error. En el paso 2, la acción principal es la ___."

respuestas_validas: ["comparación", "validación", "verificación"]
respuesta: "validación"
tipo: "completar"

explicacion: |
  En el contexto de algoritmos de seguridad, el paso donde se contrastan los datos ingresados con los almacenados se denomina validación o comparación.
```