# Informática — Operadores lógicos (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. Tema agregado en `informatica/` (ver `../dependencias.md`).

---
### 1 — Los tres operadores

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["basicos"]

tipo: mc
opciones_explicitas: ["Y (AND), O (OR) y NO (NOT)", "SUMA, RESTA y PRODUCTO", "SI, SINO y ENTONCES", "MAYOR, MENOR e IGUAL"]
respuesta: "Y (AND), O (OR) y NO (NOT)"

enunciado: "¿Cuáles son los tres operadores lógicos básicos?"

explicacion: |
  Los operadores lógicos combinan o invierten valores booleanos: AND (y), OR (o) y NOT (no). En C, Java y JavaScript se escriben `&&`, `||` y `!`; en Python, `and`, `or` y `not`.
```

### 2 — Operador Y

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["and"]

tipo: mc
opciones_explicitas: ["Solo cuando A y B son verdaderos los dos", "Cuando alguno de los dos es verdadero", "Cuando los dos son falsos", "Siempre"]
respuesta: "Solo cuando A y B son verdaderos los dos"

enunciado: "¿Cuándo da verdadero `A Y B`?"

explicacion: |
  El Y exige que se cumplan **las dos** condiciones. Si una falla, el resultado es falso.
```

### 3 — Operador O

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["or"]

tipo: mc
opciones_explicitas: ["Solo cuando A y B son falsos los dos", "Cuando alguno es falso", "Cuando los dos son verdaderos", "Nunca"]
respuesta: "Solo cuando A y B son falsos los dos"

enunciado: "¿Cuándo da falso `A O B`?"

explicacion: |
  El O alcanza con que **una** de las condiciones se cumpla. Solo es falso si las dos fallan.
```

### 4 — Operador NO

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["not"]

tipo: mc
opciones_explicitas: ["falso", "verdadero", "activo", "No se puede calcular"]
respuesta: "falso"

enunciado: "Si `activo` es verdadero, ¿cuánto vale `NO activo`?"

explicacion: |
  El NO invierte el valor: lo verdadero pasa a falso y lo falso a verdadero.
```

### 5 — Símbolos en C y JavaScript

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["simbolos"]

tipo: mc
opciones_explicitas: ["&&", "&", "and", "AND"]
respuesta: "&&"

enunciado: "En C, Java y JavaScript, ¿cómo se escribe el operador lógico Y?"

explicacion: |
  `&&` es el Y lógico. Con un solo `&` se hace una operación **bit a bit**, que es otra cosa. En Python se escribe `and`.
```

### 6 — Símbolo del O

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["simbolos"]

tipo: completar
respuesta: "||"
respuestas_validas:
  - "||"

enunciado: "En JavaScript, el operador lógico O se escribe `a ___ b`."

explicacion: |
  `||` es el O lógico (dos barras verticales). Una sola barra `|` opera bit a bit.
```

### 7 — Símbolo del NO

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["simbolos"]

tipo: completar
respuesta: "!"
respuestas_validas:
  - "!"

enunciado: "En C, Java y JavaScript, el operador lógico NO se escribe con el signo `___` delante de la condición."

explicacion: |
  `!` invierte el valor: `!llueve` es verdadero cuando `llueve` es falso. En Python se escribe `not`.
```

### 8 — Tabla del Y

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["and"]

tipo: vf
respuesta: verdadero

enunciado: "`verdadero Y falso` da falso."

explicacion: |
  El Y solo da verdadero si los dos lados lo son. Acá uno falla, así que el resultado es falso.
```

### 9 — Tabla del O

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["or"]

tipo: vf
respuesta: verdadero

enunciado: "`verdadero O falso` da verdadero."

explicacion: |
  Al O le alcanza con que uno sea verdadero.
```

### 10 — Doble negación

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["not"]

tipo: vf
respuesta: verdadero

enunciado: "`NO (NO verdadero)` da verdadero."

explicacion: |
  Cada NO invierte el valor: NO verdadero = falso, y NO falso = verdadero.
```

### 11 — Condición compuesta

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["aplicacion"]

tipo: mc
opciones_explicitas: ["No: la primera condición es falsa", "Sí: tiene entrada", "Sí: alcanza con una", "Depende del recital"]
respuesta: "No: la primera condición es falsa"

enunciado: "Para entrar a un recital se pide ser mayor de 16 Y tener entrada. Si Lucía tiene 15 años y tiene entrada, ¿puede entrar?"

explicacion: |
  Con un Y hay que cumplir las dos condiciones. 15 no es mayor de 16, así que el resultado es falso aunque tenga entrada.
```

### 12 — Condición con O

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["aplicacion"]

tipo: mc
opciones_explicitas: ["Sí: se cumple una de las dos", "No: faltó una condición", "No: tiene que ser jubilado", "Solo si paga en efectivo"]
respuesta: "Sí: se cumple una de las dos"

enunciado: "Un descuento se aplica si el cliente es jubilado O compra los martes. Si un cliente no es jubilado y compra un martes, ¿recibe el descuento?"

explicacion: |
  Con un O alcanza con que se cumpla una. Compró un martes, así que el resultado es verdadero.
```

### 13 — Rango en dos comparaciones

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "intermedio"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["x >= 1 && x <= 10", "x >= 1 || x <= 10", "x >= 1 && x >= 10", "!(x >= 1) && x <= 10"]
respuesta: "x >= 1 && x <= 10"

enunciado: "¿Cuál expresión comprueba que `x` está entre 1 y 10 (inclusive)?"

explicacion: |
  Se necesitan las dos comparaciones al mismo tiempo (Y). Con O, cualquier número cumpliría (por ejemplo, 50 es >= 1).
```

### 14 — Fuera de rango

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "intermedio"
  tags: ["rango"]

tipo: mc
opciones_explicitas: ["x < 1 || x > 10", "x < 1 && x > 10", "x >= 1 || x <= 10", "!(x < 1 || x > 10)"]
respuesta: "x < 1 || x > 10"

enunciado: "¿Cuál expresión comprueba que `x` está FUERA del rango de 1 a 10?"

explicacion: |
  Estar fuera es estar por debajo de 1 **o** por encima de 10. Con un Y nunca se cumpliría: ningún número es menor que 1 y mayor que 10 a la vez.
```

### 15 — Leyes de De Morgan

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["de morgan"]

tipo: mc
opciones_explicitas: ["!A || !B", "!A && !B", "A || B", "!A || B"]
respuesta: "!A || !B"

enunciado: "¿Con qué expresión es equivalente `!(A && B)`?"

explicacion: |
  Ley de De Morgan: negar un Y equivale a negar cada parte y cambiar el Y por un O. Es útil para simplificar condiciones.
```

### 16 — De Morgan con O

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["de morgan"]

tipo: mc
opciones_explicitas: ["!A && !B", "!A || !B", "A && B", "A && !B"]
respuesta: "!A && !B"

enunciado: "¿Con qué expresión es equivalente `!(A || B)`?"

explicacion: |
  Es la otra ley de De Morgan: negar un O equivale a negar cada parte y usar Y. "No (llueve o hace frío)" es "no llueve y no hace frío".
```

### 17 — Precedencia

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "intermedio"
  tags: ["precedencia"]

tipo: mc
opciones_explicitas: ["`b && c`", "`a || b`", "Se evalúa de izquierda a derecha sin prioridad", "Depende de los valores"]
respuesta: "`b && c`"

enunciado: "En C, Java o JavaScript, ¿cuál se evalúa primero en `a || b && c`?"

explicacion: |
  El Y tiene más precedencia que el O (como el producto sobre la suma). Es lo mismo que `a || (b && c)`. Ante la duda, usá paréntesis.
```

### 18 — Cortocircuito

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["cortocircuito"]

tipo: vf
respuesta: verdadero

enunciado: "En `A && B`, si A es falso, la mayoría de los lenguajes ni siquiera evalúan B."

explicacion: |
  Se llama **evaluación en cortocircuito**: si con A ya se sabe el resultado (falso), no se mira B. Sirve, por ejemplo, para escribir `n != 0 && 100 / n > 5` sin dividir por cero.
```

### 19 — Evitar un error

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["cortocircuito"]

tipo: mc
opciones_explicitas: ["Si `i` es demasiado grande, la segunda parte ni se evalúa y no se sale de la lista", "Se ejecuta más lento pero más seguro", "Es lo mismo en cualquier orden", "Da siempre verdadero"]
respuesta: "Si `i` es demasiado grande, la segunda parte ni se evalúa y no se sale de la lista"

enunciado: "¿Qué ventaja tiene escribir `i < largo && lista[i] == x` en ese orden?"

explicacion: |
  El cortocircuito protege la segunda condición: si `i < largo` es falso, no se intenta leer `lista[i]` (que daría error).
```

### 20 — Y bit a bit vs lógico

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["bits"]

tipo: mc
opciones_explicitas: ["`&&` es el Y lógico entre condiciones; `&` opera bit por bit sobre números", "Ninguna", "`&` es el Y lógico y `&&` opera bit a bit", "`&&` solo existe en Python"]
respuesta: "`&&` es el Y lógico entre condiciones; `&` opera bit por bit sobre números"

enunciado: "En JavaScript o C, ¿qué diferencia hay entre `&` y `&&`?"

explicacion: |
  Son operadores distintos. Para combinar condiciones se usa `&&`; `&` trabaja con los bits de los números (por ejemplo, para máscaras).
```

### 21 — Operadores en Python

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["python"]

tipo: mc
opciones_explicitas: ["edad >= 18 and estudiante", "edad >= 18 && estudiante", "edad >= 18 & estudiante", "edad >= 18 AND estudiante"]
respuesta: "edad >= 18 and estudiante"

enunciado: "¿Cuál de estas expresiones es correcta en Python para \"edad mayor o igual a 18 y es estudiante\"?"

explicacion: |
  En Python los operadores lógicos se escriben con palabras: `and`, `or`, `not`. `&&` no existe en Python.
```

### 22 — Operadores en SQL

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "basico"
  tags: ["sql"]

tipo: mc
opciones_explicitas: ["WHERE a = 1 AND b = 2", "WHERE a = 1 && b = 2", "WHERE a = 1, b = 2", "WHERE a = 1 + b = 2"]
respuesta: "WHERE a = 1 AND b = 2"

enunciado: "En SQL, ¿cómo se combinan dos condiciones en un WHERE para que se cumplan ambas?"

explicacion: |
  SQL usa las palabras `AND`, `OR` y `NOT`.
```

### 23 — Valores que cuentan como verdaderos

```
metadata:
  materia: "informatica"
  tema: "operadores_logicos"
  nivel: "avanzado"
  tags: ["verdad"]

tipo: vf
respuesta: falso

enunciado: "En todos los lenguajes, el número 0 se interpreta como falso y cualquier otro número como verdadero."

explicacion: |
  Depende del lenguaje: en C y Python el 0 cuenta como falso; en otros lenguajes (Java, Rust) una condición tiene que ser estrictamente booleana y 0 da error. No lo des por sabido.
```

