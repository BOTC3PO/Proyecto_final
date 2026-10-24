# QA y Testing — Casos negativos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué son

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Que el sistema responda bien ante datos o acciones inválidas", "Que todo funcione con datos válidos", "Que sea rápido", "Que se vea bien"]
respuesta: "Que el sistema responda bien ante datos o acciones inválidas"

enunciado: "¿Qué verifica una prueba negativa?"

explicacion: |
  El resultado esperado es un rechazo o manejo seguro del problema.
```

### 2 — Resultado esperado

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["login"]

tipo: mc
opciones_explicitas: ["Que se rechace el acceso con un mensaje claro", "Que se permita entrar", "Que el programa se cierre", "Que se borre la cuenta"]
respuesta: "Que se rechace el acceso con un mensaje claro"

enunciado: "En un caso negativo con clave incorrecta, ¿qué es lo esperado?"

explicacion: |
  Fallar de forma segura es el comportamiento correcto.
```

### 3 — Mensaje genérico

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Para no revelar qué usuarios existen", "Por ahorrar texto", "Porque es más lindo", "Porque no se puede distinguir"]
respuesta: "Para no revelar qué usuarios existen"

enunciado: "¿Por qué en un login se muestra el mismo mensaje para usuario inexistente y clave incorrecta?"

explicacion: |
  Si los mensajes difieren, un atacante puede averiguar usuarios válidos.
```

### 4 — Vacío

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Un aviso de campo obligatorio", "Que se guarde vacío", "Que se cierre el programa", "Que se complete solo"]
respuesta: "Un aviso de campo obligatorio"

enunciado: "Un campo obligatorio vacío, ¿qué debería provocar?"

explicacion: |
  Es una validación básica de entradas.
```

### 5 — Tipo equivocado

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Que se rechace con un mensaje claro", "Que se convierta a 0", "Que se guarde igual", "Que el sistema falle"]
respuesta: "Que se rechace con un mensaje claro"

enunciado: "Se escriben letras en un campo de edad. ¿Qué se espera?"

explicacion: |
  La validación debe detectar el tipo incorrecto.
```

### 6 — Correo inválido

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["validacion"]

tipo: mc
opciones_explicitas: ["Que se avise que el formato no es válido", "Que se acepte", "Que se agregue @ solo", "Que se borre"]
respuesta: "Que se avise que el formato no es válido"

enunciado: "¿Qué se espera al ingresar \"ana.com\" como correo?"

explicacion: |
  El formato de un correo debe validarse.
```

### 7 — Intentos

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Que haya bloqueo o demora", "Que no pase nada", "Que se borre la cuenta", "Que se muestre la clave"]
respuesta: "Que haya bloqueo o demora"

enunciado: "¿Qué caso negativo conviene probar tras muchos intentos fallidos de login?"

explicacion: |
  Limita los ataques de adivinación de claves.
```

### 8 — Permisos

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "intermedio"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Una falla de control de permisos", "Que todo está bien", "Un problema de velocidad", "Un problema de compatibilidad"]
respuesta: "Una falla de control de permisos"

enunciado: "Un usuario cambia el número en la URL (`/pedido/123` → `/pedido/124`) y ve el pedido de otra persona. ¿Qué indica?"

explicacion: |
  Cada recurso debe verificarse contra el usuario autenticado.
```

### 9 — Estado inválido

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["estado"]

tipo: mc
opciones_explicitas: ["Pagar un pedido que ya está pagado", "Pagar un pedido pendiente", "Crear un pedido nuevo", "Mirar un pedido"]
respuesta: "Pagar un pedido que ya está pagado"

enunciado: "¿Qué es un caso negativo de estado?"

explicacion: |
  Se prueba una acción que no corresponde al estado actual.
```

### 10 — Sin internet

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["entorno"]

tipo: mc
opciones_explicitas: ["Un aviso claro y sin perder lo escrito", "Un cierre inesperado", "Perder todo en silencio", "Guardar dos veces"]
respuesta: "Un aviso claro y sin perder lo escrito"

enunciado: "¿Qué se espera si se pierde la conexión mientras se envía un formulario?"

explicacion: |
  Las fallas del entorno son parte de las pruebas negativas.
```

### 11 — Doble envío

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "intermedio"
  tags: ["repeticion"]

tipo: mc
opciones_explicitas: ["Que se cobre una sola vez", "Que se cobre dos veces", "Que se cuelgue", "Que no haga nada nunca"]
respuesta: "Que se cobre una sola vez"

enunciado: "Se hace doble clic en \"Pagar\". ¿Qué se espera?"

explicacion: |
  Es un caso de repetición que suele generar defectos graves.
```

### 12 — Buen error

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["\"El correo no tiene un formato válido. Revisá que incluya @.\"", "\"Error 0x80004005\"", "\"Algo salió mal\" sin más", "La consulta SQL que falló"]
respuesta: "\"El correo no tiene un formato válido. Revisá que incluya @.\""

enunciado: "¿Cuál es un buen mensaje de error?"

explicacion: |
  Debe ser claro y orientar al usuario.
```

### 13 — No exponer

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Rutas internas, consultas SQL o trazas del programa", "Qué debe corregir", "Un número de referencia", "Un aviso amable"]
respuesta: "Rutas internas, consultas SQL o trazas del programa"

enunciado: "¿Qué NO debería mostrar un mensaje de error al usuario?"

explicacion: |
  Esa información ayuda a un atacante; se registra en un log.
```

### 14 — Log

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["log"]

tipo: mc
opciones_explicitas: ["En un registro (log) para el equipo", "En la pantalla del usuario", "En ningún lado", "En el correo del cliente"]
respuesta: "En un registro (log) para el equipo"

enunciado: "¿Dónde se guarda el detalle técnico de un error?"

explicacion: |
  El usuario ve un mensaje claro; el equipo ve el detalle.
```

### 15 — Pérdida

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["usabilidad"]

tipo: mc
opciones_explicitas: ["Que se conserve", "Que se borre", "Que se envíe igual", "Que se cambie"]
respuesta: "Que se conserve"

enunciado: "Si un formulario falla, ¿qué conviene que pase con lo que el usuario ya escribió?"

explicacion: |
  Perderlo frustra y genera abandono.
```

### 16 — Inyección

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "intermedio"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Que se trate como texto común, sin acceso ni errores", "Que se ejecute como código", "Que dé acceso al sistema", "Que se borre la base"]
respuesta: "Que se trate como texto común, sin acceso ni errores"

enunciado: "¿Qué se espera si en un campo de texto se escribe `' OR '1'='1`?"

explicacion: |
  Las entradas nunca deben interpretarse como código.
```

### 17 — Autorización

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["etica"]

tipo: mc
opciones_explicitas: ["Contar con autorización y probar solo en un entorno propio o permitido", "Probar en cualquier sitio", "Probar en producción de otra empresa", "Nada especial"]
respuesta: "Contar con autorización y probar solo en un entorno propio o permitido"

enunciado: "¿Qué debe hacerse antes de hacer pruebas de seguridad?"

explicacion: |
  Probar sistemas ajenos sin permiso es ilegal.
```

### 18 — Alcance

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "intermedio"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["No: son una primera defensa, no la sustituyen", "Sí, por completo", "Solo en proyectos chicos", "Solo si son automáticas"]
respuesta: "No: son una primera defensa, no la sustituyen"

enunciado: "Las pruebas negativas de validación, ¿reemplazan una revisión de seguridad profesional?"

explicacion: |
  La seguridad requiere análisis específico.
```

### 19 — Éxito

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "Una prueba negativa es exitosa cuando el sistema falla de forma insegura."

explicacion: |
  Es exitosa cuando el sistema rechaza el problema de forma segura y clara.
```

### 20 — Largo

```
metadata:
  materia: "qa-testing"
  tema: "casos_negativos"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "Un texto de 10.000 caracteres en un campo de nombre es una prueba negativa razonable."

explicacion: |
  Se verifica que haya un límite y un aviso, sin romper nada.
```

