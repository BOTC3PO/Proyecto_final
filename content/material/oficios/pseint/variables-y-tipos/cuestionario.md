# PSeInt — Variables y tipos (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Variable

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Un espacio de memoria con nombre donde se guarda un dato que puede cambiar", "Un número fijo", "Un texto en la pantalla", "Una instrucción"]
respuesta: "Un espacio de memoria con nombre donde se guarda un dato que puede cambiar"

enunciado: "¿Qué es una variable?"

explicacion: |
  Tiene nombre, tipo y valor.
```

### 2 — Nombre válido

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["`precio_unitario`", "`precio unitario`", "`2precio`", "`Si`"]
respuesta: "`precio_unitario`"

enunciado: "¿Cuál es un nombre de variable válido?"

explicacion: |
  No se permiten espacios, comenzar con número ni usar palabras reservadas.
```

### 3 — Tipo entero

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["entero"]

tipo: mc
opciones_explicitas: ["Números sin decimales", "Texto", "Números con decimales", "Verdadero o falso"]
respuesta: "Números sin decimales"

enunciado: "¿Qué guarda una variable de tipo `Entero`?"

explicacion: |
  Por ejemplo, `5` o `-12`.
```

### 4 — Tipo real

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["real"]

tipo: mc
opciones_explicitas: ["Números con decimales", "Solo enteros", "Texto", "Fechas"]
respuesta: "Números con decimales"

enunciado: "¿Qué guarda una variable `Real`?"

explicacion: |
  El separador decimal es el punto.
```

### 5 — Tipo texto

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["caracter"]

tipo: mc
opciones_explicitas: ["`Caracter` (cadena de texto)", "`Entero`", "`Real`", "`Logico`"]
respuesta: "`Caracter` (cadena de texto)"

enunciado: "¿Qué tipo se usa para guardar un nombre como \"Ana\"?"

explicacion: |
  El texto va entre comillas.
```

### 6 — Lógico

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["logico"]

tipo: mc
opciones_explicitas: ["`Verdadero` o `Falso`", "Cualquier número", "Cualquier texto", "Solo cero"]
respuesta: "`Verdadero` o `Falso`"

enunciado: "¿Qué valores puede tener una variable `Logico`?"

explicacion: |
  Se usa para condiciones.
```

### 7 — Decimal

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["decimal"]

tipo: mc
opciones_explicitas: ["`3.5`", "`3,5`", "`\"3,5\"`", "`3;5`"]
respuesta: "`3.5`"

enunciado: "¿Cómo se escribe el número 3,5 en PSeInt?"

explicacion: |
  El separador decimal es el punto.
```

### 8 — Texto o número

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["`5` es un número; `\"5\"` es un texto", "Ninguna", "`5` es un texto", "Ambos son enteros"]
respuesta: "`5` es un número; `\"5\"` es un texto"

enunciado: "¿Qué diferencia hay entre `5` y `\"5\"`?"

explicacion: |
  No se pueden sumar como números.
```

### 9 — Definir

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["definir"]

tipo: mc
opciones_explicitas: ["Para declarar el tipo de la variable", "Para asignarle un valor", "Para imprimirla", "Para borrarla"]
respuesta: "Para declarar el tipo de la variable"

enunciado: "¿Para qué sirve `Definir edad Como Entero`?"

explicacion: |
  Es la buena práctica.
```

### 10 — Varias

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["definir"]

tipo: mc
opciones_explicitas: ["`Definir a, b, c Como Entero`", "`Definir a b c Entero`", "`Entero a, b, c`", "`Definir a-b-c`"]
respuesta: "`Definir a, b, c Como Entero`"

enunciado: "¿Cómo se declaran tres enteros en una línea?"

explicacion: |
  Se separan con comas.
```

### 11 — Declarar

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["definir"]

tipo: mc
opciones_explicitas: ["Para evitar ambigüedades y detectar errores", "Porque es más lento", "Porque lo exige la ley", "Por estética"]
respuesta: "Para evitar ambigüedades y detectar errores"

enunciado: "¿Por qué conviene declarar las variables?"

explicacion: |
  El programa conoce el tipo desde el inicio.
```

### 12 — Constante

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["constante"]

tipo: mc
opciones_explicitas: ["Un valor que no cambia", "Una variable que cambia seguido", "Una instrucción", "Un error"]
respuesta: "Un valor que no cambia"

enunciado: "¿Qué es una constante?"

explicacion: |
  Por ejemplo, la tasa del IVA.
```

### 13 — Número mágico

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "intermedio"
  tags: ["constante"]

tipo: mc
opciones_explicitas: ["Para que si cambia se modifique en un solo lugar", "Porque ocupa menos", "Porque es obligatorio", "Porque es más lento"]
respuesta: "Para que si cambia se modifique en un solo lugar"

enunciado: "¿Por qué conviene guardar el IVA en una variable con nombre y no repetir el número?"

explicacion: |
  Los números sueltos se llaman "números mágicos".
```

### 14 — Contador

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["contador"]

tipo: mc
opciones_explicitas: ["Aumenta la variable en uno", "La reinicia", "La borra", "La invierte"]
respuesta: "Aumenta la variable en uno"

enunciado: "¿Qué hace `i <- i + 1`?"

explicacion: |
  Se usa como contador.
```

### 15 — Acumulador

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["acumulador"]

tipo: mc
opciones_explicitas: ["Acumula el precio en el total", "Reinicia el total", "Compara", "Muestra el total"]
respuesta: "Acumula el precio en el total"

enunciado: "¿Qué hace `total <- total + precio`?"

explicacion: |
  Es un acumulador.
```

### 16 — Inicializar

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["inicializar"]

tipo: mc
opciones_explicitas: ["Darle un valor de partida, como `total <- 0`", "Nada", "Un nombre más largo", "Un comentario"]
respuesta: "Darle un valor de partida, como `total <- 0`"

enunciado: "¿Qué falta en un acumulador que se usa sin valor inicial?"

explicacion: |
  Si no se inicializa, el resultado puede ser incorrecto.
```

### 17 — Bandera

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "intermedio"
  tags: ["bandera"]

tipo: mc
opciones_explicitas: ["Una variable lógica que indica si ocurrió algo", "Un número", "Un texto", "Una constante"]
respuesta: "Una variable lógica que indica si ocurrió algo"

enunciado: "¿Qué es una bandera (flag)?"

explicacion: |
  Por ejemplo, `encontrado <- Verdadero`.
```

### 18 — División

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["division"]

tipo: mc
opciones_explicitas: ["3.5", "3", "4", "2"]
respuesta: "3.5"

enunciado: "En PSeInt, ¿cuánto da `7 / 2`?"

explicacion: |
  La división da un número real.
```

### 19 — Conversión

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "intermedio"
  tags: ["conversion"]

tipo: mc
opciones_explicitas: ["Convierte el texto \"12\" en el número 12", "Convierte 12 en texto", "Suma 12", "Borra 12"]
respuesta: "Convierte el texto \"12\" en el número 12"

enunciado: "¿Qué hace `CONVERTIRANUMERO(\"12\")`?"

explicacion: |
  `CONVERTIRATEXTO` hace lo contrario.
```

### 20 — Mezclar

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Los tipos no coinciden: es un error de tipo", "Ninguno", "Da un número", "Da un texto"]
respuesta: "Los tipos no coinciden: es un error de tipo"

enunciado: "¿Qué problema hay al sumar un texto y un número?"

explicacion: |
  Hay que convertir antes.
```

### 21 — Reemplazo

```
metadata:
  materia: "pseint"
  tema: "variables_y_tipos"
  nivel: "basico"
  tags: ["asignacion"]

tipo: mc
opciones_explicitas: ["8", "5", "13", "0"]
respuesta: "8"

enunciado: "Si `x <- 5` y luego `x <- 8`, ¿cuánto vale `x`?"

explicacion: |
  La asignación reemplaza el valor anterior.
```

