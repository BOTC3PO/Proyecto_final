### 1 — Revocación de privilegios con CASCADE
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["revocacion", "cascade", "dependencias"]
respuesta: verdadero
tipo: vf
enunciado: Al ejecutar `REVOKE` sobre un privilegio que ha sido otorgado por un usuario a otros (cadena de concesión), el comportamiento estándar en la mayoría de los SGBD relacionales es que, si se especifica `CASCADE`, los privilegios derivados en otros usuarios también sean revocados automáticamente para mantener la integridad de la seguridad.
pasos:
  - "Analizar la cadena de concesión de privilegios."
  - "Verificar si el SGBD soporta y aplica la cláusula CASCADE por defecto o explícita en REVOKE."
  - "Confirmar que la revocación se propaga a todos los niveles inferiores de la jerarquía de permisos."
explicacion: La cláusula CASCADE en la sentencia REVOKE asegura que todos los privilegios derivados de aquel que se está revocando también sean eliminados, evitando permisos huérfanos o inconsistentes en la base de datos.
```

### 2 — Síntaxis de GRANT con OPTION GRANT
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["grant", "option", "oracle"]
respuesta: with_grant_option
tipo: completar
enunciado: En Oracle Database, para permitir que un usuario no solo use un objeto sino que también pueda otorgar el mismo privilegio a otros usuarios, se debe añadir la cláusula `_______` al final de la sentencia `GRANT`.
respuestas_validas:
  - "WITH_GRANT_OPTION"
  - "with_grant_option"
  - "WITH GRANT OPTION"
  - "with grant option"
pasos:
  - "Identificar la necesidad de propagar permisos."
  - "Recordar la sintaxis específica de Oracle para la propagación de permisos."
  - "Insertar la cláusula correcta en la posición final de la sentencia GRANT."
explicacion: La cláusula `WITH GRANT OPTION` permite al destinatario del privilegio otorgar ese mismo privilegio a otros usuarios o roles, extendiendo la cadena de concesión.
```

### 3 — Gestión de Roles Personalizados
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "custom", "creacion"]
respuesta: CREATE ROLE
tipo: completar
enunciado: Para crear un nuevo rol personalizado en PostgreSQL que no tenga privilegios por defecto, se utiliza el comando `_______ nombre_del_rol`.
respuestas_validas:
  - "CREATE ROLE"
  - "create role"
  - "Create Role"
  - "CREATE role"
pasos:
  - "Determinar la creación de una agrupación lógica de permisos."
  - "Seleccionar el comando DDL adecuado para definir roles."
  - "Escribir la sintaxis base sin la cláusula LOGIN ni SUPERUSER para un rol puro."
explicacion: `CREATE ROLE` es el comando estándar para definir nuevos roles. Si no se especifica `LOGIN`, el rol no podrá autenticarse directamente, actuando solo como contenedor de privilegios.
```

### 4 — Privilegios de Sistema vs Objeto
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["privilegios", "sistema", "objeto", "diferencia"]
respuesta: falso
tipo: vf
enunciado: En SQL Server, el privilegio `ALTER ANY DATABASE` es un privilegio de nivel de objeto que se otorga específicamente a una tabla individual para modificar su estructura.
pasos:
  - "Clasificar el privilegio `ALTER ANY DATABASE`."
  - "Determinar si su alcance es a nivel de servidor o de base de datos."
  - "Contrastar con la definición de privilegios de objeto (tabla, vista, etc.)."
explicacion: `ALTER ANY DATABASE` es un privilegio de nivel de servidor (login level) que permite al usuario alterar cualquier base de datos en el servidor, no es un privilegio de objeto específico de una tabla.
```

### 5 — Visualización de Roles Asignados
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["visualizacion", "roles", "mysql"]
respuesta: information_schema.user_privileges
tipo: completar
enunciado: En MySQL, para consultar una vista que muestra los privilegios globales otorgados a cada cuenta de usuario, se debe interrogar a la tabla `_______`.
respuestas_validas:
  - "information_schema.user_privileges"
  - "INFORMATION_SCHEMA.USER_PRIVILEGES"
  - "information_schema.USER_PRIVILEGES"
  - "INFORMATION_SCHEMA.user_privileges"
pasos:
  - "Identificar el esquema de información de MySQL."
  - "Buscar la tabla específica que mapea cuentas a privilegios globales."
  - "Escribir el nombre completo de la tabla incluyendo el esquema."
explicacion: `information_schema.user_privileges` es la vista estandarizada en MySQL que lista los privilegios globales asignados a cada usuario.
```

### 6 — Revocación de Privilegios en PostgreSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["revoke", "postgres", "sintaxis"]
respuesta: REVOKE
tipo: completar
enunciado: El comando estándar SQL utilizado en PostgreSQL para quitar privilegios de un usuario es `_______ privilege ON object FROM user`.
respuestas_validas:
  - "REVOKE"
  - "revoke"
  - "Revoke"
  - "REVOKE privilege"
pasos:
  - "Identificar la acción de quitar permisos."
  - "Seleccionar el verbo SQL correspondiente."
  - "Verificar la sintaxis básica de la sentencia."
explicacion: `REVOKE` es la sentencia DCL (Data Control Language) utilizada para eliminar privilegios de acceso.
```

### 7 — Roles Predefinidos en PostgreSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "predefinidos", "postgres"]
respuesta: postgres
tipo: completar
enunciado: En una instalación estándar de PostgreSQL, el superusuario por defecto que tiene todos los privilegios de sistema y de objeto se llama `_______`.
respuestas_validas:
  - "postgres"
  - "POSTGRES"
  - "Postgres"
  - "POSTGRESQL"
pasos:
  - "Recordar la cuenta administrativa por defecto de PostgreSQL."
  - "Verificar la capitalización estándar del nombre."
  - "Confirmar que es un superusuario por defecto."
explicacion: El rol `postgres` es el superusuario creado por defecto durante la inicialización del cluster de PostgreSQL.
```

### 8 — Privilegio EXECUTE en SQL Server
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["execute", "stored-procedures", "sql-server"]
respuesta: false
tipo: vf
enunciado: En SQL Server, el privilegio `EXECUTE` otorgado a un usuario sobre una base de datos le permite automáticamente ejecutar cualquier procedimiento almacenado en esa base de datos sin necesidad de ser propietario del procedimiento ni tener permisos específicos sobre él.
pasos:
  - "Analizar el alcance del privilegio `EXECUTE` a nivel de base de datos."
  - "Verificar si hay excepciones o requisitos adicionales (como ownership chaining)."
  - "Confirmar si el privilegio es absoluto o depende del contexto de ejecución."
explicacion: Aunque `EXECUTE` a nivel de base de datos permite ejecutar procedimientos, la seguridad de ejecución (ownership chaining) y los permisos específicos sobre el objeto pueden restringir el acceso dependiendo de la configuración de seguridad y la propiedad del procedimiento. No es una autorización absoluta e incondicional en todos los contextos complejos, pero principalmente, el privilegio `EXECUTE` se otorga al objeto, no genéricamente a la BD para saltarse todas las reglas. Más precisamente, `EXECUTE` es un permiso de objeto. Otorgarlo a nivel de base de datos es una conveniencia, pero la afirmación de que permite ejecutar "cualquier" procedimiento sin considerar la lógica interna o permisos de datos subyacentes es engañosa. Sin embargo, la regla estricta es: `EXECUTE` es un permiso de objeto. Si se otorga a nivel de base de datos, permite ejecutar objetos definidos en esa BD. La afirmación es falsa porque ignora que los permisos de datos (SELECT/UPDATE) dentro del proc aún se verifican, y que no se "salta" la lógica de seguridad del proc, solo la de invocación.
```

### 9 — Creación de Usuario con Contraseña en MySQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["create-user", "mysql", "autenticacion"]
respuesta: CREATE USER
tipo: completar
enunciado: En MySQL 8.0+, el comando correcto para crear un usuario con autenticación por contraseña es `_______ 'usuario'@'host' IDENTIFIED BY 'contraseña'`.
respuestas_validas:
  - "CREATE USER"
  - "create user"
  - "Create User"
  - "CREATE user"
pasos:
  - "Identificar la acción de creación de cuenta."
  - "Seleccionar el comando DDL para usuarios."
  - "Verificar la sintaxis de especificación de autenticación."
explicacion: `CREATE USER` es el comando estándar para añadir cuentas a la tabla de usuarios de MySQL.
```

### 10 — Roles en PostgreSQL y Herencia
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "herencia", "postgres"]
respuesta: true
tipo: vf
enunciado: En PostgreSQL, cuando un usuario es miembro de un rol, hereda automáticamente todos los privilegios otorgados a ese rol, siempre que el rol no haya sido creado con la opción `NOINHERIT`.
pasos:
  - "Analizar el mecanismo de herencia de privilegios en PostgreSQL."
  - "Verificar el comportamiento por defecto de los roles."
  - "Confirmar la excepción `NOINHERIT`."
explicacion: Por defecto, los roles en PostgreSQL tienen la propiedad `INHERIT`, lo que significa que los privilegios se heredan inmediatamente al usuario miembro.
```

### 11 — Revocación de Conexión en Oracle
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["revoke", "connect", "oracle"]
respuesta: REVOKE CONNECT FROM
tipo: completar
enunciado: En Oracle Database, para revocar el privilegio de conexión de un usuario, se utiliza la sentencia `_______ usuario`.
respuestas_validas:
  - "REVOKE CONNECT FROM"
  - "revoke connect from"
  - "REVOKE connect from"
  - "revoke CONNECT FROM"
pasos:
  - "Identificar el privilegio de conexión en Oracle."
  - "Seleccionar la sentencia de revocación."
  - "Escribir la sintaxis completa incluyendo el usuario."
explicacion: `REVOKE CONNECT FROM user` quita el privilegio necesario para establecer una sesión en la base de datos Oracle.
```

### 12 — Privilegio SELECT en Vistas
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["select", "vistas", "permisos"]
respuesta: falso
tipo: vf
enunciado: Si un usuario tiene privilegio `SELECT` sobre una tabla subyacente, automáticamente tiene privilegio `SELECT` sobre todas las vistas creadas a partir de esa tabla, independientemente de quién sea el propietario de la vista y qué permisos se hayan otorgado explícitamente sobre la vista.
pasos:
  - "Analizar la independencia de permisos entre tablas y vistas."
  - "Verificar si los permisos se heredan o deben otorgarse por separado."
  - "Confirmar la seguridad de las vistas."
explicacion: Los permisos sobre vistas son independientes. Un usuario necesita privilegio `SELECT` explícito sobre la vista, incluso si tiene acceso a la tabla subyacente, a menos que la vista se ejecute con los permisos del propietario (definer) y el usuario tenga permisos de ejecución, pero en general, la vista es un objeto separado con sus propios permisos.
```

### 13 — Roles en SQL Server
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "sql-server", "fijos"]
respuesta: db_owner
tipo: completar
enunciado: En SQL Server, el rol de base de datos fijo que permite al miembro realizar todas las actividades de configuración y mantenimiento de la base de datos, así como eliminar la base de datos, se llama `_______`.
respuestas_validas:
  - "db_owner"
  - "DB_OWNER"
  - "Db_Owner"
  - "db-owner"
pasos:
  - "Identificar el rol con máxima autoridad a nivel de base de datos."
  - "Recordar el nombre exacto del rol fijo."
  - "Verificar sus capacidades (configuración, mantenimiento, eliminación)."
explicacion: `db_owner` es el rol de base de datos fijo con permisos completos sobre la base de datos.
```

### 14 — Revocación de Privilegios en SQLite
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["revoke", "sqlite", "limitaciones"]
respuesta: false
tipo: vf
enunciado: SQLite soporta nativamente la sentencia `REVOKE` para quitar privilegios de usuarios de manera dinámica y granular, similar a PostgreSQL o MySQL.
pasos:
  - "Analizar las capacidades de control de acceso de SQLite."
  - "Verificar si SQLite implementa el modelo de usuarios y permisos de SQL estándar."
  - "Confirmar la existencia de la sentencia `REVOKE`."
explicacion: SQLite no tiene un modelo de usuarios y permisos integrado. La seguridad depende del sistema operativo y del archivo de base de datos. No soporta `REVOKE` ni `GRANT` nativamente.
```

### 15 — Roles Personalizados en SQL Server
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "personalizados", "sql-server"]
respuesta: CREATE ROLE
tipo: completar
enunciado: Para crear un rol personalizado en SQL Server, se utiliza el comando `_______ nombre_rol`.
respuestas_validas:
  - "CREATE ROLE"
  - "create role"
  - "Create Role"
  - "CREATE role"
pasos:
  - "Identificar la necesidad de un grupo de permisos personalizado."
  - "Seleccionar el comando DDL para roles."
  - "Escribir la sintaxis básica."
explicacion: `CREATE ROLE` es el comando para definir roles personalizados en SQL Server.
```

### 16 — Privilegio ALTER ANY TABLE
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["alter", "tabla", "privilegio"]
respuesta: true
tipo: vf
enunciado: El privilegio `ALTER ANY TABLE` permite a un usuario modificar la estructura de cualquier tabla en la base de datos, independientemente de quién sea el propietario de la tabla.
pasos:
  - "Analizar el alcance del privilegio `ALTER ANY TABLE`."
  - "Verificar si es un privilegio de sistema o de objeto."
  - "Confirmar su capacidad de aplicación transversal."
explicacion: `ALTER ANY TABLE` es un privilegio de sistema que permite alterar cualquier tabla en la base de datos, sin importar la propiedad.
```

### 17 — Roles en MySQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "mysql", "activacion"]
respuesta: SET DEFAULT ROLE
tipo: completar
enunciado: En MySQL, para establecer un rol como predeterminado para un usuario, se utiliza el comando `_______ rol TO usuario`.
respuestas_validas:
  - "SET DEFAULT ROLE"
  - "set default role"
  - "Set Default Role"
  - "SET default role"
pasos:
  - "Identificar la acción de asignar rol por defecto."
  - "Seleccionar el comando de asignación."
  - "Escribir la sintaxis completa."
explicacion: `SET DEFAULT ROLE` asigna roles que se activarán automáticamente al iniciar sesión.
```

### 18 — Privilegio CREATE VIEW
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["create", "vista", "privilegio"]
respuesta: false
tipo: vf
enunciado: El privilegio `CREATE VIEW` permite a un usuario crear vistas que accedan a datos de tablas sobre las cuales el usuario NO tiene privilegio `SELECT`.
pasos:
  - "Analizar la dependencia de permisos para la creación de vistas."
  - "Verificar si se necesita acceso a los datos subyacentes."
  - "Confirmar la seguridad de las vistas."
explicacion: Para crear una vista, el usuario necesita privilegio `CREATE VIEW` Y privilegio `SELECT` (u otro adecuado) sobre todas las tablas subyacentes a las que la vista accede.
```

### 19 — Roles en Oracle
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "oracle", "predefinidos"]
respuesta: DBA
tipo: completar
enunciado: En Oracle Database, el rol predefinido que concede todos los privilegios de sistema y de objeto a un usuario se llama `_______`.
respuestas_validas:
  - "DBA"
  - "dba"
  - "Dba"
  - "dba"
pasos:
  - "Identificar el rol de superusuario en Oracle."
  - "Recordar el nombre exacto del rol."
  - "Verificar sus capacidades."
explicacion: El rol `DBA` en Oracle concede todos los privilegios de sistema y de objeto.
```

### 20 — Revocación de Privilegios en SQL Server
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["revoke", "sql-server", "sintaxis"]
respuesta: REVOKE
tipo: completar
enunciado: El comando estándar SQL utilizado en SQL Server para quitar privilegios de un usuario es `_______ privilege ON object FROM user`.
respuestas_validas:
  - "REVOKE"
  - "revoke"
  - "Revoke"
  - "REVOKE privilege"
pasos:
  - "Identificar la acción de quitar permisos."
  - "Seleccionar el verbo SQL correspondiente."
  - "Verificar la sintaxis básica de la sentencia."
explicacion: `REVOKE` es la sentencia DCL utilizada para eliminar privilegios de acceso en SQL Server.
```

### 21 — Roles en PostgreSQL y LOGIN
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "login", "postgres"]
respuesta: true
tipo: vf
enunciado: En PostgreSQL, un rol puede tener el atributo `LOGIN` que permite a ese rol autenticarse directamente, comportándose como un usuario, o no tenerlo, comportándose como un grupo de privilegios.
pasos:
  - "Analizar los atributos de un rol en PostgreSQL."
  - "Verificar la diferencia entre rol con y sin `LOGIN`."
  - "Confirmar la flexibilidad del modelo de roles."
explicacion: PostgreSQL unifica usuarios y roles. Un rol con `LOGIN` es un usuario, sin `LOGIN` es un grupo de privilegios.
```

### 22 — Privilegio INSERT en SQL Server
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["insert", "tabla", "sql-server"]
respuesta: INSERT
tipo: completar
enunciado: Para otorgar a un usuario la capacidad de añadir nuevas filas a una tabla específica en SQL Server, se utiliza el privilegio `_______`.
respuestas_validas:
  - "INSERT"
  - "insert"
  - "Insert"
  - "INSERT ON"
pasos:
  - "Identificar la acción de añadir datos."
  - "Seleccionar el permiso correspondiente."
  - "Verificar la sintaxis de otorgamiento."
explicacion: El permiso `INSERT` permite añadir filas a una tabla.
```

### 23 — Roles en MySQL y Herencia
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["roles", "herencia", "mysql"]
respuesta: true
tipo: vf
enunciado: En MySQL, cuando un usuario es miembro de un rol, los privilegios del rol se activan automáticamente si el rol está establecido como predeterminado para ese usuario.
pasos:
  - "Analizar el mecanismo de activación de roles en MySQL."
  - "Verificar la dependencia del rol predeterminado."
  - "Confirmar el comportamiento de los privilegios."
explicacion: Los roles en MySQL no se activan automáticamente a menos que estén en la lista de roles predeterminados o se activen explícitamente con `SET ROLE`.
```

### 24 — Privilegio DELETE en Oracle
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["delete", "tabla", "oracle"]
respuesta: DELETE
tipo: completar
enunciado: Para otorgar a un usuario la capacidad de eliminar filas de una tabla específica en Oracle, se utiliza el privilegio `_______`.
respuestas_validas:
  - "DELETE"
  - "delete"
  - "Delete"
  - "DELETE ON"
pasos:
  - "Identificar la acción de eliminar datos."
  - "Seleccionar el permiso correspondiente."
  - "Verificar la sintaxis de otorgamiento."
explicacion: El permiso `DELETE` permite eliminar filas de una tabla.
```

### 25 — Roles en PostgreSQL y GRANT
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "dba-administracion-de-usuarios-y-permisos"
  nivel: "avanzado"
  tags: ["grant", "rol", "postgres"]
respuesta: GRANT
tipo: completar
enunciado: Para asignar un rol a otro usuario en PostgreSQL, se utiliza el comando `_______ rol TO usuario`.
respuestas_validas:
  - "GRANT"
  - "grant"
  - "Grant"
  - "GRANT rol"
pasos:
  - "Identificar la acción de asignar un rol."
  - "Seleccionar el comando DCL correspondiente."
  - "Escribir la sintaxis básica."
explicacion: `GRANT rol TO usuario` asigna el rol al usuario, haciendo que el usuario sea miembro de ese rol.
```