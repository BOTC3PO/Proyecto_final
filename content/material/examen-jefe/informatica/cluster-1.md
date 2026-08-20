# Examen jefe — Maestro del Algoritmo

> Logro #171. Completaste el parcial dominando lógica booleana, estructuras de datos y persistencia de información. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **120 preguntas totales** en 5/5 secciones.

---

## Sección: algebra-booleana (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["algebra_booleana", "binario"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El álgebra booleana usa sólo dos valores: 1 (verdadero/encendido) y 0 (falso/apagado)."

pasos:
  - "Es la misma lógica de verdadero/falso vista en Filosofía, aplicada a valores binarios."

explicacion: |
  Verdadero: 1 y 0 son los únicos valores del álgebra booleana.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación AND da resultado 1 sólo si AMBAS entradas son 1, igual que la conjunción lógica (∧) vista en Filosofía."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: AND es la versión binaria exacta de la conjunción."

explicacion: |
  Verdadero: AND requiere que las dos entradas sean verdaderas
  (1), igual que la conjunción.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación OR da resultado 1 si AL MENOS UNA entrada es 1, igual que la disyunción lógica (∨) vista en Filosofía."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: OR es la versión binaria exacta de la disyunción."

explicacion: |
  Verdadero: OR sólo da 0 cuando ambas entradas son 0.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["not"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación NOT invierte el valor de entrada: 1 se convierte en 0, y 0 se convierte en 1."

pasos:
  - "Es la versión binaria exacta de la negación (¬) vista en Filosofía."

explicacion: |
  Verdadero: NOT siempre invierte el valor recibido.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "1"
tipo: completar

enunciado: "Si A=1 y B=1, ¿cuál es el resultado de A AND B?"

pasos:
  - "AND da 1 sólo cuando ambas entradas son 1."

explicacion: |
  Con ambas entradas en 1, AND produce 1.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1 y B=0, ¿cuál es el resultado de A AND B?"

pasos:
  - "Basta con que UNA entrada sea 0 para que AND dé 0."

explicacion: |
  Con una entrada en 0, AND produce 0, sin importar el valor de la
  otra.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "1"
tipo: completar

enunciado: "Si A=1 y B=0, ¿cuál es el resultado de A OR B?"

pasos:
  - "OR da 1 si al menos una entrada es 1."

explicacion: |
  Con al menos una entrada en 1, OR produce 1.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=0 y B=0, ¿cuál es el resultado de A OR B?"

pasos:
  - "OR sólo da 0 cuando AMBAS entradas son 0."

explicacion: |
  Con ambas entradas en 0, OR produce 0.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["not", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1, ¿cuál es el resultado de NOT A?"

pasos:
  - "NOT siempre invierte el valor de entrada."

explicacion: |
  NOT de 1 es 0.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["xor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "XOR (\"o exclusivo\") da resultado 1 sólo cuando las dos entradas son DISTINTAS entre sí (una es 1 y la otra 0)."

pasos:
  - "A diferencia de OR, XOR da 0 cuando ambas entradas son iguales (las dos 1 o las dos 0)."

explicacion: |
  Verdadero: XOR exige diferencia entre las entradas, no basta con
  que al menos una sea 1.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["xor", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1 y B=1, ¿cuál es el resultado de A XOR B?"

pasos:
  - "XOR da 0 cuando las dos entradas son iguales, aunque ambas sean 1."

explicacion: |
  Con entradas iguales, XOR siempre da 0, a diferencia de OR (que
  daría 1).
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["or", "xor", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre OR y XOR es que OR da 1 cuando ambas entradas son 1, y XOR da 0 en ese mismo caso."

pasos:
  - "Con A=1 y B=1: OR da 1, XOR da 0. Es la única fila donde difieren en su tabla de verdad."

explicacion: |
  Verdadero: es la diferencia clave entre disyunción inclusiva (OR) y
  disyunción exclusiva (XOR).
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["compuertas_logicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada operación booleana (AND, OR, NOT) corresponde a una compuerta lógica, un componente físico real de un circuito electrónico dentro de un chip."

pasos:
  - "Millones de estas compuertas combinadas forman el procesador de cualquier computadora."

explicacion: |
  Verdadero: el álgebra booleana no es sólo teoría abstracta, tiene
  una implementación física directa en hardware.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["algebra_booleana", "programacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En casi cualquier lenguaje de programación, `&&` (AND), `||` (OR) y `!` (NOT) son los operadores lógicos usados en condicionales (\"if\")."

pasos:
  - "Es la misma álgebra booleana aplicada al código, en vez de a un circuito o una tabla de verdad abstracta."

explicacion: |
  Verdadero: estos operadores implementan directamente las
  operaciones booleanas en la mayoría de los lenguajes.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["and", "programacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un condicional como \"si (edad >= 18) AND (tiene_permiso)\" sólo se cumple si AMBAS condiciones son verdaderas al mismo tiempo."

pasos:
  - "Es el mismo comportamiento de AND aplicado a condiciones de programación en vez de a valores 1/0 sueltos."

explicacion: |
  Verdadero: AND en un condicional exige que todas las partes
  conectadas por AND sean verdaderas.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["algebra_booleana", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La misma estructura lógica que empezó como error de razonamiento en lenguaje cotidiano (falacias, Lengua) y se formalizó con proposiciones (Filosofía) termina siendo la base física y de código de una computadora (álgebra booleana, Informática)."

pasos:
  - "Es el \"cruce inesperado\" señalado en `troncos.md` (v2.6), la misma lógica vista en tres materias distintas."

explicacion: |
  Verdadero: es la síntesis completa de la cadena de tres temas en
  tres materias distintas.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["and", "tabla_de_verdad"]

variables:
  valores_a: [1, 1, 0, 0]
  valores_b: [1, 0, 1, 0]
  resultados: [1, 0, 0, 0]
  idx: uno_de([0, 1, 2, 3])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si A={valores_a[idx]} y B={valores_b[idx]}, ¿cuál es el resultado de A AND B?"

pasos:
  - "Sólo la combinación 1 y 1 da como resultado 1; el resto da 0."

explicacion: |
  Aplicando la regla de AND a cada combinación de entradas se obtiene
  el resultado correspondiente de la tabla de verdad.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["xor", "tabla_de_verdad"]

variables:
  valores_a: [1, 1, 0, 0]
  valores_b: [1, 0, 1, 0]
  resultados: [0, 1, 1, 0]
  idx: uno_de([0, 1, 2, 3])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si A={valores_a[idx]} y B={valores_b[idx]}, ¿cuál es el resultado de A XOR B?"

pasos:
  - "XOR da 1 sólo cuando las entradas son distintas entre sí."

explicacion: |
  Aplicando la regla de XOR (distinto=1, igual=0) a cada combinación
  se obtiene el resultado correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["algebra_booleana", "metodo"]

enunciado: "Ordená los pasos para construir una condición de programación que combine varias reglas con operadores booleanos."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada regla individual que debe cumplirse (o no)"
  - "Decidir si TODAS las reglas deben cumplirse a la vez (AND) o si basta con UNA (OR)"
  - "Agregar NOT donde haga falta invertir una condición"
  - "Verificar el resultado con al menos una combinación de valores de prueba"
respuesta_orden:
  - "Identificar cada regla individual que debe cumplirse (o no)"
  - "Decidir si TODAS las reglas deben cumplirse a la vez (AND) o si basta con UNA (OR)"
  - "Agregar NOT donde haga falta invertir una condición"
  - "Verificar el resultado con al menos una combinación de valores de prueba"

explicacion: |
  El proceso va de identificar las reglas individuales a combinarlas
  correctamente con los operadores booleanos adecuados.
```

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["algebra_booleana", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para permitir el acceso a un sistema sólo si el usuario tiene contraseña correcta Y no está bloqueado, conviene usar AND (ambas condiciones deben cumplirse), no OR."

pasos:
  - "OR permitiría el acceso con que se cumpla sólo una de las dos condiciones, lo cual sería un error de seguridad grave."

explicacion: |
  Verdadero: elegir el operador booleano correcto (AND vs. OR) tiene
  consecuencias prácticas reales, como en este caso de seguridad de
  acceso.
```

## Sección: algoritmo-secuencia-de-pasos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "secuencia finita de pasos"
tipo: completar
respuestas_validas: ["secuencia finita de pasos", "pasos ordenados", "instrucciones"]

enunciado: "Un algoritmo se define como una ___ para resolver un problema o realizar una tarea."

explicacion: |
  Un algoritmo es una serie de pasos ordenados y finitos que permiten alcanzar un objetivo o resolver un problema.
```

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

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "secuencia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Lavar platos", "Secar platos", "Mojar platos"],
    ["Encender motor", "Poner llave", "Soltar llave"]
  ]
  respuestas_correctas: [
    ["Mojar platos", "Lavar platos", "Secar platos"],
    ["Poner llave", "Encender motor", "Soltar llave"]
  ]

respuesta: escenarios[escenario_idx][0
tipo: ordenar
opciones_explicitas: ["Mojar platos", "Lavar platos", "Secar platos", "Poner llave", "Encender motor", "Soltar llave"]

enunciado: "Un algoritmo requiere que los pasos sigan un orden lógico. Si tenemos el siguiente problema: {escenarios[escenario_idx][0]}, ¿cuál es la secuencia correcta de pasos?"

pasos:
  - "Identificar los elementos necesarios."
  - "Establecer el orden lógico de ejecución."
  - "Verificar que la secuencia resuelva el problema."

explicacion: |
  El orden es fundamental. Si los pasos se ejecutan fuera de su secuencia lógica, el algoritmo fallará en alcanzar el objetivo.
```

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

respuesta: datos[idx][2
tipo: "input"
tolerancia_abs: 0

explicacion: |
  El algoritmo sigue una secuencia lógica de entrada, proceso y salida. En el caso sorteado, la suma de {datos[idx][0]} y {datos[idx][1]} es {datos[idx][2]}.
```

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

respuesta: escenario[2
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

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "conceptos_base"]

respuesta: "algoritmo"
tipo: "completar"
respuestas_validas: ["algoritmo"]

enunciado: "Mientras que un proceso puede ser una serie de acciones desordenadas o continuas, un ___ es una secuencia finita, definida y ordenada de pasos para resolver un problema específico."

explicacion: |
  Un algoritmo se distingue por ser una secuencia estructurada y con un fin determinado, a diferencia de un proceso que puede ser una ejecución continua sin una estructura de pasos estricta para un fin único.
```

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

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["algoritmo_vs_codigo", "abstraccion"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1
tipo: "mc"
opciones_explicitas: ["La implementación en un lenguaje de programación", "La lógica abstracta del procedimiento"]

enunciado: "Si comparamos un algoritmo con su implementación en un lenguaje de programación (código), el algoritmo se distingue por ser: ___"

datos:
  - ["La implementación en un lenguaje de programación", "La lógica abstracta del procedimiento"]
  - ["La lógica abstracta del procedimiento", "La implementación en un lenguaje de programación"]

explicacion: |
  El algoritmo es el diseño lógico y abstracto (el "qué" hacer), mientras que el código es la implementación técnica en un lenguaje específico (el "cómo" hacerlo en una máquina).
```

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["orden", "secuencia"]

respuesta: ["Paso 1: Entrada", "Paso 2: Proceso", "Paso 3: Salida"]
tipo: "ordenar"
opciones_explicitas: ["Paso 1: Entrada", "Paso 2: Proceso", "Paso 3: Salida"]

enunciado: "Para que un algoritmo sea efectivo, debe seguir una secuencia lógica. Ordene los componentes fundamentales de un algoritmo de procesamiento de datos:"

explicacion: |
  La estructura clásica de un algoritmo requiere primero recibir datos (entrada), transformarlos mediante instrucciones (proceso) y entregar un resultado (salida).
```

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "intermedio"
  tags: ["determinismo", "precisicion"]

respuesta: "precisión"
tipo: "completar"
respuestas_validas: ["precisión"]

enunciado: "A diferencia de una instrucción ambigua, un algoritmo debe poseer ___; esto significa que, ante los mismos datos de entrada, siempre debe producir el mismo resultado tras seguir los mismos pasos."

explicacion: |
  La precisión (o determinismo) garantiza que no haya ambigüedad en los pasos, asegurando que el camino hacia la solución sea único y predecible para la computadora.
```

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

respuesta: escenario[idx][1
tipo: completar
enunciado: "Analiza el siguiente escenario: {escenario[idx][0]}. ¿Es una secuencia lógica y ordenada para resolver el problema planteado?"

explicacion: |
  Un algoritmo debe ser una secuencia finita y ordenada de pasos. En el primer caso, los pasos siguen un orden lógico para obtener el resultado. En el segundo, el orden es incorrecto (primero se debe conectar el cable).
```

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

respuesta: pasos[idx][1
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

respuesta: caso[idx][1
tipo: completar
enunciado: "Un algoritmo debe ser necesariamente finito, es decir, debe tener un número determinado de pasos que se completan en un tiempo razonable. ¿Es esto correcto? {caso[idx][0]}"

explicacion: |
  La finitud es una característica esencial de todo algoritmo. Si un proceso no termina, no puede ser considerado un algoritmo funcional para resolver un problema.
```

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

respuesta: escenario[idx][1
tipo: mc

opciones_explicitas: ["Pasos desordenados", "Pasos correctos"]

enunciado: "Analiza la secuencia: {escenario[idx][0]}. ¿Cuál es la clasificación de este algoritmo?"

explicacion: |
  Si el orden de los pasos impide alcanzar el objetivo de forma lógica (como intentar salir de casa antes de abrir la puerta), el algoritmo es incorrecto o está desordenado.
```

## Sección: algoritmos-busqueda-ordenamiento (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

tipo: mc
opciones_explicitas: ["Compara elemento por elemento", "Divide la lista a la mitad", "Ordena de mayor a menor", "Busca solo en listas ordenadas"]

enunciado: "El algoritmo de búsqueda lineal funciona de la siguiente manera:"

explicacion: |
  La búsqueda lineal recorre cada elemento de la lista secuencialmente hasta encontrar el objetivo o terminar la lista.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: vf

enunciado: "Para que un algoritmo de búsqueda binaria sea efectivo, la lista de datos debe estar previamente ___."

respuestas_validas: ["ordenada"]

explicacion: |
  La búsqueda binaria utiliza la propiedad de orden para descartar la mitad de los elementos en cada paso. Sin orden, no se puede determinar qué mitad descartar.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "intermedio"
  tags: ["complejidad", "busqueda"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["10, 20, 30, 40, 50", "50"], ["5, 15, 25, 35", "5"]]

tipo: mc
opciones_explicitas: ["O(1)", "O(n)", "O(log n)", "O(n^2)"]

enunciado: "En el escenario {datos[escenario_idx][0]}, ¿cuál es la complejidad en el peor de los casos para una búsqueda lineal?"

explicacion: |
  En el peor de los casos, la búsqueda lineal debe revisar todos los elementos 'n', por lo tanto su complejidad es O(n).
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["ordenamiento", "burbuja"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si están desordenados", "Repetir hasta que no haya cambios"]

enunciado: "Ordena los pasos lógicos para completar una pasada del algoritmo de ordenamiento de burbuja (Bubble Sort):"

explicacion: |
  El algoritmo compara pares de elementos contiguos e intercambia sus posiciones si están en el orden incorrecto, repitiendo el proceso hasta que la lista esté lista.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda_ordenamiento"
  nivel: "basico"
  tags: ["ordenamiento", "burbuja"]

tipo: vf

enunciado: "El algoritmo de ordenamiento de burbuja tiene una complejidad temporal de O(n^2) en su peor caso."

explicacion: |
  Es correcto, ya que requiere dos bucles anidados (uno para las pasadas y otro para las comparaciones), resultando en n * n comparaciones en el peor escenario.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

enunciado: "Se tiene el siguiente array de enteros: [12, 45, 7, 23, 56, 10]. Si aplicamos un algoritmo de búsqueda lineal para encontrar el elemento 23, ¿cuál es el índice (empezando desde 0) donde se encuentra el elemento?"

opciones_explicitas: ["2", "3", "4", "5"]

respuesta: "3"
tipo: mc

explicacion: |
  La búsqueda lineal recorre el array elemento por elemento desde el inicio:
  - Índice 0: 12 (no es 23)
  - Índice 1: 45 (no es 23)
  - Índice 2: 7 (no es 23)
  - Índice 3: 23 (¡Encontrado!)
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

enunciado: "Para que un algoritmo de búsqueda binaria funcione correctamente sobre un conjunto de datos, es indispensable que los datos estén previamente ___."

respuestas_validas: ["ordenados"]

respuesta: "ordenados"
tipo: completar

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, el conjunto debe estar ordenado.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

variables:
  idx: uno_de([0, 1])
  escenario: [[[5, 2, 8], [2, 5, 8]], [[3, 1, 4], [1, 3, 4]]]

enunciado: "Considera el array {escenario[idx][0]}. Tras completar la primera pasada completa del algoritmo de ordenamiento burbuja (comparando pares adyacentes de izquierda a derecha), ¿cuál es el estado del array?"

opciones_explicitas: ["{escenario[idx][1]}", "[5, 8, 2]", "[2, 5, 8]", "[8, 5, 2]"]

respuesta: "{escenario[idx][1]}"
tipo: mc

explicacion: |
  En la primera pasada del Bubble Sort, el elemento más grande 'flota' hacia la última posición mediante intercambios sucesivos de pares adyacentes.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "binaria"]

enunciado: "Si buscamos un elemento en un array de 1024 elementos usando búsqueda binaria, ¿cuál es el número máximo de comparaciones que se realizarán en el peor de los casos?"

respuesta: 10
tipo: completar
tolerancia_abs: 0

explicacion: |
  La búsqueda binaria tiene una complejidad de O(log2(n)). 
  Como 2^10 = 1024, el número máximo de divisiones necesarias para reducir el espacio a un solo elemento es 10.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["ordenar", "burbuja"]

enunciado: "Ordena los siguientes pasos que describe el funcionamiento del algoritmo de burbuja para ordenar un array de n elementos:"

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso hasta que no haya más intercambios"]
tipo: ordenar

explicacion: |
  El algoritmo burbuja funciona comparando pares de elementos contiguos y moviendo el mayor hacia la derecha, repitiendo este ciclo hasta que la lista esté totalmente ordenada.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "binaria"]

tipo: mc
opciones_explicitas: ["El arreglo debe estar desordenado", "El arreglo debe estar ordenado", "El arreglo debe tener un tamaño impar", "No requiere ninguna condición"]

enunciado: "Para que el algoritmo de búsqueda binaria funcione correctamente y garantice encontrar el elemento (si existe), el arreglo de entrada debe estar ___."

respuesta: "El arreglo debe estar ordenado"

explicacion: |
  La búsqueda binaria funciona dividiendo el espacio de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, es indispensable que los elementos sigan un orden establecido.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["complejidad", "lineal"]

variables:
  n: 1000

tipo: completar
respuestas_validas: ["O(n)", "O(1)", "O(log n)", "O(n^2)"]

enunciado: "En el peor de los casos, si tenemos un arreglo de tamaño {n}, la complejidad temporal de una búsqueda lineal es ___."

respuesta: "O(n)"

explicacion: |
  En la búsqueda lineal, en el peor de los casos (cuando el elemento es el último o no está), debemos comparar el elemento buscado con cada uno de los {n} elementos del arreglo.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["errores", "indices"]

tipo: vf

enunciado: "Si un algoritmo de búsqueda binaria utiliza un cálculo de punto medio como `medio = (inicio + fin) / 2` en un lenguaje con desbordamiento de enteros, puede fallar si la suma de `inicio` y `fin` supera el valor máximo permitido para un entero."

respuesta: verdadero

explicacion: |
  Este es un error clásico. Para evitar el desbordamiento (overflow), se recomienda usar `medio = inicio + (fin - inicio) / 2`.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

tipo: ordenar
opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

enunciado: "Ordena los pasos lógicos de una implementación estándar del algoritmo de ordenamiento burbuja (Bubble Sort):"

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor que el segundo", "Repetir el proceso para todos los elementos", "Terminar cuando no haya más intercambios"]

explicacion: |
  El método de burbuja funciona comparando pares de elementos contiguos y moviendo el más grande hacia el final en cada iteración.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["eficiencia", "comparacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[100, 7], [100, 100]]
  valor_buscado: uno_de(["log2(n)", "n"])

tipo: mc
opciones_explicitas: ["log2(n)", "n"]

enunciado: "Si comparamos la eficiencia teórica de una búsqueda binaria frente a una búsqueda lineal, la búsqueda binaria tiene una complejidad de ___ en el peor de los casos."

respuesta: "log2(n)"

explicacion: |
  La búsqueda binaria reduce el espacio de búsqueda a la mitad en cada paso, lo que resulta en una complejidad logarítmica, mucho más eficiente que la lineal para conjuntos de datos grandes.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "eficiencia"]

variables:
  es_ordenado: true

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Para que un algoritmo de búsqueda sea más eficiente que la búsqueda lineal, aprovechando la estructura de los datos, el arreglo debe estar previamente {es_ordenado} y el algoritmo utilizado sería la búsqueda ___."

explicacion: |
  La búsqueda binaria requiere que el conjunto de datos esté ordenado para poder dividir el espacio de búsqueda a la mitad en cada paso, logrando una complejidad de O(log n), mientras que la lineal siempre recorre uno por uno.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "complejidad"]

variables:
  n_elementos: 10

respuesta: 100
tipo: completar
tolerancia_abs: 0

enunciado: "En el peor de los casos, un algoritmo de ordenamiento de burbuja (Bubble Sort) realiza aproximadamente {n_elementos * n_elementos} comparaciones para un arreglo de tamaño {n_elementos}."

pasos:
  - "Identificar que el peor caso ocurre cuando el arreglo está en orden inverso."
  - "Calcular el número de comparaciones como n^2."

explicacion: |
  El algoritmo de burbuja compara pares adyacentes. En el peor de los casos, realiza n*(n-1)/2 comparaciones, lo cual es asimptóticamente O(n^2). Para n=10, el valor aproximado es 100.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda_binaria", "requisitos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es necesario que un arreglo esté ordenado para aplicar el algoritmo de búsqueda binaria?"

explicacion: |
  La búsqueda binaria funciona dividiendo el rango de búsqueda basándose en la comparación del elemento medio con el objetivo. Si el arreglo no está ordenado, la decisión de ir a la izquierda o a la derecha no es válida.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "basico"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el primero es mayor", "Repetir hasta que no haya intercambios"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos fundamentales para la ejecución de una iteración estándar de un algoritmo de burbuja:"

explicacion: |
  El algoritmo recorre la lista comparando parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este proceso hasta que el arreglo esté ordenado.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "intermedio"
  tags: ["eficiencia", "comparacion"]

variables:
  idx_caso: uno_de([0, 1])
  es_mejor_binaria: ["verdadero", "falso"][idx_caso]
  tipo_busqueda: ["binaria", "lineal"][idx_caso]

respuesta: "binaria"
tipo: mc
opciones_explicitas: ["lineal", "binaria"]

enunciado: "Si comparamos la eficiencia de búsqueda en un arreglo de un millón de elementos, la búsqueda {tipo_busqueda} es preferible sobre la búsqueda lineal porque su complejidad es menor. El nombre de la búsqueda más eficiente es ___."

explicacion: |
  La búsqueda binaria tiene una complejidad logarítmica O(log n), lo que significa que para un millón de elementos solo requiere unos 20 pasos, mientras que la lineal podría requerir un millón.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda", "lineal"]

variables:
  escenario: [[ [12, 45, 7, 23, 56], 23 ], [ [5, 18, 2, 9, 31], 9 ], [ [10, 40, 20, 50, 30], 40 ]]
  idx: uno_de([0, 1, 2])
  lista: escenario[idx][0]
  objetivo: escenario[idx][1]

respuesta: "lineal"
tipo: mc
opciones_explicitas: ["lineal", "binaria", "exponencial"]

enunciado: "Si queremos encontrar el elemento {objetivo} en la lista {lista} sin saber si está ordenada, ¿qué tipo de búsqueda es la única garantizada para encontrarlo?"

explicacion: |
  En una lista desordenada, la búsqueda binaria no funciona porque requiere que los elementos sigan un orden. Por lo tanto, debemos recorrer la lista elemento por elemento, lo que se conoce como búsqueda lineal.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "basico"
  tags: ["busqueda_binaria", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicar el algoritmo de búsqueda binaria de manera eficiente, la lista de datos debe estar previamente ordenada."

explicacion: |
  La búsqueda binaria funciona dividiendo el rango de búsqueda a la mitad en cada paso. Para decidir si el objetivo está a la izquierda o a la derecha del punto medio, es indispensable que los elementos estén ordenados.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "pasos"]

opciones_explicitas: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]

respuesta: ["Comparar elementos adyacentes", "Intercambiar si el de la izquierda es mayor", "Repetir el proceso para todos los elementos"]
tipo: ordenar

enunciado: "Indica el orden lógico de las operaciones básicas que realiza el algoritmo de ordenamiento de burbuja (Bubble Sort) para ordenar una lista de menor a mayor:"

explicacion: |
  El método de burbuja compara parejas de elementos contiguos y los intercambia si están en el orden incorrecto, repitiendo este ciclo hasta que no haya más intercambios necesarios.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_busqueda"
  nivel: "avanzado"
  tags: ["complejidad", "big_o"]

variables:
  caso: [[ "O(n)", "lineal" ], [ "O(log n)", "logarítmica" ]]
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: completar
respuestas_validas: ["lineal", "logarítmica"]

enunciado: "La complejidad temporal de la búsqueda binaria en el mejor de los casos de éxito (encontrar el elemento justo en el medio) se describe como ___."

explicacion: |
  Aunque en el peor caso la búsqueda binaria es O(log n), si el elemento está justo en la posición central de la primera división, la complejidad es constante, pero el término general para su eficiencia comparada con la lineal es logarítmica.
```

```
metadata:
  materia: "informatica"
  tema: "algoritmos_ordenamiento"
  nivel: "intermedio"
  tags: ["burbuja", "eficiencia"]

variables:
  datos: [[ 10, 5, 8, 2 ], [ 3, 1, 4, 2 ], [ 7, 9, 6, 5 ]]
  idx: uno_de([0, 1, 2])
  lista: datos[idx]

respuesta: "burbuja"
tipo: mc
opciones_explicitas: ["burbuja", "quicksort", "merge"]

enunciado: "Si aplicamos el algoritmo de burbuja a la lista {lista}, ¿cuál es el número de intercambios realizados si comparamos solo el primer par de elementos en la primera pasada?"

pasos:
  - "Comparar el primer elemento con el segundo."
  - "Si el primero es mayor que el segundo, intercambiarlos."
  - "Contar los intercambios realizados."

explicacion: |
  En el algoritmo de burbuja, se comparan elementos adyacentes. Si el elemento de la izquierda es mayor que el de la derecha, se realiza un intercambio para ir moviendo el valor más grande hacia el final de la lista.
```

## Sección: almacenamiento-volatil-vs-no-volatil (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "hardware", "conceptos"]

tipo: mc
opciones_explicitas: ["Memoria volátil", "Memoria no volátil", "Procesador", "Bus de datos"]

enunciado: "La característica que define a una memoria como 'volátil' es que su contenido se pierde cuando se corta el suministro de ___."

respuesta: "Memoria volátil"

explicacion: |
  La memoria volátil (como la RAM) requiere energía eléctrica constante para mantener almacenada la información. Sin energía, los datos se borran.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["ram", "disco_duro"]

variables:
  escenario: uno_de([["RAM", "SSD"], ["ROM", "HDD"], ["Cache", "Pendrive"]])
  es_volatil: uno_de([true, false])

tipo: completar
enunciado: "Si el componente es {escenario[0]}, ¿se considera que es una memoria volátil? (Respuesta: verdadero o falso)"

respuesta: "true"

explicacion: |
  En el caso de {escenario[0]}, la respuesta es verdadero porque la {escenario[0]} es volátil.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

tipo: mc
opciones_explicitas: ["Disco Duro (HDD)", "Memoria RAM", "Memoria Caché", "Memoria ROM"]

enunciado: "¿Cuál de los siguientes dispositivos es un ejemplo de almacenamiento NO volátil?"

respuesta: "Disco Duro (HDD)"

explicacion: |
  Los discos duros (HDD) o unidades de estado sólido (SSD) conservan la información incluso cuando la computadora se apaga, por lo tanto, son no volátiles.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["terminologia", "conceptos"]

tipo: completar
opciones_explicitas: ["persistente", "temporal", "aleatoria", "secuencial"]
respuestas_validas: ["temporal"]

enunciado: "La función principal de la memoria RAM es servir como un espacio de almacenamiento ___ para que el procesador acceda rápidamente a los datos en ejecución."

respuesta: "temporal"

explicacion: |
  La RAM es una memoria de acceso rápido pero de naturaleza temporal; su propósito es sostener los datos que se están usando en el momento exacto.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["flujo_datos", "hardware"]

tipo: ordenar
opciones_explicitas: ["Carga de datos de disco a RAM", "Ejecución de procesos en CPU", "Guardado de cambios en disco"]

respuesta: ["Carga de datos de disco a RAM", "Ejecución de procesos en CPU", "Guardado de cambios en disco"]

enunciado: "Ordena el flujo lógico de la información cuando un usuario trabaja en un documento y decide guardarlo:"

explicacion: |
  Primero los datos pasan del almacenamiento no volátil (disco) a la memoria volátil (RAM) para ser procesados, y finalmente se escriben de nuevo en el disco para persistir.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "hardware", "ram"]

respuesta: falso
tipo: vf

enunciado: "Si apagas una computadora que tiene 16 GB de memoria RAM, la información almacenada en ella se mantiene intacta gracias a que la RAM es un tipo de memoria no volátil."

explicacion: |
  La memoria RAM (Random Access Memory) es volátil. Esto significa que requiere una corriente eléctrica constante para mantener los datos; al cortar la energía, los datos se pierden.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

variables:
  escenario_idx: uno_de([0, 1])
  dispositivos: [["Memoria RAM", "Memoria Caché"], ["Disco Duro HDD", "Memoria Flash USB"]]
  tipo_memoria: [["volátil", "volátil"], ["no volátil", "no volátil"]]

respuesta: tipo_memoria[escenario_idx
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {dispositivos[escenario_idx]}, ¿cuál es su característica principal respecto a la persistencia de datos?"

explicacion: |
  El dispositivo seleccionado pertenece a la categoría de memoria {tipo_memoria[escenario_idx]}.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "guardado"]

respuesta: "disco"
tipo: completar
respuestas_validas: ["disco", "memoria"]

enunciado: "Cuando estás escribiendo un documento en un procesador de texto, los cambios se mantienen temporalmente en la memoria RAM. Para que el archivo no se pierda al apagar la PC, debes realizar una acción de guardado que traslade la información desde la RAM hacia el ___."

pasos:
  - "1. El procesador carga el archivo desde el almacenamiento permanente a la RAM."
  - "2. El usuario realiza cambios (estos viven en la RAM)."
  - "3. El comando 'Guardar' copia los datos de la RAM al almacenamiento persistente."

explicacion: |
  El proceso de guardado consiste en transferir la información de la memoria volátil (RAM) al dispositivo de almacenamiento no volátil (como un disco duro o SSD).
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["jerarquia", "orden"]

respuesta: ["Caché L1", "Memoria RAM", "Disco SSD"]
tipo: ordenar
opciones_explicitas: ["Caché L1", "Memoria RAM", "Disco SSD"]

enunciado: "Ordena los siguientes componentes de hardware de mayor a menor velocidad de acceso (desde el más rápido al más lento):"

explicacion: |
  En la jerarquía de memoria, la velocidad disminuye a medida que aumenta la capacidad y la persistencia. La caché es la más rápida, seguida de la RAM y finalmente el almacenamiento masivo (SSD/HDD).
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["consecuencia", "energia"]

variables:
  caso_idx: uno_de([0, 1])
  situacion: [
    ["Estás editando una foto y se corta la luz sin haber guardado.", "perder"],
    ["Estás viendo una película descargada en un pendrive y se corta la luz.", "nada"]
  ]
  resultado: ["perder", "nada"]

respuesta: resultado[caso_idx
tipo: mc
opciones_explicitas: ["perder", "nada"]

enunciado: "Analiza el siguiente caso: {situacion[caso_idx]} ¿Qué sucede con la información que se estaba procesando en ese momento?"

explicacion: |
  En el caso de la edición (volátil), la información se pierde porque la RAM se vacía. En el caso del pendrive (no volátil), el archivo ya está grabado físicamente y no se ve afectado por la falta de energía inmediata.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "ram", "hardware"]

respuesta: "volátil"
tipo: "completar"
respuestas_validas: ["volátil", "volatil"]

enunciado: "La memoria que requiere un suministro constante de energía para mantener la información almacenada se denomina memoria ___________."

explicacion: |
  La memoria volátil (como la RAM) pierde todos sus datos cuando se corta la energía. La memoria no volátil (como un SSD o HDD) conserva los datos sin electricidad.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["errores_comunes", "guardado"]

respuesta: "falso"
tipo: "vf"

enunciado: "Si estoy escribiendo un documento en un procesador de texto y se corta la luz antes de que yo haga clic en 'Guardar', la información se mantiene intacta en el disco duro porque el procesador estaba encendido."

explicacion: |
  Falso. Mientras editas, el texto reside en la memoria RAM (volátil). Si no se ha escrito en el disco (no volátil), la información se pierde al cortarse la energía.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["hardware", "clasificacion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[
    ["Memoria RAM", "volátil"],
    ["Disco Duro (HDD)", "no volátil"]
  ]]

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {escenario[idx][0]}, su característica principal de almacenamiento es: ___________."

explicacion: |
  La RAM es volátil (pierde datos sin energía) y el HDD es no volátil (mantiene datos sin energía).
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ciclo_de_vida"]

respuesta: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]
tipo: "ordenar"
opciones_explicitas: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]

enunciado: "Ordena el flujo lógico de datos cuando un usuario abre un archivo, edita un párrafo y luego decide conservar los cambios permanentemente:"

explicacion: |
  1. Los datos pasan de la memoria no volátil (disco) a la volátil (RAM) para ser usados.
  2. La CPU trabaja sobre la RAM.
  3. Al guardar, los datos vuelven a la memoria no volátil.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: 1
tipo: "mc"
opciones_explicitas: ["Solo la memoria no volátil puede almacenar datos de forma permanente.", "Tanto la RAM como el disco duro son memorias no volátiles.", "La memoria volátil es más lenta que la no volátil.", "El almacenamiento volátil es el que se usa para guardar archivos a largo plazo."]

explicacion: |
  La característica definitoria es la persistencia: la memoria volátil pierde los datos sin energía, independientemente de su velocidad o capacidad.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "ram", "volatil"]

respuesta: falso
tipo: vf

enunciado: "La memoria RAM es un tipo de almacenamiento no volátil, lo que significa que la información se mantiene guardada aunque se apague el ordenador."

explicacion: |
  La memoria RAM es volátil; su contenido se pierde por completo cuando la corriente eléctrica deja de fluir.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "disco_duro", "ssd"]

variables:
  escenario: uno_de([["Disco Duro (HDD)", "No volátil"], ["Memoria RAM", "Volátil"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["No volátil", "Volátil"]

enunciado: "Considerando el dispositivo {escenario[0]}, su característica principal respecto a la persistencia de datos es que es ___."

explicacion: |
  El {escenario[0]} es un dispositivo de almacenamiento secundario y, por lo tanto, es {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ram", "disco"]

respuesta: ["Disco Duro", "Memoria RAM", "Procesador"]
tipo: ordenar

opciones_explicitas: ["Disco Duro", "Memoria RAM", "Procesador"]

enunciado: "Ordena el flujo lógico de datos cuando el usuario abre un archivo para trabajar con él:"

pasos:
  - "El archivo reside permanentemente en el..."
  - "Para ser procesado, el archivo se carga en la..."
  - "Finalmente, los datos pasan a la unidad de..."

explicacion: |
  Los datos se extraen del almacenamiento no volátil (Disco Duro) hacia la memoria de trabajo (RAM) para que el procesador pueda acceder a ellos rápidamente.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["terminologia", "persistente"]

respuesta: "persistencia"
tipo: completar
respuestas_validas: ["persistencia", "permanencia"]

enunciado: "La capacidad de un medio de almacenamiento para mantener la información sin necesidad de suministro eléctrico se denomina ___."

explicacion: |
  La ___ es la característica que define a los medios no volátiles como los SSD o los discos duros.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["rendimiento", "comparativa"]

variables:
  caso: uno_de([[0, "Memoria RAM", "Alta velocidad, poca capacidad"], [1, "Disco SSD", "Velocidad media, mayor capacidad"]])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["Alta velocidad, poca capacidad", "Velocidad media, mayor capacidad"]

enunciado: "Si comparamos el dispositivo {caso[1]} con un disco duro mecánico, su característica distintiva es que posee una {caso[2]}."

explicacion: |
  En este escenario, estamos comparando la velocidad y capacidad relativa de un SSD frente a un HDD.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["hardware", "memoria", "ram"]

variables:
  escenario: uno_de([
    ["Estás editando un documento de texto en un procesador de palabras y aún no has guardado los cambios.", "RAM"],
    ["Has guardado una fotografía en tu carpeta de imágenes en el disco duro.", "Disco"],
    ["Estás jugando un videojuego y la acción se está procesando en tiempo real.", "RAM"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["RAM", "Disco", "ROM"]

enunciado: "Considerando el escenario: '{escenario[idx][0]}', ¿qué tipo de memoria es la principal responsable de mantener la información mientras el dispositivo tiene energía, pero que se borraría al apagar la computadora?"

explicacion: |
  La memoria RAM es volátil, lo que significa que requiere energía eléctrica para mantener los datos. Si el dispositivo se apaga sin guardar los cambios en un medio no volátil (como el disco), la información se pierde.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["volatilidad", "energia"]

respuesta: falso
tipo: vf

enunciado: "Si un dispositivo de almacenamiento es de tipo 'no volátil', la información almacenada en él se perderá inmediatamente al desconectar la fuente de alimentación eléctrica."

explicacion: |
  Falso. Precisamente la característica de la memoria no volátil (como un SSD o un HDD) es que la información persiste sin necesidad de energía eléctrica.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

variables:
  item: uno_de([
    ["Memoria RAM", "volatil"],
    ["Disco Duro (HDD)", "no_volatil"],
    ["Memoria Flash (USB)", "no_volatil"],
    ["Memoria Caché", "volatil"]
  ])
  idx: uno_de([0, 1, 2, 3])

respuesta: item[idx][1
tipo: completar
respuestas_validas: ["volatil", "no_volatil"]

enunciado: "El dispositivo '{item[idx][0]}' se clasifica como memoria ___________."

explicacion: |
  La memoria volátil es aquella que requiere energía para mantener los datos, mientras que la no volátil permite el almacenamiento a largo plazo.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

opciones_explicitas: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
respuesta: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
tipo: ordenar

enunciado: "Ordena los siguientes componentes de mayor a menor persistencia de datos (desde el que pierde la información más rápido al apagar el equipo hasta el que la mantiene de forma permanente):"

pasos:
  - "1. RAM (Volátil)"
  - "2. Disco Duro (No volátil - almacenamiento masivo)"
  - "3. ROM (No volátil - lectura permanente)"

explicacion: |
  La RAM es volátil (pierde datos al apagar), el Disco Duro es no volátil para archivos, y la ROM está diseñada para contener instrucciones permanentes que no se borran.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["flujo_datos"]

variables:
  accion: uno_de([
    ["Guardar un archivo", "no volátil"],
    ["Abrir un programa", "volátil"]
  ])
  idx: uno_de([0, 1])

respuesta: accion[idx][1
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Cuando realizas la acción de '{accion[idx][0]}', los datos se trasladan de un medio de almacenamiento ___________ a uno de trabajo ___________."

explicacion: |
  Al guardar, los datos pasan de la memoria no volátil (disco) a la volátil (RAM) para que el procesador pueda trabajar con ellos.
```

## Sección: archivos-y-persistencia (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["conceptos", "almacenamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La persistencia de datos se refiere a la capacidad de una aplicación para guardar información en un medio no volátil para que los datos sobrevivan al cierre del programa o al apagado del sistema."

explicacion: |
  Correcto. La persistencia permite que la información sea recuperable después de que el proceso de ejecución haya terminado.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formatos", "json", "xml"]

variables:
  formato_idx: uno_de([0, 1])
  formato_nombre: uno_de(["JSON", "XML"])
  formato_descripcion: uno_de(["es un formato basado en etiquetas como <tag>", "es un formato basado en pares clave-valor"])

opciones_explicitas:
  - "JSON"
  - "XML"

respuesta: formato_nombre[formato_idx
tipo: mc

enunciado: "El formato {formato_nombre[formato_idx]} {formato_descripcion[formato_idx]} es ampliamente utilizado en la web moderna para el intercambio de datos."

explicacion: |
  Si elegiste JSON, recuerda que usa llaves y corchetes. Si elegiste XML, recuerda que usa etiquetas jerárquicas.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["extensiones", "texto"]

respuesta: ".csv"
tipo: completar
respuestas_validas:
  - ".csv"

enunciado: "Un archivo que contiene datos estructurados en forma de tabla, donde cada línea es un registro y cada valor está separado por una coma, suele tener la extensión ___"

explicacion: |
  La extensión .csv significa 'Comma-Separated Values'.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["estructurado", "texto_plano"]

variables:
  tipo_idx: uno_de([0, 1])
  tipo_nombre: uno_de(["Texto Plano", "Binario"])
  tipo_carac: uno_de(["se puede leer directamente como texto", "contiene una secuencia de bytes que requiere un formato específico para ser interpretado"])

opciones_explicitas:
  - "Texto Plano"
  - "Binario"

respuesta: tipo_nombre[tipo_idx
tipo: mc

enunciado: "Un archivo de tipo {tipo_nombre[tipo_idx]} es aquel que {tipo_carac[tipo_idx]}."

explicacion: |
  Los archivos de texto plano contienen caracteres legibles (ASCII/UTF-8), mientras que los binarios contienen datos codificados que no son legibles directamente sin un software específico.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["ciclo_vida", "operaciones"]

opciones_explicitas:
  - "Abrir el archivo"
  - "Leer o escribir datos"
  - "Cerrar el archivo"

respuesta: ["Abrir el archivo", "Leer o escribir datos", "Cerrar el archivo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos necesarios para manipular un archivo de forma segura en un programa:"

explicacion: |
  Es fundamental abrir el archivo primero, realizar las operaciones de I/O y siempre cerrarlo para liberar recursos y asegurar que los cambios se guarden.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["json", "formato", "datos"]

variables:
  escenario: uno_de([
    ["{\\"nombre\\": \\"Ana\\", \\"edad\\": 25}", "objeto"],
    ["[1, 2, 3, 4]", "array"],
    ["{\\"id\\": 101, \\"activo\\": true}", "objeto"]
  ])

enunciado: "Se tiene el siguiente fragmento de datos en un archivo: {escenario[0]}."

opciones_explicitas: ["objeto", "array", "diccionario"]
respuesta: escenario[1
tipo: mc

explicacion: |
  El formato JSON (JavaScript Object Notation) utiliza llaves `{}` para representar objetos (pares clave-valor) y corchetes `[]` para representar arrays (listas ordenadas).
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["csv", "delimitadores"]

enunciado: "En un archivo CSV estándar, los datos de una misma fila se separan por un delimitador (comúnmente una coma) y los registros se separan por un salto de línea. Si tenemos el siguiente contenido:\nnombre,edad,ciudad\nJuan,30,Madrid\n\n¿Cuántos campos o columnas tiene cada registro?"

respuesta: 3
tipo: completar
tolerancia_abs: 0

explicacion: |
  El archivo contiene tres columnas: 'nombre', 'edad' y 'ciudad'. Cada línea representa una fila y las comas separan los valores de esas columnas.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "json", "comparacion"]

enunciado: "Analiza las siguientes dos representaciones de un mismo dato:\n1. `<usuario><id>1</id></usuario>`\n2. `{\"id\": 1}`\n\n¿Cuál de las dos opciones utiliza etiquetas de apertura y cierre para definir la estructura de los datos?"

opciones_explicitas: ["La opción 1 (XML)", "La opción 2 (JSON)", "Ambas", "Ninguna"]
respuesta: "La opción 1 (XML)"
tipo: mc

explicacion: |
  XML (eXtensible Markup Language) se basa en un sistema de etiquetas (tags) como `<id>...</id>`, mientras que JSON utiliza una estructura de pares clave-valor con llaves y corchetes.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["serializacion", "conceptos"]

enunciado: "Para guardar un objeto de la memoria de un programa en un archivo de forma permanente, se debe realizar un proceso llamado ___."

respuestas_validas: ["serialización", "serializacion"]
respuesta: "serialización"
tipo: completar

explicacion: |
  La serialización es el proceso de convertir un objeto en un formato que pueda ser almacenado (como un archivo) o transmitido, para luego ser reconstruido (deserializado).
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["flujo", "orden", "escritura"]

enunciado: "Para asegurar que todos los datos almacenados en el búfer de escritura se escriban físicamente en el disco duro antes de cerrar un archivo, se debe seguir este orden lógico de operaciones:"

opciones_explicitas: ["Abrir archivo -> Escribir datos -> Cerrar archivo", "Abrir archivo -> Cerrar archivo -> Escribir datos", "Escribir datos -> Abrir archivo -> Cerrar archivo"]
respuesta: ["Abrir archivo -> Escribir datos -> Cerrar archivo"]
tipo: ordenar

explicacion: |
  El flujo correcto es abrir el archivo para obtener un puntero/manejador, realizar las operaciones de escritura y, finalmente, cerrar el archivo para liberar recursos y asegurar que los datos se guarden (flush).
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "xml"]

respuesta: "JSON"
tipo: mc
opciones_explicitas: ["JSON", "XML", "CSV", "TXT"]

enunciado: "Un programador necesita un formato de intercambio de datos que sea ligero, basado en pares clave-valor y que no utilice etiquetas de cierre como <tag>...</tag>. ¿Qué formato debería usar?"

explicacion: |
  JSON (JavaScript Object Notation) es un formato de texto ligero para el intercambio de datos que utiliza una estructura de objetos y arreglos, a diferencia de XML que depende de etiquetas jerárquicas.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["memoria", "disco", "volatilidad"]

respuesta: falso
tipo: vf

enunciado: "¿Es cierto que los datos almacenados en una variable de tipo 'integer' dentro de la memoria RAM se mantienen intactos después de apagar la computadora?"

explicacion: |
  La memoria RAM es volátil. Para lograr la persistencia, los datos deben escribirse en un dispositivo de almacenamiento secundario (disco duro, SSD) mediante archivos o bases de datos.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "escritura", "orden"]

variables:
  pasos_correctos: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]

respuesta: ["Abrir archivo", "Escribir datos", "Cerrar archivo"]
tipo: ordenar
opciones_explicitas: ["Abrir archivo", "Escribir datos", "Cerrar archivo", "Cerrar archivo", "Escribir datos", "Abrir archivo"]

enunciado: "Para asegurar la integridad de la información y liberar los recursos del sistema operativo, ¿cuál es el orden lógico de operaciones para guardar un registro en un archivo de texto?"

explicacion: |
  Es fundamental abrir el flujo de escritura, realizar la operación de volcado de datos y, muy importante, cerrar el archivo para asegurar que el buffer se vacíe correctamente al disco.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["binario", "texto", "encoding"]

variables:
  escenario: uno_de([
    ["Un archivo .txt con caracteres legibles", "texto"],
    ["Un archivo .jpg con datos comprimidos", "binario"],
    ["Un archivo .exe con instrucciones de CPU", "binario"]
  ])

respuesta: "texto"
tipo: completar
opciones_explicitas: ["texto", "binario"]
respuestas_validas: ["texto", "binario"]

enunciado: "Si un archivo es diseñado para ser leído directamente por un editor de notas sin necesidad de un software especializado para interpretar bytes complejos, se dice que el formato es de tipo ___."

explicacion: |
  Los archivos de texto plano almacenan caracteres codificados (como ASCII o UTF-8) que representan símbolos legibles. Los archivos binarios contienen datos en un formato que requiere un programa específico para ser interpretado correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["sobrescritura", "append", "error"]

variables:
  caso: uno_de([
    ["un archivo existente que se borra al abrirlo", "sobrescritura"],
    ["un archivo nuevo que se crea al abrirlo", "creacion"]
  ])

respuesta: "sobrescritura"
tipo: mc
opciones_explicitas: ["sobrescritura", "incremento", "creacion", "lectura"]

enunciado: "Un programador utiliza el modo 'w' (write) en lugar de 'a' (append) al abrir un archivo de logs. ¿Cuál es la consecuencia inmediata si el archivo ya contenía datos?"

explicacion: |
  El modo 'w' (write) trunca el archivo, es decir, borra todo su contenido actual para empezar desde cero. El modo 'a' (append) posiciona el puntero al final para añadir datos sin borrar lo anterior.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "datos"]

respuesta: "JSON"
tipo: "mc"
opciones_explicitas: ["XML", "JSON", "TXT", "CSV"]

enunciado: "A diferencia de XML, que utiliza etiquetas anidadas para estructurar la información, el formato ___ es un estándar ligero basado en pares clave-valor que es ampliamente utilizado en APIs web."

explicacion: |
  JSON (JavaScript Object Notation) es preferido en la web moderna por su sintaxis más simple y menor sobrecarga de datos en comparación con XML.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["memoria", "persistencia", "volatilidad"]

variables:
  es_persistente: true

respuesta: es_persistente
tipo: "vf"

enunciado: "Si un programa guarda una variable en el disco duro (archivo), la información se mantiene aunque el proceso termine o se apague la computadora. Esto significa que la escritura en disco es una operación de ___ persistencia."

explicacion: |
  La memoria RAM es volátil (se pierde al apagar el equipo), mientras que el almacenamiento secundario (archivos) permite la persistencia de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["csv", "estructura", "datos"]

respuesta: "CSV"
tipo: "completar"
respuestas_validas: ["CSV", "txt", "bin"]

enunciado: "Mientras que un archivo de texto plano (.txt) no tiene una estructura interna definida, un archivo ___ utiliza un carácter delimitador (como una coma o punto y coma) para separar los campos de cada registro."

explicacion: |
  El formato CSV (Comma-Separated Values) es una forma estructurada de representar tablas de datos en texto plano.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["serializacion", "objetos", "binario"]

variables:
  escenario: uno_de([[true, "binario"], [false, "texto"]])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["texto", "binario"]

enunciado: "Si el escenario de serialización es {escenario[0]}, el archivo resultante será de tipo ___."

explicacion: |
  La serialización binaria es más eficiente en tamaño y velocidad de lectura/escritura, pero no es legible por humanos, a diferencia de la serialización en texto (como JSON).
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["flujo", "archivos", "orden"]

respuesta: ["Abrir", "Leer", "Cerrar"]
tipo: "ordenar"
opciones_explicitas: ["Cerrar", "Leer", "Abrir"]

enunciado: "Para manipular un archivo de forma segura y evitar fugas de memoria o bloqueos del sistema operativo, se debe seguir este orden lógico de operaciones:"

explicacion: |
  Es fundamental abrir el flujo (stream), realizar las operaciones de lectura/escritura y, lo más importante, cerrar el archivo para liberar el recurso.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["formato", "json", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "nombre: 'Juan', edad: 30", "{\"nombre\": \"Juan\", \"edad\": 30}" ], [ "id: 101, activo: true", "{\"id\": 101, \"activo\": true}" ]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["{\"nombre\": \"Juan\", \"edad\": 30}", "nombre: 'Juan', edad: 30", "<user><name>Juan</name><age>30</age></user>", "nombre=Juan&edad=30"]

enunciado: "Un desarrollador necesita guardar un objeto de configuración en un formato estándar de intercambio de datos (JSON). ¿Cuál es la representación correcta del objeto según los datos: {datos[escenario_idx][0]}?"

explicacion: |
  El formato JSON utiliza llaves para objetos, corchetes para arrays y requiere que las claves y los strings estén encerrados en comillas dobles.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "basico"
  tags: ["extensiones", "texto"]

respuesta: ".csv"
tipo: completar
respuestas_validas: [".csv"]

enunciado: "Si quieres guardar una lista de productos con sus precios y stock de forma tabular para abrirla en una hoja de cálculo, la extensión más común es ___."

explicacion: |
  El formato CSV (Comma Separated Values) es un estándar para representar datos tabulares en archivos de texto plano.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["xml", "estructura"]

variables:
  es_xml: uno_de([true, false])
  dato_xml: [[ "Es un formato basado en etiquetas (tags) como <item>...</item>", "Es un formato de texto plano sin estructura definida", "Es un formato binario propietario", "Es un formato de solo lectura" ], [ "Es un formato basado en etiquetas (tags) como <item>...</item>", "Es un formato de texto plano sin estructura definida", "Es un formato binario propietario", "Es un formato de solo lectura" ]]

respuesta: es_xml
tipo: completar
enunciado: "Considerando que el formato XML utiliza etiquetas para definir la jerarquía de los datos, ¿es este un formato estructurado? {es_xml}"

explicacion: |
  XML (eXtensible Markup Language) es un lenguaje de marcado diseñado para almacenar y transportar datos de forma jerárquica mediante etiquetas.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "intermedio"
  tags: ["operaciones", "archivo"]

respuesta: ["Abrir", "Escribir", "Cerrar"]
tipo: ordenar

opciones_explicitas: ["Abrir", "Escribir", "Cerrar"]

enunciado: "Para asegurar la integridad de la información al guardar datos en un archivo físico, ¿cuál es el orden lógico de las operaciones de bajo nivel?"

explicacion: |
  Primero se debe obtener un descriptor mediante la apertura, luego se realiza la transferencia de datos al buffer/disco y finalmente se cierra el flujo para liberar el recurso y asegurar que los datos se escriban físicamente.
```

```
metadata:
  materia: "informatica"
  tema: "archivos_y_persistencia"
  nivel: "avanzado"
  tags: ["binario", "eficiencia"]

variables:
  es_binario: uno_de([true, false])
  caso_binario: [[ "Un archivo .exe o .png", "Un archivo .txt o .log" ], [ "Un archivo .exe o .png", "Un archivo .txt o .log" ]]

respuesta: es_binario

tipo: completar
enunciado: "Si estamos trabajando con un archivo de tipo {caso_binario[es_binario][0]}, ¿estamos ante un formato de datos binarios que no es legible directamente como texto plano? {es_binario}"

explicacion: |
  Los archivos binarios contienen datos codificados que requieren un software específico para ser interpretados, a diferencia de los archivos de texto que representan caracteres legibles.
```
