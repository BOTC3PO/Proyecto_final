# DevOps — Control de versiones con Git (cuestionario, 27 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para registrar la historia de un proyecto y poder volver atrás y colaborar", "Para comprimir archivos", "Para compilar", "Para cifrar"]
respuesta: "Para registrar la historia de un proyecto y poder volver atrás y colaborar"

enunciado: "¿Para qué sirve un sistema de control de versiones?"

explicacion: |
  Qué cambió, quién y cuándo.
```

### 2 — Git y GitHub

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["git"]

tipo: mc
opciones_explicitas: ["Git es la herramienta; GitHub es un servicio que aloja repositorios", "Son lo mismo", "GitHub es la herramienta", "Git es un servicio web"]
respuesta: "Git es la herramienta; GitHub es un servicio que aloja repositorios"

enunciado: "¿Qué diferencia hay entre Git y GitHub?"

explicacion: |
  También existen GitLab y Bitbucket.
```

### 3 — Distribuido

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["distribuido"]

tipo: mc
opciones_explicitas: ["Que cada persona tiene una copia completa del repositorio con toda su historia", "Que está en un solo servidor", "Que no guarda historia", "Que solo funciona en línea"]
respuesta: "Que cada persona tiene una copia completa del repositorio con toda su historia"

enunciado: "¿Qué significa que Git sea distribuido?"

explicacion: |
  Se puede trabajar sin conexión.
```

### 4 — Add

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["add"]

tipo: mc
opciones_explicitas: ["Prepara el archivo para el próximo commit", "Lo borra", "Lo sube al servidor", "Lo compila"]
respuesta: "Prepara el archivo para el próximo commit"

enunciado: "¿Qué hace `git add archivo`?"

explicacion: |
  Lo coloca en el área de preparación.
```

### 5 — Commit

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["commit"]

tipo: mc
opciones_explicitas: ["Una foto del proyecto en un momento, con un mensaje", "Un archivo", "Una rama", "Un servidor"]
respuesta: "Una foto del proyecto en un momento, con un mensaje"

enunciado: "¿Qué es un commit?"

explicacion: |
  Se guarda en la historia.
```

### 6 — Flujo

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["flujo"]

tipo: mc
opciones_explicitas: ["Editar, `git add` y `git commit`", "`git commit`, editar y `git add`", "`git push` y editar", "`git clone` y `git add`"]
respuesta: "Editar, `git add` y `git commit`"

enunciado: "¿Cuál es el flujo básico?"

explicacion: |
  Primero se prepara y luego se confirma.
```

### 7 — Staging

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["staging"]

tipo: mc
opciones_explicitas: ["Lo que se incluirá en el próximo commit", "La historia", "Un servidor", "Una rama"]
respuesta: "Lo que se incluirá en el próximo commit"

enunciado: "¿Qué es el área de preparación (staging)?"

explicacion: |
  Permite elegir qué entra.
```

### 8 — Status

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["status"]

tipo: mc
opciones_explicitas: ["El estado actual: archivos modificados y preparados", "La historia completa", "Los remotos", "Los errores del código"]
respuesta: "El estado actual: archivos modificados y preparados"

enunciado: "¿Qué muestra `git status`?"

explicacion: |
  Se usa mucho.
```

### 9 — Log

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["log"]

tipo: mc
opciones_explicitas: ["Muestra la historia de commits resumida", "Borra la historia", "Sube cambios", "Crea una rama"]
respuesta: "Muestra la historia de commits resumida"

enunciado: "¿Qué hace `git log --oneline`?"

explicacion: |
  Una línea por commit.
```

### 10 — Diff

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["diff"]

tipo: mc
opciones_explicitas: ["Los cambios sin preparar", "Los commits", "Las ramas", "Los remotos"]
respuesta: "Los cambios sin preparar"

enunciado: "¿Qué muestra `git diff`?"

explicacion: |
  Con `--staged` muestra los preparados.
```

### 11 — Mensaje

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["mensajes"]

tipo: mc
opciones_explicitas: ["\"Corrige el cálculo del total con descuento\"", "\"arreglos\"", "\"cambios\"", "\"asdf\""]
respuesta: "\"Corrige el cálculo del total con descuento\""

enunciado: "¿Cuál es un buen mensaje de commit?"

explicacion: |
  Debe explicar qué y por qué.
```

### 12 — Commits chicos

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["commits"]

tipo: mc
opciones_explicitas: ["Son más fáciles de entender y de revertir", "Ocupan menos", "Es obligatorio", "Son más rápidos"]
respuesta: "Son más fáciles de entender y de revertir"

enunciado: "¿Por qué conviene hacer commits pequeños y con un propósito?"

explicacion: |
  Facilita la revisión.
```

### 13 — Rama

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["ramas"]

tipo: mc
opciones_explicitas: ["Una línea de desarrollo independiente", "Un archivo", "Una carpeta", "Un servidor"]
respuesta: "Una línea de desarrollo independiente"

enunciado: "¿Qué es una rama?"

explicacion: |
  Permite trabajar sin afectar la versión estable.
```

### 14 — Crear rama

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["switch"]

tipo: mc
opciones_explicitas: ["Crea la rama y pasa a ella", "Borra la rama", "La une", "La sube"]
respuesta: "Crea la rama y pasa a ella"

enunciado: "¿Qué hace `git switch -c nueva-funcion`?"

explicacion: |
  Antes se usaba `git checkout -b`.
```

### 15 — Merge

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["merge"]

tipo: mc
opciones_explicitas: ["Integra esa rama en la actual", "Borra la rama", "Crea otra", "Sube cambios"]
respuesta: "Integra esa rama en la actual"

enunciado: "¿Qué hace `git merge nueva-funcion`?"

explicacion: |
  Puede producir conflictos.
```

### 16 — Conflicto

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["conflictos"]

tipo: mc
opciones_explicitas: ["Cuando dos cambios tocan las mismas líneas y Git no puede decidir", "Cuando falta un archivo", "Cuando hay mucha historia", "Cuando no hay internet"]
respuesta: "Cuando dos cambios tocan las mismas líneas y Git no puede decidir"

enunciado: "¿Cuándo ocurre un conflicto?"

explicacion: |
  Se resuelve a mano.
```

### 17 — Resolver

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["conflictos"]

tipo: mc
opciones_explicitas: ["Editando el archivo, eligiendo lo correcto, borrando las marcas y confirmando", "Borrando el archivo", "Ignorándolo", "Reinstalando Git"]
respuesta: "Editando el archivo, eligiendo lo correcto, borrando las marcas y confirmando"

enunciado: "¿Cómo se resuelve un conflicto?"

explicacion: |
  Luego `git add` y `git commit`.
```

### 18 — Fetch

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["fetch"]

tipo: mc
opciones_explicitas: ["Trae las novedades del remoto sin mezclarlas", "Mezcla", "Sube", "Borra"]
respuesta: "Trae las novedades del remoto sin mezclarlas"

enunciado: "¿Qué hace `git fetch`?"

explicacion: |
  `pull` hace fetch y merge.
```

### 19 — Pull

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["pull"]

tipo: mc
opciones_explicitas: ["Trae las novedades y las mezcla", "Solo las trae", "Las sube", "Las borra"]
respuesta: "Trae las novedades y las mezcla"

enunciado: "¿Qué hace `git pull`?"

explicacion: |
  Equivale a fetch más merge.
```

### 20 — Push

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["push"]

tipo: mc
opciones_explicitas: ["Sube los commits al remoto", "Los trae", "Los borra", "Crea una rama local"]
respuesta: "Sube los commits al remoto"

enunciado: "¿Qué hace `git push`?"

explicacion: |
  Antes conviene hacer pull.
```

### 21 — Force

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["force"]

tipo: mc
opciones_explicitas: ["Porque reescribe la historia remota y puede borrar el trabajo de otros", "Porque es lento", "Porque es largo", "Porque no funciona"]
respuesta: "Porque reescribe la historia remota y puede borrar el trabajo de otros"

enunciado: "¿Por qué se evita `git push --force` en ramas compartidas?"

explicacion: |
  Existen alternativas más seguras.
```

### 22 — Revert

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["revert"]

tipo: mc
opciones_explicitas: ["Crea un nuevo commit que deshace el efecto de otro", "Borra la historia", "Borra la rama", "Sube cambios"]
respuesta: "Crea un nuevo commit que deshace el efecto de otro"

enunciado: "¿Qué hace `git revert <commit>`?"

explicacion: |
  Es seguro para commits ya publicados.
```

### 23 — Restore

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["restore"]

tipo: mc
opciones_explicitas: ["Descarta los cambios sin preparar de ese archivo", "Lo borra del repositorio", "Lo sube", "Lo prepara"]
respuesta: "Descarta los cambios sin preparar de ese archivo"

enunciado: "¿Qué hace `git restore archivo`?"

explicacion: |
  Cuidado: no se recupera.
```

### 24 — Reset hard

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "avanzado"
  tags: ["reset"]

tipo: mc
opciones_explicitas: ["Descarta cambios sin una forma fácil de recuperarlos", "Es lento", "Cambia el nombre", "Crea ramas"]
respuesta: "Descarta cambios sin una forma fácil de recuperarlos"

enunciado: "¿Por qué `git reset --hard` es peligroso?"

explicacion: |
  Se usa con mucho cuidado.
```

### 25 — Gitignore

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["gitignore"]

tipo: mc
opciones_explicitas: ["Lo que no se debe versionar", "Los autores", "Las ramas", "Los commits"]
respuesta: "Lo que no se debe versionar"

enunciado: "¿Qué lista el archivo `.gitignore`?"

explicacion: |
  Por ejemplo, `node_modules/` y `.env`.
```

### 26 — Secretos

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "basico"
  tags: ["secretos"]

tipo: mc
opciones_explicitas: ["Revocarla, porque quedó en la historia", "Nada, ya se borró", "Esperar", "Cambiar el nombre"]
respuesta: "Revocarla, porque quedó en la historia"

enunciado: "Se subió una clave por error y luego se borró. ¿Qué hay que hacer?"

explicacion: |
  Cualquiera con acceso al historial puede verla.
```

### 27 — Tags

```
metadata:
  materia: "devops"
  tema: "control_de_versiones_git"
  nivel: "intermedio"
  tags: ["tags"]

tipo: mc
opciones_explicitas: ["Para marcar versiones, como `v1.0.0`", "Para borrar", "Para comentar", "Para ordenar"]
respuesta: "Para marcar versiones, como `v1.0.0`"

enunciado: "¿Para qué sirven las etiquetas (`git tag`)?"

explicacion: |
  Se usan en lanzamientos.
```

