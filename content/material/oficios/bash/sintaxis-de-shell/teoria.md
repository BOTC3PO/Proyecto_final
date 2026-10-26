# Bash — Sintaxis de la shell (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/sistema-de-archivos/` y `../../../informatica/permisos-y-usuarios/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/sintaxis-de-shell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es la shell

La **shell** es el programa que te deja hablar con el sistema operativo escribiendo órdenes de texto. **Bash** (*Bourne Again SHell*) es la shell más usada en Linux y macOS. Cuando abrís una terminal ves un **prompt** (por ejemplo `usuario@equipo:~$`) y esperás a escribir un **comando**.

---

## 2. Cómo se arma un comando

```
comando  -opciones  argumentos
ls       -l -a      /home/ana
```

- El **comando** es lo primero (`ls`, `cd`, `echo`...).
- Las **opciones** (o *flags*) cambian lo que hace; empiezan con `-` (corta, una letra: `-l`) o `--` (larga: `--all`). Se pueden juntar: `ls -la`.
- Los **argumentos** son sobre qué trabaja (un archivo, una carpeta, un texto).
- Todo se separa con **espacios**. Un espacio de más o de menos cambia el comando: `ls-l` no existe y `ls -l` sí.
- Bash distingue **mayúsculas de minúsculas**: `LS` no es `ls`.

---

## 3. Comandos del día a día

| Comando | Hace |
|:--|:--|
| `pwd` | muestra en qué carpeta estás |
| `ls` | lista el contenido (`-l` detalle, `-a` incluye ocultos) |
| `cd carpeta` | cambia de carpeta (`cd ..` sube, `cd` solo vuelve a tu carpeta personal) |
| `echo texto` | escribe un texto en pantalla |
| `man comando` / `comando --help` | muestran la ayuda |
| `clear` | limpia la pantalla |

Los archivos y carpetas que empiezan con `.` son **ocultos** (`.bashrc`).

---

## 4. Códigos de salida y encadenado

Todo comando termina con un **código de salida**: **0 = salió bien**, **cualquier otro número = hubo un problema**. El último se guarda en la variable `$?`.

```
ls /home/ana
echo $?          # 0 si existe, 2 si no existe
```

Se pueden encadenar comandos:

- `cmd1 ; cmd2` — ejecuta los dos, siempre, uno después del otro.
- `cmd1 && cmd2` — ejecuta `cmd2` **solo si** `cmd1` salió bien (código 0).
- `cmd1 || cmd2` — ejecuta `cmd2` **solo si** `cmd1` falló.
- `cmd &` — lo ejecuta en segundo plano.

---

## 5. Comentarios y varias líneas

Lo que va después de `#` es un **comentario**: la shell lo ignora (`ls  # lista archivos`). Un comando largo se puede cortar con `\` al final de la línea. La tecla **Tab** completa nombres, y las **flechas arriba/abajo** recorren el historial.
