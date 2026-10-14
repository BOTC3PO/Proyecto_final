# PowerShell — Sintaxis verbo-sustantivo (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/variables-y-tipos-de-dato/` y `../../../informatica/sistema-de-archivos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/sintaxis-verbo-sustantivo/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es PowerShell

**PowerShell** es una shell y un lenguaje de scripts de Microsoft, disponible en Windows, Linux y macOS. A diferencia de Bash, que pasa **texto** entre comandos, PowerShell pasa **objetos** (con propiedades y métodos). Sus comandos se llaman **cmdlets** (se pronuncia *command-lets*).

---

## 2. Nombres con la forma Verbo-Sustantivo

Todo cmdlet se llama **Verbo-Sustantivo**: qué hace y sobre qué.

| Cmdlet | Hace |
|:--|:--|
| `Get-Process` | obtiene los procesos |
| `Get-ChildItem` | lista el contenido de una carpeta |
| `Set-Location` | cambia de carpeta |
| `New-Item` | crea un archivo o carpeta |
| `Remove-Item` | borra |
| `Get-Content` | lee un archivo |
| `Write-Output` | escribe en la salida |

Los verbos son siempre de una lista estándar (`Get`, `Set`, `New`, `Remove`, `Start`, `Stop`, `Copy`, `Move`...). `Get-Verb` los lista. **No distingue mayúsculas** (`get-process` funciona).

Muchos tienen **alias** cortos: `ls`, `dir` y `gci` son `Get-ChildItem`; `cd` es `Set-Location`; `cat` es `Get-Content`; `cp`, `mv`, `rm`. Los alias sirven en la consola, pero en los **scripts** conviene el nombre completo.

---

## 3. Parámetros

Los parámetros empiezan con **guion** y llevan su valor: `Get-ChildItem -Path C:\Datos -Filter *.txt -Recurse`. Se pueden **abreviar** mientras no sean ambiguos (`-Rec`) y algunos son de **posición**: `Get-ChildItem C:\Datos`. Un parámetro de tipo **interruptor** (*switch*) no lleva valor: `-Recurse`, `-Force`.

Tres parámetros comunes a casi todos: `-WhatIf` (muestra qué haría **sin hacerlo**), `-Confirm` (pide confirmación) y `-Verbose` (muestra más detalle).

---

## 4. Variables y tipos

- Las variables empiezan con `$`: `$nombre = "Ana"`; se asignan con `=` (con o sin espacios).
- Entre **comillas dobles** se interpolan las variables (`"Hola $nombre"`); entre **simples** es texto literal (`'Hola $nombre'`). Para propiedades: `"$($obj.Nombre)"`.
- Los tipos se infieren y se pueden fijar: `[int]$edad = 18`. Los arreglos son `@(1,2,3)`; las tablas hash, `@{Nombre="Ana"; Edad=18}`.
- Los comentarios empiezan con `#` (y `<# ... #>` para bloques).
- Variables automáticas: `$_` (el objeto actual de la tubería), `$true`, `$false`, `$null`, `$PSVersionTable`, `$?` (¿terminó bien el último comando?), `$LASTEXITCODE`.

---

## 5. Cómo se ve el resultado

Cada cmdlet devuelve **objetos**; la consola los muestra como tabla o lista. Para mirarlos de otra forma: `Format-Table`, `Format-List`, `Out-String`. Para saber qué contiene un objeto: `Get-Member`.
