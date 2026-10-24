### 1 — El bit de ejecución en directorios
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

### 2 — Confusión entre Dueño y Grupo
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "usuarios", "grupos"]

variables:
  escenario: uno_de([
    ["archivo_A", "usuario_1", "grupo_admin"],
    ["archivo_B", "usuario_2", "grupo_staff"],
    ["archivo_C", "usuario_3", "grupo_dev"]
  ])

tipo: vf
respuesta: falso

enunciado: "Si el archivo {escenario[0]} tiene como dueño a {escenario[1]} y pertenece al grupo {escenario[2]}, cualquier usuario que pertenezca al grupo {escenario[2]} tiene automáticamente todos los permisos de lectura, escritura y ejecución sobre el archivo, independientemente de los permisos asignados al grupo."

explicacion: |
  Falso. El hecho de pertenecer al grupo otorga los permisos definidos para el 'grupo' en la máscara de permisos (rwx), pero estos pueden estar limitados (por ejemplo, solo lectura).
```

### 3 — El orden de evaluación de permisos
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

### 4 — Privilegios de Superusuario
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "root", "sudo"]

tipo: completar
respuestas_validas: ["root", "superuser", "administrador"]

enunciado: "En sistemas operativos basados en Linux, el usuario que posee todos los privilegios del sistema y puede saltarse cualquier restricción de permisos es conocido como ___."

respuesta: "root"

explicacion: |
  El usuario 'root' es la cuenta de superusuario por excelencia. Aunque en contextos generales se le llame administrador, el nombre técnico del usuario con UID 0 es root.
```

### 5 — Secuencia de cambio de permisos
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["comandos", "chmod", "linux"]

tipo: ordenar
opciones_explicitas: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

enunciado: "Ordena los pasos lógicos para cambiar de forma segura los permisos de un archivo crítico en un servidor de producción:"

respuesta: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

explicacion: |
  Antes de modificar permisos en entornos críticos, es vital saber qué estamos cambiando (usando `ls -l`) para evitar bloquear el acceso a servicios esenciales o dejar brechas de seguridad.
```