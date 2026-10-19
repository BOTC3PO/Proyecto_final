# UX y diseño — Formularios y microinteracciones (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Pedir lo necesario

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

enunciado: "La regla de base al diseñar un formulario es..."
tipo: mc
opciones_explicitas:
  - "Pedir solo lo necesario"
  - "Pedir todos los datos posibles"
  - "Ocultar los campos obligatorios"
respuesta: "Pedir solo lo necesario"

explicacion: |
  Cada campo de más cuesta atención.
```

### 2 — Placeholder

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "El texto de ayuda dentro del campo (placeholder) reemplaza a la etiqueta visible."

explicacion: |
  Desaparece al escribir; no reemplaza a la etiqueta.
```

### 3 — Columnas

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un formulario se completa más rápido y con menos errores cuando tiene..."
tipo: mc
opciones_explicitas:
  - "Una sola columna"
  - "Cuatro columnas"
  - "Campos mezclados al azar"
respuesta: "Una sola columna"

explicacion: |
  El recorrido es más claro.
```

### 4 — Tipo de campo

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Para un número de teléfono conviene un campo que muestre..."
tipo: mc
opciones_explicitas:
  - "Teclado numérico"
  - "Teclado de emojis"
  - "Selector de colores"
respuesta: "Teclado numérico"

explicacion: |
  Elegir el tipo correcto agiliza la carga.
```

### 5 — Obligatorios

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

enunciado: "En un formulario hay que indicar claramente..."
tipo: mc
opciones_explicitas:
  - "Qué campos son obligatorios y cuáles opcionales"
  - "Solo el color de fondo"
  - "El nombre del programador"
respuesta: "Qué campos son obligatorios y cuáles opcionales"

explicacion: |
  Evita errores al enviar.
```

### 6 — Botón

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un buen texto para el botón principal de un formulario de registro es..."
tipo: mc
opciones_explicitas:
  - "'Crear cuenta'"
  - "'Aceptar'"
  - "'OK'"
respuesta: "'Crear cuenta'"

explicacion: |
  Dice qué hace.
```

### 7 — Pasos

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Un formulario largo conviene dividirlo..."
tipo: mc
opciones_explicitas:
  - "En pasos con indicador de progreso"
  - "En una página interminable"
  - "En ventanas emergentes aleatorias"
respuesta: "En pasos con indicador de progreso"

explicacion: |
  Cada paso resulta manejable.
```

### 8 — Validación en línea

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "La validación en línea consiste en..."
tipo: mc
opciones_explicitas:
  - "Comprobar cada campo al salir de él"
  - "Comprobar solo después de enviar"
  - "No comprobar nada"
respuesta: "Comprobar cada campo al salir de él"

explicacion: |
  Permite corregir enseguida.
```

### 9 — Durante la escritura

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "avanzado"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Conviene marcar un error mientras la persona todavía está escribiendo el campo."

explicacion: |
  Se valida al salir del campo, no durante la escritura.
```

### 10 — Mensaje de error

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

enunciado: "¿Qué mensaje de error es mejor?"
tipo: mc
opciones_explicitas:
  - "'La contraseña necesita al menos 8 caracteres'"
  - "'Entrada inválida'"
  - "'Error'"
respuesta: "'La contraseña necesita al menos 8 caracteres'"

explicacion: |
  Explica qué pasó y cómo arreglarlo.
```

### 11 — Ubicación del error

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "El mensaje de error debería aparecer..."
tipo: mc
opciones_explicitas:
  - "Junto al campo que falló"
  - "En otra página"
  - "Solo por correo"
respuesta: "Junto al campo que falló"

explicacion: |
  Así se asocia con el problema.
```

### 12 — Solo color

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: falso
tipo: vf

enunciado: "Basta con pintar el borde del campo de rojo para señalar un error."

explicacion: |
  No debe depender solo del color; hay que sumar texto o ícono.
```

### 13 — Conservar datos

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Tras un error, el formulario debería conservar lo que la persona ya escribió."

explicacion: |
  Perder lo ingresado es frustrante.
```

### 14 — Formato flexible

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Para prevenir errores en un teléfono conviene..."
tipo: mc
opciones_explicitas:
  - "Aceptar formatos variados (con o sin guiones)"
  - "Rechazar cualquier formato distinto"
  - "No pedir teléfono"
respuesta: "Aceptar formatos variados (con o sin guiones)"

explicacion: |
  El sistema se adapta a la persona.
```

### 15 — Microinteracción

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Una microinteracción es..."
tipo: mc
opciones_explicitas:
  - "Una respuesta pequeña de la interfaz a una acción"
  - "Un anuncio publicitario"
  - "Un tipo de fuente"
respuesta: "Una respuesta pequeña de la interfaz a una acción"

explicacion: |
  Por ejemplo, el corazón que se llena al marcar favorito.
```

### 16 — Función

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una función de las microinteracciones es..."
tipo: mc
opciones_explicitas:
  - "Confirmar que la acción se registró"
  - "Hacer esperar al usuario"
  - "Ocultar errores"
respuesta: "Confirmar que la acción se registró"

explicacion: |
  Es la visibilidad del estado.
```

### 17 — Animaciones largas

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Una animación larga y decorativa que hace esperar es un defecto."

explicacion: |
  Debe ser breve y útil.
```

### 18 — Movimiento reducido

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "avanzado"
  tags: ["ux"]

enunciado: "Respetar la preferencia de movimiento reducido del sistema significa..."
tipo: mc
opciones_explicitas:
  - "Limitar o quitar animaciones para quien lo configuró"
  - "Hacer las animaciones más rápidas para todos"
  - "Eliminar los botones"
respuesta: "Limitar o quitar animaciones para quien lo configuró"

explicacion: |
  Es un tema de accesibilidad.
```

### 19 — Estado vacío

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "intermedio"
  tags: ["ux"]

enunciado: "Una lista sin datos debería..."
tipo: mc
opciones_explicitas:
  - "Explicar qué hacer a continuación"
  - "Quedar en blanco"
  - "Mostrar un error"
respuesta: "Explicar qué hacer a continuación"

explicacion: |
  El estado vacío también se diseña.
```

### 20 — Estado de carga

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

enunciado: "Mientras se cargan datos, la interfaz debería mostrar..."
tipo: mc
opciones_explicitas:
  - "Un indicador de carga"
  - "Una pantalla en blanco"
  - "Un mensaje de error"
respuesta: "Un indicador de carga"

explicacion: |
  Evita que la persona dude.
```

### 21 — Estados

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

tipo: completar
enunciado: "Cada componente debería tener definido su estado normal, con foco, desactivado, cargando, vacío, error y ___."
respuestas_validas:
  - "éxito"

explicacion: |
  Los estados olvidados generan pantallas confusas.
```

### 22 — Agrupar

```
metadata:
  materia: "diseño"
  tema: "formularios_y_microinteracciones"
  nivel: "basico"
  tags: ["ux"]

respuesta: verdadero
tipo: vf

enunciado: "Agrupar campos relacionados con títulos de sección facilita completar el formulario."

explicacion: |
  Organiza el recorrido.
```
