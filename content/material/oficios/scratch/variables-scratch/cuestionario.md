# Scratch — Variables y listas (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Variable

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una caja con nombre donde se guarda un dato que puede cambiar", "Un personaje", "Un sonido", "Un tipo de bloque"]
respuesta: "Una caja con nombre donde se guarda un dato que puede cambiar"

enunciado: "¿Qué es una variable?"

explicacion: |
  Por ejemplo, el puntaje.
```

### 2 — Crear

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["crear"]

tipo: mc
opciones_explicitas: ["Con \"Crear una variable\" en la categoría Variables", "Con un evento", "Con un sonido", "Con un disfraz"]
respuesta: "Con \"Crear una variable\" en la categoría Variables"

enunciado: "¿Cómo se crea una variable?"

explicacion: |
  Se le pone un nombre.
```

### 3 — Para todos

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["alcance"]

tipo: mc
opciones_explicitas: ["Que todos los objetos pueden usarla", "Que solo la usa uno", "Que es una constante", "Que se borra al final"]
respuesta: "Que todos los objetos pueden usarla"

enunciado: "¿Qué significa crear una variable \"para todos los objetos\"?"

explicacion: |
  Es útil para el puntaje del juego.
```

### 4 — Solo este

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "intermedio"
  tags: ["alcance"]

tipo: mc
opciones_explicitas: ["Cuando solo ese objeto la necesita, como la velocidad de un enemigo", "Para el puntaje general", "Para todo", "Nunca"]
respuesta: "Cuando solo ese objeto la necesita, como la velocidad de un enemigo"

enunciado: "¿Cuándo conviene una variable \"solo para este objeto\"?"

explicacion: |
  Evita mezclar datos.
```

### 5 — Fijar

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["fijar"]

tipo: mc
opciones_explicitas: ["Le da a la variable el valor 0", "La suma", "La borra", "La duplica"]
respuesta: "Le da a la variable el valor 0"

enunciado: "¿Qué hace \"fijar [puntos] a (0)\"?"

explicacion: |
  Se usa para empezar de cero.
```

### 6 — Sumar

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["sumar"]

tipo: mc
opciones_explicitas: ["Aumenta en 1 el valor de la variable", "Le da el valor 1", "La reinicia", "La oculta"]
respuesta: "Aumenta en 1 el valor de la variable"

enunciado: "¿Qué hace \"sumar a [puntos] (1)\"?"

explicacion: |
  Con un número negativo, resta.
```

### 7 — Diferencia

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["fijar"]

tipo: mc
opciones_explicitas: ["\"Fijar\" asigna un valor; \"sumar a\" cambia el valor existente", "Ninguna", "\"Fijar\" suma", "\"Sumar\" asigna"]
respuesta: "\"Fijar\" asigna un valor; \"sumar a\" cambia el valor existente"

enunciado: "¿Qué diferencia hay entre \"fijar\" y \"sumar a\"?"

explicacion: |
  Son dos operaciones distintas.
```

### 8 — Inicializar

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["inicializar"]

tipo: mc
opciones_explicitas: ["Para que no conserven el valor de la partida anterior", "Por estética", "Por obligación del programa", "Para acelerar"]
respuesta: "Para que no conserven el valor de la partida anterior"

enunciado: "¿Por qué se inicializan las variables al empezar?"

explicacion: |
  Si no, el puntaje sigue de la vez pasada.
```

### 9 — Valor

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["valor"]

tipo: mc
opciones_explicitas: ["Entrega el valor de la variable para usarlo en otro bloque", "Lo cambia", "Lo borra", "Lo oculta"]
respuesta: "Entrega el valor de la variable para usarlo en otro bloque"

enunciado: "¿Qué hace el bloque redondo \"( puntos )\"?"

explicacion: |
  Se encaja en espacios redondos.
```

### 10 — Monitor

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["monitor"]

tipo: mc
opciones_explicitas: ["La caja que muestra su valor en el escenario", "Un sonido", "Un disfraz", "Un evento"]
respuesta: "La caja que muestra su valor en el escenario"

enunciado: "¿Qué es el monitor de una variable?"

explicacion: |
  Se puede mostrar u ocultar.
```

### 11 — Contador

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["contador"]

tipo: mc
opciones_explicitas: ["Monedas recogidas o clics", "El color", "El sonido", "El fondo"]
respuesta: "Monedas recogidas o clics"

enunciado: "¿Qué cuenta un contador típico en un juego?"

explicacion: |
  Se aumenta cada vez que ocurre el evento.
```

### 12 — Respuesta

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["preguntar"]

tipo: mc
opciones_explicitas: ["Se asigna la `respuesta` a una variable", "No se puede", "Con un sonido", "Con un disfraz"]
respuesta: "Se asigna la `respuesta` a una variable"

enunciado: "¿Cómo se guarda lo que el usuario escribe en \"preguntar\"?"

explicacion: |
  Se usa después en el programa.
```

### 13 — Azar

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["azar"]

tipo: mc
opciones_explicitas: ["Entrega un entero aleatorio de 1 a 6", "Siempre 6", "Siempre 1", "Un decimal"]
respuesta: "Entrega un entero aleatorio de 1 a 6"

enunciado: "¿Qué hace \"número al azar entre (1) y (6)\"?"

explicacion: |
  Sirve para un dado.
```

### 14 — Unir

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["unir"]

tipo: mc
opciones_explicitas: ["Junta los dos textos: \"hola mundo\"", "Los suma", "Los borra", "Los compara"]
respuesta: "Junta los dos textos: \"hola mundo\""

enunciado: "¿Qué hace \"unir [hola ] [mundo]\"?"

explicacion: |
  Sirve para armar mensajes.
```

### 15 — Resto

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "intermedio"
  tags: ["mod"]

tipo: mc
opciones_explicitas: ["1", "0", "3", "2"]
respuesta: "1"

enunciado: "¿Qué da \"7 mod 2\"?"

explicacion: |
  Es el resto de dividir 7 entre 2.
```

### 16 — Lista

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["lista"]

tipo: mc
opciones_explicitas: ["Una estructura que guarda muchos datos en orden", "Una variable simple", "Un disfraz", "Un evento"]
respuesta: "Una estructura que guarda muchos datos en orden"

enunciado: "¿Qué es una lista?"

explicacion: |
  Cada dato tiene una posición.
```

### 17 — Primer índice

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["indice"]

tipo: mc
opciones_explicitas: ["1", "0", "-1", "2"]
respuesta: "1"

enunciado: "¿Cuál es el primer índice de una lista en Scratch?"

explicacion: |
  Los elementos se numeran desde 1.
```

### 18 — Añadir

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["listas"]

tipo: mc
opciones_explicitas: ["Agrega el elemento al final", "Lo agrega al principio", "Lo borra", "Lo reemplaza"]
respuesta: "Agrega el elemento al final"

enunciado: "¿Qué hace \"añadir [cosa] a [lista]\"?"

explicacion: |
  Insertar permite elegir la posición.
```

### 19 — Longitud

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["listas"]

tipo: mc
opciones_explicitas: ["La cantidad de elementos", "El último elemento", "El primero", "El nombre"]
respuesta: "La cantidad de elementos"

enunciado: "¿Qué entrega \"longitud de [lista]\"?"

explicacion: |
  Se usa para recorrer la lista.
```

### 20 — Recorrer

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "intermedio"
  tags: ["recorrer"]

tipo: mc
opciones_explicitas: ["Con un bucle y un contador de 1 hasta su longitud", "Con un solo bloque", "Con un evento", "Con un sonido"]
respuesta: "Con un bucle y un contador de 1 hasta su longitud"

enunciado: "¿Cómo se recorre una lista?"

explicacion: |
  En cada vuelta se lee el elemento actual.
```

### 21 — Variable o lista

```
metadata:
  materia: "scratch"
  tema: "variables_scratch"
  nivel: "basico"
  tags: ["lista"]

tipo: mc
opciones_explicitas: ["Una lista", "10 variables", "Un disfraz", "Un evento"]
respuesta: "Una lista"

enunciado: "Para guardar los 10 nombres de los jugadores, ¿qué conviene?"

explicacion: |
  Evita crear muchas variables.
```

