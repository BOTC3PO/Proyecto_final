### 1 — Recorrido de vector con for
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "for", "recorrido"]
respuesta: Verdadero
tipo: vf
enunciado: En PSeInt, al definir un vector de tamaño N, los índices válidos para acceder a sus elementos van desde 1 hasta N, inclusive.
uno_de:
  - "Verdadero"
  - "Falso"
pasos:
  - "Definir un vector de tamaño N."
  - "Acceder al primer elemento con índice 1."
  - "Acceder al último elemento con índice N."
  - "Verificar que no se pueda acceder al índice 0 o N+1 sin error de lógica."
explicacion: PSeInt utiliza indexación basada en 1 por defecto para arreglos, a diferencia de lenguajes como C o Java que usan 0.
```

### 2 — Inicialización de matriz
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "inicializacion"]
respuesta: 1
tipo: completar
enunciado: Para declarar una matriz bidimensional de 5 filas y 3 columnas de tipo entero en PSeInt, se usa la sintaxis: Definir A como ____ con [5,3].
pasos:
  - "Identificar el tipo de dato requerido (entero)."
  - "Completar la palabra clave que define el tipo de dato en la declaración."
explicacion: La sintaxis correcta es 'Definir A como entero con [5,3]'.
```

### 3 — Búsqueda lineal en vector
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["busqueda", "lineal"]
opciones_explicitas:
  - "Recorrer el vector desde el índice 1 hasta el final hasta encontrar el valor."
  - "Dividir el vector a la mitad en cada paso."
  - "Ordenar el vector primero y luego buscar."
  - "Acceder directamente al índice calculado matemáticamente."
respuesta: "Recorrer el vector desde el índice 1 hasta el final hasta encontrar el valor."
tipo: mc
enunciado: ¿Cuál es la estrategia fundamental de una búsqueda lineal en un vector no ordenado en PSeInt?
pasos:
  - "Comparar el valor buscado con cada elemento secuencialmente."
  - "Detenerse al encontrar el primer coincidencia."
explicacion: La búsqueda lineal comprueba elemento por elemento sin asumir orden.
```

### 4 — Suma de diagonales de matriz
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "diagonal", "acceso"]
respuesta: i==j
tipo: completar
enunciado: Para acceder a los elementos de la diagonal principal de una matriz cuadrada A de N x N, la condición dentro del bucle doble es: si ____ entonces sumar A[i,j].
pasos:
  - "Reconocer que la diagonal principal tiene filas e índices iguales."
  - "Escribir la comparación lógica entre el índice de fila y columna."
explicacion: En matrices 1-indexed, la diagonal principal cumple que el índice de fila es igual al de columna.
```

### 5 — Transposición de matriz
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "transposicion"]
respuesta: B[j,i]
tipo: completar
enunciado: Al transponer una matriz A de N x M en una matriz B de M x N, la asignación correcta dentro de los bucles es: B[____] <- A[i,j].
pasos:
  - "Entender que la transposición intercambia filas por columnas."
  - "Invertir los índices de origen y destino."
explicacion: El elemento en la fila i, columna j de A pasa a la fila j, columna i de B.
```

### 6 — Declaración de vector de strings
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "string", "declaracion"]
respuesta: caracter
tipo: completar
enunciado: Para almacenar nombres de usuarios en un vector, se declara: Definir Nombres como ____ con [10].
pasos:
  - "Identificar el tipo de dato para texto en PSeInt."
  - "Completar la palabra clave correspondiente."
explicacion: En PSeInt, el tipo de dato para cadenas de texto es 'caracter'.
```

### 7 — Conteo de elementos pares
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "condicional", "par"]
respuesta: Mod(V[i],2)==0
tipo: completar
enunciado: Para contar cuántos elementos son pares en un vector V, la condición dentro del bucle es: Si ____ entonces Contar++.
pasos:
  - "Usar el operador módulo para verificar divisibilidad por 2."
  - "Escribir la expresión lógica completa."
explicacion: El resto de la división por 2 debe ser 0 para que un número sea par.
```

### 8 — Matriz identidad
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "identidad"]
respuesta: i==j
tipo: completar
enunciado: Para generar una matriz identidad de tamaño N, se asigna 1 a A[i,j] si ____ y 0 en caso contrario.
pasos:
  - "Recordar la definición de matriz identidad."
  - "Escribir la condición que verifica la diagonal principal."
explicacion: La matriz identidad tiene 1s en la diagonal principal (donde fila = columna) y 0s en el resto.
```

### 9 — Búsqueda binaria requisito
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["busqueda", "binaria", "requisito"]
respuesta: Ordenado
tipo: vf
enunciado: Para aplicar la búsqueda binaria en un vector en PSeInt, es necesario que el vector esté previamente ordenado.
uno_de:
  - "Verdadero"
  - "Falso"
pasos:
  - "Analizar el algoritmo de búsqueda binaria."
  - "Determinar si depende del orden de los elementos."
explicacion: La búsqueda binaria divide el espacio de búsqueda basándose en comparaciones que solo son válidas si los datos están ordenados.
```

### 10 — Suma de filas de matriz
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "suma", "filas"]
respuesta: j
tipo: completar
enunciado: Para calcular la suma de la fila i de una matriz A, el bucle interno recorre los índices: Para ____ <- 1 Hasta M Con Paso 1 Hacer SumaFila <- SumaFila + A[i,j].
pasos:
  - "Identificar qué índice varía dentro de una fila."
  - "Completar la variable de control del bucle interno."
explicacion: Al recorrer una fila, la columna (j) varía mientras la fila (i) se mantiene fija.
```

### 11 — Inicialización de vector a cero
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "inicializacion", "cero"]
respuesta: 0
tipo: completar
enunciado: Para asegurar que un vector V de tamaño N contenga inicialmente solo ceros, se usa el bucle: Para i <- 1 Hasta N Con Paso 1 Hacer V[i] <- ____.
pasos:
  - "Determinar el valor numérico neutro para sumas o el valor inicial común."
  - "Completar la asignación."
explicacion: Inicializar a 0 es la práctica estándar para vectores numéricos que se acumularán o procesarán.
```

### 12 — Acceso a elemento de matriz 3D
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "3d", "sintaxis"]
respuesta: A[i,j,k]
tipo: completar
enunciado: Para acceder al elemento en la dimensión i, j y k de una matriz tridimensional A, la sintaxis es: A[____].
pasos:
  - "Identificar la estructura de corchetes anidados o separados por comas."
  - "Escribir la sintaxis correcta de PSeInt."
explicacion: PSeInt utiliza corchetes con índices separados por comas para multidimensionales: A[i,j,k].
```

### 13 — Intercambio de elementos de vector
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "intercambio", "temp"]
respuesta: aux
tipo: completar
enunciado: Para intercambiar los valores de V[i] y V[j], se usa una variable temporal: aux <- V[i]; V[i] <- V[j]; V[j] <- ____.
pasos:
  - "Recordar el algoritmo estándar de intercambio."
  - "Completar la última asignación."
explicacion: El valor original de V[i] (guardado en aux) debe asignarse a V[j] para completar el intercambio.
```

### 14 — Matriz nula
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "nula"]
respuesta: 0
tipo: completar
enunciado: Una matriz nula es aquella donde todos sus elementos son iguales a ____.
pasos:
  - "Definir el concepto de matriz nula."
  - "Completar el valor numérico."
explicacion: Una matriz nula contiene exclusivamente ceros en todas sus posiciones.
```

### 15 — Recorrido de matriz en columna
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "columna", "bucle"]
respuesta: i
tipo: completar
enunciado: Para recorrer una matriz A de N x M por columnas (primero todas las filas de la col 1, luego col 2...), el bucle externo debe iterar sobre ____ y el interno sobre i.
pasos:
  - "Determinar qué índice cambia más lentamente para un recorrido por columnas."
  - "Completar la variable del bucle externo."
explicacion: Para recorrer por columnas, el índice de columna (j) es el bucle externo y el de fila (i) es el interno.
```

### 16 — Vector de booleanos
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "booleano", "tipo"]
respuesta: logico
tipo: completar
enunciado: Para declarar un vector que almacene estados de encendido/apagado (verdadero/falso), se usa: Definir Estados como ____ con [100].
pasos:
  - "Identificar el tipo de dato booleano en PSeInt."
  - "Completar la palabra clave."
explicacion: En PSeInt, el tipo de dato para valores booleanos es 'logico'.
```

### 17 — Encontrar el máximo en vector
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "maximo", "algoritmo"]
respuesta: V[i]
tipo: completar
enunciado: Al buscar el máximo en un vector V, si V[i] > Maximo, entonces se actualiza: Maximo <- ____.
pasos:
  - "Identificar la nueva candidata a máximo."
  - "Completar la asignación."
explicacion: Si el elemento actual es mayor que el máximo encontrado hasta ahora, se convierte en el nuevo máximo.
```

### 18 — Matriz de ceros con bucle
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "inicializacion", "bucle"]
respuesta: 0
tipo: completar
enunciado: Para inicializar una matriz A de N x M a ceros usando bucles anidados, la asignación dentro del bucle interno es: A[i,j] <- ____.
pasos:
  - "Determinar el valor de inicialización."
  - "Completar la asignación."
explicacion: El valor cero se asigna a cada posición individual de la matriz.
```

### 19 — Tamaño de vector dinámico
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "tamaño", "limitacion"]
respuesta: Falso
tipo: vf
enunciado: En PSeInt estándar, el tamaño de un vector debe ser una constante conocida en tiempo de diseño (declaración) y no puede cambiar dinámicamente durante la ejecución.
uno_de:
  - "Verdadero"
  - "Falso"
pasos:
  - "Analizar la naturaleza de los arreglos en PSeInt."
  - "Verificar si hay funciones de redimensionamiento dinámico."
explicacion: PSeInt no soporta arreglos dinámicos como en otros lenguajes; el tamaño se fija en la declaración.
```

### 20 — Suma de elementos de una matriz
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "suma", "acumulador"]
respuesta: 0
tipo: completar
enunciado: Antes de iniciar el bucle doble para sumar todos los elementos de una matriz A, se debe inicializar la variable acumuladora Total <- ____.
pasos:
  - "Identificar el elemento neutro para la suma."
  - "Completar el valor inicial."
explicacion: El acumulador debe comenzar en 0 para que la primera suma sea válida.
```

### 21 — Acceso a última columna de matriz
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "columna", "indice"]
respuesta: M
tipo: completar
enunciado: Para acceder a la última columna de una matriz A de N filas por M columnas, el índice de columna es siempre ____.
pasos:
  - "Identificar el límite superior del índice de columna."
  - "Completar el valor o variable."
explicacion: Si la matriz tiene M columnas, la última columna tiene índice M.
```

### 22 — Vector de caracteres vs String
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "string", "diferencia"]
respuesta: Verdadero
tipo: vf
enunciado: Un vector de tipo 'caracter' en PSeInt puede almacenar múltiples letras si se define con un tamaño mayor a 1, actuando como una cadena de caracteres, pero no es del tipo 'cadena' nativo.
uno_de:
  - "Verdadero"
  - "Falso"
pasos:
  - "Distinguir entre el tipo 'caracter' (array de chars) y 'cadena'."
  - "Verificar si un array de caracteres puede contener texto."
explicacion: PSeInt permite usar vectores de caracteres para simular strings, pero son tipos distintos.
```

### 23 — Contar ocurrencias en vector
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "conteo", "ocurrencia"]
respuesta: V[i]
tipo: completar
enunciado: Para contar cuántas veces aparece el valor 'Buscado' en el vector V, la condición es: Si V[i] == ____ entonces Contador++.
pasos:
  - "Identificar qué elemento se compara con el valor buscado."
  - "Completar la comparación."
explicacion: Se compara cada elemento del vector con el valor objetivo.
```

### 24 — Matriz diagonal
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["matriz", "diagonal", "condicion"]
respuesta: i==j o i+j==N+1
tipo: completar
enunciado: Para identificar si un elemento A[i,j] está en la diagonal principal O en la diagonal secundaria de una matriz N x N, la condición es: Si ____ entonces es diagonal.
pasos:
  - "Recordar las condiciones de ambas diagonales en matrices 1-indexed."
  - "Escribir la combinación lógica."
explicacion: La diagonal principal es i=j y la secundaria es i+j=N+1.
```

### 25 — Copia de vector
```
metadata:
  materia: "pseint"
  tema: "tablas-arreglos"
  nivel: "intermedio"
  tags: ["vector", "copia", "asignacion"]
respuesta: V[i]
tipo: completar
enunciado: Para copiar el contenido del vector A al vector B (ambos de tamaño N), la asignación dentro del bucle es: B[i] <- ____.
pasos:
  - "Identificar la fuente de la copia."
  - "Completar la asignación."
explicacion: Cada elemento de A se asigna al elemento correspondiente en B.
```