# Bash — Scripts ejecutables y permisos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../funciones-en-bash/` y `../../../informatica/permisos-y-usuarios/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/scripts-ejecutables-y-permisos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un script

Un **script** es un archivo de texto con comandos de la shell. La **primera línea** suele ser el **shebang**, que indica con qué programa se ejecuta:

```bash
#!/bin/bash
echo "Hola desde un script"
```

- `#!/bin/bash` usa Bash. `#!/usr/bin/env bash` lo busca en el `PATH` (más portable).
- Sin shebang, se ejecuta con la shell actual. `#!/bin/sh` es la shell POSIX básica (sin las extensiones de Bash).

---

## 2. Ejecutarlo

Hay dos formas:

1. **Dándole permiso de ejecución:** `chmod +x script.sh` y después `./script.sh`. El `./` es necesario porque la carpeta actual no está en el `PATH`.
2. **Pasándoselo a Bash:** `bash script.sh`. No hace falta permiso de ejecución (solo de lectura).

`source script.sh` (o `. script.sh`) lo ejecuta **en la shell actual**: las variables y funciones que defina quedan disponibles después. En cambio, `./script.sh` corre en un **proceso nuevo** y se pierde todo al terminar.

Los argumentos llegan en `$1`, `$2`..., `$#` y `"$@"`. `exit N` termina el script con ese código (0 = éxito).

---

## 3. Permisos de archivos

`ls -l` muestra algo como: `-rwxr-xr-- 1 ana grupo 120 oct 5 10:00 script.sh`

- El primer carácter es el **tipo** (`-` archivo, `d` carpeta, `l` enlace).
- Después van **tres grupos de tres**: dueño (**u**), grupo (**g**) y otros (**o**), con `r` (leer), `w` (escribir), `x` (ejecutar) o `-` si no lo tienen.
- En **carpetas**, `x` significa "poder entrar" y `r` "poder listar".

**Notación numérica:** r = 4, w = 2, x = 1; se suman por grupo. `rwx` = 7, `r-x` = 5, `r--` = 4.

| Número | Significa | Uso típico |
|:--|:--|:--|
| `755` | dueño todo, los demás leer y ejecutar | scripts y programas |
| `644` | dueño lee y escribe, los demás leen | documentos |
| `700` | solo el dueño | privado |
| `600` | solo el dueño lee y escribe | claves privadas |

`chmod 755 script.sh`, o en forma simbólica: `chmod u+x script.sh` (agrega ejecutar al dueño), `chmod go-w archivo` (quita escribir a grupo y otros). `chown usuario:grupo archivo` cambia el dueño (requiere privilegios).

---

## 4. Scripts robustos

Al comienzo de un script serio se suele poner `set -euo pipefail`:

- `-e`: terminar si un comando falla.
- `-u`: error si se usa una variable no definida.
- `-o pipefail`: una tubería falla si falla **cualquier** comando, no solo el último.

Para revisar: `bash -n script.sh` verifica la sintaxis **sin ejecutar**, y `bash -x script.sh` muestra cada comando que se ejecuta (traza). `trap 'limpiar' EXIT` ejecuta una limpieza al terminar.

---

## 5. Problemas típicos

- **`Permission denied`**: falta el permiso `x` (o se intentó ejecutar una carpeta).
- **`command not found`** al escribir `script.sh`: falta el `./` (o la carpeta no está en el `PATH`).
- **`bad interpreter: No such file or directory`** y un `^M`: el archivo tiene finales de línea de Windows (CRLF); se corrige con `dos2unix` o `sed -i 's/\r$//'`.
- **Nunca** ejecutes con `sudo` un script que no leíste.
