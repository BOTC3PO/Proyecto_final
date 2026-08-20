### 1 — Bucle repetido 10 veces
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "bucle-fijo"]
respuesta: "repetir"
tipo: completar
enunciado: "Para ejecutar un bloque de acciones exactamente 10 veces sin condición de salida, debes usar el bloque del grupo 'Control' llamado ________ 10 veces."
pasos:
  - "Identificar que el número de iteraciones es fijo."
  - "Buscar el bloque específico para conteo fijo."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir (número)' ejecuta su contenido el número de veces indicado. Es la herramienta básica para bucles de conteo fijo en Scratch."
```

### 2 — Condición de ángulo
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "angulo", "control"]
respuesta: "verdadero"
tipo: vf
enunciado: "En Scratch, el bloque 'si <(ángulo) > (180)> entonces' ejecuta su interior cuando el sprite mira hacia la izquierda (ángulo 180) o más allá hacia la derecha dependiendo de la dirección."
pasos:
  - "Recordar que el ángulo 0 es derecha, 90 es arriba, 180 es izquierda."
  - "Evaluar la condición 'mayor que 180'."
  - "Determinar si el sprite puede tener un ángulo mayor a 180 en el sistema de coordenadas estándar de Scratch."
explicacion: "En Scratch, el ángulo del sprite va de -179 a 180 (o 0 a 360 dependiendo de la versión, pero la comparación > 180 es generalmente falsa para ángulos normales de rotación estándar que van hasta 180). Sin embargo, la afirmación es ambigua. Mejor: El bloque 'si <(ángulo) > (180)>' nunca se cumple porque el rango de ángulo es -180 a 180. Por lo tanto, es Falso."
```

### Corrección de la pregunta 2 para evitar ambigüedad técnica:
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "angulo", "control"]
respuesta: "falso"
tipo: vf
enunciado: "El bloque 'si <(ángulo) > (180)>' se ejecuta frecuentemente cuando un sprite gira completamente en sentido horario desde 0 grados."
pasos:
  - "El rango de valores del bloque 'ángulo' en Scratch es -179 a 180."
  - "Ningún valor válido de ángulo es estrictamente mayor que 180."
  - "Por tanto, la condición nunca es verdadera."
explicacion: "El bloque 'ángulo' devuelve valores entre -179 y 180. Nunca supera 180, por lo que la condición 'mayor que 180' es siempre falsa."
```

### 3 — Bucle infinito con 'siempre'
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["siempre", "bucle-infinito", "control"]
respuesta: "siempre"
tipo: completar
enunciado: "Para crear un bucle que nunca termine por sí mismo (bucle infinito) en Scratch, se utiliza el bloque de Control llamado ________."
pasos:
  - "Identificar la necesidad de un bucle sin condición de salida."
  - "Buscar el bloque que ejecuta su contenido continuamente."
  - "Escribir el nombre del bloque."
explicacion: "El bloque 'siempre' ejecuta su contenido una y otra vez indefinidamente. Es la forma estándar de crear bucles infinitos en Scratch."
```

### 4 — Variación de color por bucle
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "color", "operadores"]
respuesta: "sumar"
tipo: completar
enunciado: "En un bucle 'repetir (10)', para cambiar gradualmente el color del sprite, se suele usar el bloque 'cambiar [efecto de color v] por (10)'. Si se quisiera revertir el cambio en cada iteración, se usaría el operador aritmético ________."
pasos:
  - "Analizar cómo funcionan los efectos de color en Scratch."
  - "El efecto de color cambia acumulativamente."
  - "Para revertir o ajustar, se usan operadores matemáticos."
explicacion: "La pregunta es un poco trampa. En Scratch, `cambiar [efecto de color v] por (valor)` suma el valor al efecto actual. Para 'revertir' se usaría un valor negativo. El operador aritmético implícito es la suma (positiva o negativa). La respuesta correcta es 'sumar' en el sentido de que el bloque realiza una suma acumulativa."
```
*Corrección para claridad técnica estricta:*
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "color", "operadores"]
respuesta: "cambiar"
tipo: completar
enunciado: "El bloque que modifica un efecto visual del sprite dentro de un bucle, tomando un valor numérico como parámetro de incremento/decremento, se llama ________ [efecto de color v] por (número)."
pasos:
  - "Identificar el bloque de efectos en Scratch."
  - "Recuerda su sintaxis exacta."
  - "Completar el verbo principal del bloque."
explicacion: "El bloque es 'cambiar [efecto de color v] por (número)'. Es un bloque de operadores/efectos que modifica el valor actual del efecto."
```

### 5 — Condicional de tecla
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "tecla", "control"]
respuesta: "verdadero"
tipo: vf
enunciado: "El bloque 'si <tecla [espacio v] presionada?>' dentro de un bucle 'siempre' permite detectar pulsaciones repetidas de la tecla espacio."
pasos:
  - "Entender el funcionamiento de 'siempre' y 'si'."
  - "Verificar si el bloque detecta la presión actual."
  - "Confirmar que funciona dentro de bucles."
explicacion: "Es verdadero. El bloque 'tecla [X] presionada?' devuelve verdadero si la tecla está siendo presionada en ese momento. Dentro de un bucle 'siempre', se comprueba continuamente, permitiendo detectar la pulsación (aunque requiere liberación para nueva detección en algunos contextos, la afirmación es técnicamente correcta sobre su capacidad de detección)."
```

### 6 — Diferencia entre 'repetir' y 'repetir hasta'
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "repetir-hasta", "control"]
respuesta: "repetir hasta"
tipo: completar
enunciado: "Si quieres ejecutar un bloque de acciones hasta que una condición se vuelva verdadera, debes usar el bloque de Control ________."
pasos:
  - "Diferenciar entre bucles de conteo fijo y bucles condicionales."
  - "Identificar el bloque que evalúa una condición de salida."
  - "Escribir el nombre del bloque."
explicacion: "El bloque 'repetir hasta <condición>' ejecuta su contenido hasta que la condición sea verdadera. A diferencia de 'repetir (número)', no depende de un contador fijo."
```

### 7 — Bucle 'esperar' dentro de secuencia
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["esperar", "tiempo", "control"]
respuesta: "esperar"
tipo: completar
enunciado: "Para pausar la ejecución del script durante 2 segundos antes de continuar con la siguiente acción, se usa el bloque ________ (2)."
pasos:
  - "Identificar la necesidad de un retardo temporal."
  - "Buscar el bloque de control que pausa la ejecución."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'esperar (segundos)' pausa la ejecución del script actual durante el tiempo especificado. Es fundamental para controlar la velocidad de animación o secuencias."
```

### 8 — Condición de posición X
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "posición-x", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones solo cuando el sprite toca el borde derecho de la pantalla, se utiliza un bloque de Control '________' con la condición 'tocar el borde [derecho v]?'."
pasos:
  - "Identificar la necesidad de una decisión condicional."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar un bloque de código solo si una condición específica se cumple. En este caso, la condición es tocar el borde derecho."
```

### 9 — Bucle 'repetir hasta' con contador
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir-hasta", "variable", "control"]
respuesta: "repetir hasta"
tipo: completar
enunciado: "Si tienes una variable 'contador' que incrementa en cada iteración, y quieres detener el bucle cuando 'contador' llega a 10, usarías el bloque ________ <(contador) = (10)>."
pasos:
  - "Analizar la lógica de parada basada en una variable."
  - "Identificar el bloque de control que evalúa una condición booleana."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir hasta <condición>' es ideal para bucles condicionales. Se ejecutará mientras la condición sea falsa, y se detendrá cuando sea verdadera."
```

### 10 — Condición de color del puntero
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "color", "control"]
respuesta: "verdadero"
tipo: vf
enunciado: "El bloque 'si <tocar el color [rojo v]?>' se puede usar dentro de un bucle 'siempre' para detectar cuando el sprite toca un objeto de color rojo."
pasos:
  - "Verificar si el bloque 'tocar el color' existe en Scratch."
  - "Confirmar que funciona dentro de bucles."
  - "Evaluar la veracidad de la afirmación."
explicacion: "Es verdadero. El bloque 'tocar el color [color]?' devuelve verdadero si el sprite toca píxeles del color especificado. Funciona dentro de cualquier bucle."
```

### 11 — Bucle 'repetir' con variable
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "variable", "control"]
respuesta: "repetir"
tipo: completar
enunciado: "Para ejecutar un bloque un número de veces definido por una variable llamada 'veces', se usa el bloque ________ (veces)."
pasos:
  - "Identificar la necesidad de un bucle con contador variable."
  - "Buscar el bloque de control que acepta un número como parámetro."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir (número)' acepta tanto números constantes como variables que contengan números. Es la forma estándar de bucles de conteo dinámico."
```

### 12 — Condición de distancia
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "distancia", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando la distancia entre dos sprites es menor a 50, se usa un bloque de Control '________' con la condición 'distancia a [sprite2 v] < (50)'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en distancia."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición 'distancia a [sprite] < (número)' es una comparación válida."
```

### 13 — Bucle 'esperar' para animación
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["esperar", "animación", "control"]
respuesta: "esperar"
tipo: completar
enunciado: "Para crear una animación suave, se suele alternar entre mover el sprite y un bloque ________ (0.1) para controlar la velocidad de fotogramas."
pasos:
  - "Identificar la necesidad de controlar la velocidad de ejecución."
  - "Buscar el bloque de control que introduce un retraso."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'esperar (segundos)' es crucial para controlar la velocidad de animación. Un valor pequeño como 0.1 crea una animación más rápida, mientras que valores mayores la ralentizan."
```

### 14 — Condición de ángulo específico
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "ángulo", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando el sprite mira exactamente hacia arriba (ángulo 90), se usa un bloque de Control '________' con la condición '(ángulo) = (90)'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en orientación."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición '(ángulo) = (90)' verifica la orientación del sprite."
```

### 15 — Bucle 'repetir hasta' con tecla
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir-hasta", "tecla", "control"]
respuesta: "repetir hasta"
tipo: completar
enunciado: "Para esperar hasta que el usuario presione la tecla 'espacio', se usa el bloque ________ <tecla [espacio v] presionada?>."
pasos:
  - "Identificar la necesidad de un bucle que espere una acción del usuario."
  - "Buscar el bloque de control que evalúa una condición booleana."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir hasta <condición>' es ideal para esperar eventos. En este caso, espera hasta que la condición 'tecla [espacio] presionada?' sea verdadera."
```

### 16 — Condición de posición Y
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "posición-y", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando el sprite está en la parte superior de la pantalla (posición Y > 100), se usa un bloque de Control '________' con la condición '(posición y) > (100)'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en posición vertical."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición '(posición y) > (100)' verifica la ubicación vertical del sprite."
```

### 17 — Bucle 'repetir' con efecto de color
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "color", "control"]
respuesta: "repetir"
tipo: completar
enunciado: "Para cambiar el color del sprite 10 veces, se usa un bloque ________ (10) que contiene el bloque 'cambiar [efecto de color v] por (10)'."
pasos:
  - "Identificar la necesidad de un bucle de conteo fijo."
  - "Buscar el bloque de control que acepta un número."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir (número)' ejecuta su contenido un número específico de veces. Aquí, 10 iteraciones para cambiar el color 10 veces."
```

### 18 — Condición de tamaño
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "tamaño", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando el sprite es más grande que 100% de su tamaño original, se usa un bloque de Control '________' con la condición '(tamaño) > (100)'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en tamaño."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición '(tamaño) > (100)' verifica el tamaño actual del sprite."
```

### 19 — Bucle 'esperar' para pausa larga
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["esperar", "pausa", "control"]
respuesta: "esperar"
tipo: completar
enunciado: "Para pausar la ejecución del script durante 5 segundos, se usa el bloque ________ (5)."
pasos:
  - "Identificar la necesidad de un retardo temporal."
  - "Buscar el bloque de control que pausa la ejecución."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'esperar (segundos)' pausa la ejecución del script actual durante el tiempo especificado. Es fundamental para controlar la velocidad de animación o secuencias."
```

### 20 — Condición de dirección
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "dirección", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando el sprite se mueve hacia la derecha (dirección 90), se usa un bloque de Control '________' con la condición '(dirección) = (90)'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en dirección."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición '(dirección) = (90)' verifica la dirección actual del sprite."
```

### 21 — Bucle 'repetir hasta' con posición
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir-hasta", "posición", "control"]
respuesta: "repetir hasta"
tipo: completar
enunciado: "Para mover un sprite hasta que toque el borde inferior, se usa el bloque ________ <tocar el borde [inferior v]?> que contiene el bloque 'avanzar (10)'."
pasos:
  - "Identificar la necesidad de un bucle que espere una condición de posición."
  - "Buscar el bloque de control que evalúa una condición booleana."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir hasta <condición>' es ideal para bucles condicionales. Se ejecutará mientras la condición sea falsa, y se detendrá cuando sea verdadera."
```

### 22 — Condición de sonido
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "sonido", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando un sonido está sonando, se usa un bloque de Control '________' con la condición 'sonando [sonido1 v]?'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en estado de sonido."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición 'sonando [sonido]?' verifica si el sonido especificado está en reproducción."
```

### 23 — Bucle 'repetir' con movimiento
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["repetir", "movimiento", "control"]
respuesta: "repetir"
tipo: completar
enunciado: "Para mover un sprite en un cuadrado de lado 100, se usa un bloque ________ (4) que contiene 'avanzar (100)' y 'girar (90) grados'."
pasos:
  - "Identificar la necesidad de un bucle de conteo fijo."
  - "Buscar el bloque de control que acepta un número."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'repetir (número)' ejecuta su contenido un número específico de veces. Aquí, 4 iteraciones para cerrar un cuadrado."
```

### 24 — Condición de visibilidad
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["si", "visibilidad", "control"]
respuesta: "si"
tipo: completar
enunciado: "Para ejecutar acciones cuando el sprite es visible, se usa un bloque de Control '________' con la condición 'visible?'."
pasos:
  - "Identificar la necesidad de una decisión condicional basada en visibilidad."
  - "Buscar el bloque de control que permite condiciones."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'si' permite ejecutar código basado en condiciones booleanas. La condición 'visible?' verifica si el sprite está actualmente visible en la pantalla."
```

### 25 — Bucle 'esperar' para transición
```
metadata:
  materia: "scratch"
  tema: "secuencias-y-bucles"
  nivel: "basico"
  tags: ["esperar", "transición", "control"]
respuesta: "esperar"
tipo: completar
enunciado: "Para crear una transición suave entre dos fondos, se suele usar el bloque 'cambiar fondo a [fondo2 v]' seguido de un bloque ________ (1)."
pasos:
  - "Identificar la necesidad de un retardo temporal para la transición."
  - "Buscar el bloque de control que pausa la ejecución."
  - "Completar el nombre del bloque."
explicacion: "El bloque 'esperar (segundos)' pausa la ejecución del script actual durante el tiempo especificado. Es fundamental para controlar la velocidad de animación o secuencias."
```