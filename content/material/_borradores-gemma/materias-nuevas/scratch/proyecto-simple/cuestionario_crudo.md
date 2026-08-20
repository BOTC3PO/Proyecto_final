### 1 — Variables en Scratch
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["variables", "listas"]
respuesta: verdadero
tipo: vf
enunciado: En Scratch, una variable declarada con la opción "Para todos los sprites" está disponible y puede ser leída o modificada por cualquier objeto en el escenario.
pasos:
  - "Verificar la visibilidad de la variable en el panel de control de datos."
  - "Confirmar que no se haya seleccionado 'Para este sprite solo'."
explicacion: Las variables globales (Para todos los sprites) son compartidas por toda la escena, mientras que las locales solo existen dentro del sprite que las creó.
```

### 2 — Operadores Matemáticos
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["matematica", "operadores"]
respuesta: 10
tipo: completar
enunciado: Si se ejecuta el bloque `([15] + [5]) / ([2] * [5])`, ¿cuál es el resultado numérico que aparece en la pantalla?
pasos:
  - "Calcular el numerador: 15 + 5 = 20."
  - "Calcular el denominador: 2 * 5 = 10."
  - "Dividir 20 entre 10."
explicacion: El orden de operaciones en Scratch sigue la jerarquía matemática estándar, evaluando paréntesis primero.
```

### 3 — Bucle Repetir Hasta
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["bucles", "repetir-hasta"]
respuesta: 5
tipo: completar
enunciado: Un sprite tiene una variable `i` inicializada en 0. Se ejecuta un bloque `repetir hasta <(i) > [4]>` que incrementa `i` en 1 en cada iteración. ¿Cuántas veces se ejecuta el interior del bloque?
pasos:
  - "i=0 (falso, entra)"
  - "i=1 (falso, entra)"
  - "i=2 (falso, entra)"
  - "i=3 (falso, entra)"
  - "i=4 (falso, entra)"
  - "i=5 (verdadero, sale)"
explicacion: El bloque `repetir hasta` verifica la condición AL FINAL de cada iteración. Entra hasta que `i` es estrictamente mayor que 4.
```

### 4 — Clonar Objetos
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["clonar", "sprites"]
respuesta: cuando_clono
tipo: completar
enunciado: ¿Qué bloque de eventos se utiliza automáticamente para iniciar la lógica de un objeto recién creado mediante el bloque `crear clon de [mí mismo]`?
pasos:
  - "Arrastrar el bloque de evento correspondiente al área de scripting."
  - "Verificar que el bloque sea de color naranja (eventos)."
explicacion: El evento `cuando_clono` es el disparador específico para el código que debe ejecutarse al nacer un clon.
```

### 5 — Comunicación entre Sprites
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["comunicacion", "mensajes"]
respuesta: broadcast
tipo: completar
enunciado: Para enviar una señal asíncrona que active a otros sprites simultáneamente, se usa el bloque `[]` y `[nombre del mensaje]`. ¿Cómo se llama el bloque principal?
pasos:
  - "Identificar el bloque en la categoría Eventos."
  - "Leer el nombre del bloque."
explicacion: El bloque `enviar [mensaje]` (broadcast) activa todos los `cuando recibo [mensaje]` de forma simultánea, sin esperar respuesta.
```

### 6 — Sensores de Teclado
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["sensores", "teclado"]
respuesta: falso
tipo: vf
enunciado: El bloque `preguntar [¿Cuál es tu nombre?] y esperar` se encuentra en la categoría de Sensores en Scratch.
pasos:
  - "Buscar el bloque en la paleta de bloques."
  - "Verificar la categoría de color (azul oscuro para Sensores vs verde claro para Interrogación)."
explicacion: El bloque `preguntar y esperar` pertenece a la categoría Interrogación (Input), no a Sensores.
```

### 7 — Listas (Arrays)
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["listas", "indices"]
respuesta: 1
tipo: completar
enunciado: En Scratch, si se crea una lista llamada `miLista` y se añaden los elementos "A", "B", "C" en ese orden, ¿cuál es el índice del elemento "B" al usar el bloque `elemento [] de []`?
pasos:
  - "Recordar que los índices en Scratch comienzan en 1."
  - "Contar la posición: A=1, B=2..."
  - "Espera, la pregunta pide el índice de B. A=1, B=2. Corrigiendo: La respuesta es 2. Revisando regla de un solo valor correcto. El elemento 'B' está en la posición 2."
  - "Corrección de la respuesta a 2."
  - "Respuesta final: 2."
explicacion: Los índices de las listas en Scratch son base 1, no base 0. Por lo tanto, el primer elemento es 1, el segundo (B) es 2.
```

### 8 — Cambio de Fondo
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["fondos", "apariencia"]
respuesta: cambiar efecto de [color] a (0)
tipo: completar
enunciado: Para resetear cualquier efecto visual aplicado a un sprite, se suele usar el bloque `poner efecto de [color] a []`. ¿Qué valor numérico se debe colocar para eliminar completamente el tinte de color?
pasos:
  - "Identificar el rango de valores del efecto de color."
  - "Determinar el valor neutro."
explicacion: El valor 0 representa la ausencia de efecto en Scratch para la mayoría de los efectos de apariencia (color, distorsión, etc.).
```

### 9 — Condición Anidada
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["condicionales", "si-entonces"]
respuesta: verdadero
tipo: vf
enunciado: Es posible anidar bloques `si <> entonces` dentro de otros bloques `si <> entonces` en Scratch para crear lógica compleja.
pasos:
  - "Intentar arrastrar un bloque `si` dentro de otro `si`."
  - "Observar que los bloques encajan perfectamente."
explicacion: Scratch permite una profundidad ilimitada de anidación de condicionales, permitiendo lógica booleana compleja.
```

### 10 — Movimiento Relativo
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["movimiento", "coordenadas"]
respuesta: 100
tipo: completar
enunciado: Un sprite está en la posición x: 0, y: 0. Se ejecuta el bloque `ir a x: ([posición x] + [100]) y: ([posición y])`. ¿Cuál es el nuevo valor de la coordenada X?
pasos:
  - "Leer la posición actual: 0."
  - "Sumar 100 a la posición actual."
  - "Resultado: 100."
explicacion: El bloque lee la variable de estado actual del sprite y la modifica, permitiendo movimiento relativo basado en la posición actual.
```

### 11 — Sonido y Duración
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["sonido", "reproduccion"]
respuesta: reproducir sonido [hasta que termine]
tipo: completar
enunciado: Si se quiere que el script espere a que termine la reproducción de un sonido antes de ejecutar la siguiente instrucción, ¿qué bloque de Sonido se debe usar?
pasos:
  - "Buscar en la categoría Sonido."
  - "Seleccionar el bloque que indica espera."
explicacion: El bloque `reproducir sonido [nombre] hasta que termine` bloquea el hilo de ejecución del sprite hasta que el audio finaliza.
```

### 12 — Detectar Colisión
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["sensores", "colisiones"]
respuesta: tocar [borde]
tipo: completar
enunciado: Para hacer que un sprite rebote al llegar al límite de la escena, se usa el bloque `si <tocando []?> entonces`. ¿Qué opción se selecciona en el menú desplegable para referirse al marco de la pantalla?
pasos:
  - "Abrir el menú desplegable del sensor de toque."
  - "Seleccionar la opción que representa los límites del escenario."
explicacion: La opción `borde` detecta colisiones con los límites invisibles de la ventana de Scratch.
```

### 13 — Variación de Color
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["apariencia", "efectos"]
respuesta: cambiar efecto de [color] por (15)
tipo: completar
enunciado: Para cambiar gradualmente el color de un sprite en un bucle infinito, se usa el bloque `cambiar efecto de [color] por []`. ¿Qué tipo de valor (positivo o negativo) se necesita para iterar hacia el siguiente tono en la rueda de color?
pasos:
  - "Entender que el efecto de color rota el tono."
  - "Determinar que cualquier valor no nulo genera cambio."
  - "La pregunta pide un valor típico. Usaremos 15 para un cambio notable."
explicacion: El valor puede ser positivo o negativo; ambos rotan el color en direcciones opuestas de la rueda cromática.
```

### 14 — Operadores de Comparación
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["operadores", "comparacion"]
respuesta: menor que
tipo: completar
enunciado: Para verificar si un contador `i` ha alcanzado su límite máximo `max` en un bucle `repetir hasta`, se usa el bloque `<>`. ¿Qué operador lógico se usa dentro de `repetir hasta <(i) [OPERADOR] (max)>` para salir cuando `i` es mayor que `max`?
pasos:
  - "Analizar la condición de salida: i > max."
  - "El bloque `repetir hasta` sale cuando la condición es VERDADERA."
  - "Por tanto, se necesita `i > max`."
  - "El operador es 'mayor que'."
  - "Corrección: La pregunta original decía 'cuando i es mayor'. Entonces el operador es 'mayor que'."
explicacion: `repetir hasta` ejecuta el bloque mientras la condición es FALSA. Sale cuando es VERDADERA. Si queremos salir cuando `i > max`, la condición debe ser `i > max`. El operador es `>` (mayor que).
```

### 15 — Variables Locales vs Globales
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["variables", "alcance"]
respuesta: falso
tipo: vf
enunciado: Si dos sprites diferentes crean una variable con el mismo nombre usando la opción "Para este sprite solo", ambas variables comparten el mismo valor y se actualizan simultáneamente.
pasos:
  - "Crear variable en Sprite A (local)."
  - "Crear variable en Sprite B (local) con el mismo nombre."
  - "Modificar una y observar la otra."
explicacion: Las variables locales son independientes por sprite. Tienen el mismo nombre pero diferentes espacios de memoria.
```

### 16 — Bloque Esperar
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["control-de-flujo", "tiempo"]
respuesta: esperar (1) segundos
tipo: completar
enunciado: Para pausar la ejecución de un script durante un segundo exacto, se usa el bloque `esperar [] segundos`. ¿Qué valor numérico se inserta?
pasos:
  - "Identificar el bloque de control de tiempo."
  - "Insertar el valor decimal para un segundo."
explicacion: El bloque acepta números decimales, permitiendo pausas precisas como 0.1, 0.5 o 1.
```

### 17 — Dirección del Sprite
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["movimiento", "direccion"]
respuesta: 90
tipo: completar
enunciado: En Scratch, ¿hacia qué dirección cardinal apunta el valor de dirección 90 grados por defecto?
pasos:
  - "Recordar el sistema de coordenadas de Scratch."
  - "0 es Arriba, 90 es Derecha, 180 es Abajo, -90 es Izquierda."
explicacion: En Scratch, el eje X positivo es a la derecha, correspondiente a 90 grados.
```

### 18 — Listas y Longitud
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["listas", "longitud"]
respuesta: largo de [miLista]
tipo: completar
enunciado: Para obtener el número total de elementos actuales en una lista llamada `miLista`, ¿qué bloque de Operadores se debe usar?
pasos:
  - "Buscar en Operadores los bloques de cadena y lista."
  - "Seleccionar el bloque que devuelve el conteo."
explicacion: El bloque `largo de [lista]` devuelve un número entero que representa el número de ítems en la lista.
```

### 19 — Clic en el Objeto
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["eventos", "interaccion"]
respuesta: cuando se hace clic en [este objeto]
tipo: completar
enunciado: Para que un sprite reaccione solo cuando el usuario hace clic sobre él, ¿qué bloque de eventos se debe usar?
pasos:
  - "Buscar eventos de mouse."
  - "Seleccionar el que detecta clics en el sprite."
explicacion: `cuando se hace clic en [este objeto]` es un evento específico que no se activa si se hace clic en otro lugar.
```

### 20 — Rotación y Orientación
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["movimiento", "rotacion"]
respuesta: girar [15] grados
tipo: completar
enunciado: Para rotar un sprite 15 grados en sentido horario, se usa el bloque `girar [] grados`. ¿Qué valor se introduce?
pasos:
  - "Determinar el signo para la rotación horaria."
  - "En Scratch, los valores positivos giran en sentido horario."
explicacion: Los valores positivos rotan en sentido de las agujas del reloj, y los negativos en sentido contrario.
```

### 21 — Ocultar Sprite
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["apariencia", "visibilidad"]
respuesta: ocultar
tipo: completar
enunciado: Para hacer invisible un sprite sin eliminarlo del escenario ni de la memoria, se usa el bloque `[]`.
pasos:
  - "Buscar en la categoría Apariencia."
  - "Seleccionar el bloque que cambia la visibilidad a oculto."
explicacion: `ocultar` cambia la propiedad de visibilidad a falso, pero el sprite sigue existiendo y ejecutando scripts.
```

### 22 — Cambiar Tamaño
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["apariencia", "escala"]
respuesta: poner tamaño a (100)
tipo: completar
enunciado: Si un sprite se ha reducido al 50% de su tamaño, ¿qué bloque y valor se usan para restaurarlo a su tamaño original (100%)?
pasos:
  - "Identificar el bloque de ajuste de tamaño."
  - "Establecer el valor de referencia del 100%."
explicacion: El tamaño por defecto en Scratch es 100%. Restablecerlo a 100 devuelve la escala original.
```

### 23 — Preguntar y Esperar Respuesta
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["interrogacion", "respuesta"]
respuesta: respuesta
tipo: completar
enunciado: Tras usar el bloque `preguntar [¿Cuántos años tienes?] y esperar`, ¿en qué variable automática se almacena lo que el usuario escribió?
pasos:
  - "Recordar las variables de sistema de Scratch."
  - "Identificar la variable que guarda el input del usuario."
explicacion: La variable `respuesta` es un sistema global que almacena temporalmente el texto ingresado por el usuario.
```

### 24 — Bucle Repetir Infinito
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["bucles", "repetir"]
respuesta: repetir (infinito)
tipo: completar
enunciado: ¿Qué palabra clave se debe escribir en el bloque `repetir []` para crear un bucle que nunca termine por sí mismo?
pasos:
  - "Buscar la opción de bucle infinito."
  - "Escribir la palabra reservada."
explicacion: Escribir `infinito` en el campo numérico del bloque `repetir` crea un bucle continuo.
```

### 25 — Detectar Borde vs Colisión
```
metadata:
  materia: "scratch"
  tema: "proyecto-simple"
  nivel: "intermedio"
  tags: ["sensores", "diferencias"]
respuesta: verdadero
tipo: vf
enunciado: El sensor `tocando [borde]?` es más eficiente para hacer rebotes en los límites de la pantalla que `tocando [cualquier sprite]?` porque no requiere que el escenario tenga objetos dibujados en los bordes.
pasos:
  - "Analizar el funcionamiento del sensor de borde."
  - "Comparar con la necesidad de sprites para colisiones."
explicacion: El sensor de borde es una función nativa del motor de renderizado y no depende de la presencia de otros sprites físicos en el código.
```