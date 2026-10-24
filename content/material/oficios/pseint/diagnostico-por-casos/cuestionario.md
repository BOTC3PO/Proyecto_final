# PSeInt — Diagnóstico de algoritmos por casos (cuestionario, 21 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Primer paso

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["metodo"]

tipo: mc
opciones_explicitas: ["Leer el mensaje de PSeInt y probar con datos sencillos", "Reinstalar PSeInt", "Borrar todo", "Cambiar de lenguaje"]
respuesta: "Leer el mensaje de PSeInt y probar con datos sencillos"

enunciado: "Un algoritmo no funciona. ¿Qué se hace primero?"

explicacion: |
  El mensaje indica línea y motivo.
```

### 2 — Prueba de escritorio

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["prueba"]

tipo: mc
opciones_explicitas: ["Para ver cómo cambian las variables paso a paso", "Para ejecutar más rápido", "Para borrar errores solos", "Para ahorrar papel"]
respuesta: "Para ver cómo cambian las variables paso a paso"

enunciado: "¿Para qué sirve seguir el algoritmo a mano?"

explicacion: |
  Es la mejor forma de encontrar errores de lógica.
```

### 3 — Falta fin

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["sintaxis"]

tipo: mc
opciones_explicitas: ["Falta cerrar un `Si`", "Falta una variable", "Falta un `Leer`", "Falta un comentario"]
respuesta: "Falta cerrar un `Si`"

enunciado: "`Se esperaba FinSi`. ¿Qué indica?"

explicacion: |
  Cada estructura necesita su cierre.
```

### 4 — Sin definir

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["variables"]

tipo: mc
opciones_explicitas: ["Si falta `Definir` o si hay un error en el nombre", "La velocidad", "El color", "La versión"]
respuesta: "Si falta `Definir` o si hay un error en el nombre"

enunciado: "\"Variable no definida\". ¿Qué se revisa?"

explicacion: |
  Los nombres deben coincidir.
```

### 5 — No termina

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Un bucle infinito", "Un comentario", "Un `Definir`", "Una constante"]
respuesta: "Un bucle infinito"

enunciado: "El programa no termina nunca. ¿Cuál es la causa más probable?"

explicacion: |
  La condición nunca se vuelve falsa.
```

### 6 — Qué falta

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["infinito"]

tipo: mc
opciones_explicitas: ["Incrementar `i` dentro del bucle", "Una constante", "Un `Si`", "Un `Leer`"]
respuesta: "Incrementar `i` dentro del bucle"

enunciado: "`Mientras i <= 10 Hacer Escribir i FinMientras`, ¿qué falta?"

explicacion: |
  Sin cambio, la condición nunca cambia.
```

### 7 — No entra

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["bucle"]

tipo: mc
opciones_explicitas: ["Si la condición es falsa desde el principio o si la variable no se inicializó bien", "La velocidad", "El nombre del archivo", "Los comentarios"]
respuesta: "Si la condición es falsa desde el principio o si la variable no se inicializó bien"

enunciado: "Un bucle no se ejecuta nunca. ¿Qué se revisa?"

explicacion: |
  Se prueba el valor inicial.
```

### 8 — Una de más

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Los límites del `Para` o `<` frente a `<=`", "El nombre", "El tipo", "Las comillas"]
respuesta: "Los límites del `Para` o `<` frente a `<=`"

enunciado: "Un bucle repite una vez de más. ¿Qué se revisa?"

explicacion: |
  Es el error "por uno".
```

### 9 — Acumulador

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["acumulador"]

tipo: mc
opciones_explicitas: ["No se inicializó en 0", "Se usó `Para`", "Se usaron comentarios", "Se declaró `Real`"]
respuesta: "No se inicializó en 0"

enunciado: "Un acumulador da un valor raro. ¿Cuál es la causa frecuente?"

explicacion: |
  Es el error más común con acumuladores.
```

### 10 — Promedio

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["promedio"]

tipo: mc
opciones_explicitas: ["Que se divida por la cantidad correcta y después de sumar todo", "La fuente", "Los colores", "El tipo de variable de texto"]
respuesta: "Que se divida por la cantidad correcta y después de sumar todo"

enunciado: "El promedio da mal. ¿Qué se revisa?"

explicacion: |
  Promedio = suma / cantidad.
```

### 11 — Igual

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["condicion"]

tipo: mc
opciones_explicitas: ["La condición: `=` y `<-` confundidos, `Y` y `O` invertidos", "La velocidad", "La tabla", "El nombre de la variable"]
respuesta: "La condición: `=` y `<-` confundidos, `Y` y `O` invertidos"

enunciado: "Un `Si` siempre da el mismo resultado. ¿Qué se revisa?"

explicacion: |
  Una condición mal escrita es la causa más habitual.
```

### 12 — División

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["division"]

tipo: mc
opciones_explicitas: ["`TRUNC(7 / 2)`", "`REDON(7)`", "`7 * 2`", "`7 - 2`"]
respuesta: "`TRUNC(7 / 2)`"

enunciado: "`7 / 2` da 3.5 y se esperaba 3. ¿Qué se usa?"

explicacion: |
  La división devuelve un número real.
```

### 13 — Texto

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["Son textos, no números", "Es un error del programa", "Hay que usar `Y`", "Falta `FinSi`"]
respuesta: "Son textos, no números"

enunciado: "`\"5\" + \"3\"` no da 8. ¿Por qué?"

explicacion: |
  Se convierte con `CONVERTIRANUMERO`.
```

### 14 — Rango

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["arreglos"]

tipo: mc
opciones_explicitas: ["Que el índice es mayor al tamaño o menor a 1", "Que el arreglo está vacío", "Que falta un `Si`", "Que hay un comentario"]
respuesta: "Que el índice es mayor al tamaño o menor a 1"

enunciado: "\"Subíndice fuera de rango\". ¿Qué indica?"

explicacion: |
  Se revisan los límites del `Para`.
```

### 15 — Retorno

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
opciones_explicitas: ["Si se asignó el valor a la variable de retorno", "La velocidad", "El tamaño", "Los colores"]
respuesta: "Si se asignó el valor a la variable de retorno"

enunciado: "Una función no devuelve nada. ¿Qué se revisa?"

explicacion: |
  Es un error frecuente.
```

### 16 — Por valor

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["parametros"]

tipo: mc
opciones_explicitas: ["Se pasó por valor: trabaja con una copia", "Es un error de PSeInt", "Falta un `Si`", "Hay un bucle"]
respuesta: "Se pasó por valor: trabaja con una copia"

enunciado: "Una función modifica un parámetro pero afuera no cambia. ¿Por qué?"

explicacion: |
  Se usa paso por referencia para modificar el original.
```

### 17 — Azar

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["azar"]

tipo: mc
opciones_explicitas: ["El uso de `AZAR` o variables sin inicializar", "El nombre del programa", "Los comentarios", "La versión"]
respuesta: "El uso de `AZAR` o variables sin inicializar"

enunciado: "El resultado cambia entre ejecuciones. ¿Qué se revisa?"

explicacion: |
  Los valores aleatorios y los datos sin inicializar varían.
```

### 18 — Comparar texto

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "intermedio"
  tags: ["texto"]

tipo: mc
opciones_explicitas: ["Convertir ambos a minúsculas antes de comparar", "Ignorar", "Usar `Y`", "Usar `Para`"]
respuesta: "Convertir ambos a minúsculas antes de comparar"

enunciado: "\"Ana\" y \"ana\" no son iguales en una comparación. ¿Qué se hace?"

explicacion: |
  Los textos se comparan carácter por carácter.
```

### 19 — Paso a paso

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["herramientas"]

tipo: mc
opciones_explicitas: ["La ejecución paso a paso", "El corrector ortográfico", "La paleta de colores", "La exportación a PDF"]
respuesta: "La ejecución paso a paso"

enunciado: "¿Qué herramienta de PSeInt ayuda a ver cómo cambian las variables?"

explicacion: |
  Muestra cada instrucción.
```

### 20 — Límites

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Usar `>=`", "Usar `<`", "Usar `=`", "Usar `<>`"]
respuesta: "Usar `>=`"

enunciado: "`Si edad > 18` no permite a quien tiene 18. ¿Qué cambio corresponde?"

explicacion: |
  El límite debe incluirse si corresponde.
```

### 21 — Casos límite

```
metadata:
  materia: "pseint"
  tema: "diagnostico_por_casos"
  nivel: "basico"
  tags: ["limites"]

tipo: mc
opciones_explicitas: ["Porque en los límites aparecen muchos errores", "Porque es obligatorio", "Por tradición", "Por rapidez"]
respuesta: "Porque en los límites aparecen muchos errores"

enunciado: "¿Por qué se prueban cero, uno y el máximo?"

explicacion: |
  Con solo el caso feliz no basta.
```

