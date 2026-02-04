# Roles y membresías

## Roles globales

Estos roles aplican a todo el sistema:

- **ADMIN**: administrador global con acceso completo a la plataforma.
- **DIRECTIVO**: rol para cuentas institucionales con acceso a funcionalidades corporativas.
- **TEACHER**: rol global para docentes que pueden operar en el sistema.
- **USER**: rol base para usuarios sin privilegios administrativos.

## Roles por escuela (membresías)

Cada usuario puede tener membresías por escuela. En la membresía se define el rol en esa escuela
(por ejemplo, **ADMIN_ESCUELA** o **TEACHER**), independiente del rol global. Esto permite que un
usuario sea docente en una escuela y admin en otra.

## Registro de profesores y admins de escuela

- **Profesores**: se registran creando un usuario y asignándolo como **TEACHER** en la membresía de
  la escuela correspondiente.
- **Admins de escuela**: se registran creando un usuario y asignándolo como **ADMIN_ESCUELA** en la
  membresía de la escuela correspondiente.

## Restricción de admin global

El rol **ADMIN** es estrictamente global: solo puede asignarse a nivel de sistema y no debe usarse
como rol de membresía por escuela.
