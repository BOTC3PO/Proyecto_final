# Backend — Validación y manejo de errores (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta.

---
### 1 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Porque cualquiera puede enviar peticiones sin pasar por la interfaz", "Porque el navegador no existe", "Porque es más lento validar en el cliente", "Porque el cliente nunca se equivoca"]
respuesta: "Porque cualquiera puede enviar peticiones sin pasar por la interfaz"

enunciado: "¿Por qué el servidor debe validar aunque el formulario ya lo haga?"

explicacion: |
  La validación del cliente es solo una comodidad.
```

### 2 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Comprobar que cumple lo esperado antes de usarla", "Guardarla sin mirar", "Cifrarla siempre", "Ignorarla"]
respuesta: "Comprobar que cumple lo esperado antes de usarla"

enunciado: "¿Qué significa validar una entrada?"

explicacion: |
  Se acepta o se rechaza.
```

### 3 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["validacion"]

tipo: completar
enunciado: "Validar significa aceptar o ___ un dato según reglas definidas."
respuestas_validas:
  - "rechazar"

explicacion: |
  Sanear, en cambio, transforma el dato.
```

### 4 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["La edad debe estar entre 0 y 120", "El correo debe tener arroba", "El campo es obligatorio", "La clave debe cifrarse"]
respuesta: "La edad debe estar entre 0 y 120"

enunciado: "¿Cuál de estas es una validación de rango?"

explicacion: |
  Comprueba que el valor esté dentro de límites razonables.
```

### 5 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: vf
respuesta: verdadero

enunciado: "Es preferible definir una lista de lo permitido que una lista de lo prohibido."

explicacion: |
  No se puede prever todo lo que alguien podría enviar.
```

### 6 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: vf
respuesta: falso

enunciado: "Validar y sanear son exactamente lo mismo."

explicacion: |
  Validar acepta o rechaza; sanear transforma el dato.
```

### 7 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Del negocio, que depende del estado del sistema", "Solo de formato", "Del navegador", "De la red"]
respuesta: "Del negocio, que depende del estado del sistema"

enunciado: "Que no exista ya un usuario con ese correo es una validación..."

explicacion: |
  No se resuelve mirando solo el texto.
```

### 8 — Tipos error

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["tipos_error"]

tipo: mc
opciones_explicitas: ["La contraseña es incorrecta", "La base de datos se cayó", "Un fallo de programación", "Se cortó la conexión de red del servidor"]
respuesta: "La contraseña es incorrecta"

enunciado: "¿Cuál es un error esperado?"

explicacion: |
  Forma parte del funcionamiento normal.
```

### 9 — Tipos error

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["tipos_error"]

tipo: mc
opciones_explicitas: ["La base de datos no responde", "Falta un campo obligatorio", "El usuario no existe", "El formato del correo es inválido"]
respuesta: "La base de datos no responde"

enunciado: "¿Cuál es un error inesperado?"

explicacion: |
  Es una falla del propio sistema.
```

### 10 — Tipos error

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["tipos_error"]

tipo: mc
opciones_explicitas: ["Registrar el detalle internamente y responder de forma genérica", "Mostrar al cliente el rastro completo de la pila", "Ignorarlo", "Devolver un 200"]
respuesta: "Registrar el detalle internamente y responder de forma genérica"

enunciado: "Ante un error inesperado, ¿qué conviene hacer?"

explicacion: |
  El cliente no puede resolverlo y el detalle puede ayudar a un atacante.
```

### 11 — Tipos error

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "avanzado"
  tags: ["tipos_error"]

tipo: vf
respuesta: verdadero

enunciado: "Tratar todos los errores como inesperados llena el registro de ruido."

explicacion: |
  Los errores esperados no deberían alarmar al equipo.
```

### 12 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["404", "200", "401", "500"]
respuesta: "404"

enunciado: "¿Qué código HTTP corresponde a un recurso que no existe?"

explicacion: |
  Es el código de recurso no encontrado.
```

### 13 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["401", "403", "404", "409"]
respuesta: "401"

enunciado: "¿Qué código indica que falta autenticación?"

explicacion: |
  No se sabe quién hace la petición.
```

### 14 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["403", "401", "404", "500"]
respuesta: "403"

enunciado: "¿Qué código indica que la persona está identificada pero no tiene permiso?"

explicacion: |
  Diferente del 401: aquí sí se sabe quién es.
```

### 15 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["409", "200", "301", "503"]
respuesta: "409"

enunciado: "¿Qué código se usa para un conflicto con el estado actual, como un correo ya registrado?"

explicacion: |
  Indica que la petición choca con el estado del recurso.
```

### 16 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["5xx", "2xx", "3xx", "4xx"]
respuesta: "5xx"

enunciado: "¿A qué familia pertenecen los errores del servidor?"

explicacion: |
  El más común es el 500.
```

### 17 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "basico"
  tags: ["codigos"]

tipo: completar
enunciado: "Los errores del cliente se agrupan en la familia ___."
respuestas_validas:
  - "4xx"

explicacion: |
  Por ejemplo 400, 401, 403 y 404.
```

### 18 — Codigos

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["codigos"]

tipo: vf
respuesta: falso

enunciado: "Una falla interna del servidor debe responderse con un código de la familia 4xx."

explicacion: |
  Corresponde 5xx: el problema no está en lo que envió el cliente.
```

### 19 — Mensajes

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["mensajes"]

tipo: mc
opciones_explicitas: ["Qué corregir, sin revelar detalles internos", "El texto de la consulta SQL", "El rastro de la pila de llamadas", "La versión exacta del software"]
respuesta: "Qué corregir, sin revelar detalles internos"

enunciado: "¿Qué debería contener un mensaje de error útil?"

explicacion: |
  Los detalles internos ayudan a quien busca vulnerabilidades.
```

### 20 — Mensajes

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["mensajes"]

tipo: vf
respuesta: verdadero

enunciado: "Conviene que todas las respuestas de error tengan la misma estructura."

explicacion: |
  Así el cliente puede procesarlas de forma uniforme.
```

### 21 — Mensajes

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "avanzado"
  tags: ["mensajes"]

tipo: mc
opciones_explicitas: ["Para encontrar rápido el caso si el cliente lo reporta", "Para cifrar la respuesta", "Para acelerar la base", "Para evitar la validación"]
respuesta: "Para encontrar rápido el caso si el cliente lo reporta"

enunciado: "¿Para qué sirve incluir un identificador de error en la respuesta y en el registro?"

explicacion: |
  Une lo que ve el cliente con el detalle interno.
```

### 22 — Ejemplo

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["ejemplo"]

tipo: mc
opciones_explicitas: ["Un 400 o 422 indicando el campo faltante", "Un 500", "Un 200 con la lista vacía", "Un 404"]
respuesta: "Un 400 o 422 indicando el campo faltante"

enunciado: "Llega una petición sin el campo correo. ¿Qué respuesta es adecuada?"

explicacion: |
  Es un error del cliente y se informa qué corregir.
```

### 23 — Validacion

```
metadata:
  materia: "backend"
  tema: "validacion_y_manejo_de_errores"
  nivel: "intermedio"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Lo antes posible, en el borde del sistema", "Al final, antes de responder", "Solo en el navegador", "Nunca"]
respuesta: "Lo antes posible, en el borde del sistema"

enunciado: "La validación debería hacerse..."

explicacion: |
  Así el resto del código trabaja con datos confiables.
```
