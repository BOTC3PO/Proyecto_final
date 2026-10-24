# PSeInt — Funciones y subprocesos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para agrupar una tarea con nombre y reutilizarla", "Para decorar", "Para borrar variables", "Para leer teclas"]
respuesta: "Para agrupar una tarea con nombre y reutilizarla"

enunciado: "¿Para qué sirve una función?"

explicacion: |
  Evita repetir código.
```

### 2 — Ventajas

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["ventajas"]

tipo: mc
opciones_explicitas: ["Facilita la lectura y las pruebas", "Complica el programa", "Duplica el código", "Hace falta más memoria siempre"]
respuesta: "Facilita la lectura y las pruebas"

enunciado: "¿Cuál es una ventaja de dividir un programa en funciones?"

explicacion: |
  Cada parte es más pequeña.
```

### 3 — Funcion

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["funcion"]

tipo: mc
opciones_explicitas: ["Devuelve un valor", "No devuelve nada", "Borra variables", "Solo muestra texto"]
respuesta: "Devuelve un valor"

enunciado: "¿Qué hace una `Funcion` en PSeInt?"

explicacion: |
  Se usa dentro de una expresión.
```

### 4 — Subproceso

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["subproceso"]

tipo: mc
opciones_explicitas: ["No devuelve valor, realiza una acción", "Devuelve siempre un número", "No tiene nombre", "No recibe datos"]
respuesta: "No devuelve valor, realiza una acción"

enunciado: "¿Qué diferencia tiene un `SubProceso`?"

explicacion: |
  Por ejemplo, mostrar un menú.
```

### 5 — Retorno

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["retorno"]

tipo: mc
opciones_explicitas: ["Asignándolo a la variable `resultado`", "Con `Retornar`", "Con `Escribir`", "Con `Leer`"]
respuesta: "Asignándolo a la variable `resultado`"

enunciado: "En `Funcion resultado <- cuadrado(n)`, ¿cómo se devuelve el valor?"

explicacion: |
  Esa variable contiene el valor que se devuelve.
```

### 6 — Cuadrado

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["ejemplo"]

tipo: mc
opciones_explicitas: ["25", "10", "5", "55"]
respuesta: "25"

enunciado: "¿Qué muestra `Escribir cuadrado(5)` si `cuadrado` devuelve `n * n`?"

explicacion: |
  5 × 5 = 25.
```

### 7 — Llamada

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["llamada"]

tipo: mc
opciones_explicitas: ["Como una instrucción: `saludar(\"Ana\")`", "Dentro de una suma", "Con `Leer`", "No se puede llamar"]
respuesta: "Como una instrucción: `saludar(\"Ana\")`"

enunciado: "¿Cómo se llama a un `SubProceso`?"

explicacion: |
  No devuelve valor.
```

### 8 — Parámetros

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["parametros"]

tipo: mc
opciones_explicitas: ["Los datos que recibe la función entre paréntesis", "Los comentarios", "Las constantes", "Los errores"]
respuesta: "Los datos que recibe la función entre paréntesis"

enunciado: "¿Qué son los parámetros?"

explicacion: |
  Permiten reutilizarla con distintos valores.
```

### 9 — Locales

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["locales"]

tipo: mc
opciones_explicitas: ["Solo dentro de ella", "En todo el programa", "En el archivo", "En otro programa"]
respuesta: "Solo dentro de ella"

enunciado: "¿Dónde existe una variable definida dentro de una función?"

explicacion: |
  Se llama variable local.
```

### 10 — Por valor

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["valor"]

tipo: mc
opciones_explicitas: ["No cambia: la función trabaja con una copia", "Cambia", "Se borra", "Da error"]
respuesta: "No cambia: la función trabaja con una copia"

enunciado: "Si un parámetro se pasa por valor y la función lo modifica, ¿qué pasa con el original?"

explicacion: |
  Es el comportamiento por defecto.
```

### 11 — Por referencia

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["referencia"]

tipo: mc
opciones_explicitas: ["Que la función modifique el original", "Que sea más corto", "Que no se pueda usar", "Que se ejecute dos veces"]
respuesta: "Que la función modifique el original"

enunciado: "¿Qué permite pasar un parámetro por referencia?"

explicacion: |
  Útil para devolver varios resultados.
```

### 12 — Arreglos

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "avanzado"
  tags: ["arreglos"]

tipo: mc
opciones_explicitas: ["Por referencia", "Por valor siempre", "No se pasan", "Como texto"]
respuesta: "Por referencia"

enunciado: "¿Cómo se pasan los arreglos a una función?"

explicacion: |
  Se trabaja sobre el arreglo original.
```

### 13 — Es par

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["ejemplo"]

tipo: mc
opciones_explicitas: ["`Verdadero`", "`Falso`", "4", "0"]
respuesta: "`Verdadero`"

enunciado: "¿Qué devuelve `esPar(4)` con `r <- (n MOD 2 = 0)`?"

explicacion: |
  4 MOD 2 es 0.
```

### 14 — Mayor

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["ejemplo"]

tipo: mc
opciones_explicitas: ["9", "3", "12", "6"]
respuesta: "9"

enunciado: "¿Qué devuelve `mayorDe(3, 9)`?"

explicacion: |
  Devuelve el mayor de los dos.
```

### 15 — Una tarea

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Cada función debe hacer una sola cosa bien definida", "Debe haber una sola función", "Debe ser corta siempre", "No puede tener parámetros"]
respuesta: "Cada función debe hacer una sola cosa bien definida"

enunciado: "¿Qué significa \"una función, una tarea\"?"

explicacion: |
  Facilita probar y reutilizar.
```

### 16 — Nombres

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["`calcularPromedio`", "`f1`", "`x`", "`cosa`"]
respuesta: "`calcularPromedio`"

enunciado: "¿Qué nombre de función es más claro?"

explicacion: |
  El nombre dice qué hace.
```

### 17 — Mostrar y calcular

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["diseno"]

tipo: mc
opciones_explicitas: ["Porque se puede reutilizar y probar el cálculo sin mostrar nada", "Porque lo pide PSeInt", "Para escribir más", "No conviene"]
respuesta: "Porque se puede reutilizar y probar el cálculo sin mostrar nada"

enunciado: "¿Por qué conviene separar el cálculo de la impresión?"

explicacion: |
  Una función que calcula devuelve el valor.
```

### 18 — Retorno olvidado

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "intermedio"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["La función devuelve un valor indefinido o incorrecto", "Nada", "Devuelve el parámetro", "Se borra"]
respuesta: "La función devuelve un valor indefinido o incorrecto"

enunciado: "¿Qué ocurre si no se asigna el valor de retorno?"

explicacion: |
  Es un error frecuente.
```

### 19 — Cantidad

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Es un error", "Funciona igual", "Se usan valores al azar", "Se ignora"]
respuesta: "Es un error"

enunciado: "¿Qué ocurre si se llama a una función con otra cantidad de parámetros?"

explicacion: |
  Debe coincidir con la definición.
```

### 20 — Recursión

```
metadata:
  materia: "pseint"
  tema: "funciones"
  nivel: "avanzado"
  tags: ["recursion"]

tipo: mc
opciones_explicitas: ["Un caso base que termine las llamadas", "Más parámetros", "Un comentario", "Un arreglo"]
respuesta: "Un caso base que termine las llamadas"

enunciado: "¿Qué necesita una función recursiva para no repetirse sin fin?"

explicacion: |
  Es la condición de salida.
```

