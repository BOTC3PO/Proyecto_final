# Informática — Permisos y usuarios (teoría)

> Tema del MAPA: `permisos_y_usuarios`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Explicación de cómo se controla el acceso a recursos en un sistema informático mediante permisos y roles de usuarios.

---

## 1. ¿Qué son los permisos?

Los permisos son las reglas que determinan qué acciones puede realizar un usuario sobre un recurso del sistema, como un archivo, carpeta o programa. Estas reglas definen si alguien puede leer, escribir o ejecutar algo, y son esenciales para garantizar la seguridad de los datos. Por ejemplo, un documento de texto puede tener permiso de lectura para todos, pero solo su autor podría modificarlo. Sin permisos bien configurados, cualquier persona podría alterar información crítica, acceder a archivos privados o incluso dañar el sistema.

## 2. Tipos de permisos en sistemas Unix/Linux

En sistemas basados en Unix (como Linux), los permisos se dividen en tres categorías principales: **lectura**, **escritura** y **ejecución**. Cada una tiene un propósito específico:

- **Lectura**: Permite ver el contenido de un archivo o listar los elementos de una carpeta.
- **Escritura**: Permite modificar o crear archivos dentro de una carpeta, o editar el contenido de un archivo.
- **Ejecución**: Permite ejecutar un programa, script o entrar en una carpeta (como si fuera un directorio).

El permiso de **ejecución** es clave para archivos que se usan como programas. Por ejemplo, un script de shell solo funcionará si el usuario tiene permiso de ejecución sobre él.

## 3. Identidad del usuario y roles

Cada acción en un sistema informático se vincula a una identidad: la de un **usuario**. Los usuarios pueden tener diferentes niveles de privilegios, lo que determina qué pueden hacer. Por ejemplo:

- Un **usuario común** tiene permisos limitados para proteger el sistema de errores accidentales.
- Un **grupo** agrupa a varios usuarios con necesidades similares (como un equipo de trabajo).
- El **root** o **superusuario** tiene acceso total al sistema, incluyendo la capacidad de modificar configuraciones críticas. Este rol debe usarse con cuidado, ya que un error puede afectar toda la infraestructura.

## 4. Jerarquía y prioridad de permisos

Los permisos no se aplican de forma aislada: actúan en una **jerarquía**. En sistemas Unix, los derechos se asignan según tres niveles:

1. **Propietario**: Quien creó el recurso (por ejemplo, un archivo).
2. **Grupo**: Los usuarios que pertenecen a un grupo específico.
3. **Otros**: Todos los demás usuarios del sistema.

Si un usuario no es propietario ni parte del grupo asignado, solo tendrá permisos según la categoría "otros". Esta estructura permite controlar el acceso de manera flexible: por ejemplo, permitir que un equipo de desarrollo modifique código (grupo), pero restringir su edición a ciertos usuarios (propietario).

---

## N. Conexión con lo que sigue

Este tema es clave para entender cómo se gestiona la seguridad en sistemas operativos y redes, y servirá como base para temas como la configuración de permisos en archivos o el uso seguro de cuentas de administrador (`../seguridad_en_sistemas/`).