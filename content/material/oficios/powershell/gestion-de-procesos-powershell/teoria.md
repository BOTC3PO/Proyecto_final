# PowerShell — Procesos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../sistema-de-archivos-powershell/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/gestion-de-procesos-powershell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un proceso

Un **proceso** es un programa en ejecución. Cada uno tiene un **Id** (PID), un nombre, y consume CPU y memoria. PowerShell los trata como objetos.

```powershell
Get-Process                       # todos
Get-Process notepad               # por nombre
Get-Process -Id 1234              # por Id
Get-Process chrome, firefox       # varios
```

---

## 2. Propiedades útiles

| Propiedad | Significa |
|:--|:--|
| `Id` | número del proceso (PID) |
| `ProcessName` | nombre (sin `.exe`) |
| `CPU` | segundos de CPU usados en total (no un porcentaje) |
| `WorkingSet` | memoria física en uso, en bytes |
| `StartTime` | cuándo empezó |
| `Responding` | si responde (`$false` si está colgado) |
| `Path` | ubicación del ejecutable |

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU
Get-Process | Sort-Object WorkingSet -Descending | Select-Object -First 5 Name, @{n='MB'; e={[math]::Round($_.WorkingSet/1MB)}}
Get-Process | Where-Object { -not $_.Responding }
```

---

## 3. Iniciar y detener

```powershell
Start-Process notepad
Start-Process "C:\Programas\app.exe" -ArgumentList "-modo", "silencioso" -Wait
Stop-Process -Name notepad
Stop-Process -Id 1234
Get-Process notepad | Stop-Process
Wait-Process -Id 1234
```

- `Stop-Process` termina el proceso **de golpe** (los datos sin guardar se pierden). `-WhatIf` prueba antes y `-Confirm` pide confirmación.
- Un proceso de otro usuario o del sistema requiere **permisos de administrador**.
- `Start-Process -Verb RunAs` pide ejecutar como administrador (aparece el control de cuentas).
- Con `-PassThru`, `Start-Process` devuelve el objeto proceso para usarlo después.

---

## 4. Cuidados

- **No detengas procesos que no conocés**: algunos son del sistema (`System`, `csrss`, `winlogon`); terminar uno puede cerrar la sesión o reiniciar el equipo.
- Preferí cerrar con gracia (`$proceso.CloseMainWindow()`) y recién si no responde, `Stop-Process`.
- Si hay varios procesos con el mismo nombre (Chrome), `Stop-Process -Name` los cierra **todos**.
- Con `Get-Process` en Linux y macOS también funciona; `Get-CimInstance Win32_Process` da más detalle en Windows (línea de comando, proceso padre).
