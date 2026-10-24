### 1 — Permisos de lectura en Linux
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos"]

variables:
  escenario: uno_de([["archivo_secreto.txt", "600"], ["config.sys", "644"], ["script.sh", "755"]])
  idx: uno_de([0, 1, 2])

enunciado: "Se desea que el archivo {escenario[idx][0]} tenga permisos donde el dueño tenga lectura y escritura, pero nadie más tenga acceso. El modo octal correspondiente es ___."

respuestas_validas:
  - "600"

respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  En sistemas tipo Unix, el primer dígito (6) representa al dueño (lectura=4 + escritura=2), el segundo (0) al grupo y el tercero (0) a otros.
```

### 2 — El usuario Root
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

### 3 — Identificación de permisos (Octal)
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["permisos", "octal"]

variables:
  caso: uno_de([["rwx r-- ---", "754"], ["rw- r-- r--", "644"], ["rwx rwx ---", "770"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si un comando 'ls -l' muestra que un archivo tiene los permisos {caso[idx][0]}, ¿cuál es su representación en formato octal?"

opciones_explicitas:
  - "754"
  - "644"
  - "770"

respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Cada bloque de tres caracteres (dueño, grupo, otros) se suma: r=4, w=2, x=1.
```

### 4 — Flujo de creación de archivos
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

respuesta: ["Crear el archivo con el contenido necesario", "Cambiar el propietario con 'chown' si es necesario", "Restringir permisos con 'chmod 600'", "Verificar la configuración de la umask del sistema"]
tipo: ordenar

explicacion: |
  Para asegurar un recurso, primero se crea, se asegura la propiedad del dueño, se aplican los permisos restrictivos y se valida que la umask no haya aplicado permisos por defecto más abiertos.
```

### 5 — El concepto de Umask
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["umask", "permisos"]

variables:
  config: uno_de([["022", "755"], ["027", "750"], ["077", "700"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si la umask del sistema está configurada como {config[idx][0]}, un nuevo archivo creado por un usuario tendrá como permiso máximo (en modo octal) el valor ___."

respuestas_validas:
  - "755"
  - "750"
  - "700"

respuesta: config[idx][1]
tipo: completar

explicacion: |
  La umask (User Mask) se resta de los permisos base (normalmente 777 para directorios o 666 para archivos) para determinar los permisos finales.
```