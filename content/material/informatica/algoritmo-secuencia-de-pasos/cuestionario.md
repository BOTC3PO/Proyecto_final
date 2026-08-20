# Informatica — Algoritmo secuencia de pasos (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Algoritmo

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "secuencia finita de pasos"
tipo: completar
respuestas_validas:
  - "secuencia finita de pasos"
  - "pasos ordenados"
  - "instrucciones"

enunciado: "Un algoritmo se define como una ___ para resolver un problema o realizar una tarea."

explicacion: |
  Un algoritmo es una serie de pasos ordenados y finitos que permiten alcanzar un objetivo o resolver un problema.
```

### 2 — Propiedades de un Algoritmo

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["propiedades", "finitud"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un algoritmo sea considerado como tal, debe ser finito, es decir, debe tener un número determinado de pasos y terminar en algún momento."

explicacion: |
  Efectivamente, si un proceso no termina nunca, no es un algoritmo funcional para resolver un problema específico, sino un bucle infinito.
```

### 3 — Orden de los pasos

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Mojar platos", "Lavar platos", "Secar platos"]
respuesta_orden: ["Mojar platos", "Lavar platos", "Secar platos"]

enunciado: "Un algoritmo requiere que los pasos sigan un orden lógico. Para lavar los platos correctamente, ¿cuál es la secuencia correcta de estos pasos?"

pasos:
  - "Identificar los elementos necesarios."
  - "Establecer el orden lógico de ejecución."
  - "Verificar que la secuencia resuelva el problema."

explicacion: |
  El orden es fundamental. Si los pasos se ejecutan fuera de su secuencia lógica, el algoritmo fallará en alcanzar el objetivo.
```

### 4 — Componentes de un Algoritmo

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["entrada", "salida", "procesamiento"]

respuesta: "entrada, procesamiento y salida"
tipo: mc
opciones_explicitas: ["entrada, procesamiento y salida", "inicio, desarrollo y fin", "datos, código y error", "input, loop y output"]

enunciado: "Todo algoritmo procesa información. ¿Cuáles son las tres etapas fundamentales de su estructura?"

explicacion: |
  Los algoritmos reciben datos de entrada, realizan procesos sobre ellos y devuelven un resultado o salida.
```

### 5 — Precisión en Algoritmos

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["precision", "ambiguedad"]

respuesta: falso
tipo: vf

enunciado: "Un buen algoritmo debe ser ambiguo, permitiendo que los pasos se interpreten de diferentes maneras según el programador."

explicacion: |
  Falso. Un algoritmo debe ser preciso y no ambiguo; cada paso debe estar claramente definido para que siempre produzca el mismo resultado ante los mismos datos.
```

### 6 — El algoritmo de la receta

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

### 7 — El concepto de finitud

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

### 8 — Algoritmo de suma de dos números

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

### 9 — El orden de los factores

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["orden", "logica"]

enunciado: |
  Para cambiar una bombilla (foco) quemada, se deben seguir estos pasos desordenados:
  - Colocar la bombilla nueva en el casquillo.
  - Retirar la bombilla quemada.
  - Asegurarse de que el interruptor esté apagado.
  - Encender el interruptor para probar.

opciones_explicitas: ["Apagar, Retirar, Colocar, Encender", "Retirar, Apagar, Colocar, Encender", "Apagar, Colocar, Retirar, Encender", "Encender, Retirar, Colocar, Apagar"]
respuesta: "Apagar, Retirar, Colocar, Encender"
tipo: mc

explicacion: |
  La seguridad es primordial en un algoritmo de la vida real. Primero se debe asegurar que no haya corriente (Apagar), luego proceder al cambio físico y finalmente verificar el resultado.
```

### 10 — Completar el proceso de login

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["completar", "logica"]

enunciado: "Un algoritmo de inicio de sesión sigue esta lógica: 1. Solicitar usuario y contraseña, 2. Comparar datos con la base de datos, 3. Si son correctos, permitir acceso; si no, mostrar error. En el paso 2, la acción principal es la ___."

respuestas_validas:
  - "comparación"
  - "validación"
  - "verificación"
respuesta: "validación"
tipo: "completar"

explicacion: |
  En el contexto de algoritmos de seguridad, el paso donde se contrastan los datos ingresados con los almacenados se denomina validación o comparación.
```

### 11 — ¿Es un algoritmo siempre una secuencia infinita?

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

### 12 — El orden de los pasos

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "logica"]

tipo: ordenar

opciones_explicitas:
  - "Poner agua en la olla"
  - "Poner la olla al fuego"
  - "Echar la pasta"

respuesta_orden: ["Poner agua en la olla", "Poner la olla al fuego", "Echar la pasta"]

enunciado: "Para cocinar pasta, el orden lógico de los pasos es el siguiente:"

pasos:
  - "Primero preparamos el recipiente con el líquido."
  - "Luego aplicamos calor."
  - "Finalmente añadimos el ingrediente principal."

explicacion: |
  La secuencia debe ser lógica y ordenada; si alteramos el orden de los pasos, el algoritmo fallará en alcanzar su objetivo (la pasta cocida).
```

### 13 — ¿Algoritmo o Receta?

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

### 14 — La importancia de la precisión

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

### 15 — ¿Puede un algoritmo ser desordenado?

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

### 16 — Algoritmo vs. Proceso

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "conceptos_base"]

respuesta: "algoritmo"
tipo: "completar"
respuestas_validas:
  - "algoritmo"

enunciado: "Mientras que un proceso puede ser una serie de acciones desordenadas o continuas, un ___ es una secuencia finita, definida y ordenada de pasos para resolver un problema específico."

explicacion: |
  Un algoritmo se distingue por ser una secuencia estructurada y con un fin determinado, a diferencia de un proceso que puede ser una ejecución continua sin una estructura de pasos estricta para un fin único.
```

### 17 — Propiedad de la Finitud

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["propiedades", "finitud"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es correcto afirmar que un algoritmo puede ejecutarse infinitamente sin llegar nunca a un estado de finalización?"

explicacion: |
  Falso. Una de las propiedades fundamentales de un algoritmo es la finitud: debe terminar tras un número limitado de pasos. Un proceso que no termina se denomina bucle infinito o loop.
```

### 18 — Algoritmo vs. Código

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["algoritmo_vs_codigo", "abstraccion"]

respuesta: "La lógica abstracta del procedimiento"
tipo: mc
opciones_explicitas: ["La implementación en un lenguaje de programación", "La lógica abstracta del procedimiento"]

enunciado: "Si comparamos un algoritmo con su implementación en un lenguaje de programación (código), el algoritmo se distingue por ser: ___"

explicacion: |
  El algoritmo es el diseño lógico y abstracto (el "qué" hacer), mientras que el código es la implementación técnica en un lenguaje específico (el "cómo" hacerlo en una máquina).
```

### 19 — Orden de los pasos

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "secuencia"]

respuesta_orden: ["Paso 1: Entrada", "Paso 2: Proceso", "Paso 3: Salida"]
tipo: "ordenar"
opciones_explicitas: ["Paso 1: Entrada", "Paso 2: Proceso", "Paso 3: Salida"]

enunciado: "Para que un algoritmo sea efectivo, debe seguir una secuencia lógica. Ordene los componentes fundamentales de un algoritmo de procesamiento de datos:"

explicacion: |
  La estructura clásica de un algoritmo requiere primero recibir datos (entrada), transformarlos mediante instrucciones (proceso) y entregar un resultado (salida).
```

### 20 — Determinismo

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["determinismo", "precisicion"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas:
  - "precisión"

enunciado: "A diferencia de una instrucción ambigua, un algoritmo debe poseer ___; esto significa que, ante los mismos datos de entrada, siempre debe producir el mismo resultado tras seguir los mismos pasos."

explicacion: |
  La precisión (o determinismo) garantiza que no haya ambigüedad en los pasos, asegurando que el camino hacia la solución sea único y predecible para la computadora.
```

### 21 — El proceso de la receta

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "secuencia"]

variables:
  escenario: uno_de([["Para hacer un café: 1. Calentar agua, 2. Poner café en filtro, 3. Verter agua", "Verdadero"], ["Para encender una PC: 1. Presionar botón, 2. Conectar cable, 3. Esperar inicio", "Falso"]])

respuesta: escenario[1]
tipo: completar
enunciado: "Analiza el siguiente escenario: {escenario[0]}. ¿Es una secuencia lógica y ordenada para resolver el problema planteado? (Verdadero/Falso)"

explicacion: |
  Un algoritmo debe ser una secuencia finita y ordenada de pasos. En el primer caso, los pasos siguen un orden lógico para obtener el resultado. En el segundo, el orden es incorrecto (primero se debe conectar el cable).
```

### 22 — El algoritmo de la suma

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "orden"]

tipo: ordenar

opciones_explicitas: ["Leer primer número", "Leer segundo número", "Sumar ambos", "Mostrar resultado"]
respuesta_orden: ["Leer primer número", "Leer segundo número", "Sumar ambos", "Mostrar resultado"]

enunciado: "Ordena los pasos necesarios para realizar el algoritmo de suma de dos números:"

explicacion: |
  Un algoritmo requiere un orden lógico. Para sumar, primero debemos obtener los datos (entrada), luego procesarlos (suma) y finalmente entregar el resultado (salida).
```

### 23 — Atributos de un algoritmo

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "caracteristicas"]

variables:
  caso: uno_de([["Un proceso que no termina nunca", "Falso"], ["Un proceso con pasos finitos y definidos", "Verdadero"]])

respuesta: caso[1]
tipo: completar
enunciado: "Un algoritmo debe ser necesariamente finito, es decir, debe tener un número determinado de pasos que se completan en un tiempo razonable. ¿Es esto correcto para describir lo siguiente: {caso[0]}? (Verdadero/Falso)"

explicacion: |
  La finitud es una característica esencial de todo algoritmo. Si un proceso no termina, no puede ser considerado un algoritmo funcional para resolver un problema.
```

### 24 — El ciclo de una lámpara

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "completar"]

respuesta: "encender"
tipo: completar
respuestas_validas:
  - "encender"

enunciado: "Para resolver el problema de iluminar una habitación oscura, el primer paso del algoritmo debe ser ___ la luz."

explicacion: |
  En un algoritmo de acción, el primer paso debe ser la instrucción que cambia el estado del entorno para resolver el problema. En este caso, encender la luz.
```

### 25 — Identificación de errores

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["logica", "errores"]

variables:
  escenario: uno_de([["1. Salir de casa, 2. Abrir la puerta, 3. Caminar hacia la calle", "Pasos desordenados"], ["1. Abrir la puerta, 2. Salir de casa, 3. Caminar hacia la calle", "Pasos correctos"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["Pasos desordenados", "Pasos correctos"]

enunciado: "Analiza la secuencia: {escenario[0]}. ¿Cuál es la clasificación de este algoritmo?"

explicacion: |
  Si el orden de los pasos impide alcanzar el objetivo de forma lógica (como intentar salir de casa antes de abrir la puerta), el algoritmo es incorrecto o está desordenado.
```
