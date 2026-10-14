# Frontend — TypeScript fundamentos (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — TS

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["ts"]

tipo: mc
opciones_explicitas: ["JavaScript con tipos estáticos", "Un lenguaje distinto sin relación", "Una base de datos", "Un framework de estilos"]
respuesta: "JavaScript con tipos estáticos"

enunciado: "¿Qué es TypeScript?"

explicacion: |
  Se compila a JavaScript.
```

### 2 — Ejecución

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["compilacion"]

tipo: mc
opciones_explicitas: ["No: se compila a JavaScript", "Sí", "Solo Chrome", "Solo con extensiones"]
respuesta: "No: se compila a JavaScript"

enunciado: "¿Ejecutan los navegadores TypeScript directamente?"

explicacion: |
  Se convierte a `.js` antes.
```

### 3 — Ventaja

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["ventajas"]

tipo: mc
opciones_explicitas: ["Detectar errores antes de ejecutar", "Hace el código más rápido", "Elimina todos los errores", "No requiere compilar"]
respuesta: "Detectar errores antes de ejecutar"

enunciado: "¿Cuál es una ventaja de TypeScript?"

explicacion: |
  También da mejor autocompletado.
```

### 4 — Tipos en ejecución

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["tipos"]

tipo: mc
opciones_explicitas: ["No: solo existen al compilar", "Sí", "Solo en Node", "Solo con `strict`"]
respuesta: "No: solo existen al compilar"

enunciado: "¿Existen los tipos de TypeScript cuando el programa se ejecuta?"

explicacion: |
  Por eso hay que validar los datos externos.
```

### 5 — Anotación

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["anotacion"]

tipo: mc
opciones_explicitas: ["`let edad: number = 15;`", "`let number edad = 15;`", "`number edad: 15`", "`let edad as number`"]
respuesta: "`let edad: number = 15;`"

enunciado: "¿Cómo se declara una variable `edad` de tipo número?"

explicacion: |
  El tipo va después de los dos puntos.
```

### 6 — Inferencia

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["inferencia"]

tipo: mc
opciones_explicitas: ["Que el compilador deduzca el tipo sin que se escriba", "Escribir todos los tipos", "Ignorar los tipos", "Cambiar los tipos"]
respuesta: "Que el compilador deduzca el tipo sin que se escriba"

enunciado: "¿Qué es la inferencia de tipos?"

explicacion: |
  `let n = 5` ya es `number`.
```

### 7 — Any

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["any"]

tipo: mc
opciones_explicitas: ["Desactiva la comprobación de tipos", "Obliga a comprobar", "Es un número", "Es un texto"]
respuesta: "Desactiva la comprobación de tipos"

enunciado: "¿Qué hace el tipo `any`?"

explicacion: |
  Se evita.
```

### 8 — Unknown

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["unknown"]

tipo: mc
opciones_explicitas: ["`unknown` obliga a comprobar el tipo antes de usarlo", "Es lo mismo", "Es más permisivo", "Es solo para números"]
respuesta: "`unknown` obliga a comprobar el tipo antes de usarlo"

enunciado: "¿Qué diferencia tiene `unknown` frente a `any`?"

explicacion: |
  Es más seguro.
```

### 9 — Arreglo

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["arreglos"]

tipo: mc
opciones_explicitas: ["`number[]`", "`array<number>` solamente", "`[number]` siempre", "`list number`"]
respuesta: "`number[]`"

enunciado: "¿Cómo se declara un arreglo de números?"

explicacion: |
  También `Array<number>`.
```

### 10 — Unión

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["union"]

tipo: mc
opciones_explicitas: ["El valor puede ser texto o número", "Debe ser ambos", "No es válido", "Es una función"]
respuesta: "El valor puede ser texto o número"

enunciado: "¿Qué significa `string | number`?"

explicacion: |
  Es una unión.
```

### 11 — Literal

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["literal"]

tipo: mc
opciones_explicitas: ["El valor solo puede ser uno de esos dos textos", "Cualquier texto", "Un número", "Nada"]
respuesta: "El valor solo puede ser uno de esos dos textos"

enunciado: "¿Qué restringe el tipo `\"admin\" | \"alumno\"`?"

explicacion: |
  Es un tipo literal.
```

### 12 — Opcional

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["opcional"]

tipo: mc
opciones_explicitas: ["La propiedad es opcional", "Es obligatoria", "Es privada", "Es de solo lectura"]
respuesta: "La propiedad es opcional"

enunciado: "¿Qué significa `correo?: string` en una interfaz?"

explicacion: |
  Puede faltar.
```

### 13 — Readonly

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["readonly"]

tipo: mc
opciones_explicitas: ["Impide cambiarla después de asignarla", "Hace la propiedad opcional", "La oculta", "La borra"]
respuesta: "Impide cambiarla después de asignarla"

enunciado: "¿Qué hace `readonly` en una propiedad?"

explicacion: |
  Solo comprobación de tipos.
```

### 14 — Retorno

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["funciones"]

tipo: mc
opciones_explicitas: ["El tipo del valor que devuelve la función", "El tipo de un parámetro", "Un nombre", "Una clase"]
respuesta: "El tipo del valor que devuelve la función"

enunciado: "¿Qué indica `: number` en `function f(): number`?"

explicacion: |
  Se anota el retorno.
```

### 15 — Void

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["void"]

tipo: mc
opciones_explicitas: ["Que la función no devuelve valor", "Que devuelve texto", "Que no existe", "Que es privada"]
respuesta: "Que la función no devuelve valor"

enunciado: "¿Qué indica `void`?"

explicacion: |
  Ejemplo: una función que solo imprime.
```

### 16 — Interface

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["interface"]

tipo: mc
opciones_explicitas: ["La forma de un objeto", "Una función", "Una carpeta", "Un archivo"]
respuesta: "La forma de un objeto"

enunciado: "¿Qué describe una `interface`?"

explicacion: |
  Define propiedades y sus tipos.
```

### 17 — Estructural

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "avanzado"
  tags: ["estructural"]

tipo: mc
opciones_explicitas: ["Que un objeto es compatible si tiene la forma requerida", "Que solo acepta clases", "Que ignora tipos", "Que requiere herencia"]
respuesta: "Que un objeto es compatible si tiene la forma requerida"

enunciado: "¿Qué significa que TypeScript sea estructural?"

explicacion: |
  No importa de qué clase venga.
```

### 18 — Estrechamiento

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["estrechamiento"]

tipo: mc
opciones_explicitas: ["Que el compilador deduzca el tipo concreto tras una comprobación como `typeof`", "Reducir el archivo", "Eliminar variables", "Cambiar de lenguaje"]
respuesta: "Que el compilador deduzca el tipo concreto tras una comprobación como `typeof`"

enunciado: "¿Qué es el estrechamiento de tipos?"

explicacion: |
  Dentro del `if`, el valor ya es un `string`.
```

### 19 — Genéricos

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["genericos"]

tipo: mc
opciones_explicitas: ["Para escribir código que funciona con varios tipos sin perder la comprobación", "Para ignorar tipos", "Para borrar tipos", "Para dibujar"]
respuesta: "Para escribir código que funciona con varios tipos sin perder la comprobación"

enunciado: "¿Para qué sirven los genéricos?"

explicacion: |
  Por ejemplo, `Array<T>`.
```

### 20 — Strict

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "basico"
  tags: ["strict"]

tipo: mc
opciones_explicitas: ["Para activar las comprobaciones más útiles", "Para acelerar", "Para quitar tipos", "Para cifrar"]
respuesta: "Para activar las comprobaciones más útiles"

enunciado: "¿Para qué se activa `strict: true`?"

explicacion: |
  Se recomienda.
```

### 21 — Datos externos

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Porque los tipos no existen en ese momento", "Porque es lento", "Porque es obligatorio por ley", "Por estética"]
respuesta: "Porque los tipos no existen en ese momento"

enunciado: "¿Por qué se validan los datos que llegan de una API en ejecución?"

explicacion: |
  Se pueden usar bibliotecas de validación.
```

### 22 — Aserción

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "avanzado"
  tags: ["as"]

tipo: mc
opciones_explicitas: ["Le dice al compilador que confíe en que es un `string`", "Convierte el valor", "Valida el valor", "Borra el valor"]
respuesta: "Le dice al compilador que confíe en que es un `string`"

enunciado: "¿Qué hace `valor as string`?"

explicacion: |
  No comprueba nada en ejecución.
```

### 23 — Private

```
metadata:
  materia: "frontend"
  tema: "typescript_fundamentos"
  nivel: "intermedio"
  tags: ["private"]

tipo: mc
opciones_explicitas: ["Restringe el acceso al interior de la clase", "Lo hace público", "Lo borra", "Lo hereda"]
respuesta: "Restringe el acceso al interior de la clase"

enunciado: "¿Qué hace `private` en una clase?"

explicacion: |
  Solo comprobación de tipos.
```

