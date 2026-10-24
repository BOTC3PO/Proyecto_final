# Backend — Arquitectura de servidores (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Servidor

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["servidor"]

tipo: mc
opciones_explicitas: ["Un programa que espera peticiones de clientes y responde", "Un navegador", "Un teclado", "Un monitor"]
respuesta: "Un programa que espera peticiones de clientes y responde"

enunciado: "¿Qué es un servidor?"

explicacion: |
  También se llama así a la máquina que lo ejecuta.
```

### 2 — Proxy

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["proxy"]

tipo: mc
opciones_explicitas: ["Recibe las peticiones y las reenvía a la aplicación", "Compila el código", "Guarda datos", "Envía correos"]
respuesta: "Recibe las peticiones y las reenvía a la aplicación"

enunciado: "¿Qué hace un proxy inverso?"

explicacion: |
  También puede aplicar HTTPS y entregar archivos estáticos.
```

### 3 — Estáticos

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["estaticos"]

tipo: mc
opciones_explicitas: ["Archivos que se entregan tal cual, como imágenes y CSS", "Archivos que cambian siempre", "Programas", "Bases de datos"]
respuesta: "Archivos que se entregan tal cual, como imágenes y CSS"

enunciado: "¿Qué son los archivos estáticos?"

explicacion: |
  El servidor web los entrega sin ejecutar lógica.
```

### 4 — Aplicación

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["aplicacion"]

tipo: mc
opciones_explicitas: ["La lógica de negocio", "Los archivos estáticos", "Las imágenes", "Las copias de seguridad"]
respuesta: "La lógica de negocio"

enunciado: "¿Qué contiene la capa de aplicación?"

explicacion: |
  Rutas, validaciones y reglas.
```

### 5 — Base de datos

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["bd"]

tipo: mc
opciones_explicitas: ["Para guardar datos de forma persistente", "Para mostrar páginas", "Para balancear", "Para compilar"]
respuesta: "Para guardar datos de forma persistente"

enunciado: "¿Para qué se usa la base de datos?"

explicacion: |
  Sobrevive al reinicio.
```

### 6 — Caché

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["cache"]

tipo: mc
opciones_explicitas: ["Guarda en memoria respuestas costosas para no repetirlas", "Cifra datos", "Borra datos", "Envía correos"]
respuesta: "Guarda en memoria respuestas costosas para no repetirlas"

enunciado: "¿Qué hace una caché?"

explicacion: |
  Por ejemplo, Redis.
```

### 7 — Cola

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "intermedio"
  tags: ["cola"]

tipo: mc
opciones_explicitas: ["Para hacer tareas lentas en segundo plano, como enviar correos", "Para guardar contraseñas", "Para dibujar", "Para cifrar"]
respuesta: "Para hacer tareas lentas en segundo plano, como enviar correos"

enunciado: "¿Para qué sirve una cola de mensajes?"

explicacion: |
  El usuario no espera.
```

### 8 — Balanceador

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["balanceador"]

tipo: mc
opciones_explicitas: ["Reparte las peticiones entre varias copias de la aplicación", "Cifra el tráfico", "Borra copias", "Guarda datos"]
respuesta: "Reparte las peticiones entre varias copias de la aplicación"

enunciado: "¿Qué hace un balanceador de carga?"

explicacion: |
  Permite escalar horizontalmente.
```

### 9 — Capas

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["capas"]

tipo: mc
opciones_explicitas: ["Facilita probar y cambiar el código", "Lo hace más lento", "Lo hace más largo siempre", "No tiene ventajas"]
respuesta: "Facilita probar y cambiar el código"

enunciado: "¿Qué ventaja tiene separar el código en capas?"

explicacion: |
  Cada capa tiene una responsabilidad.
```

### 10 — Middleware

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "intermedio"
  tags: ["middleware"]

tipo: mc
opciones_explicitas: ["Código común que procesa cada petición, como la autenticación y el registro de errores", "Un tipo de base de datos", "Un servidor físico", "Un lenguaje"]
respuesta: "Código común que procesa cada petición, como la autenticación y el registro de errores"

enunciado: "¿Qué es un middleware?"

explicacion: |
  Evita repetir lógica en cada ruta.
```

### 11 — Vertical

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["escalado"]

tipo: mc
opciones_explicitas: ["Darle más recursos a un solo servidor", "Sumar servidores", "Reducir recursos", "Dividir la aplicación"]
respuesta: "Darle más recursos a un solo servidor"

enunciado: "¿Qué es el escalado vertical?"

explicacion: |
  Tiene un límite.
```

### 12 — Horizontal

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["escalado"]

tipo: mc
opciones_explicitas: ["Sumar más servidores detrás de un balanceador", "Dar más memoria a uno", "Comprar un disco", "Bajar el costo"]
respuesta: "Sumar más servidores detrás de un balanceador"

enunciado: "¿Qué es el escalado horizontal?"

explicacion: |
  Requiere una aplicación sin estado.
```

### 13 — Sin estado

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "intermedio"
  tags: ["stateless"]

tipo: mc
opciones_explicitas: ["Para que cualquier servidor pueda atender cualquier petición", "Porque es más rápida", "Por seguridad", "Por costo"]
respuesta: "Para que cualquier servidor pueda atender cualquier petición"

enunciado: "¿Por qué el escalado horizontal requiere una aplicación sin estado?"

explicacion: |
  No se guardan sesiones en la memoria de un solo servidor.
```

### 14 — Cuello de botella

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["cuello"]

tipo: mc
opciones_explicitas: ["La base de datos y las consultas lentas", "El teclado", "La pantalla", "El mouse"]
respuesta: "La base de datos y las consultas lentas"

enunciado: "¿Cuál suele ser un cuello de botella?"

explicacion: |
  Se atacan con índices, caché y réplicas.
```

### 15 — Punto único

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["spof"]

tipo: mc
opciones_explicitas: ["Un componente cuya caída detiene todo", "Un servidor rápido", "Un error de sintaxis", "Un respaldo"]
respuesta: "Un componente cuya caída detiene todo"

enunciado: "¿Qué es un punto único de falla?"

explicacion: |
  Se reduce con redundancia.
```

### 16 — Redundancia

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["redundancia"]

tipo: mc
opciones_explicitas: ["Para que el sistema siga funcionando si un componente falla", "Para gastar", "Para complicar", "Para duplicar errores"]
respuesta: "Para que el sistema siga funcionando si un componente falla"

enunciado: "¿Para qué sirve la redundancia?"

explicacion: |
  Hay más de una copia del componente.
```

### 17 — Salud

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "intermedio"
  tags: ["health"]

tipo: mc
opciones_explicitas: ["Para que el balanceador saque a un servidor que falla", "Para medir la temperatura", "Para medir al usuario", "Para borrar logs"]
respuesta: "Para que el balanceador saque a un servidor que falla"

enunciado: "¿Para qué sirven los chequeos de salud (health checks)?"

explicacion: |
  Detectan servidores caídos.
```

### 18 — Logs

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["logs"]

tipo: mc
opciones_explicitas: ["Datos sensibles como contraseñas", "Errores", "Fechas", "Tiempos"]
respuesta: "Datos sensibles como contraseñas"

enunciado: "¿Qué no deben contener los registros (logs)?"

explicacion: |
  Deben ser útiles y seguros.
```

### 19 — Monolito

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["monolito"]

tipo: mc
opciones_explicitas: ["Es más simple de empezar, probar y desplegar", "Es siempre más rápido", "Escala por partes", "No tiene límites"]
respuesta: "Es más simple de empezar, probar y desplegar"

enunciado: "¿Qué ventaja tiene un monolito?"

explicacion: |
  Una sola aplicación.
```

### 20 — Microservicios

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "intermedio"
  tags: ["microservicios"]

tipo: mc
opciones_explicitas: ["Red, datos distribuidos y monitoreo", "Ninguna", "Menos pruebas", "Una sola base"]
respuesta: "Red, datos distribuidos y monitoreo"

enunciado: "¿Qué complejidad agregan los microservicios?"

explicacion: |
  Se justifican con una razón concreta.
```

### 21 — Secretos

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["secretos"]

tipo: mc
opciones_explicitas: ["En variables de entorno o un gestor de secretos, no en el código", "En el código", "En el repositorio público", "En un comentario"]
respuesta: "En variables de entorno o un gestor de secretos, no en el código"

enunciado: "¿Dónde se guardan las claves y contraseñas de la aplicación?"

explicacion: |
  El código puede filtrarse.
```

### 22 — Privilegios

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "intermedio"
  tags: ["privilegios"]

tipo: mc
opciones_explicitas: ["Que corra con un usuario sin permisos de administrador", "Que corra como administrador", "Que no corra", "Que tenga acceso a todo"]
respuesta: "Que corra con un usuario sin permisos de administrador"

enunciado: "¿Qué significa el mínimo privilegio para un servicio?"

explicacion: |
  Reduce el daño si lo comprometen.
```

### 23 — Entornos

```
metadata:
  materia: "backend"
  tema: "arquitectura_de_servidores"
  nivel: "basico"
  tags: ["entornos"]

tipo: mc
opciones_explicitas: ["Desarrollo, pruebas y producción", "Solo uno", "Ninguno", "Solo producción"]
respuesta: "Desarrollo, pruebas y producción"

enunciado: "¿Qué entornos conviene separar?"

explicacion: |
  Evita romper lo que usan los clientes.
```

