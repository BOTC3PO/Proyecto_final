# DBA — Administración de usuarios y permisos (cuestionario, 26 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — DBA

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["dba"]

tipo: mc
opciones_explicitas: ["Se ocupa de que las bases estén disponibles, seguras, rápidas y respaldadas", "Diseña páginas web", "Escribe videojuegos", "Repara hardware"]
respuesta: "Se ocupa de que las bases estén disponibles, seguras, rápidas y respaldadas"

enunciado: "¿Qué hace un DBA?"

explicacion: |
  Incluye decidir quién accede a qué.
```

### 2 — Mínimo

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["privilegio"]

tipo: mc
opciones_explicitas: ["Dar solo los permisos necesarios", "Dar todos", "No dar permisos", "Dar permisos a todos"]
respuesta: "Dar solo los permisos necesarios"

enunciado: "¿Qué significa el mínimo privilegio?"

explicacion: |
  Reduce el daño.
```

### 3 — Cuentas

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["cuentas"]

tipo: mc
opciones_explicitas: ["Porque no se sabría quién hizo qué", "Porque son caras", "Porque no se puede", "Por costumbre"]
respuesta: "Porque no se sabría quién hizo qué"

enunciado: "¿Por qué no se comparten cuentas?"

explicacion: |
  Se usan cuentas individuales.
```

### 4 — Servicio

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["servicio"]

tipo: mc
opciones_explicitas: ["Una cuenta de servicio sin acceso de administrador", "La de un DBA", "La de un superusuario", "Una cuenta compartida"]
respuesta: "Una cuenta de servicio sin acceso de administrador"

enunciado: "¿Qué cuenta usa una aplicación?"

explicacion: |
  Con permisos mínimos.
```

### 5 — Roles

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["roles"]

tipo: mc
opciones_explicitas: ["Roles", "Tablas", "Esquemas", "Vistas"]
respuesta: "Roles"

enunciado: "En PostgreSQL, ¿qué son los usuarios y los grupos?"

explicacion: |
  Un rol puede o no iniciar sesión.
```

### 6 — Login

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["login"]

tipo: mc
opciones_explicitas: ["Conectarse a la base", "Borrar tablas", "Crear índices", "Ver logs"]
respuesta: "Conectarse a la base"

enunciado: "¿Qué permite `LOGIN` en un rol?"

explicacion: |
  Los roles `NOLOGIN` agrupan permisos.
```

### 7 — Grupo

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["grupo"]

tipo: mc
opciones_explicitas: ["Para agrupar permisos y asignarlos a varias personas", "Para iniciar sesión", "Para borrar datos", "Para hacer copias"]
respuesta: "Para agrupar permisos y asignarlos a varias personas"

enunciado: "¿Para qué sirve un rol de grupo?"

explicacion: |
  Cambiar un permiso se hace una vez.
```

### 8 — Superusuario

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["superusuario"]

tipo: mc
opciones_explicitas: ["Lo menos posible, y nunca en una aplicación", "Siempre", "Para todo", "En cada aplicación"]
respuesta: "Lo menos posible, y nunca en una aplicación"

enunciado: "¿Cómo se usa el superusuario?"

explicacion: |
  Puede hacer todo.
```

### 9 — Grant

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["grant"]

tipo: mc
opciones_explicitas: ["Otorga permisos", "Los quita", "Los lista", "Los copia"]
respuesta: "Otorga permisos"

enunciado: "¿Qué hace `GRANT`?"

explicacion: |
  `REVOKE` los quita.
```

### 10 — Revoke

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["revoke"]

tipo: mc
opciones_explicitas: ["Quita permisos", "Los otorga", "Los lista", "Los copia"]
respuesta: "Quita permisos"

enunciado: "¿Qué hace `REVOKE`?"

explicacion: |
  Es la contraparte de `GRANT`.
```

### 11 — Select

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["select"]

tipo: mc
opciones_explicitas: ["Leer datos", "Escribir datos", "Borrar datos", "Crear tablas"]
respuesta: "Leer datos"

enunciado: "¿Qué permite el privilegio `SELECT`?"

explicacion: |
  `INSERT` agrega; `UPDATE` modifica; `DELETE` borra.
```

### 12 — Esquema

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["usage"]

tipo: mc
opciones_explicitas: ["El permiso `USAGE` sobre el esquema", "Un índice", "Una copia", "Una vista"]
respuesta: "El permiso `USAGE` sobre el esquema"

enunciado: "Un rol tiene `SELECT` sobre una tabla pero no puede leerla. ¿Qué puede faltar?"

explicacion: |
  Hace falta acceso al esquema.
```

### 13 — Columnas

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["columnas"]

tipo: mc
opciones_explicitas: ["Sí", "No", "Solo por base", "Solo por esquema"]
respuesta: "Sí"

enunciado: "¿Se pueden dar permisos por columna?"

explicacion: |
  Por ejemplo, solo la columna `nombre`.
```

### 14 — Grant option

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["grant option"]

tipo: mc
opciones_explicitas: ["Que quien recibe el permiso pueda dárselo a otros", "Borrarlo", "Cifrarlo", "Copiarlo"]
respuesta: "Que quien recibe el permiso pueda dárselo a otros"

enunciado: "¿Qué permite `WITH GRANT OPTION`?"

explicacion: |
  Se usa con cuidado.
```

### 15 — Dueño

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["dueno"]

tipo: mc
opciones_explicitas: ["Todos sobre ese objeto", "Ninguno", "Solo lectura", "Los que se le den"]
respuesta: "Todos sobre ese objeto"

enunciado: "¿Qué permisos tiene el dueño de un objeto?"

explicacion: |
  Por defecto.
```

### 16 — Roles típicos

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["reportes"]

tipo: mc
opciones_explicitas: ["Solo `SELECT`", "Todos", "`DELETE`", "`CREATE`"]
respuesta: "Solo `SELECT`"

enunciado: "¿Qué permisos suele tener un rol de reportes?"

explicacion: |
  Es solo lectura.
```

### 17 — Producción

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["migraciones"]

tipo: mc
opciones_explicitas: ["Mediante migraciones revisadas, no con cuentas personales", "Con cuentas personales", "A mano", "Sin revisar"]
respuesta: "Mediante migraciones revisadas, no con cuentas personales"

enunciado: "¿Cómo se cambian las estructuras en producción?"

explicacion: |
  Se versionan y se prueban.
```

### 18 — RLS

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["rls"]

tipo: mc
opciones_explicitas: ["Políticas que limitan qué filas ve cada rol", "Un cifrado", "Un índice", "Una copia"]
respuesta: "Políticas que limitan qué filas ve cada rol"

enunciado: "¿Qué es la seguridad a nivel de fila?"

explicacion: |
  Por ejemplo, cada docente ve sus cursos.
```

### 19 — Vistas

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["vistas"]

tipo: mc
opciones_explicitas: ["Para exponer solo las columnas y filas necesarias", "Para acelerar siempre", "Para borrar", "Para copiar"]
respuesta: "Para exponer solo las columnas y filas necesarias"

enunciado: "¿Para qué se usan las vistas en seguridad?"

explicacion: |
  Se oculta, por ejemplo, el DNI.
```

### 20 — Prueba

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["pruebas"]

tipo: mc
opciones_explicitas: ["Se enmascaran; no se usan datos reales", "Se usan los reales", "Se publican", "Se comparten"]
respuesta: "Se enmascaran; no se usan datos reales"

enunciado: "¿Qué se hace con los datos sensibles en entornos de prueba?"

explicacion: |
  Evita filtraciones.
```

### 21 — Cifrado

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["cifrado"]

tipo: mc
opciones_explicitas: ["Conexiones, discos y copias", "Solo las contraseñas", "Nada", "Solo los nombres"]
respuesta: "Conexiones, discos y copias"

enunciado: "¿Qué conviene cifrar?"

explicacion: |
  TLS para las conexiones.
```

### 22 — Auditoría

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["auditoria"]

tipo: mc
opciones_explicitas: ["Saber quién hizo qué y cuándo", "Acelerar", "Borrar datos", "Comprimir"]
respuesta: "Saber quién hizo qué y cuándo"

enunciado: "¿Qué permite la auditoría?"

explicacion: |
  Es clave en un incidente.
```

### 23 — Bajas

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["bajas"]

tipo: mc
opciones_explicitas: ["Darlas de baja", "Dejarlas", "Compartirlas", "Ignorarlas"]
respuesta: "Darlas de baja"

enunciado: "¿Qué se hace con las cuentas de personas que se van?"

explicacion: |
  Una cuenta olvidada es una puerta abierta.
```

### 24 — Red

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["red"]

tipo: mc
opciones_explicitas: ["Con firewall y la configuración del motor, permitiendo solo servidores autorizados", "Dejándola abierta", "Con un comentario", "Con una contraseña simple"]
respuesta: "Con firewall y la configuración del motor, permitiendo solo servidores autorizados"

enunciado: "¿Cómo se limita el acceso por red a la base?"

explicacion: |
  En PostgreSQL, `pg_hba.conf`.
```

### 25 — Inyección

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "intermedio"
  tags: ["inyeccion"]

tipo: mc
opciones_explicitas: ["Limita el daño que puede causar", "La evita totalmente", "No ayuda", "Aumenta el daño"]
respuesta: "Limita el daño que puede causar"

enunciado: "¿Cómo ayuda un usuario con pocos permisos frente a una inyección SQL?"

explicacion: |
  Complementa a las consultas parametrizadas.
```

### 26 — Error

```
metadata:
  materia: "dba"
  tema: "administracion_de_usuarios_y_permisos"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Usar el superusuario para la aplicación", "Usar roles de grupo", "Revisar permisos", "Auditar"]
respuesta: "Usar el superusuario para la aplicación"

enunciado: "¿Cuál es un error común?"

explicacion: |
  Si hay una falla, el atacante tiene todo.
```

