### 1 — Diferencia entre Usuario y Grupo
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "usuarios", "sistemas_operativos"]

respuesta: "grupo"
tipo: completar
respuestas_validas: ["grupo"]

enunciado: "Mientras que un usuario es una entidad individual con sus propios permisos, un ___ es una colección de usuarios que comparten los mismos privilegios de acceso a los recursos."

explicacion: |
  Los grupos permiten administrar permisos de manera colectiva. En lugar de asignar permisos a cada usuario uno por uno, se asignan al grupo y los usuarios se añaden a él.
```

### 2 — El concepto de Root vs Usuario Estándar
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["privilegios", "root", "seguridad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [
    ["Un usuario estándar intenta modificar archivos del sistema.", "denegado"],
    ["El superusuario (root) intenta modificar archivos del sistema.", "permitido"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["denegado", "permitido", "error de sintaxis", "requiere contraseña"]

enunciado: "En un sistema basado en Unix, ante el escenario: {escenarios[escenario_idx][0]}, el acceso es ___."

explicacion: |
  El usuario 'root' tiene privilegios totales sobre el sistema, mientras que un usuario estándar está restringido a su propio directorio personal y archivos para los que tenga permisos explícitos.
```

### 3 — Permisos de lectura, escritura y ejecución
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "chmod", "linux"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de archivos Linux, el permiso de 'ejecución' (x) en un directorio permite al usuario entrar en él (hacer cd), lo cual es distinto al permiso de ejecución en un archivo, que permite correr un programa."

explicacion: |
  Es una distinción fundamental: en archivos, 'x' es ejecución; en directorios, 'x' es la capacidad de acceder al contenido del directorio (traverse).
```

### 4 — Jerarquía de privilegios (Principio de Menor Privilegio)
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "principios"]

respuesta: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]
tipo: ordenar
opciones_explicitas: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]

enunciado: "Para implementar correctamente el principio de menor privilegio en la gestión de recursos, se deben seguir estos pasos en orden lógico:"

explicacion: |
  Primero se define quién es el sujeto (usuario), luego se le da solo lo que necesita para su tarea (mínimo privilegio) y finalmente se supervisa que no se desvíe de su función.
```

### 5 — Diferencia entre ACL y Permisos Tradicionales
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "permisos", "seguridad"]

variables:
  es_acl: uno_de([0,1])
  comparacion: [
    ["permisos_tradicionales", "solo permiten definir dueño, grupo y otros"],
    ["ACL", "permiten definir permisos específicos para múltiples usuarios"]
  ]

respuesta: comparacion[es_acl][1]
tipo: mc
opciones_explicitas: ["solo permiten definir dueño, grupo y otros", "permiten definir permisos específicos para múltiples usuarios", "son solo para archivos comprimidos", "no se pueden usar en Linux"]

enunciado: "A diferencia de los {comparacion[es_acl][0]}, las listas de control de acceso (___) ofrecen una granularidad mucho mayor."

explicacion: |
  Los permisos tradicionales (rwx para owner, group, others) son limitados. Las ACL (Access Control Lists) permiten asignar permisos a un usuario específico que no es el dueño, sin necesidad de crear un grupo nuevo.
```