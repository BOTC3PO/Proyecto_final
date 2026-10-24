# PowerShell — Scripts .ps1 y automatización (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../politicas-de-ejecucion/` y `../funciones-powershell/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/automatizacion-ps1/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Un script .ps1

Un **script** es un archivo `.ps1` con comandos. Se ejecuta desde su carpeta con `.\script.ps1` (el `.\` es necesario: la carpeta actual no se busca por defecto) y se rige por la **política de ejecución**.

```powershell
param(
    [Parameter(Mandatory)] [string]$Origen,
    [string]$Destino = "$HOME\Respaldo"
)

Write-Output "Copiando $Origen a $Destino"
Copy-Item -Path $Origen -Destination $Destino -Recurse
```

Se llama: `.\respaldar.ps1 -Origen C:\Datos`. Un bloque `param` al principio recibe los argumentos; `$args` guarda los extras. Útiles: `$PSScriptRoot` (la carpeta del script) y `$MyInvocation`.

---

## 2. Manejo de errores

Hay errores que **terminan** y otros que **no**. Para capturar los que no terminan se usa `-ErrorAction Stop` y un bloque `try/catch`:

```powershell
try {
    Get-Content C:\no-existe.txt -ErrorAction Stop
}
catch {
    Write-Warning "No se pudo leer: $($_.Exception.Message)"
}
finally {
    "Siempre se ejecuta"
}
```

- `$ErrorActionPreference = 'Stop'` hace que **todos** los errores sean terminantes.
- `$Error` guarda la lista de errores recientes; `$_` dentro de `catch` es el error actual.
- `Start-Transcript` guarda en un archivo todo lo que pasa en la sesión; `Write-Verbose` y `Write-Debug` ayudan a seguir un script.

---

## 3. Tareas programadas

En Windows, el **Programador de tareas** ejecuta scripts a horarios fijos. Desde PowerShell:

```powershell
$accion  = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-File C:\Scripts\respaldar.ps1"
$trigger = New-ScheduledTaskTrigger -Daily -At 3am
Register-ScheduledTask -TaskName "Respaldo" -Action $accion -Trigger $trigger
```

Pautas: **rutas absolutas**, **registrar la salida** en un archivo (`Start-Transcript` o `Out-File`), usar una cuenta con los permisos justos y **probar a mano** antes. En Linux la tarea se programa con cron.

---

## 4. Buenas prácticas

- Un **propósito** por script, con **parámetros** en lugar de valores fijos y **validación** (`[ValidateScript({ Test-Path $_ })]`).
- Usar **nombres completos** de cmdlets (sin alias) y **comentarios**.
- Probar con **`-WhatIf`**: `[CmdletBinding(SupportsShouldProcess)]` y `if ($PSCmdlet.ShouldProcess(...))`.
- No guardar **contraseñas** en el script (usar `Get-Credential`, un almacén de secretos o variables de entorno).
- `Set-StrictMode -Version Latest` atrapa errores de variables no definidas.
