# PSeInt — Estructuras de control (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Estructuras

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["estructuras"]

tipo: mc
opciones_explicitas: ["Secuencia, selección y repetición", "Entrada, proceso y salida", "Variable, constante y función", "Principio, medio y fin"]
respuesta: "Secuencia, selección y repetición"

enunciado: "¿Cuáles son las tres formas básicas de ejecución de un algoritmo?"

explicacion: |
  Todo algoritmo se compone de estas tres.
```

### 2 — Selección

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["seleccion"]

tipo: mc
opciones_explicitas: ["Elige un camino según una condición", "Repite un bloque", "Declara variables", "Muestra un mensaje"]
respuesta: "Elige un camino según una condición"

enunciado: "¿Qué hace una estructura de selección?"

explicacion: |
  Por ejemplo, `Si ... Entonces`.
```

### 3 — Si

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["si"]

tipo: mc
opciones_explicitas: ["El bloque del `SiNo`", "El bloque del `Entonces`", "Nada", "Ambos"]
respuesta: "El bloque del `SiNo`"

enunciado: "¿Qué se ejecuta si la condición de un `Si` es falsa y hay `SiNo`?"

explicacion: |
  Solo uno de los dos.
```

### 4 — Fin

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["si"]

tipo: mc
opciones_explicitas: ["`FinSi`", "`Fin`", "`EndIf`", "`}}`"]
respuesta: "`FinSi`"

enunciado: "¿Con qué se cierra un `Si`?"

explicacion: |
  Cada estructura se cierra con su `Fin`.
```

### 5 — Condición doble

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["condiciones"]

tipo: mc
opciones_explicitas: ["`nota >= 6 Y nota <= 10`", "`6 <= nota <= 10`", "`nota entre 6 y 10`", "`nota = 6..10`"]
respuesta: "`nota >= 6 Y nota <= 10`"

enunciado: "¿Cómo se escribe correctamente \"nota entre 6 y 10\"?"

explicacion: |
  Cada comparación se escribe por separado.
```

### 6 — Anidar

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["anidar"]

tipo: mc
opciones_explicitas: ["Poner un `Si` dentro de otro", "Repetir un `Si`", "Borrar un `Si`", "Cambiar su nombre"]
respuesta: "Poner un `Si` dentro de otro"

enunciado: "¿Qué es anidar `Si`?"

explicacion: |
  Permite distinguir más de dos casos.
```

### 7 — Segun

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["segun"]

tipo: mc
opciones_explicitas: ["Cuando se compara una variable con varios valores posibles", "Cuando se repite algo", "Para leer datos", "Para declarar variables"]
respuesta: "Cuando se compara una variable con varios valores posibles"

enunciado: "¿Cuándo conviene usar `Segun`?"

explicacion: |
  Es una selección múltiple.
```

### 8 — De otro modo

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["segun"]

tipo: mc
opciones_explicitas: ["Cubre los casos que no coinciden con ninguno de los anteriores", "Termina el programa", "Repite el `Segun`", "No hace nada"]
respuesta: "Cubre los casos que no coinciden con ninguno de los anteriores"

enunciado: "¿Qué hace `De Otro Modo` en un `Segun`?"

explicacion: |
  Es útil para opciones inválidas.
```

### 9 — Para

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["para"]

tipo: mc
opciones_explicitas: ["Cuando se sabe cuántas veces repetir", "Cuando no se sabe cuántas veces", "Para decidir", "Para leer"]
respuesta: "Cuando se sabe cuántas veces repetir"

enunciado: "¿Cuándo se usa `Para`?"

explicacion: |
  Se indican inicio, fin y paso.
```

### 10 — Para cuántas

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["para"]

tipo: mc
opciones_explicitas: ["5", "4", "6", "1"]
respuesta: "5"

enunciado: "¿Cuántas veces se ejecuta `Para i <- 1 Hasta 5 Con Paso 1 Hacer`?"

explicacion: |
  i vale 1, 2, 3, 4 y 5.
```

### 11 — Paso negativo

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["para"]

tipo: mc
opciones_explicitas: ["Cuenta hacia abajo", "Cuenta hacia arriba", "No repite", "Da error"]
respuesta: "Cuenta hacia abajo"

enunciado: "¿Qué hace `Con Paso -1` en un `Para`?"

explicacion: |
  Por ejemplo, de 10 a 1.
```

### 12 — Mientras

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["mientras"]

tipo: mc
opciones_explicitas: ["Cero o más veces", "Siempre al menos una", "Exactamente una", "Nunca"]
respuesta: "Cero o más veces"

enunciado: "¿Cuántas veces puede ejecutarse un `Mientras`?"

explicacion: |
  Comprueba la condición antes.
```

### 13 — Repetir

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["repetir"]

tipo: mc
opciones_explicitas: ["Una", "Cero", "Dos", "Ninguna"]
respuesta: "Una"

enunciado: "¿Cuántas veces se ejecuta como mínimo un `Repetir ... Hasta Que`?"

explicacion: |
  Comprueba la condición al final.
```

### 14 — Hasta que

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["repetir"]

tipo: mc
opciones_explicitas: ["Cuando `n > 0` es verdadero", "Cuando `n > 0` es falso", "Nunca", "Después de 10 veces"]
respuesta: "Cuando `n > 0` es verdadero"

enunciado: "¿Cuándo sale un `Repetir ... Hasta Que n > 0`?"

explicacion: |
  Es el opuesto de `Mientras`.
```

### 15 — Validación

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["`Repetir ... Hasta Que`", "`Segun`", "`Para`", "`Si` sin `SiNo`"]
respuesta: "`Repetir ... Hasta Que`"

enunciado: "¿Qué estructura es ideal para pedir un dato hasta que sea válido?"

explicacion: |
  Se pide al menos una vez.
```

### 16 — Infinito

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Una condición que nunca cambia a falsa", "Usar `Para`", "Usar `Si`", "Declarar variables"]
respuesta: "Una condición que nunca cambia a falsa"

enunciado: "¿Qué causa un bucle infinito?"

explicacion: |
  Por ejemplo, olvidar actualizar la variable.
```

### 17 — Acumulador

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["acumulador"]

tipo: mc
opciones_explicitas: ["Inicializarlo, por ejemplo `total <- 0`", "Borrarlo", "Dejarlo sin valor", "Duplicarlo"]
respuesta: "Inicializarlo, por ejemplo `total <- 0`"

enunciado: "¿Qué conviene hacer con el acumulador antes del bucle?"

explicacion: |
  Si no, el resultado es incorrecto.
```

### 18 — Mayor

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["mayor"]

tipo: mc
opciones_explicitas: ["El mayor visto hasta el momento", "La suma", "El menor", "La cantidad"]
respuesta: "El mayor visto hasta el momento"

enunciado: "Para hallar el mayor de una lista, ¿qué se guarda?"

explicacion: |
  Se actualiza cuando aparece uno mayor.
```

### 19 — Fin faltante

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Olvidar el `FinSi`, `FinPara` o `FinMientras`", "Escribir comentarios", "Usar mayúsculas", "Usar variables"]
respuesta: "Olvidar el `FinSi`, `FinPara` o `FinMientras`"

enunciado: "¿Qué error es común en estructuras?"

explicacion: |
  PSeInt lo marca al verificar.
```

### 20 — Límites

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Repetir una vez de más o de menos por mal elegir los límites", "Un error de ortografía", "Un error de tipo", "Un error del programa"]
respuesta: "Repetir una vez de más o de menos por mal elegir los límites"

enunciado: "¿Qué es el error \"por uno\"?"

explicacion: |
  Por ejemplo, `0 Hasta n` en lugar de `1 Hasta n`.
```

### 21 — Menú

```
metadata:
  materia: "pseint"
  tema: "estructuras_de_control"
  nivel: "intermedio"
  tags: ["menu"]

tipo: mc
opciones_explicitas: ["Un `Segun` dentro de un `Repetir`", "Un `Para` solo", "Un `Si` sin `SiNo`", "Un `Leer` solo"]
respuesta: "Un `Segun` dentro de un `Repetir`"

enunciado: "¿Cómo se arma un menú de opciones repetido?"

explicacion: |
  Se repite hasta que el usuario elige salir.
```

