# Informatica — Permisos y usuarios (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Permisos

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "conceptos"]

respuesta: "permisos"
tipo: completar
respuestas_validas:
  - "permisos"

enunciado: "Las reglas que determinan qué acciones puede realizar un usuario sobre un recurso se conocen como ___."

explicacion: |
  Los permisos definen la capacidad de lectura, escritura o ejecución sobre un objeto del sistema.
```

### 2 — Tipos de permisos en sistemas Unix

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["unix", "linux"]

variables:
  opciones_validas: ["lectura", "escritura", "ejecución"]

respuesta: "ejecución"
tipo: completar

enunciado: "En un sistema de archivos estándar, además de leer y escribir, un archivo puede tener permiso de ___."

explicacion: |
  El permiso de ejecución permite que un archivo sea tratado como un programa o script.
```

### 3 — Identidad de Usuario

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema operativo, el usuario 'root' (o superusuario) tiene la capacidad de ignorar la mayoría de las restricciones de permisos del sistema."

explicacion: |
  El superusuario tiene privilegios totales sobre el núcleo y los archivos del sistema.
```

### 4 — Jerarquía de privilegios

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["seguridad", "jerarquia"]

tipo: ordenar

opciones_explicitas: ["Usuario común", "Grupo", "Propietario"]
respuesta_orden: ["Usuario común", "Grupo", "Propietario"]

enunciado: "Ordena los niveles de acceso de menor a mayor jerarquía de privilegios sobre un archivo específico:"

explicacion: |
  El orden jerárquico estándar es: el usuario (dueño), el grupo al que pertenece y, finalmente, los otros usuarios.
```

### 5 — El concepto de ACL

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "seguridad"]

variables:
  tabla: [["Lista de Control de Acceso", "permisos estándar"], ["Lista de Control de Acceso", "permisos de red"], ["Lista de Control de Acceso", "permisos de hardware"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["permisos estándar", "permisos de red", "permisos de hardware", "permisos de memoria"]

enunciado: "Las ACL (Access Control Lists) se utilizan para definir ___ más granulares que los permisos tradicionales de un archivo."

explicacion: |
  Las ACL permiten asignar permisos específicos a múltiples usuarios y grupos sin depender solo del modelo propietario/grupo/otros.
```

### 6 — Permisos de lectura en Linux

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos", "chmod"]

enunciado: "Un administrador desea que un archivo llamado 'datos.txt' sea legible por el dueño, pero que nadie más pueda leerlo, escribirlo ni ejecutarlo. ¿Cuál es la representación numérica de los permisos para este archivo?"

opciones_explicitas: ["644", "400", "755", "666"]
respuesta: "400"
tipo: "mc"

explicacion: |
  En sistemas Unix/Linux, los permisos se calculan sumando valores: Lectura (4), Escritura (2) y Ejecución (1).
  Para el dueño (Read): 4 + 0 + 0 = 4.
  Para el grupo (None): 0.
  Para otros (None): 0.
  Resultado: 400.
```

### 7 — Propiedad de archivos

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "ownership"]

enunciado: "Si un usuario intenta modificar un archivo que pertenece al 'root' y el usuario actual no tiene permisos de escritura, la operación será denegada."

respuesta: falso
tipo: "vf"

explicacion: |
  El sistema operativo verifica primero si el usuario es el dueño del archivo. Si no lo es, comprueba los permisos del grupo y, finalmente, los permisos para 'otros'. Si el permiso de escritura no está concedido en la categoría correspondiente, el acceso se deniega.
```

### 8 — El comando chmod

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["chmod", "simbolico"]

variables:
  comando_ejemplo: uno_de(["chmod u+x", "chmod g-w", "chmod o+r"])
  resultado_esperado: uno_de(["u+x", "g-w", "o+r"])

enunciado: "Si aplicamos el comando {comando_ejemplo} a un archivo, estamos modificando los permisos de forma simbólica."

pasos:
  - "Identificar el usuario (u=user, g=group, o=others)"
  - "Identificar la acción (+ para añadir, - para quitar)"
  - "Identificar el permiso (r, w, x)"

respuesta: "resultado_esperado"
tipo: "completar"
respuestas_validas:
  - "u+x"
  - "g-w"
  - "o+r"

explicacion: |
  El modo simbólico permite modificar permisos específicos sin redefinir todos los valores. 
  En el caso de {comando_ejemplo}, estamos operando directamente sobre la categoría seleccionada.
```

### 9 — Proceso de creación de un script

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["secuencia", "ejecucion"]

enunciado: "Para que un script de Bash sea ejecutable por un usuario después de haberlo creado, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
respuesta_orden: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
tipo: ordenar

explicacion: |
  Primero el archivo debe existir (creación), luego el sistema operativo debe permitir su ejecución (permisos) y finalmente se puede lanzar el proceso (ejecución).
```

### 10 — Cálculo de bits de permisos

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["binario", "permisos"]

variables:
  valor_permiso: uno_de([6, 7, 5])
  valor_binario: uno_de(["110", "111", "101"])

enunciado: "Un archivo tiene permisos de lectura y escritura para el dueño, pero ningún permiso para el grupo ni para otros. ¿Cuál es su valor decimal y su representación binaria?"

respuesta: "valor_permiso"
tipo: "completar"
respuestas_validas:
  - "6"
  - "7"
  - "5"

explicacion: |
  Lectura (4) + Escritura (2) + Ejecución (0) = 6.
  En binario: 110.
  Si el valor fuera 7, sería 111 (rwx).
  Si el valor fuera 5, sería 101 (r-x).
```

### 11 — El bit de ejecución en directorios

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["linux", "permisos", "directorios"]

tipo: mc
opciones_explicitas: ["Permitir leer el contenido de los archivos dentro del directorio", "Permitir listar los nombres de archivos dentro del directorio", "Permitir entrar/acceder al directorio (hacer cd)", "Permitir ejecutar archivos binarios dentro del directorio"]

enunciado: "En sistemas tipo Unix, si un usuario tiene permisos de lectura (r) pero NO tiene permisos de ejecución (x) en un directorio, ¿qué acción NO podrá realizar?"

respuesta: "Permitir entrar/acceder al directorio (hacer cd)"

explicacion: |
  El permiso de ejecución (x) en un directorio es el que permite al usuario 'entrar' en él (hacer `cd`) y acceder a los metadatos de los archivos que contiene. Sin `x`, no puedes acceder a los archivos aunque sepas sus nombres.
```

### 12 — Confusión entre Dueño y Grupo

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "usuarios", "grupos"]

variables:
  escenario: uno_de([["archivo_A", "usuario_1", "grupo_admin"], ["archivo_B", "usuario_2", "grupo_staff"], ["archivo_C", "usuario_3", "grupo_dev"]])

tipo: vf
respuesta: falso

enunciado: "Si el archivo {escenario[0]} tiene como dueño a {escenario[1]} y pertenece al grupo {escenario[2]}, cualquier usuario que pertenezca al grupo {escenario[2]} tiene automáticamente todos los permisos de lectura, escritura y ejecución sobre el archivo, independientemente de los permisos asignados al grupo."

explicacion: |
  Falso. El hecho de pertenecer al grupo otorga los permisos definidos para el 'grupo' en la máscara de permisos (rwx), pero estos pueden estar limitados (por ejemplo, solo lectura).
```

### 13 — El orden de evaluación de permisos

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "linux", "lógica"]

tipo: mc
opciones_explicitas: ["Usuario -> Grupo -> Otros", "Otros -> Grupo -> Usuario", "Usuario -> Otros -> Grupo", "El que tenga el permiso más restrictivo gana"]

enunciado: "Cuando un proceso intenta acceder a un archivo, ¿en qué orden evalúa el sistema operativo los permisos de un usuario?"

respuesta: "Usuario -> Grupo -> Otros"

explicacion: |
  El sistema operativo busca la coincidencia más específica primero. Si el usuario es el dueño, se aplican sus permisos y se deja de evaluar. Si no, se mira si pertenece al grupo del archivo, y si no, se aplican los permisos de 'otros'.
```

### 14 — Privilegios de Superusuario

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "root", "sudo"]

tipo: completar
respuestas_validas:
  - "root"
  - "superuser"
  - "administrador"

enunciado: "En sistemas operativos basados en Linux, el usuario que posee todos los privilegios del sistema y puede saltarse cualquier restricción de permisos es conocido como ___."

respuesta: "root"

explicacion: |
  El usuario 'root' es la cuenta de superusuario por excelencia. Aunque en contextos generales se le llame administrador, el nombre técnico del usuario con UID 0 es root.
```

### 15 — Secuencia de cambio de permisos

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["comandos", "chmod", "linux"]

tipo: ordenar
opciones_explicitas: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

enunciado: "Ordena los pasos lógicos para cambiar de forma segura los permisos de un archivo crítico en un servidor de producción:"

respuesta_orden: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

explicacion: |
  Antes de modificar permisos en entornos críticos, es vital saber qué estamos cambiando (usando `ls -l`) para evitar bloquear el acceso a servicios esenciales o dejar brechas de seguridad.
```

### 16 — Diferencia entre Usuario y Grupo

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "usuarios", "sistemas_operativos"]

respuesta: "grupo"
tipo: completar
respuestas_validas:
  - "grupo"

enunciado: "Mientras que un usuario es una entidad individual con sus propios permisos, un ___ es una colección de usuarios que comparten los mismos privilegios de acceso a los recursos."

explicacion: |
  Los grupos permiten administrar permisos de manera colectiva. En lugar de asignar permisos a cada usuario uno por uno, se asignan al grupo y los usuarios se añaden a él.
```

### 17 — El concepto de Root vs Usuario Estándar

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["privilegios", "root", "seguridad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un usuario estándar intenta modificar archivos del sistema.", "denegado"], ["El superusuario (root) intenta modificar archivos del sistema.", "permitido"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["denegado", "permitido", "error de sintaxis", "requiere contraseña"]

enunciado: "En un sistema basado en Unix, ante el escenario: {escenarios[escenario_idx][0]}, el acceso es ___."

explicacion: |
  El usuario 'root' tiene privilegios totales sobre el sistema, mientras que un usuario estándar está restringido a su propio directorio personal y archivos para los que tenga permisos explícitos.
```

### 18 — Permisos de lectura, escritura y ejecución

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

### 19 — Jerarquía de privilegios (Principio de Menor Privilegio)

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "principios"]

respuesta_orden: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]
tipo: ordenar
opciones_explicitas: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]

enunciado: "Para implementar correctamente el principio de menor privilegio en la gestión de recursos, se deben seguir estos pasos en orden lógico:"

explicacion: |
  Primero se define quién es el sujeto (usuario), luego se le da solo lo que necesita para su tarea (mínimo privilegio) y finalmente se supervisa que no se desvíe de su función.
```

### 20 — Diferencia entre ACL y Permisos Tradicionales

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "permisos", "seguridad"]

variables:
  es_acl: uno_de([0,1])
  comparacion: [["permisos_tradicionales", "solo permiten definir dueño, grupo y otros"], ["ACL", "permiten definir permisos específicos para múltiples usuarios"]]

respuesta: comparacion[es_acl][1]
tipo: mc
opciones_explicitas: ["solo permiten definir dueño, grupo y otros", "permiten definir permisos específicos para múltiples usuarios", "son solo para archivos comprimidos", "no se pueden usar en Linux"]

enunciado: "A diferencia de los {comparacion[es_acl][0]}, las listas de control de acceso (___) ofrecen una granularidad mucho mayor."

explicacion: |
  Los permisos tradicionales (rwx para owner, group, others) son limitados. Las ACL (Access Control Lists) permiten asignar permisos a un usuario específico que no es el dueño, sin necesidad de crear un grupo nuevo.
```

### 21 — Permisos de lectura en Linux

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos"]

variables:
  datos: [["archivo_secreto.txt", "600"], ["config.sys", "644"], ["script.sh", "755"]]
  idx: uno_de([0, 1, 2])

enunciado: "Se desea que el archivo {datos[idx][0]} tenga permisos donde el dueño tenga lectura y escritura, pero nadie más tenga acceso. El modo octal correspondiente es ___."

respuestas_validas:
  - "600"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  En sistemas tipo Unix, el primer dígito (6) representa al dueño (lectura=4 + escritura=2), el segundo (0) al grupo y el tercero (0) a otros.
```

### 22 — El usuario Root

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "root"]

enunciado: "¿Es el usuario 'root' el superusuario que tiene control total sobre el sistema operativo, pudiendo ignorar la mayoría de las restricciones de permisos?"

respuesta: verdadero
tipo: vf

explicacion: |
  El usuario root es el superusuario en sistemas basados en Unix/Linux y tiene privilegios máximos sobre todos los recursos del sistema.
```

### 23 — Identificación de permisos (Octal)

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["permisos", "octal"]

variables:
  datos: [["rwx r-- ---", "754"], ["rw- r-- r--", "644"], ["rwx rwx ---", "770"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un comando 'ls -l' muestra que un archivo tiene los permisos {datos[idx][0]}, ¿cuál es su representación en formato octal?"

opciones_explicitas:
  - "754"
  - "644"
  - "770"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada bloque de tres caracteres (dueño, grupo, otros) se suma: r=4, w=2, x=1.
```

### 24 — Flujo de creación de archivos

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["proceso", "seguridad"]

enunciado: "Ordena los pasos lógicos para asegurar un archivo recién creado en un servidor compartido para que solo el usuario actual pueda leerlo y editarlo, sin que otros puedan verlo."

opciones_explicitas:
  - "Crear el archivo con el contenido necesario"
  - "Cambiar el propietario con 'chown' si es necesario"
  - "Restringir permisos con 'chmod 600'"
  - "Verificar la configuración de la umask del sistema"

respuesta_orden: ["Crear el archivo con el contenido necesario", "Cambiar el propietario con 'chown' si es necesario", "Restringir permisos con 'chmod 600'", "Verificar la configuración de la umask del sistema"]
tipo: ordenar

explicacion: |
  Para asegurar un recurso, primero se crea, se asegura la propiedad del dueño, se aplican los permisos restrictivos y se valida que la umask no haya aplicado permisos por defecto más abiertos.
```

### 25 — El concepto de Umask

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["umask", "permisos"]

variables:
  datos: [["022", "755"], ["027", "750"], ["077", "700"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la umask del sistema está configurada como {datos[idx][0]}, un nuevo archivo creado por un usuario tendrá como permiso máximo (en modo octal) el valor ___."

respuestas_validas:
  - "755"
  - "750"
  - "700"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La umask (User Mask) se resta de los permisos base (normalmente 777 para directorios o 666 para archivos) para determinar los permisos finales.
```
