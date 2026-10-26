# PowerShell — Servicios (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../gestion-de-procesos-powershell/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/gestion-de-servicios-powershell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un servicio

Un **servicio** es un programa que corre **en segundo plano**, sin ventana, y que suele **arrancar solo** con el sistema (el servidor web, la impresión, la actualización de Windows...). Se administran con cmdlets propios.

```powershell
Get-Service                       # todos
Get-Service Spooler               # uno por nombre
Get-Service | Where-Object Status -eq 'Running'
Get-Service -DisplayName "*actualiz*"
```

---

## 2. Propiedades

| Propiedad | Significa |
|:--|:--|
| `Name` | nombre corto interno (`Spooler`) |
| `DisplayName` | nombre descriptivo ("Cola de impresión") |
| `Status` | `Running` (en ejecución), `Stopped` (detenido), `Paused` |
| `StartType` | cómo arranca: `Automatic`, `Manual`, `Disabled` |
| `DependentServices` / `ServicesDependedOn` | quién depende de él / de quién depende |

---

## 3. Iniciar, detener y reiniciar

```powershell
Start-Service Spooler
Stop-Service Spooler
Restart-Service Spooler
Set-Service Spooler -StartupType Automatic
Suspend-Service / Resume-Service        # pausar y reanudar (si el servicio lo admite)
```

- Casi todas estas acciones requieren **PowerShell como administrador**.
- **Detener** un servicio que otros necesitan: `Stop-Service` falla (o hace falta `-Force`, que también detiene los **dependientes**). Mirá antes `(Get-Service X).DependentServices`.
- `Set-Service -StartupType Disabled` impide que arranque; **no** lo detiene si ya está en marcha.
- `-WhatIf` y `-Confirm` también funcionan.
- Un servicio **detenido pero configurado como `Automatic`** suele indicar un problema (un servicio que falló al iniciar).

---

## 4. Diagnóstico

```powershell
Get-Service | Where-Object { $_.StartType -eq 'Automatic' -and $_.Status -ne 'Running' }
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 10    # últimos errores
Get-Service | Group-Object Status
```

- Los registros del sistema (Visor de eventos) explican por qué un servicio falló: `Get-WinEvent` y `Get-EventLog` (Windows PowerShell).
- Un servicio no es un proceso: cada servicio **corre dentro de un proceso** (a veces compartido con otros).
- En Linux, estos cmdlets no existen (`Get-Service` solo funciona en Windows): se usa `systemctl`.
- **Antes de cambiar** un servicio, anotá su estado original para poder volver atrás, y evitá deshabilitar servicios del sistema que no conocés (seguridad, red, actualización).
