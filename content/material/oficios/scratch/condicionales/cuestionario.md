# Scratch — Condicionales (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Condicional

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Hace que el programa elija qué hacer según una condición", "Repite instrucciones", "Guarda datos", "Mueve objetos"]
respuesta: "Hace que el programa elija qué hacer según una condición"

enunciado: "¿Qué hace un condicional?"

explicacion: |
  La condición es verdadera o falsa.
```

### 2 — Condición

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["condicion"]

tipo: mc
opciones_explicitas: ["Algo que puede ser verdadero o falso", "Un número", "Un texto", "Un sonido"]
respuesta: "Algo que puede ser verdadero o falso"

enunciado: "¿Cómo es una condición?"

explicacion: |
  Es una condición booleana.
```

### 3 — Si entonces

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["si"]

tipo: mc
opciones_explicitas: ["Solo si la condición es verdadera", "Siempre", "Nunca", "Solo si es falsa"]
respuesta: "Solo si la condición es verdadera"

enunciado: "¿Cuándo se ejecuta el interior de un \"si <...> entonces\"?"

explicacion: |
  Si es falsa, se salta.
```

### 4 — Si no

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["si no"]

tipo: mc
opciones_explicitas: ["Un camino alternativo para cuando la condición es falsa", "Otra condición verdadera", "Un bucle", "Un evento"]
respuesta: "Un camino alternativo para cuando la condición es falsa"

enunciado: "¿Qué agrega \"si no\"?"

explicacion: |
  Elige entre dos caminos.
```

### 5 — Hexagonal

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["formas"]

tipo: mc
opciones_explicitas: ["Hexagonal", "Redonda", "Rectangular", "De sombrero"]
respuesta: "Hexagonal"

enunciado: "¿Qué forma tienen los bloques de condición?"

explicacion: |
  Encajan en el espacio del "si".
```

### 6 — Sensor

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["sensores"]

tipo: mc
opciones_explicitas: ["Una condición del sensor que da verdadero o falso", "Un movimiento", "Un sonido", "Un disfraz"]
respuesta: "Una condición del sensor que da verdadero o falso"

enunciado: "¿Qué es \"¿tocando [Fantasma]?\"?"

explicacion: |
  Se usa para detectar choques.
```

### 7 — Teclas

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "intermedio"
  tags: ["teclas"]

tipo: mc
opciones_explicitas: ["¿Tecla [espacio] presionada?", "Al presionar tecla", "Esperar tecla", "Mover tecla"]
respuesta: "¿Tecla [espacio] presionada?"

enunciado: "¿Qué bloque dice si una tecla está presionada?"

explicacion: |
  Es una condición; "al presionar" es un evento.
```

### 8 — Una vez

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["bucle"]

tipo: mc
opciones_explicitas: ["Una sola", "Siempre", "Cada segundo", "Nunca"]
respuesta: "Una sola"

enunciado: "Un \"si\" que no está en un bucle, ¿cuántas veces se evalúa?"

explicacion: |
  Para vigilar continuamente hay que ponerlo en un "por siempre".
```

### 9 — Control

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["control"]

tipo: mc
opciones_explicitas: ["Con un \"si <tecla presionada>\" dentro de un \"por siempre\"", "Con un \"si\" solo", "Con un \"mover\" solo", "Con un evento de bandera únicamente"]
respuesta: "Con un \"si <tecla presionada>\" dentro de un \"por siempre\""

enunciado: "¿Cómo se hace que el personaje se mueva cuando se mantiene presionada una flecha?"

explicacion: |
  El bucle revisa la tecla continuamente.
```

### 10 — Y

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["Cuando ambos son verdaderos", "Cuando alguno es verdadero", "Cuando ninguno es verdadero", "Siempre"]
respuesta: "Cuando ambos son verdaderos"

enunciado: "¿Cuándo es verdadero \"<A> y <B>\"?"

explicacion: |
  Se usa para exigir varias cosas.
```

### 11 — O

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["Cuando al menos uno es verdadero", "Cuando ambos son verdaderos", "Cuando ninguno lo es", "Nunca"]
respuesta: "Cuando al menos uno es verdadero"

enunciado: "¿Cuándo es verdadero \"<A> o <B>\"?"

explicacion: |
  Basta uno.
```

### 12 — No

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["logicos"]

tipo: mc
opciones_explicitas: ["Invierte el resultado", "Lo repite", "Lo suma", "Lo guarda"]
respuesta: "Invierte el resultado"

enunciado: "¿Qué hace \"no <A>\"?"

explicacion: |
  Si A es verdadero, da falso.
```

### 13 — Comparación

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["( ) > ( )", "( ) -> ( )", "( ) <=> ( )", "( ) // ( )"]
respuesta: "( ) > ( )"

enunciado: "¿Cuál es una comparación válida en Scratch?"

explicacion: |
  También `<` y `=`.
```

### 14 — Anidar

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["anidar"]

tipo: mc
opciones_explicitas: ["Poner un \"si\" dentro de otro", "Repetir un \"si\"", "Borrar un \"si\"", "Cambiar su color"]
respuesta: "Poner un \"si\" dentro de otro"

enunciado: "¿Qué es anidar condicionales?"

explicacion: |
  Sirve para varios casos.
```

### 15 — Varios casos

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "intermedio"
  tags: ["encadenar"]

tipo: mc
opciones_explicitas: ["Un \"si\" dentro del \"si no\" de otro", "Un solo \"si\" sin \"si no\"", "Un \"por siempre\"", "Un evento"]
respuesta: "Un \"si\" dentro del \"si no\" de otro"

enunciado: "Para clasificar una nota en \"muy bien\", \"aprobado\" y \"a recuperar\", ¿qué se usa?"

explicacion: |
  Se encadenan condiciones.
```

### 16 — Choques

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["juegos"]

tipo: mc
opciones_explicitas: ["Para detectar choques, controles, puntajes y vidas", "Para dibujar", "Para cambiar el fondo únicamente", "Para guardar"]
respuesta: "Para detectar choques, controles, puntajes y vidas"

enunciado: "¿Para qué se usan los condicionales en un juego?"

explicacion: |
  Son la base de la lógica del juego.
```

### 17 — Respuesta

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "intermedio"
  tags: ["respuesta"]

tipo: mc
opciones_explicitas: ["Con \"( respuesta ) = [Buenos Aires]\"", "Con un evento", "Con un sonido", "Con un disfraz"]
respuesta: "Con \"( respuesta ) = [Buenos Aires]\""

enunciado: "¿Cómo se compara la respuesta del usuario con la correcta?"

explicacion: |
  La respuesta se obtiene del bloque "preguntar".
```

### 18 — Mayúsculas

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "avanzado"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["Los considera iguales (ignora las mayúsculas)", "Los considera distintos", "Da error", "Los suma"]
respuesta: "Los considera iguales (ignora las mayúsculas)"

enunciado: "¿Cómo compara Scratch los textos \"hola\" y \"Hola\"?"

explicacion: |
  Hay que saberlo al validar respuestas.
```

### 19 — Al revés

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "intermedio"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["La condición está al revés: debería ser vidas = 0", "Ninguno", "Falta un evento", "Falta un sonido"]
respuesta: "La condición está al revés: debería ser vidas = 0"

enunciado: "¿Qué error hay en \"si <(vidas) > (0)> entonces decir [Perdiste]\"?"

explicacion: |
  Se debe revisar el sentido de la condición.
```

### 20 — Sin si no

```
metadata:
  materia: "scratch"
  tema: "condicionales"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Nada pasa en el otro caso", "Da error", "Se repite", "Se borra"]
respuesta: "Nada pasa en el otro caso"

enunciado: "¿Qué ocurre si falta el \"si no\" cuando debe haber una acción para el otro caso?"

explicacion: |
  Hay que pensar en ambos caminos.
```

