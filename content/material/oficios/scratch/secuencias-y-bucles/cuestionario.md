# Scratch — Secuencias y bucles (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Secuencia

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["secuencia"]

tipo: mc
opciones_explicitas: ["Una serie de instrucciones que se ejecutan una tras otra, en orden", "Un bucle", "Una condición", "Un error"]
respuesta: "Una serie de instrucciones que se ejecutan una tras otra, en orden"

enunciado: "¿Qué es una secuencia?"

explicacion: |
  En Scratch, de arriba hacia abajo.
```

### 2 — Orden

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["Porque cambiarlo puede cambiar el resultado", "No importa", "Porque cambia el color", "Porque hace más lento"]
respuesta: "Porque cambiarlo puede cambiar el resultado"

enunciado: "¿Por qué importa el orden de los bloques?"

explicacion: |
  Por ejemplo, decir antes o después de mover.
```

### 3 — Bucle

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["bucle"]

tipo: mc
opciones_explicitas: ["Para repetir instrucciones sin copiar los bloques", "Para decidir", "Para guardar datos", "Para borrar objetos"]
respuesta: "Para repetir instrucciones sin copiar los bloques"

enunciado: "¿Para qué sirve un bucle?"

explicacion: |
  Es más corto y fácil de cambiar.
```

### 4 — Repetir n

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["repetir"]

tipo: mc
opciones_explicitas: ["Ejecuta lo que contiene 4 veces", "Lo ejecuta una vez", "Lo ejecuta para siempre", "No lo ejecuta"]
respuesta: "Ejecuta lo que contiene 4 veces"

enunciado: "¿Qué hace \"repetir (4)\"?"

explicacion: |
  Se sabe cuántas veces.
```

### 5 — Por siempre

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["siempre"]

tipo: mc
opciones_explicitas: ["Repite sin fin hasta que se detiene el proyecto", "Repite 100 veces", "Repite una vez", "No repite"]
respuesta: "Repite sin fin hasta que se detiene el proyecto"

enunciado: "¿Qué hace \"por siempre\"?"

explicacion: |
  Se usa mucho en juegos.
```

### 6 — Debajo

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["siempre"]

tipo: mc
opciones_explicitas: ["Nunca se ejecutan", "Se ejecutan primero", "Se ejecutan al final", "Se ejecutan dos veces"]
respuesta: "Nunca se ejecutan"

enunciado: "¿Qué pasa con los bloques colocados debajo de un \"por siempre\"?"

explicacion: |
  El bucle no termina.
```

### 7 — Hasta que

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["hasta que"]

tipo: mc
opciones_explicitas: ["Repite hasta que la condición se cumple", "Repite una vez", "Repite mientras es falsa siempre", "Nunca repite"]
respuesta: "Repite hasta que la condición se cumple"

enunciado: "¿Qué hace \"repetir hasta que <condición>\"?"

explicacion: |
  La condición se revisa antes de cada vuelta.
```

### 8 — Esperar hasta

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["esperar"]

tipo: mc
opciones_explicitas: ["Detiene el programa hasta que la condición se cumpla", "Repite siempre", "Borra el objeto", "Cambia el disfraz"]
respuesta: "Detiene el programa hasta que la condición se cumpla"

enunciado: "¿Qué hace \"esperar hasta que <condición>\"?"

explicacion: |
  No repite nada: solo espera.
```

### 9 — Cuadrado

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["cuadrado"]

tipo: mc
opciones_explicitas: ["4", "2", "3", "8"]
respuesta: "4"

enunciado: "¿Cuántos giros de 90° hay en un cuadrado?"

explicacion: |
  4 lados y 4 giros: 360°.
```

### 10 — Cuadrado repetir

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["cuadrado"]

tipo: mc
opciones_explicitas: ["Mover (100) pasos y girar 90 grados", "Mover y decir", "Girar y esperar", "Cambiar disfraz y mover"]
respuesta: "Mover (100) pasos y girar 90 grados"

enunciado: "¿Qué bloques dentro de \"repetir (4)\" dibujan un cuadrado?"

explicacion: |
  Con el lápiz de la extensión "Lápiz".
```

### 11 — Triángulo

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["poligonos"]

tipo: mc
opciones_explicitas: ["120", "60", "90", "180"]
respuesta: "120"

enunciado: "Para dibujar un triángulo equilátero, ¿cuántos grados se gira en cada vuelta?"

explicacion: |
  360 / 3 = 120.
```

### 12 — Animación

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["animacion"]

tipo: mc
opciones_explicitas: ["Siguiente disfraz", "Decir", "Esperar hasta", "Detener todo"]
respuesta: "Siguiente disfraz"

enunciado: "¿Qué bloque se usa dentro de un bucle para animar a un personaje?"

explicacion: |
  Con una espera corta se ve el movimiento.
```

### 13 — Esperas

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["esperas"]

tipo: mc
opciones_explicitas: ["Porque sin ellas el movimiento va tan rápido que no se ve", "Para ahorrar batería", "Porque es obligatorio", "Para cambiar el color"]
respuesta: "Porque sin ellas el movimiento va tan rápido que no se ve"

enunciado: "¿Por qué se usan esperas dentro de un bucle de animación?"

explicacion: |
  Con esperas cortas se ve fluido.
```

### 14 — Contar

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["contar"]

tipo: mc
opciones_explicitas: ["Aumenta el contador en 1 en cada vuelta, 10 veces", "Lo reinicia", "Lo borra", "Lo duplica"]
respuesta: "Aumenta el contador en 1 en cada vuelta, 10 veces"

enunciado: "¿Qué hace \"sumar a [contador] (1)\" dentro de un \"repetir (10)\"?"

explicacion: |
  Al final vale 10 si arrancó en 0.
```

### 15 — Anidados

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["anidados"]

tipo: mc
opciones_explicitas: ["Un bucle dentro de otro", "Un bucle sin fin", "Un bucle sin bloques", "Un bucle con error"]
respuesta: "Un bucle dentro de otro"

enunciado: "¿Qué es un bucle anidado?"

explicacion: |
  El interior se repite completo en cada vuelta del exterior.
```

### 16 — Estrella

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "avanzado"
  tags: ["anidados"]

tipo: mc
opciones_explicitas: ["Figuras como estrellas y espirales", "Un error", "Un sonido", "Nada"]
respuesta: "Figuras como estrellas y espirales"

enunciado: "¿Qué se logra con un polígono dentro de un bucle que gira un poco cada vez?"

explicacion: |
  Es un ejemplo de bucles anidados.
```

### 17 — Infinito

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Nunca termina", "Termina enseguida", "Se borra", "Se repite 10 veces"]
respuesta: "Nunca termina"

enunciado: "¿Qué ocurre con un \"repetir hasta que\" cuyo condición nunca se cumple?"

explicacion: |
  Hay que revisar la condición.
```

### 18 — Por uno

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Un error \"por uno\" en el número de repeticiones", "Un error de color", "Un error de sonido", "Un error de escenario"]
respuesta: "Un error \"por uno\" en el número de repeticiones"

enunciado: "Se quería repetir 5 veces y salió 6. ¿Qué error es?"

explicacion: |
  Se prueba contando.
```

### 19 — Ventaja

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "basico"
  tags: ["ventaja"]

tipo: mc
opciones_explicitas: ["Es más corto y fácil de leer y de cambiar", "Es más lento", "Es más largo", "No es mejor"]
respuesta: "Es más corto y fácil de leer y de cambiar"

enunciado: "¿Por qué un bucle es mejor que copiar el mismo bloque 20 veces?"

explicacion: |
  Se cambia en un solo lugar.
```

### 20 — Movimiento suave

```
metadata:
  materia: "scratch"
  tema: "secuencias_y_bucles"
  nivel: "intermedio"
  tags: ["suavidad"]

tipo: mc
opciones_explicitas: ["Con pasos pequeños y esperas cortas", "Con pasos enormes", "Sin esperas", "Con muchos disfraces"]
respuesta: "Con pasos pequeños y esperas cortas"

enunciado: "¿Cómo se logra un movimiento suave?"

explicacion: |
  Así se ve fluido.
```

