# DevOps — Control de versiones con Git (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/control-de-versiones/`, `../../bash/sintaxis-de-shell/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/devops/control-de-versiones-git/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Para qué sirve

Un sistema de **control de versiones** **registra la historia** de un proyecto: **qué cambió, quién, cuándo y por qué**, y permite **volver atrás**, **comparar**, **trabajar en paralelo** y **colaborar**. **Git** es el más usado. Es **distribuido**: cada persona tiene **una copia completa** del repositorio con toda su historia.

**Git** no es **GitHub**: Git es la **herramienta**; GitHub, GitLab o Bitbucket son **servicios** que alojan repositorios remotos.

---

## 2. Los tres lugares

| Lugar | Qué es |
|:--|:--|
| **Directorio de trabajo** | los archivos que editás |
| **Área de preparación** (*staging*, *index*) | lo que **se va a incluir** en el próximo commit |
| **Repositorio** (`.git`) | la historia de **commits** guardados |

Flujo: **editar → `git add` → `git commit`**.

---

## 3. Comandos básicos

```bash
git init                         # crear un repositorio
git clone <url>                  # copiar uno existente
git status                       # estado actual
git add archivo.txt              # preparar un archivo
git add .                        # preparar todo (con cuidado)
git commit -m "Agrega la validación del formulario"
git log --oneline                # historia resumida
git diff                         # cambios sin preparar
git diff --staged                # cambios preparados
```

- **Commit:** una **foto** del proyecto en un momento, con un **mensaje** que explique **qué y por qué**.
- **Mensajes claros**: "Corrige el cálculo del total con descuento", no "arreglos".
- **Commits pequeños y con un propósito**: más fáciles de entender y de revertir.
- **Identidad:** `git config user.name` y `user.email`.

---

## 4. Ramas

Una **rama** es una **línea de desarrollo** independiente. Permite **trabajar en algo nuevo** sin afectar la versión estable.

```bash
git branch                       # listar
git switch -c nueva-funcion      # crear y pasar a una rama
git switch main                  # volver a main
git merge nueva-funcion          # integrar la rama en la actual
git branch -d nueva-funcion      # borrar la rama ya integrada
```

- La rama principal suele llamarse **`main`** (o `master`).
- **Una rama por tarea.**
- **`merge`** une historias; a veces ocurre un **conflicto**.

---

## 5. Conflictos

Un **conflicto** ocurre cuando **dos cambios tocan las mismas líneas** y Git **no puede decidir**. Git marca el archivo:

```
<<<<<<< HEAD
versión de tu rama
=======
versión de la otra rama
>>>>>>> nueva-funcion
```

Se **edita** el archivo, se **elige o combina** lo correcto, se **borran las marcas**, y se hace `git add` y `git commit`. **No es un error**: es un trabajo de decisión humana. **Integrar seguido** reduce los conflictos.

---

## 6. Repositorios remotos

```bash
git remote -v                    # ver remotos
git fetch                        # traer novedades (sin mezclar)
git pull                         # traer y mezclar (fetch + merge)
git push origin nueva-funcion    # subir una rama
```

- **`origin`** es el nombre habitual del remoto.
- **Antes de subir**, traer los cambios de los demás (`git pull`).
- **`git push --force`** **reescribe** la historia remota: **evitarlo** en ramas compartidas.
- **Pull request / merge request:** propuesta de integrar una rama, con **revisión** de código y **discusión**.

---

## 7. Deshacer cosas

| Situación | Qué se usa |
|:--|:--|
| descartar cambios **sin preparar** de un archivo | `git restore archivo` |
| sacar un archivo del **área de preparación** | `git restore --staged archivo` |
| **corregir el último commit** (aún no subido) | `git commit --amend` |
| **deshacer un commit ya publicado** | `git revert <commit>` (crea un commit inverso) |
| guardar cambios a medias temporalmente | `git stash` y `git stash pop` |

`git reset --hard` **descarta cambios sin posibilidad de recuperarlos** fácilmente: **usarlo con mucho cuidado**.

---

## 8. `.gitignore` y secretos

- **`.gitignore`** lista lo que **no se versiona**: dependencias (`node_modules/`), archivos compilados, **archivos con claves** (`.env`), archivos temporales.
- **Nunca subir contraseñas, claves ni tokens**: aunque se borren después, **quedan en la historia**. Si ocurre, hay que **revocar** la clave (no basta con borrarla).
- **No versionar** archivos **grandes** o binarios generados.

---

## 9. Buenas prácticas

- **Commits pequeños** y **mensajes claros**.
- **Una rama por tarea**, **integrar seguido**.
- **Revisar** con `git status` y `git diff` **antes** de hacer commit.
- **Proteger** la rama principal (revisiones obligatorias).
- **Etiquetas** (`git tag v1.0.0`) para marcar versiones.
- **Convenciones de equipo** (nombres de ramas, formato de mensajes).
