### 1 — Condición de colisión con color
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["si-entonces", "colision", "color"]
tipo: completar
enunciado: >
  Quiero que mi personaje cambie de color cuando toque un objeto específico.
  Para lograrlo, debo usar un bloque condicional que verifique si el personaje
  está tocando el objeto "Fondo" o un objeto con el color ___.
respuesta: "color"
respuestas_validas:
  - "color"
  - "Color"
  - "COLOR"
  - "col"
  - "Col"
  - "COL"
  - "color (de la punta del cursor)"
  - "color de la punta del cursor"
  - "color de la punta"
pasos:
  - "Identificar el evento de contacto."
  - "Seleccionar el bloque de condición apropiado."
  - "Configurar el parámetro de detección."
explicacion:
  - "El bloque 'si <tocando [color]?>' permite detectar colisiones basadas en la identidad del color del pixel bajo la punta del cursor del personaje."
```

### 2 — Verificar valor de variable
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["variable", "igual", "comparacion"]
tipo: mc
enunciado: >
  Tengo una variable llamada 'Puntos' y quiero que el juego diga 'Ganaste'
  cuando el jugador alcance 100 puntos. ¿Qué bloque condicional debo usar?
opciones_explicitas:
  - "si <tocando [borde]?> entonces"
  - "si <(Puntos) = (100)> entonces"
  - "si <tecla [espacio v] presionada?> entonces"
  - "si <distancia a [mouse v]> entonces"
respuesta: "si <(Puntos) = (100)> entonces"
pasos:
  - "Definir la variable a monitorear."
  - "Elegir la operación de comparación correcta."
  - "Insertar el valor límite."
explicacion:
  - "El operador de igualdad (=) dentro de un bloque 'si' es la forma estándar de verificar si una variable ha alcanzado un valor específico."
```

### 3 — Detección de tecla presionada
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["teclado", "input", "entrada"]
tipo: completar
enunciado: >
  Para que un personaje salte solo cuando el usuario presiona la barra espaciadora,
  debo colocar el bloque 'si <tecla ___ v> presionada?>' dentro de un bucle.
respuesta: "espacio"
respuestas_validas:
  - "espacio"
  - "Espacio"
  - "ESPACIO"
  - "barra espaciadora"
  - "Barra espaciadora"
  - "barra espacio"
  - "Barra espacio"
  - "space"
  - "SPACE"
pasos:
  - "Seleccionar el bloque de detección de teclado."
  - "Elegir la tecla correspondiente."
  - "Colocar la condición dentro de un bucle 'por siempre'."
explicacion:
  - "El bloque 'tecla [espacio v] presionada?' detecta el estado actual de la tecla, por lo que debe usarse dentro de un bucle para ser continuo."
```

### 4 — Comparación de tamaño
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["tamaño", "mayor", "menor"]
tipo: vf
enunciado: >
  El bloque 'si <(tamaño) > (50)> entonces' ejecutará el código interior
  cuando el tamaño del personaje sea menor que 50.
respuesta: falso
pasos:
  - "Leer el operador de comparación en el bloque."
  - "Identificar el símbolo '>'."
  - "Determinar el significado lógico del símbolo."
explicacion:
  - "El símbolo '>' significa 'mayor que', no 'menor que'. Por lo tanto, el código se ejecutará si el tamaño es estrictamente mayor a 50."
```

### 5 — Distancia al ratón
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["mouse", "distancia", "interaccion"]
tipo: completar
enunciado: >
  Quiero que un objeto se mueva hacia el cursor del ratón solo si está
  muy lejos. Debo usar el bloque 'si <distancia a [___ v]> > (100)>'
  para verificar la separación.
respuesta: "mouse"
respuestas_validas:
  - "mouse"
  - "Mouse"
  - "MOUSE"
  - "cursor"
  - "Cursor"
  - "CURSOR"
  - "puntero"
  - "Puntero"
  - "PUNTERO"
pasos:
  - "Seleccionar el bloque de distancia."
  - "Elegir el objeto de referencia."
  - "Comparar con el umbral deseado."
explicacion:
  - "El objeto 'mouse' es la opción predeterminada y correcta para referenciar la posición del cursor del usuario en Scratch."
```

### 6 — Condición de tiempo
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["reloj", "tiempo", "duracion"]
tipo: mc
enunciado: >
  ¿Qué bloque me permite ejecutar una acción si han pasado más de 10 segundos
  desde el inicio del proyecto?
opciones_explicitas:
  - "si <(tiempo) > (10)>"
  - "si <(día) = (10)>"
  - "si <(minutos) > (10)>"
  - "si <(hora) = (10)>"
respuesta: "si <(tiempo) > (10)>"
pasos:
  - "Identificar la variable de tiempo en Scratch."
  - "Seleccionar el bloque de comparación numérica."
  - "Configurar el valor límite."
explicacion:
  - "El bloque 'tiempo' cuenta los segundos desde que se presiona el botón verde. Es la forma correcta de medir la duración de la ejecución."
```

### 7 — Negación de condición
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["no", "negacion", "logica"]
tipo: completar
enunciado: >
  Si quiero que un personaje hable solo cuando NO está tocando el borde,
  debo envolver la condición 'tocando [___]?' dentro de un bloque 'no'.
respuesta: "borde"
respuestas_validas:
  - "borde"
  - "Borde"
  - "BORDE"
  - "edge"
  - "Edge"
  - "EDGE"
  - "bordes"
  - "Bordes"
  - "BORDES"
pasos:
  - "Seleccionar el bloque de detección de colisión."
  - "Elegir el objeto 'borde'."
  - "Envolver la condición en un bloque lógico 'no'."
explicacion:
  - "El bloque 'no' invierte el valor booleano: si 'tocando [borde]?' es falso, 'no <tocando [borde]?>' es verdadero."
```

### 8 — Operador OR
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["or", "o", "logica"]
tipo: mc
enunciado: >
  Para que un personaje gire si presiono la flecha izquierda O la flecha derecha,
  debo usar el bloque de conexión lógica:
opciones_explicitas:
  - "y <...> <...>"
  - "o <...> <...>"
  - "no <...>"
  - "si <...> entonces <...> si no <...>"
respuesta: "o <...> <...>"
pasos:
  - "Identificar la necesidad de múltiples condiciones alternativas."
  - "Seleccionar el operador lógico OR."
  - "Insertar las dos condiciones de teclas."
explicacion:
  - "El operador 'o' (OR) devuelve verdadero si al menos una de las condiciones conectadas es verdadera."
```

### 9 — Verificar si un objeto está oculto
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: completar
enunciado: >
  Para mostrar un objeto solo si actualmente está oculto, debo usar el bloque
  'si <___> entonces' dentro de los bloques de apariencia.
respuesta: "oculto"
respuestas_validas:
  - "oculto"
  - "Oculto"
  - "OCULTO"
  - "hidden"
  - "Hidden"
  - "HIDDEN"
  - "está oculto"
  - "Esta oculto"
  - "ESTA OCULTO"
pasos:
  - "Ir a la categoría de Apariencia."
  - "Seleccionar el bloque de estado de visibilidad."
  - "Usarlo como condición del bloque 'si'."
explicacion:
  - "El bloque 'oculto' es un predicado booleano que devuelve verdadero si el objeto no es visible en el escenario."
```

### 10 — Condición de dirección
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["direccion", "orientacion", "giro"]
tipo: mc
enunciado: >
  Quiero que mi personaje rebote hacia la izquierda solo si está mirando
  hacia la derecha (dirección 90). ¿Qué bloque condicional es correcto?
opciones_explicitas:
  - "si <(dirección) = (90)>"
  - "si <(dirección) = (-90)>"
  - "si <(dirección) = (180)>"
  - "si <(dirección) = (0)>"
respuesta: "si <(dirección) = (90)>"
pasos:
  - "Identificar el valor numérico de la dirección 'derecha' en Scratch."
  - "Seleccionar el bloque de comparación de variable."
  - "Igualar a 90."
explicacion:
  - "En Scratch, la dirección 90 corresponde a la derecha, -90 a la izquierda, 180 arriba y 0 abajo."
```

### 11 — Verificar si un objeto está en el escenario
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "escenario", "mostrar"]
tipo: completar
enunciado: >
  Si quiero que un objeto aparezca en el escenario solo cuando el jugador
  presiona 'Espacio', y se oculta cuando se presiona 'S', debo usar la
  condición 'si <tecla [___] v> presionada?>' para mostrarlo.
respuesta: "espacio"
respuestas_validas:
  - "espacio"
  - "Espacio"
  - "ESPACIO"
  - "barra espaciadora"
  - "Barra espaciadora"
  - "barra espacio"
  - "Barra espacio"
  - "space"
  - "SPACE"
pasos:
  - "Seleccionar el bloque de detección de teclado."
  - "Elegir la tecla de activación."
  - "Conectar el bloque de 'mostrar' dentro del 'si'."
explicacion:
  - "La tecla 'espacio' es la más común para acciones de activación o salto en juegos simples."
```

### 12 — Comparación de números aleatorios
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["aleatorio", "numero", "probabilidad"]
tipo: mc
enunciado: >
  Quiero que un evento ocurra con una probabilidad del 50%. ¿Qué condición
  es la más adecuada usando el bloque 'número aleatorio'?
opciones_explicitas:
  - "si <(número aleatorio de (1) a (2)) = (1)>"
  - "si <(número aleatorio de (1) a (100)) < (50)>"
  - "si <(número aleatorio de (1) a (10)) = (5)>"
  - "si <(número aleatorio de (0) a (100)) > (50)>"
respuesta: "si <(número aleatorio de (1) a (2)) = (1)>"
pasos:
  - "Seleccionar el generador de números aleatorios."
  - "Definir un rango binario (1 a 2)."
  - "Comparar con uno de los valores."
explicacion:
  - "Generar un número entre 1 y 2 y verificar si es 1 da exactamente un 50% de probabilidad de ser verdadero."
```

### 13 — Verificar si un objeto está en el escenario (alternativa)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: vf
enunciado: >
  El bloque 'si <oculto?> entonces' se ejecutará si el objeto es visible.
respuesta: falso
pasos:
  - "Leer el nombre del bloque de estado."
  - "Determinar su significado lógico."
  - "Comparar con la afirmación."
explicacion:
  - "El bloque 'oculto' devuelve verdadero si el objeto NO es visible. La afirmación dice que se ejecuta si es visible, lo cual es incorrecto."
```

### 14 — Condición de posición X
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["posicion", "eje-x", "borde"]
tipo: completar
enunciado: >
  Para que un personaje rebote al tocar el borde derecho, debo verificar
  si su posición X es igual a ___.
respuesta: "180"
respuestas_validas:
  - "180"
  - "180.0"
  - "180.00"
  - "180,0"
  - "180,00"
  - "180 (borde derecho)"
  - "180 borde derecho"
  - "180 borde-derecho"
  - "180 (right)"
  - "180 right"
pasos:
  - "Identificar el eje horizontal (X)."
  - "Conocer el límite derecho del escenario en Scratch."
  - "Configurar la comparación de igualdad."
explicacion:
  - "El escenario de Scratch tiene un ancho de 360 píxeles, por lo que el borde derecho está en X=180."
```

### 15 — Condición de posición Y
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["posicion", "eje-y", "borde"]
tipo: mc
enunciado: >
  Si quiero que un personaje rebote al tocar el borde superior, ¿qué valor
  de Y debo comparar?
opciones_explicitas:
  - "170"
  - "120"
  - "-170"
  - "-120"
respuesta: "170"
pasos:
  - "Identificar el eje vertical (Y)."
  - "Conocer el límite superior del escenario en Scratch."
  - "Seleccionar el valor correcto."
explicacion:
  - "El escenario de Scratch tiene una altura de 340 píxeles, por lo que el borde superior está en Y=170."
```

### 16 — Verificar si un objeto está en el escenario (otro)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: completar
enunciado: >
  Para ocultar un objeto solo cuando su tamaño es menor a 10, debo usar
  la condición 'si <(tamaño) < (10)> entonces' y luego el bloque ___.
respuesta: "ocultar"
respuestas_validas:
  - "ocultar"
  - "Ocultar"
  - "OCULTAR"
  - "hide"
  - "Hide"
  - "HIDE"
  - "esconder"
  - "Esconder"
  - "ESCONDER"
  - "esconderse"
  - "Esconderse"
  - "ESCONDERSE"
pasos:
  - "Seleccionar el bloque de control de visibilidad."
  - "Elegir la acción de ocultar."
  - "Colocarlo dentro del bloque 'si'."
explicacion:
  - "El bloque 'ocultar' hace que el objeto desaparezca del escenario, pero permanece en la lista de objetos."
```

### 17 — Condición de tiempo (reloj interno)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["reloj", "tiempo", "duracion"]
tipo: mc
enunciado: >
  ¿Qué bloque me permite ejecutar una acción si han pasado más de 60 segundos
  desde el inicio del proyecto?
opciones_explicitas:
  - "si <(tiempo) > (60)>"
  - "si <(tiempo) < (60)>"
  - "si <(tiempo) = (60)>"
  - "si <(tiempo) > (100)>"
respuesta: "si <(tiempo) > (60)>"
pasos:
  - "Seleccionar el bloque de tiempo."
  - "Elegir el operador de mayor que."
  - "Configurar el valor de 60 segundos."
explicacion:
  - "El bloque 'tiempo' cuenta segundos desde el inicio. La condición '> (60)' se cumple cuando el tiempo excede 60."
```

### 18 — Verificar si un objeto está en el escenario (otro)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: vf
enunciado: >
  El bloque 'si <oculto?> entonces' se ejecutará si el objeto es visible.
respuesta: falso
pasos:
  - "Leer el nombre del bloque de estado."
  - "Determinar su significado lógico."
  - "Comparar con la afirmación."
explicacion:
  - "El bloque 'oculto' devuelve verdadero si el objeto NO es visible. La afirmación dice que se ejecuta si es visible, lo cual es incorrecto."
```

### 19 — Condición de dirección (izquierda)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["direccion", "orientacion", "giro"]
tipo: completar
enunciado: >
  Si quiero que un personaje gire hacia la derecha solo si está mirando
  hacia la izquierda, debo verificar si su dirección es igual a ___.
respuesta: "-90"
respuestas_validas:
  - "-90"
  - "-90.0"
  - "-90.00"
  - "-90,0"
  - "-90,00"
  - "-90 (izquierda)"
  - "-90 izquierda"
  - "-90 (left)"
  - "-90 left"
  - "-90 (izq)"
  - "-90 izq"
pasos:
  - "Identificar el valor numérico de la dirección 'izquierda' en Scratch."
  - "Seleccionar el bloque de comparación de variable."
  - "Igualar a -90."
explicacion:
  - "En Scratch, la dirección -90 corresponde a la izquierda."
```

### 20 — Verificar si un objeto está en el escenario (otro)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: mc
enunciado: >
  Para mostrar un objeto solo si actualmente está oculto, debo usar el bloque
  'si <___> entonces' dentro de los bloques de apariencia.
opciones_explicitas:
  - "mostrar"
  - "ocultar"
  - "oculto"
  - "visible"
respuesta: "oculto"
pasos:
  - "Ir a la categoría de Apariencia."
  - "Seleccionar el bloque de estado de visibilidad."
  - "Usarlo como condición del bloque 'si'."
explicacion:
  - "El bloque 'oculto' es un predicado booleano que devuelve verdadero si el objeto no es visible en el escenario."
```

### 21 — Condición de tiempo (reloj interno)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["reloj", "tiempo", "duracion"]
tipo: completar
enunciado: >
  Quiero que un evento ocurra exactamente en el segundo 30. Debo usar la
  condición 'si <(tiempo) = (___)>'
respuesta: "30"
respuestas_validas:
  - "30"
  - "30.0"
  - "30.00"
  - "30,0"
  - "30,00"
  - "30 (segundos)"
  - "30 segundos"
  - "30 (s)"
  - "30 s"
  - "30 (tiempo)"
  - "30 tiempo"
pasos:
  - "Seleccionar el bloque de tiempo."
  - "Elegir el operador de igualdad."
  - "Configurar el valor de 30."
explicacion:
  - "El bloque 'tiempo' cuenta segundos desde el inicio. La condición '= (30)' se cumple cuando el tiempo es exactamente 30."
```

### 22 — Verificar si un objeto está en el escenario (otro)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: vf
enunciado: >
  El bloque 'si <oculto?> entonces' se ejecutará si el objeto es visible.
respuesta: falso
pasos:
  - "Leer el nombre del bloque de estado."
  - "Determinar su significado lógico."
  - "Comparar con la afirmación."
explicacion:
  - "El bloque 'oculto' devuelve verdadero si el objeto NO es visible. La afirmación dice que se ejecuta si es visible, lo cual es incorrecto."
```

### 23 — Condición de dirección (arriba)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["direccion", "orientacion", "giro"]
tipo: mc
enunciado: >
  Si quiero que un personaje gire hacia abajo solo si está mirando hacia arriba,
  debo verificar si su dirección es igual a ___.
opciones_explicitas:
  - "180"
  - "90"
  - "-90"
  - "0"
respuesta: "180"
pasos:
  - "Identificar el valor numérico de la dirección 'arriba' en Scratch."
  - "Seleccionar el bloque de comparación de variable."
  - "Igualar a 180."
explicacion:
  - "En Scratch, la dirección 180 corresponde a la parte superior del escenario."
```

### 24 — Verificar si un objeto está en el escenario (otro)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["apariencia", "oculto", "visible"]
tipo: completar
enunciado: >
  Para ocultar un objeto solo cuando su tamaño es menor a 10, debo usar
  la condición 'si <(tamaño) < (10)> entonces' y luego el bloque ___.
respuesta: "ocultar"
respuestas_validas:
  - "ocultar"
  - "Ocultar"
  - "OCULTAR"
  - "hide"
  - "Hide"
  - "HIDE"
  - "esconder"
  - "Esconder"
  - "ESCONDER"
  - "esconderse"
  - "Esconderse"
  - "ESCONDERSE"
pasos:
  - "Seleccionar el bloque de control de visibilidad."
  - "Elegir la acción de ocultar."
  - "Colocarlo dentro del bloque 'si'."
explicacion:
  - "El bloque 'ocultar' hace que el objeto desaparezca del escenario, pero permanece en la lista de objetos."
```

### 25 — Condición de tiempo (reloj interno)
```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["reloj", "tiempo", "duracion"]
tipo: mc
enunciado: >
  ¿Qué bloque me permite ejecutar una acción si han pasado más de 120 segundos
  desde el inicio del proyecto?
opciones_explicitas:
  - "si <(tiempo) > (120)>"
  - "si <(tiempo) < (120)>"
  - "si <(tiempo) = (120)>"
  - "si <(tiempo) > (60)>"
respuesta: "si <(tiempo) > (120)>"
pasos:
  - "Seleccionar el bloque de tiempo."
  - "Elegir el operador de mayor que."
  - "Configurar el valor de 120 segundos."
explicacion:
  - "El bloque 'tiempo' cuenta segundos desde el inicio. La condición '> (120)' se cumple cuando el tiempo excede 120."
```