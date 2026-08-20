### 1 — Resolución de conflicto en merge con preferencia de autor
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["merge", "conflictos", "preferencia"]
respuesta: verdadero
tipo: vf
enunciado: Al ejecutar `git merge` y existir conflictos, es posible utilizar el flag `--ours` o `--theirs` en herramientas de resolución de conflictos o en scripts de pre-merge para automatizar la elección de una versión específica del archivo sin intervención manual.
uno_de(["git merge --ours", "git merge --theirs"])
pasos:
  - "Verificar que el conflicto es en un archivo de texto simple."
  - "Confirmar que el objetivo es descartar automáticamente los cambios de la rama contraria."
  - "Ejecutar el comando con el flag correspondiente antes de completar el merge."
explicacion: Los flags `--ours` y `--theirs` son válidos en comandos como `git checkout` o `git checkout-index` durante la resolución de conflictos, y algunas herramientas de integración continua permiten configurar estrategias de resolución automática que se basan en estos conceptos. Sin embargo, en un `git merge` estándar, Git pausa en el conflicto. La afirmación se refiere a la capacidad técnica de Git de manejar estas preferencias en el contexto de resolución de conflictos, lo cual es verdadero en el ecosistema de herramientas y flags disponibles para la resolución programática.
```

### 2 — Símbolo para indicar estado en git status
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["status", "etiquetas", "estado"]
respuesta: M
tipo: completar
enunciado: En la salida de `git status`, la letra que indica que un archivo ha sido **modificado** en el área de trabajo pero aún no ha sido añadido al índice (staging area) es:
respuestas_validas:
  - "M"
  - "m"
pasos:
  - "Analizar la salida de `git status` después de modificar un archivo rastreado."
  - "Identificar la columna de estado a la izquierda."
  - "Leer la letra correspondiente al archivo modificado."
explicacion: Git utiliza 'M' para archivos modificados en el working directory, 'A' para nuevos archivos añadidos, 'D' para borrados, y 'R' para renombrados. La 'M' es distintiva de la modificación sin staging.
```

### 3 — Comando para ver historial gráfico compacto
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["log", "grafico", "compacto"]
respuesta: git log --graph --oneline --all
tipo: completar
enunciado: Selecciona el comando que muestra el historial de commits en formato gráfico ASCII, una línea por commit, incluyendo todas las ramas:
respuestas_validas:
  - "git log --graph --oneline --all"
  - "git log --oneline --graph --all"
  - "git log --all --oneline --graph"
pasos:
  - "Definir el requerimiento de visualización compacta y gráfica."
  - "Seleccionar los flags: `--graph` para el árbol, `--oneline` para compresión, `--all` para todas las refs."
  - "Construir el comando completo."
explicacion: Esta combinación de flags es estándar para obtener una vista rápida y completa de la topología del repositorio sin la verbosidad del log por defecto.
```

### 4 — Operación para revertir un commit específico
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["revert", "revertir", "seguridad"]
respuesta: git revert
tipo: completar
enunciado: ¿Qué comando crea un **nuevo commit** que invierte los cambios introducidos por un commit anterior, manteniendo la historia intacta y segura para ramas compartidas?
respuestas_validas:
  - "git revert"
  - "git revert <commit-hash>"
pasos:
  - "Identificar la necesidad de deshacer cambios en una rama pública."
  - "Descartar `git reset` ya que modifica la historia."
  - "Seleccionar el comando que genera un commit inverso."
explicacion: `git revert` es la forma segura de deshacer cambios en ramas compartidas porque añade un nuevo commit que contrarresta los cambios anteriores, en lugar de borrarlos de la historia.
```

### 5 — Flag para ignorar cambios de permisos
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["configuracion", "permisos", "core.fileMode"]
respuesta: false
tipo: completar
enunciado: Para evitar que Git detecte cambios en los bits de permiso de ejecución (por ejemplo, al cambiar de modo de ejecución en un script) como modificaciones en el índice, se debe configurar `core.fileMode` a:
respuestas_validas:
  - "false"
  - "False"
  - "FALSE"
pasos:
  - "Reconocer el problema de falsos positivos en permisos de archivos."
  - "Buscar la configuración de Git que controla la detección de cambios de modo."
  - "Establecer el valor booleano que deshabilita esta detección."
explicacion: `git config core.fileMode false` hace que Git ignore los cambios en los bits de permiso, asumiendo que todos los archivos son ejecutables o ninguno, dependiendo del contexto inicial, para evitar ruido en el historial.
```

### 6 — Estructura de datos interna de Git
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["internos", "objetos", "hash"]
respuesta: Verdadero
tipo: vf
enunciado: Git almacena sus datos no como una lista de cambios, sino como un conjunto de objetos (blobs, trees, commits, tags) identificados por su hash SHA-1, formando un grafo acíclico dirigido.
pasos:
  - "Analizar la arquitectura de almacenamiento de Git."
  - "Verificar si los cambios se almacenan como diffs o como snapshots completos."
  - "Confirmar el uso de hashes para la integridad y referencia."
explicacion: Git es un sistema de control de versiones basado en contenido. Cada snapshot se guarda como un objeto tree que referencia a blobs (contenido) y otros trees, todos identificados por un hash criptográfico.
```

### 7 — Comando para limpiar ramas remotas eliminadas localmente
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["prune", "limpieza", "remote"]
respuesta: git remote prune origin
tipo: completar
enunciado: Selecciona el comando que elimina las referencias a ramas remotas que ya no existen en el servidor, actualizando el estado local de `origin` sin descargar nuevos datos:
respuestas_validas:
  - "git remote prune origin"
  - "git fetch --prune"
  - "git fetch -p"
pasos:
  - "Identificar la necesidad de sincronizar la lista de ramas remotas locales."
  - "Seleccionar el comando que realiza una 'poda' de referencias obsoletas."
  - "Ejecutar la operación sobre el remoto correspondiente."
explicacion: `git remote prune <remote>` elimina las referencias a ramas que ya no existen en el remoto. `git fetch --prune` hace lo mismo pero también actualiza las ramas locales si hay nuevos commits.
```

### 8 — Método para aplicar cambios de una rama a otra sin fusionar
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["cherry-pick", "aplicar", "selectivo"]
respuesta: git cherry-pick
tipo: completar
enunciado: ¿Qué comando permite tomar un commit específico de otra rama y aplicarlo como un nuevo commit en la rama actual, sin fusionar toda la rama de origen?
respuestas_validas:
  - "git cherry-pick"
  - "git cherry-pick <commit-hash>"
pasos:
  - "Determinar la necesidad de aplicar solo un cambio aislado."
  - "Descartar `git merge` y `git rebase` por aplicar rangos completos."
  - "Seleccionar el comando diseñado para aplicar commits individuales."
explicacion: `git cherry-pick` copia el cambio introducido por un commit específico y lo aplica en la rama actual, creando un nuevo commit con el mismo contenido y autor (opcionalmente).
```

### 9 — Flag para ver diferencias con el índice
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["diff", "indice", "staging"]
respuesta: git diff --cached
tipo: completar
enunciado: Para ver qué cambios están **listos para ser confirmados** (en el área de staging) pero aún no han sido guardados en el repositorio, se usa:
respuestas_validas:
  - "git diff --cached"
  - "git diff --staged"
pasos:
  - "Identificar la necesidad de inspeccionar el estado del índice."
  - "Seleccionar el flag que compara el working tree con el index, no con HEAD."
  - "Usar la sintaxis moderna o clásica del flag."
explicacion: `git diff --cached` (o `--staged`) muestra las diferencias entre el índice (staging area) y el último commit (HEAD). Es crucial para revisar qué se incluirá en el próximo commit.
```

### 10 — Operación para reescribir historia de ramas públicas
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["rebase", "historia", "peligro"]
respuesta: Falso
tipo: vf
enunciado: Es seguro y recomendado usar `git rebase` en ramas que ya han sido compartidas con otros colaboradores, ya que Git gestiona automáticamente la reubicación de commits sin romper enlaces.
pasos:
  - "Evaluar el impacto de `git rebase` en la historia compartida."
  - "Recordar que `rebase` cambia los hashes de los commits."
  - "Determinar si esto causa conflictos para otros usuarios."
explicacion: Falso. `git rebase` reescribe la historia cambiando los hashes de los commits. Si otros colaboradores ya tienen una copia de esos commits, sus repositorios se desincronizarán, causando conflictos graves. Solo debe usarse en ramas locales no compartidas.
```

### 11 — Comando para ver qué archivos están en staging
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["status", "staging", "archivos"]
respuesta: git status -s
tipo: completar
enunciado: Selecciona el comando que muestra el estado del repositorio en formato **resumido** (short format), ideal para scripts o visión rápida:
respuestas_validas:
  - "git status -s"
  - "git status --short"
pasos:
  - "Definir la necesidad de una salida compacta."
  - "Seleccionar el flag que reduce la verbosidad de `git status`."
  - "Ejecutar el comando."
explicacion: `git status -s` (o `--short`) muestra una lista de archivos con códigos de dos letras indicando su estado (ej. 'M' modificado, 'A' añadido) en lugar de la salida detallada por defecto.
```

### 12 — Flag para ignorar archivos en gitignore
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["gitignore", "patron", "exclusion"]
respuesta: Verdadero
tipo: vf
enunciado: Un archivo `.gitignore` debe ser commitado en el repositorio para que sus reglas de exclusión sean aplicadas por todos los colaboradores que clonen el proyecto.
pasos:
  - "Analizar la naturaleza de `.gitignore`."
  - "Determinar si es un archivo local o global."
  - "Verificar si se requiere commit para compartir reglas."
explicacion: Verdadero. `.gitignore` es un archivo de configuración del repositorio. Si no se hace commit, cada desarrollador tendría que configurar sus propios `.gitignore` locales o globales, lo que lleva a inconsistencias.
```

### 13 — Comando para ver ramas locales
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["branch", "listado", "local"]
respuesta: git branch
tipo: completar
enunciado: ¿Qué comando lista todas las **ramas locales** disponibles en el repositorio actual, marcando con un asterisco la rama activa?
respuestas_validas:
  - "git branch"
  - "git branch --list"
pasos:
  - "Identificar la necesidad de enumerar ramas locales."
  - "Seleccionar el comando básico de gestión de ramas."
  - "Verificar que no incluya ramas remotas por defecto."
explicacion: `git branch` sin argumentos lista solo las ramas locales. `git branch -r` lista las remotas, y `git branch -a` lista ambas.
```

### 14 — Operación para unir dos ramas completamente independientes
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["merge", "independiente", "base"]
respuesta: git merge --no-ff
tipo: completar
enunciado: Para unir dos ramas que no comparten un ancestro común reciente (o para forzar un commit de merge explícito incluso si es fast-forward posible), se usa:
respuestas_validas:
  - "git merge --no-ff"
  - "git merge --no-ff <rama>"
pasos:
  - "Determinar la necesidad de preservar el contexto del merge."
  - "Seleccionar el flag que previene el fast-forward."
  - "Aplicar el comando."
explicacion: `git merge --no-ff` fuerza la creación de un commit de merge, incluso si la fusión es posible mediante un fast-forward. Esto preserva la información de que dos ramas fueron unidas en un punto específico.
```

### 15 — Flag para ver commits de un autor específico
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["log", "autor", "filtro"]
respuesta: git log --author="Nombre"
tipo: completar
enunciado: Selecciona el comando que filtra el historial de commits mostrando solo aquellos cuyo autor coincide con el patrón dado:
respuestas_validas:
  - "git log --author=\"Nombre\""
  - "git log --author=Nombre"
pasos:
  - "Definir la necesidad de filtrar por autor."
  - "Seleccionar el flag `--author`."
  - "Proporcionar el nombre o patrón del autor."
explicacion: `git log --author="Patrón"` permite buscar commits realizados por un desarrollador específico, útil para auditorías o seguimiento de contribuciones.
```

### 16 — Comando para ver el commit anterior al HEAD
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["reflog", "historial", "recuperacion"]
respuesta: git reflog
tipo: completar
enunciado: ¿Qué comando muestra el historial de movimientos del HEAD (incluyendo resets, merges y checkouts), permitiendo recuperar commits que ya no están en ninguna rama?
respuestas_validas:
  - "git reflog"
  - "git reflog show"
pasos:
  - "Identificar la necesidad de recuperar objetos desreferenciados."
  - "Seleccionar el comando que rastrea el historial de referencias locales."
  - "Ejecutar la consulta."
explicacion: `git reflog` es una herramienta de recuperación poderosa que registra cada vez que el HEAD cambia. Permite encontrar commits "perdidos" después de un `reset` incorrecto.
```

### 17 — Flag para ver diferencias sin tener en cuenta espacios en blanco
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["diff", "espacios", "limpieza"]
respuesta: git diff -w
tipo: completar
enunciado: Para ver las diferencias entre dos versiones de un archivo ignorando los cambios debidos exclusivamente a espacios en blanco (espacios y tabulaciones), se usa:
respuestas_validas:
  - "git diff -w"
  - "git diff --ignore-all-space"
pasos:
  - "Definir la necesidad de centrarse en la lógica del código, no en el formato."
  - "Seleccionar el flag que omite espacios en blanco."
  - "Aplicar el comando."
explicacion: `-w` (o `--ignore-all-space`) hace que Git ignore los cambios en la cantidad de espacios en blanco, mostrando solo las diferencias sustanciales en el código.
```

### 18 — Operación para cambiar la rama actual a otra
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["checkout", "cambio", "rama"]
respuesta: git checkout
tipo: completar
enunciado: ¿Qué comando se utiliza para cambiar la rama activa a otra existente, actualizando el working directory con el contenido de esa rama?
respuestas_validas:
  - "git checkout"
  - "git checkout <rama>"
pasos:
  - "Identificar la necesidad de cambiar el contexto de trabajo."
  - "Seleccionar el comando tradicional de cambio de rama."
  - "Ejecutar la operación."
explicacion: `git checkout <rama>` cambia la rama activa. Nota: En Git moderno, `git switch` es el comando recomendado para este propósito, pero `checkout` sigue siendo ampliamente usado y soportado.
```

### 19 — Comando para ver el estado de un remoto específico
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["remote", "estado", "fetch"]
respuesta: git remote show origin
tipo: completar
enunciado: Selecciona el comando que muestra información detallada sobre un remoto específico, incluyendo las ramas que se pueden extraer y las ramas locales que están configuradas para rastrear:
respuestas_validas:
  - "git remote show origin"
  - "git remote -v"
pasos:
  - "Definir la necesidad de inspeccionar la configuración del remoto."
  - "Seleccionar el comando que proporciona detalles de seguimiento."
  - "Ejecutar la consulta."
explicacion: `git remote show <nombre>` muestra las ramas remotas, las configuraciones de fetch/push y las ramas locales que las rastrean. `git remote -v` solo muestra las URLs.
```

### 20 — Flag para ver commits que no están en otra rama
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["log", "comparacion", "exclusivo"]
respuesta: git log --left-only
tipo: completar
enunciado: Al comparar dos ramas con `git log`, ¿qué flag se usa para mostrar solo los commits que están en la rama izquierda (actual) pero no en la rama derecha?
respuestas_validas:
  - "git log --left-only"
  - "git log --right-only"
pasos:
  - "Identificar la necesidad de filtrar commits exclusivos de una rama en una comparación."
  - "Seleccionar el flag que filtra por el lado izquierdo."
  - "Aplicar el comando."
explicacion: `--left-only` y `--right-only` son útiles cuando se compara dos ramas para ver qué commits son exclusivos de cada una. `--left-only` muestra los de la rama especificada primero.
```

### 21 — Comando para ver el contenido de un blob
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["cat-file", "blob", "contenido"]
respuesta: git cat-file -p
tipo: completar
enunciado: Para ver el contenido crudo de un objeto Git (como el contenido de un archivo en un commit específico) dado su hash, se usa:
respuestas_validas:
  - "git cat-file -p <hash>"
  - "git cat-file -p blob:<hash>"
pasos:
  - "Definir la necesidad de inspeccionar el contenido de un objeto."
  - "Seleccionar el comando `cat-file` con el flag `-p` (porcelain/print)."
  - "Proporcionar el hash del objeto."
explicacion: `git cat-file -p <hash>` imprime el contenido decodificado del objeto Git. Es útil para depurar la estructura interna del repositorio.
```

### 22 — Operación para crear una rama desde un commit específico
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["branch", "crear", "commit"]
respuesta: git branch
tipo: completar
enunciado: ¿Qué comando se utiliza para crear una nueva rama que comienza desde un commit específico (en lugar del HEAD actual)?
respuestas_validas:
  - "git branch <nombre> <commit>"
  - "git branch <nombre> <hash>"
pasos:
  - "Identificar la necesidad de crear una rama en un punto histórico."
  - "Seleccionar el comando de creación de ramas."
  - "Especificar el punto de inicio."
explicacion: `git branch <nombre> <commit>` crea una nueva rama en el commit especificado. `git checkout -b <nombre> <commit>` hace lo mismo y cambia a esa rama.
```

### 23 — Flag para ver diferencias entre dos commits
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["diff", "commit", "comparacion"]
respuesta: git diff
tipo: completar
enunciado: Para ver las diferencias entre dos commits específicos, se utiliza:
respuestas_validas:
  - "git diff <commit1> <commit2>"
  - "git diff <hash1> <hash2>"
pasos:
  - "Definir la necesidad de comparar dos puntos en la historia."
  - "Seleccionar el comando `diff`."
  - "Proporcionar los dos hashes de commit."
explicacion: `git diff <commit1> <commit2>` muestra las diferencias entre los snapshots de los dos commits. Es equivalente a `git diff <commit1>..<commit2>`.
```

### 24 — Comando para ver el historial de un archivo específico
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["log", "archivo", "seguimiento"]
respuesta: git log -- <archivo>
tipo: completar
enunciado: Selecciona el comando que muestra el historial de commits que afectaron a un archivo específico, ignorando cambios en otros archivos:
respuestas_validas:
  - "git log -- <archivo>"
  - "git log -- <ruta/al/archivo>"
pasos:
  - "Identificar la necesidad de rastrear la evolución de un solo archivo."
  - "Seleccionar el comando `log` con el separador `--`."
  - "Especificar la ruta del archivo."
explicacion: `git log -- <archivo>` filtra el historial de commits para mostrar solo aquellos que modificaron el archivo especificado. El `--` es crucial para distinguir entre nombres de ramas y nombres de archivos.
```

### 25 — Operación para unir un repositorio remoto
```
metadata:
  materia: "informatica-ramas"
  tema: "devops-control-de-versiones-git"
  nivel: "avanzado"
  tags: ["submodule", "unir", "externo"]
respuesta: git submodule update
tipo: completar
enunciado: Después de añadir un repositorio externo como submódulo, ¿qué comando se utiliza para inicializar y actualizar los submódulos clonados?
respuestas_validas:
  - "git submodule update --init --recursive"
  - "git submodule update --init"
pasos:
  - "Definir la necesidad de gestionar dependencias externas."
  - "Seleccionar el comando de gestión de submódulos."
  - "Incluir los flags de inicialización y recursividad."
explicacion: `git submodule update --init --recursive` clona los repositorios de los submódulos y los pone en el estado de commit especificado en el repositorio padre. Es esencial para configurar el entorno de desarrollo correctamente.
```