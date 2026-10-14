# PSeInt — Diagramas de flujo (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Una representación de un algoritmo con figuras y flechas", "Un gráfico estadístico", "Un plano de una casa", "Un mapa"]
respuesta: "Una representación de un algoritmo con figuras y flechas"

enunciado: "¿Qué es un diagrama de flujo?"

explicacion: |
  Muestra el orden de los pasos.
```

### 2 — Para qué

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["uso"]

tipo: mc
opciones_explicitas: ["Para entender, explicar y detectar errores en un algoritmo", "Para cifrar datos", "Para dibujar logotipos", "Para imprimir"]
respuesta: "Para entender, explicar y detectar errores en un algoritmo"

enunciado: "¿Para qué sirve?"

explicacion: |
  Se usa antes de escribir el código.
```

### 3 — Óvalo

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["simbolos"]

tipo: mc
opciones_explicitas: ["El inicio o el fin", "Una decisión", "Un cálculo", "Una entrada"]
respuesta: "El inicio o el fin"

enunciado: "¿Qué representa un óvalo?"

explicacion: |
  Se llama terminador.
```

### 4 — Paralelogramo

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["simbolos"]

tipo: mc
opciones_explicitas: ["Una entrada o salida de datos", "Una decisión", "Un cálculo", "El fin"]
respuesta: "Una entrada o salida de datos"

enunciado: "¿Qué representa un paralelogramo?"

explicacion: |
  Por ejemplo, `Leer` y `Escribir`.
```

### 5 — Rectángulo

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["simbolos"]

tipo: mc
opciones_explicitas: ["Un proceso: cálculos o asignaciones", "Una decisión", "Una entrada", "Un conector"]
respuesta: "Un proceso: cálculos o asignaciones"

enunciado: "¿Qué representa un rectángulo?"

explicacion: |
  Por ejemplo, `total <- a + b`.
```

### 6 — Rombo

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["simbolos"]

tipo: mc
opciones_explicitas: ["Una decisión con dos salidas", "Un cálculo", "Una entrada", "El inicio"]
respuesta: "Una decisión con dos salidas"

enunciado: "¿Qué representa un rombo?"

explicacion: |
  La respuesta es Sí/No o Verdadero/Falso.
```

### 7 — Salidas

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["rombo"]

tipo: mc
opciones_explicitas: ["Dos, rotuladas", "Una", "Tres", "Ninguna"]
respuesta: "Dos, rotuladas"

enunciado: "¿Cuántas salidas tiene un rombo de decisión simple?"

explicacion: |
  Sí y No.
```

### 8 — Flechas

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["flechas"]

tipo: mc
opciones_explicitas: ["El orden de ejecución", "La velocidad", "El tamaño", "La importancia"]
respuesta: "El orden de ejecución"

enunciado: "¿Qué indican las flechas?"

explicacion: |
  Se sigue la flecha de una figura a otra.
```

### 9 — Conector

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "intermedio"
  tags: ["conector"]

tipo: mc
opciones_explicitas: ["Para unir partes del diagrama o continuar en otra página", "Para decidir", "Para leer", "Para cerrar"]
respuesta: "Para unir partes del diagrama o continuar en otra página"

enunciado: "¿Para qué sirve un conector?"

explicacion: |
  Evita flechas muy largas.
```

### 10 — Repetición

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["bucle"]

tipo: mc
opciones_explicitas: ["Una flecha que vuelve hacia atrás a un rombo", "Una figura roja", "Un óvalo doble", "Un círculo vacío"]
respuesta: "Una flecha que vuelve hacia atrás a un rombo"

enunciado: "¿Cómo se ve un bucle en un diagrama?"

explicacion: |
  Se repite mientras la condición lo permita.
```

### 11 — Inicio único

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["Uno", "Dos", "Tres", "Ninguno"]
respuesta: "Uno"

enunciado: "¿Cuántos inicios tiene un diagrama bien hecho?"

explicacion: |
  Y al menos un fin.
```

### 12 — Sentido

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["De arriba hacia abajo y de izquierda a derecha", "De abajo hacia arriba", "De derecha a izquierda", "Al azar"]
respuesta: "De arriba hacia abajo y de izquierda a derecha"

enunciado: "¿En qué sentido suele fluir un diagrama?"

explicacion: |
  Facilita la lectura.
```

### 13 — Cruces

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["Cruzar las flechas", "Usar figuras", "Usar texto", "Usar rombos"]
respuesta: "Cruzar las flechas"

enunciado: "¿Qué conviene evitar al dibujar?"

explicacion: |
  Un diagrama claro se lee mejor.
```

### 14 — Textos

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["Breves", "Largos", "Con párrafos", "Sin sentido"]
respuesta: "Breves"

enunciado: "¿Cómo deben ser los textos dentro de las figuras?"

explicacion: |
  Se explican con pocas palabras.
```

### 15 — Caminos

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["reglas"]

tipo: mc
opciones_explicitas: ["Que lleguen al fin", "Que sean largos", "Que sean iguales", "Que pasen por el inicio dos veces"]
respuesta: "Que lleguen al fin"

enunciado: "¿Qué se verifica en todos los caminos de un diagrama?"

explicacion: |
  Un camino sin salida es un error.
```

### 16 — A pseudocódigo

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "intermedio"
  tags: ["traduccion"]

tipo: mc
opciones_explicitas: ["En un `Si` (o un `Mientras` si hay una flecha de retorno)", "En `Leer`", "En `Definir`", "En `Escribir`"]
respuesta: "En un `Si` (o un `Mientras` si hay una flecha de retorno)"

enunciado: "¿Cómo se traduce un rombo en pseudocódigo?"

explicacion: |
  Una decisión se vuelve una estructura de control.
```

### 17 — Lectura

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["traduccion"]

tipo: mc
opciones_explicitas: ["`Leer` y `Escribir`", "`Si` y `Para`", "`Definir`", "`Mientras`"]
respuesta: "`Leer` y `Escribir`"

enunciado: "¿A qué instrucciones corresponde un paralelogramo?"

explicacion: |
  Son las entradas y salidas.
```

### 18 — Prueba

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["prueba"]

tipo: mc
opciones_explicitas: ["Seguirlo con datos de ejemplo, anotando los cambios de las variables", "Dibujarlo otra vez", "Imprimirlo", "Borrar variables"]
respuesta: "Seguirlo con datos de ejemplo, anotando los cambios de las variables"

enunciado: "¿Qué es la prueba de escritorio sobre un diagrama?"

explicacion: |
  Verifica la lógica antes de programar.
```

### 19 — Límites

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["En programas grandes", "En programas chicos", "En algoritmos simples", "En clases"]
respuesta: "En programas grandes"

enunciado: "¿En qué caso un diagrama de flujo se vuelve poco práctico?"

explicacion: |
  Allí se usan módulos y otros diagramas.
```

### 20 — PSeInt

```
metadata:
  materia: "pseint"
  tema: "diagramas_de_flujo"
  nivel: "basico"
  tags: ["pseint"]

tipo: mc
opciones_explicitas: ["Dibuja su diagrama de flujo", "Lo traduce a otro idioma", "Lo cifra", "Lo imprime solo"]
respuesta: "Dibuja su diagrama de flujo"

enunciado: "¿Qué hace PSeInt con el pseudocódigo?"

explicacion: |
  Permite ver la estructura.
```

