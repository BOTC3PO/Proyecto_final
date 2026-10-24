# Backend — Autenticación y autorización (cuestionario, 25 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Autenticación

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["autenticacion"]

tipo: mc
opciones_explicitas: ["¿Quién sos?", "¿Qué podés hacer?", "¿Dónde estás?", "¿Qué hora es?"]
respuesta: "¿Quién sos?"

enunciado: "¿Qué responde la autenticación?"

explicacion: |
  Verifica la identidad.
```

### 2 — Autorización

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["autorizacion"]

tipo: mc
opciones_explicitas: ["¿Qué podés hacer?", "¿Quién sos?", "¿Cómo te llamás?", "¿Qué edad tenés?"]
respuesta: "¿Qué podés hacer?"

enunciado: "¿Qué responde la autorización?"

explicacion: |
  Verifica los permisos.
```

### 3 — Orden

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["orden"]

tipo: mc
opciones_explicitas: ["La autenticación y luego la autorización", "La autorización y luego la autenticación", "Ninguna", "Solo la autorización"]
respuesta: "La autenticación y luego la autorización"

enunciado: "¿Qué va primero?"

explicacion: |
  Primero se sabe quién es.
```

### 4 — 401

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["El usuario no está autenticado", "Autenticado sin permiso", "No existe", "Error del servidor"]
respuesta: "El usuario no está autenticado"

enunciado: "¿Qué indica el código 401?"

explicacion: |
  403 es sin permiso.
```

### 5 — 403

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["Autenticado pero sin permiso", "No autenticado", "No existe", "Éxito"]
respuesta: "Autenticado pero sin permiso"

enunciado: "¿Qué indica el código 403?"

explicacion: |
  La identidad es conocida.
```

### 6 — Texto plano

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["contrasenas"]

tipo: mc
opciones_explicitas: ["No, nunca", "Sí", "Solo en pruebas con usuarios reales", "Si la base está protegida"]
respuesta: "No, nunca"

enunciado: "¿Se pueden guardar las contraseñas en texto plano?"

explicacion: |
  Se guarda un hash.
```

### 7 — Algoritmo

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["hash"]

tipo: mc
opciones_explicitas: ["Argon2, bcrypt o scrypt", "MD5", "SHA-1", "Base64"]
respuesta: "Argon2, bcrypt o scrypt"

enunciado: "¿Qué algoritmos se usan para guardar contraseñas?"

explicacion: |
  Son lentos a propósito y con sal.
```

### 8 — Sal

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["sal"]

tipo: mc
opciones_explicitas: ["Para que dos usuarios con la misma contraseña tengan hashes distintos", "Para cifrar", "Para comprimir", "Para acelerar"]
respuesta: "Para que dos usuarios con la misma contraseña tengan hashes distintos"

enunciado: "¿Para qué sirve la sal (salt)?"

explicacion: |
  Es un valor aleatorio por usuario.
```

### 9 — Hash rápido

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["hash"]

tipo: mc
opciones_explicitas: ["Porque un atacante puede probar millones de combinaciones por segundo", "Porque ocupa mucho", "Porque se pierde", "Porque es difícil de usar"]
respuesta: "Porque un atacante puede probar millones de combinaciones por segundo"

enunciado: "¿Por qué un hash rápido es malo para contraseñas?"

explicacion: |
  Por eso se usan algoritmos lentos.
```

### 10 — Recuperación

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["recuperacion"]

tipo: mc
opciones_explicitas: ["Con un enlace de un solo uso y vencimiento", "Enviando la contraseña por correo", "Mostrando la contraseña", "Con preguntas sencillas"]
respuesta: "Con un enlace de un solo uso y vencimiento"

enunciado: "¿Cómo se recupera una contraseña de forma segura?"

explicacion: |
  Nunca se envía la contraseña.
```

### 11 — Intentos

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["intentos"]

tipo: mc
opciones_explicitas: ["Para frenar la adivinanza de contraseñas", "Para ahorrar espacio", "Por estética", "Para cobrar"]
respuesta: "Para frenar la adivinanza de contraseñas"

enunciado: "¿Por qué se limitan los intentos de inicio de sesión?"

explicacion: |
  Se usa un límite o una demora.
```

### 12 — Mensaje

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["mensajes"]

tipo: mc
opciones_explicitas: ["\"Usuario o contraseña incorrectos\"", "\"El usuario no existe\"", "\"La contraseña es incorrecta\"", "La consulta SQL"]
respuesta: "\"Usuario o contraseña incorrectos\""

enunciado: "¿Qué mensaje conviene mostrar ante un inicio de sesión fallido?"

explicacion: |
  No revela cuál de los dos falló.
```

### 13 — HttpOnly

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["cookies"]

tipo: mc
opciones_explicitas: ["Impide que el JavaScript de la página la lea", "La cifra", "La borra", "La envía por correo"]
respuesta: "Impide que el JavaScript de la página la lea"

enunciado: "¿Qué hace la opción `HttpOnly` de una cookie?"

explicacion: |
  Reduce el robo por XSS.
```

### 14 — Secure

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["cookies"]

tipo: mc
opciones_explicitas: ["Hace que solo viaje por HTTPS", "La borra", "La cifra", "La oculta"]
respuesta: "Hace que solo viaje por HTTPS"

enunciado: "¿Qué hace `Secure` en una cookie?"

explicacion: |
  Evita enviarla sin cifrar.
```

### 15 — JWT

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "avanzado"
  tags: ["jwt"]

tipo: mc
opciones_explicitas: ["No: está firmado, pero cualquiera puede leerlo", "Sí, siempre", "Solo con HTTPS", "Solo si tiene firma"]
respuesta: "No: está firmado, pero cualquiera puede leerlo"

enunciado: "¿Cifra un JWT su contenido?"

explicacion: |
  No se guardan datos sensibles.
```

### 16 — Vencimiento

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["tokens"]

tipo: mc
opciones_explicitas: ["Para limitar el daño si alguien los roba", "Por estética", "Para ahorrar", "Para ordenar"]
respuesta: "Para limitar el daño si alguien los roba"

enunciado: "¿Por qué los tokens deben vencer?"

explicacion: |
  Se renuevan con un token de refresco.
```

### 17 — URL

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["tokens"]

tipo: mc
opciones_explicitas: ["Porque quedan en historiales y registros", "Porque no cabe", "Porque es lento", "Porque es ilegal"]
respuesta: "Porque quedan en historiales y registros"

enunciado: "¿Por qué no se envían tokens en la URL?"

explicacion: |
  Van en cabeceras o cookies.
```

### 18 — MFA

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["mfa"]

tipo: mc
opciones_explicitas: ["Una contraseña robada no alcanza para entrar", "Es más rápido", "Evita las contraseñas", "Es gratis"]
respuesta: "Una contraseña robada no alcanza para entrar"

enunciado: "¿Qué ventaja tiene el MFA?"

explicacion: |
  Combina varios factores.
```

### 19 — Factores

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["mfa"]

tipo: mc
opciones_explicitas: ["Algo que sabés, algo que tenés y algo que sos", "Mayúsculas, números y símbolos", "Usuario, correo y teléfono", "HTTP, HTTPS y FTP"]
respuesta: "Algo que sabés, algo que tenés y algo que sos"

enunciado: "¿Cuáles son tres tipos de factores?"

explicacion: |
  Combinar tipos es más fuerte.
```

### 20 — SMS

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["sms"]

tipo: mc
opciones_explicitas: ["Más débil que una app o una llave física", "El más fuerte", "Inútil", "Obligatorio"]
respuesta: "Más débil que una app o una llave física"

enunciado: "¿Cómo es el SMS como segundo factor?"

explicacion: |
  Puede ser interceptado o desviado.
```

### 21 — RBAC

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["rbac"]

tipo: mc
opciones_explicitas: ["Control de acceso basado en roles", "Un tipo de base de datos", "Un protocolo de red", "Un cifrado"]
respuesta: "Control de acceso basado en roles"

enunciado: "¿Qué es RBAC?"

explicacion: |
  Los permisos se asignan a roles.
```

### 22 — Servidor

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["servidor"]

tipo: mc
opciones_explicitas: ["En el servidor, siempre", "Solo en la interfaz", "Solo en el navegador", "No hace falta"]
respuesta: "En el servidor, siempre"

enunciado: "¿Dónde se debe comprobar la autorización?"

explicacion: |
  Ocultar un botón no protege.
```

### 23 — Objetos ajenos

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["idor"]

tipo: mc
opciones_explicitas: ["El servidor no verificó que el pedido le pertenece", "La base de datos", "La interfaz", "El navegador"]
respuesta: "El servidor no verificó que el pedido le pertenece"

enunciado: "Un usuario cambia `/pedidos/124` por `/pedidos/125` y ve un pedido ajeno. ¿Qué falló?"

explicacion: |
  Se debe validar la propiedad del recurso.
```

### 24 — OAuth

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "intermedio"
  tags: ["oauth"]

tipo: mc
opciones_explicitas: ["Un protocolo de autorización delegada", "Un cifrado", "Un lenguaje", "Una base de datos"]
respuesta: "Un protocolo de autorización delegada"

enunciado: "¿Qué es OAuth 2.0?"

explicacion: |
  Da acceso limitado sin compartir la contraseña.
```

### 25 — Bibliotecas

```
metadata:
  materia: "backend"
  tema: "autenticacion_y_autorizacion"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Bibliotecas probadas", "Algo propio", "Base64", "Un esquema secreto"]
respuesta: "Bibliotecas probadas"

enunciado: "¿Qué conviene usar en vez de inventar un esquema propio de cifrado?"

explicacion: |
  La seguridad por oscuridad no funciona.
```

