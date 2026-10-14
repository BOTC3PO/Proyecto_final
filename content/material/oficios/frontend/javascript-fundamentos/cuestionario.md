# Frontend — JavaScript fundamentos (cuestionario, 30 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — JS

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["js"]

tipo: mc
opciones_explicitas: ["El lenguaje de programación de la web, que da comportamiento a las páginas", "Un lenguaje de estilos", "Un lenguaje de marcado", "Lo mismo que Java"]
respuesta: "El lenguaje de programación de la web, que da comportamiento a las páginas"

enunciado: "¿Qué es JavaScript?"

explicacion: |
  No tiene relación con Java.
```

### 2 — Dónde

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["entorno"]

tipo: mc
opciones_explicitas: ["En el navegador y también en servidores con Node.js", "Solo en el navegador", "Solo en servidores", "En ningún lado"]
respuesta: "En el navegador y también en servidores con Node.js"

enunciado: "¿Dónde se ejecuta JavaScript?"

explicacion: |
  Es muy versátil.
```

### 3 — Const

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["const"]

tipo: mc
opciones_explicitas: ["Que la variable no se reasigna", "Que no se puede leer", "Que es global", "Que es un texto"]
respuesta: "Que la variable no se reasigna"

enunciado: "¿Qué significa declarar con `const`?"

explicacion: |
  Se prefiere por defecto.
```

### 4 — Let

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["let"]

tipo: mc
opciones_explicitas: ["`let`", "`const`", "`final`", "`static`"]
respuesta: "`let`"

enunciado: "¿Qué declaración permite reasignar el valor?"

explicacion: |
  También existe `var`, que se evita.
```

### 5 — Tipos

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["`string`", "`array`", "`object`", "`function`"]
respuesta: "`string`"

enunciado: "¿Cuál es un tipo primitivo de JavaScript?"

explicacion: |
  Los arreglos y objetos son de referencia.
```

### 6 — Estricta

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["igualdad"]

tipo: mc
opciones_explicitas: ["Valor y tipo", "Solo valor", "Solo tipo", "Solo longitud"]
respuesta: "Valor y tipo"

enunciado: "¿Qué compara el operador `===`?"

explicacion: |
  Es la comparación recomendada.
```

### 7 — Doble igual

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["igualdad"]

tipo: mc
opciones_explicitas: ["`true`, porque convierte los tipos", "`false`", "Un error", "`undefined`"]
respuesta: "`true`, porque convierte los tipos"

enunciado: "¿Cuánto da `\"5\" == 5`?"

explicacion: |
  Por eso se prefiere `===`.
```

### 8 — Suma

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["conversion"]

tipo: mc
opciones_explicitas: ["`\"53\"` (texto)", "8", "2", "Un error"]
respuesta: "`\"53\"` (texto)"

enunciado: "¿Cuánto da `\"5\" + 3`?"

explicacion: |
  El `+` concatena si hay un texto.
```

### 9 — Resta

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["conversion"]

tipo: mc
opciones_explicitas: ["2", "`\"53\"`", "`\"2\"`", "Un error"]
respuesta: "2"

enunciado: "¿Cuánto da `\"5\" - 3`?"

explicacion: |
  El `-` convierte a número.
```

### 10 — Plantilla

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["plantillas"]

tipo: mc
opciones_explicitas: ["Permiten insertar variables con `${{...}}` de forma clara", "Son más rápidas", "Evitan errores siempre", "Son obligatorias"]
respuesta: "Permiten insertar variables con `${{...}}` de forma clara"

enunciado: "¿Qué ventaja tienen las plantillas de texto (comillas invertidas)?"

explicacion: |
  Por ejemplo, `Hola, ${{nombre}}`.
```

### 11 — Falsy

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["falsy"]

tipo: mc
opciones_explicitas: ["`0`", "`\"0\"`", "`[]`", "`{{}}`"]
respuesta: "`0`"

enunciado: "¿Cuál es un valor falso en un `if`?"

explicacion: |
  Los falsos son `false`, `0`, `""`, `null`, `undefined`, `NaN`.
```

### 12 — If

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["if"]

tipo: mc
opciones_explicitas: ["Ejecuta el bloque solo si la condición es verdadera", "Siempre ejecuta", "Nunca ejecuta", "Repite el bloque"]
respuesta: "Ejecuta el bloque solo si la condición es verdadera"

enunciado: "¿Qué hace `if (edad >= 18) {{ ... }}`?"

explicacion: |
  Es un condicional.
```

### 13 — For

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["for"]

tipo: mc
opciones_explicitas: ["5", "4", "6", "1"]
respuesta: "5"

enunciado: "¿Cuántas veces se ejecuta `for (let i = 0; i < 5; i++)`?"

explicacion: |
  i vale 0, 1, 2, 3 y 4.
```

### 14 — Ternario

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["ternario"]

tipo: mc
opciones_explicitas: ["Devuelve \"mayor\" o \"menor\" según la condición", "Compara dos textos", "Es un error", "Repite un valor"]
respuesta: "Devuelve \"mayor\" o \"menor\" según la condición"

enunciado: "¿Qué hace `edad >= 18 ? \"mayor\" : \"menor\"`?"

explicacion: |
  Es un condicional en una expresión.
```

### 15 — Función

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
opciones_explicitas: ["Devuelve un valor y termina la función", "Imprime en pantalla", "Declara una variable", "Repite la función"]
respuesta: "Devuelve un valor y termina la función"

enunciado: "¿Qué hace `return` en una función?"

explicacion: |
  Sin `return`, devuelve `undefined`.
```

### 16 — Flecha

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["flecha"]

tipo: mc
opciones_explicitas: ["Una función flecha que devuelve el doble de `n`", "Una variable", "Un arreglo", "Un error"]
respuesta: "Una función flecha que devuelve el doble de `n`"

enunciado: "¿Qué es `(n) => n * 2`?"

explicacion: |
  Es una forma corta de escribir funciones.
```

### 17 — Callback

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["callback"]

tipo: mc
opciones_explicitas: ["Una función que se pasa a otra para que la ejecute después", "Un error", "Una variable", "Un evento del teclado"]
respuesta: "Una función que se pasa a otra para que la ejecute después"

enunciado: "¿Qué es un callback?"

explicacion: |
  Por ejemplo, la función de `addEventListener`.
```

### 18 — Alcance

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["alcance"]

tipo: mc
opciones_explicitas: ["No", "Sí", "Solo con `let`", "Solo con `const`"]
respuesta: "No"

enunciado: "Una variable declarada dentro de una función, ¿existe fuera de ella?"

explicacion: |
  Es una variable local.
```

### 19 — Push

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["arreglos"]

tipo: mc
opciones_explicitas: ["Agrega el 7 al final del arreglo", "Lo quita", "Lo ordena", "Lo cuenta"]
respuesta: "Agrega el 7 al final del arreglo"

enunciado: "¿Qué hace `notas.push(7)`?"

explicacion: |
  Modifica el arreglo.
```

### 20 — Map

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["map"]

tipo: mc
opciones_explicitas: ["Un arreglo nuevo con cada elemento duplicado", "El mismo arreglo", "Un número", "Un texto"]
respuesta: "Un arreglo nuevo con cada elemento duplicado"

enunciado: "¿Qué devuelve `notas.map(n => n * 2)`?"

explicacion: |
  No modifica el original.
```

### 21 — Filter

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["filter"]

tipo: mc
opciones_explicitas: ["Devuelve un arreglo con las notas de 6 o más", "Borra las notas", "Las suma", "Las ordena"]
respuesta: "Devuelve un arreglo con las notas de 6 o más"

enunciado: "¿Qué hace `notas.filter(n => n >= 6)`?"

explicacion: |
  Filtra por una condición.
```

### 22 — Reduce

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["reduce"]

tipo: mc
opciones_explicitas: ["Para acumular todos los elementos en un solo valor", "Para borrar", "Para buscar", "Para ordenar"]
respuesta: "Para acumular todos los elementos en un solo valor"

enunciado: "¿Para qué sirve `reduce`?"

explicacion: |
  Por ejemplo, una suma.
```

### 23 — Sort

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "avanzado"
  tags: ["sort"]

tipo: mc
opciones_explicitas: ["Como texto", "Como números", "Al azar", "No ordena"]
respuesta: "Como texto"

enunciado: "¿Cómo ordena `sort()` por defecto?"

explicacion: |
  Para números hay que pasar una función de comparación.
```

### 24 — DOM

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["dom"]

tipo: mc
opciones_explicitas: ["La representación en objetos de la página, que JavaScript puede leer y modificar", "Un lenguaje", "Un archivo", "Una base de datos"]
respuesta: "La representación en objetos de la página, que JavaScript puede leer y modificar"

enunciado: "¿Qué es el DOM?"

explicacion: |
  Permite cambiar el contenido.
```

### 25 — Query

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["queryselector"]

tipo: mc
opciones_explicitas: ["Elige el elemento con id `guardar`", "Crea un elemento", "Borra un elemento", "Guarda un archivo"]
respuesta: "Elige el elemento con id `guardar`"

enunciado: "¿Qué hace `document.querySelector(\"#guardar\")`?"

explicacion: |
  Usa selectores CSS.
```

### 26 — Evento

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "basico"
  tags: ["eventos"]

tipo: mc
opciones_explicitas: ["Ejecuta una función cuando se hace clic", "Crea un botón", "Cambia el color", "Carga una imagen"]
respuesta: "Ejecuta una función cuando se hace clic"

enunciado: "¿Qué hace `addEventListener(\"click\", ...)`?"

explicacion: |
  Es la base de la interactividad.
```

### 27 — textContent

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["xss"]

tipo: mc
opciones_explicitas: ["Porque `innerHTML` permite inyectar HTML y ataques XSS", "Porque es más largo", "Porque es más lento", "Porque no funciona"]
respuesta: "Porque `innerHTML` permite inyectar HTML y ataques XSS"

enunciado: "¿Por qué se prefiere `textContent` a `innerHTML` con datos de usuarios?"

explicacion: |
  `textContent` trata todo como texto.
```

### 28 — Prevent

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["eventos"]

tipo: mc
opciones_explicitas: ["Evita el comportamiento por defecto, como enviar un formulario", "Borra el evento", "Repite el evento", "Cierra la página"]
respuesta: "Evita el comportamiento por defecto, como enviar un formulario"

enunciado: "¿Qué hace `event.preventDefault()`?"

explicacion: |
  Se usa en formularios y enlaces.
```

### 29 — Async

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "intermedio"
  tags: ["async"]

tipo: mc
opciones_explicitas: ["Para esperar el resultado de una operación asíncrona", "Para pausar para siempre", "Para borrar datos", "Para repetir"]
respuesta: "Para esperar el resultado de una operación asíncrona"

enunciado: "¿Para qué se usa `await` con `fetch`?"

explicacion: |
  Se usa dentro de una función `async`.
```

### 30 — Ok

```
metadata:
  materia: "frontend"
  tema: "javascript_fundamentos"
  nivel: "avanzado"
  tags: ["fetch"]

tipo: mc
opciones_explicitas: ["Porque `fetch` no falla con códigos de error como 404", "Porque es opcional", "Porque es más rápido", "Porque se cierra la página"]
respuesta: "Porque `fetch` no falla con códigos de error como 404"

enunciado: "¿Por qué se comprueba `respuesta.ok` tras un `fetch`?"

explicacion: |
  Hay que verificar el estado.
```

