# PSeInt — Sintaxis y pseudocódigo (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Un programa para aprender a programar escribiendo pseudocódigo", "Un navegador", "Un juego", "Un sistema operativo"]
respuesta: "Un programa para aprender a programar escribiendo pseudocódigo"

enunciado: "¿Qué es PSeInt?"

explicacion: |
  Es gratuito y en español.
```

### 2 — Pseudocódigo

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["pseudocodigo"]

tipo: mc
opciones_explicitas: ["Una descripción de un algoritmo con palabras claras, sin las reglas estrictas de un lenguaje real", "Un lenguaje de máquina", "Un tipo de imagen", "Un virus"]
respuesta: "Una descripción de un algoritmo con palabras claras, sin las reglas estrictas de un lenguaje real"

enunciado: "¿Qué es el pseudocódigo?"

explicacion: |
  Sirve para pensar la lógica antes de programar.
```

### 3 — Inicio y fin

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["estructura"]

tipo: mc
opciones_explicitas: ["Con `Algoritmo nombre` y `FinAlgoritmo`", "Con `Inicio` y `Fin`", "Con `{{` y `}}`", "Con `Start` y `End`"]
respuesta: "Con `Algoritmo nombre` y `FinAlgoritmo`"

enunciado: "¿Cómo empieza y termina un algoritmo en PSeInt?"

explicacion: |
  También se admite `Proceso` y `FinProceso`.
```

### 4 — Comentario

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["comentarios"]

tipo: mc
opciones_explicitas: ["Con `//` al comienzo", "Con `#`", "Con `--`", "Con `!!`"]
respuesta: "Con `//` al comienzo"

enunciado: "¿Cómo se escribe un comentario?"

explicacion: |
  Los comentarios no se ejecutan.
```

### 5 — Escribir

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["escribir"]

tipo: mc
opciones_explicitas: ["Muestra texto o valores en pantalla", "Pide un dato", "Borra la pantalla", "Guarda un archivo"]
respuesta: "Muestra texto o valores en pantalla"

enunciado: "¿Qué hace `Escribir`?"

explicacion: |
  El texto va entre comillas.
```

### 6 — Leer

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["leer"]

tipo: mc
opciones_explicitas: ["Pide un dato al usuario y lo guarda en `a`", "Muestra `a`", "Suma `a`", "Borra `a`"]
respuesta: "Pide un dato al usuario y lo guarda en `a`"

enunciado: "¿Qué hace `Leer a`?"

explicacion: |
  Conviene mostrar antes un mensaje.
```

### 7 — Asignar

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["asignacion"]

tipo: mc
opciones_explicitas: ["`total <- 10`", "`10 <- total`", "`total == 10`", "`total => 10`"]
respuesta: "`total <- 10`"

enunciado: "¿Cómo se asigna el valor 10 a `total`?"

explicacion: |
  La flecha apunta a la variable que recibe.
```

### 8 — Comparar

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["igual"]

tipo: mc
opciones_explicitas: ["Compara si dos valores son iguales", "Asigna", "Suma", "Divide"]
respuesta: "Compara si dos valores son iguales"

enunciado: "En PSeInt, ¿qué hace `=` dentro de una condición?"

explicacion: |
  La asignación es `<-`.
```

### 9 — Distinto

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["distinto"]

tipo: mc
opciones_explicitas: ["`<>`", "`!==`", "`><`", "`=/`"]
respuesta: "`<>`"

enunciado: "¿Cuál es el operador \"distinto de\" en PSeInt?"

explicacion: |
  Es el operador de desigualdad del pseudocódigo de PSeInt.
```

### 10 — Resto

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["mod"]

tipo: mc
opciones_explicitas: ["`%` o `MOD`", "`/`", "`^`", "`&`"]
respuesta: "`%` o `MOD`"

enunciado: "¿Qué operador da el resto de una división?"

explicacion: |
  Por ejemplo, `7 MOD 2` da 1.
```

### 11 — Potencia

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["potencia"]

tipo: mc
opciones_explicitas: ["Da 8", "Da 6", "Da 5", "Da 9"]
respuesta: "Da 8"

enunciado: "¿Qué hace `2 ^ 3`?"

explicacion: |
  El operador `^` es la potencia.
```

### 12 — Lógicos

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["Que deben cumplirse ambas condiciones", "Que basta una", "Que no se cumple ninguna", "Que se invierte"]
respuesta: "Que deben cumplirse ambas condiciones"

enunciado: "¿Qué significa `Y` en una condición?"

explicacion: |
  También se escribe `&`.
```

### 13 — Negación

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["Invierte el valor lógico", "Suma", "Compara", "Borra"]
respuesta: "Invierte el valor lógico"

enunciado: "¿Qué hace `NO`?"

explicacion: |
  También se escribe `~`.
```

### 14 — Precedencia

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["14", "20", "24", "9"]
respuesta: "14"

enunciado: "¿Cuánto da `2 + 3 * 4`?"

explicacion: |
  La multiplicación se hace antes que la suma.
```

### 15 — Raíz

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["raiz"]

tipo: mc
opciones_explicitas: ["Da 4", "Da 8", "Da 256", "Da 2"]
respuesta: "Da 4"

enunciado: "¿Qué hace `RAIZ(16)`?"

explicacion: |
  Es la raíz cuadrada.
```

### 16 — Entero

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "intermedio"
  tags: ["trunc"]

tipo: mc
opciones_explicitas: ["Da 7, descarta los decimales", "Da 8", "Da 7.8", "Da 0"]
respuesta: "Da 7, descarta los decimales"

enunciado: "¿Qué hace `TRUNC(7.8)`?"

explicacion: |
  `REDON(7.8)` da 8.
```

### 17 — Redondeo

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "intermedio"
  tags: ["redon"]

tipo: mc
opciones_explicitas: ["Da 8, redondea al entero más cercano", "Da 7", "Da 7.8", "Da 78"]
respuesta: "Da 8, redondea al entero más cercano"

enunciado: "¿Qué hace `REDON(7.8)`?"

explicacion: |
  `TRUNC` descarta sin redondear.
```

### 18 — Azar

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "intermedio"
  tags: ["azar"]

tipo: mc
opciones_explicitas: ["Un número entre 0 y 5", "Un número entre 1 y 6", "Siempre 6", "Un número negativo"]
respuesta: "Un número entre 0 y 5"

enunciado: "¿Qué devuelve `AZAR(6)`?"

explicacion: |
  Para un dado se usa `AZAR(6) + 1`.
```

### 19 — Longitud

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["longitud"]

tipo: mc
opciones_explicitas: ["4", "3", "5", "0"]
respuesta: "4"

enunciado: "¿Qué da `LONGITUD(\"hola\")`?"

explicacion: |
  Cuenta los caracteres.
```

### 20 — Nombres

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["`precio`", "`x`", "`z1`", "`aaaa`"]
respuesta: "`precio`"

enunciado: "¿Qué nombre de variable es más claro?"

explicacion: |
  Los nombres deben decir qué guardan.
```

### 21 — Prueba de escritorio

```
metadata:
  materia: "pseint"
  tema: "sintaxis_y_pseudocodigo"
  nivel: "intermedio"
  tags: ["prueba"]

tipo: mc
opciones_explicitas: ["Seguir el algoritmo a mano con datos sencillos para ver qué hace", "Imprimir el código", "Ejecutarlo sin leerlo", "Borrar variables"]
respuesta: "Seguir el algoritmo a mano con datos sencillos para ver qué hace"

enunciado: "¿Qué es una prueba de escritorio?"

explicacion: |
  Detecta errores de lógica.
```

