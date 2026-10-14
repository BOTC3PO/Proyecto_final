# PSeInt — Tablas y arreglos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Arreglo

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una estructura que guarda varios valores del mismo tipo bajo un nombre", "Una variable de texto", "Una constante", "Una función"]
respuesta: "Una estructura que guarda varios valores del mismo tipo bajo un nombre"

enunciado: "¿Qué es un arreglo?"

explicacion: |
  Cada valor se identifica con un índice.
```

### 2 — Para qué

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Para guardar muchos datos del mismo tipo sin crear una variable para cada uno", "Para dibujar", "Para sumar dos números", "Para comparar"]
respuesta: "Para guardar muchos datos del mismo tipo sin crear una variable para cada uno"

enunciado: "¿Para qué sirve un arreglo?"

explicacion: |
  Por ejemplo, 30 notas.
```

### 3 — Dimension

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["dimension"]

tipo: mc
opciones_explicitas: ["Reserva espacio para 5 elementos", "Suma 5", "Lee 5 datos", "Muestra 5 datos"]
respuesta: "Reserva espacio para 5 elementos"

enunciado: "¿Qué hace `Dimension notas[5]`?"

explicacion: |
  Define el tamaño del arreglo.
```

### 4 — Índice

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["indice"]

tipo: mc
opciones_explicitas: ["`notas[3]`", "`notas(3)`", "`notas.3`", "`notas{{3}}`"]
respuesta: "`notas[3]`"

enunciado: "¿Cómo se accede al tercer elemento de `notas`?"

explicacion: |
  Con corchetes.
```

### 5 — Primer índice

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["indice"]

tipo: mc
opciones_explicitas: ["1", "0", "-1", "Depende del dato"]
respuesta: "1"

enunciado: "¿Cuál es el primer índice de un arreglo en PSeInt (configuración por defecto)?"

explicacion: |
  En muchos lenguajes reales es 0.
```

### 6 — Fuera de rango

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["Es un error: está fuera del rango", "Devuelve 0", "Crea un elemento nuevo", "Ignora la instrucción"]
respuesta: "Es un error: está fuera del rango"

enunciado: "En un arreglo de 5 elementos, ¿qué pasa al usar `notas[6]`?"

explicacion: |
  Hay que respetar los límites.
```

### 7 — Recorrer

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["recorrer"]

tipo: mc
opciones_explicitas: ["`Para`", "`Segun`", "`Si`", "`Leer`"]
respuesta: "`Para`"

enunciado: "¿Qué estructura se usa normalmente para recorrer un arreglo?"

explicacion: |
  El índice es la variable del `Para`.
```

### 8 — Suma

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["suma"]

tipo: mc
opciones_explicitas: ["Inicializar el acumulador: `suma <- 0`", "Nada", "Un `Si`", "Un `Segun`"]
respuesta: "Inicializar el acumulador: `suma <- 0`"

enunciado: "¿Qué se necesita antes del bucle que suma los elementos?"

explicacion: |
  Si no, el resultado es incorrecto.
```

### 9 — Promedio

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["promedio"]

tipo: mc
opciones_explicitas: ["`suma / 5`", "`suma * 5`", "`suma - 5`", "`suma + 5`"]
respuesta: "`suma / 5`"

enunciado: "Con `suma` y 5 elementos, ¿cómo se calcula el promedio?"

explicacion: |
  Promedio = suma de valores / cantidad.
```

### 10 — Máximo

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["maximo"]

tipo: mc
opciones_explicitas: ["Con el primer elemento del arreglo", "Con 0 siempre", "Con el último", "Con -1"]
respuesta: "Con el primer elemento del arreglo"

enunciado: "Para hallar el máximo, ¿con qué valor se suele empezar?"

explicacion: |
  Si hubiera negativos, empezar en 0 daría un resultado incorrecto.
```

### 11 — Desde 2

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["maximo"]

tipo: mc
opciones_explicitas: ["Porque el primer elemento ya se tomó como el mayor inicial", "Porque 1 no existe", "Por un error", "Por estética"]
respuesta: "Porque el primer elemento ya se tomó como el mayor inicial"

enunciado: "En el recorrido del máximo, ¿por qué el `Para` empieza en 2?"

explicacion: |
  Compara desde el segundo.
```

### 12 — Búsqueda

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["busqueda"]

tipo: mc
opciones_explicitas: ["Recorre elemento por elemento hasta encontrar el buscado", "Divide el arreglo", "Ordena", "Suma los elementos"]
respuesta: "Recorre elemento por elemento hasta encontrar el buscado"

enunciado: "¿Cómo funciona la búsqueda lineal?"

explicacion: |
  Con una bandera se sabe si se encontró.
```

### 13 — Bandera

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["bandera"]

tipo: mc
opciones_explicitas: ["Para saber si el elemento se encontró", "Para sumar", "Para ordenar", "Para borrar"]
respuesta: "Para saber si el elemento se encontró"

enunciado: "¿Para qué sirve la bandera en una búsqueda?"

explicacion: |
  Se pone en `Verdadero` al encontrarlo.
```

### 14 — Intercambio

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["intercambio"]

tipo: mc
opciones_explicitas: ["Una variable auxiliar", "Un `Segun`", "Un `Mientras`", "Dos arreglos"]
respuesta: "Una variable auxiliar"

enunciado: "¿Qué se necesita para intercambiar dos valores?"

explicacion: |
  Sin auxiliar se pierde uno de los valores.
```

### 15 — Burbuja

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["burbuja"]

tipo: mc
opciones_explicitas: ["Compara pares vecinos e intercambia si están desordenados", "Divide por mitades", "Suma", "Busca el máximo"]
respuesta: "Compara pares vecinos e intercambia si están desordenados"

enunciado: "¿Qué hace el ordenamiento burbuja?"

explicacion: |
  Se repite hasta que no hay cambios.
```

### 16 — Matriz

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["matriz"]

tipo: mc
opciones_explicitas: ["Una tabla con filas y columnas", "Una lista simple", "Un texto", "Una constante"]
respuesta: "Una tabla con filas y columnas"

enunciado: "¿Qué es una matriz?"

explicacion: |
  Se declara con dos dimensiones.
```

### 17 — Declaración

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "basico"
  tags: ["matriz"]

tipo: mc
opciones_explicitas: ["Una tabla de 3 filas y 4 columnas", "Una tabla de 4 filas y 3 columnas", "Una lista de 7", "Dos listas"]
respuesta: "Una tabla de 3 filas y 4 columnas"

enunciado: "¿Qué crea `Dimension tabla[3, 4]`?"

explicacion: |
  Primero filas, luego columnas.
```

### 18 — Recorrer matriz

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["matriz"]

tipo: mc
opciones_explicitas: ["Con dos `Para` anidados", "Con un `Si`", "Con un `Segun`", "No se puede"]
respuesta: "Con dos `Para` anidados"

enunciado: "¿Cómo se recorre una matriz?"

explicacion: |
  Uno para filas y otro para columnas.
```

### 19 — Constante

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "intermedio"
  tags: ["constante"]

tipo: mc
opciones_explicitas: ["Para cambiarlo en un solo lugar", "Porque ocupa menos", "Porque es obligatorio", "Porque es más rápido"]
respuesta: "Para cambiarlo en un solo lugar"

enunciado: "¿Por qué conviene usar una constante para el tamaño del arreglo?"

explicacion: |
  Evita errores de tamaños distintos.
```

### 20 — Paralelos

```
metadata:
  materia: "pseint"
  tema: "tablas_arreglos"
  nivel: "avanzado"
  tags: ["paralelos"]

tipo: mc
opciones_explicitas: ["Que se desincronicen", "Que no se puedan usar", "Que ocupen poco", "Que sean lentos"]
respuesta: "Que se desincronicen"

enunciado: "¿Qué riesgo tienen los arreglos paralelos (nombres y notas)?"

explicacion: |
  Hay que mantenerlos alineados.
```

