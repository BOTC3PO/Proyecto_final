# PowerShell — Ayuda y descubrimiento de comandos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../sintaxis-verbo-sustantivo/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/get-help-y-descubribilidad/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. PowerShell se explica solo

No hace falta memorizar los cmdlets: se **descubren** con tres comandos.

| Cmdlet | Para qué |
|:--|:--|
| `Get-Command` | encontrar comandos |
| `Get-Help` | leer la ayuda de un comando |
| `Get-Member` | ver qué tiene un objeto |

---

## 2. Get-Command: buscar

```powershell
Get-Command *process*            # comandos con "process" en el nombre
Get-Command -Verb Get -Noun Process
Get-Command -Module Microsoft.PowerShell.Management
```

Acepta comodines (`*`). Con `-Verb` y `-Noun` filtra por las dos partes del nombre.

---

## 3. Get-Help: leer la ayuda

```powershell
Get-Help Get-Process              # resumen
Get-Help Get-Process -Examples    # ejemplos (lo más útil)
Get-Help Get-Process -Full        # todo
Get-Help Get-Process -Parameter Name
Get-Help Get-Process -Online      # abre la página web
Update-Help                       # descarga la ayuda actualizada (como administrador)
Get-Help about_*                  # temas conceptuales
```

En la ayuda, un parámetro entre **corchetes** `[-Name]` es **opcional**; el que no los tiene es **obligatorio**. `Get-Help` también acepta `man Get-Process` o `Get-Process -?`.

---

## 4. Get-Member: explorar objetos

```powershell
Get-Process | Get-Member
Get-Process | Get-Member -MemberType Property
(Get-Process)[0] | Select-Object *     # todas las propiedades de un objeto
```

`Get-Member` muestra el **tipo** del objeto, sus **propiedades** (datos) y sus **métodos** (acciones). Es la forma de saber **qué propiedad** usar en `Where-Object` o `Select-Object`.

---

## 5. Otras ayudas

- `Get-Alias` y `Get-Alias -Definition Get-ChildItem` (qué alias tiene un comando).
- `Get-Module -ListAvailable` y `Import-Module` para módulos.
- `Show-Command` abre una ventana para armar un comando.
- **Tab** completa nombres y parámetros; `Ctrl + Espacio` los lista.
- `$PSVersionTable` muestra la versión de PowerShell.
- Una buena práctica: ante un cmdlet nuevo, primero `Get-Help nombre -Examples`.
