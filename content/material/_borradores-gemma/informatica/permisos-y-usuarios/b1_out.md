### 1 — Concepto de Permisos
```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "conceptos"]

respuesta: "permisos"
tipo: completar
respuestas_validas: ["permisos"]

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
  opciones: [["lectura", "escritura", "ejecución"], ["lectura", "escritura", "modificación"], ["lectura", "escritura", "borrado"]]
  idx: uno_de([0, 1])

respuesta: opciones[idx][2]
tipo: mc
opciones_explicitas: ["lectura", "escritura", "modificación", "ejecución"]

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

variables:
  escenario: [["Usuario común", "Grupo", "Propietario"], ["Usuario común", "Propietario", "Grupo"], ["Usuario común", "Grupo", "Administrador"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][2]
tipo: ordenar

opciones_explicitas: ["Usuario común", "Grupo", "Propietario"]

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