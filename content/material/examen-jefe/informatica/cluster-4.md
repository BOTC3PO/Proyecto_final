# Examen jefe — [PENDIENTE #819]

> Logro #819. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: algoritmo-secuencia-de-pasos (25 preguntas)

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

respuesta: datos[idx][2]
tipo: completar
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

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "caracteristicas"]

respuesta: verdadero
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
respuestas_validas:
  - "algoritmo"

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

respuesta: "La lógica abstracta del procedimiento"
tipo: mc
opciones_explicitas: ["La implementación en un lenguaje de programación", "La lógica abstracta del procedimiento"]

enunciado: "Si comparamos un algoritmo con su implementación en un lenguaje de programación (código), el algoritmo se distingue por ser: ___"

explicacion: |
  El algoritmo es el diseño lógico y abstracto (el "qué" hacer), mientras que el código es la implementación técnica en un lenguaje específico (el "cómo" hacerlo en una máquina).
```

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

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["algoritmo", "secuencia"]

variables:
  textos: ["Para hacer un café: 1. Calentar agua, 2. Poner café en filtro, 3. Verter agua", "Para encender una PC: 1. Presionar botón, 2. Conectar cable, 3. Esperar inicio"]
  valores: [verdadero, falso]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Analiza el siguiente escenario: {textos[idx]}. ¿Es una secuencia lógica y ordenada para resolver el problema planteado?"

explicacion: |
  Un algoritmo debe ser una secuencia finita y ordenada de pasos. En el primer caso, los pasos siguen un orden lógico para obtener el resultado. En el segundo, el orden es incorrecto (primero se debe conectar el cable).
```

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

```
metadata:
  materia: "informatica"
  tema: "algoritmo_secuencia_de_pasos"
  nivel: "basico"
  tags: ["definicion", "caracteristicas"]

variables:
  textos: ["Un proceso que no termina nunca", "Un proceso con pasos finitos y definidos"]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Un algoritmo debe ser necesariamente finito, es decir, debe tener un número determinado de pasos que se completan en un tiempo razonable. ¿Es esto correcto para describir lo siguiente: {textos[idx]}?"

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
respuestas_validas:
  - "encender"

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
  escenario: uno_de([["1. Salir de casa, 2. Abrir la puerta, 3. Caminar hacia la calle", "Pasos desordenados"], ["1. Abrir la puerta, 2. Salir de casa, 3. Caminar hacia la calle", "Pasos correctos"]])

respuesta: escenario[1]
tipo: mc

opciones_explicitas: ["Pasos desordenados", "Pasos correctos"]

enunciado: "Analiza la secuencia: {escenario[0]}. ¿Cuál es la clasificación de este algoritmo?"

explicacion: |
  Si el orden de los pasos impide alcanzar el objetivo de forma lógica (como intentar salir de casa antes de abrir la puerta), el algoritmo es incorrecto o está desordenado.
```

## Sección: almacenamiento-volatil-vs-no-volatil (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["memoria", "hardware", "conceptos"]

tipo: mc
opciones_explicitas: ["energía eléctrica", "datos", "programas", "espacio en disco"]

enunciado: "La característica que define a una memoria como 'volátil' es que su contenido se pierde cuando se corta el suministro de ___."

respuesta: "energía eléctrica"

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
  nombres: ["RAM", "ROM", "Caché", "Disco SSD", "Pendrive"]
  valores: [verdadero, falso, verdadero, falso, falso]
  idx: uno_de([0, 1, 2, 3, 4])

tipo: vf
enunciado: "Si el componente es {nombres[idx]}, ¿se considera que es una memoria volátil?"

respuesta: valores[idx]

explicacion: |
  La RAM y la memoria caché son volátiles: pierden su contenido sin energía. La ROM, el disco SSD y el pendrive son no volátiles: conservan los datos aunque se corte la energía.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "basico"
  tags: ["clasificacion", "hardware"]

tipo: mc
opciones_explicitas: ["Disco Duro (HDD)", "Memoria RAM", "Memoria Caché", "Registros del procesador"]

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
respuestas_validas:
  - "temporal"

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

respuesta_orden: ["Carga de datos de disco a RAM", "Ejecución de procesos en CPU", "Guardado de cambios en disco"]

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

respuesta: tipo_memoria[escenario_idx][0]
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {dispositivos[escenario_idx][0]}, ¿cuál es su característica principal respecto a la persistencia de datos?"

explicacion: |
  El dispositivo seleccionado pertenece a la categoría de memoria {tipo_memoria[escenario_idx][0]}.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "guardado"]

respuesta: "disco"
tipo: completar
respuestas_validas:
  - "disco"
  - "memoria"

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

respuesta_orden: ["Caché L1", "Memoria RAM", "Disco SSD"]
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
  situacion: [["Estás editando una foto y se corta la luz sin haber guardado.", "perder"], ["Estás viendo una película descargada en un pendrive y se corta la luz.", "nada"]]
  resultado: ["perder", "nada"]

respuesta: resultado[caso_idx]
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
respuestas_validas:
  - "volátil"
  - "volatil"

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

tipo: vf
respuesta: falso

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
  escenario: uno_de([["Memoria RAM", "volátil"], ["Disco Duro (HDD)", "no volátil"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Considerando el dispositivo {escenario[0]}, su característica principal de almacenamiento es: ___________."

explicacion: |
  La RAM es volátil (pierde datos sin energía) y el HDD es no volátil (mantiene datos sin energía).
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["flujo_datos", "ciclo_de_vida"]

respuesta_orden: ["Cargar desde disco", "Procesar en RAM", "Guardar en disco"]
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

enunciado: "¿Cuál de las siguientes afirmaciones describe correctamente la diferencia principal entre la memoria volátil y la no volátil?"
tipo: "mc"
respuesta: "Solo la memoria no volátil puede almacenar datos de forma permanente."
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

respuesta: escenario[1]
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

respuesta_orden: ["Disco Duro", "Memoria RAM", "Procesador"]
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
respuestas_validas:
  - "persistencia"
  - "permanencia"

enunciado: "La capacidad de un medio de almacenamiento para mantener la información sin necesidad de suministro eléctrico se denomina ___."

explicacion: |
  La persistencia es la característica que define a los medios no volátiles como los SSD o los discos duros.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_volatil_vs_no_volatil"
  nivel: "intermedio"
  tags: ["rendimiento", "comparativa"]

variables:
  caso: uno_de([[0, "Memoria RAM", "Alta velocidad, poca capacidad"], [1, "Disco SSD", "Velocidad media, mayor capacidad"]])

respuesta: caso[2]
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
  escenario: uno_de([["Estás editando un documento de texto en un procesador de palabras y aún no has guardado los cambios.", "RAM"], ["Has guardado una fotografía en tu carpeta de imágenes en el disco duro.", "Disco"], ["Estás jugando un videojuego y la acción se está procesando en tiempo real.", "RAM"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["RAM", "Disco", "ROM"]

enunciado: "Considerando el escenario: '{escenario[0]}', ¿qué tipo de memoria es la principal responsable de mantener la información mientras el dispositivo tiene energía, pero que se borraría al apagar la computadora?"

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
  item: uno_de([["Memoria RAM", "volátil"], ["Disco Duro (HDD)", "no volátil"], ["Memoria Flash (USB)", "no volátil"], ["Memoria Caché", "volátil"]])

tipo: completar
respuesta: item[1]
enunciado: "El dispositivo '{item[0]}' se clasifica como memoria ___________."

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
respuesta_orden: ["Memoria RAM", "Disco Duro", "Memoria ROM"]
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
  accion: uno_de([["Guardar un archivo", "no volátil"], ["Abrir un programa", "volátil"]])

respuesta: accion[1]
tipo: mc
opciones_explicitas: ["volátil", "no volátil"]

enunciado: "Cuando realizas la acción de '{accion[0]}', el destino final donde quedan los datos es un medio ___________."

explicacion: |
  Al guardar un archivo, los datos pasan de la memoria volátil (RAM) al almacenamiento no volátil (disco), donde quedan grabados de forma permanente. Al abrir un programa, ocurre lo contrario: los datos se cargan desde el disco (no volátil) hacia la RAM (volátil) para que el procesador pueda trabajar con ellos.
```

## Sección: buses-y-entrada-salida (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["hardware", "arquitectura"]

tipo: mc
opciones_explicitas: ["El medio físico que transporta información entre componentes", "El procesador que gestiona las interrupciones", "La memoria principal donde se guardan los datos", "Un dispositivo de salida de video"]

respuesta: "El medio físico que transporta información entre componentes"

enunciado: "En arquitectura de computadores, un bus se define como ___."

explicacion: |
  Un bus es un conjunto de líneas de comunicación que permiten la transferencia de datos, direcciones o señales de control entre los distintos componentes de un sistema informático.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["buses", "direccion"]

tipo: vf
respuesta: verdadero

enunciado: "El bus de direcciones es el encargado de indicar la ubicación de memoria o el dispositivo al que se quiere acceder."

explicacion: |
  Correcto. El bus de direcciones permite al procesador especificar la dirección de memoria o el puerto de E/S con el que desea comunicarse.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo", "procesador"]

tipo: completar
respuestas_validas:
  - "Enviar"
respuesta: "Enviar"

enunciado: "En una operación de salida (output), el procesador debe ___ datos al periférico."

explicacion: |
  En una operación de salida, la información fluye desde el procesador/memoria hacia el dispositivo externo, por lo tanto, el procesador debe enviar los datos.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["control", "bus"]

tipo: mc
opciones_explicitas: ["Bus de Datos, Bus de Direcciones, Bus de Control", "Bus de Datos, Bus de Memoria, Bus de CPU", "Bus de Entrada, Bus de Salida, Bus de Procesamiento"]

respuesta: "Bus de Datos, Bus de Direcciones, Bus de Control"

enunciado: "¿Cuáles son los tres tipos principales de buses en un sistema de arquitectura clásica?"

explicacion: |
  Los buses se dividen funcionalmente en: Bus de Datos (transporte de información), Bus de Direcciones (selección de destino) y Bus de Control (sincronización y comandos).
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "secuencia"]

tipo: ordenar
opciones_explicitas: ["El controlador de DMA solicita el bus", "El procesador cede el control del bus", "Se realiza la transferencia de datos", "El controlador DMA libera el bus"]

respuesta_orden: ["El controlador de DMA solicita el bus", "El procesador cede el control del bus", "Se realiza la transferencia de datos", "El controlador DMA libera el bus"]

enunciado: "Ordene los pasos lógicos de una transferencia de datos mediante DMA (Direct Memory Access):"

explicacion: |
  En el DMA, el controlador solicita el control del bus al CPU, el CPU lo concede (cede el control), el controlador transfiere los datos directamente entre memoria y periférico, y finalmente libera el bus para que el CPU retome su labor.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["arquitectura", "bus"]

respuesta: "datos"
tipo: "completar"
respuestas_validas:
  - "datos"

enunciado: "En la arquitectura de Von Neumann, el bus encargado de transportar la información procesada o las instrucciones entre la CPU y la memoria se denomina bus de ___."

explicacion: |
  El bus de datos es bidireccional y transporta la información real (instrucciones o datos) entre los componentes.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["memoria", "bus_direccion"]

variables:
  idx: uno_de([0, 1])
  escenario: [[8, 256], [16, 65536]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [256, 65536, 1024, 4096]

enunciado: "Si una computadora utiliza un bus de direcciones de {escenario[idx][0]} bits, ¿cuántas direcciones de memoria únicas puede direccionar?"

explicacion: |
  La cantidad de direcciones posibles es igual a 2 elevado a la potencia del número de líneas del bus de direcciones (2^n).
  En el caso de 8 bits: 2^8 = 256. En el caso de 16 bits: 2^16 = 65536.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo_bus", "control"]

respuesta: "control"
tipo: "mc"
opciones_explicitas: ["datos", "direccion", "control"]

enunciado: "Durante una operación de lectura de un dispositivo de entrada, el controlador debe emitir una señal para indicar que la operación será de lectura. Esta señal viaja por el bus de ___."

explicacion: |
  El bus de control gestiona las señales de sincronización y el tipo de operación (lectura/escritura) para coordinar los componentes.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "transferencia"]

respuesta_orden: ["solicitud_dma", "concesion_bus", "transferencia_datos", "liberacion_bus"]
tipo: "ordenar"
opciones_explicitas: ["solicitud_dma", "concesion_bus", "transferencia_datos", "liberacion_bus"]

enunciado: "Ordene los pasos lógicos de una transferencia de Direct Memory Access (DMA) cuando un periférico requiere mover un bloque de datos a la memoria sin intervención constante de la CPU:"

explicacion: |
  1. El periférico envía una solicitud (DREQ).
  2. El controlador DMA solicita el control del bus a la CPU (HOLD).
  3. La CPU cede el bus (HLDA).
  4. Se realiza el movimiento de datos.
  5. El controlador libera el bus para la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["interrupcion", "polling"]

respuesta: falso
tipo: "vf"

enunciado: "En el método de 'Polling' (consulta), el procesador debe esperar activamente en un bucle revisando el estado de un dispositivo de entrada/salida, lo cual es una forma eficiente de gestionar el tiempo de CPU en sistemas de alto rendimiento."

explicacion: |
  Falso. El Polling es ineficiente porque consume ciclos de CPU en espera de un dispositivo. Las interrupciones son más eficientes ya que permiten que la CPU realice otras tareas hasta que el dispositivo esté listo.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["arquitectura", "buses", "control"]

respuesta: falso
tipo: vf
enunciado: "El bus de control es el encargado de transportar los datos reales (como un número o un carácter) entre el procesador y la memoria."

explicacion: |
  Falso. El bus de control transporta señales de sincronización y comandos (como lecturas o escrituras), mientras que el bus de datos es el que transporta la información propiamente dicha.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["direccionamiento", "memoria", "buses"]

variables:
  escenario: uno_de([["Bus de direcciones de 16 bits", "65536"], ["Bus de direcciones de 32 bits", "4294967296"], ["Bus de direcciones de 64 bits", "18446744073709551616"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "65536"
  - "4294967296"
  - "18446744073709551616"

enunciado: "Si un sistema tiene un bus de direcciones de {escenario[0]}, la cantidad máxima de ubicaciones de memoria que puede direccionar es de ___."

explicacion: |
  El número de direcciones direccionables está determinado por la cantidad de líneas del bus de direcciones ($2^n$, donde $n$ es el número de bits).
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["buses", "datos"]

opciones_explicitas: ["Direcciones de memoria", "Señales de reloj", "Información/Datos", "Comandos de lectura/escritura"]
respuesta: "Información/Datos"
tipo: mc

enunciado: "En una arquitectura de Von Neumann, ¿cuál es la función principal del bus de datos?"

explicacion: |
  El bus de datos es bidireccional y transporta la información (instrucciones o datos) entre los componentes. Los otros buses mencionados cumplen funciones de control o direccionamiento.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["ciclo_instruccion", "ordenar"]

opciones_explicitas: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
respuesta_orden: ["Colocar la dirección en el bus de direcciones", "Enviar señal de lectura por el bus de control", "Recibir el dato por el bus de datos", "Procesar el dato en la ALU"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para que el procesador obtenga un dato de la memoria RAM:"

explicacion: |
  Primero se debe indicar 'dónde' buscar (dirección), luego 'qué hacer' (control/lectura), luego esperar a que el dato 'viaje' (datos) y finalmente usarlo.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["E/S", "interrupciones", "eficiencia"]

respuesta: "el CPU pregunta constantemente si el dispositivo está listo"
tipo: completar
respuestas_validas:
  - "el CPU pregunta constantemente si el dispositivo está listo"

enunciado: "Si un sistema utiliza el método de Polling para gestionar un periférico, el procesador pierde eficiencia porque ___."

explicacion: |
  El Polling (o consulta) obliga al CPU a estar en un bucle de espera, desperdiciando ciclos de reloj. Las interrupciones permiten que el CPU realice otras tareas hasta que el hardware lo necesite.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["arquitectura", "buses"]

respuesta: "direcciones"
tipo: completar
respuestas_validas:
  - "direcciones"

enunciado: "Mientras que el bus de datos transporta la información procesada entre los componentes, el bus de ___ determina la ubicación de memoria o el dispositivo al que se quiere acceder."

explicacion: |
  El bus de direcciones es unidireccional (en la mayoría de los casos) y especifica la celda de memoria o el puerto de E/S, mientras que el bus de datos es bidireccional y transporta el contenido.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["control", "sincronizacion"]

respuesta: verdadero
tipo: vf
enunciado: "El bus de control es el encargado de transmitir señales de sincronización y de estado (como señales de lectura/escritura) para coordinar la comunicación entre la CPU y los periféricos."

explicacion: |
  Correcto. Sin el bus de control, los componentes no sabrían si el dato en el bus de datos es para ser leído o para ser escrito, ni cuándo debe iniciar la operación.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["dma", "eficiencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["transferencia_cpu", "La CPU debe intervenir en cada byte transferido"], ["transferencia_dma", "El controlador de DMA gestiona la transferencia sin la CPU"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["La CPU debe intervenir en cada byte transferido", "El controlador de DMA gestiona la transferencia sin la CPU"]

enunciado: "En un sistema con acceso directo a memoria (DMA), ¿cuál es la principal distinción con el método de E/S programada?"

explicacion: |
  El DMA libera a la CPU de la carga de gestionar cada byte de la transferencia, permitiéndole realizar otras tareas mientras el controlador de DMA mueve los datos entre la E/S y la memoria.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["jerarquia", "velocidad"]

respuesta_orden: ["Bus local", "Bus de sistema", "Bus de expansión"]
tipo: ordenar

opciones_explicitas: ["Bus local", "Bus de sistema", "Bus de expansión"]

enunciado: "Ordena los buses de mayor a menor velocidad de comunicación (desde el núcleo de la CPU hacia los periféricos externos):"

explicacion: |
  El bus local es el más rápido (conexión directa con CPU/Caché), seguido por el bus de sistema (placa base) y finalmente los buses de expansión (como PCIe o USB) que conectan periféricos.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["interrupcion", "polling"]

variables:
  metodo_idx: uno_de([0, 1])
  metodo_nombre: ["Polling", "Interrupción"]
  caracteristica: ["La CPU debe consultar constantemente el estado del dispositivo", "El dispositivo avisa a la CPU cuando está listo"]

respuesta: caracteristica[metodo_idx]
tipo: mc
opciones_explicitas: ["La CPU debe consultar constantemente el estado del dispositivo", "El dispositivo avisa a la CPU cuando está listo"]

enunciado: "Si el sistema utiliza el método de {metodo_nombre[metodo_idx]}, ¿cuál es su característica distintiva respecto a la interrupción?"

explicacion: |
  El Polling (consulta activa) consume ciclos de CPU innecesarios si el dispositivo no está listo, mientras que las interrupciones permiten que la CPU trabaje en otra cosa hasta que el hardware requiera atención.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["hardware", "buses"]

variables:
  datos: [["El procesador necesita leer una instrucción de la memoria RAM", "datos"], ["La unidad de control envía una dirección de memoria", "direcciones"], ["La tarjeta de video recibe un color para un píxel", "datos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["datos", "direcciones", "control"]

enunciado: "En el escenario donde {datos[idx][0]}, el componente encargado de transportar la información específica es el bus de ___."

explicacion: |
  El bus de datos es el camino bidireccional que transporta la información (instrucciones, datos, resultados) entre los componentes del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["ciclo_instruccion", "bus_control"]

tipo: vf
respuesta: verdadero
enunciado: "Cuando un dispositivo de entrada (como un teclado) necesita informar al procesador que se ha presionado una tecla, utiliza el bus de control para enviar una señal de interrupción."

explicacion: |
  Correcto. El bus de control se utiliza para transmitir señales de sincronización, interrupciones y estados de dispositivos.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "intermedio"
  tags: ["protocolo", "comunicacion"]

respuesta_orden: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]
tipo: ordenar
opciones_explicitas: ["Seleccionar dirección", "Enviar comando", "Transferir datos"]

enunciado: "Para que un controlador de periférico realice una operación de lectura de un registro de estado, debe seguir este orden lógico de señales en el bus:"

explicacion: |
  Primero se establece la dirección del dispositivo/registro, luego se indica la operación (lectura/escritura) y finalmente se mueven los datos.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "basico"
  tags: ["componentes", "bus_direccion"]

variables:
  casos: [["un bus que solo se mueve en un sentido (unidireccional) para indicar dónde está un dato", "direcciones"], ["un bus que permite enviar y recibir datos (bidireccional)", "datos"]]
  idx: uno_de([0, 1])

respuesta: casos[idx][1]
tipo: completar
respuestas_validas:
  - "direcciones"
  - "datos"

enunciado: "Si nos referimos a un bus que solo se mueve en un sentido (unidireccional) para indicar dónde está un dato, estamos hablando del bus de ___."

explicacion: |
  El bus de direcciones es unidireccional (del CPU hacia la memoria/periféricos) para indicar la ubicación de la información.
```

```
metadata:
  materia: "informatica"
  tema: "buses_y_entrada_salida"
  nivel: "avanzado"
  tags: ["rendimiento", "ancho_de_bus"]

variables:
  config: [["64 bits", 8], ["32 bits", 4], ["16 bits", 2]]
  idx: uno_de([0, 1, 2])

respuesta: config[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema tiene un bus de datos de {config[idx][0]} bits, ¿cuántos bytes puede transferir en un solo ciclo de bus?"

pasos:
  - "Identificar el ancho del bus en bits: {config[idx][0]}"
  - "Dividir el número de bits por 8 (ya que 1 byte = 8 bits)"

explicacion: |
  El ancho de bus determina la cantidad de datos que pueden viajar simultáneamente. Dividir los bits por 8 nos da el total de bytes.
```

## Sección: variables-y-tipos-de-dato (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["conceptos", "fundamentos"]

respuesta: "contenedor"
tipo: completar
respuestas_validas:
  - "contenedor"

enunciado: "En programación, una variable se puede definir conceptualmente como un ___ en memoria que permite almacenar un valor que puede cambiar durante la ejecución de un programa."

explicacion: |
  Una variable es un espacio reservado en la memoria de la computadora, identificado por un nombre, destinado a guardar un dato que puede ser modificado.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_datos", "identificacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [["15", "entero"], ["3.14", "decimal"], ["'Hola'", "texto"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["entero", "decimal", "texto", "booleano"]

enunciado: "Si tenemos el valor {datos[escenario_idx][0]}, ¿qué tipo de dato representa principalmente?"

explicacion: |
  El tipo de dato determina qué operaciones se pueden realizar con el valor. En este caso, {datos[escenario_idx][0]} es de tipo {datos[escenario_idx][1]}.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿El tipo de dato booleano puede almacenar valores como 'si', 'no', 'tal vez' o '10'?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario: solo puede representar dos estados, verdadero (true) o falso (false).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["numeros", "decimales"]

respuesta: "float"
tipo: mc
opciones_explicitas: ["int", "float", "string", "bool"]

enunciado: "Cuando necesitamos representar un número que contiene una parte fraccionaria (como 0.5 o -1.25), el tipo de dato más adecuado es:"

explicacion: |
  Los números enteros (int) no permiten decimales. Para valores con precisión decimal utilizamos tipos de punto flotante (float o double).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["flujo", "asignacion"]

respuesta_orden: ["Declarar", "Asignar", "Usar"]
tipo: ordenar
opciones_explicitas: ["Declarar", "Asignar", "Usar"]

enunciado: "Ordena los pasos lógicos para trabajar con una variable en un programa:"

pasos:
  - "Crear el nombre de la variable en memoria."
  - "Darle un valor inicial."
  - "Emplear la variable en una operación o instrucción."

explicacion: |
  Primero se debe declarar la variable (reservar espacio), luego asignar un valor (inicializar) y finalmente se puede usar en el código.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["fundamentos", "tipos_de_datos"]

variables:
  ejemplo_idx: uno_de([0, 1, 2])
  datos: [["42", "int"], ["3.14", "float"], ["\"Hola\"", "string"]]

enunciado: "Si asignamos el valor {datos[ejemplo_idx][0]} a una variable, el tipo de dato resultante es {datos[ejemplo_idx][1]}."

respuesta: datos[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["int", "float", "string", "boolean"]

explicacion: |
  Cada valor tiene un tipo asociado: los números sin decimales son enteros (int), los que tienen punto decimal son de punto flotante (float) y las secuencias de caracteres entre comillas son cadenas (string).
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["logica", "booleanos"]

enunciado: "En programación, una comparación como 10 > 5 resulta en un valor de tipo ___."

respuestas_validas:
  - "booleano"
  - "bool"
respuesta: "booleano"
tipo: completar

explicacion: |
  Las comparaciones lógicas devuelven valores booleanos: 'verdadero' (true) si la condición se cumple, o 'falso' (false) si no se cumple. Como 10 > 5 se cumple, el resultado concreto es 'verdadero', pero su tipo de dato es booleano.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["casting", "conversiones"]

variables:
  valor_original: "10.7"
  escenario: [["int", "10"], ["float", "10.7"]]
  idx: uno_de([0, 1])

enunciado: "Si convertimos el valor {valor_original} al tipo {escenario[idx][0]}, ¿cuál será el resultado?"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["10", "10.7", "11", "error"]

explicacion: |
  Al convertir un número decimal (float) a un entero (int), se realiza un truncamiento: se eliminan todos los dígitos después del punto decimal sin redondear.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "basico"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor consumo aproximado de memoria en un sistema estándar (asumiendo 8 bits para booleanos y 32/64 para otros):"

opciones_explicitas: ["boolean", "int", "float", "string"]
respuesta_orden: ["boolean", "int", "float", "string"]
tipo: ordenar

explicacion: |
  Un booleano ocupa el espacio mínimo (1 bit/byte), seguido por enteros y flotantes de tamaño fijo, mientras que los strings son dinámicos y dependen de la longitud del texto.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_datos"
  nivel: "intermedio"
  tags: ["conceptos", "mutabilidad"]

enunciado: "En muchos lenguajes de programación, una vez que una variable de tipo 'string' ha sido creada, su contenido no puede ser modificado directamente en la memoria, sino que se debe crear una nueva cadena. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf
opciones_explicitas: ["verdadero", "falso"]

explicacion: |
  Esto se conoce como inmutabilidad. En lenguajes como Python o Java, los strings son inmutables; cualquier "modificación" genera un nuevo objeto en memoria.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "errores_comunes"]

variables:
  a: 10
  b: "5"

enunciado: "Si intentamos realizar la operación matemática de sumar {a} + {b} en un lenguaje de tipado fuerte, el resultado esperado suele ser un error de tipo (TypeError) porque no se puede sumar un entero con un ___."

opciones_explicitas: ["entero", "decimal", "string", "booleano"]
respuesta: "string"
tipo: "mc"

explicacion: |
  En programación, no puedes sumar directamente un número (entero) con una cadena de texto (string). Para hacerlo, primero debes convertir el string a un número usando funciones como `int()` o `float()`.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["booleanos", "logica"]

enunciado: "En la lógica de programación, el valor booleano que representa la falsedad se escribe como ___."

respuestas_validas:
  - "falso"
  - "false"
tipo: "completar"

explicacion: |
  Los tipos de datos booleanos solo pueden tener dos valores posibles: verdadero (true) o falso (false).
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["decimales", "float", "precision"]

variables:
  valor_a: 15
  valor_b: 15.5

enunciado: "Si declaramos una variable para almacenar el precio de un producto que puede tener centavos, como {valor_b}, ¿qué tipo de dato es el más adecuado para evitar la pérdida de precisión?"

opciones_explicitas: ["int", "float", "string", "bool"]
respuesta: "float"
tipo: "mc"

explicacion: |
  Los tipos `int` (enteros) solo almacenan números sin parte decimal. Para valores con decimales, se utilizan tipos de punto flotante como `float` o `double`.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["almacenamiento", "memoria"]

enunciado: "Ordena los siguientes pasos que ocurren cuando una computadora asigna una variable en memoria, desde la reserva del espacio hasta el uso del dato:"

opciones_explicitas: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
respuesta_orden: ["Reserva de espacio en RAM", "Asignación de un nombre a la dirección", "Almacenamiento del valor", "Acceso al dato mediante el nombre"]
tipo: "ordenar"

explicacion: |
  Para usar una variable, el sistema primero debe encontrar un lugar vacío en la memoria (RAM), asignar ese lugar a un nombre para que el programador lo reconozca, guardar el valor y finalmente permitir su lectura.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["comparacion", "booleanos"]

enunciado: "Si evaluamos la expresión lógica (5 == 5.0), el resultado es ___."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "mc"

explicacion: |
  En la mayoría de los lenguajes modernos, al comparar un entero con un número decimal que tiene el mismo valor numérico, el resultado es verdadero porque el contenido matemático es el mismo.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_numericos"
  nivel: "basico"
  tags: ["tipos_de_dato", "numeros"]

respuesta: "flotante"
tipo: completar
respuestas_validas:
  - "flotante"
  - "decimal"
  - "real"

enunciado: "Mientras que un tipo de dato entero representa números sin parte decimal, un tipo de dato ___ representa números que requieren precisión decimal."

explicacion: |
  En programación, los enteros (int) se usan para conteos exactos, mientras que los flotantes (float) se usan para mediciones con decimales.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

opciones_explicitas: ["falso", "verdadero", "texto", "entero"]
respuesta: "verdadero"
tipo: mc

enunciado: "Un tipo de dato booleano se distingue de otros tipos porque su valor solo puede representar uno de dos estados lógicos: 'falso' es uno de ellos. ¿Cuál es el otro estado posible?"

explicacion: |
  Los booleanos son la base de la lógica computacional y solo pueden ser 'verdadero' o 'falso'.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_texto"
  nivel: "basico"
  tags: ["strings", "texto"]

respuestas_validas:
  - "comillas"
respuesta: "comillas"
tipo: completar

enunciado: "A diferencia de los tipos numéricos, el tipo de dato texto (string) se distingue de un número por estar delimitado por ___ en el código fuente."

explicacion: |
  El uso de comillas (simples o dobles) le indica al compilador que el contenido debe tratarse como una secuencia de caracteres y no como una variable o un número.
```

```
metadata:
  materia: "informatica"
  tema: "almacenamiento_memoria"
  nivel: "intermedio"
  tags: ["memoria", "orden"]

opciones_explicitas: ["Booleano", "Entero", "Flotante", "String"]
respuesta_orden: ["Booleano", "Entero", "Flotante", "String"]
tipo: ordenar

enunciado: "Ordena los siguientes tipos de datos de menor a mayor complejidad de almacenamiento y procesamiento en la memoria de una computadora típica:"

explicacion: |
  Los booleanos ocupan menos espacio, seguidos por enteros, luego números decimales (que requieren más bits para la mantisa) y finalmente las cadenas de texto, cuyo tamaño depende de su longitud.
```

```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el tipo de dato booleano puede almacenar el valor numérico 5.5?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario (verdadero/falso) y no puede contener valores decimales o enteros distintos a su lógica.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["tipos_de_dato", "programacion"]

variables:
  datos: [["edad", "25", "entero"], ["nombre", "Ana", "texto"], ["precio", "19.99", "decimal"], ["es_valido", "true", "booleano"], ["puntos", "100", "entero"], ["usuario", "Dev_User", "texto"], ["promedio", "8.5", "decimal"], ["esta_activo", "false", "booleano"]]
  idx: uno_de([0, 1, 2, 3, 4, 5, 6, 7])

enunciado: "Si queremos almacenar el valor de la variable {datos[idx][0]} que contiene el dato {datos[idx][1]}, ¿qué tipo de dato es?"

opciones_explicitas: ["entero", "decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  El tipo de dato depende del contenido: si es un número sin decimales es entero, si tiene decimales es decimal, si es una secuencia de caracteres es texto y si es verdadero/falso es booleano.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["completar", "tipos_de_dato"]

variables:
  datos: [["\"Hola Mundo\"", "texto"], ["42", "entero"], ["3.14", "decimal"], ["false", "booleano"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "La variable que contiene el valor {datos[idx][0]} es de tipo ___."

respuestas_validas:
  - "texto"
  - "entero"
  - "decimal"
  - "booleano"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Cada valor tiene una representación lógica en memoria: los textos van entre comillas, los enteros no tienen punto decimal, los decimales sí, y los booleanos representan estados lógicos.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["booleanos", "memoria"]

enunciado: "¿Es correcto afirmar que una variable de tipo booleano puede almacenar el valor 15.5?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. Las variables de tipo booleano solo pueden almacenar dos valores: verdadero o falso. El valor 15.5 es un número decimal.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "intermedio"
  tags: ["ordenar", "memoria"]

enunciado: "Ordena los siguientes tipos de datos de menor a mayor capacidad de representar valores numéricos (desde el más simple al más complejo en términos de precisión decimal):"

opciones_explicitas: ["entero", "decimal", "texto"]
respuesta_orden: ["entero", "decimal", "texto"]
tipo: ordenar

explicacion: |
  El tipo entero solo maneja números sin decimales. El decimal permite precisión fraccionaria. El texto es una estructura compleja que puede contener cualquier carácter.
```

```
metadata:
  materia: "informatica"
  tema: "variables_y_tipos_de_dato"
  nivel: "basico"
  tags: ["identificacion", "programacion"]

variables:
  datos: [["saldo", "500.50", "decimal"], ["nombre", "Juan", "texto"], ["es_mayor", "true", "booleano"]]
  idx: uno_de([0, 1, 2])

enunciado: "En un sistema de gestión, la variable '{datos[idx][0]}' tiene el valor '{datos[idx][1]}'. Su tipo de dato es:"

opciones_explicitas: ["decimal", "texto", "booleano"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  Al analizar el valor '{datos[idx][1]}', podemos determinar su naturaleza: si tiene punto decimal es decimal, si es una cadena de letras es texto y si es un valor lógico es booleano.
```

## Sección: estructuras-de-control-condicionales (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["conceptos", "logica"]

tipo: mc
opciones_explicitas: ["Una estructura que repite un bloque de código", "Una estructura que permite ejecutar código según una condición", "Una función que realiza cálculos matemáticos", "Un tipo de dato que almacena números"]
respuesta: "Una estructura que permite ejecutar código según una condición"
enunciado: "En programación, una estructura condicional es..."
explicacion: |
  Las estructuras condicionales permiten que el flujo de un programa cambie de dirección dependiendo de si una condición es verdadera o falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "logica"]

tipo: vf

enunciado: "Para que una sentencia 'if' ejecute su bloque de código, la expresión evaluada debe ser verdadera."

respuesta: verdadero

explicacion: |
  El cuerpo de un 'if' solo se ejecuta si la condición evaluada resulta en un valor booleano verdadero.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if_else", "flujo"]

tipo: completar
respuestas_validas:
  - "else"

enunciado: "Si la condición del 'if' es falsa, el programa puede ejecutar un bloque alternativo utilizando la palabra clave ___."

explicacion: |
  La cláusula 'else' define el camino que toma el programa cuando la condición principal no se cumple.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["evaluacion", "booleano"]

variables:
  escenario: uno_de([["10 > 5", verdadero], ["5 > 10", falso], ["7 == 7", verdadero], ["3 != 3", falso]])

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado es ___."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [verdadero, falso]

explicacion: |
  Cada expresión de comparación se evalúa como verdadera o falsa según los valores involucrados: {escenario[0]} da como resultado {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo", "orden"]

tipo: ordenar
opciones_explicitas: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

enunciado: "Ordena los pasos lógicos que sigue una estructura 'if-else' estándar:"

respuesta_orden: ["1. Evaluar la condición", "2. Si es verdadera, ejecutar bloque A", "3. Si es falsa, ejecutar bloque B"]

explicacion: |
  El flujo lógico siempre comienza con la evaluación de la condición para luego decidir qué camino seguir.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "booleanos", "logica"]

variables:
  x: 10

respuesta: verdadero
tipo: vf

enunciado: "En un programa, si evaluamos la expresión x > 5 siendo x = {x}, el resultado de la condición es ___."

explicacion: |
  Dado que 10 es mayor que 5, la expresión es verdadera.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "flujo"]

respuesta: "reprobado"
tipo: mc
opciones_explicitas: ["reprobado", "aprobado"]

enunciado: "Si tenemos el siguiente código: \nif (edad >= 18) {{\n  print('aprobado');\n}} else {{\n  print('reprobado');\n}}\n\nSi la variable edad es 15, ¿qué se imprimirá en consola?"

pasos:
  - "Evaluar la condición: ¿15 >= 18? La respuesta es falso."
  - "Como la condición es falsa, el programa salta el bloque 'if' y entra al bloque 'else'."
  - "Se ejecuta la instrucción dentro del 'else'."

explicacion: |
  Al ser la condición falsa, se ejecuta la rama alternativa (else).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else", "sintaxis"]

tipo: completar
respuesta: "else"
respuestas_validas:
  - "else"

enunciado: "Completa la sintaxis correcta para este fragmento de código:\n\nif (puntuacion > 50) {{\n  print('Excelente');\n}} ___ {{\n  print('Inténtalo de nuevo');\n}}"

explicacion: |
  La estructura completa es 'if' para la condición inicial y 'else' para el caso contrario.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if", "else if", "logica"]

respuesta: "calor"
tipo: mc
opciones_explicitas: ["calor", "frio", "templado"]

enunciado: "Analiza el siguiente código:\n\nif (temp > 25) {{\n  print('calor');\n}} else if (temp > 0) {{\n  print('templado');\n}} else {{\n  print('frio');\n}}\n\nSi la variable temp es 30, ¿cuál es la salida?"

pasos:
  - "Se evalúa la primera condición: 30 > 25. Es verdadero."
  - "Al cumplirse la primera condición, se ejecuta su bloque y se sale de la estructura."
  - "Las condiciones 'else if' y 'else' se ignoran completamente."

explicacion: |
  En una estructura if/else if/else, solo se ejecuta el primer bloque cuya condición sea verdadera.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["flujo", "orden"]

respuesta_orden: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]
tipo: ordenar
opciones_explicitas: ["evaluar_condicion", "decidir_camino", "ejecutar_bloque"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al encontrar una estructura condicional if-else:"

explicacion: |
  Primero se determina si la condición es verdadera o falsa, luego se elige qué camino seguir y finalmente se procesa la instrucción correspondiente.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["error_comun", "if_else"]

enunciado: "Observa el siguiente código: if (x > 0) \n  print('Positivo') \n print('Siempre sale'). Si el programador quería que el segundo 'print' SOLO se ejecute si x > 0, pero lo escribió fuera de la indentación, ¿qué tipo de error ha cometido?"

opciones_explicitas: ["error_de_sintaxis", "error_de_logica", "error_de_tipo", "no hay error"]
respuesta: "error_de_logica"
tipo: mc

explicacion: |
  El código es sintácticamente correcto (no dará error al compilar), pero la lógica es errónea porque el segundo comando se ejecutará siempre, independientemente de la condición.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["confusión_operadores"]

variables:
  caso: uno_de([["if (edad = 18) { ... }", "error_sintaxis"], ["if (edad == 18) { ... }", "correcto"]])

enunciado: "En muchos lenguajes de programación, intentar usar un solo signo de igual '{caso[0]}' dentro de una condición 'if' en lugar de un doble signo de igual suele provocar un error de tipo '{caso[1]}' o un comportamiento inesperado. ¿Cuál es el operador correcto para comparar igualdad?"

opciones_explicitas: ["=", "==", "!=", "<=>"]
respuesta: "=="
tipo: mc

explicacion: |
  El signo '=' se usa para asignación (dar un valor a una variable), mientras que '==' se usa para comparación (verificar si dos valores son iguales).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["truthy_falsy"]

enunciado: "En lenguajes como Python o JavaScript, una lista vacía [] o el número 0 se evalúan como ___ en una estructura condicional 'if'. (Escribe 'falso' o 'verdadero')"

respuestas_validas:
  - "falso"
respuesta: "falso"
tipo: completar

explicacion: |
  En la evaluación de contextos booleanos (truthy/falsy), los valores vacíos, el cero y el valor null/none se consideran falsos.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["lógica_booleana"]

enunciado: "Si tenemos la expresión: 'if (x > 5 && x < 15)'. Si x es 20, ¿cuál es el resultado booleano de la condición?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  Como el operador '&&' (AND) requiere que AMBAS condiciones sean verdaderas, y 20 no es menor que 15, el resultado es falso.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "avanzado"
  tags: ["anidamiento"]

enunciado: "Ordena los pasos lógicos que sigue el procesador al evaluar una estructura 'if-elif-else' para encontrar la primera coincidencia verdadera:"

opciones_explicitas: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
respuesta_orden: ["Evaluar la condición del 'if' inicial", "Evaluar las condiciones de los 'elif' en orden", "Ejecutar el bloque 'else' si ninguna anterior fue verdadera"]
tipo: ordenar

explicacion: |
  Las estructuras condicionales múltiples se evalúan de arriba hacia abajo. En cuanto se encuentra una condición verdadera, se ejecuta su bloque y se salta el resto de la estructura.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["condicionales", "lógica"]

respuesta: "else"
tipo: "completar"
respuestas_validas:
  - "else"

enunciado: "Mientras que la estructura 'if' permite ejecutar un bloque de código si una condición es verdadera, la cláusula ___ se utiliza para definir qué código debe ejecutarse cuando dicha condición es falsa."

explicacion: |
  La estructura 'if' evalúa una condición. Si es verdadera, ejecuta su bloque. El 'else' es el bloque opcional que se ejecuta únicamente cuando la condición del 'if' resulta ser falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "lógica"]

variables:
  escenario: uno_de([["8 > 5", "verdadero"], ["3 == 10", "falso"], ["5 < 2", "falso"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si evaluamos la expresión {escenario[0]}, el resultado booleano que la estructura de control procesará es ___."

explicacion: |
  En programación, las estructuras condicionales dependen de valores booleanos. Si la expresión matemática o lógica se cumple, el resultado es 'verdadero'; de lo contrario, es 'falso'.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["flujo_de_control", "lógica"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que una estructura 'if' sin un bloque 'else' puede ser utilizada para ejecutar código de forma selectiva sin necesidad de manejar el caso contrario?"

explicacion: |
  Verdadero. Un 'if' independiente es perfectamente válido y se usa precisamente para ejecutar algo solo si se cumple una condición, ignorando el flujo si la condición es falsa.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["anidamiento", "flujo"]

respuesta_orden: ["if", "else if", "else"]
tipo: "ordenar"
opciones_explicitas: ["if", "else if", "else"]

enunciado: "En una estructura condicional compuesta (múltiples opciones), ¿cuál es el orden lógico de evaluación que debe seguir el procesador para evaluar condiciones de forma jerárquica?"

explicacion: |
  El programa evalúa primero la condición principal (if). Si no se cumple, pasa a las condiciones intermedias (else if) una por una. Si ninguna se cumple, se ejecuta el bloque por defecto (else).
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["operadores", "comparación"]

variables:
  caso: uno_de([["5 == 5", "igualdad"], ["5 != 5", "desigualdad"]])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["igualdad", "desigualdad"]

enunciado: "Si comparamos la expresión {caso[0]}, el operador utilizado busca determinar la ___ entre los dos valores."

explicacion: |
  El operador '==' comprueba si dos valores son iguales, mientras que '!=' (o distinto de) comprueba si son diferentes. Son la base de las decisiones en los condicionales.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["if", "else", "logica"]

variables:
  datos: [["rojo", "detenerse"], ["verde", "avanzar"], ["amarillo", "precaucion"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["detenerse", "avanzar", "precaucion"]

enunciado: "Un sensor detecta que el semáforo está en color {datos[idx][0]}. Según la lógica de control, la acción a ejecutar es ___."

explicacion: |
  El programa utiliza una estructura condicional para evaluar el estado de la variable 'color'. Si el color es rojo, la acción es detenerse.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["booleanos", "comparacion"]

variables:
  edad: uno_de([15, 20, 12])
  es_mayor: edad >= 18

respuesta: es_mayor
tipo: vf
enunciado: "Si tenemos una variable `edad` con el valor {edad}, ¿es verdadera la expresión `edad >= 18`?"

explicacion: |
  La expresión evalúa si el valor de la variable es mayor o igual a 18. Como {edad} es {edad}, el resultado es {es_mayor}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["if_else", "condicionales_anidadas"]

variables:
  datos: [["compra_alta", "aplicar_descuento"], ["compra_media", "sin_descuento"], ["compra_baja", "sin_descuento"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "aplicar_descuento"
  - "sin_descuento"

enunciado: "Un sistema de ventas evalúa el tipo de compra: {datos[idx][0]}. Si la condición es verdadera para una 'compra_alta', el sistema debe ___."

pasos:
  - "Evaluar el tipo de compra"
  - "Asignar la acción correspondiente al bloque else o if"

explicacion: |
  En una estructura if/else, el flujo se desvía hacia el bloque que cumple la condición. Para 'compra_alta', se ejecuta el primer bloque.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "basico"
  tags: ["comparacion"]

variables:
  temp: uno_de([35, 15, 25])
  es_calor: temp > 30

respuesta: es_calor
tipo: vf
enunciado: "Dada una variable `temp` con valor {temp}, ¿es verdadera la condición `temp > 30`?"

explicacion: |
  Al comparar {temp} con 30, obtenemos el valor booleano {es_calor}.
```

```
metadata:
  materia: "informatica"
  tema: "estructuras_de_control_condicionales"
  nivel: "intermedio"
  tags: ["ordenar", "logica_flujo"]

respuesta_orden: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]
tipo: ordenar
opciones_explicitas: ["Verificar credenciales", "Validar permisos", "Acceder al sistema"]

enunciado: "Ordena los pasos lógicos de un programa que controla el acceso a un panel de administración mediante condicionales:"

explicacion: |
  Primero se debe verificar si la identidad es correcta (if password_ok), luego si el rol tiene permiso (if user_role == 'admin') y finalmente permitir el acceso.
```

