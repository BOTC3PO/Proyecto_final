# Scratch — Proyecto simple (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Idea

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["plan"]

tipo: mc
opciones_explicitas: ["Pensar qué se quiere hacer, cómo se juega y qué se necesita", "Nada", "Elegir colores", "Publicarlo"]
respuesta: "Pensar qué se quiere hacer, cómo se juega y qué se necesita"

enunciado: "¿Qué se hace antes de arrastrar bloques?"

explicacion: |
  Un plan ahorra tiempo.
```

### 2 — Empezar

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["empezar"]

tipo: mc
opciones_explicitas: ["Con una versión mínima que funcione, y agregar de a poco", "Con todo a la vez", "Con el final", "Sin plan"]
respuesta: "Con una versión mínima que funcione, y agregar de a poco"

enunciado: "¿Cómo conviene empezar un proyecto?"

explicacion: |
  Se crece paso a paso.
```

### 3 — Objetos

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["objetos"]

tipo: mc
opciones_explicitas: ["Canasta y manzana (más el fondo)", "Un auto", "Un robot", "Un dado"]
respuesta: "Canasta y manzana (más el fondo)"

enunciado: "En el juego de las manzanas, ¿cuáles son los objetos principales?"

explicacion: |
  Cada uno tiene su código.
```

### 4 — Variables

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["variables"]

tipo: mc
opciones_explicitas: ["`puntos` y `vidas`", "`color` y `sonido`", "`x` y `y`", "Ninguna"]
respuesta: "`puntos` y `vidas`"

enunciado: "¿Qué variables usa el juego de las manzanas?"

explicacion: |
  Guardan el estado del juego.
```

### 5 — Movimiento

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["movimiento"]

tipo: mc
opciones_explicitas: ["Con un \"por siempre\" que revisa las flechas y cambia x", "Con un evento solo", "Con un sonido", "Con un fondo"]
respuesta: "Con un \"por siempre\" que revisa las flechas y cambia x"

enunciado: "¿Cómo se mueve la canasta?"

explicacion: |
  El bucle vigila el teclado continuamente.
```

### 6 — Cambiar x

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["coordenadas"]

tipo: mc
opciones_explicitas: ["Mueve el objeto 10 puntos hacia la derecha", "Lo sube", "Lo gira", "Lo esconde"]
respuesta: "Mueve el objeto 10 puntos hacia la derecha"

enunciado: "¿Qué hace \"cambiar x por (10)\"?"

explicacion: |
  Con −10, hacia la izquierda.
```

### 7 — Posición inicial

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "intermedio"
  tags: ["coordenadas"]

tipo: mc
opciones_explicitas: ["Coloca la canasta abajo y al centro", "La pone arriba", "La esconde", "La duplica"]
respuesta: "Coloca la canasta abajo y al centro"

enunciado: "¿Qué hace \"ir a x: (0) y: (-150)\"?"

explicacion: |
  y negativo es hacia abajo.
```

### 8 — Caída

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["caida"]

tipo: mc
opciones_explicitas: ["Con un bucle que cambia y por un valor negativo", "Con un sonido", "Con una lista", "Con un evento de tecla"]
respuesta: "Con un bucle que cambia y por un valor negativo"

enunciado: "¿Cómo hace caer a la manzana?"

explicacion: |
  Cada vuelta baja un poco.
```

### 9 — Azar

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["azar"]

tipo: mc
opciones_explicitas: ["Para que cada manzana caiga en un lugar distinto", "Para cambiar el color", "Para sumar puntos", "Para el sonido"]
respuesta: "Para que cada manzana caiga en un lugar distinto"

enunciado: "¿Para qué se usa \"número al azar\" en la posición x de la manzana?"

explicacion: |
  Hace el juego impredecible.
```

### 10 — Tocar

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["tocar"]

tipo: mc
opciones_explicitas: ["¿Tocando [Canasta]?", "Tecla presionada", "Respuesta", "Cronómetro"]
respuesta: "¿Tocando [Canasta]?"

enunciado: "¿Qué condición detecta que la canasta atrapó la manzana?"

explicacion: |
  Se evalúa dentro del bucle de caída.
```

### 11 — Puntos

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["puntos"]

tipo: mc
opciones_explicitas: ["Se suma a los puntos", "Se resta una vida", "Se reinicia", "Se esconde el juego"]
respuesta: "Se suma a los puntos"

enunciado: "¿Qué se hace al atrapar una manzana?"

explicacion: |
  Se usa "sumar a [puntos] (1)".
```

### 12 — Fin

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "intermedio"
  tags: ["fin"]

tipo: mc
opciones_explicitas: ["Con \"esperar hasta que vidas = 0\"", "Con un sonido", "Con un fondo", "Con una lista"]
respuesta: "Con \"esperar hasta que vidas = 0\""

enunciado: "¿Cómo se detecta el fin del juego?"

explicacion: |
  Después se muestra un mensaje y se detiene todo.
```

### 13 — Inicializar

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["inicializar"]

tipo: mc
opciones_explicitas: ["Se fijan a sus valores iniciales", "Se dejan como estaban", "Se esconden", "Se borran"]
respuesta: "Se fijan a sus valores iniciales"

enunciado: "¿Qué se hace con `puntos` y `vidas` al empezar?"

explicacion: |
  Así cada partida empieza igual.
```

### 14 — Nombres

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["`Canasta`", "`Objeto7`", "`xyz`", "`cosa`"]
respuesta: "`Canasta`"

enunciado: "¿Qué nombre es más claro para un objeto?"

explicacion: |
  Los nombres claros ayudan a entender.
```

### 15 — Dividir

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["Es más fácil de leer, probar y corregir", "Ocupa menos", "Es obligatorio", "Es más rápido"]
respuesta: "Es más fácil de leer, probar y corregir"

enunciado: "¿Por qué conviene un programa por función en lugar de uno enorme?"

explicacion: |
  Cada parte se prueba por separado.
```

### 16 — Probar

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["probar"]

tipo: mc
opciones_explicitas: ["Después de cada parte armada", "Solo al final", "Nunca", "Solo al publicar"]
respuesta: "Después de cada parte armada"

enunciado: "¿Cuándo se prueba el proyecto?"

explicacion: |
  Se detectan errores temprano.
```

### 17 — Dificultad

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["dificultad"]

tipo: mc
opciones_explicitas: ["Que la velocidad o el desafío aumente de a poco", "Que siempre sea igual", "Que sea imposible", "Que empiece difícil"]
respuesta: "Que la velocidad o el desafío aumente de a poco"

enunciado: "¿Qué es una dificultad progresiva?"

explicacion: |
  Mantiene el interés.
```

### 18 — Mensajes

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "intermedio"
  tags: ["mensajes"]

tipo: mc
opciones_explicitas: ["Para que un objeto avise a otro y mantener el proyecto ordenado", "Para chatear", "Para guardar", "Para dibujar"]
respuesta: "Para que un objeto avise a otro y mantener el proyecto ordenado"

enunciado: "¿Para qué se usan los mensajes entre objetos?"

explicacion: |
  Cada objeto se ocupa de lo suyo.
```

### 19 — Créditos

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["creditos"]

tipo: mc
opciones_explicitas: ["Quién lo hizo y qué materiales de otros se usaron", "Nada", "La contraseña", "La dirección de la casa"]
respuesta: "Quién lo hizo y qué materiales de otros se usaron"

enunciado: "¿Qué se agrega en los créditos de un proyecto?"

explicacion: |
  Se respeta la autoría.
```

### 20 — Privacidad

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["privacidad"]

tipo: mc
opciones_explicitas: ["Datos personales como nombre completo, escuela o dirección", "El título", "Las instrucciones", "El nombre del juego"]
respuesta: "Datos personales como nombre completo, escuela o dirección"

enunciado: "¿Qué información no se publica en un proyecto?"

explicacion: |
  Es importante cuidar la privacidad.
```

### 21 — Comentarios

```
metadata:
  materia: "scratch"
  tema: "proyecto_simple"
  nivel: "basico"
  tags: ["comunidad"]

tipo: mc
opciones_explicitas: ["Se leen para mejorar el proyecto, con respeto", "Se ignoran siempre", "Se borran siempre", "Se responden con insultos"]
respuesta: "Se leen para mejorar el proyecto, con respeto"

enunciado: "¿Qué se hace con los comentarios de otros usuarios?"

explicacion: |
  Ayudan a mejorar.
```

